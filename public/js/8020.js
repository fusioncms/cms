(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[8020],{79:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const s={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}},8020:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});const s={name:"toggle-fieldtype",mixins:[r(79).Z],created:function(){_.isNull(this.value)&&(this.model=this.field.settings.default)}};const l=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("ui-toggle",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})}),[],!1,null,null,null).exports}}]);