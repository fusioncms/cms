(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{BMdT:function(t,a,e){"use strict";e.r(a);var n={head:{title:function(){return{inner:"Mailables"}}},data:function(){return{endpoint:"/datatable/mailables"}}},s=e("KHd+"),i=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("portal",{attrs:{to:"title"}},[e("app-title",{attrs:{icon:"mail-bulk"}},[t._v("Mailables")])],1),t._v(" "),e("portal",{attrs:{to:"actions"}},[e("button",{directives:[{name:"modal",rawName:"v-modal:settings",arg:"settings"}],staticClass:"button"},[t._v("Settings")])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"content-container"},[e("p-table",{key:"mailables_table",attrs:{endpoint:t.endpoint,id:"mailables","sort-by":"name","primary-key":"handle"},scopedSlots:t._u([{key:"name",fn:function(a){return[e("p-status",{staticClass:"mr-2",attrs:{value:a.record.status}}),t._v(" "),e("router-link",{attrs:{to:{name:"mailables.edit",params:{mailable:a.record.id}}}},[t._v(t._s(a.record.name))])]}},{key:"handle",fn:function(a){return[e("code",[t._v(t._s(a.record.handle))])]}},{key:"theme",fn:function(a){return[!1!==a.record.theme?e("span",{staticClass:"badge badge--info"},[t._v(t._s(a.record.theme))]):t._e()]}},{key:"actions",fn:function(a){return[e("p-actions",{key:"mail_"+a.record.id+"_actions",attrs:{id:"mail_"+a.record.id+"_actions"}},[e("p-dropdown-link",{attrs:{to:{name:"mailables.edit",params:{mailable:a.record.id}}}},[t._v("Edit")])],1)]}}])})],1)]),t._v(" "),e("portal",{attrs:{to:"modals"}},[e("settings-modal",{attrs:{section:"mail"}})],1)],1)}),[],!1,null,null,null);a.default=i.exports}}]);