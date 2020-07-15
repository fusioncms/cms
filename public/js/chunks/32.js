(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/fieldtype */ "./resources/js/mixins/fieldtype.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'asset-fieldtype-settings',
  mixins: [_mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      filetypes: {
        image: 'Images',
        video: 'Videos',
        audio: 'Audio',
        document: 'Documents'
      },
      directories: []
    };
  },
  methods: {
    recursiveMap: function recursiveMap(items, n) {
      var _this = this;

      _.forEach(items, function (item) {
        _this.directories.push({
          'label': _.repeat('- ', n) + item.name,
          'value': item.id
        });

        _this.recursiveMap(item.children, n + 1);
      });
    },
    fetchDirectoryHierarchy: function fetchDirectoryHierarchy() {
      var _this2 = this;

      axios.get('/api/directories?recursive=true').then(function (_ref) {
        var data = _ref.data;

        _this2.directories.push({
          'label': 'Root',
          'value': '0'
        });

        _this2.recursiveMap(data.data, 1);
      });
    }
  },
  created: function created() {
    this.fetchDirectoryHierarchy();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=template&id=4d870364&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=template&id=4d870364& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col w-1/2" },
      [
        _c("p-number", {
          attrs: {
            name: "settings.limit",
            label: "Limit",
            help:
              "Limit the number of assets selected; leave blank if no limit is desired.",
            placeholder: "",
            "has-error": _vm.errors.has("settings.limit"),
            "error-message": _vm.errors.get("settings.limit")
          },
          model: {
            value: _vm.settings.limit,
            callback: function($$v) {
              _vm.$set(_vm.settings, "limit", $$v)
            },
            expression: "settings.limit"
          }
        }),
        _vm._v(" "),
        _c(
          "p-checkbox-group",
          {
            attrs: {
              label: "File type restrictions",
              help:
                "Restrict which file types are selectable for this field; leave blank if no retriction is desired.",
              "has-error": _vm.errors.has("settings.filetype_restrictions"),
              "error-message": _vm.errors.get("settings.filetype_restrictions")
            }
          },
          _vm._l(_vm.filetypes, function(filetype, index) {
            return _c(
              "p-checkbox",
              {
                key: index,
                attrs: {
                  name: "settings.filetype_restrictions",
                  id: index,
                  "native-value": index
                },
                model: {
                  value: _vm.settings.filetype_restrictions,
                  callback: function($$v) {
                    _vm.$set(_vm.settings, "filetype_restrictions", $$v)
                  },
                  expression: "settings.filetype_restrictions"
                }
              },
              [_vm._v("\n\t\t\t\t\t" + _vm._s(filetype) + "\n\t\t\t\t")]
            )
          }),
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col w-1/2" },
      [
        _c("p-select", {
          attrs: {
            name: "settings.root_directory",
            label: "Root directory",
            help:
              "Select root folder for this field; default root will be used if None selected.",
            options: _vm.directories,
            "has-error": _vm.errors.has("settings.root_directory"),
            "error-message": _vm.errors.get("settings.root_directory")
          },
          model: {
            value: _vm.settings.root_directory,
            callback: function($$v) {
              _vm.$set(_vm.settings, "root_directory", $$v)
            },
            expression: "settings.root_directory"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/fieldtypes/Asset/Settings.vue":
/*!****************************************************!*\
  !*** ./resources/js/fieldtypes/Asset/Settings.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_4d870364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=4d870364& */ "./resources/js/fieldtypes/Asset/Settings.vue?vue&type=template&id=4d870364&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_4d870364___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_4d870364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Asset/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Asset/Settings.vue?vue&type=template&id=4d870364&":
/*!***********************************************************************************!*\
  !*** ./resources/js/fieldtypes/Asset/Settings.vue?vue&type=template&id=4d870364& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_4d870364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=4d870364& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=template&id=4d870364&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_4d870364___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_4d870364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/fieldtype.js":
/*!******************************************!*\
  !*** ./resources/js/mixins/fieldtype.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    settings: function settings() {
      return this.value.settings || {};
    },
    errors: function errors() {
      return this.value.errors || {};
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvU2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZT80YjUzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWU/ZDRlNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWU/MWNmOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL2ZpZWxkdHlwZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInZhbHVlIiwidHlwZSIsIk9iamVjdCIsInJlcXVpcmVkIiwiY29tcHV0ZWQiLCJzZXR0aW5ncyIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0E7QUFFQTtBQUNBLGtDQURBO0FBR0EscUVBSEE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsdUJBRkE7QUFHQSxzQkFIQTtBQUlBO0FBSkEsT0FEQTtBQU9BO0FBUEE7QUFTQSxHQWZBO0FBaUJBO0FBQ0EsZ0JBREEsd0JBQ0EsS0FEQSxFQUNBLENBREEsRUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxPQUpBO0FBS0EsS0FQQTtBQVNBLDJCQVRBLHFDQVNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBLE9BSkE7QUFLQTtBQWZBLEdBakJBO0FBbUNBLFNBbkNBLHFCQW1DQTtBQUNBO0FBQ0E7QUFyQ0EsRzs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDJCQUEyQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQUE7QUFBQTtBQUFBO0FBQXVGO0FBQzNCO0FBQ0w7OztBQUd2RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUE4TCxDQUFnQixvUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFlO0FBQ1hBLE9BQUssRUFBRTtBQUNIQyxTQUFLLEVBQUU7QUFDSEMsVUFBSSxFQUFFQyxNQURIO0FBRUhDLGNBQVEsRUFBRTtBQUZQO0FBREosR0FESTtBQVFYQyxVQUFRLEVBQUU7QUFDTkMsWUFETSxzQkFDSztBQUNQLGFBQU8sS0FBS0wsS0FBTCxDQUFXSyxRQUFYLElBQXVCLEVBQTlCO0FBQ0gsS0FISztBQUtOQyxVQUxNLG9CQUtHO0FBQ0wsYUFBTyxLQUFLTixLQUFMLENBQVdNLE1BQVgsSUFBcUIsRUFBNUI7QUFDSDtBQVBLO0FBUkMsQ0FBZixFIiwiZmlsZSI6ImpzL2NodW5rcy8zMi5qcz9pZD1hMDQ5NTc3ZWQ1ZGVhYjc0NDI5NiIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgXHQ8ZGl2IGNsYXNzPVwiY29sIHctMS8yXCI+XG5cdFx0XHQ8cC1udW1iZXJcblx0XHRcdFx0bmFtZT1cInNldHRpbmdzLmxpbWl0XCJcblx0XHRcdFx0bGFiZWw9XCJMaW1pdFwiXG5cdFx0XHRcdGhlbHA9XCJMaW1pdCB0aGUgbnVtYmVyIG9mIGFzc2V0cyBzZWxlY3RlZDsgbGVhdmUgYmxhbmsgaWYgbm8gbGltaXQgaXMgZGVzaXJlZC5cIlxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cIlwiXG5cdFx0XHRcdHYtbW9kZWw9XCJzZXR0aW5ncy5saW1pdFwiXG5cdFx0XHRcdDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKCdzZXR0aW5ncy5saW1pdCcpXCJcbiAgICAgICAgICAgXHRcdDplcnJvci1tZXNzYWdlPVwiZXJyb3JzLmdldCgnc2V0dGluZ3MubGltaXQnKVwiPlxuXHRcdFx0PC9wLW51bWJlcj5cblxuXHRcdFx0PHAtY2hlY2tib3gtZ3JvdXBcblx0XHRcdFx0bGFiZWw9XCJGaWxlIHR5cGUgcmVzdHJpY3Rpb25zXCJcblx0XHRcdFx0aGVscD1cIlJlc3RyaWN0IHdoaWNoIGZpbGUgdHlwZXMgYXJlIHNlbGVjdGFibGUgZm9yIHRoaXMgZmllbGQ7IGxlYXZlIGJsYW5rIGlmIG5vIHJldHJpY3Rpb24gaXMgZGVzaXJlZC5cIlxuXHRcdFx0XHQ6aGFzLWVycm9yPVwiZXJyb3JzLmhhcygnc2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zJylcIlxuICAgICAgIFx0XHRcdDplcnJvci1tZXNzYWdlPVwiZXJyb3JzLmdldCgnc2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zJylcIj5cblx0XHRcdFx0PHAtY2hlY2tib3hcblx0XHRcdFx0XHR2LWZvcj1cIihmaWxldHlwZSwgaW5kZXgpIGluIGZpbGV0eXBlc1wiXG5cdFx0XHRcdFx0bmFtZT1cInNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiXG5cdFx0XHRcdFx0OmlkPVwiaW5kZXhcIlxuXHRcdFx0XHRcdDprZXk9XCJpbmRleFwiXG5cdFx0XHRcdFx0Om5hdGl2ZS12YWx1ZT1cImluZGV4XCJcblx0XHRcdFx0XHR2LW1vZGVsPVwic2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCI+XG5cdFx0XHRcdFx0e3sgZmlsZXR5cGUgfX1cblx0XHRcdFx0PC9wLWNoZWNrYm94PlxuXHRcdFx0PC9wLWNoZWNrYm94LWdyb3VwPlxuXHRcdDwvZGl2PlxuXG4gICAgXHQ8ZGl2IGNsYXNzPVwiY29sIHctMS8yXCI+XG5cdFx0XHQ8cC1zZWxlY3Rcblx0XHRcdFx0bmFtZT1cInNldHRpbmdzLnJvb3RfZGlyZWN0b3J5XCJcblx0XHRcdFx0bGFiZWw9XCJSb290IGRpcmVjdG9yeVwiXG5cdFx0XHRcdGhlbHA9XCJTZWxlY3Qgcm9vdCBmb2xkZXIgZm9yIHRoaXMgZmllbGQ7IGRlZmF1bHQgcm9vdCB3aWxsIGJlIHVzZWQgaWYgTm9uZSBzZWxlY3RlZC5cIlxuXHRcdFx0XHQ6b3B0aW9ucz1cImRpcmVjdG9yaWVzXCJcblx0XHRcdFx0di1tb2RlbD1cInNldHRpbmdzLnJvb3RfZGlyZWN0b3J5XCJcblx0XHRcdFx0Omhhcy1lcnJvcj1cImVycm9ycy5oYXMoJ3NldHRpbmdzLnJvb3RfZGlyZWN0b3J5JylcIlxuICAgICAgICAgICBcdFx0OmVycm9yLW1lc3NhZ2U9XCJlcnJvcnMuZ2V0KCdzZXR0aW5ncy5yb290X2RpcmVjdG9yeScpXCI+XG5cdFx0XHQ8L3Atc2VsZWN0PlxuXHQgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgZmllbGR0eXBlIGZyb20gJy4uLy4uL21peGlucy9maWVsZHR5cGUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdhc3NldC1maWVsZHR5cGUtc2V0dGluZ3MnLFxuXG4gICAgICAgIG1peGluczogW2ZpZWxkdHlwZV0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgXHRyZXR1cm4ge1xuICAgICAgICBcdFx0ZmlsZXR5cGVzOiB7XG5cdCAgICAgICAgICAgICAgICBpbWFnZTogICAgJ0ltYWdlcycsXG5cdCAgICAgICAgICAgICAgICB2aWRlbzogICAgJ1ZpZGVvcycsXG5cdCAgICAgICAgICAgICAgICBhdWRpbzogICAgJ0F1ZGlvJyxcblx0ICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnRG9jdW1lbnRzJyxcblx0ICAgICAgICBcdH0sXG5cdCAgICAgICAgXHRkaXJlY3RvcmllczogW11cblx0ICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICBcdHJlY3Vyc2l2ZU1hcChpdGVtcywgbikge1xuICAgICAgICAgICAgICAgIF8uZm9yRWFjaChpdGVtcywgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBcdHRoaXMuZGlyZWN0b3JpZXMucHVzaCh7ICdsYWJlbCc6IF8ucmVwZWF0KCctICcsIG4pICsgaXRlbS5uYW1lLCAndmFsdWUnOiBpdGVtLmlkIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN1cnNpdmVNYXAoaXRlbS5jaGlsZHJlbiwgbiArIDEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgXHRmZXRjaERpcmVjdG9yeUhpZXJhcmNoeSgpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvZGlyZWN0b3JpZXM/cmVjdXJzaXZlPXRydWUnKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIFx0dGhpcy5kaXJlY3Rvcmllcy5wdXNoKHsgJ2xhYmVsJzogJ1Jvb3QnLCAndmFsdWUnOiAnMCcgfSlcblxuICAgICAgICAgICAgICAgIFx0dGhpcy5yZWN1cnNpdmVNYXAoZGF0YS5kYXRhLCAxKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgXHR0aGlzLmZldGNoRGlyZWN0b3J5SGllcmFyY2h5KClcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctMS8yXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwLW51bWJlclwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IFwic2V0dGluZ3MubGltaXRcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIkxpbWl0XCIsXG4gICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICBcIkxpbWl0IHRoZSBudW1iZXIgb2YgYXNzZXRzIHNlbGVjdGVkOyBsZWF2ZSBibGFuayBpZiBubyBsaW1pdCBpcyBkZXNpcmVkLlwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXG4gICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhcInNldHRpbmdzLmxpbWl0XCIpLFxuICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5lcnJvcnMuZ2V0KFwic2V0dGluZ3MubGltaXRcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmxpbWl0LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MsIFwibGltaXRcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MubGltaXRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicC1jaGVja2JveC1ncm91cFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkZpbGUgdHlwZSByZXN0cmljdGlvbnNcIixcbiAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICBcIlJlc3RyaWN0IHdoaWNoIGZpbGUgdHlwZXMgYXJlIHNlbGVjdGFibGUgZm9yIHRoaXMgZmllbGQ7IGxlYXZlIGJsYW5rIGlmIG5vIHJldHJpY3Rpb24gaXMgZGVzaXJlZC5cIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmVycm9ycy5oYXMoXCJzZXR0aW5ncy5maWxldHlwZV9yZXN0cmljdGlvbnNcIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZXJyb3JzLmdldChcInNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5maWxldHlwZXMsIGZ1bmN0aW9uKGZpbGV0eXBlLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcInAtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICBpZDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiBpbmRleFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MsIFwiZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBfdm0uX3MoZmlsZXR5cGUpICsgXCJcXG5cXHRcXHRcXHRcXHRcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LTEvMlwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBcInNldHRpbmdzLnJvb3RfZGlyZWN0b3J5XCIsXG4gICAgICAgICAgICBsYWJlbDogXCJSb290IGRpcmVjdG9yeVwiLFxuICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgXCJTZWxlY3Qgcm9vdCBmb2xkZXIgZm9yIHRoaXMgZmllbGQ7IGRlZmF1bHQgcm9vdCB3aWxsIGJlIHVzZWQgaWYgTm9uZSBzZWxlY3RlZC5cIixcbiAgICAgICAgICAgIG9wdGlvbnM6IF92bS5kaXJlY3RvcmllcyxcbiAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5lcnJvcnMuaGFzKFwic2V0dGluZ3Mucm9vdF9kaXJlY3RvcnlcIiksXG4gICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmVycm9ycy5nZXQoXCJzZXR0aW5ncy5yb290X2RpcmVjdG9yeVwiKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3Mucm9vdF9kaXJlY3RvcnksXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncywgXCJyb290X2RpcmVjdG9yeVwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5yb290X2RpcmVjdG9yeVwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ4NzAzNjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRkODcwMzY0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRkODcwMzY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRkODcwMzY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ4NzAzNjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGQ4NzAzNjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ4NzAzNjQmXCIiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNldHRpbmdzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc2V0dGluZ3MgfHwge31cbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5lcnJvcnMgfHwge31cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9