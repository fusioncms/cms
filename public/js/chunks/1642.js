(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[1642],{2569:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});const l={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}},1642:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});const l={name:"file-fieldtype-settings",mixins:[s(2569).Z]};const i=(0,s(1900).Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("ui-toggle",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.multiple",label:"Multi-select",help:"Should this field allow multiple files to be uploaded?",checked:!!e.settings.multiple,"has-error":e.errors.has("settings.multiple"),"error-message":e.errors.get("settings.multiple")},model:{value:e.settings.multiple,callback:function(t){e.$set(e.settings,"multiple",t)},expression:"settings.multiple"}}),e._v(" "),s("ui-input-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.accept",label:"Acceptable file types",help:"<a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers' target='_blank'>Unique file type specifiers</a>",autocomplete:"off","has-error":e.errors.has("settings.accept"),"error-message":e.errors.get("settings.accept"),monospaced:""},model:{value:e.settings.accept,callback:function(t){e.$set(e.settings,"accept",t)},expression:"settings.accept"}}),e._v(" "),s("ui-input-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.directory",label:"Directory",help:"Directory where files will be uploaded to within the File Manager.",autocomplete:"off",placeholder:"uploads","has-error":e.errors.has("settings.directory"),"error-message":e.errors.get("settings.directory")},model:{value:e.settings.directory,callback:function(t){e.$set(e.settings,"directory",t)},expression:"settings.directory"}})],1)}),[],!1,null,null,null).exports}}]);