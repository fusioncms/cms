(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{n7tU:function(e,r,t){"use strict";r.a={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{hasError:function(){return this.errors&&this.errors.has(this.field.handle)},errorMessage:function(){return this.errors?this.errors.get(this.field.handle):""}}}},"thi/":function(e,r,t){"use strict";t.r(r);var n={name:"email-fieldtype",mixins:[t("n7tU").a]},i=t("KHd+"),l=Object(i.a)(n,(function(){var e=this,r=e.$createElement;return(e._self._c||r)("ui-input-group",{attrs:{name:e.field.handle,type:"email",label:e.field.name,help:e.field.help,placeholder:e.field.settings.placeholder,value:e.value,"has-error":e.hasError,"error-message":e.errorMessage},on:{input:function(r){return e.$emit("input",r)}}})}),[],!1,null,null,null);r.default=l.exports}}]);