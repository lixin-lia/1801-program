//封装一个 ajaxGet 函数
function ajaxGet(url,callback,data){
	var ajax = null;
	if( window.XMLHttpRequest ){
		ajax = new XMLHttpRequest();
	}else{
		ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if( data ){
		url = url + "?" + data;
	}
	ajax.open("GET",url);
	ajax.send();	 
	 
	ajax.onreadystatechange = function(){
		if( ajax.status == 200 && ajax.readyState == 4 ){
			callback(ajax.responseText);
		}
	}
}


