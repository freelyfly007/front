<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/myjquery/common/common.jsp"%>
<head>
<title>基本选择器</title>
<style type="text/css">
</style>
</head>
<body>
	<form id="form1" action="#">
		可用元素：<input type="text"  name="add" value="可用文本框"/><br/>
		可用元素：<input type="text"  name="email" disabled="disabled" value="不可用文本框"/><br/>
		可用元素：<input type="text" name="che" value="可用文本框"/><br/>
		可用元素：<input type="text" name="name" disabled="disabled" value="不可用文本框"/><br/>
		<div></div>
		<br/><br/>
		多行文本框：<textarea rows="6" cols="15">可用文本框</textarea>
		<div></div>
		<br/><br/>
		多选框：<br/>
		<input type="checkbox" name="newsletter" checked="checked" value="test1"/>test1
		<input type="checkbox" name="newsletter"  value="test2"/>test2
		<input type="checkbox" name="newsletter"  value="test3"/>test3
		<input type="checkbox" name="newsletter"  checked="checked" value="test4"/>test4
		<input type="checkbox" name="newsletter"  value="test5"/>test5
		<div></div>
		<br/><br/>
		性别：<br/>
				<input type="radio" name="sex" value="1"  checked="checked"/>男
				<input type="radio" name="sex" value="0" />女
		<div></div>
		<br/><br/>
		下来列表1：<br/>
		<select name="test"  multiple="multiple" style="height:100px">
			<option>浙江</option>
			<option>北京</option>
			<option selected="selected" value="tj">天津</option>
			<option selected="selected" value="hn">湖南</option>
			<option>广州</option>
			<option>西藏</option>
		</select>
		<br/><br/>
		下拉列表2:<br/>
		<select name="test2">
			<option>浙江</option>
			<option selected="selected" value="bj">北京</option>
			<option>天津</option>
			<option>湖南</option>
			<option>广州</option>
			<option>西藏</option>
		</select>
		<div></div>
	</form>
	<script>
		$(function() {
		/* 	$("#form1 input:enabled").val("这里变化了"); 
			$("#form1 input:disabled").val("这里变化了");
			$("#form1 input").val("这里变化了");
			alert($("#form1 input").length);
			$("#form1 :input").css("background-color","#B2E0FF"); // 单行文本框 多行文本框 按钮 选择下拉框
			$("#form1 :text").css("background-color","#B2E0FF"); // 单行文本框
			alert($("input:checked","#form1").length);
			console.log($("select :selected").text());
			console.log($("select :selected").val());
			*/
		});
	</script>
</body>
</html>