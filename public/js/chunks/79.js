(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0N1c3RvbWl6ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0N1c3RvbWl6ZS52dWU/NDhmOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQ3VzdG9taXplLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQ3VzdG9taXplLnZ1ZT80MDYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9DdXN0b21pemUudnVlPzdkOGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlGQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQURBO0FBU0EsTUFUQSxrQkFTQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLGdCQUZBO0FBR0EsdUJBSEE7QUFJQSxpQkFKQTtBQUtBLGdCQUxBO0FBTUEsdUJBTkE7QUFPQTtBQVBBO0FBU0EsR0FuQkE7QUFxQkE7QUFDQSxhQURBLHVCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBS0EsWUFMQSxzQkFLQTtBQUNBO0FBQ0EsS0FQQTtBQVNBLFlBVEEsc0JBU0E7QUFDQTtBQUNBLEtBWEE7QUFhQSxhQWJBLHVCQWFBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBLEdBckJBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQTtBQUtBO0FBTEE7QUFEQSxHQXhDQTtBQWtEQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWkE7QUFjQSxtQkFkQSw2QkFjQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Q0FBeUwsQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBN007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy83OS5qcz9pZD03MzI5MWExNWQ1MGViOTFmYTkxOSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicHJldmlld1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld19fY29udHJvbHNcIiA6YXJpYS1oaWRkZW49XCIhc2hvd0NvbnRyb2xzXCIgOmNsYXNzPVwieyd3LTAgYm9yZGVyLTAnOiAhc2hvd0NvbnRyb2xzfVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVDb250cm9sc1wiIHJlZj1cInNob3ctY29udHJvbHNcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gc2hvdy1jb250cm9scy1idXR0b25cIiA6Y2xhc3M9XCJ7J2hpZGRlbic6IHNob3dDb250cm9scywgJ2lubGluZS1ibG9jayc6ICFzaG93Q29udHJvbHN9XCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdjYXJldC1zcXVhcmUtcmlnaHQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+IFNob3cgQ29udHJvbHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiIDpjbGFzcz1cInsnaGlkZGVuJzogIXNob3dDb250cm9sc31cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgOnRvPVwieyBuYW1lOiAnZGFzaGJvYXJkJyB9XCIgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLXIgYm9yZGVyLWdyYXktMzAwIGxlYWRpbmctbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICd0aW1lcyddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMyBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBidXR0b24tLXNtYWxsXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc19fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktYWNjb3JkaW9uIDptdWx0aXBsZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1aS1hY2NvcmRpb24taXRlbSB2LWZvcj1cIihzZWN0aW9uLCBoYW5kbGUpIGluIHRoZW1lLm9wdGlvbnNcIiA6a2V5PVwic2VjdGlvbi5oYW5kbGVcIiA6dGl0bGU9XCJzZWN0aW9uLm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiIHYtaWY9XCJzZWN0aW9uLmRlc2NyaXB0aW9uXCI+e3sgc2VjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihmaWVsZCwgZmllbGRIYW5kbGUpIGluIHNlY3Rpb24uZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtW2hhbmRsZV1bZmllbGRIYW5kbGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXM9XCJmaWVsZC5maWVsZHR5cGUgKyAnLWZpZWxkdHlwZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDogZmllbGQuaGVscCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogZmllbGQuc2V0dGluZ3MgfHwge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWktYWNjb3JkaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktYWNjb3JkaW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzX19mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVDb250cm9sc1wiIHJlZj1cImhpZGUtY29udHJvbHNcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gaGlkZS1jb250cm9scy1idXR0b25cIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NhcmV0LXNxdWFyZS1sZWZ0J11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPiBIaWRlIENvbnRyb2xzPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggYm9yZGVyLWwgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNldFdpbmRvdygnZGVza3RvcCcpXCIgY2xhc3M9XCJzaW1wbGUtYnV0dG9uIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLWItNCBib3JkZXItZ3JheS0zMDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwXCIgOmNsYXNzPVwieydob3Zlcjpib3JkZXItcHJpbWFyeS01MDAgYm9yZGVyLXByaW1hcnktNTAwJzogaXNEZXNrdG9wfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnZGVza3RvcCddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNldFdpbmRvdygndGFibGV0JylcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gcmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItYi00IGJvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItZ3JheS01MDBcIiA6Y2xhc3M9XCJ7J2hvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDAnOiBpc1RhYmxldH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3RhYmxldC1hbHQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzZXRXaW5kb3coJ21vYmlsZScpXCIgY2xhc3M9XCJzaW1wbGUtYnV0dG9uIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLWItNCBib3JkZXItZ3JheS0zMDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwXCIgOmNsYXNzPVwieydob3Zlcjpib3JkZXItcHJpbWFyeS01MDAgYm9yZGVyLXByaW1hcnktNTAwJzogaXNNb2JpbGV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdtb2JpbGUtYWx0J11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3X193aW5kb3cgZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgcHgtMiBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIgcHktMVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtci0xIHctOCBoLTggZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbFwiIEBjbGljay5wcmV2ZW50PVwibmF2aWdhdGVCYWNrXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdhcnJvdy1sZWZ0J11cIiBjbGFzcz1cImZhLWZ3IHRleHQtZ3JheS03MDBcIj48L2ZhLWljb24+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1yLTEgdy04IGgtOCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZC1mdWxsXCIgQGNsaWNrLnByZXZlbnQ9XCJuYXZpZ2F0ZUZvcndhcmRcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2Fycm93LXJpZ2h0J11cIiBjbGFzcz1cImZhLWZ3IHRleHQtZ3JheS03MDBcIj48L2ZhLWljb24+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1yLTEgdy04IGgtOCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZC1mdWxsXCIgQGNsaWNrLnByZXZlbnQ9XCJuYXZpZ2F0ZVJlZnJlc2hcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3JlZG8nXVwiIGNsYXNzPVwiZmEtZncgdGV4dC1ncmF5LTcwMFwiPjwvZmEtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibXItMSB3LTggaC04IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIiBAY2xpY2sucHJldmVudD1cIm5hdmlnYXRlSG9tZVwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnaG9tZSddXCIgY2xhc3M9XCJmYS1mdyB0ZXh0LWdyYXktNzAwXCI+PC9mYS1pY29uPjwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTYgcHktMiBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgdGV4dC1ncmF5LTcwMCBmbGV4IGZsZXgtMSBtci0yIGl0ZW1zLWNlbnRlciBsZWFkaW5nLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgcHJldHR5VVJMIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kb3dcIiA6Y2xhc3M9XCInd2luZG93LS0nICsgd2luZG93XCI+XG4gICAgICAgICAgICAgICAgPGlmcmFtZSByZWY9XCJpZnJhbWVcIiBAbG9hZD1cIm9uTG9hZElmcmFtZVwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxjb25maXJtLW1vZGFsPjwvY29uZmlybS1tb2RhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vc2VydmljZXMvRm9ybSdcbiAgICBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbiAgICB2YXIgY2FuY2VsXG4gICAgdmFyIENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6ICdDdXN0b21pemUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRoZW1lOiB7fSxcbiAgICAgICAgICAgICAgICBmb3JtOiBudWxsLFxuICAgICAgICAgICAgICAgIHVybDogJy9jdXN0b21pemUnLFxuICAgICAgICAgICAgICAgIGhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICAgICAgd2luZG93OiAnZGVza3RvcCcsXG4gICAgICAgICAgICAgICAgc2hvd0NvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBpc0Rlc2t0b3AoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luZG93ID09ICdkZXNrdG9wJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNUYWJsZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luZG93ID09ICd0YWJsZXQnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc01vYmlsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aW5kb3cgPT0gJ21vYmlsZSdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHByZXR0eVVSTCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gdGhpcy51cmwucmVwbGFjZSgvKFteOl1cXC8pXFwvKy9nLCBcIiQxXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VVUkwodXJsKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJ3RoZW1lLm9wdGlvbic6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG5hdmlnYXRlQmFjaygpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oaXN0b3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgLSAxXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmhpc3RvcnlbKHRoaXMuaGlzdG9yeS5sZW5ndGggLSAxKSArIGN1cnJlbnRdXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cmwgPSB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG5hdmlnYXRlRm9yd2FyZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50ICsgMVxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5oaXN0b3J5Wyh0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMSkgKyBjdXJyZW50XVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBuYXZpZ2F0ZVJlZnJlc2goKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbmF2aWdhdGVIb21lKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXJsID0gJy9jdXN0b21pemUnXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdXBkYXRlOiBfLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChjYW5jZWwgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMudGhlbWUub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUb2tlbjogbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dGVyKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbCA9IGNcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJZnJhbWUocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXhpb3MuaXNDYW5jZWwoZXJyKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgMTUwKSxcblxuICAgICAgICAgICAgdXBkYXRlSWZyYW1lKGNvbnRlbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWZyYW1lICA9IHRoaXMuJHJlZnMuaWZyYW1lXG5cbiAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5vcGVuKClcbiAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC53cml0ZShjb250ZW50cylcbiAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvbkxvYWRJZnJhbWUoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZnJhbWUgPSB0aGlzLiRyZWZzLmlmcmFtZVxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGlmcmFtZS5jb250ZW50V2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKClcblxuICAgICAgICAgICAgICAgIGlmICh1cmwgPT0gJ2Fib3V0OmJsYW5rJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVybCA9ICcvY3VzdG9taXplJ1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdICE9IHRoaXMudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3RvcnkucHVzaCh0aGlzLnVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFfLmVuZHNXaXRoKHVybCwgJy9jdXN0b21pemUnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHVybCArICcvY3VzdG9taXplJ1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdICE9IHRoaXMudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3RvcnkucHVzaCh0aGlzLnVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggKyB0aGlzLmN1cnJlbnRdID09IHRoaXMudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudCArIDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBwYXJzZVVSTCh1cmwpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgICAgICAgICAgcGFyc2VyLmhyZWYgPSB1cmxcblxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZXJcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucGF0Y2goJy9hcGkvdGhlbWVzLycgKyB0aGlzLnRoZW1lLm5hbWVzcGFjZSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ1RoZW1lIG9wdGlvbnMgaGF2ZSBiZWVuIHVwZGF0ZWQnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2ZhaWxlZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldFdpbmRvdyhkZXZpY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmRvdyA9IGRldmljZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdG9nZ2xlQ29udHJvbHMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSAhdGhpcy5zaG93Q29udHJvbHNcblxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q29udHJvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ2hpZGUtY29udHJvbHMnXS5mb2N1cygpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzWydzaG93LWNvbnRyb2xzJ10uZm9jdXMoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90aGVtZScpLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgbmV4dChmdW5jdGlvbih2bSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHRoZW1lLmRhdGEuZGF0YS5vcHRpb25cblxuICAgICAgICAgICAgICAgICAgICBfLnVuc2V0KG9wdGlvbnMsICdfanNvbicpXG5cbiAgICAgICAgICAgICAgICAgICAgdm0udGhlbWUgPSB0aGVtZS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybSA9IG5ldyBGb3JtKG9wdGlvbnMsIHRydWUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInByZXZpZXdcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJldmlld19fY29udHJvbHNcIixcbiAgICAgICAgICBjbGFzczogeyBcInctMCBib3JkZXItMFwiOiAhX3ZtLnNob3dDb250cm9scyB9LFxuICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogIV92bS5zaG93Q29udHJvbHMgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwic2hvdy1jb250cm9sc1wiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaW1wbGUtYnV0dG9uIHNob3ctY29udHJvbHMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgaGlkZGVuOiBfdm0uc2hvd0NvbnRyb2xzLFxuICAgICAgICAgICAgICAgIFwiaW5saW5lLWJsb2NrXCI6ICFfdm0uc2hvd0NvbnRyb2xzXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9nZ2xlQ29udHJvbHMgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNhcmV0LXNxdWFyZS1yaWdodFwiXSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgU2hvdyBDb250cm9sc1wiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250cm9sc1wiLCBjbGFzczogeyBoaWRkZW46ICFfdm0uc2hvd0NvbnRyb2xzIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzX19oZWFkZXJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1yIGJvcmRlci1ncmF5LTMwMCBsZWFkaW5nLW5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBleGFjdDogXCJcIiwgdG86IHsgbmFtZTogXCJkYXNoYm9hcmRcIiB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGltZXNcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweC0zIHB5LTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBidXR0b24tLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbHNfX2NvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInVpLWFjY29yZGlvblwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG11bHRpcGxlOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50aGVtZS5vcHRpb25zLCBmdW5jdGlvbihzZWN0aW9uLCBoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLWFjY29yZGlvbi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogc2VjdGlvbi5oYW5kbGUsIGF0dHJzOiB7IHRpdGxlOiBzZWN0aW9uLm5hbWUgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Moc2VjdGlvbi5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woc2VjdGlvbi5maWVsZHMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRIYW5kbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoZmllbGQuZmllbGR0eXBlICsgXCItZmllbGR0eXBlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi04XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwOiBmaWVsZC5oZWxwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogZmllbGQuc2V0dGluZ3MgfHwge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1baGFuZGxlXVtmaWVsZEhhbmRsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtW2hhbmRsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRIYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1baGFuZGxlXVtmaWVsZEhhbmRsZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbHNfX2Zvb3RlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJoaWRlLWNvbnRyb2xzXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpbXBsZS1idXR0b24gaGlkZS1jb250cm9scy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGVDb250cm9scyB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2FyZXQtc3F1YXJlLWxlZnRcIl0gfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEhpZGUgQ29udHJvbHNcIilcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBib3JkZXItbCBib3JkZXItZ3JheS0zMDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW1wbGUtYnV0dG9uIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLWItNCBib3JkZXItZ3JheS0zMDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaG92ZXI6Ym9yZGVyLXByaW1hcnktNTAwIGJvcmRlci1wcmltYXJ5LTUwMFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNEZXNrdG9wXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldFdpbmRvdyhcImRlc2t0b3BcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImRlc2t0b3BcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2ltcGxlLWJ1dHRvbiByZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1iLTQgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzVGFibGV0XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldFdpbmRvdyhcInRhYmxldFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGFibGV0LWFsdFwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW1wbGUtYnV0dG9uIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLWItNCBib3JkZXItZ3JheS0zMDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaG92ZXI6Ym9yZGVyLXByaW1hcnktNTAwIGJvcmRlci1wcmltYXJ5LTUwMFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNNb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0V2luZG93KFwibW9iaWxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJtb2JpbGUtYWx0XCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3X193aW5kb3cgZmxleC1jb2xcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwidy1mdWxsIHB4LTIgYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIHB5LTFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwibXItMSB3LTggaC04IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5hdmlnYXRlQmFjaygkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IHRleHQtZ3JheS03MDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImFycm93LWxlZnRcIl0gfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwibXItMSB3LTggaC04IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5hdmlnYXRlRm9yd2FyZCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IHRleHQtZ3JheS03MDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImFycm93LXJpZ2h0XCJdIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcIm1yLTEgdy04IGgtOCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZC1mdWxsXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uYXZpZ2F0ZVJlZnJlc2goJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyB0ZXh0LWdyYXktNzAwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJyZWRvXCJdIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcIm1yLTEgdy04IGgtOCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZC1mdWxsXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uYXZpZ2F0ZUhvbWUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyB0ZXh0LWdyYXktNzAwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJob21lXCJdIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcInB4LTYgcHktMiBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgdGV4dC1ncmF5LTcwMCBmbGV4IGZsZXgtMSBtci0yIGl0ZW1zLWNlbnRlciBsZWFkaW5nLW5vbmVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wcmV0dHlVUkwpKV0pXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aW5kb3dcIiwgY2xhc3M6IFwid2luZG93LS1cIiArIF92bS53aW5kb3cgfSwgW1xuICAgICAgICAgIF9jKFwiaWZyYW1lXCIsIHsgcmVmOiBcImlmcmFtZVwiLCBvbjogeyBsb2FkOiBfdm0ub25Mb2FkSWZyYW1lIH0gfSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY29uZmlybS1tb2RhbFwiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhMzUwYjhhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRhMzUwYjhhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhMzUwYjhhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhMzUwYjhhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhMzUwYjhhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRhMzUwYjhhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvQ3VzdG9taXplLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3VzdG9taXplLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGEzNTBiOGEmXCIiXSwic291cmNlUm9vdCI6IiJ9