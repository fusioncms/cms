(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_components_Fieldtypes_Radio_Field_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'radio-fieldtype',
  mixins: [_mixins_fieldtypes_field__WEBPACK_IMPORTED_MODULE_0__.default]
});

/***/ }),

/***/ "./resources/js/mixins/fieldtypes/field.js":
/*!*************************************************!*\
  !*** ./resources/js/mixins/fieldtypes/field.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    hasError: function hasError(handle) {
      return this.errors && this.errors.has(handle);
    },
    errorMessage: function errorMessage(handle) {
      return this.hasError(handle) ? this.errors.get(handle) : '';
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Radio/Field.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Radio/Field.vue ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Field_vue_vue_type_template_id_a486defe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=a486defe& */ "./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=template&id=a486defe&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Field_vue_vue_type_template_id_a486defe___WEBPACK_IMPORTED_MODULE_0__.render,
  _Field_vue_vue_type_template_id_a486defe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Radio/Field.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=template&id=a486defe&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=template&id=a486defe& ***!
  \*******************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=template&id=a486defe& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=template&id=a486defe& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_a486defe___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_a486defe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_a486defe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=template&id=a486defe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=template&id=a486defe&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=template&id=a486defe&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Radio/Field.vue?vue&type=template&id=a486defe& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ui-radio-group",
    {
      attrs: {
        label: _vm.field.name,
        help: _vm.field.help,
        inline: _vm.field.settings.display == "row",
        hasError: _vm.hasError(_vm.field.handle),
        errorMessage: _vm.errorMessage(_vm.field.handle)
      }
    },
    _vm._l(_vm.field.settings.options, function(option, index) {
      return _c(
        "ui-radio",
        {
          key: _vm.field.handle + "." + index,
          attrs: {
            id: _vm.field.handle + "." + index,
            name: _vm.field.handle,
            "native-value": option.value
          },
          model: {
            value: _vm.model,
            callback: function($$v) {
              _vm.model = $$v
            },
            expression: "model"
          }
        },
        [_vm._v("\n        " + _vm._s(option.label) + "\n    ")]
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9SYWRpby9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL21peGlucy9maWVsZHR5cGVzL2ZpZWxkLmpzIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvUmFkaW8vRmllbGQudnVlIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvUmFkaW8vRmllbGQudnVlP2Y4ZjQiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9SYWRpby9GaWVsZC52dWU/MWI5YyJdLCJuYW1lcyI6WyJwcm9wcyIsImZpZWxkIiwidHlwZSIsIk9iamVjdCIsInJlcXVpcmVkIiwidmFsdWUiLCJlcnJvcnMiLCJjb21wdXRlZCIsIm1vZGVsIiwiZ2V0Iiwic2V0IiwiJGVtaXQiLCJtZXRob2RzIiwiaGFzRXJyb3IiLCJoYW5kbGUiLCJoYXMiLCJlcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBRUE7QUFDQSx5QkFEQTtBQUdBO0FBSEEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQSxpRUFBZTtBQUNYQSxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFFO0FBQ0hDLFVBQUksRUFBRUMsTUFESDtBQUVIQyxjQUFRLEVBQUU7QUFGUCxLQURKO0FBTUhDLFNBQUssRUFBRTtBQUNIRCxjQUFRLEVBQUUsS0FEUDtBQUVILGlCQUFTO0FBRk4sS0FOSjtBQVdIRSxVQUFNLEVBQUU7QUFDSkosVUFBSSxFQUFFQyxNQURGO0FBRUpDLGNBQVEsRUFBRSxLQUZOO0FBR0osaUJBQVMsb0JBQU0sQ0FBRTtBQUhiO0FBWEwsR0FESTtBQW1CWEcsVUFBUSxFQUFFO0FBQ05DLFNBQUssRUFBRTtBQUNIQyxTQURHLGlCQUNHO0FBQ0YsZUFBTyxLQUFLSixLQUFaO0FBQ0gsT0FIRTtBQUtISyxTQUxHLGVBS0NMLEtBTEQsRUFLUTtBQUNQLGFBQUtNLEtBQUwsQ0FBVyxPQUFYLEVBQW9CTixLQUFwQjtBQUNIO0FBUEU7QUFERCxHQW5CQztBQStCWE8sU0FBTyxFQUFFO0FBQ0xDLFlBREssb0JBQ0lDLE1BREosRUFDWTtBQUNiLGFBQU8sS0FBS1IsTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWVMsR0FBWixDQUFnQkQsTUFBaEIsQ0FBdEI7QUFDSCxLQUhJO0FBS0xFLGdCQUxLLHdCQUtRRixNQUxSLEVBS2dCO0FBQ2pCLGFBQU8sS0FBS0QsUUFBTCxDQUFjQyxNQUFkLElBQXdCLEtBQUtSLE1BQUwsQ0FBWUcsR0FBWixDQUFnQkssTUFBaEIsQ0FBeEIsR0FBa0QsRUFBekQ7QUFDSDtBQVBJO0FBL0JFLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSx3RUFBTTtBQUNSLEVBQUUsNkVBQU07QUFDUixFQUFFLHNGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDNE0sQ0FBQyxpRUFBZSx1TUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19SYWRpb19GaWVsZF92dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHVpLXJhZGlvLWdyb3VwXG4gICAgICAgIDpsYWJlbD1cImZpZWxkLm5hbWVcIlxuICAgICAgICA6aGVscD1cImZpZWxkLmhlbHBcIlxuICAgICAgICA6aW5saW5lPVwiZmllbGQuc2V0dGluZ3MuZGlzcGxheSA9PSAncm93J1wiXG4gICAgICAgIDpoYXNFcnJvcj1cImhhc0Vycm9yKGZpZWxkLmhhbmRsZSlcIlxuICAgICAgICA6ZXJyb3JNZXNzYWdlPVwiZXJyb3JNZXNzYWdlKGZpZWxkLmhhbmRsZSlcIj5cblxuICAgICAgICA8dWktcmFkaW9cbiAgICAgICAgICAgIHYtZm9yPVwiKG9wdGlvbiwgaW5kZXgpIGluIGZpZWxkLnNldHRpbmdzLm9wdGlvbnNcIlxuICAgICAgICAgICAgOmtleT1cImAke2ZpZWxkLmhhbmRsZX0uJHtpbmRleH1gXCJcbiAgICAgICAgICAgIDppZD1cImAke2ZpZWxkLmhhbmRsZX0uJHtpbmRleH1gXCJcbiAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgIDpuYXRpdmUtdmFsdWU9XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGVsXCI+XG4gICAgICAgICAgICB7e29wdGlvbi5sYWJlbH19XG4gICAgICAgIDwvdWktcmFkaW8+XG4gICAgPC91aS1yYWRpby1ncm91cD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEZpZWxkTWl4aW4gZnJvbSAnQC9taXhpbnMvZmllbGR0eXBlcy9maWVsZCdcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdyYWRpby1maWVsZHR5cGUnLFxuXG4gICAgICAgIG1peGluczogW0ZpZWxkTWl4aW5dXG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7fVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoYXNFcnJvcihoYW5kbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9ycy5oYXMoaGFuZGxlKVxuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yTWVzc2FnZShoYW5kbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhc0Vycm9yKGhhbmRsZSkgPyB0aGlzLmVycm9ycy5nZXQoaGFuZGxlKSA6ICcnXG4gICAgICAgIH1cbiAgICB9LFxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE0ODZkZWZlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhNDg2ZGVmZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhNDg2ZGVmZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhNDg2ZGVmZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE0ODZkZWZlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E0ODZkZWZlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1JhZGlvL0ZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidWktcmFkaW8tZ3JvdXBcIixcbiAgICB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBsYWJlbDogX3ZtLmZpZWxkLm5hbWUsXG4gICAgICAgIGhlbHA6IF92bS5maWVsZC5oZWxwLFxuICAgICAgICBpbmxpbmU6IF92bS5maWVsZC5zZXR0aW5ncy5kaXNwbGF5ID09IFwicm93XCIsXG4gICAgICAgIGhhc0Vycm9yOiBfdm0uaGFzRXJyb3IoX3ZtLmZpZWxkLmhhbmRsZSksXG4gICAgICAgIGVycm9yTWVzc2FnZTogX3ZtLmVycm9yTWVzc2FnZShfdm0uZmllbGQuaGFuZGxlKVxuICAgICAgfVxuICAgIH0sXG4gICAgX3ZtLl9sKF92bS5maWVsZC5zZXR0aW5ncy5vcHRpb25zLCBmdW5jdGlvbihvcHRpb24sIGluZGV4KSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwidWktcmFkaW9cIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogX3ZtLmZpZWxkLmhhbmRsZSArIFwiLlwiICsgaW5kZXgsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBfdm0uZmllbGQuaGFuZGxlICsgXCIuXCIgKyBpbmRleCxcbiAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUsXG4gICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiBvcHRpb24udmFsdWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGVsLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0ubW9kZWwgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGVsXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKG9wdGlvbi5sYWJlbCkgKyBcIlxcbiAgICBcIildXG4gICAgICApXG4gICAgfSksXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==