(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{EACl:function(t,s,e){"use strict";s.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(t){this.$set(this.value.settings,t)}},errors:function(){return this.value.errors||{}}}}},Z5aB:function(t,s,e){"use strict";e.r(s);var i=e("EACl"),o=e("Adl2"),l={name:"checkbox-fieldtype-settings",mixins:[i.a],components:{"option-builder":o.default}},n=e("KHd+"),a=Object(n.a)(l,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col md:w-1/2"},[e("ui-select-group",{attrs:{name:"settings.display",label:"Display",help:"Choose whether to display options in a horizontal row or vertical column.",autocomplete:"off",options:[{label:"Column",value:"column"},{label:"Row",value:"row"}],"has-error":t.errors.has("settings.display"),"error-message":t.errors.get("settings.display")},model:{value:t.settings.display,callback:function(s){t.$set(t.settings,"display",s)},expression:"settings.display"}})],1),t._v(" "),e("div",{staticClass:"col w-full"},[e("option-builder",{model:{value:t.settings.options,callback:function(s){t.$set(t.settings,"options",s)},expression:"settings.options"}})],1)])}),[],!1,null,null,null);s.default=a.exports}}]);