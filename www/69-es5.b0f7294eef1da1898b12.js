!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{bPE7:function(r,n,i){"use strict";i.r(n),i.d(n,"MyProfilePageModule",(function(){return _}));var o=i("ofXK"),s=i("3Pt+"),a=i("TEn/"),c=i("tyNb"),u=i("mrSG"),b=i("8xVP"),f=i("U9ZX"),l=i("fXoL"),d=i("y/q6"),h=i("G/jy"),m=i("EbHZ");function p(e,t){if(1&e&&(l.Qb(0,"ion-card"),l.Qb(1,"ion-card-content"),l.Qb(2,"div",7),l.Mb(3,"ion-img",8),l.Pb(),l.Pb(),l.Qb(4,"ion-card-header"),l.Qb(5,"ion-card-title"),l.tc(6),l.Pb(),l.Qb(7,"ion-card-subtitle"),l.tc(8),l.Pb(),l.Pb(),l.Pb()),2&e){var r=l.ac();l.yb(3),l.fc("src",r.getPhoto()),l.yb(3),l.wc(" ",r.user.last_name," ",r.user.first_name," "),l.yb(2),l.uc(r.user.email)}}function y(e,t){if(1&e&&(l.Qb(0,"ion-item",10),l.tc(1),l.Pb()),2&e){var r=t.$implicit;l.hc("routerLink","/team/profile/",r.id,""),l.yb(1),l.vc(" ",r.name," ")}}function P(e,t){if(1&e&&(l.Qb(0,"ion-card"),l.Qb(1,"ion-card-header"),l.Qb(2,"ion-card-title"),l.tc(3,"Mis Equipos"),l.Pb(),l.Pb(),l.Qb(4,"ion-card-content"),l.Qb(5,"ion-list"),l.sc(6,y,2,2,"ion-item",9),l.Pb(),l.Pb(),l.Pb()),2&e){var r=l.ac();l.yb(6),l.fc("ngForOf",r.user.teams)}}function g(e,t){if(1&e&&(l.Qb(0,"ion-card"),l.Qb(1,"ion-card-header"),l.Qb(2,"ion-card-title"),l.tc(3,"Mi perfil de Jugador"),l.Pb(),l.Pb(),l.Qb(4,"ion-card-content"),l.Qb(5,"ion-list"),l.Qb(6,"ion-item",10),l.tc(7),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&e){var r=l.ac();l.yb(6),l.hc("routerLink","/player/profile/",r.user.player.id,""),l.yb(1),l.vc(" ",r.user.player.name," ")}}var v,Q,w,k=[{path:"",component:(v=function(){function r(t,n,i,o){e(this,r),this.authUser=t,this.requestService=n,this.modalController=i,this.transferData=o,this.userModel=new b.a("User",n),o.setData("test",{id:"id_lucas_data"}),console.log("set data transfer in My Profile",{id:"id_lucas_data"})}var n,i,o;return n=r,(i=[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.user=this.authUser.user,console.log("authUser user",this.user),this.user&&this.userModel.api_functionModel(this.user.id,"pageMyProfile").subscribe((function(t){console.log("init myProfile",t),"success"==t.status&&(r.user=t.data),e&&e.target.complete()}),(function(t){console.error(t),e&&e.target.complete()}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"getPhoto",value:function(){return this.user&&this.user.photo?this.user.photo.urlComplete:"assets/images/profile.jpg"}},{key:"showEdit",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:f.a,componentProps:{id:this.user.id}});case 2:return(t=e.sent).onDidDismiss().then((function(e){return Object(u.b)(r,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e),!e.data||!e.data.user){t.next=8;break}return r=e.data.user,this.user.first_name=r.first_name,this.user.last_name=r.last_name,this.user.photo=r.photo,this.user.email=r.email,t.next=8,this.authUser.setUser(this.user);case 8:case"end":return t.stop()}}),t,this)})))})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}}])&&t(n.prototype,i),o&&t(n,o),r}(),v.\u0275fac=function(e){return new(e||v)(l.Lb(d.a),l.Lb(h.a),l.Lb(a.lb),l.Lb(m.a))},v.\u0275cmp=l.Fb({type:v,selectors:[["app-my-profile"]],decls:15,vars:4,consts:[["slot","start"],["defaultHref","/"],["slot","secondary"],[3,"click"],["name","create"],["slot","fixed",3,"ionRefresh"],[4,"ngIf"],[1,"ion-justify-content-center","ion-align-items-center"],["title","Foto de Perfil","scheme","dark",2,"width","auto",3,"src"],["routerDirection","forward",3,"routerLink",4,"ngFor","ngForOf"],["routerDirection","forward",3,"routerLink"]],template:function(e,t){1&e&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-title"),l.tc(3),l.Pb(),l.Qb(4,"ion-buttons",0),l.Mb(5,"ion-back-button",1),l.Pb(),l.Qb(6,"ion-buttons",2),l.Qb(7,"ion-button",3),l.Yb("click",(function(){return t.showEdit()})),l.Mb(8,"ion-icon",4),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(9,"ion-content"),l.Qb(10,"ion-refresher",5),l.Yb("ionRefresh",(function(e){return t.init(e)})),l.Mb(11,"ion-refresher-content"),l.Pb(),l.sc(12,p,9,4,"ion-card",6),l.sc(13,P,7,1,"ion-card",6),l.sc(14,g,8,2,"ion-card",6),l.Pb()),2&e&&(l.yb(3),l.vc(" ",t.user?t.user.last_name+" "+t.user.first_name:"My Perfil",""),l.yb(9),l.fc("ngIf",t.user),l.yb(1),l.fc("ngIf",t.user&&t.user.teams&&t.user.teams.length>0),l.yb(1),l.fc("ngIf",t.user&&t.user.player))},directives:[a.x,a.hb,a.fb,a.j,a.f,a.g,a.i,a.y,a.r,a.M,a.N,o.k,a.k,a.l,a.z,a.m,a.o,a.n,a.H,o.j,a.D,a.qb,c.h],styles:[""]}),v)}],M=((Q=function t(){e(this,t)}).\u0275mod=l.Jb({type:Q}),Q.\u0275inj=l.Ib({factory:function(e){return new(e||Q)},imports:[[c.j.forChild(k)],c.j]}),Q),j=i("6g0+"),_=((w=function t(){e(this,t)}).\u0275mod=l.Jb({type:w}),w.\u0275inj=l.Ib({factory:function(e){return new(e||w)},imports:[[o.b,s.a,a.ib,M,j.b]]}),w)}}])}();