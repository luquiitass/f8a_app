(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{nHXg:function(t,n,e){"use strict";e.r(n),e.d(n,"TeamsPageModule",(function(){return L}));var i=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),a=e("tyNb"),s=e("mrSG"),c=e("8xVP"),u=e("PNDZ"),b=e("fXoL"),l=e("G/jy"),f=e("vuFD"),d=e("y/q6"),p=e("rLe3");function m(t,n){1&t&&(b.Qb(0,"ion-list-header",10),b.Qb(1,"ion-label"),b.vc(2,"No se ha encontrado equipos"),b.Pb(),b.Pb())}function h(t,n){if(1&t&&(b.Qb(0,"ion-item",11),b.Qb(1,"ion-avatar",0),b.Mb(2,"ion-img",12),b.Pb(),b.Qb(3,"ion-label"),b.Qb(4,"h3",13),b.vc(5),b.Pb(),b.Pb(),b.Pb()),2&t){var e=n.$implicit;b.ic("routerLink","/team/profile/",e.id,""),b.yb(2),b.gc("src",e.shield?e.shield.urlCompleteThumb:"assets/images/esc.png"),b.yb(3),b.wc(e.name)}}function y(t,n){if(1&t){var e=b.Rb();b.Qb(0,"div"),b.Qb(1,"ion-refresher",5),b.Yb("ionRefresh",(function(t){return b.oc(e),b.ac().init(t)})),b.Mb(2,"ion-refresher-content"),b.Pb(),b.Qb(3,"ion-list"),b.uc(4,m,3,0,"ion-list-header",6),b.uc(5,h,6,3,"ion-item",7),b.Pb(),b.Qb(6,"ion-item",8),b.Yb("click",(function(){return b.oc(e),b.ac().newTeam()})),b.Qb(7,"ion-label"),b.vc(8,"Registrar mi equipo"),b.Pb(),b.Mb(9,"ion-icon",9),b.Pb(),b.Pb()}if(2&t){var i=b.ac();b.yb(4),b.gc("ngIf",0==i.teams.length),b.yb(1),b.gc("ngForOf",i.teams)}}function v(t,n){1&t&&(b.Qb(0,"ion-item"),b.Qb(1,"ion-avatar",0),b.Mb(2,"ion-skeleton-text",15),b.Pb(),b.Qb(3,"ion-label"),b.Qb(4,"h3"),b.Mb(5,"ion-skeleton-text",16),b.Pb(),b.Pb(),b.Pb())}function g(t,n){if(1&t&&(b.Qb(0,"div"),b.uc(1,v,6,0,"ion-item",14),b.Pb()),2&t){var e=b.ac();b.yb(1),b.gc("ngForOf",e.listSkeleton)}}var P=[{path:"",component:function(){function t(t,n,e,i,o){this.request=t,this.modalController=n,this.dialog=e,this.auth=i,this.utilArray=o,this.oldTeams=[],this.teams=[],this.listSkeleton=new Array(10),this.firstLoad=!0,this.teamService=new c.a("Team",t)}return t.prototype.ngOnInit=function(){this.init()},t.prototype.init=function(t){var n=this;void 0===t&&(t=null),this.teamService.api_function("pageHomeTeams").subscribe((function(e){n.teams=e.data,n.oldTeams=e.data,t&&t.target.complete(),n.firstLoad=!1}),(function(e){t&&t.target.complete(),n.firstLoad=!1}))},t.prototype.close=function(){this.auth.logout()},t.prototype.newTeam=function(){return Object(s.b)(this,void 0,void 0,(function(){var t,n=this;return Object(s.d)(this,(function(e){switch(e.label){case 0:return[4,this.modalController.create({component:u.a})];case 1:return(t=e.sent()).onDidDismiss().then((function(t){console.log("dimiss team",t),t.data&&t.data.team&&n.utilArray.listAddLast(n.teams,t.data.team)})),[4,t.present()];case 2:return[2,e.sent()]}}))}))},t.prototype.filterTeams=function(t){var n=t.target.value;n.length<=0?this.teams=this.oldTeams:(this.teams=Object(s.f)(this.oldTeams),this.teams=this.teams.filter((function(t){return t.name.toUpperCase().includes(n.toUpperCase())})))},t.prototype.cancelFilter=function(t){this.teams=this.oldTeams},t.\u0275fac=function(n){return new(n||t)(b.Lb(l.a),b.Lb(r.nb),b.Lb(f.a),b.Lb(d.a),b.Lb(p.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-teams"]],decls:11,vars:2,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],["placeholder","Filtrar equipos","debounce","500",3,"keyup","ionClear"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],["routerDirection","forward","class","team-list",3,"routerLink",4,"ngFor","ngForOf"],[3,"click"],["name","chevron-forward-outline"],["color","tertiary"],["routerDirection","forward",1,"team-list",3,"routerLink"],[3,"src"],[1,"fs-team"],[4,"ngFor","ngForOf"],["animated",""],["animated","",2,"width","80%","height","20px"]],template:function(t,n){1&t&&(b.Qb(0,"ion-header"),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-title"),b.vc(3,"Equipos"),b.Pb(),b.Pb(),b.Qb(4,"ion-buttons",0),b.Qb(5,"ion-button",1),b.Yb("click",(function(){return n.close()})),b.Mb(6,"ion-icon",2),b.Pb(),b.Pb(),b.Pb(),b.Qb(7,"ion-content"),b.Qb(8,"ion-searchbar",3),b.Yb("keyup",(function(t){return n.filterTeams(t)}))("ionClear",(function(t){return n.cancelFilter(t)})),b.Pb(),b.uc(9,y,10,2,"div",4),b.uc(10,g,2,1,"div",4),b.Pb()),2&t&&(b.yb(9),b.gc("ngIf",!n.firstLoad),b.yb(1),b.gc("ngIf",n.firstLoad))},directives:[r.x,r.jb,r.hb,r.j,r.i,r.y,r.r,r.T,r.vb,i.l,r.O,r.P,r.H,i.k,r.D,r.G,r.I,r.tb,a.h,r.e,r.z,r.Y],styles:[""]}),t}()}],w=function(){function t(){}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(n){return new(n||t)},imports:[[a.j.forChild(P)],a.j]}),t}(),L=function(){function t(){}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(n){return new(n||t)},imports:[[i.b,o.a,r.kb,w]]}),t}()},rLe3:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("mrSG"),o=e("fXoL"),r=function(){function t(){}return t.prototype.listAddLast=function(t,n){t.push(n)},t.prototype.listAddFirst=function(t,n){t.unshift(n)},t.prototype.listUpdate=function(t,n,e){var i=this.findIndexList(t,n);i>=0&&(t[i]=e)},t.prototype.listDelete=function(t,n){var e=this.findIndexList(t,n);e>=0&&t.splice(e,1)},t.prototype.findList=function(t,n){return t.find((function(t){return t.id===n}))},t.prototype.findIndexList=function(t,n){return t.findIndex((function(t){return t.id===n}))},t.prototype.updateAttribustesObject=function(t,n,e){var o,r;void 0===e&&(e=[]),console.log("update attributes");try{for(var a=Object(i.h)(e),s=a.next();!s.done;s=a.next()){var c=s.value;n.hasOwnProperty(c)&&(t[c]=n[c])}}catch(u){o={error:u}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return t},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac=function(n){return new(n||t)},providedIn:"root"}),t}()}}]);