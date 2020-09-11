(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/FilterSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Inbox/FilterSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'filter-sidebar',
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    forms: 'inbox/getForms',
    form: 'inbox/getForm'
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    select: 'inbox/selectForm'
  })), {}, {
    isSelected: function isSelected(form) {
      if (this.form) {
        return this.form.id == form.id;
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Inbox/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ResponseList_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResponseList.vue */ "./resources/js/pages/Inbox/ResponseList.vue");
/* harmony import */ var _ResponseView_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResponseView.vue */ "./resources/js/pages/Inbox/ResponseView.vue");
/* harmony import */ var _FilterSidebar_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FilterSidebar.vue */ "./resources/js/pages/Inbox/FilterSidebar.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: 'Inbox'
      };
    }
  },
  components: {
    'response-list': _ResponseList_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'response-view': _ResponseView_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'filter-sidebar': _FilterSidebar_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])({
    response: 'inbox/getResponse'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])({
    clear: 'inbox/clearResponse'
  })),
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('inbox/fetchForms').then(function (response) {
      if (_store__WEBPACK_IMPORTED_MODULE_1__["default"].getters['inbox/getForms'].length) {
        _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('inbox/selectForm', lodash__WEBPACK_IMPORTED_MODULE_0___default.a.head(_store__WEBPACK_IMPORTED_MODULE_1__["default"].getters['inbox/getForms']));
      }

      next();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/ResponseList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Inbox/ResponseList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'response-list',
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    totalPages: 'inbox/getTotalPages',
    responses: 'inbox/getResponses',
    response: 'inbox/getResponse',
    loading: 'inbox/getLoading'
  })), {}, {
    page: {
      set: function set(page) {
        this.$store.commit('inbox/setPage', page);
      },
      get: function get() {
        return this.$store.getters['inbox/getPage'];
      }
    },
    pageOptions: function pageOptions() {
      var options = [];

      for (var page = 1; page <= this.totalPages; page++) {
        options.push({
          label: page.toString(),
          value: page
        });
      }

      return options;
    }
  }),
  watch: {
    page: function page() {
      this.fetchResponses();
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    prevPage: 'inbox/prevPage',
    nextPage: 'inbox/nextPage',
    firstPage: 'inbox/firstPage',
    lastPage: 'inbox/lastPage',
    jumpPage: 'inbox/jumpPage'
  })), {}, {
    fetchResponses: function fetchResponses() {
      this.$store.dispatch('inbox/fetchResponses');
    },
    select: function select(response) {
      this.$store.dispatch('inbox/selectResponse', response);
    },
    isSelected: function isSelected(response) {
      if (this.response) {
        return this.response.id == response.id;
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/ResponseView.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Inbox/ResponseView.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'response-view',
  mixins: [__webpack_require__(/*! ../../mixins/filehelper */ "./resources/js/mixins/filehelper.js")["default"]],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    response: 'inbox/getResponse',
    fields: 'inbox/getFields'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({}))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/FilterSidebar.vue?vue&type=template&id=0a5ab962&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Inbox/FilterSidebar.vue?vue&type=template&id=0a5ab962& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "inbox__filter-sidebar" }, [
    _c("div", { staticClass: "card h-full" }, [
      _c("div", { staticClass: "card__body" }, [
        _c("div", { staticClass: "list" }, [
          _vm.forms.length == 0
            ? _c("div", { staticClass: "list" }, [
                _c("span", { staticClass: "list--separator pt-0" }, [
                  _vm._v("Inboxes")
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "px-2 text-gray-600 leading-loose" },
                  [_vm._v("No forms available.")]
                )
              ])
            : _c(
                "div",
                { staticClass: "list" },
                [
                  _c("span", { staticClass: "list--separator pt-0" }, [
                    _vm._v("Forms")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.forms, function(form) {
                    return _c(
                      "a",
                      {
                        key: form.handle,
                        staticClass: "list--item leading-loose",
                        class: { "router-link-active": _vm.isSelected(form) },
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.select(form)
                          }
                        }
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "mr-2",
                          attrs: { icon: ["fas", "inbox"], "fixed-width": "" }
                        }),
                        _vm._v(" " + _vm._s(form.name))
                      ],
                      1
                    )
                  })
                ],
                2
              )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/Index.vue?vue&type=template&id=561e1070&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Inbox/Index.vue?vue&type=template&id=561e1070& ***!
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
    "div",
    { staticClass: "h-full max-h-full" },
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [_c("page-title", { attrs: { icon: "inbox" } }, [_vm._v("Inbox")])],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _c("ui-button", { attrs: { to: { name: "forms" } } }, [
            _vm._v("Manage Forms")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.$mq == "sm" && _vm.response.id
        ? _c("div", { staticClass: "row mb-6" }, [
            _c(
              "div",
              { staticClass: "col w-full" },
              [
                _c(
                  "ui-card",
                  { staticClass: "flex items-center justify-between" },
                  [
                    _c(
                      "a",
                      {
                        staticClass:
                          "rounded p-2 hover:bg-gray-100 text-gray-900 border border-gray-300",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.clear($event)
                          }
                        }
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "fa-fw",
                          attrs: { icon: ["fas", "arrow-left"] }
                        })
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row md:h-full" },
        [
          (_vm.$mq == "sm" && !_vm.response.id) || _vm.$mq != "sm"
            ? _c("filter-sidebar")
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "content-container",
              staticStyle: { "margin-bottom": "0 !important" }
            },
            [
              _c(
                "div",
                { staticClass: "card md:h-full flex flex-1" },
                [
                  (_vm.$mq == "sm" && !_vm.response.id) || _vm.$mq != "sm"
                    ? _c("response-list")
                    : _vm._e(),
                  _vm._v(" "),
                  (_vm.$mq == "sm" && _vm.response.id) || _vm.$mq != "sm"
                    ? _c("response-view")
                    : _vm._e()
                ],
                1
              )
            ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/ResponseList.vue?vue&type=template&id=1d6fead1&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Inbox/ResponseList.vue?vue&type=template&id=1d6fead1& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "inbox__response-list" },
    [
      _c(
        "div",
        { staticClass: "inbox__response-list__pagination" },
        [
          _c(
            "a",
            {
              staticClass:
                "text-gray-700 hover:text-gray-900 text-lg m-1 p-3 hover:bg-gray-100 rounded",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.firstPage($event)
                }
              }
            },
            [
              _c("fa-icon", {
                staticClass: "fa-fw",
                attrs: { icon: ["fas", "angle-double-left"] }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "text-gray-700 hover:text-gray-900 text-lg m-1 p-3 hover:bg-gray-100 rounded",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.prevPage($event)
                }
              }
            },
            [
              _c("fa-icon", {
                staticClass: "fa-fw",
                attrs: { icon: ["fas", "angle-left"] }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("ui-select-group", {
            staticClass: "m-0 w-full px-4",
            attrs: {
              label: "Page",
              "hide-label": "",
              name: "page",
              filterable: "",
              options: _vm.pageOptions
            },
            model: {
              value: _vm.page,
              callback: function($$v) {
                _vm.page = $$v
              },
              expression: "page"
            }
          }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "text-gray-700 hover:text-gray-900 text-lg m-1 p-3 hover:bg-gray-100 rounded",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.nextPage($event)
                }
              }
            },
            [
              _c("fa-icon", {
                staticClass: "fa-fw",
                attrs: { icon: ["fas", "angle-right"] }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "text-gray-700 hover:text-gray-900 text-lg m-1 p-3 hover:bg-gray-100 rounded",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.lastPage($event)
                }
              }
            },
            [
              _c("fa-icon", {
                staticClass: "fa-fw",
                attrs: { icon: ["fas", "angle-double-right"] }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.loading
        ? _c(
            "div",
            {
              staticClass:
                "absolute w-full pin-t p-2 text-sm flex justify-center items-center bg-gray-900 text-gray-100 rounded-b"
            },
            [
              _c("fa-icon", {
                staticClass: "fa-spin mr-3",
                attrs: { icon: ["fas", "circle-notch"] }
              }),
              _vm._v(" Loading responses...\n    ")
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.responses, function(response) {
        return _c(
          "a",
          {
            key: response.id,
            staticClass:
              "lg:border-r-4 block hover:bg-gray-100 text-gray-700 hover:text-gray-900",
            class: {
              "border-primary-400": _vm.isSelected(response),
              "border-gray-200": !_vm.isSelected(response)
            },
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.select(response)
              }
            }
          },
          [
            _c("div", { staticClass: "px-4 py-6 border-b border-gray-200" }, [
              _c("div", { staticClass: "flex" }, [
                _c(
                  "div",
                  { staticClass: "mr-3 flex flex-col" },
                  [
                    _c("fa-icon", {
                      staticClass: "mb-2",
                      attrs: { icon: ["far", "star"], "fixed-width": "" }
                    }),
                    _vm._v(" "),
                    _c("fa-icon", {
                      attrs: {
                        icon: ["far", "check-circle"],
                        "fixed-width": ""
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-full" }, [
                  _c(
                    "div",
                    { staticClass: "flex justify-between items-center mb-2" },
                    [
                      _c("b", [
                        _vm._v(_vm._s(response.identifiable_email_address))
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "block text-gray-600 text-sm" },
                        [
                          _vm._v(
                            _vm._s(_vm.$moment(response.created_at).format("L"))
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-gray-800" }, [
                    _vm._v(
                      "\n                        Re: " +
                        _vm._s(response.form.name) +
                        "\n                    "
                    )
                  ])
                ])
              ])
            ])
          ]
        )
      }),
      _vm._v(" "),
      _vm.responses.length == 0 && !_vm.loading
        ? _c(
            "div",
            { staticClass: "text-center p-6 leading-relaxed text-gray-600" },
            [_vm._m(0)]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("\n            This form's inbox is empty."),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("Try checking back at a later time.")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/ResponseView.vue?vue&type=template&id=14821958&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Inbox/ResponseView.vue?vue&type=template&id=14821958& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "leading-none flex-1 flex" }, [
    _vm.response.id
      ? _c(
          "div",
          { staticClass: "w-full" },
          [
            _c(
              "div",
              {
                staticClass:
                  "flex flex-row-reverse border-b py-4 px-6 justify-between items-center",
                staticStyle: { height: "52px" }
              },
              [
                _c("div"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-gray-500 flex items-center" },
                  [
                    _c("fa-icon", {
                      attrs: { icon: ["fas", "server"], "fixed-width": "" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-xs font-mono ml-2" }, [
                      _vm._v(_vm._s(_vm.response.identifiable_ip_address))
                    ])
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c("mq-layout", { attrs: { mq: "sm" } }, [
              _c("div", { staticClass: "border-b p-6 tracking-wide" }, [
                _c("div", { staticClass: "text-lg font-bold" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.response.identifiable_email_address) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mt-3 text-sm" }, [
                  _c("div", { staticClass: "flex mb-1" }, [
                    _c(
                      "div",
                      {
                        staticClass: "text-gray-700",
                        staticStyle: { width: "75px" }
                      },
                      [_vm._v("Regarding")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-grow" }, [
                      _vm._v(_vm._s(_vm.response.form.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex" }, [
                    _c(
                      "div",
                      {
                        staticClass: "text-gray-700",
                        staticStyle: { width: "75px" }
                      },
                      [_vm._v("Date")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-grow" }, [
                      _vm._v(
                        _vm._s(
                          _vm.$moment(_vm.response.created_at).format("LLL")
                        )
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("mq-layout", { attrs: { mq: "md+" } }, [
              _c(
                "div",
                {
                  staticClass:
                    "flex border-b p-6 tracking-wide justify-between items-center"
                },
                [
                  _c("div", { staticClass: "flex flex-col text-lg" }, [
                    _c("b", { staticClass: "mb-2" }, [
                      _vm._v(_vm._s(_vm.response.identifiable_email_address))
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v("Re: " + _vm._s(_vm.response.form.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-sm" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.$moment(_vm.response.created_at).format("LLL")
                        ) +
                        "\n                "
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "p-6 leading-loose" },
              _vm._l(_vm.fields, function(field) {
                return _c(
                  "div",
                  { key: field.handle, staticClass: "form__group" },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "form__label",
                        attrs: { for: field.handle }
                      },
                      [_vm._v(_vm._s(field.name))]
                    ),
                    _vm._v(" "),
                    _c("div", { attrs: { id: field.handle } }, [
                      field.type.id == "file"
                        ? _c(
                            "div",
                            { staticClass: "bg-white shadow rounded-md mt-2" },
                            [
                              _c(
                                "ul",
                                _vm._l(_vm.response[field.handle], function(
                                  file,
                                  index
                                ) {
                                  return _c("li", { key: "file." + index }, [
                                    _c("div", { staticClass: "p-2 sm:px-4" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex items-center justify-between"
                                        },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: "/files/" + file.uuid
                                              }
                                            },
                                            [
                                              file.type == "image"
                                                ? _c("img", {
                                                    staticClass:
                                                      "upload__file--preview max-w-12",
                                                    attrs: {
                                                      src: file.url,
                                                      alt: file.name
                                                    }
                                                  })
                                                : _c("img", {
                                                    staticClass:
                                                      "upload__file--preview max-w-12",
                                                    attrs: {
                                                      src:
                                                        "/vendor/fusion/img/" +
                                                        file.type +
                                                        "-large.svg",
                                                      alt: file.name
                                                    }
                                                  })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("div", {
                                            staticClass: "upload__file--name",
                                            domProps: {
                                              textContent: _vm._s(file.name)
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("div", {
                                            staticClass: "upload__file--size",
                                            domProps: {
                                              textContent: _vm._s(
                                                _vm.filesize(file.bytes)
                                              )
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ])
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        : _c("p", [_vm._v(_vm._s(_vm.response[field.handle]))])
                    ])
                  ]
                )
              }),
              0
            )
          ],
          1
        )
      : _c(
          "div",
          {
            staticClass:
              "h-full flex flex-1 justify-center items-center text-5xl text-gray-300"
          },
          [
            _c("fa-icon", {
              staticClass: "fa-fw fa-3x",
              attrs: { icon: ["far", "envelope"] }
            })
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Inbox/FilterSidebar.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/Inbox/FilterSidebar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterSidebar_vue_vue_type_template_id_0a5ab962___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterSidebar.vue?vue&type=template&id=0a5ab962& */ "./resources/js/pages/Inbox/FilterSidebar.vue?vue&type=template&id=0a5ab962&");
/* harmony import */ var _FilterSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterSidebar.vue?vue&type=script&lang=js& */ "./resources/js/pages/Inbox/FilterSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterSidebar_vue_vue_type_template_id_0a5ab962___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterSidebar_vue_vue_type_template_id_0a5ab962___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Inbox/FilterSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Inbox/FilterSidebar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Inbox/FilterSidebar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/FilterSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Inbox/FilterSidebar.vue?vue&type=template&id=0a5ab962&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Inbox/FilterSidebar.vue?vue&type=template&id=0a5ab962& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSidebar_vue_vue_type_template_id_0a5ab962___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterSidebar.vue?vue&type=template&id=0a5ab962& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/FilterSidebar.vue?vue&type=template&id=0a5ab962&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSidebar_vue_vue_type_template_id_0a5ab962___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSidebar_vue_vue_type_template_id_0a5ab962___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Inbox/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/Inbox/Index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_561e1070___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=561e1070& */ "./resources/js/pages/Inbox/Index.vue?vue&type=template&id=561e1070&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Inbox/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_561e1070___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_561e1070___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Inbox/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Inbox/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Inbox/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Inbox/Index.vue?vue&type=template&id=561e1070&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Inbox/Index.vue?vue&type=template&id=561e1070& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_561e1070___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=561e1070& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/Index.vue?vue&type=template&id=561e1070&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_561e1070___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_561e1070___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Inbox/ResponseList.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/Inbox/ResponseList.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResponseList_vue_vue_type_template_id_1d6fead1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponseList.vue?vue&type=template&id=1d6fead1& */ "./resources/js/pages/Inbox/ResponseList.vue?vue&type=template&id=1d6fead1&");
/* harmony import */ var _ResponseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponseList.vue?vue&type=script&lang=js& */ "./resources/js/pages/Inbox/ResponseList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResponseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResponseList_vue_vue_type_template_id_1d6fead1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResponseList_vue_vue_type_template_id_1d6fead1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Inbox/ResponseList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Inbox/ResponseList.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Inbox/ResponseList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResponseList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/ResponseList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Inbox/ResponseList.vue?vue&type=template&id=1d6fead1&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Inbox/ResponseList.vue?vue&type=template&id=1d6fead1& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponseList_vue_vue_type_template_id_1d6fead1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResponseList.vue?vue&type=template&id=1d6fead1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/ResponseList.vue?vue&type=template&id=1d6fead1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponseList_vue_vue_type_template_id_1d6fead1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponseList_vue_vue_type_template_id_1d6fead1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Inbox/ResponseView.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/Inbox/ResponseView.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResponseView_vue_vue_type_template_id_14821958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponseView.vue?vue&type=template&id=14821958& */ "./resources/js/pages/Inbox/ResponseView.vue?vue&type=template&id=14821958&");
/* harmony import */ var _ResponseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponseView.vue?vue&type=script&lang=js& */ "./resources/js/pages/Inbox/ResponseView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResponseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResponseView_vue_vue_type_template_id_14821958___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResponseView_vue_vue_type_template_id_14821958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Inbox/ResponseView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Inbox/ResponseView.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Inbox/ResponseView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResponseView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/ResponseView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Inbox/ResponseView.vue?vue&type=template&id=14821958&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Inbox/ResponseView.vue?vue&type=template&id=14821958& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponseView_vue_vue_type_template_id_14821958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResponseView.vue?vue&type=template&id=14821958& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Inbox/ResponseView.vue?vue&type=template&id=14821958&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponseView_vue_vue_type_template_id_14821958___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponseView_vue_vue_type_template_id_14821958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0luYm94L0ZpbHRlclNpZGViYXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvSW5ib3gvSW5kZXgudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvSW5ib3gvUmVzcG9uc2VMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0luYm94L1Jlc3BvbnNlVmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0luYm94L0ZpbHRlclNpZGViYXIudnVlPzJmOWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0luYm94L0luZGV4LnZ1ZT82N2Q5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9JbmJveC9SZXNwb25zZUxpc3QudnVlPzc5NmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0luYm94L1Jlc3BvbnNlVmlldy52dWU/MGQwMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvSW5ib3gvRmlsdGVyU2lkZWJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0luYm94L0ZpbHRlclNpZGViYXIudnVlP2FkZDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0luYm94L0ZpbHRlclNpZGViYXIudnVlP2FjOWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0luYm94L0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvSW5ib3gvSW5kZXgudnVlP2NmMTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0luYm94L0luZGV4LnZ1ZT85YjY5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9JbmJveC9SZXNwb25zZUxpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9JbmJveC9SZXNwb25zZUxpc3QudnVlP2EzZTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0luYm94L1Jlc3BvbnNlTGlzdC52dWU/YzE5OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvSW5ib3gvUmVzcG9uc2VWaWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvSW5ib3gvUmVzcG9uc2VWaWV3LnZ1ZT83MmUwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9JbmJveC9SZXNwb25zZVZpZXcudnVlPzZhMjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBRUE7QUFDQSx3QkFEQTtBQUdBLDhCQUNBO0FBQ0EsMkJBREE7QUFFQTtBQUZBLElBREEsQ0FIQTtBQVVBLDJDQUNBO0FBQ0E7QUFEQSxJQURBO0FBS0EsY0FMQSxzQkFLQSxJQUxBLEVBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQVhBO0FBVkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQURBO0FBU0E7QUFDQSw4RUFEQTtBQUVBLDhFQUZBO0FBR0E7QUFIQSxHQVRBO0FBZUEsOEJBQ0E7QUFDQTtBQURBLElBREEsQ0FmQTtBQXFCQSw2QkFDQTtBQUNBO0FBREEsSUFEQSxDQXJCQTtBQTJCQSxrQkEzQkEsNEJBMkJBLEVBM0JBLEVBMkJBLElBM0JBLEVBMkJBLElBM0JBLEVBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQU5BO0FBT0E7QUFuQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBO0FBQUE7QUFBQTtBQUFBO0FBQTJGO0FBQzNCO0FBQ0w7OztBQUczRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxrRkFBTTtBQUNSLEVBQUUsdUZBQU07QUFDUixFQUFFLGdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFrTSxDQUFnQix3UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F0TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzEyLmpzP2lkPTNmYjQxODc2Yzk1ZDQ2Y2Q2NzA4Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJpbmJveF9fZmlsdGVyLXNpZGViYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgaC1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCIgdi1pZj1cImZvcm1zLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3QtLXNlcGFyYXRvciBwdC0wXCI+SW5ib3hlczwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJweC0yIHRleHQtZ3JheS02MDAgbGVhZGluZy1sb29zZVwiPk5vIGZvcm1zIGF2YWlsYWJsZS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCIgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LS1zZXBhcmF0b3IgcHQtMFwiPkZvcm1zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdi1mb3I9XCJmb3JtIGluIGZvcm1zXCIgOmtleT1cImZvcm0uaGFuZGxlXCIgaHJlZj1cIiNcIiBjbGFzcz1cImxpc3QtLWl0ZW0gbGVhZGluZy1sb29zZVwiIDpjbGFzcz1cInsncm91dGVyLWxpbmstYWN0aXZlJzogaXNTZWxlY3RlZChmb3JtKX1cIiBAY2xpY2sucHJldmVudD1cInNlbGVjdChmb3JtKVwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnaW5ib3gnXVwiIGZpeGVkLXdpZHRoIGNsYXNzPVwibXItMlwiPjwvZmEtaWNvbj4ge3sgZm9ybS5uYW1lIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdmaWx0ZXItc2lkZWJhcicsXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgICAgICAgICAgIGZvcm1zOiAnaW5ib3gvZ2V0Rm9ybXMnLFxuICAgICAgICAgICAgICAgIGZvcm06ICdpbmJveC9nZXRGb3JtJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgLi4ubWFwQWN0aW9ucyh7XG4gICAgICAgICAgICAgICAgc2VsZWN0OiAnaW5ib3gvc2VsZWN0Rm9ybSdcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBpc1NlbGVjdGVkKGZvcm0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm0uaWQgPT0gZm9ybS5pZFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIG1heC1oLWZ1bGxcIj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8cGFnZS10aXRsZSBpY29uPVwiaW5ib3hcIj5JbmJveDwvcGFnZS10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDx1aS1idXR0b24gOnRvPVwieyBuYW1lOiAnZm9ybXMnIH1cIj5NYW5hZ2UgRm9ybXM8L3VpLWJ1dHRvbj5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwiJG1xID09ICdzbScgJiYgcmVzcG9uc2UuaWRcIiBjbGFzcz1cInJvdyBtYi02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDx1aS1jYXJkIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJjbGVhclwiIGNsYXNzPVwicm91bmRlZCBwLTIgaG92ZXI6YmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdhcnJvdy1sZWZ0J11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPjwvYT5cbiAgICAgICAgICAgICAgICA8L3VpLWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtZDpoLWZ1bGxcIj5cbiAgICAgICAgICAgIDxmaWx0ZXItc2lkZWJhciB2LWlmPVwiKCRtcSA9PSAnc20nICYmICEgcmVzcG9uc2UuaWQpIHx8ICRtcSAhPSAnc20nXCI+PC9maWx0ZXItc2lkZWJhcj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgbWQ6aC1mdWxsIGZsZXggZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxyZXNwb25zZS1saXN0IHYtaWY9XCIoJG1xID09ICdzbScgJiYgISByZXNwb25zZS5pZCkgfHwgJG1xICE9ICdzbSdcIj48L3Jlc3BvbnNlLWxpc3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgPHJlc3BvbnNlLXZpZXcgdi1pZj1cIigkbXEgPT0gJ3NtJyAmJiByZXNwb25zZS5pZCkgfHwgJG1xICE9ICdzbSdcIj48L3Jlc3BvbnNlLXZpZXc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbiAgICBpbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUnXG4gICAgaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG4gICAgaW1wb3J0IFJlc3BvbnNlTGlzdCBmcm9tICcuL1Jlc3BvbnNlTGlzdC52dWUnXG4gICAgaW1wb3J0IFJlc3BvbnNlVmlldyBmcm9tICcuL1Jlc3BvbnNlVmlldy52dWUnXG4gICAgaW1wb3J0IEZpbHRlclNpZGViYXIgZnJvbSAnLi9GaWx0ZXJTaWRlYmFyLnZ1ZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6ICdJbmJveCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3Jlc3BvbnNlLWxpc3QnOiBSZXNwb25zZUxpc3QsXG4gICAgICAgICAgICAncmVzcG9uc2Utdmlldyc6IFJlc3BvbnNlVmlldyxcbiAgICAgICAgICAgICdmaWx0ZXItc2lkZWJhcic6IEZpbHRlclNpZGViYXIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiAnaW5ib3gvZ2V0UmVzcG9uc2UnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKHtcbiAgICAgICAgICAgICAgICBjbGVhcjogJ2luYm94L2NsZWFyUmVzcG9uc2UnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCgnaW5ib3gvZmV0Y2hGb3JtcycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JlLmdldHRlcnNbJ2luYm94L2dldEZvcm1zJ10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCdpbmJveC9zZWxlY3RGb3JtJywgXy5oZWFkKHN0b3JlLmdldHRlcnNbJ2luYm94L2dldEZvcm1zJ10pKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5leHQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImluYm94X19yZXNwb25zZS1saXN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmJveF9fcmVzcG9uc2UtbGlzdF9fcGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cImZpcnN0UGFnZVwiIGNsYXNzPVwidGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHRleHQtbGcgbS0xIHAtMyBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdhbmdsZS1kb3VibGUtbGVmdCddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj48L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwicHJldlBhZ2VcIiBjbGFzcz1cInRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCB0ZXh0LWxnIG0tMSBwLTMgaG92ZXI6YmctZ3JheS0xMDAgcm91bmRlZFwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnYW5nbGUtbGVmdCddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj48L2E+XG5cbiAgICAgICAgICAgIDx1aS1zZWxlY3QtZ3JvdXAgbGFiZWw9XCJQYWdlXCIgaGlkZS1sYWJlbCBjbGFzcz1cIm0tMCB3LWZ1bGwgcHgtNFwiIG5hbWU9XCJwYWdlXCIgZmlsdGVyYWJsZSB2LW1vZGVsPVwicGFnZVwiIDpvcHRpb25zPVwicGFnZU9wdGlvbnNcIj48L3VpLXNlbGVjdC1ncm91cD5cblxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cIm5leHRQYWdlXCIgY2xhc3M9XCJ0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtZ3JheS05MDAgdGV4dC1sZyBtLTEgcC0zIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWRcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2FuZ2xlLXJpZ2h0J11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPjwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJsYXN0UGFnZVwiIGNsYXNzPVwidGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHRleHQtbGcgbS0xIHAtMyBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdhbmdsZS1kb3VibGUtcmlnaHQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+PC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgdy1mdWxsIHBpbi10IHAtMiB0ZXh0LXNtIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWdyYXktOTAwIHRleHQtZ3JheS0xMDAgcm91bmRlZC1iXCIgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2lyY2xlLW5vdGNoJ11cIiBjbGFzcz1cImZhLXNwaW4gbXItM1wiPjwvZmEtaWNvbj4gTG9hZGluZyByZXNwb25zZXMuLi5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cInNlbGVjdChyZXNwb25zZSlcIiBjbGFzcz1cImxnOmJvcmRlci1yLTQgYmxvY2sgaG92ZXI6YmctZ3JheS0xMDAgdGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCIgdi1mb3I9XCJyZXNwb25zZSBpbiByZXNwb25zZXNcIiA6a2V5PVwicmVzcG9uc2UuaWRcIiA6Y2xhc3M9XCJ7J2JvcmRlci1wcmltYXJ5LTQwMCc6IGlzU2VsZWN0ZWQocmVzcG9uc2UpLCAnYm9yZGVyLWdyYXktMjAwJzogISBpc1NlbGVjdGVkKHJlc3BvbnNlKX1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC00IHB5LTYgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItMyBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFyJywgJ3N0YXInXVwiIGZpeGVkLXdpZHRoIGNsYXNzPVwibWItMlwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXInLCAnY2hlY2stY2lyY2xlJ11cIiBmaXhlZC13aWR0aD48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IHJlc3BvbnNlLmlkZW50aWZpYWJsZV9lbWFpbF9hZGRyZXNzIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdGV4dC1ncmF5LTYwMCB0ZXh0LXNtXCI+e3sgJG1vbWVudChyZXNwb25zZS5jcmVhdGVkX2F0KS5mb3JtYXQoJ0wnKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlOiB7eyByZXNwb25zZS5mb3JtLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwicmVzcG9uc2VzLmxlbmd0aCA9PSAwICYmICEgbG9hZGluZ1wiIGNsYXNzPVwidGV4dC1jZW50ZXIgcC02IGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUaGlzIGZvcm0ncyBpbmJveCBpcyBlbXB0eS48YnI+XG4gICAgICAgICAgICAgICAgPGI+VHJ5IGNoZWNraW5nIGJhY2sgYXQgYSBsYXRlciB0aW1lLjwvYj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbiAgICBpbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAncmVzcG9uc2UtbGlzdCcsXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgICAgICAgICAgIHRvdGFsUGFnZXM6ICdpbmJveC9nZXRUb3RhbFBhZ2VzJyxcbiAgICAgICAgICAgICAgICByZXNwb25zZXM6ICdpbmJveC9nZXRSZXNwb25zZXMnLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiAnaW5ib3gvZ2V0UmVzcG9uc2UnLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdpbmJveC9nZXRMb2FkaW5nJyxcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBwYWdlOiB7XG4gICAgICAgICAgICAgICAgc2V0KHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdpbmJveC9zZXRQYWdlJywgcGFnZSlcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snaW5ib3gvZ2V0UGFnZSddXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcGFnZU9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBbXVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcGFnZSA9IDE7IHBhZ2UgPD0gdGhpcy50b3RhbFBhZ2VzOyBwYWdlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBwYWdlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFnZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaFJlc3BvbnNlcygpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoe1xuICAgICAgICAgICAgICAgIHByZXZQYWdlOiAnaW5ib3gvcHJldlBhZ2UnLFxuICAgICAgICAgICAgICAgIG5leHRQYWdlOiAnaW5ib3gvbmV4dFBhZ2UnLFxuICAgICAgICAgICAgICAgIGZpcnN0UGFnZTogJ2luYm94L2ZpcnN0UGFnZScsXG4gICAgICAgICAgICAgICAgbGFzdFBhZ2U6ICdpbmJveC9sYXN0UGFnZScsXG4gICAgICAgICAgICAgICAganVtcFBhZ2U6ICdpbmJveC9qdW1wUGFnZScsXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgZmV0Y2hSZXNwb25zZXMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2luYm94L2ZldGNoUmVzcG9uc2VzJylcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNlbGVjdChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdpbmJveC9zZWxlY3RSZXNwb25zZScsIHJlc3BvbnNlKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNTZWxlY3RlZChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlLmlkID09IHJlc3BvbnNlLmlkXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJsZWFkaW5nLW5vbmUgZmxleC0xIGZsZXhcIj5cbiAgICAgICAgPGRpdiB2LWlmPVwicmVzcG9uc2UuaWRcIiBjbGFzcz1cInctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3ctcmV2ZXJzZSBib3JkZXItYiBweS00IHB4LTYganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiIHN0eWxlPVwiaGVpZ2h0OiA1MnB4O1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdjaGVjay1jaXJjbGUnXVwiIGZpeGVkLXdpZHRoIGNsYXNzPVwibXItM1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdzdGFyJ11cIiBmaXhlZC13aWR0aCBjbGFzcz1cIm1yLTNcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnaGlzdG9yeSddXCIgZml4ZWQtd2lkdGggY2xhc3M9XCJtci0zXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3RyYXNoLWFsdCddXCIgZml4ZWQtd2lkdGg+PC9mYS1pY29uPiAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnc2VydmVyJ11cIiBmaXhlZC13aWR0aD48L2ZhLWljb24+IDxzcGFuIGNsYXNzPVwidGV4dC14cyBmb250LW1vbm8gbWwtMlwiPnt7IHJlc3BvbnNlLmlkZW50aWZpYWJsZV9pcF9hZGRyZXNzIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxtcS1sYXlvdXQgbXE9XCJzbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItYiBwLTYgdHJhY2tpbmctd2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1sZyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHJlc3BvbnNlLmlkZW50aWZpYWJsZV9lbWFpbF9hZGRyZXNzIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmF5LTcwMFwiIHN0eWxlPVwid2lkdGg6IDc1cHg7XCI+UmVnYXJkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3Jvd1wiPnt7IHJlc3BvbnNlLmZvcm0ubmFtZSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JheS03MDBcIiBzdHlsZT1cIndpZHRoOiA3NXB4O1wiPkRhdGU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93XCI+e3sgJG1vbWVudChyZXNwb25zZS5jcmVhdGVkX2F0KS5mb3JtYXQoJ0xMTCcpIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21xLWxheW91dD5cblxuICAgICAgICAgICAgPG1xLWxheW91dCBtcT1cIm1kK1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGJvcmRlci1iIHAtNiB0cmFja2luZy13aWRlIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3M9XCJtYi0yXCI+e3sgcmVzcG9uc2UuaWRlbnRpZmlhYmxlX2VtYWlsX2FkZHJlc3MgfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SZToge3sgcmVzcG9uc2UuZm9ybS5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgJG1vbWVudChyZXNwb25zZS5jcmVhdGVkX2F0KS5mb3JtYXQoJ0xMTCcpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tcS1sYXlvdXQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTYgbGVhZGluZy1sb29zZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19ncm91cFwiIHYtZm9yPVwiZmllbGQgaW4gZmllbGRzXCIgOmtleT1cImZpZWxkLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj57eyBmaWVsZC5uYW1lIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6aWQ9XCJmaWVsZC5oYW5kbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZmllbGQudHlwZS5pZCA9PSAnZmlsZSdcIiBjbGFzcz1cImJnLXdoaXRlIHNoYWRvdyByb3VuZGVkLW1kIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihmaWxlLCBpbmRleCkgaW4gcmVzcG9uc2VbZmllbGQuaGFuZGxlXVwiIDprZXk9XCJgZmlsZS4ke2luZGV4fWBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTIgc206cHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cIicvZmlsZXMvJyArIGZpbGUudXVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWlmPVwiZmlsZS50eXBlID09ICdpbWFnZSdcIiBjbGFzcz1cInVwbG9hZF9fZmlsZS0tcHJldmlldyBtYXgtdy0xMlwiIDpzcmM9XCJmaWxlLnVybFwiIDphbHQ9XCJmaWxlLm5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHYtZWxzZSBjbGFzcz1cInVwbG9hZF9fZmlsZS0tcHJldmlldyBtYXgtdy0xMlwiIDpzcmM9XCJgL3ZlbmRvci9mdXNpb24vaW1nLyR7ZmlsZS50eXBlfS1sYXJnZS5zdmdgXCIgOmFsdD1cImZpbGUubmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkX19maWxlLS1uYW1lXCIgdi10ZXh0PVwiZmlsZS5uYW1lXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkX19maWxlLS1zaXplXCIgdi10ZXh0PVwiZmlsZXNpemUoZmlsZS5ieXRlcylcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWVsc2U+e3sgcmVzcG9uc2VbZmllbGQuaGFuZGxlXSB9fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIGZsZXggZmxleC0xIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LTV4bCB0ZXh0LWdyYXktMzAwXCIgdi1lbHNlPlxuICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcicsICdlbnZlbG9wZSddXCIgY2xhc3M9XCJmYS1mdyBmYS0zeFwiPjwvZmEtaWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAncmVzcG9uc2UtdmlldycsXG5cbiAgICAgICAgbWl4aW5zOiBbXG4gICAgICAgICAgICByZXF1aXJlKCcuLi8uLi9taXhpbnMvZmlsZWhlbHBlcicpLmRlZmF1bHRcbiAgICAgICAgXSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6ICdpbmJveC9nZXRSZXNwb25zZScsXG4gICAgICAgICAgICAgICAgZmllbGRzOiAnaW5ib3gvZ2V0RmllbGRzJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoe1xuXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmJveF9fZmlsdGVyLXNpZGViYXJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGgtZnVsbFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0XCIgfSwgW1xuICAgICAgICAgIF92bS5mb3Jtcy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC0tc2VwYXJhdG9yIHB0LTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJJbmJveGVzXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJweC0yIHRleHQtZ3JheS02MDAgbGVhZGluZy1sb29zZVwiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTm8gZm9ybXMgYXZhaWxhYmxlLlwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LS1zZXBhcmF0b3IgcHQtMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRm9ybXNcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZm9ybXMsIGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZm9ybS5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwicm91dGVyLWxpbmstYWN0aXZlXCI6IF92bS5pc1NlbGVjdGVkKGZvcm0pIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3QoZm9ybSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJpbmJveFwiXSwgXCJmaXhlZC13aWR0aFwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGZvcm0ubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJoLWZ1bGwgbWF4LWgtZnVsbFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtfYyhcInBhZ2UtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImluYm94XCIgfSB9LCBbX3ZtLl92KFwiSW5ib3hcIildKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktYnV0dG9uXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJmb3Jtc1wiIH0gfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJNYW5hZ2UgRm9ybXNcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS4kbXEgPT0gXCJzbVwiICYmIF92bS5yZXNwb25zZS5pZFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG1iLTZcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ1aS1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdW5kZWQgcC0yIGhvdmVyOmJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2xlYXIoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJhcnJvdy1sZWZ0XCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBtZDpoLWZ1bGxcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgKF92bS4kbXEgPT0gXCJzbVwiICYmICFfdm0ucmVzcG9uc2UuaWQpIHx8IF92bS4kbXEgIT0gXCJzbVwiXG4gICAgICAgICAgICA/IF9jKFwiZmlsdGVyLXNpZGViYXJcIilcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWJvdHRvbVwiOiBcIjAgIWltcG9ydGFudFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkIG1kOmgtZnVsbCBmbGV4IGZsZXgtMVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgKF92bS4kbXEgPT0gXCJzbVwiICYmICFfdm0ucmVzcG9uc2UuaWQpIHx8IF92bS4kbXEgIT0gXCJzbVwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJyZXNwb25zZS1saXN0XCIpXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgKF92bS4kbXEgPT0gXCJzbVwiICYmIF92bS5yZXNwb25zZS5pZCkgfHwgX3ZtLiRtcSAhPSBcInNtXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInJlc3BvbnNlLXZpZXdcIilcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJpbmJveF9fcmVzcG9uc2UtbGlzdFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5ib3hfX3Jlc3BvbnNlLWxpc3RfX3BhZ2luYXRpb25cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJ0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtZ3JheS05MDAgdGV4dC1sZyBtLTEgcC0zIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5maXJzdFBhZ2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImFuZ2xlLWRvdWJsZS1sZWZ0XCJdIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwidGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHRleHQtbGcgbS0xIHAtMyBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJldlBhZ2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImFuZ2xlLWxlZnRcIl0gfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1aS1zZWxlY3QtZ3JvdXBcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS0wIHctZnVsbCBweC00XCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBsYWJlbDogXCJQYWdlXCIsXG4gICAgICAgICAgICAgIFwiaGlkZS1sYWJlbFwiOiBcIlwiLFxuICAgICAgICAgICAgICBuYW1lOiBcInBhZ2VcIixcbiAgICAgICAgICAgICAgZmlsdGVyYWJsZTogXCJcIixcbiAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnBhZ2VPcHRpb25zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnBhZ2UgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwidGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHRleHQtbGcgbS0xIHAtMyBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubmV4dFBhZ2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImFuZ2xlLXJpZ2h0XCJdIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwidGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHRleHQtbGcgbS0xIHAtMyBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubGFzdFBhZ2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImFuZ2xlLWRvdWJsZS1yaWdodFwiXSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubG9hZGluZ1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJhYnNvbHV0ZSB3LWZ1bGwgcGluLXQgcC0yIHRleHQtc20gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctZ3JheS05MDAgdGV4dC1ncmF5LTEwMCByb3VuZGVkLWJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1zcGluIG1yLTNcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjaXJjbGUtbm90Y2hcIl0gfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIExvYWRpbmcgcmVzcG9uc2VzLi4uXFxuICAgIFwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5yZXNwb25zZXMsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwibGc6Ym9yZGVyLXItNCBibG9jayBob3ZlcjpiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtZ3JheS05MDBcIixcbiAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgIFwiYm9yZGVyLXByaW1hcnktNDAwXCI6IF92bS5pc1NlbGVjdGVkKHJlc3BvbnNlKSxcbiAgICAgICAgICAgICAgXCJib3JkZXItZ3JheS0yMDBcIjogIV92bS5pc1NlbGVjdGVkKHJlc3BvbnNlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdChyZXNwb25zZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweC00IHB5LTYgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtci0zIGZsZXggZmxleC1jb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXJcIiwgXCJzdGFyXCJdLCBcImZpeGVkLXdpZHRoXCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogW1wiZmFyXCIsIFwiY2hlY2stY2lyY2xlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmaXhlZC13aWR0aFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhyZXNwb25zZS5pZGVudGlmaWFibGVfZW1haWxfYWRkcmVzcykpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LWdyYXktNjAwIHRleHQtc21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kbW9tZW50KHJlc3BvbnNlLmNyZWF0ZWRfYXQpLmZvcm1hdChcIkxcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyYXktODAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBSZTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHJlc3BvbnNlLmZvcm0ubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucmVzcG9uc2VzLmxlbmd0aCA9PSAwICYmICFfdm0ubG9hZGluZ1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgcC02IGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktNjAwXCIgfSxcbiAgICAgICAgICAgIFtfdm0uX20oMCldXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBUaGlzIGZvcm0ncyBpbmJveCBpcyBlbXB0eS5cIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwiVHJ5IGNoZWNraW5nIGJhY2sgYXQgYSBsYXRlciB0aW1lLlwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVhZGluZy1ub25lIGZsZXgtMSBmbGV4XCIgfSwgW1xuICAgIF92bS5yZXNwb25zZS5pZFxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtcm93LXJldmVyc2UgYm9yZGVyLWIgcHktNCBweC02IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiNTJweFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyYXktNTAwIGZsZXggaXRlbXMtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJzZXJ2ZXJcIl0sIFwiZml4ZWQtd2lkdGhcIjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzIGZvbnQtbW9ubyBtbC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnJlc3BvbnNlLmlkZW50aWZpYWJsZV9pcF9hZGRyZXNzKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibXEtbGF5b3V0XCIsIHsgYXR0cnM6IHsgbXE6IFwic21cIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3JkZXItYiBwLTYgdHJhY2tpbmctd2lkZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbGcgZm9udC1ib2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucmVzcG9uc2UuaWRlbnRpZmlhYmxlX2VtYWlsX2FkZHJlc3MpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0zIHRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggbWItMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyYXktNzAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI3NXB4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlZ2FyZGluZ1wiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4LWdyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucmVzcG9uc2UuZm9ybS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyYXktNzAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI3NXB4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRhdGVcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1ncm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRtb21lbnQoX3ZtLnJlc3BvbnNlLmNyZWF0ZWRfYXQpLmZvcm1hdChcIkxMTFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibXEtbGF5b3V0XCIsIHsgYXR0cnM6IHsgbXE6IFwibWQrXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiZmxleCBib3JkZXItYiBwLTYgdHJhY2tpbmctd2lkZSBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LWNvbCB0ZXh0LWxnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnJlc3BvbnNlLmlkZW50aWZpYWJsZV9lbWFpbF9hZGRyZXNzKSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUmU6IFwiICsgX3ZtLl9zKF92bS5yZXNwb25zZS5mb3JtLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRtb21lbnQoX3ZtLnJlc3BvbnNlLmNyZWF0ZWRfYXQpLmZvcm1hdChcIkxMTFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicC02IGxlYWRpbmctbG9vc2VcIiB9LFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IGZpZWxkLmhhbmRsZSwgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogZmllbGQuaGFuZGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGZpZWxkLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogZmllbGQuaGFuZGxlIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUuaWQgPT0gXCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJnLXdoaXRlIHNoYWRvdyByb3VuZGVkLW1kIG10LTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucmVzcG9uc2VbZmllbGQuaGFuZGxlXSwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCB7IGtleTogXCJmaWxlLlwiICsgaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLTIgc206cHgtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogXCIvZmlsZXMvXCIgKyBmaWxlLnV1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnR5cGUgPT0gXCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBsb2FkX19maWxlLS1wcmV2aWV3IG1heC13LTEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogZmlsZS51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IGZpbGUubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGxvYWRfX2ZpbGUtLXByZXZpZXcgbWF4LXctMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi92ZW5kb3IvZnVzaW9uL2ltZy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUudHlwZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLWxhcmdlLnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBmaWxlLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRfX2ZpbGUtLW5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKGZpbGUubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRfX2ZpbGUtLXNpemVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbGVzaXplKGZpbGUuYnl0ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucmVzcG9uc2VbZmllbGQuaGFuZGxlXSkpXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJoLWZ1bGwgZmxleCBmbGV4LTEganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgZmEtM3hcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFyXCIsIFwiZW52ZWxvcGVcIl0gfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmlsdGVyU2lkZWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGE1YWI5NjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlsdGVyU2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbHRlclNpZGViYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwYTVhYjk2MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYTVhYjk2MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYTVhYjk2MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmlsdGVyU2lkZWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGE1YWI5NjImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGE1YWI5NjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9JbmJveC9GaWx0ZXJTaWRlYmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsdGVyU2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsdGVyU2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsdGVyU2lkZWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGE1YWI5NjImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NjFlMTA3MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTYxZTEwNzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTYxZTEwNzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTYxZTEwNzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NjFlMTA3MCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NjFlMTA3MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL0luYm94L0luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTYxZTEwNzAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Jlc3BvbnNlTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWQ2ZmVhZDEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVzcG9uc2VMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVzcG9uc2VMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWQ2ZmVhZDEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWQ2ZmVhZDEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWQ2ZmVhZDEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Jlc3BvbnNlTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWQ2ZmVhZDEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWQ2ZmVhZDEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9JbmJveC9SZXNwb25zZUxpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXNwb25zZUxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jlc3BvbnNlTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVzcG9uc2VMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZDZmZWFkMSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmVzcG9uc2VWaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDgyMTk1OCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZXNwb25zZVZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZXNwb25zZVZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNDgyMTk1OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNDgyMTk1OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNDgyMTk1OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVzcG9uc2VWaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDgyMTk1OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNDgyMTk1OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL0luYm94L1Jlc3BvbnNlVmlldy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jlc3BvbnNlVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVzcG9uc2VWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXNwb25zZVZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0ODIxOTU4JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==