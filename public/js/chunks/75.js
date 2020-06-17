(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Addons.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Addons.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: 'Addons'
      };
    }
  },
  data: function data() {
    return {
      endpoint: '/datatable/addons'
    };
  },
  methods: {
    upload: function upload(files) {
      var _this = this;

      if (typeof files == 'undefined') {
        return;
      }

      var formData = new FormData();
      formData.append('_method', 'POST');
      formData.append('file-upload', files);
      axios.post('/api/addons/upload', formData).then(function (response) {
        bus().$emit('toggle-modal-upload-addon');

        _this.$refs.upload.remove();

        _this.refresh('Addon successfully uploaded.');
      })["catch"](function (error) {
        return _this.refresh(error.response.data.message, 'danger');
      });
    } // enable(slug) {
    //     axios.post(`/api/modules/${slug}/enable`)
    //         .then((response) => {
    //             this.refresh('Module successfully enabled.')
    //             if (response.data.data.redirect.enable) {
    //                 this.$router.push(response.data.data.redirect.enable)
    //             }
    //         })
    //         .catch((error) => this.refresh(error.response.data.message, 'danger'))
    // },
    // disable(slug) {
    //     axios.post(`/api/modules/${slug}/disable`)
    //         .then((response) => this.refresh('Module successfully disabled.'))
    //         .catch((error)   => this.refresh(error.response.data.message, 'danger'))
    // },
    // install (slug) {
    //     axios.post(`/api/modules/${slug}/install`)
    //         .then((response) => {
    //             this.refresh('Module successfully installed.')
    //             if (response.data.data.redirect.install) {
    //                 location.href = `/${config.path}/${response.data.data.redirect.install}`
    //             }
    //         })
    //         .catch((error)   => this.refresh(error.response.data.message, 'danger'))
    // },
    // uninstall(slug) {
    //     axios.post(`/api/modules/${slug}/uninstall`)
    //         .then((response) => this.refresh('Module successfully removed.'))
    //         .catch((error)   => this.refresh(error.response.data.message, 'danger'))
    // },
    // update(slug) {
    //     axios.patch(`/api/modules/${slug}/update`)
    //         .then((response) => this.refresh('Module successfully updated.'))
    //         .catch((error)   => this.refresh(error.response.data.message, 'danger'))
    // },
    // seed(slug) {
    //     axios.patch(`/api/modules/${slug}/seed`)
    //         .then((response) => this.refresh('Module successfully seeded.'))
    //         .catch((error)   => this.refresh(error.response.data.message, 'danger'))
    // },
    // refresh(msg = null, status = 'success') {
    //     if (msg) toast(msg, status)
    //     this.$store.dispatch('navigation/fetchAdminNavigation')
    //     bus().$emit('refresh-datatable-modules')
    // }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Addons.vue?vue&type=template&id=5d45677c&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Addons.vue?vue&type=template&id=5d45677c& ***!
  \****************************************************************************************************************************************************************************************************/
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
        [_c("app-title", { attrs: { icon: "box-open" } }, [_vm._v("Addons")])],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _c(
            "p-button",
            {
              directives: [
                {
                  name: "modal",
                  rawName: "v-modal:upload-addon",
                  arg: "upload-addon"
                }
              ],
              staticClass: "button"
            },
            [_vm._v("Upload Addon")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "content-container" },
          [
            _c("p-table", {
              key: "addons_table",
              attrs: {
                endpoint: _vm.endpoint,
                id: "addons",
                "sort-by": "name",
                "primary-key": "handle"
              },
              scopedSlots: _vm._u([
                {
                  key: "name",
                  fn: function(table) {
                    return [
                      _c(
                        "div",
                        { staticClass: "flex items-center" },
                        [
                          _c("p-status", {
                            staticClass: "mr-2",
                            attrs: { value: table.record.enabled }
                          }),
                          _vm._v(
                            "\n\n                        " +
                              _vm._s(table.record.name) +
                              "\n                    "
                          )
                        ],
                        1
                      )
                    ]
                  }
                },
                {
                  key: "version",
                  fn: function(table) {
                    return [
                      _c("span", { staticClass: "badge" }, [
                        _vm._v(_vm._s(table.record.version))
                      ])
                    ]
                  }
                },
                {
                  key: "description",
                  fn: function(table) {
                    return [
                      _c("span", { staticClass: "text-gray-800 text-sm" }, [
                        _vm._v(_vm._s(table.record.description))
                      ])
                    ]
                  }
                },
                {
                  key: "actions",
                  fn: function(table) {
                    return undefined
                  }
                }
              ])
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c(
            "p-modal",
            {
              key: "upload_addon",
              attrs: { name: "upload-addon", title: "Upload Addon" }
            },
            [
              _c("p-upload", {
                ref: "upload",
                attrs: { name: "file-upload", accept: "zip", multiple: false },
                on: { input: _vm.upload }
              })
            ],
            1
          )
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

/***/ "./resources/js/pages/Addons.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Addons.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Addons_vue_vue_type_template_id_5d45677c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Addons.vue?vue&type=template&id=5d45677c& */ "./resources/js/pages/Addons.vue?vue&type=template&id=5d45677c&");
/* harmony import */ var _Addons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Addons.vue?vue&type=script&lang=js& */ "./resources/js/pages/Addons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Addons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Addons_vue_vue_type_template_id_5d45677c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Addons_vue_vue_type_template_id_5d45677c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Addons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Addons.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Addons.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Addons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Addons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Addons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Addons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Addons.vue?vue&type=template&id=5d45677c&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Addons.vue?vue&type=template&id=5d45677c& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Addons_vue_vue_type_template_id_5d45677c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Addons.vue?vue&type=template&id=5d45677c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Addons.vue?vue&type=template&id=5d45677c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Addons_vue_vue_type_template_id_5d45677c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Addons_vue_vue_type_template_id_5d45677c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0FkZG9ucy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0FkZG9ucy52dWU/NWQ3YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQWRkb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQWRkb25zLnZ1ZT9hYjM4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9BZGRvbnMudnVlPzU4ZjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2R0E7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FiQTtBQWVBO0FBQ0EsVUFEQSxrQkFDQSxLQURBLEVBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBRUEsaURBQ0EsSUFEQSxDQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQSxPQUxBLFdBTUE7QUFBQTtBQUFBLE9BTkE7QUFPQSxLQWxCQSxDQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBekVBO0FBZkEsRzs7Ozs7Ozs7Ozs7O0FDN0dBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxjQUFjLEVBQUU7QUFDbEMsMEJBQTBCLFNBQVMsbUJBQW1CLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxnQkFBZ0IsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1QkFBdUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsdUNBQXVDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGVBQWUsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQXNEO0FBQzlFLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JJQTtBQUFBO0FBQUE7QUFBQTtBQUFxRjtBQUMzQjtBQUNMOzs7QUFHckQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBc0wsQ0FBZ0Isa1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBMU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy83NS5qcz9pZD02NDNmMzkzMmQzNmM1NjZjYWQ2MiIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxhcHAtdGl0bGUgaWNvbj1cImJveC1vcGVuXCI+QWRkb25zPC9hcHAtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDp1cGxvYWQtYWRkb24gY2xhc3M9XCJidXR0b25cIj5VcGxvYWQgQWRkb248L3AtYnV0dG9uPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cC10YWJsZSA6ZW5kcG9pbnQ9XCJlbmRwb2ludFwiIGlkPVwiYWRkb25zXCIgc29ydC1ieT1cIm5hbWVcIiBwcmltYXJ5LWtleT1cImhhbmRsZVwiIGtleT1cImFkZG9uc190YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5hbWVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJ0YWJsZS5yZWNvcmQuZW5hYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zdGF0dXM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0YWJsZS5yZWNvcmQubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ2ZXJzaW9uXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCI+e3sgdGFibGUucmVjb3JkLnZlcnNpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJkZXNjcmlwdGlvblwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyYXktODAwIHRleHQtc21cIj57eyB0YWJsZS5yZWNvcmQuZGVzY3JpcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJhY3Rpb25zXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxwLWFjdGlvbnMgdi1pZj1cInRhYmxlLnJlY29yZC5yZWdpc3RlcmVkXCIgOmlkPVwiJ21vZHVsZV8nICsgdGFibGUucmVjb3JkLmlkICsgJ19hY3Rpb25zJ1wiIDprZXk9XCInbW9kdWxlXycgKyB0YWJsZS5yZWNvcmQuaWQgKyAnX2FjdGlvbnMnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ0YWJsZS5yZWNvcmQuaW5zdGFsbGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWxpbmsgdi1pZj1cInRhYmxlLnJlY29yZC5lbmFibGVkXCIgQGNsaWNrPVwiZGlzYWJsZSh0YWJsZS5yZWNvcmQuc2x1ZylcIj5EaXNhYmxlPC9wLWRyb3Bkb3duLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWxpbmsgdi1lbHNlIEBjbGljaz1cImVuYWJsZSh0YWJsZS5yZWNvcmQuc2x1ZylcIj5FbmFibGU8L3AtZHJvcGRvd24tbGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1kcm9wZG93bi1saW5rIHYtaWY9XCJ0YWJsZS5yZWNvcmQuZW5hYmxlZFwiIDp0bz1cInsgbmFtZTogJ3NldHRpbmcuc2VjdGlvbicsIHBhcmFtczogeyBzZWN0aW9uOiB0YWJsZS5yZWNvcmQuc2x1ZyB9IH1cIj5TZXR0aW5nczwvcC1kcm9wZG93bi1saW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWxpbmsgdi1pZj1cInRhYmxlLnJlY29yZC5lbmFibGVkXCIgQGNsaWNrPVwic2VlZCh0YWJsZS5yZWNvcmQuc2x1ZylcIj5TZWVkPC9wLWRyb3Bkb3duLWxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24tbGluayB2LWlmPVwidGFibGUucmVjb3JkLmVuYWJsZWRcIiBAY2xpY2sucHJldmVudCB2LW1vZGFsOnVwZGF0ZS1tb2R1bGU9XCJ0YWJsZS5yZWNvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtZHJvcGRvd24tbGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1kcm9wZG93bi1saW5rIEBjbGljay5wcmV2ZW50IHYtbW9kYWw6dW5pbnN0YWxsLW1vZHVsZT1cInRhYmxlLnJlY29yZFwiIGNsYXNzZXM9XCJsaW5rLS1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuaW5zdGFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtZHJvcGRvd24tbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24tbGluayBAY2xpY2sucHJldmVudCB2LW1vZGFsOmluc3RhbGwtbW9kdWxlPVwidGFibGUucmVjb3JkXCIgY2xhc3Nlcz1cImxpbmstLXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluc3RhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWRyb3Bkb3duLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWxpbmsgQGNsaWNrLnByZXZlbnQgdi1tb2RhbDp1bmluc3RhbGwtbW9kdWxlPVwidGFibGUucmVjb3JkXCIgY2xhc3Nlcz1cImxpbmstLWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1kcm9wZG93bi1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtYWN0aW9ucz4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9wLXRhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDwhLS0gPHAtbW9kYWwgbmFtZT1cInVuaW5zdGFsbC1tb2R1bGVcIiB0aXRsZT1cIlVuaW5zdGFsbCBNb2R1bGVcIiBrZXk9XCJ1bmluc3RhbGxfbW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgPHA+QWxsIGFzc2V0cyBhbmQgZGF0YSB3aWxsIGJlIHJlbW92ZWQuPC9wPlxuICAgICAgICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byB1bmluc3RhbGwgdGhpcyBtb2R1bGU/PC9wPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIiBzbG90LXNjb3BlPVwibW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOnVuaW5zdGFsbC1tb2R1bGUgQGNsaWNrPVwidW5pbnN0YWxsKG1vZHVsZS5kYXRhLnNsdWcpXCIgdGhlbWU9XCJkYW5nZXJcIiBjbGFzcz1cIm1sLTNcIj5Vbmluc3RhbGw8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDp1bmluc3RhbGwtbW9kdWxlPkNhbmNlbDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcC1tb2RhbD5cblxuICAgICAgICAgICAgPHAtbW9kYWwgbmFtZT1cImluc3RhbGwtbW9kdWxlXCIgdGl0bGU9XCJJbnN0YWxsIE1vZHVsZVwiIGtleT1cImluc3RhbGxfbW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGluc3RhbGwgdGhpcyBtb2R1bGU/PC9wPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIiBzbG90LXNjb3BlPVwibW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOmluc3RhbGwtbW9kdWxlIEBjbGljaz1cImluc3RhbGwobW9kdWxlLmRhdGEuc2x1ZylcIiB0aGVtZT1cInN1Y2Nlc3NcIiBjbGFzcz1cIm1sLTNcIj5JbnN0YWxsPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6aW5zdGFsbC1tb2R1bGU+Q2FuY2VsPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wLW1vZGFsPlxuXG4gICAgICAgICAgICA8cC1tb2RhbCBuYW1lPVwidXBkYXRlLW1vZHVsZVwiIHRpdGxlPVwiVXBkYXRlIE1vZHVsZVwiIGtleT1cInVwZGF0ZV9tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIHdpbGwgbWlncmF0ZSBhbnkgbmV3IG1pZ3JhdGlvbnMgYW5kIHJ1biBkYjpzZWVkLjwvcD5cbiAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcHJvY2VlZD88L3A+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImZvb3RlclwiIHNsb3Qtc2NvcGU9XCJtb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6dXBkYXRlLW1vZHVsZSBAY2xpY2s9XCJ1cGRhdGUobW9kdWxlLmRhdGEuc2x1ZylcIiB0aGVtZT1cIndhcm5pbmdcIiBjbGFzcz1cIm1sLTNcIj5VcGRhdGU8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDp1cGRhdGUtbW9kdWxlPkNhbmNlbDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcC1tb2RhbD4gLS0+XG5cbiAgICAgICAgICAgIDxwLW1vZGFsIG5hbWU9XCJ1cGxvYWQtYWRkb25cIiB0aXRsZT1cIlVwbG9hZCBBZGRvblwiIGtleT1cInVwbG9hZF9hZGRvblwiPlxuICAgICAgICAgICAgICAgIDxwLXVwbG9hZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZS11cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJ1cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJ6aXBcIlxuICAgICAgICAgICAgICAgICAgICA6bXVsdGlwbGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwbG9hZFwiXG4gICAgICAgICAgICAgICAgPjwvcC11cGxvYWQ+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiAnQWRkb25zJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogJy9kYXRhdGFibGUvYWRkb25zJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB1cGxvYWQoZmlsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpbGVzID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ19tZXRob2QnLCAnUE9TVCcpXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlLXVwbG9hZCcsIGZpbGVzKVxuXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9hZGRvbnMvdXBsb2FkJywgZm9ybURhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVzKCkuJGVtaXQoJ3RvZ2dsZS1tb2RhbC11cGxvYWQtYWRkb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgnQWRkb24gc3VjY2Vzc2Z1bGx5IHVwbG9hZGVkLicpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHRoaXMucmVmcmVzaChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdkYW5nZXInKSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIGVuYWJsZShzbHVnKSB7XG4gICAgICAgICAgICAvLyAgICAgYXhpb3MucG9zdChgL2FwaS9tb2R1bGVzLyR7c2x1Z30vZW5hYmxlYClcbiAgICAgICAgICAgIC8vICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnJlZnJlc2goJ01vZHVsZSBzdWNjZXNzZnVsbHkgZW5hYmxlZC4nKVxuXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5kYXRhLnJlZGlyZWN0LmVuYWJsZSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHJlc3BvbnNlLmRhdGEuZGF0YS5yZWRpcmVjdC5lbmFibGUpXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHRoaXMucmVmcmVzaChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdkYW5nZXInKSlcbiAgICAgICAgICAgIC8vIH0sXG5cbiAgICAgICAgICAgIC8vIGRpc2FibGUoc2x1Zykge1xuICAgICAgICAgICAgLy8gICAgIGF4aW9zLnBvc3QoYC9hcGkvbW9kdWxlcy8ke3NsdWd9L2Rpc2FibGVgKVxuICAgICAgICAgICAgLy8gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHRoaXMucmVmcmVzaCgnTW9kdWxlIHN1Y2Nlc3NmdWxseSBkaXNhYmxlZC4nKSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLmNhdGNoKChlcnJvcikgICA9PiB0aGlzLnJlZnJlc2goZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZGFuZ2VyJykpXG4gICAgICAgICAgICAvLyB9LFxuXG4gICAgICAgICAgICAvLyBpbnN0YWxsIChzbHVnKSB7XG4gICAgICAgICAgICAvLyAgICAgYXhpb3MucG9zdChgL2FwaS9tb2R1bGVzLyR7c2x1Z30vaW5zdGFsbGApXG4gICAgICAgICAgICAvLyAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCdNb2R1bGUgc3VjY2Vzc2Z1bGx5IGluc3RhbGxlZC4nKVxuXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5kYXRhLnJlZGlyZWN0Lmluc3RhbGwpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gYC8ke2NvbmZpZy5wYXRofS8ke3Jlc3BvbnNlLmRhdGEuZGF0YS5yZWRpcmVjdC5pbnN0YWxsfWBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLmNhdGNoKChlcnJvcikgICA9PiB0aGlzLnJlZnJlc2goZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZGFuZ2VyJykpXG4gICAgICAgICAgICAvLyB9LFxuXG4gICAgICAgICAgICAvLyB1bmluc3RhbGwoc2x1Zykge1xuICAgICAgICAgICAgLy8gICAgIGF4aW9zLnBvc3QoYC9hcGkvbW9kdWxlcy8ke3NsdWd9L3VuaW5zdGFsbGApXG4gICAgICAgICAgICAvLyAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gdGhpcy5yZWZyZXNoKCdNb2R1bGUgc3VjY2Vzc2Z1bGx5IHJlbW92ZWQuJykpXG4gICAgICAgICAgICAvLyAgICAgICAgIC5jYXRjaCgoZXJyb3IpICAgPT4gdGhpcy5yZWZyZXNoKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2RhbmdlcicpKVxuICAgICAgICAgICAgLy8gfSxcblxuICAgICAgICAgICAgLy8gdXBkYXRlKHNsdWcpIHtcbiAgICAgICAgICAgIC8vICAgICBheGlvcy5wYXRjaChgL2FwaS9tb2R1bGVzLyR7c2x1Z30vdXBkYXRlYClcbiAgICAgICAgICAgIC8vICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB0aGlzLnJlZnJlc2goJ01vZHVsZSBzdWNjZXNzZnVsbHkgdXBkYXRlZC4nKSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLmNhdGNoKChlcnJvcikgICA9PiB0aGlzLnJlZnJlc2goZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZGFuZ2VyJykpXG4gICAgICAgICAgICAvLyB9LFxuXG4gICAgICAgICAgICAvLyBzZWVkKHNsdWcpIHtcbiAgICAgICAgICAgIC8vICAgICBheGlvcy5wYXRjaChgL2FwaS9tb2R1bGVzLyR7c2x1Z30vc2VlZGApXG4gICAgICAgICAgICAvLyAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gdGhpcy5yZWZyZXNoKCdNb2R1bGUgc3VjY2Vzc2Z1bGx5IHNlZWRlZC4nKSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLmNhdGNoKChlcnJvcikgICA9PiB0aGlzLnJlZnJlc2goZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZGFuZ2VyJykpXG4gICAgICAgICAgICAvLyB9LFxuXG4gICAgICAgICAgICAvLyByZWZyZXNoKG1zZyA9IG51bGwsIHN0YXR1cyA9ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgLy8gICAgIGlmIChtc2cpIHRvYXN0KG1zZywgc3RhdHVzKVxuXG4gICAgICAgICAgICAvLyAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ25hdmlnYXRpb24vZmV0Y2hBZG1pbk5hdmlnYXRpb24nKVxuICAgICAgICAgICAgLy8gICAgIGJ1cygpLiRlbWl0KCdyZWZyZXNoLWRhdGF0YWJsZS1tb2R1bGVzJylcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImJveC1vcGVuXCIgfSB9LCBbX3ZtLl92KFwiQWRkb25zXCIpXSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDp1cGxvYWQtYWRkb25cIixcbiAgICAgICAgICAgICAgICAgIGFyZzogXCJ1cGxvYWQtYWRkb25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiVXBsb2FkIEFkZG9uXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInAtdGFibGVcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwiYWRkb25zX3RhYmxlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6IF92bS5lbmRwb2ludCxcbiAgICAgICAgICAgICAgICBpZDogXCJhZGRvbnNcIixcbiAgICAgICAgICAgICAgICBcInNvcnQtYnlcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgXCJwcmltYXJ5LWtleVwiOiBcImhhbmRsZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLXN0YXR1c1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiB0YWJsZS5yZWNvcmQuZW5hYmxlZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGFibGUucmVjb3JkLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcInZlcnNpb25cIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0YWJsZS5yZWNvcmQudmVyc2lvbikpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyYXktODAwIHRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwibW9kYWxzXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcInVwbG9hZF9hZGRvblwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInVwbG9hZC1hZGRvblwiLCB0aXRsZTogXCJVcGxvYWQgQWRkb25cIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInAtdXBsb2FkXCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwidXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJmaWxlLXVwbG9hZFwiLCBhY2NlcHQ6IFwiemlwXCIsIG11bHRpcGxlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGlucHV0OiBfdm0udXBsb2FkIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZG9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWQ0NTY3N2MmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRkb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWRkb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWQ0NTY3N2MnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWQ0NTY3N2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWQ0NTY3N2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZG9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWQ0NTY3N2MmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWQ0NTY3N2MnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9BZGRvbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZDQ1Njc3YyZcIiJdLCJzb3VyY2VSb290IjoiIn0=