---
layout: default
title: Résumé
nav_order: 1
parent: Home
---

{% capture intro %}
The following version of my résumé was uploaded on 05/2026.
{% endcapture %}

{% include html/page_overview.html
  title="Résumé"
  subtitle="Curriculum vitae."
  intro=intro
%}

<div class="iframe-pdf-wrapper">
  <iframe
    src="../../pdfjs/web/viewer.html?file=../../home/pdf/resume.pdf"
    width="100%"
    height="600"
    style="border:0;"
    loading="lazy">
  </iframe>
</div>
