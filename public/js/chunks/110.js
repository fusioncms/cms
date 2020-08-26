(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'updates',
  data: function data() {
    return {
      version: false,
      items: []
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
      return _.find(this.items, function (item) {
        return item[key] == value;
      });
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
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.get('/api/updates').then(function (response) {
      return next(function (vm) {
        return vm.items = response.data.data;
      });
    });
  }
});

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
      _vm._l(_vm.items, function(item, i1) {
        return _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card__header flex items-center justify-between" },
            [
              _c("h3", { staticClass: "card__title" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(item.title) +
                    "\n\n                "
                ),
                _c("span", { staticClass: "text-xs block" }, [
                  _vm._v(
                    "\n                    Released " +
                      _vm._s(
                        _vm.$moment(item.date_published).format("MMM Do, YYYY")
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
                  item._isCurrent
                    ? _c("p-button", { attrs: { disabled: "" } }, [
                        _vm._v(
                          "\n                    Current version\n                "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(item.attachments, function(attachment, i2) {
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
                          item.title,
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
              _c("p", [_vm._v(_vm._s(_vm.items.content_text))]),
              _vm._v(" "),
              _vm._l(item._changelog, function(changelog, name) {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_c0102c18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=c0102c18& */ "./resources/js/pages/Updates/Index.vue?vue&type=template&id=c0102c18&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VwZGF0ZXMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVzL0luZGV4LnZ1ZT9kMzllIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXBkYXRlcy9JbmRleC52dWU/ZjYzNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXBkYXRlcy9JbmRleC52dWU/ZjVlMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRkE7QUFDQSxpQkFEQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBLG9CQURBO0FBRUE7QUFGQTtBQUlBLEdBUkE7QUFVQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFLQSxNQUxBLGdCQUtBO0FBQ0E7QUFDQSxLQVBBO0FBU0EsZ0JBVEEsMEJBU0E7QUFDQTtBQUNBO0FBWEEsR0FWQTtBQXdCQTtBQUNBLFVBREEsa0JBQ0EsR0FEQSxFQUNBLEtBREEsRUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEtBSEE7QUFLQSxXQUxBLG1CQUtBLEVBTEEsRUFLQTtBQUNBO0FBQ0EsS0FQQTtBQVNBLFdBVEEscUJBU0E7QUFDQTtBQUFBO0FBQUEsU0FDQSxJQURBLENBQ0E7QUFDQTtBQUNBLE9BSEEsV0FJQTtBQUNBO0FBQ0EsT0FOQTtBQU9BLEtBakJBO0FBbUJBLFNBbkJBLG1CQW1CQTtBQUNBO0FBQ0E7QUFyQkEsR0F4QkE7QUFnREEsa0JBaERBLDRCQWdEQSxFQWhEQSxFQWdEQSxJQWhEQSxFQWdEQSxJQWhEQSxFQWdEQTtBQUNB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O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvMTEwLmpzP2lkPTA0NmM2ZDRmZjUwNTdhZTFiNTQzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPHBhZ2UtdGl0bGUgaWNvbj1cImRvd25sb2FkXCI+VXBkYXRlczwvcGFnZS10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2JldGEuZ2V0ZnVzaW9uY21zLmNvbS9jaGFuZ2Vsb2dcIiB0aXRsZT1cIkNoYW5nZWxvZ1wiIHRhcmdldD1cIl9ibGFua1wiPnt7IGN1cnJlbnQgfX08L2E+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgdi1mb3I9XCIoaXRlbSwgaTEpIGluIGl0ZW1zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9faGVhZGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmRfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udGl0bGUgfX1cblxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteHMgYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlbGVhc2VkIHt7ICRtb21lbnQoaXRlbS5kYXRlX3B1Ymxpc2hlZCkuZm9ybWF0KCdNTU0gRG8sIFlZWVknKSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gdXBncmFkZSAtLVxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1pZj1cIml0ZW0uaWQgPiBpZFwiIEBjbGljaz1cInVwZ3JhZGUoaXRlbS5pZClcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZ3JhZGUgdG8ge3sgaXRlbS50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAtLT5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIGN1cnJlbnQgdmVyc2lvbiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtaWY9XCJpdGVtLl9pc0N1cnJlbnRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnQgdmVyc2lvblxuICAgICAgICAgICAgICAgICAgICA8L3AtYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gYXR0YWNobWVudHMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhICB2LWZvcj1cIihhdHRhY2htZW50LCBpMikgaW4gaXRlbS5hdHRhY2htZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiYGF0dGFjaG1lbnQtJHtpMX0tJHtpMn1gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0taWNvbiBtbC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiYXR0YWNobWVudC51cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwiYXR0YWNobWVudC5taW1lX3R5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJkb3dubG9hZFwiIGNsYXNzPVwiaWNvblwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gZ2l0aHViIC0tPlxuICAgICAgICAgICAgICAgICAgICA8YSAgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uIG1sLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJgaHR0cHM6Ly9naXRodWIuY29tL2Z1c2lvbmNtcy9mdXNpb25jbXMvcmVsZWFzZXMvdGFnLyR7aXRlbS50aXRsZX1gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVmlldyBvbiBHaXRodWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBpY29uPVwiY29kZVwiIGNsYXNzPVwiaWNvblwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHA+e3sgaXRlbXMuY29udGVudF90ZXh0IH19PC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImNoYW5nZWxvZywgbmFtZSBpbiBpdGVtLl9jaGFuZ2Vsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtZm9yPVwiaXNzdWVzLCB0ZXh0IGluIGNoYW5nZWxvZ1wiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCI+e3sgbmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdGV4dCB9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgIHYtZm9yPVwiaXNzdWUgaW4gaXNzdWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0xIHRleHQteHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaXNzdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cImBodHRwczovL2dpdGh1Yi5jb20vZnVzaW9uY21zL2Z1c2lvbmNtcy9pc3N1ZXMvJHtpc3N1ZX1gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICN7eyBpc3N1ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cG9ydGFsIHRvPVwibW9kYWxzXCI+XG4gICAgICAgICAgICA8cC1tb2RhbFxuICAgICAgICAgICAgICAgIGtleT1cInVwZGF0ZXJfbW9kYWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1cGRhdGVyXCJcbiAgICAgICAgICAgICAgICA6dGl0bGU9XCJgVXBkYXRlIHRvICR7dmVyc2lvbi50aXRsZX1gXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiaXNDb25maXJtaW5nXCI+XG5cbiAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXBkYXRlIHRvIHZlcnNpb24ge3sgdmVyc2lvbi50aXRsZSB9fT88L3A+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIEBjbGljaz1cImNvbmZpcm1cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCI+Q29uZmlybTwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBAY2xpY2s9XCJjbG9zZVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1yLTNcIj5DYW5jZWw8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICd1cGRhdGVzJyxcbiAgICAgICAgXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZlcnNpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBjdXJyZW50KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgdiR7dGhpcy4kc3RvcmUuc3RhdGUuZnVzaW9uLnZlcnNpb259YFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZEJ5KCd0aXRsZScsIHRoaXMuY3VycmVudCkuaWRcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzQ29uZmlybWluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISEgdGhpcy52ZXJzaW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZmluZEJ5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maW5kKHRoaXMuaXRlbXMsIChpdGVtKSA9PiBpdGVtW2tleV0gPT0gdmFsdWUpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1cGdyYWRlKGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gdGhpcy5maW5kQnkoJ2lkJywgaWQpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjb25maXJtKCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvdXBkYXRlcycsIHsgdmVyc2lvbjogdGhpcy52ZXJzaW9uIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY2xvc2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdXBkYXRlcycpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4gdm0uaXRlbXMgPSByZXNwb25zZS5kYXRhLmRhdGEpKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJkb3dubG9hZFwiIH0gfSwgW192bS5fdihcIlVwZGF0ZXNcIildKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicG9ydGFsXCIsIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vYmV0YS5nZXRmdXNpb25jbXMuY29tL2NoYW5nZWxvZ1wiLFxuICAgICAgICAgICAgICB0aXRsZTogXCJDaGFuZ2Vsb2dcIixcbiAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uY3VycmVudCkpXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihpdGVtLCBpMSkge1xuICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9faGVhZGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkX190aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzIGJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgUmVsZWFzZWQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kbW9tZW50KGl0ZW0uZGF0ZV9wdWJsaXNoZWQpLmZvcm1hdChcIk1NTSBEbywgWVlZWVwiKVxuICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBpdGVtLl9pc0N1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInAtYnV0dG9uXCIsIHsgYXR0cnM6IHsgZGlzYWJsZWQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBDdXJyZW50IHZlcnNpb25cXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChpdGVtLmF0dGFjaG1lbnRzLCBmdW5jdGlvbihhdHRhY2htZW50LCBpMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImF0dGFjaG1lbnQtXCIgKyBpMSArIFwiLVwiICsgaTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1pY29uIG1sLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGF0dGFjaG1lbnQudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogYXR0YWNobWVudC5taW1lX3R5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJkb3dubG9hZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLWljb24gbWwtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9mdXNpb25jbXMvZnVzaW9uY21zL3JlbGVhc2VzL3RhZy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJWaWV3IG9uIEdpdGh1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiY29kZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtcy5jb250ZW50X3RleHQpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woaXRlbS5fY2hhbmdlbG9nLCBmdW5jdGlvbihjaGFuZ2Vsb2csIG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKGNoYW5nZWxvZywgZnVuY3Rpb24oaXNzdWVzLCB0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRleHQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGlzc3VlcywgZnVuY3Rpb24oaXNzdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpc3N1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMSB0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2Z1c2lvbmNtcy9mdXNpb25jbXMvaXNzdWVzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpc3N1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJ1cGRhdGVyX21vZGFsXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJ1cGRhdGVyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVXBkYXRlIHRvIFwiICsgX3ZtLnZlcnNpb24udGl0bGVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQ29uZmlybWluZyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uaXNDb25maXJtaW5nID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQ29uZmlybWluZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXBkYXRlIHRvIHZlcnNpb24gXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnNpb24udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgXCI/XCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgeyBzbG90OiBcImZvb3RlclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jb25maXJtIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNvbmZpcm1cIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzAxMDJjMTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2MwMTAyYzE4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2MwMTAyYzE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2MwMTAyYzE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzAxMDJjMTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzAxMDJjMTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVzL0luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzAxMDJjMTgmXCIiXSwic291cmNlUm9vdCI6IiJ9