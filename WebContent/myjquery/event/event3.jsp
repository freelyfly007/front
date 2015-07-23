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
		<div id="content">
			外层div元素
			<span>
				内层span元素
			</span>
			外层div元素
		</div>
		<div id="msg"></div>
		<a href='http://www.baidu.com'>百度</a>
		<input type='text'></input>
	</form>
	<script type="text/javascript">
		$(function() {
			$('span').click(function(e){
				var txt = $("#msg").html() + "<p>内层span被点击了</p>";
				$("#msg").html(txt);
				e.stopPropagation();
			});
			
			$('#content').click(function(e){
				var txt = $("#msg").html() + "<p>外层div被点击了</p>";
				$("#msg").html(txt);
				e.stopPropagation();
			});
			
			$('body').click(function(e){
				var txt = $("#msg").html() + "<p>外层body被点击了</p>";
				$("#msg").html(txt);
				e.stopPropagation();
			});
			
			$('a').mouseover(function(e){
				alert(e.type);
				alert(e.which);
				alert(e.target);
				alert('e.relatedTarget:' + e.relatedTarget);
				
				alert('坐标:'+e.pageX + ':'+ e.pageY);
				
/* 				e.preventDefault();
				e.stopPropagation(); */
				return false;
			});
			
			$('input').click(function(e){
				return false;
			}).keyup(function(e){
				console.log(e.which);
				return false;
			});
		});
	</script>
</body>
</html>