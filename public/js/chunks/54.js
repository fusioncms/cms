(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/components/Fieldtypes/Address/Field.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Address/Field.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=6a5df87a& */ "./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Address/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=6a5df87a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0FkZHJlc3MvRmllbGQudnVlP2JkMGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0FkZHJlc3MvRmllbGQudnVlPzhjYzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZT9hMTAzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREE7QUFDQSwyQkFEQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBLHNDQUZBO0FBR0EsOEJBSEE7QUFJQSxnQ0FKQTtBQUtBLDRCQUxBO0FBTUEsb0NBTkE7QUFPQSw0QkFQQTtBQVFBLDRCQVJBO0FBU0E7QUFUQTtBQVdBLEtBWkEsTUFZQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxvQkFGQTtBQUdBLGdCQUhBO0FBSUEsaUJBSkE7QUFLQSxlQUxBO0FBTUEsbUJBTkE7QUFPQSxlQVBBO0FBUUEsZUFSQTtBQVNBO0FBVEE7QUFXQTs7QUFFQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FyQ0E7QUF1Q0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFOQSxHQXZDQTtBQW1EQTtBQUNBLFVBREEsb0JBQ0E7QUFDQTtBQUNB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Ozs7Ozs7QUN4S0E7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWlNLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvNTQuanM/aWQ9OWIwMGExNTE0ZjMxMjliZGJkZjkiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInB4LTIgbWItNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fbGFiZWxcIj57e2ZpZWxkLm5hbWV9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHB4LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvMlwiPlxuICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlICsgJ19hZGRyZXNzMSdcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgMVwiXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRhdGEuYWRkcmVzczFcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQsICdhZGRyZXNzMScpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlICsgJ19hZGRyZXNzMidcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgMlwiXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRhdGEuYWRkcmVzczJcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQsICdhZGRyZXNzMicpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlICsgJ19jaXR5J1wiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRhdGEuY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ2NpdHknKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgPjwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZSArICdfc3RhdGUnXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRhdGEuc3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQsICdzdGF0ZScpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlICsgJ196aXAnXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJaSVBcIlxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJkYXRhLnppcFwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ3ppcCcpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlICsgJ19jb3VudHJ5J1wiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRhdGEuY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ2NvdW50cnknKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgPjwvcC1pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8yIHBsLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHJvdW5kZWRcIiA6aWQ9XCJtYXBJRFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctZ3JheS0xMDAgcm91bmRlZCBzaGFkb3cgcC0zXCIgdi1pZj1cIm1hcEVycm9yXCIgdi1odG1sPVwibWFwRXJyb3JcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctZ3JheS0xMDAgcm91bmRlZCBzaGFkb3cgcC0zXCIgdi1zaG93PVwiaGFzQVBJS2V5ID09IGZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9nZXQtYXBpLWtleVwiIHRhcmdldD1cIl9ibGFua1wiPkdvb2dsZSBNYXBzIEFQSSBrZXk8L2E+IGlzIHJlcXVpcmVkIGluIG9yZGVyIHRvIHZpZXcgdGhlIG1hcCBjb21wb25lbnQgYW5kIHJldHJpZXZlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgY29vcmRpbmF0ZXMgZm9yIHlvdXIgYWRkcmVzcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5PbmNlIHlvdSd2ZSBvYnRhaW5lZCBvbmUsIHBsZWFzZSB2aXNpdCB0aGUgPHJvdXRlci1saW5rIHRvPVwiL3NldHRpbmdzL2dvb2dsZV9tYXBzXCI+R29vZ2xlIE1hcHMgc2V0dGluZ3MgcGFnZTwvcm91dGVyLWxpbms+IHRvIGVudGVyIHlvdXIgQVBJIGtleS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdhZGRyZXNzLWZpZWxkdHlwZScsXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge31cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWVcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczE6IHZhbHVlLmFkZHJlc3MxIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzMjogdmFsdWUuYWRkcmVzczIgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6IHZhbHVlLmNpdHkgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB2YWx1ZS5zdGF0ZSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgemlwOiB2YWx1ZS56aXAgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IHZhbHVlLmNvdW50cnkgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIGxhdDogdmFsdWUubGF0IHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBsbmc6IHZhbHVlLmxuZyB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkX2FkZHJlc3M6IHRoaXMuYWRkcmVzc0xvb2t1cCB8fCAnJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MxOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICB6aXA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbGF0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkX2FkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtYXJrZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICBtYXBFcnJvcjogJycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGFwaUtleSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5nKCdtYXBzX2FwaV9rZXknKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGFzQVBJS2V5KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5hcGlLZXkgJiYgdGhpcy5hcGlLZXkgIT0gJycpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBtYXBJRCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maWVsZC5oYW5kbGUgKyAnX21hcCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGFkZHJlc3NMb29rdXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzU3RyaW5nID0gdGhpcy5kYXRhLmFkZHJlc3MxICsgJyAnICsgdGhpcy5kYXRhLmFkZHJlc3MyXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1N0cmluZyA9IGFkZHJlc3NTdHJpbmcgKyAnLCAnICsgdGhpcy5kYXRhLmNpdHk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5zdGF0ZSB8fCB0aGlzLmRhdGEuemlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NTdHJpbmcgPSBhZGRyZXNzU3RyaW5nICsgJywgJyArIHRoaXMuZGF0YS5zdGF0ZSArICcgJyArIHRoaXMuZGF0YS56aXA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jb3VudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NTdHJpbmcgPSBhZGRyZXNzU3RyaW5nICsgJywgJyArIHRoaXMuZGF0YS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRyZXNzU3RyaW5nLnJlcGxhY2UoLyArL2csICcgJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBhZGRyZXNzTG9va3VwOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2F0ZUFkZHJlc3MoKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGFwaUtleSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVNYXAoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB1cGRhdGVWYWx1ZShldmVudCwgaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhW2hhbmRsZV0gPSBldmVudFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5kYXRhKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaW5pdGlhbGl6ZU1hcCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5pc1VuZGVmaW5lZCh3aW5kb3cuZ29vZ2xlKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXBTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tYXBJbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5jcmVhdGVNYXAoKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWFwU2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHt0aGlzLmFwaUtleX0mY2FsbGJhY2s9bWFwSW5pdGApXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWFwU2NyaXB0KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTWFwKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjcmVhdGVNYXAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEgXy5pc1VuZGVmaW5lZCh3aW5kb3cuZ29vZ2xlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tYXBJRCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRlQWRkcmVzcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGxvY2F0ZUFkZHJlc3M6IF8uZGVib3VuY2UoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmlzVW5kZWZpbmVkKHdpbmRvdy5nb29nbGUpKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLm1hcCwgJ3Jlc2l6ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzcyA9IHRoaXMuYWRkcmVzc0xvb2t1cDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHpvb20gPSAxNjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkcmVzcyA9PSAnJyB8fCBhZGRyZXNzID09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFya2VyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIobmV3IGdvb2dsZS5tYXBzLkxhdExuZygwLCAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5zZXRab29tKDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9ybWF0dGVkX2FkZHJlc3MgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sYXQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sbmcgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7IGFkZHJlc3MgfSwgZnVuY3Rpb24ocmVzdWx0cywgc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLm1hcC5zZXRDZW50ZXIocmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0ubWFwLnNldFpvb20oem9vbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5kYXRhLmZvcm1hdHRlZF9hZGRyZXNzID0gcmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5kYXRhLmxhdCA9IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGF0YS5sbmcgPSByZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHJlc3MgIT09ICcnIHx8IGFkZHJlc3MgIT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0ubWFya2VyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0ubWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXA6IHZtLm1hcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgNTAwXG4gICAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHgtMiBtYi00XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZmllbGQubmFtZSkpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBweC0yXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUgKyBcIl9hZGRyZXNzMVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJBZGRyZXNzIDFcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRhLmFkZHJlc3MxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcImFkZHJlc3MxXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJfYWRkcmVzczJcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQWRkcmVzcyAyXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YS5hZGRyZXNzMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVZhbHVlKCRldmVudCwgXCJhZGRyZXNzMlwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSArIFwiX2NpdHlcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2l0eVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEuY2l0eVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVZhbHVlKCRldmVudCwgXCJjaXR5XCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJfc3RhdGVcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU3RhdGVcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRhLnN0YXRlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcInN0YXRlXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJfemlwXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlpJUFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEuemlwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcInppcFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSArIFwiX2NvdW50cnlcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ291bnRyeVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEuY291bnRyeVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVZhbHVlKCRldmVudCwgXCJjb3VudHJ5XCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzIgcGwtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoLWZ1bGwgcm91bmRlZFwiLCBhdHRyczogeyBpZDogX3ZtLm1hcElEIH0gfSwgW1xuICAgICAgICAgIF92bS5tYXBFcnJvclxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctZ3JheS0xMDAgcm91bmRlZCBzaGFkb3cgcC0zXCIsXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLm1hcEVycm9yKSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5oYXNBUElLZXkgPT0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImhhc0FQSUtleSA9PSBmYWxzZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1ncmF5LTEwMCByb3VuZGVkIHNoYWRvdyBwLTNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJPbmNlIHlvdSd2ZSBvYnRhaW5lZCBvbmUsIHBsZWFzZSB2aXNpdCB0aGUgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvc2V0dGluZ3MvZ29vZ2xlX21hcHNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHb29nbGUgTWFwcyBzZXR0aW5ncyBwYWdlXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiB0byBlbnRlciB5b3VyIEFQSSBrZXkuXCIpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX3ZtLl92KFwiQSBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgXCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9nZXQtYXBpLWtleVwiLFxuICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiR29vZ2xlIE1hcHMgQVBJIGtleVwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiIGlzIHJlcXVpcmVkIGluIG9yZGVyIHRvIHZpZXcgdGhlIG1hcCBjb21wb25lbnQgYW5kIHJldHJpZXZlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgY29vcmRpbmF0ZXMgZm9yIHlvdXIgYWRkcmVzcy5cIlxuICAgICAgKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmE1ZGY4N2EmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZhNWRmODdhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZhNWRmODdhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZhNWRmODdhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmE1ZGY4N2EmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmE1ZGY4N2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQWRkcmVzcy9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhNWRmODdhJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==