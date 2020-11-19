(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_pages_Roles_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRole [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "getRole": () => /* binding */ getRole
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      permission: 'roles.view'
    };
  },
  head: {
    title: function title() {
      return {
        inner: this.role.name || 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      role: {}
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getRole(to.params.role, function (error, role) {
      if (error) {
        next(function (vm) {
          vm.$router.push('/roles');
          toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.role = role;
          vm.$emit('updateHead');
        });
      }
    });
  },
  computed: {
    endpoint: function endpoint() {
      if (this.role) {
        return '/datatable/users/' + this.role.name;
      }

      return '/datatable/users';
    },
    isOwner: function isOwner() {
      return this.role.id && this.role.id === 1;
    },
    isGuest: function isGuest() {
      return this.role.id && this.role.id === 2;
    },
    canEdit: function canEdit() {
      return this.$can('roles.update', this.role.level ? this.role.level : 0);
    }
  }
});
function getRole(id, callback) {
  axios.get('/api/roles/' + id).then(function (response) {
    var role = response.data.data;
    callback(null, role);
  })["catch"](function (error) {
    callback(new Error('The requested role could not be found'));
  });
}

/***/ }),

/***/ "./resources/js/pages/Roles/Show.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Roles/Show.vue ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRole [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js& .getRole */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRole": () => /* reexport safe */ _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.getRole,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_0a1461f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=0a1461f8& */ "./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Show_vue_vue_type_template_id_0a1461f8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_0a1461f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Roles/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRole [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js& .getRole */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "getRole": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.getRole
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8& ***!
  \**************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_0a1461f8___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_0a1461f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_0a1461f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=0a1461f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
          _c(
            "page-title",
            { attrs: { icon: "user-shield", subtitle: _vm.role.description } },
            [_vm._v("Role - " + _vm._s(_vm.role.name))]
          )
        ],
        1
      ),
      _vm._v(" "),
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
            _vm.canEdit
              ? _c(
                  "ui-button",
                  {
                    key: "edit-role-btn",
                    attrs: {
                      to: { name: "roles.edit", params: { role: _vm.role.id } },
                      variant: "primary"
                    }
                  },
                  [_vm._v("Edit Role")]
                )
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "sidebar-right" } },
        [
          _c(
            "sidebar",
            [
              _c("status-card", {
                attrs: {
                  id: "role_panel_status_card",
                  entry: _vm.role,
                  tabindex: "-1"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            id: "roles_panel_permissions",
            title: _vm.role.name + " Permissions",
            description: "Current permissions assigned to this role.",
            tabindex: "-1"
          }
        },
        [_c("p", [_vm._v("Permissions list coming soon...")])]
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            id: "roles_panel_users",
            grid: false,
            title: "Assigned Users",
            description: "Users currently assigned to this role.",
            tabindex: "-1"
          }
        },
        [
          _c("ui-table", {
            key: "role-" + _vm.role.name + "-table",
            staticClass: "user-table",
            attrs: {
              id: "users",
              endpoint: _vm.endpoint,
              "sort-by": "name",
              "no-search": _vm.isOwner,
              "no-actions": "",
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
                    _c(
                      "div",
                      { staticClass: "flex items-center" },
                      [
                        _c("ui-status", {
                          staticClass: "mr-2",
                          attrs: { value: table.record.status }
                        }),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "users.show",
                                params: { user: table.record.id }
                              }
                            }
                          },
                          [_vm._v(_vm._s(table.record.name))]
                        )
                      ],
                      1
                    )
                  ]
                }
              },
              {
                key: "email",
                fn: function(table) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(table.record.email) +
                        "\n            "
                    )
                  ]
                }
              },
              {
                key: "role",
                fn: function(table) {
                  return [
                    _c("ui-badge", [_vm._v(_vm._s(table.record.role.name))])
                  ]
                }
              },
              {
                key: "created_at",
                fn: function(table) {
                  return [
                    _c("ui-date", {
                      attrs: { timestamp: table.record.created_at }
                    })
                  ]
                }
              },
              {
                key: "email_verified_at",
                fn: function(table) {
                  return [
                    table.record.email_verified_at
                      ? _c("ui-badge", { attrs: { variant: "success" } }, [
                          _vm._v("Yes")
                        ])
                      : _c("ui-badge", { attrs: { variant: "danger" } }, [
                          _vm._v("No")
                        ])
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL1Nob3cudnVlIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hvdy52dWU/ZTRiNSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hvdy52dWU/NmNmZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FMQTtBQU9BO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FQQTtBQWVBLE1BZkEsa0JBZUE7QUFDQTtBQUNBO0FBREE7QUFHQSxHQW5CQTtBQXFCQSxrQkFyQkEsNEJBcUJBLEVBckJBLEVBcUJBLElBckJBLEVBcUJBLElBckJBLEVBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFNBSkE7QUFLQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBRUE7QUFDQSxTQUpBO0FBS0E7QUFDQSxLQWRBO0FBZUEsR0FyQ0E7QUF1Q0E7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FQQTtBQVNBLFdBVEEscUJBU0E7QUFDQTtBQUNBLEtBWEE7QUFhQSxXQWJBLHFCQWFBO0FBQ0E7QUFDQSxLQWZBO0FBaUJBLFdBakJBLHFCQWlCQTtBQUNBO0FBQ0E7QUFuQkE7QUF2Q0E7QUE4REE7QUFDQTtBQUNBO0FBRUE7QUFDQSxHQUpBLFdBSUE7QUFDQTtBQUNBLEdBTkE7QUFPQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySW1GO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNBLENBQWdHO0FBQ2hHLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLHVFQUFNO0FBQ1IsRUFBRSw0RUFBTTtBQUNSLEVBQUUscUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3FNLENBQUMsaUVBQWUsc01BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXhPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNEJBQTRCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxjQUFjLEVBQUU7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLHNEQUFzRCxFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLGdCQUFnQixFQUFFO0FBQy9DO0FBQ0E7QUFDQSxXQUFXLHlCQUF5QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTSxnQkFBZ0I7QUFDbEQsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhCQUE4QixvQkFBb0IsRUFBRTtBQUMvRTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLHNCQUFzQixFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUNBQW1DO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxTQUFTLHFCQUFxQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUyxvQkFBb0IsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL3Jlc291cmNlc19qc19wYWdlc19Sb2xlc19TaG93X3Z1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicm9sZXMtcGFnZVwiPlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxwYWdlLXRpdGxlIGljb249XCJ1c2VyLXNoaWVsZFwiIDpzdWJ0aXRsZT1cInJvbGUuZGVzY3JpcHRpb25cIj5Sb2xlIC0ge3sgcm9sZS5uYW1lIH19PC9wYWdlLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtaWY9XCIkbXEgIT0gJ3NtJ1wiIGtleT1cImdvLWJhY2stYnRuXCIgOnRvPVwieyBuYW1lOiAncm9sZXMnIH1cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+R28gQmFjazwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24gdi1pZj1cImNhbkVkaXRcIiBrZXk9XCJlZGl0LXJvbGUtYnRuXCIgOnRvPVwieyBuYW1lOiAncm9sZXMuZWRpdCcsIHBhcmFtczoge3JvbGU6IHJvbGUuaWR9IH1cIiB2YXJpYW50PVwicHJpbWFyeVwiPkVkaXQgUm9sZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJzaWRlYmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICA8c2lkZWJhcj5cbiAgICAgICAgICAgICAgICA8c3RhdHVzLWNhcmQgaWQ9XCJyb2xlX3BhbmVsX3N0YXR1c19jYXJkXCIgOmVudHJ5PVwicm9sZVwiIHRhYmluZGV4PVwiLTFcIj48L3N0YXR1cy1jYXJkPlxuICAgICAgICAgICAgPC9zaWRlYmFyPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIGlkPVwicm9sZXNfcGFuZWxfcGVybWlzc2lvbnNcIiA6dGl0bGU9XCJyb2xlLm5hbWUgKyAnIFBlcm1pc3Npb25zJ1wiIGRlc2NyaXB0aW9uPVwiQ3VycmVudCBwZXJtaXNzaW9ucyBhc3NpZ25lZCB0byB0aGlzIHJvbGUuXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgPCEtLSA8dWktdGFibGUgcmVmPVwicGVybWlzc2lvbnNcIiBpZD1cInBlcm1pc3Npb25zXCIgZW5kcG9pbnQ9XCIvZGF0YXRhYmxlL3Blcm1pc3Npb25zXCIgc29ydC1ieT1cIm5hbWVcIiBuby1hY3Rpb25zIGtleT1cInBlcm1pc3Npb25zLXRhYmxlXCIgc2hvdy1wYWdlLXN0YXR1cyBzaG93LXBhZ2UtbnVtYmVycyBzaG93LXBhZ2UtbmF2IHNob3ctcGFnZS1lbmRzPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibmFtZVwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Y29kZT57eyB0YWJsZS5yZWNvcmQubmFtZSB9fTwvY29kZT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJkZXNjcmlwdGlvblwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD57eyB0YWJsZS5yZWNvcmQuZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWktdGFibGU+IC0tPlxuICAgICAgICAgICAgPHA+UGVybWlzc2lvbnMgbGlzdCBjb21pbmcgc29vbi4uLjwvcD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCBpZD1cInJvbGVzX3BhbmVsX3VzZXJzXCIgOmdyaWQ9XCJmYWxzZVwiIHRpdGxlPVwiQXNzaWduZWQgVXNlcnNcIiBkZXNjcmlwdGlvbj1cIlVzZXJzIGN1cnJlbnRseSBhc3NpZ25lZCB0byB0aGlzIHJvbGUuXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgPHVpLXRhYmxlIDprZXk9XCIncm9sZS0nICsgcm9sZS5uYW1lICsgJy10YWJsZSdcIiBjbGFzcz1cInVzZXItdGFibGVcIiBpZD1cInVzZXJzXCIgOmVuZHBvaW50PVwiZW5kcG9pbnRcIiBzb3J0LWJ5PVwibmFtZVwiIDpuby1zZWFyY2g9XCJpc093bmVyXCIgbm8tYWN0aW9ucyBzaG93LXBhZ2Utc3RhdHVzIHNob3ctcGFnZS1udW1iZXJzIHNob3ctcGFnZS1uYXYgc2hvdy1wYWdlLWVuZHM+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuYW1lXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVpLXN0YXR1cyA6dmFsdWU9XCJ0YWJsZS5yZWNvcmQuc3RhdHVzXCIgY2xhc3M9XCJtci0yXCI+PC91aS1zdGF0dXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAndXNlcnMuc2hvdycsIHBhcmFtczoge3VzZXI6IHRhYmxlLnJlY29yZC5pZH0gfVwiPnt7IHRhYmxlLnJlY29yZC5uYW1lIH19PC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZW1haWxcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgdGFibGUucmVjb3JkLmVtYWlsIH19XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwicm9sZVwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktYmFkZ2U+e3sgdGFibGUucmVjb3JkLnJvbGUubmFtZSB9fTwvdWktYmFkZ2U+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiY3JlYXRlZF9hdFwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktZGF0ZSA6dGltZXN0YW1wPVwidGFibGUucmVjb3JkLmNyZWF0ZWRfYXRcIj48L3VpLWRhdGU+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZW1haWxfdmVyaWZpZWRfYXRcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWJhZGdlIHYtaWY9XCJ0YWJsZS5yZWNvcmQuZW1haWxfdmVyaWZpZWRfYXRcIiB2YXJpYW50PVwic3VjY2Vzc1wiPlllczwvdWktYmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1iYWRnZSB2LWVsc2UgdmFyaWFudD1cImRhbmdlclwiPk5vPC91aS1iYWRnZT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC91aS10YWJsZT5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgYXV0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbjogJ3JvbGVzLnZpZXcnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiB0aGlzLnJvbGUubmFtZSB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcm9sZToge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBnZXRSb2xlKHRvLnBhcmFtcy5yb2xlLCAoZXJyb3IsIHJvbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucHVzaCgnL3JvbGVzJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QoZXJyb3IudG9TdHJpbmcoKSwgJ2RhbmdlcicpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnJvbGUgPSByb2xlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRlbWl0KCd1cGRhdGVIZWFkJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBlbmRwb2ludCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb2xlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnL2RhdGF0YWJsZS91c2Vycy8nICsgdGhpcy5yb2xlLm5hbWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJy9kYXRhdGFibGUvdXNlcnMnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc093bmVyKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvbGUuaWQgJiYgdGhpcy5yb2xlLmlkID09PSAxXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc0d1ZXN0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvbGUuaWQgJiYgdGhpcy5yb2xlLmlkID09PSAyXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjYW5FZGl0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRjYW4oJ3JvbGVzLnVwZGF0ZScsIHRoaXMucm9sZS5sZXZlbCA/IHRoaXMucm9sZS5sZXZlbCA6IDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0Um9sZShpZCwgY2FsbGJhY2spIHtcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3JvbGVzLycgKyBpZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCByb2xlID0gcmVzcG9uc2UuZGF0YS5kYXRhXG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJvbGUpXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ1RoZSByZXF1ZXN0ZWQgcm9sZSBjb3VsZCBub3QgYmUgZm91bmQnKSlcbiAgICAgICAgfSlcbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhMTQ2MWY4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGExNDYxZjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGExNDYxZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGExNDYxZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhMTQ2MWY4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBhMTQ2MWY4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hvdy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInJvbGVzLXBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInBhZ2UtdGl0bGVcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgaWNvbjogXCJ1c2VyLXNoaWVsZFwiLCBzdWJ0aXRsZTogX3ZtLnJvbGUuZGVzY3JpcHRpb24gfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIlJvbGUgLSBcIiArIF92bS5fcyhfdm0ucm9sZS5uYW1lKSldXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicG9ydGFsXCIsIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLiRtcSAhPSBcInNtXCJcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJnby1iYWNrLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcInJvbGVzXCIgfSwgdmFyaWFudDogXCJzZWNvbmRhcnlcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5jYW5FZGl0XG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZWRpdC1yb2xlLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRvOiB7IG5hbWU6IFwicm9sZXMuZWRpdFwiLCBwYXJhbXM6IHsgcm9sZTogX3ZtLnJvbGUuaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRWRpdCBSb2xlXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJzaWRlYmFyLXJpZ2h0XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNpZGViYXJcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzdGF0dXMtY2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcInJvbGVfcGFuZWxfc3RhdHVzX2NhcmRcIixcbiAgICAgICAgICAgICAgICAgIGVudHJ5OiBfdm0ucm9sZSxcbiAgICAgICAgICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogXCJyb2xlc19wYW5lbF9wZXJtaXNzaW9uc1wiLFxuICAgICAgICAgICAgdGl0bGU6IF92bS5yb2xlLm5hbWUgKyBcIiBQZXJtaXNzaW9uc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBwZXJtaXNzaW9ucyBhc3NpZ25lZCB0byB0aGlzIHJvbGUuXCIsXG4gICAgICAgICAgICB0YWJpbmRleDogXCItMVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJwXCIsIFtfdm0uX3YoXCJQZXJtaXNzaW9ucyBsaXN0IGNvbWluZyBzb29uLi4uXCIpXSldXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcInJvbGVzX3BhbmVsX3VzZXJzXCIsXG4gICAgICAgICAgICBncmlkOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkFzc2lnbmVkIFVzZXJzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2VycyBjdXJyZW50bHkgYXNzaWduZWQgdG8gdGhpcyByb2xlLlwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktdGFibGVcIiwge1xuICAgICAgICAgICAga2V5OiBcInJvbGUtXCIgKyBfdm0ucm9sZS5uYW1lICsgXCItdGFibGVcIixcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVzZXItdGFibGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcInVzZXJzXCIsXG4gICAgICAgICAgICAgIGVuZHBvaW50OiBfdm0uZW5kcG9pbnQsXG4gICAgICAgICAgICAgIFwic29ydC1ieVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgXCJuby1zZWFyY2hcIjogX3ZtLmlzT3duZXIsXG4gICAgICAgICAgICAgIFwibm8tYWN0aW9uc1wiOiBcIlwiLFxuICAgICAgICAgICAgICBcInNob3ctcGFnZS1zdGF0dXNcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJzaG93LXBhZ2UtbnVtYmVyc1wiOiBcIlwiLFxuICAgICAgICAgICAgICBcInNob3ctcGFnZS1uYXZcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJzaG93LXBhZ2UtZW5kc1wiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInVpLXN0YXR1c1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IHRhYmxlLnJlY29yZC5zdGF0dXMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInVzZXJzLnNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IHVzZXI6IHRhYmxlLnJlY29yZC5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0YWJsZS5yZWNvcmQubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRhYmxlLnJlY29yZC5lbWFpbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInJvbGVcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidWktYmFkZ2VcIiwgW192bS5fdihfdm0uX3ModGFibGUucmVjb3JkLnJvbGUubmFtZSkpXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY3JlYXRlZF9hdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1kYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aW1lc3RhbXA6IHRhYmxlLnJlY29yZC5jcmVhdGVkX2F0IH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZW1haWxfdmVyaWZpZWRfYXRcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLnJlY29yZC5lbWFpbF92ZXJpZmllZF9hdFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ1aS1iYWRnZVwiLCB7IGF0dHJzOiB7IHZhcmlhbnQ6IFwic3VjY2Vzc1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJZZXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInVpLWJhZGdlXCIsIHsgYXR0cnM6IHsgdmFyaWFudDogXCJkYW5nZXJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTm9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=