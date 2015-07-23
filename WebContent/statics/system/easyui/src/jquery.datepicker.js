/**
 * 双日历控件
 * @author yangchengjing
 */
(function($){
	/**
	 * create date box
	 */
	function createBox(target){
		var state = $.data(target, 'datepicker');
		var opts = state.options;
		
		$(target).addClass('datepicker-f').combo($.extend({}, opts, {
			onShowPanel:function(){
				bindEvents(this);
				setCalendar(this);
				setValue(this, {startValue: $(target).next().val(), endValue: $(target).next().next().val()}, true);
				opts.onShowPanel.call(this);
			}
		}));
		
		var panel = $(target).combo('panel').css('overflow','hidden');
		var dpTop = $('<div class="datepicker-top"></div>').appendTo(panel);
		var dpCC = $('<div class="datepicker-cc"></div>').appendTo(panel);
		var dpBtm = $('<div class="datepicker-time"></div>').appendTo(panel);
		dpTop.append('<div class="dp-top-l">' +
						'<span style="margin-left:0;">'+opts.fromText+'</span>' +
						'<input id="dp-start" type="text" class="dp-input dp-input-disabled" disabled="disabled"/>' +
						'<span>'+opts.toText+'</span>' +
						'<input id="dp-end" type="text" class="dp-input dp-input-disabled" disabled="disabled"/>' +
					 '</div>' +
					 '<div class="dp-top-btn">' +
					 	'<button class="dp-cs-btn btn-canlender cancel-btn" style="margin-right:10px;">'+opts.cancelBtnText+'</button>' +
					 	'<button class="dp-cs-btn btn-canlender btn-canlender-selected ok-btn">'+opts.okBtnText+'</button>' +
					 '</div><div style="clear:both;"></div>'
					);
		
		
		/**
		 * if the calendar isn't created, create it.
		 */
		if (!state.leftCalendar){
			var dpLeftCalender = $('<div class="dp-left-calender"></div>').appendTo(dpCC);
			var ccLeft = $('<div class="datepicker-calendar-inner"></div>').prependTo(dpLeftCalender);
			state.leftCalendar = $('<div></div>').appendTo(ccLeft).calendar({
				max: opts.max,
				offsetMax: opts.offsetMax,
				min: opts.min,
				offsetMin: opts.offsetMin
			});
			$.extend(state.leftCalendar.calendar('options'), {
				fit:true,
				onSelect:function(date){
					dpTop.find('#dp-start').val(opts.formatter(date));
					var enDate = opts.parser(state.rightCalendar.calendar('getDateString'));
					if (date.getTime() > enDate.getTime()) {
						state.rightCalendar.calendar('moveTo', date);
						dpTop.find('#dp-end').val(opts.formatter(date));
					}
					setInRangeStyle(state, date, enDate);
					opts.onSelect.call(target, date);
				}
			});
		}
		
		if (!state.rightCalendar) {
			var dpRightCalender = $('<div class="dp-right-calender"></div>').appendTo(dpCC);
			var ccRight = $('<div class="datepicker-calendar-inner"></div>').prependTo(dpRightCalender);
			state.rightCalendar = $('<div></div>').appendTo(ccRight).calendar({
				max: opts.max,
				offsetMax: opts.offsetMax,
				min: opts.min,
				offsetMin: opts.offsetMin
			});

			$.extend(state.rightCalendar.calendar('options'), {
				fit:true,
				onSelect:function(date){
					dpTop.find('#dp-end').val(opts.formatter(date));
					var stDate = opts.parser(state.leftCalendar.calendar('getDateString'));
					if (date.getTime() < stDate.getTime()) {
						state.leftCalendar.calendar('moveTo', date);
						dpTop.find('#dp-start').val(opts.formatter(date));
					}
					setInRangeStyle(state, stDate, date);
					opts.onSelect.call(target, date);
				}
			});
		}
		
		dpCC.append('<div style="clear:both;"></div>');
		
		if (!state.leftSpinner && opts.showTime) {
			var leftSpinner = $('<div class="dp-left-spinner"></div>').appendTo(dpBtm);
			var pLeft = $("<div><input></div>").appendTo(leftSpinner);
			state.leftSpinner = pLeft.children("input");
			state.leftSpinner.timespinner({
				width : 120,
				showSeconds : true,
				separator : ':',
				value: opts.formatter.call(this, opts.parser(opts.startValue), 2),
				onSpinUp: function() {
					setSpinnerValue('left');
				},
				onSpinDown: function() {
					setSpinnerValue('left');
				}
			});
		}
		
		if (!state.rightSpinner && opts.showTime) {
			var rightSpinner = $('<div class="dp-right-spinner"></div>').appendTo(dpBtm);
			var pRight = $("<div><input></div>").appendTo(rightSpinner);
			state.rightSpinner = pRight.children("input");
			state.rightSpinner.timespinner({
				width : 120,
				showSeconds : true,
				separator : ':',
				value: opts.formatter.call(this, opts.parser(opts.startValue), 2),
				onSpinUp: function() {
					setSpinnerValue('right');
				},
				onSpinDown: function() {
					setSpinnerValue('right');
				}
			});
		}
		
		$(target).combo('textbox').parent().addClass('datepicker');
		$(target).datepicker('initValue');
		
		function bindEvents(target){
			var panel = $(target).combo('panel');
			
			dpTop.find('.cancel-btn').click(function() {
				panel.panel('close');
			});
			
			dpTop.find('.ok-btn').click(function() {
				var stValue = dpTop.find('#dp-start').val();
				var enValue = dpTop.find('#dp-end').val();
				var value = '';
				if (opts.showTime) {
					stValue = stValue + ' ' + state.leftSpinner.timespinner('getValue');
					enValue = enValue + ' ' + state.rightSpinner.timespinner('getValue');
				}
				value = stValue + opts.delimiter + enValue;
				
				$(target).combo('setValue', {startValue:stValue, endValue:enValue}).combo('setText', value).next('input:first').val(stValue).next('input').val(enValue);
				panel.panel('close');
			});
		}
		
		function setCalendar(target){
			var panel = $(target).combo('panel');
			var leftPanel = panel.find('.dp-left-calender');
			var rightPanel = panel.find('.dp-right-calender');
			var ccLeft = leftPanel.children('div.datepicker-calendar-inner');
			var ccRight = rightPanel.children('div.datepicker-calendar-inner');
			state.leftCalendar.appendTo(ccLeft);
			state.rightCalendar.appendTo(ccRight);
		}
		
		function setSpinnerValue(flag) {
			var startDateStr = state.leftCalendar.calendar('getDateString');
			var endDateStr = state.rightCalendar.calendar('getDateString');
			if (startDateStr == endDateStr) {
				var startTimeStr = state.leftSpinner.timespinner('getValue');
				var endTimeStr = state.rightSpinner.timespinner('getValue');
				var stDateTime = new Date(startDateStr.replace(/,/g, '/') + ' ' + startTimeStr).getTime();
				var enDateTime = new Date(endDateStr.replace(/,/g, '/') + ' ' + endTimeStr).getTime();
				if (stDateTime > enDateTime && flag == 'left') {
					if (flag == 'left') {
						state.rightSpinner.timespinner('setValue', startTimeStr);
					} else {
						state.leftSpinner.timespinner('setValue', startTimeStr);
					}
				}
			}
		}
	}
	
	function setValue(target, value, remainText){
		var state = $.data(target, 'datepicker');
		var opts = state.options;
		var leftCalendar = state.leftCalendar;
		var rightCalendar = state.rightCalendar;
		var startValue = opts.formatter(opts.parser.call(this, value.startValue));
		var endValue = opts.formatter(opts.parser.call(this, value.endValue));
		
		$(target).combo('panel').find('#dp-start').val(startValue);
		$(target).combo('panel').find('#dp-end').val(endValue);
		
		leftCalendar.calendar('moveTo', opts.parser.call(target, startValue));
		rightCalendar.calendar('moveTo', opts.parser.call(target, endValue));
		
		if (opts.showTime) {
			state.leftSpinner.timespinner('setValue', opts.formatter(opts.parser.call(this, value.startValue), 2));
			state.rightSpinner.timespinner('setValue', opts.formatter(opts.parser.call(this, value.endValue), 2));
		}
		
		if (!remainText){
			if (value){
				value = opts.formatter.call(target, leftCalendar.calendar('options').current + opts.delimiter + rightCalendar.calendar('options').current);
				$(target).combo('setValue', value).combo('setText', value);
			} else {
				$(target).combo('setText', value);
			}
		}
		
		setInRangeStyle(state, opts.parser.call(this, value.startValue), opts.parser.call(this, value.endValue));
	}
	
	function setInRangeStyle(state, st, en) {
		state.rightCalendar.calendar('setInRangeStyle', {st:st, en: en});
		state.leftCalendar.calendar('setInRangeStyle', {st:st, en: en});
	}
	
	$.fn.datepicker = function(options, param){
		if (typeof options == 'string'){
			var method = $.fn.datepicker.methods[options];
			if (method){
				return method(this, param);
			} else {
				return this.combo(options, param);
			}
		}
		
		options = options || {};
		return this.each(function(){
			var state = $.data(this, 'datepicker');
			if (state){
				$.extend(state.options, options);
			} else {
				$.data(this, 'datepicker', {
					options: $.extend({}, $.fn.datepicker.defaults, $.fn.datepicker.parseOptions(this), options)
				});
			}
			createBox(this);
		});
	};
	
	$.fn.datepicker.methods = {
		options: function(jq){
			var copts = jq.combo('options');
			return $.extend($.data(jq[0], 'datepicker').options, {
				width: copts.width,
				height: copts.height,
				originalValue: copts.originalValue,
				disabled: copts.disabled,
				readonly: copts.readonly
			});
		},
		calendar: function(jq){	// get the calendar object
			return $.data(jq[0], 'datepicker').calendar;
		},
		initValue: function(jq){
			return jq.each(function(){
				var opts = $(this).datepicker('options');
				var startValue = opts.startValue;
				var endValue = opts.endValue;
				var stValue, enValue, value = '';
				if (opts.showTime) {
					stValue = opts.formatter(opts.parser.call(this, opts.startValue), 1);
					enValue = opts.formatter(opts.parser.call(this, opts.endValue), 1);
					if (startValue) {
						value += opts.formatter.apply(this, [opts.parser.call(this, startValue), 1]);
					}
					if (endValue) {
						if (startValue)  value += opts.delimiter;
						value += opts.formatter.apply(this, [opts.parser.call(this, endValue), 1]);
					}
				} else {
					stValue = opts.formatter(opts.parser.call(this, opts.startValue));
					enValue = opts.formatter(opts.parser.call(this, opts.endValue));
					if (startValue) {
						value += opts.formatter.apply(this, [opts.parser.call(this, startValue)]);
					}
					if (endValue) {
						if (startValue)  value += opts.delimiter;
						value += opts.formatter.apply(this, [opts.parser.call(this, endValue)]);
					}
				}
				
				$(this).combo('initValue', value).combo('setText', value)
				.after('<input id="'+opts.startId+'" name="'+opts.startName+'" type="hidden" value="'+
						stValue+
						'"/><input id="'+opts.endId+'" name="'+opts.endName+'" type="hidden" value="'+
						enValue+'"/>');
				
			});
		},
		setValue: function(jq, value){
			return jq.each(function(){
				setValue(this, value);
			});
		},
		reset: function(jq){
			return jq.each(function(){
				var opts = $(this).datepicker('options');
				$(this).datepicker('setValue', opts.originalValue);
			});
		},
		setRange: function(jq, param) {
			return jq.each(function() {
				var opts = $.data(this, 'datepicker').options;
				opts.range = param;
			});
		}
	};
	
	$.fn.datepicker.parseOptions = function(target){
		return $.extend({}, $.fn.combo.parseOptions(target), $.parser.parseOptions(target, ['max','min','offsetMax','offsetMin']));
	};
	
	$.fn.datepicker.defaults = $.extend({}, $.fn.combo.defaults, {
		panelWidth: 480,
		panelHeight:'auto',
		width: 320,
		height: 30,
		iconWidth: 28,
		showTime: false,
		editable: false,
		okBtnText: '确定',
		cancelBtnText: '取消',
		fromText: '从',
		toText: '到',
		delimiter: '  /  ',
		startId: '',
		endId: '',
		startName: '',
		endName: '',
		startValue: new Date(),
		endValue: new Date(),
		max: '',		// 最大日期
		offsetMax: 0,	// 最大日期偏移量，以天为单位
		min: '',		// 最小日期
		offsetMin: 0,	// 最小日期偏移量，以天为单位
		
		formatter:function(date, flag){
			var y = date.getFullYear();
			var m = date.getMonth()+1;
			var d = date.getDate();
			var h = date.getHours();
			var M = date.getMinutes();
			var s = date.getSeconds();
			var r = '';
			if (flag == 1) {		// 显示	yyyy-MM-dd HH:mm:ss
				r = y + '-' + (m<10?('0'+m):m)+'-'+(d<10?('0'+d):d) + ' ' + (h<10?('0'+h):h) + ':' + (M<10?('0'+M):M) + ':' + (s<10?('0'+s):s);
			} else if (flag == 2) {	// 显示	HH:mm:ss
				r = (h<10?('0'+h):h) + ':' + (M<10?('0'+M):M) + ':' + (s<10?('0'+s):s);
			} else {				// 显示	yyyy-MM-dd
				r = y + '-' + (m<10?('0'+m):m)+'-'+(d<10?('0'+d):d);
			}
			
			return r;
		},
		parser:function(s, flag){
			if (!s) return new Date();
			if (s instanceof Date) return s;
			
			s = s.replace(/[-,]/ig, '/');
			return new Date(Date.parse(s));
		},
		onSelect:function(date){}
	});
})(jQuery);
