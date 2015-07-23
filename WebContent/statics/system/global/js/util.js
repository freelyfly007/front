(function(win) {
	function getRootPath() {
	    var pathName = window.document.location.pathname;
	    var projectName = pathName.substring(0,pathName.substr(1).indexOf('/') + 1);
	    return projectName;
	}
	
	win.rootPath = getRootPath();
})(window);
(function($) {
	$.ydSubmit = function(options) {
		options = options || {};
		options.paramType = options.paramType || 'json';		// 默认向后台请求的参数类型为string类型
		var params = options.params;
		var formId = options.formId;
		var callback = options.callback;
		if (!params && formId) params = $('#' + formId).serializeToJson();	// 如果用户没有提供请求参数，则从表单获取
		
		if (options.paramType == "string") { 			// 如果后台需要字符串格式参数，则拼装
			params = $.jsonToString(params);
			params = "_data_=" + params + "&_time_=" + new Date().getTime() + "&_type_=json";
		}
		if (options.async === undefined ) {
			options.async = true;
		}
		
		$.ajax({
			url: options.url,
			type: options.type || "POST",
			cache : options.cache || false,
			dataType: options.dataType || "json",
			async: options.async,
			data: params,
			beforeSend: options.beforeSend,   			// 可修改XMLHttpRequest 对象的函数，如添加自定义 HTTP 头,
			success: function(data) {
				if (data == null || data == "") {
					return;
				}
				
				if (!callback) {
					if (data.result) {
						$.alert("操作成功");
					} else {
						$.alert("操作失败");
					}
					return;
				}
				
				if (callback && typeof callback == 'function') {
					callback.call(this, data);
				}
			},
			complete: function(XHR, TS) {
				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				XMLHttpRequest.abort();					// 中断请求
				alert("服务器繁忙，请稍后再试");
			}
		});
	};
	
	/**
	 * 将json中的值填充到页面中（可以按field指定的属性进行赋值）
	 *
	 * @param	option	json对象，指定参数，具体参数有：
	 * 
	 * @param	option.data	用于填充的json数据对象
	 * @param	option.utl	加载初始化数据的url(url对应请求返还的数据必须是json对象，key就是页面标签的option.field属性的值)
	 * 					注意，当data和url同时指定时，data优先使用
	 * @param	option.field	填充数据data中的key对应标签的那个属性值，用于定位input域进行赋值，默认为
	 *					不指定则为name($('name=key').val(value))，否则为field指定的标签属性					
	 * @param	option.type	填充数据的方式，text：将数据填充到text域中，否则填充到value域中
	 */
	$.fn.serializeToForm = function(option){
		if(!option || (!option.data && !option.url))return false;
		//如果按照标签的name属性给input域赋值，则使用easyui自带的赋值功能，否则自实现赋值
		if ((!option.field || 'name' == option.field) && (!option.type || "text" != option.type)) {
			//如果指定了数据，则优先使用给定的数据赋值，否则通过url加载
			if (option.data) {
				$(this).form('load', option.data);
			} else {
				$(this).form('load', option.url);
			}
			return true;
		}
		//自实现赋值,如果指定了数据，则优先使用给定的数据赋值，否则通过url加载
		if(!option.field) option.field = "name";
		if (option.data) {
			initFormByData(this, option);
		} else {
			var formObj = this;
			$.ydSubmit({url:option.url,paramType:'json',callback:function(data){
					option.data = data;
					initFormByData(formObj, option);
				}
			});
		}
		//根据给定的json数据对象对form表单进行初始
		function initFormByData(formObj, option) {
			for(var key in option.data) {
		     	var inputObj = formObj.find("["+option.field+"='"+key+"']");
		     	if (inputObj && inputObj.size() > 0 && option.data[key] && "null" != option.data[key]) {
		     		if (option.type && 'text'== option.type) {
		     			inputObj.text(option.data[key]);
		     		} else {
		     			inputObj.val(option.data[key]);
		     		}
		     	}
		    }
		}
	};
	
	/**
	 * 格式化表单内容为json对象（通常用于获取一个form表单的值）
	 * @param	notEmptyField	序列化的结果中是否包含值为空的域
	 * @return	当前选择器所选定的值域标签对应的值json对象
	 */
	$.fn.serializeToJson = function(notEmptyField){
	    var obj = {};
	    $.each( this.serializeArray(), function(i,o){
	        var n = o.name, v = $.trim(o.value);
	        if (!(notEmptyField && "" == v)) {
	        	obj[n] = (obj[n] === undefined) ? v : $.isArray(obj[n]) ? obj[n].concat(v) : [obj[n], v];
	        }
	    });
	    return obj;
	};
	
	/**
	 * 用于格式化json对象到字符串的参数定义
	 */
	var m = {'\b': '\\b','\t': '\\t','\n': '\\n','\f': '\\f','\r': '\\r','"' : '\\"','\\': '\\\\'};
    var s = {'boolean': function (x) {
                return String(x);
            },
            number: function (x) {
                return isFinite(x) ? String(x) : 'null';
            },
            string: function (x) {
                if (/["\\\x00-\x1f"]/.test(x)) {
                    x = x.replace(/(["\x00-\x1f\\"])/g, function(a, b) {
                        var c = m[b];
                        if (c) {
                            return c;
                        }
                        c = b.charCodeAt();
                        return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
                    });
                }
                return '"' + x + '"';
            },
            object: function (x) {
                if (x) {
                    var a = [], b, f, i, l, v;
                    if (x instanceof Array) {
                        a[0] = '[';
                        l = x.length;
                        for (i = 0; i < l; i += 1) {
                            v = x[i];
                            f = s[typeof v];
                            if (f) {
                                v = f(v);
                                if (typeof v == 'string') {
                                    if (b) {
                                        a[a.length] = ',';
                                    }
                                    a[a.length] = v;
                                    b = true;
                                }
                            }
                        }
                        a[a.length] = ']';
                    } else if (x instanceof Object) {
                        a[0] = '{';
                        for (i in x) {
                            v = x[i];
                            f = s[typeof v];
                            if (f) {
                                v = f(v);
                                if (typeof v == 'string') {
                                    if (b) {
                                        a[a.length] = ',';
                                    }
                                    a.push(s.string(i), ':', v);
                                    b = true;
                                }
                            }
                        }
                        a[a.length] = '}';
                    } else {
                        return;
                    }
                    return a.join('');
                }
                return 'null';
            }
        };
    /**
   	 *	将指定的json对象解析成字符串
   	 *	
   	 *	@param	v	将要被解析的json对象
   	 *
   	 *	@return json解析后的字符串
   	 */
	$.jsonToString = function(jsonObject){
		 var f = s[typeof jsonObject];
         if (f) {
             jsonObject = f(jsonObject);
             if (typeof jsonObject == 'string') {
                 return jsonObject;
             }
         }
         return null;
	};
	
	// 进度条
	$.progress = function(type) {
		if (type == 'open') {
			$.messager.progress();
		} else {
			$.messager.progress('close');
		}
	};
	
	// 提示框
	$.alert = function(message, type, callback) {
		type = type || 'info';
		$.messager.alert('系统提示', message, type, callback);
	};
	
	// 确认框
	$.confirm = function(msg, callback) {
		$.messager.confirm('系统提示', msg, callback);
	};
	
	/**
	 * combobox组件
	 */
	$.fn.ydCombobox = function (options) {
		var $this = this;
		return this.each(function() {
			options = options || {};
			if (!options) {
				$.alert('参数不能为空');
				return;
			}
			
			var defaults = {
				pageSize: 10,
				mode: 'remote',
				value: options.value,
				//validType: ['inArray["#' + $this.attr('id') +'", "' + options.textField +'"]'],
				formatter: function(row) {
			    	var inputValue = $(this).combobox('getText'), opts = $(this).combobox('options'), text = row[opts.textField];
			    	if (!text) {
			    		return '';
			    	}
			    	if (!inputValue || text.indexOf(inputValue) == -1) {
			    		return row[opts.textField];
			    	}
			    	
			    	var text1 = text.substring(0, text.indexOf(inputValue));
			    	var text2 = text.substring(text.indexOf(inputValue) + inputValue.length);
					return text1 + '<span style="font-weight:bold;">' + inputValue + '</span>' + text2;
			    },
			    onBeforeLoad: function(param) {
			    	param.pageSize = options.pageSize || 10;
			    	if (options.value) {
			    		param.q = options.value;
			    	}
			    	
			    	if (options.onBeforeLoad && typeof options.onBeforeLoad === 'function') {
			    		options.onBeforeLoad.call(this, parma);
			    	}
			    }
			};
			
			if (options.validType) {
				defaults.validType = ['inArray["#' + $this.attr('id') +'", "' + options.textField +'"]'];
			} else {
				var validType = $this.attr('data-options') || $this.attr('validType');
				if (validType && validType.indexOf('valueFromSelect') != -1) {
					defaults.validType = ['inArray["#' + $this.attr('id') +'", "' + options.textField +'"]'];
				}
			}
			
			var opts = $.extend({}, options, defaults);
			$this.combobox(opts);
		});
	};
})(jQuery);
(function($) {
	function createNav(target) {
		var $target = $(target);
		var opts = $.data(target);
		$.ydSubmit({
			url: opts.url,
			type:'get',
			callback: function(rs) {
				if (!rs.result) {
					$.alert(re.remark);
					return;
				}
				
				if (rs.total == '0' || !rs.list) {
					$.alert('没有栏目被加载');
					return;
				}
				var ls = rs.list;
				var navOne = getNavBy(ls, '0');
				for (var i = 0; i < navOne.length; i++) {
					var $sldLevelOne = $('<div class="sld-level-1"></div>').appendTo($target);
					var $a = $('<a class="sld-level-1-a" href="'+navOne[i][opts.navUrl]+'">'+navOne[i][opts.navName]+'</a>').appendTo($sldLevelOne);
					var navTwo = getNavBy(ls, navOne[i][opts.navId]);
					if (navTwo.length > 0) {
						$a.after('<div class="sld-level-2">' +
								'<ul></ul></div>');
						
						for(var j = 0; j < navTwo.length; j++) {
							$a.next('.sld-level-2').find('ul').append('<li>' +
										'<a class="sld-level-2-a" src="'+navTwo[j][opts.navUrl]+'" href="'+navTwo[j][opts.navUrl]+'">'+navTwo[j][opts.navName]+'</a>' +
										'</li>');
						}
					}
				}
				
				if (opts.onSuccess && typeof opts.onSuccess == 'function') {
					opts.onSuccess.call(this, ls);
				}
			}
		});
		
		function getNavBy(ls, navParent) {
			var arr = [];
			for (var i = 0; i < ls.length; i++) {
				if (ls[i][opts.navParent] == navParent) {
					arr.push(ls[i]);
				}
			}
			return arr.sort(function(a, b) {
				return a[opts.navWeight] - b[opts.navWeight];
			});
		}
	}
	
	$.fn.nav = function(options, param) {
		if (options == 'string') {
			var method = $.fn.nav.methods[options];
			if (method) {
				method(this, param);
			} else {
				return;
			}
		}
		
		options = options || {};
		return this.each(function() {
			var empty = {};
			$.data(this, $.extend(empty, $.fn.nav.defaults, options));
			createNav(this);
		});
	};
	$.fn.nav.methods = {
			
	};
	$.fn.nav.defaults = {
		url: '',
		navName: '',
		navUrl: '',
		navId: '',
		navWeight: '',
		navParent: ''
	};
})(jQuery);