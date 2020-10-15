(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6Juf":function(a,t,e){"use strict";e.r(t),e.d(t,"getModel",(function(){return n}));var s=e("nUVr");function n(a,t){axios.get("/api/backups/".concat(a)).then((function(a){return t(null,a.data.data)})).catch((function(a){t(new Error("The requested role could not be found"))}))}var c={permission:"backups.view",head:{title:function(){return{inner:this.backup.name||"Loading..."}}},mixins:[e("pajI").default,e("Huo5").default],data:function(){return{backup:{},form:!1}},methods:{submit:function(){var a=this;this.form.patch("/api/backups/".concat(this.backup.id)).then((function(t){a.backup=t.data,toast("User successfully updated","success")})).catch((function(a){toast(a.response.data.message,"failed")}))}},beforeRouteEnter:function(a,t,e){n(a.params.backup,(function(a,t){e(a?function(t){t.$router.push("/backup"),toast(a.toString(),"danger")}:function(a){a.backup=t,a.form=new s.a({name:t.name},!0),a.$emit("updateHead")})}))}},o=e("KHd+"),i=Object(o.a)(c,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"backups-page"},[e("portal",{attrs:{to:"title"}},[e("page-title",{attrs:{icon:"save"}},[a._v("Backups - "+a._s(a.backup.name))])],1),a._v(" "),e("portal",{attrs:{to:"actions"}},[e("div",{staticClass:"buttons"},[e("ui-button",{key:"go-back-btn",attrs:{to:{name:"backups"},variant:"secondary"}},[a._v("Go Back")]),a._v(" "),e("ui-button",{key:"save-btn",attrs:{variant:"primary",disabled:!a.form.hasChanges},on:{click:function(t){return t.preventDefault(),a.submit(t)}}},[a._v("Save")])],1)]),a._v(" "),e("section-card",{attrs:{title:"Backup Information",description:"General information about this backup."}},[e("dl",{staticClass:"detail-list"},[a.form?e("ui-input-group",{attrs:{id:"user-name",name:"name",label:"Name",autocomplete:"off",autofocus:"",required:"","has-error":a.form.errors.has("name"),"error-message":a.form.errors.get("name")},model:{value:a.form.name,callback:function(t){a.$set(a.form,"name",t)},expression:"form.name"}}):a._e(),a._v(" "),e("dt",[a._v("Disk")]),a._v(" "),e("dd",[a._v(a._s(a.backup.disk))]),a._v(" "),e("dt",[a._v("Size")]),a._v(" "),e("dd",[e("code",[a._v(a._s(a.filesize(a.backup.size)))])]),a._v(" "),e("dt",[a._v("Created")]),a._v(" "),e("dd",[a._v(a._s(a.$moment(a.backup.created_at).fromNow()))]),a._v(" "),e("dt",[a._v("Status")]),a._v(" "),e("dd",{staticClass:"flex"},["success"==a.backup.state?e("span",[e("fa-icon",{staticClass:"icon fa-xs text-success-500",attrs:{icon:"circle"}}),a._v(" Success\n                ")],1):a._e(),a._v(" "),"failed"==a.backup.state?e("span",[e("fa-icon",{staticClass:"icon fa-xs text-danger-500",attrs:{icon:"circle"}}),a._v(" Failed\n                ")],1):a._e(),a._v(" "),"in-progress"==a.backup.state?e("span",[e("fa-icon",{staticClass:"icon fa-xs text-orange-500",attrs:{icon:"circle"}}),a._v(" In Progress\n                ")],1):a._e()])],1)]),a._v(" "),e("section-card",{attrs:{title:"Actions",description:"Management actions that can be performed for this backup."}},[e("div",{staticClass:"mb-4"},[e("span",{staticClass:"label"},[a._v("Restore Backup")]),a._v(" "),e("p",{staticClass:"help mb-2"},[a._v("Restore FusionCMS to this backup.")]),a._v(" "),e("ui-button",{directives:[{name:"modal",rawName:"v-modal:restore-backup",value:a.backup,expression:"backup",arg:"restore-backup"}],attrs:{variant:"secondary"},on:{click:function(a){a.preventDefault()}}},[a._v("Restore Backup")])],1),a._v(" "),e("div",{staticClass:"mb-4"},[e("span",{staticClass:"label"},[a._v("Download Backup")]),a._v(" "),e("p",{staticClass:"help mb-2"},[a._v("Download backup zip.")]),a._v(" "),e("ui-button",{attrs:{variant:"secondary"},on:{click:function(t){return t.preventDefault(),a.downloadBackup(a.backup.id)}}},[a._v("Download Backup")])],1),a._v(" "),e("div",{staticClass:"mb-4"},[e("span",{staticClass:"label"},[a._v("Delete Backup")]),a._v(" "),e("p",{staticClass:"help mb-2"},[a._v("Once you delete this backup, there is no going back. Please be certain.")]),a._v(" "),e("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-backup",arg:"delete-backup"}],attrs:{variant:"danger"}},[a._v("Delete Backup")])],1)]),a._v(" "),e("section-card",{attrs:{title:"Backup Log",description:"See what has been happening."}},[a.backup.logs?e("table",{staticClass:"table",attrs:{"aria-live":"polite"}},[e("tr",[e("th",[e("span",{staticClass:"table__heading"},[a._v("Level")])]),a._v(" "),e("th",[e("span",{staticClass:"table__heading"},[a._v("Message")])]),a._v(" "),e("th",[e("span",{staticClass:"table__heading"},[a._v("Happened")])])]),a._v(" "),a._l(a.backup.logs.data,(function(t,s){return e("tr",{key:"log-"+s},[e("td",{attrs:{align:"center"}},[e("span",{staticClass:"column-label"},[a._v("Level")]),a._v("\n                    "+a._s(t.level_name)+"\n                ")]),a._v(" "),e("td",[e("span",{staticClass:"column-label"},[a._v("Message")]),a._v("\n                    "+a._s(t.message)+"\n                ")]),a._v(" "),e("td",{attrs:{align:"center"}},[e("span",{staticClass:"column-label"},[a._v("Happened")]),a._v("\n                    "+a._s(t.happened)+"\n                ")])])}))],2):a._e()]),a._v(" "),e("portal",{attrs:{to:"modals"}},[e("restore-backup-modal"),a._v(" "),e("ui-modal",{key:"delete_backup",attrs:{name:"delete-backup",title:"Delete Backup"},scopedSlots:a._u([{key:"footer",fn:function(t){return[e("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-backup",arg:"delete-backup"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(e){return a.destroyBackup(t.data.id)}}},[a._v("Delete")]),a._v(" "),e("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-backup",arg:"delete-backup"}]},[a._v("Cancel")])]}}])},[e("p",[a._v("Are you sure you want to permenantly delete this backup?")])])],1)],1)}),[],!1,null,null,null);t.default=i.exports},pajI:function(a,t,e){"use strict";e.r(t),t.default={methods:{downloadBackup:function(a){window.open("/backups/".concat(a),"_blank")},runBackup:function(){axios.post("/api/backups").then((function(a){return toast("Backup successfully created!","success")})).catch((function(a){return toast(a.response.data.message,"failed")}))},destroyBackup:function(a){var t=this;axios.delete("/api/backups/".concat(a)).then((function(a){toast("Backp successfully deleted!","success"),t.$router.push("/backups")}))}}}}}]);