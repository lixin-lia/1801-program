<?php
    $status = $_GET["status"];
    $db = mysql_connect("localhost","root","root");
    mysql_select_db("db1801",$db);
    mysql_query("set names utf8");
    if( $status == "register" ){
    	$userID = $_GET["userID"];
    	$upwd = $_GET["password"];
    	$sql = "SELECT * FROM `users` WHERE uname='$userID'";
    	$res = mysql_query($sql);
    	$arr = mysql_fetch_array($res);
    	if( $arr ){
    		echo 1;
    	}else{
    		$sql2 = "INSERT INTO `users`( `uname`, `upwd`) VALUES ('$userID','$upwd')";
    		mysql_query($sql2);
    		echo 2;
    	}
    }
    if( $status == "login" ){
    	$userID = $_GET["userID"];
    	$upwd = $_GET["password"];
    	$sql = "SELECT * FROM `users` WHERE uname='$userID'";
    	$res = mysql_query($sql);
    	$arr = mysql_fetch_array($res);
    	if( $arr ){
    		if( $upwd == $arr["upwd"] ){
    			echo 1;
    		}else{
    			echo 2;
    		}
    	}else{
    		echo 3;
    	}

    }
?>