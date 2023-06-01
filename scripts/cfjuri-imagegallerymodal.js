// Gallery image hover
$( ".cfjuri-img-wrapper" ).hover(
  function() {
    $(this).find(".cfjuri-img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".cfjuri-img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $cfjuri_overlay = $('<div id="cfjuri-overlay"></div>');
var $cfjuri_image = $("<img>");
var $cfjuri_prevButton = $('<div id="cfjuri-prevButton"><i class="fa fa-chevron-left"></i></div>');
var $cfjuri_nextButton = $('<div id="cfjuri-nextButton"><i class="fa fa-chevron-right"></i></div>');
var $cfjuri_exitButton = $('<div id="cfjuri-exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$cfjuri_overlay.append($cfjuri_image).prepend($cfjuri_prevButton).append($cfjuri_nextButton).append($cfjuri_exitButton);
$("#cfjuri-gallery").append($cfjuri_overlay);

// Hide overlay on default
$cfjuri_overlay.hide();

// When an image is clicked
$(".cfjuri-img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var cfjuri_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $cfjuri_image.attr("src", cfjuri_imageLocation);
  // Fade in the overlay
  $cfjuri_overlay.fadeIn("slow");
});
$(".cfjuri-img-overlay-link").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var cfjuri_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $cfjuri_image.attr("src", cfjuri_imageLocation);
  // Fade in the overlay
  $cfjuri_overlay.fadeIn("slow");
});

// When the overlay is clicked
$cfjuri_overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$cfjuri_nextButton.click(function(event) {
  // Hide the current image
  $("#cfjuri-overlay img").hide();
  // Overlay image location
  var $cfjuri_currentImgSrc = $("#cfjuri-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $cfjuri_currentImg = $('#cfjuri-image-gallery img[src="' + $cfjuri_currentImgSrc + '"]');
  // Finds the next image
  var $cfjuri_nextImg = $($cfjuri_currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $cfjuri_images = $("#cfjuri-image-gallery img");
  // If there is a next image
  if ($cfjuri_nextImg.length > 0) { 
    // Fade in the next image
    $("#cfjuri-overlay img").attr("src", $cfjuri_nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#cfjuri-overlay img").attr("src", $($cfjuri_images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$cfjuri_prevButton.click(function(event) {
  // Hide the current image
  $("#cfjuri-overlay img").hide();
  // Overlay image location
  var $cfjuri_currentImgSrc = $("#cfjuri-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $cfjuri_currentImg = $('#cfjuri-image-gallery img[src="' + $cfjuri_currentImgSrc + '"]');
  // Finds the next image
  var $cfjuri_nextImg = $($cfjuri_currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#cfjuri-overlay img").attr("src", $cfjuri_nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$cfjuri_exitButton.click(function() {
  // Fade out the overlay
  $("#cfjuri-overlay").fadeOut("slow");
});