(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{fSJy:function(t,e,i){"use strict";i.d(e,"a",(function(){return O}));var n=i("mrSG"),o=i("8xVP"),a=i("9suA"),r=i("4R65"),s=i("fXoL"),c=i("G/jy"),l=i("vuFD"),d=i("TEn/"),u=i("6/gD"),p=i("ofXK"),b=i("3Pt+"),f=function(t){function e(e,i,n,a,r,s){var c=t.call(this,s,n)||this;return c.request=e,c.dialogService=i,c.viewCtrl=n,c.photoService=a,c.newMarker=null,c.modelField=new o.a("Field",e),c.id=r.get("id"),c}return Object(n.c)(e,t),e.prototype.initObject=function(){var t=this;console.log("initObject"),this.field={name:"",lat:-27.603857971720405,lng:-55.323644024643414},navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){t.field.lat=e.coords.latitude,t.field.lng=e.coords.longitude,console.log("current pos",e)}),(function(t){console.error(t)})),this.id?this.modelField.api_find(this.id).subscribe((function(e){console.log("load field",e),"success"==e.status&&(t.field=e.Field,t.leafletMap(),t.addNewMarker())})):this.leafletMap()},e.prototype.submit=function(){var t=this;this.field.id?this.modelField.api_update(this.field).subscribe((function(e){var i;"success"==e.status&&(t.dialogService.showToast(null!==(i=e.msjSuccess)&&void 0!==i?i:"Registrado"),t.dismiss(e.Field))})):this.modelField.api_create(this.field).subscribe((function(e){var i;"success"==e.status&&(t.dialogService.showToast(null!==(i=e.msjSuccess)&&void 0!==i?i:"Registrado"),t.dismiss(e.Field))}))},e.prototype.dismiss=function(t){this.viewCtrl.dismiss({field:t})},e.prototype.close=function(){this.viewCtrl.dismiss()},e.prototype.leafletMap=function(){var t=this;this.reset(),this.map=r.map("mapId2"),this.map.on("load",(function(){console.log("load map"),setTimeout((function(){console.log("refresh"),t.regresh()}),1e3)})),this.map.setView([this.field.lat,this.field.lng],11),r.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"futbol8alem.com",id:"mapbox/streets-v11"}).addTo(this.map),this.map.on("contextmenu",(function(e){console.log("rightClick",e),t.field.lat=e.latlng.lat,t.field.lng=e.latlng.lng,t.addNewMarker()})),this.loadFields()},e.prototype.addNewMarker=function(){var t=this;this.newMarker&&this.map.removeLayer(this.newMarker);var e=r.divIcon({className:"my-custom-pin",iconAnchor:[0,24],labelAnchor:[-6,0],popupAnchor:[0,-36],html:'<span style="\n      background-color: #35da7f;\n      width: 2rem;\n      height: 2rem;\n      display: block;\n      left: -1.5rem;\n      top: -1.5rem;\n      position: relative;\n      border-radius: 3rem 3rem 0;\n      transform: rotate(45deg);\n      border: 1px solid #FFFFFF" />'});this.newMarker=r.marker([this.field.lat,this.field.lng],{draggable:!0,alt:"Nueva Cancha",shadowPane:"Pane",icon:e,title:"Arrastra bara canbiar la ubicaci\xf3n."}).addTo(this.map),this.newMarker.on("dragend",(function(e){var i=e.target,n=i.getLatLng();t.field.lat=n.lat,t.field.lng=n.lng,i.openPopup(),console.log("change pos",t.field)})),this.newMarker.bindPopup(this.field.name,{autoPan:!1}).openPopup()},e.prototype.loadFields=function(){return Object(n.b)(this,void 0,void 0,(function(){var t=this;return Object(n.d)(this,(function(e){return this.id||this.modelField.api_function("markers").subscribe((function(e){"success"==e.status&&e.data&&e.data.forEach((function(e){t.addMarker(parseFloat(e.lat),parseFloat(e.lng),e.name)})),t.map.setView([t.field.lat,t.field.lng],11)}),(function(t){})),[2]}))}))},e.prototype.addMarker=function(t,e,i){var n=r.icon({iconUrl:"http://icons.iconseeker.com/png/fullsize/sport-fields/football-field.png",iconSize:[30,40],iconAnchor:[15,40],shadowSize:[35,50],shadowAnchor:[0,55],popupAnchor:[0,-40]});0!=t&&0!=e&&r.marker([t,e],{icon:n}).addTo(this.map).bindTooltip(i,{permanent:!0}).openTooltip()},e.prototype.inputVal=function(t){this.field.name=t,this.newMarker&&this.newMarker._popup.setContent(t,{autoPan:!1})},e.prototype.regresh=function(){this.map.invalidateSize()},e.prototype.reset=function(){this.map&&(this.map.off(),this.map.remove())},e.\u0275fac=function(t){return new(t||e)(s.Lb(c.a),s.Lb(l.a),s.Lb(d.nb),s.Lb(u.a),s.Lb(d.pb),s.Lb(p.n))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-field-form"]],features:[s.vb],decls:26,vars:2,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[3,"ngSubmit","keyup"],[1,"info"],[1,"sug"],["position","floating"],["type","text","name","name",3,"value","input"],[2,"color","red","padding-top","0.2rem"],["id","mapId2",2,"min-width","100%","min-height","400px !important"],[1,"desc"],["expand","block",3,"click"]],template:function(t,e){1&t&&(s.Qb(0,"ion-header"),s.Qb(1,"ion-toolbar"),s.Qb(2,"ion-title"),s.vc(3,"Cancha"),s.Pb(),s.Qb(4,"ion-buttons",0),s.Qb(5,"ion-button",1),s.Yb("click",(function(){return e.close()})),s.Mb(6,"ion-icon",2),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(7,"ion-content"),s.Qb(8,"form",3),s.Yb("ngSubmit",(function(){return e.submit()}))("keyup",(function(){return e.modelField.errorsForm.clear()})),s.Qb(9,"div",4),s.vc(10," Ingrese un nombre para identificar la cancha "),s.Qb(11,"span",5),s.vc(12," (Recomendamos el NOMBRE DEL EQUIPO que utiliza la cancha o el NOMBRE DEL LUGAR donde se encuentra ubicado)"),s.Pb(),s.vc(13,", despu\xe9s seleccione la ubicaci\xf3n en el mapa. "),s.Pb(),s.Qb(14,"ion-item"),s.Qb(15,"ion-label",6),s.vc(16,"Nombre"),s.Pb(),s.Qb(17,"ion-input",7),s.Yb("input",(function(t){return e.inputVal(t.target.value)})),s.Pb(),s.Pb(),s.Qb(18,"div",8),s.vc(19),s.Pb(),s.Mb(20,"br"),s.Mb(21,"div",9),s.Qb(22,"div",10),s.vc(23," Mant\xe9n presionado la ubicaci\xf3n en el mapa para a\xf1adir la ubicaci\xf3n. "),s.Pb(),s.Qb(24,"ion-button",11),s.Yb("click",(function(){return e.submit()})),s.vc(25,"Guardar"),s.Pb(),s.Pb(),s.Pb()),2&t&&(s.yb(17),s.gc("value",e.field.name),s.yb(2),s.wc(e.modelField.errorsForm.get("name")))},directives:[d.x,d.jb,d.hb,d.j,d.i,d.y,d.r,b.i,b.e,b.f,d.D,d.G,d.C,d.vb],styles:["#mapId[_ngcontent-%COMP%], #mapId2[_ngcontent-%COMP%]{min-width:100%!important;min-height:300px!important}.desc[_ngcontent-%COMP%]{margin:10px}.info[_ngcontent-%COMP%]{color:#babdbf;margin:15px}.sug[_ngcontent-%COMP%]{color:#727475}"]}),e}(a.a),h=i("qsXW"),m=i("rLe3"),g=i("2Rin"),v=i("y/q6"),y=i("EbHZ"),P=i("jLeg");function w(t,e){if(1&t){var i=s.Rb();s.Qb(0,"ion-button",4),s.Yb("click",(function(){s.oc(i);var t=s.ac();return t.canEdit=!t.canEdit})),s.Mb(1,"ion-icon",11),s.Pb()}}function k(t,e){if(1&t){var i=s.Rb();s.Qb(0,"ion-segment",12),s.Yb("ionChange",(function(t){return s.oc(i),s.ac().segmentChanged(t)})),s.Qb(1,"ion-segment-button",13),s.Qb(2,"ion-label"),s.vc(3,"Lista"),s.Pb(),s.Pb(),s.Qb(4,"ion-segment-button",14),s.Qb(5,"ion-label"),s.vc(6,"Mapa"),s.Pb(),s.Pb(),s.Pb()}if(2&t){var n=s.ac();s.gc("value",n.segment_select)}}function F(t,e){1&t&&(s.Qb(0,"ion-item"),s.Qb(1,"label"),s.vc(2,"No se han encontrado registros"),s.Pb(),s.Pb())}function Q(t,e){if(1&t){var i=s.Rb();s.Qb(0,"ion-button",4),s.Yb("click",(function(t){s.oc(i);var e=s.ac(2).$implicit;return s.ac().showEdit(e,t)})),s.Mb(1,"ion-icon",17),s.Pb()}}function L(t,e){if(1&t){var i=s.Rb();s.Qb(0,"ion-button",4),s.Yb("click",(function(t){s.oc(i);var e=s.ac(2).$implicit;return s.ac().confirmDelete(e,t)})),s.Mb(1,"ion-icon",18),s.Pb()}}function M(t,e){if(1&t&&(s.Qb(0,"ion-buttons",16),s.uc(1,Q,2,0,"ion-button",3),s.uc(2,L,2,0,"ion-button",3),s.Pb()),2&t){var i=s.ac().$implicit,n=s.ac();s.yb(1),s.gc("ngIf",!i.team_id),s.yb(1),s.gc("ngIf",n.authUser.isAdmin())}}function C(t,e){if(1&t){var i=s.Rb();s.Qb(0,"ion-item",4),s.Yb("click",(function(){s.oc(i);var t=e.$implicit;return s.ac().dismiss(t)})),s.Qb(1,"label",4),s.Yb("click",(function(t){s.oc(i);var n=e.$implicit;return s.ac().show(n,t)})),s.vc(2),s.Pb(),s.uc(3,M,3,2,"ion-buttons",15),s.Pb()}if(2&t){var n=e.$implicit,o=s.ac();s.yb(2),s.wc(n.name),s.yb(1),s.gc("ngIf",o.canEdit)}}var O=function(t){function e(e,i,n,a,r,s,c,l,d,u,p){var b=t.call(this,s,c)||this;return b.requestService=e,b.dialogService=i,b.modalController=n,b.utilArray=a,b.util=r,b.viewCtrl=c,b.dialog=l,b.authUser=d,b.transfDat=u,b.loading=p,b.segment_select="list",b.fields=[],b.oldFields=[],b.markers=[],b.canEdit=!1,b.isSelect=!1,b.modelField=new o.a("Field",e),b.isSelect=u.getData("isSelect"),u.clear(),b}return Object(n.c)(e,t),e.prototype.ngOnInit=function(){this.init()},e.prototype.init=function(){return Object(n.b)(this,void 0,void 0,(function(){var t=this;return Object(n.d)(this,(function(e){return this.loading.start(),this.modelField.api_function("pageAllFields").subscribe((function(e){"success"==e.status&&(t.fields=e.data,t.oldFields=t.fields),t.leafletMap(),t.loading.end()}),(function(e){t.loading.end(),t.dialogService.showToast("Error al obtener Campos","","warning")})),[2]}))}))},e.prototype.add=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,e=this;return Object(n.d)(this,(function(i){switch(i.label){case 0:return[4,this.modalController.create({component:f})];case 1:return(t=i.sent()).onDidDismiss().then((function(t){t.data&&t.data.field&&e.utilArray.listAddFirst(e.fields,t.data.field)})),[4,t.present()];case 2:return[2,i.sent()]}}))}))},e.prototype.filterField=function(t){var e=t.target.value;if(e.length<=0)return this.fields=this.oldFields,void this.loadFields();this.fields=Object(n.f)(this.oldFields),this.fields=this.fields.filter((function(t){return t.name.toUpperCase().includes(e.toUpperCase())})),this.loadFields()},e.prototype.cancelFilter=function(t){this.fields=this.oldFields},e.prototype.dismiss=function(t){this.viewCtrl.dismiss({field:t})},e.prototype.close=function(){this.viewCtrl.dismiss()},e.prototype.confirmDelete=function(t,e){var i=this;e.stopPropagation(),this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar esta cancha",(function(e){i.delete(t)}))},e.prototype.delete=function(t){var e=this;this.modelField.api_delete(t.id).subscribe((function(i){console.log(i),"success"==i.status&&(e.dialog.showToast("Cancha Eliminada",null,"success"),e.utilArray.listDelete(e.fields,t.id))}))},e.prototype.showEdit=function(t,e){return Object(n.b)(this,void 0,void 0,(function(){var i,o=this;return Object(n.d)(this,(function(n){switch(n.label){case 0:return console.log("showEdit"),e.stopPropagation(),[4,this.modalController.create({component:f,componentProps:{id:t.id}})];case 1:return(i=n.sent()).onDidDismiss().then((function(t){if(t.data&&t.data.field){var e=t.data.field;o.utilArray.listUpdate(o.fields,e.id,e)}})),[4,i.present()];case 2:return[2,n.sent()]}}))}))},e.prototype.show=function(t,e){return Object(n.b)(this,void 0,void 0,(function(){var i;return Object(n.d)(this,(function(n){switch(n.label){case 0:return this.isSelect?[2]:(console.log("show"),e.stopPropagation(),[4,this.modalController.create({component:h.a,componentProps:{id:t.id}})]);case 1:return(i=n.sent()).onDidDismiss().then((function(t){})),[4,i.present()];case 2:return[2,n.sent()]}}))}))},e.prototype.segmentChanged=function(t){var e=this;this.segment_select=t.detail.value,setTimeout((function(){e.regresh()}),100)},e.prototype.leafletMap=function(){var t=this;this.map=r.map("mapId3"),this.map.on("load",(function(){console.log("load map"),setTimeout((function(){console.log("refresh"),t.regresh()}),1e3)})),this.map.setView([-27.603857971720405,-55.323644024643414],11),r.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"futbol8alem.com",id:"mapbox/streets-v11"}).addTo(this.map),this.loadFields()},e.prototype.loadFields=function(){var t=this;this.markers.forEach((function(e){t.map&&t.map.removeLayer(e)})),this.markers=[],this.fields.forEach((function(e){t.addMarker(parseFloat(e.lat),parseFloat(e.lng),e.name)})),this.regresh()},e.prototype.addMarker=function(t,e,i){var n=r.icon({iconUrl:"http://icons.iconseeker.com/png/fullsize/sport-fields/football-field.png",iconSize:[30,40],iconAnchor:[15,40],shadowSize:[35,50],shadowAnchor:[0,55],popupAnchor:[0,-40]});if(0!=t&&0!=e){var o=r.marker([t,e],{icon:n}).addTo(this.map).bindTooltip(i,{permanent:!0}).openTooltip();this.markers.push(o)}},e.prototype.reset=function(){this.map&&(this.map.off(),this.map.remove())},e.prototype.regresh=function(){this.map.invalidateSize()},e.\u0275fac=function(t){return new(t||e)(s.Lb(c.a),s.Lb(l.a),s.Lb(d.nb),s.Lb(m.a),s.Lb(g.a),s.Lb(p.n),s.Lb(d.nb),s.Lb(l.a),s.Lb(v.a),s.Lb(y.a),s.Lb(P.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-list-fields"]],features:[s.vb],decls:19,vars:8,consts:[["slot","start"],["defaultHref","/home/teams",3,"click"],["slot","secondary"],[3,"click",4,"ngIf"],[3,"click"],["name","add-outline"],[3,"value","ionChange",4,"ngIf"],["placeholder","Filtrar Canchas","debounce","500",3,"keyup","ionClear"],[4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],["id","mapId3",2,"min-width","100%","min-height","400px !important"],["name","create-outline"],[3,"value","ionChange"],["value","list"],["value","map"],["slot","end",4,"ngIf"],["slot","end"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(t,e){1&t&&(s.Qb(0,"ion-header"),s.Qb(1,"ion-toolbar"),s.Qb(2,"ion-title"),s.vc(3,"Canchas"),s.Pb(),s.Qb(4,"ion-buttons",0),s.Qb(5,"ion-back-button",1),s.Yb("click",(function(){return e.close()})),s.Pb(),s.Pb(),s.Qb(6,"ion-buttons",2),s.uc(7,w,2,0,"ion-button",3),s.Qb(8,"ion-button",4),s.Yb("click",(function(){return e.add()})),s.Mb(9,"ion-icon",5),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(10,"ion-content"),s.uc(11,k,7,1,"ion-segment",6),s.Qb(12,"ion-searchbar",7),s.Yb("keyup",(function(t){return e.filterField(t)}))("ionClear",(function(t){return e.cancelFilter(t)})),s.Pb(),s.uc(13,F,3,0,"ion-item",8),s.Qb(14,"div"),s.Qb(15,"ion-list"),s.uc(16,C,4,2,"ion-item",9),s.Pb(),s.Pb(),s.Qb(17,"div"),s.Mb(18,"div",10),s.Pb(),s.Pb()),2&t&&(s.yb(7),s.gc("ngIf","list"==e.segment_select),s.yb(4),s.gc("ngIf",!e.isSelect),s.yb(2),s.gc("ngIf",0==e.fields.length),s.yb(1),s.tc("display","list"==e.segment_select?"block":"none"),s.yb(2),s.gc("ngForOf",e.fields),s.yb(1),s.tc("display","map"!=e.segment_select||e.isSelect?"none":"block"))},directives:[d.x,d.jb,d.hb,d.j,d.f,d.g,p.l,d.i,d.y,d.r,d.T,d.vb,d.H,p.k,d.U,d.ub,d.V,d.G,d.D],styles:[""]}),e}(a.a)},rLe3:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("mrSG"),o=i("fXoL"),a=function(){function t(){}return t.prototype.listAddLast=function(t,e){t.push(e)},t.prototype.listAddFirst=function(t,e){t.unshift(e)},t.prototype.listUpdate=function(t,e,i){var n=this.findIndexList(t,e);n>=0&&(t[n]=i)},t.prototype.listDelete=function(t,e){var i=this.findIndexList(t,e);i>=0&&t.splice(i,1)},t.prototype.findList=function(t,e){return t.find((function(t){return t.id===e}))},t.prototype.findIndexList=function(t,e){return t.findIndex((function(t){return t.id===e}))},t.prototype.updateAttribustesObject=function(t,e,i){var o,a;void 0===i&&(i=[]),console.log("update attributes");try{for(var r=Object(n.h)(i),s=r.next();!s.done;s=r.next()){var c=s.value;e.hasOwnProperty(c)&&(t[c]=e[c])}}catch(l){o={error:l}}finally{try{s&&!s.done&&(a=r.return)&&a.call(r)}finally{if(o)throw o.error}}return t},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac=function(e){return new(e||t)},providedIn:"root"}),t}()}}]);