(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{BeZc:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n("mrSG"),o=n("9suA"),a=n("8xVP"),s=n("Dwri"),r=n("fXoL"),c=n("TEn/"),l=n("ofXK"),b=n("G/jy"),d=n("vuFD"),u=n("3Pt+");let h=(()=>{class e extends o.a{constructor(e,t,n,i,o){super(n,t),this.navParms=e,this.modalController=t,this.requestService=i,this.dialogService=o,this.team_id=e.get("team_id"),this.amountOfTheMonth=e.get("amount_of_the_month"),this.modelBalanceSheet=new a.a("BalanceSheet",i)}initObject(){this.balanceSheet={user:"",user_id:"",balance:0,team_id:this.team_id,balance_start:0}}submit(){return Object(i.b)(this,void 0,void 0,(function*(){yield this.dialogService.loadingProgres(),console.log("submit"),this.modelBalanceSheet.api_create(this.balanceSheet).subscribe(e=>{this.dialogService.dimissLoaging(),"success"==e.status&&this.dimiss(e.BalanceSheet)},e=>{this.dialogService.dimissLoaging()},()=>{this.dialogService.dimissLoaging()})}))}dimiss(e){this.modalController.dismiss({balanceSheet:e})}close(){this.modalController.dismiss()}log(e){console.log(e)}addUser(e=null){return Object(i.b)(this,void 0,void 0,(function*(){e&&e.preventDefault(),console.log("Add admins");const t=yield this.modalController.create({component:s.a,componentProps:{cancellable:!1,model:"User",function:"searchUser",multiple:!1,textSearch:"Nombre o email",listSelect:[]}});return t.onDidDismiss().then(e=>{if(e.data&&e.data.item){const t=e.data.item;this.balanceSheet.user=t.text,this.balanceSheet.user_id=t.id}}),yield t.present()}))}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(c.pb),r.Lb(c.nb),r.Lb(l.n),r.Lb(b.a),r.Lb(d.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-form-balance-sheet"]],features:[r.vb],decls:57,vars:8,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[3,"ngSubmit","keyup"],["position","floating"],["type","text","name","user",3,"ngModel","ngModelChange","click"],[2,"color","red","padding-top","0.2rem"],["type","text","name","balance_start",3,"ngModel","ngModelChange"],[1,"ion-text-center"],[1,"value"],["type","submit","expand","block"]],template:function(e,t){1&e&&(r.Qb(0,"ion-header"),r.Qb(1,"ion-toolbar"),r.Qb(2,"ion-title"),r.vc(3,"Nuevo Jugador"),r.Pb(),r.Qb(4,"ion-buttons",0),r.Qb(5,"ion-button",1),r.Yb("click",(function(){return t.close()})),r.Mb(6,"ion-icon",2),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(7,"ion-content"),r.Qb(8,"ion-card"),r.Qb(9,"ion-card-content"),r.Qb(10,"form",3),r.Yb("ngSubmit",(function(){return t.submit()}))("keyup",(function(){return t.modelBalanceSheet.errorsForm.clear()})),r.Qb(11,"ion-item"),r.Qb(12,"ion-label",4),r.vc(13,"Usuario"),r.Pb(),r.Qb(14,"ion-input",5),r.Yb("ngModelChange",(function(e){return t.balanceSheet.user=e}))("click",(function(e){return t.addUser(e)})),r.Pb(),r.Pb(),r.Qb(15,"div",6),r.vc(16),r.Pb(),r.Mb(17,"br"),r.Qb(18,"ion-item"),r.Qb(19,"ion-label",4),r.vc(20,"Saldo"),r.Pb(),r.Qb(21,"ion-input",7),r.Yb("ngModelChange",(function(e){return t.balanceSheet.balance_start=e})),r.Pb(),r.Pb(),r.Qb(22,"div"),r.vc(23,"A este saldo se le restara el monto del mes actual. Ej: si el saldo es "),r.Qb(24,"b"),r.vc(25,"-300"),r.Pb(),r.vc(26," y la cuota es de "),r.Qb(27,"b"),r.vc(28),r.Pb(),r.vc(29,", entonces el saldo ser\xe1 "),r.Qb(30,"b"),r.vc(31,"-800"),r.Pb(),r.Pb(),r.Qb(32,"div",6),r.vc(33),r.Pb(),r.Mb(34,"br"),r.Qb(35,"div"),r.Qb(36,"ion-row",8),r.Qb(37,"ion-col"),r.Qb(38,"ion-label"),r.vc(39,"Saldo:"),r.Pb(),r.Mb(40,"br"),r.Qb(41,"ion-label",9),r.vc(42),r.Pb(),r.Pb(),r.Qb(43,"ion-col"),r.Qb(44,"ion-label"),r.vc(45,"Valor cuota:"),r.Pb(),r.Mb(46,"br"),r.Qb(47,"ion-label",9),r.vc(48),r.Pb(),r.Pb(),r.Qb(49,"ion-col"),r.Qb(50,"ion-label"),r.vc(51,"Total:"),r.Pb(),r.Mb(52,"br"),r.Qb(53,"ion-label",9),r.vc(54),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(55,"ion-button",10),r.vc(56,"Guardar"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb()),2&e&&(r.yb(14),r.gc("ngModel",t.balanceSheet.user),r.yb(2),r.wc(t.modelBalanceSheet.errorsForm.get("user_id")),r.yb(5),r.gc("ngModel",t.balanceSheet.balance_start),r.yb(7),r.wc(t.amountOfTheMonth),r.yb(5),r.wc(t.modelBalanceSheet.errorsForm.get("balance_start")),r.yb(9),r.wc(t.balanceSheet.balance_start),r.yb(6),r.wc(t.amountOfTheMonth),r.yb(6),r.wc(t.balanceSheet.balance_start-t.amountOfTheMonth))},directives:[c.x,c.jb,c.hb,c.j,c.i,c.y,c.r,c.k,c.l,u.i,u.e,u.f,c.D,c.G,c.C,c.vb,u.d,u.g,c.S,c.q],styles:[".value[_ngcontent-%COMP%]{font-size:xx-large;font-weight:400}"]}),e})()},eLz6:function(e,t,n){"use strict";n.r(t),n.d(t,"BalanceSheetPageModule",(function(){return _}));var i=n("ofXK"),o=n("3Pt+"),a=n("TEn/"),s=n("tyNb"),r=n("mrSG"),c=n("8xVP"),l=n("BeZc"),b=n("fXoL"),d=n("G/jy"),u=n("vuFD"),h=n("y/q6"),m=n("rLe3");let g=(()=>{class e{transform(e,...t){if(void 0===e)return null;let n=e.sort((e,t)=>{var n=e.user.completeName.toLowerCase(),i=t.user.completeName.toLowerCase();return n<i?-1:n>i?1:0});return"pending"==t[0]?n.filter(e=>e.total<0):"upToDate"==t[0]?n.filter(e=>e.total>=0):n}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=b.Kb({name:"sortByUser",type:e,pure:!0}),e})();function p(e,t){if(1&e){const e=b.Rb();b.Qb(0,"ion-item"),b.Qb(1,"ion-label",16),b.vc(2,"Filtro"),b.Pb(),b.Qb(3,"ion-select",17),b.Yb("ngModelChange",(function(t){return b.oc(e),b.ac(2).filter=t})),b.Qb(4,"ion-select-option",18),b.vc(5,"Todos"),b.Pb(),b.Qb(6,"ion-select-option",19),b.vc(7,"Pendientes"),b.Pb(),b.Qb(8,"ion-select-option",20),b.vc(9,"Al d\xeda"),b.Pb(),b.Pb(),b.Pb()}if(2&e){const e=b.ac(2);b.yb(3),b.gc("ngModel",e.filter)}}function f(e,t){if(1&e){const e=b.Rb();b.Qb(0,"ion-row",21),b.Yb("click",(function(){b.oc(e);const n=t.$implicit;return b.ac(2).showOptions(n)})),b.Qb(1,"ion-col",22),b.vc(2),b.Pb(),b.Qb(3,"ion-col",23),b.vc(4),b.Pb(),b.Qb(5,"ion-col",24),b.Mb(6,"ion-icon",25),b.Pb(),b.Mb(7,"ion-ripple-effect"),b.Pb()}if(2&e){const e=t.$implicit;b.yb(2),b.wc(e.user.completeName),b.yb(2),b.wc(e.total)}}function v(e,t){1&e&&(b.Qb(0,"ion-row"),b.Qb(1,"ion-col",26),b.vc(2,"Debes a\xf1adir usuarios"),b.Pb(),b.Pb())}function P(e,t){if(1&e){const e=b.Rb();b.Qb(0,"ion-content"),b.Qb(1,"div"),b.Qb(2,"div",6),b.vc(3),b.Pb(),b.Pb(),b.Qb(4,"div",7),b.Qb(5,"div",8),b.Qb(6,"ion-button",9),b.Yb("click",(function(){return b.oc(e),b.ac().updateAmount()})),b.vc(7),b.Qb(8,"span",10),b.vc(9,"*Mes"),b.Pb(),b.Pb(),b.Pb(),b.Qb(10,"ion-text",11),b.vc(11," Presiona el monto para modificar el valor "),b.Pb(),b.Pb(),b.Mb(12,"br"),b.uc(13,p,10,1,"ion-item",5),b.Qb(14,"ion-grid"),b.Qb(15,"ion-row",12),b.Qb(16,"ion-col",13),b.vc(17,"Nombre"),b.Pb(),b.Qb(18,"ion-col",14),b.vc(19,"Saldo"),b.Pb(),b.Pb(),b.uc(20,f,8,2,"ion-row",15),b.bc(21,"sortByUser"),b.uc(22,v,3,0,"ion-row",5),b.Pb(),b.Pb()}if(2&e){const e=b.ac();b.yb(3),b.xc(" ",e.team.name," "),b.yb(4),b.xc(" $ ",e.team.amount_balance," "),b.yb(6),b.gc("ngIf",e.filter),b.yb(7),b.gc("ngForOf",b.dc(21,5,e.team.balance_sheets,e.filter)),b.yb(2),b.gc("ngIf",0==e.team.balance_sheets.length)}}const y=[{path:"",component:(()=>{class e{constructor(e,t,n,i,o,a,s,r){this.route=e,this.router=t,this.requestService=n,this.dialogService=i,this.authUser=o,this.modalController=a,this.utilArray=s,this.actionSheetController=r,this.filter="",this.modelBalanceSheet=new c.a("BalanceSheet",n),this.modelTeam=new c.a("Team",n),this.modelAmountTeam=new c.a("AmountTeam",n),this.team_id=this.route.snapshot.paramMap.get("team_id"),this.filter=this.route.snapshot.paramMap.get("filter")}ngOnInit(){this.init()}init(){return Object(r.b)(this,void 0,void 0,(function*(){yield this.dialogService.loadingProgres();let e={};this.route.snapshot.queryParamMap.get("pending")&&(e.pending=1),this.modelTeam.api_functionModel(this.team_id,"pageBalanceSheet",e).subscribe(e=>{"success"==e.status&&(this.team=e.data),this.dialogService.dimissLoaging()},e=>{this.dialogService.dimissLoaging()})}))}updateAmount(){return Object(r.b)(this,void 0,void 0,(function*(){let e=prompt("Ingrese el nuevo valor",this.team.amount_balance);e&&(yield this.dialogService.loadingProgres("Modificando moto"),this.modelAmountTeam.api_create({price:e,team_id:this.team_id}).subscribe(t=>{"success"==t.status&&(this.team.amount_balance=e),this.dialogService.dimissLoaging()},e=>{this.dialogService.dimissLoaging()}))}))}add(){return Object(r.b)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:l.a,componentProps:{team_id:this.team_id,amount_of_the_month:this.team.amount_balance}});return e.onDidDismiss().then(e=>{e.data&&e.data.balanceSheet&&this.utilArray.listAddFirst(this.team.balance_sheets,e.data.balanceSheet)}),yield e.present()}))}showOptions(e){return Object(r.b)(this,void 0,void 0,(function*(){let t=[];t.push({text:"Pagar",icon:"cash",handler:()=>{console.log("Cancel clicked"),this.paid(e)}}),t.push({text:"Ver meses",icon:"calendar",handler:()=>{console.log("Ver meses clicked"),this.router.navigateByUrl("/balance-sheet/months/"+e.id)}}),t.push({text:"Ver Pagos",icon:"wallet",handler:()=>{console.log("Ver meses clicked"),this.router.navigateByUrl("/balance-sheet/payments/"+e.id)}}),t.push({text:"Eliminar",role:"destructive",icon:"trash",handler:()=>{this.deleteBalanceSheet(e),console.log("Delete clicked")}}),t.push({text:"Cancelar",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}});const n=yield this.actionSheetController.create({header:"Operaciones de : "+e.user.completeName,cssClass:"my-custom-class",buttons:t});yield n.present()}))}deleteBalanceSheet(e){return Object(r.b)(this,void 0,void 0,(function*(){yield this.dialogService.loadingProgres("Eliminando.."),this.modelBalanceSheet.api_delete(e.id).subscribe(t=>{this.dialogService.dimissLoaging(),this.utilArray.listDelete(this.team.balance_sheets,e.id)},e=>{this.dialogService.dimissLoaging()})}))}paid(e){return Object(r.b)(this,void 0,void 0,(function*(){let t=prompt("Monto a pagar","0");parseInt(t)>0&&confirm("Estas seguro de realizar el pago de "+t+" para "+e.user.completeName)&&(yield this.dialogService.loadingProgres("registrando pago..."),this.modelBalanceSheet.api_functionModel(e.id,"addPayment",{amount:t}).subscribe(t=>{this.dialogService.dimissLoaging(),"success"==t.status&&this.utilArray.listUpdate(this.team.balance_sheets,e.id,t.data),console.log("response addPayment",t)},e=>{this.dialogService.dimissLoaging()}))}))}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(s.a),b.Lb(s.g),b.Lb(d.a),b.Lb(u.a),b.Lb(h.a),b.Lb(a.nb),b.Lb(m.a),b.Lb(a.a))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-balance-sheet"]],decls:10,vars:2,consts:[["slot","start"],[3,"defaultHref"],["slot","end"],[3,"click"],["name","person-add-outline"],[4,"ngIf"],[1,"team_name","ion-text-center"],[1,"ion-text-center"],[1,"amount_balance"],[1,"btn",3,"click"],[1,"x-mes"],[1,"text-hp"],[1,"bg-l1"],["size","9"],["size","2"],["class","row-table ion-activatable ripple-parent",3,"click",4,"ngFor","ngForOf"],["position","floating"],["name","v_team","interface","action-sheet",3,"ngModel","ngModelChange"],["value","all"],["value","pending"],["value","upToDate"],[1,"row-table","ion-activatable","ripple-parent",3,"click"],["size","9",1,"border-right"],["size","2",1,"border-right","ion-text-right"],["size","1"],["name","ellipsis-vertical-outline"],[1,"none","ion-text-center","active"]],template:function(e,t){1&e&&(b.Qb(0,"ion-header"),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-buttons",0),b.Mb(3,"ion-back-button",1),b.Pb(),b.Qb(4,"ion-title"),b.vc(5,"Balamce de Cuotas"),b.Pb(),b.Qb(6,"ion-buttons",2),b.Qb(7,"ion-button",3),b.Yb("click",(function(){return t.add()})),b.Mb(8,"ion-icon",4),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.uc(9,P,23,8,"ion-content",5)),2&e&&(b.yb(3),b.ic("defaultHref","/team/profile/",t.team_id,""),b.yb(6),b.gc("ngIf",t.team))},directives:[a.x,a.jb,a.j,a.f,a.g,a.hb,a.i,a.y,i.l,a.r,a.eb,a.w,a.S,a.q,i.k,a.D,a.G,a.W,a.ub,o.d,o.g,a.X,a.Q],pipes:[g],styles:[".team_name[_ngcontent-%COMP%]{margin:5px;padding:10px;font-size:x-large;background-color:rgba(80,251,140,.5803921568627451)}.btn[_ngcontent-%COMP%]{font-size:xx-large}.text-hp[_ngcontent-%COMP%]{font-size:small;color:#c7cacc}.op[_ngcontent-%COMP%]{font-size:x-small}.row-table[_ngcontent-%COMP%]{padding-top:10px;font-size:large;border-bottom:1px solid hsla(0,0%,100%,.6392156862745098)}.ripple-parent[_ngcontent-%COMP%]{position:relative;overflow:hidden}.border-right[_ngcontent-%COMP%]{border-right:1px solid hsla(0,0%,100%,.6392156862745098)}.border-left[_ngcontent-%COMP%]{border-left:1px solid hsla(0,0%,100%,.6392156862745098)}.x-mes[_ngcontent-%COMP%]{font-size:large}"]}),e})()},{path:"form-balance-sheet",loadChildren:()=>n.e(61).then(n.bind(null,"UKxq")).then(e=>e.FormBalanceSheetPageModule)}];let Q=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[s.j.forChild(y)],s.j]}),e})(),S=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[i.b]]}),e})(),_=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[i.b,o.a,a.kb,Q,S]]}),e})()},rLe3:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("fXoL");let o=(()=>{class e{constructor(){}listAddLast(e,t){e.push(t)}listAddFirst(e,t){e.unshift(t)}listUpdate(e,t,n){let i=this.findIndexList(e,t);i>=0&&(e[i]=n)}listDelete(e,t){let n=this.findIndexList(e,t);n>=0&&e.splice(n,1)}findList(e,t){return e.find(e=>e.id===t)}findIndexList(e,t){return e.findIndex(e=>e.id===t)}updateAttribustesObject(e,t,n=[]){console.log("update attributes");for(let i of n)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);