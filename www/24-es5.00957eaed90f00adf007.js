!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{ZAPo:function(r,n,o){"use strict";o.r(n),o.d(n,"HomePageModule",(function(){return Q}));var i,b,c,u=o("ofXK"),a=o("3Pt+"),s=o("TEn/"),l=o("tyNb"),f=o("mrSG"),m=o("Dwri"),p=o("fXoL"),P=o("y/q6"),d=[{path:"",component:(i=function(){function r(t,n){e(this,r),this.userAuthService=t,this.modalController=n}var n,o,i;return n=r,(o=[{key:"ngOnInit",value:function(){}},{key:"logout",value:function(){this.userAuthService.logout()}},{key:"search",value:function(){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:m.a,componentProps:{cancellable:!1,model:"User",function:"searchUser",multiple:!1}});case 2:return(t=e.sent).onDidDismiss().then((function(e){})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}}])&&t(n.prototype,o),i&&t(n,i),r}(),i.\u0275fac=function(e){return new(e||i)(p.Lb(P.a),p.Lb(s.hb))},i.\u0275cmp=p.Fb({type:i,selectors:[["app-home"]],decls:36,vars:0,consts:[["routerLink","/","routerDirection","forward"],["routerLink","/positions","routerDirection","forward"],["routerLink","/typesEvent","routerDirection","forward"],["routerLink","/teams","routerDirection","forward"],["routerLink","/games","routerDirection","forward"],["routerLink","/players","routerDirection","forward"],["routerLink","/users","routerDirection","forward"],["routerLink","/errors","routerDirection","forward"],[3,"click"]],template:function(e,t){1&e&&(p.Qb(0,"ion-header"),p.Qb(1,"ion-toolbar"),p.Qb(2,"ion-title"),p.tc(3,"Admin home"),p.Pb(),p.Pb(),p.Pb(),p.Qb(4,"ion-content"),p.Qb(5,"ion-list"),p.Qb(6,"ion-item",0),p.Qb(7,"ion-label"),p.tc(8,"Home user"),p.Pb(),p.Pb(),p.Qb(9,"ion-item",1),p.Qb(10,"ion-label"),p.tc(11,"Posiciones"),p.Pb(),p.Pb(),p.Qb(12,"ion-item",2),p.Qb(13,"ion-label"),p.tc(14,"Tipo de Evento"),p.Pb(),p.Pb(),p.Qb(15,"ion-item",3),p.Qb(16,"ion-label"),p.tc(17,"Equipos"),p.Pb(),p.Pb(),p.Qb(18,"ion-item",4),p.Qb(19,"ion-label"),p.tc(20,"Partidos"),p.Pb(),p.Pb(),p.Qb(21,"ion-item",5),p.Qb(22,"ion-label"),p.tc(23,"Jugadores"),p.Pb(),p.Pb(),p.Qb(24,"ion-item",6),p.Qb(25,"ion-label"),p.tc(26,"Users"),p.Pb(),p.Pb(),p.Qb(27,"ion-item",7),p.Qb(28,"ion-label"),p.tc(29,"Errores"),p.Pb(),p.Pb(),p.Qb(30,"ion-item",8),p.Yb("click",(function(){return t.search()})),p.Qb(31,"ion-label"),p.tc(32,"Search"),p.Pb(),p.Pb(),p.Qb(33,"ion-item",8),p.Yb("click",(function(){return t.logout()})),p.Qb(34,"ion-label"),p.tc(35,"Logout"),p.Pb(),p.Pb(),p.Pb(),p.Pb())},directives:[s.x,s.db,s.bb,s.r,s.E,s.B,s.mb,l.h,s.D],styles:[""]}),i)}],h=((c=function t(){e(this,t)}).\u0275mod=p.Jb({type:c}),c.\u0275inj=p.Ib({factory:function(e){return new(e||c)},imports:[[l.j.forChild(d)],l.j]}),c),Q=((b=function t(){e(this,t)}).\u0275mod=p.Jb({type:b}),b.\u0275inj=p.Ib({factory:function(e){return new(e||b)},imports:[[u.b,a.a,s.eb,h]]}),b)}}])}();