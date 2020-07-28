(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SEO/Insight.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SEO/Insight.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        inner: 'Insight'
      };
    }
  },
  data: function data() {
    return {
      isValid: null,
      popular: [],
      browsers: []
    };
  },
  methods: {
    determineBrowserIcon: function determineBrowserIcon(browser) {
      var map = {
        'Android Webview': 'android',
        'Chrome': 'chrome',
        'Edge': 'edge',
        'Firefox': 'firefox',
        'Internet Explorer': 'internet-explorer',
        'Opera': 'opera',
        'Safari': 'safari'
      };
      return map[browser] || 'default';
    }
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/insights/check').then(function (response) {
      _this.isValid = response.data.status === 'OK';

      if (_this.isValid) {
        axios.all([axios.get('/api/insights/popular'), axios.get('/api/insights/browsers')]).then(axios.spread(function (popular, browsers) {
          this.popular = popular.data.data;
          this.browsers = _.map(browsers.data.data, function (row) {
            return {
              browser: row.browser,
              sessions: row.sessions,
              icon: this.determineBrowserIcon(row.browser)
            };
          }.bind(this));
        }.bind(_this)))["catch"](function (response) {
          toast(response.data.message, 'failed');
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SEO/Insight.vue?vue&type=template&id=78e95c66&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SEO/Insight.vue?vue&type=template&id=78e95c66& ***!
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
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("app-title", { attrs: { icon: "chart-bar" } }, [_vm._v("Insight")])
        ],
        1
      ),
      _vm._v(" "),
      _vm.isValid === null
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col w-full" }, [
              _c("div", { staticClass: "card" }, [
                _vm.isValid === null
                  ? _c(
                      "div",
                      { staticClass: "card__body text-center" },
                      [
                        _c("fa-icon", {
                          staticClass: "fa-spin mr-3",
                          attrs: { icon: ["fas", "circle-notch"] }
                        }),
                        _vm._v(" Loading overview...\n                ")
                      ],
                      1
                    )
                  : _vm._e()
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.isValid === false
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col w-full" }, [
              _c("div", { staticClass: "card" }, [
                _vm.isValid === false
                  ? _c(
                      "div",
                      { staticClass: "card__body text-center" },
                      [
                        _c(
                          "p",
                          [
                            _vm._v(
                              "Configure your Google Analytic settings to gain insight about your website "
                            ),
                            _c("fa-icon", {
                              staticClass: "text-emoji",
                              attrs: { icon: ["fas", "hand-peace"] }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "button items-center",
                            attrs: { to: "/settings/google_analytics#insights" }
                          },
                          [
                            _c("fa-icon", {
                              staticClass: "mr-2 text-sm",
                              attrs: { icon: ["fas", "cog"] }
                            }),
                            _vm._v(" Go to settings")
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.isValid ? _c("analytics-overview") : _vm._e(),
      _vm._v(" "),
      _vm.isValid
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col w-full md:w-1/2 mb-6" }, [
              _c("div", { staticClass: "table__wrapper" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("table", { staticClass: "table" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.popular, function(page) {
                      return _c("tr", { key: page.url }, [
                        _c("td", [
                          _c("span", { staticClass: "column__label" }, [
                            _vm._v("Page")
                          ]),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(page.url) +
                                "\n                                "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "column__stat actions" }, [
                          _c(
                            "a",
                            {
                              staticClass:
                                "text-gray-800 hover:text-gray-900 mr-4",
                              attrs: { href: page.url, target: "_blank" }
                            },
                            [
                              _c("fa-icon", {
                                attrs: {
                                  icon: ["fas", "arrow-alt-circle-right"]
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "column__stat" }, [
                          _c("span", { staticClass: "column__label" }, [
                            _vm._v("Views")
                          ]),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(page.pageViews))])
                        ])
                      ])
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col w-full md:w-1/2 mb-6" }, [
              _c("div", { staticClass: "table__wrapper" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("table", { staticClass: "table" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.browsers, function(browser) {
                      return _c("tr", { key: browser.browser }, [
                        _c("td", [
                          _c("span", { staticClass: "column__label" }, [
                            _vm._v("Browser")
                          ]),
                          _vm._v(" "),
                          _c("span", [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "text-gray-800 hover:text-gray-900 mr-2"
                              },
                              [
                                browser.icon == "default"
                                  ? _c("fa-icon", {
                                      staticClass: "fa-fw",
                                      attrs: { icon: ["fas", "globe"] }
                                    })
                                  : _c("fa-icon", {
                                      staticClass: "fa-fw",
                                      attrs: { icon: ["fab", browser.icon] }
                                    })
                              ],
                              1
                            ),
                            _vm._v(
                              "\n\n                                    " +
                                _vm._s(browser.browser) +
                                "\n                                "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "column__stat" }, [
                          _c("span", { staticClass: "column__label" }, [
                            _vm._v("Sessions")
                          ]),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(browser.sessions))])
                        ])
                      ])
                    }),
                    0
                  )
                ])
              ])
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card__header" }, [
      _c("h3", { staticClass: "card__title" }, [_vm._v("Popular Pages")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Page")]),
        _vm._v(" "),
        _c("th", { staticClass: "w-10" }),
        _vm._v(" "),
        _c("th", { staticClass: "column__stat" }, [_vm._v("Views")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card__header" }, [
      _c("h3", { staticClass: "card__title" }, [_vm._v("Browsers")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Browser")]),
        _vm._v(" "),
        _c("th", { staticClass: "column__stat" }, [_vm._v("Sessions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/SEO/Insight.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/SEO/Insight.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Insight_vue_vue_type_template_id_78e95c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Insight.vue?vue&type=template&id=78e95c66& */ "./resources/js/pages/SEO/Insight.vue?vue&type=template&id=78e95c66&");
/* harmony import */ var _Insight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Insight.vue?vue&type=script&lang=js& */ "./resources/js/pages/SEO/Insight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Insight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Insight_vue_vue_type_template_id_78e95c66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Insight_vue_vue_type_template_id_78e95c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/SEO/Insight.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/SEO/Insight.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/SEO/Insight.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Insight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Insight.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SEO/Insight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Insight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/SEO/Insight.vue?vue&type=template&id=78e95c66&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/SEO/Insight.vue?vue&type=template&id=78e95c66& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Insight_vue_vue_type_template_id_78e95c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Insight.vue?vue&type=template&id=78e95c66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SEO/Insight.vue?vue&type=template&id=78e95c66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Insight_vue_vue_type_template_id_78e95c66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Insight_vue_vue_type_template_id_78e95c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1NFTy9JbnNpZ2h0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvU0VPL0luc2lnaHQudnVlP2U4NWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1NFTy9JbnNpZ2h0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvU0VPL0luc2lnaHQudnVlP2QwMDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1NFTy9JbnNpZ2h0LnZ1ZT9kZjVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUhBO0FBRUE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLGlCQUZBO0FBR0E7QUFIQTtBQUtBLEdBZkE7QUFpQkE7QUFDQSx3QkFEQSxnQ0FDQSxPQURBLEVBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUEsMEJBRkE7QUFHQSxzQkFIQTtBQUlBLDRCQUpBO0FBS0EsZ0RBTEE7QUFNQSx3QkFOQTtBQU9BO0FBUEE7QUFVQTtBQUNBO0FBYkEsR0FqQkE7QUFpQ0EsU0FqQ0EscUJBaUNBO0FBQUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUNBLGtDQURBLEVBRUEsbUNBRkEsR0FHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FEQTtBQUVBLG9DQUZBO0FBR0E7QUFIQTtBQUtBLFdBTkEsQ0FNQSxJQU5BLENBTUEsSUFOQTtBQU9BLFNBVEEsQ0FTQSxJQVRBLENBU0EsS0FUQSxFQUhBLFdBYUE7QUFD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QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQSxrQkFBa0IsOEJBQThCO0FBQ2hEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BELGdCQUFnQiw2QkFBNkI7QUFDN0M7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4QkFBOEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqUUE7QUFBQTtBQUFBO0FBQUE7QUFBc0Y7QUFDM0I7QUFDTDs7O0FBR3REO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxrRkFBTTtBQUNSLEVBQUUsMkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTZMLENBQWdCLG1QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvMTA1LmpzP2lkPTVmZjkxY2M5ZTZhOTYwNGZiNGY4Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGFwcC10aXRsZSBpY29uPVwiY2hhcnQtYmFyXCI+SW5zaWdodDwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cImlzVmFsaWQgPT09IG51bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHkgdGV4dC1jZW50ZXJcIiB2LWlmPVwiaXNWYWxpZCA9PT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdjaXJjbGUtbm90Y2gnXVwiIGNsYXNzPVwiZmEtc3BpbiBtci0zXCI+PC9mYS1pY29uPiBMb2FkaW5nIG92ZXJ2aWV3Li4uXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiaXNWYWxpZCA9PT0gZmFsc2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHkgdGV4dC1jZW50ZXJcIiB2LWlmPVwiaXNWYWxpZCA9PT0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbmZpZ3VyZSB5b3VyIEdvb2dsZSBBbmFseXRpYyBzZXR0aW5ncyB0byBnYWluIGluc2lnaHQgYWJvdXQgeW91ciB3ZWJzaXRlIDxmYS1pY29uIGNsYXNzPVwidGV4dC1lbW9qaVwiIDppY29uPVwiWydmYXMnLCAnaGFuZC1wZWFjZSddXCI+PC9mYS1pY29uPjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwiYnV0dG9uIGl0ZW1zLWNlbnRlclwiIHRvPVwiL3NldHRpbmdzL2dvb2dsZV9hbmFseXRpY3MjaW5zaWdodHNcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NvZyddXCIgY2xhc3M9XCJtci0yIHRleHQtc21cIj48L2ZhLWljb24+IEdvIHRvIHNldHRpbmdzPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGFuYWx5dGljcy1vdmVydmlldyB2LWlmPVwiaXNWYWxpZFwiPjwvYW5hbHl0aWNzLW92ZXJ2aWV3PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiaXNWYWxpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgbWQ6dy0xLzIgbWItNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkX190aXRsZVwiPlBvcHVsYXIgUGFnZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBhZ2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ3LTEwXCI+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiY29sdW1uX19zdGF0XCI+Vmlld3M8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwicGFnZSBpbiBwb3B1bGFyXCIgOmtleT1cInBhZ2UudXJsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uX19sYWJlbFwiPlBhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwYWdlLnVybCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbHVtbl9fc3RhdCBhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInBhZ2UudXJsXCIgY2xhc3M9XCJ0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS05MDAgbXItNFwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnYXJyb3ctYWx0LWNpcmNsZS1yaWdodCddXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbHVtbl9fc3RhdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW5fX2xhYmVsXCI+Vmlld3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBwYWdlLnBhZ2VWaWV3cyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbCBtZDp3LTEvMiBtYi02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX193cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmRfX3RpdGxlXCI+QnJvd3NlcnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkJyb3dzZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJjb2x1bW5fX3N0YXRcIj5TZXNzaW9uczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJicm93c2VyIGluIGJyb3dzZXJzXCIgOmtleT1cImJyb3dzZXIuYnJvd3NlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbl9fbGFiZWxcIj5Ccm93c2VyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS05MDAgbXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiB2LWlmPVwiYnJvd3Nlci5pY29uID09ICdkZWZhdWx0J1wiIDppY29uPVwiWydmYXMnLCAnZ2xvYmUnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIHYtZWxzZSA6aWNvbj1cIlsnZmFiJywgYnJvd3Nlci5pY29uXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgYnJvd3Nlci5icm93c2VyIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY29sdW1uX19zdGF0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbl9fbGFiZWxcIj5TZXNzaW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGJyb3dzZXIuc2Vzc2lvbnMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6ICdJbnNpZ2h0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiBudWxsLFxuICAgICAgICAgICAgICAgIHBvcHVsYXI6IFtdLFxuICAgICAgICAgICAgICAgIGJyb3dzZXJzOiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBkZXRlcm1pbmVCcm93c2VySWNvbihicm93c2VyKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1hcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0FuZHJvaWQgV2Vidmlldyc6ICdhbmRyb2lkJyxcbiAgICAgICAgICAgICAgICAgICAgJ0Nocm9tZSc6ICdjaHJvbWUnLFxuICAgICAgICAgICAgICAgICAgICAnRWRnZSc6ICdlZGdlJyxcbiAgICAgICAgICAgICAgICAgICAgJ0ZpcmVmb3gnOiAnZmlyZWZveCcsXG4gICAgICAgICAgICAgICAgICAgICdJbnRlcm5ldCBFeHBsb3Jlcic6ICdpbnRlcm5ldC1leHBsb3JlcicsXG4gICAgICAgICAgICAgICAgICAgICdPcGVyYSc6ICdvcGVyYScsXG4gICAgICAgICAgICAgICAgICAgICdTYWZhcmknOiAnc2FmYXJpJyxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwW2Jyb3dzZXJdIHx8ICdkZWZhdWx0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2luc2lnaHRzL2NoZWNrJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSByZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ09LJ1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2luc2lnaHRzL3BvcHVsYXInKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9pbnNpZ2h0cy9icm93c2VycycpLFxuICAgICAgICAgICAgICAgICAgICBdKS50aGVuKGF4aW9zLnNwcmVhZChmdW5jdGlvbiAocG9wdWxhciwgYnJvd3NlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhciA9IHBvcHVsYXIuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb3dzZXJzID0gXy5tYXAoYnJvd3NlcnMuZGF0YS5kYXRhLCBmdW5jdGlvbihyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicm93c2VyOiByb3cuYnJvd3NlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbnM6IHJvdy5zZXNzaW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogdGhpcy5kZXRlcm1pbmVCcm93c2VySWNvbihyb3cuYnJvd3NlciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJjaGFydC1iYXJcIiB9IH0sIFtfdm0uX3YoXCJJbnNpZ2h0XCIpXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNWYWxpZCA9PT0gbnVsbFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLmlzVmFsaWQgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHkgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLXNwaW4gbXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjaXJjbGUtbm90Y2hcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTG9hZGluZyBvdmVydmlldy4uLlxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pc1ZhbGlkID09PSBmYWxzZVxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLmlzVmFsaWQgPT09IGZhbHNlXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5IHRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbmZpZ3VyZSB5b3VyIEdvb2dsZSBBbmFseXRpYyBzZXR0aW5ncyB0byBnYWluIGluc2lnaHQgYWJvdXQgeW91ciB3ZWJzaXRlIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1lbW9qaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiaGFuZC1wZWFjZVwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9zZXR0aW5ncy9nb29nbGVfYW5hbHl0aWNzI2luc2lnaHRzXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTIgdGV4dC1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY29nXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgR28gdG8gc2V0dGluZ3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmlzVmFsaWQgPyBfYyhcImFuYWx5dGljcy1vdmVydmlld1wiKSA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pc1ZhbGlkXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgbWQ6dy0xLzIgbWItNlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZV9fd3JhcHBlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wb3B1bGFyLCBmdW5jdGlvbihwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IHBhZ2UudXJsIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5fX2xhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlBhZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwYWdlLnVybCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uX19zdGF0IGFjdGlvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBtci00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBwYWdlLnVybCwgdGFyZ2V0OiBcIl9ibGFua1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogW1wiZmFzXCIsIFwiYXJyb3ctYWx0LWNpcmNsZS1yaWdodFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uX19zdGF0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5fX2xhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlZpZXdzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MocGFnZS5wYWdlVmlld3MpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCBtZDp3LTEvMiBtYi02XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX193cmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmJyb3dzZXJzLCBmdW5jdGlvbihicm93c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGJyb3dzZXIuYnJvd3NlciB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uX19sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJCcm93c2VyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIG1yLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJvd3Nlci5pY29uID09IFwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJnbG9iZVwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFiXCIsIGJyb3dzZXIuaWNvbl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGJyb3dzZXIuYnJvd3NlcikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uX19zdGF0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5fX2xhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlc3Npb25zXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoYnJvd3Nlci5zZXNzaW9ucykpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9faGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX3RpdGxlXCIgfSwgW192bS5fdihcIlBvcHVsYXIgUGFnZXNcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlBhZ2VcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMTBcIiB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbl9fc3RhdFwiIH0sIFtfdm0uX3YoXCJWaWV3c1wiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9faGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX3RpdGxlXCIgfSwgW192bS5fdihcIkJyb3dzZXJzXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJCcm93c2VyXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5fX3N0YXRcIiB9LCBbX3ZtLl92KFwiU2Vzc2lvbnNcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5zaWdodC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzhlOTVjNjYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5zaWdodC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luc2lnaHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3OGU5NWM2NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3OGU5NWM2NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3OGU5NWM2NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5zaWdodC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzhlOTVjNjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzhlOTVjNjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9TRU8vSW5zaWdodC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luc2lnaHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luc2lnaHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luc2lnaHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4ZTk1YzY2JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==