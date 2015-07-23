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
		<ul>
			<li title='苹果1'  lzq='lzq'>苹果</li>
			<li title='橘子1'>橘子</li>
			<li title='菠萝1'>菠萝</li>
		</ul>
	</form>
	<script type="text/javascript">
		$(function() {
			var li = $("ul li:eq(0)");
			console.log(li.text());
			console.log(li.attr("title"));
			console.log(li.attr("lzq"));
			var new_build_li = $("<li></li>");
			new_build_li.append("香蕉").appendTo($("ul"));
			new_build_li.clone().html("").prepend("雪梨").prependTo($("ul"));
		});
	</script>
</body>
</html>