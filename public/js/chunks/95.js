(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Modules/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Modules/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        inner: 'Add-on Modules'
      };
    }
  },
  data: function data() {
    return {
      endpoint: '/datatable/modules'
    };
  },
  methods: {
    upload: function upload(files) {
      var _this = this;

      if (typeof files == 'undefined') {
        return;
      }

      var formData = new FormData();
      formData.append('_method', 'POST');
      formData.append('file-upload', files);
      axios.post('/api/modules/upload', formData).then(function (response) {
        _this.$proton.$emit('toggle-modal-upload-module');

        _this.$refs.upload.remove();

        _this.refresh('Module successfully uploaded.');
      })["catch"](function (error) {
        return _this.refresh(error.response.data.message, 'danger');
      });
    },
    enable: function enable(slug) {
      var _this2 = this;

      axios.post("/api/modules/".concat(slug, "/enable")).then(function (response) {
        _this2.refresh('Module successfully enabled.');

        if (response.data.data.redirect.enable) {
          _this2.$router.push(response.data.data.redirect.enable);
        }
      })["catch"](function (error) {
        return _this2.refresh(error.response.data.message, 'danger');
      });
    },
    disable: function disable(slug) {
      var _this3 = this;

      axios.post("/api/modules/".concat(slug, "/disable")).then(function (response) {
        return _this3.refresh('Module successfully disabled.');
      })["catch"](function (error) {
        return _this3.refresh(error.response.data.message, 'danger');
      });
    },
    install: function install(slug) {
      var _this4 = this;

      axios.post("/api/modules/".concat(slug, "/install")).then(function (response) {
        _this4.refresh('Module successfully installed.');

        if (response.data.data.redirect.install) {
          location.href = "/".concat(config.path, "/").concat(response.data.data.redirect.install);
        }
      })["catch"](function (error) {
        return _this4.refresh(error.response.data.message, 'danger');
      });
    },
    uninstall: function uninstall(slug) {
      var _this5 = this;

      axios.post("/api/modules/".concat(slug, "/uninstall")).then(function (response) {
        return _this5.refresh('Module successfully removed.');
      })["catch"](function (error) {
        return _this5.refresh(error.response.data.message, 'danger');
      });
    },
    update: function update(slug) {
      var _this6 = this;

      axios.patch("/api/modules/".concat(slug, "/update")).then(function (response) {
        return _this6.refresh('Module successfully updated.');
      })["catch"](function (error) {
        return _this6.refresh(error.response.data.message, 'danger');
      });
    },
    seed: function seed(slug) {
      var _this7 = this;

      axios.patch("/api/modules/".concat(slug, "/seed")).then(function (response) {
        return _this7.refresh('Module successfully seeded.');
      })["catch"](function (error) {
        return _this7.refresh(error.response.data.message, 'danger');
      });
    },
    refresh: function refresh() {
      var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
      if (msg) toast(msg, status);
      this.$store.dispatch('navigation/fetchAdminNavigation');
      proton().$emit('refresh-datatable-modules');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Modules/Index.vue?vue&type=template&id=e84d86ca&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Modules/Index.vue?vue&type=template&id=e84d86ca& ***!
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
        [
          _c("app-title", { attrs: { icon: "project-diagram" } }, [
            _vm._v("Add-on Modules")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _c(
            "p-button",
            {
              directives: [
                {
                  name: "modal",
                  rawName: "v-modal:upload-module",
                  arg: "upload-module"
                }
              ],
              staticClass: "button"
            },
            [_vm._v("Upload Module")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "content-container" },
          [
            _c("p-table", {
              key: "modules_table",
              attrs: {
                endpoint: _vm.endpoint,
                id: "modules",
                "sort-by": "name",
                "no-search": "",
                "primary-key": "handle"
              },
              scopedSlots: _vm._u([
                {
                  key: "name",
                  fn: function(table) {
                    return [
                      _c(
                        "div",
                        { staticClass: "flex items-center" },
                        [
                          table.record.registered && table.record.installed
                            ? _c("p-status", {
                                staticClass: "mr-2",
                                attrs: { value: table.record.enabled }
                              })
                            : _c(
                                "span",
                                {
                                  staticClass: "mr-2",
                                  class: [
                                    table.record.registered
                                      ? "text-gray-500"
                                      : "text-warning-500"
                                  ]
                                },
                                [
                                  _c("fa-icon", {
                                    staticClass: "icon fa-xs",
                                    attrs: { icon: "circle" }
                                  })
                                ],
                                1
                              ),
                          _vm._v(
                            "\n\n                        " +
                              _vm._s(table.record.name) +
                              "\n                    "
                          )
                        ],
                        1
                      )
                    ]
                  }
                },
                {
                  key: "slug",
                  fn: function(table) {
                    return [
                      _vm._v(
                        "\n                    " +
                          _vm._s(table.record.slug) +
                          "\n                "
                      )
                    ]
                  }
                },
                {
                  key: "version",
                  fn: function(table) {
                    return [
                      _c("span", { staticClass: "badge" }, [
                        _vm._v(_vm._s(table.record.version))
                      ])
                    ]
                  }
                },
                {
                  key: "description",
                  fn: function(table) {
                    return [
                      _c("span", { staticClass: "text-gray-800 text-sm" }, [
                        _vm._v(_vm._s(table.record.description))
                      ])
                    ]
                  }
                },
                {
                  key: "actions",
                  fn: function(table) {
                    return [
                      table.record.registered
                        ? _c(
                            "p-actions",
                            {
                              key: "module_" + table.record.id + "_actions",
                              attrs: {
                                id: "module_" + table.record.id + "_actions"
                              }
                            },
                            [
                              table.record.installed
                                ? [
                                    table.record.enabled
                                      ? _c(
                                          "p-dropdown-link",
                                          {
                                            on: {
                                              click: function($event) {
                                                return _vm.disable(
                                                  table.record.slug
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Disable")]
                                        )
                                      : _c(
                                          "p-dropdown-link",
                                          {
                                            on: {
                                              click: function($event) {
                                                return _vm.enable(
                                                  table.record.slug
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Enable")]
                                        ),
                                    _vm._v(" "),
                                    table.record.enabled
                                      ? _c(
                                          "p-dropdown-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: "setting.section",
                                                params: {
                                                  section: table.record.slug
                                                }
                                              }
                                            }
                                          },
                                          [_vm._v("Settings")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    table.record.enabled
                                      ? _c(
                                          "p-dropdown-link",
                                          {
                                            on: {
                                              click: function($event) {
                                                return _vm.seed(
                                                  table.record.slug
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Seed")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    table.record.enabled
                                      ? _c(
                                          "p-dropdown-link",
                                          {
                                            directives: [
                                              {
                                                name: "modal",
                                                rawName:
                                                  "v-modal:update-module",
                                                value: table.record,
                                                expression: "table.record",
                                                arg: "update-module"
                                              }
                                            ],
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                Update\n                            "
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "p-dropdown-link",
                                      {
                                        directives: [
                                          {
                                            name: "modal",
                                            rawName: "v-modal:uninstall-module",
                                            value: table.record,
                                            expression: "table.record",
                                            arg: "uninstall-module"
                                          }
                                        ],
                                        attrs: { classes: "link--danger" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Uninstall\n                            "
                                        )
                                      ]
                                    )
                                  ]
                                : [
                                    _c(
                                      "p-dropdown-link",
                                      {
                                        directives: [
                                          {
                                            name: "modal",
                                            rawName: "v-modal:install-module",
                                            value: table.record,
                                            expression: "table.record",
                                            arg: "install-module"
                                          }
                                        ],
                                        attrs: { classes: "link--success" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Install\n                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p-dropdown-link",
                                      {
                                        directives: [
                                          {
                                            name: "modal",
                                            rawName: "v-modal:uninstall-module",
                                            value: table.record,
                                            expression: "table.record",
                                            arg: "uninstall-module"
                                          }
                                        ],
                                        attrs: { classes: "link--danger" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Remove\n                            "
                                        )
                                      ]
                                    )
                                  ]
                            ],
                            2
                          )
                        : _vm._e()
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c(
            "p-modal",
            {
              key: "uninstall_module",
              attrs: { name: "uninstall-module", title: "Uninstall Module" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(module) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:uninstall-module",
                              arg: "uninstall-module"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.uninstall(module.data.slug)
                            }
                          }
                        },
                        [_vm._v("Uninstall")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:uninstall-module",
                              arg: "uninstall-module"
                            }
                          ]
                        },
                        [_vm._v("Cancel")]
                      )
                    ]
                  }
                }
              ])
            },
            [
              _c("p", [_vm._v("All assets and data will be removed.")]),
              _vm._v(" "),
              _c("p", [
                _vm._v("Are you sure you want to uninstall this module?")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "p-modal",
            {
              key: "install_module",
              attrs: { name: "install-module", title: "Install Module" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(module) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:install-module",
                              arg: "install-module"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "success" },
                          on: {
                            click: function($event) {
                              return _vm.install(module.data.slug)
                            }
                          }
                        },
                        [_vm._v("Install")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:install-module",
                              arg: "install-module"
                            }
                          ]
                        },
                        [_vm._v("Cancel")]
                      )
                    ]
                  }
                }
              ])
            },
            [_c("p", [_vm._v("Are you sure you want to install this module?")])]
          ),
          _vm._v(" "),
          _c(
            "p-modal",
            {
              key: "update_module",
              attrs: { name: "update-module", title: "Update Module" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(module) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:update-module",
                              arg: "update-module"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "warning" },
                          on: {
                            click: function($event) {
                              return _vm.update(module.data.slug)
                            }
                          }
                        },
                        [_vm._v("Update")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:update-module",
                              arg: "update-module"
                            }
                          ]
                        },
                        [_vm._v("Cancel")]
                      )
                    ]
                  }
                }
              ])
            },
            [
              _c("p", [
                _vm._v("This will migrate any new migrations and run db:seed.")
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Are you sure you want to proceed?")])
            ]
          ),
          _vm._v(" "),
          _c(
            "p-modal",
            {
              key: "upload_module",
              attrs: { name: "upload-module", title: "Upload Module" }
            },
            [
              _c("p-upload", {
                ref: "upload",
                attrs: { name: "file-upload", accept: "zip", multiple: false },
                on: { input: _vm.upload }
              })
            ],
            1
          )
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

/***/ "./resources/js/views/Modules/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Modules/Index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_e84d86ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=e84d86ca& */ "./resources/js/views/Modules/Index.vue?vue&type=template&id=e84d86ca&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/Modules/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_e84d86ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_e84d86ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Modules/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Modules/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Modules/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Modules/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Modules/Index.vue?vue&type=template&id=e84d86ca&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Modules/Index.vue?vue&type=template&id=e84d86ca& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_e84d86ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=e84d86ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Modules/Index.vue?vue&type=template&id=e84d86ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_e84d86ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_e84d86ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL01vZHVsZXMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Nb2R1bGVzL0luZGV4LnZ1ZT8wOGNhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Nb2R1bGVzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTW9kdWxlcy9JbmRleC52dWU/Yzk3MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTW9kdWxlcy9JbmRleC52dWU/MDk3NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNIQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQWJBO0FBZUE7QUFDQSxVQURBLGtCQUNBLEtBREEsRUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQSxrREFDQSxJQURBLENBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBLE9BTEEsV0FNQTtBQUFBO0FBQUEsT0FOQTtBQU9BLEtBbEJBO0FBb0JBLFVBcEJBLGtCQW9CQSxJQXBCQSxFQW9CQTtBQUFBOztBQUNBLDBEQUNBLElBREEsQ0FDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BUEEsV0FRQTtBQUFBO0FBQUEsT0FSQTtBQVNBLEtBOUJBO0FBZ0NBLFdBaENBLG1CQWdDQSxJQWhDQSxFQWdDQTtBQUFBOztBQUNBLDJEQUNBLElBREEsQ0FDQTtBQUFBO0FBQUEsT0FEQSxXQUVBO0FBQUE7QUFB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YjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQXNEO0FBQzlFLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvOTUuanM/aWQ9MGEzMzM3ZjJmYWVmZTIwMWE5ZDgiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8YXBwLXRpdGxlIGljb249XCJwcm9qZWN0LWRpYWdyYW1cIj5BZGQtb24gTW9kdWxlczwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6dXBsb2FkLW1vZHVsZSBjbGFzcz1cImJ1dHRvblwiPlVwbG9hZCBNb2R1bGU8L3AtYnV0dG9uPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cC10YWJsZSA6ZW5kcG9pbnQ9XCJlbmRwb2ludFwiIGlkPVwibW9kdWxlc1wiIHNvcnQtYnk9XCJuYW1lXCIgbm8tc2VhcmNoIHByaW1hcnkta2V5PVwiaGFuZGxlXCIga2V5PVwibW9kdWxlc190YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5hbWVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwidGFibGUucmVjb3JkLnJlZ2lzdGVyZWQgJiYgdGFibGUucmVjb3JkLmluc3RhbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInRhYmxlLnJlY29yZC5lbmFibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXN0YXR1cz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZSBjbGFzcz1cIm1yLTJcIiA6Y2xhc3M9XCJbIHRhYmxlLnJlY29yZC5yZWdpc3RlcmVkID8gJ3RleHQtZ3JheS01MDAnIDogJ3RleHQtd2FybmluZy01MDAnIF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gaWNvbj1cImNpcmNsZVwiIGNsYXNzPVwiaWNvbiBmYS14c1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0YWJsZS5yZWNvcmQubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJzbHVnXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB0YWJsZS5yZWNvcmQuc2x1ZyB9fVxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidmVyc2lvblwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiPnt7IHRhYmxlLnJlY29yZC52ZXJzaW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZGVzY3JpcHRpb25cIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmF5LTgwMCB0ZXh0LXNtXCI+e3sgdGFibGUucmVjb3JkLmRlc2NyaXB0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiYWN0aW9uc1wiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtYWN0aW9ucyB2LWlmPVwidGFibGUucmVjb3JkLnJlZ2lzdGVyZWRcIiA6aWQ9XCInbW9kdWxlXycgKyB0YWJsZS5yZWNvcmQuaWQgKyAnX2FjdGlvbnMnXCIgOmtleT1cIidtb2R1bGVfJyArIHRhYmxlLnJlY29yZC5pZCArICdfYWN0aW9ucydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInRhYmxlLnJlY29yZC5pbnN0YWxsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24tbGluayB2LWlmPVwidGFibGUucmVjb3JkLmVuYWJsZWRcIiBAY2xpY2s9XCJkaXNhYmxlKHRhYmxlLnJlY29yZC5zbHVnKVwiPkRpc2FibGU8L3AtZHJvcGRvd24tbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24tbGluayB2LWVsc2UgQGNsaWNrPVwiZW5hYmxlKHRhYmxlLnJlY29yZC5zbHVnKVwiPkVuYWJsZTwvcC1kcm9wZG93bi1saW5rPlxuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1kcm9wZG93bi1saW5rIHYtaWY9XCJ0YWJsZS5yZWNvcmQuZW5hYmxlZFwiIDp0bz1cInsgbmFtZTogJ3NldHRpbmcuc2VjdGlvbicsIHBhcmFtczogeyBzZWN0aW9uOiB0YWJsZS5yZWNvcmQuc2x1ZyB9IH1cIj5TZXR0aW5nczwvcC1kcm9wZG93bi1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24tbGluayB2LWlmPVwidGFibGUucmVjb3JkLmVuYWJsZWRcIiBAY2xpY2s9XCJzZWVkKHRhYmxlLnJlY29yZC5zbHVnKVwiPlNlZWQ8L3AtZHJvcGRvd24tbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWxpbmsgdi1pZj1cInRhYmxlLnJlY29yZC5lbmFibGVkXCIgQGNsaWNrLnByZXZlbnQgdi1tb2RhbDp1cGRhdGUtbW9kdWxlPVwidGFibGUucmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWRyb3Bkb3duLWxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24tbGluayBAY2xpY2sucHJldmVudCB2LW1vZGFsOnVuaW5zdGFsbC1tb2R1bGU9XCJ0YWJsZS5yZWNvcmRcIiBjbGFzc2VzPVwibGluay0tZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmluc3RhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWRyb3Bkb3duLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWxpbmsgQGNsaWNrLnByZXZlbnQgdi1tb2RhbDppbnN0YWxsLW1vZHVsZT1cInRhYmxlLnJlY29yZFwiIGNsYXNzZXM9XCJsaW5rLS1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0YWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1kcm9wZG93bi1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1kcm9wZG93bi1saW5rIEBjbGljay5wcmV2ZW50IHYtbW9kYWw6dW5pbnN0YWxsLW1vZHVsZT1cInRhYmxlLnJlY29yZFwiIGNsYXNzZXM9XCJsaW5rLS1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtZHJvcGRvd24tbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9wLXRhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDxwLW1vZGFsIG5hbWU9XCJ1bmluc3RhbGwtbW9kdWxlXCIgdGl0bGU9XCJVbmluc3RhbGwgTW9kdWxlXCIga2V5PVwidW5pbnN0YWxsX21vZHVsZVwiPlxuICAgICAgICAgICAgICAgIDxwPkFsbCBhc3NldHMgYW5kIGRhdGEgd2lsbCBiZSByZW1vdmVkLjwvcD5cbiAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdW5pbnN0YWxsIHRoaXMgbW9kdWxlPzwvcD5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCIgc2xvdC1zY29wZT1cIm1vZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDp1bmluc3RhbGwtbW9kdWxlIEBjbGljaz1cInVuaW5zdGFsbChtb2R1bGUuZGF0YS5zbHVnKVwiIHRoZW1lPVwiZGFuZ2VyXCIgY2xhc3M9XCJtbC0zXCI+VW5pbnN0YWxsPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6dW5pbnN0YWxsLW1vZHVsZT5DYW5jZWw8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG5cbiAgICAgICAgICAgIDxwLW1vZGFsIG5hbWU9XCJpbnN0YWxsLW1vZHVsZVwiIHRpdGxlPVwiSW5zdGFsbCBNb2R1bGVcIiBrZXk9XCJpbnN0YWxsX21vZHVsZVwiPlxuICAgICAgICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBpbnN0YWxsIHRoaXMgbW9kdWxlPzwvcD5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCIgc2xvdC1zY29wZT1cIm1vZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDppbnN0YWxsLW1vZHVsZSBAY2xpY2s9XCJpbnN0YWxsKG1vZHVsZS5kYXRhLnNsdWcpXCIgdGhlbWU9XCJzdWNjZXNzXCIgY2xhc3M9XCJtbC0zXCI+SW5zdGFsbDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOmluc3RhbGwtbW9kdWxlPkNhbmNlbDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcC1tb2RhbD5cblxuICAgICAgICAgICAgPHAtbW9kYWwgbmFtZT1cInVwZGF0ZS1tb2R1bGVcIiB0aXRsZT1cIlVwZGF0ZSBNb2R1bGVcIiBrZXk9XCJ1cGRhdGVfbW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyB3aWxsIG1pZ3JhdGUgYW55IG5ldyBtaWdyYXRpb25zIGFuZCBydW4gZGI6c2VlZC48L3A+XG4gICAgICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHByb2NlZWQ/PC9wPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIiBzbG90LXNjb3BlPVwibW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOnVwZGF0ZS1tb2R1bGUgQGNsaWNrPVwidXBkYXRlKG1vZHVsZS5kYXRhLnNsdWcpXCIgdGhlbWU9XCJ3YXJuaW5nXCIgY2xhc3M9XCJtbC0zXCI+VXBkYXRlPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6dXBkYXRlLW1vZHVsZT5DYW5jZWw8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG5cbiAgICAgICAgICAgIDxwLW1vZGFsIG5hbWU9XCJ1cGxvYWQtbW9kdWxlXCIgdGl0bGU9XCJVcGxvYWQgTW9kdWxlXCIga2V5PVwidXBsb2FkX21vZHVsZVwiPlxuICAgICAgICAgICAgICAgIDxwLXVwbG9hZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZS11cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJ1cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJ6aXBcIlxuICAgICAgICAgICAgICAgICAgICA6bXVsdGlwbGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwbG9hZFwiXG4gICAgICAgICAgICAgICAgPjwvcC11cGxvYWQ+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiAnQWRkLW9uIE1vZHVsZXMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnL2RhdGF0YWJsZS9tb2R1bGVzJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB1cGxvYWQoZmlsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpbGVzID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ19tZXRob2QnLCAnUE9TVCcpXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlLXVwbG9hZCcsIGZpbGVzKVxuXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9tb2R1bGVzL3VwbG9hZCcsIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHByb3Rvbi4kZW1pdCgndG9nZ2xlLW1vZGFsLXVwbG9hZC1tb2R1bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgnTW9kdWxlIHN1Y2Nlc3NmdWxseSB1cGxvYWRlZC4nKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB0aGlzLnJlZnJlc2goZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZGFuZ2VyJykpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBlbmFibGUoc2x1Zykge1xuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYC9hcGkvbW9kdWxlcy8ke3NsdWd9L2VuYWJsZWApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCdNb2R1bGUgc3VjY2Vzc2Z1bGx5IGVuYWJsZWQuJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZGF0YS5yZWRpcmVjdC5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChyZXNwb25zZS5kYXRhLmRhdGEucmVkaXJlY3QuZW5hYmxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB0aGlzLnJlZnJlc2goZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZGFuZ2VyJykpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBkaXNhYmxlKHNsdWcpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGAvYXBpL21vZHVsZXMvJHtzbHVnfS9kaXNhYmxlYClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB0aGlzLnJlZnJlc2goJ01vZHVsZSBzdWNjZXNzZnVsbHkgZGlzYWJsZWQuJykpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpICAgPT4gdGhpcy5yZWZyZXNoKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2RhbmdlcicpKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaW5zdGFsbCAoc2x1Zykge1xuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYC9hcGkvbW9kdWxlcy8ke3NsdWd9L2luc3RhbGxgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgnTW9kdWxlIHN1Y2Nlc3NmdWxseSBpbnN0YWxsZWQuJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZGF0YS5yZWRpcmVjdC5pbnN0YWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvJHtjb25maWcucGF0aH0vJHtyZXNwb25zZS5kYXRhLmRhdGEucmVkaXJlY3QuaW5zdGFsbH1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpICAgPT4gdGhpcy5yZWZyZXNoKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2RhbmdlcicpKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdW5pbnN0YWxsKHNsdWcpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGAvYXBpL21vZHVsZXMvJHtzbHVnfS91bmluc3RhbGxgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHRoaXMucmVmcmVzaCgnTW9kdWxlIHN1Y2Nlc3NmdWxseSByZW1vdmVkLicpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSAgID0+IHRoaXMucmVmcmVzaChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdkYW5nZXInKSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVwZGF0ZShzbHVnKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MucGF0Y2goYC9hcGkvbW9kdWxlcy8ke3NsdWd9L3VwZGF0ZWApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gdGhpcy5yZWZyZXNoKCdNb2R1bGUgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQuJykpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpICAgPT4gdGhpcy5yZWZyZXNoKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2RhbmdlcicpKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2VlZChzbHVnKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MucGF0Y2goYC9hcGkvbW9kdWxlcy8ke3NsdWd9L3NlZWRgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHRoaXMucmVmcmVzaCgnTW9kdWxlIHN1Y2Nlc3NmdWxseSBzZWVkZWQuJykpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpICAgPT4gdGhpcy5yZWZyZXNoKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2RhbmdlcicpKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVmcmVzaChtc2cgPSBudWxsLCBzdGF0dXMgPSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICBpZiAobXNnKSB0b2FzdChtc2csIHN0YXR1cylcblxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCduYXZpZ2F0aW9uL2ZldGNoQWRtaW5OYXZpZ2F0aW9uJylcbiAgICAgICAgICAgICAgICBwcm90b24oKS4kZW1pdCgncmVmcmVzaC1kYXRhdGFibGUtbW9kdWxlcycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJwcm9qZWN0LWRpYWdyYW1cIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkFkZC1vbiBNb2R1bGVzXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6dXBsb2FkLW1vZHVsZVwiLFxuICAgICAgICAgICAgICAgICAgYXJnOiBcInVwbG9hZC1tb2R1bGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiVXBsb2FkIE1vZHVsZVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcIm1vZHVsZXNfdGFibGVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogX3ZtLmVuZHBvaW50LFxuICAgICAgICAgICAgICAgIGlkOiBcIm1vZHVsZXNcIixcbiAgICAgICAgICAgICAgICBcInNvcnQtYnlcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgXCJuby1zZWFyY2hcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInByaW1hcnkta2V5XCI6IFwiaGFuZGxlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5yZWNvcmQucmVnaXN0ZXJlZCAmJiB0YWJsZS5yZWNvcmQuaW5zdGFsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInAtc3RhdHVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogdGFibGUucmVjb3JkLmVuYWJsZWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUucmVjb3JkLnJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC13YXJuaW5nLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gZmEteHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiY2lyY2xlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0YWJsZS5yZWNvcmQubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwic2x1Z1wiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRhYmxlLnJlY29yZC5zbHVnKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwidmVyc2lvblwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC52ZXJzaW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JheS04MDAgdGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGFibGUucmVjb3JkLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgdGFibGUucmVjb3JkLnJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibW9kdWxlX1wiICsgdGFibGUucmVjb3JkLmlkICsgXCJfYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibW9kdWxlX1wiICsgdGFibGUucmVjb3JkLmlkICsgXCJfYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5yZWNvcmQuaW5zdGFsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUucmVjb3JkLmVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kcm9wZG93bi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kaXNhYmxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5yZWNvcmQuc2x1Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEaXNhYmxlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kcm9wZG93bi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbmFibGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnJlY29yZC5zbHVnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVuYWJsZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnJlY29yZC5lbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNldHRpbmcuc2VjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb246IHRhYmxlLnJlY29yZC5zbHVnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNldHRpbmdzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5yZWNvcmQuZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWRyb3Bkb3duLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnJlY29yZC5zbHVnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlZWRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnJlY29yZC5lbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LW1vZGFsOnVwZGF0ZS1tb2R1bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YWJsZS5yZWNvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYmxlLnJlY29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInVwZGF0ZS1tb2R1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWRyb3Bkb3duLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6dW5pbnN0YWxsLW1vZHVsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGFibGUucmVjb3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYmxlLnJlY29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwidW5pbnN0YWxsLW1vZHVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjbGFzc2VzOiBcImxpbmstLWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pbnN0YWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDppbnN0YWxsLW1vZHVsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGFibGUucmVjb3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYmxlLnJlY29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiaW5zdGFsbC1tb2R1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3NlczogXCJsaW5rLS1zdWNjZXNzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0YWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDp1bmluc3RhbGwtbW9kdWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YWJsZS5yZWNvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFibGUucmVjb3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJ1bmluc3RhbGwtbW9kdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNsYXNzZXM6IFwibGluay0tZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJ1bmluc3RhbGxfbW9kdWxlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwidW5pbnN0YWxsLW1vZHVsZVwiLCB0aXRsZTogXCJVbmluc3RhbGwgTW9kdWxlXCIgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOnVuaW5zdGFsbC1tb2R1bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJ1bmluc3RhbGwtbW9kdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVuaW5zdGFsbChtb2R1bGUuZGF0YS5zbHVnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJVbmluc3RhbGxcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOnVuaW5zdGFsbC1tb2R1bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJ1bmluc3RhbGwtbW9kdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQWxsIGFzc2V0cyBhbmQgZGF0YSB3aWxsIGJlIHJlbW92ZWQuXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHVuaW5zdGFsbCB0aGlzIG1vZHVsZT9cIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImluc3RhbGxfbW9kdWxlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiaW5zdGFsbC1tb2R1bGVcIiwgdGl0bGU6IFwiSW5zdGFsbCBNb2R1bGVcIiB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6aW5zdGFsbC1tb2R1bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJpbnN0YWxsLW1vZHVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcInN1Y2Nlc3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaW5zdGFsbChtb2R1bGUuZGF0YS5zbHVnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJJbnN0YWxsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDppbnN0YWxsLW1vZHVsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImluc3RhbGwtbW9kdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJwXCIsIFtfdm0uX3YoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gaW5zdGFsbCB0aGlzIG1vZHVsZT9cIildKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcInVwZGF0ZV9tb2R1bGVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ1cGRhdGUtbW9kdWxlXCIsIHRpdGxlOiBcIlVwZGF0ZSBNb2R1bGVcIiB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6dXBkYXRlLW1vZHVsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInVwZGF0ZS1tb2R1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJ3YXJuaW5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZShtb2R1bGUuZGF0YS5zbHVnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJVcGRhdGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOnVwZGF0ZS1tb2R1bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJ1cGRhdGUtbW9kdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiVGhpcyB3aWxsIG1pZ3JhdGUgYW55IG5ldyBtaWdyYXRpb25zIGFuZCBydW4gZGI6c2VlZC5cIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHByb2NlZWQ/XCIpXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcInVwbG9hZF9tb2R1bGVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ1cGxvYWQtbW9kdWxlXCIsIHRpdGxlOiBcIlVwbG9hZCBNb2R1bGVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInAtdXBsb2FkXCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwidXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJmaWxlLXVwbG9hZFwiLCBhY2NlcHQ6IFwiemlwXCIsIG11bHRpcGxlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGlucHV0OiBfdm0udXBsb2FkIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lODRkODZjYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZTg0ZDg2Y2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTg0ZDg2Y2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTg0ZDg2Y2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lODRkODZjYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlODRkODZjYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL01vZHVsZXMvSW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lODRkODZjYSZcIiJdLCJzb3VyY2VSb290IjoiIn0=