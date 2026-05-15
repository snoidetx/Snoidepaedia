document.addEventListener("DOMContentLoaded", function () {
  const newsList = document.getElementById("news-list");
  const newsButton = document.getElementById("news-btn");
  const maxVisibleItems = 5;

  if (!newsList || !newsButton) return;

  fetch("./home/news.json")
    .then((response) => response.json())
    .then((newsItems) => {
      newsList.innerHTML = newsItems.map(renderNewsItem).join("");

      var listItems = newsList.children;

      if (listItems.length > maxVisibleItems) {
        for (var i = maxVisibleItems; i < listItems.length; i++) {
          listItems[i].classList.add("hidden-news");
        }

        newsButton.style.display = "block";
      }

      newsButton.addEventListener("click", function (e) {
        var hiddenItems = document.querySelectorAll(".hidden-news");
        var label = this.querySelector(".news-btn-label");
        var isExpanded = label && label.textContent === "See less";

        if (!isExpanded) {
            const scrollY = window.scrollY;

            for (var i = 0; i < hiddenItems.length; i++) {
                expandNewsItem(hiddenItems[i]);
            }

            requestAnimationFrame(function () {
                window.scrollTo(window.scrollX, scrollY);
            });

            if (label) label.textContent = "See less";
            this.classList.add("news-btn-expanded");
        } else {
            collapseNewsList(newsList, listItems, maxVisibleItems);
            if (label) label.textContent = "See more";
            this.classList.remove("news-btn-expanded");
            }
        });

    })
    .catch((error) => console.error("Error loading news:", error));
});

function renderNewsItem(item) {
  const emoji = item.emoji
    ? `<span class="news-emoji">${item.emoji}</span>`
    : "";

  const figure = item.figure
    ? `
      <figure class="news-figure">
        <img src="${item.figure.src}" alt="${item.figure.alt || ""}">
      </figure>
    `
    : "";

  const parseMarkdownInline = window.marked &&
    (window.marked.parseInline || (window.marked.marked && window.marked.marked.parseInline));

  const content = item.markdown
    ? (parseMarkdownInline ? parseMarkdownInline(item.markdown) : item.markdown)
    : item.html || "";

  return `
    <article class="news-item">
      <div class="news-item-content">
        <div class="news-meta">
          <time class="news-date"><strong>${item.date}</strong></time>
          ${emoji}
        </div>
        <p>${content}</p>
      </div>
      ${figure}
    </article>
  `;
}

function expandNewsItem(item) {
  item.classList.remove("hidden-news");
  item.classList.add("news-entering");

  item.style.transform = "translateY(-6px)";
  item.style.maxHeight = "0";

  requestAnimationFrame(function () {
    item.style.transform = "translateY(0)";
    item.style.maxHeight = item.scrollHeight + "px";
  });

  window.setTimeout(function () {
    item.classList.remove("news-entering");
    item.style.transform = "";
    item.style.maxHeight = "";
  }, 280);
}

function collapseNewsList(newsList, listItems, maxVisibleItems) {
  const visibleItems = Array.prototype.slice.call(listItems, 0, maxVisibleItems);
  const extraItems = Array.prototype.slice.call(listItems, maxVisibleItems);

  const firstPositions = visibleItems.map((item) =>
    item.getBoundingClientRect()
  );

  extraItems.forEach((item) => {
    item.classList.add("hidden-news");
    item.style.display = "";
  });

  const lastPositions = visibleItems.map((item) =>
    item.getBoundingClientRect()
  );

  visibleItems.forEach((item, index) => {
    const deltaY = firstPositions[index].top - lastPositions[index].top;

    item.style.transform = `translateY(${deltaY}px)`;
    item.style.transition = "transform 0s";
  });

  requestAnimationFrame(function () {
    visibleItems.forEach((item) => {
      item.style.transition = "transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)";
      item.style.transform = "translateY(0)";
    });
  });

  window.setTimeout(function () {
    visibleItems.forEach((item) => {
      item.style.transition = "";
      item.style.transform = "";
    });
  }, 280);
}
