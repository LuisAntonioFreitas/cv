// Gallery image hover
$( ".feiraoboulevard-img-wrapper" ).hover(
  function() {
    $(this).find(".feiraoboulevard-img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".feiraoboulevard-img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $feiraoboulevard_overlay = $('<div id="feiraoboulevard-overlay"></div>');
var $feiraoboulevard_image = $("<img>");
var $feiraoboulevard_prevButton = $('<div id="feiraoboulevard-prevButton"><i class="fa fa-chevron-left"></i></div>');
var $feiraoboulevard_nextButton = $('<div id="feiraoboulevard-nextButton"><i class="fa fa-chevron-right"></i></div>');
var $feiraoboulevard_exitButton = $('<div id="feiraoboulevard-exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$feiraoboulevard_overlay.append($feiraoboulevard_image).prepend($feiraoboulevard_prevButton).append($feiraoboulevard_nextButton).append($feiraoboulevard_exitButton);
$("#feiraoboulevard-gallery").append($feiraoboulevard_overlay);

// Hide overlay on default
$feiraoboulevard_overlay.hide();

// When an image is clicked
$(".feiraoboulevard-img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var feiraoboulevard_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $feiraoboulevard_image.attr("src", feiraoboulevard_imageLocation);
  // Fade in the overlay
  $feiraoboulevard_overlay.fadeIn("slow");
});
$(".feiraoboulevard-img-overlay-link").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var feiraoboulevard_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $feiraoboulevard_image.attr("src", feiraoboulevard_imageLocation);
  // Fade in the overlay
  $feiraoboulevard_overlay.fadeIn("slow");
});

// When the overlay is clicked
$feiraoboulevard_overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$feiraoboulevard_nextButton.click(function(event) {
  // Hide the current image
  $("#feiraoboulevard-overlay img").hide();
  // Overlay image location
  var $feiraoboulevard_currentImgSrc = $("#feiraoboulevard-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $feiraoboulevard_currentImg = $('#feiraoboulevard-image-gallery img[src="' + $feiraoboulevard_currentImgSrc + '"]');
  // Finds the next image
  var $feiraoboulevard_nextImg = $($feiraoboulevard_currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $feiraoboulevard_images = $("#feiraoboulevard-image-gallery img");
  // If there is a next image
  if ($feiraoboulevard_nextImg.length > 0) { 
    // Fade in the next image
    $("#feiraoboulevard-overlay img").attr("src", $feiraoboulevard_nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#feiraoboulevard-overlay img").attr("src", $($feiraoboulevard_images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$feiraoboulevard_prevButton.click(function(event) {
  // Hide the current image
  $("#feiraoboulevard-overlay img").hide();
  // Overlay image location
  var $feiraoboulevard_currentImgSrc = $("#feiraoboulevard-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $feiraoboulevard_currentImg = $('#feiraoboulevard-image-gallery img[src="' + $feiraoboulevard_currentImgSrc + '"]');
  // Finds the next image
  var $feiraoboulevard_nextImg = $($feiraoboulevard_currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#feiraoboulevard-overlay img").attr("src", $feiraoboulevard_nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$feiraoboulevard_exitButton.click(function() {
  // Fade out the overlay
  $("#feiraoboulevard-overlay").fadeOut("slow");
});