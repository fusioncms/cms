(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[8437],{2569:(t,s,e)=>{"use strict";e.d(s,{Z:()=>n});const n={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(t){this.$set(this.value.settings,t)}},errors:function(){return this.value.errors||{}}}}},8437:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>a});const n={name:"code-fieldtype-settings",mixins:[e(2569).Z],data:function(){return{modes:["CSharp","CSS","HTML","Java","JavaScript","JSON","Lua","Markdown","PHP","Python","Ruby","SCSS","sh","Text","XML","YAML"]}},computed:{options:function(){return _.map(this.modes,(function(t){return{value:_.lowerCase(t),label:t}}))}},created:function(){_.isEmpty(this.settings.syntax)&&(this.settings.syntax="text")}};const a=(0,e(1900).Z)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("ui-select-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.syntax",label:"Syntax",help:"What language should the syntax highlighter use?",autocomplete:"off",options:t.options,"has-error":t.errors.has("settings.syntax"),"error-message":t.errors.get("settings.syntax")},model:{value:t.settings.syntax,callback:function(s){t.$set(t.settings,"syntax",s)},expression:"settings.syntax"}})],1)}),[],!1,null,null,null).exports}}]);