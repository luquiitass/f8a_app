!function(){function t(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){u=!0,a=t},f:function(){try{s||null==i.return||i.return()}finally{if(u)throw a}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{rLe3:function(e,i,o){"use strict";o.d(i,"a",(function(){return s}));var a=o("fXoL"),s=function(){var e=function(){function e(){n(this,e)}return r(e,[{key:"listAddLast",value:function(t,e){t.push(e)}},{key:"listAddFirst",value:function(t,e){t.unshift(e)}},{key:"listUpdate",value:function(t,e,n){var i=this.findIndexList(t,e);i>=0&&(t[i]=n)}},{key:"listDelete",value:function(t,e){var n=this.findIndexList(t,e);n>=0&&t.splice(n,1)}},{key:"findList",value:function(t,e){return t.find((function(t){return t.id===e}))}},{key:"findIndexList",value:function(t,e){return t.findIndex((function(t){return t.id===e}))}},{key:"updateAttribustesObject",value:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];console.log("update attributes");var r,o=t(i);try{for(o.s();!(r=o.n()).done;){var a=r.value;n.hasOwnProperty(a)&&(e[a]=n[a])}}catch(s){o.e(s)}finally{o.f()}return e}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},yXoJ:function(t,e,i){"use strict";i.r(e),i.d(e,"ListPageModule",(function(){return A}));var o=i("ofXK"),a=i("3Pt+"),s=i("TEn/"),u=i("tyNb"),l=i("mrSG"),c=i("JTEZ"),f=i("8xVP"),d=i("fXoL"),b=i("G/jy"),p=i("vuFD"),h=i("rLe3");function m(t,e){1&t&&(d.Qb(0,"ion-list-header",8),d.Qb(1,"ion-label"),d.tc(2,"Sin registros"),d.Pb(),d.Pb())}function y(t,e){if(1&t){var n=d.Rb();d.Qb(0,"ion-item"),d.Qb(1,"ion-label"),d.Qb(2,"h3"),d.tc(3),d.Pb(),d.Pb(),d.Qb(4,"ion-buttons",9),d.Qb(5,"ion-button",3),d.Yb("click",(function(){d.nc(n);var t=e.$implicit;return d.ac().showEdit(t)})),d.Mb(6,"ion-icon",10),d.Pb(),d.Qb(7,"ion-button",3),d.Yb("click",(function(){d.nc(n);var t=e.$implicit;return d.ac().confirmDelete(t)})),d.Mb(8,"ion-icon",11),d.Pb(),d.Pb(),d.Pb()}if(2&t){var i=e.$implicit;d.yb(3),d.uc(i.name)}}var v,g,w,P=[{path:"",component:(v=function(){function t(e,i,r,o,a,s){n(this,t),this.request=e,this.dialogService=i,this.modalController=r,this.dialog=o,this.route=a,this.utilArray=s,this.list=[],this.playerService=new f.a("Player",e),this.modelTeam=new f.a("Team",e),this.team_id=this.route.snapshot.paramMap.get("team_id")}return r(t,[{key:"ngOnInit",value:function(){this.load()}},{key:"load",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;console.log("load"),this.team_id?this.modelTeam.api_loadAttribute(this.team_id,"players").subscribe((function(n){(n.status="success")&&(console.log("response",n),t.list=n.Team.players),e&&e.target.complete()}),(function(t){e&&e.target.complete()})):this.playerService.api_function("all").subscribe((function(e){t.list=e.data}),(function(t){console.log(t)}))}},{key:"openModal",value:function(){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:c.a,componentProps:{team_id:this.team_id}});case 2:return(e=t.sent).onDidDismiss().then((function(t){t.data&&t.data.player&&n.utilArray.listAddFirst(n.list,t.data.player)})),t.next=6,e.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})))}},{key:"showEdit",value:function(t){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:c.a,componentProps:{id:t.id}});case 2:return(n=e.sent).onDidDismiss().then((function(t){if(t.data&&t.data.hasOwnProperty("player")){var e=t.data.player;i.utilArray.listUpdate(i.list,e.id,e)}})),e.next=6,n.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"confirmDelete",value:function(t){var e=this;this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este jugador",(function(n){e.delete(t)}))}},{key:"delete",value:function(t){var e=this;t.user_id?t.pivot.team_id&&this.modelTeam.api_functionModel(this.team_id,"removePlayer",{player_id:t.id}).subscribe((function(n){e.dialog.showToast("El Jugador ha sido eliminado de esta plantilla",null,"success"),e.utilArray.listDelete(e.list,t.id)}),(function(t){})):this.playerService.api_delete(t.id).subscribe((function(n){console.log(n),"success"==n.status&&(e.dialog.showToast("Jugador Eliminado",null,"success"),e.utilArray.listDelete(e.list,t.id))}))}}]),t}(),v.\u0275fac=function(t){return new(t||v)(d.Lb(b.a),d.Lb(p.a),d.Lb(s.lb),d.Lb(p.a),d.Lb(u.a),d.Lb(h.a))},v.\u0275cmp=d.Fb({type:v,selectors:[["app-list"]],decls:15,vars:3,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(t,e){1&t&&(d.Qb(0,"ion-header"),d.Qb(1,"ion-toolbar"),d.Qb(2,"ion-buttons",0),d.Mb(3,"ion-back-button",1),d.Pb(),d.Qb(4,"ion-title"),d.tc(5),d.Pb(),d.Qb(6,"ion-buttons",2),d.Qb(7,"ion-button",3),d.Yb("click",(function(){return e.openModal()})),d.Mb(8,"ion-icon",4),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Qb(9,"ion-content"),d.Qb(10,"ion-refresher",5),d.Yb("ionRefresh",(function(t){return e.load(t)})),d.Mb(11,"ion-refresher-content"),d.Pb(),d.Qb(12,"ion-list"),d.sc(13,m,3,0,"ion-list-header",6),d.sc(14,y,9,1,"ion-item",7),d.Pb(),d.Pb()),2&t&&(d.yb(5),d.vc("",e.team_id?"Plantilla de ":"","Jugadores"),d.yb(8),d.fc("ngIf",0==e.list.length),d.yb(1),d.fc("ngForOf",e.list))},directives:[s.x,s.hb,s.j,s.f,s.g,s.fb,s.i,s.y,s.r,s.M,s.N,s.H,o.k,o.j,s.I,s.G,s.D],styles:[""]}),v)}],k=((w=function t(){n(this,t)}).\u0275mod=d.Jb({type:w}),w.\u0275inj=d.Ib({factory:function(t){return new(t||w)},imports:[[u.j.forChild(P)],u.j]}),w),A=((g=function t(){n(this,t)}).\u0275mod=d.Jb({type:g}),g.\u0275inj=d.Ib({factory:function(t){return new(t||g)},imports:[[o.b,a.a,s.ib,k]]}),g)}}])}();