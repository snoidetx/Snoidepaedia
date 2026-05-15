---
layout: default
title: Transcripts
nav_order: 2
parent: Education
---

# Transcripts
{: .fs-9 }

Receipts of learning.
{: .fs-6 .fw-300 }

<span class="btn-r-1 active" onclick="changePdf('../../pdfjs/web/viewer.html?file=../../education/pdf/transcript-ug.pdf')">Bachelor</span> <span class='btn-r-filler'></span> <span class="btn-r-2" onclick="changePdf('../../pdfjs/web/viewer.html?file=../../education/pdf/transcript-g.pdf')">Ph.D.</span>

---

You may click on the **Bachelor** and **Ph.D.** buttons above to switch between my respective transcripts.

<div class="iframe-pdf-wrapper">
  <iframe
    src="../../pdfjs/web/viewer.html?file=../../education/pdf/transcript-ug.pdf"
    width="100%"
    height="600"
    style="border:0;"
    id="pdf-viewer"
    loading="lazy">
  </iframe>
</div>

<script>{% include js/education/transcript.js %}</script>
