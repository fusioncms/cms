(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{EACl:function(e,t,s){"use strict";t.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}},p1lt:function(e,t,s){"use strict";s.r(t);var n={name:"hidden-fieldtype-settings",mixins:[s("EACl").a]},i=s("KHd+"),r=Object(i.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ui-input-group",{attrs:{name:"settings.value",label:"Value",help:"Value that will be submitted for this field.",autocomplete:"off","has-error":e.errors.has("settings.value"),"error-message":e.errors.get("settings.value")},model:{value:e.settings.value,callback:function(t){e.$set(e.settings,"value",t)},expression:"settings.value"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);