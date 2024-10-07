function loadResource(category, elementId) {
  document.addEventListener("DOMContentLoaded", function() {
    fetch('./resource.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById(elementId);
        data[category].forEach(course => {
          let tableHTML = `<table class='table-resource-new'>
                            <colgroup>
                              <col style="width: 68%;>
                              <col style="width: 32%;">
                            </colgroup>
                            <thead>
                              <tr>
                                <th colspan="2">${course.code} ${course.name}</th>
                              </tr>
                            </thead>
                           <tbody>`;
  
          course.resources.forEach(resource => {
            tableHTML += `<tr>
                           <td>• ${resource.title}</td>
                           <td><a href="${resource.link}" class="btn-small-download">Download</a></td>
                          </tr>`;});
  
            tableHTML += `</tbody></table>`;
            container.innerHTML += tableHTML;
        });
      })
      .catch(error => console.error('Error loading resources:', error));
  });
}
