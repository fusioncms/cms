(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Sde9:function(e,s,r){"use strict";r.r(s);var t=r("nUVr"),o={head:{title:function(){return{inner:"Create a Role"}}},data:function(){return{form:new t.a({label:"",description:"",permissions:[]},!0)}},components:{"shared-form":r("d6w0").a},methods:{submit:function(){var e=this;this.form.post("/api/roles").then((function(s){toast("Role successfully created","success"),e.$router.push("/roles")})).catch((function(e){toast(e.response.data.message,"failed")}))}}},i=r("KHd+"),n=Object(i.a)(o,(function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:"user-shield"}},[this._v("Create Role")])],1),this._v(" "),s("shared-form",{attrs:{form:this.form,submit:this.submit}})],1)}),[],!1,null,null,null);s.default=n.exports},d6w0:function(e,s,r){"use strict";var t={mixins:[r("udk0").default],props:{role:{type:Object,required:!1},form:{type:Object,required:!0},submit:{required:!0}},computed:{permissions:{get:function(){return this.form.permissions},set:function(e){this.form.permissions=e}},isOwner:function(){return this.role.id&&4===this.role.id}},methods:{}},o=r("KHd+"),i=Object(o.a)(t,(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"roles-page"},[r("portal",{attrs:{to:"actions"}},[r("div",{staticClass:"buttons"},[r("ui-button",{key:"go-back-btn",attrs:{to:{name:"roles"},variant:"secondary"}},[e._v("Go Back")]),e._v(" "),e.isOwner?e._e():r("ui-button",{key:"save-btn",attrs:{type:"submit",variant:"primary",disabled:!e.form.hasChanges},on:{click:function(s){return s.preventDefault(),e.submit(s)}}},[e._v("Save")])],1)]),e._v(" "),e.isOwner?r("ui-alert",{attrs:{icon:"info-circle",variant:"info"}},[r("p",[e._v("Owner role information and permissions are not editable.")])]):e._e(),e._v(" "),r("section-card",{attrs:{title:"General Information",description:"General information about this role and what it can manage."}},[r("ui-input-group",{attrs:{id:"roles-name",name:"label",label:"Name",description:"What should this role be called?",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("label"),"error-message":e.form.errors.get("label"),readonly:e.isOwner},model:{value:e.form.label,callback:function(s){e.$set(e.form,"label",s)},expression:"form.label"}}),e._v(" "),r("ui-textarea-group",{attrs:{id:"roles-description",name:"description",label:"Description",autocomplete:"off","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description"),readonly:e.isOwner,rows:2},model:{value:e.form.description,callback:function(s){e.$set(e.form,"description",s)},expression:"form.description"}})],1),e._v(" "),e.hasPermissions(e.form.name)?r("section-card",{attrs:{title:"Permissions",description:"Permissions allow you to restrict which areas of the controle panel this user can access."}},[r("ui-table",{key:"permissions-table",ref:"permissions",attrs:{id:"permissions-table",endpoint:"/datatable/permissions","sort-by":"name","no-actions":"","show-page-status":""},scopedSlots:e._u([{key:"name",fn:function(s){return[e.isOwner?r("code",[e._v(e._s(s.record.name))]):r("ui-checkbox",{attrs:{id:"roles-checkbox-"+s.record.name,name:"permissions","native-value":s.record.name},model:{value:e.permissions,callback:function(s){e.permissions=s},expression:"permissions"}},[r("code",[e._v(e._s(s.record.name))])])]}},{key:"description",fn:function(s){return[r("p",[e._v(e._s(s.record.description))])]}}],null,!1,839171431)})],1):e._e()],1)}),[],!1,null,null,null);s.a=i.exports},udk0:function(e,s,r){"use strict";r.r(s),s.default={methods:{isAssignable:function(e){return!_.includes(["guest"],e)},isRemovable:function(e){return!_.includes(["owner","admin","user","guest"],e)},hasPermissions:function(e){return!_.includes(["owner"],e)}}}}}]);