$(".pwd").focus(function(){
	 $(".m-hidden").css("display","block");
	 $(".main").css("height",490)
})
$(".pwd").blur(function(){
	 $(".m-hidden").css("display","none");
	 $(".main").css("height",477)
})
$(".rad").click(function(){
	if( $(".rad").prop( "checked" ) ){
		$(".reg").css("background-color","#333333");
		$(".radio img").css("display","block");

	}else{
		$(".reg").css("background-color","#dbd8d8");
		$(".radio img").css("display","none");
	}
})

$("#register-footer").load("public.html #index-footer");