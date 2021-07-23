// js/src/device_temp.js


(function($){

  $.ajax({
    url : '../../data/device_type.json',
    context : document.body
  }).done(function(data){
    // $.ajax()로 불러오는 모든 내용은 매개변수로 불러오게 됨
    // 비동기식으로 처리되기 때문에 시간이 약간 소모됨
    var importDevice = data;





  // 1. 접속 브라우저 환경
  // 2. 브라우저의 크기값을 파악
  // 3. 각 디바이스 환경을 외부 파일로 분리 및 연결


  
  
  
  // 변수 선언
    var win = $(window);
      // window 객체 : 객체의 계층 구조에서 최상위에 존재하며 가장 기본적이면서도 중요한 객체





  // 1. 접속 브라우저 환경
    // 사용중인 브라우저가 반응형 웹을 개발할 수 있는 브라우저인지 확인 ( 익스플로러가 아닌지 )
  
    var browserSetFn = function(){
      var browser = [
        { type:'Opera', check:'opr'}, 
        { type:'Edge', check:'edg'}, 
        { type:'Chrome', check:'chrome'},
        { type:'Safari', check:'safari'}, 
        { type:'Fire fox', check:'firefox'}
      ];
  
      var checkDevice = navigator.userAgent.toLowerCase();
        // navigator.userAgent에서 나온 브라우저의 환경 값을 전부 소문자로 변경하여 변수로 지정
  
      var n = 0;
      var ckIndex;
      var useRwd = false;
      if(navigator.userAgent.search('Trident') !== -1){
        // IE 브라우저 체크 ( Trident : IE 브라우저의 엔진 )
        useRwd = false;
        console.log('사용 브라우저 :', 'ie');
      }else{
        // IE 이외의 다른 브라우저 기반 체크
        // browser 벼누의 순서를 잘 작성해야 해당 브라우저를 파악 가능
        for( ; n < browser.length ; n++ ){
          ckIndex =  checkDevice.indexOf(browser[n].check);
            // indexOf() : 존재 유무를 판단
              // -1의 값이 도출되면 존재하지 않는다는 의미
              // 이외의 수치가 도출되면 해당하는 위치에 있음을 의미
              // 해당 코드에서는 brower 객체에 익스플로러가 없기 때문에 전부 -1이 나올 경우 해당 브라우저는 익스플로러임을 뜻함
          if(ckIndex !== -1){
            useRwd = true;
            // console.log('사용 브라우저 :', browser[n].type);
            break;
              // breal : 반복문이 전부 실행되기 전에 설정한 값을 도출해낸다면 반복문을 더이상 실행하지 않도록 하는것
              // 처리 속도를 향상시키기 위하여 사용
          }; // if(ckIndex !== -1)
        }; //for( ; n < browser.length ; n++ )
      }; // if(navigator.userAgent.search('Trident') !== -1)
    return useRwd;
    }; // browserSetFn();

    var rwdCheck = browserSetFn();

    if(!rwdCheck){
      console.warn('현재 접속하신 브라우저에서는 반응형 웹사이트 구현이 지원되지 않아, 사용이 불편할 수 있습니다');
      // $('.device').hide();
      // $('.old').show();
    }else{
      // ie가 아닌 반응형 가능한 브라우저
      // 범위는 하위 전부 ~~resize까지
    }





    // 2. 브라우저의 크기값 파악 ( 실시간으로 사이즈 체크 )
      // 2-1. 브라우저의 가로값 변경시 크기 파악
      // 2-2. 지정된 디바이스 환경이 변경되면 새로고침 처리      
      var deviceWidth = function(){
        
      var deviceType = importDevice; 
      var checkType;   
      var winWidth = win.outerWidth(true);

        if(winWidth >= deviceType[3].size){
          checkType = deviceType[3].type;
          // 현 winWidth가 1600과 같거나 그보다 클 시, type을 desktop으로 설정
        }else if(winWidth >= deviceType[2].size){
          checkType = deviceType[2].type;
        }else if(winWidth >= deviceType[1].size){
          checkType = deviceType[1].type;
        }else{
          checkType = deviceType[0].type;
        }
        return checkType;

        // var intSize;
        // var i = deviceType.length-1;
        // for( ; i > 0 ; i -=1 ){
        //   intSize = parseInt(deviceType[i].size);
        //   if(winWidth >= intSize){
        //     checkType = deviceType[i].type;
        //     break;
        //     // break를 사용하지 않으면 조건이 맞아도 이후에 조건문이 계속 실행되어 웹 페이지 기능이 느려질 수 있음
        //   }else{
        //     checkType = deviceType[i].type;
        //   }
        // }

      };
        var beforeWidth = deviceWidth();
        console.log('브라우저 변경 전 가로 크기 : ', beforeWidth);
        // $('.device').hide();
        // $('.' + beforeWidth).show();
  
        // 브라우저의 크기가 변경되면 해당 수치를 파악
        win.on('resize',function(){
          var afterWidth = deviceWidth();
          // console.log('after :', afterWidth);

        // 디바이스 환경이 변경되면 (두개의 값이 일치하지 않을 경우) 새로고침 처리
          if(beforeWidth !== afterWidth){
            location.reload();
          }
        });
    






    }); // $.ajax()

})(jQuery);