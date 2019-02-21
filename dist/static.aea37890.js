(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todaysDate = new Date();
var day = new Date().getDay();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var excerpt;
var regex = /(<([^>]+)>)/ig;

var helpers = {

    // get store hours respective to the day the client hits the website
    // custom store holiday hours > custom store hours > global holiday hours > global hours
    getHours: function getHours(store, globalHours, globalHolidayHours) {
        // If store holiday hours are present and today
        var customStoreHolidayHours = false;
        var customStoreHours = false;
        var holidayHours = false;
        if (store.acf.alternate_hours.length != 0) {
            var hourArray = store.acf.alternate_hours;
            for (var i = 0; i < hourArray.length; i++) {
                var testDate = new Date(store.acf.alternate_hours[i].date_picker);
                if (testDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0) && store.acf.alternate_hours[i].closed == true) {
                    customStoreHolidayHours = true;
                    return store.acf.alternate_hours[i].start_time + " - " + store.acf.alternate_hours[i].end_time;
                }
            }
        }
        if (store.acf.custom_hours == true && customStoreHolidayHours == false) {
            if (days[day] == "Monday") {
                if (store.acf.standard_hours[0].monday_closed == false) {
                    customStoreHours = true;
                    return store.acf.standard_hours[0].monday_open + " - " + store.acf.standard_hours[0].monday_close;
                } else {
                    return 'Closed';
                }
            } else if (days[day] == "Tuesday") {
                if (store.acf.standard_hours[0].tuesday_closed == false) {
                    customStoreHours = true;
                    return store.acf.standard_hours[0].tuesday_open + " - " + store.acf.standard_hours[0].tuesday_close;
                } else {
                    return 'Closed';
                }
            } else if (days[day] == "Wednesday") {
                if (store.acf.standard_hours[0].wednesday_closed == false) {
                    customStoreHours = true;
                    return store.acf.standard_hours[0].wednesday_open + " - " + store.acf.standard_hours[0].wednesday_close;
                } else {
                    return 'Closed';
                }
            } else if (days[day] == "Thursday") {
                if (store.acf.standard_hours[0].thursday_closed == false) {
                    customStoreHours = true;
                    return store.acf.standard_hours[0].thursday_open + " - " + store.acf.standard_hours[0].thursday_close;
                } else {
                    return 'Closed';
                }
            } else if (days[day] == "Friday") {
                if (store.acf.standard_hours[0].friday_closed == false) {
                    customStoreHours = true;
                    return store.acf.standard_hours[0].friday_open + " - " + store.acf.standard_hours[0].friday_close;
                } else {
                    return 'Closed';
                }
            } else if (days[day] == "Saturday") {
                if (store.acf.standard_hours[0].saturday_closed == false) {
                    customStoreHours = true;
                    return store.acf.standard_hours[0].saturday_open + " - " + store.acf.standard_hours[0].saturday_close;
                } else {
                    return 'Closed';
                }
            } else if (days[day] == "Sunday") {
                if (store.acf.standard_hours[0].sunday_closed == false) {
                    customStoreHours = true;
                    return store.acf.standard_hours[0].sunday_open + " - " + store.acf.standard_hours[0].sunday_close;
                } else {
                    return 'Closed';
                }
            }
        }
        if (store.acf.custom_hours == false && customStoreHolidayHours == false) {
            if (globalHolidayHours.length != 0) {
                var hourArray = globalHolidayHours;
                for (var i = 0; i < hourArray.length; i++) {
                    var testDate = new Date(globalHolidayHours[i].date_picker);
                    if (testDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0) && globalHolidayHours[i].closed == true) {
                        console.log('holiday hours true');
                        holidayHours = true;
                        return globalHolidayHours[i].start_time + " - " + globalHolidayHours[i].end_time;
                    }
                }
            }
        }
        if (store.acf.custom_hours == false && customStoreHolidayHours == false && holidayHours == false) {
            if (globalHours.length != 0) {
                console.log(globalHours, 'global hours');
                if (days[day] == "Monday") {
                    if (globalHours[0].monday_closed == false) {
                        customStoreHours = true;
                        return globalHours[0].monday_open + " - " + globalHours[0].monday_close;
                    } else {
                        return 'Closed';
                    }
                } else if (days[day] == "Tuesday") {
                    if (globalHours[0].tuesday_closed == false) {
                        customStoreHours = true;
                        return globalHours[0].tuesday_open + " - " + globalHours[0].tuesday_close;
                    } else {
                        return 'Closed';
                    }
                } else if (days[day] == "Wednesday") {
                    if (globalHours[0].wednesday_closed == false) {
                        customStoreHours = true;
                        return globalHours[0].wednesday_open + " - " + globalHours[0].wednesday_close;
                    } else {
                        return 'Closed';
                    }
                } else if (days[day] == "Thursday") {
                    if (globalHours[0].thursday_closed == false) {
                        customStoreHours = true;
                        return globalHours[0].thursday_open + " - " + globalHours[0].thursday_close;
                    } else {
                        return 'Closed';
                    }
                } else if (days[day] == "Friday") {
                    if (globalHours[0].friday_closed == false) {
                        customStoreHours = true;
                        return globalHours[0].friday_open + " - " + globalHours[0].friday_close;
                    } else {
                        return 'Closed';
                    }
                } else if (days[day] == "Saturday") {
                    if (globalHours[0].saturday_closed == false) {
                        customStoreHours = true;
                        return globalHours[0].saturday_open + " - " + globalHours[0].saturday_close;
                    } else {
                        return 'Closed';
                    }
                } else if (days[day] == "Sunday") {
                    if (globalHours[0].sunday_closed == false) {
                        customStoreHours = true;
                        return globalHours[0].sunday_open + " - " + globalHours[0].sunday_close;
                    } else {
                        return 'Closed';
                    }
                }
            }
        }
    },

    // Convert url received from wordpress to one that functions within react-static
    convertLink: function convertLink(url, title) {
        if (url.includes(title)) {
            var words = url.split('/');
            if (words[4] == "") {
                return words[3];
            } else {
                if (words[3] == "events") {
                    return "/events/" + words[4];
                } else if (words[3] == "sales") {
                    return "/sales/" + words[4];
                } else if (words[3] == "stores") {
                    return "/stores/" + words[4];
                } else if (words[3] == "blog") {
                    return "/blogs/" + words[4];
                }
            }
        } else {
            return url;
        }
    },

    // Gets title from url if one is not already provided
    getTitleFromUrl: function getTitleFromUrl(url, title) {
        var words = url.split('/');
        if (url.includes(title)) {
            if (words[4] == "") {
                return words[3].replace(/-/g, ' ');
            } else {
                return words[4].replace(/-/g, ' ');
            }
        } else {
            return url.replace(/(^\w+:|^)\/\//, '');
        }
    },

    // Converts youtube url to an ID which is inserted into an iframe
    getVideoUrl: function getVideoUrl(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);

        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    },

    // Compress text, or clamp it
    compressText: function compressText(store, amount) {
        excerpt = store.replace(regex, "").substr(0, amount);
        excerpt = excerpt.substr(0, excerpt.lastIndexOf(" "));
        return excerpt + "...";
    }

};

exports.default = helpers;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAAAXNSR0IArs4c6QAAAVVJREFUOBGVkr9KA0EQxr/ZHEmIYGGrlbaSVlDBQwKXf5foI/goPoCtnS+gTTSc3JkQDgsbQbRIYWOhWAhCIKicmtw4G0g4IeQu2+zs7Lc/vpkdQsyqFYt5SvFR+vN7/8z3P6bJ1bRkJEdQOAWo8JPLtG3bzkXuJmEchBGizuA3EG1Q+OtNA8VBcOG6j0MMNxl4JWBbg0zTzE5sSBAL0WLHaT8NWG2Jo2cNWsxlnShIcslXtbq7rDh9LY9WmdHpfwUV3/cDqpWLD8kxI6UBwhoYGTl1MgsvJYMI+TkhIzmLHV1a0F9ZN8CDxBAOmUilDuWn9sRJQIpKTc+7m6cnVC9bJwI4AFiGjq1z5+pG20oKmQCkoX0OUWi67u24DcY4mLWPHWiAwnCn4bbuo/rYOalVrGNdggxbbwS4/A/QsFgnUm9PAO88YLPhtbpRB3PFlmUtzXrwB4gadjdg2ONQAAAAAElFTkSuQmCC"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-lazy-hero");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(10);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactstrap = __webpack_require__(2);

var _reactFontawesome = __webpack_require__(6);

var _freeSolidSvgIcons = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(13);

var _HeroSlider = __webpack_require__(58);

var _HeroSlider2 = _interopRequireDefault(_HeroSlider);

var _ImageCarousel = __webpack_require__(17);

var _ImageCarousel2 = _interopRequireDefault(_ImageCarousel);

var _GlobalImageGrid = __webpack_require__(18);

var _GlobalImageGrid2 = _interopRequireDefault(_GlobalImageGrid);

var _FeaturedEvents = __webpack_require__(20);

var _FeaturedEvents2 = _interopRequireDefault(_FeaturedEvents);

var _ContentArea = __webpack_require__(21);

var _ContentArea2 = _interopRequireDefault(_ContentArea);

var _FeaturedStores = __webpack_require__(22);

var _FeaturedStores2 = _interopRequireDefault(_FeaturedStores);

var _TintSocialFeed = __webpack_require__(66);

var _TintSocialFeed2 = _interopRequireDefault(_TintSocialFeed);

var _rightArrow = __webpack_require__(11);

var _rightArrow2 = _interopRequireDefault(_rightArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fullWidth = {
  width: '100%'
};

var excerpt;
var regex = /(<([^>]+)>)/ig;
var selectedStores = [];
var featuredStores = [];

exports.default = (0, _reactStatic.withRouteData)(function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      term: '',
      pageExist: false,
      eventExist: false,
      storeExist: false,
      imageArray: []
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'compressText',
    value: function compressText(store) {
      if (store.length > 80) {
        excerpt = store.replace(regex, "").substr(0, 80);
        excerpt = excerpt.substr(0, excerpt.lastIndexOf(" "));
        return excerpt + "...";
      } else {
        return store;
      }
    }
  }, {
    key: 'convertLink',
    value: function convertLink(url) {
      var words = url.split('/');
      if (words[4] == "") {
        return words[3];
      } else {
        if (words[3] == "events") {
          return "/events/" + words[4];
        } else if (words[3] == "sales") {
          return "/sales/" + words[4];
        } else if (words[3] == "stores") {
          return "/stores/" + words[4];
        } else if (words[3] == "blog") {
          return "/blogs/" + words[4];
        }
      }
    }
  }, {
    key: 'getTitleFromUrl',
    value: function getTitleFromUrl(url) {
      var words = url.split('/');
      if (words[4] == "") {
        return words[3].replace(/-/g, ' ');
      } else {
        return words[4].replace(/-/g, ' ');
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var component = this;
      var imageData = [];
      var _home = this.props.home[0];

      _home.acf.image_grid ? imageData = {
        image_group_1: _home.acf.image_group_1,
        image_group_2: _home.acf.image_group_2,
        image_group_3: _home.acf.image_group_3,
        image_group_4: _home.acf.image_group_4
      } : null;

      component.setState({
        imageGridData: imageData
      });

      // Generate featured events from events json
      featuredStores = this.props.events.map(function (store) {
        if (store.acf.featured_image) {
          return _react2.default.createElement(
            'div',
            { className: 'featuredEvent' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: store.slug },
              _react2.default.createElement('img', { src: store.acf.featured_image, className: 'featuredEventImage' }),
              _react2.default.createElement(
                'div',
                { className: 'eventOverlay' },
                _react2.default.createElement(
                  'h4',
                  null,
                  store.title.rendered
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  (0, _reactHtmlParser2.default)(_this2.compressText(store.acf.post_copy))
                )
              )
            )
          );
        }
      });
      // Remove all nulls/undefined from array
      featuredStores = featuredStores.filter(function (el) {
        return el != null;
      });
      // Pull only 3 featured events per design
      featuredStores = featuredStores.slice(0, 3);
    }
  }, {
    key: 'render',
    value: function render() {

      var home = this.props.home[0];

      return _react2.default.createElement(
        'article',
        { id: 'home' },
        _react2.default.createElement(
          _reactStatic.Head,
          null,
          _react2.default.createElement('body', { className: 'home ' + home.acf.global_page_color }),
          home.yoast_meta.yoast_wpseo_title ? _react2.default.createElement(
            'title',
            null,
            home.yoast_meta.yoast_wpseo_title
          ) : "",
          home.yoast_meta.yoast_wpseo_metadesc ? _react2.default.createElement('meta', { name: 'description', content: home.yoast_meta.yoast_wpseo_metadesc }) : "",
          home.yoast_meta.yoast_wpseo_canonical ? _react2.default.createElement('link', { rel: 'canonical', href: home.yoast_meta.yoast_wpseo_canonical }) : ""
        ),
        _react2.default.createElement(_HeroSlider2.default, { home: this.props.home }),
        _react2.default.createElement(
          'div',
          { id: 'searchBar' },
          _react2.default.createElement(
            _reactstrap.Container,
            null,
            _react2.default.createElement(
              'div',
              { id: 'searchAddress' },
              _react2.default.createElement(
                'a',
                { href: '//maps.google.com/?q=' + this.props.property_options.acf.address_1 + '+' + this.props.property_options.acf.address_2, target: '_blank' },
                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarkerAlt, className: 'icon' }),
                _react2.default.createElement(
                  'div',
                  { className: 'visible-sm' },
                  'Directions'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'hidden-xs hidden-sm' },
                  this.props.property_options.acf.address_1 ? _react2.default.createElement(
                    'p',
                    null,
                    this.props.property_options.acf.address_1,
                    ' ',
                    this.props.property_options.acf.address_2 ? _react2.default.createElement(
                      'span',
                      null,
                      this.props.property_options.acf.address_2
                    ) : "",
                    ' '
                  ) : "",
                  ' '
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { id: 'searchEmail' },
              _react2.default.createElement(
                'a',
                { href: 'mailto:' + this.props.property_options.acf.email },
                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faEnvelope, className: 'icon' }),
                _react2.default.createElement(
                  'div',
                  { className: 'hidden-xs' },
                  this.props.property_options.acf.email
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { id: 'searchPhone' },
              _react2.default.createElement(
                'a',
                { href: 'tel:' + this.props.property_options.acf.phone },
                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faPhone, className: 'icon' }),
                _react2.default.createElement(
                  'div',
                  { className: 'hidden-xs' },
                  this.props.property_options.acf.phone
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'results' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _reactstrap.Container,
              { className: 'top-cta' },
              _react2.default.createElement(
                'h1',
                null,
                home.acf.title_h1
              ),
              _react2.default.createElement(
                'div',
                null,
                (0, _reactHtmlParser2.default)(home.acf.content_area)
              ),
              home.acf.button ? _react2.default.createElement(
                _reactStatic.Link,
                { className: 'halcyon-button', to: this.convertLink(home.acf.button.url), target: home.acf.button.target },
                (0, _reactHtmlParser2.default)(home.acf.button.title)
              ) : ""
            ),
            home.acf.layout ? _react2.default.createElement(
              'div',
              null,
              home.acf.layout.map(function (section, index) {
                if (section.acf_fc_layout == 'content_area') {
                  return _react2.default.createElement(
                    _reactstrap.Container,
                    { key: index },
                    _react2.default.createElement(_ContentArea2.default, { section: section })
                  );
                } else if (section.acf_fc_layout == 'image_carousel') {
                  return _react2.default.createElement(
                    'div',
                    { key: index },
                    _react2.default.createElement(_ImageCarousel2.default, { section: section })
                  );
                } else if (section.acf_fc_layout == 'image_grid') {
                  return _react2.default.createElement(
                    'div',
                    { key: index },
                    _react2.default.createElement(_GlobalImageGrid2.default, { section: section })
                  );
                } else if (section.acf_fc_layout == 'featured_events') {
                  return _react2.default.createElement(
                    'div',
                    { key: index },
                    _react2.default.createElement(_FeaturedEvents2.default, { section: section })
                  );
                } else if (section.acf_fc_layout == 'featured_stores') {
                  return _react2.default.createElement(
                    'div',
                    { key: index },
                    _react2.default.createElement(_FeaturedStores2.default, { pageData: home, section: section })
                  );
                }
              })
            ) : "",
            _react2.default.createElement(
              _reactstrap.Container,
              { className: 'social-feed-container' },
              this.props.property_options.acf.social_feed_data_id ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'h2',
                  null,
                  '@HALCYONFORSYTH'
                ),
                _react2.default.createElement(_TintSocialFeed2.default, { optionsData: this.props.property_options })
              ) : ""
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(8);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _reactstrap = __webpack_require__(2);

__webpack_require__(59);

var _gallerySliderArrow = __webpack_require__(60);

var _gallerySliderArrow2 = _interopRequireDefault(_gallerySliderArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//  <ImageCarousel section={section} />

var imageArray = [];

var ImageCarousel = function (_React$Component) {
    _inherits(ImageCarousel, _React$Component);

    function ImageCarousel(props) {
        _classCallCheck(this, ImageCarousel);

        return _possibleConstructorReturn(this, (ImageCarousel.__proto__ || Object.getPrototypeOf(ImageCarousel)).call(this, props));
    }

    _createClass(ImageCarousel, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            imageArray = this.props.section.carousel.map(function (image, index) {
                return _react2.default.createElement(
                    "div",
                    { "data-index": index, key: index },
                    _react2.default.createElement("img", { src: image.image.url, alt: image.image.alt })
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            var settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: _gallerySliderArrow2.default, alt: "arrow left" })
                ),
                prevArrow: _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: _gallerySliderArrow2.default, alt: "arrow right" })
                ),
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        nextArrow: "",
                        prevArrow: ""
                    }
                }]
            };
            var backgroundTexture = this.props.section.background_texture;
            var style = {
                backgroundImage: "url(" + backgroundTexture + ")"
            };

            return _react2.default.createElement(
                "div",
                { className: "imageCarousel" },
                _react2.default.createElement(
                    "div",
                    { className: "heading-container" },
                    _react2.default.createElement(
                        _reactstrap.Container,
                        null,
                        _react2.default.createElement(
                            "h2",
                            null,
                            this.props.section.heading
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "slider-container", style: style },
                    _react2.default.createElement(
                        _reactstrap.Container,
                        null,
                        _react2.default.createElement(
                            _reactSlick2.default,
                            _extends({ className: "pageCotentCarousel" }, settings),
                            imageArray
                        )
                    )
                )
            );
        }
    }]);

    return ImageCarousel;
}(_react2.default.Component);

exports.default = ImageCarousel;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(19);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <ImageGrid images={this.state.imageGridData} />

var GlobalImageGrid = function (_Component) {
    _inherits(GlobalImageGrid, _Component);

    function GlobalImageGrid(props) {
        _classCallCheck(this, GlobalImageGrid);

        var _this = _possibleConstructorReturn(this, (GlobalImageGrid.__proto__ || Object.getPrototypeOf(GlobalImageGrid)).call(this, props));

        _this.state = {
            mergeCounter: 1,
            images: "",
            image_group_1: "",
            image_group_2: "",
            image_group_3: "",
            image_group_4: ""
        };
        return _this;
    }

    _createClass(GlobalImageGrid, [{
        key: 'componentWillMount',
        value: function componentWillMount() {

            var component = this;
            var imageData = [];
            var section = this.props.section;

            section.image_group_1 ? imageData = {
                image_group_1: section.image_group_1,
                image_group_2: section.image_group_2,
                image_group_3: section.image_group_3,
                image_group_4: section.image_group_4
            } : null;

            component.setState({
                imageGridData: imageData
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.startSliderEffect();
        }
    }, {
        key: 'startSliderEffect',
        value: function startSliderEffect() {
            var component = this;
            //animate last image in each group, move to top of group
            (0, _jquery2.default)('.image-group').each(function () {
                var randomNumber = component.randomNumber();
                var group = (0, _jquery2.default)(this);
                component.sliderTimer(randomNumber, group); //set the interval for this group
            });
        }
    }, {
        key: 'sliderTimer',
        value: function sliderTimer(randomNumber, group) {
            var component = this;
            var randomTimeout = component.randomNumber() * 1000;

            var sliderEffect = function sliderEffect() {
                var figure = group.find('figure').last(); //find current last figure to animate
                var next = group.find('figure').first();

                if (randomNumber % 2 === 0) {
                    next.show();
                    (0, _jquery2.default)(figure).fadeOut(1500, function () {
                        figure.css('z-index', 1).show();
                        next.css('z-index', 3);
                    }).promise().done(function () {
                        figure.prependTo(group.children().first());
                    });
                } else {
                    next.show();
                    (0, _jquery2.default)(figure).fadeOut(1500, function () {
                        figure.css('z-index', 1).show();
                        next.css('z-index', 3);
                    }).promise().done(function () {
                        figure.prependTo(group.children().first());
                    });
                }
            };
            setInterval(sliderEffect, randomTimeout);
        }
    }, {
        key: 'randomNumber',
        value: function randomNumber() {
            return 5 + Math.floor(Math.random() * 10);
        }
    }, {
        key: 'mapImageArrays',
        value: function mapImageArrays(imageArray) {
            return imageArray.map(function (image, index) {
                return _react2.default.createElement('figure', { key: index, style: { backgroundImage: 'url(' + image.image.url + ')' } });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'image-grid-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'module image_grid' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6 image-group image-group-1' },
                            _react2.default.createElement(
                                'div',
                                null,
                                this.mapImageArrays(this.state.imageGridData.image_group_1)
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-xs-6 image-group image-group-2' },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        this.mapImageArrays(this.state.imageGridData.image_group_2)
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-xs-6 image-group image-group-3' },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        this.mapImageArrays(this.state.imageGridData.image_group_3)
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-xs-12 image-group image-group-4' },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        this.mapImageArrays(this.state.imageGridData.image_group_4)
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return GlobalImageGrid;
}(_react.Component);

exports.default = GlobalImageGrid;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactstrap = __webpack_require__(2);

var _rightArrow = __webpack_require__(11);

var _rightArrow2 = _interopRequireDefault(_rightArrow);

__webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//  <SimpleSlider events={this.props.events} />

var eventArray = [];
var excerpt;
var regex = /(<([^>]+)>)/ig;
var featuredStores = [];

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(FeaturedEvents, _React$Component);

    function FeaturedEvents(props) {
        _classCallCheck(this, FeaturedEvents);

        return _possibleConstructorReturn(this, (FeaturedEvents.__proto__ || Object.getPrototypeOf(FeaturedEvents)).call(this, props));
    }

    _createClass(FeaturedEvents, [{
        key: 'compressText',
        value: function compressText(store) {
            if (store.length > 80) {
                excerpt = store.replace(regex, "").substr(0, 80);
                excerpt = excerpt.substr(0, excerpt.lastIndexOf(" "));
                return excerpt + "...";
            } else {
                return store;
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            if (this.props.section.select_events) {
                this.props.section.events.map(function (theEvent) {
                    eventArray.push(theEvent.event.post_name);
                });

                featuredStores = this.props.events.map(function (store) {
                    for (var i = 0; i < eventArray.length; i++) {
                        if (store.slug == eventArray[i]) {
                            return _react2.default.createElement(
                                'div',
                                { className: 'featuredEvent' },
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { to: '/events/' + store.slug },
                                    store.acf.featured_image ? _react2.default.createElement('img', { src: store.acf.featured_image, className: 'featuredEventImage' }) : _react2.default.createElement('img', { src: 'https://halcyon.dev.v3.imaginuitycenters.com/wp-content/uploads/sites/31/2019/01/572x310.png', className: 'featuredEventImage' }),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'eventOverlay' },
                                        _react2.default.createElement(
                                            'h4',
                                            null,
                                            store.title.rendered
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            (0, _reactHtmlParser2.default)(_this2.compressText(store.acf.post_copy))
                                        )
                                    )
                                )
                            );
                        }
                    }
                });
            } else {
                featuredStores = this.props.events.map(function (store) {
                    if (store.acf.featured_image) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'featuredEvent' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: store.slug },
                                _react2.default.createElement('img', { src: store.acf.featured_image, className: 'featuredEventImage' }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'eventOverlay' },
                                    _react2.default.createElement(
                                        'h4',
                                        null,
                                        store.title.rendered
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        (0, _reactHtmlParser2.default)(_this2.compressText(store.acf.post_copy))
                                    )
                                )
                            )
                        );
                    }
                });
            }

            // Remove all nulls/undefined from array
            featuredStores = featuredStores.filter(function (el) {
                return el != null;
            });
            // Pull only 3 featured events per design
            featuredStores = featuredStores.slice(0, 3);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'events-container' },
                this.props.section.heading && _react2.default.createElement(
                    'div',
                    { className: 'heading-container' },
                    _react2.default.createElement(
                        _reactstrap.Container,
                        null,
                        _react2.default.createElement(
                            'h2',
                            null,
                            this.props.section.heading
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Container,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Col,
                            { sm: 4, className: 'event-wrapper' },
                            featuredStores[0]
                        ),
                        _react2.default.createElement(
                            _reactstrap.Col,
                            { sm: 4, className: 'event-wrapper' },
                            featuredStores[1]
                        ),
                        _react2.default.createElement(
                            _reactstrap.Col,
                            { sm: 4, className: 'event-wrapper' },
                            featuredStores[2]
                        )
                    ),
                    _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/events', className: 'pull-right' },
                        'View All',
                        _react2.default.createElement('img', { className: 'arrow', src: _rightArrow2.default, alt: 'right-arrow' })
                    )
                )
            );
        }
    }]);

    return FeaturedEvents;
}(_react2.default.Component));

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _helpers = __webpack_require__(5);

var _helpers2 = _interopRequireDefault(_helpers);

__webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(ContentArea, _React$Component);

    function ContentArea(props) {
        _classCallCheck(this, ContentArea);

        return _possibleConstructorReturn(this, (ContentArea.__proto__ || Object.getPrototypeOf(ContentArea)).call(this, props));
    }

    _createClass(ContentArea, [{
        key: 'render',
        value: function render() {
            var section = this.props.section;

            return _react2.default.createElement(
                'div',
                { className: 'contentArea' },
                section.display_options == "fullwidth" ? _react2.default.createElement(
                    'div',
                    { className: section.header_button_alignment ? 'heading-button-align-' + section.header_button_alignment : '' },
                    section.heading ? _react2.default.createElement(
                        'h4',
                        { className: 'column-heading' },
                        section.heading
                    ) : "",
                    section.content ? _react2.default.createElement(
                        'div',
                        null,
                        (0, _reactHtmlParser2.default)(section.content)
                    ) : "",
                    section.button ? _react2.default.createElement(
                        'div',
                        { className: 'button-wrapper' },
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button.url, this.props.title.toLowerCase()) },
                            section.button.title ? _react2.default.createElement(
                                'div',
                                null,
                                (0, _reactHtmlParser2.default)(section.button.title)
                            ) : _react2.default.createElement(
                                'div',
                                null,
                                _helpers2.default.getTitleFromUrl(section.button.url, this.props.title.toLowerCase())
                            )
                        )
                    ) : ""
                ) : "",
                section.display_options == "50-50" ? _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 6, className: section.header_button_alignment ? 'heading-button-align-' + section.header_button_alignment : '' },
                        section.heading ? _react2.default.createElement(
                            'h4',
                            { className: 'column-heading' },
                            section.heading
                        ) : "",
                        section.content ? _react2.default.createElement(
                            'div',
                            null,
                            (0, _reactHtmlParser2.default)(section.content)
                        ) : "",
                        section.button ? _react2.default.createElement(
                            'div',
                            { className: 'button-wrapper' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button.url, this.props.title.toLowerCase()) },
                                section.button.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(section.button.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(section.button.url, this.props.title.toLowerCase())
                                )
                            )
                        ) : ""
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 6, className: section.header_button_alignment_2 ? 'heading-button-align-' + section.header_button_alignment_2 : '' },
                        section.heading_2 ? _react2.default.createElement(
                            'h4',
                            { className: 'column-heading' },
                            section.heading_2
                        ) : "",
                        section.content_2 ? _react2.default.createElement(
                            'div',
                            null,
                            (0, _reactHtmlParser2.default)(section.content_2)
                        ) : "",
                        section.button_2 ? _react2.default.createElement(
                            'div',
                            { className: 'button-wrapper' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button_2.url, this.props.title.toLowerCase()) },
                                section.button_2.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(section.button_2.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(section.button_2.url, this.props.title.toLowerCase())
                                )
                            )
                        ) : ""
                    )
                ) : "",
                section.display_options == "two-third-one-third" ? _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 8, className: section.header_button_alignment ? 'heading-button-align-' + section.header_button_alignment : '' },
                        section.heading ? _react2.default.createElement(
                            'h4',
                            { className: 'column-heading' },
                            section.heading
                        ) : "",
                        section.content ? _react2.default.createElement(
                            'div',
                            null,
                            (0, _reactHtmlParser2.default)(section.content)
                        ) : "",
                        section.button ? _react2.default.createElement(
                            'div',
                            { className: 'button-wrapper' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button.url, this.props.title.toLowerCase()) },
                                section.button.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(section.button.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(section.button.url, this.props.title.toLowerCase())
                                )
                            )
                        ) : ""
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 4, className: section.header_button_alignment_2 ? 'heading-button-align-' + section.header_button_alignment_2 : '' },
                        section.heading_2 ? _react2.default.createElement(
                            'h4',
                            { className: 'column-heading' },
                            section.heading_2
                        ) : "",
                        section.content_2 ? _react2.default.createElement(
                            'div',
                            null,
                            (0, _reactHtmlParser2.default)(section.content_2)
                        ) : "",
                        section.button_2 ? _react2.default.createElement(
                            'div',
                            { className: 'button-wrapper' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button_2.url, this.props.title.toLowerCase()) },
                                section.button_2.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(section.button_2.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(section.button_2.url, this.props.title.toLowerCase())
                                )
                            )
                        ) : ""
                    )
                ) : "",
                section.display_options == "one-third-two-third" ? _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 4, className: section.header_button_alignment ? 'heading-button-align-' + section.header_button_alignment : '' },
                        section.heading ? _react2.default.createElement(
                            'h4',
                            { className: 'column-heading' },
                            section.heading
                        ) : "",
                        section.content ? _react2.default.createElement(
                            'div',
                            null,
                            (0, _reactHtmlParser2.default)(section.content)
                        ) : "",
                        section.button ? _react2.default.createElement(
                            'div',
                            { className: 'button-wrapper' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button.url, this.props.title.toLowerCase()) },
                                section.button.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(section.button.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(section.button.url, this.props.title.toLowerCase())
                                )
                            )
                        ) : ""
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 8, className: section.header_button_alignment_2 ? 'heading-button-align-' + section.header_button_alignment_2 : '' },
                        section.heading_2 ? _react2.default.createElement(
                            'h4',
                            { className: 'column-heading' },
                            section.heading_2
                        ) : "",
                        section.content_2 ? _react2.default.createElement(
                            'div',
                            null,
                            (0, _reactHtmlParser2.default)(section.content_2)
                        ) : "",
                        section.button_2 ? _react2.default.createElement(
                            'div',
                            { className: 'button-wrapper' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button_2.url, this.props.title.toLowerCase()) },
                                section.button_2.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(section.button_2.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(section.button_2.url, this.props.title.toLowerCase())
                                )
                            )
                        ) : ""
                    )
                ) : "",
                section.display_options == "33-33-33" ? _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 4, className: section.header_button_alignment ? 'heading-button-align-' + section.header_button_alignment : '' },
                        section.heading ? _react2.default.createElement(
                            'h4',
                            { className: 'column-heading' },
                            section.heading
                        ) : "",
                        section.content ? _react2.default.createElement(
                            'div',
                            null,
                            (0, _reactHtmlParser2.default)(section.content)
                        ) : "",
                        section.button ? _react2.default.createElement(
                            'div',
                            { className: 'button-wrapper' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button.url, this.props.title.toLowerCase()) },
                                section.button.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(section.button.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(section.button.url, this.props.title.toLowerCase())
                                )
                            )
                        ) : ""
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 4, className: section.header_button_alignment_2 ? 'heading-button-align-' + section.header_button_alignment_2 : '' },
                        section.heading_2 ? _react2.default.createElement(
                            'h4',
                            { className: 'column-heading' },
                            section.heading_2
                        ) : "",
                        section.content_2 ? _react2.default.createElement(
                            'div',
                            null,
                            (0, _reactHtmlParser2.default)(section.content_2)
                        ) : "",
                        section.button_2 ? _react2.default.createElement(
                            'div',
                            { className: 'button-wrapper' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button_2.url, this.props.title.toLowerCase()) },
                                section.button_2.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(section.button_2.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(section.button_2.url, this.props.title.toLowerCase())
                                )
                            )
                        ) : ""
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 4, className: section.header_button_alignment_3 ? 'heading-button-align-' + section.header_button_alignment_3 : '' },
                        section.heading_3 ? _react2.default.createElement(
                            'h4',
                            { className: 'column-heading' },
                            section.heading_3
                        ) : "",
                        section.content_3 ? _react2.default.createElement(
                            'div',
                            null,
                            (0, _reactHtmlParser2.default)(section.content_3)
                        ) : "",
                        section.button_3 ? _react2.default.createElement(
                            'div',
                            { className: 'button-wrapper' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button_3.url, this.props.title.toLowerCase()) },
                                section.button_3.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(section.button_3.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(section.button_3.url, this.props.title.toLowerCase())
                                )
                            )
                        ) : ""
                    )
                ) : "",
                section.display_options == "25-25-25-25" ? _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 6, md: 3, className: section.header_button_alignment ? 'heading-button-align-' + section.header_button_alignment : '' },
                        section.heading ? _react2.default.createElement(
                            'h4',
                            { className: 'column-heading' },
                            section.heading
                        ) : "",
                        section.content ? _react2.default.createElement(
                            'div',
                            null,
                            (0, _reactHtmlParser2.default)(section.content)
                        ) : "",
                        section.button ? _react2.default.createElement(
                            'div',
                            { className: 'button-wrapper' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button.url, this.props.title.toLowerCase()) },
                                section.button.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(section.button.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(section.button.url, this.props.title.toLowerCase())
                                )
                            )
                        ) : ""
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 6, md: 3, className: section.header_button_alignment_2 ? 'heading-button-align-' + section.header_button_alignment_2 : '' },
                        section.heading_2 ? _react2.default.createElement(
                            'h4',
                            { className: 'column-heading' },
                            section.heading_2
                        ) : "",
                        section.content_2 ? _react2.default.createElement(
                            'div',
                            null,
                            (0, _reactHtmlParser2.default)(section.content_2)
                        ) : "",
                        section.button_2 ? _react2.default.createElement(
                            'div',
                            { className: 'button-wrapper' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button_2.url, this.props.title.toLowerCase()) },
                                section.button_2.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(section.button_2.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(section.button_2.url, this.props.title.toLowerCase())
                                )
                            )
                        ) : ""
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 6, md: 3, className: section.header_button_alignment_3 ? 'heading-button-align-' + section.header_button_alignment_3 : '' },
                        section.heading_3 ? _react2.default.createElement(
                            'h4',
                            { className: 'column-heading' },
                            section.heading_3
                        ) : "",
                        section.content_3 ? _react2.default.createElement(
                            'div',
                            null,
                            (0, _reactHtmlParser2.default)(section.content_3)
                        ) : "",
                        section.button_3 ? _react2.default.createElement(
                            'div',
                            { className: 'button-wrapper' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button_3.url, this.props.title.toLowerCase()) },
                                section.button_3.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(section.button_3.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(section.button_3.url, this.props.title.toLowerCase())
                                )
                            )
                        ) : ""
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 6, md: 3, className: section.header_button_alignment_4 ? 'heading-button-align-' + section.header_button_alignment_4 : '' },
                        section.heading_4 ? _react2.default.createElement(
                            'h4',
                            { className: 'column-heading' },
                            section.heading_4
                        ) : "",
                        section.content_4 ? _react2.default.createElement(
                            'div',
                            null,
                            (0, _reactHtmlParser2.default)(section.content_4)
                        ) : "",
                        section.button_4 ? _react2.default.createElement(
                            'div',
                            { className: 'button-wrapper' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(section.button_4.url, this.props.title.toLowerCase()) },
                                section.button_4.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(section.button_4.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(section.button_4.url, this.props.title.toLowerCase())
                                )
                            )
                        ) : ""
                    )
                ) : ""
            );
        }
    }]);

    return ContentArea;
}(_react2.default.Component));

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactSlick = __webpack_require__(8);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactstrap = __webpack_require__(2);

var _reactstrap2 = _interopRequireDefault(_reactstrap);

__webpack_require__(64);

var _leftArrow = __webpack_require__(65);

var _leftArrow2 = _interopRequireDefault(_leftArrow);

var _rightArrow = __webpack_require__(11);

var _rightArrow2 = _interopRequireDefault(_rightArrow);

var _jquery = __webpack_require__(19);

var _jquery2 = _interopRequireDefault(_jquery);

var _helpers = __webpack_require__(5);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var storeArray = [];
var prevTitle;
var nextTitle;
var titleArray = [];
var indexArray = [];

function SampleNextArrow(props) {
    var className = props.className,
        style = props.style,
        onClick = props.onClick;

    return _react2.default.createElement(
        "div",
        {
            className: className,
            onClick: onClick
        },
        _react2.default.createElement("img", { src: _rightArrow2.default }),
        getNextTitle()
    );
}

function SamplePrevArrow(props) {
    var className = props.className,
        style = props.style,
        onClick = props.onClick;

    return _react2.default.createElement(
        "div",
        {
            className: className,
            onClick: onClick
        },
        _react2.default.createElement("img", { src: _leftArrow2.default }),
        getPrevTitle()
    );
}

function getNextTitle() {
    return _react2.default.createElement(
        "p",
        { id: "nextTitleText" },
        titleArray[2]
    );
}

function getPrevTitle() {
    return _react2.default.createElement(
        "p",
        { id: "prevTitleText" },
        titleArray[0]
    );
}

function getTitleArray() {
    titleArray = (0, _jquery2.default)('#tenantSlider .slick-track > div h4').map(function () {
        return (0, _jquery2.default)(this).text();
    });
    updateArrows();
}

function setClickEvent() {
    (0, _jquery2.default)('#tenantSlider .slick-arrow').click(function () {
        console.log('arrow clicked');
        setTimeout(getTitleArray, 200);
    });
    (0, _jquery2.default)('#tenantSlider .slick-dots > li').click(function () {
        console.log('dot clicked');
        setTimeout(getTitleArray, 200);
    });
}

function updateArrows() {
    var target = (0, _jquery2.default)('#tenantSlider .slick-current').attr('data-index');
    var next = target;
    next++;
    next++;
    (0, _jquery2.default)('#nextTitleText').text(titleArray[next]);
    (0, _jquery2.default)('#prevTitleText').text(titleArray[target]);
}

var selectedStores = [];

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(FeaturesStores, _React$Component);

    function FeaturesStores(props) {
        _classCallCheck(this, FeaturesStores);

        return _possibleConstructorReturn(this, (FeaturesStores.__proto__ || Object.getPrototypeOf(FeaturesStores)).call(this, props));
    }

    _createClass(FeaturesStores, [{
        key: "compressText",
        value: function compressText(store) {
            excerpt = store.replace(regex, "").substr(0, 200);
            excerpt = excerpt.substr(0, excerpt.lastIndexOf(" "));
            return excerpt + "...";
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {

            var stores = this.props.stores;
            // const selectedStores = this.props.selectedStores;
            if (this.props.pageData[0]) {
                this.props.pageData[0].acf.layout.map(function (test) {
                    if (test.acf_fc_layout == 'featured_stores') {
                        test.stores.map(function (store) {
                            selectedStores.push(store.post_name);
                        });
                    }
                });
            } else {
                this.props.pageData.acf.layout.map(function (test) {
                    if (test.acf_fc_layout == 'featured_stores') {
                        test.stores.map(function (store) {
                            selectedStores.push(store.post_name);
                        });
                    }
                });
            }

            storeArray = stores.map(function (store) {
                for (var i = 0; i < selectedStores.length; i++) {
                    if (store.slug == selectedStores[i]) {
                        if (store.acf.featured_image != null && store.acf.featured_image.length > 0) {
                            return _react2.default.createElement(
                                "div",
                                { className: "store" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "image-wrapper" },
                                    _react2.default.createElement("img", { key: store.acf.featured_image, src: store.acf.featured_image })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "content-wrapper" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "inner-wrapper" },
                                        _react2.default.createElement(
                                            "h4",
                                            { key: store.slug },
                                            (0, _reactHtmlParser2.default)(store.title.rendered)
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "tenantText" },
                                            (0, _reactHtmlParser2.default)(_helpers2.default.compressText(store.acf.store_copy, 200))
                                        ),
                                        _react2.default.createElement(
                                            "a",
                                            { className: "halcyon-button", href: "/shopping/" + store.slug + "/" },
                                            "Learn More"
                                        )
                                    )
                                )
                            );
                        } else {
                            return null;
                        }
                    }
                }
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            getTitleArray();
            setClickEvent();
        }
    }, {
        key: "render",
        value: function render() {
            var settings = {
                dots: false,
                infinite: true,
                speed: 500,
                draggable: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: _react2.default.createElement(SampleNextArrow, { onClick: this.onClick }),
                prevArrow: _react2.default.createElement(SamplePrevArrow, { onClick: this.onClick }),
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        // dots: true,
                        nextArrow: "",
                        prevArrow: ""
                    }
                }]
            };

            return _react2.default.createElement(
                "div",
                { className: "tenant-spotlight" },
                _react2.default.createElement(
                    "div",
                    { className: "heading-container" },
                    _react2.default.createElement(
                        _reactstrap.Container,
                        null,
                        _react2.default.createElement(
                            "h2",
                            null,
                            this.props.section.heading
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Container,
                    null,
                    _react2.default.createElement(
                        "div",
                        { id: "tenantSlider" },
                        _react2.default.createElement(
                            _reactSlick2.default,
                            settings,
                            storeArray
                        )
                    )
                )
            );
        }
    }]);

    return FeaturesStores;
}(_react2.default.Component));

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

__webpack_require__(70);

__webpack_require__(24);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _ModuleController = __webpack_require__(71);

var _ModuleController2 = _interopRequireDefault(_ModuleController);

var _MobileFloatingNav = __webpack_require__(88);

var _MobileFloatingNav2 = _interopRequireDefault(_MobileFloatingNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactStatic.withRouteData)(function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));
  }

  _createClass(Page, [{
    key: 'convertLink',
    value: function convertLink(url) {
      var words = url.split('/');
      if (words[4] == "") {
        return words[3];
      } else {
        if (words[3] == "events") {
          return "/events/" + words[4];
        } else if (words[3] == "sales") {
          return "/sales/" + words[4];
        } else if (words[3] == "stores") {
          return "/shopping/" + words[4];
        } else if (words[3] == "blog") {
          return "/blogs/" + words[4];
        }
      }
    }
  }, {
    key: 'getTitleFromUrl',
    value: function getTitleFromUrl(url) {
      var words = url.split('/');
      if (words[4] == "") {
        return words[3].replace(/-/g, ' ');
      } else {
        return words[4].replace(/-/g, ' ');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var page = this.props.page;
      var siteRoot = this.props.siteRoot;
      var title = this.props.title;
      var metaDescription = this.props.metaDescription;

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          _reactStatic.Head,
          null,
          _react2.default.createElement('body', { className: 'single-page page-id-' + page.id + ' ' + page.slug + ' ' + page.acf.global_page_color }),
          page.yoast_meta.yoast_wpseo_title ? _react2.default.createElement(
            'title',
            null,
            page.yoast_meta.yoast_wpseo_title
          ) : _react2.default.createElement(
            'title',
            null,
            title
          ),
          page.yoast_meta.yoast_wpseo_metadesc ? _react2.default.createElement('meta', { name: 'description', content: page.yoast_meta.yoast_wpseo_metadesc }) : _react2.default.createElement('meta', { name: 'description', content: metaDescription }),
          page.yoast_meta.yoast_wpseo_canonical ? _react2.default.createElement('link', { rel: 'canonical', href: page.yoast_meta.yoast_wpseo_canonical }) : _react2.default.createElement('link', { rel: 'canonical', href: siteRoot })
        ),
        page.acf.desktop_image ? _react2.default.createElement(
          'div',
          { id: 'heroSection' },
          _react2.default.createElement('img', { className: 'hidden-xs', src: page.acf.desktop_image.url, alt: page.acf.desktop_image.alt }),
          _react2.default.createElement('img', { className: 'visible-xs', src: page.acf.mobile_image.url, alt: page.acf.mobile_image.alt }),
          page.acf.additional_content && _react2.default.createElement(
            'div',
            { className: 'button-container hidden-xs' },
            page.acf.button_1 && _react2.default.createElement(
              'div',
              { 'class': 'button-wrap' },
              _react2.default.createElement(
                _reactStatic.Link,
                { className: 'halcyon-button', to: this.convertLink(page.acf.button_1.url) },
                page.acf.button_1.title ? _react2.default.createElement(
                  'div',
                  null,
                  (0, _reactHtmlParser2.default)(page.acf.button_1.title)
                ) : _react2.default.createElement(
                  'div',
                  null,
                  this.getTitleFromUrl(page.acf.button_1.url)
                )
              )
            ),
            page.acf.button_2 && _react2.default.createElement(
              'div',
              { 'class': 'button-wrap' },
              _react2.default.createElement(
                _reactStatic.Link,
                { className: 'halcyon-button', to: this.convertLink(page.acf.button_2.url) },
                page.acf.button_2.title ? _react2.default.createElement(
                  'div',
                  null,
                  (0, _reactHtmlParser2.default)(page.acf.button_2.title)
                ) : _react2.default.createElement(
                  'div',
                  null,
                  this.getTitleFromUrl(page.acf.button_2.url)
                )
              )
            ),
            page.acf.button_3 && _react2.default.createElement(
              'div',
              { 'class': 'button-wrap' },
              _react2.default.createElement(
                _reactStatic.Link,
                { className: 'halcyon-button', to: this.convertLink(page.acf.button_3.url) },
                page.acf.button_3.title ? _react2.default.createElement(
                  'div',
                  null,
                  (0, _reactHtmlParser2.default)(page.acf.button_3.title)
                ) : _react2.default.createElement(
                  'div',
                  null,
                  this.getTitleFromUrl(page.acf.button_3.url)
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'hero-container' },
            page.acf.additional_content && _react2.default.createElement(
              'div',
              { className: 'hero-content hidden-xs' },
              page.acf.subheading ? _react2.default.createElement(
                'h2',
                null,
                (0, _reactHtmlParser2.default)(page.acf.subheading)
              ) : "",
              page.acf.content ? _react2.default.createElement(
                'div',
                null,
                (0, _reactHtmlParser2.default)(page.acf.content)
              ) : ""
            ),
            _react2.default.createElement(
              'div',
              { className: 'hero-heading' },
              page.acf.title_h1 ? _react2.default.createElement(
                'h1',
                null,
                page.acf.title_h1
              ) : _react2.default.createElement(
                'h1',
                null,
                page.title.rendered
              )
            )
          )
        ) : "",
        page.acf.additional_content ? _react2.default.createElement(
          _reactstrap.Container,
          { className: 'additional-content text-center' },
          page.acf.subheading ? _react2.default.createElement(
            'h2',
            { className: 'visible-xs hero-subhead' },
            (0, _reactHtmlParser2.default)(page.acf.subheading)
          ) : "",
          page.acf.content ? _react2.default.createElement(
            'div',
            { className: 'visible-xs' },
            (0, _reactHtmlParser2.default)(page.acf.content)
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'button-container visible-xs' },
            page.acf.button_1 && _react2.default.createElement(
              'div',
              { 'class': 'button-wrap' },
              _react2.default.createElement(
                _reactStatic.Link,
                { className: 'halcyon-button', to: this.convertLink(page.acf.button_1.url) },
                page.acf.button_1.title ? _react2.default.createElement(
                  'div',
                  null,
                  (0, _reactHtmlParser2.default)(page.acf.button_1.title)
                ) : _react2.default.createElement(
                  'div',
                  null,
                  this.getTitleFromUrl(page.acf.button_1.url)
                )
              )
            ),
            page.acf.button_2 && _react2.default.createElement(
              'div',
              { 'class': 'button-wrap' },
              _react2.default.createElement(
                _reactStatic.Link,
                { className: 'halcyon-button', to: this.convertLink(page.acf.button_2.url) },
                page.acf.button_2.title ? _react2.default.createElement(
                  'div',
                  null,
                  (0, _reactHtmlParser2.default)(page.acf.button_2.title)
                ) : _react2.default.createElement(
                  'div',
                  null,
                  this.getTitleFromUrl(page.acf.button_2.url)
                )
              )
            ),
            page.acf.button_3 && _react2.default.createElement(
              'div',
              { 'class': 'button-wrap' },
              _react2.default.createElement(
                _reactStatic.Link,
                { className: 'halcyon-button', to: this.convertLink(page.acf.button_3.url) },
                page.acf.button_3.title ? _react2.default.createElement(
                  'div',
                  null,
                  (0, _reactHtmlParser2.default)(page.acf.button_3.title)
                ) : _react2.default.createElement(
                  'div',
                  null,
                  this.getTitleFromUrl(page.acf.button_3.url)
                )
              )
            )
          )
        ) : "",
        _react2.default.createElement(_ModuleController2.default, { page: page }),
        page.acf.mobile_floating_nav ? _react2.default.createElement(_MobileFloatingNav2.default, null) : ""
      );
    }
  }]);

  return Page;
}(_react2.default.Component));

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#mobileFloatingNav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:55px;position:fixed;bottom:0;width:100%;z-index:10}@media screen and (min-width:768px){#mobileFloatingNav{display:none}}", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".contentWithFeaturedImage{margin:1rem auto}.contentWithFeaturedImage .image-column img{border-radius:5px;-webkit-box-shadow:3px 2px 15px #666;box-shadow:3px 2px 15px #666;margin-bottom:2rem;width:100%}.contentWithFeaturedImage .content-column .heading h2{margin-top:0;font-family:Flama,sans-serif}@media screen and (min-width:768px){.contentWithFeaturedImage{margin:3rem auto}.contentWithFeaturedImage .content-left{display:-ms-flexbox;display:flex}.contentWithFeaturedImage .content-left .image-column{-ms-flex-order:2;order:2}.contentWithFeaturedImage .content-column .halcyon-button{margin:auto auto auto 0}.contentWithFeaturedImage .content-column .heading h2{margin:0 0 2rem}.contentWithFeaturedImage .content-column .heading .feather{position:absolute;top:-30px}}@media screen and (min-width:1200px){.contentWithFeaturedImage{margin:4rem auto}}", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

var newTitle;
var newMeta;
var newCanonical;
function setMetaData(pages) {
  pages.map(function (page) {
    if (page.slug == 'blog') {
      newTitle = page.yoast_meta.yoast_wpseo_title;
      newMeta = page.yoast_meta.yoast_wpseo_metadesc;
      newCanonical = page.yoast_meta.yoast_wpseo_canonical;
    }
  });
}

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts,
      siteRoot = _ref.siteRoot,
      title = _ref.title,
      metaDescription = _ref.metaDescription,
      pages = _ref.pages;
  return _react2.default.createElement(
    'section',
    null,
    setMetaData(pages),
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement('body', { className: 'blog' }),
      newTitle ? _react2.default.createElement(
        'title',
        null,
        newTitle
      ) : _react2.default.createElement(
        'title',
        null,
        title
      ),
      newMeta ? _react2.default.createElement('meta', { name: 'description', content: newMeta }) : _react2.default.createElement('meta', { name: 'description', content: metaDescription }),
      newCanonical ? _react2.default.createElement('link', { rel: 'canonical', href: newCanonical }) : _react2.default.createElement('link', { rel: 'canonical', href: siteRoot })
    ),
    _react2.default.createElement(
      _reactstrap.Container,
      null,
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          { xs: '12' },
          _react2.default.createElement(
            'h1',
            null,
            'News & Updates'
          )
        )
      ),
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          'div',
          { className: 'card-columns' },
          posts.map(function (post) {
            return _react2.default.createElement(
              _reactstrap.Card,
              { key: post.id, className: "card-" + post.id },
              _react2.default.createElement(_reactStatic.Link, { to: '/blogs/' + post.slug + '/' }),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/blogs/' + post.slug + '/' },
                  _react2.default.createElement(
                    _reactstrap.CardTitle,
                    null,
                    post.title.rendered
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.CardText,
                  null,
                  (0, _reactHtmlParser2.default)(post.excerpt.rendered)
                ),
                _react2.default.createElement(
                  _reactstrap.CardText,
                  null,
                  _react2.default.createElement(
                    'small',
                    null,
                    post.date
                  )
                )
              )
            );
          })
        )
      )
    )
  );
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post(props) {
    _classCallCheck(this, Post);

    return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));
  }

  _createClass(Post, [{
    key: 'render',
    value: function render() {
      var post = this.props.post;
      var siteRoot = this.props.siteRoot;
      var title = this.props.title;
      var metaDescription = this.props.metaDescription;

      if (typeof document !== 'undefined') {
        return _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            _reactStatic.Head,
            null,
            _react2.default.createElement('body', { className: 'single-blog blog-id-' + post.id + ' ' + post.slug }),
            post.yoast_meta.yoast_wpseo_title ? _react2.default.createElement(
              'title',
              null,
              post.yoast_meta.yoast_wpseo_title
            ) : _react2.default.createElement(
              'title',
              null,
              title
            ),
            post.yoast_meta.yoast_wpseo_metadesc ? _react2.default.createElement('meta', { name: 'description', content: post.yoast_meta.yoast_wpseo_metadesc }) : _react2.default.createElement('meta', { name: 'description', content: metaDescription }),
            post.yoast_meta.yoast_wpseo_canonical ? _react2.default.createElement('link', { rel: 'canonical', href: post.yoast_meta.yoast_wpseo_canonical }) : _react2.default.createElement('link', { rel: 'canonical', href: siteRoot })
          ),
          _react2.default.createElement(
            _reactstrap.Container,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              null,
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '12' },
                _react2.default.createElement(
                  'h1',
                  null,
                  post.title.rendered ? _react2.default.createElement(
                    'div',
                    null,
                    (0, _reactHtmlParser2.default)(post.title.rendered)
                  ) : ""
                ),
                post.content.rendered ? _react2.default.createElement(
                  'div',
                  null,
                  (0, _reactHtmlParser2.default)(post.content.rendered)
                ) : ""
              )
            )
          )
        );
      } else {
        return null;
      }
    }
  }]);

  return Post;
}(_react2.default.Component));

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var event = this.props.event;
      var siteRoot = this.props.siteRoot;
      var title = this.props.title;
      var metaDescription = this.props.metaDescription;

      if (typeof document !== 'undefined') {
        return _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            _reactStatic.Head,
            null,
            _react2.default.createElement('body', { className: 'single-blog blog-id-' + event.id + ' ' + event.slug }),
            event.yoast_meta.yoast_wpseo_title ? _react2.default.createElement(
              'title',
              null,
              event.yoast_meta.yoast_wpseo_title
            ) : _react2.default.createElement(
              'title',
              null,
              title
            ),
            event.yoast_meta.yoast_wpseo_metadesc ? _react2.default.createElement('meta', { name: 'description', content: event.yoast_meta.yoast_wpseo_metadesc }) : _react2.default.createElement('meta', { name: 'description', content: metaDescription }),
            event.yoast_meta.yoast_wpseo_canonical ? _react2.default.createElement('link', { rel: 'canonical', href: event.yoast_meta.yoast_wpseo_canonical }) : _react2.default.createElement('link', { rel: 'canonical', href: siteRoot })
          ),
          _react2.default.createElement(
            _reactstrap.Container,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              null,
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '12' },
                _react2.default.createElement(
                  'h1',
                  null,
                  event.title.rendered
                ),
                (0, _reactHtmlParser2.default)(event.acf.post_copy)
              )
            )
          )
        );
      } else {
        return null;
      }
    }
  }]);

  return Page;
}(_react2.default.Component));

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

var newTitle;
var newMeta;
var newCanonical;
function setMetaData(pages) {
  pages.map(function (page) {
    if (page.slug == 'sales-offers') {
      newTitle = page.yoast_meta.yoast_wpseo_title;
      newMeta = page.yoast_meta.yoast_wpseo_metadesc;
      newCanonical = page.yoast_meta.yoast_wpseo_canonical;
    }
  });
}

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var sales = _ref.sales,
      siteRoot = _ref.siteRoot,
      title = _ref.title,
      metaDescription = _ref.metaDescription,
      pages = _ref.pages;
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement('body', { className: 'Sales' }),
      newTitle ? _react2.default.createElement(
        'title',
        null,
        newTitle
      ) : _react2.default.createElement(
        'title',
        null,
        title
      ),
      newMeta ? _react2.default.createElement('meta', { name: 'description', content: newMeta }) : _react2.default.createElement('meta', { name: 'description', content: metaDescription }),
      newCanonical ? _react2.default.createElement('link', { rel: 'canonical', href: newCanonical }) : _react2.default.createElement('link', { rel: 'canonical', href: siteRoot })
    ),
    _react2.default.createElement(
      _reactstrap.Container,
      null,
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          { xs: '12' },
          _react2.default.createElement(
            'h1',
            null,
            'Sales'
          )
        )
      ),
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          'div',
          { className: 'card-columns' },
          sales.map(function (sale) {
            return _react2.default.createElement(
              _reactstrap.Card,
              { key: sale.id, className: "card-" + sale.id },
              _react2.default.createElement(_reactStatic.Link, { to: '/sales/' + sale.slug + '/' }),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/sales/' + sale.slug + '/' },
                  _react2.default.createElement(
                    _reactstrap.CardTitle,
                    null,
                    sale.title.rendered ? _react2.default.createElement(
                      'div',
                      null,
                      sale.title.rendered
                    ) : ""
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.CardText,
                  null,
                  _react2.default.createElement(
                    'small',
                    null,
                    sale.date
                  )
                )
              )
            );
          })
        )
      )
    )
  );
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_React$Component) {
  _inherits(Sale, _React$Component);

  function Sale(props) {
    _classCallCheck(this, Sale);

    return _possibleConstructorReturn(this, (Sale.__proto__ || Object.getPrototypeOf(Sale)).call(this, props));
  }

  _createClass(Sale, [{
    key: 'render',
    value: function render() {
      var sale = this.props.sale;
      var siteRoot = this.props.siteRoot;
      var title = this.props.title;
      var metaDescription = this.props.metaDescription;

      if (typeof document !== 'undefined') {
        return _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            _reactStatic.Head,
            null,
            _react2.default.createElement('body', { className: 'single-blog blog-id-' + sale.id + ' ' + sale.slug }),
            sale.yoast_meta.yoast_wpseo_title ? _react2.default.createElement(
              'title',
              null,
              sale.yoast_meta.yoast_wpseo_title
            ) : _react2.default.createElement(
              'title',
              null,
              title
            ),
            sale.yoast_meta.yoast_wpseo_metadesc ? _react2.default.createElement('meta', { name: 'description', content: sale.yoast_meta.yoast_wpseo_metadesc }) : _react2.default.createElement('meta', { name: 'description', content: metaDescription }),
            sale.yoast_meta.yoast_wpseo_canonical ? _react2.default.createElement('link', { rel: 'canonical', href: sale.yoast_meta.yoast_wpseo_canonical }) : _react2.default.createElement('link', { rel: 'canonical', href: siteRoot })
          ),
          _react2.default.createElement(
            _reactstrap.Container,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              null,
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '12' },
                _react2.default.createElement(
                  'h1',
                  null,
                  sale.title.rendered
                )
              )
            )
          )
        );
      } else {
        return null;
      }
    }
  }]);

  return Sale;
}(_react2.default.Component));

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(92);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Entities = __webpack_require__(93).AllHtmlEntities;
var entities = new Entities();


// Components


// Endpoints
var SiteURL = 'https://halcyon.dev.v3.imaginuitycenters.com';
var PropertyOptions = SiteURL + '/wp-json/acf/v3/options/property_options';
// let Pages = SiteURL + '/wp-json/wp/v2/pages';
// const BlogData = SiteURL + '/wp-json/wp/v2/posts?order=desc';

var Search = function (_Component) {
    _inherits(Search, _Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = {
            data: false,
            numResults: 0,
            pageCount: 0,
            storeCount: 0,
            eventCount: 0,
            pageData: '',
            searchString: 'test'
        };
        return _this;
    }

    _createClass(Search, [{
        key: 'sanitize',
        value: function sanitize(input) {
            var regex = /(<([^>]+)>)/ig;
            return input ? entities.decode(input.replace(regex, '')).substr(0, 250) + ' [. . .]' : '';
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.search();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log(nextProps);
            // Handles navigation between interior pages (pages of the same template)
            if (nextProps.location.query.s !== this.state.searchString) {
                this.setState({
                    data: false,
                    searchString: nextProps.location.query.s
                }, function () {
                    this.search();
                });
            }
        }
    }, {
        key: 'search',
        value: function search() {
            var _this2 = this;

            var component = this;

            _axios2.default.all([_axios2.default.get(PropertyOptions), _axios2.default.get(SiteURL + '/wp-json/wp/v2/pages?search=' + this.state.searchString), _axios2.default.get(SiteURL + '/wp-json/wp/v2/stores?search=' + this.state.searchString), _axios2.default.get(SiteURL + '/wp-json/wp/v2/events?search=' + this.state.searchString), _axios2.default.get(SiteURL + '/wp-json/wp/v2/posts?search=' + this.state.searchString), _axios2.default.get(SiteURL + '/wp-json/wp/v2/posts?order=desc&search=' + this.state.searchString)]).then(_axios2.default.spread(function (options, pages, stores, events, blogs) {
                var numResults = pages.data.length + stores.data.length + events.data.length + blogs.data.length;

                var pageResults = void 0;
                var storeResults = void 0;
                var eventResults = void 0;
                var blogResults = void 0;

                if (pages.data) {
                    pageResults = pages.data.map(function (data) {
                        var excerpt = component.sanitize(data.excerpt.rendered);
                        return _react2.default.createElement(
                            'div',
                            { className: 'search-entry page-result' },
                            _react2.default.createElement(
                                'h3',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: data.link },
                                    entities.decode(data.title.rendered)
                                )
                            ),
                            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: excerpt } })
                        );
                    });
                }

                if (stores.data) {
                    storeResults = stores.data.map(function (data) {
                        var excerpt = component.sanitize(data.acf.store_copy);
                        return _react2.default.createElement(
                            'div',
                            { className: 'search-entry store-result' },
                            _react2.default.createElement(
                                'h3',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: data.link },
                                    entities.decode(data.title.rendered)
                                )
                            ),
                            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: excerpt } })
                        );
                    });
                }

                if (events.data) {
                    eventResults = events.data.map(function (data) {
                        var excerpt = component.sanitize(data.acf.post_copy);
                        return _react2.default.createElement(
                            'div',
                            { className: 'search-entry event-result' },
                            _react2.default.createElement(
                                'h3',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: data.link },
                                    entities.decode(data.title.rendered)
                                )
                            ),
                            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: excerpt } })
                        );
                    });
                }

                if (blogs.data) {
                    blogResults = blogs.data.map(function (data) {
                        var excerpt = component.sanitize(data.excerpt.rendered);
                        return _react2.default.createElement(
                            'div',
                            { className: 'search-entry blog-result' },
                            _react2.default.createElement(
                                'h3',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: data.link },
                                    entities.decode(data.title.rendered)
                                )
                            ),
                            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: excerpt } })
                        );
                    });
                }

                var page = {
                    "title": {
                        "rendered": "Search"
                    },
                    "acf": {
                        // "hero_image": pageData.data.acf.hero_image.url,
                        "enable_header_copy": false
                    }
                };

                _this2.setState({
                    siteAddress: options.data.acf.city + ', ' + options.data.acf.state,
                    metaDescription: options.data.acf.meta_description ? options.data.acf.meta_description : '',
                    numResults: numResults,
                    pageResults: pageResults ? pageResults : '',
                    storeResults: storeResults ? storeResults : '',
                    eventResults: eventResults ? eventResults : '',
                    blogResults: blogResults ? blogResults : '',
                    pageCount: pages.data.length,
                    storeCount: stores.data.length,
                    eventCount: events.data.length,
                    blogCount: blogs.data.length,
                    pageData: page,
                    data: true
                });
            })).catch(function (err) {
                console.log("Error in search query");
                console.log(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.data) {

                return _react2.default.createElement(
                    'div',
                    { className: 'search' },
                    _react2.default.createElement(Helmet, {
                        title: "Search - " + this.state.searchString + ' | ' + this.state.siteAddress,
                        meta: [{ 'name': 'description', 'content': this.state.metaDescription }]
                    }),
                    _react2.default.createElement(InteriorHeader, {
                        title: this.state.pageData.acf.title ? this.state.pageData.acf.title : this.state.pageData.title.rendered,
                        imageMobile: this.state.pageData.acf.use_featured_image ? this.state.pageData.acf.header_featured_image_mobile : false,
                        imageDesktop: this.state.pageData.acf.use_featured_image ? this.state.pageData.acf.header_featured_image_desktop : false
                    }),
                    _react2.default.createElement(
                        Grid,
                        null,
                        _react2.default.createElement(
                            Row,
                            null,
                            _react2.default.createElement(
                                Col,
                                { xs: 12, className: 'col' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'search-results' },
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        this.state.numResults
                                    ),
                                    ' match(es) for "',
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        this.state.searchString
                                    ),
                                    '"'
                                )
                            ),
                            _react2.default.createElement(
                                Col,
                                { xs: 12, className: 'col' },
                                _react2.default.createElement(
                                    'h2',
                                    null,
                                    'Pages ',
                                    _react2.default.createElement(
                                        'small',
                                        null,
                                        '(',
                                        this.state.pageCount,
                                        ')'
                                    )
                                ),
                                this.state.pageResults,
                                _react2.default.createElement(
                                    'h2',
                                    null,
                                    'Stores ',
                                    _react2.default.createElement(
                                        'small',
                                        null,
                                        '(',
                                        this.state.storeCount,
                                        ')'
                                    )
                                ),
                                this.state.storeResults,
                                _react2.default.createElement(
                                    'h2',
                                    null,
                                    'Events ',
                                    _react2.default.createElement(
                                        'small',
                                        null,
                                        '(',
                                        this.state.eventCount,
                                        ')'
                                    )
                                ),
                                this.state.eventResults,
                                this.state.blogCount > 0 && _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Blogs ',
                                        _react2.default.createElement(
                                            'small',
                                            null,
                                            '(',
                                            this.state.blogCount,
                                            ')'
                                        )
                                    ),
                                    this.state.blogResults
                                )
                            )
                        )
                    )
                );
            }
            return null;
        }
    }]);

    return Search;
}(_react.Component);

exports.default = Search;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var store = _ref.store,
      siteRoot = _ref.siteRoot,
      title = _ref.title,
      metaDescription = _ref.metaDescription;
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement('body', { className: 'single-blog blog-id-' + store.id + ' ' + store.slug }),
      store.yoast_meta.yoast_wpseo_title ? _react2.default.createElement(
        'title',
        null,
        store.yoast_meta.yoast_wpseo_title
      ) : _react2.default.createElement(
        'title',
        null,
        title
      ),
      store.yoast_meta.yoast_wpseo_metadesc ? _react2.default.createElement('meta', { name: 'description', content: store.yoast_meta.yoast_wpseo_metadesc }) : _react2.default.createElement('meta', { name: 'description', content: metaDescription }),
      store.yoast_meta.yoast_wpseo_canonical ? _react2.default.createElement('link', { rel: 'canonical', href: store.yoast_meta.yoast_wpseo_canonical }) : _react2.default.createElement('link', { rel: 'canonical', href: siteRoot })
    ),
    _react2.default.createElement(
      _reactstrap.Container,
      null,
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          { xs: '12' },
          _react2.default.createElement(
            'h1',
            null,
            store.title.rendered
          ),
          (0, _reactHtmlParser2.default)(store.acf.post_copy)
        )
      )
    )
  );
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactLazyHero = __webpack_require__(12);

var _reactLazyHero2 = _interopRequireDefault(_reactLazyHero);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _EventSearch = __webpack_require__(34);

var _EventSearch2 = _interopRequireDefault(_EventSearch);

var _PageSearch = __webpack_require__(35);

var _PageSearch2 = _interopRequireDefault(_PageSearch);

var _StoreSearch = __webpack_require__(36);

var _StoreSearch2 = _interopRequireDefault(_StoreSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//


var eventCounter = 0;
var storeCounter = 0;

exports.default = (0, _reactStatic.withRouteData)(function (_React$Component) {
  _inherits(SearchResults, _React$Component);

  function SearchResults(props) {
    _classCallCheck(this, SearchResults);

    var _this = _possibleConstructorReturn(this, (SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).call(this, props));

    _this.state = {
      term: ''
    };
    return _this;
  }

  _createClass(SearchResults, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var urlResult = window.location.search.substring(2);

      this.setState({
        term: urlResult
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'article',
        { id: 'searchPage' },
        _react2.default.createElement(
          _reactstrap.Container,
          null,
          _react2.default.createElement('input', { className: 'search-page-bar hidden-xs mt-3', value: this.state.term, onChange: function onChange(event) {
              return _this2.setState({ term: event.target.value });
            }, onKeyDown: this.keyPress }),
          this.state.term != '' ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PageSearch2.default, { searchResult: this.state.term }),
            _react2.default.createElement(_EventSearch2.default, { searchResult: this.state.term }),
            _react2.default.createElement(_StoreSearch2.default, { searchResult: this.state.term })
          ) : _react2.default.createElement(
            'h1',
            null,
            'No results'
          )
        )
      );
    }
  }]);

  return SearchResults;
}(_react2.default.Component));

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//


var eventResults = [];

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
  _inherits(EventSearch, _React$Component);

  function EventSearch(props) {
    _classCallCheck(this, EventSearch);

    var _this = _possibleConstructorReturn(this, (EventSearch.__proto__ || Object.getPrototypeOf(EventSearch)).call(this, props));

    _this.state = {
      term: '',
      pageExist: false,
      eventExist: false,
      storeExist: false
    };
    return _this;
  }

  _createClass(EventSearch, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'article',
        { id: 'searchPage' },
        _react2.default.createElement(
          'h4',
          null,
          'Events:'
        ),
        this.props.searchResult != '' ? _react2.default.createElement(
          'div',
          { className: 'eventCount' },
          this.props.events.map(function (event) {
            return event.slug.includes(_this2.props.searchResult.toLowerCase()) ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _reactstrap.Card,
                { key: event.id, className: "card-" + event.id },
                _react2.default.createElement(_reactStatic.Link, { to: '/events/' + event.slug + '/' }),
                _react2.default.createElement(
                  _reactstrap.CardBody,
                  null,
                  _react2.default.createElement(
                    _reactStatic.Link,
                    { to: '/events/' + event.slug + '/' },
                    _react2.default.createElement(
                      _reactstrap.CardTitle,
                      null,
                      event.title.rendered ? _react2.default.createElement(
                        'div',
                        null,
                        event.title.rendered
                      ) : ""
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.CardText,
                    null,
                    (0, _reactHtmlParser2.default)(event.acf.post_copy)
                  ),
                  _react2.default.createElement(
                    _reactstrap.CardText,
                    null,
                    _react2.default.createElement(
                      'small',
                      null,
                      event.date
                    )
                  )
                )
              )
            ) : "";
          })
        ) : _react2.default.createElement(
          'p',
          null,
          'Content'
        )
      );
    }
  }]);

  return EventSearch;
}(_react2.default.Component));

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(10);

var _reactstrap = __webpack_require__(2);

var _reactLazyHero = __webpack_require__(12);

var _reactLazyHero2 = _interopRequireDefault(_reactLazyHero);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//


var counter = 0;
var cards;

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
  _inherits(pageSearch, _React$Component);

  function pageSearch(props) {
    var _this$state;

    _classCallCheck(this, pageSearch);

    var _this = _possibleConstructorReturn(this, (pageSearch.__proto__ || Object.getPrototypeOf(pageSearch)).call(this, props));

    _this.state = (_this$state = {
      term: '',
      pageExist: false
    }, _defineProperty(_this$state, 'pageExist', false), _defineProperty(_this$state, 'storeExist', false), _defineProperty(_this$state, 'pageCounter', 0), _this$state);
    return _this;
  }

  _createClass(pageSearch, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'article',
        { id: 'searchPage' },
        _react2.default.createElement(
          'h4',
          null,
          'Pages: '
        ),
        this.props.searchResult != '' ? _react2.default.createElement(
          'div',
          null,
          this.props.pages.map(function (page) {
            return page.slug.includes(_this2.props.searchResult.toLowerCase()) ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _reactstrap.Card,
                { key: page.id, className: "card-" + page.id },
                _react2.default.createElement(_reactStatic.Link, { to: '/pages/' + page.slug + '/' }),
                _react2.default.createElement(
                  _reactstrap.CardBody,
                  { className: 'counter' },
                  _react2.default.createElement(
                    _reactStatic.Link,
                    { to: '/pages/' + page.slug + '/' },
                    _react2.default.createElement(
                      _reactstrap.CardTitle,
                      null,
                      page.title.rendered ? _react2.default.createElement(
                        'div',
                        null,
                        page.title.rendered
                      ) : ""
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.CardText,
                    null,
                    (0, _reactHtmlParser2.default)(page.acf.post_copy)
                  ),
                  _react2.default.createElement(
                    _reactstrap.CardText,
                    null,
                    _react2.default.createElement(
                      'small',
                      null,
                      page.date
                    )
                  )
                )
              )
            ) : "";
          })
        ) : _react2.default.createElement('div', null)
      );
    }
  }]);

  return pageSearch;
}(_react2.default.Component));

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(10);

var _reactstrap = __webpack_require__(2);

var _reactLazyHero = __webpack_require__(12);

var _reactLazyHero2 = _interopRequireDefault(_reactLazyHero);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//


exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
  _inherits(storeSearch, _React$Component);

  function storeSearch(props) {
    _classCallCheck(this, storeSearch);

    var _this = _possibleConstructorReturn(this, (storeSearch.__proto__ || Object.getPrototypeOf(storeSearch)).call(this, props));

    _this.state = _defineProperty({
      term: '',
      pageExist: false,
      storeExist: false
    }, 'storeExist', false);
    return _this;
  }

  _createClass(storeSearch, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'article',
        { id: 'searchPage' },
        _react2.default.createElement(
          'h4',
          null,
          'Stores:'
        ),
        this.props.searchResult != '' ? _react2.default.createElement(
          'div',
          null,
          this.props.stores.map(function (store) {
            return store.slug.includes(_this2.props.searchResult.toLowerCase()) ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _reactstrap.Card,
                { key: store.id, className: "card-" + store.id },
                _react2.default.createElement(_reactStatic.Link, { to: '/shopping/' + store.slug + '/' }),
                _react2.default.createElement(
                  _reactstrap.CardBody,
                  null,
                  _react2.default.createElement(
                    _reactStatic.Link,
                    { to: '/shopping/' + store.slug + '/' },
                    _react2.default.createElement(
                      _reactstrap.CardTitle,
                      null,
                      store.title.rendered ? _react2.default.createElement(
                        'div',
                        null,
                        store.title.rendered
                      ) : ""
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.CardText,
                    null,
                    (0, _reactHtmlParser2.default)(store.acf.post_copy)
                  ),
                  _react2.default.createElement(
                    _reactstrap.CardText,
                    null,
                    _react2.default.createElement(
                      'small',
                      null,
                      store.date
                    )
                  )
                )
              )
            ) : "";
          })
        ) : _react2.default.createElement(
          'p',
          null,
          'Content'
        )
      );
    }
  }]);

  return storeSearch;
}(_react2.default.Component));

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(Redirect, _React$Component);

    function Redirect(props) {
        _classCallCheck(this, Redirect);

        return _possibleConstructorReturn(this, (Redirect.__proto__ || Object.getPrototypeOf(Redirect)).call(this, props));
    }

    _createClass(Redirect, [{
        key: 'render',
        value: function render() {

            if (typeof document !== 'undefined') {
                return _react2.default.createElement(
                    'div',
                    null,
                    'Redirecting...',
                    window.location.replace(this.props.redirectURL)
                );
            } else {
                return null;
            }
        }
    }]);

    return Redirect;
}(_react2.default.Component));

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withSiteData)(function (_ref) {
  var siteRoot = _ref.siteRoot,
      title = _ref.title,
      metaDescription = _ref.metaDescription;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement(
        'title',
        null,
        title,
        ' | 404 Page'
      ),
      _react2.default.createElement('meta', { name: 'description', content: metaDescription }),
      _react2.default.createElement('link', { rel: 'canonical', href: siteRoot })
    ),
    _react2.default.createElement(
      _reactstrap.Container,
      null,
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          { xs: '12' },
          _react2.default.createElement(
            'h1',
            null,
            '404 - Oh no! We couldn\'t find that page :('
          )
        )
      )
    )
  );
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(40);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(41);

__webpack_require__(42);

__webpack_require__(46);

__webpack_require__(47);

var _App = __webpack_require__(48);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {

  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(43);
exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:Flama;src:url(" + escape(__webpack_require__(44)) + ")}body{font-family:FreightText Pro,serif;margin:0;font-size:1.2rem}div#root{height:100vh}#site{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;min-height:100%}#site,.container{width:100%}.padded{padding:60px 0}strong{font-weight:900}h1{font-family:Flama,sans-serif}h2{text-transform:uppercase;font-size:2rem}h3{font-size:1.8rem}h3,h4{font-family:Flama,sans-serif}img{max-width:100%}.blog .content,.contact .content,.single-blog .content,.single-page .content{margin-top:46px;padding:0}.halcyon-button{display:block;margin:1rem auto;background:#4e5859;color:#fff;padding:.5rem 2rem;border-radius:20px;text-transform:uppercase;font-size:1.4rem;max-width:250px;font-family:Flama,sans-serif;border:2px solid;text-align:center;-webkit-font-smoothing:antialiased}.halcyon-button:hover{color:#4e5859;text-decoration:none;background:#fff}.halcyon-button.arrow{padding:1rem 4rem 1rem 2rem;text-align:left;position:relative}.halcyon-button.arrow:after{position:absolute;right:2rem;top:1.5rem;content:\"\";border:solid #fff;border-width:0 2px 2px 0;display:inline-block;padding:5px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.halcyon-button.arrow:hover:after{border-color:#4e5859}@media screen and (min-width:768px){body{font-size:1.4rem}h2{font-size:2.2rem}.halcyon-button{display:inline-block;max-width:none}}@media (min-width:1200px){body{font-size:1.6rem}.container{max-width:1200px}h2{font-size:3.6rem}.halcyon-button{font-size:1.6rem}}.navWrapper{position:fixed;width:100%;z-index:10;background:#fff;top:0}nav{position:relative}.navWrapper .navbar{margin:0}.navbar-dark .navbar-nav .dropdown-menu{background:#fff}.navbar-dark .dropdown-item:focus,.navbar-dark .dropdown-item:hover{-webkit-filter:bightness(90%);filter:bightness(90%);-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s}.navbar-expand-lg .navbar-nav .nav-link{color:#333;text-transform:uppercase;font-size:1.4rem;letter-spacing:1px;-webkit-transition-duration:.3s;-o-transition-duration:.3s;transition-duration:.3s;font-family:Flama}.navbar-dark .navbar-nav .nav-link:active,.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:#209056;-webkit-transition-duration:.3s;-o-transition-duration:.3s;transition-duration:.3s}.navbar-expand-lg .navbar-nav .nav-link.nav-phone{color:#209056;text-decoration:none;font-weight:600}.navbar-expand-lg .navbar-nav .nav-link.nav-phone:hover{color:#333}.navbar{-webkit-box-shadow:rgba(0,0,0,.28) 0 3px 3px;box-shadow:0 3px 3px rgba(0,0,0,.28)}.navbar-dark .navbar-toggler{border:none;padding:0}nav .container{max-width:95%!important;padding:0}.navWrapper .navRow .nav-inner .nav-logo{position:absolute;left:50%;top:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:15}.navWrapper .navRow .nav-inner .nav-logo img{max-width:140px}.navWrapper .navRow .nav-inner{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;min-height:50px}.navWrapper .navRow .nav-inner .left{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center;align-items:center}.navWrapper .navRow .nav-inner .left .search-toggle{font-size:2rem;padding-right:1.5rem}.navWrapper .navRow .nav-inner .navbar-collapse{width:100%;position:fixed;left:0;background:#fff;top:40px;padding:4rem 0 0;z-index:1;-webkit-box-shadow:rgba(0,0,0,.28) 0 3px 3px;box-shadow:0 3px 3px rgba(0,0,0,.28)}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav{list-style:none;padding:0;margin:0}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-link{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item{border-bottom:1px solid #707070;padding:1rem 3rem}.navWrapper .navRow .nav-inner .navbar-toggler{background:transparent;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center;align-items:center}.navWrapper .navRow .nav-inner .navbar-toggler span{padding-right:1rem;border:0;font-family:Flama,sans-serif}.navWrapper .navRow .nav-inner .navbar-toggler:focus{outline:none}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-link .nav-icon svg{height:40px;max-width:78px}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-icon.cmx .cls-1{fill:#cc5c22}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-icon.cmx .cls-2{fill:#8a2432}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-icon.cmx .cls-3{fill:#8c837b}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-icon.cmx .cls-4{fill:#323e48}main.content{padding-top:50px}@media screen and (min-width:768px){.navWrapper .navRow .nav-inner .navbar-collapse{top:0;padding:0}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;margin-bottom:-20px;width:100%;-ms-flex-pack:center;justify-content:center}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item{padding:0;border-bottom:0}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-link{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;font-size:1rem}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav>div:nth-child(1n+4){-ms-flex-order:4;order:4}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo){max-width:70px;margin:0 1rem;padding:0 .5rem;position:relative}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo) img{max-height:40px}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item.logo img{max-width:200px}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-icon svg{height:40px;width:100%}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo) .nav-icon svg path,.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo) svg polygon,.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo) svg rect{-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo):hover .nav-icon:not(.sign-up) svg path,.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo):hover svg polygon,.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo):hover svg rect{fill:#fff}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo):hover .nav-icon.sign-up svg path{stroke:#fff}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo):hover{background:#8f1838}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo):hover .nav-link{color:#fff;text-decoration:none}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo):hover .nav-link:after{content:\"\";width:100%;height:7px}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo):hover .nav-icon:before{content:\"\";height:9px;width:70px;position:absolute;background:#8f1838;top:-9px;left:0}main.content{padding-top:46px}}@media screen and (min-width:1200px){.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-link{font-size:1.2rem}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo){max-width:85px;margin:0 1.5rem}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item.logo img{max-width:220px}main.content{padding-top:52px}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo):hover .nav-icon:before{height:14px;width:85px;top:-14px}}footer{padding:2rem 0 0;background-color:#edece2;color:#fff;text-transform:uppercase;background-image:url(" + escape(__webpack_require__(45)) + ");background-size:contain;background-repeat:no-repeat;background-position:center top 12px}#footerCopyright{background:#4e5859;font-family:Flama,sans-serif;padding:.5rem 0}footer .footer-heading{color:#4e5859;text-align:center;padding-bottom:1rem;letter-spacing:5px;font-size:2.8rem}footer a,footer a:active,footer a:hover{color:#4f4b48}footer .footer-nav{-webkit-column-count:2;column-count:2;padding-bottom:1rem}footer .footer-nav .nav-link{padding:0 0 1.5rem;font-family:Flama,sans-serif;font-size:1.2rem;display:block}.sociallinks{text-align:right}footer .fab{font-size:20px!important;margin-left:5px;margin-top:6px;color:#fff}footer .fa:hover,footer a:hover{opacity:.9;text-decoration:none}footer>.container>.row{margin:0}@media screen and (min-width:768px){footer{background-position:center top 40%}footer .footer-heading{text-align:left;font-size:3.6rem}footer .footer-nav{-webkit-column-count:3;column-count:3;padding-bottom:2rem;padding-left:0}footer .footer-nav .nav-link{font-size:1.4rem}}@media screen and (min-width:1200px){footer .footer-heading{font-size:4rem}}@media screen and (max-width:767px){.hidden-xs{display:none}}", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Flama-Basic.e4a05390.ttf";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/FEATHER.2bd142db.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".search-page-bar{margin-top:30px}form input[type=date].form-control{color:rgba(0,0,0,.4)}.hero-slider .slick-slide{position:relative}.hero-slider .slick-slide .hero-heading{position:absolute;bottom:1rem;color:hsla(0,0%,100%,.8);left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);margin:0;font-size:6rem;letter-spacing:5px}.hero-slider ul.slick-dots{position:absolute;top:50%;right:10%;width:20px;bottom:inherit!important;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);padding:0}.hero-slider .slick-dots li{margin:0 .75rem;width:26px;padding-left:inherit;padding-bottom:2rem}.hero-slider .slick-dots li:before{content:\"\";display:block}.hero-slider .slick-dots button{padding:0}.hero-slider .slick-dots li button:before{line-height:20px;border:2px solid #fff;border-radius:10px}.hero-slider .slick-dots li.slick-active button:before,.hero-slider .slick-dots li button:before{left:0;position:relative;display:inline-block;vertical-align:top;content:\"\";height:15px;width:15px;opacity:1}.hero-slider .slick-dots li.slick-active button:before{background:#8f1838;line-height:15px}.hero-slider .hero-slide{visibility:hidden}.hero-slider.hero-slide:first-child,.hero-slider.slick-initialized .hero-slide{visibility:visible}#searchBar{background:#8f1838;display:block;width:100%;position:relative;z-index:1;margin-top:-6px}#searchBar .container{display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:42px;-ms-flex-align:center;align-items:center}#searchBar a{color:#fff}#searchBar .icon{font-size:2.5rem}.slick-slider{overflow:hidden}.slick-dots{bottom:65px!important}.slick-dots li button:before{height:40px;width:40px;font-size:20px}.slick-slide img{width:100%;max-width:100%}.card-columns{max-width:100%}#home h1{font-size:2rem}#home .top-cta{padding-top:1rem;padding-bottom:1rem;text-align:center}.heading-container{height:54px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0 0 1rem}.heading-container h2{margin:0}body.baby-blue .heading-container{background-color:#cde2e0;color:#4f4b48}body.red #heroSection .hero-heading,body.red #mobileFloatingNav,body.red .heading-container{background-color:#8f1838;color:#fff}body.light-green .heading-container{background-color:#9daf8a;color:#fff}body.dark-green #heroSection .hero-heading,body.dark-green #mobileFloatingNav,body.dark-green .heading-container,body.light-green #heroSection .hero-heading,body.light-green #mobileFloatingNav{background-color:#718472;color:#fff}body.baby-blue #heroSection .hero-heading,body.baby-blue #mobileFloatingNav,body.dark-grey #heroSection .hero-heading,body.dark-grey #mobileFloatingNav,body.dark-grey .heading-container{background-color:#4e5859;color:#fff}body.dark-brown #heroSection .hero-heading,body.dark-brown #mobileFloatingNav,body.dark-brown .heading-container{background-color:#4f4b48;color:#fff}#heroSection img{width:100%}#heroSection{position:relative;overflow:hidden}#heroSection .hero-container{position:absolute;bottom:0;left:0;right:0;text-align:center}#heroSection .hero-heading{opacity:.8;text-align:center;text-transform:uppercase}#heroSection .hero-heading h1{font-family:FreightText Pro,sans-serif;opacity:1;margin:1rem 0 0;padding:1rem}.additional-content .hero-subhead{font-family:Flama,sans-serif}@media screen and (min-width:768px){#home h1{font-size:2.4rem}.hero-slider .slick-slide .hero-heading{font-size:9rem}#searchBar .container a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-family:Flama,sans-serif;font-size:1.2rem;text-transform:uppercase}#searchBar .container a .icon{margin-right:1rem}#searchBar .container a p{margin:0}#searchBar .search-bar{border-radius:5px;border:0}#home .top-cta{padding-bottom:2rem}.search-toggle{display:block!important}#heroSection .hero-container{max-width:60%;left:auto;text-align:left}#heroSection .hero-container .hero-content{background-color:hsla(0,0%,100%,.8);padding:1rem}#heroSection .hero-container .hero-content h2{font-size:2rem;font-family:Flama,sans-serif;margin:0 0 .5rem}#heroSection .hero-container .hero-content p{margin:0}#heroSection .hero-heading{padding:0 2rem}#heroSection .hero-heading h1{margin:0;padding:1rem 0}#heroSection .button-container{position:absolute;bottom:2rem;left:2rem}#heroSection .button-container .button-wrap .halcyon-button{width:100%;border:0}}@media screen and (min-width:1200px){#home h1{font-size:3rem}.hero-slider .slick-slide .hero-heading{font-size:14rem;letter-spacing:1.5rem}.heading-container{height:72px}#home .top-cta{padding-top:2rem;padding-bottom:3rem}#heroSection .hero-container{max-width:650px}#heroSection .hero-heading h1{font-size:8rem;text-align:left;padding-left:2rem}#heroSection .hero-container .hero-content{padding:4rem 6rem 2rem 4rem}#heroSection .hero-container .hero-content h2{font-size:3rem}}", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(49);

var _reactStaticRoutes = __webpack_require__(50);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _SearchComponent = __webpack_require__(94);

var _SearchComponent2 = _interopRequireDefault(_SearchComponent);

var _Header = __webpack_require__(96);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(113);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      { id: 'site' },
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(_SearchComponent2.default, null),
      _react2.default.createElement(
        'main',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      ),
      _react2.default.createElement(_Footer2.default, null)
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(51);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(52);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(53);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(13);

var _reactUniversalComponent = __webpack_require__(54);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Users/geoff.cronin/Desktop/work/halcyon2/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/singles/Page',
  file: '/Users/geoff.cronin/Desktop/work/halcyon2/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 23)), (0, _importCss3.default)('src/singles/Page', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/singles/Page');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return 'src/singles/Page';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Blogs',
  file: '/Users/geoff.cronin/Desktop/work/halcyon2/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 26)), (0, _importCss3.default)('src/pages/Blogs', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Blogs');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return 'src/pages/Blogs';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/singles/Post',
  file: '/Users/geoff.cronin/Desktop/work/halcyon2/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 27)), (0, _importCss3.default)('src/singles/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/singles/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return 'src/singles/Post';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/singles/Event',
  file: '/Users/geoff.cronin/Desktop/work/halcyon2/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 28)), (0, _importCss3.default)('src/singles/Event', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/singles/Event');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return 'src/singles/Event';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Sales',
  file: '/Users/geoff.cronin/Desktop/work/halcyon2/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 29)), (0, _importCss3.default)('src/pages/Sales', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Sales');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return 'src/pages/Sales';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/singles/Sale',
  file: '/Users/geoff.cronin/Desktop/work/halcyon2/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 30)), (0, _importCss3.default)('src/singles/Sale', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/singles/Sale');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return 'src/singles/Sale';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/oldContainers/Search',
  file: '/Users/geoff.cronin/Desktop/work/halcyon2/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 31)), (0, _importCss3.default)('src/oldContainers/Search', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/oldContainers/Search');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return 'src/oldContainers/Search';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/singles/Store',
  file: '/Users/geoff.cronin/Desktop/work/halcyon2/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 32)), (0, _importCss3.default)('src/singles/Store', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/singles/Store');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return 'src/singles/Store';
  }
}), universalOptions);
var t_9 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/SearchResults',
  file: '/Users/geoff.cronin/Desktop/work/halcyon2/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 33)), (0, _importCss3.default)('src/pages/SearchResults', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/SearchResults');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return 'src/pages/SearchResults';
  }
}), universalOptions);
var t_10 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Redirect',
  file: '/Users/geoff.cronin/Desktop/work/halcyon2/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 37)), (0, _importCss3.default)('src/pages/Redirect', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Redirect');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return 'src/pages/Redirect';
  }
}), universalOptions);
var t_11 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/404',
  file: '/Users/geoff.cronin/Desktop/work/halcyon2/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 38)), (0, _importCss3.default)('src/pages/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(38);
  },
  chunkName: function chunkName() {
    return 'src/pages/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8, t_9, t_10, t_11];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 11

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(55);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(56);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(57);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(14);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(8);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var heroArray = [];

var HeroSlider = function (_React$Component) {
  _inherits(HeroSlider, _React$Component);

  function HeroSlider(props) {
    _classCallCheck(this, HeroSlider);

    return _possibleConstructorReturn(this, (HeroSlider.__proto__ || Object.getPrototypeOf(HeroSlider)).call(this, props));
  }

  _createClass(HeroSlider, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var home = this.props.home[0];

      heroArray = home.acf.hero_slider.map(function (hero, index) {
        if (hero.link) {
          return _react2.default.createElement(
            "div",
            { className: "hero-slide", key: index },
            _react2.default.createElement(
              "a",
              { href: hero.link.url, target: hero.link.target },
              _react2.default.createElement("img", { className: "visible-xs", key: hero.mobile_image.link, src: hero.mobile_image.link }),
              _react2.default.createElement("img", { className: "hidden-xs", key: hero.desktop_image.link, src: hero.desktop_image.link }),
              _react2.default.createElement(
                "h2",
                { className: "hero-heading" },
                hero.heading
              )
            )
          );
        } else if (!hero.link) {
          return _react2.default.createElement(
            "div",
            { className: "hero-slide", key: index },
            _react2.default.createElement("img", { className: "visible-xs", key: hero.mobile_image.link, src: hero.mobile_image.link }),
            _react2.default.createElement("img", { className: "hidden-xs", key: hero.desktop_image.link, src: hero.desktop_image.link }),
            _react2.default.createElement(
              "h2",
              { className: "hero-heading" },
              hero.heading
            )
          );
        } else {
          return null;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };
      return _react2.default.createElement(
        _reactSlick2.default,
        _extends({ className: "hero-slider" }, settings),
        heroArray
      );
    }
  }]);

  return HeroSlider;
}(_react2.default.Component);

exports.default = HeroSlider;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width:767px){.imageCarousel .slick-slide{padding:0 3rem;text-align:center}.imageCarousel .slick-arrow{content:\"\";border:solid #4f4b48;border-width:0 2px 2px 0;display:inline-block;padding:3px;top:50%}.imageCarousel .slick-arrow.slick-next{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);right:1rem;z-index:1}.imageCarousel .slick-arrow.slick-prev{-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);left:1rem;z-index:1}}.imageCarousel .slick-arrow:before{content:none}.imageCarousel .slider-container{padding:3rem 0;background-size:cover}.imageCarousel .slider-container .slick-track{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.imageCarousel .slider-container .slick-slide{background-size:cover}@media screen and (min-width:768px){.imageCarousel .slider-container .slick-slide{padding:0 1rem;text-align:center}.imageCarousel .slider-container{padding:5rem 0}.imageCarousel .slider-container .slick-slide img{border-radius:10px;-webkit-transition:.4s;-o-transition:.4s;transition:.4s}.imageCarousel .slick-arrow{width:auto;height:auto}.imageCarousel .slider-container .slick-slider{padding:0 4rem}.imageCarousel .slider-container .slick-slider .slick-track{padding:3rem 0}.imageCarousel .slick-next{right:0}.imageCarousel .slick-next img{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1)}.imageCarousel .slick-prev{left:0;z-index:1}}", ""]);

// exports


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFMUlEQVR4nOXbbYhUVRzH8c/sjCAapCXpQvZAu+smukG9MLN2e7CSInrTw7tQCgvJniiIoqjsyYzoCbJFsCQo0V6EufRCKCsphTZN0d20oMiiKE0ICXGcXpx1dneYndkZ556r7Rfui7v3nnN+/x/3zt5zzv+fufnGBRKmA7PRjhacg2acgdMG7vkHB/AbfsY+9GEnvktSXC6BPifgKnRhHuYgW6XN6QPH+bhsyN/z2Iot2IxPcbiRYjMNfAJm4ibcgM5GdVrC5+jBBuxuRIeNeAJm4XbcihkN6K8SnQPHIqzDWuw6kQ6z7W0t9badjCV4GrdhyokIqZEpghHzhFeuD//W01G9BswXAn8Q0+rpoEFMw/W4AAfxY60d1GPAvXgGV9TaMEFmYi4K2FZLw1oMmIInsUzcx320nIkFwiux3Sj/W4zWgHPxFO5Hpj59UcjgckwSviEOVWswGgOOB3/nCYqLySWCCdtVMaGpSkdT8BgWNkRWXBYK2iu+rtUMeBiLGyQoDRYLMYxIJQPuxSMNlZMOjwixlGUkA+bjvgrXTyWahFjmj3SxlMm4G60JiopNqxDT5NIL5QxYhFuSVpQCtwixDaPUgFm4I4qcdLhDiLFIqQG346JocuJzkRBjkaEGzBSmtP93bhVixXADbpL8fP5kYIYQKwYNmCCs5IwVbhBiLhpwleSWsU5GOoWYiwZ0paclNboYNGBeikLSYh7BgA5h6XqsMQcdTcKmRbV1+8Q497zz3LX4njSGzmJ2TtixSYXW1jbPLV9RPF/VvTK2hPYmYbsqOrNmd1j2wnLjxo0LSi6cWaVFIrTkhL26qMy5dK5HH3+ieP59f58Xn1sWWwackxM2KqNx9TXzLX3goeL5F5s/89qrr8gfPRpTxnGac8IubRTefKvb2dOng0Kh4JOejVZ1r5TP52NJKOWMnMEt6kR5e9VqZ02dqlAoyGQyPly31ntr3o0xdCVOi7bkdeTIkWHnv+7fH2voijQJyQmJs3TJ3fbv/0UmE/ZVliy935xL58YYuhL/ZNvbWhYrs1aWBD0fbzBx4kStbTNks1lXdHbZtXOnP/74Pcbw5fgt297Wchumxxrx295vTJo0WWtbG7i8s8v23l4HDvwVS8JQ9mTb21quVbJOljTbv+3V3NzsrKnTjB8/3pVXX2Pb1q8d+vvvmDJgS5OQkBSVfD7vtVdf0d+3R6FQkMvlXHtd4sla5djXJGRXRCd/9KiXl7/gh3379Hy8IY15APRlbr5xQQd6pTgjTIk8Lm4S8vC2piwmDbbiu+MfQlvSVJISWxhcEtucopC02MygAZ8KSYhjhc+FmIsGHBYyMMcKPQaSqIZOhjagPxU5cekXYsVwA3YL6af/d9YZkmdcOh1eix1R5cRlhxBjkVIDdmFNNDnxWaMkubrcgshqrI8iJy7rhdiGUc6Ag3gbe5NWFJG9QkwHSy+MtCS2Ca/jWIKiYnFMiGVTuYuV1gTfxIoK108VVgixlKXaoujL6G6onLh0CzGMSDUD/sTzeKdBgmLyjqD9z0o3jSZb/JCQdT1ByMI+FegW6hp+qnbjaOsFDuFroSLjMidvzcAxvIRnhRrEqtRSMXJY+CU9IKSenlmHwCTZK9QxPa+G2sJ6aoa2YY/wSqSyp12G9UId0we1Nqy3bnATvsFXQvppWtmlO4TP29XKfOSMhhOpG/xXMOBL4bWYKl4xVT9WCj90H6mzZpDGVI7uGjjeN0ZLZ4+ze+B4Q+3F0yORePF0EtXjh7Fx4OAkL5//D7QtINbBcpdRAAAAAElFTkSuQmCC"

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".image-grid-container{overflow:hidden;margin-bottom:3rem}.image_grid .col-xs-6,.image_grid .col-xs-12{padding:0;display:block}.image_grid figure{background-size:cover;position:absolute;top:0;bottom:0;left:0;right:0}.image_group>div{position:relative}.image-group-1>div{width:100%;height:400px}.image-group-2>div,.image-group-3>div,.image-group-4>div{width:100%;height:200px}.image-group>div>figure:nth-last-of-type(2){display:none}.image_grid *{overflow:hidden}@media screen and (min-width:1200px){.image-grid-container{margin-bottom:4.5rem}}", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".events-container{margin-bottom:2rem}.events-container .event-wrapper{padding:0;margin-bottom:2rem}.events-container .event-wrapper .featuredEvent{position:relative}.events-container .event-wrapper .featuredEvent .eventOverlay{position:absolute;left:0;right:0;bottom:0;background-color:#CDE2E0ee;padding:1rem}.events-container .event-wrapper .featuredEvent img{width:100%}.events-container .event-wrapper .featuredEvent .eventOverlay p{margin:0}.events-container .event-wrapper .featuredEvent .eventOverlay h4{font-family:FreightText Pro,serif;text-transform:uppercase}.events-container .pull-right{font-family:Flama,sans-serif;font-size:1.4rem;text-transform:uppercase;color:#4f4b48;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.events-container .pull-right .arrow{margin-left:.5rem}.events-container .event-wrapper a{color:#4e5859}@media screen and (min-width:768px){.events-container>.container{margin-top:2rem}.events-container .event-wrapper .featuredEvent{min-height:20vw;overflow:hidden;margin:0 1rem}.events-container .event-wrapper .featuredEvent img{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:auto;max-width:none}}@media screen and (min-width:1200px){.events-container>.container{margin-top:3rem}.events-container .event-wrapper .featuredEvent{min-height:250px}.events-container .event-wrapper .featuredEvent .eventOverlay{-webkit-transform:scaleY(0);-ms-transform:scaleY(0);transform:scaleY(0);-webkit-transition:.4s;-o-transition:.4s;transition:.4s;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom}.events-container .event-wrapper .featuredEvent:hover .eventOverlay{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1)}}", ""]);

// exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".contentArea{margin:2rem 0}.contentArea .column-heading{font-size:2rem;text-transform:uppercase}.contentArea .heading-button-align-center .button-wrapper,.contentArea .heading-button-align-center .column-heading{text-align:center}.contentArea .heading-button-align-right .button-wrapper,.contentArea .heading-button-align-right .column-heading{text-align:right}@media screen and (min-width:768px){.contentArea{margin:3rem 0}.contentArea .column-heading{font-size:2.5rem}}@media screen and (min-width:1200px){.contentArea{margin:4rem 0}.contentArea .column-heading{font-size:3rem}}", ""]);

// exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#tenantSlider{margin:2rem 0}#tenantSlider .slick-arrow:before{content:none}#tenantSlider .store:focus{outline:none}@media screen and (max-width:767px){#tenantSlider .slick-slide{padding:0 3rem;text-align:center}#tenantSlider .slick-arrow{content:\"\";border:solid #4f4b48;border-width:0 2px 2px 0;display:inline-block;padding:3px;top:25%}#tenantSlider .slick-arrow.slick-next{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);right:1rem;z-index:1}#tenantSlider .slick-arrow.slick-prev{-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);left:1rem;z-index:1}}@media screen and (min-width:768px){#tenantSlider .slick-next,#tenantSlider .slick-prev{position:absolute;top:92%;z-index:1;font-size:1.4rem;line-height:1rem;width:auto}#tenantSlider .slick-prev{left:0}#tenantSlider .slick-next{right:0}#tenantSlider .slick-arrow p{color:#333;margin:0;padding:.125rem 1rem;text-transform:uppercase}#tenantSlider .slick-next p{float:left}#tenantSlider .slick-prev p{float:right}#tenantSlider .slick-list{margin-bottom:5rem}#tenantSlider .halcyon-button{margin:2rem 0 1rem;max-width:145px}#tenantSlider .store .image-wrapper{width:50%;position:relative}#tenantSlider .store .content-wrapper{width:60%;float:right;margin-top:-200px;padding:3rem 0;background:#edece2}#tenantSlider .store .content-wrapper .inner-wrapper{width:75%;float:right;background:hsla(0,0%,100%,.8);padding:1rem 2rem}}@media screen and (min-width:1200px){#tenantSlider .store .content-wrapper{margin-top:-340px;padding:10rem 0}#tenantSlider .slick-next,#tenantSlider .slick-prev{top:94%;font-size:1.8rem}}", ""]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAAAXNSR0IArs4c6QAAAVJJREFUOBFjYMAB/D3dQvy83efikEYRZkbhQTkgAxiYmFYwMjAaq6kqX7l1++51bOpgYiwwBoz28/bwA7JXADHzf4b/0zdv27kWJoeLZkKWABvw/z9IE9iATVt3ZiHL42IzwiRgBjAyMrIw/P8/f+O2nUkwOUI02BA/L3cPoMLNSAYkA/n/CWmGyTOCDABq3v4fqAVo4jsg9QQmSRTN+G8qC1BjOshORojHhICUEFGaoYr+/2cSYzQ2NmaVlhBZD9TsDTTrEzPD38R//xluE2sQ0x+ml2D7HRwcWPi42TcA0wXIoPf/mf5Zbd686wbRBoEUHjhw4M+nrz8DgEyQiwQZ/zId8vV10yDJEJhBbFy8oUCXrACGjygpBoG9g2YjKMYWAGMsDhhjr/8z/7Mj5DWUFAs17P+mbTsT/v//vwhowyfmP8y/0SwhicsY4OAgQIwOANXAcLpISqmLAAAAAElFTkSuQmCC"

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactLoadScript = __webpack_require__(67);

var _reactLoadScript2 = _interopRequireDefault(_reactLoadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Packages


var moment = __webpack_require__(68);
var momentRange = __webpack_require__(69);
moment = momentRange.extendMoment(moment);

var TintSocialFeed = function (_Component) {
    _inherits(TintSocialFeed, _Component);

    function TintSocialFeed(props) {
        _classCallCheck(this, TintSocialFeed);

        var _this = _possibleConstructorReturn(this, (TintSocialFeed.__proto__ || Object.getPrototypeOf(TintSocialFeed)).call(this, props));

        _this.state = {
            scriptLoaded: false
        };
        return _this;
    }

    _createClass(TintSocialFeed, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log(this.props.optionsData);
        }
    }, {
        key: 'handleScriptCreate',
        value: function handleScriptCreate() {
            this.setState({ scriptLoaded: false });
        }
    }, {
        key: 'handleScriptLoad',
        value: function handleScriptLoad() {
            this.setState({ scriptLoaded: true });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'tint-social-feed' },
                _react2.default.createElement('div', {
                    className: 'tintup',
                    'data-id': this.props.optionsData.acf.social_feed_data_id,
                    'data-columns': '',
                    'data-mobilescroll': 'true',
                    'data-infinitescroll': 'true',
                    'data-personalization-id': this.props.optionsData.acf.social_feed_personalization_id,
                    style: { 'height': '350px', 'width': '100%' }
                }),
                _react2.default.createElement(_reactLoadScript2.default, {
                    url: this.props.optionsData.acf.social_feed_script_url,
                    onCreate: this.handleScriptCreate.bind(this),
                    onLoad: this.handleScriptLoad.bind(this)
                })
            );
        }
    }]);

    return TintSocialFeed;
}(_react.Component);

exports.default = TintSocialFeed;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("react-load-script");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("moment-range");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _ImageCarousel = __webpack_require__(17);

var _ImageCarousel2 = _interopRequireDefault(_ImageCarousel);

var _GlobalImageGrid = __webpack_require__(18);

var _GlobalImageGrid2 = _interopRequireDefault(_GlobalImageGrid);

var _FeaturedEvents = __webpack_require__(20);

var _FeaturedEvents2 = _interopRequireDefault(_FeaturedEvents);

var _ContentArea = __webpack_require__(21);

var _ContentArea2 = _interopRequireDefault(_ContentArea);

var _FeaturedStores = __webpack_require__(22);

var _FeaturedStores2 = _interopRequireDefault(_FeaturedStores);

var _ContentWithFeaturedImage = __webpack_require__(72);

var _ContentWithFeaturedImage2 = _interopRequireDefault(_ContentWithFeaturedImage);

var _Forms = __webpack_require__(74);

var _Forms2 = _interopRequireDefault(_Forms);

var _FeaturedContentCarousel = __webpack_require__(76);

var _FeaturedContentCarousel2 = _interopRequireDefault(_FeaturedContentCarousel);

var _DiningDirectory = __webpack_require__(78);

var _DiningDirectory2 = _interopRequireDefault(_DiningDirectory);

var _ShoppingDirectory = __webpack_require__(85);

var _ShoppingDirectory2 = _interopRequireDefault(_ShoppingDirectory);

var _ContentWithFeaturedVideo = __webpack_require__(87);

var _ContentWithFeaturedVideo2 = _interopRequireDefault(_ContentWithFeaturedVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

{/* <ModuleController page={page} /> or  <ModuleController page={event} /> or  <ModuleController page={store} /> */}

var ModuleController = function (_React$Component) {
    _inherits(ModuleController, _React$Component);

    function ModuleController(props) {
        _classCallCheck(this, ModuleController);

        return _possibleConstructorReturn(this, (ModuleController.__proto__ || Object.getPrototypeOf(ModuleController)).call(this, props));
    }

    _createClass(ModuleController, [{
        key: 'render',
        value: function render() {
            var page = this.props.page;

            return _react2.default.createElement(
                'div',
                null,
                page.acf.layout ? _react2.default.createElement(
                    'div',
                    null,
                    page.acf.layout.map(function (section, index) {
                        if (section.acf_fc_layout == 'content_area') {
                            return _react2.default.createElement(
                                _reactstrap.Container,
                                { key: index },
                                _react2.default.createElement(_ContentArea2.default, { section: section })
                            );
                        } else if (section.acf_fc_layout == 'image_carousel') {
                            return _react2.default.createElement(
                                'div',
                                { key: index },
                                _react2.default.createElement(_ImageCarousel2.default, { section: section })
                            );
                        } else if (section.acf_fc_layout == 'image_grid') {
                            return _react2.default.createElement(
                                'div',
                                { key: index },
                                _react2.default.createElement(_GlobalImageGrid2.default, { section: section })
                            );
                        } else if (section.acf_fc_layout == 'featured_events') {
                            return _react2.default.createElement(
                                'div',
                                { key: index },
                                _react2.default.createElement(_FeaturedEvents2.default, { section: section })
                            );
                        } else if (section.acf_fc_layout == 'featured_stores') {
                            return _react2.default.createElement(
                                'div',
                                { key: index },
                                _react2.default.createElement(_FeaturedStores2.default, { pageData: page, section: section })
                            );
                        } else if (section.acf_fc_layout == 'content_with_featured_image') {
                            return _react2.default.createElement(
                                'div',
                                { key: index },
                                _react2.default.createElement(_ContentWithFeaturedImage2.default, { section: section })
                            );
                        } else if (section.acf_fc_layout == 'form') {
                            return _react2.default.createElement(
                                'div',
                                { key: index },
                                _react2.default.createElement(_Forms2.default, { section: section })
                            );
                        } else if (section.acf_fc_layout == 'featured_content_carousel') {
                            return _react2.default.createElement(
                                'div',
                                { key: index },
                                _react2.default.createElement(_FeaturedContentCarousel2.default, { section: section })
                            );
                        } else if (section.acf_fc_layout == 'dining_directory') {
                            return _react2.default.createElement(
                                'div',
                                { key: index },
                                _react2.default.createElement(_DiningDirectory2.default, { section: section })
                            );
                        } else if (section.acf_fc_layout == 'shopping_directory') {
                            return _react2.default.createElement(
                                'div',
                                { key: index },
                                _react2.default.createElement(_ShoppingDirectory2.default, { section: section })
                            );
                        } else if (section.acf_fc_layout == 'video') {
                            return _react2.default.createElement(
                                'div',
                                { key: index },
                                _react2.default.createElement(_ContentWithFeaturedVideo2.default, { section: section })
                            );
                        }
                    })
                ) : _react2.default.createElement(
                    _reactstrap.Container,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Col,
                            { xs: '12' },
                            page.acf.additional_content ? "" : _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    (0, _reactHtmlParser2.default)(page.title.rendered)
                                ),
                                (0, _reactHtmlParser2.default)(page.content.rendered)
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ModuleController;
}(_react2.default.Component);

exports.default = ModuleController;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

__webpack_require__(25);

var _featherDark = __webpack_require__(73);

var _featherDark2 = _interopRequireDefault(_featherDark);

var _helpers = __webpack_require__(5);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(ContentWithFeaturedImage, _React$Component);

    function ContentWithFeaturedImage(props) {
        _classCallCheck(this, ContentWithFeaturedImage);

        return _possibleConstructorReturn(this, (ContentWithFeaturedImage.__proto__ || Object.getPrototypeOf(ContentWithFeaturedImage)).call(this, props));
    }

    _createClass(ContentWithFeaturedImage, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                _reactstrap.Container,
                { className: 'contentWithFeaturedImage' },
                _react2.default.createElement(
                    _reactstrap.Row,
                    { className: this.props.section.display_options == 'content-left-image-right' ? 'content-left' : 'content-right' },
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 6, lg: 7, className: 'image-column' },
                        _react2.default.createElement('img', { src: this.props.section.featured_image.url, alt: this.props.section.featured_image.alt })
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: 6, lg: 5, className: 'content-column' },
                        this.props.section.heading && _react2.default.createElement(
                            'div',
                            { className: 'heading' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                this.props.section.heading
                            )
                        ),
                        this.props.section.content && _react2.default.createElement(
                            'div',
                            { clasName: 'content' },
                            (0, _reactHtmlParser2.default)(this.props.section.content)
                        ),
                        this.props.section.button ? _react2.default.createElement(
                            _reactStatic.Link,
                            { className: 'halcyon-button', to: _helpers2.default.convertLink(this.props.section.button.url, this.props.title.toLowerCase()) },
                            this.props.section.button.title ? _react2.default.createElement(
                                'div',
                                null,
                                (0, _reactHtmlParser2.default)(this.props.section.button.title)
                            ) : _react2.default.createElement(
                                'div',
                                null,
                                _helpers2.default.getTitleFromUrl(this.props.section.button.url, this.props.title.toLowerCase())
                            )
                        ) : ""
                    )
                )
            );
        }
    }]);

    return ContentWithFeaturedImage;
}(_react2.default.Component));

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/feather-dark.877c6fa4.png";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

__webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Forms = function (_React$Component) {
    _inherits(Forms, _React$Component);

    function Forms(props) {
        _classCallCheck(this, Forms);

        var _this = _possibleConstructorReturn(this, (Forms.__proto__ || Object.getPrototypeOf(Forms)).call(this, props));

        _this.state = {
            form: [],
            fields: '',
            gformTitle: '',
            email: ''
        };
        return _this;
    }

    _createClass(Forms, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            var component = this;
            var data = this.props.section;
            var title = this.props.section.heading;

            if (data) {
                var fields = data.form.fields.map(function (field) {
                    // Create input type based off gForm Web API response, as well as accompanying state variable to match
                    {
                        switch (field.type) {
                            case 'name':
                            case 'address':
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        className: "col-xs-12 form-group" + (field.isRequired ? ' required' : '') + ' type-' + field.type,
                                        id: "group-" + field.id,
                                        'data-name': field.label
                                    },
                                    _react2.default.createElement(
                                        _reactstrap.Row,
                                        null,
                                        field.inputs.map(function (input) {
                                            if (!input.isHidden) {
                                                return _react2.default.createElement(
                                                    'label',
                                                    { 'for': input.id,
                                                        className: 'col-xs-12 col-sm-6' },
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'sr-only' },
                                                        input.label
                                                    ),
                                                    _react2.default.createElement('input', {
                                                        type: 'text',
                                                        id: input.id,
                                                        className: "form-control" + (field.cssClass ? ' ' + field.cssClass : ''),
                                                        placeholder: input.label + (field.isRequired ? '*' : ''),
                                                        name: input.label + input.id,
                                                        value: component.state[input.id],
                                                        onChange: component.handleInputChange,
                                                        required: input.isRequired
                                                    })
                                                );
                                            }
                                        })
                                    )
                                );
                            case 'textarea':
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        className: "col-xs-12 form-group" + (field.isRequired ? ' required' : '') + ' type-' + field.type,
                                        id: "group-" + field.id,
                                        'data-name': field.label
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'label',
                                            { 'for': field.label, className: 'col-xs-12' },
                                            _react2.default.createElement('textarea', {
                                                type: field.type,
                                                id: field.id,
                                                className: 'form-control',
                                                name: field.label,
                                                placeholder: field.label + (field.isRequired ? '*' : ''),
                                                value: component.state[field.id],
                                                onChange: component.handleInputChange,
                                                required: field.isRequired
                                            })
                                        )
                                    )
                                );
                            case 'select':
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        className: "col-xs-12 form-group" + (field.size !== 'large' ? ' col-sm-6' : '') + (field.isRequired ? ' required' : '') + ' type-' + field.type,
                                        id: "group-" + field.id,
                                        'data-name': field.label
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-xs-12' },
                                            _react2.default.createElement(
                                                'label',
                                                { 'for': field.label },
                                                _react2.default.createElement(
                                                    'b',
                                                    null,
                                                    field.label + (field.isRequired ? '*' : '')
                                                ),
                                                _react2.default.createElement('br', null),
                                                _react2.default.createElement(
                                                    'select',
                                                    {
                                                        className: 'form-control',
                                                        type: field.type,
                                                        id: field.id,
                                                        name: field.label,
                                                        value: component.state[field.id],
                                                        onChange: component.handleInputChange,
                                                        required: field.isRequired
                                                    },
                                                    _react2.default.createElement(
                                                        'option',
                                                        { value: 'none-selected' },
                                                        '-'
                                                    ),
                                                    field.choices.map(function (choice) {
                                                        return _react2.default.createElement(
                                                            'option',
                                                            {
                                                                value: choice.value },
                                                            choice.text
                                                        );
                                                    })
                                                )
                                            )
                                        )
                                    )
                                );
                            case 'checkbox':
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        className: "col-xs-12 form-group checkbox-group" + (field.isRequired ? ' required' : '') + ' type-' + field.type,
                                        id: "group-" + field.id,
                                        'data-name': field.label
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            _reactstrap.Col,
                                            { xs: 12 },
                                            _react2.default.createElement(
                                                'b',
                                                null,
                                                field.label + (field.isRequired ? '*' : '')
                                            ),
                                            field.inputs.map(function (choice) {
                                                return _react2.default.createElement(
                                                    'div',
                                                    { className: 'checkbox' },
                                                    _react2.default.createElement(
                                                        'label',
                                                        { 'for': field.label },
                                                        _react2.default.createElement('input', {
                                                            type: 'checkbox',
                                                            id: choice.id,
                                                            name: field.id,
                                                            value: choice.label,
                                                            onChange: component.handleInputChange
                                                        }),
                                                        choice.label
                                                    )
                                                );
                                            })
                                        )
                                    )
                                );
                            case 'radio':
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        className: "col-xs-12 form-group" + (field.isRequired ? ' required' : '') + ' type-' + field.type,
                                        id: "group-" + field.id,
                                        'data-name': field.label
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            _reactstrap.Col,
                                            { xs: 12 },
                                            _react2.default.createElement(
                                                'b',
                                                null,
                                                field.label
                                            ),
                                            field.choices.map(function (choice) {
                                                return _react2.default.createElement(
                                                    'div',
                                                    { className: 'radio' },
                                                    _react2.default.createElement(
                                                        'label',
                                                        { 'for': field.label },
                                                        _react2.default.createElement('input', {
                                                            type: 'radio',
                                                            id: field.id,
                                                            name: field.label,
                                                            value: choice.value,
                                                            onChange: component.handleInputChange,
                                                            required: field.isRequired
                                                        }),
                                                        choice.text
                                                    )
                                                );
                                            })
                                        )
                                    )
                                );
                            case 'html':
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        className: "col-xs-12 form-group" + ' type-' + field.type,
                                        id: "group-" + field.id,
                                        'data-name': field.label
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(_reactstrap.Col, {
                                            xs: 12,
                                            dangerouslySetInnerHTML: { __html: field.content } })
                                    )
                                );
                            case 'time':
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        className: "col-xs-12 form-group" + (field.size !== 'large' ? ' col-sm-6' : '') + (field.isRequired ? ' required' : '') + ' type-' + field.type,
                                        id: "group-" + field.id,
                                        'data-name': field.label
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'label',
                                            { 'for': field.id, className: 'col-xs-12' },
                                            _react2.default.createElement(
                                                'b',
                                                null,
                                                field.label + (field.isRequired ? '*' : '')
                                            ),
                                            _react2.default.createElement('input', {
                                                type: 'text',
                                                id: field.id,
                                                className: 'form-control',
                                                name: field.label,
                                                value: component.state[field.id],
                                                onChange: component.handleInputChange,
                                                required: field.isRequired
                                            })
                                        )
                                    )
                                );
                            default:
                                return _react2.default.createElement(
                                    'div',
                                    {
                                        className: "col-xs-12 form-group" + (field.size !== 'large' ? ' col-sm-6' : '') + (field.isRequired ? ' required' : '') + ' type-' + field.type,
                                        id: "group-" + field.id,
                                        'data-name': field.label
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'label',
                                            { 'for': field.id, className: 'col-xs-12' },
                                            field.type === 'date' && _react2.default.createElement(
                                                'b',
                                                null,
                                                field.label + (field.isRequired ? '*' : '')
                                            ),
                                            _react2.default.createElement('input', {
                                                type: field.type,
                                                id: field.id,
                                                className: 'form-control',
                                                name: field.label,
                                                placeholder: field.label + (field.isRequired ? '*' : ''),
                                                value: component.state[field.id],
                                                onChange: component.handleInputChange,
                                                required: field.isRequired
                                            }),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'sr-only' },
                                                field.label
                                            )
                                        )
                                    )
                                );
                        }
                    }
                });

                // Build a list of fields, to be referenced for values/submissions
                var fieldList = [];
                data.form.fields.map(function (field) {
                    if (field.inputs) {
                        var inputs = field.inputs.map(function (input, index) {
                            var inputID = void 0;
                            if (input.id) {
                                inputID = input.id.toString();
                            } else {
                                inputID = field.id + '_' + index.toString();
                            }
                            return inputID.toString();
                        });
                        inputs.map(function (data) {
                            fieldList.push(data);
                        });
                    } else {
                        fieldList.push(field.id.toString());
                    }
                });

                component.setState({
                    gformTitle: title,
                    fields: fields
                });
            } else {
                return 'The requested form is not available.';
            }

            for (var key in this.props.section.form.notifications) {
                if (this.props.section.form.notifications[key].hasOwnProperty("to")) this.state.email = this.props.section.form.notifications[key].to;
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'formModule' },
                _react2.default.createElement(
                    'div',
                    { className: 'heading-container' },
                    _react2.default.createElement(
                        _reactstrap.Container,
                        null,
                        _react2.default.createElement(
                            'h2',
                            null,
                            this.props.section.heading
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Container,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Row,
                        null,
                        this.props.section.blurb && _react2.default.createElement(
                            _reactstrap.Col,
                            { sm: 12, className: 'blurb' },
                            this.props.section.blurb
                        ),
                        _react2.default.createElement(
                            _reactstrap.Form,
                            { action: "https://formspree.io/" + this.state.email,
                                method: 'POST' },
                            this.state.fields,
                            _react2.default.createElement('input', { type: 'submit', value: 'Send', 'class': 'halcyon-button' })
                        )
                    )
                )
            );
        }
    }]);

    return Forms;
}(_react2.default.Component);

exports.default = Forms;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".formModule .blurb{margin-bottom:1rem}.formModule form .form-control{border:0;min-height:36px;-webkit-box-shadow:3px 3px 6px rgba(0,0,0,.2);box-shadow:3px 3px 6px rgba(0,0,0,.2);border-radius:20px;font-family:Flama,sans-serif}.formModule form .form-group.type-select label{width:100%}.formModule form .form-control::-webkit-input-placeholder{color:#4e5859}.formModule form .form-control::-moz-placeholder{color:#4e5859}.formModule form .form-control:-ms-input-placeholder{color:#4e5859}.formModule form .form-control:-moz-placeholder{color:#4e5859}.formModule form .form-control:focus::-webkit-input-placeholder{color:#8f1838}", ""]);

// exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactSlick = __webpack_require__(8);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _helpers = __webpack_require__(5);

var _helpers2 = _interopRequireDefault(_helpers);

__webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var slides = [];

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(FeaturedContentCarousel, _React$Component);

    function FeaturedContentCarousel(props) {
        _classCallCheck(this, FeaturedContentCarousel);

        return _possibleConstructorReturn(this, (FeaturedContentCarousel.__proto__ || Object.getPrototypeOf(FeaturedContentCarousel)).call(this, props));
    }

    _createClass(FeaturedContentCarousel, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            var section = this.props.section;

            slides = section.slides.map(function (slide, index) {
                return _react2.default.createElement(
                    'div',
                    { 'data-index': index, key: index },
                    _react2.default.createElement(
                        'div',
                        { className: 'slide', key: index },
                        _react2.default.createElement(
                            'div',
                            { className: 'left' },
                            slide.image.url ? _react2.default.createElement('img', { src: slide.image.url, alt: slide.image.alt }) : ""
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'right' },
                            _react2.default.createElement(
                                'div',
                                { className: 'inner-wrapper' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'content-wrap' },
                                    slide.heading ? _react2.default.createElement(
                                        'h4',
                                        null,
                                        (0, _reactHtmlParser2.default)(slide.heading)
                                    ) : "",
                                    slide.blurb ? _react2.default.createElement(
                                        'p',
                                        null,
                                        (0, _reactHtmlParser2.default)(slide.blurb)
                                    ) : "",
                                    slide.button ? _react2.default.createElement(
                                        _reactStatic.Link,
                                        { className: 'halcyon-button', to: _helpers2.default.convertLink(slide.button.url, _this2.props.title.toLowerCase()) },
                                        slide.button.title ? _react2.default.createElement(
                                            'div',
                                            null,
                                            (0, _reactHtmlParser2.default)(slide.button.title)
                                        ) : _react2.default.createElement(
                                            'div',
                                            null,
                                            _helpers2.default.getTitleFromUrl(slide.button.url, _this2.props.title.toLowerCase())
                                        )
                                    ) : ""
                                )
                            )
                        )
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var settings = {
                infinite: true,
                speed: 500,
                draggable: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: true
                    }
                }]
            };

            return _react2.default.createElement(
                'div',
                { className: 'featuredContentCarousel' },
                this.props.section.heading && _react2.default.createElement(
                    'div',
                    { className: 'heading-container' },
                    _react2.default.createElement(
                        _reactstrap.Container,
                        null,
                        _react2.default.createElement(
                            'h2',
                            null,
                            this.props.section.heading
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Container,
                    { className: 'carousel' },
                    _react2.default.createElement(
                        _reactSlick2.default,
                        settings,
                        slides
                    )
                )
            );
        }
    }]);

    return FeaturedContentCarousel;
}(_react2.default.Component));

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".featuredContentCarousel .carousel{margin:2rem auto}.featuredContentCarousel .carousel .slick-arrow:before{content:none}.featuredContentCarousel .carousel .store:focus{outline:none}.featuredContentCarousel .carousel .slick-slide{padding:0 3rem;text-align:center}.featuredContentCarousel .carousel .slick-arrow{content:\"\";border:solid #4f4b48;border-width:0 2px 2px 0;display:inline-block;padding:3px;top:25%}.featuredContentCarousel .carousel .slick-arrow.slick-next{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);right:1rem;z-index:1}.featuredContentCarousel .carousel .slick-arrow.slick-prev{-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);left:1rem;z-index:1}@media screen and (min-width:768px){.featuredContentCarousel .carousel .slick-slide{text-align:left}.featuredContentCarousel .carousel .slick-arrow{top:50%}.featuredContentCarousel .carousel .slide{display:-ms-flexbox;display:flex}.featuredContentCarousel .carousel .slide .left{width:50%;margin-right:1rem;position:relative;overflow:hidden}.featuredContentCarousel .carousel .slide .right{width:50%;background-color:#edece2;margin-left:1rem;padding:2rem;min-height:400px}.featuredContentCarousel .carousel .slide .right .inner-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%;background:#fff;padding:2rem}.featuredContentCarousel .carousel .slide .left img{position:absolute;max-width:none;width:auto;min-width:100%;min-height:100%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}}", ""]);

// exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _barIcon = __webpack_require__(79);

var _barIcon2 = _interopRequireDefault(_barIcon);

var _foodHallIcon = __webpack_require__(80);

var _foodHallIcon2 = _interopRequireDefault(_foodHallIcon);

var _restaurantIcon = __webpack_require__(81);

var _restaurantIcon2 = _interopRequireDefault(_restaurantIcon);

var _iconOpenTable = __webpack_require__(82);

var _iconOpenTable2 = _interopRequireDefault(_iconOpenTable);

var _reactFontawesome = __webpack_require__(6);

var _fontawesomeFreeBrands = __webpack_require__(83);

var _freeSolidSvgIcons = __webpack_require__(7);

var _helpers = __webpack_require__(5);

var _helpers2 = _interopRequireDefault(_helpers);

__webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var excerpt;
var regex = /(<([^>]+)>)/ig;

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(DiningDirectory, _React$Component);

    function DiningDirectory(props) {
        _classCallCheck(this, DiningDirectory);

        return _possibleConstructorReturn(this, (DiningDirectory.__proto__ || Object.getPrototypeOf(DiningDirectory)).call(this, props));
    }

    _createClass(DiningDirectory, [{
        key: 'compressText',
        value: function compressText(store) {
            excerpt = store.replace(regex, "").substr(0, 200);
            excerpt = excerpt.substr(0, excerpt.lastIndexOf(" "));
            return excerpt + "...";
        }
    }, {
        key: 'render',
        value: function render() {
            var stores = this.props.stores;

            return _react2.default.createElement(
                'div',
                { className: 'diningDirectory' },
                _react2.default.createElement(
                    'div',
                    { className: 'heading-container' },
                    _react2.default.createElement(
                        _reactstrap.Container,
                        null,
                        _react2.default.createElement(
                            'h2',
                            null,
                            this.props.section.heading
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Container,
                    { className: 'diningRows' },
                    stores.map(function (store, index) {
                        return store.acf.store_type == "restaurant" ? _react2.default.createElement(
                            'div',
                            { key: index, className: 'store-single' },
                            _react2.default.createElement(
                                'div',
                                { className: 'image-wrapper' },
                                _react2.default.createElement('img', { className: 'hidden-xs', src: store.acf.featured_image })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'content-wrapper' },
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'store-title' },
                                    (0, _reactHtmlParser2.default)(store.title.rendered)
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'hours' },
                                    'Hours: Mon-Sun 8am-10pm'
                                ),
                                store.acf.store_copy ? _react2.default.createElement(
                                    'div',
                                    { className: 'hidden-xs' },
                                    (0, _reactHtmlParser2.default)(_helpers2.default.compressText(store.acf.store_copy, 200))
                                ) : ''
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'action-corner' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'social-container hidden-xs' },
                                    store.acf.open_table ? _react2.default.createElement(
                                        'a',
                                        { className: 'open-table', href: store.acf.open_table, target: '_blank' },
                                        _react2.default.createElement('img', { src: _iconOpenTable2.default, alt: 'open table logo' })
                                    ) : "",
                                    store.acf.twitter ? _react2.default.createElement(
                                        'a',
                                        { className: 'social-icon', href: store.acf.twitter, target: '_blank' },
                                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _fontawesomeFreeBrands.faTwitter, className: 'icon' })
                                    ) : "",
                                    store.acf.facebook ? _react2.default.createElement(
                                        'a',
                                        { className: 'social-icon', href: store.acf.facebook, target: '_blank' },
                                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _fontawesomeFreeBrands.faFacebookF, className: 'icon' })
                                    ) : "",
                                    store.acf.instagram ? _react2.default.createElement(
                                        'a',
                                        { className: 'social-icon', href: store.acf.instagram, target: '_blank' },
                                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _fontawesomeFreeBrands.faInstagram, className: 'icon' })
                                    ) : ""
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'icon-container' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'restaurant-type' },
                                        store.acf.restaurant_type == 'restaurant' && _react2.default.createElement('img', { src: _restaurantIcon2.default, className: 'diningIcon icon' }),
                                        store.acf.restaurant_type == 'bar' && _react2.default.createElement('img', { src: _barIcon2.default, className: 'barIcon icon' }),
                                        store.acf.restaurant_type == 'food-hall' && _react2.default.createElement('img', { src: _foodHallIcon2.default, className: 'foodHallIcon icon' })
                                    ),
                                    store.acf.street_address ? _react2.default.createElement(
                                        'a',
                                        { className: 'visible-xs', href: "//maps.google.com/?q=" + store.acf.street_address, target: '_blank' },
                                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarkerAlt, className: 'icon' })
                                    ) : "",
                                    store.acf.phone_number ? _react2.default.createElement(
                                        'a',
                                        { className: 'visible-xs', href: store.acf.phone_number },
                                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faPhone, className: 'icon' })
                                    ) : ""
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'button-wrapper' },
                                    _react2.default.createElement(
                                        _reactStatic.Link,
                                        { to: '/dining/' + store.slug + '/', className: 'halcyon-button arrow' },
                                        'View Details'
                                    )
                                )
                            )
                        ) : "";
                    })
                )
            );
        }
    }]);

    return DiningDirectory;
}(_react2.default.Component));

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAxCAYAAABODiB6AAAAAXNSR0IArs4c6QAABA1JREFUaAXtmVuITVEYxx2Uy2DcRi6DcZkSJs0gyjSumSJFKQ/IrSTyIMoLNSXlyQNNmsKLCG/kjYgHMTS5RLnmPm65X0Zm5vj9t7WmPcs5Y+85Z585U/PVb771rcu3/nudfdY+s1enTkksHo+XQhU8BFk9PIXzsAumJRma+WrEFMFVCGKn6TQq8yp9MyJgE2hFw9h7Ohf70kRejNkZmHgz5X029vmTlA+YeB1+BXyHHFMn9w0qoU5BAqunTmP8fCX+DG/gdSwW+40PZJ5os1LVjOhqRj3BH4GdoKT5JNUn8JiybocNMBgqIF32hURvoRbuwQ24BteZuxHfZFb0LWqKTO1z/AxQglfQH9bAXbgKDZBHoo9cxFrKB8HLg9dKXgfXelAxBga4DQHiD/Q5C6fghHcBTLwA/KYdo7uS4feYhhp8pSmfUZuMuBhumHq5b9Dlb2vyv/TJgXyYCGWwHHbAIbgEvyGRXfCy0rI/QetL6vSlLASboM7024rfDrdN7HeNBPpkUjJy5MIJf2JTPuclJtAqWjtM4ZEN8BL63Re3VHxC4/qU1DKYHCNhC2hX8ls1QS/lj1F4hx+oACuHi7AKtkEhBDHd+1XwET4ZtDu41o2KPj76UR4K+TAcCqAnuHaZinLuZ+1SnmhtU0ommwrDYCnMh0HQ1qYdZDaC9SX3TCutVRpi4vd4u+qmqk3dHWYvRbA+vSbrTElbmTVX8E8ajsEiWAJ6GGTKtPXOcQV7k7PS28C1a1RshFy/QuLJ8BWitudMUOCfu1mZxjx4BXpY7IXxzTo4Ae3TIeiOQtfQVsuIAmfa1EOS6oEQhXAJHpu6wiQZjPCf+HTZWxJFJ9heB5PMg19pUC3B42zeyD2TLQT7qG+Nfj35MifYrgiTLoaw/zzoAj+A/XVp02XOM/kyCCP8U5sKtktjhDfg/2cSXGLHtblHzEpoSbgeTtkj2K6YEa7f1q5pb8+eVw9WsPWI2+0qJp5l27PSI3CuI/pLuoTqV15UFncSu7HTHDyMUnRwFSF7ZlJ0u1zpdinavtAJeTP82z3K28MV2S5XukP0vzdNltdEeU+7l/7fF5PugGRxlKLdL2IyDaHroxQdWkzQAR2ig65Uqv06VjrVFQw63p5mBe2ftB8/+HVOo3fbI0AvycvAbz3pU0FFI9yCc7wR9V6SUw5lrdqWmFy31RTQi3f9kzoJRkMYk/j7cNOgC7nJhbzAp9cQrEOidxCVPSPx6pZUh1ppkumM5CXoXDBK05FKb1a9PtEkoXYPkuggaCYcBx2Optt0lHIUSpIJ1oShVloD/MbK6wX8bJgABTDKeH0pW7IfND6CB6Aj5Rq4EvR+Tkk0EyU0LkbnfX19aJfS72md2bxAnA6kWm1/ALcMM7GqQ07kAAAAAElFTkSuQmCC"

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAAAAXNSR0IArs4c6QAABSpJREFUaAXVmFuIVlUUx/101AoterEIopeiBzOmHjQqaBC7Gd0LEqNQpClLFJrAQrLRSsjKSLqplZWaYlcvWA4RoYKIYEEJvYTQg/gSNaWOl5x+/8NZw54zZ5+zz/ftU9OC/7fXXnvttdf/7MvZ5xsxokbp7+9/BpwAd9Q4TH2hSXwhMBGRW+obrYbIJLzAsnfK/w8RDwHjIiJTa3hu8UKS4GOWbUHZN2yJBBIwbseGHRESmm3ZVSg1I9fHWwctRCKRTnCmQvKu61Eq/y0REtAMFBFQ2x5QJCIypYXn2HxXBp4Jiggo8TmgAT5QpUD+pO3fJcKAIQQW2CPCX0RWgSLppfFa61NryUDBBPC9DPSAC5UU5UpQJDq16iXCAPeBsiW0ME14Er5HgET7YkxqX55Y/D8i0iHf6EJgETjtHztpeVYDo00Ev2V8v6JuRJ7LtGWrOn47opIg4AxQRqC7gIAl+SVKW+r3tBk9pYhMj0KEQGXHqHJYFkBAfhKXyOLE4v85SdNtLREhQMhdaEUFApbuZpRRab9lZvSUp7A3R4SOizxBXXMzBKy/S2SFGT2liNxdaUboUHaCaKyVTcyA+rmyjsrINE4ZEe3J+4OI4FgWTEnEIKA4kipEdLzPLiSCQwiB5RFmQMm78h6VRhr3TbfBo8/LJYJzCIEl6UDt+GffA57xgs0f41mFyKODiNC57IRQJl0OgT9kqEFExE6tshnR0pqREEGZFZBMEQFdpcsudwFDDLh8hhZKRKfWVboi/DzQPV95omAGjtPlRaDTbEN+d6/1J1peAkvBgYyXiNibvWxG1oqELlw+Sa7TNGoPZJeQnoJm4A3QBZTMJ6BMdOV+BCTrP31AbdSzfbdhCyHyrc7oXcm6GvqzuNFovEagdpq+A+c6LqfQ307r+ykvAifAPrAe+OQ0DdOJuwr0mxO67C9YPS31lv6C8UfTPhf9rUy7VQ+KxFPgL7NQ9oFZdFziISDX0fpBfgBXAyUvYseACL8K8qSLuLvzGrAdz7GLyHaHyMsZn1+pd9uRNp7KjeBisJWBfikggMuAPI92AEwAR8D5QMn0gsvBK8DkEMqlxP7bDG7JeNp7yUvUtaf6Tsrb6asL4TXoHeAg2IlND32o4KgPmuwewJQr2g+Twc1gGtDDSAS9G5gsNXu2xGEcOGSOnrIH+3nZvqprOeXJgxjdPZDnYza9wSeD38HZPJkea6DUPjFxl6zZrNyIcolVPOU07MIQ8ZHw2YcESA1aBldCYGvG4QKnftjRE5UnOx6so6K1HyK5ebWF9Az0eYeE+iDyEWU75fdgPvpJ+h9G/1BxqF9HcQ6YBJ4EOtniCwOFXMVxy5Ufseod8rqbGXX9bbMatCK5V/Hc6XEHb0KfSB/N8ONke4XTX/ecOU49mloHCSWnd8Y9LCHNylgBfQO21WqMLXWQ0Nv3TpLWHwJ6D60B2ieanU6wCUSVmBtbiZ0BD0BgR5q0nr6t43Ho+k6eCcaCu0AUiT0TnRD4VMuH7LYAI6Bkb01tmh3Z1R5FYpKYB4E1EDiLzHYAJZ2VmzDoxaarx73gc1CPkEjVI3a+MhEB8A0ok3dx0JE7CuhrLlTcmS0mT0R9rIRKcmziPAaEELC4a1FGApFZb8aSMpdEjOW0kYF1QGiNTy1+PINaH6b2PtCG3zuopWLFdzoNfLAExNuGj/bBlADfrMtDGISWxEeiStAbqjjX4etbTlVmoo68KsX0kdBLazhKb15SvuWkDacr9HASXee/zkvoH/fyJU7Y4DP5AAAAAElFTkSuQmCC"

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAAAXNSR0IArs4c6QAAA89JREFUeAHtmF1IFUEUxzWjooyM6qEIvEVQgX1BgSRB9VYvfYCvZRQUQdFrYCAEJfTQg2+JDxn2XBARRJCP0QeWFmJGQlJgVEr0Ld5+J+6Nce/OdRZnZvfCHPjfO3vmzJn/+e/O7uxWVQULCgQFggJBgcpSIJ/PN4D7oBNsqSz2lthS+GNQtFFLaSsrDdX/KSpQ+F9aWRVYYEvhw4oI3yykLEkxp8STPUe/QumZ0rbWnGstk6VEnPV5pNoLNhSwWUm9lv4ujgfBS9BbXV3t5OpQ5vTXpLh6cAl8BKY2QWAHWO+PqYOZKGABaAeTYDZ2jcGLHVB0mxLSTeDNbCqPjH3P8T63rC1mh+wxMNuzH9Hg3+EUvxcsUnWTCpKX49hb9nWTL5tPP4idsFxsuXStJqex2iTIVgxs15BrACy0lXOGPJP0N/IYfVouzvflchMyvgSQumUf1IP4svfQmjcRINIMi0YtE3cdsoc4WS69l+WAACL2MJDlkIZ9YtJ63e7S15VwEBJpCSCiLwMt0ogzXyLsj5vcs0+7ifK1HMYoeIXnoqPT/cJRy5KQJ8Y0c34lcD+QG1PaAkjR80GTNKLmXAQmzEUnTfG4Pm5uHyKsjJs4JV8sFx8fVX5QcG9KRUen/Rp1hOOCAk6fDtwUtzLPkqypzRNi2pXpTAQEyFH826wJUOCzDSH6Msot0EpNAWfLYaaKCpuo48TtAHE8TnPJvjLIs5OYU2A1aGaMvCxl3xDgMPgOdDZOR4OuEvqWgrNgEBRtlEadbkxm/JCsAVeKrJX/ftptoBUcArEfXvDvAjfAT6BaFweZewqVCA/JOvBAZa60j5YMKDiIWQ7OgNdKfLE5QmOPbqypP24tmo41joOoXNp3QOzeHb+84T0CeaCavPTIPaNGddKeAh3gPPcA2ZFm2xBgHZA1bsuGSLTdZtWJ3h2YPMfkB4DuBnRb3YQQL1daD7CxXuU7QDu4yBy/+fdvFLQbmFhbkR3BR0wGGMS8IGZTMW9q/5C4ZUBWQv5vlWkPGI7RhfXRcQ4sSq1wdWKIPNQxjfplHL7aqN/weIy4q2CjOr/LdqJ7QkIiuQTxssbl6XEd3GXNl3wHTJArcahLEaKPtThyT3BK4T0U/iUuwIfPpQg6/h+kaNBJ4UO6IJ9+lyK8oxApWL7rTYB7oFv+KV42O5kxZyJQ6GeqXJWZSssQ8fG1ucz02egKInAekogwbnjenhvGVV4YmxfZNpu8CLVUWnWJXqURIUeBAp2NcEMc0XUGf1AgKBAUCAoEBYICQYGgQFAgKBAUqGQF/gKkI2WwImiYYgAAAABJRU5ErkJggg=="

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAA+FJREFUSA21V2tIVEEUPnN31zR7SGJalN1e2rut0OpPrv3ogT0siIgK7V8EBVZ/o/ZHYX9aIQgiwg16EVIbQS+KLIrMiFaISsNaQWvTrLWW2rW8t3OmvZfZ6+69u2gDszP3zHfON+fMmccySLF48kqcqiSVMcYqYyquWBvAlldVVX37Pz+7HpNbNswK4SlYVo2Yw1hlrKkWLwLdNcGmgJlCUnIkdaFiPVYZa/pFVUPAWB1OwJ1MOSF5zFsiHnpRVT9Eo+U1IX/IaGwQ+YmCZV4UVhmBQ/wOoH65cRkk0Sh5/B+IiUIGVb3myXHmiHw6ubDG4vjw9RlzQmamRzSok6sAXnHgP/WrY05y85w8Fu4p6RBKDjvkzSuC7IK8dNQAw697zxMOkyyAnZTIZ29ZCwuqNkP+gllAE6Dyq/cbvL16Fx4fPQUD0X7rySjKppruZh+jkwtstpeWGozBujPHYEaFKym0t/U9+HYcgB+dwaQYGsAlPrc/2FQtgSS5SGBVSvdVmRKTfm7xNNh8qQ5sIzJMzTFV3UgA2+rRk2sx5LIZ2jEyCzZ4j4Mtw2EG42NZ43JA+f0Hup6aBJOxzDWjJj3Us120mu+cA8WbVoFkt3HxzPUrwZE9UoTwtX195Sb0vGqLk9PHnK0Vg2SJBHb0ukwcoNBtu3WWiyYsnguNhzw8nCKG+o/cJ6GlvoGLdz44D7mzpuuQsYUTYUTOGIiGvuuyBB15kOfjimQdp20je+bgNfzW3qHjwsEvel/rZGRnad1krWxbPWrSLvReP/a+vgvAn58RwBsJmuvqIfyph3s+paw0zsjEkvkQ/R6G3KKpsGTPdoSjlVgZiEThSe1pUBVFEyVq3Qz3eKMx9EYkhZRCm2p503Ab7ux1W8HLKewBK1Tv23Z4d+O+FYyPk7cvTqUw0UjELzFF8aVi9d7BWujr6LKE0in35U27KQ6fWy10v0vQ399oiowN0vpeXFUNH+49SQgPf+yGm7sPodcXEo6LQlxmL33zLEn3AVG4ogToLKBzoC/QBd2vWuFrW4DsWRb0ug+T00kPC06Ot5qMQj8Kx1pqDx1AD8sjZIbvcz4LfOwN3a65BfIaIhGdh3uuqZzIX0reL9S+h70dGFhU0/Pcr9mNO+FYNOrC665DGxzmdpdITLbjyCn9MRQu2grDThxs8hpt/ru2BOmdcGdojSPvsmq3T8CJOIWhtLs8sxVlOb5abidSjltzI4Aee2igLt084KSUwJhcif4saDym5BrIM760Ev8kVuLjr9JsO9JyoUEv3jI+4x8EzZbYpkQuKghPXxnlVBuxAnrpN/OSYww/fwHmdkwZsj0YhAAAAABJRU5ErkJggg=="

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".diningDirectory .diningRows .social-container{display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:end;justify-content:flex-end}.diningDirectory .diningRows .social-icon{background:#8f1838;padding:1rem;border-radius:50%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px;margin-right:1rem}.diningDirectory .diningRows .social-icon .icon{font-size:2rem;color:#fff}.diningDirectory .restaurant-type{width:40px;margin-right:4rem}.diningDirectory .restaurant-type .icon{height:40px;width:40px;border-radius:50%;padding:.5rem}.diningDirectory .restaurant-type .foodHallIcon{background:#4e5859}.diningDirectory .restaurant-type .diningIcon{background:#8f1838}.diningDirectory .restaurant-type .barIcon{background:#9daf8a}.diningDirectory .icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:2rem 0}.diningDirectory .icon-container .icon{font-size:3.25rem;color:#4e5859;margin-right:4rem}.diningDirectory .store-single{padding:1rem;-webkit-box-shadow:3px 3px 10px #ccc;box-shadow:3px 3px 10px #ccc;border-radius:10px;margin-bottom:1rem;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.diningDirectory .button-wrapper .halcyon-button{margin:1rem 0;background:#8f1838}.diningDirectory .store-single .content-wrapper .hours{font-size:1.4rem}.diningDirectory .store-single .content-wrapper .store-title{font-size:1.8rem}.diningDirectory .store-single:hover{background-color:#edece2;-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);-webkit-box-shadow:3px 5px 20px #aaa;box-shadow:3px 5px 20px #aaa}.diningDirectory .button-wrapper .halcyon-button:hover{color:#8f1838;background:#fff}.diningDirectory .button-wrapper .halcyon-button:hover:after{border-color:#8f1838}@media screen and (min-width:768px){.diningDirectory .store-single .image-wrapper{position:relative;overflow:hidden;min-height:160px;width:25%;display:inline-block}.diningDirectory .store-single .image-wrapper img{position:absolute;height:100%;width:auto;max-width:none;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.diningDirectory .store-single{display:-ms-flexbox;display:flex;padding:2rem 2rem 2rem 6rem;position:relative}.diningDirectory .store-single .content-wrapper{width:50%;margin-left:2rem}.diningDirectory .icon-container .restaurant-type{position:absolute;left:1rem;top:38%;width:80px}.diningDirectory .icon-container .restaurant-type .icon{width:60px;height:60px}.diningDirectory .store-single .action-corner{width:25%;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;margin-left:2rem}.diningDirectory .diningRows .open-table{margin-right:1rem;width:31px;height:31px}}@media screen and (min-width:1200px){.diningDirectory .icon-container .restaurant-type .icon{width:80px;height:80px}.diningDirectory .icon-container .restaurant-type{top:33%}}", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactFontawesome = __webpack_require__(6);

var _freeSolidSvgIcons = __webpack_require__(7);

__webpack_require__(86);

var _helpers = __webpack_require__(5);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var categories = [];
var categoryId = '';
var storeAmount = [];
var salesArray = [];
var globalHours = [];
var globalHolidayHours = [];

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(ShoppingDirectory, _React$Component);

    function ShoppingDirectory(props) {
        _classCallCheck(this, ShoppingDirectory);

        var _this = _possibleConstructorReturn(this, (ShoppingDirectory.__proto__ || Object.getPrototypeOf(ShoppingDirectory)).call(this, props));

        _this.state = {
            search: '',
            dropdownOpen: false,
            selectedCategory: 'Filter by Category',
            amount: 5,
            stores: [],
            default: []
        };
        _this.toggle = _this.toggle.bind(_this);
        _this.loadMore = _this.loadMore.bind(_this);
        return _this;
    }

    _createClass(ShoppingDirectory, [{
        key: 'toggle',
        value: function toggle() {
            this.setState(function (prevState) {
                return {
                    dropdownOpen: !prevState.dropdownOpen
                };
            });
        }
    }, {
        key: 'loadMore',
        value: function loadMore() {
            this.setState({
                amount: this.state.amount + 10
            });
        }
    }, {
        key: 'setCategory',
        value: function setCategory(test) {
            this.setState({
                selectedCategory: test
            });
            categoryId = this.props.storeCategories.map(function (category) {
                if (category.slug == test) {
                    return category.id;
                }
            });
            categoryId = categoryId.filter(function (el) {
                return el != null;
            });
        }
    }, {
        key: 'offerAvailable',
        value: function offerAvailable(slug) {
            var _this2 = this;

            this.props.sales.map(function (sale) {
                if (sale.acf.related_store.post_name == slug) {
                    if (_this2.inDateRange(sale)) {
                        salesArray.push(sale);
                    }
                }
            });
        }
    }, {
        key: 'inDateRange',
        value: function inDateRange(sale) {
            var today = new Date().getTime();
            var from = new Date(sale.acf.start_date.substring(0, 4) + '/' + sale.acf.start_date.substring(4, 6) + '/' + sale.acf.start_date.substring(6, 8)).getTime();
            var to = new Date(sale.acf.end_date.substring(0, 4) + '/' + sale.acf.end_date.substring(4, 6) + '/' + sale.acf.end_date.substring(6, 8)).getTime();
            var withinRange = today >= from && today <= to;
            return withinRange;
        }
    }, {
        key: 'isSale',
        value: function isSale(store) {
            var result = false;
            for (var i = 0; i < salesArray.length; i++) {
                if (salesArray[i].acf.related_store.post_name == store.slug) {
                    result = true;
                }
            }
            return result;
        }
    }, {
        key: 'handleSearch',
        value: function handleSearch(query) {
            this.setState({ search: query });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var el = document.getElementsByClassName('storeRow');
            if (storeAmount.length > el.length || storeAmount.length < this.state.amount) {
                document.getElementById('loadMore').style.display = 'none';
            }
            if (categoryId == '' && this.state.search == '' && this.state.amount <= el.length + 1) {
                document.getElementById('loadMore').style.display = 'inline-block';
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this3 = this;

            var storeCategories = this.props.storeCategories;
            categories = storeCategories.map(function (category) {
                return _react2.default.createElement(
                    _reactstrap.DropdownItem,
                    { onClick: function onClick() {
                            _this3.setCategory(category.slug);
                        } },
                    category.slug
                );
            });
            this.props.stores.map(function (store) {
                _this3.offerAvailable(store.slug);
            });

            storeAmount = this.props.stores.slice(0, this.state.amount).map(function (store) {
                if (store.acf.store_type == "retailer") {
                    return store;
                }
            });
            storeAmount = storeAmount.filter(function (el) {
                return el != null;
            });

            if (this.props.centerInfo.acf.standard_hours) {
                for (var i = 0; i < this.props.centerInfo.acf.standard_hours.length; i++) {
                    globalHours.push(this.props.centerInfo.acf.standard_hours[0]);
                }
            }
            if (this.props.centerInfo.acf.alternate_hours) {
                for (var i = 0; i < this.props.centerInfo.acf.alternate_hours.length; i++) {
                    globalHolidayHours.push(this.props.centerInfo.acf.alternate_hours[0]);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                'div',
                { className: 'shoppingDirectory' },
                _react2.default.createElement(
                    'div',
                    { className: 'heading-container' },
                    _react2.default.createElement(
                        _reactstrap.Container,
                        null,
                        _react2.default.createElement(
                            'h2',
                            null,
                            this.props.section.heading
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Container,
                    { className: 'shoppingRows' },
                    _react2.default.createElement(
                        'div',
                        { className: 'controls-container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'filter' },
                            _react2.default.createElement(
                                _reactstrap.Dropdown,
                                { isOpen: this.state.dropdownOpen, toggle: this.toggle },
                                _react2.default.createElement(
                                    _reactstrap.DropdownToggle,
                                    { caret: true },
                                    this.state.selectedCategory
                                ),
                                _react2.default.createElement(
                                    _reactstrap.DropdownMenu,
                                    { left: true },
                                    _react2.default.createElement(
                                        _reactstrap.DropdownItem,
                                        { onClick: function onClick() {
                                                _this4.setCategory('Filter by Category');
                                            } },
                                        'Reset'
                                    ),
                                    categories
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'search' },
                            _react2.default.createElement('input', { className: 'search-bar', placeholder: 'Search...', value: this.state.search, onChange: function onChange(event) {
                                    return _this4.handleSearch(event.target.value);
                                } })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        this.props.stores.slice(0, this.state.amount).map(function (store) {
                            if (store.acf.store_type == "retailer") {
                                if (categoryId == '' && _this4.state.search == '') {
                                    return _react2.default.createElement(
                                        'div',
                                        { key: store.id, className: store.id + ' storeRow', categories: store.imag_taxonomy_store_category[0] ? store.imag_taxonomy_store_category : "-1", slug: store.title.rendered },
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                _reactStatic.Link,
                                                { to: '/shopping/' + store.slug + '/' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    { className: 'store-title' },
                                                    store.title.rendered ? _react2.default.createElement(
                                                        'div',
                                                        null,
                                                        (0, _reactHtmlParser2.default)(store.title.rendered)
                                                    ) : null
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'red-text' },
                                            store.acf.flags ? _react2.default.createElement(
                                                'div',
                                                null,
                                                store.acf.flags[0] + '!'
                                            ) : "",
                                            _this4.isSale(store) ? _react2.default.createElement(
                                                'div',
                                                null,
                                                'Offer Available'
                                            ) : ""
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'center-container' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'store-phone' },
                                                store.acf.phone_number ? _react2.default.createElement(
                                                    'a',
                                                    { href: store.acf.phone_number },
                                                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faPhone, className: 'icon visible-xs' }),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'hidden-xs' },
                                                        store.acf.phone_number
                                                    )
                                                ) : null
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'store-directions' },
                                                store.acf.street_address ? _react2.default.createElement(
                                                    'a',
                                                    { href: 'https://maps.google.com/?q=' + store.acf.street_address, target: '_blank' },
                                                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarkerAlt, className: 'icon' })
                                                ) : ""
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'hours' },
                                                _helpers2.default.getHours(store, globalHours, globalHolidayHours)
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'button-wrapper' },
                                            _react2.default.createElement(
                                                _reactStatic.Link,
                                                { to: '/shopping/' + store.slug + '/', className: 'halcyon-button arrow viewStoreButton' },
                                                _react2.default.createElement(
                                                    'div',
                                                    null,
                                                    'View Store'
                                                )
                                            )
                                        )
                                    );
                                } else {
                                    if (categoryId == '' && _this4.state.search != '') {
                                        if (store.title.rendered.toLowerCase().includes(_this4.state.search.toLowerCase())) {
                                            return _react2.default.createElement(
                                                'div',
                                                { key: store.id, className: store.id + ' storeRow', categories: store.imag_taxonomy_store_category[0] ? store.imag_taxonomy_store_category : "-1", slug: store.title.rendered },
                                                _react2.default.createElement(
                                                    'div',
                                                    null,
                                                    _react2.default.createElement(
                                                        _reactStatic.Link,
                                                        { to: '/shopping/' + store.slug + '/' },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'store-title' },
                                                            store.title.rendered ? _react2.default.createElement(
                                                                'div',
                                                                null,
                                                                (0, _reactHtmlParser2.default)(store.title.rendered)
                                                            ) : null
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'red-text' },
                                                    store.acf.flags ? _react2.default.createElement(
                                                        'div',
                                                        null,
                                                        store.acf.flags[0] + '!'
                                                    ) : "",
                                                    _this4.isSale(store) ? _react2.default.createElement(
                                                        'div',
                                                        null,
                                                        'Offer Available'
                                                    ) : ""
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'center-container' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'store-phone' },
                                                        store.acf.phone_number ? _react2.default.createElement(
                                                            'a',
                                                            { href: store.acf.phone_number },
                                                            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faPhone, className: 'icon visible-xs' }),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'hidden-xs' },
                                                                store.acf.phone_number
                                                            )
                                                        ) : null
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'store-directions' },
                                                        store.acf.street_address ? _react2.default.createElement(
                                                            'a',
                                                            { href: 'https://maps.google.com/?q=' + store.acf.street_address, target: '_blank' },
                                                            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarkerAlt, className: 'icon' })
                                                        ) : ""
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'hours' },
                                                        _helpers2.default.getHours(store, globalHours, globalHolidayHours)
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'button-wrapper' },
                                                    _react2.default.createElement(
                                                        _reactStatic.Link,
                                                        { to: '/shopping/' + store.slug + '/', className: 'halcyon-button arrow viewStoreButton' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            null,
                                                            'View Store'
                                                        )
                                                    )
                                                )
                                            );
                                        }
                                    } else if (String(store.imag_taxonomy_store_category[0]).includes(categoryId[0]) && _this4.state.search == '') {
                                        return _react2.default.createElement(
                                            'div',
                                            { key: store.id, className: store.id + ' storeRow', categories: store.imag_taxonomy_store_category[0] ? store.imag_taxonomy_store_category : "-1", slug: store.title.rendered },
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    _reactStatic.Link,
                                                    { to: '/shopping/' + store.slug + '/' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'store-title' },
                                                        store.title.rendered ? _react2.default.createElement(
                                                            'div',
                                                            null,
                                                            (0, _reactHtmlParser2.default)(store.title.rendered)
                                                        ) : null
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'red-text' },
                                                store.acf.flags ? _react2.default.createElement(
                                                    'div',
                                                    null,
                                                    store.acf.flags[0] + '!'
                                                ) : "",
                                                _this4.isSale(store) ? _react2.default.createElement(
                                                    'div',
                                                    null,
                                                    'Offer Available'
                                                ) : ""
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'center-container' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'store-phone' },
                                                    store.acf.phone_number ? _react2.default.createElement(
                                                        'a',
                                                        { href: store.acf.phone_number },
                                                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faPhone, className: 'icon visible-xs' }),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'hidden-xs' },
                                                            store.acf.phone_number
                                                        )
                                                    ) : null
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'store-directions' },
                                                    store.acf.street_address ? _react2.default.createElement(
                                                        'a',
                                                        { href: 'https://maps.google.com/?q=' + store.acf.street_address, target: '_blank' },
                                                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarkerAlt, className: 'icon' })
                                                    ) : ""
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'hours' },
                                                    _helpers2.default.getHours(store, globalHours, globalHolidayHours)
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'button-wrapper' },
                                                _react2.default.createElement(
                                                    _reactStatic.Link,
                                                    { to: '/shopping/' + store.slug + '/', className: 'halcyon-button arrow viewStoreButton' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        null,
                                                        'View Store'
                                                    )
                                                )
                                            )
                                        );
                                    } else if (String(store.imag_taxonomy_store_category[0]).includes(categoryId[0]) && _this4.state.search != '') {
                                        if (store.title.rendered.toLowerCase().includes(_this4.state.search.toLowerCase())) {
                                            return _react2.default.createElement(
                                                'div',
                                                { key: store.id, className: store.id + ' storeRow', categories: store.imag_taxonomy_store_category[0] ? store.imag_taxonomy_store_category : "-1", slug: store.title.rendered },
                                                _react2.default.createElement(
                                                    'div',
                                                    null,
                                                    _react2.default.createElement(
                                                        _reactStatic.Link,
                                                        { to: '/shopping/' + store.slug + '/' },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'store-title' },
                                                            store.title.rendered ? _react2.default.createElement(
                                                                'div',
                                                                null,
                                                                (0, _reactHtmlParser2.default)(store.title.rendered)
                                                            ) : null
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'red-text' },
                                                    store.acf.flags ? _react2.default.createElement(
                                                        'div',
                                                        null,
                                                        store.acf.flags[0] + '!'
                                                    ) : "",
                                                    _this4.isSale(store) ? _react2.default.createElement(
                                                        'div',
                                                        null,
                                                        'Offer Available'
                                                    ) : ""
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'center-container' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'store-phone' },
                                                        store.acf.phone_number ? _react2.default.createElement(
                                                            'a',
                                                            { href: store.acf.phone_number },
                                                            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faPhone, className: 'icon visible-xs' }),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'hidden-xs' },
                                                                store.acf.phone_number
                                                            )
                                                        ) : null
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'store-directions' },
                                                        store.acf.street_address ? _react2.default.createElement(
                                                            'a',
                                                            { href: 'https://maps.google.com/?q=' + store.acf.street_address, target: '_blank' },
                                                            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarkerAlt, className: 'icon' })
                                                        ) : ""
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'hours' },
                                                        _helpers2.default.getHours(store, globalHours, globalHolidayHours)
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'button-wrapper' },
                                                    _react2.default.createElement(
                                                        _reactStatic.Link,
                                                        { to: '/shopping/' + store.slug + '/', className: 'halcyon-button arrow viewStoreButton' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            null,
                                                            'View Store'
                                                        )
                                                    )
                                                )
                                            );
                                        }
                                    }
                                }
                            }
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'loadmore-button', id: 'loadMore', onClick: this.loadMore },
                        'Load More'
                    )
                )
            );
        }
    }]);

    return ShoppingDirectory;
}(_react2.default.Component));

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".shoppingDirectory .shoppingRows .storeRow{padding:1rem;-webkit-box-shadow:3px 3px 10px #ccc;box-shadow:3px 3px 10px #ccc;border-radius:10px;margin-bottom:1rem;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.shoppingDirectory .shoppingRows .storeRow .store-title{color:#4e5859}.shoppingDirectory .shoppingRows .storeRow .red-text{color:#8f1838;font-size:1.4rem;font-family:Flama,sans-serif}.shoppingDirectory .button-wrapper .halcyon-button{margin:1rem 0;background:#8f1838}.shoppingDirectory .button-wrapper .halcyon-button:hover{color:#8f1838;background:#fff}.shoppingDirectory .button-wrapper .halcyon-button:hover:after{border-color:#8f1838}.shoppingDirectory .shoppingRows .storeRow .center-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:1rem 0}.shoppingDirectory .shoppingRows .storeRow .store-directions a,.shoppingDirectory .shoppingRows .storeRow .store-phone a{font-size:3.25rem;margin-right:4rem;display:block}.shoppingDirectory .shoppingRows .storeRow .store-directions .icon,.shoppingDirectory .shoppingRows .storeRow .store-phone .icon{color:#4e5859}.shoppingDirectory .shoppingRows .storeRow .center-container .hours{font-size:1.4rem;font-family:Flama,sans-serif}.shoppingDirectory .storeRow:hover{background-color:#edece2;-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);-webkit-box-shadow:3px 5px 20px #aaa;box-shadow:3px 5px 20px #aaa}", ""]);

// exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _helpers = __webpack_require__(5);

var _helpers2 = _interopRequireDefault(_helpers);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var videoId;
var iframeMarkup;

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(ContentWithFeaturedVideo, _React$Component);

    function ContentWithFeaturedVideo(props) {
        _classCallCheck(this, ContentWithFeaturedVideo);

        return _possibleConstructorReturn(this, (ContentWithFeaturedVideo.__proto__ || Object.getPrototypeOf(ContentWithFeaturedVideo)).call(this, props));
    }

    _createClass(ContentWithFeaturedVideo, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            videoId = _helpers2.default.getVideoUrl(this.props.section.youtube_url);
            iframeMarkup = '<iframe width="100%" height="315" src="//www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.section.heading && _react2.default.createElement(
                    'div',
                    { className: 'heading-container' },
                    _react2.default.createElement(
                        _reactstrap.Container,
                        null,
                        _react2.default.createElement(
                            'h2',
                            null,
                            this.props.section.heading
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Container,
                    { className: 'contentWithFeaturedVideo' },
                    _react2.default.createElement(
                        _reactstrap.Row,
                        { className: this.props.section.display_options == 'video-left-content-right' ? 'content-right' : 'content-left' },
                        _react2.default.createElement(
                            _reactstrap.Col,
                            { sm: 6, lg: 7, className: 'image-column' },
                            (0, _reactHtmlParser2.default)(iframeMarkup)
                        ),
                        _react2.default.createElement(
                            _reactstrap.Col,
                            { sm: 6, lg: 5, className: 'content-column' },
                            this.props.section.heading && _react2.default.createElement(
                                'div',
                                { className: 'heading' },
                                _react2.default.createElement(
                                    'h2',
                                    null,
                                    this.props.section.content_heading
                                )
                            ),
                            this.props.section.description && _react2.default.createElement(
                                'div',
                                { clasName: 'content' },
                                (0, _reactHtmlParser2.default)(this.props.section.description)
                            ),
                            this.props.section.button ? _react2.default.createElement(
                                _reactStatic.Link,
                                { className: 'halcyon-button', to: _helpers2.default.convertLink(this.props.section.button.url, this.props.title.toLowerCase()) },
                                this.props.section.button.title ? _react2.default.createElement(
                                    'div',
                                    null,
                                    (0, _reactHtmlParser2.default)(this.props.section.button.title)
                                ) : _react2.default.createElement(
                                    'div',
                                    null,
                                    _helpers2.default.getTitleFromUrl(this.props.section.button.url, this.props.title.toLowerCase())
                                )
                            ) : ""
                        )
                    )
                )
            );
        }
    }]);

    return ContentWithFeaturedVideo;
}(_react2.default.Component));

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _emailIcon = __webpack_require__(89);

var _emailIcon2 = _interopRequireDefault(_emailIcon);

var _locationIcon = __webpack_require__(90);

var _locationIcon2 = _interopRequireDefault(_locationIcon);

var _phoneIcon = __webpack_require__(91);

var _phoneIcon2 = _interopRequireDefault(_phoneIcon);

__webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(SiteHeader, _React$Component);

    function SiteHeader(props) {
        _classCallCheck(this, SiteHeader);

        return _possibleConstructorReturn(this, (SiteHeader.__proto__ || Object.getPrototypeOf(SiteHeader)).call(this, props));
    }

    _createClass(SiteHeader, [{
        key: 'render',
        value: function render() {
            var options = this.props.centerInfo;

            return _react2.default.createElement(
                'div',
                { id: 'mobileFloatingNav' },
                _react2.default.createElement(
                    'a',
                    { href: options.acf.google_map_directions_url },
                    _react2.default.createElement('img', { src: _locationIcon2.default })
                ),
                _react2.default.createElement(
                    'a',
                    { href: 'mailto:' + options.acf.email },
                    _react2.default.createElement('img', { src: _emailIcon2.default })
                ),
                _react2.default.createElement(
                    'a',
                    { href: 'tel:' + options.acf.phone },
                    _react2.default.createElement('img', { src: _phoneIcon2.default })
                )
            );
        }
    }]);

    return SiteHeader;
}(_react2.default.Component));

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAiCAYAAAAge+tMAAAAAXNSR0IArs4c6QAACCFJREFUWAnN2HlQFFcaAPCvj+k5uIKYjbsKJhVlxQjJcqiYzZZSagXigcmOQZKsxmQpd2uJqyJEQBgOD0o0m41uri03hoQJjkaBBVJUqsCNUbNqNKISwyX3LSAOTHdPd+97Lc0OzHCVJaT/mJ5587r7119/7+hHgLIZDOTq8ltbNGr1S7xgDRIFwUX5a6r2BEmadRrNNXN/34m7zc1/Ly0ttSoWAn8Ji4yczQCccHV2mRu+apWLl+cskmFQyRRvPM9DQ2MTFBYX8909PXW9/X1hhTk5P2EWodfrGYFRX3/Gz9czbts2DUmSUFdfD+a+vilmA7g6O8NsLy+wWq1w+KOP4btLl2qFe71PmkwmgbZQVKKbTuu1IzpaXVFVBbvT0iVBFOUnMeXyAUD8ju3w5zffgLKbN2Z29ltiUHEGjXL6hRXLQtQ6rRb+8+23gNGSCL/PP248OdXwMH3kMzQlXdl78BDkGrMhdMVK+kRu7usYTvIcv+CJ2V6yccvmzfDbxYtFiiKy1kZELJpKeHhExOOMiij0mTeP/eJfR2UKdlosljk4vUlRkhiNRgOV1TVw5do1iHkrmlyyaBFDEGTJVOExGkjqnN9T8933JCaoa27XwvXyctBqtCBJEtWnUjmRSlR5Kw8p+zPg0pUrGE8p+NUvv+yv1JmMvS06KS5O82NFBexKSUGRZodcfhCulKYfyESN4OYgniKpM5OFH46+VVEJSXv2SvdtA7sBqB2cougvDfv2Swo+eOFCDcav1et9lZt7GPvQF1+ZpaQHjnRVTQ0k7cVoYqCTGNrR2cGh714UAcRnGF9+6yfYufUtGuNBxZx9WHiMVmvgPM5pBZ2Yli4CSHl3Guo2OAqUPRzV+vLzrI0gQRa6Y1HBLwkK0j0MPEZrtMQFhJ5uixYlMZ+0WF4qXboU3YD95hCOqkmnsj/bJAri8WF4Lcav3rBhnv2pJl6ioH3n+3jYogVR+Aqj8Qg50llHguP60invOa+IopCL8XhURWmjQpHXUgR57kHxw9G36+oAp4dVEEruNDSsHQ2NcaPBAQwGkeY4PcYnpKYJCn5xYKDTg+AdoeNTUgWMpjk2zHYWiJGOttHh6Ah5QoPw+PEp+Ni/bmUU/Bq9fo6jE49UNhKa461nMRpdjxvpWNvyMeG4MsZ3NTaG81bhm527k6D69m1Q8CStOjdePEbj3kPJ6dr6BtgenwAsx13uZujnx4vGpnHBccVeb29CAkmuz/NWIAjiPj4oyHU8eAWt9B4URYGaUeFT44151Gwe2lHfLx/xc1zwgKgo1ax75iKGpp/NTE9Dc2RPNDjsg6oaOfLqxQN4eeRzcKnh6KaWFkhISwM3Nzf4x8FM0Op0C3iGKUGTJ62Dwx0WjQkPDQ1Vy2iVaune5CRq1syZgHJd/KGsDN42GIRa9NKB0kb9bHCwC1D0NTQ9WGl7pTXr1y9Dc7gf/J/2k/vp1vZ2iE02WK/fLIe4ZIOI8ZmpKbRO5xQwEfyocIxm3N2LGYTebzAMomvq6sySJC5Er1ZfxSUlcw1NTRAT/RdNdFSUC6NiCta9+tqd8MjIiy+++loHpWKK/7hpo/vu2FhNR2cnoDbC9vf1lVoF4jco8l0K/mB62iB+qV7vbHvzjr6PCFfQarVmCUb/csZjcqQxGvUwwfk5ORfz5v16Tb/FkrVtVzz7dekZCPndc/D5Pz+mU96Oc98UGRm4O3anB/4dumIF8c358xAdG8feM5vzepqbQgtN2Vd5dPMK3tnJCTDexcnZ341WlY6Fdwi3RR9Aj3HGY79Q0HdltNF4Q44C6ufzc754k+PYde8fPdodn5bOnr1wAZwQ4vnly+ERlAYXLl6E1IwM7t33P+i19LOv5xmz1yv9dEF2djXGN7e0dODIY3zmnnSVq4uL31h4evhjENRo0+lOaTTa4AxDMj3dwwN2GVLE+sambpFjl+SbTLeGH4OiXxQeHv7E9Rs3YyqrKkNZlvNDdfC5BTXDlHM8V2QliH0Fx41dw4/FeLTKgPH/Rfjp+5KTSIyPSUj0g97e0tCKipDhx+DfdhFHbz7FGI0bjC2ak4SgPAdo5aSnT5/uzs8xJpqOHQvge7qdURsIuKtRO5s+PeabazTGIqAdWjm2MDu7lkWRb2ltbUNtRkTvwXLk0RPzU0twRqlnu7eDoz/nY7S7u7scadTwOjEaR8b2wNG+FxUVsegpfF/6ySeW0erZ/ofxHGsJbOvoaFLwB3HauLouuF9vjBeJI5kHCNxF4fRA6HaLODG0LWai3/9tMjVaBWtge2dnM8arVCo4tCd9IJ2Hjk+DEXdzdYUP3/2bPCigXJMwGkUgAEdiooAHqZ9nNLai998A1HXWYzweYY8eOQyPekwbclpSRdNdXd098KsZMwC3aoxua29vxmgcgSG1J+kHxrNWPhDjUb8v4/GKVld3F5AEwRV4e/fQkgSXK6url68MWQaHP/wIrdU1EiCJO4Ci5q6KiJg7SVa7y6BlCLDwXAwKounQ4SOQmhAPFVXVoNaoy+XpNpowffB1SUlI+KoXyC1vbAY0oFiulpUZB3PI7pSTW/CUj49l65+2aO50dUFBcbHIcux7WCBnvP4PG79DXZ//rh3baU80F2ltawPUuidX6OBqHtOmySmM+njY/847QmNzS+XJrE99UFVJbrGW/j59cyt/cmtsnP/Tvr7C416eqp/DMjM3sMz8/dWrAkqdH3mQ1mE0vsf/9zEDC/sEIYURJPWcJIquuMJUbmjJ24wmeJf7Wcvp3paW95SpAjb9DzkwNeO+XtZNAAAAAElFTkSuQmCC"

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAAAXNSR0IArs4c6QAAA4pJREFUSA21lm1oTmEYxz3bmJHW1l40RkI0eSkTjURK2RcfpsS+8IGihijJp+ULecvLBwlN+Wbii7YkoRBSk5IxmmVmYd4lhuP3Pzvvz30ez9Fc9XvOdf//13Xfz3Oec+5zUkMyhGVZudgLoQ7mQgWUwTvogTY4B5dTqVQ/x2TBAiOgAV6AGz9IOuEWdIDGbrwm2QmFWa9E8VhoB8VHaIT5MDQ4CeMcmA07QAspemBqsM6YUzQZXoHiNBQZCyMidSNhLyjew5xIiT/ELIRnoGj0newz+tbBb+iDccZOjFZQHDAWZCnSv9WexbIecMwPtSHUO+Z1jjkh8x8GzNHszLfda0fIB/2JP2GSZwQS9Co4Ag+hH3R6zsP0QJmXopfBF9DFVGwbJCtAccqrDCToi0FNii64Bvc0ILRgfaDcS9F3qYDYYoskJ+2hZS3zqpwEfQrofumF6qDPWFfoS9BitUFPOdpMULTYHskd0GkbZig+ga7QzpAW6PNs17KupJkIeLq/tIPYA32rbnsQ+UD/APo1qYjlDfHug36VtqdQoN11vJSusFLQ3mUKbSlP2ccsk+lo7Rz1RSYaavocr0QL9UK5oUhSJ4yO8VzZ7dWC0dAGrHir83gTFHkDmv+Jdth2LGuVr/oZXiXotLX6qp+hv4EuWyHZA4qlfslAhlYNulB072wA72Ymr4EOUCwx9E4YsKxmd6FZjnAmWqwx3lrH1+ExHISroNCX2BbT595HKz2f4iegm7LEEwMJeh1cgl/gRhtJTaDMS9G123TDdygIGpsRFMc80ZDgV8ACHQ22J+HrGaU46olKEHJB51t/bFXITDigvxS+widIf54h1oLiNsTeoH9bl94mUGyKrcV0t/eG2KIMBv06rQr9f/FfFrMctO18hjEZ5kyzqC+A56ArcVpaQVSgaA0ojBtltN4dU3/I7kryhKahxWna6E6U6Uitbl5dSHpeDc9UG/Io1hNST8dvMD5kRgb4egPSAlrIeF9FWsJDmlaD4gbE/rF4x1VE7AvPkGBE8wV7Ct5sTG14ixz/Ece0B6epx6jRXAx6R9MpDL2BMi4CvWxqW5phnCCJyCTLQaH3NO9RQn5RItGYZL6MtUzWpBmJ3SrkuN4eDewi3qMj4yTZmEwavLJ0n+lUai+rzKY/UQ2T6l4JhvHNKNGkccWsst9Z6WxczaDoLJIHehUeNSgT/o9J/gDCbDvxg6e0rgAAAABJRU5ErkJggg=="

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAAAXNSR0IArs4c6QAABARJREFUWAmtl3toTmEcx72MWbk3Mrc2ya2UkCa5/acmJLdCDX+tECGhXP7yB+KPtcWy8I/UJpdotdSEueRSzGVhW8hc2twm970+3+M8r3POzjk777zf+vQ8z+92zvuc53nOeWOdUqB4PN5ImQxogHq7vRCLxSrpRxeFMqEU3sNx6B4lm7hTcA++glP3GayCbu3WIWg2vAWnrjLo0W6yHUBsDIbAHDgDv0GqgSGBdXAuUxT6CSuhN5wF6Sb0CkwOcZA3FI6C1Ajj24Rj7ALP4RvMNAH000BTK92FvsbnbfFNgUkwGNJ8/Buxt0IzZLn8GApAKnQ5GGDTzZ2QE2kaM70xGmN/rQBbWgeHYYQzlrEei3xVTruSK0Ea7nLYA+x6rscUgK5AzBuHbTMcAM2Yplr6BUudsYzXyoE2JOwMNP1NCYNPB79uogKkqT4hCRP+rrAc3oGmPd846WtGa+E7jLHsdD7BUxPk1+LXDVwDFczxi/HaiBsGdaCFPcH46S8Aqciy0blhDUP2Kn5NsVRuCkVpiZ+hJPQMrDOFVrOgxSi6aA2UgjTZryj20aAp+wAD/GLCbOScBmmhiaNfbFni8bzOGGtsRyLABNrtMVqdZOs4Wt96fFGGhXbQIkfwZbufqxnQs9KK1Vro6Qiyutj066U8ry/KmDytny/w2MTTnwZSsbnIob/j+DYTZFrs121f3NiSbcl/DC0mj362XbPMsjHQLOiXvgHXi4OxfkErSDtNkWRa8krgosmh3w+qYI+x6VFsB+lgwmh3sPWCOtCNzPf6UzKmcGfQ20+a5y2KbSR8BM3UbK8/JWMK61G0gBak6yzXBbDlghaUbmJuSi7qLULh1SA9gTZvQGzTQS8VnXDOreUt1fExhc2uqKaf7q2EbRZoprQmCrz+/x5TVOvhPEh/t4qnKvaJoE83aavHbQ2xa7WvgCXg2l1+8S4bCRlwG6R/28URhX0saOtKJ8H6fKPVD9gEOuCM6ulkO9Lb75KQCQ0grfHLwK6Fe0cBqB5WwSWQtJjXg74VpBcQ/G0YcIERJOndLu0OiOmGbwdodxhV0hlk4unvsh36QQONPVJLgm5Cdy/pc6vNV5EKYVecFnC+X2HsZia0w/r7xQTaSMiCRyCVQ9fA4BAHeUUqgB6AtWZCwt0uEvqAvgulW5Dtjog2Iu+ICiDfxR1ahaR0OKds9BmSfjeQM0HJqCL0YkFOErXNtsAPkEog6t84be9aJaGkb951TxQYBw9VCb0E/QEJfK749MVcBtJxV7GODiikR7IfdCxL2vt7YTHooOoOOfZYH6dSPXTo717gfVJQW3AfNEGYdGImzgff/Rx4lQgOiuvlNQv0x2MU5EAzvIJyPmyraRP6Azw9QgOh+4I4AAAAAElFTkSuQmCC"

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("html-entities");

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactstrap = __webpack_require__(2);

var _PageSearch = __webpack_require__(35);

var _PageSearch2 = _interopRequireDefault(_PageSearch);

var _EventSearch = __webpack_require__(34);

var _EventSearch2 = _interopRequireDefault(_EventSearch);

var _StoreSearch = __webpack_require__(36);

var _StoreSearch2 = _interopRequireDefault(_StoreSearch);

__webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fullWidth = {
  width: '100%'
};

var theContent;
var searchBar;

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
  _inherits(SearchComponent, _React$Component);

  function SearchComponent(props) {
    _classCallCheck(this, SearchComponent);

    var _this = _possibleConstructorReturn(this, (SearchComponent.__proto__ || Object.getPrototypeOf(SearchComponent)).call(this, props));

    _this.state = {
      term: ''
    };
    return _this;
  }

  _createClass(SearchComponent, [{
    key: 'hideContent',
    value: function hideContent() {
      var width = document.body.clientWidth;
      if (width >= 768) {
        document.getElementsByClassName('content')[0].style.display = 'none';
      }
    }
  }, {
    key: 'showContent',
    value: function showContent() {
      var width = document.body.clientWidth;
      theContent = document.getElementsByClassName('content')[0];
      if (width >= 768) {
        if (theContent == undefined || theContent == null) {
          return;
        } else {
          theContent.style.display = '';
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (typeof document !== 'undefined') {
        return _react2.default.createElement(
          'div',
          { id: 'searchComponent' },
          _react2.default.createElement(
            _reactstrap.Container,
            null,
            _react2.default.createElement('input', { className: 'search-bar', placeholder: 'Search...', value: this.state.term, onChange: function onChange(event) {
                return _this2.setState({ term: event.target.value });
              } }),
            _react2.default.createElement(
              'div',
              { id: 'theResults' },
              this.state.term != '' ? _react2.default.createElement(
                'div',
                null,
                this.hideContent(),
                _react2.default.createElement(_PageSearch2.default, { searchResult: this.state.term }),
                _react2.default.createElement(_EventSearch2.default, { searchResult: this.state.term }),
                _react2.default.createElement(_StoreSearch2.default, { searchResult: this.state.term })
              ) : _react2.default.createElement(
                'div',
                null,
                this.showContent(),
                ' '
              )
            )
          )
        );
      } else {
        return null;
      }
    }
  }]);

  return SearchComponent;
}(_react2.default.Component));

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#searchComponent{position:relative;top:90px}#searchComponent .search-bar{position:relative;z-index:5}#theResults img{max-width:100%}#theResults{overflow:hidden}@media screen and (max-width:767px){#searchComponent{display:none;position:absolute;top:0;right:0;left:0;bottom:0;background-color:#fff;z-index:4}#searchComponent .search-bar{top:80px;border:1px solid #333}#theResults{top:80px;position:relative}}", ""]);

// exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Nav = __webpack_require__(97);

var _Nav2 = _interopRequireDefault(_Nav);

var _reactGtmModule = __webpack_require__(112);

var _reactGtmModule2 = _interopRequireDefault(_reactGtmModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(SiteHeader, _React$Component);

    function SiteHeader(props) {
        _classCallCheck(this, SiteHeader);

        return _possibleConstructorReturn(this, (SiteHeader.__proto__ || Object.getPrototypeOf(SiteHeader)).call(this, props));
    }

    _createClass(SiteHeader, [{
        key: 'render',
        value: function render() {
            var options = this.props.centerInfo;
            var tagManagerArgs = {
                gtmId: this.props.centerInfo.acf.google_tag_manager_ID
            };

            if (typeof document === 'undefined') {
                return null;
            } else {
                return _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        _reactStatic.Head,
                        null,
                        _react2.default.createElement('meta', { charSet: 'utf-8' }),
                        _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://use.typekit.net/osv0bnv.css' }),
                        _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', charset: 'UTF-8', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' }),
                        _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' }),
                        options.acf.favicon ? _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/png', href: options.acf.favicon.url }) : ""
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'hidden' },
                        tagManagerArgs ? setTimeout(_reactGtmModule2.default.initialize(tagManagerArgs), 1) : ""
                    ),
                    _react2.default.createElement(_Nav2.default, null)
                );
            }
        }
    }]);

    return SiteHeader;
}(_react2.default.Component));

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _MenuItems = __webpack_require__(98);

var _MenuItems2 = _interopRequireDefault(_MenuItems);

var _reactstrap = __webpack_require__(2);

var _halcyonNavLogo = __webpack_require__(107);

var _halcyonNavLogo2 = _interopRequireDefault(_halcyonNavLogo);

var _navToggle = __webpack_require__(108);

var _navToggle2 = _interopRequireDefault(_navToggle);

var _reactFontawesome = __webpack_require__(6);

var _freeSolidSvgIcons = __webpack_require__(7);

var _eyeballDark = __webpack_require__(109);

var _eyeballDark2 = _interopRequireDefault(_eyeballDark);

var _fontawesomeSvgCore = __webpack_require__(110);

__webpack_require__(111);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_fontawesomeSvgCore.config.autoAddCss = false;


var isContrast = false;

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: 'changeContrast',
    value: function changeContrast() {
      if (!isContrast) {
        document.getElementById("footerCopyright").style.background = "#000";
        document.getElementsByTagName("footer")[0].style.backgroundColor = "#fff";
        document.getElementsByTagName("footer")[0].style.borderTop = "1px inset #000";
        document.getElementsByClassName("navWrapper")[0].style.webkitFilter = "grayscale(100%)";
        isContrast = true;
      } else {
        document.getElementById("footerCopyright").style.background = "#4E5859";
        document.getElementsByTagName("footer")[0].style.backgroundColor = "#EDECE2";
        document.getElementsByTagName("footer")[0].style.borderTop = "none";
        document.getElementsByClassName("navWrapper")[0].style.webkitFilter = "none";
        isContrast = false;
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var width = document.body.clientWidth;
      if (width <= 767) {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }
  }, {
    key: 'searchToggle',
    value: function searchToggle() {
      var x = document.getElementById("searchComponent");
      if (x.style.display === "none" || x.style.display == '') {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var logo = this.props.centerInfo.companyLogo;

      return _react2.default.createElement(
        'div',
        { className: 'navWrapper' },
        _react2.default.createElement(
          _reactstrap.Navbar,
          { color: 'white', dark: true, fixed: 'top', expand: 'lg' },
          _react2.default.createElement(
            _reactstrap.Container,
            null,
            _react2.default.createElement(
              'div',
              { className: 'navRow' },
              _react2.default.createElement(
                'div',
                { className: 'nav-inner' },
                _react2.default.createElement(
                  'div',
                  { className: 'left visible-xs' },
                  _react2.default.createElement(
                    'div',
                    { className: 'search-toggle', onClick: this.searchToggle },
                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSearch })
                  ),
                  _react2.default.createElement('img', { className: 'eyeball', src: _eyeballDark2.default, onClick: this.changeContrast })
                ),
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/' },
                  _react2.default.createElement(
                    'div',
                    { className: 'nav-logo visible-xs' },
                    _react2.default.createElement('img', { src: _halcyonNavLogo2.default, alt: 'halcyon logo' })
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.NavbarToggler,
                  { className: 'visible-xs', onClick: this.toggle },
                  _react2.default.createElement(
                    'span',
                    null,
                    'MENU'
                  ),
                  _react2.default.createElement('img', { src: _navToggle2.default })
                ),
                _react2.default.createElement(
                  _reactstrap.Collapse,
                  { isOpen: this.state.isOpen, navbar: true },
                  _react2.default.createElement(
                    _reactstrap.Nav,
                    { className: 'ml-auto', navbar: true },
                    _react2.default.createElement(_MenuItems2.default, { toggle: this.toggle }),
                    _react2.default.createElement(
                      _reactstrap.NavItem,
                      { className: 'hidden-xs logo', href: '/' },
                      _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/' },
                        _react2.default.createElement('img', { src: _halcyonNavLogo2.default })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react2.default.Component));

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactRouterBootstrap = __webpack_require__(99);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactSvg = __webpack_require__(100);

var _reactSvg2 = _interopRequireDefault(_reactSvg);

var _directions_icon = __webpack_require__(101);

var _directions_icon2 = _interopRequireDefault(_directions_icon);

var _cinebistro_icon = __webpack_require__(102);

var _cinebistro_icon2 = _interopRequireDefault(_cinebistro_icon);

var _Dining = __webpack_require__(103);

var _Dining2 = _interopRequireDefault(_Dining);

var _events_icon = __webpack_require__(104);

var _events_icon2 = _interopRequireDefault(_events_icon);

var _shopping_icon = __webpack_require__(105);

var _shopping_icon2 = _interopRequireDefault(_shopping_icon);

var _signup_icon = __webpack_require__(106);

var _signup_icon2 = _interopRequireDefault(_signup_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
				_inherits(MenuList, _React$Component);

				function MenuList(props) {
								_classCallCheck(this, MenuList);

								return _possibleConstructorReturn(this, (MenuList.__proto__ || Object.getPrototypeOf(MenuList)).call(this, props));
				}

				_createClass(MenuList, [{
								key: 'render',
								value: function render() {
												var menus = this.props.menus;
												var toggle = this.props.toggle;


												return menus.items.map(function (menu, i) {
																return _react2.default.createElement(
																				'div',
																				{ key: i },
																				menu.children ? _react2.default.createElement(
																								_reactstrap.UncontrolledDropdown,
																								{ nav: true, inNavbar: true },
																								_react2.default.createElement(
																												_reactstrap.DropdownToggle,
																												{ nav: true, caret: true },
																												menu.title
																								),
																								_react2.default.createElement(
																												_reactstrap.DropdownMenu,
																												{ right: true },
																												menu.children.map(function (children, i) {
																																return _react2.default.createElement(
																																				_reactRouterBootstrap.LinkContainer,
																																				{ to: "/" + children.object_slug },
																																				_react2.default.createElement(
																																								_reactstrap.DropdownItem,
																																								{ key: 'children-' + i },
																																								_react2.default.createElement(
																																												_reactstrap.NavItem,
																																												null,
																																												_react2.default.createElement(
																																																_reactStatic.Link,
																																																{ to: "/" + children.object_slug, onClick: toggle, className: 'nav-link' },
																																																(0, _reactHtmlParser2.default)(children.title)
																																												)
																																								)
																																				)
																																);
																												})
																								)
																				) : _react2.default.createElement(
																								_reactstrap.NavItem,
																								null,
																								_react2.default.createElement(
																												_reactStatic.Link,
																												{ to: '/' + menu.object_slug, href: '/' + menu.object_slug, onClick: toggle, className: 'nav-link' },
																												menu.object_slug == 'hours-directions' ? _react2.default.createElement(
																																'div',
																																{ className: 'nav-icon directions' },
																																_react2.default.createElement(
																																				'svg',
																																				{ version: '1.1', xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px',
																																								viewBox: '0 0 200 200', 'enable-background': 'new 0 0 200 200' },
																																				_react2.default.createElement(
																																								'g',
																																								null,
																																								_react2.default.createElement('path', { fill: '#58595B', d: 'M146.1,50.8c0-11.3-9.2-20.4-20.4-20.4c-11.3,0-20.4,9.2-20.4,20.4c0,11.3,9.2,20.4,20.4,20.4 C137,71.2,146.1,62.1,146.1,50.8z M113.8,50.8c0-6.6,5.3-11.9,11.9-11.9c6.6,0,11.9,5.3,11.9,11.9c0,6.6-5.3,11.9-11.9,11.9 C119.1,62.7,113.8,57.4,113.8,50.8z' }),
																																								_react2.default.createElement('path', { fill: '#58595B', d: 'M170.8,64.2h-5.7c2.7-7.4,4.1-13.3,4.1-17.7c0-24-19.5-43.5-43.5-43.5c-24,0-43.5,19.5-43.5,43.5 c0,4.3,1.4,10.3,4.1,17.7H28.7c-5.6,0-10.2,4.6-10.2,10.2v113.4c0,5.6,4.6,10.2,10.2,10.2h142.1c5.6,0,10.2-4.6,10.2-10.2V74.4 C181,68.8,176.4,64.2,170.8,64.2z M111,155.7h34.2v33.8H111V155.7z M102.5,189.5H58.6v-33.8h43.9V189.5z M58.6,147.2v-22.5h24.8 c1.1,0,2.2-0.4,3-1.2l19.2-19.2c8.6,15.4,16.4,27.8,16.5,27.9c0.8,1.2,2.1,2,3.6,2c1.5,0,2.8-0.7,3.6-2c0.1-0.1,9.1-14.3,18.4-31.3 v0.1h24.8v46.2H58.6z M50.1,147.2H27v-22.5h23.1V147.2z M170.8,72.7c1,0,1.7,0.8,1.7,1.7v18.1h-20.4c3.8-7.3,7-13.9,9.6-19.8H170.8 z M125.7,11.5c19.3,0,35,15.7,35,35c0,15.1-22.7,55.2-35,75.4c-12.3-20.1-35-60.3-35-75.4C90.7,27.2,106.4,11.5,125.7,11.5z M101.4,96.5l-19.7,19.7H58.6V72.7h31.1C92.7,79.6,96.6,87.6,101.4,96.5z M28.7,72.7h21.4v43.5H27V74.4 C27,73.5,27.8,72.7,28.7,72.7z M27,187.8v-32.1h23.1v33.8H28.7C27.8,189.5,27,188.7,27,187.8z M170.8,189.5h-17.1v-33.8h18.8v32.1 C172.5,188.7,171.7,189.5,170.8,189.5z' })
																																				)
																																)
																												) : "",
																												menu.object_slug == 'cinebistro' ? _react2.default.createElement(
																																'div',
																																{ className: 'nav-icon cmx' },
																																_react2.default.createElement(
																																				'svg',
																																				{ 'data-name': 'Layer 1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 281.49 88.68' },
																																				_react2.default.createElement(
																																								'title',
																																								null,
																																								'CMX Logo'
																																				),
																																				_react2.default.createElement('polygon', { 'class': 'cls-1', points: '111.3 85.11 111.32 85.11 111.32 85.1 111.3 85.11' }),
																																				_react2.default.createElement('polygon', { 'class': 'cls-2', points: '264.56 3.78 234.27 3.78 249.69 25.82 264.56 3.78' }),
																																				_react2.default.createElement('path', { 'class': 'cls-3', d: 'M49,135.88A39.23,39.23,0,1,1,81.66,75l4.08-3.15a44.36,44.36,0,1,0,.69,48.49l-4.18-3A39.24,39.24,0,0,1,49,135.88Z', transform: 'translate(-4.63 -52.32)' }),
																																				_react2.default.createElement('path', { 'class': 'cls-3', d: 'M49,116.41A19.76,19.76,0,1,1,66.17,87L80.65,75.8a38,38,0,1,0,.56,40.82L66.38,106A19.75,19.75,0,0,1,49,116.41Z', transform: 'translate(-4.63 -52.32)' }),
																																				_react2.default.createElement('polygon', { 'class': 'cls-3', points: '176.02 85.11 150.1 85.11 176.04 43.61 176.02 85.11' }),
																																				_react2.default.createElement('rect', { 'class': 'cls-3', x: '89.24', y: '3.8', width: '5.11', height: '81.3' }),
																																				_react2.default.createElement('polygon', { 'class': 'cls-3', points: '151.84 3.8 132.44 35.27 113.05 3.8 95.62 3.8 95.62 85.11 111.65 85.11 111.65 38.41 132.44 70.24 132.81 70.24 175.66 4.34 176.03 3.8 151.84 3.8' }),
																																				_react2.default.createElement('polygon', { 'class': 'cls-4', points: '265.42 85.11 208.53 3.78 202.7 3.78 258.59 85.11 265.42 85.11' }),
																																				_react2.default.createElement('polygon', { 'class': 'cls-4', points: '181.15 3.78 207.89 43.77 180.02 85.11 208.64 85.11 222.62 63.16 236.49 85.11 257.05 85.11 201.16 3.78 181.15 3.78' }),
																																				_react2.default.createElement('path', { 'class': 'cls-4', d: 'M279.24,136.08c0,.58.43.81.95.81s.8-.28.8-.57a.45.45,0,0,0-.31-.46c-.26-.1-.61-.17-1.12-.31a1,1,0,0,1-.83-1c0-.75.69-1.1,1.37-1.1s1.44.41,1.44,1.2h-.65c0-.48-.36-.66-.82-.66-.3,0-.69.11-.69.49s.18.41.45.48l1.09.29a1,1,0,0,1,.73,1c0,.84-.75,1.18-1.5,1.18s-1.55-.41-1.57-1.35Z', transform: 'translate(-4.63 -52.32)' }),
																																				_react2.default.createElement('path', { 'class': 'cls-4', d: 'M282.21,133.58h.93l1,2.94h0l1-2.94h.92v3.76h-.63v-2.9h0l-1,2.9h-.55l-1-2.9h0v2.9h-.63Z', transform: 'translate(-4.63 -52.32)' })
																																)
																												) : "",
																												menu.object_slug == 'dining' ? _react2.default.createElement(
																																'div',
																																{ className: 'nav-icon dining' },
																																_react2.default.createElement(
																																				'svg',
																																				{ version: '1.1', xmlns: 'http://www.w3.org/2000/svg', x: '40px', y: '40px', viewBox: '0 0 200 200', 'enable-background': 'new 0 0 200 200' },
																																				_react2.default.createElement(
																																								'g',
																																								null,
																																								_react2.default.createElement('path', { fill: '#58595B', d: 'M195.5,22.9c0-1.6-0.8-3-2.1-4c-1.3-0.9-2.9-1.1-4.4-0.7c-2.7,0.9-6.4,2.9-9.2,7.7 c-4.5,7.7-8.1,28.2-11,62.6c-0.5,5.5,2.2,10.7,6.8,13.6l2.7,1.7c0.8,0.5,1.4,1.5,1.3,2.5l-1.1,65.3c0,2.8,1,5.5,3,7.5 c2,2,4.6,3.1,7.4,3.1c2.8,0,5.5-1.1,7.5-3.2c2-2,3-4.7,2.9-7.5L195.5,22.9C195.5,22.9,195.5,22.9,195.5,22.9z M192.4,175 c-1.7,1.8-4.8,1.8-6.6,0c-0.9-0.9-1.3-2.1-1.3-3.3l1.1-65.3c0.1-3-1.5-5.9-4.1-7.5l-2.7-1.7c-2.8-1.7-4.4-4.9-4.1-8.1 c3.5-41.2,7.5-55.4,10.2-60.2c1.5-2.6,3.3-3.9,4.8-4.6l3.9,147.4C193.7,172.9,193.2,174.1,192.4,175z' }),
																																								_react2.default.createElement('path', { fill: '#58595B', d: 'M32.4,100.1c0,36.8,29.9,66.7,66.7,66.7c36.8,0,66.7-29.9,66.7-66.7c0-36.8-29.9-66.7-66.7-66.7 C62.3,33.4,32.4,63.3,32.4,100.1z M159.9,100.1c0,33.6-27.3,60.9-60.9,60.9c-33.6,0-60.9-27.3-60.9-60.9 c0-33.6,27.3-60.9,60.9-60.9C132.6,39.2,159.9,66.5,159.9,100.1z' }),
																																								_react2.default.createElement('path', { fill: '#58595B', d: 'M102.3,50.5c17.5,0,33.4,9.7,41.4,25.3c0.5,1,1.5,1.6,2.6,1.6c0.4,0,0.9-0.1,1.3-0.3c1.4-0.7,2-2.5,1.3-3.9 c-9-17.6-26.8-28.5-46.6-28.5c-1.6,0-2.9,1.3-2.9,2.9C99.3,49.1,100.7,50.5,102.3,50.5z' }),
																																								_react2.default.createElement('path', { fill: '#58595B', d: 'M146.2,81.9c1.6,4.8,2.5,9.9,2.5,15c0,1.6,1.3,2.9,2.9,2.9c1.6,0,2.9-1.3,2.9-2.9c0-5.8-0.9-11.5-2.8-16.9 c-0.5-1.5-2.2-2.3-3.7-1.8C146.5,78.7,145.7,80.4,146.2,81.9z' }),
																																								_react2.default.createElement('path', { fill: '#58595B', d: 'M54.5,100.1c0,24.6,20,44.5,44.5,44.5c24.6,0,44.5-20,44.5-44.5s-20-44.5-44.5-44.5 C74.5,55.6,54.5,75.5,54.5,100.1z M99.1,61.4c21.3,0,38.7,17.4,38.7,38.7c0,21.3-17.4,38.7-38.7,38.7c-21.4,0-38.7-17.4-38.7-38.7 C60.4,78.8,77.7,61.4,99.1,61.4z' }),
																																								_react2.default.createElement('path', { fill: '#58595B', d: 'M8.4,179c2,2,4.6,3.1,7.4,3.1c2.8,0,5.4-1.1,7.4-3.1c2-2,3-4.7,2.9-7.5L23.7,77c4.9-1.3,8.5-5.8,8.5-11.1 v-8.1V21.1c0-1.6-1.3-2.9-2.9-2.9c-1.6,0-2.9,1.3-2.9,2.9v33.9h-3.5V21.1c0-1.6-1.3-2.9-2.9-2.9c-1.6,0-2.9,1.3-2.9,2.9v33.9h-2.5 V21.1c0-1.6-1.3-2.9-2.9-2.9c-1.6,0-2.9,1.3-2.9,2.9v33.9H5.3V21.1c0-1.6-1.3-2.9-2.9-2.9c-1.6,0-2.9,1.3-2.9,2.9v36.8V66 c0,5.3,3.6,9.7,8.5,11.1l-2.5,94.5C5.4,174.4,6.5,177,8.4,179z M5.3,66v-5.2h21.1V66c0,3.1-2.5,5.6-5.6,5.6c-0.8,0-1.5,0.3-2.1,0.9 c-0.5,0.6-0.8,1.3-0.8,2.1l2.5,97.1c0,1.2-0.4,2.4-1.3,3.3c-1.7,1.8-4.8,1.8-6.5,0c-0.9-0.9-1.3-2-1.3-3.3l2.5-97.1 c0-0.8-0.3-1.5-0.8-2.1c-0.5-0.6-1.3-0.9-2.1-0.9C7.8,71.6,5.3,69.1,5.3,66z' })
																																				)
																																)
																												) : "",
																												menu.object_slug == 'events' ? _react2.default.createElement(
																																'div',
																																{ className: 'nav-icon events' },
																																_react2.default.createElement(
																																				'svg',
																																				{ version: '1.1', xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px',
																																								viewBox: '0 0 200 200', 'enable-background': 'new 0 0 200 200' },
																																				_react2.default.createElement('path', { fill: '#58595B', d: 'M187.7,144.4l6.9-18.4l-5.6,1.7c-0.6,0.2-1.1,0.3-1.6,0.5c-0.1,0-0.2,0.1-0.2,0.1c-2.3-5.2-5.2-9.5-8.9-13.1 c-9.2-9.1-19.7-13.8-31.4-13.8c-4.1,0-8.3,0.6-12.6,1.7c-10.9,2.9-20.2,9.7-26.1,19.2c-5.9,9.4-8,20.7-6.1,31.9 c1.8,10.2,7.2,19.6,15.4,26.4c8.1,6.7,18.2,10.4,28.5,10.4c1.8,0,3.7-0.1,5.5-0.3c11.5-1.5,21.2-6.7,28.8-15.5 c3.1-3.6,5.5-7.5,7.1-11.6c0.5-1.4,0.4-3.7-0.9-4.9c-1-0.9-2.5-1.3-3.5-1.3c-0.4,0-0.8,0.1-1.2,0.1c-1.7,0.5-2.7,2.1-3.1,3.1 c-5.7,12.9-18.5,21.2-32.6,21.2c-2.3,0-4.6-0.2-6.8-0.7c-9.4-1.9-17.5-7.3-22.7-15.3c-5.3-8-7.1-17.6-5.1-27.1 c3.2-15.2,16.5-26.9,31.6-27.9c1-0.1,2-0.1,3-0.1c11.2,0,20.6,4.6,28,13.5c1.8,2.1,3.2,4.4,4.3,7l-7.1,2.5L187.7,144.4z' }),
																																				_react2.default.createElement('path', { fill: '#58595B', d: 'M164.8,161.5c0,1-0.3,2-1,2.8c-0.7,0.8-1.8,1.3-2.9,1.3c0,0,0,0,0,0c-1,0-1.9-0.3-2.6-1l-10-8.2 c-0.6,0.1-1.3,0.2-1.9,0.2c-4.8,0-8.7-3.9-8.7-8.7c0-2.8,1.4-5.5,3.7-7.1l1.1-17.9c0-2.1,1.8-3.8,3.9-3.8c2.1,0,3.9,1.7,3.9,3.8 l1.1,17.9c2.3,1.6,3.7,4.3,3.7,7.1c0,0.4,0,0.8-0.1,1.3l8.6,9.7C164.3,159.6,164.7,160.5,164.8,161.5z' }),
																																				_react2.default.createElement('path', { fill: '#58595B', d: 'M116.1,31.8c0,0.3,0,0.6,0,0.9c0,1.8,0.8,3.2,2.2,4.2c1.9,1.5,4,1.7,6.2,0.8c2.5-1.1,3.6-3.3,3.6-6 c0-5.7,0-11.4,0-17.1c0-0.9-0.2-1.9-0.5-2.7c-0.9-2.5-3.7-4.2-6.2-3.8c-2.9,0.4-5.2,2.6-5.3,5.5c-0.1,2.2-0.1,4.4,0,6.6 c-15.7,0-51.1,0.1-51.7,0.2c0,0.7,0,1.3,0,1.8c0,3.2,0,6.4,0,9.6C79.7,31.8,100.2,31.8,116.1,31.8z' }),
																																				_react2.default.createElement('path', { fill: '#58595B', d: 'M164.3,97.9c0-19.7,0-39.4,0-59.1c0-0.5,0-0.9,0-1.4c-0.4-8.4-6.3-15.3-14.5-16.9c-2.6-0.5-5.4-0.4-8.1-0.4 c-2.5-0.1-1.8,0-4.5,0V22c0,3.2,0,6.4,0,9.6c0,0.1,0,0.1,0,0.2h8.1c4.6,0,7.1,2.5,7.1,7.1v11.7H18.4V38.8c0-4.6,2.5-7.1,7.1-7.1 h17.1c0,0.8,0.1,1.7,0.4,2.4c0.9,2.7,3.5,4.3,6.5,4c2.7-0.3,4.9-2.6,5-5.4c0.1-3.2,0-6.5,0-9.7c0-3.2,0.1-6.4,0-9.6 C54.4,11,52.6,9,50.2,8.3c-4.1-1.2-7.7,1.8-7.7,6.4c0,1.8,0,3.7,0,5.5c-2.6,0-10.1,0-12,0c-3,0.1-6.1-0.2-9.1,0.3 c-9.1,1.6-15.1,9-15.1,18.5c0,36,0,72.1,0,108.1c0,10.9,7.9,18.8,18.8,18.8c24.5,0,49,0,73.5,0c-1.4-3.4-2.4-6.9-3.1-10.6 c-0.1-0.5-0.2-1-0.2-1.5c-23.3,0-46.6,0-69.9,0c-4.6,0-7.1-2.5-7.1-7.1c0-18,0-36,0-54c0-10.8,0-21.6,0-32.4h133.9 c0,10.8,0,21.6,0,32.4V95C156.4,95.5,160.4,96.4,164.3,97.9z' })
																																)
																												) : "",
																												menu.object_slug == 'shopping' ? _react2.default.createElement('img', { id: 'shoppingIcon', src: '' }) : "",
																												menu.object_slug == 'sign-up' ? _react2.default.createElement(
																																'div',
																																{ className: 'nav-icon sign-up' },
																																_react2.default.createElement(
																																				'svg',
																																				{ version: '1.1', xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px',
																																								viewBox: '0 0 200 200', 'enable-background': 'new 0 0 200 200' },
																																				_react2.default.createElement(
																																								'g',
																																								{ id: '_x32_' },
																																								_react2.default.createElement('path', { fill: 'none', stroke: '#58595B', 'stroke-width': '9', 'stroke-linecap': 'square', 'stroke-miterlimit': '10', d: 'M125.2,62.6 c0,0-23.9-18.6-46.9,0.6c-8,6.7-11.9,15.6-15.4,26.1c-6.3,19.1-8.9,60.2,19.2,60.2c12.1,0,28.4-6.6,38.4-32.9L125.2,62.6z' }),
																																								_react2.default.createElement('path', { fill: 'none', stroke: '#58595B', 'stroke-width': '9', 'stroke-linecap': 'square', 'stroke-miterlimit': '10', d: 'M120.7,120.8 c0.6,10.3,4.6,34.8,30,26.2c37.5-12.8,42.8-114.4-15.4-134.9C79.3-7.7,12.8,24.2,12.8,107.7c0,83.5,71.4,97.7,112.4,78.9' })
																																				)
																																)
																												) : "",
																												(0, _reactHtmlParser2.default)(menu.title)
																								)
																				)
																);
												});
								}
				}]);

				return MenuList;
}(_react2.default.Component));

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("react-svg");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAqCAYAAAA51uKRAAAAAXNSR0IArs4c6QAACgVJREFUWAntWHlUk1cWfyELsghoCJEQERcIaxABUZQiuIwbilSrVk8ZrHu1tlU7Wsce5485xbpWZfTooKhTWwXbQdGqBURZQgiETfY9yE5YkgDZM/cFv5yooII9Z+aPeee8vJff/b377ne/9+597yOhP6jodLqptVVVy+tFonm93d3M9o42czsms9/K2rqVxbLnubl5/ptEIlW9aTrSm4TvKuNlpv+1uPjZhnxhrmufTIbotgxkakpDCoUCdXV1IbMxZsjTi1vrM8P3xpygoMPD6X1vYwR8/j8vXjgXiUhkcnBwSJafv38Gx80tXS6XS58V5XMVKrX384YGl8ePU4PUKjVpzbqP07L5/PlHjhzRDmfUqPACYe75yA3rtZ9t3dyUmZ5+CF6V7VCKAB+f8TTt4O4d23o3rF2te5yanDQUb9RYeXl51Oef7ZDv2b2zt7mxcc+7KCopKTrw1Z7dsp1bN6uFwtzPXx1j8irwLv/hSe1y+Nnbe3q6TZeFrYxnTZz4AzEOZCZQuVDnQ/WGSiFkHh7c6BUrV8YODAyQ83PzNoGMRchwayAag2/rd3d2+pcWF/l6e/s0BwTMOkrwJRKJ7ZO01Gu5AgG3uamJYc9idXpP9ynp6OiIZDAYLZgXHDL/ZGFh4YrS0hJuY2N9EEA3ifGj8kxpWemC5uZmMtfHp9ja2lq/XeEpGY8ePvj99InjSySSXuY0Z5cW2FmMmDOnF8IaeQTyCXhS2N4NXC/vgvb2NlJNVe0CwhDcjsoziISmUmlUZG5uJiKUZWU8PZJw6+fpHwTPqwwLW/n1NA6HV1ZW7Ee3pR9LuPmzp52d3XfAjcJ8CyvLeiqViihUymRiPG5H7Bl4QpJCodSHBI1K1YOVAGYukUi9bW1tUUDg7FhnV9dE8EC7uzv3/uw5c8/B60Ld3T3uwLPBfIVC1UOlUJBUItUCZnDIiI2BSXQ0U9MWUIKUSpUTVg7FQtzVSaNRaYhuQ28ehAZ/J02aLKLRTFF3l9gU8zCqkMun4IAInu0GfepB5ig8gwc6OU56am1tg5pbmjlglANAYjs7+47GRhHqFIvXAWaGedBSa6oro+rrapEDy0EMUCtgzK7ODncrK2tkaWWdg3lE0bsICB4A2EE1uIwgDNNS3D08RcVFhW4NDQ3TnZycmoqKis7BKwk6ffLY4o72tvsZGU+L7yb+6n4t7sq8mbMDB+h2zLPgBU1ra6tnfn6epzOH0+Pr69sNc/sDLsDzkBITExe3NT//vqKiwp1CoZCHmfw1uOn5czQw0I++3Lf/t7lBwUsxIT4+PqqhtupkTXWNjVKpQFQaDU1ymixxdnY+sPqjdecxJyM9/faZUyciqFQKYjmwkaWlpcrPP+DEsrCwg5R+mfTbe0l3vRYtXlJpbm5Bwr7Fg1RqFS350UMnT2/vTke2Y9cLGIv0ZbqPL/l+UuLEJ2lpfkql0ptGoxWuWbPmCniovK2lZb1KJWdTKLRmBt02wcffPw0PgnXieub0yZlksok2LDyiTqNW635JuDUBjN4G+hMoUmnvOC8uF326ZduXpqamRfqZ4KeiomxrQb7w8JzAOTWhCxZtwLoI2YvWwspqbNxPN/41S5CT8wVg+m3L5XJ50Mf1tVKYl7erpLiY/dHa9fzwD1dvBgKtr6/vx/q6GldIrFYmZBMy0mp12CED8O6eExVCtgxrU2vUGmiaCNyorXDmuF4ZP368js/LDIXxLpg/XAH5VL4ge+EYszE6Dw/PK6DnGXDFZBMcJfSRYuRxxngyWAsJQcHBAvCgI5/H22sse7UPKWKXMDfXJXT+Qh6OQ6/K8f8RxxljJfB0XW7uXlfHjRuvzcx8ukwmk3kZy4k+eMU1KzMDFi0VObs492SmP9kKR4pvhcK8XUqVSh97MPddtzKh97XWw8Mjzs9/5vaHD+57FRUUHAACXl8vFUFO9l4Bn+colUrR5UuXlkKC0u8+TGpva0VTpznr+e9tjDBXcO5e0h03WGMoNSV5EWTuQCsrqyzCGlig/jE/nF5CQiTFV/sPZCkUAypChkNJanKyp1arZWLsvYzJyxPEHo+OjhxHp0ujwiNE52POeuXn5n4DepcTEwrz8vbz+TyHLdt3JH8QHLwOcIMx0J9YV1t7u6a6Wm/MqNcMPzv76vGj0ZH2Dqy+TzdtOQw7ax8cuHvBSyF1dXVrsTHNIlH4/aQ7i909vHp8ZvgdhzUmhiohKlBkRFzDfL1n+vpkSFRf/0luTvYiDOKiUSo5OJkN9A+MhbPu30BmOED3SHqdT3z/XQTb0VH28fqNh/wCAs7iMakpKb9cPH8uKpuXtQcWLf/X2wl7qqsqx+77+uCPTCbzIea8qeiNqa+rQ8ePRf/ZmAgnebhmiNHNn254WY4d+9IukfRK0DQXF2nEqtUGQ/DYkNDQ6PKykqDkRw9mQ/C7/Nu9pODAOXOrZs6a9Xdj3cP19cbYMhho2/ad2f39/XKCqFCpLK/GXvILCV1Q5+LKadBBYCQKpArVQJ/sEngknsBwC+6vLC19dqqwoODsN3/ZH8Kws9MsWb4iBvAyY95wfb0xTOYE5O0z4xCs7jSCWJifvx9ug35sR3YLJMJlgBsMhb4JTGA4hxBjcOvm5hG36sPVay7EnJ0XHh6RxeFw4ozlb+obFrAakhZMoCWqjjSYMF8MNuAv5EMagrkg72dOsF/1xd598WYm5PXwv/dNBhjL9J4xBv6Ivo+PTw8s4A1giPE2fqtqgzFkMpkNCgZDIQyrrqzUn1chhGPONJC9mrXfqhzGvI3jQKFQB7MkMPXG1FRXoevXrhyCM61h+yoVCtP2tjaU8nvK5IqKyltv0zoaOZwYSIX5Qpa1jf65B43B8aSxQYTPswadCoUcqVQq1NHRxoCozTAIhujgnIMfyIE9EcFlbQgGQl3iLiQS1aMpU6Yi2BgGDtyxEGEMir14oQy2oU6j0ewCYwKJClH01M5tm3VwQxQANo/Ah2pLSkqub4rcqMsTCJ4MJcdYgVD4IOqTjbrCwoLbRpxV1+MuV+L5IbeFGNYMHB1LzMzMDAkODs1zsfly+YASmmxYjMZb2/BkuMPjZeKcg8/EcuAZdGCMKHD27cd9mUzaS3DAqEkwLz686YthaxPAf7P9vzHDef9/yjMUuWJwAcFuYsGCCiGsbmiogyCI4EOhOQ2wD0A2bDSFby10OJcgMzPzMcY6CF24LSwQWmCOFdxpjTgWSrWGpNGoEeRFDenevbspF/8RE+rAZiMbm3GG8XI4RtbUVCM6nY4m2L/0gcnAITpSiQRiSAOCT60QZ/At+fUiFnei1pYWxIZYRMQVHMcqK8rR0uVh9Vu37/wTKTY2lmUz1vJOW1ubGdwK3/l6+/p0I0e0Oq2GzrBt0mpJR+E2mqLPC+A2/NUAP5IhT4xc9ahHyCDudOLR/wHFx7o7PgfVxwAAAABJRU5ErkJggg=="

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAgMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBmaWxsPSIjNTg1OTVCIiBkPSJNMTk1LjUsMjIuOWMwLTEuNi0wLjgtMy0yLjEtNGMtMS4zLTAuOS0yLjktMS4xLTQuNC0wLjdjLTIuNywwLjktNi40LDIuOS05LjIsNy43CgkJYy00LjUsNy43LTguMSwyOC4yLTExLDYyLjZjLTAuNSw1LjUsMi4yLDEwLjcsNi44LDEzLjZsMi43LDEuN2MwLjgsMC41LDEuNCwxLjUsMS4zLDIuNWwtMS4xLDY1LjNjMCwyLjgsMSw1LjUsMyw3LjUKCQljMiwyLDQuNiwzLjEsNy40LDMuMWMyLjgsMCw1LjUtMS4xLDcuNS0zLjJjMi0yLDMtNC43LDIuOS03LjVMMTk1LjUsMjIuOUMxOTUuNSwyMi45LDE5NS41LDIyLjksMTk1LjUsMjIuOXogTTE5Mi40LDE3NQoJCWMtMS43LDEuOC00LjgsMS44LTYuNiwwYy0wLjktMC45LTEuMy0yLjEtMS4zLTMuM2wxLjEtNjUuM2MwLjEtMy0xLjUtNS45LTQuMS03LjVsLTIuNy0xLjdjLTIuOC0xLjctNC40LTQuOS00LjEtOC4xCgkJYzMuNS00MS4yLDcuNS01NS40LDEwLjItNjAuMmMxLjUtMi42LDMuMy0zLjksNC44LTQuNmwzLjksMTQ3LjRDMTkzLjcsMTcyLjksMTkzLjIsMTc0LjEsMTkyLjQsMTc1eiIvPgoJPHBhdGggZmlsbD0iIzU4NTk1QiIgZD0iTTMyLjQsMTAwLjFjMCwzNi44LDI5LjksNjYuNyw2Ni43LDY2LjdjMzYuOCwwLDY2LjctMjkuOSw2Ni43LTY2LjdjMC0zNi44LTI5LjktNjYuNy02Ni43LTY2LjcKCQlDNjIuMywzMy40LDMyLjQsNjMuMywzMi40LDEwMC4xeiBNMTU5LjksMTAwLjFjMCwzMy42LTI3LjMsNjAuOS02MC45LDYwLjljLTMzLjYsMC02MC45LTI3LjMtNjAuOS02MC45CgkJYzAtMzMuNiwyNy4zLTYwLjksNjAuOS02MC45QzEzMi42LDM5LjIsMTU5LjksNjYuNSwxNTkuOSwxMDAuMXoiLz4KCTxwYXRoIGZpbGw9IiM1ODU5NUIiIGQ9Ik0xMDIuMyw1MC41YzE3LjUsMCwzMy40LDkuNyw0MS40LDI1LjNjMC41LDEsMS41LDEuNiwyLjYsMS42YzAuNCwwLDAuOS0wLjEsMS4zLTAuM2MxLjQtMC43LDItMi41LDEuMy0zLjkKCQljLTktMTcuNi0yNi44LTI4LjUtNDYuNi0yOC41Yy0xLjYsMC0yLjksMS4zLTIuOSwyLjlDOTkuMyw0OS4xLDEwMC43LDUwLjUsMTAyLjMsNTAuNXoiLz4KCTxwYXRoIGZpbGw9IiM1ODU5NUIiIGQ9Ik0xNDYuMiw4MS45YzEuNiw0LjgsMi41LDkuOSwyLjUsMTVjMCwxLjYsMS4zLDIuOSwyLjksMi45YzEuNiwwLDIuOS0xLjMsMi45LTIuOWMwLTUuOC0wLjktMTEuNS0yLjgtMTYuOQoJCWMtMC41LTEuNS0yLjItMi4zLTMuNy0xLjhDMTQ2LjUsNzguNywxNDUuNyw4MC40LDE0Ni4yLDgxLjl6Ii8+Cgk8cGF0aCBmaWxsPSIjNTg1OTVCIiBkPSJNNTQuNSwxMDAuMWMwLDI0LjYsMjAsNDQuNSw0NC41LDQ0LjVjMjQuNiwwLDQ0LjUtMjAsNDQuNS00NC41cy0yMC00NC41LTQ0LjUtNDQuNQoJCUM3NC41LDU1LjYsNTQuNSw3NS41LDU0LjUsMTAwLjF6IE05OS4xLDYxLjRjMjEuMywwLDM4LjcsMTcuNCwzOC43LDM4LjdjMCwyMS4zLTE3LjQsMzguNy0zOC43LDM4LjdjLTIxLjQsMC0zOC43LTE3LjQtMzguNy0zOC43CgkJQzYwLjQsNzguOCw3Ny43LDYxLjQsOTkuMSw2MS40eiIvPgoJPHBhdGggZmlsbD0iIzU4NTk1QiIgZD0iTTguNCwxNzljMiwyLDQuNiwzLjEsNy40LDMuMWMyLjgsMCw1LjQtMS4xLDcuNC0zLjFjMi0yLDMtNC43LDIuOS03LjVMMjMuNyw3N2M0LjktMS4zLDguNS01LjgsOC41LTExLjEKCQl2LTguMVYyMS4xYzAtMS42LTEuMy0yLjktMi45LTIuOWMtMS42LDAtMi45LDEuMy0yLjksMi45djMzLjloLTMuNVYyMS4xYzAtMS42LTEuMy0yLjktMi45LTIuOWMtMS42LDAtMi45LDEuMy0yLjksMi45djMzLjloLTIuNQoJCVYyMS4xYzAtMS42LTEuMy0yLjktMi45LTIuOWMtMS42LDAtMi45LDEuMy0yLjksMi45djMzLjlINS4zVjIxLjFjMC0xLjYtMS4zLTIuOS0yLjktMi45Yy0xLjYsMC0yLjksMS4zLTIuOSwyLjl2MzYuOFY2NgoJCWMwLDUuMywzLjYsOS43LDguNSwxMS4xbC0yLjUsOTQuNUM1LjQsMTc0LjQsNi41LDE3Nyw4LjQsMTc5eiBNNS4zLDY2di01LjJoMjEuMVY2NmMwLDMuMS0yLjUsNS42LTUuNiw1LjZjLTAuOCwwLTEuNSwwLjMtMi4xLDAuOQoJCWMtMC41LDAuNi0wLjgsMS4zLTAuOCwyLjFsMi41LDk3LjFjMCwxLjItMC40LDIuNC0xLjMsMy4zYy0xLjcsMS44LTQuOCwxLjgtNi41LDBjLTAuOS0wLjktMS4zLTItMS4zLTMuM2wyLjUtOTcuMQoJCWMwLTAuOC0wLjMtMS41LTAuOC0yLjFjLTAuNS0wLjYtMS4zLTAuOS0yLjEtMC45QzcuOCw3MS42LDUuMyw2OS4xLDUuMyw2NnoiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAYAAACIC2hQAAAAAXNSR0IArs4c6QAABDlJREFUWAntmFdoFFEUhrNGrLF3iRI1KCiKEDFEfFAUy5sIoqhYsIEFG6hgA1ERQUUfBAV1wRhQfLCBxgJ5EGxPio3YEMuD2BsWcP3+yb3J7OzM7CZbguCBb8+955x7zt07M3dKXl6IxGKxCFyBjzA4JDTQxbgD8AZGBgal6yB5D7Cyub75GNjSDkbvqe94d3xT2yFRM9rDodZGu5v1o/PVJq4LapDaKUgLV0xztRnfG9XX2F9HIpFq006uGLwKdHjDZIsyETAlLCjEt9+MX+uJuUC/e7JZNiFoFkG7oF2S4CZJ/MncMRMQ8QSOp3/WY0vo6jAvM9Yv6NnwwfSlWsEZ0GF/C5IqGK1GCqJxl0CTe2/iK9DXTXsHuhSGsWBlnAbXjD1REfATJCcSvc6hnoFvATRoRRk3HjZAW29+bCPBygqv393XiuoiknyvUfG//Mtj8Zb69RhfyQjhJ3aV5XMuNr8g2Rq0SkHJsml3b0UTOAZV2Szmk1vXQErinqj2TPe+mVKCXAW5J3qboqdyVdjU0c1jcUo17SWHjqY0IINB1Bzoqr82LPU/czE19kTt3SpsMR1fY0806QRtwP+J2pXIlP5nVtS9j2bqz6ech+eAB2xPRQwYBZ8gUHI6USalO98YKDYzeoXWE34Fk/5tbP7KteFG/SPSt1JjABwC+0jpKus0v/J7GHSn8pWsriiF9cC8D5aA2jq8B+EdqHYfGAoDYS5MZsxMVvcc7XjBYSUa70m/R+Jyk/wXeg209suKvT+cByuJt1PrQWd0ouRbYnL/QJe5J0i/E1RAf499EbbfING7XJ3U2JzfaJ01vRbZuoLOO8kcbzZskxxPLLbSxzcW3x/4DMrTByLZ2kfXMQEd5nOcb1HvZOi3N7aEN1/iL+M7DW3gCZzE1rAXNgYnk6kmYFtAYOBEWb2NjNErtKQAjqiR8RWlUA/y9gRd4TfATwInSvB20GS/gfbWcnBeh8ntSNQxpPlDphKT77ZfKnyt4LGJeYvWH0sQ7IWw3Dq0ol9Np6M1pqlbmvFaET/RDtDPODqhp/kFcV6+hL3Wp8+KOjz6OKaH2PnwFBoqjxioDw334RmF+noTUU8L8gLsG6i+zJQQ+8wbG9dn4HTIlOwkUVPQ3inxvSVi7w2rwZ4C1bRrv6TQbg/rodA72aUYtW+lK3eUmCQXTSJtU4FCTFvQ1zzJehtIe7djicU2WZvuv47g0L43DoZArd1x1u9HV+1EOAX6TDSEw6r90Feoq1rz4DhxX+gPoH0P8qEU2010dkTFQZ/UJS8g7lYZVJW4IrgLkhNBcRm1U0j3c3sOvqc9JagAvnxYCFpRiR6oOwTFZ9xOsV7wFKzcpKFPmJ2hOYwAfYF+DlZu0dC2lVuhaAEctbMI0Vr1raDn1ARJ56JJSBZmYAJ6OJ4Ng6EYtMc+hNNQCVe5cP6gfeUvsIIQFnYdDvkAAAAASUVORK5CYII="

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAAAXNSR0IArs4c6QAAADdJREFUOBFj9Pf2+M9ARfCf4X8zExXNGzWKhiHASI3Y37h1ByOyG0djHzk0BjGbKrGP7D+a5X0AwqMMznwi1B4AAAAASUVORK5CYII="

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAVCAYAAABR915hAAAAAXNSR0IArs4c6QAABNFJREFUSA21VetPXFUQnzn3sbulbHkXsQ2FpaVKxBhSY4U0Cyz7gEJi+tUgrVqj8YN/iR/8qtEvTazBxqaVx+5S2GYjSTWYPmIaS5ZaSor4wKU8du/de89xTuWysCyxqfEku3MeM7/fnTkzcwD+pxEKhZoGIsHze8Erex38l/1AIPCCW8V3EbHe1+AzZ1OpuUI8tXCj2Lq9vb3U6/XWAOSqFWDViKISOO4DYCoiz3KARXNl7UZsevq3J6S6MoQA+4Hz70Zj8XgxTDrfe5zu6TmKDF4TiLWMQTUAlgouTAFgEHkGgSEXQmMMdWFYFzOIa24iZQBeSXplPH5hL/SixMFTpxrcJe6wADwmBOcUskUi+3nDsG7vR8w+tm2DALP0c3sVxbVBezSvKyQNdXa2RKemfipGvou4LxQKMBTdRCTIozvp9fWJZDL5u2McbG0tUQ8ePCpUu4Kv5e5Gk8mlcLjzqMr0cwyhFGw+LT3tD/e8B8iOcw4TI9HoiGPvyO3E2B8KvQkoTiDD1LphXbh27dqfjqKUMlN1BmcBsRKEyNi2eZEzSGtMG6KoHBACk1dHx7+UunTXBzwaGwSE41zAzMhY7HO57wyHGPsiwQ+ZgCZu8dGRiYmoo+DIiN9/SPO4PqJIZC1bTJp2+pamlVQVI3VspOyPBLsoN/qJaOHKWPRj2iIISkv5d7o39AGFqQkFjhUjJRXUPHq/AG7ZRu7TsVhs8mlIJfbVsdgkWPwyF7yuLxw8J/fkUPqDwQgidFhgfTMyPlE09fs6OsqZW+vigPdH4xOJ3u7uY6qmnt0eXmoW7x/x1cylUguZf6Dz//fm5h40NTZlVYb+puYGZXZ2bpYchcNCQDqdztzMq+6cmR6Ph+5PgYz5vSTVdPUtCtjWnZ6ORCgaWK8o5fpOy/wKNzbuUIzXwWb1fv8RN8vC2mX68lxVmXewgzzLq+Zny8vL6dWM8YlQFFOSchDlBHLdSSQAXk/Jll5aWnqct8rPmpubS9G77x3SWc3mVi4lEr9klVTq4XpDdc1txe3ye1xaS03tc3fn5+dlXW6NxcXF3Is+36HtpN+Oxb5qb28ufanlxBnqXq/QrU1eTybvbRltTk6ePFlxqK7mvGwq5lrms3hi+ld55GQ19AUCjaizQcbBMoQ1Go1O/uiAyDJyUxk5nkpSSpS3GeLz5EUlFXyS9r529B0ZDne3qqAMUEQ1JWN8cZlcdc62iOXGQE9PnVDxDH1OA+ciwfF+lHPfYardIaqCChleSRoOB0I6skZOfVpY9u2R2NSMAyilLD11n+t1FPxVAWzBsMWlWCz2cLvODmJ54Pf71RK39oaWzf2QcbnUQlLHWOolEglr27rKo6qHVRVflh1LCLGCHG6umuYU6e24Ommzi9gB2uxSQ9s8He7t7RlUOfmBsI62nUXGyigKJXS/Lno0qiizyzi3H1B5zjEbblyJxx85eIWy6LMY6eryqZvhRSGmro7Hh/tC3Z0qV2qJV6evVYWq2FRSFoLICaAXi8NsDnO3sob9iDz8o5CocL3L40iESEEZpGBUS1Jq+MOOUVtbm1br8exXXC7dME1m6bpp00u1urpqzMzM5By9p5G7PFYMyAo3csZ3kkqwTfC/ngb4WXVkD3/Sx58V4N/s/gahbTGJJAoYyAAAAABJRU5ErkJggg=="

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core/styles.css");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("react-gtm-module");

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactstrap = __webpack_require__(2);

var _footerLogo = __webpack_require__(114);

var _footerLogo2 = _interopRequireDefault(_footerLogo);

var _footerAccessIcon = __webpack_require__(115);

var _footerAccessIcon2 = _interopRequireDefault(_footerAccessIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isContrast = false;

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(SiteFooter, _React$Component);

    function SiteFooter(props) {
        _classCallCheck(this, SiteFooter);

        return _possibleConstructorReturn(this, (SiteFooter.__proto__ || Object.getPrototypeOf(SiteFooter)).call(this, props));
    }

    _createClass(SiteFooter, [{
        key: 'changeContrast',
        value: function changeContrast() {
            if (!isContrast) {
                document.getElementById("footerCopyright").style.background = "#000";
                document.getElementsByTagName("footer")[0].style.backgroundColor = "#fff";
                document.getElementsByTagName("footer")[0].style.borderTop = "1px inset #000";
                document.getElementsByClassName("navWrapper")[0].style.webkitFilter = "grayscale(100%)";
                isContrast = true;
            } else {
                document.getElementById("footerCopyright").style.background = "#4E5859";
                document.getElementsByTagName("footer")[0].style.backgroundColor = "#EDECE2";
                document.getElementsByTagName("footer")[0].style.borderTop = "none";
                document.getElementsByClassName("navWrapper")[0].style.webkitFilter = "none";
                isContrast = false;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var siteTitle = this.props.title;
            var siteCreator = this.props.siteCreator;
            var siteCreatorURL = this.props.siteCreatorURL;
            var menu = this.props.footerMenu;

            if (typeof document === 'undefined') {
                return null;
            } else {
                return _react2.default.createElement(
                    'footer',
                    null,
                    _react2.default.createElement(
                        _reactstrap.Container,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Row,
                            null,
                            _react2.default.createElement(
                                _reactstrap.Col,
                                { xs: 12 },
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'footer-heading' },
                                    'HALCYON'
                                )
                            ),
                            _react2.default.createElement(
                                _reactstrap.Col,
                                { xs: 12, sm: 9, className: 'footer-nav' },
                                menu.items.map(function (item, i) {
                                    return _react2.default.createElement(
                                        'div',
                                        { key: i },
                                        _react2.default.createElement(
                                            _reactStatic.Link,
                                            { to: '/' + item.object_slug, href: '/' + item.object_slug, className: 'nav-link' },
                                            (0, _reactHtmlParser2.default)(item.title)
                                        )
                                    );
                                })
                            ),
                            _react2.default.createElement(
                                _reactstrap.Col,
                                { sm: 3, className: 'hidden-xs' },
                                _react2.default.createElement('img', { src: _footerLogo2.default })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'footerCopyright' },
                        _react2.default.createElement(
                            _reactstrap.Container,
                            null,
                            '\xA9 ',
                            new Date().getFullYear(),
                            ' ',
                            siteTitle,
                            ' HALCYON FORSYTH. ALL RIGHTS RESERVED.',
                            _react2.default.createElement('img', { className: 'hidden-xs eyeball', src: _footerAccessIcon2.default, onClick: this.changeContrast })
                        )
                    )
                );
            }
        }
    }]);

    return SiteFooter;
}(_react2.default.Component));

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAMCAYAAACEJVa/AAAAAXNSR0IArs4c6QAAAilJREFUKBWVkT1oFFEQx2fe282eCdx5WSUhyQkBCdhcJSh2VsZCsLOxiQgKEkFFsbM1kggKoiCi+NWIEZMUFsFC0FqtVLhc7rxbDt3dSw4Jyd2+mczz2CtS6RTv7cyb+e1/ZgD+06IoOBaG1cfMrNNSJ/1I7yD4vqe/f6BIBicBzQQAZplhgzl5iOj2IZt7gDCPiCat6UGEjHH8c0qKppOEM8CmrrQKgOAbA41qrX02fJMAFoHhUQqwt7JHuVzOhGFtSQouIsKs49CRzS19CkA0KBgB0MtMOMPIogBeSXxmfT2YtLXWlCjo2511nwstaP0xhwcHCy+07rieR2+MoUqnQ8sKeZYB3vr+vvO+X3hnjL7U6STXw3D1goU4UVR7KfQVf2/hmg1Ya7d3HVVoMtpxvpLh+wiwIBDTarX8bDYbDQ2NfWk0StOu4zxoNqt1pRSURfRBO5MuwjbR3kTF8xZgFcjLa3k7JDnids3z3HFi8KSZVSXyryJSHMe1xbW1xrhN0dpDYHWFgZcAiGRWdwV9J5fLxfY9DCunJSrK3XP5/Njn3t+j39U5RlWUnKcyg9u2hYTgmSg9KaBPzOqjA3TAoLrMTBNau2fy+ZEPFtqDWCeK6lMIdMu2IHPyRfwoMm/IWgckVbYMRmLv2+2tueHh/b9sjbW/EDuPZrNxHCh5Iv0vyAbOxnH9BJEpyoaU6+oVIv7hurlS2lK3fMcZx6VcFFVu7Aj/k7sNs5YJFK83d74AAAAASUVORK5CYII="

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.aea37890.js.map