const body = $('body');
const btnHamburguer = $('#btnHamburguer');
const header = $('.header');
const overlay = $('.overlay');
overlay.addClass('fade-out');
const menu = $('#mobileMenu');

btnHamburguer.on('click', function () {
  if (header.hasClass('open')) {
    header.removeClass('open');

    body.removeClass('noscroll')

    overlay.removeClass('fade-in');
    overlay.addClass('fade-out');

    menu.removeClass('fade-in');
    menu.addClass('fade-out');
  } else {
    header.addClass('open');

    body.addClass('noscroll')

    overlay.removeClass('fade-out');
    overlay.addClass('fade-in');

    menu.removeClass('fade-out');
    menu.addClass('fade-in');
  }
})