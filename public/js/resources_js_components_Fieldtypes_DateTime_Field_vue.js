(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_components_Fieldtypes_DateTime_Field_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_fieldtypes_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/fieldtypes/field */ "./resources/js/mixins/fieldtypes/field.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'datetime-fieldtype',
  mixins: [_mixins_fieldtypes_field__WEBPACK_IMPORTED_MODULE_1__.default],
  data: function data() {
    return {
      inst: null
    };
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value == '' ? null : value);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.inst = flatpickr__WEBPACK_IMPORTED_MODULE_0___default()("#flatpickr_".concat(this.field.handle), {
      altFormat: this.field.settings.format,
      altInput: true,
      dateFormat: 'Y-m-d H:i:S',
      defaultDate: this.model,
      enableTime: this.field.settings.time == 1,
      wrap: true,
      onChange: function onChange(selected, value, inst) {
        return _this.model = value;
      }
    });
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

/***/ "./resources/js/components/Fieldtypes/DateTime/Field.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/DateTime/Field.vue ***!
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
/* harmony import */ var _Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=95dce20a& */ "./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/DateTime/Field.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a& ***!
  \**********************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=template&id=95dce20a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a& ***!
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
    "ui-field-group",
    {
      attrs: {
        name: _vm.field.handle,
        fieldId: _vm.field.handle + "-field",
        label: _vm.field.name,
        required: _vm.field.required,
        help: _vm.field.help,
        hasError: _vm.hasError(_vm.field.handle),
        errorMessage: _vm.errorMessage(_vm.field.handle)
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "input-group",
          attrs: { id: "flatpickr_" + _vm.field.handle }
        },
        [
          _c("ui-input", {
            staticClass: "field-input field",
            attrs: {
              "data-input": "",
              name: _vm.field.handle,
              help: _vm.field.help,
              placeholder: _vm.field.settings.placeholder,
              "aria-describedby": _vm.field.help,
              hasError: _vm.hasError(_vm.field.handle)
            },
            model: {
              value: _vm.model,
              callback: function($$v) {
                _vm.model = $$v
              },
              expression: "model"
            }
          }),
          _vm._v(" "),
          _c(
            "ui-button",
            { attrs: { icon: "", "data-toggle": "" } },
            [
              _c("fa-icon", { attrs: { icon: "calendar-alt" } }),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [
                _vm._v("Launch date picker")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "ui-button",
            { attrs: { icon: "", "data-clear": "" } },
            [
              _c("fa-icon", { attrs: { icon: "calendar-times" } }),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [_vm._v("Clear date")])
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL21peGlucy9maWVsZHR5cGVzL2ZpZWxkLmpzIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvRGF0ZVRpbWUvRmllbGQudnVlIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvRGF0ZVRpbWUvRmllbGQudnVlPzg1YjEiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWU/MWU2ZCJdLCJuYW1lcyI6WyJwcm9wcyIsImZpZWxkIiwidHlwZSIsIk9iamVjdCIsInJlcXVpcmVkIiwidmFsdWUiLCJlcnJvcnMiLCJjb21wdXRlZCIsIm1vZGVsIiwiZ2V0Iiwic2V0IiwiJGVtaXQiLCJtZXRob2RzIiwiaGFzRXJyb3IiLCJoYW5kbGUiLCJoYXMiLCJlcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQTtBQUVBO0FBQ0EsNEJBREE7QUFHQSx5RUFIQTtBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQVRBO0FBV0E7QUFDQTtBQUNBLFNBREEsaUJBQ0E7QUFDQTtBQUNBLE9BSEE7QUFLQSxTQUxBLGVBS0EsS0FMQSxFQUtBO0FBQ0E7QUFDQTtBQVBBO0FBREEsR0FYQTtBQXVCQSxTQXZCQSxxQkF1QkE7QUFBQTs7QUFDQTtBQUNBLDJDQURBO0FBRUEsb0JBRkE7QUFHQSwrQkFIQTtBQUlBLDZCQUpBO0FBS0EsK0NBTEE7QUFNQSxnQkFOQTtBQU9BO0FBQUE7QUFBQTtBQVBBO0FBU0E7QUFqQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQSxpRUFBZTtBQUNYQSxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFFO0FBQ0hDLFVBQUksRUFBRUMsTUFESDtBQUVIQyxjQUFRLEVBQUU7QUFGUCxLQURKO0FBTUhDLFNBQUssRUFBRTtBQUNIRCxjQUFRLEVBQUUsS0FEUDtBQUVILGlCQUFTO0FBRk4sS0FOSjtBQVdIRSxVQUFNLEVBQUU7QUFDSkosVUFBSSxFQUFFQyxNQURGO0FBRUpDLGNBQVEsRUFBRSxLQUZOO0FBR0osaUJBQVMsb0JBQU0sQ0FBRTtBQUhiO0FBWEwsR0FESTtBQW1CWEcsVUFBUSxFQUFFO0FBQ05DLFNBQUssRUFBRTtBQUNIQyxTQURHLGlCQUNHO0FBQ0YsZUFBTyxLQUFLSixLQUFaO0FBQ0gsT0FIRTtBQUtISyxTQUxHLGVBS0NMLEtBTEQsRUFLUTtBQUNQLGFBQUtNLEtBQUwsQ0FBVyxPQUFYLEVBQW9CTixLQUFwQjtBQUNIO0FBUEU7QUFERCxHQW5CQztBQStCWE8sU0FBTyxFQUFFO0FBQ0xDLFlBREssb0JBQ0lDLE1BREosRUFDWTtBQUNiLGFBQU8sS0FBS1IsTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWVMsR0FBWixDQUFnQkQsTUFBaEIsQ0FBdEI7QUFDSCxLQUhJO0FBS0xFLGdCQUxLLHdCQUtRRixNQUxSLEVBS2dCO0FBQ2pCLGFBQU8sS0FBS0QsUUFBTCxDQUFjQyxNQUFkLElBQXdCLEtBQUtSLE1BQUwsQ0FBWUcsR0FBWixDQUFnQkssTUFBaEIsQ0FBeEIsR0FBa0QsRUFBekQ7QUFDSDtBQVBJO0FBL0JFLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDQSxDQUFtRztBQUNuRyxnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSx3RUFBTTtBQUNSLEVBQUUsNkVBQU07QUFDUixFQUFFLHNGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDNE0sQ0FBQyxpRUFBZSx1TUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsOEJBQThCLEVBQUU7QUFDdEQ7QUFDQSw2QkFBNkIsU0FBUyx1QkFBdUIsRUFBRTtBQUMvRDtBQUNBLDBCQUEwQix5QkFBeUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyw2QkFBNkIsRUFBRTtBQUNyRDtBQUNBLDZCQUE2QixTQUFTLHlCQUF5QixFQUFFO0FBQ2pFO0FBQ0EsMEJBQTBCLHlCQUF5QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL3Jlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfRGF0ZVRpbWVfRmllbGRfdnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx1aS1maWVsZC1ncm91cFxuICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgIDpmaWVsZElkPVwiYCR7ZmllbGQuaGFuZGxlfS1maWVsZGBcIlxuICAgICAgICA6bGFiZWw9XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgOnJlcXVpcmVkPVwiZmllbGQucmVxdWlyZWRcIlxuICAgICAgICA6aGVscD1cImZpZWxkLmhlbHBcIlxuICAgICAgICA6aGFzRXJyb3I9XCJoYXNFcnJvcihmaWVsZC5oYW5kbGUpXCJcbiAgICAgICAgICAgIDplcnJvck1lc3NhZ2U9XCJlcnJvck1lc3NhZ2UoZmllbGQuaGFuZGxlKVwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiIDppZD1cImBmbGF0cGlja3JfJHtmaWVsZC5oYW5kbGV9YFwiPlxuICAgICAgICAgICAgPHVpLWlucHV0XG4gICAgICAgICAgICAgICAgZGF0YS1pbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGQtaW5wdXQgZmllbGRcIlxuICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgICAgICA6aGVscD1cImZpZWxkLmhlbHBcIlxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cImZpZWxkLnNldHRpbmdzLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICA6YXJpYS1kZXNjcmliZWRieT1cImZpZWxkLmhlbHBcIlxuICAgICAgICAgICAgICAgIDpoYXNFcnJvcj1cImhhc0Vycm9yKGZpZWxkLmhhbmRsZSlcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtb2RlbFwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dD5cblxuICAgICAgICAgICAgPHVpLWJ1dHRvbiBpY29uIGRhdGEtdG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJjYWxlbmRhci1hbHRcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TGF1bmNoIGRhdGUgcGlja2VyPC9zcGFuPlxuICAgICAgICAgICAgPC91aS1idXR0b24+XG5cbiAgICAgICAgICAgIDx1aS1idXR0b24gaWNvbiBkYXRhLWNsZWFyPlxuICAgICAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJjYWxlbmRhci10aW1lc1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5DbGVhciBkYXRlPC9zcGFuPlxuICAgICAgICAgICAgPC91aS1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdWktZmllbGQtZ3JvdXA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBmbGF0cGlja3IgZnJvbSAnZmxhdHBpY2tyJ1xuICAgIGltcG9ydCBGaWVsZE1peGluIGZyb20gJ0AvbWl4aW5zL2ZpZWxkdHlwZXMvZmllbGQnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdkYXRldGltZS1maWVsZHR5cGUnLFxuXG4gICAgICAgIG1peGluczogW0ZpZWxkTWl4aW5dLFxuICAgICAgICBcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5zdDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUgPT0gJycgPyBudWxsIDogdmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmluc3QgPSBmbGF0cGlja3IoYCNmbGF0cGlja3JfJHt0aGlzLmZpZWxkLmhhbmRsZX1gLCB7XG4gICAgICAgICAgICAgICAgYWx0Rm9ybWF0OiB0aGlzLmZpZWxkLnNldHRpbmdzLmZvcm1hdCxcbiAgICAgICAgICAgICAgICBhbHRJbnB1dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0OiAnWS1tLWQgSDppOlMnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHREYXRlOiB0aGlzLm1vZGVsLFxuICAgICAgICAgICAgICAgIGVuYWJsZVRpbWU6ICh0aGlzLmZpZWxkLnNldHRpbmdzLnRpbWUgPT0gMSksXG4gICAgICAgICAgICAgICAgd3JhcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKHNlbGVjdGVkLCB2YWx1ZSwgaW5zdCkgPT4gdGhpcy5tb2RlbCA9IHZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcblxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4ge31cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFzRXJyb3IoaGFuZGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMgJiYgdGhpcy5lcnJvcnMuaGFzKGhhbmRsZSlcbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvck1lc3NhZ2UoaGFuZGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYXNFcnJvcihoYW5kbGUpID8gdGhpcy5lcnJvcnMuZ2V0KGhhbmRsZSkgOiAnJ1xuICAgICAgICB9XG4gICAgfSxcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NWRjZTIwYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTVkY2UyMGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTVkY2UyMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTVkY2UyMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NWRjZTIwYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5NWRjZTIwYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInVpLWZpZWxkLWdyb3VwXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSxcbiAgICAgICAgZmllbGRJZDogX3ZtLmZpZWxkLmhhbmRsZSArIFwiLWZpZWxkXCIsXG4gICAgICAgIGxhYmVsOiBfdm0uZmllbGQubmFtZSxcbiAgICAgICAgcmVxdWlyZWQ6IF92bS5maWVsZC5yZXF1aXJlZCxcbiAgICAgICAgaGVscDogX3ZtLmZpZWxkLmhlbHAsXG4gICAgICAgIGhhc0Vycm9yOiBfdm0uaGFzRXJyb3IoX3ZtLmZpZWxkLmhhbmRsZSksXG4gICAgICAgIGVycm9yTWVzc2FnZTogX3ZtLmVycm9yTWVzc2FnZShfdm0uZmllbGQuaGFuZGxlKVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImZsYXRwaWNrcl9cIiArIF92bS5maWVsZC5oYW5kbGUgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ1aS1pbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWVsZC1pbnB1dCBmaWVsZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJkYXRhLWlucHV0XCI6IFwiXCIsXG4gICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUsXG4gICAgICAgICAgICAgIGhlbHA6IF92bS5maWVsZC5oZWxwLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLmZpZWxkLnNldHRpbmdzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogX3ZtLmZpZWxkLmhlbHAsXG4gICAgICAgICAgICAgIGhhc0Vycm9yOiBfdm0uaGFzRXJyb3IoX3ZtLmZpZWxkLmhhbmRsZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGVsLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLm1vZGVsID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kZWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBpY29uOiBcIlwiLCBcImRhdGEtdG9nZ2xlXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwgeyBhdHRyczogeyBpY29uOiBcImNhbGVuZGFyLWFsdFwiIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiTGF1bmNoIGRhdGUgcGlja2VyXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGljb246IFwiXCIsIFwiZGF0YS1jbGVhclwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJjYWxlbmRhci10aW1lc1wiIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbX3ZtLl92KFwiQ2xlYXIgZGF0ZVwiKV0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=