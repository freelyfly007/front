<%@ page language="java" contentType="image/jpeg; charset=UTF-8" pageEncoding="UTF-8" %>
<%-- <%@ page import="com.yundaex.common.verifcode.ImageValidCode,java.io.*,
				com.yundaex.common.constant.Constant,
				javax.imageio.ImageIO,java.util.*,com.sun.image.codec.jpeg.*,
				java.awt.*,java.awt.image.*,org.apache.commons.lang3.RandomStringUtils" %>
<%

	// 设置页面不缓存
	response.setHeader("Pragma", "no-cache");
	response.setHeader("Cache-Control", "no-cache");
	response.setDateHeader("Expires", 0);
	
	String validCode = RandomStringUtils.randomAlphabetic(4);
	out.clear();
	BufferedImage image = ImageValidCode.getImage(validCode);
	ImageIO.write(image, "JPEG", response.getOutputStream());
	out = pageContext.pushBody();
	
	// 将验证码设置到session中
	request.getSession().setAttribute(Constant.VALIDATE_CODE, validCode);
%> --%>