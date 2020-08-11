(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Menus/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Menus/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default, getMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenu", function() { return getMenu; });
/* harmony import */ var _services_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Form */ "./resources/js/services/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/pages/Menus/SharedForm.vue");
//
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
        inner: _.has(this.form, 'name') ? this.form.name : 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      id: null,
      sections: [],
      form: null
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  watch: {
    sections: {
      deep: true,
      handler: function handler(value) {
        if (!this.hasChanges) {
          this.form.onFirstChange();
        }
      }
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.patch("/api/menus/".concat(this.id)).then(function () {
        axios.post("/api/fieldsets/".concat(_this.form.fieldset.id, "/sections"), {
          sections: _this.sections
        }).then(function () {
          toast('Menu successfully saved', 'success');

          _this.$router.push('/menus');
        })["catch"](function (response) {
          toast(response.message, 'failed');
        });
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getMenu(to.params.menu, function (error, menu) {
      if (error) {
        next(function (vm) {
          vm.$router.push('/menus');
          toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.id = menu.id;
          vm.sections = menu.fieldset.sections;
          vm.form = new _services_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
            name: menu.name,
            handle: menu.handle,
            description: menu.description,
            fieldset: menu.fieldset
          }, true);
          vm.$nextTick(function () {
            vm.$emit('updateHead');
            vm.form.resetChangeListener();
          });
        });
      }
    });
  }
});
function getMenu(menu, callback) {
  axios.get("/api/menus/".concat(menu)).then(function (response) {
    callback(null, response.data.data);
  })["catch"](function (error) {
    callback(new Error('The requested menu could not be found'));
  });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Menus/Edit.vue?vue&type=template&id=20feec2e&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Menus/Edit.vue?vue&type=template&id=20feec2e& ***!
  \********************************************************************************************************************************************************************************************************/
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
        [_c("app-title", { attrs: { icon: "anchor" } }, [_vm._v("Edit Menu")])],
        1
      ),
      _vm._v(" "),
      _vm.form ? _c("shared-form", { attrs: { form: _vm.form } }) : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Menus/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Menus/Edit.vue ***!
  \*******************************************/
/*! exports provided: getMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_20feec2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=20feec2e& */ "./resources/js/pages/Menus/Edit.vue?vue&type=template&id=20feec2e&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/Menus/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenu", function() { return _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getMenu"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_20feec2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_20feec2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Menus/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Menus/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Menus/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default, getMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Menus/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenu", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getMenu"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Menus/Edit.vue?vue&type=template&id=20feec2e&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Menus/Edit.vue?vue&type=template&id=20feec2e& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_20feec2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=20feec2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Menus/Edit.vue?vue&type=template&id=20feec2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_20feec2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_20feec2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL01lbnVzL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NZW51cy9FZGl0LnZ1ZT81MWU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NZW51cy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWVudXMvRWRpdC52dWU/ZGI2YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWVudXMvRWRpdC52dWU/YjI3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FmQTtBQWlCQTtBQUNBO0FBREEsR0FqQkE7QUFxQkE7QUFDQTtBQUNBLGdCQURBO0FBRUEsYUFGQSxtQkFFQSxLQUZBLEVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREEsR0FyQkE7QUFnQ0E7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0EscURBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFBQTtBQUFBLFdBQ0EsSUFEQSxDQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUxBLFdBS0E7QUFDQTtBQUNBLFNBUEE7QUFRQSxPQVZBLFdBVUE7QUFDQTtBQUNBLE9BWkE7QUFhQTtBQWZBLEdBaENBO0FBa0RBLGtCQWxEQSw0QkFrREEsRUFsREEsRUFrREEsSUFsREEsRUFrREEsSUFsREEsRUFrREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsU0FKQTtBQUtBLE9BTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsMkJBREE7QUFFQSwrQkFGQTtBQUdBLHlDQUhBO0FBSUE7QUFKQSxhQUtBLElBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQSxXQUhBO0FBSUEsU0FmQTtBQWdCQTtBQUNBLEtBekJBO0FBMEJBO0FBN0VBO0FBZ0ZBO0FBQ0E7QUFDQTtBQUNBLEdBRkEsV0FFQTtBQUNBO0FBQ0EsR0FKQTtBQUtBLEM7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDLDBCQUEwQixTQUFTLGlCQUFpQixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTLGlCQUFpQixFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy8xMTkuanM/aWQ9M2IwNGE3ZWZiOTg5YWY2MjFlNTQiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG5cdFx0XHQ8YXBwLXRpdGxlIGljb249XCJhbmNob3JcIj5FZGl0IE1lbnU8L2FwcC10aXRsZT5cblx0XHQ8L3BvcnRhbD5cblxuICAgICAgICA8c2hhcmVkLWZvcm0gdi1pZj1cImZvcm1cIiA6Zm9ybT1cImZvcm1cIj48L3NoYXJlZC1mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Gb3JtJ1xuICAgIGltcG9ydCBTaGFyZWRGb3JtIGZyb20gJy4vU2hhcmVkRm9ybSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6IF8uaGFzKHRoaXMuZm9ybSwgJ25hbWUnKSA/IHRoaXMuZm9ybS5uYW1lIDogJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgIHNlY3Rpb25zOiBbXSxcbiAgICAgICAgICAgICAgICBmb3JtOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3NoYXJlZC1mb3JtJzogU2hhcmVkRm9ybVxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBzZWN0aW9uczoge1xuICAgICAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISB0aGlzLmhhc0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5vbkZpcnN0Q2hhbmdlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhdGNoKGAvYXBpL21lbnVzLyR7dGhpcy5pZH1gKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGAvYXBpL2ZpZWxkc2V0cy8ke3RoaXMuZm9ybS5maWVsZHNldC5pZH0vc2VjdGlvbnNgLCB7IHNlY3Rpb25zOiB0aGlzLnNlY3Rpb25zIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCgnTWVudSBzdWNjZXNzZnVsbHkgc2F2ZWQnLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9tZW51cycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UubWVzc2FnZSwgJ2ZhaWxlZCcpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgZ2V0TWVudSh0by5wYXJhbXMubWVudSwgKGVycm9yLCBtZW51KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kcm91dGVyLnB1c2goJy9tZW51cycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnRvU3RyaW5nKCksICdkYW5nZXInKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5pZCAgICAgICA9IG1lbnUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnNlY3Rpb25zID0gbWVudS5maWVsZHNldC5zZWN0aW9uc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5mb3JtID0gbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICAgICAgICBtZW51Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAgICAgIG1lbnUuaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZW51LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0OiAgICBtZW51LmZpZWxkc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRlbWl0KCd1cGRhdGVIZWFkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnJlc2V0Q2hhbmdlTGlzdGVuZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRNZW51KG1lbnUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLmdldChgL2FwaS9tZW51cy8ke21lbnV9YCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlLmRhdGEuZGF0YSlcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ1RoZSByZXF1ZXN0ZWQgbWVudSBjb3VsZCBub3QgYmUgZm91bmQnKSlcbiAgICAgICAgfSlcbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwiYW5jaG9yXCIgfSB9LCBbX3ZtLl92KFwiRWRpdCBNZW51XCIpXSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5mb3JtID8gX2MoXCJzaGFyZWQtZm9ybVwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtIH0gfSkgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGZlZWMyZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIwZmVlYzJlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwZmVlYzJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwZmVlYzJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGZlZWMyZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMGZlZWMyZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL01lbnVzL0VkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGZlZWMyZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=