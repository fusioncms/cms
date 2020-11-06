(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: 'Backups'
      };
    }
  },
  mixins: [__webpack_require__(/*! ../../mixins/backups */ "./resources/js/mixins/backups.js")["default"], __webpack_require__(/*! ../../mixins/filehelper */ "./resources/js/mixins/filehelper.js")["default"]],
  data: function data() {
    return {
      endpoint: '/datatable/backups'
    };
  },
  methods: {
    upload: function upload(files) {
      var _this = this;

      if (typeof files == 'undefined') return;
      var formData = new FormData();
      formData.append('_method', 'POST');
      formData.append('file-upload', files);
      axios.post('/api/backups/upload', formData).then(function () {
        toast('Backup successfully uploaded!', 'success');

        _this.$refs.upload.remove();

        bus().$emit('refresh-datatable-backups');
      });
    }
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
    { staticClass: "backups-page" },
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [_c("page-title", { attrs: { icon: "save" } }, [_vm._v("Backups")])],
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
                  {
                    name: "modal",
                    rawName: "v-modal:upload-backup",
                    arg: "upload-backup"
                  }
                ],
                staticClass: "mr-1"
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
                    rawName: "v-modal:confirm-backup",
                    arg: "confirm-backup"
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
        )
      ]),
      _vm._v(" "),
      _c(
        "ui-card",
        [
          _c(
            "ui-card-body",
            [
              _c("ui-table", {
                key: "backups",
                staticClass: "backup-table",
                attrs: {
                  refresh: 5000,
                  id: "backups",
                  endpoint: _vm.endpoint,
                  "sort-by": "name",
                  "sort-in": "desc",
                  "per-page": 50
                },
                scopedSlots: _vm._u([
                  {
                    key: "name",
                    fn: function(table) {
                      return [
                        _c("ui-status", {
                          staticClass: "mr-2",
                          attrs: { value: table.record.state == "success" }
                        }),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "backups.show",
                                params: { backup: table.record.id }
                              }
                            }
                          },
                          [_vm._v(_vm._s(table.record.name))]
                        )
                      ]
                    }
                  },
                  {
                    key: "size",
                    fn: function(table) {
                      return [
                        _c("code", [
                          _vm._v(_vm._s(_vm.filesize(table.record.size)))
                        ])
                      ]
                    }
                  },
                  {
                    key: "created_at",
                    fn: function(table) {
                      return [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm.$moment(table.record.created_at).fromNow()
                            ) +
                            "\n                    "
                        )
                      ]
                    }
                  },
                  {
                    key: "actions",
                    fn: function(table) {
                      return [
                        _c(
                          "ui-table-actions",
                          {
                            key: "backup_" + table.record.id + "_actions",
                            attrs: {
                              id: "backup_" + table.record.id + "_actions"
                            }
                          },
                          [
                            _vm.$can("backups.view")
                              ? _c(
                                  "ui-dropdown-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "backups.show",
                                        params: { backup: table.record.id }
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\tView\n\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c("ui-dropdown-divider"),
                            _vm._v(" "),
                            _vm.$can("backups.restore")
                              ? _c(
                                  "ui-dropdown-link",
                                  {
                                    directives: [
                                      {
                                        name: "modal",
                                        rawName: "v-modal:restore-backup",
                                        value: table.record,
                                        expression: "table.record",
                                        arg: "restore-backup"
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
                                      "\n\t\t\t\t\t\t\t\tRestore\n\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "ui-dropdown-link",
                              {
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.downloadBackup(table.record.id)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\tDownload\n\t\t\t\t\t\t\t"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            !table.record.isLatest && _vm.$can("backups.delete")
                              ? _c(
                                  "ui-dropdown-link",
                                  {
                                    directives: [
                                      {
                                        name: "modal",
                                        rawName: "v-modal:delete-backup",
                                        value: table.record,
                                        expression: "table.record",
                                        arg: "delete-backup"
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
                                      "\n\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              : _vm._e()
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c("restore-backup-modal"),
          _vm._v(" "),
          _c(
            "ui-modal",
            {
              key: "confirm_backup",
              attrs: { name: "confirm-backup", title: "Backup Now" }
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
                          rawName: "v-modal:confirm-backup",
                          arg: "confirm-backup"
                        }
                      ],
                      staticClass: "ml-3",
                      attrs: { variant: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.runBackup()
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
                          rawName: "v-modal:confirm-backup",
                          arg: "confirm-backup"
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
              key: "delete_backup",
              attrs: { name: "delete-backup", title: "Delete Backup" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(backup) {
                    return [
                      _c(
                        "ui-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:delete-backup",
                              arg: "delete-backup"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { variant: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.destroyBackup(backup.data.id)
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
                              rawName: "v-modal:delete-backup",
                              arg: "delete-backup"
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
              key: "upload_backup",
              attrs: { name: "upload-backup", title: "Upload Backup" }
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

/***/ "./resources/js/mixins/backups.js":
/*!****************************************!*\
  !*** ./resources/js/mixins/backups.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    downloadBackup: function downloadBackup(id) {
      window.open("/backups/".concat(id), '_blank');
    },
    runBackup: function runBackup() {
      axios.post('/api/backups').then(function (response) {
        return toast('Backup request added to queue!', 'success');
      })["catch"](function (response) {
        return toast(response.response.data.message, 'failed');
      });
    },
    destroyBackup: function destroyBackup(id) {
      var _this = this;

      axios["delete"]("/api/backups/".concat(id)).then(function (response) {
        toast('Backp successfully deleted!', 'success');

        _this.$router.push('/backups');
      });
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0JhY2t1cHMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9CYWNrdXBzL0luZGV4LnZ1ZT9kMTUwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9taXhpbnMvYmFja3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQmFja3Vwcy9JbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0JhY2t1cHMvSW5kZXgudnVlP2Q4OTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0JhY2t1cHMvSW5kZXgudnVlPzg3MTQiXSwibmFtZXMiOlsibWV0aG9kcyIsImRvd25sb2FkQmFja3VwIiwiaWQiLCJ3aW5kb3ciLCJvcGVuIiwicnVuQmFja3VwIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwidG9hc3QiLCJkYXRhIiwibWVzc2FnZSIsImRlc3Ryb3lCYWNrdXAiLCIkcm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0dBO0FBQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQURBO0FBU0EsV0FDQSw4RkFEQSxFQUVBLG9HQUZBLENBVEE7QUFjQSxNQWRBLGtCQWNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FsQkE7QUFvQkE7QUFDQSxVQURBLGtCQUNBLEtBREEsRUFDQTtBQUFBOztBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUEsa0RBQ0EsSUFEQSxDQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQVBBO0FBUUE7QUFqQkE7QUFwQkEsRzs7Ozs7Ozs7Ozs7O0FD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QVQsQ0FBa0JFLElBQWxCLENBQXVCQyxPQUF4QixFQUFpQyxRQUFqQyxDQURNO0FBQUEsT0FIbkI7QUFLSCxLQVhJO0FBYUxDLGlCQWJLLHlCQWFTWCxFQWJULEVBYWE7QUFBQTs7QUFDZEksV0FBSyxVQUFMLHdCQUE2QkosRUFBN0IsR0FDS00sSUFETCxDQUNVLFVBQUNDLFFBQUQsRUFBYztBQUNoQkMsYUFBSyxDQUFDLDZCQUFELEVBQWdDLFNBQWhDLENBQUw7O0FBRUEsYUFBSSxDQUFDSSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsVUFBbEI7QUFDSCxPQUxMO0FBTUg7QUFwQkk7QUFERSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzc2LmpzP2lkPWUxYTFlNjU5Mjg4NTQ0YjM0NWNjIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiYmFja3Vwcy1wYWdlXCI+XG5cdFx0PHBvcnRhbCB0bz1cInRpdGxlXCI+XG5cdFx0XHQ8cGFnZS10aXRsZSBpY29uPVwic2F2ZVwiPkJhY2t1cHM8L3BhZ2UtdGl0bGU+XG5cdFx0PC9wb3J0YWw+XG5cblx0XHQ8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cblx0XHRcdFx0PHVpLWJ1dHRvbiB2LW1vZGFsOnVwbG9hZC1iYWNrdXAgY2xhc3M9XCJtci0xXCI+VXBsb2FkPC91aS1idXR0b24+XG5cdFx0XHRcdDx1aS1idXR0b24gdi1tb2RhbDpjb25maXJtLWJhY2t1cCBAY2xpY2sucHJldmVudCB2YXJpYW50PVwicHJpbWFyeVwiPkJhY2t1cCBOb3c8L3VpLWJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvcG9ydGFsPlxuXG5cdFx0PHVpLWNhcmQ+XG4gICAgICAgICAgICA8dWktY2FyZC1ib2R5PlxuICAgICAgICAgICAgXHQ8dWktdGFibGUgOnJlZnJlc2g9XCI1MDAwXCIgOmtleT1cIidiYWNrdXBzJ1wiIGNsYXNzPVwiYmFja3VwLXRhYmxlXCIgaWQ9XCJiYWNrdXBzXCIgOmVuZHBvaW50PVwiZW5kcG9pbnRcIiBzb3J0LWJ5PVwibmFtZVwiIHNvcnQtaW49XCJkZXNjXCIgOnBlci1wYWdlPVwiNTBcIj5cbiAgICAgICAgICAgIFx0XHQ8dGVtcGxhdGUgc2xvdD1cIm5hbWVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1aS1zdGF0dXMgOnZhbHVlPVwidGFibGUucmVjb3JkLnN0YXRlID09ICdzdWNjZXNzJ1wiIGNsYXNzPVwibXItMlwiPjwvdWktc3RhdHVzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnYmFja3Vwcy5zaG93JywgcGFyYW1zOiB7YmFja3VwOiB0YWJsZS5yZWNvcmQuaWR9IH1cIj57eyB0YWJsZS5yZWNvcmQubmFtZSB9fTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIFx0XHQ8dGVtcGxhdGUgc2xvdD1cInNpemVcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPnt7IGZpbGVzaXplKHRhYmxlLnJlY29yZC5zaXplKSB9fTwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImNyZWF0ZWRfYXRcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ICRtb21lbnQodGFibGUucmVjb3JkLmNyZWF0ZWRfYXQpLmZyb21Ob3coKSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiYWN0aW9uc1wiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVpLXRhYmxlLWFjdGlvbnMgOmlkPVwiJ2JhY2t1cF8nICsgdGFibGUucmVjb3JkLmlkICsgJ19hY3Rpb25zJ1wiIDprZXk9XCInYmFja3VwXycgKyB0YWJsZS5yZWNvcmQuaWQgKyAnX2FjdGlvbnMnXCI+XG5cdFx0XHRcdFx0XHRcdDx1aS1kcm9wZG93bi1saW5rXG5cdFx0XHRcdFx0XHRcdFx0di1pZj1cIiRjYW4oJ2JhY2t1cHMudmlldycpXCJcblx0XHRcdFx0XHRcdFx0XHQ6dG89XCJ7IG5hbWU6ICdiYWNrdXBzLnNob3cnLCBwYXJhbXM6IHtiYWNrdXA6IHRhYmxlLnJlY29yZC5pZH0gfVwiPlxuXHRcdFx0XHRcdFx0XHRcdFZpZXdcblx0XHRcdFx0XHRcdFx0PC91aS1kcm9wZG93bi1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHRcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0PHVpLWRyb3Bkb3duLWRpdmlkZXI+PC91aS1kcm9wZG93bi1kaXZpZGVyPlxuXG5cdFx0XHRcdFx0XHRcdDx1aS1kcm9wZG93bi1saW5rXG5cdFx0XHRcdFx0XHRcdFx0di1pZj1cIiRjYW4oJ2JhY2t1cHMucmVzdG9yZScpXCJcblx0XHRcdFx0XHRcdFx0XHRAY2xpY2sucHJldmVudFxuXHRcdFx0XHRcdFx0XHRcdHYtbW9kYWw6cmVzdG9yZS1iYWNrdXA9XCJ0YWJsZS5yZWNvcmRcIj5cblx0XHRcdFx0XHRcdFx0XHRSZXN0b3JlXG5cdFx0XHRcdFx0XHRcdDwvdWktZHJvcGRvd24tbGluaz5cblxuXHRcdFx0XHRcdFx0XHQ8dWktZHJvcGRvd24tbGlua1xuXHRcdFx0XHRcdFx0XHRcdEBjbGljay5wcmV2ZW50PVwiZG93bmxvYWRCYWNrdXAodGFibGUucmVjb3JkLmlkKVwiPlxuXHRcdFx0XHRcdFx0XHRcdERvd25sb2FkXG5cdFx0XHRcdFx0XHRcdDwvdWktZHJvcGRvd24tbGluaz5cblxuXHRcdFx0XHRcdFx0XHQ8dWktZHJvcGRvd24tbGlua1xuXHRcdFx0XHRcdFx0XHRcdHYtaWY9XCIhIHRhYmxlLnJlY29yZC5pc0xhdGVzdCAmJiAkY2FuKCdiYWNrdXBzLmRlbGV0ZScpXCJcblx0XHRcdFx0XHRcdFx0XHRAY2xpY2sucHJldmVudFxuXHRcdFx0XHRcdFx0XHRcdHYtbW9kYWw6ZGVsZXRlLWJhY2t1cD1cInRhYmxlLnJlY29yZFwiPlxuXHRcdFx0XHRcdFx0XHRcdERlbGV0ZVxuXHRcdFx0XHRcdFx0XHQ8L3VpLWRyb3Bkb3duLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VpLXRhYmxlLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC91aS10YWJsZT5cbiAgICAgICAgICAgIDwvdWktY2FyZC1ib2R5PlxuICAgICAgICA8L3VpLWNhcmQ+XG5cblxuICAgICAgICA8cG9ydGFsIHRvPVwibW9kYWxzXCI+XG4gICAgICAgICAgICA8cmVzdG9yZS1iYWNrdXAtbW9kYWw+PC9yZXN0b3JlLWJhY2t1cC1tb2RhbD5cblxuICAgICAgICAgICAgPCEtLSBSdW4gbWFudWFsIGJhY2t1cCBwcm9jZXNzIC0tPlxuXHRcdFx0PHVpLW1vZGFsIG5hbWU9XCJjb25maXJtLWJhY2t1cFwiIHRpdGxlPVwiQmFja3VwIE5vd1wiIGtleT1cImNvbmZpcm1fYmFja3VwXCI+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyB3aWxsIHBlcmZvcm0gYSBmdWxsIGJhY2t1cCBvZiB5b3VyIHdlYnNpdGUuIEJhY2t1cHMgY2FuIHRha2UgdXAgdG8gb25lIG1pbnV0ZSBwZXIgR0Igb2YgZGF0YS48L3A+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtbW9kYWw6Y29uZmlybS1iYWNrdXAgQGNsaWNrPVwicnVuQmFja3VwKClcIiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzPVwibWwtM1wiPkJhY2t1cDwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtbW9kYWw6Y29uZmlybS1iYWNrdXA+Q2FuY2VsPC91aS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWktbW9kYWw+XG5cbiAgICAgICAgICAgIDwhLS0gRGVsZXRlIGV4aXN0aW5nIGJhY2t1cCAtLT5cblx0XHRcdDx1aS1tb2RhbCBuYW1lPVwiZGVsZXRlLWJhY2t1cFwiIHRpdGxlPVwiRGVsZXRlIEJhY2t1cFwiIGtleT1cImRlbGV0ZV9iYWNrdXBcIj5cbiAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcGVybWVuYW50bHkgZGVsZXRlIHRoaXMgYmFja3VwPzwvcD5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCIgc2xvdC1zY29wZT1cImJhY2t1cFwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtbW9kYWw6ZGVsZXRlLWJhY2t1cCBAY2xpY2s9XCJkZXN0cm95QmFja3VwKGJhY2t1cC5kYXRhLmlkKVwiIHZhcmlhbnQ9XCJkYW5nZXJcIiBjbGFzcz1cIm1sLTNcIj5EZWxldGU8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiB2LW1vZGFsOmRlbGV0ZS1iYWNrdXA+Q2FuY2VsPC91aS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWktbW9kYWw+XG5cblx0XHRcdDwhLS0gVXBsb2FkIGJhY2t1cCAtLT5cblx0XHRcdDx1aS1tb2RhbCBuYW1lPVwidXBsb2FkLWJhY2t1cFwiIHRpdGxlPVwiVXBsb2FkIEJhY2t1cFwiIGtleT1cInVwbG9hZF9iYWNrdXBcIj5cblx0XHRcdFx0PHVpLXVwbG9hZFxuXHRcdFx0XHRcdG5hbWU9XCJmaWxlLXVwbG9hZFwiXG5cdFx0XHRcdFx0bGFiZWw9XCJVcGxvYWRcIlxuXHRcdFx0XHRcdHJlZj1cInVwbG9hZFwiXG5cdFx0XHRcdFx0YWNjZXB0PVwiemlwXCJcblx0XHRcdFx0XHQ6bXVsdGlwbGU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0QGlucHV0PVwidXBsb2FkXCJcblx0XHRcdFx0PjwvdWktdXBsb2FkPlxuXHRcdFx0PC91aS1tb2RhbD5cbiAgICAgICAgPC9wb3J0YWw+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiAnQmFja3VwcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWl4aW5zOiBbXG4gICAgICAgICAgICByZXF1aXJlKCcuLi8uLi9taXhpbnMvYmFja3VwcycpLmRlZmF1bHQsXG4gICAgICAgICAgICByZXF1aXJlKCcuLi8uLi9taXhpbnMvZmlsZWhlbHBlcicpLmRlZmF1bHQsXG4gICAgICAgIF0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6ICcvZGF0YXRhYmxlL2JhY2t1cHMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICBcdG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHVwbG9hZChmaWxlcykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsZXMgPT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdfbWV0aG9kJywgJ1BPU1QnKVxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZS11cGxvYWQnLCBmaWxlcylcblxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvYmFja3Vwcy91cGxvYWQnLCBmb3JtRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ0JhY2t1cCBzdWNjZXNzZnVsbHkgdXBsb2FkZWQhJywgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnVwbG9hZC5yZW1vdmUoKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBidXMoKS4kZW1pdCgncmVmcmVzaC1kYXRhdGFibGUtYmFja3VwcycpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICBcdH1cblx0fVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYmFja3Vwcy1wYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW19jKFwicGFnZS10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwic2F2ZVwiIH0gfSwgW192bS5fdihcIkJhY2t1cHNcIildKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6dXBsb2FkLWJhY2t1cFwiLFxuICAgICAgICAgICAgICAgICAgICBhcmc6IFwidXBsb2FkLWJhY2t1cFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0xXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlVwbG9hZFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmNvbmZpcm0tYmFja3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIGFyZzogXCJjb25maXJtLWJhY2t1cFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQmFja3VwIE5vd1wiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidWktY2FyZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInVpLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiYmFja3Vwc1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJhY2t1cC10YWJsZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByZWZyZXNoOiA1MDAwLFxuICAgICAgICAgICAgICAgICAgaWQ6IFwiYmFja3Vwc1wiLFxuICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IF92bS5lbmRwb2ludCxcbiAgICAgICAgICAgICAgICAgIFwic29ydC1ieVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgIFwic29ydC1pblwiOiBcImRlc2NcIixcbiAgICAgICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1zdGF0dXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiB0YWJsZS5yZWNvcmQuc3RhdGUgPT0gXCJzdWNjZXNzXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImJhY2t1cHMuc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgYmFja3VwOiB0YWJsZS5yZWNvcmQuaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGFibGUucmVjb3JkLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJzaXplXCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImNvZGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5maWxlc2l6ZSh0YWJsZS5yZWNvcmQuc2l6ZSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjcmVhdGVkX2F0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kbW9tZW50KHRhYmxlLnJlY29yZC5jcmVhdGVkX2F0KS5mcm9tTm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJhY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS10YWJsZS1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYmFja3VwX1wiICsgdGFibGUucmVjb3JkLmlkICsgXCJfYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJiYWNrdXBfXCIgKyB0YWJsZS5yZWNvcmQuaWQgKyBcIl9hY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGNhbihcImJhY2t1cHMudmlld1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLWRyb3Bkb3duLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFja3Vwcy5zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGJhY2t1cDogdGFibGUucmVjb3JkLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFZpZXdcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWktZHJvcGRvd24tZGl2aWRlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kY2FuKFwiYmFja3Vwcy5yZXN0b3JlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWktZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6cmVzdG9yZS1iYWNrdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGFibGUucmVjb3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFibGUucmVjb3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInJlc3RvcmUtYmFja3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0UmVzdG9yZVxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLWRyb3Bkb3duLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kb3dubG9hZEJhY2t1cCh0YWJsZS5yZWNvcmQuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHREb3dubG9hZFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRhYmxlLnJlY29yZC5pc0xhdGVzdCAmJiBfdm0uJGNhbihcImJhY2t1cHMuZGVsZXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWktZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlLWJhY2t1cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YWJsZS5yZWNvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJsZS5yZWNvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVsZXRlLWJhY2t1cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdERlbGV0ZVxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwibW9kYWxzXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJyZXN0b3JlLWJhY2t1cC1tb2RhbFwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1aS1tb2RhbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiY29uZmlybV9iYWNrdXBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjb25maXJtLWJhY2t1cFwiLCB0aXRsZTogXCJCYWNrdXAgTm93XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlRoaXMgd2lsbCBwZXJmb3JtIGEgZnVsbCBiYWNrdXAgb2YgeW91ciB3ZWJzaXRlLiBCYWNrdXBzIGNhbiB0YWtlIHVwIHRvIG9uZSBtaW51dGUgcGVyIEdCIG9mIGRhdGEuXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgeyBzbG90OiBcImZvb3RlclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmNvbmZpcm0tYmFja3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJjb25maXJtLWJhY2t1cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJ1bkJhY2t1cCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQmFja3VwXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6Y29uZmlybS1iYWNrdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImNvbmZpcm0tYmFja3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1aS1tb2RhbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiZGVsZXRlX2JhY2t1cFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImRlbGV0ZS1iYWNrdXBcIiwgdGl0bGU6IFwiRGVsZXRlIEJhY2t1cFwiIH0sXG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJmb290ZXJcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihiYWNrdXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlLWJhY2t1cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZS1iYWNrdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcImRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZXN0cm95QmFja3VwKGJhY2t1cC5kYXRhLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZWxldGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpkZWxldGUtYmFja3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVsZXRlLWJhY2t1cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHBlcm1lbmFudGx5IGRlbGV0ZSB0aGlzIGJhY2t1cD9cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJ1cGxvYWRfYmFja3VwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwidXBsb2FkLWJhY2t1cFwiLCB0aXRsZTogXCJVcGxvYWQgQmFja3VwXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1aS11cGxvYWRcIiwge1xuICAgICAgICAgICAgICAgIHJlZjogXCJ1cGxvYWRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJmaWxlLXVwbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ6IFwiemlwXCIsXG4gICAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGlucHV0OiBfdm0udXBsb2FkIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgbWV0aG9kczoge1xuICAgICAgICBkb3dubG9hZEJhY2t1cChpZCkge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oYC9iYWNrdXBzLyR7aWR9YCwgJ19ibGFuaycpXG4gICAgICAgIH0sXG5cbiAgICAgICAgcnVuQmFja3VwKCkge1xuICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9iYWNrdXBzJylcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnQmFja3VwIHJlcXVlc3QgYWRkZWQgdG8gcXVldWUhJywgJ3N1Y2Nlc3MnKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2gocmVzcG9uc2UgPT5cbiAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJykpXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVzdHJveUJhY2t1cChpZCkge1xuICAgICAgICAgICAgYXhpb3MuZGVsZXRlKGAvYXBpL2JhY2t1cHMvJHtpZH1gKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnQmFja3Agc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhJywgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvYmFja3VwcycpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3YzQwNzViJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyN2M0MDc1YicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyN2M0MDc1YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyN2M0MDc1YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3YzQwNzViJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI3YzQwNzViJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvQmFja3Vwcy9JbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3YzQwNzViJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==