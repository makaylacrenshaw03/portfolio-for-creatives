$(document).ready(function () {
  $(".experiment-image-1").click(function () {
    $(".experiment-image-2").fadeToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });

  // Lightbox functionality
  let currentIndex = 0; // Keep track of the current image index
  const images = $(".lightbox-trigger"); // Select all images that trigger the Lightbox

  // Open Lightbox
  images.click(function () {
    currentIndex = images.index(this); // Get index of clicked image
    showLightbox(images.eq(currentIndex).attr("src")); // Show Lightbox with clicked image
  });

  // Close Lightbox
  $(".close").click(function () {
    $("#lightbox").fadeOut();
    $("body").removeClass("no-scroll"); // Enable scrolling again when Lightbox is closed
  });

  // Show Lightbox function
  function showLightbox(src) {
    $("#lightboxImage").attr("src", src); // Set the source of the lightbox image
    $("#lightbox").fadeIn();
    $("body").addClass("no-scroll"); // Disable scrolling when Lightbox is open
  }

  // Navigation Buttons
  $("#prevBtn").click(function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1; // Wrap to the last image if at the start
    showLightbox(images.eq(currentIndex).attr("src"));
  });

  $("#nextBtn").click(function () {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0; // Wrap to the first image if at the end
    showLightbox(images.eq(currentIndex).attr("src"));
  });

  // Close Lightbox when clicking outside the image
  $("#lightbox").click(function (event) {
    if ($(event.target).is("#lightbox")) {
      $("#lightbox").fadeOut();
      $("body").removeClass("no-scroll"); // Enable scrolling again when Lightbox is closed
    }
  });
});
