<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/myjquery/common/common.jsp"%>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<title>基本选择器</title>
<style type="text/css">

</style>
</head>
<body>
	<form id="form1" action="#">
		<input type='button' value='按钮' name='button'></input>
		<input type='button' id='delEvent' value='解除绑定事件' name='button'></input>
	</form>
	<script type="text/javascript">
		$(function() {
			var func1,func2,func3;
			$('input:[value="按钮"]').click(func1=function(){
				alert('绑定的函数1');
			}).click(func2=function(){
				alert('绑定的函数2');
			}).click(func3=function(){
				alert('绑定的函数3');
			});
			
			$('input:[id="delEvent"]').click(function(){
				// $('input:[value="按钮"]').unbind(); // 全部解除
				$('input:[value="按钮"]').unbind('click',func2); // 解除事件2
				console.log("test");
			});
		});
	</script>
</body>
</html>