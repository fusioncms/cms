(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Backups/Show.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Backups/Show.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default, getModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModel", function() { return getModel; });
/* harmony import */ var _services_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Form */ "./resources/js/services/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  permission: 'backups.view',
  head: {
    title: function title() {
      return {
        inner: this.backup.name || 'Loading...'
      };
    }
  },
  mixins: [__webpack_require__(/*! ../../mixins/backups */ "./resources/js/mixins/backups.js")["default"], __webpack_require__(/*! ../../mixins/filehelper */ "./resources/js/mixins/filehelper.js")["default"]],
  data: function data() {
    return {
      backup: {},
      form: false
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.patch("/api/backups/".concat(this.backup.id)).then(function (response) {
        _this.backup = response.data;
        toast('User successfully updated', 'success');
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getModel(to.params.backup, function (error, backup) {
      if (error) {
        next(function (vm) {
          vm.$router.push('/backup');
          toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.backup = backup;
          vm.form = new _services_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
            'name': backup.name
          }, true);
          vm.$emit('updateHead');
        });
      }
    });
  }
});
function getModel(id, callback) {
  axios.get("/api/backups/".concat(id)).then(function (response) {
    return callback(null, response.data.data);
  })["catch"](function (error) {
    callback(new Error('The requested role could not be found'));
  });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Backups/Show.vue?vue&type=template&id=5465fff8&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Backups/Show.vue?vue&type=template&id=5465fff8& ***!
  \**********************************************************************************************************************************************************************************************************/
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
        [
          _c("page-title", { attrs: { icon: "save" } }, [
            _vm._v("Backups - " + _vm._s(_vm.backup.name))
          ])
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
                key: "go-back-btn",
                attrs: { to: { name: "backups" }, variant: "secondary" }
              },
              [_vm._v("Go Back")]
            ),
            _vm._v(" "),
            _c(
              "ui-button",
              {
                key: "save-btn",
                attrs: { variant: "primary", disabled: !_vm.form.hasChanges },
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
      _vm.form
        ? _c(
            "section-card",
            {
              attrs: {
                title: "Backup Information",
                description: "General information about this backup."
              }
            },
            [
              _c(
                "dl",
                { staticClass: "detail-list" },
                [
                  _c("ui-input-group", {
                    attrs: {
                      id: "user-name",
                      name: "name",
                      label: "Name",
                      autocomplete: "off",
                      autofocus: "",
                      required: "",
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
                  _c("dt", [_vm._v("Disk")]),
                  _vm._v(" "),
                  _c("dd", [_vm._v(_vm._s(_vm.backup.disk))]),
                  _vm._v(" "),
                  _c("dt", [_vm._v("Size")]),
                  _vm._v(" "),
                  _c("dd", [
                    _c("code", [_vm._v(_vm._s(_vm.filesize(_vm.backup.size)))])
                  ]),
                  _vm._v(" "),
                  _c("dt", [_vm._v("Created")]),
                  _vm._v(" "),
                  _c("dd", [
                    _vm._v(_vm._s(_vm.$moment(_vm.backup.created_at).fromNow()))
                  ]),
                  _vm._v(" "),
                  _c("dt", [_vm._v("Status")]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "flex" }, [
                    _vm.backup.state == "success"
                      ? _c(
                          "span",
                          [
                            _c("fa-icon", {
                              staticClass: "icon fa-xs text-success-500",
                              attrs: { icon: "circle" }
                            }),
                            _vm._v(" Success\n                ")
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.backup.state == "failed"
                      ? _c(
                          "span",
                          [
                            _c("fa-icon", {
                              staticClass: "icon fa-xs text-danger-500",
                              attrs: { icon: "circle" }
                            }),
                            _vm._v(" Failed\n                ")
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.backup.state == "in-progress"
                      ? _c(
                          "span",
                          [
                            _c("fa-icon", {
                              staticClass: "icon fa-xs text-orange-500",
                              attrs: { icon: "circle" }
                            }),
                            _vm._v(" In Progress\n                ")
                          ],
                          1
                        )
                      : _vm._e()
                  ])
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.form
        ? _c(
            "section-card",
            {
              attrs: {
                title: "Actions",
                description:
                  "Management actions that can be performed for this backup."
              }
            },
            [
              _c(
                "div",
                { staticClass: "mb-4" },
                [
                  _c("span", { staticClass: "label" }, [
                    _vm._v("Restore Backup")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "help mb-2" }, [
                    _vm._v("Restore FusionCMS to this backup.")
                  ]),
                  _vm._v(" "),
                  _c(
                    "ui-button",
                    {
                      directives: [
                        {
                          name: "modal",
                          rawName: "v-modal:restore-backup",
                          value: _vm.backup,
                          expression: "backup",
                          arg: "restore-backup"
                        }
                      ],
                      attrs: { variant: "secondary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                        }
                      }
                    },
                    [_vm._v("Restore Backup")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-4" },
                [
                  _c("span", { staticClass: "label" }, [
                    _vm._v("Download Backup")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "help mb-2" }, [
                    _vm._v("Download backup zip.")
                  ]),
                  _vm._v(" "),
                  _c(
                    "ui-button",
                    {
                      attrs: { variant: "secondary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.downloadBackup(_vm.backup.id)
                        }
                      }
                    },
                    [_vm._v("Download Backup")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-4" },
                [
                  _c("span", { staticClass: "label" }, [
                    _vm._v("Delete Backup")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "help mb-2" }, [
                    _vm._v(
                      "Once you delete this backup, there is no going back. Please be certain."
                    )
                  ]),
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
                      ],
                      attrs: { variant: "danger" }
                    },
                    [_vm._v("Delete Backup")]
                  )
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "Backup Log",
            description: "See what has been happening."
          }
        },
        [
          _vm.backup.logs
            ? _c(
                "table",
                { staticClass: "table", attrs: { "aria-live": "polite" } },
                [
                  _c("tr", [
                    _c("th", [
                      _c("span", { staticClass: "table__heading" }, [
                        _vm._v("Level")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _c("span", { staticClass: "table__heading" }, [
                        _vm._v("Message")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _c("span", { staticClass: "table__heading" }, [
                        _vm._v("Happened")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.backup.logs.data, function(log, index) {
                    return _c("tr", { key: "log-" + index }, [
                      _c("td", { attrs: { align: "center" } }, [
                        _c("span", { staticClass: "column-label" }, [
                          _vm._v("Level")
                        ]),
                        _vm._v(
                          "\n                    " +
                            _vm._s(log.level_name) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", { staticClass: "column-label" }, [
                          _vm._v("Message")
                        ]),
                        _vm._v(
                          "\n                    " +
                            _vm._s(log.message) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "center" } }, [
                        _c("span", { staticClass: "column-label" }, [
                          _vm._v("Happened")
                        ]),
                        _vm._v(
                          "\n                    " +
                            _vm._s(log.happened) +
                            "\n                "
                        )
                      ])
                    ])
                  })
                ],
                2
              )
            : _vm._e()
        ]
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
              key: "delete_backup",
              attrs: { name: "delete-backup", title: "Delete Backup" }
            },
            [
              _c("p", [
                _vm._v(
                  "Are you sure you want to permenantly delete this backup?"
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
                          rawName: "v-modal:delete-backup",
                          arg: "delete-backup"
                        }
                      ],
                      staticClass: "ml-3",
                      attrs: { variant: "danger" },
                      on: {
                        click: function($event) {
                          return _vm.destroyBackup(_vm.backup.id)
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
                ],
                1
              )
            ],
            2
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

/***/ "./resources/js/pages/Backups/Show.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/Backups/Show.vue ***!
  \*********************************************/
/*! exports provided: getModel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_5465fff8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=5465fff8& */ "./resources/js/pages/Backups/Show.vue?vue&type=template&id=5465fff8&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/Backups/Show.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModel", function() { return _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getModel"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_5465fff8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_5465fff8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Backups/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Backups/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Backups/Show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default, getModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Backups/Show.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModel", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getModel"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Backups/Show.vue?vue&type=template&id=5465fff8&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Backups/Show.vue?vue&type=template&id=5465fff8& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5465fff8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=5465fff8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Backups/Show.vue?vue&type=template&id=5465fff8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5465fff8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5465fff8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0JhY2t1cHMvU2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0JhY2t1cHMvU2hvdy52dWU/YTZhNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL2JhY2t1cHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0JhY2t1cHMvU2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0JhY2t1cHMvU2hvdy52dWU/MDFlMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQmFja3Vwcy9TaG93LnZ1ZT9iNTJjIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJkb3dubG9hZEJhY2t1cCIsImlkIiwid2luZG93Iiwib3BlbiIsInJ1bkJhY2t1cCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsInRvYXN0IiwiZGF0YSIsIm1lc3NhZ2UiLCJkZXN0cm95QmFja3VwIiwiJHJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2R0E7QUFFQTtBQUNBLDRCQURBO0FBR0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQUhBO0FBV0EsV0FDQSw4RkFEQSxFQUVBLG9HQUZBLENBWEE7QUFnQkEsTUFoQkEsa0JBZ0JBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBO0FBRkE7QUFJQSxHQXJCQTtBQXVCQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQSw4REFDQSxJQURBLENBQ0E7QUFDQTtBQUVBO0FBQ0EsT0FMQSxXQU1BO0FBQ0E7QUFDQSxPQVJBO0FBU0E7QUFYQSxHQXZCQTtB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LENBQUNJLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixVQUFsQjtBQUNILE9BTEw7QUFNSDtBQXBCSTtBQURFLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy83Ny5qcz9pZD1lNDRlNzE5ZjQ3MTY0NmJhZGE4MyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYmFja3Vwcy1wYWdlXCI+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPHBhZ2UtdGl0bGUgaWNvbj1cInNhdmVcIj5CYWNrdXBzIC0ge3sgYmFja3VwLm5hbWUgfX08L3BhZ2UtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24ga2V5PVwiZ28tYmFjay1idG5cIiA6dG89XCJ7IG5hbWU6ICdiYWNrdXBzJyB9XCIgdmFyaWFudD1cInNlY29uZGFyeVwiPkdvIEJhY2s8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIGtleT1cInNhdmUtYnRuXCIgdmFyaWFudD1cInByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIDpkaXNhYmxlZD1cIiFmb3JtLmhhc0NoYW5nZXNcIj5TYXZlPC91aS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB2LWlmPVwiZm9ybVwiIHRpdGxlPVwiQmFja3VwIEluZm9ybWF0aW9uXCIgZGVzY3JpcHRpb249XCJHZW5lcmFsIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgYmFja3VwLlwiPlxuICAgICAgICAgICAgPGRsIGNsYXNzPVwiZGV0YWlsLWxpc3RcIj5cblxuICAgICAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXItbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cblxuICAgICAgICAgICAgICAgIDxkdD5EaXNrPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+e3sgYmFja3VwLmRpc2sgfX08L2RkPlxuICAgICAgICAgICAgICAgIDxkdD5TaXplPC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+PGNvZGU+e3sgZmlsZXNpemUoYmFja3VwLnNpemUpIH19PC9jb2RlPjwvZGQ+XG4gICAgICAgICAgICAgICAgPGR0PkNyZWF0ZWQ8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD57eyAkbW9tZW50KGJhY2t1cC5jcmVhdGVkX2F0KS5mcm9tTm93KCkgfX08L2RkPlxuICAgICAgICAgICAgICAgIDxkdD5TdGF0dXM8L2R0PlxuICAgICAgICAgICAgICAgIDxkZCBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImJhY2t1cC5zdGF0ZSA9PSAnc3VjY2VzcydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJjaXJjbGVcIiBjbGFzcz1cImljb24gZmEteHMgdGV4dC1zdWNjZXNzLTUwMFwiPjwvZmEtaWNvbj4gU3VjY2Vzc1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJiYWNrdXAuc3RhdGUgPT0gJ2ZhaWxlZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJjaXJjbGVcIiBjbGFzcz1cImljb24gZmEteHMgdGV4dC1kYW5nZXItNTAwXCI+PC9mYS1pY29uPiBGYWlsZWRcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiYmFja3VwLnN0YXRlID09ICdpbi1wcm9ncmVzcydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJjaXJjbGVcIiBjbGFzcz1cImljb24gZmEteHMgdGV4dC1vcmFuZ2UtNTAwXCI+PC9mYS1pY29uPiBJbiBQcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kZD5cbiAgICAgICAgICAgIDwvZGw+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdi1pZj1cImZvcm1cIiB0aXRsZT1cIkFjdGlvbnNcIiBkZXNjcmlwdGlvbj1cIk1hbmFnZW1lbnQgYWN0aW9ucyB0aGF0IGNhbiBiZSBwZXJmb3JtZWQgZm9yIHRoaXMgYmFja3VwLlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+UmVzdG9yZSBCYWNrdXA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWxwIG1iLTJcIj5SZXN0b3JlIEZ1c2lvbkNNUyB0byB0aGlzIGJhY2t1cC48L3A+XG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgQGNsaWNrLnByZXZlbnQgdi1tb2RhbDpyZXN0b3JlLWJhY2t1cD1cImJhY2t1cFwiPlJlc3RvcmUgQmFja3VwPC91aS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+RG93bmxvYWQgQmFja3VwPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVscCBtYi0yXCI+RG93bmxvYWQgYmFja3VwIHppcC48L3A+XG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgQGNsaWNrLnByZXZlbnQ9XCJkb3dubG9hZEJhY2t1cChiYWNrdXAuaWQpXCI+RG93bmxvYWQgQmFja3VwPC91aS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+RGVsZXRlIEJhY2t1cDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlbHAgbWItMlwiPk9uY2UgeW91IGRlbGV0ZSB0aGlzIGJhY2t1cCwgdGhlcmUgaXMgbm8gZ29pbmcgYmFjay4gUGxlYXNlIGJlIGNlcnRhaW4uPC9wPlxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24gdmFyaWFudD1cImRhbmdlclwiIHYtbW9kYWw6ZGVsZXRlLWJhY2t1cD5EZWxldGUgQmFja3VwPC91aS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIkJhY2t1cCBMb2dcIiBkZXNjcmlwdGlvbj1cIlNlZSB3aGF0IGhhcyBiZWVuIGhhcHBlbmluZy5cIj5cbiAgICAgICAgICAgIDx0YWJsZSB2LWlmPVwiYmFja3VwLmxvZ3NcIiBjbGFzcz1cInRhYmxlXCIgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+PHNwYW4gY2xhc3M9XCJ0YWJsZV9faGVhZGluZ1wiPkxldmVsPC9zcGFuPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD48c3BhbiBjbGFzcz1cInRhYmxlX19oZWFkaW5nXCI+TWVzc2FnZTwvc3Bhbj48L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+PHNwYW4gY2xhc3M9XCJ0YWJsZV9faGVhZGluZ1wiPkhhcHBlbmVkPC9zcGFuPjwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIobG9nLCBpbmRleCkgaW4gYmFja3VwLmxvZ3MuZGF0YVwiIDprZXk9XCJgbG9nLSR7aW5kZXh9YFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLWxhYmVsXCI+TGV2ZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsb2cubGV2ZWxfbmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbi1sYWJlbFwiPk1lc3NhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsb2cubWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLWxhYmVsXCI+SGFwcGVuZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsb2cuaGFwcGVuZWQgfX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cIm1vZGFsc1wiPlxuICAgICAgICAgICAgPHJlc3RvcmUtYmFja3VwLW1vZGFsPjwvcmVzdG9yZS1iYWNrdXAtbW9kYWw+XG5cbiAgICAgICAgICAgIDx1aS1tb2RhbCBuYW1lPVwiZGVsZXRlLWJhY2t1cFwiIHRpdGxlPVwiRGVsZXRlIEJhY2t1cFwiIGtleT1cImRlbGV0ZV9iYWNrdXBcIj5cbiAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcGVybWVuYW50bHkgZGVsZXRlIHRoaXMgYmFja3VwPzwvcD5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1idXR0b24gdi1tb2RhbDpkZWxldGUtYmFja3VwIEBjbGljaz1cImRlc3Ryb3lCYWNrdXAoYmFja3VwLmlkKVwiIHZhcmlhbnQ9XCJkYW5nZXJcIiBjbGFzcz1cIm1sLTNcIj5EZWxldGU8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiB2LW1vZGFsOmRlbGV0ZS1iYWNrdXA+Q2FuY2VsPC91aS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWktbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Gb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwZXJtaXNzaW9uOiAnYmFja3Vwcy52aWV3JyxcblxuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogdGhpcy5iYWNrdXAubmFtZSB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWl4aW5zOiBbXG4gICAgICAgICAgICByZXF1aXJlKCcuLi8uLi9taXhpbnMvYmFja3VwcycpLmRlZmF1bHQsXG4gICAgICAgICAgICByZXF1aXJlKCcuLi8uLi9taXhpbnMvZmlsZWhlbHBlcicpLmRlZmF1bHQsXG4gICAgICAgIF0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYmFja3VwOiB7fSxcbiAgICAgICAgICAgICAgICBmb3JtOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucGF0Y2goYC9hcGkvYmFja3Vwcy8ke3RoaXMuYmFja3VwLmlkfWApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWNrdXAgPSByZXNwb25zZS5kYXRhXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KCdVc2VyIHN1Y2Nlc3NmdWxseSB1cGRhdGVkJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBnZXRNb2RlbCh0by5wYXJhbXMuYmFja3VwLCAoZXJyb3IsIGJhY2t1cCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvYmFja3VwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnRvU3RyaW5nKCksICdkYW5nZXInKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5iYWNrdXAgPSBiYWNrdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZvcm0gICA9IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IGJhY2t1cC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJGVtaXQoJ3VwZGF0ZUhlYWQnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TW9kZWwoaWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLmdldChgL2FwaS9iYWNrdXBzLyR7aWR9YClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlLmRhdGEuZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdUaGUgcmVxdWVzdGVkIHJvbGUgY291bGQgbm90IGJlIGZvdW5kJykpXG4gICAgICAgICAgICB9KVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImJhY2t1cHMtcGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBhZ2UtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcInNhdmVcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkJhY2t1cHMgLSBcIiArIF92bS5fcyhfdm0uYmFja3VwLm5hbWUpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJnby1iYWNrLWJ0blwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiYmFja3Vwc1wiIH0sIHZhcmlhbnQ6IFwic2Vjb25kYXJ5XCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic2F2ZS1idG5cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiwgZGlzYWJsZWQ6ICFfdm0uZm9ybS5oYXNDaGFuZ2VzIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5mb3JtXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJhY2t1cCBJbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdlbmVyYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBiYWNrdXAuXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsLWxpc3RcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInVzZXItbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImR0XCIsIFtfdm0uX3YoXCJEaXNrXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFja3VwLmRpc2spKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIlNpemVcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJjb2RlXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5maWxlc2l6ZShfdm0uYmFja3VwLnNpemUpKSldKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkdFwiLCBbX3ZtLl92KFwiQ3JlYXRlZFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kbW9tZW50KF92bS5iYWNrdXAuY3JlYXRlZF9hdCkuZnJvbU5vdygpKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZHRcIiwgW192bS5fdihcIlN0YXR1c1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGRcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uYmFja3VwLnN0YXRlID09IFwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBmYS14cyB0ZXh0LXN1Y2Nlc3MtNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImNpcmNsZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgU3VjY2Vzc1xcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5iYWNrdXAuc3RhdGUgPT0gXCJmYWlsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gZmEteHMgdGV4dC1kYW5nZXItNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImNpcmNsZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRmFpbGVkXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmJhY2t1cC5zdGF0ZSA9PSBcImluLXByb2dyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGZhLXhzIHRleHQtb3JhbmdlLTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJjaXJjbGVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEluIFByb2dyZXNzXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZm9ybVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICBcIk1hbmFnZW1lbnQgYWN0aW9ucyB0aGF0IGNhbiBiZSBwZXJmb3JtZWQgZm9yIHRoaXMgYmFja3VwLlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi00XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUmVzdG9yZSBCYWNrdXBcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImhlbHAgbWItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUmVzdG9yZSBGdXNpb25DTVMgdG8gdGhpcyBiYWNrdXAuXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6cmVzdG9yZS1iYWNrdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5iYWNrdXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYmFja3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJyZXN0b3JlLWJhY2t1cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInNlY29uZGFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZXN0b3JlIEJhY2t1cFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEb3dubG9hZCBCYWNrdXBcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImhlbHAgbWItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRG93bmxvYWQgYmFja3VwIHppcC5cIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJzZWNvbmRhcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZG93bmxvYWRCYWNrdXAoX3ZtLmJhY2t1cC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEb3dubG9hZCBCYWNrdXBcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi00XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRGVsZXRlIEJhY2t1cFwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVscCBtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJPbmNlIHlvdSBkZWxldGUgdGhpcyBiYWNrdXAsIHRoZXJlIGlzIG5vIGdvaW5nIGJhY2suIFBsZWFzZSBiZSBjZXJ0YWluLlwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpkZWxldGUtYmFja3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkZWxldGUtYmFja3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwiZGFuZ2VyXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGVsZXRlIEJhY2t1cFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJCYWNrdXAgTG9nXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWUgd2hhdCBoYXMgYmVlbiBoYXBwZW5pbmcuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uYmFja3VwLmxvZ3NcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGVcIiwgYXR0cnM6IHsgXCJhcmlhLWxpdmVcIjogXCJwb2xpdGVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX19oZWFkaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTGV2ZWxcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVfX2hlYWRpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNZXNzYWdlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX19oZWFkaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiSGFwcGVuZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5iYWNrdXAubG9ncy5kYXRhLCBmdW5jdGlvbihsb2csIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBcImxvZy1cIiArIGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4tbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkxldmVsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MobG9nLmxldmVsX25hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4tbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk1lc3NhZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhsb2cubWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4tbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkhhcHBlbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MobG9nLmhhcHBlbmVkKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicmVzdG9yZS1iYWNrdXAtbW9kYWxcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWktbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlbGV0ZV9iYWNrdXBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJkZWxldGUtYmFja3VwXCIsIHRpdGxlOiBcIkRlbGV0ZSBCYWNrdXBcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHBlcm1lbmFudGx5IGRlbGV0ZSB0aGlzIGJhY2t1cD9cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICB7IHNsb3Q6IFwiZm9vdGVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlLWJhY2t1cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVsZXRlLWJhY2t1cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJkYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVzdHJveUJhY2t1cChfdm0uYmFja3VwLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRlbGV0ZVwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmRlbGV0ZS1iYWNrdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZS1iYWNrdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGRvd25sb2FkQmFja3VwKGlkKSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbihgL2JhY2t1cHMvJHtpZH1gLCAnX2JsYW5rJylcbiAgICAgICAgfSxcblxuICAgICAgICBydW5CYWNrdXAoKSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL2JhY2t1cHMnKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdCYWNrdXAgcmVxdWVzdCBhZGRlZCB0byBxdWV1ZSEnLCAnc3VjY2VzcycpKVxuICAgICAgICAgICAgICAgIC5jYXRjaChyZXNwb25zZSA9PlxuICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKSlcbiAgICAgICAgfSxcblxuICAgICAgICBkZXN0cm95QmFja3VwKGlkKSB7XG4gICAgICAgICAgICBheGlvcy5kZWxldGUoYC9hcGkvYmFja3Vwcy8ke2lkfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdCYWNrcCBzdWNjZXNzZnVsbHkgZGVsZXRlZCEnLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9iYWNrdXBzJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDY1ZmZmOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU0NjVmZmY4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU0NjVmZmY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU0NjVmZmY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDY1ZmZmOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NDY1ZmZmOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL0JhY2t1cHMvU2hvdy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0NjVmZmY4JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==