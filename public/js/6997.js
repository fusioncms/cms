(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[6997],{79:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const s={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}},6997:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});const s={name:"select-fieldtype",mixins:[r(79).Z],computed:{options:function(){return this.field.settings.options}}};const l=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("ui-select-group",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help,options:e.options,filterable:!!e.field.settings.filterable,multiple:!!e.field.settings.multiple,"has-error":e.hasError(e.field.handle),"error-message":e.errorMessage(e.field.handle)},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})}),[],!1,null,null,null).exports}}]);