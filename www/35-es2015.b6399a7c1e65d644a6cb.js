(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{EbHZ:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var i=r("fXoL");let n=(()=>{class t{constructor(){this.data={},this.callbaks={}}setData(t,e){this.data[t]=e}getData(t){return this.data.hasOwnProperty(t)?this.data[t]:null}clear(t=null){this.data.hasOwnProperty(t)?delete this.data[t]:this.data={}}onSettDataPage(t,e){this.callbaks[t]=e}setDataPage(t,e){this.callbaks.hasOwnProperty(t)&&this.callbaks[t](e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},bPE7:function(t,e,r){"use strict";r.r(e),r.d(e,"MyProfilePageModule",(function(){return w}));var i=r("ofXK"),n=r("3Pt+"),o=r("TEn/"),s=r("tyNb"),a=r("mrSG"),c=r("8xVP"),b=r("U9ZX"),u=r("fXoL"),l=r("y/q6"),d=r("G/jy"),f=r("EbHZ");function h(t,e){if(1&t&&(u.Qb(0,"ion-card"),u.Qb(1,"ion-card-content"),u.Qb(2,"div",6),u.Mb(3,"ion-img",7),u.Pb(),u.Pb(),u.Qb(4,"ion-card-header"),u.Qb(5,"ion-card-title"),u.tc(6),u.Pb(),u.Qb(7,"ion-card-subtitle"),u.tc(8),u.Pb(),u.Pb(),u.Pb()),2&t){const t=u.ac();u.yb(3),u.fc("src",t.getPhoto()),u.yb(3),u.wc(" ",t.user.last_name," ",t.user.first_name," "),u.yb(2),u.uc(t.user.email)}}function p(t,e){if(1&t&&(u.Qb(0,"ion-item",9),u.tc(1),u.Pb()),2&t){const t=e.$implicit;u.hc("routerLink","/team/profile/",t.id,""),u.yb(1),u.vc(" ",t.name," ")}}function m(t,e){if(1&t&&(u.Qb(0,"ion-card"),u.Qb(1,"ion-card-header"),u.Qb(2,"ion-card-title"),u.tc(3,"Mis Equipos"),u.Pb(),u.Pb(),u.Qb(4,"ion-card-content"),u.Qb(5,"ion-list"),u.sc(6,p,2,2,"ion-item",8),u.Pb(),u.Pb(),u.Pb()),2&t){const t=u.ac();u.yb(6),u.fc("ngForOf",t.user.teams)}}function P(t,e){if(1&t&&(u.Qb(0,"ion-card"),u.Qb(1,"ion-card-header"),u.Qb(2,"ion-card-title"),u.tc(3,"Mi perfil de Jugador"),u.Pb(),u.Pb(),u.Qb(4,"ion-card-content"),u.Qb(5,"ion-list"),u.Qb(6,"ion-item",9),u.tc(7),u.Pb(),u.Pb(),u.Pb(),u.Pb()),2&t){const t=u.ac();u.yb(6),u.hc("routerLink","/player/profile/",t.user.player.id,""),u.yb(1),u.vc(" ",t.user.player.name," ")}}const y=[{path:"",component:(()=>{class t{constructor(t,e,r,i){this.authUser=t,this.requestService=e,this.modalController=r,this.transferData=i,this.userModel=new c.a("User",e),i.setData("test",{id:"id_lucas_data"}),console.log("set data transfer in My Profile",{id:"id_lucas_data"})}ngOnInit(){this.init()}init(t=null){return Object(a.b)(this,void 0,void 0,(function*(){this.user=this.authUser.user,console.log("authUser user",this.user),this.user&&this.userModel.api_functionModel(this.user.id,"pageMyProfile").subscribe(e=>{console.log("init myProfile",e),"success"==e.status&&(this.user=e.data),t&&t.target.complete()},e=>{console.error(e),t&&t.target.complete()})}))}getPhoto(){return this.user&&this.user.photo?this.user.photo.urlComplete:"assets/images/profile.jpg"}showEdit(){return Object(a.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:b.a,componentProps:{id:this.user.id}});return t.onDidDismiss().then(t=>Object(a.b)(this,void 0,void 0,(function*(){if(console.log(t),t.data&&t.data.user){let e=t.data.user;this.user.first_name=e.first_name,this.user.last_name=e.last_name,this.user.photo=e.photo,this.user.email=e.email,yield this.authUser.setUser(this.user)}}))),yield t.present()}))}}return t.\u0275fac=function(e){return new(e||t)(u.Lb(l.a),u.Lb(d.a),u.Lb(o.ib),u.Lb(f.a))},t.\u0275cmp=u.Fb({type:t,selectors:[["app-my-profile"]],decls:15,vars:4,consts:[["slot","start"],["slot","secondary"],[3,"click"],["name","create"],["slot","fixed",3,"ionRefresh"],[4,"ngIf"],[1,"ion-justify-content-center","ion-align-items-center"],["title","Foto de Perfil","scheme","dark",2,"width","auto",3,"src"],["routerDirection","forward",3,"routerLink",4,"ngFor","ngForOf"],["routerDirection","forward",3,"routerLink"]],template:function(t,e){1&t&&(u.Qb(0,"ion-header"),u.Qb(1,"ion-toolbar"),u.Qb(2,"ion-title"),u.tc(3),u.Pb(),u.Qb(4,"ion-buttons",0),u.Mb(5,"ion-back-button"),u.Pb(),u.Qb(6,"ion-buttons",1),u.Qb(7,"ion-button",2),u.Yb("click",(function(){return e.showEdit()})),u.Mb(8,"ion-icon",3),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(9,"ion-content"),u.Qb(10,"ion-refresher",4),u.Yb("ionRefresh",(function(t){return e.init(t)})),u.Mb(11,"ion-refresher-content"),u.Pb(),u.sc(12,h,9,4,"ion-card",5),u.sc(13,m,7,1,"ion-card",5),u.sc(14,P,8,2,"ion-card",5),u.Pb()),2&t&&(u.yb(3),u.vc(" ",e.user?e.user.last_name+" "+e.user.first_name:"My Perfil",""),u.yb(9),u.fc("ngIf",e.user),u.yb(1),u.fc("ngIf",e.user&&e.user.teams&&e.user.teams.length>0),u.yb(1),u.fc("ngIf",e.user&&e.user.player))},directives:[o.x,o.eb,o.cb,o.j,o.f,o.g,o.i,o.y,o.r,o.K,o.L,i.k,o.k,o.l,o.z,o.m,o.o,o.n,o.F,i.j,o.B,o.nb,s.h],styles:[""]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(e){return new(e||t)},imports:[[s.j.forChild(y)],s.j]}),t})();var Q=r("6g0+");let w=(()=>{class t{}return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(e){return new(e||t)},imports:[[i.b,n.a,o.fb,g,Q.b]]}),t})()}}]);