(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[7002],{7002:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,getForm:()=>s});var o=r(6072);function s(e,t){axios.get("/api/forms/"+e).then((function(e){t(null,e.data.data)})).catch((function(e){t(new Error("The requested form could not be found"))}))}const a={auth:function(){return{permission:"forms.update"}},head:{title:function(){return{inner:_.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{id:null,resource:null,form:null}},components:{"shared-form":r(2160).Z},methods:{submit:function(){var e=this;this.form.patch("/api/forms/".concat(this.id)).then((function(){axios.post("/api/blueprints/".concat(e.resource.blueprint.id,"/sections"),{sections:e.form.sections}).then((function(){toast("Form successfully saved","success")}))})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,t,r){s(e.params.form,(function(e,t){r(e?function(t){t.$router.push("/forms"),toast(e.toString(),"danger")}:function(e){e.id=t.id,e.resource=t,e.form=new o.Z({name:t.name,handle:t.handle,description:t.description,sections:t.blueprint.sections,collect_email_addresses:t.collect_email_addresses,collect_ip_addresses:t.collect_ip_addresses,response_receipt:t.response_receipt,confirmation_message:t.confirmation_message,redirect_on_submission:t.redirect_on_submission,redirect_url:t.redirect_url,enable_recaptcha:t.enable_recaptcha,enable_honeypot:t.enable_honeypot,send_to:t.send_to,reply_to:t.reply_to,form_template:t.form_template,thankyou_template:t.thankyou_template,status:t.status},!0),e.$nextTick((function(){e.$emit("updateHead")}))})}))}};const i=(0,r(1900).Z)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("portal",{attrs:{to:"title"}},[r("page-title",{attrs:{icon:"paper-plane"}},[e._v("Edit Form")])],1),e._v(" "),e.form?r("shared-form",{attrs:{form:e.form,resource:e.resource}}):e._e()],1)}),[],!1,null,null,null).exports},2160:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const o={data:function(){return{ready:!1,fieldtype:{},placements:[{label:"Body",value:"body"},{label:"Sidebar",value:"sidebar"}]}},props:{form:{type:Object,required:!0},resource:{type:Object,required:!1,default:function(){}}},watch:{"form.collect_email_addresses":function(e){this.ready&&(!1===e?(this.form.response_receipt=!1,this.removeIdentifiableEmailField()):this.addIdentifiableEmailField())},"form.sections":{deep:!0,handler:function(e){this.form.collect_email_addresses=this.hasIdentifiableEmailField}}},computed:{hasIdentifiableEmailField:function(){return-1!=_.findIndex(this.form.sections[0].fields,(function(e){return e.settings.identifiable}))}},methods:{addIdentifiableEmailField:function(){bus().$emit("add-field-".concat(this.form.sections[0].handle),{type:this.fieldtype,settings:{identifiable:!0}})},removeIdentifiableEmailField:function(){bus().$emit("remove-field-".concat(this.form.sections[0].handle),"settings.identifiable",!0)}},created:function(){var e=this;axios.all([axios.get("/api/fieldtypes/email")]).then(axios.spread((function(t){e.fieldtype=t.data,e.ready=!0})))}};const s=(0,r(1900).Z)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[r("ui-card",[r("ui-card-body",[r("ui-slug-group",{attrs:{name:"form-handle",label:"Handle",autocomplete:"off",monospaced:"",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}}),e._v(" "),r("ui-toggle",{attrs:{name:"status",label:"Status","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1),e._v(" "),e.resource?r("ui-definition-list",[r("ui-definition",{attrs:{name:"Status"}},[r("fa-icon",{staticClass:"fa-fw text-xs",class:{"text-success-500":e.resource.status,"text-danger-500":!e.resource.status},attrs:{icon:["fas","circle"]}}),e._v(" "+e._s(e.resource.status?"Enabled":"Disabled")+"\n            ")],1),e._v(" "),r("ui-definition",{attrs:{name:"Created At"}},[e._v("\n                "+e._s(e.$moment(e.resource.created_at).format("Y-MM-DD, hh:mm a"))+"\n            ")]),e._v(" "),r("ui-definition",{attrs:{name:"Updated At"}},[e._v("\n                "+e._s(e.$moment(e.resource.updated_at).format("Y-MM-DD, hh:mm a"))+"\n            ")])],1):e._e()]},proxy:!0}])},[r("portal",{attrs:{to:"actions"}},[r("div",{staticClass:"buttons"},[r("ui-button",{attrs:{to:{name:"forms"},variant:"secondary"}},[e._v("Go Back")]),e._v(" "),r("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),r("section-card",{attrs:{title:"General Information",description:"General information about this form and what it collects."}},[r("ui-input-group",{attrs:{name:"name",label:"Name",help:"What should this form be called?",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("ui-textarea-group",{attrs:{name:"description",label:"Description",help:"Give a short description of what this form will collect.",autocomplete:"off","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),r("section-card",{attrs:{title:"Privacy",description:"Configure this forms privacy settings."}},[r("ui-fieldset",{attrs:{label:"Privacy Settings"}},[r("ui-checkbox-single",{attrs:{name:"collect_email_addresses",id:"collect_email_addresses"},model:{value:e.form.collect_email_addresses,callback:function(t){e.$set(e.form,"collect_email_addresses",t)},expression:"form.collect_email_addresses"}},[e._v("Collect email addresses")]),e._v(" "),r("ui-checkbox-single",{attrs:{name:"collect_ip_addresses",id:"collect_ip_addresses"},model:{value:e.form.collect_ip_addresses,callback:function(t){e.$set(e.form,"collect_ip_addresses",t)},expression:"form.collect_ip_addresses"}},[e._v("Collect IP addresses")]),e._v(" "),r("ui-checkbox-single",{attrs:{name:"response_receipt",id:"response_receipt",help:"Respondents will receive a copy of their submission.",disabled:!e.form.collect_email_addresses},model:{value:e.form.response_receipt,callback:function(t){e.$set(e.form,"response_receipt",t)},expression:"form.response_receipt"}},[e._v("Response receipts")])],1)],1),e._v(" "),r("section-card",{attrs:{title:"Spam",description:"Configure this forms spam protection settings."}},[r("ui-fieldset",{attrs:{label:"Spam Settings"}},[r("ui-checkbox-single",{attrs:{name:"enable_recaptcha",id:"enable_recaptcha",help:"Be sure to enter your site key and secret key in settings."},model:{value:e.form.enable_recaptcha,callback:function(t){e.$set(e.form,"enable_recaptcha",t)},expression:"form.enable_recaptcha"}},[e._v("Enable Google reCAPTCHA")]),e._v(" "),r("ui-checkbox-single",{attrs:{name:"enable_honeypot",id:"enable_honeypot",help:"A honeypot is a great and native alternative to Google reCAPTCHA. Both options can be safely enabled at the same time."},model:{value:e.form.enable_honeypot,callback:function(t){e.$set(e.form,"enable_honeypot",t)},expression:"form.enable_honeypot"}},[e._v("Enable Honeypot")])],1)],1),e._v(" "),r("section-card",{attrs:{title:"Notifications",description:"Configure who should receive notifications when submissions are made."}},[r("ui-textarea-group",{attrs:{name:"send_to",label:"Send notifications to...",help:"List emails as a comma separated list.",placeholder:"marie.c@example.com, nikola.t@example.com","has-error":e.form.errors.has("send_to"),"error-message":e.form.errors.get("send_to")},model:{value:e.form.send_to,callback:function(t){e.$set(e.form,"send_to",t)},expression:"form.send_to"}}),e._v(" "),r("ui-input-group",{attrs:{name:"reply_to",label:"Reply to...",help:"Replies to the confirmation email will be sent to this e-mail. By default this will reference the default email in system settings.",autocomplete:"off","has-error":e.form.errors.has("reply_to"),"error-message":e.form.errors.get("reply_to")},model:{value:e.form.reply_to,callback:function(t){e.$set(e.form,"reply_to",t)},expression:"form.reply_to"}})],1),e._v(" "),r("section-card",{attrs:{title:"Confirmations",description:"Configure confirmation settings when submissions are made."}},[r("ui-radio-group",{attrs:{inline:"",label:"After submitting the form...","has-error":e.form.errors.has("redirect_on_submission"),"error-message":e.form.errors.get("redirect_on_submission")}},[r("ui-radio",{attrs:{id:"redirect_on_submission_false",name:"redirect_on_submission","native-value":!1},model:{value:e.form.redirect_on_submission,callback:function(t){e.$set(e.form,"redirect_on_submission",t)},expression:"form.redirect_on_submission"}},[e._v("Redirect to default confirmation page...")]),e._v(" "),r("ui-radio",{attrs:{id:"redirect_on_submission_true",name:"redirect_on_submission","native-value":!0},model:{value:e.form.redirect_on_submission,callback:function(t){e.$set(e.form,"redirect_on_submission",t)},expression:"form.redirect_on_submission"}},[e._v("Redirect to custom page...")])],1),e._v(" "),!1===e.form.redirect_on_submission?r("ui-input-group",{attrs:{name:"confirmation_message",label:"Message",help:"This message will be displayed on the confirmation page.",autocomplete:"off","has-error":e.form.errors.has("confirmation_message"),"error-message":e.form.errors.get("confirmation_message"),placeholder:"Thank you! We'll be in touch soon."},model:{value:e.form.confirmation_message,callback:function(t){e.$set(e.form,"confirmation_message",t)},expression:"form.confirmation_message"}}):e._e(),e._v(" "),!0===e.form.redirect_on_submission?r("ui-input-group",{attrs:{name:"redirect_url",label:"URL",help:"The URL to redirect users to after submitting the form.",autocomplete:"off","has-error":e.form.errors.has("redirect_url"),"error-message":e.form.errors.get("redirect_url")},model:{value:e.form.redirect_url,callback:function(t){e.$set(e.form,"redirect_url",t)},expression:"form.redirect_url"}}):e._e()],1),e._v(" "),r("section-card",{attrs:{title:"Templates",description:"Configure this forms template settings."}},[r("ui-input-group",{attrs:{name:"form_template",label:"Form Template",help:"What template is responsible for rendering this form?",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("form_template"),"error-message":e.form.errors.get("form_template")},model:{value:e.form.form_template,callback:function(t){e.$set(e.form,"form_template",t)},expression:"form.form_template"}}),e._v(" "),r("ui-input-group",{attrs:{name:"thankyou_template",label:"Thank You Template",help:"What template is reponsible for thanking respondents?",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("thankyou_template"),"error-message":e.form.errors.get("thankyou_template")},model:{value:e.form.thankyou_template,callback:function(t){e.$set(e.form,"thankyou_template",t)},expression:"form.thankyou_template"}})],1),e._v(" "),r("section-card",{attrs:{id:"form_panel_blueprint",grid:!1,title:"Blueprint",description:"Create the content blueprint for this form by adding panel sections and fields to either the page body or page sidebar.",tabindex:"-1"}},[r("blueprint",[r("blueprint-area",{attrs:{structure:"forms",placements:e.placements,area:"body",title:"Body"},model:{value:e.form.sections,callback:function(t){e.$set(e.form,"sections",t)},expression:"form.sections"}}),e._v(" "),r("blueprint-area",{staticClass:"blueprint__col--sidebar",attrs:{structure:"forms",placements:e.placements,area:"sidebar",title:"Sidebar"},model:{value:e.form.sections,callback:function(t){e.$set(e.form,"sections",t)},expression:"form.sections"}})],1)],1)],1)}),[],!1,null,null,null).exports}}]);