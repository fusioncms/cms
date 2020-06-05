(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Roles/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Roles/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        inner: 'Roles'
      };
    }
  },
  mixins: [__webpack_require__(/*! ../../mixins/roles */ "./resources/js/mixins/roles.js")["default"]],
  data: function data() {
    return {
      endpoint: '/datatable/roles'
    };
  },
  methods: {
    destroy: function destroy(id) {
      axios["delete"]('/api/roles/' + id).then(function (response) {
        toast('Role successfully deleted.', 'success');
        proton().$emit('refresh-datatable-roles');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Roles/Index.vue?vue&type=template&id=3bfa7a91&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Roles/Index.vue?vue&type=template&id=3bfa7a91& ***!
  \*********************************************************************************************************************************************************************************************************/
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
          _c("app-title", { attrs: { icon: "user-shield" } }, [_vm._v("Roles")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _c(
            "router-link",
            { staticClass: "button", attrs: { to: { name: "roles.create" } } },
            [_vm._v("Create Role")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "content-container" },
          [
            _c("p-table", {
              key: "roles_table",
              attrs: {
                endpoint: _vm.endpoint,
                id: "roles",
                "sort-by": "label"
              },
              scopedSlots: _vm._u([
                {
                  key: "label",
                  fn: function(table) {
                    return [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "roles.edit",
                              params: { role: table.record.id }
                            }
                          }
                        },
                        [_vm._v(_vm._s(table.record.label))]
                      )
                    ]
                  }
                },
                {
                  key: "description",
                  fn: function(table) {
                    return [
                      _c("span", { staticClass: "text-gray-800 text-sm" }, [
                        _vm._v(_vm._s(table.record.description))
                      ])
                    ]
                  }
                },
                {
                  key: "actions",
                  fn: function(table) {
                    return [
                      _c(
                        "p-actions",
                        {
                          key: "role_" + table.record.id + "_actions",
                          attrs: { id: "role_" + table.record.id + "_actions" }
                        },
                        [
                          _c(
                            "p-dropdown-link",
                            {
                              attrs: {
                                to: {
                                  name: "roles.edit",
                                  params: { role: table.record.id }
                                }
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Edit\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.isRemovable(table.record.name)
                            ? _c(
                                "p-dropdown-link",
                                {
                                  directives: [
                                    {
                                      name: "modal",
                                      rawName: "v-modal:delete-role",
                                      value: table.record,
                                      expression: "table.record",
                                      arg: "delete-role"
                                    }
                                  ],
                                  attrs: { classes: "link--danger" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            Delete\n                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c(
            "p-modal",
            {
              attrs: { name: "delete-role", title: "Delete Role" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(role) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:delete-role",
                              arg: "delete-role"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.destroy(role.data.id)
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:delete-role",
                              arg: "delete-role"
                            }
                          ]
                        },
                        [_vm._v("Cancel")]
                      )
                    ]
                  }
                }
              ])
            },
            [
              _c("p", [
                _vm._v("Are you sure you want to permenantly delete this role?")
              ])
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixins/roles.js":
/*!**************************************!*\
  !*** ./resources/js/mixins/roles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    isAssignable: function isAssignable(name) {
      return !_.includes(['guest'], name);
    },
    isRemovable: function isRemovable(name) {
      return !_.includes(['owner', 'admin', 'user', 'guest'], name);
    },
    hasPermissions: function hasPermissions(name) {
      return !_.includes(['owner'], name);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Roles/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Roles/Index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3bfa7a91___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3bfa7a91& */ "./resources/js/views/Roles/Index.vue?vue&type=template&id=3bfa7a91&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/Roles/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3bfa7a91___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3bfa7a91___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Roles/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Roles/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Roles/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Roles/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Roles/Index.vue?vue&type=template&id=3bfa7a91&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Roles/Index.vue?vue&type=template&id=3bfa7a91& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3bfa7a91___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3bfa7a91& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Roles/Index.vue?vue&type=template&id=3bfa7a91&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3bfa7a91___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3bfa7a91___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL1JvbGVzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUm9sZXMvSW5kZXgudnVlP2I4MjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9yb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUm9sZXMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Sb2xlcy9JbmRleC52dWU/MDBiZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUm9sZXMvSW5kZXgudnVlP2U5MzgiXSwibmFtZXMiOlsibWV0aG9kcyIsImlzQXNzaWduYWJsZSIsIm5hbWUiLCJfIiwiaW5jbHVkZXMiLCJpc1JlbW92YWJsZSIsImhhc1Blcm1pc3Npb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBO0FBRUE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxXQUNBLDBGQURBLENBVEE7QUFhQSxNQWJBLGtCQWFBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FqQkE7QUFtQkE7QUFDQSxXQURBLG1CQUNBLEVBREEsRUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLE9BSkE7QUFLQTtBQVBBO0FBbkJBLEc7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDO0FBQ0EsMkJBQTJCLFNBQVMsc0JBQXNCLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGdCQUFnQixFQUFFO0FBQ3BDO0FBQ0E7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QUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzUyLmpzP2lkPTlmNWZhMGFiYjhkMDU3ZDNjZmQ0Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGFwcC10aXRsZSBpY29uPVwidXNlci1zaGllbGRcIj5Sb2xlczwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3JvbGVzLmNyZWF0ZScgfVwiIGNsYXNzPVwiYnV0dG9uXCI+Q3JlYXRlIFJvbGU8L3JvdXRlci1saW5rPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cC10YWJsZSA6ZW5kcG9pbnQ9XCJlbmRwb2ludFwiIGlkPVwicm9sZXNcIiBzb3J0LWJ5PVwibGFiZWxcIiBrZXk9XCJyb2xlc190YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImxhYmVsXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncm9sZXMuZWRpdCcsIHBhcmFtczoge3JvbGU6IHRhYmxlLnJlY29yZC5pZH0gfVwiPnt7IHRhYmxlLnJlY29yZC5sYWJlbCB9fTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJkZXNjcmlwdGlvblwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyYXktODAwIHRleHQtc21cIj57eyB0YWJsZS5yZWNvcmQuZGVzY3JpcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJhY3Rpb25zXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1hY3Rpb25zIDppZD1cIidyb2xlXycgKyB0YWJsZS5yZWNvcmQuaWQgKyAnX2FjdGlvbnMnXCIgOmtleT1cIidyb2xlXycgKyB0YWJsZS5yZWNvcmQuaWQgKyAnX2FjdGlvbnMnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24tbGlua0BjbGljay5wcmV2ZW50IDp0bz1cInsgbmFtZTogJ3JvbGVzLmVkaXQnLCBwYXJhbXM6IHtyb2xlOiB0YWJsZS5yZWNvcmQuaWR9IH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1kcm9wZG93bi1saW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24tbGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXNSZW1vdmFibGUodGFibGUucmVjb3JkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQgdi1tb2RhbDpkZWxldGUtcm9sZT1cInRhYmxlLnJlY29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9XCJsaW5rLS1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWRyb3Bkb3duLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3AtdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cIm1vZGFsc1wiPlxuICAgICAgICAgICAgPHAtbW9kYWwgbmFtZT1cImRlbGV0ZS1yb2xlXCIgdGl0bGU9XCJEZWxldGUgUm9sZVwiPlxuICAgICAgICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwZXJtZW5hbnRseSBkZWxldGUgdGhpcyByb2xlPzwvcD5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCIgc2xvdC1zY29wZT1cInJvbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6ZGVsZXRlLXJvbGUgQGNsaWNrPVwiZGVzdHJveShyb2xlLmRhdGEuaWQpXCIgdGhlbWU9XCJkYW5nZXJcIiBjbGFzcz1cIm1sLTNcIj5EZWxldGU8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDpkZWxldGUtcm9sZT5DYW5jZWw8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiAnUm9sZXMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1peGluczogW1xuICAgICAgICAgICAgcmVxdWlyZSgnLi4vLi4vbWl4aW5zL3JvbGVzJykuZGVmYXVsdFxuICAgICAgICBdLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnL2RhdGF0YWJsZS9yb2xlcycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZGVzdHJveShpZCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSgnL2FwaS9yb2xlcy8nICsgaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdSb2xlIHN1Y2Nlc3NmdWxseSBkZWxldGVkLicsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICBwcm90b24oKS4kZW1pdCgncmVmcmVzaC1kYXRhdGFibGUtcm9sZXMnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJ1c2VyLXNoaWVsZFwiIH0gfSwgW192bS5fdihcIlJvbGVzXCIpXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLCBhdHRyczogeyB0bzogeyBuYW1lOiBcInJvbGVzLmNyZWF0ZVwiIH0gfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIkNyZWF0ZSBSb2xlXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInAtdGFibGVcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwicm9sZXNfdGFibGVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogX3ZtLmVuZHBvaW50LFxuICAgICAgICAgICAgICAgIGlkOiBcInJvbGVzXCIsXG4gICAgICAgICAgICAgICAgXCJzb3J0LWJ5XCI6IFwibGFiZWxcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJvbGVzLmVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyByb2xlOiB0YWJsZS5yZWNvcmQuaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC5sYWJlbCkpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyYXktODAwIHRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInJvbGVfXCIgKyB0YWJsZS5yZWNvcmQuaWQgKyBcIl9hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInJvbGVfXCIgKyB0YWJsZS5yZWNvcmQuaWQgKyBcIl9hY3Rpb25zXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWRyb3Bkb3duLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicm9sZXMuZWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyByb2xlOiB0YWJsZS5yZWNvcmQuaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNSZW1vdmFibGUodGFibGUucmVjb3JkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWRyb3Bkb3duLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlLXJvbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRhYmxlLnJlY29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJsZS5yZWNvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZS1yb2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNsYXNzZXM6IFwibGluay0tZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJtb2RhbHNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1tb2RhbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImRlbGV0ZS1yb2xlXCIsIHRpdGxlOiBcIkRlbGV0ZSBSb2xlXCIgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJvbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpkZWxldGUtcm9sZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZS1yb2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlc3Ryb3kocm9sZS5kYXRhLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZWxldGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmRlbGV0ZS1yb2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVsZXRlLXJvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcGVybWVuYW50bHkgZGVsZXRlIHRoaXMgcm9sZT9cIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydCBkZWZhdWx0IHtcblx0bWV0aG9kczoge1xuXHRcdGlzQXNzaWduYWJsZShuYW1lKSB7XG5cdFx0XHRyZXR1cm4gISBfLmluY2x1ZGVzKFsnZ3Vlc3QnXSwgbmFtZSlcblx0XHR9LFxuXG5cdFx0aXNSZW1vdmFibGUobmFtZSkge1xuXHRcdFx0cmV0dXJuICEgXy5pbmNsdWRlcyhbJ293bmVyJywgJ2FkbWluJywgJ3VzZXInLCAnZ3Vlc3QnXSwgbmFtZSk7XG5cdFx0fSxcblxuXHRcdGhhc1Blcm1pc3Npb25zKG5hbWUpIHtcblx0XHRcdHJldHVybiAhIF8uaW5jbHVkZXMoWydvd25lciddLCBuYW1lKTtcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYmZhN2E5MSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2JmYTdhOTEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2JmYTdhOTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2JmYTdhOTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYmZhN2E5MSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYmZhN2E5MScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL1JvbGVzL0luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2JmYTdhOTEmXCIiXSwic291cmNlUm9vdCI6IiJ9