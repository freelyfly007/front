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
		<div class="mini">class为mini</div>
		<div class="mini">class为mini</div>
		<div class="mini">class为mini</div>
		<div class="mini"></div>
	</div>
	<div class="one1">
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
		$(function(){
			
/* 			<!-- 基本-->
    		$("#one").css("background", "#bbffaa");
			$(".mini").css("background", "#bbffaa");
			$("div").css("background", "#bbffaa");
			$("*").css("background", "#bbffaa"); 
			$("span, #two ").css("background", "#bbffaa");
			<!-- 层次 -->
			$("body div").css("background","#bbffaa");
			$("body > div").css("background","#bbffaa");
			$("#two ~ div").css("background","#bbffaa");
			$(".one + div").css("background","#bbffaa"); 
			$(".one").next("div").css("background","#bbffaa"); 
			$(".one1 ~ div").css("background","#bbffaa");
			$(".one1").nextAll("div").css("background","#bbffaa");
			$(".one1").prevAll("div").css("background","#bbffaa");
			$(".one1").siblings("div").css("background","#bbffaa");
			<!-- 过滤-->
			$("div:first").css("background","#bbffaa");
			$("div:last").css("background","#bbffaa");
			$("div:not(.one)").css("background","#bbffaa");
			$("div:even").css("background","#bbffaa");
			$("div:odd").css("background","#bbffaa");
			$("div:eq(3)").css("background","#bbffaa");
			$("div:gt(3)").css("background","#bbffaa");
			$("div:lt(3)").css("background","#bbffaa");
			$(":header").css("background","#bbffaa");
			$(":animated").css("background","#bbffaa");
			$(":focus").css("background","#bbffaa");
			$("div:contains(di)").css("background","#bbffaa");
			$("div:contains(mi)").css("background","#bbffaa");
			$("div:empty").css("background","#bbffaa");
			$("div:has('.mini')").css("background","#bbffaa");
			$("div:parent, span:parent").css("background","#bbffaa");
			$("div:visible").css("background","#bbffaa");
			$("div:hidden").css("background","#bbffaa").show('3000');
			$("div:[title]").css("background","#bbffaa");
			$("div:[title=test]").css("background","#bbffaa");
			$("div:[title!=test]").css("background","#bbffaa");
			$("div:[title^='te']").css("background","#bbffaa");
			$("div:[title$='st']").css("background","#bbffaa");
			$("div:[title*='es']").css("background","#bbffaa");*/
			$("div:[id][title*='es']").css("background","#bbffaa");
			
		});
	</script>
</body>
</html>