(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_components_Fieldtypes_Asset_Settings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'asset-fieldtype-settings',
  mixins: [_mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__.default],
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

/***/ "./resources/js/mixins/fieldtype.js":
/*!******************************************!*\
  !*** ./resources/js/mixins/fieldtype.js ***!
  \******************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Asset/Settings.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Asset/Settings.vue ***!
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
/* harmony import */ var _Settings_vue_vue_type_template_id_27957fd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=27957fd2& */ "./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Settings_vue_vue_type_template_id_27957fd2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Settings_vue_vue_type_template_id_27957fd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Asset/Settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2& ***!
  \**********************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_27957fd2___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_27957fd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_27957fd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=template&id=27957fd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Asset/Settings.vue?vue&type=template&id=27957fd2& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "row" },
    [
      _c("ui-number-group", {
        staticClass: "col w-full sm:w-1/2",
        attrs: {
          name: "settings.limit",
          label: "Limit",
          help:
            "Limit the number of assets selected; leave blank if no limit is desired.",
          min: 0,
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
        "ui-checkbox-group",
        {
          staticClass: "col w-full sm:w-1/2",
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
            [_vm._v("\n            " + _vm._s(filetype) + "\n        ")]
          )
        }),
        1
      ),
      _vm._v(" "),
      _c("ui-select-group", {
        staticClass: "col w-full sm:w-1/2",
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL21peGlucy9maWVsZHR5cGUuanMiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWU/YTZlNCIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZT81YmI5Il0sIm5hbWVzIjpbInByb3BzIiwidmFsdWUiLCJ0eXBlIiwiT2JqZWN0IiwicmVxdWlyZWQiLCJjb21wdXRlZCIsInNldHRpbmdzIiwiZ2V0Iiwic2V0IiwiJHNldCIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0E7QUFFQTtBQUNBLGtDQURBO0FBR0Esa0VBSEE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsdUJBRkE7QUFHQSxzQkFIQTtBQUlBO0FBSkEsT0FEQTtBQU9BO0FBUEE7QUFTQSxHQWZBO0FBaUJBO0FBQ0EsZ0JBREEsd0JBQ0EsS0FEQSxFQUNBLENBREEsRUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxPQUpBO0FBS0EsS0FQQTtBQVNBLDJCQVRBLHFDQVNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBLE9BSkE7QUFLQTtBQWZBLEdBakJBO0FBbUNBLFNBbkNBLHFCQW1DQTtBQUNBO0FBQ0E7QUFyQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQSxpRUFBZTtBQUNYQSxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFFO0FBQ0hDLFVBQUksRUFBRUMsTUFESDtBQUVIQyxjQUFRLEVBQUU7QUFGUDtBQURKLEdBREk7QUFRWEMsVUFBUSxFQUFFO0FBQ05DLFlBQVEsRUFBRTtBQUNOQyxTQURNLGlCQUNBO0FBQ0YsZUFBTyxLQUFLTixLQUFMLENBQVdLLFFBQVgsSUFBdUIsRUFBOUI7QUFDSCxPQUhLO0FBSU5FLFNBSk0sZUFJRlAsS0FKRSxFQUlLO0FBQ1AsYUFBS1EsSUFBTCxDQUFVLEtBQUtSLEtBQUwsQ0FBV0ssUUFBckIsRUFBK0JMLEtBQS9CO0FBQ0g7QUFOSyxLQURKO0FBVU5TLFVBVk0sb0JBVUc7QUFDTCxhQUFPLEtBQUtULEtBQUwsQ0FBV1MsTUFBWCxJQUFxQixFQUE1QjtBQUNIO0FBWks7QUFSQyxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdUY7QUFDM0I7QUFDTDs7O0FBR3ZEO0FBQ0EsQ0FBbUc7QUFDbkcsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QytNLENBQUMsaUVBQWUsME1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWxQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUsscUJBQXFCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9yZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0Fzc2V0X1NldHRpbmdzX3Z1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDx1aS1udW1iZXItZ3JvdXBcbiAgICAgICAgICAgIGNsYXNzPVwiY29sIHctZnVsbCBzbTp3LTEvMlwiXG4gICAgICAgICAgICBuYW1lPVwic2V0dGluZ3MubGltaXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJMaW1pdFwiXG4gICAgICAgICAgICBoZWxwPVwiTGltaXQgdGhlIG51bWJlciBvZiBhc3NldHMgc2VsZWN0ZWQ7IGxlYXZlIGJsYW5rIGlmIG5vIGxpbWl0IGlzIGRlc2lyZWQuXCJcbiAgICAgICAgICAgIDptaW49XCIwXCJcbiAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKCdzZXR0aW5ncy5saW1pdCcpXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZXJyb3JzLmdldCgnc2V0dGluZ3MubGltaXQnKVwiXG4gICAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MubGltaXRcIj5cbiAgICAgICAgPC91aS1udW1iZXItZ3JvdXA+XG5cbiAgICAgICAgPHVpLWNoZWNrYm94LWdyb3VwXG4gICAgICAgICAgICBjbGFzcz1cImNvbCB3LWZ1bGwgc206dy0xLzJcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaWxlIHR5cGUgcmVzdHJpY3Rpb25zXCJcbiAgICAgICAgICAgIGhlbHA9XCJSZXN0cmljdCB3aGljaCBmaWxlIHR5cGVzIGFyZSBzZWxlY3RhYmxlIGZvciB0aGlzIGZpZWxkOyBsZWF2ZSBibGFuayBpZiBubyByZXRyaWN0aW9uIGlzIGRlc2lyZWQuXCJcbiAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKCdzZXR0aW5ncy5maWxldHlwZV9yZXN0cmljdGlvbnMnKVwiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImVycm9ycy5nZXQoJ3NldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9ucycpXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDx1aS1jaGVja2JveFxuICAgICAgICAgICAgICAgIHYtZm9yPVwiKGZpbGV0eXBlLCBpbmRleCkgaW4gZmlsZXR5cGVzXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCJcbiAgICAgICAgICAgICAgICA6aWQ9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICA6bmF0aXZlLXZhbHVlPVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5maWxldHlwZV9yZXN0cmljdGlvbnNcIj5cbiAgICAgICAgICAgICAgICB7eyBmaWxldHlwZSB9fVxuICAgICAgICAgICAgPC91aS1jaGVja2JveD5cbiAgICAgICAgPC91aS1jaGVja2JveC1ncm91cD5cblxuICAgICAgICA8dWktc2VsZWN0LWdyb3VwXG4gICAgICAgICAgICBjbGFzcz1cImNvbCB3LWZ1bGwgc206dy0xLzJcIlxuICAgICAgICAgICAgbmFtZT1cInNldHRpbmdzLnJvb3RfZGlyZWN0b3J5XCJcbiAgICAgICAgICAgIGxhYmVsPVwiUm9vdCBkaXJlY3RvcnlcIlxuICAgICAgICAgICAgaGVscD1cIlNlbGVjdCByb290IGZvbGRlciBmb3IgdGhpcyBmaWVsZDsgZGVmYXVsdCByb290IHdpbGwgYmUgdXNlZCBpZiBOb25lIHNlbGVjdGVkLlwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cImRpcmVjdG9yaWVzXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5yb290X2RpcmVjdG9yeVwiXG4gICAgICAgICAgICA6aGFzLWVycm9yPVwiZXJyb3JzLmhhcygnc2V0dGluZ3Mucm9vdF9kaXJlY3RvcnknKVwiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImVycm9ycy5nZXQoJ3NldHRpbmdzLnJvb3RfZGlyZWN0b3J5JylcIj5cbiAgICAgICAgPC91aS1zZWxlY3QtZ3JvdXA+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgZmllbGR0eXBlIGZyb20gJ0AvbWl4aW5zL2ZpZWxkdHlwZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2Fzc2V0LWZpZWxkdHlwZS1zZXR0aW5ncycsXG5cbiAgICAgICAgbWl4aW5zOiBbZmllbGR0eXBlXSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICBcdHJldHVybiB7XG4gICAgICAgIFx0XHRmaWxldHlwZXM6IHtcblx0ICAgICAgICAgICAgICAgIGltYWdlOiAgICAnSW1hZ2VzJyxcblx0ICAgICAgICAgICAgICAgIHZpZGVvOiAgICAnVmlkZW9zJyxcblx0ICAgICAgICAgICAgICAgIGF1ZGlvOiAgICAnQXVkaW8nLFxuXHQgICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICdEb2N1bWVudHMnLFxuXHQgICAgICAgIFx0fSxcblx0ICAgICAgICBcdGRpcmVjdG9yaWVzOiBbXVxuXHQgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgIFx0cmVjdXJzaXZlTWFwKGl0ZW1zLCBuKSB7XG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKGl0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIFx0dGhpcy5kaXJlY3Rvcmllcy5wdXNoKHsgJ2xhYmVsJzogXy5yZXBlYXQoJy0gJywgbikgKyBpdGVtLm5hbWUsICd2YWx1ZSc6IGl0ZW0uaWQgfSlcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3Vyc2l2ZU1hcChpdGVtLmNoaWxkcmVuLCBuICsgMSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICBcdGZldGNoRGlyZWN0b3J5SGllcmFyY2h5KCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9kaXJlY3Rvcmllcz9yZWN1cnNpdmU9dHJ1ZScpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgXHR0aGlzLmRpcmVjdG9yaWVzLnB1c2goeyAnbGFiZWwnOiAnUm9vdCcsICd2YWx1ZSc6ICcwJyB9KVxuXG4gICAgICAgICAgICAgICAgXHR0aGlzLnJlY3Vyc2l2ZU1hcChkYXRhLmRhdGEsIDEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICBcdHRoaXMuZmV0Y2hEaXJlY3RvcnlIaWVyYXJjaHkoKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc2V0dGluZ3MgfHwge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy52YWx1ZS5zZXR0aW5ncywgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZXJyb3JzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuZXJyb3JzIHx8IHt9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc5NTdmZDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI3OTU3ZmQyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI3OTU3ZmQyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI3OTU3ZmQyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc5NTdmZDImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjc5NTdmZDInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQXNzZXQvU2V0dGluZ3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ1aS1udW1iZXItZ3JvdXBcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsIHNtOnctMS8yXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbmFtZTogXCJzZXR0aW5ncy5saW1pdFwiLFxuICAgICAgICAgIGxhYmVsOiBcIkxpbWl0XCIsXG4gICAgICAgICAgaGVscDpcbiAgICAgICAgICAgIFwiTGltaXQgdGhlIG51bWJlciBvZiBhc3NldHMgc2VsZWN0ZWQ7IGxlYXZlIGJsYW5rIGlmIG5vIGxpbWl0IGlzIGRlc2lyZWQuXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5lcnJvcnMuaGFzKFwic2V0dGluZ3MubGltaXRcIiksXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5lcnJvcnMuZ2V0KFwic2V0dGluZ3MubGltaXRcIilcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmxpbWl0LFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncywgXCJsaW1pdFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmxpbWl0XCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidWktY2hlY2tib3gtZ3JvdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgc206dy0xLzJcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbGFiZWw6IFwiRmlsZSB0eXBlIHJlc3RyaWN0aW9uc1wiLFxuICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgXCJSZXN0cmljdCB3aGljaCBmaWxlIHR5cGVzIGFyZSBzZWxlY3RhYmxlIGZvciB0aGlzIGZpZWxkOyBsZWF2ZSBibGFuayBpZiBubyByZXRyaWN0aW9uIGlzIGRlc2lyZWQuXCIsXG4gICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhcInNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiKSxcbiAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZXJyb3JzLmdldChcInNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5maWxldHlwZXMsIGZ1bmN0aW9uKGZpbGV0eXBlLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwidWktY2hlY2tib3hcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIGlkOiBpbmRleCxcbiAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiBpbmRleFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncywgXCJmaWxldHlwZV9yZXN0cmljdGlvbnNcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5maWxldHlwZV9yZXN0cmljdGlvbnNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKGZpbGV0eXBlKSArIFwiXFxuICAgICAgICBcIildXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInVpLXNlbGVjdC1ncm91cFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgc206dy0xLzJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBuYW1lOiBcInNldHRpbmdzLnJvb3RfZGlyZWN0b3J5XCIsXG4gICAgICAgICAgbGFiZWw6IFwiUm9vdCBkaXJlY3RvcnlcIixcbiAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgXCJTZWxlY3Qgcm9vdCBmb2xkZXIgZm9yIHRoaXMgZmllbGQ7IGRlZmF1bHQgcm9vdCB3aWxsIGJlIHVzZWQgaWYgTm9uZSBzZWxlY3RlZC5cIixcbiAgICAgICAgICBvcHRpb25zOiBfdm0uZGlyZWN0b3JpZXMsXG4gICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmVycm9ycy5oYXMoXCJzZXR0aW5ncy5yb290X2RpcmVjdG9yeVwiKSxcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmVycm9ycy5nZXQoXCJzZXR0aW5ncy5yb290X2RpcmVjdG9yeVwiKVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3Mucm9vdF9kaXJlY3RvcnksXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLCBcInJvb3RfZGlyZWN0b3J5XCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3Mucm9vdF9kaXJlY3RvcnlcIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==