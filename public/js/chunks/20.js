(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Nodes/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Nodes/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default, getNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNode", function() { return getNode; });
/* harmony import */ var _services_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Form */ "./resources/js/services/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/pages/Nodes/SharedForm.vue");
//
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
        inner: this.node.name || 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      navigation: {},
      node: {},
      nodes: [],
      form: new _services_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        url: '',
        new_window: false,
        parent_id: 0,
        status: false
      }, true)
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.patch('/api/navigation/' + this.navigation.id + '/nodes/' + this.node.id).then(function (response) {
        toast('Node saved successfully', 'success');

        _this.$router.push('/navigation/' + _this.navigation.id + '/nodes');
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getNode(to.params.navigation, to.params.node, function (error, node, navigation, fields) {
      if (error) {
        next(function (vm) {
          vm.$router.push('/navigation');
          toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.navigation = navigation;
          vm.node = node;
          vm.form = new _services_Form__WEBPACK_IMPORTED_MODULE_0__["default"](fields, true);
          vm.nodes = _.map(navigation.nodes, function (parent) {
            return {
              'label': parent.name,
              'value': parent.id
            };
          });
          vm.nodes.unshift({
            'label': 'None',
            'value': 0
          });
          vm.$emit('updateHead');
        });
      }
    });
  }
});
function getNode(navigation, id, callback) {
  axios.all([axios.get('/api/navigation/' + navigation + '/nodes/' + id), axios.get('/api/navigation/' + navigation)]).then(axios.spread(function (node, navigation) {
    node = node.data.data;
    navigation = navigation.data.data;
    var fields = {
      name: node.name,
      url: node.url,
      new_window: node.new_window,
      parent_id: node.parent_id,
      status: node.status
    };

    _.forEach(navigation.blueprint.sections, function (section) {
      _.forEach(section.fields, function (field) {
        fields[field.handle] = node[field.handle];
      });
    });

    callback(null, node, navigation, fields);
  }));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Nodes/SharedForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Nodes/SharedForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    node: {
      type: Object
    },
    nodes: {
      type: Array,
      required: true
    },
    navigation: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    submit: {
      required: true
    }
  },
  computed: {
    sections: function sections() {
      var body = [];
      var sidebar = [];
      body = _.filter(this.navigation.blueprint.sections, function (section) {
        return section.placement == 'body';
      });
      sidebar = _.filter(this.navigation.blueprint.sections, function (section) {
        return section.placement == 'sidebar';
      });
      return {
        body: body,
        sidebar: sidebar
      };
    },
    fields: function fields() {
      var body = [];
      var sidebar = [];
      body = _.filter(this.navigation.blueprint.sections, function (section) {
        return section.placement == 'body';
      });
      body = _.flatMap(body, function (section) {
        return section.fields;
      });
      sidebar = _.filter(this.navigation.blueprint.sections, function (section) {
        return section.placement == 'sidebar';
      });
      sidebar = _.flatMap(sidebar, function (section) {
        return section.fields;
      });
      return {
        body: body,
        sidebar: sidebar
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Nodes/Edit.vue?vue&type=template&id=8e8155de&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Nodes/Edit.vue?vue&type=template&id=8e8155de& ***!
  \********************************************************************************************************************************************************************************************************/
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
          _c("page-title", { attrs: { icon: "anchor" } }, [_vm._v("Edit Node")])
        ],
        1
      ),
      _vm._v(" "),
      _c("shared-form", {
        attrs: {
          form: _vm.form,
          submit: _vm.submit,
          navigation: _vm.navigation,
          node: _vm.node,
          nodes: _vm.nodes
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Nodes/SharedForm.vue?vue&type=template&id=6589d310&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Nodes/SharedForm.vue?vue&type=template&id=6589d310& ***!
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
                    _c("ui-toggle", {
                      attrs: {
                        name: "status",
                        label: "Status",
                        "true-value": 1,
                        "false-value": 0
                      },
                      model: {
                        value: _vm.form.status,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "status", $$v)
                        },
                        expression: "form.status"
                      }
                    }),
                    _vm._v(" "),
                    _c("ui-select-group", {
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
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm._l(_vm.sections.sidebar, function(section) {
                return _c("div", { key: section.handle, staticClass: "card" }, [
                  _c("div", { staticClass: "card__header" }, [
                    _c("h3", { staticClass: "card__title" }, [
                      _vm._v(_vm._s(section.name))
                    ]),
                    _vm._v(" "),
                    section.description
                      ? _c("p", { staticClass: "card__subtitle" }, [
                          _vm._v(_vm._s(section.description))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card__body" },
                    _vm._l(section.fields, function(field) {
                      return _c(field.type.id + "-fieldtype", {
                        key: field.handle,
                        tag: "component",
                        staticClass: "form__group",
                        attrs: { field: field, errors: _vm.form.errors },
                        model: {
                          value: _vm.form[field.handle],
                          callback: function($$v) {
                            _vm.$set(_vm.form, field.handle, $$v)
                          },
                          expression: "form[field.handle]"
                        }
                      })
                    }),
                    1
                  )
                ])
              }),
              _vm._v(" "),
              _vm.node
                ? _c(
                    "ui-definition-list",
                    [
                      _c(
                        "ui-definition",
                        { attrs: { name: "Status" } },
                        [
                          _c("fa-icon", {
                            staticClass: "fa-fw text-xs",
                            class: {
                              "text-success-500": _vm.node.status,
                              "text-danger-500": !_vm.node.status
                            },
                            attrs: { icon: ["fas", "circle"] }
                          }),
                          _vm._v(
                            " " +
                              _vm._s(_vm.node.status ? "Enabled" : "Disabled") +
                              "\n                "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("ui-definition", { attrs: { name: "Created At" } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              _vm
                                .$moment(_vm.node.created_at)
                                .format("Y-MM-DD, hh:mm a")
                            ) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("ui-definition", { attrs: { name: "Updated At" } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              _vm
                                .$moment(_vm.node.updated_at)
                                .format("Y-MM-DD, hh:mm a")
                            ) +
                            "\n                "
                        )
                      ])
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
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "div",
          { staticClass: "buttons" },
          [
            _vm.menu.id
              ? _c(
                  "ui-button",
                  {
                    attrs: {
                      to: {
                        name: "navigation.nodes",
                        params: { navigation: _vm.navigation.id }
                      },
                      variant: "secondary"
                    }
                  },
                  [_vm._v("Go Back")]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "ui-button",
              {
                attrs: {
                  type: "submit",
                  variant: "primary",
                  disabled: !_vm.form.hasChanges
                },
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
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card__body" },
          [
            _c("ui-title-group", {
              attrs: {
                name: "name",
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
            _c("ui-input-group", {
              attrs: {
                name: "url",
                label: "URL",
                help: "The URL of the node.",
                autocomplete: "off",
                required: "",
                "has-error": _vm.form.errors.has("url"),
                "error-message": _vm.form.errors.get("url")
              },
              model: {
                value: _vm.form.url,
                callback: function($$v) {
                  _vm.$set(_vm.form, "url", $$v)
                },
                expression: "form.url"
              }
            }),
            _vm._v(" "),
            _vm.fields.body.length > 0
              ? _c(
                  "ui-tabs",
                  _vm._l(_vm.sections.body, function(section) {
                    return _c(
                      "ui-tab",
                      { key: section.handle, attrs: { name: section.name } },
                      _vm._l(section.fields, function(field) {
                        return _c(field.type.id + "-fieldtype", {
                          key: field.handle,
                          tag: "component",
                          staticClass: "form__group",
                          attrs: { field: field, errors: _vm.form.errors },
                          model: {
                            value: _vm.form[field.handle],
                            callback: function($$v) {
                              _vm.$set(_vm.form, field.handle, $$v)
                            },
                            expression: "form[field.handle]"
                          }
                        })
                      }),
                      1
                    )
                  }),
                  1
                )
              : _vm._e()
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Nodes/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Nodes/Edit.vue ***!
  \*******************************************/
/*! exports provided: getNode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_8e8155de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=8e8155de& */ "./resources/js/pages/Nodes/Edit.vue?vue&type=template&id=8e8155de&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/Nodes/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNode", function() { return _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getNode"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_8e8155de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_8e8155de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Nodes/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Nodes/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Nodes/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default, getNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Nodes/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNode", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getNode"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Nodes/Edit.vue?vue&type=template&id=8e8155de&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Nodes/Edit.vue?vue&type=template&id=8e8155de& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_8e8155de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=8e8155de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Nodes/Edit.vue?vue&type=template&id=8e8155de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_8e8155de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_8e8155de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Nodes/SharedForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/Nodes/SharedForm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedForm_vue_vue_type_template_id_6589d310___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=6589d310& */ "./resources/js/pages/Nodes/SharedForm.vue?vue&type=template&id=6589d310&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/Nodes/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedForm_vue_vue_type_template_id_6589d310___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedForm_vue_vue_type_template_id_6589d310___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Nodes/SharedForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Nodes/SharedForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Nodes/SharedForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Nodes/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Nodes/SharedForm.vue?vue&type=template&id=6589d310&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Nodes/SharedForm.vue?vue&type=template&id=6589d310& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6589d310___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=template&id=6589d310& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Nodes/SharedForm.vue?vue&type=template&id=6589d310&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6589d310___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6589d310___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL05vZGVzL0VkaXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvTm9kZXMvU2hhcmVkRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL05vZGVzL0VkaXQudnVlPzk4MGIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL05vZGVzL1NoYXJlZEZvcm0udnVlPzEzNDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL05vZGVzL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ob2Rlcy9FZGl0LnZ1ZT9kNGM0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ob2Rlcy9FZGl0LnZ1ZT85YTY2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ob2Rlcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTm9kZXMvU2hhcmVkRm9ybS52dWU/NGQwZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTm9kZXMvU2hhcmVkRm9ybS52dWU/YTQxOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLGNBRkE7QUFHQSxlQUhBO0FBSUE7QUFDQSxnQkFEQTtBQUVBLGVBRkE7QUFHQSx5QkFIQTtBQUlBLG9CQUpBO0FBS0E7QUFMQSxTQU1BLElBTkE7QUFKQTtBQVlBLEdBdEJBO0FBd0JBO0FBQ0E7QUFEQSxHQXhCQTtBQTRCQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FKQSxXQUlB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QUNSLEVBQUUscUZBQU07QUFDUixFQUFFLDhGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFnTSxDQUFnQixzUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzIwLmpzP2lkPWIxYzkwZjBhYTZiYjE4MjAzYzJkIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuXHRcdFx0PHBhZ2UtdGl0bGUgaWNvbj1cImFuY2hvclwiPkVkaXQgTm9kZTwvcGFnZS10aXRsZT5cblx0XHQ8L3BvcnRhbD5cblxuICAgICAgICA8c2hhcmVkLWZvcm0gOmZvcm09XCJmb3JtXCIgOnN1Ym1pdD1cInN1Ym1pdFwiIDpuYXZpZ2F0aW9uPVwibmF2aWdhdGlvblwiIDpub2RlPVwibm9kZVwiIDpub2Rlcz1cIm5vZGVzXCI+PC9zaGFyZWQtZm9ybT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vc2VydmljZXMvRm9ybSdcbiAgICBpbXBvcnQgU2hhcmVkRm9ybSBmcm9tICcuL1NoYXJlZEZvcm0nXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiB0aGlzLm5vZGUubmFtZSB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge30sXG4gICAgICAgICAgICAgICAgbm9kZToge30sXG4gICAgICAgICAgICAgICAgbm9kZXM6IFtdLFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgICAgIG5ld193aW5kb3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRfaWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnc2hhcmVkLWZvcm0nOiBTaGFyZWRGb3JtXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaCgnL2FwaS9uYXZpZ2F0aW9uLycgKyB0aGlzLm5hdmlnYXRpb24uaWQgKyAnL25vZGVzLycgKyB0aGlzLm5vZGUuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdOb2RlIHNhdmVkIHN1Y2Nlc3NmdWxseScsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL25hdmlnYXRpb24vJyArIHRoaXMubmF2aWdhdGlvbi5pZCArICcvbm9kZXMnKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGdldE5vZGUodG8ucGFyYW1zLm5hdmlnYXRpb24sIHRvLnBhcmFtcy5ub2RlLCAoZXJyb3IsIG5vZGUsIG5hdmlnYXRpb24sIGZpZWxkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvbmF2aWdhdGlvbicpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnRvU3RyaW5nKCksICdkYW5nZXInKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5uYXZpZ2F0aW9uID0gbmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0ubm9kZSA9IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZvcm0gPSBuZXcgRm9ybShmaWVsZHMsIHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLm5vZGVzID0gXy5tYXAobmF2aWdhdGlvbi5ub2RlcywgZnVuY3Rpb24ocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogcGFyZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHBhcmVudC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLm5vZGVzLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdOb25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZShuYXZpZ2F0aW9uLCBpZCwgY2FsbGJhY2spIHtcbiAgICAgICAgYXhpb3MuYWxsKFtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9uYXZpZ2F0aW9uLycgKyBuYXZpZ2F0aW9uICsgJy9ub2Rlcy8nICsgaWQpLFxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL25hdmlnYXRpb24vJyArIG5hdmlnYXRpb24pLFxuICAgICAgICBdKS50aGVuKGF4aW9zLnNwcmVhZChmdW5jdGlvbiAobm9kZSwgbmF2aWdhdGlvbikge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUuZGF0YS5kYXRhXG4gICAgICAgICAgICBuYXZpZ2F0aW9uID0gbmF2aWdhdGlvbi5kYXRhLmRhdGFcblxuICAgICAgICAgICAgbGV0IGZpZWxkcyA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBub2RlLm5hbWUsXG4gICAgICAgICAgICAgICAgdXJsOiBub2RlLnVybCxcbiAgICAgICAgICAgICAgICBuZXdfd2luZG93OiBub2RlLm5ld193aW5kb3csXG4gICAgICAgICAgICAgICAgcGFyZW50X2lkOiBub2RlLnBhcmVudF9pZCxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IG5vZGUuc3RhdHVzLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmZvckVhY2gobmF2aWdhdGlvbi5ibHVlcHJpbnQuc2VjdGlvbnMsIGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBfLmZvckVhY2goc2VjdGlvbi5maWVsZHMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc1tmaWVsZC5oYW5kbGVdID0gbm9kZVtmaWVsZC5oYW5kbGVdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG5vZGUsIG5hdmlnYXRpb24sIGZpZWxkcylcbiAgICAgICAgfSkpXG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxmb3JtLWNvbnRhaW5lcj5cblx0XHQ8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cblx0XHRcdFx0PHVpLWJ1dHRvbiB2LWlmPVwibWVudS5pZFwiIDp0bz1cInsgbmFtZTogJ25hdmlnYXRpb24ubm9kZXMnLCBwYXJhbXM6IHtuYXZpZ2F0aW9uOiBuYXZpZ2F0aW9uLmlkfSB9XCIgdmFyaWFudD1cInNlY29uZGFyeVwiPkdvIEJhY2s8L3VpLWJ1dHRvbj5cblx0XHRcdFx0PHVpLWJ1dHRvbiB0eXBlPVwic3VibWl0XCIgQGNsaWNrLnByZXZlbnQ9XCJzdWJtaXRcIiB2YXJpYW50PVwicHJpbWFyeVwiIDpkaXNhYmxlZD1cIiFmb3JtLmhhc0NoYW5nZXNcIj5TYXZlPC91aS1idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICA8dWktdGl0bGUtZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8L3VpLXRpdGxlLWdyb3VwPlxuXG4gICAgICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXG4gICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGUgVVJMIG9mIHRoZSBub2RlLlwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3VybCcpXCJcbiAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3VybCcpXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0udXJsXCI+XG4gICAgICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cblxuICAgICAgICAgICAgICAgIDx1aS10YWJzIHYtaWY9XCJmaWVsZHMuYm9keS5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS10YWIgdi1mb3I9XCJzZWN0aW9uIGluIHNlY3Rpb25zLmJvZHlcIiA6a2V5PVwic2VjdGlvbi5oYW5kbGVcIiA6bmFtZT1cInNlY3Rpb24ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybV9fZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiZmllbGQgaW4gc2VjdGlvbi5maWVsZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZC5oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppcz1cImZpZWxkLnR5cGUuaWQgKyAnLWZpZWxkdHlwZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZD1cImZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3JzPVwiZm9ybS5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtW2ZpZWxkLmhhbmRsZV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICA8L3VpLXRhYj5cbiAgICAgICAgICAgICAgICA8L3VpLXRhYnM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpzaWRlYmFyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dHJ1ZS12YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLXRvZ2dsZT5cblxuICAgICAgICAgICAgICAgICAgICA8dWktc2VsZWN0LWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV3X3dpbmRvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9wZW4gbGluayB3aGVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiRGV0ZXJtaW5lIHdoZXJlIHRoZSBsaW5rIHNob3VsZCBvcGVuLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdOZXcgV2luZG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ1NhbWUgV2luZG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uZXdfd2luZG93XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktc2VsZWN0LWdyb3VwPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkXCIgdi1mb3I9XCIoc2VjdGlvbikgaW4gc2VjdGlvbnMuc2lkZWJhclwiIDprZXk9XCJzZWN0aW9uLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZF9fdGl0bGVcIj57eyBzZWN0aW9uLm5hbWUgfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwic2VjdGlvbi5kZXNjcmlwdGlvblwiIGNsYXNzPVwiY2FyZF9fc3VidGl0bGVcIj57eyBzZWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtX19ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cImZpZWxkIGluIHNlY3Rpb24uZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZC5oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmlzPVwiZmllbGQudHlwZS5pZCArICctZmllbGR0eXBlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3JzPVwiZm9ybS5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1bZmllbGQuaGFuZGxlXVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cdFx0XHQ8dWktZGVmaW5pdGlvbi1saXN0IHYtaWY9XCJub2RlXCI+XG4gICAgICAgICAgICAgICAgPHVpLWRlZmluaXRpb24gbmFtZT1cIlN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NpcmNsZSddXCIgY2xhc3M9XCJmYS1mdyB0ZXh0LXhzXCIgOmNsYXNzPVwieyd0ZXh0LXN1Y2Nlc3MtNTAwJzogbm9kZS5zdGF0dXMsICd0ZXh0LWRhbmdlci01MDAnOiAhIG5vZGUuc3RhdHVzfVwiPjwvZmEtaWNvbj4ge3sgbm9kZS5zdGF0dXMgPyAnRW5hYmxlZCcgOiAnRGlzYWJsZWQnIH19XG4gICAgICAgICAgICAgICAgPC91aS1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHVpLWRlZmluaXRpb24gbmFtZT1cIkNyZWF0ZWQgQXRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJG1vbWVudChub2RlLmNyZWF0ZWRfYXQpLmZvcm1hdCgnWS1NTS1ERCwgaGg6bW0gYScpIH19XG4gICAgICAgICAgICAgICAgPC91aS1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHVpLWRlZmluaXRpb24gbmFtZT1cIlVwZGF0ZWQgQXRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJG1vbWVudChub2RlLnVwZGF0ZWRfYXQpLmZvcm1hdCgnWS1NTS1ERCwgaGg6bW0gYScpIH19XG4gICAgICAgICAgICAgICAgPC91aS1kZWZpbml0aW9uPlxuICAgICAgICAgICAgPC91aS1kZWZpbml0aW9uLWxpc3Q+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9mb3JtLWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbm9kZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG5vZGVzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHN1Ym1pdDoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc2VjdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBbXVxuICAgICAgICAgICAgICAgIGxldCBzaWRlYmFyID0gW11cblxuICAgICAgICAgICAgICAgIGJvZHkgPSBfLmZpbHRlcih0aGlzLm5hdmlnYXRpb24uYmx1ZXByaW50LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWN0aW9uLnBsYWNlbWVudCA9PSAnYm9keSdcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgc2lkZWJhciA9IF8uZmlsdGVyKHRoaXMubmF2aWdhdGlvbi5ibHVlcHJpbnQuc2VjdGlvbnMsIGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb24ucGxhY2VtZW50ID09ICdzaWRlYmFyJ1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyOiBzaWRlYmFyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZmllbGRzKCkge1xuICAgICAgICAgICAgICAgIGxldCBib2R5ID0gW11cbiAgICAgICAgICAgICAgICBsZXQgc2lkZWJhciA9IFtdXG5cbiAgICAgICAgICAgICAgICBib2R5ID0gXy5maWx0ZXIodGhpcy5uYXZpZ2F0aW9uLmJsdWVwcmludC5zZWN0aW9ucywgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbi5wbGFjZW1lbnQgPT0gJ2JvZHknXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGJvZHkgPSBfLmZsYXRNYXAoYm9keSwgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbi5maWVsZHNcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgc2lkZWJhciA9IF8uZmlsdGVyKHRoaXMubmF2aWdhdGlvbi5ibHVlcHJpbnQuc2VjdGlvbnMsIGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb24ucGxhY2VtZW50ID09ICdzaWRlYmFyJ1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBzaWRlYmFyID0gXy5mbGF0TWFwKHNpZGViYXIsIGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb24uZmllbGRzXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXI6IHNpZGViYXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJhbmNob3JcIiB9IH0sIFtfdm0uX3YoXCJFZGl0IE5vZGVcIildKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic2hhcmVkLWZvcm1cIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgIHN1Ym1pdDogX3ZtLnN1Ym1pdCxcbiAgICAgICAgICBuYXZpZ2F0aW9uOiBfdm0ubmF2aWdhdGlvbixcbiAgICAgICAgICBub2RlOiBfdm0ubm9kZSxcbiAgICAgICAgICBub2RlczogX3ZtLm5vZGVzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybS1jb250YWluZXJcIixcbiAgICB7XG4gICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJzaWRlYmFyXCIsXG4gICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidWktdG9nZ2xlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlLXZhbHVlXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlLXZhbHVlXCI6IDBcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdGF0dXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidWktc2VsZWN0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuZXdfd2luZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJPcGVuIGxpbmsgd2hlcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiRGV0ZXJtaW5lIHdoZXJlIHRoZSBsaW5rIHNob3VsZCBvcGVuLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmV3IFdpbmRvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTYW1lIFdpbmRvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmV3X3dpbmRvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmV3X3dpbmRvd1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5ld193aW5kb3dcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWN0aW9ucy5zaWRlYmFyLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBzZWN0aW9uLmhhbmRsZSwgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9faGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzZWN0aW9uLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fc3VidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Moc2VjdGlvbi5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woc2VjdGlvbi5maWVsZHMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKGZpZWxkLnR5cGUuaWQgKyBcIi1maWVsZHR5cGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZC5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtX19ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmllbGQ6IGZpZWxkLCBlcnJvcnM6IF92bS5mb3JtLmVycm9ycyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtW2ZpZWxkLmhhbmRsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgZmllbGQuaGFuZGxlLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybVtmaWVsZC5oYW5kbGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubm9kZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidWktZGVmaW5pdGlvbi1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWktZGVmaW5pdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcIlN0YXR1c1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyB0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1zdWNjZXNzLTUwMFwiOiBfdm0ubm9kZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtZGFuZ2VyLTUwMFwiOiAhX3ZtLm5vZGUuc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjaXJjbGVcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubm9kZS5zdGF0dXMgPyBcIkVuYWJsZWRcIiA6IFwiRGlzYWJsZWRcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1kZWZpbml0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJDcmVhdGVkIEF0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KF92bS5ub2RlLmNyZWF0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZLU1NLURELCBoaDptbSBhXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWktZGVmaW5pdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiVXBkYXRlZCBBdFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vbWVudChfdm0ubm9kZS51cGRhdGVkX2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWS1NTS1ERCwgaGg6bW0gYVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0pXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5tZW51LmlkXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hdmlnYXRpb24ubm9kZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBuYXZpZ2F0aW9uOiBfdm0ubmF2aWdhdGlvbi5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZm9ybS5oYXNDaGFuZ2VzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1aS10aXRsZS1ncm91cFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm5hbWVcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJVUkxcIixcbiAgICAgICAgICAgICAgICBoZWxwOiBcIlRoZSBVUkwgb2YgdGhlIG5vZGUuXCIsXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJ1cmxcIiksXG4gICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJ1cmxcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udXJsLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInVybFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udXJsXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmZpZWxkcy5ib2R5Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidWktdGFic1wiLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWN0aW9ucy5ib2R5LCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLXRhYlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBzZWN0aW9uLmhhbmRsZSwgYXR0cnM6IHsgbmFtZTogc2VjdGlvbi5uYW1lIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woc2VjdGlvbi5maWVsZHMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoZmllbGQudHlwZS5pZCArIFwiLWZpZWxkdHlwZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGQuaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1fX2dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZpZWxkOiBmaWVsZCwgZXJyb3JzOiBfdm0uZm9ybS5lcnJvcnMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1bZmllbGQuaGFuZGxlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgZmllbGQuaGFuZGxlLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1bZmllbGQuaGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGU4MTU1ZGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4ZTgxNTVkZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4ZTgxNTVkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4ZTgxNTVkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGU4MTU1ZGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOGU4MTU1ZGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Ob2Rlcy9FZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGU4MTU1ZGUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1ODlkMzEwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjU4OWQzMTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjU4OWQzMTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjU4OWQzMTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1ODlkMzEwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY1ODlkMzEwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvTm9kZXMvU2hhcmVkRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1ODlkMzEwJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==