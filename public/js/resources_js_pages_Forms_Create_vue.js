(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_pages_Forms_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _services_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Form */ "./resources/js/services/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/pages/Forms/SharedForm.vue");
//
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
  auth: function auth() {
    return {
      permission: 'forms.create'
    };
  },
  head: {
    title: function title() {
      return {
        inner: 'Create a Form'
      };
    }
  },
  data: function data() {
    return {
      form: new _services_Form__WEBPACK_IMPORTED_MODULE_0__.default({
        name: '',
        handle: '',
        description: '',
        sections: [],
        collect_email_addresses: false,
        collect_ip_addresses: false,
        response_receipt: false,
        confirmation_message: '',
        redirect_on_submission: false,
        redirect_url: '',
        enable_recaptcha: false,
        enable_honeypot: false,
        send_to: '',
        reply_to: '',
        form_template: '',
        thankyou_template: '',
        status: true
      }, true)
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_1__.default
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post('/api/forms').then(function (response) {
        axios.post("/api/blueprints/".concat(response.data.blueprint.id, "/sections"), {
          sections: _this.form.sections
        }).then(function () {
          toast('Form successfully saved', 'success');

          _this.$router.push('/forms');
        })["catch"](function (response) {
          toast(response.message, 'failed');
        });
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    }
  },
  created: function created() {
    var _this2 = this;

    var unwatch = this.$watch('form.sections', function (value) {
      _this2.form.orig.sections = _.cloneDeep(value);
      unwatch();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/SharedForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/SharedForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      ready: false,
      fieldtype: {},
      placements: [{
        label: 'Body',
        value: 'body'
      }, {
        label: 'Sidebar',
        value: 'sidebar'
      }]
    };
  },
  props: {
    form: {
      type: Object,
      required: true
    },
    resource: {
      type: Object,
      required: false,
      "default": function _default() {}
    }
  },
  watch: {
    'form.collect_email_addresses': function formCollect_email_addresses(value) {
      if (this.ready) {
        if (value === false) {
          this.form.response_receipt = false;
          this.removeIdentifiableEmailField();
        } else {
          this.addIdentifiableEmailField();
        }
      }
    },
    'form.sections': {
      deep: true,
      handler: function handler(value) {
        this.form.collect_email_addresses = this.hasIdentifiableEmailField;
      }
    }
  },
  computed: {
    hasIdentifiableEmailField: function hasIdentifiableEmailField() {
      return _.findIndex(this.form.sections[0].fields, function (field) {
        return field.settings.identifiable;
      }) != -1;
    }
  },
  methods: {
    addIdentifiableEmailField: function addIdentifiableEmailField() {
      bus().$emit("add-field-".concat(this.form.sections[0].handle), {
        type: this.fieldtype,
        settings: {
          identifiable: true
        }
      });
    },
    removeIdentifiableEmailField: function removeIdentifiableEmailField() {
      bus().$emit("remove-field-".concat(this.form.sections[0].handle), 'settings.identifiable', true);
    }
  },
  created: function created() {
    var _this = this;

    axios.all([axios.get('/api/fieldtypes/email')]).then(axios.spread(function (fieldtype) {
      _this.fieldtype = fieldtype.data;
      _this.ready = true;
    }));
  }
});

/***/ }),

/***/ "./resources/js/pages/Forms/Create.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/Forms/Create.vue ***!
  \*********************************************/
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
/* harmony import */ var _Create_vue_vue_type_template_id_64dc6b05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=64dc6b05& */ "./resources/js/pages/Forms/Create.vue?vue&type=template&id=64dc6b05&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/pages/Forms/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Create_vue_vue_type_template_id_64dc6b05___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_64dc6b05___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Forms/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Forms/SharedForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/Forms/SharedForm.vue ***!
  \*************************************************/
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
/* harmony import */ var _SharedForm_vue_vue_type_template_id_6dc46dd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=6dc46dd2& */ "./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/Forms/SharedForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SharedForm_vue_vue_type_template_id_6dc46dd2___WEBPACK_IMPORTED_MODULE_0__.render,
  _SharedForm_vue_vue_type_template_id_6dc46dd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Forms/SharedForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Forms/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Forms/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Forms/SharedForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Forms/SharedForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/SharedForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Forms/Create.vue?vue&type=template&id=64dc6b05&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Forms/Create.vue?vue&type=template&id=64dc6b05& ***!
  \****************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Create.vue?vue&type=template&id=64dc6b05& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Create.vue?vue&type=template&id=64dc6b05& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_64dc6b05___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_64dc6b05___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_64dc6b05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=64dc6b05& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Create.vue?vue&type=template&id=64dc6b05&");


/***/ }),

/***/ "./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2& ***!
  \********************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6dc46dd2___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6dc46dd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6dc46dd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharedForm.vue?vue&type=template&id=6dc46dd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Create.vue?vue&type=template&id=64dc6b05&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Create.vue?vue&type=template&id=64dc6b05& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("page-title", { attrs: { icon: "paper-plane" } }, [
            _vm._v("Create Form")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("shared-form", { attrs: { form: _vm.form } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "form-container",
    {
      scopedSlots: _vm._u([
        {
          key: "sidebar",
          fn: function() {
            return [
              _c(
                "ui-card",
                [
                  _c(
                    "ui-card-body",
                    [
                      _c("ui-slug-group", {
                        attrs: {
                          name: "form-handle",
                          label: "Handle",
                          autocomplete: "off",
                          monospaced: "",
                          required: "",
                          delimiter: "_",
                          watch: _vm.form.name,
                          "has-error": _vm.form.errors.has("handle"),
                          "error-message": _vm.form.errors.get("handle")
                        },
                        model: {
                          value: _vm.form.handle,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "handle", $$v)
                          },
                          expression: "form.handle"
                        }
                      }),
                      _vm._v(" "),
                      _c("ui-toggle", {
                        attrs: {
                          name: "status",
                          label: "Status",
                          "true-value": 1,
                          "false-value": 0
                        },
                        model: {
                          value: _vm.form.status,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "status", $$v)
                          },
                          expression: "form.status"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.resource
                ? _c(
                    "ui-definition-list",
                    [
                      _c(
                        "ui-definition",
                        { attrs: { name: "Status" } },
                        [
                          _c("fa-icon", {
                            staticClass: "fa-fw text-xs",
                            class: {
                              "text-success-500": _vm.resource.status,
                              "text-danger-500": !_vm.resource.status
                            },
                            attrs: { icon: ["fas", "circle"] }
                          }),
                          _vm._v(
                            " " +
                              _vm._s(
                                _vm.resource.status ? "Enabled" : "Disabled"
                              ) +
                              "\n            "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("ui-definition", { attrs: { name: "Created At" } }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm
                                .$moment(_vm.resource.created_at)
                                .format("Y-MM-DD, hh:mm a")
                            ) +
                            "\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("ui-definition", { attrs: { name: "Updated At" } }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm
                                .$moment(_vm.resource.updated_at)
                                .format("Y-MM-DD, hh:mm a")
                            ) +
                            "\n            "
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e()
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "div",
          { staticClass: "buttons" },
          [
            _c(
              "ui-button",
              { attrs: { to: { name: "forms" }, variant: "secondary" } },
              [_vm._v("Go Back")]
            ),
            _vm._v(" "),
            _c(
              "ui-button",
              {
                attrs: {
                  type: "submit",
                  variant: "primary",
                  disabled: !_vm.form.hasChanges
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.$parent.submit($event)
                  }
                }
              },
              [_vm._v("Save")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "General Information",
            description:
              "General information about this form and what it collects."
          }
        },
        [
          _c("ui-input-group", {
            attrs: {
              name: "name",
              label: "Name",
              help: "What should this form be called?",
              autocomplete: "off",
              autofocus: "",
              required: "",
              "has-error": _vm.form.errors.has("name"),
              "error-message": _vm.form.errors.get("name")
            },
            model: {
              value: _vm.form.name,
              callback: function($$v) {
                _vm.$set(_vm.form, "name", $$v)
              },
              expression: "form.name"
            }
          }),
          _vm._v(" "),
          _c("ui-textarea-group", {
            attrs: {
              name: "description",
              label: "Description",
              help: "Give a short description of what this form will collect.",
              autocomplete: "off",
              "has-error": _vm.form.errors.has("description"),
              "error-message": _vm.form.errors.get("description")
            },
            model: {
              value: _vm.form.description,
              callback: function($$v) {
                _vm.$set(_vm.form, "description", $$v)
              },
              expression: "form.description"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "Privacy",
            description: "Configure this forms privacy settings."
          }
        },
        [
          _c(
            "ui-fieldset",
            { attrs: { label: "Privacy Settings" } },
            [
              _c(
                "ui-checkbox-single",
                {
                  attrs: {
                    name: "collect_email_addresses",
                    id: "collect_email_addresses"
                  },
                  model: {
                    value: _vm.form.collect_email_addresses,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "collect_email_addresses", $$v)
                    },
                    expression: "form.collect_email_addresses"
                  }
                },
                [_vm._v("Collect email addresses")]
              ),
              _vm._v(" "),
              _c(
                "ui-checkbox-single",
                {
                  attrs: {
                    name: "collect_ip_addresses",
                    id: "collect_ip_addresses"
                  },
                  model: {
                    value: _vm.form.collect_ip_addresses,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "collect_ip_addresses", $$v)
                    },
                    expression: "form.collect_ip_addresses"
                  }
                },
                [_vm._v("Collect IP addresses")]
              ),
              _vm._v(" "),
              _c(
                "ui-checkbox-single",
                {
                  attrs: {
                    name: "response_receipt",
                    id: "response_receipt",
                    help:
                      "Respondents will receive a copy of their submission.",
                    disabled: !_vm.form.collect_email_addresses
                  },
                  model: {
                    value: _vm.form.response_receipt,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "response_receipt", $$v)
                    },
                    expression: "form.response_receipt"
                  }
                },
                [_vm._v("Response receipts")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "Spam",
            description: "Configure this forms spam protection settings."
          }
        },
        [
          _c(
            "ui-fieldset",
            { attrs: { label: "Spam Settings" } },
            [
              _c(
                "ui-checkbox-single",
                {
                  attrs: {
                    name: "enable_recaptcha",
                    id: "enable_recaptcha",
                    help:
                      "Be sure to enter your site key and secret key in settings."
                  },
                  model: {
                    value: _vm.form.enable_recaptcha,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "enable_recaptcha", $$v)
                    },
                    expression: "form.enable_recaptcha"
                  }
                },
                [_vm._v("Enable Google reCAPTCHA")]
              ),
              _vm._v(" "),
              _c(
                "ui-checkbox-single",
                {
                  attrs: {
                    name: "enable_honeypot",
                    id: "enable_honeypot",
                    help:
                      "A honeypot is a great and native alternative to Google reCAPTCHA. Both options can be safely enabled at the same time."
                  },
                  model: {
                    value: _vm.form.enable_honeypot,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "enable_honeypot", $$v)
                    },
                    expression: "form.enable_honeypot"
                  }
                },
                [_vm._v("Enable Honeypot")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "Notifications",
            description:
              "Configure who should receive notifications when submissions are made."
          }
        },
        [
          _c("ui-textarea-group", {
            attrs: {
              name: "send_to",
              label: "Send notifications to...",
              help: "List emails as a comma separated list.",
              placeholder: "marie.c@example.com, nikola.t@example.com",
              "has-error": _vm.form.errors.has("send_to"),
              "error-message": _vm.form.errors.get("send_to")
            },
            model: {
              value: _vm.form.send_to,
              callback: function($$v) {
                _vm.$set(_vm.form, "send_to", $$v)
              },
              expression: "form.send_to"
            }
          }),
          _vm._v(" "),
          _c("ui-input-group", {
            attrs: {
              name: "reply_to",
              label: "Reply to...",
              help:
                "Replies to the confirmation email will be sent to this e-mail. By default this will reference the default email in system settings.",
              autocomplete: "off",
              "has-error": _vm.form.errors.has("reply_to"),
              "error-message": _vm.form.errors.get("reply_to")
            },
            model: {
              value: _vm.form.reply_to,
              callback: function($$v) {
                _vm.$set(_vm.form, "reply_to", $$v)
              },
              expression: "form.reply_to"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "Confirmations",
            description:
              "Configure confirmation settings when submissions are made."
          }
        },
        [
          _c(
            "ui-radio-group",
            {
              attrs: {
                inline: "",
                label: "After submitting the form...",
                "has-error": _vm.form.errors.has("redirect_on_submission"),
                "error-message": _vm.form.errors.get("redirect_on_submission")
              }
            },
            [
              _c(
                "ui-radio",
                {
                  attrs: {
                    id: "redirect_on_submission_false",
                    name: "redirect_on_submission",
                    "native-value": false
                  },
                  model: {
                    value: _vm.form.redirect_on_submission,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "redirect_on_submission", $$v)
                    },
                    expression: "form.redirect_on_submission"
                  }
                },
                [_vm._v("Redirect to default confirmation page...")]
              ),
              _vm._v(" "),
              _c(
                "ui-radio",
                {
                  attrs: {
                    id: "redirect_on_submission_true",
                    name: "redirect_on_submission",
                    "native-value": true
                  },
                  model: {
                    value: _vm.form.redirect_on_submission,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "redirect_on_submission", $$v)
                    },
                    expression: "form.redirect_on_submission"
                  }
                },
                [_vm._v("Redirect to custom page...")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.form.redirect_on_submission === false
            ? _c("ui-input-group", {
                attrs: {
                  name: "confirmation_message",
                  label: "Message",
                  help:
                    "This message will be displayed on the confirmation page.",
                  autocomplete: "off",
                  "has-error": _vm.form.errors.has("confirmation_message"),
                  "error-message": _vm.form.errors.get("confirmation_message"),
                  placeholder: "Thank you! We'll be in touch soon."
                },
                model: {
                  value: _vm.form.confirmation_message,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "confirmation_message", $$v)
                  },
                  expression: "form.confirmation_message"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.form.redirect_on_submission === true
            ? _c("ui-input-group", {
                attrs: {
                  name: "redirect_url",
                  label: "URL",
                  help:
                    "The URL to redirect users to after submitting the form.",
                  autocomplete: "off",
                  "has-error": _vm.form.errors.has("redirect_url"),
                  "error-message": _vm.form.errors.get("redirect_url")
                },
                model: {
                  value: _vm.form.redirect_url,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "redirect_url", $$v)
                  },
                  expression: "form.redirect_url"
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            title: "Templates",
            description: "Configure this forms template settings."
          }
        },
        [
          _c("ui-input-group", {
            attrs: {
              name: "form_template",
              label: "Form Template",
              help: "What template is responsible for rendering this form?",
              autocomplete: "off",
              monospaced: "",
              "has-error": _vm.form.errors.has("form_template"),
              "error-message": _vm.form.errors.get("form_template")
            },
            model: {
              value: _vm.form.form_template,
              callback: function($$v) {
                _vm.$set(_vm.form, "form_template", $$v)
              },
              expression: "form.form_template"
            }
          }),
          _vm._v(" "),
          _c("ui-input-group", {
            attrs: {
              name: "thankyou_template",
              label: "Thank You Template",
              help: "What template is reponsible for thanking respondents?",
              autocomplete: "off",
              monospaced: "",
              "has-error": _vm.form.errors.has("thankyou_template"),
              "error-message": _vm.form.errors.get("thankyou_template")
            },
            model: {
              value: _vm.form.thankyou_template,
              callback: function($$v) {
                _vm.$set(_vm.form, "thankyou_template", $$v)
              },
              expression: "form.thankyou_template"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section-card",
        {
          attrs: {
            id: "form_panel_blueprint",
            grid: false,
            title: "Blueprint",
            description:
              "Create the content blueprint for this form by adding panel sections and fields to either the page body or page sidebar.",
            tabindex: "-1"
          }
        },
        [
          _c(
            "blueprint",
            [
              _c("blueprint-area", {
                attrs: {
                  placements: _vm.placements,
                  area: "body",
                  title: "Body"
                },
                model: {
                  value: _vm.form.sections,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "sections", $$v)
                  },
                  expression: "form.sections"
                }
              }),
              _vm._v(" "),
              _c("blueprint-area", {
                staticClass: "blueprint__col--sidebar",
                attrs: {
                  placements: _vm.placements,
                  area: "sidebar",
                  title: "Sidebar"
                },
                model: {
                  value: _vm.form.sections,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "sections", $$v)
                  },
                  expression: "form.sections"
                }
              })
            ],
            1
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL3BhZ2VzL0Zvcm1zL0NyZWF0ZS52dWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zL3Jlc291cmNlcy9qcy9wYWdlcy9Gb3Jtcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvRm9ybXMvQ3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvRm9ybXMvU2hhcmVkRm9ybS52dWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Zvcm1zL0NyZWF0ZS52dWU/NmVmNiIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvRm9ybXMvU2hhcmVkRm9ybS52dWU/NDhlNCIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvRm9ybXMvQ3JlYXRlLnZ1ZT9kZmRhIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Gb3Jtcy9TaGFyZWRGb3JtLnZ1ZT9hMjU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUVBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTEE7QUFPQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBUEE7QUFlQSxNQWZBLGtCQWVBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsa0JBRkE7QUFHQSx1QkFIQTtBQUlBLG9CQUpBO0FBTUEsc0NBTkE7QUFPQSxtQ0FQQTtBQVFBLCtCQVJBO0FBVUEsZ0NBVkE7QUFXQSxxQ0FYQTtBQVlBLHdCQVpBO0FBY0EsK0JBZEE7QUFlQSw4QkFmQTtBQWlCQSxtQkFqQkE7QUFrQkEsb0JBbEJBO0FBb0JBLHlCQXBCQTtBQXFCQSw2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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL3Jlc291cmNlc19qc19wYWdlc19Gb3Jtc19DcmVhdGVfdnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuXHRcdFx0PHBhZ2UtdGl0bGUgaWNvbj1cInBhcGVyLXBsYW5lXCI+Q3JlYXRlIEZvcm08L3BhZ2UtdGl0bGU+XG5cdFx0PC9wb3J0YWw+XG5cbiAgICAgICAgPHNoYXJlZC1mb3JtIDpmb3JtPVwiZm9ybVwiPjwvc2hhcmVkLWZvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL3NlcnZpY2VzL0Zvcm0nXG4gICAgaW1wb3J0IFNoYXJlZEZvcm0gZnJvbSAnLi9TaGFyZWRGb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBhdXRoKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uOiAnZm9ybXMuY3JlYXRlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogJ0NyZWF0ZSBhIEZvcm0nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbnM6IFtdLFxuXG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3RfZW1haWxfYWRkcmVzc2VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdF9pcF9hZGRyZXNzZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZV9yZWNlaXB0OiBmYWxzZSxcblxuICAgICAgICAgICAgICAgICAgICBjb25maXJtYXRpb25fbWVzc2FnZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0X29uX3N1Ym1pc3Npb246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdF91cmw6ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZV9yZWNhcHRjaGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVfaG9uZXlwb3Q6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgICAgIHNlbmRfdG86ICcnLFxuICAgICAgICAgICAgICAgICAgICByZXBseV90bzogJycsXG5cbiAgICAgICAgICAgICAgICAgICAgZm9ybV90ZW1wbGF0ZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHRoYW5reW91X3RlbXBsYXRlOiAnJyxcblxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnc2hhcmVkLWZvcm0nOiBTaGFyZWRGb3JtXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0KCcvYXBpL2Zvcm1zJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGAvYXBpL2JsdWVwcmludHMvJHtyZXNwb25zZS5kYXRhLmJsdWVwcmludC5pZH0vc2VjdGlvbnNgLCB7IHNlY3Rpb25zOiB0aGlzLmZvcm0uc2VjdGlvbnMgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KCdGb3JtIHN1Y2Nlc3NmdWxseSBzYXZlZCcsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2Zvcm1zJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UubWVzc2FnZSwgJ2ZhaWxlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgbGV0IHVud2F0Y2ggPSB0aGlzLiR3YXRjaCgnZm9ybS5zZWN0aW9ucycsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5vcmlnLnNlY3Rpb25zID0gXy5jbG9uZURlZXAodmFsdWUpXG4gICAgICAgICAgICAgICAgdW53YXRjaCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxmb3JtLWNvbnRhaW5lcj5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiA6dG89XCJ7IG5hbWU6ICdmb3JtcycgfVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5HbyBCYWNrPC91aS1idXR0b24+XG4gICAgICAgICAgICAgICAgPHVpLWJ1dHRvbiB0eXBlPVwic3VibWl0XCIgQGNsaWNrLnByZXZlbnQ9XCIkcGFyZW50LnN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgOmRpc2FibGVkPVwiIWZvcm0uaGFzQ2hhbmdlc1wiPlNhdmU8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiR2VuZXJhbCBJbmZvcm1hdGlvblwiIGRlc2NyaXB0aW9uPVwiR2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIGZvcm0gYW5kIHdoYXQgaXQgY29sbGVjdHMuXCI+XG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCBzaG91bGQgdGhpcyBmb3JtIGJlIGNhbGxlZD9cIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5hbWVcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS10ZXh0YXJlYS1ncm91cFxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgaGVscD1cIkdpdmUgYSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB3aGF0IHRoaXMgZm9ybSB3aWxsIGNvbGxlY3QuXCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2Rlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdkZXNjcmlwdGlvbicpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPC91aS10ZXh0YXJlYS1ncm91cD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIlByaXZhY3lcIiBkZXNjcmlwdGlvbj1cIkNvbmZpZ3VyZSB0aGlzIGZvcm1zIHByaXZhY3kgc2V0dGluZ3MuXCI+XG4gICAgICAgICAgICA8dWktZmllbGRzZXQgbGFiZWw9XCJQcml2YWN5IFNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgPHVpLWNoZWNrYm94LXNpbmdsZSBuYW1lPVwiY29sbGVjdF9lbWFpbF9hZGRyZXNzZXNcIiBpZD1cImNvbGxlY3RfZW1haWxfYWRkcmVzc2VzXCIgdi1tb2RlbD1cImZvcm0uY29sbGVjdF9lbWFpbF9hZGRyZXNzZXNcIj5Db2xsZWN0IGVtYWlsIGFkZHJlc3NlczwvdWktY2hlY2tib3gtc2luZ2xlPlxuICAgICAgICAgICAgICAgIDx1aS1jaGVja2JveC1zaW5nbGUgbmFtZT1cImNvbGxlY3RfaXBfYWRkcmVzc2VzXCIgaWQ9XCJjb2xsZWN0X2lwX2FkZHJlc3Nlc1wiIHYtbW9kZWw9XCJmb3JtLmNvbGxlY3RfaXBfYWRkcmVzc2VzXCI+Q29sbGVjdCBJUCBhZGRyZXNzZXM8L3VpLWNoZWNrYm94LXNpbmdsZT5cbiAgICAgICAgICAgICAgICA8dWktY2hlY2tib3gtc2luZ2xlIG5hbWU9XCJyZXNwb25zZV9yZWNlaXB0XCIgaWQ9XCJyZXNwb25zZV9yZWNlaXB0XCIgaGVscD1cIlJlc3BvbmRlbnRzIHdpbGwgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlaXIgc3VibWlzc2lvbi5cIiA6ZGlzYWJsZWQ9XCIhIGZvcm0uY29sbGVjdF9lbWFpbF9hZGRyZXNzZXNcIiB2LW1vZGVsPVwiZm9ybS5yZXNwb25zZV9yZWNlaXB0XCI+UmVzcG9uc2UgcmVjZWlwdHM8L3VpLWNoZWNrYm94LXNpbmdsZT5cbiAgICAgICAgICAgIDwvdWktZmllbGRzZXQ+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJTcGFtXCIgZGVzY3JpcHRpb249XCJDb25maWd1cmUgdGhpcyBmb3JtcyBzcGFtIHByb3RlY3Rpb24gc2V0dGluZ3MuXCI+XG4gICAgICAgICAgICA8dWktZmllbGRzZXQgbGFiZWw9XCJTcGFtIFNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgPHVpLWNoZWNrYm94LXNpbmdsZSBuYW1lPVwiZW5hYmxlX3JlY2FwdGNoYVwiIGlkPVwiZW5hYmxlX3JlY2FwdGNoYVwiIGhlbHA9XCJCZSBzdXJlIHRvIGVudGVyIHlvdXIgc2l0ZSBrZXkgYW5kIHNlY3JldCBrZXkgaW4gc2V0dGluZ3MuXCIgdi1tb2RlbD1cImZvcm0uZW5hYmxlX3JlY2FwdGNoYVwiPkVuYWJsZSBHb29nbGUgcmVDQVBUQ0hBPC91aS1jaGVja2JveC1zaW5nbGU+XG4gICAgICAgICAgICAgICAgPHVpLWNoZWNrYm94LXNpbmdsZSBuYW1lPVwiZW5hYmxlX2hvbmV5cG90XCIgaWQ9XCJlbmFibGVfaG9uZXlwb3RcIiBoZWxwPVwiQSBob25leXBvdCBpcyBhIGdyZWF0IGFuZCBuYXRpdmUgYWx0ZXJuYXRpdmUgdG8gR29vZ2xlIHJlQ0FQVENIQS4gQm90aCBvcHRpb25zIGNhbiBiZSBzYWZlbHkgZW5hYmxlZCBhdCB0aGUgc2FtZSB0aW1lLlwiIHYtbW9kZWw9XCJmb3JtLmVuYWJsZV9ob25leXBvdFwiPkVuYWJsZSBIb25leXBvdDwvdWktY2hlY2tib3gtc2luZ2xlPlxuICAgICAgICAgICAgPC91aS1maWVsZHNldD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIk5vdGlmaWNhdGlvbnNcIiBkZXNjcmlwdGlvbj1cIkNvbmZpZ3VyZSB3aG8gc2hvdWxkIHJlY2VpdmUgbm90aWZpY2F0aW9ucyB3aGVuIHN1Ym1pc3Npb25zIGFyZSBtYWRlLlwiPlxuICAgICAgICAgICAgPHVpLXRleHRhcmVhLWdyb3VwXG4gICAgICAgICAgICAgICAgbmFtZT1cInNlbmRfdG9cIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VuZCBub3RpZmljYXRpb25zIHRvLi4uXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiTGlzdCBlbWFpbHMgYXMgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdC5cIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibWFyaWUuY0BleGFtcGxlLmNvbSwgbmlrb2xhLnRAZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3NlbmRfdG8nKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3NlbmRfdG8nKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uc2VuZF90b1wiXG4gICAgICAgICAgICA+PC91aS10ZXh0YXJlYS1ncm91cD5cblxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlcGx5X3RvXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJlcGx5IHRvLi4uXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiUmVwbGllcyB0byB0aGUgY29uZmlybWF0aW9uIGVtYWlsIHdpbGwgYmUgc2VudCB0byB0aGlzIGUtbWFpbC4gQnkgZGVmYXVsdCB0aGlzIHdpbGwgcmVmZXJlbmNlIHRoZSBkZWZhdWx0IGVtYWlsIGluIHN5c3RlbSBzZXR0aW5ncy5cIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygncmVwbHlfdG8nKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3JlcGx5X3RvJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnJlcGx5X3RvXCI+XG4gICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiQ29uZmlybWF0aW9uc1wiIGRlc2NyaXB0aW9uPVwiQ29uZmlndXJlIGNvbmZpcm1hdGlvbiBzZXR0aW5ncyB3aGVuIHN1Ym1pc3Npb25zIGFyZSBtYWRlLlwiPlxuICAgICAgICAgICAgPHVpLXJhZGlvLWdyb3VwXG4gICAgICAgICAgICAgICAgaW5saW5lXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJBZnRlciBzdWJtaXR0aW5nIHRoZSBmb3JtLi4uXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdyZWRpcmVjdF9vbl9zdWJtaXNzaW9uJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdyZWRpcmVjdF9vbl9zdWJtaXNzaW9uJylcIj5cbiAgICAgICAgICAgICAgICA8dWktcmFkaW8gaWQ9XCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uX2ZhbHNlXCIgdi1tb2RlbD1cImZvcm0ucmVkaXJlY3Rfb25fc3VibWlzc2lvblwiIG5hbWU9XCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCIgOm5hdGl2ZS12YWx1ZT1cImZhbHNlXCI+UmVkaXJlY3QgdG8gZGVmYXVsdCBjb25maXJtYXRpb24gcGFnZS4uLjwvdWktcmFkaW8+XG4gICAgICAgICAgICAgICAgPHVpLXJhZGlvIGlkPVwicmVkaXJlY3Rfb25fc3VibWlzc2lvbl90cnVlXCIgdi1tb2RlbD1cImZvcm0ucmVkaXJlY3Rfb25fc3VibWlzc2lvblwiIG5hbWU9XCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCIgOm5hdGl2ZS12YWx1ZT1cInRydWVcIj5SZWRpcmVjdCB0byBjdXN0b20gcGFnZS4uLjwvdWktcmFkaW8+XG4gICAgICAgICAgICA8L3VpLXJhZGlvLWdyb3VwPlxuXG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICB2LWlmPVwiZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uID09PSBmYWxzZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1hdGlvbl9tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJUaGlzIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgb24gdGhlIGNvbmZpcm1hdGlvbiBwYWdlLlwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdjb25maXJtYXRpb25fbWVzc2FnZScpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnY29uZmlybWF0aW9uX21lc3NhZ2UnKVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaGFuayB5b3UhIFdlJ2xsIGJlIGluIHRvdWNoIHNvb24uXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5jb25maXJtYXRpb25fbWVzc2FnZVwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgdi1pZj1cImZvcm0ucmVkaXJlY3Rfb25fc3VibWlzc2lvbiA9PT0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlZGlyZWN0X3VybFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJUaGUgVVJMIHRvIHJlZGlyZWN0IHVzZXJzIHRvIGFmdGVyIHN1Ym1pdHRpbmcgdGhlIGZvcm0uXCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3JlZGlyZWN0X3VybCcpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncmVkaXJlY3RfdXJsJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnJlZGlyZWN0X3VybFwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIlRlbXBsYXRlc1wiIGRlc2NyaXB0aW9uPVwiQ29uZmlndXJlIHRoaXMgZm9ybXMgdGVtcGxhdGUgc2V0dGluZ3MuXCI+XG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICBuYW1lPVwiZm9ybV90ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJGb3JtIFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCB0ZW1wbGF0ZSBpcyByZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIHRoaXMgZm9ybT9cIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgbW9ub3NwYWNlZFxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2Zvcm1fdGVtcGxhdGUnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2Zvcm1fdGVtcGxhdGUnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZm9ybV90ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgbmFtZT1cInRoYW5reW91X3RlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRoYW5rIFlvdSBUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgaGVscD1cIldoYXQgdGVtcGxhdGUgaXMgcmVwb25zaWJsZSBmb3IgdGhhbmtpbmcgcmVzcG9uZGVudHM/XCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCd0aGFua3lvdV90ZW1wbGF0ZScpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgndGhhbmt5b3VfdGVtcGxhdGUnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0udGhhbmt5b3VfdGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgaWQ9XCJmb3JtX3BhbmVsX2JsdWVwcmludFwiIDpncmlkPVwiZmFsc2VcIiB0aXRsZT1cIkJsdWVwcmludFwiIGRlc2NyaXB0aW9uPVwiQ3JlYXRlIHRoZSBjb250ZW50IGJsdWVwcmludCBmb3IgdGhpcyBmb3JtIGJ5IGFkZGluZyBwYW5lbCBzZWN0aW9ucyBhbmQgZmllbGRzIHRvIGVpdGhlciB0aGUgcGFnZSBib2R5IG9yIHBhZ2Ugc2lkZWJhci5cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICA8Ymx1ZXByaW50PlxuICAgICAgICAgICAgICAgIDxibHVlcHJpbnQtYXJlYSB2LW1vZGVsPVwiZm9ybS5zZWN0aW9uc1wiIDpwbGFjZW1lbnRzPVwicGxhY2VtZW50c1wiIGFyZWE9XCJib2R5XCIgdGl0bGU9XCJCb2R5XCI+PC9ibHVlcHJpbnQtYXJlYT5cbiAgICAgICAgICAgICAgICA8Ymx1ZXByaW50LWFyZWEgdi1tb2RlbD1cImZvcm0uc2VjdGlvbnNcIiBjbGFzcz1cImJsdWVwcmludF9fY29sLS1zaWRlYmFyXCIgOnBsYWNlbWVudHM9XCJwbGFjZW1lbnRzXCIgYXJlYT1cInNpZGViYXJcIiB0aXRsZT1cIlNpZGViYXJcIj48L2JsdWVwcmludC1hcmVhPlxuICAgICAgICAgICAgPC9ibHVlcHJpbnQ+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6c2lkZWJhcj5cbiAgICAgICAgICAgIDx1aS1jYXJkPlxuICAgICAgICAgICAgICAgIDx1aS1jYXJkLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1zbHVnLWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZm9ybS1oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxpbWl0ZXI9XCJfXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp3YXRjaD1cImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdoYW5kbGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnaGFuZGxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktc2x1Zy1ncm91cD5cblxuICAgICAgICAgICAgICAgICAgICA8dWktdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dHJ1ZS12YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8L3VpLWNhcmQtYm9keT5cbiAgICAgICAgICAgIDwvdWktY2FyZD5cblxuICAgICAgICAgICAgPHVpLWRlZmluaXRpb24tbGlzdCB2LWlmPVwicmVzb3VyY2VcIj5cbiAgICAgICAgICAgICAgICA8dWktZGVmaW5pdGlvbiBuYW1lPVwiU3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2lyY2xlJ11cIiBjbGFzcz1cImZhLWZ3IHRleHQteHNcIiA6Y2xhc3M9XCJ7J3RleHQtc3VjY2Vzcy01MDAnOiByZXNvdXJjZS5zdGF0dXMsICd0ZXh0LWRhbmdlci01MDAnOiAhIHJlc291cmNlLnN0YXR1c31cIj48L2ZhLWljb24+IHt7IHJlc291cmNlLnN0YXR1cyA/ICdFbmFibGVkJyA6ICdEaXNhYmxlZCcgfX1cbiAgICAgICAgICAgICAgICA8L3VpLWRlZmluaXRpb24+XG5cbiAgICAgICAgICAgICAgICA8dWktZGVmaW5pdGlvbiBuYW1lPVwiQ3JlYXRlZCBBdFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyAkbW9tZW50KHJlc291cmNlLmNyZWF0ZWRfYXQpLmZvcm1hdCgnWS1NTS1ERCwgaGg6bW0gYScpIH19XG4gICAgICAgICAgICAgICAgPC91aS1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHVpLWRlZmluaXRpb24gbmFtZT1cIlVwZGF0ZWQgQXRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJG1vbWVudChyZXNvdXJjZS51cGRhdGVkX2F0KS5mb3JtYXQoJ1ktTU0tREQsIGhoOm1tIGEnKSB9fVxuICAgICAgICAgICAgICAgIDwvdWktZGVmaW5pdGlvbj5cbiAgICAgICAgICAgIDwvdWktZGVmaW5pdGlvbi1saXN0PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZm9ybS1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVhZHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZpZWxkdHlwZToge30sXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50czogW1xuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnQm9keScsICAgIHZhbHVlOiAnYm9keScgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1NpZGViYXInLCB2YWx1ZTogJ3NpZGViYXInIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4ge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJ2Zvcm0uY29sbGVjdF9lbWFpbF9hZGRyZXNzZXMnKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc3BvbnNlX3JlY2VpcHQgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUlkZW50aWZpYWJsZUVtYWlsRmllbGQoKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRJZGVudGlmaWFibGVFbWFpbEZpZWxkKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdmb3JtLnNlY3Rpb25zJzoge1xuICAgICAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY29sbGVjdF9lbWFpbF9hZGRyZXNzZXMgPSB0aGlzLmhhc0lkZW50aWZpYWJsZUVtYWlsRmllbGRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGhhc0lkZW50aWZpYWJsZUVtYWlsRmllbGQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uZmluZEluZGV4KHRoaXMuZm9ybS5zZWN0aW9uc1swXS5maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgIChmaWVsZCkgPT4gZmllbGQuc2V0dGluZ3MuaWRlbnRpZmlhYmxlKSAhPSAtMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGFkZElkZW50aWZpYWJsZUVtYWlsRmllbGQoKSB7XG4gICAgICAgICAgICAgICAgYnVzKCkuJGVtaXQoYGFkZC1maWVsZC0ke3RoaXMuZm9ybS5zZWN0aW9uc1swXS5oYW5kbGV9YCwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmZpZWxkdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHsgaWRlbnRpZmlhYmxlOiB0cnVlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVtb3ZlSWRlbnRpZmlhYmxlRW1haWxGaWVsZCgpIHtcbiAgICAgICAgICAgICAgICBidXMoKS4kZW1pdChgcmVtb3ZlLWZpZWxkLSR7dGhpcy5mb3JtLnNlY3Rpb25zWzBdLmhhbmRsZX1gLFxuICAgICAgICAgICAgICAgICAgICAnc2V0dGluZ3MuaWRlbnRpZmlhYmxlJywgdHJ1ZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2ZpZWxkdHlwZXMvZW1haWwnKSxcbiAgICAgICAgICAgIF0pLnRoZW4oYXhpb3Muc3ByZWFkKChmaWVsZHR5cGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkdHlwZSA9IGZpZWxkdHlwZS5kYXRhXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeSA9IHRydWVcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0ZGM2YjA1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY0ZGM2YjA1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY0ZGM2YjA1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY0ZGM2YjA1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0ZGM2YjA1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY0ZGM2YjA1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvRm9ybXMvQ3JlYXRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRjNDZkZDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2ZGM0NmRkMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ZGM0NmRkMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ZGM0NmRkMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRjNDZkZDImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmRjNDZkZDInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Gb3Jtcy9TaGFyZWRGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwYWdlLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJwYXBlci1wbGFuZVwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQ3JlYXRlIEZvcm1cIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic2hhcmVkLWZvcm1cIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSB9IH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybS1jb250YWluZXJcIixcbiAgICB7XG4gICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJzaWRlYmFyXCIsXG4gICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1jYXJkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidWktY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInVpLXNsdWctZ3JvdXBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmb3JtLWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJIYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyOiBcIl9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2F0Y2g6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJoYW5kbGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiaGFuZGxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImhhbmRsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS10b2dnbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZS12YWx1ZVwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlLXZhbHVlXCI6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic3RhdHVzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ucmVzb3VyY2VcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInVpLWRlZmluaXRpb24tbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLWRlZmluaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCJTdGF0dXNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgdGV4dC14c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtc3VjY2Vzcy01MDBcIjogX3ZtLnJlc291cmNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1kYW5nZXItNTAwXCI6ICFfdm0ucmVzb3VyY2Uuc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjaXJjbGVcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlc291cmNlLnN0YXR1cyA/IFwiRW5hYmxlZFwiIDogXCJEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1kZWZpbml0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJDcmVhdGVkIEF0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRtb21lbnQoX3ZtLnJlc291cmNlLmNyZWF0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZLU1NLURELCBoaDptbSBhXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1kZWZpbml0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJVcGRhdGVkIEF0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRtb21lbnQoX3ZtLnJlc291cmNlLnVwZGF0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZLU1NLURELCBoaDptbSBhXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdKVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImZvcm1zXCIgfSwgdmFyaWFudDogXCJzZWNvbmRhcnlcIiB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS5mb3JtLmhhc0NoYW5nZXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHBhcmVudC5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkdlbmVyYWwgSW5mb3JtYXRpb25cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICBcIkdlbmVyYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBmb3JtIGFuZCB3aGF0IGl0IGNvbGxlY3RzLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZVwiLFxuICAgICAgICAgICAgICBoZWxwOiBcIldoYXQgc2hvdWxkIHRoaXMgZm9ybSBiZSBjYWxsZWQ/XCIsXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgYXV0b2ZvY3VzOiBcIlwiLFxuICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVcIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWktdGV4dGFyZWEtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBoZWxwOiBcIkdpdmUgYSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB3aGF0IHRoaXMgZm9ybSB3aWxsIGNvbGxlY3QuXCIsXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImRlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZGVzY3JpcHRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiUHJpdmFjeVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ29uZmlndXJlIHRoaXMgZm9ybXMgcHJpdmFjeSBzZXR0aW5ncy5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1aS1maWVsZHNldFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCJQcml2YWN5IFNldHRpbmdzXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVpLWNoZWNrYm94LXNpbmdsZVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29sbGVjdF9lbWFpbF9hZGRyZXNzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY29sbGVjdF9lbWFpbF9hZGRyZXNzZXNcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jb2xsZWN0X2VtYWlsX2FkZHJlc3NlcyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImNvbGxlY3RfZW1haWxfYWRkcmVzc2VzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNvbGxlY3RfZW1haWxfYWRkcmVzc2VzXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb2xsZWN0IGVtYWlsIGFkZHJlc3Nlc1wiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1jaGVja2JveC1zaW5nbGVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNvbGxlY3RfaXBfYWRkcmVzc2VzXCIsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImNvbGxlY3RfaXBfYWRkcmVzc2VzXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY29sbGVjdF9pcF9hZGRyZXNzZXMsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjb2xsZWN0X2lwX2FkZHJlc3Nlc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb2xsZWN0X2lwX2FkZHJlc3Nlc1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29sbGVjdCBJUCBhZGRyZXNzZXNcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktY2hlY2tib3gtc2luZ2xlXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZXNwb25zZV9yZWNlaXB0XCIsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInJlc3BvbnNlX3JlY2VpcHRcIixcbiAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICBcIlJlc3BvbmRlbnRzIHdpbGwgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlaXIgc3VibWlzc2lvbi5cIixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZm9ybS5jb2xsZWN0X2VtYWlsX2FkZHJlc3Nlc1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZXNwb25zZV9yZWNlaXB0LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicmVzcG9uc2VfcmVjZWlwdFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yZXNwb25zZV9yZWNlaXB0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZXNwb25zZSByZWNlaXB0c1wiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiU3BhbVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ29uZmlndXJlIHRoaXMgZm9ybXMgc3BhbSBwcm90ZWN0aW9uIHNldHRpbmdzLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLWZpZWxkc2V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIlNwYW0gU2V0dGluZ3NcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktY2hlY2tib3gtc2luZ2xlXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbmFibGVfcmVjYXB0Y2hhXCIsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImVuYWJsZV9yZWNhcHRjaGFcIixcbiAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICBcIkJlIHN1cmUgdG8gZW50ZXIgeW91ciBzaXRlIGtleSBhbmQgc2VjcmV0IGtleSBpbiBzZXR0aW5ncy5cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbmFibGVfcmVjYXB0Y2hhLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW5hYmxlX3JlY2FwdGNoYVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbmFibGVfcmVjYXB0Y2hhXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFbmFibGUgR29vZ2xlIHJlQ0FQVENIQVwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1jaGVja2JveC1zaW5nbGVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVuYWJsZV9ob25leXBvdFwiLFxuICAgICAgICAgICAgICAgICAgICBpZDogXCJlbmFibGVfaG9uZXlwb3RcIixcbiAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICBcIkEgaG9uZXlwb3QgaXMgYSBncmVhdCBhbmQgbmF0aXZlIGFsdGVybmF0aXZlIHRvIEdvb2dsZSByZUNBUFRDSEEuIEJvdGggb3B0aW9ucyBjYW4gYmUgc2FmZWx5IGVuYWJsZWQgYXQgdGhlIHNhbWUgdGltZS5cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbmFibGVfaG9uZXlwb3QsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbmFibGVfaG9uZXlwb3RcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW5hYmxlX2hvbmV5cG90XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFbmFibGUgSG9uZXlwb3RcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vdGlmaWNhdGlvbnNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICBcIkNvbmZpZ3VyZSB3aG8gc2hvdWxkIHJlY2VpdmUgbm90aWZpY2F0aW9ucyB3aGVuIHN1Ym1pc3Npb25zIGFyZSBtYWRlLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ1aS10ZXh0YXJlYS1ncm91cFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcInNlbmRfdG9cIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU2VuZCBub3RpZmljYXRpb25zIHRvLi4uXCIsXG4gICAgICAgICAgICAgIGhlbHA6IFwiTGlzdCBlbWFpbHMgYXMgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdC5cIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwibWFyaWUuY0BleGFtcGxlLmNvbSwgbmlrb2xhLnRAZXhhbXBsZS5jb21cIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInNlbmRfdG9cIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwic2VuZF90b1wiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zZW5kX3RvLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic2VuZF90b1wiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zZW5kX3RvXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJyZXBseV90b1wiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJSZXBseSB0by4uLlwiLFxuICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgIFwiUmVwbGllcyB0byB0aGUgY29uZmlybWF0aW9uIGVtYWlsIHdpbGwgYmUgc2VudCB0byB0aGlzIGUtbWFpbC4gQnkgZGVmYXVsdCB0aGlzIHdpbGwgcmVmZXJlbmNlIHRoZSBkZWZhdWx0IGVtYWlsIGluIHN5c3RlbSBzZXR0aW5ncy5cIixcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicmVwbHlfdG9cIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwicmVwbHlfdG9cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucmVwbHlfdG8sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyZXBseV90b1wiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yZXBseV90b1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb25zXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgXCJDb25maWd1cmUgY29uZmlybWF0aW9uIHNldHRpbmdzIHdoZW4gc3VibWlzc2lvbnMgYXJlIG1hZGUuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWktcmFkaW8tZ3JvdXBcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpbmxpbmU6IFwiXCIsXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiQWZ0ZXIgc3VibWl0dGluZyB0aGUgZm9ybS4uLlwiLFxuICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCIpLFxuICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwicmVkaXJlY3Rfb25fc3VibWlzc2lvblwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVpLXJhZGlvXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVkaXJlY3Rfb25fc3VibWlzc2lvbl9mYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucmVkaXJlY3Rfb25fc3VibWlzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVkaXJlY3Rfb25fc3VibWlzc2lvblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVkaXJlY3QgdG8gZGVmYXVsdCBjb25maXJtYXRpb24gcGFnZS4uLlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1yYWRpb1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInJlZGlyZWN0X29uX3N1Ym1pc3Npb25fdHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicmVkaXJlY3Rfb25fc3VibWlzc2lvblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZWRpcmVjdCB0byBjdXN0b20gcGFnZS4uLlwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmZvcm0ucmVkaXJlY3Rfb25fc3VibWlzc2lvbiA9PT0gZmFsc2VcbiAgICAgICAgICAgID8gX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29uZmlybWF0aW9uX21lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgIFwiVGhpcyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBjb25maXJtYXRpb24gcGFnZS5cIixcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJjb25maXJtYXRpb25fbWVzc2FnZVwiKSxcbiAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiY29uZmlybWF0aW9uX21lc3NhZ2VcIiksXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJUaGFuayB5b3UhIFdlJ2xsIGJlIGluIHRvdWNoIHNvb24uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY29uZmlybWF0aW9uX21lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImNvbmZpcm1hdGlvbl9tZXNzYWdlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY29uZmlybWF0aW9uX21lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uID09PSB0cnVlXG4gICAgICAgICAgICA/IF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInJlZGlyZWN0X3VybFwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVVJMXCIsXG4gICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICBcIlRoZSBVUkwgdG8gcmVkaXJlY3QgdXNlcnMgdG8gYWZ0ZXIgc3VibWl0dGluZyB0aGUgZm9ybS5cIixcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJyZWRpcmVjdF91cmxcIiksXG4gICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInJlZGlyZWN0X3VybFwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZWRpcmVjdF91cmwsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJlZGlyZWN0X3VybFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJlZGlyZWN0X3VybFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlRlbXBsYXRlc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ29uZmlndXJlIHRoaXMgZm9ybXMgdGVtcGxhdGUgc2V0dGluZ3MuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiZm9ybV90ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJGb3JtIFRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgIGhlbHA6IFwiV2hhdCB0ZW1wbGF0ZSBpcyByZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIHRoaXMgZm9ybT9cIixcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICBtb25vc3BhY2VkOiBcIlwiLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZm9ybV90ZW1wbGF0ZVwiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJmb3JtX3RlbXBsYXRlXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmZvcm1fdGVtcGxhdGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJmb3JtX3RlbXBsYXRlXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmZvcm1fdGVtcGxhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcInRoYW5reW91X3RlbXBsYXRlXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlRoYW5rIFlvdSBUZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICBoZWxwOiBcIldoYXQgdGVtcGxhdGUgaXMgcmVwb25zaWJsZSBmb3IgdGhhbmtpbmcgcmVzcG9uZGVudHM/XCIsXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgbW9ub3NwYWNlZDogXCJcIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInRoYW5reW91X3RlbXBsYXRlXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInRoYW5reW91X3RlbXBsYXRlXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRoYW5reW91X3RlbXBsYXRlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidGhhbmt5b3VfdGVtcGxhdGVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udGhhbmt5b3VfdGVtcGxhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwiZm9ybV9wYW5lbF9ibHVlcHJpbnRcIixcbiAgICAgICAgICAgIGdyaWQ6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiQmx1ZXByaW50XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgXCJDcmVhdGUgdGhlIGNvbnRlbnQgYmx1ZXByaW50IGZvciB0aGlzIGZvcm0gYnkgYWRkaW5nIHBhbmVsIHNlY3Rpb25zIGFuZCBmaWVsZHMgdG8gZWl0aGVyIHRoZSBwYWdlIGJvZHkgb3IgcGFnZSBzaWRlYmFyLlwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJibHVlcHJpbnRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJibHVlcHJpbnQtYXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudHM6IF92bS5wbGFjZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgYXJlYTogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJCb2R5XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2VjdGlvbnMsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNlY3Rpb25zXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2VjdGlvbnNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYmx1ZXByaW50LWFyZWFcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJsdWVwcmludF9fY29sLS1zaWRlYmFyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudHM6IF92bS5wbGFjZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgYXJlYTogXCJzaWRlYmFyXCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJTaWRlYmFyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2VjdGlvbnMsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNlY3Rpb25zXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2VjdGlvbnNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9