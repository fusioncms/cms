(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[4031],{4031:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n,getModel:()=>a});var s=t(6072);function a(e,r){axios.get("/api/disks/".concat(e)).then((function(e){r(null,e.data.data)})).catch((function(e){r(new Error("The requested disk could not be found"))}))}const o={auth:function(){return{permission:"disks.update"}},head:{title:function(){return{inner:_.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{disk:null,form:null}},components:{"shared-form":t(931).Z},methods:{isLocked:function(e){return _.includes(["public","local"],e)},submit:function(){var e=this;this.form.patch("/api/disks/".concat(this.disk.id)).then((function(){toast("Disk successfully saved","success"),e.$router.push("/disks")})).catch((function(e){toast(e.message,"failed")}))}},beforeRouteEnter:function(e,r,t){a(e.params.disk,(function(e,r){t(e?function(r){r.$router.push("/disks"),toast(e.toString(),"danger")}:function(e){e.isLocked(r.handle)?e.$router.push("/disks"):(e.disk=r,e.form=new s.Z({name:r.name,handle:r.handle,driver:r.driver,configurations:r.configurations},!0),e.$nextTick((function(){e.$emit("updateHead")})))})}))}};const n=(0,t(1900).Z)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"disk-page"},[t("portal",{attrs:{to:"title"}},[t("page-title",{attrs:{icon:"hdd"}},[e._v("Edit Disk")])],1),e._v(" "),e.form?t("shared-form",{attrs:{form:e.form}}):e._e()],1)}),[],!1,null,null,null).exports},931:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});const s={data:function(){return{driverOptions:[{label:"Local",value:"local"},{label:"S3",value:"s3"},{label:"FTP",value:"ftp"},{label:"SFTP",value:"sftp"}]}},props:{form:{type:Object,required:!0}}};const a=(0,t(1900).Z)(s,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("portal",{attrs:{to:"actions"}},[t("div",{staticClass:"buttons"},[t("ui-button",{attrs:{to:{name:"disks"},variant:"secondary"}},[e._v("Go Back")]),e._v(" "),t("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!e.form.hasChanges},on:{click:function(r){return r.preventDefault(),e.$parent.submit(r)}}},[e._v("Save")])],1)]),e._v(" "),t("section-card",{attrs:{id:"disk_panel_general",title:"General Information",description:"General information about your filesystem disk and what it manages.",tabindex:"-1"}},[t("div",{staticClass:"row"},[t("ui-input-group",{staticClass:"col w-full lg:w-1/2",attrs:{id:"disk-name",name:"name",label:"Name",help:"What should this filesystem disk be called?",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}}),e._v(" "),t("ui-slug-group",{staticClass:"col w-full lg:w-1/2",attrs:{id:"disk-handle",name:"handle",label:"Handle",help:"Disk identifier (doubles as handle).",monospaced:"",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(r){e.$set(e.form,"handle",r)},expression:"form.handle"}}),e._v(" "),t("ui-select-group",{staticClass:"col w-full lg:w-1/2",attrs:{id:"disk-driver",name:"driver",label:"Driver",help:"Select and configure your driver.",options:e.driverOptions,"has-error":e.form.errors.has("driver"),"error-message":e.form.errors.get("driver")},model:{value:e.form.driver,callback:function(r){e.$set(e.form,"driver",r)},expression:"form.driver"}})],1)]),e._v(" "),t("disks-configurations-"+e.form.driver,{key:"disk-configurations",tag:"component",attrs:{errors:e.form.errors},model:{value:e.form.configurations,callback:function(r){e.$set(e.form,"configurations",r)},expression:"form.configurations"}})],1)}),[],!1,null,null,null).exports}}]);