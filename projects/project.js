// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("myModal");
  
    // Get the image and insert it inside the modal
    var images = document.querySelectorAll(".preview-imgs img");
    var modalImg = document.getElementById("img01");
  
    // Loop through all images and add event listeners
    images.forEach(function(image) {
      image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
      }
    });
  
    // Get the <span> element to close the modal
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside the image, close the modal
    modal.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  });
  