(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"7i4W":function(e,t,r){"use strict";r.r(t);var n={name:"toggle-fieldtype",mixins:[r("n7tU").a],created:function(){_.isNull(this.value)&&(this.model=this.field.settings.default)}},i=r("KHd+"),l=Object(i.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("ui-toggle",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})}),[],!1,null,null,null);t.default=l.exports},n7tU:function(e,t,r){"use strict";t.a={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}}}]);