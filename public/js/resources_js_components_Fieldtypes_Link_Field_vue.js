(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_components_Fieldtypes_Link_Field_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'link-fieldtype',
  mixins: [_mixins_fieldtypes_field__WEBPACK_IMPORTED_MODULE_0__.default],
  // computed: {
  //     model: {
  //         get() {
  //             return this.value || {}
  //         },
  //         set(value) {
  //             this.$emit('input', value)
  //         }
  //     }
  // },
  created: function created() {
    if (_.isEmpty(this.value)) {
      this.model = {
        text: '',
        link: '',
        target: '_self'
      };
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

/***/ "./resources/js/components/Fieldtypes/Link/Field.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Link/Field.vue ***!
  \***********************************************************/
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
/* harmony import */ var _Field_vue_vue_type_template_id_71a5eb1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=71a5eb1a& */ "./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=template&id=71a5eb1a&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Field_vue_vue_type_template_id_71a5eb1a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Field_vue_vue_type_template_id_71a5eb1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Link/Field.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=template&id=71a5eb1a&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=template&id=71a5eb1a& ***!
  \******************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=template&id=71a5eb1a& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=template&id=71a5eb1a& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_71a5eb1a___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_71a5eb1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_71a5eb1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=template&id=71a5eb1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=template&id=71a5eb1a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=template&id=71a5eb1a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Link/Field.vue?vue&type=template&id=71a5eb1a& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        help: _vm.field.help
      }
    },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col w-full md:w-1/3" },
          [
            _c("ui-input-group", {
              attrs: {
                name: _vm.field.handle + ".text",
                autocomplete: "off",
                "hide-label": "",
                placeholder: "Link Text",
                hasError: _vm.hasError(_vm.field.handle + ".text"),
                errorMessage: _vm.errorMessage(_vm.field.handle + ".text")
              },
              model: {
                value: _vm.model.text,
                callback: function($$v) {
                  _vm.$set(_vm.model, "text", $$v)
                },
                expression: "model.text"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col w-full md:w-1/3" },
          [
            _c("ui-input-group", {
              attrs: {
                name: _vm.field.handle + ".link",
                autocomplete: "off",
                "hide-label": "",
                placeholder: "Link URL",
                hasError: _vm.hasError(_vm.field.handle + ".link"),
                errorMessage: _vm.errorMessage(_vm.field.handle + ".link")
              },
              model: {
                value: _vm.model.link,
                callback: function($$v) {
                  _vm.$set(_vm.model, "link", $$v)
                },
                expression: "model.link"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col w-full md:w-1/3" },
          [
            _c("ui-select-group", {
              attrs: {
                name: _vm.field.handle + ".target",
                autocomplete: "off",
                "hide-label": "",
                options: [
                  {
                    label: "Open in Same Window",
                    value: "_self"
                  },
                  {
                    label: "Open in New Window",
                    value: "_blank"
                  }
                ],
                hasError: _vm.hasError(_vm.field.handle + ".target"),
                errorMessage: _vm.errorMessage(_vm.field.handle + ".target")
              },
              model: {
                value: _vm.model.target,
                callback: function($$v) {
                  _vm.$set(_vm.model, "target", $$v)
                },
                expression: "model.target"
              }
            })
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9MaW5rL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvbWl4aW5zL2ZpZWxkdHlwZXMvZmllbGQuanMiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9MaW5rL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0xpbmsvRmllbGQudnVlP2E1YjMiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9MaW5rL0ZpZWxkLnZ1ZT8zMjM1Il0sIm5hbWVzIjpbInByb3BzIiwiZmllbGQiLCJ0eXBlIiwiT2JqZWN0IiwicmVxdWlyZWQiLCJ2YWx1ZSIsImVycm9ycyIsImNvbXB1dGVkIiwibW9kZWwiLCJnZXQiLCJzZXQiLCIkZW1pdCIsIm1ldGhvZHMiLCJoYXNFcnJvciIsImhhbmRsZSIsImhhcyIsImVycm9yTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBO0FBRUE7QUFDQSx3QkFEQTtBQUdBLHlFQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQWpCQSxxQkFpQkE7QUFDQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxnQkFGQTtBQUdBO0FBSEE7QUFLQTtBQUNBO0FBekJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REEsaUVBQWU7QUFDWEEsT0FBSyxFQUFFO0FBQ0hDLFNBQUssRUFBRTtBQUNIQyxVQUFJLEVBQUVDLE1BREg7QUFFSEMsY0FBUSxFQUFFO0FBRlAsS0FESjtBQU1IQyxTQUFLLEVBQUU7QUFDSEQsY0FBUSxFQUFFLEtBRFA7QUFFSCxpQkFBUztBQUZOLEtBTko7QUFXSEUsVUFBTSxFQUFFO0FBQ0pKLFVBQUksRUFBRUMsTUFERjtBQUVKQyxjQUFRLEVBQUUsS0FGTjtBQUdKLGlCQUFTLG9CQUFNLENBQUU7QUFIYjtBQVhMLEdBREk7QUFtQlhHLFVBQVEsRUFBRTtBQUNOQyxTQUFLLEVBQUU7QUFDSEMsU0FERyxpQkFDRztBQUNGLGVBQU8sS0FBS0osS0FBWjtBQUNILE9BSEU7QUFLSEssU0FMRyxlQUtDTCxLQUxELEVBS1E7QUFDUCxhQUFLTSxLQUFMLENBQVcsT0FBWCxFQUFvQk4sS0FBcEI7QUFDSDtBQVBFO0FBREQsR0FuQkM7QUErQlhPLFNBQU8sRUFBRTtBQUNMQyxZQURLLG9CQUNJQyxNQURKLEVBQ1k7QUFDYixhQUFPLEtBQUtSLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlTLEdBQVosQ0FBZ0JELE1BQWhCLENBQXRCO0FBQ0gsS0FISTtBQUtMRSxnQkFMSyx3QkFLUUYsTUFMUixFQUtnQjtBQUNqQixhQUFPLEtBQUtELFFBQUwsQ0FBY0MsTUFBZCxJQUF3QixLQUFLUixNQUFMLENBQVlHLEdBQVosQ0FBZ0JLLE1BQWhCLENBQXhCLEdBQWtELEVBQXpEO0FBQ0g7QUFQSTtBQS9CRSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ0EsQ0FBbUc7QUFDbkcsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsd0VBQU07QUFDUixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxzRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzRNLENBQUMsaUVBQWUsdU1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQS9PO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0EsV0FBVyxxQ0FBcUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQ0FBcUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQ0FBcUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19MaW5rX0ZpZWxkX3Z1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8dWktZmllbGQtZ3JvdXBcbiAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGVcIlxuICAgICAgICA6ZmllbGRJZD1cImAke2ZpZWxkLmhhbmRsZX0tZmllbGRgXCJcbiAgICAgICAgOmxhYmVsPVwiZmllbGQubmFtZVwiXG4gICAgICAgIDpoZWxwPVwiZmllbGQuaGVscFwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsIG1kOnctMS8zXCI+XG4gICAgICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiYCR7ZmllbGQuaGFuZGxlfS50ZXh0YFwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIGhpZGUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaW5rIFRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibW9kZWwudGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIDpoYXNFcnJvcj1cImhhc0Vycm9yKGAke2ZpZWxkLmhhbmRsZX0udGV4dGApXCJcbiAgICAgICAgICAgICAgICAgICAgOmVycm9yTWVzc2FnZT1cImVycm9yTWVzc2FnZShgJHtmaWVsZC5oYW5kbGV9LnRleHRgKVwiPlxuICAgICAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgbWQ6dy0xLzNcIj5cbiAgICAgICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJgJHtmaWVsZC5oYW5kbGV9LmxpbmtgXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgaGlkZS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxpbmsgVVJMXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGVsLmxpbmtcIlxuICAgICAgICAgICAgICAgICAgICA6aGFzRXJyb3I9XCJoYXNFcnJvcihgJHtmaWVsZC5oYW5kbGV9LmxpbmtgKVwiXG4gICAgICAgICAgICAgICAgICAgIDplcnJvck1lc3NhZ2U9XCJlcnJvck1lc3NhZ2UoYCR7ZmllbGQuaGFuZGxlfS5saW5rYClcIj5cbiAgICAgICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsIG1kOnctMS8zXCI+XG4gICAgICAgICAgICAgICAgPHVpLXNlbGVjdC1ncm91cFxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImAke2ZpZWxkLmhhbmRsZX0udGFyZ2V0YFwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIGhpZGUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdPcGVuIGluIFNhbWUgV2luZG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ19zZWxmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdPcGVuIGluIE5ldyBXaW5kb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnX2JsYW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtb2RlbC50YXJnZXRcIlxuICAgICAgICAgICAgICAgICAgICA6aGFzRXJyb3I9XCJoYXNFcnJvcihgJHtmaWVsZC5oYW5kbGV9LnRhcmdldGApXCJcbiAgICAgICAgICAgICAgICAgICAgOmVycm9yTWVzc2FnZT1cImVycm9yTWVzc2FnZShgJHtmaWVsZC5oYW5kbGV9LnRhcmdldGApXCI+XG4gICAgICAgICAgICAgICAgPC91aS1zZWxlY3QtZ3JvdXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIDwvdWktZmllbGQtZ3JvdXA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBGaWVsZE1peGluIGZyb20gJ0AvbWl4aW5zL2ZpZWxkdHlwZXMvZmllbGQnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdsaW5rLWZpZWxkdHlwZScsXG5cbiAgICAgICAgbWl4aW5zOiBbRmllbGRNaXhpbl0sXG5cbiAgICAgICAgLy8gY29tcHV0ZWQ6IHtcbiAgICAgICAgLy8gICAgIG1vZGVsOiB7XG4gICAgICAgIC8vICAgICAgICAgZ2V0KCkge1xuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCB7fVxuICAgICAgICAvLyAgICAgICAgIH0sXG5cbiAgICAgICAgLy8gICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSlcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG5cbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIGlmIChfLmlzRW1wdHkodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbGluazogJycsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogJ19zZWxmJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcblxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4ge31cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFzRXJyb3IoaGFuZGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMgJiYgdGhpcy5lcnJvcnMuaGFzKGhhbmRsZSlcbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvck1lc3NhZ2UoaGFuZGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYXNFcnJvcihoYW5kbGUpID8gdGhpcy5lcnJvcnMuZ2V0KGhhbmRsZSkgOiAnJ1xuICAgICAgICB9XG4gICAgfSxcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MWE1ZWIxYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzFhNWViMWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzFhNWViMWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzFhNWViMWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MWE1ZWIxYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MWE1ZWIxYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9MaW5rL0ZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidWktZmllbGQtZ3JvdXBcIixcbiAgICB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlLFxuICAgICAgICBmaWVsZElkOiBfdm0uZmllbGQuaGFuZGxlICsgXCItZmllbGRcIixcbiAgICAgICAgbGFiZWw6IF92bS5maWVsZC5uYW1lLFxuICAgICAgICBoZWxwOiBfdm0uZmllbGQuaGVscFxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsIG1kOnctMS8zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCIudGV4dFwiLFxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICBcImhpZGUtbGFiZWxcIjogXCJcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJMaW5rIFRleHRcIixcbiAgICAgICAgICAgICAgICBoYXNFcnJvcjogX3ZtLmhhc0Vycm9yKF92bS5maWVsZC5oYW5kbGUgKyBcIi50ZXh0XCIpLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogX3ZtLmVycm9yTWVzc2FnZShfdm0uZmllbGQuaGFuZGxlICsgXCIudGV4dFwiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kZWwudGV4dCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubW9kZWwsIFwidGV4dFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGVsLnRleHRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCBtZDp3LTEvM1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSArIFwiLmxpbmtcIixcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgXCJoaWRlLWxhYmVsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTGluayBVUkxcIixcbiAgICAgICAgICAgICAgICBoYXNFcnJvcjogX3ZtLmhhc0Vycm9yKF92bS5maWVsZC5oYW5kbGUgKyBcIi5saW5rXCIpLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogX3ZtLmVycm9yTWVzc2FnZShfdm0uZmllbGQuaGFuZGxlICsgXCIubGlua1wiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kZWwubGluayxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubW9kZWwsIFwibGlua1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGVsLmxpbmtcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCBtZDp3LTEvM1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1aS1zZWxlY3QtZ3JvdXBcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUgKyBcIi50YXJnZXRcIixcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgXCJoaWRlLWxhYmVsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJPcGVuIGluIFNhbWUgV2luZG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIl9zZWxmXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9wZW4gaW4gTmV3IFdpbmRvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgaGFzRXJyb3I6IF92bS5oYXNFcnJvcihfdm0uZmllbGQuaGFuZGxlICsgXCIudGFyZ2V0XCIpLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogX3ZtLmVycm9yTWVzc2FnZShfdm0uZmllbGQuaGFuZGxlICsgXCIudGFyZ2V0XCIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RlbC50YXJnZXQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLCBcInRhcmdldFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGVsLnRhcmdldFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==