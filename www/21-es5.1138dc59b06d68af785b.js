!function(){function t(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return i(t,n)}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var e=0,a=function(){};return{s:a,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,b=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return c=t.done,t},e:function(t){b=!0,r=t},f:function(){try{c||null==o.return||o.return()}finally{if(b)throw r}}}}function i(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,o=new Array(i);n<i;n++)o[n]=t[n];return o}function n(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function o(t,i){for(var n=0;n<i.length;n++){var o=i[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,i,n){return i&&o(t.prototype,i),n&&o(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"H/Ss":function(t,i,o){"use strict";o.r(i),o.d(i,"ListPageModule",(function(){return K}));var a=o("ofXK"),r=o("3Pt+"),c=o("TEn/"),b=o("tyNb"),s=o("8xVP"),u=o("fXoL"),f=o("G/jy"),l=o("y/q6"),m=o("rLe3"),d=o("2Rin"),h=o("zYHx"),p=o("ChyW");function g(t,i){if(1&t&&(u.Pb(0,"ion-item"),u.Pb(1,"ion-avatar",1),u.Lb(2,"ion-img",2),u.Ob(),u.Pb(3,"ion-label"),u.Pb(4,"h3"),u.Pb(5,"b"),u.sc(6),u.Ob(),u.sc(7," ha indicado que le gusta tu publicacion."),u.Ob(),u.Pb(8,"ion-text",3),u.sc(9),u.Ob(),u.Ob(),u.Ob()),2&t){var n=u.Zb();u.xb(2),u.ec("src",n.notification.autor.photo?n.notification.autor.photo.urlCompleteThumb:n.pathImages.images.profile_user),u.xb(4),u.tc(n.notification.autor.completeName),u.xb(3),u.tc(n.util.getFormarHumans(n.notification.created_at))}}function P(t,i){if(1&t&&(u.Pb(0,"ion-item"),u.Pb(1,"ion-avatar",1),u.Lb(2,"ion-img",2),u.Ob(),u.Pb(3,"ion-label"),u.Pb(4,"h3"),u.Pb(5,"b"),u.sc(6),u.Ob(),u.sc(7," ha comentado tu publicacion."),u.Ob(),u.Pb(8,"ion-text",3),u.sc(9),u.Ob(),u.Ob(),u.Ob()),2&t){var n=u.Zb();u.xb(2),u.ec("src",n.notification.autor.photo?n.notification.autor.photo.urlCompleteThumb:n.pathImages.images.profile_user),u.xb(4),u.tc(n.notification.autor.completeName),u.xb(3),u.tc(n.util.getFormarHumans(n.notification.created_at))}}function v(t,i){if(1&t&&(u.Pb(0,"ion-item"),u.Pb(1,"ion-avatar",1),u.Lb(2,"ion-img",2),u.Ob(),u.Pb(3,"ion-label"),u.Pb(4,"h3"),u.Pb(5,"b"),u.sc(6),u.Ob(),u.sc(7," Fuiste asignado como administrador del equipo "),u.Pb(8,"b"),u.sc(9),u.Ob(),u.sc(10,"."),u.Ob(),u.Pb(11,"ion-text",3),u.sc(12),u.Ob(),u.Ob(),u.Ob()),2&t){var n=u.Zb();u.xb(2),u.ec("src",n.notification.autor.shield?n.notification.autor.shield.urlCompleteThumb:n.pathImages.images.escudo),u.xb(4),u.tc(n.authUser.user.completeName),u.xb(3),u.tc(n.notification.autor.name),u.xb(3),u.tc(n.util.getFormarHumans(n.notification.created_at))}}function O(t,i){if(1&t&&(u.Pb(0,"ion-item"),u.Pb(1,"ion-avatar",1),u.Lb(2,"ion-img",2),u.Ob(),u.Pb(3,"ion-label"),u.Pb(4,"h3"),u.Pb(5,"b"),u.sc(6),u.Ob(),u.sc(7," Te ha registrado como jugador de su equipo. Puedes ingresar a tu perfil de jugador y modificar algunos datos."),u.Ob(),u.Pb(8,"ion-text",3),u.sc(9),u.Ob(),u.Ob(),u.Ob()),2&t){var n=u.Zb();u.xb(2),u.ec("src",n.notification.autor.shield?n.notification.autor.shield.urlCompleteThumb:n.pathImages.images.escudo),u.xb(4),u.tc(n.notification.autor.name),u.xb(3),u.tc(n.util.getFormarHumans(n.notification.created_at))}}function y(t,i){if(1&t&&(u.Pb(0,"ion-item"),u.Pb(1,"ion-avatar",1),u.Lb(2,"ion-img",2),u.Ob(),u.Pb(3,"ion-label"),u.Pb(4,"h3"),u.sc(5,"El equipo "),u.Pb(6,"b"),u.sc(7),u.Ob(),u.sc(8," te ha enviado un solicitud para que formes parte de su plantilla de jugadores."),u.Ob(),u.Pb(9,"ion-text",3),u.sc(10),u.Ob(),u.Ob(),u.Ob()),2&t){var n=u.Zb();u.xb(2),u.ec("src",n.notification.autor.shield?n.notification.autor.shield.urlCompleteThumb:n.pathImages.images.escudo),u.xb(5),u.tc(n.notification.autor.name),u.xb(3),u.tc(n.util.getFormarHumans(n.notification.created_at))}}function x(t,i){if(1&t&&(u.Pb(0,"ion-item"),u.Pb(1,"ion-avatar",1),u.Lb(2,"ion-img",2),u.Ob(),u.Pb(3,"ion-label"),u.Pb(4,"h3"),u.Pb(5,"b"),u.sc(6),u.Ob(),u.sc(7," acept\xf3 la solicitud y ya es parte de la plantilla de "),u.Pb(8,"b"),u.sc(9),u.Ob(),u.sc(10,"."),u.Ob(),u.Pb(11,"ion-text",3),u.sc(12),u.Ob(),u.Ob(),u.Ob()),2&t){var n=u.Zb();u.xb(2),u.ec("src",n.utilPhoto.getPhotoPlayer(n.notification.autor)),u.xb(4),u.tc(n.notification.autor.name),u.xb(3),u.tc(n.notification.object.team.name),u.xb(3),u.tc(n.util.getFormarHumans(n.notification.created_at))}}function _(t,i){if(1&t&&(u.Pb(0,"ion-item"),u.Pb(1,"ion-avatar",1),u.Lb(2,"ion-img",2),u.Ob(),u.Pb(3,"ion-label"),u.Pb(4,"h3"),u.Pb(5,"b"),u.sc(6),u.Ob(),u.sc(7," rechazo la solicitud,no desea formar parte de "),u.Pb(8,"b"),u.sc(9),u.Ob(),u.sc(10,"."),u.Ob(),u.Pb(11,"ion-text",3),u.sc(12),u.Ob(),u.Ob(),u.Ob()),2&t){var n=u.Zb();u.xb(2),u.ec("src",n.utilPhoto.getPhotoPlayer(n.notification.autor)),u.xb(4),u.tc(n.notification.autor.name),u.xb(3),u.tc(n.notification.object.team.name),u.xb(3),u.tc(n.util.getFormarHumans(n.notification.created_at))}}function I(t,i){if(1&t&&(u.Pb(0,"ion-item"),u.Pb(1,"ion-avatar",1),u.Lb(2,"ion-img",2),u.Ob(),u.Pb(3,"ion-label"),u.Pb(4,"h3"),u.sc(5,"El jugador "),u.Pb(6,"b"),u.sc(7),u.Ob(),u.sc(8," ha dejado su equipo para formar parte de "),u.Pb(9,"b"),u.sc(10),u.Ob(),u.sc(11,"."),u.Ob(),u.Pb(12,"ion-text",3),u.sc(13),u.Ob(),u.Ob(),u.Ob()),2&t){var n=u.Zb();u.xb(2),u.ec("src",n.utilPhoto.getPhotoPlayer(n.notification.object)),u.xb(5),u.tc(n.notification.object.name),u.xb(3),u.tc(n.notification.autor.name),u.xb(3),u.tc(n.util.getFormarHumans(n.notification.created_at))}}var w,k=((w=function(){function t(i,o,e,a){n(this,t),this.util=i,this.pathImages=o,this.authUser=e,this.utilPhoto=a,this.content={}}return e(t,[{key:"ngOnInit",value:function(){}},{key:"ngOnChanges",value:function(t){}}]),t}()).\u0275fac=function(t){return new(t||w)(u.Kb(d.a),u.Kb(h.a),u.Kb(l.a),u.Kb(p.a))},w.\u0275cmp=u.Eb({type:w,selectors:[["app-notification"]],inputs:{notification:"notification"},features:[u.vb],decls:8,vars:8,consts:[[4,"ngIf"],["slot","start"],[3,"src"],[1,"date"]],template:function(t,i){1&t&&(u.rc(0,g,10,3,"ion-item",0),u.rc(1,P,10,3,"ion-item",0),u.rc(2,v,13,4,"ion-item",0),u.rc(3,O,10,3,"ion-item",0),u.rc(4,y,11,3,"ion-item",0),u.rc(5,x,13,4,"ion-item",0),u.rc(6,_,13,4,"ion-item",0),u.rc(7,I,14,4,"ion-item",0)),2&t&&(u.ec("ngIf",i.notification&&"like"==i.notification.type),u.xb(1),u.ec("ngIf",i.notification&&"comment_publication"==i.notification.type),u.xb(1),u.ec("ngIf",i.notification&&"admin_team"==i.notification.type),u.xb(1),u.ec("ngIf",i.notification&&"create_player"==i.notification.type),u.xb(1),u.ec("ngIf",i.notification&&"team_request_to_player"==i.notification.type),u.xb(1),u.ec("ngIf",i.notification&&"player_accept_request_of_team"==i.notification.type),u.xb(1),u.ec("ngIf",i.notification&&"player_reject_request_of_team"==i.notification.type),u.xb(1),u.ec("ngIf",i.notification&&"player_change_team"==i.notification.type))},directives:[a.k,c.B,c.e,c.z,c.D,c.Y],styles:[".no-active[_ngcontent-%COMP%]{--ion-background-color:#e9ebee!important}.date[_ngcontent-%COMP%]{font-size:x-small}h3[_ngcontent-%COMP%]{white-space:normal}"]}),w);function j(t,i){1&t&&(u.Pb(0,"ion-list-header",5),u.Pb(1,"ion-label"),u.sc(2,"No posee notificaciones"),u.Ob(),u.Ob())}var L=function(t){return{"no-active":t}};function A(t,i){if(1&t){var n=u.Qb();u.Pb(0,"ion-item",6),u.Xb("click",(function(){u.mc(n);var t=i.$implicit;return u.Zb().visibleNot(t)})),u.Lb(1,"app-notification",7),u.Ob()}if(2&t){var o=i.$implicit;u.zb(u.hc(3,L,o.isShow)),u.xb(1),u.ec("notification",o)}}var C,M,F,H=[{path:"",component:(C=function(){function t(i,o,e,a){n(this,t),this.request=i,this.userAuth=o,this.utilArray=e,this.navCtrl=a,this.notifications=[],this.notificationModel=new s.a("Notification",i),this.userModel=new s.a("User",i)}return e(t,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.userModel.api_functionModel(this.userAuth.user.id,"resetNotifications").subscribe((function(){console.log("restart count  notifications"),t.userAuth.user.counts_not=0,t.userAuth.saveUser()})),this.notifications=this.userAuth.user.notifications?this.userAuth.user.notifications:[],this.userModel.api_functionModel(this.userAuth.user.id,"pageNotifications",{}).subscribe((function(n){console.log(n),t.notifications=n.data,i&&i.target.complete()}),(function(t){console.log(t),i&&i.target.complete()}))}},{key:"openModal",value:function(){}},{key:"visibleNot",value:function(t){var i=this;t.id&&this.notificationModel.api_functionModel(t.id,"viewed").subscribe((function(t){var n=t.data;i.utilArray.listUpdate(i.notifications,n.id,n)})),this.navCtrl.navigateForward(t.route)}}]),t}(),C.\u0275fac=function(t){return new(t||C)(u.Kb(f.a),u.Kb(l.a),u.Kb(m.a),u.Kb(c.ib))},C.\u0275cmp=u.Eb({type:C,selectors:[["app-list"]],decls:12,vars:2,consts:[["slot","start"],["defaultHref","admin_home"],["slot","fixed",3,"ionRefresh"],["color","light",4,"ngIf"],[3,"class","click",4,"ngFor","ngForOf"],["color","light"],[3,"click"],[2,"width","100%",3,"notification"]],template:function(t,i){1&t&&(u.Pb(0,"ion-header"),u.Pb(1,"ion-toolbar"),u.Pb(2,"ion-buttons",0),u.Lb(3,"ion-back-button",1),u.Ob(),u.Pb(4,"ion-title"),u.sc(5,"Notificaciones"),u.Ob(),u.Ob(),u.Ob(),u.Pb(6,"ion-content"),u.Pb(7,"ion-refresher",2),u.Xb("ionRefresh",(function(t){return i.init(t)})),u.Lb(8,"ion-refresher-content"),u.Ob(),u.Pb(9,"ion-list"),u.rc(10,j,3,0,"ion-list-header",3),u.rc(11,A,2,5,"ion-item",4),u.Ob(),u.Ob()),2&t&&(u.xb(10),u.ec("ngIf",0==i.notifications.length),u.xb(1),u.ec("ngForOf",i.notifications))},directives:[c.x,c.db,c.j,c.f,c.g,c.bb,c.r,c.J,c.K,c.E,a.k,a.j,c.F,c.D,c.B,k],styles:[".no-active[_ngcontent-%COMP%]{--ion-background-color:#e9ebee!important}.date[_ngcontent-%COMP%]{font-size:x-small}"]}),C)}],q=((M=function t(){n(this,t)}).\u0275mod=u.Ib({type:M}),M.\u0275inj=u.Hb({factory:function(t){return new(t||M)},imports:[[b.j.forChild(H)],b.j]}),M),N=o("j1ZV"),K=((F=function t(){n(this,t)}).\u0275mod=u.Ib({type:F}),F.\u0275inj=u.Hb({factory:function(t){return new(t||F)},imports:[[a.b,r.a,c.eb,q,N.a]]}),F)},rLe3:function(i,o,a){"use strict";a.d(o,"a",(function(){return c}));var r=a("fXoL"),c=function(){var i=function(){function i(){n(this,i)}return e(i,[{key:"listAddLast",value:function(t,i){t.push(i)}},{key:"listAddFirst",value:function(t,i){t.unshift(i)}},{key:"listUpdate",value:function(t,i,n){var o=this.findIndexList(t,i);o>=0&&(t[o]=n)}},{key:"listDelete",value:function(t,i){var n=this.findIndexList(t,i);n>=0&&t.splice(n,1)}},{key:"findList",value:function(t,i){return t.find((function(t){return t.id===i}))}},{key:"findIndexList",value:function(t,i){return t.findIndex((function(t){return t.id===i}))}},{key:"updateAttribustesObject",value:function(i,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];console.log("update attributes");var e,a=t(o);try{for(a.s();!(e=a.n()).done;){var r=e.value;n.hasOwnProperty(r)&&(i[r]=n[r])}}catch(c){a.e(c)}finally{a.f()}return i}}]),i}();return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=r.Gb({token:i,factory:i.\u0275fac,providedIn:"root"}),i}()}}])}();