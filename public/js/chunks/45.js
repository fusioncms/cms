(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{EACl:function(e,t,s){"use strict";t.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}},Sfw9:function(e,t,s){"use strict";s.r(t);var l={name:"us-state-fieldtype-settings",mixins:[s("EACl").a]},i=s("KHd+"),r=Object(i.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col w-1/2"},[s("ui-select-group",{attrs:{name:"settings.multiple",label:"Multi Select",help:"Should this field allow multiple options to be selected?",autocomplete:"off",options:[{label:"No",value:0},{label:"Yes",value:1}],"has-error":e.errors.has("settings.multiple"),"error-message":e.errors.get("settings.multiple")},model:{value:e.settings.multiple,callback:function(t){e.$set(e.settings,"multiple",t)},expression:"settings.multiple"}})],1),e._v(" "),s("div",{staticClass:"col w-1/2"},[s("ui-toggle",{attrs:{name:"settings.filterable",label:"Filterable",help:"Should this field offer a search filter?",checked:!!e.settings.filterable,"has-error":e.errors.has("settings.filterable"),"error-message":e.errors.get("settings.filterable")},model:{value:e.settings.filterable,callback:function(t){e.$set(e.settings,"filterable",t)},expression:"settings.filterable"}})],1)])}),[],!1,null,null,null);t.default=r.exports}}]);