(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{EACl:function(t,s,e){"use strict";s.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(t){this.$set(this.value.settings,t)}},errors:function(){return this.value.errors||{}}}}},s89b:function(t,s,e){"use strict";e.r(s);var n={name:"code-fieldtype-settings",mixins:[e("EACl").a],data:function(){return{modes:["CSharp","CSS","HTML","Java","JavaScript","JSON","Lua","Markdown","PHP","Python","Ruby","SCSS","sh","Text","XML","YAML"]}},computed:{options:function(){return _.map(this.modes,(function(t){return{value:_.lowerCase(t),label:t}}))}},created:function(){_.isEmpty(this.settings.syntax)&&(this.settings.syntax="text")}},a=e("KHd+"),i=Object(a.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("ui-select-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.syntax",label:"Syntax",help:"What language should the syntax highlighter use?",autocomplete:"off",options:t.options,"has-error":t.errors.has("settings.syntax"),"error-message":t.errors.get("settings.syntax")},model:{value:t.settings.syntax,callback:function(s){t.$set(t.settings,"syntax",s)},expression:"settings.syntax"}})],1)}),[],!1,null,null,null);s.default=i.exports}}]);