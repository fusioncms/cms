(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Menus/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Menus/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Form */ "./resources/js/services/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/pages/Menus/SharedForm.vue");
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
        inner: 'Create a Menu'
      };
    }
  },
  data: function data() {
    return {
      sections: [],
      form: new _services_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        handle: '',
        description: '',
        fieldset: {}
      }, true)
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  watch: {
    sections: {
      deep: true,
      handler: function handler(value) {
        if (!this.hasChanges) {
          this.form.onFirstChange();
        }
      }
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post('/api/menus').then(function (response) {
        axios.post("/api/fieldsets/".concat(response.data.fieldset.id, "/sections"), {
          sections: _this.sections
        }).then(function (response) {
          toast('Menu successfully saved', 'success');

          _this.$router.push('/menus');
        })["catch"](function (response) {
          toast(response.message, 'failed');
        });
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.form.resetChangeListener();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Menus/Create.vue?vue&type=template&id=0c2f39c0&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Menus/Create.vue?vue&type=template&id=0c2f39c0& ***!
  \**********************************************************************************************************************************************************************************************************/
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
          _c("app-title", { attrs: { icon: "anchor" } }, [
            _vm._v("Create Menu")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("shared-form", { attrs: { form: _vm.form } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Menus/Create.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/Menus/Create.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_0c2f39c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=0c2f39c0& */ "./resources/js/pages/Menus/Create.vue?vue&type=template&id=0c2f39c0&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/pages/Menus/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_0c2f39c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_0c2f39c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Menus/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Menus/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Menus/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Menus/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Menus/Create.vue?vue&type=template&id=0c2f39c0&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Menus/Create.vue?vue&type=template&id=0c2f39c0& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_0c2f39c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=0c2f39c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Menus/Create.vue?vue&type=template&id=0c2f39c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_0c2f39c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_0c2f39c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGhlbWUudnVlPzRjMTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGhlbWUudnVlPzNlZDIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZT9lNTBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLHlCQUZBO0FBR0E7QUFIQTtBQUtBLEdBZkE7QUFpQkE7QUFDQSxlQURBLHVCQUNBLGNBREEsRUFDQTtBQUFBOztBQUNBLFlBQ0EsS0FEQSxzQkFDQSxjQURBLEdBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7O0FBSUE7QUFDQSxPQVJBO0FBU0EsS0FYQTtBQWFBLFdBYkEscUJBYUE7QUFDQSxpQkFDQSx3QkFEQSxHQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsQ0FJQSxJQUpBLENBSUEsSUFKQSxFQUZBO0FBT0EsS0FyQkE7QUF1QkEsZ0JBdkJBLDBCQXVCQTtBQUFBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNBLE9BTkE7QUFPQSxLQS9CQTtBQWlDQSxpQkFqQ0EsMkJBaUNBO0FBQ0E7QUFDQSxLQW5DQTtBQXFDQSxnQkFyQ0EsMEJBcUNBO0FBQ0E7QUFDQTtBQUNBLEtBeENBO0FBMENBLGdCQTFDQSx3QkEwQ0EsS0ExQ0EsRUEwQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsT0FIQSxDQUtBOzs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsT0FGQSxXQUVBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQSxPQVhBO0FBWUE7QUFoRUEsR0FqQkE7QUFvRkEsa0JBcEZBLDRCQW9GQSxFQXBGQSxFQW9GQSxJQXBGQSxFQW9GQSxJQXBGQSxFQW9GQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUF4RkEsRzs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxjQUFjLEVBQUU7QUFDbEMsMEJBQTBCLFNBQVMsa0JBQWtCLEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFzRDtBQUM1RSxtQkFBbUI7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxQkFBcUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsYUFBYSw2REFBNkQ7QUFDMUU7QUFDQSx5QkFBeUIsc0JBQXNCO0FBQy9DO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RCw2QkFBNkIsd0NBQXdDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5Q0FBeUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3REFBd0Q7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsbUNBQW1DLDZCQUE2QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxnQkFBZ0IsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU0sMEJBQTBCO0FBQ3RELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBNkM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlCQUFpQjtBQUMzQyx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlCQUFpQjtBQUMzQyx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekpBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFxTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzExOC5qcz9pZD0xZDVhMDNlOTJhNWNkYzZkMjI4YiIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxhcHAtdGl0bGUgaWNvbj1cInBhbGV0dGVcIj5UaGVtZTwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cC11cGxvYWRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGUtdXBsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwidXBsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiemlwXCJcbiAgICAgICAgICAgICAgICAgICAgOm11bHRpcGxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJ2ZXJpZnlVcGxvYWRcIlxuICAgICAgICAgICAgICAgID48L3AtdXBsb2FkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbWItNiBtZDp3LTEvMiB4bDp3LTEvNFwiIHYtZm9yPVwidGhlbWUgaW4gdGhlbWVzXCIgOmtleT1cInRoZW1lLm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidy1mdWxsIHJvdW5kZWQtdCBzaGFkb3dcIiA6c3JjPVwidGhlbWUucHJldmlld1wiIDphbHQ9XCJ0aGVtZS5uYW1lXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+e3sgdGhlbWUubmFtZSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktODAwIHRleHQtYmFzZVwiPnt7IHRoZW1lLmRlc2NyaXB0aW9uIH19PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGJvcmRlci10LTIgYm9yZGVyLWdyYXktMjAwIHB0LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gY2xhc3M9XCJ3LWZ1bGxcIiB2LWlmPVwiISB0aGVtZS5hY3RpdmVcIiBAY2xpY2s9XCJzZXRBc0FjdGl2ZSh0aGVtZS5uYW1lc3BhY2UpXCI+U2V0IGFzIGFjdGl2ZTwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHYtZWxzZT5DdXJyZW50bHkgQWN0aXZlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAndGhlbWVzLnNldHRpbmdzJyB9XCIgY2xhc3M9XCJidXR0b25cIj5HbyBCYWNrPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHAtbW9kYWwgbmFtZT1cImNvbmZpcm1cIiB0aXRsZT1cIkNvbmZpcm0gb3ZlcnJpZGVcIiBrZXk9XCJjb25maXJtX21vZGFsXCIgdi1tb2RlbD1cImNvbmZpcm1Nb2RhbFwiPlxuICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG92ZXJyaWRlIHRoaXMgdGhlbWU/IFRoZSBleGlzdGluZyB0aGVtZSB3aWxsIGJlIGRpc2NhcmRlZC48L3A+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBAY2xpY2s9XCJzdWJtaXRVcGxvYWRcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCI+WWVzLCBwbGVhc2UhPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8cC1idXR0b24gQGNsaWNrPVwiY2FuY2VsVXBsb2FkXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibXItM1wiPkxlYXZlIGFuZCBEaXNjYXJkIENoYW5nZXM8L3AtYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9wLW1vZGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBoZWFkOiB7XG4gICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbm5lcjogJ1RoZW1lJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aGVtZXM6IFtdLFxuICAgICAgICAgICAgY29uZmlybU1vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIHVwbG9hZEZvcm06IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldEFzQWN0aXZlKHRoZW1lTmFtZXNwYWNlKSB7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5wYXRjaChgL2FwaS90aGVtZS8ke3RoZW1lTmFtZXNwYWNlfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfLmVhY2godGhpcy50aGVtZXMsICh0aGVtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUuYWN0aXZlID0gdGhlbWUubmFtZXNwYWNlID09PSB0aGVtZU5hbWVzcGFjZVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdBY3RpdmUgdGhlbWUgaGFzIGJlZW4gc2V0JywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVmcmVzaCgpIHtcbiAgICAgICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RoZW1lcycpLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKHRoZW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbWVzICAgICAgID0gdGhlbWVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkRm9ybSAgID0gbnVsbFxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybU1vZGFsID0gZmFsc2VcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSkpXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3VibWl0VXBsb2FkKCkge1xuICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS90aGVtZXMnLCB0aGlzLnVwbG9hZEZvcm0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9hc3QoJ1RoZW1lIHN1Y2Nlc3NmdWxseSB1cGxvYWRlZCEnLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Nb2RhbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBjb25maXJtVXBsb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtTW9kYWwgPSB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FuY2VsVXBsb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtTW9kYWwgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQucmVtb3ZlKClcbiAgICAgICAgfSxcblxuICAgICAgICB2ZXJpZnlVcGxvYWQoZmlsZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsZXMgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB1cGxvYWQgZm9ybS4uXG4gICAgICAgICAgICB0aGlzLnVwbG9hZEZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICAgICAgdGhpcy51cGxvYWRGb3JtLmFwcGVuZCgnX21ldGhvZCcsICdQT1NUJylcbiAgICAgICAgICAgIHRoaXMudXBsb2FkRm9ybS5hcHBlbmQoJ2ZpbGUtdXBsb2FkJywgZmlsZXMpXG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvdGhlbWVzL3ZlcmlmeScsIHRoaXMudXBsb2FkRm9ybSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFVwbG9hZCgpXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbJ2ZpbGUtdXBsb2FkJ11bMF0gPT0gJ0EgVGhlbWUgd2l0aCBtYXRjaGluZyBuYW1lIGFscmVhZHkgZXhpc3RzLicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtVXBsb2FkKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMudXBsb2FkLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMudXBsb2FkLnNldEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzWydmaWxlLXVwbG9hZCddWzBdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgbmV4dChmdW5jdGlvbih2bSkge1xuICAgICAgICAgICAgdm0ucmVmcmVzaCgpXG4gICAgICAgIH0pXG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcInBhbGV0dGVcIiB9IH0sIFtfdm0uX3YoXCJUaGVtZVwiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInAtdXBsb2FkXCIsIHtcbiAgICAgICAgICAgICAgcmVmOiBcInVwbG9hZFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImZpbGUtdXBsb2FkXCIsIGFjY2VwdDogXCJ6aXBcIiwgbXVsdGlwbGU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGlucHV0OiBfdm0udmVyaWZ5VXBsb2FkIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sXG4gICAgICAgIF92bS5fbChfdm0udGhlbWVzLCBmdW5jdGlvbih0aGVtZSkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IGtleTogdGhlbWUubmFtZSwgc3RhdGljQ2xhc3M6IFwiY29sIG1iLTYgbWQ6dy0xLzIgeGw6dy0xLzRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHJvdW5kZWQtdCBzaGFkb3dcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogdGhlbWUucHJldmlldywgYWx0OiB0aGVtZS5uYW1lIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC1ib2xkIHRleHQteGwgbWItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0aGVtZS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JheS04MDAgdGV4dC1iYXNlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRoZW1lLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBib3JkZXItdC0yIGJvcmRlci1ncmF5LTIwMCBwdC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICF0aGVtZS5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctZnVsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0QXNBY3RpdmUodGhlbWUubmFtZXNwYWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2V0IGFzIGFjdGl2ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDdXJyZW50bHkgQWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJ0aGVtZXMuc2V0dGluZ3NcIiB9IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicC1tb2RhbFwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImNvbmZpcm1fbW9kYWxcIixcbiAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImNvbmZpcm1cIiwgdGl0bGU6IFwiQ29uZmlybSBvdmVycmlkZVwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY29uZmlybU1vZGFsLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uY29uZmlybU1vZGFsID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb25maXJtTW9kYWxcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG92ZXJyaWRlIHRoaXMgdGhlbWU/IFRoZSBleGlzdGluZyB0aGVtZSB3aWxsIGJlIGRpc2NhcmRlZC5cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICB7IHNsb3Q6IFwiZm9vdGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc3VibWl0VXBsb2FkIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJZZXMsIHBsZWFzZSFcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNhbmNlbFVwbG9hZCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTGVhdmUgYW5kIERpc2NhcmQgQ2hhbmdlc1wiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGhlbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhMjM5Y2UwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RoZW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGhlbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbWFuZGEvU2l0ZXMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JhMjM5Y2UwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JhMjM5Y2UwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JhMjM5Y2UwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UaGVtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmEyMzljZTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYmEyMzljZTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9UaGVtZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RoZW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGVtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGhlbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhMjM5Y2UwJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL01lbnVzL0NyZWF0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01lbnVzL0NyZWF0ZS52dWU/ZTk0YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWVudXMvQ3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWVudXMvQ3JlYXRlLnZ1ZT8yN2NlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NZW51cy9DcmVhdGUudnVlPzEwMWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBQ0EsZ0JBREE7QUFFQSxrQkFGQTtBQUdBLHVCQUhBO0FBSUE7QUFKQSxTQUtBLElBTEE7QUFGQTtBQVNBLEdBbkJBO0FBcUJBO0FBQ0E7QUFEQSxHQXJCQTtBQXlCQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxhQUZBLG1CQUVBLEtBRkEsRUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQSxHQXpCQTtBQW9DQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQSxtQ0FDQSxJQURBLENBQ0E7QUFDQTtBQUFBO0FBQUEsV0FDQSxJQURBLENBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBTEEsV0FLQTtBQUNBO0FBQ0EsU0FQQTtBQVFBLE9BVkEsV0FVQTtBQUNBO0FBQ0EsT0FaQTtBQWFBO0FBZkEsR0FwQ0E7QUFzREEsU0F0REEscUJBc0RBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQTFEQSxHOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDO0FBQ0EsMkJBQTJCLFNBQVMsaUJBQWlCLEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFxRjtBQUMzQjtBQUNMOzs7QUFHckQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBNEwsQ0FBZ0Isa1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBaE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy8xMTguanM/aWQ9YThkMGU4NzZkMzBkZWI3MmIzY2MiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG5cdFx0XHQ8YXBwLXRpdGxlIGljb249XCJhbmNob3JcIj5DcmVhdGUgTWVudTwvYXBwLXRpdGxlPlxuXHRcdDwvcG9ydGFsPlxuXG4gICAgICAgIDxzaGFyZWQtZm9ybSA6Zm9ybT1cImZvcm1cIj48L3NoYXJlZC1mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Gb3JtJ1xuICAgIGltcG9ydCBTaGFyZWRGb3JtIGZyb20gJy4vU2hhcmVkRm9ybSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6ICdDcmVhdGUgYSBNZW51J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uczogW10sXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldDoge30sXG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnc2hhcmVkLWZvcm0nOiBTaGFyZWRGb3JtXG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHNlY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIHRoaXMuaGFzQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLm9uRmlyc3RDaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucG9zdCgnL2FwaS9tZW51cycpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwaS9maWVsZHNldHMvJHtyZXNwb25zZS5kYXRhLmZpZWxkc2V0LmlkfS9zZWN0aW9uc2AsIHsgc2VjdGlvbnM6IHRoaXMuc2VjdGlvbnMgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ01lbnUgc3VjY2Vzc2Z1bGx5IHNhdmVkJywgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbWVudXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0Q2hhbmdlTGlzdGVuZXIoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJhbmNob3JcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkNyZWF0ZSBNZW51XCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNoYXJlZC1mb3JtXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0gfSB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjMmYzOWMwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBjMmYzOWMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBjMmYzOWMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBjMmYzOWMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjMmYzOWMwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBjMmYzOWMwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvTWVudXMvQ3JlYXRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NyZWF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGMyZjM5YzAmXCIiXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> 6fe5b0fa15d4438a6cf521e633fb5a6be2f2cc67
