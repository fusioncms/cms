(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{kNri:function(t,e,r){"use strict";r.r(e);var n=r("L2JU");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a={auth:function(){return{permission:"settings.viewAny"}},head:{title:function(){return{inner:"Settings"}}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.c)({sections:"settings/getGroupSections"}))},o=r("KHd+"),c=Object(o.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("portal",{attrs:{to:"title"}},[r("page-title",{attrs:{icon:"sliders-h"}},[t._v("Settings")])],1),t._v(" "),t._l(t.sections,(function(e,n){return r("div",{key:n,staticClass:"row flex-1 flex-wrap"},[r("div",{staticClass:"col mb-2 w-full"},[r("span",{staticClass:"font-semibold"},[t._v(t._s(n))])]),t._v(" "),t._l(e,(function(e){return r("div",{key:e.handle,staticClass:"col mb-6 w-full md:w-1/3 xl:w-1/4 xxl:w-1/5"},[r("router-link",{staticClass:"no-underline text-black hover:text-black bg-white rounded shadow hover:shadow-md p-3 flex h-full items-center",attrs:{to:{name:"setting.group",params:{group:e.handle}}}},[r("span",{staticClass:"fa-layers fa-fw fa-3x mr-2 flex-shrink-0"},[r("fa-icon",{staticClass:"fa-fw text-primary-500",attrs:{icon:["fas","circle"]}}),t._v(" "),r("fa-icon",{staticClass:"fa-fw fa-inverse",attrs:{icon:["fas",e.icon||"cog"],transform:"shrink-8"}})],1),t._v(" "),r("div",{staticClass:"flex flex-col"},[r("span",{staticClass:"font-semibold text-lg"},[t._v(t._s(e.name))]),t._v(" "),r("span",{staticClass:"text-xs text-gray-800"},[t._v(t._s(e.description))])])])],1)}))],2)}))],2)}),[],!1,null,null,null);e.default=c.exports}}]);