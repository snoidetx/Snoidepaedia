---
layout: default
title: DeRDaVa_ Deletion-Robust Data Valuation for Machine Learning
parent: Research
nav_exclude: true
---

# Deletion-Robust Data Valuation for Machine Learning
{: .fs-9 }

X. Tian, R.H.L. Sim, J. Fan, & B.K.H. Low. 2023.
{: .fs-6 .fw-300 }

[View Source](https://arxiv.org/abs/2312.11413){: .btn .btn-purple}

---

## Abstract

Data valuation is concerned with determining a fair valuation of data from data sources to compensate them or to identify training examples that are the most or least useful for predictions. With the rising interest in personal data ownership and data protection regulations, model owners will likely have to fulfil more data deletion requests. This raises issues that have not been addressed by existing works: *Are the data valuation scores still fair with deletions? Must the scores be expensively recomputed?* The answer is no. To avoid recomputations, we propose using our data valuation framework DeRDaVa upfront for valuing each data source's contribution to preserving robust model performance after anticipated data deletions. DeRDaVa can be efficiently approximated and will assign higher values to data that are more useful or less likely to be deleted. We further generalize DeRDaVa to Risk-DeRDaVa to cater to risk-averse/seeking model owners who are concerned with the worst/best-cases model utility. We also empirically demonstrate the practicality of our solutions.

## Gallery

![](../img/thumbnails/thumbnail-derdava-deletion-robust.png)
{: .thumbnail }

## Cite

```
@inproceedings{tian2024derdava,
  title={DeRDaVa: Deletion-Robust Data Valuation for Machine Learning},
  author={Tian, Xiao and Sim, Rachael Hwee Ling and Fan, Jue and Low, Bryan Kian Hsiang},
  booktitle={Proc. AAAI},
  volume={38},
  number={14},
  pages={15373--15381},
  year={2024}
}
```
