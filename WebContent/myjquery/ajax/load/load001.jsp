<%@ include file="/myjquery/common/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Insert title here</title>
</head>
<body>
	<div id="df">
	</div>
	<script>
		$("#df").load("http://www.baidu.com");
		$("#df").html("test");
	</script>
</body>
</html>