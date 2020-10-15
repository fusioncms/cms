(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{C6Uj:function(t,a,e){"use strict";e.r(a);var o={head:{title:function(){return{inner:"Backups"}}},mixins:[e("pajI").default,e("Huo5").default],data:function(){return{endpoint:"/datatable/backups"}},methods:{upload:function(t){var a=this;if(void 0!==t){var e=new FormData;e.append("_method","POST"),e.append("file-upload",t),axios.post("/api/backups/upload",e).then((function(){toast("Backup successfully uploaded!","success"),a.$refs.upload.remove(),bus().$emit("refresh-datatable-backups")}))}}}},n=e("KHd+"),c=Object(n.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"backups-page"},[e("portal",{attrs:{to:"title"}},[e("page-title",{attrs:{icon:"save"}},[t._v("Backups")])],1),t._v(" "),e("portal",{attrs:{to:"actions"}},[e("div",{staticClass:"buttons"},[e("ui-button",{directives:[{name:"modal",rawName:"v-modal:upload-backup",arg:"upload-backup"}],staticClass:"mr-1"},[t._v("Upload")]),t._v(" "),e("ui-button",{directives:[{name:"modal",rawName:"v-modal:confirm-backup",arg:"confirm-backup"}],attrs:{variant:"primary"},on:{click:function(t){t.preventDefault()}}},[t._v("Backup Now")])],1)]),t._v(" "),e("ui-card",[e("ui-card-body",[e("ui-table",{key:"backups",staticClass:"backup-table",attrs:{id:"backups",endpoint:t.endpoint,"sort-by":"name","sort-in":"desc","per-page":50},scopedSlots:t._u([{key:"name",fn:function(a){return[e("ui-status",{staticClass:"mr-2",attrs:{value:"success"==a.record.state}}),t._v(" "),e("router-link",{attrs:{to:{name:"backups.show",params:{backup:a.record.id}}}},[t._v(t._s(a.record.name))])]}},{key:"size",fn:function(a){return[e("code",[t._v(t._s(t.filesize(a.record.size)))])]}},{key:"created_at",fn:function(a){return[t._v("\n                        "+t._s(t.$moment(a.record.created_at).fromNow())+"\n                    ")]}},{key:"actions",fn:function(a){return[e("ui-table-actions",{key:"backup_"+a.record.id+"_actions",attrs:{id:"backup_"+a.record.id+"_actions"}},[t.$can("backups.view")?e("ui-dropdown-link",{attrs:{to:{name:"backups.show",params:{backup:a.record.id}}}},[t._v("\n\t\t\t\t\t\t\t\tView\n\t\t\t\t\t\t\t")]):t._e(),t._v(" "),e("ui-dropdown-divider"),t._v(" "),t.$can("backups.restore")?e("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:restore-backup",value:a.record,expression:"table.record",arg:"restore-backup"}],on:{click:function(t){t.preventDefault()}}},[t._v("\n\t\t\t\t\t\t\t\tRestore\n\t\t\t\t\t\t\t")]):t._e(),t._v(" "),e("ui-dropdown-link",{on:{click:function(e){return e.preventDefault(),t.downloadBackup(a.record.id)}}},[t._v("\n\t\t\t\t\t\t\t\tDownload\n\t\t\t\t\t\t\t")]),t._v(" "),!a.record.isLatest&&t.$can("backups.delete")?e("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-backup",value:a.record,expression:"table.record",arg:"delete-backup"}],on:{click:function(t){t.preventDefault()}}},[t._v("\n\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t")]):t._e()],1)]}}])})],1)],1),t._v(" "),e("portal",{attrs:{to:"modals"}},[e("restore-backup-modal"),t._v(" "),e("ui-modal",{key:"confirm_backup",attrs:{name:"confirm-backup",title:"Backup Now"}},[e("p",[t._v("This will perform a full backup of your website. Backups can take up to one minute per GB of data.")]),t._v(" "),e("template",{slot:"footer"},[e("ui-button",{directives:[{name:"modal",rawName:"v-modal:confirm-backup",arg:"confirm-backup"}],staticClass:"ml-3",attrs:{variant:"primary"},on:{click:function(a){return t.runBackup()}}},[t._v("Backup")]),t._v(" "),e("ui-button",{directives:[{name:"modal",rawName:"v-modal:confirm-backup",arg:"confirm-backup"}]},[t._v("Cancel")])],1)],2),t._v(" "),e("ui-modal",{key:"delete_backup",attrs:{name:"delete-backup",title:"Delete Backup"},scopedSlots:t._u([{key:"footer",fn:function(a){return[e("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-backup",arg:"delete-backup"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(e){return t.destroyBackup(a.data.id)}}},[t._v("Delete")]),t._v(" "),e("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-backup",arg:"delete-backup"}]},[t._v("Cancel")])]}}])},[e("p",[t._v("Are you sure you want to permenantly delete this backup?")])]),t._v(" "),e("ui-modal",{key:"upload_backup",attrs:{name:"upload-backup",title:"Upload Backup"}},[e("ui-upload",{ref:"upload",attrs:{name:"file-upload",label:"Upload",accept:"zip",multiple:!1},on:{input:t.upload}})],1)],1)],1)}),[],!1,null,null,null);a.default=c.exports},pajI:function(t,a,e){"use strict";e.r(a),a.default={methods:{downloadBackup:function(t){window.open("/backups/".concat(t),"_blank")},runBackup:function(){axios.post("/api/backups").then((function(t){return toast("Backup successfully created!","success")})).catch((function(t){return toast(t.response.data.message,"failed")}))},destroyBackup:function(t){var a=this;axios.delete("/api/backups/".concat(t)).then((function(t){toast("Backp successfully deleted!","success"),a.$router.push("/backups")}))}}}}}]);