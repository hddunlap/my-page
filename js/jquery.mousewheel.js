
$('.col-4').bind('mousewheel', function(e) { // on scroll
    var $div = $('.col-4');

    // set div scroll top offset to current + extra from this scroll
    $div.scrollLeft($div.scrollLeft() - e.originalEvent.wheelDelta);

     // prevent body scrolling
     return false;
});