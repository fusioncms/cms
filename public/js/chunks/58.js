(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{n7tU:function(e,r,t){"use strict";r.a={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}},"thi/":function(e,r,t){"use strict";t.r(r);var l={name:"email-fieldtype",mixins:[t("n7tU").a]},n=t("KHd+"),i=Object(n.a)(l,(function(){var e=this,r=e.$createElement;return(e._self._c||r)("ui-input-group",{attrs:{type:"email",name:e.field.handle,label:e.field.name,help:e.field.help,placeholder:e.field.settings.placeholder,hasError:e.hasError(e.field.handle),errorMessage:e.errorMessage(e.field.handle)},model:{value:e.model,callback:function(r){e.model=r},expression:"model"}})}),[],!1,null,null,null);r.default=i.exports}}]);