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
      segment.style.backgroundColor = color.hex;
      segment.style.color = readableTextColor(color.rgb);
      segment.setAttribute("aria-label", `${color.name} (${color.hex})`);
      segment.setAttribute("aria-pressed", "false");
      segment.addEventListener("click", () => selectColor(color, segment));
      bar.append(segment);
    }

    const defaultIndex = orderedColors.findIndex(({ name }) =>
      name.trim().toLowerCase() === "light magnenta"
    );
    const selectedIndex = Math.max(defaultIndex, 0);
    selectColor(orderedColors[selectedIndex], bar.children[selectedIndex]);
    bar.hidden = false;
    preview.hidden = false;

    copyButton.addEventListener("click", async () => {
      const hex = hexValue.textContent;
      let label;
      let message;
      try {
        await navigator.clipboard.writeText(hex);
        label = "Copied";
        message = `Copied ${hex}.`;
      } catch {
        label = "Copy failed";
        message = `Select ${hex} in the preview to copy it manually.`;
      }

      if (hex !== hexValue.textContent) return;
      copyButton.textContent = label;
      status.textContent = message;
      clearTimeout(resetCopyLabel);
      resetCopyLabel = setTimeout(() => {
        copyButton.textContent = "Copy HEX";
      }, 1800);
    });
  } catch {
    status.textContent = "Could not load the color palette.";
  }
});
