(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default, getPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPage", function() { return getPage; });
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/views/Pages/SharedForm.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
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
        inner: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.has(this.form, 'name') ? this.form.name : 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      matrix: {},
      page: {},
      form: null
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    sections: function sections() {
      var body = [];
      var sidebar = [];

      if (this.matrix.fieldset) {
        body = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(this.matrix.fieldset.sections, function (section) {
          return section.placement == 'body';
        });
        sidebar = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(this.matrix.fieldset.sections, function (section) {
          return section.placement == 'sidebar';
        });
      }

      return {
        body: body,
        sidebar: sidebar
      };
    }
  },
  methods: {
    submit: function submit() {
      this.form.patch('/api/pages/' + this.matrix.id).then(function (response) {
        toast('Page saved successfully', 'success');
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getPage(to.params.page, function (error, page, matrix, fields) {
      next(function (vm) {
        vm.matrix = matrix;
        vm.page = page;
        vm.form = new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"](fields, true);
        vm.$emit('updateHead');
        vm.$nextTick(function () {
          vm.form.resetChangeListener();
        });
      });
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this = this;

    getPage(to.params.page, function (error, page, matrix, fields) {
      _this.matrix = matrix;
      _this.page = page;
      _this.form = new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"](fields, true);

      _this.$emit('updateHead');

      _this.$nextTick(function () {
        _this.form.resetChangeListener();
      });
    });
    next();
  }
});
function getPage(slug, callback) {
  axios.get('/api/pages/' + slug).then(function (response) {
    var page = {};
    var matrix = {};

    if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.has(response, 'data.data.page')) {
      matrix = response.data.data.matrix;
      page = response.data.data.page;
    } else {
      matrix = response.data.data;
      page = {
        name: matrix.name,
        slug: matrix.slug,
        status: 1
      };
    }

    var fields = {
      name: page.name,
      slug: page.slug,
      status: page.status
    };

    if (matrix.fieldset) {
      lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(matrix.fieldset.sections, function (section) {
        lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(section.fields, function (field) {
          fields[field.handle] = page[field.handle];
        });
      });
    }

    callback(null, page, matrix, fields);
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/SharedForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/SharedForm.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    page: {
      required: true
    },
    matrix: {
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  computed: {
    sections: function sections() {
      var body = [];
      var sidebar = [];

      if (this.matrix.fieldset) {
        body = _.filter(this.matrix.fieldset.sections, function (section) {
          return section.placement == 'body';
        });
        sidebar = _.filter(this.matrix.fieldset.sections, function (section) {
          return section.placement == 'sidebar';
        });
      }

      return {
        body: body,
        sidebar: sidebar
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Edit.vue?vue&type=template&id=f35d2d18&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Edit.vue?vue&type=template&id=f35d2d18& ***!
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
          _c(
            "app-title",
            { attrs: { icon: _vm.matrix.icon || "pencil-alt" } },
            [_vm._v("Edit " + _vm._s(_vm.matrix.reference_singular))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "subtitle" } }, [
        _vm._v(_vm._s(_vm.matrix.description))
      ]),
      _vm._v(" "),
      _vm.form
        ? _c("shared-form", {
            attrs: { form: _vm.form, page: _vm.page, matrix: _vm.matrix }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/SharedForm.vue?vue&type=template&id=a1745d9a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/SharedForm.vue?vue&type=template&id=a1745d9a& ***!
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
                    _c("p-slug", {
                      attrs: {
                        name: "slug",
                        label: "Slug",
                        monospaced: "",
                        autocomplete: "off",
                        required: "",
                        watch: _vm.form.name,
                        "has-error": _vm.form.errors.has("slug"),
                        "error-message": _vm.form.errors.get("slug")
                      },
                      model: {
                        value: _vm.form.slug,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "slug", $$v)
                        },
                        expression: "form.slug"
                      }
                    }),
                    _vm._v(" "),
                    _c("p-toggle", {
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
                        attrs: { field: field },
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
              _vm.page
                ? _c(
                    "p-definition-list",
                    [
                      _c(
                        "p-definition",
                        { attrs: { name: "Status" } },
                        [
                          _c("fa-icon", {
                            staticClass: "fa-fw text-xs",
                            class: {
                              "text-success-500": _vm.page.status,
                              "text-danger-500": !_vm.page.status
                            },
                            attrs: { icon: ["fas", "circle"] }
                          }),
                          _vm._v(
                            " " +
                              _vm._s(_vm.page.status ? "Enabled" : "Disabled") +
                              "\n            "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p-definition", { attrs: { name: "Created At" } }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm
                                .$moment(_vm.page.created_at)
                                .format("Y-MM-DD, hh:mm a")
                            ) +
                            "\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p-definition", { attrs: { name: "Updated At" } }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm
                                .$moment(_vm.page.updated_at)
                                .format("Y-MM-DD, hh:mm a")
                            ) +
                            "\n            "
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
            _c(
              "router-link",
              { staticClass: "button", attrs: { to: { name: "dashboard" } } },
              [_vm._v("Go Back")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button button--primary",
                class: { "button--disabled": !_vm.form.hasChanges },
                attrs: { type: "submit", disabled: !_vm.form.hasChanges },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.$parent.submit($event)
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
            _vm.matrix.show_name_field
              ? _c("p-title", {
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
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.sections.body.length > 0
              ? _c(
                  "p-tabs",
                  _vm._l(_vm.sections.body, function(section) {
                    return _c(
                      "p-tab",
                      { key: section.handle, attrs: { name: section.name } },
                      _vm._l(section.fields, function(field) {
                        return _c(
                          "div",
                          { key: field.handle, staticClass: "form__group" },
                          [
                            _c(field.type.id + "-fieldtype", {
                              tag: "component",
                              attrs: { field: field },
                              model: {
                                value: _vm.form[field.handle],
                                callback: function($$v) {
                                  _vm.$set(_vm.form, field.handle, $$v)
                                },
                                expression: "form[field.handle]"
                              }
                            })
                          ],
                          1
                        )
                      }),
                      0
                    )
                  }),
                  1
                )
              : _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c("p", [
                      _vm._v("Things are looking a little empty here!")
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "button",
                        attrs: { to: "/matrices/" + _vm.matrix.id + "/edit" }
                      },
                      [_vm._v("Configure your page")]
                    )
                  ],
                  1
                )
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

/***/ "./resources/js/views/Pages/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Pages/Edit.vue ***!
  \*******************************************/
/*! exports provided: getPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_f35d2d18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=f35d2d18& */ "./resources/js/views/Pages/Edit.vue?vue&type=template&id=f35d2d18&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPage", function() { return _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getPage"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_f35d2d18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_f35d2d18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Pages/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default, getPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPage", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getPage"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/Edit.vue?vue&type=template&id=f35d2d18&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Pages/Edit.vue?vue&type=template&id=f35d2d18& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_f35d2d18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=f35d2d18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Edit.vue?vue&type=template&id=f35d2d18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_f35d2d18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_f35d2d18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Pages/SharedForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Pages/SharedForm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedForm_vue_vue_type_template_id_a1745d9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=a1745d9a& */ "./resources/js/views/Pages/SharedForm.vue?vue&type=template&id=a1745d9a&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedForm_vue_vue_type_template_id_a1745d9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedForm_vue_vue_type_template_id_a1745d9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/SharedForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/SharedForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Pages/SharedForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/SharedForm.vue?vue&type=template&id=a1745d9a&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Pages/SharedForm.vue?vue&type=template&id=a1745d9a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_a1745d9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=template&id=a1745d9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/SharedForm.vue?vue&type=template&id=a1745d9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_a1745d9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_a1745d9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL1BhZ2VzL0VkaXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvdmlld3MvUGFnZXMvU2hhcmVkRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL1BhZ2VzL0VkaXQudnVlPzgyZTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL1BhZ2VzL1NoYXJlZEZvcm0udnVlPzdjNDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL1BhZ2VzL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9QYWdlcy9FZGl0LnZ1ZT80ZDE3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9QYWdlcy9FZGl0LnZ1ZT9lNzE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9QYWdlcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUGFnZXMvU2hhcmVkRm9ybS52dWU/NDIyZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUGFnZXMvU2hhcmVkRm9ybS52dWU/Mzc1YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGNBRkE7QUFHQTtBQUhBO0FBS0EsR0FmQTtBQWlCQTtBQUNBO0FBREEsR0FqQkE7QUFxQkE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBSUE7QUFDQTtBQUNBLFNBRkE7QUFHQTs7QUFFQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQUlBO0FB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Q0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLHNQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvMjkuanM/aWQ9Njc4ZjVlOWNhMTQyMGYzMTdlYzIiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8YXBwLXRpdGxlIDppY29uPVwibWF0cml4Lmljb24gfHwgJ3BlbmNpbC1hbHQnXCI+RWRpdCB7eyBtYXRyaXgucmVmZXJlbmNlX3Npbmd1bGFyIH19PC9hcHAtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJzdWJ0aXRsZVwiPnt7IG1hdHJpeC5kZXNjcmlwdGlvbiB9fTwvcG9ydGFsPlxuXG4gICAgICAgIDxzaGFyZWQtZm9ybVxuICAgICAgICAgICAgdi1pZj1cImZvcm1cIlxuICAgICAgICAgICAgOmZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgIDpwYWdlPVwicGFnZVwiXG4gICAgICAgICAgICA6bWF0cml4PVwibWF0cml4XCI+XG4gICAgICAgIDwvc2hhcmVkLWZvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nXG4gICAgaW1wb3J0IFNoYXJlZEZvcm0gZnJvbSAnLi9TaGFyZWRGb3JtJ1xuICAgIGltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6IF8uaGFzKHRoaXMuZm9ybSwgJ25hbWUnKSA/IHRoaXMuZm9ybS5uYW1lIDogJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDoge30sXG4gICAgICAgICAgICAgICAgcGFnZToge30sXG4gICAgICAgICAgICAgICAgZm9ybTogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnc2hhcmVkLWZvcm0nOiBTaGFyZWRGb3JtXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHNlY3Rpb25zKCkge1xuICAgICAgICAgICAgICAgIGxldCBib2R5ID0gW11cbiAgICAgICAgICAgICAgICBsZXQgc2lkZWJhciA9IFtdXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRyaXguZmllbGRzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IF8uZmlsdGVyKHRoaXMubWF0cml4LmZpZWxkc2V0LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbi5wbGFjZW1lbnQgPT0gJ2JvZHknXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhciA9IF8uZmlsdGVyKHRoaXMubWF0cml4LmZpZWxkc2V0LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbi5wbGFjZW1lbnQgPT0gJ3NpZGViYXInXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogc2lkZWJhclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaCgnL2FwaS9wYWdlcy8nICsgdGhpcy5tYXRyaXguaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdQYWdlIHNhdmVkIHN1Y2Nlc3NmdWxseScsICdzdWNjZXNzJylcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UubWVzc2FnZSwgJ2ZhaWxlZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgZ2V0UGFnZSh0by5wYXJhbXMucGFnZSwgKGVycm9yLCBwYWdlLCBtYXRyaXgsIGZpZWxkcykgPT4ge1xuICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZtLm1hdHJpeCA9IG1hdHJpeFxuICAgICAgICAgICAgICAgICAgICB2bS5wYWdlID0gcGFnZVxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtID0gbmV3IEZvcm0oZmllbGRzLCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLiRlbWl0KCd1cGRhdGVIZWFkJylcblxuICAgICAgICAgICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5yZXNldENoYW5nZUxpc3RlbmVyKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZVVwZGF0ZSh0byxmcm9tLG5leHQpIHtcbiAgICAgICAgICAgIGdldFBhZ2UodG8ucGFyYW1zLnBhZ2UsIChlcnJvciwgcGFnZSwgbWF0cml4LCBmaWVsZHMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IHBhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybShmaWVsZHMsIHRydWUpXG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGVIZWFkJylcblxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0Q2hhbmdlTGlzdGVuZXIoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBuZXh0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRQYWdlKHNsdWcsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9wYWdlcy8nICsgc2x1ZykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBwYWdlID0ge31cbiAgICAgICAgICAgIGxldCBtYXRyaXggPSB7fVxuXG4gICAgICAgICAgICBpZiAoXy5oYXMocmVzcG9uc2UsICdkYXRhLmRhdGEucGFnZScpKSB7XG4gICAgICAgICAgICAgICAgbWF0cml4ID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hdHJpeFxuICAgICAgICAgICAgICAgIHBhZ2UgICA9IHJlc3BvbnNlLmRhdGEuZGF0YS5wYWdlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hdHJpeCA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIHBhZ2UgICA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbWF0cml4Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHNsdWc6IG1hdHJpeC5zbHVnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBmaWVsZHMgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogcGFnZS5uYW1lLFxuICAgICAgICAgICAgICAgIHNsdWc6IHBhZ2Uuc2x1ZyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHBhZ2Uuc3RhdHVzLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF0cml4LmZpZWxkc2V0KSB7XG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKG1hdHJpeC5maWVsZHNldC5zZWN0aW9ucywgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBfLmZvckVhY2goc2VjdGlvbi5maWVsZHMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNbZmllbGQuaGFuZGxlXSA9IHBhZ2VbZmllbGQuaGFuZGxlXVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHBhZ2UsIG1hdHJpeCwgZmllbGRzKVxuICAgICAgICB9KVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8Zm9ybS1jb250YWluZXI+XG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdkYXNoYm9hcmQnIH1cIiBjbGFzcz1cImJ1dHRvblwiPkdvIEJhY2s8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwiJHBhcmVudC5zdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIiA6Y2xhc3M9XCJ7J2J1dHRvbi0tZGlzYWJsZWQnOiAhZm9ybS5oYXNDaGFuZ2VzfVwiIDpkaXNhYmxlZD1cIiFmb3JtLmhhc0NoYW5nZXNcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHAtdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwibWF0cml4LnNob3dfbmFtZV9maWVsZFwiPlxuICAgICAgICAgICAgICAgIDwvcC10aXRsZT5cblxuICAgICAgICAgICAgICAgIDxwLXRhYnMgdi1pZj1cInNlY3Rpb25zLmJvZHkubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cC10YWIgdi1mb3I9XCJzZWN0aW9uIGluIHNlY3Rpb25zLmJvZHlcIiA6a2V5PVwic2VjdGlvbi5oYW5kbGVcIiA6bmFtZT1cInNlY3Rpb24ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImZpZWxkIGluIHNlY3Rpb24uZmllbGRzXCIgOmtleT1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppcz1cImZpZWxkLnR5cGUuaWQgKyAnLWZpZWxkdHlwZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtW2ZpZWxkLmhhbmRsZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3AtdGFiPlxuICAgICAgICAgICAgICAgIDwvcC10YWJzPlxuXG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5UaGluZ3MgYXJlIGxvb2tpbmcgYSBsaXR0bGUgZW1wdHkgaGVyZSE8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImJ1dHRvblwiIDp0bz1cIicvbWF0cmljZXMvJyArIG1hdHJpeC5pZCArICcvZWRpdCdcIj5Db25maWd1cmUgeW91ciBwYWdlPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnNpZGViYXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLXNsdWdcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzbHVnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2x1Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDp3YXRjaD1cImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdzbHVnJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3NsdWcnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zbHVnXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1zbHVnPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLXRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRydWUtdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmYWxzZS12YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9wLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHYtZm9yPVwiKHNlY3Rpb24pIGluIHNlY3Rpb25zLnNpZGViYXJcIiA6a2V5PVwic2VjdGlvbi5oYW5kbGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmRfX3RpdGxlXCI+e3sgc2VjdGlvbi5uYW1lIH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInNlY3Rpb24uZGVzY3JpcHRpb25cIiBjbGFzcz1cImNhcmRfX3N1YnRpdGxlXCI+e3sgc2VjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTG9vcCB0aHJvdWdoIGVhY2ggc2VjdGlvbiBmaWVsZCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgOmlzPVwiZmllbGQudHlwZS5pZCArICctZmllbGR0eXBlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybVtmaWVsZC5oYW5kbGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiZmllbGQgaW4gc2VjdGlvbi5maWVsZHNcIiA6a2V5PVwiZmllbGQuaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvY29tcG9uZW50PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwLWRlZmluaXRpb24tbGlzdCB2LWlmPVwicGFnZVwiPlxuICAgICAgICAgICAgICAgIDxwLWRlZmluaXRpb24gbmFtZT1cIlN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NpcmNsZSddXCIgY2xhc3M9XCJmYS1mdyB0ZXh0LXhzXCIgOmNsYXNzPVwieyd0ZXh0LXN1Y2Nlc3MtNTAwJzogcGFnZS5zdGF0dXMsICd0ZXh0LWRhbmdlci01MDAnOiAhIHBhZ2Uuc3RhdHVzfVwiPjwvZmEtaWNvbj4ge3sgcGFnZS5zdGF0dXMgPyAnRW5hYmxlZCcgOiAnRGlzYWJsZWQnIH19XG4gICAgICAgICAgICAgICAgPC9wLWRlZmluaXRpb24+XG5cbiAgICAgICAgICAgICAgICA8cC1kZWZpbml0aW9uIG5hbWU9XCJDcmVhdGVkIEF0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ICRtb21lbnQocGFnZS5jcmVhdGVkX2F0KS5mb3JtYXQoJ1ktTU0tREQsIGhoOm1tIGEnKSB9fVxuICAgICAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHAtZGVmaW5pdGlvbiBuYW1lPVwiVXBkYXRlZCBBdFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyAkbW9tZW50KHBhZ2UudXBkYXRlZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgfX1cbiAgICAgICAgICAgICAgICA8L3AtZGVmaW5pdGlvbj5cbiAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uLWxpc3Q+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9mb3JtLWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcGFnZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBtYXRyaXg6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHNlY3Rpb25zKCkge1xuICAgICAgICAgICAgICAgIGxldCBib2R5ID0gW11cbiAgICAgICAgICAgICAgICBsZXQgc2lkZWJhciA9IFtdXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRyaXguZmllbGRzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IF8uZmlsdGVyKHRoaXMubWF0cml4LmZpZWxkc2V0LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbi5wbGFjZW1lbnQgPT0gJ2JvZHknXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhciA9IF8uZmlsdGVyKHRoaXMubWF0cml4LmZpZWxkc2V0LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbi5wbGFjZW1lbnQgPT0gJ3NpZGViYXInXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogc2lkZWJhclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFwcC10aXRsZVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBpY29uOiBfdm0ubWF0cml4Lmljb24gfHwgXCJwZW5jaWwtYWx0XCIgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIkVkaXQgXCIgKyBfdm0uX3MoX3ZtLm1hdHJpeC5yZWZlcmVuY2Vfc2luZ3VsYXIpKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJzdWJ0aXRsZVwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5tYXRyaXguZGVzY3JpcHRpb24pKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmZvcm1cbiAgICAgICAgPyBfYyhcInNoYXJlZC1mb3JtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBwYWdlOiBfdm0ucGFnZSwgbWF0cml4OiBfdm0ubWF0cml4IH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybS1jb250YWluZXJcIixcbiAgICB7XG4gICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJzaWRlYmFyXCIsXG4gICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicC1zbHVnXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbHVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTbHVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXRjaDogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJzbHVnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJzbHVnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnNsdWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNsdWdcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zbHVnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInAtdG9nZ2xlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlLXZhbHVlXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlLXZhbHVlXCI6IDBcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdGF0dXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWN0aW9ucy5zaWRlYmFyLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBzZWN0aW9uLmhhbmRsZSwgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9faGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzZWN0aW9uLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fc3VidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Moc2VjdGlvbi5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woc2VjdGlvbi5maWVsZHMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKGZpZWxkLnR5cGUuaWQgKyBcIi1maWVsZHR5cGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZC5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmaWVsZDogZmllbGQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybVtmaWVsZC5oYW5kbGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIGZpZWxkLmhhbmRsZSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1bZmllbGQuaGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnBhZ2VcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInAtZGVmaW5pdGlvbi1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kZWZpbml0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiU3RhdHVzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IHRleHQteHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXN1Y2Nlc3MtNTAwXCI6IF92bS5wYWdlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1kYW5nZXItNTAwXCI6ICFfdm0ucGFnZS5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNpcmNsZVwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wYWdlLnN0YXR1cyA/IFwiRW5hYmxlZFwiIDogXCJEaXNhYmxlZFwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1kZWZpbml0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJDcmVhdGVkIEF0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRtb21lbnQoX3ZtLnBhZ2UuY3JlYXRlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIlktTU0tREQsIGhoOm1tIGFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtZGVmaW5pdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiVXBkYXRlZCBBdFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KF92bS5wYWdlLnVwZGF0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZLU1NLURELCBoaDptbSBhXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdKVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLCBhdHRyczogeyB0bzogeyBuYW1lOiBcImRhc2hib2FyZFwiIH0gfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJidXR0b24tLWRpc2FibGVkXCI6ICFfdm0uZm9ybS5oYXNDaGFuZ2VzIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgZGlzYWJsZWQ6ICFfdm0uZm9ybS5oYXNDaGFuZ2VzIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcGFyZW50LnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLm1hdHJpeC5zaG93X25hbWVfZmllbGRcbiAgICAgICAgICAgICAgPyBfYyhcInAtdGl0bGVcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5zZWN0aW9ucy5ib2R5Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwicC10YWJzXCIsXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnNlY3Rpb25zLmJvZHksIGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicC10YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGtleTogc2VjdGlvbi5oYW5kbGUsIGF0dHJzOiB7IG5hbWU6IHNlY3Rpb24ubmFtZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHNlY3Rpb24uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogZmllbGQuaGFuZGxlLCBzdGF0aWNDbGFzczogXCJmb3JtX19ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhmaWVsZC50eXBlLmlkICsgXCItZmllbGR0eXBlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZpZWxkOiBmaWVsZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtW2ZpZWxkLmhhbmRsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgZmllbGQuaGFuZGxlLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybVtmaWVsZC5oYW5kbGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGhpbmdzIGFyZSBsb29raW5nIGEgbGl0dGxlIGVtcHR5IGhlcmUhXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvbWF0cmljZXMvXCIgKyBfdm0ubWF0cml4LmlkICsgXCIvZWRpdFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25maWd1cmUgeW91ciBwYWdlXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjM1ZDJkMTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmMzVkMmQxOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmMzVkMmQxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmMzVkMmQxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjM1ZDJkMTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjM1ZDJkMTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9QYWdlcy9FZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjM1ZDJkMTgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWExNzQ1ZDlhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYTE3NDVkOWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTE3NDVkOWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTE3NDVkOWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWExNzQ1ZDlhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2ExNzQ1ZDlhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvUGFnZXMvU2hhcmVkRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWExNzQ1ZDlhJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==