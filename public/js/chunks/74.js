(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Backups/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Backups/Index.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: 'Backups'
      };
    }
  },
  data: function data() {
    return {
      destinations: [],
      ready: false,
      saveBackup: true
    };
  },
  methods: {
    refresh: function refresh() {
      var _this = this;

      this.ready = false;
      axios.get('/api/backups').then(function (response) {
        _this.destinations = response.data.data;
        _this.ready = true;
        _this.saveBackup = true;
      });
    },
    upload: function upload(files) {
      var _this2 = this;

      if (typeof files == 'undefined') {
        return;
      }

      var formData = new FormData();
      formData.append('_method', 'POST');
      formData.append('file-upload', files);
      axios.post('/api/backups/upload', formData).then(function () {
        toast('Backup successfully uploaded!', 'success');

        _this2.$refs.upload.remove();

        _this2.refresh();
      });
    },
    download: function download(backup) {
      window.open("/backups/".concat(backup), '_blank');
    },
    restore: function restore(backup) {
      var _this3 = this;

      axios.post("/api/backups/restore/".concat(backup), {
        saveBackup: this.saveBackup
      }).then(function (response) {
        toast('Backup successfully restored!', 'success');

        _this3.refresh();
      });
    },
    backup: function backup() {
      var _this4 = this;

      axios.post('/api/backups').then(function (response) {
        toast('Backup successfully created!', 'success');

        _this4.refresh();
      });
    },
    destroy: function destroy(backup) {
      var _this5 = this;

      axios["delete"]("/api/backups/".concat(backup)).then(function (response) {
        toast('Backp successfully deleted!', 'success');

        _this5.refresh();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Backups/Index.vue?vue&type=template&id=27c4075b&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Backups/Index.vue?vue&type=template&id=27c4075b& ***!
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
        [_c("page-title", { attrs: { icon: "save" } }, [_vm._v("Backups")])],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _c(
            "ui-button",
            {
              directives: [
                { name: "modal", rawName: "v-modal:settings", arg: "settings" }
              ],
              staticClass: "mr-1"
            },
            [_vm._v("Settings")]
          ),
          _vm._v(" "),
          _c(
            "ui-button",
            {
              directives: [
                { name: "modal", rawName: "v-modal:upload", arg: "upload" }
              ],
              staticClass: "mr-3"
            },
            [_vm._v("Upload")]
          ),
          _vm._v(" "),
          _c(
            "ui-button",
            {
              directives: [
                {
                  name: "modal",
                  rawName: "v-modal:confirm-form",
                  arg: "confirm-form"
                }
              ],
              attrs: { variant: "primary" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                }
              }
            },
            [_vm._v("Backup Now")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("ui-card", { attrs: { "no-body": "" } }, [
        !_vm.ready
          ? _c(
              "div",
              { staticClass: "card__body text-center" },
              [
                _c("fa-icon", {
                  staticClass: "fa-spin mr-3",
                  attrs: { icon: ["fas", "circle-notch"] }
                }),
                _vm._v(" Loading backups...\n\t\t\t")
              ],
              1
            )
          : _c(
              "div",
              _vm._l(_vm.destinations, function(destination) {
                return _c("table", { key: destination.name }, [
                  _c("thead", [
                    _c("th", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Created")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Size")]),
                    _vm._v(" "),
                    _c("th")
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(destination.backups, function(backup) {
                      return _c("tr", { key: backup.name }, [
                        _c("td", [_vm._v(_vm._s(backup.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(backup.happened))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(backup.size))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-right" },
                          [
                            _c(
                              "ui-dropdown",
                              { attrs: { right: "" } },
                              [
                                _c("fa-icon", {
                                  attrs: { icon: ["fas", "bars"] }
                                }),
                                _vm._v(" "),
                                _c(
                                  "template",
                                  { slot: "options" },
                                  [
                                    _c(
                                      "ui-dropdown-item",
                                      {
                                        directives: [
                                          {
                                            name: "modal",
                                            rawName: "v-modal:restore-form",
                                            value: backup,
                                            expression: "backup",
                                            arg: "restore-form"
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
                                          "\n\t\t\t\t\t\t\t\t\t\t\tRestore\n\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "ui-dropdown-item",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.download(backup.name)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\tDownload\n\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    !backup.isNewest
                                      ? _c(
                                          "ui-dropdown-item",
                                          {
                                            directives: [
                                              {
                                                name: "modal",
                                                rawName: "v-modal:delete-form",
                                                value: backup,
                                                expression: "backup",
                                                arg: "delete-form"
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
                                              "\n\t\t\t\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t\t\t\t"
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  )
                ])
              }),
              0
            )
      ]),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c("settings-modal", { attrs: { handle: "backups" } }),
          _vm._v(" "),
          _c(
            "ui-modal",
            {
              key: "restore_form",
              attrs: { name: "restore-form", title: "Restore Backup" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(form) {
                    return [
                      _c(
                        "ui-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:restore-form",
                              arg: "restore-form"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { variant: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.restore(form.data.name)
                            }
                          }
                        },
                        [_vm._v("Restore")]
                      ),
                      _vm._v(" "),
                      _c(
                        "ui-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:restore-form",
                              arg: "restore-form"
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
                _vm._v("Restoring a backup will "),
                _c("b", [
                  _vm._v(
                    "replace all files and the database with the contents of the backup."
                  )
                ]),
                _vm._v(
                  " Unless you specify to create a new backup during this process, there will be no way to undo your changes if you change your mind."
                )
              ]),
              _vm._v(" "),
              _c(
                "ui-checkbox",
                {
                  attrs: { name: "saveBackup" },
                  model: {
                    value: _vm.saveBackup,
                    callback: function($$v) {
                      _vm.saveBackup = $$v
                    },
                    expression: "saveBackup"
                  }
                },
                [
                  _vm._v(
                    "\n        \t\t\tCreate a backup before restoring\n        \t\t"
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "ui-modal",
            {
              key: "confirm_form",
              attrs: { name: "confirm-form", title: "Backup Now" }
            },
            [
              _c("p", [
                _vm._v(
                  "This will perform a full backup of your website. Backups can take up to one minute per GB of data."
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
                      directives: [
                        {
                          name: "modal",
                          rawName: "v-modal:confirm-form",
                          arg: "confirm-form"
                        }
                      ],
                      staticClass: "ml-3",
                      attrs: { variant: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.backup()
                        }
                      }
                    },
                    [_vm._v("Backup")]
                  ),
                  _vm._v(" "),
                  _c(
                    "ui-button",
                    {
                      directives: [
                        {
                          name: "modal",
                          rawName: "v-modal:confirm-form",
                          arg: "confirm-form"
                        }
                      ]
                    },
                    [_vm._v("Cancel")]
                  )
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "ui-modal",
            {
              key: "delete_form",
              attrs: { name: "delete-form", title: "Delete Backup" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(form) {
                    return [
                      _c(
                        "ui-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:delete-form",
                              arg: "delete-form"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { variant: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.destroy(form.data.name)
                            }
                          }
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
                              rawName: "v-modal:delete-form",
                              arg: "delete-form"
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
                _vm._v(
                  "Are you sure you want to permenantly delete this backup?"
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "ui-modal",
            {
              key: "upload-backup",
              attrs: { name: "upload", title: "Upload Backup" }
            },
            [
              _c("ui-upload", {
                ref: "upload",
                attrs: {
                  name: "file-upload",
                  label: "Upload",
                  accept: "zip",
                  multiple: false
                },
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

/***/ "./resources/js/pages/Backups/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Backups/Index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_27c4075b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=27c4075b& */ "./resources/js/pages/Backups/Index.vue?vue&type=template&id=27c4075b&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Backups/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_27c4075b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_27c4075b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Backups/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Backups/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Backups/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Backups/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Backups/Index.vue?vue&type=template&id=27c4075b&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Backups/Index.vue?vue&type=template&id=27c4075b& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_27c4075b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=27c4075b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Backups/Index.vue?vue&type=template&id=27c4075b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_27c4075b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_27c4075b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0JhY2t1cHMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9CYWNrdXBzL0luZGV4LnZ1ZT9kMTUwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9CYWNrdXBzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQmFja3Vwcy9JbmRleC52dWU/ZDg5NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQmFja3Vwcy9JbmRleC52dWU/ODcxNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4R0E7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLGtCQUZBO0FBR0E7QUFIQTtBQUtBLEdBZkE7QUFpQkE7QUFDQSxXQURBLHFCQUNBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQSxLQVRBO0FBV0EsVUFYQSxrQkFXQSxLQVhBLEVBV0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTs7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQTNCQTtBQTZCQSxZQTdCQSxvQkE2QkEsTUE3QkEsRUE2QkE7QUFDQTtBQUNBLEtBL0JBO0FBaUNBLFdBakNBLG1CQWlDQSxNQWpDQSxFQWlDQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0EsT0FKQTtBQUtBLEtBdkNBO0FBeUNBLFVBekNBLG9CQXlDQTtBQUFBOztBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcmJBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzc0LmpzP2lkPTUyNTVmMGUwZTFjMmYyMzQyOTdmIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuXHRcdFx0PHBhZ2UtdGl0bGUgaWNvbj1cInNhdmVcIj5CYWNrdXBzPC9wYWdlLXRpdGxlPlxuXHRcdDwvcG9ydGFsPlxuXG5cdFx0PHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cblx0XHRcdDx1aS1idXR0b24gdi1tb2RhbDpzZXR0aW5ncyBjbGFzcz1cIm1yLTFcIj5TZXR0aW5nczwvdWktYnV0dG9uPlxuXHRcdFx0PHVpLWJ1dHRvbiB2LW1vZGFsOnVwbG9hZCBjbGFzcz1cIm1yLTNcIj5VcGxvYWQ8L3VpLWJ1dHRvbj5cblxuXHRcdFx0PHVpLWJ1dHRvbiBAY2xpY2sucHJldmVudCB2LW1vZGFsOmNvbmZpcm0tZm9ybSB2YXJpYW50PVwicHJpbWFyeVwiPkJhY2t1cCBOb3c8L3VpLWJ1dHRvbj5cblx0XHQ8L3BvcnRhbD5cblxuXHRcdDx1aS1jYXJkIG5vLWJvZHk+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keSB0ZXh0LWNlbnRlclwiIHYtaWY9XCIhIHJlYWR5XCI+XG5cdFx0XHRcdDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2lyY2xlLW5vdGNoJ11cIiBjbGFzcz1cImZhLXNwaW4gbXItM1wiPjwvZmEtaWNvbj4gTG9hZGluZyBiYWNrdXBzLi4uXG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiB2LWVsc2U+XG5cdFx0XHRcdDx0YWJsZSB2LWZvcj1cImRlc3RpbmF0aW9uIGluIGRlc3RpbmF0aW9uc1wiIDprZXk9XCJkZXN0aW5hdGlvbi5uYW1lXCI+XG5cdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPkNyZWF0ZWQ8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPlNpemU8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPjwvdGg+XG5cdFx0XHRcdFx0PC90aGVhZD5cblxuXHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdDx0ciB2LWZvcj1cImJhY2t1cCBpbiBkZXN0aW5hdGlvbi5iYWNrdXBzXCIgOmtleT1cImJhY2t1cC5uYW1lXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZD57eyBiYWNrdXAubmFtZSB9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD57eyBiYWNrdXAuaGFwcGVuZWQgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3sgYmFja3VwLnNpemUgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHVpLWRyb3Bkb3duIHJpZ2h0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdiYXJzJ11cIj48L2ZhLWljb24+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSBzbG90PVwib3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWktZHJvcGRvd24taXRlbSBAY2xpY2sucHJldmVudCB2LW1vZGFsOnJlc3RvcmUtZm9ybT1cImJhY2t1cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJlc3RvcmVcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC91aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx1aS1kcm9wZG93bi1pdGVtIEBjbGljaz1cImRvd25sb2FkKGJhY2t1cC5uYW1lKVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdERvd25sb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWktZHJvcGRvd24taXRlbT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWktZHJvcGRvd24taXRlbSB2LWlmPVwiISBiYWNrdXAuaXNOZXdlc3RcIiBAY2xpY2sucHJldmVudCB2LW1vZGFsOmRlbGV0ZS1mb3JtPVwiYmFja3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0RGVsZXRlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWktZHJvcGRvd24taXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdFx0PC91aS1kcm9wZG93bj5cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PC90YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvdWktY2FyZD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwibW9kYWxzXCI+XG4gICAgICAgICAgICA8c2V0dGluZ3MtbW9kYWwgaGFuZGxlPVwiYmFja3Vwc1wiPjwvc2V0dGluZ3MtbW9kYWw+XG5cbiAgICAgICAgICAgIDwhLS0gUmVzdG9yZSBmcm9tIGV4aXN0aW5nIGJhY2t1cCAtLT5cbiAgICAgICAgICAgIDx1aS1tb2RhbCBuYW1lPVwicmVzdG9yZS1mb3JtXCIgdGl0bGU9XCJSZXN0b3JlIEJhY2t1cFwiIGtleT1cInJlc3RvcmVfZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxwPlJlc3RvcmluZyBhIGJhY2t1cCB3aWxsIDxiPnJlcGxhY2UgYWxsIGZpbGVzIGFuZCB0aGUgZGF0YWJhc2Ugd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGJhY2t1cC48L2I+IFVubGVzcyB5b3Ugc3BlY2lmeSB0byBjcmVhdGUgYSBuZXcgYmFja3VwIGR1cmluZyB0aGlzIHByb2Nlc3MsIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHVuZG8geW91ciBjaGFuZ2VzIGlmIHlvdSBjaGFuZ2UgeW91ciBtaW5kLjwvcD5cblxuICAgICAgICBcdFx0PHVpLWNoZWNrYm94IG5hbWU9XCJzYXZlQmFja3VwXCIgdi1tb2RlbD1cInNhdmVCYWNrdXBcIj5cbiAgICAgICAgXHRcdFx0Q3JlYXRlIGEgYmFja3VwIGJlZm9yZSByZXN0b3JpbmdcbiAgICAgICAgXHRcdDwvdWktY2hlY2tib3g+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImZvb3RlclwiIHNsb3Qtc2NvcGU9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1idXR0b24gdi1tb2RhbDpyZXN0b3JlLWZvcm0gQGNsaWNrPVwicmVzdG9yZShmb3JtLmRhdGEubmFtZSlcIiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzPVwibWwtM1wiPlJlc3RvcmU8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiB2LW1vZGFsOnJlc3RvcmUtZm9ybT5DYW5jZWw8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC91aS1tb2RhbD5cblxuICAgICAgICAgICAgPCEtLSBSdW4gbWFudWFsIGJhY2t1cCBwcm9jZXNzIC0tPlxuXHRcdFx0PHVpLW1vZGFsIG5hbWU9XCJjb25maXJtLWZvcm1cIiB0aXRsZT1cIkJhY2t1cCBOb3dcIiBrZXk9XCJjb25maXJtX2Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIHdpbGwgcGVyZm9ybSBhIGZ1bGwgYmFja3VwIG9mIHlvdXIgd2Vic2l0ZS4gQmFja3VwcyBjYW4gdGFrZSB1cCB0byBvbmUgbWludXRlIHBlciBHQiBvZiBkYXRhLjwvcD5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1idXR0b24gdi1tb2RhbDpjb25maXJtLWZvcm0gQGNsaWNrPVwiYmFja3VwKClcIiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzPVwibWwtM1wiPkJhY2t1cDwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtbW9kYWw6Y29uZmlybS1mb3JtPkNhbmNlbDwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3VpLW1vZGFsPlxuXG4gICAgICAgICAgICA8IS0tIERlbGV0ZSBleGlzdGluZyBiYWNrdXAgLS0+XG5cdFx0XHQ8dWktbW9kYWwgbmFtZT1cImRlbGV0ZS1mb3JtXCIgdGl0bGU9XCJEZWxldGUgQmFja3VwXCIga2V5PVwiZGVsZXRlX2Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcGVybWVuYW50bHkgZGVsZXRlIHRoaXMgYmFja3VwPzwvcD5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCIgc2xvdC1zY29wZT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiB2LW1vZGFsOmRlbGV0ZS1mb3JtIEBjbGljaz1cImRlc3Ryb3koZm9ybS5kYXRhLm5hbWUpXCIgdmFyaWFudD1cImRhbmdlclwiIGNsYXNzPVwibWwtM1wiPkRlbGV0ZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtbW9kYWw6ZGVsZXRlLWZvcm0+Q2FuY2VsPC91aS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWktbW9kYWw+XG5cblx0XHRcdDwhLS0gVXBsb2FkIGJhY2t1cCAtLT5cblx0XHRcdDx1aS1tb2RhbCBuYW1lPVwidXBsb2FkXCIgdGl0bGU9XCJVcGxvYWQgQmFja3VwXCIga2V5PVwidXBsb2FkLWJhY2t1cFwiPlxuXHRcdFx0XHQ8dWktdXBsb2FkXG5cdFx0XHRcdFx0bmFtZT1cImZpbGUtdXBsb2FkXCJcblx0XHRcdFx0XHRsYWJlbD1cIlVwbG9hZFwiXG5cdFx0XHRcdFx0cmVmPVwidXBsb2FkXCJcblx0XHRcdFx0XHRhY2NlcHQ9XCJ6aXBcIlxuXHRcdFx0XHRcdDptdWx0aXBsZT1cImZhbHNlXCJcblx0XHRcdFx0XHRAaW5wdXQ9XCJ1cGxvYWRcIlxuXHRcdFx0XHQ+PC91aS11cGxvYWQ+XG5cdFx0XHQ8L3VpLW1vZGFsPlxuICAgICAgICA8L3BvcnRhbD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0aGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6ICdCYWNrdXBzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblx0XHR9LFxuXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRlc3RpbmF0aW9uczogW10sXG5cdFx0XHRcdHJlYWR5OiBmYWxzZSxcblx0XHRcdFx0c2F2ZUJhY2t1cDogdHJ1ZSxcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuICAgICAgICAgICAgcmVmcmVzaCgpIHtcbiAgICAgICAgICAgIFx0dGhpcy5yZWFkeSA9IGZhbHNlXG5cbiAgICAgICAgICAgIFx0YXhpb3MuZ2V0KCcvYXBpL2JhY2t1cHMnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIFx0XHR0aGlzLmRlc3RpbmF0aW9ucyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICAgICAgXHRcdHRoaXMucmVhZHkgICAgICAgID0gdHJ1ZVxuICAgICAgICAgICAgXHRcdHRoaXMuc2F2ZUJhY2t1cCAgID0gdHJ1ZVxuICAgICAgICAgICAgXHR9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdXBsb2FkKGZpbGVzKSB7XG4gICAgICAgICAgICBcdGlmICh0eXBlb2YgZmlsZXMgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIFx0XHRyZXR1cm47XG4gICAgICAgICAgICBcdH1cblxuXHRcdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdfbWV0aG9kJywgJ1BPU1QnKVxuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUtdXBsb2FkJywgZmlsZXMpXG5cblx0XHRcdFx0YXhpb3MucG9zdCgnL2FwaS9iYWNrdXBzL3VwbG9hZCcsIGZvcm1EYXRhKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHR0b2FzdCgnQmFja3VwIHN1Y2Nlc3NmdWxseSB1cGxvYWRlZCEnLCAnc3VjY2VzcycpXG5cblx0XHRcdFx0XHR0aGlzLiRyZWZzLnVwbG9hZC5yZW1vdmUoKVxuXHRcdFx0XHRcdHRoaXMucmVmcmVzaCgpXG5cdFx0XHRcdH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBkb3dubG9hZChiYWNrdXApIHtcbiAgICAgICAgICAgIFx0d2luZG93Lm9wZW4oYC9iYWNrdXBzLyR7YmFja3VwfWAsICdfYmxhbmsnKVxuICAgICAgICAgICAgfSxcblxuXHRcdFx0cmVzdG9yZShiYWNrdXApIHtcblx0XHRcdFx0YXhpb3MucG9zdChgL2FwaS9iYWNrdXBzL3Jlc3RvcmUvJHtiYWNrdXB9YCwgeyBzYXZlQmFja3VwOiB0aGlzLnNhdmVCYWNrdXAgfSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0dG9hc3QoJ0JhY2t1cCBzdWNjZXNzZnVsbHkgcmVzdG9yZWQhJywgJ3N1Y2Nlc3MnKVxuXG5cdFx0XHRcdFx0dGhpcy5yZWZyZXNoKClcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cblx0XHRcdGJhY2t1cCgpIHtcblx0XHRcdFx0YXhpb3MucG9zdCgnL2FwaS9iYWNrdXBzJykudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0dG9hc3QoJ0JhY2t1cCBzdWNjZXNzZnVsbHkgY3JlYXRlZCEnLCAnc3VjY2VzcycpXG5cblx0XHRcdFx0XHR0aGlzLnJlZnJlc2goKVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblxuXHRcdFx0ZGVzdHJveShiYWNrdXApIHtcblx0XHRcdFx0YXhpb3MuZGVsZXRlKGAvYXBpL2JhY2t1cHMvJHtiYWNrdXB9YCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ0JhY2twIHN1Y2Nlc3NmdWxseSBkZWxldGVkIScsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKVxuICAgICAgICAgICAgICAgIH0pXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcblx0XHRcdG5leHQoZnVuY3Rpb24odm0pIHtcblx0XHRcdFx0dm0ucmVmcmVzaCgpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJzYXZlXCIgfSB9LCBbX3ZtLl92KFwiQmFja3Vwc1wiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBcIm1vZGFsXCIsIHJhd05hbWU6IFwidi1tb2RhbDpzZXR0aW5nc1wiLCBhcmc6IFwic2V0dGluZ3NcIiB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJTZXR0aW5nc1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBcIm1vZGFsXCIsIHJhd05hbWU6IFwidi1tb2RhbDp1cGxvYWRcIiwgYXJnOiBcInVwbG9hZFwiIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlVwbG9hZFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmNvbmZpcm0tZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgYXJnOiBcImNvbmZpcm0tZm9ybVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkJhY2t1cCBOb3dcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidWktY2FyZFwiLCB7IGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAhX3ZtLnJlYWR5XG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5IHRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1zcGluIG1yLTNcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNpcmNsZS1ub3RjaFwiXSB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIExvYWRpbmcgYmFja3Vwcy4uLlxcblxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kZXN0aW5hdGlvbnMsIGZ1bmN0aW9uKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGFibGVcIiwgeyBrZXk6IGRlc3RpbmF0aW9uLm5hbWUgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3JlYXRlZFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTaXplXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChkZXN0aW5hdGlvbi5iYWNrdXBzLCBmdW5jdGlvbihiYWNrdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogYmFja3VwLm5hbWUgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhiYWNrdXAubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhiYWNrdXAuaGFwcGVuZWQpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoYmFja3VwLnNpemUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWktZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImJhcnNcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2xvdDogXCJvcHRpb25zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1kcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOnJlc3RvcmUtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYmFja3VwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJhY2t1cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicmVzdG9yZS1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRSZXN0b3JlXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWktZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kb3dubG9hZChiYWNrdXAubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdERvd25sb2FkXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWJhY2t1cC5pc05ld2VzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1kcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBiYWNrdXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJhY2t1cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZS1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdERlbGV0ZVxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJtb2RhbHNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNldHRpbmdzLW1vZGFsXCIsIHsgYXR0cnM6IHsgaGFuZGxlOiBcImJhY2t1cHNcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJyZXN0b3JlX2Zvcm1cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJyZXN0b3JlLWZvcm1cIiwgdGl0bGU6IFwiUmVzdG9yZSBCYWNrdXBcIiB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpyZXN0b3JlLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJyZXN0b3JlLWZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVzdG9yZShmb3JtLmRhdGEubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVzdG9yZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOnJlc3RvcmUtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInJlc3RvcmUtZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlJlc3RvcmluZyBhIGJhY2t1cCB3aWxsIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcInJlcGxhY2UgYWxsIGZpbGVzIGFuZCB0aGUgZGF0YWJhc2Ugd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGJhY2t1cC5cIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiIFVubGVzcyB5b3Ugc3BlY2lmeSB0byBjcmVhdGUgYSBuZXcgYmFja3VwIGR1cmluZyB0aGlzIHByb2Nlc3MsIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHVuZG8geW91ciBjaGFuZ2VzIGlmIHlvdSBjaGFuZ2UgeW91ciBtaW5kLlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwic2F2ZUJhY2t1cFwiIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNhdmVCYWNrdXAsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2F2ZUJhY2t1cCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNhdmVCYWNrdXBcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXFx0XFx0XFx0Q3JlYXRlIGEgYmFja3VwIGJlZm9yZSByZXN0b3JpbmdcXG4gICAgICAgIFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWktbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImNvbmZpcm1fZm9ybVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImNvbmZpcm0tZm9ybVwiLCB0aXRsZTogXCJCYWNrdXAgTm93XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlRoaXMgd2lsbCBwZXJmb3JtIGEgZnVsbCBiYWNrdXAgb2YgeW91ciB3ZWJzaXRlLiBCYWNrdXBzIGNhbiB0YWtlIHVwIHRvIG9uZSBtaW51dGUgcGVyIEdCIG9mIGRhdGEuXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgeyBzbG90OiBcImZvb3RlclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmNvbmZpcm0tZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiY29uZmlybS1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYmFja3VwKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJCYWNrdXBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpjb25maXJtLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImNvbmZpcm0tZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWktbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlbGV0ZV9mb3JtXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiZGVsZXRlLWZvcm1cIiwgdGl0bGU6IFwiRGVsZXRlIEJhY2t1cFwiIH0sXG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJmb290ZXJcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmRlbGV0ZS1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVsZXRlLWZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcImRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZXN0cm95KGZvcm0uZGF0YS5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZWxldGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpkZWxldGUtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZS1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcGVybWVuYW50bHkgZGVsZXRlIHRoaXMgYmFja3VwP1wiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWktbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcInVwbG9hZC1iYWNrdXBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ1cGxvYWRcIiwgdGl0bGU6IFwiVXBsb2FkIEJhY2t1cFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidWktdXBsb2FkXCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwidXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmlsZS11cGxvYWRcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlVwbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgYWNjZXB0OiBcInppcFwiLFxuICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBpbnB1dDogX3ZtLnVwbG9hZCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjdjNDA3NWImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI3YzQwNzViJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI3YzQwNzViJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI3YzQwNzViJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjdjNDA3NWImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjdjNDA3NWInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9CYWNrdXBzL0luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjdjNDA3NWImXCIiXSwic291cmNlUm9vdCI6IiJ9