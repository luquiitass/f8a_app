(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"mO+/":function(t,e,n){"use strict";n.r(e),n.d(e,"ListPageModule",(function(){return P}));var o=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),c=n("tyNb"),a=n("mrSG"),s=n("8xVP"),l=n("3i2x"),u=n("fXoL"),d=n("G/jy"),b=n("vuFD"),p=n("y/q6"),f=n("rLe3"),h=n("2Rin");function m(t,e){if(1&t&&(u.Qb(0,"ion-row",12),u.Qb(1,"ion-col",13),u.vc(2),u.bc(3,"date"),u.Pb(),u.Qb(4,"ion-col",14),u.vc(5),u.Pb(),u.Qb(6,"ion-col",10),u.vc(7),u.Pb(),u.Mb(8,"ion-ripple-effect"),u.Pb()),2&t){var n=e.$implicit;u.yb(2),u.wc(u.cc(3,3,n.date)),u.yb(3),u.wc(n.description),u.yb(2),u.xc(" $ ",n.amount," ")}}function g(t,e){1&t&&(u.Qb(0,"ion-row"),u.Qb(1,"ion-col",15),u.vc(2,"No se han registrados Gastos"),u.Pb(),u.Pb())}function v(t,e){if(1&t&&(u.Qb(0,"ion-content"),u.Qb(1,"div"),u.Qb(2,"div",6),u.vc(3),u.Pb(),u.Pb(),u.Mb(4,"br"),u.Qb(5,"ion-grid"),u.Qb(6,"ion-row",7),u.Qb(7,"ion-col",8),u.vc(8,"Fecha"),u.Pb(),u.Qb(9,"ion-col",9),u.vc(10,"Descripci\xf3n"),u.Pb(),u.Qb(11,"ion-col",10),u.vc(12,"Monto"),u.Pb(),u.Pb(),u.uc(13,m,9,5,"ion-row",11),u.uc(14,g,3,0,"ion-row",5),u.Pb(),u.Pb()),2&t){var n=u.ac();u.yb(3),u.xc(" ",n.team.name," "),u.yb(10),u.gc("ngForOf",n.team.expenses),u.yb(1),u.gc("ngIf",0==n.team.expenses.length)}}var y=[{path:"",component:function(){function t(t,e,n,o,i,r,c,a,l){this.route=t,this.router=e,this.requestService=n,this.dialogService=o,this.authUser=i,this.modalController=r,this.utilArray=c,this.actionSheetController=a,this.util=l,this.modelBalanceSheet=new s.a("BalanceSheet",n),this.modelTeam=new s.a("Team",n),this.modelAmountTeam=new s.a("AmountTeam",n),this.team_id=this.route.snapshot.paramMap.get("team_id")}return t.prototype.ngOnInit=function(){this.init()},t.prototype.init=function(){return Object(a.b)(this,void 0,void 0,(function(){var t=this;return Object(a.d)(this,(function(e){switch(e.label){case 0:return[4,this.dialogService.loadingProgres()];case 1:return e.sent(),this.modelTeam.api_functionModel(this.team_id,"pageExpenses").subscribe((function(e){"success"==e.status&&(t.team=e.data),t.dialogService.dimissLoaging()}),(function(e){t.dialogService.dimissLoaging()})),[2]}}))}))},t.prototype.showOptions=function(t){return Object(a.b)(this,void 0,void 0,(function(){var e,n=this;return Object(a.d)(this,(function(o){switch(o.label){case 0:return(e=[]).push({text:"Pagar",icon:"cash",handler:function(){console.log("Cancel clicked")}}),e.push({text:"Ver meses",icon:"calendar",handler:function(){console.log("Ver meses clicked"),n.router.navigateByUrl("/balance-sheet/months/"+t.id)}}),e.push({text:"Ver Pagos",icon:"wallet",handler:function(){console.log("Ver meses clicked"),n.router.navigateByUrl("/balance-sheet/payments/"+t.id)}}),e.push({text:"Eliminar",role:"destructive",icon:"trash",handler:function(){n.deleteBalanceSheet(t),console.log("Delete clicked")}}),e.push({text:"Cancelar",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}),[4,this.actionSheetController.create({header:"Operaciones de : "+t.user.completeName,cssClass:"my-custom-class",buttons:e})];case 1:return[4,o.sent().present()];case 2:return o.sent(),[2]}}))}))},t.prototype.deleteBalanceSheet=function(t){return Object(a.b)(this,void 0,void 0,(function(){var e=this;return Object(a.d)(this,(function(n){switch(n.label){case 0:return[4,this.dialogService.loadingProgres("Eliminando..")];case 1:return n.sent(),this.modelBalanceSheet.api_delete(t.id).subscribe((function(n){e.dialogService.dimissLoaging(),e.utilArray.listDelete(e.team.expenses,t.id)}),(function(t){e.dialogService.dimissLoaging()})),[2]}}))}))},t.prototype.add=function(){return Object(a.b)(this,void 0,void 0,(function(){var t,e=this;return Object(a.d)(this,(function(n){switch(n.label){case 0:return[4,this.modalController.create({component:l.a,componentProps:{team_id:this.team_id,amount_of_the_month:this.team.amount_balance}})];case 1:return(t=n.sent()).onDidDismiss().then((function(t){t.data&&t.data.expense&&e.utilArray.listAddFirst(e.team.expenses,t.data.expense)})),[4,t.present()];case 2:return[2,n.sent()]}}))}))},t.\u0275fac=function(e){return new(e||t)(u.Lb(c.a),u.Lb(c.g),u.Lb(d.a),u.Lb(b.a),u.Lb(p.a),u.Lb(r.nb),u.Lb(f.a),u.Lb(r.a),u.Lb(h.a))},t.\u0275cmp=u.Fb({type:t,selectors:[["app-list"]],decls:10,vars:1,consts:[["slot","start"],["defaultHref","/home/teams"],["slot","end"],[3,"click"],["name","log-out-outline"],[4,"ngIf"],[1,"team_name","ion-text-center"],[1,"bg-l1"],["size","3"],["size","7"],["size","2"],["class","row-table ion-activatable ripple-parent",4,"ngFor","ngForOf"],[1,"row-table","ion-activatable","ripple-parent"],["size","3",1,"border-right"],["size","7",1,"border-right","ion-text-left"],[1,"none","ion-text-center","active"]],template:function(t,e){1&t&&(u.Qb(0,"ion-header"),u.Qb(1,"ion-toolbar"),u.Qb(2,"ion-buttons",0),u.Mb(3,"ion-back-button",1),u.Pb(),u.Qb(4,"ion-title"),u.vc(5,"Gastos"),u.Pb(),u.Qb(6,"ion-buttons",2),u.Qb(7,"ion-button",3),u.Yb("click",(function(){return e.add()})),u.Mb(8,"ion-icon",4),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.uc(9,v,15,3,"ion-content",5)),2&t&&(u.yb(9),u.gc("ngIf",e.team))},directives:[r.x,r.jb,r.j,r.f,r.g,r.hb,r.i,r.y,o.l,r.r,r.w,r.S,r.q,o.k,r.Q],pipes:[o.d],styles:[".team_name[_ngcontent-%COMP%]{margin:5px;padding:10px;font-size:x-large;background-color:rgba(80,251,140,.5803921568627451)}.btn[_ngcontent-%COMP%]{font-size:xx-large}.text-hp[_ngcontent-%COMP%]{font-size:small;color:#c7cacc}.op[_ngcontent-%COMP%]{font-size:x-small}.row-table[_ngcontent-%COMP%]{padding-top:10px;font-size:large;border-bottom:1px solid hsla(0,0%,100%,.6392156862745098)}.ripple-parent[_ngcontent-%COMP%]{position:relative;overflow:hidden}.border-right[_ngcontent-%COMP%]{border-right:1px solid hsla(0,0%,100%,.6392156862745098)}.border-left[_ngcontent-%COMP%]{border-left:1px solid hsla(0,0%,100%,.6392156862745098)}.x-mes[_ngcontent-%COMP%]{font-size:large}"]}),t}()}],x=function(){function t(){}return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(e){return new(e||t)},imports:[[c.j.forChild(y)],c.j]}),t}(),P=function(){function t(){}return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(e){return new(e||t)},imports:[[o.b,i.a,r.kb,x]]}),t}()},rLe3:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("mrSG"),i=n("fXoL"),r=function(){function t(){}return t.prototype.listAddLast=function(t,e){t.push(e)},t.prototype.listAddFirst=function(t,e){t.unshift(e)},t.prototype.listUpdate=function(t,e,n){var o=this.findIndexList(t,e);o>=0&&(t[o]=n)},t.prototype.listDelete=function(t,e){var n=this.findIndexList(t,e);n>=0&&t.splice(n,1)},t.prototype.findList=function(t,e){return t.find((function(t){return t.id===e}))},t.prototype.findIndexList=function(t,e){return t.findIndex((function(t){return t.id===e}))},t.prototype.updateAttribustesObject=function(t,e,n){var i,r;void 0===n&&(n=[]),console.log("update attributes");try{for(var c=Object(o.h)(n),a=c.next();!a.done;a=c.next()){var s=a.value;e.hasOwnProperty(s)&&(t[s]=e[s])}}catch(l){i={error:l}}finally{try{a&&!a.done&&(r=c.return)&&r.call(c)}finally{if(i)throw i.error}}return t},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac=function(e){return new(e||t)},providedIn:"root"}),t}()}}]);