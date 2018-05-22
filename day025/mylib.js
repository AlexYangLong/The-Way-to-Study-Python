function $(id){
	return document.getElementById(id);
}

// element 元素  event 绑定的事件  fn 绑定的函数
function bindEvent(element, event, fn){
	if (element.addEventListener){
		element.addEventListener(event, fn);		
	}else{
		element.attachEvent('on' + event, fn);
	}
}
function unbindEvent(element, event, fn){
	if (element.removeEventListener){
		element.removeEventListener(event, fn);		
	}else{
		element.detachEvent('on' + event, fn);
	}
}
