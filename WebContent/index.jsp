<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
<title>首页</title>
<link rel="stylesheet" href="statics/system/easyui/themes/default/easyui.css"/>
<link rel="stylesheet" href="statics/system/global/css/global.css"/>
<script src="statics/system/jquery.min.js"></script>
<script src="statics/system/easyui/jquery.easyui.min.js"></script>
<script src="statics/system/global/js/util.js"></script>
<script src="statics/system/global/js/frame.js"></script>
<style>
.panel-body {overflow:hidden;}
</style>
</head>
<body>
	<div class="wrap">
		<!-- header -->
		<jsp:include page="pages/common/header.jsp"></jsp:include>
		
		<div class="main">
			<jsp:include page="pages/common/left.jsp"></jsp:include>
			<div id="m-right" class="m-right">
				<div id="tabs" class="easyui-tabs" data-options="fit:true,border:false">
				</div>
			</div>
			<div class="cfx"></div>
		</div>
		
		<!-- footer -->
		<jsp:include page="pages/common/footer.jsp"></jsp:include>
	</div>
</body>
</html>