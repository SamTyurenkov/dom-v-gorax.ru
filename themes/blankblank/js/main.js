"use strict";

!function (m, e, t, r, i, k, a) {
  m.ym = m.ym || function () {
    (m.ym.a = m.ym.a || []).push(arguments);
  }, m.ym.l = 1 * new Date(), k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = "https://mc.yandex.ru/metrika/tag.js", a.parentNode.insertBefore(k, a);
}(window, document, "script"), function (f, b, e, v, n, t, s) {
  f.fbq || (n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  }, f._fbq || (f._fbq = n), n.push = n, n.loaded = !0, n.version = "2.0", n.queue = [], (t = b.createElement(e)).async = !0, t.src = "https://connect.facebook.net/en_US/fbevents.js", (s = b.getElementsByTagName(e)[0]).parentNode.insertBefore(t, s));
}(window, document, "script"), $ = jQuery, $(document).ready(function () {
  fbq("init", "446387939063532"), fbq("track", "PageView"), ym(35135710, "init", {
    clickmap: !0,
    trackLinks: !0,
    accurateTrackBounce: !0,
    webvisor: !0
  }), function lazyLoad() {
    var lazy = document.querySelectorAll(".lazy");
    if (lazy) for (var j = 0; j < lazy.length; j++) {
      lazy[j].style.backgroundImage = 'url("' + lazy[j].dataset.src + '")', lazy[j].classList.remove("lazy"), lazy[j].removeAttribute("data-src");
    }
  }(), $(".uagb-team__social-icon").click(function () {
    ym(35135710, "reachGoal", "social"), fbq("track", "Lead", {
      value: 100,
      currency: "RUB"
    });
  }), $(".asplink").click(function () {
    ym(35135710, "reachGoal", "asp"), fbq("track", "Lead", {
      value: 100,
      currency: "RUB"
    });
  });
});