!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{bPE7:function(n,r,i){"use strict";i.r(r),i.d(r,"MyProfilePageModule",(function(){return I}));var o=i("ofXK"),s=i("3Pt+"),c=i("TEn/"),a=i("tyNb"),u=i("mrSG"),b=i("8xVP"),f=i("U9ZX"),l=i("fXoL"),h=i("y/q6"),d=i("G/jy"),m=i("EbHZ"),p=i("sjK5");function y(e,t){if(1&e){var n=l.Rb();l.Qb(0,"ion-button",8),l.Yb("click",(function(){return l.nc(n),l.ac().chatService.toggle()})),l.Mb(1,"ion-icon",9),l.Pb()}if(2&e){var r=l.ac();l.fc("color",r.chatService.isVisible?"success":"")}}function P(e,t){if(1&e&&(l.Qb(0,"ion-card"),l.Qb(1,"ion-card-content"),l.Qb(2,"div",10),l.Mb(3,"ion-img",11),l.Pb(),l.Pb(),l.Qb(4,"ion-card-header"),l.Qb(5,"ion-card-title"),l.tc(6),l.Pb(),l.Qb(7,"ion-card-subtitle"),l.tc(8),l.Pb(),l.Pb(),l.Pb()),2&e){var n=l.ac();l.yb(3),l.fc("src",n.getPhoto()),l.yb(3),l.wc(" ",n.user.last_name," ",n.user.first_name," "),l.yb(2),l.uc(n.user.email)}}function v(e,t){if(1&e&&(l.Qb(0,"ion-item",13),l.tc(1),l.Pb()),2&e){var n=t.$implicit;l.hc("routerLink","/team/profile/",n.id,""),l.yb(1),l.vc(" ",n.name," ")}}function g(e,t){if(1&e&&(l.Qb(0,"ion-card"),l.Qb(1,"ion-card-header"),l.Qb(2,"ion-card-title"),l.tc(3,"Mis Equipos"),l.Pb(),l.Pb(),l.Qb(4,"ion-card-content"),l.Qb(5,"ion-list"),l.sc(6,v,2,2,"ion-item",12),l.Pb(),l.Pb(),l.Pb()),2&e){var n=l.ac();l.yb(6),l.fc("ngForOf",n.user.teams)}}function Q(e,t){if(1&e&&(l.Qb(0,"ion-card"),l.Qb(1,"ion-card-header"),l.Qb(2,"ion-card-title"),l.tc(3,"Mi perfil de Jugador"),l.Pb(),l.Pb(),l.Qb(4,"ion-card-content"),l.Qb(5,"ion-list"),l.Qb(6,"ion-item",13),l.tc(7),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&e){var n=l.ac();l.yb(6),l.hc("routerLink","/player/profile/",n.user.player.id,""),l.yb(1),l.vc(" ",n.user.player.name," ")}}var k,w,j,M=[{path:"",component:(k=function(){function n(t,r,i,o,s){e(this,n),this.authUser=t,this.requestService=r,this.modalController=i,this.transferData=o,this.chatService=s,this.userModel=new b.a("User",r),o.setData("test",{id:"id_lucas_data"}),console.log("set data transfer in My Profile",{id:"id_lucas_data"})}var r,i,o;return r=n,(i=[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.user=this.authUser.user,console.log("authUser user",this.user),this.user&&this.userModel.api_functionModel(this.user.id,"pageMyProfile").subscribe((function(t){console.log("init myProfile",t),"success"==t.status&&(n.user=t.data),e&&e.target.complete()}),(function(t){console.error(t),e&&e.target.complete()}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"getPhoto",value:function(){return this.user&&this.user.photo?this.user.photo.urlComplete:"assets/images/profile.jpg"}},{key:"showEdit",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:f.a,componentProps:{id:this.user.id}});case 2:return(t=e.sent).onDidDismiss().then((function(e){return Object(u.b)(n,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e),!e.data||!e.data.user){t.next=8;break}return n=e.data.user,this.user.first_name=n.first_name,this.user.last_name=n.last_name,this.user.photo=n.photo,this.user.email=n.email,t.next=8,this.authUser.setUser(this.user);case 8:case"end":return t.stop()}}),t,this)})))})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}}])&&t(r.prototype,i),o&&t(r,o),n}(),k.\u0275fac=function(e){return new(e||k)(l.Lb(h.a),l.Lb(d.a),l.Lb(c.nb),l.Lb(m.a),l.Lb(p.a))},k.\u0275cmp=l.Fb({type:k,selectors:[["app-my-profile"]],decls:16,vars:5,consts:[["slot","start"],["defaultHref","/"],["slot","secondary"],[3,"click"],["name","create"],[3,"color","click",4,"ngIf"],["slot","fixed",3,"ionRefresh"],[4,"ngIf"],[3,"color","click"],["name","help-circle-outline"],[1,"ion-justify-content-center","ion-align-items-center"],["title","Foto de Perfil","scheme","dark",2,"width","auto",3,"src"],["routerDirection","forward",3,"routerLink",4,"ngFor","ngForOf"],["routerDirection","forward",3,"routerLink"]],template:function(e,t){1&e&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-title"),l.tc(3),l.Pb(),l.Qb(4,"ion-buttons",0),l.Mb(5,"ion-back-button",1),l.Pb(),l.Qb(6,"ion-buttons",2),l.Qb(7,"ion-button",3),l.Yb("click",(function(){return t.showEdit()})),l.Mb(8,"ion-icon",4),l.Pb(),l.sc(9,y,2,1,"ion-button",5),l.Pb(),l.Pb(),l.Pb(),l.Qb(10,"ion-content"),l.Qb(11,"ion-refresher",6),l.Yb("ionRefresh",(function(e){return t.init(e)})),l.Mb(12,"ion-refresher-content"),l.Pb(),l.sc(13,P,9,4,"ion-card",7),l.sc(14,g,7,1,"ion-card",7),l.sc(15,Q,8,2,"ion-card",7),l.Pb()),2&e&&(l.yb(3),l.vc(" ",t.user?t.user.last_name+" "+t.user.first_name:"My Perfil",""),l.yb(6),l.fc("ngIf",t.chatService.isInit),l.yb(4),l.fc("ngIf",t.user),l.yb(1),l.fc("ngIf",t.user&&t.user.teams&&t.user.teams.length>0),l.yb(1),l.fc("ngIf",t.user&&t.user.player))},directives:[c.x,c.jb,c.hb,c.j,c.f,c.g,c.i,c.y,o.k,c.r,c.O,c.P,c.k,c.l,c.z,c.m,c.o,c.n,c.H,o.j,c.D,c.tb,a.h],styles:[""]}),k)}],_=((w=function t(){e(this,t)}).\u0275mod=l.Jb({type:w}),w.\u0275inj=l.Ib({factory:function(e){return new(e||w)},imports:[[a.j.forChild(M)],a.j]}),w),x=i("6g0+"),I=((j=function t(){e(this,t)}).\u0275mod=l.Jb({type:j}),j.\u0275inj=l.Ib({factory:function(e){return new(e||j)},imports:[[o.b,s.a,c.kb,_,x.b]]}),j)}}])}();