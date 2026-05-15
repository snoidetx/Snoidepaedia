---
layout: default
title: Home
nav_order: 2
has_children: true
has_toc: false
banner_image: /home/img/banner_image.png
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

<section class="banner banner-home" style="--banner-image: url('{{ page.banner_image | relative_url }}');">
  <div class="banner-content">
    <h1 class="fs-9">Xiao Tian</h1>
    <p class="fs-6 fw-300">CS PhD Student @ NUS</p>
    <div class="banner-buttons">
      <a href="./home/resume/" class="btn-left">My Résumé</a>
      <span class="btn-filler"></span>
      <a href="./home/schedule" class="btn-right">My Schedule</a>
    </div>
  </div>
</section>

<div class="typewriter-content" data-typewriter markdown="1">

Hi 👋🏻! I am a Computer Science Ph.D. student at {% include html/entity.html id="nus" %} (NUS), starting from Spring 2025. I am fortunate to be supervised by {% include html/entity.html id="bryan_low" %} and {% include html/entity.html id="nancy_chen" %}. My [**research**](./research/) interests include data-centric machine learning, multi-agent machine learning and privacy-preserving machine learning. I have also been working as [**teaching assistant**](./teaching/) in NUS School of Computing.

I obtained my two Bachelor's degrees 🎓 from NUS in Fall 2024. I was supervised by {% include html/entity.html id="bryan_low" %} and {% include html/entity.html id="jonathan_scarlett" %} for my honours year thesis.

<p class="fw-500">😁 Fun fact: <em>Snoíde</em> is my pseudonym.</p>

</div>

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
  <button id="news-btn" class="news-btn">
    <span class="news-btn-icon" aria-hidden="true">
      <svg viewBox="0 0 20 20" focusable="false">
        <circle cx="10" cy="10" r="8.5"></circle>
        <polyline points="6.5 8.5 10 12 13.5 8.5"></polyline>
      </svg>
    </span>
    <span class="news-btn-label">See more</span>
  </button>
</div>

<script src="{{ '/assets/js/vendor/marked.min.js' | relative_url }}"></script>
<script>{% include js/typewriter.js %}</script>
<script>{% include js/home/load_news.js %}</script>
