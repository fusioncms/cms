(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Asset/Field.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Asset/Field.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _interfaces_FileManager_FileUploader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/interfaces/FileManager/FileUploader.vue */ "./resources/js/interfaces/FileManager/FileUploader.vue");
/* harmony import */ var _interfaces_FileManager_FileSelection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/interfaces/FileManager/FileSelection.vue */ "./resources/js/interfaces/FileManager/FileSelection.vue");
/* harmony import */ var _interfaces_FileManager_Actions_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/interfaces/FileManager/Actions/Breadcrumb.vue */ "./resources/js/interfaces/FileManager/Actions/Breadcrumb.vue");
/* harmony import */ var _interfaces_FileManager_Actions_Display_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/interfaces/FileManager/Actions/Display.vue */ "./resources/js/interfaces/FileManager/Actions/Display.vue");
/* harmony import */ var _interfaces_FileManager_Actions_Search_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/interfaces/FileManager/Actions/Search.vue */ "./resources/js/interfaces/FileManager/Actions/Search.vue");
/* harmony import */ var _interfaces_FileManager_Actions_Sort_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/interfaces/FileManager/Actions/Sort.vue */ "./resources/js/interfaces/FileManager/Actions/Sort.vue");
/* harmony import */ var _interfaces_FileManager_Actions_View_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/interfaces/FileManager/Actions/View.vue */ "./resources/js/interfaces/FileManager/Actions/View.vue");
/* harmony import */ var _interfaces_FileManager_Browse_Directory_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/interfaces/FileManager/Browse/Directory.vue */ "./resources/js/interfaces/FileManager/Browse/Directory.vue");
/* harmony import */ var _interfaces_FileManager_Browse_File_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/interfaces/FileManager/Browse/File.vue */ "./resources/js/interfaces/FileManager/Browse/File.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'asset-fieldtype',
  components: {
    'file-uploader': _interfaces_FileManager_FileUploader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'file-selection': _interfaces_FileManager_FileSelection_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'display-action': _interfaces_FileManager_Actions_Display_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'breadcrumb-action': _interfaces_FileManager_Actions_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'search-action': _interfaces_FileManager_Actions_Search_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'sort-action': _interfaces_FileManager_Actions_Sort_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    'view-action': _interfaces_FileManager_Actions_View_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    'directory': _interfaces_FileManager_Browse_Directory_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    'file': _interfaces_FileManager_Browse_File_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  mixins: [__webpack_require__(/*! @/mixins/fileselector */ "./resources/js/mixins/fileselector.js")["default"], __webpack_require__(/*! @/mixins/filedragdrop */ "./resources/js/mixins/filedragdrop.js")["default"], __webpack_require__(/*! @/mixins/filebrowser */ "./resources/js/mixins/filebrowser.js")["default"]],
  data: function data() {
    return {
      requestOpen: false,
      modalOpen: false,
      selection: []
    };
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    }
  },
  watch: {
    loading: function loading(isLoading) {
      var _this = this;

      this.$nextTick(function () {
        if (isLoading) {
          _this.destroySelector();
        } else {
          _this.loadSelector(_this.$el.querySelector('.selectables'));

          if (_this.requestOpen) {
            _this.modalOpen = true;
            _this.requestOpen = false;
          }
        }
      });
    }
  },
  computed: {
    selected: {
      get: function get() {
        return this.value || [];
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    },
    selectionLimit: function selectionLimit() {
      return Number(this.field.settings.limit) || Infinity;
    },
    addLimit: function addLimit() {
      return this.selectionLimit - this.selection.length;
    },
    typeRestriction: function typeRestriction() {
      return this.field.settings.filetype_restrictions;
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    setDropzoneVisible: 'filemanager/setDropzoneVisible'
  })), {}, {
    isValidSelection: function isValidSelection(file) {
      return this.typeRestriction.length == 0 || _.includes(this.typeRestriction, file.type);
    },
    push: function push() {
      var _this2 = this;

      _.forEach(this.selectedFiles, function (id) {
        return _this2.add(id);
      });
    },
    add: function add(id) {
      if (this.addLimit > 0) {
        var exists = _.find(this.selection, ['id', id]);

        var file = _.find(this.files, ['id', id]);

        if (!exists && this.isValidSelection(file)) {
          this.selection.push(file);
        }
      }
    },
    open: function open() {
      this.reset();
      this.setCurrentDirectory(this.field.settings.root_directory);
      this.setRootDirectory(this.field.settings.root_directory);
      this.fetchFilesAndDirectories();
      this.selection = _toConsumableArray(this.selected);
      this.requestOpen = true;
    },
    close: function close() {
      this.reset();
      this.selection = [];
      this.modalOpen = false;
    },
    reject: function reject() {
      this.close();
    },
    accept: function accept() {
      this.selected = this.selection;
      this.close();
    }
  }),
  beforeDestroy: function beforeDestroy() {
    this.reset();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/FileManager/FileSelection.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/FileManager/FileSelection.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    selection: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    },
    addLimit: function addLimit() {
      return this.limit - this.selection.length;
    }
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    limit: {
      type: Number,
      "default": Infinity
    },
    hasHeader: {
      type: Boolean,
      "default": true
    }
  },
  methods: {
    remove: function remove(id) {
      this.selection = _.filter(this.selection, function (item) {
        return item.id !== id;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Asset/Field.vue?vue&type=template&id=5b20f936&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Asset/Field.vue?vue&type=template&id=5b20f936& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        "label",
        { staticClass: "form__label", attrs: { for: _vm.field.handle } },
        [_vm._v(_vm._s(_vm.field.name))]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-start justify-between" },
        [
          _c(
            "div",
            { staticClass: "w-1/2" },
            [
              _c(
                "ui-button",
                {
                  attrs: { disabled: _vm.requestOpen },
                  on: { click: _vm.open }
                },
                [
                  _c("fa-icon", {
                    staticClass: "mr-1",
                    attrs: { icon: ["fas", "plus-circle"] }
                  }),
                  _vm._v(" Manage Assets\n\t\t\t\t")
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("file-selection", {
            staticClass: "w-1/2",
            attrs: { limit: _vm.selectionLimit, hasHeader: false },
            model: {
              value: _vm.selected,
              callback: function($$v) {
                _vm.selected = $$v
              },
              expression: "selected"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "ui-modal",
        {
          attrs: {
            name: "file-manager",
            "no-header": "",
            "no-footer": "",
            "extra-large": ""
          },
          model: {
            value: _vm.modalOpen,
            callback: function($$v) {
              _vm.modalOpen = $$v
            },
            expression: "modalOpen"
          }
        },
        [
          _c("file-uploader", { ref: "uploader" }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "row",
              on: {
                dragenter: function($event) {
                  return _vm.setDropzoneVisible(true)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "side-container" },
                [
                  _c("file-selection", {
                    attrs: { limit: _vm.selectionLimit },
                    on: { reject: _vm.reject, accept: _vm.accept },
                    model: {
                      value: _vm.selection,
                      callback: function($$v) {
                        _vm.selection = $$v
                      },
                      expression: "selection"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "content-container" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card__body" }, [
                    _c("div", { staticClass: "toolbar" }, [
                      _c(
                        "div",
                        { staticClass: "toolbar__group" },
                        [
                          _c(
                            "ui-button",
                            {
                              attrs: { icon: "" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.push($event)
                                }
                              }
                            },
                            [
                              _c("fa-icon", {
                                staticClass: "icon",
                                attrs: { icon: "arrow-alt-circle-left" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "toolbar__group" }, [
                        _c("div", { staticClass: "buttons" }, [
                          _c(
                            "div",
                            { staticClass: "buttons__group" },
                            [
                              _c(
                                "ui-button",
                                {
                                  attrs: { icon: "" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.$refs.uploader.openDZ()
                                    }
                                  }
                                },
                                [
                                  _c("fa-icon", {
                                    staticClass: "icon",
                                    attrs: { icon: ["fas", "upload"] }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "ui-button",
                                {
                                  directives: [
                                    {
                                      name: "modal",
                                      rawName: "v-modal:new-folder",
                                      arg: "new-folder"
                                    }
                                  ],
                                  attrs: { icon: "" }
                                },
                                [
                                  _c("fa-icon", {
                                    staticClass: "icon",
                                    attrs: { icon: ["fas", "folder-plus"] }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "toolbar__group toolbar__group--grow" },
                        [_c("search-action")],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "toolbar__group" },
                        [
                          _c("display-action"),
                          _vm._v(" "),
                          _c("sort-action"),
                          _vm._v(" "),
                          _c("view-action")
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex items-center border-b border-gray-200 px-3 py-2"
                    },
                    [_c("breadcrumb-action")],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "gallery-container selectables" }, [
                    _c(
                      "div",
                      { staticClass: "gallery border-b border-gray-200 pb-2" },
                      _vm._l(_vm.directories, function(directory) {
                        return _c("directory", {
                          key: directory.id,
                          attrs: { directory: directory, isDropzone: true },
                          on: {
                            dblclick: function($event) {
                              return _vm.navigate(directory)
                            }
                          }
                        })
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "gallery" },
                      _vm._l(_vm.files, function(file) {
                        return _c("file", {
                          key: file.id,
                          attrs: { file: file },
                          on: {
                            dblclick: function($event) {
                              return _vm.add(file.id)
                            }
                          }
                        })
                      }),
                      1
                    )
                  ])
                ])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "modals" } }, [_c("new-folder-modal")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/FileManager/FileSelection.vue?vue&type=template&id=5fa2508a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/FileManager/FileSelection.vue?vue&type=template&id=5fa2508a& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card h-full" }, [
    _vm.hasHeader
      ? _c(
          "div",
          {
            staticClass:
              "flex items-center justify-between border-b border-gray-200 p-3"
          },
          [
            _c(
              "ui-button",
              {
                attrs: { variant: "warning" },
                on: {
                  click: function($event) {
                    return _vm.$emit("reject")
                  }
                }
              },
              [
                _c("fa-icon", {
                  staticClass: "mr-2",
                  attrs: { icon: ["fas", "times"] }
                }),
                _vm._v(" Reject")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "ui-button",
              {
                attrs: { variant: "info" },
                on: {
                  click: function($event) {
                    return _vm.$emit("accept")
                  }
                }
              },
              [
                _vm._v("Accept "),
                _c("fa-icon", {
                  staticClass: "ml-2",
                  attrs: { icon: ["fas", "check"] }
                })
              ],
              1
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.selection.length > 0
      ? _c(
          "div",
          [
            _c(
              "ui-sortable-list",
              {
                staticClass: "sortable-list",
                model: {
                  value: _vm.selection,
                  callback: function($$v) {
                    _vm.selection = $$v
                  },
                  expression: "selection"
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "w-full p-3" },
                  _vm._l(_vm.selection, function(file) {
                    return _c("ui-sortable-item", { key: file.id }, [
                      _c("div", { staticClass: "flex items-center py-2" }, [
                        _c(
                          "div",
                          { staticClass: "w-1/12" },
                          [
                            _c(
                              "ui-sortable-handle",
                              { staticClass: "cursor-move" },
                              [
                                _c("fa-icon", {
                                  staticClass: "handle fa-fw text-gray-400",
                                  attrs: { icon: "ellipsis-v" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "w-3/12" },
                          [
                            file.type == "image"
                              ? _c("ui-img", {
                                  attrs: {
                                    src: file.url + "?w=50&h=50&fit=crop",
                                    "background-color": "white",
                                    width: 50,
                                    height: 50
                                  }
                                })
                              : _c("ui-img", {
                                  attrs: {
                                    src:
                                      "/vendor/fusion/img/" +
                                      file.type +
                                      "-large.svg",
                                    "background-color": "white",
                                    width: 50,
                                    height: 50
                                  }
                                })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-6/12" }, [
                          _c("div", [_vm._v(_vm._s(file.name))])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "w-2/12 text-right" },
                          [
                            _c(
                              "ui-button",
                              {
                                attrs: { theme: "danger" },
                                on: {
                                  click: function($event) {
                                    return _vm.remove(file.id)
                                  }
                                }
                              },
                              [
                                _c("fa-icon", {
                                  attrs: { icon: ["fas", "trash"] }
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
              ]
            ),
            _vm._v(" "),
            _vm.addLimit <= 0
              ? _c(
                  "div",
                  { staticClass: "text-sm italic text-danger-600 text-center" },
                  [_vm._v("\n\t\t\tFile limit reached\n\t\t")]
                )
              : _vm._e()
          ],
          1
        )
      : _c(
          "div",
          {
            staticClass:
              "h-full flex flex-col justify-center items-center text-5xl text-gray-300"
          },
          [
            _c("fa-icon", {
              staticClass: "fa-fw fa-3x",
              attrs: { icon: ["far", "copy"] }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "text-lg py-2 text-gray-500" }, [
              _vm._v("Select some files...")
            ])
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/Asset/Field.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Asset/Field.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_5b20f936___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=5b20f936& */ "./resources/js/components/Fieldtypes/Asset/Field.vue?vue&type=template&id=5b20f936&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Asset/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_5b20f936___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_5b20f936___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Asset/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Asset/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Asset/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Asset/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Asset/Field.vue?vue&type=template&id=5b20f936&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Asset/Field.vue?vue&type=template&id=5b20f936& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_5b20f936___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=5b20f936& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Asset/Field.vue?vue&type=template&id=5b20f936&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_5b20f936___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_5b20f936___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/interfaces/FileManager/FileSelection.vue":
/*!***************************************************************!*\
  !*** ./resources/js/interfaces/FileManager/FileSelection.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileSelection_vue_vue_type_template_id_5fa2508a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileSelection.vue?vue&type=template&id=5fa2508a& */ "./resources/js/interfaces/FileManager/FileSelection.vue?vue&type=template&id=5fa2508a&");
/* harmony import */ var _FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSelection.vue?vue&type=script&lang=js& */ "./resources/js/interfaces/FileManager/FileSelection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileSelection_vue_vue_type_template_id_5fa2508a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileSelection_vue_vue_type_template_id_5fa2508a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/interfaces/FileManager/FileSelection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/interfaces/FileManager/FileSelection.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/interfaces/FileManager/FileSelection.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileSelection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/FileManager/FileSelection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/interfaces/FileManager/FileSelection.vue?vue&type=template&id=5fa2508a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/interfaces/FileManager/FileSelection.vue?vue&type=template&id=5fa2508a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_template_id_5fa2508a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileSelection.vue?vue&type=template&id=5fa2508a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/FileManager/FileSelection.vue?vue&type=template&id=5fa2508a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_template_id_5fa2508a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_template_id_5fa2508a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9pbnRlcmZhY2VzL0ZpbGVNYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlP2ViOTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ludGVyZmFjZXMvRmlsZU1hbmFnZXIvRmlsZVNlbGVjdGlvbi52dWU/NmMzMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZT81ZGMwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlP2RkOTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ludGVyZmFjZXMvRmlsZU1hbmFnZXIvRmlsZVNlbGVjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ludGVyZmFjZXMvRmlsZU1hbmFnZXIvRmlsZVNlbGVjdGlvbi52dWU/MTZlNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9GaWxlTWFuYWdlci9GaWxlU2VsZWN0aW9uLnZ1ZT80M2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBHQTtB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ImZpbGUiOiJqcy9jaHVua3MvMTYuanM/aWQ9ZjJkY2IxMTY5ZDNkMmM1ZWY0YTEiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGxhYmVsIDpmb3I9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3sgZmllbGQubmFtZSB9fTwvbGFiZWw+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ3LTEvMlwiPlxuXHRcdFx0XHQ8dWktYnV0dG9uIDpkaXNhYmxlZD1cInJlcXVlc3RPcGVuXCIgQGNsaWNrPVwib3BlblwiPlxuXHRcdFx0XHRcdDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAncGx1cy1jaXJjbGUnXVwiIGNsYXNzPVwibXItMVwiPjwvZmEtaWNvbj4gTWFuYWdlIEFzc2V0c1xuXHRcdFx0XHQ8L3VpLWJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZmlsZS1zZWxlY3Rpb25cblx0XHRcdFx0Y2xhc3M9XCJ3LTEvMlwiXG5cdFx0XHRcdDpsaW1pdD1cInNlbGVjdGlvbkxpbWl0XCJcblx0XHRcdFx0Omhhc0hlYWRlcj1cImZhbHNlXCJcblx0XHRcdFx0di1tb2RlbD1cInNlbGVjdGVkXCI+XG5cdFx0XHQ8L2ZpbGUtc2VsZWN0aW9uPlxuXHRcdDwvZGl2PlxuXG5cdFx0PCEtLSBGaWxlIE1hbmFnZXIgTW9kYWwgLS0+XG5cdFx0PHVpLW1vZGFsIG5hbWU9XCJmaWxlLW1hbmFnZXJcIiBuby1oZWFkZXIgbm8tZm9vdGVyIGV4dHJhLWxhcmdlIHYtbW9kZWw9XCJtb2RhbE9wZW5cIj5cblx0XHRcdDxmaWxlLXVwbG9hZGVyIHJlZj1cInVwbG9hZGVyXCI+PC9maWxlLXVwbG9hZGVyPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCIgQGRyYWdlbnRlcj1cInNldERyb3B6b25lVmlzaWJsZSh0cnVlKVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2lkZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZmlsZS1zZWxlY3Rpb25cblx0XHRcdFx0XHRcdDpsaW1pdD1cInNlbGVjdGlvbkxpbWl0XCJcblx0XHRcdFx0XHRcdEByZWplY3Q9XCJyZWplY3RcIlxuXHRcdFx0XHRcdFx0QGFjY2VwdD1cImFjY2VwdFwiXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwic2VsZWN0aW9uXCI+XG5cdFx0XHRcdFx0PC9maWxlLXNlbGVjdGlvbj5cblx0XHRcdCAgIFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuICAgICAgICAgICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzPVwidG9vbGJhcl9fZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDx1aS1idXR0b24gaWNvbiBAY2xpY2sucHJldmVudD1cInB1c2hcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGZhLWljb24gY2xhc3M9XCJpY29uXCIgaWNvbj1cImFycm93LWFsdC1jaXJjbGUtbGVmdFwiPjwvZmEtaWNvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzPVwidG9vbGJhcl9fZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uc19fZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWktYnV0dG9uIGljb24gQGNsaWNrLnByZXZlbnQ9XCIkcmVmcy51cGxvYWRlci5vcGVuRFooKVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZhLWljb24gY2xhc3M9XCJpY29uXCIgOmljb249XCJbJ2ZhcycsICd1cGxvYWQnXVwiPjwvZmEtaWNvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VpLWJ1dHRvbj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1aS1idXR0b24gaWNvbiB2LW1vZGFsOm5ldy1mb2xkZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmEtaWNvbiBjbGFzcz1cImljb25cIiA6aWNvbj1cIlsnZmFzJywgJ2ZvbGRlci1wbHVzJ11cIj48L2ZhLWljb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91aS1idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzPVwidG9vbGJhcl9fZ3JvdXAgdG9vbGJhcl9fZ3JvdXAtLWdyb3dcIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlYXJjaC1hY3Rpb24+PC9zZWFyY2gtYWN0aW9uPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xiYXJfX2dyb3VwXCI+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQ8ZGlzcGxheS1hY3Rpb24+PC9kaXNwbGF5LWFjdGlvbj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICBcdDxzb3J0LWFjdGlvbj48L3NvcnQtYWN0aW9uPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFx0PHZpZXctYWN0aW9uPjwvdmlldy1hY3Rpb24+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcHgtMyBweS0yXCI+XG5cdFx0XHRcdFx0XHRcdDxicmVhZGNydW1iLWFjdGlvbj48L2JyZWFkY3J1bWItYWN0aW9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWNvbnRhaW5lciBzZWxlY3RhYmxlc1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FsbGVyeSBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcGItMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXJlY3Rvcnlcblx0XHRcdFx0XHRcdFx0XHRcdHYtZm9yPVwiZGlyZWN0b3J5IGluIGRpcmVjdG9yaWVzXCJcblx0XHRcdFx0XHRcdFx0XHRcdDprZXk9XCJkaXJlY3RvcnkuaWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OmRpcmVjdG9yeT1cImRpcmVjdG9yeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6aXNEcm9wem9uZT1cInRydWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0QGRibGNsaWNrPVwibmF2aWdhdGUoZGlyZWN0b3J5KVwiPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGlyZWN0b3J5PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FsbGVyeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxmaWxlXG5cdFx0XHRcdFx0XHRcdFx0XHR2LWZvcj1cImZpbGUgaW4gZmlsZXNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OmtleT1cImZpbGUuaWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OmZpbGU9XCJmaWxlXCJcblx0XHRcdFx0XHRcdFx0XHRcdEBkYmxjbGljaz1cImFkZChmaWxlLmlkKVwiPlxuXHRcdFx0XHRcdFx0XHRcdDwvZmlsZT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuICAgICAgICAgICAgXHRcdDwvZGl2PlxuICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3VpLW1vZGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDxuZXctZm9sZGVyLW1vZGFsPjwvbmV3LWZvbGRlci1tb2RhbD5cbiAgICAgICAgPC9wb3J0YWw+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cblx0aW1wb3J0IEZpbGVVcGxvYWRlciAgZnJvbSAnQC9pbnRlcmZhY2VzL0ZpbGVNYW5hZ2VyL0ZpbGVVcGxvYWRlci52dWUnXG5cdGltcG9ydCBGaWxlU2VsZWN0aW9uIGZyb20gJ0AvaW50ZXJmYWNlcy9GaWxlTWFuYWdlci9GaWxlU2VsZWN0aW9uLnZ1ZSdcblxuXHRpbXBvcnQgQnJlYWRjcnVtYkFjdGlvbiBmcm9tICdAL2ludGVyZmFjZXMvRmlsZU1hbmFnZXIvQWN0aW9ucy9CcmVhZGNydW1iLnZ1ZSdcblx0aW1wb3J0IERpc3BsYXlBY3Rpb24gICAgZnJvbSAnQC9pbnRlcmZhY2VzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvRGlzcGxheS52dWUnXG5cdGltcG9ydCBTZWFyY2hBY3Rpb24gICAgIGZyb20gJ0AvaW50ZXJmYWNlcy9GaWxlTWFuYWdlci9BY3Rpb25zL1NlYXJjaC52dWUnXG5cdGltcG9ydCBTb3J0QWN0aW9uICAgICAgIGZyb20gJ0AvaW50ZXJmYWNlcy9GaWxlTWFuYWdlci9BY3Rpb25zL1NvcnQudnVlJ1xuXHRpbXBvcnQgVmlld0FjdGlvbiAgICAgICBmcm9tICdAL2ludGVyZmFjZXMvRmlsZU1hbmFnZXIvQWN0aW9ucy9WaWV3LnZ1ZSdcblxuXHRpbXBvcnQgRGlyZWN0b3J5IGZyb20gJ0AvaW50ZXJmYWNlcy9GaWxlTWFuYWdlci9Ccm93c2UvRGlyZWN0b3J5LnZ1ZSdcblx0aW1wb3J0IEZpbGUgICAgICBmcm9tICdAL2ludGVyZmFjZXMvRmlsZU1hbmFnZXIvQnJvd3NlL0ZpbGUudnVlJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnYXNzZXQtZmllbGR0eXBlJyxcblxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdCdmaWxlLXVwbG9hZGVyJzogIEZpbGVVcGxvYWRlcixcblx0XHRcdCdmaWxlLXNlbGVjdGlvbic6IEZpbGVTZWxlY3Rpb24sXG5cblx0XHRcdCdkaXNwbGF5LWFjdGlvbic6ICAgIERpc3BsYXlBY3Rpb24sXG5cdFx0XHQnYnJlYWRjcnVtYi1hY3Rpb24nOiBCcmVhZGNydW1iQWN0aW9uLFxuXHRcdFx0J3NlYXJjaC1hY3Rpb24nOiAgICAgU2VhcmNoQWN0aW9uLFxuXHRcdFx0J3NvcnQtYWN0aW9uJzogICAgICAgU29ydEFjdGlvbixcblx0XHRcdCd2aWV3LWFjdGlvbic6ICAgICAgIFZpZXdBY3Rpb24sXG5cblx0XHRcdCdkaXJlY3RvcnknOiBEaXJlY3RvcnksXG5cdFx0XHQnZmlsZSc6ICAgICAgRmlsZSxcblx0XHR9LFxuXG5cdFx0bWl4aW5zOiBbXG5cdFx0XHRyZXF1aXJlKCdAL21peGlucy9maWxlc2VsZWN0b3InKS5kZWZhdWx0LFxuXHRcdFx0cmVxdWlyZSgnQC9taXhpbnMvZmlsZWRyYWdkcm9wJykuZGVmYXVsdCxcbiAgICAgICAgICAgIHJlcXVpcmUoJ0AvbWl4aW5zL2ZpbGVicm93c2VyJykuZGVmYXVsdCxcbiAgICAgICAgXSxcblxuXHRcdGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXHRyZXF1ZXN0T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBcdG1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBcdHNlbGVjdGlvbjogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cblx0XHRwcm9wczoge1xuXHRcdFx0ZmllbGQ6IHtcblx0XHRcdCAgICB0eXBlOiBPYmplY3QsXG5cdFx0XHQgICAgcmVxdWlyZWQ6IHRydWUsXG5cdFx0XHR9LFxuXG5cdFx0XHR2YWx1ZToge1xuXHRcdFx0XHR0eXBlOiBBcnJheSxcblx0XHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0XHRkZWZhdWx0OiAoKSA9PiBbXSxcblx0XHRcdH0sXG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHRsb2FkaW5nKGlzTG9hZGluZykge1xuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGlzTG9hZGluZykge1xuXHRcdFx0XHRcdFx0dGhpcy5kZXN0cm95U2VsZWN0b3IoKVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxvYWRTZWxlY3Rvcih0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0YWJsZXMnKSlcblxuXHRcdFx0XHRcdFx0aWYgKHRoaXMucmVxdWVzdE9wZW4pIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5tb2RhbE9wZW4gICA9IHRydWVcblx0XHRcdFx0XHRcdFx0dGhpcy5yZXF1ZXN0T3BlbiA9IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcblx0XHRcdHNlbGVjdGVkOiB7XG5cdFx0XHRcdGdldCgpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZSB8fCBbXVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHNlbGVjdGlvbkxpbWl0KCkge1xuXHRcdFx0XHRyZXR1cm4gTnVtYmVyKHRoaXMuZmllbGQuc2V0dGluZ3MubGltaXQpIHx8IEluZmluaXR5XG5cdFx0XHR9LFxuXG5cdFx0XHRhZGRMaW1pdCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VsZWN0aW9uTGltaXQgLSB0aGlzLnNlbGVjdGlvbi5sZW5ndGhcblx0XHRcdH0sXG5cblx0XHRcdHR5cGVSZXN0cmljdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmllbGQuc2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zXG5cdFx0XHR9XG4gICAgICAgIH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcbiAgICAgICAgICAgICAgICBzZXREcm9wem9uZVZpc2libGU6ICdmaWxlbWFuYWdlci9zZXREcm9wem9uZVZpc2libGUnLFxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIGlzVmFsaWRTZWxlY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgXHRyZXR1cm4gdGhpcy50eXBlUmVzdHJpY3Rpb24ubGVuZ3RoID09IDAgfHwgXy5pbmNsdWRlcyh0aGlzLnR5cGVSZXN0cmljdGlvbiwgZmlsZS50eXBlKVxuICAgICAgICAgICAgfSxcblxuXHRcdFx0cHVzaCgpIHtcblx0XHRcdFx0Xy5mb3JFYWNoKHRoaXMuc2VsZWN0ZWRGaWxlcywgKGlkKSA9PiB0aGlzLmFkZChpZCkpXG5cdFx0XHR9LFxuXG5cdFx0XHRhZGQoaWQpIHtcblx0XHRcdFx0aWYgKHRoaXMuYWRkTGltaXQgPiAwKSB7XG5cdFx0XHRcdFx0bGV0IGV4aXN0cyA9IF8uZmluZCh0aGlzLnNlbGVjdGlvbiwgWyAnaWQnLCBpZCBdKVxuXHRcdFx0XHRcdGxldCBmaWxlICAgPSBfLmZpbmQodGhpcy5maWxlcywgWyAnaWQnLCBpZCBdKVxuXG5cdFx0XHRcdFx0aWYgKCEgZXhpc3RzICYmIHRoaXMuaXNWYWxpZFNlbGVjdGlvbihmaWxlKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3Rpb24ucHVzaChmaWxlKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0b3BlbigpIHtcblx0XHRcdFx0dGhpcy5yZXNldCgpXG5cdFx0XHRcdHRoaXMuc2V0Q3VycmVudERpcmVjdG9yeSh0aGlzLmZpZWxkLnNldHRpbmdzLnJvb3RfZGlyZWN0b3J5KVxuICAgICAgICBcdFx0dGhpcy5zZXRSb290RGlyZWN0b3J5KHRoaXMuZmllbGQuc2V0dGluZ3Mucm9vdF9kaXJlY3RvcnkpXG5cdFx0XHRcdHRoaXMuZmV0Y2hGaWxlc0FuZERpcmVjdG9yaWVzKClcblxuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbiA9IFsuLi50aGlzLnNlbGVjdGVkXVxuXHRcdFx0XHR0aGlzLnJlcXVlc3RPcGVuID0gdHJ1ZVxuXHRcdFx0fSxcblxuXHRcdFx0Y2xvc2UoKSB7XG5cdFx0XHRcdHRoaXMucmVzZXQoKVxuXG5cdFx0XHRcdHRoaXMuc2VsZWN0aW9uID0gW11cblx0XHRcdFx0dGhpcy5tb2RhbE9wZW4gPSBmYWxzZVxuXHRcdFx0fSxcblxuXHRcdFx0cmVqZWN0KCkge1xuXHRcdFx0XHR0aGlzLmNsb3NlKClcblx0XHRcdH0sXG5cblx0XHRcdGFjY2VwdCgpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uXG5cdFx0XHRcdHRoaXMuY2xvc2UoKVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRiZWZvcmVEZXN0cm95KCkge1xuXHRcdFx0dGhpcy5yZXNldCgpXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJjYXJkIGgtZnVsbFwiPlxuXHRcdDxkaXYgdi1pZj1cImhhc0hlYWRlclwiIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBwLTNcIj5cblx0XHRcdDx1aS1idXR0b24gQGNsaWNrPVwiJGVtaXQoJ3JlamVjdCcpXCIgdmFyaWFudD1cIndhcm5pbmdcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3RpbWVzJ11cIiBjbGFzcz1cIm1yLTJcIj48L2ZhLWljb24+IFJlamVjdDwvdWktYnV0dG9uPlxuXHRcdFx0PHVpLWJ1dHRvbiBAY2xpY2s9XCIkZW1pdCgnYWNjZXB0JylcIiB2YXJpYW50PVwiaW5mb1wiPkFjY2VwdCA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NoZWNrJ11cIiBjbGFzcz1cIm1sLTJcIj48L2ZhLWljb24+PC91aS1idXR0b24+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IHYtaWY9XCJzZWxlY3Rpb24ubGVuZ3RoID4gMFwiPlxuXHRcdFx0PHVpLXNvcnRhYmxlLWxpc3Qgdi1tb2RlbD1cInNlbGVjdGlvblwiIGNsYXNzPVwic29ydGFibGUtbGlzdFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy1mdWxsIHAtM1wiPlxuXHRcdFx0XHRcdDx1aS1zb3J0YWJsZS1pdGVtIHYtZm9yPVwiZmlsZSBpbiBzZWxlY3Rpb25cIiA6a2V5PVwiZmlsZS5pZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB5LTJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctMS8xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDx1aS1zb3J0YWJsZS1oYW5kbGUgY2xhc3M9XCJjdXJzb3ItbW92ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGZhLWljb24gaWNvbj1cImVsbGlwc2lzLXZcIiBjbGFzcz1cImhhbmRsZSBmYS1mdyB0ZXh0LWdyYXktNDAwXCI+PC9mYS1pY29uPlxuXHRcdFx0XHRcdFx0XHRcdDwvdWktc29ydGFibGUtaGFuZGxlPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctMy8xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDx1aS1pbWcgdi1pZj1cImZpbGUudHlwZSA9PSAnaW1hZ2UnXCIgOnNyYz1cImZpbGUudXJsICsgJz93PTUwJmg9NTAmZml0PWNyb3AnXCIgYmFja2dyb3VuZC1jb2xvcj1cIndoaXRlXCIgOndpZHRoPVwiNTBcIiA6aGVpZ2h0PVwiNTBcIj48L3VpLWltZz5cblx0XHRcdFx0XHRcdFx0XHQ8dWktaW1nIHYtZWxzZSA6c3JjPVwiJy92ZW5kb3IvZnVzaW9uL2ltZy8nICsgZmlsZS50eXBlICsgJy1sYXJnZS5zdmcnXCIgYmFja2dyb3VuZC1jb2xvcj1cIndoaXRlXCIgOndpZHRoPVwiNTBcIiA6aGVpZ2h0PVwiNTBcIj48L3VpLWltZz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTYvMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2Pnt7IGZpbGUubmFtZSB9fTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctMi8xMiB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHVpLWJ1dHRvbiBAY2xpY2s9XCJyZW1vdmUoZmlsZS5pZClcIiB0aGVtZT1cImRhbmdlclwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndHJhc2gnXVwiPjwvZmEtaWNvbj48L3VpLWJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3VpLXNvcnRhYmxlLWl0ZW0+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC91aS1zb3J0YWJsZS1saXN0PlxuXG5cdFx0XHQ8ZGl2IHYtaWY9XCJhZGRMaW1pdCA8PSAwXCIgY2xhc3M9XCJ0ZXh0LXNtIGl0YWxpYyB0ZXh0LWRhbmdlci02MDAgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0RmlsZSBsaW1pdCByZWFjaGVkXG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgdi1lbHNlIGNsYXNzPVwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS0zMDBcIj5cblx0XHRcdDxmYS1pY29uIDppY29uPVwiWydmYXInLCAnY29weSddXCIgY2xhc3M9XCJmYS1mdyBmYS0zeFwiPjwvZmEtaWNvbj5cblx0XHRcdDxzcGFuIGNsYXNzPVwidGV4dC1sZyBweS0yIHRleHQtZ3JheS01MDBcIj5TZWxlY3Qgc29tZSBmaWxlcy4uLjwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHNlbGVjdGlvbjoge1xuXHRcdFx0XHRnZXQoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWVcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRzZXQodmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRhZGRMaW1pdCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubGltaXQgLSB0aGlzLnNlbGVjdGlvbi5sZW5ndGhcblx0XHRcdH0sXG5cdFx0fSxcblxuXHRcdHByb3BzOiB7XG5cdFx0XHR2YWx1ZToge1xuXHRcdFx0XHR0eXBlOiBBcnJheSxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcblx0XHRcdH0sXG5cblx0XHRcdGxpbWl0OiB7XG5cdFx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDogSW5maW5pdHlcblx0XHRcdH0sXG5cblx0XHRcdGhhc0hlYWRlcjoge1xuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHJlbW92ZShpZCkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbiA9IF8uZmlsdGVyKHRoaXMuc2VsZWN0aW9uLCAoaXRlbSkgPT4geyByZXR1cm4gaXRlbS5pZCAhPT0gaWQgfSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIsIGF0dHJzOiB7IGZvcjogX3ZtLmZpZWxkLmhhbmRsZSB9IH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSldXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0ucmVxdWVzdE9wZW4gfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub3BlbiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0xXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInBsdXMtY2lyY2xlXCJdIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIE1hbmFnZSBBc3NldHNcXG5cXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJmaWxlLXNlbGVjdGlvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEvMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgbGltaXQ6IF92bS5zZWxlY3Rpb25MaW1pdCwgaGFzSGVhZGVyOiBmYWxzZSB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZCA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInVpLW1vZGFsXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogXCJmaWxlLW1hbmFnZXJcIixcbiAgICAgICAgICAgIFwibm8taGVhZGVyXCI6IFwiXCIsXG4gICAgICAgICAgICBcIm5vLWZvb3RlclwiOiBcIlwiLFxuICAgICAgICAgICAgXCJleHRyYS1sYXJnZVwiOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RhbE9wZW4sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5tb2RhbE9wZW4gPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGFsT3BlblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJmaWxlLXVwbG9hZGVyXCIsIHsgcmVmOiBcInVwbG9hZGVyXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGRyYWdlbnRlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldERyb3B6b25lVmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNpZGUtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImZpbGUtc2VsZWN0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGltaXQ6IF92bS5zZWxlY3Rpb25MaW1pdCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyByZWplY3Q6IF92bS5yZWplY3QsIGFjY2VwdDogX3ZtLmFjY2VwdCB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3Rpb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvb2xiYXJfX2dyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnB1c2goJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b29sYmFyX19ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNfX2dyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyZWZzLnVwbG9hZGVyLm9wZW5EWigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInVwbG9hZFwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6bmV3LWZvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibmV3LWZvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJmb2xkZXItcGx1c1wiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b29sYmFyX19ncm91cCB0b29sYmFyX19ncm91cC0tZ3Jvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzZWFyY2gtYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b29sYmFyX19ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGlzcGxheS1hY3Rpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic29ydC1hY3Rpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidmlldy1hY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB4LTMgcHktMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImJyZWFkY3J1bWItYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnktY29udGFpbmVyIHNlbGVjdGFibGVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeSBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcGItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kaXJlY3RvcmllcywgZnVuY3Rpb24oZGlyZWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXJlY3RvcnlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGRpcmVjdG9yeS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlyZWN0b3J5OiBkaXJlY3RvcnksIGlzRHJvcHpvbmU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5hdmlnYXRlKGRpcmVjdG9yeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5maWxlcywgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZmlsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmlsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsZTogZmlsZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkKGZpbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsc1wiIH0gfSwgW19jKFwibmV3LWZvbGRlci1tb2RhbFwiKV0sIDEpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBoLWZ1bGxcIiB9LCBbXG4gICAgX3ZtLmhhc0hlYWRlclxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcC0zXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJ3YXJuaW5nXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwicmVqZWN0XCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRpbWVzXCJdIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgUmVqZWN0XCIpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJhY2NlcHRcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJBY2NlcHQgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjaGVja1wiXSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnNlbGVjdGlvbi5sZW5ndGggPiAwXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktc29ydGFibGUtbGlzdFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic29ydGFibGUtbGlzdFwiLFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGlvbiA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBwLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWxlY3Rpb24sIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidWktc29ydGFibGUtaXRlbVwiLCB7IGtleTogZmlsZS5pZCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1zb3J0YWJsZS1oYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3Vyc29yLW1vdmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhhbmRsZSBmYS1mdyB0ZXh0LWdyYXktNDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJlbGxpcHNpcy12XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0zLzEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUudHlwZSA9PSBcImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ1aS1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGZpbGUudXJsICsgXCI/dz01MCZoPTUwJmZpdD1jcm9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJ1aS1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9mdXNpb24vaW1nL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50eXBlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItbGFyZ2Uuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctNi8xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoZmlsZS5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyIHRleHQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJkYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlKGZpbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRyYXNoXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uYWRkTGltaXQgPD0gMFxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSBpdGFsaWMgdGV4dC1kYW5nZXItNjAwIHRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRGaWxlIGxpbWl0IHJlYWNoZWRcXG5cXHRcXHRcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC01eGwgdGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBmYS0zeFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXJcIiwgXCJjb3B5XCJdIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbGcgcHktMiB0ZXh0LWdyYXktNTAwXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJTZWxlY3Qgc29tZSBmaWxlcy4uLlwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViMjBmOTM2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1YjIwZjkzNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1YjIwZjkzNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1YjIwZjkzNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViMjBmOTM2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzViMjBmOTM2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWIyMGY5MzYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVTZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmYTI1MDhhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpbGVTZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWxlU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWZhMjUwOGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWZhMjUwOGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWZhMjUwOGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpbGVTZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmYTI1MDhhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVmYTI1MDhhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9GaWxlTWFuYWdlci9GaWxlU2VsZWN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWZhMjUwOGEmXCIiXSwic291cmNlUm9vdCI6IiJ9