(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"2Q27":function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("9suA"),o=i("fXoL"),s=i("TEn/"),r=i("tyNb"),a=i("ofXK");let c=(()=>{class e extends n.a{constructor(e,t,i,n){super(n,e),this.viewCtrl=e,this.router=t,this.navParams=i,this.id=i.get("id")}ngOnInit(){}close(){this.viewCtrl.dismiss()}initObject(){}goPayment(){this.router.navigateByUrl("/payment/create/"+this.id),this.close()}}return e.\u0275fac=function(t){return new(t||e)(o.Lb(s.nb),o.Lb(r.g),o.Lb(s.pb),o.Lb(a.m))},e.\u0275cmp=o.Fb({type:e,selectors:[["app-alert-create-team"]],features:[o.vb],decls:16,vars:0,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[1,"text"],[1,"ion-margin-top"],[1,"ion-float-right",3,"click"]],template:function(e,t){1&e&&(o.Qb(0,"ion-header"),o.Qb(1,"ion-toolbar"),o.Qb(2,"ion-title"),o.tc(3,"Pago pendiente"),o.Pb(),o.Qb(4,"ion-buttons",0),o.Qb(5,"ion-button",1),o.Yb("click",(function(){return t.close()})),o.Mb(6,"ion-icon",2),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Qb(7,"ion-content"),o.Qb(8,"ion-card"),o.Qb(9,"ion-card-content"),o.Qb(10,"ion-text",3),o.tc(11," Para que los administradores de este equipo puedan modificar los datos (Fotos,nombre, jugadores, redes, sucesos de partidos , etc) es necesario abonar $500 mensualmente. "),o.Pb(),o.Mb(12,"br"),o.Qb(13,"div",4),o.Qb(14,"ion-button",5),o.Yb("click",(function(){return t.goPayment()})),o.tc(15," Realizar el pago"),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb())},directives:[s.x,s.jb,s.hb,s.j,s.i,s.y,s.r,s.k,s.l,s.eb],styles:[".text[_ngcontent-%COMP%]{font-size:x-large}"]}),e})()},HNXX:function(e,t,i){"use strict";i.r(t),i.d(t,"EventFormPageModule",(function(){return l}));var n=i("ofXK"),o=i("3Pt+"),s=i("TEn/"),r=i("tyNb"),a=i("j/D2"),c=i("fXoL");const d=[{path:"",component:a.a}];let b=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[r.j.forChild(d)],r.j]}),e})(),l=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[n.b,o.a,s.kb,b]]}),e})()},"j/D2":function(e,t,i){"use strict";i.d(t,"a",(function(){return y}));var n=i("mrSG"),o=i("8xVP"),s=i("9suA"),r=i("fXoL"),a=i("TEn/"),c=i("G/jy"),d=i("vuFD"),b=i("rLe3"),l=i("qgph"),u=i("ofXK"),m=i("3Pt+");function v(e,t){if(1&e&&(r.Qb(0,"ion-select-option",13),r.tc(1),r.Pb()),2&e){const e=t.$implicit;r.fc("value",e.id),r.yb(1),r.uc(e.name)}}function h(e,t){if(1&e&&(r.Qb(0,"ion-select-option",13),r.tc(1),r.Pb()),2&e){const e=t.$implicit;r.fc("value",e.id),r.yb(1),r.uc(e.name)}}function f(e,t){if(1&e){const e=r.Rb();r.Qb(0,"ion-item"),r.Qb(1,"ion-label",5),r.tc(2,"Equipo"),r.Pb(),r.Qb(3,"ion-select",14),r.Yb("ngModelChange",(function(t){return r.nc(e),r.ac(2).event.team_id=t})),r.sc(4,h,2,2,"ion-select-option",7),r.Pb(),r.Qb(5,"div",8),r.tc(6),r.Pb(),r.Pb()}if(2&e){const e=r.ac(2);r.yb(3),r.fc("ngModel",e.event.team_id),r.yb(1),r.fc("ngForOf",e.dataEvent.teams),r.yb(2),r.uc(e.eventModel.errorsForm.get("team_id"))}}function p(e,t){if(1&e&&(r.Qb(0,"ion-select-option",13),r.tc(1),r.Pb()),2&e){const e=t.$implicit;r.fc("value",e.id),r.yb(1),r.uc(e.name)}}function g(e,t){if(1&e){const e=r.Rb();r.Qb(0,"form",4),r.Yb("ngSubmit",(function(){return r.nc(e),r.ac().submit()}))("keyup",(function(){return r.nc(e),r.ac().eventModel.errorsForm.clear()})),r.Qb(1,"ion-item"),r.Qb(2,"ion-label",5),r.tc(3,"Tipo de Evento"),r.Pb(),r.Qb(4,"ion-select",6),r.Yb("ngModelChange",(function(t){return r.nc(e),r.ac().event.type_event_id=t})),r.sc(5,v,2,2,"ion-select-option",7),r.Pb(),r.Qb(6,"div",8),r.tc(7),r.Pb(),r.Pb(),r.sc(8,f,7,3,"ion-item",9),r.Qb(9,"ion-item"),r.Qb(10,"ion-label",5),r.tc(11,"Jugador"),r.Pb(),r.Qb(12,"ion-select",10),r.Yb("ngModelChange",(function(t){return r.nc(e),r.ac().event.player_id=t})),r.sc(13,p,2,2,"ion-select-option",7),r.Pb(),r.Qb(14,"div",8),r.tc(15),r.Pb(),r.Pb(),r.Qb(16,"ion-item"),r.Qb(17,"ion-label",5),r.tc(18,"Tiempo"),r.Pb(),r.Qb(19,"ion-input",11),r.Yb("ngModelChange",(function(t){return r.nc(e),r.ac().event.time=t})),r.Pb(),r.Pb(),r.Qb(20,"div",8),r.tc(21),r.Pb(),r.Qb(22,"ion-button",12),r.tc(23,"Guardar"),r.Pb(),r.Pb()}if(2&e){const e=r.ac();r.yb(4),r.fc("ngModel",e.event.type_event_id),r.yb(1),r.fc("ngForOf",e.dataEvent.types_events),r.yb(2),r.uc(e.eventModel.errorsForm.get("type_event_id")),r.yb(1),r.fc("ngIf",!e.team_admin||e.twoTeam),r.yb(4),r.fc("ngModel",e.event.player_id),r.yb(1),r.fc("ngForOf",e.getPlayers()),r.yb(2),r.uc(e.eventModel.errorsForm.get("player_id")),r.yb(4),r.fc("ngModel",e.event.time),r.yb(2),r.uc(e.eventModel.errorsForm.get("time"))}}let y=(()=>{class e extends s.a{constructor(e,t,i,n,s,r,a){super(a,n),this.navParams=e,this.requestService=t,this.dialogService=i,this.viewCtrl=n,this.utilArray=s,this.paymentTeamService=r,this.twoTeam=!1,this.events=[],this.myDateFilter=e=>6==e.getDay(),this.gameModel=new o.a("Game",t),this.eventModel=new o.a("Event",t),this.game_id=e.get("game_id"),this.twoTeam=e.get("twoTeam"),this.id=e.get("id"),this.team_admin=e.get("team_admin"),this.events=e.get("events"),this.game=e.get("game")}initObject(){return Object(n.b)(this,void 0,void 0,(function*(){yield this.init(),this.loadEvent()}))}loadEvent(){this.id||(this.event={game_id:this.game_id,type_event_id:"",player_id:"",team_id:this.team_admin?this.team_admin.id:"",time:""})}init(){return Object(n.b)(this,void 0,void 0,(function*(){yield this.eventModel.api_function("dataEventCreate",{game_id:this.game_id}).subscribe(e=>{"success"==e.status&&(this.dataEvent=e.data,this.types_events=this.dataEvent.types_events),console.log("ty",this.types_events),console.log(this.dataEvent)})}))}getPlayers(){let e=this.event.team_id;if(this.team_admin&&(e=this.event.team_id),e){let t=this.dataEvent.teams.find(t=>t.id===e);if(t)return t.players}return[]}submit(){return Object(n.b)(this,void 0,void 0,(function*(){try{yield this.isValid()}catch(t){return console.log(t),void this.dialogService.showToast(t.message,"Error","danger")}let e=this.game["team_"+this.getTeamType()];if(this.paymentTeamService.setTeam(e),this.paymentTeamService.noPaid())return yield this.close(),void(yield this.paymentTeamService.showAlert());this.event.id?this.eventModel.api_update(this.event).subscribe(e=>{var t;"success"==e.status&&(this.dialogService.showToast(null!==(t=e.msjSuccess)&&void 0!==t?t:"Registrado"),console.log(e),this.dismiss(e.Event))}):this.eventModel.api_create(this.event).subscribe(e=>{var t;"success"==e.status&&(this.dialogService.showToast(null!==(t=e.msjSuccess)&&void 0!==t?t:"Registrado"),this.dismiss(e.Event))})}))}dismiss(e){this.viewCtrl.dismiss({event:e})}close(){return Object(n.b)(this,void 0,void 0,(function*(){yield this.viewCtrl.dismiss()}))}print(){console.log(this.event)}isValid(){return Object(n.b)(this,void 0,void 0,(function*(){if(!this.event.team_id)throw new Error("Seleccione un equipo");if(!this.event.type_event_id)throw new Error("Seleccione un evento");var e=this.getTeamType();let t=this.utilArray.findList(this.types_events,this.event.type_event_id);if(t&&"Gol"==t.name){let t=this.game[e+"_goals"];if(this.events.filter(e=>e.team_id==this.event.team_id&&"Gol"==e.type_event.name).length+1>t)throw new Error(0==t?"El equipo seleccionado no ha convertido goles en este partido, no es posible registrar este evento.":`No puede a\xf1adir m\xe1s de ${t} goles para \xe9ste equipo en \xe9ste partido.`)}return!0}))}getTeamType(){var e="l";return this.game.v_team==this.event.team_id&&(e="v"),e}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(a.pb),r.Lb(c.a),r.Lb(d.a),r.Lb(a.nb),r.Lb(b.a),r.Lb(l.a),r.Lb(u.m))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-event-form"]],features:[r.vb],decls:9,vars:1,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[3,"ngSubmit","keyup",4,"ngIf"],[3,"ngSubmit","keyup"],["position","floating"],["name","type_event_id",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[2,"color","red","padding-top","0.2rem"],[4,"ngIf"],["name","player_id",3,"ngModel","ngModelChange"],["type","number","name","time",3,"ngModel","ngModelChange"],["type","submit","expand","block"],[3,"value"],["name","team_id",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(r.Qb(0,"ion-header"),r.Qb(1,"ion-toolbar"),r.Qb(2,"ion-title"),r.tc(3,"Evento"),r.Pb(),r.Qb(4,"ion-buttons",0),r.Qb(5,"ion-button",1),r.Yb("click",(function(){return t.close()})),r.Mb(6,"ion-icon",2),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(7,"ion-content"),r.sc(8,g,24,9,"form",3),r.Pb()),2&e&&(r.yb(8),r.fc("ngIf",t.dataEvent))},directives:[a.x,a.jb,a.hb,a.j,a.i,a.y,a.r,u.k,m.i,m.e,m.f,a.D,a.G,a.W,a.ub,m.d,m.g,u.j,a.C,a.qb,a.X],styles:[""]}),e})()},qgph:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i("mrSG"),o=i("2Q27"),s=i("fXoL"),r=i("TEn/");let a=(()=>{class e{constructor(e){this.modalController=e,this.active=!1}setTeam(e){this.team=e}isActive(){return this.active}noPaid(){return!!this.active&&!this.team.paid}showAlert(){return Object(n.b)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:o.a,componentProps:{id:this.team.id}});return e.onDidDismiss().then(e=>{console.log("return paid")}),yield e.present()}))}}return e.\u0275fac=function(t){return new(t||e)(s.Ub(r.nb))},e.\u0275prov=s.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},rLe3:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("fXoL");let o=(()=>{class e{constructor(){}listAddLast(e,t){e.push(t)}listAddFirst(e,t){e.unshift(t)}listUpdate(e,t,i){let n=this.findIndexList(e,t);n>=0&&(e[n]=i)}listDelete(e,t){let i=this.findIndexList(e,t);i>=0&&e.splice(i,1)}findList(e,t){return e.find(e=>e.id===t)}findIndexList(e,t){return e.findIndex(e=>e.id===t)}updateAttribustesObject(e,t,i=[]){console.log("update attributes");for(let n of i)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);