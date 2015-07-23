<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/myjquery/common/common.jsp"%>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<title>基本选择器</title>
<style type="text/css">
	#form1 {
		width:80%;
		margin:0 auto;
		margin-top:60px;
		/* border:1px solid #cdcdcd; */
		padding:22px 22px;
	}
	div {
		width:80%;
		margin:0 auto;
		/* border:1px solid #cdcdcd; */
	}
	
	.content {
		display:none;
	}
	
	body {
	  font-family: "微软雅黑",Arial, Helvetica, sans-serif;
	  font-size: 12px;
	  background: #C7EDCC;
	  line-height: 22px;
    }
	.highlight {
		background:#ff3300;
	}
</style>
</head>
<body>
	<form id="form1" action="#">
		<div id="panel">
			<h5 class="head">什么是jQuery</h5>
			<div class="content">
				jquery是既Javascript之后。。。
			</div>
		</div>
	</form>
	<script type="text/javascript">
		$(function() {
/* 			$("#panel h5.head").bind("click", function(){
				var next = $(this).next();
				if (next.is(":visible")) {
					next.hide();
				} else {
					next.show();
				}
			});
			$("#panel h5.head").bind("mouseover",function(){
				$(this).next().show();
			}).bind("mouseout",function(){
				$(this).next().hide();
			});
			 */
/* 			$("#panel h5.head").bind("mouseenter",function(){
				$(this).next().show();
			}).bind("mouseleave",function(){
				$(this).next().hide();
			}); */
			 
/* 			$("#panel h5.head").mouseenter(function() {
				$(this).next().show();
			}).mouseleave(function(){
				$(this).next().hide();
			}); */
			
			$("#panel h5.head").toggle(function() {
				$(this).addClass("highlight").next().show();
				
			},function(){
				$(this).removeClass("highlight").next().hide();
			});
		});
		
	</script>
</body>
</html>