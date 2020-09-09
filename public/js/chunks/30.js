(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/DateTime/Settings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'datetime-fieldtype-settings',
  mixins: [_mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__["default"]],
  computed: {
    format: {
      get: function get() {
        var value = _.trim(this.settings.format);

        var tokens = /[H|h|G|i|S|s|K|:]/g;

        if (this.settings.time) {
          if (!new RegExp(tokens).test(this.settings.format)) {
            value = _.trim(this.settings.format) + ' h:i';
          }
        } else {
          value = this.settings.format.replace(tokens, '');
        }

        return value;
      },
      set: function set(value) {
        this.settings.format = value;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/DateTime/Settings.vue?vue&type=template&id=505a1832&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Settings.vue?vue&type=template&id=505a1832& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    [
      _c("p-select", {
        attrs: {
          name: "settings.time",
          label: "Time Options",
          help: "Should this also include time?",
          autocomplete: "off",
          options: [
            {
              value: false,
              label: "Date Only"
            },
            {
              value: true,
              label: "Date and Time"
            }
          ],
          "has-error": _vm.errors.has("settings.time"),
          "error-message": _vm.errors.get("settings.time")
        },
        model: {
          value: _vm.settings.time,
          callback: function($$v) {
            _vm.$set(_vm.settings, "time", $$v)
          },
          expression: "settings.time"
        }
      }),
      _vm._v(" "),
      _c("p-input", {
        attrs: {
          name: "settings.format",
          label: "Date Format",
          help:
            '<a href="https://flatpickr.js.org/formatting/" target="_blank">Flatpickr date format reference</a>',
          placeholder: "Y-m-d",
          "has-error": _vm.errors.has("settings.format"),
          "error-message": _vm.errors.get("settings.format")
        },
        model: {
          value: _vm.format,
          callback: function($$v) {
            _vm.format = $$v
          },
          expression: "format"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/DateTime/Settings.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/DateTime/Settings.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_505a1832___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=505a1832& */ "./resources/js/components/Fieldtypes/DateTime/Settings.vue?vue&type=template&id=505a1832&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/DateTime/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_505a1832___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_505a1832___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/DateTime/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/DateTime/Settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/DateTime/Settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/DateTime/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/DateTime/Settings.vue?vue&type=template&id=505a1832&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/DateTime/Settings.vue?vue&type=template&id=505a1832& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_505a1832___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=505a1832& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/DateTime/Settings.vue?vue&type=template&id=505a1832&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_505a1832___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_505a1832___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9EYXRlVGltZS9TZXR0aW5ncy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9EYXRlVGltZS9TZXR0aW5ncy52dWU/ZjBlNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0RhdGVUaW1lL1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0RhdGVUaW1lL1NldHRpbmdzLnZ1ZT9mYWIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvRGF0ZVRpbWUvU2V0dGluZ3MudnVlPzc2N2MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9maWVsZHR5cGUuanMiXSwibmFtZXMiOlsicHJvcHMiLCJ2YWx1ZSIsInR5cGUiLCJPYmplY3QiLCJyZXF1aXJlZCIsImNvbXB1dGVkIiwic2V0dGluZ3MiLCJnZXQiLCJzZXQiLCIkc2V0IiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTtBQUVBO0FBQ0EscUNBREE7QUFHQSxxRUFIQTtBQUtBO0FBQ0E7QUFDQSxTQURBLGlCQUNBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FkQTtBQWdCQSxTQWhCQSxlQWdCQSxLQWhCQSxFQWdCQTtBQUNBO0FBQ0E7QUFsQkE7QUFEQTtBQUxBLEc7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUFBO0FBQXVGO0FBQzNCO0FBQ0w7OztBQUd2RDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFvTSxDQUFnQixvUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F4TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFlO0FBQ1hBLE9BQUssRUFBRTtBQUNIQyxTQUFLLEVBQUU7QUFDSEMsVUFBSSxFQUFFQyxNQURIO0FBRUhDLGNBQVEsRUFBRTtBQUZQO0FBREosR0FESTtBQVFYQyxVQUFRLEVBQUU7QUFDTkMsWUFBUSxFQUFFO0FBQ05DLFNBRE0saUJBQ0E7QUFDRixlQUFPLEtBQUtOLEtBQUwsQ0FBV0ssUUFBWCxJQUF1QixFQUE5QjtBQUNILE9BSEs7QUFJTkUsU0FKTSxlQUlGUCxLQUpFLEVBSUs7QUFDUCxhQUFLUSxJQUFMLENBQVUsS0FBS1IsS0FBTCxDQUFXSyxRQUFyQixFQUErQkwsS0FBL0I7QUFDSDtBQU5LLEtBREo7QUFVTlMsVUFWTSxvQkFVRztBQUNMLGFBQU8sS0FBS1QsS0FBTCxDQUFXUyxNQUFYLElBQXFCLEVBQTVCO0FBQ0g7QUFaSztBQVJDLENBQWYsRSIsImZpbGUiOiJqcy9jaHVua3MvMzAuanM/aWQ9NTRkYjFkYjk4ZDVkMzJkZmQxZGEiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHAtc2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwic2V0dGluZ3MudGltZVwiXG4gICAgICAgICAgICBsYWJlbD1cIlRpbWUgT3B0aW9uc1wiXG4gICAgICAgICAgICBoZWxwPVwiU2hvdWxkIHRoaXMgYWxzbyBpbmNsdWRlIHRpbWU/XCJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZVwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cIltcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRlIE9ubHknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGUgYW5kIFRpbWUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVwiXG5cbiAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKCdzZXR0aW5ncy50aW1lJylcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJlcnJvcnMuZ2V0KCdzZXR0aW5ncy50aW1lJylcIj5cbiAgICAgICAgPC9wLXNlbGVjdD5cblxuICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgbmFtZT1cInNldHRpbmdzLmZvcm1hdFwiXG4gICAgICAgICAgICBsYWJlbD1cIkRhdGUgRm9ybWF0XCJcbiAgICAgICAgICAgIGhlbHA9JzxhIGhyZWY9XCJodHRwczovL2ZsYXRwaWNrci5qcy5vcmcvZm9ybWF0dGluZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5GbGF0cGlja3IgZGF0ZSBmb3JtYXQgcmVmZXJlbmNlPC9hPidcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWS1tLWRcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1hdFwiXG4gICAgICAgICAgICA6aGFzLWVycm9yPVwiZXJyb3JzLmhhcygnc2V0dGluZ3MuZm9ybWF0JylcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJlcnJvcnMuZ2V0KCdzZXR0aW5ncy5mb3JtYXQnKVwiPlxuICAgICAgICA8L3AtaW5wdXQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBmaWVsZHR5cGUgZnJvbSAnQC9taXhpbnMvZmllbGR0eXBlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnZGF0ZXRpbWUtZmllbGR0eXBlLXNldHRpbmdzJyxcblxuICAgICAgICBtaXhpbnM6IFtmaWVsZHR5cGVdLFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSAgPSBfLnRyaW0odGhpcy5zZXR0aW5ncy5mb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbnMgPSAvW0h8aHxHfGl8U3xzfEt8Ol0vZ1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIG5ldyBSZWdFeHAodG9rZW5zKS50ZXN0KHRoaXMuc2V0dGluZ3MuZm9ybWF0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXy50cmltKHRoaXMuc2V0dGluZ3MuZm9ybWF0KSArICcgaDppJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnNldHRpbmdzLmZvcm1hdC5yZXBsYWNlKHRva2VucywgJycpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZm9ybWF0ID0gdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbmFtZTogXCJzZXR0aW5ncy50aW1lXCIsXG4gICAgICAgICAgbGFiZWw6IFwiVGltZSBPcHRpb25zXCIsXG4gICAgICAgICAgaGVscDogXCJTaG91bGQgdGhpcyBhbHNvIGluY2x1ZGUgdGltZT9cIixcbiAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRhdGUgT25seVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0ZSBhbmQgVGltZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhcInNldHRpbmdzLnRpbWVcIiksXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5lcnJvcnMuZ2V0KFwic2V0dGluZ3MudGltZVwiKVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MudGltZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MsIFwidGltZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLnRpbWVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwic2V0dGluZ3MuZm9ybWF0XCIsXG4gICAgICAgICAgbGFiZWw6IFwiRGF0ZSBGb3JtYXRcIixcbiAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgJzxhIGhyZWY9XCJodHRwczovL2ZsYXRwaWNrci5qcy5vcmcvZm9ybWF0dGluZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5GbGF0cGlja3IgZGF0ZSBmb3JtYXQgcmVmZXJlbmNlPC9hPicsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiWS1tLWRcIixcbiAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhcInNldHRpbmdzLmZvcm1hdFwiKSxcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmVycm9ycy5nZXQoXCJzZXR0aW5ncy5mb3JtYXRcIilcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1hdCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uZm9ybWF0ID0gJCR2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1hdFwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDVhMTgzMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTA1YTE4MzInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTA1YTE4MzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTA1YTE4MzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDVhMTgzMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MDVhMTgzMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9EYXRlVGltZS9TZXR0aW5ncy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwNWExODMyJlwiIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnNldHRpbmdzIHx8IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMudmFsdWUuc2V0dGluZ3MsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9ycygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmVycm9ycyB8fCB7fVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=