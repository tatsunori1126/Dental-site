$(function () {
    $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
        $('.btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
        $('.p-header__nav-res').slideToggle(200);
    })
  });