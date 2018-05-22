// 用cacheId 来缓存已经获取过的元素
var cacheId = {};
 
/**
 * 根据id获取元素
 * @param {Object} id 元素的id
 */
function $(id){
	if (!cacheId[id]){
		cacheId[id] = document.getElementById(id);
	}
	return cacheId[id];
}

/**
 * 给element 元素绑定事件
 * @param {Object} element 元素
 * @param {Object} event 要绑定的事件
 * @param {Object} fn 绑定的函数
 */
function bindEvent(element, event, fn){
	if (element.addEventListener){
		element.addEventListener(event, fn);		
	}else{
		element.attachEvent('on' + event, fn);
	}
}

/**
 * 给element 元素取消绑定事件
 * @param {Object} element 元素
 * @param {Object} event 要取消的事件
 * @param {Object} fn 要取消的函数
 */
function unbindEvent(element, event, fn){
	if (element.removeEventListener){
		element.removeEventListener(event, fn);		
	}else{
		element.detachEvent('on' + event, fn);
	}
}

/**
 * 获取元素的只读的样式，读取元素的样式需要通过 getComputeStype() 来获取，IE9 以下的版本使用这个 currentStyle
 * @param {Object} element 元素
 */
function getStyle(element){
	return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(element) : element.currentStyle;
}

/**
 * 给事件绑定处理默认行为和冒泡行为的函数，兼容了IE11以下的版本
 * @param {Object} ev
 */
function handleEvent(ev){
	ev = ev || window.event;
	ev.preventDefault = ev.preventDefault || 
						function (){
							this.returnValue = false;
						}
	
	ev.stopPropagation = ev.stopPropagation ||
						function (){
							this.cancelBubble = true;
						}
	
	return ev;
}
