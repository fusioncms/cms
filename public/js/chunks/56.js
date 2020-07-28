(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Address/Field.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Address/Field.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
  name: 'address-fieldtype',
  data: function data() {
    var data = {};
    var value = this.value;

    if (this.value) {
      data = {
        address1: value.address1 || '',
        address2: value.address2 || '',
        city: value.city || '',
        state: value.state || '',
        zip: value.zip || '',
        country: value.country || '',
        lat: value.lat || '',
        lng: value.lng || '',
        formatted_address: this.addressLookup || ''
      };
    } else {
      data = {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        lat: '',
        lng: '',
        formatted_address: ''
      };
    }

    return {
      marker: null,
      data: data,
      mapError: ''
    };
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": null
    }
  },
  computed: {
    apiKey: function apiKey() {
      return this.setting('maps_api_key');
    },
    hasAPIKey: function hasAPIKey() {
      return this.apiKey && this.apiKey != '';
    },
    mapID: function mapID() {
      return this.field.handle + '_map';
    },
    addressLookup: function addressLookup() {
      var addressString = this.data.address1 + ' ' + this.data.address2;

      if (this.data.city) {
        addressString = addressString + ', ' + this.data.city;
      }

      if (this.data.state || this.data.zip) {
        addressString = addressString + ', ' + this.data.state + ' ' + this.data.zip;
      }

      if (this.data.country) {
        addressString = addressString + ', ' + this.data.country;
      }

      return addressString.replace(/ +/g, ' ');
    }
  },
  watch: {
    addressLookup: function addressLookup() {
      this.locateAddress();
    },
    apiKey: function apiKey(value) {
      var _this = this;

      if (value && value != '') {
        this.$nextTick(function () {
          _this.initializeMap();
        });
      }
    }
  },
  methods: {
    updateValue: function updateValue(event, handle) {
      this.data[handle] = event;
      this.$emit('input', this.data);
    },
    initializeMap: function initializeMap() {
      if (_.isUndefined(window.google)) {
        var vm = this;
        var mapScript = document.createElement('script');

        window.mapInit = function () {
          vm.createMap();
        };

        mapScript.setAttribute('src', "https://maps.googleapis.com/maps/api/js?key=".concat(this.apiKey, "&callback=mapInit"));
        document.head.appendChild(mapScript);
      } else {
        this.createMap();
      }
    },
    createMap: function createMap() {
      if (!_.isUndefined(window.google)) {
        this.map = new google.maps.Map(document.getElementById(this.mapID));
        this.locateAddress();
      }
    },
    locateAddress: _.debounce(function () {
      if (_.isUndefined(window.google)) return;
      google.maps.event.trigger(this.map, 'resize');
      var geocoder = new google.maps.Geocoder();
      var vm = this;
      var address = this.addressLookup;
      var zoom = 16;

      if (address == '' || address == ' ') {
        if (this.marker !== null) {
          this.marker.setMap(null);
        }

        this.map.setCenter(new google.maps.LatLng(0, 0));
        this.map.setZoom(1);
        this.data.formatted_address = '';
        this.data.lat = '';
        this.data.lng = '';
        return;
      }

      geocoder.geocode({
        address: address
      }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          vm.map.setCenter(results[0].geometry.location);
          vm.map.setZoom(zoom);
          vm.data.formatted_address = results[0].formatted_address;
          vm.data.lat = results[0].geometry.location.lat();
          vm.data.lng = results[0].geometry.location.lng();

          if (address !== '' || address !== ' ') {
            if (vm.marker !== null) {
              vm.marker.setMap(null);
            }

            vm.marker = new google.maps.Marker({
              map: vm.map,
              position: results[0].geometry.location
            });
          }
        }
      });
    }, 500)
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Address/Field.vue?vue&type=template&id=b15fd0e6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Address/Field.vue?vue&type=template&id=b15fd0e6& ***!
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
  return _c("div", { staticClass: "px-2 mb-4" }, [
    _c("div", { staticClass: "form__label" }, [_vm._v(_vm._s(_vm.field.name))]),
    _vm._v(" "),
    _c("div", { staticClass: "row px-2" }, [
      _c(
        "div",
        { staticClass: "w-1/2" },
        [
          _c("p-input", {
            staticClass: "mb-2",
            attrs: {
              name: _vm.field.handle + "_address1",
              placeholder: "Address 1",
              value: _vm.data.address1
            },
            on: {
              input: function($event) {
                return _vm.updateValue($event, "address1")
              }
            }
          }),
          _vm._v(" "),
          _c("p-input", {
            staticClass: "mb-2",
            attrs: {
              name: _vm.field.handle + "_address2",
              placeholder: "Address 2",
              value: _vm.data.address2
            },
            on: {
              input: function($event) {
                return _vm.updateValue($event, "address2")
              }
            }
          }),
          _vm._v(" "),
          _c("p-input", {
            staticClass: "mb-2",
            attrs: {
              name: _vm.field.handle + "_city",
              placeholder: "City",
              value: _vm.data.city
            },
            on: {
              input: function($event) {
                return _vm.updateValue($event, "city")
              }
            }
          }),
          _vm._v(" "),
          _c("p-input", {
            staticClass: "mb-2",
            attrs: {
              name: _vm.field.handle + "_state",
              placeholder: "State",
              value: _vm.data.state
            },
            on: {
              input: function($event) {
                return _vm.updateValue($event, "state")
              }
            }
          }),
          _vm._v(" "),
          _c("p-input", {
            staticClass: "mb-2",
            attrs: {
              name: _vm.field.handle + "_zip",
              placeholder: "ZIP",
              value: _vm.data.zip
            },
            on: {
              input: function($event) {
                return _vm.updateValue($event, "zip")
              }
            }
          }),
          _vm._v(" "),
          _c("p-input", {
            staticClass: "mb-2",
            attrs: {
              name: _vm.field.handle + "_country",
              placeholder: "Country",
              value: _vm.data.country
            },
            on: {
              input: function($event) {
                return _vm.updateValue($event, "country")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "w-1/2 pl-6" }, [
        _c("div", { staticClass: "h-full rounded", attrs: { id: _vm.mapID } }, [
          _vm.mapError
            ? _c("div", {
                staticClass: "bg-gray-100 rounded shadow p-3",
                domProps: { innerHTML: _vm._s(_vm.mapError) }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.hasAPIKey == false,
                  expression: "hasAPIKey == false"
                }
              ],
              staticClass: "bg-gray-100 rounded shadow p-3"
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "p",
                [
                  _vm._v("Once you've obtained one, please visit the "),
                  _c(
                    "router-link",
                    { attrs: { to: "/settings/google_maps" } },
                    [_vm._v("Google Maps settings page")]
                  ),
                  _vm._v(" to enter your API key.")
                ],
                1
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("A "),
      _c(
        "a",
        {
          attrs: {
            href:
              "https://developers.google.com/maps/documentation/javascript/get-api-key",
            target: "_blank"
          }
        },
        [_vm._v("Google Maps API key")]
      ),
      _vm._v(
        " is required in order to view the map component and retrieve latitude and longitude coordinates for your address."
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/fieldtypes/Address/Field.vue":
/*!***************************************************!*\
  !*** ./resources/js/fieldtypes/Address/Field.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_b15fd0e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=b15fd0e6& */ "./resources/js/fieldtypes/Address/Field.vue?vue&type=template&id=b15fd0e6&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Address/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_b15fd0e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_b15fd0e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Address/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Address/Field.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/fieldtypes/Address/Field.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Address/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Address/Field.vue?vue&type=template&id=b15fd0e6&":
/*!**********************************************************************************!*\
  !*** ./resources/js/fieldtypes/Address/Field.vue?vue&type=template&id=b15fd0e6& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_b15fd0e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=b15fd0e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Address/Field.vue?vue&type=template&id=b15fd0e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_b15fd0e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_b15fd0e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQWRkcmVzcy9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQWRkcmVzcy9GaWVsZC52dWU/NWMyOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZT83OGEzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0FkZHJlc3MvRmllbGQudnVlPzhiZGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQTtBQUNBLDJCQURBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLHNDQURBO0FBRUEsc0NBRkE7QUFHQSw4QkFIQTtBQUlBLGdDQUpBO0FBS0EsNEJBTEE7QUFNQSxvQ0FOQTtBQU9BLDRCQVBBO0FBUUEsNEJBUkE7QUFTQTtBQVRBO0FBV0EsS0FaQSxNQVlBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLG9CQUZBO0FBR0EsZ0JBSEE7QUFJQSxpQkFKQTtBQUtBLGVBTEE7QUFNQSxtQkFOQTtBQU9BLGVBUEE7QUFRQSxlQVJBO0FBU0E7QUFUQTtBQVdBOztBQUVBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQTtBQUdBO0FBSEE7QUFLQSxHQXJDQTtBQXVDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQU5BLEdBdkNBO0FBbURBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLGFBTEEsdUJBS0E7QUFDQTtBQUNBLEtBUEE7QUFTQSxTQVRBLG1CQVNBO0FB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Z0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy81Ni5qcz9pZD1kN2YwNGRhNDcxYzEwNzcxN2M1OCIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicHgtMiBtYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19sYWJlbFwiPnt7ZmllbGQubmFtZX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcHgtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8yXCI+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX2FkZHJlc3MxJ1wiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyAxXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5hZGRyZXNzMVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ2FkZHJlc3MxJylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX2FkZHJlc3MyJ1wiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyAyXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5hZGRyZXNzMlwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ2FkZHJlc3MyJylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX2NpdHknXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5jaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnY2l0eScpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlICsgJ19zdGF0ZSdcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5zdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ3N0YXRlJylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX3ppcCdcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlpJUFwiXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRhdGEuemlwXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnemlwJylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX2NvdW50cnknXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5jb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnY291bnRyeScpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzIgcGwtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgcm91bmRlZFwiIDppZD1cIm1hcElEXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy1ncmF5LTEwMCByb3VuZGVkIHNoYWRvdyBwLTNcIiB2LWlmPVwibWFwRXJyb3JcIiB2LWh0bWw9XCJtYXBFcnJvclwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy1ncmF5LTEwMCByb3VuZGVkIHNoYWRvdyBwLTNcIiB2LXNob3c9XCJoYXNBUElLZXkgPT0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkEgPGEgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2dldC1hcGkta2V5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+R29vZ2xlIE1hcHMgQVBJIGtleTwvYT4gaXMgcmVxdWlyZWQgaW4gb3JkZXIgdG8gdmlldyB0aGUgbWFwIGNvbXBvbmVudCBhbmQgcmV0cmlldmUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBjb29yZGluYXRlcyBmb3IgeW91ciBhZGRyZXNzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9uY2UgeW91J3ZlIG9idGFpbmVkIG9uZSwgcGxlYXNlIHZpc2l0IHRoZSA8cm91dGVyLWxpbmsgdG89XCIvc2V0dGluZ3MvZ29vZ2xlX21hcHNcIj5Hb29nbGUgTWFwcyBzZXR0aW5ncyBwYWdlPC9yb3V0ZXItbGluaz4gdG8gZW50ZXIgeW91ciBBUEkga2V5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2FkZHJlc3MtZmllbGR0eXBlJyxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzMTogdmFsdWUuYWRkcmVzczEgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MyOiB2YWx1ZS5hZGRyZXNzMiB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogdmFsdWUuY2l0eSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHZhbHVlLnN0YXRlIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICB6aXA6IHZhbHVlLnppcCB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTogdmFsdWUuY291bnRyeSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgbGF0OiB2YWx1ZS5sYXQgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIGxuZzogdmFsdWUubG5nIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzczogdGhpcy5hZGRyZXNzTG9va3VwIHx8ICcnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczE6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzMjogJycsXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHppcDogJycsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6ICcnLFxuICAgICAgICAgICAgICAgICAgICBsYXQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBsbmc6ICcnLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzczogJycsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1hcmtlcjogbnVsbCxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIG1hcEVycm9yOiAnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgYXBpS2V5KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldHRpbmcoJ21hcHNfYXBpX2tleScpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoYXNBUElLZXkoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmFwaUtleSAmJiB0aGlzLmFwaUtleSAhPSAnJylcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1hcElEKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpZWxkLmhhbmRsZSArICdfbWFwJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYWRkcmVzc0xvb2t1cDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFkZHJlc3NTdHJpbmcgPSB0aGlzLmRhdGEuYWRkcmVzczEgKyAnICcgKyB0aGlzLmRhdGEuYWRkcmVzczJcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzU3RyaW5nID0gYWRkcmVzc1N0cmluZyArICcsICcgKyB0aGlzLmRhdGEuY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnN0YXRlIHx8IHRoaXMuZGF0YS56aXApIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1N0cmluZyA9IGFkZHJlc3NTdHJpbmcgKyAnLCAnICsgdGhpcy5kYXRhLnN0YXRlICsgJyAnICsgdGhpcy5kYXRhLnppcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNvdW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1N0cmluZyA9IGFkZHJlc3NTdHJpbmcgKyAnLCAnICsgdGhpcy5kYXRhLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZHJlc3NTdHJpbmcucmVwbGFjZSgvICsvZywgJyAnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGFkZHJlc3NMb29rdXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYXRlQWRkcmVzcygpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYXBpS2V5KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZU1hcCgpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKGV2ZW50LCBoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbaGFuZGxlXSA9IGV2ZW50XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmRhdGEpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpbml0aWFsaXplTWFwKCkge1xuICAgICAgICAgICAgICAgIGlmIChfLmlzVW5kZWZpbmVkKHdpbmRvdy5nb29nbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcFNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1hcEluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmNyZWF0ZU1hcCgpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtYXBTY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0ke3RoaXMuYXBpS2V5fSZjYWxsYmFjaz1tYXBJbml0YClcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtYXBTY3JpcHQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNYXAoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNyZWF0ZU1hcCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoISBfLmlzVW5kZWZpbmVkKHdpbmRvdy5nb29nbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1hcElEKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGVBZGRyZXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbG9jYXRlQWRkcmVzczogXy5kZWJvdW5jZShcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uaXNVbmRlZmluZWQod2luZG93Lmdvb2dsZSkpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMubWFwLCAncmVzaXplJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzID0gdGhpcy5hZGRyZXNzTG9va3VwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgem9vbSA9IDE2O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzID09ICcnIHx8IGFkZHJlc3MgPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXJrZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLnNldENlbnRlcihuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDAsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLnNldFpvb20oMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JtYXR0ZWRfYWRkcmVzcyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmxhdCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmxuZyA9ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBnZW9jb2Rlci5nZW9jb2RlKHsgYWRkcmVzcyB9LCBmdW5jdGlvbihyZXN1bHRzLCBzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0ubWFwLnNldENlbnRlcihyZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5tYXAuc2V0Wm9vbSh6b29tKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRhdGEuZm9ybWF0dGVkX2FkZHJlc3MgPSByZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRhdGEubGF0ID0gcmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5kYXRhLmxuZyA9IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkcmVzcyAhPT0gJycgfHwgYWRkcmVzcyAhPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5tYXJrZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLm1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5tYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcDogdm0ubWFwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCA1MDBcbiAgICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweC0yIG1iLTRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHB4LTJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTEvMlwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSArIFwiX2FkZHJlc3MxXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkFkZHJlc3MgMVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEuYWRkcmVzczFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVWYWx1ZSgkZXZlbnQsIFwiYWRkcmVzczFcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUgKyBcIl9hZGRyZXNzMlwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJBZGRyZXNzIDJcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRhLmFkZHJlc3MyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcImFkZHJlc3MyXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJfY2l0eVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaXR5XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YS5jaXR5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcImNpdHlcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUgKyBcIl9zdGF0ZVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTdGF0ZVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEuc3RhdGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVWYWx1ZSgkZXZlbnQsIFwic3RhdGVcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUgKyBcIl96aXBcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiWklQXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YS56aXBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVWYWx1ZSgkZXZlbnQsIFwiemlwXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJfY291bnRyeVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDb3VudHJ5XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YS5jb3VudHJ5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcImNvdW50cnlcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvMiBwbC02XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImgtZnVsbCByb3VuZGVkXCIsIGF0dHJzOiB7IGlkOiBfdm0ubWFwSUQgfSB9LCBbXG4gICAgICAgICAgX3ZtLm1hcEVycm9yXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1ncmF5LTEwMCByb3VuZGVkIHNoYWRvdyBwLTNcIixcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ubWFwRXJyb3IpIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmhhc0FQSUtleSA9PSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaGFzQVBJS2V5ID09IGZhbHNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWdyYXktMTAwIHJvdW5kZWQgc2hhZG93IHAtM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIk9uY2UgeW91J3ZlIG9idGFpbmVkIG9uZSwgcGxlYXNlIHZpc2l0IHRoZSBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi9zZXR0aW5ncy9nb29nbGVfbWFwc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdvb2dsZSBNYXBzIHNldHRpbmdzIHBhZ2VcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIHRvIGVudGVyIHlvdXIgQVBJIGtleS5cIilcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXCJBIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICBcImh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2dldC1hcGkta2V5XCIsXG4gICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJHb29nbGUgTWFwcyBBUEkga2V5XCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCIgaXMgcmVxdWlyZWQgaW4gb3JkZXIgdG8gdmlldyB0aGUgbWFwIGNvbXBvbmVudCBhbmQgcmV0cmlldmUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBjb29yZGluYXRlcyBmb3IgeW91ciBhZGRyZXNzLlwiXG4gICAgICApXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMTVmZDBlNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjE1ZmQwZTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjE1ZmQwZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjE1ZmQwZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMTVmZDBlNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiMTVmZDBlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQWRkcmVzcy9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIxNWZkMGU2JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==