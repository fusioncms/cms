(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"53ML":function(e,s,r){"use strict";r.r(s),r.d(s,"getUserAndRoles",(function(){return a}));var t=r("nUVr");function a(e,s){axios.all([axios.get("/api/roles"),axios.get("/api/users/"+e)]).then(axios.spread((function(e,r){r=r.data.data,e=e.data.data,s(null,r,e,{name:r.name,email:r.email,status:r.status,role:r.roles[0].name,password:"",password_confirmation:""})})))}var o={head:{title:function(){return{inner:this.user.name||"Loading..."}}},data:function(){return{user:{},roles:[],form:new t.a({name:"",email:"",role:null,password:"",password_confirmation:"",status:1},!0)}},components:{"shared-form":r("ZfHp").a},methods:{submit:function(){var e=this;this.form.patch("/api/users/".concat(this.user.id)).then((function(s){toast("User successfully updated","success"),e.$router.push("/users")})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,s,r){a(e.params.user,(function(e,s,a,o){r(e?function(s){s.$router.push("/users"),toast(e.toString(),"danger")}:function(e){e.user=s,e.roles=a,e.form=new t.a(o,!0),e.$emit("updateHead")})}))}},i=r("KHd+"),n=Object(i.a)(o,(function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:"user-alt"}},[this._v("Edit User")])],1),this._v(" "),s("shared-form",{attrs:{form:this.form,roles:this.roles,user:this.user,submit:this.submit}})],1)}),[],!1,null,null,null);s.default=n.exports},ZfHp:function(e,s,r){"use strict";var t={mixins:[r("udk0").default],props:{form:{type:Object,required:!0},submit:{required:!0},roles:{type:Array,required:!0},user:{type:Object,required:!1}},computed:{roleOptions:function(){var e=this,s=_.filter(this.roles,(function(s){return e.isAssignable(s.name)}));return _.map(s,(function(e){return{label:e.label,value:e.name}}))}}},a=r("KHd+"),o=Object(a.a)(t,(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"user-page"},[r("portal",{attrs:{to:"actions"}},[r("div",{staticClass:"buttons"},[r("ui-button",{key:"go-back-btn",attrs:{to:{name:"users"},variant:"secondary"}},[e._v("Go Back")]),e._v(" "),r("ui-button",{key:"save-btn",attrs:{variant:"primary",disabled:!e.form.hasChanges},on:{click:function(s){return s.preventDefault(),e.submit(s)}}},[e._v("Save")])],1)]),e._v(" "),r("section-card",{attrs:{title:"General Information",description:"General information about this user."}},[r("ui-input-group",{attrs:{id:"user-name",name:"name",label:"Name",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(s){e.$set(e.form,"name",s)},expression:"form.name"}}),e._v(" "),r("ui-input-group",{attrs:{id:"user-id",type:"email",name:"email",label:"E-mail",autocomplete:"off","has-error":e.form.errors.has("email"),"error-message":e.form.errors.get("email"),required:""},model:{value:e.form.email,callback:function(s){e.$set(e.form,"email",s)},expression:"form.email"}}),e._v(" "),r("ui-toggle",{attrs:{id:"user-status",name:"status",label:"Status","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(s){e.$set(e.form,"status",s)},expression:"form.status"}})],1),e._v(" "),r("section-card",{attrs:{title:"Permissions",description:"Select the role to determine which areas of the website this user can access."}},[r("ui-select-group",{attrs:{id:"user-role",name:"role",label:"Role",options:e.roleOptions,autocomplete:"off",value:e.user?e.user.roles.name:null,"has-error":e.form.errors.has("role"),"error-message":e.form.errors.get("role"),required:""},model:{value:e.form.role,callback:function(s){e.$set(e.form,"role",s)},expression:"form.role"}})],1),e._v(" "),r("section-card",{attrs:{title:"Security",description:"Configure this user's security details."}},[r("ui-password-group",{attrs:{id:"user-password",type:"password",name:"password",label:"Password",autocomplete:"new-password","has-error":e.form.errors.has("password"),"error-message":e.form.errors.get("password")},model:{value:e.form.password,callback:function(s){e.$set(e.form,"password",s)},expression:"form.password"}}),e._v(" "),r("ui-password-group",{attrs:{id:"user-password-confirm",type:"password",name:"password_confirmation",label:"Confirm Password",autocomplete:"new-password","has-error":e.form.errors.has("password_confirmation"),"error-message":e.form.errors.get("password_confirmation")},model:{value:e.form.password_confirmation,callback:function(s){e.$set(e.form,"password_confirmation",s)},expression:"form.password_confirmation"}})],1),e._v(" "),e.user?r("section-card",{attrs:{title:"Actions",description:"Management actions that can be performed for this user."}},[r("div",{staticClass:"mb-4"},[r("span",{staticClass:"label"},[e._v("Verification Email")]),e._v(" "),r("p",{staticClass:"help mb-2"},[e._v("Re-send the verification email to this user.")]),e._v(" "),r("ui-button",{attrs:{variant:"secondary"}},[e._v("Send Verification")])],1),e._v(" "),r("div",{staticClass:"mb-4"},[r("span",{staticClass:"label"},[e._v("Password Reset")]),e._v(" "),r("p",{staticClass:"help mb-2"},[e._v("Force the user to reset their password upon next login attempt.")]),e._v(" "),r("ui-button",{attrs:{variant:"secondary"}},[e._v("Reset Password")])],1),e._v(" "),r("div",{staticClass:"mb-4"},[r("span",{staticClass:"label"},[e._v("Delete User")]),e._v(" "),r("p",{staticClass:"help mb-2"},[e._v("Once you delete this user, there is no going back. Please be certain.")]),e._v(" "),r("ui-button",{attrs:{variant:"danger"}},[e._v("Delete User")])],1)]):e._e()],1)}),[],!1,null,null,null);s.a=o.exports},udk0:function(e,s,r){"use strict";r.r(s),s.default={methods:{isAssignable:function(e){return!_.includes(["guest"],e)},isRemovable:function(e){return!_.includes(["owner","admin","user","guest"],e)},hasPermissions:function(e){return!_.includes(["owner"],e)}}}}}]);