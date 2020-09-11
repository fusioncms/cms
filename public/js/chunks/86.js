(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0xvZ3MvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Mb2dzL0luZGV4LnZ1ZT81ZmZjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Mb2dzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTG9ncy9JbmRleC52dWU/NDhiNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTG9ncy9JbmRleC52dWU/ZThhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0dBO0FBQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQURBO0FBU0EsTUFUQSxrQkFTQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxxQkFGQTtBQUdBLGVBSEE7QUFJQSxjQUpBO0FBS0Esc0JBTEE7QUFNQTtBQU5BO0FBUUEsR0FsQkE7QUFvQkE7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkEsR0FwQkE7QUEyQkEsa0JBM0JBLDRCQTJCQSxFQTNCQSxFQTJCQSxJQTNCQSxFQTJCQSxJQTNCQSxFQTJCQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0EsR0EvQkE7QUFpQ0EsbUJBakNBLDZCQWlDQSxFQWpDQSxFQWlDQSxJQWpDQSxFQWlDQSxJQWpDQSxFQWlDQTtBQUNBO0FBQ0E7QUFDQSxHQXBDQTtBQXNDQTtBQUNBLFdBREEsbUJBQ0EsUUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQVhBO0FBYUEsc0JBYkEsOEJBYUEsR0FiQSxFQWFB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RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzQkFBc0I7QUFDakQsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFpRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQ0FBMkM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QztBQUM3RCxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QztBQUM3RCxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdlRBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzg2LmpzP2lkPWVjNmViYTdhNTc0ZTEwYzI5MDJlIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPHBhZ2UtdGl0bGUgaWNvbj1cImJ1Z1wiPkxvZ3M8L3BhZ2UtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dzX19zaWRlYmFyIHNpZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIHB4LTMgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWItMFwiPkF2YWlsYWJsZSBMb2dzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoZmlsZSwgaW5kZXgpIGluIGZpbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dG89XCJ7IHBhdGg6ICdsb2dzPycsIHF1ZXJ5OiB7ZmlsZTogZmlsZX0gfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIHB4LTMgcHktMiB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWxlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhbG9hZGVkICYmIGZpbGVzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJibG9jayBweC0zIHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGxvZyBmaWxlcyA8ZmEtaWNvbiBpY29uPVwiY29nXCIgY2xhc3M9XCJmYS1zcGluIG1sLTJcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImxvYWRlZCAmJiBmaWxlcy5sZW5ndGggPT0gMFwiIGNsYXNzPVwiYmxvY2sgcHgtMyBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gbG9ncyBmb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nc19fbWFpbiBjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBweC00IHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1iLTBcIj5Mb2cgRW50cmllczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXhzXCI+Q2xpY2sgYW4gZW50cnkgdG8gdmlldyBmdWxsIGVycm9yIGFuZCBzdGFjayB0cmFjZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwibG9nIGluIGxvZ3NcIiA6a2V5PVwibG9nXCIgY2xhc3M9XCJsb2dzX19yb3cgZmxleCBmbGV4LW5vLXdyYXAgcHktMlwiIEBjbGljaz1cImNoYW5nZUN1cnJlbnRFcnJvcihsb2cpXCIgdi1tb2RhbDplcnJvci12aWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMiBweS0xIGZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiJ2QtZmxleCB3aGl0ZXNwYWNlLW5vLXdyYXAgdGV4dC0nICsgbG9nLmxldmVsLnN0YXR1cyArICctNjAwJ1wiIDp0aXRsZT1cImxvZy5sZXZlbC5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsIGxvZy5sZXZlbC5pY29uXVwiIGNsYXNzPVwiZmEtaW52ZXJzZSEgZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxvZy5sZXZlbC5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMyBweS0xIGZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB3aGl0ZXNwYWNlLW5vLXdyYXBcIj57eyBsb2cuZGF0ZSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHB4LTMgcHktMSBsZWFkaW5nLXRpZ2h0IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtbWRcIiB2LWh0bWw9XCJsb2cudGV4dFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9nLmluRmlsZVwiIGNsYXNzPVwidHJ1bmNhdGUgcHQtMiB0ZXh0LXhzIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xvZy5pbkZpbGV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhbG9hZGVkXCIgY2xhc3M9XCJibG9jayBweC0zIHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGZpbGUgPGNvZGUgdi1pZj1cImZpbGVcIj57e2ZpbGV9fTwvY29kZT4gPGZhLWljb24gaWNvbj1cImNvZ1wiIGNsYXNzPVwiZmEtc3BpbiBtbC0zXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkZWQgJiYgbG9ncy5sZW5ndGggPT0gMFwiIGNsYXNzPVwiYmxvY2sgcHgtMyBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIGZpbGUgZW1wdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVpLW1vZGFsIG5hbWU9XCJlcnJvci12aWV3XCIgdGl0bGU9XCJFcnJvciBEZXRhaWxzXCIgZXh0cmEtbGFyZ2U+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJjdXJyZW50RXJyb3IuZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWFkaW5nLXRpZ2h0IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHItMiB3aGl0ZXNwYWNlLW5vLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRpbWVzdGFtcDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndoaXRlc3BhY2Utbm8td3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y3VycmVudEVycm9yLmRhdGV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwci0yIHdoaXRlc3BhY2Utbm8td3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RXJyb3IgVGV4dDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ3NfX2Z1bGwtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdhcm5pbmctODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y3VycmVudEVycm9yLnRleHRGdWxsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXNtXCI+U3RhY2sgVHJhY2U6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ3NfX3N0YWNrLXRyYWNlIG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJyb3cgaW4gY3VycmVudEVycm9yLnN0YWNrVHJhY2VcIiA6a2V5PVwicm93XCIgY2xhc3M9XCJsb2dzX19zdGFjay1yb3dcIiB2LWlmPVwicm93Lmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cm93fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3VpLW1vZGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiAnTG9ncydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6ICcvZGF0YXRhYmxlL21hdHJpY2VzJyxcbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsZTogJycsXG4gICAgICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgICAgIGxvZ3M6IFtdLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvcjoge30sXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBmaWxlKCkge1xuICAgICAgICAgICAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5ID8gdGhpcy4kcm91dGUucXVlcnkgOiAnJ1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWxlbmFtZS5maWxlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgbmV4dCh2bSA9PiB7XG4gICAgICAgICAgICAgICAgdm0uZ2V0RmlsZSh0by5xdWVyeS5maWxlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZVVwZGF0ZSh0byxmcm9tLG5leHQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RmlsZSh0by5xdWVyeS5maWxlKVxuICAgICAgICAgICAgbmV4dCgpXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0RmlsZShmaWxlbmFtZSkge1xuICAgICAgICAgICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgICAgICAgICB2bS5sb2FkZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGxldCBxdWVyeSA9IGZpbGVuYW1lID8gJz9sPScgKyBmaWxlbmFtZSA6ICcnXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2xvZ3MnICsgcXVlcnkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZtLmN1cnJlbnRGaWxlID0gcmVzcG9uc2UuZGF0YS5jdXJyZW50RmlsZVxuICAgICAgICAgICAgICAgICAgICB2bS5maWxlcyA9IHJlc3BvbnNlLmRhdGEuZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgdm0ubG9ncyA9IHJlc3BvbnNlLmRhdGEubG9nc1xuICAgICAgICAgICAgICAgICAgICB2bS5sb2FkZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNoYW5nZUN1cnJlbnRFcnJvcihsb2cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFcnJvciA9IGxvZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtfYyhcInBhZ2UtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImJ1Z1wiIH0gfSwgW192bS5fdihcIkxvZ3NcIildKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nc19fc2lkZWJhciBzaWRlLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5maWxlcywgZnVuY3Rpb24oZmlsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJibG9jayBweC0zIHB5LTIgdGV4dC1ncmF5LTkwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IHBhdGg6IFwibG9ncz9cIiwgcXVlcnk6IHsgZmlsZTogZmlsZSB9IH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmaWxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgIV92bS5sb2FkZWQgJiYgX3ZtLmZpbGVzLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9jayBweC0zIHB5LTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcgbG9nIGZpbGVzIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLXNwaW4gbWwtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImNvZ1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0ubG9hZGVkICYmIF92bS5maWxlcy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2NrIHB4LTMgcHktMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIGxvZ3MgZm91bmRcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nc19fbWFpbiBjb250ZW50LWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5sb2FkZWRcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmxvZ3MsIGZ1bmN0aW9uKGxvZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZXJyb3Itdmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImVycm9yLXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBsb2csXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ3NfX3JvdyBmbGV4IGZsZXgtbm8td3JhcCBweS0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VDdXJyZW50RXJyb3IobG9nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJweC0yIHB5LTEgZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXggd2hpdGVzcGFjZS1uby13cmFwIHRleHQtXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmxldmVsLnN0YXR1cyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi02MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogbG9nLmxldmVsLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWludmVyc2UhIGZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgbG9nLmxldmVsLmljb25dIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MobG9nLmxldmVsLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJweC0zIHB5LTEgZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHdoaXRlc3BhY2Utbm8td3JhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhsb2cuZGF0ZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbCBweC0zIHB5LTEgbGVhZGluZy10aWdodCBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LW1kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKGxvZy50ZXh0KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuaW5GaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRydW5jYXRlIHB0LTIgdGV4dC14cyB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhsb2cuaW5GaWxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmxvYWRlZFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2sgcHgtMyBweS00XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcgZmlsZSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJjb2RlXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5maWxlKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1zcGluIG1sLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiY29nXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubG9hZGVkICYmIF92bS5sb2dzLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2NrIHB4LTMgcHktNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nIGZpbGUgZW1wdHlcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidWktbW9kYWxcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBcImVycm9yLXZpZXdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIERldGFpbHNcIixcbiAgICAgICAgICAgIFwiZXh0cmEtbGFyZ2VcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5jdXJyZW50RXJyb3IuZGF0ZVxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWFkaW5nLXRpZ2h0IG1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggcC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByLTIgd2hpdGVzcGFjZS1uby13cmFwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJUaW1lc3RhbXA6XCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hpdGVzcGFjZS1uby13cmFwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmN1cnJlbnRFcnJvci5kYXRlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBwLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHItMiB3aGl0ZXNwYWNlLW5vLXdyYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkVycm9yIFRleHQ6XCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nc19fZnVsbC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13YXJuaW5nLTgwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uY3VycmVudEVycm9yLnRleHRGdWxsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlN0YWNrIFRyYWNlOlwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibG9nc19fc3RhY2stdHJhY2Ugb3ZlcmZsb3ctYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY3VycmVudEVycm9yLnN0YWNrVHJhY2UsIGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3cubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHJvdywgc3RhdGljQ2xhc3M6IFwibG9nc19fc3RhY2stcm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhyb3cpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXIgcHgtMyBwdC0yXCIgfSwgW1xuICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiQXZhaWxhYmxlIExvZ3NcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXIgcHgtNCBweS0yXCIgfSwgW1xuICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiTG9nIEVudHJpZXNcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14c1wiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiQ2xpY2sgYW4gZW50cnkgdG8gdmlldyBmdWxsIGVycm9yIGFuZCBzdGFjayB0cmFjZVwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlZmU0NGNhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwZWZlNDRjYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZWZlNDRjYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZWZlNDRjYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlZmU0NGNhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBlZmU0NGNhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvTG9ncy9JbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlZmU0NGNhJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==