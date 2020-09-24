(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  permission: 'roles.view',
  head: {
    title: function title() {
      return {
        inner: this.role.label || 'Loading...'
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
      return this.role.id && this.role.id === 4;
    },
    isGuest: function isGuest() {
      return this.role.id && this.role.id === 1;
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
          _c("page-title", { attrs: { icon: "user-shield" } }, [
            _vm._v("Role - " + _vm._s(_vm.role.label))
          ])
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
              key: "go-back-btn",
              attrs: { to: { name: "roles" }, variant: "secondary" }
            },
            [_vm._v("Go Back")]
          ),
          _vm._v(" "),
          !_vm.isOwner && _vm.$can("roles.update")
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
      ),
      _vm._v(" "),
      _c(
        "section-card",
        { attrs: { title: _vm.role.label, description: _vm.role.description } },
        [
          _c("dl", { staticClass: "detail-list" }, [
            _c("dt", [_vm._v("Created")]),
            _vm._v(" "),
            _c("dd", [
              _vm._v(
                _vm._s(
                  _vm.$moment(_vm.role.created_at).format("Y-MM-DD, hh:mm a")
                )
              )
            ]),
            _vm._v(" "),
            _c("dt", [_vm._v("Last Updated")]),
            _vm._v(" "),
            _c("dd", [
              _vm._v(
                _vm._s(
                  _vm.$moment(_vm.role.updated_at).format("Y-MM-DD, hh:mm a")
                )
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("section-card", {
        attrs: {
          title: _vm.role.label + " Permissions",
          description: "Current permissions assigned to this role."
        }
      }),
      _vm._v(" "),
      !_vm.isGuest
        ? _c(
            "ui-card",
            [
              _c(
                "ui-card-body",
                [
                  _c("h2", [_vm._v("Assigned Users")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card__subtitle" }, [
                    _vm._v("Users currently assigned to this role.")
                  ]),
                  _vm._v(" "),
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
                    scopedSlots: _vm._u(
                      [
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
                                "\n                    " +
                                  _vm._s(table.record.email) +
                                  "\n                "
                              )
                            ]
                          }
                        },
                        {
                          key: "role",
                          fn: function(table) {
                            return [
                              _c("ui-badge", [
                                _vm._v(_vm._s(table.record.role.label))
                              ])
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
                                ? _c(
                                    "ui-badge",
                                    { attrs: { variant: "success" } },
                                    [_vm._v("Yes")]
                                  )
                                : _c(
                                    "ui-badge",
                                    { attrs: { variant: "danger" } },
                                    [_vm._v("No")]
                                  )
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      183297737
                    )
                  })
                ],
                1
              )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaG93LnZ1ZT85ODYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hvdy52dWU/YzIwMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hvdy52dWU/YzY2MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VBO0FBQ0EsMEJBREE7QUFHQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBSEE7QUFXQSxNQVhBLGtCQVdBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FmQTtBQWlCQSxrQkFqQkEsNEJBaUJBLEVBakJBLEVBaUJBLElBakJBLEVBaUJBLElBakJBLEVBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFNBSkE7QUFLQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBRUE7QUFDQSxTQUpBO0FBS0E7QUFDQSxLQWRBO0FBZUEsR0FqQ0E7QUFtQ0E7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FQQTtBQVNBLFdBVEEscUJBU0E7QUFDQTtBQUNBLEtBWEE7QUFhQSxXQWJBLHFCQWFBO0FBQ0E7QUFDQTtBQWZBO0FBbkNBO0FBc0RBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsR0FKQSxXQUlBO0FBQ0E7QUFDQSxHQU5BO0FBT0EsQzs7Ozs7Ozs7Ozs7O0FDbElBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNEJBQTRCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxjQUFjLEVBQUU7QUFDbEM7QUFDQSw0QkFBNEIsU0FBUyxzQkFBc0IsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGdCQUFnQixFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTSxnQkFBZ0I7QUFDNUMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4QkFBOEIsb0JBQW9CLEVBQUU7QUFDN0U7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsMkRBQTJELEVBQUU7QUFDL0U7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdDQUFnQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1DQUFtQztBQUNwRTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxTQUFTLHFCQUFxQixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVMsb0JBQW9CLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcE5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQTtBQUFBO0FBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvOTYuanM/aWQ9ZDM1MGNmODlmMjcyM2NmMDAxY2MiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInJvbGVzLXBhZ2VcIj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8cGFnZS10aXRsZSBpY29uPVwidXNlci1zaGllbGRcIj5Sb2xlIC0ge3sgcm9sZS5sYWJlbCB9fTwvcGFnZS10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDx1aS1idXR0b24ga2V5PVwiZ28tYmFjay1idG5cIiA6dG89XCJ7IG5hbWU6ICdyb2xlcycgfVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5HbyBCYWNrPC91aS1idXR0b24+XG4gICAgICAgICAgICA8dWktYnV0dG9uIHYtaWY9XCIhaXNPd25lciAmJiAkY2FuKCdyb2xlcy51cGRhdGUnKVwiIGtleT1cImVkaXQtcm9sZS1idG5cIiA6dG89XCJ7IG5hbWU6ICdyb2xlcy5lZGl0JywgcGFyYW1zOiB7cm9sZTogcm9sZS5pZH0gfVwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+RWRpdCBSb2xlPC91aS1idXR0b24+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgOnRpdGxlPVwicm9sZS5sYWJlbFwiIDpkZXNjcmlwdGlvbj1cInJvbGUuZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxkbCBjbGFzcz1cImRldGFpbC1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGR0PkNyZWF0ZWQ8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57eyAkbW9tZW50KHJvbGUuY3JlYXRlZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgfX08L2RkPlxuICAgICAgICAgICAgICAgIDxkdD5MYXN0IFVwZGF0ZWQ8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57eyAkbW9tZW50KHJvbGUudXBkYXRlZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgfX08L2RkPlxuICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCA6dGl0bGU9XCJyb2xlLmxhYmVsICsgJyBQZXJtaXNzaW9ucydcIiBkZXNjcmlwdGlvbj1cIkN1cnJlbnQgcGVybWlzc2lvbnMgYXNzaWduZWQgdG8gdGhpcyByb2xlLlwiPlxuICAgICAgICAgICAgPCEtLSA8dWktdGFibGUgcmVmPVwicGVybWlzc2lvbnNcIiBpZD1cInBlcm1pc3Npb25zXCIgZW5kcG9pbnQ9XCIvZGF0YXRhYmxlL3Blcm1pc3Npb25zXCIgc29ydC1ieT1cIm5hbWVcIiBuby1hY3Rpb25zIGtleT1cInBlcm1pc3Npb25zLXRhYmxlXCIgc2hvdy1wYWdlLXN0YXR1cyBzaG93LXBhZ2UtbnVtYmVycyBzaG93LXBhZ2UtbmF2IHNob3ctcGFnZS1lbmRzPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibmFtZVwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Y29kZT57eyB0YWJsZS5yZWNvcmQubmFtZSB9fTwvY29kZT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJkZXNjcmlwdGlvblwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD57eyB0YWJsZS5yZWNvcmQuZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWktdGFibGU+IC0tPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8dWktY2FyZCB2LWlmPVwiISBpc0d1ZXN0XCI+XG4gICAgICAgICAgICA8dWktY2FyZC1ib2R5PlxuICAgICAgICAgICAgICAgIDxoMj5Bc3NpZ25lZCBVc2VyczwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX19zdWJ0aXRsZVwiPlVzZXJzIGN1cnJlbnRseSBhc3NpZ25lZCB0byB0aGlzIHJvbGUuPC9wPlxuXG4gICAgICAgICAgICAgICAgPHVpLXRhYmxlIDprZXk9XCIncm9sZS0nICsgcm9sZS5uYW1lICsgJy10YWJsZSdcIiBjbGFzcz1cInVzZXItdGFibGVcIiBpZD1cInVzZXJzXCIgOmVuZHBvaW50PVwiZW5kcG9pbnRcIiBzb3J0LWJ5PVwibmFtZVwiIDpuby1zZWFyY2g9XCJpc093bmVyXCIgbm8tYWN0aW9ucyBzaG93LXBhZ2Utc3RhdHVzIHNob3ctcGFnZS1udW1iZXJzIHNob3ctcGFnZS1uYXYgc2hvdy1wYWdlLWVuZHM+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibmFtZVwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVpLXN0YXR1cyA6dmFsdWU9XCJ0YWJsZS5yZWNvcmQuc3RhdHVzXCIgY2xhc3M9XCJtci0yXCI+PC91aS1zdGF0dXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3VzZXJzLnNob3cnLCBwYXJhbXM6IHt1c2VyOiB0YWJsZS5yZWNvcmQuaWR9IH1cIj57eyB0YWJsZS5yZWNvcmQubmFtZSB9fTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImVtYWlsXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB0YWJsZS5yZWNvcmQuZW1haWwgfX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInJvbGVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1aS1iYWRnZT57eyB0YWJsZS5yZWNvcmQucm9sZS5sYWJlbCB9fTwvdWktYmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJjcmVhdGVkX2F0XCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWktZGF0ZSA6dGltZXN0YW1wPVwidGFibGUucmVjb3JkLmNyZWF0ZWRfYXRcIj48L3VpLWRhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJlbWFpbF92ZXJpZmllZF9hdFwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVpLWJhZGdlIHYtaWY9XCJ0YWJsZS5yZWNvcmQuZW1haWxfdmVyaWZpZWRfYXRcIiB2YXJpYW50PVwic3VjY2Vzc1wiPlllczwvdWktYmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWktYmFkZ2Ugdi1lbHNlIHZhcmlhbnQ9XCJkYW5nZXJcIj5ObzwvdWktYmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC91aS10YWJsZT5cbiAgICAgICAgICAgIDwvdWktY2FyZC1ib2R5PlxuICAgICAgICA8L3VpLWNhcmQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcGVybWlzc2lvbjogJ3JvbGVzLnZpZXcnLFxuXG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiB0aGlzLnJvbGUubGFiZWwgfHwgJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJvbGU6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgZ2V0Um9sZSh0by5wYXJhbXMucm9sZSwgKGVycm9yLCByb2xlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kcm91dGVyLnB1c2goJy9yb2xlcycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnRvU3RyaW5nKCksICdkYW5nZXInKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5yb2xlID0gcm9sZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZW5kcG9pbnQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm9sZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJy9kYXRhdGFibGUvdXNlcnMvJyArIHRoaXMucm9sZS5uYW1lXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICcvZGF0YXRhYmxlL3VzZXJzJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNPd25lcigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb2xlLmlkICYmIHRoaXMucm9sZS5pZCA9PT0gNFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNHdWVzdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb2xlLmlkICYmIHRoaXMucm9sZS5pZCA9PT0gMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldFJvbGUoaWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9yb2xlcy8nICsgaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcm9sZSA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByb2xlKVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdUaGUgcmVxdWVzdGVkIHJvbGUgY291bGQgbm90IGJlIGZvdW5kJykpXG4gICAgICAgIH0pXG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicm9sZXMtcGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBhZ2UtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcInVzZXItc2hpZWxkXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJSb2xlIC0gXCIgKyBfdm0uX3MoX3ZtLnJvbGUubGFiZWwpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImdvLWJhY2stYnRuXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwicm9sZXNcIiB9LCB2YXJpYW50OiBcInNlY29uZGFyeVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5pc093bmVyICYmIF92bS4kY2FuKFwicm9sZXMudXBkYXRlXCIpXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImVkaXQtcm9sZS1idG5cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvOiB7IG5hbWU6IFwicm9sZXMuZWRpdFwiLCBwYXJhbXM6IHsgcm9sZTogX3ZtLnJvbGUuaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkVkaXQgUm9sZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBfdm0ucm9sZS5sYWJlbCwgZGVzY3JpcHRpb246IF92bS5yb2xlLmRlc2NyaXB0aW9uIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGxcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWwtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIkNyZWF0ZWRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRkXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgIF92bS4kbW9tZW50KF92bS5yb2xlLmNyZWF0ZWRfYXQpLmZvcm1hdChcIlktTU0tREQsIGhoOm1tIGFcIilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIkxhc3QgVXBkYXRlZFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGRcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgX3ZtLiRtb21lbnQoX3ZtLnJvbGUudXBkYXRlZF9hdCkuZm9ybWF0KFwiWS1NTS1ERCwgaGg6bW0gYVwiKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic2VjdGlvbi1jYXJkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0aXRsZTogX3ZtLnJvbGUubGFiZWwgKyBcIiBQZXJtaXNzaW9uc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgcGVybWlzc2lvbnMgYXNzaWduZWQgdG8gdGhpcyByb2xlLlwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0uaXNHdWVzdFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ1aS1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiQXNzaWduZWQgVXNlcnNcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkX19zdWJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVXNlcnMgY3VycmVudGx5IGFzc2lnbmVkIHRvIHRoaXMgcm9sZS5cIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidWktdGFibGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwicm9sZS1cIiArIF92bS5yb2xlLm5hbWUgKyBcIi10YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1c2VyLXRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXNlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogX3ZtLmVuZHBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgIFwic29ydC1ieVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIm5vLXNlYXJjaFwiOiBfdm0uaXNPd25lcixcbiAgICAgICAgICAgICAgICAgICAgICBcIm5vLWFjdGlvbnNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3ctcGFnZS1zdGF0dXNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3ctcGFnZS1udW1iZXJzXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93LXBhZ2UtbmF2XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93LXBhZ2UtZW5kc1wiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1zdGF0dXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IHRhYmxlLnJlY29yZC5zdGF0dXMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidXNlcnMuc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IHVzZXI6IHRhYmxlLnJlY29yZC5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGFibGUucmVjb3JkLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0YWJsZS5yZWNvcmQuZW1haWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInJvbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWktYmFkZ2VcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC5yb2xlLmxhYmVsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY3JlYXRlZF9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1kYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGltZXN0YW1wOiB0YWJsZS5yZWNvcmQuY3JlYXRlZF9hdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImVtYWlsX3ZlcmlmaWVkX2F0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5yZWNvcmQuZW1haWxfdmVyaWZpZWRfYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWktYmFkZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFyaWFudDogXCJzdWNjZXNzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlllc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLWJhZGdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhcmlhbnQ6IFwiZGFuZ2VyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk5vXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgMTgzMjk3NzM3XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhMTQ2MWY4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGExNDYxZjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGExNDYxZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGExNDYxZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhMTQ2MWY4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBhMTQ2MWY4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hvdy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhMTQ2MWY4JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==