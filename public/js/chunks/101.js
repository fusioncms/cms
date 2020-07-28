(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Nodes/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Nodes/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        inner: this.menu.name || 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      menu: {},
      nodes: [],
      saving: false,
      before: null,
      after: null,
      form: new _services_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        url: '',
        new_window: 0
      })
    };
  },
  computed: {
    options: function options() {
      return _.map(this.nodes, function (node) {
        return {
          'label': node.name,
          'value': node.id
        };
      });
    }
  },
  methods: {
    add: function add(type) {
      var _this = this;

      this.saving = true;
      this.form.post('/api/menus/' + this.menu.id + '/nodes').then(function (response) {
        _this.fetchNodes().then(function (response) {
          _this.reset();

          _this.saving = false;
          toast('Menu node successfully added', 'success');
        });
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    },
    save: function save() {
      var _this2 = this;

      this.saving = true;
      var nodes = {};

      _.each(this.nodes, function (node, index) {
        nodes[node.id] = {
          order: index + 1
        };
      });

      axios.post('/api/menus/' + this.menu.id + '/reorder', {
        nodes: nodes
      }).then(function (response) {
        _this2.saving = false;
        toast('Menu nodes successfully reordered.', 'success');
      });
    },
    fetchNodes: function fetchNodes() {
      var _this3 = this;

      return axios.get('/api/menus/' + this.menu.id).then(function (response) {
        _this3.nodes = response.data.data.nodes;
      });
    },
    reset: function reset() {
      this.form.name = '';
      this.form.url = '';
      this.form.new_window = 0;
    },
    destroy: function destroy(id) {
      var _this4 = this;

      axios["delete"]('/api/menus/' + this.menu.id + '/nodes/' + id).then(function (response) {
        _this4.fetchNodes().then(function () {
          toast('Menu node successfully deleted.', 'success');
        });
      });
    },
    moveBefore: function moveBefore(move) {
      var _this5 = this;

      axios.post('/api/menus/' + this.menu.id + '/nodes/move/before', {
        move: move,
        before: this.before
      }).then(function (response) {
        _this5.fetchNodes().then(function () {
          _this5.before = null;
          toast('Menu node successfully moved.', 'success');
        });
      });
    },
    moveAfter: function moveAfter(move) {
      var _this6 = this;

      axios.post('/api/menus/' + this.menu.id + '/nodes/move/after', {
        move: move,
        after: this.after
      }).then(function (response) {
        _this6.fetchNodes().then(function () {
          _this6.after = null;
          toast('Menu node successfully moved.', 'success');
        });
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.get('/api/menus/' + to.params.menu).then(function (response) {
      next(function (vm) {
        vm.menu = response.data.data;
        vm.nodes = response.data.data.nodes;
        vm.$emit('updateHead');
      });
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this7 = this;

    axios.get('/api/menus/' + to.params.menu).then(function (response) {
      _this7.menu = response.data.data;
      _this7.nodes = response.data.data.nodes;

      _this7.$emit('updateHead');
    });
    next();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Nodes/Index.vue?vue&type=template&id=be39f24a&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Nodes/Index.vue?vue&type=template&id=be39f24a& ***!
  \*********************************************************************************************************************************************************************************************************/
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
                _c("div", { staticClass: "card__header" }, [
                  _c("h3", { staticClass: "card__title" }, [
                    _vm._v("Custom URL")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card__body" },
                  [
                    _c("p-input", {
                      attrs: { name: "name", label: "Name" },
                      model: {
                        value: _vm.form.name,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "name", $$v)
                        },
                        expression: "form.name"
                      }
                    }),
                    _vm._v(" "),
                    _c("p-input", {
                      attrs: { name: "url", label: "URL" },
                      model: {
                        value: _vm.form.url,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "url", $$v)
                        },
                        expression: "form.url"
                      }
                    }),
                    _vm._v(" "),
                    _c("p-select", {
                      attrs: {
                        name: "new_window",
                        label: "Open link where",
                        help: "Determine where the link should open.",
                        options: [
                          {
                            label: "New Window",
                            value: 1
                          },
                          {
                            label: "Same Window",
                            value: 0
                          }
                        ]
                      },
                      model: {
                        value: _vm.form.new_window,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "new_window", $$v)
                        },
                        expression: "form.new_window"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "p-button",
                      {
                        attrs: { theme: "primary" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.add("custom")
                          }
                        }
                      },
                      [_vm._v("Add")]
                    )
                  ],
                  1
                )
              ])
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
          _c("app-title", { attrs: { icon: "anchor" } }, [
            _vm._v(_vm._s(_vm.menu.name))
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
              "router-link",
              { staticClass: "button", attrs: { to: { name: "menus" } } },
              [_vm._v("Go Back")]
            ),
            _vm._v(" "),
            _c(
              "p-button",
              {
                attrs: { theme: "primary", disabled: _vm.saving },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.save($event)
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
      _vm.nodes.length == 0
        ? _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card__body text-center" }, [
              _c("p", [_vm._v("Add your first node to get started.")])
            ])
          ])
        : _c("div", { staticClass: "table__wrapper" }, [
            _c(
              "table",
              { staticClass: "table" },
              [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "w-20" }),
                    _vm._v(" "),
                    _c("th", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("URL")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Type")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-20" })
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "p-sortable-list",
                  {
                    staticClass: "sortable-list",
                    model: {
                      value: _vm.nodes,
                      callback: function($$v) {
                        _vm.nodes = $$v
                      },
                      expression: "nodes"
                    }
                  },
                  [
                    _c(
                      "tbody",
                      _vm._l(_vm.nodes, function(node) {
                        return _c("p-sortable-item", { key: node.id }, [
                          _c("tr", [
                            _c(
                              "td",
                              { staticClass: "w-8" },
                              [
                                _c(
                                  "p-sortable-handle",
                                  { staticClass: "mr-6 text-gray-400" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "w-6 h-6 flex items-center justify-center"
                                      },
                                      [
                                        _c("fa-icon", {
                                          staticClass: "fa-fw",
                                          attrs: {
                                            icon: ["fas", "grip-vertical"]
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("p-status", {
                                  staticClass: "mr-2",
                                  attrs: { value: node.status }
                                }),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "menu.nodes.edit",
                                        params: {
                                          menu: _vm.menu.id,
                                          node: node.id
                                        }
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(node.name))]
                                ),
                                _vm._v(" "),
                                node.new_window
                                  ? _c("fa-icon", {
                                      staticClass:
                                        "fa-fw text-gray-500 text-xs",
                                      attrs: {
                                        icon: ["fas", "external-link-alt"]
                                      }
                                    })
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                { staticClass: "text-sm text-gray-600" },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(node.url) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "text-xs px-2 py-1 bg-gray-200 text-gray-600 leading-none"
                                },
                                [_vm._v("custom")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "actions" }, [
                              _c(
                                "div",
                                { staticClass: "draggable__actions" },
                                [
                                  _c(
                                    "p-actions",
                                    {
                                      key: "node_" + node.id + "_actions",
                                      attrs: {
                                        right: "",
                                        id: "node_" + node.id + "_actions"
                                      }
                                    },
                                    [
                                      _c(
                                        "p-dropdown-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: "menu.nodes.edit",
                                              params: {
                                                menu: _vm.menu.id,
                                                node: node.id
                                              }
                                            }
                                          },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                            }
                                          }
                                        },
                                        [_vm._v("Edit")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p-dropdown-link",
                                        {
                                          directives: [
                                            {
                                              name: "modal",
                                              rawName: "v-modal:move-before",
                                              value: node,
                                              expression: "node",
                                              arg: "move-before"
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
                                            "\n                                            Move before...\n                                        "
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
                                              rawName: "v-modal:move-after",
                                              value: node,
                                              expression: "node",
                                              arg: "move-after"
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
                                            "\n                                            Move after...\n                                        "
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
                                              rawName: "v-modal:delete-node",
                                              value: node,
                                              expression: "node",
                                              arg: "delete-node"
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
                                            "\n                                            Delete\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ])
                          ])
                        ])
                      }),
                      1
                    )
                  ]
                )
              ],
              1
            )
          ]),
      _vm._v(" "),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c(
            "p-modal",
            {
              key: "delete_node",
              attrs: { name: "delete-node", title: "Delete Node" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(node) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:delete-node",
                              arg: "delete-node"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.destroy(node.data.id)
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:delete-node",
                              arg: "delete-node"
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
                _vm._v("Are you sure you want to permenantly delete this node?")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "p-modal",
            {
              key: "move_before",
              attrs: { name: "move-before", title: "Move before..." },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(node) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:move-before",
                              arg: "move-before"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.moveBefore(node.data.id)
                            }
                          }
                        },
                        [_vm._v("Move")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:move-after",
                              arg: "move-after"
                            }
                          ],
                          on: {
                            click: function($event) {
                              _vm.before = null
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      )
                    ]
                  }
                }
              ])
            },
            [
              [
                _c("p", [_vm._v("Which node would you like to move before?")]),
                _vm._v(" "),
                _c("p-select", {
                  attrs: {
                    name: "before",
                    label: "Node",
                    options: _vm.options
                  },
                  model: {
                    value: _vm.before,
                    callback: function($$v) {
                      _vm.before = $$v
                    },
                    expression: "before"
                  }
                })
              ]
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "p-modal",
            {
              key: "move_after",
              attrs: { name: "move-after", title: "Move after..." },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(node) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:move-after",
                              arg: "move-after"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.moveAfter(node.data.id)
                            }
                          }
                        },
                        [_vm._v("Move")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:move-after",
                              arg: "move-after"
                            }
                          ],
                          on: {
                            click: function($event) {
                              _vm.after = null
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      )
                    ]
                  }
                }
              ])
            },
            [
              [
                _c("p", [_vm._v("Which node would you like to move after?")]),
                _vm._v(" "),
                _c("p-select", {
                  attrs: { name: "after", label: "Node", options: _vm.options },
                  model: {
                    value: _vm.after,
                    callback: function($$v) {
                      _vm.after = $$v
                    },
                    expression: "after"
                  }
                })
              ]
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

/***/ "./resources/js/pages/Nodes/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/Nodes/Index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_be39f24a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=be39f24a& */ "./resources/js/pages/Nodes/Index.vue?vue&type=template&id=be39f24a&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Nodes/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_be39f24a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_be39f24a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Nodes/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Nodes/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Nodes/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Nodes/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Nodes/Index.vue?vue&type=template&id=be39f24a&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Nodes/Index.vue?vue&type=template&id=be39f24a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_be39f24a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=be39f24a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Nodes/Index.vue?vue&type=template&id=be39f24a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_be39f24a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_be39f24a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL05vZGVzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTm9kZXMvSW5kZXgudnVlP2E5MjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL05vZGVzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTm9kZXMvSW5kZXgudnVlPzNkMGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL05vZGVzL0luZGV4LnZ1ZT8xMjc5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0tBO0FBRUE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsZUFGQTtBQUdBLG1CQUhBO0FBSUEsa0JBSkE7QUFLQSxpQkFMQTtBQU1BO0FBQ0EsZ0JBREE7QUFFQSxlQUZBO0FBR0E7QUFIQTtBQU5BO0FBWUEsR0F0QkE7QUF3QkE7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUE7QUFGQTtBQUlBLE9BTEE7QUFNQTtBQVJBLEdBeEJBO0FBbUNBO0FBQ0EsT0FEQSxlQUNBLElBREEsRUFDQTtBQUFBOztBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQSxTQUxBO0FBTUEsT0FQQSxXQU9BO0FBQ0E7QUFDQSxPQVRBO0FBVUEsS0FkQTtBQWdCQSxRQWhCQSxrQkFnQkE7QUFBQTs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscURBQXFEO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDem1CQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy8xMDEuanM/aWQ9YTc0NmM5ZWUzNTgwNjg3ODRmMWEiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGZvcm0tY29udGFpbmVyPlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxhcHAtdGl0bGUgaWNvbj1cImFuY2hvclwiPnt7IG1lbnUubmFtZSB9fTwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnbWVudXMnIH1cIiBjbGFzcz1cImJ1dHRvblwiPkdvIEJhY2s8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB0aGVtZT1cInByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cInNhdmVcIiA6ZGlzYWJsZWQ9XCJzYXZpbmdcIj5TYXZlPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHYtaWY9XCJub2Rlcy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHkgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5BZGQgeW91ciBmaXJzdCBub2RlIHRvIGdldCBzdGFydGVkLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3dyYXBwZXJcIiB2LWVsc2U+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidy0yMFwiPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VVJMPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInctMjBcIj48L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICA8cC1zb3J0YWJsZS1saXN0IHYtbW9kZWw9XCJub2Rlc1wiIGNsYXNzPVwic29ydGFibGUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1zb3J0YWJsZS1pdGVtIHYtZm9yPVwibm9kZSBpbiBub2Rlc1wiIDprZXk9XCJub2RlLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXNvcnRhYmxlLWhhbmRsZSBjbGFzcz1cIm1yLTYgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTYgaC02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnZ3JpcC12ZXJ0aWNhbCddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zb3J0YWJsZS1oYW5kbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc3RhdHVzIDp2YWx1ZT1cIm5vZGUuc3RhdHVzXCIgY2xhc3M9XCJtci0yXCI+PC9wLXN0YXR1cz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ21lbnUubm9kZXMuZWRpdCcsIHBhcmFtczoge21lbnU6IG1lbnUuaWQsIG5vZGU6IG5vZGUuaWR9IH1cIj57eyBub2RlLm5hbWUgfX08L3JvdXRlci1saW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiB2LWlmPVwibm9kZS5uZXdfd2luZG93XCIgY2xhc3M9XCJmYS1mdyB0ZXh0LWdyYXktNTAwIHRleHQteHNcIiA6aWNvbj1cIlsnZmFzJywgJ2V4dGVybmFsLWxpbmstYWx0J11cIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBub2RlLnVybCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzcz1cInRleHQteHMgcHgtMiBweS0xIGJnLWdyYXktMjAwIHRleHQtZ3JheS02MDAgbGVhZGluZy1ub25lXCI+Y3VzdG9tPC9zcGFuPjwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyYWdnYWJsZV9fYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWFjdGlvbnMgcmlnaHQgOmlkPVwiJ25vZGVfJyArIG5vZGUuaWQgKyAnX2FjdGlvbnMnXCIgOmtleT1cIidub2RlXycgKyBub2RlLmlkICsgJ19hY3Rpb25zJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1kcm9wZG93bi1saW5rIEBjbGljay5wcmV2ZW50IDp0bz1cInsgbmFtZTogJ21lbnUubm9kZXMuZWRpdCcsIHBhcmFtczoge21lbnU6IG1lbnUuaWQsIG5vZGU6IG5vZGUuaWR9IH1cIj5FZGl0PC9wLWRyb3Bkb3duLWxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24tbGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kYWw6bW92ZS1iZWZvcmU9XCJub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW92ZSBiZWZvcmUuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWRyb3Bkb3duLWxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24tbGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kYWw6bW92ZS1hZnRlcj1cIm5vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3ZlIGFmdGVyLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1kcm9wZG93bi1saW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGFsOmRlbGV0ZS1ub2RlPVwibm9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwibGluay0tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1kcm9wZG93bi1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zb3J0YWJsZS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvcC1zb3J0YWJsZS1saXN0PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpzaWRlYmFyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmRfX3RpdGxlXCI+Q3VzdG9tIFVSTDwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dCBuYW1lPVwibmFtZVwiIGxhYmVsPVwiTmFtZVwiIHYtbW9kZWw9XCJmb3JtLm5hbWVcIj48L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXQgbmFtZT1cInVybFwiIGxhYmVsPVwiVVJMXCIgdi1tb2RlbD1cImZvcm0udXJsXCI+PC9wLWlucHV0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5ld193aW5kb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcGVuIGxpbmsgd2hlcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkRldGVybWluZSB3aGVyZSB0aGUgbGluayBzaG91bGQgb3Blbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnTmV3IFdpbmRvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdTYW1lIFdpbmRvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmV3X3dpbmRvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8L3Atc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB0aGVtZT1cInByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cImFkZCgnY3VzdG9tJylcIj5BZGQ8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cIm1vZGFsc1wiPlxuICAgICAgICAgICAgPHAtbW9kYWwgbmFtZT1cImRlbGV0ZS1ub2RlXCIgdGl0bGU9XCJEZWxldGUgTm9kZVwiIGtleT1cImRlbGV0ZV9ub2RlXCI+XG4gICAgICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHBlcm1lbmFudGx5IGRlbGV0ZSB0aGlzIG5vZGU/PC9wPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIiBzbG90LXNjb3BlPVwibm9kZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDpkZWxldGUtbm9kZSBAY2xpY2s9XCJkZXN0cm95KG5vZGUuZGF0YS5pZClcIiB0aGVtZT1cImRhbmdlclwiIGNsYXNzPVwibWwtM1wiPkRlbGV0ZTwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOmRlbGV0ZS1ub2RlPkNhbmNlbDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcC1tb2RhbD5cblxuICAgICAgICAgICAgPHAtbW9kYWwgbmFtZT1cIm1vdmUtYmVmb3JlXCIgdGl0bGU9XCJNb3ZlIGJlZm9yZS4uLlwiIGtleT1cIm1vdmVfYmVmb3JlXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8cD5XaGljaCBub2RlIHdvdWxkIHlvdSBsaWtlIHRvIG1vdmUgYmVmb3JlPzwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cC1zZWxlY3QgbmFtZT1cImJlZm9yZVwiIGxhYmVsPVwiTm9kZVwiIDpvcHRpb25zPVwib3B0aW9uc1wiIHYtbW9kZWw9XCJiZWZvcmVcIj48L3Atc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImZvb3RlclwiIHNsb3Qtc2NvcGU9XCJub2RlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOm1vdmUtYmVmb3JlIEBjbGljaz1cIm1vdmVCZWZvcmUobm9kZS5kYXRhLmlkKVwiIHRoZW1lPVwiZGFuZ2VyXCIgY2xhc3M9XCJtbC0zXCI+TW92ZTwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOm1vdmUtYWZ0ZXIgQGNsaWNrPVwiYmVmb3JlID0gbnVsbFwiPkNhbmNlbDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcC1tb2RhbD5cblxuICAgICAgICAgICAgPHAtbW9kYWwgbmFtZT1cIm1vdmUtYWZ0ZXJcIiB0aXRsZT1cIk1vdmUgYWZ0ZXIuLi5cIiBrZXk9XCJtb3ZlX2FmdGVyXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8cD5XaGljaCBub2RlIHdvdWxkIHlvdSBsaWtlIHRvIG1vdmUgYWZ0ZXI/PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLXNlbGVjdCBuYW1lPVwiYWZ0ZXJcIiBsYWJlbD1cIk5vZGVcIiA6b3B0aW9ucz1cIm9wdGlvbnNcIiB2LW1vZGVsPVwiYWZ0ZXJcIj48L3Atc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImZvb3RlclwiIHNsb3Qtc2NvcGU9XCJub2RlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOm1vdmUtYWZ0ZXIgQGNsaWNrPVwibW92ZUFmdGVyKG5vZGUuZGF0YS5pZClcIiB0aGVtZT1cImRhbmdlclwiIGNsYXNzPVwibWwtM1wiPk1vdmU8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDptb3ZlLWFmdGVyIEBjbGljaz1cImFmdGVyID0gbnVsbFwiPkNhbmNlbDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcC1tb2RhbD5cbiAgICAgICAgPC9wb3J0YWw+XG4gICAgPC9mb3JtLWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vc2VydmljZXMvRm9ybSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6IHRoaXMubWVudS5uYW1lIHx8ICdMb2FkaW5nLi4uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtZW51OiB7fSxcbiAgICAgICAgICAgICAgICBub2RlczogW10sXG4gICAgICAgICAgICAgICAgc2F2aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBiZWZvcmU6IG51bGwsXG4gICAgICAgICAgICAgICAgYWZ0ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbmV3X3dpbmRvdzogMCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgb3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5tYXAodGhpcy5ub2RlcywgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogbm9kZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogbm9kZS5pZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBhZGQodHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBvc3QoJy9hcGkvbWVudXMvJyArIHRoaXMubWVudS5pZCArICcvbm9kZXMnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoTm9kZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KCdNZW51IG5vZGUgc3VjY2Vzc2Z1bGx5IGFkZGVkJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2F2ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmluZyA9IHRydWVcbiAgICAgICAgICAgICAgICBsZXQgbm9kZXMgPSB7fVxuXG4gICAgICAgICAgICAgICAgXy5lYWNoKHRoaXMubm9kZXMsIChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tub2RlLmlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBpbmRleCArIDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL21lbnVzLycgKyB0aGlzLm1lbnUuaWQgKyAnL3Jlb3JkZXInLCB7bm9kZXM6IG5vZGVzfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnTWVudSBub2RlcyBzdWNjZXNzZnVsbHkgcmVvcmRlcmVkLicsICdzdWNjZXNzJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZmV0Y2hOb2RlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL21lbnVzLycgKyB0aGlzLm1lbnUuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubm9kZXNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLm5hbWUgPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS51cmwgID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ubmV3X3dpbmRvdyA9IDBcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGRlc3Ryb3koaWQpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvbWVudXMvJyArIHRoaXMubWVudS5pZCArICcvbm9kZXMvJyArIGlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoTm9kZXMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KCdNZW51IG5vZGUgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQuJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBtb3ZlQmVmb3JlKG1vdmUpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL21lbnVzLycgKyB0aGlzLm1lbnUuaWQgKyAnL25vZGVzL21vdmUvYmVmb3JlJywge1xuICAgICAgICAgICAgICAgICAgICBtb3ZlOiBtb3ZlLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmU6IHRoaXMuYmVmb3JlLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hOb2RlcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWZvcmUgPSBudWxsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KCdNZW51IG5vZGUgc3VjY2Vzc2Z1bGx5IG1vdmVkLicsICdzdWNjZXNzJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbW92ZUFmdGVyKG1vdmUpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL21lbnVzLycgKyB0aGlzLm1lbnUuaWQgKyAnL25vZGVzL21vdmUvYWZ0ZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IG1vdmUsXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyOiB0aGlzLmFmdGVyLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hOb2RlcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlciA9IG51bGxcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ01lbnUgbm9kZSBzdWNjZXNzZnVsbHkgbW92ZWQuJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL21lbnVzLycgKyB0by5wYXJhbXMubWVudSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBuZXh0KGZ1bmN0aW9uKHZtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLm1lbnUgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgdm0ubm9kZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubm9kZXNcblxuICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVVcGRhdGUodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9tZW51cy8nICsgdG8ucGFyYW1zLm1lbnUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5ub2Rlc1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBuZXh0KClcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybS1jb250YWluZXJcIixcbiAgICB7XG4gICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJzaWRlYmFyXCIsXG4gICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9faGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDdXN0b20gVVJMXCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcIm5hbWVcIiwgbGFiZWw6IFwiTmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInVybFwiLCBsYWJlbDogXCJVUkxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ1cmxcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS51cmxcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5ld193aW5kb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9wZW4gbGluayB3aGVyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscDogXCJEZXRlcm1pbmUgd2hlcmUgdGhlIGxpbmsgc2hvdWxkIG9wZW4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOZXcgV2luZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNhbWUgV2luZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uZXdfd2luZG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuZXdfd2luZG93XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmV3X3dpbmRvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGQoXCJjdXN0b21cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFkZFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdKVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwiYW5jaG9yXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5tZW51Lm5hbWUpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLCBhdHRyczogeyB0bzogeyBuYW1lOiBcIm1lbnVzXCIgfSB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwicHJpbWFyeVwiLCBkaXNhYmxlZDogX3ZtLnNhdmluZyB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLm5vZGVzLmxlbmd0aCA9PSAwXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5IHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkFkZCB5b3VyIGZpcnN0IG5vZGUgdG8gZ2V0IHN0YXJ0ZWQuXCIpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX193cmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZVwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0yMFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlVSTFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUeXBlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTIwXCIgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwicC1zb3J0YWJsZS1saXN0XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvcnRhYmxlLWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5vZGVzLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ub2RlcyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJub2Rlc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm5vZGVzLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwLXNvcnRhYmxlLWl0ZW1cIiwgeyBrZXk6IG5vZGUuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy04XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLXNvcnRhYmxlLWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItNiB0ZXh0LWdyYXktNDAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3LTYgaC02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogW1wiZmFzXCIsIFwiZ3JpcC12ZXJ0aWNhbFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtc3RhdHVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IG5vZGUuc3RhdHVzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWVudS5ub2Rlcy5lZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51OiBfdm0ubWVudS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG5vZGUubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLm5ld193aW5kb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmEtZncgdGV4dC1ncmF5LTUwMCB0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogW1wiZmFzXCIsIFwiZXh0ZXJuYWwtbGluay1hbHRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhub2RlLnVybCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMgcHgtMiBweS0xIGJnLWdyYXktMjAwIHRleHQtZ3JheS02MDAgbGVhZGluZy1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImN1c3RvbVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJhY3Rpb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZHJhZ2dhYmxlX19hY3Rpb25zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcIm5vZGVfXCIgKyBub2RlLmlkICsgXCJfYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm5vZGVfXCIgKyBub2RlLmlkICsgXCJfYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kcm9wZG93bi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1lbnUubm9kZXMuZWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudTogX3ZtLm1lbnUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFZGl0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6bW92ZS1iZWZvcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibW92ZS1iZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdmUgYmVmb3JlLi4uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6bW92ZS1hZnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJtb3ZlLWFmdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3ZlIGFmdGVyLi4uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlLW5vZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVsZXRlLW5vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2xhc3NlczogXCJsaW5rLS1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwibW9kYWxzXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlbGV0ZV9ub2RlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiZGVsZXRlLW5vZGVcIiwgdGl0bGU6IFwiRGVsZXRlIE5vZGVcIiB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmRlbGV0ZS1ub2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVsZXRlLW5vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJkYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVzdHJveShub2RlLmRhdGEuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRlbGV0ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlLW5vZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkZWxldGUtbm9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwZXJtZW5hbnRseSBkZWxldGUgdGhpcyBub2RlP1wiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1tb2RhbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwibW92ZV9iZWZvcmVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJtb3ZlLWJlZm9yZVwiLCB0aXRsZTogXCJNb3ZlIGJlZm9yZS4uLlwiIH0sXG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJmb290ZXJcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6bW92ZS1iZWZvcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJtb3ZlLWJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcImRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb3ZlQmVmb3JlKG5vZGUuZGF0YS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTW92ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6bW92ZS1hZnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcIm1vdmUtYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYmVmb3JlID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiV2hpY2ggbm9kZSB3b3VsZCB5b3UgbGlrZSB0byBtb3ZlIGJlZm9yZT9cIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJiZWZvcmVcIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTm9kZVwiLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ub3B0aW9uc1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYmVmb3JlLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmJlZm9yZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcIm1vdmVfYWZ0ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJtb3ZlLWFmdGVyXCIsIHRpdGxlOiBcIk1vdmUgYWZ0ZXIuLi5cIiB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOm1vdmUtYWZ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJtb3ZlLWFmdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm1vdmVBZnRlcihub2RlLmRhdGEuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk1vdmVcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOm1vdmUtYWZ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJtb3ZlLWFmdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFmdGVyID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiV2hpY2ggbm9kZSB3b3VsZCB5b3UgbGlrZSB0byBtb3ZlIGFmdGVyP1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImFmdGVyXCIsIGxhYmVsOiBcIk5vZGVcIiwgb3B0aW9uczogX3ZtLm9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uYWZ0ZXIgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhZnRlclwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJlMzlmMjRhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiZTM5ZjI0YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiZTM5ZjI0YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiZTM5ZjI0YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJlMzlmMjRhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JlMzlmMjRhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvTm9kZXMvSW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZTM5ZjI0YSZcIiJdLCJzb3VyY2VSb290IjoiIn0=