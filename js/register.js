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


// 密码确认
// $("#qpwd").blur(function(){
// 	if( $("#qpwd").attr("value") == $("#uname").attr("value") ){

// 	}
// })

// 注册

$id("btn").onclick = function(){
 
	var uname = $id("uname").value;
	var upwd = $id("upwd").value;
	var url = "http://localhost/program/1801-program/js/register_login.php";
	var data = `status=register&userID=${uname}&password=${upwd}`;
	ajaxGet(url,function(res){
		alert(res)
		switch(res){
			case "1" :
			    alert("用户名已存在");break;
			case "2" :
			    alert("注册成功");break;
		}

	},data)
}
