(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{"8Mb5":function(t,e,i){"use strict";i.r(e),i.d(e,"ion_virtual_scroll",(function(){return y}));var n=i("o0o1"),r=i.n(n),s=i("HaE+"),a=i("1OyB"),l=i("vuIU"),o=i("uFwe"),h=i("wEJo"),c=i("1vRN"),u=function(t,e){var i=d(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},d=function(t,e){switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},f=function(t,e){return 0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex((function(t){return t.index===e}))},v=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var n=0;n<e.length;n++)t[n+i]=e[n];return t},p=function(t,e,i,n,r,s,a,l,o,h,c,u){for(var d=[],f=u+c,v=c;v<f;v++){var p=t[v];if(r){var g=r(p,v,t);null!=g&&d.push({i:h++,type:"header",value:g,index:v,height:i?i(g,v):a,reads:i?0:2,visible:!!i})}if(d.push({i:h++,type:"item",value:p,index:v,height:e?e(p,v):o,reads:e?0:2,visible:!!e}),s){var m=s(p,v,t);null!=m&&d.push({i:h++,type:"footer",value:m,index:v,height:n?n(m,v):l,reads:n?0:2,visible:!!n})}}return d},g=function(t,e,i){for(var n=t[i],r=i;r<t.length;r++)t[r]=n,n+=e[r].height;return n},m=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)},y=function(){function t(e){var i=this;Object(a.a)(this,t),Object(h.o)(this,e),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){i.updateVirtualScroll()}}var e,i,n;return Object(l.a)(t,[{key:"itemsChanged",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"connectedCallback",value:(n=Object(s.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.el.closest("ion-content")){t.next=4;break}return console.error("<ion-virtual-scroll> must be used inside an <ion-content>"),t.abrupt("return");case 4:return t.next=6,e.getScrollElement();case 6:this.scrollEl=t.sent,this.contentEl=e,this.calcCells(),this.updateState();case 10:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.updateState()}},{key:"disconnectedCallback",value:function(){this.scrollEl=void 0}},{key:"onResize",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"positionForItem",value:function(t){return Promise.resolve(function(t,e,i){var n=e.find((function(e){return"item"===e.type&&e.index===t}));return n?i[n.i]:-1}(t,this.cells,this.getHeightIndex()))}},{key:"checkRange",value:(i=Object(s.a)(r.a.mark((function t(e){var i,n,s,a,l=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=l.length>1&&void 0!==l[1]?l[1]:-1,this.items){t.next=3;break}return t.abrupt("return");case 3:n=-1===i?this.items.length-e:i,s=f(this.cells,e),a=p(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,s,e,n),this.cells=v(this.cells,a,s),this.lastItemLen=this.items.length,this.indexDirty=Math.max(e-1,0),this.scheduleUpdate();case 10:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})},{key:"checkEnd",value:(e=Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.items&&this.checkRange(this.lastItemLen);case 1:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"updateVirtualScroll",value:function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(h.h)(this.readVS.bind(this)),Object(h.f)(this.writeVS.bind(this)))}},{key:"readVS",value:function(){for(var t=this.contentEl,e=this.scrollEl,i=0,n=this.el;n&&n!==t;)i+=n.offsetTop,n=n.offsetParent;this.viewportOffset=i,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}},{key:"writeVS",value:function(){var t,e,i=this.indexDirty,n=(t=this.currentScrollTop-this.viewportOffset,e=this.viewportHeight,{top:Math.max(t-100,0),bottom:t+e+100}),r=this.getHeightIndex(),s=function(t,e,i){for(var n=e.top,r=e.bottom,s=0;s<t.length&&!(t[s]>n);s++);for(var a=Math.max(s-2-1,0);s<t.length&&!(t[s]>=r);s++);return{offset:a,length:Math.min(s+2,t.length)-a}}(r,n);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(i,this.range,s)&&(this.range=s,function(t,e,i,n){var r,s=Object(o.a)(t);try{for(s.s();!(r=s.n()).done;){var a=r.value;a.change=0,a.d=!0}}catch(g){s.e(g)}finally{s.f()}for(var l=[],h=n.offset+n.length,c=function(n){var r=i[n],s=t.find((function(t){return t.d&&t.cell===r}));if(s){var a=e[n];a!==s.top&&(s.top=a,s.change=1),s.d=!1}else l.push(r)},u=n.offset;u<h;u++)c(u);for(var d=t.filter((function(t){return t.d})),f=function(){var i=p[v],n=d.find((function(t){return t.d&&t.cell.type===i.type})),r=i.i;n?(n.d=!1,n.change=2,n.cell=i,n.top=e[r]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[r]})},v=0,p=l;v<p.length;v++)f();t.filter((function(t){return t.d&&-9999!==t.top})).forEach((function(t){t.change=1,t.top=-9999}))}(this.virtualDom,r,this.cells,s),this.nodeRender?function(t,e,i,n){for(var r,s=Array.from(t.children).filter((function(t){return"TEMPLATE"!==t.tagName})),a=s.length,l=0;l<i.length;l++){var o=i[l],h=o.cell;if(2===o.change){if(l<a)e(r=s[l],h,l);else{var c=u(t,h.type);(r=e(c,h,l)||c).classList.add("virtual-item"),t.appendChild(r)}r.$ionCell=h}else r=s[l];0!==o.change&&(r.style.transform="translate3d(0,".concat(o.top,"px,0)"));var d=h.visible;o.visible!==d&&(d?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),o.visible=d),h.reads>0&&(n(h,r),h.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(h.l)(this))}},{key:"updateCellHeight",value:function(t,e){var i=this,n=function(){if(e.$ionCell===t){var n=window.getComputedStyle(e),r=e.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));i.setCellHeight(t,r)}};e?Object(c.c)(e,n):n()}},{key:"setCellHeight",value:function(t,e){var i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))}},{key:"scheduleUpdate",value:function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)}},{key:"updateState",value:function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}},{key:"calcCells",value:function(){this.items&&(this.lastItemLen=this.items.length,this.cells=p(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}},{key:"getHeightIndex",value:function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}},{key:"calcHeightIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.heightIndex=m(this.heightIndex,this.cells.length),this.totalHeight=g(this.heightIndex,this.cells,t),this.indexDirty=1/0}},{key:"enableScrollEvents",value:function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)})}},{key:"renderVirtualNode",value:function(t){var e=t.cell,i=e.value,n=e.index;switch(e.type){case"item":return this.renderItem(i,n);case"header":return this.renderHeader(i,n);case"footer":return this.renderFooter(i,n)}}},{key:"render",value:function(){var t=this;return Object(h.j)(h.c,{style:{height:"".concat(this.totalHeight,"px")}},this.renderItem&&Object(h.j)(b,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))}},{key:"el",get:function(){return Object(h.k)(this)}}],[{key:"watchers",get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}}]),t}(),b=function(t,e,i){var n=t.dom;return i.map(e,(function(t,e){var i=n[e],r=t.vattrs||{},s=r.class||"";return s+="virtual-item ",i.visible||(s+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},r),{class:s,style:Object.assign(Object.assign({},r.style),{transform:"translate3d(0,".concat(i.top,"px,0)")})})})}))};y.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);