---
layout: default
title: Home
nav_order: 2
has_children: true
has_toc: false
---

# Welcome!
{: .fs-9 }

Personal website of Xiao Tian *@snoidetx*.
{: .fs-6 .fw-300 }

[My Résumé](./home/resume/){: .btn-left} <span class='btn-filler'></span> [My Schedule](./home/schedule){: .btn-right}

---

I am **Xiao <u>Tian</u>**, a Ph.D. in Computer Science student at [National University of Singapore](https://nus.edu.sg/) (**NUS**), starting from Spring 2025. I am fortunate to be supervised by [**Prof. Bryan Kian Hsiang Low**](https://www.comp.nus.edu.sg/cs/people/lowkh/) and [**Dr. Nancy F. Chen**](https://sites.google.com/site/nancyfchen/home). My research interests include *data-centric machine learning*, *multi-agent machine learning* and *privacy-preserving machine learning*. Refer to my [Research](./research/) page to find out more about my research and past works. I have also been working as [teaching assistant](./teaching/) in NUS School of Computing. 

I obtained my two Bachelor's degrees from NUS in Fall 2024. I was supervised by [Prof. Bryan Kian Hsiang Low](https://www.comp.nus.edu.sg/cs/people/lowkh/) and [Prof. Jonathan Scarlett](https://www.comp.nus.edu.sg/~scarlett/) for my honours year thesis.

**☻ Fun fact: *Snoíde* is my pseudonym.**
{: .red }

## Education 🎓 <span class="see-more">[<a href="./education/">see more</a>]</span>

<div class="card-list">
  <div class="card-hollow">
    <strong>National University of Singapore, School of Computing (Ongoing)</strong>
    <p class="addition">2025 - 2028 (Expected) · Doctor of Philosophy in Computer Science · A*STAR Computing and Information Science (ACIS) Scholarship</p>
  </div>

  <div class="card-hollow">
    <strong>National University of Singapore, School of Computing</strong>
    <p class="addition">2020 - 2024 · Bachelor of Computing in Computer Science · Honours (Highest Distinction) · Turing Programme · Science &amp; Technology (S&amp;T) Undergraduate Merit Scholarship</p>
  </div>

  <div class="card-hollow">
    <strong>National University of Singapore, Faculty of Science</strong>
    <p class="addition">2020 - 2024 · Bachelor of Science in Applied Mathematics · Honours (Highest Distinction) · Science &amp; Technology (S&amp;T) Undergraduate Merit Scholarship</p>
  </div>
</div>

## News 🔥

<div id="news-list" class="news-list"></div>

<div class="news-btn-container">
  <button id="news-btn" class="news-btn">Expand</button>
</div>

<script src="{{ '/assets/js/vendor/marked.min.js' | relative_url }}"></script>
<script>{% include js/home/load_news.js %}</script>
