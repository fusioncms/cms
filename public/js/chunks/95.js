(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{ggRD:function(t,e,n){"use strict";n.r(e),n.d(e,"getBlueprint",(function(){return a}));var r=n("nUVr"),s={props:{resource:{type:Object,required:!1,default:function(){}},form:{type:Object,required:!0}}},o=n("KHd+");function a(t,e){axios.get("/api/blueprints/"+t).then((function(t){e(null,t.data.data)})).catch((function(t){e(new Error("The requested blueprint could not be found"))}))}var i={head:{title:function(){return{inner:_.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{id:null,resource:null,form:null}},components:{"shared-form":Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form-container",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[t.resource?n("ui-definition-list",[n("ui-definition",{attrs:{name:"Group"}},[t._v("\n                    "+t._s(t.resource.group)+"\n                ")]),t._v(" "),n("ui-definition",{attrs:{name:"Created At"}},[t._v("\n                    "+t._s(t.$moment(t.resource.created_at).format("Y-MM-DD, hh:mm a"))+"\n                ")]),t._v(" "),n("ui-definition",{attrs:{name:"Updated At"}},[t._v("\n                    "+t._s(t.$moment(t.resource.updated_at).format("Y-MM-DD, hh:mm a"))+"\n                ")])],1):t._e()]},proxy:!0}])},[n("portal",{attrs:{to:"actions"}},[n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button",attrs:{to:{name:"blueprints"}}},[t._v("Go Back")]),t._v(" "),n("button",{staticClass:"button button--primary",class:{"button--disabled":!t.form.hasChanges},attrs:{type:"submit",disabled:!t.form.hasChanges},on:{click:function(e){return e.preventDefault(),t.$parent.submit(e)}}},[t._v("Save")])],1)]),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card__body"},[n("ui-title-group",{attrs:{name:"name",readonly:"","has-error":t.form.errors.has("name"),"error-message":t.form.errors.get("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),n("section-builder",{staticClass:"mt-6",model:{value:t.form.sections,callback:function(e){t.$set(t.form,"sections",e)},expression:"form.sections"}})],1)])],1)}),[],!1,null,null,null).exports},methods:{submit:function(){var t=this;this.form.patch("/api/blueprints/".concat(this.resource.id)).then((function(){axios.post("/api/blueprints/".concat(t.resource.id,"/sections"),{sections:t.form.sections}).then((function(){toast("Blueprint successfully updated","success"),t.$router.push("/blueprints")})).catch((function(t){toast(t.message,"failed")}))})).catch((function(t){toast(t.response.data.message,"failed")}))}},beforeRouteEnter:function(t,e,n){a(t.params.blueprint,(function(t,e){n(t?function(e){e.$router.push("/blueprints"),toast(t.toString(),"danger")}:function(t){t.resource=e,t.form=new r.a({name:e.name,sections:e.sections},!0),t.$nextTick((function(){t.$emit("updateHead")}))})}))}},u=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("portal",{attrs:{to:"title"}},[e("page-title",{attrs:{icon:"list"}},[this._v("Edit Blueprint")])],1),this._v(" "),this.form?e("shared-form",{attrs:{form:this.form,resource:this.resource}}):this._e()],1)}),[],!1,null,null,null);e.default=u.exports}}]);