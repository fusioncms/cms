(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default, getModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return getModels; });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'updates',
  data: function data() {
    return {
      version: false,
      versions: [],
      pagination: []
    };
  },
  computed: {
    current: function current() {
      return "v".concat(this.$store.state.fusion.version);
    },
    id: function id() {
      return this.findBy('title', this.current).id;
    },
    isConfirming: function isConfirming() {
      return !!this.version;
    }
  },
  methods: {
    findBy: function findBy(key, value) {
      return _.find(this.versions, function (version) {
        return version[key] == value;
      });
    },
    changePage: function changePage(page) {
      this.refresh(page);
    },
    upgrade: function upgrade(id) {
      this.version = this.findBy('id', id);
    },
    confirm: function confirm() {
      axios.post('/api/updates', {
        version: this.version
      }).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    close: function close() {
      this.version = false;
    },
    refresh: function refresh(page) {
      var _this = this;

      getModels(function (error, versions, pagination) {
        if (error) {
          toast(error.toString(), 'danger');
        } else {
          _this.versions = versions;
          _this.pagination = pagination;
        }
      }, page);
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getModels(function (error, versions, pagination) {
      if (error) {
        next(function (vm) {
          return toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.versions = versions;
          vm.pagination = pagination;
        });
      }
    });
  }
});
function getModels(callback) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  axios.all([axios.get("/api/updates?page=".concat(page))]).then(axios.spread(function (response) {
    callback(null, response.data.data, response.data.meta);
  }))["catch"](function (error) {
    callback(new Error('The requested resource could not be found'));
  });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates/Index.vue?vue&type=template&id=c0102c18&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Updates/Index.vue?vue&type=template&id=c0102c18& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("page-title", { attrs: { icon: "download" } }, [_vm._v("Updates")])
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "a",
          {
            attrs: {
              href: "https://beta.getfusioncms.com/changelog",
              title: "Changelog",
              target: "_blank"
            }
          },
          [_vm._v(_vm._s(_vm.current))]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.versions, function(version, i1) {
        return _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card__header flex items-center justify-between" },
            [
              _c("h3", { staticClass: "card__title" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(version.title) +
                    "\n\n                "
                ),
                _c("span", { staticClass: "text-xs block" }, [
                  _vm._v(
                    "\n                    Released " +
                      _vm._s(
                        _vm
                          .$moment(version.date_published)
                          .format("MMM Do, YYYY")
                      ) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex items-center justify-start" },
                [
                  version._isCurrent
                    ? _c("p-button", { attrs: { disabled: "" } }, [
                        _vm._v(
                          "\n                    Current version\n                "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(version.attachments, function(attachment, i2) {
                    return _c(
                      "a",
                      {
                        key: "attachment-" + i1 + "-" + i2,
                        staticClass: "button button--icon ml-1",
                        attrs: {
                          href: attachment.url,
                          title: attachment.mime_type
                        }
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "icon",
                          attrs: { icon: "download" }
                        })
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "button button--icon ml-1",
                      attrs: {
                        href:
                          "https://github.com/fusioncms/fusioncms/releases/tag/" +
                          version.title,
                        title: "View on Github",
                        target: "_blank"
                      }
                    },
                    [
                      _c("fa-icon", {
                        staticClass: "icon",
                        attrs: { icon: "code" }
                      })
                    ],
                    1
                  )
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card__body" },
            [
              _c("p", [_vm._v(_vm._s(_vm.versions.content_text))]),
              _vm._v(" "),
              _vm._l(version._changelog, function(changelog, name) {
                return _c(
                  "div",
                  _vm._l(changelog, function(issues, text) {
                    return _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("span", { staticClass: "badge" }, [
                          _vm._v(_vm._s(name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col" },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(text) +
                              "\n\n                        "
                          ),
                          _vm._l(issues, function(issue) {
                            return _c(
                              "a",
                              {
                                key: issue,
                                staticClass: "mr-1 text-xs",
                                attrs: {
                                  href:
                                    "https://github.com/fusioncms/fusioncms/issues/" +
                                    issue,
                                  target: "_blank"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            #" +
                                    _vm._s(issue) +
                                    "\n                        "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  }),
                  0
                )
              })
            ],
            2
          )
        ])
      }),
      _vm._v(" "),
      _vm.pagination.total > 1
        ? _c(
            "div",
            { staticClass: "mt-6" },
            [
              _c("p-pagination", {
                attrs: {
                  total: _vm.pagination.last_page,
                  value: _vm.pagination.current_page
                },
                on: {
                  input: function($event) {
                    return _vm.changePage($event)
                  }
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c(
            "p-modal",
            {
              key: "updater_modal",
              attrs: {
                name: "updater",
                title: "Update to " + _vm.version.title
              },
              model: {
                value: _vm.isConfirming,
                callback: function($$v) {
                  _vm.isConfirming = $$v
                },
                expression: "isConfirming"
              }
            },
            [
              _c("p", [
                _vm._v(
                  "Are you sure you want to update to version " +
                    _vm._s(_vm.version.title) +
                    "?"
                )
              ]),
              _vm._v(" "),
              _c(
                "template",
                { slot: "footer" },
                [
                  _c(
                    "p-button",
                    {
                      staticClass: "button button--primary",
                      attrs: { type: "button" },
                      on: { click: _vm.confirm }
                    },
                    [_vm._v("Confirm")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p-button",
                    {
                      staticClass: "mr-3",
                      attrs: { type: "button" },
                      on: { click: _vm.close }
                    },
                    [_vm._v("Cancel")]
                  )
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Updates/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Updates/Index.vue ***!
  \**********************************************/
/*! exports provided: getModels, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_c0102c18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=c0102c18& */ "./resources/js/pages/Updates/Index.vue?vue&type=template&id=c0102c18&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getModels"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_c0102c18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_c0102c18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Updates/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default, getModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getModels"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Updates/Index.vue?vue&type=template&id=c0102c18&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Updates/Index.vue?vue&type=template&id=c0102c18& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c0102c18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=c0102c18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates/Index.vue?vue&type=template&id=c0102c18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c0102c18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c0102c18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

=======
/***/ "./node_modules/@simonwep/pickr/dist/pickr.min.js":
/*!********************************************************!*\
  !*** ./node_modules/@simonwep/pickr/dist/pickr.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
>>>>>>> f9ffe5bbc4d5936f583e376ac2634d1705323996

/*! Pickr 1.6.0 MIT | https://github.com/Simonwep/pickr */
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t){t.exports=JSON.parse('{"a":"1.6.0"}')},function(t,e,o){"use strict";o.r(e);var n={};function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){s(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e,o,n,i={}){e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(o)||(o=[o]);for(const s of e)for(const e of o)s[t](e,n,r({capture:!1},i));return Array.prototype.slice.call(arguments,1)}o.r(n),o.d(n,"on",(function(){return c})),o.d(n,"off",(function(){return l})),o.d(n,"createElementFromString",(function(){return p})),o.d(n,"createFromTemplate",(function(){return u})),o.d(n,"eventPath",(function(){return h})),o.d(n,"resolveElement",(function(){return d})),o.d(n,"adjustableInputNumbers",(function(){return f}));const c=a.bind(null,"addEventListener"),l=a.bind(null,"removeEventListener");function p(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}function u(t){const e=(t,e)=>{const o=t.getAttribute(e);return t.removeAttribute(e),o},o=(t,n={})=>{const i=e(t,":obj"),r=e(t,":ref"),s=i?n[i]={}:n;r&&(n[r]=t);for(const n of Array.from(t.children)){const t=e(n,":arr"),i=o(n,t?{}:s);t&&(s[t]||(s[t]=[])).push(Object.keys(i).length?i:n)}return n};return o(p(t))}function h(t){let e=t.path||t.composedPath&&t.composedPath();if(e)return e;let o=t.target.parentElement;for(e=[t.target,o];o=o.parentElement;)e.push(o);return e.push(document,window),e}function d(t){return t instanceof Element?t:"string"==typeof t?t.split(/>>/g).reduce((t,e,o,n)=>(t=t.querySelector(e),o<n.length-1?t.shadowRoot:t),document):null}function f(t,e=(t=>t)){function o(o){const n=[.001,.01,.1][Number(o.shiftKey||2*o.ctrlKey)]*(o.deltaY<0?1:-1);let i=0,r=t.selectionStart;t.value=t.value.replace(/[\d.]+/g,(t,o)=>o<=r&&o+t.length>=r?(r=o,e(Number(t),n,i)):(i++,t)),t.focus(),t.setSelectionRange(r,r),o.preventDefault(),t.dispatchEvent(new Event("input"))}c(t,"focus",()=>c(window,"wheel",o,{passive:!1})),c(t,"blur",()=>l(window,"wheel",o))}var b=o(0);const{min:v,max:m,floor:y,round:g}=Math;function _(t,e,o){e/=100,o/=100;const n=y(t=t/360*6),i=t-n,r=o*(1-e),s=o*(1-i*e),a=o*(1-(1-i)*e),c=n%6;return[255*[o,s,r,r,a,o][c],255*[a,o,o,s,r,r][c],255*[r,r,a,o,o,s][c]]}function w(t,e,o){const n=(2-(e/=100))*(o/=100)/2;return 0!==n&&(e=1===n?0:n<.5?e*o/(2*n):e*o/(2-2*n)),[t,100*e,100*n]}function A(t,e,o){const n=v(t/=255,e/=255,o/=255),i=m(t,e,o),r=i-n;let s,a;if(0===r)s=a=0;else{a=r/i;const n=((i-t)/6+r/2)/r,c=((i-e)/6+r/2)/r,l=((i-o)/6+r/2)/r;t===i?s=l-c:e===i?s=1/3+n-l:o===i&&(s=2/3+c-n),s<0?s+=1:s>1&&(s-=1)}return[360*s,100*a,100*i]}function C(t,e,o,n){return e/=100,o/=100,[...A(255*(1-v(1,(t/=100)*(1-(n/=100))+n)),255*(1-v(1,e*(1-n)+n)),255*(1-v(1,o*(1-n)+n)))]}function k(t,e,o){e/=100;const n=2*(e*=(o/=100)<.5?o:1-o)/(o+e)*100,i=100*(o+e);return[t,isNaN(n)?0:n,i]}function S(t){return A(...t.match(/.{2}/g).map(t=>parseInt(t,16)))}function O(t){t=t.match(/^[a-zA-Z]+$/)?function(t){if("black"===t.toLowerCase())return"#000";const e=document.createElement("canvas").getContext("2d");return e.fillStyle=t,"#000"===e.fillStyle?null:e.fillStyle}(t):t;const e={cmyk:/^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,rgba:/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsla:/^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsva:/^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hexa:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},o=t=>t.map(t=>/^(|\d+)\.\d+|\d+$/.test(t)?Number(t):void 0);let n;t:for(const i in e){if(!(n=e[i].exec(t)))continue;const r=t=>!!n[2]==("number"==typeof t);switch(i){case"cmyk":{const[,t,e,r,s]=o(n);if(t>100||e>100||r>100||s>100)break t;return{values:C(t,e,r,s),type:i}}case"rgba":{const[,,,t,e,s,a]=o(n);if(t>255||e>255||s>255||a<0||a>1||!r(a))break t;return{values:[...A(t,e,s),a],a:a,type:i}}case"hexa":{let[,t]=n;4!==t.length&&3!==t.length||(t=t.split("").map(t=>t+t).join(""));const e=t.substring(0,6);let o=t.substring(6);return o=o?parseInt(o,16)/255:void 0,{values:[...S(e),o],a:o,type:i}}case"hsla":{const[,,,t,e,s,a]=o(n);if(t>360||e>100||s>100||a<0||a>1||!r(a))break t;return{values:[...k(t,e,s),a],a:a,type:i}}case"hsva":{const[,,,t,e,s,a]=o(n);if(t>360||e>100||s>100||a<0||a>1||!r(a))break t;return{values:[t,e,s,a],a:a,type:i}}}}return{values:null,type:null}}function j(t=0,e=0,o=0,n=1){const i=(t,e)=>(o=-1)=>e(~o?t.map(t=>Number(t.toFixed(o))):t),r={h:t,s:e,v:o,a:n,toHSVA(){const t=[r.h,r.s,r.v,r.a];return t.toString=i(t,t=>"hsva(".concat(t[0],", ").concat(t[1],"%, ").concat(t[2],"%, ").concat(r.a,")")),t},toHSLA(){const t=[...w(r.h,r.s,r.v),r.a];return t.toString=i(t,t=>"hsla(".concat(t[0],", ").concat(t[1],"%, ").concat(t[2],"%, ").concat(r.a,")")),t},toRGBA(){const t=[..._(r.h,r.s,r.v),r.a];return t.toString=i(t,t=>"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(r.a,")")),t},toCMYK(){const t=function(t,e,o){const n=_(t,e,o),i=n[0]/255,r=n[1]/255,s=n[2]/255,a=v(1-i,1-r,1-s);return[100*(1===a?0:(1-i-a)/(1-a)),100*(1===a?0:(1-r-a)/(1-a)),100*(1===a?0:(1-s-a)/(1-a)),100*a]}(r.h,r.s,r.v);return t.toString=i(t,t=>"cmyk(".concat(t[0],"%, ").concat(t[1],"%, ").concat(t[2],"%, ").concat(t[3],"%)")),t},toHEXA(){const t=function(t,e,o){return _(t,e,o).map(t=>g(t).toString(16).padStart(2,"0"))}(r.h,r.s,r.v),e=r.a>=1?"":Number((255*r.a).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return e&&t.push(e),t.toString=()=>"#".concat(t.join("").toUpperCase()),t},clone:()=>j(r.h,r.s,r.v,r.a)};return r}const E=t=>Math.max(Math.min(t,1),0);function x(t){const e={options:Object.assign({lock:null,onchange:()=>0,onstop:()=>0},t),_keyboard(t){const{options:o}=e,{type:n,key:i}=t;if(document.activeElement===o.wrapper){const{lock:o}=e.options,r="ArrowUp"===i,s="ArrowRight"===i,a="ArrowDown"===i,c="ArrowLeft"===i;if("keydown"===n&&(r||s||a||c)){let n=0,i=0;"v"===o?n=r||s?1:-1:"h"===o?n=r||s?-1:1:(i=r?-1:a?1:0,n=c?-1:s?1:0),e.update(E(e.cache.x+.01*n),E(e.cache.y+.01*i)),t.preventDefault()}else i.startsWith("Arrow")&&(e.options.onstop(),t.preventDefault())}},_tapstart(t){c(document,["mouseup","touchend","touchcancel"],e._tapstop),c(document,["mousemove","touchmove"],e._tapmove),t.preventDefault(),e._tapmove(t)},_tapmove(t){const{options:o,cache:n}=e,{lock:i,element:r,wrapper:s}=o,a=s.getBoundingClientRect();let c=0,l=0;if(t){const e=t&&t.touches&&t.touches[0];c=t?(e||t).clientX:0,l=t?(e||t).clientY:0,c<a.left?c=a.left:c>a.left+a.width&&(c=a.left+a.width),l<a.top?l=a.top:l>a.top+a.height&&(l=a.top+a.height),c-=a.left,l-=a.top}else n&&(c=n.x*a.width,l=n.y*a.height);"h"!==i&&(r.style.left="calc(".concat(c/a.width*100,"% - ").concat(r.offsetWidth/2,"px)")),"v"!==i&&(r.style.top="calc(".concat(l/a.height*100,"% - ").concat(r.offsetHeight/2,"px)")),e.cache={x:c/a.width,y:l/a.height};const p=E(c/a.width),u=E(l/a.height);switch(i){case"v":return o.onchange(p);case"h":return o.onchange(u);default:return o.onchange(p,u)}},_tapstop(){e.options.onstop(),l(document,["mouseup","touchend","touchcancel"],e._tapstop),l(document,["mousemove","touchmove"],e._tapmove)},trigger(){e._tapmove()},update(t=0,o=0){const{left:n,top:i,width:r,height:s}=e.options.wrapper.getBoundingClientRect();"h"===e.options.lock&&(o=t),e._tapmove({clientX:n+r*t,clientY:i+s*o})},destroy(){const{options:t,_tapstart:o,_keyboard:n}=e;l(document,["keydown","keyup"],n),l([t.wrapper,t.element],"mousedown",o),l([t.wrapper,t.element],"touchstart",o,{passive:!1})}},{options:o,_tapstart:n,_keyboard:i}=e;return c([o.wrapper,o.element],"mousedown",n),c([o.wrapper,o.element],"touchstart",n,{passive:!1}),c(document,["keydown","keyup"],i),e}function L(t={}){t=Object.assign({onchange:()=>0,className:"",elements:[]},t);const e=c(t.elements,"click",e=>{t.elements.forEach(o=>o.classList[e.target===o?"add":"remove"](t.className)),t.onchange(e)});return{destroy:()=>l(...e)}}function P({el:t,reference:e,padding:o=8}){const n={start:"sme",middle:"mse",end:"ems"},i={top:"tbrl",right:"rltb",bottom:"btrl",left:"lrbt"},r=((t={})=>(e,o=t[e])=>{if(o)return o;const[n,i="middle"]=e.split("-"),r="top"===n||"bottom"===n;return t[e]={position:n,variant:i,isVertical:r}})();return{update(s,a=!1){const{position:c,variant:l,isVertical:p}=r(s),u=e.getBoundingClientRect(),h=t.getBoundingClientRect(),d=t=>t?{t:u.top-h.height-o,b:u.bottom+o}:{r:u.right+o,l:u.left-h.width-o},f=t=>t?{s:u.left+u.width-h.width,m:-h.width/2+(u.left+u.width/2),e:u.left}:{s:u.bottom-h.height,m:u.bottom-u.height/2-h.height/2,e:u.bottom-u.height},b={},v=(t,e,o)=>{const n="top"===o,i=n?h.height:h.width,r=window[n?"innerHeight":"innerWidth"];for(const n of t){const t=e[n],s=b[o]="".concat(t,"px");if(t>0&&t+i<r)return s}return null};for(const e of[p,!p]){const o=e?"top":"left",r=e?"left":"top",s=v(i[c],d(e),o),a=v(n[l],f(e),r);if(s&&a)return t.style[r]=a,void(t.style[o]=s)}a?(t.style.top="".concat((window.innerHeight-h.height)/2,"px"),t.style.left="".concat((window.innerWidth-h.width)/2,"px")):(t.style.left=b.left,t.style.top=b.top)}}}function B(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}class D{constructor(t){B(this,"_initializingActive",!0),B(this,"_recalc",!0),B(this,"_nanopop",null),B(this,"_root",null),B(this,"_color",j()),B(this,"_lastColor",j()),B(this,"_swatchColors",[]),B(this,"_eventListener",{init:[],save:[],hide:[],show:[],clear:[],change:[],changestop:[],cancel:[],swatchselect:[]}),this.options=t=Object.assign({appClass:null,theme:"classic",useAsButton:!1,padding:8,disabled:!1,comparison:!0,closeOnScroll:!1,outputPrecision:0,lockOpacity:!1,autoReposition:!0,container:"body",components:{interaction:{}},i18n:{},swatches:null,inline:!1,sliders:null,default:"#42445a",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"},t);const{swatches:e,components:o,theme:n,sliders:i,lockOpacity:r,padding:s}=t;["nano","monolith"].includes(n)&&!i&&(t.sliders="h"),o.interaction||(o.interaction={});const{preview:a,opacity:c,hue:l,palette:p}=o;o.opacity=!r&&c,o.palette=p||a||c||l,this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),e&&e.length&&e.forEach(t=>this.addSwatch(t));const{button:u,app:h}=this._root;this._nanopop=P({reference:u,padding:s,el:h}),u.setAttribute("role","button"),u.setAttribute("aria-label",this._t("btn:toggle"));const d=this;requestAnimationFrame((function e(){if(!h.offsetWidth&&h.parentElement!==t.container)return requestAnimationFrame(e);d.setColor(t.default),d._rePositioningPicker(),t.defaultRepresentation&&(d._representation=t.defaultRepresentation,d.setColorRepresentation(d._representation)),t.showAlways&&d.show(),d._initializingActive=!1,d._emit("init")}))}_preBuild(){const{options:t}=this;for(const e of["el","container"])t[e]=d(t[e]);this._root=(t=>{const{components:e,useAsButton:o,inline:n,appClass:i,theme:r,lockOpacity:s}=t.options,a=t=>t?"":'style="display:none" hidden',c=e=>t._t(e),l=u('\n      <div :ref="root" class="pickr">\n\n        '.concat(o?"":'<button type="button" :ref="button" class="pcr-button"></button>','\n\n        <div :ref="app" class="pcr-app ').concat(i||"",'" data-theme="').concat(r,'" ').concat(n?'style="position: unset"':"",' aria-label="').concat(c("ui:dialog"),'" role="window">\n          <div class="pcr-selection" ').concat(a(e.palette),'>\n            <div :obj="preview" class="pcr-color-preview" ').concat(a(e.preview),'>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="').concat(c("btn:last-color"),'"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="').concat(c("aria:palette"),'" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" ').concat(a(e.hue),'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="').concat(c("aria:hue"),'" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" ').concat(a(e.opacity),'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="').concat(c("aria:opacity"),'" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches ').concat(e.palette?"":"pcr-last",'" :ref="swatches"></div>\n\n          <div :obj="interaction" class="pcr-interaction" ').concat(a(Object.keys(e.interaction).length),'>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ').concat(a(e.interaction.input),' aria-label="').concat(c("aria:input"),'">\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="').concat(s?"HEX":"HEXA",'" type="button" ').concat(a(e.interaction.hex),'>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="').concat(s?"RGB":"RGBA",'" type="button" ').concat(a(e.interaction.rgba),'>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="').concat(s?"HSL":"HSLA",'" type="button" ').concat(a(e.interaction.hsla),'>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="').concat(s?"HSV":"HSVA",'" type="button" ').concat(a(e.interaction.hsva),'>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ').concat(a(e.interaction.cmyk),'>\n\n            <input :ref="save" class="pcr-save" value="').concat(c("btn:save"),'" type="button" ').concat(a(e.interaction.save),' aria-label="').concat(c("aria:btn:save"),'">\n            <input :ref="cancel" class="pcr-cancel" value="').concat(c("btn:cancel"),'" type="button" ').concat(a(e.interaction.cancel),' aria-label="').concat(c("aria:btn:cancel"),'">\n            <input :ref="clear" class="pcr-clear" value="').concat(c("btn:clear"),'" type="button" ').concat(a(e.interaction.clear),' aria-label="').concat(c("aria:btn:clear"),'">\n          </div>\n        </div>\n      </div>\n    ')),p=l.interaction;return p.options.find(t=>!t.hidden&&!t.classList.add("active")),p.type=()=>p.options.find(t=>t.classList.contains("active")),l})(this),t.useAsButton&&(this._root.button=t.el),t.container.appendChild(this._root.root)}_finalBuild(){const t=this.options,e=this._root;if(t.container.removeChild(e.root),t.inline){const o=t.el.parentElement;t.el.nextSibling?o.insertBefore(e.app,t.el.nextSibling):o.appendChild(e.app)}else t.container.appendChild(e.app);t.useAsButton?t.inline&&t.el.remove():t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide()}_buildComponents(){const t=this,e=this.options.components,o=(t.options.sliders||"v").repeat(2),[n,i]=o.match(/^[vh]+$/g)?o:[],r=()=>this._color||(this._color=this._lastColor.clone()),s={palette:x({element:t._root.palette.picker,wrapper:t._root.palette.palette,onstop:()=>t._emit("changestop",t),onchange(o,n){if(!e.palette)return;const i=r(),{_root:s,options:a}=t,{lastColor:c,currentColor:l}=s.preview;t._recalc&&(i.s=100*o,i.v=100-100*n,i.v<0&&(i.v=0),t._updateOutput());const p=i.toRGBA().toString(0);this.element.style.background=p,this.wrapper.style.background="\n                        linear-gradient(to top, rgba(0, 0, 0, ".concat(i.a,"), transparent),\n                        linear-gradient(to left, hsla(").concat(i.h,", 100%, 50%, ").concat(i.a,"), rgba(255, 255, 255, ").concat(i.a,"))\n                    "),a.comparison?a.useAsButton||t._lastColor||(c.style.color=p):(s.button.style.color=p,s.button.classList.remove("clear"));const u=i.toHEXA().toString();for(const{el:e,color:o}of t._swatchColors)e.classList[u===o.toHEXA().toString()?"add":"remove"]("pcr-active");l.style.color=p}}),hue:x({lock:"v"===i?"h":"v",element:t._root.hue.picker,wrapper:t._root.hue.slider,onstop:()=>t._emit("changestop",t),onchange(o){if(!e.hue||!e.palette)return;const n=r();t._recalc&&(n.h=360*o),this.element.style.backgroundColor="hsl(".concat(n.h,", 100%, 50%)"),s.palette.trigger()}}),opacity:x({lock:"v"===n?"h":"v",element:t._root.opacity.picker,wrapper:t._root.opacity.slider,onstop:()=>t._emit("changestop",t),onchange(o){if(!e.opacity||!e.palette)return;const n=r();t._recalc&&(n.a=Math.round(100*o)/100),this.element.style.background="rgba(0, 0, 0, ".concat(n.a,")"),s.palette.trigger()}}),selectable:L({elements:t._root.interaction.options,className:"active",onchange(e){t._representation=e.target.getAttribute("data-type").toUpperCase(),t._recalc&&t._updateOutput()}})};this._components=s}_bindEvents(){const{_root:t,options:e}=this,o=[c(t.interaction.clear,"click",()=>this._clearColor()),c([t.interaction.cancel,t.preview.lastColor],"click",()=>{this._emit("cancel",this),this.setHSVA(...(this._lastColor||this._color).toHSVA(),!0)}),c(t.interaction.save,"click",()=>{!this.applyColor()&&!e.showAlways&&this.hide()}),c(t.interaction.result,["keyup","input"],t=>{this.setColor(t.target.value,!0)&&!this._initializingActive&&this._emit("change",this._color),t.stopImmediatePropagation()}),c(t.interaction.result,["focus","blur"],t=>{this._recalc="blur"===t.type,this._recalc&&this._updateOutput()}),c([t.palette.palette,t.palette.picker,t.hue.slider,t.hue.picker,t.opacity.slider,t.opacity.picker],["mousedown","touchstart"],()=>this._recalc=!0)];if(!e.showAlways){const n=e.closeWithKey;o.push(c(t.button,"click",()=>this.isOpen()?this.hide():this.show()),c(document,"keyup",t=>this.isOpen()&&(t.key===n||t.code===n)&&this.hide()),c(document,["touchstart","mousedown"],e=>{this.isOpen()&&!h(e).some(e=>e===t.app||e===t.button)&&this.hide()},{capture:!0}))}if(e.adjustableNumbers){const e={rgba:[255,255,255,1],hsva:[360,100,100,1],hsla:[360,100,100,1],cmyk:[100,100,100,100]};f(t.interaction.result,(t,o,n)=>{const i=e[this.getColorRepresentation().toLowerCase()];if(i){const e=i[n],r=t+(e>=100?1e3*o:o);return r<=0?0:Number((r<e?r:e).toPrecision(3))}return t})}if(e.autoReposition&&!e.inline){let t=null;const n=this;o.push(c(window,["scroll","resize"],()=>{n.isOpen()&&(e.closeOnScroll&&n.hide(),null===t?(t=setTimeout(()=>t=null,100),requestAnimationFrame((function e(){n._rePositioningPicker(),null!==t&&requestAnimationFrame(e)}))):(clearTimeout(t),t=setTimeout(()=>t=null,100)))},{capture:!0}))}this._eventBindings=o}_rePositioningPicker(){const{options:t}=this;t.inline||this._nanopop.update(t.position,!this._recalc)}_updateOutput(){const{_root:t,_color:e,options:o}=this;if(t.interaction.type()){const n="to".concat(t.interaction.type().getAttribute("data-type"));t.interaction.result.value="function"==typeof e[n]?e[n]().toString(o.outputPrecision):""}!this._initializingActive&&this._recalc&&this._emit("change",e)}_clearColor(t=!1){const{_root:e,options:o}=this;o.useAsButton||(e.button.style.color="rgba(0, 0, 0, 0.15)"),e.button.classList.add("clear"),o.showAlways||this.hide(),this._lastColor=null,this._initializingActive||t||(this._emit("save",null),this._emit("clear",this))}_parseLocalColor(t){const{values:e,type:o,a:n}=O(t),{lockOpacity:i}=this.options,r=void 0!==n&&1!==n;return e&&3===e.length&&(e[3]=void 0),{values:!e||i&&r?null:e,type:o}}_emit(t,...e){this._eventListener[t].forEach(t=>t(...e,this))}_t(t){return this.options.i18n[t]||D.I18N_DEFAULTS[t]}on(t,e){return"function"==typeof e&&"string"==typeof t&&t in this._eventListener&&this._eventListener[t].push(e),this}off(t,e){const o=this._eventListener[t];if(o){const t=o.indexOf(e);~t&&o.splice(t,1)}return this}addSwatch(t){const{values:e}=this._parseLocalColor(t);if(e){const{_swatchColors:t,_root:o}=this,n=j(...e),i=p('<button type="button" style="color: '.concat(n.toRGBA().toString(0),'" aria-label="').concat(this._t("btn:swatch"),'"/>'));return o.swatches.appendChild(i),t.push({el:i,color:n}),this._eventBindings.push(c(i,"click",()=>{this.setHSVA(...n.toHSVA(),!0),this._emit("swatchselect",n),this._emit("change",n)})),!0}return!1}removeSwatch(t){const e=this._swatchColors[t];if(e){const{el:o}=e;return this._root.swatches.removeChild(o),this._swatchColors.splice(t,1),!0}return!1}applyColor(t=!1){const{preview:e,button:o}=this._root,n=this._color.toRGBA().toString(0);return e.lastColor.style.color=n,this.options.useAsButton||(o.style.color=n),o.classList.remove("clear"),this._lastColor=this._color.clone(),this._initializingActive||t||this._emit("save",this._color),this}destroy(){this._eventBindings.forEach(t=>l(...t)),Object.keys(this._components).forEach(t=>this._components[t].destroy())}destroyAndRemove(){this.destroy();const{root:t,app:e}=this._root;t.parentElement&&t.parentElement.removeChild(t),e.parentElement.removeChild(e),Object.keys(this).forEach(t=>this[t]=null)}hide(){return this._root.app.classList.remove("visible"),this._emit("hide",this),this}show(){return this.options.disabled||(this._root.app.classList.add("visible"),this._rePositioningPicker(),this._emit("show",this)),this}isOpen(){return this._root.app.classList.contains("visible")}setHSVA(t=360,e=0,o=0,n=1,i=!1){const r=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||o<0||o>100||n<0||n>1)return!1;this._color=j(t,e,o,n);const{hue:s,opacity:a,palette:c}=this._components;return s.update(t/360),a.update(n),c.update(e/100,1-o/100),i||this.applyColor(),r&&this._updateOutput(),this._recalc=r,!0}setColor(t,e=!1){if(null===t)return this._clearColor(e),!0;const{values:o,type:n}=this._parseLocalColor(t);if(o){const t=n.toUpperCase(),{options:i}=this._root.interaction,r=i.find(e=>e.getAttribute("data-type")===t);if(r&&!r.hidden)for(const t of i)t.classList[t===r?"add":"remove"]("active");return!!this.setHSVA(...o,e)&&this.setColorRepresentation(t)}return!1}setColorRepresentation(t){return t=t.toUpperCase(),!!this._root.interaction.options.find(e=>e.getAttribute("data-type").startsWith(t)&&!e.click())}getColorRepresentation(){return this._representation}getColor(){return this._color}getSelectedColor(){return this._lastColor}getRoot(){return this._root}disable(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this}enable(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this}}B(D,"utils",n),B(D,"libs",{HSVaColor:j,Moveable:x,Nanopop:P,Selectable:L}),B(D,"version",b.a),B(D,"I18N_DEFAULTS",{"ui:dialog":"color picker dialog","btn:toggle":"toggle color picker dialog","btn:swatch":"color swatch","btn:last-color":"use previous color","btn:save":"Save","btn:cancel":"Cancel","btn:clear":"Clear","aria:btn:save":"save and close","aria:btn:cancel":"cancel and close","aria:btn:clear":"clear and close","aria:input":"color input field","aria:palette":"color selection area","aria:hue":"hue selection slider","aria:opacity":"selection slider"}),B(D,"create",t=>new D(t));e.default=D}]).default}));
//# sourceMappingURL=pickr.min.js.map

/***/ })

}]);
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VwZGF0ZXMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVzL0luZGV4LnZ1ZT9kMzllIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXBkYXRlcy9JbmRleC52dWU/ZjYzNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXBkYXRlcy9JbmRleC52dWU/ZjVlMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1R0E7QUFDQSxpQkFEQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FUQTtBQVdBO0FBQ0EsV0FEQSxxQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLE1BTEEsZ0JBS0E7QUFDQTtBQUNBLEtBUEE7QUFTQSxnQkFUQSwwQkFTQTtBQUNBO0FBQ0E7QUFYQSxHQVhBO0FBeUJBO0FBQ0EsVUFEQSxrQkFDQSxHQURBLEVBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsS0FIQTtBQUtBLGNBTEEsc0JBS0EsSUFMQSxFQUtBO0FBQ0E7QUFDQSxLQVBBO0FBU0EsV0FUQSxtQkFTQSxFQVRBLEVBU0E7QUFDQTtBQUNBLEtBWEE7QUFhQSxXQWJBLHFCQWFBO0FBQ0E7QUFBQTtBQUFBLFNBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxPQUhBLFdBSUE7QUFDQTtBQUNBLE9BTkE7QUFPQSxLQXJCQTtBQXVCQSxTQXZCQSxtQkF1QkE7QUFDQTtBQUNBLEtBekJBO0FBMkJB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QUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy8xMTAuanM/aWQ9OTQ2NGQ5YTMyYzQ0NTUxYTQxMWQiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8cGFnZS10aXRsZSBpY29uPVwiZG93bmxvYWRcIj5VcGRhdGVzPC9wYWdlLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYmV0YS5nZXRmdXNpb25jbXMuY29tL2NoYW5nZWxvZ1wiIHRpdGxlPVwiQ2hhbmdlbG9nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgY3VycmVudCB9fTwvYT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiB2LWZvcj1cIih2ZXJzaW9uLCBpMSkgaW4gdmVyc2lvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19oZWFkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgdmVyc2lvbi50aXRsZSB9fVxuXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14cyBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVsZWFzZWQge3sgJG1vbWVudCh2ZXJzaW9uLmRhdGVfcHVibGlzaGVkKS5mb3JtYXQoJ01NTSBEbywgWVlZWScpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSB1cGdyYWRlIC0tXG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LWlmPVwidmVyc2lvbi5pZCA+IGlkXCIgQGNsaWNrPVwidXBncmFkZSh2ZXJzaW9uLmlkKVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgVXBncmFkZSB0byB7eyB2ZXJzaW9uLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gY3VycmVudCB2ZXJzaW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1pZj1cInZlcnNpb24uX2lzQ3VycmVudFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudCB2ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIDwvcC1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBhdHRhY2htZW50cyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGEgIHYtZm9yPVwiKGF0dGFjaG1lbnQsIGkyKSBpbiB2ZXJzaW9uLmF0dGFjaG1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJgYXR0YWNobWVudC0ke2kxfS0ke2kyfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uIG1sLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJhdHRhY2htZW50LnVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCJhdHRhY2htZW50Lm1pbWVfdHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gaWNvbj1cImRvd25sb2FkXCIgY2xhc3M9XCJpY29uXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBnaXRodWIgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhICBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWljb24gbWwtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cImBodHRwczovL2dpdGh1Yi5jb20vZnVzaW9uY21zL2Z1c2lvbmNtcy9yZWxlYXNlcy90YWcvJHt2ZXJzaW9uLnRpdGxlfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWaWV3IG9uIEdpdGh1YlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJjb2RlXCIgY2xhc3M9XCJpY29uXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICA8cD57eyB2ZXJzaW9ucy5jb250ZW50X3RleHQgfX08L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiY2hhbmdlbG9nLCBuYW1lIGluIHZlcnNpb24uX2NoYW5nZWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1mb3I9XCJpc3N1ZXMsIHRleHQgaW4gY2hhbmdlbG9nXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj57eyBuYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0ZXh0IH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAgdi1mb3I9XCJpc3N1ZSBpbiBpc3N1ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTEgdGV4dC14c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpc3N1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiYGh0dHBzOi8vZ2l0aHViLmNvbS9mdXNpb25jbXMvZnVzaW9uY21zL2lzc3Vlcy8ke2lzc3VlfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3t7IGlzc3VlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC02XCIgdi1pZj1cInBhZ2luYXRpb24udG90YWwgPiAxXCI+XG4gICAgICAgICAgICA8cC1wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgQGlucHV0PVwiY2hhbmdlUGFnZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICA6dG90YWw9XCJwYWdpbmF0aW9uLmxhc3RfcGFnZVwiXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwicGFnaW5hdGlvbi5jdXJyZW50X3BhZ2VcIlxuICAgICAgICAgICAgPjwvcC1wYWdpbmF0aW9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cG9ydGFsIHRvPVwibW9kYWxzXCI+XG4gICAgICAgICAgICA8cC1tb2RhbFxuICAgICAgICAgICAgICAgIGtleT1cInVwZGF0ZXJfbW9kYWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1cGRhdGVyXCJcbiAgICAgICAgICAgICAgICA6dGl0bGU9XCJgVXBkYXRlIHRvICR7dmVyc2lvbi50aXRsZX1gXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiaXNDb25maXJtaW5nXCI+XG5cbiAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXBkYXRlIHRvIHZlcnNpb24ge3sgdmVyc2lvbi50aXRsZSB9fT88L3A+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIEBjbGljaz1cImNvbmZpcm1cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCI+Q29uZmlybTwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBAY2xpY2s9XCJjbG9zZVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1yLTNcIj5DYW5jZWw8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICd1cGRhdGVzJyxcbiAgICAgICAgXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZlcnNpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnNpb25zOiBbXSxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBjdXJyZW50KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgdiR7dGhpcy4kc3RvcmUuc3RhdGUuZnVzaW9uLnZlcnNpb259YFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZEJ5KCd0aXRsZScsIHRoaXMuY3VycmVudCkuaWRcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzQ29uZmlybWluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISEgdGhpcy52ZXJzaW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZmluZEJ5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maW5kKHRoaXMudmVyc2lvbnMsICh2ZXJzaW9uKSA9PiB2ZXJzaW9uW2tleV0gPT0gdmFsdWUpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjaGFuZ2VQYWdlKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2gocGFnZSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVwZ3JhZGUoaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSB0aGlzLmZpbmRCeSgnaWQnLCBpZClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNvbmZpcm0oKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS91cGRhdGVzJywgeyB2ZXJzaW9uOiB0aGlzLnZlcnNpb24gfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjbG9zZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSBmYWxzZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVmcmVzaChwYWdlKSB7XG4gICAgICAgICAgICAgICAgZ2V0TW9kZWxzKChlcnJvciwgdmVyc2lvbnMsIHBhZ2luYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci50b1N0cmluZygpLCAnZGFuZ2VyJylcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVyc2lvbnMgICA9IHZlcnNpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSBwYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBwYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGdldE1vZGVscygoZXJyb3IsIHZlcnNpb25zLCBwYWdpbmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB0b2FzdChlcnJvci50b1N0cmluZygpLCAnZGFuZ2VyJykpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnZlcnNpb25zICAgPSB2ZXJzaW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0ucGFnaW5hdGlvbiA9IHBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGVscyhjYWxsYmFjaywgcGFnZSA9IDEpIHtcbiAgICAgICAgYXhpb3MuYWxsKFtcbiAgICAgICAgICAgIGF4aW9zLmdldChgL2FwaS91cGRhdGVzP3BhZ2U9JHtwYWdlfWApXG4gICAgICAgIF0pLnRoZW4oYXhpb3Muc3ByZWFkKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UuZGF0YS5kYXRhLCByZXNwb25zZS5kYXRhLm1ldGEpXG4gICAgICAgIH0pKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBjb3VsZCBub3QgYmUgZm91bmQnKSlcbiAgICAgICAgfSlcbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBhZ2UtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImRvd25sb2FkXCIgfSB9LCBbX3ZtLl92KFwiVXBkYXRlc1wiKV0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9iZXRhLmdldGZ1c2lvbmNtcy5jb20vY2hhbmdlbG9nXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkNoYW5nZWxvZ1wiLFxuICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5jdXJyZW50KSldXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0udmVyc2lvbnMsIGZ1bmN0aW9uKHZlcnNpb24sIGkxKSB7XG4gICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkX19oZWFkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHZlcnNpb24udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG5cXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMgYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBSZWxlYXNlZCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KHZlcnNpb24uZGF0ZV9wdWJsaXNoZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJNTU0gRG8sIFlZWVlcIilcbiAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdmVyc2lvbi5faXNDdXJyZW50XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwLWJ1dHRvblwiLCB7IGF0dHJzOiB7IGRpc2FibGVkOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgQ3VycmVudCB2ZXJzaW9uXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX2wodmVyc2lvbi5hdHRhY2htZW50cywgZnVuY3Rpb24oYXR0YWNobWVudCwgaTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhdHRhY2htZW50LVwiICsgaTEgKyBcIi1cIiArIGkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0taWNvbiBtbC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBhdHRhY2htZW50LnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGF0dGFjaG1lbnQubWltZV90eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiZG93bmxvYWRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1pY29uIG1sLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vZnVzaW9uY21zL2Z1c2lvbmNtcy9yZWxlYXNlcy90YWcvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVmlldyBvbiBHaXRodWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImNvZGVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udmVyc2lvbnMuY29udGVudF90ZXh0KSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKHZlcnNpb24uX2NoYW5nZWxvZywgZnVuY3Rpb24oY2hhbmdlbG9nLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIF92bS5fbChjaGFuZ2Vsb2csIGZ1bmN0aW9uKGlzc3VlcywgdGV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhuYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0ZXh0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChpc3N1ZXMsIGZ1bmN0aW9uKGlzc3VlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaXNzdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTEgdGV4dC14c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9mdXNpb25jbXMvZnVzaW9uY21zL2lzc3Vlcy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXNzdWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGFnaW5hdGlvbi50b3RhbCA+IDFcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTZcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInAtcGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRvdGFsOiBfdm0ucGFnaW5hdGlvbi5sYXN0X3BhZ2UsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2luYXRpb24uY3VycmVudF9wYWdlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVBhZ2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJ1cGRhdGVyX21vZGFsXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJ1cGRhdGVyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVXBkYXRlIHRvIFwiICsgX3ZtLnZlcnNpb24udGl0bGVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQ29uZmlybWluZyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uaXNDb25maXJtaW5nID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQ29uZmlybWluZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXBkYXRlIHRvIHZlcnNpb24gXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnNpb24udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgXCI/XCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgeyBzbG90OiBcImZvb3RlclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jb25maXJtIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNvbmZpcm1cIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzAxMDJjMTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9tYW5kYS9TaXRlcy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzAxMDJjMTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzAxMDJjMTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzAxMDJjMTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMDEwMmMxOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjMDEwMmMxOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1VwZGF0ZXMvSW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMDEwMmMxOCZcIiJdLCJzb3VyY2VSb290IjoiIn0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNpbW9ud2VwL3BpY2tyL2Rpc3QvcGlja3IubWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsZUFBZSxLQUFpRCxvQkFBb0IsU0FBeUcsQ0FBQyxvQkFBb0IsbUJBQW1CLFNBQVMsY0FBYyw0QkFBNEIsWUFBWSxxQkFBcUIsMkRBQTJELHVDQUF1QyxxQ0FBcUMsb0JBQW9CLEVBQUUsaUJBQWlCLDRGQUE0RixlQUFlLHdDQUF3QyxTQUFTLEVBQUUsbUJBQW1CLDhCQUE4QixxREFBcUQsMEJBQTBCLDZDQUE2QyxzQkFBc0IsNkRBQTZELFlBQVksZUFBZSxTQUFTLGlCQUFpQixpQ0FBaUMsaUJBQWlCLFlBQVksVUFBVSxzQkFBc0IsbUJBQW1CLGlEQUFpRCxpQkFBaUIsY0FBYyx1QkFBdUIsWUFBWSxHQUFHLGlCQUFpQixhQUFhLE9BQU8sU0FBUyxnQkFBZ0IscUJBQXFCLGlDQUFpQyxzQ0FBc0MsNEJBQTRCLHVEQUF1RCxzQkFBc0IsU0FBUyxjQUFjLFlBQVksbUJBQW1CLEtBQUsseUNBQXlDLHlDQUF5QyxZQUFZLHFJQUFxSSxnRUFBZ0UsR0FBRyxTQUFTLGtCQUFrQix5Q0FBeUMsa0RBQWtELFdBQVcsdUJBQXVCLEVBQUUsdUhBQXVILDhDQUE4QyxXQUFXLEtBQUssK0NBQStDLDhCQUE4QixTQUFTLDJCQUEyQixTQUFTLCtDQUErQyxTQUFTLDBDQUEwQyxTQUFTLGlDQUFpQyxTQUFTLHNDQUFzQyxTQUFTLDhDQUE4QyxTQUFTLEdBQUcsNkVBQTZFLGNBQWMsc0NBQXNDLGdEQUFnRCxjQUFjLGdCQUFnQiwwQkFBMEIsOEJBQThCLFVBQVUsSUFBSSw2Q0FBNkMsR0FBRyxZQUFZLHVDQUF1Qyw4QkFBOEIsSUFBSSxxREFBcUQsVUFBVSxlQUFlLGNBQWMsK0NBQStDLGNBQWMsNkJBQTZCLG1CQUFtQixrQkFBa0IsV0FBVyxpQ0FBaUMsY0FBYyxvSkFBb0osdUJBQXVCLGNB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QUFNLHlCQUF5QixVQUFVLHFFQUFxRSw2RUFBNkUsNkRBQTZELFNBQVMsMEJBQTBCLHlIQUF5SCx5QkFBeUIsNEJBQTRCLFdBQVcsbUJBQW1CLG1CQUFtQix1QkFBdUIsVUFBVSxrQkFBa0IsVUFBVSw2RkFBNkYsU0FBUyxxRkFBcUYsMkJBQTJCLDhDQUE4QywwQ0FBMEMsOGJBQThiLDRCQUE0QixZQUFZLFdBQVc7QUFDN3R3QixxQyIsImZpbGUiOiJqcy9jaHVua3MvMTEwLmpzP2lkPTg2YzQyYTY1NzgxMDY1YzRlYzM0Iiwic291cmNlc0NvbnRlbnQiOlsiLyohIFBpY2tyIDEuNi4wIE1JVCB8IGh0dHBzOi8vZ2l0aHViLmNvbS9TaW1vbndlcC9waWNrciAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5QaWNrcj1lKCk6dC5QaWNrcj1lKCl9KHdpbmRvdywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbyhuKXtpZihlW25dKXJldHVybiBlW25dLmV4cG9ydHM7dmFyIGk9ZVtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbbl0uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsbyksaS5sPSEwLGkuZXhwb3J0c31yZXR1cm4gby5tPXQsby5jPWUsby5kPWZ1bmN0aW9uKHQsZSxuKXtvLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxvLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sby50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1vKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoby5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgaSBpbiB0KW8uZChuLGksZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxpKSk7cmV0dXJuIG59LG8ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gby5kKGUsXCJhXCIsZSksZX0sby5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxvLnA9XCJcIixvKG8ucz0xKX0oW2Z1bmN0aW9uKHQpe3QuZXhwb3J0cz1KU09OLnBhcnNlKCd7XCJhXCI6XCIxLjYuMFwifScpfSxmdW5jdGlvbih0LGUsbyl7XCJ1c2Ugc3RyaWN0XCI7by5yKGUpO3ZhciBuPXt9O2Z1bmN0aW9uIGkodCxlKXt2YXIgbz1PYmplY3Qua2V5cyh0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO2UmJihuPW4uZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpLmVudW1lcmFibGV9KSkpLG8ucHVzaC5hcHBseShvLG4pfXJldHVybiBvfWZ1bmN0aW9uIHIodCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG89bnVsbCE9YXJndW1lbnRzW2VdP2FyZ3VtZW50c1tlXTp7fTtlJTI/aShPYmplY3QobyksITApLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ModCxlLG9bZV0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobykpOmkoT2JqZWN0KG8pKS5mb3JFYWNoKChmdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobyxlKSl9KSl9cmV0dXJuIHR9ZnVuY3Rpb24gcyh0LGUsbyl7cmV0dXJuIGUgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHt2YWx1ZTpvLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtlXT1vLHR9ZnVuY3Rpb24gYSh0LGUsbyxuLGk9e30pe2UgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbnx8ZSBpbnN0YW5jZW9mIE5vZGVMaXN0P2U9QXJyYXkuZnJvbShlKTpBcnJheS5pc0FycmF5KGUpfHwoZT1bZV0pLEFycmF5LmlzQXJyYXkobyl8fChvPVtvXSk7Zm9yKGNvbnN0IHMgb2YgZSlmb3IoY29uc3QgZSBvZiBvKXNbdF0oZSxuLHIoe2NhcHR1cmU6ITF9LGkpKTtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpfW8ucihuKSxvLmQobixcIm9uXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KSksby5kKG4sXCJvZmZcIiwoZnVuY3Rpb24oKXtyZXR1cm4gbH0pKSxvLmQobixcImNyZWF0ZUVsZW1lbnRGcm9tU3RyaW5nXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHB9KSksby5kKG4sXCJjcmVhdGVGcm9tVGVtcGxhdGVcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdX0pKSxvLmQobixcImV2ZW50UGF0aFwiLChmdW5jdGlvbigpe3JldHVybiBofSkpLG8uZChuLFwicmVzb2x2ZUVsZW1lbnRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZH0pKSxvLmQobixcImFkanVzdGFibGVJbnB1dE51bWJlcnNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZn0pKTtjb25zdCBjPWEuYmluZChudWxsLFwiYWRkRXZlbnRMaXN0ZW5lclwiKSxsPWEuYmluZChudWxsLFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiKTtmdW5jdGlvbiBwKHQpe2NvbnN0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5pbm5lckhUTUw9dC50cmltKCksZS5maXJzdEVsZW1lbnRDaGlsZH1mdW5jdGlvbiB1KHQpe2NvbnN0IGU9KHQsZSk9Pntjb25zdCBvPXQuZ2V0QXR0cmlidXRlKGUpO3JldHVybiB0LnJlbW92ZUF0dHJpYnV0ZShlKSxvfSxvPSh0LG49e30pPT57Y29uc3QgaT1lKHQsXCI6b2JqXCIpLHI9ZSh0LFwiOnJlZlwiKSxzPWk/bltpXT17fTpuO3ImJihuW3JdPXQpO2Zvcihjb25zdCBuIG9mIEFycmF5LmZyb20odC5jaGlsZHJlbikpe2NvbnN0IHQ9ZShuLFwiOmFyclwiKSxpPW8obix0P3t9OnMpO3QmJihzW3RdfHwoc1t0XT1bXSkpLnB1c2goT2JqZWN0LmtleXMoaSkubGVuZ3RoP2k6bil9cmV0dXJuIG59O3JldHVybiBvKHAodCkpfWZ1bmN0aW9uIGgodCl7bGV0IGU9dC5wYXRofHx0LmNvbXBvc2VkUGF0aCYmdC5jb21wb3NlZFBhdGgoKTtpZihlKXJldHVybiBlO2xldCBvPXQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7Zm9yKGU9W3QudGFyZ2V0LG9dO289by5wYXJlbnRFbGVtZW50OyllLnB1c2gobyk7cmV0dXJuIGUucHVzaChkb2N1bWVudCx3aW5kb3cpLGV9ZnVuY3Rpb24gZCh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIEVsZW1lbnQ/dDpcInN0cmluZ1wiPT10eXBlb2YgdD90LnNwbGl0KC8+Pi9nKS5yZWR1Y2UoKHQsZSxvLG4pPT4odD10LnF1ZXJ5U2VsZWN0b3IoZSksbzxuLmxlbmd0aC0xP3Quc2hhZG93Um9vdDp0KSxkb2N1bWVudCk6bnVsbH1mdW5jdGlvbiBmKHQsZT0odD0+dCkpe2Z1bmN0aW9uIG8obyl7Y29uc3Qgbj1bLjAwMSwuMDEsLjFdW051bWJlcihvLnNoaWZ0S2V5fHwyKm8uY3RybEtleSldKihvLmRlbHRhWTwwPzE6LTEpO2xldCBpPTAscj10LnNlbGVjdGlvblN0YXJ0O3QudmFsdWU9dC52YWx1ZS5yZXBsYWNlKC9bXFxkLl0rL2csKHQsbyk9Pm88PXImJm8rdC5sZW5ndGg+PXI/KHI9byxlKE51bWJlcih0KSxuLGkpKTooaSsrLHQpKSx0LmZvY3VzKCksdC5zZXRTZWxlY3Rpb25SYW5nZShyLHIpLG8ucHJldmVudERlZmF1bHQoKSx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpfWModCxcImZvY3VzXCIsKCk9PmMod2luZG93LFwid2hlZWxcIixvLHtwYXNzaXZlOiExfSkpLGModCxcImJsdXJcIiwoKT0+bCh3aW5kb3csXCJ3aGVlbFwiLG8pKX12YXIgYj1vKDApO2NvbnN0e21pbjp2LG1heDptLGZsb29yOnkscm91bmQ6Z309TWF0aDtmdW5jdGlvbiBfKHQsZSxvKXtlLz0xMDAsby89MTAwO2NvbnN0IG49eSh0PXQvMzYwKjYpLGk9dC1uLHI9byooMS1lKSxzPW8qKDEtaSplKSxhPW8qKDEtKDEtaSkqZSksYz1uJTY7cmV0dXJuWzI1NSpbbyxzLHIscixhLG9dW2NdLDI1NSpbYSxvLG8scyxyLHJdW2NdLDI1NSpbcixyLGEsbyxvLHNdW2NdXX1mdW5jdGlvbiB3KHQsZSxvKXtjb25zdCBuPSgyLShlLz0xMDApKSooby89MTAwKS8yO3JldHVybiAwIT09biYmKGU9MT09PW4/MDpuPC41P2Uqby8oMipuKTplKm8vKDItMipuKSksW3QsMTAwKmUsMTAwKm5dfWZ1bmN0aW9uIEEodCxlLG8pe2NvbnN0IG49dih0Lz0yNTUsZS89MjU1LG8vPTI1NSksaT1tKHQsZSxvKSxyPWktbjtsZXQgcyxhO2lmKDA9PT1yKXM9YT0wO2Vsc2V7YT1yL2k7Y29uc3Qgbj0oKGktdCkvNityLzIpL3IsYz0oKGktZSkvNityLzIpL3IsbD0oKGktbykvNityLzIpL3I7dD09PWk/cz1sLWM6ZT09PWk/cz0xLzMrbi1sOm89PT1pJiYocz0yLzMrYy1uKSxzPDA/cys9MTpzPjEmJihzLT0xKX1yZXR1cm5bMzYwKnMsMTAwKmEsMTAwKmldfWZ1bmN0aW9uIEModCxlLG8sbil7cmV0dXJuIGUvPTEwMCxvLz0xMDAsWy4uLkEoMjU1KigxLXYoMSwodC89MTAwKSooMS0obi89MTAwKSkrbikpLDI1NSooMS12KDEsZSooMS1uKStuKSksMjU1KigxLXYoMSxvKigxLW4pK24pKSldfWZ1bmN0aW9uIGsodCxlLG8pe2UvPTEwMDtjb25zdCBuPTIqKGUqPShvLz0xMDApPC41P286MS1vKS8obytlKSoxMDAsaT0xMDAqKG8rZSk7cmV0dXJuW3QsaXNOYU4obik/MDpuLGldfWZ1bmN0aW9uIFModCl7cmV0dXJuIEEoLi4udC5tYXRjaCgvLnsyfS9nKS5tYXAodD0+cGFyc2VJbnQodCwxNikpKX1mdW5jdGlvbiBPKHQpe3Q9dC5tYXRjaCgvXlthLXpBLVpdKyQvKT9mdW5jdGlvbih0KXtpZihcImJsYWNrXCI9PT10LnRvTG93ZXJDYXNlKCkpcmV0dXJuXCIjMDAwXCI7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gZS5maWxsU3R5bGU9dCxcIiMwMDBcIj09PWUuZmlsbFN0eWxlP251bGw6ZS5maWxsU3R5bGV9KHQpOnQ7Y29uc3QgZT17Y215azovXmNteWtbXFxEXSsoW1xcZC5dKylbXFxEXSsoW1xcZC5dKylbXFxEXSsoW1xcZC5dKylbXFxEXSsoW1xcZC5dKykvaSxyZ2JhOi9eKChyZ2JhKXxyZ2IpW1xcRF0rKFtcXGQuXSspW1xcRF0rKFtcXGQuXSspW1xcRF0rKFtcXGQuXSspW1xcRF0qPyhbXFxkLl0rfCQpL2ksaHNsYTovXigoaHNsYSl8aHNsKVtcXERdKyhbXFxkLl0rKVtcXERdKyhbXFxkLl0rKVtcXERdKyhbXFxkLl0rKVtcXERdKj8oW1xcZC5dK3wkKS9pLGhzdmE6L14oKGhzdmEpfGhzdilbXFxEXSsoW1xcZC5dKylbXFxEXSsoW1xcZC5dKylbXFxEXSsoW1xcZC5dKylbXFxEXSo/KFtcXGQuXSt8JCkvaSxoZXhhOi9eIz8oKFtcXGRBLUZhLWZdezMsNH0pfChbXFxkQS1GYS1mXXs2fSl8KFtcXGRBLUZhLWZdezh9KSkkL2l9LG89dD0+dC5tYXAodD0+L14ofFxcZCspXFwuXFxkK3xcXGQrJC8udGVzdCh0KT9OdW1iZXIodCk6dm9pZCAwKTtsZXQgbjt0OmZvcihjb25zdCBpIGluIGUpe2lmKCEobj1lW2ldLmV4ZWModCkpKWNvbnRpbnVlO2NvbnN0IHI9dD0+ISFuWzJdPT0oXCJudW1iZXJcIj09dHlwZW9mIHQpO3N3aXRjaChpKXtjYXNlXCJjbXlrXCI6e2NvbnN0Wyx0LGUscixzXT1vKG4pO2lmKHQ+MTAwfHxlPjEwMHx8cj4xMDB8fHM+MTAwKWJyZWFrIHQ7cmV0dXJue3ZhbHVlczpDKHQsZSxyLHMpLHR5cGU6aX19Y2FzZVwicmdiYVwiOntjb25zdFssLCx0LGUscyxhXT1vKG4pO2lmKHQ+MjU1fHxlPjI1NXx8cz4yNTV8fGE8MHx8YT4xfHwhcihhKSlicmVhayB0O3JldHVybnt2YWx1ZXM6Wy4uLkEodCxlLHMpLGFdLGE6YSx0eXBlOml9fWNhc2VcImhleGFcIjp7bGV0Wyx0XT1uOzQhPT10Lmxlbmd0aCYmMyE9PXQubGVuZ3RofHwodD10LnNwbGl0KFwiXCIpLm1hcCh0PT50K3QpLmpvaW4oXCJcIikpO2NvbnN0IGU9dC5zdWJzdHJpbmcoMCw2KTtsZXQgbz10LnN1YnN0cmluZyg2KTtyZXR1cm4gbz1vP3BhcnNlSW50KG8sMTYpLzI1NTp2b2lkIDAse3ZhbHVlczpbLi4uUyhlKSxvXSxhOm8sdHlwZTppfX1jYXNlXCJoc2xhXCI6e2NvbnN0WywsLHQsZSxzLGFdPW8obik7aWYodD4zNjB8fGU+MTAwfHxzPjEwMHx8YTwwfHxhPjF8fCFyKGEpKWJyZWFrIHQ7cmV0dXJue3ZhbHVlczpbLi4uayh0LGUscyksYV0sYTphLHR5cGU6aX19Y2FzZVwiaHN2YVwiOntjb25zdFssLCx0LGUscyxhXT1vKG4pO2lmKHQ+MzYwfHxlPjEwMHx8cz4xMDB8fGE8MHx8YT4xfHwhcihhKSlicmVhayB0O3JldHVybnt2YWx1ZXM6W3QsZSxzLGFdLGE6YSx0eXBlOml9fX19cmV0dXJue3ZhbHVlczpudWxsLHR5cGU6bnVsbH19ZnVuY3Rpb24gaih0PTAsZT0wLG89MCxuPTEpe2NvbnN0IGk9KHQsZSk9PihvPS0xKT0+ZSh+bz90Lm1hcCh0PT5OdW1iZXIodC50b0ZpeGVkKG8pKSk6dCkscj17aDp0LHM6ZSx2Om8sYTpuLHRvSFNWQSgpe2NvbnN0IHQ9W3IuaCxyLnMsci52LHIuYV07cmV0dXJuIHQudG9TdHJpbmc9aSh0LHQ9PlwiaHN2YShcIi5jb25jYXQodFswXSxcIiwgXCIpLmNvbmNhdCh0WzFdLFwiJSwgXCIpLmNvbmNhdCh0WzJdLFwiJSwgXCIpLmNvbmNhdChyLmEsXCIpXCIpKSx0fSx0b0hTTEEoKXtjb25zdCB0PVsuLi53KHIuaCxyLnMsci52KSxyLmFdO3JldHVybiB0LnRvU3RyaW5nPWkodCx0PT5cImhzbGEoXCIuY29uY2F0KHRbMF0sXCIsIFwiKS5jb25jYXQodFsxXSxcIiUsIFwiKS5jb25jYXQodFsyXSxcIiUsIFwiKS5jb25jYXQoci5hLFwiKVwiKSksdH0sdG9SR0JBKCl7Y29uc3QgdD1bLi4uXyhyLmgsci5zLHIudiksci5hXTtyZXR1cm4gdC50b1N0cmluZz1pKHQsdD0+XCJyZ2JhKFwiLmNvbmNhdCh0WzBdLFwiLCBcIikuY29uY2F0KHRbMV0sXCIsIFwiKS5jb25jYXQodFsyXSxcIiwgXCIpLmNvbmNhdChyLmEsXCIpXCIpKSx0fSx0b0NNWUsoKXtjb25zdCB0PWZ1bmN0aW9uKHQsZSxvKXtjb25zdCBuPV8odCxlLG8pLGk9blswXS8yNTUscj1uWzFdLzI1NSxzPW5bMl0vMjU1LGE9digxLWksMS1yLDEtcyk7cmV0dXJuWzEwMCooMT09PWE/MDooMS1pLWEpLygxLWEpKSwxMDAqKDE9PT1hPzA6KDEtci1hKS8oMS1hKSksMTAwKigxPT09YT8wOigxLXMtYSkvKDEtYSkpLDEwMCphXX0oci5oLHIucyxyLnYpO3JldHVybiB0LnRvU3RyaW5nPWkodCx0PT5cImNteWsoXCIuY29uY2F0KHRbMF0sXCIlLCBcIikuY29uY2F0KHRbMV0sXCIlLCBcIikuY29uY2F0KHRbMl0sXCIlLCBcIikuY29uY2F0KHRbM10sXCIlKVwiKSksdH0sdG9IRVhBKCl7Y29uc3QgdD1mdW5jdGlvbih0LGUsbyl7cmV0dXJuIF8odCxlLG8pLm1hcCh0PT5nKHQpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLFwiMFwiKSl9KHIuaCxyLnMsci52KSxlPXIuYT49MT9cIlwiOk51bWJlcigoMjU1KnIuYSkudG9GaXhlZCgwKSkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkucGFkU3RhcnQoMixcIjBcIik7cmV0dXJuIGUmJnQucHVzaChlKSx0LnRvU3RyaW5nPSgpPT5cIiNcIi5jb25jYXQodC5qb2luKFwiXCIpLnRvVXBwZXJDYXNlKCkpLHR9LGNsb25lOigpPT5qKHIuaCxyLnMsci52LHIuYSl9O3JldHVybiByfWNvbnN0IEU9dD0+TWF0aC5tYXgoTWF0aC5taW4odCwxKSwwKTtmdW5jdGlvbiB4KHQpe2NvbnN0IGU9e29wdGlvbnM6T2JqZWN0LmFzc2lnbih7bG9jazpudWxsLG9uY2hhbmdlOigpPT4wLG9uc3RvcDooKT0+MH0sdCksX2tleWJvYXJkKHQpe2NvbnN0e29wdGlvbnM6b309ZSx7dHlwZTpuLGtleTppfT10O2lmKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ9PT1vLndyYXBwZXIpe2NvbnN0e2xvY2s6b309ZS5vcHRpb25zLHI9XCJBcnJvd1VwXCI9PT1pLHM9XCJBcnJvd1JpZ2h0XCI9PT1pLGE9XCJBcnJvd0Rvd25cIj09PWksYz1cIkFycm93TGVmdFwiPT09aTtpZihcImtleWRvd25cIj09PW4mJihyfHxzfHxhfHxjKSl7bGV0IG49MCxpPTA7XCJ2XCI9PT1vP249cnx8cz8xOi0xOlwiaFwiPT09bz9uPXJ8fHM/LTE6MTooaT1yPy0xOmE/MTowLG49Yz8tMTpzPzE6MCksZS51cGRhdGUoRShlLmNhY2hlLngrLjAxKm4pLEUoZS5jYWNoZS55Ky4wMSppKSksdC5wcmV2ZW50RGVmYXVsdCgpfWVsc2UgaS5zdGFydHNXaXRoKFwiQXJyb3dcIikmJihlLm9wdGlvbnMub25zdG9wKCksdC5wcmV2ZW50RGVmYXVsdCgpKX19LF90YXBzdGFydCh0KXtjKGRvY3VtZW50LFtcIm1vdXNldXBcIixcInRvdWNoZW5kXCIsXCJ0b3VjaGNhbmNlbFwiXSxlLl90YXBzdG9wKSxjKGRvY3VtZW50LFtcIm1vdXNlbW92ZVwiLFwidG91Y2htb3ZlXCJdLGUuX3RhcG1vdmUpLHQucHJldmVudERlZmF1bHQoKSxlLl90YXBtb3ZlKHQpfSxfdGFwbW92ZSh0KXtjb25zdHtvcHRpb25zOm8sY2FjaGU6bn09ZSx7bG9jazppLGVsZW1lbnQ6cix3cmFwcGVyOnN9PW8sYT1zLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2xldCBjPTAsbD0wO2lmKHQpe2NvbnN0IGU9dCYmdC50b3VjaGVzJiZ0LnRvdWNoZXNbMF07Yz10PyhlfHx0KS5jbGllbnRYOjAsbD10PyhlfHx0KS5jbGllbnRZOjAsYzxhLmxlZnQ/Yz1hLmxlZnQ6Yz5hLmxlZnQrYS53aWR0aCYmKGM9YS5sZWZ0K2Eud2lkdGgpLGw8YS50b3A/bD1hLnRvcDpsPmEudG9wK2EuaGVpZ2h0JiYobD1hLnRvcCthLmhlaWdodCksYy09YS5sZWZ0LGwtPWEudG9wfWVsc2UgbiYmKGM9bi54KmEud2lkdGgsbD1uLnkqYS5oZWlnaHQpO1wiaFwiIT09aSYmKHIuc3R5bGUubGVmdD1cImNhbGMoXCIuY29uY2F0KGMvYS53aWR0aCoxMDAsXCIlIC0gXCIpLmNvbmNhdChyLm9mZnNldFdpZHRoLzIsXCJweClcIikpLFwidlwiIT09aSYmKHIuc3R5bGUudG9wPVwiY2FsYyhcIi5jb25jYXQobC9hLmhlaWdodCoxMDAsXCIlIC0gXCIpLmNvbmNhdChyLm9mZnNldEhlaWdodC8yLFwicHgpXCIpKSxlLmNhY2hlPXt4OmMvYS53aWR0aCx5OmwvYS5oZWlnaHR9O2NvbnN0IHA9RShjL2Eud2lkdGgpLHU9RShsL2EuaGVpZ2h0KTtzd2l0Y2goaSl7Y2FzZVwidlwiOnJldHVybiBvLm9uY2hhbmdlKHApO2Nhc2VcImhcIjpyZXR1cm4gby5vbmNoYW5nZSh1KTtkZWZhdWx0OnJldHVybiBvLm9uY2hhbmdlKHAsdSl9fSxfdGFwc3RvcCgpe2Uub3B0aW9ucy5vbnN0b3AoKSxsKGRvY3VtZW50LFtcIm1vdXNldXBcIixcInRvdWNoZW5kXCIsXCJ0b3VjaGNhbmNlbFwiXSxlLl90YXBzdG9wKSxsKGRvY3VtZW50LFtcIm1vdXNlbW92ZVwiLFwidG91Y2htb3ZlXCJdLGUuX3RhcG1vdmUpfSx0cmlnZ2VyKCl7ZS5fdGFwbW92ZSgpfSx1cGRhdGUodD0wLG89MCl7Y29uc3R7bGVmdDpuLHRvcDppLHdpZHRoOnIsaGVpZ2h0OnN9PWUub3B0aW9ucy53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1wiaFwiPT09ZS5vcHRpb25zLmxvY2smJihvPXQpLGUuX3RhcG1vdmUoe2NsaWVudFg6bityKnQsY2xpZW50WTppK3Mqb30pfSxkZXN0cm95KCl7Y29uc3R7b3B0aW9uczp0LF90YXBzdGFydDpvLF9rZXlib2FyZDpufT1lO2woZG9jdW1lbnQsW1wia2V5ZG93blwiLFwia2V5dXBcIl0sbiksbChbdC53cmFwcGVyLHQuZWxlbWVudF0sXCJtb3VzZWRvd25cIixvKSxsKFt0LndyYXBwZXIsdC5lbGVtZW50XSxcInRvdWNoc3RhcnRcIixvLHtwYXNzaXZlOiExfSl9fSx7b3B0aW9uczpvLF90YXBzdGFydDpuLF9rZXlib2FyZDppfT1lO3JldHVybiBjKFtvLndyYXBwZXIsby5lbGVtZW50XSxcIm1vdXNlZG93blwiLG4pLGMoW28ud3JhcHBlcixvLmVsZW1lbnRdLFwidG91Y2hzdGFydFwiLG4se3Bhc3NpdmU6ITF9KSxjKGRvY3VtZW50LFtcImtleWRvd25cIixcImtleXVwXCJdLGkpLGV9ZnVuY3Rpb24gTCh0PXt9KXt0PU9iamVjdC5hc3NpZ24oe29uY2hhbmdlOigpPT4wLGNsYXNzTmFtZTpcIlwiLGVsZW1lbnRzOltdfSx0KTtjb25zdCBlPWModC5lbGVtZW50cyxcImNsaWNrXCIsZT0+e3QuZWxlbWVudHMuZm9yRWFjaChvPT5vLmNsYXNzTGlzdFtlLnRhcmdldD09PW8/XCJhZGRcIjpcInJlbW92ZVwiXSh0LmNsYXNzTmFtZSkpLHQub25jaGFuZ2UoZSl9KTtyZXR1cm57ZGVzdHJveTooKT0+bCguLi5lKX19ZnVuY3Rpb24gUCh7ZWw6dCxyZWZlcmVuY2U6ZSxwYWRkaW5nOm89OH0pe2NvbnN0IG49e3N0YXJ0Olwic21lXCIsbWlkZGxlOlwibXNlXCIsZW5kOlwiZW1zXCJ9LGk9e3RvcDpcInRicmxcIixyaWdodDpcInJsdGJcIixib3R0b206XCJidHJsXCIsbGVmdDpcImxyYnRcIn0scj0oKHQ9e30pPT4oZSxvPXRbZV0pPT57aWYobylyZXR1cm4gbztjb25zdFtuLGk9XCJtaWRkbGVcIl09ZS5zcGxpdChcIi1cIikscj1cInRvcFwiPT09bnx8XCJib3R0b21cIj09PW47cmV0dXJuIHRbZV09e3Bvc2l0aW9uOm4sdmFyaWFudDppLGlzVmVydGljYWw6cn19KSgpO3JldHVybnt1cGRhdGUocyxhPSExKXtjb25zdHtwb3NpdGlvbjpjLHZhcmlhbnQ6bCxpc1ZlcnRpY2FsOnB9PXIocyksdT1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGg9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxkPXQ9PnQ/e3Q6dS50b3AtaC5oZWlnaHQtbyxiOnUuYm90dG9tK299OntyOnUucmlnaHQrbyxsOnUubGVmdC1oLndpZHRoLW99LGY9dD0+dD97czp1LmxlZnQrdS53aWR0aC1oLndpZHRoLG06LWgud2lkdGgvMisodS5sZWZ0K3Uud2lkdGgvMiksZTp1LmxlZnR9OntzOnUuYm90dG9tLWguaGVpZ2h0LG06dS5ib3R0b20tdS5oZWlnaHQvMi1oLmhlaWdodC8yLGU6dS5ib3R0b20tdS5oZWlnaHR9LGI9e30sdj0odCxlLG8pPT57Y29uc3Qgbj1cInRvcFwiPT09byxpPW4/aC5oZWlnaHQ6aC53aWR0aCxyPXdpbmRvd1tuP1wiaW5uZXJIZWlnaHRcIjpcImlubmVyV2lkdGhcIl07Zm9yKGNvbnN0IG4gb2YgdCl7Y29uc3QgdD1lW25dLHM9YltvXT1cIlwiLmNvbmNhdCh0LFwicHhcIik7aWYodD4wJiZ0K2k8cilyZXR1cm4gc31yZXR1cm4gbnVsbH07Zm9yKGNvbnN0IGUgb2ZbcCwhcF0pe2NvbnN0IG89ZT9cInRvcFwiOlwibGVmdFwiLHI9ZT9cImxlZnRcIjpcInRvcFwiLHM9dihpW2NdLGQoZSksbyksYT12KG5bbF0sZihlKSxyKTtpZihzJiZhKXJldHVybiB0LnN0eWxlW3JdPWEsdm9pZCh0LnN0eWxlW29dPXMpfWE/KHQuc3R5bGUudG9wPVwiXCIuY29uY2F0KCh3aW5kb3cuaW5uZXJIZWlnaHQtaC5oZWlnaHQpLzIsXCJweFwiKSx0LnN0eWxlLmxlZnQ9XCJcIi5jb25jYXQoKHdpbmRvdy5pbm5lcldpZHRoLWgud2lkdGgpLzIsXCJweFwiKSk6KHQuc3R5bGUubGVmdD1iLmxlZnQsdC5zdHlsZS50b3A9Yi50b3ApfX19ZnVuY3Rpb24gQih0LGUsbyl7cmV0dXJuIGUgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHt2YWx1ZTpvLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtlXT1vLHR9Y2xhc3MgRHtjb25zdHJ1Y3Rvcih0KXtCKHRoaXMsXCJfaW5pdGlhbGl6aW5nQWN0aXZlXCIsITApLEIodGhpcyxcIl9yZWNhbGNcIiwhMCksQih0aGlzLFwiX25hbm9wb3BcIixudWxsKSxCKHRoaXMsXCJfcm9vdFwiLG51bGwpLEIodGhpcyxcIl9jb2xvclwiLGooKSksQih0aGlzLFwiX2xhc3RDb2xvclwiLGooKSksQih0aGlzLFwiX3N3YXRjaENvbG9yc1wiLFtdKSxCKHRoaXMsXCJfZXZlbnRMaXN0ZW5lclwiLHtpbml0OltdLHNhdmU6W10saGlkZTpbXSxzaG93OltdLGNsZWFyOltdLGNoYW5nZTpbXSxjaGFuZ2VzdG9wOltdLGNhbmNlbDpbXSxzd2F0Y2hzZWxlY3Q6W119KSx0aGlzLm9wdGlvbnM9dD1PYmplY3QuYXNzaWduKHthcHBDbGFzczpudWxsLHRoZW1lOlwiY2xhc3NpY1wiLHVzZUFzQnV0dG9uOiExLHBhZGRpbmc6OCxkaXNhYmxlZDohMSxjb21wYXJpc29uOiEwLGNsb3NlT25TY3JvbGw6ITEsb3V0cHV0UHJlY2lzaW9uOjAsbG9ja09wYWNpdHk6ITEsYXV0b1JlcG9zaXRpb246ITAsY29udGFpbmVyOlwiYm9keVwiLGNvbXBvbmVudHM6e2ludGVyYWN0aW9uOnt9fSxpMThuOnt9LHN3YXRjaGVzOm51bGwsaW5saW5lOiExLHNsaWRlcnM6bnVsbCxkZWZhdWx0OlwiIzQyNDQ1YVwiLGRlZmF1bHRSZXByZXNlbnRhdGlvbjpudWxsLHBvc2l0aW9uOlwiYm90dG9tLW1pZGRsZVwiLGFkanVzdGFibGVOdW1iZXJzOiEwLHNob3dBbHdheXM6ITEsY2xvc2VXaXRoS2V5OlwiRXNjYXBlXCJ9LHQpO2NvbnN0e3N3YXRjaGVzOmUsY29tcG9uZW50czpvLHRoZW1lOm4sc2xpZGVyczppLGxvY2tPcGFjaXR5OnIscGFkZGluZzpzfT10O1tcIm5hbm9cIixcIm1vbm9saXRoXCJdLmluY2x1ZGVzKG4pJiYhaSYmKHQuc2xpZGVycz1cImhcIiksby5pbnRlcmFjdGlvbnx8KG8uaW50ZXJhY3Rpb249e30pO2NvbnN0e3ByZXZpZXc6YSxvcGFjaXR5OmMsaHVlOmwscGFsZXR0ZTpwfT1vO28ub3BhY2l0eT0hciYmYyxvLnBhbGV0dGU9cHx8YXx8Y3x8bCx0aGlzLl9wcmVCdWlsZCgpLHRoaXMuX2J1aWxkQ29tcG9uZW50cygpLHRoaXMuX2JpbmRFdmVudHMoKSx0aGlzLl9maW5hbEJ1aWxkKCksZSYmZS5sZW5ndGgmJmUuZm9yRWFjaCh0PT50aGlzLmFkZFN3YXRjaCh0KSk7Y29uc3R7YnV0dG9uOnUsYXBwOmh9PXRoaXMuX3Jvb3Q7dGhpcy5fbmFub3BvcD1QKHtyZWZlcmVuY2U6dSxwYWRkaW5nOnMsZWw6aH0pLHUuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwiYnV0dG9uXCIpLHUuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLHRoaXMuX3QoXCJidG46dG9nZ2xlXCIpKTtjb25zdCBkPXRoaXM7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbiBlKCl7aWYoIWgub2Zmc2V0V2lkdGgmJmgucGFyZW50RWxlbWVudCE9PXQuY29udGFpbmVyKXJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZSk7ZC5zZXRDb2xvcih0LmRlZmF1bHQpLGQuX3JlUG9zaXRpb25pbmdQaWNrZXIoKSx0LmRlZmF1bHRSZXByZXNlbnRhdGlvbiYmKGQuX3JlcHJlc2VudGF0aW9uPXQuZGVmYXVsdFJlcHJlc2VudGF0aW9uLGQuc2V0Q29sb3JSZXByZXNlbnRhdGlvbihkLl9yZXByZXNlbnRhdGlvbikpLHQuc2hvd0Fsd2F5cyYmZC5zaG93KCksZC5faW5pdGlhbGl6aW5nQWN0aXZlPSExLGQuX2VtaXQoXCJpbml0XCIpfSkpfV9wcmVCdWlsZCgpe2NvbnN0e29wdGlvbnM6dH09dGhpcztmb3IoY29uc3QgZSBvZltcImVsXCIsXCJjb250YWluZXJcIl0pdFtlXT1kKHRbZV0pO3RoaXMuX3Jvb3Q9KHQ9Pntjb25zdHtjb21wb25lbnRzOmUsdXNlQXNCdXR0b246byxpbmxpbmU6bixhcHBDbGFzczppLHRoZW1lOnIsbG9ja09wYWNpdHk6c309dC5vcHRpb25zLGE9dD0+dD9cIlwiOidzdHlsZT1cImRpc3BsYXk6bm9uZVwiIGhpZGRlbicsYz1lPT50Ll90KGUpLGw9dSgnXFxuICAgICAgPGRpdiA6cmVmPVwicm9vdFwiIGNsYXNzPVwicGlja3JcIj5cXG5cXG4gICAgICAgICcuY29uY2F0KG8/XCJcIjonPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgOnJlZj1cImJ1dHRvblwiIGNsYXNzPVwicGNyLWJ1dHRvblwiPjwvYnV0dG9uPicsJ1xcblxcbiAgICAgICAgPGRpdiA6cmVmPVwiYXBwXCIgY2xhc3M9XCJwY3ItYXBwICcpLmNvbmNhdChpfHxcIlwiLCdcIiBkYXRhLXRoZW1lPVwiJykuY29uY2F0KHIsJ1wiICcpLmNvbmNhdChuPydzdHlsZT1cInBvc2l0aW9uOiB1bnNldFwiJzpcIlwiLCcgYXJpYS1sYWJlbD1cIicpLmNvbmNhdChjKFwidWk6ZGlhbG9nXCIpLCdcIiByb2xlPVwid2luZG93XCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwY3Itc2VsZWN0aW9uXCIgJykuY29uY2F0KGEoZS5wYWxldHRlKSwnPlxcbiAgICAgICAgICAgIDxkaXYgOm9iaj1cInByZXZpZXdcIiBjbGFzcz1cInBjci1jb2xvci1wcmV2aWV3XCIgJykuY29uY2F0KGEoZS5wcmV2aWV3KSwnPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgOnJlZj1cImxhc3RDb2xvclwiIGNsYXNzPVwicGNyLWxhc3QtY29sb3JcIiBhcmlhLWxhYmVsPVwiJykuY29uY2F0KGMoXCJidG46bGFzdC1jb2xvclwiKSwnXCI+PC9idXR0b24+XFxuICAgICAgICAgICAgICA8ZGl2IDpyZWY9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInBjci1jdXJyZW50LWNvbG9yXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiA6b2JqPVwicGFsZXR0ZVwiIGNsYXNzPVwicGNyLWNvbG9yLXBhbGV0dGVcIj5cXG4gICAgICAgICAgICAgIDxkaXYgOnJlZj1cInBpY2tlclwiIGNsYXNzPVwicGNyLXBpY2tlclwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiA6cmVmPVwicGFsZXR0ZVwiIGNsYXNzPVwicGNyLXBhbGV0dGVcIiB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPVwiJykuY29uY2F0KGMoXCJhcmlhOnBhbGV0dGVcIiksJ1wiIHJvbGU9XCJsaXN0Ym94XCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiA6b2JqPVwiaHVlXCIgY2xhc3M9XCJwY3ItY29sb3ItY2hvb3NlclwiICcpLmNvbmNhdChhKGUuaHVlKSwnPlxcbiAgICAgICAgICAgICAgPGRpdiA6cmVmPVwicGlja2VyXCIgY2xhc3M9XCJwY3ItcGlja2VyXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IDpyZWY9XCJzbGlkZXJcIiBjbGFzcz1cInBjci1odWUgcGNyLXNsaWRlclwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9XCInKS5jb25jYXQoYyhcImFyaWE6aHVlXCIpLCdcIiByb2xlPVwic2xpZGVyXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiA6b2JqPVwib3BhY2l0eVwiIGNsYXNzPVwicGNyLWNvbG9yLW9wYWNpdHlcIiAnKS5jb25jYXQoYShlLm9wYWNpdHkpLCc+XFxuICAgICAgICAgICAgICA8ZGl2IDpyZWY9XCJwaWNrZXJcIiBjbGFzcz1cInBjci1waWNrZXJcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgOnJlZj1cInNsaWRlclwiIGNsYXNzPVwicGNyLW9wYWNpdHkgcGNyLXNsaWRlclwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9XCInKS5jb25jYXQoYyhcImFyaWE6b3BhY2l0eVwiKSwnXCIgcm9sZT1cInNsaWRlclwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBjci1zd2F0Y2hlcyAnKS5jb25jYXQoZS5wYWxldHRlP1wiXCI6XCJwY3ItbGFzdFwiLCdcIiA6cmVmPVwic3dhdGNoZXNcIj48L2Rpdj5cXG5cXG4gICAgICAgICAgPGRpdiA6b2JqPVwiaW50ZXJhY3Rpb25cIiBjbGFzcz1cInBjci1pbnRlcmFjdGlvblwiICcpLmNvbmNhdChhKE9iamVjdC5rZXlzKGUuaW50ZXJhY3Rpb24pLmxlbmd0aCksJz5cXG4gICAgICAgICAgICA8aW5wdXQgOnJlZj1cInJlc3VsdFwiIGNsYXNzPVwicGNyLXJlc3VsdFwiIHR5cGU9XCJ0ZXh0XCIgc3BlbGxjaGVjaz1cImZhbHNlXCIgJykuY29uY2F0KGEoZS5pbnRlcmFjdGlvbi5pbnB1dCksJyBhcmlhLWxhYmVsPVwiJykuY29uY2F0KGMoXCJhcmlhOmlucHV0XCIpLCdcIj5cXG5cXG4gICAgICAgICAgICA8aW5wdXQgOmFycj1cIm9wdGlvbnNcIiBjbGFzcz1cInBjci10eXBlXCIgZGF0YS10eXBlPVwiSEVYQVwiIHZhbHVlPVwiJykuY29uY2F0KHM/XCJIRVhcIjpcIkhFWEFcIiwnXCIgdHlwZT1cImJ1dHRvblwiICcpLmNvbmNhdChhKGUuaW50ZXJhY3Rpb24uaGV4KSwnPlxcbiAgICAgICAgICAgIDxpbnB1dCA6YXJyPVwib3B0aW9uc1wiIGNsYXNzPVwicGNyLXR5cGVcIiBkYXRhLXR5cGU9XCJSR0JBXCIgdmFsdWU9XCInKS5jb25jYXQocz9cIlJHQlwiOlwiUkdCQVwiLCdcIiB0eXBlPVwiYnV0dG9uXCIgJykuY29uY2F0KGEoZS5pbnRlcmFjdGlvbi5yZ2JhKSwnPlxcbiAgICAgICAgICAgIDxpbnB1dCA6YXJyPVwib3B0aW9uc1wiIGNsYXNzPVwicGNyLXR5cGVcIiBkYXRhLXR5cGU9XCJIU0xBXCIgdmFsdWU9XCInKS5jb25jYXQocz9cIkhTTFwiOlwiSFNMQVwiLCdcIiB0eXBlPVwiYnV0dG9uXCIgJykuY29uY2F0KGEoZS5pbnRlcmFjdGlvbi5oc2xhKSwnPlxcbiAgICAgICAgICAgIDxpbnB1dCA6YXJyPVwib3B0aW9uc1wiIGNsYXNzPVwicGNyLXR5cGVcIiBkYXRhLXR5cGU9XCJIU1ZBXCIgdmFsdWU9XCInKS5jb25jYXQocz9cIkhTVlwiOlwiSFNWQVwiLCdcIiB0eXBlPVwiYnV0dG9uXCIgJykuY29uY2F0KGEoZS5pbnRlcmFjdGlvbi5oc3ZhKSwnPlxcbiAgICAgICAgICAgIDxpbnB1dCA6YXJyPVwib3B0aW9uc1wiIGNsYXNzPVwicGNyLXR5cGVcIiBkYXRhLXR5cGU9XCJDTVlLXCIgdmFsdWU9XCJDTVlLXCIgdHlwZT1cImJ1dHRvblwiICcpLmNvbmNhdChhKGUuaW50ZXJhY3Rpb24uY215ayksJz5cXG5cXG4gICAgICAgICAgICA8aW5wdXQgOnJlZj1cInNhdmVcIiBjbGFzcz1cInBjci1zYXZlXCIgdmFsdWU9XCInKS5jb25jYXQoYyhcImJ0bjpzYXZlXCIpLCdcIiB0eXBlPVwiYnV0dG9uXCIgJykuY29uY2F0KGEoZS5pbnRlcmFjdGlvbi5zYXZlKSwnIGFyaWEtbGFiZWw9XCInKS5jb25jYXQoYyhcImFyaWE6YnRuOnNhdmVcIiksJ1wiPlxcbiAgICAgICAgICAgIDxpbnB1dCA6cmVmPVwiY2FuY2VsXCIgY2xhc3M9XCJwY3ItY2FuY2VsXCIgdmFsdWU9XCInKS5jb25jYXQoYyhcImJ0bjpjYW5jZWxcIiksJ1wiIHR5cGU9XCJidXR0b25cIiAnKS5jb25jYXQoYShlLmludGVyYWN0aW9uLmNhbmNlbCksJyBhcmlhLWxhYmVsPVwiJykuY29uY2F0KGMoXCJhcmlhOmJ0bjpjYW5jZWxcIiksJ1wiPlxcbiAgICAgICAgICAgIDxpbnB1dCA6cmVmPVwiY2xlYXJcIiBjbGFzcz1cInBjci1jbGVhclwiIHZhbHVlPVwiJykuY29uY2F0KGMoXCJidG46Y2xlYXJcIiksJ1wiIHR5cGU9XCJidXR0b25cIiAnKS5jb25jYXQoYShlLmludGVyYWN0aW9uLmNsZWFyKSwnIGFyaWEtbGFiZWw9XCInKS5jb25jYXQoYyhcImFyaWE6YnRuOmNsZWFyXCIpLCdcIj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgJykpLHA9bC5pbnRlcmFjdGlvbjtyZXR1cm4gcC5vcHRpb25zLmZpbmQodD0+IXQuaGlkZGVuJiYhdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpKSxwLnR5cGU9KCk9PnAub3B0aW9ucy5maW5kKHQ9PnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSxsfSkodGhpcyksdC51c2VBc0J1dHRvbiYmKHRoaXMuX3Jvb3QuYnV0dG9uPXQuZWwpLHQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX3Jvb3Qucm9vdCl9X2ZpbmFsQnVpbGQoKXtjb25zdCB0PXRoaXMub3B0aW9ucyxlPXRoaXMuX3Jvb3Q7aWYodC5jb250YWluZXIucmVtb3ZlQ2hpbGQoZS5yb290KSx0LmlubGluZSl7Y29uc3Qgbz10LmVsLnBhcmVudEVsZW1lbnQ7dC5lbC5uZXh0U2libGluZz9vLmluc2VydEJlZm9yZShlLmFwcCx0LmVsLm5leHRTaWJsaW5nKTpvLmFwcGVuZENoaWxkKGUuYXBwKX1lbHNlIHQuY29udGFpbmVyLmFwcGVuZENoaWxkKGUuYXBwKTt0LnVzZUFzQnV0dG9uP3QuaW5saW5lJiZ0LmVsLnJlbW92ZSgpOnQuZWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZS5yb290LHQuZWwpLHQuZGlzYWJsZWQmJnRoaXMuZGlzYWJsZSgpLHQuY29tcGFyaXNvbnx8KGUuYnV0dG9uLnN0eWxlLnRyYW5zaXRpb249XCJub25lXCIsdC51c2VBc0J1dHRvbnx8KGUucHJldmlldy5sYXN0Q29sb3Iuc3R5bGUudHJhbnNpdGlvbj1cIm5vbmVcIikpLHRoaXMuaGlkZSgpfV9idWlsZENvbXBvbmVudHMoKXtjb25zdCB0PXRoaXMsZT10aGlzLm9wdGlvbnMuY29tcG9uZW50cyxvPSh0Lm9wdGlvbnMuc2xpZGVyc3x8XCJ2XCIpLnJlcGVhdCgyKSxbbixpXT1vLm1hdGNoKC9eW3ZoXSskL2cpP286W10scj0oKT0+dGhpcy5fY29sb3J8fCh0aGlzLl9jb2xvcj10aGlzLl9sYXN0Q29sb3IuY2xvbmUoKSkscz17cGFsZXR0ZTp4KHtlbGVtZW50OnQuX3Jvb3QucGFsZXR0ZS5waWNrZXIsd3JhcHBlcjp0Ll9yb290LnBhbGV0dGUucGFsZXR0ZSxvbnN0b3A6KCk9PnQuX2VtaXQoXCJjaGFuZ2VzdG9wXCIsdCksb25jaGFuZ2UobyxuKXtpZighZS5wYWxldHRlKXJldHVybjtjb25zdCBpPXIoKSx7X3Jvb3Q6cyxvcHRpb25zOmF9PXQse2xhc3RDb2xvcjpjLGN1cnJlbnRDb2xvcjpsfT1zLnByZXZpZXc7dC5fcmVjYWxjJiYoaS5zPTEwMCpvLGkudj0xMDAtMTAwKm4saS52PDAmJihpLnY9MCksdC5fdXBkYXRlT3V0cHV0KCkpO2NvbnN0IHA9aS50b1JHQkEoKS50b1N0cmluZygwKTt0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZD1wLHRoaXMud3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kPVwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCBcIi5jb25jYXQoaS5hLFwiKSwgdHJhbnNwYXJlbnQpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBoc2xhKFwiKS5jb25jYXQoaS5oLFwiLCAxMDAlLCA1MCUsIFwiKS5jb25jYXQoaS5hLFwiKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCBcIikuY29uY2F0KGkuYSxcIikpXFxuICAgICAgICAgICAgICAgICAgICBcIiksYS5jb21wYXJpc29uP2EudXNlQXNCdXR0b258fHQuX2xhc3RDb2xvcnx8KGMuc3R5bGUuY29sb3I9cCk6KHMuYnV0dG9uLnN0eWxlLmNvbG9yPXAscy5idXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsZWFyXCIpKTtjb25zdCB1PWkudG9IRVhBKCkudG9TdHJpbmcoKTtmb3IoY29uc3R7ZWw6ZSxjb2xvcjpvfW9mIHQuX3N3YXRjaENvbG9ycyllLmNsYXNzTGlzdFt1PT09by50b0hFWEEoKS50b1N0cmluZygpP1wiYWRkXCI6XCJyZW1vdmVcIl0oXCJwY3ItYWN0aXZlXCIpO2wuc3R5bGUuY29sb3I9cH19KSxodWU6eCh7bG9jazpcInZcIj09PWk/XCJoXCI6XCJ2XCIsZWxlbWVudDp0Ll9yb290Lmh1ZS5waWNrZXIsd3JhcHBlcjp0Ll9yb290Lmh1ZS5zbGlkZXIsb25zdG9wOigpPT50Ll9lbWl0KFwiY2hhbmdlc3RvcFwiLHQpLG9uY2hhbmdlKG8pe2lmKCFlLmh1ZXx8IWUucGFsZXR0ZSlyZXR1cm47Y29uc3Qgbj1yKCk7dC5fcmVjYWxjJiYobi5oPTM2MCpvKSx0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiaHNsKFwiLmNvbmNhdChuLmgsXCIsIDEwMCUsIDUwJSlcIikscy5wYWxldHRlLnRyaWdnZXIoKX19KSxvcGFjaXR5Ongoe2xvY2s6XCJ2XCI9PT1uP1wiaFwiOlwidlwiLGVsZW1lbnQ6dC5fcm9vdC5vcGFjaXR5LnBpY2tlcix3cmFwcGVyOnQuX3Jvb3Qub3BhY2l0eS5zbGlkZXIsb25zdG9wOigpPT50Ll9lbWl0KFwiY2hhbmdlc3RvcFwiLHQpLG9uY2hhbmdlKG8pe2lmKCFlLm9wYWNpdHl8fCFlLnBhbGV0dGUpcmV0dXJuO2NvbnN0IG49cigpO3QuX3JlY2FsYyYmKG4uYT1NYXRoLnJvdW5kKDEwMCpvKS8xMDApLHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kPVwicmdiYSgwLCAwLCAwLCBcIi5jb25jYXQobi5hLFwiKVwiKSxzLnBhbGV0dGUudHJpZ2dlcigpfX0pLHNlbGVjdGFibGU6TCh7ZWxlbWVudHM6dC5fcm9vdC5pbnRlcmFjdGlvbi5vcHRpb25zLGNsYXNzTmFtZTpcImFjdGl2ZVwiLG9uY2hhbmdlKGUpe3QuX3JlcHJlc2VudGF0aW9uPWUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiKS50b1VwcGVyQ2FzZSgpLHQuX3JlY2FsYyYmdC5fdXBkYXRlT3V0cHV0KCl9fSl9O3RoaXMuX2NvbXBvbmVudHM9c31fYmluZEV2ZW50cygpe2NvbnN0e19yb290OnQsb3B0aW9uczplfT10aGlzLG89W2ModC5pbnRlcmFjdGlvbi5jbGVhcixcImNsaWNrXCIsKCk9PnRoaXMuX2NsZWFyQ29sb3IoKSksYyhbdC5pbnRlcmFjdGlvbi5jYW5jZWwsdC5wcmV2aWV3Lmxhc3RDb2xvcl0sXCJjbGlja1wiLCgpPT57dGhpcy5fZW1pdChcImNhbmNlbFwiLHRoaXMpLHRoaXMuc2V0SFNWQSguLi4odGhpcy5fbGFzdENvbG9yfHx0aGlzLl9jb2xvcikudG9IU1ZBKCksITApfSksYyh0LmludGVyYWN0aW9uLnNhdmUsXCJjbGlja1wiLCgpPT57IXRoaXMuYXBwbHlDb2xvcigpJiYhZS5zaG93QWx3YXlzJiZ0aGlzLmhpZGUoKX0pLGModC5pbnRlcmFjdGlvbi5yZXN1bHQsW1wia2V5dXBcIixcImlucHV0XCJdLHQ9Pnt0aGlzLnNldENvbG9yKHQudGFyZ2V0LnZhbHVlLCEwKSYmIXRoaXMuX2luaXRpYWxpemluZ0FjdGl2ZSYmdGhpcy5fZW1pdChcImNoYW5nZVwiLHRoaXMuX2NvbG9yKSx0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpfSksYyh0LmludGVyYWN0aW9uLnJlc3VsdCxbXCJmb2N1c1wiLFwiYmx1clwiXSx0PT57dGhpcy5fcmVjYWxjPVwiYmx1clwiPT09dC50eXBlLHRoaXMuX3JlY2FsYyYmdGhpcy5fdXBkYXRlT3V0cHV0KCl9KSxjKFt0LnBhbGV0dGUucGFsZXR0ZSx0LnBhbGV0dGUucGlja2VyLHQuaHVlLnNsaWRlcix0Lmh1ZS5waWNrZXIsdC5vcGFjaXR5LnNsaWRlcix0Lm9wYWNpdHkucGlja2VyXSxbXCJtb3VzZWRvd25cIixcInRvdWNoc3RhcnRcIl0sKCk9PnRoaXMuX3JlY2FsYz0hMCldO2lmKCFlLnNob3dBbHdheXMpe2NvbnN0IG49ZS5jbG9zZVdpdGhLZXk7by5wdXNoKGModC5idXR0b24sXCJjbGlja1wiLCgpPT50aGlzLmlzT3BlbigpP3RoaXMuaGlkZSgpOnRoaXMuc2hvdygpKSxjKGRvY3VtZW50LFwia2V5dXBcIix0PT50aGlzLmlzT3BlbigpJiYodC5rZXk9PT1ufHx0LmNvZGU9PT1uKSYmdGhpcy5oaWRlKCkpLGMoZG9jdW1lbnQsW1widG91Y2hzdGFydFwiLFwibW91c2Vkb3duXCJdLGU9Pnt0aGlzLmlzT3BlbigpJiYhaChlKS5zb21lKGU9PmU9PT10LmFwcHx8ZT09PXQuYnV0dG9uKSYmdGhpcy5oaWRlKCl9LHtjYXB0dXJlOiEwfSkpfWlmKGUuYWRqdXN0YWJsZU51bWJlcnMpe2NvbnN0IGU9e3JnYmE6WzI1NSwyNTUsMjU1LDFdLGhzdmE6WzM2MCwxMDAsMTAwLDFdLGhzbGE6WzM2MCwxMDAsMTAwLDFdLGNteWs6WzEwMCwxMDAsMTAwLDEwMF19O2YodC5pbnRlcmFjdGlvbi5yZXN1bHQsKHQsbyxuKT0+e2NvbnN0IGk9ZVt0aGlzLmdldENvbG9yUmVwcmVzZW50YXRpb24oKS50b0xvd2VyQ2FzZSgpXTtpZihpKXtjb25zdCBlPWlbbl0scj10KyhlPj0xMDA/MWUzKm86byk7cmV0dXJuIHI8PTA/MDpOdW1iZXIoKHI8ZT9yOmUpLnRvUHJlY2lzaW9uKDMpKX1yZXR1cm4gdH0pfWlmKGUuYXV0b1JlcG9zaXRpb24mJiFlLmlubGluZSl7bGV0IHQ9bnVsbDtjb25zdCBuPXRoaXM7by5wdXNoKGMod2luZG93LFtcInNjcm9sbFwiLFwicmVzaXplXCJdLCgpPT57bi5pc09wZW4oKSYmKGUuY2xvc2VPblNjcm9sbCYmbi5oaWRlKCksbnVsbD09PXQ/KHQ9c2V0VGltZW91dCgoKT0+dD1udWxsLDEwMCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbiBlKCl7bi5fcmVQb3NpdGlvbmluZ1BpY2tlcigpLG51bGwhPT10JiZyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZSl9KSkpOihjbGVhclRpbWVvdXQodCksdD1zZXRUaW1lb3V0KCgpPT50PW51bGwsMTAwKSkpfSx7Y2FwdHVyZTohMH0pKX10aGlzLl9ldmVudEJpbmRpbmdzPW99X3JlUG9zaXRpb25pbmdQaWNrZXIoKXtjb25zdHtvcHRpb25zOnR9PXRoaXM7dC5pbmxpbmV8fHRoaXMuX25hbm9wb3AudXBkYXRlKHQucG9zaXRpb24sIXRoaXMuX3JlY2FsYyl9X3VwZGF0ZU91dHB1dCgpe2NvbnN0e19yb290OnQsX2NvbG9yOmUsb3B0aW9uczpvfT10aGlzO2lmKHQuaW50ZXJhY3Rpb24udHlwZSgpKXtjb25zdCBuPVwidG9cIi5jb25jYXQodC5pbnRlcmFjdGlvbi50eXBlKCkuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpKTt0LmludGVyYWN0aW9uLnJlc3VsdC52YWx1ZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlW25dP2Vbbl0oKS50b1N0cmluZyhvLm91dHB1dFByZWNpc2lvbik6XCJcIn0hdGhpcy5faW5pdGlhbGl6aW5nQWN0aXZlJiZ0aGlzLl9yZWNhbGMmJnRoaXMuX2VtaXQoXCJjaGFuZ2VcIixlKX1fY2xlYXJDb2xvcih0PSExKXtjb25zdHtfcm9vdDplLG9wdGlvbnM6b309dGhpcztvLnVzZUFzQnV0dG9ufHwoZS5idXR0b24uc3R5bGUuY29sb3I9XCJyZ2JhKDAsIDAsIDAsIDAuMTUpXCIpLGUuYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGVhclwiKSxvLnNob3dBbHdheXN8fHRoaXMuaGlkZSgpLHRoaXMuX2xhc3RDb2xvcj1udWxsLHRoaXMuX2luaXRpYWxpemluZ0FjdGl2ZXx8dHx8KHRoaXMuX2VtaXQoXCJzYXZlXCIsbnVsbCksdGhpcy5fZW1pdChcImNsZWFyXCIsdGhpcykpfV9wYXJzZUxvY2FsQ29sb3IodCl7Y29uc3R7dmFsdWVzOmUsdHlwZTpvLGE6bn09Tyh0KSx7bG9ja09wYWNpdHk6aX09dGhpcy5vcHRpb25zLHI9dm9pZCAwIT09biYmMSE9PW47cmV0dXJuIGUmJjM9PT1lLmxlbmd0aCYmKGVbM109dm9pZCAwKSx7dmFsdWVzOiFlfHxpJiZyP251bGw6ZSx0eXBlOm99fV9lbWl0KHQsLi4uZSl7dGhpcy5fZXZlbnRMaXN0ZW5lclt0XS5mb3JFYWNoKHQ9PnQoLi4uZSx0aGlzKSl9X3QodCl7cmV0dXJuIHRoaXMub3B0aW9ucy5pMThuW3RdfHxELkkxOE5fREVGQVVMVFNbdF19b24odCxlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZcInN0cmluZ1wiPT10eXBlb2YgdCYmdCBpbiB0aGlzLl9ldmVudExpc3RlbmVyJiZ0aGlzLl9ldmVudExpc3RlbmVyW3RdLnB1c2goZSksdGhpc31vZmYodCxlKXtjb25zdCBvPXRoaXMuX2V2ZW50TGlzdGVuZXJbdF07aWYobyl7Y29uc3QgdD1vLmluZGV4T2YoZSk7fnQmJm8uc3BsaWNlKHQsMSl9cmV0dXJuIHRoaXN9YWRkU3dhdGNoKHQpe2NvbnN0e3ZhbHVlczplfT10aGlzLl9wYXJzZUxvY2FsQ29sb3IodCk7aWYoZSl7Y29uc3R7X3N3YXRjaENvbG9yczp0LF9yb290Om99PXRoaXMsbj1qKC4uLmUpLGk9cCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJjb2xvcjogJy5jb25jYXQobi50b1JHQkEoKS50b1N0cmluZygwKSwnXCIgYXJpYS1sYWJlbD1cIicpLmNvbmNhdCh0aGlzLl90KFwiYnRuOnN3YXRjaFwiKSwnXCIvPicpKTtyZXR1cm4gby5zd2F0Y2hlcy5hcHBlbmRDaGlsZChpKSx0LnB1c2goe2VsOmksY29sb3I6bn0pLHRoaXMuX2V2ZW50QmluZGluZ3MucHVzaChjKGksXCJjbGlja1wiLCgpPT57dGhpcy5zZXRIU1ZBKC4uLm4udG9IU1ZBKCksITApLHRoaXMuX2VtaXQoXCJzd2F0Y2hzZWxlY3RcIixuKSx0aGlzLl9lbWl0KFwiY2hhbmdlXCIsbil9KSksITB9cmV0dXJuITF9cmVtb3ZlU3dhdGNoKHQpe2NvbnN0IGU9dGhpcy5fc3dhdGNoQ29sb3JzW3RdO2lmKGUpe2NvbnN0e2VsOm99PWU7cmV0dXJuIHRoaXMuX3Jvb3Quc3dhdGNoZXMucmVtb3ZlQ2hpbGQobyksdGhpcy5fc3dhdGNoQ29sb3JzLnNwbGljZSh0LDEpLCEwfXJldHVybiExfWFwcGx5Q29sb3IodD0hMSl7Y29uc3R7cHJldmlldzplLGJ1dHRvbjpvfT10aGlzLl9yb290LG49dGhpcy5fY29sb3IudG9SR0JBKCkudG9TdHJpbmcoMCk7cmV0dXJuIGUubGFzdENvbG9yLnN0eWxlLmNvbG9yPW4sdGhpcy5vcHRpb25zLnVzZUFzQnV0dG9ufHwoby5zdHlsZS5jb2xvcj1uKSxvLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGVhclwiKSx0aGlzLl9sYXN0Q29sb3I9dGhpcy5fY29sb3IuY2xvbmUoKSx0aGlzLl9pbml0aWFsaXppbmdBY3RpdmV8fHR8fHRoaXMuX2VtaXQoXCJzYXZlXCIsdGhpcy5fY29sb3IpLHRoaXN9ZGVzdHJveSgpe3RoaXMuX2V2ZW50QmluZGluZ3MuZm9yRWFjaCh0PT5sKC4uLnQpKSxPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKS5mb3JFYWNoKHQ9PnRoaXMuX2NvbXBvbmVudHNbdF0uZGVzdHJveSgpKX1kZXN0cm95QW5kUmVtb3ZlKCl7dGhpcy5kZXN0cm95KCk7Y29uc3R7cm9vdDp0LGFwcDplfT10aGlzLl9yb290O3QucGFyZW50RWxlbWVudCYmdC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHQpLGUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlKSxPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKHQ9PnRoaXNbdF09bnVsbCl9aGlkZSgpe3JldHVybiB0aGlzLl9yb290LmFwcC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKSx0aGlzLl9lbWl0KFwiaGlkZVwiLHRoaXMpLHRoaXN9c2hvdygpe3JldHVybiB0aGlzLm9wdGlvbnMuZGlzYWJsZWR8fCh0aGlzLl9yb290LmFwcC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKSx0aGlzLl9yZVBvc2l0aW9uaW5nUGlja2VyKCksdGhpcy5fZW1pdChcInNob3dcIix0aGlzKSksdGhpc31pc09wZW4oKXtyZXR1cm4gdGhpcy5fcm9vdC5hcHAuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmlzaWJsZVwiKX1zZXRIU1ZBKHQ9MzYwLGU9MCxvPTAsbj0xLGk9ITEpe2NvbnN0IHI9dGhpcy5fcmVjYWxjO2lmKHRoaXMuX3JlY2FsYz0hMSx0PDB8fHQ+MzYwfHxlPDB8fGU+MTAwfHxvPDB8fG8+MTAwfHxuPDB8fG4+MSlyZXR1cm4hMTt0aGlzLl9jb2xvcj1qKHQsZSxvLG4pO2NvbnN0e2h1ZTpzLG9wYWNpdHk6YSxwYWxldHRlOmN9PXRoaXMuX2NvbXBvbmVudHM7cmV0dXJuIHMudXBkYXRlKHQvMzYwKSxhLnVwZGF0ZShuKSxjLnVwZGF0ZShlLzEwMCwxLW8vMTAwKSxpfHx0aGlzLmFwcGx5Q29sb3IoKSxyJiZ0aGlzLl91cGRhdGVPdXRwdXQoKSx0aGlzLl9yZWNhbGM9ciwhMH1zZXRDb2xvcih0LGU9ITEpe2lmKG51bGw9PT10KXJldHVybiB0aGlzLl9jbGVhckNvbG9yKGUpLCEwO2NvbnN0e3ZhbHVlczpvLHR5cGU6bn09dGhpcy5fcGFyc2VMb2NhbENvbG9yKHQpO2lmKG8pe2NvbnN0IHQ9bi50b1VwcGVyQ2FzZSgpLHtvcHRpb25zOml9PXRoaXMuX3Jvb3QuaW50ZXJhY3Rpb24scj1pLmZpbmQoZT0+ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIik9PT10KTtpZihyJiYhci5oaWRkZW4pZm9yKGNvbnN0IHQgb2YgaSl0LmNsYXNzTGlzdFt0PT09cj9cImFkZFwiOlwicmVtb3ZlXCJdKFwiYWN0aXZlXCIpO3JldHVybiEhdGhpcy5zZXRIU1ZBKC4uLm8sZSkmJnRoaXMuc2V0Q29sb3JSZXByZXNlbnRhdGlvbih0KX1yZXR1cm4hMX1zZXRDb2xvclJlcHJlc2VudGF0aW9uKHQpe3JldHVybiB0PXQudG9VcHBlckNhc2UoKSwhIXRoaXMuX3Jvb3QuaW50ZXJhY3Rpb24ub3B0aW9ucy5maW5kKGU9PmUuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpLnN0YXJ0c1dpdGgodCkmJiFlLmNsaWNrKCkpfWdldENvbG9yUmVwcmVzZW50YXRpb24oKXtyZXR1cm4gdGhpcy5fcmVwcmVzZW50YXRpb259Z2V0Q29sb3IoKXtyZXR1cm4gdGhpcy5fY29sb3J9Z2V0U2VsZWN0ZWRDb2xvcigpe3JldHVybiB0aGlzLl9sYXN0Q29sb3J9Z2V0Um9vdCgpe3JldHVybiB0aGlzLl9yb290fWRpc2FibGUoKXtyZXR1cm4gdGhpcy5oaWRlKCksdGhpcy5vcHRpb25zLmRpc2FibGVkPSEwLHRoaXMuX3Jvb3QuYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKSx0aGlzfWVuYWJsZSgpe3JldHVybiB0aGlzLm9wdGlvbnMuZGlzYWJsZWQ9ITEsdGhpcy5fcm9vdC5idXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpLHRoaXN9fUIoRCxcInV0aWxzXCIsbiksQihELFwibGlic1wiLHtIU1ZhQ29sb3I6aixNb3ZlYWJsZTp4LE5hbm9wb3A6UCxTZWxlY3RhYmxlOkx9KSxCKEQsXCJ2ZXJzaW9uXCIsYi5hKSxCKEQsXCJJMThOX0RFRkFVTFRTXCIse1widWk6ZGlhbG9nXCI6XCJjb2xvciBwaWNrZXIgZGlhbG9nXCIsXCJidG46dG9nZ2xlXCI6XCJ0b2dnbGUgY29sb3IgcGlja2VyIGRpYWxvZ1wiLFwiYnRuOnN3YXRjaFwiOlwiY29sb3Igc3dhdGNoXCIsXCJidG46bGFzdC1jb2xvclwiOlwidXNlIHByZXZpb3VzIGNvbG9yXCIsXCJidG46c2F2ZVwiOlwiU2F2ZVwiLFwiYnRuOmNhbmNlbFwiOlwiQ2FuY2VsXCIsXCJidG46Y2xlYXJcIjpcIkNsZWFyXCIsXCJhcmlhOmJ0bjpzYXZlXCI6XCJzYXZlIGFuZCBjbG9zZVwiLFwiYXJpYTpidG46Y2FuY2VsXCI6XCJjYW5jZWwgYW5kIGNsb3NlXCIsXCJhcmlhOmJ0bjpjbGVhclwiOlwiY2xlYXIgYW5kIGNsb3NlXCIsXCJhcmlhOmlucHV0XCI6XCJjb2xvciBpbnB1dCBmaWVsZFwiLFwiYXJpYTpwYWxldHRlXCI6XCJjb2xvciBzZWxlY3Rpb24gYXJlYVwiLFwiYXJpYTpodWVcIjpcImh1ZSBzZWxlY3Rpb24gc2xpZGVyXCIsXCJhcmlhOm9wYWNpdHlcIjpcInNlbGVjdGlvbiBzbGlkZXJcIn0pLEIoRCxcImNyZWF0ZVwiLHQ9Pm5ldyBEKHQpKTtlLmRlZmF1bHQ9RH1dKS5kZWZhdWx0fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGlja3IubWluLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> f9ffe5bbc4d5936f583e376ac2634d1705323996
