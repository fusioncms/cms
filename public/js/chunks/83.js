(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/FileManager/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/FileManager/Show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Form */ "./resources/js/services/Form.js");
/* harmony import */ var _mixins_filehelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/filehelper */ "./resources/js/mixins/filehelper.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        inner: this.file.name || 'Loading...'
      };
    }
  },
  mixins: [_mixins_filehelper__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      file: {},
      form: new _services_Form__WEBPACK_IMPORTED_MODULE_1__["default"](),
      player: null,
      loaded: false
    };
  },
  computed: {
    fileSrc: function fileSrc(file) {
      return "".concat(this.file.url, "?w=1500&h=1500&fit=max&t=").concat(this.$moment.utc(this.file.updated_at).format('X'));
    }
  },
  watch: {
    file: {
      handler: function handler(value) {
        var _this = this;

        this.$nextTick(function () {
          _this.player = new plyr__WEBPACK_IMPORTED_MODULE_0___default.a(_this.$refs.player, {
            title: _this.file.name,
            ratio: '16:9',
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
          });
        });
      },
      deep: true
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])({
    toggleSelection: 'filemanager/toggleFileSelection'
  })), {}, {
    getFile: function getFile(to, from, next) {
      var _this2 = this;

      axios.get('/api/files/' + to.params.uuid).then(function (response) {
        _this2.file = response.data.data;
        _this2.loaded = true;
        _this2.form = new _services_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
          name: _this2.file.name,
          title: _this2.file.title,
          alt: _this2.file.alt,
          caption: _this2.file.caption
        });

        _this2.toggleSelection(_this2.file.id);

        _this2.$emit('updateHead');
      });
    },
    submit: function submit() {
      var _this3 = this;

      this.form.patch("/api/files/".concat(this.file.id)).then(function (response) {
        _this3.file.name = _this3.form.name;
        toast('The file\'s information was successfully updated', 'success');
      })["catch"](function (error) {
        toast(error.response.data.message, 'danger');
      });
    },
    back: function back() {
      this.$router.push({
        name: 'file-manager.index'
      });
    },
    download: function download() {
      var _this4 = this;

      axios({
        url: "/api/files/".concat(this.file.uuid, "/download"),
        method: 'GET',
        responseType: 'blob'
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', "".concat(_this4.file.name, ".").concat(_this4.file.extension));
        document.body.appendChild(link);
        link.click();
      });
    }
  }),
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.getFile(to, from, next);
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    this.getFile(to, from, next);
    next();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/FileManager/Show.vue?vue&type=template&id=06853038&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/FileManager/Show.vue?vue&type=template&id=06853038& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "form-container",
    {
      scopedSlots: _vm._u([
        {
          key: "sidebar",
          fn: function() {
            return [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card__body" },
                  [
                    _c("ui-slug-group", {
                      attrs: {
                        name: "name",
                        label: "Filename",
                        autofocus: "",
                        required: "",
                        autocomplete: "off",
                        help: "The filename dictates the Share URL below.",
                        placeholder: "Filename",
                        "has-error": _vm.form.errors.has("name"),
                        "error-message": _vm.form.errors.get("name")
                      },
                      model: {
                        value: _vm.form.name,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "name", $$v)
                        },
                        expression: "form.name"
                      }
                    }),
                    _vm._v(" "),
                    _c("ui-input-group", {
                      attrs: {
                        name: "title",
                        label: "Title",
                        autocomplete: "off",
                        help:
                          "The title targets the title html attributes, which is a nice-to-have feature.",
                        placeholder: "Title (optional)",
                        "has-error": _vm.form.errors.has("title"),
                        "error-message": _vm.form.errors.get("title")
                      },
                      model: {
                        value: _vm.form.title,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "title", $$v)
                        },
                        expression: "form.title"
                      }
                    }),
                    _vm._v(" "),
                    _c("ui-input-group", {
                      attrs: {
                        name: "alt",
                        label: "Alt",
                        autocomplete: "off",
                        placeholder: "Alt (optional)",
                        help:
                          "This value targets the alt html attributes, required for accessibility.",
                        "has-error": _vm.form.errors.has("alt"),
                        "error-message": _vm.form.errors.get("alt")
                      },
                      model: {
                        value: _vm.form.alt,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "alt", $$v)
                        },
                        expression: "form.alt"
                      }
                    }),
                    _vm._v(" "),
                    _c("ui-textarea-group", {
                      attrs: {
                        name: "caption",
                        label: "Caption",
                        help:
                          "This caption is used for image captions to give users more information.",
                        placeholder: "Caption (optional)",
                        "has-error": _vm.form.errors.has("caption"),
                        "error-message": _vm.form.errors.get("caption")
                      },
                      model: {
                        value: _vm.form.caption,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "caption", $$v)
                        },
                        expression: "form.caption"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card__body" },
                  [
                    _c("ui-input-group", {
                      staticClass: "text-sm",
                      attrs: {
                        name: "share",
                        readonly: "",
                        label: "Share",
                        value: _vm.file.url
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm.file.created_at
                ? _c(
                    "ui-definition-list",
                    [
                      _c("ui-definition", { attrs: { name: "Size" } }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm._f("bytes")(_vm.file.bytes)) +
                            "\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("ui-definition", { attrs: { name: "Mimetype" } }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.file.mimetype) +
                            "\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _vm.file.dimensions
                        ? _c(
                            "ui-definition",
                            { attrs: { name: "Dimensions" } },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.file.dimensions.width) +
                                  " x " +
                                  _vm._s(_vm.file.dimensions.height) +
                                  "\n            "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "ui-definition",
                        { attrs: { name: "Last Modified" } },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(
                                _vm
                                  .$moment(_vm.file.created_at.date)
                                  .format("L")
                              ) +
                              "\n            "
                          )
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("page-title", {
            attrs: { icon: "image" },
            domProps: { textContent: _vm._s(_vm.form.name) }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "div",
          { staticClass: "buttons" },
          [
            _c(
              "ui-button",
              {
                directives: [
                  { name: "modal", rawName: "v-modal:delete", arg: "delete" }
                ],
                attrs: { variant: "primary" }
              },
              [_vm._v("Delete")]
            ),
            _vm._v(" "),
            _c(
              "ui-button",
              {
                directives: [
                  {
                    name: "modal",
                    rawName: "v-modal:move-file",
                    arg: "move-file"
                  }
                ]
              },
              [_vm._v("Move")]
            ),
            _vm._v(" "),
            _c(
              "ui-button",
              {
                directives: [
                  {
                    name: "modal",
                    rawName: "v-modal:replace-file",
                    arg: "replace-file"
                  }
                ]
              },
              [_vm._v("Replace")]
            ),
            _vm._v(" "),
            _c(
              "ui-button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.download($event)
                  }
                }
              },
              [_vm._v("Download")]
            ),
            _vm._v(" "),
            _c(
              "ui-button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.back($event)
                  }
                }
              },
              [_vm._v("Go Back")]
            ),
            _vm._v(" "),
            _c(
              "ui-button",
              {
                attrs: { variant: "primary" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.submit($event)
                  }
                }
              },
              [_vm._v("Save")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c("move-file-modal"),
          _vm._v(" "),
          _c("replace-file-modal", {
            attrs: { file: _vm.file },
            on: {
              replaced: function(replacement) {
                return (_vm.file = replacement)
              }
            }
          }),
          _vm._v(" "),
          _c("delete-file-modal", { attrs: { file: _vm.file } })
        ],
        1
      ),
      _vm._v(" "),
      _vm.loaded
        ? _c("div", { key: _vm.file.name, staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card__body flex items-center justify-center" },
              [
                _vm.file.type == "image"
                  ? _c(
                      "div",
                      [
                        _c("ui-img", {
                          staticClass: "rounded",
                          attrs: {
                            src: _vm.fileSrc,
                            alt: _vm.file.alt,
                            "background-color": "#ffffff"
                          }
                        })
                      ],
                      1
                    )
                  : _vm.file.type == "video"
                  ? _c("div", { staticClass: "w-full" }, [
                      _c(
                        "video",
                        {
                          ref: "player",
                          attrs: { controls: "", crossorigin: "" }
                        },
                        [
                          _c("source", {
                            attrs: {
                              src: _vm.file.url,
                              type: _vm.file.mimetype,
                              size: "576"
                            }
                          })
                        ]
                      )
                    ])
                  : _vm.file.type == "audio"
                  ? _c("div", [
                      _c("audio", { attrs: { controls: "" } }, [
                        _c("source", {
                          attrs: { src: _vm.file.url, type: _vm.file.mimetype }
                        })
                      ])
                    ])
                  : _c(
                      "div",
                      [
                        _c("ui-img", {
                          attrs: {
                            src:
                              "/vendor/fusion/img/" +
                              _vm.file.type +
                              "-small.svg",
                            "background-color": "#ffffff",
                            width: 200,
                            height: 200,
                            alt: _vm.file.alt
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "text-center px-6 py-3 rounded border border-gray-400 bg-gray-200 text-gray-800"
                          },
                          [
                            _vm._v(
                              "\n                    No preview available\n                "
                            )
                          ]
                        )
                      ],
                      1
                    )
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.file.type == "video"
        ? _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card__body text-center text-sm text-gray-800" },
              [
                _vm._v(
                  "\n            If you intend on serving this video on your website, it's highly recommended that you use a 3rd party service such as "
                ),
                _c("a", { attrs: { href: "" } }, [_vm._v("Youtube")]),
                _vm._v(" or "),
                _c("a", { attrs: { href: "" } }, [_vm._v("Vimeo")]),
                _vm._v(".\n        ")
              ]
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/FileManager/Show.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/FileManager/Show.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_06853038___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=06853038& */ "./resources/js/pages/FileManager/Show.vue?vue&type=template&id=06853038&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/FileManager/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_06853038___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_06853038___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/FileManager/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/FileManager/Show.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/FileManager/Show.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/FileManager/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/FileManager/Show.vue?vue&type=template&id=06853038&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/FileManager/Show.vue?vue&type=template&id=06853038& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_06853038___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=06853038& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/FileManager/Show.vue?vue&type=template&id=06853038&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_06853038___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_06853038___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0ZpbGVNYW5hZ2VyL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9GaWxlTWFuYWdlci9TaG93LnZ1ZT82NDM1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9GaWxlTWFuYWdlci9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRmlsZU1hbmFnZXIvU2hvdy52dWU/YmYzOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRmlsZU1hbmFnZXIvU2hvdy52dWU/MGVmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0SkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLHNFQVRBO0FBV0EsTUFYQSxrQkFXQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLHdFQUZBO0FBR0Esa0JBSEE7QUFJQTtBQUpBO0FBTUEsR0FsQkE7QUFvQkE7QUFDQSxXQURBLG1CQUNBLElBREEsRUFDQTtBQUNBO0FBQ0E7QUFIQSxHQXBCQTtBQTBCQTtBQUNBO0FBQ0EsYUFEQSxtQkFDQSxLQURBLEVBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQSx5QkFGQTtBQUdBLHVCQUNBLFlBREEsRUFDQTtBQUNBLHFCQUZBLEVBRUE7QUFDQSxrQkFIQSxFQUdBO0FBQ0Esc0JBSkEsRUFJQTtBQUNBLDBCQUxBLEVBS0E7QUFDQSxzQkFOQSxF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QUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy84My5qcz9pZD04MzJjZjIwMTY3MDBiZmMwNGZjOSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8Zm9ybS1jb250YWluZXI+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPHBhZ2UtdGl0bGUgaWNvbj1cImltYWdlXCIgdi10ZXh0PVwiZm9ybS5uYW1lXCI+PC9wYWdlLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdi1tb2RhbDpkZWxldGU+RGVsZXRlPC91aS1idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtbW9kYWw6bW92ZS1maWxlPk1vdmU8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtbW9kYWw6cmVwbGFjZS1maWxlPlJlcGxhY2U8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIEBjbGljay5wcmV2ZW50PVwiZG93bmxvYWRcIj5Eb3dubG9hZDwvdWktYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiBAY2xpY2sucHJldmVudD1cImJhY2tcIj5HbyBCYWNrPC91aS1idXR0b24+XG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCI+U2F2ZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDxtb3ZlLWZpbGUtbW9kYWw+PC9tb3ZlLWZpbGUtbW9kYWw+XG5cbiAgICAgICAgICAgIDxyZXBsYWNlLWZpbGUtbW9kYWwgOmZpbGU9XCJmaWxlXCIgQHJlcGxhY2VkPVwicmVwbGFjZW1lbnQgPT4gZmlsZSA9IHJlcGxhY2VtZW50XCI+PC9yZXBsYWNlLWZpbGUtbW9kYWw+XG5cbiAgICAgICAgICAgIDxkZWxldGUtZmlsZS1tb2RhbCA6ZmlsZT1cImZpbGVcIj48L2RlbGV0ZS1maWxlLW1vZGFsPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHYtaWY9XCJsb2FkZWRcIiA6a2V5PVwiZmlsZS5uYW1lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImZpbGUudHlwZSA9PSAnaW1hZ2UnXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJmaWxlU3JjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJmaWxlLmFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC91aS1pbWc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cImZpbGUudHlwZSA9PSAndmlkZW8nXCIgY2xhc3M9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHZpZGVvIHJlZj1cInBsYXllclwiIGNvbnRyb2xzIGNyb3Nzb3JpZ2luPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSA6c3JjPVwiZmlsZS51cmxcIiA6dHlwZT1cImZpbGUubWltZXR5cGVcIiBzaXplPVwiNTc2XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cImZpbGUudHlwZSA9PSAnYXVkaW8nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhdWRpbyBjb250cm9scz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgOnNyYz1cImZpbGUudXJsXCIgOnR5cGU9XCJmaWxlLm1pbWV0eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYXVkaW8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIicvdmVuZG9yL2Z1c2lvbi9pbWcvJyArIGZpbGUudHlwZSArICctc21hbGwuc3ZnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6d2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiZmlsZS5hbHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC91aS1pbWc+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHB4LTYgcHktMyByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS00MDAgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gcHJldmlldyBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiB2LWlmPVwiZmlsZS50eXBlID09ICd2aWRlbydcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5IHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgIElmIHlvdSBpbnRlbmQgb24gc2VydmluZyB0aGlzIHZpZGVvIG9uIHlvdXIgd2Vic2l0ZSwgaXQncyBoaWdobHkgcmVjb21tZW5kZWQgdGhhdCB5b3UgdXNlIGEgM3JkIHBhcnR5IHNlcnZpY2Ugc3VjaCBhcyA8YSBocmVmPVwiXCI+WW91dHViZTwvYT4gb3IgPGEgaHJlZj1cIlwiPlZpbWVvPC9hPi5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnNpZGViYXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1zbHVnLWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZpbGVuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhlIGZpbGVuYW1lIGRpY3RhdGVzIHRoZSBTaGFyZSBVUkwgYmVsb3cuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsZW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLXNsdWctZ3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoZSB0aXRsZSB0YXJnZXRzIHRoZSB0aXRsZSBodG1sIGF0dHJpYnV0ZXMsIHdoaWNoIGlzIGEgbmljZS10by1oYXZlIGZlYXR1cmUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGUgKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCd0aXRsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCd0aXRsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFsdCAob3B0aW9uYWwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGlzIHZhbHVlIHRhcmdldHMgdGhlIGFsdCBodG1sIGF0dHJpYnV0ZXMsIHJlcXVpcmVkIGZvciBhY2Nlc3NpYmlsaXR5LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdhbHQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnYWx0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uYWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgPHVpLXRleHRhcmVhLWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoaXMgY2FwdGlvbiBpcyB1c2VkIGZvciBpbWFnZSBjYXB0aW9ucyB0byBnaXZlIHVzZXJzIG1vcmUgaW5mb3JtYXRpb24uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2FwdGlvbiAob3B0aW9uYWwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2NhcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnY2FwdGlvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPC91aS10ZXh0YXJlYS1ncm91cD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoYXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNoYXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJmaWxlLnVybFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDx1aS1kZWZpbml0aW9uLWxpc3Qgdi1pZj1cImZpbGUuY3JlYXRlZF9hdFwiPlxuICAgICAgICAgICAgICAgIDx1aS1kZWZpbml0aW9uIG5hbWU9XCJTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZpbGUuYnl0ZXMgfCBieXRlcyB9fVxuICAgICAgICAgICAgICAgIDwvdWktZGVmaW5pdGlvbj5cblxuICAgICAgICAgICAgICAgIDx1aS1kZWZpbml0aW9uIG5hbWU9XCJNaW1ldHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBmaWxlLm1pbWV0eXBlIH19XG4gICAgICAgICAgICAgICAgPC91aS1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHVpLWRlZmluaXRpb24gbmFtZT1cIkRpbWVuc2lvbnNcIiB2LWlmPVwiZmlsZS5kaW1lbnNpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZpbGUuZGltZW5zaW9ucy53aWR0aCB9fSB4IHt7IGZpbGUuZGltZW5zaW9ucy5oZWlnaHQgfX1cbiAgICAgICAgICAgICAgICA8L3VpLWRlZmluaXRpb24+XG5cbiAgICAgICAgICAgICAgICA8dWktZGVmaW5pdGlvbiBuYW1lPVwiTGFzdCBNb2RpZmllZFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyAkbW9tZW50KGZpbGUuY3JlYXRlZF9hdC5kYXRlKS5mb3JtYXQoJ0wnKSB9fVxuICAgICAgICAgICAgICAgIDwvdWktZGVmaW5pdGlvbj5cbiAgICAgICAgICAgIDwvdWktZGVmaW5pdGlvbi1saXN0PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZm9ybS1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBQbHlyICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdwbHlyJ1xuICAgIGltcG9ydCBGb3JtICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Gb3JtJ1xuICAgIGltcG9ydCBGaWxlSGVscGVyTWl4aW4gICAgICAgICAgICBmcm9tICcuLi8uLi9taXhpbnMvZmlsZWhlbHBlcidcbiAgICBpbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6IHRoaXMuZmlsZS5uYW1lIHx8ICdMb2FkaW5nLi4uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtaXhpbnM6IFsgRmlsZUhlbHBlck1peGluIF0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlsZToge30sXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0sXG4gICAgICAgICAgICAgICAgcGxheWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGZpbGVTcmMoZmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmZpbGUudXJsfT93PTE1MDAmaD0xNTAwJmZpdD1tYXgmdD0ke3RoaXMuJG1vbWVudC51dGModGhpcy5maWxlLnVwZGF0ZWRfYXQpLmZvcm1hdCgnWCcpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgZmlsZToge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGx5cih0aGlzLiRyZWZzLnBsYXllciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbzogJzE2OjknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGF5LWxhcmdlJywgICAvLyBUaGUgbGFyZ2UgcGxheSBidXR0b24gaW4gdGhlIGNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdGFydCcsICAgICAgLy8gUmVzdGFydCBwbGF5YmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxheScsICAgICAgICAgLy8gUGxheS9wYXVzZSBwbGF5YmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvZ3Jlc3MnLCAgICAgLy8gVGhlIHByb2dyZXNzIGJhciBhbmQgc2NydWJiZXIgZm9yIHBsYXliYWNrIGFuZCBidWZmZXJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2N1cnJlbnQtdGltZScsIC8vIFRoZSBjdXJyZW50IHRpbWUgb2YgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2R1cmF0aW9uJywgICAgIC8vIFRoZSBmdWxsIGR1cmF0aW9uIG9mIHRoZSBtZWRpYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbXV0ZScsICAgICAgICAgLy8gVG9nZ2xlIG11dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZvbHVtZScsICAgICAgIC8vIFZvbHVtZSBjb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXB0aW9ucycsICAgICAvLyBUb2dnbGUgY2FwdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NldHRpbmdzJywgICAgIC8vIFNldHRpbmdzIG1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BpcCcsICAgICAgICAgIC8vIFBpY3R1cmUtaW4tcGljdHVyZSAoY3VycmVudGx5IFNhZmFyaSBvbmx5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWlycGxheScsICAgICAgLy8gQWlycGxheSAoY3VycmVudGx5IFNhZmFyaSBvbmx5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnVsbHNjcmVlbicsICAgLy8gVG9nZ2xlIGZ1bGxzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBbJ3F1YWxpdHknLCAnbG9vcCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgLi4ubWFwQWN0aW9ucyh7XG4gICAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0aW9uOiAnZmlsZW1hbmFnZXIvdG9nZ2xlRmlsZVNlbGVjdGlvbicsXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgZ2V0RmlsZSh0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9maWxlcy8nICsgdG8ucGFyYW1zLnV1aWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlICAgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtICAgPSBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5maWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZmlsZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IHRoaXMuZmlsZS5hbHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogdGhpcy5maWxlLmNhcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHRoaXMuZmlsZS5pZClcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhdGNoKGAvYXBpL2ZpbGVzLyR7dGhpcy5maWxlLmlkfWApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlLm5hbWUgPSB0aGlzLmZvcm0ubmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCgnVGhlIGZpbGVcXCdzIGluZm9ybWF0aW9uIHdhcyBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsICdzdWNjZXNzJylcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdkYW5nZXInKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYmFjaygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2ZpbGUtbWFuYWdlci5pbmRleCd9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZG93bmxvYWQoKSB7XG4gICAgICAgICAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAvYXBpL2ZpbGVzLyR7dGhpcy5maWxlLnV1aWR9L2Rvd25sb2FkYCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgYCR7dGhpcy5maWxlLm5hbWV9LiR7dGhpcy5maWxlLmV4dGVuc2lvbn1gKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgICAgICAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIG5leHQodm0gPT4ge1xuICAgICAgICAgICAgICAgIHZtLmdldEZpbGUodG8sIGZyb20sIG5leHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlVXBkYXRlKHRvLGZyb20sbmV4dCkge1xuICAgICAgICAgICAgdGhpcy5nZXRGaWxlKHRvLCBmcm9tLCBuZXh0KVxuXG4gICAgICAgICAgICBuZXh0KClcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJmb3JtLWNvbnRhaW5lclwiLFxuICAgIHtcbiAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcInNpZGViYXJcIixcbiAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1zbHVnLWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJGaWxlbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwOiBcIlRoZSBmaWxlbmFtZSBkaWN0YXRlcyB0aGUgU2hhcmUgVVJMIGJlbG93LlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRmlsZW5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhlIHRpdGxlIHRhcmdldHMgdGhlIHRpdGxlIGh0bWwgYXR0cmlidXRlcywgd2hpY2ggaXMgYSBuaWNlLXRvLWhhdmUgZmVhdHVyZS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlRpdGxlIChvcHRpb25hbClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJ0aXRsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwidGl0bGVcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInRpdGxlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJBbHQgKG9wdGlvbmFsKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGlzIHZhbHVlIHRhcmdldHMgdGhlIGFsdCBodG1sIGF0dHJpYnV0ZXMsIHJlcXVpcmVkIGZvciBhY2Nlc3NpYmlsaXR5LlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImFsdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiYWx0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmFsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiYWx0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInVpLXRleHRhcmVhLWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjYXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDYXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoaXMgY2FwdGlvbiBpcyB1c2VkIGZvciBpbWFnZSBjYXB0aW9ucyB0byBnaXZlIHVzZXJzIG1vcmUgaW5mb3JtYXRpb24uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDYXB0aW9uIChvcHRpb25hbClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJjYXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJjYXB0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNhcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImNhcHRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hhcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2hhcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsZS51cmxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5maWxlLmNyZWF0ZWRfYXRcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInVpLWRlZmluaXRpb24tbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1kZWZpbml0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJTaXplXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9mKFwiYnl0ZXNcIikoX3ZtLmZpbGUuYnl0ZXMpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1kZWZpbml0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJNaW1ldHlwZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5maWxlLm1pbWV0eXBlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbGUuZGltZW5zaW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLWRlZmluaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiRGltZW5zaW9uc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZpbGUuZGltZW5zaW9ucy53aWR0aCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHggXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmlsZS5kaW1lbnNpb25zLmhlaWdodCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWktZGVmaW5pdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcIkxhc3QgTW9kaWZpZWRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KF92bS5maWxlLmNyZWF0ZWRfYXQuZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiTFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdKVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBhZ2UtdGl0bGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJpbWFnZVwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5mb3JtLm5hbWUpIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicG9ydGFsXCIsIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7IG5hbWU6IFwibW9kYWxcIiwgcmF3TmFtZTogXCJ2LW1vZGFsOmRlbGV0ZVwiLCBhcmc6IFwiZGVsZXRlXCIgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJwcmltYXJ5XCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiRGVsZXRlXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6bW92ZS1maWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGFyZzogXCJtb3ZlLWZpbGVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIk1vdmVcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpyZXBsYWNlLWZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgYXJnOiBcInJlcGxhY2UtZmlsZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVwbGFjZVwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRvd25sb2FkKCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJEb3dubG9hZFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmJhY2soJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwibW9kYWxzXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJtb3ZlLWZpbGUtbW9kYWxcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInJlcGxhY2UtZmlsZS1tb2RhbFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBmaWxlOiBfdm0uZmlsZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgcmVwbGFjZWQ6IGZ1bmN0aW9uKHJlcGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfdm0uZmlsZSA9IHJlcGxhY2VtZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRlbGV0ZS1maWxlLW1vZGFsXCIsIHsgYXR0cnM6IHsgZmlsZTogX3ZtLmZpbGUgfSB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5sb2FkZWRcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IGtleTogX3ZtLmZpbGUubmFtZSwgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLmZpbGUudHlwZSA9PSBcImltYWdlXCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInVpLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5maWxlU3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLmZpbGUuYWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5maWxlLnR5cGUgPT0gXCJ2aWRlb1wiXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWRlb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwicGxheWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbnRyb2xzOiBcIlwiLCBjcm9zc29yaWdpbjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNvdXJjZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmZpbGUudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogX3ZtLmZpbGUubWltZXR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjU3NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLmZpbGUudHlwZSA9PSBcImF1ZGlvXCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYXVkaW9cIiwgeyBhdHRyczogeyBjb250cm9sczogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic291cmNlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uZmlsZS51cmwsIHR5cGU6IF92bS5maWxlLm1pbWV0eXBlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInVpLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdmVuZG9yL2Z1c2lvbi9pbWcvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbGUudHlwZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1zbWFsbC5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5maWxlLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWNlbnRlciBweC02IHB5LTMgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIGJnLWdyYXktMjAwIHRleHQtZ3JheS04MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIE5vIHByZXZpZXcgYXZhaWxhYmxlXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmZpbGUudHlwZSA9PSBcInZpZGVvXCJcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5IHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTgwMFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIElmIHlvdSBpbnRlbmQgb24gc2VydmluZyB0aGlzIHZpZGVvIG9uIHlvdXIgd2Vic2l0ZSwgaXQncyBoaWdobHkgcmVjb21tZW5kZWQgdGhhdCB5b3UgdXNlIGEgM3JkIHBhcnR5IHNlcnZpY2Ugc3VjaCBhcyBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJcIiB9IH0sIFtfdm0uX3YoXCJZb3V0dWJlXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIG9yIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIlwiIH0gfSwgW192bS5fdihcIlZpbWVvXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiLlxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ODUzMDM4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDY4NTMwMzgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDY4NTMwMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDY4NTMwMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ODUzMDM4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA2ODUzMDM4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvRmlsZU1hbmFnZXIvU2hvdy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ODUzMDM4JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==