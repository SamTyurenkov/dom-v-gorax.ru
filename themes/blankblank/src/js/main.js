$ = jQuery;
$(document).ready(function () {

  function lazyLoad() {
    var lazy = document.querySelectorAll(".lazy");
    if (lazy) {
      for (var j = 0; j < lazy.length; j++) {
        lazy[j].style.backgroundImage = 'url("' + lazy[j].dataset.src + '")';
        lazy[j].classList.remove("lazy");
        lazy[j].removeAttribute("data-src");
      }
    }
  }
  lazyLoad();

  $('.uagb-team__social-icon').on('click',function() {
    ym(35135710,'reachGoal','social');
    fbq('track', 'Lead', {
      value: 100,
      currency: 'RUB',
    });
  });
  $('.asplink').on('click',function() {
    ym(35135710,'reachGoal','asp');
    fbq('track', 'Lead', {
      value: 100,
      currency: 'RUB',
    });
  });
});