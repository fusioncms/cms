(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'video-fieldtype',
  mixins: [_mixins_fieldtypes_field__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_filehelper__WEBPACK_IMPORTED_MODULE_1__["default"]],
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
    model: {
      get: function get() {
        return this.value || '';
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        "ui-field-group",
        {
          attrs: {
            name: _vm.field.handle,
            fieldId: _vm.field.handle + "-field",
            label: _vm.field.name,
            required: _vm.field.required,
            help: _vm.field.help,
            hasError: _vm.hasError,
            errorMessage: _vm.errorMessage
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
                  required: _vm.field.required,
                  "has-error": _vm.hasError,
                  "error-message": _vm.errorMessage,
                  "aria-required": _vm.field.required,
                  "aria-describedby": _vm.field.help
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



/***/ }),

/***/ "./resources/js/components/Fieldtypes/Video/Field.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Video/Field.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_0551f101___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=0551f101& */ "./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_0551f101___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_0551f101___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Video/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_0551f101___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=0551f101& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Video/Field.vue?vue&type=template&id=0551f101&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_0551f101___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_0551f101___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/fieldtypes/field.js":
/*!*************************************************!*\
  !*** ./resources/js/mixins/fieldtypes/field.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
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
    hasError: function hasError() {
      return this.errors && this.errors.has(this.field.handle);
    },
    errorMessage: function errorMessage() {
      return this.errors ? this.errors.get(this.field.handle) : '';
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9WaWRlby9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9WaWRlby9GaWVsZC52dWU/MDdmYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1ZpZGVvL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1ZpZGVvL0ZpZWxkLnZ1ZT8yNmJhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvVmlkZW8vRmllbGQudnVlP2YzY2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9maWVsZHR5cGVzL2ZpZWxkLmpzIl0sIm5hbWVzIjpbInByb3BzIiwiZmllbGQiLCJ0eXBlIiwiT2JqZWN0IiwicmVxdWlyZWQiLCJ2YWx1ZSIsImVycm9ycyIsImNvbXB1dGVkIiwiaGFzRXJyb3IiLCJoYXMiLCJoYW5kbGUiLCJlcnJvck1lc3NhZ2UiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRkE7QUFDQTtBQUNBO0FBRUE7QUFDQSx5QkFEQTtBQUdBLHdJQUhBO0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0Esd0NBREE7QUFFQSxnQkFGQTtBQUdBO0FBQ0Esd0JBREE7QUFFQTtBQUNBLG1CQUNBLFlBREEsRUFDQTtBQUNBLGlCQUZBLEVBRUE7QUFDQSxjQUhBLEVBR0E7QUFDQSxrQkFKQSxFQUlBO0FBQ0Esc0JBTEEsRUFLQTtBQUNBLGtCQU5BLEVBTUE7QUFDQSxjQVBBLEVBT0E7QUFDQSxnQkFSQSxFQVFBO0FBQ0Es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LCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHVpLWZpZWxkLWdyb3VwXG4gICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgICA6ZmllbGRJZD1cImAke2ZpZWxkLmhhbmRsZX0tZmllbGRgXCJcbiAgICAgICAgICAgIDpsYWJlbD1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgOnJlcXVpcmVkPVwiZmllbGQucmVxdWlyZWRcIlxuICAgICAgICAgICAgOmhlbHA9XCJmaWVsZC5oZWxwXCJcbiAgICAgICAgICAgIDpoYXNFcnJvcj1cImhhc0Vycm9yXCJcbiAgICAgICAgICAgIDplcnJvck1lc3NhZ2U9XCJlcnJvck1lc3NhZ2VcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPHVpLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGQtaW5wdXQgZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICA6aWQ9XCJmaWVsZC5oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgIDpoZWxwPVwiZmllbGQuaGVscFwiXG4gICAgICAgICAgICAgICAgICAgIDpyZXF1aXJlZD1cImZpZWxkLnJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImhhc0Vycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJlcnJvck1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICA6YXJpYS1yZXF1aXJlZD1cImZpZWxkLnJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgOmFyaWEtZGVzY3JpYmVkYnk9XCJmaWVsZC5oZWxwXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGVsXCI+XG4gICAgICAgICAgICAgICAgPC91aS1pbnB1dD5cblxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24gaWNvbiB2LW1vZGFsOnNlbGVjdGlvbi1tb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdwbHVzLWNpcmNsZSddXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5DaG9vc2UgYW4gZXhpc3RpbmcgdmlkZW8gZmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3VpLWJ1dHRvbj5cblxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24gaWNvbiBAY2xpY2s9XCJjbGVhclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3RpbWVzJ11cIiBjbGFzcz1cIm1yLTFcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkNsZWFyIGZpZWxkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdWktYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdWktZmllbGQtZ3JvdXA+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwiaXNFbWJlZGRlZFZpZGVvXCI+XG4gICAgICAgICAgICA8dWktcGx5ciA6b3B0aW9ucz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8dmlkZW8gY29udHJvbHMgY3Jvc3NvcmlnaW4+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgOnNyYz1cIm1vZGVsXCIgc2l6ZT1cIjU3NlwiPlxuICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICA8L3VpLXBseXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgdi1pZj1cImlzWW91dHViZVZpZGVvXCI+XG4gICAgICAgICAgICA8dWktcGx5ciA6b3B0aW9ucz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtcGx5ci1wcm92aWRlcj1cInlvdXR1YmVcIiA6ZGF0YS1wbHlyLWVtYmVkLWlkPVwieW91dHViZVwiPjwvZGl2PlxuICAgICAgICAgICAgPC91aS1wbHlyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dWktbW9kYWwgbmFtZT1cInNlbGVjdGlvbi1tb2RhbFwiIHRpdGxlPVwiQ2hvb3NlIGFuIGV4aXN0aW5nIHZpZGVvIGZpbGVcIj5cbiAgICAgICAgICAgIDx1aS10YWJsZSA6ZW5kcG9pbnQ9XCJlbmRwb2ludFwiIGlkPVwidmlkZW8tZmlsZXNcIiBzb3J0LWJ5PVwibmFtZVwiIHNvcnQtaW49XCJkZXNjXCIgOnBlci1wYWdlPVwiMTBcIj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5hbWVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLXJhZGlvXG4gICAgICAgICAgICAgICAgICAgICAgICA6aWQ9XCJgc2VsZWN0aW9uLSR7dGFibGUucmVjb3JkLmlkfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bmF0aXZlLXZhbHVlPVwidGFibGUucmVjb3JkLnVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibW9kZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRhYmxlLnJlY29yZC5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgIDwvdWktcmFkaW8+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiYnl0ZXNcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwXCI+e3sgdGFibGUucmVjb3JkLmJ5dGVzIHwgYnl0ZXMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZXh0ZW5zaW9uXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscFwiPnt7IHRhYmxlLnJlY29yZC5leHRlbnNpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiY3JlYXRlZF9hdFwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktZGF0ZSA6dGltZXN0YW1wPVwidGFibGUucmVjb3JkLmNyZWF0ZWRfYXRcIj48L3VpLWRhdGU+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWktdGFibGU+XG4gICAgICAgIDwvdWktbW9kYWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBGaWVsZE1peGluIGZyb20gJ0AvbWl4aW5zL2ZpZWxkdHlwZXMvZmllbGQnXG4gICAgaW1wb3J0IEZpbGVIZWxwZXIgZnJvbSAnQC9taXhpbnMvZmlsZWhlbHBlcidcbiAgICBpbXBvcnQgUGx5ciBmcm9tICdwbHlyJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndmlkZW8tZmllbGR0eXBlJyxcblxuICAgICAgICBtaXhpbnM6IFtGaWVsZE1peGluLCBGaWxlSGVscGVyXSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogJy9kYXRhdGFibGUvZmlsZXMvdmlkZW8nLFxuICAgICAgICAgICAgICAgIHBsYXllcjoge30sXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1ByZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAvLyByYXRpbzogJzE2OjknLFxuICAgICAgICAgICAgICAgICAgICBjb250cm9sczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYXktbGFyZ2UnLCAgIC8vIFRoZSBsYXJnZSBwbGF5IGJ1dHRvbiBpbiB0aGUgY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVzdGFydCcsICAgICAgLy8gUmVzdGFydCBwbGF5YmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYXknLCAgICAgICAgIC8vIFBsYXkvcGF1c2UgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICdwcm9ncmVzcycsICAgICAvLyBUaGUgcHJvZ3Jlc3MgYmFyIGFuZCBzY3J1YmJlciBmb3IgcGxheWJhY2sgYW5kIGJ1ZmZlcmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2N1cnJlbnQtdGltZScsIC8vIFRoZSBjdXJyZW50IHRpbWUgb2YgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICdkdXJhdGlvbicsICAgICAvLyBUaGUgZnVsbCBkdXJhdGlvbiBvZiB0aGUgbWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICdtdXRlJywgICAgICAgICAvLyBUb2dnbGUgbXV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZvbHVtZScsICAgICAgIC8vIFZvbHVtZSBjb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2FwdGlvbnMnLCAgICAgLy8gVG9nZ2xlIGNhcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAnc2V0dGluZ3MnLCAgICAgLy8gU2V0dGluZ3MgbWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BpcCcsICAgICAgICAgIC8vIFBpY3R1cmUtaW4tcGljdHVyZSAoY3VycmVudGx5IFNhZmFyaSBvbmx5KVxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FpcnBsYXknLCAgICAgIC8vIEFpcnBsYXkgKGN1cnJlbnRseSBTYWZhcmkgb25seSlcbiAgICAgICAgICAgICAgICAgICAgICAgICdmdWxsc2NyZWVuJywgICAvLyBUb2dnbGUgZnVsbHNjcmVlblxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogWydxdWFsaXR5JywgJ2xvb3AnXSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcblx0XHRcdG1vZGVsOiB7XG5cdFx0XHRcdGdldCgpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZSB8fCAnJ1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpXG5cdFx0XHRcdH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzRW1iZWRkZWRWaWRlbygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLm1vZGVsKSAmJiAhIHRoaXMueW91dHViZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNZb3V0dWJlVmlkZW8oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5tb2RlbCkgJiYgdGhpcy55b3V0dWJlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB5b3V0dWJlKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0V4cCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj18XFw/dj0pKFteI1xcJlxcP10qKS4qLztcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gdGhpcy5tb2RlbC5tYXRjaChyZWdFeHApXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzJdLmxlbmd0aCA9PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzJdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuXHRcdG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGNsZWFyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSAnJ1xuICAgICAgICAgICAgfVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInVpLWZpZWxkLWdyb3VwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSxcbiAgICAgICAgICAgIGZpZWxkSWQ6IF92bS5maWVsZC5oYW5kbGUgKyBcIi1maWVsZFwiLFxuICAgICAgICAgICAgbGFiZWw6IF92bS5maWVsZC5uYW1lLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IF92bS5maWVsZC5yZXF1aXJlZCxcbiAgICAgICAgICAgIGhlbHA6IF92bS5maWVsZC5oZWxwLFxuICAgICAgICAgICAgaGFzRXJyb3I6IF92bS5oYXNFcnJvcixcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogX3ZtLmVycm9yTWVzc2FnZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInVpLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWVsZC1pbnB1dCBmaWVsZFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogX3ZtLmZpZWxkLmhhbmRsZSxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICBoZWxwOiBfdm0uZmllbGQuaGVscCxcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBfdm0uZmllbGQucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uaGFzRXJyb3IsXG4gICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1yZXF1aXJlZFwiOiBfdm0uZmllbGQucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogX3ZtLmZpZWxkLmhlbHBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGVsLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0ubW9kZWwgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGVsXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6c2VsZWN0aW9uLW1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInNlbGVjdGlvbi1tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInBsdXMtY2lyY2xlXCJdIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic3Itb25seVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2hvb3NlIGFuIGV4aXN0aW5nIHZpZGVvIGZpbGVcIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBpY29uOiBcIlwiIH0sIG9uOiB7IGNsaWNrOiBfdm0uY2xlYXIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTFcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGltZXNcIl0gfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic3Itb25seVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2xlYXIgZmllbGRcIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pc0VtYmVkZGVkVmlkZW9cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidWktcGx5clwiLCB7IGF0dHJzOiB7IG9wdGlvbnM6IF92bS5vcHRpb25zIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidmlkZW9cIiwgeyBhdHRyczogeyBjb250cm9sczogXCJcIiwgY3Jvc3NvcmlnaW46IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNvdXJjZVwiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLm1vZGVsLCBzaXplOiBcIjU3NlwiIH0gfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmlzWW91dHViZVZpZGVvXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInVpLXBseXJcIiwgeyBhdHRyczogeyBvcHRpb25zOiBfdm0ub3B0aW9ucyB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcImRhdGEtcGx5ci1wcm92aWRlclwiOiBcInlvdXR1YmVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXBseXItZW1iZWQtaWRcIjogX3ZtLnlvdXR1YmVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidWktbW9kYWxcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBcInNlbGVjdGlvbi1tb2RhbFwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiQ2hvb3NlIGFuIGV4aXN0aW5nIHZpZGVvIGZpbGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktdGFibGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgZW5kcG9pbnQ6IF92bS5lbmRwb2ludCxcbiAgICAgICAgICAgICAgaWQ6IFwidmlkZW8tZmlsZXNcIixcbiAgICAgICAgICAgICAgXCJzb3J0LWJ5XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICBcInNvcnQtaW5cIjogXCJkZXNjXCIsXG4gICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogMTBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLXJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic2VsZWN0aW9uLVwiICsgdGFibGUucmVjb3JkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNlbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiB0YWJsZS5yZWNvcmQudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb2RlbCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGFibGUucmVjb3JkLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJieXRlc1wiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVscFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fZihcImJ5dGVzXCIpKHRhYmxlLnJlY29yZC5ieXRlcykpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJleHRlbnNpb25cIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlbHBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0YWJsZS5yZWNvcmQuZXh0ZW5zaW9uKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY3JlYXRlZF9hdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1kYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aW1lc3RhbXA6IHRhYmxlLnJlY29yZC5jcmVhdGVkX2F0IH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDU1MWYxMDEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA1NTFmMTAxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA1NTFmMTAxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA1NTFmMTAxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDU1MWYxMDEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDU1MWYxMDEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvVmlkZW8vRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTUxZjEwMSZcIiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHt9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaGFzRXJyb3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMgJiZcbiAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5oYXModGhpcy5maWVsZC5oYW5kbGUpXG4gICAgICAgIH0sXG5cbiAgICAgICAgZXJyb3JNZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzID9cbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5nZXQodGhpcy5maWVsZC5oYW5kbGUpIDogJydcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9