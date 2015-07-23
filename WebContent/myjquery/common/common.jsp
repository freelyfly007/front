<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<%
	String contextPath = request.getContextPath();
	response.setHeader( "Pragma", "no-cache" );
	response.addHeader( "Cache-Control", "must-revalidate" );
	response.addHeader( "Cache-Control", "no-cache" );
	response.addHeader( "Cache-Control", "no-store" );
	response.setHeader("content-type","text/html;charset=UTF-8");
	response.setContentType("UTF-8");
	response.setCharacterEncoding("UTF-8");
	response.setDateHeader("Expires", 0);
 %>
<meta http-equiv="content-type" content="text/html;charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=1" />
<meta http-equiv="X-UA-Compatible" content="IE=7;IE=8;IE=9" />
<meta name ="keywords" content="science,education,culture,politics,ecnomics,relationships,entertainment,human">
<meta http-equiv="expires" content="Fri,12 Jan 2001 18:18:18 GMT"><!-- 必须使用GMT的时间格式 -->
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Page-Enter" content="revealTrans(duration=5.0,transition=20)">
<script type="text/javascript"  src="<%=contextPath%>/statics/system/jquery.min.js"></script>
<script type="text/javascript"  src="<%=contextPath%>/statics/system/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript"  src="<%=contextPath%>/statics/system/easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript"  src="<%=contextPath%>/statics/system/easyui/easyui.config.js"></script>

<link rel="stylesheet" type="text/css"  href="<%=contextPath%>/statics/system/easyui/themes/icon.css">
<link rel="stylesheet" type="text/css"  href="<%=contextPath%>/statics/system/easyui/themes/default/easyui.css"/>
<link rel="stylesheet" type="text/css"  href="<%=contextPath%>/statics/system/global/css/global.css"/>