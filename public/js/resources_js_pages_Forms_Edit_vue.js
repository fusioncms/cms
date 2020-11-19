(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_pages_Forms_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "getForm": () => /* binding */ getForm
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
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  auth: function auth() {
    return {
      permission: 'forms.update'
    };
  },
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
      resource: null,
      form: null
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_1__.default
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.patch("/api/forms/".concat(this.id)).then(function () {
        axios.post("/api/blueprints/".concat(_this.resource.blueprint.id, "/sections"), {
          sections: _this.form.sections
        }).then(function () {
          toast('Form successfully saved', 'success');
        });
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getForm(to.params.form, function (error, form) {
      if (error) {
        next(function (vm) {
          vm.$router.push('/forms');
          toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.id = form.id;
          vm.resource = form;
          vm.form = new _services_Form__WEBPACK_IMPORTED_MODULE_0__.default({
            name: form.name,
            handle: form.handle,
            description: form.description,
            sections: form.blueprint.sections,
            collect_email_addresses: form.collect_email_addresses,
            collect_ip_addresses: form.collect_ip_addresses,
            response_receipt: form.response_receipt,
            confirmation_message: form.confirmation_message,
            redirect_on_submission: form.redirect_on_submission,
            redirect_url: form.redirect_url,
            enable_recaptcha: form.enable_recaptcha,
            enable_honeypot: form.enable_honeypot,
            send_to: form.send_to,
            reply_to: form.reply_to,
            form_template: form.form_template,
            thankyou_template: form.thankyou_template,
            status: form.status
          }, true);
          vm.$nextTick(function () {
            vm.$emit('updateHead');
          });
        });
      }
    });
  }
});
function getForm(form, callback) {
  axios.get('/api/forms/' + form).then(function (response) {
    callback(null, response.data.data);
  })["catch"](function (error) {
    callback(new Error('The requested form could not be found'));
  });
}

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

/***/ "./resources/js/pages/Forms/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Forms/Edit.vue ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getForm [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Edit.vue?vue&type=script&lang=js& .getForm */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getForm": () => /* reexport safe */ _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.getForm,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_86a4ad5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=86a4ad5a& */ "./resources/js/pages/Forms/Edit.vue?vue&type=template&id=86a4ad5a&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/Forms/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Edit_vue_vue_type_template_id_86a4ad5a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_86a4ad5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Forms/Edit.vue"
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

/***/ "./resources/js/pages/Forms/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Forms/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getForm [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Edit.vue?vue&type=script&lang=js& .getForm */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "getForm": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.getForm
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/pages/Forms/Edit.vue?vue&type=template&id=86a4ad5a&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Forms/Edit.vue?vue&type=template&id=86a4ad5a& ***!
  \**************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Edit.vue?vue&type=template&id=86a4ad5a& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Edit.vue?vue&type=template&id=86a4ad5a& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_86a4ad5a___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_86a4ad5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_86a4ad5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=86a4ad5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Edit.vue?vue&type=template&id=86a4ad5a&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Edit.vue?vue&type=template&id=86a4ad5a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Forms/Edit.vue?vue&type=template&id=86a4ad5a& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
            _vm._v("Edit Form")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.form
        ? _c("shared-form", {
            attrs: { form: _vm.form, resource: _vm.resource }
          })
        : _vm._e()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL3BhZ2VzL0Zvcm1zL0VkaXQudnVlIiwid2VicGFjazovL2Z1c2lvbmNtcy9yZXNvdXJjZXMvanMvcGFnZXMvRm9ybXMvU2hhcmVkRm9ybS52dWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Zvcm1zL0VkaXQudnVlIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Gb3Jtcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvRm9ybXMvRWRpdC52dWU/YzJhYyIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvRm9ybXMvU2hhcmVkRm9ybS52dWU/NDhlNCIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvRm9ybXMvRWRpdC52dWU/ZjlkYyIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvRm9ybXMvU2hhcmVkRm9ybS52dWU/YTI1NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQUxBO0FBT0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQVBBO0FBZUEsTUFmQSxrQkFlQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLG9CQUZBO0FBR0E7QUFIQTtBQUtBLEdBckJBO0FBdUJBO0FBQ0E7QUFEQSxHQXZCQTtBQTJCQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQSxxREFDQSxJQURBLENBQ0E7QUFDQTtBQUFBO0FBQUEsV0FDQSxJQURBLENBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQSxPQU5BLFdBTUE7QUFDQTtBQUNBLE9B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QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL3Jlc291cmNlc19qc19wYWdlc19Gb3Jtc19FZGl0X3Z1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cblx0XHRcdDxwYWdlLXRpdGxlIGljb249XCJwYXBlci1wbGFuZVwiPkVkaXQgRm9ybTwvcGFnZS10aXRsZT5cblx0XHQ8L3BvcnRhbD5cblxuICAgICAgICA8c2hhcmVkLWZvcm1cbiAgICAgICAgICAgIHYtaWY9XCJmb3JtXCJcbiAgICAgICAgICAgIDpmb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICA6cmVzb3VyY2U9XCJyZXNvdXJjZVwiPlxuICAgICAgICA8L3NoYXJlZC1mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Gb3JtJ1xuICAgIGltcG9ydCBTaGFyZWRGb3JtIGZyb20gJy4vU2hhcmVkRm9ybSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgYXV0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbjogJ2Zvcm1zLnVwZGF0ZScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6IF8uaGFzKHRoaXMuZm9ybSwgJ25hbWUnKSA/IHRoaXMuZm9ybS5uYW1lIDogJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgIHJlc291cmNlOiBudWxsLFxuICAgICAgICAgICAgICAgIGZvcm06IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnc2hhcmVkLWZvcm0nOiBTaGFyZWRGb3JtXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaChgL2FwaS9mb3Jtcy8ke3RoaXMuaWR9YClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwaS9ibHVlcHJpbnRzLyR7dGhpcy5yZXNvdXJjZS5ibHVlcHJpbnQuaWR9L3NlY3Rpb25zYCwgeyBzZWN0aW9uczogdGhpcy5mb3JtLnNlY3Rpb25zIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCgnRm9ybSBzdWNjZXNzZnVsbHkgc2F2ZWQnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGdldEZvcm0odG8ucGFyYW1zLmZvcm0sIChlcnJvciwgZm9ybSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvZm9ybXMnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci50b1N0cmluZygpLCAnZGFuZ2VyJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uaWQgICAgICAgPSBmb3JtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5yZXNvdXJjZSA9IGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZvcm0gICAgID0gbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICAgICAgICAgICAgICAgICAgICBmb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAgICAgICAgICAgICAgICAgIGZvcm0uaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAgICAgICAgICAgICBmb3JtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25zOiAgICAgICAgICAgICAgICBmb3JtLmJsdWVwcmludC5zZWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0X2VtYWlsX2FkZHJlc3NlczogZm9ybS5jb2xsZWN0X2VtYWlsX2FkZHJlc3NlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0X2lwX2FkZHJlc3NlczogICAgZm9ybS5jb2xsZWN0X2lwX2FkZHJlc3NlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZV9yZWNlaXB0OiAgICAgICAgZm9ybS5yZXNwb25zZV9yZWNlaXB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbl9tZXNzYWdlOiAgICBmb3JtLmNvbmZpcm1hdGlvbl9tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0X29uX3N1Ym1pc3Npb246ICBmb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RfdXJsOiAgICAgICAgICAgIGZvcm0ucmVkaXJlY3RfdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZV9yZWNhcHRjaGE6ICAgICAgICBmb3JtLmVuYWJsZV9yZWNhcHRjaGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlX2hvbmV5cG90OiAgICAgICAgIGZvcm0uZW5hYmxlX2hvbmV5cG90LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRfdG86ICAgICAgICAgICAgICAgICBmb3JtLnNlbmRfdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbHlfdG86ICAgICAgICAgICAgICAgIGZvcm0ucmVwbHlfdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybV90ZW1wbGF0ZTogICAgICAgICAgIGZvcm0uZm9ybV90ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGFua3lvdV90ZW1wbGF0ZTogICAgICAgZm9ybS50aGFua3lvdV90ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICAgICAgICAgICAgICAgICAgZm9ybS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRlbWl0KCd1cGRhdGVIZWFkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtKGZvcm0sIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9mb3Jtcy8nICsgZm9ybSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlLmRhdGEuZGF0YSlcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignVGhlIHJlcXVlc3RlZCBmb3JtIGNvdWxkIG5vdCBiZSBmb3VuZCcpKVxuICAgICAgICB9KVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8Zm9ybS1jb250YWluZXI+XG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24gOnRvPVwieyBuYW1lOiAnZm9ybXMnIH1cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+R28gQmFjazwvdWktYnV0dG9uPlxuICAgICAgICAgICAgICAgIDx1aS1idXR0b24gdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwiJHBhcmVudC5zdWJtaXRcIiB2YXJpYW50PVwicHJpbWFyeVwiIDpkaXNhYmxlZD1cIiFmb3JtLmhhc0NoYW5nZXNcIj5TYXZlPC91aS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIkdlbmVyYWwgSW5mb3JtYXRpb25cIiBkZXNjcmlwdGlvbj1cIkdlbmVyYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBmb3JtIGFuZCB3aGF0IGl0IGNvbGxlY3RzLlwiPlxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgaGVscD1cIldoYXQgc2hvdWxkIHRoaXMgZm9ybSBiZSBjYWxsZWQ/XCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lXCI+XG4gICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuXG4gICAgICAgICAgICA8dWktdGV4dGFyZWEtZ3JvdXBcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJHaXZlIGEgc2hvcnQgZGVzY3JpcHRpb24gb2Ygd2hhdCB0aGlzIGZvcm0gd2lsbCBjb2xsZWN0LlwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdkZXNjcmlwdGlvbicpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDwvdWktdGV4dGFyZWEtZ3JvdXA+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJQcml2YWN5XCIgZGVzY3JpcHRpb249XCJDb25maWd1cmUgdGhpcyBmb3JtcyBwcml2YWN5IHNldHRpbmdzLlwiPlxuICAgICAgICAgICAgPHVpLWZpZWxkc2V0IGxhYmVsPVwiUHJpdmFjeSBTZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgIDx1aS1jaGVja2JveC1zaW5nbGUgbmFtZT1cImNvbGxlY3RfZW1haWxfYWRkcmVzc2VzXCIgaWQ9XCJjb2xsZWN0X2VtYWlsX2FkZHJlc3Nlc1wiIHYtbW9kZWw9XCJmb3JtLmNvbGxlY3RfZW1haWxfYWRkcmVzc2VzXCI+Q29sbGVjdCBlbWFpbCBhZGRyZXNzZXM8L3VpLWNoZWNrYm94LXNpbmdsZT5cbiAgICAgICAgICAgICAgICA8dWktY2hlY2tib3gtc2luZ2xlIG5hbWU9XCJjb2xsZWN0X2lwX2FkZHJlc3Nlc1wiIGlkPVwiY29sbGVjdF9pcF9hZGRyZXNzZXNcIiB2LW1vZGVsPVwiZm9ybS5jb2xsZWN0X2lwX2FkZHJlc3Nlc1wiPkNvbGxlY3QgSVAgYWRkcmVzc2VzPC91aS1jaGVja2JveC1zaW5nbGU+XG4gICAgICAgICAgICAgICAgPHVpLWNoZWNrYm94LXNpbmdsZSBuYW1lPVwicmVzcG9uc2VfcmVjZWlwdFwiIGlkPVwicmVzcG9uc2VfcmVjZWlwdFwiIGhlbHA9XCJSZXNwb25kZW50cyB3aWxsIHJlY2VpdmUgYSBjb3B5IG9mIHRoZWlyIHN1Ym1pc3Npb24uXCIgOmRpc2FibGVkPVwiISBmb3JtLmNvbGxlY3RfZW1haWxfYWRkcmVzc2VzXCIgdi1tb2RlbD1cImZvcm0ucmVzcG9uc2VfcmVjZWlwdFwiPlJlc3BvbnNlIHJlY2VpcHRzPC91aS1jaGVja2JveC1zaW5nbGU+XG4gICAgICAgICAgICA8L3VpLWZpZWxkc2V0PlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiU3BhbVwiIGRlc2NyaXB0aW9uPVwiQ29uZmlndXJlIHRoaXMgZm9ybXMgc3BhbSBwcm90ZWN0aW9uIHNldHRpbmdzLlwiPlxuICAgICAgICAgICAgPHVpLWZpZWxkc2V0IGxhYmVsPVwiU3BhbSBTZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgIDx1aS1jaGVja2JveC1zaW5nbGUgbmFtZT1cImVuYWJsZV9yZWNhcHRjaGFcIiBpZD1cImVuYWJsZV9yZWNhcHRjaGFcIiBoZWxwPVwiQmUgc3VyZSB0byBlbnRlciB5b3VyIHNpdGUga2V5IGFuZCBzZWNyZXQga2V5IGluIHNldHRpbmdzLlwiIHYtbW9kZWw9XCJmb3JtLmVuYWJsZV9yZWNhcHRjaGFcIj5FbmFibGUgR29vZ2xlIHJlQ0FQVENIQTwvdWktY2hlY2tib3gtc2luZ2xlPlxuICAgICAgICAgICAgICAgIDx1aS1jaGVja2JveC1zaW5nbGUgbmFtZT1cImVuYWJsZV9ob25leXBvdFwiIGlkPVwiZW5hYmxlX2hvbmV5cG90XCIgaGVscD1cIkEgaG9uZXlwb3QgaXMgYSBncmVhdCBhbmQgbmF0aXZlIGFsdGVybmF0aXZlIHRvIEdvb2dsZSByZUNBUFRDSEEuIEJvdGggb3B0aW9ucyBjYW4gYmUgc2FmZWx5IGVuYWJsZWQgYXQgdGhlIHNhbWUgdGltZS5cIiB2LW1vZGVsPVwiZm9ybS5lbmFibGVfaG9uZXlwb3RcIj5FbmFibGUgSG9uZXlwb3Q8L3VpLWNoZWNrYm94LXNpbmdsZT5cbiAgICAgICAgICAgIDwvdWktZmllbGRzZXQ+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJOb3RpZmljYXRpb25zXCIgZGVzY3JpcHRpb249XCJDb25maWd1cmUgd2hvIHNob3VsZCByZWNlaXZlIG5vdGlmaWNhdGlvbnMgd2hlbiBzdWJtaXNzaW9ucyBhcmUgbWFkZS5cIj5cbiAgICAgICAgICAgIDx1aS10ZXh0YXJlYS1ncm91cFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZW5kX3RvXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbmQgbm90aWZpY2F0aW9ucyB0by4uLlwiXG4gICAgICAgICAgICAgICAgaGVscD1cIkxpc3QgZW1haWxzIGFzIGEgY29tbWEgc2VwYXJhdGVkIGxpc3QuXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1hcmllLmNAZXhhbXBsZS5jb20sIG5pa29sYS50QGV4YW1wbGUuY29tXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdzZW5kX3RvJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdzZW5kX3RvJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnNlbmRfdG9cIlxuICAgICAgICAgICAgPjwvdWktdGV4dGFyZWEtZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZXBseV90b1wiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSZXBseSB0by4uLlwiXG4gICAgICAgICAgICAgICAgaGVscD1cIlJlcGxpZXMgdG8gdGhlIGNvbmZpcm1hdGlvbiBlbWFpbCB3aWxsIGJlIHNlbnQgdG8gdGhpcyBlLW1haWwuIEJ5IGRlZmF1bHQgdGhpcyB3aWxsIHJlZmVyZW5jZSB0aGUgZGVmYXVsdCBlbWFpbCBpbiBzeXN0ZW0gc2V0dGluZ3MuXCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3JlcGx5X3RvJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdyZXBseV90bycpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5yZXBseV90b1wiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIkNvbmZpcm1hdGlvbnNcIiBkZXNjcmlwdGlvbj1cIkNvbmZpZ3VyZSBjb25maXJtYXRpb24gc2V0dGluZ3Mgd2hlbiBzdWJtaXNzaW9ucyBhcmUgbWFkZS5cIj5cbiAgICAgICAgICAgIDx1aS1yYWRpby1ncm91cFxuICAgICAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQWZ0ZXIgc3VibWl0dGluZyB0aGUgZm9ybS4uLlwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygncmVkaXJlY3Rfb25fc3VibWlzc2lvbicpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncmVkaXJlY3Rfb25fc3VibWlzc2lvbicpXCI+XG4gICAgICAgICAgICAgICAgPHVpLXJhZGlvIGlkPVwicmVkaXJlY3Rfb25fc3VibWlzc2lvbl9mYWxzZVwiIHYtbW9kZWw9XCJmb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIiBuYW1lPVwicmVkaXJlY3Rfb25fc3VibWlzc2lvblwiIDpuYXRpdmUtdmFsdWU9XCJmYWxzZVwiPlJlZGlyZWN0IHRvIGRlZmF1bHQgY29uZmlybWF0aW9uIHBhZ2UuLi48L3VpLXJhZGlvPlxuICAgICAgICAgICAgICAgIDx1aS1yYWRpbyBpZD1cInJlZGlyZWN0X29uX3N1Ym1pc3Npb25fdHJ1ZVwiIHYtbW9kZWw9XCJmb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIiBuYW1lPVwicmVkaXJlY3Rfb25fc3VibWlzc2lvblwiIDpuYXRpdmUtdmFsdWU9XCJ0cnVlXCI+UmVkaXJlY3QgdG8gY3VzdG9tIHBhZ2UuLi48L3VpLXJhZGlvPlxuICAgICAgICAgICAgPC91aS1yYWRpby1ncm91cD5cblxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgdi1pZj1cImZvcm0ucmVkaXJlY3Rfb25fc3VibWlzc2lvbiA9PT0gZmFsc2VcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtYXRpb25fbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiVGhpcyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBjb25maXJtYXRpb24gcGFnZS5cIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnY29uZmlybWF0aW9uX21lc3NhZ2UnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2NvbmZpcm1hdGlvbl9tZXNzYWdlJylcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGhhbmsgeW91ISBXZSdsbCBiZSBpbiB0b3VjaCBzb29uLlwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uY29uZmlybWF0aW9uX21lc3NhZ2VcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIHYtaWY9XCJmb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb24gPT09IHRydWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZWRpcmVjdF91cmxcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiVGhlIFVSTCB0byByZWRpcmVjdCB1c2VycyB0byBhZnRlciBzdWJtaXR0aW5nIHRoZSBmb3JtLlwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdyZWRpcmVjdF91cmwnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3JlZGlyZWN0X3VybCcpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5yZWRpcmVjdF91cmxcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJUZW1wbGF0ZXNcIiBkZXNjcmlwdGlvbj1cIkNvbmZpZ3VyZSB0aGlzIGZvcm1zIHRlbXBsYXRlIHNldHRpbmdzLlwiPlxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgbmFtZT1cImZvcm1fdGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRm9ybSBUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgaGVscD1cIldoYXQgdGVtcGxhdGUgaXMgcmVzcG9uc2libGUgZm9yIHJlbmRlcmluZyB0aGlzIGZvcm0/XCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdmb3JtX3RlbXBsYXRlJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdmb3JtX3RlbXBsYXRlJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmZvcm1fdGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aGFua3lvdV90ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUaGFuayBZb3UgVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHRlbXBsYXRlIGlzIHJlcG9uc2libGUgZm9yIHRoYW5raW5nIHJlc3BvbmRlbnRzP1wiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygndGhhbmt5b3VfdGVtcGxhdGUnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3RoYW5reW91X3RlbXBsYXRlJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnRoYW5reW91X3RlbXBsYXRlXCI+XG4gICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIGlkPVwiZm9ybV9wYW5lbF9ibHVlcHJpbnRcIiA6Z3JpZD1cImZhbHNlXCIgdGl0bGU9XCJCbHVlcHJpbnRcIiBkZXNjcmlwdGlvbj1cIkNyZWF0ZSB0aGUgY29udGVudCBibHVlcHJpbnQgZm9yIHRoaXMgZm9ybSBieSBhZGRpbmcgcGFuZWwgc2VjdGlvbnMgYW5kIGZpZWxkcyB0byBlaXRoZXIgdGhlIHBhZ2UgYm9keSBvciBwYWdlIHNpZGViYXIuXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgPGJsdWVwcmludD5cbiAgICAgICAgICAgICAgICA8Ymx1ZXByaW50LWFyZWEgdi1tb2RlbD1cImZvcm0uc2VjdGlvbnNcIiA6cGxhY2VtZW50cz1cInBsYWNlbWVudHNcIiBhcmVhPVwiYm9keVwiIHRpdGxlPVwiQm9keVwiPjwvYmx1ZXByaW50LWFyZWE+XG4gICAgICAgICAgICAgICAgPGJsdWVwcmludC1hcmVhIHYtbW9kZWw9XCJmb3JtLnNlY3Rpb25zXCIgY2xhc3M9XCJibHVlcHJpbnRfX2NvbC0tc2lkZWJhclwiIDpwbGFjZW1lbnRzPVwicGxhY2VtZW50c1wiIGFyZWE9XCJzaWRlYmFyXCIgdGl0bGU9XCJTaWRlYmFyXCI+PC9ibHVlcHJpbnQtYXJlYT5cbiAgICAgICAgICAgIDwvYmx1ZXByaW50PlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnNpZGViYXI+XG4gICAgICAgICAgICA8dWktY2FyZD5cbiAgICAgICAgICAgICAgICA8dWktY2FyZC1ib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dWktc2x1Zy1ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZvcm0taGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyPVwiX1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6d2F0Y2g9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnaGFuZGxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2hhbmRsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLXNsdWctZ3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgPHVpLXRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRydWUtdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmYWxzZS12YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC91aS10b2dnbGU+XG4gICAgICAgICAgICAgICAgPC91aS1jYXJkLWJvZHk+XG4gICAgICAgICAgICA8L3VpLWNhcmQ+XG5cbiAgICAgICAgICAgIDx1aS1kZWZpbml0aW9uLWxpc3Qgdi1pZj1cInJlc291cmNlXCI+XG4gICAgICAgICAgICAgICAgPHVpLWRlZmluaXRpb24gbmFtZT1cIlN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NpcmNsZSddXCIgY2xhc3M9XCJmYS1mdyB0ZXh0LXhzXCIgOmNsYXNzPVwieyd0ZXh0LXN1Y2Nlc3MtNTAwJzogcmVzb3VyY2Uuc3RhdHVzLCAndGV4dC1kYW5nZXItNTAwJzogISByZXNvdXJjZS5zdGF0dXN9XCI+PC9mYS1pY29uPiB7eyByZXNvdXJjZS5zdGF0dXMgPyAnRW5hYmxlZCcgOiAnRGlzYWJsZWQnIH19XG4gICAgICAgICAgICAgICAgPC91aS1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHVpLWRlZmluaXRpb24gbmFtZT1cIkNyZWF0ZWQgQXRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJG1vbWVudChyZXNvdXJjZS5jcmVhdGVkX2F0KS5mb3JtYXQoJ1ktTU0tREQsIGhoOm1tIGEnKSB9fVxuICAgICAgICAgICAgICAgIDwvdWktZGVmaW5pdGlvbj5cblxuICAgICAgICAgICAgICAgIDx1aS1kZWZpbml0aW9uIG5hbWU9XCJVcGRhdGVkIEF0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ICRtb21lbnQocmVzb3VyY2UudXBkYXRlZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgfX1cbiAgICAgICAgICAgICAgICA8L3VpLWRlZmluaXRpb24+XG4gICAgICAgICAgICA8L3VpLWRlZmluaXRpb24tbGlzdD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Zvcm0tY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlYWR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmaWVsZHR5cGU6IHt9LFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0JvZHknLCAgICB2YWx1ZTogJ2JvZHknICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdTaWRlYmFyJywgdmFsdWU6ICdzaWRlYmFyJyB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICdmb3JtLmNvbGxlY3RfZW1haWxfYWRkcmVzc2VzJyh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNwb25zZV9yZWNlaXB0ID0gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJZGVudGlmaWFibGVFbWFpbEZpZWxkKClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSWRlbnRpZmlhYmxlRW1haWxGaWVsZCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnZm9ybS5zZWN0aW9ucyc6IHtcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNvbGxlY3RfZW1haWxfYWRkcmVzc2VzID0gdGhpcy5oYXNJZGVudGlmaWFibGVFbWFpbEZpZWxkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBoYXNJZGVudGlmaWFibGVFbWFpbEZpZWxkKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmZpbmRJbmRleCh0aGlzLmZvcm0uc2VjdGlvbnNbMF0uZmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAoZmllbGQpID0+IGZpZWxkLnNldHRpbmdzLmlkZW50aWZpYWJsZSkgIT0gLTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBhZGRJZGVudGlmaWFibGVFbWFpbEZpZWxkKCkge1xuICAgICAgICAgICAgICAgIGJ1cygpLiRlbWl0KGBhZGQtZmllbGQtJHt0aGlzLmZvcm0uc2VjdGlvbnNbMF0uaGFuZGxlfWAsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5maWVsZHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7IGlkZW50aWZpYWJsZTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlbW92ZUlkZW50aWZpYWJsZUVtYWlsRmllbGQoKSB7XG4gICAgICAgICAgICAgICAgYnVzKCkuJGVtaXQoYHJlbW92ZS1maWVsZC0ke3RoaXMuZm9ybS5zZWN0aW9uc1swXS5oYW5kbGV9YCxcbiAgICAgICAgICAgICAgICAgICAgJ3NldHRpbmdzLmlkZW50aWZpYWJsZScsIHRydWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9maWVsZHR5cGVzL2VtYWlsJyksXG4gICAgICAgICAgICBdKS50aGVuKGF4aW9zLnNwcmVhZCgoZmllbGR0eXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHR5cGUgPSBmaWVsZHR5cGUuZGF0YVxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODZhNGFkNWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4NmE0YWQ1YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4NmE0YWQ1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4NmE0YWQ1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODZhNGFkNWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODZhNGFkNWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Gb3Jtcy9FZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRjNDZkZDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2ZGM0NmRkMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ZGM0NmRkMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ZGM0NmRkMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRjNDZkZDImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmRjNDZkZDInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Gb3Jtcy9TaGFyZWRGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBhZ2UtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcInBhcGVyLXBsYW5lXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJFZGl0IEZvcm1cIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5mb3JtXG4gICAgICAgID8gX2MoXCJzaGFyZWQtZm9ybVwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgcmVzb3VyY2U6IF92bS5yZXNvdXJjZSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImZvcm0tY29udGFpbmVyXCIsXG4gICAge1xuICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwic2lkZWJhclwiLFxuICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktY2FyZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInVpLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1aS1zbHVnLWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZm9ybS1oYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltaXRlcjogXCJfXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiaGFuZGxlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImhhbmRsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJoYW5kbGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWktdG9nZ2xlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRydWUtdmFsdWVcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxzZS12YWx1ZVwiOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInN0YXR1c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnJlc291cmNlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS1kZWZpbml0aW9uLWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS1kZWZpbml0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiU3RhdHVzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IHRleHQteHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXN1Y2Nlc3MtNTAwXCI6IF92bS5yZXNvdXJjZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtZGFuZ2VyLTUwMFwiOiAhX3ZtLnJlc291cmNlLnN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2lyY2xlXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXNvdXJjZS5zdGF0dXMgPyBcIkVuYWJsZWRcIiA6IFwiRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWktZGVmaW5pdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQ3JlYXRlZCBBdFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KF92bS5yZXNvdXJjZS5jcmVhdGVkX2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWS1NTS1ERCwgaGg6bW0gYVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWktZGVmaW5pdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiVXBkYXRlZCBBdFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KF92bS5yZXNvdXJjZS51cGRhdGVkX2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWS1NTS1ERCwgaGg6bW0gYVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSlcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwicG9ydGFsXCIsIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJmb3Jtc1wiIH0sIHZhcmlhbnQ6IFwic2Vjb25kYXJ5XCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZm9ybS5oYXNDaGFuZ2VzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRwYXJlbnQuc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJHZW5lcmFsIEluZm9ybWF0aW9uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgXCJHZW5lcmFsIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgZm9ybSBhbmQgd2hhdCBpdCBjb2xsZWN0cy5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgaGVscDogXCJXaGF0IHNob3VsZCB0aGlzIGZvcm0gYmUgY2FsbGVkP1wiLFxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm5hbWVcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVpLXRleHRhcmVhLWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgaGVscDogXCJHaXZlIGEgc2hvcnQgZGVzY3JpcHRpb24gb2Ygd2hhdCB0aGlzIGZvcm0gd2lsbCBjb2xsZWN0LlwiLFxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJkZXNjcmlwdGlvblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRlc2NyaXB0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlByaXZhY3lcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbmZpZ3VyZSB0aGlzIGZvcm1zIHByaXZhY3kgc2V0dGluZ3MuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWktZmllbGRzZXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiUHJpdmFjeSBTZXR0aW5nc1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1jaGVja2JveC1zaW5nbGVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNvbGxlY3RfZW1haWxfYWRkcmVzc2VzXCIsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImNvbGxlY3RfZW1haWxfYWRkcmVzc2VzXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY29sbGVjdF9lbWFpbF9hZGRyZXNzZXMsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjb2xsZWN0X2VtYWlsX2FkZHJlc3Nlc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb2xsZWN0X2VtYWlsX2FkZHJlc3Nlc1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29sbGVjdCBlbWFpbCBhZGRyZXNzZXNcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktY2hlY2tib3gtc2luZ2xlXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjb2xsZWN0X2lwX2FkZHJlc3Nlc1wiLFxuICAgICAgICAgICAgICAgICAgICBpZDogXCJjb2xsZWN0X2lwX2FkZHJlc3Nlc1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbGxlY3RfaXBfYWRkcmVzc2VzLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiY29sbGVjdF9pcF9hZGRyZXNzZXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY29sbGVjdF9pcF9hZGRyZXNzZXNcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkNvbGxlY3QgSVAgYWRkcmVzc2VzXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVpLWNoZWNrYm94LXNpbmdsZVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVzcG9uc2VfcmVjZWlwdFwiLFxuICAgICAgICAgICAgICAgICAgICBpZDogXCJyZXNwb25zZV9yZWNlaXB0XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgXCJSZXNwb25kZW50cyB3aWxsIHJlY2VpdmUgYSBjb3B5IG9mIHRoZWlyIHN1Ym1pc3Npb24uXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmZvcm0uY29sbGVjdF9lbWFpbF9hZGRyZXNzZXNcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucmVzcG9uc2VfcmVjZWlwdCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJlc3BvbnNlX3JlY2VpcHRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVzcG9uc2VfcmVjZWlwdFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVzcG9uc2UgcmVjZWlwdHNcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlNwYW1cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbmZpZ3VyZSB0aGlzIGZvcm1zIHNwYW0gcHJvdGVjdGlvbiBzZXR0aW5ncy5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1aS1maWVsZHNldFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCJTcGFtIFNldHRpbmdzXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVpLWNoZWNrYm94LXNpbmdsZVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW5hYmxlX3JlY2FwdGNoYVwiLFxuICAgICAgICAgICAgICAgICAgICBpZDogXCJlbmFibGVfcmVjYXB0Y2hhXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgXCJCZSBzdXJlIHRvIGVudGVyIHlvdXIgc2l0ZSBrZXkgYW5kIHNlY3JldCBrZXkgaW4gc2V0dGluZ3MuXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW5hYmxlX3JlY2FwdGNoYSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImVuYWJsZV9yZWNhcHRjaGFcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW5hYmxlX3JlY2FwdGNoYVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRW5hYmxlIEdvb2dsZSByZUNBUFRDSEFcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktY2hlY2tib3gtc2luZ2xlXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbmFibGVfaG9uZXlwb3RcIixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZW5hYmxlX2hvbmV5cG90XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgXCJBIGhvbmV5cG90IGlzIGEgZ3JlYXQgYW5kIG5hdGl2ZSBhbHRlcm5hdGl2ZSB0byBHb29nbGUgcmVDQVBUQ0hBLiBCb3RoIG9wdGlvbnMgY2FuIGJlIHNhZmVseSBlbmFibGVkIGF0IHRoZSBzYW1lIHRpbWUuXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW5hYmxlX2hvbmV5cG90LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW5hYmxlX2hvbmV5cG90XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmVuYWJsZV9ob25leXBvdFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRW5hYmxlIEhvbmV5cG90XCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJOb3RpZmljYXRpb25zXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgXCJDb25maWd1cmUgd2hvIHNob3VsZCByZWNlaXZlIG5vdGlmaWNhdGlvbnMgd2hlbiBzdWJtaXNzaW9ucyBhcmUgbWFkZS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktdGV4dGFyZWEtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzZW5kX3RvXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNlbmQgbm90aWZpY2F0aW9ucyB0by4uLlwiLFxuICAgICAgICAgICAgICBoZWxwOiBcIkxpc3QgZW1haWxzIGFzIGEgY29tbWEgc2VwYXJhdGVkIGxpc3QuXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIm1hcmllLmNAZXhhbXBsZS5jb20sIG5pa29sYS50QGV4YW1wbGUuY29tXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJzZW5kX3RvXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInNlbmRfdG9cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2VuZF90byxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNlbmRfdG9cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2VuZF90b1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwicmVwbHlfdG9cIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiUmVwbHkgdG8uLi5cIixcbiAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICBcIlJlcGxpZXMgdG8gdGhlIGNvbmZpcm1hdGlvbiBlbWFpbCB3aWxsIGJlIHNlbnQgdG8gdGhpcyBlLW1haWwuIEJ5IGRlZmF1bHQgdGhpcyB3aWxsIHJlZmVyZW5jZSB0aGUgZGVmYXVsdCBlbWFpbCBpbiBzeXN0ZW0gc2V0dGluZ3MuXCIsXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInJlcGx5X3RvXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInJlcGx5X3RvXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJlcGx5X3RvLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicmVwbHlfdG9cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVwbHlfdG9cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiQ29uZmlndXJlIGNvbmZpcm1hdGlvbiBzZXR0aW5ncyB3aGVuIHN1Ym1pc3Npb25zIGFyZSBtYWRlLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaW5saW5lOiBcIlwiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFmdGVyIHN1Ym1pdHRpbmcgdGhlIGZvcm0uLi5cIixcbiAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicmVkaXJlY3Rfb25fc3VibWlzc2lvblwiKSxcbiAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1yYWRpb1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInJlZGlyZWN0X29uX3N1Ym1pc3Npb25fZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibmF0aXZlLXZhbHVlXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb24sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlJlZGlyZWN0IHRvIGRlZmF1bHQgY29uZmlybWF0aW9uIHBhZ2UuLi5cIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktcmFkaW9cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uX3RydWVcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibmF0aXZlLXZhbHVlXCI6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucmVkaXJlY3Rfb25fc3VibWlzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVkaXJlY3Rfb25fc3VibWlzc2lvblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVkaXJlY3QgdG8gY3VzdG9tIHBhZ2UuLi5cIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5mb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb24gPT09IGZhbHNlXG4gICAgICAgICAgICA/IF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImNvbmZpcm1hdGlvbl9tZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJNZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICBcIlRoaXMgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgY29uZmlybWF0aW9uIHBhZ2UuXCIsXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiY29uZmlybWF0aW9uX21lc3NhZ2VcIiksXG4gICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImNvbmZpcm1hdGlvbl9tZXNzYWdlXCIpLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiVGhhbmsgeW91ISBXZSdsbCBiZSBpbiB0b3VjaCBzb29uLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbmZpcm1hdGlvbl9tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjb25maXJtYXRpb25fbWVzc2FnZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNvbmZpcm1hdGlvbl9tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmZvcm0ucmVkaXJlY3Rfb25fc3VibWlzc2lvbiA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZWRpcmVjdF91cmxcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlVSTFwiLFxuICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgXCJUaGUgVVJMIHRvIHJlZGlyZWN0IHVzZXJzIHRvIGFmdGVyIHN1Ym1pdHRpbmcgdGhlIGZvcm0uXCIsXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicmVkaXJlY3RfdXJsXCIpLFxuICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJyZWRpcmVjdF91cmxcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucmVkaXJlY3RfdXJsLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyZWRpcmVjdF91cmxcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yZWRpcmVjdF91cmxcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJUZW1wbGF0ZXNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbmZpZ3VyZSB0aGlzIGZvcm1zIHRlbXBsYXRlIHNldHRpbmdzLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcImZvcm1fdGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRm9ybSBUZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICBoZWxwOiBcIldoYXQgdGVtcGxhdGUgaXMgcmVzcG9uc2libGUgZm9yIHJlbmRlcmluZyB0aGlzIGZvcm0/XCIsXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgbW9ub3NwYWNlZDogXCJcIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImZvcm1fdGVtcGxhdGVcIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiZm9ybV90ZW1wbGF0ZVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5mb3JtX3RlbXBsYXRlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZm9ybV90ZW1wbGF0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5mb3JtX3RlbXBsYXRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJ0aGFua3lvdV90ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJUaGFuayBZb3UgVGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgaGVscDogXCJXaGF0IHRlbXBsYXRlIGlzIHJlcG9uc2libGUgZm9yIHRoYW5raW5nIHJlc3BvbmRlbnRzP1wiLFxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJ0aGFua3lvdV90ZW1wbGF0ZVwiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJ0aGFua3lvdV90ZW1wbGF0ZVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50aGFua3lvdV90ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInRoYW5reW91X3RlbXBsYXRlXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnRoYW5reW91X3RlbXBsYXRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcImZvcm1fcGFuZWxfYmx1ZXByaW50XCIsXG4gICAgICAgICAgICBncmlkOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkJsdWVwcmludFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiQ3JlYXRlIHRoZSBjb250ZW50IGJsdWVwcmludCBmb3IgdGhpcyBmb3JtIGJ5IGFkZGluZyBwYW5lbCBzZWN0aW9ucyBhbmQgZmllbGRzIHRvIGVpdGhlciB0aGUgcGFnZSBib2R5IG9yIHBhZ2Ugc2lkZWJhci5cIixcbiAgICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYmx1ZXByaW50XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYmx1ZXByaW50LWFyZWFcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnRzOiBfdm0ucGxhY2VtZW50cyxcbiAgICAgICAgICAgICAgICAgIGFyZWE6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQm9keVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnNlY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzZWN0aW9uc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNlY3Rpb25zXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJsdWVwcmludC1hcmVhXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJibHVlcHJpbnRfX2NvbC0tc2lkZWJhclwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnRzOiBfdm0ucGxhY2VtZW50cyxcbiAgICAgICAgICAgICAgICAgIGFyZWE6IFwic2lkZWJhclwiLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2lkZWJhclwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnNlY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzZWN0aW9uc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNlY3Rpb25zXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==