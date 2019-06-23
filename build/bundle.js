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
/******/ 	__webpack_require__.p = "/build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./src/Components/Filters/Filter.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/Components/Filters/Filter.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"*,\\n*:after,\\n*:before {\\n  box-sizing: inherit; }\\n\\nbody {\\n  display: flex;\\n  justify-content: center;\\n  padding: 50px 0;\\n  background-color: #fcfcfc;\\n  min-height: 100vh;\\n  font-size: 16px;\\n  line-height: 1.4;\\n  font-family: 'Montserrat', sans-serif;\\n  color: #372717;\\n  box-sizing: border-box;\\n  overflow-y: scroll; }\\n\\n.Filter__accordion___1gF2E {\\n  width: 100%;\\n  max-width: 470px; }\\n\\n.Filter__panel___2y2Qg {\\n  background-color: #f0ebe1; }\\n\\n.Filter__panel__label___-UaHc {\\n  position: relative;\\n  display: block;\\n  width: 100%;\\n  background: none;\\n  border: none;\\n  text-align: left;\\n  padding: 25px 60px 25px 25px;\\n  font-weight: 500;\\n  font-size: 17px;\\n  font-family: inherit;\\n  transition: color 0.2s linear;\\n  cursor: pointer; }\\n\\n.Filter__panel__label___-UaHc:focus {\\n  outline: none; }\\n\\n.Filter__panel__label___-UaHc:after,\\n.Filter__panel__label___-UaHc:before {\\n  content: '';\\n  position: absolute;\\n  right: 25px;\\n  top: 50%;\\n  width: 22px;\\n  height: 2px;\\n  margin-top: -2px;\\n  background-color: #372717; }\\n\\n.Filter__panel__label___-UaHc:before {\\n  -webkit-transform: rotate(-90deg);\\n  transform: rotate(-90deg);\\n  transition: -webkit-transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1);\\n  transition: transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1);\\n  transition: transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1), -webkit-transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1); }\\n\\n.Filter__panel___2y2Qg[aria-expanded='true'] .Filter__panel__content___2npJO {\\n  opacity: 1; }\\n\\n.Filter__panel___2y2Qg[aria-expanded='true'] .Filter__panel__label___-UaHc {\\n  color: #957029; }\\n\\n.Filter__panel___2y2Qg[aria-expanded='true'] .Filter__panel__label___-UaHc:before {\\n  -webkit-transform: rotate(0deg);\\n  transform: rotate(0deg); }\\n\\n.Filter__panel__inner___3YEJu {\\n  overflow: hidden;\\n  will-change: height;\\n  transition: height 0.4s cubic-bezier(0.65, 0.05, 0.36, 1); }\\n\\n.Filter__panel__content___2npJO {\\n  margin: 5px 25px 25px;\\n  font-size: 14px;\\n  color: #756658;\\n  opacity: 0;\\n  transition: opacity 0.3s linear 0.18s; }\\n\\n.Filter__panel___2y2Qg:not(:last-child) {\\n  margin-bottom: 3px; }\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"accordion\": \"Filter__accordion___1gF2E\",\n\t\"panel\": \"Filter__panel___2y2Qg\",\n\t\"panel__label\": \"Filter__panel__label___-UaHc\",\n\t\"panel__content\": \"Filter__panel__content___2npJO\",\n\t\"panel__inner\": \"Filter__panel__inner___3YEJu\"\n};\n\n//# sourceURL=webpack:///./src/Components/Filters/Filter.css?./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./src/Components/ProdCarousel/ProdCarousel.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/Components/ProdCarousel/ProdCarousel.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".ProdCarousel__modify___3QtAn {\\n  height: 300px !important;\\n  width: 80% !important; }\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"modify\": \"ProdCarousel__modify___3QtAn\"\n};\n\n//# sourceURL=webpack:///./src/Components/ProdCarousel/ProdCarousel.scss?./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./src/Components/ProductCard/ProductCard.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js!./src/Components/ProductCard/ProductCard.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/Components/ProductCard/ProductCard.scss?./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif (item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function (modules, mediaQuery) {\n\t\tif (typeof modules === \"string\") modules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor (var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif (typeof id === \"number\") alreadyImportedModules[id] = true;\n\t\t}\n\t\tfor (i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif (typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif (mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if (mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./products.json":
/*!***********************!*\
  !*** ./products.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, default */
/***/ (function(module) {

eval("module.exports = [{\"_id\":\"5d0654be2eb44f0904467496\",\"name\":\"Kitchen Product1\",\"description\":\"Minim ut in nostrud ullamco adipisicing Lorem elit laborum id deserunt qui non sint. Aliqua aute dolor labore nulla excepteur voluptate laborum commodo non consequat commodo esse. Et consequat esse duis ad proident eiusmod. Do eiusmod sit irure enim magna incididunt mollit non dolor aliqua nisi.\",\"category\":\"kitchen\",\"price\":88,\"offerMessage\":\"10% Off\",\"outOfStock\":false,\"availableStock\":66,\"ratingInfo\":{\"rating\":4,\"userCount\":71},\"thumbnail\":\"https://placeimg.com/170/170/tech\"},{\"_id\":\"5d0654bef66ca713c9468d72\",\"name\":\"Kitchen Product2\",\"description\":\"Quis magna esse ullamco veniam nulla ipsum et esse Lorem. Aliquip aliqua nulla velit dolore reprehenderit Lorem enim culpa non aliqua enim. Ea nisi voluptate amet dolor elit labore velit laboris ea laboris aute officia Lorem.\",\"category\":\"kitchen\",\"price\":260,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":17,\"ratingInfo\":{\"rating\":0,\"userCount\":65},\"thumbnail\":\"https://placeimg.com/170/170/tech\"},{\"_id\":\"5d0654bed5e468f9ba0fd512\",\"name\":\"Kitchen Product3\",\"description\":\"Ex tempor incididunt nulla mollit magna pariatur ut laborum duis commodo sit id culpa id. Qui mollit laboris cillum non consectetur sint aute duis fugiat adipisicing reprehenderit aute. Sit nulla est occaecat officia pariatur enim eiusmod duis nisi est. Sint nulla voluptate aliqua ullamco in. Fugiat eiusmod ullamco aute minim duis sit exercitation commodo nostrud duis Lorem laborum ad.\",\"category\":\"kitchen\",\"price\":41,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":39,\"ratingInfo\":{\"rating\":1,\"userCount\":45},\"thumbnail\":\"https://placeimg.com/170/170/tech\"},{\"_id\":\"5d0654be9fe1ad2ba256b7ee\",\"name\":\"Kitchen Product on Discount\",\"description\":\"Minim tempor nulla laborum occaecat dolor irure in incididunt cillum eu. Ad est eiusmod nostrud amet laborum do sunt fugiat ea anim eiusmod incididunt. Aute reprehenderit voluptate esse cupidatat ullamco duis nulla commodo. Dolor pariatur exercitation ullamco laborum qui ipsum proident do enim ex velit eiusmod aliquip. Eu sunt reprehenderit anim consectetur labore fugiat est ut. Quis esse excepteur sint exercitation adipisicing est elit do esse et ad labore voluptate cupidatat. Irure voluptate ullamco quis dolor enim irure excepteur Lorem mollit exercitation dolor anim.\",\"category\":\"kitchen\",\"price\":13,\"offerMessage\":\"Limited Stock\",\"outOfStock\":false,\"availableStock\":70,\"ratingInfo\":{\"rating\":4,\"userCount\":29},\"thumbnail\":\"https://placeimg.com/170/170/tech\"},{\"_id\":\"5d0654be23f635da35d979be\",\"name\":\"Tool 1\",\"description\":\"Aute eu esse laboris proident deserunt reprehenderit enim cupidatat pariatur pariatur amet ullamco exercitation labore. Nulla do cupidatat irure laboris amet eiusmod magna. Proident dolore elit eiusmod Lorem aute. Non ex deserunt est anim sunt magna fugiat. Est duis cillum elit non consectetur eiusmod in amet occaecat dolore. Duis nulla nostrud excepteur eiusmod do anim et ex adipisicing ipsum do labore.\",\"category\":\"tools\",\"price\":119,\"offerMessage\":\"25% Off\",\"outOfStock\":true,\"availableStock\":0,\"ratingInfo\":{\"rating\":3,\"userCount\":28},\"thumbnail\":\"https://placeimg.com/170/170/arch\"},{\"_id\":\"5d0654bef46e860bc38475af\",\"name\":\"Tool 2\",\"description\":\"Minim aute culpa aute mollit occaecat ullamco eu reprehenderit anim Lorem anim incididunt. Magna irure quis reprehenderit ex ad commodo. Qui aute qui pariatur fugiat magna qui commodo esse. Quis et sint ullamco occaecat labore anim ad ipsum. Nulla cillum sunt adipisicing laboris commodo. Sunt nisi dolor ex occaecat sit culpa deserunt fugiat irure dolore sint deserunt. Aute officia anim adipisicing amet non ipsum aute.\",\"category\":\"tools\",\"price\":198,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":9,\"ratingInfo\":{\"rating\":1,\"userCount\":51}},{\"_id\":\"5d0654bead4758da98437555\",\"name\":\"Tool 3\",\"description\":\"Aute Lorem ex sint Lorem consectetur aute irure laborum occaecat qui minim nulla nisi. Do nisi minim velit consequat tempor non tempor elit nostrud elit. Anim elit nisi aute adipisicing duis dolor sit veniam elit pariatur adipisicing ipsum ullamco magna. Ut laborum occaecat aliqua ex ut aliquip sit labore. Cupidatat pariatur tempor ex ea.\",\"category\":\"tools\",\"price\":180,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":95,\"ratingInfo\":{\"rating\":4,\"userCount\":45}},{\"_id\":\"5d0654beaa8c6e938039bddc\",\"name\":\"Tool 4\",\"description\":\"Quis dolore ex minim dolore proident esse ullamco do elit aliqua. Nisi culpa fugiat consectetur nisi veniam ut ex ex est. Sint cupidatat cupidatat aliqua occaecat.\",\"category\":\"tools\",\"price\":70,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":55,\"ratingInfo\":{\"rating\":0,\"userCount\":56}},{\"_id\":\"6d0654be2eb44f0904467496\",\"name\":\"Hardware 1\",\"description\":\"Minim ut in nostrud ullamco adipisicing Lorem elit laborum id deserunt qui non sint. Aliqua aute dolor labore nulla excepteur voluptate laborum commodo non consequat commodo esse. Et consequat esse duis ad proident eiusmod. Do eiusmod sit irure enim magna incididunt mollit non dolor aliqua nisi.\",\"category\":\"hardware\",\"price\":88,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":66,\"ratingInfo\":{\"rating\":4,\"userCount\":71},\"thumbnail\":\"https://placeimg.com/170/170/tech\"},{\"_id\":\"6d0654bef66ca713c9468d72\",\"name\":\"Hardware 2\",\"description\":\"Quis magna esse ullamco veniam nulla ipsum et esse Lorem. Aliquip aliqua nulla velit dolore reprehenderit Lorem enim culpa non aliqua enim. Ea nisi voluptate amet dolor elit labore velit laboris ea laboris aute officia Lorem.\",\"category\":\"hardware\",\"price\":260,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":17,\"ratingInfo\":{\"rating\":0,\"userCount\":65},\"thumbnail\":\"https://placeimg.com/170/170/tech\"},{\"_id\":\"6d0654bed5e468f9ba0fd512\",\"name\":\"Hardware 3\",\"description\":\"Ex tempor incididunt nulla mollit magna pariatur ut laborum duis commodo sit id culpa id. Qui mollit laboris cillum non consectetur sint aute duis fugiat adipisicing reprehenderit aute. Sit nulla est occaecat officia pariatur enim eiusmod duis nisi est. Sint nulla voluptate aliqua ullamco in. Fugiat eiusmod ullamco aute minim duis sit exercitation commodo nostrud duis Lorem laborum ad.\",\"category\":\"hardware\",\"price\":41,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":39,\"ratingInfo\":{\"rating\":1,\"userCount\":45},\"thumbnail\":\"https://placeimg.com/170/170/tech\"},{\"_id\":\"6d0654be9fe1ad2ba256b7ee\",\"name\":\"Hardware 4\",\"description\":\"Minim tempor nulla laborum occaecat dolor irure in incididunt cillum eu. Ad est eiusmod nostrud amet laborum do sunt fugiat ea anim eiusmod incididunt. Aute reprehenderit voluptate esse cupidatat ullamco duis nulla commodo. Dolor pariatur exercitation ullamco laborum qui ipsum proident do enim ex velit eiusmod aliquip. Eu sunt reprehenderit anim consectetur labore fugiat est ut. Quis esse excepteur sint exercitation adipisicing est elit do esse et ad labore voluptate cupidatat. Irure voluptate ullamco quis dolor enim irure excepteur Lorem mollit exercitation dolor anim.\",\"category\":\"hardware\",\"price\":13,\"offerMessage\":\"Limited Stock\",\"outOfStock\":false,\"availableStock\":70,\"ratingInfo\":{\"rating\":4,\"userCount\":29},\"thumbnail\":\"https://placeimg.com/170/170/tech\"},{\"_id\":\"7d0654be23f635da35d979be\",\"name\":\"Garden 1\",\"description\":\"Aute eu esse laboris proident deserunt reprehenderit enim cupidatat pariatur pariatur amet ullamco exercitation labore. Nulla do cupidatat irure laboris amet eiusmod magna. Proident dolore elit eiusmod Lorem aute. Non ex deserunt est anim sunt magna fugiat. Est duis cillum elit non consectetur eiusmod in amet occaecat dolore. Duis nulla nostrud excepteur eiusmod do anim et ex adipisicing ipsum do labore.\",\"category\":\"garden\",\"price\":119,\"offerMessage\":\"25% Off\",\"outOfStock\":true,\"availableStock\":0,\"ratingInfo\":{\"rating\":3,\"userCount\":28},\"thumbnail\":\"https://placeimg.com/170/170/arch\"},{\"_id\":\"7d0654bef46e860bc38475af\",\"name\":\"Garden 2\",\"description\":\"Minim aute culpa aute mollit occaecat ullamco eu reprehenderit anim Lorem anim incididunt. Magna irure quis reprehenderit ex ad commodo. Qui aute qui pariatur fugiat magna qui commodo esse. Quis et sint ullamco occaecat labore anim ad ipsum. Nulla cillum sunt adipisicing laboris commodo. Sunt nisi dolor ex occaecat sit culpa deserunt fugiat irure dolore sint deserunt. Aute officia anim adipisicing amet non ipsum aute.\",\"category\":\"garden\",\"price\":198,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":9,\"ratingInfo\":{\"rating\":1,\"userCount\":51},\"thumbnail\":\"https://placeimg.com/170/170/arch\"},{\"_id\":\"7d0654bead4758da98437555\",\"name\":\"Garden 3\",\"description\":\"Aute Lorem ex sint Lorem consectetur aute irure laborum occaecat qui minim nulla nisi. Do nisi minim velit consequat tempor non tempor elit nostrud elit. Anim elit nisi aute adipisicing duis dolor sit veniam elit pariatur adipisicing ipsum ullamco magna. Ut laborum occaecat aliqua ex ut aliquip sit labore. Cupidatat pariatur tempor ex ea.\",\"category\":\"garden\",\"price\":180,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":95,\"ratingInfo\":{\"rating\":4,\"userCount\":45},\"thumbnail\":\"https://placeimg.com/170/170/arch\"},{\"_id\":\"7d0654beaa8c6e938039bddc\",\"name\":\"Garden 4\",\"description\":\"Quis dolore ex minim dolore proident esse ullamco do elit aliqua. Nisi culpa fugiat consectetur nisi veniam ut ex ex est. Sint cupidatat cupidatat aliqua occaecat.\",\"category\":\"garden\",\"price\":70,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":55,\"ratingInfo\":{\"rating\":0,\"userCount\":56},\"thumbnail\":\"https://placeimg.com/170/170/arch\"},{\"_id\":\"8d0654be2eb44f0904467496\",\"name\":\"Flashlight 1\",\"description\":\"Minim ut in nostrud ullamco adipisicing Lorem elit laborum id deserunt qui non sint. Aliqua aute dolor labore nulla excepteur voluptate laborum commodo non consequat commodo esse. Et consequat esse duis ad proident eiusmod. Do eiusmod sit irure enim magna incididunt mollit non dolor aliqua nisi.\",\"category\":null,\"price\":88,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":66,\"ratingInfo\":{\"rating\":4,\"userCount\":71},\"thumbnail\":\"https://placeimg.com/170/170/tech\"},{\"_id\":\"8d0654bef66ca713c9468d72\",\"name\":\"Smart Home Products\",\"description\":\"Quis magna esse ullamco veniam nulla ipsum et esse Lorem. Aliquip aliqua nulla velit dolore reprehenderit Lorem enim culpa non aliqua enim. Ea nisi voluptate amet dolor elit labore velit laboris ea laboris aute officia Lorem.\",\"category\":null,\"price\":260,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":17,\"ratingInfo\":{\"rating\":0,\"userCount\":65},\"thumbnail\":\"https://placeimg.com/170/170/tech\"},{\"_id\":\"8d0654bed5e468f9ba0fd512\",\"name\":\"Grills\",\"description\":\"Ex tempor incididunt nulla mollit magna pariatur ut laborum duis commodo sit id culpa id. Qui mollit laboris cillum non consectetur sint aute duis fugiat adipisicing reprehenderit aute. Sit nulla est occaecat officia pariatur enim eiusmod duis nisi est. Sint nulla voluptate aliqua ullamco in. Fugiat eiusmod ullamco aute minim duis sit exercitation commodo nostrud duis Lorem laborum ad.\",\"category\":null,\"price\":41,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":39,\"ratingInfo\":{\"rating\":1,\"userCount\":45},\"thumbnail\":\"https://placeimg.com/170/170/tech\"},{\"_id\":\"8d0654be9fe1ad2ba256b7ee\",\"name\":\"Hardware Offers\",\"description\":\"Minim tempor nulla laborum occaecat dolor irure in incididunt cillum eu. Ad est eiusmod nostrud amet laborum do sunt fugiat ea anim eiusmod incididunt. Aute reprehenderit voluptate esse cupidatat ullamco duis nulla commodo. Dolor pariatur exercitation ullamco laborum qui ipsum proident do enim ex velit eiusmod aliquip. Eu sunt reprehenderit anim consectetur labore fugiat est ut. Quis esse excepteur sint exercitation adipisicing est elit do esse et ad labore voluptate cupidatat. Irure voluptate ullamco quis dolor enim irure excepteur Lorem mollit exercitation dolor anim.\",\"category\":null,\"price\":13,\"offerMessage\":\"Limited Stock\",\"outOfStock\":false,\"availableStock\":70,\"ratingInfo\":{\"rating\":4,\"userCount\":29},\"thumbnail\":\"https://placeimg.com/170/170/tech\"},{\"_id\":\"9d0654be23f635da35d979be\",\"name\":\"Discounted Products 1\",\"description\":\"Aute eu esse laboris proident deserunt reprehenderit enim cupidatat pariatur pariatur amet ullamco exercitation labore. Nulla do cupidatat irure laboris amet eiusmod magna. Proident dolore elit eiusmod Lorem aute. Non ex deserunt est anim sunt magna fugiat. Est duis cillum elit non consectetur eiusmod in amet occaecat dolore. Duis nulla nostrud excepteur eiusmod do anim et ex adipisicing ipsum do labore.\",\"category\":null,\"price\":119,\"offerMessage\":\"25% Off\",\"outOfStock\":true,\"availableStock\":0,\"ratingInfo\":{\"rating\":3,\"userCount\":28},\"thumbnail\":\"https://placeimg.com/170/170/arch\"},{\"_id\":\"9d0654bef46e860bc38475af\",\"name\":\"Discounted Products 2\",\"description\":\"Minim aute culpa aute mollit occaecat ullamco eu reprehenderit anim Lorem anim incididunt. Magna irure quis reprehenderit ex ad commodo. Qui aute qui pariatur fugiat magna qui commodo esse. Quis et sint ullamco occaecat labore anim ad ipsum. Nulla cillum sunt adipisicing laboris commodo. Sunt nisi dolor ex occaecat sit culpa deserunt fugiat irure dolore sint deserunt. Aute officia anim adipisicing amet non ipsum aute.\",\"category\":null,\"price\":198,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":9,\"ratingInfo\":{\"rating\":1,\"userCount\":51},\"thumbnail\":\"https://placeimg.com/170/170/arch\"},{\"_id\":\"9d0654bead4758da98437555\",\"name\":\"Discounted Products 3\",\"description\":\"Aute Lorem ex sint Lorem consectetur aute irure laborum occaecat qui minim nulla nisi. Do nisi minim velit consequat tempor non tempor elit nostrud elit. Anim elit nisi aute adipisicing duis dolor sit veniam elit pariatur adipisicing ipsum ullamco magna. Ut laborum occaecat aliqua ex ut aliquip sit labore. Cupidatat pariatur tempor ex ea.\",\"category\":null,\"price\":180,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":95,\"ratingInfo\":{\"rating\":4,\"userCount\":45},\"thumbnail\":\"https://placeimg.com/170/170/arch\"},{\"_id\":\"9d0654beaa8c6e938039bddc\",\"name\":\"Discounted Products 4\",\"description\":\"Quis dolore ex minim dolore proident esse ullamco do elit aliqua. Nisi culpa fugiat consectetur nisi veniam ut ex ex est. Sint cupidatat cupidatat aliqua occaecat.\",\"category\":null,\"price\":70,\"offerMessage\":null,\"outOfStock\":false,\"availableStock\":55,\"ratingInfo\":{\"rating\":0,\"userCount\":56},\"thumbnail\":\"https://placeimg.com/170/170/arch\"}];\n\n//# sourceURL=webpack:///./products.json?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_App_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/App.js */ \"./src/App.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n//import sassMiddleWare from 'node-sass-middleware';\n\nvar data = __webpack_require__(/*! ./products.json */ \"./products.json\");\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"combineReducers\"])({\n    ctr: () => ({ a: 1 })\n});\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"createStore\"])(rootReducer);\n\nconst app = express__WEBPACK_IMPORTED_MODULE_2___default()();\n\nconst PORT = process.env.PORT || 3000;\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static('build/public'));\n\napp.get(\"/products\", (req, res) => {\n    res.send(data);\n});\n\napp.get(\"*\", (req, res) => {\n    const context = {};\n\n    const content = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\n        react_router__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"],\n        { location: req.url, context: context },\n        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\n            react_redux__WEBPACK_IMPORTED_MODULE_7__[\"Provider\"],\n            { store: store },\n            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_App_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n        )\n    ));\n\n    const html = `<html lang=\"en\">\n    <head>\n      <title>\n        POC Shop\n      </title>\n      <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" >\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css\">\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.css\">\n    </head>\n    <body>\n        <div id='root'>${content}</div>\n        <script src=\"client_bundle.js\"></script>\n    </body>\n    </html>\n    `;\n\n    res.send(html);\n});\n\napp.listen(PORT, () => {\n    console.info('Express listening on port  ', PORT);\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_PLP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/PLP */ \"./src/Components/PLP.jsx\");\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"],\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/', render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_PLP__WEBPACK_IMPORTED_MODULE_2__[\"default\"], props) })\n        );\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Components/Cart/CartCount.jsx":
/*!*******************************************!*\
  !*** ./src/Components/Cart/CartCount.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst CartCount = () => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'my-2 my-sm-0' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faShoppingCart\"], size: '2x', color: '#fff' })\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartCount);\n\n//# sourceURL=webpack:///./src/Components/Cart/CartCount.jsx?");

/***/ }),

/***/ "./src/Components/CategoriedProd/CategoriedProd.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/CategoriedProd/CategoriedProd.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../ProductCard/ProductCard */ \"./src/Components/ProductCard/ProductCard.jsx\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Main */ \"./src/Components/Main.jsx\");\n\n\n\n\nconst CategoriedProd = () => {\n    const [prodContext, SetProdContext] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_Main__WEBPACK_IMPORTED_MODULE_2__[\"ProductContext\"]);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,\n        null,\n        prodContext.CurrentProdList.map(cat => {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { key: cat.key },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'h2',\n                    null,\n                    cat.key\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    { className: 'row' },\n                    cat.values.map(prod => {\n                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'div',\n                            { key: prod._id, className: 'col-sm-4' },\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], prod)\n                        );\n                    })\n                )\n            );\n        })\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoriedProd);\n\n//# sourceURL=webpack:///./src/Components/CategoriedProd/CategoriedProd.jsx?");

/***/ }),

/***/ "./src/Components/Filters/CategoryFilter.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Filters/CategoryFilter.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Main */ \"./src/Components/Main.jsx\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\nconst CategoryFilter = () => {\n\n    const liElem = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n    const [prodContext, SetProdContext] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_Main__WEBPACK_IMPORTED_MODULE_1__[\"ProductContext\"]);\n\n    const handleClick = event => {\n        const categoryName = event.target.childNodes[0].data;\n        const selectedCat = prodContext.CategoriedProds.filter(cat => cat.key === categoryName);\n        SetProdContext(_extends({}, prodContext, {\n            CurrentProdList: selectedCat\n        }));\n    };\n\n    const allHandleClick = () => {\n        SetProdContext(_extends({}, prodContext, {\n            CurrentProdList: [...prodContext.CategoriedProds]\n        }));\n    };\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'ul',\n        { className: 'list-group' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'li',\n            {\n                onClick: () => {\n                    allHandleClick();\n                },\n                style: { cursor: 'pointer' },\n                className: 'list-group-item d-flex justify-content-between align-items-center' },\n            'All'\n        ),\n        prodContext.CategoriedProds && prodContext.CategoriedProds.map(cat => {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'li',\n                { key: cat.key,\n                    onClick: event => {\n                        handleClick(event);\n                    },\n                    style: { cursor: 'pointer' },\n                    ref: liElem,\n                    className: 'list-group-item d-flex justify-content-between align-items-center' },\n                cat.key,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'span',\n                    { className: 'badge badge-dark badge-pill' },\n                    cat.values.length\n                )\n            );\n        })\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryFilter);\n\n//# sourceURL=webpack:///./src/Components/Filters/CategoryFilter.jsx?");

/***/ }),

/***/ "./src/Components/Filters/Filter.css":
/*!*******************************************!*\
  !*** ./src/Components/Filters/Filter.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/sass-loader/lib/loader.js!./Filter.css */ \"./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./src/Components/Filters/Filter.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/Components/Filters/Filter.css?");

/***/ }),

/***/ "./src/Components/Filters/Filter.jsx":
/*!*******************************************!*\
  !*** ./src/Components/Filters/Filter.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Filter_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.css */ \"./src/Components/Filters/Filter.css\");\n/* harmony import */ var _Filter_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Filter_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CategoryFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryFilter */ \"./src/Components/Filters/CategoryFilter.jsx\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Main */ \"./src/Components/Main.jsx\");\n\n\n\n\n\nconst Panel = props => {\n  const [height, setScrollHeight] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const divElem = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    window.setTimeout(() => {\n      const height = divElem.current.scrollHeight;\n      setScrollHeight(height);\n    }, 333);\n  }, []);\n  const { activeTab, index, filterName, activateTab } = props;\n  const isActive = activeTab === index;\n  const innerStyle = {\n    height: `${isActive ? height : 0}px`\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: _Filter_css__WEBPACK_IMPORTED_MODULE_1___default.a.panel,\n      role: 'tabpanel',\n      'aria-expanded': isActive },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'button',\n      { className: _Filter_css__WEBPACK_IMPORTED_MODULE_1___default.a.panel__label,\n        role: 'tab',\n        onClick: activateTab },\n      filterName\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { ref: divElem, className: _Filter_css__WEBPACK_IMPORTED_MODULE_1___default.a.panel__inner,\n        style: innerStyle,\n        'aria-hidden': !isActive },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: _Filter_css__WEBPACK_IMPORTED_MODULE_1___default.a.panel__content },\n        props.children\n      )\n    )\n  );\n};\n\nconst FilterAccordion = () => {\n\n  const [activeTab, setScrollHeight] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n\n  const [prodContext, SetProdContext] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_Main__WEBPACK_IMPORTED_MODULE_3__[\"ProductContext\"]);\n\n  const activateTab = index => setScrollHeight(activeTab === index ? -1 : index);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'col-sm-3' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: _Filter_css__WEBPACK_IMPORTED_MODULE_1___default.a.accordion, role: 'tablist' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        Panel,\n        {\n          activeTab: activeTab,\n          index: 1,\n          filterName: 'Category',\n          activateTab: () => activateTab(1)\n        },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoryFilter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Panel, {\n        activeTab: activeTab,\n        index: 2,\n        filterName: 'Rating',\n        activateTab: () => activateTab(2)\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Panel, {\n        activeTab: activeTab,\n        index: 3,\n        filterName: 'Price',\n        activateTab: () => activateTab(3)\n      }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Panel, {\n        activeTab: activeTab,\n        index: 4,\n        filterName: 'Discounts/Offers',\n        activateTab: () => activateTab(4)\n      })\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterAccordion);\n\n//# sourceURL=webpack:///./src/Components/Filters/Filter.jsx?");

/***/ }),

/***/ "./src/Components/Main.jsx":
/*!*********************************!*\
  !*** ./src/Components/Main.jsx ***!
  \*********************************/
/*! exports provided: ProductContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductContext\", function() { return ProductContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils */ \"./src/utils.js\");\n/* harmony import */ var _containers_ProductDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../containers/ProductDisplay */ \"./src/containers/ProductDisplay.jsx\");\n/* harmony import */ var _Components_Filters_Filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Components/Filters/Filter */ \"./src/Components/Filters/Filter.jsx\");\n\n\n\n\n\n\nconst ProductContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext([{}, () => {}]);\n\nconst Main = () => {\n    const [allProductList, setProductList] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n        CategoriedProds: [],\n        OtherProducts: [],\n        CurrentProdList: []\n    });\n\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/products').then(res => {\n            const data = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"groupBy\"])([...res.data], 'category');\n            setProductList({\n                CategoriedProds: data.filter(prod => prod.key !== null),\n                OtherProducts: data.filter(prod => prod.key == null)[0].values,\n                CurrentProdList: data.filter(prod => prod.key !== null)\n            });\n        });\n        return () => {\n            console.log(\"cleanup\");\n        };\n    }, []);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        ProductContext.Provider,\n        { value: [allProductList, setProductList] },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            { className: 'row' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Filters_Filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_ProductDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=webpack:///./src/Components/Main.jsx?");

/***/ }),

/***/ "./src/Components/PLP.jsx":
/*!********************************!*\
  !*** ./src/Components/PLP.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ \"./src/Components/Main.jsx\");\n/* harmony import */ var _containers_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../containers/Header */ \"./src/containers/Header.jsx\");\n\n\n\n\nconst PLP = () => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { role: 'main', className: 'container' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PLP);\n\n//# sourceURL=webpack:///./src/Components/PLP.jsx?");

/***/ }),

/***/ "./src/Components/ProdCarousel/ProdCarousel.jsx":
/*!******************************************************!*\
  !*** ./src/Components/ProdCarousel/ProdCarousel.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ \"react-slick\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProdCarousel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProdCarousel.scss */ \"./src/Components/ProdCarousel/ProdCarousel.scss\");\n/* harmony import */ var _ProdCarousel_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProdCarousel_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductCard/ProductCard */ \"./src/Components/ProductCard/ProductCard.jsx\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Main */ \"./src/Components/Main.jsx\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\n\n\nfunction SampleNextArrow(props) {\n  const { className, style, onClick } = props;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: className,\n    style: _extends({}, style, {\n      display: \"block\",\n      background: \"#343a40\",\n      width: '34px',\n      height: '39px',\n      padding: '10px 10px 0 8px' }),\n    onClick: onClick\n  });\n}\n\nfunction SamplePrevArrow(props) {\n  const { className, style, onClick } = props;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: className,\n    style: _extends({}, style, { display: \"block\",\n      background: \"#343a40\",\n      width: '34px',\n      height: '39px',\n      left: '-32px',\n      padding: '10px 10px 10px 8px' }),\n    onClick: onClick\n  });\n}\n\nconst ProdCarousel = () => {\n  const settings = {\n    className: \"slider variable-width modify\",\n    infinite: false,\n    centerMode: false,\n    slidesToShow: 3,\n    slidesToScroll: 3,\n    variableWidth: false,\n    nextArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SampleNextArrow, null),\n    prevArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SamplePrevArrow, null)\n  };\n  const [prodContext, SetProdContext] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_Main__WEBPACK_IMPORTED_MODULE_4__[\"ProductContext\"]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"div\",\n    { style: { height: 500 } },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"h2\",\n      null,\n      \" Other Products \"\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      react_slick__WEBPACK_IMPORTED_MODULE_1___default.a,\n      settings,\n      prodContext.OtherProducts.map(prod => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          \"div\",\n          { key: prod._id, className: \"pr-2\", style: { width: 350, border: '2px solid green' } },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({ key: prod._id }, prod))\n        );\n      })\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProdCarousel);\n\n//# sourceURL=webpack:///./src/Components/ProdCarousel/ProdCarousel.jsx?");

/***/ }),

/***/ "./src/Components/ProdCarousel/ProdCarousel.scss":
/*!*******************************************************!*\
  !*** ./src/Components/ProdCarousel/ProdCarousel.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/sass-loader/lib/loader.js!./ProdCarousel.scss */ \"./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./src/Components/ProdCarousel/ProdCarousel.scss\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/Components/ProdCarousel/ProdCarousel.scss?");

/***/ }),

/***/ "./src/Components/ProductCard/ProductCard.jsx":
/*!****************************************************!*\
  !*** ./src/Components/ProductCard/ProductCard.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProductCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard.scss */ \"./src/Components/ProductCard/ProductCard.scss\");\n/* harmony import */ var _ProductCard_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProductCard_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_star_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-star-rating-component */ \"react-star-rating-component\");\n/* harmony import */ var react_star_rating_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_star_rating_component__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst ProductCard = product => {\n    const noImageUrl = \"/assets/noImage.png\";\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'card' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: product.thumbnail || noImageUrl, className: 'card-img-top imgMod', alt: '...' }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            { className: 'card-body' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'h5',\n                { className: 'card-title' },\n                product.name,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'span',\n                    { title: product.description, style: { cursor: 'pointer' } },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__[\"FontAwesomeIcon\"], { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faInfoCircle\"] })\n                )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_star_rating_component__WEBPACK_IMPORTED_MODULE_2___default.a, { name: 'rate2', editing: false,\n                renderStarIcon: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'span',\n                    null,\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__[\"FontAwesomeIcon\"], { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faStar\"] })\n                ),\n                starCount: 5,\n                value: +product.ratingInfo.rating }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                null,\n                '(',\n                +product.ratingInfo.userCount,\n                ')'\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { style: { fontSize: '22px' } },\n                '$',\n                product.price,\n                '.00'\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'button',\n                { type: 'button', className: 'btn btn-dark' },\n                'Add to cart'\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                { style: { marginLeft: '20px' } },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'span',\n                    null,\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'button',\n                        { type: 'button' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__[\"FontAwesomeIcon\"], { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faMinus\"] })\n                    )\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'text', style: { width: '21px', marginLeft: '4px', marginRight: '4px' } }),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'span',\n                    null,\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'button',\n                        { type: 'button' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__[\"FontAwesomeIcon\"], { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faPlus\"] })\n                    )\n                )\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\n\n//# sourceURL=webpack:///./src/Components/ProductCard/ProductCard.jsx?");

/***/ }),

/***/ "./src/Components/ProductCard/ProductCard.scss":
/*!*****************************************************!*\
  !*** ./src/Components/ProductCard/ProductCard.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/sass-loader/lib/loader.js!./ProductCard.scss */ \"./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./src/Components/ProductCard/ProductCard.scss\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/Components/ProductCard/ProductCard.scss?");

/***/ }),

/***/ "./src/Components/Search/Search.jsx":
/*!******************************************!*\
  !*** ./src/Components/Search/Search.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Search = () => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"text\", placeholder: \"Search\", className: \"form-control mr-sm-2\" });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n//# sourceURL=webpack:///./src/Components/Search/Search.jsx?");

/***/ }),

/***/ "./src/containers/Header.jsx":
/*!***********************************!*\
  !*** ./src/containers/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Search_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Components/Search/Search */ \"./src/Components/Search/Search.jsx\");\n/* harmony import */ var _Components_Cart_CartCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Components/Cart/CartCount */ \"./src/Components/Cart/CartCount.jsx\");\n\n\n\n\nconst HeaderContainer = () => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'header',\n        { style: { marginBottom: '30px' } },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'nav',\n            { className: 'navbar navbar-expand-md  navbar-dark fixed-top bg-dark', style: { backgroundColor: 'bisque' } },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'a',\n                { className: 'navbar-brand col-sm-9', href: '#' },\n                'Poc Shop'\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'form',\n                { className: 'form-inline mt-2 mt-md-0' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Search_Search__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Cart_CartCount__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderContainer);\n\n//# sourceURL=webpack:///./src/containers/Header.jsx?");

/***/ }),

/***/ "./src/containers/ProductDisplay.jsx":
/*!*******************************************!*\
  !*** ./src/containers/ProductDisplay.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_CategoriedProd_CategoriedProd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Components/CategoriedProd/CategoriedProd */ \"./src/Components/CategoriedProd/CategoriedProd.jsx\");\n/* harmony import */ var _Components_ProdCarousel_ProdCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/ProdCarousel/ProdCarousel */ \"./src/Components/ProdCarousel/ProdCarousel.jsx\");\n\n\n\n\nconst ProductDisplay = () => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'col-sm-9' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_CategoriedProd_CategoriedProd__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_ProdCarousel_ProdCarousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDisplay);\n\n//# sourceURL=webpack:///./src/containers/ProductDisplay.jsx?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: groupBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupBy\", function() { return groupBy; });\nconst groupBy = (array, key) => {\n    return array.reduce((r, o) => {\n        var temp = r.find(g => g.key === o[key]),\n            value = Object.assign({}, o, o.children && { children: groupBy(o.children, key) });\n\n        if (temp) {\n            temp.values.push(value);\n        } else {\n            r.push({ key: o[key], values: [value] });\n        }\n        return r;\n    }, []);\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/free-solid-svg-icons\");\n\n//# sourceURL=webpack:///external_%22@fortawesome/free-solid-svg-icons%22?");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/react-fontawesome\");\n\n//# sourceURL=webpack:///external_%22@fortawesome/react-fontawesome%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-slick\");\n\n//# sourceURL=webpack:///external_%22react-slick%22?");

/***/ }),

/***/ "react-star-rating-component":
/*!**********************************************!*\
  !*** external "react-star-rating-component" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-star-rating-component\");\n\n//# sourceURL=webpack:///external_%22react-star-rating-component%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ })

/******/ });