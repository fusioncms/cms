(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Theme.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Theme.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default, getModels */
>>>>>>> 85f12c61069113d60a5aa14dc7e381f0aea9f63c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return getModels; });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
>>>>>>> 85f12c61069113d60a5aa14dc7e381f0aea9f63c
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0& ***!
  \***************************************************************************************************************************************************************************************************/
=======
//
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
  name: 'updates',
  data: function data() {
    return {
      version: false,
      versions: [],
      pagination: []
    };
  },
  computed: {
    current: function current() {
      return "v".concat(this.$store.state.fusion.version);
    },
    id: function id() {
      return this.findBy('title', this.current).id;
    },
    isConfirming: function isConfirming() {
      return !!this.version;
    }
  },
  methods: {
    findBy: function findBy(key, value) {
      return _.find(this.versions, function (version) {
        return version[key] == value;
      });
    },
    changePage: function changePage(page) {
      this.refresh(page);
    },
    upgrade: function upgrade(id) {
      this.version = this.findBy('id', id);
    },
    confirm: function confirm() {
      axios.post('/api/updates', {
        version: this.version
      }).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    close: function close() {
      this.version = false;
    },
    refresh: function refresh(page) {
      var _this = this;

      getModels(function (error, versions, pagination) {
        if (error) {
          toast(error.toString(), 'danger');
        } else {
          _this.versions = versions;
          _this.pagination = pagination;
        }
      }, page);
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getModels(function (error, versions, pagination) {
      if (error) {
        next(function (vm) {
          return toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.versions = versions;
          vm.pagination = pagination;
        });
      }
    });
  }
});
function getModels(callback) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  axios.all([axios.get("/api/updates?page=".concat(page))]).then(axios.spread(function (response) {
    callback(null, response.data.data, response.data.meta);
  }))["catch"](function (error) {
    callback(new Error('The requested resource could not be found'));
  });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates/Index.vue?vue&type=template&id=c0102c18&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Updates/Index.vue?vue&type=template&id=c0102c18& ***!
  \***********************************************************************************************************************************************************************************************************/
>>>>>>> 85f12c61069113d60a5aa14dc7e381f0aea9f63c
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
<<<<<<< HEAD
          _c(
            "router-link",
            {
              staticClass: "button",
              attrs: { to: { name: "themes.settings" } }
            },
            [_vm._v("Go Back")]
          )
=======
          _c("page-title", { attrs: { icon: "download" } }, [_vm._v("Updates")])
>>>>>>> 85f12c61069113d60a5aa14dc7e381f0aea9f63c
        ],
        1
      ),
      _vm._v(" "),
<<<<<<< HEAD
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
=======
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "a",
          {
            attrs: {
              href: "https://beta.getfusioncms.com/changelog",
              title: "Changelog",
              target: "_blank"
            }
          },
          [_vm._v(_vm._s(_vm.current))]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.versions, function(version, i1) {
        return _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card__header flex items-center justify-between" },
            [
              _c("h3", { staticClass: "card__title" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(version.title) +
                    "\n\n                "
                ),
                _c("span", { staticClass: "text-xs block" }, [
                  _vm._v(
                    "\n                    Released " +
                      _vm._s(
                        _vm
                          .$moment(version.date_published)
                          .format("MMM Do, YYYY")
                      ) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex items-center justify-start" },
                [
                  version._isCurrent
                    ? _c("p-button", { attrs: { disabled: "" } }, [
                        _vm._v(
                          "\n                    Current version\n                "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(version.attachments, function(attachment, i2) {
                    return _c(
                      "a",
                      {
                        key: "attachment-" + i1 + "-" + i2,
                        staticClass: "button button--icon ml-1",
                        attrs: {
                          href: attachment.url,
                          title: attachment.mime_type
                        }
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "icon",
                          attrs: { icon: "download" }
                        })
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "button button--icon ml-1",
                      attrs: {
                        href:
                          "https://github.com/fusioncms/fusioncms/releases/tag/" +
                          version.title,
                        title: "View on Github",
                        target: "_blank"
                      }
                    },
                    [
                      _c("fa-icon", {
                        staticClass: "icon",
                        attrs: { icon: "code" }
                      })
                    ],
                    1
                  )
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card__body" },
            [
              _c("p", [_vm._v(_vm._s(_vm.versions.content_text))]),
              _vm._v(" "),
              _vm._l(version._changelog, function(changelog, name) {
                return _c(
                  "div",
                  _vm._l(changelog, function(issues, text) {
                    return _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("span", { staticClass: "badge" }, [
                          _vm._v(_vm._s(name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col" },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(text) +
                              "\n\n                        "
                          ),
                          _vm._l(issues, function(issue) {
                            return _c(
                              "a",
                              {
                                key: issue,
                                staticClass: "mr-1 text-xs",
                                attrs: {
                                  href:
                                    "https://github.com/fusioncms/fusioncms/issues/" +
                                    issue,
                                  target: "_blank"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            #" +
                                    _vm._s(issue) +
                                    "\n                        "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  }),
                  0
                )
              })
            ],
            2
          )
        ])
      }),
      _vm._v(" "),
      _vm.pagination.total > 1
        ? _c(
            "div",
            { staticClass: "mt-6" },
            [
              _c("p-pagination", {
                attrs: {
                  total: _vm.pagination.last_page,
                  value: _vm.pagination.current_page
                },
                on: {
                  input: function($event) {
                    return _vm.changePage($event)
                  }
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c(
            "p-modal",
            {
              key: "updater_modal",
              attrs: {
                name: "updater",
                title: "Update to " + _vm.version.title
              },
              model: {
                value: _vm.isConfirming,
                callback: function($$v) {
                  _vm.isConfirming = $$v
                },
                expression: "isConfirming"
              }
            },
            [
              _c("p", [
                _vm._v(
                  "Are you sure you want to update to version " +
                    _vm._s(_vm.version.title) +
                    "?"
                )
              ]),
              _vm._v(" "),
              _c(
                "template",
                { slot: "footer" },
                [
                  _c(
                    "p-button",
                    {
                      staticClass: "button button--primary",
                      attrs: { type: "button" },
                      on: { click: _vm.confirm }
                    },
                    [_vm._v("Confirm")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p-button",
                    {
                      staticClass: "mr-3",
                      attrs: { type: "button" },
                      on: { click: _vm.close }
                    },
                    [_vm._v("Cancel")]
                  )
                ],
                1
              )
            ],
            2
          )
        ],
        1
>>>>>>> 85f12c61069113d60a5aa14dc7e381f0aea9f63c
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/pages/Theme.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Theme.vue ***!
  \**************************************/
/*! exports provided: default */
=======
/***/ "./resources/js/pages/Updates/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Updates/Index.vue ***!
  \**********************************************/
/*! exports provided: getModels, default */
>>>>>>> 85f12c61069113d60a5aa14dc7e381f0aea9f63c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Theme.vue?vue&type=template&id=ba239ce0& */ "./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0&");
/* harmony import */ var _Theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Theme.vue?vue&type=script&lang=js& */ "./resources/js/pages/Theme.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _Index_vue_vue_type_template_id_c0102c18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=c0102c18& */ "./resources/js/pages/Updates/Index.vue?vue&type=template&id=c0102c18&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getModels"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> 85f12c61069113d60a5aa14dc7e381f0aea9f63c





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _Theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_c0102c18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_c0102c18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 85f12c61069113d60a5aa14dc7e381f0aea9f63c
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/pages/Theme.vue"
=======
component.options.__file = "resources/js/pages/Updates/Index.vue"
>>>>>>> 85f12c61069113d60a5aa14dc7e381f0aea9f63c
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/pages/Theme.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Theme.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
=======
/***/ "./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default, getModels */
>>>>>>> 85f12c61069113d60a5aa14dc7e381f0aea9f63c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Theme.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Theme.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0& ***!
  \*********************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates/Index.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getModels"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Updates/Index.vue?vue&type=template&id=c0102c18&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Updates/Index.vue?vue&type=template&id=c0102c18& ***!
  \*****************************************************************************/
>>>>>>> 85f12c61069113d60a5aa14dc7e381f0aea9f63c
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Theme.vue?vue&type=template&id=ba239ce0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Theme.vue?vue&type=template&id=ba239ce0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Theme_vue_vue_type_template_id_ba239ce0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c0102c18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=c0102c18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates/Index.vue?vue&type=template&id=c0102c18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c0102c18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c0102c18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 85f12c61069113d60a5aa14dc7e381f0aea9f63c



/***/ })

}]);
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGhlbWUudnVlPzRjMTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGhlbWUudnVlPzNlZDIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZT9lNTBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBO0FBQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQURBO0FBU0EsTUFUQSxrQkFTQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSx5QkFGQTtBQUdBO0FBSEE7QUFLQSxHQWZBO0FBaUJBO0FBQ0EsZUFEQSx1QkFDQSxjQURBLEVBQ0E7QUFBQTs7QUFDQSxZQUNBLEtBREEsc0JBQ0EsY0FEQSxHQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxTQUZBOztBQUlBO0FBQ0EsT0FSQTtBQVNBLEtBWEE7QUFhQSxXQWJBLHFCQWFBO0FBQ0EsaUJBQ0Esd0JBREEsR0FFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLENBSUEsSUFKQSxDQUlBLElBSkEsRUFGQTtBQU9BLEtBckJBO0FBdUJBLGdCQXZCQSwwQkF1QkE7QUFBQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7O0FBQ0E7QUFDQSxPQU5BO0FBT0EsS0EvQkE7QUFpQ0EsaUJBakNBLDJCQWlDQTtBQUNBO0FBQ0EsS0FuQ0E7QUFxQ0EsZ0JBckNBLDBCQXFDQTtBQUNBO0FBQ0E7QUFDQSxLQXhDQTtBQTBDQSxnQkExQ0Esd0JBMENBLEtBMUNBLEVBMENBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLE9BSEEsQ0FLQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLE9BRkEsV0FFQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTs7QUFFQTs7QUFDQTtBQUNBO0FBQ0EsT0FYQTtBQVlBO0FBaEVBLEdBakJBO0FBb0ZBLGtCQXBGQSw0QkFvRkEsRUFwRkEsRUFvRkEsSUFwRkEsRUFvRkEsSUFwRkEsRUFvRkE7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBeEZBLEc7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDLDJCQUEyQixTQUFTLGtCQUFrQixFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBLFdBQVcsbUNBQW1DO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUJBQXFCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNkRBQTZEO0FBQzFFO0FBQ0EseUJBQXlCLHNCQUFzQjtBQUMvQztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBLDJCQUEyQiw0QkFBNEI7QUFDdkQsNkJBQTZCLHdDQUF3QztBQUNyRTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIseUNBQXlDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQXdEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLG1DQUFtQyw2QkFBNkI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsZ0JBQWdCLEVBQUU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNLDBCQUEwQjtBQUN0RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQTZDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUNBQXFDO0FBQy9ELHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUJBQWlCO0FBQzNDLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3SkE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXFMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvMTA5LmpzP2lkPTM5NDI4OWUxNDhmNTllNTc1MzM1Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPHBhZ2UtdGl0bGUgaWNvbj1cInBhbGV0dGVcIj5UaGVtZTwvcGFnZS10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHVpLXVwbG9hZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZS11cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVwbG9hZFwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cInVwbG9hZFwiXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cInppcFwiXG4gICAgICAgICAgICAgICAgICAgIDptdWx0aXBsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidmVyaWZ5VXBsb2FkXCJcbiAgICAgICAgICAgICAgICA+PC91aS11cGxvYWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtYi02IG1kOnctMS8yIHhsOnctMS80XCIgdi1mb3I9XCJ0aGVtZSBpbiB0aGVtZXNcIiA6a2V5PVwidGhlbWUubmFtZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3LWZ1bGwgcm91bmRlZC10IHNoYWRvd1wiIDpzcmM9XCJ0aGVtZS5wcmV2aWV3XCIgOmFsdD1cInRoZW1lLm5hbWVcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTJcIj57eyB0aGVtZS5uYW1lIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS04MDAgdGV4dC1iYXNlXCI+e3sgdGhlbWUuZGVzY3JpcHRpb24gfX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgYm9yZGVyLXQtMiBib3JkZXItZ3JheS0yMDAgcHQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1aS1idXR0b24gY2xhc3M9XCJ3LWZ1bGxcIiB2LWlmPVwiISB0aGVtZS5hY3RpdmVcIiBAY2xpY2s9XCJzZXRBc0FjdGl2ZSh0aGVtZS5uYW1lc3BhY2UpXCI+U2V0IGFzIGFjdGl2ZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIiB2LWVsc2U+Q3VycmVudGx5IEFjdGl2ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3RoZW1lcy5zZXR0aW5ncycgfVwiIGNsYXNzPVwiYnV0dG9uXCI+R28gQmFjazwvcm91dGVyLWxpbms+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDx1aS1tb2RhbCBuYW1lPVwiY29uZmlybVwiIHRpdGxlPVwiQ29uZmlybSBvdmVycmlkZVwiIGtleT1cImNvbmZpcm1fbW9kYWxcIiB2LW1vZGVsPVwiY29uZmlybU1vZGFsXCI+XG4gICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gb3ZlcnJpZGUgdGhpcyB0aGVtZT8gVGhlIGV4aXN0aW5nIHRoZW1lIHdpbGwgYmUgZGlzY2FyZGVkLjwvcD5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiBAY2xpY2s9XCJzdWJtaXRVcGxvYWRcIiB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInByaW1hcnlcIj5ZZXMsIHBsZWFzZSE8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIEBjbGljaz1cImNhbmNlbFVwbG9hZFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1yLTNcIj5MZWF2ZSBhbmQgRGlzY2FyZCBDaGFuZ2VzPC91aS1idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3VpLW1vZGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBoZWFkOiB7XG4gICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbm5lcjogJ1RoZW1lJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aGVtZXM6IFtdLFxuICAgICAgICAgICAgY29uZmlybU1vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIHVwbG9hZEZvcm06IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldEFzQWN0aXZlKHRoZW1lTmFtZXNwYWNlKSB7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5wYXRjaChgL2FwaS90aGVtZS8ke3RoZW1lTmFtZXNwYWNlfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfLmVhY2godGhpcy50aGVtZXMsICh0aGVtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUuYWN0aXZlID0gdGhlbWUubmFtZXNwYWNlID09PSB0aGVtZU5hbWVzcGFjZVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdBY3RpdmUgdGhlbWUgaGFzIGJlZW4gc2V0JywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVmcmVzaCgpIHtcbiAgICAgICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RoZW1lcycpLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKHRoZW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbWVzICAgICAgID0gdGhlbWVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkRm9ybSAgID0gbnVsbFxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybU1vZGFsID0gZmFsc2VcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSkpXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3VibWl0VXBsb2FkKCkge1xuICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS90aGVtZXMnLCB0aGlzLnVwbG9hZEZvcm0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9hc3QoJ1RoZW1lIHN1Y2Nlc3NmdWxseSB1cGxvYWRlZCEnLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Nb2RhbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBjb25maXJtVXBsb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtTW9kYWwgPSB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FuY2VsVXBsb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtTW9kYWwgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQucmVtb3ZlKClcbiAgICAgICAgfSxcblxuICAgICAgICB2ZXJpZnlVcGxvYWQoZmlsZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsZXMgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB1cGxvYWQgZm9ybS4uXG4gICAgICAgICAgICB0aGlzLnVwbG9hZEZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICAgICAgdGhpcy51cGxvYWRGb3JtLmFwcGVuZCgnX21ldGhvZCcsICdQT1NUJylcbiAgICAgICAgICAgIHRoaXMudXBsb2FkRm9ybS5hcHBlbmQoJ2ZpbGUtdXBsb2FkJywgZmlsZXMpXG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvdGhlbWVzL3ZlcmlmeScsIHRoaXMudXBsb2FkRm9ybSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFVwbG9hZCgpXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbJ2ZpbGUtdXBsb2FkJ11bMF0gPT0gJ0EgVGhlbWUgd2l0aCBtYXRjaGluZyBuYW1lIGFscmVhZHkgZXhpc3RzLicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtVXBsb2FkKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMudXBsb2FkLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMudXBsb2FkLnNldEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzWydmaWxlLXVwbG9hZCddWzBdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgbmV4dChmdW5jdGlvbih2bSkge1xuICAgICAgICAgICAgdm0ucmVmcmVzaCgpXG4gICAgICAgIH0pXG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJwYWxldHRlXCIgfSB9LCBbX3ZtLl92KFwiVGhlbWVcIildKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1aS11cGxvYWRcIiwge1xuICAgICAgICAgICAgICByZWY6IFwidXBsb2FkXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmaWxlLXVwbG9hZFwiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlVwbG9hZFwiLFxuICAgICAgICAgICAgICAgIGFjY2VwdDogXCJ6aXBcIixcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgaW5wdXQ6IF92bS52ZXJpZnlVcGxvYWQgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS50aGVtZXMsIGZ1bmN0aW9uKHRoZW1lKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsga2V5OiB0aGVtZS5uYW1lLCBzdGF0aWNDbGFzczogXCJjb2wgbWItNiBtZDp3LTEvMiB4bDp3LTEvNFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcm91bmRlZC10IHNoYWRvd1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiB0aGVtZS5wcmV2aWV3LCBhbHQ6IHRoZW1lLm5hbWUgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRoZW1lLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmF5LTgwMCB0ZXh0LWJhc2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGhlbWUuZGVzY3JpcHRpb24pKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGJvcmRlci10LTIgYm9yZGVyLWdyYXktMjAwIHB0LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgIXRoZW1lLmFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctZnVsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0QXNBY3RpdmUodGhlbWUubmFtZXNwYWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2V0IGFzIGFjdGl2ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDdXJyZW50bHkgQWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJ0aGVtZXMuc2V0dGluZ3NcIiB9IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidWktbW9kYWxcIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJjb25maXJtX21vZGFsXCIsXG4gICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjb25maXJtXCIsIHRpdGxlOiBcIkNvbmZpcm0gb3ZlcnJpZGVcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbmZpcm1Nb2RhbCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmNvbmZpcm1Nb2RhbCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29uZmlybU1vZGFsXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBvdmVycmlkZSB0aGlzIHRoZW1lPyBUaGUgZXhpc3RpbmcgdGhlbWUgd2lsbCBiZSBkaXNjYXJkZWQuXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgeyBzbG90OiBcImZvb3RlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgdmFyaWFudDogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc3VibWl0VXBsb2FkIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJZZXMsIHBsZWFzZSFcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItM1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jYW5jZWxVcGxvYWQgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkxlYXZlIGFuZCBEaXNjYXJkIENoYW5nZXNcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RoZW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYTIzOWNlMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UaGVtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RoZW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21hbmRhL1NpdGVzL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiYTIzOWNlMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiYTIzOWNlMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiYTIzOWNlMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGhlbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhMjM5Y2UwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JhMjM5Y2UwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvVGhlbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGVtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGhlbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RoZW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYTIzOWNlMCZcIiJdLCJzb3VyY2VSb290IjoiIn0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VwZGF0ZXMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVzL0luZGV4LnZ1ZT9kMzllIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXBkYXRlcy9JbmRleC52dWU/ZjYzNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXBkYXRlcy9JbmRleC52dWU/ZjVlMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1R0E7QUFDQSxpQkFEQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FUQTtBQVdBO0FBQ0EsV0FEQSxxQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLE1BTEEsZ0JBS0E7QUFDQTtBQUNBLEtBUEE7QUFTQSxnQkFUQSwwQkFTQTtBQUNBO0FBQ0E7QUFYQSxHQVhBO0FBeUJBO0FBQ0EsVUFEQSxrQkFDQSxHQURBLEVBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsS0FIQTtBQUtBLGNBTEEsc0JBS0EsSUFMQSxFQUtBO0FBQ0E7QUFDQSxLQVBBO0FBU0EsV0FUQSxtQkFTQSxFQVRBLEVBU0E7QUFDQTtBQUNBLEtBWEE7QUFhQSxXQWJBLHFCQWFBO0FBQ0E7QUFBQTtBQUFBLFNBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxPQUhBLFdBSUE7QUFDQTtBQUNBLE9BTkE7QUFPQSxLQXJCQTtBQXVCQSxTQXZCQSxtQkF1QkE7QUFDQTtBQUNBLEtBekJBO0FBMkJBLFdBM0JBLG1CQTJCQSxJQTNCQSxFQTJCQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BUEEsRUFPQSxJQVBBO0FBUUE7QUFwQ0EsR0F6QkE7QUFnRUEsa0JBaEVBLDRCQWdFQSxFQWhFQSxFQWdFQSxJQWhFQSxFQWdFQSxJQWhFQSxFQWdFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBO0FBSUE7QUFDQSxLQVRBO0FBVUE7QUEzRUE7QUE4RUE7QUFBQTtBQUNBLGFBQ0EsNENBREEsR0FFQSxJQUZBLENBRUE7QUFDQTtBQUNBLEdBRkEsQ0FGQSxXQUlBO0FBQ0E7QUFDQSxHQU5BO0FBT0EsQzs7Ozs7Ozs7Ozs7O0FDN0xBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxjQUFjLEVBQUU7QUFDbEM7QUFDQSw0QkFBNEIsU0FBUyxtQkFBbUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLGdCQUFnQixFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzQkFBc0I7QUFDaEQ7QUFDQTtBQUNBLGFBQWEsZ0VBQWdFO0FBQzdFO0FBQ0Esd0JBQXdCLDZCQUE2QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFpRDtBQUNsRTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVMsZUFBZSxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDRCQUE0QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxxQkFBcUI7QUFDM0QsaUNBQWlDLHFCQUFxQjtBQUN0RCxvQ0FBb0MsdUJBQXVCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxlQUFlLEVBQUU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy8xMDkuanM/aWQ9Yzc0Nzk4ZDk5MDI5MjFiYWI5M2UiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8cGFnZS10aXRsZSBpY29uPVwiZG93bmxvYWRcIj5VcGRhdGVzPC9wYWdlLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYmV0YS5nZXRmdXNpb25jbXMuY29tL2NoYW5nZWxvZ1wiIHRpdGxlPVwiQ2hhbmdlbG9nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgY3VycmVudCB9fTwvYT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiB2LWZvcj1cIih2ZXJzaW9uLCBpMSkgaW4gdmVyc2lvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19oZWFkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgdmVyc2lvbi50aXRsZSB9fVxuXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14cyBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVsZWFzZWQge3sgJG1vbWVudCh2ZXJzaW9uLmRhdGVfcHVibGlzaGVkKS5mb3JtYXQoJ01NTSBEbywgWVlZWScpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSB1cGdyYWRlIC0tXG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LWlmPVwidmVyc2lvbi5pZCA+IGlkXCIgQGNsaWNrPVwidXBncmFkZSh2ZXJzaW9uLmlkKVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgVXBncmFkZSB0byB7eyB2ZXJzaW9uLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gY3VycmVudCB2ZXJzaW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1pZj1cInZlcnNpb24uX2lzQ3VycmVudFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudCB2ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIDwvcC1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBhdHRhY2htZW50cyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGEgIHYtZm9yPVwiKGF0dGFjaG1lbnQsIGkyKSBpbiB2ZXJzaW9uLmF0dGFjaG1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJgYXR0YWNobWVudC0ke2kxfS0ke2kyfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uIG1sLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJhdHRhY2htZW50LnVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCJhdHRhY2htZW50Lm1pbWVfdHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gaWNvbj1cImRvd25sb2FkXCIgY2xhc3M9XCJpY29uXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBnaXRodWIgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhICBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWljb24gbWwtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cImBodHRwczovL2dpdGh1Yi5jb20vZnVzaW9uY21zL2Z1c2lvbmNtcy9yZWxlYXNlcy90YWcvJHt2ZXJzaW9uLnRpdGxlfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWaWV3IG9uIEdpdGh1YlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJjb2RlXCIgY2xhc3M9XCJpY29uXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICA8cD57eyB2ZXJzaW9ucy5jb250ZW50X3RleHQgfX08L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiY2hhbmdlbG9nLCBuYW1lIGluIHZlcnNpb24uX2NoYW5nZWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1mb3I9XCJpc3N1ZXMsIHRleHQgaW4gY2hhbmdlbG9nXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj57eyBuYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0ZXh0IH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAgdi1mb3I9XCJpc3N1ZSBpbiBpc3N1ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTEgdGV4dC14c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpc3N1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiYGh0dHBzOi8vZ2l0aHViLmNvbS9mdXNpb25jbXMvZnVzaW9uY21zL2lzc3Vlcy8ke2lzc3VlfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3t7IGlzc3VlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC02XCIgdi1pZj1cInBhZ2luYXRpb24udG90YWwgPiAxXCI+XG4gICAgICAgICAgICA8cC1wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgQGlucHV0PVwiY2hhbmdlUGFnZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICA6dG90YWw9XCJwYWdpbmF0aW9uLmxhc3RfcGFnZVwiXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwicGFnaW5hdGlvbi5jdXJyZW50X3BhZ2VcIlxuICAgICAgICAgICAgPjwvcC1wYWdpbmF0aW9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cG9ydGFsIHRvPVwibW9kYWxzXCI+XG4gICAgICAgICAgICA8cC1tb2RhbFxuICAgICAgICAgICAgICAgIGtleT1cInVwZGF0ZXJfbW9kYWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1cGRhdGVyXCJcbiAgICAgICAgICAgICAgICA6dGl0bGU9XCJgVXBkYXRlIHRvICR7dmVyc2lvbi50aXRsZX1gXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiaXNDb25maXJtaW5nXCI+XG5cbiAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXBkYXRlIHRvIHZlcnNpb24ge3sgdmVyc2lvbi50aXRsZSB9fT88L3A+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIEBjbGljaz1cImNvbmZpcm1cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCI+Q29uZmlybTwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBAY2xpY2s9XCJjbG9zZVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1yLTNcIj5DYW5jZWw8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICd1cGRhdGVzJyxcbiAgICAgICAgXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZlcnNpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnNpb25zOiBbXSxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBjdXJyZW50KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgdiR7dGhpcy4kc3RvcmUuc3RhdGUuZnVzaW9uLnZlcnNpb259YFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZEJ5KCd0aXRsZScsIHRoaXMuY3VycmVudCkuaWRcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzQ29uZmlybWluZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISEgdGhpcy52ZXJzaW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZmluZEJ5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maW5kKHRoaXMudmVyc2lvbnMsICh2ZXJzaW9uKSA9PiB2ZXJzaW9uW2tleV0gPT0gdmFsdWUpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjaGFuZ2VQYWdlKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2gocGFnZSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVwZ3JhZGUoaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSB0aGlzLmZpbmRCeSgnaWQnLCBpZClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNvbmZpcm0oKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS91cGRhdGVzJywgeyB2ZXJzaW9uOiB0aGlzLnZlcnNpb24gfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjbG9zZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSBmYWxzZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVmcmVzaChwYWdlKSB7XG4gICAgICAgICAgICAgICAgZ2V0TW9kZWxzKChlcnJvciwgdmVyc2lvbnMsIHBhZ2luYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci50b1N0cmluZygpLCAnZGFuZ2VyJylcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVyc2lvbnMgICA9IHZlcnNpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSBwYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBwYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGdldE1vZGVscygoZXJyb3IsIHZlcnNpb25zLCBwYWdpbmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB0b2FzdChlcnJvci50b1N0cmluZygpLCAnZGFuZ2VyJykpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnZlcnNpb25zICAgPSB2ZXJzaW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0ucGFnaW5hdGlvbiA9IHBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGVscyhjYWxsYmFjaywgcGFnZSA9IDEpIHtcbiAgICAgICAgYXhpb3MuYWxsKFtcbiAgICAgICAgICAgIGF4aW9zLmdldChgL2FwaS91cGRhdGVzP3BhZ2U9JHtwYWdlfWApXG4gICAgICAgIF0pLnRoZW4oYXhpb3Muc3ByZWFkKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UuZGF0YS5kYXRhLCByZXNwb25zZS5kYXRhLm1ldGEpXG4gICAgICAgIH0pKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBjb3VsZCBub3QgYmUgZm91bmQnKSlcbiAgICAgICAgfSlcbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBhZ2UtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImRvd25sb2FkXCIgfSB9LCBbX3ZtLl92KFwiVXBkYXRlc1wiKV0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9iZXRhLmdldGZ1c2lvbmNtcy5jb20vY2hhbmdlbG9nXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkNoYW5nZWxvZ1wiLFxuICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5jdXJyZW50KSldXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0udmVyc2lvbnMsIGZ1bmN0aW9uKHZlcnNpb24sIGkxKSB7XG4gICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkX19oZWFkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHZlcnNpb24udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG5cXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMgYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBSZWxlYXNlZCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KHZlcnNpb24uZGF0ZV9wdWJsaXNoZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJNTU0gRG8sIFlZWVlcIilcbiAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgdmVyc2lvbi5faXNDdXJyZW50XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwLWJ1dHRvblwiLCB7IGF0dHJzOiB7IGRpc2FibGVkOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgQ3VycmVudCB2ZXJzaW9uXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX2wodmVyc2lvbi5hdHRhY2htZW50cywgZnVuY3Rpb24oYXR0YWNobWVudCwgaTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhdHRhY2htZW50LVwiICsgaTEgKyBcIi1cIiArIGkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0taWNvbiBtbC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBhdHRhY2htZW50LnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGF0dGFjaG1lbnQubWltZV90eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiZG93bmxvYWRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1pY29uIG1sLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vZnVzaW9uY21zL2Z1c2lvbmNtcy9yZWxlYXNlcy90YWcvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVmlldyBvbiBHaXRodWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImNvZGVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udmVyc2lvbnMuY29udGVudF90ZXh0KSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKHZlcnNpb24uX2NoYW5nZWxvZywgZnVuY3Rpb24oY2hhbmdlbG9nLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIF92bS5fbChjaGFuZ2Vsb2csIGZ1bmN0aW9uKGlzc3VlcywgdGV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhuYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0ZXh0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChpc3N1ZXMsIGZ1bmN0aW9uKGlzc3VlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaXNzdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTEgdGV4dC14c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9mdXNpb25jbXMvZnVzaW9uY21zL2lzc3Vlcy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXNzdWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGFnaW5hdGlvbi50b3RhbCA+IDFcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTZcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInAtcGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRvdGFsOiBfdm0ucGFnaW5hdGlvbi5sYXN0X3BhZ2UsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2luYXRpb24uY3VycmVudF9wYWdlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVBhZ2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJ1cGRhdGVyX21vZGFsXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJ1cGRhdGVyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVXBkYXRlIHRvIFwiICsgX3ZtLnZlcnNpb24udGl0bGVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzQ29uZmlybWluZyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uaXNDb25maXJtaW5nID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzQ29uZmlybWluZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXBkYXRlIHRvIHZlcnNpb24gXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZlcnNpb24udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgXCI/XCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgeyBzbG90OiBcImZvb3RlclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jb25maXJtIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNvbmZpcm1cIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzAxMDJjMTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2MwMTAyYzE4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2MwMTAyYzE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2MwMTAyYzE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzAxMDJjMTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzAxMDJjMTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVzL0luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzAxMDJjMTgmXCIiXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> 85f12c61069113d60a5aa14dc7e381f0aea9f63c
