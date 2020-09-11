(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Redactor/Field.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Redactor/Field.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_redactor_plugins_table_table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/../vendor/redactor/_plugins/table/table.js */ "./resources/vendor/redactor/_plugins/table/table.js");
/* harmony import */ var _vendor_redactor_plugins_table_table_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_redactor_plugins_table_table_js__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
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
  name: 'redactor-fieldtype',
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": ''
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Redactor/Field.vue?vue&type=template&id=51c85424&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Redactor/Field.vue?vue&type=template&id=51c85424& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("redactor", {
    attrs: {
      name: _vm.field.handle,
      label: _vm.field.name,
      help: _vm.field.help,
      placeholder: _vm.field.settings.placeholder,
      value: _vm.value,
      config: {
        plugins: ["table"]
      }
    },
    on: {
      input: function($event) {
        return _vm.$emit("input", $event)
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/Redactor/Field.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Redactor/Field.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_51c85424___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=51c85424& */ "./resources/js/components/Fieldtypes/Redactor/Field.vue?vue&type=template&id=51c85424&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Redactor/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_51c85424___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_51c85424___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Redactor/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Redactor/Field.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Redactor/Field.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Redactor/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Redactor/Field.vue?vue&type=template&id=51c85424&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Redactor/Field.vue?vue&type=template&id=51c85424& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_51c85424___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=51c85424& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Redactor/Field.vue?vue&type=template&id=51c85424&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_51c85424___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_51c85424___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/redactor/_plugins/table/table.js":
/*!***********************************************************!*\
  !*** ./resources/vendor/redactor/_plugins/table/table.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($R) {
  $R.add('plugin', 'table', {
    translations: {
      en: {
        "table": "Table",
        "insert-table": "Insert table",
        "insert-row-above": "Insert row above",
        "insert-row-below": "Insert row below",
        "insert-column-left": "Insert column left",
        "insert-column-right": "Insert column right",
        "add-head": "Add head",
        "delete-head": "Delete head",
        "delete-column": "Delete column",
        "delete-row": "Delete row",
        "delete-table": "Delete table"
      }
    },
    init: function init(app) {
      this.app = app;
      this.lang = app.lang;
      this.opts = app.opts;
      this.caret = app.caret;
      this.editor = app.editor;
      this.toolbar = app.toolbar;
      this.component = app.component;
      this.inspector = app.inspector;
      this.insertion = app.insertion;
      this.selection = app.selection;
    },
    // messages
    ondropdown: {
      table: {
        observe: function observe(dropdown) {
          this._observeDropdown(dropdown);
        }
      }
    },
    onbottomclick: function onbottomclick() {
      this.insertion.insertToEnd(this.editor.getLastNode(), 'table');
    },
    // public
    start: function start() {
      var dropdown = {
        observe: 'table',
        'insert-table': {
          title: this.lang.get('insert-table'),
          api: 'plugin.table.insert'
        },
        'insert-row-above': {
          title: this.lang.get('insert-row-above'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.addRowAbove'
        },
        'insert-row-below': {
          title: this.lang.get('insert-row-below'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.addRowBelow'
        },
        'insert-column-left': {
          title: this.lang.get('insert-column-left'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.addColumnLeft'
        },
        'insert-column-right': {
          title: this.lang.get('insert-column-right'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.addColumnRight'
        },
        'add-head': {
          title: this.lang.get('add-head'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.addHead'
        },
        'delete-head': {
          title: this.lang.get('delete-head'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.deleteHead'
        },
        'delete-column': {
          title: this.lang.get('delete-column'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.deleteColumn'
        },
        'delete-row': {
          title: this.lang.get('delete-row'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.deleteRow'
        },
        'delete-table': {
          title: this.lang.get('delete-table'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.deleteTable'
        }
      };
      var obj = {
        title: this.lang.get('table')
      };
      var $button = this.toolbar.addButtonBefore('link', 'table', obj);
      $button.setIcon('<i class="re-icon-table"></i>');
      $button.setDropdown(dropdown);
    },
    insert: function insert() {
      var rows = 2;
      var columns = 3;
      var $component = this.component.create('table');

      for (var i = 0; i < rows; i++) {
        $component.addRow(columns);
      }

      $component = this.insertion.insertHtml($component);
      this.caret.setStart($component);
    },
    addRowAbove: function addRowAbove() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        var $row = $component.addRowTo(current, 'before');
        this.caret.setStart($row);
      }
    },
    addRowBelow: function addRowBelow() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        var $row = $component.addRowTo(current, 'after');
        this.caret.setStart($row);
      }
    },
    addColumnLeft: function addColumnLeft() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        this.selection.save();
        $component.addColumnTo(current, 'left');
        this.selection.restore();
      }
    },
    addColumnRight: function addColumnRight() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        this.selection.save();
        $component.addColumnTo(current, 'right');
        this.selection.restore();
      }
    },
    addHead: function addHead() {
      var $component = this._getComponent();

      if ($component) {
        this.selection.save();
        $component.addHead();
        this.selection.restore();
      }
    },
    deleteHead: function deleteHead() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        var $head = $R.dom(current).closest('thead');

        if ($head.length !== 0) {
          $component.removeHead();
          this.caret.setStart($component);
        } else {
          this.selection.save();
          $component.removeHead();
          this.selection.restore();
        }
      }
    },
    deleteColumn: function deleteColumn() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        var $currentCell = $R.dom(current).closest('td, th');
        var nextCell = $currentCell.nextElement().get();
        var prevCell = $currentCell.prevElement().get();
        $component.removeColumn(current);
        if (nextCell) this.caret.setStart(nextCell);else if (prevCell) this.caret.setEnd(prevCell);else this.deleteTable();
      }
    },
    deleteRow: function deleteRow() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        var $currentRow = $R.dom(current).closest('tr');
        var nextRow = $currentRow.nextElement().get();
        var prevRow = $currentRow.prevElement().get();
        $component.removeRow(current);
        if (nextRow) this.caret.setStart(nextRow);else if (prevRow) this.caret.setEnd(prevRow);else this.deleteTable();
      }
    },
    deleteTable: function deleteTable() {
      var table = this._getTable();

      if (table) {
        this.component.remove(table);
      }
    },
    // private
    _getTable: function _getTable() {
      var current = this.selection.getCurrent();
      var data = this.inspector.parse(current);

      if (data.isTable()) {
        return data.getTable();
      }
    },
    _getComponent: function _getComponent() {
      var current = this.selection.getCurrent();
      var data = this.inspector.parse(current);

      if (data.isTable()) {
        var table = data.getTable();
        return this.component.create('table', table);
      }
    },
    _observeDropdown: function _observeDropdown(dropdown) {
      var table = this._getTable();

      var items = dropdown.getItemsByClass('redactor-table-item-observable');
      var tableItem = dropdown.getItem('insert-table');

      if (table) {
        this._observeItems(items, 'enable');

        tableItem.disable();
      } else {
        this._observeItems(items, 'disable');

        tableItem.enable();
      }
    },
    _observeItems: function _observeItems(items, type) {
      for (var i = 0; i < items.length; i++) {
        items[i][type]();
      }
    }
  });
})(Redactor);

(function ($R) {
  $R.add('class', 'table.component', {
    mixins: ['dom', 'component'],
    init: function init(app, el) {
      this.app = app; // init

      return el && el.cmnt !== undefined ? el : this._init(el);
    },
    // public
    addHead: function addHead() {
      this.removeHead();
      var columns = this.$element.find('tr').first().children('td, th').length;
      var $head = $R.dom('<thead>');

      var $row = this._buildRow(columns, '<th>');

      $head.append($row);
      this.$element.prepend($head);
    },
    addRow: function addRow(columns) {
      var $row = this._buildRow(columns);

      this.$element.append($row);
      return $row;
    },
    addRowTo: function addRowTo(current, type) {
      return this._addRowTo(current, type);
    },
    addColumnTo: function addColumnTo(current, type) {
      var $current = $R.dom(current);
      var $currentRow = $current.closest('tr');
      var $currentCell = $current.closest('td, th');
      var index = 0;
      $currentRow.find('td, th').each(function (node, i) {
        if (node === $currentCell.get()) index = i;
      });
      this.$element.find('tr').each(function (node) {
        var $node = $R.dom(node);
        var origCell = $node.find('td, th').get(index);
        var $origCell = $R.dom(origCell);
        var $td = $origCell.clone();
        $td.html('<div data-redactor-tag="tbr"></div>');
        if (type === 'right') $origCell.after($td);else $origCell.before($td);
      });
    },
    removeHead: function removeHead() {
      var $head = this.$element.find('thead');
      if ($head.length !== 0) $head.remove();
    },
    removeRow: function removeRow(current) {
      var $current = $R.dom(current);
      var $currentRow = $current.closest('tr');
      $currentRow.remove();
    },
    removeColumn: function removeColumn(current) {
      var $current = $R.dom(current);
      var $currentRow = $current.closest('tr');
      var $currentCell = $current.closest('td, th');
      var index = 0;
      $currentRow.find('td, th').each(function (node, i) {
        if (node === $currentCell.get()) index = i;
      });
      this.$element.find('tr').each(function (node) {
        var $node = $R.dom(node);
        var origCell = $node.find('td, th').get(index);
        var $origCell = $R.dom(origCell);
        $origCell.remove();
      });
    },
    // private
    _init: function _init(el) {
      var wrapper, element;

      if (typeof el !== 'undefined') {
        var $node = $R.dom(el);
        var node = $node.get();
        var $figure = $node.closest('figure');

        if ($figure.length !== 0) {
          wrapper = $figure;
          element = $figure.find('table').get();
        } else if (node.tagName === 'TABLE') {
          element = node;
        }
      }

      this._buildWrapper(wrapper);

      this._buildElement(element);

      this._initWrapper();
    },
    _addRowTo: function _addRowTo(current, position) {
      var $current = $R.dom(current);
      var $currentRow = $current.closest('tr');

      if ($currentRow.length !== 0) {
        var columns = $currentRow.children('td, th').length;

        var $newRow = this._buildRow(columns);

        $currentRow[position]($newRow);
        return $newRow;
      }
    },
    _buildRow: function _buildRow(columns, tag) {
      tag = tag || '<td>';
      var $row = $R.dom('<tr>');

      for (var i = 0; i < columns; i++) {
        var $cell = $R.dom(tag);
        $cell.attr('contenteditable', true);
        $cell.html('<div data-redactor-tag="tbr"></div>');
        $row.append($cell);
      }

      return $row;
    },
    _buildElement: function _buildElement(node) {
      if (node) {
        this.$element = $R.dom(node);
      } else {
        this.$element = $R.dom('<table>');
        this.append(this.$element);
      }
    },
    _buildWrapper: function _buildWrapper(node) {
      node = node || '<figure>';
      this.parse(node);
    },
    _initWrapper: function _initWrapper() {
      this.addClass('redactor-component');
      this.attr({
        'data-redactor-type': 'table',
        'tabindex': '-1',
        'contenteditable': false
      });

      if (this.app.detector.isIe()) {
        this.removeAttr('contenteditable');
      }
    }
  });
})(Redactor);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9SZWRhY3Rvci9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9SZWRhY3Rvci9GaWVsZC52dWU/NzMwYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1JlZGFjdG9yL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL1JlZGFjdG9yL0ZpZWxkLnZ1ZT9iYjA1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvUmVkYWN0b3IvRmllbGQudnVlPzNmOTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3ZlbmRvci9yZWRhY3Rvci9fcGx1Z2lucy90YWJsZS90YWJsZS5qcyJdLCJuYW1lcyI6WyIkUiIsImFkZCIsInRyYW5zbGF0aW9ucyIsImVuIiwiaW5pdCIsImFwcCIsImxhbmciLCJvcHRzIiwiY2FyZXQiLCJlZGl0b3IiLCJ0b29sYmFyIiwiY29tcG9uZW50IiwiaW5zcGVjdG9yIiwiaW5zZXJ0aW9uIiwic2VsZWN0aW9uIiwib25kcm9wZG93biIsInRhYmxlIiwib2JzZXJ2ZSIsImRyb3Bkb3duIiwiX29ic2VydmVEcm9wZG93biIsIm9uYm90dG9tY2xpY2siLCJpbnNlcnRUb0VuZCIsImdldExhc3ROb2RlIiwic3RhcnQiLCJ0aXRsZSIsImdldCIsImFwaSIsImNsYXNzbmFtZSIsIm9iaiIsIiRidXR0b24iLCJhZGRCdXR0b25CZWZvcmUiLCJzZXRJY29uIiwic2V0RHJvcGRvd24iLCJpbnNlcnQiLCJyb3dzIiwiY29sdW1ucyIsIiRjb21wb25lbnQiLCJjcmVhdGUiLCJpIiwiYWRkUm93IiwiaW5zZXJ0SHRtbCIsInNldFN0YXJ0IiwiYWRkUm93QWJvdmUiLCJfZ2V0Q29tcG9uZW50IiwiY3VycmVudCIsImdldEN1cnJlbnQiLCIkcm93IiwiYWRkUm93VG8iLCJhZGRSb3dCZWxvdyIsImFkZENvbHVtbkxlZnQiLCJzYXZlIiwiYWRkQ29sdW1uVG8iLCJyZXN0b3JlIiwiYWRkQ29sdW1uUmlnaHQiLCJhZGRIZWFkIiwiZGVsZXRlSGVhZCIsIiRoZWFkIiwiZG9tIiwiY2xvc2VzdCIsImxlbmd0aCIsInJlbW92ZUhlYWQiLCJkZWxldGVDb2x1bW4iLCIkY3VycmVudENlbGwiLCJuZXh0Q2VsbCIsIm5leHRFbGVtZW50IiwicHJldkNlbGwiLCJwcmV2RWxlbWVudCIsInJlbW92ZUNvbHVtbiIsInNldEVuZCIsImRlbGV0ZVRhYmxlIiwiZGVsZXRlUm93IiwiJGN1cnJlbnRSb3ciLCJuZXh0Um93IiwicHJldlJvdyIsInJlbW92ZVJvdyIsIl9nZXRUYWJsZSIsInJlbW92ZSIsImRhdGEiLCJwYXJzZSIsImlzVGFibGUiLCJnZXRUYWJsZSIsIml0ZW1zIiwiZ2V0SXRlbXNCeUNsYXNzIiwidGFibGVJdGVtIiwiZ2V0SXRlbSIsIl9vYnNlcnZlSXRlbXMiLCJkaXNhYmxlIiwiZW5hYmxlIiwidHlwZSIsIlJlZGFjdG9yIiwibWl4aW5zIiwiZWwiLCJjbW50IiwidW5kZWZpbmVkIiwiX2luaXQiLCIkZWxlbWVudCIsImZpbmQiLCJmaXJzdCIsImNoaWxkcmVuIiwiX2J1aWxkUm93IiwiYXBwZW5kIiwicHJlcGVuZCIsIl9hZGRSb3dUbyIsIiRjdXJyZW50IiwiaW5kZXgiLCJlYWNoIiwibm9kZSIsIiRub2RlIiwib3JpZ0NlbGwiLCIkb3JpZ0NlbGwiLCIkdGQiLCJjbG9uZSIsImh0bWwiLCJhZnRlciIsImJlZm9yZSIsIndyYXBwZXIiLCJlbGVtZW50IiwiJGZpZ3VyZSIsInRhZ05hbWUiLCJfYnVpbGRXcmFwcGVyIiwiX2J1aWxkRWxlbWVudCIsIl9pbml0V3JhcHBlciIsInBvc2l0aW9uIiwiJG5ld1JvdyIsInRhZyIsIiRjZWxsIiwiYXR0ciIsImFkZENsYXNzIiwiZGV0ZWN0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RUFBOEIsSUFBOUI7QUFDQUQsYUFBSyxDQUFDYixJQUFOLENBQVcscUNBQVg7QUFFQWxFLFlBQUksQ0FBQ3NELE1BQUwsQ0FBWXlCLEtBQVo7QUFDSDs7QUFFRCxhQUFPL0UsSUFBUDtBQUNILEtBako4QjtBQWtKL0IwRSxpQkFBYSxFQUFFLHVCQUFTZCxJQUFULEVBQ2Y7QUFDSSxVQUFJQSxJQUFKLEVBQ0E7QUFDSSxhQUFLWCxRQUFMLEdBQWdCL0YsRUFBRSxDQUFDeUQsR0FBSCxDQUFPaUQsSUFBUCxDQUFoQjtBQUNILE9BSEQsTUFLQTtBQUNJLGFBQUtYLFFBQUwsR0FBZ0IvRixFQUFFLENBQUN5RCxHQUFILENBQU8sU0FBUCxDQUFoQjtBQUNBLGFBQUsyQyxNQUFMLENBQVksS0FBS0wsUUFBakI7QUFDSDtBQUNKLEtBN0o4QjtBQThKL0J3QixpQkFBYSxFQUFFLHVCQUFTYixJQUFULEVBQ2Y7QUFDSUEsVUFBSSxHQUFHQSxJQUFJLElBQUksVUFBZjtBQUVBLFdBQUs1QixLQUFMLENBQVc0QixJQUFYO0FBQ0gsS0FuSzhCO0FBb0svQmUsZ0JBQVksRUFBRSx3QkFDZDtBQUNJLFdBQUtNLFFBQUwsQ0FBYyxvQkFBZDtBQUNBLFdBQUtELElBQUwsQ0FBVTtBQUNOLDhCQUFzQixPQURoQjtBQUVOLG9CQUFZLElBRk47QUFHTiwyQkFBbUI7QUFIYixPQUFWOztBQU1BLFVBQUksS0FBS3pILEdBQUwsQ0FBUzJILFFBQVQsQ0FBa0JDLElBQWxCLEVBQUosRUFDQTtBQUNJLGFBQUtDLFVBQUwsQ0FBZ0IsaUJBQWhCO0FBQ0g7QUFDSjtBQWpMOEIsR0FBbkM7QUFvTEgsQ0F0TEQsRUFzTEd6QyxRQXRMSCxFIiwiZmlsZSI6ImpzL2NodW5rcy80NC5qcz9pZD0yNWY0YjA1NWVjMTRjNGU4OTM4OCIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8cmVkYWN0b3JcbiAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGVcIlxuICAgICAgICA6bGFiZWw9XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgOmhlbHA9XCJmaWVsZC5oZWxwXCJcbiAgICAgICAgOnBsYWNlaG9sZGVyPVwiZmllbGQuc2V0dGluZ3MucGxhY2Vob2xkZXJcIlxuICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dCcsICRldmVudClcIlxuICAgICAgICA6Y29uZmlnPVwie1xuICAgICAgICAgICAgcGx1Z2luczogWyd0YWJsZSddXG4gICAgICAgIH1cIlxuICAgID48L3JlZGFjdG9yPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgJ0AvLi4vdmVuZG9yL3JlZGFjdG9yL19wbHVnaW5zL3RhYmxlL3RhYmxlLmpzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAncmVkYWN0b3ItZmllbGR0eXBlJyxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwicmVkYWN0b3JcIiwge1xuICAgIGF0dHJzOiB7XG4gICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlLFxuICAgICAgbGFiZWw6IF92bS5maWVsZC5uYW1lLFxuICAgICAgaGVscDogX3ZtLmZpZWxkLmhlbHAsXG4gICAgICBwbGFjZWhvbGRlcjogX3ZtLmZpZWxkLnNldHRpbmdzLnBsYWNlaG9sZGVyLFxuICAgICAgdmFsdWU6IF92bS52YWx1ZSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBwbHVnaW5zOiBbXCJ0YWJsZVwiXVxuICAgICAgfVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0XCIsICRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTFjODU0MjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUxYzg1NDI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUxYzg1NDI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUxYzg1NDI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTFjODU0MjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTFjODU0MjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvUmVkYWN0b3IvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MWM4NTQyNCZcIiIsIihmdW5jdGlvbigkUilcbntcbiAgICAkUi5hZGQoJ3BsdWdpbicsICd0YWJsZScsIHtcbiAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICBlbjoge1xuICAgICAgICBcdFx0XCJ0YWJsZVwiOiBcIlRhYmxlXCIsXG4gICAgICAgIFx0XHRcImluc2VydC10YWJsZVwiOiBcIkluc2VydCB0YWJsZVwiLFxuICAgICAgICBcdFx0XCJpbnNlcnQtcm93LWFib3ZlXCI6IFwiSW5zZXJ0IHJvdyBhYm92ZVwiLFxuICAgICAgICBcdFx0XCJpbnNlcnQtcm93LWJlbG93XCI6IFwiSW5zZXJ0IHJvdyBiZWxvd1wiLFxuICAgICAgICBcdFx0XCJpbnNlcnQtY29sdW1uLWxlZnRcIjogXCJJbnNlcnQgY29sdW1uIGxlZnRcIixcbiAgICAgICAgXHRcdFwiaW5zZXJ0LWNvbHVtbi1yaWdodFwiOiBcIkluc2VydCBjb2x1bW4gcmlnaHRcIixcbiAgICAgICAgXHRcdFwiYWRkLWhlYWRcIjogXCJBZGQgaGVhZFwiLFxuICAgICAgICBcdFx0XCJkZWxldGUtaGVhZFwiOiBcIkRlbGV0ZSBoZWFkXCIsXG4gICAgICAgIFx0XHRcImRlbGV0ZS1jb2x1bW5cIjogXCJEZWxldGUgY29sdW1uXCIsXG4gICAgICAgIFx0XHRcImRlbGV0ZS1yb3dcIjogXCJEZWxldGUgcm93XCIsXG4gICAgICAgIFx0XHRcImRlbGV0ZS10YWJsZVwiOiBcIkRlbGV0ZSB0YWJsZVwiXG4gICAgICAgIFx0fVxuICAgICAgICB9LFxuICAgICAgICBpbml0OiBmdW5jdGlvbihhcHApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYXBwID0gYXBwO1xuICAgICAgICAgICAgdGhpcy5sYW5nID0gYXBwLmxhbmc7XG4gICAgICAgICAgICB0aGlzLm9wdHMgPSBhcHAub3B0cztcbiAgICAgICAgICAgIHRoaXMuY2FyZXQgPSBhcHAuY2FyZXQ7XG4gICAgICAgICAgICB0aGlzLmVkaXRvciA9IGFwcC5lZGl0b3I7XG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIgPSBhcHAudG9vbGJhcjtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gYXBwLmNvbXBvbmVudDtcbiAgICAgICAgICAgIHRoaXMuaW5zcGVjdG9yID0gYXBwLmluc3BlY3RvcjtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0aW9uID0gYXBwLmluc2VydGlvbjtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gYXBwLnNlbGVjdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gbWVzc2FnZXNcbiAgICAgICAgb25kcm9wZG93bjoge1xuICAgICAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBmdW5jdGlvbihkcm9wZG93bilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29ic2VydmVEcm9wZG93bihkcm9wZG93bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbmJvdHRvbWNsaWNrOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0aW9uLmluc2VydFRvRW5kKHRoaXMuZWRpdG9yLmdldExhc3ROb2RlKCksICd0YWJsZScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHB1YmxpY1xuICAgICAgICBzdGFydDogZnVuY3Rpb24oKVxuICAgICAgICB7XG5cdFx0XHR2YXIgZHJvcGRvd24gPSB7XG4gICAgXHRcdFx0b2JzZXJ2ZTogJ3RhYmxlJyxcbiAgICBcdFx0XHQnaW5zZXJ0LXRhYmxlJzoge1xuICAgIFx0XHRcdFx0dGl0bGU6IHRoaXMubGFuZy5nZXQoJ2luc2VydC10YWJsZScpLFxuICAgIFx0XHRcdFx0YXBpOiAncGx1Z2luLnRhYmxlLmluc2VydCdcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdCdpbnNlcnQtcm93LWFib3ZlJzoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5sYW5nLmdldCgnaW5zZXJ0LXJvdy1hYm92ZScpLFxuICAgIFx0XHRcdFx0Y2xhc3NuYW1lOiAncmVkYWN0b3ItdGFibGUtaXRlbS1vYnNlcnZhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpOiAncGx1Z2luLnRhYmxlLmFkZFJvd0Fib3ZlJ1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0J2luc2VydC1yb3ctYmVsb3cnOiB7XG4gICAgICAgIFx0XHRcdHRpdGxlOiB0aGlzLmxhbmcuZ2V0KCdpbnNlcnQtcm93LWJlbG93JyksXG4gICAgICAgIFx0XHRcdGNsYXNzbmFtZTogJ3JlZGFjdG9yLXRhYmxlLWl0ZW0tb2JzZXJ2YWJsZScsXG4gICAgICAgICAgICAgICAgICAgIGFwaTogJ3BsdWdpbi50YWJsZS5hZGRSb3dCZWxvdydcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdCdpbnNlcnQtY29sdW1uLWxlZnQnOiB7XG4gICAgICAgIFx0XHRcdHRpdGxlOiB0aGlzLmxhbmcuZ2V0KCdpbnNlcnQtY29sdW1uLWxlZnQnKSxcbiAgICAgICAgXHRcdFx0Y2xhc3NuYW1lOiAncmVkYWN0b3ItdGFibGUtaXRlbS1vYnNlcnZhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpOiAncGx1Z2luLnRhYmxlLmFkZENvbHVtbkxlZnQnXG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHQnaW5zZXJ0LWNvbHVtbi1yaWdodCc6IHtcbiAgICAgICAgXHRcdFx0dGl0bGU6IHRoaXMubGFuZy5nZXQoJ2luc2VydC1jb2x1bW4tcmlnaHQnKSxcbiAgICAgICAgXHRcdFx0Y2xhc3NuYW1lOiAncmVkYWN0b3ItdGFibGUtaXRlbS1vYnNlcnZhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpOiAncGx1Z2luLnRhYmxlLmFkZENvbHVtblJpZ2h0J1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0J2FkZC1oZWFkJzoge1xuICAgICAgICBcdFx0XHR0aXRsZTogdGhpcy5sYW5nLmdldCgnYWRkLWhlYWQnKSxcbiAgICAgICAgXHRcdFx0Y2xhc3NuYW1lOiAncmVkYWN0b3ItdGFibGUtaXRlbS1vYnNlcnZhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpOiAncGx1Z2luLnRhYmxlLmFkZEhlYWQnXG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHQnZGVsZXRlLWhlYWQnOiB7XG4gICAgICAgIFx0XHRcdHRpdGxlOiB0aGlzLmxhbmcuZ2V0KCdkZWxldGUtaGVhZCcpLFxuICAgICAgICBcdFx0XHRjbGFzc25hbWU6ICdyZWRhY3Rvci10YWJsZS1pdGVtLW9ic2VydmFibGUnLFxuICAgICAgICAgICAgICAgICAgICBhcGk6ICdwbHVnaW4udGFibGUuZGVsZXRlSGVhZCdcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdCdkZWxldGUtY29sdW1uJzoge1xuICAgICAgICBcdFx0XHR0aXRsZTogdGhpcy5sYW5nLmdldCgnZGVsZXRlLWNvbHVtbicpLFxuICAgICAgICBcdFx0XHRjbGFzc25hbWU6ICdyZWRhY3Rvci10YWJsZS1pdGVtLW9ic2VydmFibGUnLFxuICAgICAgICAgICAgICAgICAgICBhcGk6ICdwbHVnaW4udGFibGUuZGVsZXRlQ29sdW1uJ1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0J2RlbGV0ZS1yb3cnOiB7XG4gICAgICAgIFx0XHRcdHRpdGxlOiB0aGlzLmxhbmcuZ2V0KCdkZWxldGUtcm93JyksXG4gICAgICAgIFx0XHRcdGNsYXNzbmFtZTogJ3JlZGFjdG9yLXRhYmxlLWl0ZW0tb2JzZXJ2YWJsZScsXG4gICAgICAgICAgICAgICAgICAgIGFwaTogJ3BsdWdpbi50YWJsZS5kZWxldGVSb3cnXG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHQnZGVsZXRlLXRhYmxlJzoge1xuICAgICAgICBcdFx0XHR0aXRsZTogdGhpcy5sYW5nLmdldCgnZGVsZXRlLXRhYmxlJyksXG4gICAgICAgIFx0XHRcdGNsYXNzbmFtZTogJ3JlZGFjdG9yLXRhYmxlLWl0ZW0tb2JzZXJ2YWJsZScsXG4gICAgICAgICAgICAgICAgICAgIGFwaTogJ3BsdWdpbi50YWJsZS5kZWxldGVUYWJsZSdcbiAgICBcdFx0XHR9XG5cdFx0XHR9O1xuICAgICAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5sYW5nLmdldCgndGFibGUnKVxuICAgICAgICAgICAgfTtcblxuXHRcdFx0dmFyICRidXR0b24gPSB0aGlzLnRvb2xiYXIuYWRkQnV0dG9uQmVmb3JlKCdsaW5rJywgJ3RhYmxlJywgb2JqKTtcblx0XHRcdCRidXR0b24uc2V0SWNvbignPGkgY2xhc3M9XCJyZS1pY29uLXRhYmxlXCI+PC9pPicpO1xuXHRcdFx0JGJ1dHRvbi5zZXREcm9wZG93bihkcm9wZG93bik7XG4gICAgICAgIH0sXG5cdFx0aW5zZXJ0OiBmdW5jdGlvbigpXG5cdFx0e1xuICAgICAgICAgICAgdmFyIHJvd3MgPSAyO1xuXHRcdFx0dmFyIGNvbHVtbnMgPSAzO1xuXHRcdFx0dmFyICRjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudC5jcmVhdGUoJ3RhYmxlJyk7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcm93czsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0ICAgICRjb21wb25lbnQuYWRkUm93KGNvbHVtbnMpO1xuXHRcdFx0fVxuXG5cdFx0XHQkY29tcG9uZW50ID0gIHRoaXMuaW5zZXJ0aW9uLmluc2VydEh0bWwoJGNvbXBvbmVudCk7XG5cdFx0XHR0aGlzLmNhcmV0LnNldFN0YXJ0KCRjb21wb25lbnQpO1xuXHRcdH0sXG4gICAgICAgIGFkZFJvd0Fib3ZlOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkY29tcG9uZW50ID0gdGhpcy5fZ2V0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICBpZiAoJGNvbXBvbmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuc2VsZWN0aW9uLmdldEN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICB2YXIgJHJvdyA9ICRjb21wb25lbnQuYWRkUm93VG8oY3VycmVudCwgJ2JlZm9yZScpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJldC5zZXRTdGFydCgkcm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWRkUm93QmVsb3c6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRjb21wb25lbnQgPSB0aGlzLl9nZXRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIGlmICgkY29tcG9uZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5zZWxlY3Rpb24uZ2V0Q3VycmVudCgpO1xuICAgICAgICAgICAgICAgIHZhciAkcm93ID0gJGNvbXBvbmVudC5hZGRSb3dUbyhjdXJyZW50LCAnYWZ0ZXInKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZXQuc2V0U3RhcnQoJHJvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFkZENvbHVtbkxlZnQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRjb21wb25lbnQgPSB0aGlzLl9nZXRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIGlmICgkY29tcG9uZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5zZWxlY3Rpb24uZ2V0Q3VycmVudCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc2F2ZSgpO1xuICAgICAgICAgICAgICAgICRjb21wb25lbnQuYWRkQ29sdW1uVG8oY3VycmVudCwgJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFkZENvbHVtblJpZ2h0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkY29tcG9uZW50ID0gdGhpcy5fZ2V0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICBpZiAoJGNvbXBvbmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuc2VsZWN0aW9uLmdldEN1cnJlbnQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNhdmUoKTtcbiAgICAgICAgICAgICAgICAkY29tcG9uZW50LmFkZENvbHVtblRvKGN1cnJlbnQsICdyaWdodCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWRkSGVhZDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJGNvbXBvbmVudCA9IHRoaXMuX2dldENvbXBvbmVudCgpO1xuICAgICAgICAgICAgaWYgKCRjb21wb25lbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc2F2ZSgpO1xuICAgICAgICAgICAgICAgICRjb21wb25lbnQuYWRkSGVhZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlSGVhZDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJGNvbXBvbmVudCA9IHRoaXMuX2dldENvbXBvbmVudCgpO1xuICAgICAgICAgICAgaWYgKCRjb21wb25lbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnNlbGVjdGlvbi5nZXRDdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgdmFyICRoZWFkID0gJFIuZG9tKGN1cnJlbnQpLmNsb3Nlc3QoJ3RoZWFkJyk7XG4gICAgICAgICAgICAgICAgaWYgKCRoZWFkLmxlbmd0aCAhPT0gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlSGVhZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmV0LnNldFN0YXJ0KCRjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlSGVhZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGVDb2x1bW46IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRjb21wb25lbnQgPSB0aGlzLl9nZXRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIGlmICgkY29tcG9uZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5zZWxlY3Rpb24uZ2V0Q3VycmVudCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyICRjdXJyZW50Q2VsbCA9ICRSLmRvbShjdXJyZW50KS5jbG9zZXN0KCd0ZCwgdGgnKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dENlbGwgPSAkY3VycmVudENlbGwubmV4dEVsZW1lbnQoKS5nZXQoKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJldkNlbGwgPSAkY3VycmVudENlbGwucHJldkVsZW1lbnQoKS5nZXQoKTtcblxuICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlQ29sdW1uKGN1cnJlbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRDZWxsKSB0aGlzLmNhcmV0LnNldFN0YXJ0KG5leHRDZWxsKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcmV2Q2VsbCkgdGhpcy5jYXJldC5zZXRFbmQocHJldkNlbGwpO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5kZWxldGVUYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGVSb3c6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRjb21wb25lbnQgPSB0aGlzLl9nZXRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIGlmICgkY29tcG9uZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5zZWxlY3Rpb24uZ2V0Q3VycmVudCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyICRjdXJyZW50Um93ID0gJFIuZG9tKGN1cnJlbnQpLmNsb3Nlc3QoJ3RyJyk7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRSb3cgPSAkY3VycmVudFJvdy5uZXh0RWxlbWVudCgpLmdldCgpO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2Um93ID0gJGN1cnJlbnRSb3cucHJldkVsZW1lbnQoKS5nZXQoKTtcblxuICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlUm93KGN1cnJlbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRSb3cpIHRoaXMuY2FyZXQuc2V0U3RhcnQobmV4dFJvdyk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJldlJvdykgdGhpcy5jYXJldC5zZXRFbmQocHJldlJvdyk7XG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmRlbGV0ZVRhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZVRhYmxlOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciB0YWJsZSA9IHRoaXMuX2dldFRhYmxlKCk7XG4gICAgICAgICAgICBpZiAodGFibGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQucmVtb3ZlKHRhYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBwcml2YXRlXG4gICAgICAgIF9nZXRUYWJsZTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuc2VsZWN0aW9uLmdldEN1cnJlbnQoKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5pbnNwZWN0b3IucGFyc2UoY3VycmVudCk7XG4gICAgICAgICAgICBpZiAoZGF0YS5pc1RhYmxlKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZ2V0VGFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX2dldENvbXBvbmVudDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuc2VsZWN0aW9uLmdldEN1cnJlbnQoKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5pbnNwZWN0b3IucGFyc2UoY3VycmVudCk7XG4gICAgICAgICAgICBpZiAoZGF0YS5pc1RhYmxlKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gZGF0YS5nZXRUYWJsZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LmNyZWF0ZSgndGFibGUnLCB0YWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9vYnNlcnZlRHJvcGRvd246IGZ1bmN0aW9uKGRyb3Bkb3duKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgdGFibGUgPSB0aGlzLl9nZXRUYWJsZSgpO1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gZHJvcGRvd24uZ2V0SXRlbXNCeUNsYXNzKCdyZWRhY3Rvci10YWJsZS1pdGVtLW9ic2VydmFibGUnKTtcbiAgICAgICAgICAgIHZhciB0YWJsZUl0ZW0gPSBkcm9wZG93bi5nZXRJdGVtKCdpbnNlcnQtdGFibGUnKTtcbiAgICAgICAgICAgIGlmICh0YWJsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vYnNlcnZlSXRlbXMoaXRlbXMsICdlbmFibGUnKTtcbiAgICAgICAgICAgICAgICB0YWJsZUl0ZW0uZGlzYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX29ic2VydmVJdGVtcyhpdGVtcywgJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICB0YWJsZUl0ZW0uZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9vYnNlcnZlSXRlbXM6IGZ1bmN0aW9uKGl0ZW1zLCB0eXBlKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGl0ZW1zW2ldW3R5cGVdKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKFJlZGFjdG9yKTtcbihmdW5jdGlvbigkUilcbntcbiAgICAkUi5hZGQoJ2NsYXNzJywgJ3RhYmxlLmNvbXBvbmVudCcsIHtcbiAgICAgICAgbWl4aW5zOiBbJ2RvbScsICdjb21wb25lbnQnXSxcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oYXBwLCBlbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgICAgICAgICAgIC8vIGluaXRcbiAgICAgICAgICAgIHJldHVybiAoZWwgJiYgZWwuY21udCAhPT0gdW5kZWZpbmVkKSA/IGVsIDogdGhpcy5faW5pdChlbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gcHVibGljXG4gICAgICAgIGFkZEhlYWQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuXHRcdFx0dGhpcy5yZW1vdmVIZWFkKCk7XG5cblx0XHRcdHZhciBjb2x1bW5zID0gdGhpcy4kZWxlbWVudC5maW5kKCd0cicpLmZpcnN0KCkuY2hpbGRyZW4oJ3RkLCB0aCcpLmxlbmd0aDtcblx0XHRcdHZhciAkaGVhZCA9ICRSLmRvbSgnPHRoZWFkPicpO1xuICAgICAgICAgICAgdmFyICRyb3cgPSB0aGlzLl9idWlsZFJvdyhjb2x1bW5zLCAnPHRoPicpO1xuXG4gICAgICAgICAgICAkaGVhZC5hcHBlbmQoJHJvdyk7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoJGhlYWQpO1xuICAgICAgICB9LFxuICAgICAgICBhZGRSb3c6IGZ1bmN0aW9uKGNvbHVtbnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkcm93ID0gdGhpcy5fYnVpbGRSb3coY29sdW1ucyk7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZCgkcm93KTtcblxuICAgICAgICAgICAgcmV0dXJuICRyb3c7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZFJvd1RvOiBmdW5jdGlvbihjdXJyZW50LCB0eXBlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkUm93VG8oY3VycmVudCwgdHlwZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZENvbHVtblRvOiBmdW5jdGlvbihjdXJyZW50LCB0eXBlKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJGN1cnJlbnQgPSAkUi5kb20oY3VycmVudCk7XG4gICAgICAgICAgICB2YXIgJGN1cnJlbnRSb3cgPSAkY3VycmVudC5jbG9zZXN0KCd0cicpO1xuICAgICAgICAgICAgdmFyICRjdXJyZW50Q2VsbCA9ICRjdXJyZW50LmNsb3Nlc3QoJ3RkLCB0aCcpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICAgICAgJGN1cnJlbnRSb3cuZmluZCgndGQsIHRoJykuZWFjaChmdW5jdGlvbihub2RlLCBpKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAobm9kZSA9PT0gJGN1cnJlbnRDZWxsLmdldCgpKSBpbmRleCA9IGk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kZWxlbWVudC5maW5kKCd0cicpLmVhY2goZnVuY3Rpb24obm9kZSlcblx0XHRcdHtcbiAgICBcdFx0XHR2YXIgJG5vZGUgPSAkUi5kb20obm9kZSk7XG5cdFx0XHRcdHZhciBvcmlnQ2VsbCA9ICRub2RlLmZpbmQoJ3RkLCB0aCcpLmdldChpbmRleCk7XG5cdFx0XHRcdHZhciAkb3JpZ0NlbGwgPSAkUi5kb20ob3JpZ0NlbGwpO1xuXG5cdFx0XHRcdHZhciAkdGQgPSAkb3JpZ0NlbGwuY2xvbmUoKTtcblx0XHRcdFx0JHRkLmh0bWwoJzxkaXYgZGF0YS1yZWRhY3Rvci10YWc9XCJ0YnJcIj48L2Rpdj4nKTtcblxuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ3JpZ2h0JykgJG9yaWdDZWxsLmFmdGVyKCR0ZCk7XG5cdFx0XHRcdGVsc2UgICAgICAgICAgICAgICAgICAkb3JpZ0NlbGwuYmVmb3JlKCR0ZCk7XG5cdFx0XHR9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlSGVhZDogZnVuY3Rpb24oKVxuICAgICAgICB7XG5cdFx0XHR2YXIgJGhlYWQgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ3RoZWFkJyk7XG5cdFx0XHRpZiAoJGhlYWQubGVuZ3RoICE9PSAwKSAkaGVhZC5yZW1vdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlUm93OiBmdW5jdGlvbihjdXJyZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJGN1cnJlbnQgPSAkUi5kb20oY3VycmVudCk7XG4gICAgICAgICAgICB2YXIgJGN1cnJlbnRSb3cgPSAkY3VycmVudC5jbG9zZXN0KCd0cicpO1xuXG4gICAgICAgICAgICAkY3VycmVudFJvdy5yZW1vdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlQ29sdW1uOiBmdW5jdGlvbihjdXJyZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJGN1cnJlbnQgPSAkUi5kb20oY3VycmVudCk7XG4gICAgICAgICAgICB2YXIgJGN1cnJlbnRSb3cgPSAkY3VycmVudC5jbG9zZXN0KCd0cicpO1xuICAgICAgICAgICAgdmFyICRjdXJyZW50Q2VsbCA9ICRjdXJyZW50LmNsb3Nlc3QoJ3RkLCB0aCcpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICAgICAgJGN1cnJlbnRSb3cuZmluZCgndGQsIHRoJykuZWFjaChmdW5jdGlvbihub2RlLCBpKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAobm9kZSA9PT0gJGN1cnJlbnRDZWxsLmdldCgpKSBpbmRleCA9IGk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kZWxlbWVudC5maW5kKCd0cicpLmVhY2goZnVuY3Rpb24obm9kZSlcblx0XHRcdHtcbiAgICBcdFx0XHR2YXIgJG5vZGUgPSAkUi5kb20obm9kZSk7XG5cdFx0XHRcdHZhciBvcmlnQ2VsbCA9ICRub2RlLmZpbmQoJ3RkLCB0aCcpLmdldChpbmRleCk7XG5cdFx0XHRcdHZhciAkb3JpZ0NlbGwgPSAkUi5kb20ob3JpZ0NlbGwpO1xuXG5cdFx0XHRcdCRvcmlnQ2VsbC5yZW1vdmUoKTtcblx0XHRcdH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHByaXZhdGVcbiAgICAgICAgX2luaXQ6IGZ1bmN0aW9uKGVsKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciwgZWxlbWVudDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWwgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciAkbm9kZSA9ICRSLmRvbShlbCk7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSAkbm9kZS5nZXQoKTtcbiAgICAgICAgICAgICAgICB2YXIgJGZpZ3VyZSA9ICRub2RlLmNsb3Nlc3QoJ2ZpZ3VyZScpO1xuICAgICAgICAgICAgICAgIGlmICgkZmlndXJlLmxlbmd0aCAhPT0gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgPSAkZmlndXJlO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gJGZpZ3VyZS5maW5kKCd0YWJsZScpLmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLnRhZ05hbWUgPT09ICdUQUJMRScpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gbm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2J1aWxkV3JhcHBlcih3cmFwcGVyKTtcbiAgICAgICAgICAgIHRoaXMuX2J1aWxkRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRXcmFwcGVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIF9hZGRSb3dUbzogZnVuY3Rpb24oY3VycmVudCwgcG9zaXRpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkY3VycmVudCA9ICRSLmRvbShjdXJyZW50KTtcbiAgICAgICAgICAgIHZhciAkY3VycmVudFJvdyA9ICRjdXJyZW50LmNsb3Nlc3QoJ3RyJyk7XG4gICAgICAgICAgICBpZiAoJGN1cnJlbnRSb3cubGVuZ3RoICE9PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjb2x1bW5zID0gJGN1cnJlbnRSb3cuY2hpbGRyZW4oJ3RkLCB0aCcpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgJG5ld1JvdyA9IHRoaXMuX2J1aWxkUm93KGNvbHVtbnMpO1xuXG4gICAgICAgICAgICAgICAgJGN1cnJlbnRSb3dbcG9zaXRpb25dKCRuZXdSb3cpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuICRuZXdSb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9idWlsZFJvdzogZnVuY3Rpb24oY29sdW1ucywgdGFnKVxuICAgICAgICB7XG4gICAgICAgICAgICB0YWcgPSB0YWcgfHwgJzx0ZD4nO1xuXG4gICAgICAgICAgICB2YXIgJHJvdyA9ICRSLmRvbSgnPHRyPicpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyICRjZWxsID0gJFIuZG9tKHRhZyk7XG4gICAgICAgICAgICAgICAgJGNlbGwuYXR0cignY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgJGNlbGwuaHRtbCgnPGRpdiBkYXRhLXJlZGFjdG9yLXRhZz1cInRiclwiPjwvZGl2PicpO1xuXG4gICAgICAgICAgICAgICAgJHJvdy5hcHBlbmQoJGNlbGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gJHJvdztcbiAgICAgICAgfSxcbiAgICAgICAgX2J1aWxkRWxlbWVudDogZnVuY3Rpb24obm9kZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKG5vZGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRSLmRvbShub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50ID0gJFIuZG9tKCc8dGFibGU+Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQodGhpcy4kZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9idWlsZFdyYXBwZXI6IGZ1bmN0aW9uKG5vZGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlIHx8ICc8ZmlndXJlPic7XG5cbiAgICAgICAgICAgIHRoaXMucGFyc2Uobm9kZSk7XG4gICAgICAgIH0sXG4gICAgICAgIF9pbml0V3JhcHBlcjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzKCdyZWRhY3Rvci1jb21wb25lbnQnKTtcbiAgICAgICAgICAgIHRoaXMuYXR0cih7XG4gICAgICAgICAgICAgICAgJ2RhdGEtcmVkYWN0b3ItdHlwZSc6ICd0YWJsZScsXG4gICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJyxcbiAgICAgICAgICAgICAgICAnY29udGVudGVkaXRhYmxlJzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hcHAuZGV0ZWN0b3IuaXNJZSgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cignY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoUmVkYWN0b3IpOyJdLCJzb3VyY2VSb290IjoiIn0=