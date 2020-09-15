(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{Vgbe:function(t,e,o){"use strict";o.r(e);var r=o("nUVr"),a={head:{title:function(){return{inner:"Create Navigation"}}},data:function(){return{form:new r.a({name:"",handle:"",description:"",sections:[]},!0)}},components:{"shared-form":o("zoOO").a},methods:{submit:function(){var t=this;this.form.post("/api/navigation").then((function(e){axios.post("/api/blueprints/".concat(e.data.blueprint.id,"/sections"),{sections:t.form.sections}).then((function(e){toast("Navigation successfully saved","success"),t.$router.push("/navigation")})).catch((function(t){toast(t.message,"failed")}))})).catch((function(t){toast(t.message,"failed")}))}},created:function(){var t=this,e=this.$watch("form.sections",(function(o){t.form.orig.sections=_.cloneDeep(o),e()}))}},n=o("KHd+"),i=Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("portal",{attrs:{to:"title"}},[e("page-title",{attrs:{icon:"anchor"}},[this._v("Create Navigation")])],1),this._v(" "),e("shared-form",{attrs:{form:this.form}})],1)}),[],!1,null,null,null);e.default=i.exports},zoOO:function(t,e,o){"use strict";var r={props:{resource:{type:Object,required:!1,default:function(){}},form:{type:Object,required:!0}}},a=o("KHd+"),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form-container",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[o("div",{staticClass:"card"},[o("div",{staticClass:"card__body"},[o("ui-slug-group",{attrs:{name:"handle",label:"Handle",monospaced:"",autocomplete:"off",required:"",delimiter:"_",watch:t.form.name,"has-error":t.form.errors.has("handle"),"error-message":t.form.errors.get("handle")},model:{value:t.form.handle,callback:function(e){t.$set(t.form,"handle",e)},expression:"form.handle"}})],1)])]},proxy:!0}])},[o("portal",{attrs:{to:"actions"}},[o("div",{staticClass:"buttons"},[o("ui-button",{attrs:{to:{name:"navigation"},variant:"secondary"}},[t._v("Go Back")]),t._v(" "),o("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!t.form.hasChanges},on:{click:function(e){return e.preventDefault(),t.$parent.submit(e)}}},[t._v("Save")])],1)]),t._v(" "),o("section-card",{attrs:{title:"General Information",description:"General information about this navigation and what it links to."}},[o("ui-input-group",{attrs:{name:"name",label:"Name",description:"What should this navigation be called?",autocomplete:"off",autofocus:"",required:"","has-error":t.form.errors.has("name"),"error-message":t.form.errors.get("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),o("ui-textarea-group",{attrs:{name:"description",label:"Description",help:"Give a short description of what this navigation will link to.",autocomplete:"off","has-error":t.form.errors.has("description"),"error-message":t.form.errors.get("description")},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),o("section-card",{attrs:{title:"Blueprint",description:"Configure this navigation's blueprint."}},[o("section-builder",{model:{value:t.form.sections,callback:function(e){t.$set(t.form,"sections",e)},expression:"form.sections"}})],1)],1)}),[],!1,null,null,null);e.a=n.exports}}]);