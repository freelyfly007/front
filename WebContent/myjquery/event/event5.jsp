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
		<input type='button' value='one按钮' name='button'></input>
		<input type='button' id='delEvent' value='on方法' name='button'></input>
	</form>
	<script type="text/javascript">
		$(function() {
			var func1,func2,func3;
			$('input:eq(0)').one("click", function() {
				alert("我是one方法只执行一次额");
			});
			
			$('input:eq(1)').on("click", function() {
				alert("我是on方法");
			});
			$(document).on("click", function(e) {
				console.log(e.target.tagName + " is clicked");
			});
		});
	</script>
</body>
</html>