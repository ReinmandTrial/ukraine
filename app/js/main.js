$(document).ready(function () {

   // select
   $('.js-select-head').on('click', function () {
      var btn = $(this);
      var block = btn.closest(".js-select");

      if (!block.hasClass('open')) {
         $('.js-select').removeClass('open');
      }
      block.toggleClass('open');
   });
   $('.js-select-body .js-select-item').on('click', function () {
      btn = $(this);
      block = btn.closest('.js-select');
      thisText = btn.text()

      block.toggleClass('open');
      // btn.swap('.js-select-head .js-select-item');
      block.find('.js-select-head p').text(thisText);
   });

   $(document).on('mouseup', function (e) {
      if (!$(e.target).closest(".js-select").length) {
         $('.js-select').removeClass('open');
      }
      e.stopPropagation();
   });

   // $('button').on('click', function () {
   //    $('.left').swap('.right');
   // });

   // jQuery.fn.swap = function (b) {
   //    b = jQuery(b)[0];
   //    var a = this[0],
   //       a2 = a.cloneNode(true),
   //       b2 = b.cloneNode(true),
   //       stack = this;

   //    a.parentNode.replaceChild(b2, a);
   //    b.parentNode.replaceChild(a2, b);

   //    stack[0] = a2;
   //    return this.pushStack(stack);
   // };
   // select end

   // popup
   $('.btn-popup-rules-of-entrance').on('click', function () {
      $('.popup-rules-of-entrance').fadeIn();
   })
   $('.btn-popup-city-rules').on('click', function () {
      $('.popup-city-rules').fadeIn();
   })
   $('.btn-popup-hotels-rules').on('click', function () {
      $('.popup-hotels-rules').fadeIn();
   })
   $('.btn-popup-public-rules').on('click', function () {
      $('.popup-public-rules').fadeIn();
   })
   $('.btn-popup-info-travel').on('click', function () {
      $('.popup-info-travel').fadeIn();
   })
   $('.btn-popup-certificate').on('click', function () {
      $('.popup-certificate').fadeIn();
   })
   $('.btn-popup-questions').on('click', function () {
      $('.popup-questions').fadeIn();
   })

   // страны
   $('.btn-popup-country-egypt').on('click', function () {
      $('.popup-country-egypt').fadeIn();
   })
   //нажатие вне body
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".popup__content").length && !$(e.target).closest(".btn-popup").length) {
         $('.popup').fadeOut();
      }
      e.stopPropagation();
   });
   $('.popup-close').on('click', function () {
      $('.popup').fadeOut();
   })
   $('.popup .btn').on('click', function () {
      $('.popup').fadeOut();
   })
   //нажатие вне body
   //popup end
});