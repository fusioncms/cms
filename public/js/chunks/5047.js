(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[5047],{79:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const s={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}},5047:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const s={name:"information-fieldtype",mixins:[r(79).Z]};const n=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col w-full"},[r("p",{domProps:{innerHTML:e._s(e.field.help)}})])])}),[],!1,null,null,null).exports}}]);