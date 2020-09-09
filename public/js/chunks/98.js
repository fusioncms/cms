(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Settings/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Settings/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        inner: 'Settings'
      };
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    sections: 'settings/getGroupSections'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Settings/Index.vue?vue&type=template&id=fce5dae2&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Settings/Index.vue?vue&type=template&id=fce5dae2& ***!
  \************************************************************************************************************************************************************************************************************/
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
          _c("page-title", { attrs: { icon: "sliders-h" } }, [
            _vm._v("Settings")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.sections, function(groups, section) {
        return _c(
          "div",
          { key: section, staticClass: "row flex-1 flex-wrap" },
          [
            _c("div", { staticClass: "col mb-2 w-full" }, [
              _c("span", { staticClass: "font-semibold" }, [
                _vm._v(_vm._s(section))
              ])
            ]),
            _vm._v(" "),
            _vm._l(groups, function(group) {
              return _c(
                "div",
                {
                  key: group.handle,
                  staticClass: "col mb-6 w-full md:w-1/3 xl:w-1/4 xxl:w-1/5"
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "no-underline text-black hover:text-black bg-white rounded shadow hover:shadow-md p-3 flex h-full items-center",
                      attrs: {
                        to: {
                          name: "setting.group",
                          params: { group: group.handle }
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass:
                            "fa-layers fa-fw fa-3x mr-2 flex-shrink-0"
                        },
                        [
                          _c("fa-icon", {
                            staticClass: "fa-fw text-primary-500",
                            attrs: { icon: ["fas", "circle"] }
                          }),
                          _vm._v(" "),
                          _c("fa-icon", {
                            staticClass: "fa-fw fa-inverse",
                            attrs: {
                              icon: ["fas", group.icon || "cog"],
                              transform: "shrink-8"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-col" }, [
                        _c("span", { staticClass: "font-semibold text-lg" }, [
                          _vm._v(_vm._s(group.name))
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-xs text-gray-800" }, [
                          _vm._v(_vm._s(group.description))
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            })
          ],
          2
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Settings/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/Settings/Index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_fce5dae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=fce5dae2& */ "./resources/js/pages/Settings/Index.vue?vue&type=template&id=fce5dae2&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Settings/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_fce5dae2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_fce5dae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Settings/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Settings/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Settings/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Settings/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Settings/Index.vue?vue&type=template&id=fce5dae2&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Settings/Index.vue?vue&type=template&id=fce5dae2& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_fce5dae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=fce5dae2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Settings/Index.vue?vue&type=template&id=fce5dae2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_fce5dae2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_fce5dae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1NldHRpbmdzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvU2V0dGluZ3MvSW5kZXgudnVlP2NlY2EiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1NldHRpbmdzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvU2V0dGluZ3MvSW5kZXgudnVlP2Q1NDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1NldHRpbmdzL0luZGV4LnZ1ZT9lYmQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7QUFFQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLDhCQUNBO0FBQ0E7QUFEQSxJQURBO0FBVEEsRzs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxjQUFjLEVBQUU7QUFDbEM7QUFDQSw0QkFBNEIsU0FBUyxvQkFBb0IsRUFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9EQUFvRDtBQUMvRDtBQUNBLHVCQUF1QixpQ0FBaUM7QUFDeEQsMEJBQTBCLCtCQUErQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywrQkFBK0I7QUFDaEUsb0NBQW9DLHVDQUF1QztBQUMzRTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUNBQXVDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvOTguanM/aWQ9OGMzZWM5YTBkOWNlNDhmMmZmYTciLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8cGFnZS10aXRsZSBpY29uPVwic2xpZGVycy1oXCI+U2V0dGluZ3M8L3BhZ2UtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZmxleC0xIGZsZXgtd3JhcFwiIHYtZm9yPVwiKGdyb3Vwcywgc2VjdGlvbikgaW4gc2VjdGlvbnNcIiA6a2V5PVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtYi0yIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1zZW1pYm9sZFwiPnt7IHNlY3Rpb24gfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtYi02IHctZnVsbCBtZDp3LTEvMyB4bDp3LTEvNCB4eGw6dy0xLzVcIiB2LWZvcj1cImdyb3VwIGluIGdyb3Vwc1wiIDprZXk9XCJncm91cC5oYW5kbGVcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnc2V0dGluZy5ncm91cCcsIHBhcmFtczogeyBncm91cDogZ3JvdXAuaGFuZGxlIH0gfVwiIGNsYXNzPVwibm8tdW5kZXJsaW5lIHRleHQtYmxhY2sgaG92ZXI6dGV4dC1ibGFjayBiZy13aGl0ZSByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbWQgcC0zIGZsZXggaC1mdWxsIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhLWxheWVycyBmYS1mdyBmYS0zeCBtci0yIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2lyY2xlJ11cIiBjbGFzcz1cImZhLWZ3IHRleHQtcHJpbWFyeS01MDBcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgKGdyb3VwLmljb24gfHwgJ2NvZycpXVwiIGNsYXNzPVwiZmEtZncgZmEtaW52ZXJzZVwiIHRyYW5zZm9ybT1cInNocmluay04XCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnXCI+e3sgZ3JvdXAubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14cyB0ZXh0LWdyYXktODAwXCI+e3sgZ3JvdXAuZGVzY3JpcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogJ1NldHRpbmdzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnM6ICdzZXR0aW5ncy9nZXRHcm91cFNlY3Rpb25zJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicGFnZS10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwic2xpZGVycy1oXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJTZXR0aW5nc1wiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5zZWN0aW9ucywgZnVuY3Rpb24oZ3JvdXBzLCBzZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsga2V5OiBzZWN0aW9uLCBzdGF0aWNDbGFzczogXCJyb3cgZmxleC0xIGZsZXgtd3JhcFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgbWItMiB3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtc2VtaWJvbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzZWN0aW9uKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbChncm91cHMsIGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogZ3JvdXAuaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sIG1iLTYgdy1mdWxsIG1kOnctMS8zIHhsOnctMS80IHh4bDp3LTEvNVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vLXVuZGVybGluZSB0ZXh0LWJsYWNrIGhvdmVyOnRleHQtYmxhY2sgYmctd2hpdGUgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LW1kIHAtMyBmbGV4IGgtZnVsbCBpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzZXR0aW5nLmdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBncm91cDogZ3JvdXAuaGFuZGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhLWxheWVycyBmYS1mdyBmYS0zeCBtci0yIGZsZXgtc2hyaW5rLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyB0ZXh0LXByaW1hcnktNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2lyY2xlXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgZmEtaW52ZXJzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBbXCJmYXNcIiwgZ3JvdXAuaWNvbiB8fCBcImNvZ1wiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzaHJpbmstOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGdyb3VwLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cyB0ZXh0LWdyYXktODAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGdyb3VwLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmNlNWRhZTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2ZjZTVkYWUyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ZjZTVkYWUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ZjZTVkYWUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmNlNWRhZTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZmNlNWRhZTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9TZXR0aW5ncy9JbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZjZTVkYWUyJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==