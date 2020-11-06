(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

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
        return _c("div", { key: i1, staticClass: "card" }, [
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
                    ? _c("ui-button", { attrs: { disabled: "" } }, [
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
                  { key: name },
                  _vm._l(changelog, function(issues, text) {
                    return _c("div", { key: text, staticClass: "row" }, [
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
              _c("ui-pagination", {
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
            "ui-modal",
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
                    "ui-button",
                    {
                      staticClass: "button button--primary",
                      attrs: { type: "button" },
                      on: { click: _vm.confirm }
                    },
                    [_vm._v("Confirm")]
                  ),
                  _vm._v(" "),
                  _c(
                    "ui-button",
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VwZGF0ZXMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVzL0luZGV4LnZ1ZT9kMzllIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXBkYXRlcy9JbmRleC52dWU/ZjYzNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXBkYXRlcy9JbmRleC52dWU/ZjVlMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1R0E7QUFDQSxpQkFEQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FUQTtBQVdBO0FBQ0EsV0FEQSxxQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLE1BTEEsZ0JBS0E7QUFDQTtBQUNBLEtBUEE7QUFTQSxnQkFUQSwwQkFTQTtBQUNBO0FBQ0E7QUFYQSxHQVhBO0FBeUJBO0FBQ0EsVUFEQSxrQkFDQSxHQURBLEVBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsS0FIQTtBQUtBLGNBTEEsc0JBS0EsSUFMQSxFQUtBO0FBQ0E7QUFDQSxLQVBBO0FBU0EsV0FUQSxtQkFTQSxFQVRBLEVBU0E7QUFDQTtBQUNBLEtBWEE7QUFhQSxXQWJBLHFCQWFBO0FBQ0E7QUFBQTtBQUFBLFNBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxPQUhBLFdBSUE7QUFDQTtBQUNBLE9BTkE7QUFPQSxLQXJCQTtBQXVCQSxTQXZCQSxtQkF1QkE7QUFDQTtBQUNBLEtBekJBO0FBMkJB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy8xMzAuanM/aWQ9YjNiNTg5NTNkM2VmNWUyY2UxYTgiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8cGFnZS10aXRsZSBpY29uPVwiZG93bmxvYWRcIj5VcGRhdGVzPC9wYWdlLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYmV0YS5nZXRmdXNpb25jbXMuY29tL2NoYW5nZWxvZ1wiIHRpdGxlPVwiQ2hhbmdlbG9nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgY3VycmVudCB9fTwvYT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiB2LWZvcj1cIih2ZXJzaW9uLCBpMSkgaW4gdmVyc2lvbnNcIiA6a2V5PVwiaTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19oZWFkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgdmVyc2lvbi50aXRsZSB9fVxuXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14cyBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVsZWFzZWQge3sgJG1vbWVudCh2ZXJzaW9uLmRhdGVfcHVibGlzaGVkKS5mb3JtYXQoJ01NTSBEbywgWVlZWScpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSB1cGdyYWRlIC0tXG4gICAgICAgICAgICAgICAgICAgIDx1aS1idXR0b24gdi1pZj1cInZlcnNpb24uaWQgPiBpZFwiIEBjbGljaz1cInVwZ3JhZGUodmVyc2lvbi5pZClcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZ3JhZGUgdG8ge3sgdmVyc2lvbi50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBjdXJyZW50IHZlcnNpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1idXR0b24gdi1pZj1cInZlcnNpb24uX2lzQ3VycmVudFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudCB2ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIDwvdWktYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gYXR0YWNobWVudHMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhICB2LWZvcj1cIihhdHRhY2htZW50LCBpMikgaW4gdmVyc2lvbi5hdHRhY2htZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiYGF0dGFjaG1lbnQtJHtpMX0tJHtpMn1gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0taWNvbiBtbC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiYXR0YWNobWVudC51cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwiYXR0YWNobWVudC5taW1lX3R5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJkb3dubG9hZFwiIGNsYXNzPVwiaWNvblwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gZ2l0aHViIC0tPlxuICAgICAgICAgICAgICAgICAgICA8YSAgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uIG1sLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJgaHR0cHM6Ly9naXRodWIuY29tL2Z1c2lvbmNtcy9mdXNpb25jbXMvcmVsZWFzZXMvdGFnLyR7dmVyc2lvbi50aXRsZX1gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVmlldyBvbiBHaXRodWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBpY29uPVwiY29kZVwiIGNsYXNzPVwiaWNvblwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHA+e3sgdmVyc2lvbnMuY29udGVudF90ZXh0IH19PC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihjaGFuZ2Vsb2csIG5hbWUpIGluIHZlcnNpb24uX2NoYW5nZWxvZ1wiIDprZXk9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWZvcj1cIihpc3N1ZXMsIHRleHQpIGluIGNoYW5nZWxvZ1wiIDprZXk9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiPnt7IG5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRleHQgfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICB2LWZvcj1cImlzc3VlIGluIGlzc3Vlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItMSB0ZXh0LXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlzc3VlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJgaHR0cHM6Ly9naXRodWIuY29tL2Z1c2lvbmNtcy9mdXNpb25jbXMvaXNzdWVzLyR7aXNzdWV9YFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAje3sgaXNzdWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTZcIiB2LWlmPVwicGFnaW5hdGlvbi50b3RhbCA+IDFcIj5cbiAgICAgICAgICAgIDx1aS1wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgQGlucHV0PVwiY2hhbmdlUGFnZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICA6dG90YWw9XCJwYWdpbmF0aW9uLmxhc3RfcGFnZVwiXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwicGFnaW5hdGlvbi5jdXJyZW50X3BhZ2VcIlxuICAgICAgICAgICAgPjwvdWktcGFnaW5hdGlvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cIm1vZGFsc1wiPlxuICAgICAgICAgICAgPHVpLW1vZGFsXG4gICAgICAgICAgICAgICAga2V5PVwidXBkYXRlcl9tb2RhbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVwZGF0ZXJcIlxuICAgICAgICAgICAgICAgIDp0aXRsZT1cImBVcGRhdGUgdG8gJHt2ZXJzaW9uLnRpdGxlfWBcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJpc0NvbmZpcm1pbmdcIj5cblxuICAgICAgICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byB1cGRhdGUgdG8gdmVyc2lvbiB7eyB2ZXJzaW9uLnRpdGxlIH19PzwvcD5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1idXR0b24gQGNsaWNrPVwiY29uZmlybVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIj5Db25maXJtPC91aS1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1idXR0b24gQGNsaWNrPVwiY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtci0zXCI+Q2FuY2VsPC91aS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWktbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICd1cGRhdGVzJyxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uczogW10sXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgY3VycmVudCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHYke3RoaXMuJHN0b3JlLnN0YXRlLmZ1c2lvbi52ZXJzaW9ufWBcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlkKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRCeSgndGl0bGUnLCB0aGlzLmN1cnJlbnQpLmlkXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc0NvbmZpcm1pbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhIHRoaXMudmVyc2lvblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZpbmRCeShrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uZmluZCh0aGlzLnZlcnNpb25zLCAodmVyc2lvbikgPT4gdmVyc2lvbltrZXldID09IHZhbHVlKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY2hhbmdlUGFnZShwYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKHBhZ2UpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1cGdyYWRlKGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gdGhpcy5maW5kQnkoJ2lkJywgaWQpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjb25maXJtKCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvdXBkYXRlcycsIHsgdmVyc2lvbjogdGhpcy52ZXJzaW9uIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY2xvc2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlZnJlc2gocGFnZSkge1xuICAgICAgICAgICAgICAgIGdldE1vZGVscygoZXJyb3IsIHZlcnNpb25zLCBwYWdpbmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QoZXJyb3IudG9TdHJpbmcoKSwgJ2RhbmdlcicpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb25zICAgPSB2ZXJzaW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0gcGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgcGFnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBnZXRNb2RlbHMoKGVycm9yLCB2ZXJzaW9ucywgcGFnaW5hdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4gdG9hc3QoZXJyb3IudG9TdHJpbmcoKSwgJ2RhbmdlcicpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS52ZXJzaW9ucyAgID0gdmVyc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnBhZ2luYXRpb24gPSBwYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRNb2RlbHMoY2FsbGJhY2ssIHBhZ2UgPSAxKSB7XG4gICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvdXBkYXRlcz9wYWdlPSR7cGFnZX1gKVxuICAgICAgICBdKS50aGVuKGF4aW9zLnNwcmVhZCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlLmRhdGEuZGF0YSwgcmVzcG9uc2UuZGF0YS5tZXRhKVxuICAgICAgICB9KSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ1RoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgY291bGQgbm90IGJlIGZvdW5kJykpXG4gICAgICAgIH0pXG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJkb3dubG9hZFwiIH0gfSwgW192bS5fdihcIlVwZGF0ZXNcIildKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicG9ydGFsXCIsIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vYmV0YS5nZXRmdXNpb25jbXMuY29tL2NoYW5nZWxvZ1wiLFxuICAgICAgICAgICAgICB0aXRsZTogXCJDaGFuZ2Vsb2dcIixcbiAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uY3VycmVudCkpXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnZlcnNpb25zLCBmdW5jdGlvbih2ZXJzaW9uLCBpMSkge1xuICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGkxLCBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9faGVhZGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkX190aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyh2ZXJzaW9uLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzIGJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgUmVsZWFzZWQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vbWVudCh2ZXJzaW9uLmRhdGVfcHVibGlzaGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHZlcnNpb24uX2lzQ3VycmVudFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwidWktYnV0dG9uXCIsIHsgYXR0cnM6IHsgZGlzYWJsZWQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBDdXJyZW50IHZlcnNpb25cXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbCh2ZXJzaW9uLmF0dGFjaG1lbnRzLCBmdW5jdGlvbihhdHRhY2htZW50LCBpMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImF0dGFjaG1lbnQtXCIgKyBpMSArIFwiLVwiICsgaTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1pY29uIG1sLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGF0dGFjaG1lbnQudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogYXR0YWNobWVudC5taW1lX3R5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJkb3dubG9hZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLWljb24gbWwtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9mdXNpb25jbXMvZnVzaW9uY21zL3JlbGVhc2VzL3RhZy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJWaWV3IG9uIEdpdGh1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiY29kZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS52ZXJzaW9ucy5jb250ZW50X3RleHQpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2wodmVyc2lvbi5fY2hhbmdlbG9nLCBmdW5jdGlvbihjaGFuZ2Vsb2csIG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IG5hbWUgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChjaGFuZ2Vsb2csIGZ1bmN0aW9uKGlzc3VlcywgdGV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IHRleHQsIHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRleHQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGlzc3VlcywgZnVuY3Rpb24oaXNzdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpc3N1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMSB0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2Z1c2lvbmNtcy9mdXNpb25jbXMvaXNzdWVzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpc3N1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wYWdpbmF0aW9uLnRvdGFsID4gMVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidWktcGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRvdGFsOiBfdm0ucGFnaW5hdGlvbi5sYXN0X3BhZ2UsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2luYXRpb24uY3VycmVudF9wYWdlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVBhZ2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1aS1tb2RhbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwidXBkYXRlcl9tb2RhbFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwidXBkYXRlclwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVwZGF0ZSB0byBcIiArIF92bS52ZXJzaW9uLnRpdGxlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0NvbmZpcm1pbmcsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLmlzQ29uZmlybWluZyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0NvbmZpcm1pbmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHVwZGF0ZSB0byB2ZXJzaW9uIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52ZXJzaW9uLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgIFwiP1wiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIHsgc2xvdDogXCJmb290ZXJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNvbmZpcm0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29uZmlybVwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzAxMDJjMTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2MwMTAyYzE4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2MwMTAyYzE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2MwMTAyYzE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzAxMDJjMTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzAxMDJjMTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVzL0luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzAxMDJjMTgmXCIiXSwic291cmNlUm9vdCI6IiJ9