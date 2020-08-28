(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'datetime-fieldtype',
  data: function data() {
    return {
      datetime: '',
      flatpickr: null
    };
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": null
    }
  },
  methods: {
    emitEvent: function emitEvent(selectedDates, dateStr, instance) {
      this.$emit('input', this.format(dateStr, instance));
    },
    format: function format(dateStr, instance) {
      if (dateStr != '') {
        var dateObject = instance.parseDate(dateStr);
        var formattedDate = instance.formatDate(dateObject, 'Y-m-d H:i:S');
        return formattedDate;
      }

      return null;
    },
    adjustTimezone: function adjustTimezone(dateStr) {
      var localDate = new Date();
      var minuteOffset = localDate.getTimezoneOffset();
      var convertedDate = new Date(this.datetime);
      convertedDate = new Date(convertedDate.getTime() + minuteOffset * 60000);
      return convertedDate;
    }
  },
  mounted: function mounted() {
    this.datetime = this.value;
    this.flatpickr = flatpickr__WEBPACK_IMPORTED_MODULE_0___default()('#flatpickr_' + this.field.handle, {
      altInput: true,
      enableTime: this.field.settings.time,
      altFormat: this.field.settings.format || 'Y-m-d',
      minuteIncrement: 1,
      allowInput: false,
      clickOpens: true,
      defaultDate: this.value,
      onChange: this.emitEvent
    });

    if (this.value) {
      var adjustedDate = this.adjustTimezone(this.datetime);
      var formattedDate = this.format(adjustedDate, this.flatpickr);
      this.flatpickr.setDate(formattedDate);
      this.emitEvent(null, this.flatpickr.latestSelectedDateObj, this.flatpickr);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a& ***!
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
  return _c("div", { staticClass: "form__group" }, [
    _c(
      "label",
      { staticClass: "form__label", attrs: { for: _vm.field.handle } },
      [_vm._v(_vm._s(_vm.field.name))]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "form__datetime" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.datetime,
            expression: "datetime"
          }
        ],
        staticClass: "w-full focus:outline-none",
        attrs: {
          id: "flatpickr_" + _vm.field.handle,
          name: _vm.field.handle,
          help: _vm.field.help,
          placeholder: _vm.field.settings.placeholder
        },
        domProps: { value: _vm.datetime },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.datetime = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "form__datetime--icon",
          attrs: { href: "#", title: "Select date" },
          on: {
            click: function($event) {
              return _vm.flatpickr.open()
            }
          }
        },
        [_c("fa-icon", { attrs: { icon: "calendar-alt" } })],
        1
      )
    ]),
    _vm._v(" "),
    _vm.datetime
      ? _c(
          "a",
          {
            staticClass: "datetime__clear text-sm pl-1",
            attrs: { href: "#", title: "Clear date" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.flatpickr.clear()
              }
            }
          },
          [_vm._v("\n    Clear date\n  ")]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.field.help
      ? _c("div", { staticClass: "form__control--meta" }, [
          _c("div", { staticClass: "form__help" }, [
            _c("span", { domProps: { innerHTML: _vm._s(_vm.field.help) } })
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/DateTime/Field.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/DateTime/Field.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=95dce20a& */ "./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/DateTime/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=95dce20a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWU/NzlhYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0RhdGVUaW1lL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0RhdGVUaW1lL0ZpZWxkLnZ1ZT9iOThhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvRGF0ZVRpbWUvRmllbGQudnVlPzY0YmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBSUEsR0FQQTtBQVFBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQU1BO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBTkEsR0FSQTtBQW9CQTtBQUNBLGFBREEscUJBQ0EsYUFEQSxFQUNBLE9BREEsRUFDQSxRQURBLEVBQ0E7QUFDQTtBQUNBLEtBSEE7QUFLQSxVQUxBLGtCQUtBLE9BTEEsRUFLQSxRQUxBLEVBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUEsS0FmQTtBQWlCQSxrQkFqQkEsMEJBaUJBLE9BakJBLEVBaUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBekJBLEdBcEJBO0FBZ0RBLFNBaERBLHFCQWdEQTtBQUNBO0FBRUE7QUFDQSxvQkFEQTtBQUVBLDBDQUZBO0FBR0Esc0RBSEE7QUFJQSx3QkFKQTtBQUtBLHVCQUxBO0FBTUEsc0JBTkE7QUFPQSw2QkFQQTtBQVFBO0FBUkE7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFyRUEsRzs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZCQUE2QjtBQUNqRDtBQUNBO0FBQ0EsT0FBTyxxQ0FBcUMsd0JBQXdCLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQ0FBZ0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtDQUFrQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHdCQUF3QixTQUFTLHVCQUF1QixFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQ0FBaUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUNBQXFDO0FBQ3hELHFCQUFxQiw0QkFBNEI7QUFDakQsd0JBQXdCLFlBQVksb0NBQW9DLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzU4LmpzP2lkPWRlMzZkZjcyNjdiMmQ2ZGUzN2NmIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtX19ncm91cFwiPlxuICAgICAgICA8bGFiZWwgOmZvcj1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj57e2ZpZWxkLm5hbWV9fTwvbGFiZWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2RhdGV0aW1lXCI+XG4gICAgICAgICAgICA8aW5wdXQgOmlkPVwiJ2ZsYXRwaWNrcl8nICsgZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgICAgICA6aGVscD1cImZpZWxkLmhlbHBcIlxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cImZpZWxkLnNldHRpbmdzLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0ZXRpbWVcIlxuICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImZvcm1fX2RhdGV0aW1lLS1pY29uXCIgdGl0bGU9XCJTZWxlY3QgZGF0ZVwiIEBjbGljaz1cImZsYXRwaWNrci5vcGVuKClcIj5cbiAgICAgICAgICAgICAgICA8ZmEtaWNvbiBpY29uPVwiY2FsZW5kYXItYWx0XCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgPC9hPlxuICAgIDwvZGl2PlxuXG4gICAgPGEgdi1pZj1cImRhdGV0aW1lXCIgaHJlZj1cIiNcIiBjbGFzcz1cImRhdGV0aW1lX19jbGVhciB0ZXh0LXNtIHBsLTFcIiBAY2xpY2sucHJldmVudD1cImZsYXRwaWNrci5jbGVhcigpXCIgdGl0bGU9XCJDbGVhciBkYXRlXCI+XG4gICAgICBDbGVhciBkYXRlXG4gICAgPC9hPlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm1fX2NvbnRyb2wtLW1ldGFcIiB2LWlmPVwiZmllbGQuaGVscFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2hlbHBcIj5cbiAgICAgICAgPHNwYW4gdi1odG1sPVwiZmllbGQuaGVscFwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnZGF0ZXRpbWUtZmllbGR0eXBlJyxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0ZXRpbWU6ICcnLFxuICAgICAgICBmbGF0cGlja3I6IG51bGxcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICBmaWVsZDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBlbWl0RXZlbnQoc2VsZWN0ZWREYXRlcywgZGF0ZVN0ciwgaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmZvcm1hdChkYXRlU3RyLCBpbnN0YW5jZSkpXG4gICAgICB9LFxuXG4gICAgICBmb3JtYXQoZGF0ZVN0ciwgaW5zdGFuY2UpIHtcblxuICAgICAgICBpZiAoZGF0ZVN0ciAhPSAnJykge1xuICAgICAgICAgIGxldCBkYXRlT2JqZWN0ID0gaW5zdGFuY2UucGFyc2VEYXRlKGRhdGVTdHIpXG4gICAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBpbnN0YW5jZS5mb3JtYXREYXRlKGRhdGVPYmplY3QsICdZLW0tZCBIOmk6UycpXG4gICAgICAgICAgcmV0dXJuIGZvcm1hdHRlZERhdGVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG5cbiAgICAgIH0sXG5cbiAgICAgIGFkanVzdFRpbWV6b25lKGRhdGVTdHIpIHtcbiAgICAgICAgbGV0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBtaW51dGVPZmZzZXQgPSBsb2NhbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgICAgICBsZXQgY29udmVydGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZXRpbWUpXG4gICAgICAgIGNvbnZlcnRlZERhdGUgPSBuZXcgRGF0ZShjb252ZXJ0ZWREYXRlLmdldFRpbWUoKSArIChtaW51dGVPZmZzZXQgKiA2MDAwMCkpXG5cbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZERhdGVcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIHRoaXMuZGF0ZXRpbWUgPSB0aGlzLnZhbHVlXG5cbiAgICAgIHRoaXMuZmxhdHBpY2tyID0gZmxhdHBpY2tyKCcjZmxhdHBpY2tyXycgKyB0aGlzLmZpZWxkLmhhbmRsZSwge1xuICAgICAgICBhbHRJbnB1dDogdHJ1ZSxcbiAgICAgICAgZW5hYmxlVGltZTogdGhpcy5maWVsZC5zZXR0aW5ncy50aW1lLFxuICAgICAgICBhbHRGb3JtYXQ6IHRoaXMuZmllbGQuc2V0dGluZ3MuZm9ybWF0IHx8ICdZLW0tZCcsXG4gICAgICAgIG1pbnV0ZUluY3JlbWVudDogMSxcbiAgICAgICAgYWxsb3dJbnB1dDogZmFsc2UsXG4gICAgICAgIGNsaWNrT3BlbnM6IHRydWUsXG4gICAgICAgIGRlZmF1bHREYXRlOiB0aGlzLnZhbHVlLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5lbWl0RXZlbnRcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgIGxldCBhZGp1c3RlZERhdGUgPSB0aGlzLmFkanVzdFRpbWV6b25lKHRoaXMuZGF0ZXRpbWUpXG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gdGhpcy5mb3JtYXQoYWRqdXN0ZWREYXRlLCB0aGlzLmZsYXRwaWNrcilcbiAgICAgICAgdGhpcy5mbGF0cGlja3Iuc2V0RGF0ZShmb3JtYXR0ZWREYXRlKVxuICAgICAgICB0aGlzLmVtaXRFdmVudChudWxsLCB0aGlzLmZsYXRwaWNrci5sYXRlc3RTZWxlY3RlZERhdGVPYmosIHRoaXMuZmxhdHBpY2tyKVxuICAgICAgfVxuXG4gICAgfVxuICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZ3JvdXBcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImxhYmVsXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIsIGF0dHJzOiB7IGZvcjogX3ZtLmZpZWxkLmhhbmRsZSB9IH0sXG4gICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZmllbGQubmFtZSkpXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2RhdGV0aW1lXCIgfSwgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZXRpbWUsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGV0aW1lXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpZDogXCJmbGF0cGlja3JfXCIgKyBfdm0uZmllbGQuaGFuZGxlLFxuICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUsXG4gICAgICAgICAgaGVscDogX3ZtLmZpZWxkLmhlbHAsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5maWVsZC5zZXR0aW5ncy5wbGFjZWhvbGRlclxuICAgICAgICB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmRhdGV0aW1lIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3ZtLmRhdGV0aW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZGF0ZXRpbWUtLWljb25cIixcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiwgdGl0bGU6IFwiU2VsZWN0IGRhdGVcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZmxhdHBpY2tyLm9wZW4oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiZmEtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFwiY2FsZW5kYXItYWx0XCIgfSB9KV0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5kYXRldGltZVxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkYXRldGltZV9fY2xlYXIgdGV4dC1zbSBwbC0xXCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiwgdGl0bGU6IFwiQ2xlYXIgZGF0ZVwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZsYXRwaWNrci5jbGVhcigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgQ2xlYXIgZGF0ZVxcbiAgXCIpXVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmZpZWxkLmhlbHBcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19jb250cm9sLS1tZXRhXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9faGVscFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5maWVsZC5oZWxwKSB9IH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NWRjZTIwYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTVkY2UyMGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTVkY2UyMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTVkY2UyMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NWRjZTIwYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5NWRjZTIwYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk1ZGNlMjBhJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==