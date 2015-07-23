<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/myjquery/common/common.jsp"%>
<head>
<title>基本选择器</title>
<style type="text/css">
	form {
		margin:0 auto;
		width:600px;
	}
	ul {
		margin-top:60px;
		text-align:center;
		color:#bbaacc;
		font-weight:bold;
		font-size:18px;
		list-style:none;
	}
	li {
		margin-top:10px;
	}
</style>
</head>
<body>
	<form id="form1" action="#">
		<p>我想说：</p>
	</form>
	<script type="text/javascript">
		$(function() {
			/* $("p").append("<font color='red'>你好</font>");
			$("<font color='red'>你好</font>").appendTo("p"); 
			$("p").prepend("<font color='red'>你好</font>");
			$("<font color='red'>你好</font>").prependTo("p");
			$("p").before("<font color='red'>你好</font>").css("display","inline");
			$("<font color='red'>你好</font>").insertBefore("p").css("display","inline");*/
			$("p").after("<font color='red'>你好</font>").css("display","inline");
			$("<font color='red'>你好</font>").insertAfter("p").css("display","inline");
		});
	</script>
</body>
</html>