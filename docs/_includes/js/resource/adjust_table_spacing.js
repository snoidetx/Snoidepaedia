document.addEventListener("DOMContentLoaded", function() {
  const tableWrappers = document.querySelectorAll(".table-wrapper");
  console.log(tableWrappers);
  tableWrappers.forEach(function(wrapper) {
      wrapper.style.marginBottom = 0; 
  });
});