(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{ig3E:function(t,e,n){"use strict";n.r(e);var i={name:"replicator-fieldtype",data:function(){return{replicants:this.value||[],sections:[],active:0}},props:{field:{type:Object,required:!0},value:{type:Array,required:!1,default:function(){return[]}}},watch:{replicants:function(t){this.$emit("input",t)}},methods:{fields:function(t){var e=_.findIndex(this.sections,(function(e){return e.id==t.id}));return-1!=e?this.sections[e].fields:[]},add:function(t){var e=this.sections[t],n={};_.each(e.fields,(function(t){return n[t.handle]=t.default})),this.replicants.push({section:e,fields:n})},remove:function(t){this.replicants.splice(t,1),this.active=0===t?1:0},select:function(t){this.active=this.replicants[t]?t:0}},created:function(){var t=this;axios.get("/api/replicators/".concat(this.field.settings.replicator)).then((function(e){return t.sections=e.data.data.sections}))}},s=n("KHd+"),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:t.field.handle},domProps:{innerHTML:t._s(t.field.name)}}),t._v(" "),t._l(t.sections,(function(e,i){return n("p-button",{key:e.handle,staticClass:"button--secondary mr-2",on:{click:function(e){return t.add(i)}}},[t._v("\n        \n        "+t._s(e.name)+"\n        "),n("fa-icon",{staticClass:"fa-xs",attrs:{icon:"plus"}})],1)})),t._v(" "),n("div",{staticClass:"tabs"},[n("ul",{staticClass:"tab__list overflow-x-scroll"},t._l(t.replicants,(function(e,i){return n("li",{key:"replicant-"+i+"-tab",staticClass:"tab flex-shrink-0 flex-1 border-r border-gray-200",class:{"tab--active":i==t.active}},[n("a",{staticClass:"tab__link flex justify-between items-center",attrs:{href:"#"},domProps:{textContent:t._s(e.section.name)},on:{click:function(e){return e.preventDefault(),t.select(i)}}},[n("span",{staticClass:"flex items-center justify-center w-6 h-6 rounded hover:bg-black hover:text-white",on:{click:function(e){return e.preventDefault(),t.remove(i)}}},[n("fa-icon",{staticClass:"fa-xs",attrs:{icon:"times"}})],1)])])})),0),t._v(" "),t._l(t.replicants,(function(e,i){return[n("div",{directives:[{name:"show",rawName:"v-show",value:i==t.active,expression:"index == active"}],key:"replicant-"+i+"-panel",staticClass:"tab__panel"},t._l(t.fields(e.section),(function(i){return n(i.type.id+"-fieldtype",{key:i.handle,tag:"component",staticClass:"form__group",attrs:{field:i},model:{value:e.fields[i.handle],callback:function(n){t.$set(e.fields,i.handle,n)},expression:"replicant.fields[field.handle]"}})})),1)]}))],2)],2)}),[],!1,null,null,null);e.default=a.exports}}]);