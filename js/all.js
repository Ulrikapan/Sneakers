$(document).ready(function($) {
	// menu選單
	// -----------------
	  // 手機版選單
	var MobileMenu = $('.nav-menu'),
	    MobileNavToggleBtn = $('.nav-toggle-btn');

	MobileNavToggleBtn.on('click', function(){
	  MobileMenu.toggleClass('toggle_open');
	  MobileNavToggleBtn.toggleClass('toggle_open');
	})


	 // 點選選單後收回
	MobileMenu.find('li').on('click', function(){
	  if(MobileMenu.hasClass('toggle_open')){
	    MobileMenu.removeClass('toggle_open');
	    MobileNavToggleBtn.removeClass('toggle_open');
	  }
	})

	// 調整點選選單後，以滑動的方式到錨點定位
	$(document).on('click','a',function(e){
	  // 先取消a標籤的預設動作
	  e.preventDefault();
	  var target= $(e.target).attr('href');
	  $('html,body').animate({
	    scrollTop: $(target).offset().top
	  },1000);
	});




	//---------------------

	$(window).on('scroll', function(){
		
		//nav-bar 在最視窗滾到最上時隱藏
		  if($(window).scrollTop()>10){
		    $('.nav-bar').removeClass('atTop');
		  }else{
		    $('.nav-bar').addClass('atTop');
		  }

		


		//---------------------	
		var wScroll = $(window).scrollTop();

		$('.header_content').css('transform','translate(0,'+ - wScroll / 2 +'px)');
		$('.fore-leg').css('transform','scale('+  (1 - wScroll / 4000) +') translate(0,'+ - wScroll / 50+'px)');


		if (wScroll > $('.product_pic').offset().top - $(window).height() / 1.3){
			$('.product_box').each(function(i){
				setTimeout(function(){
					$('.product_box').eq(i).addClass('is-showing');	
				}, 300 * (i + 1));
					
			});
		};
		if (wScroll > $('.about_window').offset().top - $(window).height()){	
			$('.about_window').css('background-position' ,'center ' + (wScroll + $('.about_window').offset().top ) +'px');
			var opacity = ((wScroll - $('.about_window').offset().top) / wScroll * 100 + 3);
			$('.promot_bg').css('opacity', opacity);
		};
		
		if (wScroll > $('.section_lookbooks').offset().top - $(window).height() / 5){
			var X = wScroll - $('.section_lookbooks').offset().top
			var Y = -( wScroll - $('.section_lookbooks').offset().top )
			// console.log(wScroll, $('.section_lookbooks').offset().top)
			$('.lookbooks_item_01').css('transform','translate('+ X +'px,'+ Y +'px)');
			$('.lookbooks_item_02').css('transform','translate(0,'+ Y +'px)');
			$('.lookbooks_item_03').css('transform','translate('+ -X +'px,'+ Y +'px)');
		};
		if (wScroll >= $('.section_lookbooks').offset().top ){
			$('.lookbooks_item_01').css('transform','translate(0,0)');
			$('.lookbooks_item_02').css('transform','translate(0,0)');
			$('.lookbooks_item_03').css('transform','translate(0,0)');
		};

		if (wScroll > 1500){
			$('.header').css('z-index', '0')
		}else{
			$('.header').css('z-index', '1')
		}
	});
});