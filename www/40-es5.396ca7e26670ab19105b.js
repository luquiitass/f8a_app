!function(){function e(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"3nJb":function(e,t,r){"use strict";r.r(t),r.d(t,"ResultsPageModule",(function(){return j}));var o=r("ofXK"),a=r("3Pt+"),s=r("TEn/"),c=r("tyNb"),u=r("mrSG"),l=r("8xVP"),f=r("fXoL"),b=r("G/jy"),d=r("2Rin"),g=r("vuFD"),h=r("qgph"),m=r("T3jL"),v=r("6Rhz");function p(e,t){if(1&e&&(f.Qb(0,"ion-segment-button",9),f.tc(1),f.Pb()),2&e){var n=t.$implicit,r=t.index,i=f.ac(2);f.gc("value",r),f.hc("id","sgm_r_",r,""),f.yb(1),f.vc(" ",i.formatDate(n.date)," ")}}function y(e,t){1&e&&(f.Qb(0,"ion-list-header",10),f.Qb(1,"ion-label"),f.tc(2,"Sin registros"),f.Pb(),f.Pb())}function w(e,t){if(1&e&&f.Mb(0,"app-result-item",11),2&e){var n=t.$implicit;f.hc("routerLink","/results/profile/",n.id,""),f.fc("game",n)}}function k(e,t){if(1&e){var n=f.Rb();f.Qb(0,"div"),f.Qb(1,"ion-refresher",2),f.Yb("ionRefresh",(function(e){return f.nc(n),f.ac().init(e)})),f.Mb(2,"ion-refresher-content",3),f.Pb(),f.Qb(3,"ion-list"),f.Qb(4,"ion-grid"),f.Qb(5,"ion-row"),f.Qb(6,"ion-col",4),f.Qb(7,"ion-segment",5),f.Yb("ngModelChange",(function(e){return f.nc(n),f.ac().tabSelected=e}))("ionChange",(function(e){return f.nc(n),f.ac().selectDate(e)})),f.sc(8,p,2,3,"ion-segment-button",6),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.sc(9,y,3,0,"ion-list-header",7),f.sc(10,w,1,2,"app-result-item",8),f.Pb(),f.Pb()}if(2&e){var r=f.ac();f.yb(7),f.fc("ngModel",r.tabSelected),f.yb(1),f.fc("ngForOf",r.tabs),f.yb(1),f.fc("ngIf",0==r.listsHomeService.results.length),f.yb(1),f.fc("ngForOf",r.listsHomeService.results)}}function P(e,t){1&e&&(f.Qb(0,"ion-card"),f.Qb(1,"div",14),f.Mb(2,"ion-skeleton-text",12),f.Mb(3,"ion-skeleton-text",15),f.Pb(),f.Pb())}function x(e,t){if(1&e&&(f.Qb(0,"div"),f.Qb(1,"ion-grid"),f.Qb(2,"ion-row"),f.Qb(3,"ion-col"),f.Mb(4,"ion-skeleton-text",12),f.Pb(),f.Qb(5,"ion-col"),f.Mb(6,"ion-skeleton-text",12),f.Pb(),f.Qb(7,"ion-col"),f.Mb(8,"ion-skeleton-text",12),f.Pb(),f.Pb(),f.Pb(),f.sc(9,P,4,0,"ion-card",13),f.Pb()),2&e){var n=f.ac();f.yb(9),f.fc("ngForOf",n.listSkeleton)}}var S,L,M,O=[{path:"",component:(S=function(){function e(t,r,i,o,a){n(this,e),this.request=t,this.util=r,this.dialogService=i,this.paymentTeamService=o,this.listsHomeService=a,this.tabs=[],this.listSkeleton=new Array(3),this.firstLoad=!0,this.modelGame=new l.a("Game",t)}return i(e,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.modelGame.api_function("pageHomeResults").subscribe((function(t){"success"==t.status&&(n.tabs=t.data.dates,n.selectLast()),e&&e.target.complete(),console.log(t),n.firstLoad=!1}),(function(t){e&&e.target.complete(),console.error(t),n.firstLoad=!1}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"selectLast",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.tabs.length>0)){e.next=7;break}return t=this.tabs.slice(-1)[0],this.listsHomeService.results=t.results,this.tabSelected=this.tabs.length-1,e.next=6,this.delay(1500);case 6:this.focusSegment();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"selectDate",value:function(e){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=parseInt(e.detail.value),!(r=this.tabs[n]).results){t.next=3;break}return t.abrupt("return",(this.listsHomeService.results=r.results,void this.focusSegment()));case 3:return t.next=5,this.dialogService.loadingProgres();case 5:this.modelGame.api_function("resultsByDate",{date:r.date}).subscribe((function(e){"success"==e.status&&(i.tabs[n].results=e.data,i.listsHomeService.results=i.tabs[n].results,i.focusSegment()),i.dialogService.dimissLoaging(),console.log(e)}),(function(e){console.error(e),i.dialogService.dimissLoaging()}));case 6:case"end":return t.stop()}}),t,this)})))}},{key:"focusSegment",value:function(){var e="sgm_r_"+this.tabSelected;console.log("select segment : ",e),document.getElementById(e).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}},{key:"delay",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"formatDate",value:function(e){return this.util.setFormatMoment(e,"DD MMMM YYYY")}}]),e}(),S.\u0275fac=function(e){return new(e||S)(f.Lb(b.a),f.Lb(d.a),f.Lb(g.a),f.Lb(h.a),f.Lb(m.a))},S.\u0275cmp=f.Fb({type:S,selectors:[["app-results"]],decls:9,vars:2,consts:[["slot","start"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["refreshingText","Cargando..."],["size","12"],["scrollable","",3,"ngModel","ngModelChange","ionChange"],[3,"value","id",4,"ngFor","ngForOf"],["color","tertiary",4,"ngIf"],["withEvents","true","routerDirection","forward",3,"game","routerLink",4,"ngFor","ngForOf"],[3,"value","id"],["color","tertiary"],["withEvents","true","routerDirection","forward",3,"game","routerLink"],["animated","",2,"width","100%","height","30px"],[4,"ngFor","ngForOf"],[1,"ion-padding","custom-skeleton"],["animated","",2,"width","100%","height","30px","margin-top","15px"]],template:function(e,t){1&e&&(f.Qb(0,"ion-header"),f.Qb(1,"ion-toolbar"),f.Qb(2,"ion-buttons",0),f.Mb(3,"ion-menu-button"),f.Pb(),f.Qb(4,"ion-title"),f.tc(5,"Resultados"),f.Pb(),f.Pb(),f.Pb(),f.Qb(6,"ion-content"),f.sc(7,k,11,4,"div",1),f.sc(8,x,10,1,"div",1),f.Pb()),2&e&&(f.yb(7),f.fc("ngIf",!t.firstLoad),f.yb(1),f.fc("ngIf",t.firstLoad))},directives:[s.x,s.jb,s.j,s.K,s.hb,s.r,o.k,s.O,s.P,s.H,s.w,s.S,s.q,s.U,s.ub,a.d,a.g,o.j,s.V,s.I,s.G,v.a,s.tb,c.h,s.Y,s.k],styles:[".game[_ngcontent-%COMP%]{color:#fff;width:100%;padding:10px;border-radius:5px;box-shadow:inset 0 -3em 3em rgba(0,0,0,.1),0 0 0 2px #fff,.3em .3em 1em rgba(0,0,0,.3)}.team[_ngcontent-%COMP%]{position:relative;background-image:url(img_fondo_res4.7a1ad4da4803a568a1d2.png);background-repeat:no-repeat;background-size:cover;width:100%;padding:15px 10px 10px}.name-team[_ngcontent-%COMP%]{width:70%}.goals-team[_ngcontent-%COMP%], .name-team[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.goals-team[_ngcontent-%COMP%]{width:30%;text-align:right;padding-right:20px}.comment[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;display:none}"]}),S)}],Q=((L=function e(){n(this,e)}).\u0275mod=f.Jb({type:L}),L.\u0275inj=f.Ib({factory:function(e){return new(e||L)},imports:[[c.j.forChild(O)],c.j]}),L),I=r("j1ZV"),j=((M=function e(){n(this,e)}).\u0275mod=f.Jb({type:M}),M.\u0275inj=f.Ib({factory:function(e){return new(e||M)},imports:[[o.b,a.a,s.kb,Q,I.a]]}),M)},rLe3:function(t,r,o){"use strict";o.d(r,"a",(function(){return s}));var a=o("fXoL"),s=function(){var t=function(){function t(){n(this,t)}return i(t,[{key:"listAddLast",value:function(e,t){e.push(t)}},{key:"listAddFirst",value:function(e,t){e.unshift(t)}},{key:"listUpdate",value:function(e,t,n){var r=this.findIndexList(e,t);r>=0&&(e[r]=n)}},{key:"listDelete",value:function(e,t){var n=this.findIndexList(e,t);n>=0&&e.splice(n,1)}},{key:"findList",value:function(e,t){return e.find((function(e){return e.id===t}))}},{key:"findIndexList",value:function(e,t){return e.findIndex((function(e){return e.id===t}))}},{key:"updateAttribustesObject",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];console.log("update attributes");var i,o=e(r);try{for(o.s();!(i=o.n()).done;){var a=i.value;n.hasOwnProperty(a)&&(t[a]=n[a])}}catch(s){o.e(s)}finally{o.f()}return t}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();