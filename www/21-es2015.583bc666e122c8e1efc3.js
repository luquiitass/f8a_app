(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{GFJk:function(t,e,n){"use strict";n.r(e),n.d(e,"GamePageModule",(function(){return C}));var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),c=n("tyNb"),a=n("mrSG"),r=n("8xVP"),m=n("fXoL"),d=n("G/jy"),l=n("2Rin"),b=n("vuFD"),u=n("QbbR"),g=n("OXCg");function f(t,e){if(1&t&&(m.Qb(0,"ion-card"),m.Qb(1,"ion-card-header"),m.Qb(2,"ion-card-subtitle"),m.tc(3,"Ubicaci\xf3n"),m.Pb(),m.Qb(4,"ion-card-title"),m.tc(5),m.Pb(),m.Pb(),m.Pb()),2&t){const t=m.ac(2);m.yb(5),m.uc(t.game.location)}}function p(t,e){if(1&t&&(m.Qb(0,"div",3),m.Mb(1,"app-game-list",4),m.Qb(2,"div",5),m.Qb(3,"ion-badge",6),m.tc(4),m.Pb(),m.Pb(),m.sc(5,f,6,1,"ion-card",7),m.Mb(6,"app-comments",8),m.Pb()),2&t){const t=m.ac();m.yb(1),m.fc("game",t.game),m.yb(3),m.uc(t.game.status),m.yb(1),m.fc("ngIf",t.game.location),m.yb(1),m.fc("idRelation",t.id)("nameRelationModel","Game")}}const h=[{path:"",component:(()=>{class t{constructor(t,e,n,i){this.route=t,this.requesService=e,this.util=n,this.dialogService=i,this.firstLoading=!0,this.id=this.route.snapshot.paramMap.get("id"),this.gameModel=new r.a("Game",e)}ngOnInit(){this.init()}init(t=null){return Object(a.b)(this,void 0,void 0,(function*(){this.firstLoading&&(yield this.dialogService.loadingProgres(),this.firstLoading=!1),this.gameModel.api_functionModel(this.id,"dataProfile").subscribe(e=>{"success"==e.status&&(this.game=e.data),t&&t.target.complete(),this.dialogService.dimissLoaging()})}))}}return t.\u0275fac=function(e){return new(e||t)(m.Lb(c.a),m.Lb(d.a),m.Lb(l.a),m.Lb(b.a))},t.\u0275cmp=m.Fb({type:t,selectors:[["app-game"]],decls:8,vars:1,consts:[["slot","start"],["defaultHref","/home/games"],["class","game",4,"ngIf"],[1,"game"],[3,"game"],[1,"ion-text-center"],["color","tertiary"],[4,"ngIf"],[3,"idRelation","nameRelationModel"]],template:function(t,e){1&t&&(m.Qb(0,"ion-header"),m.Qb(1,"ion-toolbar"),m.Qb(2,"ion-title"),m.tc(3,"Partido"),m.Pb(),m.Qb(4,"ion-buttons",0),m.Mb(5,"ion-back-button",1),m.Pb(),m.Pb(),m.Pb(),m.Qb(6,"ion-content"),m.sc(7,p,7,5,"div",2),m.Pb()),2&t&&(m.yb(7),m.fc("ngIf",e.game))},directives:[s.x,s.hb,s.fb,s.j,s.f,s.g,s.r,i.k,u.a,s.h,g.a,s.k,s.m,s.n,s.o],styles:["",".team-list[_ngcontent-%COMP%]{display:block}.vs[_ngcontent-%COMP%]{width:6%}.game[_ngcontent-%COMP%]{width:100%;padding:10px;background-repeat:no-repeat;background-size:100%;font-size:small}.team[_ngcontent-%COMP%]{display:flex;align-items:center;width:47%;flex-flow:column-reverse}.team-name[_ngcontent-%COMP%]{margin-left:15px;margin-right:15px;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.img-team[_ngcontent-%COMP%]{border-radius:50%;background-position:50%;width:30px;height:30px}.contenedor[_ngcontent-%COMP%]{margin:10px auto;display:flex;align-items:center;justify-content:center;width:100%;text-align:-webkit-center}.date[_ngcontent-%COMP%]{text-align:center}"]}),t})()}];let P=(()=>{class t{}return t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({factory:function(e){return new(e||t)},imports:[[c.j.forChild(h)],c.j]}),t})();var y=n("j1ZV");let C=(()=>{class t{}return t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({factory:function(e){return new(e||t)},imports:[[i.b,o.a,s.ib,P,y.a]]}),t})()},OXCg:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var i=n("mrSG"),o=n("fXoL"),s=n("8xVP"),c=n("wd/R"),a=n("6g0+"),r=n("y/q6"),m=n("G/jy"),d=n("2Rin"),l=n("TEn/"),b=n("vuFD"),u=n("rLe3"),g=n("ofXK"),f=n("3Pt+"),p=n("tyNb");function h(t,e){1&t&&(o.Qb(0,"div"),o.Qb(1,"ion-card-title",13),o.tc(2,"Comentarios"),o.Pb(),o.Mb(3,"div",14),o.Pb())}function P(t,e){1&t&&(o.Qb(0,"ion-item"),o.Qb(1,"ion-note",15),o.tc(2,"Se el primero en comentar!!!"),o.Pb(),o.Pb())}function y(t,e){if(1&t){const t=o.Rb();o.Qb(0,"ion-button",30),o.Yb("click",(function(){o.nc(t);const e=o.ac(2).$implicit;return o.ac().openMenuComment(e)})),o.Mb(1,"ion-icon",31),o.Pb()}}function C(t,e){if(1&t){const t=o.Rb();o.Qb(0,"div",19),o.sc(1,y,2,0,"ion-button",20),o.Qb(2,"ion-thumbnail",21),o.Qb(3,"ion-img",22),o.Yb("click",(function(){o.nc(t);const e=o.ac().$implicit;return o.ac().openViewer(e)})),o.Pb(),o.Pb(),o.Qb(4,"div",23),o.Qb(5,"div",24),o.Qb(6,"ion-text",25),o.Qb(7,"a",26),o.tc(8),o.Pb(),o.Pb(),o.Pb(),o.Qb(9,"div",27),o.Qb(10,"ion-text",28),o.tc(11),o.Pb(),o.Pb(),o.Qb(12,"div",29),o.Qb(13,"ion-text",28),o.tc(14),o.Pb(),o.Pb(),o.Pb(),o.Pb()}if(2&t){const t=o.ac().$implicit,e=o.ac();o.yb(1),o.fc("ngIf",e.authUser.user.id==t.user_id),o.yb(2),o.fc("src",e.getPhoto(t)),o.yb(4),o.fc("routerLink","/users/"+t.user.id+"/profile"),o.yb(1),o.wc(" ",t.user.last_name," ",t.user.first_name," "),o.yb(3),o.vc(" ",t.body," "),o.yb(3),o.vc(" ",e.formatDate(t.created_at)," ")}}function x(t,e){1&t&&o.Mb(0,"ion-spinner",37)}function M(t,e){if(1&t){const t=o.Rb();o.Qb(0,"div",32),o.Qb(1,"ion-text"),o.tc(2,"Editar comentario"),o.Pb(),o.Qb(3,"ion-textarea",33),o.Yb("ngModelChange",(function(e){return o.nc(t),o.ac(2).commentEdit.body=e})),o.Pb(),o.Qb(4,"div",34),o.Qb(5,"ion-button",35),o.Yb("click",(function(){return o.nc(t),o.ac(2).editComment()})),o.sc(6,x,1,0,"ion-spinner",12),o.tc(7," Actualizar "),o.Pb(),o.Qb(8,"ion-button",36),o.Yb("click",(function(){o.nc(t);const e=o.ac().$implicit;return o.ac().cancelEdit(e)})),o.tc(9,"Cancelar"),o.Pb(),o.Pb(),o.Pb()}if(2&t){const t=o.ac(2);o.yb(3),o.fc("ngModel",t.commentEdit.body),o.yb(2),o.fc("disabled",t.updatingComment),o.yb(1),o.fc("ngIf",t.updatingComment),o.yb(2),o.fc("disabled",t.updatingComment)}}function v(t,e){if(1&t&&(o.Qb(0,"ion-item",16),o.sc(1,C,15,7,"div",17),o.sc(2,M,10,4,"div",18),o.Pb()),2&t){const t=e.$implicit;o.yb(1),o.fc("ngIf",!t.edit),o.yb(1),o.fc("ngIf",t.edit)}}function w(t,e){1&t&&o.Mb(0,"ion-icon",38)}function Q(t,e){1&t&&o.Mb(0,"ion-spinner",37)}let O=(()=>{class t{constructor(t,e,n,i,c,a,r){this.authService=t,this.request=e,this.util=n,this.modalController=i,this.dialog=c,this.utilArray=a,this.authUser=r,this.comments=[],this.withTitle=!0,this.onUpdateComments=new o.n,this.listComments=[],this.sending=!1,this.updatingComment=!1,this.commentModel=new s.a("Comment",e)}ngOnInit(){this.init()}init(){this.comment={idRelation:this.idRelation,nameRelationModel:this.nameRelationModel,body:this.commentText},this.resetComment(),this.loadCooments()}loadCooments(t=null){this.listComments=this.comments,this.comments&&this.comments.length>0||(this.relationModel=new s.a(this.nameRelationModel,this.request),this.relationModel.api_loadAttribute(this.idRelation,"comments").subscribe(e=>{"success"==e.status&&(this.listComments=e[this.nameRelationModel].comments),t&&t.target.complete()},e=>{t&&t.target.complete()}))}resetComment(){this.comment.body=""}send(){console.log("send"),this.comment.body&&(this.comment.body=this.comment.body.trim(),this.sending=!0,this.commentModel.api_function("add",this.comment).subscribe(t=>{"success"==t.status&&(this.listComments.push(t.data),this.onUpdateComments&&this.onUpdateComments.emit(this.listComments),this.resetComment()),this.sending=!1},t=>{this.sending=!1}))}formatDate(t){return c(t).locale("es").fromNow()}getPhoto(t){return t.user&&t.user.photo?t.user.photo.urlCompleteThumb:"assets/images/profile.jpg"}openViewer(t){return Object(i.b)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:a.c,componentProps:{src:t.user.photo?t.user.photo.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});return yield e.present()}))}ngOnChanges(t){t.comments&&this.loadCooments()}openMenuComment(t){return Object(i.b)(this,void 0,void 0,(function*(){this.dialog.actionSheetEditDelete(()=>{t.edit=!0,this.commentEdit=Object.assign({},t)},()=>{this.confirmDelete(t)})}))}confirmDelete(t){this.dialog.presentAlertConfirm("Confirmar","\xbfEstas seguro de eliminar este comentario?",e=>{this.delete(t)})}delete(t){this.commentModel.api_delete(t.id).subscribe(e=>{console.log(e),"success"==e.status&&(this.dialog.showToast("Comentario eliminado.",null,"success"),this.utilArray.listDelete(this.listComments,t.id))})}cancelEdit(t){t.edit=!1,this.commentEdit={body:""}}editComment(){return Object(i.b)(this,void 0,void 0,(function*(){console.log("edit comment api"),this.updatingComment=!0,this.commentEdit.body=this.commentEdit.body.trim(),this.commentModel.api_update(this.commentEdit).subscribe(t=>{"success"==t.status&&(this.commentEdit.edit=!1,this.utilArray.listUpdate(this.listComments,this.commentEdit.id,this.commentEdit)),this.updatingComment=!1},t=>{console.log(t),this.updatingComment=!1})}))}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(r.a),o.Lb(m.a),o.Lb(d.a),o.Lb(l.lb),o.Lb(b.a),o.Lb(u.a),o.Lb(r.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-comments"]],inputs:{nameRelationModel:"nameRelationModel",idRelation:"idRelation",comments:"comments",withTitle:"withTitle"},outputs:{onUpdateComments:"onUpdateComments"},features:[o.wb],decls:15,vars:7,consts:[[2,"margin-top","20px"],[4,"ngIf"],["lines","none",2,"margin","0px","padding","0px"],["class","team-list",4,"ngFor","ngForOf"],[1,"content-new"],[3,"ngSubmit"],[1,"content-comment"],[1,"content-comment-text"],["name","body","placeholder","A\xf1ade un comentario...",1,"editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-comment-btn","ion-align-self-end"],["size","small","color","primary","type","submit",1,"edditor-send",3,"disabled","click"],["name","send-sharp",4,"ngIf"],["name","lines",4,"ngIf"],[1,"ion-text-center","title"],[1,"separator"],[2,"font-size","large","margin","15px"],[1,"team-list"],["class","comment-item",4,"ngIf"],["class","comment-edit",4,"ngIf"],[1,"comment-item"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],["slot","start",1,"comment-image"],[1,"comment-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],[1,"comment-data"],[1,"comment-user"],["color","dark"],[2,"text-decoration","blink",3,"routerLink"],[1,"comment-body","first-uppercase"],["color","light"],[1,"comment-date"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],[1,"comment-edit"],["name","body","placeholder","A\xf1ade un comentario...",1,"form-control","editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-right","comment-edit-bts"],["slot","end",3,"disabled","click"],["slot","end","color","light",3,"disabled","click"],["name","lines"],["name","send-sharp"]],template:function(t,e){1&t&&(o.Qb(0,"div",0),o.sc(1,h,4,0,"div",1),o.Qb(2,"div"),o.Qb(3,"ion-list",2),o.sc(4,P,3,0,"ion-item",1),o.sc(5,v,3,2,"ion-item",3),o.Pb(),o.Qb(6,"div",4),o.Qb(7,"form",5),o.Yb("ngSubmit",(function(){return e.send()})),o.Qb(8,"div",6),o.Qb(9,"div",7),o.Qb(10,"ion-textarea",8),o.Yb("ngModelChange",(function(t){return e.comment.body=t})),o.Pb(),o.Pb(),o.Qb(11,"div",9),o.Qb(12,"ion-fab-button",10),o.Yb("click",(function(){return e.send()})),o.sc(13,w,1,0,"ion-icon",11),o.sc(14,Q,1,0,"ion-spinner",12),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb()),2&t&&(o.yb(1),o.fc("ngIf",e.withTitle),o.yb(3),o.fc("ngIf",e.listComments.length<1),o.yb(1),o.fc("ngForOf",e.listComments),o.yb(5),o.fc("ngModel",e.comment.body),o.yb(2),o.fc("disabled",e.sending),o.yb(1),o.fc("ngIf",!e.sending),o.yb(1),o.fc("ngIf",e.sending))},directives:[g.k,l.H,g.j,f.i,f.e,f.f,l.db,l.sb,f.d,f.g,l.u,l.o,l.D,l.L,l.eb,l.z,l.cb,p.i,l.qb,l.i,l.y,l.Y],styles:[".comment-item[_ngcontent-%COMP%]{width:100%;display:flex}.comment-image[_ngcontent-%COMP%]{font-size:large}.comment-data[_ngcontent-%COMP%]{width:100%}.comment-user[_ngcontent-%COMP%]{font-size:large;margin-top:10px;font-weight:700}.comment-body[_ngcontent-%COMP%]{font-size:medium;font-style:italic;margin-left:5px;color:#2f4f4f;white-space:pre-wrap}.comment-date[_ngcontent-%COMP%]{font-size:x-small;text-align:right;color:#2f4f4f}.editor-text[_ngcontent-%COMP%]{box-shadow:2px 2px 5px #999;padding:2px;border-radius:15px}.editor-send[_ngcontent-%COMP%]{margin-left:-5px}.content-comment[_ngcontent-%COMP%]{margin:10px;display:flex}.content-comment-text[_ngcontent-%COMP%]{width:90%}.content-comment-btn[_ngcontent-%COMP%]{width:10%}.comment-image[_ngcontent-%COMP%]{margin-top:3px;margin-right:5px}.comment-edit[_ngcontent-%COMP%]{width:100%;margin-bottom:15px;padding:5px}.comment-edit[_ngcontent-%COMP%], .comment-edit-bts[_ngcontent-%COMP%]{margin-top:10px}.title[_ngcontent-%COMP%]{color:#fff;padding-top:10px;padding-bottom:5px;font-size:x-large;border-top-left-radius:10px;border-top-right-radius:10px}.content-new[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{background:var(--background-l1)}.content-new[_ngcontent-%COMP%]{border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding-top:5px;padding-bottom:10px}"]}),t})()},j1ZV:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var i=n("ofXK"),o=n("TEn/"),s=n("tyNb"),c=n("6g0+"),a=n("3Pt+"),r=n("fXoL");let m=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},imports:[[i.b,o.ib.forRoot(),a.a,s.j,c.b]]}),t})()},rLe3:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("fXoL");let o=(()=>{class t{constructor(){}listAddLast(t,e){t.push(e)}listAddFirst(t,e){t.unshift(e)}listUpdate(t,e,n){let i=this.findIndexList(t,e);i>=0&&(t[i]=n)}listDelete(t,e){let n=this.findIndexList(t,e);n>=0&&t.splice(n,1)}findList(t,e){return t.find(t=>t.id===e)}findIndexList(t,e){return t.findIndex(t=>t.id===e)}updateAttribustesObject(t,e,n=[]){console.log("update attributes");for(let i of n)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);