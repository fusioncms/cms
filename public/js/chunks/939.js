(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[939],{79:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});const i={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}},939:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var i=s(79),r=s(5385);const n={name:"audio-fieldtype",mixins:[i.Z,r.Z],data:function(){return{endpoint:"/datatable/files/audio"}},methods:{clear:function(){this.model=""}}};const a=(0,s(1900).Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ui-field-group",{attrs:{name:e.field.handle,fieldId:e.field.handle+"-field",label:e.field.name,help:e.field.help,hasError:e.hasError(e.field.handle),errorMessage:e.errorMessage(e.field.handle)}},[s("div",{staticClass:"input-group"},[s("ui-input",{staticClass:"field-input field",attrs:{id:e.field.handle,name:e.field.handle,help:e.field.help,"aria-describedby":e.field.help,hasError:e.hasError(e.field.handle)},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),s("ui-button",{directives:[{name:"modal",rawName:"v-modal:selection-modal",arg:"selection-modal"}],attrs:{icon:""}},[s("fa-icon",{attrs:{icon:["fas","plus-circle"]}}),e._v(" "),s("span",{staticClass:"sr-only"},[e._v("Choose an existing audio file")])],1),e._v(" "),s("ui-button",{attrs:{icon:""},on:{click:e.clear}},[s("fa-icon",{staticClass:"mr-1",attrs:{icon:["fas","times"]}}),e._v(" "),s("span",{staticClass:"sr-only"},[e._v("Clear field")])],1)],1)]),e._v(" "),e.model?s("audio",{attrs:{controls:"",src:e.model}}):e._e(),e._v(" "),s("ui-modal",{attrs:{name:"selection-modal",title:"Choose an existing audio file"}},[s("ui-table",{attrs:{endpoint:e.endpoint,id:"audio-files","sort-by":"name","sort-in":"desc","per-page":10},scopedSlots:e._u([{key:"name",fn:function(t){return[s("ui-radio",{attrs:{id:"selection-"+t.record.id,name:"selection","native-value":t.record.url},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[e._v("\n                    "+e._s(t.record.name)+"\n                ")])]}},{key:"bytes",fn:function(t){return[s("span",{staticClass:"help"},[e._v(e._s(e._f("bytes")(t.record.bytes)))])]}},{key:"extension",fn:function(t){return[s("span",{staticClass:"help"},[e._v(e._s(t.record.extension))])]}},{key:"created_at",fn:function(e){return[s("ui-date",{attrs:{timestamp:e.record.created_at}})]}}])})],1)],1)}),[],!1,null,null,null).exports}}]);