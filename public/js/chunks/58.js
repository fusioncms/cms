(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{HCX8:function(e,t,n){"use strict";n.r(t);var i={name:"fieldset-fieldtype",mixins:[n("n7tU").a],data:function(){return{fieldset:{}}},created:function(){var e=this;axios.get("/api/fieldsets/".concat(this.field.settings.fieldset)).then((function(t){e.fieldset=t.data.data;var n={};_.forEach(e.fieldset.fields,(function(t){n[t.handle]=e.fieldset[t.handle]||null})),e.model=n}))}},r=n("KHd+"),l=Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.fieldset.fields,(function(t){return n(t.type.id+"-fieldtype",{key:t.handle,tag:"component",attrs:{field:t},model:{value:e.model[t.handle],callback:function(n){e.$set(e.model,t.handle,n)},expression:"model[field.handle]"}})})),1)}),[],!1,null,null,null);t.default=l.exports},n7tU:function(e,t,n){"use strict";t.a={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}}}]);