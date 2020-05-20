(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-manager/FileSelection.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/file-manager/FileSelection.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Field.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Asset/Field.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_file_manager_FileUploader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/file-manager/FileUploader.vue */ "./resources/js/components/file-manager/FileUploader.vue");
/* harmony import */ var _components_file_manager_FileSelection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/file-manager/FileSelection.vue */ "./resources/js/components/file-manager/FileSelection.vue");
/* harmony import */ var _components_file_manager_actions_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/file-manager/actions/Breadcrumb.vue */ "./resources/js/components/file-manager/actions/Breadcrumb.vue");
/* harmony import */ var _components_file_manager_actions_Display_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/file-manager/actions/Display.vue */ "./resources/js/components/file-manager/actions/Display.vue");
/* harmony import */ var _components_file_manager_actions_Search_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/file-manager/actions/Search.vue */ "./resources/js/components/file-manager/actions/Search.vue");
/* harmony import */ var _components_file_manager_actions_Sort_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/file-manager/actions/Sort.vue */ "./resources/js/components/file-manager/actions/Sort.vue");
/* harmony import */ var _components_file_manager_actions_View_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/file-manager/actions/View.vue */ "./resources/js/components/file-manager/actions/View.vue");
/* harmony import */ var _components_file_manager_browse_Directory_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/file-manager/browse/Directory.vue */ "./resources/js/components/file-manager/browse/Directory.vue");
/* harmony import */ var _components_file_manager_browse_File_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/file-manager/browse/File.vue */ "./resources/js/components/file-manager/browse/File.vue");
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
    'file-uploader': _components_file_manager_FileUploader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'file-selection': _components_file_manager_FileSelection_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'display-action': _components_file_manager_actions_Display_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'breadcrumb-action': _components_file_manager_actions_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'search-action': _components_file_manager_actions_Search_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'sort-action': _components_file_manager_actions_Sort_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    'view-action': _components_file_manager_actions_View_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    'directory': _components_file_manager_browse_Directory_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    'file': _components_file_manager_browse_File_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  mixins: [__webpack_require__(/*! ../../mixins/fileselector */ "./resources/js/mixins/fileselector.js")["default"], __webpack_require__(/*! ../../mixins/filedragdrop */ "./resources/js/mixins/filedragdrop.js")["default"], __webpack_require__(/*! ../../mixins/filebrowser */ "./resources/js/mixins/filebrowser.js")["default"]],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-manager/FileSelection.vue?vue&type=template&id=61a9fae8&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/file-manager/FileSelection.vue?vue&type=template&id=61a9fae8& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
              "p-button",
              {
                attrs: { theme: "warning" },
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
              "p-button",
              {
                attrs: { theme: "info" },
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
              "p-sortable-list",
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
                    return _c("p-sortable-item", { key: file.id }, [
                      _c("div", { staticClass: "flex items-center py-2" }, [
                        _c(
                          "div",
                          { staticClass: "w-1/12" },
                          [
                            _c(
                              "p-sortable-handle",
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
                              ? _c("p-img", {
                                  attrs: {
                                    src: file.url + "?w=50&h=50&fit=crop",
                                    "background-color": "white",
                                    width: 50,
                                    height: 50
                                  }
                                })
                              : _c("p-img", {
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
                              "p-button",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Field.vue?vue&type=template&id=4625c109&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Asset/Field.vue?vue&type=template&id=4625c109& ***!
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
                "p-button",
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
        "p-modal",
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
                      _c("div", { staticClass: "toolbar__group" }, [
                        _c(
                          "button",
                          {
                            staticClass: "button button--icon",
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
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "toolbar__group" }, [
                        _c("div", { staticClass: "buttons" }, [
                          _c("div", { staticClass: "buttons__group" }, [
                            _c(
                              "button",
                              {
                                staticClass: "button button--icon",
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
                              "button",
                              {
                                directives: [
                                  {
                                    name: "modal",
                                    rawName: "v-modal:new-folder",
                                    arg: "new-folder"
                                  }
                                ],
                                staticClass: "button button--icon"
                              },
                              [
                                _c("fa-icon", {
                                  staticClass: "icon",
                                  attrs: { icon: ["fas", "folder-plus"] }
                                })
                              ],
                              1
                            )
                          ])
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

/***/ "./resources/js/components/file-manager/FileSelection.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/file-manager/FileSelection.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileSelection_vue_vue_type_template_id_61a9fae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileSelection.vue?vue&type=template&id=61a9fae8& */ "./resources/js/components/file-manager/FileSelection.vue?vue&type=template&id=61a9fae8&");
/* harmony import */ var _FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSelection.vue?vue&type=script&lang=js& */ "./resources/js/components/file-manager/FileSelection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileSelection_vue_vue_type_template_id_61a9fae8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileSelection_vue_vue_type_template_id_61a9fae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/file-manager/FileSelection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/file-manager/FileSelection.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/file-manager/FileSelection.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileSelection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-manager/FileSelection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/file-manager/FileSelection.vue?vue&type=template&id=61a9fae8&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/file-manager/FileSelection.vue?vue&type=template&id=61a9fae8& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_template_id_61a9fae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileSelection.vue?vue&type=template&id=61a9fae8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-manager/FileSelection.vue?vue&type=template&id=61a9fae8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_template_id_61a9fae8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_template_id_61a9fae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/fieldtypes/Asset/Field.vue":
/*!*************************************************!*\
  !*** ./resources/js/fieldtypes/Asset/Field.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_4625c109___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=4625c109& */ "./resources/js/fieldtypes/Asset/Field.vue?vue&type=template&id=4625c109&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Asset/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_4625c109___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_4625c109___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Asset/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Asset/Field.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/fieldtypes/Asset/Field.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Asset/Field.vue?vue&type=template&id=4625c109&":
/*!********************************************************************************!*\
  !*** ./resources/js/fieldtypes/Asset/Field.vue?vue&type=template&id=4625c109& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4625c109___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=4625c109& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Field.vue?vue&type=template&id=4625c109&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4625c109___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4625c109___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlP2Y3YzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlPzZiMjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2ZpbGUtbWFuYWdlci9GaWxlU2VsZWN0aW9uLnZ1ZT9mYmFhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2ZpbGUtbWFuYWdlci9GaWxlU2VsZWN0aW9uLnZ1ZT84YmZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWU/ZDlhZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWU/ZTQzMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBO0FBQ0E7QUFDQTtBQUNBLFNBREEsaUJBQ0E7QUFDQTtBQUNBLE9BSEE7QUFLQSxTQUxBLGVBS0EsS0FMQSxFQUtBO0FBQ0E7QUFDQTtBQVBBLEtBREE7QUFXQSxZQVhBLHNCQVdBO0FBQ0E7QUFDQTtBQWJBLEdBREE7QUFpQkE7QUFDQTtBQUNBLGlC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YTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMsZUFBZSxFQUFFO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuUUE7QUFBQTtBQUFBO0FBQUE7QUFBNEY7QUFDM0I7QUFDTDs7O0FBRzVEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW1NLENBQWdCLHlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzIyLmpzP2lkPWUwODYxMGJkZTVhMjc1NmMxNGJjIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiY2FyZCBoLWZ1bGxcIj5cblx0XHQ8ZGl2IHYtaWY9XCJoYXNIZWFkZXJcIiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcC0zXCI+XG5cdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwiJGVtaXQoJ3JlamVjdCcpXCIgdGhlbWU9XCJ3YXJuaW5nXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICd0aW1lcyddXCIgY2xhc3M9XCJtci0yXCI+PC9mYS1pY29uPiBSZWplY3Q8L3AtYnV0dG9uPlxuXHRcdFx0PHAtYnV0dG9uIEBjbGljaz1cIiRlbWl0KCdhY2NlcHQnKVwiIHRoZW1lPVwiaW5mb1wiPkFjY2VwdCA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NoZWNrJ11cIiBjbGFzcz1cIm1sLTJcIj48L2ZhLWljb24+PC9wLWJ1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgdi1pZj1cInNlbGVjdGlvbi5sZW5ndGggPiAwXCI+XG5cdFx0XHQ8cC1zb3J0YWJsZS1saXN0IHYtbW9kZWw9XCJzZWxlY3Rpb25cIiBjbGFzcz1cInNvcnRhYmxlLWxpc3RcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInctZnVsbCBwLTNcIj5cblx0XHRcdFx0XHQ8cC1zb3J0YWJsZS1pdGVtIHYtZm9yPVwiZmlsZSBpbiBzZWxlY3Rpb25cIiA6a2V5PVwiZmlsZS5pZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB5LTJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctMS8xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwLXNvcnRhYmxlLWhhbmRsZSBjbGFzcz1cImN1cnNvci1tb3ZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZmEtaWNvbiBpY29uPVwiZWxsaXBzaXMtdlwiIGNsYXNzPVwiaGFuZGxlIGZhLWZ3IHRleHQtZ3JheS00MDBcIj48L2ZhLWljb24+XG5cdFx0XHRcdFx0XHRcdFx0PC9wLXNvcnRhYmxlLWhhbmRsZT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTMvMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cC1pbWcgdi1pZj1cImZpbGUudHlwZSA9PSAnaW1hZ2UnXCIgOnNyYz1cImZpbGUudXJsICsgJz93PTUwJmg9NTAmZml0PWNyb3AnXCIgYmFja2dyb3VuZC1jb2xvcj1cIndoaXRlXCIgOndpZHRoPVwiNTBcIiA6aGVpZ2h0PVwiNTBcIj48L3AtaW1nPlxuXHRcdFx0XHRcdFx0XHRcdDxwLWltZyB2LWVsc2UgOnNyYz1cIicvdmVuZG9yL2Z1c2lvbi9pbWcvJyArIGZpbGUudHlwZSArICctbGFyZ2Uuc3ZnJ1wiIGJhY2tncm91bmQtY29sb3I9XCJ3aGl0ZVwiIDp3aWR0aD1cIjUwXCIgOmhlaWdodD1cIjUwXCI+PC9wLWltZz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTYvMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2Pnt7IGZpbGUubmFtZSB9fTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctMi8xMiB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAtYnV0dG9uIEBjbGljaz1cInJlbW92ZShmaWxlLmlkKVwiIHRoZW1lPVwiZGFuZ2VyXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICd0cmFzaCddXCI+PC9mYS1pY29uPjwvcC1idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9wLXNvcnRhYmxlLWl0ZW0+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9wLXNvcnRhYmxlLWxpc3Q+XG5cblx0XHRcdDxkaXYgdi1pZj1cImFkZExpbWl0IDw9IDBcIiBjbGFzcz1cInRleHQtc20gaXRhbGljIHRleHQtZGFuZ2VyLTYwMCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRGaWxlIGxpbWl0IHJlYWNoZWRcblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiB2LWVsc2UgY2xhc3M9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC01eGwgdGV4dC1ncmF5LTMwMFwiPlxuXHRcdFx0PGZhLWljb24gOmljb249XCJbJ2ZhcicsICdjb3B5J11cIiBjbGFzcz1cImZhLWZ3IGZhLTN4XCI+PC9mYS1pY29uPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJ0ZXh0LWxnIHB5LTIgdGV4dC1ncmF5LTUwMFwiPlNlbGVjdCBzb21lIGZpbGVzLi4uPC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0c2VsZWN0aW9uOiB7XG5cdFx0XHRcdGdldCgpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGFkZExpbWl0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5saW1pdCAtIHRoaXMuc2VsZWN0aW9uLmxlbmd0aFxuXHRcdFx0fSxcblx0XHR9LFxuXG5cdFx0cHJvcHM6IHtcblx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdHR5cGU6IEFycmF5LFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fSxcblxuXHRcdFx0bGltaXQ6IHtcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0XHRkZWZhdWx0OiBJbmZpbml0eVxuXHRcdFx0fSxcblxuXHRcdFx0aGFzSGVhZGVyOiB7XG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0cmVtb3ZlKGlkKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0aW9uID0gXy5maWx0ZXIodGhpcy5zZWxlY3Rpb24sIChpdGVtKSA9PiB7IHJldHVybiBpdGVtLmlkICE9PSBpZCB9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxsYWJlbCA6Zm9yPVwiZmllbGQuaGFuZGxlXCIgY2xhc3M9XCJmb3JtX19sYWJlbFwiPnt7IGZpZWxkLm5hbWUgfX08L2xhYmVsPlxuXG5cdFx0PGRpdiBjbGFzcz1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidy0xLzJcIj5cblx0XHRcdFx0PHAtYnV0dG9uIDpkaXNhYmxlZD1cInJlcXVlc3RPcGVuXCIgQGNsaWNrPVwib3BlblwiPlxuXHRcdFx0XHRcdDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAncGx1cy1jaXJjbGUnXVwiIGNsYXNzPVwibXItMVwiPjwvZmEtaWNvbj4gTWFuYWdlIEFzc2V0c1xuXHRcdFx0XHQ8L3AtYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxmaWxlLXNlbGVjdGlvblxuXHRcdFx0XHRjbGFzcz1cInctMS8yXCJcblx0XHRcdFx0OmxpbWl0PVwic2VsZWN0aW9uTGltaXRcIlxuXHRcdFx0XHQ6aGFzSGVhZGVyPVwiZmFsc2VcIlxuXHRcdFx0XHR2LW1vZGVsPVwic2VsZWN0ZWRcIj5cblx0XHRcdDwvZmlsZS1zZWxlY3Rpb24+XG5cdFx0PC9kaXY+XG5cblx0XHQ8IS0tIEZpbGUgTWFuYWdlciBNb2RhbCAtLT5cblx0XHQ8cC1tb2RhbCBuYW1lPVwiZmlsZS1tYW5hZ2VyXCIgbm8taGVhZGVyIG5vLWZvb3RlciBleHRyYS1sYXJnZSB2LW1vZGVsPVwibW9kYWxPcGVuXCI+XG5cdFx0XHQ8ZmlsZS11cGxvYWRlciByZWY9XCJ1cGxvYWRlclwiPjwvZmlsZS11cGxvYWRlcj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiIEBkcmFnZW50ZXI9XCJzZXREcm9wem9uZVZpc2libGUodHJ1ZSlcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNpZGUtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGZpbGUtc2VsZWN0aW9uXG5cdFx0XHRcdFx0XHQ6bGltaXQ9XCJzZWxlY3Rpb25MaW1pdFwiXG5cdFx0XHRcdFx0XHRAcmVqZWN0PVwicmVqZWN0XCJcblx0XHRcdFx0XHRcdEBhY2NlcHQ9XCJhY2NlcHRcIlxuXHRcdFx0XHRcdFx0di1tb2RlbD1cInNlbGVjdGlvblwiPlxuXHRcdFx0XHRcdDwvZmlsZS1zZWxlY3Rpb24+XG5cdFx0XHQgICBcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICBcdFx0PGRpdiBjbGFzcz1cInRvb2xiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzcz1cInRvb2xiYXJfX2dyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0taWNvblwiIEBjbGljay5wcmV2ZW50PVwicHVzaFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmEtaWNvbiBjbGFzcz1cImljb25cIiBpY29uPVwiYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCI+PC9mYS1pY29uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIFx0XHRcdDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIFx0XHRcdDxkaXYgY2xhc3M9XCJ0b29sYmFyX19ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidXR0b25zX19ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uXCIgQGNsaWNrLnByZXZlbnQ9XCIkcmVmcy51cGxvYWRlci5vcGVuRFooKVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZhLWljb24gY2xhc3M9XCJpY29uXCIgOmljb249XCJbJ2ZhcycsICd1cGxvYWQnXVwiPjwvZmEtaWNvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uXCIgdi1tb2RhbDpuZXctZm9sZGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZhLWljb24gY2xhc3M9XCJpY29uXCIgOmljb249XCJbJ2ZhcycsICdmb2xkZXItcGx1cyddXCI+PC9mYS1pY29uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzcz1cInRvb2xiYXJfX2dyb3VwIHRvb2xiYXJfX2dyb3VwLS1ncm93XCI+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWFyY2gtYWN0aW9uPjwvc2VhcmNoLWFjdGlvbj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sYmFyX19ncm91cFwiPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFx0PGRpc3BsYXktYWN0aW9uPjwvZGlzcGxheS1hY3Rpb24+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQ8c29ydC1hY3Rpb24+PC9zb3J0LWFjdGlvbj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICBcdDx2aWV3LWFjdGlvbj48L3ZpZXctYWN0aW9uPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB4LTMgcHktMlwiPlxuXHRcdFx0XHRcdFx0XHQ8YnJlYWRjcnVtYi1hY3Rpb24+PC9icmVhZGNydW1iLWFjdGlvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1jb250YWluZXIgc2VsZWN0YWJsZXNcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbGxlcnkgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHBiLTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGlyZWN0b3J5XG5cdFx0XHRcdFx0XHRcdFx0XHR2LWZvcj1cImRpcmVjdG9yeSBpbiBkaXJlY3Rvcmllc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6a2V5PVwiZGlyZWN0b3J5LmlkXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpkaXJlY3Rvcnk9XCJkaXJlY3RvcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OmlzRHJvcHpvbmU9XCJ0cnVlXCJcblx0XHRcdFx0XHRcdFx0XHRcdEBkYmxjbGljaz1cIm5hdmlnYXRlKGRpcmVjdG9yeSlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8L2RpcmVjdG9yeT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbGxlcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZmlsZVxuXHRcdFx0XHRcdFx0XHRcdFx0di1mb3I9XCJmaWxlIGluIGZpbGVzXCJcblx0XHRcdFx0XHRcdFx0XHRcdDprZXk9XCJmaWxlLmlkXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpmaWxlPVwiZmlsZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRAZGJsY2xpY2s9XCJhZGQoZmlsZS5pZClcIj5cblx0XHRcdFx0XHRcdFx0XHQ8L2ZpbGU+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cbiAgICAgICAgICAgIFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wLW1vZGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDxuZXctZm9sZGVyLW1vZGFsPjwvbmV3LWZvbGRlci1tb2RhbD5cbiAgICAgICAgPC9wb3J0YWw+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cblx0aW1wb3J0IEZpbGVVcGxvYWRlciAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWxlLW1hbmFnZXIvRmlsZVVwbG9hZGVyLnZ1ZSdcblx0aW1wb3J0IEZpbGVTZWxlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWxlLW1hbmFnZXIvRmlsZVNlbGVjdGlvbi52dWUnXG5cblx0aW1wb3J0IEJyZWFkY3J1bWJBY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWxlLW1hbmFnZXIvYWN0aW9ucy9CcmVhZGNydW1iLnZ1ZSdcblx0aW1wb3J0IERpc3BsYXlBY3Rpb24gICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWxlLW1hbmFnZXIvYWN0aW9ucy9EaXNwbGF5LnZ1ZSdcblx0aW1wb3J0IFNlYXJjaEFjdGlvbiAgICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWxlLW1hbmFnZXIvYWN0aW9ucy9TZWFyY2gudnVlJ1xuXHRpbXBvcnQgU29ydEFjdGlvbiAgICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZpbGUtbWFuYWdlci9hY3Rpb25zL1NvcnQudnVlJ1xuXHRpbXBvcnQgVmlld0FjdGlvbiAgICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZpbGUtbWFuYWdlci9hY3Rpb25zL1ZpZXcudnVlJ1xuXG5cdGltcG9ydCBEaXJlY3RvcnkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWxlLW1hbmFnZXIvYnJvd3NlL0RpcmVjdG9yeS52dWUnXG5cdGltcG9ydCBGaWxlICAgICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWxlLW1hbmFnZXIvYnJvd3NlL0ZpbGUudnVlJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnYXNzZXQtZmllbGR0eXBlJyxcblxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdCdmaWxlLXVwbG9hZGVyJzogIEZpbGVVcGxvYWRlcixcblx0XHRcdCdmaWxlLXNlbGVjdGlvbic6IEZpbGVTZWxlY3Rpb24sXG5cblx0XHRcdCdkaXNwbGF5LWFjdGlvbic6ICAgIERpc3BsYXlBY3Rpb24sXG5cdFx0XHQnYnJlYWRjcnVtYi1hY3Rpb24nOiBCcmVhZGNydW1iQWN0aW9uLFxuXHRcdFx0J3NlYXJjaC1hY3Rpb24nOiAgICAgU2VhcmNoQWN0aW9uLFxuXHRcdFx0J3NvcnQtYWN0aW9uJzogICAgICAgU29ydEFjdGlvbixcblx0XHRcdCd2aWV3LWFjdGlvbic6ICAgICAgIFZpZXdBY3Rpb24sXG5cblx0XHRcdCdkaXJlY3RvcnknOiBEaXJlY3RvcnksXG5cdFx0XHQnZmlsZSc6ICAgICAgRmlsZSxcblx0XHR9LFxuXG5cdFx0bWl4aW5zOiBbXG5cdFx0XHRyZXF1aXJlKCcuLi8uLi9taXhpbnMvZmlsZXNlbGVjdG9yJykuZGVmYXVsdCxcblx0XHRcdHJlcXVpcmUoJy4uLy4uL21peGlucy9maWxlZHJhZ2Ryb3AnKS5kZWZhdWx0LFxuICAgICAgICAgICAgcmVxdWlyZSgnLi4vLi4vbWl4aW5zL2ZpbGVicm93c2VyJykuZGVmYXVsdCxcbiAgICAgICAgXSxcblxuXHRcdGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXHRyZXF1ZXN0T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBcdG1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBcdHNlbGVjdGlvbjogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cblx0XHRwcm9wczoge1xuXHRcdFx0ZmllbGQ6IHtcblx0XHRcdCAgICB0eXBlOiBPYmplY3QsXG5cdFx0XHQgICAgcmVxdWlyZWQ6IHRydWUsXG5cdFx0XHR9LFxuXG5cdFx0XHR2YWx1ZToge1xuXHRcdFx0XHR0eXBlOiBBcnJheSxcblx0XHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0XHRkZWZhdWx0OiAoKSA9PiBbXSxcblx0XHRcdH0sXG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHRsb2FkaW5nKGlzTG9hZGluZykge1xuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGlzTG9hZGluZykge1xuXHRcdFx0XHRcdFx0dGhpcy5kZXN0cm95U2VsZWN0b3IoKVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxvYWRTZWxlY3Rvcih0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0YWJsZXMnKSlcblxuXHRcdFx0XHRcdFx0aWYgKHRoaXMucmVxdWVzdE9wZW4pIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5tb2RhbE9wZW4gICA9IHRydWVcblx0XHRcdFx0XHRcdFx0dGhpcy5yZXF1ZXN0T3BlbiA9IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcblx0XHRcdHNlbGVjdGVkOiB7XG5cdFx0XHRcdGdldCgpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZSB8fCBbXVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHNlbGVjdGlvbkxpbWl0KCkge1xuXHRcdFx0XHRyZXR1cm4gTnVtYmVyKHRoaXMuZmllbGQuc2V0dGluZ3MubGltaXQpIHx8IEluZmluaXR5XG5cdFx0XHR9LFxuXG5cdFx0XHRhZGRMaW1pdCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VsZWN0aW9uTGltaXQgLSB0aGlzLnNlbGVjdGlvbi5sZW5ndGhcblx0XHRcdH0sXG5cblx0XHRcdHR5cGVSZXN0cmljdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmllbGQuc2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zXG5cdFx0XHR9XG4gICAgICAgIH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcbiAgICAgICAgICAgICAgICBzZXREcm9wem9uZVZpc2libGU6ICdmaWxlbWFuYWdlci9zZXREcm9wem9uZVZpc2libGUnLFxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIGlzVmFsaWRTZWxlY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgXHRyZXR1cm4gdGhpcy50eXBlUmVzdHJpY3Rpb24ubGVuZ3RoID09IDAgfHwgXy5pbmNsdWRlcyh0aGlzLnR5cGVSZXN0cmljdGlvbiwgZmlsZS50eXBlKVxuICAgICAgICAgICAgfSxcblxuXHRcdFx0cHVzaCgpIHtcblx0XHRcdFx0Xy5mb3JFYWNoKHRoaXMuc2VsZWN0ZWRGaWxlcywgKGlkKSA9PiB0aGlzLmFkZChpZCkpXG5cdFx0XHR9LFxuXG5cdFx0XHRhZGQoaWQpIHtcblx0XHRcdFx0aWYgKHRoaXMuYWRkTGltaXQgPiAwKSB7XG5cdFx0XHRcdFx0bGV0IGV4aXN0cyA9IF8uZmluZCh0aGlzLnNlbGVjdGlvbiwgWyAnaWQnLCBpZCBdKVxuXHRcdFx0XHRcdGxldCBmaWxlICAgPSBfLmZpbmQodGhpcy5maWxlcywgWyAnaWQnLCBpZCBdKVxuXG5cdFx0XHRcdFx0aWYgKCEgZXhpc3RzICYmIHRoaXMuaXNWYWxpZFNlbGVjdGlvbihmaWxlKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3Rpb24ucHVzaChmaWxlKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0b3BlbigpIHtcblx0XHRcdFx0dGhpcy5yZXNldCgpXG5cdFx0XHRcdHRoaXMuc2V0Q3VycmVudERpcmVjdG9yeSh0aGlzLmZpZWxkLnNldHRpbmdzLnJvb3RfZGlyZWN0b3J5KVxuICAgICAgICBcdFx0dGhpcy5zZXRSb290RGlyZWN0b3J5KHRoaXMuZmllbGQuc2V0dGluZ3Mucm9vdF9kaXJlY3RvcnkpXG5cdFx0XHRcdHRoaXMuZmV0Y2hGaWxlc0FuZERpcmVjdG9yaWVzKClcblxuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbiA9IFsuLi50aGlzLnNlbGVjdGVkXVxuXHRcdFx0XHR0aGlzLnJlcXVlc3RPcGVuID0gdHJ1ZVxuXHRcdFx0fSxcblxuXHRcdFx0Y2xvc2UoKSB7XG5cdFx0XHRcdHRoaXMucmVzZXQoKVxuXG5cdFx0XHRcdHRoaXMuc2VsZWN0aW9uID0gW11cblx0XHRcdFx0dGhpcy5tb2RhbE9wZW4gPSBmYWxzZVxuXHRcdFx0fSxcblxuXHRcdFx0cmVqZWN0KCkge1xuXHRcdFx0XHR0aGlzLmNsb3NlKClcblx0XHRcdH0sXG5cblx0XHRcdGFjY2VwdCgpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uXG5cdFx0XHRcdHRoaXMuY2xvc2UoKVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRiZWZvcmVEZXN0cm95KCkge1xuXHRcdFx0dGhpcy5yZXNldCgpXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBoLWZ1bGxcIiB9LCBbXG4gICAgX3ZtLmhhc0hlYWRlclxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcC0zXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJ3YXJuaW5nXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwicmVqZWN0XCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRpbWVzXCJdIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgUmVqZWN0XCIpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJhY2NlcHRcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJBY2NlcHQgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjaGVja1wiXSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnNlbGVjdGlvbi5sZW5ndGggPiAwXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicC1zb3J0YWJsZS1saXN0XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzb3J0YWJsZS1saXN0XCIsXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0aW9uID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHAtM1wiIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnNlbGVjdGlvbiwgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwLXNvcnRhYmxlLWl0ZW1cIiwgeyBrZXk6IGZpbGUuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIgcHktMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctMS8xMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1zb3J0YWJsZS1oYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3Vyc29yLW1vdmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhhbmRsZSBmYS1mdyB0ZXh0LWdyYXktNDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJlbGxpcHNpcy12XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0zLzEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUudHlwZSA9PSBcImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogZmlsZS51cmwgKyBcIj93PTUwJmg9NTAmZml0PWNyb3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInAtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi92ZW5kb3IvZnVzaW9uL2ltZy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUudHlwZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLWxhcmdlLnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTYvMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoX3ZtLl9zKGZpbGUubmFtZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctMi8xMiB0ZXh0LXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJkYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlKGZpbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRyYXNoXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uYWRkTGltaXQgPD0gMFxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSBpdGFsaWMgdGV4dC1kYW5nZXItNjAwIHRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRGaWxlIGxpbWl0IHJlYWNoZWRcXG5cXHRcXHRcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC01eGwgdGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBmYS0zeFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXJcIiwgXCJjb3B5XCJdIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbGcgcHktMiB0ZXh0LWdyYXktNTAwXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJTZWxlY3Qgc29tZSBmaWxlcy4uLlwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIsIGF0dHJzOiB7IGZvcjogX3ZtLmZpZWxkLmhhbmRsZSB9IH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSldXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5yZXF1ZXN0T3BlbiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcGVuIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTFcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwicGx1cy1jaXJjbGVcIl0gfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTWFuYWdlIEFzc2V0c1xcblxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImZpbGUtc2VsZWN0aW9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMS8yXCIsXG4gICAgICAgICAgICBhdHRyczogeyBsaW1pdDogX3ZtLnNlbGVjdGlvbkxpbWl0LCBoYXNIZWFkZXI6IGZhbHNlIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicC1tb2RhbFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmlsZS1tYW5hZ2VyXCIsXG4gICAgICAgICAgICBcIm5vLWhlYWRlclwiOiBcIlwiLFxuICAgICAgICAgICAgXCJuby1mb290ZXJcIjogXCJcIixcbiAgICAgICAgICAgIFwiZXh0cmEtbGFyZ2VcIjogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kYWxPcGVuLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0ubW9kYWxPcGVuID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RhbE9wZW5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZmlsZS11cGxvYWRlclwiLCB7IHJlZjogXCJ1cGxvYWRlclwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3dcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBkcmFnZW50ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXREcm9wem9uZVZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaWRlLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJmaWxlLXNlbGVjdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxpbWl0OiBfdm0uc2VsZWN0aW9uTGltaXQgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgcmVqZWN0OiBfdm0ucmVqZWN0LCBhY2NlcHQ6IF92bS5hY2NlcHQgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0aW9uID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvb2xiYXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b29sYmFyX19ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0taWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHVzaCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9vbGJhcl9fZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc19fZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJlZnMudXBsb2FkZXIub3BlbkRaKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInVwbG9hZFwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6bmV3LWZvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcIm5ldy1mb2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0taWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJmb2xkZXItcGx1c1wiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvb2xiYXJfX2dyb3VwIHRvb2xiYXJfX2dyb3VwLS1ncm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNlYXJjaC1hY3Rpb25cIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvb2xiYXJfX2dyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXNwbGF5LWFjdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzb3J0LWFjdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2aWV3LWFjdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcHgtMyBweS0yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiYnJlYWRjcnVtYi1hY3Rpb25cIildLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1jb250YWluZXIgc2VsZWN0YWJsZXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBwYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRpcmVjdG9yaWVzLCBmdW5jdGlvbihkaXJlY3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpcmVjdG9yeVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZGlyZWN0b3J5LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXJlY3Rvcnk6IGRpcmVjdG9yeSwgaXNEcm9wem9uZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubmF2aWdhdGUoZGlyZWN0b3J5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZpbGVzLCBmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJmaWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmaWxlOiBmaWxlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGQoZmlsZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicG9ydGFsXCIsIHsgYXR0cnM6IHsgdG86IFwibW9kYWxzXCIgfSB9LCBbX2MoXCJuZXctZm9sZGVyLW1vZGFsXCIpXSwgMSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjFhOWZhZTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbGVTZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MWE5ZmFlOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MWE5ZmFlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MWE5ZmFlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjFhOWZhZTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjFhOWZhZTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2ZpbGUtbWFuYWdlci9GaWxlU2VsZWN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjFhOWZhZTgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjI1YzEwOSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDYyNWMxMDknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDYyNWMxMDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDYyNWMxMDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjI1YzEwOSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NjI1YzEwOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjI1YzEwOSZcIiJdLCJzb3VyY2VSb290IjoiIn0=