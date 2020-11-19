(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_pages_Theme_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Theme.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Theme.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/pages/Theme.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Theme.vue ***!
  \**************************************/
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
/* harmony import */ var _Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Theme.vue?vue&type=template&id=ba239ce0& */ "./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0&");
/* harmony import */ var _Theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Theme.vue?vue&type=script&lang=js& */ "./resources/js/pages/Theme.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Theme.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Theme.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Theme.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Theme.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Theme.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0& ***!
  \*********************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Theme.vue?vue&type=template&id=ba239ce0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0& ***!
  \************************************************************************************************************************************************************************************************************/
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
            _c("ui-upload", {
              ref: "upload",
              attrs: {
                name: "file-upload",
                label: "Upload",
                accept: "zip",
                multiple: false
              },
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
                            "ui-button",
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
            { staticClass: "button", attrs: { to: { name: "dashboard" } } },
            [_vm._v("Go Back")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "ui-modal",
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
                "ui-button",
                {
                  attrs: { type: "button", variant: "primary" },
                  on: { click: _vm.submitUpload }
                },
                [_vm._v("Yes, please!")]
              ),
              _vm._v(" "),
              _c(
                "ui-button",
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvVGhlbWUudnVlIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9wYWdlcy9UaGVtZS52dWU/Y2YwMiIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvVGhlbWUudnVlP2E3OTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLHlCQUZBO0FBR0E7QUFIQTtBQUtBLEdBZkE7QUFpQkE7QUFDQSxlQURBLHVCQUNBLGNBREEsRUFDQTtBQUFBOztBQUNBLFlBQ0EsS0FEQSxzQkFDQSxjQURBLEdBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7O0FBSUE7QUFDQSxPQVJBO0FBU0EsS0FYQTtBQWFBLFdBYkEscUJBYUE7QUFDQSxpQkFDQSx3QkFEQSxHQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsQ0FJQSxJQUpBLENBSUEsSUFKQSxFQUZBO0FBT0EsS0FyQkE7QUF1QkEsZ0JBdkJBLDBCQXVCQTtBQUFBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNBLE9BTkE7QUFPQSxLQS9CQTtBQWlDQSxpQkFqQ0EsMkJBaUNBO0FBQ0E7QUFDQSxLQW5DQTtBQXFDQSxnQkFyQ0EsMEJBcUNBO0FBQ0E7QUFDQTtBQUNBLEtBeENBO0FBMENBLGdCQTFDQSx3QkEwQ0EsS0ExQ0EsRUEwQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsT0FIQSxDQUtBOzs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsT0FGQSxXQUVBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQSxPQVhBO0FBWUE7QUFoRUEsR0FqQkE7QUFvRkEsa0JBcEZBLDRCQW9GQSxFQXBGQSxFQW9GQSxJQXBGQSxFQW9GQSxJQXBGQSxFQW9GQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUF4RkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ0EsQ0FBNkY7QUFDN0YsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsd0VBQU07QUFDUixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxzRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2dNLENBQUMsaUVBQWUsdU1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW5PO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxjQUFjLEVBQUU7QUFDbEMsMkJBQTJCLFNBQVMsa0JBQWtCLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxQkFBcUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsYUFBYSw2REFBNkQ7QUFDMUU7QUFDQSx5QkFBeUIsc0JBQXNCO0FBQy9DO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RCw2QkFBNkIsd0NBQXdDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5Q0FBeUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3REFBd0Q7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsbUNBQW1DLDZCQUE2QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxnQkFBZ0IsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxhQUFhLGdDQUFnQyxNQUFNLG9CQUFvQixFQUFFLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQTZDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUNBQXFDO0FBQy9ELHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUJBQWlCO0FBQzNDLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9yZXNvdXJjZXNfanNfcGFnZXNfVGhlbWVfdnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPHBhZ2UtdGl0bGUgaWNvbj1cInBhbGV0dGVcIj5UaGVtZTwvcGFnZS10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHVpLXVwbG9hZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZS11cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVwbG9hZFwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cInVwbG9hZFwiXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cInppcFwiXG4gICAgICAgICAgICAgICAgICAgIDptdWx0aXBsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidmVyaWZ5VXBsb2FkXCJcbiAgICAgICAgICAgICAgICA+PC91aS11cGxvYWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtYi02IG1kOnctMS8yIHhsOnctMS80XCIgdi1mb3I9XCJ0aGVtZSBpbiB0aGVtZXNcIiA6a2V5PVwidGhlbWUubmFtZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3LWZ1bGwgcm91bmRlZC10IHNoYWRvd1wiIDpzcmM9XCJ0aGVtZS5wcmV2aWV3XCIgOmFsdD1cInRoZW1lLm5hbWVcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTJcIj57eyB0aGVtZS5uYW1lIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS04MDAgdGV4dC1iYXNlXCI+e3sgdGhlbWUuZGVzY3JpcHRpb24gfX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgYm9yZGVyLXQtMiBib3JkZXItZ3JheS0yMDAgcHQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1aS1idXR0b24gY2xhc3M9XCJ3LWZ1bGxcIiB2LWlmPVwiISB0aGVtZS5hY3RpdmVcIiBAY2xpY2s9XCJzZXRBc0FjdGl2ZSh0aGVtZS5uYW1lc3BhY2UpXCI+U2V0IGFzIGFjdGl2ZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIiB2LWVsc2U+Q3VycmVudGx5IEFjdGl2ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ2Rhc2hib2FyZCcgfVwiIGNsYXNzPVwiYnV0dG9uXCI+R28gQmFjazwvcm91dGVyLWxpbms+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDx1aS1tb2RhbCBuYW1lPVwiY29uZmlybVwiIHRpdGxlPVwiQ29uZmlybSBvdmVycmlkZVwiIGtleT1cImNvbmZpcm1fbW9kYWxcIiB2LW1vZGVsPVwiY29uZmlybU1vZGFsXCI+XG4gICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gb3ZlcnJpZGUgdGhpcyB0aGVtZT8gVGhlIGV4aXN0aW5nIHRoZW1lIHdpbGwgYmUgZGlzY2FyZGVkLjwvcD5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiBAY2xpY2s9XCJzdWJtaXRVcGxvYWRcIiB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInByaW1hcnlcIj5ZZXMsIHBsZWFzZSE8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIEBjbGljaz1cImNhbmNlbFVwbG9hZFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1yLTNcIj5MZWF2ZSBhbmQgRGlzY2FyZCBDaGFuZ2VzPC91aS1idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3VpLW1vZGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBoZWFkOiB7XG4gICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbm5lcjogJ1RoZW1lJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aGVtZXM6IFtdLFxuICAgICAgICAgICAgY29uZmlybU1vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIHVwbG9hZEZvcm06IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldEFzQWN0aXZlKHRoZW1lTmFtZXNwYWNlKSB7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5wYXRjaChgL2FwaS90aGVtZS8ke3RoZW1lTmFtZXNwYWNlfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfLmVhY2godGhpcy50aGVtZXMsICh0aGVtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUuYWN0aXZlID0gdGhlbWUubmFtZXNwYWNlID09PSB0aGVtZU5hbWVzcGFjZVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdBY3RpdmUgdGhlbWUgaGFzIGJlZW4gc2V0JywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVmcmVzaCgpIHtcbiAgICAgICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RoZW1lcycpLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKHRoZW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbWVzICAgICAgID0gdGhlbWVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkRm9ybSAgID0gbnVsbFxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybU1vZGFsID0gZmFsc2VcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSkpXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3VibWl0VXBsb2FkKCkge1xuICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS90aGVtZXMnLCB0aGlzLnVwbG9hZEZvcm0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9hc3QoJ1RoZW1lIHN1Y2Nlc3NmdWxseSB1cGxvYWRlZCEnLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Nb2RhbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBjb25maXJtVXBsb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtTW9kYWwgPSB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FuY2VsVXBsb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtTW9kYWwgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQucmVtb3ZlKClcbiAgICAgICAgfSxcblxuICAgICAgICB2ZXJpZnlVcGxvYWQoZmlsZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsZXMgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB1cGxvYWQgZm9ybS4uXG4gICAgICAgICAgICB0aGlzLnVwbG9hZEZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICAgICAgdGhpcy51cGxvYWRGb3JtLmFwcGVuZCgnX21ldGhvZCcsICdQT1NUJylcbiAgICAgICAgICAgIHRoaXMudXBsb2FkRm9ybS5hcHBlbmQoJ2ZpbGUtdXBsb2FkJywgZmlsZXMpXG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvdGhlbWVzL3ZlcmlmeScsIHRoaXMudXBsb2FkRm9ybSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFVwbG9hZCgpXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbJ2ZpbGUtdXBsb2FkJ11bMF0gPT0gJ0EgVGhlbWUgd2l0aCBtYXRjaGluZyBuYW1lIGFscmVhZHkgZXhpc3RzLicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtVXBsb2FkKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMudXBsb2FkLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMudXBsb2FkLnNldEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzWydmaWxlLXVwbG9hZCddWzBdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgbmV4dChmdW5jdGlvbih2bSkge1xuICAgICAgICAgICAgdm0ucmVmcmVzaCgpXG4gICAgICAgIH0pXG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UaGVtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmEyMzljZTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGhlbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UaGVtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JhMjM5Y2UwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JhMjM5Y2UwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JhMjM5Y2UwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UaGVtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmEyMzljZTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYmEyMzljZTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9UaGVtZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGhlbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGhlbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJwYWxldHRlXCIgfSB9LCBbX3ZtLl92KFwiVGhlbWVcIildKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1aS11cGxvYWRcIiwge1xuICAgICAgICAgICAgICByZWY6IFwidXBsb2FkXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmaWxlLXVwbG9hZFwiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlVwbG9hZFwiLFxuICAgICAgICAgICAgICAgIGFjY2VwdDogXCJ6aXBcIixcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgaW5wdXQ6IF92bS52ZXJpZnlVcGxvYWQgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS50aGVtZXMsIGZ1bmN0aW9uKHRoZW1lKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsga2V5OiB0aGVtZS5uYW1lLCBzdGF0aWNDbGFzczogXCJjb2wgbWItNiBtZDp3LTEvMiB4bDp3LTEvNFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcm91bmRlZC10IHNoYWRvd1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiB0aGVtZS5wcmV2aWV3LCBhbHQ6IHRoZW1lLm5hbWUgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRoZW1lLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmF5LTgwMCB0ZXh0LWJhc2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGhlbWUuZGVzY3JpcHRpb24pKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGJvcmRlci10LTIgYm9yZGVyLWdyYXktMjAwIHB0LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgIXRoZW1lLmFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctZnVsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0QXNBY3RpdmUodGhlbWUubmFtZXNwYWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2V0IGFzIGFjdGl2ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDdXJyZW50bHkgQWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25cIiwgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJkYXNoYm9hcmRcIiB9IH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ1aS1tb2RhbFwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImNvbmZpcm1fbW9kYWxcIixcbiAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImNvbmZpcm1cIiwgdGl0bGU6IFwiQ29uZmlybSBvdmVycmlkZVwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY29uZmlybU1vZGFsLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uY29uZmlybU1vZGFsID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb25maXJtTW9kYWxcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG92ZXJyaWRlIHRoaXMgdGhlbWU/IFRoZSBleGlzdGluZyB0aGVtZSB3aWxsIGJlIGRpc2NhcmRlZC5cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICB7IHNsb3Q6IFwiZm9vdGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCB2YXJpYW50OiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zdWJtaXRVcGxvYWQgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlllcywgcGxlYXNlIVwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNhbmNlbFVwbG9hZCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTGVhdmUgYW5kIERpc2NhcmQgQ2hhbmdlc1wiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=