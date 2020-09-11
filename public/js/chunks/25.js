(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/fieldtype */ "./resources/js/mixins/fieldtype.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        _c("ui-number-group", {
          attrs: {
            name: "settings.limit",
            label: "Limit",
            help:
              "Limit the number of assets selected; leave blank if no limit is desired.",
            min: 1,
            "has-error": _vm.errors.has("settings.limit"),
            "error-message": _vm.errors.get("settings.limit")
          }
        }),
        _vm._v(" "),
        _c(
          "ui-checkbox-group",
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
              "ui-checkbox",
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
        _c("ui-select-group", {
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

/***/ "./resources/js/components/Fieldtypes/Asset/Settings.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Asset/Settings.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_27957fd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=27957fd2& */ "./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_27957fd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_27957fd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Asset/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_27957fd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=27957fd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_27957fd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_27957fd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
    settings: {
      get: function get() {
        return this.value.settings || {};
      },
      set: function set(value) {
        this.$set(this.value.settings, value);
      }
    },
    errors: function errors() {
      return this.value.errors || {};
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWU/YzA0YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZT82MWFmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQXNzZXQvU2V0dGluZ3MudnVlP2NkZmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9maWVsZHR5cGUuanMiXSwibmFtZXMiOlsicHJvcHMiLCJ2YWx1ZSIsInR5cGUiLCJPYmplY3QiLCJyZXF1aXJlZCIsImNvbXB1dGVkIiwic2V0dGluZ3MiLCJnZXQiLCJzZXQiLCIkc2V0IiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBO0FBRUE7QUFDQSxrQ0FEQTtBQUdBLHFFQUhBO0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHVCQUZBO0FBR0Esc0JBSEE7QUFJQTtBQUpBLE9BREE7QUFPQTtBQVBBO0FBU0EsR0FmQTtBQWlCQTtBQUNBLGdCQURBLHdCQUNBLEtBREEsRUFDQSxDQURBLEVBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0EsT0FKQTtBQUtBLEtBUEE7QUFTQSwyQkFUQSxxQ0FTQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxPQUpBO0FBS0E7QUFmQSxHQWpCQTtBQW1DQSxTQW5DQSxxQkFtQ0E7QUFDQTtBQUNBO0FBckNBLEc7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBLE9BQU8sMkJBQTJCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUF1RjtBQUMzQjtBQUNMOzs7QUFHdkQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBb00sQ0FBZ0Isb1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBeE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZTtBQUNYQSxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFFO0FBQ0hDLFVBQUksRUFBRUMsTUFESDtBQUVIQyxjQUFRLEVBQUU7QUFGUDtBQURKLEdBREk7QUFRWEMsVUFBUSxFQUFFO0FBQ05DLFlBQVEsRUFBRTtBQUNOQyxTQURNLGlCQUNBO0FBQ0YsZUFBTyxLQUFLTixLQUFMLENBQVdLLFFBQVgsSUFBdUIsRUFBOUI7QUFDSCxPQUhLO0FBSU5FLFNBSk0sZUFJRlAsS0FKRSxFQUlLO0FBQ1AsYUFBS1EsSUFBTCxDQUFVLEtBQUtSLEtBQUwsQ0FBV0ssUUFBckIsRUFBK0JMLEtBQS9CO0FBQ0g7QUFOSyxLQURKO0FBVU5TLFVBVk0sb0JBVUc7QUFDTCxhQUFPLEtBQUtULEtBQUwsQ0FBV1MsTUFBWCxJQUFxQixFQUE1QjtBQUNIO0FBWks7QUFSQyxDQUFmLEUiLCJmaWxlIjoianMvY2h1bmtzLzI1LmpzP2lkPTgxNmMxYzYxNWVlZmI5MmFiOTlhIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICBcdDxkaXYgY2xhc3M9XCJjb2wgdy0xLzJcIj5cblx0XHRcdDx1aS1udW1iZXItZ3JvdXBcblx0XHRcdFx0bmFtZT1cInNldHRpbmdzLmxpbWl0XCJcblx0XHRcdFx0bGFiZWw9XCJMaW1pdFwiXG5cdFx0XHRcdGhlbHA9XCJMaW1pdCB0aGUgbnVtYmVyIG9mIGFzc2V0cyBzZWxlY3RlZDsgbGVhdmUgYmxhbmsgaWYgbm8gbGltaXQgaXMgZGVzaXJlZC5cIlxuXHRcdFx0XHQ6bWluPVwiMVwiXG5cdFx0XHRcdDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKCdzZXR0aW5ncy5saW1pdCcpXCJcbiAgICAgICAgICAgXHRcdDplcnJvci1tZXNzYWdlPVwiZXJyb3JzLmdldCgnc2V0dGluZ3MubGltaXQnKVwiPlxuXHRcdFx0PC91aS1udW1iZXItZ3JvdXA+XG5cblx0XHRcdDx1aS1jaGVja2JveC1ncm91cFxuXHRcdFx0XHRsYWJlbD1cIkZpbGUgdHlwZSByZXN0cmljdGlvbnNcIlxuXHRcdFx0XHRoZWxwPVwiUmVzdHJpY3Qgd2hpY2ggZmlsZSB0eXBlcyBhcmUgc2VsZWN0YWJsZSBmb3IgdGhpcyBmaWVsZDsgbGVhdmUgYmxhbmsgaWYgbm8gcmV0cmljdGlvbiBpcyBkZXNpcmVkLlwiXG5cdFx0XHRcdDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKCdzZXR0aW5ncy5maWxldHlwZV9yZXN0cmljdGlvbnMnKVwiXG4gICAgICAgXHRcdFx0OmVycm9yLW1lc3NhZ2U9XCJlcnJvcnMuZ2V0KCdzZXR0aW5ncy5maWxldHlwZV9yZXN0cmljdGlvbnMnKVwiPlxuXHRcdFx0XHQ8dWktY2hlY2tib3hcblx0XHRcdFx0XHR2LWZvcj1cIihmaWxldHlwZSwgaW5kZXgpIGluIGZpbGV0eXBlc1wiXG5cdFx0XHRcdFx0bmFtZT1cInNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiXG5cdFx0XHRcdFx0OmlkPVwiaW5kZXhcIlxuXHRcdFx0XHRcdDprZXk9XCJpbmRleFwiXG5cdFx0XHRcdFx0Om5hdGl2ZS12YWx1ZT1cImluZGV4XCJcblx0XHRcdFx0XHR2LW1vZGVsPVwic2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCI+XG5cdFx0XHRcdFx0e3sgZmlsZXR5cGUgfX1cblx0XHRcdFx0PC91aS1jaGVja2JveD5cblx0XHRcdDwvdWktY2hlY2tib3gtZ3JvdXA+XG5cdFx0PC9kaXY+XG5cbiAgICBcdDxkaXYgY2xhc3M9XCJjb2wgdy0xLzJcIj5cblx0XHRcdDx1aS1zZWxlY3QtZ3JvdXBcblx0XHRcdFx0bmFtZT1cInNldHRpbmdzLnJvb3RfZGlyZWN0b3J5XCJcblx0XHRcdFx0bGFiZWw9XCJSb290IGRpcmVjdG9yeVwiXG5cdFx0XHRcdGhlbHA9XCJTZWxlY3Qgcm9vdCBmb2xkZXIgZm9yIHRoaXMgZmllbGQ7IGRlZmF1bHQgcm9vdCB3aWxsIGJlIHVzZWQgaWYgTm9uZSBzZWxlY3RlZC5cIlxuXHRcdFx0XHQ6b3B0aW9ucz1cImRpcmVjdG9yaWVzXCJcblx0XHRcdFx0di1tb2RlbD1cInNldHRpbmdzLnJvb3RfZGlyZWN0b3J5XCJcblx0XHRcdFx0Omhhcy1lcnJvcj1cImVycm9ycy5oYXMoJ3NldHRpbmdzLnJvb3RfZGlyZWN0b3J5JylcIlxuICAgICAgICAgICBcdFx0OmVycm9yLW1lc3NhZ2U9XCJlcnJvcnMuZ2V0KCdzZXR0aW5ncy5yb290X2RpcmVjdG9yeScpXCI+XG5cdFx0XHQ8L3VpLXNlbGVjdC1ncm91cD5cblx0ICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IGZpZWxkdHlwZSBmcm9tICdAL21peGlucy9maWVsZHR5cGUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdhc3NldC1maWVsZHR5cGUtc2V0dGluZ3MnLFxuXG4gICAgICAgIG1peGluczogW2ZpZWxkdHlwZV0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgXHRyZXR1cm4ge1xuICAgICAgICBcdFx0ZmlsZXR5cGVzOiB7XG5cdCAgICAgICAgICAgICAgICBpbWFnZTogICAgJ0ltYWdlcycsXG5cdCAgICAgICAgICAgICAgICB2aWRlbzogICAgJ1ZpZGVvcycsXG5cdCAgICAgICAgICAgICAgICBhdWRpbzogICAgJ0F1ZGlvJyxcblx0ICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnRG9jdW1lbnRzJyxcblx0ICAgICAgICBcdH0sXG5cdCAgICAgICAgXHRkaXJlY3RvcmllczogW11cblx0ICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICBcdHJlY3Vyc2l2ZU1hcChpdGVtcywgbikge1xuICAgICAgICAgICAgICAgIF8uZm9yRWFjaChpdGVtcywgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBcdHRoaXMuZGlyZWN0b3JpZXMucHVzaCh7ICdsYWJlbCc6IF8ucmVwZWF0KCctICcsIG4pICsgaXRlbS5uYW1lLCAndmFsdWUnOiBpdGVtLmlkIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN1cnNpdmVNYXAoaXRlbS5jaGlsZHJlbiwgbiArIDEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgXHRmZXRjaERpcmVjdG9yeUhpZXJhcmNoeSgpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvZGlyZWN0b3JpZXM/cmVjdXJzaXZlPXRydWUnKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIFx0dGhpcy5kaXJlY3Rvcmllcy5wdXNoKHsgJ2xhYmVsJzogJ1Jvb3QnLCAndmFsdWUnOiAnMCcgfSlcblxuICAgICAgICAgICAgICAgIFx0dGhpcy5yZWN1cnNpdmVNYXAoZGF0YS5kYXRhLCAxKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgXHR0aGlzLmZldGNoRGlyZWN0b3J5SGllcmFyY2h5KClcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LTEvMlwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwidWktbnVtYmVyLWdyb3VwXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogXCJzZXR0aW5ncy5saW1pdFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiTGltaXRcIixcbiAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgIFwiTGltaXQgdGhlIG51bWJlciBvZiBhc3NldHMgc2VsZWN0ZWQ7IGxlYXZlIGJsYW5rIGlmIG5vIGxpbWl0IGlzIGRlc2lyZWQuXCIsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhcInNldHRpbmdzLmxpbWl0XCIpLFxuICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5lcnJvcnMuZ2V0KFwic2V0dGluZ3MubGltaXRcIilcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInVpLWNoZWNrYm94LWdyb3VwXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRmlsZSB0eXBlIHJlc3RyaWN0aW9uc1wiLFxuICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgIFwiUmVzdHJpY3Qgd2hpY2ggZmlsZSB0eXBlcyBhcmUgc2VsZWN0YWJsZSBmb3IgdGhpcyBmaWVsZDsgbGVhdmUgYmxhbmsgaWYgbm8gcmV0cmljdGlvbiBpcyBkZXNpcmVkLlwiLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhcInNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5lcnJvcnMuZ2V0KFwic2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmZpbGV0eXBlcywgZnVuY3Rpb24oZmlsZXR5cGUsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwidWktY2hlY2tib3hcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICBpZDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiBpbmRleFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MsIFwiZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBfdm0uX3MoZmlsZXR5cGUpICsgXCJcXG5cXHRcXHRcXHRcXHRcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LTEvMlwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwidWktc2VsZWN0LWdyb3VwXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogXCJzZXR0aW5ncy5yb290X2RpcmVjdG9yeVwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiUm9vdCBkaXJlY3RvcnlcIixcbiAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgIFwiU2VsZWN0IHJvb3QgZm9sZGVyIGZvciB0aGlzIGZpZWxkOyBkZWZhdWx0IHJvb3Qgd2lsbCBiZSB1c2VkIGlmIE5vbmUgc2VsZWN0ZWQuXCIsXG4gICAgICAgICAgICBvcHRpb25zOiBfdm0uZGlyZWN0b3JpZXMsXG4gICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhcInNldHRpbmdzLnJvb3RfZGlyZWN0b3J5XCIpLFxuICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5lcnJvcnMuZ2V0KFwic2V0dGluZ3Mucm9vdF9kaXJlY3RvcnlcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLnJvb3RfZGlyZWN0b3J5LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MsIFwicm9vdF9kaXJlY3RvcnlcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3Mucm9vdF9kaXJlY3RvcnlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3OTU3ZmQyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNzk1N2ZkMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNzk1N2ZkMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNzk1N2ZkMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3OTU3ZmQyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI3OTU3ZmQyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc5NTdmZDImXCIiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc2V0dGluZ3MgfHwge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy52YWx1ZS5zZXR0aW5ncywgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZXJyb3JzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuZXJyb3JzIHx8IHt9XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==