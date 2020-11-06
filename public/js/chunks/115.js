(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Permissions.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Permissions.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: 'Permissions'
      };
    }
  },
  data: function data() {
    return {
      endpoint: '/datatable/permissions'
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Permissions.vue?vue&type=template&id=7e089b8b&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Permissions.vue?vue&type=template&id=7e089b8b& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    { staticClass: "permissions-page" },
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [_c("page-title", { attrs: { icon: "key" } }, [_vm._v("Permissions")])],
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
                key: "permissions",
                staticClass: "permissions-table",
                attrs: {
                  id: "permissions",
                  endpoint: _vm.endpoint,
                  "sort-by": "name",
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
                      return [_c("code", [_vm._v(_vm._s(table.record.name))])]
                    }
                  },
                  {
                    key: "description",
                    fn: function(table) {
                      return [
                        _c("p", [_vm._v(_vm._s(table.record.description))])
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Permissions.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/Permissions.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Permissions_vue_vue_type_template_id_7e089b8b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Permissions.vue?vue&type=template&id=7e089b8b& */ "./resources/js/pages/Permissions.vue?vue&type=template&id=7e089b8b&");
/* harmony import */ var _Permissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Permissions.vue?vue&type=script&lang=js& */ "./resources/js/pages/Permissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Permissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Permissions_vue_vue_type_template_id_7e089b8b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Permissions_vue_vue_type_template_id_7e089b8b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Permissions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Permissions.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Permissions.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Permissions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Permissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Permissions.vue?vue&type=template&id=7e089b8b&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Permissions.vue?vue&type=template&id=7e089b8b& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_template_id_7e089b8b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Permissions.vue?vue&type=template&id=7e089b8b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Permissions.vue?vue&type=template&id=7e089b8b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_template_id_7e089b8b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_template_id_7e089b8b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1Blcm1pc3Npb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUGVybWlzc2lvbnMudnVlP2E3NTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Blcm1pc3Npb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUGVybWlzc2lvbnMudnVlPzlkY2QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Blcm1pc3Npb25zLnZ1ZT8wMjJlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFiQSxHOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxrQ0FBa0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGNBQWMsRUFBRTtBQUNsQywyQkFBMkIsU0FBUyxjQUFjLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUFBO0FBQUE7QUFBQTtBQUEwRjtBQUMzQjtBQUNMOzs7QUFHMUQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwrRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsdVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy8xMTUuanM/aWQ9NDI4NmIwNzY0NzAzZDAzMWZhMTgiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInBlcm1pc3Npb25zLXBhZ2VcIj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8cGFnZS10aXRsZSBpY29uPVwia2V5XCI+UGVybWlzc2lvbnM8L3BhZ2UtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDx1aS1jYXJkPlxuICAgICAgICAgICAgPHVpLWNhcmQtYm9keT5cbiAgICAgICAgICAgICAgICA8dWktdGFibGUga2V5PVwicGVybWlzc2lvbnNcIiBjbGFzcz1cInBlcm1pc3Npb25zLXRhYmxlXCIgaWQ9XCJwZXJtaXNzaW9uc1wiIDplbmRwb2ludD1cImVuZHBvaW50XCIgc29ydC1ieT1cIm5hbWVcIiBuby1hY3Rpb25zIHNob3ctcGFnZS1zdGF0dXMgc2hvdy1wYWdlLW51bWJlcnMgc2hvdy1wYWdlLW5hdiBzaG93LXBhZ2UtZW5kcz5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuYW1lXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57eyB0YWJsZS5yZWNvcmQubmFtZSB9fTwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImRlc2NyaXB0aW9uXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57eyB0YWJsZS5yZWNvcmQuZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC91aS10YWJsZT5cbiAgICAgICAgICAgIDwvdWktY2FyZC1ib2R5PlxuICAgICAgICA8L3VpLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiAnUGVybWlzc2lvbnMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnL2RhdGF0YWJsZS9wZXJtaXNzaW9ucycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBlcm1pc3Npb25zLXBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJrZXlcIiB9IH0sIFtfdm0uX3YoXCJQZXJtaXNzaW9uc1wiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ1aS1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWktY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidWktdGFibGVcIiwge1xuICAgICAgICAgICAgICAgIGtleTogXCJwZXJtaXNzaW9uc1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBlcm1pc3Npb25zLXRhYmxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcInBlcm1pc3Npb25zXCIsXG4gICAgICAgICAgICAgICAgICBlbmRwb2ludDogX3ZtLmVuZHBvaW50LFxuICAgICAgICAgICAgICAgICAgXCJzb3J0LWJ5XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgXCJuby1hY3Rpb25zXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBcInNob3ctcGFnZS1zdGF0dXNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIFwic2hvdy1wYWdlLW51bWJlcnNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIFwic2hvdy1wYWdlLW5hdlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgXCJzaG93LXBhZ2UtZW5kc1wiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfYyhcImNvZGVcIiwgW192bS5fdihfdm0uX3ModGFibGUucmVjb3JkLm5hbWUpKV0pXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyh0YWJsZS5yZWNvcmQuZGVzY3JpcHRpb24pKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Blcm1pc3Npb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTA4OWI4YiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QZXJtaXNzaW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Blcm1pc3Npb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2UwODliOGInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2UwODliOGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2UwODliOGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Blcm1pc3Npb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTA4OWI4YiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZTA4OWI4YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1Blcm1pc3Npb25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVybWlzc2lvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Blcm1pc3Npb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZXJtaXNzaW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2UwODliOGImXCIiXSwic291cmNlUm9vdCI6IiJ9