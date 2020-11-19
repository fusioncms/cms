(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_components_Fieldtypes_Video_Field_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _mixins_fieldtypes_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/fieldtypes/field */ "./resources/js/mixins/fieldtypes/field.js");
/* harmony import */ var _mixins_filehelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/filehelper */ "./resources/js/mixins/filehelper.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'video-fieldtype',
  mixins: [_mixins_fieldtypes_field__WEBPACK_IMPORTED_MODULE_0__.default, _mixins_filehelper__WEBPACK_IMPORTED_MODULE_1__.default],
  data: function data() {
    return {
      endpoint: '/datatable/files/video',
      player: {},
      options: {
        title: 'Preview',
        // ratio: '16:9',
        controls: ['play-large', // The large play button in the center
        'restart', // Restart playback
        'play', // Play/pause playback
        'progress', // The progress bar and scrubber for playback and buffering
        'current-time', // The current time of playback
        'duration', // The full duration of the media
        'mute', // Toggle mute
        'volume', // Volume control
        'captions', // Toggle captions
        'settings', // Settings menu
        'pip', // Picture-in-picture (currently Safari only)
        'airplay', // Airplay (currently Safari only)
        'fullscreen' // Toggle fullscreen
        ],
        settings: ['quality', 'loop']
      }
    };
  },
  computed: {
    isEmbeddedVideo: function isEmbeddedVideo() {
      return Boolean(this.model) && !this.youtube;
    },
    isYoutubeVideo: function isYoutubeVideo() {
      return Boolean(this.model) && this.youtube;
    },
    youtube: function youtube() {
      if (this.model) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = this.model.match(regExp);

        if (match && match[2].length == 11) {
          return match[2];
        }
      }

      return false;
    }
  },
  methods: {
    clear: function clear() {
      this.model = '';
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/fieldtypes/field.js":
/*!*************************************************!*\
  !*** ./resources/js/mixins/fieldtypes/field.js ***!
  \*************************************************/
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
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": null
    },
    errors: {
      type: Object,
      required: false,
      "default": function _default() {}
    }
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    hasError: function hasError(handle) {
      return this.errors && this.errors.has(handle);
    },
    errorMessage: function errorMessage(handle) {
      return this.hasError(handle) ? this.errors.get(handle) : '';
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Video/Field.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Video/Field.vue ***!
  \************************************************************/
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
/* harmony import */ var _Field_vue_vue_type_template_id_0551f101___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=0551f101& */ "./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Field_vue_vue_type_template_id_0551f101___WEBPACK_IMPORTED_MODULE_0__.render,
  _Field_vue_vue_type_template_id_0551f101___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Video/Field.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101& ***!
  \*******************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_0551f101___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_0551f101___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_0551f101___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=template&id=0551f101& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
        "ui-field-group",
        {
          attrs: {
            name: _vm.field.handle,
            fieldId: _vm.field.handle + "-field",
            label: _vm.field.name,
            help: _vm.field.help,
            hasError: _vm.hasError(_vm.field.handle),
            errorMessage: _vm.errorMessage(_vm.field.handle)
          }
        },
        [
          _c(
            "div",
            { staticClass: "input-group" },
            [
              _c("ui-input", {
                staticClass: "field-input field",
                attrs: {
                  id: _vm.field.handle,
                  name: _vm.field.handle,
                  help: _vm.field.help,
                  "aria-describedby": _vm.field.help,
                  hasError: _vm.hasError(_vm.field.handle)
                },
                model: {
                  value: _vm.model,
                  callback: function($$v) {
                    _vm.model = $$v
                  },
                  expression: "model"
                }
              }),
              _vm._v(" "),
              _c(
                "ui-button",
                {
                  directives: [
                    {
                      name: "modal",
                      rawName: "v-modal:selection-modal",
                      arg: "selection-modal"
                    }
                  ],
                  attrs: { icon: "" }
                },
                [
                  _c("fa-icon", { attrs: { icon: ["fas", "plus-circle"] } }),
                  _vm._v(" "),
                  _c("span", { staticClass: "sr-only" }, [
                    _vm._v("Choose an existing video file")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "ui-button",
                { attrs: { icon: "" }, on: { click: _vm.clear } },
                [
                  _c("fa-icon", {
                    staticClass: "mr-1",
                    attrs: { icon: ["fas", "times"] }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "sr-only" }, [
                    _vm._v("Clear field")
                  ])
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.isEmbeddedVideo
        ? _c(
            "div",
            [
              _c("ui-plyr", { attrs: { options: _vm.options } }, [
                _c("video", { attrs: { controls: "", crossorigin: "" } }, [
                  _c("source", { attrs: { src: _vm.model, size: "576" } })
                ])
              ])
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isYoutubeVideo
        ? _c(
            "div",
            [
              _c("ui-plyr", { attrs: { options: _vm.options } }, [
                _c("div", {
                  attrs: {
                    "data-plyr-provider": "youtube",
                    "data-plyr-embed-id": _vm.youtube
                  }
                })
              ])
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "ui-modal",
        {
          attrs: {
            name: "selection-modal",
            title: "Choose an existing video file"
          }
        },
        [
          _c("ui-table", {
            attrs: {
              endpoint: _vm.endpoint,
              id: "video-files",
              "sort-by": "name",
              "sort-in": "desc",
              "per-page": 10
            },
            scopedSlots: _vm._u([
              {
                key: "name",
                fn: function(table) {
                  return [
                    _c(
                      "ui-radio",
                      {
                        attrs: {
                          id: "selection-" + table.record.id,
                          name: "selection",
                          "native-value": table.record.url
                        },
                        model: {
                          value: _vm.model,
                          callback: function($$v) {
                            _vm.model = $$v
                          },
                          expression: "model"
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(table.record.name) +
                            "\n                "
                        )
                      ]
                    )
                  ]
                }
              },
              {
                key: "bytes",
                fn: function(table) {
                  return [
                    _c("span", { staticClass: "help" }, [
                      _vm._v(_vm._s(_vm._f("bytes")(table.record.bytes)))
                    ])
                  ]
                }
              },
              {
                key: "extension",
                fn: function(table) {
                  return [
                    _c("span", { staticClass: "help" }, [
                      _vm._v(_vm._s(table.record.extension))
                    ])
                  ]
                }
              },
              {
                key: "created_at",
                fn: function(table) {
                  return [
                    _c("ui-date", {
                      attrs: { timestamp: table.record.created_at }
                    })
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9WaWRlby9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL21peGlucy9maWVsZHR5cGVzL2ZpZWxkLmpzIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvVmlkZW8vRmllbGQudnVlIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvVmlkZW8vRmllbGQudnVlPzdhNzgiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9WaWRlby9GaWVsZC52dWU/OGFjZSJdLCJuYW1lcyI6WyJwcm9wcyIsImZpZWxkIiwidHlwZSIsIk9iamVjdCIsInJlcXVpcmVkIiwidmFsdWUiLCJlcnJvcnMiLCJjb21wdXRlZCIsIm1vZGVsIiwiZ2V0Iiwic2V0IiwiJGVtaXQiLCJtZXRob2RzIiwiaGFzRXJyb3IiLCJoYW5kbGUiLCJoYXMiLCJlcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHlCQURBO0FBR0Esa0lBSEE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFDQSx3Q0FEQTtBQUVBLGdCQUZBO0FBR0E7QUFDQSx3QkFEQTtBQUVBO0FBQ0EsbUJBQ0EsWUFEQSxFQUNBO0FBQ0EsaUJBRkEsRUFFQTtBQUNBLGNBSEEsRUFHQTtBQUNBLGtCQUpBLEVBSUE7QUFDQSxzQkFMQSxFQUtBO0FBQ0Esa0JBTkEsRUFNQTtBQUNBLGNBUEEsRUFPQTtBQUNBLGdCQVJBLEVB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QUFDQSIsImZpbGUiOiJqcy9yZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1ZpZGVvX0ZpZWxkX3Z1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8dWktZmllbGQtZ3JvdXBcbiAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgIDpmaWVsZElkPVwiYCR7ZmllbGQuaGFuZGxlfS1maWVsZGBcIlxuICAgICAgICAgICAgOmxhYmVsPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICA6aGVscD1cImZpZWxkLmhlbHBcIlxuICAgICAgICAgICAgOmhhc0Vycm9yPVwiaGFzRXJyb3IoZmllbGQuaGFuZGxlKVwiXG4gICAgICAgICAgICA6ZXJyb3JNZXNzYWdlPVwiZXJyb3JNZXNzYWdlKGZpZWxkLmhhbmRsZSlcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPHVpLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGQtaW5wdXQgZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICA6aWQ9XCJmaWVsZC5oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgIDpoZWxwPVwiZmllbGQuaGVscFwiXG4gICAgICAgICAgICAgICAgICAgIDphcmlhLWRlc2NyaWJlZGJ5PVwiZmllbGQuaGVscFwiXG4gICAgICAgICAgICAgICAgICAgIDpoYXNFcnJvcj1cImhhc0Vycm9yKGZpZWxkLmhhbmRsZSlcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibW9kZWxcIj5cbiAgICAgICAgICAgICAgICA8L3VpLWlucHV0PlxuXG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiBpY29uIHYtbW9kYWw6c2VsZWN0aW9uLW1vZGFsPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3BsdXMtY2lyY2xlJ11cIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkNob29zZSBhbiBleGlzdGluZyB2aWRlbyBmaWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdWktYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiBpY29uIEBjbGljaz1cImNsZWFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndGltZXMnXVwiIGNsYXNzPVwibXItMVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+Q2xlYXIgZmllbGQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC91aS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC91aS1maWVsZC1ncm91cD5cblxuICAgICAgICA8ZGl2IHYtaWY9XCJpc0VtYmVkZGVkVmlkZW9cIj5cbiAgICAgICAgICAgIDx1aS1wbHlyIDpvcHRpb25zPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDx2aWRlbyBjb250cm9scyBjcm9zc29yaWdpbj5cbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSA6c3JjPVwibW9kZWxcIiBzaXplPVwiNTc2XCI+XG4gICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgIDwvdWktcGx5cj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwiaXNZb3V0dWJlVmlkZW9cIj5cbiAgICAgICAgICAgIDx1aS1wbHlyIDpvcHRpb25zPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1wbHlyLXByb3ZpZGVyPVwieW91dHViZVwiIDpkYXRhLXBseXItZW1iZWQtaWQ9XCJ5b3V0dWJlXCI+PC9kaXY+XG4gICAgICAgICAgICA8L3VpLXBseXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx1aS1tb2RhbCBuYW1lPVwic2VsZWN0aW9uLW1vZGFsXCIgdGl0bGU9XCJDaG9vc2UgYW4gZXhpc3RpbmcgdmlkZW8gZmlsZVwiPlxuICAgICAgICAgICAgPHVpLXRhYmxlIDplbmRwb2ludD1cImVuZHBvaW50XCIgaWQ9XCJ2aWRlby1maWxlc1wiIHNvcnQtYnk9XCJuYW1lXCIgc29ydC1pbj1cImRlc2NcIiA6cGVyLXBhZ2U9XCIxMFwiPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibmFtZVwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktcmFkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgIDppZD1cImBzZWxlY3Rpb24tJHt0YWJsZS5yZWNvcmQuaWR9YFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpuYXRpdmUtdmFsdWU9XCJ0YWJsZS5yZWNvcmQudXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtb2RlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdGFibGUucmVjb3JkLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC91aS1yYWRpbz5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJieXRlc1wiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHBcIj57eyB0YWJsZS5yZWNvcmQuYnl0ZXMgfCBieXRlcyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJleHRlbnNpb25cIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwXCI+e3sgdGFibGUucmVjb3JkLmV4dGVuc2lvbiB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJjcmVhdGVkX2F0XCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1kYXRlIDp0aW1lc3RhbXA9XCJ0YWJsZS5yZWNvcmQuY3JlYXRlZF9hdFwiPjwvdWktZGF0ZT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC91aS10YWJsZT5cbiAgICAgICAgPC91aS1tb2RhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEZpZWxkTWl4aW4gZnJvbSAnQC9taXhpbnMvZmllbGR0eXBlcy9maWVsZCdcbiAgICBpbXBvcnQgRmlsZUhlbHBlciBmcm9tICdAL21peGlucy9maWxlaGVscGVyJ1xuICAgIGltcG9ydCBQbHlyIGZyb20gJ3BseXInXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICd2aWRlby1maWVsZHR5cGUnLFxuXG4gICAgICAgIG1peGluczogW0ZpZWxkTWl4aW4sIEZpbGVIZWxwZXJdLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnL2RhdGF0YWJsZS9maWxlcy92aWRlbycsXG4gICAgICAgICAgICAgICAgcGxheWVyOiB7fSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUHJldmlldycsXG4gICAgICAgICAgICAgICAgICAgIC8vIHJhdGlvOiAnMTY6OScsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAncGxheS1sYXJnZScsICAgLy8gVGhlIGxhcmdlIHBsYXkgYnV0dG9uIGluIHRoZSBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZXN0YXJ0JywgICAgICAvLyBSZXN0YXJ0IHBsYXliYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAncGxheScsICAgICAgICAgLy8gUGxheS9wYXVzZSBwbGF5YmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2dyZXNzJywgICAgIC8vIFRoZSBwcm9ncmVzcyBiYXIgYW5kIHNjcnViYmVyIGZvciBwbGF5YmFjayBhbmQgYnVmZmVyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAnY3VycmVudC10aW1lJywgLy8gVGhlIGN1cnJlbnQgdGltZSBvZiBwbGF5YmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2R1cmF0aW9uJywgICAgIC8vIFRoZSBmdWxsIGR1cmF0aW9uIG9mIHRoZSBtZWRpYVxuICAgICAgICAgICAgICAgICAgICAgICAgJ211dGUnLCAgICAgICAgIC8vIFRvZ2dsZSBtdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAndm9sdW1lJywgICAgICAgLy8gVm9sdW1lIGNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICdjYXB0aW9ucycsICAgICAvLyBUb2dnbGUgY2FwdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICdzZXR0aW5ncycsICAgICAvLyBTZXR0aW5ncyBtZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAncGlwJywgICAgICAgICAgLy8gUGljdHVyZS1pbi1waWN0dXJlIChjdXJyZW50bHkgU2FmYXJpIG9ubHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWlycGxheScsICAgICAgLy8gQWlycGxheSAoY3VycmVudGx5IFNhZmFyaSBvbmx5KVxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Z1bGxzY3JlZW4nLCAgIC8vIFRvZ2dsZSBmdWxsc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBbJ3F1YWxpdHknLCAnbG9vcCddLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaXNFbWJlZGRlZFZpZGVvKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMubW9kZWwpICYmICEgdGhpcy55b3V0dWJlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc1lvdXR1YmVWaWRlbygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLm1vZGVsKSAmJiB0aGlzLnlvdXR1YmVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHlvdXR1YmUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRXhwID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PXxcXD92PSkoW14jXFwmXFw/XSopLiovO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSB0aGlzLm1vZGVsLm1hdGNoKHJlZ0V4cClcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0ubGVuZ3RoID09IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hbMl1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cdFx0bWV0aG9kczoge1xuICAgICAgICAgICAgY2xlYXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9ICcnXG4gICAgICAgICAgICB9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7fVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoYXNFcnJvcihoYW5kbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9ycy5oYXMoaGFuZGxlKVxuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yTWVzc2FnZShoYW5kbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhc0Vycm9yKGhhbmRsZSkgPyB0aGlzLmVycm9ycy5nZXQoaGFuZGxlKSA6ICcnXG4gICAgICAgIH1cbiAgICB9LFxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1NTFmMTAxJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNTUxZjEwMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNTUxZjEwMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNTUxZjEwMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1NTFmMTAxJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA1NTFmMTAxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1ZpZGVvL0ZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidWktZmllbGQtZ3JvdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlLFxuICAgICAgICAgICAgZmllbGRJZDogX3ZtLmZpZWxkLmhhbmRsZSArIFwiLWZpZWxkXCIsXG4gICAgICAgICAgICBsYWJlbDogX3ZtLmZpZWxkLm5hbWUsXG4gICAgICAgICAgICBoZWxwOiBfdm0uZmllbGQuaGVscCxcbiAgICAgICAgICAgIGhhc0Vycm9yOiBfdm0uaGFzRXJyb3IoX3ZtLmZpZWxkLmhhbmRsZSksXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IF92bS5lcnJvck1lc3NhZ2UoX3ZtLmZpZWxkLmhhbmRsZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1aS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmllbGQtaW5wdXQgZmllbGRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IF92bS5maWVsZC5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgaGVscDogX3ZtLmZpZWxkLmhlbHAsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogX3ZtLmZpZWxkLmhlbHAsXG4gICAgICAgICAgICAgICAgICBoYXNFcnJvcjogX3ZtLmhhc0Vycm9yKF92bS5maWVsZC5oYW5kbGUpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RlbCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLm1vZGVsID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOnNlbGVjdGlvbi1tb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJzZWxlY3Rpb24tbW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwgeyBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJwbHVzLWNpcmNsZVwiXSB9IH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNob29zZSBhbiBleGlzdGluZyB2aWRlbyBmaWxlXCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaWNvbjogXCJcIiB9LCBvbjogeyBjbGljazogX3ZtLmNsZWFyIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0xXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRpbWVzXCJdIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNsZWFyIGZpZWxkXCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNFbWJlZGRlZFZpZGVvXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInVpLXBseXJcIiwgeyBhdHRyczogeyBvcHRpb25zOiBfdm0ub3B0aW9ucyB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInZpZGVvXCIsIHsgYXR0cnM6IHsgY29udHJvbHM6IFwiXCIsIGNyb3Nzb3JpZ2luOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzb3VyY2VcIiwgeyBhdHRyczogeyBzcmM6IF92bS5tb2RlbCwgc2l6ZTogXCI1NzZcIiB9IH0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pc1lvdXR1YmVWaWRlb1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1aS1wbHlyXCIsIHsgYXR0cnM6IHsgb3B0aW9uczogX3ZtLm9wdGlvbnMgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXBseXItcHJvdmlkZXJcIjogXCJ5b3V0dWJlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS1wbHlyLWVtYmVkLWlkXCI6IF92bS55b3V0dWJlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInVpLW1vZGFsXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogXCJzZWxlY3Rpb24tbW9kYWxcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkNob29zZSBhbiBleGlzdGluZyB2aWRlbyBmaWxlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInVpLXRhYmxlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGVuZHBvaW50OiBfdm0uZW5kcG9pbnQsXG4gICAgICAgICAgICAgIGlkOiBcInZpZGVvLWZpbGVzXCIsXG4gICAgICAgICAgICAgIFwic29ydC1ieVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgXCJzb3J0LWluXCI6IFwiZGVzY1wiLFxuICAgICAgICAgICAgICBcInBlci1wYWdlXCI6IDEwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS1yYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInNlbGVjdGlvbi1cIiArIHRhYmxlLnJlY29yZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzZWxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogdGFibGUucmVjb3JkLnVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9kZWwgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRhYmxlLnJlY29yZC5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiYnl0ZXNcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlbHBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJieXRlc1wiKSh0YWJsZS5yZWNvcmQuYnl0ZXMpKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZXh0ZW5zaW9uXCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWxwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGFibGUucmVjb3JkLmV4dGVuc2lvbikpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNyZWF0ZWRfYXRcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidWktZGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGltZXN0YW1wOiB0YWJsZS5yZWNvcmQuY3JlYXRlZF9hdCB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=