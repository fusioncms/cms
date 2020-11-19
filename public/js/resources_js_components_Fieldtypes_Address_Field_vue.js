(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_components_Fieldtypes_Address_Field_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _mixins_fieldtypes_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/fieldtypes/field */ "./resources/js/mixins/fieldtypes/field.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'address-fieldtype',
  mixins: [_mixins_fieldtypes_field__WEBPACK_IMPORTED_MODULE_0__.default],
  data: function data() {
    return {
      map: null,
      marker: null,
      mapError: '',
      help: '<p>A <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Google Maps API key</a> is required in order to view the map component and retrieve latitude and longitude coordinates for your address.</p><p>Once you have obtained one, please visit the <router-link to="/settings/google_maps">Google Maps settings page</router-link> to enter your API key.</p>'
    };
  },
  computed: {
    apiKey: function apiKey() {
      return this.setting('maps_api_key');
    },
    hasAPIKey: function hasAPIKey() {
      return this.apiKey && this.apiKey != '';
    },
    hasGMaps: function hasGMaps() {
      return !_.isUndefined(window.google);
    },
    mapID: function mapID() {
      return this.field.handle + '_map';
    }
  },
  watch: {
    model: {
      deep: true,
      handler: function handler(value) {
        this.locateAddress();
      }
    },
    apiKey: function apiKey(value) {
      var _this = this;

      this.$nextTick(function () {
        _this.initializeMap();
      });
    }
  },
  methods: {
    initializeMap: function initializeMap() {
      var _this2 = this;

      if (!_.isUndefined(window.google)) {
        this.createMap();
      } else {
        var mapScript = document.createElement('script');

        window.mapInit = function () {
          return _this2.createMap();
        };

        mapScript.setAttribute('src', "https://maps.googleapis.com/maps/api/js?key=".concat(this.apiKey, "&callback=mapInit"));
        document.head.appendChild(mapScript);
      }
    },
    createMap: function createMap() {
      this.map = new google.maps.Map(document.getElementById(this.mapID));
      this.locateAddress();
    },
    locateAddress: _.debounce(function () {
      var _this3 = this;

      if (_.isUndefined(window.google)) return;
      google.maps.event.trigger(this.map, 'resize');
      var geocoder = new google.maps.Geocoder();

      var address = _.trim(Object.values(this.model).join(' '));

      var zoom = 16;

      if (!address) {
        if (this.marker !== null) {
          this.marker.setMap(null);
        }

        this.map.setCenter(new google.maps.LatLng(0, 0));
        this.map.setZoom(1);
        this.model.formatted_address = '';
        this.model.lat = '';
        this.model.lng = '';
        return;
      }

      geocoder.geocode({
        address: address
      }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          _this3.map.setCenter(results[0].geometry.location);

          _this3.map.setZoom(zoom);

          _this3.model.formatted_address = results[0].formatted_address;
          _this3.model.lat = results[0].geometry.location.lat();
          _this3.model.lng = results[0].geometry.location.lng();

          if (address) {
            if (_this3.marker !== null) {
              _this3.marker.setMap(null);
            }

            _this3.marker = new google.maps.Marker({
              map: _this3.map,
              position: results[0].geometry.location
            });
          }
        }
      });
    }, 1500)
  },
  created: function created() {
    if (_.isEmpty(this.value)) {
      this.model = {
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
  }
});

/***/ }),

/***/ "./resources/js/mixins/fieldtypes/field.js":
/*!*************************************************!*\
  !*** ./resources/js/mixins/fieldtypes/field.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": null
    },
    errors: {
      type: Object,
      required: false,
      "default": function _default() {}
    }
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    hasError: function hasError(handle) {
      return this.errors && this.errors.has(handle);
    },
    errorMessage: function errorMessage(handle) {
      return this.hasError(handle) ? this.errors.get(handle) : '';
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Address/Field.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Address/Field.vue ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=6a5df87a& */ "./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Address/Field.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a& ***!
  \*********************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Field.vue?vue&type=template&id=6a5df87a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ui-field-group",
    {
      attrs: {
        name: _vm.field.handle,
        fieldId: _vm.field.handle + "-field",
        label: _vm.field.name,
        help: _vm.field.help
      }
    },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col md:w-1/2" },
          [
            _c("ui-input-group", {
              attrs: {
                name: _vm.field.handle + "_address1",
                required: _vm.field.required,
                label: "Address 1",
                placeholder: "Address 1",
                "hide-label": "",
                hasError: _vm.hasError(_vm.field.handle + ".address1"),
                errorMessage: _vm.errorMessage(_vm.field.handle + ".address1")
              },
              model: {
                value: _vm.model.address1,
                callback: function($$v) {
                  _vm.$set(_vm.model, "address1", $$v)
                },
                expression: "model.address1"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col md:w-1/2" },
          [
            _c("ui-input-group", {
              attrs: {
                label: "Address 2",
                "hide-label": "",
                name: _vm.field.handle + "_address2",
                placeholder: "Address 2",
                hasError: _vm.hasError(_vm.field.handle + ".address2"),
                errorMessage: _vm.errorMessage(_vm.field.handle + ".address2")
              },
              model: {
                value: _vm.model.address2,
                callback: function($$v) {
                  _vm.$set(_vm.model, "address2", $$v)
                },
                expression: "model.address2"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col md:w-1/3" },
          [
            _c("ui-input-group", {
              attrs: {
                name: _vm.field.handle + "_city",
                required: _vm.field.required,
                label: "City",
                placeholder: "City",
                "hide-label": "",
                hasError: _vm.hasError(_vm.field.handle + ".city"),
                errorMessage: _vm.errorMessage(_vm.field.handle + ".city")
              },
              model: {
                value: _vm.model.city,
                callback: function($$v) {
                  _vm.$set(_vm.model, "city", $$v)
                },
                expression: "model.city"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col md:w-1/3" },
          [
            _c("ui-input-group", {
              attrs: {
                name: _vm.field.handle + "_state",
                required: _vm.field.required,
                label: "State",
                placeholder: "State",
                "hide-label": "",
                hasError: _vm.hasError(_vm.field.handle + ".state"),
                errorMessage: _vm.errorMessage(_vm.field.handle + ".state")
              },
              model: {
                value: _vm.model.state,
                callback: function($$v) {
                  _vm.$set(_vm.model, "state", $$v)
                },
                expression: "model.state"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col md:w-1/3" },
          [
            _c("ui-input-group", {
              attrs: {
                name: _vm.field.handle + "_zip",
                required: _vm.field.required,
                label: "Zip Code",
                placeholder: "Zip Code",
                "hide-label": "",
                hasError: _vm.hasError(_vm.field.handle + ".zip"),
                errorMessage: _vm.errorMessage(_vm.field.handle + ".zip")
              },
              model: {
                value: _vm.model.zip,
                callback: function($$v) {
                  _vm.$set(_vm.model, "zip", $$v)
                },
                expression: "model.zip"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col w-full" },
          [
            _c("ui-input-group", {
              attrs: {
                label: "Country",
                "hide-label": "",
                name: _vm.field.handle + "_country",
                placeholder: "Country",
                hasError: _vm.hasError(_vm.field.handle + ".country"),
                errorMessage: _vm.errorMessage(_vm.field.handle + ".country")
              },
              model: {
                value: _vm.model.country,
                callback: function($$v) {
                  _vm.$set(_vm.model, "country", $$v)
                },
                expression: "model.country"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "h-full rounded", attrs: { id: _vm.mapID } }, [
        _vm.mapError
          ? _c("div", {
              staticClass: "bg-gray-100 rounded shadow p-3",
              domProps: { innerHTML: _vm._s(_vm.mapError) }
            })
          : _vm._e()
      ]),
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
          staticClass: "help"
        },
        [
          _c(
            "p",
            [
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
                " is required in order to view the map component and retrieve latitude and longitude coordinates for your address. \n            Once you've obtained one, please visit the "
              ),
              _c("router-link", { attrs: { to: "/settings/google_maps" } }, [
                _vm._v("Google Maps settings page")
              ]),
              _vm._v(" to enter your API key.")
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvbWl4aW5zL2ZpZWxkdHlwZXMvZmllbGQuanMiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0FkZHJlc3MvRmllbGQudnVlP2Y0MGEiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZT9jYTQwIl0sIm5hbWVzIjpbInByb3BzIiwiZmllbGQiLCJ0eXBlIiwiT2JqZWN0IiwicmVxdWlyZWQiLCJ2YWx1ZSIsImVycm9ycyIsImNvbXB1dGVkIiwibW9kZWwiLCJnZXQiLCJzZXQiLCIkZW1pdCIsIm1ldGhvZHMiLCJoYXNFcnJvciIsImhhbmRsZSIsImhhcyIsImVycm9yTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEZBO0FBRUE7QUFDQSwyQkFEQTtBQUdBLHlFQUhBO0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLGtCQUZBO0FBR0Esa0JBSEE7QUFJQTtBQUpBO0FBT0EsR0FiQTtBQWVBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLGFBTEEsdUJBS0E7QUFDQTtBQUNBLEtBUEE7QUFTQSxZQVRBLHNCQVNBO0FBQ0E7QUFDQSxLQVhBO0FBYUEsU0FiQSxtQkFhQTtBQUNBO0FBQ0E7QUFmQSxHQWZBO0FBaUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGFBRkEsbUJBRUEsS0FGQSxFQUVBO0FBQ0E7QUFDQTtBQUpBLEtBREE7QUFRQSxVQVJBLGtCQVFBLEtBUkEsRUFRQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFaQSxHQWpDQTtBQWdEQTtBQUNBLGlCQURBLDJCQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQVpBO0FBY0EsYUFkQSx1QkFjQTtBQUNBLHFDQUNBLG1DQURBO0FBR0E7QUFDQSxLQW5CQTtBQXFCQTtBQUFBOztBQUNBO0FBRUE7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQURBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQSxPQXBCQTtBQXFCQSxLQTdDQSxFQTZDQSxJQTdDQTtBQXJCQSxHQWhEQTtBQXFIQSxTQXJIQSxxQkFxSEE7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxvQkFGQTtBQUdBLGdCQUhBO0FBSUEsaUJBSkE7QUFLQSxlQUxBO0FBTUEsbUJBTkE7QUFPQSxlQVBBO0FBUUEsZUFSQTtBQVNBO0FBVEE7QUFXQTtBQUNBO0FBbklBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0EsaUVBQWU7QUFDWEEsT0FBSyxFQUFFO0FBQ0hDLFNBQUssRUFBRTtBQUNIQyxVQUFJLEVBQUVDLE1BREg7QUFFSEMsY0FBUSxFQUFFO0FBRlAsS0FESjtBQU1IQyxTQUFLLEVBQUU7QUFDSEQsY0FBUSxFQUFFLEtBRFA7QUFFSCxpQkFBUztBQUZOLEtBTko7QUFXSEUsVUFBTSxFQUFFO0FBQ0pKLFVBQUksRUFBRUMsTUFERjtBQUVKQyxjQUFRLEVBQUUsS0FGTjtBQUdKLGlCQUFTLG9CQUFNLENBQUU7QUFIYjtBQVhMLEdBREk7QUFtQlhHLFVBQVEsRUFBRTtBQUNOQyxTQUFLLEVBQUU7QUFDSEMsU0FERyxpQkFDRztBQUNGLGVBQU8sS0FBS0osS0FBWjtBQUNILE9BSEU7QUFLSEssU0FMRyxlQUtDTCxLQUxELEVBS1E7QUFDUCxhQUFLTSxLQUFMLENBQVcsT0FBWCxFQUFvQk4sS0FBcEI7QUFDSDtBQVBFO0FBREQsR0FuQkM7QUErQlhPLFNBQU8sRUFBRTtBQUNMQyxZQURLLG9CQUNJQyxNQURKLEVBQ1k7QUFDYixhQUFPLEtBQUtSLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlTLEdBQVosQ0FBZ0JELE1BQWhCLENBQXRCO0FBQ0gsS0FISTtBQUtMRSxnQkFMSyx3QkFLUUYsTUFMUixFQUtnQjtBQUNqQixhQUFPLEtBQUtELFFBQUwsQ0FBY0MsTUFBZCxJQUF3QixLQUFLUixNQUFMLENBQVlHLEdBQVosQ0FBZ0JLLE1BQWhCLENBQXhCLEdBQWtELEVBQXpEO0FBQ0g7QUFQSTtBQS9CRSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ0EsQ0FBbUc7QUFDbkcsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsd0VBQU07QUFDUixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxzRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzRNLENBQUMsaUVBQWUsdU1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQS9PO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0EsV0FBVyw4QkFBOEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEJBQThCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4QkFBOEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDRCQUE0QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdDQUF3QyxnQkFBZ0IsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsOEJBQThCLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19BZGRyZXNzX0ZpZWxkX3Z1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8dWktZmllbGQtZ3JvdXBcbiAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGVcIlxuICAgICAgICA6ZmllbGRJZD1cImAke2ZpZWxkLmhhbmRsZX0tZmllbGRgXCJcbiAgICAgICAgOmxhYmVsPVwiZmllbGQubmFtZVwiXG4gICAgICAgIDpoZWxwPVwiZmllbGQuaGVscFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtZDp3LTEvMlwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlICsgJ19hZGRyZXNzMSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJlcXVpcmVkPVwiZmllbGQucmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZGRyZXNzIDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGVsLmFkZHJlc3MxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpoYXNFcnJvcj1cImhhc0Vycm9yKGAke2ZpZWxkLmhhbmRsZX0uYWRkcmVzczFgKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3JNZXNzYWdlPVwiZXJyb3JNZXNzYWdlKGAke2ZpZWxkLmhhbmRsZX0uYWRkcmVzczFgKVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbWQ6dy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3MgMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZSArICdfYWRkcmVzczInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyAyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtb2RlbC5hZGRyZXNzMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzRXJyb3I9XCJoYXNFcnJvcihgJHtmaWVsZC5oYW5kbGV9LmFkZHJlc3MyYClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yTWVzc2FnZT1cImVycm9yTWVzc2FnZShgJHtmaWVsZC5oYW5kbGV9LmFkZHJlc3MyYClcIj5cbiAgICAgICAgICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbWQ6dy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZSArICdfY2l0eSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJlcXVpcmVkPVwiZmllbGQucmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibW9kZWwuY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzRXJyb3I9XCJoYXNFcnJvcihgJHtmaWVsZC5oYW5kbGV9LmNpdHlgKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3JNZXNzYWdlPVwiZXJyb3JNZXNzYWdlKGAke2ZpZWxkLmhhbmRsZX0uY2l0eWApXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtZDp3LTEvM1wiPlxuICAgICAgICAgICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlICsgJ19zdGF0ZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJlcXVpcmVkPVwiZmllbGQucmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtb2RlbC5zdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzRXJyb3I9XCJoYXNFcnJvcihgJHtmaWVsZC5oYW5kbGV9LnN0YXRlYClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yTWVzc2FnZT1cImVycm9yTWVzc2FnZShgJHtmaWVsZC5oYW5kbGV9LnN0YXRlYClcIj5cbiAgICAgICAgICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG1kOnctMS8zXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX3ppcCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJlcXVpcmVkPVwiZmllbGQucmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJaaXAgQ29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlppcCBDb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtb2RlbC56aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhhc0Vycm9yPVwiaGFzRXJyb3IoYCR7ZmllbGQuaGFuZGxlfS56aXBgKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3JNZXNzYWdlPVwiZXJyb3JNZXNzYWdlKGAke2ZpZWxkLmhhbmRsZX0uemlwYClcIj5cbiAgICAgICAgICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZSArICdfY291bnRyeSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtb2RlbC5jb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpoYXNFcnJvcj1cImhhc0Vycm9yKGAke2ZpZWxkLmhhbmRsZX0uY291bnRyeWApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvck1lc3NhZ2U9XCJlcnJvck1lc3NhZ2UoYCR7ZmllbGQuaGFuZGxlfS5jb3VudHJ5YClcIj5cbiAgICAgICAgICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHJvdW5kZWRcIiA6aWQ9XCJtYXBJRFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy1ncmF5LTEwMCByb3VuZGVkIHNoYWRvdyBwLTNcIiB2LWlmPVwibWFwRXJyb3JcIiB2LWh0bWw9XCJtYXBFcnJvclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwXCIgdi1zaG93PVwiaGFzQVBJS2V5ID09IGZhbHNlXCI+XG4gICAgICAgICAgICAgICAgPHA+QSA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZ2V0LWFwaS1rZXlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5Hb29nbGUgTWFwcyBBUEkga2V5PC9hPiBpcyByZXF1aXJlZCBpbiBvcmRlciB0byB2aWV3IHRoZSBtYXAgY29tcG9uZW50IGFuZCByZXRyaWV2ZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGNvb3JkaW5hdGVzIGZvciB5b3VyIGFkZHJlc3MuIFxuICAgICAgICAgICAgICAgIE9uY2UgeW91J3ZlIG9idGFpbmVkIG9uZSwgcGxlYXNlIHZpc2l0IHRoZSA8cm91dGVyLWxpbmsgdG89XCIvc2V0dGluZ3MvZ29vZ2xlX21hcHNcIj5Hb29nbGUgTWFwcyBzZXR0aW5ncyBwYWdlPC9yb3V0ZXItbGluaz4gdG8gZW50ZXIgeW91ciBBUEkga2V5LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3VpLWZpZWxkLWdyb3VwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRmllbGRNaXhpbiBmcm9tICdAL21peGlucy9maWVsZHR5cGVzL2ZpZWxkJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnYWRkcmVzcy1maWVsZHR5cGUnLFxuXG4gICAgICAgIG1peGluczogW0ZpZWxkTWl4aW5dLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1hcDogbnVsbCxcbiAgICAgICAgICAgICAgICBtYXJrZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgbWFwRXJyb3I6ICcnLFxuICAgICAgICAgICAgICAgIGhlbHA6ICc8cD5BIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9nZXQtYXBpLWtleVwiIHRhcmdldD1cIl9ibGFua1wiPkdvb2dsZSBNYXBzIEFQSSBrZXk8L2E+IGlzIHJlcXVpcmVkIGluIG9yZGVyIHRvIHZpZXcgdGhlIG1hcCBjb21wb25lbnQgYW5kIHJldHJpZXZlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgY29vcmRpbmF0ZXMgZm9yIHlvdXIgYWRkcmVzcy48L3A+PHA+T25jZSB5b3UgaGF2ZSBvYnRhaW5lZCBvbmUsIHBsZWFzZSB2aXNpdCB0aGUgPHJvdXRlci1saW5rIHRvPVwiL3NldHRpbmdzL2dvb2dsZV9tYXBzXCI+R29vZ2xlIE1hcHMgc2V0dGluZ3MgcGFnZTwvcm91dGVyLWxpbms+IHRvIGVudGVyIHlvdXIgQVBJIGtleS48L3A+J1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGFwaUtleSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5nKCdtYXBzX2FwaV9rZXknKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGFzQVBJS2V5KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5hcGlLZXkgJiYgdGhpcy5hcGlLZXkgIT0gJycpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoYXNHTWFwcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISBfLmlzVW5kZWZpbmVkKHdpbmRvdy5nb29nbGUpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBtYXBJRCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maWVsZC5oYW5kbGUgKyAnX21hcCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGVBZGRyZXNzKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhcGlLZXkodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZU1hcCgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBpbml0aWFsaXplTWFwKCkge1xuICAgICAgICAgICAgICAgIGlmICghXy5pc1VuZGVmaW5lZCh3aW5kb3cuZ29vZ2xlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1hcCgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcFNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1hcEluaXQgPSAoKSA9PiB0aGlzLmNyZWF0ZU1hcCgpXG5cbiAgICAgICAgICAgICAgICAgICAgbWFwU2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHt0aGlzLmFwaUtleX0mY2FsbGJhY2s9bWFwSW5pdGApXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWFwU2NyaXB0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNyZWF0ZU1hcCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubWFwSUQpKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhdGVBZGRyZXNzKClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGxvY2F0ZUFkZHJlc3M6IF8uZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uaXNVbmRlZmluZWQod2luZG93Lmdvb2dsZSkpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLm1hcCwgJ3Jlc2l6ZScpXG5cbiAgICAgICAgICAgICAgICBsZXQgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKVxuICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzID0gXy50cmltKE9iamVjdC52YWx1ZXModGhpcy5tb2RlbCkuam9pbignICcpKVxuICAgICAgICAgICAgICAgIGxldCB6b29tID0gMTY7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFya2VyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIobmV3IGdvb2dsZS5tYXBzLkxhdExuZygwLCAwKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAuc2V0Wm9vbSgxKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZm9ybWF0dGVkX2FkZHJlc3MgPSAnJ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmxhdCA9ICcnXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwubG5nID0gJydcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBnZW9jb2Rlci5nZW9jb2RlKHsgYWRkcmVzcyB9LCAocmVzdWx0cywgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIocmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLnNldFpvb20oem9vbSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5mb3JtYXR0ZWRfYWRkcmVzcyA9IHJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwubGF0ID0gcmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5sbmcgPSByZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFya2VyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFya2VyLnNldE1hcChudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAxNTAwKVxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICBpZiAoXy5pc0VtcHR5KHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczE6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzMjogJycsXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHppcDogJycsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6ICcnLFxuICAgICAgICAgICAgICAgICAgICBsYXQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBsbmc6ICcnLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzczogJycsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7fVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoYXNFcnJvcihoYW5kbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9ycy5oYXMoaGFuZGxlKVxuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yTWVzc2FnZShoYW5kbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhc0Vycm9yKGhhbmRsZSkgPyB0aGlzLmVycm9ycy5nZXQoaGFuZGxlKSA6ICcnXG4gICAgICAgIH1cbiAgICB9LFxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhNWRmODdhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2YTVkZjg3YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YTVkZjg3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YTVkZjg3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhNWRmODdhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZhNWRmODdhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0FkZHJlc3MvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ1aS1maWVsZC1ncm91cFwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUsXG4gICAgICAgIGZpZWxkSWQ6IF92bS5maWVsZC5oYW5kbGUgKyBcIi1maWVsZFwiLFxuICAgICAgICBsYWJlbDogX3ZtLmZpZWxkLm5hbWUsXG4gICAgICAgIGhlbHA6IF92bS5maWVsZC5oZWxwXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBtZDp3LTEvMlwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSArIFwiX2FkZHJlc3MxXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IF92bS5maWVsZC5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJBZGRyZXNzIDFcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJBZGRyZXNzIDFcIixcbiAgICAgICAgICAgICAgICBcImhpZGUtbGFiZWxcIjogXCJcIixcbiAgICAgICAgICAgICAgICBoYXNFcnJvcjogX3ZtLmhhc0Vycm9yKF92bS5maWVsZC5oYW5kbGUgKyBcIi5hZGRyZXNzMVwiKSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IF92bS5lcnJvck1lc3NhZ2UoX3ZtLmZpZWxkLmhhbmRsZSArIFwiLmFkZHJlc3MxXCIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RlbC5hZGRyZXNzMSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubW9kZWwsIFwiYWRkcmVzczFcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5hZGRyZXNzMVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgbWQ6dy0xLzJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFkZHJlc3MgMlwiLFxuICAgICAgICAgICAgICAgIFwiaGlkZS1sYWJlbFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUgKyBcIl9hZGRyZXNzMlwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkFkZHJlc3MgMlwiLFxuICAgICAgICAgICAgICAgIGhhc0Vycm9yOiBfdm0uaGFzRXJyb3IoX3ZtLmZpZWxkLmhhbmRsZSArIFwiLmFkZHJlc3MyXCIpLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogX3ZtLmVycm9yTWVzc2FnZShfdm0uZmllbGQuaGFuZGxlICsgXCIuYWRkcmVzczJcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGVsLmFkZHJlc3MyLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5tb2RlbCwgXCJhZGRyZXNzMlwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGVsLmFkZHJlc3MyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBtZDp3LTEvM1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSArIFwiX2NpdHlcIixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogX3ZtLmZpZWxkLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNpdHlcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJoaWRlLWxhYmVsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgaGFzRXJyb3I6IF92bS5oYXNFcnJvcihfdm0uZmllbGQuaGFuZGxlICsgXCIuY2l0eVwiKSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IF92bS5lcnJvck1lc3NhZ2UoX3ZtLmZpZWxkLmhhbmRsZSArIFwiLmNpdHlcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGVsLmNpdHksXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLCBcImNpdHlcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5jaXR5XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBtZDp3LTEvM1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSArIFwiX3N0YXRlXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IF92bS5maWVsZC5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTdGF0ZVwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlN0YXRlXCIsXG4gICAgICAgICAgICAgICAgXCJoaWRlLWxhYmVsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgaGFzRXJyb3I6IF92bS5oYXNFcnJvcihfdm0uZmllbGQuaGFuZGxlICsgXCIuc3RhdGVcIiksXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBfdm0uZXJyb3JNZXNzYWdlKF92bS5maWVsZC5oYW5kbGUgKyBcIi5zdGF0ZVwiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kZWwuc3RhdGUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLCBcInN0YXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kZWwuc3RhdGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIG1kOnctMS8zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJfemlwXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IF92bS5maWVsZC5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJaaXAgQ29kZVwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlppcCBDb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJoaWRlLWxhYmVsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgaGFzRXJyb3I6IF92bS5oYXNFcnJvcihfdm0uZmllbGQuaGFuZGxlICsgXCIuemlwXCIpLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogX3ZtLmVycm9yTWVzc2FnZShfdm0uZmllbGQuaGFuZGxlICsgXCIuemlwXCIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RlbC56aXAsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLCBcInppcFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGVsLnppcFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJDb3VudHJ5XCIsXG4gICAgICAgICAgICAgICAgXCJoaWRlLWxhYmVsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSArIFwiX2NvdW50cnlcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDb3VudHJ5XCIsXG4gICAgICAgICAgICAgICAgaGFzRXJyb3I6IF92bS5oYXNFcnJvcihfdm0uZmllbGQuaGFuZGxlICsgXCIuY291bnRyeVwiKSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IF92bS5lcnJvck1lc3NhZ2UoX3ZtLmZpZWxkLmhhbmRsZSArIFwiLmNvdW50cnlcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGVsLmNvdW50cnksXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLCBcImNvdW50cnlcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5jb3VudHJ5XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoLWZ1bGwgcm91bmRlZFwiLCBhdHRyczogeyBpZDogX3ZtLm1hcElEIH0gfSwgW1xuICAgICAgICBfdm0ubWFwRXJyb3JcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctZ3JheS0xMDAgcm91bmRlZCBzaGFkb3cgcC0zXCIsXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5tYXBFcnJvcikgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uaGFzQVBJS2V5ID09IGZhbHNlLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImhhc0FQSUtleSA9PSBmYWxzZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWxwXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkEgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZ2V0LWFwaS1rZXlcIixcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR29vZ2xlIE1hcHMgQVBJIGtleVwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiIGlzIHJlcXVpcmVkIGluIG9yZGVyIHRvIHZpZXcgdGhlIG1hcCBjb21wb25lbnQgYW5kIHJldHJpZXZlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgY29vcmRpbmF0ZXMgZm9yIHlvdXIgYWRkcmVzcy4gXFxuICAgICAgICAgICAgT25jZSB5b3UndmUgb2J0YWluZWQgb25lLCBwbGVhc2UgdmlzaXQgdGhlIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvc2V0dGluZ3MvZ29vZ2xlX21hcHNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJHb29nbGUgTWFwcyBzZXR0aW5ncyBwYWdlXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgdG8gZW50ZXIgeW91ciBBUEkga2V5LlwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9