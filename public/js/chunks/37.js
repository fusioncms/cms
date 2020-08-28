(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Input/Settings.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Input/Settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'input-fieldtype-settings',
  data: function data() {
    return {
      type: this.value.type || 'text',
      placeholder: this.value.placeholder || ''
    };
  },
  mixins: [_mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Input/Settings.vue?vue&type=template&id=7674057d&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Input/Settings.vue?vue&type=template&id=7674057d& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
          name: "settings.type",
          label: "Type",
          help: "What type of input should this be?",
          autocomplete: "off",
          options: [
            {
              label: "Text",
              value: "text"
            },
            {
              label: "E-mail",
              value: "email"
            },
            {
              label: "Hidden",
              value: "hidden"
            },
            {
              label: "Password",
              value: "password"
            },
            {
              label: "Search",
              value: "search"
            },
            {
              label: "Telephone Number",
              value: "tel"
            },
            {
              label: "URL",
              value: "url"
            }
          ],
          "has-error": _vm.errors.has("settings.type"),
          "error-message": _vm.errors.get("settings.type")
        },
        model: {
          value: _vm.settings.type,
          callback: function($$v) {
            _vm.$set(_vm.settings, "type", $$v)
          },
          expression: "settings.type"
        }
      }),
      _vm._v(" "),
      _c("p-input", {
        attrs: {
          name: "settings.placeholder",
          label: "Placeholder",
          help:
            "Text that will appear inside the input element's content area when empty.",
          autocomplete: "off",
          "has-error": _vm.errors.has("settings.placeholder"),
          "error-message": _vm.errors.get("settings.placeholder")
        },
        model: {
          value: _vm.settings.placeholder,
          callback: function($$v) {
            _vm.$set(_vm.settings, "placeholder", $$v)
          },
          expression: "settings.placeholder"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/Input/Settings.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Input/Settings.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_7674057d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=7674057d& */ "./resources/js/components/Fieldtypes/Input/Settings.vue?vue&type=template&id=7674057d&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Input/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_7674057d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_7674057d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Input/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Input/Settings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Input/Settings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Input/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Input/Settings.vue?vue&type=template&id=7674057d&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Input/Settings.vue?vue&type=template&id=7674057d& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_7674057d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=7674057d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Input/Settings.vue?vue&type=template&id=7674057d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_7674057d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_7674057d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9JbnB1dC9TZXR0aW5ncy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9JbnB1dC9TZXR0aW5ncy52dWU/NTk5NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0lucHV0L1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0lucHV0L1NldHRpbmdzLnZ1ZT9kNGEzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvSW5wdXQvU2V0dGluZ3MudnVlPzRmMzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9maWVsZHR5cGUuanMiXSwibmFtZXMiOlsicHJvcHMiLCJ2YWx1ZSIsInR5cGUiLCJPYmplY3QiLCJyZXF1aXJlZCIsImNvbXB1dGVkIiwic2V0dGluZ3MiLCJnZXQiLCJzZXQiLCIkc2V0IiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REE7QUFFQTtBQUNBLGtDQURBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0EscUNBREE7QUFFQTtBQUZBO0FBSUEsR0FSQTtBQVVBO0FBVkEsRzs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUFBO0FBQUE7QUFBQTtBQUF1RjtBQUMzQjtBQUNMOzs7QUFHdkQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBb00sQ0FBZ0Isb1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBeE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZTtBQUNYQSxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFFO0FBQ0hDLFVBQUksRUFBRUMsTUFESDtBQUVIQyxjQUFRLEVBQUU7QUFGUDtBQURKLEdBREk7QUFRWEMsVUFBUSxFQUFFO0FBQ05DLFlBQVEsRUFBRTtBQUNOQyxTQURNLGlCQUNBO0FBQ0YsZUFBTyxLQUFLTixLQUFMLENBQVdLLFFBQVgsSUFBdUIsRUFBOUI7QUFDSCxPQUhLO0FBSU5FLFNBSk0sZUFJRlAsS0FKRSxFQUlLO0FBQ1AsYUFBS1EsSUFBTCxDQUFVLEtBQUtSLEtBQUwsQ0FBV0ssUUFBckIsRUFBK0JMLEtBQS9CO0FBQ0g7QUFOSyxLQURKO0FBVU5TLFVBVk0sb0JBVUc7QUFDTCxhQUFPLEtBQUtULEtBQUwsQ0FBV1MsTUFBWCxJQUFxQixFQUE1QjtBQUNIO0FBWks7QUFSQyxDQUFmLEUiLCJmaWxlIjoianMvY2h1bmtzLzM3LmpzP2lkPTk5OGFjODFmM2Y4ZDIwNjRjMzIzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwLXNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cInNldHRpbmdzLnR5cGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJUeXBlXCJcbiAgICAgICAgICAgIGhlbHA9XCJXaGF0IHR5cGUgb2YgaW5wdXQgc2hvdWxkIHRoaXMgYmU/XCJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudHlwZVwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cIltcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRS1tYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU2VhcmNoJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdzZWFyY2gnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1RlbGVwaG9uZSBOdW1iZXInLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3RlbCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVVJMJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd1cmwnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXCJcbiAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKCdzZXR0aW5ncy50eXBlJylcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJlcnJvcnMuZ2V0KCdzZXR0aW5ncy50eXBlJylcIj5cbiAgICAgICAgPC9wLXNlbGVjdD5cblxuICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgbmFtZT1cInNldHRpbmdzLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgaGVscD1cIlRleHQgdGhhdCB3aWxsIGFwcGVhciBpbnNpZGUgdGhlIGlucHV0IGVsZW1lbnQncyBjb250ZW50IGFyZWEgd2hlbiBlbXB0eS5cIlxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICA6aGFzLWVycm9yPVwiZXJyb3JzLmhhcygnc2V0dGluZ3MucGxhY2Vob2xkZXInKVwiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImVycm9ycy5nZXQoJ3NldHRpbmdzLnBsYWNlaG9sZGVyJylcIj5cbiAgICAgICAgPC9wLWlucHV0PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgZmllbGR0eXBlIGZyb20gJ0AvbWl4aW5zL2ZpZWxkdHlwZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2lucHV0LWZpZWxkdHlwZS1zZXR0aW5ncycsXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy52YWx1ZS50eXBlIHx8ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy52YWx1ZS5wbGFjZWhvbGRlciB8fCAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1peGluczogW2ZpZWxkdHlwZV1cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBuYW1lOiBcInNldHRpbmdzLnR5cGVcIixcbiAgICAgICAgICBsYWJlbDogXCJUeXBlXCIsXG4gICAgICAgICAgaGVscDogXCJXaGF0IHR5cGUgb2YgaW5wdXQgc2hvdWxkIHRoaXMgYmU/XCIsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVGV4dFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkUtbWFpbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogXCJlbWFpbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJIaWRkZW5cIixcbiAgICAgICAgICAgICAgdmFsdWU6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBcInBhc3N3b3JkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNlYXJjaFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogXCJzZWFyY2hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVGVsZXBob25lIE51bWJlclwiLFxuICAgICAgICAgICAgICB2YWx1ZTogXCJ0ZWxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVVJMXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBcInVybFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhcInNldHRpbmdzLnR5cGVcIiksXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5lcnJvcnMuZ2V0KFwic2V0dGluZ3MudHlwZVwiKVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MudHlwZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MsIFwidHlwZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLnR5cGVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwic2V0dGluZ3MucGxhY2Vob2xkZXJcIixcbiAgICAgICAgICBsYWJlbDogXCJQbGFjZWhvbGRlclwiLFxuICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICBcIlRleHQgdGhhdCB3aWxsIGFwcGVhciBpbnNpZGUgdGhlIGlucHV0IGVsZW1lbnQncyBjb250ZW50IGFyZWEgd2hlbiBlbXB0eS5cIixcbiAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmVycm9ycy5oYXMoXCJzZXR0aW5ncy5wbGFjZWhvbGRlclwiKSxcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmVycm9ycy5nZXQoXCJzZXR0aW5ncy5wbGFjZWhvbGRlclwiKVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MucGxhY2Vob2xkZXIsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLCBcInBsYWNlaG9sZGVyXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MucGxhY2Vob2xkZXJcIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzY3NDA1N2QmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc2NzQwNTdkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc2NzQwNTdkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc2NzQwNTdkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzY3NDA1N2QmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzY3NDA1N2QnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvSW5wdXQvU2V0dGluZ3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Njc0MDU3ZCZcIiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5zZXR0aW5ncyB8fCB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnZhbHVlLnNldHRpbmdzLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5lcnJvcnMgfHwge31cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9