(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[2730],{79:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});const s={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}},2730:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});const s={name:"checkbox-fieldtype",mixins:[t(79).Z],created:function(){_.isEmpty(this.value)&&(this.model=[])}};const l=(0,t(1900).Z)(s,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ui-checkbox-group",{attrs:{label:e.field.name,help:e.field.help,inline:"row"==e.field.settings.display,hasError:e.hasError(e.field.handle),errorMessage:e.errorMessage(e.field.handle)}},e._l(e.field.settings.options,(function(r,s){return t("ui-checkbox",{key:e.field.handle+"."+s,attrs:{id:e.field.handle+"."+s,name:e.field.handle,"native-value":r.value},model:{value:e.model,callback:function(r){e.model=r},expression:"model"}},[e._v("\n        "+e._s(r.label)+"\n    ")])})),1)}),[],!1,null,null,null).exports}}]);