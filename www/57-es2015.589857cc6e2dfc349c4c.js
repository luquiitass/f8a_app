(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{ZAPo:function(o,r,e){"use strict";e.r(r),e.d(r,"HomePageModule",(function(){return P}));var i=e("ofXK"),t=e("3Pt+"),n=e("TEn/"),b=e("tyNb"),c=e("mrSG"),u=e("Dwri"),s=e("fXoL"),a=e("y/q6");const l=[{path:"",component:(()=>{class o{constructor(o,r){this.userAuthService=o,this.modalController=r}ngOnInit(){}logout(){this.userAuthService.logout()}search(){return Object(c.b)(this,void 0,void 0,(function*(){const o=yield this.modalController.create({component:u.a,componentProps:{cancellable:!1,model:"User",function:"searchUser",multiple:!1}});return o.onDidDismiss().then(o=>{}),yield o.present()}))}}return o.\u0275fac=function(r){return new(r||o)(s.Lb(a.a),s.Lb(n.nb))},o.\u0275cmp=s.Fb({type:o,selectors:[["app-home"]],decls:42,vars:0,consts:[["routerLink","/","routerDirection","forward"],["routerLink","/positions","routerDirection","forward"],["routerLink","/typesEvent","routerDirection","forward"],["routerLink","/teams","routerDirection","forward"],["routerLink","/games","routerDirection","forward"],["routerLink","/players","routerDirection","forward"],["routerLink","/users","routerDirection","forward"],["routerLink","/errors","routerDirection","forward"],[3,"click"],["routerLink","/send-admins","routerDirection","forward"],["routerLink","/messaging","routerDirection","forward"]],template:function(o,r){1&o&&(s.Qb(0,"ion-header"),s.Qb(1,"ion-toolbar"),s.Qb(2,"ion-title"),s.uc(3,"Admin home"),s.Pb(),s.Pb(),s.Pb(),s.Qb(4,"ion-content"),s.Qb(5,"ion-list"),s.Qb(6,"ion-item",0),s.Qb(7,"ion-label"),s.uc(8,"Home user"),s.Pb(),s.Pb(),s.Qb(9,"ion-item",1),s.Qb(10,"ion-label"),s.uc(11,"Posiciones"),s.Pb(),s.Pb(),s.Qb(12,"ion-item",2),s.Qb(13,"ion-label"),s.uc(14,"Tipo de Evento"),s.Pb(),s.Pb(),s.Qb(15,"ion-item",3),s.Qb(16,"ion-label"),s.uc(17,"Equipos"),s.Pb(),s.Pb(),s.Qb(18,"ion-item",4),s.Qb(19,"ion-label"),s.uc(20,"Partidos"),s.Pb(),s.Pb(),s.Qb(21,"ion-item",5),s.Qb(22,"ion-label"),s.uc(23,"Jugadores"),s.Pb(),s.Pb(),s.Qb(24,"ion-item",6),s.Qb(25,"ion-label"),s.uc(26,"Users"),s.Pb(),s.Pb(),s.Qb(27,"ion-item",7),s.Qb(28,"ion-label"),s.uc(29,"Errores"),s.Pb(),s.Pb(),s.Qb(30,"ion-item",8),s.Yb("click",(function(){return r.search()})),s.Qb(31,"ion-label"),s.uc(32,"Search"),s.Pb(),s.Pb(),s.Qb(33,"ion-item",9),s.Qb(34,"ion-label"),s.uc(35,"Enviar emails"),s.Pb(),s.Pb(),s.Qb(36,"ion-item",10),s.Qb(37,"ion-label"),s.uc(38,"Notificar usuarios"),s.Pb(),s.Pb(),s.Qb(39,"ion-item",8),s.Yb("click",(function(){return r.logout()})),s.Qb(40,"ion-label"),s.uc(41,"Logout"),s.Pb(),s.Pb(),s.Pb(),s.Pb())},directives:[n.x,n.jb,n.hb,n.r,n.H,n.D,n.tb,b.h,n.G],styles:[""]}),o})()}];let m=(()=>{class o{}return o.\u0275mod=s.Jb({type:o}),o.\u0275inj=s.Ib({factory:function(r){return new(r||o)},imports:[[b.j.forChild(l)],b.j]}),o})(),P=(()=>{class o{}return o.\u0275mod=s.Jb({type:o}),o.\u0275inj=s.Ib({factory:function(r){return new(r||o)},imports:[[i.b,t.a,n.kb,m]]}),o})()}}]);