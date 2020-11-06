(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1N0eWxlZ3VpZGUvVGFibGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvU3R5bGVndWlkZS9UYWJsZXMudnVlPzEzYWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1N0eWxlZ3VpZGUvVGFibGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvU3R5bGVndWlkZS9UYWJsZXMudnVlP2YzYTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1N0eWxlZ3VpZGUvVGFibGVzLnZ1ZT8yOTBkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0E7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREEsRzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssMkJBQTJCO0FBQ2hDO0FBQ0EsNEJBQTRCLFNBQVMsa0JBQWtCLEVBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFDM0I7QUFDTDs7O0FBR3JEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTRMLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvMTIyLmpzP2lkPWRhMzNkODRlODM1ZmY4N2Y2YmI2Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx1aS1jYXJkIGNsYXNzPVwic2ctdGFibGVzXCI+XG4gICAgICAgIDx1aS1jYXJkLWhlYWRlciB0aXRsZT1cIlRhYmxlc1wiPjwvdWktY2FyZC1oZWFkZXI+XG5cbiAgICAgICAgPHVpLWNhcmQtYm9keT5cbiAgICAgICAgICAgIDx1aS10YWJsZSBpZD1cInBlcm1pc3Npb25zXCIgXG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ9XCIvZGF0YXRhYmxlL3Blcm1pc3Npb25zXCIgXG4gICAgICAgICAgICAgICAgc29ydC1ieT1cIm5hbWVcIiBcbiAgICAgICAgICAgICAgICA6cGVyLXBhZ2U9XCIxMFwiIFxuICAgICAgICAgICAgICAgIG5vLWFjdGlvbnMgXG4gICAgICAgICAgICAgICAga2V5PVwicGVybWlzc2lvbnNfdGFibGVcIlxuICAgICAgICAgICAgICAgIHNob3dQYWdlTnVtYmVyc1xuICAgICAgICAgICAgICAgIHNob3dQYWdlTmF2XG4gICAgICAgICAgICAgICAgc2hvd1BhZ2VFbmRzXG4gICAgICAgICAgICAgICAgc2hvd1BhZ2VTdGF0dXM+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuYW1lXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjb2RlPnt7IHRhYmxlLnJlY29yZC5uYW1lIH19PC9jb2RlPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImRlc2NyaXB0aW9uXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHRhYmxlLnJlY29yZC5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC91aS10YWJsZT5cbiAgICAgICAgPC91aS1jYXJkLWJvZHk+XG4gICAgPC91aS1jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBlbmRwb2ludCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy9kYXRhdGFibGUvdXNlcnMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidWktY2FyZFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwic2ctdGFibGVzXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInVpLWNhcmQtaGVhZGVyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiVGFibGVzXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ1aS1jYXJkLWJvZHlcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktdGFibGVcIiwge1xuICAgICAgICAgICAga2V5OiBcInBlcm1pc3Npb25zX3RhYmxlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJwZXJtaXNzaW9uc1wiLFxuICAgICAgICAgICAgICBlbmRwb2ludDogXCIvZGF0YXRhYmxlL3Blcm1pc3Npb25zXCIsXG4gICAgICAgICAgICAgIFwic29ydC1ieVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgXCJwZXItcGFnZVwiOiAxMCxcbiAgICAgICAgICAgICAgXCJuby1hY3Rpb25zXCI6IFwiXCIsXG4gICAgICAgICAgICAgIHNob3dQYWdlTnVtYmVyczogXCJcIixcbiAgICAgICAgICAgICAgc2hvd1BhZ2VOYXY6IFwiXCIsXG4gICAgICAgICAgICAgIHNob3dQYWdlRW5kczogXCJcIixcbiAgICAgICAgICAgICAgc2hvd1BhZ2VTdGF0dXM6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW19jKFwiY29kZVwiLCBbX3ZtLl92KF92bS5fcyh0YWJsZS5yZWNvcmQubmFtZSkpXSldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW19jKFwicFwiLCBbX3ZtLl92KF92bS5fcyh0YWJsZS5yZWNvcmQuZGVzY3JpcHRpb24pKV0pXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RhYmxlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDBmNjUzMjAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFibGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFibGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDBmNjUzMjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDBmNjUzMjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDBmNjUzMjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RhYmxlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDBmNjUzMjAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDBmNjUzMjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9TdHlsZWd1aWRlL1RhYmxlcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQwZjY1MzIwJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==