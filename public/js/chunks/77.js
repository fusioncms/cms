(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Addons.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Addons.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: 'Addons'
      };
    }
  },
  data: function data() {
    return {
      endpoint: '/datatable/addons'
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
      axios.post('/api/addons/upload', formData).then(function (response) {
        bus().$emit('toggle-modal-upload-addon');

        _this.$refs.upload.remove();

        _this.refresh('Addon successfully uploaded.');
      })["catch"](function (error) {
        return _this.refresh(error.response.data.message, 'danger');
      });
    },
    enable: function enable(slug) {
      var _this2 = this;

      axios.post("/api/addons/".concat(slug, "/enable")).then(function (response) {
        _this2.refresh('Addon successfully enabled.');

        if (response.data.data.redirect && response.data.data.redirect.enable) {
          _this2.$router.push(response.data.data.redirect.enable);
        }
      })["catch"](function (error) {
        return _this2.refresh(error.response.data.message, 'danger');
      });
    },
    disable: function disable(slug) {
      var _this3 = this;

      axios.post("/api/addons/".concat(slug, "/disable")).then(function (response) {
        return _this3.refresh('Addon successfully disabled.');
      })["catch"](function (error) {
        return _this3.refresh(error.response.data.message, 'danger');
      });
    },
    install: function install(slug) {
      var _this4 = this;

      axios.post("/api/addons/".concat(slug, "/install")).then(function (response) {
        _this4.refresh('Addon successfully installed.');

        if (response.data.data.redirect.install) {
          location.href = "/".concat(config.path, "/").concat(response.data.data.redirect.install);
        }
      })["catch"](function (error) {
        return _this4.refresh(error.response.data.message, 'danger');
      });
    },
    uninstall: function uninstall(slug) {
      var _this5 = this;

      axios.post("/api/addons/".concat(slug, "/uninstall")).then(function (response) {
        return _this5.refresh('Addon successfully uninstalled.');
      })["catch"](function (error) {
        return _this5.refresh(error.response.data.message, 'danger');
      });
    },
    refresh: function refresh() {
      var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
      if (msg) toast(msg, status);
      this.$store.dispatch('navigation/fetchAdminNavigation');
      bus().$emit('refresh-datatable-addons');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Addons.vue?vue&type=template&id=5d45677c&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Addons.vue?vue&type=template&id=5d45677c& ***!
  \****************************************************************************************************************************************************************************************************/
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
        [_c("app-title", { attrs: { icon: "box-open" } }, [_vm._v("Addons")])],
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
                  rawName: "v-modal:upload-addon",
                  arg: "upload-addon"
                }
              ],
              staticClass: "button"
            },
            [_vm._v("Upload Addon")]
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
              key: "addons_table",
              attrs: {
                endpoint: _vm.endpoint,
                id: "addons",
                "sort-by": "name",
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
                          table.record.installed
                            ? _c("p-status", {
                                staticClass: "mr-2",
                                attrs: { value: table.record.enabled }
                              })
                            : _c("p-status", { staticClass: "mr-2" }),
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
                      _c(
                        "p-actions",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: table.record.installed,
                              expression: "table.record.installed"
                            }
                          ],
                          key:
                            "addon_" + table.record.slug + "_actions_installed",
                          attrs: {
                            id:
                              "addon_" +
                              table.record.slug +
                              "_actions_installed"
                          }
                        },
                        [
                          table.record.enabled
                            ? _c(
                                "p-dropdown-link",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.disable(table.record.slug)
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
                                      return _vm.enable(table.record.slug)
                                    }
                                  }
                                },
                                [_vm._v("Enable")]
                              ),
                          _vm._v(" "),
                          _c(
                            "p-dropdown-link",
                            {
                              directives: [
                                {
                                  name: "modal",
                                  rawName: "v-modal:uninstall-addon",
                                  value: table.record.slug,
                                  expression: "table.record.slug",
                                  arg: "uninstall-addon"
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
                                "\n                            Uninstall\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "p-actions",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !table.record.installed,
                              expression: "!table.record.installed"
                            }
                          ],
                          key:
                            "addon_" +
                            table.record.slug +
                            "_actions_uninstalled",
                          attrs: {
                            id:
                              "addon_" +
                              table.record.slug +
                              "_actions_uninstalled"
                          }
                        },
                        [
                          _c(
                            "p-dropdown-link",
                            {
                              directives: [
                                {
                                  name: "modal",
                                  rawName: "v-modal:install-addon",
                                  value: table.record.slug,
                                  expression: "table.record.slug",
                                  arg: "install-addon"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                "\n                            Install\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
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
              key: "uninstall_addon",
              attrs: { name: "uninstall-addon", title: "Uninstall Addon" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(addon) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:uninstall-addon",
                              arg: "uninstall-addon"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.uninstall(addon.data)
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
                              rawName: "v-modal:uninstall-addon",
                              arg: "uninstall-addon"
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
                _vm._v("Existing data related to this addon will be removed.")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v("Are you sure you want to uninstall this addon?")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "p-modal",
            {
              key: "install_addon",
              attrs: { name: "install-addon", title: "Install Addon" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(addon) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:install-addon",
                              arg: "install-addon"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "success" },
                          on: {
                            click: function($event) {
                              return _vm.install(addon.data)
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
                              rawName: "v-modal:install-addon",
                              arg: "install-addon"
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
            [_c("p", [_vm._v("Are you sure you want to install this addon?")])]
          ),
          _vm._v(" "),
          _c(
            "p-modal",
            {
              key: "update_addon",
              attrs: { name: "update-addon", title: "Update Module" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(addon) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:update-addon",
                              arg: "update-addon"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "warning" },
                          on: {
                            click: function($event) {
                              return _vm.update(addon.data)
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
                              rawName: "v-modal:update-addon",
                              arg: "update-addon"
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
              key: "upload_addon",
              attrs: { name: "upload-addon", title: "Upload Addon" }
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

/***/ "./resources/js/pages/Addons.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Addons.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Addons_vue_vue_type_template_id_5d45677c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Addons.vue?vue&type=template&id=5d45677c& */ "./resources/js/pages/Addons.vue?vue&type=template&id=5d45677c&");
/* harmony import */ var _Addons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Addons.vue?vue&type=script&lang=js& */ "./resources/js/pages/Addons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Addons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Addons_vue_vue_type_template_id_5d45677c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Addons_vue_vue_type_template_id_5d45677c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Addons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Addons.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Addons.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Addons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Addons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Addons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Addons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Addons.vue?vue&type=template&id=5d45677c&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Addons.vue?vue&type=template&id=5d45677c& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Addons_vue_vue_type_template_id_5d45677c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Addons.vue?vue&type=template&id=5d45677c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Addons.vue?vue&type=template&id=5d45677c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Addons_vue_vue_type_template_id_5d45677c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Addons_vue_vue_type_template_id_5d45677c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0FkZG9ucy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0FkZG9ucy52dWU/NWQ3YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQWRkb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQWRkb25zLnZ1ZT9hYjM4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9BZGRvbnMudnVlPzU4ZjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNHQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQWJBO0FBZUE7QUFDQSxVQURBLGtCQUNBLEtBREEsRUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQSxpREFDQSxJQURBLENBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBLE9BTEEsV0FNQTtBQUFBO0FBQUEsT0FOQTtBQU9BLEtBbEJBO0FBb0JBLFVBcEJBLGtCQW9CQSxJQXBCQSxFQW9CQTtBQUFBOztBQUNBLHlEQUNBLElBREEsQ0FDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BUEEsV0FRQTtBQUFBO0FBQUEsT0FSQTtBQVNBLEtBOUJBO0FBZ0NBLFdBaENBLG1CQWdDQSxJQWhDQSxFQWdDQTtBQUFBOztBQUNBLDBEQUNBLElBREEsQ0FDQTtBQUFBO0FBQUEsT0FEQSxXQUVBO0FBQUE7QUFBQSxPQUZBO0FBR0EsS0FwQ0E7QUFzQ0EsV0F0Q0EsbUJBc0NBLElBdENBLEVBc0NBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFzRDtBQUM5RSxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6YUE7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFDM0I7QUFDTDs7O0FBR3JEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXNMLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvNzcuanM/aWQ9N2IwMmU4ZjY0ZTI0NGFhNzRlYTQiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8YXBwLXRpdGxlIGljb249XCJib3gtb3BlblwiPkFkZG9uczwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6dXBsb2FkLWFkZG9uIGNsYXNzPVwiYnV0dG9uXCI+VXBsb2FkIEFkZG9uPC9wLWJ1dHRvbj5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHAtdGFibGUgOmVuZHBvaW50PVwiZW5kcG9pbnRcIiBpZD1cImFkZG9uc1wiIHNvcnQtYnk9XCJuYW1lXCIgcHJpbWFyeS1rZXk9XCJoYW5kbGVcIiBrZXk9XCJhZGRvbnNfdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuYW1lXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInRhYmxlLnJlY29yZC5pbnN0YWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJ0YWJsZS5yZWNvcmQuZW5hYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zdGF0dXM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zdGF0dXM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0YWJsZS5yZWNvcmQubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ2ZXJzaW9uXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCI+e3sgdGFibGUucmVjb3JkLnZlcnNpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJkZXNjcmlwdGlvblwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyYXktODAwIHRleHQtc21cIj57eyB0YWJsZS5yZWNvcmQuZGVzY3JpcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJhY3Rpb25zXCIgc2xvdC1zY29wZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1hY3Rpb25zIHYtc2hvdz1cInRhYmxlLnJlY29yZC5pbnN0YWxsZWRcIiA6aWQ9XCInYWRkb25fJyArIHRhYmxlLnJlY29yZC5zbHVnICsgJ19hY3Rpb25zX2luc3RhbGxlZCdcIiA6a2V5PVwiJ2FkZG9uXycgKyB0YWJsZS5yZWNvcmQuc2x1ZyArICdfYWN0aW9uc19pbnN0YWxsZWQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24tbGluayB2LWlmPVwidGFibGUucmVjb3JkLmVuYWJsZWRcIiBAY2xpY2s9XCJkaXNhYmxlKHRhYmxlLnJlY29yZC5zbHVnKVwiPkRpc2FibGU8L3AtZHJvcGRvd24tbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1kcm9wZG93bi1saW5rIHYtZWxzZSBAY2xpY2s9XCJlbmFibGUodGFibGUucmVjb3JkLnNsdWcpXCI+RW5hYmxlPC9wLWRyb3Bkb3duLWxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1kcm9wZG93bi1saW5rIEBjbGljay5wcmV2ZW50IHYtbW9kYWw6dW5pbnN0YWxsLWFkZG9uPVwidGFibGUucmVjb3JkLnNsdWdcIiBjbGFzc2VzPVwibGluay0tZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuaW5zdGFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1kcm9wZG93bi1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWFjdGlvbnM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWFjdGlvbnMgdi1zaG93PVwiIXRhYmxlLnJlY29yZC5pbnN0YWxsZWRcIiA6aWQ9XCInYWRkb25fJyArIHRhYmxlLnJlY29yZC5zbHVnICsgJ19hY3Rpb25zX3VuaW5zdGFsbGVkJ1wiIDprZXk9XCInYWRkb25fJyArIHRhYmxlLnJlY29yZC5zbHVnICsgJ19hY3Rpb25zX3VuaW5zdGFsbGVkJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWxpbmsgdi1tb2RhbDppbnN0YWxsLWFkZG9uPVwidGFibGUucmVjb3JkLnNsdWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zdGFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1kcm9wZG93bi1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9wLXRhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDxwLW1vZGFsIG5hbWU9XCJ1bmluc3RhbGwtYWRkb25cIiB0aXRsZT1cIlVuaW5zdGFsbCBBZGRvblwiIGtleT1cInVuaW5zdGFsbF9hZGRvblwiPlxuICAgICAgICAgICAgICAgIDxwPkV4aXN0aW5nIGRhdGEgcmVsYXRlZCB0byB0aGlzIGFkZG9uIHdpbGwgYmUgcmVtb3ZlZC48L3A+XG4gICAgICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHVuaW5zdGFsbCB0aGlzIGFkZG9uPzwvcD5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCIgc2xvdC1zY29wZT1cImFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOnVuaW5zdGFsbC1hZGRvbiBAY2xpY2s9XCJ1bmluc3RhbGwoYWRkb24uZGF0YSlcIiB0aGVtZT1cImRhbmdlclwiIGNsYXNzPVwibWwtM1wiPlVuaW5zdGFsbDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOnVuaW5zdGFsbC1hZGRvbj5DYW5jZWw8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG5cbiAgICAgICAgICAgIDxwLW1vZGFsIG5hbWU9XCJpbnN0YWxsLWFkZG9uXCIgdGl0bGU9XCJJbnN0YWxsIEFkZG9uXCIga2V5PVwiaW5zdGFsbF9hZGRvblwiPlxuICAgICAgICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBpbnN0YWxsIHRoaXMgYWRkb24/PC9wPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIiBzbG90LXNjb3BlPVwiYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6aW5zdGFsbC1hZGRvbiBAY2xpY2s9XCJpbnN0YWxsKGFkZG9uLmRhdGEpXCIgdGhlbWU9XCJzdWNjZXNzXCIgY2xhc3M9XCJtbC0zXCI+SW5zdGFsbDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOmluc3RhbGwtYWRkb24+Q2FuY2VsPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wLW1vZGFsPlxuXG4gICAgICAgICAgICA8cC1tb2RhbCBuYW1lPVwidXBkYXRlLWFkZG9uXCIgdGl0bGU9XCJVcGRhdGUgTW9kdWxlXCIga2V5PVwidXBkYXRlX2FkZG9uXCI+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyB3aWxsIG1pZ3JhdGUgYW55IG5ldyBtaWdyYXRpb25zIGFuZCBydW4gZGI6c2VlZC48L3A+XG4gICAgICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHByb2NlZWQ/PC9wPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIiBzbG90LXNjb3BlPVwiYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6dXBkYXRlLWFkZG9uIEBjbGljaz1cInVwZGF0ZShhZGRvbi5kYXRhKVwiIHRoZW1lPVwid2FybmluZ1wiIGNsYXNzPVwibWwtM1wiPlVwZGF0ZTwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOnVwZGF0ZS1hZGRvbj5DYW5jZWw8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG5cbiAgICAgICAgICAgIDxwLW1vZGFsIG5hbWU9XCJ1cGxvYWQtYWRkb25cIiB0aXRsZT1cIlVwbG9hZCBBZGRvblwiIGtleT1cInVwbG9hZF9hZGRvblwiPlxuICAgICAgICAgICAgICAgIDxwLXVwbG9hZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZS11cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJ1cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJ6aXBcIlxuICAgICAgICAgICAgICAgICAgICA6bXVsdGlwbGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwbG9hZFwiXG4gICAgICAgICAgICAgICAgPjwvcC11cGxvYWQ+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiAnQWRkb25zJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogJy9kYXRhdGFibGUvYWRkb25zJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB1cGxvYWQoZmlsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpbGVzID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ19tZXRob2QnLCAnUE9TVCcpXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlLXVwbG9hZCcsIGZpbGVzKVxuXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9hZGRvbnMvdXBsb2FkJywgZm9ybURhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVzKCkuJGVtaXQoJ3RvZ2dsZS1tb2RhbC11cGxvYWQtYWRkb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgnQWRkb24gc3VjY2Vzc2Z1bGx5IHVwbG9hZGVkLicpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHRoaXMucmVmcmVzaChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdkYW5nZXInKSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGVuYWJsZShzbHVnKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwaS9hZGRvbnMvJHtzbHVnfS9lbmFibGVgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgnQWRkb24gc3VjY2Vzc2Z1bGx5IGVuYWJsZWQuJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZGF0YS5yZWRpcmVjdCAmJiByZXNwb25zZS5kYXRhLmRhdGEucmVkaXJlY3QuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2gocmVzcG9uc2UuZGF0YS5kYXRhLnJlZGlyZWN0LmVuYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gdGhpcy5yZWZyZXNoKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2RhbmdlcicpKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZGlzYWJsZShzbHVnKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwaS9hZGRvbnMvJHtzbHVnfS9kaXNhYmxlYClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB0aGlzLnJlZnJlc2goJ0FkZG9uIHN1Y2Nlc3NmdWxseSBkaXNhYmxlZC4nKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgICA9PiB0aGlzLnJlZnJlc2goZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZGFuZ2VyJykpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpbnN0YWxsIChzbHVnKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwaS9hZGRvbnMvJHtzbHVnfS9pbnN0YWxsYClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goJ0FkZG9uIHN1Y2Nlc3NmdWxseSBpbnN0YWxsZWQuJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZGF0YS5yZWRpcmVjdC5pbnN0YWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvJHtjb25maWcucGF0aH0vJHtyZXNwb25zZS5kYXRhLmRhdGEucmVkaXJlY3QuaW5zdGFsbH1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHRoaXMucmVmcmVzaChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdkYW5nZXInKSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVuaW5zdGFsbChzbHVnKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwaS9hZGRvbnMvJHtzbHVnfS91bmluc3RhbGxgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHRoaXMucmVmcmVzaCgnQWRkb24gc3VjY2Vzc2Z1bGx5IHVuaW5zdGFsbGVkLicpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSAgID0+IHRoaXMucmVmcmVzaChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdkYW5nZXInKSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlZnJlc2gobXNnID0gbnVsbCwgc3RhdHVzID0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1zZykgdG9hc3QobXNnLCBzdGF0dXMpXG5cbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbmF2aWdhdGlvbi9mZXRjaEFkbWluTmF2aWdhdGlvbicpXG4gICAgICAgICAgICAgICAgYnVzKCkuJGVtaXQoJ3JlZnJlc2gtZGF0YXRhYmxlLWFkZG9ucycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW19jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJib3gtb3BlblwiIH0gfSwgW192bS5fdihcIkFkZG9uc1wiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6dXBsb2FkLWFkZG9uXCIsXG4gICAgICAgICAgICAgICAgICBhcmc6IFwidXBsb2FkLWFkZG9uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlVwbG9hZCBBZGRvblwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImFkZG9uc190YWJsZVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBfdm0uZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgaWQ6IFwiYWRkb25zXCIsXG4gICAgICAgICAgICAgICAgXCJzb3J0LWJ5XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIFwicHJpbWFyeS1rZXlcIjogXCJoYW5kbGVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnJlY29yZC5pbnN0YWxsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicC1zdGF0dXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiB0YWJsZS5yZWNvcmQuZW5hYmxlZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJwLXN0YXR1c1wiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRhYmxlLnJlY29yZC5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJ2ZXJzaW9uXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGFibGUucmVjb3JkLnZlcnNpb24pKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmF5LTgwMCB0ZXh0LXNtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0YWJsZS5yZWNvcmQuZGVzY3JpcHRpb24pKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJhY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGFibGUucmVjb3JkLmluc3RhbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFibGUucmVjb3JkLmluc3RhbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRvbl9cIiArIHRhYmxlLnJlY29yZC5zbHVnICsgXCJfYWN0aW9uc19pbnN0YWxsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkb25fXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUucmVjb3JkLnNsdWcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfYWN0aW9uc19pbnN0YWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5yZWNvcmQuZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kcm9wZG93bi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRpc2FibGUodGFibGUucmVjb3JkLnNsdWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGlzYWJsZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbmFibGUodGFibGUucmVjb3JkLnNsdWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRW5hYmxlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWRyb3Bkb3duLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOnVuaW5zdGFsbC1hZGRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YWJsZS5yZWNvcmQuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYmxlLnJlY29yZC5zbHVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInVuaW5zdGFsbC1hZGRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjbGFzc2VzOiBcImxpbmstLWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmluc3RhbGxcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICF0YWJsZS5yZWNvcmQuaW5zdGFsbGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhdGFibGUucmVjb3JkLmluc3RhbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRvbl9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUucmVjb3JkLnNsdWcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX2FjdGlvbnNfdW5pbnN0YWxsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkb25fXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUucmVjb3JkLnNsdWcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfYWN0aW9uc191bmluc3RhbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kcm9wZG93bi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDppbnN0YWxsLWFkZG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRhYmxlLnJlY29yZC5zbHVnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFibGUucmVjb3JkLnNsdWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiaW5zdGFsbC1hZGRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zdGFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJ1bmluc3RhbGxfYWRkb25cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ1bmluc3RhbGwtYWRkb25cIiwgdGl0bGU6IFwiVW5pbnN0YWxsIEFkZG9uXCIgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGFkZG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6dW5pbnN0YWxsLWFkZG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwidW5pbnN0YWxsLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVuaW5zdGFsbChhZGRvbi5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJVbmluc3RhbGxcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOnVuaW5zdGFsbC1hZGRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInVuaW5zdGFsbC1hZGRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkV4aXN0aW5nIGRhdGEgcmVsYXRlZCB0byB0aGlzIGFkZG9uIHdpbGwgYmUgcmVtb3ZlZC5cIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHVuaW5zdGFsbCB0aGlzIGFkZG9uP1wiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1tb2RhbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiaW5zdGFsbF9hZGRvblwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImluc3RhbGwtYWRkb25cIiwgdGl0bGU6IFwiSW5zdGFsbCBBZGRvblwiIH0sXG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJmb290ZXJcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihhZGRvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmluc3RhbGwtYWRkb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJpbnN0YWxsLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwic3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5pbnN0YWxsKGFkZG9uLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkluc3RhbGxcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmluc3RhbGwtYWRkb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJpbnN0YWxsLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJwXCIsIFtfdm0uX3YoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gaW5zdGFsbCB0aGlzIGFkZG9uP1wiKV0pXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1tb2RhbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwidXBkYXRlX2FkZG9uXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwidXBkYXRlLWFkZG9uXCIsIHRpdGxlOiBcIlVwZGF0ZSBNb2R1bGVcIiB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oYWRkb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDp1cGRhdGUtYWRkb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJ1cGRhdGUtYWRkb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJ3YXJuaW5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZShhZGRvbi5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJVcGRhdGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOnVwZGF0ZS1hZGRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInVwZGF0ZS1hZGRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlRoaXMgd2lsbCBtaWdyYXRlIGFueSBuZXcgbWlncmF0aW9ucyBhbmQgcnVuIGRiOnNlZWQuXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwcm9jZWVkP1wiKV0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJ1cGxvYWRfYWRkb25cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ1cGxvYWQtYWRkb25cIiwgdGl0bGU6IFwiVXBsb2FkIEFkZG9uXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwLXVwbG9hZFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcInVwbG9hZFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiZmlsZS11cGxvYWRcIiwgYWNjZXB0OiBcInppcFwiLCBtdWx0aXBsZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBpbnB1dDogX3ZtLnVwbG9hZCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BZGRvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVkNDU2NzdjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FkZG9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FkZG9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVkNDU2NzdjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVkNDU2NzdjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVkNDU2NzdjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZGRvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVkNDU2NzdjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVkNDU2NzdjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvQWRkb25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWQ0NTY3N2MmXCIiXSwic291cmNlUm9vdCI6IiJ9