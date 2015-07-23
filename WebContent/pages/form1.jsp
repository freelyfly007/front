<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
<title>表单排版案例1</title>
<link rel="stylesheet" type="text/css" href="../statics/system/easyui/themes/icon.css">
<link rel="stylesheet" href="../statics/system/easyui/themes/default/easyui.css"/>
<link rel="stylesheet" href="../statics/system/global/css/global.css"/>
<style>
	.f-box{padding:10px;}
</style>
</head>
<body>
	<h3 style="margin:10px; border-bottom:1px solid #ccc;">一列排版</h3>
	<div class="f-box">
		<form id="ff">
			<div class="form-row">
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
			</div>
			
			<div class="form-row">
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
			</div>
		</form>
	</div>
	
	<h3 style="margin:10px; border-bottom:1px solid #ccc;">两列排版</h3>
	<div class="f-box">
		<form id="ff">
			<div class="form-row">
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
			</div>
			
			<div class="form-row">
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
			</div>
		</form>
	</div>
	
	<h3 style="margin:10px; border-bottom:1px solid #ccc;">多列排版</h3>
	<div class="f-box">
		<form id="ff">
			<div class="form-row">
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
			</div>
			
			<div class="form-row">
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
			</div>
		</form>
	</div>
	
	<h3 style="margin:10px; border-bottom:1px solid #ccc;">特殊排版</h3>
	<div class="f-box">
		<form id="ff">
			<div class="form-row">
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
				<div class="form-column">
					<label class="form-label">订单金额：</label>
					<input class="easyui-validatebox textbox" type="text"/>
					<span>元</span>
				</div>
				
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
			</div>
			
			<div class="form-row">
				<div class="form-column">
					<label class="form-label">订单编号：</label>
					<input class="easyui-validatebox textbox" type="text"/>
				</div>
			</div>
		</form>
	</div>
	
	<h3 style="margin:10px; border-bottom:1px solid #ccc;">特殊排版2</h3>
	<div class="f-box">
		<form id="ff">
			<div class="form-row">
				<div class="form-column">
					<div class="form-row">
						<div class="form-column">
							<label class="form-label">订单编号：</label>
							<input class="easyui-validatebox textbox" type="text"/>
						</div>
						
						<div class="form-column">
							<label class="form-label">订单金额：</label>
							<input class="easyui-validatebox textbox" type="text"/>
							<span>元</span>
						</div>
						
						<div class="form-column">
							<label class="form-label">订单编号：</label>
							<input class="easyui-validatebox textbox" type="text"/>
						</div>
					</div>
					
					<div class="form-row">
						<div class="form-column">
							<label class="form-label">订单编号：</label>
							<input class="easyui-validatebox textbox" type="text"/>
						</div>
						
						<div class="form-column">
							<label class="form-label">订单金额：</label>
							<input class="easyui-validatebox textbox" type="text"/>
							<span>元</span>
						</div>
						
						<div class="form-column">
							<label class="form-label">订单编号：</label>
							<input class="easyui-validatebox textbox" type="text"/>
						</div>
					</div>
					
					<div class="form-row">
						<div class="form-column">
							<label class="form-label">订单编号：</label>
							<input class="easyui-validatebox textbox" type="text"/>
						</div>
						
						<div class="form-column">
							<label class="form-label">订单金额：</label>
							<input class="easyui-validatebox textbox" type="text"/>
							<span>元</span>
						</div>
						
						<div class="form-column">
							<label class="form-label">订单编号：</label>
							<input class="easyui-validatebox textbox" type="text"/>
						</div>
					</div>
				</div>
				
				<div class="form-column" style="vertical-align: top;">
					<label class="form-label">订单编号：</label>
					<input class="easyui-textbox" data-options="multiline:true" style="width:300px;height:120px;" type="text"/>
				</div>
			</div>
		</form>
	</div>
	
	<script src="../statics/system/jquery.min.js"></script>
	<script src="../statics/system/easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="../statics/system/easyui/locale/easyui-lang-zh_CN.js"></script>
	<script src="../statics/system/easyui/easyui.config.js"></script>
</body>
</html>