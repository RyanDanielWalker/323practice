
$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });

  $(".fade-in").click(function() {
    $("#img-in").fadeToggle();
  });

  $("#img-out").click(function() {
    $("#img-out").fadeOut();
  });

  $(".slide-up").click(function() {
    $("#img-mondrian").slideUp();
  });

  $(".slide-down").click(function() {
    $("#img-mondrian").slideDown();
  });

  $("#slide-toggle").click(function() {
    $("#img-mondrian").slideToggle();
  });

  $("#more_info").click(function() {
    $(".hides").slideToggle();
  });
});