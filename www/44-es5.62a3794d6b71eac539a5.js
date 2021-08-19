!function(){function e(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw o}}}}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"+q+I":function(n,r,o){"use strict";o.r(r),o.d(r,"PlayersPageModule",(function(){return j}));var s,l,c,u=o("ofXK"),f=o("3Pt+"),d=o("TEn/"),b=o("tyNb"),y=o("mrSG"),p=o("8xVP"),h=o("fXoL"),g=o("G/jy"),v=o("2Rin"),m=o("pa2R"),P=[{path:"",component:(s=function(){function n(e,t,r){a(this,n),this.request=e,this.navCtrl=t,this.util=r,this.players=[],this.firstLoading=!0,this.oldPlayers=[],this.playerModel=new p.a("Player",this.request)}var r,o,s;return r=n,(o=[{key:"ngOnInit",value:function(){this.load()}},{key:"load",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(y.b)(this,void 0,void 0,regeneratorRuntime.mark((function a(){var i,o=this;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i={},r&&this.dataPaginate&&(i={page:this.dataPaginate.current_page+1}),this.playerModel.api_function("pageHomePlayers",i).subscribe((function(a){if("success"==a.status)if(o.dataPaginate=a.data,r){var i,s=t(a.data.data);try{for(s.s();!(i=s.n()).done;){var l=i.value;o.players.push(l)}}catch(c){s.e(c)}finally{s.f()}}else o.players=a.data.data;o.oldPlayers=e(o.players),console.log(a),o.firstLoading=!1,n&&n.target.complete()}),(function(e){o.firstLoading=!1,console.error(e),n&&n.target.complete()}));case 2:case"end":return a.stop()}}),a,this)})))}},{key:"loadData",value:function(e){if(this.dataPaginate&&this.dataPaginate.last_page==this.dataPaginate.current_page)return e.target.complete(),e.target.disabled=!0,void(this.infiniteScroll.disabled=!this.infiniteScroll.disabled);this.load(e,!0)}},{key:"playerSelect",value:function(e){console.log("goTo",e),this.navCtrl.navigateForward("player/profile/"+e.id)}},{key:"searchPlayer",value:function(e){return Object(y.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("text search",e),(n=e.target.value).length<=2?this.players=this.oldPlayers:(this.firstLoading=!0,this.playerModel.api_function("searchPlayer",{query:n}).subscribe((function(t){console.log(t),"success"==t.status&&(r.players=t.data,e.target.autofocus=!0),r.firstLoading=!1}),(function(e){console.error(e),r.firstLoading=!1})));case 3:case"end":return t.stop()}}),t,this)})))}},{key:"cancelSearch",value:function(e){this.players=this.oldPlayers}}])&&i(r.prototype,o),s&&i(r,s),n}(),s.\u0275fac=function(e){return new(e||s)(h.Lb(g.a),h.Lb(d.mb),h.Lb(v.a))},s.\u0275cmp=h.Fb({type:s,selectors:[["app-players"]],viewQuery:function(e,t){var n;1&e&&h.xc(d.A,!0),2&e&&h.jc(n=h.Zb())&&(t.infiniteScroll=n.first)},decls:11,vars:2,consts:[["slot","fixed",3,"ionRefresh"],["placeholder","Buscar jugador","debounce","500",3,"keyup","ionClear"],[3,"items","firstLoading","eventSelect"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText",""]],template:function(e,t){1&e&&(h.Qb(0,"ion-header"),h.Qb(1,"ion-toolbar"),h.Qb(2,"ion-title"),h.tc(3,"players"),h.Pb(),h.Pb(),h.Pb(),h.Qb(4,"ion-content"),h.Qb(5,"ion-refresher",0),h.Yb("ionRefresh",(function(e){return t.load(e)})),h.Mb(6,"ion-refresher-content"),h.Pb(),h.Qb(7,"ion-searchbar",1),h.Yb("keyup",(function(e){return t.searchPlayer(e)}))("ionClear",(function(e){return t.cancelSearch(e)})),h.Pb(),h.Qb(8,"app-player-list",2),h.Yb("eventSelect",(function(e){return t.playerSelect(e)})),h.Pb(),h.Qb(9,"ion-infinite-scroll",3),h.Yb("ionInfinite",(function(e){return t.loadData(e)})),h.Mb(10,"ion-infinite-scroll-content",4),h.Pb(),h.Pb()),2&e&&(h.yb(8),h.fc("items",t.players)("firstLoading",t.firstLoading))},directives:[d.x,d.hb,d.fb,d.r,d.M,d.N,d.R,d.sb,m.a,d.A,d.B],styles:[""]}),s)}],w=((l=function e(){a(this,e)}).\u0275mod=h.Jb({type:l}),l.\u0275inj=h.Ib({factory:function(e){return new(e||l)},imports:[[b.j.forChild(P)],b.j]}),l),S=o("j1ZV"),j=((c=function e(){a(this,e)}).\u0275mod=h.Jb({type:c}),c.\u0275inj=h.Ib({factory:function(e){return new(e||c)},imports:[[u.b,f.a,d.ib,w,S.a]]}),c)}}])}();