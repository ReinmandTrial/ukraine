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
   $('input[name="daterange"]').focusin(function () {
      $(this).closest('.js-calendar').addClass('open');
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
   // select end

   // popup
   $('.btn-popup-rules-of-entrance').on('click', function () {
      $('.popup-rules-of-entrance').fadeIn();
   });
   $('.btn-popup-city-rules').on('click', function () {
      $('.popup-city-rules').fadeIn();
   });
   $('.btn-popup-hotels-rules').on('click', function () {
      $('.popup-hotels-rules').fadeIn();
   });
   $('.btn-popup-public-rules').on('click', function () {
      $('.popup-public-rules').fadeIn();
   });
   $('.btn-popup-info-travel').on('click', function () {
      $('.popup-info-travel').fadeIn();
   });
   $('.btn-popup-certificate').on('click', function () {
      $('.popup-certificate').fadeIn();
   });
   $('.btn-popup-questions').on('click', function () {
      $('.popup-questions').fadeIn();
   });
   $('.btn-popup-diia').on('click', function () {
      $('.popup-diia').fadeIn();
   });
   $('.btn-popup-search').on('click', function () {
      $('.popup-search').fadeIn();
   });

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

   $('.js-add-tourist').on('click', function () {
      var btn = $(this);
      if (btn.hasClass('js-add-tourist-block')) {
         btn.closest('.form-policy').find('.form-policy__participants').show();
         btn.removeClass('js-add-tourist-block');
      } else {
         btn.closest('.form-policy').find('.form-policy__tourist.to-clone').clone().appendTo('.form-policy__participants').find('input').val('');
         $('.form-policy__tourist.to-clone:last-child').removeClass('to-clone');
         $('.form-policy__tourist').find('.num').val('');
         $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
            $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this) + 1);
         });
      }
   });

   $('.block-forms__btn-policy').on('click', function () {
      $(this).toggleClass('active');
      $(this).closest('.block-forms__content').find('.form-policy').toggleClass('open');
   });
   $('.form-policy__next').on('click', function () {
      $(this).closest('.form-policy__content').find('.form-policy__step-one').hide();
      $(this).closest('.form-policy__content').find('.form-policy__step-two').show();
   });
   $('.form-policy__back').on('click', function () {
      $(this).closest('.form-policy__content').find('.form-policy__step-two').hide();
      $(this).closest('.form-policy__content').find('.form-policy__step-one').show();
   });

   $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
      $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this) + 1);
   });

   //плавная прокрутка якоря
   const anchors = document.querySelectorAll('a[href*="#"]')

   for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
         e.preventDefault()

         const blockID = anchor.getAttribute('href').substr(1)

         document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   }

   // Календарь

   $('input[name="daterange"]').on('focus', function () {

      $(this).daterangepicker({
         opens: 'center',
         "linkedCalendars": false,
         "autoApply": true,
         "parentEl": ".js-calendar",
         "showCustomRangeLabel": false,
         "locale": {
            "format": "DD/MM/YYYY",
            "separator": " до ",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
               "Пн",
               "Вт",
               "Ср",
               "Чт",
               "Пт",
               "Сб",
               "Нд"
            ],
            "monthNames": [
               "Січень",
               "Лютий",
               "Березень",
               "Квітень",
               "Травень",
               "Червень",
               "Липень",
               "Серпень",
               "Вересень",
               "Жовтень",
               "Листопад",
               "Грудень"
            ],
            "firstDay": 1
         },
      }, function (start, end, label) {
         console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
      });
      return;
   });

   $.fn.lastWord = function () {
      var text = this.text().trim().split(" ");
      var last = text.pop();
      this.html(text.join(" ") + (text.length > 0 ? " <span class='lastWord'>" + last + "</span>" : last));
   };
   // Календарь конец



   // скролл старт
   new SimpleBar(document.getElementById('scroll-popup-rules-of-entrance'));
   new SimpleBar(document.getElementById('scroll-popup-info-travel'));
   new SimpleBar(document.getElementById('scroll-popup-country-egypt'));
   new SimpleBar(document.getElementById('scroll-popup-questions'));
   new SimpleBar(document.getElementById('scroll-popup-search'));
   new SimpleBar(document.getElementById('mini-search__result'));

   if ($('.wrapper').hasClass('leave-ukraine')) {
      // стр 2
      new SimpleBar(document.getElementById('scroll-popup-certificate'));
   } else {
      // стр 1
      new SimpleBar(document.getElementById('scroll-popup-diia'));
      new SimpleBar(document.getElementById('scroll-popup-city-rules'));
      new SimpleBar(document.getElementById('scroll-popup-hotels-rules'));
      new SimpleBar(document.getElementById('scroll-popup-public-rules'));

   }

   // скролл конец

   // поиск

   var max = 15;
   $('.choose-the-country .search__results.not-all').each(function () {
      $(this).find('.search__item.show').each(function (index) {
         if (index >= max) {
            $(this).removeClass('show');
         } else {
            $(this).addClass('show');
         }
      })
   })

   $('.search__input').keyup(function () {

      var input, filter, ul, li, a, i;
      input = document.getElementById("search-main");
      filter = input.value.toUpperCase();
      ul = document.getElementById("results-main");
      li = ul.getElementsByTagName("div");
      for (i = 0; i < li.length; i++) {
         a = li[i];
         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].classList.add('show');
            var max = 15;
            $('.choose-the-country .search__results.not-all').each(function () {

               $(this).find('.search__item.show').each(function (index) {
                  if (index >= max) {
                     $(this).removeClass('show');
                  } else {
                     $(this).addClass('show');
                  }
               })
            })
         } else {
            li[i].classList.remove('show');
            var max = 15;
            $('.choose-the-country .search__results.not-all').each(function () {

               $(this).find('.search__item.show').each(function (index) {
                  if (index >= max) {
                     $(this).removeClass('show');
                  } else {
                     $(this).addClass('show');
                  }
               })
            })
         }
      }
   });
   $('.popup .search__input').keyup(function () {

      var input, filter, ul, li, a, i;
      input = document.getElementById("popup-search-main");
      filter = input.value.toUpperCase();
      ul = document.getElementById("popup-results-main");
      li = ul.getElementsByTagName("div");
      for (i = 0; i < li.length; i++) {
         a = li[i];
         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].classList.add('show');
            var max = 15;
            $('.choose-the-country .search__results.not-all').each(function () {

               $(this).find('.search__item.show').each(function (index) {
                  if (index >= max) {
                     $(this).removeClass('show');
                  } else {
                     $(this).addClass('show');
                  }
               })
            })
         } else {
            li[i].classList.remove('show');
            var max = 15;
            $('.choose-the-country .search__results.not-all').each(function () {

               $(this).find('.search__item.show').each(function (index) {
                  if (index >= max) {
                     $(this).removeClass('show');
                  } else {
                     $(this).addClass('show');
                  }
               })
            })
         }
      }
   });

   $('#mini-search__input').keyup(function () {
      // alert('f');

      var input, filter, ul, li, a, i;
      input = document.getElementById("mini-search__input");
      filter = input.value.toUpperCase();
      ul = document.getElementById("mini-search__result");
      li = ul.getElementsByTagName("p");
      for (i = 0; i < li.length; i++) {
         // alert('f');
         a = li[i];
         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].classList.add('show');
         } else {
            li[i].classList.remove('show');
         }
      }
   });




   // 
});

