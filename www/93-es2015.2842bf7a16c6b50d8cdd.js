(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{bPE7:function(t,e,i){"use strict";i.r(e),i.d(e,"MyProfilePageModule",(function(){return w}));var o=i("ofXK"),n=i("3Pt+"),r=i("TEn/"),s=i("tyNb"),c=i("mrSG"),a=i("8xVP"),b=i("U9ZX"),u=i("fXoL"),l=i("y/q6"),d=i("G/jy"),f=i("EbHZ"),h=i("sjK5");function m(t,e){if(1&t){const t=u.Rb();u.Qb(0,"ion-button",8),u.Yb("click",(function(){return u.oc(t),u.ac().chatService.toggle()})),u.Mb(1,"ion-icon",9),u.Pb()}if(2&t){const t=u.ac();u.gc("color",t.chatService.isVisible?"success":"")}}function p(t,e){if(1&t&&(u.Qb(0,"ion-card"),u.Qb(1,"ion-card-content"),u.Qb(2,"div",10),u.Mb(3,"ion-img",11),u.Pb(),u.Pb(),u.Qb(4,"ion-card-header"),u.Qb(5,"ion-card-title"),u.vc(6),u.Pb(),u.Qb(7,"ion-card-subtitle"),u.vc(8),u.Pb(),u.Pb(),u.Pb()),2&t){const t=u.ac();u.yb(3),u.gc("src",t.getPhoto()),u.yb(3),u.yc(" ",t.user.last_name," ",t.user.first_name," "),u.yb(2),u.wc(t.user.email)}}function P(t,e){if(1&t&&(u.Qb(0,"ion-item",13),u.vc(1),u.Pb()),2&t){const t=e.$implicit;u.ic("routerLink","/team/profile/",t.id,""),u.yb(1),u.xc(" ",t.name," ")}}function y(t,e){if(1&t&&(u.Qb(0,"ion-card"),u.Qb(1,"ion-card-header"),u.Qb(2,"ion-card-title"),u.vc(3,"Mis Equipos"),u.Pb(),u.Pb(),u.Qb(4,"ion-card-content"),u.Qb(5,"ion-list"),u.uc(6,P,2,2,"ion-item",12),u.Pb(),u.Pb(),u.Pb()),2&t){const t=u.ac();u.yb(6),u.gc("ngForOf",t.user.teams)}}function g(t,e){if(1&t&&(u.Qb(0,"ion-card"),u.Qb(1,"ion-card-header"),u.Qb(2,"ion-card-title"),u.vc(3,"Mi perfil de Jugador"),u.Pb(),u.Pb(),u.Qb(4,"ion-card-content"),u.Qb(5,"ion-list"),u.Qb(6,"ion-item",13),u.vc(7),u.Pb(),u.Pb(),u.Pb(),u.Pb()),2&t){const t=u.ac();u.yb(6),u.ic("routerLink","/player/profile/",t.user.player.id,""),u.yb(1),u.xc(" ",t.user.player.name," ")}}const Q=[{path:"",component:(()=>{class t{constructor(t,e,i,o,n){this.authUser=t,this.requestService=e,this.modalController=i,this.transferData=o,this.chatService=n,this.userModel=new a.a("User",e),o.setData("test",{id:"id_lucas_data"}),console.log("set data transfer in My Profile",{id:"id_lucas_data"})}ngOnInit(){this.init()}init(t=null){return Object(c.b)(this,void 0,void 0,(function*(){this.user=this.authUser.user,console.log("authUser user",this.user),this.user&&this.userModel.api_functionModel(this.user.id,"pageMyProfile").subscribe(e=>{console.log("init myProfile",e),"success"==e.status&&(this.user=e.data),t&&t.target.complete()},e=>{console.error(e),t&&t.target.complete()})}))}getPhoto(){return this.user&&this.user.photo?this.user.photo.urlComplete:"assets/images/profile.jpg"}showEdit(){return Object(c.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:b.a,componentProps:{id:this.user.id}});return t.onDidDismiss().then(t=>Object(c.b)(this,void 0,void 0,(function*(){if(console.log(t),t.data&&t.data.user){let e=t.data.user;this.user.first_name=e.first_name,this.user.last_name=e.last_name,this.user.photo=e.photo,this.user.email=e.email,yield this.authUser.setUser(this.user)}}))),yield t.present()}))}}return t.\u0275fac=function(e){return new(e||t)(u.Lb(l.a),u.Lb(d.a),u.Lb(r.nb),u.Lb(f.a),u.Lb(h.a))},t.\u0275cmp=u.Fb({type:t,selectors:[["app-my-profile"]],decls:16,vars:5,consts:[["slot","start"],["defaultHref","/"],["slot","secondary"],[3,"click"],["name","create"],[3,"color","click",4,"ngIf"],["slot","fixed",3,"ionRefresh"],[4,"ngIf"],[3,"color","click"],["name","help-circle-outline"],[1,"ion-justify-content-center","ion-align-items-center"],["title","Foto de Perfil","scheme","dark",2,"width","auto",3,"src"],["routerDirection","forward",3,"routerLink",4,"ngFor","ngForOf"],["routerDirection","forward",3,"routerLink"]],template:function(t,e){1&t&&(u.Qb(0,"ion-header"),u.Qb(1,"ion-toolbar"),u.Qb(2,"ion-title"),u.vc(3),u.Pb(),u.Qb(4,"ion-buttons",0),u.Mb(5,"ion-back-button",1),u.Pb(),u.Qb(6,"ion-buttons",2),u.Qb(7,"ion-button",3),u.Yb("click",(function(){return e.showEdit()})),u.Mb(8,"ion-icon",4),u.Pb(),u.uc(9,m,2,1,"ion-button",5),u.Pb(),u.Pb(),u.Pb(),u.Qb(10,"ion-content"),u.Qb(11,"ion-refresher",6),u.Yb("ionRefresh",(function(t){return e.init(t)})),u.Mb(12,"ion-refresher-content"),u.Pb(),u.uc(13,p,9,4,"ion-card",7),u.uc(14,y,7,1,"ion-card",7),u.uc(15,g,8,2,"ion-card",7),u.Pb()),2&t&&(u.yb(3),u.xc(" ",e.user?e.user.last_name+" "+e.user.first_name:"My Perfil",""),u.yb(6),u.gc("ngIf",e.chatService.isInit),u.yb(4),u.gc("ngIf",e.user),u.yb(1),u.gc("ngIf",e.user&&e.user.teams&&e.user.teams.length>0),u.yb(1),u.gc("ngIf",e.user&&e.user.player))},directives:[r.x,r.jb,r.hb,r.j,r.f,r.g,r.i,r.y,o.l,r.r,r.O,r.P,r.k,r.l,r.z,r.m,r.o,r.n,r.H,o.k,r.D,r.tb,s.h],styles:[""]}),t})()}];let v=(()=>{class t{}return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(e){return new(e||t)},imports:[[s.j.forChild(Q)],s.j]}),t})();var k=i("6g0+");let w=(()=>{class t{}return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(e){return new(e||t)},imports:[[o.b,n.a,r.kb,v,k.b]]}),t})()}}]);