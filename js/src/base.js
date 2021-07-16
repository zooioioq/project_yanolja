// js/src/base.js



(function($){



  var header = $('#header');
  var nav = $('#nav');
  var quickBtnDown = $('#quickButtonDown');
  var footer = $('#footer');
  var quickBtnUp = $('#quickButtonUp');


  
  header.load('./base/header.html');
  nav.load('./base/nav.html');
  quickBtnDown.load('./base/quickButtonDown.html');
  footer.load('./base/footer.html');
  quickBtnUp.load('./base/quickButtonUp.html');



})(jQuery);