// Gallery image hover
$( ".dtzapp-img-wrapper" ).hover(
  function() {
    $(this).find(".dtzapp-img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".dtzapp-img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $dtzapp_overlay = $('<div id="dtzapp-overlay"></div>');
var $dtzapp_image = $("<img>");
var $dtzapp_prevButton = $('<div id="dtzapp-prevButton"><i class="fa fa-chevron-left"></i></div>');
var $dtzapp_nextButton = $('<div id="dtzapp-nextButton"><i class="fa fa-chevron-right"></i></div>');
var $dtzapp_exitButton = $('<div id="dtzapp-exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$dtzapp_overlay.append($dtzapp_image).prepend($dtzapp_prevButton).append($dtzapp_nextButton).append($dtzapp_exitButton);
$("#dtzapp-gallery").append($dtzapp_overlay);

// Hide overlay on default
$dtzapp_overlay.hide();

// When an image is clicked
$(".dtzapp-img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var dtzapp_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $dtzapp_image.attr("src", dtzapp_imageLocation);
  // Fade in the overlay
  $dtzapp_overlay.fadeIn("slow");
});
$(".dtzapp-img-overlay-link").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var dtzapp_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $dtzapp_image.attr("src", dtzapp_imageLocation);
  // Fade in the overlay
  $dtzapp_overlay.fadeIn("slow");
});

// When the overlay is clicked
$dtzapp_overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$dtzapp_nextButton.click(function(event) {
  // Hide the current image
  $("#dtzapp-overlay img").hide();
  // Overlay image location
  var $dtzapp_currentImgSrc = $("#dtzapp-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $dtzapp_currentImg = $('#dtzapp-image-gallery img[src="' + $dtzapp_currentImgSrc + '"]');
  // Finds the next image
  var $dtzapp_nextImg = $($dtzapp_currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $dtzapp_images = $("#dtzapp-image-gallery img");
  // If there is a next image
  if ($dtzapp_nextImg.length > 0) { 
    // Fade in the next image
    $("#dtzapp-overlay img").attr("src", $dtzapp_nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#dtzapp-overlay img").attr("src", $($dtzapp_images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$dtzapp_prevButton.click(function(event) {
  // Hide the current image
  $("#dtzapp-overlay img").hide();
  // Overlay image location
  var $dtzapp_currentImgSrc = $("#dtzapp-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $dtzapp_currentImg = $('#dtzapp-image-gallery img[src="' + $dtzapp_currentImgSrc + '"]');
  // Finds the next image
  var $dtzapp_nextImg = $($dtzapp_currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#dtzapp-overlay img").attr("src", $dtzapp_nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$dtzapp_exitButton.click(function() {
  // Fade out the overlay
  $("#dtzapp-overlay").fadeOut("slow");
});