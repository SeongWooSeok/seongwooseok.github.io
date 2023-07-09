$(document).ready(function() {
  $("#projectLink").click(function() {
    $('html, body').animate({
      scrollTop: $("#project-section").offset().top
    }, 1000);
  });

  $("#skillsLink").click(function() {
    $('html, body').animate({
      scrollTop: $("#skills-section").offset().top
    }, 1000);
  });
});