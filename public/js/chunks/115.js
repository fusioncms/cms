(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/List/Field.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/List/Field.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default, getModels */
>>>>>>> nightly
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_fieldtype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/fieldtype */ "./resources/js/mixins/fieldtype.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return getModels; });
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/pages/Matrices/SharedForm.vue");
/* harmony import */ var _services_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Form */ "./resources/js/services/Form.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
>>>>>>> nightly
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'list-fieldtype',
  components: {
    'x-icon': vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__["XIcon"],
    'menu-icon': vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__["MenuIcon"],
    'list-icon': vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__["ListIcon"],
    'plus-icon': vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__["PlusIcon"]
  },
  data: function data() {
    return {
      newItem: '',
      items: []
    };
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  computed: {
    normalizedItems: function normalizedItems() {
      return _.map(this.items, 'value');
    }
  },
  methods: {
    add: function add() {
      if (this.newItem) {
        this.items.push(this["new"](this.newItem));
      }

      this.$emit('input', this.normalizedItems);
      this.newItem = '';
    },
    destroy: function destroy(index) {
      this.items.splice(index, 1);
      this.$emit('input', this.normalizedItems);
    },
    "new": function _new(item) {
      return {
        _id: uniqid__WEBPACK_IMPORTED_MODULE_0___default()(),
        value: item
      };
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.value) {
      this.$emit('input', []);
    }

    _.each(this.value, function (item) {
      _this.items.push(_this["new"](item));
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/List/Field.vue?vue&type=template&id=57af2284&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/List/Field.vue?vue&type=template&id=57af2284& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

=======




/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

>>>>>>> nightly
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
<<<<<<< HEAD
  return _c("div", [
    _c("div", { staticClass: "field" }, [
      _vm.field.name
        ? _c("label", {
            staticClass: "field__label",
            attrs: { for: _vm.field.handle },
            domProps: { innerHTML: _vm._s(_vm.field.name) }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "field__control" },
        [
          _vm.items.length
            ? _c("ui-sortable-list", {
                on: {
                  input: function($event) {
                    return _vm.$emit("input", _vm.normalizedItems)
                  }
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var items = ref.items
                        return _c(
                          "div",
                          {
                            staticClass:
                              "bg-white border border-gray-300 rounded"
                          },
                          _vm._l(items, function(item, index) {
                            return _c("ui-sortable-item", { key: item._id }, [
                              _c("div", { staticClass: "flex" }, [
                                _c(
                                  "div",
                                  { staticClass: "flex flex-1 items-center" },
                                  [
                                    _c(
                                      "ui-sortable-handle",
                                      {
                                        staticClass:
                                          "cursor-move inline-block ml-2 text-gray-500"
                                      },
                                      [
                                        _c("menu-icon", {
                                          attrs: { size: ".975x" }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: items[index].value,
                                          expression: "items[index].value"
                                        }
                                      ],
                                      staticClass: "w-full px-3 py-2",
                                      domProps: { value: items[index].value },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            items[index],
                                            "value",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "p-2 text-gray-500 hover:text-danger-500 focus:outline-none",
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.destroy(index)
                                          }
                                        }
                                      },
                                      [
                                        _c("x-icon", {
                                          attrs: { size: ".975x" }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            ])
                          }),
                          1
                        )
                      }
                    }
                  ],
                  null,
                  false,
                  2895047952
                ),
                model: {
                  value: _vm.items,
                  callback: function($$v) {
                    _vm.items = $$v
                  },
                  expression: "items"
                }
              })
            : _c("div", { staticClass: "text-sm" }, [
                _vm._v("\n                Your list is empty.\n            ")
              ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "-mt-3" }, [
      _c("div", { staticClass: "flex rounded" }, [
        _c("div", { staticClass: "relative flex-grow focus-within:z-10" }, [
          _c(
            "div",
            {
              staticClass:
                "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            },
            [
              _c("list-icon", {
                staticClass: "text-gray-400",
                attrs: { size: ".975x" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newItem,
                expression: "newItem"
              }
            ],
            staticClass:
              "field__input block w-full rounded-none rounded-l pl-10 transition ease-in-out duration-150",
            attrs: { type: "text", placeholder: "Add an item..." },
            domProps: { value: _vm.newItem },
            on: {
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                $event.preventDefault()
                return _vm.add($event)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.newItem = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "rounded-r -ml-px inline-flex items-center text-gray-500 text-sm border border-gray-300 px-3 py-2 hover:border-gray-400 hover:bg-gray-100 focus:outline-none focus:shadow-focus",
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.add($event)
              }
            }
          },
          [_c("plus-icon", { attrs: { size: ".975x" } })],
          1
        )
      ])
    ])
  ])
=======
  return _c(
    "div",
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
>>>>>>> nightly
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/Fieldtypes/List/Field.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Fieldtypes/List/Field.vue ***!
  \***********************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/pages/Matrices/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Matrices/Edit.vue ***!
  \**********************************************/
/*! exports provided: getModels, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=45214386& */ "./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getModels"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Matrices/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default, getModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getModels"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=45214386& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Matrices/SharedForm.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/Matrices/SharedForm.vue ***!
  \****************************************************/
>>>>>>> nightly
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Field_vue_vue_type_template_id_57af2284___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=57af2284& */ "./resources/js/components/Fieldtypes/List/Field.vue?vue&type=template&id=57af2284&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/List/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_57af2284___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_57af2284___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)
=======
/* harmony import */ var _SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=c50b5476& */ "./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Matrices/SharedForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=template&id=c50b5476& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

>>>>>>> nightly

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/List/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/List/Field.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/List/Field.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/List/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/List/Field.vue?vue&type=template&id=57af2284&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/List/Field.vue?vue&type=template&id=57af2284& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_57af2284___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=57af2284& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/List/Field.vue?vue&type=template&id=57af2284&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_57af2284___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_57af2284___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/fieldtype.js":
/*!******************************************!*\
  !*** ./resources/js/mixins/fieldtype.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    settings: {
      get: function get() {
        return this.value.settings || {};
      },
      set: function set(value) {
        this.$set(this.value.settings, value);
      }
    },
    errors: function errors() {
      return this.value.errors || {};
    }
  }
});

/***/ })

}]);
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9MaXN0L0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0xpc3QvRmllbGQudnVlPzliN2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9MaXN0L0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0xpc3QvRmllbGQudnVlPzVjNjUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9MaXN0L0ZpZWxkLnZ1ZT8yOTNhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9taXhpbnMvZmllbGR0eXBlLmpzIl0sIm5hbWVzIjpbInByb3BzIiwidmFsdWUiLCJ0eXBlIiwiT2JqZWN0IiwicmVxdWlyZWQiLCJjb21wdXRlZCIsInNldHRpbmdzIiwiZ2V0Iiwic2V0IiwiJHNldCIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHdCQURBO0FBR0E7QUFDQSxxRUFEQTtBQUVBLDJFQUZBO0FBR0EsMkVBSEE7QUFJQTtBQUpBLEdBSEE7QUFVQSxNQVZBLGtCQVVBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBO0FBRkE7QUFJQSxHQWZBO0FBaUJBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQU1BO0FBQ0EscUJBREE7QUFFQSxpQkFGQTtBQUdBO0FBQ0E7QUFDQTtBQUxBO0FBTkEsR0FqQkE7QUFnQ0E7QUFDQSxtQkFEQSw2QkFDQTtBQUNBO0FBQ0E7QUFIQSxHQWhDQTtBQXNDQTtBQUNBLE9BREEsaUJB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QUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZTtBQUNYQSxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFFO0FBQ0hDLFVBQUksRUFBRUMsTUFESDtBQUVIQyxjQUFRLEVBQUU7QUFGUDtBQURKLEdBREk7QUFRWEMsVUFBUSxFQUFFO0FBQ05DLFlBQVEsRUFBRTtBQUNOQyxTQURNLGlCQUNBO0FBQ0YsZUFBTyxLQUFLTixLQUFMLENBQVdLLFFBQVgsSUFBdUIsRUFBOUI7QUFDSCxPQUhLO0FBSU5FLFNBSk0sZUFJRlAsS0FKRSxFQUlLO0FBQ1AsYUFBS1EsSUFBTCxDQUFVLEtBQUtSLEtBQUwsQ0FBV0ssUUFBckIsRUFBK0JMLEtBQS9CO0FBQ0g7QUFOSyxLQURKO0FBVU5TLFVBVk0sb0JBVUc7QUFDTCxhQUFPLEtBQUtULEtBQUwsQ0FBV1MsTUFBWCxJQUFxQixFQUE1QjtBQUNIO0FBWks7QUFSQyxDQUFmLEUiLCJmaWxlIjoianMvY2h1bmtzLzExNS5qcz9pZD01MTlhMzFiNDcxMDY2MWQ3MGU1YyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGRfX2xhYmVsXCJcbiAgICAgICAgICAgICAgICA6Zm9yPVwiZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgdi1odG1sPVwiZmllbGQubmFtZVwiPlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkX19jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPHVpLXNvcnRhYmxlLWxpc3RcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIml0ZW1zLmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dCcsIG5vcm1hbGl6ZWRJdGVtcylcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzbG90LXNjb3BlPVwieyBpdGVtczogaXRlbXMgfVwiIGNsYXNzPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWktc29ydGFibGUtaXRlbSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gaXRlbXNcIiA6a2V5PVwiaXRlbS5faWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWktc29ydGFibGUtaGFuZGxlIGNsYXNzPVwiY3Vyc29yLW1vdmUgaW5saW5lLWJsb2NrIG1sLTIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtZW51LWljb24gc2l6ZT1cIi45NzV4XCI+PC9tZW51LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VpLXNvcnRhYmxlLWhhbmRsZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgcHgtMyBweS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbXNbaW5kZXhdLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInAtMiB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZGFuZ2VyLTUwMCBmb2N1czpvdXRsaW5lLW5vbmVcIiBAY2xpY2sucHJldmVudD1cImRlc3Ryb3koaW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHgtaWNvbiBzaXplPVwiLjk3NXhcIj48L3gtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWktc29ydGFibGUtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC91aS1zb3J0YWJsZS1saXN0PlxuXG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIFlvdXIgbGlzdCBpcyBlbXB0eS5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiLW10LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgZmxleC1ncm93IGZvY3VzLXdpdGhpbjp6LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIHBsLTMgZmxleCBpdGVtcy1jZW50ZXIgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpc3QtaWNvbiBzaXplPVwiLjk3NXhcIiBjbGFzcz1cInRleHQtZ3JheS00MDBcIj48L2xpc3QtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgQGtleXVwLmVudGVyLnByZXZlbnQ9XCJhZGRcIiB2LW1vZGVsPVwibmV3SXRlbVwiIGNsYXNzPVwiZmllbGRfX2lucHV0IGJsb2NrIHctZnVsbCByb3VuZGVkLW5vbmUgcm91bmRlZC1sIHBsLTEwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMTUwXCIgcGxhY2Vob2xkZXI9XCJBZGQgYW4gaXRlbS4uLlwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImFkZFwiIGNsYXNzPVwicm91bmRlZC1yIC1tbC1weCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTUwMCB0ZXh0LXNtIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcHgtMyBweS0yIGhvdmVyOmJvcmRlci1ncmF5LTQwMCBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LWZvY3VzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwbHVzLWljb24gc2l6ZT1cIi45NzV4XCI+PC9wbHVzLWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSA8aW5wdXQgdHlwZT1cInRleHRcIiAgcGxhY2Vob2xkZXI9XCJBZGQgYW4gaXRlbS4uLlwiIGNsYXNzPVwiZmllbGRfX2lucHV0IC1tdC0zXCI+IC0tPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdW5pcWlkIGZyb20gJ3VuaXFpZCdcbiAgICBpbXBvcnQgZmllbGR0eXBlIGZyb20gJ0AvbWl4aW5zL2ZpZWxkdHlwZSdcbiAgICBpbXBvcnQge1hJY29uLCBNZW51SWNvbiwgTGlzdEljb24sIFBsdXNJY29ufSBmcm9tICd2dWUtZmVhdGhlci1pY29ucydcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2xpc3QtZmllbGR0eXBlJyxcblxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAneC1pY29uJzogWEljb24sXG4gICAgICAgICAgICAnbWVudS1pY29uJzogTWVudUljb24sXG4gICAgICAgICAgICAnbGlzdC1pY29uJzogTGlzdEljb24sXG4gICAgICAgICAgICAncGx1cy1pY29uJzogUGx1c0ljb24sXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmV3SXRlbTogJycsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgbm9ybWFsaXplZEl0ZW1zKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLm1hcCh0aGlzLml0ZW1zLCAndmFsdWUnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBhZGQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmV3SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godGhpcy5uZXcodGhpcy5uZXdJdGVtKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMubm9ybWFsaXplZEl0ZW1zKVxuICAgICAgICAgICAgICAgIHRoaXMubmV3SXRlbSA9ICcnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBkZXN0cm95KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLm5vcm1hbGl6ZWRJdGVtcylcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG5ldyhpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgX2lkOiB1bmlxaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBbXSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5lYWNoKHRoaXMudmFsdWUsIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHRoaXMubmV3KGl0ZW0pKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9LCBbXG4gICAgICBfdm0uZmllbGQubmFtZVxuICAgICAgICA/IF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmllbGRfX2xhYmVsXCIsXG4gICAgICAgICAgICBhdHRyczogeyBmb3I6IF92bS5maWVsZC5oYW5kbGUgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5maWVsZC5uYW1lKSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWVsZF9fY29udHJvbFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uaXRlbXMubGVuZ3RoXG4gICAgICAgICAgICA/IF9jKFwidWktc29ydGFibGUtbGlzdFwiLCB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0XCIsIF92bS5ub3JtYWxpemVkSXRlbXMpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSByZWYuaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidWktc29ydGFibGUtaXRlbVwiLCB7IGtleTogaXRlbS5faWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1zb3J0YWJsZS1oYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJzb3ItbW92ZSBpbmxpbmUtYmxvY2sgbWwtMiB0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWVudS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwiLjk3NXhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW1zW2luZGV4XS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbXNbaW5kZXhdLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctZnVsbCBweC0zIHB5LTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGl0ZW1zW2luZGV4XS52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC0yIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1kYW5nZXItNTAwIGZvY3VzOm91dGxpbmUtbm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVzdHJveShpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIngtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcIi45NzV4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIDI4OTUwNDc5NTJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbXMgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW1zXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgWW91ciBsaXN0IGlzIGVtcHR5LlxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIi1tdC0zXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IHJvdW5kZWRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmVsYXRpdmUgZmxleC1ncm93IGZvY3VzLXdpdGhpbjp6LTEwXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIHBsLTMgZmxleCBpdGVtcy1jZW50ZXIgcG9pbnRlci1ldmVudHMtbm9uZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImxpc3QtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmF5LTQwMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwiLjk3NXhcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld0l0ZW0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdJdGVtXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcImZpZWxkX19pbnB1dCBibG9jayB3LWZ1bGwgcm91bmRlZC1ub25lIHJvdW5kZWQtbCBwbC0xMCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTE1MFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkFkZCBhbiBpdGVtLi4uXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3SXRlbSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIilcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGQoJGV2ZW50KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLm5ld0l0ZW0gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJyb3VuZGVkLXIgLW1sLXB4IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNTAwIHRleHQtc20gYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBweC0zIHB5LTIgaG92ZXI6Ym9yZGVyLWdyYXktNDAwIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctZm9jdXNcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkKCRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW19jKFwicGx1cy1pY29uXCIsIHsgYXR0cnM6IHsgc2l6ZTogXCIuOTc1eFwiIH0gfSldLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3YWYyMjg0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1N2FmMjI4NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1N2FmMjI4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1N2FmMjI4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3YWYyMjg0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU3YWYyMjg0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0xpc3QvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01N2FmMjI4NCZcIiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5zZXR0aW5ncyB8fCB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnZhbHVlLnNldHRpbmdzLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5lcnJvcnMgfHwge31cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL01hdHJpY2VzL0VkaXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvU2hhcmVkRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hdHJpY2VzL0VkaXQudnVlP2I3MGIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hdHJpY2VzL1NoYXJlZEZvcm0udnVlP2E0ZjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hdHJpY2VzL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXRyaWNlcy9FZGl0LnZ1ZT9mMjY1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXRyaWNlcy9FZGl0LnZ1ZT9mMWZjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXRyaWNlcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvU2hhcmVkRm9ybS52dWU/OWRlZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvU2hhcmVkRm9ybS52dWU/M2JiMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsa0JBRkE7QUFHQSxnQkFIQTtBQUlBO0FBSkE7QUFNQSxHQWhCQTtBQWtCQTtBQUNBO0FBREEsR0FsQkE7QUFzQkE7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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S0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQTtBQUFBO0FBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQzNCO0FBQ0w7OztBQUd6RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUscUZBQU07QUFDUixFQUFFLDhGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFnTSxDQUFnQixzUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzExNS5qcz9pZD1jY2RkYzAwZGQ2YWQwYTI4MTljZCIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxwYWdlLXRpdGxlIGljb249XCJsYXllci1ncm91cFwiPkVkaXQgTWF0cml4PC9wYWdlLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8c2hhcmVkLWZvcm1cbiAgICAgICAgICAgIHYtaWY9XCJmb3JtXCJcbiAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgIDpmb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICA6bWF0cml4PVwibWF0cml4XCJcbiAgICAgICAgICAgIDpzdWJtaXQ9XCJzdWJtaXRcIlxuICAgICAgICAgICAgOm1hdHJpY2VzPVwibWF0cmljZXNcIj5cbiAgICAgICAgPC9zaGFyZWQtZm9ybT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFNoYXJlZEZvcm0gZnJvbSAnLi9TaGFyZWRGb3JtJ1xuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL3NlcnZpY2VzL0Zvcm0nXG4gICAgaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnXG4gICAgaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogXy5oYXModGhpcy5mb3JtLCAnbmFtZScpID8gdGhpcy5mb3JtLm5hbWUgOiAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF0cmljZXM6IFtdLFxuICAgICAgICAgICAgICAgIG1hdHJpeDoge30sXG4gICAgICAgICAgICAgICAgZm9ybTogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdzaGFyZWQtZm9ybSc6IFNoYXJlZEZvcm1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5yZWZlcmVuY2Vfc2luZ3VsYXIgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlZmVyZW5jZV9zaW5ndWxhciA9IHBsdXJhbGl6ZS5zaW5ndWxhcih0aGlzLmZvcm0ubmFtZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLnJlZmVyZW5jZV9wbHVyYWwgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlZmVyZW5jZV9wbHVyYWwgPSBwbHVyYWxpemUodGhpcy5mb3JtLm5hbWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhdGNoKGAvYXBpL21hdHJpY2VzLyR7dGhpcy5pZH1gKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGAvYXBpL2JsdWVwcmludHMvJHtyZXNwb25zZS5kYXRhLmJsdWVwcmludC5pZH0vc2VjdGlvbnNgLCB7IHNlY3Rpb25zOiB0aGlzLmZvcm0uc2VjdGlvbnMgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCduYXZpZ2F0aW9uL2ZldGNoQWRtaW5OYXZpZ2F0aW9uJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KCdNYXRyaXggc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQnLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL21hdHJpY2VzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBnZXRNb2RlbHModG8ucGFyYW1zLm1hdHJpeCwgKGVycm9yLCBtYXRyaXgsIG1hdHJpY2VzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci50b1N0cmluZygpLCAnZGFuZ2VyJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvbWF0cmljZXMnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5pZCAgICAgICAgPSBtYXRyaXguZGF0YS5kYXRhLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5tYXRyaXggICAgPSBtYXRyaXguZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5tYXRyaWNlcyAgPSBtYXRyaWNlcy5kYXRhLmRhdGFcblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZm9ybSA9IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRfaWQ6ICAgICAgICAgIHZtLm1hdHJpeC5wYXJlbnRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogICAgICAgICAgICAgICB2bS5tYXRyaXgubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGU6ICAgICAgICAgICAgIHZtLm1hdHJpeC5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICAgICAgICB2bS5tYXRyaXguZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogICAgICAgICAgICAgICB2bS5tYXRyaXgudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2Vfc2luZ3VsYXI6IHZtLm1hdHJpeC5yZWZlcmVuY2Vfc2luZ3VsYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlX3BsdXJhbDogICB2bS5tYXRyaXgucmVmZXJlbmNlX3BsdXJhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uczogICAgICAgICAgIHZtLm1hdHJpeC5ibHVlcHJpbnQuc2VjdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogICAgICAgICAgICB2bS5tYXRyaXguc2lkZWJhciA/ICcxJyA6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWlja2xpbms6ICAgICAgICAgIHZtLm1hdHJpeC5xdWlja2xpbmsgPyAnMScgOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogICAgICAgICAgICAgICB2bS5tYXRyaXguaWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93X25hbWVfZmllbGQ6ICAgIHZtLm1hdHJpeC5zaG93X25hbWVfZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZV9sYWJlbDogICAgICAgICB2bS5tYXRyaXgubmFtZV9sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lX2Zvcm1hdDogICAgICAgIHZtLm1hdHJpeC5uYW1lX2Zvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZTogICAgICAgICAgICAgIHZtLm1hdHJpeC5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogICAgICAgICAgIHZtLm1hdHJpeC50ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpc2lvbl9jb250cm9sOiAgIHZtLm1hdHJpeC5yZXZpc2lvbl9jb250cm9sID8gJzEnIDogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpemFibGU6ICAgICAgdm0ubWF0cml4LmNhdGVnb3JpemFibGUgPyAnMScgOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGl0YWJsZTogICAgICAgICB2bS5tYXRyaXguY3JlZGl0YWJsZSA/ICcxJyA6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaXNoYWJsZTogICAgICAgIHZtLm1hdHJpeC5wdWJsaXNoYWJsZSA/ICcxJyA6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW9hYmxlOiAgICAgICAgICAgIHZtLm1hdHJpeC5zZW9hYmxlID8gJzEnIDogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogICAgICAgICAgICAgdm0ubWF0cml4LnN0YXR1cyA/ICcxJyA6ICcwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TW9kZWxzKG1heHRyaXgsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvbWF0cmljZXMvJHttYXh0cml4fWApLFxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL21hdHJpY2VzJylcbiAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoKG1hdHJpeCwgbWF0cmljZXMpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG1hdHJpeCwgbWF0cmljZXMpXG4gICAgICAgIH0pKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignVGhlIHJlcXVlc3RlZCBtYXh0cml4IGNvdWxkIG5vdCBiZSBmb3VuZCcpKVxuICAgICAgICB9KVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8Zm9ybS1jb250YWluZXI+XG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24gOnRvPVwieyBuYW1lOiAnbWF0cmljZXMnIH1cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+R28gQmFjazwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24gdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIiA6ZGlzYWJsZWQ9XCIhZm9ybS5oYXNDaGFuZ2VzXCI+U2F2ZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJHZW5lcmFsIEluZm9ybWF0aW9uXCIgZGVzY3JpcHRpb249XCJHZW5lcmFsIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgY29sbGVjdGlvbiBhbmQgd2hhdCBpdCBtYW5hZ2VzLlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsIGxnOnctMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHNob3VsZCB0aGlzIG1hdHJpeCBiZSBjYWxsZWQ/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLXNsdWctZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkEgZGV2ZWxvcGVyLWZyaWVuZGx5IGlkZW50aWZpZXIuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyPVwiX1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6d2F0Y2g9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnaGFuZGxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2hhbmRsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLXNsdWctZ3JvdXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHVpLXRleHRhcmVhLWdyb3VwXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiR2l2ZSBhIHNob3J0IGRlc2NyaXB0aW9uIG9mIHdoYXQgdGhpcyBtYXRyaXggd2lsbCBtYW5hZ2UgYW5kIHN0b3JlLlwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdkZXNjcmlwdGlvbicpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDwvdWktdGV4dGFyZWEtZ3JvdXA+XG5cblxuICAgICAgICAgICAgPHVpLXNlbGVjdC1ncm91cFxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlR5cGVcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHR5cGUgb2YgbWF0cml4IHdpbGwgdGhpcyBiZT9cIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAnY29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdTaW5nbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJ3NpbmdsZScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygndHlwZScpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgndHlwZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS50eXBlXCI+XG4gICAgICAgICAgICA8L3VpLXNlbGVjdC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLXNlbGVjdC1ncm91cFxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXJlbnRfaWRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFyZW50IE1hdHJpeFwiXG4gICAgICAgICAgICAgICAgaGVscD1cIlNob3VsZCB0aGlzIG1hdHJpeCBiZWxvbmcgdG8gYW5vdGhlcj9cIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwicGFyZW50T3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygncGFyZW50X2lkJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdwYXJlbnRfaWQnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucGFyZW50X2lkXCI+XG4gICAgICAgICAgICA8L3VpLXNlbGVjdC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLXRvZ2dsZVxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiU2V0IHRoaXMgbWF0cml4IHRvIGVuYWJsZWQgb3IgZGlzYWJsZWQuXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgIDp0cnVlLXZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgPC91aS10b2dnbGU+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJDdXN0b21pemF0aW9uc1wiIGRlc2NyaXB0aW9uPVwiQ29uZmlndXJlIHRoZSB2YXJpb3VzIGN1c3RvbWl6YXRpb25zIG9wdGlvbnMuXCI+XG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZV9sYWJlbFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lIExhYmVsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJJZiB5b3UnZCBsaWtlLCB5b3UgbWF5IGN1c3RvbWl6ZSB0aGUgbGFiZWwgdXNlZCBmb3IgeW91ciBlbnRyeSBuYW1lcy5cIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ25hbWVfbGFiZWwnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWVfbGFiZWwnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZV9sYWJlbFwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlZmVyZW5jZV9zaW5ndWxhclwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTaW5ndWxhciBSZWZlcmVuY2VcIlxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInNpbmd1bGFyUmVmZXJlbmNlXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCB3b3VsZCB5b3UgbGlrZSB0byByZWZlcmVuY2UgdGhpcyBhcyBpbiBzaW5ndWxhciBmb3JtPyBCeSBkZWZhdWx0IHdpbGwgdHJ5IHRvIGd1ZXNzIGZyb20gdGhlIG5hbWUuIFJlc3VsdHMgbWF5IHZhcnkuXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdyZWZlcmVuY2Vfc2luZ3VsYXInKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3JlZmVyZW5jZV9zaW5ndWxhcicpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5yZWZlcmVuY2Vfc2luZ3VsYXJcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVuY2VfcGx1cmFsXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBsdXJhbCBSZWZlcmVuY2VcIlxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInBsdXJhbFJlZmVyZW5jZVwiXG4gICAgICAgICAgICAgICAgaGVscD1cIldoYXQgd291bGQgeW91IGxpa2UgdG8gcmVmZXJlbmNlIHRoaXMgYXMgaW4gcGx1cmFsIGZvcm0/IEJ5IGRlZmF1bHQgd2lsbCB0cnkgdG8gZ3Vlc3MgZnJvbSB0aGUgbmFtZS4gUmVzdWx0cyBtYXkgdmFyeS5cIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3JlZmVyZW5jZV9wbHVyYWwnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3JlZmVyZW5jZV9wbHVyYWwnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucmVmZXJlbmNlX3BsdXJhbFwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cblxuICAgICAgICAgICAgPGhyPlxuXG4gICAgICAgICAgICA8dWktdG9nZ2xlXG4gICAgICAgICAgICAgICAgdi1pZj1cImZvcm0udHlwZSA9PSAnY29sbGVjdGlvbidcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJzaG93X25hbWVfZmllbGRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU2hvdyBuYW1lIGZpZWxkXCJcbiAgICAgICAgICAgICAgICA6aGVscD1cIiFmb3JtLnNob3dfbmFtZV9maWVsZCA/ICdBdXRvLWdlbmVyYXRlIGEgbmFtZSB1c2luZyB0aGUgZm9ybWF0IGluIHRoZSBmaWVsZCBiZWxvdy4nIDogJ0lucHV0IGEgc3BlY2lmaWMgbmFtZSBwZXIgZW50cnkuJ1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uc2hvd19uYW1lX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICA6dHJ1ZS12YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgIDpmYWxzZS12YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgIDwvdWktdG9nZ2xlPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgbGc6dy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWZvcm0uc2hvd19uYW1lX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lX2Zvcm1hdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWUgRm9ybWF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IGZvcm1hdCB3b3VsZCB5b3UgbGlrZSB5b3VyIGdlbmVyYXRlZCBuYW1lcyBhbmQgc2x1Z3MgdG8gZm9sbG93P1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lX2Zvcm1hdCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lX2Zvcm1hdCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5hbWVfZm9ybWF0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwhLS0gPGljb24tcGlja2VyXG4gICAgICAgICAgICAgICAgbmFtZT1cImljb25cIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSWNvblwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaWNvbnMuLi5cIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJDaG9vc2UgYW4gaWNvbiB0aGF0IGJlc3QgcmVwcmVzZW50cyB5b3VyIG1hdHJpeC5cIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2ljb24nKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2ljb24nKVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5pY29uXCI+XG4gICAgICAgICAgICA8L2ljb24tcGlja2VyPiAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbCBsZzp3LTEvM1wiPlxuICAgICAgICAgICAgICAgICAgICA8dWktdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2lkZWJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNob3cgaW4gU2lkZWJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zaWRlYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0cnVlLXZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmFsc2UtdmFsdWU9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktdG9nZ2xlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgbGc6dy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLXRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1aWNrbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNob3cgYXMgUXVpY2tsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnF1aWNrbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dHJ1ZS12YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIlJvdXRpbmdcIiBkZXNjcmlwdGlvbj1cIkNvbmZpZ3VyZSBob3cgZW50cmllcyB3aXRoaW4gdGhlIGNvbGxlY3Rpb24gd2lsbCBiZSBhY2Nlc3NlZCBvbiB0aGUgZnJvbnRlbmQuXCI+XG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICBuYW1lPVwicm91dGVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUm91dGVcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJXaGVuIHRoZSBVUkkgbWF0Y2hlcyB0aGlzIHBhdHRlcm4uLi5cIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgbW9ub3NwYWNlZFxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3JvdXRlJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdyb3V0ZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5yb3V0ZVwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgbmFtZT1cInRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiUmVuZGVyIHRoaXMgdGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgbW9ub3NwYWNlZFxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3RlbXBsYXRlJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCd0ZW1wbGF0ZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIkJsdWVwcmludFwiIGRlc2NyaXB0aW9uPVwiQ29uZmlndXJlIHRoaXMgbWF0cml4JyBibHVlcHJpbnQuXCI+XG4gICAgICAgICAgICA8c2VjdGlvbi1idWlsZGVyIHYtbW9kZWw9XCJmb3JtLnNlY3Rpb25zXCI+PC9zZWN0aW9uLWJ1aWxkZXI+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuICAgIDwvZm9ybS1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBtYXRyaXg6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3VibWl0OiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBtYXRyaWNlczoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc2luZ3VsYXJSZWZlcmVuY2UoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsdXJhbGl6ZS5zaW5ndWxhcih0aGlzLmZvcm0ubmFtZSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHBsdXJhbFJlZmVyZW5jZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGx1cmFsaXplKHRoaXMuZm9ybS5uYW1lKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IF8ubWFwKHRoaXMubWF0cmljZXMsIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBpdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IF8ucmVtb3ZlKG9wdGlvbnMsIChpdGVtKSA9PiB0aGlzLmlkID09IGl0ZW0uaWQpXG5cbiAgICAgICAgICAgICAgICBvcHRpb25zLnVuc2hpZnQoeyAnbGFiZWwnOiAnTm9uZScsICd2YWx1ZSc6IG51bGwgfSlcblxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICckcGFyZW50LmZvcm0udHlwZScodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gJ3NpbmdsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZvcm0uc2hvd19uYW1lX2ZpZWxkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicGFnZS10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwibGF5ZXItZ3JvdXBcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkVkaXQgTWF0cml4XCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZm9ybVxuICAgICAgICA/IF9jKFwic2hhcmVkLWZvcm1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IF92bS5pZCxcbiAgICAgICAgICAgICAgZm9ybTogX3ZtLmZvcm0sXG4gICAgICAgICAgICAgIG1hdHJpeDogX3ZtLm1hdHJpeCxcbiAgICAgICAgICAgICAgc3VibWl0OiBfdm0uc3VibWl0LFxuICAgICAgICAgICAgICBtYXRyaWNlczogX3ZtLm1hdHJpY2VzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDUyMTQzODYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbWFuZGEvU2l0ZXMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ1MjE0Mzg2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ1MjE0Mzg2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ1MjE0Mzg2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NTIxNDM4NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NTIxNDM4NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL01hdHJpY2VzL0VkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NTIxNDM4NiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzUwYjU0NzYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbWFuZGEvU2l0ZXMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2M1MGI1NDc2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2M1MGI1NDc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2M1MGI1NDc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNTBiNTQ3NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjNTBiNTQ3NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL01hdHJpY2VzL1NoYXJlZEZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNTBiNTQ3NiZcIiJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> nightly
