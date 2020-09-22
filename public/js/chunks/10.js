(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8XfE":function(e,r,a){"use strict";var t=a("dhqo"),o=a.n(t),i={props:{id:{type:Number,required:!1,default:0},form:{type:Object,required:!0},matrix:{type:Object,required:!1},submit:{required:!0},matrices:{required:!0}},computed:{singularReference:function(){return o.a.singular(this.form.name)},pluralReference:function(){return o()(this.form.name)},parentOptions:function(){var e=this,r=_.map(this.matrices,(function(e){return{label:e.name,value:e.id}}));return(r=_.remove(r,(function(r){return e.id==r.id}))).unshift({label:"None",value:null}),r}},watch:{"$parent.form.type":function(e){"single"==e&&(this.$parent.form.show_name_field=!0)}}},s=a("KHd+"),n=Object(s.a)(i,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"matrix-page"},[a("portal",{attrs:{to:"actions"}},[a("div",{staticClass:"buttons"},[a("ui-button",{attrs:{to:{name:"matrices"},variant:"secondary"}},[e._v("Go Back")]),e._v(" "),a("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!e.form.hasChanges},on:{click:function(r){return r.preventDefault(),e.submit(r)}}},[e._v("Save")])],1)]),e._v(" "),a("section-card",{attrs:{title:"General Information",description:"General information about your collection and what it manages."}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full lg:w-1/2"},[a("ui-input-group",{attrs:{id:"matrix-name",name:"name",label:"Name",help:"What should this matrix be called?",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"col w-full lg:w-1/2"},[a("ui-slug-group",{attrs:{id:"matrix-handle",name:"handle",label:"Handle",help:"A developer-friendly identifier.",monospaced:"",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(r){e.$set(e.form,"handle",r)},expression:"form.handle"}})],1)]),e._v(" "),a("ui-textarea-group",{attrs:{id:"matrix-description",name:"description",label:"Description",help:"Give a short description of what this matrix will manage and store.",autocomplete:"off","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(r){e.$set(e.form,"description",r)},expression:"form.description"}}),e._v(" "),a("ui-select-group",{attrs:{id:"matrix-type",name:"type",label:"Type",help:"What type of matrix will this be?",options:[{label:"Collection",value:"collection"},{label:"Single",value:"single"}],"has-error":e.form.errors.has("type"),"error-message":e.form.errors.get("type")},model:{value:e.form.type,callback:function(r){e.$set(e.form,"type",r)},expression:"form.type"}}),e._v(" "),a("ui-select-group",{attrs:{id:"matrix-parent-id",name:"parent_id",label:"Parent Matrix",help:"Should this matrix belong to another?",options:e.parentOptions,"has-error":e.form.errors.has("parent_id"),"error-message":e.form.errors.get("parent_id")},model:{value:e.form.parent_id,callback:function(r){e.$set(e.form,"parent_id",r)},expression:"form.parent_id"}}),e._v(" "),a("ui-toggle",{attrs:{id:"matrix-status",name:"status",label:"Status",help:e.form.status?"Toggle to disable this matrix.":"Toggle to enable this matrix.","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(r){e.$set(e.form,"status",r)},expression:"form.status"}})],1),e._v(" "),a("section-card",{attrs:{title:"Customizations",description:"Configure the various customizations options."}},[a("ui-input-group",{attrs:{id:"matrix-name-label",name:"name_label",label:"Name Label",placeholder:"Name",help:"If you'd like, you may customize the label used for your entry names.","has-error":e.form.errors.has("name_label"),"error-message":e.form.errors.get("name_label")},model:{value:e.form.name_label,callback:function(r){e.$set(e.form,"name_label",r)},expression:"form.name_label"}}),e._v(" "),a("ui-input-group",{attrs:{id:"matrix-reference-singular",name:"reference_singular",label:"Singular Reference",placeholder:e.singularReference,help:"What would you like to reference this as in singular form? By default will try to guess from the name. Results may vary.","has-error":e.form.errors.has("reference_singular"),"error-message":e.form.errors.get("reference_singular")},model:{value:e.form.reference_singular,callback:function(r){e.$set(e.form,"reference_singular",r)},expression:"form.reference_singular"}}),e._v(" "),a("ui-input-group",{attrs:{id:"matrix-reference-plural",name:"reference_plural",label:"Plural Reference",placeholder:e.pluralReference,help:"What would you like to reference this as in plural form? By default will try to guess from the name. Results may vary.","has-error":e.form.errors.has("reference_plural"),"error-message":e.form.errors.get("reference_plural")},model:{value:e.form.reference_plural,callback:function(r){e.$set(e.form,"reference_plural",r)},expression:"form.reference_plural"}}),e._v(" "),"collection"==e.form.type?a("ui-toggle",{attrs:{id:"matrix-show-name-field",name:"show_name_field",label:"Show name field",help:e.form.show_name_field?"Include a name field on this matrix.":"Auto-generate a name using the format in the field below.","true-value":1,"false-value":0},model:{value:e.form.show_name_field,callback:function(r){e.$set(e.form,"show_name_field",r)},expression:"form.show_name_field"}}):e._e(),e._v(" "),e.form.show_name_field?e._e():a("ui-input-group",{attrs:{monospaced:"",id:"matrix-name-format",name:"name_format",label:"Name Format",help:"What format would you like your generated names and slugs to follow?","has-error":e.form.errors.has("name_format"),"error-message":e.form.errors.get("name_format")},model:{value:e.form.name_format,callback:function(r){e.$set(e.form,"name_format",r)},expression:"form.name_format"}})],1),e._v(" "),a("section-card",{attrs:{title:"Appearance",description:"Choose where to show this matrix and how to represent it."}},[a("icon-picker",{attrs:{id:"matrix-icon",name:"icon",label:"Icon",placeholder:"Search icons...",help:"Choose an icon that best represents your matrix.","has-error":e.form.errors.has("icon"),"error-message":e.form.errors.get("icon"),required:""},model:{value:e.form.icon,callback:function(r){e.$set(e.form,"icon",r)},expression:"form.icon"}}),e._v(" "),a("ui-toggle",{attrs:{id:"matrix-sidebar",name:"sidebar",label:"Show in Sidebar","true-value":1,"false-value":0},model:{value:e.form.sidebar,callback:function(r){e.$set(e.form,"sidebar",r)},expression:"form.sidebar"}}),e._v(" "),a("ui-toggle",{attrs:{id:"matrix-quicklink",name:"quicklink",label:"Show as Quicklink","true-value":1,"false-value":0},model:{value:e.form.quicklink,callback:function(r){e.$set(e.form,"quicklink",r)},expression:"form.quicklink"}})],1),e._v(" "),a("section-card",{attrs:{title:"Routing",description:"Configure how entries within the collection will be accessed on the frontend."}},[a("ui-input-group",{attrs:{id:"matrix-route",name:"route",label:"Route",help:"When the URI matches this pattern...",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("route"),"error-message":e.form.errors.get("route")},model:{value:e.form.route,callback:function(r){e.$set(e.form,"route",r)},expression:"form.route"}}),e._v(" "),a("ui-input-group",{attrs:{id:"matrix-template",name:"template",label:"Template",help:"Render this template",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("template"),"error-message":e.form.errors.get("template")},model:{value:e.form.template,callback:function(r){e.$set(e.form,"template",r)},expression:"form.template"}})],1),e._v(" "),a("section-card",{attrs:{title:"Blueprint",description:"Configure this matrix' blueprint."}},[a("section-builder",{model:{value:e.form.sections,callback:function(r){e.$set(e.form,"sections",r)},expression:"form.sections"}})],1)],1)}),[],!1,null,null,null);r.a=n.exports},"928V":function(e,r,a){"use strict";a.r(r);var t=a("dhqo"),o=a.n(t),i=a("g6NE"),s=a("nUVr"),n={head:{title:function(){return{inner:"Create a Matrix"}}},data:function(){return{matrices:[],form:new s.a({name:"",parent_id:0,handle:"",description:"",type:"collection",reference_singular:"",reference_plural:"",sections:[],sidebar:"1",quicklink:"1",icon:"",show_name_field:!0,name_label:"",name_format:"",route:"",template:"",categorizable:"1",creditable:"1",publishable:"1",revision_control:"1",seoable:"1",status:"1"},!0)}},components:{"shared-form":a("8XfE").a},methods:{submit:function(){var e=this;""==this.form.reference_singular&&(this.form.reference_singular=o.a.singular(this.form.name)),""==this.form.reference_plural&&(this.form.reference_plural=o()(this.form.name)),this.form.post("/api/matrices").then((function(r){axios.post("/api/blueprints/".concat(r.data.blueprint.id,"/sections"),{sections:e.form.sections}).then((function(r){i.a.dispatch("navigation/fetchAdminNavigation"),toast("Matrix successfully created","success"),e.$router.push("/matrices")})).catch((function(e){toast(e.message,"failed")}))})).catch((function(e){toast(e.message,"failed")}))}},beforeRouteEnter:function(e,r,a){axios.all([axios.get("/api/matrices")]).then(axios.spread((function(e){a((function(r){r.matrices=e.data.data}))})))}},l=a("KHd+"),u=Object(l.a)(n,(function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("portal",{attrs:{to:"title"}},[r("page-title",{attrs:{icon:"layer-group"}},[this._v("Create Matrix")])],1),this._v(" "),r("shared-form",{attrs:{form:this.form,submit:this.submit,matrices:this.matrices}})],1)}),[],!1,null,null,null);r.default=u.exports},dhqo:function(e,r,a){e.exports=function(){var e=[],r=[],a={},t={},o={};function i(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function s(e,r){return e===r?r:e===e.toLowerCase()?r.toLowerCase():e===e.toUpperCase()?r.toUpperCase():e[0]===e[0].toUpperCase()?r.charAt(0).toUpperCase()+r.substr(1).toLowerCase():r.toLowerCase()}function n(e,r){return e.replace(/\$(\d{1,2})/g,(function(e,a){return r[a]||""}))}function l(e,r){return e.replace(r[0],(function(a,t){var o=n(r[1],arguments);return s(""===a?e[t-1]:a,o)}))}function u(e,r,t){if(!e.length||a.hasOwnProperty(e))return r;for(var o=t.length;o--;){var i=t[o];if(i[0].test(r))return l(r,i)}return r}function m(e,r,a){return function(t){var o=t.toLowerCase();return r.hasOwnProperty(o)?s(t,o):e.hasOwnProperty(o)?s(t,e[o]):u(o,t,a)}}function c(e,r,a,t){return function(t){var o=t.toLowerCase();return!!r.hasOwnProperty(o)||!e.hasOwnProperty(o)&&u(o,o,a)===o}}function f(e,r,a){return(a?r+" ":"")+(1===r?f.singular(e):f.plural(e))}return f.plural=m(o,t,e),f.isPlural=c(o,t,e),f.singular=m(t,o,r),f.isSingular=c(t,o,r),f.addPluralRule=function(r,a){e.push([i(r),a])},f.addSingularRule=function(e,a){r.push([i(e),a])},f.addUncountableRule=function(e){"string"!=typeof e?(f.addPluralRule(e,"$0"),f.addSingularRule(e,"$0")):a[e.toLowerCase()]=!0},f.addIrregularRule=function(e,r){r=r.toLowerCase(),e=e.toLowerCase(),o[e]=r,t[r]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return f.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return f.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return f.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(f.addUncountableRule),f}()}}]);