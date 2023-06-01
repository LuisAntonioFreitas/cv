// Gallery image hover
$( ".goshinaikido-img-wrapper" ).hover(
  function() {
    $(this).find(".goshinaikido-img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".goshinaikido-img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $goshinaikido_overlay = $('<div id="goshinaikido-overlay"></div>');
var $goshinaikido_image = $("<img>");
var $goshinaikido_prevButton = $('<div id="goshinaikido-prevButton"><i class="fa fa-chevron-left"></i></div>');
var $goshinaikido_nextButton = $('<div id="goshinaikido-nextButton"><i class="fa fa-chevron-right"></i></div>');
var $goshinaikido_exitButton = $('<div id="goshinaikido-exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$goshinaikido_overlay.append($goshinaikido_image).prepend($goshinaikido_prevButton).append($goshinaikido_nextButton).append($goshinaikido_exitButton);
$("#goshinaikido-gallery").append($goshinaikido_overlay);

// Hide overlay on default
$goshinaikido_overlay.hide();

// When an image is clicked
$(".goshinaikido-img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var goshinaikido_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $goshinaikido_image.attr("src", goshinaikido_imageLocation);
  // Fade in the overlay
  $goshinaikido_overlay.fadeIn("slow");
});
$(".goshinaikido-img-overlay-link").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var goshinaikido_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $goshinaikido_image.attr("src", goshinaikido_imageLocation);
  // Fade in the overlay
  $goshinaikido_overlay.fadeIn("slow");
});

// When the overlay is clicked
$goshinaikido_overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$goshinaikido_nextButton.click(function(event) {
  // Hide the current image
  $("#goshinaikido-overlay img").hide();
  // Overlay image location
  var $goshinaikido_currentImgSrc = $("#goshinaikido-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $goshinaikido_currentImg = $('#goshinaikido-image-gallery img[src="' + $goshinaikido_currentImgSrc + '"]');
  // Finds the next image
  var $goshinaikido_nextImg = $($goshinaikido_currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $goshinaikido_images = $("#goshinaikido-image-gallery img");
  // If there is a next image
  if ($goshinaikido_nextImg.length > 0) { 
    // Fade in the next image
    $("#goshinaikido-overlay img").attr("src", $goshinaikido_nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#goshinaikido-overlay img").attr("src", $($goshinaikido_images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$goshinaikido_prevButton.click(function(event) {
  // Hide the current image
  $("#goshinaikido-overlay img").hide();
  // Overlay image location
  var $goshinaikido_currentImgSrc = $("#goshinaikido-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $goshinaikido_currentImg = $('#goshinaikido-image-gallery img[src="' + $goshinaikido_currentImgSrc + '"]');
  // Finds the next image
  var $goshinaikido_nextImg = $($goshinaikido_currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#goshinaikido-overlay img").attr("src", $goshinaikido_nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$goshinaikido_exitButton.click(function() {
  // Fade out the overlay
  $("#goshinaikido-overlay").fadeOut("slow");
});