<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/myjquery/common/common.jsp"%>
<head>
<title>基本选择器</title>
<style type="text/css">
	div,span,p {
		width:200px;
		height:200px;
		margin:18px;
		background:#aaa;
		border:#000 2px solid;
		float:left;
		font-size:15px;
		font-family:Verdana;
	}
	div.mini {
		width:55px;
		height:55px;
		background-color: #aaa;
		font-size:12px;
	}
	div.hide {
		display:none;
	}
</style>
</head>
<body>
	<div title="en">title为en的div元素</div>
	<div title="en-UK">title为en-UK的div元素</div>
	<div title="english">title为english的div元素</div>
	<div title="en uk">title为en uk的div元素</div>
	<div title="uken">title为uken的div元素</div>
	<script>
		$(function() {
/* 			$("div:[title^='en']").css("background","#bbffaa");
			$("div:[title*='en']").css("background","#bbffaa"); 
			$("div:[title|='en']").css("background","#bbffaa");*/
			$("div:[title~='uk']").css("background","#bbffaa");
		});
	</script>
</body>
</html>