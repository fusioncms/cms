(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collections/SharedForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Collections/SharedForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
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
  props: {
    entry: {
      required: false
    },
    collection: {
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      editSlug: false,
      slugValue: ''
    };
  },
  computed: {
    sections: function sections() {
      var body = [];
      var sidebar = [];
      body = _.filter(this.collection.blueprint.sections, function (section) {
        return section.placement == 'body';
      });
      sidebar = _.filter(this.collection.blueprint.sections, function (section) {
        return section.placement == 'sidebar';
      });
      return {
        body: body,
        sidebar: sidebar
      };
    }
  },
  methods: {
    openEdit: function openEdit() {
      this.slugValue = this.form.slug;
      this.editSlug = true;
    },
    closeEdit: function closeEdit() {
      this.slugValue = '';
      this.editSlug = false;
    },
    saveSlug: function saveSlug() {
      if (this.slugValue === '') {
        this.slugValue = this.form.slug;
      } else {
        this.form.slug = this.slugValue;
      }

      this.closeEdit();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collections/SharedForm.vue?vue&type=template&id=f8573a28&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Collections/SharedForm.vue?vue&type=template&id=f8573a28& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "collection-page" },
    [
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "div",
          { staticClass: "buttons" },
          [
            _vm.collection.slug
              ? _c(
                  "ui-button",
                  {
                    attrs: {
                      to: {
                        name: "collection.index",
                        params: { collection: _vm.collection.slug }
                      },
                      variant: "secondary"
                    }
                  },
                  [_vm._v("Go Back")]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "ui-button",
              {
                attrs: {
                  type: "submit",
                  variant: "primary",
                  disabled: !_vm.form.hasChanges
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.$parent.submit($event)
                  }
                }
              },
              [_vm._v("Save")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.collection.show_name_field
        ? _c(
            "ui-card",
            [
              _c(
                "ui-card-body",
                [
                  _vm.collection.show_name_field
                    ? _c("ui-title-group", {
                        staticClass: "mb-0",
                        attrs: {
                          name: "name",
                          label: _vm.collection.name_label || "Name",
                          autocomplete: "off",
                          autofocus: "",
                          required: "",
                          readonly: _vm.editSlug,
                          placeholder: _vm.collection.name_label || "Name",
                          "has-error": _vm.form.errors.has("name"),
                          "error-message": _vm.form.errors.get("name")
                        },
                        model: {
                          value: _vm.form.name,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "name", $$v)
                          },
                          expression: "form.name"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.form.slug
                    ? _c("div", { staticClass: "entry-slug" }, [
                        !_vm.editSlug
                          ? _c(
                              "div",
                              { staticClass: "entry-slug__current" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "entry-slug__label" },
                                  [_vm._v("Slug:")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "entry-slug__value" },
                                  [_vm._v(_vm._s(_vm.form.slug))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ui-button",
                                  {
                                    staticClass: "entry-slug__action",
                                    attrs: { size: "xsmall" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.openEdit()
                                      }
                                    }
                                  },
                                  [_vm._v("Edit")]
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.editSlug
                          ? _c(
                              "div",
                              { staticClass: "entry-slug__edit" },
                              [
                                _vm.editSlug
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "entry-slug__label",
                                        attrs: { for: "edit-slug" }
                                      },
                                      [_vm._v("Slug:")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("ui-slug", {
                                  staticClass: "field--xs",
                                  attrs: {
                                    id: "edit-slug",
                                    name: "edit_slug",
                                    monospaced: "",
                                    autocomplete: "off"
                                  },
                                  model: {
                                    value: _vm.slugValue,
                                    callback: function($$v) {
                                      _vm.slugValue = $$v
                                    },
                                    expression: "slugValue"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "ui-button",
                                  {
                                    staticClass: "entry-slug__action",
                                    attrs: {
                                      variant: "primary",
                                      size: "xsmall"
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.saveSlug()
                                      }
                                    }
                                  },
                                  [_vm._v("Apply")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ui-button",
                                  {
                                    staticClass: "entry-slug__action",
                                    attrs: {
                                      variant: "secondary",
                                      size: "xsmall"
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.closeEdit()
                                      }
                                    }
                                  },
                                  [_vm._v("Cancel")]
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.collection.show_name_field || _vm.entry.id
                    ? _c("ui-slug", {
                        attrs: {
                          type: "hidden",
                          name: "slug",
                          label: "Slug",
                          monospaced: "",
                          autocomplete: "off",
                          required: "",
                          help: _vm.collection.show_name_field
                            ? ""
                            : "This field is auto-generated based on pattern specified.",
                          watch: _vm.form.name,
                          readonly: !_vm.collection.show_name_field,
                          "has-error": _vm.form.errors.has("slug"),
                          "error-message": _vm.form.errors.get("slug")
                        },
                        model: {
                          value: _vm.form.slug,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "slug", $$v)
                          },
                          expression: "form.slug"
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.sections.body, function(section) {
        return _c(
          "section-card",
          {
            key: section.handle,
            attrs: { title: section.name, description: section.description }
          },
          _vm._l(section.fields, function(field) {
            return _c(field.type.id + "-fieldtype", {
              key: field.handle,
              tag: "component",
              attrs: { field: field, errors: _vm.form.errors },
              model: {
                value: _vm.form[field.handle],
                callback: function($$v) {
                  _vm.$set(_vm.form, field.handle, $$v)
                },
                expression: "form[field.handle]"
              }
            })
          }),
          1
        )
      }),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "Settings",
            description: "Settings and configurations for this entry."
          }
        },
        [
          _c("ui-toggle", {
            attrs: {
              name: "status",
              label: "Status",
              help: _vm.form.status
                ? "Toggle to disable this entry."
                : "Toggle to enable this entry.",
              "true-value": 1,
              "false-value": 0
            },
            model: {
              value: _vm.form.status,
              callback: function($$v) {
                _vm.$set(_vm.form, "status", $$v)
              },
              expression: "form.status"
            }
          }),
          _vm._v(" "),
          _vm.entry ? _c("hr") : _vm._e(),
          _vm._v(" "),
          _vm.entry
            ? _c("dl", { staticClass: "detail-list" }, [
                _c("dt", [_vm._v("Created")]),
                _vm._v(" "),
                _c(
                  "dd",
                  [
                    _c("ui-datetime", {
                      attrs: { timestamp: _vm.entry.created_at }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("dt", [_vm._v("Last Updated")]),
                _vm._v(" "),
                _c(
                  "dd",
                  [
                    _c("ui-datetime", {
                      attrs: { timestamp: _vm.entry.updated_at }
                    })
                  ],
                  1
                )
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.sections.sidebar, function(section) {
        return _c(
          "section-card",
          {
            key: section.handle,
            attrs: { title: section.name, description: section.description }
          },
          _vm._l(section.fields, function(field) {
            return _c(field.type.id + "-fieldtype", {
              key: field.handle,
              tag: "component",
              attrs: {
                field: field,
                "has-error": _vm.form.errors.has(field.handle),
                "error-message": _vm.form.errors.get(field.handle)
              },
              model: {
                value: _vm.form[field.handle],
                callback: function($$v) {
                  _vm.$set(_vm.form, field.handle, $$v)
                },
                expression: "form[field.handle]"
              }
            })
          }),
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Collections/SharedForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/Collections/SharedForm.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedForm_vue_vue_type_template_id_f8573a28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=f8573a28& */ "./resources/js/pages/Collections/SharedForm.vue?vue&type=template&id=f8573a28&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/Collections/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedForm_vue_vue_type_template_id_f8573a28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedForm_vue_vue_type_template_id_f8573a28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Collections/SharedForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Collections/SharedForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Collections/SharedForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collections/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Collections/SharedForm.vue?vue&type=template&id=f8573a28&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Collections/SharedForm.vue?vue&type=template&id=f8573a28& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_f8573a28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=template&id=f8573a28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collections/SharedForm.vue?vue&type=template&id=f8573a28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_f8573a28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_f8573a28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0NvbGxlY3Rpb25zL1NoYXJlZEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Db2xsZWN0aW9ucy9TaGFyZWRGb3JtLnZ1ZT8wNDE0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Db2xsZWN0aW9ucy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQ29sbGVjdGlvbnMvU2hhcmVkRm9ybS52dWU/NGQwYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQ29sbGVjdGlvbnMvU2hhcmVkRm9ybS52dWU/ODYzMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUhBO0FBQ0E7QUFDQTtBQUNBO0FBREEsS0FEQTtBQUtBO0FBQ0E7QUFEQSxLQUxBO0FBU0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFUQSxHQURBO0FBZ0JBLE1BaEJBLGtCQWdCQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBSUEsR0FyQkE7QUF1QkE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUEsZUFDQSwyQkFEQTtBQUFBO0FBR0E7QUFBQSxlQUNBLDhCQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWkEsR0F2QkE7QUFzQ0E7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFNQSxhQU5BLHVCQU1BO0FBQ0E7QUFDQTtBQUNBLEtBVEE7QUFXQSxZQVhBLHNCQVdBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQW5C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QUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkJBQTZCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNVZBO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQzNCO0FBQ0w7OztBQUd6RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUscUZBQU07QUFDUixFQUFFLDhGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFnTSxDQUFnQixzUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzIuanM/aWQ9Y2RkZTU0MTQxNTNhYWVmZjUxOTUiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbGxlY3Rpb24tcGFnZVwiPlxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtaWY9XCJjb2xsZWN0aW9uLnNsdWdcIiA6dG89XCJ7IG5hbWU6ICdjb2xsZWN0aW9uLmluZGV4JywgcGFyYW1zOiB7Y29sbGVjdGlvbjogY29sbGVjdGlvbi5zbHVnfSB9XCIgdmFyaWFudD1cInNlY29uZGFyeVwiPkdvIEJhY2s8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cIiRwYXJlbnQuc3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIiA6ZGlzYWJsZWQ9XCIhZm9ybS5oYXNDaGFuZ2VzXCI+U2F2ZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDx1aS1jYXJkIHYtaWY9XCJjb2xsZWN0aW9uLnNob3dfbmFtZV9maWVsZFwiPlxuICAgICAgICAgICAgPHVpLWNhcmQtYm9keT5cbiAgICAgICAgICAgICAgICA8dWktdGl0bGUtZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0wXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJjb2xsZWN0aW9uLm5hbWVfbGFiZWwgfHwgJ05hbWUnXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIDpyZWFkb25seT1cImVkaXRTbHVnXCJcbiAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiY29sbGVjdGlvbi5uYW1lX2xhYmVsIHx8ICdOYW1lJ1wiXG4gICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImNvbGxlY3Rpb24uc2hvd19uYW1lX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPC91aS10aXRsZS1ncm91cD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW50cnktc2x1Z1wiIHYtaWY9XCJmb3JtLnNsdWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWVkaXRTbHVnXCIgY2xhc3M9XCJlbnRyeS1zbHVnX19jdXJyZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVudHJ5LXNsdWdfX2xhYmVsXCI+U2x1Zzo8L3NwYW4+IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVudHJ5LXNsdWdfX3ZhbHVlXCI+e3sgZm9ybS5zbHVnIH19PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWktYnV0dG9uIGNsYXNzPVwiZW50cnktc2x1Z19fYWN0aW9uXCIgc2l6ZT1cInhzbWFsbFwiIEBjbGljay5wcmV2ZW50PVwib3BlbkVkaXQoKVwiPkVkaXQ8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZWRpdFNsdWdcIiBjbGFzcz1cImVudHJ5LXNsdWdfX2VkaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB2LWlmPVwiZWRpdFNsdWdcIiBjbGFzcz1cImVudHJ5LXNsdWdfX2xhYmVsXCIgZm9yPVwiZWRpdC1zbHVnXCI+U2x1Zzo8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWktc2x1Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGQtLXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXQtc2x1Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVkaXRfc2x1Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNsdWdWYWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91aS1zbHVnPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWktYnV0dG9uIGNsYXNzPVwiZW50cnktc2x1Z19fYWN0aW9uXCIgdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwieHNtYWxsXCIgQGNsaWNrLnByZXZlbnQ9XCJzYXZlU2x1ZygpXCI+QXBwbHk8L3VpLWJ1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiBjbGFzcz1cImVudHJ5LXNsdWdfX2FjdGlvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwieHNtYWxsXCIgQGNsaWNrLnByZXZlbnQ9XCJjbG9zZUVkaXQoKVwiPkNhbmNlbDwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDx1aS1zbHVnXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCIgY29sbGVjdGlvbi5zaG93X25hbWVfZmllbGQgfHwgZW50cnkuaWRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNsdWdcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNsdWdcIlxuICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIDpoZWxwPVwiY29sbGVjdGlvbi5zaG93X25hbWVfZmllbGQgPyAnJyA6ICdUaGlzIGZpZWxkIGlzIGF1dG8tZ2VuZXJhdGVkIGJhc2VkIG9uIHBhdHRlcm4gc3BlY2lmaWVkLidcIlxuICAgICAgICAgICAgICAgICAgICA6d2F0Y2g9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCIhY29sbGVjdGlvbi5zaG93X25hbWVfZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdzbHVnJylcIlxuICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnc2x1ZycpXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uc2x1Z1wiPlxuICAgICAgICAgICAgICAgIDwvdWktc2x1Zz5cbiAgICAgICAgICAgIDwvdWktY2FyZC1ib2R5PlxuICAgICAgICA8L3VpLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB2LWZvcj1cInNlY3Rpb24gaW4gc2VjdGlvbnMuYm9keVwiIDprZXk9XCJzZWN0aW9uLmhhbmRsZVwiIDp0aXRsZT1cInNlY3Rpb24ubmFtZVwiIDpkZXNjcmlwdGlvbj1cInNlY3Rpb24uZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxjb21wb25lbnQgdi1mb3I9XCJmaWVsZCBpbiBzZWN0aW9uLmZpZWxkc1wiXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgOmlzPVwiZmllbGQudHlwZS5pZCArICctZmllbGR0eXBlJ1wiXG4gICAgICAgICAgICAgICAgOmZpZWxkPVwiZmllbGRcIlxuICAgICAgICAgICAgICAgIDplcnJvcnM9XCJmb3JtLmVycm9yc1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1bZmllbGQuaGFuZGxlXVwiPlxuICAgICAgICAgICAgPC9jb21wb25lbnQ+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJTZXR0aW5nc1wiIGRlc2NyaXB0aW9uPVwiU2V0dGluZ3MgYW5kIGNvbmZpZ3VyYXRpb25zIGZvciB0aGlzIGVudHJ5LlwiPlxuICAgICAgICAgICAgPHVpLXRvZ2dsZVxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcbiAgICAgICAgICAgICAgICA6aGVscD1cImZvcm0uc3RhdHVzID8gJ1RvZ2dsZSB0byBkaXNhYmxlIHRoaXMgZW50cnkuJyA6ICdUb2dnbGUgdG8gZW5hYmxlIHRoaXMgZW50cnkuJ1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uc3RhdHVzXCJcbiAgICAgICAgICAgICAgICA6dHJ1ZS12YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgIDpmYWxzZS12YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgIDwvdWktdG9nZ2xlPlxuXG4gICAgICAgICAgICA8aHIgdi1pZj1cImVudHJ5XCI+XG5cbiAgICAgICAgICAgIDxkbCB2LWlmPVwiZW50cnlcIiBjbGFzcz1cImRldGFpbC1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGR0PkNyZWF0ZWQ8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD48dWktZGF0ZXRpbWUgOnRpbWVzdGFtcD1cImVudHJ5LmNyZWF0ZWRfYXRcIj48L3VpLWRhdGV0aW1lPjwvZGQ+XG5cbiAgICAgICAgICAgICAgICA8ZHQ+TGFzdCBVcGRhdGVkPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+PHVpLWRhdGV0aW1lIDp0aW1lc3RhbXA9XCJlbnRyeS51cGRhdGVkX2F0XCI+PC91aS1kYXRldGltZT48L2RkPlxuICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB2LWZvcj1cIihzZWN0aW9uKSBpbiBzZWN0aW9ucy5zaWRlYmFyXCIgOmtleT1cInNlY3Rpb24uaGFuZGxlXCIgOnRpdGxlPVwic2VjdGlvbi5uYW1lXCIgOmRlc2NyaXB0aW9uPVwic2VjdGlvbi5kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICAgIHYtZm9yPVwiZmllbGQgaW4gc2VjdGlvbi5maWVsZHNcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZC5oYW5kbGVcIlxuICAgICAgICAgICAgICAgIDppcz1cImZpZWxkLnR5cGUuaWQgKyAnLWZpZWxkdHlwZSdcIlxuICAgICAgICAgICAgICAgIDpmaWVsZD1cImZpZWxkXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKGZpZWxkLmhhbmRsZSlcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KGZpZWxkLmhhbmRsZSlcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtW2ZpZWxkLmhhbmRsZV1cIj5cbiAgICAgICAgICAgIDwvY29tcG9uZW50PlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZW50cnk6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZWRpdFNsdWc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsdWdWYWx1ZTogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc2VjdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBbXVxuICAgICAgICAgICAgICAgIGxldCBzaWRlYmFyID0gW11cblxuICAgICAgICAgICAgICAgIGJvZHkgPSBfLmZpbHRlcih0aGlzLmNvbGxlY3Rpb24uYmx1ZXByaW50LnNlY3Rpb25zLCAoc2VjdGlvbikgPT5cbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi5wbGFjZW1lbnQgPT0gJ2JvZHknKVxuXG4gICAgICAgICAgICAgICAgc2lkZWJhciA9IF8uZmlsdGVyKHRoaXMuY29sbGVjdGlvbi5ibHVlcHJpbnQuc2VjdGlvbnMsIChzZWN0aW9uKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uLnBsYWNlbWVudCA9PSAnc2lkZWJhcicpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4geyBib2R5LCBzaWRlYmFyIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvcGVuRWRpdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNsdWdWYWx1ZSA9IHRoaXMuZm9ybS5zbHVnXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0U2x1ZyA9IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNsb3NlRWRpdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNsdWdWYWx1ZSA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0U2x1ZyA9IGZhbHNlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzYXZlU2x1ZygpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbHVnVmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2x1Z1ZhbHVlID0gdGhpcy5mb3JtLnNsdWdcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc2x1ZyA9IHRoaXMuc2x1Z1ZhbHVlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUVkaXQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sbGVjdGlvbi1wYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5jb2xsZWN0aW9uLnNsdWdcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29sbGVjdGlvbi5pbmRleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGNvbGxlY3Rpb246IF92bS5jb2xsZWN0aW9uLnNsdWcgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmZvcm0uaGFzQ2hhbmdlc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcGFyZW50LnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmNvbGxlY3Rpb24uc2hvd19uYW1lX2ZpZWxkXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInVpLWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1jYXJkLWJvZHlcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uY29sbGVjdGlvbi5zaG93X25hbWVfZmllbGRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInVpLXRpdGxlLWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLmNvbGxlY3Rpb24ubmFtZV9sYWJlbCB8fCBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLmVkaXRTbHVnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLmNvbGxlY3Rpb24ubmFtZV9sYWJlbCB8fCBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5mb3JtLnNsdWdcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudHJ5LXNsdWdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXRTbHVnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbnRyeS1zbHVnX19jdXJyZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbnRyeS1zbHVnX19sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNsdWc6XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVudHJ5LXNsdWdfX3ZhbHVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZm9ybS5zbHVnKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW50cnktc2x1Z19fYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcInhzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9wZW5FZGl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVkaXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0U2x1Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW50cnktc2x1Z19fZWRpdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0U2x1Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVudHJ5LXNsdWdfX2xhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImVkaXQtc2x1Z1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNsdWc6XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWktc2x1Z1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmllbGQtLXhzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImVkaXQtc2x1Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlZGl0X3NsdWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNsdWdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNsdWdWYWx1ZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2x1Z1ZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVudHJ5LXNsdWdfX2FjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwieHNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNhdmVTbHVnKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFwcGx5XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVudHJ5LXNsdWdfX2FjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJzZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJ4c21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2xvc2VFZGl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5jb2xsZWN0aW9uLnNob3dfbmFtZV9maWVsZCB8fCBfdm0uZW50cnkuaWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInVpLXNsdWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbHVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNsdWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDogX3ZtLmNvbGxlY3Rpb24uc2hvd19uYW1lX2ZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlRoaXMgZmllbGQgaXMgYXV0by1nZW5lcmF0ZWQgYmFzZWQgb24gcGF0dGVybiBzcGVjaWZpZWQuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogIV92bS5jb2xsZWN0aW9uLnNob3dfbmFtZV9maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInNsdWdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwic2x1Z1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zbHVnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic2x1Z1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zbHVnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uc2VjdGlvbnMuYm9keSwgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IHNlY3Rpb24uaGFuZGxlLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IHNlY3Rpb24ubmFtZSwgZGVzY3JpcHRpb246IHNlY3Rpb24uZGVzY3JpcHRpb24gfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3ZtLl9sKHNlY3Rpb24uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKGZpZWxkLnR5cGUuaWQgKyBcIi1maWVsZHR5cGVcIiwge1xuICAgICAgICAgICAgICBrZXk6IGZpZWxkLmhhbmRsZSxcbiAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBmaWVsZDogZmllbGQsIGVycm9yczogX3ZtLmZvcm0uZXJyb3JzIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtW2ZpZWxkLmhhbmRsZV0sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIGZpZWxkLmhhbmRsZSwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtW2ZpZWxkLmhhbmRsZV1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiU2V0dGluZ3NcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNldHRpbmdzIGFuZCBjb25maWd1cmF0aW9ucyBmb3IgdGhpcyBlbnRyeS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktdG9nZ2xlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXR1c1wiLFxuICAgICAgICAgICAgICBoZWxwOiBfdm0uZm9ybS5zdGF0dXNcbiAgICAgICAgICAgICAgICA/IFwiVG9nZ2xlIHRvIGRpc2FibGUgdGhpcyBlbnRyeS5cIlxuICAgICAgICAgICAgICAgIDogXCJUb2dnbGUgdG8gZW5hYmxlIHRoaXMgZW50cnkuXCIsXG4gICAgICAgICAgICAgIFwidHJ1ZS12YWx1ZVwiOiAxLFxuICAgICAgICAgICAgICBcImZhbHNlLXZhbHVlXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc3RhdHVzLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic3RhdHVzXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnN0YXR1c1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZW50cnkgPyBfYyhcImhyXCIpIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZW50cnlcbiAgICAgICAgICAgID8gX2MoXCJkbFwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIkNyZWF0ZWRcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkZFwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInVpLWRhdGV0aW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aW1lc3RhbXA6IF92bS5lbnRyeS5jcmVhdGVkX2F0IH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIkxhc3QgVXBkYXRlZFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRkXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidWktZGF0ZXRpbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpbWVzdGFtcDogX3ZtLmVudHJ5LnVwZGF0ZWRfYXQgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5zZWN0aW9ucy5zaWRlYmFyLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogc2VjdGlvbi5oYW5kbGUsXG4gICAgICAgICAgICBhdHRyczogeyB0aXRsZTogc2VjdGlvbi5uYW1lLCBkZXNjcmlwdGlvbjogc2VjdGlvbi5kZXNjcmlwdGlvbiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfdm0uX2woc2VjdGlvbi5maWVsZHMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoZmllbGQudHlwZS5pZCArIFwiLWZpZWxkdHlwZVwiLCB7XG4gICAgICAgICAgICAgIGtleTogZmllbGQuaGFuZGxlLFxuICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoZmllbGQuaGFuZGxlKSxcbiAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChmaWVsZC5oYW5kbGUpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtW2ZpZWxkLmhhbmRsZV0sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIGZpZWxkLmhhbmRsZSwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtW2ZpZWxkLmhhbmRsZV1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjg1NzNhMjgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmODU3M2EyOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmODU3M2EyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmODU3M2EyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjg1NzNhMjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjg1NzNhMjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Db2xsZWN0aW9ucy9TaGFyZWRGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjg1NzNhMjgmXCIiXSwic291cmNlUm9vdCI6IiJ9