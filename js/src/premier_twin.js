// js/src/premier_twin.js


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






})(jQuery);