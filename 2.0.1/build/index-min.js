KISSY.add("kg/imgcrop/2.0.0/index",["node","base","event","dom","ua","json"],function(t,e,i,s){var h,n,a,o,r,c,l,g=e("node"),u=e("base"),d=e("event"),p=e("dom"),m=e("ua"),f=e("json");h=function(t){"use strict";var e=g,i=u,s=e.all;return t=i.extend({initializer:function(){this.canvas=s("<canvas>"),this.ctx=this.canvas[0].getContext("2d"),this._init()},_init:function(){this.container=s(this.get("previewEl")),this._build()},_build:function(){var t=this,e=t.get("viewWidth"),i=t.get("viewHeight");t.container.css({position:"relative",width:e||t.container.width(),height:i||t.container.height()}),t.container.html("").append(t.canvas.css({position:"absolute"})),t.canvas[0].width=t.canvasW=e,t.canvas[0].height=t.canvasH=i},_rejustSize:function(t,e,i,s){var h,n;return t/i>e/s?(h=i,n=h*e/t):(n=s,h=n*t/e),{w:h,h:n,x:(i-h)/2,y:(s-n)/2}},draw:function(t,e,i,s,h){var n=this;n.ctx.clearRect(0,0,n.canvasW,n.canvasH);var a={x:Math.floor(t*h),y:Math.floor(e*h),w:Math.floor(i*h),h:Math.floor(s*h)},o=n._rejustSize(a.w,a.h,n.canvasW,n.canvasH);n.ctx.drawImage(n.get("image"),a.x,a.y,a.w,a.h,o.x,o.y,o.w,o.h)},destroy:function(){this.canvas.remove()}},{ATTRS:{previewEl:{value:""},viewHeight:{value:100},viewWidth:{value:100},image:{value:null}}})}(),n=function(e){"use strict";var i=u;return e=i.extend({initializer:function(){this.csize=3,this.bDrag=[!1,!1,!1,!1],this.bDragAll=!1},event:{DRAG:"drag",START_DRAG:"startdrag",END_DRAG:"enddrag",RESIZE:"resize",START_RESIZE:"startresize",END_RESIZE:"endresize"},draw:function(t,e){var i=this,s=t.canvas.width,h=t.canvas.height;t.clearRect(0,0,s,h),t.drawImage(e,0,0,s,h),t.strokeStyle=i.get("borderColor"),t.lineWidth=1;var n={w:Math.min(Math.max(i.get("w"),i.get("minWidth")),s),h:Math.min(Math.max(i.get("h"),i.get("minHeight")),h),x:Math.min(Math.max(i.get("x"),0),s-i.get("w")),y:Math.min(Math.max(i.get("y"),0),h-i.get("h"))};i.set(n),t.strokeRect(n.x,n.y,n.w,n.h),t.fillStyle=i.get("maskColor"),t.globalAlpha=i.get("maskOpacity"),t.fillRect(0,0,s,i.get("y")),t.fillRect(0,i.get("y"),i.get("x"),i.get("h")),t.fillRect(i.get("x")+i.get("w"),i.get("y"),s-i.get("x")-i.get("w"),i.get("h")),t.fillRect(0,i.get("y")+i.get("h"),s,h-i.get("y")-i.get("h")),t.globalAlpha="1",t.canvas.style.cursor=i.cursor,i.get("resizable")&&(t.fillStyle=i.get("cubesColor"),t.fillRect(i.get("x")-i.csize,i.get("y")-i.csize,2*i.csize,2*i.csize),t.fillRect(i.get("x")+i.get("w")-i.csize,i.get("y")-i.csize,2*i.csize,2*i.csize),t.fillRect(i.get("x")+i.get("w")-i.csize,i.get("y")+i.get("h")-i.csize,2*i.csize,2*i.csize),t.fillRect(i.get("x")-i.csize,i.get("y")+i.get("h")-i.csize,2*i.csize,2*i.csize))},getInfo:function(){return{x:this.get("x"),y:this.get("y"),w:this.get("w"),h:this.get("h")}},resize:function(t,e){var i,s,h,n,a=this;if(a.bDrag[0]?(h=Math.min(t,a.get("w")+a.get("x")-a.get("minWidth")),n=Math.min(e,a.get("h")+a.get("y")-a.get("minHeight")),i=a.get("w")+a.get("x")-h,s=a.get("h")+a.get("y")-n):a.bDrag[1]?(h=a.get("x"),n=Math.min(e,a.get("h")+a.get("y")-a.get("minHeight")),i=t-h,s=a.get("h")+a.get("y")-n):a.bDrag[2]?(h=a.get("x"),n=a.get("y"),i=t-h,s=e-n):a.bDrag[3]&&(h=Math.min(t,a.get("w")+a.get("x")-a.get("minWidth")),n=a.get("y"),i=a.get("w")+a.get("x")-h,s=e-n),a.get("ratio")){var o=a.get("pw")/a.get("ph");o>i/s?s=i/o:i=s*o}a.set({w:i,x:h,h:s,y:n}),a.fire(a.event.RESIZE)},move:function(t,e){var i=this;i.set({x:Math.min(Math.max(i.get("px")+t,0),i.get("constraint")[0]-i.get("pw")),y:Math.min(Math.max(i.get("py")+e,0),i.get("constraint")[1]-i.get("ph"))}),i.fire(i.event.DRAG)},registerPointPos:function(t,e){var i=this,s=-1;return t>i.get("x")+i.csize&&t<i.get("x")+i.get("w")-i.csize&&e>i.get("y")+i.csize&&e<i.get("y")+i.get("h")-i.csize?s=0:t>i.get("x")-i.csize&&t<i.get("x")+i.csize&&e>i.get("y")-i.csize&&e<i.get("y")+i.csize?s=1:t>i.get("x")+i.get("w")-i.csize&&t<i.get("x")+i.get("w")+i.csize&&e>i.get("y")-i.csize&&e<i.get("y")+i.csize?s=2:t>i.get("x")+i.get("w")-i.csize&&t<i.get("x")+i.get("w")+i.csize&&e>i.get("y")+i.get("h")-i.csize&&e<i.get("y")+i.get("h")+i.csize?s=3:t>i.get("x")-i.csize&&t<i.get("x")+i.csize&&e>i.get("y")+i.get("h")-i.csize&&e<i.get("y")+i.get("h")+i.csize&&(s=4),s},markByCode:function(t){var e=this;-1!==t&&(0===t?(e.bDragAll=!0,e.fire(e.event.START_DRAG)):(e.bDrag[t-1]=!0,e.fire(e.event.START_RESIZE)))},hoverByCode:function(t){var e=this;switch(t){case 0:e.cursor="move";break;case 1:e.cursor=e.get("resizable")?"nw-resize":"default";break;case 3:e.cursor=e.get("resizable")?"se-resize":"default";break;case 2:e.cursor=e.get("resizable")?"ne-resize":"default";break;case 4:e.cursor=e.get("resizable")?"sw-resize":"default";break;default:e.cursor="default"}},canMove:function(){return this.bDragAll},canResize:function(){return t.inArray(!0,this.bDrag)},reset:function(){this.bDragAll=!1;for(var t=0;t<this.bDrag.length;t++)this.bDrag[t]=!1}},{ATTRS:{x:{value:0},y:{value:0},w:{value:50},h:{value:50},ratio:{value:!1},minWidth:{value:50},minHeight:{value:50},resizable:{value:!0},borderColor:{value:"#fff"},cubesColor:{value:"#fff"},maskColor:{value:"#000"},maskOpacity:{value:"0.5"},constraint:{value:[1e4,1e4]}}})}(),a=function(e){"use strict";function i(){this.initialize.apply(this,arguments)}var s=d,h=p;return i.prototype={initialize:function(e,i){var n=this;this._obj=h.get(e),this._styleWidth=this._styleHeight=this._styleLeft=this._styleTop=0,this._sideRight=this._sideDown=this._sideLeft=this._sideUp=0,this._fixLeft=this._fixTop=0,this._scaleLeft=this._scaleTop=0,this._mxSet=function(){},this._mxRightWidth=this._mxDownHeight=this._mxUpHeight=this._mxLeftWidth=0,this._mxScaleWidth=this._mxScaleHeight=0,this._fun=function(){},this._borderX=parseInt(h.css(this._obj,"border-left-width"),10)+parseInt(h.css(this._obj,"border-right-width"),10),this._borderY=parseInt(h.css(this._obj,"border-top-width"),10)+parseInt(h.css(this._obj,"border-bottom-width"),10),this.setOptions(i),this.Max=!!this.options.Max,this._mxContainer=h.get(this.options.mxContainer)||null,this.mxLeft=Math.round(this.options.mxLeft),this.mxRight=Math.round(this.options.mxRight),this.mxTop=Math.round(this.options.mxTop),this.mxBottom=Math.round(this.options.mxBottom),this.Min=!!this.options.Min,this.minWidth=Math.round(this.options.minWidth),this.minHeight=Math.round(this.options.minHeight),this.Scale=!!this.options.Scale,this.Ratio=Math.max(this.options.Ratio,0),this._obj.style.position="absolute",this._mxContainer&&h.css(this._mxContainer,"position","relative"),t.each(this.options.Points,function(t,e){!function(t,e){s.on(t,"mousedown",function(t){t.funName=e,n.start(t)})}(t,e)})},setOptions:function(e){this.options={Max:!1,mxContainer:"",mxLeft:0,mxRight:9999,mxTop:0,mxBottom:9999,Min:!1,minWidth:50,minHeight:50,Scale:!1,Ratio:0,Points:{Right:".cubes-t",Left:".cubes-t",Up:".cubes-t",Down:".cubes-t",RightDown:".cubes-rb",LeftDown:".cubes-lb",RightUp:".cubes-rt",LeftUp:".cubes-lt"},onResize:function(){},onResizeStart:function(){},onResizeEnd:function(){}},t.mix(this.options,e)},start:function(t){if(t.halt(),this._fun=this[t.funName],this._styleWidth=this._obj.clientWidth,this._styleHeight=this._obj.clientHeight,this._styleLeft=this._obj.offsetLeft,this._styleTop=this._obj.offsetTop,this._sideLeft=t.clientX-this._styleWidth,this._sideRight=t.clientX+this._styleWidth,this._sideUp=t.clientY-this._styleHeight,this._sideDown=t.clientY+this._styleHeight,this._fixLeft=this._styleLeft+this._styleWidth,this._fixTop=this._styleTop+this._styleHeight,this.Scale&&(this.Ratio=this._styleWidth/this._styleHeight,this._scaleLeft=this._styleLeft+this._styleWidth/2,this._scaleTop=this._styleTop+this._styleHeight/2),this.Max){var e=this.mxLeft,i=this.mxRight,h=this.mxTop,n=this.mxBottom;this._mxContainer&&(e=Math.max(e,0),h=Math.max(h,0),i=Math.min(i,this._mxContainer.clientWidth),n=Math.min(n,this._mxContainer.clientHeight)),i=Math.max(i,e+(this.Min?this.minWidth:0)+this._borderX),n=Math.max(n,h+(this.Min?this.minHeight:0)+this._borderY),this._mxSet=function(){this._mxRightWidth=i-this._styleLeft-this._borderX,this._mxDownHeight=n-this._styleTop-this._borderY,this._mxUpHeight=Math.max(this._fixTop-h,this.Min?this.minHeight:0),this._mxLeftWidth=Math.max(this._fixLeft-e,this.Min?this.minWidth:0)},this._mxSet(),this.Scale&&(this._mxScaleWidth=2*Math.min(this._scaleLeft-e,i-this._scaleLeft-this._borderX),this._mxScaleHeight=2*Math.min(this._scaleTop-h,n-this._scaleTop-this._borderY))}s.on(document,"mousemove",this.resize,this),s.on(document,"mouseup",this.stop,this),this.options.onResizeStart(t)},stop:function(t){s.detach(document,"mousemove",this.resize,this),s.detach(document,"mouseup",this.stop,this),this.options.onResizeEnd(t)},resize:function(t){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),this._fun(t),this._obj.style.width=this._styleWidth+"px",this._obj.style.height=this._styleHeight+"px",this._obj.style.top=this._styleTop+"px",this._obj.style.left=this._styleLeft+"px",this.options.onResize(t)},Up:function(t){this.RepairY(this._sideDown-t.clientY,this._mxUpHeight),this.RepairTop(),this.TurnDown(this.Down)},Down:function(t){this.RepairY(t.clientY-this._sideUp,this._mxDownHeight),this.TurnUp(this.Up)},Right:function(t){this.RepairX(t.clientX-this._sideLeft,this._mxRightWidth),this.TurnLeft(this.Left)},Left:function(t){this.RepairX(this._sideRight-t.clientX,this._mxLeftWidth),this.RepairLeft(),this.TurnRight(this.Right)},RightDown:function(t){this.RepairAngle(t.clientX-this._sideLeft,this._mxRightWidth,t.clientY-this._sideUp,this._mxDownHeight),this.TurnLeft(this.LeftDown)||this.TurnUp(this.RightUp)},RightUp:function(t){this.RepairAngle(t.clientX-this._sideLeft,this._mxRightWidth,this._sideDown-t.clientY,this._mxUpHeight),this.RepairTop(),this.TurnLeft(this.LeftUp)||this.TurnDown(this.RightDown)},LeftDown:function(t){this.RepairAngle(this._sideRight-t.clientX,this._mxLeftWidth,t.clientY-this._sideUp,this._mxDownHeight),this.RepairLeft(),this.TurnRight(this.RightDown)||this.TurnUp(this.LeftUp)},LeftUp:function(t){this.RepairAngle(this._sideRight-t.clientX,this._mxLeftWidth,this._sideDown-t.clientY,this._mxUpHeight),this.RepairTop(),this.RepairLeft(),this.TurnRight(this.RightUp)||this.TurnDown(this.LeftDown)},RepairX:function(t,e){if(t=this.RepairWidth(t,e),this.Scale){var i=Math.round(t/this.Ratio);if(this.Max&&i>this._mxScaleHeight)t=Math.round((i=this._mxScaleHeight)*this.Ratio);else if(this.Min&&i<this.minHeight){var s=Math.round(this.minHeight*this.Ratio);e>s&&(i=this.minHeight,t=s)}this._styleHeight=i,this._styleTop=this._scaleTop-i/2}this._styleWidth=t},RepairY:function(t,e){if(t=this.RepairHeight(t,e),this.Scale){var i=Math.round(t*this.Ratio);if(this.Max&&i>this._mxScaleWidth)t=Math.round((i=this._mxScaleWidth)/this.Ratio);else if(this.Min&&i<this.minWidth){var s=Math.round(this.minWidth/this.Ratio);e>s&&(i=this.minWidth,t=s)}this._styleWidth=i,this._styleLeft=this._scaleLeft-i/2}this._styleHeight=t},RepairAngle:function(t,e,i,s){if(t=this.RepairWidth(t,e),this.Scale){if(i=Math.round(t/this.Ratio),this.Max&&i>s)t=Math.round((i=s)*this.Ratio);else if(this.Min&&i<this.minHeight){var h=Math.round(this.minHeight*this.Ratio);e>h&&(i=this.minHeight,t=h)}}else i=this.RepairHeight(i,s);this._styleWidth=t,this._styleHeight=i},RepairTop:function(){this._styleTop=this._fixTop-this._styleHeight},RepairLeft:function(){this._styleLeft=this._fixLeft-this._styleWidth},RepairHeight:function(t,e){return t=Math.min(this.Max?e:t,t),t=Math.max(this.Min?this.minHeight:t,t,0)},RepairWidth:function(t,e){return t=Math.min(this.Max?e:t,t),t=Math.max(this.Min?this.minWidth:t,t,0)},TurnRight:function(t){return this.Min||this._styleWidth?void 0:(this._fun=t,this._sideLeft=this._sideRight,this.Max&&this._mxSet(),!0)},TurnLeft:function(t){return this.Min||this._styleWidth?void 0:(this._fun=t,this._sideRight=this._sideLeft,this._fixLeft=this._styleLeft,this.Max&&this._mxSet(),!0)},TurnUp:function(t){return this.Min||this._styleHeight?void 0:(this._fun=t,this._sideDown=this._sideUp,this._fixTop=this._styleTop,this.Max&&this._mxSet(),!0)},TurnDown:function(t){return this.Min||this._styleHeight?void 0:(this._fun=t,this._sideUp=this._sideDown,this.Max&&this._mxSet(),!0)}},e=i}(),o=function(e){"use strict";function i(){this.initialize.apply(this,arguments)}{var s=d,h=p;m.ie}return i.prototype={initialize:function(t,e){this.Drag=h.get(t),this._x=this._y=0,this._marginLeft=this._marginTop=0,this.setOptions(e),this.Limit=!!this.options.Limit,this.mxLeft=parseInt(this.options.mxLeft),this.mxRight=parseInt(this.options.mxRight),this.mxTop=parseInt(this.options.mxTop),this.mxBottom=parseInt(this.options.mxBottom),this.LockX=!!this.options.LockX,this.LockY=!!this.options.LockY,this.Lock=!!this.options.Lock,this._Handle=h.get(this.options.Handle)||this.Drag,this._mxContainer=h.get(this.options.mxContainer)||null,this._Handle.style.position="absolute",this.Repair(),s.on(this._Handle,"mousedown",this.start,this)},setOptions:function(e){this.options={Handle:"",Limit:!0,mxLeft:0,mxRight:9999,mxTop:0,mxBottom:9999,mxContainer:"",LockX:!1,LockY:!1,Lock:!1,Transparent:!0,onstart:function(){},onmove:function(){},onstop:function(){}},t.mix(this.options,e)},start:function(t){t.preventDefault(),this.Lock||(this.Repair(),this._x=t.clientX-this.Drag.offsetLeft,this._y=t.clientY-this.Drag.offsetTop,this._marginLeft=parseInt(h.css(this.Drag,"margin-left"),10)||this._marginLeft,this._marginTop=parseInt(h.css(this.Drag,"margin-top"),10)||this._marginTop,s.on(document,"mousemove",this.move,this),s.on(document,"mouseup",this.stop,this),this.options.onstart(t))},stop:function(t){s.detach(document,"mousemove",this.move,this),s.detach(document,"mouseup",this.stop,this),this.options.onstop(t)},Repair:function(){this.Limit&&(this.mxRight=Math.max(this.mxRight,this.mxLeft+this.Drag.offsetWidth),this.mxBottom=Math.max(this.mxBottom,this.mxTop+this.Drag.offsetHeight),this._mxContainer&&h.css(this._mxContainer,"position","relative"))},move:function(t){if(this.Lock)return void this.stop();window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();var e=t.clientX-this._x,i=t.clientY-this._y;if(this.Limit){var s=this.mxLeft,h=this.mxRight,n=this.mxTop,a=this.mxBottom;this._mxContainer&&(s=Math.max(s,0),n=Math.max(n,0),h=Math.min(h,this._mxContainer.clientWidth),a=Math.min(a,this._mxContainer.clientHeight)),e=Math.max(Math.min(e,h-this.Drag.offsetWidth),s),i=Math.max(Math.min(i,a-this.Drag.offsetHeight),n)}this.LockX||(this.Drag.style.left=e-this._marginLeft+"px"),this.LockY||(this.Drag.style.top=i-this._marginTop+"px"),this.options.onmove(t)}},e=i}(),r=function(e){"use strict";var i=h,s=n,a=u,o=g,r=o.all;return e=a.extend({initializer:function(){this.canvas=r("<canvas>"),this.ctx=this.canvas[0].getContext("2d"),this.image=new Image},event:{DRAG:"drag",START_DRAG:"startdrag",END_DRAG:"enddrag",RESIZE:"resize",START_RESIZE:"startresize",END_RESIZE:"endresize",TOUCH:"touch",START_TOUCH:"starttouch",END_TOUCH:"endtouch",PINCH:"pinch",START_PINCH:"startpinch",END_PINCH:"endpinch",IMGLOAD:"imgload"},_init:function(){var t=this;t.container=r(t.get("areaEl"));var e=t.image;e.onload=function(){t._build(),t._rejustSize(e.width,e.height,t.container.width(),t.container.height()),t._createSelection(),t._drawScene(),t._bind(),t._createPreview(),t.fire(t.event.IMGLOAD,t.getOriginalSize())},e.src=t.get("url")},_bind:function(){var t=this;t._unBind(),t.canvas.on("mousemove",t._handleHover,t),t.canvas.on("mousedown",t._handleMouseDown,t),r(document).on("mouseup",t._handleMouseUp,t),t.on("*Change",t._doAttrChange,t),t.get("touchable")&&t._bindTouch()},_unBind:function(){var t=this;r(document).detach("mousemove",t._handleMouseMove,t),t.canvas.detach("mousedown",t._handleMouseDown,t),r(document).detach("mouseup",t._handleMouseUp,t),t.detach("*Change",t._doAttrChange,t)},_doAttrChange:function(e){var i=this;t.each(e.attrName,function(t,s){var h=e.newVal[s];switch(t){case"initWidth":i.theSelection.set("w",h);break;case"initHeight":i.theSelection.set("h",h);break;case"initialXY":i.theSelection.set("x",h[0]),i.theSelection.set("y",h[1]);break;case"borderColor":case"maskColor":case"maskOpacity":case"cubesColor":case"resizable":case"minWidth":case"minHeight":case"ratio":i.theSelection.set(t,h)}})},_createPreview:function(){var e=this;t.one(e.get("previewEl"))&&(e.preview=new i({image:e.image,previewEl:e.get("previewEl"),viewHeight:e.get("viewHeight"),viewWidth:e.get("viewWidth")}),e.on("imgload resize drag",function(){var t=e.getCropCoords();e.preview.draw(t.x,t.y,t.w,t.h,t.r)}))},_createSelection:function(){var t=this;t.theSelection=new s({x:t.get("initialXY")[0],y:t.get("initialXY")[1],w:t.get("initWidth"),h:t.get("initHeight"),minWidth:t.get("minWidth"),minHeight:t.get("minHeight"),resizable:t.get("resizable"),borderColor:t.get("borderColor"),cubesColor:t.get("cubesColor"),maskColor:t.get("maskColor"),maskOpacity:t.get("maskOpacity"),constraint:[t.canvasW,t.canvasH],ratio:t.get("ratio")}),t.theSelection.on("*Change",function(){t._drawScene()}),t.theSelection.on("resize",function(e){t.fire(t.event.RESIZE,e)}),t.theSelection.on("startresize",function(e){t.fire(t.event.START_RESIZE,e)}),t.theSelection.on("endresize",function(e){t.fire(t.event.END_RESIZE,e)}),t.theSelection.on("drag",function(e){t.fire(t.event.DRAG,e)}),t.theSelection.on("startdrag",function(e){t.fire(t.event.START_DRAG,e)}),t.theSelection.on("enddrag",function(e){t.fire(t.event.END_DRAG,e)})},_build:function(){function t(t){return t.preventDefault(),!1}var e=this,i=e.get("areaWidth"),s=e.get("areaHeight");e.container.css({position:"relative",width:i||e.container.width(),height:s||e.container.height()}),e.canvas.on("selectstart mousedown",t),e.container.html("").append(e.canvas.css({position:"absolute"}))},_drawScene:function(){this.theSelection.draw(this.ctx,this.image)},_handleHover:function(t){var e=this,i=e.canvas.offset(),s=t.pageX-i.left,h=t.pageY-i.top,n=e.theSelection.registerPointPos(s,h);e.theSelection.hoverByCode(n),e._drawScene()},_handleMouseMove:function(t){var e=this;window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();var i=e.canvas.offset(),s=Math.min(Math.max(t.pageX-i.left,0),e.canvasW),h=Math.min(Math.max(t.pageY-i.top,0),e.canvasH);e.theSelection.canMove()&&e.theSelection.move(s-e.iMouseX,h-e.iMouseY),e.get("resizable")&&e.theSelection.canResize()&&e.theSelection.resize(s,h),e._drawScene()},_handleMouseDown:function(t){var e=this,i=e.theSelection,s=e.canvas.offset(),h=e.iMouseX=t.pageX-s.left,n=e.iMouseY=t.pageY-s.top;i.set({px:i.get("x"),py:i.get("y"),pw:i.get("w"),ph:i.get("h")},{silent:!0});var a=i.registerPointPos(h,n);i.markByCode(a),r(document).on("mousemove",e._handleMouseMove,e)},_handleMouseUp:function(t){var e=this;e.theSelection.reset(),r(document).detach("mousemove",e._handleMouseMove,e),e.fire(e.event.END_DRAG,t),e.fire(e.event.END_RESIZE,t)},_bindTouch:function(){var t=this;t._unBindTouch(),t.canvas.on("touchstart",t._handleTouchStart,t),t.canvas.on("touchmove",t._handleTouchMove,t),t.canvas.on("touchend",t._handleTouchEnd,t),t.canvas.on("pinchStart",t._handlePinchStart,t),t.canvas.on("pinch",t._handlePinch,t),t.canvas.on("pinchEnd",t._handlePinchEnd,t)},_unBindTouch:function(){var t=this;t.canvas.detach("touchstart",t._handleTouchStart,t),t.canvas.detach("touchmove",t._handleTouchMove,t),t.canvas.detach("touchend",t._handleTouchEnd,t),t.canvas.detach("pinchStart",t._handlePinchStart,t),t.canvas.detach("pinch",t._handlePinch,t),t.canvas.detach("pinchEnd",t._handlePinchEnd,t)},_handleTouchStart:function(t){var e=this,i=t.targetTouches[0],s=e.theSelection,h=e.canvas.offset(),n=e.iMouseX=i.pageX-h.left,a=e.iMouseY=i.pageY-h.top;s.set({px:s.get("x"),py:s.get("y"),pw:s.get("w"),ph:s.get("h")});var o=s.registerPointPos(n,a);s.markByCode(o),e.fire(e.event.START_TOUCH,t)},_handleTouchMove:function(t){var e=this;if(1==t.targetTouches.length){t.preventDefault();var i=t.targetTouches[0],s=e.canvas.offset(),h=Math.min(Math.max(i.pageX-s.left,0),e.canvasW),n=Math.min(Math.max(i.pageY-s.top,0),e.canvasH);e.theSelection.canMove()&&e.theSelection.move(h-e.iMouseX,n-e.iMouseY),e.get("resizable")&&e.theSelection.canResize()&&e.theSelection.resize(h,n),e._drawScene(),e.fire(e.event.TOUCH,t)}},_handleTouchEnd:function(t){this._handleMouseUp(t),this.fire(self.event.END_TOUCH,t)},_handlePinchStart:function(t){this.pinchScale=t.scale,this.cropCoords=this.getCropCoords(),this.fire(self.event.START_PINCH,t)},_handlePinch:function(t){var e=this,i=t.scale,s=e.canvasW,h=e.canvasH;if(e.get("ratio")){var n=e.cropCoords.w/e.cropCoords.h;n>s/h?h=s/n:s=h*n}e.cropCoords.w*i>=e.get("minWidth")&&e.cropCoords.h*i>=e.get("minHeight")&&e.setCropCoords(Math.max(e.cropCoords.x-e.cropCoords.w*(i-1)/2,0),Math.max(e.cropCoords.y-e.cropCoords.h*(i-1)/2,0),Math.min(e.cropCoords.w*i,s),Math.min(e.cropCoords.h*i,h)),e.fire(e.event.PINCH,t)},_handlePinchEnd:function(t){this.pinchScale=null,this.cropCoords=null,this.fire(self.event.END_TOUCH,t)},_rejustSize:function(t,e,i,s){var h,n,a=this;t/i>e/s?(h=Math.min(i,t),n=h*e/t):(n=Math.min(s,e),h=n*t/e),a.canvas[0].width=a.canvasW=Math.floor(h),a.canvas[0].height=a.canvasH=Math.floor(n),a.canvas.css({top:Math.floor((a.container.height()-a.canvasH)/2),left:Math.floor((a.container.width()-a.canvasW)/2)})},render:function(){this._init()},reset:function(){this._init()},destroy:function(){this._unBind(),this.canvas.remove(),this.theSelection=null,this.preview&&this.preview.destroy()},setCropCoords:function(t,e,i,s){this.set({initialXY:[t,e],initWidth:i,initHeight:s})},getCropCoords:function(){return t.merge(this.theSelection.getInfo(),{url:this.get("url"),r:this.image.width/this.canvasW})},getOriginalSize:function(){return{width:this.image.width,height:this.image.height}},getDisplaySize:function(){return{width:this.canvasW,height:this.canvasH}},toString:function(t){return JSON.stringify(this.getCropCoords(),null,t||0)}},{ATTRS:{areaEl:{value:""},areaWidth:{value:0},areaHeight:{value:0},url:{value:""},initWidth:{value:100},initHeight:{value:100},resizable:{value:!0},ratio:{value:!1},minHeight:{value:10},minWidth:{value:10},initialXY:{value:[50,50]},borderColor:{value:"#fff"},cubesColor:{value:"#fff"},maskColor:{value:"#000"},maskOpacity:{value:"0.5"},previewEl:{value:""},viewHeight:{value:100},viewWidth:{value:100},touchable:{value:!0}}})}(),c=function(e){"use strict";var i=a,s=o,h=g,n=u,r=h.all,c=d,l=p,m=f;return e=n.extend({initializer:function(){},_init:function(){var t=this;t._render(),t._bind()},_bind:function(){var t=this;t._unbind(),t.on("*Change",t._loadImage,t),c.on(t._tempImg,"load",t._onImgLoad,t)},_unbind:function(){var t=this;t.detach("*Change",t._loadImage,t),c.detach(t._tempImg,"load",t._onImgLoad,t)},_render:function(){var t=this;t.area=r(t.get("areaEl")).css("overflow","hidden").html(""),t.preview=r(t.get("previewEl")).html(""),t.area.css("position","relative"),t.wrap=r('<div class="crop-wrap">'),t.wrap.append(t._createDragEl()).appendTo(t.area),t.get("areaWidth")?t.area.width(t.get("areaWidth")):t.set("areaWidth",t.area.width()),t.get("areaHeight")?t.area.height(t.get("areaHeight")):t.set("areaHeight",t.area.height()),t._layBase=new Image,t._layCropper=new Image,t._tempImg=new Image,t.wrap.append(t._layBase).append(t._layCropper),t._setPreview(),t._loadImage()},_createDragEl:function(){var e=this,i=e.el=r('<div class="crop">');return e.get("resizable")&&(t.each(["lt","rt","rb","lb","t"],function(t){i.append(r('<div class="cubes cubes-'+t+'">'))}),i.all(".cubes").css({position:"absolute","background-color":e.get("cubesColor"),width:6,height:6,"font-size":0,"line-height":0}),i.all(".cubes-lt").css({left:-4,top:-4,cursor:"nw-resize"}),i.all(".cubes-rt").css({right:-4,top:-4,cursor:"ne-resize"}),i.all(".cubes-lb").css({left:-4,bottom:-4,cursor:"sw-resize"}),i.all(".cubes-rb").css({right:-4,bottom:-4,cursor:"se-resize"}),i.all(".cubes-t").hide()),i.css({position:"absolute",left:e.get("initialXY")[0],top:e.get("initialXY")[1],width:e.get("initWidth"),height:e.get("initHeight"),display:"none",cursor:"move",background:"url('#')",border:"1px solid "+e.get("borderColor")}),i},_loadImage:function(){var e=this,i=e.get("url"),s=i.indexOf("?")>-1?"&":"?";e._layBase.style.visibility=e._layCropper.style.visibility="hidden",e._tempImg.src=e._layBase.src=e._layCropper.src=i+s+"nocache="+t.guid(),e._view&&(e._view.src=e._tempImg.src)},_onImgLoad:function(){this._initStyle(),this._setImgSize(),this._setPos(),this._initDrag(),this._initResize()},_initDrag:function(){var t=this;t._drag=new s(t.el,{Max:!0,mxContainer:t.wrap,onstart:function(e){t.fire("dragstart",e)},onmove:function(e){t._setPos(),t.fire("drag",e)},onstop:function(e){t.fire("dragend",e)}})},_initResize:function(){var t=this;t.get("resizable")&&(t._resize=new i(t.el,{Max:!0,Min:!0,Scale:t.get("ratio"),minWidth:t.get("minWidth"),minHeight:t.get("minHeight"),mxContainer:t.wrap,onResize:function(e){t._setPos(),t.fire("resize",e)},onResizeStart:function(e){t.fire("resizestart",e)},onResizeEnd:function(e){t.fire("resizeend",e)}}))},_initStyle:function(){var t=this;t.wrap.css({position:"relative",overflow:"hidden",background:t.get("maskColor")}),t.el.css("z-index",200),l.css(t._layCropper,{zIndex:100,position:"absolute",top:0,left:0}),l.css(t._layBase,{position:"absolute",opacity:t.get("maskOpacity"),top:0,left:0})},_adjustPos:function(){var t=this,e=t._getPos(),i=t.wrap.width(),s=t.wrap.height();e.x+e.w>i&&t.el.width(i-e.x),e.y+e.h>s&&t.el.height(s-e.y)},_setPos:function(){var t=this;t.el.css("zoom",.5),t.el.css({zoom:1,display:"block"}),t._adjustPos();var e=t._getPos();t._layCropper.style.clip="rect("+e.y+"px "+(e.x+e.w)+"px "+(e.y+e.h)+"px "+e.x+"px)",t._view&&t._setPrePos()},_setPreview:function(){var e=this,i=t.one(e.get("previewEl"));i&&(e._view=new Image,e._view.style.position="absolute",i.append(e._view),i.css({position:"relative",overflow:"hidden"}))},_setPrePos:function(){var t=this,e=t._getPos(),i=t._getSize(e.w,e.h,t.get("viewWidth")||l.width(preWrap),t.get("viewHeight")||l.height(preWrap)),s=i.height/e.h,h=e.y*s,n=e.x*s;l.css(t._view,{width:t._layBase.width*s,height:t._layBase.height*s,top:-h,left:-n,clip:"rect("+h+"px "+(n+i.width)+"px "+(h+i.height)+"px "+n+"px)"})},_getSize:function(t,e,i,s){var h,n,a=1*t,o=1*e;return a/i>o/s?(h=i,n=h*o/a):(n=s,h=n*a/o),{width:h,height:n}},_setImgSize:function(){var t=this,e=t._getSize(t._tempImg.width,t._tempImg.height,t.get("areaWidth"),t.get("areaHeight"));return t._layBase.style.width=t._layCropper.style.width=e.width+"px",t._layBase.style.height=t._layCropper.style.height=e.height+"px",t.wrap.css({position:"absolute",width:e.width,height:e.height,top:(t.area.height()-e.height)/2,left:(t.area.width()-e.width)/2}),t._layBase.style.visibility=t._layCropper.style.visibility="visible",t.fire("imgload",{width:e.width,height:e.height}),e},_getPos:function(){return{y:parseFloat(this.el.css("top")),x:parseFloat(this.el.css("left")),w:parseFloat(this.el.css("width")),h:parseFloat(this.el.css("height"))}},getDisplaySize:function(){return this._getSize(this._tempImg.width,this._tempImg.height,this.get("areaWidth"),this.get("areaHeight"))},getOriginalSize:function(){return{width:parseInt(this._tempImg.width,10),height:parseInt(this._tempImg.height,10)}},getCropCoords:function(){var t=this._getPos(),e=parseInt(this._tempImg.width,10)/parseInt(this._layBase.width,10),i={y:t.y,x:t.x,w:t.w,h:t.h,r:e,url:this.get("url")};return i},setCropCoords:function(t,e,i,s){this.el.css({width:i,height:s,top:e,left:t}),this._setPos()},render:function(){this._init()},show:function(){this.area.show()},hide:function(){this.area.hide()},destroy:function(){c.remove(this.area),this.area.html(""),this.preview.html("");for(var t in this)this.hasOwnProperty(t)&&delete this[t]},reset:function(){this._init()},toString:function(){return m.stringify(this.getCropCoords())}},{ATTRS:{areaEl:{value:""},areaWidth:{value:0},areaHeight:{value:0},url:{value:""},initWidth:{value:100},initHeight:{value:100},resizable:{value:!0},ratio:{value:!1},maskOpacity:{value:.5},maskColor:{value:"#000"},borderColor:{value:"#fff"},cubesColor:{value:"#fff"},minHeight:{value:100},minWidth:{value:100},previewEl:{value:""},viewHeight:{value:300},viewWidth:{value:300},initialXY:{value:[50,50]}}})}(),l=function(t){var e=r,i=c,h="getContext"in document.createElement("canvas")?e:i;return t=h,s.exports.CanvasCrop=e,s.exports.Crop=i,t}(),s.exports=l});