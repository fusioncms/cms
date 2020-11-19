/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if ({"resources_js_pages_Dashboard_vue":1,"resources_js_pages_Auth_Login_vue":1,"resources_js_pages_SEO_Insight_vue":1,"resources_js_pages_Blueprints_Index_vue":1,"resources_js_pages_Blueprints_Edit_vue":1,"resources_js_pages_Taxonomies_Index_vue":1,"resources_js_pages_Taxonomies_Create_vue":1,"resources_js_pages_Taxonomies_Edit_vue":1,"resources_js_pages_Navigation_Index_vue":1,"resources_js_pages_Navigation_Create_vue":1,"resources_js_pages_Navigation_Edit_vue":1,"resources_js_pages_Nodes_Index_vue":1,"resources_js_pages_Nodes_Edit_vue":1,"resources_js_pages_Matrices_Index_vue":1,"resources_js_pages_Matrices_Create_vue":1,"resources_js_pages_Matrices_Edit_vue":1,"resources_js_pages_Singles_Edit_vue":1,"resources_js_pages_Collections_Index_vue":1,"resources_js_pages_Collections_Create_vue":1,"resources_js_pages_Collections_Edit_vue":1,"resources_js_pages_Terms_Index_vue":1,"resources_js_pages_Terms_Create_vue":1,"resources_js_pages_Terms_Edit_vue":1,"resources_js_pages_Fieldsets_Index_vue":1,"resources_js_pages_Fieldsets_Create_vue":1,"resources_js_pages_Fieldsets_Edit_vue":1,"resources_js_pages_Forms_Index_vue":1,"resources_js_pages_Forms_Create_vue":1,"resources_js_pages_Forms_Edit_vue":1,"resources_js_pages_Inbox_Index_vue":1,"resources_js_pages_Users_Index_vue":1,"resources_js_pages_Users_Create_vue":1,"resources_js_pages_Users_Edit_vue":1,"resources_js_pages_Users_Show_vue":1,"resources_js_pages_Roles_Index_vue":1,"resources_js_pages_Roles_Create_vue":1,"resources_js_pages_Roles_Edit_vue":1,"resources_js_pages_Roles_Show_vue":1,"resources_js_pages_Permissions_vue":1,"resources_js_pages_Settings_Index_vue":1,"resources_js_pages_Settings_Edit_vue":1,"resources_js_pages_Theme_vue":1,"resources_js_pages_Customize_vue":1,"resources_js_pages_FileManager_Index_vue":1,"resources_js_pages_FileManager_Show_vue":1,"resources_js_pages_Logs_Index_vue":1,"resources_js_pages_Backups_Index_vue":1,"resources_js_pages_Backups_Show_vue":1,"resources_js_pages_Addons_vue":1,"resources_js_pages_Updates_Index_vue":1,"resources_js_pages_Styleguide_Index_vue":1,"resources_js_pages_Styleguide_Tables_vue":1,"resources_js_pages_403_vue":1,"resources_js_pages_404_vue":1,"resources_js_components_Fieldtypes_Address_Field_vue":1,"resources_js_components_Fieldtypes_Address_Settings_vue":1,"resources_js_components_Fieldtypes_Asset_Field_vue":1,"resources_js_components_Fieldtypes_Asset_Settings_vue":1,"resources_js_components_Fieldtypes_Audio_Field_vue":1,"resources_js_components_Fieldtypes_Audio_Settings_vue":1,"resources_js_components_Fieldtypes_Checkbox_Field_vue":1,"resources_js_components_Fieldtypes_Checkbox_Settings_vue":1,"resources_js_components_Fieldtypes_Code_Field_vue":1,"resources_js_components_Fieldtypes_Code_Settings_vue":1,"resources_js_components_Fieldtypes_ColorPicker_Field_vue":1,"resources_js_components_Fieldtypes_ColorPicker_Settings_vue":1,"resources_js_components_Fieldtypes_Country_Field_vue":1,"resources_js_components_Fieldtypes_Country_Settings_vue":1,"resources_js_components_Fieldtypes_DateTime_Field_vue":1,"resources_js_components_Fieldtypes_DateTime_Settings_vue":1,"resources_js_components_Fieldtypes_Dictionary_Field_vue":1,"resources_js_components_Fieldtypes_Dictionary_Settings_vue":1,"resources_js_components_Fieldtypes_Divider_Field_vue":1,"resources_js_components_Fieldtypes_Divider_Settings_vue":1,"resources_js_components_Fieldtypes_Email_Field_vue":1,"resources_js_components_Fieldtypes_Email_Settings_vue":1,"resources_js_components_Fieldtypes_File_Field_vue":1,"resources_js_components_Fieldtypes_File_Settings_vue":1,"resources_js_components_Fieldtypes_Form_Field_vue":1,"resources_js_components_Fieldtypes_Form_Settings_vue":1,"resources_js_components_Fieldtypes_Hidden_Field_vue":1,"resources_js_components_Fieldtypes_Hidden_Settings_vue":1,"resources_js_components_Fieldtypes_Information_Field_vue":1,"resources_js_components_Fieldtypes_Information_Settings_vue":1,"resources_js_components_Fieldtypes_Input_Field_vue":1,"resources_js_components_Fieldtypes_Input_Settings_vue":1,"resources_js_components_Fieldtypes_Link_Field_vue":1,"resources_js_components_Fieldtypes_Link_Settings_vue":1,"resources_js_components_Fieldtypes_List_Field_vue":1,"resources_js_components_Fieldtypes_List_Settings_vue":1,"resources_js_components_Fieldtypes_Markdown_Field_vue":1,"resources_js_components_Fieldtypes_Markdown_Settings_vue":1,"resources_js_components_Fieldtypes_Number_Field_vue":1,"resources_js_components_Fieldtypes_Number_Settings_vue":1,"resources_js_components_Fieldtypes_Password_Field_vue":1,"resources_js_components_Fieldtypes_Password_Settings_vue":1,"resources_js_components_Fieldtypes_Phone_Field_vue":1,"resources_js_components_Fieldtypes_Phone_Settings_vue":1,"resources_js_components_Fieldtypes_Radio_Field_vue":1,"resources_js_components_Fieldtypes_Radio_Settings_vue":1,"resources_js_components_Fieldtypes_Range_Field_vue":1,"resources_js_components_Fieldtypes_Range_Settings_vue":1,"resources_js_components_Fieldtypes_Replicator_Field_vue":1,"resources_js_components_Fieldtypes_Replicator_Settings_vue":1,"resources_js_components_Fieldtypes_Search_Field_vue":1,"resources_js_components_Fieldtypes_Search_Settings_vue":1,"resources_js_components_Fieldtypes_Select_Field_vue":1,"resources_js_components_Fieldtypes_Select_Settings_vue":1,"resources_js_components_Fieldtypes_Table_Field_vue":1,"resources_js_components_Fieldtypes_Table_Settings_vue":1,"resources_js_components_Fieldtypes_Taxonomy_Field_vue":1,"resources_js_components_Fieldtypes_Taxonomy_Settings_vue":1,"resources_js_components_Fieldtypes_Textarea_Field_vue":1,"resources_js_components_Fieldtypes_Textarea_Settings_vue":1,"resources_js_components_Fieldtypes_Toggle_Field_vue":1,"resources_js_components_Fieldtypes_Toggle_Settings_vue":1,"resources_js_components_Fieldtypes_Url_Field_vue":1,"resources_js_components_Fieldtypes_Url_Settings_vue":1,"resources_js_components_Fieldtypes_USState_Field_vue":1,"resources_js_components_Fieldtypes_USState_Settings_vue":1,"resources_js_components_Fieldtypes_User_Field_vue":1,"resources_js_components_Fieldtypes_User_Settings_vue":1,"resources_js_components_Fieldtypes_Video_Field_vue":1,"resources_js_components_Fieldtypes_Video_Settings_vue":1,"resources_js_components_Fieldtypes_WYSIWYG_Field_vue":1,"resources_js_components_Fieldtypes_WYSIWYG_Settings_vue":1}[chunkId]) return "js/" + chunkId + ".js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "fusioncms:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/manifest": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 		
/******/ 		];
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => {
/******/ 								installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							});
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfusioncms"] = self["webpackChunkfusioncms"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb25jbXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zL3dlYnBhY2svcnVudGltZS9hbWQgZGVmaW5lIiwid2VicGFjazovL2Z1c2lvbmNtcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mdXNpb25jbXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Z1c2lvbmNtcy93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2Z1c2lvbmNtcy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zL3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9mdXNpb25jbXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mdXNpb25jbXMvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9mdXNpb25jbXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZnVzaW9uY21zL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Z1c2lvbmNtcy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBLEU7Ozs7O1dDRkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0YsRTs7Ozs7V0NSQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHVzTUFBdXNNO1dBQzdzTTtXQUNBO1dBQ0EsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQiw0QkFBNEIsUUFBUTtXQUMxRDtXQUNBO1dBQ0E7V0FDQSxnQkFBZ0Isb0JBQW9CO1dBQ3BDO1dBQ0Esa0dBQWtHLFlBQVksT0FBTztXQUNySDtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrRUFBa0Usa0NBQWtDO1dBQ3BHO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDekNBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQSw0Qjs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0M7O1dBRWhDO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSixjQUFjO1dBQ2Q7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsK0JBQStCO1dBQzlDO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLCtDOzs7O1VDaklBO1VBQ0EiLCJmaWxlIjoiL2pzL21hbmlmZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZEQgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyBFcnJvcignZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0Jyk7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgbm90IGJhc2VkIG9uIHRlbXBsYXRlXG5cdGlmICh7XCJyZXNvdXJjZXNfanNfcGFnZXNfRGFzaGJvYXJkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfQXV0aF9Mb2dpbl92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX1NFT19JbnNpZ2h0X3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfQmx1ZXByaW50c19JbmRleF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX0JsdWVwcmludHNfRWRpdF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX1RheG9ub21pZXNfSW5kZXhfdnVlXCI6MSxcInJlc291cmNlc19qc19wYWdlc19UYXhvbm9taWVzX0NyZWF0ZV92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX1RheG9ub21pZXNfRWRpdF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX05hdmlnYXRpb25fSW5kZXhfdnVlXCI6MSxcInJlc291cmNlc19qc19wYWdlc19OYXZpZ2F0aW9uX0NyZWF0ZV92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX05hdmlnYXRpb25fRWRpdF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX05vZGVzX0luZGV4X3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfTm9kZXNfRWRpdF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX01hdHJpY2VzX0luZGV4X3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfTWF0cmljZXNfQ3JlYXRlX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfTWF0cmljZXNfRWRpdF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX1NpbmdsZXNfRWRpdF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX0NvbGxlY3Rpb25zX0luZGV4X3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfQ29sbGVjdGlvbnNfQ3JlYXRlX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfQ29sbGVjdGlvbnNfRWRpdF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX1Rlcm1zX0luZGV4X3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfVGVybXNfQ3JlYXRlX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfVGVybXNfRWRpdF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX0ZpZWxkc2V0c19JbmRleF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX0ZpZWxkc2V0c19DcmVhdGVfdnVlXCI6MSxcInJlc291cmNlc19qc19wYWdlc19GaWVsZHNldHNfRWRpdF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX0Zvcm1zX0luZGV4X3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfRm9ybXNfQ3JlYXRlX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfRm9ybXNfRWRpdF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX0luYm94X0luZGV4X3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfVXNlcnNfSW5kZXhfdnVlXCI6MSxcInJlc291cmNlc19qc19wYWdlc19Vc2Vyc19DcmVhdGVfdnVlXCI6MSxcInJlc291cmNlc19qc19wYWdlc19Vc2Vyc19FZGl0X3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfVXNlcnNfU2hvd192dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX1JvbGVzX0luZGV4X3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfUm9sZXNfQ3JlYXRlX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfUm9sZXNfRWRpdF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX1JvbGVzX1Nob3dfdnVlXCI6MSxcInJlc291cmNlc19qc19wYWdlc19QZXJtaXNzaW9uc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX1NldHRpbmdzX0luZGV4X3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfU2V0dGluZ3NfRWRpdF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX1RoZW1lX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfQ3VzdG9taXplX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfRmlsZU1hbmFnZXJfSW5kZXhfdnVlXCI6MSxcInJlc291cmNlc19qc19wYWdlc19GaWxlTWFuYWdlcl9TaG93X3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfTG9nc19JbmRleF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX0JhY2t1cHNfSW5kZXhfdnVlXCI6MSxcInJlc291cmNlc19qc19wYWdlc19CYWNrdXBzX1Nob3dfdnVlXCI6MSxcInJlc291cmNlc19qc19wYWdlc19BZGRvbnNfdnVlXCI6MSxcInJlc291cmNlc19qc19wYWdlc19VcGRhdGVzX0luZGV4X3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfU3R5bGVndWlkZV9JbmRleF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX3BhZ2VzX1N0eWxlZ3VpZGVfVGFibGVzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfNDAzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfcGFnZXNfNDA0X3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0FkZHJlc3NfRmllbGRfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfQWRkcmVzc19TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19Bc3NldF9GaWVsZF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19Bc3NldF9TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19BdWRpb19GaWVsZF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19BdWRpb19TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19DaGVja2JveF9GaWVsZF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19DaGVja2JveF9TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19Db2RlX0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0NvZGVfU2V0dGluZ3NfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfQ29sb3JQaWNrZXJfRmllbGRfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfQ29sb3JQaWNrZXJfU2V0dGluZ3NfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfQ291bnRyeV9GaWVsZF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19Db3VudHJ5X1NldHRpbmdzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0RhdGVUaW1lX0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0RhdGVUaW1lX1NldHRpbmdzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0RpY3Rpb25hcnlfRmllbGRfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfRGljdGlvbmFyeV9TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19EaXZpZGVyX0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0RpdmlkZXJfU2V0dGluZ3NfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfRW1haWxfRmllbGRfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfRW1haWxfU2V0dGluZ3NfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfRmlsZV9GaWVsZF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19GaWxlX1NldHRpbmdzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0Zvcm1fRmllbGRfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfRm9ybV9TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19IaWRkZW5fRmllbGRfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfSGlkZGVuX1NldHRpbmdzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0luZm9ybWF0aW9uX0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0luZm9ybWF0aW9uX1NldHRpbmdzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0lucHV0X0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0lucHV0X1NldHRpbmdzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0xpbmtfRmllbGRfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfTGlua19TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19MaXN0X0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX0xpc3RfU2V0dGluZ3NfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfTWFya2Rvd25fRmllbGRfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfTWFya2Rvd25fU2V0dGluZ3NfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfTnVtYmVyX0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX051bWJlcl9TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19QYXNzd29yZF9GaWVsZF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19QYXNzd29yZF9TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19QaG9uZV9GaWVsZF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19QaG9uZV9TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19SYWRpb19GaWVsZF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19SYWRpb19TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19SYW5nZV9GaWVsZF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19SYW5nZV9TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19SZXBsaWNhdG9yX0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1JlcGxpY2F0b3JfU2V0dGluZ3NfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfU2VhcmNoX0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1NlYXJjaF9TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19TZWxlY3RfRmllbGRfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfU2VsZWN0X1NldHRpbmdzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1RhYmxlX0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1RhYmxlX1NldHRpbmdzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1RheG9ub215X0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1RheG9ub215X1NldHRpbmdzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1RleHRhcmVhX0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1RleHRhcmVhX1NldHRpbmdzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1RvZ2dsZV9GaWVsZF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19Ub2dnbGVfU2V0dGluZ3NfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfVXJsX0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1VybF9TZXR0aW5nc192dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19VU1N0YXRlX0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1VTU3RhdGVfU2V0dGluZ3NfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfVXNlcl9GaWVsZF92dWVcIjoxLFwicmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfRmllbGR0eXBlc19Vc2VyX1NldHRpbmdzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1ZpZGVvX0ZpZWxkX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1ZpZGVvX1NldHRpbmdzX3Z1ZVwiOjEsXCJyZXNvdXJjZXNfanNfY29tcG9uZW50c19GaWVsZHR5cGVzX1dZU0lXWUdfRmllbGRfdnVlXCI6MSxcInJlc291cmNlc19qc19jb21wb25lbnRzX0ZpZWxkdHlwZXNfV1lTSVdZR19TZXR0aW5nc192dWVcIjoxfVtjaHVua0lkXSkgcmV0dXJuIFwianMvXCIgKyBjaHVua0lkICsgXCIuanNcIjtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuY3NzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJmdXNpb25jbXM6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IGZuKGV2ZW50KSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2pzL21hbmlmZXN0XCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cbl07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSAoKSA9PiB7XG5cbn07XG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHR9XG5cdGNodW5rTG9hZGluZ0dsb2JhbCA9IGNodW5rTG9hZGluZ0dsb2JhbC5zbGljZSgpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtMb2FkaW5nR2xvYmFsLmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0xvYWRpbmdHbG9iYWxbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZSwgZXhlY3V0ZU1vZHVsZXNdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtmdXNpb25jbXNcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZnVzaW9uY21zXCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjazsiLCIvLyBydW4gc3RhcnR1cFxucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==