(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{EACl:function(e,t,s){"use strict";t.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}},dWt4:function(e,t,s){"use strict";s.r(t);var l=s("EACl"),i=s("Adl2"),n={name:"select-fieldtype-settings",mixins:[l.a],components:{"option-builder":i.default}},o=s("KHd+"),u=Object(o.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ui-select-group",{attrs:{name:"settings.multiple",label:"Multi Select",help:"Should this field allow multiple options to be selected?",autocomplete:"off",options:[{label:"No",value:0},{label:"Yes",value:1}],"has-error":e.errors.has("settings.multiple"),"error-message":e.errors.get("settings.multiple")},model:{value:e.settings.multiple,callback:function(t){e.$set(e.settings,"multiple",t)},expression:"settings.multiple"}}),e._v(" "),s("div",{staticClass:"col w-full"},[s("option-builder",{model:{value:e.settings.options,callback:function(t){e.$set(e.settings,"options",t)},expression:"settings.options"}})],1)],1)}),[],!1,null,null,null);t.default=u.exports}}]);