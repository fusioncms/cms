(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"09P9":function(e,t,r){"use strict";r.r(t),r.d(t,"getRole",(function(){return a}));function a(e,t){axios.get("/api/roles/"+e).then((function(e){var r=e.data.data;t(null,r)})).catch((function(e){t(new Error("The requested role could not be found"))}))}var s={head:{title:function(){return{inner:this.role.label||"Loading..."}}},data:function(){return{role:{}}},beforeRouteEnter:function(e,t,r){a(e.params.role,(function(e,t){r(e?function(t){t.$router.push("/roles"),toast(e.toString(),"danger")}:function(e){e.role=t,e.$emit("updateHead")})}))},computed:{endpoint:function(){return this.role?"/datatable/users/"+this.role.name:"/datatable/users"},isOwner:function(){return this.role.id&&4===this.role.id},isGuest:function(){return this.role.id&&1===this.role.id}}},n=r("KHd+"),o=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"roles-page"},[r("portal",{attrs:{to:"title"}},[r("page-title",{attrs:{icon:"user-shield"}},[e._v("Role - "+e._s(e.role.label))])],1),e._v(" "),r("portal",{attrs:{to:"actions"}},[r("ui-button",{key:"view-all-btn",attrs:{to:{name:"roles"},variant:"secondary"}},[e._v("Go Back")]),e._v(" "),e.role.id?r("ui-button",{key:"edit-role-btn",attrs:{to:{name:"roles.edit",params:{role:e.role.id}},variant:"primary"}},[e._v("Edit Role")]):e._e()],1),e._v(" "),r("section-card",{attrs:{title:e.role.label,description:e.role.description}},[r("dl",{staticClass:"detail-list"},[r("dt",[e._v("Created")]),e._v(" "),r("dd",[e._v(e._s(e.$moment(e.role.created_at).format("Y-MM-DD, hh:mm a")))]),e._v(" "),r("dt",[e._v("Last Updated")]),e._v(" "),r("dd",[e._v(e._s(e.$moment(e.role.updated_at).format("Y-MM-DD, hh:mm a")))])])]),e._v(" "),r("section-card",{attrs:{title:e.role.label+" Permissions",description:"Current permissions assigned to this role."}}),e._v(" "),e.isGuest?e._e():r("ui-card",[r("ui-card-body",[r("h2",[e._v("Assigned Users")]),e._v(" "),r("p",{staticClass:"card__subtitle"},[e._v("Users currently assigned to this role.")]),e._v(" "),r("ui-table",{key:"role-"+e.role.name+"-table",staticClass:"user-table",attrs:{id:"users",endpoint:e.endpoint,"sort-by":"name","no-search":e.isOwner,"no-actions":"","show-page-status":"","show-page-numbers":"","show-page-nav":"","show-page-ends":""},scopedSlots:e._u([{key:"name",fn:function(t){return[r("div",{staticClass:"flex items-center"},[r("ui-status",{staticClass:"mr-2",attrs:{value:t.record.status}}),e._v(" "),r("router-link",{attrs:{to:{name:"users.show",params:{user:t.record.id}}}},[e._v(e._s(t.record.name))])],1)]}},{key:"email",fn:function(t){return[e._v("\n                    "+e._s(t.record.email)+"\n                ")]}},{key:"role",fn:function(t){return[r("ui-badge",[e._v(e._s(t.record.role.label))])]}},{key:"created_at",fn:function(t){return[e._v("\n                    "+e._s(e.$moment(t.record.created_at).format("Y-MM-DD"))+"\n                ")]}},{key:"email_verified_at",fn:function(t){return[t.record.email_verified_at?r("ui-badge",{attrs:{variant:"success"}},[e._v("Yes")]):r("ui-badge",{attrs:{variant:"danger"}},[e._v("No")])]}}],null,!1,3648390518)})],1)],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);