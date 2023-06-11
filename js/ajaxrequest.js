$(document).ready(function() {
  // Function to handle the AJAX request to a JSON file
  function jsonFileRequest() {
    $.ajax({
      url: 'json_files/jsonfile.json', // Updated path to your JSON file
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        var currentIndex = localStorage.getItem('currentIndex');

        if (currentIndex === null) {
          currentIndex = 0;
        } else {
          currentIndex = parseInt(currentIndex) + 1;
          if (currentIndex >= data.length) {
            currentIndex = 0;
          }
        }

        localStorage.setItem('currentIndex', currentIndex);

        var titleElement = document.getElementById('title');
        var contentElement = document.getElementById('content');
        var imageElement = document.getElementById('image');

        if (titleElement && contentElement && imageElement) {
          titleElement.innerHTML = data[currentIndex].title;
          contentElement.innerHTML = data[currentIndex].content;
          imageElement.innerHTML = '<img src="img/img' + (currentIndex + 7) + '.jpg" alt="img">';
        }
      },
      error: function() {
        console.log('Error: Unable to fetch data from the JSON file.');
      }
    });
  }

  $('#update-button').click(function() {
    jsonFileRequest();
  });
});