function adjustStyle() {
  document.addEventListener("DOMContentLoaded", function() {
    function updateMargin() {
      const tableWrappers = document.querySelectorAll('.table-wrapper');

      tableWrappers.forEach(tableWrapper => {
        tableWrapper.style.setProperty('margin-bottom', '0.75rem', 'important');
      });

      console.log(tableWrappers);
    };

    updateMargin();
    
    const observer = new MutationObserver(updateMargin);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
};

adjustStyle();
