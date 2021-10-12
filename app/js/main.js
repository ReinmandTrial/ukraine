$(document).ready(function () {

   // select
   $('.js-select-head').on('click', function () {
      btn = $(this);
      btn.closest('.js-select').toggleClass('open');

   });
   $('.js-select-body .js-select-item').on('click', function () {
      btn = $(this);
      block = btn.closest('.js-select');
      // thisText = btn.text()

      btn.closest('.js-select').toggleClass('open');
      // btn.swap('.js-select-head .js-select-item');
      // block.find('.js-select-head .lang__item').text(thisText);
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

});