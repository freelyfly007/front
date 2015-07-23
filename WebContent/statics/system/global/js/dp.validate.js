$.extend($.fn.validatebox.defaults.rules, {
	minLength: {
        validator: function(value, param){
            return value.length >= param[0];
        },
        message: '不少于 {0} 个字符'
    },
    maxLength: {
        validator: function(value, param){
            return value.length <= param[0];
        },
        message: '不多于 {0} 个字符'
    },
    length: {
    	validator: function(value, param) {
    		return value.length >= param[0] && value.length <= param[1];
    	},
    	message: '{0} - {1} 个字符'
    },
    postcode: {
    	validator: function(value, param) {
    		var reg = /^[0-9]{6}$/;
    		return reg.test(value);
    	},
    	message: '6位邮政编码，如：200000'
    },
    sqlFilter: {
    	validator: function(value, param) {
    		var reg = /[<> & \r \n \t '\"%; ?]/;
    		return !reg.test(value);
    	},
    	message: '不能输入特殊字符'
    },
    mobile: {
    	validator: function(value, param) {
    		var reg = /^(13[0-9]|145|147|170|15[0-9]|18[0-9])[0-9]{8}$/;
    		return reg.test(value);
    	},
    	message: '请输入正确的手机号码'
    },
    url: {
    	validator: function(value, param) {
    		var reg = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    		return reg.test(value);
    	},
    	message:'请输入正确的URL'
    },
    email: {
    	validator: function(value, param) {
    		var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
    		return reg.test(value);
    	},
    	message:'请输入正确的邮件格式'
    },
    // 大于0的整数
    number: {
    	validator: function(value, param) {
    		var reg = /^[1-9]\d*$/;
    		return reg.test(value);
    	},
    	message:'大于0的整数'
    },
    intOrFloat : {// 验证整数或小数 
        validator : function(value) { 
            return /^\s*\d+(\.\d+)?\s*$/i.test(value); 
        }, 
        message : '必须整数或小数' 
    },
    currency : {// 验证货币 
        validator : function(value) { 
            return /^\s*\d+(\.\d+)?\s*$/i.test(value); 
        }, 
        message : '货币格式不正确' 
    }, 
    num : {// 验证数字 
        validator : function(value) { 
            return /^\s*\d+\s*$/i.test(value); 
        }, 
        message : '必须数字' 
    }, 
    integer : {// 验证整数 
        validator : function(value) { 
            return /^\s*([1-9]\d*|0)\s*$/i.test(value); 
        }, 
        message : '必须整数' 
    }, 
    age : {// 验证年龄
        validator : function(value) { 
            return /^\s*(?:[1-9][0-9]?|1[01][0-9]|120)\s*$/i.test(value); 
        }, 
        message : '年龄必须是0到120之间的整数' 
    }, 
    chinese : {// 验证中文 
        validator : function(value) { 
            return /^\s*[\Α-\￥]+\s*$/i.test(value); 
        }, 
        message : '请输入中文' 
    }, 
    english : {// 验证英语 
        validator : function(value) { 
            return /^\s*[A-Za-z]+\s*$/i.test(value); 
        }, 
        message : '请输入英文' 
    },
    ne : {// 验证数字或英文 
        validator : function(value) { 
            return /^\s*\w+\s*$/i.test(value); 
        }, 
        message : '请输入数字或英文' 
    },
    nande : {// 验证数字和英文 
        validator : function(value) { 
            return /^\s*(([A-Za-z]+\d+\w*)|(\d+[A-Za-z]+\w*))\s*$/i.test(value); 
        }, 
        message : '必须数字和英文组合' 
    },
    neOrLine : {// 验证数字、中划线、英文 
        validator : function(value) { 
            return /^\s*(\w|-)+\s*$/i.test(value); 
        }, 
        message : '请输入数字、英文或中划线' 
    },
    cne : {// 验证汉字、数字、英文 
        validator : function(value) { 
            return /^\s*([\Α-\￥]|\w)+\s*$/i.test(value); 
        }, 
        message : '请输入汉字、数字或英文' 
    },
    cn : {// 验证汉字、数字 
        validator : function(value) { 
            return /^\s*([\Α-\￥]|\d)+\s*$/i.test(value); 
        }, 
        message : '请输入汉字或数字' 
    },
    ip : {// 验证IP地址 
        validator : function(value) { 
            return /\s*d+.d+.d+.d+\s*/i.test(value); 
        }, 
        message : 'IP地址格式不正确' 
    }, 
    date : {
        validator : function(value) { 
         //格式yyyy-MM-dd或yyyy-M-d
            return /^\s*(?:(?!0000)[0-9]{4}([-]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-]?)0?2\2(?:29))\s*$/i.test(value); 
        },
        message : '清输入合适的日期格式'
    },
    inArray: {
		validator: function(value, param){
    		value = $.trim(value);
    		if (value == '请选择') {
    			return true;
    		}
        	var isExist = false, isIn = false;
        	var datas = $(param[0]).combobox('getData') || {};
        	for (var i in datas) {
        		if ((datas[i][param[1]] && ((datas[i][param[1]]).toLowerCase().indexOf(value.toLowerCase()) != -1) && datas[i][param[1]] != value)) {
        			isExist = true;
        		}
        		
        		if (datas[i][param[1]] == value) {
        			isIn = true;
        			break;
        		}
        	}
        	
        	if (isIn) {
        		return true;
        	} else if (isExist && !isIn) {
        		$.fn.validatebox.defaults.rules.inArray.message = '请选择';
        		return false;
        	} else {
        		$.fn.validatebox.defaults.rules.inArray.message = '数据不存在';
        		return false;
        	}

        	if (!isIn) {
        		$.fn.validatebox.defaults.rules.inArray.message = '数据不存在';
                return isIn;
        	}
        	return isExist && isIn;
        		
        },
		message : ''
	}
});