// js/src/main.js


(function($){


  // #recommendBox tab menu 설정
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





  // // #artViewBox fade banner 설정
  // var artViewBox = $('#artViewBox');
  // var artViewArea = artViewBox.children('.art_view_area');
  // var newCount = 0;
  // var beforeCount = newCount;
  // var timed = 500;

  // var slideFadeFn = function(newCount){
  //   artViewArea.eq(newCount).show();
  //   artViewArea.eq(beforeCount).fadeOut(function(){
  //     artViewArea.eq(beforeCount).removeClass('act');
  //     artViewArea.eq(newCount).addClass('act');
  //     beforeCount = newCount;
  //   });

  //   setInterval(slideFadeFn(newCount), timed);
  // };





})(jQuery);