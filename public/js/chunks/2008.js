(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[2008],{79:(e,l,t)=>{"use strict";t.d(l,{Z:()=>r});const r={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}},2008:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>a});const r={name:"link-fieldtype",mixins:[t(79).Z],created:function(){_.isEmpty(this.value)&&(this.model={text:"",link:"",target:"_self"})}};const a=(0,t(1900).Z)(r,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("ui-field-group",{attrs:{name:e.field.handle,fieldId:e.field.handle+"-field",label:e.field.name,help:e.field.help}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col w-full md:w-1/3"},[t("ui-input-group",{attrs:{name:e.field.handle+".text",autocomplete:"off","hide-label":"",placeholder:"Link Text",hasError:e.hasError(e.field.handle+".text"),errorMessage:e.errorMessage(e.field.handle+".text")},model:{value:e.model.text,callback:function(l){e.$set(e.model,"text",l)},expression:"model.text"}})],1),e._v(" "),t("div",{staticClass:"col w-full md:w-1/3"},[t("ui-input-group",{attrs:{name:e.field.handle+".link",autocomplete:"off","hide-label":"",placeholder:"Link URL",hasError:e.hasError(e.field.handle+".link"),errorMessage:e.errorMessage(e.field.handle+".link")},model:{value:e.model.link,callback:function(l){e.$set(e.model,"link",l)},expression:"model.link"}})],1),e._v(" "),t("div",{staticClass:"col w-full md:w-1/3"},[t("ui-select-group",{attrs:{name:e.field.handle+".target",autocomplete:"off","hide-label":"",options:[{label:"Open in Same Window",value:"_self"},{label:"Open in New Window",value:"_blank"}],hasError:e.hasError(e.field.handle+".target"),errorMessage:e.errorMessage(e.field.handle+".target")},model:{value:e.model.target,callback:function(l){e.$set(e.model,"target",l)},expression:"model.target"}})],1)])])}),[],!1,null,null,null).exports}}]);