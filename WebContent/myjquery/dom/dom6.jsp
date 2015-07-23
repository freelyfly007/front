<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/myjquery/common/common.jsp"%>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<title>基本选择器</title>
<style type="text/css">
	form {
		width:600px;
	}
	ul {
		text-align:center;
		color:#bbaacc;
		font-weight:bold;
		font-size:18px;
		list-style:none;
		display:inline;
	}
	li {
		margin-top:10px;
		display:inline;
	}
</style>
</head>
<body>
	<form id="form1" action="#">
		<p>p1</p>
		<p>p1</p>
		<ul><li>1</li></ul>
		<ul><li>2</li></ul>
		<ul><li>3</li></ul>
	</form>
	<script type="text/javascript">
		$(function() {
			console.log($("body").children().length);
			console.log($("li:first").parent().length);
			console.log($("li:first").parents("ul").length);
			console.log("--------parent parents------");
			console.log($("form").parent().length);
			console.log($("form").parents().length);
			
			console.log("--------parent parents------");
			console.log($("form").closest().length);
			console.log($("form").closest().length);
		});
	</script>
</body>
</html>