(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+oIg":function(e,a,t){"use strict";t.r(a),t.d(a,"getTaxonomies",(function(){return s}));var o=t("nUVr"),r=t("g6NE");function s(e,a){axios.all([axios.get("/api/taxonomies/".concat(e))]).then(axios.spread((function(e){a(null,e)}))).catch((function(e){a(new Error("The requested taxonomy could not be found"))}))}var i={head:{title:function(){return{inner:_.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{taxonomy:{},form:null}},components:{"shared-form":t("NsYN").a},methods:{submit:function(){var e=this;this.form.patch("/api/taxonomies/".concat(this.taxonomy.id)).then((function(a){r.a.dispatch("navigation/fetchAdminNavigation"),toast("Taxonomy successfully updated","success"),e.$router.push("/taxonomies")})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,a,t){s(e.params.taxonomy,(function(e,a){t(e?function(a){toast(e.toString(),"danger"),a.$router.push("/taxonomies")}:function(e){e.taxonomy=a.data.data,e.form=new o.a({name:e.taxonomy.name,handle:e.taxonomy.handle,description:e.taxonomy.description,fieldset:e.taxonomy.fieldset&&e.taxonomy.fieldset.id?e.taxonomy.fieldset.id:null,sidebar:e.taxonomy.sidebar?"1":"0",icon:e.taxonomy.icon,route:e.taxonomy.route,template:e.taxonomy.template},!0),e.$nextTick((function(){e.$emit("updateHead"),e.form.resetChangeListener()}))})}))}},n=t("KHd+"),l=Object(n.a)(i,(function(){var e=this.$createElement,a=this._self._c||e;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"sitemap"}},[this._v("Edit Taxonomy")])],1),this._v(" "),this.form?a("shared-form",{attrs:{form:this.form,taxonomy:this.taxonomy,submit:this.submit}}):this._e()],1)}),[],!1,null,null,null);a.default=l.exports},NsYN:function(e,a,t){"use strict";t("dhqo");var o={props:{form:{type:Object,required:!0},taxonomy:{type:Object,required:!1},submit:{required:!0}}},r=t("KHd+"),s=Object(r.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[t("div",{staticClass:"card"},[t("div",{staticClass:"card__body"},[t("p-slug",{attrs:{name:"handle",label:"Handle",monospaced:"",autocomplete:"off",required:"",watch:e.form.name,delimiter:"_","has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(a){e.$set(e.form,"handle",a)},expression:"form.handle"}})],1)]),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card__body"},[t("icon-picker",{attrs:{name:"icon",label:"Icon",placeholder:"Search icons...",help:"Choose an icon that best represents your taxonomy.","has-error":e.form.errors.has("icon"),"error-message":e.form.errors.get("icon"),required:""},model:{value:e.form.icon,callback:function(a){e.$set(e.form,"icon",a)},expression:"form.icon"}}),e._v(" "),t("p-toggle",{attrs:{name:"sidebar",label:"Show in Sidebar","true-value":1,"false-value":0},model:{value:e.form.sidebar,callback:function(a){e.$set(e.form,"sidebar",a)},expression:"form.sidebar"}})],1)]),e._v(" "),e.taxonomy?t("p-definition-list",[t("p-definition",{attrs:{name:"Created At"}},[e._v("\n                "+e._s(e.$moment(e.taxonomy.created_at).format("Y-MM-DD, hh:mm a"))+"\n            ")]),e._v(" "),t("p-definition",{attrs:{name:"Updated At"}},[e._v("\n                "+e._s(e.$moment(e.taxonomy.updated_at).format("Y-MM-DD, hh:mm a"))+"\n            ")])],1):e._e()]},proxy:!0}])},[t("portal",{attrs:{to:"actions"}},[t("div",{staticClass:"buttons"},[t("router-link",{staticClass:"button",attrs:{to:{name:"taxonomies"}}},[e._v("Go Back")]),e._v(" "),t("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(a){return a.preventDefault(),e.submit(a)}}},[e._v("Save")])],1)]),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card__body"},[t("p-title",{attrs:{name:"name",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}}),e._v(" "),t("p-input",{attrs:{name:"description",label:"Description",help:"Give a short description of what this taxonomy will organize and store.",autocomplete:"off",required:"","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(a){e.$set(e.form,"description",a)},expression:"form.description"}}),e._v(" "),t("p-tabs",[t("p-tab",{attrs:{name:"General"}},[t("field-set",{attrs:{"has-error":e.form.errors.has("fieldset"),"error-message":e.form.errors.get("fieldset")},model:{value:e.form.fieldset,callback:function(a){e.$set(e.form,"fieldset",a)},expression:"form.fieldset"}})],1),e._v(" "),t("p-tab",{attrs:{name:"Route"}},[t("p-input",{attrs:{name:"route",label:"Route",help:"When the URI matches this pattern...",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("route"),"error-message":e.form.errors.get("route")},model:{value:e.form.route,callback:function(a){e.$set(e.form,"route",a)},expression:"form.route"}}),e._v(" "),t("p-input",{attrs:{name:"template",label:"Template",help:"Render this template",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("template"),"error-message":e.form.errors.get("template")},model:{value:e.form.template,callback:function(a){e.$set(e.form,"template",a)},expression:"form.template"}})],1)],1)],1)])],1)}),[],!1,null,null,null);a.a=s.exports},dhqo:function(e,a,t){e.exports=function(){var e=[],a=[],t={},o={},r={};function s(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function i(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function n(e,a){return e.replace(/\$(\d{1,2})/g,(function(e,t){return a[t]||""}))}function l(e,a){return e.replace(a[0],(function(t,o){var r=n(a[1],arguments);return i(""===t?e[o-1]:t,r)}))}function u(e,a,o){if(!e.length||t.hasOwnProperty(e))return a;for(var r=o.length;r--;){var s=o[r];if(s[0].test(a))return l(a,s)}return a}function m(e,a,t){return function(o){var r=o.toLowerCase();return a.hasOwnProperty(r)?i(o,r):e.hasOwnProperty(r)?i(o,e[r]):u(r,o,t)}}function c(e,a,t,o){return function(o){var r=o.toLowerCase();return!!a.hasOwnProperty(r)||!e.hasOwnProperty(r)&&u(r,r,t)===r}}function d(e,a,t){return(t?a+" ":"")+(1===a?d.singular(e):d.plural(e))}return d.plural=m(r,o,e),d.isPlural=c(r,o,e),d.singular=m(o,r,a),d.isSingular=c(o,r,a),d.addPluralRule=function(a,t){e.push([s(a),t])},d.addSingularRule=function(e,t){a.push([s(e),t])},d.addUncountableRule=function(e){"string"!=typeof e?(d.addPluralRule(e,"$0"),d.addSingularRule(e,"$0")):t[e.toLowerCase()]=!0},d.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),r[e]=a,o[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return d.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return d.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return d.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(d.addUncountableRule),d}()}}]);