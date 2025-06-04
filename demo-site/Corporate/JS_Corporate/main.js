$(function(){
    $(".toggle-button").on("click", function (){
        if ($("#header").hasClass("open")) {
            $("#header").removeClass("open");
        } else {
            $("#header").addClass("open");
        }
    }
);

$("#mask").on("click", function () {
    $("#header").removeClass("open");
});
});

$(window).on('resize', function () {
    var windowWidth = $(window).width();

    if (windowWidth >= 960) {
        // openクラスを外す（即座に非表示にする）
        $('body').removeClass('open');

        // メニュー・マスクの表示状態を即座に初期化
        $('#header-nav').removeAttr('style');
        $('#mask').removeAttr('style');
    } else {
        // SPに戻った場合、念のため初期状態を強制
        $('#header-nav').css({
            left: '-300px',
            opacity: '0',
            transition: 'none' // 一時的にトランジションを無効化
        });

        $('#mask').css({
            display: 'none',
            opacity: '0',
            transition: 'none'
        });

        // 50ms後にトランジションを元に戻す（再有効化）
        setTimeout(function () {
            $('#header-nav').css('transition', '');
            $('#mask').css('transition', '');
        }, 50);
    }
});




$(function() {
    // スクロール時の処理
    $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
        $('.to-top').fadeIn(); // 700px超えたら表示
    } else {
        $('.to-top').fadeOut(); // 戻ったら非表示
}
    });

    // ボタンクリック時に最上部へ戻る
    $('.to-top').click(function(e) {
      e.preventDefault(); // aタグのジャンプ無効
      $('html, body').animate({ scrollTop: 0 }, 500); // 500ミリ秒でスムーズスクロール
    });
});