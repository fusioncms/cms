(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Logs/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Logs/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
        inner: 'Logs'
      };
    }
  },
  data: function data() {
    return {
      endpoint: '/datatable/matrices',
      currentFile: '',
      files: [],
      logs: [],
      currentError: {},
      loaded: false
    };
  },
  computed: {
    file: function file() {
      var filename = this.$route.query ? this.$route.query : '';
      return filename.file;
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.getFile(to.query.file);
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    this.getFile(to.query.file);
    next();
  },
  methods: {
    getFile: function getFile(filename) {
      var vm = this;
      vm.loaded = false;
      var query = filename ? '?l=' + filename : '';
      axios.get('/api/logs' + query).then(function (response) {
        vm.currentFile = response.data.currentFile;
        vm.files = response.data.files;
        vm.logs = response.data.logs;
        vm.loaded = true;
      });
    },
    changeCurrentError: function changeCurrentError(log) {
      this.currentError = log;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Logs/Index.vue?vue&type=template&id=0efe44ca&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Logs/Index.vue?vue&type=template&id=0efe44ca& ***!
  \********************************************************************************************************************************************************************************************************/
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
        [_c("page-title", { attrs: { icon: "bug" } }, [_vm._v("Logs")])],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "logs__sidebar side-container" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _vm._l(_vm.files, function(file, index) {
                  return _c(
                    "router-link",
                    {
                      key: index,
                      staticClass: "block px-3 py-2 text-gray-900",
                      attrs: { to: { path: "logs?", query: { file: file } } }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(file) +
                          "\n                    "
                      )
                    ]
                  )
                }),
                _vm._v(" "),
                !_vm.loaded && _vm.files.length == 0
                  ? _c(
                      "div",
                      { staticClass: "block px-3 py-2" },
                      [
                        _vm._v("\n                        Loading log files "),
                        _c("fa-icon", {
                          staticClass: "fa-spin ml-2",
                          attrs: { icon: "cog" }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.loaded && _vm.files.length == 0
                  ? _c("div", { staticClass: "block px-3 py-2" }, [
                      _vm._v(
                        "\n                        No logs found\n                    "
                      )
                    ])
                  : _vm._e()
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "logs__main content-container" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "container" }, [
              _vm.loaded
                ? _c(
                    "div",
                    _vm._l(_vm.logs, function(log) {
                      return _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:error-view",
                              arg: "error-view"
                            }
                          ],
                          key: log,
                          staticClass: "logs__row flex flex-no-wrap py-2",
                          on: {
                            click: function($event) {
                              return _vm.changeCurrentError(log)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "px-2 py-1 flex-shrink-0 flex items-center"
                            },
                            [
                              _c(
                                "div",
                                {
                                  class:
                                    "d-flex whitespace-no-wrap text-" +
                                    log.level.status +
                                    "-600",
                                  attrs: { title: log.level.name }
                                },
                                [
                                  _c("fa-icon", {
                                    staticClass: "fa-inverse! fa-fw",
                                    attrs: { icon: ["fas", log.level.icon] }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "sr-only" }, [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(log.level.name) +
                                        "\n                                    "
                                    )
                                  ])
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "px-3 py-1 flex-shrink-0 flex items-center text-xs whitespace-no-wrap"
                            },
                            [_vm._v(_vm._s(log.date))]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "col px-3 py-1 leading-tight overflow-hidden"
                            },
                            [
                              _c("div", {
                                staticClass: "text-md",
                                domProps: { innerHTML: _vm._s(log.text) }
                              }),
                              _vm._v(" "),
                              log.inFile
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "truncate pt-2 text-xs text-gray-600"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(log.inFile) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.loaded
                ? _c(
                    "div",
                    { staticClass: "block px-3 py-4" },
                    [
                      _vm._v("\n                        Loading file "),
                      _vm.file
                        ? _c("code", [_vm._v(_vm._s(_vm.file))])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("fa-icon", {
                        staticClass: "fa-spin ml-3",
                        attrs: { icon: "cog" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.loaded && _vm.logs.length == 0
                ? _c("div", { staticClass: "block px-3 py-4" }, [
                    _vm._v(
                      "\n                        Log file empty\n                    "
                    )
                  ])
                : _vm._e()
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "ui-modal",
        {
          attrs: {
            name: "error-view",
            title: "Error Details",
            "extra-large": ""
          }
        },
        [
          _vm.currentError.date
            ? _c("div", [
                _c("div", { staticClass: "leading-tight mb-3" }, [
                  _c("div", { staticClass: "flex p-2" }, [
                    _c("div", { staticClass: "pr-2 whitespace-no-wrap" }, [
                      _c("strong", [_vm._v("Timestamp:")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "whitespace-no-wrap" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.currentError.date) +
                          "\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex p-2" }, [
                    _c("div", { staticClass: "pr-2 whitespace-no-wrap" }, [
                      _c("strong", [_vm._v("Error Text:")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "logs__full-text" }, [
                      _c("div", { staticClass: "text-warning-800" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.currentError.textFull) +
                            "\n                        "
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "px-2" }, [
                  _c("h3", { staticClass: "text-sm" }, [
                    _vm._v("Stack Trace:")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "logs__stack-trace overflow-auto" },
                    _vm._l(_vm.currentError.stackTrace, function(row) {
                      return row.length
                        ? _c(
                            "div",
                            { key: row, staticClass: "logs__stack-row" },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(row) +
                                  "\n                    "
                              )
                            ]
                          )
                        : _vm._e()
                    }),
                    0
                  )
                ])
              ])
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header px-3 pt-2" }, [
      _c("h4", { staticClass: "mb-0" }, [_vm._v("Available Logs")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header px-4 py-2" }, [
      _c("h2", { staticClass: "mb-0" }, [_vm._v("Log Entries")]),
      _vm._v(" "),
      _c("h3", { staticClass: "text-xs" }, [
        _vm._v("Click an entry to view full error and stack trace")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Logs/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Logs/Index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_0efe44ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=0efe44ca& */ "./resources/js/pages/Logs/Index.vue?vue&type=template&id=0efe44ca&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Logs/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_0efe44ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_0efe44ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Logs/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Logs/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Logs/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Logs/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Logs/Index.vue?vue&type=template&id=0efe44ca&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Logs/Index.vue?vue&type=template&id=0efe44ca& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0efe44ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=0efe44ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Logs/Index.vue?vue&type=template&id=0efe44ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0efe44ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0efe44ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0xvZ3MvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Mb2dzL0luZGV4LnZ1ZT81ZmZjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Mb2dzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTG9ncy9JbmRleC52dWU/NDhiNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTG9ncy9JbmRleC52dWU/ZThhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0dBO0FBQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQURBO0FBU0EsTUFUQSxrQkFTQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxxQkFGQTtBQUdBLGVBSEE7QUFJQSxjQUpBO0FBS0Esc0JBTEE7QUFNQTtBQU5BO0FBUUEsR0FsQkE7QUFvQkE7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkEsR0FwQkE7QUEyQkEsa0JBM0JBLDRCQTJCQSxFQTNCQSxFQTJCQSxJQTNCQSxFQTJCQSxJQTNCQSxFQTJCQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0EsR0EvQkE7QUFpQ0EsbUJBakNBLDZCQWlDQSxFQWpDQSxFQWlDQSxJQWpDQSxFQWlDQSxJQWpDQSxFQWlDQTtBQUNBO0FBQ0E7QUFDQSxHQXBDQTtBQXNDQTtBQUNBLFdBREEsbUJBQ0EsUUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQVhBO0FBYUEsc0JBYkEsOEJBYUEsR0FiQSxFQWFB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RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzQkFBc0I7QUFDakQsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFpRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQ0FBMkM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QztBQUM3RCxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QztBQUM3RCxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdlRBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzEwOS5qcz9pZD1lOWE0Zjg4NWRkZTJjZTVjZDg1OSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxwYWdlLXRpdGxlIGljb249XCJidWdcIj5Mb2dzPC9wYWdlLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nc19fc2lkZWJhciBzaWRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBweC0zIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1iLTBcIj5BdmFpbGFibGUgTG9nczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGZpbGUsIGluZGV4KSBpbiBmaWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRvPVwieyBwYXRoOiAnbG9ncz8nLCBxdWVyeToge2ZpbGU6IGZpbGV9IH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayBweC0zIHB5LTIgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmlsZX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWxvYWRlZCAmJiBmaWxlcy5sZW5ndGggPT0gMFwiIGNsYXNzPVwiYmxvY2sgcHgtMyBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZyBsb2cgZmlsZXMgPGZhLWljb24gaWNvbj1cImNvZ1wiIGNsYXNzPVwiZmEtc3BpbiBtbC0yXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkZWQgJiYgZmlsZXMubGVuZ3RoID09IDBcIiBjbGFzcz1cImJsb2NrIHB4LTMgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIGxvZ3MgZm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ3NfX21haW4gY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgcHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtYi0wXCI+TG9nIEVudHJpZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC14c1wiPkNsaWNrIGFuIGVudHJ5IHRvIHZpZXcgZnVsbCBlcnJvciBhbmQgc3RhY2sgdHJhY2U8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImxvZyBpbiBsb2dzXCIgOmtleT1cImxvZ1wiIGNsYXNzPVwibG9nc19fcm93IGZsZXggZmxleC1uby13cmFwIHB5LTJcIiBAY2xpY2s9XCJjaGFuZ2VDdXJyZW50RXJyb3IobG9nKVwiIHYtbW9kYWw6ZXJyb3Itdmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTIgcHktMSBmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidkLWZsZXggd2hpdGVzcGFjZS1uby13cmFwIHRleHQtJyArIGxvZy5sZXZlbC5zdGF0dXMgKyAnLTYwMCdcIiA6dGl0bGU9XCJsb2cubGV2ZWwubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCBsb2cubGV2ZWwuaWNvbl1cIiBjbGFzcz1cImZhLWludmVyc2UhIGZhLWZ3XCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBsb2cubGV2ZWwubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTMgcHktMSBmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgd2hpdGVzcGFjZS1uby13cmFwXCI+e3sgbG9nLmRhdGUgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBweC0zIHB5LTEgbGVhZGluZy10aWdodCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LW1kXCIgdi1odG1sPVwibG9nLnRleHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImxvZy5pbkZpbGVcIiBjbGFzcz1cInRydW5jYXRlIHB0LTIgdGV4dC14cyB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsb2cuaW5GaWxlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWxvYWRlZFwiIGNsYXNzPVwiYmxvY2sgcHgtMyBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZyBmaWxlIDxjb2RlIHYtaWY9XCJmaWxlXCI+e3tmaWxlfX08L2NvZGU+IDxmYS1pY29uIGljb249XCJjb2dcIiBjbGFzcz1cImZhLXNwaW4gbWwtM1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZGVkICYmIGxvZ3MubGVuZ3RoID09IDBcIiBjbGFzcz1cImJsb2NrIHB4LTMgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBmaWxlIGVtcHR5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1aS1tb2RhbCBuYW1lPVwiZXJyb3Itdmlld1wiIHRpdGxlPVwiRXJyb3IgRGV0YWlsc1wiIGV4dHJhLWxhcmdlPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiY3VycmVudEVycm9yLmRhdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVhZGluZy10aWdodCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByLTIgd2hpdGVzcGFjZS1uby13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UaW1lc3RhbXA6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aGl0ZXNwYWNlLW5vLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2N1cnJlbnRFcnJvci5kYXRlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHItMiB3aGl0ZXNwYWNlLW5vLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkVycm9yIFRleHQ6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dzX19mdWxsLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13YXJuaW5nLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2N1cnJlbnRFcnJvci50ZXh0RnVsbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1zbVwiPlN0YWNrIFRyYWNlOjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dzX19zdGFjay10cmFjZSBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwicm93IGluIGN1cnJlbnRFcnJvci5zdGFja1RyYWNlXCIgOmtleT1cInJvd1wiIGNsYXNzPVwibG9nc19fc3RhY2stcm93XCIgdi1pZj1cInJvdy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jvd319XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC91aS1tb2RhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogJ0xvZ3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnL2RhdGF0YWJsZS9tYXRyaWNlcycsXG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGU6ICcnLFxuICAgICAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgICAgICBsb2dzOiBbXSxcbiAgICAgICAgICAgICAgICBjdXJyZW50RXJyb3I6IHt9LFxuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZmlsZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLiRyb3V0ZS5xdWVyeSA/IHRoaXMuJHJvdXRlLnF1ZXJ5IDogJydcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZW5hbWUuZmlsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIG5leHQodm0gPT4ge1xuICAgICAgICAgICAgICAgIHZtLmdldEZpbGUodG8ucXVlcnkuZmlsZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVVcGRhdGUodG8sZnJvbSxuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmdldEZpbGUodG8ucXVlcnkuZmlsZSlcbiAgICAgICAgICAgIG5leHQoKVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldEZpbGUoZmlsZW5hbWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgICAgICAgICAgdm0ubG9hZGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBsZXQgcXVlcnkgPSBmaWxlbmFtZSA/ICc/bD0nICsgZmlsZW5hbWUgOiAnJ1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9sb2dzJyArIHF1ZXJ5KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2bS5jdXJyZW50RmlsZSA9IHJlc3BvbnNlLmRhdGEuY3VycmVudEZpbGVcbiAgICAgICAgICAgICAgICAgICAgdm0uZmlsZXMgPSByZXNwb25zZS5kYXRhLmZpbGVzXG4gICAgICAgICAgICAgICAgICAgIHZtLmxvZ3MgPSByZXNwb25zZS5kYXRhLmxvZ3NcbiAgICAgICAgICAgICAgICAgICAgdm0ubG9hZGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjaGFuZ2VDdXJyZW50RXJyb3IobG9nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RXJyb3IgPSBsb2dcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJidWdcIiB9IH0sIFtfdm0uX3YoXCJMb2dzXCIpXSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ3NfX3NpZGViYXIgc2lkZS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZmlsZXMsIGZ1bmN0aW9uKGZpbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgcHgtMyBweS0yIHRleHQtZ3JheS05MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBwYXRoOiBcImxvZ3M/XCIsIHF1ZXJ5OiB7IGZpbGU6IGZpbGUgfSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmlsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICFfdm0ubG9hZGVkICYmIF92bS5maWxlcy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2sgcHgtMyBweS0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGxvZyBmaWxlcyBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1zcGluIG1sLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJjb2dcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmxvYWRlZCAmJiBfdm0uZmlsZXMubGVuZ3RoID09IDBcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJibG9jayBweC0zIHB5LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBObyBsb2dzIGZvdW5kXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ3NfX21haW4gY29udGVudC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0ubG9hZGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5sb2dzLCBmdW5jdGlvbihsb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmVycm9yLXZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJlcnJvci12aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbG9nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dzX19yb3cgZmxleCBmbGV4LW5vLXdyYXAgcHktMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlQ3VycmVudEVycm9yKGxvZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHgtMiBweS0xIGZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IHdoaXRlc3BhY2Utbm8td3JhcCB0ZXh0LVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5sZXZlbC5zdGF0dXMgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItNjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IGxvZy5sZXZlbC5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1pbnZlcnNlISBmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIGxvZy5sZXZlbC5pY29uXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGxvZy5sZXZlbC5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHgtMyBweS0xIGZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB3aGl0ZXNwYWNlLW5vLXdyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobG9nLmRhdGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wgcHgtMyBweS0xIGxlYWRpbmctdGlnaHQgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1tZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhsb2cudGV4dCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmluRmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVuY2F0ZSBwdC0yIHRleHQteHMgdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MobG9nLmluRmlsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5sb2FkZWRcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJsb2NrIHB4LTMgcHktNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGZpbGUgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiY29kZVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZmlsZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtc3BpbiBtbC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImNvZ1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmxvYWRlZCAmJiBfdm0ubG9ncy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJibG9jayBweC0zIHB5LTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZyBmaWxlIGVtcHR5XFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInVpLW1vZGFsXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogXCJlcnJvci12aWV3XCIsXG4gICAgICAgICAgICB0aXRsZTogXCJFcnJvciBEZXRhaWxzXCIsXG4gICAgICAgICAgICBcImV4dHJhLWxhcmdlXCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uY3VycmVudEVycm9yLmRhdGVcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVhZGluZy10aWdodCBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IHAtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwci0yIHdoaXRlc3BhY2Utbm8td3JhcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiVGltZXN0YW1wOlwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlc3BhY2Utbm8td3JhcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5jdXJyZW50RXJyb3IuZGF0ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggcC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByLTIgd2hpdGVzcGFjZS1uby13cmFwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJFcnJvciBUZXh0OlwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ3NfX2Z1bGwtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2FybmluZy04MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmN1cnJlbnRFcnJvci50ZXh0RnVsbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHgtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTdGFjayBUcmFjZTpcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxvZ3NfX3N0YWNrLXRyYWNlIG92ZXJmbG93LWF1dG9cIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmN1cnJlbnRFcnJvci5zdGFja1RyYWNlLCBmdW5jdGlvbihyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93Lmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiByb3csIHN0YXRpY0NsYXNzOiBcImxvZ3NfX3N0YWNrLXJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mocm93KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyIHB4LTMgcHQtMlwiIH0sIFtcbiAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW192bS5fdihcIkF2YWlsYWJsZSBMb2dzXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyIHB4LTQgcHktMlwiIH0sIFtcbiAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW192bS5fdihcIkxvZyBFbnRyaWVzXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHNcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIkNsaWNrIGFuIGVudHJ5IHRvIHZpZXcgZnVsbCBlcnJvciBhbmQgc3RhY2sgdHJhY2VcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZWZlNDRjYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGVmZTQ0Y2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGVmZTQ0Y2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGVmZTQ0Y2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZWZlNDRjYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZWZlNDRjYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL0xvZ3MvSW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZWZlNDRjYSZcIiJdLCJzb3VyY2VSb290IjoiIn0=