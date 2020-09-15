(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    currentUser: 'auth/getUser'
  })),
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
              key: "view-all-btn",
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
            _c("dd", [_vm._v(_vm._s(_vm.user.roles[0].label))]),
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
            _c("dd", [
              _vm._v(
                _vm._s(
                  _vm.$moment(_vm.user.created_at).format("Y-MM-DD, hh:mm a")
                )
              )
            ]),
            _vm._v(" "),
            _c("dt", [_vm._v("Verified")]),
            _vm._v(" "),
            _c("dd", [
              _vm._v(
                _vm._s(
                  _vm.user.verified
                    ? _vm
                        .$moment(_vm.user.email_verified_at)
                        .format("Y-MM-DD, hh:mm a")
                    : "No"
                )
              )
            ]),
            _vm._v(" "),
            _c("dt", [_vm._v("Last Updated")]),
            _vm._v(" "),
            _c("dd", [
              _vm._v(
                _vm._s(
                  _vm.$moment(_vm.user.updated_at).format("Y-MM-DD, hh:mm a")
                )
              )
            ]),
            _vm._v(" "),
            _c("dt", [_vm._v("Last Login")]),
            _vm._v(" "),
            _c("dd", [
              _vm._v(
                _vm._s(
                  _vm.user.last_logged_in_at
                    ? _vm
                        .$moment(_vm.user.last_logged_in_at)
                        .format("Y-MM-DD, hh:mm a")
                    : "Never"
                )
              )
            ]),
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
              ? _c("dd", [
                  _vm._v(
                    _vm._s(
                      _vm
                        .$moment(_vm.user.invalidly_logged_in_at)
                        .format("Y-MM-DD, hh:mm a")
                    )
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.user.password_changed_at
              ? _c("dt", [_vm._v("Password Changed")])
              : _vm._e(),
            _vm._v(" "),
            _vm.user.password_changed_at
              ? _c("dd", [
                  _vm._v(
                    _vm._s(
                      _vm
                        .$moment(_vm.user.password_changed_at)
                        .format("Y-MM-DD, hh:mm a")
                    )
                  )
                ])
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
        [_c("em", [_vm._v("Coming soon...")])]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2Vycy9TaG93LnZ1ZT81OThiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2Vycy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlcnMvU2hvdy52dWU/MjFkOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlcnMvU2hvdy52dWU/NTVhNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQTtBQUVBO0FBQ0EsOEJBQ0E7QUFDQTtBQURBLElBREEsQ0FEQTtBQU9BO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FQQTtBQWVBLE1BZkEsa0JBZUE7QUFDQTtBQUNBLGNBREE7QUFFQTtBQUZBO0FBSUEsR0FwQkE7QUFzQkEsa0JBdEJBLDRCQXNCQSxFQXRCQSxFQXNCQSxJQXRCQSxFQXNCQSxJQXRCQSxFQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxTQUpBO0FBS0EsT0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxTQUxBO0FBTUE7QUFDQSxLQWZBO0FBZ0JBLEdBdkNBO0FBeUNBO0FBQ0EsV0FEQSxtQkFDQSxFQURBLEVBQ0E7QUFBQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FKQTtBQUtBO0FBUEE7QUF6Q0E7QUFvREE7QUFDQSxhQUNBLHVCQURBLEVBRUEsaUNBRkEsR0FJQSxJQUpBLENBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQSxxQkFEQTtBQUVBLHVCQUZBO0FBR0EseUJBSEE7QUFJQSw4QkFKQTtBQUtBLGtCQUxBO0FBTUE7QUFOQTtBQVFBLEdBWkEsQ0FKQTtBQWlCQSxDOzs7Ozs7Ozs7Ozs7QUNoSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywyQkFBMkI7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGNBQWMsRUFBRTtBQUNsQztBQUNBLDRCQUE0QixTQUFTLGdCQUFnQixFQUFFO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsZ0JBQWdCLEVBQUU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNLGdCQUFnQjtBQUM1QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4QkFBOEIsb0JBQW9CLEVBQUU7QUFDekU7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQiw2QkFBNkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNCQUFzQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQiw2QkFBNkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2TUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy8xMTMuanM/aWQ9MTg4MDA2NmY0ZTJkODVmMTRkZGUiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInVzZXItcGFnZVwiPlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxwYWdlLXRpdGxlIGljb249XCJ1c2Vyc1wiPlVzZXIgUHJvZmlsZSAtIHt7IHVzZXIubmFtZSB9fTwvcGFnZS10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDx1aS1idXR0b24ga2V5PVwidmlldy1hbGwtYnRuXCIgOnRvPVwieyBuYW1lOiAndXNlcnMnIH1cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+R28gQmFjazwvdWktYnV0dG9uPlxuICAgICAgICAgICAgPHVpLWJ1dHRvbiBrZXk9XCJlZGl0LXVzZXItYnRuXCIgOnRvPVwieyBuYW1lOiAndXNlcnMuZWRpdCcsIHBhcmFtczoge3VzZXI6IHVzZXIuaWR9IH1cIiB2YXJpYW50PVwicHJpbWFyeVwiPkVkaXQgVXNlcjwvdWktYnV0dG9uPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiVXNlciBJbmZvcm1hdGlvblwiIGRlc2NyaXB0aW9uPVwiR2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIHVzZXIuXCI+XG4gICAgICAgICAgICA8ZGwgY2xhc3M9XCJkZXRhaWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkdD5OYW1lPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3sgdXNlci5uYW1lIH19PC9kZD5cbiAgICAgICAgICAgICAgICA8ZHQ+RW1haWw8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57eyB1c2VyLmVtYWlsIH19PC9kZD5cbiAgICAgICAgICAgICAgICA8ZHQ+Um9sZTwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPnt7IHVzZXIucm9sZXNbMF0ubGFiZWwgfX08L2RkPlxuICAgICAgICAgICAgICAgIDxkdD5TdGF0dXM8L2R0PlxuICAgICAgICAgICAgICAgIDxkZCBjbGFzcz1cImZsZXhcIj48dWktc3RhdHVzIDp2YWx1ZT1cInVzZXIuc3RhdHVzXCIgY2xhc3M9XCJtci0yXCI+PC91aS1zdGF0dXM+IHt7IHVzZXIuc3RhdHVzID8gJ0VuYWJsZWQnIDogJ0Rpc2FibGVkJyB9fTwvZGQ+XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiQWNjb3VudCBBY3Rpdml0eVwiIGRlc2NyaXB0aW9uPVwiSW5mb3JtYXRpb24gb24gdXNlciBhY2NvdW50IGFjdGl2aXR5IGFuZCBzdGF0cy5cIj5cbiAgICAgICAgICAgIDxkbCBjbGFzcz1cImRldGFpbC1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGR0PlJlZ2lzdGVyZWQ8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57eyAkbW9tZW50KHVzZXIuY3JlYXRlZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgfX08L2RkPlxuXG4gICAgICAgICAgICAgICAgPGR0PlZlcmlmaWVkPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3sgdXNlci52ZXJpZmllZCA/ICRtb21lbnQodXNlci5lbWFpbF92ZXJpZmllZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgOiAnTm8nIH19PC9kZD5cblxuICAgICAgICAgICAgICAgIDxkdD5MYXN0IFVwZGF0ZWQ8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57eyAkbW9tZW50KHVzZXIudXBkYXRlZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgfX08L2RkPlxuXG4gICAgICAgICAgICAgICAgPGR0Pkxhc3QgTG9naW48L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57eyB1c2VyLmxhc3RfbG9nZ2VkX2luX2F0ID8gJG1vbWVudCh1c2VyLmxhc3RfbG9nZ2VkX2luX2F0KS5mb3JtYXQoJ1ktTU0tREQsIGhoOm1tIGEnKSA6ICdOZXZlcicgfX08L2RkPlxuXG4gICAgICAgICAgICAgICAgPGR0PkludmFsaWQgTG9naW4gQXR0ZW1wdHM8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57eyB1c2VyLmludmFsaWRfbG9naW5zIH19PC9kZD5cblxuICAgICAgICAgICAgICAgIDxkdCB2LWlmPVwidXNlci5pbnZhbGlkbHlfbG9nZ2VkX2luX2F0XCI+TGFzdCBJbnZhbGlkIExvZ2luPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQgdi1pZj1cInVzZXIuaW52YWxpZGx5X2xvZ2dlZF9pbl9hdFwiPnt7ICRtb21lbnQodXNlci5pbnZhbGlkbHlfbG9nZ2VkX2luX2F0KS5mb3JtYXQoJ1ktTU0tREQsIGhoOm1tIGEnKSB9fTwvZGQ+XG5cbiAgICAgICAgICAgICAgICA8ZHQgdi1pZj1cInVzZXIucGFzc3dvcmRfY2hhbmdlZF9hdFwiPlBhc3N3b3JkIENoYW5nZWQ8L2R0PlxuICAgICAgICAgICAgICAgIDxkZCB2LWlmPVwidXNlci5wYXNzd29yZF9jaGFuZ2VkX2F0XCI+e3sgJG1vbWVudCh1c2VyLnBhc3N3b3JkX2NoYW5nZWRfYXQpLmZvcm1hdCgnWS1NTS1ERCwgaGg6bW0gYScpIH19PC9kZD5cbiAgICAgICAgICAgIDwvZGw+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJVc2VyIEFjdGl2aXR5IEZlZWRcIiBkZXNjcmlwdGlvbj1cIlNlZSB3aGF0IHRoaXMgdXNlciBoYXMgYmVlbiBkb2luZyBhcm91bmQgdGhlIHNpdGUuXCI+XG4gICAgICAgICAgICA8ZW0+Q29taW5nIHNvb24uLi48L2VtPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlcjogJ2F1dGgvZ2V0VXNlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6IHRoaXMudXNlci5uYW1lIHx8ICdMb2FkaW5nLi4uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1c2VyOiB7fSxcbiAgICAgICAgICAgICAgICByb2xlczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBnZXRVc2VyQW5kUm9sZXModG8ucGFyYW1zLnVzZXIsIChlcnJvciwgdXNlciwgcm9sZXMsIGZpZWxkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvdXNlcnMnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci50b1N0cmluZygpLCAnZGFuZ2VyJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0udXNlciA9IHVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnJvbGVzID0gcm9sZXNcblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJGVtaXQoJ3VwZGF0ZUhlYWQnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZGVzdHJveShpZCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSgnL2FwaS91c2Vycy8nICsgaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdVc2VyIHN1Y2Nlc3NmdWxseSBkZWxldGVkLicsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL3VzZXJzJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJBbmRSb2xlcyh1c2VySWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvcm9sZXMnKSxcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS91c2Vycy8nICsgdXNlcklkKSxcbiAgICAgICAgXSlcbiAgICAgICAgLnRoZW4oYXhpb3Muc3ByZWFkKChyb2xlcywgdXNlcikgPT4ge1xuICAgICAgICAgICAgdXNlciAgPSB1c2VyLmRhdGEuZGF0YVxuICAgICAgICAgICAgcm9sZXMgPSByb2xlcy5kYXRhLmRhdGFcblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgdXNlciwgcm9sZXMsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB1c2VyLnN0YXR1cyxcbiAgICAgICAgICAgICAgICByb2xlOiB1c2VyLnJvbGVzWzBdLm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJycsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSlcbiAgICB9XG48L3NjcmlwdD5cblxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidXNlci1wYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicGFnZS10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwidXNlcnNcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlVzZXIgUHJvZmlsZSAtIFwiICsgX3ZtLl9zKF92bS51c2VyLm5hbWUpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcInZpZXctYWxsLWJ0blwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcInVzZXJzXCIgfSwgdmFyaWFudDogXCJzZWNvbmRhcnlcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImVkaXQtdXNlci1idG5cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0bzogeyBuYW1lOiBcInVzZXJzLmVkaXRcIiwgcGFyYW1zOiB7IHVzZXI6IF92bS51c2VyLmlkIH0gfSxcbiAgICAgICAgICAgICAgICB2YXJpYW50OiBcInByaW1hcnlcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkVkaXQgVXNlclwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBJbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIHVzZXIuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsLWxpc3RcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImR0XCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5uYW1lKSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImR0XCIsIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIuZW1haWwpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIlJvbGVcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnJvbGVzWzBdLmxhYmVsKSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImR0XCIsIFtfdm0uX3YoXCJTdGF0dXNcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkZFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXhcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1aS1zdGF0dXNcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IF92bS51c2VyLnN0YXR1cyB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS51c2VyLnN0YXR1cyA/IFwiRW5hYmxlZFwiIDogXCJEaXNhYmxlZFwiKSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiQWNjb3VudCBBY3Rpdml0eVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSW5mb3JtYXRpb24gb24gdXNlciBhY2NvdW50IGFjdGl2aXR5IGFuZCBzdGF0cy5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGxcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWwtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIlJlZ2lzdGVyZWRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRkXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgIF92bS4kbW9tZW50KF92bS51c2VyLmNyZWF0ZWRfYXQpLmZvcm1hdChcIlktTU0tREQsIGhoOm1tIGFcIilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIlZlcmlmaWVkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkZFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICBfdm0udXNlci52ZXJpZmllZFxuICAgICAgICAgICAgICAgICAgICA/IF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgLiRtb21lbnQoX3ZtLnVzZXIuZW1haWxfdmVyaWZpZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWS1NTS1ERCwgaGg6bW0gYVwiKVxuICAgICAgICAgICAgICAgICAgICA6IFwiTm9cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiTGFzdCBVcGRhdGVkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkZFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICBfdm0uJG1vbWVudChfdm0udXNlci51cGRhdGVkX2F0KS5mb3JtYXQoXCJZLU1NLURELCBoaDptbSBhXCIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImR0XCIsIFtfdm0uX3YoXCJMYXN0IExvZ2luXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkZFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICBfdm0udXNlci5sYXN0X2xvZ2dlZF9pbl9hdFxuICAgICAgICAgICAgICAgICAgICA/IF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgLiRtb21lbnQoX3ZtLnVzZXIubGFzdF9sb2dnZWRfaW5fYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWS1NTS1ERCwgaGg6bW0gYVwiKVxuICAgICAgICAgICAgICAgICAgICA6IFwiTmV2ZXJcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiSW52YWxpZCBMb2dpbiBBdHRlbXB0c1wiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIuaW52YWxpZF9sb2dpbnMpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS51c2VyLmludmFsaWRseV9sb2dnZWRfaW5fYXRcbiAgICAgICAgICAgICAgPyBfYyhcImR0XCIsIFtfdm0uX3YoXCJMYXN0IEludmFsaWQgTG9naW5cIildKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS51c2VyLmludmFsaWRseV9sb2dnZWRfaW5fYXRcbiAgICAgICAgICAgICAgPyBfYyhcImRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgIF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgLiRtb21lbnQoX3ZtLnVzZXIuaW52YWxpZGx5X2xvZ2dlZF9pbl9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZLU1NLURELCBoaDptbSBhXCIpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS51c2VyLnBhc3N3b3JkX2NoYW5nZWRfYXRcbiAgICAgICAgICAgICAgPyBfYyhcImR0XCIsIFtfdm0uX3YoXCJQYXNzd29yZCBDaGFuZ2VkXCIpXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0udXNlci5wYXNzd29yZF9jaGFuZ2VkX2F0XG4gICAgICAgICAgICAgID8gX2MoXCJkZFwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KF92bS51c2VyLnBhc3N3b3JkX2NoYW5nZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWS1NTS1ERCwgaGg6bW0gYVwiKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBBY3Rpdml0eSBGZWVkXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWUgd2hhdCB0aGlzIHVzZXIgaGFzIGJlZW4gZG9pbmcgYXJvdW5kIHRoZSBzaXRlLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJlbVwiLCBbX3ZtLl92KFwiQ29taW5nIHNvb24uLi5cIildKV1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzkwOTMxZTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbWFuZGEvU2l0ZXMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc5MDkzMWU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc5MDkzMWU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc5MDkzMWU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTA5MzFlNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3OTA5MzFlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJzL1Nob3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTA5MzFlNiZcIiJdLCJzb3VyY2VSb290IjoiIn0=