(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{Dc2P:function(e,t,s){"use strict";s.r(t);var i={name:"fieldset-fieldtype-settings",mixins:[s("EACl").a],data:function(){return{fieldsets:[]}},computed:{options:function(){return _.map(this.fieldsets,(function(e){return{label:e.name,value:e.id}}))}},created:function(){var e=this;axios.get("/api/fieldsets").then((function(t){return e.fieldsets=t.data.data}))}},n=s("KHd+"),r=Object(n.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("ui-select-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"fieldset",label:"Fieldset",help:"The fieldset from which to integrate fields.",autocomplete:"off",options:e.options,"has-error":e.errors.has("settings.fieldset"),"error-message":e.errors.get("settings.fieldset")},model:{value:e.settings.fieldset,callback:function(t){e.$set(e.settings,"fieldset",t)},expression:"settings.fieldset"}})],1)}),[],!1,null,null,null);t.default=r.exports},EACl:function(e,t,s){"use strict";t.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}}}]);