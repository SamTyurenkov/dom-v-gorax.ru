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
  $(document).on('click','.uagb-team__social-icon',function() {
    console.log('reachgoal');
    ym(35135710,'reachGoal','social');
    fbq('track', 'Lead');
  });
  $(document).on('click','.asplink',function() {
    console.log('reachgoal');
    ym(35135710,'reachGoal','asp');
    fbq('track', 'Lead');
  });

  // $(document).on('click','.kb-forms-submit', function(){
  //   console.log('reachgoal');
  //   ym(35135710,'reachGoal','asp');
  //   fbq('track', 'Lead');
  // });
});