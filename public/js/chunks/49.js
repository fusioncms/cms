(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Markdown/Field.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var easymde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easymde */ "./node_modules/easymde/src/js/easymde.js");
/* harmony import */ var easymde__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(easymde__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'markdown-fieldtype',
  data: function data() {
    return {
      config: {},
      easymde: null,
      valueUpdated: false
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
    } // config: {
    //     required: false,
    //     type: Object,
    //     default() {
    //         return {}
    //     }
    // }

  },
  computed: {
    el: function el() {
      return this.$refs[this.field.handle];
    }
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      var config = Object.assign({
        element: this.el,
        initialValue: this.value,
        previewRender: this.previewRender,
        renderingConfig: {
          codeSyntaxHighlighting: true
        }
      }, this.config);

      if (config.initialValue) {
        this.$emit('input', config.initialValue);
      }

      marked__WEBPACK_IMPORTED_MODULE_1___default.a.setOptions({
        sanitize: false
      });
      this.easymde = new easymde__WEBPACK_IMPORTED_MODULE_0___default.a(config);
      this.bindEvents();
      this.$nextTick(function () {
        _this.$emit('initialized', _this.easymde);
      });
    },
    bindEvents: function bindEvents() {
      var _this2 = this;

      this.easymde.codemirror.on('change', function (instance, change) {
        if (change.origin === 'setValue') {
          return;
        }

        var value = _this2.easymde.value();

        _this2.handleInput(value);
      });
      this.easymde.codemirror.on('blur', function () {
        var value = _this2.easymde.value();

        _this2.handleBlur(value);
      });
    },
    handleInput: function handleInput(value) {
      this.valueUpdated = true;
      this.$emit('input', value);
    },
    handleBlur: function handleBlur(value) {
      this.valueUpdated = true;
      this.$emit('blur', value);
    }
  },
  watch: {
    value: function value(_value) {
      if (this.valueUpdated) {
        this.valueUpdated = false;
      } else {
        this.easymde.value(_value);
      }
    }
  },
  mounted: function mounted() {
    this.initialize();
  },
  deactivated: function deactivated() {
    var editor = this.easymde;
    if (!editor) return;
    var isFullscreen = editor.codemirror.getOpen('fullScreen');

    if (isFullscreen) {
      editor.toggleFullScreen();
    }
  },
  destroyed: function destroyed() {
    this.easymde = null;
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
  return _c("div", { staticClass: "form__group" }, [
    _c("label", {
      staticClass: "form__label",
      attrs: { for: _vm.field.handle },
      domProps: { innerHTML: _vm._s(_vm.field.name) }
    }),
    _vm._v(" "),
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
      attrs: { name: _vm.field.handle, cols: "30", rows: "12", autofocus: "" },
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
  ])
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



/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9NYXJrZG93bi9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9NYXJrZG93bi9GaWVsZC52dWU/NTE2ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL01hcmtkb3duL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL01hcmtkb3duL0ZpZWxkLnZ1ZT8yMjhmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvTWFya2Rvd24vRmllbGQudnVlPzFjZmYiLCJ3ZWJwYWNrOi8vL2ZzIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFFQTtBQUNBLDRCQURBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxtQkFGQTtBQUdBO0FBSEE7QUFLQSxHQVRBO0FBV0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxxQkFEQTtBQUVBO0FBRkEsS0FOQSxDQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWpCQSxHQVhBO0FBK0JBO0FBQ0EsTUFEQSxnQkFDQTtBQUNBO0FBQ0E7QUFIQSxHQS9CQTtBQXFDQTtBQUNBLGNBREEsd0JBQ0E7QUFBQTs7QUFDQTtBQUNBLHdCQURBO0FBRUEsZ0NBRkE7QUFHQSx5Q0FIQTtBQUlBO0FBQ0E7QUFEQTtBQUpBLFNBT0EsV0FQQTs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0ExQkE7QUE0QkEsY0E1QkEsd0JBNEJBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQVJBO0FBVUE7QUFDQTs7QUFFQTtBQUNBLE9BSkE7QUFLQSxLQTVDQTtBQThDQSxlQTlDQSx1QkE4Q0EsS0E5Q0EsRUE4Q0E7QUFDQTtBQUNBO0FBQ0EsS0FqREE7QUFtREEsY0FuREEsc0JBbURBLEtBbkRBLEVBbURBO0FBQ0E7QUFDQTtBQUNBO0FBdERBLEdBckNBO0FBOEZBO0FBQ0EsU0FEQSxpQkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUEEsR0E5RkE7QUF3R0EsU0F4R0EscUJBd0dBO0FBQ0E7QUFDQSxHQTFHQTtBQTRHQSxhQTVHQSx5QkE0R0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0F0SEE7QUF3SEEsV0F4SEEsdUJBd0hBO0FBQ0E7QUFDQTtBQTFIQSxHOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQSxjQUFjLHdCQUF3QjtBQUN0QyxpQkFBaUI7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdFQUFnRTtBQUM5RSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoianMvY2h1bmtzLzQ5LmpzP2lkPWMxZmE3MjczYzlkZjAzZWUxNTg5Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtX19ncm91cFwiPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybV9fbGFiZWxcIlxuICAgICAgICAgICAgOmZvcj1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgICB2LWh0bWw9XCJmaWVsZC5uYW1lXCI+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICA6cmVmPVwiZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgIGNvbHM9XCIzMFwiXG4gICAgICAgICAgICByb3dzPVwiMTJcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInZhbHVlXCJcbiAgICAgICAgICAgIGF1dG9mb2N1cz5cbiAgICAgICAgPC90ZXh0YXJlYT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEVhc3lNREUgZnJvbSAnZWFzeW1kZSdcbiAgICBpbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ21hcmtkb3duLWZpZWxkdHlwZScsXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29uZmlnOiB7fSxcbiAgICAgICAgICAgICAgICBlYXN5bWRlOiBudWxsLFxuICAgICAgICAgICAgICAgIHZhbHVlVXBkYXRlZDogZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBjb25maWc6IHtcbiAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAvLyAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgLy8gICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiB7fVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZWwoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnNbdGhpcy5maWVsZC5oYW5kbGVdXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWwsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld1JlbmRlcjogdGhpcy5wcmV2aWV3UmVuZGVyLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJpbmdDb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVTeW50YXhIaWdobGlnaHRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5jb25maWcpXG5cbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmluaXRpYWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIGNvbmZpZy5pbml0aWFsVmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWFya2VkLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5lYXN5bWRlID0gbmV3IEVhc3lNREUoY29uZmlnKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKClcblxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5pdGlhbGl6ZWQnLCB0aGlzLmVhc3ltZGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lYXN5bWRlLmNvZGVtaXJyb3Iub24oJ2NoYW5nZScsIChpbnN0YW5jZSwgY2hhbmdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2Uub3JpZ2luID09PSAnc2V0VmFsdWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5lYXN5bWRlLnZhbHVlKClcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUlucHV0KHZhbHVlKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0aGlzLmVhc3ltZGUuY29kZW1pcnJvci5vbignYmx1cicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmVhc3ltZGUudmFsdWUoKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQmx1cih2YWx1ZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGFuZGxlSW5wdXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlVXBkYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGFuZGxlQmx1cih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVVcGRhdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2JsdXInLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZVVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZVVwZGF0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWFzeW1kZS52YWx1ZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVhY3RpdmF0ZWQoKSB7XG4gICAgICAgICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmVhc3ltZGVcblxuICAgICAgICAgICAgaWYgKCEgZWRpdG9yKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaXNGdWxsc2NyZWVuID0gZWRpdG9yLmNvZGVtaXJyb3IuZ2V0T3BlbignZnVsbFNjcmVlbicpXG5cbiAgICAgICAgICAgIGlmIChpc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgICAgICBlZGl0b3IudG9nZ2xlRnVsbFNjcmVlbigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVzdHJveWVkKCkge1xuICAgICAgICAgICAgdGhpcy5lYXN5bWRlID0gbnVsbFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2dyb3VwXCIgfSwgW1xuICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIixcbiAgICAgIGF0dHJzOiB7IGZvcjogX3ZtLmZpZWxkLmhhbmRsZSB9LFxuICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmZpZWxkLm5hbWUpIH1cbiAgICB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWUsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWx1ZVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICByZWY6IF92bS5maWVsZC5oYW5kbGUsXG4gICAgICBhdHRyczogeyBuYW1lOiBfdm0uZmllbGQuaGFuZGxlLCBjb2xzOiBcIjMwXCIsIHJvd3M6IFwiMTJcIiwgYXV0b2ZvY3VzOiBcIlwiIH0sXG4gICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnZhbHVlIH0sXG4gICAgICBvbjoge1xuICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLnZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNDFjYzM0ZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzQxY2MzNGYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzQxY2MzNGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzQxY2MzNGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNDFjYzM0ZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNDFjYzM0ZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9NYXJrZG93bi9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM0MWNjMzRmJlwiIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==