(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"5wxI":function(e,t,r){"use strict";r.r(t);var i={name:"hidden-fieldtype",mixins:[r("n7tU").a],created:function(){this.$emit("input",this.field.settings.value)}},n=r("KHd+"),s=Object(n.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("ui-input-group",{attrs:{type:"hidden",name:this.field.handle,value:this.value}})}),[],!1,null,null,null);t.default=s.exports},n7tU:function(e,t,r){"use strict";t.a={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{hasError:function(){return this.errors&&this.errors.has(this.field.handle)},errorMessage:function(){return this.errors?this.errors.get(this.field.handle):""}}}}}]);