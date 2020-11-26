// jsを記述する際はここに記載していく

/---------- ここから下から上へのフェイドイン効果----------/;

$(function () {
  $(window).scroll(function () {
    $(".fadein").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});

/---------- ここまで下から上へのフェイドイン効果----------/;

/---------- ここからチーズ回転のフェイドイン効果----------/;

$(function () {
  $(window).scroll(function () {
    $(".fadeincheesekaiten1").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".fadeincheesekaiten2").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});

/---------- ここまでチーズ回転のフェイドイン効果----------/;

/---------- ここからコーズのフェイドイン効果----------/;

$(function () {
  $(window).scroll(function () {
    $(".fadeincourse1").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".fadeincourse2").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});

/---------- ここまでコースのフェイドイン効果----------/;

/---------- ここからニュースのフェイドイン効果----------/;
$(function () {
  $(window).scroll(function () {
    $(".fadeinnews1").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".fadeinnews2").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".fadeinnews3").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});

/---------- ここまでニュースのフェイドイン効果----------/;

/----------ここからゲーム----------/;
$(".toggle_img").on("click", function () {
  if ($(this).hasClass("change")) {
    $(this).attr("src", "./img/batsu.png");
    $(this).toggleClass("change");
  } else {
    $(this).attr("src", "./img/tom.gif");
    $(this).toggleClass("change");
  }
});

$(".toggle_img2").on("click", function () {
  if ($(this).hasClass("change")) {
    $(this).attr("src", "./img/cheese3.png");
    $(this).toggleClass("change");
  } else {
    $(this).attr("src", "./img/tom.gif");
    $(this).toggleClass("change");
  }
});
/----------ここまでゲーム----------/;

/---------- ここからゲームの音再生----------/;
function sound() {
  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById("sound-file").play();
}

function incorrect() {
  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById("incorrect-file").play();
}
/---------- ここまでゲームの音再生----------/;

/---------- ここからtop戻るボタン----------/;
$(document).ready(function () {
  $("#topBtn").hide(); //とりあえず隠す
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      //100以上にスクロールされた／されている時は
      $("#topBtn").fadeIn("fast"); //ふわっと表示
    } else {
      //それ意外は
      $("#topBtn").fadeOut("fast"); //ふわっと非表示
    }
  });
  $("#topBtn").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});
/---------- ここまでtop戻るボタン----------/;

/---------- ここからネズミのtop戻るボタン----------/;
$(document).ready(function () {
  $("#nezumi").hide(); //とりあえず隠す
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      //100以上にスクロールされた／されている時は
      $("#nezumi").fadeIn("fast"); //ふわっと表示
    } else {
      //それ意外は
      $("#nezumi").fadeOut("fast"); //ふわっと非表示
    }
  });
  $("#nezumi").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});
/---------- ここまでネズミのtop戻るボタン----------/;
