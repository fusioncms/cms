(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Replicator/Field.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Replicator/Field.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/Errors */ "./resources/js/services/Errors.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'replicator-fieldtype',
  data: function data() {
    return {
      replicants: _.defaultTo(this.value, []),
      sections: [],
      active: 0
    };
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    errors: {
      type: Object,
      required: false,
      "default": function _default() {}
    }
  },
  watch: {
    replicants: function replicants(value) {
      this.$emit('input', value);
    }
  },
  methods: {
    fieldErrors: function fieldErrors(handle) {
      var errors = _.has(this.errors, 'errors') ? this.errors.errors : {};
      errors = _.pickBy(errors, function (value, key) {
        return _.startsWith(key, handle);
      });
      errors = _.mapKeys(errors, function (value, key) {
        return _.replace(key, handle, '');
      });
      return new _services_Errors__WEBPACK_IMPORTED_MODULE_0__["default"](errors);
    },
    _errorMessage: function _errorMessage(handle) {
      return this.errors ? this.errors.get(handle) : '';
    },
    fields: function fields(section) {
      var index = _.findIndex(this.sections, function (item) {
        return item.id == section.id;
      });

      if (index != -1) return this.sections[index].fields;else return [];
    },
    add: function add(index) {
      var section = this.sections[index];
      var fields = {};

      _.each(section.fields, function (field) {
        return fields[field.handle] = field["default"];
      });

      this.replicants.push({
        section: section,
        fields: fields
      });
    },
    move: function move(fromIndex, toIndex) {
      this.replicants.splice(toIndex, 0, this.replicants.splice(fromIndex, 1)[0]);
    },
    remove: function remove(index) {
      if (this.replicants.length > 0) this.replicants.splice(index, 1);
    }
  },
  created: function created() {
    var _this = this;

    axios.get("/api/replicators/".concat(this.field.settings.replicator)).then(function (response) {
      return _this.sections = response.data.data.sections;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Replicator/Field.vue?vue&type=template&id=20a1b4bf&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Replicator/Field.vue?vue&type=template&id=20a1b4bf& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c("label", {
        staticClass: "form__label",
        attrs: { for: _vm.field.handle },
        domProps: { innerHTML: _vm._s(_vm.field.name) }
      }),
      _vm._v(" "),
      _vm._l(_vm.sections, function(section, index) {
        return _c(
          "ui-button",
          {
            key: section.handle,
            staticClass: "mr-2",
            attrs: { variant: "secondary" },
            on: {
              click: function($event) {
                return _vm.add(index)
              }
            }
          },
          [
            _vm._v("\n        " + _vm._s(section.name) + "\n        "),
            _c("fa-icon", { staticClass: "fa-xs", attrs: { icon: "plus" } })
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "ui-tabs",
        { attrs: { move: _vm.move } },
        _vm._l(_vm.replicants, function(replicant, index) {
          return _c(
            "ui-tab",
            {
              key: "replicant-" + index + "-tab",
              attrs: {
                name: "[" + (index + 1) + "] " + replicant.section.name,
                remove: _vm.remove
              }
            },
            _vm._l(_vm.fields(replicant.section), function(sub) {
              return _c(sub.type.id + "-fieldtype", {
                key: sub.handle,
                tag: "component",
                staticClass: "form__group",
                attrs: {
                  field: sub,
                  errors: _vm.fieldErrors(
                    _vm.field.handle + "." + index + ".fields."
                  )
                },
                model: {
                  value: replicant.fields[sub.handle],
                  callback: function($$v) {
                    _vm.$set(replicant.fields, sub.handle, $$v)
                  },
                  expression: "replicant.fields[sub.handle]"
                }
              })
            }),
            1
          )
        }),
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/Replicator/Field.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Replicator/Field.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_20a1b4bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=20a1b4bf& */ "./resources/js/components/Fieldtypes/Replicator/Field.vue?vue&type=template&id=20a1b4bf&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Replicator/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_20a1b4bf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_20a1b4bf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Replicator/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Replicator/Field.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Replicator/Field.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Replicator/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Replicator/Field.vue?vue&type=template&id=20a1b4bf&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Replicator/Field.vue?vue&type=template&id=20a1b4bf& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_20a1b4bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=20a1b4bf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Replicator/Field.vue?vue&type=template&id=20a1b4bf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_20a1b4bf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_20a1b4bf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9SZXBsaWNhdG9yL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1JlcGxpY2F0b3IvRmllbGQudnVlP2I1NDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9SZXBsaWNhdG9yL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1JlcGxpY2F0b3IvRmllbGQudnVlPzJlMTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9SZXBsaWNhdG9yL0ZpZWxkLnZ1ZT8wMGI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQTtBQUVBO0FBQ0EsOEJBREE7QUFHQSxNQUhBLGtCQUdBO0FBQ0E7QUFDQSw2Q0FEQTtBQUVBLGtCQUZBO0FBR0E7QUFIQTtBQUtBLEdBVEE7QUFXQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLGlCQURBO0FBRUEscUJBRkE7QUFHQTtBQUFBO0FBQUE7QUFIQSxLQU5BO0FBWUE7QUFDQSxrQkFEQTtBQUVBLHFCQUZBO0FBR0E7QUFIQTtBQVpBLEdBWEE7QUE4QkE7QUFDQSxjQURBLHNCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0E7QUFIQSxHQTlCQTtBQW9DQTtBQUNBLGVBREEsdUJBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBLEtBUEE7QUFTQSxpQkFUQSx5QkFTQSxNQVRBLEVBU0E7QUFDQTtBQUNBLEtBWEE7QUFhQSxVQWJBLGtCQWFBLE9BYkEsRUFhQTtBQUNBLDZDQUNBO0FBQUE7QUFBQSxPQURBOztBQUdBLHVCQUNBLG1DQURBLEtBR0E7QUFDQSxLQXJCQTtBQXVCQSxPQXZCQSxlQXVCQSxLQXZCQSxFQXVCQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQSxlQUNBLHVDQURBO0FBQUE7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxLQS9CQTtBQWlDQSxRQWpDQSxnQkFpQ0EsU0FqQ0EsRUFpQ0EsT0FqQ0EsRUFpQ0E7QUFDQSx5Q0FDQSx1Q0FEQTtBQUVBLEtBcENBO0FBc0NBLFVBdENBLGtCQXNDQSxLQXRDQSxFQXNDQTtBQUNBLHNDQUNBO0FBQ0E7QUF6Q0EsR0FwQ0E7QUFnRkEsU0FoRkEscUJBZ0ZBO0FBQUE7O0FBQ0EsMEVBQ0EsSUFEQSxDQUNBO0FBQUEsYUFDQSw0Q0FEQTtBQUFBLEtBREE7QUFHQTtBQXBGQSxHOzs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdCQUF3QjtBQUN4QyxtQkFBbUI7QUFDbkIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCLGVBQWUsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGlCQUFpQixFQUFFO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzg2LmpzP2lkPWEzZTAwOGRkNjgyNjBjMjI0ZDJhIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtX19sYWJlbFwiXG4gICAgICAgICAgICA6Zm9yPVwiZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgIHYtaHRtbD1cImZpZWxkLm5hbWVcIj5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8dWktYnV0dG9uXG4gICAgICAgICAgICB2LWZvcj1cIihzZWN0aW9uLCBpbmRleCkgaW4gc2VjdGlvbnNcIlxuICAgICAgICAgICAgOmtleT1cInNlY3Rpb24uaGFuZGxlXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgY2xhc3M9XCJtci0yXCJcbiAgICAgICAgICAgIEBjbGljaz1cImFkZChpbmRleClcIj5cbiAgICAgICAgICAgIHt7IHNlY3Rpb24ubmFtZSB9fVxuICAgICAgICAgICAgPGZhLWljb24gaWNvbj1cInBsdXNcIiBjbGFzcz1cImZhLXhzXCI+PC9mYS1pY29uPlxuICAgICAgICA8L3VpLWJ1dHRvbj5cblxuICAgICAgICA8dWktdGFicyA6bW92ZT1cIm1vdmVcIj5cbiAgICAgICAgICAgIDx1aS10YWJcbiAgICAgICAgICAgICAgICB2LWZvcj1cIihyZXBsaWNhbnQsIGluZGV4KSBpbiByZXBsaWNhbnRzXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiYHJlcGxpY2FudC0ke2luZGV4fS10YWJgXCJcbiAgICAgICAgICAgICAgICA6bmFtZT1cImBbJHtpbmRleCArIDF9XSAke3JlcGxpY2FudC5zZWN0aW9uLm5hbWV9YFwiXG4gICAgICAgICAgICAgICAgOnJlbW92ZT1cInJlbW92ZVwiPlxuXG4gICAgICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cInN1YiBpbiBmaWVsZHMocmVwbGljYW50LnNlY3Rpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cInN1Yi5oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm1fX2dyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgOmlzPVwic3ViLnR5cGUuaWQgKyAnLWZpZWxkdHlwZSdcIlxuICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XCJzdWJcIlxuICAgICAgICAgICAgICAgICAgICA6ZXJyb3JzPVwiZmllbGRFcnJvcnMoYCR7ZmllbGQuaGFuZGxlfS4ke2luZGV4fS5maWVsZHMuYClcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicmVwbGljYW50LmZpZWxkc1tzdWIuaGFuZGxlXVwiPlxuICAgICAgICAgICAgICAgIDwvY29tcG9uZW50PlxuICAgICAgICAgICAgPC91aS10YWI+XG4gICAgICAgIDwvdWktdGFicz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEVycm9ycyBmcm9tICdAL3NlcnZpY2VzL0Vycm9ycydcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ3JlcGxpY2F0b3ItZmllbGR0eXBlJyxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXBsaWNhbnRzOiBfLmRlZmF1bHRUbyh0aGlzLnZhbHVlLCBbXSksXG4gICAgICAgICAgICAgICAgc2VjdGlvbnM6IFtdLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHJlcGxpY2FudHModmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZpZWxkRXJyb3JzKGhhbmRsZSkge1xuICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBfLmhhcyh0aGlzLmVycm9ycywgJ2Vycm9ycycpID8gdGhpcy5lcnJvcnMuZXJyb3JzIDoge31cbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gXy5waWNrQnkoZXJyb3JzLCAodmFsdWUsIGtleSkgPT4gXy5zdGFydHNXaXRoKGtleSwgaGFuZGxlKSlcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gXy5tYXBLZXlzKGVycm9ycywgKHZhbHVlLCBrZXkpID0+IF8ucmVwbGFjZShrZXksIGhhbmRsZSwgJycpKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcnMoZXJyb3JzKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgX2Vycm9yTWVzc2FnZShoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMgPyB0aGlzLmVycm9ycy5nZXQoaGFuZGxlKSA6ICcnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmaWVsZHMoc2VjdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IF8uZmluZEluZGV4KHRoaXMuc2VjdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09IHNlY3Rpb24uaWQpXG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlY3Rpb25zW2luZGV4XS5maWVsZHNcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYWRkKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlY3Rpb24gPSB0aGlzLnNlY3Rpb25zW2luZGV4XVxuICAgICAgICAgICAgICAgIGxldCBmaWVsZHMgID0ge31cblxuICAgICAgICAgICAgICAgIF8uZWFjaChzZWN0aW9uLmZpZWxkcywgKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgICAgICBmaWVsZHNbZmllbGQuaGFuZGxlXSA9IGZpZWxkLmRlZmF1bHQpXG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlcGxpY2FudHMucHVzaCh7IHNlY3Rpb24sIGZpZWxkcyB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbW92ZShmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGxpY2FudHMuc3BsaWNlKHRvSW5kZXgsIDAsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGljYW50cy5zcGxpY2UoZnJvbUluZGV4LCAxKVswXSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlbW92ZShpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcGxpY2FudHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBsaWNhbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL3JlcGxpY2F0b3JzLyR7dGhpcy5maWVsZC5zZXR0aW5ncy5yZXBsaWNhdG9yfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zID0gcmVzcG9uc2UuZGF0YS5kYXRhLnNlY3Rpb25zKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIsXG4gICAgICAgIGF0dHJzOiB7IGZvcjogX3ZtLmZpZWxkLmhhbmRsZSB9LFxuICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uZmllbGQubmFtZSkgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5zZWN0aW9ucywgZnVuY3Rpb24oc2VjdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBzZWN0aW9uLmhhbmRsZSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwic2Vjb25kYXJ5XCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZChpbmRleClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhzZWN0aW9uLm5hbWUpICsgXCJcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7IHN0YXRpY0NsYXNzOiBcImZhLXhzXCIsIGF0dHJzOiB7IGljb246IFwicGx1c1wiIH0gfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidWktdGFic1wiLFxuICAgICAgICB7IGF0dHJzOiB7IG1vdmU6IF92bS5tb3ZlIH0gfSxcbiAgICAgICAgX3ZtLl9sKF92bS5yZXBsaWNhbnRzLCBmdW5jdGlvbihyZXBsaWNhbnQsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJ1aS10YWJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcInJlcGxpY2FudC1cIiArIGluZGV4ICsgXCItdGFiXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJbXCIgKyAoaW5kZXggKyAxKSArIFwiXSBcIiArIHJlcGxpY2FudC5zZWN0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiBfdm0ucmVtb3ZlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmZpZWxkcyhyZXBsaWNhbnQuc2VjdGlvbiksIGZ1bmN0aW9uKHN1Yikge1xuICAgICAgICAgICAgICByZXR1cm4gX2Moc3ViLnR5cGUuaWQgKyBcIi1maWVsZHR5cGVcIiwge1xuICAgICAgICAgICAgICAgIGtleTogc3ViLmhhbmRsZSxcbiAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZ3JvdXBcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZmllbGQ6IHN1YixcbiAgICAgICAgICAgICAgICAgIGVycm9yczogX3ZtLmZpZWxkRXJyb3JzKFxuICAgICAgICAgICAgICAgICAgICBfdm0uZmllbGQuaGFuZGxlICsgXCIuXCIgKyBpbmRleCArIFwiLmZpZWxkcy5cIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXBsaWNhbnQuZmllbGRzW3N1Yi5oYW5kbGVdLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChyZXBsaWNhbnQuZmllbGRzLCBzdWIuaGFuZGxlLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZXBsaWNhbnQuZmllbGRzW3N1Yi5oYW5kbGVdXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGExYjRiZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjBhMWI0YmYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjBhMWI0YmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjBhMWI0YmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGExYjRiZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMGExYjRiZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9SZXBsaWNhdG9yL0ZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBhMWI0YmYmXCIiXSwic291cmNlUm9vdCI6IiJ9