(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default, getEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntry", function() { return getEntry; });
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/views/Collections/SharedForm.vue");
//
//
//
//
//
//
//
//
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
      collection: {},
      entry: {},
      form: null
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.patch('/api/collections/' + this.collection.slug + '/' + this.entry.id).then(function (response) {
        toast('Entry saved successfully', 'success');

        _this.$router.push('/collections/' + _this.collection.slug);
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getEntry(to.params.collection, to.params.id, function (error, entry, matrix, fields) {
      if (error) {
        next(function (vm) {
          vm.$router.push('/collections/' + vm.$router.currentRoute.params.collection);
          toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.collection = matrix;
          vm.entry = entry;
          vm.form = new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"](fields, true);
          vm.$emit('updateHead');
          vm.form.resetChangeListener();
        });
      }
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this2 = this;

    getEntry(to.params.collection, to.params.id, function (error, entry, matrix, fields) {
      if (error) {
        _this2.$router.push('/collections/' + _this2.$router.currentRoute.params.collection);

        toast(error.toString(), 'danger');
      } else {
        _this2.collection = matrix;
        _this2.entry = entry;
        _this2.form = new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"](fields, true);

        _this2.$emit('updateHead');

        _this2.form.resetChangeListener();
      }
    });
    next();
  }
});
function getEntry(collection, id, callback) {
  axios.get('/api/collections/' + collection + '/' + id).then(function (response) {
    var matrix = response.data.data.matrix;
    var entry = response.data.data.entry;
    var fields = {
      name: entry.name,
      slug: entry.slug,
      status: entry.status
    };

    if (matrix.fieldset) {
      _.forEach(matrix.fieldset.sections, function (section) {
        _.forEach(section.fields, function (field) {
          fields[field.handle] = entry[field.handle];
        });
      });
    }

    callback(null, entry, matrix, fields);
  })["catch"](function (error) {
    callback(new Error('The requested entry could not be found'));
  });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83& ***!
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
        "portal",
        { attrs: { to: "title" } },
        [
          _c(
            "app-title",
            { attrs: { icon: _vm.collection.icon || "pencil-alt" } },
            [_vm._v("Edit " + _vm._s(_vm.collection.reference_singular))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "subtitle" } }, [
        _vm._v(_vm._s(_vm.collection.description))
      ]),
      _vm._v(" "),
      _vm.form
        ? _c("shared-form", {
            attrs: {
              form: _vm.form,
              entry: _vm.entry,
              collection: _vm.collection
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Collections/Edit.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Collections/Edit.vue ***!
  \*************************************************/
/*! exports provided: getEntry, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=32cdfd83& */ "./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntry", function() { return _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getEntry"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Collections/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default, getEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntry", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getEntry"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=32cdfd83& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Db2xsZWN0aW9ucy9FZGl0LnZ1ZT81NGJmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Db2xsZWN0aW9ucy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ29sbGVjdGlvbnMvRWRpdC52dWU/MTI3YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ29sbGVjdGlvbnMvRWRpdC52dWU/MzBlMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsZUFGQTtBQUdBO0FBSEE7QUFLQSxHQWZBO0FBaUJBO0FBQ0E7QUFEQSxHQWpCQTtBQXFCQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FKQSxXQUlBO0FBQ0E7QUFDQSxPQU5BO0FBT0E7QUFUQSxHQXJCQTtBQWlDQSxrQkFqQ0EsNEJBaUNBLEVBakNBLEVBaUNBLElBakNBLEVBaUNBLElBakNBLEVBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFNBSkE7QUFLQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxTQVBBO0FBUUE7QUFDQSxLQWpCQTtBQWtCQSxHQXBEQTtBQXNEQSxtQkF0REEsNkJBc0RBLEVBdERBLEVBc0RBLElBdERBLEVBc0RBLElBdERBLEVBc0RBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQSxLQWJBO0FBZUE7QUFDQTtBQXZFQTtBQTBFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxzQkFGQTtBQUdBO0FBSEE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0FKQTtBQUtBOztBQUVBO0FBQ0EsR0FsQkEsV0FrQkE7QUFDQTtBQUNBLEdBcEJBO0FBcUJBLEM7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyw0Q0FBNEMsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUyxpQkFBaUIsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy83NS5qcz9pZD02NmY0MDMzNzFkNTBiZGUyNjE1MCIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxhcHAtdGl0bGUgOmljb249XCJjb2xsZWN0aW9uLmljb24gfHwgJ3BlbmNpbC1hbHQnXCI+RWRpdCB7eyBjb2xsZWN0aW9uLnJlZmVyZW5jZV9zaW5ndWxhciB9fTwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwic3VidGl0bGVcIj57eyBjb2xsZWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wb3J0YWw+XG5cbiAgICAgICAgPHNoYXJlZC1mb3JtXG4gICAgICAgICAgICB2LWlmPVwiZm9ybVwiXG4gICAgICAgICAgICA6Zm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgOmVudHJ5PVwiZW50cnlcIlxuICAgICAgICAgICAgOmNvbGxlY3Rpb249XCJjb2xsZWN0aW9uXCI+XG4gICAgICAgIDwvc2hhcmVkLWZvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nXG4gICAgaW1wb3J0IFNoYXJlZEZvcm0gZnJvbSAnLi9TaGFyZWRGb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogXy5oYXModGhpcy5mb3JtLCAnbmFtZScpID8gdGhpcy5mb3JtLm5hbWUgOiAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbjoge30sXG4gICAgICAgICAgICAgICAgZW50cnk6IHt9LFxuICAgICAgICAgICAgICAgIGZvcm06IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3NoYXJlZC1mb3JtJzogU2hhcmVkRm9ybVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucGF0Y2goJy9hcGkvY29sbGVjdGlvbnMvJyArIHRoaXMuY29sbGVjdGlvbi5zbHVnICsgJy8nICsgdGhpcy5lbnRyeS5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ0VudHJ5IHNhdmVkIHN1Y2Nlc3NmdWxseScsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2NvbGxlY3Rpb25zLycgKyB0aGlzLmNvbGxlY3Rpb24uc2x1ZylcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBnZXRFbnRyeSh0by5wYXJhbXMuY29sbGVjdGlvbiwgdG8ucGFyYW1zLmlkLCAoZXJyb3IsIGVudHJ5LCBtYXRyaXgsIGZpZWxkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvY29sbGVjdGlvbnMvJyArIHZtLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5jb2xsZWN0aW9uKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci50b1N0cmluZygpLCAnZGFuZ2VyJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uY29sbGVjdGlvbiA9IG1hdHJpeFxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZW50cnkgPSBlbnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZm9ybSA9IG5ldyBGb3JtKGZpZWxkcywgdHJ1ZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJGVtaXQoJ3VwZGF0ZUhlYWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5yZXNldENoYW5nZUxpc3RlbmVyKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlVXBkYXRlKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBnZXRFbnRyeSh0by5wYXJhbXMuY29sbGVjdGlvbiwgdG8ucGFyYW1zLmlkLCAoZXJyb3IsIGVudHJ5LCBtYXRyaXgsIGZpZWxkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2NvbGxlY3Rpb25zLycgKyB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5jb2xsZWN0aW9uKVxuXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnRvU3RyaW5nKCksICdkYW5nZXInKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IG1hdHJpeFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVudHJ5ID0gZW50cnlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcm0oZmllbGRzLCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZUhlYWQnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXRDaGFuZ2VMaXN0ZW5lcigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbmV4dCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0RW50cnkoY29sbGVjdGlvbiwgaWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9jb2xsZWN0aW9ucy8nICsgY29sbGVjdGlvbiArICcvJyArIGlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG1hdHJpeCA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXRyaXhcbiAgICAgICAgICAgIGxldCBlbnRyeSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5lbnRyeVxuICAgICAgICAgICAgbGV0IGZpZWxkcyA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgIHNsdWc6IGVudHJ5LnNsdWcsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBlbnRyeS5zdGF0dXMsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXRyaXguZmllbGRzZXQpIHtcbiAgICAgICAgICAgICAgICBfLmZvckVhY2gobWF0cml4LmZpZWxkc2V0LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaChzZWN0aW9uLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc1tmaWVsZC5oYW5kbGVdID0gZW50cnlbZmllbGQuaGFuZGxlXVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGVudHJ5LCBtYXRyaXgsIGZpZWxkcylcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignVGhlIHJlcXVlc3RlZCBlbnRyeSBjb3VsZCBub3QgYmUgZm91bmQnKSlcbiAgICAgICAgfSlcbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYXBwLXRpdGxlXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGljb246IF92bS5jb2xsZWN0aW9uLmljb24gfHwgXCJwZW5jaWwtYWx0XCIgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIkVkaXQgXCIgKyBfdm0uX3MoX3ZtLmNvbGxlY3Rpb24ucmVmZXJlbmNlX3Npbmd1bGFyKSldXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicG9ydGFsXCIsIHsgYXR0cnM6IHsgdG86IFwic3VidGl0bGVcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY29sbGVjdGlvbi5kZXNjcmlwdGlvbikpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZm9ybVxuICAgICAgICA/IF9jKFwic2hhcmVkLWZvcm1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgZm9ybTogX3ZtLmZvcm0sXG4gICAgICAgICAgICAgIGVudHJ5OiBfdm0uZW50cnksXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb246IF92bS5jb2xsZWN0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMmNkZmQ4MyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMyY2RmZDgzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMyY2RmZDgzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMyY2RmZDgzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMmNkZmQ4MyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMmNkZmQ4MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0VkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMmNkZmQ4MyZcIiJdLCJzb3VyY2VSb290IjoiIn0=