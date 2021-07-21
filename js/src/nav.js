// js/src/nav.js


(function($){

  var navLink = $('#nav_link');

  navLink.on('click',function(){
    var hasAct = navLink.hasClass('act');
    if(hasAct){
      navLink.removeClass('act');
    }else{
      navLink.addClass('act');
    }

  });

})(jQuery);