(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"53ML":function(e,s,t){"use strict";t.r(s),t.d(s,"getUserAndRoles",(function(){return a}));var r=t("nUVr");function a(e,s){axios.all([axios.get("/api/roles"),axios.get("/api/users/"+e)]).then(axios.spread((function(e,t){t=t.data.data,e=e.data.data,s(null,t,e,{name:t.name,email:t.email,status:t.status,role:t.roles[0].name,password:"",password_confirmation:""})})))}var o={permission:"users.update",head:{title:function(){return{inner:this.user.name||"Loading..."}}},data:function(){return{user:{},roles:[],form:new r.a({name:"",email:"",role:null,password:"",password_confirmation:"",status:1},!0)}},components:{"shared-form":t("ZfHp").a},methods:{submit:function(){var e=this;this.form.patch("/api/users/".concat(this.user.id)).then((function(s){toast("User successfully updated","success"),e.$router.push("/users")})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,s,t){a(e.params.user,(function(e,s,a,o){t(e?function(s){s.$router.push("/users"),toast(e.toString(),"danger")}:function(e){e.user=s,e.roles=a,e.form=new r.a(o,!0),e.$emit("updateHead")})}))}},i=t("KHd+"),n=Object(i.a)(o,(function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:"user-alt"}},[this._v("Edit User")])],1),this._v(" "),s("shared-form",{attrs:{form:this.form,roles:this.roles,user:this.user,submit:this.submit}})],1)}),[],!1,null,null,null);s.default=n.exports},ZfHp:function(e,s,t){"use strict";var r={mixins:[t("udk0").default],props:{form:{type:Object,required:!0},submit:{required:!0},roles:{type:Array,required:!0},user:{type:Object,required:!1}},computed:{roleOptions:function(){var e=this,s=_.filter(this.roles,(function(s){return e.isAssignable(s.name)}));return _.map(s,(function(e){return{label:e.label,value:e.name}}))},canEditPassword:function(){return this.user&&this.$store.state.auth.user&&this.user.id==this.$store.state.auth.user.id}},methods:{destroy:function(){var e=this;axios.delete("/api/users/".concat(this.user.id)).then((function(s){toast("User successfully removed from system.","success"),e.$router.push("/users")})).catch((function(e){toast(e.response.data.message,"failed")}))},emailVerification:function(){axios.post("/api/users/".concat(this.user.id,"/verify")).then((function(e){toast("Email verification notification has been sent to user.","success")})).catch((function(e){toast(e.response.data.message,"failed")}))},passwordReset:function(){axios.post("/api/users/".concat(this.user.id,"/reset-password")).then((function(e){toast("Password reset notification has been sent to user.","success")})).catch((function(e){toast(e.response.data.message,"failed")}))},passwordExpire:function(){axios.post("/api/users/".concat(this.user.id,"/expire-password")).then((function(e){toast("User password has been set as expired.","success")})).catch((function(e){toast(e.response.data.message,"failed")}))}}},a=t("KHd+"),o=Object(a.a)(r,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"user-page"},[t("portal",{attrs:{to:"actions"}},[t("div",{staticClass:"buttons"},[t("ui-button",{key:"go-back-btn",attrs:{to:{name:"users"},variant:"secondary"}},[e._v("Go Back")]),e._v(" "),t("ui-button",{key:"save-btn",attrs:{variant:"primary",disabled:!e.form.hasChanges},on:{click:function(s){return s.preventDefault(),e.submit(s)}}},[e._v("Save")])],1)]),e._v(" "),t("section-card",{attrs:{title:"General Information",description:"General information about this user."}},[t("ui-input-group",{attrs:{id:"user-name",name:"name",label:"Name",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(s){e.$set(e.form,"name",s)},expression:"form.name"}}),e._v(" "),t("ui-input-group",{attrs:{id:"user-id",type:"email",name:"email",label:"E-mail",autocomplete:"off","has-error":e.form.errors.has("email"),"error-message":e.form.errors.get("email"),required:""},model:{value:e.form.email,callback:function(s){e.$set(e.form,"email",s)},expression:"form.email"}}),e._v(" "),t("ui-toggle",{attrs:{id:"user-status",name:"status",label:"Status","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(s){e.$set(e.form,"status",s)},expression:"form.status"}})],1),e._v(" "),t("section-card",{attrs:{title:"Permissions",description:"Select the role to determine which areas of the website this user can access."}},[t("ui-select-group",{attrs:{id:"user-role",name:"role",label:"Role",options:e.roleOptions,autocomplete:"off",value:e.form.role,"has-error":e.form.errors.has("role"),"error-message":e.form.errors.get("role"),required:""},model:{value:e.form.role,callback:function(s){e.$set(e.form,"role",s)},expression:"form.role"}})],1),e._v(" "),e.canEditPassword?t("section-card",{attrs:{title:"Security",description:"Configure this user's security details."}},[t("ui-fieldset",{attrs:{help:e.user?"Only fill out the password fields below if you intend to update the user account password.":null}},[t("ui-password-group",{attrs:{id:"user-password",type:"password",name:"password",label:"Password",autocomplete:"new-password","has-error":e.form.errors.has("password"),"error-message":e.form.errors.get("password")},model:{value:e.form.password,callback:function(s){e.$set(e.form,"password",s)},expression:"form.password"}}),e._v(" "),t("ui-password-group",{attrs:{id:"user-password-confirm",type:"password",name:"password_confirmation",label:"Confirm Password",autocomplete:"new-password","has-error":e.form.errors.has("password_confirmation"),"error-message":e.form.errors.get("password_confirmation")},model:{value:e.form.password_confirmation,callback:function(s){e.$set(e.form,"password_confirmation",s)},expression:"form.password_confirmation"}})],1)],1):e._e(),e._v(" "),e.user?t("section-card",{attrs:{title:"Actions",description:"Management actions that can be performed for this user."}},[t("div",{staticClass:"mb-4"},[t("span",{staticClass:"label"},[e._v("Verification Email")]),e._v(" "),t("p",{staticClass:"help mb-2"},[e._v("Re-send the verification email to this user.")]),e._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:verify-user",arg:"verify-user"}],attrs:{variant:"secondary"}},[e._v("Send Verification")])],1),e._v(" "),t("div",{staticClass:"mb-4"},[t("span",{staticClass:"label"},[e._v("Password Reset")]),e._v(" "),t("p",{staticClass:"help mb-2"},[e._v("Re-send password reset email to this user.")]),e._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:password-user",arg:"password-user"}],attrs:{variant:"secondary"}},[e._v("Reset Password")])],1),e._v(" "),t("div",{staticClass:"mb-4"},[t("span",{staticClass:"label"},[e._v("Expire Password")]),e._v(" "),t("p",{staticClass:"help mb-2"},[e._v("Force the user to reset their password upon next login attempt.")]),e._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:expire-password",arg:"expire-password"}],attrs:{variant:"secondary"}},[e._v("Expire Password")])],1),e._v(" "),t("div",{staticClass:"mb-4"},[t("span",{staticClass:"label"},[e._v("Delete User")]),e._v(" "),t("p",{staticClass:"help mb-2"},[e._v("Once you delete this user, there is no going back. Please be certain.")]),e._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-user",arg:"delete-user"}],attrs:{variant:"danger"}},[e._v("Delete User")])],1)]):e._e(),e._v(" "),t("portal",{attrs:{to:"modals"}},[t("ui-modal",{key:"verify_user",attrs:{name:"verify-user",title:"Verification Email"},scopedSlots:e._u([{key:"footer",fn:function(s){return[t("ui-button",{directives:[{name:"modal",rawName:"v-modal:verify-user",arg:"verify-user"}],staticClass:"ml-3",on:{click:e.emailVerification}},[e._v("Confirm")]),e._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:verify-user",arg:"verify-user"}]},[e._v("Cancel")])]}}])},[t("p",[e._v("Are you sure you want to re-send the verification email to this user?")])]),e._v(" "),t("ui-modal",{key:"password_user",attrs:{name:"password-user",title:"Password Reset"},scopedSlots:e._u([{key:"footer",fn:function(s){return[t("ui-button",{directives:[{name:"modal",rawName:"v-modal:password-user",arg:"password-user"}],staticClass:"ml-3",on:{click:e.passwordReset}},[e._v("Confirm")]),e._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:password-user",arg:"password-user"}]},[e._v("Cancel")])]}}])},[t("p",[e._v("Are you sure you want to send this user a password reset notification?")])]),e._v(" "),t("ui-modal",{key:"password_expire",attrs:{name:"expire-password",title:"Expire Password"},scopedSlots:e._u([{key:"footer",fn:function(s){return[t("ui-button",{directives:[{name:"modal",rawName:"v-modal:expire-password",arg:"expire-password"}],staticClass:"ml-3",on:{click:e.passwordExpire}},[e._v("Confirm")]),e._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:expire-password",arg:"expire-password"}]},[e._v("Cancel")])]}}])},[t("p",[e._v("Are you sure you want to force user to reset their password upon next login?")])]),e._v(" "),t("ui-modal",{key:"delete_user",attrs:{name:"delete-user",title:"Delete User"},scopedSlots:e._u([{key:"footer",fn:function(s){return[t("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-user",arg:"delete-user"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:e.destroy}},[e._v("Delete")]),e._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-user",arg:"delete-user"}]},[e._v("Cancel")])]}}])},[t("p",[e._v("Are you sure you want to permenantly delete this user?")])])],1)],1)}),[],!1,null,null,null);s.a=o.exports},udk0:function(e,s,t){"use strict";t.r(s),s.default={methods:{isAssignable:function(e){return!_.includes(["guest"],e)},isRemovable:function(e){return!_.includes(["owner","admin","user","guest"],e)},hasPermissions:function(e){return!_.includes(["owner"],e)}}}}}]);