(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forms/SharedForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Forms/SharedForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      ready: false,
      fieldtype: {}
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
    }
  },
  methods: {
    addIdentifiableEmailField: function addIdentifiableEmailField() {
      bus().$emit("add-field-".concat(this.form.sections[0].handle), {
        type: this.fieldtype,
        settings: {
          type: 'email',
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

    axios.all([axios.get('/api/fieldtypes/input')]).then(axios.spread(function (fieldtype) {
      _this.fieldtype = fieldtype.data;
      _this.ready = true;
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2& ***!
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
            title: "Blueprint",
            description: "Configure this forms blueprint."
          }
        },
        [
          _c("section-builder", {
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Forms/SharedForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/Forms/SharedForm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedForm_vue_vue_type_template_id_6dc46dd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=6dc46dd2& */ "./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/Forms/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedForm_vue_vue_type_template_id_6dc46dd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedForm_vue_vue_type_template_id_6dc46dd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Forms/SharedForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Forms/SharedForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Forms/SharedForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forms/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6dc46dd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=template&id=6dc46dd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forms/SharedForm.vue?vue&type=template&id=6dc46dd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6dc46dd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6dc46dd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0Zvcm1zL1NoYXJlZEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Gb3Jtcy9TaGFyZWRGb3JtLnZ1ZT84MWE2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Gb3Jtcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRm9ybXMvU2hhcmVkRm9ybS52dWU/N2ExOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRm9ybXMvU2hhcmVkRm9ybS52dWU/ZWI2ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnTEE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFJQSxHQU5BO0FBUUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxrQkFEQTtBQUVBLHFCQUZBO0FBR0E7QUFIQTtBQU5BLEdBUkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsU0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQSxHQXJCQTtBQW1DQTtBQUNBLDZCQURBLHVDQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQSxLQU5BO0FBUUEsZ0NBUkEsMENBUUE7QUFDQSx3RUFDQSx1QkFEQSxFQUNBLElBREE7QUFFQTtBQVhBLEdBbkNBO0FBaURBLFNBakRBLHFCQWlEQTtBQUFBOztBQUNBLGVBQ0Esa0NBREEsR0FFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsS0FIQSxDQUZBO0FBTUE7QUF4REEsRzs7Ozs7Ozs7Ozs7O0FDaExBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxTQUFTLHFCQUFxQixFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsU0FBUyxxQkFBcUIsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0JBQW9CLFNBQVMsZ0JBQWdCLEVBQUU7QUFDL0M7QUFDQTtBQUNBLFdBQVcseUJBQXlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyxNQUFNLGdCQUFnQix3QkFBd0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyw0QkFBNEIsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyx5QkFBeUIsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvakJBO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQzNCO0FBQ0w7OztBQUd6RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUscUZBQU07QUFDUixFQUFFLDhGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFnTSxDQUFnQixzUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzIuanM/aWQ9NDE3Yzk0ZTJmYmY1MzIzOWJjMTAiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGZvcm0tY29udGFpbmVyPlxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIDp0bz1cInsgbmFtZTogJ2Zvcm1zJyB9XCIgdmFyaWFudD1cInNlY29uZGFyeVwiPkdvIEJhY2s8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cIiRwYXJlbnQuc3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIiA6ZGlzYWJsZWQ9XCIhZm9ybS5oYXNDaGFuZ2VzXCI+U2F2ZTwvdWktYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJHZW5lcmFsIEluZm9ybWF0aW9uXCIgZGVzY3JpcHRpb249XCJHZW5lcmFsIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgZm9ybSBhbmQgd2hhdCBpdCBjb2xsZWN0cy5cIj5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHNob3VsZCB0aGlzIGZvcm0gYmUgY2FsbGVkP1wiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cblxuICAgICAgICAgICAgPHVpLXRleHRhcmVhLWdyb3VwXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiR2l2ZSBhIHNob3J0IGRlc2NyaXB0aW9uIG9mIHdoYXQgdGhpcyBmb3JtIHdpbGwgY29sbGVjdC5cIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2Rlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8L3VpLXRleHRhcmVhLWdyb3VwPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiUHJpdmFjeVwiIGRlc2NyaXB0aW9uPVwiQ29uZmlndXJlIHRoaXMgZm9ybXMgcHJpdmFjeSBzZXR0aW5ncy5cIj5cbiAgICAgICAgICAgIDx1aS1maWVsZHNldCBsYWJlbD1cIlByaXZhY3kgU2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICA8dWktY2hlY2tib3gtc2luZ2xlIG5hbWU9XCJjb2xsZWN0X2VtYWlsX2FkZHJlc3Nlc1wiIGlkPVwiY29sbGVjdF9lbWFpbF9hZGRyZXNzZXNcIiB2LW1vZGVsPVwiZm9ybS5jb2xsZWN0X2VtYWlsX2FkZHJlc3Nlc1wiPkNvbGxlY3QgZW1haWwgYWRkcmVzc2VzPC91aS1jaGVja2JveC1zaW5nbGU+XG4gICAgICAgICAgICAgICAgPHVpLWNoZWNrYm94LXNpbmdsZSBuYW1lPVwiY29sbGVjdF9pcF9hZGRyZXNzZXNcIiBpZD1cImNvbGxlY3RfaXBfYWRkcmVzc2VzXCIgdi1tb2RlbD1cImZvcm0uY29sbGVjdF9pcF9hZGRyZXNzZXNcIj5Db2xsZWN0IElQIGFkZHJlc3NlczwvdWktY2hlY2tib3gtc2luZ2xlPlxuICAgICAgICAgICAgICAgIDx1aS1jaGVja2JveC1zaW5nbGUgbmFtZT1cInJlc3BvbnNlX3JlY2VpcHRcIiBpZD1cInJlc3BvbnNlX3JlY2VpcHRcIiBoZWxwPVwiUmVzcG9uZGVudHMgd2lsbCByZWNlaXZlIGEgY29weSBvZiB0aGVpciBzdWJtaXNzaW9uLlwiIDpkaXNhYmxlZD1cIiEgZm9ybS5jb2xsZWN0X2VtYWlsX2FkZHJlc3Nlc1wiIHYtbW9kZWw9XCJmb3JtLnJlc3BvbnNlX3JlY2VpcHRcIj5SZXNwb25zZSByZWNlaXB0czwvdWktY2hlY2tib3gtc2luZ2xlPlxuICAgICAgICAgICAgPC91aS1maWVsZHNldD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIlNwYW1cIiBkZXNjcmlwdGlvbj1cIkNvbmZpZ3VyZSB0aGlzIGZvcm1zIHNwYW0gcHJvdGVjdGlvbiBzZXR0aW5ncy5cIj5cbiAgICAgICAgICAgIDx1aS1maWVsZHNldCBsYWJlbD1cIlNwYW0gU2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICA8dWktY2hlY2tib3gtc2luZ2xlIG5hbWU9XCJlbmFibGVfcmVjYXB0Y2hhXCIgaWQ9XCJlbmFibGVfcmVjYXB0Y2hhXCIgaGVscD1cIkJlIHN1cmUgdG8gZW50ZXIgeW91ciBzaXRlIGtleSBhbmQgc2VjcmV0IGtleSBpbiBzZXR0aW5ncy5cIiB2LW1vZGVsPVwiZm9ybS5lbmFibGVfcmVjYXB0Y2hhXCI+RW5hYmxlIEdvb2dsZSByZUNBUFRDSEE8L3VpLWNoZWNrYm94LXNpbmdsZT5cbiAgICAgICAgICAgICAgICA8dWktY2hlY2tib3gtc2luZ2xlIG5hbWU9XCJlbmFibGVfaG9uZXlwb3RcIiBpZD1cImVuYWJsZV9ob25leXBvdFwiIGhlbHA9XCJBIGhvbmV5cG90IGlzIGEgZ3JlYXQgYW5kIG5hdGl2ZSBhbHRlcm5hdGl2ZSB0byBHb29nbGUgcmVDQVBUQ0hBLiBCb3RoIG9wdGlvbnMgY2FuIGJlIHNhZmVseSBlbmFibGVkIGF0IHRoZSBzYW1lIHRpbWUuXCIgdi1tb2RlbD1cImZvcm0uZW5hYmxlX2hvbmV5cG90XCI+RW5hYmxlIEhvbmV5cG90PC91aS1jaGVja2JveC1zaW5nbGU+XG4gICAgICAgICAgICA8L3VpLWZpZWxkc2V0PlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiTm90aWZpY2F0aW9uc1wiIGRlc2NyaXB0aW9uPVwiQ29uZmlndXJlIHdobyBzaG91bGQgcmVjZWl2ZSBub3RpZmljYXRpb25zIHdoZW4gc3VibWlzc2lvbnMgYXJlIG1hZGUuXCI+XG4gICAgICAgICAgICA8dWktdGV4dGFyZWEtZ3JvdXBcbiAgICAgICAgICAgICAgICBuYW1lPVwic2VuZF90b1wiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTZW5kIG5vdGlmaWNhdGlvbnMgdG8uLi5cIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJMaXN0IGVtYWlscyBhcyBhIGNvbW1hIHNlcGFyYXRlZCBsaXN0LlwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJtYXJpZS5jQGV4YW1wbGUuY29tLCBuaWtvbGEudEBleGFtcGxlLmNvbVwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnc2VuZF90bycpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnc2VuZF90bycpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zZW5kX3RvXCJcbiAgICAgICAgICAgID48L3VpLXRleHRhcmVhLWdyb3VwPlxuXG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICBuYW1lPVwicmVwbHlfdG9cIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVwbHkgdG8uLi5cIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJSZXBsaWVzIHRvIHRoZSBjb25maXJtYXRpb24gZW1haWwgd2lsbCBiZSBzZW50IHRvIHRoaXMgZS1tYWlsLiBCeSBkZWZhdWx0IHRoaXMgd2lsbCByZWZlcmVuY2UgdGhlIGRlZmF1bHQgZW1haWwgaW4gc3lzdGVtIHNldHRpbmdzLlwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdyZXBseV90bycpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncmVwbHlfdG8nKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucmVwbHlfdG9cIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuXG4gICAgICAgIDxzZWN0aW9uLWNhcmQgdGl0bGU9XCJDb25maXJtYXRpb25zXCIgZGVzY3JpcHRpb249XCJDb25maWd1cmUgY29uZmlybWF0aW9uIHNldHRpbmdzIHdoZW4gc3VibWlzc2lvbnMgYXJlIG1hZGUuXCI+XG4gICAgICAgICAgICA8dWktcmFkaW8tZ3JvdXBcbiAgICAgICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkFmdGVyIHN1Ym1pdHRpbmcgdGhlIGZvcm0uLi5cIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3JlZGlyZWN0X29uX3N1Ym1pc3Npb24nKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3JlZGlyZWN0X29uX3N1Ym1pc3Npb24nKVwiPlxuICAgICAgICAgICAgICAgIDx1aS1yYWRpbyBpZD1cInJlZGlyZWN0X29uX3N1Ym1pc3Npb25fZmFsc2VcIiB2LW1vZGVsPVwiZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCIgbmFtZT1cInJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIiA6bmF0aXZlLXZhbHVlPVwiZmFsc2VcIj5SZWRpcmVjdCB0byBkZWZhdWx0IGNvbmZpcm1hdGlvbiBwYWdlLi4uPC91aS1yYWRpbz5cbiAgICAgICAgICAgICAgICA8dWktcmFkaW8gaWQ9XCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uX3RydWVcIiB2LW1vZGVsPVwiZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCIgbmFtZT1cInJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIiA6bmF0aXZlLXZhbHVlPVwidHJ1ZVwiPlJlZGlyZWN0IHRvIGN1c3RvbSBwYWdlLi4uPC91aS1yYWRpbz5cbiAgICAgICAgICAgIDwvdWktcmFkaW8tZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIHYtaWY9XCJmb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb24gPT09IGZhbHNlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybWF0aW9uX21lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgaGVscD1cIlRoaXMgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgY29uZmlybWF0aW9uIHBhZ2UuXCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2NvbmZpcm1hdGlvbl9tZXNzYWdlJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdjb25maXJtYXRpb25fbWVzc2FnZScpXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRoYW5rIHlvdSEgV2UnbGwgYmUgaW4gdG91Y2ggc29vbi5cIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmNvbmZpcm1hdGlvbl9tZXNzYWdlXCI+XG4gICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuXG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICB2LWlmPVwiZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uID09PSB0cnVlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicmVkaXJlY3RfdXJsXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXG4gICAgICAgICAgICAgICAgaGVscD1cIlRoZSBVUkwgdG8gcmVkaXJlY3QgdXNlcnMgdG8gYWZ0ZXIgc3VibWl0dGluZyB0aGUgZm9ybS5cIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygncmVkaXJlY3RfdXJsJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdyZWRpcmVjdF91cmwnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucmVkaXJlY3RfdXJsXCI+XG4gICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIHRpdGxlPVwiVGVtcGxhdGVzXCIgZGVzY3JpcHRpb249XCJDb25maWd1cmUgdGhpcyBmb3JtcyB0ZW1wbGF0ZSBzZXR0aW5ncy5cIj5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIG5hbWU9XCJmb3JtX3RlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkZvcm0gVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHRlbXBsYXRlIGlzIHJlc3BvbnNpYmxlIGZvciByZW5kZXJpbmcgdGhpcyBmb3JtP1wiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnZm9ybV90ZW1wbGF0ZScpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnZm9ybV90ZW1wbGF0ZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5mb3JtX3RlbXBsYXRlXCI+XG4gICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuXG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICBuYW1lPVwidGhhbmt5b3VfdGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGhhbmsgWW91IFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCB0ZW1wbGF0ZSBpcyByZXBvbnNpYmxlIGZvciB0aGFua2luZyByZXNwb25kZW50cz9cIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgbW9ub3NwYWNlZFxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3RoYW5reW91X3RlbXBsYXRlJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCd0aGFua3lvdV90ZW1wbGF0ZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS50aGFua3lvdV90ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCB0aXRsZT1cIkJsdWVwcmludFwiIGRlc2NyaXB0aW9uPVwiQ29uZmlndXJlIHRoaXMgZm9ybXMgYmx1ZXByaW50LlwiPlxuICAgICAgICAgICAgPHNlY3Rpb24tYnVpbGRlciB2LW1vZGVsPVwiZm9ybS5zZWN0aW9uc1wiPjwvc2VjdGlvbi1idWlsZGVyPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnNpZGViYXI+XG4gICAgICAgICAgICA8dWktY2FyZD5cbiAgICAgICAgICAgICAgICA8dWktY2FyZC1ib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dWktc2x1Zy1ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZvcm0taGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyPVwiX1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6d2F0Y2g9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnaGFuZGxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2hhbmRsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLXNsdWctZ3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgPHVpLXRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRydWUtdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmYWxzZS12YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC91aS10b2dnbGU+XG4gICAgICAgICAgICAgICAgPC91aS1jYXJkLWJvZHk+XG4gICAgICAgICAgICA8L3VpLWNhcmQ+XG5cbiAgICAgICAgICAgIDx1aS1kZWZpbml0aW9uLWxpc3Qgdi1pZj1cInJlc291cmNlXCI+XG4gICAgICAgICAgICAgICAgPHVpLWRlZmluaXRpb24gbmFtZT1cIlN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NpcmNsZSddXCIgY2xhc3M9XCJmYS1mdyB0ZXh0LXhzXCIgOmNsYXNzPVwieyd0ZXh0LXN1Y2Nlc3MtNTAwJzogcmVzb3VyY2Uuc3RhdHVzLCAndGV4dC1kYW5nZXItNTAwJzogISByZXNvdXJjZS5zdGF0dXN9XCI+PC9mYS1pY29uPiB7eyByZXNvdXJjZS5zdGF0dXMgPyAnRW5hYmxlZCcgOiAnRGlzYWJsZWQnIH19XG4gICAgICAgICAgICAgICAgPC91aS1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHVpLWRlZmluaXRpb24gbmFtZT1cIkNyZWF0ZWQgQXRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJG1vbWVudChyZXNvdXJjZS5jcmVhdGVkX2F0KS5mb3JtYXQoJ1ktTU0tREQsIGhoOm1tIGEnKSB9fVxuICAgICAgICAgICAgICAgIDwvdWktZGVmaW5pdGlvbj5cblxuICAgICAgICAgICAgICAgIDx1aS1kZWZpbml0aW9uIG5hbWU9XCJVcGRhdGVkIEF0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ICRtb21lbnQocmVzb3VyY2UudXBkYXRlZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgfX1cbiAgICAgICAgICAgICAgICA8L3VpLWRlZmluaXRpb24+XG4gICAgICAgICAgICA8L3VpLWRlZmluaXRpb24tbGlzdD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Zvcm0tY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlYWR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmaWVsZHR5cGU6IHt9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICdmb3JtLmNvbGxlY3RfZW1haWxfYWRkcmVzc2VzJzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVzcG9uc2VfcmVjZWlwdCA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSWRlbnRpZmlhYmxlRW1haWxGaWVsZCgpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZElkZW50aWZpYWJsZUVtYWlsRmllbGQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBhZGRJZGVudGlmaWFibGVFbWFpbEZpZWxkKCkge1xuICAgICAgICAgICAgICAgIGJ1cygpLiRlbWl0KGBhZGQtZmllbGQtJHt0aGlzLmZvcm0uc2VjdGlvbnNbMF0uaGFuZGxlfWAsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5maWVsZHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7IHR5cGU6ICdlbWFpbCcsIGlkZW50aWZpYWJsZTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlbW92ZUlkZW50aWZpYWJsZUVtYWlsRmllbGQoKSB7XG4gICAgICAgICAgICAgICAgYnVzKCkuJGVtaXQoYHJlbW92ZS1maWVsZC0ke3RoaXMuZm9ybS5zZWN0aW9uc1swXS5oYW5kbGV9YCxcbiAgICAgICAgICAgICAgICAgICAgJ3NldHRpbmdzLmlkZW50aWZpYWJsZScsIHRydWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9maWVsZHR5cGVzL2lucHV0JyksXG4gICAgICAgICAgICBdKS50aGVuKGF4aW9zLnNwcmVhZCgoZmllbGR0eXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHR5cGUgPSBmaWVsZHR5cGUuZGF0YVxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJmb3JtLWNvbnRhaW5lclwiLFxuICAgIHtcbiAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcInNpZGViYXJcIixcbiAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVpLWNhcmRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS1jYXJkLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWktc2x1Zy1ncm91cFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZvcm0taGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxpbWl0ZXI6IFwiX1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3YXRjaDogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImhhbmRsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJoYW5kbGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiaGFuZGxlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInVpLXRvZ2dsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlLXZhbHVlXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsc2UtdmFsdWVcIjogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdGF0dXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5yZXNvdXJjZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidWktZGVmaW5pdGlvbi1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWktZGVmaW5pdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcIlN0YXR1c1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyB0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1zdWNjZXNzLTUwMFwiOiBfdm0ucmVzb3VyY2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWRhbmdlci01MDBcIjogIV92bS5yZXNvdXJjZS5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNpcmNsZVwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVzb3VyY2Uuc3RhdHVzID8gXCJFbmFibGVkXCIgOiBcIkRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInVpLWRlZmluaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcIkNyZWF0ZWQgQXRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vbWVudChfdm0ucmVzb3VyY2UuY3JlYXRlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIlktTU0tREQsIGhoOm1tIGFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInVpLWRlZmluaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcIlVwZGF0ZWQgQXRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vbWVudChfdm0ucmVzb3VyY2UudXBkYXRlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIlktTU0tREQsIGhoOm1tIGFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0pXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiZm9ybXNcIiB9LCB2YXJpYW50OiBcInNlY29uZGFyeVwiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmZvcm0uaGFzQ2hhbmdlc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcGFyZW50LnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiR2VuZXJhbCBJbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiR2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIGZvcm0gYW5kIHdoYXQgaXQgY29sbGVjdHMuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgIGhlbHA6IFwiV2hhdCBzaG91bGQgdGhpcyBmb3JtIGJlIGNhbGxlZD9cIixcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICBhdXRvZm9jdXM6IFwiXCIsXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1aS10ZXh0YXJlYS1ncm91cFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIGhlbHA6IFwiR2l2ZSBhIHNob3J0IGRlc2NyaXB0aW9uIG9mIHdoYXQgdGhpcyBmb3JtIHdpbGwgY29sbGVjdC5cIixcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiZGVzY3JpcHRpb25cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJkZXNjcmlwdGlvblwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJQcml2YWN5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDb25maWd1cmUgdGhpcyBmb3JtcyBwcml2YWN5IHNldHRpbmdzLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVpLWZpZWxkc2V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIlByaXZhY3kgU2V0dGluZ3NcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktY2hlY2tib3gtc2luZ2xlXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjb2xsZWN0X2VtYWlsX2FkZHJlc3Nlc1wiLFxuICAgICAgICAgICAgICAgICAgICBpZDogXCJjb2xsZWN0X2VtYWlsX2FkZHJlc3Nlc1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbGxlY3RfZW1haWxfYWRkcmVzc2VzLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiY29sbGVjdF9lbWFpbF9hZGRyZXNzZXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY29sbGVjdF9lbWFpbF9hZGRyZXNzZXNcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkNvbGxlY3QgZW1haWwgYWRkcmVzc2VzXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVpLWNoZWNrYm94LXNpbmdsZVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29sbGVjdF9pcF9hZGRyZXNzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY29sbGVjdF9pcF9hZGRyZXNzZXNcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jb2xsZWN0X2lwX2FkZHJlc3NlcyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImNvbGxlY3RfaXBfYWRkcmVzc2VzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNvbGxlY3RfaXBfYWRkcmVzc2VzXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb2xsZWN0IElQIGFkZHJlc3Nlc1wiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1jaGVja2JveC1zaW5nbGVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlc3BvbnNlX3JlY2VpcHRcIixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVzcG9uc2VfcmVjZWlwdFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgIFwiUmVzcG9uZGVudHMgd2lsbCByZWNlaXZlIGEgY29weSBvZiB0aGVpciBzdWJtaXNzaW9uLlwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS5mb3JtLmNvbGxlY3RfZW1haWxfYWRkcmVzc2VzXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJlc3BvbnNlX3JlY2VpcHQsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyZXNwb25zZV9yZWNlaXB0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJlc3BvbnNlX3JlY2VpcHRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlJlc3BvbnNlIHJlY2VpcHRzXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJTcGFtXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDb25maWd1cmUgdGhpcyBmb3JtcyBzcGFtIHByb3RlY3Rpb24gc2V0dGluZ3MuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWktZmllbGRzZXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiU3BhbSBTZXR0aW5nc1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1jaGVja2JveC1zaW5nbGVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVuYWJsZV9yZWNhcHRjaGFcIixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZW5hYmxlX3JlY2FwdGNoYVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgIFwiQmUgc3VyZSB0byBlbnRlciB5b3VyIHNpdGUga2V5IGFuZCBzZWNyZXQga2V5IGluIHNldHRpbmdzLlwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVuYWJsZV9yZWNhcHRjaGEsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbmFibGVfcmVjYXB0Y2hhXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmVuYWJsZV9yZWNhcHRjaGFcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkVuYWJsZSBHb29nbGUgcmVDQVBUQ0hBXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVpLWNoZWNrYm94LXNpbmdsZVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW5hYmxlX2hvbmV5cG90XCIsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImVuYWJsZV9ob25leXBvdFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgIFwiQSBob25leXBvdCBpcyBhIGdyZWF0IGFuZCBuYXRpdmUgYWx0ZXJuYXRpdmUgdG8gR29vZ2xlIHJlQ0FQVENIQS4gQm90aCBvcHRpb25zIGNhbiBiZSBzYWZlbHkgZW5hYmxlZCBhdCB0aGUgc2FtZSB0aW1lLlwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVuYWJsZV9ob25leXBvdCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImVuYWJsZV9ob25leXBvdFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbmFibGVfaG9uZXlwb3RcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkVuYWJsZSBIb25leXBvdFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiTm90aWZpY2F0aW9uc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiQ29uZmlndXJlIHdobyBzaG91bGQgcmVjZWl2ZSBub3RpZmljYXRpb25zIHdoZW4gc3VibWlzc2lvbnMgYXJlIG1hZGUuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInVpLXRleHRhcmVhLWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2VuZF90b1wiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJTZW5kIG5vdGlmaWNhdGlvbnMgdG8uLi5cIixcbiAgICAgICAgICAgICAgaGVscDogXCJMaXN0IGVtYWlscyBhcyBhIGNvbW1hIHNlcGFyYXRlZCBsaXN0LlwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJtYXJpZS5jQGV4YW1wbGUuY29tLCBuaWtvbGEudEBleGFtcGxlLmNvbVwiLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwic2VuZF90b1wiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJzZW5kX3RvXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnNlbmRfdG8sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzZW5kX3RvXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNlbmRfdG9cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcInJlcGx5X3RvXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlJlcGx5IHRvLi4uXCIsXG4gICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgXCJSZXBsaWVzIHRvIHRoZSBjb25maXJtYXRpb24gZW1haWwgd2lsbCBiZSBzZW50IHRvIHRoaXMgZS1tYWlsLiBCeSBkZWZhdWx0IHRoaXMgd2lsbCByZWZlcmVuY2UgdGhlIGRlZmF1bHQgZW1haWwgaW4gc3lzdGVtIHNldHRpbmdzLlwiLFxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJyZXBseV90b1wiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJyZXBseV90b1wiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZXBseV90byxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJlcGx5X3RvXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJlcGx5X3RvXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbnNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICBcIkNvbmZpZ3VyZSBjb25maXJtYXRpb24gc2V0dGluZ3Mgd2hlbiBzdWJtaXNzaW9ucyBhcmUgbWFkZS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1aS1yYWRpby1ncm91cFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlubGluZTogXCJcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJBZnRlciBzdWJtaXR0aW5nIHRoZSBmb3JtLi4uXCIsXG4gICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIiksXG4gICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktcmFkaW9cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uX2ZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVkaXJlY3Rfb25fc3VibWlzc2lvblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicmVkaXJlY3Rfb25fc3VibWlzc2lvblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZWRpcmVjdCB0byBkZWZhdWx0IGNvbmZpcm1hdGlvbiBwYWdlLi4uXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVpLXJhZGlvXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVkaXJlY3Rfb25fc3VibWlzc2lvbl90cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVkaXJlY3Rfb25fc3VibWlzc2lvblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb24sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlJlZGlyZWN0IHRvIGN1c3RvbSBwYWdlLi4uXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uID09PSBmYWxzZVxuICAgICAgICAgICAgPyBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJjb25maXJtYXRpb25fbWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgXCJUaGlzIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgb24gdGhlIGNvbmZpcm1hdGlvbiBwYWdlLlwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImNvbmZpcm1hdGlvbl9tZXNzYWdlXCIpLFxuICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJjb25maXJtYXRpb25fbWVzc2FnZVwiKSxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlRoYW5rIHlvdSEgV2UnbGwgYmUgaW4gdG91Y2ggc29vbi5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jb25maXJtYXRpb25fbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiY29uZmlybWF0aW9uX21lc3NhZ2VcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb25maXJtYXRpb25fbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5mb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb24gPT09IHRydWVcbiAgICAgICAgICAgID8gX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVkaXJlY3RfdXJsXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJVUkxcIixcbiAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgIFwiVGhlIFVSTCB0byByZWRpcmVjdCB1c2VycyB0byBhZnRlciBzdWJtaXR0aW5nIHRoZSBmb3JtLlwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInJlZGlyZWN0X3VybFwiKSxcbiAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwicmVkaXJlY3RfdXJsXCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJlZGlyZWN0X3VybCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicmVkaXJlY3RfdXJsXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVkaXJlY3RfdXJsXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVGVtcGxhdGVzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDb25maWd1cmUgdGhpcyBmb3JtcyB0ZW1wbGF0ZSBzZXR0aW5ncy5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJmb3JtX3RlbXBsYXRlXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkZvcm0gVGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgaGVscDogXCJXaGF0IHRlbXBsYXRlIGlzIHJlc3BvbnNpYmxlIGZvciByZW5kZXJpbmcgdGhpcyBmb3JtP1wiLFxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJmb3JtX3RlbXBsYXRlXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImZvcm1fdGVtcGxhdGVcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZm9ybV90ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImZvcm1fdGVtcGxhdGVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZm9ybV90ZW1wbGF0ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwidGhhbmt5b3VfdGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVGhhbmsgWW91IFRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgIGhlbHA6IFwiV2hhdCB0ZW1wbGF0ZSBpcyByZXBvbnNpYmxlIGZvciB0aGFua2luZyByZXNwb25kZW50cz9cIixcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICBtb25vc3BhY2VkOiBcIlwiLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwidGhhbmt5b3VfdGVtcGxhdGVcIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwidGhhbmt5b3VfdGVtcGxhdGVcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udGhhbmt5b3VfdGVtcGxhdGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ0aGFua3lvdV90ZW1wbGF0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50aGFua3lvdV90ZW1wbGF0ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJCbHVlcHJpbnRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbmZpZ3VyZSB0aGlzIGZvcm1zIGJsdWVwcmludC5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic2VjdGlvbi1idWlsZGVyXCIsIHtcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zZWN0aW9ucyxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNlY3Rpb25zXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNlY3Rpb25zXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkYzQ2ZGQyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21hbmRhL1NpdGVzL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2ZGM0NmRkMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ZGM0NmRkMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ZGM0NmRkMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRjNDZkZDImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmRjNDZkZDInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Gb3Jtcy9TaGFyZWRGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRjNDZkZDImXCIiXSwic291cmNlUm9vdCI6IiJ9