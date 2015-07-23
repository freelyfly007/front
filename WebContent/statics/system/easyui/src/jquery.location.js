(function($) {
	function createLocation(target) {
		var $target = $(target);
		var opts = $target.location('options');
		var $provBox = [], $cityBox = [], $regionBox = [], empty = {};
		
		$provBox = $('<div id="'+opts.provId+'" class="location-address '+opts.provClass+'"><input style="width:'+opts.width+';" type="text" name="'+opts.provName+'"/></div>').appendTo($target);
		$provBox.children().combobox($.extend(empty, opts, {
			data: getDataByArea($target, 'prov', 0),
			valueField: opts.valueField,
			textField: opts.textField,
			value: opts.emptyValue,
			onChange: function(newValue, oldValue) {
		    	var text = $(this).combobox('getText');
		    	if (newValue != text && opts.showCity) {
		    		$cityBox.children('input').combobox('loadData', getDataByArea($target, 'city', newValue)).combobox('setValue', opts.emptyValue);
		    	}
		    	opts.onChange.apply(this, [newValue, oldValue]);
			}
		}));
		
		if (opts.showCity) {
			$cityBox = $('<div id="'+opts.cityId+'" class="location-address '+opts.cityClass+'"><input style="width:'+opts.width+';" type="text" name="'+opts.cityName+'"/></div>').appendTo($target);
			$cityBox.children().combobox($.extend(empty, opts, {
				data: getDataByArea($target, 'city'),
				valueField: opts.valueField,
				textField: opts.textField,
				value: opts.emptyValue,
				onChange: function(newValue, oldValue) {
					var text = $(this).combobox('getText');
			    	if (newValue != text && opts.showRegion) {
			    		$regionBox.children('input').combobox('loadData', getDataByArea($target, 'region', newValue)).combobox('setValue', opts.emptyValue);
			    	}
			    	opts.onChange.apply(this, [newValue, oldValue]);
				}
			}));
		}
		
		if (opts.showRegion && opts.showCity) {
			$regionBox = $('<div id="'+opts.regionId+'" class="location-address '+opts.regionClass+'"><input style="width:'+opts.width+';" type="text" name="'+opts.regionName+'"/></div>').appendTo($target);
			$regionBox.children().combobox($.extend(empty, opts, {
				data: getDataByArea($target, 'region'),
				valueField: opts.valueField,
				textField: opts.textField,
				value: opts.emptyValue
			}));
		}
		
		$(target).append('<div style="clear:both;"></div>');
	}
	
	function getDataByArea($target, level, pCode) {
		var opts = $target.location('options');
		var jsonArea, r= [], o = {};
		o[opts.valueField] = opts.emptyValue;
		o[opts.textField] = opts.provEmptyText;
		if (level == 'city') {
			o[opts.textField] = opts.cityEmptyText;
		} else if (level == 'region') {
			o[opts.textField] = opts.regionEmptyText;
		}
		r.push(o);
		
		if (pCode != 'undefined') {
			jsonArea = $area[pCode];
			for (var key in jsonArea) {
				var obj = {};
				if (opts.filterAddress && jsonArea[key].split('|')[2] == '0') continue;
				obj[opts.valueField] = key;
				obj[opts.textField] = jsonArea[key].split('|')[1];
				r.push(obj);
			}
		}
		return r;
	}
	
	$.fn.location = function(options, param) {
		if (typeof options == 'string') {
			var method = $.fn.location.method['options'];
			if (method) {
				return method(this, param);
			} else {
				return this.combobox('options', param);
			}
		}
		
		options = options || {};
		return this.each(function() {
			var state = $.data(this, 'location'), empty = {};
			if (state) {
				$.extend(state.options, options);
			} else {
				$.data(this, 'location', {options: $.extend(empty, $.fn.combo.defaults, $.fn.combobox.defaults, $.fn.location.defaults, $.fn.location.parseOptions(this), options)});
			}
			
			$(this).location('destroy');
			createLocation(this);
		});
	};
	
	$.fn.location.parseOptions = function(target) {
		var empty = {};
		return $.extend(empty, $.parser.parseOptions(target, ['emptyValue','provEmptyText','cityEmptyText','regionEmptyText','showCity','showRegion','filterAddress','provId','provClass','provName','cityId','cityClass','cityName','regionId','regionClass','regionName']));
	};
	
	$.fn.location.method = {
		options: function(jq){
			return $.data(jq[0], 'location').options;
		},
		destroy: function(jq) {
			return jq.each(function() {
				$(this).empty();
			});
		}
	};
	
	$.fn.location.defaults = {
		emptyValue: '',
		provEmptyText: '--选择省--',
		cityEmptyText: '--选择市--',
		regionEmptyText: '--选择区--',
		showCity: true,
		showRegion: true,
		filterAddress: false,		// 是否超区排查，默认否
		provId: '',
		provClass: '',
		provName: '',
		cityId: '',
		cityClass: '',
		cityName: '',
		regionId: '',
		regionClass: '',
		regionName: '',
		onChange: function(newValue, oldValue) {}
	};
})(jQuery);