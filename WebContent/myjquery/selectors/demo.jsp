<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/myjquery/common/common.jsp"%>
<head>
<title>基本选择器</title>
<style type="text/css">
	div {
		margin: 0 auto;
	}
	.promoted {
		color:orange;
		font-weight:bold;
	}
	.subCategoryBox {
		margin-top:35px;
		width:900px;
		height:220px;
	}
	
	ul {
		list-style:none; /*去掉前面的点或者方框*/
	}
	
	 li {
	 	padding-top:10px;
	 	padding-bottom:10px;
	 	text-align:center;
		width:200px;
		height:25px;
		float:left;
		line-height:25px;  /*字体上下居中line-height =  height*/
	/* 	border:1px red solid; */
		display:inline-block; *display:inline; *zoom:1; 
	}
	
	.showmore {
		height:35px;
		align:center;
		text-align:center;
	}
</style>
</head>
<body>
	<form id="form1" action="#">
		<div class="subCategoryBox">
			<ul>
				<li><a href="#">佳能</a><i>(3044)</i></li>
				<li><a href="#">索尼</a><i>(3044)</i></li>
				<li><a href="#">三星</a><i>(3044)</i></li>
				<li><a href="#">尼康</a><i>(3044)</i></li>
				<li><a href="#">松下</a><i>(3044)</i></li>
				<li><a href="#">卡西欧</a><i>(3044)</i></li>
				<li><a href="#">富士</a><i>(3044)</i></li>
				<li><a href="#">柯达</a><i>(3044)</i></li>
				<li><a href="#">宾得</a><i>(3044)</i></li>
				<li><a href="#">理光</a><i>(3044)</i></li>
				<li><a href="#">奥林巴斯</a><i>(3044)</i></li>
				<li><a href="#">明基</a><i>(3044)</i></li>
				<li><a href="#">爱国者</a><i>(3044)</i></li>
				<li><a href="#">其他品牌相机</a></li>
			</ul>
		</div>
		<div class="showmore">
			<a href="showmore.html"><span>显示全部品牌</span></a>
		</div>
	</form>
	<script type="text/javascript">
		$(function() {
			$("#form1 div.subCategoryBox ul li:gt(2):not(:last)").hide();                     // style.visibility="hidden";
			//$("#form1 div:first ul li:last a").live("click",showAllBrand);
			$("div:eq(1) > a","#form1").toggle(showAllBrand,showBriefView);
		});
		function showAllBrand() {
			$("#form1 div.subCategoryBox ul li:gt(2):not(:last)").show();
			$("div.showmore a span").html("显示精简品牌");
			$("ul li").filter(":contains('佳能'), :contains('尼康')").addClass("promoted");
			return false;
		}
		
		function showBriefView() {
			$("#form1 div.subCategoryBox ul li:gt(2):not(:last)").hide();
			$("div.showmore a span").html("显示全部品牌");
			$("ul li").filter(":contains('佳能'), :contains('尼康')").removeClass("promoted");
			return false;
		}
	</script>
</body>
</html>