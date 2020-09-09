(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customize.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customize.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    update: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.debounce(function () {
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
      } else if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.endsWith(url, '/customize')) {
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

        lodash__WEBPACK_IMPORTED_MODULE_1___default.a.unset(options, '_json');

        vm.theme = theme.data.data;
        vm.form = new _services_Form__WEBPACK_IMPORTED_MODULE_0__["default"](options, true);
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a& ***!
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



/***/ }),

/***/ "./resources/js/pages/Customize.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Customize.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Customize_vue_vue_type_template_id_4a350b8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customize.vue?vue&type=template&id=4a350b8a& */ "./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a&");
/* harmony import */ var _Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customize.vue?vue&type=script&lang=js& */ "./resources/js/pages/Customize.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Customize_vue_vue_type_template_id_4a350b8a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Customize_vue_vue_type_template_id_4a350b8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Customize.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Customize.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Customize.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Customize.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customize.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_template_id_4a350b8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Customize.vue?vue&type=template&id=4a350b8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customize.vue?vue&type=template&id=4a350b8a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_template_id_4a350b8a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_template_id_4a350b8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0N1c3RvbWl6ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0N1c3RvbWl6ZS52dWU/NDhmOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQ3VzdG9taXplLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQ3VzdG9taXplLnZ1ZT80MDYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9DdXN0b21pemUudnVlPzdkOGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlGQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQURBO0FBU0EsTUFUQSxrQkFTQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLGdCQUZBO0FBR0EsdUJBSEE7QUFJQSxpQkFKQTtBQUtBLGdCQUxBO0FBTUEsdUJBTkE7QUFPQTtBQVBBO0FBU0EsR0FuQkE7QUFxQkE7QUFDQSxhQURBLHVCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBS0EsWUFMQSxzQkFLQTtBQUNBO0FBQ0EsS0FQQTtBQVNBLFlBVEEsc0JBU0E7QUFDQTtBQUNBLEtBWEE7QUFhQSxhQWJBLHVCQWFBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBLEdBckJBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQTtBQUtBO0FBTEE7QUFEQSxHQXhDQTtBQWtEQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWkE7QUFjQSxtQkFkQSw2QkFjQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Q0FBeUwsQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBN007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy83OC5qcz9pZD02MDg1ZDVhN2FkZGJiZTM4MjE4NSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicHJldmlld1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld19fY29udHJvbHNcIiA6YXJpYS1oaWRkZW49XCIhc2hvd0NvbnRyb2xzXCIgOmNsYXNzPVwieyd3LTAgYm9yZGVyLTAnOiAhc2hvd0NvbnRyb2xzfVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVDb250cm9sc1wiIHJlZj1cInNob3ctY29udHJvbHNcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gc2hvdy1jb250cm9scy1idXR0b25cIiA6Y2xhc3M9XCJ7J2hpZGRlbic6IHNob3dDb250cm9scywgJ2lubGluZS1ibG9jayc6ICFzaG93Q29udHJvbHN9XCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdjYXJldC1zcXVhcmUtcmlnaHQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+IFNob3cgQ29udHJvbHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiIDpjbGFzcz1cInsnaGlkZGVuJzogIXNob3dDb250cm9sc31cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgOnRvPVwieyBuYW1lOiAnZGFzaGJvYXJkJyB9XCIgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLXIgYm9yZGVyLWdyYXktMzAwIGxlYWRpbmctbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICd0aW1lcyddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMyBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBidXR0b24tLXNtYWxsXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc19fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1hY2NvcmRpb24gOm11bHRpcGxlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtYWNjb3JkaW9uLWl0ZW0gdi1mb3I9XCIoc2VjdGlvbiwgaGFuZGxlKSBpbiB0aGVtZS5vcHRpb25zXCIgOmtleT1cInNlY3Rpb24uaGFuZGxlXCIgOnRpdGxlPVwic2VjdGlvbi5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc21cIiB2LWlmPVwic2VjdGlvbi5kZXNjcmlwdGlvblwiPnt7IHNlY3Rpb24uZGVzY3JpcHRpb24gfX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoZmllbGQsIGZpZWxkSGFuZGxlKSBpbiBzZWN0aW9uLmZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybVtoYW5kbGVdW2ZpZWxkSGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRIYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlzPVwiZmllbGQuZmllbGR0eXBlICsgJy1maWVsZHR5cGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZD1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IGZpZWxkLmhlbHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IGZpZWxkLnNldHRpbmdzIHx8IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1hY2NvcmRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNfX2Zvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInRvZ2dsZUNvbnRyb2xzXCIgcmVmPVwiaGlkZS1jb250cm9sc1wiIGNsYXNzPVwic2ltcGxlLWJ1dHRvbiBoaWRlLWNvbnRyb2xzLWJ1dHRvblwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2FyZXQtc3F1YXJlLWxlZnQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+IEhpZGUgQ29udHJvbHM8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBib3JkZXItbCBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2V0V2luZG93KCdkZXNrdG9wJylcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gcmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItYi00IGJvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItZ3JheS01MDBcIiA6Y2xhc3M9XCJ7J2hvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDAnOiBpc0Rlc2t0b3B9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdkZXNrdG9wJ11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2V0V2luZG93KCd0YWJsZXQnKVwiIGNsYXNzPVwic2ltcGxlLWJ1dHRvbiByZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1iLTQgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMFwiIDpjbGFzcz1cInsnaG92ZXI6Ym9yZGVyLXByaW1hcnktNTAwIGJvcmRlci1wcmltYXJ5LTUwMCc6IGlzVGFibGV0fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndGFibGV0LWFsdCddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNldFdpbmRvdygnbW9iaWxlJylcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gcmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItYi00IGJvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItZ3JheS01MDBcIiA6Y2xhc3M9XCJ7J2hvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDAnOiBpc01vYmlsZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ21vYmlsZS1hbHQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdfX3dpbmRvdyBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBweC0yIGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBweS0xXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1yLTEgdy04IGgtOCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZC1mdWxsXCIgQGNsaWNrLnByZXZlbnQ9XCJuYXZpZ2F0ZUJhY2tcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2Fycm93LWxlZnQnXVwiIGNsYXNzPVwiZmEtZncgdGV4dC1ncmF5LTcwMFwiPjwvZmEtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibXItMSB3LTggaC04IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIiBAY2xpY2sucHJldmVudD1cIm5hdmlnYXRlRm9yd2FyZFwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnYXJyb3ctcmlnaHQnXVwiIGNsYXNzPVwiZmEtZncgdGV4dC1ncmF5LTcwMFwiPjwvZmEtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibXItMSB3LTggaC04IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIiBAY2xpY2sucHJldmVudD1cIm5hdmlnYXRlUmVmcmVzaFwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAncmVkbyddXCIgY2xhc3M9XCJmYS1mdyB0ZXh0LWdyYXktNzAwXCI+PC9mYS1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtci0xIHctOCBoLTggZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbFwiIEBjbGljay5wcmV2ZW50PVwibmF2aWdhdGVIb21lXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdob21lJ11cIiBjbGFzcz1cImZhLWZ3IHRleHQtZ3JheS03MDBcIj48L2ZhLWljb24+PC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtNiBweS0yIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCB0ZXh0LWdyYXktNzAwIGZsZXggZmxleC0xIG1yLTIgaXRlbXMtY2VudGVyIGxlYWRpbmctbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBwcmV0dHlVUkwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpbmRvd1wiIDpjbGFzcz1cIid3aW5kb3ctLScgKyB3aW5kb3dcIj5cbiAgICAgICAgICAgICAgICA8aWZyYW1lIHJlZj1cImlmcmFtZVwiIEBsb2FkPVwib25Mb2FkSWZyYW1lXCI+PC9pZnJhbWU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGNvbmZpcm0tbW9kYWw+PC9jb25maXJtLW1vZGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi9zZXJ2aWNlcy9Gb3JtJ1xuICAgIGltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuICAgIHZhciBjYW5jZWxcbiAgICB2YXIgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlblxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogJ0N1c3RvbWl6ZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGhlbWU6IHt9LFxuICAgICAgICAgICAgICAgIGZvcm06IG51bGwsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2N1c3RvbWl6ZScsXG4gICAgICAgICAgICAgICAgaGlzdG9yeTogW10sXG4gICAgICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgICAgICB3aW5kb3c6ICdkZXNrdG9wJyxcbiAgICAgICAgICAgICAgICBzaG93Q29udHJvbHM6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGlzRGVza3RvcCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aW5kb3cgPT0gJ2Rlc2t0b3AnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc1RhYmxldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aW5kb3cgPT0gJ3RhYmxldCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzTW9iaWxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndpbmRvdyA9PSAnbW9iaWxlJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcHJldHR5VVJMKCkge1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLnVybC5yZXBsYWNlKC8oW146XVxcLylcXC8rL2csIFwiJDFcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVVSTCh1cmwpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICAndGhlbWUub3B0aW9uJzoge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbmF2aWdhdGVCYWNrKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpc3RvcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudCAtIDFcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuaGlzdG9yeVsodGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDEpICsgY3VycmVudF1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHVybFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbmF2aWdhdGVGb3J3YXJkKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgKyAxXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmhpc3RvcnlbKHRoaXMuaGlzdG9yeS5sZW5ndGggLSAxKSArIGN1cnJlbnRdXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cmwgPSB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG5hdmlnYXRlUmVmcmVzaCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBuYXZpZ2F0ZUhvbWUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cmwgPSAnL2N1c3RvbWl6ZSdcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1cGRhdGU6IF8uZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy50aGVtZS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0ZXIoYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsID0gY1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUlmcmFtZShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChheGlvcy5pc0NhbmNlbChlcnIpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAxNTApLFxuXG4gICAgICAgICAgICB1cGRhdGVJZnJhbWUoY29udGVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZnJhbWUgID0gdGhpcy4kcmVmcy5pZnJhbWVcblxuICAgICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9wZW4oKVxuICAgICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LndyaXRlKGNvbnRlbnRzKVxuICAgICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmNsb3NlKClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uTG9hZElmcmFtZShldmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlmcmFtZSA9IHRoaXMuJHJlZnMuaWZyYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cubG9jYXRpb24udG9TdHJpbmcoKVxuXG4gICAgICAgICAgICAgICAgaWYgKHVybCA9PSAnYWJvdXQ6YmxhbmsnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gJy9jdXN0b21pemUnXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV0gIT0gdGhpcy51cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKHRoaXMudXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIV8uZW5kc1dpdGgodXJsLCAnL2N1c3RvbWl6ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdXJsICsgJy9jdXN0b21pemUnXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV0gIT0gdGhpcy51cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKHRoaXMudXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCArIHRoaXMuY3VycmVudF0gPT0gdGhpcy51cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50ICsgMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHBhcnNlVVJMKHVybCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgICAgICAgICBwYXJzZXIuaHJlZiA9IHVybFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlclxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaCgnL2FwaS90aGVtZXMvJyArIHRoaXMudGhlbWUubmFtZXNwYWNlKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnVGhlbWUgb3B0aW9ucyBoYXZlIGJlZW4gdXBkYXRlZCcsICdzdWNjZXNzJylcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2V0V2luZG93KGRldmljZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2luZG93ID0gZGV2aWNlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0b2dnbGVDb250cm9scygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250cm9scyA9ICF0aGlzLnNob3dDb250cm9sc1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dDb250cm9scykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmc1snaGlkZS1jb250cm9scyddLmZvY3VzKClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ3Nob3ctY29udHJvbHMnXS5mb2N1cygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RoZW1lJyksXG4gICAgICAgICAgICBdKS50aGVuKGF4aW9zLnNwcmVhZChmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgICAgICAgICAgICBuZXh0KGZ1bmN0aW9uKHZtKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gdGhlbWUuZGF0YS5kYXRhLm9wdGlvblxuXG4gICAgICAgICAgICAgICAgICAgIF8udW5zZXQob3B0aW9ucywgJ19qc29uJylcblxuICAgICAgICAgICAgICAgICAgICB2bS50aGVtZSA9IHRoZW1lLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtID0gbmV3IEZvcm0ob3B0aW9ucywgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicHJldmlld1wiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcmV2aWV3X19jb250cm9sc1wiLFxuICAgICAgICAgIGNsYXNzOiB7IFwidy0wIGJvcmRlci0wXCI6ICFfdm0uc2hvd0NvbnRyb2xzIH0sXG4gICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiAhX3ZtLnNob3dDb250cm9scyB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJzaG93LWNvbnRyb2xzXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpbXBsZS1idXR0b24gc2hvdy1jb250cm9scy1idXR0b25cIixcbiAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBoaWRkZW46IF92bS5zaG93Q29udHJvbHMsXG4gICAgICAgICAgICAgICAgXCJpbmxpbmUtYmxvY2tcIjogIV92bS5zaG93Q29udHJvbHNcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGVDb250cm9scyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2FyZXQtc3F1YXJlLXJpZ2h0XCJdIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBTaG93IENvbnRyb2xzXCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzXCIsIGNsYXNzOiB7IGhpZGRlbjogIV92bS5zaG93Q29udHJvbHMgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbHNfX2hlYWRlclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLXIgYm9yZGVyLWdyYXktMzAwIGxlYWRpbmctbm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGV4YWN0OiBcIlwiLCB0bzogeyBuYW1lOiBcImRhc2hib2FyZFwiIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ0aW1lc1wiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB4LTMgcHktM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IGJ1dHRvbi0tc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250cm9sc19fY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicC1hY2NvcmRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtdWx0aXBsZTogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGhlbWUub3B0aW9ucywgZnVuY3Rpb24oc2VjdGlvbiwgaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWFjY29yZGlvbi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogc2VjdGlvbi5oYW5kbGUsIGF0dHJzOiB7IHRpdGxlOiBzZWN0aW9uLm5hbWUgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Moc2VjdGlvbi5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woc2VjdGlvbi5maWVsZHMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRIYW5kbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoZmllbGQuZmllbGR0eXBlICsgXCItZmllbGR0eXBlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi04XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwOiBmaWVsZC5oZWxwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogZmllbGQuc2V0dGluZ3MgfHwge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1baGFuZGxlXVtmaWVsZEhhbmRsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtW2hhbmRsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRIYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1baGFuZGxlXVtmaWVsZEhhbmRsZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbHNfX2Zvb3RlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJoaWRlLWNvbnRyb2xzXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpbXBsZS1idXR0b24gaGlkZS1jb250cm9scy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGVDb250cm9scyB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2FyZXQtc3F1YXJlLWxlZnRcIl0gfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEhpZGUgQ29udHJvbHNcIilcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBib3JkZXItbCBib3JkZXItZ3JheS0zMDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW1wbGUtYnV0dG9uIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLWItNCBib3JkZXItZ3JheS0zMDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaG92ZXI6Ym9yZGVyLXByaW1hcnktNTAwIGJvcmRlci1wcmltYXJ5LTUwMFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNEZXNrdG9wXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldFdpbmRvdyhcImRlc2t0b3BcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImRlc2t0b3BcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2ltcGxlLWJ1dHRvbiByZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1iLTQgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzVGFibGV0XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldFdpbmRvdyhcInRhYmxldFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGFibGV0LWFsdFwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW1wbGUtYnV0dG9uIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLWItNCBib3JkZXItZ3JheS0zMDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaG92ZXI6Ym9yZGVyLXByaW1hcnktNTAwIGJvcmRlci1wcmltYXJ5LTUwMFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNNb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0V2luZG93KFwibW9iaWxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJtb2JpbGUtYWx0XCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3X193aW5kb3cgZmxleC1jb2xcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwidy1mdWxsIHB4LTIgYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIHB5LTFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwibXItMSB3LTggaC04IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5hdmlnYXRlQmFjaygkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IHRleHQtZ3JheS03MDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImFycm93LWxlZnRcIl0gfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwibXItMSB3LTggaC04IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5hdmlnYXRlRm9yd2FyZCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IHRleHQtZ3JheS03MDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImFycm93LXJpZ2h0XCJdIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcIm1yLTEgdy04IGgtOCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZC1mdWxsXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uYXZpZ2F0ZVJlZnJlc2goJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyB0ZXh0LWdyYXktNzAwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJyZWRvXCJdIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcIm1yLTEgdy04IGgtOCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZC1mdWxsXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uYXZpZ2F0ZUhvbWUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyB0ZXh0LWdyYXktNzAwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJob21lXCJdIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcInB4LTYgcHktMiBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgdGV4dC1ncmF5LTcwMCBmbGV4IGZsZXgtMSBtci0yIGl0ZW1zLWNlbnRlciBsZWFkaW5nLW5vbmVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wcmV0dHlVUkwpKV0pXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aW5kb3dcIiwgY2xhc3M6IFwid2luZG93LS1cIiArIF92bS53aW5kb3cgfSwgW1xuICAgICAgICAgIF9jKFwiaWZyYW1lXCIsIHsgcmVmOiBcImlmcmFtZVwiLCBvbjogeyBsb2FkOiBfdm0ub25Mb2FkSWZyYW1lIH0gfSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY29uZmlybS1tb2RhbFwiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhMzUwYjhhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRhMzUwYjhhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhMzUwYjhhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhMzUwYjhhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhMzUwYjhhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRhMzUwYjhhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvQ3VzdG9taXplLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3VzdG9taXplLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGEzNTBiOGEmXCIiXSwic291cmNlUm9vdCI6IiJ9