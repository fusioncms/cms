(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
    "div",
    { staticClass: "matrix-page" },
    [
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "div",
          { staticClass: "buttons" },
          [
            _c(
              "ui-button",
              { attrs: { to: { name: "matrices" }, variant: "secondary" } },
              [_vm._v("Go Back")]
            ),
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
      _c(
        "section-card",
        {
          attrs: {
            title: "General Information",
            description:
              "General information about your collection and what it manages."
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col w-full lg:w-1/2" },
              [
                _c("ui-input-group", {
                  attrs: {
                    name: "name",
                    label: "Name",
                    help: "What should this matrix be called?",
                    autocomplete: "off",
                    autofocus: "",
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
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col w-full lg:w-1/2" },
              [
                _c("ui-slug-group", {
                  attrs: {
                    name: "handle",
                    label: "Handle",
                    help: "A developer-friendly identifier.",
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
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("ui-textarea-group", {
            attrs: {
              name: "description",
              label: "Description",
              help:
                "Give a short description of what this matrix will manage and store.",
              autocomplete: "off",
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
          _c("ui-select-group", {
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
          _c("ui-select-group", {
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
          _c("ui-toggle", {
            attrs: {
              name: "status",
              label: "Status",
              help: _vm.form.status
                ? "Toggle to disable this matrix."
                : "Toggle to enable this matrix.",
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
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "Customizations",
            description: "Configure the various customizations options."
          }
        },
        [
          _c("ui-input-group", {
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
          _c("ui-input-group", {
            attrs: {
              name: "reference_singular",
              label: "Singular Reference",
              placeholder: _vm.singularReference,
              help:
                "What would you like to reference this as in singular form? By default will try to guess from the name. Results may vary.",
              "has-error": _vm.form.errors.has("reference_singular"),
              "error-message": _vm.form.errors.get("reference_singular")
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
          _c("ui-input-group", {
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
          _vm.form.type == "collection"
            ? _c("ui-toggle", {
                attrs: {
                  name: "show_name_field",
                  label: "Show name field",
                  help: !_vm.form.show_name_field
                    ? "Auto-generate a name using the format in the field below."
                    : "Include a name field on this matrix.",
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
            ? _c("ui-input-group", {
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
        "section-card",
        {
          attrs: {
            title: "Appearance",
            description:
              "Choose where to show this matrix and how to represent it."
          }
        },
        [
          _c("icon-picker", {
            attrs: {
              name: "icon",
              label: "Icon",
              placeholder: "Search icons...",
              help: "Choose an icon that best represents your matrix.",
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
          _c("ui-toggle", {
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
          _c("ui-toggle", {
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
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "Routing",
            description:
              "Configure how entries within the collection will be accessed on the frontend."
          }
        },
        [
          _c("ui-input-group", {
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
          _c("ui-input-group", {
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
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "Blueprint",
            description: "Configure this matrix' blueprint."
          }
        },
        [
          _c("section-builder", {
            model: {
              value: _vm.form.sections,
              callback: function($$v) {
                _vm.$set(_vm.form, "sections", $$v)
              },
              expression: "form.sections"
            }
          })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL01hdHJpY2VzL1NoYXJlZEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXRyaWNlcy9TaGFyZWRGb3JtLnZ1ZT9hNGYyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXRyaWNlcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvU2hhcmVkRm9ybS52dWU/OWRlZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvU2hhcmVkRm9ybS52dWU/M2JiMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0TUE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHFCQUZBO0FBR0E7QUFIQSxLQURBO0FBT0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FQQTtBQVlBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBWkE7QUFpQkE7QUFDQTtBQURBLEtBakJBO0FBcUJBO0FBQ0E7QUFEQTtBQXJCQSxHQURBO0FBMkJBO0FBQ0EscUJBREEsK0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFLQSxtQkFMQSw2QkFLQTtBQUNBO0FBQ0EsS0FQQTtBQVNBLGlCQVRBLDJCQVNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUE7QUFGQTtBQUlBLE9BTEE7O0FBT0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBdEJBLEdBM0JBO0FBb0RBO0FBQ0EsdUJBREEsMkJBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQXBEQSxHOzs7Ozs7Ozs7Ozs7QUM5TUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw2QkFBNkI7QUFDbEM7QUFDQSxvQkFBb0IsU0FBUyxnQkFBZ0IsRUFBRTtBQUMvQztBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTLE1BQU0sbUJBQW1CLHdCQUF3QixFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQSxlQUFlLHFDQUFxQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQ0FBcUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL2JBO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQzNCO0FBQ0w7OztBQUd6RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUscUZBQU07QUFDUixFQUFFLDhGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFnTSxDQUFnQixzUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzQuanM/aWQ9OGJiYTQ2ZjIzMjljYjRlNWJhMjIiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1hdHJpeC1wYWdlXCI+XG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24gOnRvPVwieyBuYW1lOiAnbWF0cmljZXMnIH1cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+R28gQmFjazwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24gdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIiA6ZGlzYWJsZWQ9XCIhZm9ybS5oYXNDaGFuZ2VzXCI+U2F2ZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJHZW5lcmFsIEluZm9ybWF0aW9uXCIgZGVzY3JpcHRpb249XCJHZW5lcmFsIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgY29sbGVjdGlvbiBhbmQgd2hhdCBpdCBtYW5hZ2VzLlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsIGxnOnctMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHNob3VsZCB0aGlzIG1hdHJpeCBiZSBjYWxsZWQ/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLXNsdWctZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkEgZGV2ZWxvcGVyLWZyaWVuZGx5IGlkZW50aWZpZXIuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyPVwiX1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6d2F0Y2g9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnaGFuZGxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2hhbmRsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLXNsdWctZ3JvdXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHVpLXRleHRhcmVhLWdyb3VwXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiR2l2ZSBhIHNob3J0IGRlc2NyaXB0aW9uIG9mIHdoYXQgdGhpcyBtYXRyaXggd2lsbCBtYW5hZ2UgYW5kIHN0b3JlLlwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdkZXNjcmlwdGlvbicpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDwvdWktdGV4dGFyZWEtZ3JvdXA+XG5cblxuICAgICAgICAgICAgPHVpLXNlbGVjdC1ncm91cFxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlR5cGVcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHR5cGUgb2YgbWF0cml4IHdpbGwgdGhpcyBiZT9cIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAnY29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdTaW5nbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJ3NpbmdsZScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygndHlwZScpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgndHlwZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS50eXBlXCI+XG4gICAgICAgICAgICA8L3VpLXNlbGVjdC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLXNlbGVjdC1ncm91cFxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXJlbnRfaWRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFyZW50IE1hdHJpeFwiXG4gICAgICAgICAgICAgICAgaGVscD1cIlNob3VsZCB0aGlzIG1hdHJpeCBiZWxvbmcgdG8gYW5vdGhlcj9cIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwicGFyZW50T3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygncGFyZW50X2lkJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdwYXJlbnRfaWQnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucGFyZW50X2lkXCI+XG4gICAgICAgICAgICA8L3VpLXNlbGVjdC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLXRvZ2dsZVxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcbiAgICAgICAgICAgICAgICA6aGVscD1cImZvcm0uc3RhdHVzID8gJ1RvZ2dsZSB0byBkaXNhYmxlIHRoaXMgbWF0cml4LicgOiAnVG9nZ2xlIHRvIGVuYWJsZSB0aGlzIG1hdHJpeC4nXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgIDp0cnVlLXZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgPC91aS10b2dnbGU+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJDdXN0b21pemF0aW9uc1wiIGRlc2NyaXB0aW9uPVwiQ29uZmlndXJlIHRoZSB2YXJpb3VzIGN1c3RvbWl6YXRpb25zIG9wdGlvbnMuXCI+XG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZV9sYWJlbFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lIExhYmVsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJJZiB5b3UnZCBsaWtlLCB5b3UgbWF5IGN1c3RvbWl6ZSB0aGUgbGFiZWwgdXNlZCBmb3IgeW91ciBlbnRyeSBuYW1lcy5cIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ25hbWVfbGFiZWwnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWVfbGFiZWwnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZV9sYWJlbFwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlZmVyZW5jZV9zaW5ndWxhclwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTaW5ndWxhciBSZWZlcmVuY2VcIlxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInNpbmd1bGFyUmVmZXJlbmNlXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCB3b3VsZCB5b3UgbGlrZSB0byByZWZlcmVuY2UgdGhpcyBhcyBpbiBzaW5ndWxhciBmb3JtPyBCeSBkZWZhdWx0IHdpbGwgdHJ5IHRvIGd1ZXNzIGZyb20gdGhlIG5hbWUuIFJlc3VsdHMgbWF5IHZhcnkuXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdyZWZlcmVuY2Vfc2luZ3VsYXInKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3JlZmVyZW5jZV9zaW5ndWxhcicpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5yZWZlcmVuY2Vfc2luZ3VsYXJcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVuY2VfcGx1cmFsXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBsdXJhbCBSZWZlcmVuY2VcIlxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInBsdXJhbFJlZmVyZW5jZVwiXG4gICAgICAgICAgICAgICAgaGVscD1cIldoYXQgd291bGQgeW91IGxpa2UgdG8gcmVmZXJlbmNlIHRoaXMgYXMgaW4gcGx1cmFsIGZvcm0/IEJ5IGRlZmF1bHQgd2lsbCB0cnkgdG8gZ3Vlc3MgZnJvbSB0aGUgbmFtZS4gUmVzdWx0cyBtYXkgdmFyeS5cIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3JlZmVyZW5jZV9wbHVyYWwnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3JlZmVyZW5jZV9wbHVyYWwnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucmVmZXJlbmNlX3BsdXJhbFwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLXRvZ2dsZVxuICAgICAgICAgICAgICAgIHYtaWY9XCJmb3JtLnR5cGUgPT0gJ2NvbGxlY3Rpb24nXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2hvd19uYW1lX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNob3cgbmFtZSBmaWVsZFwiXG4gICAgICAgICAgICAgICAgOmhlbHA9XCIhZm9ybS5zaG93X25hbWVfZmllbGQgPyAnQXV0by1nZW5lcmF0ZSBhIG5hbWUgdXNpbmcgdGhlIGZvcm1hdCBpbiB0aGUgZmllbGQgYmVsb3cuJyA6ICdJbmNsdWRlIGEgbmFtZSBmaWVsZCBvbiB0aGlzIG1hdHJpeC4nXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zaG93X25hbWVfZmllbGRcIlxuICAgICAgICAgICAgICAgIDp0cnVlLXZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgPC91aS10b2dnbGU+XG5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIHYtaWY9XCIhZm9ybS5zaG93X25hbWVfZmllbGRcIlxuICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZV9mb3JtYXRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZSBGb3JtYXRcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IGZvcm1hdCB3b3VsZCB5b3UgbGlrZSB5b3VyIGdlbmVyYXRlZCBuYW1lcyBhbmQgc2x1Z3MgdG8gZm9sbG93P1wiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZV9mb3JtYXQnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWVfZm9ybWF0JylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5hbWVfZm9ybWF0XCI+XG4gICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiQXBwZWFyYW5jZVwiIGRlc2NyaXB0aW9uPVwiQ2hvb3NlIHdoZXJlIHRvIHNob3cgdGhpcyBtYXRyaXggYW5kIGhvdyB0byByZXByZXNlbnQgaXQuXCI+XG4gICAgICAgICAgICA8aWNvbi1waWNrZXJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJJY29uXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpY29ucy4uLlwiXG4gICAgICAgICAgICAgICAgaGVscD1cIkNob29zZSBhbiBpY29uIHRoYXQgYmVzdCByZXByZXNlbnRzIHlvdXIgbWF0cml4LlwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnaWNvbicpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnaWNvbicpXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmljb25cIj5cbiAgICAgICAgICAgIDwvaWNvbi1waWNrZXI+XG5cbiAgICAgICAgICAgIDx1aS10b2dnbGVcbiAgICAgICAgICAgICAgICBuYW1lPVwic2lkZWJhclwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTaG93IGluIFNpZGViYXJcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnNpZGViYXJcIlxuICAgICAgICAgICAgICAgIDp0cnVlLXZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgPC91aS10b2dnbGU+XG5cbiAgICAgICAgICAgIDx1aS10b2dnbGVcbiAgICAgICAgICAgICAgICBuYW1lPVwicXVpY2tsaW5rXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNob3cgYXMgUXVpY2tsaW5rXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5xdWlja2xpbmtcIlxuICAgICAgICAgICAgICAgIDp0cnVlLXZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgPC91aS10b2dnbGU+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJSb3V0aW5nXCIgZGVzY3JpcHRpb249XCJDb25maWd1cmUgaG93IGVudHJpZXMgd2l0aGluIHRoZSBjb2xsZWN0aW9uIHdpbGwgYmUgYWNjZXNzZWQgb24gdGhlIGZyb250ZW5kLlwiPlxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgbmFtZT1cInJvdXRlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJvdXRlXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiV2hlbiB0aGUgVVJJIG1hdGNoZXMgdGhpcyBwYXR0ZXJuLi4uXCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdyb3V0ZScpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncm91dGUnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucm91dGVcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgaGVscD1cIlJlbmRlciB0aGlzIHRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCd0ZW1wbGF0ZScpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgndGVtcGxhdGUnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0udGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJCbHVlcHJpbnRcIiBkZXNjcmlwdGlvbj1cIkNvbmZpZ3VyZSB0aGlzIG1hdHJpeCcgYmx1ZXByaW50LlwiPlxuICAgICAgICAgICAgPHNlY3Rpb24tYnVpbGRlciB2LW1vZGVsPVwiZm9ybS5zZWN0aW9uc1wiPjwvc2VjdGlvbi1idWlsZGVyPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBpZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1hdHJpeDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdWJtaXQ6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1hdHJpY2VzOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBzaW5ndWxhclJlZmVyZW5jZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGx1cmFsaXplLnNpbmd1bGFyKHRoaXMuZm9ybS5uYW1lKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcGx1cmFsUmVmZXJlbmNlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbHVyYWxpemUodGhpcy5mb3JtLm5hbWUpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gXy5tYXAodGhpcy5tYXRyaWNlcywgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGl0ZW0uaWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBvcHRpb25zID0gXy5yZW1vdmUob3B0aW9ucywgKGl0ZW0pID0+IHRoaXMuaWQgPT0gaXRlbS5pZClcblxuICAgICAgICAgICAgICAgIG9wdGlvbnMudW5zaGlmdCh7ICdsYWJlbCc6ICdOb25lJywgJ3ZhbHVlJzogbnVsbCB9KVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJyRwYXJlbnQuZm9ybS50eXBlJyh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZm9ybS5zaG93X25hbWVfZmllbGQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibWF0cml4LXBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwicG9ydGFsXCIsIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJtYXRyaWNlc1wiIH0sIHZhcmlhbnQ6IFwic2Vjb25kYXJ5XCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZm9ybS5oYXNDaGFuZ2VzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiR2VuZXJhbCBJbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiR2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB5b3VyIGNvbGxlY3Rpb24gYW5kIHdoYXQgaXQgbWFuYWdlcy5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCBsZzp3LTEvMlwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiV2hhdCBzaG91bGQgdGhpcyBtYXRyaXggYmUgY2FsbGVkP1wiLFxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsIGxnOnctMS8yXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidWktc2x1Zy1ncm91cFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJIYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgaGVscDogXCJBIGRldmVsb3Blci1mcmllbmRseSBpZGVudGlmaWVyLlwiLFxuICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZWxpbWl0ZXI6IFwiX1wiLFxuICAgICAgICAgICAgICAgICAgICB3YXRjaDogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImhhbmRsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJoYW5kbGVcIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiaGFuZGxlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1aS10ZXh0YXJlYS1ncm91cFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgXCJHaXZlIGEgc2hvcnQgZGVzY3JpcHRpb24gb2Ygd2hhdCB0aGlzIG1hdHJpeCB3aWxsIG1hbmFnZSBhbmQgc3RvcmUuXCIsXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImRlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZGVzY3JpcHRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1aS1zZWxlY3QtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlR5cGVcIixcbiAgICAgICAgICAgICAgaGVscDogXCJXaGF0IHR5cGUgb2YgbWF0cml4IHdpbGwgdGhpcyBiZT9cIixcbiAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImNvbGxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2luZ2xlXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogXCJzaW5nbGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInR5cGVcIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwidHlwZVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50eXBlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidHlwZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50eXBlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWktc2VsZWN0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwicGFyZW50X2lkXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlBhcmVudCBNYXRyaXhcIixcbiAgICAgICAgICAgICAgaGVscDogXCJTaG91bGQgdGhpcyBtYXRyaXggYmVsb25nIHRvIGFub3RoZXI/XCIsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5wYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicGFyZW50X2lkXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInBhcmVudF9pZFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXJlbnRfaWQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwYXJlbnRfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFyZW50X2lkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWktdG9nZ2xlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXR1c1wiLFxuICAgICAgICAgICAgICBoZWxwOiBfdm0uZm9ybS5zdGF0dXNcbiAgICAgICAgICAgICAgICA/IFwiVG9nZ2xlIHRvIGRpc2FibGUgdGhpcyBtYXRyaXguXCJcbiAgICAgICAgICAgICAgICA6IFwiVG9nZ2xlIHRvIGVuYWJsZSB0aGlzIG1hdHJpeC5cIixcbiAgICAgICAgICAgICAgXCJ0cnVlLXZhbHVlXCI6IDEsXG4gICAgICAgICAgICAgIFwiZmFsc2UtdmFsdWVcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdGF0dXMsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdGF0dXNcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3RhdHVzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkN1c3RvbWl6YXRpb25zXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDb25maWd1cmUgdGhlIHZhcmlvdXMgY3VzdG9taXphdGlvbnMgb3B0aW9ucy5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJuYW1lX2xhYmVsXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWUgTGFiZWxcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTmFtZVwiLFxuICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgIFwiSWYgeW91J2QgbGlrZSwgeW91IG1heSBjdXN0b21pemUgdGhlIGxhYmVsIHVzZWQgZm9yIHlvdXIgZW50cnkgbmFtZXMuXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lX2xhYmVsXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm5hbWVfbGFiZWxcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZV9sYWJlbCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVfbGFiZWxcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZV9sYWJlbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwicmVmZXJlbmNlX3Npbmd1bGFyXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNpbmd1bGFyIFJlZmVyZW5jZVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLnNpbmd1bGFyUmVmZXJlbmNlLFxuICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgIFwiV2hhdCB3b3VsZCB5b3UgbGlrZSB0byByZWZlcmVuY2UgdGhpcyBhcyBpbiBzaW5ndWxhciBmb3JtPyBCeSBkZWZhdWx0IHdpbGwgdHJ5IHRvIGd1ZXNzIGZyb20gdGhlIG5hbWUuIFJlc3VsdHMgbWF5IHZhcnkuXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJyZWZlcmVuY2Vfc2luZ3VsYXJcIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwicmVmZXJlbmNlX3Npbmd1bGFyXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJlZmVyZW5jZV9zaW5ndWxhcixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJlZmVyZW5jZV9zaW5ndWxhclwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yZWZlcmVuY2Vfc2luZ3VsYXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcInJlZmVyZW5jZV9wbHVyYWxcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiUGx1cmFsIFJlZmVyZW5jZVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLnBsdXJhbFJlZmVyZW5jZSxcbiAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICBcIldoYXQgd291bGQgeW91IGxpa2UgdG8gcmVmZXJlbmNlIHRoaXMgYXMgaW4gcGx1cmFsIGZvcm0/IEJ5IGRlZmF1bHQgd2lsbCB0cnkgdG8gZ3Vlc3MgZnJvbSB0aGUgbmFtZS4gUmVzdWx0cyBtYXkgdmFyeS5cIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInJlZmVyZW5jZV9wbHVyYWxcIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwicmVmZXJlbmNlX3BsdXJhbFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZWZlcmVuY2VfcGx1cmFsLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicmVmZXJlbmNlX3BsdXJhbFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yZWZlcmVuY2VfcGx1cmFsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5mb3JtLnR5cGUgPT0gXCJjb2xsZWN0aW9uXCJcbiAgICAgICAgICAgID8gX2MoXCJ1aS10b2dnbGVcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dfbmFtZV9maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2hvdyBuYW1lIGZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICBoZWxwOiAhX3ZtLmZvcm0uc2hvd19uYW1lX2ZpZWxkXG4gICAgICAgICAgICAgICAgICAgID8gXCJBdXRvLWdlbmVyYXRlIGEgbmFtZSB1c2luZyB0aGUgZm9ybWF0IGluIHRoZSBmaWVsZCBiZWxvdy5cIlxuICAgICAgICAgICAgICAgICAgICA6IFwiSW5jbHVkZSBhIG5hbWUgZmllbGQgb24gdGhpcyBtYXRyaXguXCIsXG4gICAgICAgICAgICAgICAgICBcInRydWUtdmFsdWVcIjogMSxcbiAgICAgICAgICAgICAgICAgIFwiZmFsc2UtdmFsdWVcIjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zaG93X25hbWVfZmllbGQsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNob3dfbmFtZV9maWVsZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNob3dfbmFtZV9maWVsZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uZm9ybS5zaG93X25hbWVfZmllbGRcbiAgICAgICAgICAgID8gX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVfZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lIEZvcm1hdFwiLFxuICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgXCJXaGF0IGZvcm1hdCB3b3VsZCB5b3UgbGlrZSB5b3VyIGdlbmVyYXRlZCBuYW1lcyBhbmQgc2x1Z3MgdG8gZm9sbG93P1wiLFxuICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVfZm9ybWF0XCIpLFxuICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lX2Zvcm1hdFwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lX2Zvcm1hdCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZV9mb3JtYXRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lX2Zvcm1hdFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkFwcGVhcmFuY2VcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICBcIkNob29zZSB3aGVyZSB0byBzaG93IHRoaXMgbWF0cml4IGFuZCBob3cgdG8gcmVwcmVzZW50IGl0LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJpY29uLXBpY2tlclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcImljb25cIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiSWNvblwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2ggaWNvbnMuLi5cIixcbiAgICAgICAgICAgICAgaGVscDogXCJDaG9vc2UgYW4gaWNvbiB0aGF0IGJlc3QgcmVwcmVzZW50cyB5b3VyIG1hdHJpeC5cIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImljb25cIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiaWNvblwiKSxcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaWNvbixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImljb25cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaWNvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVpLXRvZ2dsZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcInNpZGViYXJcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU2hvdyBpbiBTaWRlYmFyXCIsXG4gICAgICAgICAgICAgIFwidHJ1ZS12YWx1ZVwiOiAxLFxuICAgICAgICAgICAgICBcImZhbHNlLXZhbHVlXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2lkZWJhcixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNpZGViYXJcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2lkZWJhclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVpLXRvZ2dsZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcInF1aWNrbGlua1wiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJTaG93IGFzIFF1aWNrbGlua1wiLFxuICAgICAgICAgICAgICBcInRydWUtdmFsdWVcIjogMSxcbiAgICAgICAgICAgICAgXCJmYWxzZS12YWx1ZVwiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnF1aWNrbGluayxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInF1aWNrbGlua1wiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5xdWlja2xpbmtcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiUm91dGluZ1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiQ29uZmlndXJlIGhvdyBlbnRyaWVzIHdpdGhpbiB0aGUgY29sbGVjdGlvbiB3aWxsIGJlIGFjY2Vzc2VkIG9uIHRoZSBmcm9udGVuZC5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJSb3V0ZVwiLFxuICAgICAgICAgICAgICBoZWxwOiBcIldoZW4gdGhlIFVSSSBtYXRjaGVzIHRoaXMgcGF0dGVybi4uLlwiLFxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJyb3V0ZVwiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJyb3V0ZVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yb3V0ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJvdXRlXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJvdXRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJUZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICBoZWxwOiBcIlJlbmRlciB0aGlzIHRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgbW9ub3NwYWNlZDogXCJcIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInRlbXBsYXRlXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInRlbXBsYXRlXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRlbXBsYXRlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidGVtcGxhdGVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udGVtcGxhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiQmx1ZXByaW50XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDb25maWd1cmUgdGhpcyBtYXRyaXgnIGJsdWVwcmludC5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic2VjdGlvbi1idWlsZGVyXCIsIHtcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zZWN0aW9ucyxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNlY3Rpb25zXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNlY3Rpb25zXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM1MGI1NDc2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzUwYjU0NzYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzUwYjU0NzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzUwYjU0NzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM1MGI1NDc2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2M1MGI1NDc2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvU2hhcmVkRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM1MGI1NDc2JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==