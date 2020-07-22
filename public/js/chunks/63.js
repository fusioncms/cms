(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/File/Field.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/File/Field.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'file-fieldtype',
  mixins: [__webpack_require__(/*! ../../mixins/filehelper */ "./resources/js/mixins/filehelper.js")["default"]],
  data: function data() {
    return {
      files: []
    };
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": function _default() {
        return [];
      }
    }
  },
  computed: {
    multiple: function multiple() {
      return _.defaultTo(this.field.settings.multiple, false);
    },
    accept: function accept() {
      return _.defaultTo(this.field.settings.accept, '');
    },
    required: function required() {
      return String(this.field.validation).includes('required');
    }
  },
  methods: {
    onChange: function onChange(ev) {
      var fileList = ev.target.files;
      if (fileList.length == 0) this.$emit('input', this.files);else this.$emit('input', fileList);
    }
  },
  mounted: function mounted() {
    if (_.isArray(this.value)) this.files = _toConsumableArray(this.value);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/File/Field.vue?vue&type=template&id=1845b02e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/File/Field.vue?vue&type=template&id=1845b02e& ***!
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
  return _c("div", { staticClass: "field" }, [
    _c("div", { staticClass: "form__group" }, [
      _c("label", {
        staticClass: "form__label",
        attrs: { for: _vm.field.handle },
        domProps: { innerHTML: _vm._s(_vm.field.name) }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "file",
          id: _vm.field.handle,
          name: _vm.field.handle + "[]",
          accept: _vm.accept,
          multiple: _vm.multiple,
          required: _vm.required
        },
        on: { input: _vm.onChange }
      }),
      _vm._v(" "),
      _vm.field.help
        ? _c("div", { staticClass: "form__control--meta" }, [
            _c("div", { staticClass: "form__help" }, [
              _c("span", {
                staticClass: "field__help",
                domProps: { innerHTML: _vm._s(_vm.field.help) }
              })
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.files.length
        ? _c("div", { staticClass: "bg-white shadow rounded-md mt-2" }, [
            _c(
              "ul",
              _vm._l(_vm.files, function(file, index) {
                return _c("li", { key: "file." + index }, [
                  _c("div", { staticClass: "p-2 sm:px-4" }, [
                    _c(
                      "div",
                      { staticClass: "flex items-center justify-between" },
                      [
                        file.type == "image"
                          ? _c("img", {
                              staticClass: "upload__file--preview max-w-12",
                              attrs: { src: file.url, alt: file.name }
                            })
                          : _c("img", {
                              staticClass: "upload__file--preview max-w-12",
                              attrs: {
                                src:
                                  "/vendor/fusion/img/" +
                                  file.type +
                                  "-large.svg",
                                alt: file.name
                              }
                            }),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "upload__file--name",
                          domProps: { textContent: _vm._s(file.name) }
                        }),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "upload__file--size",
                          domProps: {
                            textContent: _vm._s(_vm.filesize(file.bytes))
                          }
                        })
                      ]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.files.length
        ? _c(
            "div",
            { staticClass: "rounded-md shadow bg-yellow-100 p-2 mt-2" },
            [
              _c("div", { staticClass: "flex" }, [
                _c("div", { staticClass: "flex-shrink-0" }, [
                  _c(
                    "svg",
                    {
                      staticClass: "h-5 w-5 text-yellow-400",
                      attrs: { viewBox: "0 0 20 20", fill: "currentColor" }
                    },
                    [
                      _c("path", {
                        attrs: {
                          "fill-rule": "evenodd",
                          d:
                            "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                          "clip-rule": "evenodd"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm._m(0)
              ])
            ]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "px-2" }, [
      _c("div", { staticClass: "text-sm leading-5 text-yellow-700" }, [
        _vm._v(
          "\n            \t\t\tUploading new files will clear existing files.\n            \t\t"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/fieldtypes/File/Field.vue":
/*!************************************************!*\
  !*** ./resources/js/fieldtypes/File/Field.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_1845b02e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=1845b02e& */ "./resources/js/fieldtypes/File/Field.vue?vue&type=template&id=1845b02e&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/File/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_1845b02e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_1845b02e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/File/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/File/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/fieldtypes/File/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/File/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/File/Field.vue?vue&type=template&id=1845b02e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/fieldtypes/File/Field.vue?vue&type=template&id=1845b02e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_1845b02e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=1845b02e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/File/Field.vue?vue&type=template&id=1845b02e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_1845b02e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_1845b02e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvRmlsZS9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvRmlsZS9GaWVsZC52dWU/YzA2OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9GaWxlL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9GaWxlL0ZpZWxkLnZ1ZT84ZDUzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0ZpbGUvRmllbGQudnVlP2ZjOTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBO0FBQ0Esd0JBREE7QUFHQSxXQUNBLG9HQURBLENBSEE7QUFPQSxNQVBBLGtCQU9BO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FYQTtBQWFBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQU1BO0FBQ0EscUJBREE7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQU5BLEdBYkE7QUF5QkE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBS0EsVUFMQSxvQkFLQTtBQUNBO0FBQ0EsS0FQQTtBQVNBLFlBVEEsc0JBU0E7QUFDQTtBQUNBO0FBWEEsR0F6QkE7QUF1Q0E7QUFDQSxZQURBLG9CQUNBLEVBREEsRUFDQTtBQUNBO0FBRUEsZ0NBQ0EsZ0NBREEsS0FHQTtBQUNBO0FBUkEsR0F2Q0E7QUFrREEsU0FsREEscUJBa0RBO0FBQ0EsK0JBQ0E7QUFDQTtBQXJEQSxHOzs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDLG1CQUFtQjtBQUNuQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGFBQWE7QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBLHFCQUFxQixxQ0FBcUM7QUFDMUQsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFpRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdUJBQXVCO0FBQ3hELDZCQUE2Qiw2QkFBNkI7QUFDMUQ7QUFDQTtBQUNBLHVCQUF1QixtREFBbUQ7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwREFBMEQ7QUFDdkU7QUFDQSx5QkFBeUIsc0JBQXNCO0FBQy9DLDJCQUEyQiwrQkFBK0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUMsaUJBQWlCLG1EQUFtRDtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy82My5qcz9pZD1kNzRmZDAzNDM5MzhmZGE4ZWQzNSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImZpZWxkXCI+XG5cdFx0PGRpdiBjbGFzcz1cImZvcm1fX2dyb3VwXCI+XG5cdFx0XHQ8bGFiZWxcblx0ICAgICAgICAgICAgY2xhc3M9XCJmb3JtX19sYWJlbFwiXG5cdCAgICAgICAgICAgIDpmb3I9XCJmaWVsZC5oYW5kbGVcIlxuXHQgICAgICAgICAgICB2LWh0bWw9XCJmaWVsZC5uYW1lXCI+XG5cdCAgICAgICAgPC9sYWJlbD5cblx0XHRcdFxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJmaWxlXCJcblx0XHRcdFx0OmlkPVwiZmllbGQuaGFuZGxlXCJcblx0XHRcdFx0Om5hbWU9XCJgJHtmaWVsZC5oYW5kbGV9W11gXCJcblx0XHRcdFx0OmFjY2VwdD1cImFjY2VwdFwiXG5cdFx0XHRcdDptdWx0aXBsZT1cIm11bHRpcGxlXCJcblx0XHRcdFx0OnJlcXVpcmVkPVwicmVxdWlyZWRcIlxuXHRcdFx0XHRAaW5wdXQ9XCJvbkNoYW5nZVwiXG5cdFx0XHQvPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybV9fY29udHJvbC0tbWV0YVwiIHYtaWY9XCJmaWVsZC5oZWxwXCI+XG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19oZWxwXCI+XG5cdCAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpZWxkX19oZWxwXCIgdi1odG1sPVwiZmllbGQuaGVscFwiPjwvc3Bhbj5cblx0ICAgICAgICAgICAgPC9kaXY+XG5cdCAgICAgICAgPC9kaXY+XG5cblx0ICAgICAgICA8ZGl2IHYtaWY9XCJmaWxlcy5sZW5ndGhcIiBjbGFzcz1cImJnLXdoaXRlIHNoYWRvdyByb3VuZGVkLW1kIG10LTJcIj5cblx0ICAgICAgICAgICAgPHVsPlxuXHQgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiKGZpbGUsIGluZGV4KSBpbiBmaWxlc1wiIDprZXk9XCJgZmlsZS4ke2luZGV4fWBcIj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0yIHNtOnB4LTRcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIFx0PGltZyB2LWlmPVwiZmlsZS50eXBlID09ICdpbWFnZSdcIiBjbGFzcz1cInVwbG9hZF9fZmlsZS0tcHJldmlldyBtYXgtdy0xMlwiIDpzcmM9XCJmaWxlLnVybFwiIDphbHQ9XCJmaWxlLm5hbWVcIi8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIFx0PGltZyB2LWVsc2UgY2xhc3M9XCJ1cGxvYWRfX2ZpbGUtLXByZXZpZXcgbWF4LXctMTJcIiA6c3JjPVwiYC92ZW5kb3IvZnVzaW9uL2ltZy8ke2ZpbGUudHlwZX0tbGFyZ2Uuc3ZnYFwiIDphbHQ9XCJmaWxlLm5hbWVcIi8+XG5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWRfX2ZpbGUtLW5hbWVcIiB2LXRleHQ9XCJmaWxlLm5hbWVcIiAvPlxuXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkX19maWxlLS1zaXplXCIgdi10ZXh0PVwiZmlsZXNpemUoZmlsZS5ieXRlcylcIiAvPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgIDwvdWw+XG5cdCAgICAgICAgPC9kaXY+XG5cblx0ICAgICAgICA8ZGl2IHYtaWY9XCJmaWxlcy5sZW5ndGhcIiBjbGFzcz1cInJvdW5kZWQtbWQgc2hhZG93IGJnLXllbGxvdy0xMDAgcC0yIG10LTJcIj5cblx0ICAgICAgICBcdDxkaXYgY2xhc3M9XCJmbGV4XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXgtc2hyaW5rLTBcIj5cblx0XHRcdFx0XHRcdDxzdmcgY2xhc3M9XCJoLTUgdy01IHRleHQteWVsbG93LTQwMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTguMjU3IDMuMDk5Yy43NjUtMS4zNiAyLjcyMi0xLjM2IDMuNDg2IDBsNS41OCA5LjkyYy43NSAxLjMzNC0uMjEzIDIuOTgtMS43NDIgMi45OEg0LjQyYy0xLjUzIDAtMi40OTMtMS42NDYtMS43NDMtMi45OGw1LjU4LTkuOTJ6TTExIDEzYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptLTEtOGExIDEgMCAwMC0xIDF2M2ExIDEgMCAwMDIgMFY2YTEgMSAwIDAwLTEtMXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPlxuXHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInB4LTJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXh0LXNtIGxlYWRpbmctNSB0ZXh0LXllbGxvdy03MDBcIj5cblx0ICAgICAgICAgICAgXHRcdFx0VXBsb2FkaW5nIG5ldyBmaWxlcyB3aWxsIGNsZWFyIGV4aXN0aW5nIGZpbGVzLlxuXHQgICAgICAgICAgICBcdFx0PC9kaXY+XG5cdCAgICAgICAgICAgIFx0PC9kaXY+XG5cdCAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgIDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnZmlsZS1maWVsZHR5cGUnLFxuXG5cdFx0bWl4aW5zOiBbXG5cdFx0XHRyZXF1aXJlICgnLi4vLi4vbWl4aW5zL2ZpbGVoZWxwZXInKS5kZWZhdWx0XG5cdFx0XSxcblxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRmaWxlczogW11cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cHJvcHM6IHtcblx0XHRcdGZpZWxkOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHR9LFxuXG5cdFx0XHR2YWx1ZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICAgICAgICAgIH1cblx0XHR9LFxuXG5cdFx0Y29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIG11bHRpcGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmRlZmF1bHRUbyh0aGlzLmZpZWxkLnNldHRpbmdzLm11bHRpcGxlLCBmYWxzZSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGFjY2VwdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5kZWZhdWx0VG8odGhpcy5maWVsZC5zZXR0aW5ncy5hY2NlcHQsICcnKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVxdWlyZWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLmZpZWxkLnZhbGlkYXRpb24pLmluY2x1ZGVzKCdyZXF1aXJlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICBcdG9uQ2hhbmdlKGV2KSB7XG4gICAgICAgIFx0XHRjb25zdCBmaWxlTGlzdCA9IGV2LnRhcmdldC5maWxlc1xuXG4gICAgICAgIFx0XHRpZiAoZmlsZUxpc3QubGVuZ3RoID09IDApXG4gICAgICAgIFx0XHRcdHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5maWxlcylcblx0XHRcdFx0ZWxzZVxuICAgICAgICBcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIGZpbGVMaXN0KVxuICAgICAgICBcdH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICBcdGlmIChfLmlzQXJyYXkodGhpcy52YWx1ZSkpXG4gICAgICAgIFx0XHR0aGlzLmZpbGVzID0gWy4uLnRoaXMudmFsdWVdXG4gICAgICAgIH1cblx0fVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZ3JvdXBcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIixcbiAgICAgICAgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5maWVsZC5uYW1lKSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICBpZDogX3ZtLmZpZWxkLmhhbmRsZSxcbiAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJbXVwiLFxuICAgICAgICAgIGFjY2VwdDogX3ZtLmFjY2VwdCxcbiAgICAgICAgICBtdWx0aXBsZTogX3ZtLm11bHRpcGxlLFxuICAgICAgICAgIHJlcXVpcmVkOiBfdm0ucmVxdWlyZWRcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgaW5wdXQ6IF92bS5vbkNoYW5nZSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZmllbGQuaGVscFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fY29udHJvbC0tbWV0YVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9faGVscFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWVsZF9faGVscFwiLFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5maWVsZC5oZWxwKSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmZpbGVzLmxlbmd0aFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmctd2hpdGUgc2hhZG93IHJvdW5kZWQtbWQgbXQtMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZmlsZXMsIGZ1bmN0aW9uKGZpbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBrZXk6IFwiZmlsZS5cIiArIGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicC0yIHNtOnB4LTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUudHlwZSA9PSBcImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRfX2ZpbGUtLXByZXZpZXcgbWF4LXctMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogZmlsZS51cmwsIGFsdDogZmlsZS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZF9fZmlsZS0tcHJldmlldyBtYXgtdy0xMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9mdXNpb24vaW1nL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnR5cGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLWxhcmdlLnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IGZpbGUubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkX19maWxlLS1uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoZmlsZS5uYW1lKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZF9fZmlsZS0tc2l6ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmZpbGVzaXplKGZpbGUuYnl0ZXMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmZpbGVzLmxlbmd0aFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm91bmRlZC1tZCBzaGFkb3cgYmcteWVsbG93LTEwMCBwLTIgbXQtMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtc2hyaW5rLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgtNSB3LTUgdGV4dC15ZWxsb3ctNDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmlld0JveDogXCIwIDAgMjAgMjBcIiwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxsLXJ1bGVcIjogXCJldmVub2RkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNOC4yNTcgMy4wOTljLjc2NS0xLjM2IDIuNzIyLTEuMzYgMy40ODYgMGw1LjU4IDkuOTJjLjc1IDEuMzM0LS4yMTMgMi45OC0xLjc0MiAyLjk4SDQuNDJjLTEuNTMgMC0yLjQ5My0xLjY0Ni0xLjc0My0yLjk4bDUuNTgtOS45MnpNMTEgMTNhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0tMS04YTEgMSAwIDAwLTEgMXYzYTEgMSAwIDAwMiAwVjZhMSAxIDAgMDAtMS0xelwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaXAtcnVsZVwiOiBcImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgwKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB4LTJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc20gbGVhZGluZy01IHRleHQteWVsbG93LTcwMFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXFx0XFx0XFx0VXBsb2FkaW5nIG5ldyBmaWxlcyB3aWxsIGNsZWFyIGV4aXN0aW5nIGZpbGVzLlxcbiAgICAgICAgICAgIFxcdFxcdFwiXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODQ1YjAyZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTg0NWIwMmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTg0NWIwMmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTg0NWIwMmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODQ1YjAyZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxODQ1YjAyZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvRmlsZS9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4NDViMDJlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==