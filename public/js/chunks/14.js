(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Roles/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Form */ "./resources/js/services/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/pages/Roles/SharedForm.vue");
//
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
  permission: 'roles.create',
  head: {
    title: function title() {
      return {
        inner: 'Create a Role'
      };
    }
  },
  data: function data() {
    return {
      form: new _services_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        label: '',
        description: '',
        permissions: []
      }, true)
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post('/api/roles').then(function (response) {
        toast('Role successfully created', 'success');

        _this.$router.push('/roles');
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    }
  }
});

/***/ }),

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
    permissions: {
      get: function get() {
        return this.form.permissions;
      },
      set: function set(value) {
        this.form.permissions = value;
      }
    },
    isOwner: function isOwner() {
      return this.role.id && this.role.id === 4;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/Create.vue?vue&type=template&id=3867e3b7&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Roles/Create.vue?vue&type=template&id=3867e3b7& ***!
  \**********************************************************************************************************************************************************************************************************/
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
          _c("page-title", { attrs: { icon: "user-shield" } }, [
            _vm._v("Create Role")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("shared-form", { attrs: { form: _vm.form, submit: _vm.submit } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
    { staticClass: "roles-page" },
    [
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "div",
          { staticClass: "buttons" },
          [
            _c(
              "ui-button",
              {
                key: "go-back-btn",
                attrs: { to: { name: "roles" }, variant: "secondary" }
              },
              [_vm._v("Go Back")]
            ),
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
              name: "label",
              label: "Name",
              description: "What should this role be called?",
              autocomplete: "off",
              autofocus: "",
              required: "",
              "has-error": _vm.form.errors.has("label"),
              "error-message": _vm.form.errors.get("label"),
              readonly: _vm.isOwner
            },
            model: {
              value: _vm.form.label,
              callback: function($$v) {
                _vm.$set(_vm.form, "label", $$v)
              },
              expression: "form.label"
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

/***/ "./resources/js/pages/Roles/Create.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/Roles/Create.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_3867e3b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=3867e3b7& */ "./resources/js/pages/Roles/Create.vue?vue&type=template&id=3867e3b7&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/pages/Roles/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_3867e3b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_3867e3b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Roles/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Roles/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Roles/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Roles/Create.vue?vue&type=template&id=3867e3b7&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Roles/Create.vue?vue&type=template&id=3867e3b7& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_3867e3b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=3867e3b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/Create.vue?vue&type=template&id=3867e3b7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_3867e3b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_3867e3b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL0NyZWF0ZS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvQ3JlYXRlLnZ1ZT9iNDJmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaGFyZWRGb3JtLnZ1ZT81Y2MzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9taXhpbnMvcm9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL0NyZWF0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL0NyZWF0ZS52dWU/NDUwYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvQ3JlYXRlLnZ1ZT8xZjlkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hhcmVkRm9ybS52dWU/YTgxMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hhcmVkRm9ybS52dWU/OGYwZiJdLCJuYW1lcyI6WyJtZXRob2RzIiwiaXNBc3NpZ25hYmxlIiwibmFtZSIsIl8iLCJpbmNsdWRlcyIsImlzUmVtb3ZhYmxlIiwiaGFzUGVybWlzc2lvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUVBO0FBQ0EsNEJBREE7QUFHQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBSEE7QUFXQSxNQVhBLGtCQVdBO0FBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsdUJBRkE7QUFHQTtBQUhBLFNBSUEsSUFKQTtBQURBO0FB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QUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLHNQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvMTQuanM/aWQ9MjRjMWU5YzA0MGUwNzBjNzBiOTQiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8cGFnZS10aXRsZSBpY29uPVwidXNlci1zaGllbGRcIj5DcmVhdGUgUm9sZTwvcGFnZS10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHNoYXJlZC1mb3JtIDpmb3JtPVwiZm9ybVwiIDpzdWJtaXQ9XCJzdWJtaXRcIj48L3NoYXJlZC1mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Gb3JtJ1xuICAgIGltcG9ydCBTaGFyZWRGb3JtIGZyb20gJy4vU2hhcmVkRm9ybSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcGVybWlzc2lvbjogJ3JvbGVzLmNyZWF0ZScsXG5cbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6ICdDcmVhdGUgYSBSb2xlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogW11cbiAgICAgICAgICAgICAgICB9LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdzaGFyZWQtZm9ybSc6IFNoYXJlZEZvcm1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBvc3QoJy9hcGkvcm9sZXMnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnUm9sZSBzdWNjZXNzZnVsbHkgY3JlYXRlZCcsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL3JvbGVzJylcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJvbGVzLXBhZ2VcIj5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiBrZXk9XCJnby1iYWNrLWJ0blwiIDp0bz1cInsgbmFtZTogJ3JvbGVzJyB9XCIgdmFyaWFudD1cInNlY29uZGFyeVwiPkdvIEJhY2s8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtaWY9XCIhaXNPd25lclwiIGtleT1cInNhdmUtYnRuXCIgdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIiA6ZGlzYWJsZWQ9XCIhZm9ybS5oYXNDaGFuZ2VzXCI+U2F2ZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDx1aS1hbGVydCB2LWlmPVwiaXNPd25lclwiIGljb249XCJpbmZvLWNpcmNsZVwiIHZhcmlhbnQ9XCJpbmZvXCI+XG4gICAgICAgICAgICA8cD5Pd25lciByb2xlIGluZm9ybWF0aW9uIGFuZCBwZXJtaXNzaW9ucyBhcmUgbm90IGVkaXRhYmxlLjwvcD5cbiAgICAgICAgPC91aS1hbGVydD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiR2VuZXJhbCBJbmZvcm1hdGlvblwiIGRlc2NyaXB0aW9uPVwiR2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIHJvbGUgYW5kIHdoYXQgaXQgY2FuIG1hbmFnZS5cIj5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIGlkPVwicm9sZXMtbmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2hhdCBzaG91bGQgdGhpcyByb2xlIGJlIGNhbGxlZD9cIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdsYWJlbCcpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbGFiZWwnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubGFiZWxcIlxuICAgICAgICAgICAgICAgIDpyZWFkb25seT1cImlzT3duZXJcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS10ZXh0YXJlYS1ncm91cFxuICAgICAgICAgICAgICAgIGlkPVwicm9sZXMtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdkZXNjcmlwdGlvbicpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIDpyZWFkb25seT1cImlzT3duZXJcIlxuICAgICAgICAgICAgICAgIDpyb3dzPVwiMlwiPlxuICAgICAgICAgICAgPC91aS10ZXh0YXJlYS1ncm91cD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIlBlcm1pc3Npb25zXCIgZGVzY3JpcHRpb249XCJQZXJtaXNzaW9ucyBhbGxvdyB5b3UgdG8gcmVzdHJpY3Qgd2hpY2ggYXJlYXMgb2YgdGhlIGNvbnRyb2xlIHBhbmVsIHRoaXMgdXNlciBjYW4gYWNjZXNzLlwiIHYtaWY9XCJoYXNQZXJtaXNzaW9ucyhmb3JtLm5hbWUpXCI+XG4gICAgICAgICAgICA8dWktdGFibGUga2V5PVwicGVybWlzc2lvbnMtdGFibGVcIiByZWY9XCJwZXJtaXNzaW9uc1wiIGlkPVwicGVybWlzc2lvbnMtdGFibGVcIiBlbmRwb2ludD1cIi9kYXRhdGFibGUvcGVybWlzc2lvbnNcIiBzb3J0LWJ5PVwibmFtZVwiIG5vLWFjdGlvbnMgc2hvdy1wYWdlLXN0YXR1cz5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5hbWVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNvZGUgdi1pZj1cImlzT3duZXJcIj57eyB0YWJsZS5yZWNvcmQubmFtZSB9fTwvY29kZT5cblxuICAgICAgICAgICAgICAgICAgICA8dWktY2hlY2tib3ggdi1lbHNlIDppZD1cIidyb2xlcy1jaGVja2JveC0nICsgdGFibGUucmVjb3JkLm5hbWVcIiBuYW1lPVwicGVybWlzc2lvbnNcIiA6bmF0aXZlLXZhbHVlPVwidGFibGUucmVjb3JkLm5hbWVcIiB2LW1vZGVsPVwicGVybWlzc2lvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPnt7IHRhYmxlLnJlY29yZC5uYW1lIH19PC9jb2RlPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImRlc2NyaXB0aW9uXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHRhYmxlLnJlY29yZC5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC91aS10YWJsZT5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAgICAgbWl4aW5zOiBbXG4gICAgICAgICAgICByZXF1aXJlKCcuLi8uLi9taXhpbnMvcm9sZXMnKS5kZWZhdWx0XG4gICAgICAgIF0sXG5cbiAgICBcdHByb3BzOiB7XG5cdFx0XHRyb2xlOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0fSxcblxuICAgIFx0XHRmb3JtOiB7XG4gICAgXHRcdFx0dHlwZTogT2JqZWN0LFxuICAgIFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0fSxcblxuXHRcdFx0c3VibWl0OiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXHRcdH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtLnBlcm1pc3Npb25zXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wZXJtaXNzaW9ucyA9IHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNPd25lcigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb2xlLmlkICYmIHRoaXMucm9sZS5pZCA9PT0gNFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gdG9nZ2xlKG5hbWUsIGV2KSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgdG9rZW4gID0gXy5oZWFkKF8uc3BsaXQobmFtZSwgJy4nKSlcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBpdGVtcyAgPSB0aGlzLiRyZWZzLnBlcm1pc3Npb25zLnJlY29yZHNcblxuICAgICAgICAgICAgLy8gICAgIGlmIChldi50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgbWF0Y2hlcyA9IF8uZmlsdGVyKGl0ZW1zLCAoaXRlbSkgPT4gXy5zdGFydHNXaXRoKGl0ZW0ubmFtZSwgdG9rZW4pKVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbWF0Y2hlcyA9IF8ubWFwKG1hdGNoZXMsICAoaXRlbSkgPT4gaXRlbS5uYW1lKVxuXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBfLnVuaW9uKHRoaXMucGVybWlzc2lvbnMsIG1hdGNoZXMpXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IF8ucmVtb3ZlKHRoaXMucGVybWlzc2lvbnMsIChpdGVtKSA9PiAhIF8uc3RhcnRzV2l0aChpdGVtLCB0b2tlbikpXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJ1c2VyLXNoaWVsZFwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQ3JlYXRlIFJvbGVcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic2hhcmVkLWZvcm1cIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgc3VibWl0OiBfdm0uc3VibWl0IH0gfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInJvbGVzLXBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwicG9ydGFsXCIsIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZ28tYmFjay1idG5cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcInJvbGVzXCIgfSwgdmFyaWFudDogXCJzZWNvbmRhcnlcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAhX3ZtLmlzT3duZXJcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJzYXZlLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZm9ybS5oYXNDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmlzT3duZXJcbiAgICAgICAgPyBfYyhcInVpLWFsZXJ0XCIsIHsgYXR0cnM6IHsgaWNvbjogXCJpbmZvLWNpcmNsZVwiLCB2YXJpYW50OiBcImluZm9cIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIk93bmVyIHJvbGUgaW5mb3JtYXRpb24gYW5kIHBlcm1pc3Npb25zIGFyZSBub3QgZWRpdGFibGUuXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiR2VuZXJhbCBJbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiR2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIHJvbGUgYW5kIHdoYXQgaXQgY2FuIG1hbmFnZS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwicm9sZXMtbmFtZVwiLFxuICAgICAgICAgICAgICBuYW1lOiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiV2hhdCBzaG91bGQgdGhpcyByb2xlIGJlIGNhbGxlZD9cIixcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICBhdXRvZm9jdXM6IFwiXCIsXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibGFiZWxcIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwibGFiZWxcIiksXG4gICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0uaXNPd25lclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5sYWJlbCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImxhYmVsXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmxhYmVsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWktdGV4dGFyZWEtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwicm9sZXMtZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgcmVhZG9ubHk6IF92bS5pc093bmVyLFxuICAgICAgICAgICAgICByb3dzOiAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZGVzY3JpcHRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmhhc1Blcm1pc3Npb25zKF92bS5mb3JtLm5hbWUpXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBlcm1pc3Npb25zXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICBcIlBlcm1pc3Npb25zIGFsbG93IHlvdSB0byByZXN0cmljdCB3aGljaCBhcmVhcyBvZiB0aGUgY29udHJvbGUgcGFuZWwgdGhpcyB1c2VyIGNhbiBhY2Nlc3MuXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1aS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInBlcm1pc3Npb25zLXRhYmxlXCIsXG4gICAgICAgICAgICAgICAgcmVmOiBcInBlcm1pc3Npb25zXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcInBlcm1pc3Npb25zLXRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICBlbmRwb2ludDogXCIvZGF0YXRhYmxlL3Blcm1pc3Npb25zXCIsXG4gICAgICAgICAgICAgICAgICBcInNvcnQtYnlcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICBcIm5vLWFjdGlvbnNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIFwic2hvdy1wYWdlLXN0YXR1c1wiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc093bmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImNvZGVcIiwgW192bS5fdihfdm0uX3ModGFibGUucmVjb3JkLm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInJvbGVzLWNoZWNrYm94LVwiICsgdGFibGUucmVjb3JkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBlcm1pc3Npb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiB0YWJsZS5yZWNvcmQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wZXJtaXNzaW9ucyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGVybWlzc2lvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiY29kZVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3ModGFibGUucmVjb3JkLmRlc2NyaXB0aW9uKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIDgzOTE3MTQzMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnQgZGVmYXVsdCB7XG5cdG1ldGhvZHM6IHtcblx0XHRpc0Fzc2lnbmFibGUobmFtZSkge1xuXHRcdFx0cmV0dXJuICEgXy5pbmNsdWRlcyhbJ2d1ZXN0J10sIG5hbWUpXG5cdFx0fSxcblxuXHRcdGlzUmVtb3ZhYmxlKG5hbWUpIHtcblx0XHRcdHJldHVybiAhIF8uaW5jbHVkZXMoWydvd25lcicsICdhZG1pbicsICd1c2VyJywgJ2d1ZXN0J10sIG5hbWUpO1xuXHRcdH0sXG5cblx0XHRoYXNQZXJtaXNzaW9ucyhuYW1lKSB7XG5cdFx0XHRyZXR1cm4gISBfLmluY2x1ZGVzKFsnb3duZXInXSwgbmFtZSk7XG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4NjdlM2I3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM4NjdlM2I3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM4NjdlM2I3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM4NjdlM2I3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4NjdlM2I3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM4NjdlM2I3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvQ3JlYXRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NyZWF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzg2N2UzYjcmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4YTAzZDg0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjhhMDNkODQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjhhMDNkODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjhhMDNkODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4YTAzZDg0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI4YTAzZDg0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hhcmVkRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4YTAzZDg0JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==