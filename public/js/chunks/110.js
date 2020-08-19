(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modals/UpdaterModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modals/UpdaterModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'updater-modal',
  props: {
    value: {
      type: [Object, Boolean],
      required: true
    }
  },
  computed: {
    version: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    confirm: function confirm() {
      //
      this.close();
    },
    close: function close() {
      this.version = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updater/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Updater/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Modals_UpdaterModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Modals/UpdaterModal */ "./resources/js/components/Modals/UpdaterModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'updater',
  components: {
    'updater-modal': _components_Modals_UpdaterModal__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      version: false,
      items: [
        /*
            {
                "id": 12,
                "title": "v6.0.0-beta.10",
                "url": "https://beta.getfusioncms.com/v600-beta10",
                "content_text": null,
                "date_published": "2020-07-28T15:53:07-07:00",
                "attachments": [
                    {
                        "url": "https://github.com/fusioncms/fusioncms/archive/v6.0.0-beta.10.zip",
                        "mime_type": "application/zip"
                    }
                ],
                "_log": {
                    "new": {
                        "New control panel theme with dark sidebar": [ 535 ],
                        "Replicator field backend": [ 607, 609 ],
                        "Ability to move fields between sections": [ 604 ]
                    },
                    "changed": {
                        "Improved name field UI/UX": [ 595 ],
                        "Moved \"Show name field\" to customize tab and adjust toggle": [ 613 ]
                    },
                    "fixed": {
                        "Upload field not working in settings interface": [ 615 ],
                        "Adding a new field assigns the field to the last fieldset section": [ 603 ],
                        "storage/app/themes directory not auto-generated": [ 606 ],
                        "Unable to change theme": [ 605 ],
                        "Installation fails when whitespace is present in application name": [ 598 ],
                        "Installation fails when referencing an old .env file": [ 597 ],
                        "Too many attempts error when working in the control panel": [ 594 ]
                    }
                }
            },
            {
                "id": 11,
                "title": "v6.0.0-beta.9",
                "url": "https://beta.getfusioncms.com/v600-beta9",
                "content_text": null,
                "date_published": "2020-07-15T12:51:02-07:00",
                "attachments": [
                    {
                        "url": null,
                        "mime_type": "application/zip"
                    }
                ]
            },
            {
                "id": 10,
                "title": "v6.0.0-beta.8",
                "url": "https://beta.getfusioncms.com/v600-beta8",
                "content_text": null,
                "date_published": "2020-07-09T14:36:23-07:00",
                "attachments": [
                    {
                        "url": "https://github.com/fusioncms/fusioncms/archive/v6.0.0-beta.8.zip",
                        "mime_type": "application/zip"
                    }
                ]
            }
            */
      ]
    };
  },
  computed: {
    current: function current() {
      return "v".concat(this.$store.state.fusion.version);
    },
    id: function id() {
      return this.findBy('title', this.current).id;
    }
  },
  methods: {
    findBy: function findBy(key, value) {
      return _.find(this.items, function (item) {
        return item[key] == value;
      });
    },
    upgrade: function upgrade(id) {
      this.version = this.findBy('id', id);
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.get('https://beta.getfusioncms.com/releases.json').then(function (feed) {
      return next(function (vm) {
        return vm.items = feed.data.items;
      });
    })["catch"](function (error) {});
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modals/UpdaterModal.vue?vue&type=template&id=c3cf221c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modals/UpdaterModal.vue?vue&type=template&id=c3cf221c& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "p-modal",
    {
      key: "updater_modal",
      attrs: { name: "updater", title: "Update to " + _vm.version.title },
      model: {
        value: !!this.version,
        callback: function($$v) {
          _vm.$set(!!this, "version", $$v)
        },
        expression: "!! this.version"
      }
    },
    [
      _c("p", [
        _vm._v(
          "Are you sure you want to switch to version " +
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updater/Index.vue?vue&type=template&id=0b133733&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Updater/Index.vue?vue&type=template&id=0b133733& ***!
  \***********************************************************************************************************************************************************************************************************/
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
        [_c("page-title", { attrs: { icon: "upload" } }, [_vm._v("Updater")])],
        1
      ),
      _vm._v(" "),
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
      _vm._l(_vm.items, function(item, i1) {
        return _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card__header flex items-center justify-between" },
            [
              _c("h3", { staticClass: "card__title" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(item.title) +
                    "\n\n                "
                ),
                _c("span", { staticClass: "text-xs block" }, [
                  _vm._v(
                    "\n                    Released " +
                      _vm._s(
                        _vm.$moment(item.date_published).format("MMM Do, YYYY")
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
                  item.id > _vm.id
                    ? _c(
                        "p-button",
                        {
                          on: {
                            click: function($event) {
                              return _vm.upgrade(item.id)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Upgrade to " +
                              _vm._s(item.title) +
                              "\n                "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  item.id == _vm.id
                    ? _c("p-button", { attrs: { disabled: "" } }, [
                        _vm._v(
                          "\n                    Current version\n                "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(item.attachments, function(attachment, i2) {
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
                          item.title,
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
              _c("p", [_vm._v(_vm._s(_vm.items.content_text))]),
              _vm._v(" "),
              _vm._l(item._log, function(logs, name) {
                return _c(
                  "div",
                  _vm._l(logs, function(issues, text) {
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
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c("updater-modal", {
            model: {
              value: _vm.version,
              callback: function($$v) {
                _vm.version = $$v
              },
              expression: "version"
            }
          })
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Modals/UpdaterModal.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Modals/UpdaterModal.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdaterModal_vue_vue_type_template_id_c3cf221c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdaterModal.vue?vue&type=template&id=c3cf221c& */ "./resources/js/components/Modals/UpdaterModal.vue?vue&type=template&id=c3cf221c&");
/* harmony import */ var _UpdaterModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdaterModal.vue?vue&type=script&lang=js& */ "./resources/js/components/Modals/UpdaterModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdaterModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdaterModal_vue_vue_type_template_id_c3cf221c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdaterModal_vue_vue_type_template_id_c3cf221c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Modals/UpdaterModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Modals/UpdaterModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Modals/UpdaterModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdaterModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdaterModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modals/UpdaterModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdaterModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Modals/UpdaterModal.vue?vue&type=template&id=c3cf221c&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Modals/UpdaterModal.vue?vue&type=template&id=c3cf221c& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdaterModal_vue_vue_type_template_id_c3cf221c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdaterModal.vue?vue&type=template&id=c3cf221c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modals/UpdaterModal.vue?vue&type=template&id=c3cf221c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdaterModal_vue_vue_type_template_id_c3cf221c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdaterModal_vue_vue_type_template_id_c3cf221c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Updater/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Updater/Index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_0b133733___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=0b133733& */ "./resources/js/pages/Updater/Index.vue?vue&type=template&id=0b133733&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Updater/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_0b133733___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_0b133733___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Updater/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Updater/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Updater/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updater/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Updater/Index.vue?vue&type=template&id=0b133733&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Updater/Index.vue?vue&type=template&id=0b133733& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0b133733___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=0b133733& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updater/Index.vue?vue&type=template&id=0b133733&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0b133733___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0b133733___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTW9kYWxzL1VwZGF0ZXJNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVyL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Nb2RhbHMvVXBkYXRlck1vZGFsLnZ1ZT82M2I0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVyL0luZGV4LnZ1ZT8zZDQzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL01vZGFscy9VcGRhdGVyTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL01vZGFscy9VcGRhdGVyTW9kYWwudnVlPzg0MjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTW9kYWxzL1VwZGF0ZXJNb2RhbC52dWU/NDgwNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXBkYXRlci9JbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VwZGF0ZXIvSW5kZXgudnVlPzRiZDIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VwZGF0ZXIvSW5kZXgudnVlP2RlMDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0EsdUJBREE7QUFHQTtBQUNBO0FBQ0EsNkJBREE7QUFFQTtBQUZBO0FBREEsR0FIQTtBQVVBO0FBQ0E7QUFDQSxTQURBLGlCQUNBO0FBQ0E7QUFDQSxPQUhBO0FBS0EsU0FMQSxlQUtBLEtBTEEsRUFLQTtBQUNBO0FBQ0E7QUFQQTtBQURBLEdBVkE7QUFzQkE7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFFQTtBQUNBLEtBTEE7QUFPQSxTQVBBLG1CQU9BO0FBQ0E7QUFDQTtBQVRBO0FB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d0NBQWtNLENBQWdCLHdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzExMC5qcz9pZD1jY2Q2ZmRiNDY2Y2E4YWNkZjkzNyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8cC1tb2RhbFxuICAgICAgICBrZXk9XCJ1cGRhdGVyX21vZGFsXCJcbiAgICAgICAgbmFtZT1cInVwZGF0ZXJcIlxuICAgICAgICA6dGl0bGU9XCJgVXBkYXRlIHRvICR7dmVyc2lvbi50aXRsZX1gXCJcbiAgICAgICAgdi1tb2RlbD1cIiEhIHRoaXMudmVyc2lvblwiPlxuXG4gICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzd2l0Y2ggdG8gdmVyc2lvbiB7eyB2ZXJzaW9uLnRpdGxlIH19PzwvcD5cbiAgICAgICAgXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8cC1idXR0b24gQGNsaWNrPVwiY29uZmlybVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIj5Db25maXJtPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwLWJ1dHRvbiBAY2xpY2s9XCJjbG9zZVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1yLTNcIj5DYW5jZWw8L3AtYnV0dG9uPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcC1tb2RhbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAndXBkYXRlci1tb2RhbCcsXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogW09iamVjdCxCb29sZWFuXSxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB2ZXJzaW9uOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY29uZmlybSgpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY2xvc2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPHBhZ2UtdGl0bGUgaWNvbj1cInVwbG9hZFwiPlVwZGF0ZXI8L3BhZ2UtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9iZXRhLmdldGZ1c2lvbmNtcy5jb20vY2hhbmdlbG9nXCIgdGl0bGU9XCJDaGFuZ2Vsb2dcIiB0YXJnZXQ9XCJfYmxhbmtcIj57eyBjdXJyZW50IH19PC9hPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHYtZm9yPVwiKGl0ZW0sIGkxKSBpbiBpdGVtc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2hlYWRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnRpdGxlIH19XG5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXhzIGJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWxlYXNlZCB7eyAkbW9tZW50KGl0ZW0uZGF0ZV9wdWJsaXNoZWQpLmZvcm1hdCgnTU1NIERvLCBZWVlZJykgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LWlmPVwiaXRlbS5pZCA8IGlkXCIgQGNsaWNrPVwiZG93bmdyYWRlKGl0ZW0uaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEb3duZ3JhZGUgdG8ge3sgaXRlbS50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAtLT5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIHVwZ3JhZGUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LWlmPVwiaXRlbS5pZCA+IGlkXCIgQGNsaWNrPVwidXBncmFkZShpdGVtLmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgVXBncmFkZSB0byB7eyBpdGVtLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvcC1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBjdXJyZW50IHZlcnNpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LWlmPVwiaXRlbS5pZCA9PSBpZFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudCB2ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIDwvcC1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBhdHRhY2htZW50cyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGEgIHYtZm9yPVwiKGF0dGFjaG1lbnQsIGkyKSBpbiBpdGVtLmF0dGFjaG1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJgYXR0YWNobWVudC0ke2kxfS0ke2kyfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uIG1sLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJhdHRhY2htZW50LnVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCJhdHRhY2htZW50Lm1pbWVfdHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gaWNvbj1cImRvd25sb2FkXCIgY2xhc3M9XCJpY29uXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBnaXRodWIgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxhICBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWljb24gbWwtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cImBodHRwczovL2dpdGh1Yi5jb20vZnVzaW9uY21zL2Z1c2lvbmNtcy9yZWxlYXNlcy90YWcvJHtpdGVtLnRpdGxlfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWaWV3IG9uIEdpdGh1YlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJjb2RlXCIgY2xhc3M9XCJpY29uXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICA8cD57eyBpdGVtcy5jb250ZW50X3RleHQgfX08L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwibG9ncywgbmFtZSBpbiBpdGVtLl9sb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtZm9yPVwiaXNzdWVzLCB0ZXh0IGluIGxvZ3NcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiPnt7IG5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRleHQgfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICB2LWZvcj1cImlzc3VlIGluIGlzc3Vlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItMSB0ZXh0LXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlzc3VlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJgaHR0cHM6Ly9naXRodWIuY29tL2Z1c2lvbmNtcy9mdXNpb25jbXMvaXNzdWVzLyR7aXNzdWV9YFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAje3sgaXNzdWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cIm1vZGFsc1wiPlxuICAgICAgICAgICAgPHVwZGF0ZXItbW9kYWwgdi1tb2RlbD1cInZlcnNpb25cIj48L3VwZGF0ZXItbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgVXBkYXRlck1vZGFsIGZyb20gJ0AvY29tcG9uZW50cy9Nb2RhbHMvVXBkYXRlck1vZGFsJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAndXBkYXRlcicsXG5cbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3VwZGF0ZXItbW9kYWwnOiBVcGRhdGVyTW9kYWxcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZlcnNpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJ2Ni4wLjAtYmV0YS4xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2JldGEuZ2V0ZnVzaW9uY21zLmNvbS92NjAwLWJldGExMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50X3RleHRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZV9wdWJsaXNoZWRcIjogXCIyMDIwLTA3LTI4VDE1OjUzOjA3LTA3OjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF0dGFjaG1lbnRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Z1c2lvbmNtcy9mdXNpb25jbXMvYXJjaGl2ZS92Ni4wLjAtYmV0YS4xMC56aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW1lX3R5cGVcIjogXCJhcHBsaWNhdGlvbi96aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl9sb2dcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmV3XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOZXcgY29udHJvbCBwYW5lbCB0aGVtZSB3aXRoIGRhcmsgc2lkZWJhclwiOiBbIDUzNSBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlcGxpY2F0b3IgZmllbGQgYmFja2VuZFwiOiBbIDYwNywgNjA5IF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWJpbGl0eSB0byBtb3ZlIGZpZWxkcyBiZXR3ZWVuIHNlY3Rpb25zXCI6IFsgNjA0IF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW1wcm92ZWQgbmFtZSBmaWVsZCBVSS9VWFwiOiBbIDU5NSBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1vdmVkIFxcXCJTaG93IG5hbWUgZmllbGRcXFwiIHRvIGN1c3RvbWl6ZSB0YWIgYW5kIGFkanVzdCB0b2dnbGVcIjogWyA2MTMgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaXhlZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVXBsb2FkIGZpZWxkIG5vdCB3b3JraW5nIGluIHNldHRpbmdzIGludGVyZmFjZVwiOiBbIDYxNSBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFkZGluZyBhIG5ldyBmaWVsZCBhc3NpZ25zIHRoZSBmaWVsZCB0byB0aGUgbGFzdCBmaWVsZHNldCBzZWN0aW9uXCI6IFsgNjAzIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZS9hcHAvdGhlbWVzIGRpcmVjdG9yeSBub3QgYXV0by1nZW5lcmF0ZWRcIjogWyA2MDYgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmFibGUgdG8gY2hhbmdlIHRoZW1lXCI6IFsgNjA1IF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5zdGFsbGF0aW9uIGZhaWxzIHdoZW4gd2hpdGVzcGFjZSBpcyBwcmVzZW50IGluIGFwcGxpY2F0aW9uIG5hbWVcIjogWyA1OTggXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbnN0YWxsYXRpb24gZmFpbHMgd2hlbiByZWZlcmVuY2luZyBhbiBvbGQgLmVudiBmaWxlXCI6IFsgNTk3IF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVG9vIG1hbnkgYXR0ZW1wdHMgZXJyb3Igd2hlbiB3b3JraW5nIGluIHRoZSBjb250cm9sIHBhbmVsXCI6IFsgNTk0IF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMTEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwidjYuMC4wLWJldGEuOVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2JldGEuZ2V0ZnVzaW9uY21zLmNvbS92NjAwLWJldGE5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRfdGV4dFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlX3B1Ymxpc2hlZFwiOiBcIjIwMjAtMDctMTVUMTI6NTE6MDItMDc6MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0YWNobWVudHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW1lX3R5cGVcIjogXCJhcHBsaWNhdGlvbi96aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJ2Ni4wLjAtYmV0YS44XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vYmV0YS5nZXRmdXNpb25jbXMuY29tL3Y2MDAtYmV0YThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudF90ZXh0XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVfcHVibGlzaGVkXCI6IFwiMjAyMC0wNy0wOVQxNDozNjoyMy0wNzowMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRhY2htZW50c1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9mdXNpb25jbXMvZnVzaW9uY21zL2FyY2hpdmUvdjYuMC4wLWJldGEuOC56aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW1lX3R5cGVcIjogXCJhcHBsaWNhdGlvbi96aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgY3VycmVudCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHYke3RoaXMuJHN0b3JlLnN0YXRlLmZ1c2lvbi52ZXJzaW9ufWBcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlkKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRCeSgndGl0bGUnLCB0aGlzLmN1cnJlbnQpLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZmluZEJ5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maW5kKHRoaXMuaXRlbXMsIChpdGVtKSA9PiBpdGVtW2tleV0gPT0gdmFsdWUpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1cGdyYWRlKGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gdGhpcy5maW5kQnkoJ2lkJywgaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2JldGEuZ2V0ZnVzaW9uY21zLmNvbS9yZWxlYXNlcy5qc29uJylcbiAgICAgICAgICAgICAgICAudGhlbigoZmVlZCkgPT4gbmV4dCh2bSA9PiB2bS5pdGVtcyA9IGZlZWQuZGF0YS5pdGVtcykpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwicC1tb2RhbFwiLFxuICAgIHtcbiAgICAgIGtleTogXCJ1cGRhdGVyX21vZGFsXCIsXG4gICAgICBhdHRyczogeyBuYW1lOiBcInVwZGF0ZXJcIiwgdGl0bGU6IFwiVXBkYXRlIHRvIFwiICsgX3ZtLnZlcnNpb24udGl0bGUgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiAhIXRoaXMudmVyc2lvbixcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgIF92bS4kc2V0KCEhdGhpcywgXCJ2ZXJzaW9uXCIsICQkdilcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCIhISB0aGlzLnZlcnNpb25cIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHN3aXRjaCB0byB2ZXJzaW9uIFwiICtcbiAgICAgICAgICAgIF92bS5fcyhfdm0udmVyc2lvbi50aXRsZSkgK1xuICAgICAgICAgICAgXCI/XCJcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgeyBzbG90OiBcImZvb3RlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY29uZmlybSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkNvbmZpcm1cIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW19jKFwicGFnZS10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwidXBsb2FkXCIgfSB9LCBbX3ZtLl92KFwiVXBkYXRlclwiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2JldGEuZ2V0ZnVzaW9uY21zLmNvbS9jaGFuZ2Vsb2dcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQ2hhbmdlbG9nXCIsXG4gICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmN1cnJlbnQpKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24oaXRlbSwgaTEpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2hlYWRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcblxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cyBibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFJlbGVhc2VkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJG1vbWVudChpdGVtLmRhdGVfcHVibGlzaGVkKS5mb3JtYXQoXCJNTU0gRG8sIFlZWVlcIilcbiAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgaXRlbS5pZCA+IF92bS5pZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBncmFkZShpdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBVcGdyYWRlIHRvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgPT0gX3ZtLmlkXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwLWJ1dHRvblwiLCB7IGF0dHJzOiB7IGRpc2FibGVkOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgQ3VycmVudCB2ZXJzaW9uXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbS5hdHRhY2htZW50cywgZnVuY3Rpb24oYXR0YWNobWVudCwgaTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhdHRhY2htZW50LVwiICsgaTEgKyBcIi1cIiArIGkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0taWNvbiBtbC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBhdHRhY2htZW50LnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGF0dGFjaG1lbnQubWltZV90eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiZG93bmxvYWRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1pY29uIG1sLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vZnVzaW9uY21zL2Z1c2lvbmNtcy9yZWxlYXNlcy90YWcvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVmlldyBvbiBHaXRodWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImNvZGVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbXMuY29udGVudF90ZXh0KSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0uX2xvZywgZnVuY3Rpb24obG9ncywgbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBfdm0uX2wobG9ncywgZnVuY3Rpb24oaXNzdWVzLCB0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRleHQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGlzc3VlcywgZnVuY3Rpb24oaXNzdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpc3N1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMSB0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2Z1c2lvbmNtcy9mdXNpb25jbXMvaXNzdWVzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpc3N1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidXBkYXRlci1tb2RhbFwiLCB7XG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZlcnNpb24sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0udmVyc2lvbiA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZlcnNpb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXBkYXRlck1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jM2NmMjIxYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9VcGRhdGVyTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9VcGRhdGVyTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjM2NmMjIxYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjM2NmMjIxYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjM2NmMjIxYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVXBkYXRlck1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jM2NmMjIxYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjM2NmMjIxYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTW9kYWxzL1VwZGF0ZXJNb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VwZGF0ZXJNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXBkYXRlck1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9VcGRhdGVyTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMzY2YyMjFjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGIxMzM3MzMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBiMTMzNzMzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBiMTMzNzMzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBiMTMzNzMzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGIxMzM3MzMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGIxMzM3MzMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9VcGRhdGVyL0luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGIxMzM3MzMmXCIiXSwic291cmNlUm9vdCI6IiJ9