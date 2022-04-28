import "./style.css";
import "./assets/photo.png";
import "./assets/bg.png";
import "./assets/view.png";
import "./assets/github.png";
import "./main";

$(document).ready(function () {
  $(".link-category").on("mouseenter", function (e) {
    $(this).addClass("hover");
  });
  $(".link-category").on("mouseleave", function (e) {
    $(this).removeClass("hover");
  });
  $(".link-category").on("click", function (e) {
    $(".link-category").removeClass("active");
    $(this).data('')
    $(this).addClass("active");
  });
});

