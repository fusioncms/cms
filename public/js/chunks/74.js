(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{dtcN:function(e,t,s){"use strict";s.r(t);var n=s("OW73"),i={name:"replicator-fieldtype",data:function(){return{replicants:this.value||[],sections:[],active:0}},props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},watch:{replicants:function(e){this.$emit("input",e)}},methods:{fieldErrors:function(e){var t=_.has(this.errors,"errors")?this.errors.errors:{};return t=_.pickBy(t,(function(t,s){return _.startsWith(s,e)})),t=_.mapKeys(t,(function(t,s){return _.replace(s,e,"")})),new n.a(t)},_errorMessage:function(e){return this.errors?this.errors.get(e):""},fields:function(e){var t=_.findIndex(this.sections,(function(t){return t.id==e.id}));return-1!=t?this.sections[t].fields:[]},add:function(e){var t=this.sections[e],s={};_.each(t.fields,(function(e){return s[e.handle]=e.default})),this.replicants.push({section:t,fields:s})},remove:function(e){this.replicants.splice(e,1),this.active=0===e?1:0},select:function(e){this.active=this.replicants[e]?e:0}},created:function(){var e=this;axios.get("/api/replicators/".concat(this.field.settings.replicator)).then((function(t){return e.sections=t.data.data.sections}))}},r=s("KHd+"),a=Object(r.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("label",{staticClass:"form__label",attrs:{for:e.field.handle},domProps:{innerHTML:e._s(e.field.name)}}),e._v(" "),e._l(e.sections,(function(t,n){return s("p-button",{key:t.handle,staticClass:"button--secondary mr-2",on:{click:function(t){return e.add(n)}}},[e._v("\n\n        "+e._s(t.name)+"\n        "),s("fa-icon",{staticClass:"fa-xs",attrs:{icon:"plus"}})],1)})),e._v(" "),s("div",{staticClass:"tabs"},[s("ul",{staticClass:"tab__list overflow-x-scroll"},e._l(e.replicants,(function(t,n){return s("li",{key:"replicant-"+n+"-tab",staticClass:"tab flex-shrink-0 flex-1 border-r border-gray-200",class:{"tab--active":n==e.active}},[s("a",{staticClass:"tab__link flex justify-between items-center",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.select(n)}}},[s("span",[e._v(e._s(t.section.name))]),e._v(" "),s("span",{staticClass:"flex items-center justify-center w-6 h-6 rounded hover:bg-black hover:text-white",on:{click:function(t){return t.preventDefault(),e.remove(n)}}},[s("fa-icon",{staticClass:"fa-xs",attrs:{icon:"times"}})],1)])])})),0),e._v(" "),e._l(e.replicants,(function(t,n){return[s("div",{directives:[{name:"show",rawName:"v-show",value:n==e.active,expression:"index == active"}],key:"replicant-"+n+"-panel",staticClass:"tab__panel"},e._l(e.fields(t.section),(function(i){return s(i.type.id+"-fieldtype",{key:i.handle,tag:"component",staticClass:"form__group",attrs:{field:i,errors:e.fieldErrors(e.field.handle+"."+n+".fields.")},model:{value:t.fields[i.handle],callback:function(s){e.$set(t.fields,i.handle,s)},expression:"replicant.fields[sub.handle]"}})})),1)]}))],2)],2)}),[],!1,null,null,null);t.default=a.exports}}]);