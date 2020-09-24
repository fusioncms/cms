(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Roles/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default, getRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return getRole; });
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
  permission: 'roles.update',
  head: {
    title: function title() {
      return {
        inner: this.role.label || 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      role: {},
      form: new _services_Form__WEBPACK_IMPORTED_MODULE_0__["default"]()
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.patch("/api/roles/".concat(this.role.id)).then(function (response) {
        toast('Role successfully updated', 'success');

        _this.$router.push('/roles');
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getRole(to.params.role, function (error, role, fields) {
      if (error) {
        next(function (vm) {
          vm.$router.push('/roles');
          toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.role = role;
          vm.form = new _services_Form__WEBPACK_IMPORTED_MODULE_0__["default"](fields, true);
          vm.$emit('updateHead');
        });
      }
    });
  }
});
function getRole(id, callback) {
  axios.get('/api/roles/' + id).then(function (response) {
    var role = response.data.data;
    var fields = {
      label: role.label,
      description: role.description,
      permissions: role.permissions
    };
    callback(null, role, fields);
  })["catch"](function (error) {
    callback(new Error('The requested role could not be found'));
  });
}

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/Edit.vue?vue&type=template&id=7dc3a685&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Roles/Edit.vue?vue&type=template&id=7dc3a685& ***!
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
        [
          _c("page-title", { attrs: { icon: "user-shield" } }, [
            _vm._v("Edit Role")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("shared-form", {
        attrs: { form: _vm.form, role: _vm.role, submit: _vm.submit }
      })
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

/***/ "./resources/js/pages/Roles/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Roles/Edit.vue ***!
  \*******************************************/
/*! exports provided: getRole, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_7dc3a685___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=7dc3a685& */ "./resources/js/pages/Roles/Edit.vue?vue&type=template&id=7dc3a685&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/Roles/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getRole"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_7dc3a685___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_7dc3a685___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Roles/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Roles/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Roles/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default, getRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getRole"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Roles/Edit.vue?vue&type=template&id=7dc3a685&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Roles/Edit.vue?vue&type=template&id=7dc3a685& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_7dc3a685___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=7dc3a685& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/Edit.vue?vue&type=template&id=7dc3a685&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_7dc3a685___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_7dc3a685___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL0VkaXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hhcmVkRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL0VkaXQudnVlP2JhMzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL1NoYXJlZEZvcm0udnVlPzVjYzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9yb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL0VkaXQudnVlPzg3NjgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL0VkaXQudnVlPzU1ZDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL1NoYXJlZEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaGFyZWRGb3JtLnZ1ZT9hODEzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaGFyZWRGb3JtLnZ1ZT84ZjBmIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJpc0Fzc2lnbmFibGUiLCJuYW1lIiwiXyIsImluY2x1ZGVzIiwiaXNSZW1vdmFibGUiLCJoYXNQZXJtaXNzaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUVBO0FBQ0EsNEJBREE7QUFHQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBSEE7QUFXQSxNQVhBLGtCQVdBO0FBQ0E7QUFDQSxjQURBO0FBRUE7QUFGQTtBQUlBLEdBaEJBO0FBa0JBO0FBQ0E7QUFEQSxHQWxCQTtBQXNCQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FKQSxXQUlBO0FBQ0E7QUFDQSxPQU5BO0FBT0E7QUFUQSxHQXRCQTtBQWtDQSxrQkFsQ0EsNEJBa0NBLEVBbENBLEVBa0NBLElBbENBLEVBa0NBLElBbENBLEVBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFNBSkE7QUFLQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFNBTEE7QUFNQTtBQUNBLEtBZkE7QUFnQkE7QUFuREE7QUFzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLG1DQUZBO0FBR0E7QUFIQTtBQU1BO0FBQ0EsR0FUQSxXQVNBO0FBQ0E7QUFDQSxHQVhBO0FBWUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUEsV0FDQSwwRkFEQSxDQUZBO0FBTUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FOQTtBQVdBO0FBQ0E7QUFEQTtBQVhBLEdBTkE7QUFzQkE7QUFDQTtBQUNBLFNBREEsaUJBQ0E7QUFDQTtBQUNBLE9BSEE7QUFLQSxTQUxBLGVBS0EsS0FMQSxFQUtBO0FBQ0E7QUFDQTtBQVBBLEtBREE7QUFXQSxXQVhBLHFCQVdBO0FBQ0E7QUFDQTtBQWJBLEdBdEJBO0FBc0NBLFlBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBdENBLEc7Ozs7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDO0FBQ0EsNEJBQTRCLFNBQVMsc0JBQXNCLEVBQUU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0QkFBNEI7QUFDakM7QUFDQSxvQkFBb0IsU0FBUyxnQkFBZ0IsRUFBRTtBQUMvQztBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixNQUFNLGdCQUFnQjtBQUM5QyxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsU0FBUyx1Q0FBdUMsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0xBO0FBQWU7QUFDZEEsU0FBTyxFQUFFO0FBQ1JDLGdCQURRLHdCQUNLQyxJQURMLEVBQ1c7QUFDbEIsYUFBTyxDQUFFQyxDQUFDLENBQUNDLFFBQUYsQ0FBVyxDQUFDLE9BQUQsQ0FBWCxFQUFzQkYsSUFBdEIsQ0FBVDtBQUNBLEtBSE87QUFLUkcsZUFMUSx1QkFLSUgsSUFMSixFQUtVO0FBQ2pCLGFBQU8sQ0FBRUMsQ0FBQyxDQUFDQyxRQUFGLENBQVcsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixNQUFuQixFQUEyQixPQUEzQixDQUFYLEVBQWdERixJQUFoRCxDQUFUO0FBQ0EsS0FQTztBQVNSSSxrQkFUUSwwQkFTT0osSUFUUCxFQVNhO0FBQ3BCLGFBQU8sQ0FBRUMsQ0FBQyxDQUFDQyxRQUFGLENBQVcsQ0FBQyxPQUFELENBQVgsRUFBc0JGLElBQXRCLENBQVQ7QUFDQTtBQVhPO0FBREssQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUE7QUFBQTtBQUEwTCxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RjtBQUMzQjtBQUNMOzs7QUFHekQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHFGQUFNO0FBQ1IsRUFBRSw4RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBZ00sQ0FBZ0Isc1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy8xNS5qcz9pZD0xMGYzZjdmMzU4NzkwNDQ2MGQ5MiIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxwYWdlLXRpdGxlIGljb249XCJ1c2VyLXNoaWVsZFwiPkVkaXQgUm9sZTwvcGFnZS10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHNoYXJlZC1mb3JtIDpmb3JtPVwiZm9ybVwiIDpyb2xlPVwicm9sZVwiIDpzdWJtaXQ9XCJzdWJtaXRcIj48L3NoYXJlZC1mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Gb3JtJ1xuICAgIGltcG9ydCBTaGFyZWRGb3JtIGZyb20gJy4vU2hhcmVkRm9ybSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcGVybWlzc2lvbjogJ3JvbGVzLnVwZGF0ZScsXG5cbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6IHRoaXMucm9sZS5sYWJlbCB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcm9sZToge30sXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3NoYXJlZC1mb3JtJzogU2hhcmVkRm9ybVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucGF0Y2goYC9hcGkvcm9sZXMvJHt0aGlzLnJvbGUuaWR9YCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ1JvbGUgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQnLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9yb2xlcycpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2ZhaWxlZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgZ2V0Um9sZSh0by5wYXJhbXMucm9sZSwgKGVycm9yLCByb2xlLCBmaWVsZHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucHVzaCgnL3JvbGVzJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QoZXJyb3IudG9TdHJpbmcoKSwgJ2RhbmdlcicpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnJvbGUgPSByb2xlXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5mb3JtID0gbmV3IEZvcm0oZmllbGRzLCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0Um9sZShpZCwgY2FsbGJhY2spIHtcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3JvbGVzLycgKyBpZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCByb2xlID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgICBsZXQgZmllbGRzID0ge1xuICAgICAgICAgICAgICAgIGxhYmVsOiByb2xlLmxhYmVsLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByb2xlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zOiByb2xlLnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByb2xlLCBmaWVsZHMpXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ1RoZSByZXF1ZXN0ZWQgcm9sZSBjb3VsZCBub3QgYmUgZm91bmQnKSlcbiAgICAgICAgfSlcbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyb2xlcy1wYWdlXCI+XG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24ga2V5PVwiZ28tYmFjay1idG5cIiA6dG89XCJ7IG5hbWU6ICdyb2xlcycgfVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5HbyBCYWNrPC91aS1idXR0b24+XG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiB2LWlmPVwiIWlzT3duZXJcIiBrZXk9XCJzYXZlLWJ0blwiIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgOmRpc2FibGVkPVwiIWZvcm0uaGFzQ2hhbmdlc1wiPlNhdmU8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8dWktYWxlcnQgdi1pZj1cImlzT3duZXJcIiBpY29uPVwiaW5mby1jaXJjbGVcIiB2YXJpYW50PVwiaW5mb1wiPlxuICAgICAgICAgICAgPHA+T3duZXIgcm9sZSBpbmZvcm1hdGlvbiBhbmQgcGVybWlzc2lvbnMgYXJlIG5vdCBlZGl0YWJsZS48L3A+XG4gICAgICAgIDwvdWktYWxlcnQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIkdlbmVyYWwgSW5mb3JtYXRpb25cIiBkZXNjcmlwdGlvbj1cIkdlbmVyYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyByb2xlIGFuZCB3aGF0IGl0IGNhbiBtYW5hZ2UuXCI+XG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICBpZD1cInJvbGVzLW5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldoYXQgc2hvdWxkIHRoaXMgcm9sZSBiZSBjYWxsZWQ/XCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbGFiZWwnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2xhYmVsJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmxhYmVsXCJcbiAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJpc093bmVyXCI+XG4gICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuXG4gICAgICAgICAgICA8dWktdGV4dGFyZWEtZ3JvdXBcbiAgICAgICAgICAgICAgICBpZD1cInJvbGVzLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2Rlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJpc093bmVyXCJcbiAgICAgICAgICAgICAgICA6cm93cz1cIjJcIj5cbiAgICAgICAgICAgIDwvdWktdGV4dGFyZWEtZ3JvdXA+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJQZXJtaXNzaW9uc1wiIGRlc2NyaXB0aW9uPVwiUGVybWlzc2lvbnMgYWxsb3cgeW91IHRvIHJlc3RyaWN0IHdoaWNoIGFyZWFzIG9mIHRoZSBjb250cm9sZSBwYW5lbCB0aGlzIHVzZXIgY2FuIGFjY2Vzcy5cIiB2LWlmPVwiaGFzUGVybWlzc2lvbnMoZm9ybS5uYW1lKVwiPlxuICAgICAgICAgICAgPHVpLXRhYmxlIGtleT1cInBlcm1pc3Npb25zLXRhYmxlXCIgcmVmPVwicGVybWlzc2lvbnNcIiBpZD1cInBlcm1pc3Npb25zLXRhYmxlXCIgZW5kcG9pbnQ9XCIvZGF0YXRhYmxlL3Blcm1pc3Npb25zXCIgc29ydC1ieT1cIm5hbWVcIiBuby1hY3Rpb25zIHNob3ctcGFnZS1zdGF0dXM+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuYW1lXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjb2RlIHYtaWY9XCJpc093bmVyXCI+e3sgdGFibGUucmVjb3JkLm5hbWUgfX08L2NvZGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWNoZWNrYm94IHYtZWxzZSA6aWQ9XCIncm9sZXMtY2hlY2tib3gtJyArIHRhYmxlLnJlY29yZC5uYW1lXCIgbmFtZT1cInBlcm1pc3Npb25zXCIgOm5hdGl2ZS12YWx1ZT1cInRhYmxlLnJlY29yZC5uYW1lXCIgdi1tb2RlbD1cInBlcm1pc3Npb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57eyB0YWJsZS5yZWNvcmQubmFtZSB9fTwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgPC91aS1jaGVja2JveD5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJkZXNjcmlwdGlvblwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD57eyB0YWJsZS5yZWNvcmQuZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWktdGFibGU+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgICAgIG1peGluczogW1xuICAgICAgICAgICAgcmVxdWlyZSgnLi4vLi4vbWl4aW5zL3JvbGVzJykuZGVmYXVsdFxuICAgICAgICBdLFxuXG4gICAgXHRwcm9wczoge1xuXHRcdFx0cm9sZToge1xuXHRcdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdH0sXG5cbiAgICBcdFx0Zm9ybToge1xuICAgIFx0XHRcdHR5cGU6IE9iamVjdCxcbiAgICBcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdH0sXG5cblx0XHRcdHN1Ym1pdDoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblx0XHR9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBwZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybS5wZXJtaXNzaW9uc1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucGVybWlzc2lvbnMgPSB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzT3duZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9sZS5pZCAmJiB0aGlzLnJvbGUuaWQgPT09IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHRvZ2dsZShuYW1lLCBldikge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHRva2VuICA9IF8uaGVhZChfLnNwbGl0KG5hbWUsICcuJykpXG4gICAgICAgICAgICAvLyAgICAgY29uc3QgaXRlbXMgID0gdGhpcy4kcmVmcy5wZXJtaXNzaW9ucy5yZWNvcmRzXG5cbiAgICAgICAgICAgIC8vICAgICBpZiAoZXYudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IG1hdGNoZXMgPSBfLmZpbHRlcihpdGVtcywgKGl0ZW0pID0+IF8uc3RhcnRzV2l0aChpdGVtLm5hbWUsIHRva2VuKSlcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG1hdGNoZXMgPSBfLm1hcChtYXRjaGVzLCAgKGl0ZW0pID0+IGl0ZW0ubmFtZSlcblxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gXy51bmlvbih0aGlzLnBlcm1pc3Npb25zLCBtYXRjaGVzKVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBfLnJlbW92ZSh0aGlzLnBlcm1pc3Npb25zLCAoaXRlbSkgPT4gISBfLnN0YXJ0c1dpdGgoaXRlbSwgdG9rZW4pKVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicGFnZS10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwidXNlci1zaGllbGRcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkVkaXQgUm9sZVwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzaGFyZWQtZm9ybVwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCByb2xlOiBfdm0ucm9sZSwgc3VibWl0OiBfdm0uc3VibWl0IH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJyb2xlcy1wYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImdvLWJhY2stYnRuXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJyb2xlc1wiIH0sIHZhcmlhbnQ6IFwic2Vjb25kYXJ5XCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgIV92bS5pc093bmVyXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwic2F2ZS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmZvcm0uaGFzQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pc093bmVyXG4gICAgICAgID8gX2MoXCJ1aS1hbGVydFwiLCB7IGF0dHJzOiB7IGljb246IFwiaW5mby1jaXJjbGVcIiwgdmFyaWFudDogXCJpbmZvXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJPd25lciByb2xlIGluZm9ybWF0aW9uIGFuZCBwZXJtaXNzaW9ucyBhcmUgbm90IGVkaXRhYmxlLlwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkdlbmVyYWwgSW5mb3JtYXRpb25cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICBcIkdlbmVyYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyByb2xlIGFuZCB3aGF0IGl0IGNhbiBtYW5hZ2UuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcInJvbGVzLW5hbWVcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJsYWJlbFwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIldoYXQgc2hvdWxkIHRoaXMgcm9sZSBiZSBjYWxsZWQ/XCIsXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgYXV0b2ZvY3VzOiBcIlwiLFxuICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImxhYmVsXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImxhYmVsXCIpLFxuICAgICAgICAgICAgICByZWFkb25seTogX3ZtLmlzT3duZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubGFiZWwsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJsYWJlbFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5sYWJlbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVpLXRleHRhcmVhLWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcInJvbGVzLWRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiZGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0uaXNPd25lcixcbiAgICAgICAgICAgICAgcm93czogMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRlc2NyaXB0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5oYXNQZXJtaXNzaW9ucyhfdm0uZm9ybS5uYW1lKVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJQZXJtaXNzaW9uc1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgXCJQZXJtaXNzaW9ucyBhbGxvdyB5b3UgdG8gcmVzdHJpY3Qgd2hpY2ggYXJlYXMgb2YgdGhlIGNvbnRyb2xlIHBhbmVsIHRoaXMgdXNlciBjYW4gYWNjZXNzLlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidWktdGFibGVcIiwge1xuICAgICAgICAgICAgICAgIGtleTogXCJwZXJtaXNzaW9ucy10YWJsZVwiLFxuICAgICAgICAgICAgICAgIHJlZjogXCJwZXJtaXNzaW9uc1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJwZXJtaXNzaW9ucy10YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL2RhdGF0YWJsZS9wZXJtaXNzaW9uc1wiLFxuICAgICAgICAgICAgICAgICAgXCJzb3J0LWJ5XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgXCJuby1hY3Rpb25zXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBcInNob3ctcGFnZS1zdGF0dXNcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNPd25lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJjb2RlXCIsIFtfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWktY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJyb2xlcy1jaGVja2JveC1cIiArIHRhYmxlLnJlY29yZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwZXJtaXNzaW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogdGFibGUucmVjb3JkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGVybWlzc2lvbnMgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBlcm1pc3Npb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImNvZGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0YWJsZS5yZWNvcmQubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC5kZXNjcmlwdGlvbikpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICA4MzkxNzE0MzFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRtZXRob2RzOiB7XG5cdFx0aXNBc3NpZ25hYmxlKG5hbWUpIHtcblx0XHRcdHJldHVybiAhIF8uaW5jbHVkZXMoWydndWVzdCddLCBuYW1lKVxuXHRcdH0sXG5cblx0XHRpc1JlbW92YWJsZShuYW1lKSB7XG5cdFx0XHRyZXR1cm4gISBfLmluY2x1ZGVzKFsnb3duZXInLCAnYWRtaW4nLCAndXNlcicsICdndWVzdCddLCBuYW1lKTtcblx0XHR9LFxuXG5cdFx0aGFzUGVybWlzc2lvbnMobmFtZSkge1xuXHRcdFx0cmV0dXJuICEgXy5pbmNsdWRlcyhbJ293bmVyJ10sIG5hbWUpO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2RjM2E2ODUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ZGMzYTY4NScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ZGMzYTY4NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ZGMzYTY4NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2RjM2E2ODUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2RjM2E2ODUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9FZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2RjM2E2ODUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4YTAzZDg0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjhhMDNkODQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjhhMDNkODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjhhMDNkODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4YTAzZDg0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI4YTAzZDg0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hhcmVkRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4YTAzZDg0JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==