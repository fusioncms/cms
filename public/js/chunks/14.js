(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{OEMf:function(e,t,r){"use strict";r.r(t),r.d(t,"getRoles",(function(){return a}));var s=r("ke3Z");function a(e){axios.get("/api/roles").then((function(t){e(null,t.data.data)})).catch((function(t){e(new Error("Roles could not be found"))}))}var o={head:{title:function(){return{inner:"Create a User"}}},data:function(){return{roles:[],form:new s.a({name:"",email:"",role:null,password:"",password_confirmation:"",email_verified_at:this.$moment().format("X"),status:1},!0)}},components:{"shared-form":r("jao2").a},methods:{submit:function(){var e=this;this.form.post("/api/users").then((function(t){toast("User successfully created","success"),e.$router.push("/users")})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,t,r){a((function(e,t){r(e?function(t){t.$router.push("/users"),toast(e.toString(),"danger")}:function(e){e.roles=t,e.$emit("updateHead"),e.$nextTick((function(){e.form.resetChangeListener()}))})}))}},n=r("KHd+"),i=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("portal",{attrs:{to:"title"}},[t("app-title",{attrs:{icon:"user-alt"}},[this._v("Create User")])],1),this._v(" "),t("shared-form",{attrs:{form:this.form,roles:this.roles,submit:this.submit}})],1)}),[],!1,null,null,null);t.default=i.exports},jao2:function(e,t,r){"use strict";var s={mixins:[r("udk0").default],props:{form:{type:Object,required:!0},submit:{required:!0},roles:{type:Array,required:!0},user:{type:Object,required:!1}},computed:{roleOptions:function(){var e=this,t=_.filter(this.roles,(function(t){return e.isAssignable(t.name)}));return _.map(t,(function(e){return{label:e.label,value:e.name}}))}}},a=r("KHd+"),o=Object(a.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[r("div",{staticClass:"card"},[r("div",{staticClass:"card__body"},[r("p-toggle",{attrs:{name:"status",label:"Status","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}}),e._v(" "),r("p-select",{attrs:{name:"role",label:"Role",options:e.roleOptions,autocomplete:"off",value:"user","has-error":e.form.errors.has("role"),"error-message":e.form.errors.get("role"),required:""},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}})],1)]),e._v(" "),e.user?r("p-definition-list",[r("p-definition",{attrs:{name:"Status"}},[r("fa-icon",{staticClass:"fa-fw text-xs",class:{"text-success-500":e.user.status,"text-danger-500":!e.user.status},attrs:{icon:["fas","circle"]}}),e._v(" "+e._s(e.user.status?"Enabled":"Disabled")+"\n            ")],1),e._v(" "),r("p-definition",{attrs:{name:"Verified"}},[r("fa-icon",{staticClass:"fa-fw text-xs",class:{"text-success-500":e.user.verified,"text-danger-500":!e.user.verified},attrs:{icon:["fas","circle"]}}),e._v(" "+e._s(e.user.verified?"Yes":"No")+"\n            ")],1),e._v(" "),r("p-definition",{attrs:{name:"Registered"}},[e._v("\n                "+e._s(e.$moment(e.user.created_at).format("Y-MM-DD, hh:mm a"))+"\n            ")]),e._v(" "),r("p-definition",{attrs:{name:"Last Login"}},[e.user.logged_in_at?r("span",[e._v(e._s(e.$moment(e.user.logged_in_at.date).format("L")))]):r("span",[e._v("Never")])])],1):e._e()]},proxy:!0}])},[r("portal",{attrs:{to:"actions"}},[r("div",{staticClass:"buttons"},[r("router-link",{staticClass:"button",attrs:{to:{name:"users"}}},[e._v("Go Back")]),e._v(" "),r("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card__body"},[r("p-title",{attrs:{name:"name",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("p-input",{attrs:{type:"email",name:"email",label:"E-mail",autocomplete:"off","has-error":e.form.errors.has("email"),"error-message":e.form.errors.get("email"),required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("p-tabs",[r("p-tab",{attrs:{name:"Security"}},[r("p-input",{attrs:{type:"password",name:"password",label:"Password",autocomplete:"new-password","has-error":e.form.errors.has("password"),"error-message":e.form.errors.get("password"),required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("p-input",{attrs:{type:"password",name:"password_confirmation",label:"Confirm Password",autocomplete:"new-password","has-error":e.form.errors.has("password_confirmation"),"error-message":e.form.errors.get("password_confirmation"),required:""},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1)],1)],1)])],1)}),[],!1,null,null,null);t.a=o.exports},udk0:function(e,t,r){"use strict";r.r(t),t.default={methods:{isAssignable:function(e){return!_.includes(["guest"],e)},isRemovable:function(e){return!_.includes(["owner","admin","user","guest"],e)},hasPermissions:function(e){return!_.includes(["owner"],e)}}}}}]);