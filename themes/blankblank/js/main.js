"use strict";

(function (m, e, t, r, i, k, a) {
  m[i] = m[i] || function () {
    (m[i].a = m[i].a || []).push(arguments);
  };

  m[i].l = 1 * new Date();
  k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

!function (f, b, e, v, n, t, s) {
  if (f.fbq) return;

  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };

  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = '2.0';
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '446387939063532');
fbq('track', 'PageView');
ym(35135710, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true
});
$ = jQuery, $(document).ready(function () {
  !function () {
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