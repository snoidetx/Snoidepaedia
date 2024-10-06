function formatResourceTable() {
  document.addEventListener("DOMContentLoaded", function() {
    const table = document.querySelector(".table-resource-new");

    const header1 = table.querySelector(".table-resource-new th:first-of-type");
    const header2 = table.querySelector(".table-resource-new th:nth-of-type(2)");

    header1.setAttribute("colspan", "2");
    header2.remove();

    const firstColumnWidth = 65;
    const secondColumnWidth = 35;

    const allRows = table.querySelectorAll("tr");

    allRows.forEach(row => {
      const cells = row.children;
      if (cells.length > 1) {
        cells[0].style.width = `${firstColumnWidth}%`; 
        if (cells.length > 1) {
          cells[1].style.width = `${secondColumnWidth}%`; 
        }
      }
    });
  });
}
