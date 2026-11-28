document.addEventListener("DOMContentLoaded", async () => {
  const palette = document.getElementById("palette-page");
  const status = document.getElementById("palette-status");
  const bar = document.getElementById("palette-bar");
  const preview = document.getElementById("palette-preview");
  const sample = document.getElementById("palette-preview-sample");
  const nameValue = document.getElementById("palette-preview-name");
  const hexValue = document.getElementById("palette-preview-hex");
  const rgbValue = document.getElementById("palette-preview-rgb");
  const noteValue = document.getElementById("palette-preview-note");
  const copyButton = document.getElementById("palette-copy");
  const mobileLayout = window.matchMedia("(max-width: 799px)");
  const segments = [];
  let resetCopyLabel;

  function hexToRgb(hex) {
    return hex.match(/[0-9a-f]{2}/gi).map((channel) => parseInt(channel, 16));
  }

  function paletteOrder(rgb) {
    const [red, green, blue] = rgb;
    const max = Math.max(...rgb);
    const min = Math.min(...rgb);
    const chroma = max - min;
    const lightness = (max + min) / 2;

    // Keep gray and nearly gray colors together after the hue groups.
    if (chroma < 4) return { hueGroup: 12, lightness };

    let hue;
    if (max === red) {
      hue = (green - blue) / chroma;
    } else if (max === green) {
      hue = 2 + (blue - red) / chroma;
    } else {
      hue = 4 + (red - green) / chroma;
    }

    // Center 30-degree groups on the hue wheel, with red wrapping around zero.
    const hueGroup = Math.round((hue * 60 + 360) / 30) % 12;
    return { hueGroup, lightness };
  }

  function readableTextColor(rgb) {
    const [red, green, blue] = rgb.map((channel) => {
      const value = channel / 255;
      return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
    });
    const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

    // Black and white text have equal contrast at a luminance of about 0.179.
    return luminance > 0.179 ? "#000000" : "#FFFFFF";
  }

  function selectColor({ name, hex, note, rgb }, segment) {
    bar.querySelector('[aria-pressed="true"]')?.setAttribute("aria-pressed", "false");
    segment.setAttribute("aria-pressed", "true");

    preview.style.setProperty("--swatch-center", `${100 * (segments.indexOf(segment) + 0.5) / segments.length}%`);
    sample.style.backgroundColor = hex;
    sample.style.color = readableTextColor(rgb);
    nameValue.textContent = name;
    hexValue.textContent = hex;
    rgbValue.textContent = rgb.join(" ");
    noteValue.textContent = typeof note === "string" ? note.trim() : "";
    noteValue.hidden = !noteValue.textContent;

    clearTimeout(resetCopyLabel);
    copyButton.textContent = "Copy HEX";
    status.textContent = "";
  }

  status.textContent = "Loading colors…";

  try {
    const response = await fetch(palette.dataset.source);
    if (!response.ok) throw new Error(`Palette request failed (${response.status})`);

    const colors = await response.json();
    if (!Array.isArray(colors) || colors.some((color) =>
      typeof color?.name !== "string" || !color.name.trim() ||
      typeof color.hex !== "string" || !/^#[0-9a-f]{6}$/i.test(color.hex)
    )) {
      throw new Error("Invalid palette data");
    }
    if (colors.length === 0) {
      status.textContent = "There are no colors in this palette yet.";
      return;
    }

    const orderedColors = colors.map((color) => {
      const rgb = hexToRgb(color.hex);
      return { ...color, rgb, ...paletteOrder(rgb) };
    }).sort((first, second) =>
      first.hueGroup - second.hueGroup || second.lightness - first.lightness
    );

    for (const color of orderedColors) {
      const segment = document.createElement("button");
      segment.type = "button";
      segment.className = "color-palette-segment";
      segment.style.setProperty("--swatch-color", color.hex);
      segment.style.color = readableTextColor(color.rgb);
      segment.setAttribute("aria-label", `${color.name} (${color.hex})`);
      segment.setAttribute("aria-pressed", "false");
      segment.addEventListener("click", () => selectColor(color, segment));
      segments.push(segment);
    }

    const rowSize = Math.ceil(segments.length / 2);
    for (let start = 0; start < segments.length; start += rowSize) {
      const row = document.createElement("div");
      row.className = "color-palette-row";
      row.append(...segments.slice(start, start + rowSize));
      bar.append(row);
    }

    function magnify(activeIndex, offset = 0) {
      if (mobileLayout.matches) return;
      segments.forEach((segment, index) => {
        const distance = Math.min(Math.abs(index - activeIndex - offset), 2);
        const proximity = (1 + Math.cos(distance * Math.PI / 2)) / 2;
        segment.style.setProperty("--proximity", proximity.toFixed(3));
      });
    }

    function clearMagnification() {
      segments.forEach(segment => segment.style.removeProperty("--proximity"));
    }

    function trackPointer(event) {
      if (!event.isPrimary) return;
      const segment = document.elementFromPoint(event.clientX, event.clientY);
      const index = segments.indexOf(segment);
      if (index < 0) return clearMagnification();
      const { left, width } = segment.getBoundingClientRect();
      magnify(index, (event.clientX - left) / width - 0.5);
    }

    bar.addEventListener("pointermove", trackPointer);
    bar.addEventListener("pointerdown", event => {
      if (event.pointerType !== "touch" || !event.isPrimary) return;
      bar.setPointerCapture(event.pointerId);
      trackPointer(event);
    });
    bar.addEventListener("pointerup", event => {
      if (event.pointerType !== "touch" || !event.isPrimary) return;
      // Touch capture lets a swipe select the swatch where the finger lifts.
      const segment = document.elementFromPoint(event.clientX, event.clientY);
      if (segments.includes(segment)) segment.click();
      clearMagnification();
    });
    bar.addEventListener("pointerleave", clearMagnification);
    bar.addEventListener("pointercancel", clearMagnification);
    bar.addEventListener("focusin", event => {
      if (event.target.matches(":focus-visible")) magnify(segments.indexOf(event.target));
    });
    bar.addEventListener("focusout", clearMagnification);

    const defaultIndex = orderedColors.findIndex(color => color.default === true);
    const selectedIndex = Math.max(defaultIndex, 0);
    selectColor(orderedColors[selectedIndex], segments[selectedIndex]);
    bar.hidden = false;
    preview.hidden = false;

    // Balance the mobile rows so a single swatch isn't stranded on the last line.
    new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      if (!mobileLayout.matches || !width) return;
      const size = segments[0].getBoundingClientRect().width;
      const minGap = parseFloat(getComputedStyle(bar).rowGap);
      const capacity = Math.max(1, Math.floor((width + minGap) / (size + minGap)));
      const rows = Math.ceil(segments.length / capacity);
      const columns = Math.ceil(segments.length / rows);
      const gap = columns > 1 ? (width - columns * size) / (columns - 1) : minGap;
      bar.style.setProperty("--column-gap", `${Math.floor(gap)}px`);
    }).observe(bar);

    copyButton.addEventListener("click", async () => {
      const hex = hexValue.textContent;
      let label;
      let errorMessage = "";
      try {
        await navigator.clipboard.writeText(hex);
        label = "Copied";
      } catch {
        label = "Copy failed";
        errorMessage = `Select ${hex} in the preview to copy it manually.`;
      }

      if (hex !== hexValue.textContent) return;
      copyButton.textContent = label;
      status.textContent = errorMessage;
      clearTimeout(resetCopyLabel);
      resetCopyLabel = setTimeout(() => {
        copyButton.textContent = "Copy HEX";
      }, 1800);
    });
  } catch {
    status.textContent = "Could not load the color palette.";
  }
});
