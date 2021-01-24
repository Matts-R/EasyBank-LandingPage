const btnHamburguer = $('#btnHamburguer');
const header = $('.header');
const overlay = $('.overlay');
overlay.addClass('fade-out');

btnHamburguer.on('click', function () {
  if (header.hasClass('open')) {
    header.removeClass('open');

    overlay.removeClass('fade-in');
    overlay.addClass('fade-out');
  } else {
    header.addClass('open');

    overlay.removeClass('fade-out');
    overlay.addClass('fade-in');
  }
})