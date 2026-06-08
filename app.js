$(document).ready(function () {

  function loadPage(page) {
    $("#content").fadeOut(200, function () {
      $("#content").load(page, function () {
        $("#content").fadeIn(200);
      });
    });
  }

  // Load pertama kali (default home)
  loadPage("home.html");

  // Event tombol
  $("#homeBtn").click(function () {
    loadPage("home.html");
  });

  $("#aboutBtn").click(function () {
    loadPage("about.html");
  });

  $("#contactBtn").click(function () {
    loadPage("contact.html");
  });

});