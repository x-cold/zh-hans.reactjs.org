/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _docsearch_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @docsearch/css */ \"./node_modules/@docsearch/css/dist/style.css\");\n/* harmony import */ var _docsearch_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_docsearch_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/fonts.css */ \"./src/styles/fonts.css\");\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_algolia_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/algolia.css */ \"./src/styles/algolia.css\");\n/* harmony import */ var _styles_algolia_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_algolia_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_sandpack_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/sandpack.css */ \"./src/styles/sandpack.css\");\n/* harmony import */ var _styles_sandpack_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sandpack_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var utils_hotjar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/hotjar */ \"./src/utils/hotjar.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/pengfei.yang/github/zh-hans.reactjs.org/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/*\n * Copyright (c) Facebook, Inc. and its affiliates.\n */\n\n\n\n\n\n\n\n\n\n\n\nif (false) {}\n\nconst EmptyAppShell = ({\n  children\n}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n  children: children\n}, void 0, false);\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  let AppShell = Component.appShell || EmptyAppShell; // In order to make sidebar scrolling between pages work as expected\n  // we need to access the underlying MDX component.\n\n  if (Component.isMDXComponent) {\n    AppShell = Component({}).props.originalType.appShell;\n  }\n\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n    // Monkey patch Google Tag Manager in development to just log to the console\n    if (true) {\n      window.gtag = (...args) => {\n        console.log('gtag: ', ...args);\n      };\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(AppShell, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBLElBQUksT0FBK0IsRUFFbEM7O0FBRUQsTUFBTU0sYUFBdUIsR0FBRyxDQUFDO0FBQUNDLEVBQUFBO0FBQUQsQ0FBRCxrQkFBZ0I7QUFBQSxZQUFHQTtBQUFILGlCQUFoRDs7QUFFZSxTQUFTQyxLQUFULENBQWU7QUFBQ0MsRUFBQUEsU0FBRDtBQUFZQyxFQUFBQTtBQUFaLENBQWYsRUFBaUQ7QUFDOUQsTUFBSUMsUUFBUSxHQUFJRixTQUFELENBQW1CRyxRQUFuQixJQUErQk4sYUFBOUMsQ0FEOEQsQ0FFOUQ7QUFDQTs7QUFDQSxNQUFLRyxTQUFELENBQW1CSSxjQUF2QixFQUF1QztBQUNyQ0YsSUFBQUEsUUFBUSxHQUFJRixTQUFELENBQW1CLEVBQW5CLEVBQXVCSyxLQUF2QixDQUE2QkMsWUFBN0IsQ0FBMENILFFBQXJEO0FBQ0Q7O0FBQ0RaLEVBQUFBLDRDQUFBLENBQWdCLE1BQU07QUFDcEI7QUFDQSxjQUEyQztBQUN4Q2lCLE1BQUFBLE1BQUQsQ0FBZ0JDLElBQWhCLEdBQXVCLENBQUMsR0FBR0MsSUFBSixLQUFvQjtBQUN6Q0MsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQixHQUFHRixJQUF6QjtBQUNELE9BRkQ7QUFHRDtBQUNGLEdBUEQsRUFPRyxFQVBIO0FBUUEsc0JBQ0UsOERBQUMsUUFBRDtBQUFBLDJCQUNFLDhEQUFDLFNBQUQsb0JBQWVULFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtd2Vic2l0ZS8uL3NyYy9wYWdlcy9fYXBwLnRzeD84NTQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FwcFByb3BzfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgJ0Bkb2NzZWFyY2gvY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2ZvbnRzLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9hbGdvbGlhLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc2FuZHBhY2suY3NzJztcbmltcG9ydCAnQGNvZGVzYW5kYm94L3NhbmRwYWNrLXJlYWN0L2Rpc3QvaW5kZXguY3NzJztcbmltcG9ydCB7aG90amFyfSBmcm9tICd1dGlscy9ob3RqYXInO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGhvdGphcihwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ISl9TSVRFX0lELCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ISl9TSVRFX1YpO1xufVxuXG5jb25zdCBFbXB0eUFwcFNoZWxsOiBSZWFjdC5GQyA9ICh7Y2hpbGRyZW59KSA9PiA8PntjaGlsZHJlbn08Lz47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc306IEFwcFByb3BzKSB7XG4gIGxldCBBcHBTaGVsbCA9IChDb21wb25lbnQgYXMgYW55KS5hcHBTaGVsbCB8fCBFbXB0eUFwcFNoZWxsO1xuICAvLyBJbiBvcmRlciB0byBtYWtlIHNpZGViYXIgc2Nyb2xsaW5nIGJldHdlZW4gcGFnZXMgd29yayBhcyBleHBlY3RlZFxuICAvLyB3ZSBuZWVkIHRvIGFjY2VzcyB0aGUgdW5kZXJseWluZyBNRFggY29tcG9uZW50LlxuICBpZiAoKENvbXBvbmVudCBhcyBhbnkpLmlzTURYQ29tcG9uZW50KSB7XG4gICAgQXBwU2hlbGwgPSAoQ29tcG9uZW50IGFzIGFueSkoe30pLnByb3BzLm9yaWdpbmFsVHlwZS5hcHBTaGVsbDtcbiAgfVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIE1vbmtleSBwYXRjaCBHb29nbGUgVGFnIE1hbmFnZXIgaW4gZGV2ZWxvcG1lbnQgdG8ganVzdCBsb2cgdG8gdGhlIGNvbnNvbGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgKHdpbmRvdyBhcyBhbnkpLmd0YWcgPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2d0YWc6ICcsIC4uLmFyZ3MpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8QXBwU2hlbGw+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BcHBTaGVsbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImhvdGphciIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19ISl9TSVRFX0lEIiwiTkVYVF9QVUJMSUNfSEpfU0lURV9WIiwiRW1wdHlBcHBTaGVsbCIsImNoaWxkcmVuIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJBcHBTaGVsbCIsImFwcFNoZWxsIiwiaXNNRFhDb21wb25lbnQiLCJwcm9wcyIsIm9yaWdpbmFsVHlwZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImd0YWciLCJhcmdzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/hotjar.js":
/*!*****************************!*\
  !*** ./src/utils/hotjar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hotjar\": () => (/* binding */ hotjar)\n/* harmony export */ });\n/*\n * Copyright (c) Facebook, Inc. and its affiliates.\n */\nfunction hotjar(id, sv) {\n  (function (h, o, t, j, a, r) {\n    h.hj = h.hj || function () {\n      (h.hj.q = h.hj.q || []).push(arguments);\n    };\n\n    h._hjSettings = {\n      hjid: id,\n      hjsv: sv\n    };\n    h._scriptPath = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;\n\n    if (!document.querySelector('script[src*=\"' + h._scriptPath + '\"]')) {\n      a = o.getElementsByTagName('head')[0];\n      r = o.createElement('script');\n      r.async = 1;\n      r.src = h._scriptPath;\n      a.appendChild(r);\n    }\n  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvaG90amFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxNQUFULENBQWdCQyxFQUFoQixFQUFvQkMsRUFBcEIsRUFBd0I7QUFDN0IsR0FBQyxVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQkMsQ0FBdEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQzNCTCxJQUFBQSxDQUFDLENBQUNNLEVBQUYsR0FDRU4sQ0FBQyxDQUFDTSxFQUFGLElBQ0EsWUFBWTtBQUNWLE9BQUNOLENBQUMsQ0FBQ00sRUFBRixDQUFLQyxDQUFMLEdBQVNQLENBQUMsQ0FBQ00sRUFBRixDQUFLQyxDQUFMLElBQVUsRUFBcEIsRUFBd0JDLElBQXhCLENBQTZCQyxTQUE3QjtBQUNELEtBSkg7O0FBS0FULElBQUFBLENBQUMsQ0FBQ1UsV0FBRixHQUFnQjtBQUFDQyxNQUFBQSxJQUFJLEVBQUViLEVBQVA7QUFBV2MsTUFBQUEsSUFBSSxFQUFFYjtBQUFqQixLQUFoQjtBQUNBQyxJQUFBQSxDQUFDLENBQUNhLFdBQUYsR0FBZ0JYLENBQUMsR0FBR0YsQ0FBQyxDQUFDVSxXQUFGLENBQWNDLElBQWxCLEdBQXlCUixDQUF6QixHQUE2QkgsQ0FBQyxDQUFDVSxXQUFGLENBQWNFLElBQTNEOztBQUNBLFFBQUksQ0FBQ0UsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUFrQmYsQ0FBQyxDQUFDYSxXQUFwQixHQUFrQyxJQUF6RCxDQUFMLEVBQXFFO0FBQ25FVCxNQUFBQSxDQUFDLEdBQUdILENBQUMsQ0FBQ2Usb0JBQUYsQ0FBdUIsTUFBdkIsRUFBK0IsQ0FBL0IsQ0FBSjtBQUNBWCxNQUFBQSxDQUFDLEdBQUdKLENBQUMsQ0FBQ2dCLGFBQUYsQ0FBZ0IsUUFBaEIsQ0FBSjtBQUNBWixNQUFBQSxDQUFDLENBQUNhLEtBQUYsR0FBVSxDQUFWO0FBQ0FiLE1BQUFBLENBQUMsQ0FBQ2MsR0FBRixHQUFRbkIsQ0FBQyxDQUFDYSxXQUFWO0FBQ0FULE1BQUFBLENBQUMsQ0FBQ2dCLFdBQUYsQ0FBY2YsQ0FBZDtBQUNEO0FBQ0YsR0FmRCxFQWVHZ0IsTUFmSCxFQWVXUCxRQWZYLEVBZXFCLHFDQWZyQixFQWU0RCxTQWY1RDtBQWdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXdlYnNpdGUvLi9zcmMvdXRpbHMvaG90amFyLmpzPzdjNTMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBob3RqYXIoaWQsIHN2KSB7XG4gIChmdW5jdGlvbiAoaCwgbywgdCwgaiwgYSwgcikge1xuICAgIGguaGogPVxuICAgICAgaC5oaiB8fFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAoaC5oai5xID0gaC5oai5xIHx8IFtdKS5wdXNoKGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIGguX2hqU2V0dGluZ3MgPSB7aGppZDogaWQsIGhqc3Y6IHN2fTtcbiAgICBoLl9zY3JpcHRQYXRoID0gdCArIGguX2hqU2V0dGluZ3MuaGppZCArIGogKyBoLl9oalNldHRpbmdzLmhqc3Y7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cIicgKyBoLl9zY3JpcHRQYXRoICsgJ1wiXScpKSB7XG4gICAgICBhID0gby5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgciA9IG8uY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICByLmFzeW5jID0gMTtcbiAgICAgIHIuc3JjID0gaC5fc2NyaXB0UGF0aDtcbiAgICAgIGEuYXBwZW5kQ2hpbGQocik7XG4gICAgfVxuICB9KSh3aW5kb3csIGRvY3VtZW50LCAnaHR0cHM6Ly9zdGF0aWMuaG90amFyLmNvbS9jL2hvdGphci0nLCAnLmpzP3N2PScpO1xufVxuIl0sIm5hbWVzIjpbImhvdGphciIsImlkIiwic3YiLCJoIiwibyIsInQiLCJqIiwiYSIsInIiLCJoaiIsInEiLCJwdXNoIiwiYXJndW1lbnRzIiwiX2hqU2V0dGluZ3MiLCJoamlkIiwiaGpzdiIsIl9zY3JpcHRQYXRoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYXN5bmMiLCJzcmMiLCJhcHBlbmRDaGlsZCIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/hotjar.js\n");

/***/ }),

/***/ "./node_modules/@docsearch/css/dist/style.css":
/*!****************************************************!*\
  !*** ./node_modules/@docsearch/css/dist/style.css ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/algolia.css":
/*!********************************!*\
  !*** ./src/styles/algolia.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/fonts.css":
/*!******************************!*\
  !*** ./src/styles/fonts.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/sandpack.css":
/*!*********************************!*\
  !*** ./src/styles/sandpack.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();