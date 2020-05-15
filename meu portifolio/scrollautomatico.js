/*$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
}); */

var $root = $('html, body');

$('a[href^="contato"]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(contato).offset().top
    }, 500, function () {
        window.location.hash = href;
    });

    return false;
});