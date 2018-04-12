$(".box").mouseenter(function(){
	$(this).find("i").css("background-image","url(images/brand_category2.png)")	        
}).mouseleave(function(){
	$(this).find("i").css("background-image","url(images/brand_category1.png)");
})

// banner轮播
var timer = setInterval(autoPlay,2000);
var index = 0;
var $ul = $(".banner");
var $alist = $(".active li");
function autoPlay(){
    index++;
    if( index == $alist.size()+1 ){
    	index = 1;
    }
    if( index == $alist.size() ){
    	$alist.eq(0).css("background-color","#d00000").siblings().css("background-color","#fff");
    }
    $alist.eq(index).css("background-color","#d00000").siblings().css("background-color","#fff");
    $ul.animate({left:-index*1440},1000,function(){
    	if( index == $alist.size() ){
    		$ul.css("left",0);
    	}
    });
}
$alist.mouseenter(function(){
	clearInterval(timer);
	index = $(this).index() - 1;
	autoPlay();
}).mouseleave(function(){
	timer = setInterval(autoPlay,2000);
})
var flag = true;
$(".l-btn").click(function(){
	clearInterval(timer);
	if( flag ){
		index--;
	}
	flag = false;
	$ul.animate({left:-index*1440},100,function(){
    	if( index <= 0 ){
    		index = 6;
    	}
    	flag = true;
    });
    $alist.eq(index).css("background-color","#d00000").siblings().css("background-color","#fff");	
})
$(".l-btn").mouseleave(function(){
    timer = setInterval(autoPlay,2000);
})
$(".r-btn").click(function(){
	clearInterval(timer);
	if( flag ){
		index++;
	}
	flag = false;
	$ul.animate({left:-index*1440},100,function(){
    	if( index >=5 ){
    		index = -1;
    	}
    	flag = true;
    });
    $alist.eq(index).css("background-color","#d00000").siblings().css("background-color","#fff");	

})
$(".r-btn").mouseleave(function(){
    timer = setInterval(autoPlay,2000);
})

$("#index-h").load("html/public.html #index-header");
