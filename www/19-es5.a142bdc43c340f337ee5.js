!function(){function e(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"2Q27":function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var a=r("9suA"),u=r("fXoL"),s=r("TEn/"),l=r("tyNb"),f=function(){var e=function(e){o(r,e);var t=c(r);function r(e,i,o){var a;return n(this,r),(a=t.call(this)).viewCtrl=e,a.router=i,a.navParams=o,a.id=o.get("id"),a}return i(r,[{key:"ngOnInit",value:function(){}},{key:"close",value:function(){this.viewCtrl.dismiss()}},{key:"initObject",value:function(){}},{key:"goPayment",value:function(){this.router.navigateByUrl("/payment/create/"+this.id),this.close()}}]),r}(a.a);return e.\u0275fac=function(t){return new(t||e)(u.Lb(s.ib),u.Lb(l.g),u.Lb(s.kb))},e.\u0275cmp=u.Fb({type:e,selectors:[["app-alert-create-team"]],features:[u.vb],decls:16,vars:0,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[1,"text"],[1,"ion-margin-top"],[1,"ion-float-right",3,"click"]],template:function(e,t){1&e&&(u.Qb(0,"ion-header"),u.Qb(1,"ion-toolbar"),u.Qb(2,"ion-title"),u.tc(3,"Pago pendiente"),u.Pb(),u.Qb(4,"ion-buttons",0),u.Qb(5,"ion-button",1),u.Yb("click",(function(){return t.close()})),u.Mb(6,"ion-icon",2),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(7,"ion-content"),u.Qb(8,"ion-card"),u.Qb(9,"ion-card-content"),u.Qb(10,"ion-text",3),u.tc(11," Para que los administradores de este equipo puedan modificar los datos (Fotos,nombre, jugadores, redes, sucesos de partidos , etc) es necesario abonar $500 mensualmente. "),u.Pb(),u.Mb(12,"br"),u.Qb(13,"div",4),u.Qb(14,"ion-button",5),u.Yb("click",(function(){return t.goPayment()})),u.tc(15," Realizar el pago"),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb())},directives:[s.x,s.eb,s.cb,s.j,s.i,s.y,s.r,s.k,s.l,s.Z],styles:[".text[_ngcontent-%COMP%]{font-size:x-large}"]}),e}()},HNXX:function(e,t,r){"use strict";r.r(t),r.d(t,"EventFormPageModule",(function(){return v}));var i,o,a=r("ofXK"),c=r("3Pt+"),u=r("TEn/"),s=r("tyNb"),l=r("j/D2"),f=r("fXoL"),b=[{path:"",component:l.a}],d=((o=function e(){n(this,e)}).\u0275mod=f.Jb({type:o}),o.\u0275inj=f.Ib({factory:function(e){return new(e||o)},imports:[[s.j.forChild(b)],s.j]}),o),v=((i=function e(){n(this,e)}).\u0275mod=f.Jb({type:i}),i.\u0275inj=f.Ib({factory:function(e){return new(e||i)},imports:[[a.b,c.a,u.fb,d]]}),i)},"j/D2":function(e,t,r){"use strict";r.d(t,"a",(function(){return k}));var a=r("mrSG"),u=r("8xVP"),s=r("9suA"),l=r("fXoL"),f=r("TEn/"),b=r("G/jy"),d=r("vuFD"),v=r("rLe3"),m=r("qgph"),p=r("ofXK"),y=r("3Pt+");function h(e,t){if(1&e&&(l.Qb(0,"ion-select-option",13),l.tc(1),l.Pb()),2&e){var n=t.$implicit;l.fc("value",n.id),l.yb(1),l.uc(n.name)}}function g(e,t){if(1&e&&(l.Qb(0,"ion-select-option",13),l.tc(1),l.Pb()),2&e){var n=t.$implicit;l.fc("value",n.id),l.yb(1),l.uc(n.name)}}function _(e,t){if(1&e){var n=l.Rb();l.Qb(0,"ion-item"),l.Qb(1,"ion-label",5),l.tc(2,"Equipo"),l.Pb(),l.Qb(3,"ion-select",14),l.Yb("ngModelChange",(function(e){return l.nc(n),l.ac(2).event.team_id=e})),l.sc(4,g,2,2,"ion-select-option",7),l.Pb(),l.Qb(5,"div",8),l.tc(6),l.Pb(),l.Pb()}if(2&e){var r=l.ac(2);l.yb(3),l.fc("ngModel",r.event.team_id),l.yb(1),l.fc("ngForOf",r.dataEvent.teams),l.yb(2),l.uc(r.eventModel.errorsForm.get("team_id"))}}function w(e,t){if(1&e&&(l.Qb(0,"ion-select-option",13),l.tc(1),l.Pb()),2&e){var n=t.$implicit;l.fc("value",n.id),l.yb(1),l.uc(n.name)}}function P(e,t){if(1&e){var n=l.Rb();l.Qb(0,"form",4),l.Yb("ngSubmit",(function(){return l.nc(n),l.ac().submit()}))("keyup",(function(){return l.nc(n),l.ac().eventModel.errorsForm.clear()})),l.Qb(1,"ion-item"),l.Qb(2,"ion-label",5),l.tc(3,"Tipo de Evento"),l.Pb(),l.Qb(4,"ion-select",6),l.Yb("ngModelChange",(function(e){return l.nc(n),l.ac().event.type_event_id=e})),l.sc(5,h,2,2,"ion-select-option",7),l.Pb(),l.Qb(6,"div",8),l.tc(7),l.Pb(),l.Pb(),l.sc(8,_,7,3,"ion-item",9),l.Qb(9,"ion-item"),l.Qb(10,"ion-label",5),l.tc(11,"Jugador"),l.Pb(),l.Qb(12,"ion-select",10),l.Yb("ngModelChange",(function(e){return l.nc(n),l.ac().event.player_id=e})),l.sc(13,w,2,2,"ion-select-option",7),l.Pb(),l.Qb(14,"div",8),l.tc(15),l.Pb(),l.Pb(),l.Qb(16,"ion-item"),l.Qb(17,"ion-label",5),l.tc(18,"Tiempo"),l.Pb(),l.Qb(19,"ion-input",11),l.Yb("ngModelChange",(function(e){return l.nc(n),l.ac().event.time=e})),l.Pb(),l.Pb(),l.Qb(20,"div",8),l.tc(21),l.Pb(),l.Qb(22,"ion-button",12),l.tc(23,"Guardar"),l.Pb(),l.Pb()}if(2&e){var r=l.ac();l.yb(4),l.fc("ngModel",r.event.type_event_id),l.yb(1),l.fc("ngForOf",r.dataEvent.types_events),l.yb(2),l.uc(r.eventModel.errorsForm.get("type_event_id")),l.yb(1),l.fc("ngIf",!r.team_admin||r.twoTeam),l.yb(4),l.fc("ngModel",r.event.player_id),l.yb(1),l.fc("ngForOf",r.getPlayers()),l.yb(2),l.uc(r.eventModel.errorsForm.get("player_id")),l.yb(4),l.fc("ngModel",r.event.time),l.yb(2),l.uc(r.eventModel.errorsForm.get("time"))}}var k=function(){var e=function(e){o(r,e);var t=c(r);function r(e,i,o,a,c,s){var l;return n(this,r),(l=t.call(this)).navParams=e,l.requestService=i,l.dialogService=o,l.viewCtrl=a,l.utilArray=c,l.paymentTeamService=s,l.twoTeam=!1,l.events=[],l.myDateFilter=function(e){return 6==e.getDay()},l.gameModel=new u.a("Game",i),l.eventModel=new u.a("Event",i),l.game_id=e.get("game_id"),l.twoTeam=e.get("twoTeam"),l.id=e.get("id"),l.team_admin=e.get("team_admin"),l.events=e.get("events"),l.game=e.get("game"),l}return i(r,[{key:"initObject",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:this.loadEvent();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"loadEvent",value:function(){this.id||(this.event={game_id:this.game_id,type_event_id:"",player_id:"",team_id:this.team_admin?this.team_admin.id:"",time:""})}},{key:"init",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.eventModel.api_function("dataEventCreate",{game_id:this.game_id}).subscribe((function(e){"success"==e.status&&(t.dataEvent=e.data,t.types_events=t.dataEvent.types_events),console.log("ty",t.types_events),console.log(t.dataEvent)}));case 2:case"end":return e.stop()}}),e,this)})))}},{key:"getPlayers",value:function(){var e=this.event.team_id;if(this.team_admin&&(e=this.event.team_id),e){var t=this.dataEvent.teams.find((function(t){return t.id===e}));if(t)return t.players}return[]}},{key:"submit",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.isValid();case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",(console.log(e.t0),void this.dialogService.showToast(e.t0.message,"Error","danger")));case 8:if(t=this.game["team_"+this.getTeamType()],this.paymentTeamService.setTeam(t),!this.paymentTeamService.noPaid()){e.next=15;break}return e.next=12,this.close();case 12:return e.next=14,this.paymentTeamService.showAlert();case 14:return e.abrupt("return",void e.sent);case 15:this.event.id?this.eventModel.api_update(this.event).subscribe((function(e){var t;"success"==e.status&&(n.dialogService.showToast(null!==(t=e.msjSuccess)&&void 0!==t?t:"Registrado"),console.log(e),n.dismiss(e.Event))})):this.eventModel.api_create(this.event).subscribe((function(e){var t;"success"==e.status&&(n.dialogService.showToast(null!==(t=e.msjSuccess)&&void 0!==t?t:"Registrado"),n.dismiss(e.Event))}));case 16:case"end":return e.stop()}}),e,this,[[0,5]])})))}},{key:"dismiss",value:function(e){this.viewCtrl.dismiss({event:e})}},{key:"close",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.viewCtrl.dismiss();case 2:case"end":return e.stop()}}),e,this)})))}},{key:"print",value:function(){console.log(this.event)}},{key:"isValid",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.event.team_id){e.next=2;break}throw new Error("Seleccione un equipo");case 2:if(this.event.type_event_id){e.next=4;break}throw new Error("Seleccione un evento");case 4:if(t=this.getTeamType(),!(n=this.utilArray.findList(this.types_events,this.event.type_event_id))||"Gol"!=n.name){e.next=10;break}if(r=this.game[t+"_goals"],!(this.events.filter((function(e){return e.team_id==i.event.team_id&&"Gol"==e.type_event.name})).length+1>r)){e.next=10;break}throw new Error(0==r?"El equipo seleccionado no ha convertido goles en este partido, no es posible registrar este evento.":"No puede a\xf1adir m\xe1s de ".concat(r," goles para \xe9ste equipo en \xe9ste partido."));case 10:return e.abrupt("return",!0);case 11:case"end":return e.stop()}}),e,this)})))}},{key:"getTeamType",value:function(){var e="l";return this.game.v_team==this.event.team_id&&(e="v"),e}}]),r}(s.a);return e.\u0275fac=function(t){return new(t||e)(l.Lb(f.kb),l.Lb(b.a),l.Lb(d.a),l.Lb(f.ib),l.Lb(v.a),l.Lb(m.a))},e.\u0275cmp=l.Fb({type:e,selectors:[["app-event-form"]],features:[l.vb],decls:9,vars:1,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[3,"ngSubmit","keyup",4,"ngIf"],[3,"ngSubmit","keyup"],["position","floating"],["name","type_event_id",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[2,"color","red","padding-top","0.2rem"],[4,"ngIf"],["name","player_id",3,"ngModel","ngModelChange"],["type","number","name","time",3,"ngModel","ngModelChange"],["type","submit","expand","block"],[3,"value"],["name","team_id",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-title"),l.tc(3,"Evento"),l.Pb(),l.Qb(4,"ion-buttons",0),l.Qb(5,"ion-button",1),l.Yb("click",(function(){return t.close()})),l.Mb(6,"ion-icon",2),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(7,"ion-content"),l.sc(8,P,24,9,"form",3),l.Pb()),2&e&&(l.yb(8),l.fc("ngIf",t.dataEvent))},directives:[f.x,f.eb,f.cb,f.j,f.i,f.y,f.r,p.k,y.i,y.e,y.f,f.B,f.E,f.R,f.ob,y.d,y.g,p.j,f.A,f.lb,f.S],styles:[""]}),e}()},qgph:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var o=r("mrSG"),a=r("2Q27"),c=r("fXoL"),u=r("TEn/"),s=function(){var e=function(){function e(t){n(this,e),this.modalController=t}return i(e,[{key:"setTeam",value:function(e){this.team=e}},{key:"noPaid",value:function(){return!this.team.paid}},{key:"showAlert",value:function(){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:a.a,componentProps:{id:this.team.id}});case 2:return(t=e.sent).onDidDismiss().then((function(e){console.log("return paid")})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Ub(u.ib))},e.\u0275prov=c.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},rLe3:function(t,r,o){"use strict";o.d(r,"a",(function(){return c}));var a=o("fXoL"),c=function(){var t=function(){function t(){n(this,t)}return i(t,[{key:"listAddLast",value:function(e,t){e.push(t)}},{key:"listAddFirst",value:function(e,t){e.unshift(t)}},{key:"listUpdate",value:function(e,t,n){var r=this.findIndexList(e,t);r>=0&&(e[r]=n)}},{key:"listDelete",value:function(e,t){var n=this.findIndexList(e,t);n>=0&&e.splice(n,1)}},{key:"findList",value:function(e,t){return e.find((function(e){return e.id===t}))}},{key:"findIndexList",value:function(e,t){return e.findIndex((function(e){return e.id===t}))}},{key:"updateAttribustesObject",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];console.log("update attributes");var i,o=e(r);try{for(o.s();!(i=o.n()).done;){var a=i.value;n.hasOwnProperty(a)&&(t[a]=n[a])}}catch(c){o.e(c)}finally{o.f()}return t}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();