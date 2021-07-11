// js/src/lotte_aquarium.js


(function($){
  
  // 사용할 요소들을 변수로 선언
  var infoBox = $('#informationBox');
  var infoType = infoBox.children('.info_type')
  var infoTypeUl = infoType.children('ul');
  var infoTypeLi = infoTypeUl.find('li');
  var infoTypeBtn = infoTypeLi.children('button');

  var basicArea = infoBox.find('.basic_info_area');
  var detailArea = infoBox.find('.detail_info_area');
  var refundArea = infoBox.find('.refund_info_area');
  var content = $('.content');



  // infoAreasss를 display : none; 처리
  // basicArea.css({display : 'none'});
  detailArea.css({display : 'none'});
  refundArea.css({display : 'none'});



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




  // blur 되면 content는 그대로 있어도 infoTypeLi에 있던 .act가 사라짐. 안사라지게 할 수 있는지?
  // focus / blur / mouseenter / mouseleave 등등 전부 따로 설정하면 가능~!~!~!~!~!~!
  // + 마우스 엔터하면 내부로 들어가서 포커스 되도록

})(jQuery);