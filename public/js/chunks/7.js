(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{n7tU:function(t,e,n){"use strict";e.a={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{hasError:function(t){return this.errors&&this.errors.has(t)},errorMessage:function(t){return this.hasError(t)?this.errors.get(t):""}}}},nKFF:function(t,e,n){"use strict";n.r(e);var s=n("zJgK"),i=n.n(s),o={name:"table-fieldtype",mixins:[n("n7tU").a],data:function(){return{initRows:this.field.settings.initRows||1,initCols:this.field.settings.initCols||2}},computed:{model:{get:function(){var t=this.value||[];return 0==t.length?this.newTable():t},set:function(t){this.$emit("input",t)}},numRows:function(){return this.model.rows.length},numCols:function(){return _.defaultTo(this.getRow(0).cols,[]).length}},watch:{model:{deep:!0,handler:function(t){this.$emit("input",t)}}},methods:{newTable:function(){var t=this;this.model={rows:new Array(this.initRows).fill({}).map((function(e){return t.newRow(t.initCols)}))}},addRow:function(t){this.model.rows.splice((t||0)+1,0,this.newRow())},removeRow:function(t){this.model.rows.splice(t||this.numRows,1)},newRow:function(t){var e=this;return{_id:i()(),cols:new Array(t||this.numCols).fill({}).map((function(t){return e.newCell()}))}},getRow:function(t){return this.model.rows[t]||[]},addCol:function(t){var e=this;this.model.rows.forEach((function(n){return n.cols.splice((t||0)+1,0,e.newCell())}))},removeCol:function(t){var e=this;this.model.rows.forEach((function(n){return n.cols.splice(t||e.numCols,1)}))},newCell:function(t){return{_id:i()(),value:t}}}},r=n("KHd+"),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-field-group",{attrs:{name:t.field.handle,fieldId:t.field.handle+"-field",label:t.field.name,help:t.field.help,"has-error":t.hasError,"error-message":t.errorMessage}},[t.model?n("div",{staticClass:"table-wrapper"},[n("table",{staticClass:"table table-auto",attrs:{id:t.field.handle+"-table","aria-live":"polite"}},[n("thead",[n("tr",[n("th",{staticClass:"w-8"}),t._v(" "),t._l(t.numCols,(function(e){return n("th",{key:"head-"+e},[n("span",{staticClass:"buttons__group"},[n("ui-button",{attrs:{icon:"",size:"small"},on:{click:function(n){return t.addCol(e-1)}}},[n("fa-icon",{staticClass:"icon",attrs:{icon:"plus"}}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Add column")])],1),t._v(" "),n("ui-button",{attrs:{icon:"",size:"small",disabled:1==e},on:{click:function(n){return t.removeCol(e-1)}}},[n("fa-icon",{staticClass:"icon",attrs:{icon:"times"}}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Remove column")])],1)],1)])})),t._v(" "),n("th",{staticClass:"w-32"})],2)]),t._v(" "),n("ui-sortable-list",{class:t.field.handle+"-sortable-list",model:{value:t.model.rows,callback:function(e){t.$set(t.model,"rows",e)},expression:"model.rows"}},[n("tbody",t._l(t.model.rows,(function(e,s){return n("ui-sortable-item",{key:e._id},[n("tr",[n("td",[n("ui-sortable-handle",{staticClass:"cursor-move inline-block"},[n("fa-icon",{staticClass:"handle fa-fw text-gray-400",attrs:{icon:"grip-vertical"}}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Move row")])],1)],1),t._v(" "),t._l(e.cols,(function(e,s){return n("td",{key:e._id+"-"+s},[n("ui-input",{attrs:{name:"cell-"+e._id},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"col.value"}})],1)})),t._v(" "),n("td",[n("div",{staticClass:"buttons__group"},[n("ui-button",{attrs:{size:"small",icon:""},on:{click:function(e){return t.addRow(s)}}},[n("fa-icon",{staticClass:"icon",attrs:{icon:"plus"}}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Add row")])],1),t._v(" "),n("ui-button",{attrs:{size:"small",icon:"",disabled:0==s},on:{click:function(e){return t.removeRow(s)}}},[n("fa-icon",{staticClass:"icon",attrs:{icon:"times"}}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Remove row")])],1)],1)])],2)])})),1)])],1)]):t._e()])}),[],!1,null,null,null);e.default=l.exports},zJgK:function(t,e,n){(function(e){var n=e&&e.pid?e.pid.toString(36):"";function s(){var t=Date.now(),e=s.last||t;return s.last=t>e?t:e+1}t.exports=t.exports.default=function(t,e){return(t||"")+""+n+s().toString(36)+(e||"")},t.exports.process=function(t,e){return(t||"")+n+s().toString(36)+(e||"")},t.exports.time=function(t,e){return(t||"")+s().toString(36)+(e||"")}}).call(this,n("8oxB"))}}]);