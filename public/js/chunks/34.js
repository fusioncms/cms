(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{EACl:function(e,t,s){"use strict";t.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}},"ve+l":function(e,t,s){"use strict";s.r(t);var l={name:"input-fieldtype-settings",data:function(){return{type:this.value.type||"text",placeholder:this.value.placeholder||""}},mixins:[s("EACl").a]},a=s("KHd+"),r=Object(a.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p-select",{attrs:{name:"settings.type",label:"Type",help:"What type of input should this be?",autocomplete:"off",options:[{label:"Text",value:"text"},{label:"E-mail",value:"email"},{label:"Hidden",value:"hidden"},{label:"Password",value:"password"},{label:"Search",value:"search"},{label:"Telephone Number",value:"tel"},{label:"URL",value:"url"}],"has-error":e.errors.has("settings.type"),"error-message":e.errors.get("settings.type")},model:{value:e.settings.type,callback:function(t){e.$set(e.settings,"type",t)},expression:"settings.type"}}),e._v(" "),s("p-input",{attrs:{name:"settings.placeholder",label:"Placeholder",help:"Text that will appear inside the input element's content area when empty.",autocomplete:"off","has-error":e.errors.has("settings.placeholder"),"error-message":e.errors.get("settings.placeholder")},model:{value:e.settings.placeholder,callback:function(t){e.$set(e.settings,"placeholder",t)},expression:"settings.placeholder"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);