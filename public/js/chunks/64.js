(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

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
          "p-button",
          {
            key: section.handle,
            staticClass: "button--secondary mr-2",
            on: {
              click: function($event) {
                return _vm.add(index)
              }
            }
          },
          [
            _vm._v("\n\n        " + _vm._s(section.name) + "\n        "),
            _c("fa-icon", { staticClass: "fa-xs", attrs: { icon: "plus" } })
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "p-tabs",
        { attrs: { move: _vm.move } },
        _vm._l(_vm.replicants, function(replicant, index) {
          return _c(
            "p-tab",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9SZXBsaWNhdG9yL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1JlcGxpY2F0b3IvRmllbGQudnVlP2I1NDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9SZXBsaWNhdG9yL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1JlcGxpY2F0b3IvRmllbGQudnVlPzJlMTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9SZXBsaWNhdG9yL0ZpZWxkLnZ1ZT8wMGI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQTtBQUVBO0FBQ0EsOEJBREE7QUFHQSxNQUhBLGtCQUdBO0FBQ0E7QUFDQSw2Q0FEQTtBQUVBLGtCQUZBO0FBR0E7QUFIQTtBQUtBLEdBVEE7QUFXQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLGlCQURBO0FBRUEscUJBRkE7QUFHQTtBQUFBO0FBQUE7QUFIQSxLQU5BO0FBWUE7QUFDQSxrQkFEQTtBQUVBLHFCQUZBO0FBR0E7QUFIQTtBQVpBLEdBWEE7QUE4QkE7QUFDQSxjQURBLHNCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0E7QUFIQSxHQTlCQTtBQW9DQTtBQUNBLGVBREEsdUJBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBLEtBUEE7QUFTQSxpQkFUQSx5QkFTQSxNQVRBLEVBU0E7QUFDQTtBQUNBLEtBWEE7QUFhQSxVQWJBLGtCQWFBLE9BYkEsRUFhQTtBQUNBLDZDQUNBO0FBQUE7QUFBQSxPQURBOztBQUdBLHVCQUNBLG1DQURBLEtBR0E7QUFDQSxLQXJCQTtBQXVCQSxPQXZCQSxlQXVCQSxLQXZCQSxFQXVCQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQSxlQUNBLHVDQURBO0FBQUE7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxLQS9CQTtBQWlDQSxRQWpDQSxnQkFpQ0EsU0FqQ0EsRUFpQ0EsT0FqQ0EsRUFpQ0E7QUFDQSx5Q0FDQSx1Q0FEQTtBQUVBLEtBcENBO0FBc0NBLFVBdENBLGtCQXNDQSxLQXRDQSxFQXNDQTtBQUNBLHNDQUNBO0FBQ0E7QUF6Q0EsR0FwQ0E7QUFnRkEsU0FoRkEscUJBZ0ZBO0FBQUE7O0FBQ0EsMEVBQ0EsSUFEQSxDQUNBO0FBQUEsYUFDQSw0Q0FEQTtBQUFBLEtBREE7QUFHQTtBQXBGQSxHOzs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdCQUF3QjtBQUN4QyxtQkFBbUI7QUFDbkIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsMkJBQTJCLCtCQUErQixlQUFlLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxpQkFBaUIsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy82NC5qcz9pZD1jZWExYzdhMGI3MzVjNDg4YWZhYyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybV9fbGFiZWxcIlxuICAgICAgICAgICAgOmZvcj1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgICB2LWh0bWw9XCJmaWVsZC5uYW1lXCI+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPHAtYnV0dG9uXG4gICAgICAgICAgICB2LWZvcj1cIihzZWN0aW9uLCBpbmRleCkgaW4gc2VjdGlvbnNcIlxuICAgICAgICAgICAgOmtleT1cInNlY3Rpb24uaGFuZGxlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uLS1zZWNvbmRhcnkgbXItMlwiXG4gICAgICAgICAgICBAY2xpY2s9XCJhZGQoaW5kZXgpXCI+XG5cbiAgICAgICAgICAgIHt7IHNlY3Rpb24ubmFtZSB9fVxuICAgICAgICAgICAgPGZhLWljb24gaWNvbj1cInBsdXNcIiBjbGFzcz1cImZhLXhzXCI+PC9mYS1pY29uPlxuICAgICAgICA8L3AtYnV0dG9uPlxuXG4gICAgICAgIDxwLXRhYnMgOm1vdmU9XCJtb3ZlXCI+XG4gICAgICAgICAgICA8cC10YWJcbiAgICAgICAgICAgICAgICB2LWZvcj1cIihyZXBsaWNhbnQsIGluZGV4KSBpbiByZXBsaWNhbnRzXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiYHJlcGxpY2FudC0ke2luZGV4fS10YWJgXCJcbiAgICAgICAgICAgICAgICA6bmFtZT1cImBbJHtpbmRleCArIDF9XSAke3JlcGxpY2FudC5zZWN0aW9uLm5hbWV9YFwiXG4gICAgICAgICAgICAgICAgOnJlbW92ZT1cInJlbW92ZVwiPlxuXG4gICAgICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cInN1YiBpbiBmaWVsZHMocmVwbGljYW50LnNlY3Rpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cInN1Yi5oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm1fX2dyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgOmlzPVwic3ViLnR5cGUuaWQgKyAnLWZpZWxkdHlwZSdcIlxuICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XCJzdWJcIlxuICAgICAgICAgICAgICAgICAgICA6ZXJyb3JzPVwiZmllbGRFcnJvcnMoYCR7ZmllbGQuaGFuZGxlfS4ke2luZGV4fS5maWVsZHMuYClcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicmVwbGljYW50LmZpZWxkc1tzdWIuaGFuZGxlXVwiPlxuICAgICAgICAgICAgICAgIDwvY29tcG9uZW50PlxuICAgICAgICAgICAgPC9wLXRhYj5cbiAgICAgICAgPC9wLXRhYnM+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBFcnJvcnMgZnJvbSAnQC9zZXJ2aWNlcy9FcnJvcnMnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdyZXBsaWNhdG9yLWZpZWxkdHlwZScsXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVwbGljYW50czogXy5kZWZhdWx0VG8odGhpcy52YWx1ZSwgW10pLFxuICAgICAgICAgICAgICAgIHNlY3Rpb25zOiBbXSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICByZXBsaWNhbnRzKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBmaWVsZEVycm9ycyhoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JzID0gXy5oYXModGhpcy5lcnJvcnMsICdlcnJvcnMnKSA/IHRoaXMuZXJyb3JzLmVycm9ycyA6IHt9XG4gICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IF8ucGlja0J5KGVycm9ycywgKHZhbHVlLCBrZXkpID0+IF8uc3RhcnRzV2l0aChrZXksIGhhbmRsZSkpXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IF8ubWFwS2V5cyhlcnJvcnMsICh2YWx1ZSwga2V5KSA9PiBfLnJlcGxhY2Uoa2V5LCBoYW5kbGUsICcnKSlcblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3JzKGVycm9ycylcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF9lcnJvck1lc3NhZ2UoaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzID8gdGhpcy5lcnJvcnMuZ2V0KGhhbmRsZSkgOiAnJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZmllbGRzKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBfLmZpbmRJbmRleCh0aGlzLnNlY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PSBzZWN0aW9uLmlkKVxuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWN0aW9uc1tpbmRleF0uZmllbGRzXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGFkZChpbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBzZWN0aW9uID0gdGhpcy5zZWN0aW9uc1tpbmRleF1cbiAgICAgICAgICAgICAgICBsZXQgZmllbGRzICA9IHt9XG5cbiAgICAgICAgICAgICAgICBfLmVhY2goc2VjdGlvbi5maWVsZHMsIChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmllbGRzW2ZpZWxkLmhhbmRsZV0gPSBmaWVsZC5kZWZhdWx0KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5yZXBsaWNhbnRzLnB1c2goeyBzZWN0aW9uLCBmaWVsZHMgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1vdmUoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBsaWNhbnRzLnNwbGljZSh0b0luZGV4LCAwLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGxpY2FudHMuc3BsaWNlKGZyb21JbmRleCwgMSlbMF0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZW1vdmUoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXBsaWNhbnRzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGljYW50cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldChgL2FwaS9yZXBsaWNhdG9ycy8ke3RoaXMuZmllbGQuc2V0dGluZ3MucmVwbGljYXRvcn1gKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9ucyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zZWN0aW9ucylcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiLFxuICAgICAgICBhdHRyczogeyBmb3I6IF92bS5maWVsZC5oYW5kbGUgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmZpZWxkLm5hbWUpIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uc2VjdGlvbnMsIGZ1bmN0aW9uKHNlY3Rpb24sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBzZWN0aW9uLmhhbmRsZSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbi0tc2Vjb25kYXJ5IG1yLTJcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZChpbmRleClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFxuICAgICAgICBcIiArIF92bS5fcyhzZWN0aW9uLm5hbWUpICsgXCJcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7IHN0YXRpY0NsYXNzOiBcImZhLXhzXCIsIGF0dHJzOiB7IGljb246IFwicGx1c1wiIH0gfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicC10YWJzXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbW92ZTogX3ZtLm1vdmUgfSB9LFxuICAgICAgICBfdm0uX2woX3ZtLnJlcGxpY2FudHMsIGZ1bmN0aW9uKHJlcGxpY2FudCwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcInAtdGFiXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJyZXBsaWNhbnQtXCIgKyBpbmRleCArIFwiLXRhYlwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiW1wiICsgKGluZGV4ICsgMSkgKyBcIl0gXCIgKyByZXBsaWNhbnQuc2VjdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgIHJlbW92ZTogX3ZtLnJlbW92ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5maWVsZHMocmVwbGljYW50LnNlY3Rpb24pLCBmdW5jdGlvbihzdWIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKHN1Yi50eXBlLmlkICsgXCItZmllbGR0eXBlXCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IHN1Yi5oYW5kbGUsXG4gICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1fX2dyb3VwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGZpZWxkOiBzdWIsXG4gICAgICAgICAgICAgICAgICBlcnJvcnM6IF92bS5maWVsZEVycm9ycyhcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZWxkLmhhbmRsZSArIFwiLlwiICsgaW5kZXggKyBcIi5maWVsZHMuXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogcmVwbGljYW50LmZpZWxkc1tzdWIuaGFuZGxlXSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQocmVwbGljYW50LmZpZWxkcywgc3ViLmhhbmRsZSwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVwbGljYW50LmZpZWxkc1tzdWIuaGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBhMWI0YmYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIwYTFiNGJmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwYTFiNGJmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwYTFiNGJmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBhMWI0YmYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjBhMWI0YmYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvUmVwbGljYXRvci9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwYTFiNGJmJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==