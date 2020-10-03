(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Users/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default, getUserAndRoles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAndRoles", function() { return getUserAndRoles; });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  permission: 'users.view',
  computed: {
    endpoint: function endpoint() {
      if (this.user.id) {
        return '/datatable/users/' + this.user.id + '/activities';
      }
    },
    verified: function verified() {
      if (this.user.email_verified_at && this.user.email_verified_at != '0000-00-00 00:00:00') {
        return true;
      }

      return false;
    }
  },
  head: {
    title: function title() {
      return {
        inner: this.user.name || 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      user: {},
      roles: []
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getUserAndRoles(to.params.user, function (error, user, roles, fields) {
      if (error) {
        next(function (vm) {
          vm.$router.push('/users');
          toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.user = user;
          vm.roles = roles;
          vm.$emit('updateHead');
        });
      }
    });
  },
  methods: {
    destroy: function destroy(id) {
      var _this = this;

      axios["delete"]('/api/users/' + id).then(function (response) {
        toast('User successfully deleted.', 'success');

        _this.$router.push('/users');
      });
    }
  }
});
function getUserAndRoles(userId, callback) {
  axios.all([axios.get('/api/roles'), axios.get('/api/users/' + userId)]).then(axios.spread(function (roles, user) {
    user = user.data.data;
    roles = roles.data.data;
    callback(null, user, roles, {
      name: user.name,
      email: user.email,
      status: user.status,
      role: user.roles[0].name,
      password: '',
      password_confirmation: ''
    });
  }));
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6& ***!
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
    { staticClass: "user-page" },
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("page-title", { attrs: { icon: "users" } }, [
            _vm._v("User Profile - " + _vm._s(_vm.user.name))
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
              attrs: { to: { name: "users" }, variant: "secondary" }
            },
            [_vm._v("Go Back")]
          ),
          _vm._v(" "),
          _vm.$can("users.update")
            ? _c(
                "ui-button",
                {
                  key: "edit-user-btn",
                  attrs: {
                    to: { name: "users.edit", params: { user: _vm.user.id } },
                    variant: "primary"
                  }
                },
                [_vm._v("Edit User")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "User Information",
            description: "General information about this user."
          }
        },
        [
          _c("dl", { staticClass: "detail-list" }, [
            _c("dt", [_vm._v("Name")]),
            _vm._v(" "),
            _c("dd", [_vm._v(_vm._s(_vm.user.name))]),
            _vm._v(" "),
            _c("dt", [_vm._v("Email")]),
            _vm._v(" "),
            _c("dd", [_vm._v(_vm._s(_vm.user.email))]),
            _vm._v(" "),
            _c("dt", [_vm._v("Role")]),
            _vm._v(" "),
            _c("dd", [
              _vm._v(
                _vm._s(_vm.user.roles ? _vm.user.roles[0].label : "Loading...")
              )
            ]),
            _vm._v(" "),
            _c("dt", [_vm._v("Status")]),
            _vm._v(" "),
            _c(
              "dd",
              { staticClass: "flex" },
              [
                _c("ui-status", {
                  staticClass: "mr-2",
                  attrs: { value: _vm.user.status }
                }),
                _vm._v(" " + _vm._s(_vm.user.status ? "Enabled" : "Disabled"))
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "Account Activity",
            description: "Information on user account activity and stats."
          }
        },
        [
          _c("dl", { staticClass: "detail-list" }, [
            _c("dt", [_vm._v("Registered")]),
            _vm._v(" "),
            _c(
              "dd",
              [
                _c("ui-datetime", { attrs: { timestamp: _vm.user.created_at } })
              ],
              1
            ),
            _vm._v(" "),
            _c("dt", [_vm._v("Verified")]),
            _vm._v(" "),
            _c(
              "dd",
              [
                _vm.verified
                  ? _c("ui-datetime", {
                      attrs: { timestamp: _vm.user.email_verified_at }
                    })
                  : _c("span", [_vm._v("No")])
              ],
              1
            ),
            _vm._v(" "),
            _c("dt", [_vm._v("Last Updated")]),
            _vm._v(" "),
            _c(
              "dd",
              [
                _c("ui-datetime", { attrs: { timestamp: _vm.user.updated_at } })
              ],
              1
            ),
            _vm._v(" "),
            _c("dt", [_vm._v("Last Login")]),
            _vm._v(" "),
            _c(
              "dd",
              [
                _vm.user.logged_in_at
                  ? _c("ui-datetime", {
                      attrs: { timestamp: _vm.user.logged_in_at }
                    })
                  : _c("span", [_vm._v("Never")])
              ],
              1
            ),
            _vm._v(" "),
            _c("dt", [_vm._v("Invalid Login Attempts")]),
            _vm._v(" "),
            _c("dd", [_vm._v(_vm._s(_vm.user.invalid_logins))]),
            _vm._v(" "),
            _vm.user.invalidly_logged_in_at
              ? _c("dt", [_vm._v("Last Invalid Login")])
              : _vm._e(),
            _vm._v(" "),
            _vm.user.invalidly_logged_in_at
              ? _c(
                  "dd",
                  [
                    _c("ui-datetime", {
                      attrs: { timestamp: _vm.user.invalidly_logged_in_at }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.user.password_changed_at
              ? _c("dt", [_vm._v("Password Changed")])
              : _vm._e(),
            _vm._v(" "),
            _vm.user.password_changed_at
              ? _c(
                  "dd",
                  [
                    _c("ui-datetime", {
                      attrs: { timestamp: _vm.user.password_changed_at }
                    })
                  ],
                  1
                )
              : _vm._e()
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "User Activity Feed",
            description: "See what this user has been doing around the site."
          }
        },
        [
          _vm.user.id
            ? _c("ui-table", {
                key: "activities-" + _vm.user.id,
                staticClass: "activities-table",
                attrs: {
                  id: "activities",
                  endpoint: _vm.endpoint,
                  "sort-by": "created_at",
                  "sort-in": "desc",
                  "per-page": 10
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "description",
                      fn: function(table) {
                        return [
                          _c(
                            "div",
                            { staticClass: "flex items-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "mr-4 w-3" },
                                [
                                  table.record.properties.icon
                                    ? _c("fa-icon", {
                                        staticClass: "fa-fw",
                                        attrs: {
                                          icon: [
                                            "fas",
                                            table.record.properties.icon
                                          ]
                                        }
                                      })
                                    : _c("fa-icon", {
                                        staticClass: "fa-xs fa-fw",
                                        attrs: { icon: ["fas", "circle"] }
                                      })
                                ],
                                1
                              ),
                              _vm._v(
                                "\n\n                    " +
                                  _vm._s(table.record.description) +
                                  "\n\n                    "
                              ),
                              table.record.properties.link
                                ? _c(
                                    "router-link",
                                    {
                                      staticClass: "ml-2",
                                      attrs: {
                                        to: "/" + table.record.properties.link
                                      }
                                    },
                                    [
                                      _c("fa-icon", {
                                        staticClass: "fa-fw fa-sm",
                                        attrs: { icon: ["fas", "link"] }
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "sr-only" }, [
                                        _vm._v("Link to related property")
                                      ])
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]
                      }
                    },
                    {
                      key: "created_at",
                      fn: function(table) {
                        return [
                          _c("ui-datetime", {
                            attrs: { timestamp: table.record.created_at }
                          })
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  3801163566
                )
              })
            : _vm._e()
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

/***/ "./resources/js/pages/Users/Show.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Users/Show.vue ***!
  \*******************************************/
/*! exports provided: getUserAndRoles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_790931e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=790931e6& */ "./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/Users/Show.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserAndRoles", function() { return _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getUserAndRoles"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_790931e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_790931e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Users/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Users/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Users/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default, getUserAndRoles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/Show.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserAndRoles", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getUserAndRoles"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_790931e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=790931e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/Show.vue?vue&type=template&id=790931e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_790931e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_790931e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2Vycy9TaG93LnZ1ZT81OThiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2Vycy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlcnMvU2hvdy52dWU/MjFkOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlcnMvU2hvdy52dWU/NTVhNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRkE7QUFDQSwwQkFEQTtBQUdBO0FBQ0EsWUFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7QUFPQSxZQVBBLHNCQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFiQSxHQUhBO0FBbUJBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FuQkE7QUEyQkEsTUEzQkEsa0JBMkJBO0FBQ0E7QUFDQSxjQURBO0FBRUE7QUFGQTtBQUlBLEdBaENBO0FBa0NBLGtCQWxDQSw0QkFrQ0EsRUFsQ0EsRUFrQ0EsSUFsQ0EsRUFrQ0EsSUFsQ0EsRUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsU0FKQTtBQUtBLE9BTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsU0FMQTtBQU1BO0FBQ0EsS0FmQTtBQWdCQSxHQW5EQTtBQXFEQTtBQUNBLFdBREEsbUJBQ0EsRUFEQSxFQUNBO0FBQUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BSkE7QUFLQTtBQVBBO0FBckRBO0FBZ0VBO0FBQ0EsYUFDQSx1QkFEQSxFQUVBLGlDQUZBLEdB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QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsdUNBQXVDO0FBQ3ZDO0FBQ0Esa0RBQWtELHlCQUF5QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM1NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQTtBQUFBO0FBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvMTEyLmpzP2lkPWJjNmFkMmM2OGU4Mzg1NWVhZDhmIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ1c2VyLXBhZ2VcIj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8cGFnZS10aXRsZSBpY29uPVwidXNlcnNcIj5Vc2VyIFByb2ZpbGUgLSB7eyB1c2VyLm5hbWUgfX08L3BhZ2UtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8dWktYnV0dG9uIGtleT1cImdvLWJhY2stYnRuXCIgOnRvPVwieyBuYW1lOiAndXNlcnMnIH1cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+R28gQmFjazwvdWktYnV0dG9uPlxuICAgICAgICAgICAgPHVpLWJ1dHRvbiBrZXk9XCJlZGl0LXVzZXItYnRuXCIgOnRvPVwieyBuYW1lOiAndXNlcnMuZWRpdCcsIHBhcmFtczoge3VzZXI6IHVzZXIuaWR9IH1cIiB2YXJpYW50PVwicHJpbWFyeVwiIHYtaWY9XCIkY2FuKCd1c2Vycy51cGRhdGUnKVwiPkVkaXQgVXNlcjwvdWktYnV0dG9uPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiVXNlciBJbmZvcm1hdGlvblwiIGRlc2NyaXB0aW9uPVwiR2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIHVzZXIuXCI+XG4gICAgICAgICAgICA8ZGwgY2xhc3M9XCJkZXRhaWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkdD5OYW1lPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3sgdXNlci5uYW1lIH19PC9kZD5cbiAgICAgICAgICAgICAgICA8ZHQ+RW1haWw8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57eyB1c2VyLmVtYWlsIH19PC9kZD5cbiAgICAgICAgICAgICAgICA8ZHQ+Um9sZTwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPnt7IHVzZXIucm9sZXMgPyB1c2VyLnJvbGVzWzBdLmxhYmVsIDogJ0xvYWRpbmcuLi4nIH19PC9kZD5cbiAgICAgICAgICAgICAgICA8ZHQ+U3RhdHVzPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQgY2xhc3M9XCJmbGV4XCI+PHVpLXN0YXR1cyA6dmFsdWU9XCJ1c2VyLnN0YXR1c1wiIGNsYXNzPVwibXItMlwiPjwvdWktc3RhdHVzPiB7eyB1c2VyLnN0YXR1cyA/ICdFbmFibGVkJyA6ICdEaXNhYmxlZCcgfX08L2RkPlxuICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIkFjY291bnQgQWN0aXZpdHlcIiBkZXNjcmlwdGlvbj1cIkluZm9ybWF0aW9uIG9uIHVzZXIgYWNjb3VudCBhY3Rpdml0eSBhbmQgc3RhdHMuXCI+XG4gICAgICAgICAgICA8ZGwgY2xhc3M9XCJkZXRhaWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkdD5SZWdpc3RlcmVkPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+PHVpLWRhdGV0aW1lIDp0aW1lc3RhbXA9XCJ1c2VyLmNyZWF0ZWRfYXRcIj48L3VpLWRhdGV0aW1lPjwvZGQ+XG5cbiAgICAgICAgICAgICAgICA8ZHQ+VmVyaWZpZWQ8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWRhdGV0aW1lIDp0aW1lc3RhbXA9XCJ1c2VyLmVtYWlsX3ZlcmlmaWVkX2F0XCIgdi1pZj1cInZlcmlmaWVkXCI+PC91aS1kYXRldGltZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPk5vPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGQ+XG5cbiAgICAgICAgICAgICAgICA8ZHQ+TGFzdCBVcGRhdGVkPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+PHVpLWRhdGV0aW1lIDp0aW1lc3RhbXA9XCJ1c2VyLnVwZGF0ZWRfYXRcIj48L3VpLWRhdGV0aW1lPjwvZGQ+XG5cbiAgICAgICAgICAgICAgICA8ZHQ+TGFzdCBMb2dpbjwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPlxuICAgICAgICAgICAgICAgICAgICA8dWktZGF0ZXRpbWUgOnRpbWVzdGFtcD1cInVzZXIubG9nZ2VkX2luX2F0XCIgdi1pZj1cInVzZXIubG9nZ2VkX2luX2F0XCI+PC91aS1kYXRldGltZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPk5ldmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGQ+XG5cbiAgICAgICAgICAgICAgICA8ZHQ+SW52YWxpZCBMb2dpbiBBdHRlbXB0czwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPnt7IHVzZXIuaW52YWxpZF9sb2dpbnMgfX08L2RkPlxuXG4gICAgICAgICAgICAgICAgPGR0IHYtaWY9XCJ1c2VyLmludmFsaWRseV9sb2dnZWRfaW5fYXRcIj5MYXN0IEludmFsaWQgTG9naW48L2R0PlxuICAgICAgICAgICAgICAgIDxkZCB2LWlmPVwidXNlci5pbnZhbGlkbHlfbG9nZ2VkX2luX2F0XCI+PHVpLWRhdGV0aW1lIDp0aW1lc3RhbXA9XCJ1c2VyLmludmFsaWRseV9sb2dnZWRfaW5fYXRcIj48L3VpLWRhdGV0aW1lPjwvZGQ+XG5cbiAgICAgICAgICAgICAgICA8ZHQgdi1pZj1cInVzZXIucGFzc3dvcmRfY2hhbmdlZF9hdFwiPlBhc3N3b3JkIENoYW5nZWQ8L2R0PlxuICAgICAgICAgICAgICAgIDxkZCB2LWlmPVwidXNlci5wYXNzd29yZF9jaGFuZ2VkX2F0XCI+PHVpLWRhdGV0aW1lIDp0aW1lc3RhbXA9XCJ1c2VyLnBhc3N3b3JkX2NoYW5nZWRfYXRcIj48L3VpLWRhdGV0aW1lPjwvZGQ+XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiVXNlciBBY3Rpdml0eSBGZWVkXCIgZGVzY3JpcHRpb249XCJTZWUgd2hhdCB0aGlzIHVzZXIgaGFzIGJlZW4gZG9pbmcgYXJvdW5kIHRoZSBzaXRlLlwiPlxuICAgICAgICAgICAgPHVpLXRhYmxlIDprZXk9XCInYWN0aXZpdGllcy0nICsgdXNlci5pZFwiIGNsYXNzPVwiYWN0aXZpdGllcy10YWJsZVwiIGlkPVwiYWN0aXZpdGllc1wiIDplbmRwb2ludD1cImVuZHBvaW50XCIgc29ydC1ieT1cImNyZWF0ZWRfYXRcIiBzb3J0LWluPVwiZGVzY1wiIDpwZXItcGFnZT1cIjEwXCIgdi1pZj1cInVzZXIuaWRcIj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImRlc2NyaXB0aW9uXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTQgdy0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gdi1pZj1cInRhYmxlLnJlY29yZC5wcm9wZXJ0aWVzLmljb25cIiA6aWNvbj1cIlsnZmFzJywgdGFibGUucmVjb3JkLnByb3BlcnRpZXMuaWNvbl1cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIHYtZWxzZSBjbGFzcz1cImZhLXhzIGZhLWZ3XCIgOmljb249XCJbJ2ZhcycsICdjaXJjbGUnXVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB0YWJsZS5yZWNvcmQuZGVzY3JpcHRpb24gfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cIicvJyArIHRhYmxlLnJlY29yZC5wcm9wZXJ0aWVzLmxpbmtcIiB2LWlmPVwidGFibGUucmVjb3JkLnByb3BlcnRpZXMubGlua1wiIGNsYXNzPVwibWwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIGNsYXNzPVwiZmEtZncgZmEtc21cIiA6aWNvbj1cIlsnZmFzJywgJ2xpbmsnXVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5MaW5rIHRvIHJlbGF0ZWQgcHJvcGVydHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJjcmVhdGVkX2F0XCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1kYXRldGltZSA6dGltZXN0YW1wPVwidGFibGUucmVjb3JkLmNyZWF0ZWRfYXRcIj48L3VpLWRhdGV0aW1lPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3VpLXRhYmxlPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwZXJtaXNzaW9uOiAndXNlcnMudmlldycsXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGVuZHBvaW50KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcvZGF0YXRhYmxlL3VzZXJzLycgKyB0aGlzLnVzZXIuaWQgKyAnL2FjdGl2aXRpZXMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmVyaWZpZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci5lbWFpbF92ZXJpZmllZF9hdCAmJiB0aGlzLnVzZXIuZW1haWxfdmVyaWZpZWRfYXQgIT0gJzAwMDAtMDAtMDAgMDA6MDA6MDAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiB0aGlzLnVzZXIubmFtZSB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXNlcjoge30sXG4gICAgICAgICAgICAgICAgcm9sZXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgZ2V0VXNlckFuZFJvbGVzKHRvLnBhcmFtcy51c2VyLCAoZXJyb3IsIHVzZXIsIHJvbGVzLCBmaWVsZHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucHVzaCgnL3VzZXJzJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QoZXJyb3IudG9TdHJpbmcoKSwgJ2RhbmdlcicpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnVzZXIgPSB1c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5yb2xlcyA9IHJvbGVzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRlbWl0KCd1cGRhdGVIZWFkJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGRlc3Ryb3koaWQpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvdXNlcnMvJyArIGlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnVXNlciBzdWNjZXNzZnVsbHkgZGVsZXRlZC4nLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy91c2VycycpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyQW5kUm9sZXModXNlcklkLCBjYWxsYmFjaykge1xuICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3JvbGVzJyksXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdXNlcnMvJyArIHVzZXJJZCksXG4gICAgICAgIF0pXG4gICAgICAgIC50aGVuKGF4aW9zLnNwcmVhZCgocm9sZXMsIHVzZXIpID0+IHtcbiAgICAgICAgICAgIHVzZXIgID0gdXNlci5kYXRhLmRhdGFcbiAgICAgICAgICAgIHJvbGVzID0gcm9sZXMuZGF0YS5kYXRhXG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHVzZXIsIHJvbGVzLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHN0YXR1czogdXNlci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlc1swXS5uYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkpXG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ1c2VyLXBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJ1c2Vyc1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiVXNlciBQcm9maWxlIC0gXCIgKyBfdm0uX3MoX3ZtLnVzZXIubmFtZSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiZ28tYmFjay1idG5cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJ1c2Vyc1wiIH0sIHZhcmlhbnQ6IFwic2Vjb25kYXJ5XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGNhbihcInVzZXJzLnVwZGF0ZVwiKVxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJlZGl0LXVzZXItYnRuXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0bzogeyBuYW1lOiBcInVzZXJzLmVkaXRcIiwgcGFyYW1zOiB7IHVzZXI6IF92bS51c2VyLmlkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFZGl0IFVzZXJcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJVc2VyIEluZm9ybWF0aW9uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHZW5lcmFsIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgdXNlci5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGxcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWwtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5lbWFpbCkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGRcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c2VyLnJvbGVzID8gX3ZtLnVzZXIucm9sZXNbMF0ubGFiZWwgOiBcIkxvYWRpbmcuLi5cIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiU3RhdHVzXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGRcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidWktc3RhdHVzXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBfdm0udXNlci5zdGF0dXMgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0udXNlci5zdGF0dXMgPyBcIkVuYWJsZWRcIiA6IFwiRGlzYWJsZWRcIikpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkFjY291bnQgQWN0aXZpdHlcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluZm9ybWF0aW9uIG9uIHVzZXIgYWNjb3VudCBhY3Rpdml0eSBhbmQgc3RhdHMuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsLWxpc3RcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImR0XCIsIFtfdm0uX3YoXCJSZWdpc3RlcmVkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGRcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidWktZGF0ZXRpbWVcIiwgeyBhdHRyczogeyB0aW1lc3RhbXA6IF92bS51c2VyLmNyZWF0ZWRfYXQgfSB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIlZlcmlmaWVkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGRcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS52ZXJpZmllZFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInVpLWRhdGV0aW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aW1lc3RhbXA6IF92bS51c2VyLmVtYWlsX3ZlcmlmaWVkX2F0IH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJOb1wiKV0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiTGFzdCBVcGRhdGVkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGRcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidWktZGF0ZXRpbWVcIiwgeyBhdHRyczogeyB0aW1lc3RhbXA6IF92bS51c2VyLnVwZGF0ZWRfYXQgfSB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIkxhc3QgTG9naW5cIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkZFwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIubG9nZ2VkX2luX2F0XG4gICAgICAgICAgICAgICAgICA/IF9jKFwidWktZGF0ZXRpbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpbWVzdGFtcDogX3ZtLnVzZXIubG9nZ2VkX2luX2F0IH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJOZXZlclwiKV0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiSW52YWxpZCBMb2dpbiBBdHRlbXB0c1wiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIuaW52YWxpZF9sb2dpbnMpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS51c2VyLmludmFsaWRseV9sb2dnZWRfaW5fYXRcbiAgICAgICAgICAgICAgPyBfYyhcImR0XCIsIFtfdm0uX3YoXCJMYXN0IEludmFsaWQgTG9naW5cIildKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS51c2VyLmludmFsaWRseV9sb2dnZWRfaW5fYXRcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGRcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1kYXRldGltZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGltZXN0YW1wOiBfdm0udXNlci5pbnZhbGlkbHlfbG9nZ2VkX2luX2F0IH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS51c2VyLnBhc3N3b3JkX2NoYW5nZWRfYXRcbiAgICAgICAgICAgICAgPyBfYyhcImR0XCIsIFtfdm0uX3YoXCJQYXNzd29yZCBDaGFuZ2VkXCIpXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0udXNlci5wYXNzd29yZF9jaGFuZ2VkX2F0XG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRkXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidWktZGF0ZXRpbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpbWVzdGFtcDogX3ZtLnVzZXIucGFzc3dvcmRfY2hhbmdlZF9hdCB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBBY3Rpdml0eSBGZWVkXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWUgd2hhdCB0aGlzIHVzZXIgaGFzIGJlZW4gZG9pbmcgYXJvdW5kIHRoZSBzaXRlLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnVzZXIuaWRcbiAgICAgICAgICAgID8gX2MoXCJ1aS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImFjdGl2aXRpZXMtXCIgKyBfdm0udXNlci5pZCxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpdml0aWVzLXRhYmxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcImFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiBfdm0uZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICBcInNvcnQtYnlcIjogXCJjcmVhdGVkX2F0XCIsXG4gICAgICAgICAgICAgICAgICBcInNvcnQtaW5cIjogXCJkZXNjXCIsXG4gICAgICAgICAgICAgICAgICBcInBlci1wYWdlXCI6IDEwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTQgdy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnJlY29yZC5wcm9wZXJ0aWVzLmljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnJlY29yZC5wcm9wZXJ0aWVzLmljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEteHMgZmEtZndcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjaXJjbGVcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0YWJsZS5yZWNvcmQuZGVzY3JpcHRpb24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5yZWNvcmQucHJvcGVydGllcy5saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogXCIvXCIgKyB0YWJsZS5yZWNvcmQucHJvcGVydGllcy5saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgZmEtc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJsaW5rXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTGluayB0byByZWxhdGVkIHByb3BlcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNyZWF0ZWRfYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWktZGF0ZXRpbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpbWVzdGFtcDogdGFibGUucmVjb3JkLmNyZWF0ZWRfYXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIDM4MDExNjM1NjZcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzkwOTMxZTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3OTA5MzFlNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3OTA5MzFlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3OTA5MzFlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzkwOTMxZTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzkwOTMxZTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Vc2Vycy9TaG93LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzkwOTMxZTYmXCIiXSwic291cmNlUm9vdCI6IiJ9