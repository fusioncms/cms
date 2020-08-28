(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

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
    { staticClass: "flex flex-wrap justify-between" },
    [
      _c("p-number", {
        staticClass: "mr-5 w-2/5 lg:w-1/5",
        attrs: {
          name: "settings.decimals",
          label: "Decimal Places",
          help: "The number of decimal places this number will accept.",
          autocomplete: "off",
          min: "0",
          max: "6",
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
      _c("p-number", {
        staticClass: "mr-5 w-2/5 lg:w-1/5",
        attrs: {
          name: "settings.steps",
          label: "Step Size",
          help: "Step or increment size of the number",
          autocomplete: "off",
          min: "0",
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
      _c("p-number", {
        staticClass: "mr-5 w-2/5 lg:w-1/5",
        attrs: {
          name: "settings.min",
          label: "Min Value",
          help: "Minimum allowed value",
          autocomplete: "off",
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
      _c("p-number", {
        staticClass: "mr-5 w-2/5 lg:w-1/5",
        attrs: {
          name: "settings.max",
          label: "Max Value",
          help: "Maximum allowed value",
          autocomplete: "off",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9OdW1iZXIvU2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvTnVtYmVyL1NldHRpbmdzLnZ1ZT8yNmY1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvTnVtYmVyL1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL051bWJlci9TZXR0aW5ncy52dWU/MmMyZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL051bWJlci9TZXR0aW5ncy52dWU/MDlmOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL2ZpZWxkdHlwZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInZhbHVlIiwidHlwZSIsIk9iamVjdCIsInJlcXVpcmVkIiwiY29tcHV0ZWQiLCJzZXR0aW5ncyIsImdldCIsInNldCIsIiRzZXQiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQTtBQUVBO0FBQ0EsbUNBREE7QUFHQSxxRUFIQTtBQUtBO0FBQ0EsT0FEQSxlQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUxBLEc7Ozs7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdEQUFnRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUFBO0FBQUE7QUFBdUY7QUFDM0I7QUFDTDs7O0FBR3ZEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW9NLENBQWdCLG9QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWU7QUFDWEEsT0FBSyxFQUFFO0FBQ0hDLFNBQUssRUFBRTtBQUNIQyxVQUFJLEVBQUVDLE1BREg7QUFFSEMsY0FBUSxFQUFFO0FBRlA7QUFESixHQURJO0FBUVhDLFVBQVEsRUFBRTtBQUNOQyxZQUFRLEVBQUU7QUFDTkMsU0FETSxpQkFDQTtBQUNGLGVBQU8sS0FBS04sS0FBTCxDQUFXSyxRQUFYLElBQXVCLEVBQTlCO0FBQ0gsT0FISztBQUlORSxTQUpNLGVBSUZQLEtBSkUsRUFJSztBQUNQLGFBQUtRLElBQUwsQ0FBVSxLQUFLUixLQUFMLENBQVdLLFFBQXJCLEVBQStCTCxLQUEvQjtBQUNIO0FBTkssS0FESjtBQVVOUyxVQVZNLG9CQVVHO0FBQ0wsYUFBTyxLQUFLVCxLQUFMLENBQVdTLE1BQVgsSUFBcUIsRUFBNUI7QUFDSDtBQVpLO0FBUkMsQ0FBZixFIiwiZmlsZSI6ImpzL2NodW5rcy80MS5qcz9pZD0wZDExN2IyMDY3ZDQ5ODBlNjZkYyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxwLW51bWJlclxuICAgICAgICAgICAgbmFtZT1cInNldHRpbmdzLmRlY2ltYWxzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRGVjaW1hbCBQbGFjZXNcIlxuICAgICAgICAgICAgaGVscD1cIlRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdGhpcyBudW1iZXIgd2lsbCBhY2NlcHQuXCJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MuZGVjaW1hbHNcIlxuICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICBtYXg9XCI2XCJcbiAgICAgICAgICAgIGNsYXNzPVwibXItNSB3LTIvNSBsZzp3LTEvNVwiXG4gICAgICAgICAgICA6aGFzLWVycm9yPVwiZXJyb3JzLmhhcygnc2V0dGluZ3MuZGVjaW1hbHMnKVwiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImVycm9ycy5nZXQoJ3NldHRpbmdzLmRlY2ltYWxzJylcIj5cbiAgICAgICAgPC9wLW51bWJlcj5cblxuICAgICAgICA8cC1udW1iZXJcbiAgICAgICAgICAgIG5hbWU9XCJzZXR0aW5ncy5zdGVwc1wiXG4gICAgICAgICAgICBsYWJlbD1cIlN0ZXAgU2l6ZVwiXG4gICAgICAgICAgICBoZWxwPVwiU3RlcCBvciBpbmNyZW1lbnQgc2l6ZSBvZiB0aGUgbnVtYmVyXCJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3Muc3RlcHNcIlxuICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICA6c3RlcHM9XCJzZXR0aW5ncy5kZWNpbWFscyB8IHBhZFwiXG4gICAgICAgICAgICA6ZGVjaW1hbHM9XCJzZXR0aW5ncy5kZWNpbWFsc1wiXG4gICAgICAgICAgICBjbGFzcz1cIm1yLTUgdy0yLzUgbGc6dy0xLzVcIlxuICAgICAgICAgICAgOmhhcy1lcnJvcj1cImVycm9ycy5oYXMoJ3NldHRpbmdzLnN0ZXBzJylcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJlcnJvcnMuZ2V0KCdzZXR0aW5ncy5zdGVwcycpXCI+XG4gICAgICAgIDwvcC1udW1iZXI+XG5cbiAgICAgICAgPHAtbnVtYmVyXG4gICAgICAgICAgICBuYW1lPVwic2V0dGluZ3MubWluXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTWluIFZhbHVlXCJcbiAgICAgICAgICAgIGhlbHA9XCJNaW5pbXVtIGFsbG93ZWQgdmFsdWVcIlxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5taW5cIlxuICAgICAgICAgICAgOmRlY2ltYWxzPVwic2V0dGluZ3MuZGVjaW1hbHNcIlxuICAgICAgICAgICAgOnN0ZXBzPVwic2V0dGluZ3Muc3RlcHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJtci01IHctMi81IGxnOnctMS81XCJcbiAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKCdzZXR0aW5ncy5taW4nKVwiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImVycm9ycy5nZXQoJ3NldHRpbmdzLm1pbicpXCI+XG4gICAgICAgIDwvcC1udW1iZXI+XG5cbiAgICAgICAgPHAtbnVtYmVyXG4gICAgICAgICAgICBuYW1lPVwic2V0dGluZ3MubWF4XCJcbiAgICAgICAgICAgIGxhYmVsPVwiTWF4IFZhbHVlXCJcbiAgICAgICAgICAgIGhlbHA9XCJNYXhpbXVtIGFsbG93ZWQgdmFsdWVcIlxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5tYXhcIlxuICAgICAgICAgICAgOmRlY2ltYWxzPVwic2V0dGluZ3MuZGVjaW1hbHNcIlxuICAgICAgICAgICAgOnN0ZXBzPVwic2V0dGluZ3Muc3RlcHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJtci01IHctMi81IGxnOnctMS81XCJcbiAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKCdzZXR0aW5ncy5tYXgnKVwiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImVycm9ycy5nZXQoJ3NldHRpbmdzLm1heCcpXCI+XG4gICAgICAgIDwvcC1udW1iZXI+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBmaWVsZHR5cGUgZnJvbSAnQC9taXhpbnMvZmllbGR0eXBlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnbnVtYmVyLWZpZWxkdHlwZS1zZXR0aW5ncycsXG5cbiAgICAgICAgbWl4aW5zOiBbZmllbGR0eXBlXSxcblxuICAgICAgICBmaWx0ZXJzOiB7XG4gICAgICAgICAgICBwYWQobGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8ucGFkU3RhcnQoJzEnLCBsZW5ndGgsICcwJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInAtbnVtYmVyXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItNSB3LTIvNSBsZzp3LTEvNVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwic2V0dGluZ3MuZGVjaW1hbHNcIixcbiAgICAgICAgICBsYWJlbDogXCJEZWNpbWFsIFBsYWNlc1wiLFxuICAgICAgICAgIGhlbHA6IFwiVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0aGlzIG51bWJlciB3aWxsIGFjY2VwdC5cIixcbiAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICBtYXg6IFwiNlwiLFxuICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5lcnJvcnMuaGFzKFwic2V0dGluZ3MuZGVjaW1hbHNcIiksXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5lcnJvcnMuZ2V0KFwic2V0dGluZ3MuZGVjaW1hbHNcIilcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmRlY2ltYWxzLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncywgXCJkZWNpbWFsc1wiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmRlY2ltYWxzXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwLW51bWJlclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTUgdy0yLzUgbGc6dy0xLzVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBuYW1lOiBcInNldHRpbmdzLnN0ZXBzXCIsXG4gICAgICAgICAgbGFiZWw6IFwiU3RlcCBTaXplXCIsXG4gICAgICAgICAgaGVscDogXCJTdGVwIG9yIGluY3JlbWVudCBzaXplIG9mIHRoZSBudW1iZXJcIixcbiAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICBzdGVwczogX3ZtLl9mKFwicGFkXCIpKF92bS5zZXR0aW5ncy5kZWNpbWFscyksXG4gICAgICAgICAgZGVjaW1hbHM6IF92bS5zZXR0aW5ncy5kZWNpbWFscyxcbiAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhcInNldHRpbmdzLnN0ZXBzXCIpLFxuICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZXJyb3JzLmdldChcInNldHRpbmdzLnN0ZXBzXCIpXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5zdGVwcyxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MsIFwic3RlcHNcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5zdGVwc1wiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicC1udW1iZXJcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtci01IHctMi81IGxnOnctMS81XCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbmFtZTogXCJzZXR0aW5ncy5taW5cIixcbiAgICAgICAgICBsYWJlbDogXCJNaW4gVmFsdWVcIixcbiAgICAgICAgICBoZWxwOiBcIk1pbmltdW0gYWxsb3dlZCB2YWx1ZVwiLFxuICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICBkZWNpbWFsczogX3ZtLnNldHRpbmdzLmRlY2ltYWxzLFxuICAgICAgICAgIHN0ZXBzOiBfdm0uc2V0dGluZ3Muc3RlcHMsXG4gICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmVycm9ycy5oYXMoXCJzZXR0aW5ncy5taW5cIiksXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5lcnJvcnMuZ2V0KFwic2V0dGluZ3MubWluXCIpXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5taW4sXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLCBcIm1pblwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLm1pblwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicC1udW1iZXJcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtci01IHctMi81IGxnOnctMS81XCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbmFtZTogXCJzZXR0aW5ncy5tYXhcIixcbiAgICAgICAgICBsYWJlbDogXCJNYXggVmFsdWVcIixcbiAgICAgICAgICBoZWxwOiBcIk1heGltdW0gYWxsb3dlZCB2YWx1ZVwiLFxuICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICBkZWNpbWFsczogX3ZtLnNldHRpbmdzLmRlY2ltYWxzLFxuICAgICAgICAgIHN0ZXBzOiBfdm0uc2V0dGluZ3Muc3RlcHMsXG4gICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmVycm9ycy5oYXMoXCJzZXR0aW5ncy5tYXhcIiksXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5lcnJvcnMuZ2V0KFwic2V0dGluZ3MubWF4XCIpXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5tYXgsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLCBcIm1heFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLm1heFwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjE3OTdmOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWYxNzk3ZjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWYxNzk3ZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWYxNzk3ZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjE3OTdmOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZjE3OTdmOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9OdW1iZXIvU2V0dGluZ3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjE3OTdmOCZcIiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5zZXR0aW5ncyB8fCB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnZhbHVlLnNldHRpbmdzLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5lcnJvcnMgfHwge31cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9