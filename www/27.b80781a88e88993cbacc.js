(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"2Q27":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("mrSG"),o=n("9suA"),r=n("fXoL"),a=n("TEn/"),s=n("tyNb"),c=n("ofXK"),u=function(t){function e(e,n,i,o){var r=t.call(this,o,e)||this;return r.viewCtrl=e,r.router=n,r.navParams=i,r.id=i.get("id"),r}return Object(i.c)(e,t),e.prototype.ngOnInit=function(){},e.prototype.close=function(){this.viewCtrl.dismiss()},e.prototype.initObject=function(){},e.prototype.goPayment=function(){this.router.navigateByUrl("/payment/create/"+this.id),this.close()},e.\u0275fac=function(t){return new(t||e)(r.Lb(a.nb),r.Lb(s.g),r.Lb(a.pb),r.Lb(c.n))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-alert-create-team"]],features:[r.vb],decls:16,vars:0,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[1,"text"],[1,"ion-margin-top"],[1,"ion-float-right",3,"click"]],template:function(t,e){1&t&&(r.Qb(0,"ion-header"),r.Qb(1,"ion-toolbar"),r.Qb(2,"ion-title"),r.vc(3,"Pago pendiente"),r.Pb(),r.Qb(4,"ion-buttons",0),r.Qb(5,"ion-button",1),r.Yb("click",(function(){return e.close()})),r.Mb(6,"ion-icon",2),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(7,"ion-content"),r.Qb(8,"ion-card"),r.Qb(9,"ion-card-content"),r.Qb(10,"ion-text",3),r.vc(11," Para que los administradores de este equipo puedan modificar los datos (Fotos,nombre, jugadores, redes, sucesos de partidos , etc) es necesario abonar $500 mensualmente. "),r.Pb(),r.Mb(12,"br"),r.Qb(13,"div",4),r.Qb(14,"ion-button",5),r.Yb("click",(function(){return e.goPayment()})),r.vc(15," Realizar el pago"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb())},directives:[a.x,a.jb,a.hb,a.j,a.i,a.y,a.r,a.k,a.l,a.eb],styles:[".text[_ngcontent-%COMP%]{font-size:x-large}"]}),e}(o.a)},"99Un":function(t,e,n){"use strict";n.r(e),n.d(e,"HomePageModule",(function(){return tt}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),s=n("mrSG"),c=n("fXoL"),u=n("54vc"),b=n("VYYF"),l=n("y/q6"),d=n("qgph"),f=n("sjK5"),p=n("vkgz"),h=n("o0o1"),g=n.n(h),m=n("1OyB"),v=n("Jgta"),y=n("LRne"),P=n("EY2u"),j=n("z6cu"),O=n("HDdC"),k=n("GyhO"),w=n("tf+s"),Q=n("pxpQ"),T=n("eIep"),x=n("lJxs"),M=n("UXun"),A=n("aGrj"),C=n("JIr8"),I=n("5+tZ"),L=n("xbPD"),S=n("spgP"),U=new c.q("angularfire2.messaging.vapid-key"),D=new c.q("angularfire2.messaging.service-worker-registeration"),V=parseInt(v.a.SDK_VERSION,10)<8,q=function(){var t=function t(e,o,r,a,c,u){var b=this;Object(m.a)(this,t);var l=new S.d(a),d=u,f=Object(y.a)(void 0).pipe(Object(w.a)(l.outsideAngular),Object(Q.b)(l.insideAngular),Object(T.a)((function(){return Object(i.q)(r)?P.a:n.e(59).then(n.bind(null,"dB9c"))})),Object(x.a)((function(){return Object(S.g)(e,a,o)})),Object(T.a)((function(t){return Object(S.f)("".concat(t.name,".messaging"),"AngularFireMessaging",t,(function(){return Object(s.b)(b,void 0,void 0,g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.messaging(),!V){e.next=9;break}if(c&&n.usePublicVapidKey(c),!d){e.next=9;break}return e.t0=n,e.next=7,d;case 7:e.t1=e.sent,e.t0.useServiceWorker.call(e.t0,e.t1);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})))}),[c,d])})),Object(M.a)({bufferSize:1,refCount:!1}));this.requestPermission=f.pipe(Object(w.a)(l.outsideAngular),Object(Q.b)(l.insideAngular),Object(T.a)((function(t){return v.a.messaging.isSupported()?t.requestPermission():Object(j.a)("Not supported.")}))),this.getToken=f.pipe(Object(w.a)(l.outsideAngular),Object(Q.b)(l.insideAngular),Object(T.a)((function(t){return Object(s.b)(b,void 0,void 0,g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v.a.messaging.isSupported()||"granted"!==Notification.permission){e.next=20;break}if(!V){e.next=7;break}return e.next=4,t.getToken();case 4:return e.abrupt("return",e.sent);case 7:if(!d){e.next=13;break}return e.next=10,d;case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0=null;case 14:return n=e.t0,e.next=17,t.getToken({vapidKey:c,serviceWorkerRegistration:n});case 17:return e.abrupt("return",e.sent);case 18:e.next=21;break;case 20:return e.abrupt("return",null);case 21:case"end":return e.stop()}}),e)})))})));var p=new O.a((function(t){navigator.permissions.query({name:"notifications"}).then((function(e){e.onchange=function(){return t.next()}}))})),h=f.pipe(Object(w.a)(l.outsideAngular),Object(Q.b)(l.insideAngular),Object(A.a)(p),Object(A.a)(this.getToken));return this.tokenChanges=f.pipe(Object(w.a)(l.outsideAngular),Object(Q.b)(l.insideAngular),Object(T.a)((function(){return v.a.messaging.isSupported()?Object(k.a)(b.getToken,h):P.a}))),this.messages=f.pipe(Object(w.a)(l.outsideAngular),Object(Q.b)(l.insideAngular),Object(T.a)((function(t){return v.a.messaging.isSupported()?new O.a((function(e){return t.onMessage((function(t){return e.next(t)}),(function(t){return e.error(t)}),(function(){return e.complete()}))})):P.a}))),this.requestToken=Object(y.a)(void 0).pipe(Object(w.a)(l.outsideAngular),Object(Q.b)(l.insideAngular),Object(T.a)((function(){return b.requestPermission})),Object(C.a)((function(){return Object(y.a)(null)})),Object(I.a)((function(){return b.tokenChanges}))),this.deleteToken=function(t){return f.pipe(Object(w.a)(l.outsideAngular),Object(Q.b)(l.insideAngular),Object(T.a)((function(e){return e.deleteToken(t||void 0)})),Object(L.a)(!1))},Object(S.i)(this,f,a)};return t.\u0275fac=function(e){return new(e||t)(c.Ub(S.c),c.Ub(S.b,8),c.Ub(c.B),c.Ub(c.z),c.Ub(U,8),c.Ub(D,8))},t.\u0275prov=c.Hb({factory:function(){return new t(c.Ub(S.c),c.Ub(S.b,8),c.Ub(c.B),c.Ub(c.z),c.Ub(U,8),c.Ub(D,8))},token:t,providedIn:"any"}),t}(),_=function(){function t(t){this.afMessaging=t,this.token=null}return t.prototype.requestPermission=function(){return this.afMessaging.requestToken.pipe(Object(p.a)((function(t){console.log("Store token to server: ",t)})))},t.prototype.getMessages=function(){return this.afMessaging.messages},t.prototype.deleteToken=function(){this.token&&(this.afMessaging.deleteToken(this.token),this.token=null)},t.\u0275fac=function(e){return new(e||t)(c.Ub(q))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),E=n("VZH3"),G=n("dwY0");function J(t,e){1&t&&(c.Qb(0,"div",1),c.Mb(1,"ion-icon",2),c.vc(2," Est\xe1s sin conexi\xf3n :(\n"),c.Pb())}var z=function(){function t(t){this.networService=t}return t.prototype.ngOnInit=function(){return Object(s.b)(this,void 0,void 0,(function(){return Object(s.d)(this,(function(t){return[2]}))}))},t.\u0275fac=function(e){return new(e||t)(c.Lb(G.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-offline"]],decls:1,vars:1,consts:[["class","offline ion-text-center",4,"ngIf"],[1,"offline","ion-text-center"],["name","cloud-offline-outline"]],template:function(t,e){1&t&&c.uc(0,J,3,0,"div",0),2&t&&c.gc("ngIf",!e.networService.appIsOnline)},directives:[i.l,r.y],styles:[".offline[_ngcontent-%COMP%]{background:red;color:#fff;padding:2px}"]}),t}(),F=n("zYHx");function H(t,e){if(1&t&&(c.Qb(0,"ion-card"),c.Qb(1,"ion-card-content"),c.Qb(2,"ion-thumbnail",1),c.Mb(3,"ion-img",2),c.Pb(),c.Pb(),c.Qb(4,"ion-card-header"),c.Qb(5,"ion-card-title",3),c.vc(6),c.Pb(),c.Qb(7,"ion-card-subtitle",3),c.vc(8),c.Pb(),c.Pb(),c.Pb()),2&t){var n=c.ac();c.yb(3),c.gc("src",n.authUser.user&&n.authUser.user.photo?n.authUser.user.photo.urlComplete:n.pathImages.images.profile_user),c.yb(3),c.yc(" ",n.authUser.user.last_name," ",n.authUser.user.first_name," "),c.yb(2),c.xc(" ",n.authUser.user.email," ")}}var R=function(){function t(t,e){this.authUser=t,this.pathImages=e}return t.prototype.ngOnInit=function(){return Object(s.b)(this,void 0,void 0,(function(){return Object(s.d)(this,(function(t){return[2]}))}))},t.\u0275fac=function(e){return new(e||t)(c.Lb(l.a),c.Lb(F.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-menu-user"]],decls:1,vars:1,consts:[[4,"ngIf"],["slot","center",1,"content-image","center"],[1,"image","center",2,"border-radius","50%","background-position","center center","background-size","cover",3,"src"],[1,"ion-text-center"]],template:function(t,e){1&t&&c.uc(0,H,9,4,"ion-card",0),2&t&&c.gc("ngIf",e.authUser.user)},directives:[i.l,r.k,r.l,r.gb,r.z,r.m,r.o,r.n],styles:[".center[_ngcontent-%COMP%]{margin:auto}.content-image[_ngcontent-%COMP%]{width:100px;height:90px}.image[_ngcontent-%COMP%]{width:100px;height:100px}"]}),t}();function B(t,e){if(1&t){var n=c.Rb();c.Qb(0,"ion-button",29),c.Yb("click",(function(){return c.oc(n),c.ac().chatService.toggle()})),c.Mb(1,"ion-icon",30),c.Pb()}if(2&t){var i=c.ac();c.gc("color",i.chatService.isVisible?"success":"")}}function X(t,e){if(1&t&&(c.Qb(0,"ion-badge",31),c.vc(1),c.Pb()),2&t){var n=c.ac();c.yb(1),c.wc(n.notificationsCount)}}function Y(t,e){1&t&&(c.Qb(0,"ion-item",32),c.Mb(1,"ion-icon",33),c.Qb(2,"ion-label"),c.vc(3," Toggle Dark Theme "),c.Pb(),c.Mb(4,"ion-toggle",34),c.Pb())}function K(t,e){1&t&&(c.Qb(0,"ion-item",35),c.vc(1,"Administrar APP"),c.Pb())}function N(t,e){1&t&&(c.Qb(0,"ion-item",36),c.vc(1,"Mis pagos"),c.Pb())}var Z=[{path:"",component:function(){function t(t,e,n,i,o,r,a,s,c,u,b){this.platform=t,this.splashScreen=e,this.statusBar=n,this.auth=i,this.alertController=o,this._location=r,this.paymentTeamService=a,this.chatService=s,this.messagingService=c,this.toastCtrl=u,this.shareService=b,this.currentPageTitle="Dashboard",this.appPages=[{title:"Dashboard",url:"",icon:"easel"},{title:"Timeline",url:"/timeline",icon:"film"},{title:"Settings",url:"/settings",icon:"settings"}],this.initializeApp(),this.listenForMessages(),this.requestPermission()}return t.prototype.ngOnInit=function(){return Object(s.b)(this,void 0,void 0,(function(){return Object(s.d)(this,(function(t){switch(t.label){case 0:return[4,this.auth.updateUserApi()];case 1:return t.sent(),[2]}}))}))},t.prototype.initializeApp=function(){var t=this;this.platform.ready().then((function(){t.statusBar.styleDefault(),t.splashScreen.hide(),t.loadTheme()})),this.chatService.init(),this.shareService.addThisInit()},t.prototype.loadTheme=function(){},t.prototype.loadApp=function(){this.checkToggle(this.prefersDark.matches)},t.prototype.checkToggle=function(t){this.toggle.checked=t},t.prototype.logout=function(){this.auth.logout()},Object.defineProperty(t.prototype,"notificationsCount",{get:function(){return this.auth.user&&this.auth.user.counts_not?this.auth.user.counts_not:0},enumerable:!1,configurable:!0}),t.prototype.showExitConfirm=function(){this.alertController.create({header:"App termination",message:"Do you want to close the app?",backdropDismiss:!1,buttons:[{text:"Stay",role:"cancel",handler:function(){console.log("Application exit prevented!")}},{text:"Exit",handler:function(){navigator.app.exitApp()}}]}).then((function(t){t.present()}))},t.prototype.ionViewDidLeave=function(){console.log("ionViewDidLeave"),this.chatService.hide()},t.prototype.listenForMessages=function(){var t=this;this.messagingService.getMessages().subscribe((function(e){return Object(s.b)(t,void 0,void 0,(function(){return Object(s.d)(this,(function(t){switch(t.label){case 0:return console.log("msj firebase",e),[4,this.alertController.create({header:e.notification.title,subHeader:e.notification.body,message:e.data.info,buttons:["OK"]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}}))}))}))},t.prototype.requestPermission=function(){var t=this;this.messagingService.requestPermission().subscribe((function(e){return Object(s.b)(t,void 0,void 0,(function(){return Object(s.d)(this,(function(t){return this.auth.setTokenMessaging(e),console.log("token",e),[2]}))}))}),(function(e){return Object(s.b)(t,void 0,void 0,(function(){return Object(s.d)(this,(function(t){return console.error("error firebase",e),[2]}))}))}))},t.prototype.deleteToken=function(){return Object(s.b)(this,void 0,void 0,(function(){return Object(s.d)(this,(function(t){switch(t.label){case 0:return this.messagingService.deleteToken(),[4,this.toastCtrl.create({message:"Token removed",duration:2e3})];case 1:return t.sent().present(),[2]}}))}))},t.\u0275fac=function(e){return new(e||t)(c.Lb(r.rb),c.Lb(u.a),c.Lb(b.a),c.Lb(l.a),c.Lb(r.b),c.Lb(i.h),c.Lb(d.a),c.Lb(f.a),c.Lb(_),c.Lb(r.wb),c.Lb(E.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-home"]],decls:59,vars:5,consts:[["slot","start"],["slot","secondary"],[3,"color","click",4,"ngIf"],["routerLink","/notifications","routerDirection","forward"],["name","notifications-outline"],["id","notifications-badge",4,"ngIf"],["side","start","menuId","custom","contentId","main",1,"my-custom-menu"],["routerLink","/my-profile","routerDirection","forward"],[2,"width","100%"],["lines","full",4,"ngIf"],["routerLink","/admin_home","routerDirection","forward",4,"ngIf"],["routerLink","/list-fields","routerDirection","forward"],["routerLink","/payment","routerDirection","forward",4,"ngIf"],["routerLink","/contact","routerDirection","forward"],[2,"cursor","pointer",3,"click"],[1,"ion-text-center","ion-padding","bg-l2"],["id","main"],["slot","top","color","primary"],["slot","bottom"],["tab","results"],["name","clipboard-outline"],["tab","games"],["name","easel-outline"],["tab","teams"],["name","people-outline"],["tab","players"],["name","person-outline"],["tab","publications"],["name","happy-outline"],[3,"color","click"],["name","help-circle-outline"],["id","notifications-badge"],["lines","full"],["slot","start","name","moon"],["id","themeToggle","slot","end"],["routerLink","/admin_home","routerDirection","forward"],["routerLink","/payment","routerDirection","forward"]],template:function(t,e){1&t&&(c.Qb(0,"ion-header"),c.Mb(1,"app-offline"),c.Qb(2,"ion-toolbar"),c.Qb(3,"ion-buttons",0),c.Mb(4,"ion-menu-button"),c.Pb(),c.Qb(5,"ion-title"),c.vc(6," F\xfatbol 8 Alem "),c.Pb(),c.Qb(7,"ion-buttons",1),c.uc(8,B,2,1,"ion-button",2),c.Qb(9,"ion-button",3),c.Mb(10,"ion-icon",4),c.uc(11,X,2,1,"ion-badge",5),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(12,"ion-menu",6),c.Qb(13,"ion-header"),c.Qb(14,"ion-toolbar"),c.Qb(15,"ion-title"),c.vc(16,"Men\xfa"),c.Pb(),c.Pb(),c.Pb(),c.Qb(17,"ion-content"),c.Qb(18,"ion-list"),c.Qb(19,"ion-item",7),c.Mb(20,"app-menu-user",8),c.Pb(),c.uc(21,Y,5,0,"ion-item",9),c.uc(22,K,2,0,"ion-item",10),c.Qb(23,"ion-item",7),c.vc(24,"Mi perfil"),c.Pb(),c.Qb(25,"ion-item",11),c.vc(26,"Canchas"),c.Pb(),c.uc(27,N,2,0,"ion-item",12),c.Qb(28,"ion-item",13),c.vc(29,"Contacto"),c.Pb(),c.Qb(30,"ion-item",14),c.Yb("click",(function(){return e.logout()})),c.Qb(31,"ion-label"),c.vc(32,"Cerrar Sesi\xf3n"),c.Pb(),c.Pb(),c.Qb(33,"div",15),c.Qb(34,"ion-text"),c.vc(35,"Versi\xf3n: 1.14 "),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Mb(36,"ion-router-outlet",16),c.Qb(37,"ion-tabs",17),c.Qb(38,"ion-tab-bar",18),c.Qb(39,"ion-tab-button",19),c.Mb(40,"ion-icon",20),c.Qb(41,"ion-label"),c.vc(42,"Resultado"),c.Pb(),c.Pb(),c.Qb(43,"ion-tab-button",21),c.Mb(44,"ion-icon",22),c.Qb(45,"ion-label"),c.vc(46,"Partidos"),c.Pb(),c.Pb(),c.Qb(47,"ion-tab-button",23),c.Mb(48,"ion-icon",24),c.Qb(49,"ion-label"),c.vc(50,"Equipos"),c.Pb(),c.Pb(),c.Qb(51,"ion-tab-button",25),c.Mb(52,"ion-icon",26),c.Qb(53,"ion-label"),c.vc(54,"Jugadores"),c.Pb(),c.Pb(),c.Qb(55,"ion-tab-button",27),c.Mb(56,"ion-icon",28),c.Qb(57,"ion-label"),c.vc(58,"3\xb0 Tiempo"),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&t&&(c.yb(8),c.gc("ngIf",e.chatService.isInit),c.yb(3),c.gc("ngIf",e.notificationsCount>0),c.yb(10),c.gc("ngIf",!1),c.yb(1),c.gc("ngIf",e.auth.isAdmin()),c.yb(5),c.gc("ngIf",e.paymentTeamService.isActive()))},directives:[r.x,z,r.jb,r.j,r.K,r.hb,i.l,r.i,r.tb,a.h,r.y,r.J,r.r,r.H,r.D,R,r.G,r.eb,r.R,r.db,r.bb,r.cb,r.h,r.ib,r.c],styles:["#notification-button[_ngcontent-%COMP%]{position:relative;width:42px;top:1px;right:1px;overflow:visible!important}#notifications-badge[_ngcontent-%COMP%]{background-color:red;position:absolute;top:-3px;right:-3px;border-radius:100%}"]}),t}(),children:[{path:"teams",loadChildren:function(){return Promise.all([n.e(0),n.e(50)]).then(n.bind(null,"nHXg")).then((function(t){return t.TeamsPageModule}))}},{path:"results",loadChildren:function(){return Promise.all([n.e(0),n.e(49)]).then(n.bind(null,"3nJb")).then((function(t){return t.ResultsPageModule}))}},{path:"games",loadChildren:function(){return Promise.all([n.e(2),n.e(5),n.e(10),n.e(0),n.e(76)]).then(n.bind(null,"cGQY")).then((function(t){return t.GamesPageModule}))}},{path:"players",loadChildren:function(){return Promise.all([n.e(0),n.e(77)]).then(n.bind(null,"+q+I")).then((function(t){return t.PlayersPageModule}))}},{path:"publications",loadChildren:function(){return Promise.all([n.e(1),n.e(0),n.e(14)]).then(n.bind(null,"Jr79")).then((function(t){return t.PublicationsPageModule}))}},{path:"",redirectTo:"/home/results",pathMatch:"full"}]},{path:"publications",loadChildren:function(){return Promise.all([n.e(1),n.e(0),n.e(14)]).then(n.bind(null,"Jr79")).then((function(t){return t.PublicationsPageModule}))}}],W=function(){function t(){}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[a.j.forChild(Z)],a.j]}),t}(),$=n("j1ZV"),tt=function(){function t(){}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[i.b,o.a,r.kb,W,$.a]]}),t}()},VZH3:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("mrSG"),o=n("8xVP"),r=n("AytR"),a=n("fXoL"),s=n("G/jy"),c=n("vuFD"),u=n("m/P+"),b=n("2Rin"),l=function(){function t(t,e,n,i){this.requestService=t,this.dialogService=e,this.iab=n,this.util=i,this.addThisVisible=!1,this.loadedAddThis=!1,this.scriptLoaded=null,this.addthis_share={url:"",title:"",description:"",media:""},this.modelGame=new o.a("Game",t),this.loadedAddThis||this.addThisInit()}return t.prototype.goTo=function(t){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(e){return this.iab.create(t,"",{fullscreen:"yes"}),[2]}))}))},t.prototype.shareGameFacebook=function(t){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(e){return this.iab.create(r.a.server_url_base+"/shareResult/"+t,"",{fullscreen:"yes"}),[2]}))}))},t.prototype.addThisInit=function(){var t=this;try{this.addMeta();var e=document.createElement("script");e.type="text/javascript",e.setAttribute("async","async"),e.src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6169932652121667",e.onload=function(){console.log("load AddThis"),t.loadedAddThis=!0,t.scriptLoaded=t,document.body.classList.add("share-disabled")},document.body.appendChild(e)}catch(n){console.error(n)}},t.prototype.addMeta=function(){var t=document.createElement("meta");t.setAttribute("property","og:url"),t.content=document.location,document.getElementsByTagName("head")[0].appendChild(t);var e=document.createElement("meta");e.setAttribute("property","og:title"),e.content="Title lucas",document.getElementsByTagName("head")[0].appendChild(e),console.log("add meta")},t.prototype.toggleAddThis=function(){console.log("toggle"),this.addThisVisible=!this.addThisVisible,this.updateVisibiliti()},t.prototype.showAddThis=function(){this.addThisVisible=!0,this.updateVisibiliti()},t.prototype.hideAddThis=function(){this.addThisVisible=!1,this.updateVisibiliti()},t.prototype.updateVisibiliti=function(){if(this.loadedAddThis&&document.getElementsByClassName("addthis-smartlayers")){if(window.addthis){var t=window.addthis;t.layers.refresh(),t.toolbox()}this.addThisVisible?document.body.classList.remove("share-disabled"):document.body.classList.add("share-disabled")}},t.\u0275fac=function(e){return new(e||t)(a.Ub(s.a),a.Ub(c.a),a.Ub(u.a),a.Ub(b.a))},t.\u0275prov=a.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},j1ZV:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("ofXK"),o=n("TEn/"),r=n("tyNb"),a=n("6g0+"),s=n("3Pt+"),c=n("fXoL"),u=function(){function t(){}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[i.b,o.kb.forRoot(),s.a,r.j,a.b]]}),t}()},qgph:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("mrSG"),o=n("2Q27"),r=n("fXoL"),a=n("TEn/"),s=function(){function t(t){this.modalController=t,this.active=!1}return t.prototype.setTeam=function(t){this.team=t},t.prototype.isActive=function(){return this.active},t.prototype.noPaid=function(){return!!this.active&&!this.team.paid},t.prototype.showAlert=function(){return Object(i.b)(this,void 0,void 0,(function(){var t;return Object(i.d)(this,(function(e){switch(e.label){case 0:return[4,this.modalController.create({component:o.a,componentProps:{id:this.team.id}})];case 1:return(t=e.sent()).onDidDismiss().then((function(t){console.log("return paid")})),[4,t.present()];case 2:return[2,e.sent()]}}))}))},t.\u0275fac=function(e){return new(e||t)(r.Ub(a.nb))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);