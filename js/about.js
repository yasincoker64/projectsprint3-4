$(document).ready(function() {
    // AJAX request to load data from another website
    document.getElementById("websiteBtn").addEventListener("click", function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var parser = new DOMParser();
            var htmlDoc = parser.parseFromString(xhr.responseText, "text/html");
            var extractedData = htmlDoc.getElementById("specificElement").textContent;
            document.getElementById("websiteData").textContent = extractedData; // Update the div with the extracted data
          }
        };
        xhr.open("GET", "other-page.html", true); // Replace with the actual path to the other page on your website
        xhr.send();
      });
  });