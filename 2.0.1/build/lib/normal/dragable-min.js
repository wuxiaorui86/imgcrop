KISSY.add("kg/imgcrop/2.0.1/lib/normal/dragable",["event","dom","ua"],function(t,i,s,o){"use strict";function n(){this.initialize.apply(this,arguments)}{var h=i("event"),e=i("dom");i("ua").ie}n.prototype={initialize:function(t,i){this.Drag=e.get(t),this._x=this._y=0,this._marginLeft=this._marginTop=0,this.setOptions(i),this.Limit=!!this.options.Limit,this.mxLeft=parseInt(this.options.mxLeft),this.mxRight=parseInt(this.options.mxRight),this.mxTop=parseInt(this.options.mxTop),this.mxBottom=parseInt(this.options.mxBottom),this.LockX=!!this.options.LockX,this.LockY=!!this.options.LockY,this.Lock=!!this.options.Lock,this._Handle=e.get(this.options.Handle)||this.Drag,this._mxContainer=e.get(this.options.mxContainer)||null,this._Handle.style.position="absolute",this.Repair(),h.on(this._Handle,"mousedown",this.start,this)},setOptions:function(i){this.options={Handle:"",Limit:!0,mxLeft:0,mxRight:9999,mxTop:0,mxBottom:9999,mxContainer:"",LockX:!1,LockY:!1,Lock:!1,Transparent:!0,onstart:function(){},onmove:function(){},onstop:function(){}},t.mix(this.options,i)},start:function(t){t.preventDefault(),this.Lock||(this.Repair(),this._x=t.clientX-this.Drag.offsetLeft,this._y=t.clientY-this.Drag.offsetTop,this._marginLeft=parseInt(e.css(this.Drag,"margin-left"),10)||this._marginLeft,this._marginTop=parseInt(e.css(this.Drag,"margin-top"),10)||this._marginTop,h.on(document,"mousemove",this.move,this),h.on(document,"mouseup",this.stop,this),this.options.onstart(t))},stop:function(t){h.detach(document,"mousemove",this.move,this),h.detach(document,"mouseup",this.stop,this),this.options.onstop(t)},Repair:function(){this.Limit&&(this.mxRight=Math.max(this.mxRight,this.mxLeft+this.Drag.offsetWidth),this.mxBottom=Math.max(this.mxBottom,this.mxTop+this.Drag.offsetHeight),this._mxContainer&&e.css(this._mxContainer,"position","relative"))},move:function(t){if(this.Lock)return void this.stop();window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();var i=t.clientX-this._x,s=t.clientY-this._y;if(this.Limit){var o=this.mxLeft,n=this.mxRight,h=this.mxTop,e=this.mxBottom;this._mxContainer&&(o=Math.max(o,0),h=Math.max(h,0),n=Math.min(n,this._mxContainer.clientWidth),e=Math.min(e,this._mxContainer.clientHeight)),i=Math.max(Math.min(i,n-this.Drag.offsetWidth),o),s=Math.max(Math.min(s,e-this.Drag.offsetHeight),h)}this.LockX||(this.Drag.style.left=i-this._marginLeft+"px"),this.LockY||(this.Drag.style.top=s-this._marginTop+"px"),this.options.onmove(t)}},o.exports=n});