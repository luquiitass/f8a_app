!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,i){if(!e)return;if("string"==typeof e)return t(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,i)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=r(e);if(t){var o=r(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return a(this,i)}}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,i){return t&&c(e.prototype,t),i&&c(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{XDjf:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var n=i("mrSG"),o=i("4R65"),a=i("8xVP"),r=i("fXoL"),c=i("G/jy"),u=i("Bfh1"),d=i("m/P+"),b=i("ofXK"),f=i("TEn/");function m(e,t){if(1&e){var i=r.Rb();r.Qb(0,"div",2),r.Qb(1,"ion-button",3),r.Yb("click",(function(){return r.oc(i),r.ac().shareW()})),r.Mb(2,"ion-icon",4),r.vc(3," Enviar ubicaci\xf3n "),r.Pb(),r.Qb(4,"ion-button",3),r.Yb("click",(function(){return r.oc(i),r.ac().getRoute()})),r.Mb(5,"ion-icon",5),r.vc(6," Como llegar "),r.Pb(),r.Pb()}}var h=function(){var e=function(){function e(t,i,n){s(this,e),this.request=t,this.geolocation=i,this.iab=n,this.showDirection=!1,this.newMarker=null,this.position={lat:0,lng:0},this.modelField=new a.a("Field",t)}return l(e,[{key:"ngOnInit",value:function(){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadField(),this.getLocation();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadField",value:function(){var e=this;console.log("load field"),this.id&&this.modelField.api_find(this.id).subscribe((function(t){"success"==t.status&&(e.field=t.Field,e.reset(),e.leafletMap(),e.refresh())}))}},{key:"getLocation",value:function(){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("get position"),e.next=3,this.geolocation.getCurrentPosition({timeout:6e3}).then((function(e){console.log("resp geo",e),t.position.lat=e.coords.latitude,t.position.lng=e.coords.longitude})).catch((function(e){console.error("error geo ",e)}));case 3:this.geolocation.watchPosition().subscribe((function(e){console.log("data geo",e)}));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"getRoute",value:function(){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.comoLlegar();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"leafletMap",value:function(){var e=this;this.map=o.map("mapId").setView([this.field.lat,this.field.lng],11),this.map.on("load",(function(){console.log("load map"),e.refresh()})),this.map.on("locationfound",(function(e){console.log("loc found ",e)})),this.map.on("locationerror",(function(e){console.log("loc error ",e)})),o.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"futbol8alem.com",id:"mapbox/streets-v11"}).addTo(this.map);var t=o.icon({iconUrl:"http://icons.iconseeker.com/png/fullsize/sport-fields/football-field.png",iconSize:[30,40],iconAnchor:[15,40],shadowSize:[35,50],shadowAnchor:[0,55],popupAnchor:[0,-40]});o.marker([this.field.lat,this.field.lng],{icon:t}).addTo(this.map).bindPopup(this.field.name,{permanent:!0}).openPopup(),this.refresh()}},{key:"ngOnChanges",value:function(e){var t=this;console.log("changes"),e.field&&setTimeout((function(){t.map&&(t.map.off(),t.map.remove()),t.leafletMap()}))}},{key:"refresh",value:function(){var e=this;setTimeout((function(){e.map.invalidateSize()}),1e3)}},{key:"reset",value:function(){this.map&&(this.map.off(),this.map.remove())}},{key:"ionViewDidLeave",value:function(){console.log("ionViewDidLeave component show-map"),this.reset()}},{key:"comoLlegar",value:function(){this.iab.create("https://www.google.com/maps/dir/?api=1&destination=".concat(this.field.lat,",").concat(this.field.lng),"",{fullscreen:"yes"})}},{key:"shareW",value:function(){var e=encodeURIComponent("https://www.google.com/maps/dir/?api=1&destination=".concat(this.field.lat,",").concat(this.field.lng));this.iab.create("https://api.whatsapp.com/send?text="+e,"",{fullscreen:"yes"})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Lb(c.a),r.Lb(u.a),r.Lb(d.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-show-map"]],inputs:{field:"field",showDirection:"showDirection",id:"id"},features:[r.wb],decls:2,vars:4,consts:[["id","mapId"],["class","ion-text-right",4,"ngIf"],[1,"ion-text-right"],[3,"click"],["name","logo-whatsapp"],["name","navigate-outline"]],template:function(e,t){1&e&&(r.Mb(0,"div",0),r.uc(1,m,7,0,"div",1)),2&e&&(r.sc("width: 100%; height: ",t.field?"300":"0","px;"),r.yb(1),r.gc("ngIf",t.showDirection&&t.field))},directives:[b.l,f.i,f.y],styles:[""]}),e}()},fSJy:function(t,n,a){"use strict";a.d(n,"a",(function(){return D}));var r,c=a("mrSG"),u=a("8xVP"),d=a("9suA"),b=a("4R65"),f=a("fXoL"),m=a("G/jy"),h=a("vuFD"),p=a("TEn/"),g=a("6/gD"),v=a("ofXK"),y=a("3Pt+"),w=((r=function(e){i(n,e);var t=o(n);function n(e,i,o,a,r,c){var l;return s(this,n),(l=t.call(this,c,o)).request=e,l.dialogService=i,l.viewCtrl=o,l.photoService=a,l.newMarker=null,l.modelField=new u.a("Field",e),l.id=r.get("id"),l}return l(n,[{key:"initObject",value:function(){var e=this;console.log("initObject"),this.field={name:"",lat:-27.603857971720405,lng:-55.323644024643414},navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){e.field.lat=t.coords.latitude,e.field.lng=t.coords.longitude,console.log("current pos",t)}),(function(e){console.error(e)})),this.id?this.modelField.api_find(this.id).subscribe((function(t){console.log("load field",t),"success"==t.status&&(e.field=t.Field,e.leafletMap(),e.addNewMarker())})):this.leafletMap()}},{key:"submit",value:function(){var e=this;this.field.id?this.modelField.api_update(this.field).subscribe((function(t){var i;"success"==t.status&&(e.dialogService.showToast(null!==(i=t.msjSuccess)&&void 0!==i?i:"Registrado"),e.dismiss(t.Field))})):this.modelField.api_create(this.field).subscribe((function(t){var i;"success"==t.status&&(e.dialogService.showToast(null!==(i=t.msjSuccess)&&void 0!==i?i:"Registrado"),e.dismiss(t.Field))}))}},{key:"dismiss",value:function(e){this.viewCtrl.dismiss({field:e})}},{key:"close",value:function(){this.viewCtrl.dismiss()}},{key:"leafletMap",value:function(){var e=this;this.reset(),this.map=b.map("mapId2"),this.map.on("load",(function(){console.log("load map"),setTimeout((function(){console.log("refresh"),e.regresh()}),1e3)})),this.map.setView([this.field.lat,this.field.lng],11),b.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"futbol8alem.com",id:"mapbox/streets-v11"}).addTo(this.map),this.map.on("contextmenu",(function(t){console.log("rightClick",t),e.field.lat=t.latlng.lat,e.field.lng=t.latlng.lng,e.addNewMarker()})),this.loadFields()}},{key:"addNewMarker",value:function(){var e=this;this.newMarker&&this.map.removeLayer(this.newMarker);var t=b.divIcon({className:"my-custom-pin",iconAnchor:[0,24],labelAnchor:[-6,0],popupAnchor:[0,-36],html:'<span style="\n      background-color: #35da7f;\n      width: 2rem;\n      height: 2rem;\n      display: block;\n      left: -1.5rem;\n      top: -1.5rem;\n      position: relative;\n      border-radius: 3rem 3rem 0;\n      transform: rotate(45deg);\n      border: 1px solid #FFFFFF" />'});this.newMarker=b.marker([this.field.lat,this.field.lng],{draggable:!0,alt:"Nueva Cancha",shadowPane:"Pane",icon:t,title:"Arrastra bara canbiar la ubicaci\xf3n."}).addTo(this.map),this.newMarker.on("dragend",(function(t){var i=t.target,n=i.getLatLng();e.field.lat=n.lat,e.field.lng=n.lng,i.openPopup(),console.log("change pos",e.field)})),this.newMarker.bindPopup(this.field.name,{autoPan:!1}).openPopup()}},{key:"loadFields",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.id||this.modelField.api_function("markers").subscribe((function(e){"success"==e.status&&e.data&&e.data.forEach((function(e){t.addMarker(parseFloat(e.lat),parseFloat(e.lng),e.name)})),t.map.setView([t.field.lat,t.field.lng],11)}),(function(e){}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"addMarker",value:function(e,t,i){var n=b.icon({iconUrl:"http://icons.iconseeker.com/png/fullsize/sport-fields/football-field.png",iconSize:[30,40],iconAnchor:[15,40],shadowSize:[35,50],shadowAnchor:[0,55],popupAnchor:[0,-40]});0!=e&&0!=t&&b.marker([e,t],{icon:n}).addTo(this.map).bindTooltip(i,{permanent:!0}).openTooltip()}},{key:"inputVal",value:function(e){this.field.name=e,this.newMarker&&this.newMarker._popup.setContent(e,{autoPan:!1})}},{key:"regresh",value:function(){this.map.invalidateSize()}},{key:"reset",value:function(){this.map&&(this.map.off(),this.map.remove())}}]),n}(d.a)).\u0275fac=function(e){return new(e||r)(f.Lb(m.a),f.Lb(h.a),f.Lb(p.nb),f.Lb(g.a),f.Lb(p.pb),f.Lb(v.n))},r.\u0275cmp=f.Fb({type:r,selectors:[["app-field-form"]],features:[f.vb],decls:26,vars:2,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[3,"ngSubmit","keyup"],[1,"info"],[1,"sug"],["position","floating"],["type","text","name","name",3,"value","input"],[2,"color","red","padding-top","0.2rem"],["id","mapId2",2,"min-width","100%","min-height","400px !important"],[1,"desc"],["expand","block",3,"click"]],template:function(e,t){1&e&&(f.Qb(0,"ion-header"),f.Qb(1,"ion-toolbar"),f.Qb(2,"ion-title"),f.vc(3,"Cancha"),f.Pb(),f.Qb(4,"ion-buttons",0),f.Qb(5,"ion-button",1),f.Yb("click",(function(){return t.close()})),f.Mb(6,"ion-icon",2),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Qb(7,"ion-content"),f.Qb(8,"form",3),f.Yb("ngSubmit",(function(){return t.submit()}))("keyup",(function(){return t.modelField.errorsForm.clear()})),f.Qb(9,"div",4),f.vc(10," Ingrese un nombre para identificar la cancha "),f.Qb(11,"span",5),f.vc(12," (Recomendamos el NOMBRE DEL EQUIPO que utiliza la cancha o el NOMBRE DEL LUGAR donde se encuentra ubicado)"),f.Pb(),f.vc(13,", despu\xe9s seleccione la ubicaci\xf3n en el mapa. "),f.Pb(),f.Qb(14,"ion-item"),f.Qb(15,"ion-label",6),f.vc(16,"Nombre"),f.Pb(),f.Qb(17,"ion-input",7),f.Yb("input",(function(e){return t.inputVal(e.target.value)})),f.Pb(),f.Pb(),f.Qb(18,"div",8),f.vc(19),f.Pb(),f.Mb(20,"br"),f.Mb(21,"div",9),f.Qb(22,"div",10),f.vc(23," Mant\xe9n presionado la ubicaci\xf3n en el mapa para a\xf1adir la ubicaci\xf3n. "),f.Pb(),f.Qb(24,"ion-button",11),f.Yb("click",(function(){return t.submit()})),f.vc(25,"Guardar"),f.Pb(),f.Pb(),f.Pb()),2&e&&(f.yb(17),f.gc("value",t.field.name),f.yb(2),f.wc(t.modelField.errorsForm.get("name")))},directives:[p.x,p.jb,p.hb,p.j,p.i,p.y,p.r,y.i,y.e,y.f,p.D,p.G,p.C,p.vb],styles:["#mapId[_ngcontent-%COMP%], #mapId2[_ngcontent-%COMP%]{min-width:100%!important;min-height:300px!important}.desc[_ngcontent-%COMP%]{margin:10px}.info[_ngcontent-%COMP%]{color:#babdbf;margin:15px}.sug[_ngcontent-%COMP%]{color:#727475}"]}),r),k=a("rLe3"),P=a("2Rin"),Q=a("y/q6");function M(e,t){if(1&e){var i=f.Rb();f.Qb(0,"ion-button",3),f.Yb("click",(function(e){f.oc(i);var t=f.ac(2).$implicit;return f.ac().showEdit(t,e)})),f.Mb(1,"ion-icon",12),f.Pb()}}function S(e,t){if(1&e){var i=f.Rb();f.Qb(0,"ion-button",3),f.Yb("click",(function(e){f.oc(i);var t=f.ac(2).$implicit;return f.ac().confirmDelete(t,e)})),f.Mb(1,"ion-icon",13),f.Pb()}}function F(e,t){if(1&e&&(f.Qb(0,"ion-buttons",10),f.uc(1,M,2,0,"ion-button",11),f.uc(2,S,2,0,"ion-button",11),f.Pb()),2&e){var i=f.ac().$implicit,n=f.ac();f.yb(1),f.gc("ngIf",!i.team_id),f.yb(1),f.gc("ngIf",n.authUser.isAdmin())}}function C(e,t){if(1&e){var i=f.Rb();f.Qb(0,"ion-item",3),f.Yb("click",(function(){f.oc(i);var e=t.$implicit;return f.ac().dismiss(e)})),f.Qb(1,"label"),f.vc(2),f.Pb(),f.uc(3,F,3,2,"ion-buttons",9),f.Pb()}if(2&e){var n=t.$implicit,o=f.ac();f.yb(2),f.wc(n.name),f.yb(1),f.gc("ngIf",o.canEdit)}}function L(e,t){1&e&&(f.Qb(0,"ion-item"),f.Qb(1,"label"),f.vc(2,"No se han encontrado registros"),f.Pb(),f.Pb())}var x,D=((x=function(t){i(a,t);var n=o(a);function a(e,t,i,o,r,c,l,d,b){var f;return s(this,a),(f=n.call(this,c,l)).requestService=e,f.dialogService=t,f.modalController=i,f.utilArray=o,f.util=r,f.viewCtrl=l,f.dialog=d,f.authUser=b,f.fields=[],f.oldFields=[],f.canEdit=!1,f.modelField=new u.a("Field",e),f}return l(a,[{key:"ngOnInit",value:function(){this.util.setScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA_uVKWprjIgPURNhl1v9zzTPLQJIBdi6I"),this.init()}},{key:"init",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dialogService.loadingProgres();case 2:this.modelField.api_function("pageAllFields").subscribe((function(e){"success"==e.status&&(t.fields=e.data,t.oldFields=t.fields),t.dialogService.dimissLoaging()}),(function(e){t.dialogService.dimissLoaging(),t.dialogService.showToast("Error al obtener Campos","","warning")}));case 3:case"end":return e.stop()}}),e,this)})))}},{key:"add",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:w});case 2:return(t=e.sent).onDidDismiss().then((function(e){e.data&&e.data.field&&i.utilArray.listAddFirst(i.fields,e.data.field)})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"filterField",value:function(t){var i=t.target.value;i.length<=0?this.fields=this.oldFields:(this.fields=e(this.oldFields),this.fields=this.fields.filter((function(e){return e.name.toUpperCase().includes(i.toUpperCase())})))}},{key:"cancelFilter",value:function(e){this.fields=this.oldFields}},{key:"dismiss",value:function(e){this.viewCtrl.dismiss({field:e})}},{key:"close",value:function(){this.viewCtrl.dismiss()}},{key:"confirmDelete",value:function(e,t){var i=this;t.stopPropagation(),this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar esta cancha",(function(t){i.delete(e)}))}},{key:"delete",value:function(e){var t=this;this.modelField.api_delete(e.id).subscribe((function(i){console.log(i),"success"==i.status&&(t.dialog.showToast("Cancha Eliminada",null,"success"),t.utilArray.listDelete(t.fields,e.id))}))}},{key:"showEdit",value:function(e,t){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var n,o=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("showEdit"),t.stopPropagation(),i.next=3,this.modalController.create({component:w,componentProps:{id:e.id}});case 3:return(n=i.sent).onDidDismiss().then((function(e){if(e.data&&e.data.field){var t=e.data.field;o.utilArray.listUpdate(o.fields,t.id,t)}})),i.next=7,n.present();case 7:return i.abrupt("return",i.sent);case 8:case"end":return i.stop()}}),i,this)})))}}]),a}(d.a)).\u0275fac=function(e){return new(e||x)(f.Lb(m.a),f.Lb(h.a),f.Lb(p.nb),f.Lb(k.a),f.Lb(P.a),f.Lb(v.n),f.Lb(p.nb),f.Lb(h.a),f.Lb(Q.a))},x.\u0275cmp=f.Fb({type:x,selectors:[["app-list-fields"]],features:[f.vb],decls:16,vars:2,consts:[["slot","start"],["defaultHref","/home/teams"],["slot","secondary"],[3,"click"],["name","create-outline"],["name","add-outline"],["placeholder","Filtrar Canchas","debounce","500",3,"keyup","ionClear"],[3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],["slot","end",4,"ngIf"],["slot","end"],[3,"click",4,"ngIf"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(e,t){1&e&&(f.Qb(0,"ion-header"),f.Qb(1,"ion-toolbar"),f.Qb(2,"ion-title"),f.vc(3,"Campos"),f.Pb(),f.Qb(4,"ion-buttons",0),f.Mb(5,"ion-back-button",1),f.Pb(),f.Qb(6,"ion-buttons",2),f.Qb(7,"ion-button",3),f.Yb("click",(function(){return t.canEdit=!t.canEdit})),f.Mb(8,"ion-icon",4),f.Pb(),f.Qb(9,"ion-button",3),f.Yb("click",(function(){return t.add()})),f.Mb(10,"ion-icon",5),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Qb(11,"ion-content"),f.Qb(12,"ion-searchbar",6),f.Yb("keyup",(function(e){return t.filterField(e)}))("ionClear",(function(e){return t.cancelFilter(e)})),f.Pb(),f.Qb(13,"ion-list"),f.uc(14,C,4,2,"ion-item",7),f.uc(15,L,3,0,"ion-item",8),f.Pb(),f.Pb()),2&e&&(f.yb(14),f.gc("ngForOf",t.fields),f.yb(1),f.gc("ngIf",0==t.fields.length))},directives:[p.x,p.jb,p.hb,p.j,p.f,p.g,p.i,p.y,p.r,p.T,p.vb,p.H,v.k,v.l,p.D],styles:[""]}),x)},qq2r:function(t,n,a){"use strict";a.d(n,"a",(function(){return p}));var r=a("9suA"),c=a("fXoL"),u=a("TEn/"),d=a("ofXK"),b=a("EbHZ");function f(e,t){1&e&&(c.Qb(0,"ion-list-header",6),c.Qb(1,"ion-label"),c.vc(2,"No se ha encontrado equipos"),c.Pb(),c.Pb())}function m(e,t){if(1&e&&(c.Qb(0,"ion-avatar",0),c.Mb(1,"ion-img",11),c.Pb()),2&e){var i=c.ac().$implicit;c.yb(1),c.gc("src",i.shield?i.shield.urlCompleteThumb:"assets/images/esc.png")}}function h(e,t){if(1&e){var i=c.Rb();c.Qb(0,"ion-item",7),c.Yb("click",(function(){c.oc(i);var e=t.$implicit;return c.ac().dismiss(e)})),c.uc(1,m,2,1,"ion-avatar",8),c.Qb(2,"ion-label"),c.Qb(3,"h3",9),c.vc(4),c.Pb(),c.Pb(),c.Mb(5,"ion-icon",10),c.Pb()}if(2&e){var n=t.$implicit;c.yb(1),c.gc("ngIf",-1!=n.id),c.yb(3),c.wc(-1==n.id?"Registrar Nuevo Equipo ":n.name)}}var p=function(){var t=function(t){i(a,t);var n=o(a);function a(t,i,o){var r;return s(this,a),(r=n.call(this,i,t)).viewCtrl=t,r.location=i,r.dataTranfer=o,r.teams=[],r.oldTeams=[],r.textSearch="",r.teams=o.getData("teams"),r.oldTeams=e(r.teams),r}return l(a,[{key:"initObject",value:function(){}},{key:"dismiss",value:function(e){this.viewCtrl.dismiss({team:e})}},{key:"close",value:function(){this.viewCtrl.dismiss()}},{key:"filterTeams",value:function(t){t.length<=0?this.teams=this.oldTeams:(this.teams=e(this.oldTeams),this.teams=this.teams.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())||-1==e.id})))}},{key:"getFilter",value:function(){var e=this;return this.teams.filter((function(t){return t.name.toUpperCase().includes(e.textSearch.toUpperCase())||-1==t.id}))}},{key:"cancelFilter",value:function(e){this.teams=this.oldTeams}},{key:"filterChangue",value:function(e){this.textSearch=e.detail.value}},{key:"log",value:function(e){console.log(e)}}]),a}(r.a);return t.\u0275fac=function(e){return new(e||t)(c.Lb(u.nb),c.Lb(d.n),c.Lb(b.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-modal-filter"]],features:[c.vb],decls:12,vars:2,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],["placeholder","Filtrar equipos",3,"ionClear","ionChange"],["color","tertiary",4,"ngIf"],["class","team-list",3,"click",4,"ngFor","ngForOf"],["color","tertiary"],[1,"team-list",3,"click"],["slot","start",4,"ngIf"],[1,"fs-team"],["name","chevron-forward-outline"],[3,"src"]],template:function(e,t){1&e&&(c.Qb(0,"ion-header"),c.Qb(1,"ion-toolbar"),c.Qb(2,"ion-buttons",0),c.Qb(3,"ion-button",1),c.Yb("click",(function(){return t.close()})),c.Mb(4,"ion-icon",2),c.Pb(),c.Pb(),c.Qb(5,"ion-title"),c.vc(6,"Buscar Equipo"),c.Pb(),c.Pb(),c.Pb(),c.Qb(7,"ion-content"),c.Qb(8,"ion-searchbar",3),c.Yb("ionClear",(function(e){return t.cancelFilter(e)}))("ionChange",(function(e){return t.filterChangue(e)})),c.Pb(),c.Qb(9,"ion-list"),c.uc(10,f,3,0,"ion-list-header",4),c.uc(11,h,6,2,"ion-item",5),c.Pb(),c.Pb()),2&e&&(c.yb(10),c.gc("ngIf",0==t.getFilter().length),c.yb(1),c.gc("ngForOf",t.getFilter()))},directives:[u.x,u.jb,u.j,u.i,u.y,u.hb,u.r,u.T,u.vb,u.H,d.l,d.k,u.I,u.G,u.D,u.e,u.z],styles:[""]}),t}()},z0x6:function(e,t,i){"use strict";i.d(t,"a",(function(){return L}));var n=i("mrSG"),o=i("8xVP"),a=i("qq2r"),r=i("wd/R"),c=i("fSJy"),u=i("fXoL"),d=i("G/jy"),b=i("vuFD"),f=i("TEn/"),m=i("6/gD"),h=i("y/q6"),p=i("2Rin"),g=i("sjK5"),v=i("EbHZ"),y=i("ofXK"),w=i("3Pt+"),k=i("XDjf");function P(e,t){if(1&e){var i=u.Rb();u.Qb(0,"ion-button",17),u.Yb("click",(function(){return u.oc(i),u.ac().chatService.toggle()})),u.Mb(1,"ion-icon",18),u.Pb()}if(2&e){var n=u.ac();u.gc("color",n.chatService.isVisible?"success":"")}}function Q(e,t){if(1&e){var i=u.Rb();u.Qb(0,"ion-item"),u.Qb(1,"ion-label",19),u.vc(2,"Nombre de equipo nuevo"),u.Pb(),u.Qb(3,"ion-input",20),u.Yb("ngModelChange",(function(e){return u.oc(i),u.ac().game.other_team=e})),u.Pb(),u.Pb()}if(2&e){var n=u.ac();u.yb(3),u.gc("ngModel",n.game.other_team)}}function M(e,t){if(1&e){var i=u.Rb();u.Qb(0,"ion-item"),u.Qb(1,"ion-label",19),u.vc(2,"Equipo Local"),u.Pb(),u.Qb(3,"ion-select",21),u.Yb("ngModelChange",(function(e){return u.oc(i),u.ac().teamLocal=e}))("ionChange",(function(e){return u.oc(i),u.ac().selectLocal(e)})),u.Qb(4,"ion-select-option",22),u.vc(5),u.Pb(),u.Qb(6,"ion-select-option",23),u.vc(7),u.Pb(),u.Pb(),u.Qb(8,"div",10),u.vc(9),u.Pb(),u.Pb()}if(2&e){var n=u.ac();u.yb(3),u.gc("ngModel",n.teamLocal)("interfaceOptions",n.customActionSheetOptions),u.yb(2),u.wc(n.teamsSelect.v.name),u.yb(2),u.wc(n.teamsSelect.l.name),u.yb(2),u.wc(n.serviceGame.errorsForm.get("v_team"))}}function S(e,t){if(1&e&&u.Mb(0,"app-show-map",27),2&e){var i=u.ac(2);u.gc("field",i.game.field)}}function F(e,t){if(1&e){var i=u.Rb();u.Qb(0,"ion-input",28),u.Yb("ngModelChange",(function(e){return u.oc(i),u.ac(2).game.location=e})),u.Pb()}if(2&e){var n=u.ac(2);u.gc("ngModel",n.game.location)}}function C(e,t){if(1&e){var i=u.Rb();u.Qb(0,"div",24),u.Qb(1,"ion-button",6),u.Yb("click",(function(){return u.oc(i),u.ac().selectField()})),u.vc(2),u.Pb(),u.uc(3,S,1,1,"app-show-map",25),u.uc(4,F,1,1,"ion-input",26),u.Pb()}if(2&e){var n=u.ac();u.yb(2),u.xc("",n.game.field?"Modificar":"A\xf1adir"," ubicaci\xf3n"),u.yb(1),u.gc("ngIf",n.game.field),u.yb(1),u.gc("ngIf",!1)}}var L=function(){var e=function(){function e(t,i,n,a,r,c,l,u,d){var b;s(this,e),this.request=t,this.dialogService=i,this.viewCtrl=n,this.photoService=a,this.authUser=c,this.util=l,this.chatService=u,this.transfData=d,this.myTeams=[],this.teams=[],this.teamsSelect={v:"",l:""},this.numbGoals=[],this.customDayShortNames=["s\xf8n"],this.status=["Pendiente","Suspendido","Jugado","Created"],this.customActionSheetOptions={header:"Equipo Local"},this.myDateFilter=function(e){return 6==e.getDay()},this.serviceGame=new o.a("Game",t),this.serviceTeam=new o.a("Team",t),this.id=r.get("id"),this.toDate=null!==(b=r.get("date"))&&void 0!==b?b:l.setFormatMoment(new Date,"YYYY-MM-DD"),console.log("date",this.toDate),this.test()}return l(e,[{key:"test",value:function(){console.log("day default :",r().isoWeekday()),console.log("day 4 :",r().isoWeekday(6))}},{key:"ngOnInit",value:function(){var e=this;this.myTeams=this.authUser.user.teams,this.teamsSelect.v=this.myTeams[0],this.serviceTeam.api_function("getAllTeamsSelect").subscribe((function(t){t.data&&(e.teams=t.data,console.log("teams -> ",e.teams),e.teams.push({id:-1,name:"Equipo nuevo"}),console.log("add Otro"))}));for(var t=0;t<=30;t++)this.numbGoals.push(t);this.initObject()}},{key:"initObject",value:function(){var e=this;this.game={l_team:"",v_team:"",l_goals:0,v_goals:0,time:"15:00",date:this.toDate,location:"",description:"",status:"Pendiente",field:null,field_id:""},this.id&&this.serviceGame.api_find(this.id).subscribe((function(t){"success"==t.status&&(e.game=t.Game)}))}},{key:"submit",value:function(){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.game.date=this.util.setFormatMoment(this.game.date,"YYYY-MM-DD"),e.prev=1,this.valid(),e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",void this.dialogService.showToast(e.t0.message,"Error","danger"));case 8:return e.next=10,this.dialogService.loadingProgres();case 10:this.game.team_creator=this.teamsSelect.v.id,this.serviceGame.api_function("createGameAdmin",this.game).subscribe((function(e){"success"==e.status?(t.dialogService.showToast("Partido registrado"),t.dismiss(e.data)):"error"==e.status&&t.dialogService.showToast(e.errorValidaciones?e.errorValidaciones:e.mensaje,"","danger",5e3),t.dialogService.dimissLoaging()}),(function(e){console.log(e),t.dialogService.dimissLoaging(),t.dialogService.showToast(e.error.mensaje,"","danger",7e3)}),(function(){t.dialogService.dimissLoaging()}));case 12:case"end":return e.stop()}}),e,this,[[1,5]])})))}},{key:"dismiss",value:function(e){this.chatService.hide(),this.viewCtrl.dismiss({game:e})}},{key:"close",value:function(){this.chatService.hide(),this.viewCtrl.dismiss()}},{key:"print",value:function(){console.log(this.game)}},{key:"selectLocal",value:function(e){var t=e.detail.value;this.game.l_team=this.teamsSelect[t].id,this.game.v_team=this.teamsSelect["v"==t?"l":"v"].id,this.teamsSelect[t]&&this.setField(this.teamsSelect[t].field),console.log(this.game)}},{key:"clearLocal",value:function(){this.teamLocal=null,this.game.l_team="",this.game.v_team=""}},{key:"valid",value:function(){if(console.log("valid Game"),!this.teamsSelect.l)throw new Error("No ha seleccionado el equipo contrario");if(this.teamsSelect.v.id==this.teamsSelect.l.id)throw new Error("Los equipos enfrentados deben ser diferentes");if(-1==this.teamsSelect.l.id&&!this.game.other_team)throw new Error("Debes a\xf1adir el nombre del Equipo Nuevo.");if(!this.teamLocal)throw new Error("Debe seleccionar el equipo local");if(!this.game.date)throw new Error("Debe seleccionar la fecha.");if(6!=r(this.game.date).isoWeekday())throw new Error("La fecha seleccionada debe ser un S\xc1BADO.")}},{key:"selectTeam",value:function(e,t){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var n,o=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return this.transfData.setData("teams",e),i.next=3,this.viewCtrl.create({component:a.a});case 3:return(n=i.sent).onDidDismiss().then((function(e){var i=e.data.team;i&&(o.teamsSelect[t]=i,o.clearLocal())})),i.next=7,n.present();case 7:case"end":return i.stop()}}),i,this)})))}},{key:"selectField",value:function(){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.viewCtrl.create({component:c.a});case 2:return(t=e.sent).onDidDismiss().then((function(e){console.log("close modal select field"),e.data&&e.data.field&&i.setField(e.data.field)})),e.next=6,t.present();case 6:case"end":return e.stop()}}),e,this)})))}},{key:"setField",value:function(e){e?(this.game.field=e,this.game.field_id=e.id):(this.game.field=null,this.game.field_id=null)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Lb(d.a),u.Lb(b.a),u.Lb(f.nb),u.Lb(m.a),u.Lb(f.pb),u.Lb(h.a),u.Lb(p.a),u.Lb(g.a),u.Lb(v.a))},e.\u0275cmp=u.Fb({type:e,selectors:[["app-create-game-admin"]],decls:48,vars:12,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],["slot","secondary"],[3,"color","click",4,"ngIf"],[3,"ngSubmit","keyup"],[3,"click"],["position","stacked"],["type","text","readonly",""],["name","chevron-forward-outline",1,"fle"],[2,"color","red","padding-top","0.2rem"],["type","text","readonly","",3,"click"],[4,"ngIf"],["class","ion-text-center",4,"ngIf"],["displayFormat","HH:mm ","name","time",3,"ngModel","ngModelChange"],["name","date","displayFormat","DD-MM-YYYY",3,"ngModel","ngModelChange"],["type","submit","expand","block"],[3,"color","click"],["name","help-circle-outline"],["position","floating"],["type","text","name","other_team",3,"ngModel","ngModelChange"],["name","v_team","interface","action-sheet",3,"ngModel","interfaceOptions","ngModelChange","ionChange"],["value","v"],["value","l"],[1,"ion-text-center"],[3,"field",4,"ngIf"],["type","text","name","location",3,"ngModel","ngModelChange",4,"ngIf"],[3,"field"],["type","text","name","location",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(u.Qb(0,"ion-header"),u.Qb(1,"ion-toolbar"),u.Qb(2,"ion-title"),u.vc(3,"Nuevo Partido"),u.Pb(),u.Qb(4,"ion-buttons",0),u.Qb(5,"ion-button",1),u.Yb("click",(function(){return t.close()})),u.Mb(6,"ion-icon",2),u.Pb(),u.Pb(),u.Qb(7,"ion-buttons",3),u.uc(8,P,2,1,"ion-button",4),u.Pb(),u.Pb(),u.Pb(),u.Qb(9,"ion-content"),u.Qb(10,"form",5),u.Yb("ngSubmit",(function(){return t.submit()}))("keyup",(function(){return t.serviceGame.errorsForm.clear()})),u.Qb(11,"ion-item",6),u.Yb("click",(function(){return t.selectTeam(t.myTeams,"v")})),u.Qb(12,"ion-label",7),u.vc(13,"Mi Equipo"),u.Pb(),u.Qb(14,"ion-input",8),u.vc(15),u.Pb(),u.Mb(16,"ion-icon",9),u.Qb(17,"div",10),u.vc(18),u.Pb(),u.Pb(),u.Qb(19,"ion-item"),u.Qb(20,"ion-label",7),u.vc(21,"Contrario"),u.Pb(),u.Qb(22,"ion-input",11),u.Yb("click",(function(){return t.selectTeam(t.teams,"l")})),u.vc(23),u.Pb(),u.Mb(24,"ion-icon",9),u.Qb(25,"div",10),u.vc(26),u.Pb(),u.Pb(),u.Mb(27,"br"),u.uc(28,Q,4,1,"ion-item",12),u.Qb(29,"div",10),u.vc(30),u.Pb(),u.Mb(31,"br"),u.uc(32,M,10,5,"ion-item",12),u.Mb(33,"br"),u.uc(34,C,5,3,"div",13),u.Qb(35,"div",10),u.vc(36),u.Pb(),u.Mb(37,"br"),u.Qb(38,"ion-item"),u.Qb(39,"ion-label"),u.vc(40,"HH:mm"),u.Pb(),u.Qb(41,"ion-datetime",14),u.Yb("ngModelChange",(function(e){return t.game.time=e})),u.Pb(),u.Pb(),u.Qb(42,"ion-item"),u.Qb(43,"ion-label"),u.vc(44,"Fecha"),u.Pb(),u.Qb(45,"ion-datetime",15),u.Yb("ngModelChange",(function(e){return t.game.date=e})),u.Pb(),u.Pb(),u.Qb(46,"ion-button",16),u.vc(47,"Guardar"),u.Pb(),u.Pb(),u.Pb()),2&e&&(u.yb(8),u.gc("ngIf",t.chatService.isInit),u.yb(7),u.wc(t.teamsSelect.v?t.teamsSelect.v.name:""),u.yb(3),u.wc(t.serviceGame.errorsForm.get("l_team")),u.yb(5),u.wc(t.teamsSelect.l?t.teamsSelect.l.name:""),u.yb(3),u.wc(t.serviceGame.errorsForm.get("v_team")),u.yb(2),u.gc("ngIf",t.teamsSelect.l&&-1==t.teamsSelect.l.id),u.yb(2),u.wc(t.serviceGame.errorsForm.get("other_team")),u.yb(2),u.gc("ngIf",t.teamsSelect.v&&t.teamsSelect.l),u.yb(2),u.gc("ngIf",t.teamLocal),u.yb(2),u.wc(t.serviceGame.errorsForm.get("location")),u.yb(5),u.gc("ngModel",t.game.time),u.yb(4),u.gc("ngModel",t.game.date))},directives:[f.x,f.jb,f.hb,f.j,f.i,f.y,y.l,f.r,w.i,w.e,w.f,f.D,f.G,f.C,f.vb,f.s,f.ub,w.d,w.g,f.W,f.X,k.a],styles:[".fle[_ngcontent-%COMP%]{position:absolute;right:3px;top:45%}"]}),e}()}}])}();