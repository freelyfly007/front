var defaultPage = 'pages/default.jsp';	//默认页url
$(function() {
	// 请求栏目url
	setNav();
	// 初始化页面布局
	initPage();
	window.onresize = function(e) {
		initPage();
	};
	
	// 监听nav隐藏事件
	var mRightW = $('#m-right').width();
	$('#close-nav').click(function(e) {
		$('#m-left').animate({
			width: '26px'
		}, 200, function() {
			$('#open-nav-box').show();
			$('#sld-box').hide();
			initPage();
		});
	});
	
	$('#open-nav').click(function(e) {
		$('#m-left').animate({
			width: '190px'
		}, 200, function() {
			$('#sld-box').show();
			$('#open-nav-box').hide();
			initPage();
		});
		$('#m-right').animate({
			width: mRightW
		}, 200);
	});
	
	loadPage(defaultPage, '系统首页', true);
});

function setNav() {
	$('#nav-box').nav({
		url: 'nav.json',
		navName: 'navName',
		navUrl: 'navUrl',
		navId: 'navId',
		navWeight: 'navWeight',
		navParent: 'navParent',
		params: {},		// 请求参数
		paramType: '',	// string 或者  json
		onSuccess: function(rs) {
			navEvent();
			
			var _url = '';
			if (window.location.href.indexOf('#', 0) != -1) {
				_url = window.location.href.substring(window.location.href.indexOf('#', 0) + 1);
			}
			
			if (_url) {
				var $s = $('#nav-box').find('a[href="'+_url+'"]');
				$s.parent().parent().parent().show();
				$s.click();
			}
		}
	});
}

function navEvent() {
	$('.sld-level-1-a').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		var subLis = $(this).next('.sld-level-2').find('ul > li');
		// 有子节点
		if (subLis && subLis.length > 0) {
			// 收起
			if ($(this).hasClass('noborder')) {
				$(this).removeClass('noborder').next('.sld-level-2').slideUp();
			} else {
			// 展开
				$(this).addClass('noborder').next('.sld-level-2').slideDown();
			}
			
		} else {
		// 没有子节点，那么iframe加载该链接指向的页面	
			loadPage($(this).attr('src'), $(this).html());
		}
	});
	
	$('.sld-level-2-a').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		loadPage($(this).attr('src'), $(this).html());
	});
}

function initPage() {
	$('#m-right').width($(window).width() - $('#m-left').outerWidth());
	$('#m-left, #m-right').height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
	$('#tabs').tabs('resize');
}

function loadPage(url, title, isDefaultPage) {
	var closable = isDefaultPage ? false : true;
	
	if ($('#tabs').length == 0) return;
	var exist = $('#tabs').tabs('exists', title);
	
	// 如果存在，则选中
	if (exist) {
		$('#tabs').tabs('select', title);
		return;
	}
	$('#tabs').tabs('add', {
		title: title,
		closable: closable,
		content: '<iframe frameborder="0" scrolling="yes" width="100%" height="99%" src="'+rootPath + '/' + url+'"></iframe>'
	});
	
	if (url != defaultPage) {
		var rootUrl = window.location.href.substring(0, window.location.href.indexOf('#', 0));
		window.top.location = rootUrl + '#' + url;
	}
	
}