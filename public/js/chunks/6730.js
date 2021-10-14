/*! For license information please see 6730.js.LICENSE.txt */
(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[6730],{6730:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});var i=n(1513),o=n(6072);const r={auth:function(){return{permission:"links.viewAny"}},components:{VueNestable:i.VueNestable,VueNestableHandle:i.VueNestableHandle},head:{title:function(){return{inner:this.navigation.name||"Loading..."}}},data:function(){return{loaded:!1,navigation:{},links:[],saving:!1,changed:!1,before:null,after:null,form:new o.Z({name:"",url:"",new_window:0})}},computed:{options:function(){return _.map(this.links,(function(t){return{label:t.name,value:t.id}}))}},methods:{save:function(){var t=this;this.saving=!0,axios.post("/api/navigation/"+this.navigation.id+"/links/reorder",{links:this.links}).then((function(e){t.saving=!1,t.changed=!1,toast("Links successfully saved.","success")}))},changing:function(){this.loaded?this.changed=!0:this.loaded=!0},fetchLinks:function(){var t=this;return axios.get("/api/navigation/"+this.navigation.id).then((function(e){t.links=e.data.data.links}))},destroy:function(t){var e=this;axios.delete("/api/navigation/"+this.navigation.id+"/links/"+t).then((function(t){e.fetchLinks().then((function(){toast("Link successfully deleted.","success")}))}))},moveBefore:function(t){var e=this;axios.post("/api/navigation/"+this.navigation.id+"/links/before",{move:t,before:parseInt(this.before)}).then((function(t){e.after=null,e.before=null,e.fetchLinks().then((function(){toast("Link successfully moved.","success")}))}))},moveAfter:function(t){var e=this;axios.post("/api/navigation/"+this.navigation.id+"/links/after",{move:t,after:parseInt(this.after)}).then((function(t){e.after=null,e.before=null,e.fetchLinks().then((function(){toast("Link successfully moved.","success")}))}))}},beforeRouteEnter:function(t,e,n){axios.get("/api/navigation/"+t.params.navigation).then((function(t){n((function(e){e.navigation=t.data.data,e.links=t.data.data.links,e.$emit("updateHead")}))}))},beforeRouteUpdate:function(t,e,n){var i=this;axios.get("/api/navigation/"+t.params.navigation).then((function(t){i.navigation=t.data.data,i.links=t.data.data.links,i.$emit("updateHead")})),n()}};const a=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link-page"},[n("portal",{attrs:{to:"title"}},[n("page-title",{attrs:{icon:"anchor"}},[t._v(t._s(t.navigation.name))])],1),t._v(" "),n("portal",{attrs:{to:"actions"}},[n("div",{staticClass:"buttons"},["sm"!=t.$mq?n("ui-button",{key:"go-back-btn",attrs:{to:{name:"navigation"},variant:"secondary"}},[t._v("Go Back")]):t._e(),t._v(" "),n("ui-button",{key:"create-btn",attrs:{to:{name:"links.create"},variant:"primary"}},[t._v("Create")]),t._v(" "),t.changed?n("ui-button",{key:"save-btn",attrs:{variant:"primary",disabled:t.saving},on:{click:function(e){return e.preventDefault(),t.save(e)}}},[t._v("Save")]):t._e()],1)]),t._v(" "),0==t.links.length?n("div",{staticClass:"card"},[t._m(0)]):n("div",{staticClass:"mb-4 xl:mb-6"},[n("VueNestable",{attrs:{threshold:32},on:{input:function(e){return t.changing()}},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item;return[n("div",{staticClass:"flex"},[n("VueNestableHandle",{staticClass:"flex items-center justify-center border-r w-8 text-gray-500 bg-gray-50 rounded-l",attrs:{item:i}},[n("fa-icon",{attrs:{icon:["fas","grip-vertical"]}})],1),t._v(" "),n("div",{staticClass:"flex flex-1 items-center justify-between"},[n("div",{staticClass:"p-3 flex items-center",class:{"font-bold":""==i.url||"#"==i.url}},[n("ui-status",{staticClass:"mr-2",attrs:{value:i.status}}),t._v(" "),n("router-link",{attrs:{to:{name:"links.edit",params:{navigation:t.navigation.id,link:i.id}}}},[t._v(t._s(i.name))])],1),t._v(" "),n("div",{staticClass:"p-2"},[n("ui-actions",{key:"link_"+i.id+"_actions",attrs:{right:"",id:"link_"+i.id+"_actions"}},[n("ui-dropdown-link",{attrs:{to:{name:"links.edit",params:{navigation:t.navigation.id,link:i.id}}},on:{click:function(t){t.preventDefault()}}},[t._v("Edit")]),t._v(" "),n("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:move-before",value:i,expression:"item",arg:"move-before"}],on:{click:function(t){t.preventDefault()}}},[t._v("\n                                    Move before...\n                                ")]),t._v(" "),n("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:move-after",value:i,expression:"item",arg:"move-after"}],on:{click:function(t){t.preventDefault()}}},[t._v("\n                                    Move after...\n                                ")]),t._v(" "),n("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-link",value:i,expression:"item",arg:"delete-link"}],attrs:{classes:"link--danger"},on:{click:function(t){t.preventDefault()}}},[t._v("\n                                    Delete\n                                ")])],1)],1)])],1)]}}]),model:{value:t.links,callback:function(e){t.links=e},expression:"links"}})],1),t._v(" "),n("portal",{attrs:{to:"modals"}},[n("ui-modal",{key:"delete_link",attrs:{name:"delete-link",title:"Delete Link"},scopedSlots:t._u([{key:"footer",fn:function(e){return[n("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-link",arg:"delete-link"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(n){return t.destroy(e.data.id)}}},[t._v("Delete")]),t._v(" "),n("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-link",arg:"delete-link"}]},[t._v("Cancel")])]}}])},[n("p",[t._v("Are you sure you want to permenantly delete this link?")])]),t._v(" "),n("ui-modal",{key:"move_before",attrs:{name:"move-before",title:"Move before..."},scopedSlots:t._u([{key:"footer",fn:function(e){return[n("ui-button",{directives:[{name:"modal",rawName:"v-modal:move-before",arg:"move-before"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(n){return t.moveBefore(e.data.id)}}},[t._v("Move")]),t._v(" "),n("ui-button",{directives:[{name:"modal",rawName:"v-modal:move-before",arg:"move-before"}],on:{click:function(e){t.before=null}}},[t._v("Cancel")])]}}])},[[n("p",[t._v("Which link would you like to move before?")]),t._v(" "),n("ui-select-group",{attrs:{name:"before",label:"Link","hide-label":"",options:t.options},model:{value:t.before,callback:function(e){t.before=e},expression:"before"}})]],2),t._v(" "),n("ui-modal",{key:"move_after",attrs:{name:"move-after",title:"Move after..."},scopedSlots:t._u([{key:"footer",fn:function(e){return[n("ui-button",{directives:[{name:"modal",rawName:"v-modal:move-after",arg:"move-after"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(n){return t.moveAfter(e.data.id)}}},[t._v("Move")]),t._v(" "),n("ui-button",{directives:[{name:"modal",rawName:"v-modal:move-after",arg:"move-after"}],on:{click:function(e){t.after=null}}},[t._v("Cancel")])]}}])},[[n("p",[t._v("Which link would you like to move after?")]),t._v(" "),n("ui-select-group",{attrs:{name:"after",label:"Link","hide-label":"",options:t.options},model:{value:t.after,callback:function(e){t.after=e},expression:"after"}})]],2)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card__body text-center"},[n("p",[t._v("Add your first link to get started.")])])}],!1,null,null,null).exports},1513:function(t,e,n){var i=n(4155);!function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=l(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,r=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw r}}}}var d={},h={methods:{registerNestable:function(t){var e=this._getByGroup(t.group);e.onDragStartListeners.push(t.onDragStart),e.onMouseEnterListeners.push(t.onMouseEnter),e.onMouseMoveListeners.push(t.onMouseMove)},notifyDragStart:function(t,e,n){var i,o=c(this._getByGroup(t).onDragStartListeners);try{for(o.s();!(i=o.n()).done;)(0,i.value)(e,n)}catch(t){o.e(t)}finally{o.f()}},notifyMouseEnter:function(t,e,n,i){var o,r=c(this._getByGroup(t).onMouseEnterListeners);try{for(r.s();!(o=r.n()).done;)(0,o.value)(e,n,i)}catch(t){r.e(t)}finally{r.f()}},notifyMouseMove:function(t,e){var n,i=c(this._getByGroup(t).onMouseMoveListeners);try{for(i.s();!(n=i.n()).done;)(0,n.value)(e)}catch(t){i.e(t)}finally{i.f()}},_getByGroup:function(t){return d[t]||(d[t]={onDragStartListeners:[],onMouseEnterListeners:[],onMouseMoveListeners:[],onDragStart:[],dragItem:null}),d[t]}}};function f(t,e,n,i,o,r,a,s,l,u){"boolean"!=typeof a&&(l=s,s=a,a=!1);const c="function"==typeof n?n.options:n;let d;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,o&&(c.functional=!0)),i&&(c._scopeId=i),r?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=d):e&&(d=a?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),d)if(c.functional){const t=c.render;c.render=function(e,n){return d.call(n),t(e,n)}}else{const t=c.beforeCreate;c.beforeCreate=t?[].concat(t,d):[d]}return n}var p,m=f({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.itemClasses},[n("div",{staticClass:"nestable-item-content",on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave,mousemove:t.onMouseMove}},[t._t("default",null,{index:t.index,item:t.item,isChild:t.isChild})],2),t._v(" "),t.hasChildren?n("ol",{staticClass:"nestable-list"},[t._l(t.item[t.options.childrenProp],(function(e,i){return[n("NestableItem",{key:e[t.keyProp],attrs:{item:e,index:i,options:t.options,"is-copy":t.isCopy,"is-child":""},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)})]}))],2):t._e()])},staticRenderFns:[]},void 0,{name:"NestableItem",mixins:[h],props:{item:{type:Object,required:!0,default:function(){return{}}},index:{type:Number,required:!1,default:null},isChild:{type:Boolean,required:!1,default:!1},isCopy:{type:Boolean,required:!1,default:!1},options:{type:Object,required:!0,default:function(){return{}}}},inject:["listId","group","keyProp"],data:function(){return{breakPoint:null,moveDown:!1}},computed:{isDragging:function(){var t=this.options.dragItem;return!this.isCopy&&t&&t[this.options.keyProp]===this.item[this.options.keyProp]},hasChildren:function(){return this.item[this.options.childrenProp]&&this.item[this.options.childrenProp].length>0},hasHandle:function(){return!!this.$scopedSlots.handler},normalizedClassProp:function(){var t=this.item[this.options.classProp];return t?Array.isArray(t)?t:("undefined"==typeof a||e(a),[t]):[]},itemClasses:function(){var t=this.isDragging?["is-dragging"]:[];return["nestable-item".concat(this.isCopy?"-copy":""),"nestable-item".concat(this.isCopy?"-copy":"","-").concat(this.item[this.options.keyProp])].concat(t,s(this.normalizedClassProp))}},methods:{onMouseEnter:function(t){if(this.options.dragItem){if(!t.movementY)return this.sendNotification(t);this.moveDown=t.movementY>0,this.breakPoint=t.target.getBoundingClientRect().height/2}},onMouseLeave:function(){this.breakPoint=null},onMouseMove:function(t){if(this.breakPoint){var e=t.offsetY-this.breakPoint;this.moveDown&&e<this.breakPoint/4||!this.moveDown&&e>-this.breakPoint/4||this.sendNotification(t)}},sendNotification:function(t){this.breakPoint=null;var e=this.item||this.$parent.item;this.notifyMouseEnter(this.group,t,this.listId,e)}}},void 0,!1,void 0,!1,void 0,void 0,void 0),v=f({render:function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("div",{staticClass:"nestable-list-empty",on:{mouseenter:this.onMouseEnter}},[this._t("default")],2)])},staticRenderFns:[]},void 0,{name:"Placeholder",mixins:[h],props:{index:{type:Number,required:!1,default:null},options:{type:Object,required:!1,default:function(){return{}}}},inject:["listId","group"],computed:{isDragging:function(){return this.options.dragItem}},methods:{onMouseEnter:function(t){this.options.dragItem&&this.notifyMouseEnter(this.group,t,this.listId,null)}}},void 0,!1,void 0,!1,void 0,void 0,void 0),y={methods:{getPathById:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value,i=[];return n.every((function(n,o){if(n[e.keyProp]===t)i.push(o);else if(n[e.childrenProp]){var r=e.getPathById(t,n[e.childrenProp]);r.length&&(i=i.concat(o).concat(r))}return 0===i.length})),i},getItemByPath:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value,i=null;return t.forEach((function(t){var o=i&&i[e.childrenProp]?i[e.childrenProp]:n;i=o[t]})),i},getItemDepth:function(t){var e=1;if(t[this.childrenProp]&&t[this.childrenProp].length>0){var n=t[this.childrenProp].map(this.getItemDepth);e+=Math.max.apply(Math,s(n))}return e},getSplicePath:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={},o=e.numToRemove||0,r=e.itemsToInsert||[],a=t.length-1,l=i;return t.forEach((function(t,i){if(i===a)l.$splice=[[t,o].concat(s(r))];else{var u={};l[t]=n({},e.childrenProp,u),l=u}})),i},getRealNextPath:function(t,e){var n=t.length-1,i=e.length-1;if(t.length<e.length){var o=!1;return e.map((function(r,a){return o?a===i?r+1:r:"number"!=typeof t[a]?r:e[a]>t[a]&&a===n?(o=!0,r-1):r}))}if(t.length===e.length&&e[i]>t[i]){var r=this.getItemByPath(e);if(r[this.childrenProp]&&r[this.childrenProp].length&&!this.isCollapsed(r))return e.slice(0,-1).concat(e[i]-1).concat(0)}return e}}},g={methods:{hook:function(t,e){if(!this.hooks[t])return!0;var n=this.hooks[t](e);return n||void 0===n}}},b=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){function n(t){return"object"!=typeof t||"toString"in t?t:Object.prototype.toString.call(t).slice(8,-1)}Object.defineProperty(e,"__esModule",{value:!0});var o="object"==typeof i&&!0;function r(t,e){if(!t){if(o)throw new Error("Invariant failed");throw new Error(e())}}e.invariant=r;var a=Object.prototype.hasOwnProperty,s=Array.prototype.splice,l=Object.prototype.toString;function u(t){return l.call(t).slice(8,-1)}var c=Object.assign||function(t,e){return d(e).forEach((function(n){a.call(e,n)&&(t[n]=e[n])})),t},d="function"==typeof Object.getOwnPropertySymbols?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.keys(t)};function h(t){return Array.isArray(t)?c(t.constructor(t.length),t):"Map"===u(t)?new Map(t):"Set"===u(t)?new Set(t):t&&"object"==typeof t?c(Object.create(Object.getPrototypeOf(t)),t):t}var f=function(){function t(){this.commands=c({},p),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(t,e){return t===e},this.update.newContext=function(){return(new t).update}}return Object.defineProperty(t.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(t){this.update.isEquals=t},enumerable:!0,configurable:!0}),t.prototype.extend=function(t,e){this.commands[t]=e},t.prototype.update=function(t,e){var n=this,i="function"==typeof e?{$apply:e}:e;Array.isArray(t)&&Array.isArray(i)||r(!Array.isArray(i),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),r("object"==typeof i&&null!==i,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."}));var o=t;return d(i).forEach((function(e){if(a.call(n.commands,e)){var r=t===o;o=n.commands[e](i[e],o,i,t),r&&n.isEquals(o,t)&&(o=t)}else{var s="Map"===u(t)?n.update(t.get(e),i[e]):n.update(t[e],i[e]),l="Map"===u(o)?o.get(e):o[e];n.isEquals(s,l)&&(void 0!==s||a.call(t,e))||(o===t&&(o=h(t)),"Map"===u(o)?o.set(e,s):o[e]=s)}})),o},t}();e.Context=f;var p={$push:function(t,e,n){return v(e,n,"$push"),t.length?e.concat(t):e},$unshift:function(t,e,n){return v(e,n,"$unshift"),t.length?t.concat(e):e},$splice:function(t,e,i,o){return function(t,e){r(Array.isArray(t),(function(){return"Expected $splice target to be an array; got "+n(t)})),g(e.$splice)}(e,i),t.forEach((function(t){g(t),e===o&&t.length&&(e=h(o)),s.apply(e,t)})),e},$set:function(t,e,n){return function(t){r(1===Object.keys(t).length,(function(){return"Cannot have more than one key in an object with $set"}))}(n),t},$toggle:function(t,e){y(t,"$toggle");var n=t.length?h(e):e;return t.forEach((function(t){n[t]=!e[t]})),n},$unset:function(t,e,n,i){return y(t,"$unset"),t.forEach((function(t){Object.hasOwnProperty.call(e,t)&&(e===i&&(e=h(i)),delete e[t])})),e},$add:function(t,e,n,i){return b(e,"$add"),y(t,"$add"),"Map"===u(e)?t.forEach((function(t){var n=t[0],o=t[1];e===i&&e.get(n)!==o&&(e=h(i)),e.set(n,o)})):t.forEach((function(t){e!==i||e.has(t)||(e=h(i)),e.add(t)})),e},$remove:function(t,e,n,i){return b(e,"$remove"),y(t,"$remove"),t.forEach((function(t){e===i&&e.has(t)&&(e=h(i)),e.delete(t)})),e},$merge:function(t,e,i,o){var a,s;return a=e,r((s=t)&&"object"==typeof s,(function(){return"update(): $merge expects a spec of type 'object'; got "+n(s)})),r(a&&"object"==typeof a,(function(){return"update(): $merge expects a target of type 'object'; got "+n(a)})),d(t).forEach((function(n){t[n]!==e[n]&&(e===o&&(e=h(o)),e[n]=t[n])})),e},$apply:function(t,e){var i;return r("function"==typeof(i=t),(function(){return"update(): expected spec of $apply to be a function; got "+n(i)+"."})),t(e)}},m=new f;function v(t,e,i){r(Array.isArray(t),(function(){return"update(): expected target of "+n(i)+" to be an array; got "+n(t)+"."})),y(e[i],i)}function y(t,e){r(Array.isArray(t),(function(){return"update(): expected spec of "+n(e)+" to be an array; got "+n(t)+". Did you forget to wrap your parameter in an array?"}))}function g(t){r(Array.isArray(t),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+n(t)+". Did you forget to wrap your parameters in an array?"}))}function b(t,e){var i=u(t);r("Map"===i||"Set"===i,(function(){return"update(): "+n(e)+" expects a target of type Set or Map; got "+n(i)}))}e.isEquals=m.update.isEquals,e.extend=m.extend,e.default=m.update,e.default.default=t.exports=c(e.default,e)})),k=(p=b)&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p,_=(b.invariant,b.Context,b.isEquals,b.extend,f({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["nestable","nestable-"+t.group,t.rtl?"nestable-rtl":""]},[n("ol",{staticClass:"nestable-list nestable-group"},[t.listIsEmpty?n("Placeholder",{attrs:{options:t.itemOptions}},[t._t("placeholder",[t._v("\n        No content\n      ")])],2):t._e(),t._v(" "),t._l(t.value,(function(e,i){return[n("NestableItem",{key:e[t.keyProp],attrs:{index:i,item:e,options:t.itemOptions},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)})]}))],2),t._v(" "),t.dragItem?[n("div",{staticClass:"nestable-drag-layer"},[n("ol",{staticClass:"nestable-list",style:t.listStyles},[n("NestableItem",{attrs:{item:t.dragItem,options:t.itemOptions,"is-copy":!0},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)})],1)])]:t._e()],2)},staticRenderFns:[]},void 0,{name:"VueNestable",components:{NestableItem:m,Placeholder:v},mixins:[y,h,g],props:{value:{type:Array,required:!0,default:function(){return[]}},threshold:{type:Number,required:!1,default:30},maxDepth:{type:Number,required:!1,default:10},keyProp:{type:String,required:!1,default:"id"},classProp:{type:String,required:!1,default:null},group:{type:[String,Number],required:!1,default:function(){return Math.random().toString(36).slice(2)}},childrenProp:{type:String,required:!1,default:"children"},collapsed:{type:Boolean,required:!1,default:!1},hooks:{type:Object,required:!1,default:function(){return{}}},rtl:{type:Boolean,required:!1,default:!1}},provide:function(){return{listId:this.listId,group:this.group,keyProp:this.keyProp,onDragEnd:this.onDragEnd}},data:function(){return{itemsOld:null,dragItem:null,mouse:{last:{x:0},shift:{x:0}},el:null,elCopyStyles:null,isDirty:!1,collapsedGroups:[],listId:Math.random().toString(36).slice(2)}},computed:{listIsEmpty:function(){return 0===this.value.length},itemOptions:function(){return{dragItem:this.dragItem,keyProp:this.keyProp,classProp:this.classProp,childrenProp:this.childrenProp}},listStyles:function(){var t=document.querySelector(".nestable-"+this.group+" .nestable-item-"+this.dragItem[this.keyProp]),e={};return t&&(e.width="".concat(t.clientWidth,"px")),this.elCopyStyles&&(e=r(r({},e),this.elCopyStyles)),e}},created:function(){var t=function t(e,i){return e.map((function(e){return r(r({},e),{},n({},i,e[i]?t(e[i],i):[]))}))}(this.value,this.childrenProp);this.$emit("input",t),this.isDirty=!1,this.registerNestable(this)},beforeDestroy:function(){this.stopTrackMouse()},methods:{startTrackMouse:function(){document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchend",this.onDragEnd),document.addEventListener("touchcancel",this.onDragEnd),document.addEventListener("keydown",this.onKeyDown)},stopTrackMouse:function(){document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchend",this.onDragEnd),document.removeEventListener("touchcancel",this.onDragEnd),document.removeEventListener("keydown",this.onKeyDown),this.elCopyStyles=null},onDragStart:function(t,e){var n,i=this;t&&(t.preventDefault(),t.stopPropagation()),this.el=(n=".nestable-item",t.target.closest(n)),this.startTrackMouse(),this.dragItem=e,this.itemsOld=this.value,this.$nextTick((function(){i.onMouseMove(t)}))},onDragEnd:function(t,e){t&&t.preventDefault(),this.stopTrackMouse(),this.el=null,e?this.dragRevert():this.dragApply()},onKeyDown:function(t){27===t.which&&this.onDragEnd(null,!0)},getXandYFromEvent:function(t){var e=t.clientX,n=t.clientY,i=t.targetTouches;if(i){var o=i[0];e=o.clientX,n=o.clientY;var r=new Event("mouseenter"),a=document.elementFromPoint(e,n),s=a&&(a.closest(".nestable-item-content")||a.closest(".nestable-list-empty"));s&&s.dispatchEvent(r)}return{clientX:e,clientY:n}},onMouseMove:function(t){t&&t.preventDefault();var e=this.getXandYFromEvent(t),n=e.clientX,i=e.clientY;0===this.mouse.last.x&&(this.mouse.last.x=n);var o=function(t,e){return{transform:"translate("+t+"px, "+e+"px)"}}(n,i),a=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer");if(a){var s,l=a.getBoundingClientRect(),u=l.top,c=l.left,d=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer > .nestable-list");if(this.elCopyStyles){if(this.elCopyStyles=r(r({},this.elCopyStyles),o),d)for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(d.style[h]=o[h]);var f=this.rtl?this.mouse.last.x-n:n-this.mouse.last.x;f>=0&&this.mouse.shift.x>=0||f<=0&&this.mouse.shift.x<=0?this.mouse.shift.x+=f:this.mouse.shift.x=0,this.mouse.last.x=n,Math.abs(this.mouse.shift.x)>this.threshold&&(this.mouse.shift.x>0?this.tryIncreaseDepth(this.dragItem):this.tryDecreaseDepth(this.dragItem),this.mouse.shift.x=0)}else{var p=(s=this.el.getBoundingClientRect(),{top:Math.round(s.top),left:Math.round(s.left)});this.elCopyStyles=r({marginTop:"".concat(p.top-i-u,"px"),marginLeft:"".concat(p.left-n-c,"px")},o)}}},moveItem:function(t){var e=t.dragItem,n=t.pathFrom,i=t.pathTo,o=this.getRealNextPath(n,i),r=this.getSplicePath(n,{numToRemove:1,childrenProp:this.childrenProp}),a=this.getSplicePath(o,{numToRemove:0,itemsToInsert:[e],childrenProp:this.childrenProp});if(this.hook("beforeMove",{dragItem:e,pathFrom:n,pathTo:o})){var s=this.value;s=k(s,r),s=k(s,a),this.isDirty=!0,this.pathTo=o,this.$emit("input",s)}},tryIncreaseDepth:function(t){var e=this.getPathById(t[this.keyProp]),n=e[e.length-1],i=e.length+this.getItemDepth(t);if(n>0&&i<=this.maxDepth){var o=this.getItemByPath(e.slice(0,-1).concat(n-1));if(o[this.childrenProp]&&(!o[this.childrenProp].length||!this.isCollapsed(o))){var r=e.slice(0,-1).concat(n-1).concat(o[this.childrenProp].length);this.moveItem({dragItem:t,pathFrom:e,pathTo:r})}}},tryDecreaseDepth:function(t){var e=this.getPathById(t[this.keyProp]),n=e[e.length-1];if(e.length>1&&n+1===this.getItemByPath(e.slice(0,-1))[this.childrenProp].length){var i=e.slice(0,-1);i[i.length-1]+=1,this.moveItem({dragItem:t,pathFrom:e,pathTo:i})}},onMouseEnter:function(t,e,n){t&&(t.preventDefault(),t.stopPropagation());var i=this.dragItem;if(i&&(null===n||i[this.keyProp]!==n[this.keyProp])){var o,r=this.getPathById(i[this.keyProp]);if(!(e!==this.listId&&0===r.length||(o=null===n?r.length>0?[]:[0]:this.getPathById(n[this.keyProp]),this.getRealNextPath(r,o).length+(this.getItemDepth(i)-1)>this.maxDepth))){var a={};if(this.collapsed&&r.length>1){var s=this.getItemByPath(r.slice(0,-1));1===s[this.childrenProp].length&&(a=this.onToggleCollapse(s,!0))}this.moveItem({dragItem:i,pathFrom:r,pathTo:o},a)}}},isCollapsed:function(t){return!!(this.collapsedGroups.indexOf(t[this.keyProp])>-1^this.collapsed)},dragApply:function(){this.$emit("change",this.dragItem,{items:this.value,pathTo:this.pathTo}),this.pathTo=null,this.itemsOld=null,this.dragItem=null,this.isDirty=!1},dragRevert:function(){this.$emit("input",this.itemsOld),this.pathTo=null,this.itemsOld=null,this.dragItem=null,this.isDirty=!1}}},void 0,!1,void 0,!1,void 0,void 0,void 0)),P=f({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nestable-handle",attrs:{draggable:""},on:{dragstart:this.dragstart,touchstart:this.dragstart,touchend:this.touchend,touchmove:this.touchmove}},[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"VueNestableHandle",mixins:[h],props:{item:{type:Object,required:!1,default:function(){return{}}}},inject:["group","onDragEnd"],methods:{dragstart:function(t){var e=this.item||this.$parent.item;this.notifyDragStart(this.group,t,e)},touchend:function(t){this.onDragEnd(t)},touchmove:function(t){this.notifyMouseMove(this.group,t)}}},void 0,!1,void 0,!1,void 0,void 0,void 0),x={install:function(t,e){t.component("VueNestable",_),t.component("VueNestableHandle",P)}};t.VueNestable=_,t.VueNestableHandle=P,t.default=x,Object.defineProperty(t,"__esModule",{value:!0})}(e)}}]);