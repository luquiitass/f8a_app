(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"2Q27":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("9suA"),o=n("fXoL"),s=n("TEn/"),r=n("tyNb"),a=n("ofXK");let c=(()=>{class e extends i.a{constructor(e,t,n,i){super(i,e),this.viewCtrl=e,this.router=t,this.navParams=n,this.id=n.get("id")}ngOnInit(){}close(){this.viewCtrl.dismiss()}initObject(){}goPayment(){this.router.navigateByUrl("/payment/create/"+this.id),this.close()}}return e.\u0275fac=function(t){return new(t||e)(o.Lb(s.nb),o.Lb(r.g),o.Lb(s.pb),o.Lb(a.m))},e.\u0275cmp=o.Fb({type:e,selectors:[["app-alert-create-team"]],features:[o.vb],decls:16,vars:0,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[1,"text"],[1,"ion-margin-top"],[1,"ion-float-right",3,"click"]],template:function(e,t){1&e&&(o.Qb(0,"ion-header"),o.Qb(1,"ion-toolbar"),o.Qb(2,"ion-title"),o.tc(3,"Pago pendiente"),o.Pb(),o.Qb(4,"ion-buttons",0),o.Qb(5,"ion-button",1),o.Yb("click",(function(){return t.close()})),o.Mb(6,"ion-icon",2),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Qb(7,"ion-content"),o.Qb(8,"ion-card"),o.Qb(9,"ion-card-content"),o.Qb(10,"ion-text",3),o.tc(11," Para que los administradores de este equipo puedan modificar los datos (Fotos,nombre, jugadores, redes, sucesos de partidos , etc) es necesario abonar $500 mensualmente. "),o.Pb(),o.Mb(12,"br"),o.Qb(13,"div",4),o.Qb(14,"ion-button",5),o.Yb("click",(function(){return t.goPayment()})),o.tc(15," Realizar el pago"),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb())},directives:[s.x,s.jb,s.hb,s.j,s.i,s.y,s.r,s.k,s.l,s.eb],styles:[".text[_ngcontent-%COMP%]{font-size:x-large}"]}),e})()},"99Un":function(e,t,n){"use strict";n.r(t),n.d(t,"HomePageModule",(function(){return V}));var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),a=n("UTcu"),c=n("mrSG"),b=n("fXoL"),u=n("54vc"),l=n("VYYF"),d=n("y/q6"),h=n("qgph"),g=n("sjK5"),p=n("vkgz"),m=n("Jgta"),f=n("LRne"),P=n("EY2u"),v=n("z6cu"),y=n("HDdC"),j=n("GyhO"),k=n("tf+s"),O=n("pxpQ"),Q=n("eIep"),w=n("lJxs"),M=n("UXun"),T=n("aGrj"),A=n("JIr8"),C=n("5+tZ"),I=n("xbPD"),L=n("spgP");const x=new b.q("angularfire2.messaging.vapid-key"),S=new b.q("angularfire2.messaging.service-worker-registeration"),U=parseInt(m.a.SDK_VERSION,10)<8;let D=(()=>{class e{constructor(e,t,o,s,r,a){const b=new L.d(s),u=a,l=Object(f.a)(void 0).pipe(Object(k.a)(b.outsideAngular),Object(O.b)(b.insideAngular),Object(Q.a)(()=>Object(i.p)(o)?P.a:n.e(48).then(n.bind(null,"dB9c"))),Object(w.a)(()=>Object(L.g)(e,s,t)),Object(Q.a)(e=>Object(L.f)(e.name+".messaging","AngularFireMessaging",e,()=>Object(c.b)(this,void 0,void 0,(function*(){const t=e.messaging();return U&&(r&&t.usePublicVapidKey(r),u&&t.useServiceWorker(yield u)),t})),[r,u])),Object(M.a)({bufferSize:1,refCount:!1}));this.requestPermission=l.pipe(Object(k.a)(b.outsideAngular),Object(O.b)(b.insideAngular),Object(Q.a)(e=>m.a.messaging.isSupported()?e.requestPermission():Object(v.a)("Not supported."))),this.getToken=l.pipe(Object(k.a)(b.outsideAngular),Object(O.b)(b.insideAngular),Object(Q.a)(e=>Object(c.b)(this,void 0,void 0,(function*(){if(m.a.messaging.isSupported()&&"granted"===Notification.permission){if(U)return yield e.getToken();{const t=u?yield u:null;return yield e.getToken({vapidKey:r,serviceWorkerRegistration:t})}}return null}))));const d=new y.a(e=>{navigator.permissions.query({name:"notifications"}).then(t=>{t.onchange=()=>e.next()})}),h=l.pipe(Object(k.a)(b.outsideAngular),Object(O.b)(b.insideAngular),Object(T.a)(d),Object(T.a)(this.getToken));return this.tokenChanges=l.pipe(Object(k.a)(b.outsideAngular),Object(O.b)(b.insideAngular),Object(Q.a)(()=>m.a.messaging.isSupported()?Object(j.a)(this.getToken,h):P.a)),this.messages=l.pipe(Object(k.a)(b.outsideAngular),Object(O.b)(b.insideAngular),Object(Q.a)(e=>m.a.messaging.isSupported()?new y.a(t=>e.onMessage(e=>t.next(e),e=>t.error(e),()=>t.complete())):P.a)),this.requestToken=Object(f.a)(void 0).pipe(Object(k.a)(b.outsideAngular),Object(O.b)(b.insideAngular),Object(Q.a)(()=>this.requestPermission),Object(A.a)(()=>Object(f.a)(null)),Object(C.a)(()=>this.tokenChanges)),this.deleteToken=e=>l.pipe(Object(k.a)(b.outsideAngular),Object(O.b)(b.insideAngular),Object(Q.a)(t=>t.deleteToken(e||void 0)),Object(I.a)(!1)),Object(L.i)(this,l,s)}}return e.\u0275fac=function(t){return new(t||e)(b.Ub(L.c),b.Ub(L.b,8),b.Ub(b.B),b.Ub(b.z),b.Ub(x,8),b.Ub(S,8))},e.\u0275prov=b.Hb({factory:function(){return new e(b.Ub(L.c),b.Ub(L.b,8),b.Ub(b.B),b.Ub(b.z),b.Ub(x,8),b.Ub(S,8))},token:e,providedIn:"any"}),e})(),q=(()=>{class e{constructor(e){this.afMessaging=e,this.token=null}requestPermission(){return this.afMessaging.requestToken.pipe(Object(p.a)(e=>{console.log("Store token to server: ",e)}))}getMessages(){return this.afMessaging.messages}deleteToken(){this.token&&(this.afMessaging.deleteToken(this.token),this.token=null)}}return e.\u0275fac=function(t){return new(t||e)(b.Ub(D))},e.\u0275prov=b.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var _=n("zYHx");function J(e,t){if(1&e&&(b.Qb(0,"ion-card"),b.Qb(1,"ion-card-content"),b.Qb(2,"ion-thumbnail",1),b.Mb(3,"ion-img",2),b.Pb(),b.Pb(),b.Qb(4,"ion-card-header"),b.Qb(5,"ion-card-title",3),b.tc(6),b.Pb(),b.Qb(7,"ion-card-subtitle",3),b.tc(8),b.Pb(),b.Pb(),b.Pb()),2&e){const e=b.ac();b.yb(3),b.fc("src",e.authUser.user&&e.authUser.user.photo?e.authUser.user.photo.urlComplete:e.pathImages.images.profile_user),b.yb(3),b.wc(" ",e.authUser.user.last_name," ",e.authUser.user.first_name," "),b.yb(2),b.vc(" ",e.authUser.user.email," ")}}let z=(()=>{class e{constructor(e,t){this.authUser=e,this.pathImages=t}ngOnInit(){return Object(c.b)(this,void 0,void 0,(function*(){}))}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(d.a),b.Lb(_.a))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-menu-user"]],decls:1,vars:1,consts:[[4,"ngIf"],["slot","center",1,"content-image","center"],[1,"image","center",2,"border-radius","50%","background-position","center center","background-size","cover",3,"src"],[1,"ion-text-center"]],template:function(e,t){1&e&&b.sc(0,J,9,4,"ion-card",0),2&e&&b.fc("ngIf",t.authUser.user)},directives:[i.k,s.k,s.l,s.gb,s.z,s.m,s.o,s.n],styles:[".center[_ngcontent-%COMP%]{margin:auto}.content-image[_ngcontent-%COMP%]{width:100px;height:90px}.image[_ngcontent-%COMP%]{width:100px;height:100px}"]}),e})();function E(e,t){if(1&e){const e=b.Rb();b.Qb(0,"ion-button",27),b.Yb("click",(function(){return b.nc(e),b.ac().chatService.toggle()})),b.Mb(1,"ion-icon",28),b.Pb()}if(2&e){const e=b.ac();b.fc("color",e.chatService.isVisible?"success":"")}}function F(e,t){if(1&e&&(b.Qb(0,"ion-badge",29),b.tc(1),b.Pb()),2&e){const e=b.ac();b.yb(1),b.uc(e.notificationsCount)}}function H(e,t){1&e&&(b.Qb(0,"ion-item",30),b.Mb(1,"ion-icon",31),b.Qb(2,"ion-label"),b.tc(3," Toggle Dark Theme "),b.Pb(),b.Mb(4,"ion-toggle",32),b.Pb())}function K(e,t){1&e&&(b.Qb(0,"ion-item",33),b.tc(1,"Administrar APP"),b.Pb())}function R(e,t){1&e&&(b.Qb(0,"ion-item",34),b.tc(1,"Mis pagos"),b.Pb())}const X=[{path:"",component:(()=>{class e{constructor(e,t,n,i,o,s,r,a,c,b){this.platform=e,this.splashScreen=t,this.statusBar=n,this.auth=i,this.alertController=o,this._location=s,this.paymentTeamService=r,this.chatService=a,this.messagingService=c,this.toastCtrl=b,this.currentPageTitle="Dashboard",this.appPages=[{title:"Dashboard",url:"",icon:"easel"},{title:"Timeline",url:"/timeline",icon:"film"},{title:"Settings",url:"/settings",icon:"settings"}],this.initializeApp(),this.listenForMessages(),this.requestPermission()}ngOnInit(){return Object(c.b)(this,void 0,void 0,(function*(){yield this.auth.updateUserApi()}))}initializeApp(){this.platform.ready().then(()=>{this.statusBar.styleDefault(),this.splashScreen.hide(),this.loadTheme()}),this.chatService.init(),setInterval(()=>{this.auth.user&&this.auth.userModel.api_functionModel(this.auth.user.id,"changesNotifications").subscribe(e=>{if("success"==e.status){let t=e.data.counts_not;t>this.auth.user.counts_not&&(this.auth.user.counts_not=t,this.auth.user.teams=e.data.teams,this.auth.user.player=e.data.player,this.auth.saveUser())}})},5e4)}loadTheme(){}loadApp(){this.checkToggle(this.prefersDark.matches)}checkToggle(e){this.toggle.checked=e}logout(){this.auth.logout()}get notificationsCount(){return this.auth.user&&this.auth.user.counts_not?this.auth.user.counts_not:0}showExitConfirm(){this.alertController.create({header:"App termination",message:"Do you want to close the app?",backdropDismiss:!1,buttons:[{text:"Stay",role:"cancel",handler:()=>{console.log("Application exit prevented!")}},{text:"Exit",handler:()=>{navigator.app.exitApp()}}]}).then(e=>{e.present()})}ionViewDidLeave(){console.log("ionViewDidLeave"),this.chatService.hide()}listenForMessages(){this.messagingService.getMessages().subscribe(e=>Object(c.b)(this,void 0,void 0,(function*(){console.log("msj firebase",e);const t=yield this.alertController.create({header:e.notification.title,subHeader:e.notification.body,message:e.data.info,buttons:["OK"]});yield t.present()})))}requestPermission(){this.messagingService.requestPermission().subscribe(e=>Object(c.b)(this,void 0,void 0,(function*(){throw console.log("token",e),new Error(`user:${this.auth.user.completeName} token:${e}`)})),e=>Object(c.b)(this,void 0,void 0,(function*(){console.error("error firebase",e)})))}deleteToken(){return Object(c.b)(this,void 0,void 0,(function*(){this.messagingService.deleteToken(),(yield this.toastCtrl.create({message:"Token removed",duration:2e3})).present()}))}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(s.rb),b.Lb(u.a),b.Lb(l.a),b.Lb(d.a),b.Lb(s.b),b.Lb(i.g),b.Lb(h.a),b.Lb(g.a),b.Lb(q),b.Lb(s.wb))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-home"]],decls:53,vars:5,consts:[["slot","start"],["slot","secondary"],[3,"color","click",4,"ngIf"],["routerLink","/notifications","routerDirection","forward"],["name","notifications-outline"],["id","notifications-badge",4,"ngIf"],["side","start","menuId","custom","contentId","main",1,"my-custom-menu"],["routerLink","/my-profile","routerDirection","forward"],[2,"width","100%"],["lines","full",4,"ngIf"],["routerLink","/admin_home","routerDirection","forward",4,"ngIf"],["routerLink","/payment","routerDirection","forward",4,"ngIf"],["routerLink","/contact","routerDirection","forward"],[3,"click"],["id","main"],["slot","top","color","primary"],["slot","bottom"],["tab","results"],["name","clipboard-outline"],["tab","games"],["name","easel-outline"],["tab","teams"],["name","people-outline"],["tab","players"],["name","person-outline"],["tab","publications"],["name","happy-outline"],[3,"color","click"],["name","help-circle-outline"],["id","notifications-badge"],["lines","full"],["slot","start","name","moon"],["id","themeToggle","slot","end"],["routerLink","/admin_home","routerDirection","forward"],["routerLink","/payment","routerDirection","forward"]],template:function(e,t){1&e&&(b.Qb(0,"ion-header"),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-buttons",0),b.Mb(3,"ion-menu-button"),b.Pb(),b.Qb(4,"ion-title"),b.tc(5," F\xfatbol 8 Alem "),b.Pb(),b.Qb(6,"ion-buttons",1),b.sc(7,E,2,1,"ion-button",2),b.Qb(8,"ion-button",3),b.Mb(9,"ion-icon",4),b.sc(10,F,2,1,"ion-badge",5),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(11,"ion-menu",6),b.Qb(12,"ion-header"),b.Qb(13,"ion-toolbar"),b.Qb(14,"ion-title"),b.tc(15,"Men\xfa"),b.Pb(),b.Pb(),b.Pb(),b.Qb(16,"ion-content"),b.Qb(17,"ion-list"),b.Qb(18,"ion-item",7),b.Mb(19,"app-menu-user",8),b.Pb(),b.sc(20,H,5,0,"ion-item",9),b.sc(21,K,2,0,"ion-item",10),b.Qb(22,"ion-item",7),b.tc(23,"Mi perfil"),b.Pb(),b.sc(24,R,2,0,"ion-item",11),b.Qb(25,"ion-item",12),b.tc(26,"Contacto"),b.Pb(),b.Qb(27,"ion-item",13),b.Yb("click",(function(){return t.logout()})),b.Qb(28,"ion-label"),b.tc(29,"Cerrar Sesi\xf3n"),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Mb(30,"ion-router-outlet",14),b.Qb(31,"ion-tabs",15),b.Qb(32,"ion-tab-bar",16),b.Qb(33,"ion-tab-button",17),b.Mb(34,"ion-icon",18),b.Qb(35,"ion-label"),b.tc(36,"Resultado"),b.Pb(),b.Pb(),b.Qb(37,"ion-tab-button",19),b.Mb(38,"ion-icon",20),b.Qb(39,"ion-label"),b.tc(40,"Partidos"),b.Pb(),b.Pb(),b.Qb(41,"ion-tab-button",21),b.Mb(42,"ion-icon",22),b.Qb(43,"ion-label"),b.tc(44,"Equipos"),b.Pb(),b.Pb(),b.Qb(45,"ion-tab-button",23),b.Mb(46,"ion-icon",24),b.Qb(47,"ion-label"),b.tc(48,"Jugadores"),b.Pb(),b.Pb(),b.Qb(49,"ion-tab-button",25),b.Mb(50,"ion-icon",26),b.Qb(51,"ion-label"),b.tc(52,"3\xb0 Tiempo"),b.Pb(),b.Pb(),b.Pb(),b.Pb()),2&e&&(b.yb(7),b.fc("ngIf",t.chatService.isInit),b.yb(3),b.fc("ngIf",t.notificationsCount>0),b.yb(10),b.fc("ngIf",!1),b.yb(1),b.fc("ngIf",t.auth.isAdmin()),b.yb(3),b.fc("ngIf",t.paymentTeamService.isActive()))},directives:[s.x,s.jb,s.j,s.K,s.hb,i.k,s.i,s.tb,r.h,s.y,s.J,s.r,s.H,s.D,z,s.G,s.R,s.db,s.bb,s.cb,s.h,s.ib,s.c],styles:["#notification-button[_ngcontent-%COMP%]{position:relative;width:42px;top:1px;right:1px;overflow:visible!important}#notifications-badge[_ngcontent-%COMP%]{background-color:red;position:absolute;top:-3px;right:-3px;border-radius:100%}"]}),e})(),canActivate:[a.a],children:[{path:"teams",loadChildren:()=>Promise.all([n.e(0),n.e(41)]).then(n.bind(null,"nHXg")).then(e=>e.TeamsPageModule)},{path:"results",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(40)]).then(n.bind(null,"3nJb")).then(e=>e.ResultsPageModule)},{path:"games",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(30)]).then(n.bind(null,"cGQY")).then(e=>e.GamesPageModule)},{path:"players",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(58)]).then(n.bind(null,"+q+I")).then(e=>e.PlayersPageModule)},{path:"publications",loadChildren:()=>Promise.all([n.e(1),n.e(2),n.e(0),n.e(8)]).then(n.bind(null,"Jr79")).then(e=>e.PublicationsPageModule)},{path:"",redirectTo:"/home/results",pathMatch:"full"}]},{path:"publications",loadChildren:()=>Promise.all([n.e(1),n.e(2),n.e(0),n.e(8)]).then(n.bind(null,"Jr79")).then(e=>e.PublicationsPageModule)}];let Y=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[r.j.forChild(X)],r.j]}),e})();var N=n("j1ZV");let V=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[i.b,o.a,s.kb,Y,N.a]]}),e})()},j1ZV:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n("ofXK"),o=n("TEn/"),s=n("tyNb"),r=n("6g0+"),a=n("3Pt+"),c=n("fXoL");let b=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[i.b,o.kb.forRoot(),a.a,s.j,r.b]]}),e})()},qgph:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("mrSG"),o=n("2Q27"),s=n("fXoL"),r=n("TEn/");let a=(()=>{class e{constructor(e){this.modalController=e,this.active=!1}setTeam(e){this.team=e}isActive(){return this.active}noPaid(){return!!this.active&&!this.team.paid}showAlert(){return Object(i.b)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:o.a,componentProps:{id:this.team.id}});return e.onDidDismiss().then(e=>{console.log("return paid")}),yield e.present()}))}}return e.\u0275fac=function(t){return new(t||e)(s.Ub(r.nb))},e.\u0275prov=s.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);