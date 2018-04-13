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


// 登录
$("#btn").click(function(){
	var uname = $("#uname").val();
	var upwd = $("#upwd").val();
	var url = "http://localhost/program/1801-program/js/register_login.php";
	var data = `status=login&userID=${uname}&password=${upwd}`;
    ajaxGet(url,function(res){
    	switch( res){
    		case "1" :alert("登陆成功");break;
    		case "2" :alert("密码错误");break;
    		case "3" :alert("用户名不存在");break;
    	}
    },data);
})