$(document).ready(function(){

  $("footer .drop_down>ul>li:nth-child(1)").click(function(){
    $("footer .drop_down>ul>li:nth-child(1)>ul>li").stop().slideToggle();
  });
  $("footer .drop_down>ul>li:nth-child(2)").click(function(){
    $("footer .drop_down>ul>li:nth-child(2)>ul>li").stop().slideToggle();
  });
  $("footer .drop_down>ul>li:nth-child(3)").click(function(){
    $("footer .drop_down>ul>li:nth-child(3)>ul>li").stop().slideToggle();
  });

  $(".mo_view").css({"right": "-60%"}); /*처음위치*/
	$(".close").hide();

	$(".hamburger_btn").click(function(){
		$(".mo_view").stop(true, true).animate({"right": "0%"});
	});

	$(".mo_view .mo_view_logo .mo_view_close_btn").click(function(){
		$(".mo_view").stop(true, true).animate({"right": "-60%"});
	});

  $(".mo_view>.mo_list>ul>li:nth-child(1)").click(function(){
    $(".mo_view>.mo_list>ul>li:nth-child(1)>ul>li").stop().slideToggle();
  });
  $(".mo_view>.mo_list>ul>li:nth-child(2)").click(function(){
    $(".mo_view>.mo_list>ul>li:nth-child(2)>ul>li").stop().slideToggle();
  });



  $("section .brand_character .dalk").click(function(){
    $("section .brand_character .dalk ul").stop(true,true).slideToggle();
  });

  $("section .brand_character .foxm").click(function(){
    $("section .brand_character .foxm ul").stop(true,true).slideToggle();
  });
  
  $(".contents .coffee").click(function(){
    $(".contents .coffee").find('div').toggleClass("on");
  });

  $(".contents .special").click(function(){
    $(".contents .special").find('div').toggleClass("on");
  });

  $(".contents .bakery").click(function(){
    $(".contents .bakery").find('div').toggleClass("on");
  });

  $(".contents .goods").click(function(){
    $(".contents .goods").find('div').toggleClass("on");
  });

  $(".contents .music").click(function(){
    $(".contents .music").find('div').toggleClass("on");
  });

  $(".contents .con_character").click(function(){
    $(".contents .con_character").find('div').toggleClass("on");
  });

  $("section #map .singapore_title i").click(function(){
    $("section #map .singapore").stop().slideToggle();
  })

  $("section #map .morocco_title i").click(function(){
    $("section #map .morocco").stop().slideToggle();
  });

});