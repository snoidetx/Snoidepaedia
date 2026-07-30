document.addEventListener("DOMContentLoaded", function () {
  const mounts = [
    { category: "Mathematics", elementId: "mathematics-resource" },
    { category: "Computer Science", elementId: "computer-science-resource" },
    { category: "Others", elementId: "others-resource" },
    { category: "A-Level", elementId: "a-level-resource" },
  ];

  fetch("./resource.json")
    .then((response) => response.json())
    .then((data) => {
      mounts.forEach(({ category, elementId }) => {
        const container = document.getElementById(elementId);

        if (!container) return;

        container.innerHTML = (data[category] || [])
          .map(renderResourceTable)
          .join("");
      });

      adjustResourceTableSpacing();
    })
    .catch((error) => console.error("Error loading resources:", error));
});

function renderResourceTable(course) {
  const resources = course.resources
    .map(
      (resource) => `
        <tr>
          <td>• ${resource.title}</td>
          <td><a href="${resource.link}" class="btn-small-download">Download</a></td>
        </tr>
      `
    )
    .join("");

  return `
    <table class="table-resource-new">
      <colgroup>
        <col style="width: 68%;">
        <col style="width: 32%;">
      </colgroup>
      <thead>
        <tr>
          <th colspan="2">${course.code} ${course.name}</th>
        </tr>
      </thead>
      <tbody>
        ${resources}
      </tbody>
    </table>
  `;
}

function adjustResourceTableSpacing() {
  document.querySelectorAll(".table-wrapper").forEach((tableWrapper) => {
    tableWrapper.style.setProperty("margin-bottom", "0.75rem", "important");
  });
}
