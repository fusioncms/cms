(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/List/Field.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/List/Field.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_fieldtype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/fieldtype */ "./resources/js/mixins/fieldtype.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* 
(The MIT License)
Copyright (c) 2014-2019 Halász Ádám <mail@adamhalasz.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = process && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, mac, networkInterfaces; } 

//  Exports
// ================================================
module.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/List/Field.vue?vue&type=template&id=2e51e08b&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/List/Field.vue?vue&type=template&id=2e51e08b& ***!
  \*************************************************************************************************************************************************************************************************************/
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
            ? _c("p-sortable-list", {
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
                            return _c("p-sortable-item", { key: item._id }, [
                              _c("div", { staticClass: "flex" }, [
                                _c(
                                  "div",
                                  { staticClass: "flex flex-1 items-center" },
                                  [
                                    _c(
                                      "p-sortable-handle",
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
                  2756291760
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/fieldtypes/List/Field.vue":
/*!************************************************!*\
  !*** ./resources/js/fieldtypes/List/Field.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_2e51e08b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=2e51e08b& */ "./resources/js/fieldtypes/List/Field.vue?vue&type=template&id=2e51e08b&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/List/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_2e51e08b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_2e51e08b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/List/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/List/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/fieldtypes/List/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/List/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/List/Field.vue?vue&type=template&id=2e51e08b&":
/*!*******************************************************************************!*\
  !*** ./resources/js/fieldtypes/List/Field.vue?vue&type=template&id=2e51e08b& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_2e51e08b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=2e51e08b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/List/Field.vue?vue&type=template&id=2e51e08b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_2e51e08b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_2e51e08b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
    settings: function settings() {
      return this.value.settings || {};
    },
    errors: function errors() {
      return this.value.errors || {};
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvTGlzdC9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9MaXN0L0ZpZWxkLnZ1ZT9lYTMxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0xpc3QvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0xpc3QvRmllbGQudnVlPzU2YjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvTGlzdC9GaWVsZC52dWU/ZGM0MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL2ZpZWxkdHlwZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInZhbHVlIiwidHlwZSIsIk9iamVjdCIsInJlcXVpcmVkIiwiY29tcHV0ZWQiLCJzZXR0aW5ncyIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHdCQURBO0FBR0E7QUFDQSxxRUFEQTtBQUVBLDJFQUZBO0FBR0EsMkVBSEE7QUFJQTtBQUpBLEdBSEE7QUFVQSxNQVZBLGtCQVVBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBO0FBRkE7QUFJQSxHQWZBO0FBaUJBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQU1BO0FBQ0EscUJBREE7QUFFQSxpQkFGQTtBQUdBO0FBQ0E7QUFDQTtBQUxBO0FBTkEsR0FqQkE7QUFnQ0E7QUFDQSxtQkFEQSw2QkFDQTtBQUNBO0FBQ0E7QUFIQSxHQWhDQTtBQXNDQTtBQUNBLE9BREEsaUJBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdNQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZTtBQUNYQSxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFFO0FBQ0hDLFVBQUksRUFBRUMsTUFESDtBQUVIQyxjQUFRLEVBQUU7QUFGUDtBQURKLEdBREk7QUFRWEMsVUFBUSxFQUFFO0FBQ05DLFlBRE0sc0JBQ0s7QUFDUCxhQUFPLEtBQUtMLEtBQUwsQ0FBV0ssUUFBWCxJQUF1QixFQUE5QjtBQUNILEtBSEs7QUFLTkMsVUFMTSxvQkFLRztBQUNMLGFBQU8sS0FBS04sS0FBTCxDQUFXTSxNQUFYLElBQXFCLEVBQTVCO0FBQ0g7QUFQSztBQVJDLENBQWYsRSIsImZpbGUiOiJqcy9jaHVua3MvMzAuanM/aWQ9OGQyMmJmZTAwM2Y3MGEyNjllNzEiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZpZWxkX19sYWJlbFwiXG4gICAgICAgICAgICAgICAgOmZvcj1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgIHYtaHRtbD1cImZpZWxkLm5hbWVcIj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZF9fY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxwLXNvcnRhYmxlLWxpc3RcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIml0ZW1zLmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dCcsIG5vcm1hbGl6ZWRJdGVtcylcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzbG90LXNjb3BlPVwieyBpdGVtczogaXRlbXMgfVwiIGNsYXNzPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1zb3J0YWJsZS1pdGVtIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBpdGVtc1wiIDprZXk9XCJpdGVtLl9pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtMSBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXNvcnRhYmxlLWhhbmRsZSBjbGFzcz1cImN1cnNvci1tb3ZlIGlubGluZS1ibG9jayBtbC0yIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWVudS1pY29uIHNpemU9XCIuOTc1eFwiPjwvbWVudS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXNvcnRhYmxlLWhhbmRsZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgcHgtMyBweS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbXNbaW5kZXhdLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInAtMiB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZGFuZ2VyLTUwMCBmb2N1czpvdXRsaW5lLW5vbmVcIiBAY2xpY2sucHJldmVudD1cImRlc3Ryb3koaW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHgtaWNvbiBzaXplPVwiLjk3NXhcIj48L3gtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zb3J0YWJsZS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3Atc29ydGFibGUtbGlzdD5cblxuICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICBZb3VyIGxpc3QgaXMgZW1wdHkuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIi1tdC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIGZsZXgtZ3JvdyBmb2N1cy13aXRoaW46ei0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBwbC0zIGZsZXggaXRlbXMtY2VudGVyIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaXN0LWljb24gc2l6ZT1cIi45NzV4XCIgY2xhc3M9XCJ0ZXh0LWdyYXktNDAwXCI+PC9saXN0LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIEBrZXl1cC5lbnRlci5wcmV2ZW50PVwiYWRkXCIgdi1tb2RlbD1cIm5ld0l0ZW1cIiBjbGFzcz1cImZpZWxkX19pbnB1dCBibG9jayB3LWZ1bGwgcm91bmRlZC1ub25lIHJvdW5kZWQtbCBwbC0xMCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTE1MFwiIHBsYWNlaG9sZGVyPVwiQWRkIGFuIGl0ZW0uLi5cIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJhZGRcIiBjbGFzcz1cInJvdW5kZWQtciAtbWwtcHggaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS01MDAgdGV4dC1zbSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTMgcHktMiBob3Zlcjpib3JkZXItZ3JheS00MDAgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1mb2N1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8cGx1cy1pY29uIHNpemU9XCIuOTc1eFwiPjwvcGx1cy1pY29uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIHBsYWNlaG9sZGVyPVwiQWRkIGFuIGl0ZW0uLi5cIiBjbGFzcz1cImZpZWxkX19pbnB1dCAtbXQtM1wiPiAtLT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHVuaXFpZCBmcm9tICd1bmlxaWQnXG4gICAgaW1wb3J0IGZpZWxkdHlwZSBmcm9tICcuLi8uLi9taXhpbnMvZmllbGR0eXBlJ1xuICAgIGltcG9ydCB7WEljb24sIE1lbnVJY29uLCBMaXN0SWNvbiwgUGx1c0ljb259IGZyb20gJ3Z1ZS1mZWF0aGVyLWljb25zJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnbGlzdC1maWVsZHR5cGUnLFxuXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICd4LWljb24nOiBYSWNvbixcbiAgICAgICAgICAgICdtZW51LWljb24nOiBNZW51SWNvbixcbiAgICAgICAgICAgICdsaXN0LWljb24nOiBMaXN0SWNvbixcbiAgICAgICAgICAgICdwbHVzLWljb24nOiBQbHVzSWNvbixcbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuZXdJdGVtOiAnJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBub3JtYWxpemVkSXRlbXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8ubWFwKHRoaXMuaXRlbXMsICd2YWx1ZScpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGFkZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXdJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh0aGlzLm5ldyh0aGlzLm5ld0l0ZW0pKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5ub3JtYWxpemVkSXRlbXMpXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdJdGVtID0gJydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGRlc3Ryb3koaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG5ldyhpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgX2lkOiB1bmlxaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBbXSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5lYWNoKHRoaXMudmFsdWUsIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHRoaXMubmV3KGl0ZW0pKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIi8qIFxuKFRoZSBNSVQgTGljZW5zZSlcbkNvcHlyaWdodCAoYykgMjAxNC0yMDE5IEhhbMOhc3ogw4Fkw6FtIDxtYWlsQGFkYW1oYWxhc3ouY29tPlxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyAgVW5pcXVlIEhleGF0cmlkZWNpbWFsIElEIEdlbmVyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHBpZCA9IHByb2Nlc3MgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicpe1xuICAgIHZhciBtYWMgPSAnJywgbmV0d29ya0ludGVyZmFjZXMgPSByZXF1aXJlKCdvcycpLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBuZXR3b3JrSW50ZXJmYWNlLmxlbmd0aDtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICE9ICcwMDowMDowMDowMDowMDowMCcpe1xuICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9LCBbXG4gICAgICBfdm0uZmllbGQubmFtZVxuICAgICAgICA/IF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmllbGRfX2xhYmVsXCIsXG4gICAgICAgICAgICBhdHRyczogeyBmb3I6IF92bS5maWVsZC5oYW5kbGUgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5maWVsZC5uYW1lKSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWVsZF9fY29udHJvbFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uaXRlbXMubGVuZ3RoXG4gICAgICAgICAgICA/IF9jKFwicC1zb3J0YWJsZS1saXN0XCIsIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRcIiwgX3ZtLm5vcm1hbGl6ZWRJdGVtcylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IHJlZi5pdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChpdGVtcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwLXNvcnRhYmxlLWl0ZW1cIiwgeyBrZXk6IGl0ZW0uX2lkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC0xIGl0ZW1zLWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1zb3J0YWJsZS1oYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJzb3ItbW92ZSBpbmxpbmUtYmxvY2sgbWwtMiB0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWVudS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwiLjk3NXhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW1zW2luZGV4XS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbXNbaW5kZXhdLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctZnVsbCBweC0zIHB5LTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGl0ZW1zW2luZGV4XS52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC0yIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1kYW5nZXItNTAwIGZvY3VzOm91dGxpbmUtbm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVzdHJveShpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIngtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcIi45NzV4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIDI3NTYyOTE3NjBcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbXMgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW1zXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgWW91ciBsaXN0IGlzIGVtcHR5LlxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIi1tdC0zXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IHJvdW5kZWRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmVsYXRpdmUgZmxleC1ncm93IGZvY3VzLXdpdGhpbjp6LTEwXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIHBsLTMgZmxleCBpdGVtcy1jZW50ZXIgcG9pbnRlci1ldmVudHMtbm9uZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImxpc3QtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmF5LTQwMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwiLjk3NXhcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld0l0ZW0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdJdGVtXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcImZpZWxkX19pbnB1dCBibG9jayB3LWZ1bGwgcm91bmRlZC1ub25lIHJvdW5kZWQtbCBwbC0xMCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTE1MFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkFkZCBhbiBpdGVtLi4uXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3SXRlbSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIilcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGQoJGV2ZW50KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLm5ld0l0ZW0gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJyb3VuZGVkLXIgLW1sLXB4IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNTAwIHRleHQtc20gYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBweC0zIHB5LTIgaG92ZXI6Ym9yZGVyLWdyYXktNDAwIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctZm9jdXNcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkKCRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW19jKFwicGx1cy1pY29uXCIsIHsgYXR0cnM6IHsgc2l6ZTogXCIuOTc1eFwiIH0gfSldLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlNTFlMDhiJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZTUxZTA4YicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZTUxZTA4YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZTUxZTA4YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlNTFlMDhiJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJlNTFlMDhiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZmllbGR0eXBlcy9MaXN0L0ZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmU1MWUwOGImXCIiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNldHRpbmdzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc2V0dGluZ3MgfHwge31cbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5lcnJvcnMgfHwge31cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9