var sliderInit = function() {
  var first = $('.slider__item:first-of-type');
  var prev, next;

  first.addClass('active');

  $('#slider').css('height', $('.slider__item.active').height());

  if (first.prev().length) {
    prev = first.prev();
    prev.addClass('prev');
  } else {
    $('.slider__item:last-of-type').insertBefore('.slider__item:first-of-type');
    prev = first.prev();
    prev.addClass('prev');
  }
  if (first.next().length) {
    next = first.next();
    next.addClass('next');
  } else {
    $('.slider__item:first-of-type').insertAfter('.slider__item:last-of-type');
    next = first.next();
    next.addClass('next');
  }
  if ($('.slider__item').length >= 5 && screen.width > 1024) {
    $('.slider__item:last-of-type').insertBefore('.slider__item:first-of-type');
    prev.prev().addClass('prev-prev');
    next.next().addClass('next-next')
  }
}

$('.slider__item').click(function() {
  if ($(this).hasClass('active')) return;
  var activeIndex = $('.slider__item.active').index();

  $('.slider__item').each(function(item) {
    $(this).attr('class', 'slider__item')
  });

  $(this).attr('class', 'slider__item').addClass('active');

  if (activeIndex < $(this).index()) {
    var first = $('.slider__item:first-of-type');

    first.insertAfter('.slider__item:last-of-type');
    $(this).next().attr('class', 'slider__item').addClass('next');
    $(this).prev().attr('class', 'slider__item').addClass('prev');
    if (screen.width >= 1024) {
      $('.slider__item.prev').prev().addClass('prev-prev');
      $('.slider__item.next').next().addClass('next-next');
    }

  } else if (activeIndex > $(this).index()) {
    var last = $('.slider__item:last-of-type');

    last.insertBefore('.slider__item:first-of-type');
    $(this).prev().attr('class', 'slider__item').addClass('prev');
    $(this).next().attr('class', 'slider__item').addClass('next');
    console.log(screen.width)
    if (screen.width >= 1024) {
      $('.slider__item.prev').prev().addClass('prev-prev');
      $('.slider__item.next').next().addClass('next-next');
    }
  }
})

sliderInit()
