//Problem: User when clicking on image goes to a dead end...poor user experience
//Solution: Create an overlay with the large image - Lightbox

// Declare overlay and image html elements as jQuery variables
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
// Add image to overlay
$overlay.append($image);
// Add an overlay       
$("body").append($overlay);
// Add a caption to overlay
$overlay.append($caption);
// Capture the click event on a link to an image
$(document).ready(function(){
  $('.col-4 img').click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr('href');
    // Update overlay with the image linked in the anchor
    $image.attr('src',imageLocation);
    // Show the overlay
    $overlay.show();
    // Get child's alt attribute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
  });
  // When overlay is clicked...  
  $overlay.click(function() {
    // Hide overlay
    $overlay.hide();     
  });
});

      


