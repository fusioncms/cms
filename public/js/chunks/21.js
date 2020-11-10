(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{EACl:function(e,t,i){"use strict";t.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}},k8J5:function(e,t,i){"use strict";i.r(t);var s={name:"asset-fieldtype-settings",mixins:[i("EACl").a],data:function(){return{filetypes:{image:"Images",video:"Videos",audio:"Audio",document:"Documents"},directories:[]}},methods:{recursiveMap:function(e,t){var i=this;_.forEach(e,(function(e){i.directories.push({label:_.repeat("- ",t)+e.name,value:e.id}),i.recursiveMap(e.children,t+1)}))},fetchDirectoryHierarchy:function(){var e=this;axios.get("/api/directories?recursive=true").then((function(t){var i=t.data;e.directories.push({label:"Root",value:"0"}),e.recursiveMap(i.data,1)}))}},created:function(){this.fetchDirectoryHierarchy()}},r=i("KHd+"),o=Object(r.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col w-1/2"},[i("ui-number-group",{attrs:{name:"settings.limit",label:"Limit",help:"Limit the number of assets selected; leave blank if no limit is desired.",min:"1","has-error":e.errors.has("settings.limit"),"error-message":e.errors.get("settings.limit")},model:{value:e.settings.limit,callback:function(t){e.$set(e.settings,"limit",t)},expression:"settings.limit"}}),e._v(" "),i("ui-checkbox-group",{attrs:{label:"File type restrictions",help:"Restrict which file types are selectable for this field; leave blank if no retriction is desired.","has-error":e.errors.has("settings.filetype_restrictions"),"error-message":e.errors.get("settings.filetype_restrictions")}},e._l(e.filetypes,(function(t,s){return i("ui-checkbox",{key:s,attrs:{name:"settings.filetype_restrictions",id:s,"native-value":s},model:{value:e.settings.filetype_restrictions,callback:function(t){e.$set(e.settings,"filetype_restrictions",t)},expression:"settings.filetype_restrictions"}},[e._v("\n\t\t\t\t\t"+e._s(t)+"\n\t\t\t\t")])})),1)],1),e._v(" "),i("div",{staticClass:"col w-1/2"},[i("ui-select-group",{attrs:{name:"settings.root_directory",label:"Root directory",help:"Select root folder for this field; default root will be used if None selected.",options:e.directories,"has-error":e.errors.has("settings.root_directory"),"error-message":e.errors.get("settings.root_directory")},model:{value:e.settings.root_directory,callback:function(t){e.$set(e.settings,"root_directory",t)},expression:"settings.root_directory"}})],1)])}),[],!1,null,null,null);t.default=o.exports}}]);