(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customize.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Customize.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: 'Theme Settings'
      };
    }
  },
  data: function data() {
    return {
      theme: {},
      preview: '',
      url: '',
      hasChanges: false,
      window: 'desktop',
      showControls: true
    };
  },
  computed: {
    hash: function hash() {
      return this.encode(JSON.stringify(this.theme.value));
    },
    previewUrl: function previewUrl() {
      return this.baseUrl + this.url + '?preview=' + this.hash;
    },
    baseUrl: function baseUrl() {
      return '/';
    },
    isDesktop: function isDesktop() {
      return this.window == 'desktop';
    },
    isTablet: function isTablet() {
      return this.window == 'tablet';
    },
    isMobile: function isMobile() {
      return this.window == 'mobile';
    }
  },
  watch: {
    'theme.value': {
      handler: _.debounce(function (value) {
        this.hasChanges = true;
        this.reload();
      }, 500),
      deep: true
    },
    'url': {
      handler: _.debounce(function (value) {
        this.reload();
      }, 500)
    }
  },
  methods: {
    submit: function submit() {
      this.theme.value['_method'] = 'PATCH';
      axios.post("/api/themes/".concat(this.theme.namespace), this.theme.value).then(function () {
        toast('Theme settings have been updated', 'success');
      })["catch"](function (error) {
        toast(error.response.data.message, 'failed');
      });
    },
    encode: function encode(string) {
      return encodeURIComponent(string).replace(/[!'()*]/g, escape);
    },
    reload: function reload() {
      this.preview = this.previewUrl;
    },
    setWindow: function setWindow(device) {
      this.window = device;
    },
    toggleControls: function toggleControls() {
      this.showControls = !this.showControls;
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/theme')]).then(axios.spread(function (theme) {
      next(function (vm) {
        vm.theme = theme.data.data;
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customize.vue?vue&type=template&id=7bb044b4&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Customize.vue?vue&type=template&id=7bb044b4& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "preview" }, [
    _c(
      "div",
      { staticClass: "preview__controls", class: { "w-0": !_vm.showControls } },
      [
        _c(
          "button",
          {
            staticClass: "simple-button show-button p-3",
            class: {
              hidden: _vm.showControls,
              "inline-block": !_vm.showControls
            },
            on: { click: _vm.toggleControls }
          },
          [
            _c("fa-icon", {
              staticClass: "fa-fw",
              attrs: { icon: ["fas", "caret-square-right"] }
            }),
            _vm._v(" Show Controls")
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "controls", class: { hidden: !_vm.showControls } },
          [
            _c(
              "div",
              { staticClass: "controls__header" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "flex items-center px-3 py-2 border-r border-gray-300 leading-none",
                    attrs: { exact: "", to: { name: "dashboard" } }
                  },
                  [
                    _c("fa-icon", {
                      staticClass: "fa-fw",
                      attrs: { icon: ["fas", "times"] }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "px-3 py-3" }, [
                  _c(
                    "button",
                    {
                      staticClass: "button button--primary button--small",
                      attrs: { type: "submit" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.submit($event)
                        }
                      }
                    },
                    [_vm._v("Save")]
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "controls__content" },
              _vm._l(_vm.theme.settings, function(setting, handle) {
                return _c(setting.fieldtype + "-fieldtype", {
                  key: handle,
                  tag: "component",
                  staticClass: "mb-8",
                  attrs: {
                    field: {
                      name: setting.name,
                      handle: handle,
                      help: setting.help,
                      settings: {}
                    }
                  },
                  model: {
                    value: _vm.theme.value[handle],
                    callback: function($$v) {
                      _vm.$set(_vm.theme.value, handle, $$v)
                    },
                    expression: "theme.value[handle]"
                  }
                })
              }),
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "controls__footer" }, [
              _c(
                "button",
                {
                  staticClass: "simple-button p-3",
                  on: { click: _vm.toggleControls }
                },
                [
                  _c("fa-icon", {
                    staticClass: "fa-fw",
                    attrs: { icon: ["fas", "caret-square-left"] }
                  }),
                  _vm._v(" Hide Controls")
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "flex border-l border-gray-300" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "simple-button relative inline-flex items-center px-3 py-2 border-b-4 border-gray-300 hover:border-gray-500",
                    class: {
                      "hover:border-primary-500 border-primary-500":
                        _vm.isDesktop
                    },
                    on: {
                      click: function($event) {
                        return _vm.setWindow("desktop")
                      }
                    }
                  },
                  [
                    _c("fa-icon", {
                      staticClass: "fa-fw",
                      attrs: { icon: ["fas", "desktop"] }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "simple-button relative inline-flex items-center px-3 py-2 border-b-4 border-gray-300 hover:border-gray-500",
                    class: {
                      "hover:border-primary-500 border-primary-500":
                        _vm.isTablet
                    },
                    on: {
                      click: function($event) {
                        return _vm.setWindow("tablet")
                      }
                    }
                  },
                  [
                    _c("fa-icon", {
                      staticClass: "fa-fw",
                      attrs: { icon: ["fas", "tablet-alt"] }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "simple-button relative inline-flex items-center px-3 py-2 border-b-4 border-gray-300 hover:border-gray-500",
                    class: {
                      "hover:border-primary-500 border-primary-500":
                        _vm.isMobile
                    },
                    on: {
                      click: function($event) {
                        return _vm.setWindow("mobile")
                      }
                    }
                  },
                  [
                    _c("fa-icon", {
                      staticClass: "fa-fw",
                      attrs: { icon: ["fas", "mobile-alt"] }
                    })
                  ],
                  1
                )
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "preview__window" }, [
      _c(
        "div",
        { staticClass: "window", class: "window--" + _vm.window },
        [
          _vm.preview
            ? _c("p-frame", { attrs: { src: _vm.preview } })
            : _vm._e()
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Customize.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Customize.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Customize_vue_vue_type_template_id_7bb044b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customize.vue?vue&type=template&id=7bb044b4& */ "./resources/js/views/Customize.vue?vue&type=template&id=7bb044b4&");
/* harmony import */ var _Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customize.vue?vue&type=script&lang=js& */ "./resources/js/views/Customize.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Customize_vue_vue_type_template_id_7bb044b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Customize_vue_vue_type_template_id_7bb044b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Customize.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Customize.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Customize.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Customize.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customize.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Customize.vue?vue&type=template&id=7bb044b4&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Customize.vue?vue&type=template&id=7bb044b4& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_template_id_7bb044b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Customize.vue?vue&type=template&id=7bb044b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customize.vue?vue&type=template&id=7bb044b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_template_id_7bb044b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customize_vue_vue_type_template_id_7bb044b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0N1c3RvbWl6ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0N1c3RvbWl6ZS52dWU/NjNhZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ3VzdG9taXplLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ3VzdG9taXplLnZ1ZT8wNjg5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9DdXN0b21pemUudnVlPzQ5NTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBLGVBREE7QUFFQSxpQkFGQTtBQUdBLGFBSEE7QUFJQSx1QkFKQTtBQUtBLHVCQUxBO0FBTUE7QUFOQTtBQVFBLEdBbEJBO0FBb0JBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLGNBTEEsd0JBS0E7QUFDQTtBQUNBLEtBUEE7QUFTQSxXQVRBLHFCQVNBO0FBQ0E7QUFDQSxLQVhBO0FBYUEsYUFiQSx1QkFhQTtBQUNBO0FBQ0EsS0FmQTtBQWlCQSxZQWpCQSxzQkFpQkE7QUFDQTtBQUNBLEtBbkJBO0FBcUJBLFlBckJBLHNCQXFCQTtBQUNBO0FBQ0E7QUF2QkEsR0FwQkE7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsRUFHQSxHQUhBLENBREE7QUFNQTtBQU5BLEtBREE7QUFVQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQURBO0FBVkEsR0E5Q0E7QUErREE7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsT0FGQSxXQUdB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QUFTLG1CQUFtQixFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwTkE7QUFBQTtBQUFBO0FBQUE7QUFBd0Y7QUFDM0I7QUFDTDs7O0FBR3hEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXlMLENBQWdCLHFQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTdNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvNzcuanM/aWQ9ZWYyYTNlZjU0NzhjNjU4NzU3NDkiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInByZXZpZXdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdfX2NvbnRyb2xzXCIgOmNsYXNzPVwieyd3LTAnOiAhc2hvd0NvbnRyb2xzfVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVDb250cm9sc1wiIGNsYXNzPVwic2ltcGxlLWJ1dHRvbiBzaG93LWJ1dHRvbiBwLTNcIiA6Y2xhc3M9XCJ7J2hpZGRlbic6IHNob3dDb250cm9scywgJ2lubGluZS1ibG9jayc6ICFzaG93Q29udHJvbHN9XCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdjYXJldC1zcXVhcmUtcmlnaHQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+IFNob3cgQ29udHJvbHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiIDpjbGFzcz1cInsnaGlkZGVuJzogIXNob3dDb250cm9sc31cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgOnRvPVwieyBuYW1lOiAnZGFzaGJvYXJkJyB9XCIgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLXIgYm9yZGVyLWdyYXktMzAwIGxlYWRpbmctbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICd0aW1lcyddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMyBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBidXR0b24tLXNtYWxsXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc19fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihzZXR0aW5nLCBoYW5kbGUpIGluIHRoZW1lLnNldHRpbmdzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0aGVtZS52YWx1ZVtoYW5kbGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJoYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmlzPVwic2V0dGluZy5maWVsZHR5cGUgKyAnLWZpZWxkdHlwZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHNldHRpbmcubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwOiBzZXR0aW5nLmhlbHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLThcIlxuICAgICAgICAgICAgICAgICAgICA+PC9jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNfX2Zvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInRvZ2dsZUNvbnRyb2xzXCIgY2xhc3M9XCJzaW1wbGUtYnV0dG9uIHAtM1wiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2FyZXQtc3F1YXJlLWxlZnQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+IEhpZGUgQ29udHJvbHM8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBib3JkZXItbCBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2V0V2luZG93KCdkZXNrdG9wJylcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gcmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItYi00IGJvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItZ3JheS01MDBcIiA6Y2xhc3M9XCJ7J2hvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDAnOiBpc0Rlc2t0b3B9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdkZXNrdG9wJ11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2V0V2luZG93KCd0YWJsZXQnKVwiIGNsYXNzPVwic2ltcGxlLWJ1dHRvbiByZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1iLTQgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMFwiIDpjbGFzcz1cInsnaG92ZXI6Ym9yZGVyLXByaW1hcnktNTAwIGJvcmRlci1wcmltYXJ5LTUwMCc6IGlzVGFibGV0fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndGFibGV0LWFsdCddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNldFdpbmRvdygnbW9iaWxlJylcIiBjbGFzcz1cInNpbXBsZS1idXR0b24gcmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItYi00IGJvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItZ3JheS01MDBcIiA6Y2xhc3M9XCJ7J2hvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDAnOiBpc01vYmlsZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ21vYmlsZS1hbHQnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdfX3dpbmRvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpbmRvd1wiIDpjbGFzcz1cIid3aW5kb3ctLScgKyB3aW5kb3dcIj5cbiAgICAgICAgICAgICAgICA8cC1mcmFtZVxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwicHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgIDpzcmM9XCJwcmV2aWV3XCJcbiAgICAgICAgICAgICAgICA+PC9wLWZyYW1lPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiAnVGhlbWUgU2V0dGluZ3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRoZW1lOiB7fSxcbiAgICAgICAgICAgICAgICBwcmV2aWV3OiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgIGhhc0NoYW5nZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdpbmRvdzogJ2Rlc2t0b3AnLFxuICAgICAgICAgICAgICAgIHNob3dDb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaGFzaCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGUoSlNPTi5zdHJpbmdpZnkodGhpcy50aGVtZS52YWx1ZSkpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBwcmV2aWV3VXJsKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmwgKyB0aGlzLnVybCArICc/cHJldmlldz0nICsgdGhpcy5oYXNoXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBiYXNlVXJsKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnLydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzRGVza3RvcCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aW5kb3cgPT0gJ2Rlc2t0b3AnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc1RhYmxldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aW5kb3cgPT0gJ3RhYmxldCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzTW9iaWxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndpbmRvdyA9PSAnbW9iaWxlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJ3RoZW1lLnZhbHVlJzoge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6IF8uZGVib3VuY2UoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWxvYWQoKVxuICAgICAgICAgICAgICAgIH0sIDUwMCksXG5cbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAndXJsJzoge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6IF8uZGVib3VuY2UoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWxvYWQoKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbWUudmFsdWVbJ19tZXRob2QnXSA9ICdQQVRDSCdcblxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYC9hcGkvdGhlbWVzLyR7dGhpcy50aGVtZS5uYW1lc3BhY2V9YCwgdGhpcy50aGVtZS52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdUaGVtZSBzZXR0aW5ncyBoYXZlIGJlZW4gdXBkYXRlZCcsICdzdWNjZXNzJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZW5jb2RlKHN0cmluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nKS5yZXBsYWNlKC9bIScoKSpdL2csIGVzY2FwZSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZWxvYWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3ID0gdGhpcy5wcmV2aWV3VXJsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXRXaW5kb3coZGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aW5kb3cgPSBkZXZpY2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHRvZ2dsZUNvbnRyb2xzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzID0gIXRoaXMuc2hvd0NvbnRyb2xzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgYXhpb3MuYWxsKFtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGhlbWUnKSxcbiAgICAgICAgICAgIF0pLnRoZW4oYXhpb3Muc3ByZWFkKGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICAgICAgICAgIG5leHQoZnVuY3Rpb24odm0pIHtcbiAgICAgICAgICAgICAgICAgICAgdm0udGhlbWUgPSB0aGVtZS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByZXZpZXdcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3X19jb250cm9sc1wiLCBjbGFzczogeyBcInctMFwiOiAhX3ZtLnNob3dDb250cm9scyB9IH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2ltcGxlLWJ1dHRvbiBzaG93LWJ1dHRvbiBwLTNcIixcbiAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgIGhpZGRlbjogX3ZtLnNob3dDb250cm9scyxcbiAgICAgICAgICAgICAgXCJpbmxpbmUtYmxvY2tcIjogIV92bS5zaG93Q29udHJvbHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvZ2dsZUNvbnRyb2xzIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNhcmV0LXNxdWFyZS1yaWdodFwiXSB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBTaG93IENvbnRyb2xzXCIpXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250cm9sc1wiLCBjbGFzczogeyBoaWRkZW46ICFfdm0uc2hvd0NvbnRyb2xzIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250cm9sc19faGVhZGVyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItciBib3JkZXItZ3JheS0zMDAgbGVhZGluZy1ub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGV4YWN0OiBcIlwiLCB0bzogeyBuYW1lOiBcImRhc2hib2FyZFwiIH0gfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRpbWVzXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHgtMyBweS0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IGJ1dHRvbi0tc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250cm9sc19fY29udGVudFwiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udGhlbWUuc2V0dGluZ3MsIGZ1bmN0aW9uKHNldHRpbmcsIGhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhzZXR0aW5nLmZpZWxkdHlwZSArIFwiLWZpZWxkdHlwZVwiLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLThcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogc2V0dGluZy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IHNldHRpbmcuaGVscCxcbiAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge31cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGhlbWUudmFsdWVbaGFuZGxlXSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS50aGVtZS52YWx1ZSwgaGFuZGxlLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGhlbWUudmFsdWVbaGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sc19fZm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpbXBsZS1idXR0b24gcC0zXCIsXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvZ2dsZUNvbnRyb2xzIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNhcmV0LXNxdWFyZS1sZWZ0XCJdIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEhpZGUgQ29udHJvbHNcIilcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGJvcmRlci1sIGJvcmRlci1ncmF5LTMwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwic2ltcGxlLWJ1dHRvbiByZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1iLTQgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiaG92ZXI6Ym9yZGVyLXByaW1hcnktNTAwIGJvcmRlci1wcmltYXJ5LTUwMFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzRGVza3RvcFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0V2luZG93KFwiZGVza3RvcFwiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImRlc2t0b3BcIl0gfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcInNpbXBsZS1idXR0b24gcmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXItYi00IGJvcmRlci1ncmF5LTMwMCBob3Zlcjpib3JkZXItZ3JheS01MDBcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImhvdmVyOmJvcmRlci1wcmltYXJ5LTUwMCBib3JkZXItcHJpbWFyeS01MDBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1RhYmxldFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0V2luZG93KFwidGFibGV0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGFibGV0LWFsdFwiXSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwic2ltcGxlLWJ1dHRvbiByZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1iLTQgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiaG92ZXI6Ym9yZGVyLXByaW1hcnktNTAwIGJvcmRlci1wcmltYXJ5LTUwMFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzTW9iaWxlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXRXaW5kb3coXCJtb2JpbGVcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJtb2JpbGUtYWx0XCJdIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3X193aW5kb3dcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3aW5kb3dcIiwgY2xhc3M6IFwid2luZG93LS1cIiArIF92bS53aW5kb3cgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5wcmV2aWV3XG4gICAgICAgICAgICA/IF9jKFwicC1mcmFtZVwiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLnByZXZpZXcgfSB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2JiMDQ0YjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ3VzdG9taXplLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ3VzdG9taXplLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2JiMDQ0YjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2JiMDQ0YjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2JiMDQ0YjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2JiMDQ0YjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2JiMDQ0YjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9DdXN0b21pemUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DdXN0b21pemUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0N1c3RvbWl6ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3VzdG9taXplLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmIwNDRiNCZcIiJdLCJzb3VyY2VSb290IjoiIn0=