(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/User/Field.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/User/Field.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _interfaces_UserManager_Browse_User_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/interfaces/UserManager/Browse/User.vue */ "./resources/js/interfaces/UserManager/Browse/User.vue");
/* harmony import */ var _interfaces_UserManager_Selection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/interfaces/UserManager/Selection.vue */ "./resources/js/interfaces/UserManager/Selection.vue");
/* harmony import */ var _interfaces_UserManager_Actions_Role_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/interfaces/UserManager/Actions/Role.vue */ "./resources/js/interfaces/UserManager/Actions/Role.vue");
/* harmony import */ var _interfaces_UserManager_Actions_Search_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/interfaces/UserManager/Actions/Search.vue */ "./resources/js/interfaces/UserManager/Actions/Search.vue");
/* harmony import */ var _interfaces_UserManager_Actions_Sort_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/interfaces/UserManager/Actions/Sort.vue */ "./resources/js/interfaces/UserManager/Actions/Sort.vue");
/* harmony import */ var _interfaces_UserManager_Actions_View_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/interfaces/UserManager/Actions/View.vue */ "./resources/js/interfaces/UserManager/Actions/View.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'user-fieldtype',
  components: {
    'user-card': _interfaces_UserManager_Browse_User_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'user-selection': _interfaces_UserManager_Selection_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'role-action': _interfaces_UserManager_Actions_Role_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'search-action': _interfaces_UserManager_Actions_Search_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'sort-action': _interfaces_UserManager_Actions_Sort_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'view-action': _interfaces_UserManager_Actions_View_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  mixins: [__webpack_require__(/*! @/mixins/userselector */ "./resources/js/mixins/userselector.js")["default"]],
  data: function data() {
    return {
      requestOpen: false,
      modalOpen: false,
      selection: []
    };
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    }
  },
  watch: {
    loading: function loading(isLoading) {
      var _this = this;

      this.$nextTick(function () {
        if (isLoading) {
          _this.destroySelector();
        } else {
          _this.loadSelector(_this.$el.querySelector('.selectables'));

          if (_this.requestOpen) {
            _this.modalOpen = true;
            _this.requestOpen = false;
          }
        }
      });
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    loading: 'usermanager/getLoading',
    users: 'usermanager/getUsers'
  })), {}, {
    selected: {
      get: function get() {
        return this.value || [];
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    },
    selectionLimit: function selectionLimit() {
      return Number(this.field.settings.limit) || Infinity;
    },
    addLimit: function addLimit() {
      return this.selectionLimit - this.selection.length;
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchUsers: 'usermanager/fetchUsers'
  })), {}, {
    push: function push() {
      var _this2 = this;

      _.forEach(this.selectedUsers, function (id) {
        return _this2.add(id);
      });
    },
    add: function add(id) {
      if (this.addLimit > 0) {
        var exists = _.find(this.selection, ['id', id]);

        var user = _.find(this.users, ['id', id]);

        if (!exists) {
          this.selection.push(user);
        }
      }
    },
    open: function open() {
      this.fetchUsers();
      this.selection = _toConsumableArray(this.selected);
      this.requestOpen = true;
    },
    close: function close() {
      this.clearSelection();
      this.selection = [];
      this.modalOpen = false;
    },
    reject: function reject() {
      this.close();
    },
    accept: function accept() {
      this.selected = this.selection;
      this.close();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/Role.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/UserManager/Actions/Role.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
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
  name: 'user-manager-role-action',
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    role: 'usermanager/getRole',
    roles: 'usermanager/getRoles'
  })), {}, {
    options: function options() {
      var options = {};

      _.forEach(this.roles, function (role) {
        options[role.slug] = role.name;
      });

      return options;
    }
  }),
  watch: {
    role: function role(value) {
      this.fetchUsers();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchUsers: 'usermanager/fetchUsers',
    setRole: 'usermanager/setRole'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/Search.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/UserManager/Actions/Search.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'user-manager-search-action',
  computed: {
    search: {
      get: function get() {
        return this.$store.state.usermanager.search;
      },
      set: function set(value) {
        this.setSearch(value);
      }
    }
  },
  watch: {
    search: function search(value) {
      this.fetchUsers();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchUsers: 'usermanager/fetchUsers',
    setSearch: 'usermanager/setSearch'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/Sort.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/UserManager/Actions/Sort.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
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
  name: 'user-manager-sort-action',
  data: function data() {
    return {
      options: {
        name: 'Name',
        email: 'Email',
        created_at: 'Creation Date'
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    direction: 'usermanager/getDirection',
    sort: 'usermanager/getSort'
  })),
  watch: {
    direction: function direction(value) {
      this.fetchUsers();
    },
    sort: function sort(value) {
      this.fetchUsers();
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    toggleDirection: 'usermanager/toggleDirection',
    fetchUsers: 'usermanager/fetchUsers',
    setDirection: 'usermanager/setDirection',
    setSort: 'usermanager/setSort'
  })), {}, {
    sortBy: function sortBy(key) {
      if (this.sort === key) {
        this.toggleDirection();
      } else {
        this.setSort(key);
        this.setDirection('asc');
      }
    },
    sortIcon: function sortIcon(key) {
      if (this.sort === key) {
        if (this.direction === 'asc') {
          return 'sort-amount-down';
        } else {
          return 'sort-amount-up';
        }
      }

      return 'bars';
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/View.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/UserManager/Actions/View.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
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
  name: 'user-manager-view-action',
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    view: 'usermanager/getView'
  })),
  watch: {
    view: function view(value) {
      this.fetchUsers();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchUsers: 'usermanager/fetchUsers',
    toggleView: 'usermanager/toggleView'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Browse/User.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/UserManager/Browse/User.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'user-manager-user',
  props: {
    user: {
      type: Object,
      required: true
    },
    isSelectable: {
      type: Boolean,
      "default": true
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    selected: 'usermanager/getSelected',
    view: 'usermanager/getView'
  })), {}, {
    isSelected: function isSelected() {
      return _.includes(this.selected, this.user.id);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Selection.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/UserManager/Selection.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    selection: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    },
    addLimit: function addLimit() {
      return this.limit - this.selection.length;
    }
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    limit: {
      type: Number,
      "default": Infinity
    },
    hasHeader: {
      type: Boolean,
      "default": true
    }
  },
  methods: {
    remove: function remove(id) {
      this.selection = _.filter(this.selection, function (item) {
        return item.id !== id;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/User/Field.vue?vue&type=template&id=fedb54aa&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/User/Field.vue?vue&type=template&id=fedb54aa& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        "label",
        { staticClass: "form__label", attrs: { for: _vm.field.handle } },
        [_vm._v(_vm._s(_vm.field.name))]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-start justify-between" },
        [
          _c(
            "div",
            { staticClass: "w-1/2" },
            [
              _c(
                "ui-button",
                {
                  attrs: { disabled: _vm.requestOpen },
                  on: { click: _vm.open }
                },
                [
                  _c("fa-icon", {
                    staticClass: "mr-1",
                    attrs: { icon: ["fas", "plus-circle"] }
                  }),
                  _vm._v(" Manage Users\n\t\t\t\t")
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("user-selection", {
            staticClass: "w-1/2",
            attrs: { limit: _vm.selectionLimit, hasHeader: false },
            model: {
              value: _vm.selected,
              callback: function($$v) {
                _vm.selected = $$v
              },
              expression: "selected"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "ui-modal",
        {
          attrs: {
            name: "user-manager",
            "no-header": "",
            "no-footer": "",
            "extra-large": ""
          },
          model: {
            value: _vm.modalOpen,
            callback: function($$v) {
              _vm.modalOpen = $$v
            },
            expression: "modalOpen"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "side-container" },
              [
                _c("user-selection", {
                  attrs: { limit: _vm.selectionLimit },
                  on: { reject: _vm.reject, accept: _vm.accept },
                  model: {
                    value: _vm.selection,
                    callback: function($$v) {
                      _vm.selection = $$v
                    },
                    expression: "selection"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "content-container" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card__body" }, [
                  _c("div", { staticClass: "toolbar" }, [
                    _c(
                      "div",
                      { staticClass: "toolbar__group" },
                      [
                        _c(
                          "ui-button",
                          {
                            attrs: { icon: "" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.push($event)
                              }
                            }
                          },
                          [
                            _c("fa-icon", {
                              staticClass: "icon",
                              attrs: { icon: "arrow-alt-circle-left" }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "toolbar__group toolbar__group--grow" },
                      [_c("search-action")],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "toolbar__group" },
                      [
                        _c("role-action"),
                        _vm._v(" "),
                        _c("sort-action"),
                        _vm._v(" "),
                        _c("view-action")
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "gallery-container selectables" }, [
                  _c(
                    "div",
                    { staticClass: "gallery border-b border-gray-200 pb-2" },
                    _vm._l(_vm.users, function(user) {
                      return _c("user-card", {
                        key: user.id,
                        attrs: { user: user },
                        on: {
                          dblclick: function($event) {
                            return _vm.add(user.id)
                          }
                        }
                      })
                    }),
                    1
                  )
                ])
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/Role.vue?vue&type=template&id=3b84b23c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/UserManager/Actions/Role.vue?vue&type=template&id=3b84b23c& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "ui-dropdown",
    {
      attrs: { id: "role-filters" },
      scopedSlots: _vm._u([
        {
          key: "menu",
          fn: function() {
            return [
              _c(
                "ui-dropdown-link",
                {
                  key: "default",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.setRole(null)
                    }
                  }
                },
                [_vm._v("Everyone")]
              ),
              _vm._v(" "),
              _vm._l(_vm.options, function(role, key) {
                return _c(
                  "ui-dropdown-link",
                  {
                    key: key,
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.setRole(key)
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t" + _vm._s(role) + "\n\t\t")]
                )
              })
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _c("fa-icon", {
        staticClass: "icon",
        attrs: { icon: ["fas", "user-tag"] }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "hidden md:inline" }, [
        _vm._v(_vm._s(_vm.options[_vm.role] || "Everyone"))
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/Search.vue?vue&type=template&id=294ddaee&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/UserManager/Actions/Search.vue?vue&type=template&id=294ddaee& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "field__control" }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.search,
          expression: "search"
        }
      ],
      staticClass: "field__input",
      attrs: { type: "search", name: "search", placeholder: "Search..." },
      domProps: { value: _vm.search },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.search = $event.target.value
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/Sort.vue?vue&type=template&id=a3135938&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/UserManager/Actions/Sort.vue?vue&type=template&id=a3135938& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "ui-dropdown",
    {
      attrs: { id: "sort-filters" },
      scopedSlots: _vm._u([
        {
          key: "menu",
          fn: function() {
            return _vm._l(_vm.options, function(value, key) {
              return _c(
                "ui-dropdown-link",
                {
                  key: key,
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.sortBy(key)
                    }
                  }
                },
                [
                  _c("fa-icon", {
                    staticClass: "icon",
                    attrs: { icon: ["fas", _vm.sortIcon(key)] }
                  }),
                  _vm._v("\n\t\t\t" + _vm._s(value) + "\n\t\t")
                ],
                1
              )
            })
          },
          proxy: true
        }
      ])
    },
    [
      _c("fa-icon", {
        staticClass: "icon",
        attrs: { icon: ["fas", _vm.sortIcon(_vm.sort)] }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "hidden md:inline" }, [
        _vm._v(_vm._s(_vm.options[_vm.sort]))
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/View.vue?vue&type=template&id=daa0862a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/UserManager/Actions/View.vue?vue&type=template&id=daa0862a& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "buttons" }, [
    _c(
      "div",
      { staticClass: "buttons__group" },
      [
        _c(
          "ui-button",
          {
            attrs: { icon: "", disabled: _vm.view == "list" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.toggleView("list")
              }
            }
          },
          [
            _c("fa-icon", {
              staticClass: "fa-fw",
              attrs: { icon: ["fas", "bars"] }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "ui-button",
          {
            attrs: { icon: "", disabled: _vm.view == "grid" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.toggleView("grid")
              }
            }
          },
          [
            _c("fa-icon", {
              staticClass: "fa-fw",
              attrs: { icon: ["fas", "th-large"] }
            })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Browse/User.vue?vue&type=template&id=3cdb222c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/UserManager/Browse/User.vue?vue&type=template&id=3cdb222c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    {
      class: [_vm.view == "grid" ? "gallery-wrapper" : "gallery-wrapper--row"]
    },
    [
      _c(
        "div",
        {
          staticClass: "gallery-item",
          class: {
            "gallery-item--selected selectable--selected": _vm.isSelected,
            selectable: _vm.isSelectable
          },
          attrs: { "data-selection": _vm.user.id },
          on: {
            dblclick: function($event) {
              return _vm.$emit("dblclick")
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "h-full w-full text-gray-300 flex items-center justify-center"
            },
            [
              _c("fa-icon", {
                staticClass: "fa-fw",
                class: [_vm.view == "grid" ? "fa-3x" : "fa-2x"],
                attrs: { icon: ["fas", "user"] }
              })
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "gallery-subtitle" }, [
        _c("span", [_vm._v(_vm._s(_vm.user.name))])
      ]),
      _vm._v(" "),
      _vm.view == "list"
        ? _c("div", { staticClass: "gallery-text" }, [
            _vm.user.roles.length
              ? _c("span", [_vm._v(_vm._s(_vm.user.roles[0].name))])
              : _c("span", [_vm._v("--")])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.view == "list"
        ? _c("div", { staticClass: "gallery-text" }, [
            _vm._v(
              "\n\t\t\t" +
                _vm._s(
                  _vm.$moment(_vm.user.created_at).format("MMM Do, YYYY")
                ) +
                "\n\t\t"
            )
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Selection.vue?vue&type=template&id=5d27f330&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/interfaces/UserManager/Selection.vue?vue&type=template&id=5d27f330& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card h-full" }, [
    _vm.hasHeader
      ? _c(
          "div",
          {
            staticClass:
              "flex items-center justify-between border-b border-gray-200 p-3"
          },
          [
            _c(
              "ui-button",
              {
                attrs: { variant: "warning" },
                on: {
                  click: function($event) {
                    return _vm.$emit("reject")
                  }
                }
              },
              [
                _c("fa-icon", {
                  staticClass: "mr-2",
                  attrs: { icon: ["fas", "times"] }
                }),
                _vm._v(" Reject")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "ui-button",
              {
                attrs: { variant: "info" },
                on: {
                  click: function($event) {
                    return _vm.$emit("accept")
                  }
                }
              },
              [
                _vm._v("Accept "),
                _c("fa-icon", {
                  staticClass: "ml-2",
                  attrs: { icon: ["fas", "check"] }
                })
              ],
              1
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.selection.length > 0
      ? _c(
          "div",
          [
            _c(
              "ui-sortable-list",
              {
                staticClass: "sortable-list",
                model: {
                  value: _vm.selection,
                  callback: function($$v) {
                    _vm.selection = $$v
                  },
                  expression: "selection"
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "w-full p-3" },
                  _vm._l(_vm.selection, function(item) {
                    return _c("ui-sortable-item", { key: item.id }, [
                      _c("div", { staticClass: "flex items-center py-2" }, [
                        _c(
                          "div",
                          { staticClass: "w-1/12" },
                          [
                            _c(
                              "ui-sortable-handle",
                              { staticClass: "cursor-move" },
                              [
                                _c("fa-icon", {
                                  staticClass: "handle fa-fw text-gray-400",
                                  attrs: { icon: "ellipsis-v" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "h-full w-3/12 text-gray-300 flex items-center justify-center"
                          },
                          [
                            _c("fa-icon", {
                              staticClass: "fa-fw fa-2x",
                              attrs: { icon: ["fas", "user"] }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "gallery-text w-6/12" }, [
                          _c("div", [_vm._v(_vm._s(item.name))])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "w-2/12 text-right" },
                          [
                            _c(
                              "ui-button",
                              {
                                attrs: { variant: "danger" },
                                on: {
                                  click: function($event) {
                                    return _vm.remove(item.id)
                                  }
                                }
                              },
                              [
                                _c("fa-icon", {
                                  attrs: { icon: ["fas", "trash"] }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  }),
                  1
                )
              ]
            ),
            _vm._v(" "),
            _vm.addLimit <= 0
              ? _c(
                  "div",
                  { staticClass: "text-sm italic text-danger-600 text-center" },
                  [_vm._v("\n\t\t\tSelection limit reached\n\t\t")]
                )
              : _vm._e()
          ],
          1
        )
      : _c(
          "div",
          {
            staticClass:
              "h-full flex flex-col justify-center items-center text-5xl text-gray-300"
          },
          [
            _c("fa-icon", {
              staticClass: "fa-fw fa-3x",
              attrs: { icon: ["fas", "users"] }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "text-lg py-2 text-gray-500" }, [
              _vm._v("Select some users...")
            ])
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/User/Field.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Fieldtypes/User/Field.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_fedb54aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=fedb54aa& */ "./resources/js/components/Fieldtypes/User/Field.vue?vue&type=template&id=fedb54aa&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/User/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_fedb54aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_fedb54aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/User/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/User/Field.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/User/Field.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/User/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/User/Field.vue?vue&type=template&id=fedb54aa&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/User/Field.vue?vue&type=template&id=fedb54aa& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_fedb54aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=fedb54aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/User/Field.vue?vue&type=template&id=fedb54aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_fedb54aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_fedb54aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/interfaces/UserManager/Actions/Role.vue":
/*!**************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Actions/Role.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Role_vue_vue_type_template_id_3b84b23c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Role.vue?vue&type=template&id=3b84b23c& */ "./resources/js/interfaces/UserManager/Actions/Role.vue?vue&type=template&id=3b84b23c&");
/* harmony import */ var _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Role.vue?vue&type=script&lang=js& */ "./resources/js/interfaces/UserManager/Actions/Role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Role_vue_vue_type_template_id_3b84b23c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Role_vue_vue_type_template_id_3b84b23c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/interfaces/UserManager/Actions/Role.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/interfaces/UserManager/Actions/Role.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Actions/Role.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Role.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/Role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/interfaces/UserManager/Actions/Role.vue?vue&type=template&id=3b84b23c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Actions/Role.vue?vue&type=template&id=3b84b23c& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_3b84b23c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Role.vue?vue&type=template&id=3b84b23c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/Role.vue?vue&type=template&id=3b84b23c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_3b84b23c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_3b84b23c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/interfaces/UserManager/Actions/Search.vue":
/*!****************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Actions/Search.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search_vue_vue_type_template_id_294ddaee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=294ddaee& */ "./resources/js/interfaces/UserManager/Actions/Search.vue?vue&type=template&id=294ddaee&");
/* harmony import */ var _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js& */ "./resources/js/interfaces/UserManager/Actions/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Search_vue_vue_type_template_id_294ddaee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Search_vue_vue_type_template_id_294ddaee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/interfaces/UserManager/Actions/Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/interfaces/UserManager/Actions/Search.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Actions/Search.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/interfaces/UserManager/Actions/Search.vue?vue&type=template&id=294ddaee&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Actions/Search.vue?vue&type=template&id=294ddaee& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_294ddaee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=template&id=294ddaee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/Search.vue?vue&type=template&id=294ddaee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_294ddaee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_294ddaee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/interfaces/UserManager/Actions/Sort.vue":
/*!**************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Actions/Sort.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sort_vue_vue_type_template_id_a3135938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sort.vue?vue&type=template&id=a3135938& */ "./resources/js/interfaces/UserManager/Actions/Sort.vue?vue&type=template&id=a3135938&");
/* harmony import */ var _Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sort.vue?vue&type=script&lang=js& */ "./resources/js/interfaces/UserManager/Actions/Sort.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sort_vue_vue_type_template_id_a3135938___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sort_vue_vue_type_template_id_a3135938___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/interfaces/UserManager/Actions/Sort.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/interfaces/UserManager/Actions/Sort.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Actions/Sort.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sort.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/Sort.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/interfaces/UserManager/Actions/Sort.vue?vue&type=template&id=a3135938&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Actions/Sort.vue?vue&type=template&id=a3135938& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_template_id_a3135938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sort.vue?vue&type=template&id=a3135938& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/Sort.vue?vue&type=template&id=a3135938&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_template_id_a3135938___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_template_id_a3135938___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/interfaces/UserManager/Actions/View.vue":
/*!**************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Actions/View.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_daa0862a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=daa0862a& */ "./resources/js/interfaces/UserManager/Actions/View.vue?vue&type=template&id=daa0862a&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/interfaces/UserManager/Actions/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_daa0862a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_daa0862a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/interfaces/UserManager/Actions/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/interfaces/UserManager/Actions/View.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Actions/View.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/interfaces/UserManager/Actions/View.vue?vue&type=template&id=daa0862a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Actions/View.vue?vue&type=template&id=daa0862a& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_daa0862a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=daa0862a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Actions/View.vue?vue&type=template&id=daa0862a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_daa0862a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_daa0862a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/interfaces/UserManager/Browse/User.vue":
/*!*************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Browse/User.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_3cdb222c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=3cdb222c& */ "./resources/js/interfaces/UserManager/Browse/User.vue?vue&type=template&id=3cdb222c&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/interfaces/UserManager/Browse/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_3cdb222c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_3cdb222c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/interfaces/UserManager/Browse/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/interfaces/UserManager/Browse/User.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Browse/User.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Browse/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/interfaces/UserManager/Browse/User.vue?vue&type=template&id=3cdb222c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Browse/User.vue?vue&type=template&id=3cdb222c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_3cdb222c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=3cdb222c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Browse/User.vue?vue&type=template&id=3cdb222c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_3cdb222c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_3cdb222c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/interfaces/UserManager/Selection.vue":
/*!***********************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Selection.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Selection_vue_vue_type_template_id_5d27f330___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selection.vue?vue&type=template&id=5d27f330& */ "./resources/js/interfaces/UserManager/Selection.vue?vue&type=template&id=5d27f330&");
/* harmony import */ var _Selection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Selection.vue?vue&type=script&lang=js& */ "./resources/js/interfaces/UserManager/Selection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Selection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Selection_vue_vue_type_template_id_5d27f330___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Selection_vue_vue_type_template_id_5d27f330___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/interfaces/UserManager/Selection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/interfaces/UserManager/Selection.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Selection.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Selection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Selection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/interfaces/UserManager/Selection.vue?vue&type=template&id=5d27f330&":
/*!******************************************************************************************!*\
  !*** ./resources/js/interfaces/UserManager/Selection.vue?vue&type=template&id=5d27f330& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_template_id_5d27f330___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Selection.vue?vue&type=template&id=5d27f330& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/interfaces/UserManager/Selection.vue?vue&type=template&id=5d27f330&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_template_id_5d27f330___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_template_id_5d27f330___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/userselector.js":
/*!*********************************************!*\
  !*** ./resources/js/mixins/userselector.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var DragSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! DragSelect */ "./node_modules/DragSelect/docs/DragSelect.js");
/* harmony import */ var DragSelect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(DragSelect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      selector: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    selectedUsers: 'usermanager/getSelected'
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    toggleSelection: 'usermanager/toggleSelection',
    clearSelection: 'usermanager/clearSelection'
  })), {}, {
    loadSelector: function loadSelector(area) {
      var _this = this;

      this.selector = new DragSelect__WEBPACK_IMPORTED_MODULE_0___default.a({
        area: area,
        selectables: area.querySelectorAll('.selectable'),
        callback: function callback(elements) {
          _this.clearSelection();

          _.forEach(elements, function (el) {
            return _this.toggleSelection(parseInt(el.dataset.selection));
          });
        },
        // Start dragging selector..
        onDragStart: function onDragStart(el) {
          // Prevent selector from selecting
          if (el.target.classList.contains('selectable--selected') || el.target.closest('.selectable--selected')) {
            _this.selector["break"]();
          }
        }
      });
    },
    destroySelector: function destroySelector() {
      if (this.selector) {
        this.selector.stop();
      }
    }
  })
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Vc2VyL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ludGVyZmFjZXMvVXNlck1hbmFnZXIvQWN0aW9ucy9Sb2xlLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ludGVyZmFjZXMvVXNlck1hbmFnZXIvQWN0aW9ucy9TZWFyY2gudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NvcnQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9BY3Rpb25zL1ZpZXcudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9Ccm93c2UvVXNlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9pbnRlcmZhY2VzL1VzZXJNYW5hZ2VyL1NlbGVjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Vc2VyL0ZpZWxkLnZ1ZT80MzFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9pbnRlcmZhY2VzL1VzZXJNYW5hZ2VyL0FjdGlvbnMvUm9sZS52dWU/OTU5MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NlYXJjaC52dWU/OWE2MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NvcnQudnVlP2Q0OWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ludGVyZmFjZXMvVXNlck1hbmFnZXIvQWN0aW9ucy9WaWV3LnZ1ZT81ZjQ0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9pbnRlcmZhY2VzL1VzZXJNYW5hZ2VyL0Jyb3dzZS9Vc2VyLnZ1ZT8zOGZlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9pbnRlcmZhY2VzL1VzZXJNYW5hZ2VyL1NlbGVjdGlvbi52dWU/MDU5MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1VzZXIvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvVXNlci9GaWVsZC52dWU/ODdkYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1VzZXIvRmllbGQudnVlP2JhODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ludGVyZmFjZXMvVXNlck1hbmFnZXIvQWN0aW9ucy9Sb2xlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9BY3Rpb25zL1JvbGUudnVlPzQ0N2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ludGVyZmFjZXMvVXNlck1hbmFnZXIvQWN0aW9ucy9Sb2xlLnZ1ZT8xNzA3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9pbnRlcmZhY2VzL1VzZXJNYW5hZ2VyL0FjdGlvbnMvU2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NlYXJjaC52dWU/OTA3ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NlYXJjaC52dWU/MjMwZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NvcnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9pbnRlcmZhY2VzL1VzZXJNYW5hZ2VyL0FjdGlvbnMvU29ydC52dWU/ZDNiMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NvcnQudnVlP2E0NTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ludGVyZmFjZXMvVXNlck1hbmFnZXIvQWN0aW9ucy9WaWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9BY3Rpb25zL1ZpZXcudnVlPzNjMDgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ludGVyZmFjZXMvVXNlck1hbmFnZXIvQWN0aW9ucy9WaWV3LnZ1ZT83YmFhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9pbnRlcmZhY2VzL1VzZXJNYW5hZ2VyL0Jyb3dzZS9Vc2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9Ccm93c2UvVXNlci52dWU/NjFkZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9Ccm93c2UvVXNlci52dWU/OWI1YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9TZWxlY3Rpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9pbnRlcmZhY2VzL1VzZXJNYW5hZ2VyL1NlbGVjdGlvbi52dWU/YzI4NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9TZWxlY3Rpb24udnVlPzBlZmYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy91c2Vyc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiZGF0YSIsInNlbGVjdG9yIiwiY29tcHV0ZWQiLCJtYXBHZXR0ZXJzIiwic2VsZWN0ZWRVc2VycyIsIm1ldGhvZHMiLCJtYXBBY3Rpb25zIiwidG9nZ2xlU2VsZWN0aW9uIiwiY2xlYXJTZWxlY3Rpb24iLCJsb2FkU2VsZWN0b3IiLCJhcmVhIiwiRHJhZ1NlbGVjdCIsInNlbGVjdGFibGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNhbGxiYWNrIiwiZWxlbWVudHMiLCJfIiwiZm9yRWFjaCIsImVsIiwicGFyc2VJbnQiLCJkYXRhc2V0Iiwic2VsZWN0aW9uIiwib25EcmFnU3RhcnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNsb3Nlc3QiLCJkZXN0cm95U2VsZWN0b3IiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSx3QkFEQTtBQUdBO0FBQ0EsZ0dBREE7QUFFQSxtR0FGQTtBQUdBLG1HQUhBO0FBSUEsdUdBSkE7QUFLQSxtR0FMQTtBQU1BO0FBTkEsR0FIQTtBQVlBLFdBQ0Esb0dBREEsQ0FaQTtBQWdCQSxNQWhCQSxrQkFnQkE7QUFDQTtBQUNBLHdCQURBO0FBRUEsc0JBRkE7QUFHQTtBQUhBO0FBS0EsR0F0QkE7QUF3QkE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxpQkFEQTtBQUVBLHFCQUZBO0FBR0E7QUFBQTtBQUFBO0FBSEE7QUFOQSxHQXhCQTtBQXFDQTtBQUNBLFdBREEsbUJBQ0EsU0FEQSxFQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BWEE7QUFZQTtBQWRBLEdBckNBO0FBc0RBLDRDQUNBO0FBQ0EscUNBREE7QUFFQTtBQUZBLElBREE7QUFNQTtBQUNBLFNBREEsaUJBQ0E7QUFDQTtBQUNBLE9BSEE7QUFLQSxTQUxBLGVBS0EsS0FMQSxFQUtBO0FBQ0E7QUFDQTtBQVBBLEtBTkE7QUFnQkEsa0JBaEJBLDRCQWdCQTtBQUNBO0FBQ0EsS0FsQkE7QUFvQkEsWUFwQkEsc0JBb0JBO0FB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RUFBRUEsSUFEd0I7QUFFOUJFLG1CQUFXLEVBQUVGLElBQUksQ0FBQ0csZ0JBQUwsQ0FBc0IsYUFBdEIsQ0FGaUI7QUFHOUJDLGdCQUFRLEVBQUUsa0JBQUNDLFFBQUQsRUFBYztBQUN2QixlQUFJLENBQUNQLGNBQUw7O0FBRUFRLFdBQUMsQ0FBQ0MsT0FBRixDQUFVRixRQUFWLEVBQW9CLFVBQUNHLEVBQUQ7QUFBQSxtQkFBUSxLQUFJLENBQUNYLGVBQUwsQ0FBcUJZLFFBQVEsQ0FBQ0QsRUFBRSxDQUFDRSxPQUFILENBQVdDLFNBQVosQ0FBN0IsQ0FBUjtBQUFBLFdBQXBCO0FBQ0EsU0FQNkI7QUFTOUI7QUFDQUMsbUJBQVcsRUFBRSxxQkFBQ0osRUFBRCxFQUFRO0FBQ3BCO0FBQ0EsY0FBSUEsRUFBRSxDQUFDSyxNQUFILENBQVVDLFNBQVYsQ0FBb0JDLFFBQXBCLENBQTZCLHNCQUE3QixLQUF3RFAsRUFBRSxDQUFDSyxNQUFILENBQVVHLE9BQVYsQ0FBa0IsdUJBQWxCLENBQTVELEVBQXdHO0FBQ3ZHLGlCQUFJLENBQUN6QixRQUFMO0FBQ0E7QUFDRDtBQWY2QixPQUFmLENBQWhCO0FBaUJBLEtBeEJRO0FBMEJUMEIsbUJBMUJTLDZCQTBCUztBQUNqQixVQUFJLEtBQUsxQixRQUFULEVBQW1CO0FBQ2xCLGFBQUtBLFFBQUwsQ0FBYzJCLElBQWQ7QUFDQTtBQUNEO0FBOUJRO0FBYkksQ0FBZixFIiwiZmlsZSI6ImpzL2NodW5rcy8xMC5qcz9pZD04ZWFmNTk3MDY2NDJhODE2NWI4YyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8bGFiZWwgOmZvcj1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj57eyBmaWVsZC5uYW1lIH19PC9sYWJlbD5cblxuXHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInctMS8yXCI+XG5cdFx0XHRcdDx1aS1idXR0b24gOmRpc2FibGVkPVwicmVxdWVzdE9wZW5cIiBAY2xpY2s9XCJvcGVuXCI+XG5cdFx0XHRcdFx0PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdwbHVzLWNpcmNsZSddXCIgY2xhc3M9XCJtci0xXCI+PC9mYS1pY29uPiBNYW5hZ2UgVXNlcnNcblx0XHRcdFx0PC91aS1idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PHVzZXItc2VsZWN0aW9uXG5cdFx0XHRcdGNsYXNzPVwidy0xLzJcIlxuXHRcdFx0XHQ6bGltaXQ9XCJzZWxlY3Rpb25MaW1pdFwiXG5cdFx0XHRcdDpoYXNIZWFkZXI9XCJmYWxzZVwiXG5cdFx0XHRcdHYtbW9kZWw9XCJzZWxlY3RlZFwiPlxuXHRcdFx0PC91c2VyLXNlbGVjdGlvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDwhLS0gVXNlciBNYW5hZ2VyIE1vZGFsIC0tPlxuXHRcdDx1aS1tb2RhbCBuYW1lPVwidXNlci1tYW5hZ2VyXCIgbm8taGVhZGVyIG5vLWZvb3RlciBleHRyYS1sYXJnZSB2LW1vZGVsPVwibW9kYWxPcGVuXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaWRlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDx1c2VyLXNlbGVjdGlvblxuXHRcdFx0XHRcdFx0OmxpbWl0PVwic2VsZWN0aW9uTGltaXRcIlxuXHRcdFx0XHRcdFx0QHJlamVjdD1cInJlamVjdFwiXG5cdFx0XHRcdFx0XHRAYWNjZXB0PVwiYWNjZXB0XCJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJzZWxlY3Rpb25cIj5cblx0XHRcdFx0XHQ8L3VzZXItc2VsZWN0aW9uPlxuXHRcdFx0ICAgXHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3M9XCJ0b29sYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0XHRcdDxkaXYgY2xhc3M9XCJ0b29sYmFyX19ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVpLWJ1dHRvbiBpY29uIEBjbGljay5wcmV2ZW50PVwicHVzaFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmEtaWNvbiBjbGFzcz1cImljb25cIiBpY29uPVwiYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCI+PC9mYS1pY29uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC91aS1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIFx0XHRcdDwvZGl2PlxuXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xiYXJfX2dyb3VwIHRvb2xiYXJfX2dyb3VwLS1ncm93XCI+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWFyY2gtYWN0aW9uPjwvc2VhcmNoLWFjdGlvbj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sYmFyX19ncm91cFwiPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFx0PHJvbGUtYWN0aW9uPjwvcm9sZS1hY3Rpb24+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQ8c29ydC1hY3Rpb24+PC9zb3J0LWFjdGlvbj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICBcdDx2aWV3LWFjdGlvbj48L3ZpZXctYWN0aW9uPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbGxlcnktY29udGFpbmVyIHNlbGVjdGFibGVzXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBwYi0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHVzZXItY2FyZFxuXHRcdFx0XHRcdFx0XHRcdFx0di1mb3I9XCJ1c2VyIGluIHVzZXJzXCJcblx0XHRcdFx0XHRcdFx0XHRcdDprZXk9XCJ1c2VyLmlkXCJcblx0XHRcdFx0XHRcdFx0XHRcdDp1c2VyPVwidXNlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRAZGJsY2xpY2s9XCJhZGQodXNlci5pZClcIj5cblx0XHRcdFx0XHRcdFx0XHQ8L3VzZXItY2FyZD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgIFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC91aS1tb2RhbD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuXHRpbXBvcnQgVXNlckNhcmQgICAgICBmcm9tICdAL2ludGVyZmFjZXMvVXNlck1hbmFnZXIvQnJvd3NlL1VzZXIudnVlJ1xuXHRpbXBvcnQgVXNlclNlbGVjdGlvbiBmcm9tICdAL2ludGVyZmFjZXMvVXNlck1hbmFnZXIvU2VsZWN0aW9uLnZ1ZSdcblxuXHRpbXBvcnQgUm9sZUFjdGlvbiAgICBmcm9tICdAL2ludGVyZmFjZXMvVXNlck1hbmFnZXIvQWN0aW9ucy9Sb2xlLnZ1ZSdcblx0aW1wb3J0IFNlYXJjaEFjdGlvbiAgZnJvbSAnQC9pbnRlcmZhY2VzL1VzZXJNYW5hZ2VyL0FjdGlvbnMvU2VhcmNoLnZ1ZSdcblx0aW1wb3J0IFNvcnRBY3Rpb24gICAgZnJvbSAnQC9pbnRlcmZhY2VzL1VzZXJNYW5hZ2VyL0FjdGlvbnMvU29ydC52dWUnXG5cdGltcG9ydCBWaWV3QWN0aW9uICAgIGZyb20gJ0AvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9BY3Rpb25zL1ZpZXcudnVlJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndXNlci1maWVsZHR5cGUnLFxuXG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0J3VzZXItY2FyZCc6ICAgICAgVXNlckNhcmQsXG5cdFx0XHQndXNlci1zZWxlY3Rpb24nOiBVc2VyU2VsZWN0aW9uLFxuXHRcdFx0J3JvbGUtYWN0aW9uJzogICAgUm9sZUFjdGlvbixcblx0XHRcdCdzZWFyY2gtYWN0aW9uJzogIFNlYXJjaEFjdGlvbixcblx0XHRcdCdzb3J0LWFjdGlvbic6ICAgIFNvcnRBY3Rpb24sXG5cdFx0XHQndmlldy1hY3Rpb24nOiAgICBWaWV3QWN0aW9uLFxuXHRcdH0sXG5cblx0XHRtaXhpbnM6IFtcblx0XHRcdHJlcXVpcmUoJ0AvbWl4aW5zL3VzZXJzZWxlY3RvcicpLmRlZmF1bHQsXG4gICAgICAgIF0sXG5cblx0XHRkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFx0cmVxdWVzdE9wZW46IGZhbHNlLFxuICAgICAgICAgICAgXHRtb2RhbE9wZW46IGZhbHNlLFxuICAgICAgICAgICAgXHRzZWxlY3Rpb246IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cdFx0cHJvcHM6IHtcblx0XHRcdGZpZWxkOiB7XG5cdFx0XHQgICAgdHlwZTogT2JqZWN0LFxuXHRcdFx0ICAgIHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0fSxcblxuXHRcdFx0dmFsdWU6IHtcblx0XHRcdFx0dHlwZTogQXJyYXksXG5cdFx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdFx0ZGVmYXVsdDogKCkgPT4gW10sXG5cdFx0XHR9LFxuXHRcdH0sXG5cblx0XHR3YXRjaDoge1xuXHRcdFx0bG9hZGluZyhpc0xvYWRpbmcpIHtcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChpc0xvYWRpbmcpIHtcblx0XHRcdFx0XHRcdHRoaXMuZGVzdHJveVNlbGVjdG9yKClcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2FkU2VsZWN0b3IodGhpcy4kZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGFibGVzJykpXG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLnJlcXVlc3RPcGVuKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubW9kYWxPcGVuICAgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVxdWVzdE9wZW4gPSBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIFx0Li4ubWFwR2V0dGVycyh7XG4gICAgICAgIFx0XHRsb2FkaW5nOiAgICAgICAndXNlcm1hbmFnZXIvZ2V0TG9hZGluZycsXG4gICAgICAgIFx0XHR1c2VyczogICAgICAgICAndXNlcm1hbmFnZXIvZ2V0VXNlcnMnLFxuICAgICAgICBcdH0pLFxuXG5cdFx0XHRzZWxlY3RlZDoge1xuXHRcdFx0XHRnZXQoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWUgfHwgW11cblx0XHRcdFx0fSxcblxuXHRcdFx0XHRzZXQodmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWxlY3Rpb25MaW1pdCgpIHtcblx0XHRcdFx0cmV0dXJuIE51bWJlcih0aGlzLmZpZWxkLnNldHRpbmdzLmxpbWl0KSB8fCBJbmZpbml0eVxuXHRcdFx0fSxcblxuXHRcdFx0YWRkTGltaXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNlbGVjdGlvbkxpbWl0IC0gdGhpcy5zZWxlY3Rpb24ubGVuZ3RoXG5cdFx0XHR9XG4gICAgICAgIH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcblx0XHRcdFx0ZmV0Y2hVc2VyczogJ3VzZXJtYW5hZ2VyL2ZldGNoVXNlcnMnLFxuXHRcdFx0fSksXG5cblx0XHRcdHB1c2goKSB7XG5cdFx0XHRcdF8uZm9yRWFjaCh0aGlzLnNlbGVjdGVkVXNlcnMsIChpZCkgPT4gdGhpcy5hZGQoaWQpKVxuXHRcdFx0fSxcblxuXHRcdFx0YWRkKGlkKSB7XG5cdFx0XHRcdGlmICh0aGlzLmFkZExpbWl0ID4gMCkge1xuXHRcdFx0XHRcdGxldCBleGlzdHMgPSBfLmZpbmQodGhpcy5zZWxlY3Rpb24sIFsgJ2lkJywgaWQgXSlcblx0XHRcdFx0XHRsZXQgdXNlciAgID0gXy5maW5kKHRoaXMudXNlcnMsIFsgJ2lkJywgaWQgXSlcblxuXHRcdFx0XHRcdGlmICghIGV4aXN0cykge1xuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3Rpb24ucHVzaCh1c2VyKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0b3BlbigpIHtcblx0XHRcdFx0dGhpcy5mZXRjaFVzZXJzKClcblxuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbiA9IFsuLi50aGlzLnNlbGVjdGVkXVxuXHRcdFx0XHR0aGlzLnJlcXVlc3RPcGVuID0gdHJ1ZVxuXHRcdFx0fSxcblxuXHRcdFx0Y2xvc2UoKSB7XG5cdFx0XHRcdHRoaXMuY2xlYXJTZWxlY3Rpb24oKVxuXG5cdFx0XHRcdHRoaXMuc2VsZWN0aW9uID0gW11cblx0XHRcdFx0dGhpcy5tb2RhbE9wZW4gPSBmYWxzZVxuXHRcdFx0fSxcblxuXHRcdFx0cmVqZWN0KCkge1xuXHRcdFx0XHR0aGlzLmNsb3NlKClcblx0XHRcdH0sXG5cblx0XHRcdGFjY2VwdCgpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uXG5cdFx0XHRcdHRoaXMuY2xvc2UoKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8dWktZHJvcGRvd24gaWQ9XCJyb2xlLWZpbHRlcnNcIj5cblx0XHQ8ZmEtaWNvbiBjbGFzcz1cImljb25cIiA6aWNvbj1cIlsnZmFzJywgJ3VzZXItdGFnJ11cIj48L2ZhLWljb24+XG5cdFx0PHNwYW4gY2xhc3M9XCJoaWRkZW4gbWQ6aW5saW5lXCI+e3sgb3B0aW9uc1tyb2xlXSB8fCAnRXZlcnlvbmUnIH19PC9zcGFuPlxuXHRcdFxuXHRcdDx0ZW1wbGF0ZSB2LXNsb3Q6bWVudT5cblx0XHRcdDx1aS1kcm9wZG93bi1saW5rIGtleT1cImRlZmF1bHRcIiBAY2xpY2sucHJldmVudD1cInNldFJvbGUobnVsbClcIj5FdmVyeW9uZTwvdWktZHJvcGRvd24tbGluaz5cblxuXHRcdFx0PHVpLWRyb3Bkb3duLWxpbmsgdi1mb3I9XCIocm9sZSwga2V5KSBpbiBvcHRpb25zXCIgOmtleT1cImtleVwiIEBjbGljay5wcmV2ZW50PVwic2V0Um9sZShrZXkpXCI+XG5cdFx0XHRcdHt7IHJvbGUgfX1cblx0XHRcdDwvdWktZHJvcGRvd24tbGluaz5cblx0XHQ8L3RlbXBsYXRlPlxuXHQ8L3VpLWRyb3Bkb3duPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICd1c2VyLW1hbmFnZXItcm9sZS1hY3Rpb24nLFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xuXHRcdFx0XHRyb2xlOiAgJ3VzZXJtYW5hZ2VyL2dldFJvbGUnLFxuXHRcdFx0XHRyb2xlczogJ3VzZXJtYW5hZ2VyL2dldFJvbGVzJyxcdFx0XHRcblx0XHRcdH0pLFxuXG5cdFx0XHRvcHRpb25zKCkge1xuXHRcdFx0XHRsZXQgb3B0aW9ucyA9IHt9XG5cblx0XHRcdFx0Xy5mb3JFYWNoKHRoaXMucm9sZXMsIChyb2xlKSA9PiB7XG5cdFx0XHRcdFx0b3B0aW9uc1tyb2xlLnNsdWddID0gcm9sZS5uYW1lXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0cmV0dXJuIG9wdGlvbnNcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdHJvbGUodmFsdWUpIHtcblx0XHRcdFx0dGhpcy5mZXRjaFVzZXJzKClcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XG5cdFx0XHRcdGZldGNoVXNlcnM6ICd1c2VybWFuYWdlci9mZXRjaFVzZXJzJyxcblx0XHRcdFx0c2V0Um9sZTogICAgJ3VzZXJtYW5hZ2VyL3NldFJvbGUnLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImZpZWxkX19jb250cm9sXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJzZWFyY2hcIiBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiB2LW1vZGVsPVwic2VhcmNoXCIgY2xhc3M9XCJmaWVsZF9faW5wdXRcIj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ3VzZXItbWFuYWdlci1zZWFyY2gtYWN0aW9uJyxcblxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VybWFuYWdlci5zZWFyY2hcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgXHR0aGlzLnNldFNlYXJjaCh2YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHRzZWFyY2godmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoVXNlcnMoKVxuICAgICAgICAgICAgfSxcblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XG5cdFx0XHRcdGZldGNoVXNlcnM6ICd1c2VybWFuYWdlci9mZXRjaFVzZXJzJyxcblx0XHRcdFx0c2V0U2VhcmNoOiAgJ3VzZXJtYW5hZ2VyL3NldFNlYXJjaCdcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDx1aS1kcm9wZG93biBpZD1cInNvcnQtZmlsdGVyc1wiPlxuXHRcdDxmYS1pY29uIGNsYXNzPVwiaWNvblwiIDppY29uPVwiWydmYXMnLCBzb3J0SWNvbihzb3J0KV1cIj48L2ZhLWljb24+XG5cdFx0PHNwYW4gY2xhc3M9XCJoaWRkZW4gbWQ6aW5saW5lXCI+e3sgb3B0aW9uc1tzb3J0XSB9fTwvc3Bhbj5cblx0XHRcblx0XHQ8dGVtcGxhdGUgdi1zbG90Om1lbnU+XG5cdFx0XHQ8dWktZHJvcGRvd24tbGluayB2LWZvcj1cIih2YWx1ZSwga2V5KSBpbiBvcHRpb25zXCIgOmtleT1cImtleVwiIEBjbGljay5wcmV2ZW50PVwic29ydEJ5KGtleSlcIj5cblx0XHRcdFx0PGZhLWljb24gY2xhc3M9XCJpY29uXCIgOmljb249XCJbJ2ZhcycsIHNvcnRJY29uKGtleSldXCI+PC9mYS1pY29uPlxuXHRcdFx0XHR7eyB2YWx1ZSB9fVxuXHRcdFx0PC91aS1kcm9wZG93bi1saW5rPlxuXHRcdDwvdGVtcGxhdGU+XG5cdDwvdWktZHJvcGRvd24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ3VzZXItbWFuYWdlci1zb3J0LWFjdGlvbicsXG5cdFx0XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRuYW1lOiAnTmFtZScsXG5cdFx0XHRcdFx0ZW1haWw6ICdFbWFpbCcsXG5cdFx0XHRcdFx0Y3JlYXRlZF9hdDogJ0NyZWF0aW9uIERhdGUnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xuXHRcdFx0XHRkaXJlY3Rpb246ICd1c2VybWFuYWdlci9nZXREaXJlY3Rpb24nLFxuXHRcdFx0XHRzb3J0OiAgICAgICd1c2VybWFuYWdlci9nZXRTb3J0JyxcdFx0XHRcdFxuXHRcdFx0fSlcblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdGRpcmVjdGlvbih2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLmZldGNoVXNlcnMoKVxuXHRcdFx0fSxcblxuXHRcdFx0c29ydCh2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLmZldGNoVXNlcnMoKVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcblx0XHRcdFx0dG9nZ2xlRGlyZWN0aW9uOiAndXNlcm1hbmFnZXIvdG9nZ2xlRGlyZWN0aW9uJyxcblx0XHRcdFx0ZmV0Y2hVc2VyczogICAgICAndXNlcm1hbmFnZXIvZmV0Y2hVc2VycycsXG5cdFx0XHRcdHNldERpcmVjdGlvbjogICAgJ3VzZXJtYW5hZ2VyL3NldERpcmVjdGlvbicsXG5cdFx0XHRcdHNldFNvcnQ6ICAgICAgICAgJ3VzZXJtYW5hZ2VyL3NldFNvcnQnLCBcblx0XHRcdH0pLFxuXG5cdFx0XHRzb3J0Qnkoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc29ydCA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRGlyZWN0aW9uKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNvcnQoa2V5KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERpcmVjdGlvbignYXNjJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzb3J0SWNvbihrZXkpIHtcblx0XHRcdFx0aWYgKHRoaXMuc29ydCA9PT0ga2V5KSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09PSAnYXNjJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdzb3J0LWFtb3VudC1kb3duJ1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3NvcnQtYW1vdW50LXVwJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAnYmFycydcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uc19fZ3JvdXBcIj5cblx0XHRcdDx1aS1idXR0b24gaWNvbiBAY2xpY2sucHJldmVudD1cInRvZ2dsZVZpZXcoJ2xpc3QnKVwiIDpkaXNhYmxlZD1cInZpZXcgPT0gJ2xpc3QnXCI+XG5cdFx0XHRcdDxmYS1pY29uIGNsYXNzPVwiZmEtZndcIiA6aWNvbj1cIlsnZmFzJywgJ2JhcnMnXVwiPjwvZmEtaWNvbj5cblx0XHRcdDwvdWktYnV0dG9uPlxuXG5cdFx0XHQ8dWktYnV0dG9uIGljb24gQGNsaWNrLnByZXZlbnQ9XCJ0b2dnbGVWaWV3KCdncmlkJylcIiA6ZGlzYWJsZWQ9XCJ2aWV3ID09ICdncmlkJ1wiPlxuXHRcdFx0XHQ8ZmEtaWNvbiBjbGFzcz1cImZhLWZ3XCIgOmljb249XCJbJ2ZhcycsICd0aC1sYXJnZSddXCI+PC9mYS1pY29uPlxuXHRcdFx0PC91aS1idXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICd1c2VyLW1hbmFnZXItdmlldy1hY3Rpb24nLFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xuXHRcdFx0XHR2aWV3OiAndXNlcm1hbmFnZXIvZ2V0VmlldycsXHRcdFx0XHRcblx0XHRcdH0pXG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHR2aWV3KHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuZmV0Y2hVc2VycygpXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC4uLm1hcEFjdGlvbnMoe1xuXHRcdFx0XHRmZXRjaFVzZXJzOiAndXNlcm1hbmFnZXIvZmV0Y2hVc2VycycsXG5cdFx0XHRcdHRvZ2dsZVZpZXc6ICd1c2VybWFuYWdlci90b2dnbGVWaWV3Jyxcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXYgOmNsYXNzPVwiWyB2aWV3ID09ICdncmlkJyA/ICdnYWxsZXJ5LXdyYXBwZXInIDogJ2dhbGxlcnktd3JhcHBlci0tcm93JyBdXCI+XG5cdFx0PGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnZ2FsbGVyeS1pdGVtLS1zZWxlY3RlZCBzZWxlY3RhYmxlLS1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsICdzZWxlY3RhYmxlJzogaXNTZWxlY3RhYmxlIH1cIlxuICAgICAgICAgICAgQGRibGNsaWNrPVwiJGVtaXQoJ2RibGNsaWNrJylcIlxuICAgICAgICAgICAgOmRhdGEtc2VsZWN0aW9uPVwidXNlci5pZFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHctZnVsbCB0ZXh0LWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICBcdDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndXNlciddXCIgY2xhc3M9XCJmYS1md1wiIDpjbGFzcz1cIlsgdmlldyA9PSAnZ3JpZCcgPyAnZmEtM3gnIDogJ2ZhLTJ4J11cIj48L2ZhLWljb24+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXN1YnRpdGxlXCI+XG5cdFx0XHQ8c3Bhbj57eyB1c2VyLm5hbWUgfX08L3NwYW4+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ2FsbGVyeS10ZXh0XCIgdi1pZj1cInZpZXcgPT0gJ2xpc3QnXCI+XG5cdFx0XHQ8c3BhbiB2LWlmPVwidXNlci5yb2xlcy5sZW5ndGhcIj57eyB1c2VyLnJvbGVzWzBdLm5hbWUgfX08L3NwYW4+XG5cdFx0XHQ8c3BhbiB2LWVsc2U+LS08L3NwYW4+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ2FsbGVyeS10ZXh0XCIgdi1pZj1cInZpZXcgPT0gJ2xpc3QnXCI+XG5cdFx0XHR7eyAkbW9tZW50KHVzZXIuY3JlYXRlZF9hdCkuZm9ybWF0KCdNTU0gRG8sIFlZWVknKSB9fVxuXHRcdDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndXNlci1tYW5hZ2VyLXVzZXInLFxuXG5cdFx0cHJvcHM6IHtcblx0XHRcdHVzZXI6IHtcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdH0sXG5cbiAgICAgICAgICAgIGlzU2VsZWN0YWJsZToge1xuICAgICAgICAgICAgXHR0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgXHRkZWZhdWx0OiB0cnVlXG4gICAgICAgICAgICB9XG5cdFx0fSxcblxuXHRcdGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogJ3VzZXJtYW5hZ2VyL2dldFNlbGVjdGVkJyxcbiAgICAgICAgICAgICAgICB2aWV3OiAgICAgJ3VzZXJtYW5hZ2VyL2dldFZpZXcnLFxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIGlzU2VsZWN0ZWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXModGhpcy5zZWxlY3RlZCwgdGhpcy51c2VyLmlkKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImNhcmQgaC1mdWxsXCI+XG5cdFx0PGRpdiB2LWlmPVwiaGFzSGVhZGVyXCIgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHAtM1wiPlxuXHRcdFx0PHVpLWJ1dHRvbiBAY2xpY2s9XCIkZW1pdCgncmVqZWN0JylcIiB2YXJpYW50PVwid2FybmluZ1wiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndGltZXMnXVwiIGNsYXNzPVwibXItMlwiPjwvZmEtaWNvbj4gUmVqZWN0PC91aS1idXR0b24+XG5cdFx0XHQ8dWktYnV0dG9uIEBjbGljaz1cIiRlbWl0KCdhY2NlcHQnKVwiIHZhcmlhbnQ9XCJpbmZvXCI+QWNjZXB0IDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2hlY2snXVwiIGNsYXNzPVwibWwtMlwiPjwvZmEtaWNvbj48L3VpLWJ1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgdi1pZj1cInNlbGVjdGlvbi5sZW5ndGggPiAwXCI+XG5cdFx0XHQ8dWktc29ydGFibGUtbGlzdCB2LW1vZGVsPVwic2VsZWN0aW9uXCIgY2xhc3M9XCJzb3J0YWJsZS1saXN0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LWZ1bGwgcC0zXCI+XG5cdFx0XHRcdFx0PHVpLXNvcnRhYmxlLWl0ZW0gdi1mb3I9XCJpdGVtIGluIHNlbGVjdGlvblwiIDprZXk9XCJpdGVtLmlkXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHktMlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy0xLzEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHVpLXNvcnRhYmxlLWhhbmRsZSBjbGFzcz1cImN1cnNvci1tb3ZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZmEtaWNvbiBpY29uPVwiZWxsaXBzaXMtdlwiIGNsYXNzPVwiaGFuZGxlIGZhLWZ3IHRleHQtZ3JheS00MDBcIj48L2ZhLWljb24+XG5cdFx0XHRcdFx0XHRcdFx0PC91aS1zb3J0YWJsZS1oYW5kbGU+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaC1mdWxsIHctMy8xMiB0ZXh0LWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG5cdFx0XHRcdCAgICAgICAgICAgIFx0PGZhLWljb24gOmljb249XCJbJ2ZhcycsICd1c2VyJ11cIiBjbGFzcz1cImZhLWZ3IGZhLTJ4XCI+PC9mYS1pY29uPlxuXHRcdFx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbGxlcnktdGV4dCB3LTYvMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2Pnt7IGl0ZW0ubmFtZSB9fTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctMi8xMiB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHVpLWJ1dHRvbiBAY2xpY2s9XCJyZW1vdmUoaXRlbS5pZClcIiB2YXJpYW50PVwiZGFuZ2VyXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICd0cmFzaCddXCI+PC9mYS1pY29uPjwvdWktYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvdWktc29ydGFibGUtaXRlbT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3VpLXNvcnRhYmxlLWxpc3Q+XG5cblx0XHRcdDxkaXYgdi1pZj1cImFkZExpbWl0IDw9IDBcIiBjbGFzcz1cInRleHQtc20gaXRhbGljIHRleHQtZGFuZ2VyLTYwMCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRTZWxlY3Rpb24gbGltaXQgcmVhY2hlZFxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IHYtZWxzZSBjbGFzcz1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LTV4bCB0ZXh0LWdyYXktMzAwXCI+XG5cdFx0XHQ8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3VzZXJzJ11cIiBjbGFzcz1cImZhLWZ3IGZhLTN4XCI+PC9mYS1pY29uPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJ0ZXh0LWxnIHB5LTIgdGV4dC1ncmF5LTUwMFwiPlNlbGVjdCBzb21lIHVzZXJzLi4uPC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0c2VsZWN0aW9uOiB7XG5cdFx0XHRcdGdldCgpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGFkZExpbWl0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5saW1pdCAtIHRoaXMuc2VsZWN0aW9uLmxlbmd0aFxuXHRcdFx0fSxcblx0XHR9LFxuXG5cdFx0cHJvcHM6IHtcblx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdHR5cGU6IEFycmF5LFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fSxcblxuXHRcdFx0bGltaXQ6IHtcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0XHRkZWZhdWx0OiBJbmZpbml0eVxuXHRcdFx0fSxcblxuXHRcdFx0aGFzSGVhZGVyOiB7XG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0cmVtb3ZlKGlkKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0aW9uID0gXy5maWx0ZXIodGhpcy5zZWxlY3Rpb24sIChpdGVtKSA9PiB7IHJldHVybiBpdGVtLmlkICE9PSBpZCB9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiwgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0gfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmZpZWxkLm5hbWUpKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTEvMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5yZXF1ZXN0T3BlbiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcGVuIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTFcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwicGx1cy1jaXJjbGVcIl0gfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTWFuYWdlIFVzZXJzXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidXNlci1zZWxlY3Rpb25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xLzJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGxpbWl0OiBfdm0uc2VsZWN0aW9uTGltaXQsIGhhc0hlYWRlcjogZmFsc2UgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWQgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ1aS1tb2RhbFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IFwidXNlci1tYW5hZ2VyXCIsXG4gICAgICAgICAgICBcIm5vLWhlYWRlclwiOiBcIlwiLFxuICAgICAgICAgICAgXCJuby1mb290ZXJcIjogXCJcIixcbiAgICAgICAgICAgIFwiZXh0cmEtbGFyZ2VcIjogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kYWxPcGVuLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0ubW9kYWxPcGVuID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RhbE9wZW5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2lkZS1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1c2VyLXNlbGVjdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBsaW1pdDogX3ZtLnNlbGVjdGlvbkxpbWl0IH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyByZWplY3Q6IF92bS5yZWplY3QsIGFjY2VwdDogX3ZtLmFjY2VwdCB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0aW9uID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvb2xiYXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b29sYmFyX19ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wdXNoKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJhcnJvdy1hbHQtY2lyY2xlLWxlZnRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG9vbGJhcl9fZ3JvdXAgdG9vbGJhcl9fZ3JvdXAtLWdyb3dcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNlYXJjaC1hY3Rpb25cIildLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvb2xiYXJfX2dyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInJvbGUtYWN0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic29ydC1hY3Rpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2aWV3LWFjdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LWNvbnRhaW5lciBzZWxlY3RhYmxlc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnkgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHBiLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnVzZXJzLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidXNlci1jYXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdXNlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHVzZXI6IHVzZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZCh1c2VyLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidWktZHJvcGRvd25cIixcbiAgICB7XG4gICAgICBhdHRyczogeyBpZDogXCJyb2xlLWZpbHRlcnNcIiB9LFxuICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwibWVudVwiLFxuICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWktZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldFJvbGUobnVsbClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkV2ZXJ5b25lXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLm9wdGlvbnMsIGZ1bmN0aW9uKHJvbGUsIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwidWktZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXRSb2xlKGtleSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XCIgKyBfdm0uX3Mocm9sZSkgKyBcIlxcblxcdFxcdFwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdKVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiLFxuICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ1c2VyLXRhZ1wiXSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoaWRkZW4gbWQ6aW5saW5lXCIgfSwgW1xuICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5vcHRpb25zW192bS5yb2xlXSB8fCBcIkV2ZXJ5b25lXCIpKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZF9fY29udHJvbFwiIH0sIFtcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzdGF0aWNDbGFzczogXCJmaWVsZF9faW5wdXRcIixcbiAgICAgIGF0dHJzOiB7IHR5cGU6IFwic2VhcmNoXCIsIG5hbWU6IFwic2VhcmNoXCIsIHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiIH0sXG4gICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNlYXJjaCB9LFxuICAgICAgb246IHtcbiAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ1aS1kcm9wZG93blwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7IGlkOiBcInNvcnQtZmlsdGVyc1wiIH0sXG4gICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJtZW51XCIsXG4gICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5fbChfdm0ub3B0aW9ucywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJ1aS1kcm9wZG93bi1saW5rXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNvcnRCeShrZXkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIF92bS5zb3J0SWNvbihrZXkpXSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFwiICsgX3ZtLl9zKHZhbHVlKSArIFwiXFxuXFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdKVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiLFxuICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgX3ZtLnNvcnRJY29uKF92bS5zb3J0KV0gfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGlkZGVuIG1kOmlubGluZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ub3B0aW9uc1tfdm0uc29ydF0pKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc19fZ3JvdXBcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIsIGRpc2FibGVkOiBfdm0udmlldyA9PSBcImxpc3RcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVWaWV3KFwibGlzdFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJiYXJzXCJdIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiwgZGlzYWJsZWQ6IF92bS52aWV3ID09IFwiZ3JpZFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZVZpZXcoXCJncmlkXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRoLWxhcmdlXCJdIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBjbGFzczogW192bS52aWV3ID09IFwiZ3JpZFwiID8gXCJnYWxsZXJ5LXdyYXBwZXJcIiA6IFwiZ2FsbGVyeS13cmFwcGVyLS1yb3dcIl1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1pdGVtXCIsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZ2FsbGVyeS1pdGVtLS1zZWxlY3RlZCBzZWxlY3RhYmxlLS1zZWxlY3RlZFwiOiBfdm0uaXNTZWxlY3RlZCxcbiAgICAgICAgICAgIHNlbGVjdGFibGU6IF92bS5pc1NlbGVjdGFibGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1zZWxlY3Rpb25cIjogX3ZtLnVzZXIuaWQgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZGJsY2xpY2tcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiaC1mdWxsIHctZnVsbCB0ZXh0LWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICBjbGFzczogW192bS52aWV3ID09IFwiZ3JpZFwiID8gXCJmYS0zeFwiIDogXCJmYS0yeFwiXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ1c2VyXCJdIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1zdWJ0aXRsZVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUpKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udmlldyA9PSBcImxpc3RcIlxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLnVzZXIucm9sZXMubGVuZ3RoXG4gICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnJvbGVzWzBdLm5hbWUpKV0pXG4gICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCItLVwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udmlldyA9PSBcImxpc3RcIlxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICBfdm0uJG1vbWVudChfdm0udXNlci5jcmVhdGVkX2F0KS5mb3JtYXQoXCJNTU0gRG8sIFlZWVlcIilcbiAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGgtZnVsbFwiIH0sIFtcbiAgICBfdm0uaGFzSGVhZGVyXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBwLTNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcIndhcm5pbmdcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJyZWplY3RcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGltZXNcIl0gfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBSZWplY3RcIilcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFjY2VwdFwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkFjY2VwdCBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNoZWNrXCJdIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uc2VsZWN0aW9uLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1aS1zb3J0YWJsZS1saXN0XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzb3J0YWJsZS1saXN0XCIsXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0aW9uID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHAtM1wiIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnNlbGVjdGlvbiwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ1aS1zb3J0YWJsZS1pdGVtXCIsIHsga2V5OiBpdGVtLmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyIHB5LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTEvMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLXNvcnRhYmxlLWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjdXJzb3ItbW92ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGFuZGxlIGZhLWZ3IHRleHQtZ3JheS00MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImVsbGlwc2lzLXZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoLWZ1bGwgdy0zLzEyIHRleHQtZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IGZhLTJ4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ1c2VyXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS10ZXh0IHctNi8xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyIHRleHQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcImRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmUoaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidHJhc2hcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5hZGRMaW1pdCA8PSAwXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIGl0YWxpYyB0ZXh0LWRhbmdlci02MDAgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFNlbGVjdGlvbiBsaW1pdCByZWFjaGVkXFxuXFx0XFx0XCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgZmEtM3hcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidXNlcnNcIl0gfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1sZyBweS0yIHRleHQtZ3JheS01MDBcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBzb21lIHVzZXJzLi4uXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmVkYjU0YWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2ZlZGI1NGFhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ZlZGI1NGFhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ZlZGI1NGFhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmVkYjU0YWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZmVkYjU0YWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvVXNlci9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZlZGI1NGFhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Sb2xlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjg0YjIzYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Sb2xlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUm9sZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNiODRiMjNjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNiODRiMjNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNiODRiMjNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Sb2xlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjg0YjIzYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYjg0YjIzYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ludGVyZmFjZXMvVXNlck1hbmFnZXIvQWN0aW9ucy9Sb2xlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUm9sZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUm9sZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUm9sZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2I4NGIyM2MmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjk0ZGRhZWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjk0ZGRhZWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjk0ZGRhZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjk0ZGRhZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjk0ZGRhZWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjk0ZGRhZWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9pbnRlcmZhY2VzL1VzZXJNYW5hZ2VyL0FjdGlvbnMvU2VhcmNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjk0ZGRhZWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWEzMTM1OTM4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Tb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYTMxMzU5MzgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTMxMzU5MzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTMxMzU5MzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWEzMTM1OTM4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2EzMTM1OTM4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvaW50ZXJmYWNlcy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NvcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tb3J0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMzEzNTkzOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGFhMDg2MmEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkYWEwODYyYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkYWEwODYyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkYWEwODYyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGFhMDg2MmEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZGFhMDg2MmEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9pbnRlcmZhY2VzL1VzZXJNYW5hZ2VyL0FjdGlvbnMvVmlldy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRhYTA4NjJhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zY2RiMjIyYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNjZGIyMjJjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNjZGIyMjJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNjZGIyMjJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zY2RiMjIyYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczY2RiMjIyYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ludGVyZmFjZXMvVXNlck1hbmFnZXIvQnJvd3NlL1VzZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zY2RiMjIyYyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZDI3ZjMzMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Ntcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1ZDI3ZjMzMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ZDI3ZjMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ZDI3ZjMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZDI3ZjMzMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZDI3ZjMzMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ludGVyZmFjZXMvVXNlck1hbmFnZXIvU2VsZWN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlbGVjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWQyN2YzMzAmXCIiLCJpbXBvcnQgRHJhZ1NlbGVjdCBmcm9tICdEcmFnU2VsZWN0J1xuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0b3I6IG51bGwsXG5cdFx0fVxuXHR9LFxuXG5cdGNvbXB1dGVkOiB7XG5cdFx0Li4ubWFwR2V0dGVycyh7XG5cdFx0XHRzZWxlY3RlZFVzZXJzOiAndXNlcm1hbmFnZXIvZ2V0U2VsZWN0ZWQnLFxuXHRcdH0pXG5cdH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgXHQuLi5tYXBBY3Rpb25zKHtcbiAgICAgICAgICAgIHRvZ2dsZVNlbGVjdGlvbjogJ3VzZXJtYW5hZ2VyL3RvZ2dsZVNlbGVjdGlvbicsXG4gICAgICAgICAgICBjbGVhclNlbGVjdGlvbjogICd1c2VybWFuYWdlci9jbGVhclNlbGVjdGlvbicsXG4gICAgICAgIH0pLFxuXG5cdFx0bG9hZFNlbGVjdG9yKGFyZWEpIHtcblx0XHRcdHRoaXMuc2VsZWN0b3IgPSBuZXcgRHJhZ1NlbGVjdCh7XG5cdFx0XHRcdGFyZWE6IGFyZWEsXG5cdFx0XHRcdHNlbGVjdGFibGVzOiBhcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RhYmxlJyksXG5cdFx0XHRcdGNhbGxiYWNrOiAoZWxlbWVudHMpID0+IHtcblx0XHRcdFx0XHR0aGlzLmNsZWFyU2VsZWN0aW9uKClcblxuXHRcdFx0XHRcdF8uZm9yRWFjaChlbGVtZW50cywgKGVsKSA9PiB0aGlzLnRvZ2dsZVNlbGVjdGlvbihwYXJzZUludChlbC5kYXRhc2V0LnNlbGVjdGlvbikpKVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFN0YXJ0IGRyYWdnaW5nIHNlbGVjdG9yLi5cblx0XHRcdFx0b25EcmFnU3RhcnQ6IChlbCkgPT4ge1xuXHRcdFx0XHRcdC8vIFByZXZlbnQgc2VsZWN0b3IgZnJvbSBzZWxlY3Rpbmdcblx0XHRcdFx0XHRpZiAoZWwudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0YWJsZS0tc2VsZWN0ZWQnKSB8fCBlbC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdGFibGUtLXNlbGVjdGVkJykpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0b3IuYnJlYWsoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdH0pXG5cdFx0fSxcblxuXHRcdGRlc3Ryb3lTZWxlY3RvcigpIHtcblx0XHRcdGlmICh0aGlzLnNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0b3Iuc3RvcCgpXG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9