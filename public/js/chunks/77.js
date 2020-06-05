(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customize.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Customize.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  head: {
    title: function title() {
      return {
        inner: 'Customize'
      };
    }
  },
  data: function data() {
    return {
      theme: {},
      preview: '',
      url: '',
      hasChanges: false,
      window: 'desktop',
      showControls: true
    };
  },
  computed: {
    hash: function hash() {
      return this.encode(JSON.stringify(this.theme.option));
    },
    previewUrl: function previewUrl() {
      return this.baseUrl + this.url + '?preview=' + this.hash;
    },
    baseUrl: function baseUrl() {
      return '/';
    },
    isDesktop: function isDesktop() {
      return this.window == 'desktop';
    },
    isTablet: function isTablet() {
      return this.window == 'tablet';
    },
    isMobile: function isMobile() {
      return this.window == 'mobile';
    }
  },
  watch: {
    'theme.option': {
      handler: _.debounce(function () {
        this.hasChanges = true;
        this.reload();
      }, 500),
      deep: true
    },
    'url': {
      handler: _.debounce(function () {
        this.reload();
      }, 500)
    }
  },
  methods: {
    submit: function submit() {
      this.theme.option['_method'] = 'PATCH';
      axios.post("/api/themes/".concat(this.theme.namespace), this.theme.option).then(function () {
        toast('Theme options have been updated', 'success');
      })["catch"](function (error) {
        toast(error.response.data.message, 'failed');
      });
    },
    encode: function encode(string) {
      return encodeURIComponent(string).replace(/[!'()*]/g, escape);
    },
    reload: function reload() {
      this.preview = this.previewUrl;
    },
    setWindow: function setWindow(device) {
      this.window = device;
    },
    toggleControls: function toggleControls() {
      this.showControls = !this.showControls;
      this.$nextTick(function () {
        if (this.showControls) {
          this.$refs['hide-controls'].focus();
        } else {
          this.$refs['show-controls'].focus();
        }
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/theme')]).then(axios.spread(function (theme) {
      next(function (vm) {
        vm.theme = theme.data.data;
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customize.vue?vue&type=template&id=7bb044b4&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Customize.vue?vue&type=template&id=7bb044b4& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "preview" }, [
    _c(
      "div",
      {
        staticClass: "preview__controls",
        class: { "w-0 border-0": !_vm.showControls },
        attrs: { "aria-hidden": !_vm.showControls }
      },
      [
        _c(
          "button",
          {
            ref: "show-controls",
            staticClass: "simple-button show-controls-button",
            class: {
              hidden: _vm.showControls,
              "inline-block": !_vm.showControls
            },
            on: { click: _vm.toggleControls }
          },
          [
            _c("fa-icon", {
              staticClass: "fa-fw",
              attrs: { icon: ["fas", "caret-square-right"] }
            }),
            _vm._v(" Show Controls")
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "controls", class: { hidden: !_vm.showControls } },
          [
            _c(
              "div",
              { staticClass: "controls__header" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "flex items-center px-3 py-2 border-r border-gray-300 leading-none",
                    attrs: { exact: "", to: { name: "dashboard" } }
                  },
                  [
                    _c("fa-icon", {
                      staticClass: "fa-fw",
                      attrs: { icon: ["fas", "times"] }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "px-3 py-3" }, [
                  _c(
                    "button",
                    {
                      staticClass: "button button--primary button--small",
                      attrs: { type: "submit" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.submit($event)
                        }
                      }
                    },
                    [_vm._v("Save")]
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "controls__content" },
              [
                _c(
                  "p-accordion",
                  { attrs: { multiple: true } },
                  _vm._l(_vm.theme.options, function(section, handle) {
                    return _c(
                      "p-accordion-item",
                      { key: section.handle, attrs: { title: section.name } },
                      [
                        _c(
                          "div",
                          { staticClass: "p-3" },
                          [
                            section.description
                              ? _c("p", { staticClass: "text-sm" }, [
                                  _vm._v(_vm._s(section.description))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._l(section.fields, function(
                              field,
                              fieldHandle
                            ) {
                              return _c(field.fieldtype + "-fieldtype", {
                                key: fieldHandle,
                                tag: "component",
                                staticClass: "mb-8",
                                attrs: {
                                  field: {
                                    name: field.name,
                                    handle: handle,
                                    help: field.help,
                                    settings: {}
                                  }
                                },
                                model: {
                                  value: _vm.theme.option[handle][fieldHandle],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.theme.option[handle],
                                      fieldHandle,
                                      $$v
                                    )
                                  },
                                  expression:
                                    "theme.option[handle][fieldHandle]"
                                }
                              })
                            })
                          ],
                          2
                        )
                      ]
                    )
                  }),
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "controls__footer" }, [
              _c(
                "button",
                {
                  ref: "hide-controls",
                  staticClass: "simple-button hide-controls-button",
                  on: { click: _vm.toggleControls }
                },
                [
                  _c("fa-icon", {
                    staticClass: "fa-fw",
                    attrs: { icon: ["fas", "caret-square-left"] }
                  }),
                  _vm._v(" Hide Controls")
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "flex border-l border-gray-300" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "simple-button relative inline-flex items-center px-3 py-2 border-b-4 border-gray-300 hover:border-gray-500",
                    class: {
                      "hover:border-primary-500 border-primary-500":
                        _vm.isDesktop
                    },
                    on: {
                      click: function($event) {
                        return _vm.setWindow("desktop")
                      }
                    }
                  },
                  [
                    _c("fa-icon", {
                      staticClass: "fa-fw",
                      attrs: { icon: ["fas", "desktop"] }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "simple-button relative inline-flex items-center px-3 py-2 border-b-4 border-gray-300 hover:border-gray-500",
                    class: {
                      "hover:border-primary-500 border-primary-500":
                        _vm.isTablet
                    },
                    on: {
                      click: function($event) {
                        return _vm.setWindow("tablet")
                      }
                    }
                  },
                  [
                    _c("fa-icon", {
                      staticClass: "fa-fw",
                      attrs: { icon: ["fas", "tablet-alt"] }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "simple-button relative inline-flex items-center px-3 py-2 border-b-4 border-gray-300 hover:border-gray-500",
                    class: {
                      "hover:border-primary-500 border-primary-500":
                        _vm.isMobile
                    },
                    on: {
                      click: function($event) {
                        return _vm.setWindow("mobile")
                      }
                    }
                  },
                  [
                    _c("fa-icon", {
                      staticClass: "fa-fw",
                      attrs: { icon: ["fas", "mobile-alt"] }
                    })
                  ],
                  1
                )
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "preview__window" }, [
      _vm.preview
        ? _c(
            "div",
            { staticClass: "window", class: "window--" + _vm.window },
            [
              _vm._v(" -->\n            "),
              _c("p-frame", { attrs: { src: _vm.preview } })
            ],
            1
          )
        : _c(
            "div",
            {
              staticClass:
                "bg-white py-1 px-3 rounded-lg bg-gray-800 text-white uppercase font-bold text-sm tracking-wide"
            },
            [_vm._v("Loading...")]
          )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Customize.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Customize.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Customize_vue_vue_type_template_id_7bb044b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customize.vue?vue&type=template&id=7bb044b4& */ "./resources/js/views/Customize.vue?vue&type=template&id=7bb044b4&");
/* harmony import */ var _Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customize.vue?vue&type=script&lang=js& */ "./resources/js/views/Customize.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Customize_vue_vue_type_template_id_7bb044b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Customize_vue_vue_type_template_id_7bb044b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Customize.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Customize.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Customize.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Customize.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customize.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Customize.vue?vue&type=template&id=7bb044b4&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Customize.vue?vue&type=template&id=7bb044b4& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_template_id_7bb044b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Customize.vue?vue&type=template&id=7bb044b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customize.vue?vue&type=template&id=7bb044b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_template_id_7bb044b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_template_id_7bb044b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0N1c3RvbWl6ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0N1c3RvbWl6ZS52dWU/NjNhZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ3VzdG9taXplLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ3VzdG9taXplLnZ1ZT8wNjg5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9DdXN0b21pemUudnVlPzQ5NTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RUE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxlQURBO0FBRUEsaUJBRkE7QUFHQSxhQUhBO0FBSUEsdUJBSkE7QUFLQSx1QkFMQTtBQU1BO0FBTkE7QUFRQSxHQWxCQTtBQW9CQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFLQSxjQUxBLHdCQUtBO0FBQ0E7QUFDQSxLQVBBO0FBU0EsV0FUQSxxQkFTQTtBQUNBO0FBQ0EsS0FYQTtBQWFBLGFBYkEsdUJBYUE7QUFDQTtBQUNBLEtBZkE7QUFpQkEsWUFqQkEsc0JBaUJBO0FBQ0E7QUFDQSxLQW5CQTtBQXFCQSxZQXJCQSxzQkFxQkE7QUFDQTtBQUNBO0FBdkJBLEdBcEJBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLEVBR0EsR0FIQSxDQURBO0FBTUE7QUFOQSxLQURBO0FBVUE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFEQTtBQVZBLEdBOUNBO0FBK0RBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBO0FBRUE7QUFDQTtBQUNB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Q0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlDQUFpQztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxhQUFhLHdEQUF3RDtBQUNyRTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsbUJBQW1CLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0UUE7QUFBQTtBQUFBO0FBQUE7QUFBd0Y7QUFDM0I7QUFDTDs7O0FBR3hEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXlMLENBQWdCLHFQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTdNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvNzcuanM/aWQ9NzVlYjVlMmNmMjU0OGZmZTY5YjYiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInByZXZpZXdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdfX2NvbnRyb2xzXCIgOmFyaWEtaGlkZGVuPVwiIXNob3dDb250cm9sc1wiIDpjbGFzcz1cInsndy0wIGJvcmRlci0wJzogIXNob3dDb250cm9sc31cIj5cbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidG9nZ2xlQ29udHJvbHNcIiByZWY9XCJzaG93LWNvbnRyb2xzXCIgY2xhc3M9XCJzaW1wbGUtYnV0dG9uIHNob3ctY29udHJvbHMtYnV0dG9uXCIgOmNsYXNzPVwieydoaWRkZW4nOiBzaG93Q29udHJvbHMsICdpbmxpbmUtYmxvY2snOiAhc2hvd0NvbnRyb2xzfVwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2FyZXQtc3F1YXJlLXJpZ2h0J11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPiBTaG93IENvbnRyb2xzPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIiA6Y2xhc3M9XCJ7J2hpZGRlbic6ICFzaG93Q29udHJvbHN9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IDp0bz1cInsgbmFtZTogJ2Rhc2hib2FyZCcgfVwiIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1yIGJvcmRlci1ncmF5LTMwMCBsZWFkaW5nLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndGltZXMnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTMgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgQGNsaWNrLnByZXZlbnQ9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgYnV0dG9uLS1zbWFsbFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYWNjb3JkaW9uIDptdWx0aXBsZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWFjY29yZGlvbi1pdGVtIHYtZm9yPVwiKHNlY3Rpb24sIGhhbmRsZSkgaW4gdGhlbWUub3B0aW9uc1wiIDprZXk9XCJzZWN0aW9uLmhhbmRsZVwiIDp0aXRsZT1cInNlY3Rpb24ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtXCIgdi1pZj1cInNlY3Rpb24uZGVzY3JpcHRpb25cIj57eyBzZWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEhhbmRsZSkgaW4gc2VjdGlvbi5maWVsZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRoZW1lLm9wdGlvbltoYW5kbGVdW2ZpZWxkSGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRIYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlzPVwiZmllbGQuZmllbGR0eXBlICsgJy1maWVsZHR5cGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZD1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IGZpZWxkLmhlbHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1hY2NvcmRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNfX2Zvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInRvZ2dsZUNvbnRyb2xzXCIgcmVmPVwiaGlkZS1jb250cm9sc1wiIGNsYXNzPVwic2ltcGxlLWJ1dHRvbiBoaWRlLWNvbnRyb2xzLWJ1dHRvblwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2FyZXQtc3F1YXJlLWxlZnQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+IEhpZGUgQ29udHJvbHM8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBib3JkZXItbCBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2V0V2luZG93KCdkZXNrdG9wJylcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gcmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItYi00IGJvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItZ3JheS01MDBcIiA6Y2xhc3M9XCJ7J2hvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDAnOiBpc0Rlc2t0b3B9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdkZXNrdG9wJ11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2V0V2luZG93KCd0YWJsZXQnKVwiIGNsYXNzPVwic2ltcGxlLWJ1dHRvbiByZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1iLTQgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMFwiIDpjbGFzcz1cInsnaG92ZXI6Ym9yZGVyLXByaW1hcnktNTAwIGJvcmRlci1wcmltYXJ5LTUwMCc6IGlzVGFibGV0fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndGFibGV0LWFsdCddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNldFdpbmRvdygnbW9iaWxlJylcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gcmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItYi00IGJvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItZ3JheS01MDBcIiA6Y2xhc3M9XCJ7J2hvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDAnOiBpc01vYmlsZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ21vYmlsZS1hbHQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdfX3dpbmRvd1wiPlxuXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJwcmV2aWV3XCIgY2xhc3M9XCJ3aW5kb3dcIiA6Y2xhc3M9XCInd2luZG93LS0nICsgd2luZG93XCI+IC0tPlxuICAgICAgICAgICAgICAgIDxwLWZyYW1lXG4gICAgICAgICAgICAgICAgICAgIDpzcmM9XCJwcmV2aWV3XCJcbiAgICAgICAgICAgICAgICA+PC9wLWZyYW1lPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwiYmctd2hpdGUgcHktMSBweC0zIHJvdW5kZWQtbGcgYmctZ3JheS04MDAgdGV4dC13aGl0ZSB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtc20gdHJhY2tpbmctd2lkZVwiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6ICdDdXN0b21pemUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRoZW1lOiB7fSxcbiAgICAgICAgICAgICAgICBwcmV2aWV3OiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgIGhhc0NoYW5nZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdpbmRvdzogJ2Rlc2t0b3AnLFxuICAgICAgICAgICAgICAgIHNob3dDb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaGFzaCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodGhpcy50aGVtZS5vcHRpb24pKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcHJldmlld1VybCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsICsgdGhpcy51cmwgKyAnP3ByZXZpZXc9JyArIHRoaXMuaGFzaFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYmFzZVVybCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy8nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc0Rlc2t0b3AoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luZG93ID09ICdkZXNrdG9wJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNUYWJsZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luZG93ID09ICd0YWJsZXQnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc01vYmlsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aW5kb3cgPT0gJ21vYmlsZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICd0aGVtZS5vcHRpb24nOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogXy5kZWJvdW5jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWxvYWQoKVxuICAgICAgICAgICAgICAgIH0sIDUwMCksXG5cbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAndXJsJzoge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6IF8uZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVsb2FkKClcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW1lLm9wdGlvblsnX21ldGhvZCddID0gJ1BBVENIJ1xuXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwaS90aGVtZXMvJHt0aGlzLnRoZW1lLm5hbWVzcGFjZX1gLCB0aGlzLnRoZW1lLm9wdGlvbikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdUaGVtZSBvcHRpb25zIGhhdmUgYmVlbiB1cGRhdGVkJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBlbmNvZGUoc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmcpLnJlcGxhY2UoL1shJygpKl0vZywgZXNjYXBlKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlbG9hZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXcgPSB0aGlzLnByZXZpZXdVcmxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldFdpbmRvdyhkZXZpY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmRvdyA9IGRldmljZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdG9nZ2xlQ29udHJvbHMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSAhdGhpcy5zaG93Q29udHJvbHNcblxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q29udHJvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ2hpZGUtY29udHJvbHMnXS5mb2N1cygpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzWydzaG93LWNvbnRyb2xzJ10uZm9jdXMoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90aGVtZScpLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgbmV4dChmdW5jdGlvbih2bSkge1xuICAgICAgICAgICAgICAgICAgICB2bS50aGVtZSA9IHRoZW1lLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJldmlld1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInByZXZpZXdfX2NvbnRyb2xzXCIsXG4gICAgICAgIGNsYXNzOiB7IFwidy0wIGJvcmRlci0wXCI6ICFfdm0uc2hvd0NvbnRyb2xzIH0sXG4gICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogIV92bS5zaG93Q29udHJvbHMgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZWY6IFwic2hvdy1jb250cm9sc1wiLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2ltcGxlLWJ1dHRvbiBzaG93LWNvbnRyb2xzLWJ1dHRvblwiLFxuICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgaGlkZGVuOiBfdm0uc2hvd0NvbnRyb2xzLFxuICAgICAgICAgICAgICBcImlubGluZS1ibG9ja1wiOiAhX3ZtLnNob3dDb250cm9sc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9nZ2xlQ29udHJvbHMgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2FyZXQtc3F1YXJlLXJpZ2h0XCJdIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFNob3cgQ29udHJvbHNcIilcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzXCIsIGNsYXNzOiB7IGhpZGRlbjogIV92bS5zaG93Q29udHJvbHMgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzX19oZWFkZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1yIGJvcmRlci1ncmF5LTMwMCBsZWFkaW5nLW5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZXhhY3Q6IFwiXCIsIHRvOiB7IG5hbWU6IFwiZGFzaGJvYXJkXCIgfSB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGltZXNcIl0gfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweC0zIHB5LTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnkgYnV0dG9uLS1zbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzX19jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJwLWFjY29yZGlvblwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtdWx0aXBsZTogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRoZW1lLm9wdGlvbnMsIGZ1bmN0aW9uKHNlY3Rpb24sIGhhbmRsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJwLWFjY29yZGlvbi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHNlY3Rpb24uaGFuZGxlLCBhdHRyczogeyB0aXRsZTogc2VjdGlvbi5uYW1lIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Moc2VjdGlvbi5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHNlY3Rpb24uZmllbGRzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRIYW5kbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhmaWVsZC5maWVsZHR5cGUgKyBcIi1maWVsZHR5cGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDogZmllbGQuaGVscCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRoZW1lLm9wdGlvbltoYW5kbGVdW2ZpZWxkSGFuZGxlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRoZW1lLm9wdGlvbltoYW5kbGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZEhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aGVtZS5vcHRpb25baGFuZGxlXVtmaWVsZEhhbmRsZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzX19mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcImhpZGUtY29udHJvbHNcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpbXBsZS1idXR0b24gaGlkZS1jb250cm9scy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9nZ2xlQ29udHJvbHMgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2FyZXQtc3F1YXJlLWxlZnRcIl0gfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgSGlkZSBDb250cm9sc1wiKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggYm9yZGVyLWwgYm9yZGVyLWdyYXktMzAwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJzaW1wbGUtYnV0dG9uIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLWItNCBib3JkZXItZ3JheS0zMDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJob3Zlcjpib3JkZXItcHJpbWFyeS01MDAgYm9yZGVyLXByaW1hcnktNTAwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNEZXNrdG9wXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXRXaW5kb3coXCJkZXNrdG9wXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiZGVza3RvcFwiXSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwic2ltcGxlLWJ1dHRvbiByZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1iLTQgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiaG92ZXI6Ym9yZGVyLXByaW1hcnktNTAwIGJvcmRlci1wcmltYXJ5LTUwMFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzVGFibGV0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXRXaW5kb3coXCJ0YWJsZXRcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ0YWJsZXQtYWx0XCJdIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJzaW1wbGUtYnV0dG9uIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLWItNCBib3JkZXItZ3JheS0zMDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJob3Zlcjpib3JkZXItcHJpbWFyeS01MDAgYm9yZGVyLXByaW1hcnktNTAwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNNb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldFdpbmRvdyhcIm1vYmlsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcIm1vYmlsZS1hbHRcIl0gfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByZXZpZXdfX3dpbmRvd1wiIH0sIFtcbiAgICAgIF92bS5wcmV2aWV3XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3aW5kb3dcIiwgY2xhc3M6IFwid2luZG93LS1cIiArIF92bS53aW5kb3cgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIC0tPlxcbiAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwLWZyYW1lXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ucHJldmlldyB9IH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiYmctd2hpdGUgcHktMSBweC0zIHJvdW5kZWQtbGcgYmctZ3JheS04MDAgdGV4dC13aGl0ZSB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtc20gdHJhY2tpbmctd2lkZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkxvYWRpbmcuLi5cIildXG4gICAgICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYjA0NGI0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdiYjA0NGI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdiYjA0NGI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdiYjA0NGI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYjA0NGI0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdiYjA0NGI0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvQ3VzdG9taXplLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3VzdG9taXplLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2JiMDQ0YjQmXCIiXSwic291cmNlUm9vdCI6IiJ9