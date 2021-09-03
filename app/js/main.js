$(function () {
  $('#search').click(function () {
    $('.menu-item').addClass('hide-item');
    $('.header__search-form').addClass('active');
    $('.close').addClass('active');
    $('#search').hide();
  });
  $('.close').click(function () {
    $('.menu-item').removeClass('hide-item');
    $('.header__search-form').removeClass('active');
    $('.close').removeClass('active');
    $('#search').show();
  });

  //Stiky scroll header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header__top-inner');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  //slider
  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });
});
