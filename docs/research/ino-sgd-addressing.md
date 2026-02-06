---
layout: default
title: INO-SGD_ Addressing Utility Imbalance under Individualized Differential Privacy
parent: Research
nav_exclude: true
---

# INO-SGD: Addressing Utility Imbalance under Individualized Differential Privacy
{: .fs-9 }

X. Tian, J. Fan, R.H.L. Sim, & B.K.H. Low. 2026.
{: .fs-6 .fw-300 }

[View Source](https://openreview.net/forum?id=HMapYMkcrl){: .btn-whole}

---

## Abstract

*Differential privacy* (DP) is widely employed in machine learning to protect confidential or sensitive training data from being revealed. As data owners gain greater control over their data due to personal data ownership, they are more likely to set their own privacy requirements, necessitating *individualized DP* (IDP) to fulfil such requests. In particular, owners of data from more sensitive subsets, such as positive cases of stigmatized diseases, likely set stronger privacy requirements, as leakage of such data could incur more serious societal impact. However, existing IDP algorithms induce a critical *utility imbalance* problem: *Data from owners with stronger privacy requirements may be severely underrepresented in the trained model, resulting in poorer performance on similar data from subsequent users during deployment.* In this paper, we analyze this problem and propose the INO-SGD algorithm, which strategically down-weights data within each batch to improve performance on the more private data across all iterations. Notably, our algorithm is specially designed to satisfy IDP, while existing techniques addressing utility imbalance neither satisfy IDP nor can be easily adapted to do so. Lastly, we demonstrate the empirical feasibility of our approach.

{% comment %}
## Gallery

![](../img/thumbnails/thumbnail-ino-sgd-addressing.png)
{: .thumbnail }
{% endcomment %}

## Cite

```
@inproceedings{tian2026inosgd,
  title={INO-SGD: Addressing Utility Imbalance under Individualized Differential Privacy},
  author={Tian, Xiao and Fan, Jue and Sim, Rachael Hwee Ling and Low, Bryan Kian Hsiang},
  booktitle={Proc. ICLR},
  year={2026}
}
```
