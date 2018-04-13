$("#list-header").load("public.html #index-header");
$("#list-footer").load("public.html #index-footer");
$(".all").mouseenter(function(){
	$(".list-ban-hidden").css("display","block");

})
$(".all").mouseleave(function(){
	$(".list-ban-hidden").css("display","none");

})

$("#list-nav").load("public.html #index-nav");