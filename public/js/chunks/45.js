(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Redactor/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Redactor/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_redactor_plugins_table_table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vendor/redactor/_plugins/table/table.js */ "./resources/vendor/redactor/_plugins/table/table.js");
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Redactor/Field.vue?vue&type=template&id=99cbd11e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Redactor/Field.vue?vue&type=template&id=99cbd11e& ***!
  \*****************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/fieldtypes/Redactor/Field.vue":
/*!****************************************************!*\
  !*** ./resources/js/fieldtypes/Redactor/Field.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_99cbd11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=99cbd11e& */ "./resources/js/fieldtypes/Redactor/Field.vue?vue&type=template&id=99cbd11e&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Redactor/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_99cbd11e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_99cbd11e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Redactor/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Redactor/Field.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/fieldtypes/Redactor/Field.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Redactor/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Redactor/Field.vue?vue&type=template&id=99cbd11e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/fieldtypes/Redactor/Field.vue?vue&type=template&id=99cbd11e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_99cbd11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=99cbd11e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Redactor/Field.vue?vue&type=template&id=99cbd11e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_99cbd11e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_99cbd11e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvUmVkYWN0b3IvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1JlZGFjdG9yL0ZpZWxkLnZ1ZT9hMTJjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1JlZGFjdG9yL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9SZWRhY3Rvci9GaWVsZC52dWU/ZmRkNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9SZWRhY3Rvci9GaWVsZC52dWU/NGE1MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdmVuZG9yL3JlZGFjdG9yL19wbHVnaW5zL3RhYmxlL3RhYmxlLmpzIl0sIm5hbWVzIjpbIiRSIiwiYWRkIiwidHJhbnNsYXRpb25zIiwiZW4iLCJpbml0IiwiYXBwIiwibGFuZyIsIm9wdHMiLCJjYXJldCIsImVkaXRvciIsInRvb2xiYXIiLCJjb21wb25lbnQiLCJpbnNwZWN0b3IiLCJpbnNlcnRpb24iLCJzZWxlY3Rpb24iLCJvbmRyb3Bkb3duIiwidGFibGUiLCJvYnNlcnZlIiwiZHJvcGRvd24iLCJfb2JzZXJ2ZURyb3Bkb3duIiwib25ib3R0b21jbGljayIsImluc2VydFRvRW5kIiwiZ2V0TGFzdE5vZGUiLCJzdGFydCIsInRpdGxlIiwiZ2V0IiwiYXBpIiwiY2xhc3NuYW1lIiwib2JqIiwiJGJ1dHRvbiIsImFkZEJ1dHRvbkJlZm9yZSIsInNldEljb24iLCJzZXREcm9wZG93biIsImluc2VydCIsInJvd3MiLCJjb2x1bW5zIiwiJGNvbXBvbmVudCIsImNyZWF0ZSIsImkiLCJhZGRSb3ciLCJpbnNlcnRIdG1sIiwic2V0U3RhcnQiLCJhZGRSb3dBYm92ZSIsIl9nZXRDb21wb25lbnQiLCJjdXJyZW50IiwiZ2V0Q3VycmVudCIsIiRyb3ciLCJhZGRSb3dUbyIsImFkZFJvd0JlbG93IiwiYWRkQ29sdW1uTGVmdCIsInNhdmUiLCJhZGRDb2x1bW5UbyIsInJlc3RvcmUiLCJhZGRDb2x1bW5SaWdodCIsImFkZEhlYWQiLCJkZWxldGVIZWFkIiwiJGhlYWQiLCJkb20iLCJjbG9zZXN0IiwibGVuZ3RoIiwicmVtb3ZlSGVhZCIsImRlbGV0ZUNvbHVtbiIsIiRjdXJyZW50Q2VsbCIsIm5leHRDZWxsIiwibmV4dEVsZW1lbnQiLCJwcmV2Q2VsbCIsInByZXZFbGVtZW50IiwicmVtb3ZlQ29sdW1uIiwic2V0RW5kIiwiZGVsZXRlVGFibGUiLCJkZWxldGVSb3ciLCIkY3VycmVudFJvdyIsIm5leHRSb3ciLCJwcmV2Um93IiwicmVtb3ZlUm93IiwiX2dldFRhYmxlIiwicmVtb3ZlIiwiZGF0YSIsInBhcnNlIiwiaXNUYWJsZSIsImdldFRhYmxlIiwiaXRlbXMiLCJnZXRJdGVtc0J5Q2xhc3MiLCJ0YWJsZUl0ZW0iLCJnZXRJdGVtIiwiX29ic2VydmVJdGVtcyIsImRpc2FibGUiLCJlbmFibGUiLCJ0eXBlIiwiUmVkYWN0b3IiLCJtaXhpbnMiLCJlbCIsImNtbnQiLCJ1bmRlZmluZWQiLCJfaW5pdCIsIiRlbGVtZW50IiwiZmluZCIsImZpcnN0IiwiY2hpbGRyZW4iLCJfYnVpbGRSb3ciLCJhcHBlbmQiLCJwcmVwZW5kIiwiX2FkZFJvd1RvIiwiJGN1cnJlbnQiLCJpbmRleCIsImVhY2giLCJub2RlIiwiJG5vZGUiLCJvcmlnQ2VsbCIsIiRvcmlnQ2VsbCIsIiR0ZCIsImNsb25lIiwiaHRtbCIsImFmdGVyIiwiYmVmb3JlIiwid3JhcHBlciIsImVsZW1lbnQiLCIkZmlndXJlIiwidGFnTmFtZSIsIl9idWlsZFdyYXBwZXIiLCJfYnVpbGRFbGVtZW50IiwiX2luaXRXcmFwcGVyIiwicG9zaXRpb24iLCIkbmV3Um93IiwidGFnIiwiJGNlbGwiLCJhdHRyIiwiYWRkQ2xhc3MiLCJkZXRlY3RvciIsImlzSWUiLCJyZW1vdmVBdHRyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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SSxDQUFDc0QsTUFBTCxDQUFZeUIsS0FBWjtBQUNIOztBQUVELGFBQU8vRSxJQUFQO0FBQ0gsS0FqSjhCO0FBa0ovQjBFLGlCQUFhLEVBQUUsdUJBQVNkLElBQVQsRUFDZjtBQUNJLFVBQUlBLElBQUosRUFDQTtBQUNJLGFBQUtYLFFBQUwsR0FBZ0IvRixFQUFFLENBQUN5RCxHQUFILENBQU9pRCxJQUFQLENBQWhCO0FBQ0gsT0FIRCxNQUtBO0FBQ0ksYUFBS1gsUUFBTCxHQUFnQi9GLEVBQUUsQ0FBQ3lELEdBQUgsQ0FBTyxTQUFQLENBQWhCO0FBQ0EsYUFBSzJDLE1BQUwsQ0FBWSxLQUFLTCxRQUFqQjtBQUNIO0FBQ0osS0E3SjhCO0FBOEovQndCLGlCQUFhLEVBQUUsdUJBQVNiLElBQVQsRUFDZjtBQUNJQSxVQUFJLEdBQUdBLElBQUksSUFBSSxVQUFmO0FBRUEsV0FBSzVCLEtBQUwsQ0FBVzRCLElBQVg7QUFDSCxLQW5LOEI7QUFvSy9CZSxnQkFBWSxFQUFFLHdCQUNkO0FBQ0ksV0FBS00sUUFBTCxDQUFjLG9CQUFkO0FBQ0EsV0FBS0QsSUFBTCxDQUFVO0FBQ04sOEJBQXNCLE9BRGhCO0FBRU4sb0JBQVksSUFGTjtBQUdOLDJCQUFtQjtBQUhiLE9BQVY7O0FBTUEsVUFBSSxLQUFLekgsR0FBTCxDQUFTMkgsUUFBVCxDQUFrQkMsSUFBbEIsRUFBSixFQUNBO0FBQ0ksYUFBS0MsVUFBTCxDQUFnQixpQkFBaEI7QUFDSDtBQUNKO0FBakw4QixHQUFuQztBQW9MSCxDQXRMRCxFQXNMR3pDLFFBdExILEUiLCJmaWxlIjoianMvY2h1bmtzLzQ1LmpzP2lkPTZkNTZhNDVjOTc3YTlkNzdlY2U4Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxyZWRhY3RvclxuICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgIDpsYWJlbD1cImZpZWxkLm5hbWVcIlxuICAgICAgICA6aGVscD1cImZpZWxkLmhlbHBcIlxuICAgICAgICA6cGxhY2Vob2xkZXI9XCJmaWVsZC5zZXR0aW5ncy5wbGFjZWhvbGRlclwiXG4gICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50KVwiXG4gICAgICAgIDpjb25maWc9XCJ7XG4gICAgICAgICAgICBwbHVnaW5zOiBbJ3RhYmxlJ11cbiAgICAgICAgfVwiXG4gICAgPjwvcmVkYWN0b3I+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCAnLi4vLi4vLi4vdmVuZG9yL3JlZGFjdG9yL19wbHVnaW5zL3RhYmxlL3RhYmxlLmpzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAncmVkYWN0b3ItZmllbGR0eXBlJyxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwicmVkYWN0b3JcIiwge1xuICAgIGF0dHJzOiB7XG4gICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlLFxuICAgICAgbGFiZWw6IF92bS5maWVsZC5uYW1lLFxuICAgICAgaGVscDogX3ZtLmZpZWxkLmhlbHAsXG4gICAgICBwbGFjZWhvbGRlcjogX3ZtLmZpZWxkLnNldHRpbmdzLnBsYWNlaG9sZGVyLFxuICAgICAgdmFsdWU6IF92bS52YWx1ZSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBwbHVnaW5zOiBbXCJ0YWJsZVwiXVxuICAgICAgfVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0XCIsICRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTljYmQxMWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzk5Y2JkMTFlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzk5Y2JkMTFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzk5Y2JkMTFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTljYmQxMWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTljYmQxMWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9maWVsZHR5cGVzL1JlZGFjdG9yL0ZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTljYmQxMWUmXCIiLCIoZnVuY3Rpb24oJFIpXG57XG4gICAgJFIuYWRkKCdwbHVnaW4nLCAndGFibGUnLCB7XG4gICAgICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgICAgICAgZW46IHtcbiAgICAgICAgXHRcdFwidGFibGVcIjogXCJUYWJsZVwiLFxuICAgICAgICBcdFx0XCJpbnNlcnQtdGFibGVcIjogXCJJbnNlcnQgdGFibGVcIixcbiAgICAgICAgXHRcdFwiaW5zZXJ0LXJvdy1hYm92ZVwiOiBcIkluc2VydCByb3cgYWJvdmVcIixcbiAgICAgICAgXHRcdFwiaW5zZXJ0LXJvdy1iZWxvd1wiOiBcIkluc2VydCByb3cgYmVsb3dcIixcbiAgICAgICAgXHRcdFwiaW5zZXJ0LWNvbHVtbi1sZWZ0XCI6IFwiSW5zZXJ0IGNvbHVtbiBsZWZ0XCIsXG4gICAgICAgIFx0XHRcImluc2VydC1jb2x1bW4tcmlnaHRcIjogXCJJbnNlcnQgY29sdW1uIHJpZ2h0XCIsXG4gICAgICAgIFx0XHRcImFkZC1oZWFkXCI6IFwiQWRkIGhlYWRcIixcbiAgICAgICAgXHRcdFwiZGVsZXRlLWhlYWRcIjogXCJEZWxldGUgaGVhZFwiLFxuICAgICAgICBcdFx0XCJkZWxldGUtY29sdW1uXCI6IFwiRGVsZXRlIGNvbHVtblwiLFxuICAgICAgICBcdFx0XCJkZWxldGUtcm93XCI6IFwiRGVsZXRlIHJvd1wiLFxuICAgICAgICBcdFx0XCJkZWxldGUtdGFibGVcIjogXCJEZWxldGUgdGFibGVcIlxuICAgICAgICBcdH1cbiAgICAgICAgfSxcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oYXBwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICAgICAgICAgIHRoaXMubGFuZyA9IGFwcC5sYW5nO1xuICAgICAgICAgICAgdGhpcy5vcHRzID0gYXBwLm9wdHM7XG4gICAgICAgICAgICB0aGlzLmNhcmV0ID0gYXBwLmNhcmV0O1xuICAgICAgICAgICAgdGhpcy5lZGl0b3IgPSBhcHAuZWRpdG9yO1xuICAgICAgICAgICAgdGhpcy50b29sYmFyID0gYXBwLnRvb2xiYXI7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGFwcC5jb21wb25lbnQ7XG4gICAgICAgICAgICB0aGlzLmluc3BlY3RvciA9IGFwcC5pbnNwZWN0b3I7XG4gICAgICAgICAgICB0aGlzLmluc2VydGlvbiA9IGFwcC5pbnNlcnRpb247XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IGFwcC5zZWxlY3Rpb247XG4gICAgICAgIH0sXG4gICAgICAgIC8vIG1lc3NhZ2VzXG4gICAgICAgIG9uZHJvcGRvd246IHtcbiAgICAgICAgICAgIHRhYmxlOiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogZnVuY3Rpb24oZHJvcGRvd24pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vYnNlcnZlRHJvcGRvd24oZHJvcGRvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25ib3R0b21jbGljazogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmluc2VydGlvbi5pbnNlcnRUb0VuZCh0aGlzLmVkaXRvci5nZXRMYXN0Tm9kZSgpLCAndGFibGUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBwdWJsaWNcbiAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuXHRcdFx0dmFyIGRyb3Bkb3duID0ge1xuICAgIFx0XHRcdG9ic2VydmU6ICd0YWJsZScsXG4gICAgXHRcdFx0J2luc2VydC10YWJsZSc6IHtcbiAgICBcdFx0XHRcdHRpdGxlOiB0aGlzLmxhbmcuZ2V0KCdpbnNlcnQtdGFibGUnKSxcbiAgICBcdFx0XHRcdGFwaTogJ3BsdWdpbi50YWJsZS5pbnNlcnQnXG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHQnaW5zZXJ0LXJvdy1hYm92ZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMubGFuZy5nZXQoJ2luc2VydC1yb3ctYWJvdmUnKSxcbiAgICBcdFx0XHRcdGNsYXNzbmFtZTogJ3JlZGFjdG9yLXRhYmxlLWl0ZW0tb2JzZXJ2YWJsZScsXG4gICAgICAgICAgICAgICAgICAgIGFwaTogJ3BsdWdpbi50YWJsZS5hZGRSb3dBYm92ZSdcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdCdpbnNlcnQtcm93LWJlbG93Jzoge1xuICAgICAgICBcdFx0XHR0aXRsZTogdGhpcy5sYW5nLmdldCgnaW5zZXJ0LXJvdy1iZWxvdycpLFxuICAgICAgICBcdFx0XHRjbGFzc25hbWU6ICdyZWRhY3Rvci10YWJsZS1pdGVtLW9ic2VydmFibGUnLFxuICAgICAgICAgICAgICAgICAgICBhcGk6ICdwbHVnaW4udGFibGUuYWRkUm93QmVsb3cnXG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHQnaW5zZXJ0LWNvbHVtbi1sZWZ0Jzoge1xuICAgICAgICBcdFx0XHR0aXRsZTogdGhpcy5sYW5nLmdldCgnaW5zZXJ0LWNvbHVtbi1sZWZ0JyksXG4gICAgICAgIFx0XHRcdGNsYXNzbmFtZTogJ3JlZGFjdG9yLXRhYmxlLWl0ZW0tb2JzZXJ2YWJsZScsXG4gICAgICAgICAgICAgICAgICAgIGFwaTogJ3BsdWdpbi50YWJsZS5hZGRDb2x1bW5MZWZ0J1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0J2luc2VydC1jb2x1bW4tcmlnaHQnOiB7XG4gICAgICAgIFx0XHRcdHRpdGxlOiB0aGlzLmxhbmcuZ2V0KCdpbnNlcnQtY29sdW1uLXJpZ2h0JyksXG4gICAgICAgIFx0XHRcdGNsYXNzbmFtZTogJ3JlZGFjdG9yLXRhYmxlLWl0ZW0tb2JzZXJ2YWJsZScsXG4gICAgICAgICAgICAgICAgICAgIGFwaTogJ3BsdWdpbi50YWJsZS5hZGRDb2x1bW5SaWdodCdcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdCdhZGQtaGVhZCc6IHtcbiAgICAgICAgXHRcdFx0dGl0bGU6IHRoaXMubGFuZy5nZXQoJ2FkZC1oZWFkJyksXG4gICAgICAgIFx0XHRcdGNsYXNzbmFtZTogJ3JlZGFjdG9yLXRhYmxlLWl0ZW0tb2JzZXJ2YWJsZScsXG4gICAgICAgICAgICAgICAgICAgIGFwaTogJ3BsdWdpbi50YWJsZS5hZGRIZWFkJ1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0J2RlbGV0ZS1oZWFkJzoge1xuICAgICAgICBcdFx0XHR0aXRsZTogdGhpcy5sYW5nLmdldCgnZGVsZXRlLWhlYWQnKSxcbiAgICAgICAgXHRcdFx0Y2xhc3NuYW1lOiAncmVkYWN0b3ItdGFibGUtaXRlbS1vYnNlcnZhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpOiAncGx1Z2luLnRhYmxlLmRlbGV0ZUhlYWQnXG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHQnZGVsZXRlLWNvbHVtbic6IHtcbiAgICAgICAgXHRcdFx0dGl0bGU6IHRoaXMubGFuZy5nZXQoJ2RlbGV0ZS1jb2x1bW4nKSxcbiAgICAgICAgXHRcdFx0Y2xhc3NuYW1lOiAncmVkYWN0b3ItdGFibGUtaXRlbS1vYnNlcnZhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpOiAncGx1Z2luLnRhYmxlLmRlbGV0ZUNvbHVtbidcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdCdkZWxldGUtcm93Jzoge1xuICAgICAgICBcdFx0XHR0aXRsZTogdGhpcy5sYW5nLmdldCgnZGVsZXRlLXJvdycpLFxuICAgICAgICBcdFx0XHRjbGFzc25hbWU6ICdyZWRhY3Rvci10YWJsZS1pdGVtLW9ic2VydmFibGUnLFxuICAgICAgICAgICAgICAgICAgICBhcGk6ICdwbHVnaW4udGFibGUuZGVsZXRlUm93J1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0J2RlbGV0ZS10YWJsZSc6IHtcbiAgICAgICAgXHRcdFx0dGl0bGU6IHRoaXMubGFuZy5nZXQoJ2RlbGV0ZS10YWJsZScpLFxuICAgICAgICBcdFx0XHRjbGFzc25hbWU6ICdyZWRhY3Rvci10YWJsZS1pdGVtLW9ic2VydmFibGUnLFxuICAgICAgICAgICAgICAgICAgICBhcGk6ICdwbHVnaW4udGFibGUuZGVsZXRlVGFibGUnXG4gICAgXHRcdFx0fVxuXHRcdFx0fTtcbiAgICAgICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMubGFuZy5nZXQoJ3RhYmxlJylcbiAgICAgICAgICAgIH07XG5cblx0XHRcdHZhciAkYnV0dG9uID0gdGhpcy50b29sYmFyLmFkZEJ1dHRvbkJlZm9yZSgnbGluaycsICd0YWJsZScsIG9iaik7XG5cdFx0XHQkYnV0dG9uLnNldEljb24oJzxpIGNsYXNzPVwicmUtaWNvbi10YWJsZVwiPjwvaT4nKTtcblx0XHRcdCRidXR0b24uc2V0RHJvcGRvd24oZHJvcGRvd24pO1xuICAgICAgICB9LFxuXHRcdGluc2VydDogZnVuY3Rpb24oKVxuXHRcdHtcbiAgICAgICAgICAgIHZhciByb3dzID0gMjtcblx0XHRcdHZhciBjb2x1bW5zID0gMztcblx0XHRcdHZhciAkY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnQuY3JlYXRlKCd0YWJsZScpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKylcblx0XHRcdHtcblx0XHRcdCAgICAkY29tcG9uZW50LmFkZFJvdyhjb2x1bW5zKTtcblx0XHRcdH1cblxuXHRcdFx0JGNvbXBvbmVudCA9ICB0aGlzLmluc2VydGlvbi5pbnNlcnRIdG1sKCRjb21wb25lbnQpO1xuXHRcdFx0dGhpcy5jYXJldC5zZXRTdGFydCgkY29tcG9uZW50KTtcblx0XHR9LFxuICAgICAgICBhZGRSb3dBYm92ZTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJGNvbXBvbmVudCA9IHRoaXMuX2dldENvbXBvbmVudCgpO1xuICAgICAgICAgICAgaWYgKCRjb21wb25lbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnNlbGVjdGlvbi5nZXRDdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgdmFyICRyb3cgPSAkY29tcG9uZW50LmFkZFJvd1RvKGN1cnJlbnQsICdiZWZvcmUnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZXQuc2V0U3RhcnQoJHJvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFkZFJvd0JlbG93OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkY29tcG9uZW50ID0gdGhpcy5fZ2V0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICBpZiAoJGNvbXBvbmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuc2VsZWN0aW9uLmdldEN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICB2YXIgJHJvdyA9ICRjb21wb25lbnQuYWRkUm93VG8oY3VycmVudCwgJ2FmdGVyJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhcmV0LnNldFN0YXJ0KCRyb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhZGRDb2x1bW5MZWZ0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkY29tcG9uZW50ID0gdGhpcy5fZ2V0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICBpZiAoJGNvbXBvbmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuc2VsZWN0aW9uLmdldEN1cnJlbnQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNhdmUoKTtcbiAgICAgICAgICAgICAgICAkY29tcG9uZW50LmFkZENvbHVtblRvKGN1cnJlbnQsICdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhZGRDb2x1bW5SaWdodDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJGNvbXBvbmVudCA9IHRoaXMuX2dldENvbXBvbmVudCgpO1xuICAgICAgICAgICAgaWYgKCRjb21wb25lbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnNlbGVjdGlvbi5nZXRDdXJyZW50KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zYXZlKCk7XG4gICAgICAgICAgICAgICAgJGNvbXBvbmVudC5hZGRDb2x1bW5UbyhjdXJyZW50LCAncmlnaHQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEhlYWQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRjb21wb25lbnQgPSB0aGlzLl9nZXRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIGlmICgkY29tcG9uZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNhdmUoKTtcbiAgICAgICAgICAgICAgICAkY29tcG9uZW50LmFkZEhlYWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZUhlYWQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRjb21wb25lbnQgPSB0aGlzLl9nZXRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIGlmICgkY29tcG9uZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5zZWxlY3Rpb24uZ2V0Q3VycmVudCgpO1xuICAgICAgICAgICAgICAgIHZhciAkaGVhZCA9ICRSLmRvbShjdXJyZW50KS5jbG9zZXN0KCd0aGVhZCcpO1xuICAgICAgICAgICAgICAgIGlmICgkaGVhZC5sZW5ndGggIT09IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LnJlbW92ZUhlYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJldC5zZXRTdGFydCgkY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc2F2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LnJlbW92ZUhlYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlQ29sdW1uOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkY29tcG9uZW50ID0gdGhpcy5fZ2V0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICBpZiAoJGNvbXBvbmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuc2VsZWN0aW9uLmdldEN1cnJlbnQoKTtcblxuICAgICAgICAgICAgICAgIHZhciAkY3VycmVudENlbGwgPSAkUi5kb20oY3VycmVudCkuY2xvc2VzdCgndGQsIHRoJyk7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRDZWxsID0gJGN1cnJlbnRDZWxsLm5leHRFbGVtZW50KCkuZ2V0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZDZWxsID0gJGN1cnJlbnRDZWxsLnByZXZFbGVtZW50KCkuZ2V0KCk7XG5cbiAgICAgICAgICAgICAgICAkY29tcG9uZW50LnJlbW92ZUNvbHVtbihjdXJyZW50KTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXh0Q2VsbCkgdGhpcy5jYXJldC5zZXRTdGFydChuZXh0Q2VsbCk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJldkNlbGwpIHRoaXMuY2FyZXQuc2V0RW5kKHByZXZDZWxsKTtcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZGVsZXRlVGFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlUm93OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkY29tcG9uZW50ID0gdGhpcy5fZ2V0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICBpZiAoJGNvbXBvbmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuc2VsZWN0aW9uLmdldEN1cnJlbnQoKTtcblxuICAgICAgICAgICAgICAgIHZhciAkY3VycmVudFJvdyA9ICRSLmRvbShjdXJyZW50KS5jbG9zZXN0KCd0cicpO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0Um93ID0gJGN1cnJlbnRSb3cubmV4dEVsZW1lbnQoKS5nZXQoKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJldlJvdyA9ICRjdXJyZW50Um93LnByZXZFbGVtZW50KCkuZ2V0KCk7XG5cbiAgICAgICAgICAgICAgICAkY29tcG9uZW50LnJlbW92ZVJvdyhjdXJyZW50KTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXh0Um93KSB0aGlzLmNhcmV0LnNldFN0YXJ0KG5leHRSb3cpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByZXZSb3cpIHRoaXMuY2FyZXQuc2V0RW5kKHByZXZSb3cpO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5kZWxldGVUYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGVUYWJsZTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgdGFibGUgPSB0aGlzLl9nZXRUYWJsZSgpO1xuICAgICAgICAgICAgaWYgKHRhYmxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnJlbW92ZSh0YWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gcHJpdmF0ZVxuICAgICAgICBfZ2V0VGFibGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnNlbGVjdGlvbi5nZXRDdXJyZW50KCk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuaW5zcGVjdG9yLnBhcnNlKGN1cnJlbnQpO1xuICAgICAgICAgICAgaWYgKGRhdGEuaXNUYWJsZSgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmdldFRhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9nZXRDb21wb25lbnQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnNlbGVjdGlvbi5nZXRDdXJyZW50KCk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuaW5zcGVjdG9yLnBhcnNlKGN1cnJlbnQpO1xuICAgICAgICAgICAgaWYgKGRhdGEuaXNUYWJsZSgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IGRhdGEuZ2V0VGFibGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5jcmVhdGUoJ3RhYmxlJywgdGFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfb2JzZXJ2ZURyb3Bkb3duOiBmdW5jdGlvbihkcm9wZG93bilcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHRhYmxlID0gdGhpcy5fZ2V0VGFibGUoKTtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IGRyb3Bkb3duLmdldEl0ZW1zQnlDbGFzcygncmVkYWN0b3ItdGFibGUtaXRlbS1vYnNlcnZhYmxlJyk7XG4gICAgICAgICAgICB2YXIgdGFibGVJdGVtID0gZHJvcGRvd24uZ2V0SXRlbSgnaW5zZXJ0LXRhYmxlJyk7XG4gICAgICAgICAgICBpZiAodGFibGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZUl0ZW1zKGl0ZW1zLCAnZW5hYmxlJyk7XG4gICAgICAgICAgICAgICAgdGFibGVJdGVtLmRpc2FibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vYnNlcnZlSXRlbXMoaXRlbXMsICdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgdGFibGVJdGVtLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfb2JzZXJ2ZUl0ZW1zOiBmdW5jdGlvbihpdGVtcywgdHlwZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXVt0eXBlXSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59KShSZWRhY3Rvcik7XG4oZnVuY3Rpb24oJFIpXG57XG4gICAgJFIuYWRkKCdjbGFzcycsICd0YWJsZS5jb21wb25lbnQnLCB7XG4gICAgICAgIG1peGluczogWydkb20nLCAnY29tcG9uZW50J10sXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKGFwcCwgZWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYXBwID0gYXBwO1xuXG4gICAgICAgICAgICAvLyBpbml0XG4gICAgICAgICAgICByZXR1cm4gKGVsICYmIGVsLmNtbnQgIT09IHVuZGVmaW5lZCkgPyBlbCA6IHRoaXMuX2luaXQoZWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHB1YmxpY1xuICAgICAgICBhZGRIZWFkOiBmdW5jdGlvbigpXG4gICAgICAgIHtcblx0XHRcdHRoaXMucmVtb3ZlSGVhZCgpO1xuXG5cdFx0XHR2YXIgY29sdW1ucyA9IHRoaXMuJGVsZW1lbnQuZmluZCgndHInKS5maXJzdCgpLmNoaWxkcmVuKCd0ZCwgdGgnKS5sZW5ndGg7XG5cdFx0XHR2YXIgJGhlYWQgPSAkUi5kb20oJzx0aGVhZD4nKTtcbiAgICAgICAgICAgIHZhciAkcm93ID0gdGhpcy5fYnVpbGRSb3coY29sdW1ucywgJzx0aD4nKTtcblxuICAgICAgICAgICAgJGhlYWQuYXBwZW5kKCRyb3cpO1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5wcmVwZW5kKCRoZWFkKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkUm93OiBmdW5jdGlvbihjb2x1bW5zKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJHJvdyA9IHRoaXMuX2J1aWxkUm93KGNvbHVtbnMpO1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoJHJvdyk7XG5cbiAgICAgICAgICAgIHJldHVybiAkcm93O1xuICAgICAgICB9LFxuICAgICAgICBhZGRSb3dUbzogZnVuY3Rpb24oY3VycmVudCwgdHlwZSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZFJvd1RvKGN1cnJlbnQsIHR5cGUpO1xuICAgICAgICB9LFxuICAgICAgICBhZGRDb2x1bW5UbzogZnVuY3Rpb24oY3VycmVudCwgdHlwZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRjdXJyZW50ID0gJFIuZG9tKGN1cnJlbnQpO1xuICAgICAgICAgICAgdmFyICRjdXJyZW50Um93ID0gJGN1cnJlbnQuY2xvc2VzdCgndHInKTtcbiAgICAgICAgICAgIHZhciAkY3VycmVudENlbGwgPSAkY3VycmVudC5jbG9zZXN0KCd0ZCwgdGgnKTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgICAgICRjdXJyZW50Um93LmZpbmQoJ3RkLCB0aCcpLmVhY2goZnVuY3Rpb24obm9kZSwgaSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKG5vZGUgPT09ICRjdXJyZW50Q2VsbC5nZXQoKSkgaW5kZXggPSBpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJGVsZW1lbnQuZmluZCgndHInKS5lYWNoKGZ1bmN0aW9uKG5vZGUpXG5cdFx0XHR7XG4gICAgXHRcdFx0dmFyICRub2RlID0gJFIuZG9tKG5vZGUpO1xuXHRcdFx0XHR2YXIgb3JpZ0NlbGwgPSAkbm9kZS5maW5kKCd0ZCwgdGgnKS5nZXQoaW5kZXgpO1xuXHRcdFx0XHR2YXIgJG9yaWdDZWxsID0gJFIuZG9tKG9yaWdDZWxsKTtcblxuXHRcdFx0XHR2YXIgJHRkID0gJG9yaWdDZWxsLmNsb25lKCk7XG5cdFx0XHRcdCR0ZC5odG1sKCc8ZGl2IGRhdGEtcmVkYWN0b3ItdGFnPVwidGJyXCI+PC9kaXY+Jyk7XG5cblx0XHRcdFx0aWYgKHR5cGUgPT09ICdyaWdodCcpICRvcmlnQ2VsbC5hZnRlcigkdGQpO1xuXHRcdFx0XHRlbHNlICAgICAgICAgICAgICAgICAgJG9yaWdDZWxsLmJlZm9yZSgkdGQpO1xuXHRcdFx0fSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUhlYWQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuXHRcdFx0dmFyICRoZWFkID0gdGhpcy4kZWxlbWVudC5maW5kKCd0aGVhZCcpO1xuXHRcdFx0aWYgKCRoZWFkLmxlbmd0aCAhPT0gMCkgJGhlYWQucmVtb3ZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZVJvdzogZnVuY3Rpb24oY3VycmVudClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRjdXJyZW50ID0gJFIuZG9tKGN1cnJlbnQpO1xuICAgICAgICAgICAgdmFyICRjdXJyZW50Um93ID0gJGN1cnJlbnQuY2xvc2VzdCgndHInKTtcblxuICAgICAgICAgICAgJGN1cnJlbnRSb3cucmVtb3ZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUNvbHVtbjogZnVuY3Rpb24oY3VycmVudClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRjdXJyZW50ID0gJFIuZG9tKGN1cnJlbnQpO1xuICAgICAgICAgICAgdmFyICRjdXJyZW50Um93ID0gJGN1cnJlbnQuY2xvc2VzdCgndHInKTtcbiAgICAgICAgICAgIHZhciAkY3VycmVudENlbGwgPSAkY3VycmVudC5jbG9zZXN0KCd0ZCwgdGgnKTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgICAgICRjdXJyZW50Um93LmZpbmQoJ3RkLCB0aCcpLmVhY2goZnVuY3Rpb24obm9kZSwgaSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKG5vZGUgPT09ICRjdXJyZW50Q2VsbC5nZXQoKSkgaW5kZXggPSBpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJGVsZW1lbnQuZmluZCgndHInKS5lYWNoKGZ1bmN0aW9uKG5vZGUpXG5cdFx0XHR7XG4gICAgXHRcdFx0dmFyICRub2RlID0gJFIuZG9tKG5vZGUpO1xuXHRcdFx0XHR2YXIgb3JpZ0NlbGwgPSAkbm9kZS5maW5kKCd0ZCwgdGgnKS5nZXQoaW5kZXgpO1xuXHRcdFx0XHR2YXIgJG9yaWdDZWxsID0gJFIuZG9tKG9yaWdDZWxsKTtcblxuXHRcdFx0XHQkb3JpZ0NlbGwucmVtb3ZlKCk7XG5cdFx0XHR9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBwcml2YXRlXG4gICAgICAgIF9pbml0OiBmdW5jdGlvbihlbClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIsIGVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgJG5vZGUgPSAkUi5kb20oZWwpO1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gJG5vZGUuZ2V0KCk7XG4gICAgICAgICAgICAgICAgdmFyICRmaWd1cmUgPSAkbm9kZS5jbG9zZXN0KCdmaWd1cmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoJGZpZ3VyZS5sZW5ndGggIT09IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyID0gJGZpZ3VyZTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9ICRmaWd1cmUuZmluZCgndGFibGUnKS5nZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS50YWdOYW1lID09PSAnVEFCTEUnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9idWlsZFdyYXBwZXIod3JhcHBlcik7XG4gICAgICAgICAgICB0aGlzLl9idWlsZEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLl9pbml0V3JhcHBlcigpO1xuICAgICAgICB9LFxuICAgICAgICBfYWRkUm93VG86IGZ1bmN0aW9uKGN1cnJlbnQsIHBvc2l0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJGN1cnJlbnQgPSAkUi5kb20oY3VycmVudCk7XG4gICAgICAgICAgICB2YXIgJGN1cnJlbnRSb3cgPSAkY3VycmVudC5jbG9zZXN0KCd0cicpO1xuICAgICAgICAgICAgaWYgKCRjdXJyZW50Um93Lmxlbmd0aCAhPT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgY29sdW1ucyA9ICRjdXJyZW50Um93LmNoaWxkcmVuKCd0ZCwgdGgnKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyICRuZXdSb3cgPSB0aGlzLl9idWlsZFJvdyhjb2x1bW5zKTtcblxuICAgICAgICAgICAgICAgICRjdXJyZW50Um93W3Bvc2l0aW9uXSgkbmV3Um93KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAkbmV3Um93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfYnVpbGRSb3c6IGZ1bmN0aW9uKGNvbHVtbnMsIHRhZylcbiAgICAgICAge1xuICAgICAgICAgICAgdGFnID0gdGFnIHx8ICc8dGQ+JztcblxuICAgICAgICAgICAgdmFyICRyb3cgPSAkUi5kb20oJzx0cj4nKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1uczsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciAkY2VsbCA9ICRSLmRvbSh0YWcpO1xuICAgICAgICAgICAgICAgICRjZWxsLmF0dHIoJ2NvbnRlbnRlZGl0YWJsZScsIHRydWUpO1xuICAgICAgICAgICAgICAgICRjZWxsLmh0bWwoJzxkaXYgZGF0YS1yZWRhY3Rvci10YWc9XCJ0YnJcIj48L2Rpdj4nKTtcblxuICAgICAgICAgICAgICAgICRyb3cuYXBwZW5kKCRjZWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICRyb3c7XG4gICAgICAgIH0sXG4gICAgICAgIF9idWlsZEVsZW1lbnQ6IGZ1bmN0aW9uKG5vZGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChub2RlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkUi5kb20obm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRSLmRvbSgnPHRhYmxlPicpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kKHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfYnVpbGRXcmFwcGVyOiBmdW5jdGlvbihub2RlKVxuICAgICAgICB7XG4gICAgICAgICAgICBub2RlID0gbm9kZSB8fCAnPGZpZ3VyZT4nO1xuXG4gICAgICAgICAgICB0aGlzLnBhcnNlKG5vZGUpO1xuICAgICAgICB9LFxuICAgICAgICBfaW5pdFdyYXBwZXI6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygncmVkYWN0b3ItY29tcG9uZW50Jyk7XG4gICAgICAgICAgICB0aGlzLmF0dHIoe1xuICAgICAgICAgICAgICAgICdkYXRhLXJlZGFjdG9yLXR5cGUnOiAndGFibGUnLFxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMScsXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnRlZGl0YWJsZSc6IGZhbHNlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwLmRldGVjdG9yLmlzSWUoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHIoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbn0pKFJlZGFjdG9yKTsiXSwic291cmNlUm9vdCI6IiJ9