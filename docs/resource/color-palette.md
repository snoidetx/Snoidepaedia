---
layout: default
title: Color Palette
parent: Resource
---

# Color Palette
{: .fs-9 }

*@snoidetx*'s hues.
{: .fs-6 .fw-300 }

---

Below shows my personal color palette. Click on each color to view its detail.

<div id="palette-page" data-source="{{ '/resource/palette.json' | relative_url }}">
  <p id="palette-status" role="status"></p>
  <div id="palette-bar" class="color-palette-bar" role="group" aria-label="Palette colors" hidden></div>

  <section id="palette-preview" class="color-palette-preview" aria-label="Color preview" hidden>
    <div id="palette-preview-sample" class="color-palette-sample">
      <div class="color-palette-heading">
        <strong id="palette-preview-name" class="fs-6"></strong>
        <button id="palette-copy" type="button" class="btn color-palette-copy" aria-live="polite">Copy HEX</button>
      </div>
      <div class="color-palette-values">
        <strong>HEX</strong><span id="palette-preview-hex"></span>
        <strong>RGB</strong><span id="palette-preview-rgb"></span>
      </div>
      <p id="palette-preview-note" class="color-palette-note" hidden></p>
    </div>
  </section>

  <noscript><p>Enable JavaScript to view the color palette.</p></noscript>
</div>

<script>{% include js/resource/color_palette.js %}</script>
