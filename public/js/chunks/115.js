(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
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
          _c("page-title", { attrs: { icon: "users" } }, [
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
              key: "view-all-btn",
              attrs: { to: { name: "roles" }, variant: "secondary" }
            },
            [_vm._v("Go Back")]
          ),
          _vm._v(" "),
          _vm.role.id
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
        {
          attrs: {
            title: "General Information",
            description: "General information about this user role."
          }
        },
        [
          _c("dl", { staticClass: "detail-list" }, [
            _c("dt", [_vm._v("Name")]),
            _vm._v(" "),
            _c("dd", [_vm._v(_vm._s(_vm.role.label))]),
            _vm._v(" "),
            _c("dt", [_vm._v("Description")]),
            _vm._v(" "),
            _c("dd", [_vm._v(_vm._s(_vm.role.description))]),
            _vm._v(" "),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaG93LnZ1ZT85ODYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Sb2xlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hvdy52dWU/YzIwMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUm9sZXMvU2hvdy52dWU/YzY2MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQWJBO0FBZUEsa0JBZkEsNEJBZUEsRUFmQSxFQWVBLElBZkEsRUFlQSxJQWZBLEVBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsU0FKQTtBQUtBLE9BTkEsTUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFNBSkE7QUFLQTtBQUNBLEtBZEE7QUFlQTtBQS9CQTtBQWtDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLEdBSkEsV0FJQTtBQUNBO0FBQ0EsR0FOQTtBQU9BLEM7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDRCQUE0QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDO0FBQ0EsNEJBQTRCLFNBQVMsZ0JBQWdCLEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxnQkFBZ0IsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU0sZ0JBQWdCO0FBQzVDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOEJBQThCLG9CQUFvQixFQUFFO0FBQzdFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQiw2QkFBNkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUE7QUFBQTtBQUEwTCxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzExNS5qcz9pZD0wNTg4ZjdlODc3MGMyYzc0MGYxOSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicm9sZXMtcGFnZVwiPlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxwYWdlLXRpdGxlIGljb249XCJ1c2Vyc1wiPlJvbGUgLSB7eyByb2xlLmxhYmVsIH19PC9wYWdlLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHVpLWJ1dHRvbiBrZXk9XCJ2aWV3LWFsbC1idG5cIiA6dG89XCJ7IG5hbWU6ICdyb2xlcycgfVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5HbyBCYWNrPC91aS1idXR0b24+XG4gICAgICAgICAgICA8dWktYnV0dG9uIHYtaWY9XCJyb2xlLmlkXCIga2V5PVwiZWRpdC1yb2xlLWJ0blwiIDp0bz1cInsgbmFtZTogJ3JvbGVzLmVkaXQnLCBwYXJhbXM6IHtyb2xlOiByb2xlLmlkfSB9XCIgdmFyaWFudD1cInByaW1hcnlcIj5FZGl0IFJvbGU8L3VpLWJ1dHRvbj5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIkdlbmVyYWwgSW5mb3JtYXRpb25cIiBkZXNjcmlwdGlvbj1cIkdlbmVyYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyB1c2VyIHJvbGUuXCI+XG4gICAgICAgICAgICA8ZGwgY2xhc3M9XCJkZXRhaWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkdD5OYW1lPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3sgcm9sZS5sYWJlbCB9fTwvZGQ+XG4gICAgICAgICAgICAgICAgPGR0PkRlc2NyaXB0aW9uPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3sgcm9sZS5kZXNjcmlwdGlvbiB9fTwvZGQ+XG4gICAgICAgICAgICAgICAgPGR0PkNyZWF0ZWQ8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57eyAkbW9tZW50KHJvbGUuY3JlYXRlZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgfX08L2RkPlxuICAgICAgICAgICAgICAgIDxkdD5MYXN0IFVwZGF0ZWQ8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57eyAkbW9tZW50KHJvbGUudXBkYXRlZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgfX08L2RkPlxuICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPCEtLSA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiUGVybWlzc2lvbnNcIiBkZXNjcmlwdGlvbj1cIkEgbGlzdCBvZiBwZXJtaXNzaW9ucyB0aGlzIHJvbGUgaGFzLlwiPlxuICAgICAgICAgICAgPHVpLXRhYmxlIHJlZj1cInBlcm1pc3Npb25zXCIgaWQ9XCJwZXJtaXNzaW9uc1wiIGVuZHBvaW50PVwiL2RhdGF0YWJsZS9wZXJtaXNzaW9uc1wiIHNvcnQtYnk9XCJuYW1lXCIgbm8tYWN0aW9ucyBrZXk9XCJwZXJtaXNzaW9ucy10YWJsZVwiIHNob3ctcGFnZS1zdGF0dXMgc2hvdy1wYWdlLW51bWJlcnMgc2hvdy1wYWdlLW5hdiBzaG93LXBhZ2UtZW5kcz5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5hbWVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNvZGU+e3sgdGFibGUucmVjb3JkLm5hbWUgfX08L2NvZGU+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZGVzY3JpcHRpb25cIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgdGFibGUucmVjb3JkLmRlc2NyaXB0aW9uIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3VpLXRhYmxlPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD4gLS0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6IHRoaXMucm9sZS5sYWJlbCB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcm9sZToge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBnZXRSb2xlKHRvLnBhcmFtcy5yb2xlLCAoZXJyb3IsIHJvbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucHVzaCgnL3JvbGVzJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QoZXJyb3IudG9TdHJpbmcoKSwgJ2RhbmdlcicpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnJvbGUgPSByb2xlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRlbWl0KCd1cGRhdGVIZWFkJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRSb2xlKGlkLCBjYWxsYmFjaykge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvcm9sZXMvJyArIGlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJvbGUgPSByZXNwb25zZS5kYXRhLmRhdGFcblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcm9sZSlcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignVGhlIHJlcXVlc3RlZCByb2xlIGNvdWxkIG5vdCBiZSBmb3VuZCcpKVxuICAgICAgICB9KVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInJvbGVzLXBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJ1c2Vyc1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiUm9sZSAtIFwiICsgX3ZtLl9zKF92bS5yb2xlLmxhYmVsKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJ2aWV3LWFsbC1idG5cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJyb2xlc1wiIH0sIHZhcmlhbnQ6IFwic2Vjb25kYXJ5XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ucm9sZS5pZFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJlZGl0LXJvbGUtYnRuXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0bzogeyBuYW1lOiBcInJvbGVzLmVkaXRcIiwgcGFyYW1zOiB7IHJvbGU6IF92bS5yb2xlLmlkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFZGl0IFJvbGVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJHZW5lcmFsIEluZm9ybWF0aW9uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHZW5lcmFsIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgdXNlciByb2xlLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkbFwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC1saXN0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnJvbGUubGFiZWwpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIkRlc2NyaXB0aW9uXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucm9sZS5kZXNjcmlwdGlvbikpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiQ3JlYXRlZFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGRcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgX3ZtLiRtb21lbnQoX3ZtLnJvbGUuY3JlYXRlZF9hdCkuZm9ybWF0KFwiWS1NTS1ERCwgaGg6bW0gYVwiKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiTGFzdCBVcGRhdGVkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkZFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICBfdm0uJG1vbWVudChfdm0ucm9sZS51cGRhdGVkX2F0KS5mb3JtYXQoXCJZLU1NLURELCBoaDptbSBhXCIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGExNDYxZjgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbWFuZGEvU2l0ZXMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBhMTQ2MWY4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBhMTQ2MWY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBhMTQ2MWY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTE0NjFmOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwYTE0NjFmOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1JvbGVzL1Nob3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTE0NjFmOCZcIiJdLCJzb3VyY2VSb290IjoiIn0=