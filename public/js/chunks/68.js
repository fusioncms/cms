(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{dmau:function(e,t,r){"use strict";r.r(t),r.d(t,"getRoles",(function(){return a}));var n=r("LvDl"),o=r.n(n);function a(e){axios.all([axios.get("/api/roles")]).then(axios.spread((function(t){t=t.data.data,e(null,t)})))}var s={auth:function(){return{permission:"roles.viewAny"}},head:{title:function(){return{inner:"Roles"}}},mixins:[r("udk0").default],data:function(){return{endpoint:"/datatable/roles",showDeleteModal:!1,transfer:"",roles:[]}},methods:{roleOptions:function(e){var t=o.a.filter(this.roles,(function(t){return e!=t.handle}));return o.a.map(t,(function(e){return{label:e.name,value:e.handle}}))},destroy:function(e){var t=this;axios.delete("/api/roles/"+e,{data:{transfer:this.transfer}}).then((function(e){t.transfer="",t.showDeleteModal=!1,toast("Role successfully deleted.","success"),bus().$emit("refresh-datatable-roles")}))},cancelDestroy:function(){this.showDeleteModal=!1,this.transfer=""},isOwner:function(e){return e&&1===e}},beforeRouteEnter:function(e,t,r){a((function(e,t){r(e?function(t){toast(e.toString(),"danger")}:function(e){e.roles=t})}))}},l=r("KHd+"),i=Object(l.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"roles-page"},[r("portal",{attrs:{to:"title"}},[r("page-title",{attrs:{icon:"user-shield"}},[e._v("Roles")])],1),e._v(" "),r("portal",{attrs:{to:"actions"}},[e.$can("roles.create")?r("ui-button",{key:"create-role-btn",attrs:{to:{name:"roles.create"},variant:"primary"}},[e._v("Create Role")]):e._e()],1),e._v(" "),r("ui-card",[r("ui-card-body",[r("ui-table",{key:"roles",staticClass:"roles-table",attrs:{id:"roles",endpoint:e.endpoint,"sort-by":"level","show-page-status":"","show-page-numbers":"","show-page-nav":"","show-page-ends":""},scopedSlots:e._u([{key:"name",fn:function(t){return[e.$can("roles.view")?r("router-link",{attrs:{to:{name:"roles.show",params:{role:t.record.id}}}},[e._v(e._s(t.record.name))]):r("span",[e._v(e._s(t.record.name))])]}},{key:"level",fn:function(t){return[r("ui-badge",[e._v(e._s(t.record.level))])]}},{key:"description",fn:function(t){return[r("span",{staticClass:"text-gray-800 text-sm"},[e._v(e._s(t.record.description))])]}},{key:"actions",fn:function(t){return[r("ui-table-actions",{key:"role_"+t.record.id+"_actions",attrs:{id:"role_"+t.record.id+"_actions"}},[e.$can("roles.view")?r("ui-dropdown-link",{attrs:{to:{name:"roles.show",params:{role:t.record.id}}}},[e._v("View")]):e._e(),e._v(" "),!e.isOwner(t.record.id)&&e.$can("roles.update",t.record.level)?r("ui-dropdown-link",{attrs:{to:{name:"roles.edit",params:{role:t.record.id}}},on:{click:function(e){e.preventDefault()}}},[e._v("Edit")]):e._e(),e._v(" "),e.isRemovable(t.record.name)&&e.$can("roles.delete",t.record.level)?r("ui-dropdown-divider"):e._e(),e._v(" "),e.isRemovable(t.record.name)&&e.$can("roles.delete",t.record.level)?r("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-role",value:t.record,expression:"table.record",arg:"delete-role"}],attrs:{classes:"danger"},on:{click:function(e){e.preventDefault()}}},[e._v("\n                            Delete\n                        ")]):e._e()],1)]}}])})],1)],1),e._v(" "),r("portal",{attrs:{to:"modals"}},[r("ui-modal",{attrs:{name:"delete-role",title:"Delete Role","no-close-button":"","no-esc-close":""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v("Please select another role to move users to.")]),e._v(" "),t.data?r("ui-select-group",{attrs:{id:"move-role",name:"move_role",label:"Transfer to Role",options:e.roleOptions(t.data.handle),autocomplete:"off"},model:{value:e.transfer,callback:function(t){e.transfer=t},expression:"transfer"}}):e._e()]}},{key:"footer",fn:function(t){return[r("ui-button",{staticClass:"ml-3",attrs:{variant:"danger",disabled:0==e.transfer.length},on:{click:function(r){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),r("ui-button",{attrs:{variant:"secondary"},on:{click:function(t){return t.preventDefault(),e.cancelDestroy(t)}}},[e._v("Cancel")])]}}]),model:{value:e.showDeleteModal,callback:function(t){e.showDeleteModal=t},expression:"showDeleteModal"}})],1)],1)}),[],!1,null,null,null);t.default=i.exports},udk0:function(e,t,r){"use strict";r.r(t),t.default={methods:{isAssignable:function(e,t){return!_.includes(["guest"],e)&&this.$level(t)},isRemovable:function(e,t){return!_.includes(["owner","user","guest"],e)&&this.$level(t)},hasPermissions:function(e){return!_.includes(["owner"],e)}}}}}]);