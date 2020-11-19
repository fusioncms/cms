(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/SharedForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Roles/SharedForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__webpack_require__(/*! ../../mixins/roles */ "./resources/js/mixins/roles.js")["default"]],
  props: {
    role: {
      type: Object,
      required: false
    },
    form: {
      type: Object,
      required: true
    },
    submit: {
      required: true
    }
  },
  computed: {
    levelHelp: function levelHelp() {
      if (this.disableSetLevel) {
        return "You can not edit your own role's level.";
      }

      return 'Enter a number between ' + this.$user.role.level + ' and 99.';
    },
    disableSetLevel: function disableSetLevel() {
      if (!this.role) return false;
      if (this.role.id === this.$user.role.id) return true;
      return false;
    },
    permissions: {
      get: function get() {
        return this.form.permissions;
      },
      set: function set(value) {
        this.form.permissions = value;
      }
    },
    isOwner: function isOwner() {
      if (!this.role) return false;
      return this.role.id && this.role.id === 1;
    }
  },
  methods: {// toggle(name, ev) {
    //     const token  = _.head(_.split(name, '.'))
    //     const items  = this.$refs.permissions.records
    //     if (ev.target.checked) {
    //         let matches = _.filter(items, (item) => _.startsWith(item.name, token))
    //             matches = _.map(matches,  (item) => item.name)
    //         this.permissions = _.union(this.permissions, matches)
    //     } else {
    //         this.permissions = _.remove(this.permissions, (item) => ! _.startsWith(item, token))
    //     }
    // }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/SharedForm.vue?vue&type=template&id=28a03d84&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Roles/SharedForm.vue?vue&type=template&id=28a03d84& ***!
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
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "div",
          { staticClass: "buttons" },
          [
            _vm.$mq != "sm"
              ? _c(
                  "ui-button",
                  {
                    key: "go-back-btn",
                    attrs: { to: { name: "roles" }, variant: "secondary" }
                  },
                  [_vm._v("Go Back")]
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.isOwner
              ? _c(
                  "ui-button",
                  {
                    key: "save-btn",
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
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.isOwner
        ? _c("ui-alert", { attrs: { icon: "info-circle", variant: "info" } }, [
            _c("p", [
              _vm._v("Owner role information and permissions are not editable.")
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "General Information",
            description:
              "General information about this role and what it can manage."
          }
        },
        [
          _c("ui-input-group", {
            attrs: {
              id: "roles-name",
              name: "name",
              label: "Name",
              description: "What should this role be called?",
              autocomplete: "off",
              autofocus: "",
              required: "",
              "has-error": _vm.form.errors.has("name"),
              "error-message": _vm.form.errors.get("name"),
              readonly: _vm.isOwner
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
          _c("ui-textarea-group", {
            attrs: {
              id: "roles-description",
              name: "description",
              label: "Description",
              autocomplete: "off",
              "has-error": _vm.form.errors.has("description"),
              "error-message": _vm.form.errors.get("description"),
              readonly: _vm.isOwner,
              rows: 2
            },
            model: {
              value: _vm.form.description,
              callback: function($$v) {
                _vm.$set(_vm.form, "description", $$v)
              },
              expression: "form.description"
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
            title: "Access Control",
            description:
              "Roles may manage other roles and their associated users with a level equal to or greater than their own. Owners have an ACL of 0."
          }
        },
        [
          _c("ui-input-group", {
            attrs: {
              name: "level",
              label: "Level",
              disabled: _vm.disableSetLevel,
              help: _vm.levelHelp
            },
            model: {
              value: _vm.form.level,
              callback: function($$v) {
                _vm.$set(_vm.form, "level", $$v)
              },
              expression: "form.level"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.hasPermissions(_vm.form.name)
        ? _c(
            "section-card",
            {
              attrs: {
                title: "Permissions",
                description:
                  "Permissions allow you to restrict which areas of the controle panel this user can access."
              }
            },
            [
              _c("ui-table", {
                key: "permissions-table",
                ref: "permissions",
                attrs: {
                  id: "permissions-table",
                  endpoint: "/datatable/permissions",
                  "sort-by": "name",
                  "no-actions": "",
                  "show-page-status": ""
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "name",
                      fn: function(table) {
                        return [
                          _vm.isOwner
                            ? _c("code", [_vm._v(_vm._s(table.record.name))])
                            : _c(
                                "ui-checkbox",
                                {
                                  attrs: {
                                    id: "roles-checkbox-" + table.record.name,
                                    name: "permissions",
                                    "native-value": table.record.name
                                  },
                                  model: {
                                    value: _vm.permissions,
                                    callback: function($$v) {
                                      _vm.permissions = $$v
                                    },
                                    expression: "permissions"
                                  }
                                },
                                [
                                  _c("code", [
                                    _vm._v(_vm._s(table.record.name))
                                  ])
                                ]
                              )
                        ]
                      }
                    },
                    {
                      key: "description",
                      fn: function(table) {
                        return [
                          _c("p", [_vm._v(_vm._s(table.record.description))])
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  839171431
                )
              })
            ],
            1
          )
        : _vm._e()
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
    isAssignable: function isAssignable(name, level) {
      return !_.includes(['guest'], name) && this.$level(level);
    },
    isRemovable: function isRemovable(name, level) {
      return !_.includes(['owner', 'user', 'guest'], name) && this.$level(level);
    },
    hasPermissions: function hasPermissions(name) {
      return !_.includes(['owner'], name);
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Roles/SharedForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/Roles/SharedForm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedForm_vue_vue_type_template_id_28a03d84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=28a03d84& */ "./resources/js/pages/Roles/SharedForm.vue?vue&type=template&id=28a03d84&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/Roles/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedForm_vue_vue_type_template_id_28a03d84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedForm_vue_vue_type_template_id_28a03d84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Roles/SharedForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Roles/SharedForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Roles/SharedForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Roles/SharedForm.vue?vue&type=template&id=28a03d84&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Roles/SharedForm.vue?vue&type=template&id=28a03d84& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_28a03d84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=template&id=28a03d84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/SharedForm.vue?vue&type=template&id=28a03d84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_28a03d84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_28a03d84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL1NoYXJlZEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaGFyZWRGb3JtLnZ1ZT81Y2MzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9taXhpbnMvcm9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL1NoYXJlZEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaGFyZWRGb3JtLnZ1ZT9hODEzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaGFyZWRGb3JtLnZ1ZT84ZjBmIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJpc0Fzc2lnbmFibGUiLCJuYW1lIiwibGV2ZWwiLCJfIiwiaW5jbHVkZXMiLCIkbGV2ZWwiLCJpc1JlbW92YWJsZSIsImhhc1Blcm1pc3Npb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNFQTtBQUVBLFdBQ0EsMEZBREEsQ0FGQTtBQU1BO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQU1BO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTkE7QUFXQTtBQUNBO0FBREE7QUFYQSxHQU5BO0FBc0JBO0FBQ0EsYUFEQSx1QkFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBUEE7QUFTQSxtQkFUQSw2QkFTQTtBQUNBO0FBRUE7QUFFQTtBQUNBLEtBZkE7QUFpQkE7QUFDQSxTQURBLGlCQUNBO0FBQ0E7QUFDQSxPQUhBO0FBS0EsU0FMQSxlQUtBLEtBTEEsRUFLQTtBQUNBO0FBQ0E7QUFQQSxLQWpCQTtBQTJCQSxXQTNCQSxxQkEyQkE7QUFDQTtBQUVBO0FBQ0E7QUEvQkEsR0F0QkE7QUF3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YTtBQUNwQixhQUFPLENBQUVFLENBQUMsQ0FBQ0MsUUFBRixDQUFXLENBQUMsT0FBRCxDQUFYLEVBQXNCSCxJQUF0QixDQUFUO0FBQ0E7QUFYTztBQURLLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUY7QUFDM0I7QUFDTDs7O0FBR3pEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLHNQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvMS5qcz9pZD05YWVmMzQxMWZlN2E3NTc1ZjE2ZCIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiB2LWlmPVwiJG1xICE9ICdzbSdcIiBrZXk9XCJnby1iYWNrLWJ0blwiIDp0bz1cInsgbmFtZTogJ3JvbGVzJyB9XCIgdmFyaWFudD1cInNlY29uZGFyeVwiPkdvIEJhY2s8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtaWY9XCIhaXNPd25lclwiIGtleT1cInNhdmUtYnRuXCIgdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIiA6ZGlzYWJsZWQ9XCIhZm9ybS5oYXNDaGFuZ2VzXCI+U2F2ZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDx1aS1hbGVydCB2LWlmPVwiaXNPd25lclwiIGljb249XCJpbmZvLWNpcmNsZVwiIHZhcmlhbnQ9XCJpbmZvXCI+XG4gICAgICAgICAgICA8cD5Pd25lciByb2xlIGluZm9ybWF0aW9uIGFuZCBwZXJtaXNzaW9ucyBhcmUgbm90IGVkaXRhYmxlLjwvcD5cbiAgICAgICAgPC91aS1hbGVydD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiR2VuZXJhbCBJbmZvcm1hdGlvblwiIGRlc2NyaXB0aW9uPVwiR2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIHJvbGUgYW5kIHdoYXQgaXQgY2FuIG1hbmFnZS5cIj5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIGlkPVwicm9sZXMtbmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXaGF0IHNob3VsZCB0aGlzIHJvbGUgYmUgY2FsbGVkP1wiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwiaXNPd25lclwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLXRleHRhcmVhLWdyb3VwXG4gICAgICAgICAgICAgICAgaWQ9XCJyb2xlcy1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2Rlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdkZXNjcmlwdGlvbicpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwiaXNPd25lclwiXG4gICAgICAgICAgICAgICAgOnJvd3M9XCIyXCI+XG4gICAgICAgICAgICA8L3VpLXRleHRhcmVhLWdyb3VwPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiQWNjZXNzIENvbnRyb2xcIiBkZXNjcmlwdGlvbj1cIlJvbGVzIG1heSBtYW5hZ2Ugb3RoZXIgcm9sZXMgYW5kIHRoZWlyIGFzc29jaWF0ZWQgdXNlcnMgd2l0aCBhIGxldmVsIGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGVpciBvd24uIE93bmVycyBoYXZlIGFuIEFDTCBvZiAwLlwiPlxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgbmFtZT1cImxldmVsXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxldmVsXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5sZXZlbFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZVNldExldmVsXCJcbiAgICAgICAgICAgICAgICA6aGVscD1cImxldmVsSGVscFwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIlBlcm1pc3Npb25zXCIgZGVzY3JpcHRpb249XCJQZXJtaXNzaW9ucyBhbGxvdyB5b3UgdG8gcmVzdHJpY3Qgd2hpY2ggYXJlYXMgb2YgdGhlIGNvbnRyb2xlIHBhbmVsIHRoaXMgdXNlciBjYW4gYWNjZXNzLlwiIHYtaWY9XCJoYXNQZXJtaXNzaW9ucyhmb3JtLm5hbWUpXCI+XG4gICAgICAgICAgICA8dWktdGFibGUga2V5PVwicGVybWlzc2lvbnMtdGFibGVcIiByZWY9XCJwZXJtaXNzaW9uc1wiIGlkPVwicGVybWlzc2lvbnMtdGFibGVcIiBlbmRwb2ludD1cIi9kYXRhdGFibGUvcGVybWlzc2lvbnNcIiBzb3J0LWJ5PVwibmFtZVwiIG5vLWFjdGlvbnMgc2hvdy1wYWdlLXN0YXR1cz5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5hbWVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNvZGUgdi1pZj1cImlzT3duZXJcIj57eyB0YWJsZS5yZWNvcmQubmFtZSB9fTwvY29kZT5cblxuICAgICAgICAgICAgICAgICAgICA8dWktY2hlY2tib3ggdi1lbHNlIDppZD1cIidyb2xlcy1jaGVja2JveC0nICsgdGFibGUucmVjb3JkLm5hbWVcIiBuYW1lPVwicGVybWlzc2lvbnNcIiA6bmF0aXZlLXZhbHVlPVwidGFibGUucmVjb3JkLm5hbWVcIiB2LW1vZGVsPVwicGVybWlzc2lvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPnt7IHRhYmxlLnJlY29yZC5uYW1lIH19PC9jb2RlPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImRlc2NyaXB0aW9uXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHRhYmxlLnJlY29yZC5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC91aS10YWJsZT5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAgICAgbWl4aW5zOiBbXG4gICAgICAgICAgICByZXF1aXJlKCcuLi8uLi9taXhpbnMvcm9sZXMnKS5kZWZhdWx0XG4gICAgICAgIF0sXG5cbiAgICBcdHByb3BzOiB7XG5cdFx0XHRyb2xlOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0fSxcblxuICAgIFx0XHRmb3JtOiB7XG4gICAgXHRcdFx0dHlwZTogT2JqZWN0LFxuICAgIFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0fSxcblxuXHRcdFx0c3VibWl0OiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXHRcdH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGxldmVsSGVscCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlU2V0TGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiWW91IGNhbiBub3QgZWRpdCB5b3VyIG93biByb2xlJ3MgbGV2ZWwuXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICdFbnRlciBhIG51bWJlciBiZXR3ZWVuICcgKyB0aGlzLiR1c2VyLnJvbGUubGV2ZWwgKyAnIGFuZCA5OS4nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBkaXNhYmxlU2V0TGV2ZWwoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEgdGhpcy5yb2xlKSByZXR1cm4gZmFsc2VcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvbGUuaWQgPT09IHRoaXMuJHVzZXIucm9sZS5pZCkgcmV0dXJuIHRydWVcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtLnBlcm1pc3Npb25zXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wZXJtaXNzaW9ucyA9IHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNPd25lcigpIHtcbiAgICAgICAgICAgICAgICBpZiAoISB0aGlzLnJvbGUpIHJldHVybiBmYWxzZVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9sZS5pZCAmJiB0aGlzLnJvbGUuaWQgPT09IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgICAgIC8vIHRvZ2dsZShuYW1lLCBldikge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHRva2VuICA9IF8uaGVhZChfLnNwbGl0KG5hbWUsICcuJykpXG4gICAgICAgICAgICAvLyAgICAgY29uc3QgaXRlbXMgID0gdGhpcy4kcmVmcy5wZXJtaXNzaW9ucy5yZWNvcmRzXG5cbiAgICAgICAgICAgIC8vICAgICBpZiAoZXYudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IG1hdGNoZXMgPSBfLmZpbHRlcihpdGVtcywgKGl0ZW0pID0+IF8uc3RhcnRzV2l0aChpdGVtLm5hbWUsIHRva2VuKSlcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG1hdGNoZXMgPSBfLm1hcChtYXRjaGVzLCAgKGl0ZW0pID0+IGl0ZW0ubmFtZSlcblxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gXy51bmlvbih0aGlzLnBlcm1pc3Npb25zLCBtYXRjaGVzKVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBfLnJlbW92ZSh0aGlzLnBlcm1pc3Npb25zLCAoaXRlbSkgPT4gISBfLnN0YXJ0c1dpdGgoaXRlbSwgdG9rZW4pKVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS4kbXEgIT0gXCJzbVwiXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZ28tYmFjay1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJyb2xlc1wiIH0sIHZhcmlhbnQ6IFwic2Vjb25kYXJ5XCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAhX3ZtLmlzT3duZXJcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJzYXZlLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZm9ybS5oYXNDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmlzT3duZXJcbiAgICAgICAgPyBfYyhcInVpLWFsZXJ0XCIsIHsgYXR0cnM6IHsgaWNvbjogXCJpbmZvLWNpcmNsZVwiLCB2YXJpYW50OiBcImluZm9cIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIk93bmVyIHJvbGUgaW5mb3JtYXRpb24gYW5kIHBlcm1pc3Npb25zIGFyZSBub3QgZWRpdGFibGUuXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiR2VuZXJhbCBJbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiR2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIHJvbGUgYW5kIHdoYXQgaXQgY2FuIG1hbmFnZS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwicm9sZXMtbmFtZVwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZVwiLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJXaGF0IHNob3VsZCB0aGlzIHJvbGUgYmUgY2FsbGVkP1wiLFxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0uaXNPd25lclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWktdGV4dGFyZWEtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwicm9sZXMtZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgcmVhZG9ubHk6IF92bS5pc093bmVyLFxuICAgICAgICAgICAgICByb3dzOiAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZGVzY3JpcHRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiQWNjZXNzIENvbnRyb2xcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICBcIlJvbGVzIG1heSBtYW5hZ2Ugb3RoZXIgcm9sZXMgYW5kIHRoZWlyIGFzc29jaWF0ZWQgdXNlcnMgd2l0aCBhIGxldmVsIGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGVpciBvd24uIE93bmVycyBoYXZlIGFuIEFDTCBvZiAwLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcImxldmVsXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkxldmVsXCIsXG4gICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZVNldExldmVsLFxuICAgICAgICAgICAgICBoZWxwOiBfdm0ubGV2ZWxIZWxwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmxldmVsLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibGV2ZWxcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubGV2ZWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmhhc1Blcm1pc3Npb25zKF92bS5mb3JtLm5hbWUpXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBlcm1pc3Npb25zXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICBcIlBlcm1pc3Npb25zIGFsbG93IHlvdSB0byByZXN0cmljdCB3aGljaCBhcmVhcyBvZiB0aGUgY29udHJvbGUgcGFuZWwgdGhpcyB1c2VyIGNhbiBhY2Nlc3MuXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1aS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInBlcm1pc3Npb25zLXRhYmxlXCIsXG4gICAgICAgICAgICAgICAgcmVmOiBcInBlcm1pc3Npb25zXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcInBlcm1pc3Npb25zLXRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICBlbmRwb2ludDogXCIvZGF0YXRhYmxlL3Blcm1pc3Npb25zXCIsXG4gICAgICAgICAgICAgICAgICBcInNvcnQtYnlcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICBcIm5vLWFjdGlvbnNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIFwic2hvdy1wYWdlLXN0YXR1c1wiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc093bmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImNvZGVcIiwgW192bS5fdihfdm0uX3ModGFibGUucmVjb3JkLm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInJvbGVzLWNoZWNrYm94LVwiICsgdGFibGUucmVjb3JkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBlcm1pc3Npb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiB0YWJsZS5yZWNvcmQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wZXJtaXNzaW9ucyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGVybWlzc2lvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiY29kZVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3ModGFibGUucmVjb3JkLmRlc2NyaXB0aW9uKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIDgzOTE3MTQzMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnQgZGVmYXVsdCB7XG5cdG1ldGhvZHM6IHtcblx0XHRpc0Fzc2lnbmFibGUobmFtZSwgbGV2ZWwpIHtcblx0XHRcdHJldHVybiAhIF8uaW5jbHVkZXMoWydndWVzdCddLCBuYW1lKSAmJiB0aGlzLiRsZXZlbChsZXZlbClcblx0XHR9LFxuXG5cdFx0aXNSZW1vdmFibGUobmFtZSwgbGV2ZWwpIHtcblx0XHRcdHJldHVybiAhXy5pbmNsdWRlcyhbJ293bmVyJywgJ3VzZXInLCAnZ3Vlc3QnXSwgbmFtZSkgJiYgdGhpcy4kbGV2ZWwobGV2ZWwpXG5cdFx0fSxcblxuXHRcdGhhc1Blcm1pc3Npb25zKG5hbWUpIHtcblx0XHRcdHJldHVybiAhIF8uaW5jbHVkZXMoWydvd25lciddLCBuYW1lKTtcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4YTAzZDg0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb24vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjhhMDNkODQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjhhMDNkODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjhhMDNkODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4YTAzZDg0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI4YTAzZDg0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hhcmVkRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4YTAzZDg0JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==