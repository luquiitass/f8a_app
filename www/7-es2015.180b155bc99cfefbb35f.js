(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2Q27":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var o=i("9suA"),n=i("fXoL"),s=i("TEn/"),r=i("tyNb"),c=i("ofXK");let a=(()=>{class e extends o.a{constructor(e,t,i,o){super(o,e),this.viewCtrl=e,this.router=t,this.navParams=i,this.id=i.get("id")}ngOnInit(){}close(){this.viewCtrl.dismiss()}initObject(){}goPayment(){this.router.navigateByUrl("/payment/create/"+this.id),this.close()}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(s.nb),n.Lb(r.g),n.Lb(s.pb),n.Lb(c.m))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-alert-create-team"]],features:[n.vb],decls:16,vars:0,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[1,"text"],[1,"ion-margin-top"],[1,"ion-float-right",3,"click"]],template:function(e,t){1&e&&(n.Qb(0,"ion-header"),n.Qb(1,"ion-toolbar"),n.Qb(2,"ion-title"),n.tc(3,"Pago pendiente"),n.Pb(),n.Qb(4,"ion-buttons",0),n.Qb(5,"ion-button",1),n.Yb("click",(function(){return t.close()})),n.Mb(6,"ion-icon",2),n.Pb(),n.Pb(),n.Pb(),n.Pb(),n.Qb(7,"ion-content"),n.Qb(8,"ion-card"),n.Qb(9,"ion-card-content"),n.Qb(10,"ion-text",3),n.tc(11," Para que los administradores de este equipo puedan modificar los datos (Fotos,nombre, jugadores, redes, sucesos de partidos , etc) es necesario abonar $500 mensualmente. "),n.Pb(),n.Mb(12,"br"),n.Qb(13,"div",4),n.Qb(14,"ion-button",5),n.Yb("click",(function(){return t.goPayment()})),n.tc(15," Realizar el pago"),n.Pb(),n.Pb(),n.Pb(),n.Pb(),n.Pb())},directives:[s.x,s.jb,s.hb,s.j,s.i,s.y,s.r,s.k,s.l,s.eb],styles:[".text[_ngcontent-%COMP%]{font-size:x-large}"]}),e})()},Oaqg:function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var o=i("mrSG"),n=i("8xVP"),s=i("9suA"),r=i("fXoL"),c=i("G/jy"),a=i("vuFD"),l=i("TEn/"),d=i("ofXK"),b=i("sjK5"),u=i("3Pt+");function h(e,t){if(1&e){const e=r.Rb();r.Qb(0,"ion-button",11),r.Yb("click",(function(){return r.nc(e),r.ac().chatService.toggle()})),r.Mb(1,"ion-icon",12),r.Pb()}if(2&e){const e=r.ac();r.fc("color",e.chatService.isVisible?"success":"")}}function m(e,t){if(1&e&&(r.Qb(0,"ion-select-option",13),r.tc(1),r.Pb()),2&e){const e=t.$implicit;r.fc("value",e),r.yb(1),r.uc(e)}}let p=(()=>{class e extends s.a{constructor(e,t,i,o,s,r){super(s,i),this.request=e,this.dialogService=t,this.viewCtrl=i,this.navParams=o,this.chatService=r,this.redes=["Facebook","Instagram","WhatsApp","Twitter"],this.placeholders={Facebook:"F\xfatbol-8-Alem-1730791230489387",Instagram:"atlantaf8/",WhatsApp:"3754453618",Twitter:""},this.names={Facebook:"Pagina de Facebook",Instagram:"Pagina de Instagram",WhatsApp:"Telefono",Twitter:"Cuenta de twitter"},this.redModel=new n.a("Red",e),this.id=o.get("id"),this.idModel=o.get("idModel"),this.nameModel=o.get("nameModel")}initObject(){this.init()}init(){return Object(o.b)(this,void 0,void 0,(function*(){this.red={name:"",url:"",name_model:this.nameModel,model_id:this.idModel},this.id&&(yield this.dialogService.loadingProgres(null),this.redModel.api_find(this.id).subscribe(e=>{this.red=e.Red,this.dialogService.dimissLoaging()}))}))}submit(){this.saveRed()}dismiss(e){this.viewCtrl.dismiss({red:e})}close(){this.viewCtrl.dismiss()}saveRed(){this.red.id?this.redModel.api_update(this.red).subscribe(e=>{var t;"success"==e.status&&(this.dialogService.showToast(null!==(t=e.msjSuccess)&&void 0!==t?t:"Registrado"),this.dismiss(e.Red))}):this.redModel.api_create(this.red).subscribe(e=>{var t;"success"==e.status&&(this.dialogService.showToast(null!==(t=e.msjSuccess)&&void 0!==t?t:"Registrado"),this.dismiss(e.Red))})}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(c.a),r.Lb(a.a),r.Lb(l.nb),r.Lb(l.pb),r.Lb(d.m),r.Lb(b.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-redes-form"]],features:[r.vb],decls:25,vars:8,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[3,"color","click",4,"ngIf"],[3,"ngSubmit","keyup"],["position","floating"],["name","position_id",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[2,"color","red","padding-top","0.2rem"],["type","text","name","url",3,"ngModel","placeholder","ngModelChange"],["type","submit","expand","block"],[3,"color","click"],["name","help-circle-outline"],[3,"value"]],template:function(e,t){1&e&&(r.Qb(0,"ion-header"),r.Qb(1,"ion-toolbar"),r.Qb(2,"ion-title"),r.tc(3,"Red Social"),r.Pb(),r.Qb(4,"ion-buttons",0),r.Qb(5,"ion-button",1),r.Yb("click",(function(){return t.close()})),r.Mb(6,"ion-icon",2),r.Pb(),r.sc(7,h,2,1,"ion-button",3),r.Pb(),r.Pb(),r.Pb(),r.Qb(8,"ion-content"),r.Qb(9,"form",4),r.Yb("ngSubmit",(function(){return t.submit()}))("keyup",(function(){return t.redModel.errorsForm.clear()})),r.Qb(10,"ion-item"),r.Qb(11,"ion-label",5),r.tc(12,"Red"),r.Pb(),r.Qb(13,"ion-select",6),r.Yb("ngModelChange",(function(e){return t.red.name=e})),r.sc(14,m,2,2,"ion-select-option",7),r.Pb(),r.Qb(15,"div",8),r.tc(16),r.Pb(),r.Pb(),r.Qb(17,"ion-item"),r.Qb(18,"ion-label",5),r.tc(19),r.Pb(),r.Qb(20,"ion-input",9),r.Yb("ngModelChange",(function(e){return t.red.url=e})),r.Pb(),r.Pb(),r.Qb(21,"div",8),r.tc(22),r.Pb(),r.Qb(23,"ion-button",10),r.tc(24,"Guardar"),r.Pb(),r.Pb(),r.Pb()),2&e&&(r.yb(7),r.fc("ngIf",t.chatService.isInit),r.yb(6),r.fc("ngModel",t.red.name),r.yb(1),r.fc("ngForOf",t.redes),r.yb(2),r.uc(t.redModel.errorsForm.get("position_id")),r.yb(3),r.uc(t.names[t.red.name]),r.yb(1),r.fc("ngModel",t.red.url)("placeholder","Ej: "+t.placeholders[t.red.name]),r.yb(2),r.uc(t.redModel.errorsForm.get("url")))},directives:[l.x,l.jb,l.hb,l.j,l.i,l.y,d.k,l.r,u.i,u.e,u.f,l.D,l.G,l.W,l.ub,u.d,u.g,d.j,l.C,l.vb,l.X],styles:[""]}),e})()},dXyq:function(e,t,i){"use strict";i.d(t,"a",(function(){return M}));var o=i("mrSG"),n=i("8xVP"),s=i("Oaqg"),r=i("fXoL"),c=i("G/jy"),a=i("vuFD"),l=i("TEn/"),d=i("2Rin"),b=i("rLe3"),u=i("m/P+"),h=i("qgph"),m=i("ofXK");function p(e,t){if(1&e){const e=r.Rb();r.Qb(0,"ion-button",5),r.Yb("click",(function(){return r.nc(e),r.ac(2).openModal()})),r.Mb(1,"ion-icon",6),r.Pb()}}function f(e,t){if(1&e){const e=r.Rb();r.Qb(0,"ion-refresher",7),r.Yb("ionRefresh",(function(t){return r.nc(e),r.ac(2).load(t)})),r.Mb(1,"ion-refresher-content"),r.Pb()}}function g(e,t){1&e&&(r.Qb(0,"ion-list-header",8),r.Qb(1,"ion-label"),r.tc(2,"No posee Redes Sociales"),r.Pb(),r.Pb())}function P(e,t){if(1&e){const e=r.Rb();r.Qb(0,"ion-col",9),r.Qb(1,"ion-button",14),r.Yb("click",(function(){r.nc(e);const t=r.ac().$implicit;return r.ac(2).showEdit(t)})),r.Mb(2,"ion-icon",15),r.Pb(),r.Pb()}}function v(e,t){if(1&e){const e=r.Rb();r.Qb(0,"ion-col",9),r.Qb(1,"ion-button",14),r.Yb("click",(function(){r.nc(e);const t=r.ac().$implicit;return r.ac(2).confirmDelete(t)})),r.Mb(2,"ion-icon",16),r.Pb(),r.Pb()}}function w(e,t){if(1&e){const e=r.Rb();r.Qb(0,"ion-row"),r.Qb(1,"ion-col",9),r.Mb(2,"ion-icon",10),r.Pb(),r.Qb(3,"ion-col",11),r.Qb(4,"h4",12),r.Yb("click",(function(){r.nc(e);const i=t.$implicit;return r.ac(2).select(i)})),r.tc(5),r.Pb(),r.Qb(6,"p"),r.tc(7),r.Pb(),r.Pb(),r.sc(8,P,3,0,"ion-col",13),r.sc(9,v,3,0,"ion-col",13),r.Pb()}if(2&e){const e=t.$implicit,i=r.ac(2);r.yb(2),r.Bb("icon-red ",i.getColorIcon(e),""),r.fc("name",i.getIcon(e)),r.yb(3),r.uc(e.url),r.yb(2),r.uc(e.name),r.yb(1),r.fc("ngIf",i.isAdmin),r.yb(1),r.fc("ngIf",i.isAdmin)}}function y(e,t){if(1&e&&(r.Qb(0,"ion-card"),r.Qb(1,"ion-card-header"),r.Qb(2,"ion-item"),r.Qb(3,"ion-card-title"),r.tc(4," Redes Sociales "),r.Pb(),r.sc(5,p,2,0,"ion-button",1),r.Pb(),r.Pb(),r.Qb(6,"ion-card-content"),r.sc(7,f,2,0,"ion-refresher",2),r.sc(8,g,3,0,"ion-list-header",3),r.Qb(9,"ion-grid"),r.sc(10,w,10,8,"ion-row",4),r.Pb(),r.Pb(),r.Pb()),2&e){const e=r.ac();r.yb(5),r.fc("ngIf",e.isAdmin),r.yb(2),r.fc("ngIf",e.withRefresh),r.yb(1),r.fc("ngIf",e.list&&0==e.list.length),r.yb(2),r.fc("ngForOf",e.list)}}let M=(()=>{class e{constructor(e,t,i,o,s,r,c,a){this.request=e,this.dialog=t,this.modalController=i,this.util=o,this.utilArray=s,this.nacCtrl=r,this.inAppBrowser=c,this.paymentTeamService=a,this.isAdmin=!1,this.withRefresh=!1,this.redModel=new n.a("Red",e)}ngOnInit(){this.load()}load(e=null){this.redModel.api_function("pageTeam",{nameModel:this.nameModel,idModel:this.idModel}).subscribe(t=>{this.list=t.data,console.log(t),e&&e.target.complete()},t=>{console.error(t),e&&e.target.complete()})}openModal(){return Object(o.b)(this,void 0,void 0,(function*(){if("Team"==this.nameModel&&this.paymentTeamService.noPaid())return void(yield this.paymentTeamService.showAlert());const e=yield this.modalController.create({component:s.a,componentProps:{nameModel:this.nameModel,idModel:this.idModel}});return e.onDidDismiss().then(e=>{e.data.red&&this.utilArray.listAddLast(this.list,e.data.red)}),yield e.present()}))}showEdit(e){return Object(o.b)(this,void 0,void 0,(function*(){if("Team"==this.nameModel&&this.paymentTeamService.noPaid())return void(yield this.paymentTeamService.showAlert());const t=yield this.modalController.create({component:s.a,componentProps:{id:e.id}});return t.onDidDismiss().then(e=>{if(e.data.red){const t=e.data.red;this.utilArray.listUpdate(this.list,t.id,t)}}),yield t.present()}))}confirmDelete(e){return Object(o.b)(this,void 0,void 0,(function*(){"Team"==this.nameModel&&this.paymentTeamService.noPaid()?yield this.paymentTeamService.showAlert():this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar esta Red Social",t=>{this.delete(e)})}))}delete(e){this.redModel.api_delete(e.id).subscribe(t=>{console.log(t),"success"==t.status&&(this.dialog.showToast("Red social Eliminada",null,"success"),this.utilArray.listDelete(this.list,e.id))})}getIcon(e){switch(e.name){case"Facebook":return"logo-facebook";case"Instagram":return"logo-instagram";case"WhatsApp":return"logo-whatsapp";case"Twitter":return"logo-twitter"}}getColorIcon(e){switch(e.name){case"Facebook":return"facebook-color";case"Instagram":return"instagram-color";case"WhatsApp":return"whatsapp-color";case"Twitter":return"twitter-color"}}openRed(e){if(e&&e.url){let t="";switch(e.name){case"Facebook":t="https://www.facebook.com/";break;case"Instagram":t="https://www.instagram.com/";break;case"WhatsApp":return"whatsapp-color";case"Twitter":t="https://twitter.com/"}}}select(e){this.openAppUrl(e.name,e.url)}openAppUrl(e,t,i){switch(e){case"Facebook":this.openUrl("https://www.facebook.com/"+t);break;case"Instagram":this.openUrl("https://www.instagram.com/"+t);break;case"Twitter":this.openUrl("https://twitter.com/"+t);case"WhatsApp":this.openUrl("https://api.whatsapp.com/send?phone=+549"+t)}}openUrl(e){this.inAppBrowser.create(e,"_self")}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(c.a),r.Lb(a.a),r.Lb(l.nb),r.Lb(d.a),r.Lb(b.a),r.Lb(l.ob),r.Lb(u.a),r.Lb(h.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-red-list"]],inputs:{nameModel:"nameModel",idModel:"idModel",isAdmin:"isAdmin",withRefresh:"withRefresh"},decls:1,vars:1,consts:[[4,"ngIf"],["slot","end",3,"click",4,"ngIf"],["slot","fixed",3,"ionRefresh",4,"ngIf"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["slot","end",3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["color","tertiary"],["size","1"],[3,"name"],["size","8"],[1,"name",3,"click"],["size","1",4,"ngIf"],["size","small",3,"click"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(e,t){1&e&&r.sc(0,y,11,4,"ion-card",0),2&e&&r.fc("ngIf",t.list&&t.list.length>0||t.isAdmin)},directives:[m.k,l.k,l.m,l.D,l.o,l.l,l.w,m.j,l.i,l.y,l.O,l.P,l.I,l.G,l.S,l.q],styles:[".icon-red[_ngcontent-%COMP%]{font-size:30px}.name[_ngcontent-%COMP%]{font-size:large;margin-left:10px}.url[_ngcontent-%COMP%]{font-size:small;color:0}"]}),e})()},qgph:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var o=i("mrSG"),n=i("2Q27"),s=i("fXoL"),r=i("TEn/");let c=(()=>{class e{constructor(e){this.modalController=e,this.active=!1}setTeam(e){this.team=e}isActive(){return this.active}noPaid(){return!!this.active&&!this.team.paid}showAlert(){return Object(o.b)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:n.a,componentProps:{id:this.team.id}});return e.onDidDismiss().then(e=>{console.log("return paid")}),yield e.present()}))}}return e.\u0275fac=function(t){return new(t||e)(s.Ub(r.nb))},e.\u0275prov=s.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);