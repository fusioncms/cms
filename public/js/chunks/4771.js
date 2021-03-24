(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[4771],{4771:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});const r={auth:function(){return{permission:"scripts.viewAny"}},head:{title:function(){return{inner:"Scripts"}}},data:function(){return{endpoint:"/datatable/scripts",scripts:[]}},methods:{destroy:function(t){axios.delete("/api/scripts/"+t).then((function(t){toast("Script successfully deleted.","success"),bus().$emit("refresh-datatable-scripts")}))}}};const i=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"script-page"},[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:"code"}},[t._v("Scripts")])],1),t._v(" "),s("portal",{attrs:{to:"actions"}},[s("div",{staticClass:"buttons"},[s("ui-button",{attrs:{to:{name:"scripts.create"}}},[t._v("Create")])],1)]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col w-full"},[s("ui-card",[s("ui-card-body",[s("ui-table",{key:"scripts",staticClass:"scripts-table",attrs:{id:"scripts",endpoint:t.endpoint,"sort-by":"name","per-page":50},scopedSlots:t._u([{key:"actions",fn:function(e){return[s("ui-table-actions",{key:"script_"+e.record.id+"_actions",attrs:{id:"script_"+e.record.id+"_actions"}},[t.$can("scripts.update")?s("ui-dropdown-link",{attrs:{to:{name:"scripts.edit",params:{script:e.record.id}}}},[t._v("Edit")]):t._e(),t._v(" "),s("ui-dropdown-divider"),t._v(" "),t.$can("scripts.delete")?s("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-script",value:e.record,expression:"table.record",arg:"delete-script"}],staticClass:"danger",on:{click:function(t){t.preventDefault()}}},[t._v("\n                                    Delete\n                                ")]):t._e()],1)]}}])})],1)],1),t._v(" "),s("portal",{attrs:{to:"modals"}},[s("ui-modal",{key:"delete_script",attrs:{name:"delete-script",title:"Delete Script"},scopedSlots:t._u([{key:"footer",fn:function(e){return[s("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-script",arg:"delete-script"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(s){return t.destroy(e.data.id)}}},[t._v("Delete")]),t._v(" "),s("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-script",arg:"delete-script"}],attrs:{variant:"secondary"}},[t._v("Cancel")])]}}])},[s("p",[t._v("Are you sure you want to permenantly delete this script?")])])],1)],1)])],1)}),[],!1,null,null,null).exports}}]);