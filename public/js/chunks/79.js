(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{XnyR:function(t,e,n){"use strict";n.r(e),n.d(e,"getNavigation",(function(){return a}));var o=n("nUVr");function a(t,e){axios.get("/api/navigation/".concat(t)).then((function(t){e(null,t.data.data)})).catch((function(t){e(new Error("The requested navigation could not be found"))}))}var i={auth:function(){return{permission:"navigation.update"}},head:{title:function(){return{inner:_.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{id:null,navigation:null,form:null}},components:{"shared-form":n("zoOO").a},methods:{submit:function(){var t=this;this.form.patch("/api/navigation/".concat(this.id)).then((function(){axios.post("/api/blueprints/".concat(t.navigation.blueprint.id,"/sections"),{sections:t.form.sections}).then((function(){toast("Navigation successfully saved","success"),t.$router.push("/navigation")})).catch((function(t){toast(t.message,"failed")}))})).catch((function(t){toast(t.message,"failed")}))}},beforeRouteEnter:function(t,e,n){a(t.params.navigation,(function(t,e){n(t?function(e){e.$router.push("/navigation"),toast(t.toString(),"danger")}:function(t){t.id=e.id,t.navigation=e,t.form=new o.a({name:e.name,handle:e.handle,description:e.description,sections:e.blueprint.sections},!0),t.$nextTick((function(){t.$emit("updateHead")}))})}))}},r=n("KHd+"),s=Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("portal",{attrs:{to:"title"}},[e("page-title",{attrs:{icon:"anchor"}},[this._v("Edit Navigation")])],1),this._v(" "),this.form?e("shared-form",{attrs:{form:this.form}}):this._e()],1)}),[],!1,null,null,null);e.default=s.exports},zoOO:function(t,e,n){"use strict";var o={props:{resource:{type:Object,required:!1,default:function(){}},form:{type:Object,required:!0}}},a=n("KHd+"),i=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form-container",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[n("div",{staticClass:"card"},[n("div",{staticClass:"card__body"},[n("ui-slug-group",{attrs:{name:"handle",label:"Handle",monospaced:"",autocomplete:"off",required:"",delimiter:"_",watch:t.form.name,"has-error":t.form.errors.has("handle"),"error-message":t.form.errors.get("handle")},model:{value:t.form.handle,callback:function(e){t.$set(t.form,"handle",e)},expression:"form.handle"}})],1)])]},proxy:!0}])},[n("portal",{attrs:{to:"actions"}},[n("div",{staticClass:"buttons"},[n("ui-button",{attrs:{to:{name:"navigation"},variant:"secondary"}},[t._v("Go Back")]),t._v(" "),n("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!t.form.hasChanges},on:{click:function(e){return e.preventDefault(),t.$parent.submit(e)}}},[t._v("Save")])],1)]),t._v(" "),n("section-card",{attrs:{title:"General Information",description:"General information about this navigation and what it links to."}},[n("ui-input-group",{attrs:{name:"name",label:"Name",description:"What should this navigation be called?",autocomplete:"off",autofocus:"",required:"","has-error":t.form.errors.has("name"),"error-message":t.form.errors.get("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),n("ui-textarea-group",{attrs:{name:"description",label:"Description",help:"Give a short description of what this navigation will link to.",autocomplete:"off","has-error":t.form.errors.has("description"),"error-message":t.form.errors.get("description")},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),n("section-card",{attrs:{title:"Blueprint",description:"Configure this navigation's blueprint."}},[n("section-builder",{model:{value:t.form.sections,callback:function(e){t.$set(t.form,"sections",e)},expression:"form.sections"}})],1)],1)}),[],!1,null,null,null);e.a=i.exports}}]);