(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{L2b2:function(e,t,a){"use strict";a.r(t);var i=a("T7iU"),r=a.n(i),o=a("ke3Z"),n=a("Huo5"),l=a("L2JU");function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={head:{title:function(){return{inner:this.file.name||"Loading..."}}},mixins:[n.default],data:function(){return{file:{},form:new o.a,player:null,loaded:!1}},computed:{fileSrc:function(e){return"".concat(this.file.url,"?w=1500&h=1500&fit=max&t=").concat(this.$moment.utc(this.file.updated_at).format("X"))}},watch:{file:{handler:function(e){var t=this;this.$nextTick((function(){t.player=new r.a(t.$refs.player,{title:t.file.name,ratio:"16:9",controls:["play-large","restart","play","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["quality","loop"]})}))},deep:!0}},methods:c(c({},Object(l.b)({toggleSelection:"filemanager/toggleFileSelection"})),{},{getFile:function(e,t,a){var i=this;axios.get("/api/files/"+e.params.uuid).then((function(e){i.file=e.data.data,i.loaded=!0,i.form=new o.a({name:i.file.name,title:i.file.title,alt:i.file.alt,caption:i.file.caption}),i.toggleSelection(i.file.id),i.$emit("updateHead")}))},submit:function(){var e=this;this.form.patch("/api/files/".concat(this.file.id)).then((function(t){e.file.name=e.form.name,toast("The file's information was successfully updated","success")})).catch((function(e){toast(e.response.data.message,"danger")}))},back:function(){this.$router.push({name:"file-manager.index"})},download:function(){var e=this;axios({url:"/api/files/".concat(this.file.uuid,"/download"),method:"GET",responseType:"blob"}).then((function(t){var a=window.URL.createObjectURL(new Blob([t.data])),i=document.createElement("a");i.href=a,i.setAttribute("download","".concat(e.file.name,".").concat(e.file.extension)),document.body.appendChild(i),i.click()}))}}),beforeRouteEnter:function(e,t,a){a((function(i){i.getFile(e,t,a)}))},beforeRouteUpdate:function(e,t,a){this.getFile(e,t,a),a()}},d=a("KHd+"),m=Object(d.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[a("div",{staticClass:"card"},[a("div",{staticClass:"card__body"},[a("p-slug",{attrs:{name:"name",label:"Filename",autofocus:"",required:"",autocomplete:"off",help:"The filename dictates the Share URL below.",placeholder:"Filename","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),a("p-input",{attrs:{name:"title",label:"Title",autocomplete:"off",help:"The title targets the title html attributes, which is a nice-to-have feature.",placeholder:"Title (optional)","has-error":e.form.errors.has("title"),"error-message":e.form.errors.get("title")},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}}),e._v(" "),a("p-input",{attrs:{name:"alt",label:"Alt",autocomplete:"off",placeholder:"Alt (optional)",help:"This value targets the alt html attributes, required for accessibility.","has-error":e.form.errors.has("alt"),"error-message":e.form.errors.get("alt")},model:{value:e.form.alt,callback:function(t){e.$set(e.form,"alt",t)},expression:"form.alt"}}),e._v(" "),a("p-textarea",{attrs:{name:"caption",label:"Caption",help:"This caption is used for image captions to give users more information.",placeholder:"Caption (optional)","has-error":e.form.errors.has("caption"),"error-message":e.form.errors.get("caption")},model:{value:e.form.caption,callback:function(t){e.$set(e.form,"caption",t)},expression:"form.caption"}})],1)]),e._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card__body"},[a("p-input",{staticClass:"text-sm",attrs:{name:"share",readonly:"",label:"Share",value:e.file.url}})],1)]),e._v(" "),e.file.created_at?a("p-definition-list",[a("p-definition",{attrs:{name:"Size"}},[e._v("\n                "+e._s(e._f("bytes")(e.file.bytes))+"\n            ")]),e._v(" "),a("p-definition",{attrs:{name:"Mimetype"}},[e._v("\n                "+e._s(e.file.mimetype)+"\n            ")]),e._v(" "),e.file.dimensions?a("p-definition",{attrs:{name:"Dimensions"}},[e._v("\n                "+e._s(e.file.dimensions.width)+" x "+e._s(e.file.dimensions.height)+"\n            ")]):e._e(),e._v(" "),a("p-definition",{attrs:{name:"Last Modified"}},[e._v("\n                "+e._s(e.$moment(e.file.created_at.date).format("L"))+"\n            ")])],1):e._e()]},proxy:!0}])},[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"image"},domProps:{textContent:e._s(e.form.name)}})],1),e._v(" "),a("portal",{attrs:{to:"actions"}},[a("div",{staticClass:"buttons"},[a("button",{directives:[{name:"modal",rawName:"v-modal:delete",arg:"delete"}],staticClass:"button button--danger"},[e._v("Delete")]),e._v(" "),a("button",{directives:[{name:"modal",rawName:"v-modal:move-file",arg:"move-file"}],staticClass:"button"},[e._v("Move")]),e._v(" "),a("button",{directives:[{name:"modal",rawName:"v-modal:replace-file",arg:"replace-file"}],staticClass:"button"},[e._v("Replace")]),e._v(" "),a("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.download(t)}}},[e._v("Download")]),e._v(" "),a("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.back(t)}}},[e._v("Go Back")]),e._v(" "),a("button",{staticClass:"button button--primary",on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save")])])]),e._v(" "),a("portal",{attrs:{to:"modals"}},[a("move-file-modal"),e._v(" "),a("replace-file-modal",{attrs:{file:e.file},on:{replaced:function(t){return e.file=t}}}),e._v(" "),a("delete-file-modal",{attrs:{file:e.file}})],1),e._v(" "),e.loaded?a("div",{key:e.file.name,staticClass:"card"},[a("div",{staticClass:"card__body flex items-center justify-center"},["image"==e.file.type?a("div",[a("p-img",{staticClass:"rounded",attrs:{src:e.fileSrc,alt:e.file.alt,"background-color":"#ffffff"}})],1):"video"==e.file.type?a("div",{staticClass:"w-full"},[a("video",{ref:"player",attrs:{controls:"",crossorigin:""}},[a("source",{attrs:{src:e.file.url,type:e.file.mimetype,size:"576"}})])]):"audio"==e.file.type?a("div",[a("audio",{attrs:{controls:""}},[a("source",{attrs:{src:e.file.url,type:e.file.mimetype}})])]):a("div",[a("p-img",{attrs:{src:"/vendor/fusion/img/"+e.file.type+"-small.svg","background-color":"#ffffff",width:200,height:200,alt:e.file.alt}}),e._v(" "),a("div",{staticClass:"text-center px-6 py-3 rounded border border-gray-400 bg-gray-200 text-gray-800"},[e._v("\n                    No preview available\n                ")])],1)])]):e._e(),e._v(" "),"video"==e.file.type?a("div",{staticClass:"card"},[a("div",{staticClass:"card__body text-center text-sm text-gray-800"},[e._v("\n            If you intend on serving this video on your website, it's highly recommended that you use a 3rd party service such as "),a("a",{attrs:{href:""}},[e._v("Youtube")]),e._v(" or "),a("a",{attrs:{href:""}},[e._v("Vimeo")]),e._v(".\n        ")])]):e._e()],1)}),[],!1,null,null,null);t.default=m.exports}}]);