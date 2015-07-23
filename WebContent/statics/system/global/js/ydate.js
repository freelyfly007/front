var YdDate = function() {
	var _setDate = function(date, interval) {
		
		interval = interval || {};
		var y = parseInt(interval.y || 0);
		var M = parseInt(interval.M || 0);
		var d = parseInt(interval.d || 0);
		var h = parseInt(interval.h || 0);
		var m = parseInt(interval.m || 0);
		var s = parseInt(interval.s || 0);
		
		date.setDate(date.getDate() + d); 
		date.setMonth(date.getMonth() + M); 
		date.setFullYear(date.getFullYear() + y);
		date.setHours(date.getHours() + h);
		date.setMinutes(date.getMinutes() + m);
		date.setSeconds(date.getSeconds() + s);
	};

	if (typeof YdDate._initialized == "undefined") {
		
		/**
		 * 格式化日期
		 * @param date：日期对象或日期字符串
		 * @param format：格式化字符串
		 * @returns {String}，返回格式化后的日期字符串
		 */
		YdDate.prototype.formatDate = function(date, format) {
			date = date || new Date();
			
			if (typeof date === 'string') {
				date = this.createDate(date);
			}
			
			format = format || 'yyyy-MM-dd HH:mm:ss';
			var config = {
				yyyy: date.getFullYear(),
				yy:   date.getFullYear().toString().substring(2, 2),
				MM:   (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1),
				M:    date.getMonth() + 1,
				dd:   date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
				d:    date.getDate(),
				HH:   date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
				hh:   date.getHours(),
				h:    date.getHours() % 12,
				mm:   date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
				ss:   date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
			};
			
			for(var key in config) {
				format = format.replace(key, config[key]);
			}
			return format;
		};
	
		/**
		 * 将日期字符串解析为毫秒数
		 * @param dateString：日期字符串
		 * @returns：返回毫秒数
		 */
		YdDate.prototype.parseDate = function(dateString) {
			if (!dateString) return;
			dateString = dateString.replace(/-/ig, '/');
			return Date.parse(dateString);
		};
	
		/**
		 * 根据日期字符串创建日期对象，兼容IE
		 * @param dateString：日期字符串
		 * @returns {Date}：返回日期对象
		 */
		YdDate.prototype.createDate = function(dateString) {
			if (!dateString) return;
			
			if (dateString instanceof Date) return dateString;
			
			var d = new Date();
			d.setTime(this.parseDate(dateString));
			return d;
		};
		
		/**
		 * 获取指定日期月的第一天的日期
		 * @param dateString：日期字符串
		 * @param format：格式化日期字符串
		 * @param st:设置时分秒,(0表示00:00:00,1表示23:59:59，其它值表示对时分秒不做处理，为date的时分秒)
		 * @returns：返回格式化后的日期字符串
		 */
		YdDate.prototype.getMonthFirstDay = function(dateString, format, st) {
			if (!dateString) return;
			format = format || 'yyyy-MM-dd HH:mm:ss';
			var d = this.createDate(dateString);
			
			if (st == '0') {
				d.setHours(0, 0, 0);
			} else if (st == '1') {
				d.setHours(23, 59, 59);
			}
			d.setDate(1);
			return this.formatDate(d, format);
		};
		
		/**
		 * 获取指定日期月的最后一天的日期
		 * @param dateString：日期字符串
		 * @param format：格式化日期字符串
		 * @param st:设置时分秒,(0表示00:00:00,1表示23:59:59，其它值表示对时分秒不做处理，为date的时分秒)s
		 * @returns：返回格式化后的日期字符串
		 */
		YdDate.prototype.getMonthLastDay = function(dateString, format, st) {
			if (!dateString) return;
			format = format || 'yyyy-MM-dd HH:mm:ss';
			var d = this.createDate(dateString);
			d.setMonth(parseInt(d.getMonth()) + 1);
			d.setDate(1);
			if (st == '0') {
				d.setHours(0, 0, 0);
			} else if (st == '1') {
				d.setHours(23, 59, 59);
			}
			d.setDate(d.getDate() - 1);
			return this.formatDate(d, format);
		};
		
		/**
		 * 2个日期相减，返回毫秒数
		 * @param beginDate：开始日期对象获日期字符串
		 * @param endDate：结束日期对象获日期字符串
		 * @returns {Number}：返回毫秒数
		 */
		YdDate.prototype.minusDate = function(beginDate, endDate) {
			if (typeof beginDate === 'string') {
				beginDate = this.createDate(beginDate);
			}
			if (typeof endDate === 'string') {
				endDate = this.createDate(endDate);
			}
			
			if (!(beginDate && endDate)) {
				return;
			}
			
			return (beginDate.getTime() - endDate.getTime());
		};
	
		/**
		*	返回值 = 指定日期 + 时间间隔
		*	@param opts = {
		*		date : '',						// 日期对象获日期字符串
		*		interval: {						// 时间间隔
		*			y: 2,						// 年向后推2年，比如今年是2014，向后推2年是2016
		*			M: -2,						// 月向前推2个月
		*			d: 3,						// 日向后推3天
		*			h: 5,						// 时向后推5小时
		*			m: 3,						// 分向后推3分钟
		*			s: 1						// 秒向后推1秒
		*		},
		*		format: 'yyyy-MM-dd HH:mm:ss',	// 格式化字符串
		*		st: '0'					// 设置时分秒,(0表示00:00:00,1表示23:59:59，其它值表示对时分秒不做处理，为date的时分秒)
		*	}
		*/
		YdDate.prototype.getDateInterval = function(opts) {
			opts = opts || {};
			var date, interval, format, st;
			date = opts.date;
			interval = opts.interval || {};
			format = opts.format || 'yyyy-MM-dd HH:mm:ss';
			st = opts.st;
			
			if (date && typeof date === 'string') {
				date = this.createDate(date);
			}
			if (!date) {
				date = new Date();
			}
			
			_setDate(date, interval);
			
			if (st == '0') {
				date.setHours(0, 0, 0);
			} else if (st == '1') {
				date.setHours(23, 59, 59);
			}
			
			return this.formatDate(date, format);
		};
		
		/**
		*	根据开始时间，结束时间，时间间隔，返回指定格式的日期列表数组
		*   @param opts = {
		*   	beginDate: '',					// 开始时间
		*   	endDate: '',					// 结束时间
		*   	interval: {						// 时间间隔
		*			y: 2,						// 年向后推2年，比如今年是2014，向后推2年是2016
		*			M: -2,						// 月向前推2个月
		*			d: 3,						// 日向后推3天
		*			h: 5,						// 时向后推5小时
		*			m: 3,						// 分向后推3分钟
		*			s: 1						// 秒向后推1秒
		*		},
		*		format: 'yyyy-MM-dd'			// 格式化日期字符串
		*   }
		*/
		YdDate.prototype.getDateList = function(opts) {
			opts = opts || {};
			var ds = [], beginDate, endDate, interval, format;
			
			beginDate = opts.beginDate;
			endDate = opts.endDate;
			interval = opts.interval || {};
			format = opts.format || 'yyyy-MM-dd';
			
			var sum = parseInt(interval.y || 0) + parseInt(interval.M || 0) + parseInt(interval.d || 0) + parseInt(interval.h || 0) + parseInt(interval.m || 0) + parseInt(interval.s || 0);
			
			if (!sum) {
				alert('interval参数配置不可同时为0');
				return;
			}
			
			if (beginDate && typeof beginDate === 'string') {
				beginDate = this.createDate(beginDate);
			}
			if (endDate && typeof endDate === 'string') {
				endDate = this.createDate(endDate);
			}
	
			while(beginDate.getTime() <= endDate.getTime()) {
			
				var item = this.formatDate(beginDate, format), isExist = false;
				for(var i in ds) {
					if (item == ds[i]) isExist = true;
				}
				
				if (!isExist) ds.push(item);
			
				_setDate(beginDate, interval);
				
			}
			
			return ds;
		};
	
		YdDate._initialized = true;
	}
};