!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)}}function o(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{Kqyu:function(t,e,n){"use strict";n.r(e),n.d(e,"ModalFilterPageModule",(function(){return m}));var r,i,o=n("ofXK"),a=n("3Pt+"),u=n("TEn/"),s=n("tyNb"),l=n("qq2r"),f=n("fXoL"),b=[{path:"",component:l.a}],p=((i=function t(){c(this,t)}).\u0275mod=f.Jb({type:i}),i.\u0275inj=f.Ib({factory:function(t){return new(t||i)},imports:[[s.j.forChild(b)],s.j]}),i),m=((r=function t(){c(this,t)}).\u0275mod=f.Jb({type:r}),r.\u0275inj=f.Ib({factory:function(t){return new(t||r)},imports:[[o.b,a.a,u.kb,p]]}),r)},qq2r:function(e,o,a){"use strict";a.d(o,"a",(function(){return y}));var u=a("9suA"),s=a("fXoL"),l=a("TEn/"),f=a("ofXK"),b=a("EbHZ");function p(t,e){1&t&&(s.Qb(0,"ion-list-header",6),s.Qb(1,"ion-label"),s.tc(2,"No se ha encontrado equipos"),s.Pb(),s.Pb())}function m(t,e){if(1&t&&(s.Qb(0,"ion-avatar",0),s.Mb(1,"ion-img",11),s.Pb()),2&t){var n=s.ac().$implicit;s.yb(1),s.fc("src",n.shield?n.shield.urlCompleteThumb:"assets/images/esc.png")}}function h(t,e){if(1&t){var n=s.Rb();s.Qb(0,"ion-item",7),s.Yb("click",(function(){s.nc(n);var t=e.$implicit;return s.ac().dismiss(t)})),s.sc(1,m,2,1,"ion-avatar",8),s.Qb(2,"ion-label"),s.Qb(3,"h3",9),s.tc(4),s.Pb(),s.Pb(),s.Mb(5,"ion-icon",10),s.Pb()}if(2&t){var r=e.$implicit;s.yb(1),s.fc("ngIf",-1!=r.id),s.yb(3),s.uc(-1==r.id?"Registrar Nuevo Equipo ":r.name)}}var y=function(){var e=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(l,e);var o,a,u,s=i(l);function l(e,n,r){var i;return c(this,l),(i=s.call(this,n,e)).viewCtrl=e,i.location=n,i.dataTranfer=r,i.teams=[],i.oldTeams=[],i.textSearch="",i.teams=r.getData("teams"),i.oldTeams=t(i.teams),i}return o=l,(a=[{key:"initObject",value:function(){}},{key:"dismiss",value:function(t){this.viewCtrl.dismiss({team:t})}},{key:"close",value:function(){this.viewCtrl.dismiss()}},{key:"filterTeams",value:function(e){e.length<=0?this.teams=this.oldTeams:(this.teams=t(this.oldTeams),this.teams=this.teams.filter((function(t){return t.name.toUpperCase().includes(e.toUpperCase())||-1==t.id})))}},{key:"getFilter",value:function(){var t=this;return this.teams.filter((function(e){return e.name.toUpperCase().includes(t.textSearch.toUpperCase())||-1==e.id}))}},{key:"cancelFilter",value:function(t){this.teams=this.oldTeams}},{key:"filterChangue",value:function(t){this.textSearch=t.detail.value}},{key:"log",value:function(t){console.log(t)}}])&&n(o.prototype,a),u&&n(o,u),l}(u.a);return e.\u0275fac=function(t){return new(t||e)(s.Lb(l.nb),s.Lb(f.m),s.Lb(b.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-modal-filter"]],features:[s.vb],decls:12,vars:2,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],["placeholder","Filtrar equipos",3,"ionClear","ionChange"],["color","tertiary",4,"ngIf"],["class","team-list",3,"click",4,"ngFor","ngForOf"],["color","tertiary"],[1,"team-list",3,"click"],["slot","start",4,"ngIf"],[1,"fs-team"],["name","chevron-forward-outline"],[3,"src"]],template:function(t,e){1&t&&(s.Qb(0,"ion-header"),s.Qb(1,"ion-toolbar"),s.Qb(2,"ion-buttons",0),s.Qb(3,"ion-button",1),s.Yb("click",(function(){return e.close()})),s.Mb(4,"ion-icon",2),s.Pb(),s.Pb(),s.Qb(5,"ion-title"),s.tc(6,"Buscar Equipo"),s.Pb(),s.Pb(),s.Pb(),s.Qb(7,"ion-content"),s.Qb(8,"ion-searchbar",3),s.Yb("ionClear",(function(t){return e.cancelFilter(t)}))("ionChange",(function(t){return e.filterChangue(t)})),s.Pb(),s.Qb(9,"ion-list"),s.sc(10,p,3,0,"ion-list-header",4),s.sc(11,h,6,2,"ion-item",5),s.Pb(),s.Pb()),2&t&&(s.yb(10),s.fc("ngIf",0==e.getFilter().length),s.yb(1),s.fc("ngForOf",e.getFilter()))},directives:[l.x,l.jb,l.j,l.i,l.y,l.hb,l.r,l.T,l.vb,l.H,f.k,f.j,l.I,l.G,l.D,l.e,l.z],styles:[""]}),e}()}}])}();