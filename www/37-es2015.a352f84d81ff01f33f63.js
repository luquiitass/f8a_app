(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{ZAPo:function(o,e,r){"use strict";r.r(e),r.d(e,"HomePageModule",(function(){return d}));var t=r("ofXK"),i=r("3Pt+"),n=r("TEn/"),b=r("tyNb"),c=r("mrSG"),s=r("Dwri"),l=r("fXoL"),a=r("y/q6");const u=[{path:"",component:(()=>{class o{constructor(o,e){this.userAuthService=o,this.modalController=e}ngOnInit(){}logout(){this.userAuthService.logout()}search(){return Object(c.b)(this,void 0,void 0,(function*(){const o=yield this.modalController.create({component:s.a,componentProps:{cancellable:!1,model:"User",function:"searchUser",multiple:!1}});return o.onDidDismiss().then(o=>{}),yield o.present()}))}}return o.\u0275fac=function(e){return new(e||o)(l.Lb(a.a),l.Lb(n.lb))},o.\u0275cmp=l.Fb({type:o,selectors:[["app-home"]],decls:39,vars:0,consts:[["routerLink","/","routerDirection","forward"],["routerLink","/positions","routerDirection","forward"],["routerLink","/typesEvent","routerDirection","forward"],["routerLink","/teams","routerDirection","forward"],["routerLink","/games","routerDirection","forward"],["routerLink","/players","routerDirection","forward"],["routerLink","/users","routerDirection","forward"],["routerLink","/errors","routerDirection","forward"],[3,"click"],["routerLink","/send-admins","routerDirection","forward"]],template:function(o,e){1&o&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-title"),l.tc(3,"Admin home"),l.Pb(),l.Pb(),l.Pb(),l.Qb(4,"ion-content"),l.Qb(5,"ion-list"),l.Qb(6,"ion-item",0),l.Qb(7,"ion-label"),l.tc(8,"Home user"),l.Pb(),l.Pb(),l.Qb(9,"ion-item",1),l.Qb(10,"ion-label"),l.tc(11,"Posiciones"),l.Pb(),l.Pb(),l.Qb(12,"ion-item",2),l.Qb(13,"ion-label"),l.tc(14,"Tipo de Evento"),l.Pb(),l.Pb(),l.Qb(15,"ion-item",3),l.Qb(16,"ion-label"),l.tc(17,"Equipos"),l.Pb(),l.Pb(),l.Qb(18,"ion-item",4),l.Qb(19,"ion-label"),l.tc(20,"Partidos"),l.Pb(),l.Pb(),l.Qb(21,"ion-item",5),l.Qb(22,"ion-label"),l.tc(23,"Jugadores"),l.Pb(),l.Pb(),l.Qb(24,"ion-item",6),l.Qb(25,"ion-label"),l.tc(26,"Users"),l.Pb(),l.Pb(),l.Qb(27,"ion-item",7),l.Qb(28,"ion-label"),l.tc(29,"Errores"),l.Pb(),l.Pb(),l.Qb(30,"ion-item",8),l.Yb("click",(function(){return e.search()})),l.Qb(31,"ion-label"),l.tc(32,"Search"),l.Pb(),l.Pb(),l.Qb(33,"ion-item",9),l.Qb(34,"ion-label"),l.tc(35,"Enviar emails"),l.Pb(),l.Pb(),l.Qb(36,"ion-item",8),l.Yb("click",(function(){return e.logout()})),l.Qb(37,"ion-label"),l.tc(38,"Logout"),l.Pb(),l.Pb(),l.Pb(),l.Pb())},directives:[n.x,n.hb,n.fb,n.r,n.H,n.D,n.qb,b.h,n.G],styles:[""]}),o})()}];let m=(()=>{class o{}return o.\u0275mod=l.Jb({type:o}),o.\u0275inj=l.Ib({factory:function(e){return new(e||o)},imports:[[b.j.forChild(u)],b.j]}),o})(),d=(()=>{class o{}return o.\u0275mod=l.Jb({type:o}),o.\u0275inj=l.Ib({factory:function(e){return new(e||o)},imports:[[t.b,i.a,n.ib,m]]}),o})()}}]);