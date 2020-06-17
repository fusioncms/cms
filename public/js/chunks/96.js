(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default, getModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return getModels; });
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/pages/Matrices/SharedForm.vue");
/* harmony import */ var _services_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Form */ "./resources/js/services/Form.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
//
//
//
//
//
//
//
//
//
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
  head: {
    title: function title() {
      return {
        inner: _.has(this.form, 'name') ? this.form.name : 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      id: null,
      fieldsets: [],
      matrices: [],
      matrix: {},
      form: null
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.form.reference_singular == '') {
        this.form.reference_singular = pluralize__WEBPACK_IMPORTED_MODULE_2___default.a.singular(this.form.name);
      }

      if (this.form.reference_plural == '') {
        this.form.reference_plural = pluralize__WEBPACK_IMPORTED_MODULE_2___default()(this.form.name);
      }

      this.form.patch("/api/matrices/".concat(this.id)).then(function (response) {
        _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('navigation/fetchAdminNavigation');
        toast('Matrix successfully updated', 'success');

        _this.$router.push('/matrices');
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getModels(to.params.matrix, function (error, matrix, fieldsets, matrices) {
      if (error) {
        next(function (vm) {
          toast(error.toString(), 'danger');
          vm.$router.push('/matrices');
        });
      } else {
        next(function (vm) {
          vm.id = matrix.data.data.id;
          vm.matrix = matrix.data.data;
          vm.fieldsets = fieldsets.data.data;
          vm.matrices = matrices.data.data;
          vm.form = new _services_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
            parent_id: vm.matrix.parent_id,
            name: vm.matrix.name,
            handle: vm.matrix.handle,
            description: vm.matrix.description,
            type: vm.matrix.type,
            fieldset: vm.matrix.fieldset && vm.matrix.fieldset.id ? vm.matrix.fieldset.id : null,
            reference_singular: vm.matrix.reference_singular,
            reference_plural: vm.matrix.reference_plural,
            sidebar: vm.matrix.sidebar ? '1' : '0',
            quicklink: vm.matrix.quicklink ? '1' : '0',
            icon: vm.matrix.icon,
            show_name_field: vm.matrix.show_name_field,
            name_label: vm.matrix.name_label,
            name_format: vm.matrix.name_format,
            route: vm.matrix.route,
            template: vm.matrix.template,
            revision_control: vm.matrix.revision_control ? '1' : '0',
            categorizable: vm.matrix.categorizable ? '1' : '0',
            creditable: vm.matrix.creditable ? '1' : '0',
            publishable: vm.matrix.publishable ? '1' : '0',
            seoable: vm.matrix.seoable ? '1' : '0',
            status: vm.matrix.status ? '1' : '0'
          }, true);
          vm.$nextTick(function () {
            vm.$emit('updateHead');
            vm.form.resetChangeListener();
          });
        });
      }
    });
  }
});
function getModels(maxtrix, callback) {
  axios.all([axios.get("/api/matrices/".concat(maxtrix)), axios.get('/api/fieldsets'), axios.get('/api/matrices')]).then(axios.spread(function (matrix, fieldsets, matrices) {
    callback(null, matrix, fieldsets, matrices);
  }))["catch"](function (error) {
    callback(new Error('The requested maxtrix could not be found'));
  });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("app-title", { attrs: { icon: "layer-group" } }, [
            _vm._v("Edit Matrix")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.form
        ? _c("shared-form", {
            attrs: {
              id: _vm.id,
              form: _vm.form,
              matrix: _vm.matrix,
              submit: _vm.submit,
              fieldsets: _vm.fieldsets,
              matrices: _vm.matrices
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Matrices/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Matrices/Edit.vue ***!
  \**********************************************/
/*! exports provided: getModels, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=45214386& */ "./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getModels"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Matrices/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default, getModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getModels"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=45214386& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL01hdHJpY2VzL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXRyaWNlcy9FZGl0LnZ1ZT9iNzBiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXRyaWNlcy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvRWRpdC52dWU/ZjI2NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvRWRpdC52dWU/ZjFmYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQURBO0FBU0EsTUFUQSxrQkFTQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLG1CQUZBO0FBR0Esa0JBSEE7QUFJQSxnQkFKQTtBQUtBO0FBTEE7QUFPQSxHQWpCQTtBQW1CQTtBQUNBO0FBREEsR0FuQkE7QUF1QkE7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQSxPQU5BLFdBTUE7QUFDQTtBQUNBLE9BUkE7QUFTQTtBQW5CQSxHQXZCQTtBQTZDQSxrQkE3Q0EsNEJBNkNBLEVBN0NBLEVBNkNBLElBN0NBLEVBNkNBLElBN0NBLEVBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFNBSkE7QUFLQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSwwQ0FEQTtBQUVBLGdDQUZBO0FBR0Esb0NBSEE7QUFJQSw4Q0FKQTtBQUtBLGdDQUxBO0FBTUEsZ0dBTkE7QUFPQSw0REFQQTtBQVFBLHdEQVJBO0FBU0Esa0RBVEE7QUFVQSxzREFWQTtBQVdBLGdDQVhBO0FBWUEsc0RBWkE7QUFhQSw0Q0FiQTtBQWNBLDhDQWRBO0FBZUEsa0NBZkE7QUFnQkEsd0NBaEJBO0FBaUJBLG9FQWpCQTtBQWtCQSw4REFsQkE7QUFtQkEsd0RBbkJBO0FBb0JBLDBEQXBCQTtBQXFCQSxrREFyQkE7QUFzQkE7QUF0QkEsYUF1QkEsSUF2QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0EsV0FIQTtBQUlBLFNBbkNBO0FBb0NBO0FBQ0EsS0E3Q0E7QUE4Q0E7QUE1RkE7QUErRkE7QUFDQSxhQUNBLDJDQURBLEVBRUEsMkJBRkEsRUFHQSwwQkFIQSxHQUlBLElBSkEsQ0FJQTtBQUNBO0FBQ0EsR0FGQSxDQUpBLFdBTUE7QUFDQTtBQUNBLEdBUkE7QUFTQSxDOzs7Ozs7Ozs7Ozs7QUNqSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGNBQWMsRUFBRTtBQUNsQztBQUNBLDJCQUEyQixTQUFTLHNCQUFzQixFQUFFO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUE7QUFBQTtBQUEwTCxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzk2LmpzP2lkPTgyNzY1NjY3ZDJmZDVlYmRmNjk5Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGFwcC10aXRsZSBpY29uPVwibGF5ZXItZ3JvdXBcIj5FZGl0IE1hdHJpeDwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8c2hhcmVkLWZvcm1cbiAgICAgICAgICAgIHYtaWY9XCJmb3JtXCJcbiAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgIDpmb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICA6bWF0cml4PVwibWF0cml4XCJcbiAgICAgICAgICAgIDpzdWJtaXQ9XCJzdWJtaXRcIlxuICAgICAgICAgICAgOmZpZWxkc2V0cz1cImZpZWxkc2V0c1wiXG4gICAgICAgICAgICA6bWF0cmljZXM9XCJtYXRyaWNlc1wiPlxuICAgICAgICA8L3NoYXJlZC1mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgU2hhcmVkRm9ybSBmcm9tICcuL1NoYXJlZEZvcm0nXG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vc2VydmljZXMvRm9ybSdcbiAgICBpbXBvcnQgcGx1cmFsaXplIGZyb20gJ3BsdXJhbGl6ZSdcbiAgICBpbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiBfLmhhcyh0aGlzLmZvcm0sICduYW1lJykgPyB0aGlzLmZvcm0ubmFtZSA6ICdMb2FkaW5nLi4uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICBmaWVsZHNldHM6IFtdLFxuICAgICAgICAgICAgICAgIG1hdHJpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICBtYXRyaXg6IHt9LFxuICAgICAgICAgICAgICAgIGZvcm06IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnc2hhcmVkLWZvcm0nOiBTaGFyZWRGb3JtXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0ucmVmZXJlbmNlX3Npbmd1bGFyID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZWZlcmVuY2Vfc2luZ3VsYXIgPSBwbHVyYWxpemUuc2luZ3VsYXIodGhpcy5mb3JtLm5hbWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5yZWZlcmVuY2VfcGx1cmFsID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZWZlcmVuY2VfcGx1cmFsID0gcGx1cmFsaXplKHRoaXMuZm9ybS5uYW1lKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaChgL2FwaS9tYXRyaWNlcy8ke3RoaXMuaWR9YCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ25hdmlnYXRpb24vZmV0Y2hBZG1pbk5hdmlnYXRpb24nKVxuXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdNYXRyaXggc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQnLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9tYXRyaWNlcycpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2ZhaWxlZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgZ2V0TW9kZWxzKHRvLnBhcmFtcy5tYXRyaXgsIChlcnJvciwgbWF0cml4LCBmaWVsZHNldHMsIG1hdHJpY2VzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci50b1N0cmluZygpLCAnZGFuZ2VyJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvbWF0cmljZXMnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5pZCAgICAgICAgPSBtYXRyaXguZGF0YS5kYXRhLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5tYXRyaXggICAgPSBtYXRyaXguZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5maWVsZHNldHMgPSBmaWVsZHNldHMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5tYXRyaWNlcyAgPSBtYXRyaWNlcy5kYXRhLmRhdGFcblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZm9ybSA9IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRfaWQ6ICAgICAgICAgIHZtLm1hdHJpeC5wYXJlbnRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogICAgICAgICAgICAgICB2bS5tYXRyaXgubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGU6ICAgICAgICAgICAgIHZtLm1hdHJpeC5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICAgICAgICB2bS5tYXRyaXguZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogICAgICAgICAgICAgICB2bS5tYXRyaXgudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNldDogICAgICAgICAgIHZtLm1hdHJpeC5maWVsZHNldCAmJiB2bS5tYXRyaXguZmllbGRzZXQuaWQgPyB2bS5tYXRyaXguZmllbGRzZXQuaWQgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZV9zaW5ndWxhcjogdm0ubWF0cml4LnJlZmVyZW5jZV9zaW5ndWxhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VfcGx1cmFsOiAgIHZtLm1hdHJpeC5yZWZlcmVuY2VfcGx1cmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXI6ICAgICAgICAgICAgdm0ubWF0cml4LnNpZGViYXIgPyAnMScgOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVpY2tsaW5rOiAgICAgICAgICB2bS5tYXRyaXgucXVpY2tsaW5rID8gJzEnIDogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICAgICAgICAgICAgICAgdm0ubWF0cml4Lmljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd19uYW1lX2ZpZWxkOiAgICB2bS5tYXRyaXguc2hvd19uYW1lX2ZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVfbGFiZWw6ICAgICAgICAgdm0ubWF0cml4Lm5hbWVfbGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZV9mb3JtYXQ6ICAgICAgICB2bS5tYXRyaXgubmFtZV9mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGU6ICAgICAgICAgICAgICB2bS5tYXRyaXgucm91dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICAgICAgICAgICB2bS5tYXRyaXgudGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aXNpb25fY29udHJvbDogICB2bS5tYXRyaXgucmV2aXNpb25fY29udHJvbCA/ICcxJyA6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaXphYmxlOiAgICAgIHZtLm1hdHJpeC5jYXRlZ29yaXphYmxlID8gJzEnIDogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRpdGFibGU6ICAgICAgICAgdm0ubWF0cml4LmNyZWRpdGFibGUgPyAnMScgOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaGFibGU6ICAgICAgICB2bS5tYXRyaXgucHVibGlzaGFibGUgPyAnMScgOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VvYWJsZTogICAgICAgICAgICB2bS5tYXRyaXguc2VvYWJsZSA/ICcxJyA6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICAgICAgICAgICAgIHZtLm1hdHJpeC5zdGF0dXMgPyAnMScgOiAnMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uJGVtaXQoJ3VwZGF0ZUhlYWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ucmVzZXRDaGFuZ2VMaXN0ZW5lcigpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TW9kZWxzKG1heHRyaXgsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvbWF0cmljZXMvJHttYXh0cml4fWApLFxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2ZpZWxkc2V0cycpLFxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL21hdHJpY2VzJylcbiAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoKG1hdHJpeCwgZmllbGRzZXRzLCBtYXRyaWNlcykgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbWF0cml4LCBmaWVsZHNldHMsIG1hdHJpY2VzKVxuICAgICAgICB9KSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ1RoZSByZXF1ZXN0ZWQgbWF4dHJpeCBjb3VsZCBub3QgYmUgZm91bmQnKSlcbiAgICAgICAgfSlcbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwibGF5ZXItZ3JvdXBcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkVkaXQgTWF0cml4XCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZm9ybVxuICAgICAgICA/IF9jKFwic2hhcmVkLWZvcm1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IF92bS5pZCxcbiAgICAgICAgICAgICAgZm9ybTogX3ZtLmZvcm0sXG4gICAgICAgICAgICAgIG1hdHJpeDogX3ZtLm1hdHJpeCxcbiAgICAgICAgICAgICAgc3VibWl0OiBfdm0uc3VibWl0LFxuICAgICAgICAgICAgICBmaWVsZHNldHM6IF92bS5maWVsZHNldHMsXG4gICAgICAgICAgICAgIG1hdHJpY2VzOiBfdm0ubWF0cmljZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1MjE0Mzg2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDUyMTQzODYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDUyMTQzODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDUyMTQzODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1MjE0Mzg2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ1MjE0Mzg2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvRWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1MjE0Mzg2JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==