$(".saoma").click(function(){
	$(this).css("color","#000").siblings("a").css("color","#999");
	$(".account").css("display","none");
	$(".ewm").css("display","block");
})
$(".zhanghao").click(function(){
	$(this).css("color","#000").siblings("a").css("color","#999");
	$(".account").css("display","block");
	$(".ewm").css("display","none");
})
$(".rad").click(function(){
	if( $(".rad").prop( "checked" ) ){
		$(".auto img").css("display","block");
	}else{
		$(".auto img").css("display","none");
	}
})

$("#login-footer").load( "public.html #index-footer");
