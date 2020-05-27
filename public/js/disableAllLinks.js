/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/vendor/fusion/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/utilities/disableAllLinks.js":
/*!***************************************************!*\
  !*** ./resources/js/utilities/disableAllLinks.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function () {
  disableLinks(true);
};

function disableLinks(xHow) {
  objLinks = document.links;

  for (i = 0; i < objLinks.length; i++) {
    objLinks[i].disabled = xHow;

    if (objLinks[i].onclick && xHow) {
      objLinks[i].onclick = new Function("return false;" + objLinks[i].onclick.toString().getFuncBody());
    } else if (xHow) {
      objLinks[i].onclick = function () {
        return false;
      };
    } else if (!xHow && objLinks[i].onclick.toString().indexOf("function(){return false;}") != -1) {
      objLinks[i].onclick = null;
    } else if (!xHow && objLinks[i].onclick.toString().indexOf("return false;") != -1) {
      strClick = objLinks[i].onclick.toString().getFuncBody().replace("return false;", "");
      objLinks[i].onclick = new Function(strClick);
    }
  }
}

String.prototype.getFuncBody = function () {
  var str = this.toString();
  str = str.replace(/[^{]+{/, "");
  str = str.substring(0, str.length - 1);
  str = str.replace(/\n/gi, "");

  if (!str.match(/\(.*\)/gi)) {
    str += ")";
  }

  return str;
};

/***/ }),

/***/ 1:
/*!******************************************************!*\
  !*** multi ./resources/js/utilities/disableAllLinks ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kai/Code/FusionCMS/cms/resources/js/utilities/disableAllLinks */"./resources/js/utilities/disableAllLinks.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3V0aWxpdGllcy9kaXNhYmxlQWxsTGlua3MuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZGlzYWJsZUxpbmtzIiwieEhvdyIsIm9iakxpbmtzIiwiZG9jdW1lbnQiLCJsaW5rcyIsImkiLCJsZW5ndGgiLCJkaXNhYmxlZCIsIm9uY2xpY2siLCJGdW5jdGlvbiIsInRvU3RyaW5nIiwiZ2V0RnVuY0JvZHkiLCJpbmRleE9mIiwic3RyQ2xpY2siLCJyZXBsYWNlIiwiU3RyaW5nIiwicHJvdG90eXBlIiwic3RyIiwic3Vic3RyaW5nIiwibWF0Y2giXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQVc7QUFDdkJDLGNBQVksQ0FBQyxJQUFELENBQVo7QUFDSCxDQUZEOztBQUlBLFNBQVNBLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQ3hCQyxVQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsS0FBcEI7O0FBRUEsT0FBS0MsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDSCxZQUFRLENBQUNHLENBQUQsQ0FBUixDQUFZRSxRQUFaLEdBQXVCTixJQUF2Qjs7QUFFQSxRQUFJQyxRQUFRLENBQUNHLENBQUQsQ0FBUixDQUFZRyxPQUFaLElBQXVCUCxJQUEzQixFQUFpQztBQUM3QkMsY0FBUSxDQUFDRyxDQUFELENBQVIsQ0FBWUcsT0FBWixHQUFzQixJQUFJQyxRQUFKLENBQWEsa0JBQWtCUCxRQUFRLENBQUNHLENBQUQsQ0FBUixDQUFZRyxPQUFaLENBQW9CRSxRQUFwQixHQUErQkMsV0FBL0IsRUFBL0IsQ0FBdEI7QUFDSCxLQUZELE1BRU8sSUFBSVYsSUFBSixFQUFVO0FBQ2JDLGNBQVEsQ0FBQ0csQ0FBRCxDQUFSLENBQVlHLE9BQVosR0FBc0IsWUFBVztBQUM3QixlQUFPLEtBQVA7QUFDSCxPQUZEO0FBR0gsS0FKTSxNQUlBLElBQUksQ0FBQ1AsSUFBRCxJQUFTQyxRQUFRLENBQUNHLENBQUQsQ0FBUixDQUFZRyxPQUFaLENBQW9CRSxRQUFwQixHQUErQkUsT0FBL0IsQ0FBdUMsMkJBQXZDLEtBQXVFLENBQUMsQ0FBckYsRUFBd0Y7QUFDM0ZWLGNBQVEsQ0FBQ0csQ0FBRCxDQUFSLENBQVlHLE9BQVosR0FBc0IsSUFBdEI7QUFDSCxLQUZNLE1BRUEsSUFBSSxDQUFDUCxJQUFELElBQVNDLFFBQVEsQ0FBQ0csQ0FBRCxDQUFSLENBQVlHLE9BQVosQ0FBb0JFLFFBQXBCLEdBQStCRSxPQUEvQixDQUF1QyxlQUF2QyxLQUEyRCxDQUFDLENBQXpFLEVBQTRFO0FBQy9FQyxjQUFRLEdBQUdYLFFBQVEsQ0FBQ0csQ0FBRCxDQUFSLENBQVlHLE9BQVosQ0FBb0JFLFFBQXBCLEdBQStCQyxXQUEvQixHQUE2Q0csT0FBN0MsQ0FBcUQsZUFBckQsRUFBc0UsRUFBdEUsQ0FBWDtBQUNBWixjQUFRLENBQUNHLENBQUQsQ0FBUixDQUFZRyxPQUFaLEdBQXNCLElBQUlDLFFBQUosQ0FBYUksUUFBYixDQUF0QjtBQUNIO0FBQ0o7QUFDSjs7QUFFREUsTUFBTSxDQUFDQyxTQUFQLENBQWlCTCxXQUFqQixHQUErQixZQUFXO0FBQ3RDLE1BQUlNLEdBQUcsR0FBRyxLQUFLUCxRQUFMLEVBQVY7QUFFQU8sS0FBRyxHQUFHQSxHQUFHLENBQUNILE9BQUosQ0FBWSxRQUFaLEVBQXNCLEVBQXRCLENBQU47QUFDQUcsS0FBRyxHQUFHQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxDQUFkLEVBQWlCRCxHQUFHLENBQUNYLE1BQUosR0FBYSxDQUE5QixDQUFOO0FBQ0FXLEtBQUcsR0FBR0EsR0FBRyxDQUFDSCxPQUFKLENBQVksTUFBWixFQUFvQixFQUFwQixDQUFOOztBQUVBLE1BQUksQ0FBQ0csR0FBRyxDQUFDRSxLQUFKLENBQVUsVUFBVixDQUFMLEVBQTRCO0FBQ3hCRixPQUFHLElBQUksR0FBUDtBQUNIOztBQUVELFNBQU9BLEdBQVA7QUFDSCxDQVpELEMiLCJmaWxlIjoiL2pzL2Rpc2FibGVBbGxMaW5rcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3ZlbmRvci9mdXNpb24vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBkaXNhYmxlTGlua3ModHJ1ZSlcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUxpbmtzKHhIb3cpIHtcbiAgICBvYmpMaW5rcyA9IGRvY3VtZW50LmxpbmtzO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG9iakxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9iakxpbmtzW2ldLmRpc2FibGVkID0geEhvdztcblxuICAgICAgICBpZiAob2JqTGlua3NbaV0ub25jbGljayAmJiB4SG93KSB7XG4gICAgICAgICAgICBvYmpMaW5rc1tpXS5vbmNsaWNrID0gbmV3IEZ1bmN0aW9uKFwicmV0dXJuIGZhbHNlO1wiICsgb2JqTGlua3NbaV0ub25jbGljay50b1N0cmluZygpLmdldEZ1bmNCb2R5KCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHhIb3cpIHtcbiAgICAgICAgICAgIG9iakxpbmtzW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIXhIb3cgJiYgb2JqTGlua3NbaV0ub25jbGljay50b1N0cmluZygpLmluZGV4T2YoXCJmdW5jdGlvbigpe3JldHVybiBmYWxzZTt9XCIpICE9IC0xKSB7XG4gICAgICAgICAgICBvYmpMaW5rc1tpXS5vbmNsaWNrID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICgheEhvdyAmJiBvYmpMaW5rc1tpXS5vbmNsaWNrLnRvU3RyaW5nKCkuaW5kZXhPZihcInJldHVybiBmYWxzZTtcIikgIT0gLTEpIHtcbiAgICAgICAgICAgIHN0ckNsaWNrID0gb2JqTGlua3NbaV0ub25jbGljay50b1N0cmluZygpLmdldEZ1bmNCb2R5KCkucmVwbGFjZShcInJldHVybiBmYWxzZTtcIiwgXCJcIilcbiAgICAgICAgICAgIG9iakxpbmtzW2ldLm9uY2xpY2sgPSBuZXcgRnVuY3Rpb24oc3RyQ2xpY2spXG4gICAgICAgIH1cbiAgICB9XG59XG5cblN0cmluZy5wcm90b3R5cGUuZ2V0RnVuY0JvZHkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyID0gdGhpcy50b1N0cmluZygpXG5cbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvW157XSt7LywgXCJcIilcbiAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKVxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXG4vZ2ksIFwiXCIpXG5cbiAgICBpZiAoIXN0ci5tYXRjaCgvXFwoLipcXCkvZ2kpKSB7XG4gICAgICAgIHN0ciArPSBcIilcIlxuICAgIH1cblxuICAgIHJldHVybiBzdHJcbn0iXSwic291cmNlUm9vdCI6IiJ9