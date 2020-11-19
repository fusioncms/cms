(self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || []).push([["resources_js_pages_Matrices_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getModels [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "getModels": () => /* binding */ getModels
/* harmony export */ });
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/pages/Matrices/SharedForm.vue");
/* harmony import */ var _services_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Form */ "./resources/js/services/Form.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
//
//
//
//
//
//
//
//
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
      permission: 'matrices.update'
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
      matrices: [],
      matrix: {},
      form: null
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.form.reference_singular == '') {
        this.form.reference_singular = pluralize__WEBPACK_IMPORTED_MODULE_2___default().singular(this.form.name);
      }

      if (this.form.reference_plural == '') {
        this.form.reference_plural = pluralize__WEBPACK_IMPORTED_MODULE_2___default()(this.form.name);
      }

      this.form.patch("/api/matrices/".concat(this.id)).then(function (response) {
        axios.post("/api/blueprints/".concat(response.data.blueprint.id, "/sections"), {
          sections: _this.form.sections
        }).then(function (response) {
          _store__WEBPACK_IMPORTED_MODULE_3__.default.dispatch('navigation/fetchAdminNavigation');
          toast('Matrix successfully updated', 'success');

          _this.$router.push('/matrices');
        })["catch"](function (response) {
          toast(response.message, 'failed');
        });
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getModels(to.params.matrix, function (error, matrix, matrices) {
      if (error) {
        next(function (vm) {
          toast(error.toString(), 'danger');
          vm.$router.push('/matrices');
        });
      } else {
        next(function (vm) {
          vm.id = matrix.data.data.id;
          vm.matrix = matrix.data.data;
          vm.matrices = matrices.data.data;
          vm.form = new _services_Form__WEBPACK_IMPORTED_MODULE_1__.default({
            parent_id: vm.matrix.parent_id,
            name: vm.matrix.name,
            handle: vm.matrix.handle,
            description: vm.matrix.description,
            type: vm.matrix.type,
            reference_singular: vm.matrix.reference_singular,
            reference_plural: vm.matrix.reference_plural,
            sections: vm.matrix.blueprint.sections,
            sidebar: vm.matrix.sidebar ? '1' : '0',
            quicklink: vm.matrix.quicklink ? '1' : '0',
            icon: vm.matrix.icon,
            show_name_field: vm.matrix.show_name_field,
            name_label: vm.matrix.name_label,
            name_format: vm.matrix.name_format,
            route: vm.matrix.route,
            template: vm.matrix.template,
            revision_control: vm.matrix.revision_control ? '1' : '0',
            categorizable: vm.matrix.categorizable ? '1' : '0',
            creditable: vm.matrix.creditable ? '1' : '0',
            publishable: vm.matrix.publishable ? '1' : '0',
            seoable: vm.matrix.seoable ? '1' : '0',
            status: vm.matrix.status ? '1' : '0'
          }, true);
          vm.$nextTick(function () {
            vm.$emit('updateHead');
          });
        });
      }
    });
  }
});
function getModels(maxtrix, callback) {
  axios.all([axios.get("/api/matrices/".concat(maxtrix)), axios.get('/api/matrices')]).then(axios.spread(function (matrix, matrices) {
    callback(null, matrix, matrices);
  }))["catch"](function (error) {
    callback(new Error('The requested maxtrix could not be found'));
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    id: {
      type: Number,
      required: false,
      "default": 0
    },
    form: {
      type: Object,
      required: true
    },
    matrix: {
      type: Object,
      required: false
    },
    submit: {
      required: true
    },
    matrices: {
      required: true
    }
  },
  computed: {
    singularReference: function singularReference() {
      return pluralize__WEBPACK_IMPORTED_MODULE_0___default().singular(this.form.name);
    },
    pluralReference: function pluralReference() {
      return pluralize__WEBPACK_IMPORTED_MODULE_0___default()(this.form.name);
    },
    parentOptions: function parentOptions() {
      var _this = this;

      var options = _.map(this.matrices, function (item) {
        return {
          'label': item.name,
          'value': item.id
        };
      });

      options = _.remove(options, function (item) {
        return _this.id == item.id;
      });
      options.unshift({
        'label': 'None',
        'value': null
      });
      return options;
    }
  },
  watch: {
    '$parent.form.type': function $parentFormType(value) {
      if (value == 'single') {
        this.$parent.form.show_name_field = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/pluralize/pluralize.js":
/*!*********************************************!*\
  !*** ./node_modules/pluralize/pluralize.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, top-level-this-exports */
/*! CommonJS bailout: this is used directly at 17:3-7 */
/*! CommonJS bailout: module.exports is used directly at 7:4-18 */
/***/ (function(module) {

/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if (true) {
    // Node.
    module.exports = pluralize();
  } else {}
})(this, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};

  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */
  function sanitizeRule (rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }

  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */
  function restoreCase (word, token) {
    // Tokens are an exact match.
    if (word === token) return token;

    // Lower cased words. E.g. "hello".
    if (word === word.toLowerCase()) return token.toLowerCase();

    // Upper cased words. E.g. "WHISKY".
    if (word === word.toUpperCase()) return token.toUpperCase();

    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
      return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
    }

    // Lower cased words. E.g. "test".
    return token.toLowerCase();
  }

  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */
  function interpolate (str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }

  /**
   * Replace a word using a rule.
   *
   * @param  {string} word
   * @param  {Array}  rule
   * @return {string}
   */
  function replace (word, rule) {
    return word.replace(rule[0], function (match, index) {
      var result = interpolate(rule[1], arguments);

      if (match === '') {
        return restoreCase(word[index - 1], result);
      }

      return restoreCase(match, result);
    });
  }

  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    rules
   * @return {string}
   */
  function sanitizeWord (token, word, rules) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = rules.length;

    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
      var rule = rules[len];

      if (rule[0].test(word)) return replace(word, rule);
    }

    return word;
  }

  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */
  function replaceWord (replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase();

      // Check against the keep object map.
      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      }

      // Check against the replacement map for a direct word replacement.
      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      }

      // Run all the rules against the word.
      return sanitizeWord(token, word, rules);
    };
  }

  /**
   * Check if a word is part of the map.
   */
  function checkWord (replaceMap, keepMap, rules, bool) {
    return function (word) {
      var token = word.toLowerCase();

      if (keepMap.hasOwnProperty(token)) return true;
      if (replaceMap.hasOwnProperty(token)) return false;

      return sanitizeWord(token, token, rules) === token;
    };
  }

  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {string}  word      The word to pluralize
   * @param  {number}  count     How many of the word exist
   * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
   * @return {string}
   */
  function pluralize (word, count, inclusive) {
    var pluralized = count === 1
      ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Check if a word is plural.
   *
   * @type {Function}
   */
  pluralize.isPlural = checkWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Check if a word is singular.
   *
   * @type {Function}
   */
  pluralize.isSingular = checkWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */
  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    }

    // Set singular and plural references for the word.
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };

  /**
   * Add an irregular word definition.
   *
   * @param {string} single
   * @param {string} plural
   */
  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();

    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };

  /**
   * Irregular rules.
   */
  [
    // Pronouns.
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['was', 'were'],
    ['has', 'have'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['looey', 'looies'],
    ['thief', 'thieves'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['passerby', 'passersby']
  ].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [
    [/s?$/i, 's'],
    [/[^\u0000-\u007F]$/i, '$0'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you']
  ].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/ies$/i, 'y'],
    [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
    [/\b(mon|smil)ies$/i, '$1ey'],
    [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, '$1'],
    [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, '$1sis'],
    [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
    [/(test)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man']
  ].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
    // Singular words with no plurals.
    'adulthood',
    'advice',
    'agenda',
    'aid',
    'aircraft',
    'alcohol',
    'ammo',
    'analytics',
    'anime',
    'athletics',
    'audio',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'cod',
    'commerce',
    'cooperation',
    'corps',
    'debris',
    'diabetes',
    'digestion',
    'elk',
    'energy',
    'equipment',
    'excretion',
    'expertise',
    'firmware',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'hardware',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'mail',
    'media',
    'mews',
    'moose',
    'music',
    'mud',
    'manga',
    'news',
    'only',
    'personnel',
    'pike',
    'plankton',
    'pliers',
    'police',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'software',
    'species',
    'staff',
    'swine',
    'tennis',
    'traffic',
    'transportation',
    'trout',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    /pok[eé]mon$/i,
    // Regexes.
    /[^aeiou]ese$/i, // "chinese", "japanese"
    /deer$/i, // "deer", "reindeer"
    /fish$/i, // "fish", "blowfish", "angelfish"
    /measles$/i,
    /o[iu]s$/i, // "carnivorous"
    /pox$/i, // "chickpox", "smallpox"
    /sheep$/i
  ].forEach(pluralize.addUncountableRule);

  return pluralize;
});


/***/ }),

/***/ "./resources/js/pages/Matrices/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Matrices/Edit.vue ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getModels [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js& .getModels */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getModels": () => /* reexport safe */ _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.getModels,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=45214386& */ "./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Matrices/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Matrices/SharedForm.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/Matrices/SharedForm.vue ***!
  \****************************************************/
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
/* harmony import */ var _SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=c50b5476& */ "./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__.render,
  _SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Matrices/SharedForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getModels [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js& .getModels */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "getModels": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.getModels
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/SharedForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386& ***!
  \*****************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_45214386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=45214386& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386&");


/***/ }),

/***/ "./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476& ***!
  \***********************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_c50b5476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharedForm.vue?vue&type=template&id=c50b5476& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/Edit.vue?vue&type=template&id=45214386& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "matrix-page" },
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("page-title", { attrs: { icon: "layer-group" } }, [
            _vm._v("Edit Matrix")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.form
        ? _c("shared-form", {
            attrs: {
              id: _vm.id,
              form: _vm.form,
              matrix: _vm.matrix,
              submit: _vm.submit,
              matrices: _vm.matrices
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Matrices/SharedForm.vue?vue&type=template&id=c50b5476& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "div",
          { staticClass: "buttons" },
          [
            _vm.$mq != "sm"
              ? _c(
                  "ui-button",
                  { attrs: { to: { name: "matrices" }, variant: "secondary" } },
                  [_vm._v("Go Back")]
                )
              : _vm._e(),
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
                    return _vm.submit($event)
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
        "portal",
        { attrs: { to: "sidebar-right" } },
        [
          _c(
            "sidebar",
            { attrs: { id: "matrix-sidebar" } },
            [
              _c(
                "sidebar-section",
                { attrs: { id: "matrix_panel_status", tabindex: "-1" } },
                [
                  _c("ui-toggle", {
                    attrs: {
                      id: "matrix-status",
                      name: "status",
                      label: "Status",
                      help: _vm.form.status
                        ? "Toggle to disable this matrix."
                        : "Toggle to enable this matrix.",
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
              ),
              _vm._v(" "),
              _c(
                "sidebar-section",
                {
                  attrs: {
                    id: "matrix_panel_appearance",
                    title: "Appearance",
                    description:
                      "Choose where to show this matrix and how to represent it.",
                    tabindex: "-1"
                  }
                },
                [
                  _c("ui-toggle", {
                    attrs: {
                      id: "matrix-sidebar-show",
                      name: "sidebar",
                      label: "Show in Sidebar",
                      "true-value": 1,
                      "false-value": 0
                    },
                    model: {
                      value: _vm.form.sidebar,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "sidebar", $$v)
                      },
                      expression: "form.sidebar"
                    }
                  }),
                  _vm._v(" "),
                  _c("ui-toggle", {
                    attrs: {
                      id: "matrix-quicklink-show",
                      name: "quicklink",
                      label: "Show as Quicklink",
                      "true-value": 1,
                      "false-value": 0
                    },
                    model: {
                      value: _vm.form.quicklink,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "quicklink", $$v)
                      },
                      expression: "form.quicklink"
                    }
                  }),
                  _vm._v(" "),
                  _c("icon-picker", {
                    attrs: {
                      id: "matrix-icon",
                      name: "icon",
                      label: "Icon",
                      placeholder: "Search icons...",
                      help: "Choose an icon that best represents your matrix.",
                      "has-error": _vm.form.errors.has("icon"),
                      "error-message": _vm.form.errors.get("icon"),
                      required: ""
                    },
                    model: {
                      value: _vm.form.icon,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "icon", $$v)
                      },
                      expression: "form.icon"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.matrix
                ? _c("status-card", {
                    attrs: {
                      entry: _vm.matrix,
                      id: "matrix_panel_status_card",
                      tabindex: "-1"
                    }
                  })
                : _vm._e()
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
            id: "matrix_panel_general",
            title: "General Information",
            description:
              "General information about your collection and what it manages.",
            tabindex: "-1"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col w-full lg:w-1/2" },
              [
                _c("ui-input-group", {
                  attrs: {
                    id: "matrix-name",
                    name: "name",
                    label: "Name",
                    help: "What should this matrix be called?",
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
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col w-full lg:w-1/2" },
              [
                _c("ui-slug-group", {
                  attrs: {
                    id: "matrix-handle",
                    name: "handle",
                    label: "Handle",
                    help: "A developer-friendly identifier.",
                    monospaced: "",
                    autocomplete: "off",
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
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("ui-textarea-group", {
            attrs: {
              id: "matrix-description",
              name: "description",
              label: "Description",
              help:
                "Give a short description of what this matrix will manage and store.",
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
          }),
          _vm._v(" "),
          _c("ui-select-group", {
            attrs: {
              id: "matrix-type",
              name: "type",
              label: "Type",
              help: "What type of matrix will this be?",
              options: [
                {
                  label: "Collection",
                  value: "collection"
                },
                {
                  label: "Single",
                  value: "single"
                }
              ],
              "has-error": _vm.form.errors.has("type"),
              "error-message": _vm.form.errors.get("type")
            },
            model: {
              value: _vm.form.type,
              callback: function($$v) {
                _vm.$set(_vm.form, "type", $$v)
              },
              expression: "form.type"
            }
          }),
          _vm._v(" "),
          _c("ui-select-group", {
            attrs: {
              id: "matrix-parent-id",
              name: "parent_id",
              label: "Parent Matrix",
              help: "Should this matrix belong to another?",
              options: _vm.parentOptions,
              "has-error": _vm.form.errors.has("parent_id"),
              "error-message": _vm.form.errors.get("parent_id")
            },
            model: {
              value: _vm.form.parent_id,
              callback: function($$v) {
                _vm.$set(_vm.form, "parent_id", $$v)
              },
              expression: "form.parent_id"
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
            id: "matrix_panel_customizations",
            title: "Customizations",
            description: "Configure the various customizations options.",
            tabindex: "-1"
          }
        },
        [
          _c("ui-input-group", {
            attrs: {
              id: "matrix-name-label",
              name: "name_label",
              label: "Name Label",
              placeholder: "Name",
              help:
                "If you'd like, you may customize the label used for your entry names.",
              "has-error": _vm.form.errors.has("name_label"),
              "error-message": _vm.form.errors.get("name_label")
            },
            model: {
              value: _vm.form.name_label,
              callback: function($$v) {
                _vm.$set(_vm.form, "name_label", $$v)
              },
              expression: "form.name_label"
            }
          }),
          _vm._v(" "),
          _c("ui-input-group", {
            attrs: {
              id: "matrix-reference-singular",
              name: "reference_singular",
              label: "Singular Reference",
              placeholder: _vm.singularReference,
              help:
                "What would you like to reference this as in singular form? By default will try to guess from the name. Results may vary.",
              "has-error": _vm.form.errors.has("reference_singular"),
              "error-message": _vm.form.errors.get("reference_singular")
            },
            model: {
              value: _vm.form.reference_singular,
              callback: function($$v) {
                _vm.$set(_vm.form, "reference_singular", $$v)
              },
              expression: "form.reference_singular"
            }
          }),
          _vm._v(" "),
          _c("ui-input-group", {
            attrs: {
              id: "matrix-reference-plural",
              name: "reference_plural",
              label: "Plural Reference",
              placeholder: _vm.pluralReference,
              help:
                "What would you like to reference this as in plural form? By default will try to guess from the name. Results may vary.",
              "has-error": _vm.form.errors.has("reference_plural"),
              "error-message": _vm.form.errors.get("reference_plural")
            },
            model: {
              value: _vm.form.reference_plural,
              callback: function($$v) {
                _vm.$set(_vm.form, "reference_plural", $$v)
              },
              expression: "form.reference_plural"
            }
          }),
          _vm._v(" "),
          _vm.form.type == "collection"
            ? _c("ui-toggle", {
                attrs: {
                  id: "matrix-show-name-field",
                  name: "show_name_field",
                  label: "Show name field",
                  help: !_vm.form.show_name_field
                    ? "Auto-generate a name using the format in the field below."
                    : "Include a name field on this matrix.",
                  "true-value": 1,
                  "false-value": 0
                },
                model: {
                  value: _vm.form.show_name_field,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "show_name_field", $$v)
                  },
                  expression: "form.show_name_field"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          !_vm.form.show_name_field
            ? _c("ui-input-group", {
                attrs: {
                  monospaced: "",
                  id: "matrix-name-format",
                  name: "name_format",
                  label: "Name Format",
                  help:
                    "What format would you like your generated names and slugs to follow?",
                  required: "",
                  "has-error": _vm.form.errors.has("name_format"),
                  "error-message": _vm.form.errors.get("name_format")
                },
                model: {
                  value: _vm.form.name_format,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name_format", $$v)
                  },
                  expression: "form.name_format"
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
            id: "matrix_panel_routing",
            title: "Routing",
            description:
              "Configure how entries within the collection will be accessed on the frontend.",
            tabindex: "-1"
          }
        },
        [
          _c("ui-input-group", {
            attrs: {
              id: "matrix-route",
              name: "route",
              label: "Route",
              help: "When the URI matches this pattern...",
              autocomplete: "off",
              monospaced: "",
              "has-error": _vm.form.errors.has("route"),
              "error-message": _vm.form.errors.get("route")
            },
            model: {
              value: _vm.form.route,
              callback: function($$v) {
                _vm.$set(_vm.form, "route", $$v)
              },
              expression: "form.route"
            }
          }),
          _vm._v(" "),
          _c("ui-input-group", {
            attrs: {
              id: "matrix-template",
              name: "template",
              label: "Template",
              help: "Render this template",
              autocomplete: "off",
              monospaced: "",
              "has-error": _vm.form.errors.has("template"),
              "error-message": _vm.form.errors.get("template")
            },
            model: {
              value: _vm.form.template,
              callback: function($$v) {
                _vm.$set(_vm.form, "template", $$v)
              },
              expression: "form.template"
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
            id: "matrix_panel_blueprint",
            grid: false,
            title: "Blueprint",
            description:
              "Create the content blueprint for this matrix by adding panel sections and fields to either the page body or page sidebar.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvcmVzb3VyY2VzL2pzL3BhZ2VzL01hdHJpY2VzL0VkaXQudnVlIiwid2VicGFjazovL2Z1c2lvbmNtcy9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvU2hhcmVkRm9ybS52dWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vbm9kZV9tb2R1bGVzL3BsdXJhbGl6ZS9wbHVyYWxpemUuanMiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hdHJpY2VzL0VkaXQudnVlIiwid2VicGFjazovL2Z1c2lvbmNtcy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXRyaWNlcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvRWRpdC52dWU/NDI2MSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvU2hhcmVkRm9ybS52dWU/M2UxMCIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvRWRpdC52dWU/ODBhOSIsIndlYnBhY2s6Ly9mdXNpb25jbXMvLi9yZXNvdXJjZXMvanMvcGFnZXMvTWF0cmljZXMvU2hhcmVkRm9ybS52dWU/ZDc4ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTEE7QUFPQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBUEE7QUFlQSxNQWZBLGtCQWVBO0FBQ0E7QUFDQSxjQURBO0FBRUEsa0JBRkE7QUFHQSxnQkFIQTtBQUlBO0FBSkE7QUFNQSxHQXRCQTtBQXdCQTtBQUNBO0FBREEsR0F4QkE7QUE0QkE7QUFD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QTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX3BhZ2VzX01hdHJpY2VzX0VkaXRfdnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtYXRyaXgtcGFnZVwiPlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxwYWdlLXRpdGxlIGljb249XCJsYXllci1ncm91cFwiPkVkaXQgTWF0cml4PC9wYWdlLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8c2hhcmVkLWZvcm1cbiAgICAgICAgICAgIHYtaWY9XCJmb3JtXCJcbiAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgIDpmb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICA6bWF0cml4PVwibWF0cml4XCJcbiAgICAgICAgICAgIDpzdWJtaXQ9XCJzdWJtaXRcIlxuICAgICAgICAgICAgOm1hdHJpY2VzPVwibWF0cmljZXNcIj5cbiAgICAgICAgPC9zaGFyZWQtZm9ybT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFNoYXJlZEZvcm0gZnJvbSAnLi9TaGFyZWRGb3JtJ1xuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL3NlcnZpY2VzL0Zvcm0nXG4gICAgaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnXG4gICAgaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBhdXRoKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uOiAnbWF0cmljZXMudXBkYXRlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogXy5oYXModGhpcy5mb3JtLCAnbmFtZScpID8gdGhpcy5mb3JtLm5hbWUgOiAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF0cmljZXM6IFtdLFxuICAgICAgICAgICAgICAgIG1hdHJpeDoge30sXG4gICAgICAgICAgICAgICAgZm9ybTogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdzaGFyZWQtZm9ybSc6IFNoYXJlZEZvcm1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5yZWZlcmVuY2Vfc2luZ3VsYXIgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlZmVyZW5jZV9zaW5ndWxhciA9IHBsdXJhbGl6ZS5zaW5ndWxhcih0aGlzLmZvcm0ubmFtZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLnJlZmVyZW5jZV9wbHVyYWwgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlZmVyZW5jZV9wbHVyYWwgPSBwbHVyYWxpemUodGhpcy5mb3JtLm5hbWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhdGNoKGAvYXBpL21hdHJpY2VzLyR7dGhpcy5pZH1gKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGAvYXBpL2JsdWVwcmludHMvJHtyZXNwb25zZS5kYXRhLmJsdWVwcmludC5pZH0vc2VjdGlvbnNgLCB7IHNlY3Rpb25zOiB0aGlzLmZvcm0uc2VjdGlvbnMgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCduYXZpZ2F0aW9uL2ZldGNoQWRtaW5OYXZpZ2F0aW9uJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KCdNYXRyaXggc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQnLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL21hdHJpY2VzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBnZXRNb2RlbHModG8ucGFyYW1zLm1hdHJpeCwgKGVycm9yLCBtYXRyaXgsIG1hdHJpY2VzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci50b1N0cmluZygpLCAnZGFuZ2VyJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvbWF0cmljZXMnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5pZCAgICAgICAgPSBtYXRyaXguZGF0YS5kYXRhLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5tYXRyaXggICAgPSBtYXRyaXguZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5tYXRyaWNlcyAgPSBtYXRyaWNlcy5kYXRhLmRhdGFcblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZm9ybSA9IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRfaWQ6ICAgICAgICAgIHZtLm1hdHJpeC5wYXJlbnRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogICAgICAgICAgICAgICB2bS5tYXRyaXgubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGU6ICAgICAgICAgICAgIHZtLm1hdHJpeC5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICAgICAgICB2bS5tYXRyaXguZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogICAgICAgICAgICAgICB2bS5tYXRyaXgudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2Vfc2luZ3VsYXI6IHZtLm1hdHJpeC5yZWZlcmVuY2Vfc2luZ3VsYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlX3BsdXJhbDogICB2bS5tYXRyaXgucmVmZXJlbmNlX3BsdXJhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uczogICAgICAgICAgIHZtLm1hdHJpeC5ibHVlcHJpbnQuc2VjdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogICAgICAgICAgICB2bS5tYXRyaXguc2lkZWJhciA/ICcxJyA6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWlja2xpbms6ICAgICAgICAgIHZtLm1hdHJpeC5xdWlja2xpbmsgPyAnMScgOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogICAgICAgICAgICAgICB2bS5tYXRyaXguaWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93X25hbWVfZmllbGQ6ICAgIHZtLm1hdHJpeC5zaG93X25hbWVfZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZV9sYWJlbDogICAgICAgICB2bS5tYXRyaXgubmFtZV9sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lX2Zvcm1hdDogICAgICAgIHZtLm1hdHJpeC5uYW1lX2Zvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZTogICAgICAgICAgICAgIHZtLm1hdHJpeC5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogICAgICAgICAgIHZtLm1hdHJpeC50ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpc2lvbl9jb250cm9sOiAgIHZtLm1hdHJpeC5yZXZpc2lvbl9jb250cm9sID8gJzEnIDogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpemFibGU6ICAgICAgdm0ubWF0cml4LmNhdGVnb3JpemFibGUgPyAnMScgOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGl0YWJsZTogICAgICAgICB2bS5tYXRyaXguY3JlZGl0YWJsZSA/ICcxJyA6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaXNoYWJsZTogICAgICAgIHZtLm1hdHJpeC5wdWJsaXNoYWJsZSA/ICcxJyA6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW9hYmxlOiAgICAgICAgICAgIHZtLm1hdHJpeC5zZW9hYmxlID8gJzEnIDogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogICAgICAgICAgICAgdm0ubWF0cml4LnN0YXR1cyA/ICcxJyA6ICcwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TW9kZWxzKG1heHRyaXgsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvbWF0cmljZXMvJHttYXh0cml4fWApLFxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL21hdHJpY2VzJylcbiAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoKG1hdHJpeCwgbWF0cmljZXMpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG1hdHJpeCwgbWF0cmljZXMpXG4gICAgICAgIH0pKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignVGhlIHJlcXVlc3RlZCBtYXh0cml4IGNvdWxkIG5vdCBiZSBmb3VuZCcpKVxuICAgICAgICB9KVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHYtaWY9XCIkbXEgIT0gJ3NtJ1wiIDp0bz1cInsgbmFtZTogJ21hdHJpY2VzJyB9XCIgdmFyaWFudD1cInNlY29uZGFyeVwiPkdvIEJhY2s8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWktYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgOmRpc2FibGVkPVwiIWZvcm0uaGFzQ2hhbmdlc1wiPlNhdmU8L3VpLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwic2lkZWJhci1yaWdodFwiPlxuICAgICAgICAgICAgPHNpZGViYXIgaWQ9XCJtYXRyaXgtc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyLXNlY3Rpb24gaWQ9XCJtYXRyaXhfcGFuZWxfc3RhdHVzXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC1zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGVscD1cImZvcm0uc3RhdHVzID8gJ1RvZ2dsZSB0byBkaXNhYmxlIHRoaXMgbWF0cml4LicgOiAnVG9nZ2xlIHRvIGVuYWJsZSB0aGlzIG1hdHJpeC4nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dHJ1ZS12YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8L3NpZGViYXItc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxzaWRlYmFyLXNlY3Rpb24gaWQ9XCJtYXRyaXhfcGFuZWxfYXBwZWFyYW5jZVwiIHRpdGxlPVwiQXBwZWFyYW5jZVwiIGRlc2NyaXB0aW9uPVwiQ2hvb3NlIHdoZXJlIHRvIHNob3cgdGhpcyBtYXRyaXggYW5kIGhvdyB0byByZXByZXNlbnQgaXQuXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC1zaWRlYmFyLXNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNpZGViYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaG93IGluIFNpZGViYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uc2lkZWJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dHJ1ZS12YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLXRvZ2dsZT5cblxuICAgICAgICAgICAgICAgICAgICA8dWktdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC1xdWlja2xpbmstc2hvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVpY2tsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2hvdyBhcyBRdWlja2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucXVpY2tsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0cnVlLXZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmFsc2UtdmFsdWU9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWktdG9nZ2xlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpY29uLXBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtYXRyaXgtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaWNvbnMuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkNob29zZSBhbiBpY29uIHRoYXQgYmVzdCByZXByZXNlbnRzIHlvdXIgbWF0cml4LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdpY29uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2ljb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8L2ljb24tcGlja2VyPlxuICAgICAgICAgICAgICAgIDwvc2lkZWJhci1zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHN0YXR1cy1jYXJkIHYtaWY9XCJtYXRyaXhcIiA6ZW50cnk9XCJtYXRyaXhcIiBpZD1cIm1hdHJpeF9wYW5lbF9zdGF0dXNfY2FyZFwiIHRhYmluZGV4PVwiLTFcIj48L3N0YXR1cy1jYXJkPlxuICAgICAgICAgICAgPC9zaWRlYmFyPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIGlkPVwibWF0cml4X3BhbmVsX2dlbmVyYWxcIiB0aXRsZT1cIkdlbmVyYWwgSW5mb3JtYXRpb25cIiBkZXNjcmlwdGlvbj1cIkdlbmVyYWwgaW5mb3JtYXRpb24gYWJvdXQgeW91ciBjb2xsZWN0aW9uIGFuZCB3aGF0IGl0IG1hbmFnZXMuXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsIGxnOnctMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtYXRyaXgtbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIldoYXQgc2hvdWxkIHRoaXMgbWF0cml4IGJlIGNhbGxlZD9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgICAgICAgICAgICA8dWktc2x1Zy1ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtYXRyaXgtaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkEgZGV2ZWxvcGVyLWZyaWVuZGx5IGlkZW50aWZpZXIuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyPVwiX1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6d2F0Y2g9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnaGFuZGxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2hhbmRsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VpLXNsdWctZ3JvdXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHVpLXRleHRhcmVhLWdyb3VwXG4gICAgICAgICAgICAgICAgaWQ9XCJtYXRyaXgtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgaGVscD1cIkdpdmUgYSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB3aGF0IHRoaXMgbWF0cml4IHdpbGwgbWFuYWdlIGFuZCBzdG9yZS5cIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2Rlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8L3VpLXRleHRhcmVhLWdyb3VwPlxuXG5cbiAgICAgICAgICAgIDx1aS1zZWxlY3QtZ3JvdXBcbiAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC10eXBlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUeXBlXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCB0eXBlIG9mIG1hdHJpeCB3aWxsIHRoaXMgYmU/XCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIltcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ0NvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJ2NvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnU2luZ2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICdzaW5nbGUnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3R5cGUnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3R5cGUnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0udHlwZVwiPlxuICAgICAgICAgICAgPC91aS1zZWxlY3QtZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS1zZWxlY3QtZ3JvdXBcbiAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC1wYXJlbnQtaWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXJlbnRfaWRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFyZW50IE1hdHJpeFwiXG4gICAgICAgICAgICAgICAgaGVscD1cIlNob3VsZCB0aGlzIG1hdHJpeCBiZWxvbmcgdG8gYW5vdGhlcj9cIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwicGFyZW50T3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygncGFyZW50X2lkJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdwYXJlbnRfaWQnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucGFyZW50X2lkXCI+XG4gICAgICAgICAgICA8L3VpLXNlbGVjdC1ncm91cD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCBpZD1cIm1hdHJpeF9wYW5lbF9jdXN0b21pemF0aW9uc1wiIHRpdGxlPVwiQ3VzdG9taXphdGlvbnNcIiBkZXNjcmlwdGlvbj1cIkNvbmZpZ3VyZSB0aGUgdmFyaW91cyBjdXN0b21pemF0aW9ucyBvcHRpb25zLlwiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIGlkPVwibWF0cml4LW5hbWUtbGFiZWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lX2xhYmVsXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWUgTGFiZWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgaGVscD1cIklmIHlvdSdkIGxpa2UsIHlvdSBtYXkgY3VzdG9taXplIHRoZSBsYWJlbCB1c2VkIGZvciB5b3VyIGVudHJ5IG5hbWVzLlwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZV9sYWJlbCcpXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZV9sYWJlbCcpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lX2xhYmVsXCI+XG4gICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuXG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC1yZWZlcmVuY2Utc2luZ3VsYXJcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVuY2Vfc2luZ3VsYXJcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU2luZ3VsYXIgUmVmZXJlbmNlXCJcbiAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJzaW5ndWxhclJlZmVyZW5jZVwiXG4gICAgICAgICAgICAgICAgaGVscD1cIldoYXQgd291bGQgeW91IGxpa2UgdG8gcmVmZXJlbmNlIHRoaXMgYXMgaW4gc2luZ3VsYXIgZm9ybT8gQnkgZGVmYXVsdCB3aWxsIHRyeSB0byBndWVzcyBmcm9tIHRoZSBuYW1lLiBSZXN1bHRzIG1heSB2YXJ5LlwiXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygncmVmZXJlbmNlX3Npbmd1bGFyJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdyZWZlcmVuY2Vfc2luZ3VsYXInKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucmVmZXJlbmNlX3Npbmd1bGFyXCI+XG4gICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuXG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC1yZWZlcmVuY2UtcGx1cmFsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicmVmZXJlbmNlX3BsdXJhbFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQbHVyYWwgUmVmZXJlbmNlXCJcbiAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJwbHVyYWxSZWZlcmVuY2VcIlxuICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIHJlZmVyZW5jZSB0aGlzIGFzIGluIHBsdXJhbCBmb3JtPyBCeSBkZWZhdWx0IHdpbGwgdHJ5IHRvIGd1ZXNzIGZyb20gdGhlIG5hbWUuIFJlc3VsdHMgbWF5IHZhcnkuXCJcbiAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdyZWZlcmVuY2VfcGx1cmFsJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdyZWZlcmVuY2VfcGx1cmFsJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnJlZmVyZW5jZV9wbHVyYWxcIj5cbiAgICAgICAgICAgIDwvdWktaW5wdXQtZ3JvdXA+XG5cbiAgICAgICAgICAgIDx1aS10b2dnbGVcbiAgICAgICAgICAgICAgICB2LWlmPVwiZm9ybS50eXBlID09ICdjb2xsZWN0aW9uJ1wiXG4gICAgICAgICAgICAgICAgaWQ9XCJtYXRyaXgtc2hvdy1uYW1lLWZpZWxkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2hvd19uYW1lX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNob3cgbmFtZSBmaWVsZFwiXG4gICAgICAgICAgICAgICAgOmhlbHA9XCIhZm9ybS5zaG93X25hbWVfZmllbGQgPyAnQXV0by1nZW5lcmF0ZSBhIG5hbWUgdXNpbmcgdGhlIGZvcm1hdCBpbiB0aGUgZmllbGQgYmVsb3cuJyA6ICdJbmNsdWRlIGEgbmFtZSBmaWVsZCBvbiB0aGlzIG1hdHJpeC4nXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zaG93X25hbWVfZmllbGRcIlxuICAgICAgICAgICAgICAgIDp0cnVlLXZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgOmZhbHNlLXZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgPC91aS10b2dnbGU+XG5cbiAgICAgICAgICAgIDx1aS1pbnB1dC1ncm91cFxuICAgICAgICAgICAgICAgIHYtaWY9XCIhZm9ybS5zaG93X25hbWVfZmllbGRcIlxuICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC1uYW1lLWZvcm1hdFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVfZm9ybWF0XCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWUgRm9ybWF0XCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCBmb3JtYXQgd291bGQgeW91IGxpa2UgeW91ciBnZW5lcmF0ZWQgbmFtZXMgYW5kIHNsdWdzIHRvIGZvbGxvdz9cIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZV9mb3JtYXQnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWVfZm9ybWF0JylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5hbWVfZm9ybWF0XCI+XG4gICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuICAgICAgICA8L3NlY3Rpb24tY2FyZD5cblxuICAgICAgICA8c2VjdGlvbi1jYXJkIGlkPVwibWF0cml4X3BhbmVsX3JvdXRpbmdcIiB0aXRsZT1cIlJvdXRpbmdcIiBkZXNjcmlwdGlvbj1cIkNvbmZpZ3VyZSBob3cgZW50cmllcyB3aXRoaW4gdGhlIGNvbGxlY3Rpb24gd2lsbCBiZSBhY2Nlc3NlZCBvbiB0aGUgZnJvbnRlbmQuXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgPHVpLWlucHV0LWdyb3VwXG4gICAgICAgICAgICAgICAgaWQ9XCJtYXRyaXgtcm91dGVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJyb3V0ZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSb3V0ZVwiXG4gICAgICAgICAgICAgICAgaGVscD1cIldoZW4gdGhlIFVSSSBtYXRjaGVzIHRoaXMgcGF0dGVybi4uLlwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygncm91dGUnKVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3JvdXRlJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnJvdXRlXCI+XG4gICAgICAgICAgICA8L3VpLWlucHV0LWdyb3VwPlxuXG4gICAgICAgICAgICA8dWktaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgICAgICBpZD1cIm1hdHJpeC10ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBoZWxwPVwiUmVuZGVyIHRoaXMgdGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgbW9ub3NwYWNlZFxuICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3RlbXBsYXRlJylcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCd0ZW1wbGF0ZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPC91aS1pbnB1dC1ncm91cD5cbiAgICAgICAgPC9zZWN0aW9uLWNhcmQ+XG5cbiAgICAgICAgPHNlY3Rpb24tY2FyZCBpZD1cIm1hdHJpeF9wYW5lbF9ibHVlcHJpbnRcIiA6Z3JpZD1cImZhbHNlXCIgdGl0bGU9XCJCbHVlcHJpbnRcIiBkZXNjcmlwdGlvbj1cIkNyZWF0ZSB0aGUgY29udGVudCBibHVlcHJpbnQgZm9yIHRoaXMgbWF0cml4IGJ5IGFkZGluZyBwYW5lbCBzZWN0aW9ucyBhbmQgZmllbGRzIHRvIGVpdGhlciB0aGUgcGFnZSBib2R5IG9yIHBhZ2Ugc2lkZWJhci5cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICA8Ymx1ZXByaW50PlxuICAgICAgICAgICAgICAgIDxibHVlcHJpbnQtYXJlYSB2LW1vZGVsPVwiZm9ybS5zZWN0aW9uc1wiIDpwbGFjZW1lbnRzPVwicGxhY2VtZW50c1wiIGFyZWE9XCJib2R5XCIgdGl0bGU9XCJCb2R5XCI+PC9ibHVlcHJpbnQtYXJlYT5cbiAgICAgICAgICAgICAgICA8Ymx1ZXByaW50LWFyZWEgdi1tb2RlbD1cImZvcm0uc2VjdGlvbnNcIiBjbGFzcz1cImJsdWVwcmludF9fY29sLS1zaWRlYmFyXCIgOnBsYWNlbWVudHM9XCJwbGFjZW1lbnRzXCIgYXJlYT1cInNpZGViYXJcIiB0aXRsZT1cIlNpZGViYXJcIj48L2JsdWVwcmludC1hcmVhPlxuICAgICAgICAgICAgPC9ibHVlcHJpbnQ+XG4gICAgICAgIDwvc2VjdGlvbi1jYXJkPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgcGx1cmFsaXplIGZyb20gJ3BsdXJhbGl6ZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdCb2R5JywgICAgdmFsdWU6ICdib2R5JyAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnU2lkZWJhcicsIHZhbHVlOiAnc2lkZWJhcicgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBtYXRyaXg6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3VibWl0OiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBtYXRyaWNlczoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc2luZ3VsYXJSZWZlcmVuY2UoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsdXJhbGl6ZS5zaW5ndWxhcih0aGlzLmZvcm0ubmFtZSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHBsdXJhbFJlZmVyZW5jZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGx1cmFsaXplKHRoaXMuZm9ybS5uYW1lKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcGFyZW50T3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IF8ubWFwKHRoaXMubWF0cmljZXMsIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBpdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IF8ucmVtb3ZlKG9wdGlvbnMsIChpdGVtKSA9PiB0aGlzLmlkID09IGl0ZW0uaWQpXG5cbiAgICAgICAgICAgICAgICBvcHRpb25zLnVuc2hpZnQoeyAnbGFiZWwnOiAnTm9uZScsICd2YWx1ZSc6IG51bGwgfSlcblxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICckcGFyZW50LmZvcm0udHlwZScodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gJ3NpbmdsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZvcm0uc2hvd19uYW1lX2ZpZWxkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uIChyb290LCBwbHVyYWxpemUpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jykge1xuICAgIC8vIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBwbHVyYWxpemUoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQsIHJlZ2lzdGVycyBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGx1cmFsaXplKCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWwuXG4gICAgcm9vdC5wbHVyYWxpemUgPSBwbHVyYWxpemUoKTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKCkge1xuICAvLyBSdWxlIHN0b3JhZ2UgLSBwbHVyYWxpemUgYW5kIHNpbmd1bGFyaXplIG5lZWQgdG8gYmUgcnVuIHNlcXVlbnRpYWxseSxcbiAgLy8gd2hpbGUgb3RoZXIgcnVsZXMgY2FuIGJlIG9wdGltaXplZCB1c2luZyBhbiBvYmplY3QgZm9yIGluc3RhbnQgbG9va3Vwcy5cbiAgdmFyIHBsdXJhbFJ1bGVzID0gW107XG4gIHZhciBzaW5ndWxhclJ1bGVzID0gW107XG4gIHZhciB1bmNvdW50YWJsZXMgPSB7fTtcbiAgdmFyIGlycmVndWxhclBsdXJhbHMgPSB7fTtcbiAgdmFyIGlycmVndWxhclNpbmdsZXMgPSB7fTtcblxuICAvKipcbiAgICogU2FuaXRpemUgYSBwbHVyYWxpemF0aW9uIHJ1bGUgdG8gYSB1c2FibGUgcmVndWxhciBleHByZXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0gIHsoUmVnRXhwfHN0cmluZyl9IHJ1bGVcbiAgICogQHJldHVybiB7UmVnRXhwfVxuICAgKi9cbiAgZnVuY3Rpb24gc2FuaXRpemVSdWxlIChydWxlKSB7XG4gICAgaWYgKHR5cGVvZiBydWxlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcnVsZSArICckJywgJ2knKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXNzIGluIGEgd29yZCB0b2tlbiB0byBwcm9kdWNlIGEgZnVuY3Rpb24gdGhhdCBjYW4gcmVwbGljYXRlIHRoZSBjYXNlIG9uXG4gICAqIGFub3RoZXIgd29yZC5cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgIHdvcmRcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgIHRva2VuXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gcmVzdG9yZUNhc2UgKHdvcmQsIHRva2VuKSB7XG4gICAgLy8gVG9rZW5zIGFyZSBhbiBleGFjdCBtYXRjaC5cbiAgICBpZiAod29yZCA9PT0gdG9rZW4pIHJldHVybiB0b2tlbjtcblxuICAgIC8vIExvd2VyIGNhc2VkIHdvcmRzLiBFLmcuIFwiaGVsbG9cIi5cbiAgICBpZiAod29yZCA9PT0gd29yZC50b0xvd2VyQ2FzZSgpKSByZXR1cm4gdG9rZW4udG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIFVwcGVyIGNhc2VkIHdvcmRzLiBFLmcuIFwiV0hJU0tZXCIuXG4gICAgaWYgKHdvcmQgPT09IHdvcmQudG9VcHBlckNhc2UoKSkgcmV0dXJuIHRva2VuLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAvLyBUaXRsZSBjYXNlZCB3b3Jkcy4gRS5nLiBcIlRpdGxlXCIuXG4gICAgaWYgKHdvcmRbMF0gPT09IHdvcmRbMF0udG9VcHBlckNhc2UoKSkge1xuICAgICAgcmV0dXJuIHRva2VuLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdG9rZW4uc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gTG93ZXIgY2FzZWQgd29yZHMuIEUuZy4gXCJ0ZXN0XCIuXG4gICAgcmV0dXJuIHRva2VuLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJwb2xhdGUgYSByZWdleHAgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHN0clxuICAgKiBAcGFyYW0gIHtBcnJheX0gIGFyZ3NcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gaW50ZXJwb2xhdGUgKHN0ciwgYXJncykge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFwkKFxcZHsxLDJ9KS9nLCBmdW5jdGlvbiAobWF0Y2gsIGluZGV4KSB7XG4gICAgICByZXR1cm4gYXJnc1tpbmRleF0gfHwgJyc7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSBhIHdvcmQgdXNpbmcgYSBydWxlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHdvcmRcbiAgICogQHBhcmFtICB7QXJyYXl9ICBydWxlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2UgKHdvcmQsIHJ1bGUpIHtcbiAgICByZXR1cm4gd29yZC5yZXBsYWNlKHJ1bGVbMF0sIGZ1bmN0aW9uIChtYXRjaCwgaW5kZXgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBpbnRlcnBvbGF0ZShydWxlWzFdLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAobWF0Y2ggPT09ICcnKSB7XG4gICAgICAgIHJldHVybiByZXN0b3JlQ2FzZSh3b3JkW2luZGV4IC0gMV0sIHJlc3VsdCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN0b3JlQ2FzZShtYXRjaCwgcmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYW5pdGl6ZSBhIHdvcmQgYnkgcGFzc2luZyBpbiB0aGUgd29yZCBhbmQgc2FuaXRpemF0aW9uIHJ1bGVzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgdG9rZW5cbiAgICogQHBhcmFtICB7c3RyaW5nfSAgIHdvcmRcbiAgICogQHBhcmFtICB7QXJyYXl9ICAgIHJ1bGVzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIHNhbml0aXplV29yZCAodG9rZW4sIHdvcmQsIHJ1bGVzKSB7XG4gICAgLy8gRW1wdHkgc3RyaW5nIG9yIGRvZXNuJ3QgbmVlZCBmaXhpbmcuXG4gICAgaWYgKCF0b2tlbi5sZW5ndGggfHwgdW5jb3VudGFibGVzLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuICAgICAgcmV0dXJuIHdvcmQ7XG4gICAgfVxuXG4gICAgdmFyIGxlbiA9IHJ1bGVzLmxlbmd0aDtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgc2FuaXRpemF0aW9uIHJ1bGVzIGFuZCB1c2UgdGhlIGZpcnN0IG9uZSB0byBtYXRjaC5cbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgIHZhciBydWxlID0gcnVsZXNbbGVuXTtcblxuICAgICAgaWYgKHJ1bGVbMF0udGVzdCh3b3JkKSkgcmV0dXJuIHJlcGxhY2Uod29yZCwgcnVsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmQ7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSBhIHdvcmQgd2l0aCB0aGUgdXBkYXRlZCB3b3JkLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgcmVwbGFjZU1hcFxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAga2VlcE1hcFxuICAgKiBAcGFyYW0gIHtBcnJheX0gICAgcnVsZXNcbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlV29yZCAocmVwbGFjZU1hcCwga2VlcE1hcCwgcnVsZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHdvcmQpIHtcbiAgICAgIC8vIEdldCB0aGUgY29ycmVjdCB0b2tlbiBhbmQgY2FzZSByZXN0b3JhdGlvbiBmdW5jdGlvbnMuXG4gICAgICB2YXIgdG9rZW4gPSB3b3JkLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIC8vIENoZWNrIGFnYWluc3QgdGhlIGtlZXAgb2JqZWN0IG1hcC5cbiAgICAgIGlmIChrZWVwTWFwLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuICAgICAgICByZXR1cm4gcmVzdG9yZUNhc2Uod29yZCwgdG9rZW4pO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBhZ2FpbnN0IHRoZSByZXBsYWNlbWVudCBtYXAgZm9yIGEgZGlyZWN0IHdvcmQgcmVwbGFjZW1lbnQuXG4gICAgICBpZiAocmVwbGFjZU1hcC5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcbiAgICAgICAgcmV0dXJuIHJlc3RvcmVDYXNlKHdvcmQsIHJlcGxhY2VNYXBbdG9rZW5dKTtcbiAgICAgIH1cblxuICAgICAgLy8gUnVuIGFsbCB0aGUgcnVsZXMgYWdhaW5zdCB0aGUgd29yZC5cbiAgICAgIHJldHVybiBzYW5pdGl6ZVdvcmQodG9rZW4sIHdvcmQsIHJ1bGVzKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgd29yZCBpcyBwYXJ0IG9mIHRoZSBtYXAuXG4gICAqL1xuICBmdW5jdGlvbiBjaGVja1dvcmQgKHJlcGxhY2VNYXAsIGtlZXBNYXAsIHJ1bGVzLCBib29sKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICB2YXIgdG9rZW4gPSB3b3JkLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGlmIChrZWVwTWFwLmhhc093blByb3BlcnR5KHRva2VuKSkgcmV0dXJuIHRydWU7XG4gICAgICBpZiAocmVwbGFjZU1hcC5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHJldHVybiBmYWxzZTtcblxuICAgICAgcmV0dXJuIHNhbml0aXplV29yZCh0b2tlbiwgdG9rZW4sIHJ1bGVzKSA9PT0gdG9rZW47XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQbHVyYWxpemUgb3Igc2luZ3VsYXJpemUgYSB3b3JkIGJhc2VkIG9uIHRoZSBwYXNzZWQgaW4gY291bnQuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gIHdvcmQgICAgICBUaGUgd29yZCB0byBwbHVyYWxpemVcbiAgICogQHBhcmFtICB7bnVtYmVyfSAgY291bnQgICAgIEhvdyBtYW55IG9mIHRoZSB3b3JkIGV4aXN0XG4gICAqIEBwYXJhbSAge2Jvb2xlYW59IGluY2x1c2l2ZSBXaGV0aGVyIHRvIHByZWZpeCB3aXRoIHRoZSBudW1iZXIgKGUuZy4gMyBkdWNrcylcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gcGx1cmFsaXplICh3b3JkLCBjb3VudCwgaW5jbHVzaXZlKSB7XG4gICAgdmFyIHBsdXJhbGl6ZWQgPSBjb3VudCA9PT0gMVxuICAgICAgPyBwbHVyYWxpemUuc2luZ3VsYXIod29yZCkgOiBwbHVyYWxpemUucGx1cmFsKHdvcmQpO1xuXG4gICAgcmV0dXJuIChpbmNsdXNpdmUgPyBjb3VudCArICcgJyA6ICcnKSArIHBsdXJhbGl6ZWQ7XG4gIH1cblxuICAvKipcbiAgICogUGx1cmFsaXplIGEgd29yZC5cbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgcGx1cmFsaXplLnBsdXJhbCA9IHJlcGxhY2VXb3JkKFxuICAgIGlycmVndWxhclNpbmdsZXMsIGlycmVndWxhclBsdXJhbHMsIHBsdXJhbFJ1bGVzXG4gICk7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgd29yZCBpcyBwbHVyYWwuXG4gICAqXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICovXG4gIHBsdXJhbGl6ZS5pc1BsdXJhbCA9IGNoZWNrV29yZChcbiAgICBpcnJlZ3VsYXJTaW5nbGVzLCBpcnJlZ3VsYXJQbHVyYWxzLCBwbHVyYWxSdWxlc1xuICApO1xuXG4gIC8qKlxuICAgKiBTaW5ndWxhcml6ZSBhIHdvcmQuXG4gICAqXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICovXG4gIHBsdXJhbGl6ZS5zaW5ndWxhciA9IHJlcGxhY2VXb3JkKFxuICAgIGlycmVndWxhclBsdXJhbHMsIGlycmVndWxhclNpbmdsZXMsIHNpbmd1bGFyUnVsZXNcbiAgKTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB3b3JkIGlzIHNpbmd1bGFyLlxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICBwbHVyYWxpemUuaXNTaW5ndWxhciA9IGNoZWNrV29yZChcbiAgICBpcnJlZ3VsYXJQbHVyYWxzLCBpcnJlZ3VsYXJTaW5nbGVzLCBzaW5ndWxhclJ1bGVzXG4gICk7XG5cbiAgLyoqXG4gICAqIEFkZCBhIHBsdXJhbGl6YXRpb24gcnVsZSB0byB0aGUgY29sbGVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHJ1bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgIHJlcGxhY2VtZW50XG4gICAqL1xuICBwbHVyYWxpemUuYWRkUGx1cmFsUnVsZSA9IGZ1bmN0aW9uIChydWxlLCByZXBsYWNlbWVudCkge1xuICAgIHBsdXJhbFJ1bGVzLnB1c2goW3Nhbml0aXplUnVsZShydWxlKSwgcmVwbGFjZW1lbnRdKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGEgc2luZ3VsYXJpemF0aW9uIHJ1bGUgdG8gdGhlIGNvbGxlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBydWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICByZXBsYWNlbWVudFxuICAgKi9cbiAgcGx1cmFsaXplLmFkZFNpbmd1bGFyUnVsZSA9IGZ1bmN0aW9uIChydWxlLCByZXBsYWNlbWVudCkge1xuICAgIHNpbmd1bGFyUnVsZXMucHVzaChbc2FuaXRpemVSdWxlKHJ1bGUpLCByZXBsYWNlbWVudF0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYW4gdW5jb3VudGFibGUgd29yZCBydWxlLlxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gd29yZFxuICAgKi9cbiAgcGx1cmFsaXplLmFkZFVuY291bnRhYmxlUnVsZSA9IGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgaWYgKHR5cGVvZiB3b3JkID09PSAnc3RyaW5nJykge1xuICAgICAgdW5jb3VudGFibGVzW3dvcmQudG9Mb3dlckNhc2UoKV0gPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNldCBzaW5ndWxhciBhbmQgcGx1cmFsIHJlZmVyZW5jZXMgZm9yIHRoZSB3b3JkLlxuICAgIHBsdXJhbGl6ZS5hZGRQbHVyYWxSdWxlKHdvcmQsICckMCcpO1xuICAgIHBsdXJhbGl6ZS5hZGRTaW5ndWxhclJ1bGUod29yZCwgJyQwJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBpcnJlZ3VsYXIgd29yZCBkZWZpbml0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2luZ2xlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbHVyYWxcbiAgICovXG4gIHBsdXJhbGl6ZS5hZGRJcnJlZ3VsYXJSdWxlID0gZnVuY3Rpb24gKHNpbmdsZSwgcGx1cmFsKSB7XG4gICAgcGx1cmFsID0gcGx1cmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgc2luZ2xlID0gc2luZ2xlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpcnJlZ3VsYXJTaW5nbGVzW3NpbmdsZV0gPSBwbHVyYWw7XG4gICAgaXJyZWd1bGFyUGx1cmFsc1twbHVyYWxdID0gc2luZ2xlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcnJlZ3VsYXIgcnVsZXMuXG4gICAqL1xuICBbXG4gICAgLy8gUHJvbm91bnMuXG4gICAgWydJJywgJ3dlJ10sXG4gICAgWydtZScsICd1cyddLFxuICAgIFsnaGUnLCAndGhleSddLFxuICAgIFsnc2hlJywgJ3RoZXknXSxcbiAgICBbJ3RoZW0nLCAndGhlbSddLFxuICAgIFsnbXlzZWxmJywgJ291cnNlbHZlcyddLFxuICAgIFsneW91cnNlbGYnLCAneW91cnNlbHZlcyddLFxuICAgIFsnaXRzZWxmJywgJ3RoZW1zZWx2ZXMnXSxcbiAgICBbJ2hlcnNlbGYnLCAndGhlbXNlbHZlcyddLFxuICAgIFsnaGltc2VsZicsICd0aGVtc2VsdmVzJ10sXG4gICAgWyd0aGVtc2VsZicsICd0aGVtc2VsdmVzJ10sXG4gICAgWydpcycsICdhcmUnXSxcbiAgICBbJ3dhcycsICd3ZXJlJ10sXG4gICAgWydoYXMnLCAnaGF2ZSddLFxuICAgIFsndGhpcycsICd0aGVzZSddLFxuICAgIFsndGhhdCcsICd0aG9zZSddLFxuICAgIC8vIFdvcmRzIGVuZGluZyBpbiB3aXRoIGEgY29uc29uYW50IGFuZCBgb2AuXG4gICAgWydlY2hvJywgJ2VjaG9lcyddLFxuICAgIFsnZGluZ28nLCAnZGluZ29lcyddLFxuICAgIFsndm9sY2FubycsICd2b2xjYW5vZXMnXSxcbiAgICBbJ3Rvcm5hZG8nLCAndG9ybmFkb2VzJ10sXG4gICAgWyd0b3JwZWRvJywgJ3RvcnBlZG9lcyddLFxuICAgIC8vIEVuZHMgd2l0aCBgdXNgLlxuICAgIFsnZ2VudXMnLCAnZ2VuZXJhJ10sXG4gICAgWyd2aXNjdXMnLCAndmlzY2VyYSddLFxuICAgIC8vIEVuZHMgd2l0aCBgbWFgLlxuICAgIFsnc3RpZ21hJywgJ3N0aWdtYXRhJ10sXG4gICAgWydzdG9tYScsICdzdG9tYXRhJ10sXG4gICAgWydkb2dtYScsICdkb2dtYXRhJ10sXG4gICAgWydsZW1tYScsICdsZW1tYXRhJ10sXG4gICAgWydzY2hlbWEnLCAnc2NoZW1hdGEnXSxcbiAgICBbJ2FuYXRoZW1hJywgJ2FuYXRoZW1hdGEnXSxcbiAgICAvLyBPdGhlciBpcnJlZ3VsYXIgcnVsZXMuXG4gICAgWydveCcsICdveGVuJ10sXG4gICAgWydheGUnLCAnYXhlcyddLFxuICAgIFsnZGllJywgJ2RpY2UnXSxcbiAgICBbJ3llcycsICd5ZXNlcyddLFxuICAgIFsnZm9vdCcsICdmZWV0J10sXG4gICAgWydlYXZlJywgJ2VhdmVzJ10sXG4gICAgWydnb29zZScsICdnZWVzZSddLFxuICAgIFsndG9vdGgnLCAndGVldGgnXSxcbiAgICBbJ3F1aXonLCAncXVpenplcyddLFxuICAgIFsnaHVtYW4nLCAnaHVtYW5zJ10sXG4gICAgWydwcm9vZicsICdwcm9vZnMnXSxcbiAgICBbJ2NhcnZlJywgJ2NhcnZlcyddLFxuICAgIFsndmFsdmUnLCAndmFsdmVzJ10sXG4gICAgWydsb29leScsICdsb29pZXMnXSxcbiAgICBbJ3RoaWVmJywgJ3RoaWV2ZXMnXSxcbiAgICBbJ2dyb292ZScsICdncm9vdmVzJ10sXG4gICAgWydwaWNrYXhlJywgJ3BpY2theGVzJ10sXG4gICAgWydwYXNzZXJieScsICdwYXNzZXJzYnknXVxuICBdLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICByZXR1cm4gcGx1cmFsaXplLmFkZElycmVndWxhclJ1bGUocnVsZVswXSwgcnVsZVsxXSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBQbHVyYWxpemF0aW9uIHJ1bGVzLlxuICAgKi9cbiAgW1xuICAgIFsvcz8kL2ksICdzJ10sXG4gICAgWy9bXlxcdTAwMDAtXFx1MDA3Rl0kL2ksICckMCddLFxuICAgIFsvKFteYWVpb3VdZXNlKSQvaSwgJyQxJ10sXG4gICAgWy8oYXh8dGVzdClpcyQvaSwgJyQxZXMnXSxcbiAgICBbLyhhbGlhc3xbXmFvdV11c3x0W2xtXWFzfGdhc3xyaXMpJC9pLCAnJDFlcyddLFxuICAgIFsvKGVbbW5ddSlzPyQvaSwgJyQxcyddLFxuICAgIFsvKFtebF1pYXN8W2FlaW91XWxhc3xbZWp6cl1hc3xbaXVdYW0pJC9pLCAnJDEnXSxcbiAgICBbLyhhbHVtbnxzeWxsYWJ8dmlyfHJhZGl8bnVjbGV8ZnVuZ3xjYWN0fHN0aW11bHx0ZXJtaW58YmFjaWxsfGZvY3x1dGVyfGxvY3xzdHJhdCkoPzp1c3xpKSQvaSwgJyQxaSddLFxuICAgIFsvKGFsdW1ufGFsZ3x2ZXJ0ZWJyKSg/OmF8YWUpJC9pLCAnJDFhZSddLFxuICAgIFsvKHNlcmFwaHxjaGVydWIpKD86aW0pPyQvaSwgJyQxaW0nXSxcbiAgICBbLyhoZXJ8YXR8Z3IpbyQvaSwgJyQxb2VzJ10sXG4gICAgWy8oYWdlbmR8YWRkZW5kfG1pbGxlbm5pfGRhdHxleHRyZW18YmFjdGVyaXxkZXNpZGVyYXR8c3RyYXR8Y2FuZGVsYWJyfGVycmF0fG92fHN5bXBvc2l8Y3VycmljdWx8YXV0b21hdHxxdW9yKSg/OmF8dW0pJC9pLCAnJDFhJ10sXG4gICAgWy8oYXBoZWxpfGh5cGVyYmF0fHBlcmloZWxpfGFzeW5kZXR8bm91bWVufHBoZW5vbWVufGNyaXRlcml8b3JnYW58cHJvbGVnb21lbnxoZWRyfGF1dG9tYXQpKD86YXxvbikkL2ksICckMWEnXSxcbiAgICBbL3NpcyQvaSwgJ3NlcyddLFxuICAgIFsvKD86KGtuaXx3aXxsaSlmZXwoYXJ8bHxlYXxlb3xvYXxob28pZikkL2ksICckMSQydmVzJ10sXG4gICAgWy8oW15hZWlvdXldfHF1KXkkL2ksICckMWllcyddLFxuICAgIFsvKFteY2hdW2llb11bbG5dKWV5JC9pLCAnJDFpZXMnXSxcbiAgICBbLyh4fGNofHNzfHNofHp6KSQvaSwgJyQxZXMnXSxcbiAgICBbLyhtYXRyfGNvZHxtdXJ8c2lsfHZlcnR8aW5kfGFwcGVuZCkoPzppeHxleCkkL2ksICckMWljZXMnXSxcbiAgICBbL1xcYigoPzp0aXQpP218bCkoPzppY2V8b3VzZSkkL2ksICckMWljZSddLFxuICAgIFsvKHBlKSg/OnJzb258b3BsZSkkL2ksICckMW9wbGUnXSxcbiAgICBbLyhjaGlsZCkoPzpyZW4pPyQvaSwgJyQxcmVuJ10sXG4gICAgWy9lYXV4JC9pLCAnJDAnXSxcbiAgICBbL21bYWVdbiQvaSwgJ21lbiddLFxuICAgIFsndGhvdScsICd5b3UnXVxuICBdLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICByZXR1cm4gcGx1cmFsaXplLmFkZFBsdXJhbFJ1bGUocnVsZVswXSwgcnVsZVsxXSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBTaW5ndWxhcml6YXRpb24gcnVsZXMuXG4gICAqL1xuICBbXG4gICAgWy9zJC9pLCAnJ10sXG4gICAgWy8oc3MpJC9pLCAnJDEnXSxcbiAgICBbLyh3aXxrbml8KD86YWZ0ZXJ8aGFsZnxoaWdofGxvd3xtaWR8bm9ufG5pZ2h0fFteXFx3XXxeKWxpKXZlcyQvaSwgJyQxZmUnXSxcbiAgICBbLyhhcnwoPzp3b3xbYWVdKWx8W2VvXVthb10pdmVzJC9pLCAnJDFmJ10sXG4gICAgWy9pZXMkL2ksICd5J10sXG4gICAgWy9cXGIoW3BsXXx6b21ifCg/Om5lY2t8Y3Jvc3MpP3R8Y29sbHxmYWVyfGZvb2R8Z2VufGdvb258Z3JvdXB8bGFzc3x0YWxrfGdvYWx8Y3V0KWllcyQvaSwgJyQxaWUnXSxcbiAgICBbL1xcYihtb258c21pbClpZXMkL2ksICckMWV5J10sXG4gICAgWy9cXGIoKD86dGl0KT9tfGwpaWNlJC9pLCAnJDFvdXNlJ10sXG4gICAgWy8oc2VyYXBofGNoZXJ1YilpbSQvaSwgJyQxJ10sXG4gICAgWy8oeHxjaHxzc3xzaHx6enx0dG98Z298Y2hvfGFsaWFzfFteYW91XXVzfHRbbG1dYXN8Z2FzfCg/OmhlcnxhdHxncilvfFthZWlvdV1yaXMpKD86ZXMpPyQvaSwgJyQxJ10sXG4gICAgWy8oYW5hbHl8ZGlhZ25vfHBhcmVudGhlfHByb2dub3xzeW5vcHx0aGV8ZW1waGF8Y3JpfG5lKSg/OnNpc3xzZXMpJC9pLCAnJDFzaXMnXSxcbiAgICBbLyhtb3ZpZXx0d2VsdmV8YWJ1c2V8ZVttbl11KXMkL2ksICckMSddLFxuICAgIFsvKHRlc3QpKD86aXN8ZXMpJC9pLCAnJDFpcyddLFxuICAgIFsvKGFsdW1ufHN5bGxhYnx2aXJ8cmFkaXxudWNsZXxmdW5nfGNhY3R8c3RpbXVsfHRlcm1pbnxiYWNpbGx8Zm9jfHV0ZXJ8bG9jfHN0cmF0KSg/OnVzfGkpJC9pLCAnJDF1cyddLFxuICAgIFsvKGFnZW5kfGFkZGVuZHxtaWxsZW5uaXxkYXR8ZXh0cmVtfGJhY3Rlcml8ZGVzaWRlcmF0fHN0cmF0fGNhbmRlbGFicnxlcnJhdHxvdnxzeW1wb3NpfGN1cnJpY3VsfHF1b3IpYSQvaSwgJyQxdW0nXSxcbiAgICBbLyhhcGhlbGl8aHlwZXJiYXR8cGVyaWhlbGl8YXN5bmRldHxub3VtZW58cGhlbm9tZW58Y3JpdGVyaXxvcmdhbnxwcm9sZWdvbWVufGhlZHJ8YXV0b21hdClhJC9pLCAnJDFvbiddLFxuICAgIFsvKGFsdW1ufGFsZ3x2ZXJ0ZWJyKWFlJC9pLCAnJDFhJ10sXG4gICAgWy8oY29kfG11cnxzaWx8dmVydHxpbmQpaWNlcyQvaSwgJyQxZXgnXSxcbiAgICBbLyhtYXRyfGFwcGVuZClpY2VzJC9pLCAnJDFpeCddLFxuICAgIFsvKHBlKShyc29ufG9wbGUpJC9pLCAnJDFyc29uJ10sXG4gICAgWy8oY2hpbGQpcmVuJC9pLCAnJDEnXSxcbiAgICBbLyhlYXUpeD8kL2ksICckMSddLFxuICAgIFsvbWVuJC9pLCAnbWFuJ11cbiAgXS5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgcmV0dXJuIHBsdXJhbGl6ZS5hZGRTaW5ndWxhclJ1bGUocnVsZVswXSwgcnVsZVsxXSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBVbmNvdW50YWJsZSBydWxlcy5cbiAgICovXG4gIFtcbiAgICAvLyBTaW5ndWxhciB3b3JkcyB3aXRoIG5vIHBsdXJhbHMuXG4gICAgJ2FkdWx0aG9vZCcsXG4gICAgJ2FkdmljZScsXG4gICAgJ2FnZW5kYScsXG4gICAgJ2FpZCcsXG4gICAgJ2FpcmNyYWZ0JyxcbiAgICAnYWxjb2hvbCcsXG4gICAgJ2FtbW8nLFxuICAgICdhbmFseXRpY3MnLFxuICAgICdhbmltZScsXG4gICAgJ2F0aGxldGljcycsXG4gICAgJ2F1ZGlvJyxcbiAgICAnYmlzb24nLFxuICAgICdibG9vZCcsXG4gICAgJ2JyZWFtJyxcbiAgICAnYnVmZmFsbycsXG4gICAgJ2J1dHRlcicsXG4gICAgJ2NhcnAnLFxuICAgICdjYXNoJyxcbiAgICAnY2hhc3NpcycsXG4gICAgJ2NoZXNzJyxcbiAgICAnY2xvdGhpbmcnLFxuICAgICdjb2QnLFxuICAgICdjb21tZXJjZScsXG4gICAgJ2Nvb3BlcmF0aW9uJyxcbiAgICAnY29ycHMnLFxuICAgICdkZWJyaXMnLFxuICAgICdkaWFiZXRlcycsXG4gICAgJ2RpZ2VzdGlvbicsXG4gICAgJ2VsaycsXG4gICAgJ2VuZXJneScsXG4gICAgJ2VxdWlwbWVudCcsXG4gICAgJ2V4Y3JldGlvbicsXG4gICAgJ2V4cGVydGlzZScsXG4gICAgJ2Zpcm13YXJlJyxcbiAgICAnZmxvdW5kZXInLFxuICAgICdmdW4nLFxuICAgICdnYWxsb3dzJyxcbiAgICAnZ2FyYmFnZScsXG4gICAgJ2dyYWZmaXRpJyxcbiAgICAnaGFyZHdhcmUnLFxuICAgICdoZWFkcXVhcnRlcnMnLFxuICAgICdoZWFsdGgnLFxuICAgICdoZXJwZXMnLFxuICAgICdoaWdoamlua3MnLFxuICAgICdob21ld29yaycsXG4gICAgJ2hvdXNld29yaycsXG4gICAgJ2luZm9ybWF0aW9uJyxcbiAgICAnamVhbnMnLFxuICAgICdqdXN0aWNlJyxcbiAgICAna3Vkb3MnLFxuICAgICdsYWJvdXInLFxuICAgICdsaXRlcmF0dXJlJyxcbiAgICAnbWFjaGluZXJ5JyxcbiAgICAnbWFja2VyZWwnLFxuICAgICdtYWlsJyxcbiAgICAnbWVkaWEnLFxuICAgICdtZXdzJyxcbiAgICAnbW9vc2UnLFxuICAgICdtdXNpYycsXG4gICAgJ211ZCcsXG4gICAgJ21hbmdhJyxcbiAgICAnbmV3cycsXG4gICAgJ29ubHknLFxuICAgICdwZXJzb25uZWwnLFxuICAgICdwaWtlJyxcbiAgICAncGxhbmt0b24nLFxuICAgICdwbGllcnMnLFxuICAgICdwb2xpY2UnLFxuICAgICdwb2xsdXRpb24nLFxuICAgICdwcmVtaXNlcycsXG4gICAgJ3JhaW4nLFxuICAgICdyZXNlYXJjaCcsXG4gICAgJ3JpY2UnLFxuICAgICdzYWxtb24nLFxuICAgICdzY2lzc29ycycsXG4gICAgJ3NlcmllcycsXG4gICAgJ3Nld2FnZScsXG4gICAgJ3NoYW1ibGVzJyxcbiAgICAnc2hyaW1wJyxcbiAgICAnc29mdHdhcmUnLFxuICAgICdzcGVjaWVzJyxcbiAgICAnc3RhZmYnLFxuICAgICdzd2luZScsXG4gICAgJ3Rlbm5pcycsXG4gICAgJ3RyYWZmaWMnLFxuICAgICd0cmFuc3BvcnRhdGlvbicsXG4gICAgJ3Ryb3V0JyxcbiAgICAndHVuYScsXG4gICAgJ3dlYWx0aCcsXG4gICAgJ3dlbGZhcmUnLFxuICAgICd3aGl0aW5nJyxcbiAgICAnd2lsZGViZWVzdCcsXG4gICAgJ3dpbGRsaWZlJyxcbiAgICAneW91JyxcbiAgICAvcG9rW2XDqV1tb24kL2ksXG4gICAgLy8gUmVnZXhlcy5cbiAgICAvW15hZWlvdV1lc2UkL2ksIC8vIFwiY2hpbmVzZVwiLCBcImphcGFuZXNlXCJcbiAgICAvZGVlciQvaSwgLy8gXCJkZWVyXCIsIFwicmVpbmRlZXJcIlxuICAgIC9maXNoJC9pLCAvLyBcImZpc2hcIiwgXCJibG93ZmlzaFwiLCBcImFuZ2VsZmlzaFwiXG4gICAgL21lYXNsZXMkL2ksXG4gICAgL29baXVdcyQvaSwgLy8gXCJjYXJuaXZvcm91c1wiXG4gICAgL3BveCQvaSwgLy8gXCJjaGlja3BveFwiLCBcInNtYWxscG94XCJcbiAgICAvc2hlZXAkL2lcbiAgXS5mb3JFYWNoKHBsdXJhbGl6ZS5hZGRVbmNvdW50YWJsZVJ1bGUpO1xuXG4gIHJldHVybiBwbHVyYWxpemU7XG59KTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDUyMTQzODYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NTIxNDM4NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NTIxNDM4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NTIxNDM4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDUyMTQzODYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDUyMTQzODYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9NYXRyaWNlcy9FZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzUwYjU0NzYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjNTBiNTQ3NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjNTBiNTQ3NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjNTBiNTQ3NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzUwYjU0NzYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzUwYjU0NzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9NYXRyaWNlcy9TaGFyZWRGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtYXRyaXgtcGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBhZ2UtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImxheWVyLWdyb3VwXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJFZGl0IE1hdHJpeFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmZvcm1cbiAgICAgICAgPyBfYyhcInNoYXJlZC1mb3JtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBfdm0uaWQsXG4gICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgICAgICBtYXRyaXg6IF92bS5tYXRyaXgsXG4gICAgICAgICAgICAgIHN1Ym1pdDogX3ZtLnN1Ym1pdCxcbiAgICAgICAgICAgICAgbWF0cmljZXM6IF92bS5tYXRyaWNlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS4kbXEgIT0gXCJzbVwiXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcIm1hdHJpY2VzXCIgfSwgdmFyaWFudDogXCJzZWNvbmRhcnlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZm9ybS5oYXNDaGFuZ2VzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwic2lkZWJhci1yaWdodFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzaWRlYmFyXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGlkOiBcIm1hdHJpeC1zaWRlYmFyXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNpZGViYXItc2VjdGlvblwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaWQ6IFwibWF0cml4X3BhbmVsX3N0YXR1c1wiLCB0YWJpbmRleDogXCItMVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInVpLXRvZ2dsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWF0cml4LXN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVscDogX3ZtLmZvcm0uc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiVG9nZ2xlIHRvIGRpc2FibGUgdGhpcyBtYXRyaXguXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJUb2dnbGUgdG8gZW5hYmxlIHRoaXMgbWF0cml4LlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidHJ1ZS12YWx1ZVwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZmFsc2UtdmFsdWVcIjogMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic3RhdHVzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNpZGViYXItc2VjdGlvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIm1hdHJpeF9wYW5lbF9hcHBlYXJhbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFwcGVhcmFuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAgICAgXCJDaG9vc2Ugd2hlcmUgdG8gc2hvdyB0aGlzIG1hdHJpeCBhbmQgaG93IHRvIHJlcHJlc2VudCBpdC5cIixcbiAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1aS10b2dnbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm1hdHJpeC1zaWRlYmFyLXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNpZGViYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTaG93IGluIFNpZGViYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInRydWUtdmFsdWVcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlLXZhbHVlXCI6IDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2lkZWJhcixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzaWRlYmFyXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zaWRlYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ1aS10b2dnbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm1hdHJpeC1xdWlja2xpbmstc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicXVpY2tsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2hvdyBhcyBRdWlja2xpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInRydWUtdmFsdWVcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICBcImZhbHNlLXZhbHVlXCI6IDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucXVpY2tsaW5rLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInF1aWNrbGlua1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucXVpY2tsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpY29uLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWF0cml4LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIGljb25zLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVscDogXCJDaG9vc2UgYW4gaWNvbiB0aGF0IGJlc3QgcmVwcmVzZW50cyB5b3VyIG1hdHJpeC5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiaWNvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImljb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaWNvbixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJpY29uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLm1hdHJpeFxuICAgICAgICAgICAgICAgID8gX2MoXCJzdGF0dXMtY2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZW50cnk6IF92bS5tYXRyaXgsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWF0cml4X3BhbmVsX3N0YXR1c19jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcIm1hdHJpeF9wYW5lbF9nZW5lcmFsXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJHZW5lcmFsIEluZm9ybWF0aW9uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgXCJHZW5lcmFsIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgY29sbGVjdGlvbiBhbmQgd2hhdCBpdCBtYW5hZ2VzLlwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCBsZzp3LTEvMlwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVpLWlucHV0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIm1hdHJpeC1uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiV2hhdCBzaG91bGQgdGhpcyBtYXRyaXggYmUgY2FsbGVkP1wiLFxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsIGxnOnctMS8yXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidWktc2x1Zy1ncm91cFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJtYXRyaXgtaGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWxwOiBcIkEgZGV2ZWxvcGVyLWZyaWVuZGx5IGlkZW50aWZpZXIuXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlbGltaXRlcjogXCJfXCIsXG4gICAgICAgICAgICAgICAgICAgIHdhdGNoOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiaGFuZGxlXCIpLFxuICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImhhbmRsZVwiKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJoYW5kbGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVpLXRleHRhcmVhLWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcIm1hdHJpeC1kZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgXCJHaXZlIGEgc2hvcnQgZGVzY3JpcHRpb24gb2Ygd2hhdCB0aGlzIG1hdHJpeCB3aWxsIG1hbmFnZSBhbmQgc3RvcmUuXCIsXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImRlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZGVzY3JpcHRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1aS1zZWxlY3QtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwibWF0cml4LXR5cGVcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlR5cGVcIixcbiAgICAgICAgICAgICAgaGVscDogXCJXaGF0IHR5cGUgb2YgbWF0cml4IHdpbGwgdGhpcyBiZT9cIixcbiAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImNvbGxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2luZ2xlXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogXCJzaW5nbGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInR5cGVcIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwidHlwZVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50eXBlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidHlwZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50eXBlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWktc2VsZWN0LWdyb3VwXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcIm1hdHJpeC1wYXJlbnQtaWRcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJwYXJlbnRfaWRcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiUGFyZW50IE1hdHJpeFwiLFxuICAgICAgICAgICAgICBoZWxwOiBcIlNob3VsZCB0aGlzIG1hdHJpeCBiZWxvbmcgdG8gYW5vdGhlcj9cIixcbiAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnBhcmVudE9wdGlvbnMsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJwYXJlbnRfaWRcIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwicGFyZW50X2lkXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhcmVudF9pZCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhcmVudF9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXJlbnRfaWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwibWF0cml4X3BhbmVsX2N1c3RvbWl6YXRpb25zXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJDdXN0b21pemF0aW9uc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ29uZmlndXJlIHRoZSB2YXJpb3VzIGN1c3RvbWl6YXRpb25zIG9wdGlvbnMuXCIsXG4gICAgICAgICAgICB0YWJpbmRleDogXCItMVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJtYXRyaXgtbmFtZS1sYWJlbFwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVfbGFiZWxcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZSBMYWJlbFwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJOYW1lXCIsXG4gICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgXCJJZiB5b3UnZCBsaWtlLCB5b3UgbWF5IGN1c3RvbWl6ZSB0aGUgbGFiZWwgdXNlZCBmb3IgeW91ciBlbnRyeSBuYW1lcy5cIixcbiAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVfbGFiZWxcIiksXG4gICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwibmFtZV9sYWJlbFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lX2xhYmVsLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZV9sYWJlbFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lX2xhYmVsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwibWF0cml4LXJlZmVyZW5jZS1zaW5ndWxhclwiLFxuICAgICAgICAgICAgICBuYW1lOiBcInJlZmVyZW5jZV9zaW5ndWxhclwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJTaW5ndWxhciBSZWZlcmVuY2VcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5zaW5ndWxhclJlZmVyZW5jZSxcbiAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICBcIldoYXQgd291bGQgeW91IGxpa2UgdG8gcmVmZXJlbmNlIHRoaXMgYXMgaW4gc2luZ3VsYXIgZm9ybT8gQnkgZGVmYXVsdCB3aWxsIHRyeSB0byBndWVzcyBmcm9tIHRoZSBuYW1lLiBSZXN1bHRzIG1heSB2YXJ5LlwiLFxuICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicmVmZXJlbmNlX3Npbmd1bGFyXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInJlZmVyZW5jZV9zaW5ndWxhclwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZWZlcmVuY2Vfc2luZ3VsYXIsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyZWZlcmVuY2Vfc2luZ3VsYXJcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVmZXJlbmNlX3Npbmd1bGFyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwibWF0cml4LXJlZmVyZW5jZS1wbHVyYWxcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJyZWZlcmVuY2VfcGx1cmFsXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlBsdXJhbCBSZWZlcmVuY2VcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5wbHVyYWxSZWZlcmVuY2UsXG4gICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgXCJXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIHJlZmVyZW5jZSB0aGlzIGFzIGluIHBsdXJhbCBmb3JtPyBCeSBkZWZhdWx0IHdpbGwgdHJ5IHRvIGd1ZXNzIGZyb20gdGhlIG5hbWUuIFJlc3VsdHMgbWF5IHZhcnkuXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJyZWZlcmVuY2VfcGx1cmFsXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInJlZmVyZW5jZV9wbHVyYWxcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucmVmZXJlbmNlX3BsdXJhbCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJlZmVyZW5jZV9wbHVyYWxcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVmZXJlbmNlX3BsdXJhbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZm9ybS50eXBlID09IFwiY29sbGVjdGlvblwiXG4gICAgICAgICAgICA/IF9jKFwidWktdG9nZ2xlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibWF0cml4LXNob3ctbmFtZS1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93X25hbWVfZmllbGRcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNob3cgbmFtZSBmaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgaGVscDogIV92bS5mb3JtLnNob3dfbmFtZV9maWVsZFxuICAgICAgICAgICAgICAgICAgICA/IFwiQXV0by1nZW5lcmF0ZSBhIG5hbWUgdXNpbmcgdGhlIGZvcm1hdCBpbiB0aGUgZmllbGQgYmVsb3cuXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkluY2x1ZGUgYSBuYW1lIGZpZWxkIG9uIHRoaXMgbWF0cml4LlwiLFxuICAgICAgICAgICAgICAgICAgXCJ0cnVlLXZhbHVlXCI6IDEsXG4gICAgICAgICAgICAgICAgICBcImZhbHNlLXZhbHVlXCI6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2hvd19uYW1lX2ZpZWxkLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzaG93X25hbWVfZmllbGRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zaG93X25hbWVfZmllbGRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmZvcm0uc2hvd19uYW1lX2ZpZWxkXG4gICAgICAgICAgICA/IF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBtb25vc3BhY2VkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgaWQ6IFwibWF0cml4LW5hbWUtZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVfZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lIEZvcm1hdFwiLFxuICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgXCJXaGF0IGZvcm1hdCB3b3VsZCB5b3UgbGlrZSB5b3VyIGdlbmVyYXRlZCBuYW1lcyBhbmQgc2x1Z3MgdG8gZm9sbG93P1wiLFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibmFtZV9mb3JtYXRcIiksXG4gICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm5hbWVfZm9ybWF0XCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWVfZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lX2Zvcm1hdFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVfZm9ybWF0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VjdGlvbi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwibWF0cml4X3BhbmVsX3JvdXRpbmdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIlJvdXRpbmdcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICBcIkNvbmZpZ3VyZSBob3cgZW50cmllcyB3aXRoaW4gdGhlIGNvbGxlY3Rpb24gd2lsbCBiZSBhY2Nlc3NlZCBvbiB0aGUgZnJvbnRlbmQuXCIsXG4gICAgICAgICAgICB0YWJpbmRleDogXCItMVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ1aS1pbnB1dC1ncm91cFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJtYXRyaXgtcm91dGVcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJSb3V0ZVwiLFxuICAgICAgICAgICAgICBoZWxwOiBcIldoZW4gdGhlIFVSSSBtYXRjaGVzIHRoaXMgcGF0dGVybi4uLlwiLFxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJyb3V0ZVwiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJyb3V0ZVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yb3V0ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJvdXRlXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJvdXRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWktaW5wdXQtZ3JvdXBcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwibWF0cml4LXRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwidGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgaGVscDogXCJSZW5kZXIgdGhpcyB0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJ0ZW1wbGF0ZVwiKSxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJ0ZW1wbGF0ZVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInRlbXBsYXRlXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnRlbXBsYXRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb24tY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcIm1hdHJpeF9wYW5lbF9ibHVlcHJpbnRcIixcbiAgICAgICAgICAgIGdyaWQ6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6IFwiQmx1ZXByaW50XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgXCJDcmVhdGUgdGhlIGNvbnRlbnQgYmx1ZXByaW50IGZvciB0aGlzIG1hdHJpeCBieSBhZGRpbmcgcGFuZWwgc2VjdGlvbnMgYW5kIGZpZWxkcyB0byBlaXRoZXIgdGhlIHBhZ2UgYm9keSBvciBwYWdlIHNpZGViYXIuXCIsXG4gICAgICAgICAgICB0YWJpbmRleDogXCItMVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJsdWVwcmludFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImJsdWVwcmludC1hcmVhXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50czogX3ZtLnBsYWNlbWVudHMsXG4gICAgICAgICAgICAgICAgICBhcmVhOiBcImJvZHlcIixcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJvZHlcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zZWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic2VjdGlvbnNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zZWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJibHVlcHJpbnQtYXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmx1ZXByaW50X19jb2wtLXNpZGViYXJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50czogX3ZtLnBsYWNlbWVudHMsXG4gICAgICAgICAgICAgICAgICBhcmVhOiBcInNpZGViYXJcIixcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNpZGViYXJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zZWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic2VjdGlvbnNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zZWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=