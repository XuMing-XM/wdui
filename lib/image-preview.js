!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{var n=t("object"==typeof exports?require("vue"):e.Vue);for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=42)}({0:function(e,t){e.exports=function(e,t,n,i){var a,r=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(a=e,r=e.default);var s="function"==typeof r?r.options:r;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),i){var l=s.computed||(s.computed={});Object.keys(i).forEach(function(e){var t=i[e];l[e]=function(){return t}})}return{esModule:a,exports:r,options:s}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(i[r]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},10:function(e,t,n){n(12);var i=n(0)(n(8),n(11),null,null);e.exports=i.exports},105:function(e,t,n){n(144);var i=n(0)(n(67),n(124),null,null);e.exports=i.exports},11:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"wd-mask-fade"}},[e.show?n("div",{staticClass:"wd-mask",style:e.maskStyle,on:{click:e.handleClick}}):e._e()])},staticRenderFns:[]}},12:function(e,t,n){var i=n(9);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("3a61642c",i,!0)},124:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"wd-imagepreview-"+e.transition},on:{"after-enter":function(t){e.onShow()},"after-leave":function(t){e.onHide()}}},[e.visible?n("div",{ref:"popup",staticClass:"wd-imagepreview",style:{"z-index":e.zIndex}},[n("ul",{ref:"container",staticClass:"wd-imagepreview-container",class:{dragging:e.dragState.dragging}},e._l(e.imgList,function(e){return n("li",{staticClass:"wd-imagepreview-item"},[n("img",{attrs:{src:e.url}})])})),e._v(" "),e.autoClose?e._e():n("span",{staticClass:"wd-imagepreview-close",on:{click:e.onClose}},[e._v("关闭")]),e._v(" "),e.showIndicator?n("span",{staticClass:"wd-imagepreview-indicator"},[e._v(e._s(e.currentIndex+1)+"/"+e._s(e.sum))]):e._e()]):e._e()])},staticRenderFns:[]}},14:function(e,t,n){"use strict";var i=!1,a="ontouchstart"in window;t.a=function(e,t){var n=function(e){t.drag&&t.drag(a?e.changedTouches[0]||e.touches[0]:e)},r=function e(r){a||(document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",e)),document.onselectstart=null,document.ondragstart=null,i=!1,t.end&&t.end(a?r.changedTouches[0]||r.touches[0]:r)};e.addEventListener(a?"touchstart":"mousedown",function(e){i||(document.onselectstart=function(){return!1},document.ondragstart=function(){return!1},a||(document.addEventListener("mousemove",n),document.addEventListener("mouseup",r)),i=!0,t.start&&(e.preventDefault(),t.start(a?e.changedTouches[0]||e.touches[0]:e)))}),a&&(e.addEventListener("touchmove",n),e.addEventListener("touchend",r),e.addEventListener("touchcancel",r))}},144:function(e,t,n){var i=n(93);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("35f36a28",i,!0)},15:function(e,t,n){"use strict";var i=document.documentElement.style,a=void 0,r=!1;window.opera&&"[object Opera]"===Object.prototype.toString.call(opera)?a="presto":"MozAppearance"in i?a="gecko":"WebkitAppearance"in i?a="webkit":"string"==typeof navigator.cpuClass&&(a="trident");var o={trident:"-ms-",gecko:"-moz-",webkit:"-webkit-",presto:"-o-"}[a],s={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[a],l=document.createElement("div"),c=s+"Perspective",u=s+"Transform",d=o+"transform",f=s+"Transition",p=o+"transition",h=s.toLowerCase()+"TransitionEnd";void 0!==l.style[c]&&(r=!0);var m=function(e){var t={left:0,top:0};if(null===e||null===e.style)return t;var n=e.style[u],i=/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g.exec(n);return i&&(t.left=+i[1],t.top=+i[3]),t},v=function(e){if(null!==e&&null!==e.style){var t=e.style[u];t&&(t=t.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g,""),e.style[u]=t)}},g=function(e,t,n){if((null!==t||null!==n)&&null!==e&&void 0!==e&&null!==e.style&&(e.style[u]||0!==t||0!==n)){if(null===t||null===n){var i=m(e);null===t&&(t=i.left),null===n&&(n=i.top)}v(e),e.style[u]+=r?" translate("+(t?t+"px":"0px")+","+(n?n+"px":"0px")+") translateZ(0px)":" translate("+(t?t+"px":"0px")+","+(n?n+"px":"0px")+")"}};t.a={transformProperty:u,transformStyleName:d,transitionProperty:f,transitionStyleName:p,transitionEndProperty:h,getElementTranslate:m,translateElement:g,cancelTranslateElement:v}},19:function(e,t,n){"use strict";var i=n(4),a=n.n(i),r=n(105),o=n.n(r),s=a.a.extend(o.a),l=function(e){return new s({propsData:e}).$mount(document.createElement("div"))},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=l({transition:e.transition,maskOpacity:e.maskOpacity,maskColor:e.maskColor,imgList:e.imgList,autoClose:e.autoClose,showIndicator:e.showIndicator,defaultIndex:e.defaultIndex});return t.value=e.open!==!1,t.onShow=e.onShow?e.onShow.bind(null,t):function(){},t.onHide=e.onHide?e.onHide.bind(null,t):function(){},t.onClose=function(){t.value=!1},document.body.appendChild(t.$el),t};t.a=c},2:function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=u[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(r(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(r(n.parts[a]));u[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function r(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(h)return m;i.parentNode.removeChild(i)}if(v){var r=p++;i=f||(f=a()),t=o.bind(null,i,r,!1),n=o.bind(null,i,r,!0)}else i=a(),t=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function o(e,t,n,i){var a=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var r=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function s(e,t){var n=t.css,i=t.media,a=t.sourceMap;if(i&&e.setAttribute("media",i),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var a=c(e,t);return i(a),function(t){for(var n=[],r=0;r<a.length;r++){var o=a[r],s=u[o.id];s.refs--,n.push(s)}t?(a=c(e,t),i(a)):a=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},3:function(e,t){e.exports=function(e,t){for(var n=[],i={},a=0;a<t.length;a++){var r=t[a],o=r[0],s=r[1],l=r[2],c=r[3],u={id:e+":"+a,css:s,media:l,sourceMap:c};i[o]?i[o].parts.push(u):n.push(i[o]={id:o,parts:[u]})}return n}},4:function(t,n){t.exports=e},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(19);n.d(t,"default",function(){return i.a})},5:function(e,t,n){"use strict";var i=n(6),a=n(7);t.a={props:{mask:{type:Boolean,default:!0},maskOpacity:{type:Number,default:.4},maskColor:{type:String,default:"#000"},lockScroll:{type:Boolean,default:!0}},data:function(){return{open:!1,maskZIndex:n.i(a.a)(),zIndex:n.i(a.a)(),touchStatusCache:{clientY:0,scrolling:!1}}},methods:{maskClick:function(e){this.$emit("maskClick",e)},setZIndex:function(){var e=this.$el;this.zIndex||(this.zIndex=n.i(a.a)()),e&&(e.style.zIndex=this.zIndex)},resetZIndex:function(){this.maskZIndex=n.i(a.a)(),this.zIndex=n.i(a.a)()},removeWheelEvent:function(e){return e.stopPropagation(),e.preventDefault(),e.cancelBubble=!1,!1},preventScroll:function(){document.addEventListener("mousewheel",this.removeWheelEvent,!1),document.addEventListener("touchmove",this.removeWheelEvent,!1)},enableScrollable:function(){var e=this;Array.prototype.slice.call(this.$el.querySelectorAll(".wd-popup-scrollable")).forEach(function(t){t.addEventListener("mousewheel",e.enableWheelScrollEventHandler.bind(e,t),!1),t.addEventListener("touchmove",e.enableTouchScrollEventHandler.bind(e,t),!1),t.addEventListener("touchstart",e.touchStartEventHandler.bind(e,t),!1)})},enableWheelScrollEventHandler:function(e,t){return t.stopPropagation(),t.cancelBubble=!1,t.deltaY<0&&0===e.scrollTop?(t.preventDefault(),!1):t.deltaY>0&&e.offsetHeight+e.scrollTop===e.scrollHeight?(t.preventDefault(),!1):void 0},enableTouchScrollEventHandler:function(e,t){if(t.stopPropagation(),t.cancelBubble=!1,this.touchStatusCache.clientY){var n=t.touches[0].clientY-this.touchStatusCache.clientY;this.touchStatusCache.clientY=t.touches[0].clientY,n>0&&0===e.scrollTop&&t.preventDefault(),n<0&&e.offsetHeight+e.scrollTop===e.scrollHeight&&t.preventDefault()}else this.touchStatusCache.clientY=t.touches[0].clientY},touchStartEventHandler:function(e,t){this.touchStatusCache.scrolling||(this.touchStatusCache.scrolling=!0,0===t.currentTarget.scrollTop?t.currentTarget.scrollTop=1:t.currentTarget.scrollHeight===t.currentTarget.scrollTop+t.currentTarget.offsetHeight&&(t.currentTarget.scrollTop-=1),this.touchStatusCache.scrolling=!1),this.touchStatusCache.clientY=t.touches[0].clientY},allowScroll:function(){document.removeEventListener("mousewheel",this.removeWheelEvent,!1),document.removeEventListener("touchmove",this.removeWheelEvent,!1)},disableScrollable:function(){var e=this;Array.prototype.slice.call(this.$el.querySelectorAll(".wd-popup-scrollable")).forEach(function(t){t.removeEventListener("mousewheel",e.enableWheelScrollEventHandler.bind(e,t),!1),t.removeEventListener("touchmove",e.enableTouchScrollEventHandler.bind(e,t),!1),t.removeEventListener("touchstart",e.touchStartEventHandler.bind(e,t),!1)})}},mounted:function(){this.mask&&this.open&&i.a.open(this)},updated:function(){this.mask||this.setZIndex()},beforeDestroy:function(){i.a.close(this),this.$refs.popup&&this.$refs.popup.parentNode.removeChild(this.$refs.popup)},watch:{value:function(e){this.open=e},open:function(e,t){var n=this;e!==t&&(e?(this.resetZIndex(),this.mask&&(i.a.open(this),this.lockScroll&&this.$nextTick(function(){n.preventScroll(),n.enableScrollable()}))):(i.a.close(this),this.lockScroll&&(this.allowScroll(),this.disableScrollable())))},mask:function(e,t){e!==t&&(e?i.a.open(this):i.a.close(this))}}}},6:function(e,t,n){"use strict";var i=n(4),a=n.n(i),r=n(10),o=n.n(r),s=a.a.extend(o.a),l={instances:[],mask:!1,open:function(e){e&&this.instances.indexOf(e)===-1&&(0===this.instances.length&&this.showMask(e),this.instances.push(e),this.changeMaskStyle())},close:function(e){var t=this,n=this.instances.indexOf(e);n!==-1&&a.a.nextTick(function(){t.instances.splice(n,1),0===t.instances.length&&t.closeMask(),t.changeMaskStyle()})},showMask:function(e){var t=this.mask=new s({el:document.createElement("div")});t.fixed=!0,t.color=e.maskColor||"#000",t.opacity=e.maskOpacity||.4,t.zIndex=e.maskZIndex,t.onClick=this.handleMaskClick.bind(this),document.body.appendChild(t.$el),a.a.nextTick(function(){t.show=!0})},closeMask:function(){if(this.mask){var e=this.mask;e.show=!1,this.mask=null,setTimeout(function(){e.$el.remove(),e.$destroy()},450)}},changeMaskStyle:function(){if(this.mask&&0!==this.instances.length){var e=this.instances[this.instances.length-1];this.mask.color=e.maskColor||"#000",this.mask.opacity=e.maskOpacity||.4,this.mask.zIndex=e.maskZIndex,this.mask.onClick=this.handleMaskClick.bind(this)}},handleMaskClick:function(){if(0!==this.instances.length){var e=this.instances[this.instances.length-1];e.maskClick&&e.maskClick()}}};t.a=l},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),a=n(15),r=n(14);t.default={name:"wd-imagepreview",mixins:[i.a],props:{value:{type:Boolean,default:!1},transition:{type:String,default:"fade"},imgList:{type:Array,default:[],required:!0},defaultIndex:{type:Number,default:0},autoClose:{type:Boolean,default:!1},showIndicator:{type:Boolean,default:!0},onShow:{type:Function,default:function(){}},onHide:{type:Function,default:function(){}},onMaskClick:{type:Function,default:function(){}},onClose:{type:Function,default:function(){}}},data:function(){return{visible:!1,dragState:{startLeft:0,startTop:0,offsetLeft:0,initialTranslateX:0,endLeft:0,prevLeft:0,prevAcce:0,prevTimestamp:0,dragging:!1},defaultDragState:{startLeft:0,startTop:0,offsetLeft:0,initialTranslateX:0,endLeft:0,prevLeft:0,prevAcce:0,prevTimestamp:0,dragging:!1},itemWidth:0,currentIndex:0,sum:0}},watch:{value:function(e){var t=this;this.visible=e,this.open=e,this.$refs.container||this.$nextTick(function(){t.init()})},visible:function(e){this.$emit("input",e)}},mounted:function(){this.value&&(this.visible=!0,this.open=!0,this.init())},methods:{maskClick:function(){this.onMaskClick()},init:function(){this.initData(),this.bindEvent(),this.locateItem(this.defaultIndex)},initData:function(){this.itemWidth=document.documentElement.clientWidth,this.sum=this.imgList.length},bindEvent:function(){var e=this;n.i(r.a)(this.$refs.container,{start:function(t){e.dragState.prevLeft=e.dragState.startLeft=t.pageX,e.dragState.startTop=t.pageY,e.dragState.prevTimestamp=Date.now(),e.dragState.initialTranslateX=a.a.getElementTranslate(e.$refs.container).left,e.dragState.dragging=!0},drag:function(t){e.dragState.dragging=!0,e.dragState.offsetLeft=t.pageX-e.dragState.startLeft,e.dragState.endLeft=e.dragState.offsetLeft+e.dragState.initialTranslateX,a.a.translateElement(e.$refs.container,e.dragState.endLeft,null),e.dragState.prevAcce=(t.pageX-e.dragState.prevLeft)/(Date.now()-e.dragState.prevTimestamp),e.dragState.prevLeft=t.pageX,e.dragState.prevTimestamp=Date.now()},end:function(t){e.dragState.dragging=!1;var n=Math.round(-a.a.getElementTranslate(e.$refs.container).left/e.itemWidth),i=.5;n===e.currentIndex&&(e.dragState.prevAcce<-i?n+=1:e.dragState.prevAcce>i&&(n-=1)),n<0?e.locateItem(0):n>e.imgList.length-1?e.locateItem(e.imgList.length-1):e.locateItem(n),e.dragState.startLeft===t.pageX&&e.dragState.startTop===t.pageY&&e.autoClose&&e.onClose(),e.dragState=JSON.parse(JSON.stringify(e.defaultDragState))}})},locateItem:function(e){a.a.translateElement(this.$refs.container,-e*this.itemWidth,null),this.currentIndex=e}}}},7:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=20161224,a=function(){return i++}},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"wd-mask",props:{show:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},onClick:{type:Function},opacity:{type:Number,default:.4},color:{type:String,default:"#000"},zIndex:{type:Number}},data:function(){return{}},methods:{handleClick:function(){this.onClick&&this.onClick()}},computed:{maskStyle:function(){return{opacity:this.opacity,"background-color":this.color,position:this.fixed?"fixed":"","z-index":this.zIndex}}}}},9:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".wd-mask{position:absolute;left:0;right:0;top:0;bottom:0}.wd-mask-fade-enter-active,.wd-mask-fade-leave-active{-webkit-transition:opacity .45s cubic-bezier(.23,1,.32,1);transition:opacity .45s cubic-bezier(.23,1,.32,1)}.wd-mask-fade-enter,.wd-mask-fade-leave-active{opacity:0!important}",""])},93:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".wd-imagepreview{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#000}.wd-imagepreview .wd-imagepreview-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.wd-imagepreview .wd-imagepreview-container.dragging{-webkit-transition-duration:0;transition-duration:0}.wd-imagepreview .wd-imagepreview-container .wd-imagepreview-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100vw;-webkit-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none}.wd-imagepreview .wd-imagepreview-container .wd-imagepreview-item img{max-width:100%;max-height:100%}.wd-imagepreview .wd-imagepreview-close{display:inline-block;position:absolute;right:.533333rem;bottom:.666667rem;width:1.333333rem;height:.64rem;background-color:rgba(69,69,69,.5);color:#fff;font-size:.32rem;text-align:center;line-height:.64rem;border:.013333rem solid hsla(0,0%,59%,.6);-webkit-border-radius:.026667rem;border-radius:2px}.wd-imagepreview .wd-imagepreview-indicator{position:absolute;left:50%;bottom:.826667rem;color:#7b7b7b;font-size:.32rem;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}.wd-imagepreview-fade-enter-active,.wd-imagepreview-fade-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}.wd-imagepreview-fade-enter,.wd-imagepreview-fade-leave-active{opacity:0}",""])}})});