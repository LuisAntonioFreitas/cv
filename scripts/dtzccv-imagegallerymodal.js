// Gallery image hover
$( ".dtzccv-img-wrapper" ).hover(
  function() {
    $(this).find(".dtzccv-img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".dtzccv-img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $dtzccv_overlay = $('<div id="dtzccv-overlay"></div>');
var $dtzccv_image = $("<img>");
var $dtzccv_prevButton = $('<div id="dtzccv-prevButton"><i class="fa fa-chevron-left"></i></div>');
var $dtzccv_nextButton = $('<div id="dtzccv-nextButton"><i class="fa fa-chevron-right"></i></div>');
var $dtzccv_exitButton = $('<div id="dtzccv-exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$dtzccv_overlay.append($dtzccv_image).prepend($dtzccv_prevButton).append($dtzccv_nextButton).append($dtzccv_exitButton);
$("#dtzccv-gallery").append($dtzccv_overlay);

// Hide overlay on default
$dtzccv_overlay.hide();

// When an image is clicked
$(".dtzccv-img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var dtzccv_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $dtzccv_image.attr("src", dtzccv_imageLocation);
  // Fade in the overlay
  $dtzccv_overlay.fadeIn("slow");
});
$(".dtzccv-img-overlay-link").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var dtzccv_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $dtzccv_image.attr("src", dtzccv_imageLocation);
  // Fade in the overlay
  $dtzccv_overlay.fadeIn("slow");
});

// When the overlay is clicked
$dtzccv_overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$dtzccv_nextButton.click(function(event) {
  // Hide the current image
  $("#dtzccv-overlay img").hide();
  // Overlay image location
  var $dtzccv_currentImgSrc = $("#dtzccv-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $dtzccv_currentImg = $('#dtzccv-image-gallery img[src="' + $dtzccv_currentImgSrc + '"]');
  // Finds the next image
  var $dtzccv_nextImg = $($dtzccv_currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $dtzccv_images = $("#dtzccv-image-gallery img");
  // If there is a next image
  if ($dtzccv_nextImg.length > 0) { 
    // Fade in the next image
    $("#dtzccv-overlay img").attr("src", $dtzccv_nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#dtzccv-overlay img").attr("src", $($dtzccv_images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$dtzccv_prevButton.click(function(event) {
  // Hide the current image
  $("#dtzccv-overlay img").hide();
  // Overlay image location
  var $dtzccv_currentImgSrc = $("#dtzccv-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $dtzccv_currentImg = $('#dtzccv-image-gallery img[src="' + $dtzccv_currentImgSrc + '"]');
  // Finds the next image
  var $dtzccv_nextImg = $($dtzccv_currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#dtzccv-overlay img").attr("src", $dtzccv_nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$dtzccv_exitButton.click(function() {
  // Fade out the overlay
  $("#dtzccv-overlay").fadeOut("slow");
});