(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[651],{651:(t,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>i,getSettings:()=>o});var e=s(6072);function o(t,n){axios.get("/api/settings/".concat(t)).then((function(t){n(null,t.data.data)})).catch((function(t){n(new Error("The requested settings could not be found"))}))}const a={auth:function(){return{permission:"settings.update"}},head:{title:function(){return{inner:this.group.name+" Settings"||0}}},data:function(){return{group:{},form:null}},components:{"shared-form":s(3731).Z},methods:{submit:function(){this.form.patch("/api/settings/".concat(this.group.handle)).then((function(t){toast("Settings saved successfully","success")})).catch((function(t){toast(t.response.data.message,"failed")}))}},beforeRouteEnter:function(t,n,s){o(t.params.group,(function(t,n){s(t?function(n){n.$router.push("/settings"),toast(t.toString(),"danger")}:function(t){t.group=n,t.form=new e.Z(n.settings),t.$emit("updateHead")})}))}};const i=(0,s(1900).Z)(a,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:"cog"}},[t._v(t._s(t.group.name)+" Settings")])],1),t._v(" "),s("portal",{attrs:{name:"actions",to:"actions"}},[t.form?s("div",{staticClass:"buttons"},[s("ui-button",{attrs:{to:{name:"settings"},variant:"secondary"}},[t._v("Go Back")]),t._v(" "),s("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!t.form.hasChanges},on:{click:function(n){return n.preventDefault(),t.submit(n)}}},[t._v("Save")])],1):t._e()]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col w-full"},[t.form?s("shared-form",{attrs:{form:t.form,group:t.group}}):t._e()],1)])],1)}),[],!1,null,null,null).exports}}]);