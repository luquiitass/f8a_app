!function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{j1ZV:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var o=e("ofXK"),r=e("TEn/"),c=e("tyNb"),a=e("6g0+"),s=e("3Pt+"),u=e("fXoL"),l=function(){var t=function t(){i(this,t)};return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(n){return new(n||t)},imports:[[o.b,r.ib.forRoot(),s.a,c.j,a.b]]}),t}()},zYH4:function(t,e,o){"use strict";o.r(e),o.d(e,"ProfilePageModule",(function(){return D}));var r=o("ofXK"),c=o("3Pt+"),a=o("TEn/"),s=o("tyNb"),u=o("mrSG"),l=o("8xVP"),b=o("fXoL"),p=o("G/jy"),d=o("ChyW"),f=o("vuFD"),g=o("6g0+"),h=o("CimB"),m=o("GSQ0"),v=o("y/q6"),P=o("2Rin"),k=o("rLe3");function y(t,n){if(1&t){var i=b.Rb();b.Qb(0,"ion-button",22),b.Yb("click",(function(){b.nc(i);var t=b.ac(2);return t.openMenuPublication(t.publication)})),b.Mb(1,"ion-icon",23),b.Pb()}}function w(t,n){if(1&t&&(b.Qb(0,"div",24),b.Mb(1,"img",25),b.Pb()),2&t){var i=b.ac(2);b.yb(1),b.fc("src",i.publication.image.urlComplete,b.oc)}}function x(t,n){1&t&&b.Mb(0,"ion-icon",26)}function M(t,n){1&t&&b.Mb(0,"ion-spinner",27)}function Q(t,n){if(1&t){var i=b.Rb();b.Qb(0,"ion-card",1),b.Qb(1,"ion-card-content"),b.sc(2,y,2,0,"ion-button",2),b.Qb(3,"div",3),b.Qb(4,"ion-thumbnail",4),b.Qb(5,"ion-img",5),b.Yb("click",(function(){b.nc(i);var t=b.ac();return t.showPhotoUser(t.publication.user.photo)})),b.Pb(),b.Pb(),b.Qb(6,"div",6),b.Qb(7,"div",7),b.tc(8),b.Pb(),b.Qb(9,"div",8),b.tc(10),b.Pb(),b.Pb(),b.Pb(),b.Qb(11,"div",9),b.Qb(12,"ion-text",10),b.tc(13),b.Pb(),b.Pb(),b.sc(14,w,2,1,"div",11),b.Qb(15,"ion-grid"),b.Qb(16,"ion-row"),b.Qb(17,"ion-col",12),b.Yb("click",(function(){b.nc(i);var t=b.ac();return t.showPublication(t.publication,"likes")})),b.Qb(18,"ion-text",10),b.Mb(19,"ion-icon",13),b.tc(20),b.Pb(),b.Pb(),b.Qb(21,"ion-col",14),b.Yb("click",(function(){b.nc(i);var t=b.ac();return t.showPublication(t.publication,"comments")})),b.Qb(22,"ion-text"),b.Mb(23,"ion-icon",15),b.tc(24),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Mb(25,"div",16),b.Qb(26,"div"),b.Qb(27,"ion-buttons",17),b.Qb(28,"ion-button",18),b.Yb("click",(function(){b.nc(i);var t=b.ac();return t.like(t.publication)})),b.sc(29,x,1,0,"ion-icon",19),b.sc(30,M,1,0,"ion-spinner",20),b.Pb(),b.Qb(31,"ion-button",21),b.Yb("click",(function(){b.nc(i);var t=b.ac();return t.showPublication(t.publication,"comments")})),b.Mb(32,"ion-icon",15),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb()}if(2&t){var e=b.ac();b.yb(2),b.fc("ngIf",e.authUser.user.id==e.publication.user_id),b.yb(3),b.fc("src",e.utilPhoto.getPhotoUser(e.publication.user)),b.yb(3),b.wc(" ",e.publication.user.last_name," ",e.publication.user.first_name," "),b.yb(2),b.vc(" ",e.util.getFormarHumans(e.publication.created_at)," "),b.yb(3),b.vc(" ",e.publication.text," "),b.yb(1),b.fc("ngIf",e.publication.image_id),b.yb(6),b.vc(" ",e.publication.likes_count," "),b.yb(4),b.vc(" ",e.publication.comments_count," "),b.yb(4),b.fc("color",e.publication.liked?"danger":"primary")("disabled",!!e.publication.processLike),b.yb(1),b.fc("ngIf",!e.publication.processLike),b.yb(1),b.fc("ngIf",e.publication.processLike)}}var _,L=((_=function(){function t(n,e,o,r,c,a,s){i(this,t),this.authUser=n,this.util=e,this.modalController=o,this.request=r,this.utilArray=c,this.dialog=a,this.utilPhoto=s,this.publcationModel=new l.a("Publication",r),this.user=n.user}return n(t,[{key:"ngOnInit",value:function(){}},{key:"showPhotoUser",value:function(t){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("show photo ",t),n.next=3,this.modalController.create({component:g.c,componentProps:{src:t?t.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});case 3:return i=n.sent,n.next=6,i.present();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"like",value:function(t){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.processLike=!0,t.liked?this.publcationModel.api_functionModel(t.id,"removeLike",{user_id:this.user.id}).subscribe((function(n){"success"==n.status&&(t.liked=!t.liked,t.likes_count-=1),t.processLike=!1}),(function(n){console.error(n),t.processLike=!1})):this.publcationModel.api_functionModel(t.id,"addLike",{user_id:this.user.id}).subscribe((function(n){"success"==n.status&&(t.liked=!t.liked,t.likes_count+=1),t.processLike=!1}),(function(n){console.error(n),t.processLike=!1}));case 1:case"end":return n.stop()}}),n,this)})))}},{key:"showPublication",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"comments";return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var e,o=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.modalController.create({component:h.a,componentProps:{id:t.id,segment:n}});case 2:return(e=i.sent).onDidDismiss().then((function(t){console.log("update publication");var n=t.data.publication;o.utilArray.listUpdate(o.user.publications,n.id,n)})),i.next=6,e.present();case 6:return i.abrupt("return",i.sent);case 7:case"end":return i.stop()}}),i,this)})))}},{key:"openMenuPublication",value:function(t){var n=this;this.dialog.actionSheetEditDelete((function(){n.editPublication(t)}),(function(){n.dialog.presentAlertConfirm("Alerta","\xbfSeguro de eliminar esta aplicaci\xf3n?",(function(){n.publcationModel.api_delete(t.id).subscribe((function(i){(i.status="success")&&(n.utilArray.listDelete(n.user.publications,t.id),n.dialog.showToast("Publicacion Eliminada",null,"success"))}))}))}))}},{key:"editPublication",value:function(t){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:m.a,componentProps:{id:t.id}});case 2:return(i=n.sent).onDidDismiss().then((function(t){if(console.log("update publicacion"),t.data&&t.data.publication){var n=t.data.publication;e.utilArray.listUpdate(e.user.publications,n.id,n)}})),n.next=6,i.present();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n,this)})))}}]),t}()).\u0275fac=function(t){return new(t||_)(b.Lb(v.a),b.Lb(P.a),b.Lb(a.lb),b.Lb(p.a),b.Lb(k.a),b.Lb(f.a),b.Lb(d.a))},_.\u0275cmp=b.Fb({type:_,selectors:[["app-publication"]],inputs:{publication:"publication"},decls:1,vars:1,consts:[["style","width: 100%;",4,"ngIf"],[2,"width","100%"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],[1,"publication-user"],["slot","start"],[1,"user-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],[1,"user"],[1,"name"],[1,"date"],[1,"publication-text"],["color","dark"],["class","publication-image ion-text-center",4,"ngIf"],[1,"ion-text-left",3,"click"],["name","heart-outline","color","danger"],[1,"ion-text-right",3,"click"],["name","chatbubble-ellipses-outline"],[1,"separator"],["expand","full"],["expand","full",2,"width","50%",3,"color","disabled","click"],["name","heart-outline",4,"ngIf"],["name","lines",4,"ngIf"],["expand","full","color","primary",2,"width","50%",3,"click"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],[1,"publication-image","ion-text-center"],[3,"src"],["name","heart-outline"],["name","lines"]],template:function(t,n){1&t&&b.sc(0,Q,33,13,"ion-card",0),2&t&&b.fc("ngIf",n.publication)},directives:[r.k,a.k,a.l,a.eb,a.z,a.cb,a.w,a.Q,a.q,a.y,a.j,a.i,a.Y],styles:[".publication-user[_ngcontent-%COMP%]{display:flex}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{display:block}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-top:5px;font-size:medium}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-left:5px;font-size:xx-small}.publication-text[_ngcontent-%COMP%]{margin:3px 3px 3px 15px;font-size:medium}.publication-image[_ngcontent-%COMP%]{align-self:auto}.separator[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;border-bottom:1px solid rgba(63,62,62,.671)}"]}),_);function C(t,n){if(1&t&&(b.Qb(0,"ion-card"),b.Qb(1,"ion-card-content"),b.Mb(2,"ion-img",2),b.Pb(),b.Qb(3,"ion-card-header"),b.Qb(4,"ion-card-title"),b.tc(5),b.Pb(),b.Pb(),b.Pb()),2&t){var i=b.ac();b.yb(2),b.fc("src",i.utilPhoto.getPhotoUser(i.user)),b.yb(3),b.vc(" ",i.user.completeName," ")}}function O(t,n){1&t&&b.Mb(0,"app-publication",4),2&t&&b.fc("publication",n.$implicit)}function j(t,n){if(1&t&&(b.Qb(0,"ion-card"),b.Qb(1,"ion-card-header"),b.Qb(2,"ion-card-title"),b.tc(3,"Publicaciones"),b.Pb(),b.Pb(),b.Qb(4,"ion-card-content"),b.sc(5,O,1,1,"app-publication",3),b.Pb(),b.Pb()),2&t){var i=b.ac();b.yb(5),b.fc("ngForOf",i.user.publications)}}var I,R,U,z=[{path:"",component:(I=function(){function t(n,e,o,r){i(this,t),this.route=n,this.request=e,this.utilPhoto=o,this.dialogService=r,this.firstLoading=!0,this.id=this.route.snapshot.paramMap.get("id"),this.userModel=new l.a("User",e)}return n(t,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=this.firstLoading,!n.t0){n.next=5;break}return n.next=4,this.dialogService.loadingProgres();case 4:this.firstLoading=!1;case 5:this.userModel.api_functionModel(this.id,"profilePage").subscribe((function(n){"success"==n.status&&(i.user=n.data),t&&t.target.complete(),console.log(n),i.dialogService.dimissLoaging()}),(function(n){t&&t.target.complete(),console.log(n),i.dialogService.dimissLoaging()}));case 6:case"end":return n.stop()}}),n,this)})))}}]),t}(),I.\u0275fac=function(t){return new(t||I)(b.Lb(s.a),b.Lb(p.a),b.Lb(d.a),b.Lb(f.a))},I.\u0275cmp=b.Fb({type:I,selectors:[["app-profile"]],decls:9,vars:2,consts:[["slot","start"],[4,"ngIf"],[3,"src"],[3,"publication",4,"ngFor","ngForOf"],[3,"publication"]],template:function(t,n){1&t&&(b.Qb(0,"ion-header"),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-title"),b.tc(3,"Perfil de usuario"),b.Pb(),b.Qb(4,"ion-buttons",0),b.Mb(5,"ion-back-button"),b.Pb(),b.Pb(),b.Pb(),b.Qb(6,"ion-content"),b.sc(7,C,6,2,"ion-card",1),b.sc(8,j,6,1,"ion-card",1),b.Pb()),2&t&&(b.yb(7),b.fc("ngIf",n.user),b.yb(1),b.fc("ngIf",n.user&&n.user.publications.length>0))},directives:[a.x,a.hb,a.fb,a.j,a.f,a.g,a.r,r.k,a.k,a.l,a.z,a.m,a.o,r.j,L],styles:[".img_profile[_ngcontent-%COMP%]{width:300px;height:300px}.name[_ngcontent-%COMP%]{font-size:large}"]}),I)}],S=((R=function t(){i(this,t)}).\u0275mod=b.Jb({type:R}),R.\u0275inj=b.Ib({factory:function(t){return new(t||R)},imports:[[s.j.forChild(z)],s.j]}),R),Y=o("j1ZV"),D=((U=function t(){i(this,t)}).\u0275mod=b.Jb({type:U}),U.\u0275inj=b.Ib({factory:function(t){return new(t||U)},imports:[[r.b,c.a,a.ib,S,Y.a]]}),U)}}])}();