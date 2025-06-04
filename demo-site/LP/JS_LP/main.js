/*=================================================
ハンバーガーメニュー
===================================================*/
$(function () {
    $(".toggle-button").on("click", function () {
        if ($("#header").hasClass("open")) {
            $("#header").removeClass("open");
        } else {
            $("#header").addClass("open");
        }
    }
    );

   // ナビゲーション内のリンクをクリックでメニューを閉じる
    $("#header-nav a").on("click", function () {
        $("#header").removeClass("open");
    });
});
