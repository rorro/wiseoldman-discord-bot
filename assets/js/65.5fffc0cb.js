"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65],{1262:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(7294),i=n(2389);function o(t){let{children:e,fallback:n}=t;return(0,i.Z)()?r.createElement(r.Fragment,null,e?.()):n??null}},6968:(t,e,n)=>{n.r(e)},5135:(t,e,n)=>{n.d(e,{pT:()=>G});var r=n(7294),i=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),o="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,a=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(a):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},u=2;var c=20,h=["top","right","bottom","left","width","height","size","weight"],l="undefined"!=typeof MutationObserver,f=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&c()}function a(){s(o)}function c(){var t=Date.now();if(n){if(t-i<u)return;r=!0}else n=!0,r=!1,setTimeout(a,e);i=t}return c}(this.refresh.bind(this),c)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),l?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;h.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),d=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},p=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||a},v=w(0,0,0,0);function _(t){return parseFloat(t)||0}function y(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+_(t["border-"+n+"-width"])}),0)}function m(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return v;var r=p(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=_(o)}return e}(r),o=i.left+i.right,a=i.top+i.bottom,s=_(r.width),u=_(r.height);if("border-box"===r.boxSizing&&(Math.round(s+o)!==e&&(s-=y(r,"left","right")+o),Math.round(u+a)!==n&&(u-=y(r,"top","bottom")+a)),!function(t){return t===p(t).document.documentElement}(t)){var c=Math.round(s+o)-e,h=Math.round(u+a)-n;1!==Math.abs(c)&&(s-=c),1!==Math.abs(h)&&(u-=h)}return w(i.left,i.top,s,u)}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof p(t).SVGGraphicsElement}:function(t){return t instanceof p(t).SVGElement&&"function"==typeof t.getBBox};function g(t){return o?b(t)?function(t){var e=t.getBBox();return w(0,0,e.width,e.height)}(t):m(t):v}function w(t,e,n,r){return{x:t,y:e,width:n,height:r}}var E=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=w(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=g(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),T=function(t,e){var n,r,i,o,a,s,u,c=(r=(n=e).x,i=n.y,o=n.width,a=n.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(s.prototype),d(u,{x:r,y:i,width:o,height:a,top:i,right:r+o,bottom:a+i,left:r}),u);d(this,{target:t,contentRect:c})},O=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new i,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof p(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new E(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof p(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new T(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),C="undefined"!=typeof WeakMap?new WeakMap:new i,M=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=f.getInstance(),r=new O(e,n,this);C.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){M.prototype[t]=function(){var e;return(e=C.get(this))[t].apply(e,arguments)}}));const S=void 0!==a.ResizeObserver?a.ResizeObserver:M;var k,I={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-I.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*I.Bounce.In(2*t):.5*I.Bounce.Out(2*t-1)+.5}}},R="undefined"==typeof self&&"undefined"!=typeof process&&process.hrtime?function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof self&&void 0!==self.performance&&void 0!==self.performance.now?self.performance.now.bind(self.performance):void 0!==Date.now?Date.now:function(){return(new Date).getTime()},A=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map((function(e){return t._tweens[e]}))},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},t.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},t.prototype.update=function(t,e){void 0===t&&(t=R()),void 0===e&&(e=!1);var n=Object.keys(this._tweens);if(0===n.length)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var i=this._tweens[n[r]],o=!e;i&&!1===i.update(t,o)&&!e&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),x={Linear:function(t,e){var n=t.length-1,r=n*e,i=Math.floor(r),o=x.Utils.Linear;return e<0?o(t[0],t[1],r):e>1?o(t[n],t[n-1],n-r):o(t[i],t[i+1>n?n:i+1],r-i)},Bezier:function(t,e){for(var n=0,r=t.length-1,i=Math.pow,o=x.Utils.Bernstein,a=0;a<=r;a++)n+=i(1-e,r-a)*i(e,a)*t[a]*o(r,a);return n},CatmullRom:function(t,e){var n=t.length-1,r=n*e,i=Math.floor(r),o=x.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(i=Math.floor(r=n*(1+e))),o(t[(i-1+n)%n],t[i],t[(i+1)%n],t[(i+2)%n],r-i)):e<0?t[0]-(o(t[0],t[0],t[1],t[1],-r)-t[0]):e>1?t[n]-(o(t[n],t[n],t[n-1],t[n-1],r-n)-t[n]):o(t[i?i-1:0],t[i],t[n<i+1?n:i+1],t[n<i+2?n:i+2],r-i)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=x.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:(k=[1],function(t){var e=1;if(k[t])return k[t];for(var n=t;n>1;n--)e*=n;return k[t]=e,e}),CatmullRom:function(t,e,n,r,i){var o=.5*(n-t),a=.5*(r-e),s=i*i;return(2*e-2*n+o+a)*(i*s)+(-3*e+3*n-2*o-a)*s+o*i+e}}},P=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),j=new A,D=function(){function t(t,e){void 0===e&&(e=j),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=I.Linear.None,this._interpolationFunction=x.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=P.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(t,e){return this._valuesEnd=Object.create(t),void 0!==e&&(this._duration=e),this},t.prototype.duration=function(t){return this._duration=t,this},t.prototype.start=function(t){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed)for(var e in this._reversed=!1,this._valuesStartRepeat)this._swapEndStartRepeatValues(e),this._valuesStart[e]=this._valuesStartRepeat[e];return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=void 0!==t?"string"==typeof t?R()+parseFloat(t):t:R(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},t.prototype._setupProperties=function(t,e,n,r){for(var i in n){var o=t[i],a=Array.isArray(o),s=a?"array":typeof o,u=!a&&Array.isArray(n[i]);if("undefined"!==s&&"function"!==s){if(u){var c=n[i];if(0===c.length)continue;c=c.map(this._handleRelativeValue.bind(this,o)),n[i]=[o].concat(c)}if("object"!==s&&!a||!o||u)void 0===e[i]&&(e[i]=o),a||(e[i]*=1),r[i]=u?n[i].slice().reverse():e[i]||0;else{for(var h in e[i]=a?[]:{},o)e[i][h]=o[h];r[i]=a?[]:{},this._setupProperties(o,e[i],n[i],r[i])}}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(t){return void 0===t&&(t=R()),this._isPaused||!this._isPlaying||(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this)),this},t.prototype.resume=function(t){return void 0===t&&(t=R()),this._isPaused&&this._isPlaying?(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this):this},t.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},t.prototype.group=function(t){return this._group=t,this},t.prototype.delay=function(t){return this._delayTime=t,this},t.prototype.repeat=function(t){return this._initialRepeat=t,this._repeat=t,this},t.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},t.prototype.yoyo=function(t){return this._yoyo=t,this},t.prototype.easing=function(t){return this._easingFunction=t,this},t.prototype.interpolation=function(t){return this._interpolationFunction=t,this},t.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},t.prototype.onStart=function(t){return this._onStartCallback=t,this},t.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},t.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},t.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},t.prototype.onStop=function(t){return this._onStopCallback=t,this},t.prototype.update=function(t,e){if(void 0===t&&(t=R()),void 0===e&&(e=!0),this._isPaused)return!0;var n,r,i=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>i)return!1;e&&this.start(t)}if(this._goToEnd=!1,t<this._startTime)return!0;!1===this._onStartCallbackFired&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(t-this._startTime)/this._duration,r=0===this._duration||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),1===r){if(this._repeat>0){for(n in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat)this._yoyo||"string"!=typeof this._valuesEnd[n]||(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,s=this._chainedTweens.length;a<s;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(t,e,n,r){for(var i in n)if(void 0!==e[i]){var o=e[i]||0,a=n[i],s=Array.isArray(t[i]),u=Array.isArray(a);!s&&u?t[i]=this._interpolationFunction(a,r):"object"==typeof a&&a?this._updateProperties(t[i],o,a,r):"number"==typeof(a=this._handleRelativeValue(o,a))&&(t[i]=o+(a-o)*r)}},t.prototype._handleRelativeValue=function(t,e){return"string"!=typeof e?e:"+"===e.charAt(0)||"-"===e.charAt(0)?t+parseFloat(e):parseFloat(e)},t.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],n=this._valuesEnd[t];this._valuesStartRepeat[t]="string"==typeof n?this._valuesStartRepeat[t]+parseFloat(n):this._valuesEnd[t],this._valuesEnd[t]=e},t}(),F=(P.nextId,j);F.getAll.bind(F),F.removeAll.bind(F),F.add.bind(F),F.remove.bind(F),F.update.bind(F);function N(){return N=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},N.apply(this,arguments)}var U=function(t,e){return e&&e<r.Children.count(t)?e:0},B={linear:I.Linear.None,ease:I.Quadratic.InOut,"ease-in":I.Quadratic.In,"ease-out":I.Quadratic.Out,cubic:I.Cubic.InOut,"cubic-in":I.Cubic.In,"cubic-out":I.Cubic.Out},L=function(t){return t?B[t]:B.linear},z=function(t,e,n){var i=t.prevArrow,o=t.infinite,a=e<=0&&!o,s={"data-type":"prev","aria-label":"Previous Slide",disabled:a,onClick:n};if(i)return r.cloneElement(i,N({className:(i.props.className||"")+" nav "+(a?"disabled":"")},s));var u="nav default-nav "+(a?"disabled":"");return r.createElement("button",Object.assign({type:"button",className:u},s),r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},r.createElement("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"})))},q=function(t,e,n){var i=t.nextArrow,o=t.infinite,a=t.children,s=1;"slidesToScroll"in t&&(s=t.slidesToScroll||1);var u=e>=r.Children.count(a)-s&&!o,c={"data-type":"next","aria-label":"Next Slide",disabled:u,onClick:n};if(i)return r.cloneElement(i,N({className:(i.props.className||"")+" nav "+(u?"disabled":"")},c));var h="nav default-nav "+(u?"disabled":"");return r.createElement("button",Object.assign({type:"button",className:h},c),r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},r.createElement("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})))},H=function(t,e,n,i){var o=t.children,a=t.indicators,s=1;i?s=null==i?void 0:i.settings.slidesToScroll:"slidesToScroll"in t&&(s=t.slidesToScroll||1);var u=Math.ceil(r.Children.count(o)/s);return r.createElement("ul",{className:"indicators"},Array.from({length:u},(function(t,i){var o={"data-key":i,"aria-label":"Go to slide "+(i+1),onClick:n},u=Math.floor((e+s-1)/s)===i;return"function"==typeof a?function(t,e,n,i){return r.cloneElement(i,N({className:i.props.className+" "+(t?"active":""),key:e},n))}(u,i,o,a(i)):function(t,e,n){return r.createElement("li",{key:e},r.createElement("button",Object.assign({type:"button",className:"each-slideshow-indicator "+(t?"active":"")},n)))}(u,i,o)})))},V={duration:5e3,transitionDuration:1e3,defaultIndex:0,infinite:!0,autoplay:!0,indicators:!1,arrows:!0,pauseOnHover:!0,easing:"linear",canSwipe:!0,cssClass:"",responsive:[]},W=r.forwardRef((function(t,e){var n=(0,r.useState)(U(t.children,t.defaultIndex)),i=n[0],o=n[1],a=(0,r.useRef)(null),s=(0,r.useRef)(null),u=(0,r.useRef)(new A),c=(0,r.useRef)(),h=(0,r.useRef)(),l=(0,r.useMemo)((function(){return r.Children.count(t.children)}),[t.children]),f=(0,r.useCallback)((function(){if(s.current&&a.current){var t=a.current.clientWidth,e=t*l;s.current.style.width=e+"px";for(var n=0;n<s.current.children.length;n++){var r=s.current.children[n];r&&(r.style.width=t+"px",r.style.left=n*-t+"px",r.style.display="block")}}}),[a,s,l]),d=(0,r.useCallback)((function(){a.current&&(h.current=new S((function(t){t&&f()})),h.current.observe(a.current))}),[a,f]),p=(0,r.useCallback)((function(){var e=t.autoplay,n=t.children,o=t.duration,a=t.infinite;e&&r.Children.count(n)>1&&(a||i<r.Children.count(n)-1)&&(c.current=setTimeout(y,o))}),[t,i]);(0,r.useEffect)((function(){return d(),function(){u.current.removeAll(),clearTimeout(c.current),v()}}),[d,u]),(0,r.useEffect)((function(){clearTimeout(c.current),p()}),[i,t.autoplay,p]),(0,r.useEffect)((function(){f()}),[l,f]),(0,r.useImperativeHandle)(e,(function(){return{goNext:function(){y()},goBack:function(){m()},goTo:function(t,e){null!=e&&e.skipTransition?o(t):E(t)}}}));var v=function(){h.current&&a.current&&h.current.unobserve(a.current)},_=function(){t.pauseOnHover&&clearTimeout(c.current)},y=function(){var e=t.children;(t.infinite||i!==r.Children.count(e)-1)&&w((i+1)%r.Children.count(e))},m=function(){var e=t.children;(t.infinite||0!==i)&&w(0===i?r.Children.count(e)-1:i-1)},b=function(t){"prev"===t.currentTarget.dataset.type?m():y()},g=function t(){requestAnimationFrame(t),u.current.update()},w=function(e){if(!u.current.getAll().length){var n;null!=(n=s.current)&&n.children[e]||(e=0),clearTimeout(c.current);g();var r=new D({opacity:0,scale:1},u.current).to({opacity:1,scale:t.scale},t.transitionDuration).onUpdate((function(t){s.current&&(s.current.children[e].style.opacity=t.opacity,s.current.children[i].style.opacity=1-t.opacity,s.current.children[i].style.transform="scale("+t.scale+")")}));r.easing(L(t.easing)),r.onStart((function(){"function"==typeof t.onStartChange&&t.onStartChange(i,e)})),r.onComplete((function(){s.current&&(o(e),s.current.children[i].style.transform="scale(1)"),"function"==typeof t.onChange&&t.onChange(i,e)})),r.start()}},E=function(t){t!==i&&w(t)};return r.createElement("div",{dir:"ltr","aria-roledescription":"carousel"},r.createElement("div",{className:"react-slideshow-container "+(t.cssClass||""),onMouseEnter:_,onMouseOver:_,onMouseLeave:function(){var e=t.pauseOnHover,n=t.autoplay,r=t.duration;e&&n&&(c.current=setTimeout((function(){return y()}),r))}},t.arrows&&z(t,i,b),r.createElement("div",{className:"react-slideshow-fadezoom-wrapper "+t.cssClass,ref:a},r.createElement("div",{className:"react-slideshow-fadezoom-images-wrap",ref:s},(r.Children.map(t.children,(function(t){return t}))||[]).map((function(t,e){return r.createElement("div",{style:{opacity:e===i?"1":"0",zIndex:e===i?"1":"0"},"data-index":e,key:e,"aria-roledescription":"slide","aria-hidden":e===i?"false":"true"},t)})))),t.arrows&&q(t,i,b)),t.indicators&&H(t,i,(function(t){var e=t.currentTarget;e.dataset.key&&parseInt(e.dataset.key)!==i&&E(parseInt(e.dataset.key))})))}));W.defaultProps=V;var G=r.forwardRef((function(t,e){return r.createElement(W,Object.assign({},t,{scale:1,ref:e}))}));G.defaultProps=V,r.forwardRef((function(t,e){return r.createElement(W,Object.assign({},t,{ref:e}))})).defaultProps=V;var Q=r.forwardRef((function(t,e){var n,i=(0,r.useState)(U(t.children,t.defaultIndex)),o=i[0],a=i[1],s=(0,r.useState)(0),u=s[0],c=s[1],h=(0,r.useRef)(null),l=(0,r.useRef)(null),f=(0,r.useRef)(new A),d=(0,r.useMemo)((function(){return function(t,e){if("undefined"!=typeof window&&Array.isArray(e))return e.find((function(e){return e.breakpoint<=t}))}(u,t.responsive)}),[u,t.responsive]),p=(0,r.useMemo)((function(){return d?d.settings.slidesToScroll:t.slidesToScroll||1}),[d,t.slidesToScroll]),v=(0,r.useMemo)((function(){return d?d.settings.slidesToShow:t.slidesToShow||1}),[d,t.slidesToShow]),_=(0,r.useMemo)((function(){return r.Children.count(t.children)}),[t.children]),y=(0,r.useMemo)((function(){return u/v}),[u,v]),m=(0,r.useRef)(),b=(0,r.useRef)(),g=!1,w=0,E=(0,r.useCallback)((function(){if(l.current){var t=u*l.current.children.length;l.current.style.width=t+"px";for(var e=0;e<l.current.children.length;e++){var n=l.current.children[e];n&&(n.style.width=y+"px",n.style.display="block")}}}),[u,y]),T=(0,r.useCallback)((function(){h.current&&(b.current=new S((function(t){t&&F()})),b.current.observe(h.current))}),[h]),O=(0,r.useCallback)((function(){var e=t.autoplay,n=t.infinite,r=t.duration;e&&(n||o<_-1)&&(m.current=setTimeout(I,r))}),[t,_,o]);(0,r.useEffect)((function(){E()}),[u,E]),(0,r.useEffect)((function(){return T(),function(){f.current.removeAll(),clearTimeout(m.current),C()}}),[h,T,f]),(0,r.useEffect)((function(){clearTimeout(m.current),O()}),[o,u,t.autoplay,O]),(0,r.useImperativeHandle)(e,(function(){return{goNext:function(){I()},goBack:function(){R()},goTo:function(t,e){null!=e&&e.skipTransition?a(t):x(t)}}}));var C=function(){b&&h.current&&b.current.unobserve(h.current)},M=function(){t.pauseOnHover&&clearTimeout(m.current)},k=function(e){var r;if(t.canSwipe&&g&&(window.TouchEvent&&e.nativeEvent instanceof TouchEvent?r=e.nativeEvent.touches[0].pageX:e.nativeEvent instanceof MouseEvent&&(r=e.nativeEvent.clientX),r&&n)){var i=y*(o+G()),a=r-n;if(!t.infinite&&o===_-p&&a<0)return;if(!t.infinite&&0===o&&a>0)return;i-=w=a,l.current.style.transform="translate(-"+i+"px)"}},I=function(){if(t.infinite||o!==_-p){var e=P(o+p);W(e)}},R=function(){if(t.infinite||0!==o){var e=o-p;e%p&&(e=Math.ceil(e/p)*p),W(e)}},x=function(t){W(P(t))},P=function(t){return t<_&&t+p>_&&(_-p)%p?_-p:t},j=function(t){"next"===t.currentTarget.dataset.type?I():R()},F=function(){h.current&&c(h.current.clientWidth)},N=function(e){t.canSwipe&&(window.TouchEvent&&e.nativeEvent instanceof TouchEvent?n=e.nativeEvent.touches[0].pageX:e.nativeEvent instanceof MouseEvent&&(n=e.nativeEvent.clientX),clearTimeout(m.current),g=!0)},B=function(){t.canSwipe&&(g=!1,Math.abs(w)/u>.2?w<0?I():R():Math.abs(w)>0&&W(o,300))},V=function t(){requestAnimationFrame(t),f.current.update()},W=function(e,n){var r=n||t.transitionDuration,i=o,s=f.current.getAll();if(h.current){var u=h.current.clientWidth/v;if(!s.length){clearTimeout(m.current);var c={margin:-u*(i+G())+w},d=new D(c,f.current).to({margin:-u*(e+G())},r).onUpdate((function(t){l.current&&(l.current.style.transform="translate("+t.margin+"px)")}));d.easing(L(t.easing)),V();var y=e;y<0?y=_-p:y>=_&&(y=0),d.onStart((function(){"function"==typeof t.onStartChange&&t.onStartChange(o,y)})),d.onComplete((function(){w=0,"function"==typeof t.onChange&&t.onChange(o,y),a(y)})),d.start()}}},G=function(){return t.infinite?v:0},Q={transform:"translate(-"+(o+G())*y+"px)"};return r.createElement("div",{dir:"ltr","aria-roledescription":"carousel"},r.createElement("div",{className:"react-slideshow-container",onMouseEnter:M,onMouseOver:M,onMouseLeave:function(){g?B():t.pauseOnHover&&t.autoplay&&(m.current=setTimeout(I,t.duration))},onMouseDown:N,onMouseUp:B,onMouseMove:k,onTouchStart:N,onTouchEnd:B,onTouchCancel:B,onTouchMove:k},t.arrows&&z(t,o,j),r.createElement("div",{className:"react-slideshow-wrapper slide "+(t.cssClass||""),ref:h},r.createElement("div",{className:"images-wrap",style:Q,ref:l},t.infinite&&r.Children.toArray(t.children).slice(-v).map((function(t,e){return r.createElement("div",{"data-index":e-v,"aria-roledescription":"slide","aria-hidden":"true",key:e-v},t)})),(r.Children.map(t.children,(function(t){return t}))||[]).map((function(t,e){var n=function(t){return t<o+v&&t>=o}(e);return r.createElement("div",{"data-index":e,key:e,className:n?"active":"","aria-roledescription":"slide","aria-hidden":n?"false":"true"},t)})),function(){if(t.infinite||v!==p)return r.Children.toArray(t.children).slice(0,v).map((function(t,e){return r.createElement("div",{"data-index":_+e,"aria-roledescription":"slide","aria-hidden":"true",key:_+e},t)}))}())),t.arrows&&q(t,o,j)),t.indicators&&H(t,o,(function(t){var e=t.currentTarget;if(e.dataset.key){var n=parseInt(e.dataset.key);x(n*p)}}),d))}));Q.defaultProps=V}}]);