!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return o(this,n)}}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"2Q27":function(t,o,a){"use strict";a.d(o,"a",(function(){return d}));var s=a("9suA"),c=a("fXoL"),u=a("TEn/"),b=a("tyNb"),l=a("ofXK"),d=function(){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(a,t);var o=r(a);function a(t,n,i,r){var s;return e(this,a),(s=o.call(this,r,t)).viewCtrl=t,s.router=n,s.navParams=i,s.id=i.get("id"),s}return n(a,[{key:"ngOnInit",value:function(){}},{key:"close",value:function(){this.viewCtrl.dismiss()}},{key:"initObject",value:function(){}},{key:"goPayment",value:function(){this.router.navigateByUrl("/payment/create/"+this.id),this.close()}}]),a}(s.a);return t.\u0275fac=function(e){return new(e||t)(c.Lb(u.nb),c.Lb(b.g),c.Lb(u.pb),c.Lb(l.n))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-alert-create-team"]],features:[c.vb],decls:16,vars:0,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[1,"text"],[1,"ion-margin-top"],[1,"ion-float-right",3,"click"]],template:function(e,t){1&e&&(c.Qb(0,"ion-header"),c.Qb(1,"ion-toolbar"),c.Qb(2,"ion-title"),c.vc(3,"Pago pendiente"),c.Pb(),c.Qb(4,"ion-buttons",0),c.Qb(5,"ion-button",1),c.Yb("click",(function(){return t.close()})),c.Mb(6,"ion-icon",2),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(7,"ion-content"),c.Qb(8,"ion-card"),c.Qb(9,"ion-card-content"),c.Qb(10,"ion-text",3),c.vc(11," Para que los administradores de este equipo puedan modificar los datos (Fotos,nombre, jugadores, redes, sucesos de partidos , etc) es necesario abonar $500 mensualmente. "),c.Pb(),c.Mb(12,"br"),c.Qb(13,"div",4),c.Qb(14,"ion-button",5),c.Yb("click",(function(){return t.goPayment()})),c.vc(15," Realizar el pago"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb())},directives:[u.x,u.jb,u.hb,u.j,u.i,u.y,u.r,u.k,u.l,u.eb],styles:[".text[_ngcontent-%COMP%]{font-size:x-large}"]}),t}()},"99Un":function(t,i,r){"use strict";r.r(i),r.d(i,"HomePageModule",(function(){return se}));var o,a,s=r("ofXK"),c=r("3Pt+"),u=r("TEn/"),b=r("tyNb"),l=r("UTcu"),d=r("mrSG"),f=r("fXoL"),h=r("54vc"),p=r("VYYF"),g=r("y/q6"),m=r("qgph"),v=r("sjK5"),y=r("vkgz"),k=r("Jgta"),P=r("LRne"),w=r("EY2u"),j=r("z6cu"),O=r("HDdC"),x=r("GyhO"),Q=r("tf+s"),T=r("pxpQ"),M=r("eIep"),A=r("lJxs"),I=r("UXun"),R=r("aGrj"),C=r("JIr8"),L=r("5+tZ"),S=r("xbPD"),U=r("spgP"),_=new f.q("angularfire2.messaging.vapid-key"),D=new f.q("angularfire2.messaging.service-worker-registeration"),q=parseInt(k.a.SDK_VERSION,10)<8,V=((a=function t(n,i,o,a,c,u){var b=this;e(this,t);var l=new U.d(a),f=u,h=Object(P.a)(void 0).pipe(Object(Q.a)(l.outsideAngular),Object(T.b)(l.insideAngular),Object(M.a)((function(){return Object(s.q)(o)?w.a:r.e(58).then(r.bind(null,"dB9c"))})),Object(A.a)((function(){return Object(U.g)(n,a,i)})),Object(M.a)((function(e){return Object(U.f)(e.name+".messaging","AngularFireMessaging",e,(function(){return Object(d.b)(b,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.messaging(),t.t0=q,!t.t0){t.next=11;break}if(c&&n.usePublicVapidKey(c),t.t1=f,!t.t1){t.next=11;break}return t.t2=n,t.next=9,f;case 9:t.t3=t.sent,t.t2.useServiceWorker.call(t.t2,t.t3);case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}}),t)})))}),[c,f])})),Object(I.a)({bufferSize:1,refCount:!1}));this.requestPermission=h.pipe(Object(Q.a)(l.outsideAngular),Object(T.b)(l.insideAngular),Object(M.a)((function(e){return k.a.messaging.isSupported()?e.requestPermission():Object(j.a)("Not supported.")}))),this.getToken=h.pipe(Object(Q.a)(l.outsideAngular),Object(T.b)(l.insideAngular),Object(M.a)((function(e){return Object(d.b)(b,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!k.a.messaging.isSupported()||"granted"!==Notification.permission){t.next=16;break}if(!q){t.next=5;break}return t.next=4,e.getToken();case 4:return t.abrupt("return",t.sent);case 5:if(!f){t.next=11;break}return t.next=8,f;case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=null;case 12:return n=t.t0,t.next=15,e.getToken({vapidKey:c,serviceWorkerRegistration:n});case 15:return t.abrupt("return",t.sent);case 16:return t.abrupt("return",null);case 17:case"end":return t.stop()}}),t)})))})));var p=new O.a((function(e){navigator.permissions.query({name:"notifications"}).then((function(t){t.onchange=function(){return e.next()}}))})),g=h.pipe(Object(Q.a)(l.outsideAngular),Object(T.b)(l.insideAngular),Object(R.a)(p),Object(R.a)(this.getToken));return this.tokenChanges=h.pipe(Object(Q.a)(l.outsideAngular),Object(T.b)(l.insideAngular),Object(M.a)((function(){return k.a.messaging.isSupported()?Object(x.a)(b.getToken,g):w.a}))),this.messages=h.pipe(Object(Q.a)(l.outsideAngular),Object(T.b)(l.insideAngular),Object(M.a)((function(e){return k.a.messaging.isSupported()?new O.a((function(t){return e.onMessage((function(e){return t.next(e)}),(function(e){return t.error(e)}),(function(){return t.complete()}))})):w.a}))),this.requestToken=Object(P.a)(void 0).pipe(Object(Q.a)(l.outsideAngular),Object(T.b)(l.insideAngular),Object(M.a)((function(){return b.requestPermission})),Object(C.a)((function(){return Object(P.a)(null)})),Object(L.a)((function(){return b.tokenChanges}))),this.deleteToken=function(e){return h.pipe(Object(Q.a)(l.outsideAngular),Object(T.b)(l.insideAngular),Object(M.a)((function(t){return t.deleteToken(e||void 0)})),Object(S.a)(!1))},Object(U.i)(this,h,a)}).\u0275fac=function(e){return new(e||a)(f.Ub(U.c),f.Ub(U.b,8),f.Ub(f.B),f.Ub(f.z),f.Ub(_,8),f.Ub(D,8))},a.\u0275prov=f.Hb({factory:function(){return new a(f.Ub(U.c),f.Ub(U.b,8),f.Ub(f.B),f.Ub(f.z),f.Ub(_,8),f.Ub(D,8))},token:a,providedIn:"any"}),a),E=((o=function(){function t(n){e(this,t),this.afMessaging=n,this.token=null}return n(t,[{key:"requestPermission",value:function(){return this.afMessaging.requestToken.pipe(Object(y.a)((function(e){console.log("Store token to server: ",e)})))}},{key:"getMessages",value:function(){return this.afMessaging.messages}},{key:"deleteToken",value:function(){this.token&&(this.afMessaging.deleteToken(this.token),this.token=null)}}]),t}()).\u0275fac=function(e){return new(e||o)(f.Ub(V))},o.\u0275prov=f.Hb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),J=r("VZH3"),z=r("dwY0");function F(e,t){1&e&&(f.Qb(0,"div",1),f.Mb(1,"ion-icon",2),f.vc(2," Est\xe1s sin conexi\xf3n :(\n"),f.Pb())}var G,H=((G=function(){function t(n){e(this,t),this.networService=n}return n(t,[{key:"ngOnInit",value:function(){return Object(d.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}}]),t}()).\u0275fac=function(e){return new(e||G)(f.Lb(z.a))},G.\u0275cmp=f.Fb({type:G,selectors:[["app-offline"]],decls:1,vars:1,consts:[["class","offline ion-text-center",4,"ngIf"],[1,"offline","ion-text-center"],["name","cloud-offline-outline"]],template:function(e,t){1&e&&f.uc(0,F,3,0,"div",0),2&e&&f.gc("ngIf",!t.networService.appIsOnline)},directives:[s.l,u.y],styles:[".offline[_ngcontent-%COMP%]{background:red;color:#fff;padding:2px}"]}),G),N=r("zYHx");function X(e,t){if(1&e&&(f.Qb(0,"ion-card"),f.Qb(1,"ion-card-content"),f.Qb(2,"ion-thumbnail",1),f.Mb(3,"ion-img",2),f.Pb(),f.Pb(),f.Qb(4,"ion-card-header"),f.Qb(5,"ion-card-title",3),f.vc(6),f.Pb(),f.Qb(7,"ion-card-subtitle",3),f.vc(8),f.Pb(),f.Pb(),f.Pb()),2&e){var n=f.ac();f.yb(3),f.gc("src",n.authUser.user&&n.authUser.user.photo?n.authUser.user.photo.urlComplete:n.pathImages.images.profile_user),f.yb(3),f.yc(" ",n.authUser.user.last_name," ",n.authUser.user.first_name," "),f.yb(2),f.xc(" ",n.authUser.user.email," ")}}var Y,B=((Y=function(){function t(n,i){e(this,t),this.authUser=n,this.pathImages=i}return n(t,[{key:"ngOnInit",value:function(){return Object(d.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}}]),t}()).\u0275fac=function(e){return new(e||Y)(f.Lb(g.a),f.Lb(N.a))},Y.\u0275cmp=f.Fb({type:Y,selectors:[["app-menu-user"]],decls:1,vars:1,consts:[[4,"ngIf"],["slot","center",1,"content-image","center"],[1,"image","center",2,"border-radius","50%","background-position","center center","background-size","cover",3,"src"],[1,"ion-text-center"]],template:function(e,t){1&e&&f.uc(0,X,9,4,"ion-card",0),2&e&&f.gc("ngIf",t.authUser.user)},directives:[s.l,u.k,u.l,u.gb,u.z,u.m,u.o,u.n],styles:[".center[_ngcontent-%COMP%]{margin:auto}.content-image[_ngcontent-%COMP%]{width:100px;height:90px}.image[_ngcontent-%COMP%]{width:100px;height:100px}"]}),Y);function K(e,t){if(1&e){var n=f.Rb();f.Qb(0,"ion-button",27),f.Yb("click",(function(){return f.oc(n),f.ac().chatService.toggle()})),f.Mb(1,"ion-icon",28),f.Pb()}if(2&e){var i=f.ac();f.gc("color",i.chatService.isVisible?"success":"")}}function Z(e,t){if(1&e&&(f.Qb(0,"ion-badge",29),f.vc(1),f.Pb()),2&e){var n=f.ac();f.yb(1),f.wc(n.notificationsCount)}}function W(e,t){1&e&&(f.Qb(0,"ion-item",30),f.Mb(1,"ion-icon",31),f.Qb(2,"ion-label"),f.vc(3," Toggle Dark Theme "),f.Pb(),f.Mb(4,"ion-toggle",32),f.Pb())}function $(e,t){1&e&&(f.Qb(0,"ion-item",33),f.vc(1,"Administrar APP"),f.Pb())}function ee(e,t){1&e&&(f.Qb(0,"ion-item",34),f.vc(1,"Mis pagos"),f.Pb())}var te,ne,ie,re=[{path:"",component:(te=function(){function t(n,i,r,o,a,s,c,u,b,l,d){e(this,t),this.platform=n,this.splashScreen=i,this.statusBar=r,this.auth=o,this.alertController=a,this._location=s,this.paymentTeamService=c,this.chatService=u,this.messagingService=b,this.toastCtrl=l,this.shareService=d,this.currentPageTitle="Dashboard",this.appPages=[{title:"Dashboard",url:"",icon:"easel"},{title:"Timeline",url:"/timeline",icon:"film"},{title:"Settings",url:"/settings",icon:"settings"}],this.initializeApp(),this.listenForMessages(),this.requestPermission()}return n(t,[{key:"ngOnInit",value:function(){return Object(d.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.updateUserApi();case 2:case"end":return e.stop()}}),e,this)})))}},{key:"initializeApp",value:function(){var e=this;this.platform.ready().then((function(){e.statusBar.styleDefault(),e.splashScreen.hide(),e.loadTheme()})),this.chatService.init(),this.shareService.addThisInit(),setInterval((function(){e.auth.user&&e.auth.userModel.api_functionModel(e.auth.user.id,"changesNotifications").subscribe((function(t){if("success"==t.status){var n=t.data.counts_not;n>e.auth.user.counts_not&&(e.auth.user.counts_not=n,e.auth.user.teams=t.data.teams,e.auth.user.player=t.data.player,e.auth.saveUser())}}))}),5e4)}},{key:"loadTheme",value:function(){}},{key:"loadApp",value:function(){this.checkToggle(this.prefersDark.matches)}},{key:"checkToggle",value:function(e){this.toggle.checked=e}},{key:"logout",value:function(){this.auth.logout()}},{key:"showExitConfirm",value:function(){this.alertController.create({header:"App termination",message:"Do you want to close the app?",backdropDismiss:!1,buttons:[{text:"Stay",role:"cancel",handler:function(){console.log("Application exit prevented!")}},{text:"Exit",handler:function(){navigator.app.exitApp()}}]}).then((function(e){e.present()}))}},{key:"ionViewDidLeave",value:function(){console.log("ionViewDidLeave"),this.chatService.hide()}},{key:"listenForMessages",value:function(){var e=this;this.messagingService.getMessages().subscribe((function(t){return Object(d.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("msj firebase",t),e.next=3,this.alertController.create({header:t.notification.title,subHeader:t.notification.body,message:t.data.info,buttons:["OK"]});case 3:return n=e.sent,e.next=6,n.present();case 6:case"end":return e.stop()}}),e,this)})))}))}},{key:"requestPermission",value:function(){var e=this;this.messagingService.requestPermission().subscribe((function(t){return Object(d.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.auth.setTokenMessaging(t),console.log("token",t);case 1:case"end":return e.stop()}}),e,this)})))}),(function(t){return Object(d.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error("error firebase",t);case 1:case"end":return e.stop()}}),e)})))}))}},{key:"deleteToken",value:function(){return Object(d.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.messagingService.deleteToken(),e.next=3,this.toastCtrl.create({message:"Token removed",duration:2e3});case 3:e.sent.present();case 4:case"end":return e.stop()}}),e,this)})))}},{key:"notificationsCount",get:function(){return this.auth.user&&this.auth.user.counts_not?this.auth.user.counts_not:0}}]),t}(),te.\u0275fac=function(e){return new(e||te)(f.Lb(u.rb),f.Lb(h.a),f.Lb(p.a),f.Lb(g.a),f.Lb(u.b),f.Lb(s.h),f.Lb(m.a),f.Lb(v.a),f.Lb(E),f.Lb(u.wb),f.Lb(J.a))},te.\u0275cmp=f.Fb({type:te,selectors:[["app-home"]],decls:54,vars:5,consts:[["slot","start"],["slot","secondary"],[3,"color","click",4,"ngIf"],["routerLink","/notifications","routerDirection","forward"],["name","notifications-outline"],["id","notifications-badge",4,"ngIf"],["side","start","menuId","custom","contentId","main",1,"my-custom-menu"],["routerLink","/my-profile","routerDirection","forward"],[2,"width","100%"],["lines","full",4,"ngIf"],["routerLink","/admin_home","routerDirection","forward",4,"ngIf"],["routerLink","/payment","routerDirection","forward",4,"ngIf"],["routerLink","/contact","routerDirection","forward"],[3,"click"],["id","main"],["slot","top","color","primary"],["slot","bottom"],["tab","results"],["name","clipboard-outline"],["tab","games"],["name","easel-outline"],["tab","teams"],["name","people-outline"],["tab","players"],["name","person-outline"],["tab","publications"],["name","happy-outline"],[3,"color","click"],["name","help-circle-outline"],["id","notifications-badge"],["lines","full"],["slot","start","name","moon"],["id","themeToggle","slot","end"],["routerLink","/admin_home","routerDirection","forward"],["routerLink","/payment","routerDirection","forward"]],template:function(e,t){1&e&&(f.Qb(0,"ion-header"),f.Mb(1,"app-offline"),f.Qb(2,"ion-toolbar"),f.Qb(3,"ion-buttons",0),f.Mb(4,"ion-menu-button"),f.Pb(),f.Qb(5,"ion-title"),f.vc(6," F\xfatbol 8 Alem "),f.Pb(),f.Qb(7,"ion-buttons",1),f.uc(8,K,2,1,"ion-button",2),f.Qb(9,"ion-button",3),f.Mb(10,"ion-icon",4),f.uc(11,Z,2,1,"ion-badge",5),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Qb(12,"ion-menu",6),f.Qb(13,"ion-header"),f.Qb(14,"ion-toolbar"),f.Qb(15,"ion-title"),f.vc(16,"Men\xfa"),f.Pb(),f.Pb(),f.Pb(),f.Qb(17,"ion-content"),f.Qb(18,"ion-list"),f.Qb(19,"ion-item",7),f.Mb(20,"app-menu-user",8),f.Pb(),f.uc(21,W,5,0,"ion-item",9),f.uc(22,$,2,0,"ion-item",10),f.Qb(23,"ion-item",7),f.vc(24,"Mi perfil"),f.Pb(),f.uc(25,ee,2,0,"ion-item",11),f.Qb(26,"ion-item",12),f.vc(27,"Contacto"),f.Pb(),f.Qb(28,"ion-item",13),f.Yb("click",(function(){return t.logout()})),f.Qb(29,"ion-label"),f.vc(30,"Cerrar Sesi\xf3n"),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Mb(31,"ion-router-outlet",14),f.Qb(32,"ion-tabs",15),f.Qb(33,"ion-tab-bar",16),f.Qb(34,"ion-tab-button",17),f.Mb(35,"ion-icon",18),f.Qb(36,"ion-label"),f.vc(37,"Resultado"),f.Pb(),f.Pb(),f.Qb(38,"ion-tab-button",19),f.Mb(39,"ion-icon",20),f.Qb(40,"ion-label"),f.vc(41,"Partidos"),f.Pb(),f.Pb(),f.Qb(42,"ion-tab-button",21),f.Mb(43,"ion-icon",22),f.Qb(44,"ion-label"),f.vc(45,"Equipos"),f.Pb(),f.Pb(),f.Qb(46,"ion-tab-button",23),f.Mb(47,"ion-icon",24),f.Qb(48,"ion-label"),f.vc(49,"Jugadores"),f.Pb(),f.Pb(),f.Qb(50,"ion-tab-button",25),f.Mb(51,"ion-icon",26),f.Qb(52,"ion-label"),f.vc(53,"3\xb0 Tiempo"),f.Pb(),f.Pb(),f.Pb(),f.Pb()),2&e&&(f.yb(8),f.gc("ngIf",t.chatService.isInit),f.yb(3),f.gc("ngIf",t.notificationsCount>0),f.yb(10),f.gc("ngIf",!1),f.yb(1),f.gc("ngIf",t.auth.isAdmin()),f.yb(3),f.gc("ngIf",t.paymentTeamService.isActive()))},directives:[u.x,H,u.jb,u.j,u.K,u.hb,s.l,u.i,u.tb,b.h,u.y,u.J,u.r,u.H,u.D,B,u.G,u.R,u.db,u.bb,u.cb,u.h,u.ib,u.c],styles:["#notification-button[_ngcontent-%COMP%]{position:relative;width:42px;top:1px;right:1px;overflow:visible!important}#notifications-badge[_ngcontent-%COMP%]{background-color:red;position:absolute;top:-3px;right:-3px;border-radius:100%}"]}),te),canActivate:[l.a],children:[{path:"teams",loadChildren:function(){return Promise.all([r.e(0),r.e(49)]).then(r.bind(null,"nHXg")).then((function(e){return e.TeamsPageModule}))}},{path:"results",loadChildren:function(){return Promise.all([r.e(0),r.e(48)]).then(r.bind(null,"3nJb")).then((function(e){return e.ResultsPageModule}))}},{path:"games",loadChildren:function(){return Promise.all([r.e(3),r.e(9),r.e(0),r.e(73)]).then(r.bind(null,"cGQY")).then((function(e){return e.GamesPageModule}))}},{path:"players",loadChildren:function(){return Promise.all([r.e(0),r.e(74)]).then(r.bind(null,"+q+I")).then((function(e){return e.PlayersPageModule}))}},{path:"publications",loadChildren:function(){return Promise.all([r.e(2),r.e(0),r.e(13)]).then(r.bind(null,"Jr79")).then((function(e){return e.PublicationsPageModule}))}},{path:"",redirectTo:"/home/results",pathMatch:"full"}]},{path:"publications",loadChildren:function(){return Promise.all([r.e(2),r.e(0),r.e(13)]).then(r.bind(null,"Jr79")).then((function(e){return e.PublicationsPageModule}))}}],oe=((ne=function t(){e(this,t)}).\u0275mod=f.Jb({type:ne}),ne.\u0275inj=f.Ib({factory:function(e){return new(e||ne)},imports:[[b.j.forChild(re)],b.j]}),ne),ae=r("j1ZV"),se=((ie=function t(){e(this,t)}).\u0275mod=f.Jb({type:ie}),ie.\u0275inj=f.Ib({factory:function(e){return new(e||ie)},imports:[[s.b,c.a,u.kb,oe,ae.a]]}),ie)},VZH3:function(t,i,r){"use strict";r.d(i,"a",(function(){return f}));var o=r("mrSG"),a=r("8xVP"),s=r("AytR"),c=r("fXoL"),u=r("G/jy"),b=r("vuFD"),l=r("m/P+"),d=r("2Rin"),f=function(){var t=function(){function t(n,i,r,o){e(this,t),this.requestService=n,this.dialogService=i,this.iab=r,this.util=o,this.addThisVisible=!1,this.loadedAddThis=!1,this.scriptLoaded=null,this.addthis_share={url:"",title:"",description:"",media:""},this.modelGame=new a.a("Game",n),this.loadedAddThis||this.addThisInit()}return n(t,[{key:"shareGameFacebook",value:function(e){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.iab.create(s.a.server_url_base+"/shareResult/"+e,"",{fullscreen:"yes"});case 1:case"end":return t.stop()}}),t,this)})))}},{key:"addThisInit",value:function(){var e=this;try{this.addMeta();var t=document.createElement("script");t.type="text/javascript",t.setAttribute("async","async"),t.src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6169932652121667",t.onload=function(){console.log("load AddThis"),e.loadedAddThis=!0,e.scriptLoaded=e,document.body.classList.add("share-disabled")},document.body.appendChild(t)}catch(n){console.error(n)}}},{key:"addMeta",value:function(){var e=document.createElement("meta");e.setAttribute("property","og:url"),e.content=document.location,document.getElementsByTagName("head")[0].appendChild(e);var t=document.createElement("meta");t.setAttribute("property","og:title"),t.content="Title lucas",document.getElementsByTagName("head")[0].appendChild(t),console.log("add meta")}},{key:"toggleAddThis",value:function(){console.log("toggle"),this.addThisVisible=!this.addThisVisible,this.updateVisibiliti()}},{key:"showAddThis",value:function(){this.addThisVisible=!0,this.updateVisibiliti()}},{key:"hideAddThis",value:function(){this.addThisVisible=!1,this.updateVisibiliti()}},{key:"updateVisibiliti",value:function(){if(this.loadedAddThis&&document.getElementsByClassName("addthis-smartlayers")){if(window.addthis){var e=window.addthis;e.layers.refresh(),e.toolbox()}this.addThisVisible?document.body.classList.remove("share-disabled"):document.body.classList.add("share-disabled")}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Ub(u.a),c.Ub(b.a),c.Ub(l.a),c.Ub(d.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},j1ZV:function(t,n,i){"use strict";i.d(n,"a",(function(){return b}));var r=i("ofXK"),o=i("TEn/"),a=i("tyNb"),s=i("6g0+"),c=i("3Pt+"),u=i("fXoL"),b=function(){var t=function t(){e(this,t)};return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(e){return new(e||t)},imports:[[r.b,o.kb.forRoot(),c.a,a.j,s.b]]}),t}()},qgph:function(t,i,r){"use strict";r.d(i,"a",(function(){return u}));var o=r("mrSG"),a=r("2Q27"),s=r("fXoL"),c=r("TEn/"),u=function(){var t=function(){function t(n){e(this,t),this.modalController=n,this.active=!1}return n(t,[{key:"setTeam",value:function(e){this.team=e}},{key:"isActive",value:function(){return this.active}},{key:"noPaid",value:function(){return!!this.active&&!this.team.paid}},{key:"showAlert",value:function(){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:a.a,componentProps:{id:this.team.id}});case 2:return(t=e.sent).onDidDismiss().then((function(e){console.log("return paid")})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.Ub(c.nb))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();