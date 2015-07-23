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
		<p><a href="#" class="tooltips" title="这是我的超链接提示1">提示1</a></p>
		<p><a href="#" class="tooltips" title="这是我的超链接提示2">提示2</a></p>
		<p><a href="#" title="这是自带提示1">自带提示1</a></p>
		<p><a href="#" title="这是自带提示2">自带提示2</a></p>
	</form>
	<script type="text/javascript">
		$(function() {
			var x=10;
			var y=20;
			$("a.tooltips").mouseover(function(e) {
				 this.myTitle = this.title;
				 this.title = "";
				var tooltips = "<div id='tooltip'>" + this.myTitle +"</div>";
				$("body").append(tooltips);
				$("#tooltip").css({
					"top": (e.pageY+y) + "px",
					"left": (e.pageX+x) + "px"
				}).show("fast");
			}).mouseout(function() {
				this.title=this.myTitle;
				$("#tooltip").remove();
			});
		});
	</script>
</body>
</html>