(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"78nr":function(t,s,e){"use strict";e.r(s);var i={name:"table-fieldtype-settings",mixins:[e("EACl").a]},n=e("KHd+"),r=Object(n.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("ui-number-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.initRows",label:"Rows",help:"Starting rows in a new table.",autocomplete:"off",min:"1","has-error":t.errors.has("settings.initRows"),"error-message":t.errors.get("settings.initRows")},model:{value:t.settings.initRows||1,callback:function(s){t.$set(t.settings,"initRows || 1",s)},expression:"settings.initRows || 1"}}),t._v(" "),e("ui-number-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.initcols",label:"Columns",help:"Starting columns in a new table.",autocomplete:"off",min:"1","has-error":t.errors.has("settings.initCols"),"error-message":t.errors.get("settings.initCols")},model:{value:t.settings.initCols||1,callback:function(s){t.$set(t.settings,"initCols || 1",s)},expression:"settings.initCols || 1"}})],1)}),[],!1,null,null,null);s.default=r.exports},EACl:function(t,s,e){"use strict";s.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(t){this.$set(this.value.settings,t)}},errors:function(){return this.value.errors||{}}}}}}]);