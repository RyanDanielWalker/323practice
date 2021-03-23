$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#text_light").click(function() {
    $("body").removeClass();
    // $("body").addClass("dark-background");
    $("body").toggleClass("dark-background");
  });

  $(".highlightable").click(function() {
    $(this).toggleClass("highlight-paragraph");
  })
});