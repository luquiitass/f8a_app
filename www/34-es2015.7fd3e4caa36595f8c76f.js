(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{Oaqg:function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var o=i("mrSG"),s=i("8xVP"),n=i("9suA"),r=i("fXoL"),d=i("G/jy"),a=i("vuFD"),c=i("TEn/"),b=i("3Pt+"),l=i("ofXK");function u(e,t){if(1&e&&(r.Qb(0,"ion-select-option",10),r.tc(1),r.Pb()),2&e){const e=t.$implicit;r.fc("value",e),r.yb(1),r.uc(e)}}let m=(()=>{class e extends n.a{constructor(e,t,i,o){super(),this.request=e,this.dialogService=t,this.viewCtrl=i,this.navParams=o,this.redes=["Facebook","Instagram","WhatsApp","Twitter"],this.placeholders={Facebook:"F\xfatbol-8-Alem-1730791230489387",Instagram:"atlantaf8/",WhatsApp:"3754453618",Twitter:""},this.names={Facebook:"Pagina de Facebook",Instagram:"Pagina de Instagram",WhatsApp:"Telefono",Twitter:"Cuenta de twitter"},this.redModel=new s.a("Red",e),this.id=o.get("id"),this.idModel=o.get("idModel"),this.nameModel=o.get("nameModel")}initObject(){this.init()}init(){return Object(o.b)(this,void 0,void 0,(function*(){this.red={name:"",url:"",name_model:this.nameModel,model_id:this.idModel},this.id&&(yield this.dialogService.loadingProgres(null),this.redModel.api_find(this.id).subscribe(e=>{this.red=e.Red,this.dialogService.dimissLoaging()}))}))}submit(){this.saveRed()}dismiss(e){this.viewCtrl.dismiss({red:e})}close(){this.viewCtrl.dismiss()}saveRed(){this.red.id?this.redModel.api_update(this.red).subscribe(e=>{var t;"success"==e.status&&(this.dialogService.showToast(null!==(t=e.msjSuccess)&&void 0!==t?t:"Registrado"),this.dismiss(e.Red))}):this.redModel.api_create(this.red).subscribe(e=>{var t;"success"==e.status&&(this.dialogService.showToast(null!==(t=e.msjSuccess)&&void 0!==t?t:"Registrado"),this.dismiss(e.Red))})}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(d.a),r.Lb(a.a),r.Lb(c.lb),r.Lb(c.nb))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-redes-form"]],features:[r.vb],decls:24,vars:7,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[3,"ngSubmit","keyup"],["position","floating"],["name","position_id",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[2,"color","red","padding-top","0.2rem"],["type","text","name","url",3,"ngModel","placeholder","ngModelChange"],["type","submit","expand","block"],[3,"value"]],template:function(e,t){1&e&&(r.Qb(0,"ion-header"),r.Qb(1,"ion-toolbar"),r.Qb(2,"ion-title"),r.tc(3,"Red Social"),r.Pb(),r.Qb(4,"ion-buttons",0),r.Qb(5,"ion-button",1),r.Yb("click",(function(){return t.close()})),r.Mb(6,"ion-icon",2),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(7,"ion-content"),r.Qb(8,"form",3),r.Yb("ngSubmit",(function(){return t.submit()}))("keyup",(function(){return t.redModel.errorsForm.clear()})),r.Qb(9,"ion-item"),r.Qb(10,"ion-label",4),r.tc(11,"Red"),r.Pb(),r.Qb(12,"ion-select",5),r.Yb("ngModelChange",(function(e){return t.red.name=e})),r.sc(13,u,2,2,"ion-select-option",6),r.Pb(),r.Qb(14,"div",7),r.tc(15),r.Pb(),r.Pb(),r.Qb(16,"ion-item"),r.Qb(17,"ion-label",4),r.tc(18),r.Pb(),r.Qb(19,"ion-input",8),r.Yb("ngModelChange",(function(e){return t.red.url=e})),r.Pb(),r.Pb(),r.Qb(20,"div",7),r.tc(21),r.Pb(),r.Qb(22,"ion-button",9),r.tc(23,"Guardar"),r.Pb(),r.Pb(),r.Pb()),2&e&&(r.yb(12),r.fc("ngModel",t.red.name),r.yb(1),r.fc("ngForOf",t.redes),r.yb(2),r.uc(t.redModel.errorsForm.get("position_id")),r.yb(3),r.uc(t.names[t.red.name]),r.yb(1),r.fc("ngModel",t.red.url)("placeholder","Ej: "+t.placeholders[t.red.name]),r.yb(2),r.uc(t.redModel.errorsForm.get("url")))},directives:[c.x,c.hb,c.fb,c.j,c.i,c.y,c.r,b.i,b.e,b.f,c.D,c.G,c.U,c.rb,b.d,b.g,l.j,c.C,c.sb,c.V],styles:[""]}),e})()},scH4:function(e,t,i){"use strict";i.r(t),i.d(t,"RedesFormPageModule",(function(){return l}));var o=i("ofXK"),s=i("3Pt+"),n=i("TEn/"),r=i("tyNb"),d=i("Oaqg"),a=i("fXoL");const c=[{path:"",component:d.a}];let b=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[r.j.forChild(c)],r.j]}),e})(),l=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[o.b,s.a,n.ib,b]]}),e})()}}]);