(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{A7Fy:function(e,t,r){"use strict";r.r(t);var i=r("n7tU"),a=r("Huo5"),s={name:"audio-fieldtype",mixins:[i.a,a.default],data:function(){return{endpoint:"/datatable/files/audio"}},computed:{model:{get:function(){return this.value||""},set:function(e){this.$emit("input",e)}}},methods:{clear:function(){this.model=""}}},n=r("KHd+"),l=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ui-field-group",{attrs:{name:e.field.handle,fieldId:e.field.handle+"-field",label:e.field.name,required:e.field.required,help:e.field.help,hasError:e.hasError,errorMessage:e.errorMessage}},[r("div",{staticClass:"input-group"},[r("ui-input",{staticClass:"field-input field",attrs:{id:e.field.handle,name:e.field.handle,help:e.field.help,required:e.field.required,"has-error":e.hasError,"error-message":e.errorMessage,"aria-required":e.field.required,"aria-describedby":e.field.help},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),r("ui-button",{directives:[{name:"modal",rawName:"v-modal:selection-modal",arg:"selection-modal"}],attrs:{icon:""}},[r("fa-icon",{attrs:{icon:["fas","plus-circle"]}}),e._v(" "),r("span",{staticClass:"sr-only"},[e._v("Choose an existing audio file")])],1),e._v(" "),r("ui-button",{attrs:{icon:""},on:{click:e.clear}},[r("fa-icon",{staticClass:"mr-1",attrs:{icon:["fas","times"]}}),e._v(" "),r("span",{staticClass:"sr-only"},[e._v("Clear field")])],1)],1)]),e._v(" "),e.model?r("audio",{attrs:{controls:"",src:e.model}}):e._e(),e._v(" "),r("ui-modal",{attrs:{name:"selection-modal",title:"Choose an existing audio file"}},[r("ui-table",{attrs:{endpoint:e.endpoint,id:"audio-files","sort-by":"name","sort-in":"desc","per-page":10},scopedSlots:e._u([{key:"name",fn:function(t){return[r("ui-radio",{attrs:{id:"selection-"+t.record.id,name:"selection","native-value":t.record.url},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[e._v("\n                    "+e._s(t.record.name)+"\n                ")])]}},{key:"bytes",fn:function(t){return[r("span",{staticClass:"help"},[e._v(e._s(e._f("bytes")(t.record.bytes)))])]}},{key:"extension",fn:function(t){return[r("span",{staticClass:"help"},[e._v(e._s(t.record.extension))])]}},{key:"created_at",fn:function(e){return[r("ui-date",{attrs:{timestamp:e.record.created_at}})]}}])})],1)],1)}),[],!1,null,null,null);t.default=l.exports},n7tU:function(e,t,r){"use strict";t.a={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{hasError:function(){return this.errors&&this.errors.has(this.field.handle)},errorMessage:function(){return this.errors?this.errors.get(this.field.handle):""}}}}}]);