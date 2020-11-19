(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Terms/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Terms/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default, getTerm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTerm", function() { return getTerm; });
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Form */ "./resources/js/services/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/pages/Terms/SharedForm.vue");
//
//
//
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
  auth: function auth() {
    return {
      permission: 'terms.update'
    };
  },
  head: {
    title: function title() {
      return {
        inner: this.term.name || 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      taxonomy: {},
      term: {},
      form: new _services_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({})
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    sections: function sections() {
      var body = [];
      var sidebar = [];
      body = _.filter(this.taxonomy.blueprint.sections, function (section) {
        return section.placement == 'body';
      });
      sidebar = _.filter(this.taxonomy.blueprint.sections, function (section) {
        return section.placement == 'sidebar';
      });
      return {
        body: body,
        sidebar: sidebar
      };
    },
    singular: function singular() {
      if (this.taxonomy.name) {
        return pluralize__WEBPACK_IMPORTED_MODULE_0___default.a.singular(this.taxonomy.name);
      }

      return '';
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.patch("/api/taxonomies/".concat(this.taxonomy.id, "/terms/").concat(this.term.id)).then(function (response) {
        toast('Term saved successfully', 'success');

        _this.$router.push("/taxonomies/".concat(_this.taxonomy.id));
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getTerm(to.params.taxonomy, to.params.id, function (error, term, taxonomy, fields) {
      if (error) {
        next(function (vm) {
          vm.$router.push('/taxonomies/' + vm.$router.currentRoute.params.taxonomy);
          toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.taxonomy = taxonomy;
          vm.term = term;
          vm.form = new _services_Form__WEBPACK_IMPORTED_MODULE_1__["default"](fields, true);
          vm.$emit('updateHead');
        });
      }
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this2 = this;

    getTerm(to.params.taxonomy, to.params.id, function (error, term, taxonomy, fields) {
      if (error) {
        _this2.$router.push('/taxonomies/' + _this2.$router.currentRoute.params.taxonomy);

        toast(error.toString(), 'danger');
      } else {
        _this2.taxonomy = taxonomy;
        _this2.term = term;
        _this2.form = new _services_Form__WEBPACK_IMPORTED_MODULE_1__["default"](fields, true);

        _this2.$emit('updateHead');

        _this2.$nextTick(function () {
          _this2.form.resetChangeListener();
        });
      }
    });
    next();
  }
});
function getTerm(taxonomy, id, callback) {
  axios.get("/api/taxonomies/".concat(taxonomy, "/terms/").concat(id)).then(function (response) {
    var taxonomy = response.data.data.taxonomy;
    var term = response.data.data;
    var fields = {
      name: term.name,
      slug: term.slug,
      status: term.status
    };

    _.forEach(taxonomy.blueprint.sections, function (section) {
      _.forEach(section.fields, function (field) {
        fields[field.handle] = term[field.handle];
      });
    });

    callback(null, term, taxonomy, fields);
  })["catch"](function (error) {
    callback(new Error('The requested term could not be found'));
  });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Terms/Edit.vue?vue&type=template&id=749f220a&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Terms/Edit.vue?vue&type=template&id=749f220a& ***!
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
        [
          _c(
            "page-title",
            { attrs: { icon: _vm.taxonomy.icon || "pencil-alt" } },
            [_vm._v("Edit " + _vm._s(_vm.singular))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "subtitle" } }, [
        _vm._v(_vm._s(_vm.taxonomy.description))
      ]),
      _vm._v(" "),
      _c("shared-form", {
        attrs: {
          taxonomy: _vm.taxonomy,
          form: _vm.form,
          submit: _vm.submit,
          term: _vm.term
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Terms/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Terms/Edit.vue ***!
  \*******************************************/
/*! exports provided: getTerm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_749f220a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=749f220a& */ "./resources/js/pages/Terms/Edit.vue?vue&type=template&id=749f220a&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/Terms/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTerm", function() { return _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getTerm"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_749f220a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_749f220a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Terms/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Terms/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Terms/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default, getTerm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Terms/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTerm", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getTerm"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Terms/Edit.vue?vue&type=template&id=749f220a&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Terms/Edit.vue?vue&type=template&id=749f220a& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_749f220a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=749f220a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Terms/Edit.vue?vue&type=template&id=749f220a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_749f220a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_749f220a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1Rlcm1zL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9UZXJtcy9FZGl0LnZ1ZT9iZGJkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9UZXJtcy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGVybXMvRWRpdC52dWU/ZmU4YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGVybXMvRWRpdC52dWU/Yjk1MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FMQTtBQU9BO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FQQTtBQWVBLE1BZkEsa0JBZUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsY0FGQTtBQUdBO0FBSEE7QUFLQSxHQXJCQTtBQXVCQTtBQUNBO0FBREEsR0F2QkE7QUEyQkE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxPQUZBO0FBSUE7QUFDQTtBQUNBLE9BRkE7QUFJQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQUlBLEtBakJBO0FBbUJBLFlBbkJBLHNCQW1CQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBekJBLEdBM0JBO0FBdURBO0FBQ0EsVUFEQSxvQkFDQTtBQUFBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUpBLFdBSUE7QUFDQTtBQUNBLE9BTkE7QUFPQTtBQVRBLEdBdkRBO0FBbUVBLGtCQW5FQSw0QkFtRUEsRUFuRUEsRUFtRUEsSUFuRUEsRUFtRUEsSUFuRUEsRUFtRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsU0FKQTtBQUtBLE9BTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxTQU5BO0FBT0E7QUFDQSxLQWhCQTtBQWlCQSxHQXJGQTtBQXVGQSxtQkF2RkEsNkJBdUZBLEVBdkZBLEVBdUZBLElBdkZBLEVBdUZBLElBdkZBLEVBdUZBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQSxLQWhCQTtBQWtCQTtBQUNBO0FBM0dBO0FBOEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLHFCQUZBO0FBR0E7QUFIQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FKQTs7QUFNQTtBQUNBLEdBaEJBLFdBZ0JBO0FBQ0E7QUFDQSxHQWxCQTtBQW1CQSxDOzs7Ozs7Ozs7Ozs7QUNuSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGNBQWMsRUFBRTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsMENBQTBDLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMsaUJBQWlCLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUE7QUFBQTtBQUEwTCxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzEzMS5qcz9pZD02NmFkMmYzYmFmZDk4ZWEwNTYxYyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxwYWdlLXRpdGxlIDppY29uPVwidGF4b25vbXkuaWNvbiB8fCAncGVuY2lsLWFsdCdcIj5FZGl0IHt7IHNpbmd1bGFyIH19PC9wYWdlLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwic3VidGl0bGVcIj57eyB0YXhvbm9teS5kZXNjcmlwdGlvbiB9fTwvcG9ydGFsPlxuXG4gICAgICAgIDxzaGFyZWQtZm9ybSA6dGF4b25vbXk9XCJ0YXhvbm9teVwiIDpmb3JtPVwiZm9ybVwiIDpzdWJtaXQ9XCJzdWJtaXRcIiA6dGVybT1cInRlcm1cIj48L3NoYXJlZC1mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgcGx1cmFsaXplIGZyb20gJ3BsdXJhbGl6ZSdcbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Gb3JtJ1xuICAgIGltcG9ydCBTaGFyZWRGb3JtIGZyb20gJy4vU2hhcmVkRm9ybSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgYXV0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbjogJ3Rlcm1zLnVwZGF0ZScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6IHRoaXMudGVybS5uYW1lIHx8ICdMb2FkaW5nLi4uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0YXhvbm9teToge30sXG4gICAgICAgICAgICAgICAgdGVybToge30sXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe30pLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdzaGFyZWQtZm9ybSc6IFNoYXJlZEZvcm1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc2VjdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBbXVxuICAgICAgICAgICAgICAgIGxldCBzaWRlYmFyID0gW11cblxuICAgICAgICAgICAgICAgIGJvZHkgPSBfLmZpbHRlcih0aGlzLnRheG9ub215LmJsdWVwcmludC5zZWN0aW9ucywgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbi5wbGFjZW1lbnQgPT0gJ2JvZHknXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHNpZGViYXIgPSBfLmZpbHRlcih0aGlzLnRheG9ub215LmJsdWVwcmludC5zZWN0aW9ucywgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbi5wbGFjZW1lbnQgPT0gJ3NpZGViYXInXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXI6IHNpZGViYXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzaW5ndWxhcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YXhvbm9teS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwbHVyYWxpemUuc2luZ3VsYXIodGhpcy50YXhvbm9teS5uYW1lKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhdGNoKGAvYXBpL3RheG9ub21pZXMvJHt0aGlzLnRheG9ub215LmlkfS90ZXJtcy8ke3RoaXMudGVybS5pZH1gKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnVGVybSBzYXZlZCBzdWNjZXNzZnVsbHknLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goYC90YXhvbm9taWVzLyR7dGhpcy50YXhvbm9teS5pZH1gKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGdldFRlcm0odG8ucGFyYW1zLnRheG9ub215LCB0by5wYXJhbXMuaWQsIChlcnJvciwgdGVybSwgdGF4b25vbXksIGZpZWxkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvdGF4b25vbWllcy8nICsgdm0uJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLnRheG9ub215KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci50b1N0cmluZygpLCAnZGFuZ2VyJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0udGF4b25vbXkgPSB0YXhvbm9teVxuICAgICAgICAgICAgICAgICAgICAgICAgdm0udGVybSA9IHRlcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZvcm0gPSBuZXcgRm9ybShmaWVsZHMsIHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRlbWl0KCd1cGRhdGVIZWFkJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlVXBkYXRlKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBnZXRUZXJtKHRvLnBhcmFtcy50YXhvbm9teSwgdG8ucGFyYW1zLmlkLCAoZXJyb3IsIHRlcm0sIHRheG9ub215LCBmaWVsZHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy90YXhvbm9taWVzLycgKyB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy50YXhvbm9teSlcblxuICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci50b1N0cmluZygpLCAnZGFuZ2VyJylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRheG9ub215ID0gdGF4b25vbXlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXJtID0gdGVybVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybShmaWVsZHMsIHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlSGVhZCcpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0Q2hhbmdlTGlzdGVuZXIoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIG5leHQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldFRlcm0odGF4b25vbXksIGlkLCBjYWxsYmFjaykge1xuICAgICAgICBheGlvcy5nZXQoYC9hcGkvdGF4b25vbWllcy8ke3RheG9ub215fS90ZXJtcy8ke2lkfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGF4b25vbXkgPSByZXNwb25zZS5kYXRhLmRhdGEudGF4b25vbXlcbiAgICAgICAgICAgIGxldCB0ZXJtID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgICBsZXQgZmllbGRzID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRlcm0ubmFtZSxcbiAgICAgICAgICAgICAgICBzbHVnOiB0ZXJtLnNsdWcsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0ZXJtLnN0YXR1cyxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5mb3JFYWNoKHRheG9ub215LmJsdWVwcmludC5zZWN0aW9ucywgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgIF8uZm9yRWFjaChzZWN0aW9uLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzW2ZpZWxkLmhhbmRsZV0gPSB0ZXJtW2ZpZWxkLmhhbmRsZV1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgdGVybSwgdGF4b25vbXksIGZpZWxkcylcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignVGhlIHJlcXVlc3RlZCB0ZXJtIGNvdWxkIG5vdCBiZSBmb3VuZCcpKVxuICAgICAgICB9KVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwYWdlLXRpdGxlXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGljb246IF92bS50YXhvbm9teS5pY29uIHx8IFwicGVuY2lsLWFsdFwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJFZGl0IFwiICsgX3ZtLl9zKF92bS5zaW5ndWxhcikpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcInN1YnRpdGxlXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRheG9ub215LmRlc2NyaXB0aW9uKSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic2hhcmVkLWZvcm1cIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHRheG9ub215OiBfdm0udGF4b25vbXksXG4gICAgICAgICAgZm9ybTogX3ZtLmZvcm0sXG4gICAgICAgICAgc3VibWl0OiBfdm0uc3VibWl0LFxuICAgICAgICAgIHRlcm06IF92bS50ZXJtXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0OWYyMjBhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb24vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzQ5ZjIyMGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzQ5ZjIyMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzQ5ZjIyMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0OWYyMjBhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc0OWYyMjBhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvVGVybXMvRWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0OWYyMjBhJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGhlbWUudnVlPzRjMTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVGhlbWUudnVlPzNlZDIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZT9lNTBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBO0FBQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQURBO0FBU0EsTUFUQSxrQkFTQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSx5QkFGQTtBQUdBO0FBSEE7QUFLQSxHQWZBO0FBaUJBO0FBQ0EsZUFEQSx1QkFDQSxjQURBLEVBQ0E7QUFBQTs7QUFDQSxZQUNBLEtBREEsc0JBQ0EsY0FEQSxHQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxTQUZBOztBQUlBO0FBQ0EsT0FSQTtBQVNBLEtBWEE7QUFhQSxXQWJBLHFCQWFBO0FBQ0EsaUJBQ0Esd0JBREEsR0FFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLENBSUEsSUFKQSxDQUlBLElBSkEsRUFGQTtBQU9BLEtBckJBO0FBdUJBLGdCQXZCQSwwQkF1QkE7QUFBQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7O0FBQ0E7QUFDQSxPQU5BO0FBT0EsS0EvQkE7QUFpQ0EsaUJBakNBLDJCQWlDQTtBQUNBO0FBQ0EsS0FuQ0E7QUFxQ0EsZ0JBckNBLDBCQXFDQTtBQUNBO0FBQ0E7QUFDQSxLQXhDQTtBQTBDQSxnQkExQ0Esd0JBMENBLEtBMUNBLEVBMENBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLE9BSEEsQ0FLQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLE9BRkEsV0FFQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTs7QUFFQTs7QUFDQTtBQUNBO0FBQ0EsT0FYQTtBQVlBO0FBaEVBLEdBakJBO0FBb0ZBLGtCQXBGQSw0QkFvRkEsRUFwRkEsRUFvRkEsSUFwRkEsRUFvRkEsSUFwRkEsRUFvRkE7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBeEZBLEc7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDLDJCQUEyQixTQUFTLGtCQUFrQixFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBLFdBQVcsbUNBQW1DO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUJBQXFCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNkRBQTZEO0FBQzFFO0FBQ0EseUJBQXlCLHNCQUFzQjtBQUMvQztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBLDJCQUEyQiw0QkFBNEI7QUFDdkQsNkJBQTZCLHdDQUF3QztBQUNyRTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIseUNBQXlDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQXdEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLG1DQUFtQyw2QkFBNkI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsZ0JBQWdCLEVBQUU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQ0FBZ0MsTUFBTSxvQkFBb0IsRUFBRSxFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZDQUE2QztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFDQUFxQztBQUMvRCx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlCQUFpQjtBQUMzQyx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFxTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzEzMS5qcz9pZD0zMWVlOTNhZjY5ZjdkOWU1ZjdkMiIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxwYWdlLXRpdGxlIGljb249XCJwYWxldHRlXCI+VGhlbWU8L3BhZ2UtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDx1aS11cGxvYWRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGUtdXBsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVcGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJ1cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJ6aXBcIlxuICAgICAgICAgICAgICAgICAgICA6bXVsdGlwbGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInZlcmlmeVVwbG9hZFwiXG4gICAgICAgICAgICAgICAgPjwvdWktdXBsb2FkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbWItNiBtZDp3LTEvMiB4bDp3LTEvNFwiIHYtZm9yPVwidGhlbWUgaW4gdGhlbWVzXCIgOmtleT1cInRoZW1lLm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidy1mdWxsIHJvdW5kZWQtdCBzaGFkb3dcIiA6c3JjPVwidGhlbWUucHJldmlld1wiIDphbHQ9XCJ0aGVtZS5uYW1lXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+e3sgdGhlbWUubmFtZSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktODAwIHRleHQtYmFzZVwiPnt7IHRoZW1lLmRlc2NyaXB0aW9uIH19PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGJvcmRlci10LTIgYm9yZGVyLWdyYXktMjAwIHB0LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWktYnV0dG9uIGNsYXNzPVwidy1mdWxsXCIgdi1pZj1cIiEgdGhlbWUuYWN0aXZlXCIgQGNsaWNrPVwic2V0QXNBY3RpdmUodGhlbWUubmFtZXNwYWNlKVwiPlNldCBhcyBhY3RpdmU8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyXCIgdi1lbHNlPkN1cnJlbnRseSBBY3RpdmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdkYXNoYm9hcmQnIH1cIiBjbGFzcz1cImJ1dHRvblwiPkdvIEJhY2s8L3JvdXRlci1saW5rPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8dWktbW9kYWwgbmFtZT1cImNvbmZpcm1cIiB0aXRsZT1cIkNvbmZpcm0gb3ZlcnJpZGVcIiBrZXk9XCJjb25maXJtX21vZGFsXCIgdi1tb2RlbD1cImNvbmZpcm1Nb2RhbFwiPlxuICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG92ZXJyaWRlIHRoaXMgdGhlbWU/IFRoZSBleGlzdGluZyB0aGVtZSB3aWxsIGJlIGRpc2NhcmRlZC48L3A+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24gQGNsaWNrPVwic3VibWl0VXBsb2FkXCIgdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+WWVzLCBwbGVhc2UhPC91aS1idXR0b24+XG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiBAY2xpY2s9XCJjYW5jZWxVcGxvYWRcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtci0zXCI+TGVhdmUgYW5kIERpc2NhcmQgQ2hhbmdlczwvdWktYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC91aS1tb2RhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaGVhZDoge1xuICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5uZXI6ICdUaGVtZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGhlbWVzOiBbXSxcbiAgICAgICAgICAgIGNvbmZpcm1Nb2RhbDogZmFsc2UsXG4gICAgICAgICAgICB1cGxvYWRGb3JtOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZXRBc0FjdGl2ZSh0aGVtZU5hbWVzcGFjZSkge1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAucGF0Y2goYC9hcGkvdGhlbWUvJHt0aGVtZU5hbWVzcGFjZX1gKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHRoaXMudGhlbWVzLCAodGhlbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLmFjdGl2ZSA9IHRoZW1lLm5hbWVzcGFjZSA9PT0gdGhlbWVOYW1lc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnQWN0aXZlIHRoZW1lIGhhcyBiZWVuIHNldCcsICdzdWNjZXNzJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlZnJlc2goKSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90aGVtZXMnKSxcbiAgICAgICAgICAgIF0pLnRoZW4oYXhpb3Muc3ByZWFkKGZ1bmN0aW9uICh0aGVtZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW1lcyAgICAgICA9IHRoZW1lcy5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZEZvcm0gICA9IG51bGxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Nb2RhbCA9IGZhbHNlXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpKVxuICAgICAgICB9LFxuXG4gICAgICAgIHN1Ym1pdFVwbG9hZCgpIHtcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvdGhlbWVzJywgdGhpcy51cGxvYWRGb3JtKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRvYXN0KCdUaGVtZSBzdWNjZXNzZnVsbHkgdXBsb2FkZWQhJywgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtTW9kYWwgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMudXBsb2FkLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29uZmlybVVwbG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybU1vZGFsID0gdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIGNhbmNlbFVwbG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybU1vZGFsID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuJHJlZnMudXBsb2FkLnJlbW92ZSgpXG4gICAgICAgIH0sXG5cbiAgICAgICAgdmVyaWZ5VXBsb2FkKGZpbGVzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpbGVzID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgdXBsb2FkIGZvcm0uLlxuICAgICAgICAgICAgdGhpcy51cGxvYWRGb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIHRoaXMudXBsb2FkRm9ybS5hcHBlbmQoJ19tZXRob2QnLCAnUE9TVCcpXG4gICAgICAgICAgICB0aGlzLnVwbG9hZEZvcm0uYXBwZW5kKCdmaWxlLXVwbG9hZCcsIGZpbGVzKVxuXG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3RoZW1lcy92ZXJpZnknLCB0aGlzLnVwbG9hZEZvcm0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRVcGxvYWQoKVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzWydmaWxlLXVwbG9hZCddWzBdID09ICdBIFRoZW1lIHdpdGggbWF0Y2hpbmcgbmFtZSBhbHJlYWR5IGV4aXN0cy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVVwbG9hZCgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnVwbG9hZC5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnVwbG9hZC5zZXRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yc1snZmlsZS11cGxvYWQnXVswXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgIG5leHQoZnVuY3Rpb24odm0pIHtcbiAgICAgICAgICAgIHZtLnJlZnJlc2goKVxuICAgICAgICB9KVxuICAgIH0sXG59XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW19jKFwicGFnZS10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwicGFsZXR0ZVwiIH0gfSwgW192bS5fdihcIlRoZW1lXCIpXSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidWktdXBsb2FkXCIsIHtcbiAgICAgICAgICAgICAgcmVmOiBcInVwbG9hZFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmlsZS11cGxvYWRcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJVcGxvYWRcIixcbiAgICAgICAgICAgICAgICBhY2NlcHQ6IFwiemlwXCIsXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGlucHV0OiBfdm0udmVyaWZ5VXBsb2FkIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sXG4gICAgICAgIF92bS5fbChfdm0udGhlbWVzLCBmdW5jdGlvbih0aGVtZSkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IGtleTogdGhlbWUubmFtZSwgc3RhdGljQ2xhc3M6IFwiY29sIG1iLTYgbWQ6dy0xLzIgeGw6dy0xLzRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHJvdW5kZWQtdCBzaGFkb3dcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogdGhlbWUucHJldmlldywgYWx0OiB0aGVtZS5uYW1lIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC1ib2xkIHRleHQteGwgbWItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0aGVtZS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JheS04MDAgdGV4dC1iYXNlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRoZW1lLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBib3JkZXItdC0yIGJvcmRlci1ncmF5LTIwMCBwdC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICF0aGVtZS5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldEFzQWN0aXZlKHRoZW1lLm5hbWVzcGFjZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNldCBhcyBhY3RpdmVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ3VycmVudGx5IEFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiZGFzaGJvYXJkXCIgfSB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidWktbW9kYWxcIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJjb25maXJtX21vZGFsXCIsXG4gICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjb25maXJtXCIsIHRpdGxlOiBcIkNvbmZpcm0gb3ZlcnJpZGVcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbmZpcm1Nb2RhbCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmNvbmZpcm1Nb2RhbCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29uZmlybU1vZGFsXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBvdmVycmlkZSB0aGlzIHRoZW1lPyBUaGUgZXhpc3RpbmcgdGhlbWUgd2lsbCBiZSBkaXNjYXJkZWQuXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgeyBzbG90OiBcImZvb3RlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgdmFyaWFudDogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc3VibWl0VXBsb2FkIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJZZXMsIHBsZWFzZSFcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItM1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jYW5jZWxVcGxvYWQgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkxlYXZlIGFuZCBEaXNjYXJkIENoYW5nZXNcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RoZW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYTIzOWNlMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UaGVtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RoZW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYmEyMzljZTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYmEyMzljZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYmEyMzljZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RoZW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYTIzOWNlMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiYTIzOWNlMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1RoZW1lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGhlbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RoZW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGVtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmEyMzljZTAmXCIiXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> nightly
