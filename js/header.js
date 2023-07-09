$(document).ready(function() {
  $("#projectLink").click(function() {
    $("html, body").animate({ scrollTop: 500 }, "smooth");
    return false;
  });

  $("#skillsLink").click(function() {
    $("html, body").animate({ scrollTop: 1000 }, "smooth");
    return false;
  });
});