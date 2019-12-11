	//均速动画
	function average(obj, json, value) {
       clearTimeout(obj.time);
		for (var key in json) {
			obj.time = setInterval(function() {
				var at = parseInt(attr(obj, key));
				var speend = at + value;
				if (json[key] <= at) {
					clearTimeout(obj.time);					
				} else {
					obj.style[key] = speend + 'px';
				}
			}, 30)

		}
	}
	
	//均速动画
	function perce(obj, json, value) {
	clearTimeout(obj.time);
		for (var key in json) {
			obj.time = setInterval(function() {
				var age = parseInt(attr(obj, key) || obj.style[key]);
				var speend = age + value;
				
				if (json[key] <= age) {
					clearTimeout(obj.time);				
				} else {
					obj.style[key] = speend + 'px';
				}
			}, 30)
	
		}
	}


	//获取样式
	function attr(obj, attr) {
		return window.getComputedStyle ? getComputedStyle(obj, null)[attr] : obj.currentStyle[attr];
	}

	//缓冲动画
	function animation(obj, json, fn) {
		clearInterval(obj.time);
		for (var key in json) {
			obj.time = setInterval(function() {

				//获取当前值
				var style = parseInt(attr(obj, key));

				//目标值-点前值
				var value = parseInt(json[key] - style) / 10;
	
				//判断大于0向上取整小于则向下
				value = value > 0 ? Math.ceil(value) : Math.floor(value);

				var speend = value + style;

				//到达目标停止
				if (speend == style) {
					clearInterval(obj.time);
				} else {
					obj.style[key] = speend + 'px';
				}

			}, 50)
		}
	}
