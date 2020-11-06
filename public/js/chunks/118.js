(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default, getRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return getRole; });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8& ***!
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



/***/ }),

/***/ "./resources/js/pages/Roles/Show.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Roles/Show.vue ***!
  \*******************************************/
/*! exports provided: getRole, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_0a1461f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=0a1461f8& */ "./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getRole"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_0a1461f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_0a1461f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Roles/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default, getRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/Show.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getRole"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_0a1461f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=0a1461f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Roles/Show.vue?vue&type=template&id=0a1461f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_0a1461f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_0a1461f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaG93LnZ1ZT85ODYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hvdy52dWU/YzIwMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hvdy52dWU/YzY2MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQUxBO0FBT0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQVBBO0FBZUEsTUFmQSxrQkFlQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBbkJBO0FBcUJBLGtCQXJCQSw0QkFxQkEsRUFyQkEsRUFxQkEsSUFyQkEsRUFxQkEsSUFyQkEsRUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsU0FKQTtBQUtBLE9BTkEsTUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFNBSkE7QUFLQTtBQUNBLEtBZEE7QUFlQSxHQXJDQTtBQXVDQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQVBBO0FBU0EsV0FUQSxxQkFTQTtBQUNBO0FBQ0EsS0FYQTtBQWFBLFdBYkEscUJBYUE7QUFDQTtBQUNBLEtBZkE7QUFpQkEsV0FqQkEscUJBaUJBO0FBQ0E7QUFDQTtBQW5CQTtBQXZDQTtBQThEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLEdBSkEsV0FJQTtBQUNBO0FBQ0EsR0FOQTtBQU9BLEM7Ozs7Ozs7Ozs7OztBQ3JJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDRCQUE0QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyxzREFBc0QsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUyxnQkFBZ0IsRUFBRTtBQUMvQztBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU0sZ0JBQWdCO0FBQ2xELG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4QkFBOEIsb0JBQW9CLEVBQUU7QUFDL0U7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxzQkFBc0IsRUFBRTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1DQUFtQztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUyxxQkFBcUIsRUFBRTtBQUN4RTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVMsb0JBQW9CLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6TUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy8xMTguanM/aWQ9NzdiN2M0NDMwMjg3NzBkN2UxNTEiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInJvbGVzLXBhZ2VcIj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8cGFnZS10aXRsZSBpY29uPVwidXNlci1zaGllbGRcIiA6c3VidGl0bGU9XCJyb2xlLmRlc2NyaXB0aW9uXCI+Um9sZSAtIHt7IHJvbGUubmFtZSB9fTwvcGFnZS10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiB2LWlmPVwiJG1xICE9ICdzbSdcIiBrZXk9XCJnby1iYWNrLWJ0blwiIDp0bz1cInsgbmFtZTogJ3JvbGVzJyB9XCIgdmFyaWFudD1cInNlY29uZGFyeVwiPkdvIEJhY2s8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtaWY9XCJjYW5FZGl0XCIga2V5PVwiZWRpdC1yb2xlLWJ0blwiIDp0bz1cInsgbmFtZTogJ3JvbGVzLmVkaXQnLCBwYXJhbXM6IHtyb2xlOiByb2xlLmlkfSB9XCIgdmFyaWFudD1cInByaW1hcnlcIj5FZGl0IFJvbGU8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwic2lkZWJhci1yaWdodFwiPlxuICAgICAgICAgICAgPHNpZGViYXI+XG4gICAgICAgICAgICAgICAgPHN0YXR1cy1jYXJkIGlkPVwicm9sZV9wYW5lbF9zdGF0dXNfY2FyZFwiIDplbnRyeT1cInJvbGVcIiB0YWJpbmRleD1cIi0xXCI+PC9zdGF0dXMtY2FyZD5cbiAgICAgICAgICAgIDwvc2lkZWJhcj5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCBpZD1cInJvbGVzX3BhbmVsX3Blcm1pc3Npb25zXCIgOnRpdGxlPVwicm9sZS5uYW1lICsgJyBQZXJtaXNzaW9ucydcIiBkZXNjcmlwdGlvbj1cIkN1cnJlbnQgcGVybWlzc2lvbnMgYXNzaWduZWQgdG8gdGhpcyByb2xlLlwiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgIDwhLS0gPHVpLXRhYmxlIHJlZj1cInBlcm1pc3Npb25zXCIgaWQ9XCJwZXJtaXNzaW9uc1wiIGVuZHBvaW50PVwiL2RhdGF0YWJsZS9wZXJtaXNzaW9uc1wiIHNvcnQtYnk9XCJuYW1lXCIgbm8tYWN0aW9ucyBrZXk9XCJwZXJtaXNzaW9ucy10YWJsZVwiIHNob3ctcGFnZS1zdGF0dXMgc2hvdy1wYWdlLW51bWJlcnMgc2hvdy1wYWdlLW5hdiBzaG93LXBhZ2UtZW5kcz5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5hbWVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNvZGU+e3sgdGFibGUucmVjb3JkLm5hbWUgfX08L2NvZGU+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZGVzY3JpcHRpb25cIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgdGFibGUucmVjb3JkLmRlc2NyaXB0aW9uIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3VpLXRhYmxlPiAtLT5cbiAgICAgICAgICAgIDxwPlBlcm1pc3Npb25zIGxpc3QgY29taW5nIHNvb24uLi48L3A+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgaWQ9XCJyb2xlc19wYW5lbF91c2Vyc1wiIDpncmlkPVwiZmFsc2VcIiB0aXRsZT1cIkFzc2lnbmVkIFVzZXJzXCIgZGVzY3JpcHRpb249XCJVc2VycyBjdXJyZW50bHkgYXNzaWduZWQgdG8gdGhpcyByb2xlLlwiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgIDx1aS10YWJsZSA6a2V5PVwiJ3JvbGUtJyArIHJvbGUubmFtZSArICctdGFibGUnXCIgY2xhc3M9XCJ1c2VyLXRhYmxlXCIgaWQ9XCJ1c2Vyc1wiIDplbmRwb2ludD1cImVuZHBvaW50XCIgc29ydC1ieT1cIm5hbWVcIiA6bm8tc2VhcmNoPVwiaXNPd25lclwiIG5vLWFjdGlvbnMgc2hvdy1wYWdlLXN0YXR1cyBzaG93LXBhZ2UtbnVtYmVycyBzaG93LXBhZ2UtbmF2IHNob3ctcGFnZS1lbmRzPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibmFtZVwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1aS1zdGF0dXMgOnZhbHVlPVwidGFibGUucmVjb3JkLnN0YXR1c1wiIGNsYXNzPVwibXItMlwiPjwvdWktc3RhdHVzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3VzZXJzLnNob3cnLCBwYXJhbXM6IHt1c2VyOiB0YWJsZS5yZWNvcmQuaWR9IH1cIj57eyB0YWJsZS5yZWNvcmQubmFtZSB9fTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImVtYWlsXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHRhYmxlLnJlY29yZC5lbWFpbCB9fVxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInJvbGVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWJhZGdlPnt7IHRhYmxlLnJlY29yZC5yb2xlLm5hbWUgfX08L3VpLWJhZGdlPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImNyZWF0ZWRfYXRcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWRhdGUgOnRpbWVzdGFtcD1cInRhYmxlLnJlY29yZC5jcmVhdGVkX2F0XCI+PC91aS1kYXRlPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImVtYWlsX3ZlcmlmaWVkX2F0XCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1iYWRnZSB2LWlmPVwidGFibGUucmVjb3JkLmVtYWlsX3ZlcmlmaWVkX2F0XCIgdmFyaWFudD1cInN1Y2Nlc3NcIj5ZZXM8L3VpLWJhZGdlPlxuICAgICAgICAgICAgICAgICAgICA8dWktYmFkZ2Ugdi1lbHNlIHZhcmlhbnQ9XCJkYW5nZXJcIj5ObzwvdWktYmFkZ2U+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWktdGFibGU+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGF1dGgoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBlcm1pc3Npb246ICdyb2xlcy52aWV3JyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogdGhpcy5yb2xlLm5hbWUgfHwgJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJvbGU6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgZ2V0Um9sZSh0by5wYXJhbXMucm9sZSwgKGVycm9yLCByb2xlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kcm91dGVyLnB1c2goJy9yb2xlcycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnRvU3RyaW5nKCksICdkYW5nZXInKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5yb2xlID0gcm9sZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZW5kcG9pbnQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm9sZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJy9kYXRhdGFibGUvdXNlcnMvJyArIHRoaXMucm9sZS5uYW1lXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICcvZGF0YXRhYmxlL3VzZXJzJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNPd25lcigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb2xlLmlkICYmIHRoaXMucm9sZS5pZCA9PT0gMVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNHdWVzdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb2xlLmlkICYmIHRoaXMucm9sZS5pZCA9PT0gMlxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY2FuRWRpdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kY2FuKCdyb2xlcy51cGRhdGUnLCB0aGlzLnJvbGUubGV2ZWwgPyB0aGlzLnJvbGUubGV2ZWwgOiAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldFJvbGUoaWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9yb2xlcy8nICsgaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcm9sZSA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByb2xlKVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdUaGUgcmVxdWVzdGVkIHJvbGUgY291bGQgbm90IGJlIGZvdW5kJykpXG4gICAgICAgIH0pXG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicm9sZXMtcGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicGFnZS10aXRsZVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBpY29uOiBcInVzZXItc2hpZWxkXCIsIHN1YnRpdGxlOiBfdm0ucm9sZS5kZXNjcmlwdGlvbiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiUm9sZSAtIFwiICsgX3ZtLl9zKF92bS5yb2xlLm5hbWUpKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uJG1xICE9IFwic21cIlxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImdvLWJhY2stYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwicm9sZXNcIiB9LCB2YXJpYW50OiBcInNlY29uZGFyeVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmNhbkVkaXRcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJlZGl0LXJvbGUtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJyb2xlcy5lZGl0XCIsIHBhcmFtczogeyByb2xlOiBfdm0ucm9sZS5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFZGl0IFJvbGVcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInNpZGViYXItcmlnaHRcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic2lkZWJhclwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInN0YXR1cy1jYXJkXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwicm9sZV9wYW5lbF9zdGF0dXNfY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgZW50cnk6IF92bS5yb2xlLFxuICAgICAgICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcInJvbGVzX3BhbmVsX3Blcm1pc3Npb25zXCIsXG4gICAgICAgICAgICB0aXRsZTogX3ZtLnJvbGUubmFtZSArIFwiIFBlcm1pc3Npb25zXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IHBlcm1pc3Npb25zIGFzc2lnbmVkIHRvIHRoaXMgcm9sZS5cIixcbiAgICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcInBcIiwgW192bS5fdihcIlBlcm1pc3Npb25zIGxpc3QgY29taW5nIHNvb24uLi5cIildKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwicm9sZXNfcGFuZWxfdXNlcnNcIixcbiAgICAgICAgICAgIGdyaWQ6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiQXNzaWduZWQgVXNlcnNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXJzIGN1cnJlbnRseSBhc3NpZ25lZCB0byB0aGlzIHJvbGUuXCIsXG4gICAgICAgICAgICB0YWJpbmRleDogXCItMVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ1aS10YWJsZVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwicm9sZS1cIiArIF92bS5yb2xlLm5hbWUgKyBcIi10YWJsZVwiLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXNlci10YWJsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwidXNlcnNcIixcbiAgICAgICAgICAgICAgZW5kcG9pbnQ6IF92bS5lbmRwb2ludCxcbiAgICAgICAgICAgICAgXCJzb3J0LWJ5XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICBcIm5vLXNlYXJjaFwiOiBfdm0uaXNPd25lcixcbiAgICAgICAgICAgICAgXCJuby1hY3Rpb25zXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwic2hvdy1wYWdlLXN0YXR1c1wiOiBcIlwiLFxuICAgICAgICAgICAgICBcInNob3ctcGFnZS1udW1iZXJzXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwic2hvdy1wYWdlLW5hdlwiOiBcIlwiLFxuICAgICAgICAgICAgICBcInNob3ctcGFnZS1lbmRzXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWktc3RhdHVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogdGFibGUucmVjb3JkLnN0YXR1cyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidXNlcnMuc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgdXNlcjogdGFibGUucmVjb3JkLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGFibGUucmVjb3JkLmVtYWlsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicm9sZVwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1iYWRnZVwiLCBbX3ZtLl92KF92bS5fcyh0YWJsZS5yZWNvcmQucm9sZS5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJjcmVhdGVkX2F0XCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInVpLWRhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpbWVzdGFtcDogdGFibGUucmVjb3JkLmNyZWF0ZWRfYXQgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJlbWFpbF92ZXJpZmllZF9hdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgdGFibGUucmVjb3JkLmVtYWlsX3ZlcmlmaWVkX2F0XG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInVpLWJhZGdlXCIsIHsgYXR0cnM6IHsgdmFyaWFudDogXCJzdWNjZXNzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlllc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwidWktYmFkZ2VcIiwgeyBhdHRyczogeyB2YXJpYW50OiBcImRhbmdlclwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOb1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTE0NjFmOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBhMTQ2MWY4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBhMTQ2MWY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBhMTQ2MWY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTE0NjFmOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwYTE0NjFmOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL1Nob3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTE0NjFmOCZcIiJdLCJzb3VyY2VSb290IjoiIn0=