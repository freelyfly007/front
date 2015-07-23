<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
<title>测试页面</title>
<link rel="stylesheet" href="../statics/system/easyui/themes/default/easyui.css"/>
<link rel="stylesheet" type="text/css" href="../statics/system/easyui/themes/icon.css">
<link rel="stylesheet" href="../statics/system/global/css/global.css"/>
<style type="text/css">
	.f-box {margin:20px 0 0 20px;}
</style>
</head>
<body>
	<div style="padding:10px;">
		<div class="condition">
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
						
						<div class="form-column">
							<a href="#" class="easyui-linkbutton dp-btn">搜索</a>
						</div>
					</div>
				</form>
			</div>
		</div>
		<table id="dg" class="easyui-datagrid"></table>
		<div id="dlg"></div>
	</div>
	
	<script src="../statics/system/jquery.min.js"></script>
	<script src="../statics/system/easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="../statics/system/easyui/locale/easyui-lang-zh_CN.js"></script>
	<script src="../statics/system/global/js/util.js"></script>
	<script src="../statics/system/global/js/frame.js"></script>
	
	<script>
		$(function() {
			window.onresize = function() {
				$('#dg').datagrid('resize');
			};
			
			createDg();
		});
		
		function createDg() {
			$('#dg').datagrid({
				url: 'datagrid_data3.json',
				frozenColumns: [[{
					field: 'ck',
					checkbox: true
				}]],
				toolbar: [{
					iconCls: 'icon-add',
					text: '新增',
					handler: function(){
						$('#dlg').dialog({
							title: '添加运单',
							href: rootPath + '/pages/page-dlg.html',
							width: 600,
							height:360,
							modal: true,
							onLoad: function() {
								// 弹出层载入成功后执行函数
								alert('弹出框打开了');
							},
							buttons: [{
								text: '保存',
								id: 'dialog-save-btn',
								handler: function() {
									alert('保存成功');
									$('#dlg').dialog('close');
								}
							}, {
								text: '取消',
								id: 'dialog-close-btn',
								handler: function() {
									alert('取消成功');
									$('#dlg').dialog('close');
								}
							}]
						});
					}
				}, {
					iconCls: 'icon-edit',
					text: '编辑',
					handler: function(){alert('edit');}
				}, {
					iconCls: 'icon-remove',
					text: '删除',
					handler: function() {
						alert('remove');
					}
				}, {
					iconCls: 'icon-upload',
					text: '导入',
					handler: function() {
						alert('import');
					}
				}, {
					iconCls: 'icon-down',
					text: '导出',
					handler: function() {
						alert('down');
					}
				}, {
					iconCls: 'icon-print',
					text: '打印',
					handler: function() {
						alert('print');
					}
				}],
				fitColumns: true,
				rownumbers: true,
				striped:true,
				striped: true,
				method: 'get',
				pagination: true, // 底部显示分页
				pageList: [ 10, 20, 50 ],
				showFooter: true,
				columns: [[
					{field: 'itemid', width: 80, title: '产品编号'},
					{field: 'productid', width:100, title: '产品名称'},
					{field: 'listprice', width: 80, title: '产品单价'},
					{field: 'unitcost', width: 80, title: '产品数量'},
					{field: 'attr1', width: 250, title: '产品描述'},
					{field: 'status', width: 60, title: '状态', align:'center',
						formatter: function(value, row, index) {
							var span = '';
							var statusJson = {1: '在售', 0: '停售'};
							if (value == '1') {
								span = '<span style="color:blue;">'+statusJson[value]+'</span>';
							} else if(value == '0'){
								span = '<span style="color:#999">'+statusJson[value]+'</span>';
							}
							return span;
						}
					}, {
						field: 'options',
						title: '操作',
						formatter: function(value, row, index) {
							return '<a href="javascript:void(0);" style="color:blue;">删除</a>';
						}
					}
				]],
				onLoadSuccess: function() {
					$('#dg').datagrid('resize');
				}
			});
		}
	</script>
</body>
</html>