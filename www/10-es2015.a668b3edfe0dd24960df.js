(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{BVm6:function(t,e,i){"use strict";i.r(e),i.d(e,"TeamGamesPageModule",(function(){return v}));var n=i("ofXK"),s=i("3Pt+"),a=i("TEn/"),o=i("tyNb"),r=i("mrSG"),c=i("8xVP"),b=i("fXoL"),l=i("G/jy"),m=i("vuFD"),f=i("rLe3"),u=i("xj5e");function d(t,e){1&t&&(b.Qb(0,"ion-list-header",6),b.Qb(1,"ion-label"),b.tc(2,"Sin registros"),b.Pb(),b.Pb())}function h(t,e){if(1&t){const t=b.Rb();b.Qb(0,"div"),b.Qb(1,"app-old-next-game",7),b.Yb("onDeleteGame",(function(e){return b.nc(t),b.ac(2).deleteGame(e)})),b.Pb(),b.Pb()}if(2&t){const t=e.$implicit;b.yb(1),b.fc("game",t)("withTitle",!1)}}function g(t,e){if(1&t&&(b.Qb(0,"ion-list"),b.sc(1,d,3,0,"ion-list-header",4),b.sc(2,h,2,2,"div",5),b.Pb()),2&t){const t=b.ac();b.yb(1),b.fc("ngIf",0==t.team.games.length),b.yb(1),b.fc("ngForOf",t.team.games)}}const p=[{path:"",component:(()=>{class t{constructor(t,e,i,n){this.route=t,this.requestService=e,this.dialogService=i,this.utilArray=n,this.id=t.snapshot.paramMap.get("id"),this.status=t.snapshot.paramMap.get("status"),this.modelTeam=new c.a("Team",e)}ngOnInit(){this.init()}init(t=null){return Object(r.b)(this,void 0,void 0,(function*(){yield this.dialogService.loadingProgres();let e={};this.status&&(e.status=this.status),this.modelTeam.api_functionModel(this.id,"pageGames",e).subscribe(t=>{"success"==t.status&&(this.team=t.data)},e=>{this.dialogService.dimissLoaging(),t&&t.target.complete()},()=>{this.dialogService.dimissLoaging(),t&&t.target.complete()})}))}deleteGame(t){this.utilArray.listDelete(this.team.games,t.id)}}return t.\u0275fac=function(e){return new(e||t)(b.Lb(o.a),b.Lb(l.a),b.Lb(m.a),b.Lb(f.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-team-games"]],decls:10,vars:3,consts:[["slot","start"],[3,"defaultHref"],["slot","fixed",3,"ionRefresh"],[4,"ngIf"],["color","info",4,"ngIf"],[4,"ngFor","ngForOf"],["color","info"],[3,"game","withTitle","onDeleteGame"]],template:function(t,e){1&t&&(b.Qb(0,"ion-header"),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-title"),b.tc(3),b.Pb(),b.Qb(4,"ion-buttons",0),b.Mb(5,"ion-back-button",1),b.Pb(),b.Pb(),b.Pb(),b.Qb(6,"ion-content"),b.Qb(7,"ion-refresher",2),b.Yb("ionRefresh",(function(t){return e.init(t)})),b.Mb(8,"ion-refresher-content"),b.Pb(),b.sc(9,g,3,2,"ion-list",3),b.Pb()),2&t&&(b.yb(3),b.vc("Partidos de ",e.team?e.team.name:"",""),b.yb(2),b.hc("defaultHref","/team/profile/",e.team?e.team.id:"",""),b.yb(4),b.fc("ngIf",e.team))},directives:[a.x,a.jb,a.hb,a.j,a.f,a.g,a.r,a.O,a.P,n.k,a.H,n.j,a.I,a.G,u.a],styles:[""]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(e){return new(e||t)},imports:[[o.j.forChild(p)],o.j]}),t})();var P=i("j1ZV");let v=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(e){return new(e||t)},imports:[[n.b,s.a,a.kb,y,P.a]]}),t})()}}]);