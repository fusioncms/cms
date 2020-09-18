(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{kE0j:function(t,e,a){"use strict";a.r(e);var n=a("g6NE"),o={head:{title:function(){return{inner:"Taxonomy"}}},data:function(){return{endpoint:"/datatable/taxonomies"}},methods:{destroy:function(t){axios.delete("/api/taxonomies/".concat(t)).then((function(t){n.a.dispatch("navigation/fetchAdminNavigation"),toast("Taxonomy successfully deleted.","success"),bus().$emit("refresh-datatable-taxonomies")}))}}},r=a("KHd+"),i=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("portal",{attrs:{to:"title"}},[a("page-title",{attrs:{icon:"sitemap"}},[t._v("Taxonomy")])],1),t._v(" "),a("portal",{attrs:{to:"actions"}},[a("ui-button",{attrs:{to:{name:"taxonomies.create"},variant:"primary"}},[t._v("Create Taxonomy")])],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("ui-table",{key:"taxonomies_table",attrs:{endpoint:t.endpoint,id:"taxonomies","sort-by":"name","primary-key":"handle"},scopedSlots:t._u([{key:"name",fn:function(e){return[a("router-link",{attrs:{to:{name:"taxonomies.edit",params:{taxonomy:e.record.id}}}},[t._v(t._s(e.record.name))])]}},{key:"handle",fn:function(e){return[a("code",[t._v(t._s(e.record.handle))])]}},{key:"description",fn:function(e){return[a("span",{staticClass:"text-gray-800 text-sm"},[t._v(t._s(e.record.description))])]}},{key:"status",fn:function(e){return[!0===e.record.status?a("span",{staticClass:"badge badge--success"},[t._v("Enabled")]):a("span",{staticClass:"badge badge--danger"},[t._v("Disabled")])]}},{key:"actions",fn:function(e){return[a("ui-table-actions",{key:"taxonomy_"+e.record.id+"_actions",attrs:{id:"taxonomy_"+e.record.id+"_actions"}},[a("ui-dropdown-link",{attrs:{to:{name:"taxonomies.edit",params:{taxonomy:e.record.id}}},on:{click:function(t){t.preventDefault()}}},[t._v("Edit")]),t._v(" "),a("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-taxonomy",value:e.record,expression:"table.record",arg:"delete-taxonomy"}],attrs:{classes:"link--danger"},on:{click:function(t){t.preventDefault()}}},[t._v("\n                            Delete\n                        ")])],1)]}}])})],1)]),t._v(" "),a("portal",{attrs:{to:"modals"}},[a("ui-modal",{key:"delete_taxonomy",attrs:{name:"delete-taxonomy",title:"Delete Taxonomy"},scopedSlots:t._u([{key:"footer",fn:function(e){return[a("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-taxonomy",arg:"delete-taxonomy"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(a){return t.destroy(e.data.id)}}},[t._v("Delete")]),t._v(" "),a("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-taxonomy",arg:"delete-taxonomy"}]},[t._v("Cancel")])]}}])},[a("p",[t._v("Are you sure you want to permenantly delete this taxonomy?")])])],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);