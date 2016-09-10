
/**ete组件**/
(function( window ,undefined){
var
	core_version = "0.1.1",
	document = window.document,
	params = {
		targetNo :0, //目标在网页的第几行
		eventName :'',//事件名称
		domValue:''//元素值
	},
	options = {
		    autoLoad :true,
		    dom:'*',								//要监听的dom元素表达式（与 jquery类似）
		    events : ["click","dblclick","change"], //,"select","submit","keydown","keypress","keyup","contextmenu","mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter","mouseleave","load","resize","scroll","unload",
		    showQRcode :true, 						//是否展示手机二维码
		    showMessage:true,						//是否展示遥控信息
		    //遥控端识别  是 swipeLeft /swipeRight  ,发送给客户端，客户端执行
//			bindEvent:[{
//				 target:'document',
//		         eventName:'swipeLeft',
//		         eventFun:function(){
//		        	 $('.tp-leftarrow').click();
//		         }
//			},{
//				 target:'document',
//		         eventName:'swipeRight',
//		         eventFun:function(){
//		        	 $('.tp-rightarrow').click();
//		         }
//			},{
//				 target:'#labelSelect', //id
//		         eventName:'change',
//		         eventFun:function(){
//		        	 $('#labelSelect').trigger("change");
//		         }
//			}],
			 //遥控端识别  是 swipeLeft /swipeRight  ,发送给客户端，客户端执行
			
		    wsServerUrl: 'ws://www.iyouwei.com.cn:8090/ete/wsServlet', //webservice服务地址
		    QRcodeServerUtl :'http://www.iyouwei.com.cn:8090/ete/barcode'  //webservice二维码服务地址
	},
	ete_guid = null,
	ctrlUrl = window.location.href,
	allElements = [],
	websocket = null;
	
	var _ete  = function(argOption){
		options = utils.extend(options,argOption);
		_self = this;
		return this;
	};
	_ete.touchX = 0;
	
	var utils = {
			initWebScoket : function(eteguid){
				if(websocket == null){
					websocket = new WebSocket(options.wsServerUrl+"?ete_guid="+eteguid);
				}
			},
			getUrlParam : function(name){
				  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
				  var r = window.location.search.substr(1).match(reg);
				  if(r!=null)return  unescape(r[2]); return null;
			},
			getUUID : function(){
				 return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
				        return v.toString(16);
				 });
			},
			extend: function(){
				var src, copyIsArray, copy, name, options, clone,
				target = arguments[0] || {},
				i = 1,
				length = arguments.length,
				deep = false;
				if ( typeof target === "boolean" ) {
					deep = target;
					target = arguments[1] || {};
					// skip the boolean and the target
					i = 2;
				}
				if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
					target = {};
				}
				if ( length === i ) {
					target = this;
					--i;
				}
				for ( ; i < length; i++ ) {
					if ( (options = arguments[ i ]) != null ) {
						for ( name in options ) {
							src = target[ name ];
							copy = options[ name ];
							if ( target === copy ) {
								continue;
							}
							if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
								if ( copyIsArray ) {
									copyIsArray = false;
									clone = src && jQuery.isArray(src) ? src : [];
	
								} else {
									clone = src && jQuery.isPlainObject(src) ? src : {};
								}
								target[ name ] = jQuery.extend( deep, clone, copy );
							} else if ( copy !== undefined ) {
								target[ name ] = copy;
							}
						}
					}
				}
				return target;
			},
			transEvent : {
				'focusin':function(target,value){
					target.focus();
				},
				'click':function(target,value){
					target.click();
				},
				'dblclick':function(target,value){
					target.dblclick();
				},
				'change':function(target,value){
					target.value = value;
				},
				'keydown':function(target,value){
					
				},
				'mouseover':function(target,value){
					//document.getEventListeners(target).mouseover[0].listener.call(target);
		            target.style.backgroundColor="#24315e";  // 当鼠标移入时，变为红色
		            target.style.frontColor = "#f1f1f1";
				},
				'mouseout':function(target,value){
		            target.style.backgroundColor="";     //当鼠标移出时，变为默认颜色
		            target.style.frontColor = "";
				}
			}
	};
	
	
	_ete.prototype  = {
			init:function(options){
				ete_guid = utils.getUrlParam("ete_guid") ; //页面遥控号
				if(ete_guid != null){
					utils.initWebScoket(ete_guid);
					this.initController();
				}else{
					ete_guid = utils.getUUID();
					utils.initWebScoket(ete_guid);
					this.initReceiven();
				}
			},
			setOptions:function(argOption){
				if(argOption!=null){
					options = utils.extend(options,argOption);
				}
			},
			getOptions:function(){
				return options;
			},
			getCtrlUrl:function(){
				return ctrlUrl;
			}
	};
	
	
	 //初始化遥控端
	_ete.prototype.initController = function(){
		websocket.onopen = function() {
			websocket.send('controller add in');
		};
		websocket.onerror = function(){};
		websocket.onmessage = function() {};
		websocket.onclose = function(){};
		window.onbeforeunload = function(){
			websocket.close();
		};
		function afterEvent(target,action){
			for(var a = 0 ; a<allElements.length;a++){
				if(allElements[a] ===target ){
					params.targetNo = a;
					break;
				}
			}
			params.eventName = action;
			params.domValue = target.value;
			websocket.send(JSON.stringify(params));
			
		};
		var myTouchStartX = 0;
		var myTouchEndX = 0;
		//绑定触屏事件
		document.addEventListener("touchstart", function(evt){
			   var touch = evt.targetTouches[0]; //获取第一个触点  
			   myTouchStartX = Number(touch.pageX); //页面触点X坐标
		}, false);
		document.addEventListener("touchmove", function(evt){
			   var touch = evt.targetTouches[0]; //获取第一个触点  
			   myTouchEndX = Number(touch.pageX); //页面触点X坐标
		}, false);
		document.addEventListener("touchend", function(evt){
			if(myTouchStartX < myTouchEndX){
				afterEvent(document,'swipeLeft');
			}else{
				afterEvent(document,'swipeRight');
			}
		}, false);
		
		//绑定初始化事件  暂时写死
		if(options.dom == '*'){
			allElements = document.body.getElementsByTagName("*");
			for(var i = 0; i<allElements.length ;i++){
				var oneElement = allElements[i];
				for(var e = 0; e<options.events.length ;e++){
					oneElement.addEventListener(options.events[e],function(e){afterEvent(e.target,e.type);},false);
				};
			};
		}
		
		
		//绑定其他事件
		var bindEvents = options.bindEvent;
		for(var i = 0;i<bindEvents.length;i++){
			var bindEvent = bindEvents[i];
			if(bindEvent.eventName.indexOf('swipe')==-1){
				$(bindEvent.target).bind(bindEvent.eventName,function(){
					afterEvent(this,bindEvent.eventName);
				});
			}
		}
		
		
	};
	
	  //初始化接受端
	_ete.prototype.initReceiven = function(){
		allElements = document.body.getElementsByTagName("*");
		
		//集成用户绑定的事件
		var bindEvents = options.bindEvent;
		if(bindEvents && bindEvents.length > 0 ){
			for(var i = 0;i<bindEvents.length;i++){
				utils.transEvent[bindEvents[i].eventName] = bindEvents[i].eventFun;
			}
		}
		
		
		//二维码及链接地址
		var addrDiv = document.createElement("div");
		addrDiv.setAttribute("id", "QRcodeDiv");
		addrDiv.style.position = "absolute";
		addrDiv.style.right = "0px";
		addrDiv.style.top = "0px";
		addrDiv.style.width="150px";
		addrDiv.style.border = "1px solid grey";
		addrDiv.style.backgroundColor = "#000000";
		addrDiv.style.color = "#ffffff";
		addrDiv.style.zIndex = "9999";
		ctrlUrl = ctrlUrl += '?ete_guid='+ete_guid;
		addrDiv.innerHTML = '<img style="width:150px;height:150px;" src="'+options.QRcodeServerUtl+'?url='+ctrlUrl+'"></img><div style="text-align:center;"><a href="'+ctrlUrl+'" target="_blank">新窗口遥控</a></div>';
		document.body.appendChild(addrDiv);
		
		//信息提示
		var msgDiv = document.createElement("div");
		msgDiv.setAttribute("id", "ete_msm_div");
		msgDiv.style.position = "absolute";
		msgDiv.style.right = "0px";
		msgDiv.style.bottom = "-50px";
		msgDiv.style.border = "1px solid grey";
		msgDiv.style.backgroundColor = "#000000";
		msgDiv.style.color = "#ffffff";
		//document.body.appendChild(msgDiv);
		var message = function(msg){
			//var ddiv = document.getElementById('ete_msm_div');
			//ddiv.style.bottom = '0px';
			//ddiv.innerHTML = msg;
			//setTimeout(function(){
			//	ddiv.style.bottom  = "-50px";
			//},2000)
			if(msg == 'controller add in' ){
				document.getElementById('QRcodeDiv').style.display = "none";
			}
		};
		
		websocket.onopen = function() {
			message('wart for controller');
		};
		websocket.onmessage = function() {
			var msg = event.data;
			if(msg.indexOf('{') > -1){
				var resiveParams = eval('('+msg+')');
				var target = allElements[resiveParams.targetNo];
				var eventName = resiveParams.eventName;
				var value = resiveParams.domValue;
				console.log("eventName:"+eventName);
				utils.transEvent[eventName](target,value);
			}else{
				message(msg);
			}
		};
		websocket.onclose = function(){
			message('server is closed');
		};
		window.onbeforeunload = function(){
			websocket.close();
		};
	};
	window.ete = _ete;
	
})( window );

