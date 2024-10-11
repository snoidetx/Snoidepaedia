document.addEventListener('DOMContentLoaded', function() {
  const newsList = document.getElementById('list-news');
  var listItems = newsList.children;
  const newsButton = document.getElementById('list-news-btn');
  const maxVisibleItems = 4;  // Maximum number of visible items
    
  if (listItems.length > maxVisibleItems) {
    for (var i = maxVisibleItems; i < listItems.length; i++) {
            listItems[i].classList.add("hidden-news"); // Add hidden class to items beyond the top 10
    }
    newsButton.style.display = "block";  // Show toggle button if there are more than 10 items
  }

  // Event listener to toggle hidden items when button is clicked
  newsButton.addEventListener("click", function(e) {
    var hiddenItems = document.querySelectorAll(".hidden-news"); // Update to use ID
    if (this.textContent === "Show more") {
      for (var i = 0; i < hiddenItems.length; i++) {
        hiddenItems[i].style.display = "block";  // Show hidden items
      }
      this.textContent = "Show less";  // Change button text to "Show Less"
    } else {
      for (var i = 0; i < hiddenItems.length; i++) {
        hiddenItems[i].style.display = "none";  // Hide items again
      }
      this.textContent = "Show more";  // Change button text back to "Show More"
    }
  });
});
