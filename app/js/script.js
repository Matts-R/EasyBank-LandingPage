const body = $('body');
const btnHamburguer = $('#btnHamburguer');
const header = $('.header');
const overlay = $('.overlay');
const image = $('#image');
const menu = $('#mobileMenu');
overlay.addClass('fade-out');

btnHamburguer.on('click', function () {
  if (header.hasClass('open')) {
    body.removeClass('noscroll')

    header.removeClass('open');

    overlay.removeClass('fade-in');
    overlay.addClass('fade-out');

    menu.removeClass('fade-in');
    menu.addClass('fade-out');

    image.show(800, 'linear')
  } else {
    body.addClass('noscroll')

    header.addClass('open');

    overlay.removeClass('fade-out');
    overlay.addClass('fade-in');

    menu.removeClass('fade-out');
    menu.addClass('fade-in');

    image.hide(800, 'linear')
  }
})