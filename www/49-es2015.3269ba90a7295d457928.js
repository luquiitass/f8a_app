(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{nHXg:function(t,e,i){"use strict";i.r(e),i.d(e,"TeamsPageModule",(function(){return Q}));var n=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),s=i("tyNb"),a=i("mrSG"),c=i("8xVP"),l=i("PNDZ"),b=i("fXoL"),u=i("G/jy"),d=i("vuFD"),f=i("y/q6"),m=i("rLe3");function h(t,e){1&t&&(b.Qb(0,"ion-list-header",10),b.Qb(1,"ion-label"),b.vc(2,"No se ha encontrado equipos"),b.Pb(),b.Pb())}function p(t,e){if(1&t&&(b.Qb(0,"ion-item",11),b.Qb(1,"ion-avatar",0),b.Mb(2,"ion-img",12),b.Pb(),b.Qb(3,"ion-label"),b.Qb(4,"h3",13),b.vc(5),b.Pb(),b.Pb(),b.Pb()),2&t){const t=e.$implicit;b.ic("routerLink","/team/profile/",t.id,""),b.yb(2),b.gc("src",t.shield?t.shield.urlCompleteThumb:"assets/images/esc.png"),b.yb(3),b.wc(t.name)}}function g(t,e){if(1&t){const t=b.Rb();b.Qb(0,"div"),b.Qb(1,"ion-refresher",5),b.Yb("ionRefresh",(function(e){return b.oc(t),b.ac().init(e)})),b.Mb(2,"ion-refresher-content"),b.Pb(),b.Qb(3,"ion-list"),b.uc(4,h,3,0,"ion-list-header",6),b.uc(5,p,6,3,"ion-item",7),b.Pb(),b.Qb(6,"ion-item",8),b.Yb("click",(function(){return b.oc(t),b.ac().newTeam()})),b.Qb(7,"ion-label"),b.vc(8,"Registrar mi equipo"),b.Pb(),b.Mb(9,"ion-icon",9),b.Pb(),b.Pb()}if(2&t){const t=b.ac();b.yb(4),b.gc("ngIf",0==t.teams.length),b.yb(1),b.gc("ngForOf",t.teams)}}function P(t,e){1&t&&(b.Qb(0,"ion-item"),b.Qb(1,"ion-avatar",0),b.Mb(2,"ion-skeleton-text",15),b.Pb(),b.Qb(3,"ion-label"),b.Qb(4,"h3"),b.Mb(5,"ion-skeleton-text",16),b.Pb(),b.Pb(),b.Pb())}function y(t,e){if(1&t&&(b.Qb(0,"div"),b.uc(1,P,6,0,"ion-item",14),b.Pb()),2&t){const t=b.ac();b.yb(1),b.gc("ngForOf",t.listSkeleton)}}const v=[{path:"",component:(()=>{class t{constructor(t,e,i,n,o){this.request=t,this.modalController=e,this.dialog=i,this.auth=n,this.utilArray=o,this.oldTeams=[],this.teams=[],this.listSkeleton=new Array(10),this.firstLoad=!0,this.teamService=new c.a("Team",t)}ngOnInit(){this.init()}init(t=null){this.teamService.api_function("pageHomeTeams").subscribe(e=>{this.teams=e.data,this.oldTeams=e.data,t&&t.target.complete(),this.firstLoad=!1},e=>{t&&t.target.complete(),this.firstLoad=!1})}close(){this.auth.logout()}newTeam(){return Object(a.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:l.a});return t.onDidDismiss().then(t=>{console.log("dimiss team",t),t.data&&t.data.team&&this.utilArray.listAddLast(this.teams,t.data.team)}),yield t.present()}))}filterTeams(t){let e=t.target.value;e.length<=0?this.teams=this.oldTeams:(this.teams=[...this.oldTeams],this.teams=this.teams.filter(t=>t.name.toUpperCase().includes(e.toUpperCase())))}cancelFilter(t){this.teams=this.oldTeams}}return t.\u0275fac=function(e){return new(e||t)(b.Lb(u.a),b.Lb(r.nb),b.Lb(d.a),b.Lb(f.a),b.Lb(m.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-teams"]],decls:11,vars:2,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],["placeholder","Filtrar equipos","debounce","500",3,"keyup","ionClear"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],["routerDirection","forward","class","team-list",3,"routerLink",4,"ngFor","ngForOf"],[3,"click"],["name","chevron-forward-outline"],["color","tertiary"],["routerDirection","forward",1,"team-list",3,"routerLink"],[3,"src"],[1,"fs-team"],[4,"ngFor","ngForOf"],["animated",""],["animated","",2,"width","80%","height","20px"]],template:function(t,e){1&t&&(b.Qb(0,"ion-header"),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-title"),b.vc(3,"Equipos"),b.Pb(),b.Pb(),b.Qb(4,"ion-buttons",0),b.Qb(5,"ion-button",1),b.Yb("click",(function(){return e.close()})),b.Mb(6,"ion-icon",2),b.Pb(),b.Pb(),b.Pb(),b.Qb(7,"ion-content"),b.Qb(8,"ion-searchbar",3),b.Yb("keyup",(function(t){return e.filterTeams(t)}))("ionClear",(function(t){return e.cancelFilter(t)})),b.Pb(),b.uc(9,g,10,2,"div",4),b.uc(10,y,2,1,"div",4),b.Pb()),2&t&&(b.yb(9),b.gc("ngIf",!e.firstLoad),b.yb(1),b.gc("ngIf",e.firstLoad))},directives:[r.x,r.jb,r.hb,r.j,r.i,r.y,r.r,r.T,r.vb,n.l,r.O,r.P,r.H,n.k,r.D,r.G,r.I,r.tb,s.h,r.e,r.z,r.Y],styles:[""]}),t})()}];let L=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(e){return new(e||t)},imports:[[s.j.forChild(v)],s.j]}),t})(),Q=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(e){return new(e||t)},imports:[[n.b,o.a,r.kb,L]]}),t})()},rLe3:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("fXoL");let o=(()=>{class t{constructor(){}listAddLast(t,e){t.push(e)}listAddFirst(t,e){t.unshift(e)}listUpdate(t,e,i){let n=this.findIndexList(t,e);n>=0&&(t[n]=i)}listDelete(t,e){let i=this.findIndexList(t,e);i>=0&&t.splice(i,1)}findList(t,e){return t.find(t=>t.id===e)}findIndexList(t,e){return t.findIndex(t=>t.id===e)}updateAttribustesObject(t,e,i=[]){console.log("update attributes");for(let n of i)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);