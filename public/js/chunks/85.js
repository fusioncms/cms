(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

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
        "p-modal",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0xvZ3MvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Mb2dzL0luZGV4LnZ1ZT81ZmZjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Mb2dzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTG9ncy9JbmRleC52dWU/NDhiNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTG9ncy9JbmRleC52dWU/ZThhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0dBO0FBQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQURBO0FBU0EsTUFUQSxrQkFTQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxxQkFGQTtBQUdBLGVBSEE7QUFJQSxjQUpBO0FBS0Esc0JBTEE7QUFNQTtBQU5BO0FBUUEsR0FsQkE7QUFvQkE7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkEsR0FwQkE7QUEyQkEsa0JBM0JBLDRCQTJCQSxFQTNCQSxFQTJCQSxJQTNCQSxFQTJCQSxJQTNCQSxFQTJCQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0EsR0EvQkE7QUFpQ0EsbUJBakNBLDZCQWlDQSxFQWpDQSxFQWlDQSxJQWpDQSxFQWlDQSxJQWpDQSxFQWlDQTtBQUNBO0FBQ0E7QUFDQSxHQXBDQTtBQXNDQTtBQUNBLFdBREEsbUJBQ0EsUUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQVhBO0FBYUEsc0JBYkEsOEJBYUEsR0FiQSxFQWFB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RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzQkFBc0I7QUFDakQsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFpRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQ0FBMkM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QztBQUM3RCxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QztBQUM3RCxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdlRBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzg1LmpzP2lkPWUyMDg0MjI5NTA0NWZmZDhlM2UwIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPHBhZ2UtdGl0bGUgaWNvbj1cImJ1Z1wiPkxvZ3M8L3BhZ2UtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dzX19zaWRlYmFyIHNpZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIHB4LTMgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWItMFwiPkF2YWlsYWJsZSBMb2dzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoZmlsZSwgaW5kZXgpIGluIGZpbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dG89XCJ7IHBhdGg6ICdsb2dzPycsIHF1ZXJ5OiB7ZmlsZTogZmlsZX0gfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIHB4LTMgcHktMiB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWxlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhbG9hZGVkICYmIGZpbGVzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJibG9jayBweC0zIHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGxvZyBmaWxlcyA8ZmEtaWNvbiBpY29uPVwiY29nXCIgY2xhc3M9XCJmYS1zcGluIG1sLTJcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImxvYWRlZCAmJiBmaWxlcy5sZW5ndGggPT0gMFwiIGNsYXNzPVwiYmxvY2sgcHgtMyBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gbG9ncyBmb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nc19fbWFpbiBjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBweC00IHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1iLTBcIj5Mb2cgRW50cmllczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXhzXCI+Q2xpY2sgYW4gZW50cnkgdG8gdmlldyBmdWxsIGVycm9yIGFuZCBzdGFjayB0cmFjZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwibG9nIGluIGxvZ3NcIiA6a2V5PVwibG9nXCIgY2xhc3M9XCJsb2dzX19yb3cgZmxleCBmbGV4LW5vLXdyYXAgcHktMlwiIEBjbGljaz1cImNoYW5nZUN1cnJlbnRFcnJvcihsb2cpXCIgdi1tb2RhbDplcnJvci12aWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMiBweS0xIGZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2QtZmxleCB3aGl0ZXNwYWNlLW5vLXdyYXAgdGV4dC0nICsgbG9nLmxldmVsLnN0YXR1cyArICctNjAwJ1wiIDp0aXRsZT1cImxvZy5sZXZlbC5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsIGxvZy5sZXZlbC5pY29uXVwiIGNsYXNzPVwiZmEtaW52ZXJzZSEgZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxvZy5sZXZlbC5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMyBweS0xIGZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB3aGl0ZXNwYWNlLW5vLXdyYXBcIj57eyBsb2cuZGF0ZSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHB4LTMgcHktMSBsZWFkaW5nLXRpZ2h0IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtbWRcIiB2LWh0bWw9XCJsb2cudGV4dFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9nLmluRmlsZVwiIGNsYXNzPVwidHJ1bmNhdGUgcHQtMiB0ZXh0LXhzIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xvZy5pbkZpbGV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhbG9hZGVkXCIgY2xhc3M9XCJibG9jayBweC0zIHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGZpbGUgPGNvZGUgdi1pZj1cImZpbGVcIj57e2ZpbGV9fTwvY29kZT4gPGZhLWljb24gaWNvbj1cImNvZ1wiIGNsYXNzPVwiZmEtc3BpbiBtbC0zXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkZWQgJiYgbG9ncy5sZW5ndGggPT0gMFwiIGNsYXNzPVwiYmxvY2sgcHgtMyBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIGZpbGUgZW1wdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAtbW9kYWwgbmFtZT1cImVycm9yLXZpZXdcIiB0aXRsZT1cIkVycm9yIERldGFpbHNcIiBleHRyYS1sYXJnZT5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImN1cnJlbnRFcnJvci5kYXRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlYWRpbmctdGlnaHQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwci0yIHdoaXRlc3BhY2Utbm8td3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGltZXN0YW1wOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hpdGVzcGFjZS1uby13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tjdXJyZW50RXJyb3IuZGF0ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByLTIgd2hpdGVzcGFjZS1uby13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FcnJvciBUZXh0Ojwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nc19fZnVsbC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2FybmluZy04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tjdXJyZW50RXJyb3IudGV4dEZ1bGx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtc21cIj5TdGFjayBUcmFjZTo8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nc19fc3RhY2stdHJhY2Ugb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cInJvdyBpbiBjdXJyZW50RXJyb3Iuc3RhY2tUcmFjZVwiIDprZXk9XCJyb3dcIiBjbGFzcz1cImxvZ3NfX3N0YWNrLXJvd1wiIHYtaWY9XCJyb3cubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyb3d9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcC1tb2RhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogJ0xvZ3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnL2RhdGF0YWJsZS9tYXRyaWNlcycsXG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGU6ICcnLFxuICAgICAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgICAgICBsb2dzOiBbXSxcbiAgICAgICAgICAgICAgICBjdXJyZW50RXJyb3I6IHt9LFxuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZmlsZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLiRyb3V0ZS5xdWVyeSA/IHRoaXMuJHJvdXRlLnF1ZXJ5IDogJydcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZW5hbWUuZmlsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIG5leHQodm0gPT4ge1xuICAgICAgICAgICAgICAgIHZtLmdldEZpbGUodG8ucXVlcnkuZmlsZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVVcGRhdGUodG8sZnJvbSxuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmdldEZpbGUodG8ucXVlcnkuZmlsZSlcbiAgICAgICAgICAgIG5leHQoKVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldEZpbGUoZmlsZW5hbWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgICAgICAgICAgdm0ubG9hZGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBsZXQgcXVlcnkgPSBmaWxlbmFtZSA/ICc/bD0nICsgZmlsZW5hbWUgOiAnJ1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9sb2dzJyArIHF1ZXJ5KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2bS5jdXJyZW50RmlsZSA9IHJlc3BvbnNlLmRhdGEuY3VycmVudEZpbGVcbiAgICAgICAgICAgICAgICAgICAgdm0uZmlsZXMgPSByZXNwb25zZS5kYXRhLmZpbGVzXG4gICAgICAgICAgICAgICAgICAgIHZtLmxvZ3MgPSByZXNwb25zZS5kYXRhLmxvZ3NcbiAgICAgICAgICAgICAgICAgICAgdm0ubG9hZGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjaGFuZ2VDdXJyZW50RXJyb3IobG9nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RXJyb3IgPSBsb2dcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJidWdcIiB9IH0sIFtfdm0uX3YoXCJMb2dzXCIpXSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ3NfX3NpZGViYXIgc2lkZS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZmlsZXMsIGZ1bmN0aW9uKGZpbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgcHgtMyBweS0yIHRleHQtZ3JheS05MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBwYXRoOiBcImxvZ3M/XCIsIHF1ZXJ5OiB7IGZpbGU6IGZpbGUgfSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmlsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICFfdm0ubG9hZGVkICYmIF92bS5maWxlcy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2sgcHgtMyBweS0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGxvZyBmaWxlcyBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1zcGluIG1sLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJjb2dcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmxvYWRlZCAmJiBfdm0uZmlsZXMubGVuZ3RoID09IDBcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJibG9jayBweC0zIHB5LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBObyBsb2dzIGZvdW5kXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ3NfX21haW4gY29udGVudC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0ubG9hZGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5sb2dzLCBmdW5jdGlvbihsb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmVycm9yLXZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJlcnJvci12aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbG9nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dzX19yb3cgZmxleCBmbGV4LW5vLXdyYXAgcHktMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlQ3VycmVudEVycm9yKGxvZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHgtMiBweS0xIGZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IHdoaXRlc3BhY2Utbm8td3JhcCB0ZXh0LVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5sZXZlbC5zdGF0dXMgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItNjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IGxvZy5sZXZlbC5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1pbnZlcnNlISBmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIGxvZy5sZXZlbC5pY29uXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGxvZy5sZXZlbC5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHgtMyBweS0xIGZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB3aGl0ZXNwYWNlLW5vLXdyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobG9nLmRhdGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wgcHgtMyBweS0xIGxlYWRpbmctdGlnaHQgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1tZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhsb2cudGV4dCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmluRmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVuY2F0ZSBwdC0yIHRleHQteHMgdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MobG9nLmluRmlsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5sb2FkZWRcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJsb2NrIHB4LTMgcHktNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGZpbGUgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiY29kZVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZmlsZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtc3BpbiBtbC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImNvZ1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmxvYWRlZCAmJiBfdm0ubG9ncy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJibG9jayBweC0zIHB5LTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZyBmaWxlIGVtcHR5XFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBcImVycm9yLXZpZXdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIERldGFpbHNcIixcbiAgICAgICAgICAgIFwiZXh0cmEtbGFyZ2VcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5jdXJyZW50RXJyb3IuZGF0ZVxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWFkaW5nLXRpZ2h0IG1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggcC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByLTIgd2hpdGVzcGFjZS1uby13cmFwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJUaW1lc3RhbXA6XCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hpdGVzcGFjZS1uby13cmFwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmN1cnJlbnRFcnJvci5kYXRlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBwLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHItMiB3aGl0ZXNwYWNlLW5vLXdyYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkVycm9yIFRleHQ6XCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nc19fZnVsbC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13YXJuaW5nLTgwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uY3VycmVudEVycm9yLnRleHRGdWxsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlN0YWNrIFRyYWNlOlwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibG9nc19fc3RhY2stdHJhY2Ugb3ZlcmZsb3ctYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY3VycmVudEVycm9yLnN0YWNrVHJhY2UsIGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3cubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHJvdywgc3RhdGljQ2xhc3M6IFwibG9nc19fc3RhY2stcm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhyb3cpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXIgcHgtMyBwdC0yXCIgfSwgW1xuICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiQXZhaWxhYmxlIExvZ3NcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXIgcHgtNCBweS0yXCIgfSwgW1xuICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiTG9nIEVudHJpZXNcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14c1wiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiQ2xpY2sgYW4gZW50cnkgdG8gdmlldyBmdWxsIGVycm9yIGFuZCBzdGFjayB0cmFjZVwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlZmU0NGNhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwZWZlNDRjYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZWZlNDRjYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZWZlNDRjYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlZmU0NGNhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBlZmU0NGNhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvTG9ncy9JbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlZmU0NGNhJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==