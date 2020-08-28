(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @simonwep/pickr */ "./node_modules/@simonwep/pickr/dist/pickr.min.js");
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr__WEBPACK_IMPORTED_MODULE_0__);
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
  name: 'color-picker-fieldtype',
  data: function data() {
    return {
      color: {},
      pickr: {},
      rgba: '',
      hex: '',
      cmyk: '',
      updating: false,
      transparency: true
    };
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": ''
    }
  },
  computed: {
    pickrClass: function pickrClass() {
      return this.field.handle + '-pickr';
    }
  },
  methods: {
    pickrChanged: function pickrChanged(color) {
      this.color = color;
      this.hex = this.color ? this.color.toHEXA().toString() : '';
      this.rgba = this.color ? this.color.toRGBA().toString(0) : '';
      this.$emit('input', this.rgba);
    },
    changeColor: function changeColor(colorString) {
      if (this.pickr.setColor(colorString)) {
        this.pickr.applyColor();
      }
    }
  },
  watch: {
    rgba: function rgba(colorString) {
      this.changeColor(colorString);
    },
    hex: function hex(colorString) {
      this.changeColor(colorString);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var defaultColor = this.value === null && this.field.settings["default"] ? this.field.settings["default"] : '';
    this.pickr = _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      el: '.' + this.pickrClass,
      theme: 'monolith',
      "default": this.value && this.value != '' ? this.value : defaultColor,
      swatches: ['#000000', '#FFFFFF', '#F7FAFC', '#EDF2F7', '#E2E8F0', '#CBD5E0', '#A0AEC0', '#718096', '#4A5568', '#2D3748', '#F56565', '#F98C12', '#F6E05E', '#BF7E32', '#48BB78', '#38B2AC', '#4299E1', '#667EEA', '#9F7AEA', '#ED64A6'],
      comparison: true,
      components: {
        opacity: this.transparency,
        hue: true // interaction: {
        //     // hex: true,
        //     // rgba: true,
        //     // input: true,
        //     // clear: true,
        // }

      }
    });

    if (this.value) {
      this.changeColor(this.value);
      this.color = this.pickr.getColor();
      this.pickrChanged(this.color);
    } else if (defaultColor) {
      this.changeColor(defaultColor);
      this.color = this.pickr.getColor();
      this.pickrChanged(this.color);
    }

    this.pickr.on('save', function (color, instance) {
      _this.pickrChanged(color);
    });
    this.pickr.on('change', function (color, instance) {
      _this.pickrChanged(color);
    });
    this.pickr.on('clear', function (instance) {
      _this.pickrChanged(null);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=template&id=20d05097&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=template&id=20d05097& ***!
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
  return _c("div", { staticClass: "color-picker" }, [
    _c("div", { staticClass: "form__group" }, [
      _c(
        "label",
        { staticClass: "form__label", attrs: { for: _vm.field.handle } },
        [_vm._v(_vm._s(_vm.field.name))]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "flex items-end" }, [
        _c("div", { staticClass: "flex-grow mr-3" }, [
          _c(
            "label",
            { staticClass: "text-xs", attrs: { for: _vm.pickrClass + "_hex" } },
            [_vm._v("Picker")]
          ),
          _vm._v(" "),
          _c("div", { class: _vm.pickrClass })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mr-3 flex-grow" }, [
          _c(
            "label",
            { staticClass: "text-xs", attrs: { for: _vm.pickrClass + "_hex" } },
            [_vm._v("Hex")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.hex,
                expression: "hex"
              }
            ],
            staticClass: "form__control",
            attrs: {
              id: _vm.pickrClass + "_hex",
              name: _vm.pickrClass + "_hex",
              type: "text"
            },
            domProps: { value: _vm.hex },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.hex = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow" }, [
          _c(
            "label",
            {
              staticClass: "text-xs",
              attrs: { for: _vm.pickrClass + "_rgba" }
            },
            [_vm._v("RGBA")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.rgba,
                expression: "rgba"
              }
            ],
            staticClass: "form__control",
            attrs: {
              id: _vm.pickrClass + "_rgba",
              name: _vm.pickrClass + "_rgba",
              type: "text"
            },
            domProps: { value: _vm.rgba },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.rgba = $event.target.value
              }
            }
          })
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/ColorPicker/Field.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/ColorPicker/Field.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_20d05097___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=20d05097& */ "./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=template&id=20d05097&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_20d05097___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_20d05097___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/ColorPicker/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=template&id=20d05097&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=template&id=20d05097& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_20d05097___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=20d05097& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=template&id=20d05097&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_20d05097___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_20d05097___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Db2xvclBpY2tlci9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Db2xvclBpY2tlci9GaWVsZC52dWU/YTBhMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0NvbG9yUGlja2VyL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0NvbG9yUGlja2VyL0ZpZWxkLnZ1ZT84Y2RjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQ29sb3JQaWNrZXIvRmllbGQudnVlPzMxM2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTtBQUVBO0FBQ0EsZ0NBREE7QUFHQSxNQUhBLGtCQUdBO0FBQ0E7QUFDQSxlQURBO0FBRUEsZUFGQTtBQUdBLGNBSEE7QUFJQSxhQUpBO0FBS0EsY0FMQTtBQU1BLHFCQU5BO0FBT0E7QUFQQTtBQVNBLEdBYkE7QUFlQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQU5BLEdBZkE7QUEyQkE7QUFDQSxjQURBLHdCQUNBO0FBQ0E7QUFDQTtBQUhBLEdBM0JBO0FBaUNBO0FBQ0EsZ0JBREEsd0JBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSxLQVJBO0FBVUEsZUFWQSx1QkFVQSxXQVZBLEVBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBLEdBakNBO0FBa0RBO0FBQ0EsUUFEQSxnQkFDQSxXQURBLEVBQ0E7QUFDQTtBQUNBLEtBSEE7QUFLQSxPQUxBLGVBS0EsV0FMQSxFQUtBO0FBQ0E7QUFDQTtBQVBBLEdBbERBO0FBNERBLFNBNURBLHFCQTREQTtBQUFBOztBQUNBO0FBRUE7QUFDQSwrQkFEQTtBQUVBLHVCQUZBO0FBR0EsMkVBSEE7QUFJQSxpQkFDQSxTQURBLEVBRUEsU0FGQSxFQUlBLFNBSkEsRUFLQSxTQUxBLEVBTUEsU0FOQSxFQU9BLFNBUEEsRUFRQSxTQVJBLEVBU0EsU0FUQSxFQVVBLFNBVkEsRUFXQSxTQVhBLEVBYUEsU0FiQSxFQWNBLFNBZEEsRUFlQSxTQWZBLEVBZ0JBLFNBaEJBLEVBaUJBLFNBakJBLEVBa0JBLFNBbEJBLEVBbUJBLFNBbkJBLEVBb0JBLFNBcEJBLEVBcUJBLFNBckJBLEVBc0JBLFNBdEJBLENBSkE7QUE0QkEsc0JBNUJBO0FBNkJBO0FBQ0Esa0NBREE7QUFFQSxpQkFGQSxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUQTtBQTdCQTs7QUEwQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQSxLQU5BLE1BTUE7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FGQTtBQUlBO0FBQ0E7QUFDQSxLQUZBO0FBSUE7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQWxJQSxHOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xELGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQSxTQUFTLHFDQUFxQyx3QkFBd0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pELG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBLGFBQWEsaUNBQWlDLCtCQUErQixFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBLGFBQWEsaUNBQWlDLCtCQUErQixFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWlNLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvNTYuanM/aWQ9MDQ5NGMzMDc5YzZhODI0YzQ2ODQiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbG9yLXBpY2tlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZmllbGQuaGFuZGxlXCIgY2xhc3M9XCJmb3JtX19sYWJlbFwiPnt7IGZpZWxkLm5hbWUgfX08L2xhYmVsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93IG1yLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJwaWNrckNsYXNzICsgJ19oZXgnXCIgY2xhc3M9XCJ0ZXh0LXhzXCI+UGlja2VyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJwaWNrckNsYXNzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTMgZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwicGlja3JDbGFzcyArICdfaGV4J1wiIGNsYXNzPVwidGV4dC14c1wiPkhleDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCA6aWQ9XCJwaWNrckNsYXNzICsgJ19oZXgnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwicGlja3JDbGFzcyArICdfaGV4J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm1fX2NvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJoZXhcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJwaWNrckNsYXNzICsgJ19yZ2JhJ1wiIGNsYXNzPVwidGV4dC14c1wiPlJHQkE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgOmlkPVwicGlja3JDbGFzcyArICdfcmdiYSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJwaWNrckNsYXNzICsgJ19yZ2JhJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtX19jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicmdiYVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgUGlja3IgZnJvbSAnQHNpbW9ud2VwL3BpY2tyJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnY29sb3ItcGlja2VyLWZpZWxkdHlwZScsXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHt9LFxuICAgICAgICAgICAgICAgIHBpY2tyOiB7fSxcbiAgICAgICAgICAgICAgICByZ2JhOiAnJyxcbiAgICAgICAgICAgICAgICBoZXg6ICcnLFxuICAgICAgICAgICAgICAgIGNteWs6ICcnLFxuICAgICAgICAgICAgICAgIHVwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVuY3k6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgcGlja3JDbGFzcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maWVsZC5oYW5kbGUgKyAnLXBpY2tyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBwaWNrckNoYW5nZWQoY29sb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcblxuICAgICAgICAgICAgICAgIHRoaXMuaGV4ID0gdGhpcy5jb2xvciA/IHRoaXMuY29sb3IudG9IRVhBKCkudG9TdHJpbmcoKSA6ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5yZ2JhID0gdGhpcy5jb2xvciA/IHRoaXMuY29sb3IudG9SR0JBKCkudG9TdHJpbmcoMCkgOiAnJ1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLnJnYmEpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjaGFuZ2VDb2xvcihjb2xvclN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpY2tyLnNldENvbG9yKGNvbG9yU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tyLmFwcGx5Q29sb3IoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHJnYmEoY29sb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNvbG9yKGNvbG9yU3RyaW5nKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGV4KGNvbG9yU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VDb2xvcihjb2xvclN0cmluZylcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGxldCBkZWZhdWx0Q29sb3IgPSB0aGlzLnZhbHVlID09PSBudWxsICYmIHRoaXMuZmllbGQuc2V0dGluZ3MuZGVmYXVsdCA/IHRoaXMuZmllbGQuc2V0dGluZ3MuZGVmYXVsdCA6ICcnXG5cbiAgICAgICAgICAgIHRoaXMucGlja3IgPSBQaWNrci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGVsOiAnLicgKyB0aGlzLnBpY2tyQ2xhc3MsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdtb25vbGl0aCcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlICE9ICcnID8gdGhpcy52YWx1ZSA6IGRlZmF1bHRDb2xvcixcbiAgICAgICAgICAgICAgICBzd2F0Y2hlczogW1xuICAgICAgICAgICAgICAgICAgICAnIzAwMDAwMCcsXG4gICAgICAgICAgICAgICAgICAgICcjRkZGRkZGJyxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICcjRjdGQUZDJyxcbiAgICAgICAgICAgICAgICAgICAgJyNFREYyRjcnLFxuICAgICAgICAgICAgICAgICAgICAnI0UyRThGMCcsXG4gICAgICAgICAgICAgICAgICAgICcjQ0JENUUwJyxcbiAgICAgICAgICAgICAgICAgICAgJyNBMEFFQzAnLFxuICAgICAgICAgICAgICAgICAgICAnIzcxODA5NicsXG4gICAgICAgICAgICAgICAgICAgICcjNEE1NTY4JyxcbiAgICAgICAgICAgICAgICAgICAgJyMyRDM3NDgnLFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJyNGNTY1NjUnLFxuICAgICAgICAgICAgICAgICAgICAnI0Y5OEMxMicsXG4gICAgICAgICAgICAgICAgICAgICcjRjZFMDVFJyxcbiAgICAgICAgICAgICAgICAgICAgJyNCRjdFMzInLFxuICAgICAgICAgICAgICAgICAgICAnIzQ4QkI3OCcsXG4gICAgICAgICAgICAgICAgICAgICcjMzhCMkFDJyxcbiAgICAgICAgICAgICAgICAgICAgJyM0Mjk5RTEnLFxuICAgICAgICAgICAgICAgICAgICAnIzY2N0VFQScsXG4gICAgICAgICAgICAgICAgICAgICcjOUY3QUVBJyxcbiAgICAgICAgICAgICAgICAgICAgJyNFRDY0QTYnLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgY29tcGFyaXNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMudHJhbnNwYXJlbmN5LFxuICAgICAgICAgICAgICAgICAgICBodWU6IHRydWUsXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZXJhY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGhleDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIHJnYmE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBpbnB1dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNsZWFyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNvbG9yKHRoaXMudmFsdWUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMucGlja3IuZ2V0Q29sb3IoKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucGlja3JDaGFuZ2VkKHRoaXMuY29sb3IpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlZmF1bHRDb2xvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ29sb3IoZGVmYXVsdENvbG9yKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLnBpY2tyLmdldENvbG9yKClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tyQ2hhbmdlZCh0aGlzLmNvbG9yKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnBpY2tyLm9uKCdzYXZlJywgKGNvbG9yLCBpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGlja3JDaGFuZ2VkKGNvbG9yKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5waWNrci5vbignY2hhbmdlJywgKGNvbG9yLCBpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGlja3JDaGFuZ2VkKGNvbG9yKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5waWNrci5vbignY2xlYXInLCAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tyQ2hhbmdlZChudWxsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sb3ItcGlja2VyXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZ3JvdXBcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIsIGF0dHJzOiB7IGZvcjogX3ZtLmZpZWxkLmhhbmRsZSB9IH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSldXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1lbmRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1ncm93IG1yLTNcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQteHNcIiwgYXR0cnM6IHsgZm9yOiBfdm0ucGlja3JDbGFzcyArIFwiX2hleFwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJQaWNrZXJcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IF92bS5waWNrckNsYXNzIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTMgZmxleC1ncm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzXCIsIGF0dHJzOiB7IGZvcjogX3ZtLnBpY2tyQ2xhc3MgKyBcIl9oZXhcIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiSGV4XCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmhleCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImhleFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtX19jb250cm9sXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogX3ZtLnBpY2tyQ2xhc3MgKyBcIl9oZXhcIixcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLnBpY2tyQ2xhc3MgKyBcIl9oZXhcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmhleCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5oZXggPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4LWdyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBfdm0ucGlja3JDbGFzcyArIFwiX3JnYmFcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlJHQkFcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmdiYSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJnYmFcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fY29udHJvbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IF92bS5waWNrckNsYXNzICsgXCJfcmdiYVwiLFxuICAgICAgICAgICAgICBuYW1lOiBfdm0ucGlja3JDbGFzcyArIFwiX3JnYmFcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnJnYmEgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0ucmdiYSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBkMDUwOTcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIwZDA1MDk3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwZDA1MDk3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwZDA1MDk3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBkMDUwOTcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjBkMDUwOTcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQ29sb3JQaWNrZXIvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGQwNTA5NyZcIiJdLCJzb3VyY2VSb290IjoiIn0=