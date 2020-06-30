//to-top
jQuery(function ($) {
  var toTop = $(".to-top");
  var body = $("html, body");

  $(window).scroll(function () {
    var winScrollTopValue = $(window).scrollTop();

    if (winScrollTopValue > 800) {
      toTop.fadeIn(600);
    } else if (winScrollTopValue < 800) {
      toTop.hide();
    }
  });

  toTop.on("click", function (event) {
    event.preventDefault(); //отменить действие ссылки по умолчанию
    body.animate({ scrollTop: 0 }, 1200);
  });
});

//gallery
$(document).ready(function () {
  $("#lightgallery").lightGallery();
});
