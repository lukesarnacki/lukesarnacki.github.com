$(function () {
  $(document).bind('deck.change', function(event, from, to) {
    toSlide = $.deck('getSlide', to);
    fromSlide = $.deck('getSlide', from);

    if (toSlide.hasClass('strike')) {
      toSlide.addClass('out');
    }

    if (fromSlide.hasClass('strike') && from > to) {
      fromSlide.removeClass("out");
    }
  });
});
