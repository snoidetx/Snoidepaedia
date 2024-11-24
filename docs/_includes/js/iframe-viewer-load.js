// Ensure proper loading of iframe files

document.addEventListener("DOMContentLoaded", function () {
  const iframes = document.querySelectorAll("iframe");

  iframes.forEach((iframe) => {
    function checkAndReload() {
      if (iframe.src && iframe.src.endsWith("about:blank")) {
        iframe.src = iframe.src;
      }
      requestAnimationFrame(checkAndReload);
    }

    requestAnimationFrame(checkAndReload);
  });
});
