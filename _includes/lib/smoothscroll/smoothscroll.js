const smoothscroll = function(e) {
  /* prevent default anchor click behavior */
  e.preventDefault();

  /* store hash */
  let hash = this.hash;

  /* animate */
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 400, function(){

  /* when done, add hash to url */
  /* (default click behaviour) */
  history.replaceState(null, null, hash);
  $('.ui.sidebar').sidebar('hide');
  });
};

$('.back_to_top').on('click', smoothscroll);
