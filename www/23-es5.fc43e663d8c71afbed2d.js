!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)}}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"2Q27":function(t,o,a){"use strict";a.d(o,"a",(function(){return f}));var u=a("9suA"),s=a("fXoL"),c=a("TEn/"),b=a("tyNb"),l=a("ofXK"),f=function(){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(a,t);var o=i(a);function a(t,n,r,i){var u;return e(this,a),(u=o.call(this,i,t)).viewCtrl=t,u.router=n,u.navParams=r,u.id=r.get("id"),u}return n(a,[{key:"ngOnInit",value:function(){}},{key:"close",value:function(){this.viewCtrl.dismiss()}},{key:"initObject",value:function(){}},{key:"goPayment",value:function(){this.router.navigateByUrl("/payment/create/"+this.id),this.close()}}]),a}(u.a);return t.\u0275fac=function(e){return new(e||t)(s.Lb(c.nb),s.Lb(b.g),s.Lb(c.pb),s.Lb(l.m))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-alert-create-team"]],features:[s.vb],decls:16,vars:0,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[1,"text"],[1,"ion-margin-top"],[1,"ion-float-right",3,"click"]],template:function(e,t){1&e&&(s.Qb(0,"ion-header"),s.Qb(1,"ion-toolbar"),s.Qb(2,"ion-title"),s.tc(3,"Pago pendiente"),s.Pb(),s.Qb(4,"ion-buttons",0),s.Qb(5,"ion-button",1),s.Yb("click",(function(){return t.close()})),s.Mb(6,"ion-icon",2),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(7,"ion-content"),s.Qb(8,"ion-card"),s.Qb(9,"ion-card-content"),s.Qb(10,"ion-text",3),s.tc(11," Para que los administradores de este equipo puedan modificar los datos (Fotos,nombre, jugadores, redes, sucesos de partidos , etc) es necesario abonar $500 mensualmente. "),s.Pb(),s.Mb(12,"br"),s.Qb(13,"div",4),s.Qb(14,"ion-button",5),s.Yb("click",(function(){return t.goPayment()})),s.tc(15," Realizar el pago"),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb())},directives:[c.x,c.jb,c.hb,c.j,c.i,c.y,c.r,c.k,c.l,c.eb],styles:[".text[_ngcontent-%COMP%]{font-size:x-large}"]}),t}()},"99Un":function(t,r,i){"use strict";i.r(r),i.d(r,"HomePageModule",(function(){return ne}));var o,a,u=i("ofXK"),s=i("3Pt+"),c=i("TEn/"),b=i("tyNb"),l=i("UTcu"),f=i("mrSG"),p=i("fXoL"),h=i("54vc"),d=i("VYYF"),g=i("y/q6"),m=i("qgph"),v=i("sjK5"),k=i("vkgz"),P=i("Jgta"),y=i("LRne"),j=i("EY2u"),O=i("z6cu"),w=i("HDdC"),Q=i("GyhO"),x=i("tf+s"),M=i("pxpQ"),T=i("eIep"),C=i("lJxs"),A=i("UXun"),R=i("aGrj"),I=i("JIr8"),L=i("5+tZ"),S=i("xbPD"),U=i("spgP"),_=new p.q("angularfire2.messaging.vapid-key"),D=new p.q("angularfire2.messaging.service-worker-registeration"),q=parseInt(P.a.SDK_VERSION,10)<8,E=((a=function t(n,r,o,a,s,c){var b=this;e(this,t);var l=new U.d(a),p=c,h=Object(y.a)(void 0).pipe(Object(x.a)(l.outsideAngular),Object(M.b)(l.insideAngular),Object(T.a)((function(){return Object(u.p)(o)?j.a:i.e(48).then(i.bind(null,"dB9c"))})),Object(C.a)((function(){return Object(U.g)(n,a,r)})),Object(T.a)((function(e){return Object(U.f)(e.name+".messaging","AngularFireMessaging",e,(function(){return Object(f.b)(b,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.messaging(),t.t0=q,!t.t0){t.next=11;break}if(s&&n.usePublicVapidKey(s),t.t1=p,!t.t1){t.next=11;break}return t.t2=n,t.next=9,p;case 9:t.t3=t.sent,t.t2.useServiceWorker.call(t.t2,t.t3);case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}}),t)})))}),[s,p])})),Object(A.a)({bufferSize:1,refCount:!1}));this.requestPermission=h.pipe(Object(x.a)(l.outsideAngular),Object(M.b)(l.insideAngular),Object(T.a)((function(e){return P.a.messaging.isSupported()?e.requestPermission():Object(O.a)("Not supported.")}))),this.getToken=h.pipe(Object(x.a)(l.outsideAngular),Object(M.b)(l.insideAngular),Object(T.a)((function(e){return Object(f.b)(b,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!P.a.messaging.isSupported()||"granted"!==Notification.permission){t.next=16;break}if(!q){t.next=5;break}return t.next=4,e.getToken();case 4:return t.abrupt("return",t.sent);case 5:if(!p){t.next=11;break}return t.next=8,p;case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=null;case 12:return n=t.t0,t.next=15,e.getToken({vapidKey:s,serviceWorkerRegistration:n});case 15:return t.abrupt("return",t.sent);case 16:return t.abrupt("return",null);case 17:case"end":return t.stop()}}),t)})))})));var d=new w.a((function(e){navigator.permissions.query({name:"notifications"}).then((function(t){t.onchange=function(){return e.next()}}))})),g=h.pipe(Object(x.a)(l.outsideAngular),Object(M.b)(l.insideAngular),Object(R.a)(d),Object(R.a)(this.getToken));return this.tokenChanges=h.pipe(Object(x.a)(l.outsideAngular),Object(M.b)(l.insideAngular),Object(T.a)((function(){return P.a.messaging.isSupported()?Object(Q.a)(b.getToken,g):j.a}))),this.messages=h.pipe(Object(x.a)(l.outsideAngular),Object(M.b)(l.insideAngular),Object(T.a)((function(e){return P.a.messaging.isSupported()?new w.a((function(t){return e.onMessage((function(e){return t.next(e)}),(function(e){return t.error(e)}),(function(){return t.complete()}))})):j.a}))),this.requestToken=Object(y.a)(void 0).pipe(Object(x.a)(l.outsideAngular),Object(M.b)(l.insideAngular),Object(T.a)((function(){return b.requestPermission})),Object(I.a)((function(){return Object(y.a)(null)})),Object(L.a)((function(){return b.tokenChanges}))),this.deleteToken=function(e){return h.pipe(Object(x.a)(l.outsideAngular),Object(M.b)(l.insideAngular),Object(T.a)((function(t){return t.deleteToken(e||void 0)})),Object(S.a)(!1))},Object(U.i)(this,h,a)}).\u0275fac=function(e){return new(e||a)(p.Ub(U.c),p.Ub(U.b,8),p.Ub(p.B),p.Ub(p.z),p.Ub(_,8),p.Ub(D,8))},a.\u0275prov=p.Hb({factory:function(){return new a(p.Ub(U.c),p.Ub(U.b,8),p.Ub(p.B),p.Ub(p.z),p.Ub(_,8),p.Ub(D,8))},token:a,providedIn:"any"}),a),J=((o=function(){function t(n){e(this,t),this.afMessaging=n,this.token=null}return n(t,[{key:"requestPermission",value:function(){return this.afMessaging.requestToken.pipe(Object(k.a)((function(e){console.log("Store token to server: ",e)})))}},{key:"getMessages",value:function(){return this.afMessaging.messages}},{key:"deleteToken",value:function(){this.token&&(this.afMessaging.deleteToken(this.token),this.token=null)}}]),t}()).\u0275fac=function(e){return new(e||o)(p.Ub(E))},o.\u0275prov=p.Hb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),z=i("zYHx");function F(e,t){if(1&e&&(p.Qb(0,"ion-card"),p.Qb(1,"ion-card-content"),p.Qb(2,"ion-thumbnail",1),p.Mb(3,"ion-img",2),p.Pb(),p.Pb(),p.Qb(4,"ion-card-header"),p.Qb(5,"ion-card-title",3),p.tc(6),p.Pb(),p.Qb(7,"ion-card-subtitle",3),p.tc(8),p.Pb(),p.Pb(),p.Pb()),2&e){var n=p.ac();p.yb(3),p.fc("src",n.authUser.user&&n.authUser.user.photo?n.authUser.user.photo.urlComplete:n.pathImages.images.profile_user),p.yb(3),p.wc(" ",n.authUser.user.last_name," ",n.authUser.user.first_name," "),p.yb(2),p.vc(" ",n.authUser.user.email," ")}}var H,K=((H=function(){function t(n,r){e(this,t),this.authUser=n,this.pathImages=r}return n(t,[{key:"ngOnInit",value:function(){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}}]),t}()).\u0275fac=function(e){return new(e||H)(p.Lb(g.a),p.Lb(z.a))},H.\u0275cmp=p.Fb({type:H,selectors:[["app-menu-user"]],decls:1,vars:1,consts:[[4,"ngIf"],["slot","center",1,"content-image","center"],[1,"image","center",2,"border-radius","50%","background-position","center center","background-size","cover",3,"src"],[1,"ion-text-center"]],template:function(e,t){1&e&&p.sc(0,F,9,4,"ion-card",0),2&e&&p.fc("ngIf",t.authUser.user)},directives:[u.k,c.k,c.l,c.gb,c.z,c.m,c.o,c.n],styles:[".center[_ngcontent-%COMP%]{margin:auto}.content-image[_ngcontent-%COMP%]{width:100px;height:90px}.image[_ngcontent-%COMP%]{width:100px;height:100px}"]}),H);function X(e,t){if(1&e){var n=p.Rb();p.Qb(0,"ion-button",27),p.Yb("click",(function(){return p.nc(n),p.ac().chatService.toggle()})),p.Mb(1,"ion-icon",28),p.Pb()}if(2&e){var r=p.ac();p.fc("color",r.chatService.isVisible?"success":"")}}function Y(e,t){if(1&e&&(p.Qb(0,"ion-badge",29),p.tc(1),p.Pb()),2&e){var n=p.ac();p.yb(1),p.uc(n.notificationsCount)}}function N(e,t){1&e&&(p.Qb(0,"ion-item",30),p.Mb(1,"ion-icon",31),p.Qb(2,"ion-label"),p.tc(3," Toggle Dark Theme "),p.Pb(),p.Mb(4,"ion-toggle",32),p.Pb())}function V(e,t){1&e&&(p.Qb(0,"ion-item",33),p.tc(1,"Administrar APP"),p.Pb())}function G(e,t){1&e&&(p.Qb(0,"ion-item",34),p.tc(1,"Mis pagos"),p.Pb())}var B,Z,W,$=[{path:"",component:(B=function(){function t(n,r,i,o,a,u,s,c,b,l){e(this,t),this.platform=n,this.splashScreen=r,this.statusBar=i,this.auth=o,this.alertController=a,this._location=u,this.paymentTeamService=s,this.chatService=c,this.messagingService=b,this.toastCtrl=l,this.currentPageTitle="Dashboard",this.appPages=[{title:"Dashboard",url:"",icon:"easel"},{title:"Timeline",url:"/timeline",icon:"film"},{title:"Settings",url:"/settings",icon:"settings"}],this.initializeApp(),this.listenForMessages(),this.requestPermission()}return n(t,[{key:"ngOnInit",value:function(){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.updateUserApi();case 2:case"end":return e.stop()}}),e,this)})))}},{key:"initializeApp",value:function(){var e=this;this.platform.ready().then((function(){e.statusBar.styleDefault(),e.splashScreen.hide(),e.loadTheme()})),this.chatService.init(),setInterval((function(){e.auth.user&&e.auth.userModel.api_functionModel(e.auth.user.id,"changesNotifications").subscribe((function(t){if("success"==t.status){var n=t.data.counts_not;n>e.auth.user.counts_not&&(e.auth.user.counts_not=n,e.auth.user.teams=t.data.teams,e.auth.user.player=t.data.player,e.auth.saveUser())}}))}),5e4)}},{key:"loadTheme",value:function(){}},{key:"loadApp",value:function(){this.checkToggle(this.prefersDark.matches)}},{key:"checkToggle",value:function(e){this.toggle.checked=e}},{key:"logout",value:function(){this.auth.logout()}},{key:"showExitConfirm",value:function(){this.alertController.create({header:"App termination",message:"Do you want to close the app?",backdropDismiss:!1,buttons:[{text:"Stay",role:"cancel",handler:function(){console.log("Application exit prevented!")}},{text:"Exit",handler:function(){navigator.app.exitApp()}}]}).then((function(e){e.present()}))}},{key:"ionViewDidLeave",value:function(){console.log("ionViewDidLeave"),this.chatService.hide()}},{key:"listenForMessages",value:function(){var e=this;this.messagingService.getMessages().subscribe((function(t){return Object(f.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("msj firebase",t),e.next=3,this.alertController.create({header:t.notification.title,subHeader:t.notification.body,message:t.data.info,buttons:["OK"]});case 3:return n=e.sent,e.next=6,n.present();case 6:case"end":return e.stop()}}),e,this)})))}))}},{key:"requestPermission",value:function(){var e=this;this.messagingService.requestPermission().subscribe((function(t){return Object(f.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw console.log("token",t),new Error("user:".concat(this.auth.user.completeName," token:").concat(t));case 1:case"end":return e.stop()}}),e,this)})))}),(function(t){return Object(f.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error("error firebase",t);case 1:case"end":return e.stop()}}),e)})))}))}},{key:"deleteToken",value:function(){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.messagingService.deleteToken(),e.next=3,this.toastCtrl.create({message:"Token removed",duration:2e3});case 3:e.sent.present();case 4:case"end":return e.stop()}}),e,this)})))}},{key:"notificationsCount",get:function(){return this.auth.user&&this.auth.user.counts_not?this.auth.user.counts_not:0}}]),t}(),B.\u0275fac=function(e){return new(e||B)(p.Lb(c.rb),p.Lb(h.a),p.Lb(d.a),p.Lb(g.a),p.Lb(c.b),p.Lb(u.g),p.Lb(m.a),p.Lb(v.a),p.Lb(J),p.Lb(c.wb))},B.\u0275cmp=p.Fb({type:B,selectors:[["app-home"]],decls:53,vars:5,consts:[["slot","start"],["slot","secondary"],[3,"color","click",4,"ngIf"],["routerLink","/notifications","routerDirection","forward"],["name","notifications-outline"],["id","notifications-badge",4,"ngIf"],["side","start","menuId","custom","contentId","main",1,"my-custom-menu"],["routerLink","/my-profile","routerDirection","forward"],[2,"width","100%"],["lines","full",4,"ngIf"],["routerLink","/admin_home","routerDirection","forward",4,"ngIf"],["routerLink","/payment","routerDirection","forward",4,"ngIf"],["routerLink","/contact","routerDirection","forward"],[3,"click"],["id","main"],["slot","top","color","primary"],["slot","bottom"],["tab","results"],["name","clipboard-outline"],["tab","games"],["name","easel-outline"],["tab","teams"],["name","people-outline"],["tab","players"],["name","person-outline"],["tab","publications"],["name","happy-outline"],[3,"color","click"],["name","help-circle-outline"],["id","notifications-badge"],["lines","full"],["slot","start","name","moon"],["id","themeToggle","slot","end"],["routerLink","/admin_home","routerDirection","forward"],["routerLink","/payment","routerDirection","forward"]],template:function(e,t){1&e&&(p.Qb(0,"ion-header"),p.Qb(1,"ion-toolbar"),p.Qb(2,"ion-buttons",0),p.Mb(3,"ion-menu-button"),p.Pb(),p.Qb(4,"ion-title"),p.tc(5," F\xfatbol 8 Alem "),p.Pb(),p.Qb(6,"ion-buttons",1),p.sc(7,X,2,1,"ion-button",2),p.Qb(8,"ion-button",3),p.Mb(9,"ion-icon",4),p.sc(10,Y,2,1,"ion-badge",5),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Qb(11,"ion-menu",6),p.Qb(12,"ion-header"),p.Qb(13,"ion-toolbar"),p.Qb(14,"ion-title"),p.tc(15,"Men\xfa"),p.Pb(),p.Pb(),p.Pb(),p.Qb(16,"ion-content"),p.Qb(17,"ion-list"),p.Qb(18,"ion-item",7),p.Mb(19,"app-menu-user",8),p.Pb(),p.sc(20,N,5,0,"ion-item",9),p.sc(21,V,2,0,"ion-item",10),p.Qb(22,"ion-item",7),p.tc(23,"Mi perfil"),p.Pb(),p.sc(24,G,2,0,"ion-item",11),p.Qb(25,"ion-item",12),p.tc(26,"Contacto"),p.Pb(),p.Qb(27,"ion-item",13),p.Yb("click",(function(){return t.logout()})),p.Qb(28,"ion-label"),p.tc(29,"Cerrar Sesi\xf3n"),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Mb(30,"ion-router-outlet",14),p.Qb(31,"ion-tabs",15),p.Qb(32,"ion-tab-bar",16),p.Qb(33,"ion-tab-button",17),p.Mb(34,"ion-icon",18),p.Qb(35,"ion-label"),p.tc(36,"Resultado"),p.Pb(),p.Pb(),p.Qb(37,"ion-tab-button",19),p.Mb(38,"ion-icon",20),p.Qb(39,"ion-label"),p.tc(40,"Partidos"),p.Pb(),p.Pb(),p.Qb(41,"ion-tab-button",21),p.Mb(42,"ion-icon",22),p.Qb(43,"ion-label"),p.tc(44,"Equipos"),p.Pb(),p.Pb(),p.Qb(45,"ion-tab-button",23),p.Mb(46,"ion-icon",24),p.Qb(47,"ion-label"),p.tc(48,"Jugadores"),p.Pb(),p.Pb(),p.Qb(49,"ion-tab-button",25),p.Mb(50,"ion-icon",26),p.Qb(51,"ion-label"),p.tc(52,"3\xb0 Tiempo"),p.Pb(),p.Pb(),p.Pb(),p.Pb()),2&e&&(p.yb(7),p.fc("ngIf",t.chatService.isInit),p.yb(3),p.fc("ngIf",t.notificationsCount>0),p.yb(10),p.fc("ngIf",!1),p.yb(1),p.fc("ngIf",t.auth.isAdmin()),p.yb(3),p.fc("ngIf",t.paymentTeamService.isActive()))},directives:[c.x,c.jb,c.j,c.K,c.hb,u.k,c.i,c.tb,b.h,c.y,c.J,c.r,c.H,c.D,K,c.G,c.R,c.db,c.bb,c.cb,c.h,c.ib,c.c],styles:["#notification-button[_ngcontent-%COMP%]{position:relative;width:42px;top:1px;right:1px;overflow:visible!important}#notifications-badge[_ngcontent-%COMP%]{background-color:red;position:absolute;top:-3px;right:-3px;border-radius:100%}"]}),B),canActivate:[l.a],children:[{path:"teams",loadChildren:function(){return Promise.all([i.e(0),i.e(41)]).then(i.bind(null,"nHXg")).then((function(e){return e.TeamsPageModule}))}},{path:"results",loadChildren:function(){return Promise.all([i.e(1),i.e(0),i.e(40)]).then(i.bind(null,"3nJb")).then((function(e){return e.ResultsPageModule}))}},{path:"games",loadChildren:function(){return Promise.all([i.e(1),i.e(0),i.e(30)]).then(i.bind(null,"cGQY")).then((function(e){return e.GamesPageModule}))}},{path:"players",loadChildren:function(){return Promise.all([i.e(1),i.e(0),i.e(58)]).then(i.bind(null,"+q+I")).then((function(e){return e.PlayersPageModule}))}},{path:"publications",loadChildren:function(){return Promise.all([i.e(1),i.e(2),i.e(0),i.e(8)]).then(i.bind(null,"Jr79")).then((function(e){return e.PublicationsPageModule}))}},{path:"",redirectTo:"/home/results",pathMatch:"full"}]},{path:"publications",loadChildren:function(){return Promise.all([i.e(1),i.e(2),i.e(0),i.e(8)]).then(i.bind(null,"Jr79")).then((function(e){return e.PublicationsPageModule}))}}],ee=((Z=function t(){e(this,t)}).\u0275mod=p.Jb({type:Z}),Z.\u0275inj=p.Ib({factory:function(e){return new(e||Z)},imports:[[b.j.forChild($)],b.j]}),Z),te=i("j1ZV"),ne=((W=function t(){e(this,t)}).\u0275mod=p.Jb({type:W}),W.\u0275inj=p.Ib({factory:function(e){return new(e||W)},imports:[[u.b,s.a,c.kb,ee,te.a]]}),W)},j1ZV:function(t,n,r){"use strict";r.d(n,"a",(function(){return b}));var i=r("ofXK"),o=r("TEn/"),a=r("tyNb"),u=r("6g0+"),s=r("3Pt+"),c=r("fXoL"),b=function(){var t=function t(){e(this,t)};return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[i.b,o.kb.forRoot(),s.a,a.j,u.b]]}),t}()},qgph:function(t,r,i){"use strict";i.d(r,"a",(function(){return c}));var o=i("mrSG"),a=i("2Q27"),u=i("fXoL"),s=i("TEn/"),c=function(){var t=function(){function t(n){e(this,t),this.modalController=n,this.active=!1}return n(t,[{key:"setTeam",value:function(e){this.team=e}},{key:"isActive",value:function(){return this.active}},{key:"noPaid",value:function(){return!!this.active&&!this.team.paid}},{key:"showAlert",value:function(){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:a.a,componentProps:{id:this.team.id}});case 2:return(t=e.sent).onDidDismiss().then((function(e){console.log("return paid")})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Ub(s.nb))},t.\u0275prov=u.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();