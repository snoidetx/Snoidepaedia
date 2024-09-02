---
layout: default
title: Deletion-Anticipative Data Selection with a Limited Budget
parent: Research
nav_exclude: true
---

# Deletion-Anticipative Data Selection with a Limited Budget
{: .fs-9 }

R.H.L. Sim, J. Fan, X. Tian, & B.K.H. Low. 2024.
{: .fs-6 .fw-300 }

[View Source](https://proceedings.mlr.press/v235/sim24a.html){: .btn .btn-purple}

---

## Abstract

Learners with a limited budget can use supervised data subset selection and active learning techniques to select a smaller training set and reduce the cost of acquiring data and training *machine learning* (ML) models. However, the resulting high model performance, measured by a data utility function, may not be preserved when some data owners, enabled by the GDPR’s right to erasure, request their data to be deleted from the ML model. This raises an important question for learners who are temporarily unable or unwilling to acquire data again: *During the initial data acquisition of a training set of size $k$, can we proactively maximize the data utility after future unknown deletions?* We propose that the learner anticipates/estimates the probability that (i) each data owner in the feasible set will independently delete its data or (ii) a number of deletions occur out of $k$, and justify our proposal with concrete real-world use cases. Then, instead of directly maximizing the data utility function, the learner can maximize the expected or risk-averse post-deletion utility based on the anticipated probabilities. We further propose how to construct these *deletion-anticipative data selection* ($\mathtt{DADS}$) maximization objectives to preserve monotone submodularity and near-optimality of greedy solutions, how to optimize the objectives and empirically evaluate $\mathtt{DADS}$' performance on real-world datasets.

## Gallery

![](../img/thumbnails/thumbnail-deletion-anticipative-data.png)
{: .thumbnail }

## Cite

```
@inproceedings{sim2024deletion,
  title={Deletion-Anticipative Data Selection with a Limited Budget},
  author={Sim, Rachael Hwee Ling and Fan, Jue and Tian, Xiao and Low, Bryan Kian Hsiang},
  booktitle={Proc. ICML},
  volume={235},
  pages={45468--45507},
  year={2024}
}
```
