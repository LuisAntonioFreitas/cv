// Gallery image hover
$( ".dtzatd-img-wrapper" ).hover(
  function() {
    $(this).find(".dtzatd-img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".dtzatd-img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $dtzatd_overlay = $('<div id="dtzatd-overlay"></div>');
var $dtzatd_image = $("<img>");
var $dtzatd_prevButton = $('<div id="dtzatd-prevButton"><i class="fa fa-chevron-left"></i></div>');
var $dtzatd_nextButton = $('<div id="dtzatd-nextButton"><i class="fa fa-chevron-right"></i></div>');
var $dtzatd_exitButton = $('<div id="dtzatd-exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$dtzatd_overlay.append($dtzatd_image).prepend($dtzatd_prevButton).append($dtzatd_nextButton).append($dtzatd_exitButton);
$("#dtzatd-gallery").append($dtzatd_overlay);

// Hide overlay on default
$dtzatd_overlay.hide();

// When an image is clicked
$(".dtzatd-img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var dtzatd_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $dtzatd_image.attr("src", dtzatd_imageLocation);
  // Fade in the overlay
  $dtzatd_overlay.fadeIn("slow");
});
$(".dtzatd-img-overlay-link").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var dtzatd_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $dtzatd_image.attr("src", dtzatd_imageLocation);
  // Fade in the overlay
  $dtzatd_overlay.fadeIn("slow");
});

// When the overlay is clicked
$dtzatd_overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$dtzatd_nextButton.click(function(event) {
  // Hide the current image
  $("#dtzatd-overlay img").hide();
  // Overlay image location
  var $dtzatd_currentImgSrc = $("#dtzatd-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $dtzatd_currentImg = $('#dtzatd-image-gallery img[src="' + $dtzatd_currentImgSrc + '"]');
  // Finds the next image
  var $dtzatd_nextImg = $($dtzatd_currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $dtzatd_images = $("#dtzatd-image-gallery img");
  // If there is a next image
  if ($dtzatd_nextImg.length > 0) { 
    // Fade in the next image
    $("#dtzatd-overlay img").attr("src", $dtzatd_nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#dtzatd-overlay img").attr("src", $($dtzatd_images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$dtzatd_prevButton.click(function(event) {
  // Hide the current image
  $("#dtzatd-overlay img").hide();
  // Overlay image location
  var $dtzatd_currentImgSrc = $("#dtzatd-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $dtzatd_currentImg = $('#dtzatd-image-gallery img[src="' + $dtzatd_currentImgSrc + '"]');
  // Finds the next image
  var $dtzatd_nextImg = $($dtzatd_currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#dtzatd-overlay img").attr("src", $dtzatd_nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$dtzatd_exitButton.click(function() {
  // Fade out the overlay
  $("#dtzatd-overlay").fadeOut("slow");
});