KISSY.add("kg/imgcrop/2.0.0/lib/html5/selection",["base"],function(e,t,i,g){"use strict";var a=t("base");g.exports=a.extend({initializer:function(){this.csize=3,this.bDrag=[!1,!1,!1,!1],this.bDragAll=!1},event:{DRAG:"drag",START_DRAG:"startdrag",END_DRAG:"enddrag",RESIZE:"resize",START_RESIZE:"startresize",END_RESIZE:"endresize"},draw:function(e,t){var i=this,g=e.canvas.width,a=e.canvas.height;e.clearRect(0,0,g,a),e.drawImage(t,0,0,g,a),e.strokeStyle=i.get("borderColor"),e.lineWidth=1;var s={w:Math.min(Math.max(i.get("w"),i.get("minWidth")),g),h:Math.min(Math.max(i.get("h"),i.get("minHeight")),a),x:Math.min(Math.max(i.get("x"),0),g-i.get("w")),y:Math.min(Math.max(i.get("y"),0),a-i.get("h"))};i.set(s),e.strokeRect(s.x,s.y,s.w,s.h),e.fillStyle=i.get("maskColor"),e.globalAlpha=i.get("maskOpacity"),e.fillRect(0,0,g,i.get("y")),e.fillRect(0,i.get("y"),i.get("x"),i.get("h")),e.fillRect(i.get("x")+i.get("w"),i.get("y"),g-i.get("x")-i.get("w"),i.get("h")),e.fillRect(0,i.get("y")+i.get("h"),g,a-i.get("y")-i.get("h")),e.globalAlpha="1",e.canvas.style.cursor=i.cursor,i.get("resizable")&&(e.fillStyle=i.get("cubesColor"),e.fillRect(i.get("x")-i.csize,i.get("y")-i.csize,2*i.csize,2*i.csize),e.fillRect(i.get("x")+i.get("w")-i.csize,i.get("y")-i.csize,2*i.csize,2*i.csize),e.fillRect(i.get("x")+i.get("w")-i.csize,i.get("y")+i.get("h")-i.csize,2*i.csize,2*i.csize),e.fillRect(i.get("x")-i.csize,i.get("y")+i.get("h")-i.csize,2*i.csize,2*i.csize))},getInfo:function(){return{x:this.get("x"),y:this.get("y"),w:this.get("w"),h:this.get("h")}},resize:function(e,t){var i,g,a,s,r=this;if(r.bDrag[0]?(a=Math.min(e,r.get("w")+r.get("x")-r.get("minWidth")),s=Math.min(t,r.get("h")+r.get("y")-r.get("minHeight")),i=r.get("w")+r.get("x")-a,g=r.get("h")+r.get("y")-s):r.bDrag[1]?(a=r.get("x"),s=Math.min(t,r.get("h")+r.get("y")-r.get("minHeight")),i=e-a,g=r.get("h")+r.get("y")-s):r.bDrag[2]?(a=r.get("x"),s=r.get("y"),i=e-a,g=t-s):r.bDrag[3]&&(a=Math.min(e,r.get("w")+r.get("x")-r.get("minWidth")),s=r.get("y"),i=r.get("w")+r.get("x")-a,g=t-s),r.get("ratio")){var c=r.get("pw")/r.get("ph");c>i/g?g=i/c:i=g*c}r.set({w:i,x:a,h:g,y:s}),r.fire(r.event.RESIZE)},move:function(e,t){var i=this;i.set({x:Math.min(Math.max(i.get("px")+e,0),i.get("constraint")[0]-i.get("pw")),y:Math.min(Math.max(i.get("py")+t,0),i.get("constraint")[1]-i.get("ph"))}),i.fire(i.event.DRAG)},registerPointPos:function(e,t){var i=this,g=-1;return e>i.get("x")+i.csize&&e<i.get("x")+i.get("w")-i.csize&&t>i.get("y")+i.csize&&t<i.get("y")+i.get("h")-i.csize?g=0:e>i.get("x")-i.csize&&e<i.get("x")+i.csize&&t>i.get("y")-i.csize&&t<i.get("y")+i.csize?g=1:e>i.get("x")+i.get("w")-i.csize&&e<i.get("x")+i.get("w")+i.csize&&t>i.get("y")-i.csize&&t<i.get("y")+i.csize?g=2:e>i.get("x")+i.get("w")-i.csize&&e<i.get("x")+i.get("w")+i.csize&&t>i.get("y")+i.get("h")-i.csize&&t<i.get("y")+i.get("h")+i.csize?g=3:e>i.get("x")-i.csize&&e<i.get("x")+i.csize&&t>i.get("y")+i.get("h")-i.csize&&t<i.get("y")+i.get("h")+i.csize&&(g=4),g},markByCode:function(e){var t=this;-1!==e&&(0===e?(t.bDragAll=!0,t.fire(t.event.START_DRAG)):(t.bDrag[e-1]=!0,t.fire(t.event.START_RESIZE)))},hoverByCode:function(e){var t=this;switch(e){case 0:t.cursor="move";break;case 1:t.cursor=t.get("resizable")?"nw-resize":"default";break;case 3:t.cursor=t.get("resizable")?"se-resize":"default";break;case 2:t.cursor=t.get("resizable")?"ne-resize":"default";break;case 4:t.cursor=t.get("resizable")?"sw-resize":"default";break;default:t.cursor="default"}},canMove:function(){return this.bDragAll},canResize:function(){return e.inArray(!0,this.bDrag)},reset:function(){this.bDragAll=!1;for(var e=0;e<this.bDrag.length;e++)this.bDrag[e]=!1}},{ATTRS:{x:{value:0},y:{value:0},w:{value:50},h:{value:50},ratio:{value:!1},minWidth:{value:50},minHeight:{value:50},resizable:{value:!0},borderColor:{value:"#fff"},cubesColor:{value:"#fff"},maskColor:{value:"#000"},maskOpacity:{value:"0.5"},constraint:{value:[1e4,1e4]}}})});