(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Theme.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Theme.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: 'Theme'
      };
    }
  },
  data: function data() {
    return {
      themes: [],
      confirmModal: false,
      uploadForm: null
    };
  },
  methods: {
    setAsActive: function setAsActive(themeNamespace) {
      var _this = this;

      axios.patch("/api/theme/".concat(themeNamespace)).then(function () {
        _.each(_this.themes, function (theme) {
          theme.active = theme.namespace === themeNamespace;
        });

        toast('Active theme has been set', 'success');
      });
    },
    refresh: function refresh() {
      axios.all([axios.get('/api/themes')]).then(axios.spread(function (themes) {
        this.themes = themes.data.data;
        this.uploadForm = null;
        this.confirmModal = false;
      }.bind(this)));
    },
    submitUpload: function submitUpload() {
      var _this2 = this;

      axios.post('/api/themes', this.uploadForm).then(function (response) {
        toast('Theme successfully uploaded!', 'success');
        _this2.confirmModal = false;

        _this2.$refs.upload.remove();

        _this2.refresh();
      });
    },
    confirmUpload: function confirmUpload() {
      this.confirmModal = true;
    },
    cancelUpload: function cancelUpload() {
      this.confirmModal = false;
      this.$refs.upload.remove();
    },
    verifyUpload: function verifyUpload(files) {
      var _this3 = this;

      if (typeof files == 'undefined') {
        return;
      } // Create upload form..


      this.uploadForm = new FormData();
      this.uploadForm.append('_method', 'POST');
      this.uploadForm.append('file-upload', files);
      axios.post('/api/themes/verify', this.uploadForm).then(function (response) {
        _this3.submitUpload();
      })["catch"](function (error) {
        if (error.response.data.errors['file-upload'][0] == 'A Theme with matching name already exists.') {
          _this3.confirmUpload();
        } else {
          toast(error.response.data.message, 'failed');

          _this3.$refs.upload.remove();

          _this3.$refs.upload.setError(error.response.data.errors['file-upload'][0]);
        }
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.refresh();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0& ***!
  \***************************************************************************************************************************************************************************************************/
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
        [_c("page-title", { attrs: { icon: "palette" } }, [_vm._v("Theme")])],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "content-container" },
          [
            _c("p-upload", {
              ref: "upload",
              attrs: { name: "file-upload", accept: "zip", multiple: false },
              on: { input: _vm.verifyUpload }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.themes, function(theme) {
          return _c(
            "div",
            { key: theme.name, staticClass: "col mb-6 md:w-1/2 xl:w-1/4" },
            [
              _c("div", { staticClass: "card" }, [
                _c("img", {
                  staticClass: "w-full rounded-t shadow",
                  attrs: { src: theme.preview, alt: theme.name }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "card__body" }, [
                  _c("div", { staticClass: "font-bold text-xl mb-2" }, [
                    _vm._v(_vm._s(theme.name))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-gray-800 text-base" }, [
                    _vm._v(_vm._s(theme.description))
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-full border-t-2 border-gray-200 pt-3" },
                    [
                      !theme.active
                        ? _c(
                            "p-button",
                            {
                              staticClass: "w-full",
                              on: {
                                click: function($event) {
                                  return _vm.setAsActive(theme.namespace)
                                }
                              }
                            },
                            [_vm._v("Set as active")]
                          )
                        : _c("p", { staticClass: "text-center" }, [
                            _vm._v("Currently Active")
                          ])
                    ],
                    1
                  )
                ])
              ])
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _c(
            "router-link",
            {
              staticClass: "button",
              attrs: { to: { name: "themes.settings" } }
            },
            [_vm._v("Go Back")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "p-modal",
        {
          key: "confirm_modal",
          attrs: { name: "confirm", title: "Confirm override" },
          model: {
            value: _vm.confirmModal,
            callback: function($$v) {
              _vm.confirmModal = $$v
            },
            expression: "confirmModal"
          }
        },
        [
          _c("p", [
            _vm._v(
              "Are you sure you want to override this theme? The existing theme will be discarded."
            )
          ]),
          _vm._v(" "),
          _c(
            "template",
            { slot: "footer" },
            [
              _c(
                "p-button",
                {
                  staticClass: "button button--primary",
                  attrs: { type: "button" },
                  on: { click: _vm.submitUpload }
                },
                [_vm._v("Yes, please!")]
              ),
              _vm._v(" "),
              _c(
                "p-button",
                {
                  staticClass: "mr-3",
                  attrs: { type: "button" },
                  on: { click: _vm.cancelUpload }
                },
                [_vm._v("Leave and Discard Changes")]
              )
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Theme.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Theme.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Theme.vue?vue&type=template&id=ba239ce0& */ "./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0&");
/* harmony import */ var _Theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Theme.vue?vue&type=script&lang=js& */ "./resources/js/pages/Theme.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Theme.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Theme.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Theme.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Theme.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Theme.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Theme.vue?vue&type=template&id=ba239ce0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGhlbWUudnVlPzRjMTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGhlbWUudnVlPzNlZDIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZT9lNTBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLHlCQUZBO0FBR0E7QUFIQTtBQUtBLEdBZkE7QUFpQkE7QUFDQSxlQURBLHVCQUNBLGNBREEsRUFDQTtBQUFBOztBQUNBLFlBQ0EsS0FEQSxzQkFDQSxjQURBLEdBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7O0FBSUE7QUFDQSxPQVJBO0FBU0EsS0FYQTtBQWFBLFdBYkEscUJBYUE7QUFDQSxpQkFDQSx3QkFEQSxHQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsQ0FJQSxJQUpBLENBSUEsSUFKQSxFQUZBO0FBT0EsS0FyQkE7QUF1QkEsZ0JBdkJBLDBCQXVCQTtBQUFBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNBLE9BTkE7QUFPQSxLQS9CQTtBQWlDQSxpQkFqQ0EsMkJBaUNBO0FBQ0E7QUFDQSxLQW5DQTtBQXFDQSxnQkFyQ0EsMEJBcUNBO0FBQ0E7QUFDQTtBQUNBLEtBeENBO0FBMENBLGdCQTFDQSx3QkEwQ0EsS0ExQ0EsRUEwQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsT0FIQSxDQUtBOzs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsT0FGQSxXQUVBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQSxPQVhBO0FBWUE7QUFoRUEsR0FqQkE7QUFvRkEsa0JBcEZBLDRCQW9GQSxFQXBGQSxFQW9GQSxJQXBGQSxFQW9GQSxJQXBGQSxFQW9GQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUF4RkEsRzs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxjQUFjLEVBQUU7QUFDbEMsMkJBQTJCLFNBQVMsa0JBQWtCLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFzRDtBQUM1RSxtQkFBbUI7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxQkFBcUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsYUFBYSw2REFBNkQ7QUFDMUU7QUFDQSx5QkFBeUIsc0JBQXNCO0FBQy9DO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RCw2QkFBNkIsd0NBQXdDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5Q0FBeUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3REFBd0Q7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsbUNBQW1DLDZCQUE2QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxnQkFBZ0IsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU0sMEJBQTBCO0FBQ3RELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBNkM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlCQUFpQjtBQUMzQyx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlCQUFpQjtBQUMzQyx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekpBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFxTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzEwOS5qcz9pZD1lNGRlYjg1M2QyNmEwMDhhZTQxMSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxwYWdlLXRpdGxlIGljb249XCJwYWxldHRlXCI+VGhlbWU8L3BhZ2UtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxwLXVwbG9hZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZS11cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJ1cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJ6aXBcIlxuICAgICAgICAgICAgICAgICAgICA6bXVsdGlwbGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInZlcmlmeVVwbG9hZFwiXG4gICAgICAgICAgICAgICAgPjwvcC11cGxvYWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtYi02IG1kOnctMS8yIHhsOnctMS80XCIgdi1mb3I9XCJ0aGVtZSBpbiB0aGVtZXNcIiA6a2V5PVwidGhlbWUubmFtZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3LWZ1bGwgcm91bmRlZC10IHNoYWRvd1wiIDpzcmM9XCJ0aGVtZS5wcmV2aWV3XCIgOmFsdD1cInRoZW1lLm5hbWVcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTJcIj57eyB0aGVtZS5uYW1lIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS04MDAgdGV4dC1iYXNlXCI+e3sgdGhlbWUuZGVzY3JpcHRpb24gfX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgYm9yZGVyLXQtMiBib3JkZXItZ3JheS0yMDAgcHQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBjbGFzcz1cInctZnVsbFwiIHYtaWY9XCIhIHRoZW1lLmFjdGl2ZVwiIEBjbGljaz1cInNldEFzQWN0aXZlKHRoZW1lLm5hbWVzcGFjZSlcIj5TZXQgYXMgYWN0aXZlPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyXCIgdi1lbHNlPkN1cnJlbnRseSBBY3RpdmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICd0aGVtZXMuc2V0dGluZ3MnIH1cIiBjbGFzcz1cImJ1dHRvblwiPkdvIEJhY2s8L3JvdXRlci1saW5rPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cC1tb2RhbCBuYW1lPVwiY29uZmlybVwiIHRpdGxlPVwiQ29uZmlybSBvdmVycmlkZVwiIGtleT1cImNvbmZpcm1fbW9kYWxcIiB2LW1vZGVsPVwiY29uZmlybU1vZGFsXCI+XG4gICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gb3ZlcnJpZGUgdGhpcyB0aGVtZT8gVGhlIGV4aXN0aW5nIHRoZW1lIHdpbGwgYmUgZGlzY2FyZGVkLjwvcD5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHAtYnV0dG9uIEBjbGljaz1cInN1Ym1pdFVwbG9hZFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIj5ZZXMsIHBsZWFzZSE8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBAY2xpY2s9XCJjYW5jZWxVcGxvYWRcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtci0zXCI+TGVhdmUgYW5kIERpc2NhcmQgQ2hhbmdlczwvcC1idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3AtbW9kYWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGhlYWQ6IHtcbiAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlubmVyOiAnVGhlbWUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRoZW1lczogW10sXG4gICAgICAgICAgICBjb25maXJtTW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgdXBsb2FkRm9ybTogbnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0QXNBY3RpdmUodGhlbWVOYW1lc3BhY2UpIHtcbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLnBhdGNoKGAvYXBpL3RoZW1lLyR7dGhlbWVOYW1lc3BhY2V9YClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaCh0aGlzLnRoZW1lcywgKHRoZW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5hY3RpdmUgPSB0aGVtZS5uYW1lc3BhY2UgPT09IHRoZW1lTmFtZXNwYWNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ0FjdGl2ZSB0aGVtZSBoYXMgYmVlbiBzZXQnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICByZWZyZXNoKCkge1xuICAgICAgICAgICAgYXhpb3MuYWxsKFtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGhlbWVzJyksXG4gICAgICAgICAgICBdKS50aGVuKGF4aW9zLnNwcmVhZChmdW5jdGlvbiAodGhlbWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVtZXMgICAgICAgPSB0aGVtZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRGb3JtICAgPSBudWxsXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtTW9kYWwgPSBmYWxzZVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKSlcbiAgICAgICAgfSxcblxuICAgICAgICBzdWJtaXRVcGxvYWQoKSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3RoZW1lcycsIHRoaXMudXBsb2FkRm9ybSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0b2FzdCgnVGhlbWUgc3VjY2Vzc2Z1bGx5IHVwbG9hZGVkIScsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybU1vZGFsID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnVwbG9hZC5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbmZpcm1VcGxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Nb2RhbCA9IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICBjYW5jZWxVcGxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Nb2RhbCA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLiRyZWZzLnVwbG9hZC5yZW1vdmUoKVxuICAgICAgICB9LFxuXG4gICAgICAgIHZlcmlmeVVwbG9hZChmaWxlcykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWxlcyA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHVwbG9hZCBmb3JtLi5cbiAgICAgICAgICAgIHRoaXMudXBsb2FkRm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgICB0aGlzLnVwbG9hZEZvcm0uYXBwZW5kKCdfbWV0aG9kJywgJ1BPU1QnKVxuICAgICAgICAgICAgdGhpcy51cGxvYWRGb3JtLmFwcGVuZCgnZmlsZS11cGxvYWQnLCBmaWxlcylcblxuICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS90aGVtZXMvdmVyaWZ5JywgdGhpcy51cGxvYWRGb3JtKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0VXBsb2FkKClcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yc1snZmlsZS11cGxvYWQnXVswXSA9PSAnQSBUaGVtZSB3aXRoIG1hdGNoaW5nIG5hbWUgYWxyZWFkeSBleGlzdHMuJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1VcGxvYWQoKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2ZhaWxlZCcpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQuc2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbJ2ZpbGUtdXBsb2FkJ11bMF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICBuZXh0KGZ1bmN0aW9uKHZtKSB7XG4gICAgICAgICAgICB2bS5yZWZyZXNoKClcbiAgICAgICAgfSlcbiAgICB9LFxufVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtfYyhcInBhZ2UtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcInBhbGV0dGVcIiB9IH0sIFtfdm0uX3YoXCJUaGVtZVwiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInAtdXBsb2FkXCIsIHtcbiAgICAgICAgICAgICAgcmVmOiBcInVwbG9hZFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImZpbGUtdXBsb2FkXCIsIGFjY2VwdDogXCJ6aXBcIiwgbXVsdGlwbGU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGlucHV0OiBfdm0udmVyaWZ5VXBsb2FkIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sXG4gICAgICAgIF92bS5fbChfdm0udGhlbWVzLCBmdW5jdGlvbih0aGVtZSkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IGtleTogdGhlbWUubmFtZSwgc3RhdGljQ2xhc3M6IFwiY29sIG1iLTYgbWQ6dy0xLzIgeGw6dy0xLzRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHJvdW5kZWQtdCBzaGFkb3dcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogdGhlbWUucHJldmlldywgYWx0OiB0aGVtZS5uYW1lIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC1ib2xkIHRleHQteGwgbWItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0aGVtZS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JheS04MDAgdGV4dC1iYXNlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRoZW1lLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBib3JkZXItdC0yIGJvcmRlci1ncmF5LTIwMCBwdC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICF0aGVtZS5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctZnVsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0QXNBY3RpdmUodGhlbWUubmFtZXNwYWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2V0IGFzIGFjdGl2ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDdXJyZW50bHkgQWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJ0aGVtZXMuc2V0dGluZ3NcIiB9IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicC1tb2RhbFwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImNvbmZpcm1fbW9kYWxcIixcbiAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImNvbmZpcm1cIiwgdGl0bGU6IFwiQ29uZmlybSBvdmVycmlkZVwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY29uZmlybU1vZGFsLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uY29uZmlybU1vZGFsID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb25maXJtTW9kYWxcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG92ZXJyaWRlIHRoaXMgdGhlbWU/IFRoZSBleGlzdGluZyB0aGVtZSB3aWxsIGJlIGRpc2NhcmRlZC5cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICB7IHNsb3Q6IFwiZm9vdGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc3VibWl0VXBsb2FkIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJZZXMsIHBsZWFzZSFcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNhbmNlbFVwbG9hZCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTGVhdmUgYW5kIERpc2NhcmQgQ2hhbmdlc1wiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGhlbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhMjM5Y2UwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RoZW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGhlbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiYTIzOWNlMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiYTIzOWNlMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiYTIzOWNlMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGhlbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhMjM5Y2UwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JhMjM5Y2UwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvVGhlbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGVtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGhlbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RoZW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYTIzOWNlMCZcIiJdLCJzb3VyY2VSb290IjoiIn0=