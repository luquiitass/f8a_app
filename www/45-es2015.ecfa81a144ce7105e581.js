(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{rLe3:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("fXoL");let o=(()=>{class t{constructor(){}listAddLast(t,e){t.push(e)}listAddFirst(t,e){t.unshift(e)}listUpdate(t,e,i){let n=this.findIndexList(t,e);n>=0&&(t[n]=i)}listDelete(t,e){let i=this.findIndexList(t,e);i>=0&&t.splice(i,1)}findList(t,e){return t.find(t=>t.id===e)}findIndexList(t,e){return t.findIndex(t=>t.id===e)}updateAttribustesObject(t,e,i=[]){console.log("update attributes");for(let n of i)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},vjB9:function(t,e,i){"use strict";i.r(e),i.d(e,"ListPageModule",(function(){return w}));var n=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),s=i("tyNb"),a=i("mrSG"),c=i("8xVP"),b=i("BiaS"),l=i("fXoL"),d=i("G/jy"),u=i("vuFD"),g=i("y/q6"),h=i("rLe3"),p=i("2Rin");function f(t,e){if(1&t&&(l.Qb(0,"ion-row",12),l.Qb(1,"ion-col",13),l.vc(2),l.bc(3,"date"),l.Pb(),l.Qb(4,"ion-col",14),l.vc(5),l.Pb(),l.Qb(6,"ion-col",10),l.vc(7),l.Pb(),l.Mb(8,"ion-ripple-effect"),l.Pb()),2&t){const t=e.$implicit;l.yb(2),l.wc(l.cc(3,3,t.date)),l.yb(3),l.wc(t.description),l.yb(2),l.xc(" $ ",t.amount," ")}}function m(t,e){1&t&&(l.Qb(0,"ion-row"),l.Qb(1,"ion-col",15),l.vc(2,"No se han registrados Gastos"),l.Pb(),l.Pb())}function v(t,e){if(1&t&&(l.Qb(0,"ion-content"),l.Qb(1,"div"),l.Qb(2,"div",6),l.vc(3),l.Pb(),l.Pb(),l.Mb(4,"br"),l.Qb(5,"ion-grid"),l.Qb(6,"ion-row",7),l.Qb(7,"ion-col",8),l.vc(8,"Fecha"),l.Pb(),l.Qb(9,"ion-col",9),l.vc(10,"Descripci\xf3n"),l.Pb(),l.Qb(11,"ion-col",10),l.vc(12,"Monto"),l.Pb(),l.Pb(),l.uc(13,f,9,5,"ion-row",11),l.uc(14,m,3,0,"ion-row",5),l.Pb(),l.Pb()),2&t){const t=l.ac();l.yb(3),l.xc(" ",t.team.name," "),l.yb(10),l.gc("ngForOf",t.team.entrys),l.yb(1),l.gc("ngIf",0==t.team.entrys.length)}}const y=[{path:"",component:(()=>{class t{constructor(t,e,i,n,o,r,s,a,b){this.route=t,this.router=e,this.requestService=i,this.dialogService=n,this.authUser=o,this.modalController=r,this.utilArray=s,this.actionSheetController=a,this.util=b,this.modelEntry=new c.a("Entry",i),this.modelTeam=new c.a("Team",i),this.team_id=this.route.snapshot.paramMap.get("team_id")}ngOnInit(){this.init()}init(){return Object(a.b)(this,void 0,void 0,(function*(){yield this.dialogService.loadingProgres(),this.modelTeam.api_functionModel(this.team_id,"pageEntrys").subscribe(t=>{"success"==t.status&&(this.team=t.data),this.dialogService.dimissLoaging()},t=>{this.dialogService.dimissLoaging()})}))}deleteEntry(t){return Object(a.b)(this,void 0,void 0,(function*(){yield this.dialogService.loadingProgres("Eliminando.."),this.modelEntry.api_delete(t.id).subscribe(e=>{this.dialogService.dimissLoaging(),this.utilArray.listDelete(this.team.entrys,t.id)},t=>{this.dialogService.dimissLoaging()})}))}add(){return Object(a.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:b.a,componentProps:{team_id:this.team_id,amount_of_the_month:this.team.amount_balance}});return t.onDidDismiss().then(t=>{t.data&&t.data.entry&&this.utilArray.listAddFirst(this.team.entrys,t.data.entry)}),yield t.present()}))}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(s.a),l.Lb(s.g),l.Lb(d.a),l.Lb(u.a),l.Lb(g.a),l.Lb(r.nb),l.Lb(h.a),l.Lb(r.a),l.Lb(p.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-list"]],decls:10,vars:1,consts:[["slot","start"],["defaultHref","/home/teams"],["slot","end"],[3,"click"],["name","log-in-outline"],[4,"ngIf"],[1,"team_name","ion-text-center"],[1,"bg-l1"],["size","3"],["size","7"],["size","2"],["class","row-table ion-activatable ripple-parent",4,"ngFor","ngForOf"],[1,"row-table","ion-activatable","ripple-parent"],["size","3",1,"border-right"],["size","7",1,"border-right","ion-text-left"],[1,"none","ion-text-center","active"]],template:function(t,e){1&t&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-buttons",0),l.Mb(3,"ion-back-button",1),l.Pb(),l.Qb(4,"ion-title"),l.vc(5,"Ingresos"),l.Pb(),l.Qb(6,"ion-buttons",2),l.Qb(7,"ion-button",3),l.Yb("click",(function(){return e.add()})),l.Mb(8,"ion-icon",4),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.uc(9,v,15,3,"ion-content",5)),2&t&&(l.yb(9),l.gc("ngIf",e.team))},directives:[r.x,r.jb,r.j,r.f,r.g,r.hb,r.i,r.y,n.l,r.r,r.w,r.S,r.q,n.k,r.Q],pipes:[n.d],styles:[".team_name[_ngcontent-%COMP%]{margin:5px;padding:10px;font-size:x-large;background-color:rgba(80,251,140,.5803921568627451)}.btn[_ngcontent-%COMP%]{font-size:xx-large}.text-hp[_ngcontent-%COMP%]{font-size:small;color:#c7cacc}.op[_ngcontent-%COMP%]{font-size:x-small}.row-table[_ngcontent-%COMP%]{padding-top:10px;font-size:large;border-bottom:1px solid hsla(0,0%,100%,.6392156862745098)}.ripple-parent[_ngcontent-%COMP%]{position:relative;overflow:hidden}.border-right[_ngcontent-%COMP%]{border-right:1px solid hsla(0,0%,100%,.6392156862745098)}.border-left[_ngcontent-%COMP%]{border-left:1px solid hsla(0,0%,100%,.6392156862745098)}.x-mes[_ngcontent-%COMP%]{font-size:large}"]}),t})()}];let P=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[s.j.forChild(y)],s.j]}),t})(),w=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[n.b,o.a,r.kb,P]]}),t})()}}]);