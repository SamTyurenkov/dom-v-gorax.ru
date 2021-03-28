"use strict";

$ = jQuery, $(document).ready(function () {
  !function lazyLoad() {
    var lazy = document.querySelectorAll(".lazy");
    if (lazy) for (var j = 0; j < lazy.length; j++) {
      lazy[j].style.backgroundImage = 'url("' + lazy[j].dataset.src + '")', lazy[j].classList.remove("lazy"), lazy[j].removeAttribute("data-src");
    }
  }();
}), function (m, e, t, r, i, k, a) {
  m.ym = m.ym || function () {
    (m.ym.a = m.ym.a || []).push(arguments);
  }, m.ym.l = 1 * new Date(), k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = "https://mc.yandex.ru/metrika/tag.js", a.parentNode.insertBefore(k, a);
}(window, document, "script"), ym(35135710, "init", {
  clickmap: !0,
  trackLinks: !0,
  accurateTrackBounce: !0,
  webvisor: !0
});