// js/src/marriott.js


(function($){

  $.ajax({
    // import : device_type.json 
    url : '../../data/device_type.json',
    context : document.body
  }).done(function(data){
    var dataType = data;
    
    var dataUseJS = {
      smartphone : 'sub_view_320.js',
      tablet : 'sub_view_768.js'
    };
    
    var jsUrl = '../js/src/rwd/';
    var winW = $(window).outerWidth();
    var i = dataType.length - 1;
    var ckType, deviceType;



    // device 규격 파악
      for ( ; i >= 0 ; i-=1 ){
        ckType = parseInt(dataType[i].size);
        if(winW >= ckType){
          deviceType = dataType[i].type;
          break;
        }else{
          deviceType = dataType[0].type;
        }
      }



    // 해당 device에 해당하는 js 파일 삽입 함수
      var scriptCodeFn = function(source){
        var src = jsUrl + source;
        var script = '<script src="' + src +'"></script>';
        // body의 마지막 부분에 script 삽입
        $('body').append(script);
      };
    // 함수 실행
      scriptCodeFn(dataUseJS[deviceType]);







  }); // $.ajax







  // 사용할 요소들을 변수로 선언
  var infoBox = $('#informationBox');
  var infoType = infoBox.children('.info_type')
  var infoTypeUl = infoType.children('ul');
  var infoTypeLi = infoTypeUl.find('li');
  var infoTypeBtn = infoTypeLi.children('button');

  var reservatonArea = infoBox.find('.reservation_area');
  var basicArea = infoBox.find('.basic_info_area');
  var reviewArea = infoBox.find('.review_area');
  var content = $('.content');



  // infoAreasss를 display : none; 처리
  // reservationArea.css({display : 'none'});
  basicArea.css({display : 'none'});
  reviewArea.css({display : 'none'});



  // passive 상태일때 첫번째 type li에 .act 부여
  infoTypeLi.eq(0).addClass('act');
  content.attr('tabindex', -1);



  var contentSelect;


  // infoTypeBtn focus / click시 content show
  infoTypeBtn.on('focus click',function(e){
  // button 요소의 기본 event 제거
  e.preventDefault();

  // passive 상태일때 부여했던 첫번째 type li에서 .act 제거 
  infoTypeLi.eq(0).removeClass('act');
  
  // 선택한 요소 자체를 변수로 선언
  var _this = $(this);
  // 선택한 요소의 부모 요소를 변수로 선언
  var _thisParent = _this.parent('li');
  // 해당 부모 요소의 순번을 파악하여 변수로 선언
  var _i = _thisParent.index();
  
  // 선택된 li에 .act 부여
  infoTypeLi.eq(_i).addClass('act');

  // 선택한 li의 순번과 동일한 content를 선택하기 위해 변수로 지정
  var _contentEq = content.eq(_i);

  // 해당 순번의 content는 show, 그 외의 형제 요소들은 hide 처리
  content.attr('tabindex',0);
  _contentEq.show();
  _contentEq.siblings(content).hide();
  });



  // blur 되었을 경우의 상태를 설정
  infoTypeBtn.on('blur',function(e){
    e.preventDefault();

    var _this = $(this);
    var _thisParent = _this.parent('li');
    var _i = _thisParent.index();

    // blur된 li에서 .act를 제거
    infoTypeLi.eq(_i).removeClass('act');
  });


})(jQuery);