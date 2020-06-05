(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Matrices/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vuex */ "./resources/js/vuex/index.js");
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/views/Matrices/SharedForm.vue");
//
//
//
//
//
//
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
        inner: 'Create a Matrix'
      };
    }
  },
  data: function data() {
    return {
      fieldsets: [],
      matrices: [],
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_2__["default"]({
        name: '',
        parent_id: 0,
        handle: '',
        description: '',
        type: 'collection',
        fieldset: null,
        reference_singular: '',
        reference_plural: '',
        sidebar: '1',
        quicklink: '1',
        icon: '',
        show_name_field: true,
        name_label: '',
        name_format: '',
        route: '',
        template: '',
        categorizable: '1',
        creditable: '1',
        publishable: '1',
        revision_control: '1',
        seoable: '1',
        status: '1'
      }, true)
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.form.reference_singular == '') {
        this.form.reference_singular = pluralize__WEBPACK_IMPORTED_MODULE_0___default.a.singular(this.form.name);
      }

      if (this.form.reference_plural == '') {
        this.form.reference_plural = pluralize__WEBPACK_IMPORTED_MODULE_0___default()(this.form.name);
      }

      this.form.post('/api/matrices').then(function (response) {
        _vuex__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('navigation/fetchAdminNavigation');
        toast('Matrix successfully created', 'success');

        _this.$router.push('/matrices');
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/fieldsets'), axios.get('/api/matrices')]).then(axios.spread(function (fieldsets, matrices) {
      next(function (vm) {
        vm.fieldsets = fieldsets.data.data;
        vm.matrices = matrices.data.data;
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Create.vue?vue&type=template&id=79047622&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Matrices/Create.vue?vue&type=template&id=79047622& ***!
  \*************************************************************************************************************************************************************************************************************/
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
            _vm._v("Create Matrix")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("shared-form", {
        attrs: {
          form: _vm.form,
          submit: _vm.submit,
          fieldsets: _vm.fieldsets,
          matrices: _vm.matrices
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Matrices/Create.vue":
/*!************************************************!*\
  !*** ./resources/js/views/Matrices/Create.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_79047622___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=79047622& */ "./resources/js/views/Matrices/Create.vue?vue&type=template&id=79047622&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/Matrices/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_79047622___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_79047622___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Matrices/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Matrices/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Matrices/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Matrices/Create.vue?vue&type=template&id=79047622&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Matrices/Create.vue?vue&type=template&id=79047622& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_79047622___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=79047622& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Create.vue?vue&type=template&id=79047622&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_79047622___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_79047622___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL01hdHJpY2VzL0NyZWF0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL01hdHJpY2VzL0NyZWF0ZS52dWU/ZTJjMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTWF0cmljZXMvQ3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTWF0cmljZXMvQ3JlYXRlLnZ1ZT85NTMzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9NYXRyaWNlcy9DcmVhdGUudnVlPzdmYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQURBO0FBU0EsTUFUQSxrQkFTQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxrQkFGQTtBQUdBO0FBQ0EsZ0JBREE7QUFFQSxvQkFGQTtBQUdBLGtCQUhBO0FBSUEsdUJBSkE7QUFLQSwwQkFMQTtBQU1BLHNCQU5BO0FBUUEsOEJBUkE7QUFTQSw0QkFUQTtBQVdBLG9CQVhBO0FBWUEsc0JBWkE7QUFhQSxnQkFiQTtBQWVBLDZCQWZBO0FBZ0JBLHNCQWhCQTtBQWlCQSx1QkFqQkE7QUFtQkEsaUJBbkJBO0FBb0JBLG9CQXBCQTtBQXNCQSwwQkF0QkE7QUF1QkEsdUJBdkJBO0FBd0JBLHdCQXhCQTtBQXlCQSw2QkF6QkE7QUEyQkEsb0JBM0JBO0FBNkJBO0FBN0JBLFNBOEJBLElBOUJBO0FBSEE7QUFtQ0EsR0E3Q0E7QUErQ0E7QUFDQTtBQURBLEdBL0NBO0FBbURBO0FBQ0EsVUFEQSxvQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0EsT0FOQSxXQU1BO0FBQ0E7QUFDQSxPQVJBO0FBU0E7QUFuQkEsR0FuREE7QUF5RUEsa0JBekVBLDRCQXlFQSxFQXpFQSxFQXlFQSxJQXpFQSxFQXlFQSxJQXpFQSxFQXlFQTtBQUNBLGVBQ0EsMkJBREEsRUFFQSwwQkFGQSxHQUdBLElBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQSxLQUxBLENBSEE7QUFTQTtBQW5GQSxHOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGNBQWMsRUFBRTtBQUNsQztBQUNBLDJCQUEyQixTQUFTLHNCQUFzQixFQUFFO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFDM0I7QUFDTDs7O0FBR3JEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTRMLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvOTIuanM/aWQ9ZThiZmIyNmRkMjlhNmJjZDcwOWMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8YXBwLXRpdGxlIGljb249XCJsYXllci1ncm91cFwiPkNyZWF0ZSBNYXRyaXg8L2FwcC10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHNoYXJlZC1mb3JtXG4gICAgICAgICAgICA6Zm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgOnN1Ym1pdD1cInN1Ym1pdFwiXG4gICAgICAgICAgICA6ZmllbGRzZXRzPVwiZmllbGRzZXRzXCJcbiAgICAgICAgICAgIDptYXRyaWNlcz1cIm1hdHJpY2VzXCI+XG4gICAgICAgIDwvc2hhcmVkLWZvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJ1xuICAgIGltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi92dWV4J1xuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nXG4gICAgaW1wb3J0IFNoYXJlZEZvcm0gZnJvbSAnLi9TaGFyZWRGb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogJ0NyZWF0ZSBhIE1hdHJpeCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmllbGRzZXRzOiBbXSxcbiAgICAgICAgICAgICAgICBtYXRyaWNlczogW10sXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X2lkOiAwLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQ6IG51bGwsXG5cbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlX3Npbmd1bGFyOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlX3BsdXJhbDogJycsXG5cbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogJzEnLFxuICAgICAgICAgICAgICAgICAgICBxdWlja2xpbms6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJycsXG5cbiAgICAgICAgICAgICAgICAgICAgc2hvd19uYW1lX2ZpZWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lX2xhYmVsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZV9mb3JtYXQ6ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpemFibGU6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgY3JlZGl0YWJsZTogJzEnLFxuICAgICAgICAgICAgICAgICAgICBwdWJsaXNoYWJsZTogJzEnLFxuICAgICAgICAgICAgICAgICAgICByZXZpc2lvbl9jb250cm9sOiAnMScsXG5cbiAgICAgICAgICAgICAgICAgICAgc2VvYWJsZTogJzEnLFxuXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJzEnLFxuICAgICAgICAgICAgICAgIH0sIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3NoYXJlZC1mb3JtJzogU2hhcmVkRm9ybVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLnJlZmVyZW5jZV9zaW5ndWxhciA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVmZXJlbmNlX3Npbmd1bGFyID0gcGx1cmFsaXplLnNpbmd1bGFyKHRoaXMuZm9ybS5uYW1lKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0ucmVmZXJlbmNlX3BsdXJhbCA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVmZXJlbmNlX3BsdXJhbCA9IHBsdXJhbGl6ZSh0aGlzLmZvcm0ubmFtZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucG9zdCgnL2FwaS9tYXRyaWNlcycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCduYXZpZ2F0aW9uL2ZldGNoQWRtaW5OYXZpZ2F0aW9uJylcblxuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnTWF0cml4IHN1Y2Nlc3NmdWxseSBjcmVhdGVkJywgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbWF0cmljZXMnKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9maWVsZHNldHMnKSxcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvbWF0cmljZXMnKSxcbiAgICAgICAgICAgIF0pLnRoZW4oYXhpb3Muc3ByZWFkKChmaWVsZHNldHMsIG1hdHJpY2VzKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdm0uZmllbGRzZXRzID0gZmllbGRzZXRzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICB2bS5tYXRyaWNlcyAgPSBtYXRyaWNlcy5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwibGF5ZXItZ3JvdXBcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkNyZWF0ZSBNYXRyaXhcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic2hhcmVkLWZvcm1cIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgIHN1Ym1pdDogX3ZtLnN1Ym1pdCxcbiAgICAgICAgICBmaWVsZHNldHM6IF92bS5maWVsZHNldHMsXG4gICAgICAgICAgbWF0cmljZXM6IF92bS5tYXRyaWNlc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5MDQ3NjIyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc5MDQ3NjIyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc5MDQ3NjIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc5MDQ3NjIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5MDQ3NjIyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc5MDQ3NjIyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvTWF0cmljZXMvQ3JlYXRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NyZWF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzkwNDc2MjImXCIiXSwic291cmNlUm9vdCI6IiJ9