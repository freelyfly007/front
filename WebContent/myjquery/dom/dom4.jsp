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
			<ul>
				<li><input type="text" name="address" id="address"  style="color:#cdcdcd;"  value="请输入邮箱地址"/></li>
				<li><input type="radio" name="radio_sel" />留在首页</li>
			</ul>
			<ul>
				<li><input type="radio" name="radio_sel"/>进入邮箱</li>
				<li><input type="text" name="password" id="password" style="display:block;color:#cdcdcd;" value="请输入密码"/></li>
			</ul>
		</div>
	</form>
	<script type="text/javascript">
		$(function() {
/* 			$("#address").focus(
				function(){
					var txt_value = $(this).val().trim();
					if (txt_value == "请输入邮箱地址") {
						$(this).val('');
					}
				}
			).blur(
					function(){
						var txt_value = $(this).val().trim();
						if (!txt_value) {
							$(this).val('请输入邮箱地址');
						}
					}
				);
			
			$("#password").focus(
					function(){
						var txt_value = $(this).val().trim();
						if (txt_value == "请输入密码") {
							$(this).val('');
						}
					}
				).blur(
						function(){
							var txt_value = $(this).val().trim();
							if (!txt_value) {
								$(this).val('请输入密码');
							}
						}
			); */
			$("#address, #password").focus(
					function() {
						var txt_value = $(this).val().trim();
						if (txt_value == this.defaultValue) {
							this.style.color='#cdcdcd';
							$(this).val('');
						}
					}
				).blur(
				 function() {
						var txt_value = $(this).val().trim();
						if (!txt_value) {
							this.style.color='#cdcdcd';
							$(this).val(this.defaultValue);
						}
				}
			);
		});
	</script>
</body>
</html>