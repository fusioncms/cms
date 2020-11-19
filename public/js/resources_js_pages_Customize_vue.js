(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_pages_Customize_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Customize.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Customize.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _services_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/Form */ "./resources/js/services/Form.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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


var cancel;
var CancelToken = axios.CancelToken;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
      form: null,
      url: '/customize',
      history: [],
      current: 0,
      window: 'desktop',
      showControls: true
    };
  },
  computed: {
    isDesktop: function isDesktop() {
      return this.window == 'desktop';
    },
    isTablet: function isTablet() {
      return this.window == 'tablet';
    },
    isMobile: function isMobile() {
      return this.window == 'mobile';
    },
    prettyURL: function prettyURL() {
      var url = this.url.replace(/([^:]\/)\/+/g, "$1");
      return this.parseURL(url);
    }
  },
  watch: {
    'theme.option': {
      handler: function handler() {
        this.update();
      },
      deep: true
    }
  },
  methods: {
    navigateBack: function navigateBack() {
      if (this.history.length > 0) {
        var current = this.current - 1;
        var url = this.history[this.history.length - 1 + current];

        if (url) {
          this.current = current;
          this.url = url;
          this.update();
        }
      }
    },
    navigateForward: function navigateForward() {
      if (this.current !== 0) {
        var current = this.current + 1;
        var url = this.history[this.history.length - 1 + current];

        if (url) {
          this.current = current;
          this.url = url;
          this.update();
        }
      }
    },
    navigateRefresh: function navigateRefresh() {
      this.update();
    },
    navigateHome: function navigateHome() {
      this.url = '/customize';
      this.update();
    },
    update: lodash__WEBPACK_IMPORTED_MODULE_1___default().debounce(function () {
      var _this = this;

      if (cancel != undefined) {
        cancel();
      }

      axios({
        method: 'post',
        url: this.url,
        data: this.theme.option,
        cancelToken: new CancelToken(function executer(c) {
          cancel = c;
        })
      }).then(function (response) {
        _this.updateIframe(response.data);
      })["catch"](function (err) {
        if (axios.isCancel(err)) return;
        throw err;
      });
    }, 150),
    updateIframe: function updateIframe(contents) {
      var iframe = this.$refs.iframe;
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(contents);
      iframe.contentWindow.document.close();
    },
    onLoadIframe: function onLoadIframe(event) {
      var iframe = this.$refs.iframe;
      var url = iframe.contentWindow.location.toString();

      if (url == 'about:blank') {
        this.url = '/customize';

        if (this.history[this.history.length - 1] != this.url) {
          this.history.push(this.url);
          this.current = 0;
        }

        this.update();
      } else if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().endsWith(url, '/customize')) {
        this.url = url + '/customize';

        if (this.history[this.history.length - 1] != this.url) {
          this.history.push(this.url);
          this.current = 0;
        }

        this.update();
      }

      if (this.history[this.history.length + this.current] == this.url) {
        this.current = this.current + 1;
      }
    },
    parseURL: function parseURL(url) {
      var parser = document.createElement('a');
      parser.href = url;
      return parser;
    },
    submit: function submit() {
      this.form.patch('/api/themes/' + this.theme.namespace).then(function (response) {
        toast('Theme options have been updated', 'success');
      })["catch"](function (error) {
        toast(error.response.data.message, 'failed');
      });
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
        var options = theme.data.data.option;

        lodash__WEBPACK_IMPORTED_MODULE_1___default().unset(options, '_json');

        vm.theme = theme.data.data;
        vm.form = new _services_Form__WEBPACK_IMPORTED_MODULE_0__.default(options, true);
      });
    }));
  }
});

/***/ }),

/***/ "./resources/js/pages/Customize.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Customize.vue ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Customize_vue_vue_type_template_id_4a350b8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customize.vue?vue&type=template&id=4a350b8a& */ "./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a&");
/* harmony import */ var _Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customize.vue?vue&type=script&lang=js& */ "./resources/js/pages/Customize.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Customize_vue_vue_type_template_id_4a350b8a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Customize_vue_vue_type_template_id_4a350b8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Customize.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Customize.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Customize.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Customize.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Customize.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a& ***!
  \*************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_template_id_4a350b8a___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_template_id_4a350b8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_template_id_4a350b8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Customize.vue?vue&type=template&id=4a350b8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "preview" },
    [
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
                    "ui-accordion",
                    { attrs: { multiple: true } },
                    _vm._l(_vm.theme.options, function(section, handle) {
                      return _c(
                        "ui-accordion-item",
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
                                      settings: field.settings || {}
                                    }
                                  },
                                  model: {
                                    value: _vm.form[handle][fieldHandle],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.form[handle],
                                        fieldHandle,
                                        $$v
                                      )
                                    },
                                    expression: "form[handle][fieldHandle]"
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
      _c("div", { staticClass: "preview__window flex-col" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full px-2 bg-white border-b border-gray-300 flex items-center py-1"
          },
          [
            _c(
              "button",
              {
                staticClass:
                  "mr-1 w-8 h-8 focus:outline-none hover:bg-gray-200 rounded-full",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.navigateBack($event)
                  }
                }
              },
              [
                _c("fa-icon", {
                  staticClass: "fa-fw text-gray-700",
                  attrs: { icon: ["fas", "arrow-left"] }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "mr-1 w-8 h-8 focus:outline-none hover:bg-gray-200 rounded-full",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.navigateForward($event)
                  }
                }
              },
              [
                _c("fa-icon", {
                  staticClass: "fa-fw text-gray-700",
                  attrs: { icon: ["fas", "arrow-right"] }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "mr-1 w-8 h-8 focus:outline-none hover:bg-gray-200 rounded-full",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.navigateRefresh($event)
                  }
                }
              },
              [
                _c("fa-icon", {
                  staticClass: "fa-fw text-gray-700",
                  attrs: { icon: ["fas", "redo"] }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "mr-1 w-8 h-8 focus:outline-none hover:bg-gray-200 rounded-full",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.navigateHome($event)
                  }
                }
              },
              [
                _c("fa-icon", {
                  staticClass: "fa-fw text-gray-700",
                  attrs: { icon: ["fas", "home"] }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "px-6 py-2 bg-gray-200 rounded-full text-gray-700 flex flex-1 mr-2 items-center leading-none"
              },
              [_c("span", [_vm._v(_vm._s(_vm.prettyURL))])]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "window", class: "window--" + _vm.window }, [
          _c("iframe", { ref: "iframe", on: { load: _vm.onLoadIframe } })
        ])
      ]),
      _vm._v(" "),
      _c("confirm-modal")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL3BhZ2VzL0N1c3RvbWl6ZS52dWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0N1c3RvbWl6ZS52dWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0N1c3RvbWl6ZS52dWU/NzZlMiIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvQ3VzdG9taXplLnZ1ZT83NTRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBLGVBREE7QUFFQSxnQkFGQTtBQUdBLHVCQUhBO0FBSUEsaUJBSkE7QUFLQSxnQkFMQTtBQU1BLHVCQU5BO0FBT0E7QUFQQTtBQVNBLEdBbkJBO0FBcUJBO0FBQ0EsYUFEQSx1QkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLFlBTEEsc0JBS0E7QUFDQTtBQUNBLEtBUEE7QUFTQSxZQVRBLHNCQVNBO0FBQ0E7QUFDQSxLQVhBO0FBYUEsYUFiQSx1QkFhQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQSxHQXJCQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7QUFLQTtBQUxBO0FBREEsR0F4Q0E7QUFrREE7QUFDQSxnQkFEQSwwQkFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVpBO0FBY0EsbUJBZEEsNkJBY0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9yZXNvdXJjZXNfanNfcGFnZXNfQ3VzdG9taXplX3Z1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicHJldmlld1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld19fY29udHJvbHNcIiA6YXJpYS1oaWRkZW49XCIhc2hvd0NvbnRyb2xzXCIgOmNsYXNzPVwieyd3LTAgYm9yZGVyLTAnOiAhc2hvd0NvbnRyb2xzfVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVDb250cm9sc1wiIHJlZj1cInNob3ctY29udHJvbHNcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gc2hvdy1jb250cm9scy1idXR0b25cIiA6Y2xhc3M9XCJ7J2hpZGRlbic6IHNob3dDb250cm9scywgJ2lubGluZS1ibG9jayc6ICFzaG93Q29udHJvbHN9XCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdjYXJldC1zcXVhcmUtcmlnaHQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+IFNob3cgQ29udHJvbHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiIDpjbGFzcz1cInsnaGlkZGVuJzogIXNob3dDb250cm9sc31cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgOnRvPVwieyBuYW1lOiAnZGFzaGJvYXJkJyB9XCIgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLXIgYm9yZGVyLWdyYXktMzAwIGxlYWRpbmctbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICd0aW1lcyddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMyBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBidXR0b24tLXNtYWxsXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc19fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktYWNjb3JkaW9uIDptdWx0aXBsZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1aS1hY2NvcmRpb24taXRlbSB2LWZvcj1cIihzZWN0aW9uLCBoYW5kbGUpIGluIHRoZW1lLm9wdGlvbnNcIiA6a2V5PVwic2VjdGlvbi5oYW5kbGVcIiA6dGl0bGU9XCJzZWN0aW9uLm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiIHYtaWY9XCJzZWN0aW9uLmRlc2NyaXB0aW9uXCI+e3sgc2VjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihmaWVsZCwgZmllbGRIYW5kbGUpIGluIHNlY3Rpb24uZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtW2hhbmRsZV1bZmllbGRIYW5kbGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXM9XCJmaWVsZC5maWVsZHR5cGUgKyAnLWZpZWxkdHlwZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDogZmllbGQuaGVscCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogZmllbGQuc2V0dGluZ3MgfHwge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWktYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktYWNjb3JkaW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzX19mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVDb250cm9sc1wiIHJlZj1cImhpZGUtY29udHJvbHNcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gaGlkZS1jb250cm9scy1idXR0b25cIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NhcmV0LXNxdWFyZS1sZWZ0J11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPiBIaWRlIENvbnRyb2xzPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggYm9yZGVyLWwgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNldFdpbmRvdygnZGVza3RvcCcpXCIgY2xhc3M9XCJzaW1wbGUtYnV0dG9uIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLWItNCBib3JkZXItZ3JheS0zMDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwXCIgOmNsYXNzPVwieydob3Zlcjpib3JkZXItcHJpbWFyeS01MDAgYm9yZGVyLXByaW1hcnktNTAwJzogaXNEZXNrdG9wfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnZGVza3RvcCddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNldFdpbmRvdygndGFibGV0JylcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gcmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItYi00IGJvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItZ3JheS01MDBcIiA6Y2xhc3M9XCJ7J2hvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDAnOiBpc1RhYmxldH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3RhYmxldC1hbHQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzZXRXaW5kb3coJ21vYmlsZScpXCIgY2xhc3M9XCJzaW1wbGUtYnV0dG9uIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLWItNCBib3JkZXItZ3JheS0zMDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwXCIgOmNsYXNzPVwieydob3Zlcjpib3JkZXItcHJpbWFyeS01MDAgYm9yZGVyLXByaW1hcnktNTAwJzogaXNNb2JpbGV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdtb2JpbGUtYWx0J11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3X193aW5kb3cgZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgcHgtMiBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIgcHktMVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtci0xIHctOCBoLTggZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbFwiIEBjbGljay5wcmV2ZW50PVwibmF2aWdhdGVCYWNrXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdhcnJvdy1sZWZ0J11cIiBjbGFzcz1cImZhLWZ3IHRleHQtZ3JheS03MDBcIj48L2ZhLWljb24+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1yLTEgdy04IGgtOCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZC1mdWxsXCIgQGNsaWNrLnByZXZlbnQ9XCJuYXZpZ2F0ZUZvcndhcmRcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2Fycm93LXJpZ2h0J11cIiBjbGFzcz1cImZhLWZ3IHRleHQtZ3JheS03MDBcIj48L2ZhLWljb24+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1yLTEgdy04IGgtOCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZC1mdWxsXCIgQGNsaWNrLnByZXZlbnQ9XCJuYXZpZ2F0ZVJlZnJlc2hcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3JlZG8nXVwiIGNsYXNzPVwiZmEtZncgdGV4dC1ncmF5LTcwMFwiPjwvZmEtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibXItMSB3LTggaC04IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIiBAY2xpY2sucHJldmVudD1cIm5hdmlnYXRlSG9tZVwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnaG9tZSddXCIgY2xhc3M9XCJmYS1mdyB0ZXh0LWdyYXktNzAwXCI+PC9mYS1pY29uPjwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTYgcHktMiBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgdGV4dC1ncmF5LTcwMCBmbGV4IGZsZXgtMSBtci0yIGl0ZW1zLWNlbnRlciBsZWFkaW5nLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgcHJldHR5VVJMIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kb3dcIiA6Y2xhc3M9XCInd2luZG93LS0nICsgd2luZG93XCI+XG4gICAgICAgICAgICAgICAgPGlmcmFtZSByZWY9XCJpZnJhbWVcIiBAbG9hZD1cIm9uTG9hZElmcmFtZVwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxjb25maXJtLW1vZGFsPjwvY29uZmlybS1tb2RhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vc2VydmljZXMvRm9ybSdcbiAgICBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbiAgICB2YXIgY2FuY2VsXG4gICAgdmFyIENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6ICdDdXN0b21pemUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRoZW1lOiB7fSxcbiAgICAgICAgICAgICAgICBmb3JtOiBudWxsLFxuICAgICAgICAgICAgICAgIHVybDogJy9jdXN0b21pemUnLFxuICAgICAgICAgICAgICAgIGhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICAgICAgd2luZG93OiAnZGVza3RvcCcsXG4gICAgICAgICAgICAgICAgc2hvd0NvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBpc0Rlc2t0b3AoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luZG93ID09ICdkZXNrdG9wJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNUYWJsZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luZG93ID09ICd0YWJsZXQnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc01vYmlsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aW5kb3cgPT0gJ21vYmlsZSdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHByZXR0eVVSTCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gdGhpcy51cmwucmVwbGFjZSgvKFteOl1cXC8pXFwvKy9nLCBcIiQxXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VVUkwodXJsKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJ3RoZW1lLm9wdGlvbic6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG5hdmlnYXRlQmFjaygpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oaXN0b3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgLSAxXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmhpc3RvcnlbKHRoaXMuaGlzdG9yeS5sZW5ndGggLSAxKSArIGN1cnJlbnRdXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cmwgPSB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG5hdmlnYXRlRm9yd2FyZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50ICsgMVxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5oaXN0b3J5Wyh0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMSkgKyBjdXJyZW50XVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBuYXZpZ2F0ZVJlZnJlc2goKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbmF2aWdhdGVIb21lKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXJsID0gJy9jdXN0b21pemUnXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdXBkYXRlOiBfLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChjYW5jZWwgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMudGhlbWUub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUb2tlbjogbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dGVyKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbCA9IGNcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJZnJhbWUocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXhpb3MuaXNDYW5jZWwoZXJyKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgMTUwKSxcblxuICAgICAgICAgICAgdXBkYXRlSWZyYW1lKGNvbnRlbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWZyYW1lICA9IHRoaXMuJHJlZnMuaWZyYW1lXG5cbiAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5vcGVuKClcbiAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC53cml0ZShjb250ZW50cylcbiAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvbkxvYWRJZnJhbWUoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZnJhbWUgPSB0aGlzLiRyZWZzLmlmcmFtZVxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGlmcmFtZS5jb250ZW50V2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKClcblxuICAgICAgICAgICAgICAgIGlmICh1cmwgPT0gJ2Fib3V0OmJsYW5rJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVybCA9ICcvY3VzdG9taXplJ1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdICE9IHRoaXMudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3RvcnkucHVzaCh0aGlzLnVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFfLmVuZHNXaXRoKHVybCwgJy9jdXN0b21pemUnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHVybCArICcvY3VzdG9taXplJ1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdICE9IHRoaXMudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3RvcnkucHVzaCh0aGlzLnVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggKyB0aGlzLmN1cnJlbnRdID09IHRoaXMudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudCArIDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBwYXJzZVVSTCh1cmwpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgICAgICAgICAgcGFyc2VyLmhyZWYgPSB1cmxcblxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZXJcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucGF0Y2goJy9hcGkvdGhlbWVzLycgKyB0aGlzLnRoZW1lLm5hbWVzcGFjZSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ1RoZW1lIG9wdGlvbnMgaGF2ZSBiZWVuIHVwZGF0ZWQnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2ZhaWxlZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldFdpbmRvdyhkZXZpY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmRvdyA9IGRldmljZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdG9nZ2xlQ29udHJvbHMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSAhdGhpcy5zaG93Q29udHJvbHNcblxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q29udHJvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ2hpZGUtY29udHJvbHMnXS5mb2N1cygpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzWydzaG93LWNvbnRyb2xzJ10uZm9jdXMoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90aGVtZScpLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgbmV4dChmdW5jdGlvbih2bSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHRoZW1lLmRhdGEuZGF0YS5vcHRpb25cblxuICAgICAgICAgICAgICAgICAgICBfLnVuc2V0KG9wdGlvbnMsICdfanNvbicpXG5cbiAgICAgICAgICAgICAgICAgICAgdm0udGhlbWUgPSB0aGVtZS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybSA9IG5ldyBGb3JtKG9wdGlvbnMsIHRydWUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ3VzdG9taXplLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTM1MGI4YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YTM1MGI4YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YTM1MGI4YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YTM1MGI4YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ3VzdG9taXplLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTM1MGI4YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YTM1MGI4YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL0N1c3RvbWl6ZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3VzdG9taXplLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3XCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByZXZpZXdfX2NvbnRyb2xzXCIsXG4gICAgICAgICAgY2xhc3M6IHsgXCJ3LTAgYm9yZGVyLTBcIjogIV92bS5zaG93Q29udHJvbHMgfSxcbiAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6ICFfdm0uc2hvd0NvbnRyb2xzIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcInNob3ctY29udHJvbHNcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2ltcGxlLWJ1dHRvbiBzaG93LWNvbnRyb2xzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgIGhpZGRlbjogX3ZtLnNob3dDb250cm9scyxcbiAgICAgICAgICAgICAgICBcImlubGluZS1ibG9ja1wiOiAhX3ZtLnNob3dDb250cm9sc1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvZ2dsZUNvbnRyb2xzIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjYXJldC1zcXVhcmUtcmlnaHRcIl0gfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFNob3cgQ29udHJvbHNcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbHNcIiwgY2xhc3M6IHsgaGlkZGVuOiAhX3ZtLnNob3dDb250cm9scyB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250cm9sc19faGVhZGVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItciBib3JkZXItZ3JheS0zMDAgbGVhZGluZy1ub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZXhhY3Q6IFwiXCIsIHRvOiB7IG5hbWU6IFwiZGFzaGJvYXJkXCIgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRpbWVzXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHgtMyBweS0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnkgYnV0dG9uLS1zbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzX19jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS1hY2NvcmRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtdWx0aXBsZTogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGhlbWUub3B0aW9ucywgZnVuY3Rpb24oc2VjdGlvbiwgaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1hY2NvcmRpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHNlY3Rpb24uaGFuZGxlLCBhdHRyczogeyB0aXRsZTogc2VjdGlvbi5uYW1lIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInAtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHNlY3Rpb24uZGVzY3JpcHRpb24pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHNlY3Rpb24uZmllbGRzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSGFuZGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKGZpZWxkLmZpZWxkdHlwZSArIFwiLWZpZWxkdHlwZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDogZmllbGQuaGVscCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IGZpZWxkLnNldHRpbmdzIHx8IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtW2hhbmRsZV1bZmllbGRIYW5kbGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybVtoYW5kbGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtW2hhbmRsZV1bZmllbGRIYW5kbGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzX19mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwiaGlkZS1jb250cm9sc1wiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaW1wbGUtYnV0dG9uIGhpZGUtY29udHJvbHMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9nZ2xlQ29udHJvbHMgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNhcmV0LXNxdWFyZS1sZWZ0XCJdIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBIaWRlIENvbnRyb2xzXCIpXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggYm9yZGVyLWwgYm9yZGVyLWdyYXktMzAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2ltcGxlLWJ1dHRvbiByZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1iLTQgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzRGVza3RvcFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXRXaW5kb3coXCJkZXNrdG9wXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJkZXNrdG9wXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpbXBsZS1idXR0b24gcmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItYi00IGJvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItZ3JheS01MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Zlcjpib3JkZXItcHJpbWFyeS01MDAgYm9yZGVyLXByaW1hcnktNTAwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1RhYmxldFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXRXaW5kb3coXCJ0YWJsZXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRhYmxldC1hbHRcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2ltcGxlLWJ1dHRvbiByZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1iLTQgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzTW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldFdpbmRvdyhcIm1vYmlsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwibW9iaWxlLWFsdFwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJldmlld19fd2luZG93IGZsZXgtY29sXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcInctZnVsbCBweC0yIGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBweS0xXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcIm1yLTEgdy04IGgtOCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZC1mdWxsXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uYXZpZ2F0ZUJhY2soJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyB0ZXh0LWdyYXktNzAwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJhcnJvdy1sZWZ0XCJdIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcIm1yLTEgdy04IGgtOCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZC1mdWxsXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uYXZpZ2F0ZUZvcndhcmQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyB0ZXh0LWdyYXktNzAwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJhcnJvdy1yaWdodFwiXSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJtci0xIHctOCBoLTggZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubmF2aWdhdGVSZWZyZXNoKCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgdGV4dC1ncmF5LTcwMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwicmVkb1wiXSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJtci0xIHctOCBoLTggZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubmF2aWdhdGVIb21lKCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgdGV4dC1ncmF5LTcwMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiaG9tZVwiXSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJweC02IHB5LTIgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHRleHQtZ3JheS03MDAgZmxleCBmbGV4LTEgbXItMiBpdGVtcy1jZW50ZXIgbGVhZGluZy1ub25lXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucHJldHR5VVJMKSldKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2luZG93XCIsIGNsYXNzOiBcIndpbmRvdy0tXCIgKyBfdm0ud2luZG93IH0sIFtcbiAgICAgICAgICBfYyhcImlmcmFtZVwiLCB7IHJlZjogXCJpZnJhbWVcIiwgb246IHsgbG9hZDogX3ZtLm9uTG9hZElmcmFtZSB9IH0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImNvbmZpcm0tbW9kYWxcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=