// 引用样式
$("#detail-header").load("public.html #index-header");
$("#detail-nav").load("public.html #index-nav");
$("#detail-footer").load("public.html #index-footer");

// 划过效果

$(".member").mouseenter(function(){
	$(".mes2-hidden1").css("display","block");
})
$(".member").mouseleave(function(){
	$(".mes2-hidden1").css("display","none");
})

$(".mess-last").mouseenter(function(){
	$(".qr").css("display","block");
	$(".ja").attr("src","../images/detail/j_03.jpg");
	$(".ja").css("padding-bottom","10px");
})
$(".mess-last").mouseleave(function(){
	$(".qr").css("display","none");
	$(".ja").attr("src","../images/detail/149761259453_12x26.png");
	$(".ja").css("padding-bottom",0);
})

$(".num12").mouseenter(function(){
	$(".install-hidden").css("display","block");
})
$(".num12").mouseleave(function(){
	$(".install-hidden").css("display","none");
})

$(".tax-pic").mouseenter(function(){
	$(".tax-hidden").css("display","block");
})
$(".tax-pic").mouseleave(function(){
	$(".tax-hidden").css("display","none");
})


$(".act-jiao").click(function(){
	if( $(".activity").height() == 60 ){
		$(".activity").css("height","35px");
	}else{
		$(".activity").css("height","60px");
	}

})


// 放大镜
var arr = [
          "152280853645_1320x989_800x800.jpg",
          "152280855185_1320x989_800x800.jpg",
          "152280856166_1320x989_800x800.jpg",
          "152280856820_1320x989_800x800.jpg",
          "152280856166_1320x989_800x800.jpg"
          ];
var list = $id("pic-list").getElementsByTagName("li");
for( var i=0 ; i<list.length ; i++ ){
	list[i].index = i;
	list[i].onclick = function(){
		$id("pic").src = `../images/detail/${arr[this.index]}`;
		$id("big").src = `../images/detail/${arr[this.index]}`;
		$id("maskimg").src = `../images/detail/${arr[this.index]}`;
	}
}

$(".fdj-pic").mouseenter(function(){
	$("#center").css({"background-color":"#ccc","opacity":".4"});
	$(".big-glass").css("display","block");
})

$(".fdj-pic").mouseleave(function(){
	$("#center").css("background-color","");
	$(".big-glass").css("display","none");

})

var bigimg = $id("big");
var mask = $id("mask");
var box = document.getElementsByClassName("fdj")[0];
var small = document.getElementsByClassName("fdj-pic")[0];
small.onmousemove = function(e){
    var e = e || event ;
    var x = e.pageX - box.offsetLeft - mask.offsetWidth/2;
    var y = e.pageY - box.offsetTop - mask.offsetHeight/2;
    var maxL = small.offsetWidth - mask.offsetWidth-2;
    var maxT = small.offsetHeight - mask.offsetHeight-2;
    x = x < 0 ? 0 : ( x > maxL ? maxL : x );
	y = y < 0 ? 0 : ( y > maxT ? maxT : y );
	mask.style.left = x + "px";
	mask.style.top = y + "px";
	var bigImgLeft = x*bigimg.offsetWidth/small.offsetWidth;
	var bigImgTop = y*bigimg.offsetHeight/small.offsetHeight;
	bigimg.style.left = -bigImgLeft + "px";
	bigimg.style.top = -bigImgTop + "px";
    $id("maskimg").style.left = -x + "px";
    $id("maskimg").style.top = -y + "px";
}


