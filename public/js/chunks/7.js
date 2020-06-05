(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Forms/SharedForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Forms/SharedForm.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
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
      var section = this.form.fieldset.sections[0].handle;
      this.$bus.$emit('add-field-' + section, {
        fieldtype: this.fieldtype,
        name: 'E-mail',
        handle: 'identifiable_email_address',
        settings: {
          type: 'email'
        }
      });
    },
    removeIdentifiableEmailField: function removeIdentifiableEmailField() {
      var section = this.form.fieldset.sections[0].handle;
      this.$bus.$emit('remove-field-' + section, 'identifiable_email_address');
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Forms/SharedForm.vue?vue&type=template&id=4c4f1d30&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Forms/SharedForm.vue?vue&type=template&id=4c4f1d30& ***!
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
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card__body" },
                  [
                    _c("p-slug", {
                      attrs: {
                        name: "handle",
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
                    _c("p-toggle", {
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
              ]),
              _vm._v(" "),
              _vm.resource
                ? _c(
                    "p-definition-list",
                    [
                      _c(
                        "p-definition",
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
                      _c("p-definition", { attrs: { name: "Created At" } }, [
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
                      _c("p-definition", { attrs: { name: "Updated At" } }, [
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
              "router-link",
              { staticClass: "button", attrs: { to: { name: "forms" } } },
              [_vm._v("Go Back")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button button--primary",
                class: { "button--disabled": !_vm.form.hasChanges },
                attrs: { type: "submit", disabled: !_vm.form.hasChanges },
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
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card__body" },
          [
            _c("p-title", {
              attrs: {
                name: "name",
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
            _c(
              "p-tabs",
              [
                _c(
                  "p-tab",
                  { key: "general", attrs: { name: "General" } },
                  [
                    _c("p-input", {
                      attrs: {
                        name: "description",
                        label: "Description",
                        help:
                          "Give a short description of what this form will collect.",
                        autocomplete: "off",
                        required: "",
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
                  "p-tab",
                  { key: "privacy", attrs: { name: "Privacy" } },
                  [
                    _c(
                      "p-checkbox-group",
                      { staticClass: "mb-0", attrs: { inline: "" } },
                      [
                        _c(
                          "p-checkbox",
                          {
                            attrs: {
                              name: "collect_email_addresses",
                              id: "collect_email_addresses"
                            },
                            model: {
                              value: _vm.form.collect_email_addresses,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.form,
                                  "collect_email_addresses",
                                  $$v
                                )
                              },
                              expression: "form.collect_email_addresses"
                            }
                          },
                          [_vm._v("Collect email addresses")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p-checkbox",
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
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "p-checkbox-group",
                      {
                        staticClass: "-mt-3",
                        attrs: {
                          inline: "",
                          help:
                            "Respondents will receive a copy of their submission."
                        }
                      },
                      [
                        _c(
                          "p-checkbox",
                          {
                            attrs: {
                              name: "response_receipt",
                              id: "response_receipt",
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
                  "p-tab",
                  { key: "spam", attrs: { name: "Spam" } },
                  [
                    _c(
                      "p-checkbox-group",
                      {
                        attrs: {
                          help:
                            "Be sure to enter your site key and secret key in settings."
                        }
                      },
                      [
                        _c(
                          "p-checkbox",
                          {
                            attrs: {
                              name: "enable_recaptcha",
                              id: "enable_recaptcha"
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
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "p-checkbox-group",
                      {
                        attrs: {
                          help:
                            "A honeypot is a great and native alternative to Google reCAPTCHA. Both options can be safely enabled at the same time."
                        }
                      },
                      [
                        _c(
                          "p-checkbox",
                          {
                            attrs: {
                              name: "enable_honeypot",
                              id: "enable_honeypot"
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
                  "p-tab",
                  { key: "notifications", attrs: { name: "Notifications" } },
                  [
                    _c("p-textarea", {
                      attrs: {
                        name: "send_to",
                        label: "Send notifications to...",
                        help: "List emails as a comma separated list.",
                        placeholder:
                          "marie.c@example.com, nikola.t@example.com",
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
                    _c("p-input", {
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
                  "p-tab",
                  { key: "confirmations", attrs: { name: "Confirmations" } },
                  [
                    _c(
                      "p-radio-group",
                      {
                        attrs: {
                          inline: "",
                          label: "After submitting the form...",
                          "has-error": _vm.form.errors.has(
                            "redirect_on_submission"
                          ),
                          "error-message": _vm.form.errors.get(
                            "redirect_on_submission"
                          )
                        }
                      },
                      [
                        _c(
                          "p-radio",
                          {
                            attrs: {
                              id: "redirect_on_submission_false",
                              name: "redirect_on_submission",
                              "native-value": false
                            },
                            model: {
                              value: _vm.form.redirect_on_submission,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.form,
                                  "redirect_on_submission",
                                  $$v
                                )
                              },
                              expression: "form.redirect_on_submission"
                            }
                          },
                          [_vm._v("Redirect to default confirmation page...")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p-radio",
                          {
                            attrs: {
                              id: "redirect_on_submission_true",
                              name: "redirect_on_submission",
                              "native-value": true
                            },
                            model: {
                              value: _vm.form.redirect_on_submission,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.form,
                                  "redirect_on_submission",
                                  $$v
                                )
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
                      ? _c("p-input", {
                          attrs: {
                            name: "confirmation_message",
                            label: "Message",
                            help:
                              "This message will be displayed on the confirmation page.",
                            autocomplete: "off",
                            "has-error": _vm.form.errors.has(
                              "confirmation_message"
                            ),
                            "error-message": _vm.form.errors.get(
                              "confirmation_message"
                            ),
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
                      ? _c("p-input", {
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
                  "p-tab",
                  { key: "templates", attrs: { name: "Templates" } },
                  [
                    _c("p-input", {
                      attrs: {
                        name: "form_template",
                        label: "Form Template",
                        help:
                          "What template is responsible for rendering this form?",
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
                    _c("p-input", {
                      attrs: {
                        name: "thankyou_template",
                        label: "Thank You Template",
                        help:
                          "What template is reponsible for thanking respondents?",
                        autocomplete: "off",
                        monospaced: "",
                        "has-error": _vm.form.errors.has("thankyou_template"),
                        "error-message": _vm.form.errors.get(
                          "thankyou_template"
                        )
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
                  "p-tab",
                  { key: "fields", attrs: { name: "Fields" } },
                  [
                    _c("section-builder", {
                      model: {
                        value: _vm.$parent.sections,
                        callback: function($$v) {
                          _vm.$set(_vm.$parent, "sections", $$v)
                        },
                        expression: "$parent.sections"
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
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Forms/SharedForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Forms/SharedForm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedForm_vue_vue_type_template_id_4c4f1d30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=4c4f1d30& */ "./resources/js/views/Forms/SharedForm.vue?vue&type=template&id=4c4f1d30&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/views/Forms/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedForm_vue_vue_type_template_id_4c4f1d30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedForm_vue_vue_type_template_id_4c4f1d30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Forms/SharedForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Forms/SharedForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Forms/SharedForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Forms/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Forms/SharedForm.vue?vue&type=template&id=4c4f1d30&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Forms/SharedForm.vue?vue&type=template&id=4c4f1d30& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_4c4f1d30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=template&id=4c4f1d30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Forms/SharedForm.vue?vue&type=template&id=4c4f1d30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_4c4f1d30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_4c4f1d30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0Zvcm1zL1NoYXJlZEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Gb3Jtcy9TaGFyZWRGb3JtLnZ1ZT84OTE5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Gb3Jtcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRm9ybXMvU2hhcmVkRm9ybS52dWU/NjkzMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRm9ybXMvU2hhcmVkRm9ybS52dWU/YmIyOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkxBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBSUEsR0FOQTtBQVFBO0FBQ0E7QUFDQTtBQURBLEtBREE7QUFLQTtBQUNBLGtCQURBO0FBRUEscUJBRkE7QUFHQTtBQUhBO0FBTEEsR0FSQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBLEdBcEJBO0FBa0NBO0FBQ0EsNkJBREEsdUNBQ0E7QUFDQTtBQUVBO0FBQ0EsaUNBREE7QUFFQSxzQkFGQTtBQUdBLDRDQUhBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFRQSxLQVpBO0FBY0EsZ0NBZEEsMENBY0E7QUFDQTtBQUVBO0FBQ0E7QUFsQkEsR0FsQ0E7QUF1REEsU0F2REEscUJBdURB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCLGlCQUFpQixFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JsQkE7QUFBQTtBQUFBO0FBQUE7QUFBeUY7QUFDM0I7QUFDTDs7O0FBR3pEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLHNQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvNy5qcz9pZD0zODdkOGY1NmZhNTVkNDhhMjRiYiIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8Zm9ybS1jb250YWluZXI+XG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdmb3JtcycgfVwiIGNsYXNzPVwiYnV0dG9uXCI+R28gQmFjazwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgQGNsaWNrLnByZXZlbnQ9XCIkcGFyZW50LnN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiIDpjbGFzcz1cInsnYnV0dG9uLS1kaXNhYmxlZCc6ICFmb3JtLmhhc0NoYW5nZXN9XCIgOmRpc2FibGVkPVwiIWZvcm0uaGFzQ2hhbmdlc1wiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICA8cC10aXRsZVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvcC10aXRsZT5cblxuICAgICAgICAgICAgICAgIDxwLXRhYnM+XG4gICAgICAgICAgICAgICAgICAgIDxwLXRhYiBrZXk9XCJnZW5lcmFsXCIgbmFtZT1cIkdlbmVyYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiR2l2ZSBhIHNob3J0IGRlc2NyaXB0aW9uIG9mIHdoYXQgdGhpcyBmb3JtIHdpbGwgY29sbGVjdC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdkZXNjcmlwdGlvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPC9wLXRhYj5cblxuICAgICAgICAgICAgICAgICAgICA8cC10YWIga2V5PVwicHJpdmFjeVwiIG5hbWU9XCJQcml2YWN5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1jaGVja2JveC1ncm91cCBpbmxpbmUgY2xhc3M9XCJtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtY2hlY2tib3ggbmFtZT1cImNvbGxlY3RfZW1haWxfYWRkcmVzc2VzXCIgaWQ9XCJjb2xsZWN0X2VtYWlsX2FkZHJlc3Nlc1wiIHYtbW9kZWw9XCJmb3JtLmNvbGxlY3RfZW1haWxfYWRkcmVzc2VzXCI+Q29sbGVjdCBlbWFpbCBhZGRyZXNzZXM8L3AtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtY2hlY2tib3ggbmFtZT1cImNvbGxlY3RfaXBfYWRkcmVzc2VzXCIgaWQ9XCJjb2xsZWN0X2lwX2FkZHJlc3Nlc1wiIHYtbW9kZWw9XCJmb3JtLmNvbGxlY3RfaXBfYWRkcmVzc2VzXCI+Q29sbGVjdCBJUCBhZGRyZXNzZXM8L3AtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtY2hlY2tib3gtZ3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWNoZWNrYm94LWdyb3VwIGNsYXNzPVwiLW10LTNcIiBpbmxpbmUgaGVscD1cIlJlc3BvbmRlbnRzIHdpbGwgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlaXIgc3VibWlzc2lvbi5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1jaGVja2JveCBuYW1lPVwicmVzcG9uc2VfcmVjZWlwdFwiIGlkPVwicmVzcG9uc2VfcmVjZWlwdFwiIDpkaXNhYmxlZD1cIiEgZm9ybS5jb2xsZWN0X2VtYWlsX2FkZHJlc3Nlc1wiIHYtbW9kZWw9XCJmb3JtLnJlc3BvbnNlX3JlY2VpcHRcIj5SZXNwb25zZSByZWNlaXB0czwvcC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1jaGVja2JveC1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9wLXRhYj5cblxuICAgICAgICAgICAgICAgICAgICA8cC10YWIga2V5PVwic3BhbVwiIG5hbWU9XCJTcGFtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1jaGVja2JveC1ncm91cCBoZWxwPVwiQmUgc3VyZSB0byBlbnRlciB5b3VyIHNpdGUga2V5IGFuZCBzZWNyZXQga2V5IGluIHNldHRpbmdzLlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWNoZWNrYm94IG5hbWU9XCJlbmFibGVfcmVjYXB0Y2hhXCIgaWQ9XCJlbmFibGVfcmVjYXB0Y2hhXCIgdi1tb2RlbD1cImZvcm0uZW5hYmxlX3JlY2FwdGNoYVwiPkVuYWJsZSBHb29nbGUgcmVDQVBUQ0hBPC9wLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWNoZWNrYm94LWdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1jaGVja2JveC1ncm91cCBoZWxwPVwiQSBob25leXBvdCBpcyBhIGdyZWF0IGFuZCBuYXRpdmUgYWx0ZXJuYXRpdmUgdG8gR29vZ2xlIHJlQ0FQVENIQS4gQm90aCBvcHRpb25zIGNhbiBiZSBzYWZlbHkgZW5hYmxlZCBhdCB0aGUgc2FtZSB0aW1lLlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWNoZWNrYm94IG5hbWU9XCJlbmFibGVfaG9uZXlwb3RcIiBpZD1cImVuYWJsZV9ob25leXBvdFwiIHYtbW9kZWw9XCJmb3JtLmVuYWJsZV9ob25leXBvdFwiPkVuYWJsZSBIb25leXBvdDwvcC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1jaGVja2JveC1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9wLXRhYj5cblxuICAgICAgICAgICAgICAgICAgICA8cC10YWIga2V5PVwibm90aWZpY2F0aW9uc1wiIG5hbWU9XCJOb3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC10ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZW5kX3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbmQgbm90aWZpY2F0aW9ucyB0by4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkxpc3QgZW1haWxzIGFzIGEgY29tbWEgc2VwYXJhdGVkIGxpc3QuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1hcmllLmNAZXhhbXBsZS5jb20sIG5pa29sYS50QGV4YW1wbGUuY29tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdzZW5kX3RvJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdzZW5kX3RvJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnNlbmRfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvcC10ZXh0YXJlYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVwbHlfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVwbHkgdG8uLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJSZXBsaWVzIHRvIHRoZSBjb25maXJtYXRpb24gZW1haWwgd2lsbCBiZSBzZW50IHRvIHRoaXMgZS1tYWlsLiBCeSBkZWZhdWx0IHRoaXMgd2lsbCByZWZlcmVuY2UgdGhlIGRlZmF1bHQgZW1haWwgaW4gc3lzdGVtIHNldHRpbmdzLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdyZXBseV90bycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncmVwbHlfdG8nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucmVwbHlfdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPC9wLXRhYj5cblxuICAgICAgICAgICAgICAgICAgICA8cC10YWIga2V5PVwiY29uZmlybWF0aW9uc1wiIG5hbWU9XCJDb25maXJtYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1yYWRpby1ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWZ0ZXIgc3VibWl0dGluZyB0aGUgZm9ybS4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygncmVkaXJlY3Rfb25fc3VibWlzc2lvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncmVkaXJlY3Rfb25fc3VibWlzc2lvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1yYWRpbyBpZD1cInJlZGlyZWN0X29uX3N1Ym1pc3Npb25fZmFsc2VcIiB2LW1vZGVsPVwiZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCIgbmFtZT1cInJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIiA6bmF0aXZlLXZhbHVlPVwiZmFsc2VcIj5SZWRpcmVjdCB0byBkZWZhdWx0IGNvbmZpcm1hdGlvbiBwYWdlLi4uPC9wLXJhZGlvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtcmFkaW8gaWQ9XCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uX3RydWVcIiB2LW1vZGVsPVwiZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCIgbmFtZT1cInJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIiA6bmF0aXZlLXZhbHVlPVwidHJ1ZVwiPlJlZGlyZWN0IHRvIGN1c3RvbSBwYWdlLi4uPC9wLXJhZGlvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXJhZGlvLWdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJmb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb24gPT09IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybWF0aW9uX21lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoaXMgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgY29uZmlybWF0aW9uIHBhZ2UuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2NvbmZpcm1hdGlvbl9tZXNzYWdlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdjb25maXJtYXRpb25fbWVzc2FnZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRoYW5rIHlvdSEgV2UnbGwgYmUgaW4gdG91Y2ggc29vbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmNvbmZpcm1hdGlvbl9tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImZvcm0ucmVkaXJlY3Rfb25fc3VibWlzc2lvbiA9PT0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlZGlyZWN0X3VybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUaGUgVVJMIHRvIHJlZGlyZWN0IHVzZXJzIHRvIGFmdGVyIHN1Ym1pdHRpbmcgdGhlIGZvcm0uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3JlZGlyZWN0X3VybCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncmVkaXJlY3RfdXJsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnJlZGlyZWN0X3VybFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICA8L3AtdGFiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLXRhYiBrZXk9XCJ0ZW1wbGF0ZXNcIiBuYW1lPVwiVGVtcGxhdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmb3JtX3RlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZvcm0gVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHRlbXBsYXRlIGlzIHJlc3BvbnNpYmxlIGZvciByZW5kZXJpbmcgdGhpcyBmb3JtP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnZm9ybV90ZW1wbGF0ZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnZm9ybV90ZW1wbGF0ZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5mb3JtX3RlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRoYW5reW91X3RlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRoYW5rIFlvdSBUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIldoYXQgdGVtcGxhdGUgaXMgcmVwb25zaWJsZSBmb3IgdGhhbmtpbmcgcmVzcG9uZGVudHM/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCd0aGFua3lvdV90ZW1wbGF0ZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgndGhhbmt5b3VfdGVtcGxhdGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0udGhhbmt5b3VfdGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPC9wLXRhYj5cblxuICAgICAgICAgICAgICAgICAgICA8cC10YWIga2V5PVwiZmllbGRzXCIgbmFtZT1cIkZpZWxkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24tYnVpbGRlciB2LW1vZGVsPVwiJHBhcmVudC5zZWN0aW9uc1wiPjwvc2VjdGlvbi1idWlsZGVyPlxuICAgICAgICAgICAgICAgICAgICA8L3AtdGFiPlxuICAgICAgICAgICAgICAgIDwvcC10YWJzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6c2lkZWJhcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtc2x1Z1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltaXRlcj1cIl9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOndhdGNoPVwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2hhbmRsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdoYW5kbGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5oYW5kbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9wLXNsdWc+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAtdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dHJ1ZS12YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3AtdG9nZ2xlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwLWRlZmluaXRpb24tbGlzdCB2LWlmPVwicmVzb3VyY2VcIj5cbiAgICAgICAgICAgICAgICA8cC1kZWZpbml0aW9uIG5hbWU9XCJTdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdjaXJjbGUnXVwiIGNsYXNzPVwiZmEtZncgdGV4dC14c1wiIDpjbGFzcz1cInsndGV4dC1zdWNjZXNzLTUwMCc6IHJlc291cmNlLnN0YXR1cywgJ3RleHQtZGFuZ2VyLTUwMCc6ICEgcmVzb3VyY2Uuc3RhdHVzfVwiPjwvZmEtaWNvbj4ge3sgcmVzb3VyY2Uuc3RhdHVzID8gJ0VuYWJsZWQnIDogJ0Rpc2FibGVkJyB9fVxuICAgICAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHAtZGVmaW5pdGlvbiBuYW1lPVwiQ3JlYXRlZCBBdFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyAkbW9tZW50KHJlc291cmNlLmNyZWF0ZWRfYXQpLmZvcm1hdCgnWS1NTS1ERCwgaGg6bW0gYScpIH19XG4gICAgICAgICAgICAgICAgPC9wLWRlZmluaXRpb24+XG5cbiAgICAgICAgICAgICAgICA8cC1kZWZpbml0aW9uIG5hbWU9XCJVcGRhdGVkIEF0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ICRtb21lbnQocmVzb3VyY2UudXBkYXRlZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgfX1cbiAgICAgICAgICAgICAgICA8L3AtZGVmaW5pdGlvbj5cbiAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uLWxpc3Q+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9mb3JtLWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZWFkeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmllbGR0eXBlOiB7fSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICdmb3JtLmNvbGxlY3RfZW1haWxfYWRkcmVzc2VzJzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVzcG9uc2VfcmVjZWlwdCA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSWRlbnRpZmlhYmxlRW1haWxGaWVsZCgpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZElkZW50aWZpYWJsZUVtYWlsRmllbGQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBhZGRJZGVudGlmaWFibGVFbWFpbEZpZWxkKCkge1xuICAgICAgICAgICAgICAgIGxldCBzZWN0aW9uID0gdGhpcy5mb3JtLmZpZWxkc2V0LnNlY3Rpb25zWzBdLmhhbmRsZVxuXG4gICAgICAgICAgICAgICAgdGhpcy4kYnVzLiRlbWl0KCdhZGQtZmllbGQtJyArIHNlY3Rpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGR0eXBlOiB0aGlzLmZpZWxkdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0UtbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogJ2lkZW50aWZpYWJsZV9lbWFpbF9hZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVtb3ZlSWRlbnRpZmlhYmxlRW1haWxGaWVsZCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VjdGlvbiA9IHRoaXMuZm9ybS5maWVsZHNldC5zZWN0aW9uc1swXS5oYW5kbGVcblxuICAgICAgICAgICAgICAgIHRoaXMuJGJ1cy4kZW1pdCgncmVtb3ZlLWZpZWxkLScgKyBzZWN0aW9uLCAnaWRlbnRpZmlhYmxlX2VtYWlsX2FkZHJlc3MnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgYXhpb3MuYWxsKFtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvZmllbGR0eXBlcy9pbnB1dCcpLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoKGZpZWxkdHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGR0eXBlID0gZmllbGR0eXBlLmRhdGFcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybS1jb250YWluZXJcIixcbiAgICB7XG4gICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJzaWRlYmFyXCIsXG4gICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicC1zbHVnXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJoYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyOiBcIl9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImhhbmRsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiaGFuZGxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiaGFuZGxlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInAtdG9nZ2xlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlLXZhbHVlXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlLXZhbHVlXCI6IDBcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdGF0dXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnJlc291cmNlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJwLWRlZmluaXRpb24tbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtZGVmaW5pdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcIlN0YXR1c1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyB0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1zdWNjZXNzLTUwMFwiOiBfdm0ucmVzb3VyY2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWRhbmdlci01MDBcIjogIV92bS5yZXNvdXJjZS5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNpcmNsZVwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVzb3VyY2Uuc3RhdHVzID8gXCJFbmFibGVkXCIgOiBcIkRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtZGVmaW5pdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQ3JlYXRlZCBBdFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KF92bS5yZXNvdXJjZS5jcmVhdGVkX2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWS1NTS1ERCwgaGg6bW0gYVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1kZWZpbml0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJVcGRhdGVkIEF0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRtb21lbnQoX3ZtLnJlc291cmNlLnVwZGF0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZLU1NLURELCBoaDptbSBhXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdKVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLCBhdHRyczogeyB0bzogeyBuYW1lOiBcImZvcm1zXCIgfSB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICBjbGFzczogeyBcImJ1dHRvbi0tZGlzYWJsZWRcIjogIV92bS5mb3JtLmhhc0NoYW5nZXMgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogIV92bS5mb3JtLmhhc0NoYW5nZXMgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRwYXJlbnQuc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInAtdGl0bGVcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICBhdXRvZm9jdXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInAtdGFic1wiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInAtdGFiXCIsXG4gICAgICAgICAgICAgICAgICB7IGtleTogXCJnZW5lcmFsXCIsIGF0dHJzOiB7IG5hbWU6IFwiR2VuZXJhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiR2l2ZSBhIHNob3J0IGRlc2NyaXB0aW9uIG9mIHdoYXQgdGhpcyBmb3JtIHdpbGwgY29sbGVjdC5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImRlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJkZXNjcmlwdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZGVzY3JpcHRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInAtdGFiXCIsXG4gICAgICAgICAgICAgICAgICB7IGtleTogXCJwcml2YWN5XCIsIGF0dHJzOiB7IG5hbWU6IFwiUHJpdmFjeVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJwLWNoZWNrYm94LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIsIGF0dHJzOiB7IGlubGluZTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29sbGVjdF9lbWFpbF9hZGRyZXNzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImNvbGxlY3RfZW1haWxfYWRkcmVzc2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY29sbGVjdF9lbWFpbF9hZGRyZXNzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sbGVjdF9lbWFpbF9hZGRyZXNzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb2xsZWN0X2VtYWlsX2FkZHJlc3Nlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29sbGVjdCBlbWFpbCBhZGRyZXNzZXNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNvbGxlY3RfaXBfYWRkcmVzc2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJjb2xsZWN0X2lwX2FkZHJlc3Nlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbGxlY3RfaXBfYWRkcmVzc2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjb2xsZWN0X2lwX2FkZHJlc3Nlc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNvbGxlY3RfaXBfYWRkcmVzc2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb2xsZWN0IElQIGFkZHJlc3Nlc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJwLWNoZWNrYm94LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiLW10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlc3BvbmRlbnRzIHdpbGwgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlaXIgc3VibWlzc2lvbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVzcG9uc2VfcmVjZWlwdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVzcG9uc2VfcmVjZWlwdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZm9ybS5jb2xsZWN0X2VtYWlsX2FkZHJlc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZXNwb25zZV9yZWNlaXB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyZXNwb25zZV9yZWNlaXB0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVzcG9uc2VfcmVjZWlwdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVzcG9uc2UgcmVjZWlwdHNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJwLXRhYlwiLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IFwic3BhbVwiLCBhdHRyczogeyBuYW1lOiBcIlNwYW1cIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicC1jaGVja2JveC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCZSBzdXJlIHRvIGVudGVyIHlvdXIgc2l0ZSBrZXkgYW5kIHNlY3JldCBrZXkgaW4gc2V0dGluZ3MuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVuYWJsZV9yZWNhcHRjaGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImVuYWJsZV9yZWNhcHRjaGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbmFibGVfcmVjYXB0Y2hhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbmFibGVfcmVjYXB0Y2hhXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW5hYmxlX3JlY2FwdGNoYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRW5hYmxlIEdvb2dsZSByZUNBUFRDSEFcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicC1jaGVja2JveC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBIGhvbmV5cG90IGlzIGEgZ3JlYXQgYW5kIG5hdGl2ZSBhbHRlcm5hdGl2ZSB0byBHb29nbGUgcmVDQVBUQ0hBLiBCb3RoIG9wdGlvbnMgY2FuIGJlIHNhZmVseSBlbmFibGVkIGF0IHRoZSBzYW1lIHRpbWUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVuYWJsZV9ob25leXBvdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZW5hYmxlX2hvbmV5cG90XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW5hYmxlX2hvbmV5cG90LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbmFibGVfaG9uZXlwb3RcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbmFibGVfaG9uZXlwb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVuYWJsZSBIb25leXBvdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInAtdGFiXCIsXG4gICAgICAgICAgICAgICAgICB7IGtleTogXCJub3RpZmljYXRpb25zXCIsIGF0dHJzOiB7IG5hbWU6IFwiTm90aWZpY2F0aW9uc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwLXRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzZW5kX3RvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTZW5kIG5vdGlmaWNhdGlvbnMgdG8uLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiTGlzdCBlbWFpbHMgYXMgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdC5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmllLmNAZXhhbXBsZS5jb20sIG5pa29sYS50QGV4YW1wbGUuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwic2VuZF90b1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwic2VuZF90b1wiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zZW5kX3RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzZW5kX3RvXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2VuZF90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZXBseV90b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUmVwbHkgdG8uLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmVwbGllcyB0byB0aGUgY29uZmlybWF0aW9uIGVtYWlsIHdpbGwgYmUgc2VudCB0byB0aGlzIGUtbWFpbC4gQnkgZGVmYXVsdCB0aGlzIHdpbGwgcmVmZXJlbmNlIHRoZSBkZWZhdWx0IGVtYWlsIGluIHN5c3RlbSBzZXR0aW5ncy5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJyZXBseV90b1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwicmVwbHlfdG9cIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucmVwbHlfdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJlcGx5X3RvXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVwbHlfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJwLXRhYlwiLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IFwiY29uZmlybWF0aW9uc1wiLCBhdHRyczogeyBuYW1lOiBcIkNvbmZpcm1hdGlvbnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicC1yYWRpby1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQWZ0ZXIgc3VibWl0dGluZyB0aGUgZm9ybS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVkaXJlY3Rfb25fc3VibWlzc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVkaXJlY3Rfb25fc3VibWlzc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtcmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uX2ZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmF0aXZlLXZhbHVlXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVkaXJlY3Rfb25fc3VibWlzc2lvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlZGlyZWN0IHRvIGRlZmF1bHQgY29uZmlybWF0aW9uIHBhZ2UuLi5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtcmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJyZWRpcmVjdF9vbl9zdWJtaXNzaW9uX3RydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVkaXJlY3Rfb25fc3VibWlzc2lvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZGlyZWN0X29uX3N1Ym1pc3Npb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZWRpcmVjdCB0byBjdXN0b20gcGFnZS4uLlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0ucmVkaXJlY3Rfb25fc3VibWlzc2lvbiA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjb25maXJtYXRpb25fbWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGlzIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgb24gdGhlIGNvbmZpcm1hdGlvbiBwYWdlLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25maXJtYXRpb25fbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZmlybWF0aW9uX21lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiVGhhbmsgeW91ISBXZSdsbCBiZSBpbiB0b3VjaCBzb29uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbmZpcm1hdGlvbl9tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImNvbmZpcm1hdGlvbl9tZXNzYWdlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb25maXJtYXRpb25fbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0ucmVkaXJlY3Rfb25fc3VibWlzc2lvbiA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlZGlyZWN0X3VybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlVSTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSBVUkwgdG8gcmVkaXJlY3QgdXNlcnMgdG8gYWZ0ZXIgc3VibWl0dGluZyB0aGUgZm9ybS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInJlZGlyZWN0X3VybFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInJlZGlyZWN0X3VybFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZWRpcmVjdF91cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicmVkaXJlY3RfdXJsXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yZWRpcmVjdF91cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJwLXRhYlwiLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IFwidGVtcGxhdGVzXCIsIGF0dHJzOiB7IG5hbWU6IFwiVGVtcGxhdGVzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZvcm1fdGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkZvcm0gVGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiV2hhdCB0ZW1wbGF0ZSBpcyByZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIHRoaXMgZm9ybT9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZm9ybV90ZW1wbGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiZm9ybV90ZW1wbGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5mb3JtX3RlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJmb3JtX3RlbXBsYXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZm9ybV90ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0aGFua3lvdV90ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVGhhbmsgWW91IFRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIldoYXQgdGVtcGxhdGUgaXMgcmVwb25zaWJsZSBmb3IgdGhhbmtpbmcgcmVzcG9uZGVudHM/XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInRoYW5reW91X3RlbXBsYXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhhbmt5b3VfdGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50aGFua3lvdV90ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidGhhbmt5b3VfdGVtcGxhdGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50aGFua3lvdV90ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInAtdGFiXCIsXG4gICAgICAgICAgICAgICAgICB7IGtleTogXCJmaWVsZHNcIiwgYXR0cnM6IHsgbmFtZTogXCJGaWVsZHNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic2VjdGlvbi1idWlsZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kcGFyZW50LnNlY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uJHBhcmVudCwgXCJzZWN0aW9uc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIkcGFyZW50LnNlY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YzRmMWQzMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRjNGYxZDMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRjNGYxZDMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRjNGYxZDMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YzRmMWQzMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YzRmMWQzMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL0Zvcm1zL1NoYXJlZEZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YzRmMWQzMCZcIiJdLCJzb3VyY2VSb290IjoiIn0=