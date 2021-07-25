// js/src/main.js


(function($){


  // #sectionBox fade banner 설정 --------------------
  var sectionBox = $('#sectionBox');
  var viewIndicator = sectionBox.children('.section_indicator');
  var viewIndiLi = viewIndicator.find('li');
  var viewIndiLiLink = viewIndiLi.children('a');
  var viewImgArea = sectionBox.children('.section_img_area');
  var viewImgLi = viewImgArea.children('li');

  var veiwCount = 0;
  var prevCount = veiwCount;
  var timed = 3000;


  // slide fadeOut
  var viewSlideFadeFn = function(n){
    viewImgLi.eq(n).show();
    viewImgLi.eq(prevCount).fadeOut(function(){
      viewImgLi.eq(prevCount).removeClass('act');
      viewImgLi.eq(n).addClass('act');
      prevCount = n;
    });
  };


  // indicator에 addClass act
  var viewIndiActionFn = function(n){
    viewIndiLi.eq(n).addClass('act');
    viewIndiLi.eq(n).siblings().removeClass('act');
  };
  viewIndiActionFn(veiwCount);


  // indicator click
  viewIndiLiLink.on('click',function(e){
    e.preventDefault();
    veiwCount = $(this).parent().index();
    viewSlideFadeFn(veiwCount);
    viewIndiActionFn(veiwCount);
  });


  // trigger 
  var viewAutoMoveFn;
  var viewSlideGoFn = function(){
    viewAutoMoveFn = setInterval(function(){
      veiwCount ++;
      if(veiwCount === 2 ) { veiwCount = 0 };
      viewSlideFadeFn(veiwCount);
      viewIndiActionFn(veiwCount);
    }, timed);
    return viewAutoMoveFn;
  };
  viewSlideGoFn();

  

  



  // #recommendBox tab menu 설정 --------------------
  var locationList = $('.recom_location_list');
  var locationLi = locationList.children('li');
  var locationBtn = locationLi.children('button');
  var hotelList = $('.recom_hotel_list');


  hotelList.eq(1).css({display : 'none'});
  hotelList.eq(2).css({display : 'none'});
  hotelList.eq(3).css({display : 'none'});


  locationLi.eq(0).addClass('act');
  hotelList.attr('tabindex',-1);


  locationBtn.on('focus click',function(e){
    e.preventDefault();
    locationLi.eq(0).removeClass('act');

    var _this = $(this);
    var _thisParent = _this.parent('li');
    var _i = _thisParent.index();
    var _locationEq = locationLi.eq(_i);
    var _hotelEq = hotelList.eq(_i);

    _locationEq.addClass('act');
    _locationEq.siblings().removeClass('act');
    hotelList.attr('tabindex',0);
    _hotelEq.show();
    _hotelEq.siblings().hide();
  });





  // #artViewBox fade banner 설정 --------------------
  var artViewBox = $('#artViewBox');
  var artIndicator = artViewBox.children('.art_view_indicator');
  var artIndiLi = artIndicator.find('li');
  var artIndiLiLink = artIndiLi.children('a');
  var artImgArea = artViewBox.children('.art_view_img');
  var artImgLi = artImgArea.children('li');

  var newCount = 0;
  var beforeCount = newCount;


  // slide fadeOut
  var artSlideFadeFn = function(n){
    artImgLi.eq(n).show();
    artImgLi.eq(beforeCount).fadeOut(function(){
      artImgLi.eq(beforeCount).removeClass('act');
      artImgLi.eq(n).addClass('act');
      beforeCount = n;
    });
  };


  // indicator에 addClass act
  var artIndiActionFn = function(n){
    artIndiLi.eq(n).addClass('act');
    artIndiLi.eq(n).siblings().removeClass('act');
  };
  artIndiActionFn(newCount);


  // indicator click
  artIndiLiLink.on('click',function(e){
    e.preventDefault();
    newCount = $(this).parent().index();
    artSlideFadeFn(newCount);
    artIndiActionFn(newCount);
  });


  // trigger 
  var artAutoMoveFn;
  var artSlideGoFn = function(){
    artAutoMoveFn = setInterval(function(){
      newCount ++;
      if(newCount === 2 ) { newCount = 0 };
      artSlideFadeFn(newCount);
      artIndiActionFn(newCount);
    }, timed);
    return artAutoMoveFn;
  };
  artSlideGoFn();



})(jQuery);