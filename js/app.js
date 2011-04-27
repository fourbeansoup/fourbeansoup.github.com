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

  $('.patrons, .about, .services, .identity, .contact, .footer-area').localScroll({hash: true});

  $("label").inFieldLabels();
});
