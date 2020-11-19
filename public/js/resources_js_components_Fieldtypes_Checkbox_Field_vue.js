(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_components_Fieldtypes_Checkbox_Field_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  name: 'checkbox-fieldtype',
  mixins: [_mixins_fieldtypes_field__WEBPACK_IMPORTED_MODULE_0__.default],
  created: function created() {
    if (_.isEmpty(this.value)) {
      this.model = [];
    }
  }
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

/***/ "./resources/js/components/Fieldtypes/Checkbox/Field.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Checkbox/Field.vue ***!
  \***************************************************************/
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
/* harmony import */ var _Field_vue_vue_type_template_id_1b966923___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=1b966923& */ "./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=template&id=1b966923&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Field_vue_vue_type_template_id_1b966923___WEBPACK_IMPORTED_MODULE_0__.render,
  _Field_vue_vue_type_template_id_1b966923___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Checkbox/Field.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=template&id=1b966923&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=template&id=1b966923& ***!
  \**********************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=template&id=1b966923& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=template&id=1b966923& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_1b966923___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_1b966923___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_1b966923___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=template&id=1b966923& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=template&id=1b966923&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=template&id=1b966923&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Checkbox/Field.vue?vue&type=template&id=1b966923& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "ui-checkbox-group",
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
        "ui-checkbox",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9DaGVja2JveC9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL21peGlucy9maWVsZHR5cGVzL2ZpZWxkLmpzIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQ2hlY2tib3gvRmllbGQudnVlIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQ2hlY2tib3gvRmllbGQudnVlPzJmYjIiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9DaGVja2JveC9GaWVsZC52dWU/NmVkZCJdLCJuYW1lcyI6WyJwcm9wcyIsImZpZWxkIiwidHlwZSIsIk9iamVjdCIsInJlcXVpcmVkIiwidmFsdWUiLCJlcnJvcnMiLCJjb21wdXRlZCIsIm1vZGVsIiwiZ2V0Iiwic2V0IiwiJGVtaXQiLCJtZXRob2RzIiwiaGFzRXJyb3IiLCJoYW5kbGUiLCJoYXMiLCJlcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBRUE7QUFDQSw0QkFEQTtBQUdBLHlFQUhBO0FBS0EsU0FMQSxxQkFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQSxpRUFBZTtBQUNYQSxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFFO0FBQ0hDLFVBQUksRUFBRUMsTUFESDtBQUVIQyxjQUFRLEVBQUU7QUFGUCxLQURKO0FBTUhDLFNBQUssRUFBRTtBQUNIRCxjQUFRLEVBQUUsS0FEUDtBQUVILGlCQUFTO0FBRk4sS0FOSjtBQVdIRSxVQUFNLEVBQUU7QUFDSkosVUFBSSxFQUFFQyxNQURGO0FBRUpDLGNBQVEsRUFBRSxLQUZOO0FBR0osaUJBQVMsb0JBQU0sQ0FBRTtBQUhiO0FBWEwsR0FESTtBQW1CWEcsVUFBUSxFQUFFO0FBQ05DLFNBQUssRUFBRTtBQUNIQyxTQURHLGlCQUNHO0FBQ0YsZUFBTyxLQUFLSixLQUFaO0FBQ0gsT0FIRTtBQUtISyxTQUxHLGVBS0NMLEtBTEQsRUFLUTtBQUNQLGFBQUtNLEtBQUwsQ0FBVyxPQUFYLEVBQW9CTixLQUFwQjtBQUNIO0FBUEU7QUFERCxHQW5CQztBQStCWE8sU0FBTyxFQUFFO0FBQ0xDLFlBREssb0JBQ0lDLE1BREosRUFDWTtBQUNiLGFBQU8sS0FBS1IsTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWVMsR0FBWixDQUFnQkQsTUFBaEIsQ0FBdEI7QUFDSCxLQUhJO0FBS0xFLGdCQUxLLHdCQUtRRixNQUxSLEVBS2dCO0FBQ2pCLGFBQU8sS0FBS0QsUUFBTCxDQUFjQyxNQUFkLElBQXdCLEtBQUtSLE1BQUwsQ0FBWUcsR0FBWixDQUFnQkssTUFBaEIsQ0FBeEIsR0FBa0QsRUFBekQ7QUFDSDtBQVBJO0FBL0JFLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSx3RUFBTTtBQUNSLEVBQUUsNkVBQU07QUFDUixFQUFFLHNGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDNE0sQ0FBQyxpRUFBZSx1TUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19DaGVja2JveF9GaWVsZF92dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHVpLWNoZWNrYm94LWdyb3VwXG4gICAgICAgIDpsYWJlbD1cImZpZWxkLm5hbWVcIlxuICAgICAgICA6aGVscD1cImZpZWxkLmhlbHBcIlxuICAgICAgICA6aW5saW5lPVwiZmllbGQuc2V0dGluZ3MuZGlzcGxheSA9PSAncm93J1wiXG4gICAgICAgIDpoYXNFcnJvcj1cImhhc0Vycm9yKGZpZWxkLmhhbmRsZSlcIlxuICAgICAgICA6ZXJyb3JNZXNzYWdlPVwiZXJyb3JNZXNzYWdlKGZpZWxkLmhhbmRsZSlcIj5cblxuICAgICAgICA8dWktY2hlY2tib3hcbiAgICAgICAgICAgIHYtZm9yPVwiKG9wdGlvbiwgaW5kZXgpIGluIGZpZWxkLnNldHRpbmdzLm9wdGlvbnNcIlxuICAgICAgICAgICAgOmtleT1cImAke2ZpZWxkLmhhbmRsZX0uJHtpbmRleH1gXCJcbiAgICAgICAgICAgIDppZD1cImAke2ZpZWxkLmhhbmRsZX0uJHtpbmRleH1gXCJcbiAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgIDpuYXRpdmUtdmFsdWU9XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGVsXCI+XG4gICAgICAgICAgICB7e29wdGlvbi5sYWJlbH19XG4gICAgICAgIDwvdWktY2hlY2tib3g+XG4gICAgPC91aS1jaGVja2JveC1ncm91cD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEZpZWxkTWl4aW4gZnJvbSAnQC9taXhpbnMvZmllbGR0eXBlcy9maWVsZCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2NoZWNrYm94LWZpZWxkdHlwZScsXG5cbiAgICAgICAgbWl4aW5zOiBbRmllbGRNaXhpbl0sXG5cbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIGlmIChfLmlzRW1wdHkodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcblxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4ge31cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFzRXJyb3IoaGFuZGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMgJiYgdGhpcy5lcnJvcnMuaGFzKGhhbmRsZSlcbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvck1lc3NhZ2UoaGFuZGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYXNFcnJvcihoYW5kbGUpID8gdGhpcy5lcnJvcnMuZ2V0KGhhbmRsZSkgOiAnJ1xuICAgICAgICB9XG4gICAgfSxcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjk2NjkyMyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWI5NjY5MjMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWI5NjY5MjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWI5NjY5MjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjk2NjkyMyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYjk2NjkyMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9DaGVja2JveC9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInVpLWNoZWNrYm94LWdyb3VwXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgbGFiZWw6IF92bS5maWVsZC5uYW1lLFxuICAgICAgICBoZWxwOiBfdm0uZmllbGQuaGVscCxcbiAgICAgICAgaW5saW5lOiBfdm0uZmllbGQuc2V0dGluZ3MuZGlzcGxheSA9PSBcInJvd1wiLFxuICAgICAgICBoYXNFcnJvcjogX3ZtLmhhc0Vycm9yKF92bS5maWVsZC5oYW5kbGUpLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IF92bS5lcnJvck1lc3NhZ2UoX3ZtLmZpZWxkLmhhbmRsZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIF92bS5fbChfdm0uZmllbGQuc2V0dGluZ3Mub3B0aW9ucywgZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcInVpLWNoZWNrYm94XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IF92bS5maWVsZC5oYW5kbGUgKyBcIi5cIiArIGluZGV4LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogX3ZtLmZpZWxkLmhhbmRsZSArIFwiLlwiICsgaW5kZXgsXG4gICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlLFxuICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogb3B0aW9uLnZhbHVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RlbCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLm1vZGVsID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhvcHRpb24ubGFiZWwpICsgXCJcXG4gICAgXCIpXVxuICAgICAgKVxuICAgIH0pLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=