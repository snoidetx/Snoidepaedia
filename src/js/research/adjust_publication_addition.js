document.addEventListener("DOMContentLoaded", function () {
  const publicationsHeading = Array.from(document.querySelectorAll("h2")).find(
    (heading) => heading.textContent.includes("Publications and Preprints")
  );

  if (!publicationsHeading) return;

  let current = publicationsHeading.nextElementSibling;

  while (current) {
    if (current.classList.contains("addition")) {
      current.style.marginBottom = "-0.5em";
    }

    current = current.nextElementSibling;
  }
});
