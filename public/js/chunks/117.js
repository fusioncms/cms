(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{ev9J:function(t,n,a){"use strict";a.r(n);var e={auth:function(){return{permission:"navigation.viewAny"}},head:{title:function(){return{inner:"Navigations"}}},data:function(){return{endpoint:"/datatable/navigation"}},methods:{destroy:function(t){axios.delete("/api/navigation/"+t).then((function(t){toast("Navigation successfully deleted.","success"),bus().$emit("refresh-datatable-navigation")}))}}},i=a("KHd+"),o=Object(i.a)(e,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("portal",{attrs:{to:"title"}},[a("page-title",{attrs:{icon:"anchor"}},[t._v("Navigation")])],1),t._v(" "),a("portal",{attrs:{to:"actions"}},[a("ui-button",{attrs:{to:{name:"navigation.create"},variant:"primary"}},[t._v("Create Navigation")])],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("ui-table",{key:"navigation_table",attrs:{endpoint:t.endpoint,id:"navigation","sort-by":"name","primary-key":"handle"},scopedSlots:t._u([{key:"name",fn:function(n){return[a("router-link",{attrs:{to:{name:"navigation.nodes",params:{navigation:n.record.id}}}},[t._v(t._s(n.record.name))])]}},{key:"handle",fn:function(n){return[a("code",[t._v(t._s(n.record.handle))])]}},{key:"description",fn:function(n){return[a("p",[t._v(t._s(n.record.description))])]}},{key:"actions",fn:function(n){return[a("ui-actions",{key:"navigation_"+n.record.id+"_actions",attrs:{id:"navigation_"+n.record.id+"_actions"}},[a("ui-dropdown-link",{attrs:{to:{name:"navigation.nodes",params:{navigation:n.record.id}}}},[t._v("Manage")]),t._v(" "),a("ui-dropdown-link",{attrs:{to:{name:"navigation.edit",params:{navigation:n.record.id}}}},[t._v("Edit")]),t._v(" "),a("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-navigation",value:n.record,expression:"table.record",arg:"delete-navigation"}],attrs:{classes:"link--danger"},on:{click:function(t){t.preventDefault()}}},[t._v("\n                            Delete\n                        ")])],1)]}}])})],1)]),t._v(" "),a("portal",{attrs:{to:"modals"}},[a("ui-modal",{key:"delete_navigation",attrs:{name:"delete-navigation",title:"Delete Navigation"},scopedSlots:t._u([{key:"footer",fn:function(n){return[a("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-navigation",arg:"delete-navigation"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(a){return t.destroy(n.data.id)}}},[t._v("Delete")]),t._v(" "),a("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-navigation",arg:"delete-navigation"}]},[t._v("Cancel")])]}}])},[a("p",[t._v("Are you sure you want to permenantly delete this navigation?")])])],1)],1)}),[],!1,null,null,null);n.default=o.exports}}]);