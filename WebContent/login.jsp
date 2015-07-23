<!DOCTYPE html>
<html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=8;IE=9" />
<title>用户登录</title>
<link rel="stylesheet" href="statics/system/easyui/themes/default/easyui.css"/>
<link rel="stylesheet" href="statics/system/global/css/global.css"/>
<script src="statics/system/jquery.min.js"></script>
<script src="statics/system/easyui/jquery.easyui.min.js"></script>
<script src="statics/system/global/js/util.js"></script>
<script src="statics/system/global/js/frame.js"></script>
</head>
<body style="background:#f8f0d8;">
	<div id="login">
        <div class="login_c">
            <form id="form1" method="post" action="#">
                <h3><em></em>用户登录<span id="errMsg" style="color: red;margin-left:10px; width: 200px;"></span></h3>
                <label><span>用户名：</span><input id="username" type="text" name="username" value="" /></label>
                <label><span>密码：</span><input id="password" type="password" name="password" value="" /></label>
                <label><span>验证码：</span><input style="width: 80px; height: 28px;" type="text" name="validCode" id="validCode" class="radius" />
					<img id="captchaImage" src="pages/common/validcode.jsp" title="点击换一张" style="vertical-align: middle; margin-left: 10px;"/></label>
                <a id="login_btn" class="login_btn">登录</a>
            </form>
        </div>
    </div>
</body>
</html>