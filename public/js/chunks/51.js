(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Number/Settings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Number/Settings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/fieldtype */ "./resources/js/mixins/fieldtype.js");
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
  name: 'number-fieldtype-settings',
  mixins: [_mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__["default"]],
  filters: {
    pad: function pad(length) {
      return _.padStart('1', length, '0');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Number/Settings.vue?vue&type=template&id=5f1797f8&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Number/Settings.vue?vue&type=template&id=5f1797f8& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "row" },
    [
      _c("ui-number-group", {
        staticClass: "col w-full sm:w-1/2",
        attrs: {
          name: "settings.decimals",
          label: "Decimal Places",
          help: "The number of decimal places this number will accept.",
          autocomplete: "off",
          min: "0",
          max: "6",
          "hide-buttons": true,
          "has-error": _vm.errors.has("settings.decimals"),
          "error-message": _vm.errors.get("settings.decimals")
        },
        model: {
          value: _vm.settings.decimals,
          callback: function($$v) {
            _vm.$set(_vm.settings, "decimals", $$v)
          },
          expression: "settings.decimals"
        }
      }),
      _vm._v(" "),
      _c("ui-number-group", {
        staticClass: "col w-full sm:w-1/2",
        attrs: {
          name: "settings.steps",
          label: "Step Size",
          help: "Step or increment size of the number",
          autocomplete: "off",
          min: "0",
          "hide-buttons": true,
          steps: _vm._f("pad")(_vm.settings.decimals),
          decimals: _vm.settings.decimals,
          "has-error": _vm.errors.has("settings.steps"),
          "error-message": _vm.errors.get("settings.steps")
        },
        model: {
          value: _vm.settings.steps,
          callback: function($$v) {
            _vm.$set(_vm.settings, "steps", $$v)
          },
          expression: "settings.steps"
        }
      }),
      _vm._v(" "),
      _c("ui-number-group", {
        staticClass: "col w-full sm:w-1/2",
        attrs: {
          name: "settings.min",
          label: "Min Value",
          help: "Minimum allowed value",
          autocomplete: "off",
          "hide-buttons": true,
          decimals: _vm.settings.decimals,
          steps: _vm.settings.steps,
          "has-error": _vm.errors.has("settings.min"),
          "error-message": _vm.errors.get("settings.min")
        },
        model: {
          value: _vm.settings.min,
          callback: function($$v) {
            _vm.$set(_vm.settings, "min", $$v)
          },
          expression: "settings.min"
        }
      }),
      _vm._v(" "),
      _c("ui-number-group", {
        staticClass: "col w-full sm:w-1/2",
        attrs: {
          name: "settings.max",
          label: "Max Value",
          help: "Maximum allowed value",
          autocomplete: "off",
          "hide-buttons": true,
          decimals: _vm.settings.decimals,
          steps: _vm.settings.steps,
          "has-error": _vm.errors.has("settings.max"),
          "error-message": _vm.errors.get("settings.max")
        },
        model: {
          value: _vm.settings.max,
          callback: function($$v) {
            _vm.$set(_vm.settings, "max", $$v)
          },
          expression: "settings.max"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/Number/Settings.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Number/Settings.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_5f1797f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=5f1797f8& */ "./resources/js/components/Fieldtypes/Number/Settings.vue?vue&type=template&id=5f1797f8&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Number/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_5f1797f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_5f1797f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Number/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Number/Settings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Number/Settings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Number/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Number/Settings.vue?vue&type=template&id=5f1797f8&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Number/Settings.vue?vue&type=template&id=5f1797f8& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_5f1797f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=5f1797f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Number/Settings.vue?vue&type=template&id=5f1797f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_5f1797f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_5f1797f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/fieldtype.js":
/*!******************************************!*\
  !*** ./resources/js/mixins/fieldtype.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    settings: {
      get: function get() {
        return this.value.settings || {};
      },
      set: function set(value) {
        this.$set(this.value.settings, value);
      }
    },
    errors: function errors() {
      return this.value.errors || {};
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9OdW1iZXIvU2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvTnVtYmVyL1NldHRpbmdzLnZ1ZT8yNmY1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvTnVtYmVyL1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL051bWJlci9TZXR0aW5ncy52dWU/MmMyZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL051bWJlci9TZXR0aW5ncy52dWU/MDlmOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL2ZpZWxkdHlwZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInZhbHVlIiwidHlwZSIsIk9iamVjdCIsInJlcXVpcmVkIiwiY29tcHV0ZWQiLCJzZXR0aW5ncyIsImdldCIsInNldCIsIiRzZXQiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REE7QUFFQTtBQUNBLG1DQURBO0FBR0EscUVBSEE7QUFLQTtBQUNBLE9BREEsZUFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQSxHOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxxQkFBcUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFBQTtBQUFBO0FBQUE7QUFBdUY7QUFDM0I7QUFDTDs7O0FBR3ZEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW9NLENBQWdCLG9QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWU7QUFDWEEsT0FBSyxFQUFFO0FBQ0hDLFNBQUssRUFBRTtBQUNIQyxVQUFJLEVBQUVDLE1BREg7QUFFSEMsY0FBUSxFQUFFO0FBRlA7QUFESixHQURJO0FBUVhDLFVBQVEsRUFBRTtBQUNOQyxZQUFRLEVBQUU7QUFDTkMsU0FETSxpQkFDQTtBQUNGLGVBQU8sS0FBS04sS0FBTCxDQUFXSyxRQUFYLElBQXVCLEVBQTlCO0FBQ0gsT0FISztBQUlORSxTQUpNLGVBSUZQLEtBSkUsRUFJSztBQUNQLGFBQUtRLElBQUwsQ0FBVSxLQUFLUixLQUFMLENBQVdLLFFBQXJCLEVBQStCTCxLQUEvQjtBQUNIO0FBTkssS0FESjtBQVVOUyxVQVZNLG9CQVVHO0FBQ0wsYUFBTyxLQUFLVCxLQUFMLENBQVdTLE1BQVgsSUFBcUIsRUFBNUI7QUFDSDtBQVpLO0FBUkMsQ0FBZixFIiwiZmlsZSI6ImpzL2NodW5rcy81MS5qcz9pZD0xZWNmNTk2MmQzY2I2YWJjNDlmMCIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDx1aS1udW1iZXItZ3JvdXBcbiAgICAgICAgICAgIGNsYXNzPVwiY29sIHctZnVsbCBzbTp3LTEvMlwiXG4gICAgICAgICAgICBuYW1lPVwic2V0dGluZ3MuZGVjaW1hbHNcIlxuICAgICAgICAgICAgbGFiZWw9XCJEZWNpbWFsIFBsYWNlc1wiXG4gICAgICAgICAgICBoZWxwPVwiVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0aGlzIG51bWJlciB3aWxsIGFjY2VwdC5cIlxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5kZWNpbWFsc1wiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjZcIlxuICAgICAgICAgICAgOmhpZGUtYnV0dG9ucz1cInRydWVcIlxuICAgICAgICAgICAgOmhhcy1lcnJvcj1cImVycm9ycy5oYXMoJ3NldHRpbmdzLmRlY2ltYWxzJylcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJlcnJvcnMuZ2V0KCdzZXR0aW5ncy5kZWNpbWFscycpXCI+XG4gICAgICAgIDwvdWktbnVtYmVyLWdyb3VwPlxuXG4gICAgICAgIDx1aS1udW1iZXItZ3JvdXBcbiAgICAgICAgICAgIGNsYXNzPVwiY29sIHctZnVsbCBzbTp3LTEvMlwiXG4gICAgICAgICAgICBuYW1lPVwic2V0dGluZ3Muc3RlcHNcIlxuICAgICAgICAgICAgbGFiZWw9XCJTdGVwIFNpemVcIlxuICAgICAgICAgICAgaGVscD1cIlN0ZXAgb3IgaW5jcmVtZW50IHNpemUgb2YgdGhlIG51bWJlclwiXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLnN0ZXBzXCJcbiAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgOmhpZGUtYnV0dG9ucz1cInRydWVcIlxuICAgICAgICAgICAgOnN0ZXBzPVwic2V0dGluZ3MuZGVjaW1hbHMgfCBwYWRcIlxuICAgICAgICAgICAgOmRlY2ltYWxzPVwic2V0dGluZ3MuZGVjaW1hbHNcIlxuICAgICAgICAgICAgOmhhcy1lcnJvcj1cImVycm9ycy5oYXMoJ3NldHRpbmdzLnN0ZXBzJylcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJlcnJvcnMuZ2V0KCdzZXR0aW5ncy5zdGVwcycpXCI+XG4gICAgICAgIDwvdWktbnVtYmVyLWdyb3VwPlxuXG4gICAgICAgIDx1aS1udW1iZXItZ3JvdXBcbiAgICAgICAgICAgIGNsYXNzPVwiY29sIHctZnVsbCBzbTp3LTEvMlwiXG4gICAgICAgICAgICBuYW1lPVwic2V0dGluZ3MubWluXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTWluIFZhbHVlXCJcbiAgICAgICAgICAgIGhlbHA9XCJNaW5pbXVtIGFsbG93ZWQgdmFsdWVcIlxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5taW5cIlxuICAgICAgICAgICAgOmhpZGUtYnV0dG9ucz1cInRydWVcIlxuICAgICAgICAgICAgOmRlY2ltYWxzPVwic2V0dGluZ3MuZGVjaW1hbHNcIlxuICAgICAgICAgICAgOnN0ZXBzPVwic2V0dGluZ3Muc3RlcHNcIlxuICAgICAgICAgICAgOmhhcy1lcnJvcj1cImVycm9ycy5oYXMoJ3NldHRpbmdzLm1pbicpXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZXJyb3JzLmdldCgnc2V0dGluZ3MubWluJylcIj5cbiAgICAgICAgPC91aS1udW1iZXItZ3JvdXA+XG5cbiAgICAgICAgPHVpLW51bWJlci1ncm91cFxuICAgICAgICAgICAgY2xhc3M9XCJjb2wgdy1mdWxsIHNtOnctMS8yXCJcbiAgICAgICAgICAgIG5hbWU9XCJzZXR0aW5ncy5tYXhcIlxuICAgICAgICAgICAgbGFiZWw9XCJNYXggVmFsdWVcIlxuICAgICAgICAgICAgaGVscD1cIk1heGltdW0gYWxsb3dlZCB2YWx1ZVwiXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLm1heFwiXG4gICAgICAgICAgICA6aGlkZS1idXR0b25zPVwidHJ1ZVwiXG4gICAgICAgICAgICA6ZGVjaW1hbHM9XCJzZXR0aW5ncy5kZWNpbWFsc1wiXG4gICAgICAgICAgICA6c3RlcHM9XCJzZXR0aW5ncy5zdGVwc1wiXG4gICAgICAgICAgICA6aGFzLWVycm9yPVwiZXJyb3JzLmhhcygnc2V0dGluZ3MubWF4JylcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJlcnJvcnMuZ2V0KCdzZXR0aW5ncy5tYXgnKVwiPlxuICAgICAgICA8L3VpLW51bWJlci1ncm91cD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IGZpZWxkdHlwZSBmcm9tICdAL21peGlucy9maWVsZHR5cGUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdudW1iZXItZmllbGR0eXBlLXNldHRpbmdzJyxcblxuICAgICAgICBtaXhpbnM6IFtmaWVsZHR5cGVdLFxuXG4gICAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgICAgIHBhZChsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5wYWRTdGFydCgnMScsIGxlbmd0aCwgJzAnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidWktbnVtYmVyLWdyb3VwXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCBzbTp3LTEvMlwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwic2V0dGluZ3MuZGVjaW1hbHNcIixcbiAgICAgICAgICBsYWJlbDogXCJEZWNpbWFsIFBsYWNlc1wiLFxuICAgICAgICAgIGhlbHA6IFwiVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0aGlzIG51bWJlciB3aWxsIGFjY2VwdC5cIixcbiAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICBtYXg6IFwiNlwiLFxuICAgICAgICAgIFwiaGlkZS1idXR0b25zXCI6IHRydWUsXG4gICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmVycm9ycy5oYXMoXCJzZXR0aW5ncy5kZWNpbWFsc1wiKSxcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmVycm9ycy5nZXQoXCJzZXR0aW5ncy5kZWNpbWFsc1wiKVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZGVjaW1hbHMsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLCBcImRlY2ltYWxzXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuZGVjaW1hbHNcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInVpLW51bWJlci1ncm91cFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgc206dy0xLzJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBuYW1lOiBcInNldHRpbmdzLnN0ZXBzXCIsXG4gICAgICAgICAgbGFiZWw6IFwiU3RlcCBTaXplXCIsXG4gICAgICAgICAgaGVscDogXCJTdGVwIG9yIGluY3JlbWVudCBzaXplIG9mIHRoZSBudW1iZXJcIixcbiAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICBcImhpZGUtYnV0dG9uc1wiOiB0cnVlLFxuICAgICAgICAgIHN0ZXBzOiBfdm0uX2YoXCJwYWRcIikoX3ZtLnNldHRpbmdzLmRlY2ltYWxzKSxcbiAgICAgICAgICBkZWNpbWFsczogX3ZtLnNldHRpbmdzLmRlY2ltYWxzLFxuICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5lcnJvcnMuaGFzKFwic2V0dGluZ3Muc3RlcHNcIiksXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5lcnJvcnMuZ2V0KFwic2V0dGluZ3Muc3RlcHNcIilcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLnN0ZXBzLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncywgXCJzdGVwc1wiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLnN0ZXBzXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ1aS1udW1iZXItZ3JvdXBcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsIHNtOnctMS8yXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbmFtZTogXCJzZXR0aW5ncy5taW5cIixcbiAgICAgICAgICBsYWJlbDogXCJNaW4gVmFsdWVcIixcbiAgICAgICAgICBoZWxwOiBcIk1pbmltdW0gYWxsb3dlZCB2YWx1ZVwiLFxuICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICBcImhpZGUtYnV0dG9uc1wiOiB0cnVlLFxuICAgICAgICAgIGRlY2ltYWxzOiBfdm0uc2V0dGluZ3MuZGVjaW1hbHMsXG4gICAgICAgICAgc3RlcHM6IF92bS5zZXR0aW5ncy5zdGVwcyxcbiAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhcInNldHRpbmdzLm1pblwiKSxcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmVycm9ycy5nZXQoXCJzZXR0aW5ncy5taW5cIilcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLm1pbixcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MsIFwibWluXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MubWluXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ1aS1udW1iZXItZ3JvdXBcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsIHNtOnctMS8yXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbmFtZTogXCJzZXR0aW5ncy5tYXhcIixcbiAgICAgICAgICBsYWJlbDogXCJNYXggVmFsdWVcIixcbiAgICAgICAgICBoZWxwOiBcIk1heGltdW0gYWxsb3dlZCB2YWx1ZVwiLFxuICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICBcImhpZGUtYnV0dG9uc1wiOiB0cnVlLFxuICAgICAgICAgIGRlY2ltYWxzOiBfdm0uc2V0dGluZ3MuZGVjaW1hbHMsXG4gICAgICAgICAgc3RlcHM6IF92bS5zZXR0aW5ncy5zdGVwcyxcbiAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhcInNldHRpbmdzLm1heFwiKSxcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmVycm9ycy5nZXQoXCJzZXR0aW5ncy5tYXhcIilcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLm1heCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MsIFwibWF4XCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MubWF4XCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmMTc5N2Y4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1ZjE3OTdmOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ZjE3OTdmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ZjE3OTdmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmMTc5N2Y4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVmMTc5N2Y4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL051bWJlci9TZXR0aW5ncy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmMTc5N2Y4JlwiIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnNldHRpbmdzIHx8IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMudmFsdWUuc2V0dGluZ3MsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9ycygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmVycm9ycyB8fCB7fVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=