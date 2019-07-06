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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/clock.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/index.js!./src/stylus/clock.styl":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader!./src/stylus/clock.styl ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../webfonts/AvenirNext-Variable.woff2 */ \"./src/webfonts/AvenirNext-Variable.woff2\"));\n// Module\nexports.push([module.i, \":root {\\n  --transition: 0.3s;\\n  --transition-theme: 1.5s;\\n  --fineprint: 0.75em;\\n}\\n:root [theme=light] {\\n  --background: #f7f7f7;\\n  --border: #ddd;\\n  --face: #fff;\\n  --hands: #000;\\n  --link: rgba(0,0,0,0.7);\\n  --link-active: #000;\\n  --text: rgba(0,0,0,0.7);\\n}\\n:root [theme=dark] {\\n  --background: #111;\\n  --border: #222;\\n  --face: #000;\\n  --hands: #fff;\\n  --link: rgba(255,255,255,0.7);\\n  --link-active: #fff;\\n  --text: rgba(255,255,255,0.7);\\n}\\n@media screen and (min-width: 40rem) {\\n  :root {\\n    --fineprint: 0.875em;\\n  }\\n}\\n@font-face {\\n  font-display: block;\\n  font-family: 'Avenir Variable';\\n  font-weight: 1 999;\\n  src: url(\" + ___CSS_LOADER_URL___0___ + \") format('woff2');\\n}\\nhtml,\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  -webkit-tap-highlight-color: transparent;\\n  text-size-adjust: none;\\n}\\nbody {\\n  background: var(--background);\\n  display: grid;\\n  grid-template-areas: 'content' 'footer';\\n  grid-template-columns: 1fr;\\n  grid-template-rows: 1fr auto;\\n  min-height: 100vh;\\n  min-height: calc(var(--viewport-unit, 1vh) * 100);\\n  transition: background var(--transition-theme), color var(--transition-theme);\\n  font-family: 'Avenir Variable', sans-serif;\\n  font-variation-settings: 'wght' 500;\\n}\\n* {\\n  box-sizing: border-box;\\n}\\na {\\n  text-decoration: none;\\n}\\na:focus {\\n  outline: none;\\n}\\nsvg {\\n  height: auto;\\n  pointer-events: none;\\n  vertical-align: middle;\\n  width: 100%;\\n}\\n.clocks {\\n  align-self: center;\\n  background: var(--face);\\n  border: 1px solid var(--border);\\n  grid-area: content;\\n  justify-self: center;\\n  margin: 5vh 5vw;\\n  max-width: 40rem;\\n  overflow: hidden;\\n  transition: background var(--transition-theme), border var(--transition-theme);\\n}\\n.clocks__frame {\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin-right: -30.666666666666664%;\\n  padding: 15.333333333333332% 15.333333333333332% 7.666666666666666%;\\n}\\nn-clock {\\n  display: block;\\n}\\n.clocks__frame > n-clock {\\n  flex: 0 0 33.33333333333333%;\\n  height: 100%;\\n  margin: -7.666666666666666% 0 0 -7.666666666666666%;\\n}\\n.clock__hand {\\n  stroke: var(--hands);\\n  stroke-width: 6px;\\n  transition: stroke var(--transition-theme);\\n}\\n.clock__pivot {\\n  fill: var(--hands);\\n  transition: fill var(--transition-theme);\\n}\\n.copyright {\\n  color: var(--text);\\n  font-size: var(--fineprint);\\n  grid-area: footer;\\n  margin: 0;\\n  padding: 1rem;\\n  text-align: center;\\n}\\n.copyright__bug,\\n.copyright__link {\\n  transition: color var(--transition);\\n}\\n.copyright__link {\\n  font-variation-settings: 'wght' 600;\\n}\\n.copyright__link:link {\\n  color: var(--link);\\n}\\n.copyright__link:visited {\\n  color: var(--link);\\n}\\n.copyright__link:active,\\n.copyright__link:focus {\\n  color: var(--link-active);\\n}\\n[no-touch] .copyright__link:hover {\\n  color: var(--link-active);\\n}\\n[no-touch] .copyright__link:hover {\\n  transition: color var(--transition);\\n}\\nbody[no-js] {\\n  background: #fff;\\n  color: #000;\\n}\\nbody[no-js] .clocks {\\n  display: none;\\n}\\n.no-js {\\n  color: #333;\\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\\n  font-weight: bold;\\n  padding: 1rem;\\n}\\n.no-js__message {\\n  margin: 0 auto;\\n  max-width: 30rem;\\n  padding: 2rem;\\n  text-align: center;\\n}\\n.no-js__message > a {\\n  white-space: nowrap;\\n}\\n.no-js__message > a:link {\\n  color: #0070c9;\\n}\\n.no-js__message > a:visited {\\n  color: #0070c9;\\n}\\n.no-js__message > a:active,\\n.no-js__message > a:focus {\\n  color: rgba(0,112,201,0.7);\\n}\\n[no-touch] .no-js__message > a:hover {\\n  color: rgba(0,112,201,0.7);\\n}\\n[no-touch] .no-js__message > a {\\n  transition: color 0.3s;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/stylus/clock.styl?./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/js/clock.js":
/*!*************************!*\
  !*** ./src/js/clock.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Clock */ \"./src/js/modules/Clock.js\");\n/* harmony import */ var _modules_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Theme */ \"./src/js/modules/Theme.js\");\n/* harmony import */ var _modules_Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Utilities */ \"./src/js/modules/Utilities.js\");\n/* harmony import */ var _stylus_clock_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylus/clock.styl */ \"./src/stylus/clock.styl\");\n/* harmony import */ var _stylus_clock_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylus_clock_styl__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n/** @const {string} */\nconst CLOCK_ELEMENT = 'n-clock';\n\n/** @const {string} */\nconst CLOCKS_SELECTOR = '.clocks__frame';\n\n/** @instance */\nconst theme = new _modules_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"]();\n\n/** @instance */\nconst utilities = new _modules_Utilities__WEBPACK_IMPORTED_MODULE_2__[\"Utilities\"]({\n  analyticsSettings: {\n    domain: 'clock.gauslin.com',\n    id: 'UA-626192-16',\n  },\n});\n\n/**\n * Renders custom elements for the app.\n * @function renderClocks\n * @param {!string} selector - Parent element's selector for attaching\n *     rendered clocks.\n * @param {?number=} n - Number of clocks to render.\n * @public\n */\nconst renderClocks = (selector, n = 9) => {\n  const clocksEl = document.querySelector(selector);\n  for (let i = 1; i <= n; i++) {\n    clocksEl.innerHTML += `<${CLOCK_ELEMENT}></${CLOCK_ELEMENT}>\\n`;\n  }\n}\n\n/**\n * Initializes app when the DOM is ready.\n * @listens DOMContentLoaded\n */\ndocument.addEventListener('DOMContentLoaded', () => {\n  customElements.define(CLOCK_ELEMENT, _modules_Clock__WEBPACK_IMPORTED_MODULE_0__[\"Clock\"]);\n  renderClocks(CLOCKS_SELECTOR);\n  theme.init();\n  utilities.init();\n}, { once: true } );\n\n/**\n * Updates 'vh' value when window is resized.\n * @listens resize\n */\nwindow.addEventListener('resize', () => {\n  utilities.viewportHeight();\n}, { passive: true });\n\n\n//# sourceURL=webpack:///./src/js/clock.js?");

/***/ }),

/***/ "./src/js/modules/Clock.js":
/*!*********************************!*\
  !*** ./src/js/modules/Clock.js ***!
  \*********************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n// NOTE: All 'ClockDimensions' enum values need to stay coordinated with\n// values in 'source/stylus/clock/_config.styl'\n\n/** @enum {number} */\nconst ClockDimensions = {\n  SIZE: 100,\n  CENTER: 50, // Half of SIZE\n  STROKE_WIDTH: 3,\n  HOURS_HAND_LENGTH: 30,\n}\n\n/** @const {number} */\nconst HOURS_HAND_END = ClockDimensions.CENTER - ClockDimensions.HOURS_HAND_LENGTH;\n\n/** @const {number} */\nconst MINUTES_HAND_LENGTH = ClockDimensions.CENTER - ClockDimensions.STROKE_WIDTH;\n\n/** @const {number} */\nconst MINUTES_HAND_END = ClockDimensions.CENTER - MINUTES_HAND_LENGTH;\n\n/** @class */\nclass Clock extends HTMLElement {\n  constructor() {\n    super();\n\n    /** @const {number} */\n    this.previousMinutesAngle = null;\n  }\n  \n  /** @callback */\n  connectedCallback() {\n    // Render clock immediately since screen is blank for a second otherwise.\n    this.setHands_(); \n\n    // Check the time every second.\n    setInterval(() => this.setHands_(), 1000);\n  }\n\n  /** @callback */\n  disconnectedCallback() {\n    clearInterval();\n  }\n\n  /**\n   * Calculates rotations for hours and minutes hands and renders an SVG.\n   * @private\n   */\n  setHands_() {\n    const now = new Date();\n    const hours = now.getHours();\n    const minutes = now.getMinutes();\n\n    const hoursAngle = (hours * 60 + minutes) * .5; \n    const minutesAngle = minutes * 6;\n\n    // Redraw clock only when the minutes angle has changed (i.e. every minute).\n    if (minutesAngle !== this.previousMinutesAngle) {\n      this.previousMinutesAngle = minutesAngle;\n      this.innerHTML = `\n        <svg viewbox=\"0 0 ${ClockDimensions.SIZE} ${ClockDimensions.SIZE}\">\n          <g>\n            <line\n              class=\"clock__hand\"\n              x1=\"${ClockDimensions.CENTER}\" y1=\"${ClockDimensions.CENTER}\"\n              x2=\"${ClockDimensions.CENTER}\" y2=\"${HOURS_HAND_END}\"\n              transform=\"rotate(${hoursAngle}, ${ClockDimensions.CENTER}, ${ClockDimensions.CENTER})\"/>\n            <line\n              class=\"clock__hand\"\n              x1=\"${ClockDimensions.CENTER}\" y1=\"${ClockDimensions.CENTER}\"\n              x2=\"${ClockDimensions.CENTER}\" y2=\"${MINUTES_HAND_END}\"\n              transform=\"rotate(${minutesAngle}, ${ClockDimensions.CENTER}, ${ClockDimensions.CENTER})\"/>\n            <circle\n              class=\"clock__pivot\"\n              cx=\"${ClockDimensions.CENTER}\"\n              cy=\"${ClockDimensions.CENTER}\"\n              r=\"${ClockDimensions.STROKE_WIDTH}\"/>\n          </g>\n        </svg>\n      `;\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/js/modules/Clock.js?");

/***/ }),

/***/ "./src/js/modules/Theme.js":
/*!*********************************!*\
  !*** ./src/js/modules/Theme.js ***!
  \*********************************/
/*! exports provided: Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Theme\", function() { return Theme; });\n/** @enum {string} */\nconst Theming = {\n  ALT: 'dark',\n  ATTR: 'theme',\n  DEFAULT: 'light',\n  ITEM: 'theme',\n  TOGGLE: 'clocks__frame',\n}\n\n/** @class */\nclass Theme {\n  constructor() {\n    /** @const {string} */\n    this.theme = localStorage.getItem(Theming.ITEM) || Theming.DEFAULT;\n  }\n\n  /**\n   * Initializes theming.\n   * @public\n   */\n  init() {\n    this.setTheme_();\n    this.updateTheme_();\n  }\n\n  /**\n   * Sets 'theme' attribute and stores its value for later visits.\n   * @private\n   */\n  setTheme_() {\n    document.body.setAttribute(Theming.ATTR, this.theme);\n    localStorage.setItem(Theming.ITEM, this.theme);\n  }\n\n  /**\n   * Adds a DOM element that toggles the theme when clicked.\n   * @private\n   */\n  updateTheme_() {\n    const themifier = document.querySelector(`.${Theming.TOGGLE}`);\n\n    themifier.addEventListener('click', (e) => {\n      e.preventDefault();\n      this.theme = (this.theme === Theming.DEFAULT) ? Theming.ALT : Theming.DEFAULT;\n      this.setTheme_();\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/modules/Theme.js?");

/***/ }),

/***/ "./src/js/modules/Utilities.js":
/*!*************************************!*\
  !*** ./src/js/modules/Utilities.js ***!
  \*************************************/
/*! exports provided: Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Utilities\", function() { return Utilities; });\n/** @enum {string} */\nconst Attributes = {\n  NO_JS: 'no-js',\n  NO_TOUCH: 'no-touch',\n};\n\n/** @class */\nclass Utilities {\n  /**\n   * @param {!Object} config\n   * @param {!Object} config.analyticsSettings\n   */\n  constructor(config) {\n    /** @const {!Object} */\n    this.analyticsSettings = config.analyticsSettings;\n  }\n\n  /**\n   * Initializes all utility methods.\n   * @public\n   */\n  init() {\n    this.hasJs_();\n    this.noTouch_();\n    this.viewportHeight();\n    this.googleAnalytics_(this.analyticsSettings);\n  }\n\n  /**\n   * Initializes Google Analytics tracking.\n   * @param {!Object} settings\n   * @param {!string} settings.id - Google Analytics ID.\n   * @param {!string} settings.domain - Production domain.\n   * @private\n   */\n  googleAnalytics_(settings) {\n    if (window.location.hostname === settings.domain) {\n      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n      })(window,document,'script','//www.google-analytics.com/analytics.js','ga')\n      ga('create', settings.id, 'auto')\n      ga('send', 'pageview')\n    }\n  }\n\n  /**\n   * Removes 'no-js' attribute and 'noscript' element if JS is enabled.\n   * @private\n   */\n  hasJs_() {\n    document.body.removeAttribute(Attributes.NO_JS);\n    const noscript = document.querySelector('noscript');\n    noscript.remove();\n  }\n\n  /**\n   * Removes 'no-touch' attribute if device is touch-enabled.\n   * @private\n   */\n  noTouch_() {\n    if ('ontouchstart' in window || navigator.msMaxTouchPoints > 0) {\n      document.body.removeAttribute(Attributes.NO_TOUCH);\n    }\n  }\n\n  /**\n   * Sets custom property for viewport height that updates 'vh' calculation due\n   * to iOS Safari behavior where chrome appears and disappears when scrolling.\n   * @public\n   */\n  viewportHeight() {\n    const viewportUnit = window.innerHeight / 100;\n    document.documentElement.style.setProperty('--viewport-unit', `${viewportUnit}px`);\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/modules/Utilities.js?");

/***/ }),

/***/ "./src/stylus/clock.styl":
/*!*******************************!*\
  !*** ./src/stylus/clock.styl ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/stylus-loader!./clock.styl */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/index.js!./src/stylus/clock.styl\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/stylus/clock.styl?");

/***/ }),

/***/ "./src/webfonts/AvenirNext-Variable.woff2":
/*!************************************************!*\
  !*** ./src/webfonts/AvenirNext-Variable.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5f75d8588b319a9cfec1d8a89307557e.woff2\";\n\n//# sourceURL=webpack:///./src/webfonts/AvenirNext-Variable.woff2?");

/***/ })

/******/ });