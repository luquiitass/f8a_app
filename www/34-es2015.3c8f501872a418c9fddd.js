(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{nHXg:function(t,e,i){"use strict";i.r(e),i.d(e,"TeamsPageModule",(function(){return k}));var n=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),s=i("tyNb"),a=i("mrSG"),c=i("8xVP"),b=i("PNDZ"),l=i("fXoL"),u=i("G/jy"),d=i("vuFD"),f=i("y/q6"),m=i("rLe3");function h(t,e){1&t&&(l.Qb(0,"ion-list-header",10),l.Qb(1,"ion-label"),l.tc(2,"No se ha encontrado equipos"),l.Pb(),l.Pb())}function p(t,e){if(1&t&&(l.Qb(0,"ion-item",11),l.Qb(1,"ion-avatar",0),l.Mb(2,"ion-img",12),l.Pb(),l.Qb(3,"ion-label"),l.Qb(4,"h3",13),l.tc(5),l.Pb(),l.Pb(),l.Pb()),2&t){const t=e.$implicit;l.hc("routerLink","/team/profile/",t.id,""),l.yb(2),l.fc("src",t.shield?t.shield.urlCompleteThumb:"assets/images/esc.png"),l.yb(3),l.uc(t.name)}}function g(t,e){if(1&t){const t=l.Rb();l.Qb(0,"div"),l.Qb(1,"ion-refresher",5),l.Yb("ionRefresh",(function(e){return l.nc(t),l.ac().init(e)})),l.Mb(2,"ion-refresher-content"),l.Pb(),l.Qb(3,"ion-list"),l.sc(4,h,3,0,"ion-list-header",6),l.sc(5,p,6,3,"ion-item",7),l.Pb(),l.Qb(6,"ion-item",8),l.Yb("click",(function(){return l.nc(t),l.ac().newTeam()})),l.Qb(7,"ion-label"),l.tc(8,"Registrar mi equipo"),l.Pb(),l.Mb(9,"ion-icon",9),l.Pb(),l.Pb()}if(2&t){const t=l.ac();l.yb(4),l.fc("ngIf",0==t.teams.length),l.yb(1),l.fc("ngForOf",t.teams)}}function P(t,e){1&t&&(l.Qb(0,"ion-item"),l.Qb(1,"ion-avatar",0),l.Mb(2,"ion-skeleton-text",15),l.Pb(),l.Qb(3,"ion-label"),l.Qb(4,"h3"),l.Mb(5,"ion-skeleton-text",16),l.Pb(),l.Pb(),l.Pb())}function y(t,e){if(1&t&&(l.Qb(0,"div"),l.sc(1,P,6,0,"ion-item",14),l.Pb()),2&t){const t=l.ac();l.yb(1),l.fc("ngForOf",t.listSkeleton)}}const L=[{path:"",component:(()=>{class t{constructor(t,e,i,n,o){this.request=t,this.modalController=e,this.dialog=i,this.auth=n,this.utilArray=o,this.oldTeams=[],this.teams=[],this.listSkeleton=new Array(10),this.firstLoad=!0,this.teamService=new c.a("Team",t)}ngOnInit(){this.init()}init(t=null){this.teamService.api_function("pageHomeTeams").subscribe(e=>{this.teams=e.data,this.oldTeams=e.data,t&&t.target.complete(),this.firstLoad=!1},e=>{t&&t.target.complete(),this.firstLoad=!1})}close(){this.auth.logout()}newTeam(){return Object(a.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:b.a});return t.onDidDismiss().then(t=>{console.log("dimiss team",t),t.data&&t.data.team&&this.utilArray.listAddLast(this.teams,t.data.team)}),yield t.present()}))}filterTeams(t){let e=t.target.value;this.teams=e.length<=0?this.oldTeams:this.teams.filter(t=>t.name.toUpperCase().includes(e.toUpperCase()))}cancelFilter(t){this.teams=this.oldTeams}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(u.a),l.Lb(r.nb),l.Lb(d.a),l.Lb(f.a),l.Lb(m.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-teams"]],decls:11,vars:2,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],["placeholder","Filtrar equipos","debounce","500",3,"keyup","ionClear"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],["routerDirection","forward","class","team-list",3,"routerLink",4,"ngFor","ngForOf"],[3,"click"],["name","chevron-forward-outline"],["color","tertiary"],["routerDirection","forward",1,"team-list",3,"routerLink"],[3,"src"],[1,"fs-team"],[4,"ngFor","ngForOf"],["animated",""],["animated","",2,"width","80%","height","20px"]],template:function(t,e){1&t&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-title"),l.tc(3,"Equipos"),l.Pb(),l.Pb(),l.Qb(4,"ion-buttons",0),l.Qb(5,"ion-button",1),l.Yb("click",(function(){return e.close()})),l.Mb(6,"ion-icon",2),l.Pb(),l.Pb(),l.Pb(),l.Qb(7,"ion-content"),l.Qb(8,"ion-searchbar",3),l.Yb("keyup",(function(t){return e.filterTeams(t)}))("ionClear",(function(t){return e.cancelFilter(t)})),l.Pb(),l.sc(9,g,10,2,"div",4),l.sc(10,y,2,1,"div",4),l.Pb()),2&t&&(l.yb(9),l.fc("ngIf",!e.firstLoad),l.yb(1),l.fc("ngIf",e.firstLoad))},directives:[r.x,r.jb,r.hb,r.j,r.i,r.y,r.r,r.T,r.vb,n.k,r.O,r.P,r.H,n.j,r.D,r.G,r.I,r.tb,s.h,r.e,r.z,r.Y],styles:[""]}),t})()}];let Q=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[s.j.forChild(L)],s.j]}),t})(),k=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[n.b,o.a,r.kb,Q]]}),t})()},rLe3:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("fXoL");let o=(()=>{class t{constructor(){}listAddLast(t,e){t.push(e)}listAddFirst(t,e){t.unshift(e)}listUpdate(t,e,i){let n=this.findIndexList(t,e);n>=0&&(t[n]=i)}listDelete(t,e){let i=this.findIndexList(t,e);i>=0&&t.splice(i,1)}findList(t,e){return t.find(t=>t.id===e)}findIndexList(t,e){return t.findIndex(t=>t.id===e)}updateAttribustesObject(t,e,i=[]){console.log("update attributes");for(let n of i)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);