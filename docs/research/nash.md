---
layout: default
title: Is Data Shapley Not Better than Random in Data Selection? Ask NASH
parent: Research
nav_exclude: true
---

# Is Data Shapley Not Better than Random in Data Selection? Ask NASH
{: .fs-9 }

X. Tian, J. Fan, R.H.L. Sim, Z. Wang, N.F. Chen, & B.K.H. Low. 2026.
{: .fs-6 .fw-300 }

<a href="https://openreview.net/forum?id=vMsrm8UGGC" class="btn-whole">View Source</a>

---

## Abstract

Data selection studies the problem of identifying high-quality subsets of training data. While some existing works have considered selecting the subset of data with top-$$m$$ Data Shapley or other semivalues as they account for the interaction among every subset of data, other works argue that Data Shapley can sometimes perform ineffectively in practice and select subsets that are *no better than random*. This raises the questions: **(I)** *Are there certain "Shapley-informative" settings where Data Shapley consistently works well?* **(II)** *Can we strategically utilize these settings to select high-quality subsets consistently and efficiently?* In this paper, we propose a novel data selection framework, **NASH** (Non-linear Aggregation of SHapley-informative components), which **(I)** decomposes the target utility function (e.g., validation accuracy) into simpler, Shapley-informative component functions, and selects data by optimizing an objective that **(II)** aggregates these components non-linearly. We demonstrate that NASH substantially boosts the effectiveness of Shapley/semivalue-based data selection with minimal additional runtime cost.

## Gallery

<div class="gallery-wrapper">
  <figure class="gallery">
    <div class="gallery-image-frame">
      <img src="../img/thumbnails/thumbnail-nash.png" class="gallery-image">
    </div>
    <figcaption>Poster <span class="gallery-flag" aria-label="South Korea">🇰🇷</span></figcaption>
  </figure>
  <figure class="gallery">
    <div class="gallery-image-frame">
      <img src="../img/thumbnails/thumbnail-nash.gif" class="gallery-image">
    </div>
    <figcaption>Overview <span class="gallery-flag" aria-label="South Korea">🇰🇷</span></figcaption>
  </figure>
</div>

## Cite

```
@inproceedings{tian2026is,
  title={Is {D}ata {S}hapley Not Better than Random in Data Selection? Ask {NASH}},
  author={Tian, Xiao and Fan, Jue and Sim, Rachael Hwee Ling and Wang, Zixuan and Chen, Nancy F. and Low, Bryan Kian Hsiang},
  booktitle={Proc. ICML},
  year={2026}
}
```
