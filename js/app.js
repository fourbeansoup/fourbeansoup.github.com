$(document).ready(function() {

  $('#nav li').hover(function() { //mouse in
      $(this).animate({ marginTop: '-38px' }, 900);
    }, function() { //mouse out
      $(this).animate({ marginTop: "0px" }, 900);
  });

  $('#footer .social li').hover(function() {
    $(this).animate({ marginTop: '-20px'}, 900);
  }, function() {
    $(this).animate({ marginTop: '0px'}, 900);
  });

  $('.patrons, .about, .services, .identity, .contact, .back_to_top').localScroll({hash: true});

});
