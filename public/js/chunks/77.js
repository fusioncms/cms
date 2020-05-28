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
        inner: 'Theme Settings'
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
      return this.encode(JSON.stringify(this.theme.value));
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
    'theme.value': {
      handler: _.debounce(function (value) {
        this.hasChanges = true;
        this.reload();
      }, 500),
      deep: true
    },
    'url': {
      handler: _.debounce(function (value) {
        this.reload();
      }, 500)
    }
  },
  methods: {
    submit: function submit() {
      this.theme.value['_method'] = 'PATCH';
      axios.post("/api/themes/".concat(this.theme.namespace), this.theme.value).then(function () {
        toast('Theme settings have been updated', 'success');
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
      { staticClass: "preview__controls", class: { "w-0": !_vm.showControls } },
      [
        _c(
          "button",
          {
            staticClass: "simple-button show-button p-3",
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
                  _vm._l(_vm.theme.settings, function(section, handle) {
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
                                  value: _vm.theme.value[handle][fieldHandle],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.theme.value[handle],
                                      fieldHandle,
                                      $$v
                                    )
                                  },
                                  expression: "theme.value[handle][fieldHandle]"
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
                  staticClass: "simple-button p-3",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0N1c3RvbWl6ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0N1c3RvbWl6ZS52dWU/NjNhZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ3VzdG9taXplLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ3VzdG9taXplLnZ1ZT8wNjg5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9DdXN0b21pemUudnVlPzQ5NTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZGQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBLGVBREE7QUFFQSxpQkFGQTtBQUdBLGFBSEE7QUFJQSx1QkFKQTtBQUtBLHVCQUxBO0FBTUE7QUFOQTtBQVFBLEdBbEJBO0FBb0JBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLGNBTEEsd0JBS0E7QUFDQTtBQUNBLEtBUEE7QUFTQSxXQVRBLHFCQVNBO0FBQ0E7QUFDQSxLQVhBO0FBYUEsYUFiQSx1QkFhQTtBQUNBO0FBQ0EsS0FmQTtBQWlCQSxZQWpCQSxzQkFpQkE7QUFDQTtBQUNBLEtBbkJBO0FBcUJBLFlBckJBLHNCQXFCQTtBQUNBO0FBQ0E7QUF2QkEsR0FwQkE7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsRUFHQSxHQUhBLENBREE7QUFNQTtBQU5BLEtBREE7QUFVQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQURBO0FBVkEsR0E5Q0E7QUErREE7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsT0FGQSxXQUdBO0FBQ0E7QUFDQSxPQUxBO0FBTUEsS0FWQTtBQVlBLFVBWkEsa0JBWUEsTUFaQSxFQVlBO0FBQ0E7QUFDQSxLQWRBO0FBZ0JBLFVBaEJBLG9CQWdCQTtBQUNBO0FBQ0EsS0FsQkE7QUFvQkEsYUFwQkEscUJBb0JBLE1BcEJBLEVBb0JBO0FBQ0E7QUFDQSxLQXRCQTtBQXdCQSxrQkF4QkEsNEJBd0JBO0FBQ0E7QUFDQTtBQTFCQSxHQS9EQTtBQTRGQSxrQkE1RkEsNEJBNEZBLEVBNUZBLEVBNEZBLElBNUZBLEVBNEZBLElBNUZBLEVBNEZBO0FBQ0EsZUFDQSx1QkFEQSxHQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FKQSxDQUZBO0FBT0E7QUFwR0EsRzs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0EsT0FBTywyQ0FBMkMsMkJBQTJCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtDQUFrQyw0QkFBNEIsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtDQUFrQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCLG9CQUFvQjtBQUNqRSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyxpQkFBaUIsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOEJBQThCLHNCQUFzQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTtBQUNBLHlDQUF5Qyx5QkFBeUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQ0FBa0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrQ0FBK0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQ0FBaUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3REFBd0Q7QUFDckU7QUFDQTtBQUNBLDZCQUE2QixTQUFTLG1CQUFtQixFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL1BBO0FBQUE7QUFBQTtBQUFBO0FBQXdGO0FBQzNCO0FBQ0w7OztBQUd4RDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsb0ZBQU07QUFDUixFQUFFLDZGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF5TCxDQUFnQixxUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzc3LmpzP2lkPTExMWMxNDMwNDAwZDFmZmEyODljIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3X19jb250cm9sc1wiIDpjbGFzcz1cInsndy0wJzogIXNob3dDb250cm9sc31cIj5cbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidG9nZ2xlQ29udHJvbHNcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gc2hvdy1idXR0b24gcC0zXCIgOmNsYXNzPVwieydoaWRkZW4nOiBzaG93Q29udHJvbHMsICdpbmxpbmUtYmxvY2snOiAhc2hvd0NvbnRyb2xzfVwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2FyZXQtc3F1YXJlLXJpZ2h0J11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPiBTaG93IENvbnRyb2xzPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIiA6Y2xhc3M9XCJ7J2hpZGRlbic6ICFzaG93Q29udHJvbHN9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IDp0bz1cInsgbmFtZTogJ2Rhc2hib2FyZCcgfVwiIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1yIGJvcmRlci1ncmF5LTMwMCBsZWFkaW5nLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndGltZXMnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTMgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgQGNsaWNrLnByZXZlbnQ9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgYnV0dG9uLS1zbWFsbFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYWNjb3JkaW9uIDptdWx0aXBsZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWFjY29yZGlvbi1pdGVtIHYtZm9yPVwiKHNlY3Rpb24sIGhhbmRsZSkgaW4gdGhlbWUuc2V0dGluZ3NcIiA6a2V5PVwic2VjdGlvbi5oYW5kbGVcIiA6dGl0bGU9XCJzZWN0aW9uLm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiIHYtaWY9XCJzZWN0aW9uLmRlc2NyaXB0aW9uXCI+e3sgc2VjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihmaWVsZCwgZmllbGRIYW5kbGUpIGluIHNlY3Rpb24uZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0aGVtZS52YWx1ZVtoYW5kbGVdW2ZpZWxkSGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRIYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlzPVwiZmllbGQuZmllbGR0eXBlICsgJy1maWVsZHR5cGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZD1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IGZpZWxkLmhlbHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1hY2NvcmRpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2IHYtZm9yPVwiKHNlY3Rpb24sIGhhbmRsZSkgaW4gdGhlbWUuc2V0dGluZ3NcIiA6a2V5PVwic2VjdGlvbi5oYW5kbGUgKyAnLWN1c3RvbSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1jb2xsYXBzZT1cInNlY3Rpb24uaGFuZGxlXCIgY2xhc3M9XCJzaW1wbGUtYnV0dG9uIHJvdW5kZWQgcC0yIG1iLTMgdGV4dC1sZWZ0IHctZnVsbCB0ZXh0LWdyYXktMTAwIGJnLWdyYXktOTAwIGxlYWRpbmctbm9uZSB0ZXh0LWxnIGZvbnQtYm9sZFwiPnt7IHNlY3Rpb24ubmFtZSB9fTwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1jb2xsYXBzZSA6bmFtZT1cInNlY3Rpb24uaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihmaWVsZCwgZmllbGRIYW5kbGUpIGluIHNlY3Rpb24uZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRoZW1lLnZhbHVlW2hhbmRsZV1bZmllbGRIYW5kbGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSGFuZGxlICsgJy1jdXN0b20nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlzPVwiZmllbGQuZmllbGR0eXBlICsgJy1maWVsZHR5cGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDogZmllbGQuaGVscCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvY29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWNvbGxhcHNlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNfX2Zvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInRvZ2dsZUNvbnRyb2xzXCIgY2xhc3M9XCJzaW1wbGUtYnV0dG9uIHAtM1wiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2FyZXQtc3F1YXJlLWxlZnQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+IEhpZGUgQ29udHJvbHM8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBib3JkZXItbCBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2V0V2luZG93KCdkZXNrdG9wJylcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gcmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItYi00IGJvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItZ3JheS01MDBcIiA6Y2xhc3M9XCJ7J2hvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDAnOiBpc0Rlc2t0b3B9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdkZXNrdG9wJ11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2V0V2luZG93KCd0YWJsZXQnKVwiIGNsYXNzPVwic2ltcGxlLWJ1dHRvbiByZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1iLTQgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMFwiIDpjbGFzcz1cInsnaG92ZXI6Ym9yZGVyLXByaW1hcnktNTAwIGJvcmRlci1wcmltYXJ5LTUwMCc6IGlzVGFibGV0fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndGFibGV0LWFsdCddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNldFdpbmRvdygnbW9iaWxlJylcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gcmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItYi00IGJvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItZ3JheS01MDBcIiA6Y2xhc3M9XCJ7J2hvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDAnOiBpc01vYmlsZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ21vYmlsZS1hbHQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdfX3dpbmRvd1wiPlxuXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJwcmV2aWV3XCIgY2xhc3M9XCJ3aW5kb3dcIiA6Y2xhc3M9XCInd2luZG93LS0nICsgd2luZG93XCI+IC0tPlxuICAgICAgICAgICAgICAgIDxwLWZyYW1lXG4gICAgICAgICAgICAgICAgICAgIDpzcmM9XCJwcmV2aWV3XCJcbiAgICAgICAgICAgICAgICA+PC9wLWZyYW1lPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwiYmctd2hpdGUgcHktMSBweC0zIHJvdW5kZWQtbGcgYmctZ3JheS04MDAgdGV4dC13aGl0ZSB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtc20gdHJhY2tpbmctd2lkZVwiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6ICdUaGVtZSBTZXR0aW5ncydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGhlbWU6IHt9LFxuICAgICAgICAgICAgICAgIHByZXZpZXc6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2luZG93OiAnZGVza3RvcCcsXG4gICAgICAgICAgICAgICAgc2hvd0NvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBoYXNoKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZShKU09OLnN0cmluZ2lmeSh0aGlzLnRoZW1lLnZhbHVlKSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHByZXZpZXdVcmwoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybCArIHRoaXMudXJsICsgJz9wcmV2aWV3PScgKyB0aGlzLmhhc2hcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGJhc2VVcmwoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcvJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNEZXNrdG9wKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndpbmRvdyA9PSAnZGVza3RvcCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzVGFibGV0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndpbmRvdyA9PSAndGFibGV0J1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNNb2JpbGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luZG93ID09ICdtb2JpbGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICAndGhlbWUudmFsdWUnOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogXy5kZWJvdW5jZShmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfSwgNTAwKSxcblxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICd1cmwnOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogXy5kZWJvdW5jZShmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVtZS52YWx1ZVsnX21ldGhvZCddID0gJ1BBVENIJ1xuXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwaS90aGVtZXMvJHt0aGlzLnRoZW1lLm5hbWVzcGFjZX1gLCB0aGlzLnRoZW1lLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ1RoZW1lIHNldHRpbmdzIGhhdmUgYmVlbiB1cGRhdGVkJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBlbmNvZGUoc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmcpLnJlcGxhY2UoL1shJygpKl0vZywgZXNjYXBlKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlbG9hZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXcgPSB0aGlzLnByZXZpZXdVcmxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldFdpbmRvdyhkZXZpY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmRvdyA9IGRldmljZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdG9nZ2xlQ29udHJvbHMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSAhdGhpcy5zaG93Q29udHJvbHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90aGVtZScpLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgbmV4dChmdW5jdGlvbih2bSkge1xuICAgICAgICAgICAgICAgICAgICB2bS50aGVtZSA9IHRoZW1lLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJldmlld1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInByZXZpZXdfX2NvbnRyb2xzXCIsIGNsYXNzOiB7IFwidy0wXCI6ICFfdm0uc2hvd0NvbnRyb2xzIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaW1wbGUtYnV0dG9uIHNob3ctYnV0dG9uIHAtM1wiLFxuICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgaGlkZGVuOiBfdm0uc2hvd0NvbnRyb2xzLFxuICAgICAgICAgICAgICBcImlubGluZS1ibG9ja1wiOiAhX3ZtLnNob3dDb250cm9sc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9nZ2xlQ29udHJvbHMgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2FyZXQtc3F1YXJlLXJpZ2h0XCJdIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFNob3cgQ29udHJvbHNcIilcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzXCIsIGNsYXNzOiB7IGhpZGRlbjogIV92bS5zaG93Q29udHJvbHMgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzX19oZWFkZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1yIGJvcmRlci1ncmF5LTMwMCBsZWFkaW5nLW5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZXhhY3Q6IFwiXCIsIHRvOiB7IG5hbWU6IFwiZGFzaGJvYXJkXCIgfSB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGltZXNcIl0gfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweC0zIHB5LTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnkgYnV0dG9uLS1zbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzX19jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJwLWFjY29yZGlvblwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtdWx0aXBsZTogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRoZW1lLnNldHRpbmdzLCBmdW5jdGlvbihzZWN0aW9uLCBoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicC1hY2NvcmRpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBzZWN0aW9uLmhhbmRsZSwgYXR0cnM6IHsgdGl0bGU6IHNlY3Rpb24ubmFtZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb24uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHNlY3Rpb24uZGVzY3JpcHRpb24pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChzZWN0aW9uLmZpZWxkcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSGFuZGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoZmllbGQuZmllbGR0eXBlICsgXCItZmllbGR0eXBlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi04XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IGZpZWxkLmhlbHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50aGVtZS52YWx1ZVtoYW5kbGVdW2ZpZWxkSGFuZGxlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRoZW1lLnZhbHVlW2hhbmRsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGhlbWUudmFsdWVbaGFuZGxlXVtmaWVsZEhhbmRsZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzX19mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2ltcGxlLWJ1dHRvbiBwLTNcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9nZ2xlQ29udHJvbHMgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2FyZXQtc3F1YXJlLWxlZnRcIl0gfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgSGlkZSBDb250cm9sc1wiKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggYm9yZGVyLWwgYm9yZGVyLWdyYXktMzAwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJzaW1wbGUtYnV0dG9uIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLWItNCBib3JkZXItZ3JheS0zMDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJob3Zlcjpib3JkZXItcHJpbWFyeS01MDAgYm9yZGVyLXByaW1hcnktNTAwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNEZXNrdG9wXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXRXaW5kb3coXCJkZXNrdG9wXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiZGVza3RvcFwiXSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwic2ltcGxlLWJ1dHRvbiByZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1iLTQgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiaG92ZXI6Ym9yZGVyLXByaW1hcnktNTAwIGJvcmRlci1wcmltYXJ5LTUwMFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzVGFibGV0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXRXaW5kb3coXCJ0YWJsZXRcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ0YWJsZXQtYWx0XCJdIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJzaW1wbGUtYnV0dG9uIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLWItNCBib3JkZXItZ3JheS0zMDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJob3Zlcjpib3JkZXItcHJpbWFyeS01MDAgYm9yZGVyLXByaW1hcnktNTAwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNNb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldFdpbmRvdyhcIm1vYmlsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcIm1vYmlsZS1hbHRcIl0gfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByZXZpZXdfX3dpbmRvd1wiIH0sIFtcbiAgICAgIF92bS5wcmV2aWV3XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3aW5kb3dcIiwgY2xhc3M6IFwid2luZG93LS1cIiArIF92bS53aW5kb3cgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIC0tPlxcbiAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwLWZyYW1lXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ucHJldmlldyB9IH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiYmctd2hpdGUgcHktMSBweC0zIHJvdW5kZWQtbGcgYmctZ3JheS04MDAgdGV4dC13aGl0ZSB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtc20gdHJhY2tpbmctd2lkZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkxvYWRpbmcuLi5cIildXG4gICAgICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYjA0NGI0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdiYjA0NGI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdiYjA0NGI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdiYjA0NGI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYjA0NGI0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdiYjA0NGI0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvQ3VzdG9taXplLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3VzdG9taXplLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2JiMDQ0YjQmXCIiXSwic291cmNlUm9vdCI6IiJ9