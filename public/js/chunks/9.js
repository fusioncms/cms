(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    id: {
      type: Number,
      required: false,
      "default": 0
    },
    form: {
      type: Object,
      required: true
    },
    matrix: {
      type: Object,
      required: false
    },
    submit: {
      required: true
    },
    matrices: {
      required: true
    }
  },
  computed: {
    singularReference: function singularReference() {
      return pluralize__WEBPACK_IMPORTED_MODULE_0___default.a.singular(this.form.name);
    },
    pluralReference: function pluralReference() {
      return pluralize__WEBPACK_IMPORTED_MODULE_0___default()(this.form.name);
    },
    parentOptions: function parentOptions() {
      var _this = this;

      var options = _.map(this.matrices, function (item) {
        return {
          'label': item.name,
          'value': item.id
        };
      });

      options = _.remove(options, function (item) {
        return _this.id == item.id;
      });
      options.unshift({
        'label': 'None',
        'value': null
      });
      return options;
    }
  },
  watch: {
    '$parent.form.type': function $parentFormType(value) {
      if (value == 'single') {
        this.$parent.form.show_name_field = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    "form-container",
    {
      scopedSlots: _vm._u([
        {
          key: "sidebar",
          fn: function() {
            return [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card__body" },
                  [
                    _c("p-slug", {
                      attrs: {
                        name: "handle",
                        label: "Handle",
                        monospaced: "",
                        autocomplete: "off",
                        required: "",
                        delimiter: "_",
                        watch: _vm.form.name,
                        "has-error": _vm.form.errors.has("handle"),
                        "error-message": _vm.form.errors.get("handle")
                      },
                      model: {
                        value: _vm.form.handle,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "handle", $$v)
                        },
                        expression: "form.handle"
                      }
                    }),
                    _vm._v(" "),
                    _c("p-select", {
                      attrs: {
                        name: "parent_id",
                        label: "Parent Matrix",
                        help: "Should this matrix belong to another?",
                        options: _vm.parentOptions,
                        "has-error": _vm.form.errors.has("parent_id"),
                        "error-message": _vm.form.errors.get("parent_id")
                      },
                      model: {
                        value: _vm.form.parent_id,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "parent_id", $$v)
                        },
                        expression: "form.parent_id"
                      }
                    }),
                    _vm._v(" "),
                    _c("p-toggle", {
                      attrs: {
                        name: "status",
                        label: "Status",
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
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card__body" },
                  [
                    _c("icon-picker", {
                      attrs: {
                        name: "icon",
                        label: "Icon",
                        placeholder: "Search icons...",
                        help:
                          "Choose an icon that best represents your matrix.",
                        "has-error": _vm.form.errors.has("icon"),
                        "error-message": _vm.form.errors.get("icon"),
                        required: ""
                      },
                      model: {
                        value: _vm.form.icon,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "icon", $$v)
                        },
                        expression: "form.icon"
                      }
                    }),
                    _vm._v(" "),
                    _c("p-toggle", {
                      attrs: {
                        name: "sidebar",
                        label: "Show in Sidebar",
                        "true-value": 1,
                        "false-value": 0
                      },
                      model: {
                        value: _vm.form.sidebar,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "sidebar", $$v)
                        },
                        expression: "form.sidebar"
                      }
                    }),
                    _vm._v(" "),
                    _c("p-toggle", {
                      attrs: {
                        name: "quicklink",
                        label: "Show as Quicklink",
                        "true-value": 1,
                        "false-value": 0
                      },
                      model: {
                        value: _vm.form.quicklink,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "quicklink", $$v)
                        },
                        expression: "form.quicklink"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm.matrix
                ? _c(
                    "p-definition-list",
                    [
                      _c(
                        "p-definition",
                        { attrs: { name: "Status" } },
                        [
                          _c("fa-icon", {
                            staticClass: "fa-fw text-xs",
                            class: {
                              "text-success-500": _vm.matrix.status,
                              "text-danger-500": !_vm.matrix.status
                            },
                            attrs: { icon: ["fas", "circle"] }
                          }),
                          _vm._v(
                            " " +
                              _vm._s(
                                _vm.matrix.status ? "Enabled" : "Disabled"
                              ) +
                              "\n            "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p-definition", { attrs: { name: "Created At" } }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm
                                .$moment(_vm.matrix.created_at)
                                .format("Y-MM-DD, hh:mm a")
                            ) +
                            "\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p-definition", { attrs: { name: "Updated At" } }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm
                                .$moment(_vm.matrix.updated_at)
                                .format("Y-MM-DD, hh:mm a")
                            ) +
                            "\n            "
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e()
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "div",
          { staticClass: "buttons" },
          [
            _c(
              "router-link",
              {
                staticClass: "button button--secondary",
                attrs: { to: { name: "matrices" } }
              },
              [_vm._v("Go Back")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button button--primary",
                class: { "button--disabled": !_vm.form.hasChanges },
                attrs: { type: "submit", disabled: !_vm.form.hasChanges },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.submit($event)
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
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card__body" },
          [
            _c("p-input", {
              attrs: {
                name: "name",
                label: "Name",
                help: "Give your matrix a name.",
                autocomplete: "off",
                required: "",
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
            }),
            _vm._v(" "),
            _c("p-input", {
              attrs: {
                name: "description",
                label: "Description",
                help:
                  "Give a short description of what this matrix will manage and store.",
                autocomplete: "off",
                required: "",
                "has-error": _vm.form.errors.has("description"),
                "error-message": _vm.form.errors.get("description")
              },
              model: {
                value: _vm.form.description,
                callback: function($$v) {
                  _vm.$set(_vm.form, "description", $$v)
                },
                expression: "form.description"
              }
            }),
            _vm._v(" "),
            _c(
              "p-tabs",
              [
                _c(
                  "p-tab",
                  { attrs: { name: "General" } },
                  [
                    _c("p-select", {
                      attrs: {
                        name: "type",
                        label: "Type",
                        help: "What type of matrix will this be?",
                        options: [
                          {
                            label: "Collection",
                            value: "collection"
                          },
                          {
                            label: "Single",
                            value: "single"
                          }
                        ],
                        "has-error": _vm.form.errors.has("type"),
                        "error-message": _vm.form.errors.get("type")
                      },
                      model: {
                        value: _vm.form.type,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "type", $$v)
                        },
                        expression: "form.type"
                      }
                    }),
                    _vm._v(" "),
                    _c("p-fieldset", {
                      attrs: {
                        "has-error": _vm.form.errors.has("fieldset"),
                        "error-message": _vm.form.errors.get("fieldset")
                      },
                      model: {
                        value: _vm.form.fieldset,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "fieldset", $$v)
                        },
                        expression: "form.fieldset"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "p-tab",
                  { attrs: { name: "Customize" } },
                  [
                    _c("p-input", {
                      attrs: {
                        name: "name_label",
                        label: "Name Label",
                        placeholder: "Name",
                        help:
                          "If you'd like, you may customize the label used for your entry names.",
                        "has-error": _vm.form.errors.has("name_label"),
                        "error-message": _vm.form.errors.get("name_label")
                      },
                      model: {
                        value: _vm.form.name_label,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "name_label", $$v)
                        },
                        expression: "form.name_label"
                      }
                    }),
                    _vm._v(" "),
                    _c("p-input", {
                      attrs: {
                        name: "reference_singular",
                        label: "Singular Reference",
                        placeholder: _vm.singularReference,
                        help:
                          "What would you like to reference this as in singular form? By default will try to guess from the name. Results may vary.",
                        "has-error": _vm.form.errors.has("reference_singular"),
                        "error-message": _vm.form.errors.get(
                          "reference_singular"
                        )
                      },
                      model: {
                        value: _vm.form.reference_singular,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "reference_singular", $$v)
                        },
                        expression: "form.reference_singular"
                      }
                    }),
                    _vm._v(" "),
                    _c("p-input", {
                      attrs: {
                        name: "reference_plural",
                        label: "Plural Reference",
                        placeholder: _vm.pluralReference,
                        help:
                          "What would you like to reference this as in plural form? By default will try to guess from the name. Results may vary.",
                        "has-error": _vm.form.errors.has("reference_plural"),
                        "error-message": _vm.form.errors.get("reference_plural")
                      },
                      model: {
                        value: _vm.form.reference_plural,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "reference_plural", $$v)
                        },
                        expression: "form.reference_plural"
                      }
                    }),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _vm.form.type == "collection"
                      ? _c("p-toggle", {
                          attrs: {
                            name: "show_name_field",
                            label: "Show name field",
                            "true-value": 1,
                            "false-value": 0
                          },
                          model: {
                            value: _vm.form.show_name_field,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "show_name_field", $$v)
                            },
                            expression: "form.show_name_field"
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.form.show_name_field
                      ? _c("p-input", {
                          attrs: {
                            monospaced: "",
                            name: "name_format",
                            label: "Name Format",
                            help:
                              "What format would you like your generated names and slugs to follow?",
                            "has-error": _vm.form.errors.has("name_format"),
                            "error-message": _vm.form.errors.get("name_format")
                          },
                          model: {
                            value: _vm.form.name_format,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "name_format", $$v)
                            },
                            expression: "form.name_format"
                          }
                        })
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "p-tab",
                  { attrs: { name: "Route" } },
                  [
                    _c("p-input", {
                      attrs: {
                        name: "route",
                        label: "Route",
                        help: "When the URI matches this pattern...",
                        autocomplete: "off",
                        monospaced: "",
                        "has-error": _vm.form.errors.has("route"),
                        "error-message": _vm.form.errors.get("route")
                      },
                      model: {
                        value: _vm.form.route,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "route", $$v)
                        },
                        expression: "form.route"
                      }
                    }),
                    _vm._v(" "),
                    _c("p-input", {
                      attrs: {
                        name: "template",
                        label: "Template",
                        help: "Render this template",
                        autocomplete: "off",
                        monospaced: "",
                        "has-error": _vm.form.errors.has("template"),
                        "error-message": _vm.form.errors.get("template")
                      },
                      model: {
                        value: _vm.form.template,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "template", $$v)
                        },
                        expression: "form.template"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Matrices/SharedForm.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/Matrices/SharedForm.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=c50b5476& */ "./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Matrices/SharedForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=template&id=c50b5476& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL01hdHJpY2VzL1NoYXJlZEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXRyaWNlcy9TaGFyZWRGb3JtLnZ1ZT9hNGYyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXRyaWNlcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvU2hhcmVkRm9ybS52dWU/OWRlZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvU2hhcmVkRm9ybS52dWU/M2JiMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1PQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEscUJBRkE7QUFHQTtBQUhBLEtBREE7QUFPQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQVBBO0FBWUE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FaQTtBQWlCQTtBQUNBO0FBREEsS0FqQkE7QUFxQkE7QUFDQTtBQURBO0FBckJBLEdBREE7QUEyQkE7QUFDQSxxQkFEQSwrQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLG1CQUxBLDZCQUtBO0FBQ0E7QUFDQSxLQVBBO0FBU0EsaUJBVEEsMkJBU0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQTtBQUZBO0FBSUEsT0FMQTs7QUFPQTtB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QUFBQSx3Q0FBZ00sQ0FBZ0Isc1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy85LmpzP2lkPTcyMTM2ZmZiODYzYzRkNjUyNGQ3Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxmb3JtLWNvbnRhaW5lcj5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ21hdHJpY2VzJyB9XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1zZWNvbmRhcnlcIj5HbyBCYWNrPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiIDpjbGFzcz1cInsnYnV0dG9uLS1kaXNhYmxlZCc6ICFmb3JtLmhhc0NoYW5nZXN9XCIgOmRpc2FibGVkPVwiIWZvcm0uaGFzQ2hhbmdlc1wiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGhlbHA9XCJHaXZlIHlvdXIgbWF0cml4IGEgbmFtZS5cIlxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cblxuICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICBoZWxwPVwiR2l2ZSBhIHNob3J0IGRlc2NyaXB0aW9uIG9mIHdoYXQgdGhpcyBtYXRyaXggd2lsbCBtYW5hZ2UgYW5kIHN0b3JlLlwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2Rlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPC9wLWlucHV0PlxuXG4gICAgICAgICAgICAgICAgPHAtdGFicz5cbiAgICAgICAgICAgICAgICAgICAgPHAtdGFiIG5hbWU9XCJHZW5lcmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCB0eXBlIG9mIG1hdHJpeCB3aWxsIHRoaXMgYmU/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ0NvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJ2NvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnU2luZ2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICdzaW5nbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3R5cGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3R5cGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0udHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXNlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtZmllbGRzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdmaWVsZHNldCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnZmllbGRzZXQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZmllbGRzZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPC9wLXRhYj5cblxuICAgICAgICAgICAgICAgICAgICA8cC10YWIgbmFtZT1cIkN1c3RvbWl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZV9sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lIExhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJJZiB5b3UnZCBsaWtlLCB5b3UgbWF5IGN1c3RvbWl6ZSB0aGUgbGFiZWwgdXNlZCBmb3IgeW91ciBlbnRyeSBuYW1lcy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ25hbWVfbGFiZWwnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWVfbGFiZWwnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZV9sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWlucHV0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVuY2Vfc2luZ3VsYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2luZ3VsYXIgUmVmZXJlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJzaW5ndWxhclJlZmVyZW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIldoYXQgd291bGQgeW91IGxpa2UgdG8gcmVmZXJlbmNlIHRoaXMgYXMgaW4gc2luZ3VsYXIgZm9ybT8gQnkgZGVmYXVsdCB3aWxsIHRyeSB0byBndWVzcyBmcm9tIHRoZSBuYW1lLiBSZXN1bHRzIG1heSB2YXJ5LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygncmVmZXJlbmNlX3Npbmd1bGFyJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdyZWZlcmVuY2Vfc2luZ3VsYXInKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucmVmZXJlbmNlX3Npbmd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlZmVyZW5jZV9wbHVyYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGx1cmFsIFJlZmVyZW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwicGx1cmFsUmVmZXJlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCB3b3VsZCB5b3UgbGlrZSB0byByZWZlcmVuY2UgdGhpcyBhcyBpbiBwbHVyYWwgZm9ybT8gQnkgZGVmYXVsdCB3aWxsIHRyeSB0byBndWVzcyBmcm9tIHRoZSBuYW1lLiBSZXN1bHRzIG1heSB2YXJ5LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygncmVmZXJlbmNlX3BsdXJhbCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncmVmZXJlbmNlX3BsdXJhbCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5yZWZlcmVuY2VfcGx1cmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxocj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImZvcm0udHlwZSA9PSAnY29sbGVjdGlvbidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaG93X25hbWVfZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2hvdyBuYW1lIGZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zaG93X25hbWVfZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0cnVlLXZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXRvZ2dsZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWZvcm0uc2hvd19uYW1lX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVfZm9ybWF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWUgRm9ybWF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCBmb3JtYXQgd291bGQgeW91IGxpa2UgeW91ciBnZW5lcmF0ZWQgbmFtZXMgYW5kIHNsdWdzIHRvIGZvbGxvdz9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ25hbWVfZm9ybWF0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lX2Zvcm1hdCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lX2Zvcm1hdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICA8L3AtdGFiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLXRhYiBuYW1lPVwiUm91dGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJvdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJvdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2hlbiB0aGUgVVJJIG1hdGNoZXMgdGhpcyBwYXR0ZXJuLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdyb3V0ZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncm91dGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucm91dGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJSZW5kZXIgdGhpcyB0ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygndGVtcGxhdGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3RlbXBsYXRlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvcC10YWI+XG4gICAgICAgICAgICAgICAgPC9wLXRhYnM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpzaWRlYmFyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1zbHVnXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyPVwiX1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6d2F0Y2g9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnaGFuZGxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2hhbmRsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3Atc2x1Zz5cblxuICAgICAgICAgICAgICAgICAgICA8cC1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXJlbnRfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXJlbnQgTWF0cml4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJTaG91bGQgdGhpcyBtYXRyaXggYmVsb25nIHRvIGFub3RoZXI/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwicGFyZW50T3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdwYXJlbnRfaWQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncGFyZW50X2lkJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucGFyZW50X2lkXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAtdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dHJ1ZS12YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3AtdG9nZ2xlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGljb24tcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaWNvbnMuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkNob29zZSBhbiBpY29uIHRoYXQgYmVzdCByZXByZXNlbnRzIHlvdXIgbWF0cml4LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdpY29uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2ljb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8L2ljb24tcGlja2VyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLXRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNpZGViYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaG93IGluIFNpZGViYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uc2lkZWJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dHJ1ZS12YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3AtdG9nZ2xlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLXRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1aWNrbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNob3cgYXMgUXVpY2tsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnF1aWNrbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dHJ1ZS12YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3AtdG9nZ2xlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwLWRlZmluaXRpb24tbGlzdCB2LWlmPVwibWF0cml4XCI+XG4gICAgICAgICAgICAgICAgPHAtZGVmaW5pdGlvbiBuYW1lPVwiU3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2lyY2xlJ11cIiBjbGFzcz1cImZhLWZ3IHRleHQteHNcIiA6Y2xhc3M9XCJ7J3RleHQtc3VjY2Vzcy01MDAnOiBtYXRyaXguc3RhdHVzLCAndGV4dC1kYW5nZXItNTAwJzogISBtYXRyaXguc3RhdHVzfVwiPjwvZmEtaWNvbj4ge3sgbWF0cml4LnN0YXR1cyA/ICdFbmFibGVkJyA6ICdEaXNhYmxlZCcgfX1cbiAgICAgICAgICAgICAgICA8L3AtZGVmaW5pdGlvbj5cblxuICAgICAgICAgICAgICAgIDxwLWRlZmluaXRpb24gbmFtZT1cIkNyZWF0ZWQgQXRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJG1vbWVudChtYXRyaXguY3JlYXRlZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgfX1cbiAgICAgICAgICAgICAgICA8L3AtZGVmaW5pdGlvbj5cblxuICAgICAgICAgICAgICAgIDxwLWRlZmluaXRpb24gbmFtZT1cIlVwZGF0ZWQgQXRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJG1vbWVudChtYXRyaXgudXBkYXRlZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgfX1cbiAgICAgICAgICAgICAgICA8L3AtZGVmaW5pdGlvbj5cbiAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uLWxpc3Q+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9mb3JtLWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBpZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1hdHJpeDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdWJtaXQ6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1hdHJpY2VzOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBzaW5ndWxhclJlZmVyZW5jZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGx1cmFsaXplLnNpbmd1bGFyKHRoaXMuZm9ybS5uYW1lKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcGx1cmFsUmVmZXJlbmNlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbHVyYWxpemUodGhpcy5mb3JtLm5hbWUpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gXy5tYXAodGhpcy5tYXRyaWNlcywgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGl0ZW0uaWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBvcHRpb25zID0gXy5yZW1vdmUob3B0aW9ucywgKGl0ZW0pID0+IHRoaXMuaWQgPT0gaXRlbS5pZClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBvcHRpb25zLnVuc2hpZnQoeyAnbGFiZWwnOiAnTm9uZScsICd2YWx1ZSc6IG51bGwgfSlcblxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICckcGFyZW50LmZvcm0udHlwZScodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gJ3NpbmdsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZvcm0uc2hvd19uYW1lX2ZpZWxkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJmb3JtLWNvbnRhaW5lclwiLFxuICAgIHtcbiAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcInNpZGViYXJcIixcbiAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwLXNsdWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxpbWl0ZXI6IFwiX1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2F0Y2g6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiaGFuZGxlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJoYW5kbGVcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJoYW5kbGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhcmVudF9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUGFyZW50IE1hdHJpeFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscDogXCJTaG91bGQgdGhpcyBtYXRyaXggYmVsb25nIHRvIGFub3RoZXI/XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ucGFyZW50T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJwYXJlbnRfaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInBhcmVudF9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXJlbnRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhcmVudF9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhcmVudF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwLXRvZ2dsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZS12YWx1ZVwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZS12YWx1ZVwiOiAwXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic3RhdHVzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImljb24tcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2ggaWNvbnMuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2hvb3NlIGFuIGljb24gdGhhdCBiZXN0IHJlcHJlc2VudHMgeW91ciBtYXRyaXguXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiaWNvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiaWNvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImljb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInAtdG9nZ2xlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaWRlYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTaG93IGluIFNpZGViYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZS12YWx1ZVwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZS12YWx1ZVwiOiAwXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnNpZGViYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNpZGViYXJcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zaWRlYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInAtdG9nZ2xlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJxdWlja2xpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNob3cgYXMgUXVpY2tsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRydWUtdmFsdWVcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsc2UtdmFsdWVcIjogMFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5xdWlja2xpbmssXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInF1aWNrbGlua1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnF1aWNrbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubWF0cml4XG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJwLWRlZmluaXRpb24tbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtZGVmaW5pdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcIlN0YXR1c1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyB0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1zdWNjZXNzLTUwMFwiOiBfdm0ubWF0cml4LnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1kYW5nZXItNTAwXCI6ICFfdm0ubWF0cml4LnN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2lyY2xlXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tYXRyaXguc3RhdHVzID8gXCJFbmFibGVkXCIgOiBcIkRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtZGVmaW5pdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQ3JlYXRlZCBBdFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KF92bS5tYXRyaXguY3JlYXRlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIlktTU0tREQsIGhoOm1tIGFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtZGVmaW5pdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiVXBkYXRlZCBBdFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KF92bS5tYXRyaXgudXBkYXRlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIlktTU0tREQsIGhoOm1tIGFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0pXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcIm1hdHJpY2VzXCIgfSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICBjbGFzczogeyBcImJ1dHRvbi0tZGlzYWJsZWRcIjogIV92bS5mb3JtLmhhc0NoYW5nZXMgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogIV92bS5mb3JtLmhhc0NoYW5nZXMgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJHaXZlIHlvdXIgbWF0cml4IGEgbmFtZS5cIixcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgIFwiR2l2ZSBhIHNob3J0IGRlc2NyaXB0aW9uIG9mIHdoYXQgdGhpcyBtYXRyaXggd2lsbCBtYW5hZ2UgYW5kIHN0b3JlLlwiLFxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJkZXNjcmlwdGlvblwiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJkZXNjcmlwdGlvblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJwLXRhYnNcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJwLXRhYlwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcIkdlbmVyYWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiV2hhdCB0eXBlIG9mIG1hdHJpeCB3aWxsIHRoaXMgYmU/XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiY29sbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTaW5nbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJzaW5nbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInR5cGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidHlwZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicC1maWVsZHNldFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJmaWVsZHNldFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiZmllbGRzZXRcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZmllbGRzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImZpZWxkc2V0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZmllbGRzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJwLXRhYlwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcIkN1c3RvbWl6ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lX2xhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lIExhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIklmIHlvdSdkIGxpa2UsIHlvdSBtYXkgY3VzdG9taXplIHRoZSBsYWJlbCB1c2VkIGZvciB5b3VyIGVudHJ5IG5hbWVzLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVfbGFiZWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm5hbWVfbGFiZWxcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZV9sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZV9sYWJlbFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVfbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVmZXJlbmNlX3Npbmd1bGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTaW5ndWxhciBSZWZlcmVuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0uc2luZ3VsYXJSZWZlcmVuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIldoYXQgd291bGQgeW91IGxpa2UgdG8gcmVmZXJlbmNlIHRoaXMgYXMgaW4gc2luZ3VsYXIgZm9ybT8gQnkgZGVmYXVsdCB3aWxsIHRyeSB0byBndWVzcyBmcm9tIHRoZSBuYW1lLiBSZXN1bHRzIG1heSB2YXJ5LlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInJlZmVyZW5jZV9zaW5ndWxhclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZmVyZW5jZV9zaW5ndWxhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJlZmVyZW5jZV9zaW5ndWxhcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicmVmZXJlbmNlX3Npbmd1bGFyXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVmZXJlbmNlX3Npbmd1bGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlZmVyZW5jZV9wbHVyYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBsdXJhbCBSZWZlcmVuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0ucGx1cmFsUmVmZXJlbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIHJlZmVyZW5jZSB0aGlzIGFzIGluIHBsdXJhbCBmb3JtPyBCeSBkZWZhdWx0IHdpbGwgdHJ5IHRvIGd1ZXNzIGZyb20gdGhlIG5hbWUuIFJlc3VsdHMgbWF5IHZhcnkuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicmVmZXJlbmNlX3BsdXJhbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwicmVmZXJlbmNlX3BsdXJhbFwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZWZlcmVuY2VfcGx1cmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyZWZlcmVuY2VfcGx1cmFsXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVmZXJlbmNlX3BsdXJhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0udHlwZSA9PSBcImNvbGxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwLXRvZ2dsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93X25hbWVfZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTaG93IG5hbWUgZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRydWUtdmFsdWVcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlLXZhbHVlXCI6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2hvd19uYW1lX2ZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNob3dfbmFtZV9maWVsZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2hvd19uYW1lX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAhX3ZtLmZvcm0uc2hvd19uYW1lX2ZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lX2Zvcm1hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWUgRm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV2hhdCBmb3JtYXQgd291bGQgeW91IGxpa2UgeW91ciBnZW5lcmF0ZWQgbmFtZXMgYW5kIHNsdWdzIHRvIGZvbGxvdz9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibmFtZV9mb3JtYXRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lX2Zvcm1hdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lX2Zvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lX2Zvcm1hdFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZV9mb3JtYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJwLXRhYlwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcIlJvdXRlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJSb3V0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscDogXCJXaGVuIHRoZSBVUkkgbWF0Y2hlcyB0aGlzIHBhdHRlcm4uLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicm91dGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInJvdXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyb3V0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJvdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJUZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscDogXCJSZW5kZXIgdGhpcyB0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJ0ZW1wbGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwidGVtcGxhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInRlbXBsYXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM1MGI1NDc2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzUwYjU0NzYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzUwYjU0NzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzUwYjU0NzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM1MGI1NDc2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2M1MGI1NDc2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvU2hhcmVkRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM1MGI1NDc2JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==