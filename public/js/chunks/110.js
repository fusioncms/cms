(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Users/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default, getUserAndRoles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAndRoles", function() { return getUserAndRoles; });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    currentUser: 'auth/getUser'
  })), {}, {
    endpoint: function endpoint() {
      if (this.user.id) {
        return '/datatable/users/' + this.user.id + '/activities';
      }
    }
  }),
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
          _c(
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
                _vm.user.verified
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
                _vm.user.last_logged_in_at
                  ? _c("ui-datetime", {
                      attrs: { timestamp: _vm.user.last_logged_in_at }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2Vycy9TaG93LnZ1ZT81OThiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2Vycy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlcnMvU2hvdy52dWU/MjFkOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlcnMvU2hvdy52dWU/NTVhNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0ZBO0FBRUE7QUFDQSw0Q0FDQTtBQUNBO0FBREEsSUFEQTtBQUtBLFlBTEEsc0JBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBLElBREE7QUFhQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBYkE7QUFxQkEsTUFyQkEsa0JBcUJBO0FBQ0E7QUFDQSxjQURBO0FBRUE7QUFGQTtBQUlBLEdBMUJBO0FBNEJBLGtCQTVCQSw0QkE0QkEsRUE1QkEsRUE0QkEsSUE1QkEsRUE0QkEsSUE1QkEsRUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsU0FKQTtBQUtBLE9BTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsU0FMQTtBQU1BO0FBQ0EsS0FmQTtBQWdCQSxHQTdDQTtBQStDQTtBQUNBLFdBREEsbUJBQ0EsRUFEQSxFQUNBO0FBQUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BSkE7QUFLQTtBQVBBO0FBL0NBO0FBMERBO0FBQ0EsYUFDQSx1QkFEQSxFQUVBLGlDQUZBLEdBSUEsSUFKQSxDQUlBO0FBQ0E7QUFDQTtBQUVB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QUFnRDtBQUNoRCx1Q0FBdUM7QUFDdkM7QUFDQSxrREFBa0QseUJBQXlCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy8xMTAuanM/aWQ9YTcxOTVjYWIyOTM4MTA1ZjNlZGUiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInVzZXItcGFnZVwiPlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxwYWdlLXRpdGxlIGljb249XCJ1c2Vyc1wiPlVzZXIgUHJvZmlsZSAtIHt7IHVzZXIubmFtZSB9fTwvcGFnZS10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDx1aS1idXR0b24ga2V5PVwiZ28tYmFjay1idG5cIiA6dG89XCJ7IG5hbWU6ICd1c2VycycgfVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5HbyBCYWNrPC91aS1idXR0b24+XG4gICAgICAgICAgICA8dWktYnV0dG9uIGtleT1cImVkaXQtdXNlci1idG5cIiA6dG89XCJ7IG5hbWU6ICd1c2Vycy5lZGl0JywgcGFyYW1zOiB7dXNlcjogdXNlci5pZH0gfVwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+RWRpdCBVc2VyPC91aS1idXR0b24+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJVc2VyIEluZm9ybWF0aW9uXCIgZGVzY3JpcHRpb249XCJHZW5lcmFsIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgdXNlci5cIj5cbiAgICAgICAgICAgIDxkbCBjbGFzcz1cImRldGFpbC1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGR0Pk5hbWU8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57eyB1c2VyLm5hbWUgfX08L2RkPlxuICAgICAgICAgICAgICAgIDxkdD5FbWFpbDwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPnt7IHVzZXIuZW1haWwgfX08L2RkPlxuICAgICAgICAgICAgICAgIDxkdD5Sb2xlPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3sgdXNlci5yb2xlcyA/IHVzZXIucm9sZXNbMF0ubGFiZWwgOiAnTG9hZGluZy4uLicgfX08L2RkPlxuICAgICAgICAgICAgICAgIDxkdD5TdGF0dXM8L2R0PlxuICAgICAgICAgICAgICAgIDxkZCBjbGFzcz1cImZsZXhcIj48dWktc3RhdHVzIDp2YWx1ZT1cInVzZXIuc3RhdHVzXCIgY2xhc3M9XCJtci0yXCI+PC91aS1zdGF0dXM+IHt7IHVzZXIuc3RhdHVzID8gJ0VuYWJsZWQnIDogJ0Rpc2FibGVkJyB9fTwvZGQ+XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiQWNjb3VudCBBY3Rpdml0eVwiIGRlc2NyaXB0aW9uPVwiSW5mb3JtYXRpb24gb24gdXNlciBhY2NvdW50IGFjdGl2aXR5IGFuZCBzdGF0cy5cIj5cbiAgICAgICAgICAgIDxkbCBjbGFzcz1cImRldGFpbC1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGR0PlJlZ2lzdGVyZWQ8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD48dWktZGF0ZXRpbWUgOnRpbWVzdGFtcD1cInVzZXIuY3JlYXRlZF9hdFwiPjwvdWktZGF0ZXRpbWU+PC9kZD5cblxuICAgICAgICAgICAgICAgIDxkdD5WZXJpZmllZDwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPlxuICAgICAgICAgICAgICAgICAgICA8dWktZGF0ZXRpbWUgOnRpbWVzdGFtcD1cInVzZXIuZW1haWxfdmVyaWZpZWRfYXRcIiB2LWlmPVwidXNlci52ZXJpZmllZFwiPjwvdWktZGF0ZXRpbWU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5Obzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2RkPlxuXG4gICAgICAgICAgICAgICAgPGR0Pkxhc3QgVXBkYXRlZDwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPjx1aS1kYXRldGltZSA6dGltZXN0YW1wPVwidXNlci51cGRhdGVkX2F0XCI+PC91aS1kYXRldGltZT48L2RkPlxuXG4gICAgICAgICAgICAgICAgPGR0Pkxhc3QgTG9naW48L2R0PlxuICAgICAgICAgICAgICAgIDxkZD5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWRhdGV0aW1lIDp0aW1lc3RhbXA9XCJ1c2VyLmxhc3RfbG9nZ2VkX2luX2F0XCIgdi1pZj1cInVzZXIubGFzdF9sb2dnZWRfaW5fYXRcIj48L3VpLWRhdGV0aW1lPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+TmV2ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kZD5cblxuICAgICAgICAgICAgICAgIDxkdD5JbnZhbGlkIExvZ2luIEF0dGVtcHRzPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3sgdXNlci5pbnZhbGlkX2xvZ2lucyB9fTwvZGQ+XG5cbiAgICAgICAgICAgICAgICA8ZHQgdi1pZj1cInVzZXIuaW52YWxpZGx5X2xvZ2dlZF9pbl9hdFwiPkxhc3QgSW52YWxpZCBMb2dpbjwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkIHYtaWY9XCJ1c2VyLmludmFsaWRseV9sb2dnZWRfaW5fYXRcIj48dWktZGF0ZXRpbWUgOnRpbWVzdGFtcD1cInVzZXIuaW52YWxpZGx5X2xvZ2dlZF9pbl9hdFwiPjwvdWktZGF0ZXRpbWU+PC9kZD5cblxuICAgICAgICAgICAgICAgIDxkdCB2LWlmPVwidXNlci5wYXNzd29yZF9jaGFuZ2VkX2F0XCI+UGFzc3dvcmQgQ2hhbmdlZDwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkIHYtaWY9XCJ1c2VyLnBhc3N3b3JkX2NoYW5nZWRfYXRcIj48dWktZGF0ZXRpbWUgOnRpbWVzdGFtcD1cInVzZXIucGFzc3dvcmRfY2hhbmdlZF9hdFwiPjwvdWktZGF0ZXRpbWU+PC9kZD5cbiAgICAgICAgICAgIDwvZGw+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJVc2VyIEFjdGl2aXR5IEZlZWRcIiBkZXNjcmlwdGlvbj1cIlNlZSB3aGF0IHRoaXMgdXNlciBoYXMgYmVlbiBkb2luZyBhcm91bmQgdGhlIHNpdGUuXCI+XG4gICAgICAgICAgICA8dWktdGFibGUgOmtleT1cIidhY3Rpdml0aWVzLScgKyB1c2VyLmlkXCIgY2xhc3M9XCJhY3Rpdml0aWVzLXRhYmxlXCIgaWQ9XCJhY3Rpdml0aWVzXCIgOmVuZHBvaW50PVwiZW5kcG9pbnRcIiBzb3J0LWJ5PVwiY3JlYXRlZF9hdFwiIHNvcnQtaW49XCJkZXNjXCIgOnBlci1wYWdlPVwiMTBcIiB2LWlmPVwidXNlci5pZFwiPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZGVzY3JpcHRpb25cIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItNCB3LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiB2LWlmPVwidGFibGUucmVjb3JkLnByb3BlcnRpZXMuaWNvblwiIDppY29uPVwiWydmYXMnLCB0YWJsZS5yZWNvcmQucHJvcGVydGllcy5pY29uXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gdi1lbHNlIGNsYXNzPVwiZmEteHMgZmEtZndcIiA6aWNvbj1cIlsnZmFzJywgJ2NpcmNsZSddXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRhYmxlLnJlY29yZC5kZXNjcmlwdGlvbiB9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiJy8nICsgdGFibGUucmVjb3JkLnByb3BlcnRpZXMubGlua1wiIHYtaWY9XCJ0YWJsZS5yZWNvcmQucHJvcGVydGllcy5saW5rXCIgY2xhc3M9XCJtbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gY2xhc3M9XCJmYS1mdyBmYS1zbVwiIDppY29uPVwiWydmYXMnLCAnbGluayddXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxpbmsgdG8gcmVsYXRlZCBwcm9wZXJ0eTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImNyZWF0ZWRfYXRcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWRhdGV0aW1lIDp0aW1lc3RhbXA9XCJ0YWJsZS5yZWNvcmQuY3JlYXRlZF9hdFwiPjwvdWktZGF0ZXRpbWU+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWktdGFibGU+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyOiAnYXV0aC9nZXRVc2VyJ1xuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIGVuZHBvaW50KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcvZGF0YXRhYmxlL3VzZXJzLycgKyB0aGlzLnVzZXIuaWQgKyAnL2FjdGl2aXRpZXMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogdGhpcy51c2VyLm5hbWUgfHwgJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZXI6IHt9LFxuICAgICAgICAgICAgICAgIHJvbGVzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGdldFVzZXJBbmRSb2xlcyh0by5wYXJhbXMudXNlciwgKGVycm9yLCB1c2VyLCByb2xlcywgZmllbGRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kcm91dGVyLnB1c2goJy91c2VycycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnRvU3RyaW5nKCksICdkYW5nZXInKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS51c2VyID0gdXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0ucm9sZXMgPSByb2xlc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBkZXN0cm95KGlkKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL3VzZXJzLycgKyBpZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ1VzZXIgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQuJywgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvdXNlcnMnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0VXNlckFuZFJvbGVzKHVzZXJJZCwgY2FsbGJhY2spIHtcbiAgICAgICAgYXhpb3MuYWxsKFtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9yb2xlcycpLFxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3VzZXJzLycgKyB1c2VySWQpLFxuICAgICAgICBdKVxuICAgICAgICAudGhlbihheGlvcy5zcHJlYWQoKHJvbGVzLCB1c2VyKSA9PiB7XG4gICAgICAgICAgICB1c2VyICA9IHVzZXIuZGF0YS5kYXRhXG4gICAgICAgICAgICByb2xlcyA9IHJvbGVzLmRhdGEuZGF0YVxuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCB1c2VyLCByb2xlcywge1xuICAgICAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHVzZXIuc3RhdHVzLFxuICAgICAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZXNbMF0ubmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pKVxuICAgIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidXNlci1wYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicGFnZS10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwidXNlcnNcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlVzZXIgUHJvZmlsZSAtIFwiICsgX3ZtLl9zKF92bS51c2VyLm5hbWUpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImdvLWJhY2stYnRuXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwidXNlcnNcIiB9LCB2YXJpYW50OiBcInNlY29uZGFyeVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiZWRpdC11c2VyLWJ0blwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRvOiB7IG5hbWU6IFwidXNlcnMuZWRpdFwiLCBwYXJhbXM6IHsgdXNlcjogX3ZtLnVzZXIuaWQgfSB9LFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiRWRpdCBVc2VyXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJVc2VyIEluZm9ybWF0aW9uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHZW5lcmFsIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgdXNlci5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGxcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWwtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5lbWFpbCkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGRcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c2VyLnJvbGVzID8gX3ZtLnVzZXIucm9sZXNbMF0ubGFiZWwgOiBcIkxvYWRpbmcuLi5cIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiU3RhdHVzXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGRcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidWktc3RhdHVzXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBfdm0udXNlci5zdGF0dXMgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0udXNlci5zdGF0dXMgPyBcIkVuYWJsZWRcIiA6IFwiRGlzYWJsZWRcIikpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkFjY291bnQgQWN0aXZpdHlcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluZm9ybWF0aW9uIG9uIHVzZXIgYWNjb3VudCBhY3Rpdml0eSBhbmQgc3RhdHMuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsLWxpc3RcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImR0XCIsIFtfdm0uX3YoXCJSZWdpc3RlcmVkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGRcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidWktZGF0ZXRpbWVcIiwgeyBhdHRyczogeyB0aW1lc3RhbXA6IF92bS51c2VyLmNyZWF0ZWRfYXQgfSB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIlZlcmlmaWVkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGRcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS51c2VyLnZlcmlmaWVkXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidWktZGF0ZXRpbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpbWVzdGFtcDogX3ZtLnVzZXIuZW1haWxfdmVyaWZpZWRfYXQgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihcIk5vXCIpXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImR0XCIsIFtfdm0uX3YoXCJMYXN0IFVwZGF0ZWRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkZFwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1aS1kYXRldGltZVwiLCB7IGF0dHJzOiB7IHRpbWVzdGFtcDogX3ZtLnVzZXIudXBkYXRlZF9hdCB9IH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiTGFzdCBMb2dpblwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRkXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0udXNlci5sYXN0X2xvZ2dlZF9pbl9hdFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInVpLWRhdGV0aW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aW1lc3RhbXA6IF92bS51c2VyLmxhc3RfbG9nZ2VkX2luX2F0IH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJOZXZlclwiKV0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiSW52YWxpZCBMb2dpbiBBdHRlbXB0c1wiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIuaW52YWxpZF9sb2dpbnMpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS51c2VyLmludmFsaWRseV9sb2dnZWRfaW5fYXRcbiAgICAgICAgICAgICAgPyBfYyhcImR0XCIsIFtfdm0uX3YoXCJMYXN0IEludmFsaWQgTG9naW5cIildKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS51c2VyLmludmFsaWRseV9sb2dnZWRfaW5fYXRcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGRcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1kYXRldGltZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGltZXN0YW1wOiBfdm0udXNlci5pbnZhbGlkbHlfbG9nZ2VkX2luX2F0IH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS51c2VyLnBhc3N3b3JkX2NoYW5nZWRfYXRcbiAgICAgICAgICAgICAgPyBfYyhcImR0XCIsIFtfdm0uX3YoXCJQYXNzd29yZCBDaGFuZ2VkXCIpXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0udXNlci5wYXNzd29yZF9jaGFuZ2VkX2F0XG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRkXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidWktZGF0ZXRpbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpbWVzdGFtcDogX3ZtLnVzZXIucGFzc3dvcmRfY2hhbmdlZF9hdCB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBBY3Rpdml0eSBGZWVkXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWUgd2hhdCB0aGlzIHVzZXIgaGFzIGJlZW4gZG9pbmcgYXJvdW5kIHRoZSBzaXRlLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnVzZXIuaWRcbiAgICAgICAgICAgID8gX2MoXCJ1aS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImFjdGl2aXRpZXMtXCIgKyBfdm0udXNlci5pZCxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpdml0aWVzLXRhYmxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcImFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiBfdm0uZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICBcInNvcnQtYnlcIjogXCJjcmVhdGVkX2F0XCIsXG4gICAgICAgICAgICAgICAgICBcInNvcnQtaW5cIjogXCJkZXNjXCIsXG4gICAgICAgICAgICAgICAgICBcInBlci1wYWdlXCI6IDEwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTQgdy0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnJlY29yZC5wcm9wZXJ0aWVzLmljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnJlY29yZC5wcm9wZXJ0aWVzLmljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEteHMgZmEtZndcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjaXJjbGVcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0YWJsZS5yZWNvcmQuZGVzY3JpcHRpb24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5yZWNvcmQucHJvcGVydGllcy5saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogXCIvXCIgKyB0YWJsZS5yZWNvcmQucHJvcGVydGllcy5saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgZmEtc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJsaW5rXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTGluayB0byByZWxhdGVkIHByb3BlcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNyZWF0ZWRfYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWktZGF0ZXRpbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpbWVzdGFtcDogdGFibGUucmVjb3JkLmNyZWF0ZWRfYXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIDM4MDExNjM1NjZcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzkwOTMxZTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbWFuZGEvU2l0ZXMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc5MDkzMWU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc5MDkzMWU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc5MDkzMWU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTA5MzFlNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3OTA5MzFlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJzL1Nob3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTA5MzFlNiZcIiJdLCJzb3VyY2VSb290IjoiIn0=