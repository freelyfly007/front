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
	<div class="one" id="one">
		id为one class为one的div
		<div class="mini">class为mini</div>
	</div>
	<div class="one" id="two" title="test">
		id为two  class为one title为test的div
		<div class="mini" title="other">class为mini.title为other</div>
		<div class="mini" title="test">class为mini.title为test</div>
	</div>
	<div class="one" >
		class为one
		<div class="mini">class为mini</div>
		<div class="mini">class为mini</div>
		<div class="mini">class为mini</div>
		<div class="mini"></div>
	</div>
	<div class="one">
		class为one
		<div class="mini">class为mini</div>
		<div class="mini">class为mini</div>
		<div class="mini">class为mini</div>
		<div class="mini" title="test">class为mini,title为test</div>
	</div>
	<div style="display:none;" class="one">
		style的display为"none"的div	
	</div>
	<div class="hide">class为hide的div</div>
	<div>
		包含input的type为"hidden"的div<input type="hidden" size="8">
	</div>
	<span id="mover">正在执行动画的span元素</span>
	<script>
		$(function() {
			/* $("div.one :nth-child(2)").css("background","#bbffaa");
			$("div.one :first-child").css("background","#bbffaa");
			$("div.one :last-child").css("background","#bbffaa");
			$("div.one :only-child").css("background","#bbffaa"); */
			$("div.one:parent").css("background","#bbffaa");
			$("div.one :parent").css("background","#bbffaa");
		});
	</script>
</body>
</html>