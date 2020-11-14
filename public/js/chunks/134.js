(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[134],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Fieldsets/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Fieldsets/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default, getModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return getModels; });
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/pages/Fieldsets/SharedForm.vue");
/* harmony import */ var _services_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Form */ "./resources/js/services/Form.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
//
//
//
//
//
//
//
//
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
  auth: function auth() {
    return {
      permission: 'matrices.update'
    };
  },
  head: {
    title: function title() {
      return {
        inner: _.has(this.form, 'name') ? this.form.name : 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      id: null,
      matrices: [],
      matrix: {},
      form: null
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.form.reference_singular == '') {
        this.form.reference_singular = pluralize__WEBPACK_IMPORTED_MODULE_2___default.a.singular(this.form.name);
      }

      if (this.form.reference_plural == '') {
        this.form.reference_plural = pluralize__WEBPACK_IMPORTED_MODULE_2___default()(this.form.name);
      }

      this.form.patch("/api/matrices/".concat(this.id)).then(function (response) {
        axios.post("/api/blueprints/".concat(response.data.blueprint.id, "/sections"), {
          sections: _this.form.sections
        }).then(function (response) {
          _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('navigation/fetchAdminNavigation');
          toast('Matrix successfully updated', 'success');

          _this.$router.push('/matrices');
        })["catch"](function (response) {
          toast(response.message, 'failed');
        });
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getModels(to.params.matrix, function (error, matrix, matrices) {
      if (error) {
        next(function (vm) {
          toast(error.toString(), 'danger');
          vm.$router.push('/matrices');
        });
      } else {
        next(function (vm) {
          vm.id = matrix.data.data.id;
          vm.matrix = matrix.data.data;
          vm.matrices = matrices.data.data;
          vm.form = new _services_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
            parent_id: vm.matrix.parent_id,
            name: vm.matrix.name,
            handle: vm.matrix.handle,
            description: vm.matrix.description,
            type: vm.matrix.type,
            reference_singular: vm.matrix.reference_singular,
            reference_plural: vm.matrix.reference_plural,
            sections: vm.matrix.blueprint.sections,
            sidebar: vm.matrix.sidebar ? '1' : '0',
            quicklink: vm.matrix.quicklink ? '1' : '0',
            icon: vm.matrix.icon,
            show_name_field: vm.matrix.show_name_field,
            name_label: vm.matrix.name_label,
            name_format: vm.matrix.name_format,
            route: vm.matrix.route,
            template: vm.matrix.template,
            revision_control: vm.matrix.revision_control ? '1' : '0',
            categorizable: vm.matrix.categorizable ? '1' : '0',
            creditable: vm.matrix.creditable ? '1' : '0',
            publishable: vm.matrix.publishable ? '1' : '0',
            seoable: vm.matrix.seoable ? '1' : '0',
            status: vm.matrix.status ? '1' : '0'
          }, true);
          vm.$nextTick(function () {
            vm.$emit('updateHead');
          });
        });
      }
    });
  }
});
function getModels(maxtrix, callback) {
  axios.all([axios.get("/api/matrices/".concat(maxtrix)), axios.get('/api/matrices')]).then(axios.spread(function (matrix, matrices) {
    callback(null, matrix, matrices);
  }))["catch"](function (error) {
    callback(new Error('The requested maxtrix could not be found'));
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Fieldsets/SharedForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Fieldsets/SharedForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      placements: [{
        label: 'Body',
        value: 'body'
      }, {
        label: 'Sidebar',
        value: 'sidebar'
      }]
    };
  },
  props: {
    id: {
      type: Number,
      required: false,
      "default": 0
    },
    form: {
      type: Object,
      required: true
    },
    matrix: {
      type: Object,
      required: false
    },
    submit: {
      required: true
    },
    matrices: {
      required: true
    }
  },
  computed: {
    singularReference: function singularReference() {
      return pluralize__WEBPACK_IMPORTED_MODULE_0___default.a.singular(this.form.name);
    },
    pluralReference: function pluralReference() {
      return pluralize__WEBPACK_IMPORTED_MODULE_0___default()(this.form.name);
    },
    parentOptions: function parentOptions() {
      var _this = this;

      var options = _.map(this.matrices, function (item) {
        return {
          'label': item.name,
          'value': item.id
        };
      });

      options = _.remove(options, function (item) {
        return _this.id == item.id;
      });
      options.unshift({
        'label': 'None',
        'value': null
      });
      return options;
    }
  },
  watch: {
    '$parent.form.type': function $parentFormType(value) {
      if (value == 'single') {
        this.$parent.form.show_name_field = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Fieldsets/Edit.vue?vue&type=template&id=818c1f92&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Fieldsets/Edit.vue?vue&type=template&id=818c1f92& ***!
  \************************************************************************************************************************************************************************************************************/
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
    { staticClass: "matrix-page" },
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("page-title", { attrs: { icon: "layer-group" } }, [
            _vm._v("Edit Matrix")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.form
        ? _c("shared-form", {
            attrs: {
              id: _vm.id,
              form: _vm.form,
              matrix: _vm.matrix,
              submit: _vm.submit,
              matrices: _vm.matrices
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Fieldsets/SharedForm.vue?vue&type=template&id=6890f9b6&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Fieldsets/SharedForm.vue?vue&type=template&id=6890f9b6& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "div",
          { staticClass: "buttons" },
          [
            _vm.$mq != "sm"
              ? _c(
                  "ui-button",
                  { attrs: { to: { name: "matrices" }, variant: "secondary" } },
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
      _c(
        "portal",
        { attrs: { to: "sidebar-right" } },
        [
          _c(
            "sidebar",
            { attrs: { id: "matrix-sidebar" } },
            [
              _c(
                "sidebar-section",
                { attrs: { id: "matrix_panel_status", tabindex: "-1" } },
                [
                  _c("ui-toggle", {
                    attrs: {
                      id: "matrix-status",
                      name: "status",
                      label: "Status",
                      help: _vm.form.status
                        ? "Toggle to disable this matrix."
                        : "Toggle to enable this matrix.",
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
              ),
              _vm._v(" "),
              _c(
                "sidebar-section",
                {
                  attrs: {
                    id: "matrix_panel_appearance",
                    title: "Appearance",
                    description:
                      "Choose where to show this matrix and how to represent it.",
                    tabindex: "-1"
                  }
                },
                [
                  _c("ui-toggle", {
                    attrs: {
                      id: "matrix-sidebar-show",
                      name: "sidebar",
                      label: "Show in Sidebar",
                      "true-value": 1,
                      "false-value": 0
                    },
                    model: {
                      value: _vm.form.sidebar,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "sidebar", $$v)
                      },
                      expression: "form.sidebar"
                    }
                  }),
                  _vm._v(" "),
                  _c("ui-toggle", {
                    attrs: {
                      id: "matrix-quicklink-show",
                      name: "quicklink",
                      label: "Show as Quicklink",
                      "true-value": 1,
                      "false-value": 0
                    },
                    model: {
                      value: _vm.form.quicklink,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "quicklink", $$v)
                      },
                      expression: "form.quicklink"
                    }
                  }),
                  _vm._v(" "),
                  _c("icon-picker", {
                    attrs: {
                      id: "matrix-icon",
                      name: "icon",
                      label: "Icon",
                      placeholder: "Search icons...",
                      help: "Choose an icon that best represents your matrix.",
                      "has-error": _vm.form.errors.has("icon"),
                      "error-message": _vm.form.errors.get("icon"),
                      required: ""
                    },
                    model: {
                      value: _vm.form.icon,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "icon", $$v)
                      },
                      expression: "form.icon"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.matrix
                ? _c("status-card", {
                    attrs: {
                      entry: _vm.matrix,
                      id: "matrix_panel_status_card",
                      tabindex: "-1"
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            id: "matrix_panel_general",
            title: "General Information",
            description:
              "General information about your collection and what it manages.",
            tabindex: "-1"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col w-full lg:w-1/2" },
              [
                _c("ui-input-group", {
                  attrs: {
                    id: "matrix-name",
                    name: "name",
                    label: "Name",
                    help: "What should this matrix be called?",
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
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col w-full lg:w-1/2" },
              [
                _c("ui-slug-group", {
                  attrs: {
                    id: "matrix-handle",
                    name: "handle",
                    label: "Handle",
                    help: "A developer-friendly identifier.",
                    monospaced: "",
                    autocomplete: "off",
                    required: "",
                    delimiter: "_",
                    watch: _vm.form.name,
                    "has-error": _vm.form.errors.has("handle"),
                    "error-message": _vm.form.errors.get("handle")
                  },
                  model: {
                    value: _vm.form.handle,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "handle", $$v)
                    },
                    expression: "form.handle"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("ui-textarea-group", {
            attrs: {
              id: "matrix-description",
              name: "description",
              label: "Description",
              help:
                "Give a short description of what this matrix will manage and store.",
              autocomplete: "off",
              "has-error": _vm.form.errors.has("description"),
              "error-message": _vm.form.errors.get("description")
            },
            model: {
              value: _vm.form.description,
              callback: function($$v) {
                _vm.$set(_vm.form, "description", $$v)
              },
              expression: "form.description"
            }
          }),
          _vm._v(" "),
          _c("ui-select-group", {
            attrs: {
              id: "matrix-type",
              name: "type",
              label: "Type",
              help: "What type of matrix will this be?",
              options: [
                {
                  label: "Collection",
                  value: "collection"
                },
                {
                  label: "Single",
                  value: "single"
                }
              ],
              "has-error": _vm.form.errors.has("type"),
              "error-message": _vm.form.errors.get("type")
            },
            model: {
              value: _vm.form.type,
              callback: function($$v) {
                _vm.$set(_vm.form, "type", $$v)
              },
              expression: "form.type"
            }
          }),
          _vm._v(" "),
          _c("ui-select-group", {
            attrs: {
              id: "matrix-parent-id",
              name: "parent_id",
              label: "Parent Matrix",
              help: "Should this matrix belong to another?",
              options: _vm.parentOptions,
              "has-error": _vm.form.errors.has("parent_id"),
              "error-message": _vm.form.errors.get("parent_id")
            },
            model: {
              value: _vm.form.parent_id,
              callback: function($$v) {
                _vm.$set(_vm.form, "parent_id", $$v)
              },
              expression: "form.parent_id"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            id: "matrix_panel_customizations",
            title: "Customizations",
            description: "Configure the various customizations options.",
            tabindex: "-1"
          }
        },
        [
          _c("ui-input-group", {
            attrs: {
              id: "matrix-name-label",
              name: "name_label",
              label: "Name Label",
              placeholder: "Name",
              help:
                "If you'd like, you may customize the label used for your entry names.",
              "has-error": _vm.form.errors.has("name_label"),
              "error-message": _vm.form.errors.get("name_label")
            },
            model: {
              value: _vm.form.name_label,
              callback: function($$v) {
                _vm.$set(_vm.form, "name_label", $$v)
              },
              expression: "form.name_label"
            }
          }),
          _vm._v(" "),
          _c("ui-input-group", {
            attrs: {
              id: "matrix-reference-singular",
              name: "reference_singular",
              label: "Singular Reference",
              placeholder: _vm.singularReference,
              help:
                "What would you like to reference this as in singular form? By default will try to guess from the name. Results may vary.",
              "has-error": _vm.form.errors.has("reference_singular"),
              "error-message": _vm.form.errors.get("reference_singular")
            },
            model: {
              value: _vm.form.reference_singular,
              callback: function($$v) {
                _vm.$set(_vm.form, "reference_singular", $$v)
              },
              expression: "form.reference_singular"
            }
          }),
          _vm._v(" "),
          _c("ui-input-group", {
            attrs: {
              id: "matrix-reference-plural",
              name: "reference_plural",
              label: "Plural Reference",
              placeholder: _vm.pluralReference,
              help:
                "What would you like to reference this as in plural form? By default will try to guess from the name. Results may vary.",
              "has-error": _vm.form.errors.has("reference_plural"),
              "error-message": _vm.form.errors.get("reference_plural")
            },
            model: {
              value: _vm.form.reference_plural,
              callback: function($$v) {
                _vm.$set(_vm.form, "reference_plural", $$v)
              },
              expression: "form.reference_plural"
            }
          }),
          _vm._v(" "),
          _vm.form.type == "collection"
            ? _c("ui-toggle", {
                attrs: {
                  id: "matrix-show-name-field",
                  name: "show_name_field",
                  label: "Show name field",
                  help: !_vm.form.show_name_field
                    ? "Auto-generate a name using the format in the field below."
                    : "Include a name field on this matrix.",
                  "true-value": 1,
                  "false-value": 0
                },
                model: {
                  value: _vm.form.show_name_field,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "show_name_field", $$v)
                  },
                  expression: "form.show_name_field"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          !_vm.form.show_name_field
            ? _c("ui-input-group", {
                attrs: {
                  monospaced: "",
                  id: "matrix-name-format",
                  name: "name_format",
                  label: "Name Format",
                  help:
                    "What format would you like your generated names and slugs to follow?",
                  required: "",
                  "has-error": _vm.form.errors.has("name_format"),
                  "error-message": _vm.form.errors.get("name_format")
                },
                model: {
                  value: _vm.form.name_format,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name_format", $$v)
                  },
                  expression: "form.name_format"
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            id: "matrix_panel_routing",
            title: "Routing",
            description:
              "Configure how entries within the collection will be accessed on the frontend.",
            tabindex: "-1"
          }
        },
        [
          _c("ui-input-group", {
            attrs: {
              id: "matrix-route",
              name: "route",
              label: "Route",
              help: "When the URI matches this pattern...",
              autocomplete: "off",
              monospaced: "",
              "has-error": _vm.form.errors.has("route"),
              "error-message": _vm.form.errors.get("route")
            },
            model: {
              value: _vm.form.route,
              callback: function($$v) {
                _vm.$set(_vm.form, "route", $$v)
              },
              expression: "form.route"
            }
          }),
          _vm._v(" "),
          _c("ui-input-group", {
            attrs: {
              id: "matrix-template",
              name: "template",
              label: "Template",
              help: "Render this template",
              autocomplete: "off",
              monospaced: "",
              "has-error": _vm.form.errors.has("template"),
              "error-message": _vm.form.errors.get("template")
            },
            model: {
              value: _vm.form.template,
              callback: function($$v) {
                _vm.$set(_vm.form, "template", $$v)
              },
              expression: "form.template"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            id: "matrix_panel_blueprint",
            grid: false,
            title: "Blueprint",
            description:
              "Create the content blueprint for this matrix by adding panel sections and fields to either the page body or page sidebar.",
            tabindex: "-1"
          }
        },
        [
          _c(
            "blueprint",
            [
              _c("blueprint-area", {
                attrs: {
                  placements: _vm.placements,
                  area: "body",
                  title: "Body"
                },
                model: {
                  value: _vm.form.sections,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "sections", $$v)
                  },
                  expression: "form.sections"
                }
              }),
              _vm._v(" "),
              _c("blueprint-area", {
                staticClass: "blueprint__col--sidebar",
                attrs: {
                  placements: _vm.placements,
                  area: "sidebar",
                  title: "Sidebar"
                },
                model: {
                  value: _vm.form.sections,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "sections", $$v)
                  },
                  expression: "form.sections"
                }
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

/***/ "./resources/js/pages/Fieldsets/Edit.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/Fieldsets/Edit.vue ***!
  \***********************************************/
/*! exports provided: getModels, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_818c1f92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=818c1f92& */ "./resources/js/pages/Fieldsets/Edit.vue?vue&type=template&id=818c1f92&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/Fieldsets/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getModels"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_818c1f92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_818c1f92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Fieldsets/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Fieldsets/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Fieldsets/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default, getModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Fieldsets/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getModels"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Fieldsets/Edit.vue?vue&type=template&id=818c1f92&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Fieldsets/Edit.vue?vue&type=template&id=818c1f92& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_818c1f92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=818c1f92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Fieldsets/Edit.vue?vue&type=template&id=818c1f92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_818c1f92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_818c1f92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Fieldsets/SharedForm.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/Fieldsets/SharedForm.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedForm_vue_vue_type_template_id_6890f9b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=6890f9b6& */ "./resources/js/pages/Fieldsets/SharedForm.vue?vue&type=template&id=6890f9b6&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/Fieldsets/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedForm_vue_vue_type_template_id_6890f9b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedForm_vue_vue_type_template_id_6890f9b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Fieldsets/SharedForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Fieldsets/SharedForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Fieldsets/SharedForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Fieldsets/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Fieldsets/SharedForm.vue?vue&type=template&id=6890f9b6&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Fieldsets/SharedForm.vue?vue&type=template&id=6890f9b6& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6890f9b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=template&id=6890f9b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Fieldsets/SharedForm.vue?vue&type=template&id=6890f9b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6890f9b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6890f9b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL01hdHJpY2VzL0VkaXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvU2hhcmVkRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0ZpZWxkc2V0cy9FZGl0LnZ1ZT83OGYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9GaWVsZHNldHMvU2hhcmVkRm9ybS52dWU/MjI1MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRmllbGRzZXRzL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9GaWVsZHNldHMvRWRpdC52dWU/YWI5ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRmllbGRzZXRzL0VkaXQudnVlPzFjMzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0ZpZWxkc2V0cy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRmllbGRzZXRzL1NoYXJlZEZvcm0udnVlP2M0ZDEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0ZpZWxkc2V0cy9TaGFyZWRGb3JtLnZ1ZT9mNzMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQUxBO0FBT0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQVBBO0FBZUEsTUFmQSxrQkFlQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLGtCQUZBO0FBR0EsZ0JBSEE7QUFJQTtBQUpBO0FBTUEsR0F0QkE7QUF3QkE7QUFDQTtBQURBLEdBeEJBO0FBNEJBO0FBQ0EsVUFEQSxvQkFD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QUFBQTtBQUF5RjtBQUMzQjtBQUNMOzs7QUFHekQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHFGQUFNO0FBQ1IsRUFBRSw4RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBZ00sQ0FBZ0Isc1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy8xMzQuanM/aWQ9NWIwYWRmZTlmYWRjZjc0OWY1MWIiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1hdHJpeC1wYWdlXCI+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPHBhZ2UtdGl0bGUgaWNvbj1cImxheWVyLWdyb3VwXCI+RWRpdCBNYXRyaXg8L3BhZ2UtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxzaGFyZWQtZm9ybVxuICAgICAgICAgICAgdi1pZj1cImZvcm1cIlxuICAgICAgICAgICAgOmlkPVwiaWRcIlxuICAgICAgICAgICAgOmZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgIDptYXRyaXg9XCJtYXRyaXhcIlxuICAgICAgICAgICAgOnN1Ym1pdD1cInN1Ym1pdFwiXG4gICAgICAgICAgICA6bWF0cmljZXM9XCJtYXRyaWNlc1wiPlxuICAgICAgICA8L3NoYXJlZC1mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgU2hhcmVkRm9ybSBmcm9tICcuL1NoYXJlZEZvcm0nXG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vc2VydmljZXMvRm9ybSdcbiAgICBpbXBvcnQgcGx1cmFsaXplIGZyb20gJ3BsdXJhbGl6ZSdcbiAgICBpbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGF1dGgoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBlcm1pc3Npb246ICdtYXRyaWNlcy51cGRhdGUnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiBfLmhhcyh0aGlzLmZvcm0sICduYW1lJykgPyB0aGlzLmZvcm0ubmFtZSA6ICdMb2FkaW5nLi4uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICBtYXRyaWNlczogW10sXG4gICAgICAgICAgICAgICAgbWF0cml4OiB7fSxcbiAgICAgICAgICAgICAgICBmb3JtOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3NoYXJlZC1mb3JtJzogU2hhcmVkRm9ybVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLnJlZmVyZW5jZV9zaW5ndWxhciA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVmZXJlbmNlX3Npbmd1bGFyID0gcGx1cmFsaXplLnNpbmd1bGFyKHRoaXMuZm9ybS5uYW1lKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0ucmVmZXJlbmNlX3BsdXJhbCA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVmZXJlbmNlX3BsdXJhbCA9IHBsdXJhbGl6ZSh0aGlzLmZvcm0ubmFtZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucGF0Y2goYC9hcGkvbWF0cmljZXMvJHt0aGlzLmlkfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYC9hcGkvYmx1ZXByaW50cy8ke3Jlc3BvbnNlLmRhdGEuYmx1ZXByaW50LmlkfS9zZWN0aW9uc2AsIHsgc2VjdGlvbnM6IHRoaXMuZm9ybS5zZWN0aW9ucyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ25hdmlnYXRpb24vZmV0Y2hBZG1pbk5hdmlnYXRpb24nKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ01hdHJpeCBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbWF0cmljZXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UubWVzc2FnZSwgJ2ZhaWxlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGdldE1vZGVscyh0by5wYXJhbXMubWF0cml4LCAoZXJyb3IsIG1hdHJpeCwgbWF0cmljZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnRvU3RyaW5nKCksICdkYW5nZXInKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kcm91dGVyLnB1c2goJy9tYXRyaWNlcycpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgodm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmlkICAgICAgICA9IG1hdHJpeC5kYXRhLmRhdGEuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLm1hdHJpeCAgICA9IG1hdHJpeC5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLm1hdHJpY2VzICA9IG1hdHJpY2VzLmRhdGEuZGF0YVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5mb3JtID0gbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF9pZDogICAgICAgICAgdm0ubWF0cml4LnBhcmVudF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAgICAgICAgICAgICAgIHZtLm1hdHJpeC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZTogICAgICAgICAgICAgdm0ubWF0cml4LmhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogICAgICAgIHZtLm1hdHJpeC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAgICAgICAgICAgICAgIHZtLm1hdHJpeC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZV9zaW5ndWxhcjogdm0ubWF0cml4LnJlZmVyZW5jZV9zaW5ndWxhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VfcGx1cmFsOiAgIHZtLm1hdHJpeC5yZWZlcmVuY2VfcGx1cmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25zOiAgICAgICAgICAgdm0ubWF0cml4LmJsdWVwcmludC5zZWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlYmFyOiAgICAgICAgICAgIHZtLm1hdHJpeC5zaWRlYmFyID8gJzEnIDogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1aWNrbGluazogICAgICAgICAgdm0ubWF0cml4LnF1aWNrbGluayA/ICcxJyA6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAgICAgICAgICAgICAgIHZtLm1hdHJpeC5pY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfbmFtZV9maWVsZDogICAgdm0ubWF0cml4LnNob3dfbmFtZV9maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lX2xhYmVsOiAgICAgICAgIHZtLm1hdHJpeC5uYW1lX2xhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVfZm9ybWF0OiAgICAgICAgdm0ubWF0cml4Lm5hbWVfZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlOiAgICAgICAgICAgICAgdm0ubWF0cml4LnJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAgICAgICAgICAgdm0ubWF0cml4LnRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlzaW9uX2NvbnRyb2w6ICAgdm0ubWF0cml4LnJldmlzaW9uX2NvbnRyb2wgPyAnMScgOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcml6YWJsZTogICAgICB2bS5tYXRyaXguY2F0ZWdvcml6YWJsZSA/ICcxJyA6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkaXRhYmxlOiAgICAgICAgIHZtLm1hdHJpeC5jcmVkaXRhYmxlID8gJzEnIDogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1Ymxpc2hhYmxlOiAgICAgICAgdm0ubWF0cml4LnB1Ymxpc2hhYmxlID8gJzEnIDogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlb2FibGU6ICAgICAgICAgICAgdm0ubWF0cml4LnNlb2FibGUgPyAnMScgOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAgICAgICAgICAgICB2bS5tYXRyaXguc3RhdHVzID8gJzEnIDogJzAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRlbWl0KCd1cGRhdGVIZWFkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRNb2RlbHMobWF4dHJpeCwgY2FsbGJhY2spIHtcbiAgICAgICAgYXhpb3MuYWxsKFtcbiAgICAgICAgICAgIGF4aW9zLmdldChgL2FwaS9tYXRyaWNlcy8ke21heHRyaXh9YCksXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvbWF0cmljZXMnKVxuICAgICAgICBdKS50aGVuKGF4aW9zLnNwcmVhZCgobWF0cml4LCBtYXRyaWNlcykgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbWF0cml4LCBtYXRyaWNlcylcbiAgICAgICAgfSkpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdUaGUgcmVxdWVzdGVkIG1heHRyaXggY291bGQgbm90IGJlIGZvdW5kJykpXG4gICAgICAgIH0pXG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24gdi1pZj1cIiRtcSAhPSAnc20nXCIgOnRvPVwieyBuYW1lOiAnbWF0cmljZXMnIH1cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+R28gQmFjazwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24gdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIiA6ZGlzYWJsZWQ9XCIhZm9ybS5oYXNDaGFuZ2VzXCI+U2F2ZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJzaWRlYmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICA8c2lkZWJhciBpZD1cIm1hdHJpeC1zaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgPHNpZGViYXItc2VjdGlvbiBpZD1cIm1hdHJpeF9wYW5lbF9zdGF0dXNcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS10b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWF0cml4LXN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpoZWxwPVwiZm9ybS5zdGF0dXMgPyAnVG9nZ2xlIHRvIGRpc2FibGUgdGhpcyBtYXRyaXguJyA6ICdUb2dnbGUgdG8gZW5hYmxlIHRoaXMgbWF0cml4LidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0cnVlLXZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmFsc2UtdmFsdWU9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktdG9nZ2xlPlxuICAgICAgICAgICAgICAgIDwvc2lkZWJhci1zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHNpZGViYXItc2VjdGlvbiBpZD1cIm1hdHJpeF9wYW5lbF9hcHBlYXJhbmNlXCIgdGl0bGU9XCJBcHBlYXJhbmNlXCIgZGVzY3JpcHRpb249XCJDaG9vc2Ugd2hlcmUgdG8gc2hvdyB0aGlzIG1hdHJpeCBhbmQgaG93IHRvIHJlcHJlc2VudCBpdC5cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS10b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWF0cml4LXNpZGViYXItc2hvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2lkZWJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNob3cgaW4gU2lkZWJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zaWRlYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0cnVlLXZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmFsc2UtdmFsdWU9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktdG9nZ2xlPlxuXG4gICAgICAgICAgICAgICAgICAgIDx1aS10b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWF0cml4LXF1aWNrbGluay1zaG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWlja2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaG93IGFzIFF1aWNrbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5xdWlja2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRydWUtdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmYWxzZS12YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC91aS10b2dnbGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGljb24tcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpY29ucy4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiQ2hvb3NlIGFuIGljb24gdGhhdCBiZXN0IHJlcHJlc2VudHMgeW91ciBtYXRyaXguXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2ljb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnaWNvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvaWNvbi1waWNrZXI+XG4gICAgICAgICAgICAgICAgPC9zaWRlYmFyLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c3RhdHVzLWNhcmQgdi1pZj1cIm1hdHJpeFwiIDplbnRyeT1cIm1hdHJpeFwiIGlkPVwibWF0cml4X3BhbmVsX3N0YXR1c19jYXJkXCIgdGFiaW5kZXg9XCItMVwiPjwvc3RhdHVzLWNhcmQ+XG4gICAgICAgICAgICA8L3NpZGViYXI+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgaWQ9XCJtYXRyaXhfcGFuZWxfZ2VuZXJhbFwiIHRpdGxlPVwiR2VuZXJhbCBJbmZvcm1hdGlvblwiIGRlc2NyaXB0aW9uPVwiR2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB5b3VyIGNvbGxlY3Rpb24gYW5kIHdoYXQgaXQgbWFuYWdlcy5cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCBzaG91bGQgdGhpcyBtYXRyaXggYmUgY2FsbGVkP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsIGxnOnctMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1zbHVnLWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC1oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiQSBkZXZlbG9wZXItZnJpZW5kbHkgaWRlbnRpZmllci5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxpbWl0ZXI9XCJfXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp3YXRjaD1cImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdoYW5kbGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnaGFuZGxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktc2x1Zy1ncm91cD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dWktdGV4dGFyZWEtZ3JvdXBcbiAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiR2l2ZSBhIHNob3J0IGRlc2NyaXB0aW9uIG9mIHdoYXQgdGhpcyBtYXRyaXggd2lsbCBtYW5hZ2UgYW5kIHN0b3JlLlwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdkZXNjcmlwdGlvbicpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDwvdWktdGV4dGFyZWEtZ3JvdXA+XG5cblxuICAgICAgICAgICAgPHVpLXNlbGVjdC1ncm91cFxuICAgICAgICAgICAgICAgIGlkPVwibWF0cml4LXR5cGVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlR5cGVcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHR5cGUgb2YgbWF0cml4IHdpbGwgdGhpcyBiZT9cIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAnY29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdTaW5nbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJ3NpbmdsZScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygndHlwZScpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgndHlwZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS50eXBlXCI+XG4gICAgICAgICAgICA8L3VpLXNlbGVjdC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLXNlbGVjdC1ncm91cFxuICAgICAgICAgICAgICAgIGlkPVwibWF0cml4LXBhcmVudC1pZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhcmVudF9pZFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXJlbnQgTWF0cml4XCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiU2hvdWxkIHRoaXMgbWF0cml4IGJlbG9uZyB0byBhbm90aGVyP1wiXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJwYXJlbnRPcHRpb25zXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdwYXJlbnRfaWQnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3BhcmVudF9pZCcpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5wYXJlbnRfaWRcIj5cbiAgICAgICAgICAgIDwvdWktc2VsZWN0LWdyb3VwPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIGlkPVwibWF0cml4X3BhbmVsX2N1c3RvbWl6YXRpb25zXCIgdGl0bGU9XCJDdXN0b21pemF0aW9uc1wiIGRlc2NyaXB0aW9uPVwiQ29uZmlndXJlIHRoZSB2YXJpb3VzIGN1c3RvbWl6YXRpb25zIG9wdGlvbnMuXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgaWQ9XCJtYXRyaXgtbmFtZS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVfbGFiZWxcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZSBMYWJlbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiSWYgeW91J2QgbGlrZSwgeW91IG1heSBjdXN0b21pemUgdGhlIGxhYmVsIHVzZWQgZm9yIHlvdXIgZW50cnkgbmFtZXMuXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lX2xhYmVsJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lX2xhYmVsJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5hbWVfbGFiZWxcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIGlkPVwibWF0cml4LXJlZmVyZW5jZS1zaW5ndWxhclwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlZmVyZW5jZV9zaW5ndWxhclwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTaW5ndWxhciBSZWZlcmVuY2VcIlxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInNpbmd1bGFyUmVmZXJlbmNlXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCB3b3VsZCB5b3UgbGlrZSB0byByZWZlcmVuY2UgdGhpcyBhcyBpbiBzaW5ndWxhciBmb3JtPyBCeSBkZWZhdWx0IHdpbGwgdHJ5IHRvIGd1ZXNzIGZyb20gdGhlIG5hbWUuIFJlc3VsdHMgbWF5IHZhcnkuXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdyZWZlcmVuY2Vfc2luZ3VsYXInKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3JlZmVyZW5jZV9zaW5ndWxhcicpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5yZWZlcmVuY2Vfc2luZ3VsYXJcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIGlkPVwibWF0cml4LXJlZmVyZW5jZS1wbHVyYWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVuY2VfcGx1cmFsXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBsdXJhbCBSZWZlcmVuY2VcIlxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInBsdXJhbFJlZmVyZW5jZVwiXG4gICAgICAgICAgICAgICAgaGVscD1cIldoYXQgd291bGQgeW91IGxpa2UgdG8gcmVmZXJlbmNlIHRoaXMgYXMgaW4gcGx1cmFsIGZvcm0/IEJ5IGRlZmF1bHQgd2lsbCB0cnkgdG8gZ3Vlc3MgZnJvbSB0aGUgbmFtZS4gUmVzdWx0cyBtYXkgdmFyeS5cIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3JlZmVyZW5jZV9wbHVyYWwnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3JlZmVyZW5jZV9wbHVyYWwnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucmVmZXJlbmNlX3BsdXJhbFwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLXRvZ2dsZVxuICAgICAgICAgICAgICAgIHYtaWY9XCJmb3JtLnR5cGUgPT0gJ2NvbGxlY3Rpb24nXCJcbiAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC1zaG93LW5hbWUtZmllbGRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJzaG93X25hbWVfZmllbGRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU2hvdyBuYW1lIGZpZWxkXCJcbiAgICAgICAgICAgICAgICA6aGVscD1cIiFmb3JtLnNob3dfbmFtZV9maWVsZCA/ICdBdXRvLWdlbmVyYXRlIGEgbmFtZSB1c2luZyB0aGUgZm9ybWF0IGluIHRoZSBmaWVsZCBiZWxvdy4nIDogJ0luY2x1ZGUgYSBuYW1lIGZpZWxkIG9uIHRoaXMgbWF0cml4LidcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnNob3dfbmFtZV9maWVsZFwiXG4gICAgICAgICAgICAgICAgOnRydWUtdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICA6ZmFsc2UtdmFsdWU9XCIwXCI+XG4gICAgICAgICAgICA8L3VpLXRvZ2dsZT5cblxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgdi1pZj1cIiFmb3JtLnNob3dfbmFtZV9maWVsZFwiXG4gICAgICAgICAgICAgICAgbW9ub3NwYWNlZFxuICAgICAgICAgICAgICAgIGlkPVwibWF0cml4LW5hbWUtZm9ybWF0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZV9mb3JtYXRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZSBGb3JtYXRcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IGZvcm1hdCB3b3VsZCB5b3UgbGlrZSB5b3VyIGdlbmVyYXRlZCBuYW1lcyBhbmQgc2x1Z3MgdG8gZm9sbG93P1wiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lX2Zvcm1hdCcpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZV9mb3JtYXQnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZV9mb3JtYXRcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgaWQ9XCJtYXRyaXhfcGFuZWxfcm91dGluZ1wiIHRpdGxlPVwiUm91dGluZ1wiIGRlc2NyaXB0aW9uPVwiQ29uZmlndXJlIGhvdyBlbnRyaWVzIHdpdGhpbiB0aGUgY29sbGVjdGlvbiB3aWxsIGJlIGFjY2Vzc2VkIG9uIHRoZSBmcm9udGVuZC5cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC1yb3V0ZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInJvdXRlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJvdXRlXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiV2hlbiB0aGUgVVJJIG1hdGNoZXMgdGhpcyBwYXR0ZXJuLi4uXCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdyb3V0ZScpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncm91dGUnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucm91dGVcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIGlkPVwibWF0cml4LXRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJSZW5kZXIgdGhpcyB0ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygndGVtcGxhdGUnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3RlbXBsYXRlJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIGlkPVwibWF0cml4X3BhbmVsX2JsdWVwcmludFwiIDpncmlkPVwiZmFsc2VcIiB0aXRsZT1cIkJsdWVwcmludFwiIGRlc2NyaXB0aW9uPVwiQ3JlYXRlIHRoZSBjb250ZW50IGJsdWVwcmludCBmb3IgdGhpcyBtYXRyaXggYnkgYWRkaW5nIHBhbmVsIHNlY3Rpb25zIGFuZCBmaWVsZHMgdG8gZWl0aGVyIHRoZSBwYWdlIGJvZHkgb3IgcGFnZSBzaWRlYmFyLlwiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgIDxibHVlcHJpbnQ+XG4gICAgICAgICAgICAgICAgPGJsdWVwcmludC1hcmVhIHYtbW9kZWw9XCJmb3JtLnNlY3Rpb25zXCIgOnBsYWNlbWVudHM9XCJwbGFjZW1lbnRzXCIgYXJlYT1cImJvZHlcIiB0aXRsZT1cIkJvZHlcIj48L2JsdWVwcmludC1hcmVhPlxuICAgICAgICAgICAgICAgIDxibHVlcHJpbnQtYXJlYSB2LW1vZGVsPVwiZm9ybS5zZWN0aW9uc1wiIGNsYXNzPVwiYmx1ZXByaW50X19jb2wtLXNpZGViYXJcIiA6cGxhY2VtZW50cz1cInBsYWNlbWVudHNcIiBhcmVhPVwic2lkZWJhclwiIHRpdGxlPVwiU2lkZWJhclwiPjwvYmx1ZXByaW50LWFyZWE+XG4gICAgICAgICAgICA8L2JsdWVwcmludD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0JvZHknLCAgICB2YWx1ZTogJ2JvZHknICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdTaWRlYmFyJywgdmFsdWU6ICdzaWRlYmFyJyB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBpZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1hdHJpeDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdWJtaXQ6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1hdHJpY2VzOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBzaW5ndWxhclJlZmVyZW5jZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGx1cmFsaXplLnNpbmd1bGFyKHRoaXMuZm9ybS5uYW1lKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcGx1cmFsUmVmZXJlbmNlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbHVyYWxpemUodGhpcy5mb3JtLm5hbWUpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBwYXJlbnRPcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gXy5tYXAodGhpcy5tYXRyaWNlcywgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGl0ZW0uaWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBvcHRpb25zID0gXy5yZW1vdmUob3B0aW9ucywgKGl0ZW0pID0+IHRoaXMuaWQgPT0gaXRlbS5pZClcblxuICAgICAgICAgICAgICAgIG9wdGlvbnMudW5zaGlmdCh7ICdsYWJlbCc6ICdOb25lJywgJ3ZhbHVlJzogbnVsbCB9KVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJyRwYXJlbnQuZm9ybS50eXBlJyh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZm9ybS5zaG93X25hbWVfZmllbGQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibWF0cml4LXBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJsYXllci1ncm91cFwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiRWRpdCBNYXRyaXhcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5mb3JtXG4gICAgICAgID8gX2MoXCJzaGFyZWQtZm9ybVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogX3ZtLmlkLFxuICAgICAgICAgICAgICBmb3JtOiBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgbWF0cml4OiBfdm0ubWF0cml4LFxuICAgICAgICAgICAgICBzdWJtaXQ6IF92bS5zdWJtaXQsXG4gICAgICAgICAgICAgIG1hdHJpY2VzOiBfdm0ubWF0cmljZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uJG1xICE9IFwic21cIlxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJtYXRyaWNlc1wiIH0sIHZhcmlhbnQ6IFwic2Vjb25kYXJ5XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmZvcm0uaGFzQ2hhbmdlc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInNpZGViYXItcmlnaHRcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic2lkZWJhclwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBpZDogXCJtYXRyaXgtc2lkZWJhclwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzaWRlYmFyLXNlY3Rpb25cIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGlkOiBcIm1hdHJpeF9wYW5lbF9zdGF0dXNcIiwgdGFiaW5kZXg6IFwiLTFcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1aS10b2dnbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm1hdHJpeC1zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IF92bS5mb3JtLnN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlRvZ2dsZSB0byBkaXNhYmxlIHRoaXMgbWF0cml4LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiVG9nZ2xlIHRvIGVuYWJsZSB0aGlzIG1hdHJpeC5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcInRydWUtdmFsdWVcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlLXZhbHVlXCI6IDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInN0YXR1c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzaWRlYmFyLXNlY3Rpb25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJtYXRyaXhfcGFuZWxfYXBwZWFyYW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBcHBlYXJhbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgIFwiQ2hvb3NlIHdoZXJlIHRvIHNob3cgdGhpcyBtYXRyaXggYW5kIGhvdyB0byByZXByZXNlbnQgaXQuXCIsXG4gICAgICAgICAgICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidWktdG9nZ2xlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtYXRyaXgtc2lkZWJhci1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaWRlYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2hvdyBpbiBTaWRlYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlLXZhbHVlXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZS12YWx1ZVwiOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnNpZGViYXIsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic2lkZWJhclwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2lkZWJhclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidWktdG9nZ2xlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtYXRyaXgtcXVpY2tsaW5rLXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInF1aWNrbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNob3cgYXMgUXVpY2tsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlLXZhbHVlXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZS12YWx1ZVwiOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnF1aWNrbGluayxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJxdWlja2xpbmtcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnF1aWNrbGlua1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaWNvbi1waWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm1hdHJpeC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBpY29ucy4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiQ2hvb3NlIGFuIGljb24gdGhhdCBiZXN0IHJlcHJlc2VudHMgeW91ciBtYXRyaXguXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImljb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJpY29uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmljb24sXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiaWNvblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaWNvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5tYXRyaXhcbiAgICAgICAgICAgICAgICA/IF9jKFwic3RhdHVzLWNhcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVudHJ5OiBfdm0ubWF0cml4LFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm1hdHJpeF9wYW5lbF9zdGF0dXNfY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogXCJtYXRyaXhfcGFuZWxfZ2VuZXJhbFwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiR2VuZXJhbCBJbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiR2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB5b3VyIGNvbGxlY3Rpb24gYW5kIHdoYXQgaXQgbWFuYWdlcy5cIixcbiAgICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgbGc6dy0xLzJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJtYXRyaXgtbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWxwOiBcIldoYXQgc2hvdWxkIHRoaXMgbWF0cml4IGJlIGNhbGxlZD9cIixcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCBsZzp3LTEvMlwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVpLXNsdWctZ3JvdXBcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWF0cml4LWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJIYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgaGVscDogXCJBIGRldmVsb3Blci1mcmllbmRseSBpZGVudGlmaWVyLlwiLFxuICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZWxpbWl0ZXI6IFwiX1wiLFxuICAgICAgICAgICAgICAgICAgICB3YXRjaDogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImhhbmRsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJoYW5kbGVcIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiaGFuZGxlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1aS10ZXh0YXJlYS1ncm91cFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJtYXRyaXgtZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgIFwiR2l2ZSBhIHNob3J0IGRlc2NyaXB0aW9uIG9mIHdoYXQgdGhpcyBtYXRyaXggd2lsbCBtYW5hZ2UgYW5kIHN0b3JlLlwiLFxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJkZXNjcmlwdGlvblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRlc2NyaXB0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWktc2VsZWN0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcIm1hdHJpeC10eXBlXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwidHlwZVwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJUeXBlXCIsXG4gICAgICAgICAgICAgIGhlbHA6IFwiV2hhdCB0eXBlIG9mIG1hdHJpeCB3aWxsIHRoaXMgYmU/XCIsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJDb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogXCJjb2xsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNpbmdsZVwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IFwic2luZ2xlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJ0eXBlXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInR5cGVcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udHlwZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInR5cGVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udHlwZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVpLXNlbGVjdC1ncm91cFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJtYXRyaXgtcGFyZW50LWlkXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwicGFyZW50X2lkXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlBhcmVudCBNYXRyaXhcIixcbiAgICAgICAgICAgICAgaGVscDogXCJTaG91bGQgdGhpcyBtYXRyaXggYmVsb25nIHRvIGFub3RoZXI/XCIsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5wYXJlbnRPcHRpb25zLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicGFyZW50X2lkXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInBhcmVudF9pZFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXJlbnRfaWQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwYXJlbnRfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFyZW50X2lkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcIm1hdHJpeF9wYW5lbF9jdXN0b21pemF0aW9uc1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiQ3VzdG9taXphdGlvbnNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbmZpZ3VyZSB0aGUgdmFyaW91cyBjdXN0b21pemF0aW9ucyBvcHRpb25zLlwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwibWF0cml4LW5hbWUtbGFiZWxcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJuYW1lX2xhYmVsXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWUgTGFiZWxcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTmFtZVwiLFxuICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgIFwiSWYgeW91J2QgbGlrZSwgeW91IG1heSBjdXN0b21pemUgdGhlIGxhYmVsIHVzZWQgZm9yIHlvdXIgZW50cnkgbmFtZXMuXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lX2xhYmVsXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm5hbWVfbGFiZWxcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZV9sYWJlbCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVfbGFiZWxcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZV9sYWJlbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcIm1hdHJpeC1yZWZlcmVuY2Utc2luZ3VsYXJcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJyZWZlcmVuY2Vfc2luZ3VsYXJcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU2luZ3VsYXIgUmVmZXJlbmNlXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0uc2luZ3VsYXJSZWZlcmVuY2UsXG4gICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgXCJXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIHJlZmVyZW5jZSB0aGlzIGFzIGluIHNpbmd1bGFyIGZvcm0/IEJ5IGRlZmF1bHQgd2lsbCB0cnkgdG8gZ3Vlc3MgZnJvbSB0aGUgbmFtZS4gUmVzdWx0cyBtYXkgdmFyeS5cIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInJlZmVyZW5jZV9zaW5ndWxhclwiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJyZWZlcmVuY2Vfc2luZ3VsYXJcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucmVmZXJlbmNlX3Npbmd1bGFyLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicmVmZXJlbmNlX3Npbmd1bGFyXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJlZmVyZW5jZV9zaW5ndWxhclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcIm1hdHJpeC1yZWZlcmVuY2UtcGx1cmFsXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwicmVmZXJlbmNlX3BsdXJhbFwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJQbHVyYWwgUmVmZXJlbmNlXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0ucGx1cmFsUmVmZXJlbmNlLFxuICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgIFwiV2hhdCB3b3VsZCB5b3UgbGlrZSB0byByZWZlcmVuY2UgdGhpcyBhcyBpbiBwbHVyYWwgZm9ybT8gQnkgZGVmYXVsdCB3aWxsIHRyeSB0byBndWVzcyBmcm9tIHRoZSBuYW1lLiBSZXN1bHRzIG1heSB2YXJ5LlwiLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicmVmZXJlbmNlX3BsdXJhbFwiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJyZWZlcmVuY2VfcGx1cmFsXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJlZmVyZW5jZV9wbHVyYWwsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyZWZlcmVuY2VfcGx1cmFsXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJlZmVyZW5jZV9wbHVyYWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmZvcm0udHlwZSA9PSBcImNvbGxlY3Rpb25cIlxuICAgICAgICAgICAgPyBfYyhcInVpLXRvZ2dsZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm1hdHJpeC1zaG93LW5hbWUtZmllbGRcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd19uYW1lX2ZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJTaG93IG5hbWUgZmllbGRcIixcbiAgICAgICAgICAgICAgICAgIGhlbHA6ICFfdm0uZm9ybS5zaG93X25hbWVfZmllbGRcbiAgICAgICAgICAgICAgICAgICAgPyBcIkF1dG8tZ2VuZXJhdGUgYSBuYW1lIHVzaW5nIHRoZSBmb3JtYXQgaW4gdGhlIGZpZWxkIGJlbG93LlwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJJbmNsdWRlIGEgbmFtZSBmaWVsZCBvbiB0aGlzIG1hdHJpeC5cIixcbiAgICAgICAgICAgICAgICAgIFwidHJ1ZS12YWx1ZVwiOiAxLFxuICAgICAgICAgICAgICAgICAgXCJmYWxzZS12YWx1ZVwiOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnNob3dfbmFtZV9maWVsZCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic2hvd19uYW1lX2ZpZWxkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2hvd19uYW1lX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5mb3JtLnNob3dfbmFtZV9maWVsZFxuICAgICAgICAgICAgPyBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm1hdHJpeC1uYW1lLWZvcm1hdFwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lX2Zvcm1hdFwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZSBGb3JtYXRcIixcbiAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgIFwiV2hhdCBmb3JtYXQgd291bGQgeW91IGxpa2UgeW91ciBnZW5lcmF0ZWQgbmFtZXMgYW5kIHNsdWdzIHRvIGZvbGxvdz9cIixcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVfZm9ybWF0XCIpLFxuICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lX2Zvcm1hdFwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lX2Zvcm1hdCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZV9mb3JtYXRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lX2Zvcm1hdFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcIm1hdHJpeF9wYW5lbF9yb3V0aW5nXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJSb3V0aW5nXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgXCJDb25maWd1cmUgaG93IGVudHJpZXMgd2l0aGluIHRoZSBjb2xsZWN0aW9uIHdpbGwgYmUgYWNjZXNzZWQgb24gdGhlIGZyb250ZW5kLlwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwibWF0cml4LXJvdXRlXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwicm91dGVcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiUm91dGVcIixcbiAgICAgICAgICAgICAgaGVscDogXCJXaGVuIHRoZSBVUkkgbWF0Y2hlcyB0aGlzIHBhdHRlcm4uLi5cIixcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICBtb25vc3BhY2VkOiBcIlwiLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicm91dGVcIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwicm91dGVcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucm91dGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyb3V0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yb3V0ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcIm1hdHJpeC10ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICBuYW1lOiBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgIGhlbHA6IFwiUmVuZGVyIHRoaXMgdGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICBtb25vc3BhY2VkOiBcIlwiLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwidGVtcGxhdGVcIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwidGVtcGxhdGVcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udGVtcGxhdGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ0ZW1wbGF0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50ZW1wbGF0ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogXCJtYXRyaXhfcGFuZWxfYmx1ZXByaW50XCIsXG4gICAgICAgICAgICBncmlkOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkJsdWVwcmludFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiQ3JlYXRlIHRoZSBjb250ZW50IGJsdWVwcmludCBmb3IgdGhpcyBtYXRyaXggYnkgYWRkaW5nIHBhbmVsIHNlY3Rpb25zIGFuZCBmaWVsZHMgdG8gZWl0aGVyIHRoZSBwYWdlIGJvZHkgb3IgcGFnZSBzaWRlYmFyLlwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJibHVlcHJpbnRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJibHVlcHJpbnQtYXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudHM6IF92bS5wbGFjZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgYXJlYTogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJCb2R5XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2VjdGlvbnMsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNlY3Rpb25zXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2VjdGlvbnNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYmx1ZXByaW50LWFyZWFcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJsdWVwcmludF9fY29sLS1zaWRlYmFyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudHM6IF92bS5wbGFjZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgYXJlYTogXCJzaWRlYmFyXCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJTaWRlYmFyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2VjdGlvbnMsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNlY3Rpb25zXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2VjdGlvbnNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgxOGMxZjkyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb24vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODE4YzFmOTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODE4YzFmOTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODE4YzFmOTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgxOGMxZjkyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzgxOGMxZjkyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvRmllbGRzZXRzL0VkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MThjMWY5MiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njg5MGY5YjYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2ODkwZjliNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ODkwZjliNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ODkwZjliNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njg5MGY5YjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjg5MGY5YjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9GaWVsZHNldHMvU2hhcmVkRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4OTBmOWI2JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==