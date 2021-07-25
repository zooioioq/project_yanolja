// js/src/lotte_aquarium_320.js


(function($){



  // #viewBox 영역에 indicator 생성 및 slide banner 처리


  
  // 변수 선언
  var viewBox = $('#viewBox');
  var viewImg = viewBox.children('#view_img');
  var viewImgUl = viewImg.find('.view_img_area');
  var viewImgLi = viewImgUl.children('li');
  var viewImgLiLen = viewImgLi.length;
  var timed = 500;



  // indicator 생성
  var makeIndicator = '<div class="view_indicator"><ul></ul></div>';
  viewImg.prepend(makeIndicator);

  var viewIndicator = viewImg.children('.view_indicator');
  var viewIndiUl = viewIndicator.children('ul');
  
  var i = 0;
  for( ; i < viewImgLiLen ; i++ ){
    var makeIndiLi = '<li><a href="#view_img_0'+ (i + 1) +'"><span class="blind">0'+ ( i + 1 ) +'</span></a></li>';
    viewIndiUl.append(makeIndiLi);
    var viewIndiLi = viewIndiUl.children('li');
    var viewIndiLink = viewIndiLi.find('a');
  };

  viewIndiLi.eq(0).addClass('act');



  // viewImgUl + Li size 설정
  viewImgUl.css({width : (100 * viewImgLiLen) + '%'});
  viewImgLi.css({width : (100 / viewImgLiLen) + '%'});



  // 함수 생성
  var slideMoveFn = function(i){
    viewImgUl.stop().animate({marginLeft : (-100 * i) + '%'},timed);
    viewIndiLi.eq(i).addClass('act');
    viewIndiLi.eq(i).siblings().removeClass('act');
  };



  // event
  viewIndiLink.on('click',function(e){
    e.preventDefault();
    i = $(this).parent().index();
    slideMoveFn(i);  
  });



})(jQuery);