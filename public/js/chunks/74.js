(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/WYSIWYG/Field.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/WYSIWYG/Field.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_fieldtypes_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/fieldtypes/field */ "./resources/js/mixins/fieldtypes/field.js");
//
//
//
//
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
  name: 'wysiwyg-fieldtype',
  mixins: [_mixins_fieldtypes_field__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/WYSIWYG/Field.vue?vue&type=template&id=19174b53&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/WYSIWYG/Field.vue?vue&type=template&id=19174b53& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("ui-ckeditor-group", {
    attrs: {
      name: _vm.field.handle,
      label: _vm.field.name,
      help: _vm.field.help,
      placeholder: _vm.field.settings.placeholder,
      value: _vm.value,
      "has-error": _vm.hasError,
      "error-message": _vm.errorMessage
    },
    on: {
      input: function($event) {
        return _vm.$emit("input", $event)
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/WYSIWYG/Field.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/WYSIWYG/Field.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_19174b53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=19174b53& */ "./resources/js/components/Fieldtypes/WYSIWYG/Field.vue?vue&type=template&id=19174b53&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/WYSIWYG/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_19174b53___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_19174b53___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/WYSIWYG/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/WYSIWYG/Field.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/WYSIWYG/Field.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/WYSIWYG/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/WYSIWYG/Field.vue?vue&type=template&id=19174b53&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/WYSIWYG/Field.vue?vue&type=template&id=19174b53& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_19174b53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=19174b53& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/WYSIWYG/Field.vue?vue&type=template&id=19174b53&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_19174b53___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_19174b53___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/fieldtypes/field.js":
/*!*************************************************!*\
  !*** ./resources/js/mixins/fieldtypes/field.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": null
    },
    errors: {
      type: Object,
      required: false,
      "default": function _default() {}
    }
  },
  computed: {
    hasError: function hasError() {
      return this.errors && this.errors.has(this.field.handle);
    },
    errorMessage: function errorMessage() {
      return this.errors ? this.errors.get(this.field.handle) : '';
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9XWVNJV1lHL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1dZU0lXWUcvRmllbGQudnVlP2ZkYzEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9XWVNJV1lHL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1dZU0lXWUcvRmllbGQudnVlPzdlMGIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9XWVNJV1lHL0ZpZWxkLnZ1ZT9jYjNmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9taXhpbnMvZmllbGR0eXBlcy9maWVsZC5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImZpZWxkIiwidHlwZSIsIk9iamVjdCIsInJlcXVpcmVkIiwidmFsdWUiLCJlcnJvcnMiLCJjb21wdXRlZCIsImhhc0Vycm9yIiwiaGFzIiwiaGFuZGxlIiwiZXJyb3JNZXNzYWdlIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFFQTtBQUNBLDJCQURBO0FBR0E7QUFIQSxHOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFlO0FBQ1hBLE9BQUssRUFBRTtBQUNIQyxTQUFLLEVBQUU7QUFDSEMsVUFBSSxFQUFFQyxNQURIO0FBRUhDLGNBQVEsRUFBRTtBQUZQLEtBREo7QUFNSEMsU0FBSyxFQUFFO0FBQ0hELGNBQVEsRUFBRSxLQURQO0FBRUgsaUJBQVM7QUFGTixLQU5KO0FBV0hFLFVBQU0sRUFBRTtBQUNKSixVQUFJLEVBQUVDLE1BREY7QUFFSkMsY0FBUSxFQUFFLEtBRk47QUFHSixpQkFBUyxvQkFBTSxDQUFFO0FBSGI7QUFYTCxHQURJO0FBbUJYRyxVQUFRLEVBQUU7QUFDTkMsWUFETSxzQkFDSztBQUNQLGFBQU8sS0FBS0YsTUFBTCxJQUNBLEtBQUtBLE1BQUwsQ0FBWUcsR0FBWixDQUFnQixLQUFLUixLQUFMLENBQVdTLE1BQTNCLENBRFA7QUFFSCxLQUpLO0FBTU5DLGdCQU5NLDBCQU1TO0FBQ1gsYUFBTyxLQUFLTCxNQUFMLEdBQ0gsS0FBS0EsTUFBTCxDQUFZTSxHQUFaLENBQWdCLEtBQUtYLEtBQUwsQ0FBV1MsTUFBM0IsQ0FERyxHQUNrQyxFQUR6QztBQUVIO0FBVEs7QUFuQkMsQ0FBZixFIiwiZmlsZSI6ImpzL2NodW5rcy83NC5qcz9pZD1mZmNhNGI2N2U3M2I3NTY4ZmUwMSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8dWktY2tlZGl0b3ItZ3JvdXBcbiAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGVcIlxuICAgICAgICA6bGFiZWw9XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgOmhlbHA9XCJmaWVsZC5oZWxwXCJcbiAgICAgICAgOnBsYWNlaG9sZGVyPVwiZmllbGQuc2V0dGluZ3MucGxhY2Vob2xkZXJcIlxuICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgIDpoYXMtZXJyb3I9XCJoYXNFcnJvclwiXG4gICAgICAgIDplcnJvci1tZXNzYWdlPVwiZXJyb3JNZXNzYWdlXCJcbiAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50KVwiPlxuICAgIDwvdWktY2tlZGl0b3ItZ3JvdXA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBGaWVsZE1peGluIGZyb20gJ0AvbWl4aW5zL2ZpZWxkdHlwZXMvZmllbGQnXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICd3eXNpd3lnLWZpZWxkdHlwZScsXG5cbiAgICAgICAgbWl4aW5zOiBbRmllbGRNaXhpbl0sXG5cdH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ1aS1ja2VkaXRvci1ncm91cFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUsXG4gICAgICBsYWJlbDogX3ZtLmZpZWxkLm5hbWUsXG4gICAgICBoZWxwOiBfdm0uZmllbGQuaGVscCxcbiAgICAgIHBsYWNlaG9sZGVyOiBfdm0uZmllbGQuc2V0dGluZ3MucGxhY2Vob2xkZXIsXG4gICAgICB2YWx1ZTogX3ZtLnZhbHVlLFxuICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmhhc0Vycm9yLFxuICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5lcnJvck1lc3NhZ2VcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dFwiLCAkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5MTc0YjUzJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxOTE3NGI1MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxOTE3NGI1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxOTE3NGI1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5MTc0YjUzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE5MTc0YjUzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1dZU0lXWUcvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOTE3NGI1MyZcIiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHt9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaGFzRXJyb3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMgJiZcbiAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5oYXModGhpcy5maWVsZC5oYW5kbGUpXG4gICAgICAgIH0sXG5cbiAgICAgICAgZXJyb3JNZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzID9cbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5nZXQodGhpcy5maWVsZC5oYW5kbGUpIDogJydcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9