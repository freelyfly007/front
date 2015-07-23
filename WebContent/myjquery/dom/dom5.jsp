<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/myjquery/common/common.jsp"%>
<head>
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
		<div>
			<select id="single">
				<option value="s1">选择1号</option>
				<option selected="selected" value="s2">选择2号</option>
				<option value="s3">选择3号</option>
			</select>
			
			<select id="multiple" multiple="multiple" sytle="height:120px;">
				<option value="m1" selected="selected">选择1号</option>
				<option value="m2" disabled="disabled">选择2号</option>
				<option value="m3">选择3号</option>
				<option value="m4">选择4号</option>
				<option value="m5" selected="selected">选择5号</option>
			</select>
		</div>
	</form>
	<script type="text/javascript">
		$(function() {
			// 单选
			console.log($("#single").val()); // 选中的值
			console.log($("#single > option:selected").text()); // 选中的文本内容
			console.log($("#single").length);  // 选中几个
			console.log($("#single > option:eq(0)").text()); // 第一个选择框的内容
			console.log($("#single")[0].selectedIndex); // 选中的索引
			console.log($("#single").get(0).selectedIndex); // 选中的索引
			console.log("-----------------------------");
			// 多选
			console.log($("#multiple").val());
			console.log($("#multiple > option:selected").text()); // 选中的文本内容
			console.log($("#multiple").length);  // 选中几个
			console.log($("#multiple > option:eq(0)").text()); // 第一个选择框的内容
			console.log($("#multiple")[0].selectedIndex); // 选中的索引
			console.log($("#multiple").get(0).selectedIndex); // 选中的索引
			
			$("#multiple").get(0).selectedIndex = 2; // 选中第三个
		});
	</script>
</body>
</html>