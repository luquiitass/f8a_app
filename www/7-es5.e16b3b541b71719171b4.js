!function(){function e(e,n){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==i.return||i.return()}finally{if(s)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2Q27":function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var a=i("9suA"),s=i("fXoL"),u=i("TEn/"),l=i("tyNb"),d=i("ofXK"),b=function(){var e=function(e){o(i,e);var t=c(i);function i(e,r,o,a){var c;return n(this,i),(c=t.call(this,a,e)).viewCtrl=e,c.router=r,c.navParams=o,c.id=o.get("id"),c}return r(i,[{key:"ngOnInit",value:function(){}},{key:"close",value:function(){this.viewCtrl.dismiss()}},{key:"initObject",value:function(){}},{key:"goPayment",value:function(){this.router.navigateByUrl("/payment/create/"+this.id),this.close()}}]),i}(a.a);return e.\u0275fac=function(t){return new(t||e)(s.Lb(u.nb),s.Lb(l.g),s.Lb(u.pb),s.Lb(d.n))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-alert-create-team"]],features:[s.vb],decls:16,vars:0,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[1,"text"],[1,"ion-margin-top"],[1,"ion-float-right",3,"click"]],template:function(e,t){1&e&&(s.Qb(0,"ion-header"),s.Qb(1,"ion-toolbar"),s.Qb(2,"ion-title"),s.vc(3,"Pago pendiente"),s.Pb(),s.Qb(4,"ion-buttons",0),s.Qb(5,"ion-button",1),s.Yb("click",(function(){return t.close()})),s.Mb(6,"ion-icon",2),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(7,"ion-content"),s.Qb(8,"ion-card"),s.Qb(9,"ion-card-content"),s.Qb(10,"ion-text",3),s.vc(11," Para que los administradores de este equipo puedan modificar los datos (Fotos,nombre, jugadores, redes, sucesos de partidos , etc) es necesario abonar $500 mensualmente. "),s.Pb(),s.Mb(12,"br"),s.Qb(13,"div",4),s.Qb(14,"ion-button",5),s.Yb("click",(function(){return t.goPayment()})),s.vc(15," Realizar el pago"),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb())},directives:[u.x,u.jb,u.hb,u.j,u.i,u.y,u.r,u.k,u.l,u.eb],styles:[".text[_ngcontent-%COMP%]{font-size:x-large}"]}),e}()},ZETu:function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var o=i("mrSG"),a=i("8xVP"),c=i("j/D2"),s=i("fXoL"),u=i("G/jy"),l=i("vuFD"),d=i("TEn/"),b=i("y/q6"),v=i("qgph"),f=i("ofXK"),m=i("tyNb"),g=i("3Pt+");function p(e,t){if(1&e&&(s.Qb(0,"ion-col",9),s.Qb(1,"ion-text",10),s.vc(2),s.Pb(),s.Pb()),2&e){var n=s.ac(2);s.yb(2),s.xc(" ",n.team_l.name," ")}}function h(e,t){if(1&e&&(s.Qb(0,"ion-col",11),s.Qb(1,"ion-text",10),s.vc(2),s.Pb(),s.Pb()),2&e){var n=s.ac(2);s.yb(2),s.xc(" ",n.team_v.name," ")}}function y(e,t){1&e&&(s.Qb(0,"ion-list-header",10),s.Qb(1,"ion-label"),s.vc(2,"Sin Sucesos"),s.Pb(),s.Pb())}function _(e,t){if(1&e&&s.Mb(0,"img",17),2&e){var n=s.ac().$implicit;s.ic("src","assets/images/",n.type_event.icon,"",s.pc)}}function P(e,t){if(1&e){var n=s.Rb();s.Qb(0,"ion-buttons",18),s.Qb(1,"ion-button",19),s.Yb("click",(function(){s.oc(n);var e=s.ac(),t=e.$implicit,i=e.index;return s.ac(2).confirmDelete(t,i)})),s.Mb(2,"ion-icon",20),s.Pb(),s.Pb()}}var w=function(e){return{"ion-text-end":e}};function k(e,t){if(1&e&&(s.Qb(0,"ion-item",12),s.Qb(1,"ion-label"),s.Qb(2,"h3",13),s.uc(3,_,1,1,"img",14),s.vc(4),s.Qb(5,"b"),s.vc(6),s.Pb(),s.Qb(7,"a",15),s.vc(8),s.Pb(),s.Pb(),s.Pb(),s.uc(9,P,3,0,"ion-buttons",16),s.Pb()),2&e){var n=t.$implicit,i=s.ac(2);s.yb(1),s.Cb("",n.team.id==i.team_v.id?"item-v":""," ",n.team.id==i.team_l.id?"item-l":"",""),s.yb(1),s.gc("ngClass",s.jc(11,w,n.team.id==i.team_v.id)),s.yb(1),s.gc("ngIf",n.type_event.icon),s.yb(1),s.xc(" ",n.time,"\xb4 "),s.yb(2),s.xc("",n.type_event.name," "),s.yb(1),s.gc("routerLink","/player/profile/"+n.player.id),s.yb(1),s.xc(" ",n.player.name," "),s.yb(1),s.gc("ngIf",i.canEdit&&i.team_admin.id==n.team.id||i.twoTeam&&i.canEdit)}}function x(e,t){if(1&e){var n=s.Rb();s.Qb(0,"ion-button",21),s.Yb("click",(function(){return s.oc(n),s.ac(2).addEvent()})),s.vc(1," Nuevo Suceso "),s.Pb()}}function Q(e,t){if(1&e){var n=s.Rb();s.Qb(0,"ion-chip",24),s.Qb(1,"ion-label",25),s.vc(2," Eres el administrador de "),s.Qb(3,"b"),s.vc(4),s.Pb(),s.vc(5,", puedes administrar lo sucesos de tu equipo al activar la edici\xf3n. "),s.Pb(),s.Qb(6,"ion-toggle",26),s.Yb("ngModelChange",(function(e){return s.oc(n),s.ac(3).canEdit=e})),s.Pb(),s.Pb()}if(2&e){var i=s.ac(3);s.yb(4),s.xc("",i.team_admin.name," "),s.yb(2),s.gc("ngModel",i.canEdit)}}function M(e,t){if(1&e&&(s.Qb(0,"div",22),s.uc(1,Q,7,2,"ion-chip",23),s.Pb()),2&e){var n=s.ac(2);s.yb(1),s.gc("ngIf",n.isAdmin)}}function T(e,t){if(1&e&&(s.Qb(0,"ion-card"),s.Qb(1,"ion-card-header",1),s.Qb(2,"ion-card-title"),s.vc(3,"Sucesos"),s.Pb(),s.Pb(),s.Qb(4,"ion-list"),s.Qb(5,"ion-grid"),s.Qb(6,"ion-row"),s.uc(7,p,3,1,"ion-col",2),s.uc(8,h,3,1,"ion-col",3),s.Pb(),s.Pb(),s.Mb(9,"div",4),s.uc(10,y,3,0,"ion-list-header",5),s.uc(11,k,10,13,"ion-item",6),s.Pb(),s.uc(12,x,2,0,"ion-button",7),s.uc(13,M,2,1,"div",8),s.Pb()),2&e){var n=s.ac();s.yb(7),s.gc("ngIf",n.team_l),s.yb(1),s.gc("ngIf",n.team_v),s.yb(2),s.gc("ngIf",0==n.events.length),s.yb(1),s.gc("ngForOf",n.events),s.yb(1),s.gc("ngIf",n.canEdit),s.yb(1),s.gc("ngIf",n.team_admin)}}var O=function(){var e=function(){function e(t,i,r,o,c){n(this,e),this.requestService=t,this.dialog=i,this.modalController=r,this.authUser=o,this.paymentTeamService=c,this.events=[],this.team_admin=null,this.canEdit=!1,this.twoTeam=!1,this.gameModel=new a.a("Game",t),this.eventModel=new a.a("Event",t),console.log(this.game_id)}return r(e,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var e=this;this.gameModel.api_functionModel(this.game_id,"dataEvent").subscribe((function(t){"success"==t.status&&(e.game=t.data.game,e.events=t.data.events,e.team_l=t.data.team_l,e.team_v=t.data.team_v,e.verificationAdmin()),console.log(e.events)}))}},{key:"verificationAdmin",value:function(){console.log("verificationAdmin"),this.authUser.isAdminOfTeam(this.team_l.id)||this.authUser.isAdminOfTeam(this.team_v.id)?(this.isAdmin=!0,this.authUser.isAdminOfTeam(this.team_l.id)&&(this.team_admin=this.team_l),this.authUser.isAdminOfTeam(this.team_v.id)&&(this.team_admin=this.team_v),this.authUser.isAdminOfTeam(this.team_l.id)&&this.authUser.isAdminOfTeam(this.team_v.id)&&(this.twoTeam=!0)):this.team_admin=null}},{key:"confirmDelete",value:function(e,t){var n=this;this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este Suceso",(function(i){n.delete(e,t)}))}},{key:"delete",value:function(e,t){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.paymentTeamService.setTeam(e.team),!this.paymentTeamService.noPaid()){n.next=6;break}return n.next=4,this.paymentTeamService.showAlert();case 4:n.next=7;break;case 6:this.eventModel.api_delete(e.id).subscribe((function(e){console.log(e),"success"==e.status&&(i.dialog.showToast("Suceso Eliminado",null,"success"),i.events.splice(t,1))}));case 7:case"end":return n.stop()}}),n,this)})))}},{key:"addEvent",value:function(){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:c.a,componentProps:{game_id:this.game_id,team_admin:this.team_admin,twoTeam:this.twoTeam,events:this.events,game:this.game}});case 2:return(t=e.sent).onDidDismiss().then((function(e){e.data&&e.data.event&&n.events.push(e.data.event)})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Lb(u.a),s.Lb(l.a),s.Lb(d.nb),s.Lb(b.a),s.Lb(v.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-event-list"]],inputs:{game_id:"game_id",isAdmin:"isAdmin"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"bg-l1"],["class","ion-text-start col-l",4,"ngIf"],["class","ion-text-end col-v",4,"ngIf"],[1,"separator"],["color","light",4,"ngIf"],["class","bg-l0",4,"ngFor","ngForOf"],["fill","outline","expand","block",3,"click",4,"ngIf"],["class","ion-text-center",4,"ngIf"],[1,"ion-text-start","col-l"],["color","light"],[1,"ion-text-end","col-v"],[1,"bg-l0"],[3,"ngClass"],["width","20px",3,"src",4,"ngIf"],["routerDirection","forward",3,"routerLink"],["slot","start",4,"ngIf"],["width","20px",3,"src"],["slot","start"],[3,"click"],["name","trash-outline"],["fill","outline","expand","block",3,"click"],[1,"ion-text-center"],["class","chip-admin","color","secondary",4,"ngIf"],["color","secondary",1,"chip-admin"],[1,"msj-is-admin"],[3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&s.uc(0,T,14,6,"ion-card",0),2&e&&s.gc("ngIf",t.events.length&&t.team_l&&t.team_v||t.isAdmin)},directives:[f.l,d.k,d.m,d.o,d.H,d.w,d.S,f.k,d.q,d.eb,d.I,d.G,d.D,f.j,m.i,d.tb,d.j,d.i,d.y,d.p,d.ib,d.c,g.d,g.g],styles:["ion-col[_ngcontent-%COMP%]{font-size:large;color:rgba(0,0,0,.7019607843137254);padding:7px}.col-v[_ngcontent-%COMP%]{border-top-right-radius:5px;border-right:4px solid var(--color-v)}.col-l[_ngcontent-%COMP%]{border-top-left-radius:5px}.col-l[_ngcontent-%COMP%], .item-l[_ngcontent-%COMP%]{border-left:4px solid var(--color-l)}.item-l[_ngcontent-%COMP%]{padding-left:5px}.item-v[_ngcontent-%COMP%]{border-right:4px solid var(--color-v);padding-right:5px}"]}),e}()},"j/D2":function(e,t,i){"use strict";i.d(t,"a",(function(){return k}));var a=i("mrSG"),s=i("8xVP"),u=i("9suA"),l=i("fXoL"),d=i("TEn/"),b=i("G/jy"),v=i("vuFD"),f=i("rLe3"),m=i("qgph"),g=i("ofXK"),p=i("3Pt+");function h(e,t){if(1&e&&(l.Qb(0,"ion-select-option",13),l.vc(1),l.Pb()),2&e){var n=t.$implicit;l.gc("value",n.id),l.yb(1),l.wc(n.name)}}function y(e,t){if(1&e&&(l.Qb(0,"ion-select-option",13),l.vc(1),l.Pb()),2&e){var n=t.$implicit;l.gc("value",n.id),l.yb(1),l.wc(n.name)}}function _(e,t){if(1&e){var n=l.Rb();l.Qb(0,"ion-item"),l.Qb(1,"ion-label",5),l.vc(2,"Equipo"),l.Pb(),l.Qb(3,"ion-select",14),l.Yb("ngModelChange",(function(e){return l.oc(n),l.ac(2).event.team_id=e})),l.uc(4,y,2,2,"ion-select-option",7),l.Pb(),l.Qb(5,"div",8),l.vc(6),l.Pb(),l.Pb()}if(2&e){var i=l.ac(2);l.yb(3),l.gc("ngModel",i.event.team_id),l.yb(1),l.gc("ngForOf",i.dataEvent.teams),l.yb(2),l.wc(i.eventModel.errorsForm.get("team_id"))}}function P(e,t){if(1&e&&(l.Qb(0,"ion-select-option",13),l.vc(1),l.Pb()),2&e){var n=t.$implicit;l.gc("value",n.id),l.yb(1),l.wc(n.name)}}function w(e,t){if(1&e){var n=l.Rb();l.Qb(0,"form",4),l.Yb("ngSubmit",(function(){return l.oc(n),l.ac().submit()}))("keyup",(function(){return l.oc(n),l.ac().eventModel.errorsForm.clear()})),l.Qb(1,"ion-item"),l.Qb(2,"ion-label",5),l.vc(3,"Tipo de Evento"),l.Pb(),l.Qb(4,"ion-select",6),l.Yb("ngModelChange",(function(e){return l.oc(n),l.ac().event.type_event_id=e})),l.uc(5,h,2,2,"ion-select-option",7),l.Pb(),l.Qb(6,"div",8),l.vc(7),l.Pb(),l.Pb(),l.uc(8,_,7,3,"ion-item",9),l.Qb(9,"ion-item"),l.Qb(10,"ion-label",5),l.vc(11,"Jugador"),l.Pb(),l.Qb(12,"ion-select",10),l.Yb("ngModelChange",(function(e){return l.oc(n),l.ac().event.player_id=e})),l.uc(13,P,2,2,"ion-select-option",7),l.Pb(),l.Qb(14,"div",8),l.vc(15),l.Pb(),l.Pb(),l.Qb(16,"ion-item"),l.Qb(17,"ion-label",5),l.vc(18,"Tiempo"),l.Pb(),l.Qb(19,"ion-input",11),l.Yb("ngModelChange",(function(e){return l.oc(n),l.ac().event.time=e})),l.Pb(),l.Pb(),l.Qb(20,"div",8),l.vc(21),l.Pb(),l.Qb(22,"ion-button",12),l.vc(23,"Guardar"),l.Pb(),l.Pb()}if(2&e){var i=l.ac();l.yb(4),l.gc("ngModel",i.event.type_event_id),l.yb(1),l.gc("ngForOf",i.dataEvent.types_events),l.yb(2),l.wc(i.eventModel.errorsForm.get("type_event_id")),l.yb(1),l.gc("ngIf",!i.team_admin||i.twoTeam),l.yb(4),l.gc("ngModel",i.event.player_id),l.yb(1),l.gc("ngForOf",i.getPlayers()),l.yb(2),l.wc(i.eventModel.errorsForm.get("player_id")),l.yb(4),l.gc("ngModel",i.event.time),l.yb(2),l.wc(i.eventModel.errorsForm.get("time"))}}var k=function(){var e=function(e){o(i,e);var t=c(i);function i(e,r,o,a,c,u,l){var d;return n(this,i),(d=t.call(this,l,a)).navParams=e,d.requestService=r,d.dialogService=o,d.viewCtrl=a,d.utilArray=c,d.paymentTeamService=u,d.twoTeam=!1,d.events=[],d.myDateFilter=function(e){return 6==e.getDay()},d.gameModel=new s.a("Game",r),d.eventModel=new s.a("Event",r),d.game_id=e.get("game_id"),d.twoTeam=e.get("twoTeam"),d.id=e.get("id"),d.team_admin=e.get("team_admin"),d.events=e.get("events"),d.game=e.get("game"),d}return r(i,[{key:"initObject",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:this.loadEvent();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"loadEvent",value:function(){this.id||(this.event={game_id:this.game_id,type_event_id:"",player_id:"",team_id:this.team_admin?this.team_admin.id:"",time:""})}},{key:"init",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.eventModel.api_function("dataEventCreate",{game_id:this.game_id}).subscribe((function(e){"success"==e.status&&(t.dataEvent=e.data,t.types_events=t.dataEvent.types_events),console.log("ty",t.types_events),console.log(t.dataEvent)}));case 2:case"end":return e.stop()}}),e,this)})))}},{key:"getPlayers",value:function(){var e=this.event.team_id;if(this.team_admin&&(e=this.event.team_id),e){var t=this.dataEvent.teams.find((function(t){return t.id===e}));if(t)return t.players}return[]}},{key:"submit",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.isValid();case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",(console.log(e.t0),void this.dialogService.showToast(e.t0.message,"Error","danger")));case 8:if(t=this.game["team_"+this.getTeamType()],this.paymentTeamService.setTeam(t),!this.paymentTeamService.noPaid()){e.next=15;break}return e.next=12,this.close();case 12:return e.next=14,this.paymentTeamService.showAlert();case 14:return e.abrupt("return",void e.sent);case 15:this.event.id?this.eventModel.api_update(this.event).subscribe((function(e){var t;"success"==e.status&&(n.dialogService.showToast(null!==(t=e.msjSuccess)&&void 0!==t?t:"Registrado"),console.log(e),n.dismiss(e.Event))})):this.eventModel.api_create(this.event).subscribe((function(e){var t;"success"==e.status&&(n.dialogService.showToast(null!==(t=e.msjSuccess)&&void 0!==t?t:"Registrado"),n.dismiss(e.Event))}));case 16:case"end":return e.stop()}}),e,this,[[0,5]])})))}},{key:"dismiss",value:function(e){this.viewCtrl.dismiss({event:e})}},{key:"close",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.viewCtrl.dismiss();case 2:case"end":return e.stop()}}),e,this)})))}},{key:"print",value:function(){console.log(this.event)}},{key:"isValid",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.event.team_id){e.next=2;break}throw new Error("Seleccione un equipo");case 2:if(this.event.type_event_id){e.next=4;break}throw new Error("Seleccione un evento");case 4:if(t=this.getTeamType(),!(n=this.utilArray.findList(this.types_events,this.event.type_event_id))||"Gol"!=n.name){e.next=10;break}if(i=this.game[t+"_goals"],!(this.events.filter((function(e){return e.team_id==r.event.team_id&&"Gol"==e.type_event.name})).length+1>i)){e.next=10;break}throw new Error(0==i?"El equipo seleccionado no ha convertido goles en este partido, no es posible registrar este evento.":"No puede a\xf1adir m\xe1s de ".concat(i," goles para \xe9ste equipo en \xe9ste partido."));case 10:return e.abrupt("return",!0);case 11:case"end":return e.stop()}}),e,this)})))}},{key:"getTeamType",value:function(){var e="l";return this.game.v_team==this.event.team_id&&(e="v"),e}}]),i}(u.a);return e.\u0275fac=function(t){return new(t||e)(l.Lb(d.pb),l.Lb(b.a),l.Lb(v.a),l.Lb(d.nb),l.Lb(f.a),l.Lb(m.a),l.Lb(g.n))},e.\u0275cmp=l.Fb({type:e,selectors:[["app-event-form"]],features:[l.vb],decls:9,vars:1,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[3,"ngSubmit","keyup",4,"ngIf"],[3,"ngSubmit","keyup"],["position","floating"],["name","type_event_id",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[2,"color","red","padding-top","0.2rem"],[4,"ngIf"],["name","player_id",3,"ngModel","ngModelChange"],["type","number","name","time",3,"ngModel","ngModelChange"],["type","submit","expand","block"],[3,"value"],["name","team_id",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-title"),l.vc(3,"Evento"),l.Pb(),l.Qb(4,"ion-buttons",0),l.Qb(5,"ion-button",1),l.Yb("click",(function(){return t.close()})),l.Mb(6,"ion-icon",2),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(7,"ion-content"),l.uc(8,w,24,9,"form",3),l.Pb()),2&e&&(l.yb(8),l.gc("ngIf",t.dataEvent))},directives:[d.x,d.jb,d.hb,d.j,d.i,d.y,d.r,g.l,p.i,p.e,p.f,d.D,d.G,d.W,d.ub,p.d,p.g,g.k,d.C,d.qb,d.X],styles:[""]}),e}()},j1ZV:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var r=i("ofXK"),o=i("TEn/"),a=i("tyNb"),c=i("6g0+"),s=i("3Pt+"),u=i("fXoL"),l=function(){var e=function e(){n(this,e)};return e.\u0275mod=u.Jb({type:e}),e.\u0275inj=u.Ib({factory:function(t){return new(t||e)},imports:[[r.b,o.kb.forRoot(),s.a,a.j,c.b]]}),e}()},qgph:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var o=i("mrSG"),a=i("2Q27"),c=i("fXoL"),s=i("TEn/"),u=function(){var e=function(){function e(t){n(this,e),this.modalController=t,this.active=!1}return r(e,[{key:"setTeam",value:function(e){this.team=e}},{key:"isActive",value:function(){return this.active}},{key:"noPaid",value:function(){return!!this.active&&!this.team.paid}},{key:"showAlert",value:function(){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:a.a,componentProps:{id:this.team.id}});case 2:return(t=e.sent).onDidDismiss().then((function(e){console.log("return paid")})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Ub(s.nb))},e.\u0275prov=c.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},rLe3:function(t,i,o){"use strict";o.d(i,"a",(function(){return c}));var a=o("fXoL"),c=function(){var t=function(){function t(){n(this,t)}return r(t,[{key:"listAddLast",value:function(e,t){e.push(t)}},{key:"listAddFirst",value:function(e,t){e.unshift(t)}},{key:"listUpdate",value:function(e,t,n){var i=this.findIndexList(e,t);i>=0&&(e[i]=n)}},{key:"listDelete",value:function(e,t){var n=this.findIndexList(e,t);n>=0&&e.splice(n,1)}},{key:"findList",value:function(e,t){return e.find((function(e){return e.id===t}))}},{key:"findIndexList",value:function(e,t){return e.findIndex((function(e){return e.id===t}))}},{key:"updateAttribustesObject",value:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];console.log("update attributes");var r,o=e(i);try{for(o.s();!(r=o.n()).done;){var a=r.value;n.hasOwnProperty(a)&&(t[a]=n[a])}}catch(c){o.e(c)}finally{o.f()}return t}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();