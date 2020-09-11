(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Styleguide/Tables.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Styleguide/Tables.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    endpoint: function endpoint() {
      return '/datatable/users';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Styleguide/Tables.vue?vue&type=template&id=40f65320&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Styleguide/Tables.vue?vue&type=template&id=40f65320& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    "ui-card",
    { staticClass: "sg-tables" },
    [
      _c("ui-card-header", { attrs: { title: "Tables" } }),
      _vm._v(" "),
      _c(
        "ui-card-body",
        [
          _c("ui-table", {
            key: "permissions_table",
            attrs: {
              id: "permissions",
              endpoint: "/datatable/permissions",
              "sort-by": "name",
              "per-page": 10,
              "no-actions": "",
              showPageNumbers: "",
              showPageNav: "",
              showPageEnds: "",
              showPageStatus: ""
            },
            scopedSlots: _vm._u([
              {
                key: "name",
                fn: function(table) {
                  return [_c("code", [_vm._v(_vm._s(table.record.name))])]
                }
              },
              {
                key: "description",
                fn: function(table) {
                  return [_c("p", [_vm._v(_vm._s(table.record.description))])]
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

/***/ "./resources/js/pages/Styleguide/Tables.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/Styleguide/Tables.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tables_vue_vue_type_template_id_40f65320___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tables.vue?vue&type=template&id=40f65320& */ "./resources/js/pages/Styleguide/Tables.vue?vue&type=template&id=40f65320&");
/* harmony import */ var _Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tables.vue?vue&type=script&lang=js& */ "./resources/js/pages/Styleguide/Tables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tables_vue_vue_type_template_id_40f65320___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tables_vue_vue_type_template_id_40f65320___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Styleguide/Tables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Styleguide/Tables.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Styleguide/Tables.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Styleguide/Tables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Styleguide/Tables.vue?vue&type=template&id=40f65320&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Styleguide/Tables.vue?vue&type=template&id=40f65320& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_40f65320___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tables.vue?vue&type=template&id=40f65320& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Styleguide/Tables.vue?vue&type=template&id=40f65320&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_40f65320___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_40f65320___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1N0eWxlZ3VpZGUvVGFibGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvU3R5bGVndWlkZS9UYWJsZXMudnVlPzEzYWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1N0eWxlZ3VpZGUvVGFibGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvU3R5bGVndWlkZS9UYWJsZXMudnVlP2YzYTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1N0eWxlZ3VpZGUvVGFibGVzLnZ1ZT8yOTBkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0E7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREEsRzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssMkJBQTJCO0FBQ2hDO0FBQ0EsNEJBQTRCLFNBQVMsa0JBQWtCLEVBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFDM0I7QUFDTDs7O0FBR3JEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTRMLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvOTguanM/aWQ9NTRjYmFhOGEzODM0ZWExMGU5MmIiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHVpLWNhcmQgY2xhc3M9XCJzZy10YWJsZXNcIj5cbiAgICAgICAgPHVpLWNhcmQtaGVhZGVyIHRpdGxlPVwiVGFibGVzXCI+PC91aS1jYXJkLWhlYWRlcj5cblxuICAgICAgICA8dWktY2FyZC1ib2R5PlxuICAgICAgICAgICAgPHVpLXRhYmxlIGlkPVwicGVybWlzc2lvbnNcIiBcbiAgICAgICAgICAgICAgICBlbmRwb2ludD1cIi9kYXRhdGFibGUvcGVybWlzc2lvbnNcIiBcbiAgICAgICAgICAgICAgICBzb3J0LWJ5PVwibmFtZVwiIFxuICAgICAgICAgICAgICAgIDpwZXItcGFnZT1cIjEwXCIgXG4gICAgICAgICAgICAgICAgbm8tYWN0aW9ucyBcbiAgICAgICAgICAgICAgICBrZXk9XCJwZXJtaXNzaW9uc190YWJsZVwiXG4gICAgICAgICAgICAgICAgc2hvd1BhZ2VOdW1iZXJzXG4gICAgICAgICAgICAgICAgc2hvd1BhZ2VOYXZcbiAgICAgICAgICAgICAgICBzaG93UGFnZUVuZHNcbiAgICAgICAgICAgICAgICBzaG93UGFnZVN0YXR1cz5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5hbWVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNvZGU+e3sgdGFibGUucmVjb3JkLm5hbWUgfX08L2NvZGU+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZGVzY3JpcHRpb25cIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgdGFibGUucmVjb3JkLmRlc2NyaXB0aW9uIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3VpLXRhYmxlPlxuICAgICAgICA8L3VpLWNhcmQtYm9keT5cbiAgICA8L3VpLWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGVuZHBvaW50KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnL2RhdGF0YWJsZS91c2VycydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ1aS1jYXJkXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJzZy10YWJsZXNcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidWktY2FyZC1oZWFkZXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJUYWJsZXNcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInVpLWNhcmQtYm9keVwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ1aS10YWJsZVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwicGVybWlzc2lvbnNfdGFibGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcInBlcm1pc3Npb25zXCIsXG4gICAgICAgICAgICAgIGVuZHBvaW50OiBcIi9kYXRhdGFibGUvcGVybWlzc2lvbnNcIixcbiAgICAgICAgICAgICAgXCJzb3J0LWJ5XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICBcInBlci1wYWdlXCI6IDEwLFxuICAgICAgICAgICAgICBcIm5vLWFjdGlvbnNcIjogXCJcIixcbiAgICAgICAgICAgICAgc2hvd1BhZ2VOdW1iZXJzOiBcIlwiLFxuICAgICAgICAgICAgICBzaG93UGFnZU5hdjogXCJcIixcbiAgICAgICAgICAgICAgc2hvd1BhZ2VFbmRzOiBcIlwiLFxuICAgICAgICAgICAgICBzaG93UGFnZVN0YXR1czogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoXCJjb2RlXCIsIFtfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC5uYW1lKSldKV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC5kZXNjcmlwdGlvbikpXSldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFibGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MGY2NTMyMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYWJsZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UYWJsZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0MGY2NTMyMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MGY2NTMyMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MGY2NTMyMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGFibGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MGY2NTMyMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MGY2NTMyMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1N0eWxlZ3VpZGUvVGFibGVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDBmNjUzMjAmXCIiXSwic291cmNlUm9vdCI6IiJ9