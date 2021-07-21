// js/src/main.js


(function($){


var locationList = $('.recom_location_list');
var locationLi = locationList.children('li');
var locationBtn = locationLi.children('button');
var hotelList = $('.recom_hotel_list');
var hotelSelect


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
  _locationEq.addClass('act');
  _locationEq.siblings().removeClass('act');
  var _hotelEq = hotelList.eq(_i);

  hotelList.attr('tabindex',0);
  _hotelEq.show();
  _hotelEq.siblings().hide();

});



// locationBtn.on('click focus',function(e){
//   e.preventDefault();

//   var _this = $(this);
//   var _thisParent = _this.parent('li');
//   var _i = _thisParent.index();

//   var _hotelEq = hotelList.eq(_i);
//   hotelSelect = _hotelEq;

//   _hotelEq.show();
//   _hotelEq.siblings('hotelList').hide();
// });




})(jQuery);