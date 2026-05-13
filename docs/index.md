---
layout: default
title: Home
nav_order: 2
has_children: true
has_toc: false
---

<style>
@media (max-width: 799px) {
  #site-profile {
    display: none !important;
  }

  #site-profile.nav-open {
    display: flex !important;
  }
}
</style>

<div class="home-overview-container">
<section class="home-overview">
  <div class="home-hero">
    <div class="home-hero-content">
      <h1 class="fs-9">Xiao Tian</h1>
      <p class="fs-6 fw-300">CS PhD Student @ NUS</p>

      <div class="home-hero-buttons">
        <a href="./home/resume/" class="btn-left">My Résumé</a>
        <span class="btn-filler"></span>
        <a href="./home/schedule" class="btn-right">My Schedule</a>
      </div>
    </div>
  </div>

  <div class="home-intro" markdown="1">

Hi! I am a Computer Science Ph.D. student at [National University of Singapore](https://nus.edu.sg/) (NUS), starting from Spring 2025. I am fortunate to be supervised by [Prof. Bryan Kian Hsiang Low](https://www.comp.nus.edu.sg/cs/people/lowkh/) and [Dr. Nancy F. Chen](https://sites.google.com/site/nancyfchen/home). My [research](./research/) interests include data-centric machine learning, multi-agent machine learning and privacy-preserving machine learning. I have also been working as [teaching assistant](./teaching/) in NUS School of Computing. 

I obtained my two Bachelor's degrees from NUS in Fall 2024. I was supervised by Prof. Bryan Kian Hsiang Low and Prof. Jonathan Scarlett for my honours year thesis.

<p class="addition-highlight" style="margin-top:1em"><strong>☻ Fun fact: <em>Snoíde</em> is my pseudonym.</strong></p>

  </div>
</section></div>

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
