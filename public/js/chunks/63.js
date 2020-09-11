(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
__webpack_require__(/*! codemirror/mode/gfm/gfm */ "./node_modules/codemirror/mode/gfm/gfm.js");

__webpack_require__(/*! codemirror/keymap/sublime */ "./node_modules/codemirror/keymap/sublime.js");

__webpack_require__(/*! codemirror/addon/display/placeholder */ "./node_modules/codemirror/addon/display/placeholder.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'markdown-fieldtype',
  data: function data() {
    return {
      codemirror: null
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
    preview: function preview() {
      var tokens = marked__WEBPACK_IMPORTED_MODULE_1___default.a.lexer(this.value || '');
      var html = marked__WEBPACK_IMPORTED_MODULE_1___default.a.parser(tokens);
      return html;
    },
    el: function el() {
      return this.$refs[this.field.handle];
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.codemirror = codemirror__WEBPACK_IMPORTED_MODULE_0___default.a.fromTextArea(this.el, {
      theme: 'fusion',
      mode: {
        name: 'gfm',
        highlightFormatting: true,
        fencedCodeBlockHighlighting: true
      },
      lineWrapping: true,
      viewportMargin: Infinity,
      keyMap: 'sublime'
    });
    setTimeout(function () {
      _this.codemirror.refresh();
    }, 1);
    this.codemirror.on('change', function (instance) {
      _this.$emit('input', instance.getValue());
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=template&id=341cc34f&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=template&id=341cc34f& ***!
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
    { staticClass: "form__group" },
    [
      _c("label", {
        staticClass: "form__label",
        attrs: { for: _vm.field.handle },
        domProps: { innerHTML: _vm._s(_vm.field.name) }
      }),
      _vm._v(" "),
      _c(
        "ui-tabs",
        [
          _c("ui-tab", { attrs: { name: "Markdown" } }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.value,
                  expression: "value"
                }
              ],
              ref: _vm.field.handle,
              attrs: {
                name: _vm.field.handle,
                cols: "30",
                rows: "12",
                autofocus: ""
              },
              domProps: { value: _vm.value },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.value = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("ui-tab", { attrs: { name: "Preview" } }, [
            _c("div", {
              staticClass: "markdown-body",
              domProps: { innerHTML: _vm._s(_vm.preview) }
            })
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/Markdown/Field.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Markdown/Field.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_341cc34f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=341cc34f& */ "./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=template&id=341cc34f&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_341cc34f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_341cc34f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Markdown/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=template&id=341cc34f&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=template&id=341cc34f& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_341cc34f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=341cc34f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=template&id=341cc34f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_341cc34f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_341cc34f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9NYXJrZG93bi9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9NYXJrZG93bi9GaWVsZC52dWU/NTE2ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL01hcmtkb3duL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL01hcmtkb3duL0ZpZWxkLnZ1ZT8yMjhmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvTWFya2Rvd24vRmllbGQudnVlPzFjZmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0EsNEJBREE7QUFHQSxNQUhBLGtCQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FQQTtBQVNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQU1BO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBTkEsR0FUQTtBQXFCQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxLQU5BO0FBUUEsTUFSQSxnQkFRQTtBQUNBO0FBQ0E7QUFWQSxHQXJCQTtBQWtDQSxTQWxDQSxxQkFrQ0E7QUFBQTs7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFDQSxtQkFEQTtBQUVBLGlDQUZBO0FBR0E7QUFIQSxPQUZBO0FBT0Esd0JBUEE7QUFRQSw4QkFSQTtBQVNBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBcERBLEc7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDZCQUE2QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDLG1CQUFtQjtBQUNuQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUyxtQkFBbUIsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YseUJBQXlCLG1CQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUyxrQkFBa0IsRUFBRTtBQUNyRDtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWlNLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvNjMuanM/aWQ9YzUxODhjZTgwZTU5MzRhODc1YzgiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImZvcm1fX2dyb3VwXCI+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtX19sYWJlbFwiXG4gICAgICAgICAgICA6Zm9yPVwiZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgIHYtaHRtbD1cImZpZWxkLm5hbWVcIj5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8dWktdGFicz5cbiAgICAgICAgICAgIDx1aS10YWIgbmFtZT1cIk1hcmtkb3duXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIDpyZWY9XCJmaWVsZC5oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1cz5cbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgPC91aS10YWI+XG4gICAgICAgICAgICA8dWktdGFiIG5hbWU9XCJQcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWh0bWw9XCJwcmV2aWV3XCIgY2xhc3M9XCJtYXJrZG93bi1ib2R5XCI+PC9kaXY+XG4gICAgICAgICAgICA8L3VpLXRhYj5cbiAgICAgICAgPC91aS10YWJzPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICByZXF1aXJlKCdjb2RlbWlycm9yL21vZGUvZ2ZtL2dmbScpXG4gICAgcmVxdWlyZSgnY29kZW1pcnJvci9rZXltYXAvc3VibGltZScpXG4gICAgcmVxdWlyZSgnY29kZW1pcnJvci9hZGRvbi9kaXNwbGF5L3BsYWNlaG9sZGVyJylcblxuICAgIGltcG9ydCBDb2RlTWlycm9yIGZyb20gJ2NvZGVtaXJyb3InXG4gICAgaW1wb3J0IG1hcmtlZCAgICAgZnJvbSAnbWFya2VkJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnbWFya2Rvd24tZmllbGR0eXBlJyxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2RlbWlycm9yOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgcHJldmlldygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBtYXJrZWQubGV4ZXIodGhpcy52YWx1ZSB8fCAnJylcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sICAgPSBtYXJrZWQucGFyc2VyKHRva2VucylcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZWwoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnNbdGhpcy5maWVsZC5oYW5kbGVdXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmNvZGVtaXJyb3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYSh0aGlzLmVsLCB7XG4gICAgICAgICAgICAgICAgdGhlbWU6ICdmdXNpb24nLFxuICAgICAgICAgICAgICAgIG1vZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2dmbScsXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodEZvcm1hdHRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZlbmNlZENvZGVCbG9ja0hpZ2hsaWdodGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxpbmVXcmFwcGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2aWV3cG9ydE1hcmdpbjogSW5maW5pdHksXG4gICAgICAgICAgICAgICAga2V5TWFwOiAnc3VibGltZScsXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jb2RlbWlycm9yLnJlZnJlc2goKSB9LCAxKVxuXG4gICAgICAgICAgICB0aGlzLmNvZGVtaXJyb3Iub24oJ2NoYW5nZScsIChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZ3JvdXBcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiLFxuICAgICAgICBhdHRyczogeyBmb3I6IF92bS5maWVsZC5oYW5kbGUgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmZpZWxkLm5hbWUpIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInVpLXRhYnNcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktdGFiXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJNYXJrZG93blwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHJlZjogX3ZtLmZpZWxkLmhhbmRsZSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlLFxuICAgICAgICAgICAgICAgIGNvbHM6IFwiMzBcIixcbiAgICAgICAgICAgICAgICByb3dzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgYXV0b2ZvY3VzOiBcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udmFsdWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0udmFsdWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1aS10YWJcIiwgeyBhdHRyczogeyBuYW1lOiBcIlByZXZpZXdcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWFya2Rvd24tYm9keVwiLFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ucHJldmlldykgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNDFjYzM0ZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzQxY2MzNGYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzQxY2MzNGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzQxY2MzNGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNDFjYzM0ZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNDFjYzM0ZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9NYXJrZG93bi9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM0MWNjMzRmJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==