(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Taxonomies/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Taxonomies/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  auth: function auth() {
    return {
      permission: 'taxonomies.viewAny'
    };
  },
  head: {
    title: function title() {
      return {
        inner: 'Taxonomy'
      };
    }
  },
  data: function data() {
    return {
      endpoint: '/datatable/taxonomies'
    };
  },
  methods: {
    destroy: function destroy(id) {
      axios["delete"]("/api/taxonomies/".concat(id)).then(function (response) {
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('navigation/fetchAdminNavigation');
        toast('Taxonomy successfully deleted.', 'success');
        bus().$emit('refresh-datatable-taxonomies');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Taxonomies/Index.vue?vue&type=template&id=6cc2c2db&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Taxonomies/Index.vue?vue&type=template&id=6cc2c2db& ***!
  \**************************************************************************************************************************************************************************************************************/
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
          _c("page-title", { attrs: { icon: "sitemap" } }, [_vm._v("Taxonomy")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _c(
            "ui-button",
            {
              attrs: { to: { name: "taxonomies.create" }, variant: "primary" }
            },
            [_vm._v("Create Taxonomy")]
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
            _c("ui-table", {
              key: "taxonomies_table",
              attrs: {
                endpoint: _vm.endpoint,
                id: "taxonomies",
                "sort-by": "name",
                "primary-key": "handle"
              },
              scopedSlots: _vm._u([
                {
                  key: "name",
                  fn: function(table) {
                    return [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "taxonomies.edit",
                              params: { taxonomy: table.record.id }
                            }
                          }
                        },
                        [_vm._v(_vm._s(table.record.name))]
                      )
                    ]
                  }
                },
                {
                  key: "handle",
                  fn: function(table) {
                    return [_c("code", [_vm._v(_vm._s(table.record.handle))])]
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
                  key: "status",
                  fn: function(table) {
                    return [
                      table.record.status === true
                        ? _c("span", { staticClass: "badge badge--success" }, [
                            _vm._v("Enabled")
                          ])
                        : _c("span", { staticClass: "badge badge--danger" }, [
                            _vm._v("Disabled")
                          ])
                    ]
                  }
                },
                {
                  key: "actions",
                  fn: function(table) {
                    return [
                      _c(
                        "ui-table-actions",
                        {
                          key: "taxonomy_" + table.record.id + "_actions",
                          attrs: {
                            id: "taxonomy_" + table.record.id + "_actions"
                          }
                        },
                        [
                          _c(
                            "ui-dropdown-link",
                            {
                              attrs: {
                                to: {
                                  name: "taxonomies.edit",
                                  params: { taxonomy: table.record.id }
                                }
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                }
                              }
                            },
                            [_vm._v("Edit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "ui-dropdown-link",
                            {
                              directives: [
                                {
                                  name: "modal",
                                  rawName: "v-modal:delete-taxonomy",
                                  value: table.record,
                                  expression: "table.record",
                                  arg: "delete-taxonomy"
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
            "ui-modal",
            {
              key: "delete_taxonomy",
              attrs: { name: "delete-taxonomy", title: "Delete Taxonomy" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(taxonomy) {
                    return [
                      _c(
                        "ui-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:delete-taxonomy",
                              arg: "delete-taxonomy"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { variant: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.destroy(taxonomy.data.id)
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      ),
                      _vm._v(" "),
                      _c(
                        "ui-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:delete-taxonomy",
                              arg: "delete-taxonomy"
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
                _vm._v(
                  "Are you sure you want to permenantly delete this taxonomy?"
                )
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

/***/ "./resources/js/pages/Taxonomies/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/Taxonomies/Index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_6cc2c2db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6cc2c2db& */ "./resources/js/pages/Taxonomies/Index.vue?vue&type=template&id=6cc2c2db&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Taxonomies/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_6cc2c2db___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_6cc2c2db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Taxonomies/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Taxonomies/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Taxonomies/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Taxonomies/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Taxonomies/Index.vue?vue&type=template&id=6cc2c2db&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Taxonomies/Index.vue?vue&type=template&id=6cc2c2db& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6cc2c2db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=6cc2c2db& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Taxonomies/Index.vue?vue&type=template&id=6cc2c2db&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6cc2c2db___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6cc2c2db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1RheG9ub21pZXMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9UYXhvbm9taWVzL0luZGV4LnZ1ZT81MGQ1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9UYXhvbm9taWVzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGF4b25vbWllcy9JbmRleC52dWU/MTRkYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGF4b25vbWllcy9JbmRleC52dWU/NDUyNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REE7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQUxBO0FBT0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQVBBO0FBZUEsTUFmQSxrQkFlQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBbkJBO0FBcUJBO0FBQ0EsV0FEQSxtQkFDQSxFQURBLEVBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBLE9BTkE7QUFPQTtBQVRBO0FBckJBLEc7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDO0FBQ0EsNEJBQTRCLFNBQVMsa0JBQWtCLEVBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGdCQUFnQixFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU0sNEJBQTRCO0FBQ3hELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQSxXQUFXLG1DQUFtQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVDQUF1QztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNDQUFzQztBQUM1RTtBQUNBO0FBQ0Esc0NBQXNDLHFDQUFxQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDBCQUEwQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGVBQWUsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9EQUFvRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvQkFBb0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4T0E7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvMTI1LmpzP2lkPWZmNTRiMWZhZGYwMjZlM2NhNTYzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPHBhZ2UtdGl0bGUgaWNvbj1cInNpdGVtYXBcIj5UYXhvbm9teTwvcGFnZS10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDx1aS1idXR0b24gOnRvPVwieyBuYW1lOiAndGF4b25vbWllcy5jcmVhdGUnIH1cIiB2YXJpYW50PVwicHJpbWFyeVwiPkNyZWF0ZSBUYXhvbm9teTwvdWktYnV0dG9uPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8dWktdGFibGUgOmVuZHBvaW50PVwiZW5kcG9pbnRcIiBpZD1cInRheG9ub21pZXNcIiBzb3J0LWJ5PVwibmFtZVwiIHByaW1hcnkta2V5PVwiaGFuZGxlXCIga2V5PVwidGF4b25vbWllc190YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5hbWVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICd0YXhvbm9taWVzLmVkaXQnLCBwYXJhbXM6IHt0YXhvbm9teTogdGFibGUucmVjb3JkLmlkfSB9XCI+e3sgdGFibGUucmVjb3JkLm5hbWUgfX08L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiaGFuZGxlXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57eyB0YWJsZS5yZWNvcmQuaGFuZGxlIH19PC9jb2RlPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZGVzY3JpcHRpb25cIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmF5LTgwMCB0ZXh0LXNtXCI+e3sgdGFibGUucmVjb3JkLmRlc2NyaXB0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwic3RhdHVzXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLS1zdWNjZXNzXCIgdi1pZj1cInRhYmxlLnJlY29yZC5zdGF0dXMgPT09IHRydWVcIj5FbmFibGVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS0tZGFuZ2VyXCIgdi1lbHNlPkRpc2FibGVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiYWN0aW9uc1wiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVpLXRhYmxlLWFjdGlvbnMgOmlkPVwiJ3RheG9ub215XycgKyB0YWJsZS5yZWNvcmQuaWQgKyAnX2FjdGlvbnMnXCIgOmtleT1cIid0YXhvbm9teV8nICsgdGFibGUucmVjb3JkLmlkICsgJ19hY3Rpb25zJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1aS1kcm9wZG93bi1saW5rIEBjbGljay5wcmV2ZW50IDp0bz1cInsgbmFtZTogJ3RheG9ub21pZXMuZWRpdCcsIHBhcmFtczoge3RheG9ub215OiB0YWJsZS5yZWNvcmQuaWR9IH1cIj5FZGl0PC91aS1kcm9wZG93bi1saW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVpLWRyb3Bkb3duLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RhbDpkZWxldGUtdGF4b25vbXk9XCJ0YWJsZS5yZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwibGluay0tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWktZHJvcGRvd24tbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWktdGFibGUtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3VpLXRhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDx1aS1tb2RhbCBuYW1lPVwiZGVsZXRlLXRheG9ub215XCIgdGl0bGU9XCJEZWxldGUgVGF4b25vbXlcIiBrZXk9XCJkZWxldGVfdGF4b25vbXlcIj5cbiAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcGVybWVuYW50bHkgZGVsZXRlIHRoaXMgdGF4b25vbXk/PC9wPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIiBzbG90LXNjb3BlPVwidGF4b25vbXlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiB2LW1vZGFsOmRlbGV0ZS10YXhvbm9teSBAY2xpY2s9XCJkZXN0cm95KHRheG9ub215LmRhdGEuaWQpXCIgdmFyaWFudD1cImRhbmdlclwiIGNsYXNzPVwibWwtM1wiPkRlbGV0ZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtbW9kYWw6ZGVsZXRlLXRheG9ub215PkNhbmNlbDwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3VpLW1vZGFsPlxuICAgICAgICA8L3BvcnRhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBhdXRoKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uOiAndGF4b25vbWllcy52aWV3QW55JyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogJ1RheG9ub215J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogJy9kYXRhdGFibGUvdGF4b25vbWllcycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZGVzdHJveShpZCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShgL2FwaS90YXhvbm9taWVzLyR7aWR9YCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ25hdmlnYXRpb24vZmV0Y2hBZG1pbk5hdmlnYXRpb24nKVxuXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdUYXhvbm9teSBzdWNjZXNzZnVsbHkgZGVsZXRlZC4nLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgYnVzKCkuJGVtaXQoJ3JlZnJlc2gtZGF0YXRhYmxlLXRheG9ub21pZXMnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicGFnZS10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwic2l0ZW1hcFwiIH0gfSwgW192bS5fdihcIlRheG9ub215XCIpXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcInRheG9ub21pZXMuY3JlYXRlXCIgfSwgdmFyaWFudDogXCJwcmltYXJ5XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJDcmVhdGUgVGF4b25vbXlcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidWktdGFibGVcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwidGF4b25vbWllc190YWJsZVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBfdm0uZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgaWQ6IFwidGF4b25vbWllc1wiLFxuICAgICAgICAgICAgICAgIFwic29ydC1ieVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICBcInByaW1hcnkta2V5XCI6IFwiaGFuZGxlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRheG9ub21pZXMuZWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IHRheG9ub215OiB0YWJsZS5yZWNvcmQuaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfYyhcImNvZGVcIiwgW192bS5fdihfdm0uX3ModGFibGUucmVjb3JkLmhhbmRsZSkpXSldXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JheS04MDAgdGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGFibGUucmVjb3JkLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5yZWNvcmQuc3RhdHVzID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVuYWJsZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtLWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEaXNhYmxlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLXRhYmxlLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInRheG9ub215X1wiICsgdGFibGUucmVjb3JkLmlkICsgXCJfYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInRheG9ub215X1wiICsgdGFibGUucmVjb3JkLmlkICsgXCJfYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWktZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0YXhvbm9taWVzLmVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgdGF4b25vbXk6IHRhYmxlLnJlY29yZC5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVkaXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWktZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlLXRheG9ub215XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRhYmxlLnJlY29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYmxlLnJlY29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkZWxldGUtdGF4b25vbXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3NlczogXCJsaW5rLS1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwibW9kYWxzXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWxldGVfdGF4b25vbXlcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJkZWxldGUtdGF4b25vbXlcIiwgdGl0bGU6IFwiRGVsZXRlIFRheG9ub215XCIgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRheG9ub215KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmRlbGV0ZS10YXhvbm9teVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZS10YXhvbm9teVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwiZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlc3Ryb3kodGF4b25vbXkuZGF0YS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGVsZXRlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlLXRheG9ub215XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVsZXRlLXRheG9ub215XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcGVybWVuYW50bHkgZGVsZXRlIHRoaXMgdGF4b25vbXk/XCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Y2MyYzJkYiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmNjMmMyZGInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmNjMmMyZGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmNjMmMyZGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Y2MyYzJkYiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2Y2MyYzJkYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1RheG9ub21pZXMvSW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Y2MyYzJkYiZcIiJdLCJzb3VyY2VSb290IjoiIn0=