(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{EACl:function(e,s,t){"use strict";s.a={props:{value:{type:Object,required:!0}},computed:{settings:function(){return this.value.settings||{}},errors:function(){return this.value.errors||{}}}}},z5iD:function(e,s,t){"use strict";t.r(s);var a={name:"number-fieldtype-settings",mixins:[t("EACl").a],filters:{pad:function(e){return _.padStart("1",e,"0")}}},i=t("KHd+"),r=Object(i.a)(a,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex flex-wrap justify-between"},[t("p-number",{staticClass:"mr-5 w-2/5 lg:w-1/5",attrs:{name:"settings.decimals",label:"Decimal Places",help:"The number of decimal places this number will accept.",autocomplete:"off",min:"0",max:"6","has-error":e.errors.has("settings.decimals"),"error-message":e.errors.get("settings.decimals")},model:{value:e.settings.decimals,callback:function(s){e.$set(e.settings,"decimals",s)},expression:"settings.decimals"}}),e._v(" "),t("p-number",{staticClass:"mr-5 w-2/5 lg:w-1/5",attrs:{name:"settings.steps",label:"Step Size",help:"Step or increment size of the number",autocomplete:"off",min:"0",steps:e._f("pad")(e.settings.decimals),decimals:e.settings.decimals,"has-error":e.errors.has("settings.steps"),"error-message":e.errors.get("settings.steps")},model:{value:e.settings.steps,callback:function(s){e.$set(e.settings,"steps",s)},expression:"settings.steps"}}),e._v(" "),t("p-number",{staticClass:"mr-5 w-2/5 lg:w-1/5",attrs:{name:"settings.min",label:"Min Value",help:"Minimum allowed value",autocomplete:"off",decimals:e.settings.decimals,steps:e.settings.steps,"has-error":e.errors.has("settings.min"),"error-message":e.errors.get("settings.min")},model:{value:e.settings.min,callback:function(s){e.$set(e.settings,"min",s)},expression:"settings.min"}}),e._v(" "),t("p-number",{staticClass:"mr-5 w-2/5 lg:w-1/5",attrs:{name:"settings.max",label:"Max Value",help:"Maximum allowed value",autocomplete:"off",decimals:e.settings.decimals,steps:e.settings.steps,"has-error":e.errors.has("settings.max"),"error-message":e.errors.get("settings.max")},model:{value:e.settings.max,callback:function(s){e.$set(e.settings,"max",s)},expression:"settings.max"}})],1)}),[],!1,null,null,null);s.default=r.exports}}]);