var Client =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/_base.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/_base.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_background_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/background-image.png */ "./src/client/media/background-image.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_media_background_image_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* SCSS RGB */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0; }\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\n  background-size: cover;\n  background-attachment: fixed;\n  width: 100%;\n  height: 100vh; }\n\n.input-container {\n  height: 100vh;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .input-container .logo {\n    font-size: 6vh;\n    font-family: \"Pacifico\", cursive;\n    letter-spacing: 8px;\n    color: #ffec1f; }\n  .input-container .form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n    .input-container .form input,\n    .input-container .form .submit {\n      height: 10vh;\n      text-align: center;\n      font-size: 2vh;\n      width: 100%;\n      margin: 2.5vh;\n      border: 0.5vh solid #4da8e0;\n      border-radius: 20px; }\n      .input-container .form input:hover,\n      .input-container .form .submit:hover {\n        border: 0.5vh solid #e16900; }\n    .input-container .form .submit {\n      cursor: pointer; }\n\n.results {\n  height: 100vh;\n  position: relative; }\n  .results .trip-info {\n    border: 0.5vw solid #ffec1f;\n    border-radius: 15px;\n    background: rgba(255, 255, 255, 0.4);\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 90%;\n    max-height: 80vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    .results .trip-info h2 {\n      margin: 2rem 0;\n      font-size: 3rem;\n      text-align: center; }\n    .results .trip-info li {\n      list-style: none;\n      font-size: 1.5rem; }\n    .results .trip-info .destination {\n      display: flex;\n      flex-direction: column; }\n      .results .trip-info .destination li {\n        margin: 0.5rem 0;\n        font-size: 2.5rem; }\n      .results .trip-info .destination img {\n        border-radius: 15px; }\n\n.weather {\n  width: 100%;\n  text-align: center; }\n  .weather h3 {\n    font-size: 2.5rem;\n    margin: 1rem; }\n  .weather .weather-data {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center; }\n    .weather .weather-data li {\n      font-size: 2.5rem; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/_base.scss"],"names":[],"mappings":"AAAA,aAAa;AACb;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS,EAAE;;AAEb;EACE,oEAA+D;EAC/D,sBAAsB;EACtB,4BAA4B;EAC5B,WAAW;EACX,aAAa,EAAE;;AAEjB;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB,EAAE;EACzB;IACE,cAAc;IACd,gCAAgC;IAChC,mBAAmB;IACnB,cAAc,EAAE;EAClB;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB,EAAE;IACzB;;MAEE,YAAY;MACZ,kBAAkB;MAClB,cAAc;MACd,WAAW;MACX,aAAa;MACb,2BAA2B;MAC3B,mBAAmB,EAAE;MACrB;;QAEE,2BAA2B,EAAE;IACjC;MACE,eAAe,EAAE;;AAEvB;EACE,aAAa;EACb,kBAAkB,EAAE;EACpB;IACE,2BAA2B;IAC3B,mBAAmB;IACnB,oCAAoC;IACpC,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB,EAAE;IACrB;MACE,cAAc;MACd,eAAe;MACf,kBAAkB,EAAE;IACtB;MACE,gBAAgB;MAChB,iBAAiB,EAAE;IACrB;MACE,aAAa;MACb,sBAAsB,EAAE;MACxB;QACE,gBAAgB;QAChB,iBAAiB,EAAE;MACrB;QACE,mBAAmB,EAAE;;AAE7B;EACE,WAAW;EACX,kBAAkB,EAAE;EACpB;IACE,iBAAiB;IACjB,YAAY,EAAE;EAChB;IACE,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB,EAAE;IACrB;MACE,iBAAiB,EAAE","sourcesContent":["/* SCSS RGB */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0; }\n\nbody {\n  background: url(../media/background-image.png) no-repeat center;\n  background-size: cover;\n  background-attachment: fixed;\n  width: 100%;\n  height: 100vh; }\n\n.input-container {\n  height: 100vh;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .input-container .logo {\n    font-size: 6vh;\n    font-family: \"Pacifico\", cursive;\n    letter-spacing: 8px;\n    color: #ffec1f; }\n  .input-container .form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n    .input-container .form input,\n    .input-container .form .submit {\n      height: 10vh;\n      text-align: center;\n      font-size: 2vh;\n      width: 100%;\n      margin: 2.5vh;\n      border: 0.5vh solid #4da8e0;\n      border-radius: 20px; }\n      .input-container .form input:hover,\n      .input-container .form .submit:hover {\n        border: 0.5vh solid #e16900; }\n    .input-container .form .submit {\n      cursor: pointer; }\n\n.results {\n  height: 100vh;\n  position: relative; }\n  .results .trip-info {\n    border: 0.5vw solid #ffec1f;\n    border-radius: 15px;\n    background: rgba(255, 255, 255, 0.4);\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 90%;\n    max-height: 80vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    .results .trip-info h2 {\n      margin: 2rem 0;\n      font-size: 3rem;\n      text-align: center; }\n    .results .trip-info li {\n      list-style: none;\n      font-size: 1.5rem; }\n    .results .trip-info .destination {\n      display: flex;\n      flex-direction: column; }\n      .results .trip-info .destination li {\n        margin: 0.5rem 0;\n        font-size: 2.5rem; }\n      .results .trip-info .destination img {\n        border-radius: 15px; }\n\n.weather {\n  width: 100%;\n  text-align: center; }\n  .weather h3 {\n    font-size: 2.5rem;\n    margin: 1rem; }\n  .weather .weather-data {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center; }\n    .weather .weather-data li {\n      font-size: 2.5rem; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: logo, styles, base, submitForm, updateUI, dateCountdown, today */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client_media_wanderlust_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/media/wanderlust-logo.png */ "./src/client/media/wanderlust-logo.png");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logo", function() { return _client_media_wanderlust_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/client/styles/style.scss");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/_base.scss */ "./src/client/styles/_base.scss");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base", function() { return _styles_base_scss__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _js_submit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/submit */ "./src/client/js/submit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submitForm", function() { return _js_submit__WEBPACK_IMPORTED_MODULE_3__["submitForm"]; });

/* harmony import */ var _js_updateUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/updateUI */ "./src/client/js/updateUI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUI", function() { return _js_updateUI__WEBPACK_IMPORTED_MODULE_4__["updateUI"]; });

/* harmony import */ var _js_dateCountdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/dateCountdown */ "./src/client/js/dateCountdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateCountdown", function() { return _js_dateCountdown__WEBPACK_IMPORTED_MODULE_5__["dateCountdown"]; });

/* harmony import */ var _js_today__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/today */ "./src/client/js/today.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "today", function() { return _js_today__WEBPACK_IMPORTED_MODULE_6__["today"]; });

/* harmony import */ var _js_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/validator */ "./src/client/js/validator.js");









const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', e => {
  Object(_js_validator__WEBPACK_IMPORTED_MODULE_7__["validateForm"])(e)
})
// sets input to today's date
let dateControl = document.querySelector('input[type="date"]');
dateControl.setAttribute('min', Object(_js_today__WEBPACK_IMPORTED_MODULE_6__["today"])());
dateControl.setAttribute('max', '2121-01-01')
dateControl.value = Object(_js_today__WEBPACK_IMPORTED_MODULE_6__["today"])();



/***/ }),

/***/ "./src/client/js/dateCountdown.js":
/*!****************************************!*\
  !*** ./src/client/js/dateCountdown.js ***!
  \****************************************/
/*! exports provided: dateCountdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateCountdown", function() { return dateCountdown; });
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today */ "./src/client/js/today.js");


function dateCountdown(dateInput) {
    let d1 = new Date(dateInput.replace(/\-/g, '/'));
    let d2 = new Date(Object(_today__WEBPACK_IMPORTED_MODULE_0__["today"])().replace(/\-/g, '/'));
    // calculates from milliseconds to days
    let difference = (d1.getTime() - d2.getTime()) / (1000 * 60 * 60 * 24);

    return difference.toFixed(0)
}



/***/ }),

/***/ "./src/client/js/submit.js":
/*!*********************************!*\
  !*** ./src/client/js/submit.js ***!
  \*********************************/
/*! exports provided: submitForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitForm", function() { return submitForm; });
async function submitForm(input) {

    const response = await fetch('/makeCalls', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(input)
    });

    return response.json()
}



/***/ }),

/***/ "./src/client/js/today.js":
/*!********************************!*\
  !*** ./src/client/js/today.js ***!
  \********************************/
/*! exports provided: today */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "today", function() { return today; });
function today() {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    return today

}


/***/ }),

/***/ "./src/client/js/updateUI.js":
/*!***********************************!*\
  !*** ./src/client/js/updateUI.js ***!
  \***********************************/
/*! exports provided: updateUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUI", function() { return updateUI; });
/* harmony import */ var _dateCountdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateCountdown */ "./src/client/js/dateCountdown.js");



function updateUI(data) {
    console.log(data);
    const results = document.getElementById('results')
    const tripInfo = document.getElementById('trip-info')

    const destination = document.getElementById('destination');
    const weatherWrapper = document.getElementById('weather');

    destination.innerHTML = `
    <h2> Your Upcoming Trip Is ${Object(_dateCountdown__WEBPACK_IMPORTED_MODULE_0__["dateCountdown"])(data.date)} Days Away! </h2>
    
        <ul>
            <li> Destination: ${data.cityName}, ${data.countryName}</li>
            <li> Trip Date: ${data.date} </li>
            
        </ul>
    <img
    src=${data.img}
    alt= "image of ${data.cityName}"
    />
    `
    weatherWrapper.innerHTML = `
    <h3> Current Weather in ${data.cityName}: </h3>
    <ul class= "weather-data" id="weather-data">
        <li>${data.temp} &deg; F</li>
        <li> ${data.weather} </li>
        <li>
            <img
            src= "https://www.weatherbit.io/static/img/icons/${data.icon}.png" alt='weather-icon'>
        </li>
    </ul>
    `
    results.style.display = 'block'
    results.scrollIntoView({ behavior: "smooth" })
    Object(_dateCountdown__WEBPACK_IMPORTED_MODULE_0__["dateCountdown"])(data.date)
}



/***/ }),

/***/ "./src/client/js/validator.js":
/*!************************************!*\
  !*** ./src/client/js/validator.js ***!
  \************************************/
/*! exports provided: validateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateForm", function() { return validateForm; });
/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit */ "./src/client/js/submit.js");
/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateUI */ "./src/client/js/updateUI.js");



function validateForm(e) {
    e.preventDefault();
    const cityInput = document.getElementById('city').value;
    const dateInput = document.getElementById('date').value;

    const userInput = { city: cityInput, date: dateInput }

    cityInput === '' || dateInput === '' ? console.log('error') : Object(_submit__WEBPACK_IMPORTED_MODULE_0__["submitForm"])(userInput)
        .then(data => {
            // response to send to UI
            Object(_updateUI__WEBPACK_IMPORTED_MODULE_1__["updateUI"])(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        })

}



/***/ }),

/***/ "./src/client/media/background-image.png":
/*!***********************************************!*\
  !*** ./src/client/media/background-image.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "background-image.png");

/***/ }),

/***/ "./src/client/media/wanderlust-logo.png":
/*!**********************************************!*\
  !*** ./src/client/media/wanderlust-logo.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "wanderlust-logo.png");

/***/ }),

/***/ "./src/client/styles/_base.scss":
/*!**************************************!*\
  !*** ./src/client/styles/_base.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./_base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/_base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/client/styles/style.scss":
/*!**************************************!*\
  !*** ./src/client/styles/style.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map