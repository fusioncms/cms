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
    }
  },
  methods: {
    updateValue: function updateValue(event, handle) {
      this.data[handle] = event;
      this.$emit('input', this.data);
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
  },
  mounted: function mounted() {
    var vm = this;
    var apiKey = vm.field.settings.api_key;

    if (!apiKey || apiKey == '') {
      vm.mapError = 'A <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Google Maps API key</a> is required in order to view the map component and retrieve latitude and longitude coordinates for your address. Please visit the <router-link to="/settings/google_maps">Google Maps settings page</router-link> to enter an API key.You will need to generate a <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Google Maps API key</a> in order to view the map component and retrieve latitude and longitude coordinates for your address.';
      return;
    }

    if (_.isUndefined(window.google)) {
      window.mapInit = function () {
        vm.createMap();
      };

      var mapScript = document.createElement('script');
      mapScript.setAttribute('src', "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey, "&callback=mapInit"));
      document.head.appendChild(mapScript);
    } else {
      vm.createMap();
    }
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
      _c("div", { staticClass: "w-1/2 pl-2" }, [
        _c("div", { staticClass: "h-full", attrs: { id: _vm.mapID } }, [
          _vm.mapError
            ? _c("div", {
                staticClass: "p-5",
                domProps: { innerHTML: _vm._s(_vm.mapError) }
              })
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQWRkcmVzcy9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQWRkcmVzcy9GaWVsZC52dWU/NWMyOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZT83OGEzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0FkZHJlc3MvRmllbGQudnVlPzhiZGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREE7QUFDQSwyQkFEQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBLHNDQUZBO0FBR0EsOEJBSEE7QUFJQSxnQ0FKQTtBQUtBLDRCQUxBO0FBTUEsb0NBTkE7QUFPQSw0QkFQQTtBQVFBLDRCQVJBO0FBU0E7QUFUQTtBQVdBLEtBWkEsTUFZQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxvQkFGQTtBQUdBLGdCQUhBO0FBSUEsaUJBSkE7QUFLQSxlQUxBO0FBTUEsbUJBTkE7QUFPQSxlQVBBO0FBUUEsZUFSQTtBQVNBO0FBVEE7QUFXQTs7QUFFQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FyQ0E7QUF1Q0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFOQSxHQXZDQTtBQW1EQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFyQkEsR0FuREE7QUEyRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQSxHQTNFQTtBQWlGQTtBQUNBLGVBREEsdUJBQ0EsS0FEQSxFQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLEtBWkE7QUFjQSw4QkFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFEQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0EsT0FwQkE7QUFxQkEsS0EvQ0EsRUErQ0EsR0EvQ0E7QUFkQSxHQWpGQTtBQWtKQSxTQWxKQSxxQkFrSkE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FQQSxNQU9BO0FBQ0E7QUFDQTtBQUNBO0FBbktBLEc7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQkFBMkI7QUFDL0MsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQSxlQUFlLDBCQUEwQjtBQUN6QztBQUNBO0FBQ0EsU0FBUyx1QkFBdUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDLG1CQUFtQixnQ0FBZ0MsZ0JBQWdCLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy81Ni5qcz9pZD1lNzBhYTRjZTEwZTRiYTUyYzhlMSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicHgtMiBtYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19sYWJlbFwiPnt7ZmllbGQubmFtZX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcHgtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8yXCI+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX2FkZHJlc3MxJ1wiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyAxXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5hZGRyZXNzMVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ2FkZHJlc3MxJylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX2FkZHJlc3MyJ1wiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyAyXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5hZGRyZXNzMlwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ2FkZHJlc3MyJylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX2NpdHknXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5jaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnY2l0eScpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlICsgJ19zdGF0ZSdcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5zdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ3N0YXRlJylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX3ppcCdcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlpJUFwiXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRhdGEuemlwXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnemlwJylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX2NvdW50cnknXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5jb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnY291bnRyeScpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzIgcGwtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGxcIiA6aWQ9XCJtYXBJRFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJtYXBFcnJvclwiIGNsYXNzPVwicC01XCIgdi1odG1sPVwibWFwRXJyb3JcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnYWRkcmVzcy1maWVsZHR5cGUnLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MxOiB2YWx1ZS5hZGRyZXNzMSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczI6IHZhbHVlLmFkZHJlc3MyIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBjaXR5OiB2YWx1ZS5jaXR5IHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdmFsdWUuc3RhdGUgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIHppcDogdmFsdWUuemlwIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiB2YWx1ZS5jb3VudHJ5IHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBsYXQ6IHZhbHVlLmxhdCB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiB2YWx1ZS5sbmcgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzOiB0aGlzLmFkZHJlc3NMb29rdXAgfHwgJycsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzMTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MyOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogJycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgemlwOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTogJycsXG4gICAgICAgICAgICAgICAgICAgIGxhdDogJycsXG4gICAgICAgICAgICAgICAgICAgIGxuZzogJycsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWFya2VyOiBudWxsLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgbWFwRXJyb3I6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIG1hcElEKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpZWxkLmhhbmRsZSArICdfbWFwJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYWRkcmVzc0xvb2t1cDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFkZHJlc3NTdHJpbmcgPSB0aGlzLmRhdGEuYWRkcmVzczEgKyAnICcgKyB0aGlzLmRhdGEuYWRkcmVzczJcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzU3RyaW5nID0gYWRkcmVzc1N0cmluZyArICcsICcgKyB0aGlzLmRhdGEuY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnN0YXRlIHx8IHRoaXMuZGF0YS56aXApIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1N0cmluZyA9IGFkZHJlc3NTdHJpbmcgKyAnLCAnICsgdGhpcy5kYXRhLnN0YXRlICsgJyAnICsgdGhpcy5kYXRhLnppcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNvdW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1N0cmluZyA9IGFkZHJlc3NTdHJpbmcgKyAnLCAnICsgdGhpcy5kYXRhLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZHJlc3NTdHJpbmcucmVwbGFjZSgvICsvZywgJyAnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGFkZHJlc3NMb29rdXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYXRlQWRkcmVzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKGV2ZW50LCBoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbaGFuZGxlXSA9IGV2ZW50XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmRhdGEpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjcmVhdGVNYXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghIF8uaXNVbmRlZmluZWQod2luZG93Lmdvb2dsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubWFwSUQpKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0ZUFkZHJlc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBsb2NhdGVBZGRyZXNzOiBfLmRlYm91bmNlKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5pc1VuZGVmaW5lZCh3aW5kb3cuZ29vZ2xlKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcy5tYXAsICdyZXNpemUnKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3MgPSB0aGlzLmFkZHJlc3NMb29rdXA7XG4gICAgICAgICAgICAgICAgICAgIHZhciB6b29tID0gMTY7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHJlc3MgPT0gJycgfHwgYWRkcmVzcyA9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcmtlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFya2VyLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAuc2V0Q2VudGVyKG5ldyBnb29nbGUubWFwcy5MYXRMbmcoMCwgMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAuc2V0Wm9vbSgxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmZvcm1hdHRlZF9hZGRyZXNzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEubGF0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEubG5nID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeyBhZGRyZXNzIH0sIGZ1bmN0aW9uKHJlc3VsdHMsIHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5tYXAuc2V0Q2VudGVyKHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLm1hcC5zZXRab29tKHpvb20pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGF0YS5mb3JtYXR0ZWRfYWRkcmVzcyA9IHJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGF0YS5sYXQgPSByZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRhdGEubG5nID0gcmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzICE9PSAnJyB8fCBhZGRyZXNzICE9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLm1hcmtlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0ubWFya2VyLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLm1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiB2bS5tYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDUwMFxuICAgICAgICAgICAgKVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgICAgICBsZXQgYXBpS2V5ID0gdm0uZmllbGQuc2V0dGluZ3MuYXBpX2tleVxuICAgICAgICAgICAgaWYgKCFhcGlLZXkgfHwgYXBpS2V5ID09ICcnKSB7XG4gICAgICAgICAgICAgICAgdm0ubWFwRXJyb3IgPSAnQSA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZ2V0LWFwaS1rZXlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5Hb29nbGUgTWFwcyBBUEkga2V5PC9hPiBpcyByZXF1aXJlZCBpbiBvcmRlciB0byB2aWV3IHRoZSBtYXAgY29tcG9uZW50IGFuZCByZXRyaWV2ZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGNvb3JkaW5hdGVzIGZvciB5b3VyIGFkZHJlc3MuIFBsZWFzZSB2aXNpdCB0aGUgPHJvdXRlci1saW5rIHRvPVwiL3NldHRpbmdzL2dvb2dsZV9tYXBzXCI+R29vZ2xlIE1hcHMgc2V0dGluZ3MgcGFnZTwvcm91dGVyLWxpbms+IHRvIGVudGVyIGFuIEFQSSBrZXkuWW91IHdpbGwgbmVlZCB0byBnZW5lcmF0ZSBhIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9nZXQtYXBpLWtleVwiIHRhcmdldD1cIl9ibGFua1wiPkdvb2dsZSBNYXBzIEFQSSBrZXk8L2E+IGluIG9yZGVyIHRvIHZpZXcgdGhlIG1hcCBjb21wb25lbnQgYW5kIHJldHJpZXZlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgY29vcmRpbmF0ZXMgZm9yIHlvdXIgYWRkcmVzcy4nXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXy5pc1VuZGVmaW5lZCh3aW5kb3cuZ29vZ2xlKSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5tYXBJbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLmNyZWF0ZU1hcCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBtYXBTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgICAgICAgICAgIG1hcFNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7YXBpS2V5fSZjYWxsYmFjaz1tYXBJbml0YClcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1hcFNjcmlwdClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdm0uY3JlYXRlTWFwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweC0yIG1iLTRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHB4LTJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTEvMlwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSArIFwiX2FkZHJlc3MxXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkFkZHJlc3MgMVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEuYWRkcmVzczFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVWYWx1ZSgkZXZlbnQsIFwiYWRkcmVzczFcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUgKyBcIl9hZGRyZXNzMlwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJBZGRyZXNzIDJcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRhLmFkZHJlc3MyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcImFkZHJlc3MyXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJfY2l0eVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaXR5XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YS5jaXR5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcImNpdHlcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUgKyBcIl9zdGF0ZVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTdGF0ZVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEuc3RhdGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVWYWx1ZSgkZXZlbnQsIFwic3RhdGVcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUgKyBcIl96aXBcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiWklQXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YS56aXBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVWYWx1ZSgkZXZlbnQsIFwiemlwXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJfY291bnRyeVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDb3VudHJ5XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YS5jb3VudHJ5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcImNvdW50cnlcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvMiBwbC0yXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImgtZnVsbFwiLCBhdHRyczogeyBpZDogX3ZtLm1hcElEIH0gfSwgW1xuICAgICAgICAgIF92bS5tYXBFcnJvclxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC01XCIsXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLm1hcEVycm9yKSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjE1ZmQwZTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2IxNWZkMGU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2IxNWZkMGU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2IxNWZkMGU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjE1ZmQwZTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYjE1ZmQwZTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9maWVsZHR5cGVzL0FkZHJlc3MvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMTVmZDBlNiZcIiJdLCJzb3VyY2VSb290IjoiIn0=