(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+T4p":function(e,t,n){"use strict";n.r(t);var i=n("zJgK"),s=n.n(i),r={name:"dictionary-fieldtype",mixins:[n("n7tU").a],data:function(){return{newKey:"",newValue:""}},computed:{items:{get:function(){return this.value||[]},set:function(e){this.$emit("input",e)}}},watch:{items:{deep:!0,handler:function(e){this.$emit("input",e)}}},methods:{new:function(e,t){return{_id:s()(),key:e,value:t}},add:function(){this.newKey&&this.newValue&&(this.items.push(this.new(this.newKey,this.newValue)),this.newKey="",this.newValue="")},remove:function(e){this.items=_.filter(this.items,(function(t){return t._id!==e}))}}},a=n("KHd+"),l=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ui-field-group",{attrs:{name:e.field.handle,fieldId:e.field.handle+"-field",label:e.field.name,required:e.field.required,help:e.field.help,hasError:e.hasError,errorMessage:e.errorMessage}},[e.items.length?n("table",{staticClass:"table"},[n("ui-sortable-list",{class:e.field.handle+"-sortable-list",model:{value:e.items,callback:function(t){e.items=t},expression:"items"}},[n("tbody",e._l(e.items,(function(t){return n("ui-sortable-item",{key:t._id},[n("tr",[n("td",{staticClass:"w-2/12"},[n("ui-sortable-handle",{staticClass:"cursor-move inline-block"},[n("fa-icon",{staticClass:"handle fa-fw text-gray-400 mr-3",attrs:{icon:"grip-vertical"}})],1)],1),e._v(" "),n("td",{staticClass:"w-4/12"},[n("ui-input-group",{attrs:{name:"key"},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"item.key"}})],1),e._v(" "),n("td",{staticClass:"w-4/12"},[n("ui-input-group",{attrs:{name:"value"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"item.value"}})],1),e._v(" "),n("td",{staticClass:"w-2/12"},[n("ui-button",{attrs:{icon:""},on:{click:function(n){return n.preventDefault(),e.remove(t._id)}}},[n("fa-icon",{attrs:{icon:"times"}}),e._v(" "),n("span",{staticClass:"sr-only"},[e._v("Destroy")])],1)],1)])])})),1)])],1):n("div",{staticClass:"help"},[e._v("Your list is empty.")]),e._v(" "),n("table",{staticClass:"table mt-3"},[n("tbody",[n("tr",[n("td",{staticClass:"w-2/12"}),e._v(" "),n("td",{staticClass:"w-4/12"},[n("ui-input-group",{attrs:{name:"key",placeholder:"New key"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add(t)}},model:{value:e.newKey,callback:function(t){e.newKey=t},expression:"newKey"}})],1),e._v(" "),n("td",{staticClass:"w-4/12"},[n("ui-input-group",{attrs:{name:"value",placeholder:"New value"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add(t)}},model:{value:e.newValue,callback:function(t){e.newValue=t},expression:"newValue"}})],1),e._v(" "),n("td",{staticClass:"w-2/12"},[n("ui-button",{attrs:{icon:""},on:{click:function(t){return t.preventDefault(),e.add(t)}}},[n("fa-icon",{attrs:{icon:"plus"}}),e._v(" "),n("span",{staticClass:"sr-only"},[e._v("Add")])],1)],1)])])])])}),[],!1,null,null,null);t.default=l.exports},n7tU:function(e,t,n){"use strict";t.a={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}},zJgK:function(e,t,n){(function(t){var n=t&&t.pid?t.pid.toString(36):"";function i(){var e=Date.now(),t=i.last||e;return i.last=e>t?e:t+1}e.exports=e.exports.default=function(e,t){return(e||"")+""+n+i().toString(36)+(t||"")},e.exports.process=function(e,t){return(e||"")+n+i().toString(36)+(t||"")},e.exports.time=function(e,t){return(e||"")+i().toString(36)+(t||"")}}).call(this,n("8oxB"))}}]);