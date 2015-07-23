(function($) {
	function createLocation(target) {
		var $target = $(target), empty = {};
		var opts = $target.locationbox('options');
		
		$target.addClass('locationbox-f').combo($.extend(empty, opts, {
			onShowPanel:function(){
				showTabs($(this));
				opts.onShowPanel.call(this);
			}
		})).append('<div class="lo-hidden"><input class="lo-prov" type="hidden" name="'+opts.provName+'"/></div>');
		
		if (opts.showCity) {
			$target.find('.lo-hidden').append('<input class="lo-city" type="hidden" name="'+opts.cityName+'"/>');
		}
		
		if (opts.showCity && opts.showRegion) {
			$target.find('.lo-hidden').append('<input class="lo-region" type="hidden" name="'+opts.regionName+'"/>');
		}
		
		if (opts.value) {
			setValue(target, opts.value);
		}
	}
	
	function moveToValue(value, panelTabs) {
		if (!panelTabs) return;
		panelTabs.find('a').each(function() {
			if ($(this).attr('value') == value) {
				$(this).addClass('lo-selected');
			}
		});
	}
	
	function showTabs($target) {
		var opts = $target.locationbox('options');
		var panel = $target.combo('panel').css({'overflow':'hidden','height':'auto'}).empty();
		var tabs = $('<div class="location-tabs"></div>').appendTo(panel);
		
		tabs.tabs({
			onSelect: function(title, index) {
				if (title == opts.provTabsText) {
					moveToValue($target.locationbox('getValue')[0], tabs.tabs('getTab', title));
				} else if (title == opts.cityTabsText) {
					var $a = tabs.tabs('getTab', opts.provTabsText).find('a.lo-selected');
					var value = $a.attr('value');
					
					createCityList($target, 'city', getCityByLetter($target, value));
					moveToValue($target.locationbox('getValue')[1], tabs.tabs('getTab', title));
				} else if (title == opts.regionTabsText){
					var $a = tabs.tabs('getTab', opts.cityTabsText).find('a.lo-selected');
					var value = $a.attr('value');
					
					createCityList($target, 'region', getCityByLetter($target, value));
					moveToValue($target.locationbox('getValue')[2], tabs.tabs('getTab', title));
				}
				
			}
		}).tabs('add', {
			title: opts.provTabsText
		});
		
		if (opts.showCity) {
			tabs.tabs('add', {
				title: opts.cityTabsText
			});
		}
		
		if (opts.showCity && opts.showRegion) {
			tabs.tabs('add', {
				title: opts.regionTabsText
			});
		}
		
		panel.find('.tabs-inner').css({'borderTop':0});
		createCityList($target, 'prov', getCityByLetter($target, 0));
		
		tabs.tabs('select', opts.provTabsText);
	}
	
	function createCityList($target, level, cityData) {
		var tabs = $target.combo('panel').find('.location-tabs'), panelTabs, locationBody;
		var opts = $target.locationbox('options');
		
		if (level == 'prov') {
			panelTabs = tabs.tabs('getTab', opts.provTabsText);
		} else if (level == 'city') {
			panelTabs = tabs.tabs('getTab', opts.cityTabsText);
		} else {
			panelTabs = tabs.tabs('getTab', opts.regionTabsText);
		}
		
		locationBody = panelTabs.find('.location-body');
		
		if (locationBody.length == 0) {
			locationBody = $('<div class="location-body"></div>').appendTo(panelTabs);
		} else {
			locationBody.empty();
		}
		
		var rows = $('<div class="lo-body-rows"></div>').appendTo(locationBody);
		cityData = cityData || {};
		
		if (cityData.ag.length > 0) {
			var dl = $('<dl class="lo-body-dl"><dt>A-G</dt><dd style="width:'+(opts.panelW-80)+'px;"></dd></dl>').appendTo(rows);
			for (var i=0; i < cityData.ag.length; i++) {
				dl.find('dd').append('<a href="javascript:;" value="'+cityData.ag[i][opts.valueField]+'">'+cityData.ag[i][opts.textField]+'</a>');
			}
			dl.after('<div style="clear:both;"></div>');
		}
		
		if (cityData.hk.length > 0) {
			var dl = $('<dl class="lo-body-dl"><dt>H-K</dt><dd style="width:'+(opts.panelW-80)+'px;"></dd></dl>').appendTo(rows);
			for (var i=0; i < cityData.hk.length; i++) {
				dl.find('dd').append('<a href="javascript:;" value="'+cityData.hk[i][opts.valueField]+'">'+cityData.hk[i][opts.textField]+'</a>');
			}
			dl.after('<div style="clear:both;"></div>');
		}
		
		if (cityData.ls.length > 0) {
			var dl = $('<dl class="lo-body-dl"><dt>L-S</dt><dd style="width:'+(opts.panelW-80)+'px;"></dd></dl>').appendTo(rows);
			for (var i=0; i < cityData.ls.length; i++) {
				dl.find('dd').append('<a href="javascript:;" value="'+cityData.ls[i][opts.valueField]+'">'+cityData.ls[i][opts.textField]+'</a>');
			}
			dl.after('<div style="clear:both;"></div>');
		}
		
		if (cityData.tz.length > 0) {
			var dl = $('<dl class="lo-body-dl"><dt>T-Z</dt><dd style="width:'+(opts.width-80)+'px;"></dd></dl>').appendTo(rows);
			for (var i=0; i < cityData.tz.length; i++) {
				dl.find('dd').append('<a href="javascript:;" value="'+cityData.tz[i][opts.valueField]+'">'+cityData.tz[i][opts.textField]+'</a>');
			}
			dl.after('<div style="clear:both;"></div>');
		}
		
		rows.find('a').click(function(e) {
			var value = $(this).attr('value');
			var text = $(this).text();
			$(this).addClass('lo-selected').siblings('.lo-selected').removeClass('lo-selected').end().parent().parent().siblings('dl').find('a.lo-selected').removeClass('lo-selected');
			if (level == 'prov') {
				$target.find('.lo-prov').val(value);
				if (opts.showCity) {
					tabs.tabs('select', opts.cityTabsText);
				} else {
					$target.combo('panel').panel('close');
				}
				
				$target.combo('setText', text);
				
			} else if (level == 'city') {
				$target.find('.lo-city').val(value);
				if (opts.showRegion) {
					tabs.tabs('select', opts.regionTabsText);
				} else {
					$target.combo('panel').panel('close');
				}
				$target.combo('setText', $target.combo('getText') + opts.loSep + text);
				
			} else {
				$target.find('.lo-region').val(value);
				$target.combo('setText', $target.combo('getText') + opts.loSep + text);
				$target.combo('panel').panel('close');
			}
			
		});
	}
	
	function getCityByLetter($target, pCode) {
		var opts = $target.locationbox('options');
		var jsonArea = {}, r = {ag:[], hk:[], ls:[], tz:[]};
		
		if (pCode != undefined) {
			jsonArea = $area[pCode];
			for (var key in jsonArea) {
				var obj = {};
				if (opts.filterAddress && jsonArea[key].split('|')[2] == '0') continue;
				obj[opts.valueField] = key;
				obj[opts.textField] = jsonArea[key].split('|')[1];
				var letter = jsonArea[key].split('|')[0];
				if ('ABCDEFG'.indexOf(letter) != -1) {
					r.ag.push(obj);
				} else if ('HIJK'.indexOf(letter) != -1) {
					r.hk.push(obj);
				} else if ('LMNOPQRS'.indexOf(letter) != -1) {
					r.ls.push(obj);
				} else if ('TUVWXYZ'.indexOf(letter) != -1) {
					r.tz.push(obj);
				}
			}
		}
		return r;
	}
	
	function setValue(target, values) {
		var opts = $(target).locationbox('options');
		var $city = $(target).find('.lo-city');
		var $region = $(target).find('.lo-region');
		values = values || [];
		if (values.length > 0) {
			$(target).find('.lo-prov').val(values[0]);
		}
		
		if ($city.length > 0 && values.length > 1) {
			$city.val(values[1]);
		}
		
		if ($region.length > 0 && values.length > 2) {
			$region.val(values[2]);
		}
		
		var text = getTextByValues(opts, values);
		$(target).combo('setText', text);
	}
	
	function getTextByValues(opts, values) {
		var pCode, pText, cCode, cText, rCode, rText, r;
		values = values || [];
		if (values.length > 0) {
			pCode = values[0];
			pText = $area[0][pCode].split('|')[1];
			r = pText;
		}
		
		if (values.length > 1 && opts.showCity) {
			cCode = values[1];
			cText = $area[pCode][cCode].split('|')[1];
			r += opts.loSep + cText;
		}
		
		if (values.length > 2 && opts.showCity && opts.showRegion){
			rCode = values[2];
			rText = $area[cCode][rCode].split('|')[1];
			r += opts.loSep + rText;
		}
		
		return r;
	}
	
	$.fn.locationbox = function(options, param) {
		if (typeof options == 'string') {
			var method = $.fn.locationbox.method[options];
			if (method) {
				return method(this, param);
			} else {
				return this.combobox(options, param);
			}
		}
		
		options = options || {};
		return this.each(function() {
			var state = $.data(this, 'locationbox'), empty = {};
			if (state) {
				$.extend(state.options, options);
			} else {
				$.data(this, 'locationbox', {options: $.extend(empty, $.fn.panel.defaults, $.fn.locationbox.defaults, $.fn.locationbox.parseOptions(this), options)});
			}
			
			$(this).locationbox('destroy');
			createLocation(this);
		});
	};
	
	$.fn.locationbox.parseOptions = function(target) {
		var empty = {};
		return $.extend(empty, $.parser.parseOptions(target, ['showCity','showRegion','filterAddress','provName','cityName','regionName']));
	};
	
	$.fn.locationbox.method = {
		options: function(jq){
			return $.data(jq[0], 'locationbox').options;
		},
		destroy: function(jq) {
			return jq.each(function() {
				$(this).empty();
			});
		},
		getValue: function(jq) {
			var $div = jq.find('.lo-hidden');
			var $prov = $div.find('.lo-prov');
			var $city = $div.find('.lo-city');
			var $region = $div.find('.lo-region');
			var values = [];
			values.push($prov.val());
			if ($city.length > 0) {
				values.push($city.val());
			}
			
			if ($region.length > 0) {
				values.push($region.val());
			}
			
			return values;
		},
		getText: function(jq) {
			return jq.combo('getText');
		},
		setValue: function(jq, values) {
			return jq.each(function() {
				setValue(this, values);
			});
		},
		disable: function(jq) {
			return jq.each(function() {
				$(this).find('.lo-prov, .lo-city, .lo-region').attr('disabled', true);
				$(this).combo('disable');
			});
		},
		enable: function(jq) {
			return jq.each(function() {
				$(this).find('.lo-prov, .lo-city, .lo-region').attr('disabled', false);
				$(this).combo('enable');
			});
		},
		readonly: function(jq, mode) {
			return jq.each(function() {
				if (mode) {
					$(this).combo('readonly', true);
				} else {
					$(this).combo('readonly', false);
				}
			});
		}
	};
	
	$.fn.locationbox.defaults = {
		width:400,
		panelW: 400,
		valueField: 'code',
		textField: 'name',
		loSep: '，',					// 分隔符
		showCity: true,
		showRegion: true,
		filterAddress: false,		// 是否超区排查，默认否
		provName: '',
		cityName: '',
		regionName: '',
		provTabsText: '省份',
		cityTabsText: '城市',
		regionTabsText: '县区',
		onShowPanel: function(newValue, oldValue) {}
	};
})(jQuery);