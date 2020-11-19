(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_pages_Roles_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRoles [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "getRoles": () => /* binding */ getRoles
/* harmony export */ });
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  auth: function auth() {
    return {
      permission: 'roles.viewAny'
    };
  },
  head: {
    title: function title() {
      return {
        inner: 'Roles'
      };
    }
  },
  mixins: [__webpack_require__(/*! ../../mixins/roles */ "./resources/js/mixins/roles.js").default],
  data: function data() {
    return {
      endpoint: '/datatable/roles',
      showDeleteModal: false,
      transfer: '',
      roles: []
    };
  },
  methods: {
    roleOptions: function roleOptions(currentRole) {
      var roles = lodash__WEBPACK_IMPORTED_MODULE_0___default().filter(this.roles, function (role) {
        return currentRole != role.handle;
      });

      return lodash__WEBPACK_IMPORTED_MODULE_0___default().map(roles, function (role) {
        return {
          label: role.name,
          value: role.handle
        };
      });
    },
    destroy: function destroy(id) {
      var _this = this;

      axios["delete"]('/api/roles/' + id, {
        data: {
          transfer: this.transfer
        }
      }).then(function (response) {
        _this.transfer = '';
        _this.showDeleteModal = false;
        toast('Role successfully deleted.', 'success');
        bus().$emit('refresh-datatable-roles');
      });
    },
    cancelDestroy: function cancelDestroy() {
      this.showDeleteModal = false;
      this.transfer = '';
    },
    isOwner: function isOwner(id) {
      return id && id === 1;
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getRoles(function (error, roles) {
      if (error) {
        next(function (vm) {
          toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.roles = roles;
        });
      }
    });
  }
});
function getRoles(callback) {
  axios.all([axios.get('/api/roles')]).then(axios.spread(function (roles) {
    roles = roles.data.data;
    callback(null, roles);
  }));
}

/***/ }),

/***/ "./resources/js/mixins/roles.js":
/*!**************************************!*\
  !*** ./resources/js/mixins/roles.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ "./resources/js/pages/Roles/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/Roles/Index.vue ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRoles [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Index.vue?vue&type=script&lang=js& .getRoles */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoles": () => /* reexport safe */ _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.getRoles,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_7c68e3e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7c68e3e7& */ "./resources/js/pages/Roles/Index.vue?vue&type=template&id=7c68e3e7&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Roles/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_7c68e3e7___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_7c68e3e7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Roles/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Roles/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Roles/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRoles [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Index.vue?vue&type=script&lang=js& .getRoles */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "getRoles": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.getRoles
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Roles/Index.vue?vue&type=template&id=7c68e3e7&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Roles/Index.vue?vue&type=template&id=7c68e3e7& ***!
  \***************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Index.vue?vue&type=template&id=7c68e3e7& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Index.vue?vue&type=template&id=7c68e3e7& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7c68e3e7___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7c68e3e7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7c68e3e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=7c68e3e7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Index.vue?vue&type=template&id=7c68e3e7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Index.vue?vue&type=template&id=7c68e3e7&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Index.vue?vue&type=template&id=7c68e3e7& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "roles-page" },
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("page-title", { attrs: { icon: "user-shield" } }, [
            _vm._v("Roles")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _vm.$can("roles.create")
            ? _c(
                "ui-button",
                {
                  key: "create-role-btn",
                  attrs: { to: { name: "roles.create" }, variant: "primary" }
                },
                [_vm._v("Create Role")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "ui-card",
        [
          _c(
            "ui-card-body",
            [
              _c("ui-table", {
                key: "roles",
                staticClass: "roles-table",
                attrs: {
                  id: "roles",
                  endpoint: _vm.endpoint,
                  "sort-by": "level",
                  "show-page-status": "",
                  "show-page-numbers": "",
                  "show-page-nav": "",
                  "show-page-ends": ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "name",
                    fn: function(table) {
                      return [
                        _vm.$can("roles.view")
                          ? _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "roles.show",
                                    params: { role: table.record.id }
                                  }
                                }
                              },
                              [_vm._v(_vm._s(table.record.name))]
                            )
                          : _c("span", [_vm._v(_vm._s(table.record.name))])
                      ]
                    }
                  },
                  {
                    key: "level",
                    fn: function(table) {
                      return [
                        _c("ui-badge", [_vm._v(_vm._s(table.record.level))])
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
                          "ui-table-actions",
                          {
                            key: "role_" + table.record.id + "_actions",
                            attrs: {
                              id: "role_" + table.record.id + "_actions"
                            }
                          },
                          [
                            _vm.$can("roles.view")
                              ? _c(
                                  "ui-dropdown-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "roles.show",
                                        params: { role: table.record.id }
                                      }
                                    }
                                  },
                                  [_vm._v("View")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.isOwner(table.record.id) &&
                            _vm.$can("roles.update", table.record.level)
                              ? _c(
                                  "ui-dropdown-link",
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
                                  [_vm._v("Edit")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isRemovable(table.record.name) &&
                            _vm.$can("roles.delete", table.record.level)
                              ? _c("ui-dropdown-divider")
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isRemovable(table.record.name) &&
                            _vm.$can("roles.delete", table.record.level)
                              ? _c(
                                  "ui-dropdown-link",
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
                                    attrs: { classes: "danger" },
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c("ui-modal", {
            attrs: {
              name: "delete-role",
              title: "Delete Role",
              "no-close-button": "",
              "no-esc-close": ""
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(role) {
                  return [
                    _c("p", [
                      _vm._v("Please select another role to move users to.")
                    ]),
                    _vm._v(" "),
                    role.data
                      ? _c("ui-select-group", {
                          attrs: {
                            id: "move-role",
                            name: "move_role",
                            label: "Transfer to Role",
                            options: _vm.roleOptions(role.data.handle),
                            autocomplete: "off"
                          },
                          model: {
                            value: _vm.transfer,
                            callback: function($$v) {
                              _vm.transfer = $$v
                            },
                            expression: "transfer"
                          }
                        })
                      : _vm._e()
                  ]
                }
              },
              {
                key: "footer",
                fn: function(role) {
                  return [
                    _c(
                      "ui-button",
                      {
                        staticClass: "ml-3",
                        attrs: {
                          variant: "danger",
                          disabled: _vm.transfer.length == 0
                        },
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
                      "ui-button",
                      {
                        attrs: { variant: "secondary" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.cancelDestroy($event)
                          }
                        }
                      },
                      [_vm._v("Cancel")]
                    )
                  ]
                }
              }
            ]),
            model: {
              value: _vm.showDeleteModal,
              callback: function($$v) {
                _vm.showDeleteModal = $$v
              },
              expression: "showDeleteModal"
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvbWl4aW5zL3JvbGVzLmpzIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9JbmRleC52dWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL0luZGV4LnZ1ZT9hYTJiIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9JbmRleC52dWU/NDVjNiJdLCJuYW1lcyI6WyJtZXRob2RzIiwiaXNBc3NpZ25hYmxlIiwibmFtZSIsImxldmVsIiwiXyIsImluY2x1ZGVzIiwiJGxldmVsIiwiaXNSZW1vdmFibGUiLCJoYXNQZXJtaXNzaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RUE7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQUxBO0FBT0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQVBBO0FBZUEsV0FDQSx1RkFEQSxDQWZBO0FBbUJBLE1BbkJBLGtCQW1CQTtBQUNBO0FBQ0Esa0NBREE7QUFFQSw0QkFGQTtBQUdBLGtCQUhBO0FBSUE7QUFKQTtBQU1BLEdBMUJBO0FBNEJBO0FBQ0EsZUFEQSx1QkFDQSxXQURBLEVBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFGQTtBQUlBLE9BTEE7QUFNQSxLQVZBO0FBWUEsV0FaQSxtQkFZQSxFQVpBLEVBWUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBLFNBRUEsSUFGQSxD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVCQUF1QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX3BhZ2VzX1JvbGVzX0luZGV4X3Z1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicm9sZXMtcGFnZVwiPlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxwYWdlLXRpdGxlIGljb249XCJ1c2VyLXNoaWVsZFwiPlJvbGVzPC9wYWdlLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHVpLWJ1dHRvbiBrZXk9XCJjcmVhdGUtcm9sZS1idG5cIiA6dG89XCJ7IG5hbWU6ICdyb2xlcy5jcmVhdGUnIH1cIiB2YXJpYW50PVwicHJpbWFyeVwiIHYtaWY9XCIkY2FuKCdyb2xlcy5jcmVhdGUnKVwiPkNyZWF0ZSBSb2xlPC91aS1idXR0b24+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDx1aS1jYXJkPlxuICAgICAgICAgICAgPHVpLWNhcmQtYm9keT5cbiAgICAgICAgICAgICAgICA8dWktdGFibGUga2V5PVwicm9sZXNcIiBjbGFzcz1cInJvbGVzLXRhYmxlXCIgaWQ9XCJyb2xlc1wiIDplbmRwb2ludD1cImVuZHBvaW50XCIgc29ydC1ieT1cImxldmVsXCIgc2hvdy1wYWdlLXN0YXR1cyBzaG93LXBhZ2UtbnVtYmVycyBzaG93LXBhZ2UtbmF2IHNob3ctcGFnZS1lbmRzPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5hbWVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdyb2xlcy5zaG93JywgcGFyYW1zOiB7cm9sZTogdGFibGUucmVjb3JkLmlkfSB9XCIgdi1pZj1cIiRjYW4oJ3JvbGVzLnZpZXcnKVwiPnt7IHRhYmxlLnJlY29yZC5uYW1lIH19PC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT57eyB0YWJsZS5yZWNvcmQubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImxldmVsXCIgc2xvdC1zY29wZT1cInRhYmxlXCIgY2xhc3M9XCJ3LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWktYmFkZ2U+e3sgdGFibGUucmVjb3JkLmxldmVsIH19PC91aS1iYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImRlc2NyaXB0aW9uXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZ3JheS04MDAgdGV4dC1zbVwiPnt7IHRhYmxlLnJlY29yZC5kZXNjcmlwdGlvbiB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImFjdGlvbnNcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1aS10YWJsZS1hY3Rpb25zIDppZD1cIidyb2xlXycgKyB0YWJsZS5yZWNvcmQuaWQgKyAnX2FjdGlvbnMnXCIgOmtleT1cIidyb2xlXycgKyB0YWJsZS5yZWNvcmQuaWQgKyAnX2FjdGlvbnMnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVpLWRyb3Bkb3duLWxpbmsgOnRvPVwieyBuYW1lOiAncm9sZXMuc2hvdycsIHBhcmFtczoge3JvbGU6IHRhYmxlLnJlY29yZC5pZH0gfVwiIHYtaWY9XCIkY2FuKCdyb2xlcy52aWV3JylcIj5WaWV3PC91aS1kcm9wZG93bi1saW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVpLWRyb3Bkb3duLWxpbmsgdi1pZj1cIiEgaXNPd25lcih0YWJsZS5yZWNvcmQuaWQpICYmICRjYW4oJ3JvbGVzLnVwZGF0ZScsIHRhYmxlLnJlY29yZC5sZXZlbClcIiBAY2xpY2sucHJldmVudCA6dG89XCJ7IG5hbWU6ICdyb2xlcy5lZGl0JywgcGFyYW1zOiB7cm9sZTogdGFibGUucmVjb3JkLmlkfSB9XCI+RWRpdDwvdWktZHJvcGRvd24tbGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1aS1kcm9wZG93bi1kaXZpZGVyIHYtaWY9XCJpc1JlbW92YWJsZSh0YWJsZS5yZWNvcmQubmFtZSkgJiYgJGNhbigncm9sZXMuZGVsZXRlJywgdGFibGUucmVjb3JkLmxldmVsKVwiPjwvdWktZHJvcGRvd24tZGl2aWRlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1aS1kcm9wZG93bi1saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpc1JlbW92YWJsZSh0YWJsZS5yZWNvcmQubmFtZSkgJiYgJGNhbigncm9sZXMuZGVsZXRlJywgdGFibGUucmVjb3JkLmxldmVsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50IHYtbW9kYWw6ZGVsZXRlLXJvbGU9XCJ0YWJsZS5yZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwiZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWktZHJvcGRvd24tbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWktdGFibGUtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3VpLXRhYmxlPlxuICAgICAgICAgICAgPC91aS1jYXJkLWJvZHk+XG4gICAgICAgIDwvdWktY2FyZD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwibW9kYWxzXCI+XG4gICAgICAgICAgICA8dWktbW9kYWwgbmFtZT1cImRlbGV0ZS1yb2xlXCIgdGl0bGU9XCJEZWxldGUgUm9sZVwiIHYtbW9kZWw9XCJzaG93RGVsZXRlTW9kYWxcIiBuby1jbG9zZS1idXR0b24gbm8tZXNjLWNsb3NlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwicm9sZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5QbGVhc2Ugc2VsZWN0IGFub3RoZXIgcm9sZSB0byBtb3ZlIHVzZXJzIHRvLjwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8dWktc2VsZWN0LWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicm9sZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibW92ZS1yb2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb3ZlX3JvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUcmFuc2ZlciB0byBSb2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwicm9sZU9wdGlvbnMocm9sZS5kYXRhLmhhbmRsZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0cmFuc2ZlclwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLXNlbGVjdC1ncm91cD5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIiBzbG90LXNjb3BlPVwicm9sZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktYnV0dG9uIEBjbGljaz1cImRlc3Ryb3kocm9sZS5kYXRhLmlkKVwiIHZhcmlhbnQ9XCJkYW5nZXJcIiBjbGFzcz1cIm1sLTNcIiA6ZGlzYWJsZWQ9XCJ0cmFuc2Zlci5sZW5ndGggPT0gMFwiPkRlbGV0ZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8dWktYnV0dG9uIEBjbGljay5wcmV2ZW50PVwiY2FuY2VsRGVzdHJveVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5DYW5jZWw8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC91aS1tb2RhbD5cbiAgICAgICAgPC9wb3J0YWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgYXV0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbjogJ3JvbGVzLnZpZXdBbnknLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiAnUm9sZXMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1peGluczogW1xuICAgICAgICAgICAgcmVxdWlyZSgnLi4vLi4vbWl4aW5zL3JvbGVzJykuZGVmYXVsdFxuICAgICAgICBdLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnL2RhdGF0YWJsZS9yb2xlcycsXG4gICAgICAgICAgICAgICAgc2hvd0RlbGV0ZU1vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogJycsXG4gICAgICAgICAgICAgICAgcm9sZXM6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHJvbGVPcHRpb25zKGN1cnJlbnRSb2xlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm9sZXMgPSBfLmZpbHRlcih0aGlzLnJvbGVzLCAocm9sZSkgPT4gY3VycmVudFJvbGUgIT0gcm9sZS5oYW5kbGUpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gXy5tYXAocm9sZXMsIChyb2xlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogcm9sZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvbGUuaGFuZGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZGVzdHJveShpZCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSgnL2FwaS9yb2xlcy8nICsgaWQsIHtkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZmVyOiB0aGlzLnRyYW5zZmVyXG4gICAgICAgICAgICAgICAgfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXIgPSAnJ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dEZWxldGVNb2RhbCA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ1JvbGUgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQuJywgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1cygpLiRlbWl0KCdyZWZyZXNoLWRhdGF0YWJsZS1yb2xlcycpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNhbmNlbERlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGVsZXRlTW9kYWwgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXIgPSAnJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNPd25lcihpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpZCAmJiBpZCA9PT0gMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGdldFJvbGVzKChlcnJvciwgcm9sZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnRvU3RyaW5nKCksICdkYW5nZXInKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5yb2xlcyA9IHJvbGVzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0Um9sZXMoY2FsbGJhY2spIHtcbiAgICAgICAgYXhpb3MuYWxsKFtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9yb2xlcycpLFxuICAgICAgICBdKVxuICAgICAgICAudGhlbihheGlvcy5zcHJlYWQoKHJvbGVzKSA9PiB7XG4gICAgICAgICAgICByb2xlcyA9IHJvbGVzLmRhdGEuZGF0YVxuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByb2xlcylcbiAgICAgICAgfSkpXG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdG1ldGhvZHM6IHtcblx0XHRpc0Fzc2lnbmFibGUobmFtZSwgbGV2ZWwpIHtcblx0XHRcdHJldHVybiAhIF8uaW5jbHVkZXMoWydndWVzdCddLCBuYW1lKSAmJiB0aGlzLiRsZXZlbChsZXZlbClcblx0XHR9LFxuXG5cdFx0aXNSZW1vdmFibGUobmFtZSwgbGV2ZWwpIHtcblx0XHRcdHJldHVybiAhXy5pbmNsdWRlcyhbJ293bmVyJywgJ3VzZXInLCAnZ3Vlc3QnXSwgbmFtZSkgJiYgdGhpcy4kbGV2ZWwobGV2ZWwpXG5cdFx0fSxcblxuXHRcdGhhc1Blcm1pc3Npb25zKG5hbWUpIHtcblx0XHRcdHJldHVybiAhIF8uaW5jbHVkZXMoWydvd25lciddLCBuYW1lKTtcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YzY4ZTNlNyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2M2OGUzZTcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2M2OGUzZTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2M2OGUzZTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YzY4ZTNlNyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YzY4ZTNlNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL0luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJyb2xlcy1wYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicGFnZS10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwidXNlci1zaGllbGRcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlJvbGVzXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLiRjYW4oXCJyb2xlcy5jcmVhdGVcIilcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiY3JlYXRlLXJvbGUtYnRuXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcInJvbGVzLmNyZWF0ZVwiIH0sIHZhcmlhbnQ6IFwicHJpbWFyeVwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDcmVhdGUgUm9sZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInVpLWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1aS1jYXJkLWJvZHlcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1aS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInJvbGVzXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm9sZXMtdGFibGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwicm9sZXNcIixcbiAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiBfdm0uZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICBcInNvcnQtYnlcIjogXCJsZXZlbFwiLFxuICAgICAgICAgICAgICAgICAgXCJzaG93LXBhZ2Utc3RhdHVzXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBcInNob3ctcGFnZS1udW1iZXJzXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBcInNob3ctcGFnZS1uYXZcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIFwic2hvdy1wYWdlLWVuZHNcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGNhbihcInJvbGVzLnZpZXdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyb2xlcy5zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgcm9sZTogdGFibGUucmVjb3JkLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0YWJsZS5yZWNvcmQubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3ModGFibGUucmVjb3JkLm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGV2ZWxcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWktYmFkZ2VcIiwgW192bS5fdihfdm0uX3ModGFibGUucmVjb3JkLmxldmVsKSldKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyYXktODAwIHRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGFibGUucmVjb3JkLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWktdGFibGUtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInJvbGVfXCIgKyB0YWJsZS5yZWNvcmQuaWQgKyBcIl9hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInJvbGVfXCIgKyB0YWJsZS5yZWNvcmQuaWQgKyBcIl9hY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGNhbihcInJvbGVzLnZpZXdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1kcm9wZG93bi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJvbGVzLnNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgcm9sZTogdGFibGUucmVjb3JkLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlZpZXdcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmlzT3duZXIodGFibGUucmVjb3JkLmlkKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kY2FuKFwicm9sZXMudXBkYXRlXCIsIHRhYmxlLnJlY29yZC5sZXZlbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1kcm9wZG93bi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJvbGVzLmVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgcm9sZTogdGFibGUucmVjb3JkLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRWRpdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1JlbW92YWJsZSh0YWJsZS5yZWNvcmQubmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGNhbihcInJvbGVzLmRlbGV0ZVwiLCB0YWJsZS5yZWNvcmQubGV2ZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidWktZHJvcGRvd24tZGl2aWRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1JlbW92YWJsZSh0YWJsZS5yZWNvcmQubmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGNhbihcInJvbGVzLmRlbGV0ZVwiLCB0YWJsZS5yZWNvcmQubGV2ZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWktZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlLXJvbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGFibGUucmVjb3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFibGUucmVjb3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZS1yb2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNsYXNzZXM6IFwiZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwibW9kYWxzXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ1aS1tb2RhbFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcImRlbGV0ZS1yb2xlXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkRlbGV0ZSBSb2xlXCIsXG4gICAgICAgICAgICAgIFwibm8tY2xvc2UtYnV0dG9uXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwibm8tZXNjLWNsb3NlXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJvbGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUGxlYXNlIHNlbGVjdCBhbm90aGVyIHJvbGUgdG8gbW92ZSB1c2VycyB0by5cIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIHJvbGUuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ1aS1zZWxlY3QtZ3JvdXBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm1vdmUtcm9sZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW92ZV9yb2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVHJhbnNmZXIgdG8gUm9sZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5yb2xlT3B0aW9ucyhyb2xlLmRhdGEuaGFuZGxlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRyYW5zZmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50cmFuc2ZlciA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJmb290ZXJcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocm9sZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLnRyYW5zZmVyLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVzdHJveShyb2xlLmRhdGEuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZWxldGVcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJzZWNvbmRhcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYW5jZWxEZXN0cm95KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dEZWxldGVNb2RhbCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5zaG93RGVsZXRlTW9kYWwgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93RGVsZXRlTW9kYWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=