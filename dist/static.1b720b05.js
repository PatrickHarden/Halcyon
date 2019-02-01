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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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

module.exports = require("react-helmet");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(4);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactHelmet = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement('body', { className: 'single-blog blog-id-' + post.id + ' ' + post.slug })
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
            post.title.rendered
          ),
          (0, _reactHtmlParser2.default)(post.content.rendered)
        )
      )
    )
  );
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHtmlParser = __webpack_require__(4);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactHelmet = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement('body', { className: 'blog' })
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHelmet = __webpack_require__(3);

var _reactGoogleMaps = __webpack_require__(32);

var _ContactForm = __webpack_require__(12);

var _ContactForm2 = _interopRequireDefault(_ContactForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lat = '';
var long = '';

function saveCord(options) {
  lat = parseFloat(options.companyLocationLat);
  long = parseFloat(options.companyLocationLong);
}

var MyMapComponent = (0, _reactGoogleMaps.withScriptjs)((0, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react2.default.createElement(
    _reactGoogleMaps.GoogleMap,
    {
      defaultZoom: 13,
      defaultCenter: { lat: lat, lng: long },
      options: {
        scrollwheel: false
      }
    },
    props.isMarkerShown && _react2.default.createElement(_reactGoogleMaps.Marker, { position: { lat: lat, lng: long } })
  );
}));

exports.default = (0, _reactStatic.withSiteData)(function (_ref) {
  var options = _ref.options;
  return _react2.default.createElement(
    'article',
    { id: 'contact' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement('body', { className: 'contact' }),
      _react2.default.createElement('meta', { description: 'rhjaewrhltioawerjt' })
    ),
    saveCord(options),
    _react2.default.createElement(
      'div',
      { 'class': 'aboutt' },
      _react2.default.createElement(
        'h1',
        null,
        'Contact'
      )
    ),
    _react2.default.createElement(
      'div',
      { id: 'features' },
      _react2.default.createElement(
        _reactstrap.Container,
        { id: 'contactAddress' },
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { cs: '6' },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Address:'
              ),
              ' ',
              _react2.default.createElement('br', null),
              '3104 S Elm Pl, Suite C ',
              _react2.default.createElement('br', null),
              'Broken Arrow, OK 74012 '
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Phone:'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'a',
                { href: 'tel:9183799400' },
                '(918) 379-9400 '
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactstrap.Container,
        { id: 'cForm' },
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12' },
            _react2.default.createElement(
              'h1',
              null,
              'Contact'
            ),
            _react2.default.createElement(_ContactForm2.default, null)
          )
        )
      ),
      _react2.default.createElement(MyMapComponent, {
        isMarkerShown: true,
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAgzgLUiRdYm4wH4xkRaqEXhK-vqMk_VSE&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: _react2.default.createElement('div', { style: { height: '100%' } }),
        containerElement: _react2.default.createElement('div', { style: { height: '400px' } }),
        mapElement: _react2.default.createElement('div', { style: { height: '100%' } })
      })
    )
  );
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactForm = function (_React$Component) {
    _inherits(ContactForm, _React$Component);

    function ContactForm() {
        _classCallCheck(this, ContactForm);

        return _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).apply(this, arguments));
    }

    _createClass(ContactForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactstrap.Form,
                { action: 'https://formspree.io/patrick.harden@imaginuity.com',
                    method: 'POST' },
                _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { md: '6' },
                        _react2.default.createElement(
                            _reactstrap.FormGroup,
                            null,
                            _react2.default.createElement(_reactstrap.Input, { bsSize: 'lg', type: 'text', name: 'firstName', id: 'contactFirstName', placeholder: 'First Name:' })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { md: '6' },
                        _react2.default.createElement(
                            _reactstrap.FormGroup,
                            null,
                            _react2.default.createElement(_reactstrap.Input, { bsSize: 'lg', type: 'text', name: 'lastName', id: 'contactLastName', placeholder: 'Last Name:' })
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { md: '6' },
                        _react2.default.createElement(
                            _reactstrap.FormGroup,
                            null,
                            _react2.default.createElement(_reactstrap.Input, { bsSize: 'lg', type: 'email', name: 'email', id: 'contactEmail', placeholder: 'Email:' })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { md: '6' },
                        _react2.default.createElement(
                            _reactstrap.FormGroup,
                            null,
                            _react2.default.createElement(_reactstrap.Input, { bsSize: 'lg', type: 'text', name: 'phone', id: 'contactPhone', placeholder: 'Phone:' })
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { md: '12' },
                        _react2.default.createElement(
                            _reactstrap.FormGroup,
                            null,
                            _react2.default.createElement(_reactstrap.Input, { bsSize: 'lg', type: 'textarea', name: 'text', id: 'contactText', placeholder: 'How May We Assist You?' })
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Button,
                    null,
                    'Submit'
                )
            );
        }
    }]);

    return ContactForm;
}(_react2.default.Component);

exports.default = ContactForm;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactHelmet = __webpack_require__(3);

var _reactHtmlParser = __webpack_require__(4);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var page = _ref.page;
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement('body', { className: 'single-page page-id-' + page.id + ' ' + page.slug })
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
            page.title.rendered
          ),
          (0, _reactHtmlParser2.default)(page.content.rendered)
        )
      )
    )
  );
});
//

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _fontawesome = __webpack_require__(33);

var _fontawesome2 = _interopRequireDefault(_fontawesome);

var _reactFontawesome = __webpack_require__(34);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _fontawesomeFreeBrands = __webpack_require__(35);

var _fontawesomeFreeBrands2 = _interopRequireDefault(_fontawesomeFreeBrands);

var _reactstrap = __webpack_require__(2);

var _reactLazyHero = __webpack_require__(36);

var _reactLazyHero2 = _interopRequireDefault(_reactLazyHero);

var _ContactForm = __webpack_require__(12);

var _ContactForm2 = _interopRequireDefault(_ContactForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fontawesome2.default.library.add(_fontawesomeFreeBrands2.default);

//


var headerImg = 'https://i.imgur.com/D68KvFY.jpg';

exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'article',
    { id: 'home' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement('body', { className: 'home' })
    ),
    _react2.default.createElement('img', { src: headerImg, alt: '' })
  );
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
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
            '404 - Oh no\'s! We couldn\'t find that page :('
          )
        )
      )
    )
  );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(20);

var _App = __webpack_require__(21);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  window.addEventListener('load', function () {
    var ga = window.ga;
    ga('create', 'UA-34355268-1', 'auto');

    ga('require', 'outboundLinkTracker');
    ga('require', 'urlChangeTracker');

    ga('send', 'pageview');
  });
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:300,400,900);", ""]);

// module
exports.push([module.i, "body{font-family:Lato,sans-serif;margin:0;font-size:20px;line-height:1.75rem;font-weight:100;letter-spacing:1px;color:#333}div#root{height:100vh}#site{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;padding-bottom:50px;min-height:100%;width:100%;float:left}.content{padding:80px 0 0;margin-top:90px}.padded{padding:60px 0}img{max-width:100%}h2,strong{font-weight:900}h2{text-transform:uppercase;letter-spacing:1px;padding-bottom:40px;font-size:2.5rem}p{margin:0!important}.embed-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%}.embed-container embed,.embed-container iframe,.embed-container object{position:absolute;top:0;left:0;width:100%;height:100%}.navbar-dark .navbar-nav .dropdown-menu{background:#fff}.navbar-dark .dropdown-item:focus,.navbar-dark .dropdown-item:hover{background-color:#212529;-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s}.navbar-expand-lg .navbar-nav .nav-link{padding:33px 1.5rem!important;color:#333!important;font-weight:400!important;text-transform:uppercase;font-size:.8rem;letter-spacing:1px;-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s;font-family:Lato}.navbar-dark .navbar-nav .nav-link:active,.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:#209056!important;-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s}.navbar-brand img{height:60px;position:relative;top:11px}.navbar-dark .navbar-toggler{border:none;padding:0}.parallax{position:relative;padding:20rem 2rem 16rem;background-size:cover;border-radius:0;overflow:hidden}.parallax:before{content:\"\";width:100%;background:#5cb52b;opacity:.75;height:100%;position:absolute;top:0;display:block;right:-50%;-webkit-transform:skew(-15deg,0deg);-ms-transform:skew(-15deg,0deg);transform:skew(-15deg,0deg);z-index:1}.parallax div{width:100%}.parallax .container{position:relative;height:100%;z-index:2}.contactGrid{margin-top:15px;margin-bottom:10px}.messageGrid{margin-bottom:5px}footer{width:100%;background:#4e5859;color:#fff;font-weight:100;font-size:.6em;letter-spacing:0;text-transform:uppercase;padding:15px 0;position:absolute;bottom:0;height:60px;margin-bottom:-10px}footer a,footer a:active,footer a:hover{color:#fff;font-weight:700}#home{top:-60px}#home,#welcome{position:relative}#welcome{margin-bottom:40px;padding:110px 0 30px;background-position:100% top;background-color:rgba(4,181,239,.7);background-repeat:no-repeat;width:100%;display:-ms-flexbox;display:flex;background-size:800px 500px;-ms-flex-pack:center;justify-content:center;background-color:transparent;margin-top:-623px;min-height:522px}.particles{background-color:#777}.particles>canvas{background-color:#777;background:#928fbc;background:-webkit-linear-gradient(45deg,#928fbc,#29b8e5 57%,#a9d6ba);background:-webkit-linear-gradient(45deg,#9453b1,#3f85d8 50%,#24a667);background:-o-linear-gradient(45deg,#9453b1 0,#3f85d8 50%,#24a667 100%);background:linear-gradient(45deg,#9453b1,#3f85d8 50%,#24a667);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#928fbc\",endColorstr=\"#a9d6ba\",GradientType=1);margin-bottom:-6px;background-color:#3f85d8;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%239453b1'/%3E%3Cstop offset='1' stop-color='%233f85d8'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%234cccf2' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%234cccf2' stop-opacity='.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23a)' d='M0 0h800v400H0z'/%3E%3Cg fill-opacity='.11' fill='url(%23b)'%3E%3Ccircle cx='267.5' cy='61' r='300'/%3E%3Ccircle cx='532.5' cy='61' r='300'/%3E%3Ccircle cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E\");background-attachment:fixed;background-size:cover;background-position:50%}.home p{line-height:29px}.home h1,.home h2,.home p{font-family:Lato}.home h1{font-weight:900;letter-spacing:-2px}.home h1,.home h2{margin:0;font-size:57px;text-transform:uppercase}.home h2{font-weight:400;letter-spacing:-1px;padding-bottom:15px;margin-top:-10px;font-weight:300}.leftText h2{color:#fff}.leftText{-ms-flex-preferred-size:0%;flex-basis:0%;text-align:left;float:left;width:45%;-ms-flex:1 0 100%;flex:1 0 100%;display:block}.rightText{position:relative;width:55%;float:right}.rightText img{-webkit-box-shadow:none!important;box-shadow:none!important;z-index:5;max-width:120%;margin-top:60px;margin-bottom:70px;position:relative;width:120%}#welcome h1{width:100%;display:block;clear:both;font-size:66px}#welcome h1,#welcome p{color:#fff}#welcome button{display:inline-block;font-family:Lato;font-weight:700;text-align:center;color:#fff;background-color:#008bcc;line-height:36px;font-size:1.2625rem;min-width:250px;-webkit-box-shadow:0 21px 20px 1px rgba(0,0,0,.1);box-shadow:0 21px 20px 1px rgba(0,0,0,.1);cursor:pointer;text-decoration:none;border-radius:10px;border-width:0;border-style:none;border-color:initial;-webkit-border-image:initial;-o-border-image:initial;border-image:initial;-webkit-transition:background-color .2s linear 0s;-o-transition:background-color .2s linear 0s;transition:background-color .2s linear 0s;margin-top:30px;padding:12px 20px;letter-spacing:1px}#welcome a{color:hsla(0,0%,100%,.85);text-decoration:none;text-transform:none;z-index:5}#welcome span{text-transform:none!important}.leftText p{margin-bottom:42px}#panelTwo{padding:100px 0;position:relative;padding-top:20px}#panelTwo:after{background:inherit;top:-336px;content:\"\";display:block;height:220px;left:0;position:absolute;right:0;-webkit-transform:skewY(-3.5deg);-ms-transform:skewY(-3.5deg);transform:skewY(-3.5deg);-webkit-transform-origin:100%;-ms-transform-origin:100%;transform-origin:100%;z-index:0;background-color:#fff;display:none}#panelTwo #left{width:45%;float:left;padding-left:18%}#panelTwo #right{width:50%;float:right;padding-right:15%}#panelTwo .container img{-webkit-box-shadow:none;box-shadow:none}#panelThree{padding:100px 0}#panelThree #left{width:50%;float:left;padding-left:15%}#panelThree #right{width:50%;float:right;padding-right:18%}#panelThree .row>.col-lg-6:first-of-type{position:relative}#panelThree .row>.col-lg-6:first-of-type > span{position:absolute;top:50px;left:30px}#panelFour{width:100%;float:left;display:block;clear:both;z-index:2;padding:100px 0;padding-bottom:0}#panelFour #left{width:50%;padding-left:18%;float:left}#panelFour #right{width:50%;padding-right:15%;float:left;padding-left:3%}#services{background-color:#7654b2;padding:60px 0 100px;width:100%;float:left;margin-bottom:-60px;margin-top:150px;position:relative}section#services:after{background:inherit;top:-160px;content:\"\";display:block;height:50%;left:0;position:absolute;right:0;-webkit-transform:skewY(-3.5deg);-ms-transform:skewY(-3.5deg);transform:skewY(-3.5deg);-webkit-transform-origin:100%;-ms-transform-origin:100%;transform-origin:100%;z-index:-1}#services .container{text-align:center;position:relative;top:-40px}#services .container>p{margin-top:2.5rem}.icons{margin-top:2.25rem}.icons p{font-weight:500}.icons>div{width:33.3333333%;float:left;padding:0 2rem}.icons img{-webkit-box-shadow:none;box-shadow:none;padding:0 2rem}#webdev img{padding:1rem 3rem 0}#webdev p:first-of-type{margin-top:1rem}#adv p,#seo p{margin-top:0}.icons p.temp{font-weight:400}#services .messageGrid input{min-height:120px}#services input,#services textarea{width:100%;min-height:40px;font-size:16px;text-indent:4px}#services textarea{min-height:120px;padding-top:8px}#services h1,#services h2,#services p{color:#fff;text-align:left}.submitGrid input{background-color:#2d94d5;border:none;color:#fff}.submitButton{cursor:pointer}.submitButton:hover{opacity:.9}.contact #services,.contact #services:after{display:none}.services #services{z-index:2;margin-top:0}.services footer{z-index:3}.blog .content>section>.container{margin-bottom:30px}.contact #features{padding-bottom:0}#services h1,#services h2{margin:0;font-size:57px;text-transform:uppercase}#services h1{font-weight:900;letter-spacing:-2px}#services h2{font-weight:300;padding-bottom:0;margin-top:-10px}#services p{line-height:29px;font-size:20px}.fourohfour #services{display:none!important}@media (min-width:1200px){.container{max-width:1200px}}.navbar-expand-lg .navbar-nav .nav-link.nav-phone{color:#209056!important;text-decoration:none;font-weight:600}.navbar-expand-lg .navbar-nav .nav-link.nav-phone:hover{color:#333!important}.noDec{text-decoration:none}nav{position:relative}.logo{position:absolute;height:48px}#home img,nav>div>div{width:100%}.fa,.fab,.fal,.far{font-size:55px!important;color:#209056}.col-sm-2>img{max-width:55px;position:relative;left:-6px}#contact>.container{padding-bottom:60px}#cForm{padding-bottom:75px}#contactAddress{padding-top:60px;padding-bottom:45px}.blog .content,.contact .content,.single-blog .content,.single-page .content{margin-top:110px;padding:0}.navbar-expand-md .navbar-nav .nav-link.nav-phone{color:#5db28c!important}.navbar-expand-md .navbar-nav .nav-link.nav-phone:hover{color:#333!important}#blogH1{margin:30px 0}#blogH1,#features h3{text-align:center;position:relative;z-index:2}#features h3{margin-bottom:70px}.contact p{position:relative;z-index:2}.aboutt{padding:5rem 0 8rem;margin-top:0;background-color:#4cccf2;background-color:#7654b2;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x2='0' y2='100%25' gradientTransform='rotate(257 960 491)'%3E%3Cstop offset='0' stop-color='%237654b2'/%3E%3Cstop offset='1' stop-color='%234cccf2'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='1167' height='972.5' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.04'%3E%3Cpath fill='%23444' d='M90 150L0 300h180z'/%3E%3Cpath d='M90 150L180 0H0z'/%3E%3Cpath fill='%23AAA' d='M270 150L360 0H180z'/%3E%3Cpath fill='%23DDD' d='M450 150l-90 150h180z'/%3E%3Cpath fill='%23999' d='M450 150L540 0H360z'/%3E%3Cpath d='M630 150l-90 150h180z'/%3E%3Cpath fill='%23DDD' d='M630 150L720 0H540z'/%3E%3Cpath fill='%23444' d='M810 150l-90 150h180z'/%3E%3Cpath fill='%23FFF' d='M810 150L900 0H720z'/%3E%3Cpath fill='%23DDD' d='M990 150l-90 150h180z'/%3E%3Cpath fill='%23444' d='M990 150l90-150H900z'/%3E%3Cpath fill='%23DDD' d='M90 450L0 600h180z'/%3E%3Cpath d='M90 450l90-150H0z'/%3E%3Cpath fill='%23666' d='M270 450l-90 150h180z'/%3E%3Cpath fill='%23AAA' d='M270 450l90-150H180z'/%3E%3Cpath fill='%23DDD' d='M450 450l-90 150h180z'/%3E%3Cpath fill='%23999' d='M450 450l90-150H360zM630 450l-90 150h180z'/%3E%3Cpath fill='%23FFF' d='M630 450l90-150H540z'/%3E%3Cpath d='M810 450l-90 150h180z'/%3E%3Cpath fill='%23DDD' d='M810 450l90-150H720z'/%3E%3Cpath fill='%23AAA' d='M990 450l-90 150h180z'/%3E%3Cpath fill='%23444' d='M990 450l90-150H900z'/%3E%3Cpath fill='%23222' d='M90 750L0 900h180z'/%3E%3Cpath d='M270 750l-90 150h180z'/%3E%3Cpath fill='%23DDD' d='M270 750l90-150H180z'/%3E%3Cpath d='M450 750l90-150H360zM630 750l-90 150h180z'/%3E%3Cpath fill='%23444' d='M630 750l90-150H540z'/%3E%3Cpath fill='%23AAA' d='M810 750l-90 150h180z'/%3E%3Cpath fill='%23666' d='M810 750l90-150H720z'/%3E%3Cpath fill='%23999' d='M990 750l-90 150h180zM180 0L90 150h180z'/%3E%3Cpath fill='%23444' d='M360 0l-90 150h180z'/%3E%3Cpath fill='%23FFF' d='M540 0l-90 150h180z'/%3E%3Cpath d='M900 0l-90 150h180z'/%3E%3Cpath fill='%23222' d='M0 300l-90 150H90z'/%3E%3Cpath fill='%23FFF' d='M0 300l90-150H-90zM180 300L90 450h180z'/%3E%3Cpath fill='%23666' d='M180 300l90-150H90z'/%3E%3Cpath fill='%23222' d='M360 300l-90 150h180z'/%3E%3Cpath fill='%23FFF' d='M360 300l90-150H270z'/%3E%3Cpath fill='%23444' d='M540 300l-90 150h180z'/%3E%3Cpath fill='%23222' d='M540 300l90-150H450z'/%3E%3Cpath fill='%23AAA' d='M720 300l-90 150h180z'/%3E%3Cpath fill='%23666' d='M720 300l90-150H630z'/%3E%3Cpath fill='%23FFF' d='M900 300l-90 150h180z'/%3E%3Cpath fill='%23999' d='M900 300l90-150H810z'/%3E%3Cpath d='M0 600l-90 150H90z'/%3E%3Cpath fill='%23666' d='M0 600l90-150H-90z'/%3E%3Cpath fill='%23AAA' d='M180 600L90 750h180z'/%3E%3Cpath fill='%23444' d='M180 600l90-150H90zM360 600l-90 150h180z'/%3E%3Cpath fill='%23999' d='M360 600l90-150H270z'/%3E%3Cpath fill='%23666' d='M540 600l90-150H450z'/%3E%3Cpath fill='%23222' d='M720 600l-90 150h180z'/%3E%3Cpath fill='%23FFF' d='M900 600l-90 150h180z'/%3E%3Cpath fill='%23222' d='M900 600l90-150H810z'/%3E%3Cpath fill='%23DDD' d='M0 900l90-150H-90z'/%3E%3Cpath fill='%23444' d='M180 900l90-150H90z'/%3E%3Cpath fill='%23FFF' d='M360 900l90-150H270z'/%3E%3Cpath fill='%23AAA' d='M540 900l90-150H450z'/%3E%3Cpath fill='%23FFF' d='M720 900l90-150H630z'/%3E%3Cpath fill='%23222' d='M900 900l90-150H810zM1080 300l-90 150h180z'/%3E%3Cpath fill='%23FFF' d='M1080 300l90-150H990z'/%3E%3Cpath d='M1080 600l-90 150h180z'/%3E%3Cpath fill='%23666' d='M1080 600l90-150H990z'/%3E%3Cpath fill='%23DDD' d='M1080 900l90-150H990z'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E\");background-attachment:fixed;background-size:cover;background-position:50%}#features:after{background:inherit;top:-110px;content:\"\";display:block;height:160px;left:0;position:absolute;right:0;-webkit-transform:skewY(-3.5deg);-ms-transform:skewY(-3.5deg);transform:skewY(-3.5deg);-webkit-transform-origin:100%;-ms-transform-origin:100%;transform-origin:100%;z-index:0;background-color:#fff}.aboutt h1,.aboutt p{color:#fff;text-align:center}.single-blog .col-sm-8{margin:0 auto}.single-blog section>.container{margin-bottom:60px}.single-blog h2{padding:0;margin:30px 0;position:relative;z-index:2}.single-blog #features .container img{width:100%;position:relative;z-index:2;top:30px}#panelThree .row>.col-md-6:nth-of-type(2){padding-left:3%}.single-blog .col-sm-7>div,.single-blog p{position:relative;z-index:2}.single-blog .col-sm-7>p:first-child{margin-top:30px!important}#speed h1,#speed p{max-width:60%}#philosophy h1,#speed h1{margin-top:8rem}#philosophy p{margin-bottom:12rem;max-width:60%}#features{padding:80px 0 110px;position:relative;margin-top:-50px;padding-top:0;margin-top:-10px}#features:After{height:125px}.about #features>.container{top:70px;position:relative;padding-bottom:90px}.aboutRow{margin-bottom:60px}#features .container>h1{margin-bottom:70px;margin-top:0}#features .container>h1,#features .container>p{text-align:center}#features .container>p{margin-bottom:80px}#features .container img{-webkit-box-shadow:none;box-shadow:none;margin-top:1rem}.fa-edit,.fa-globe,.fa-lock{font-size:55px;margin-top:1rem}.blog #features .container img{margin-top:0}.about #adwords{padding-bottom:160px}.about #adwords img{-webkit-box-shadow:none;box-shadow:none}.about #SEO img{-webkit-box-shadow:0 21px 20px 1px rgba(0,0,0,.1);box-shadow:0 21px 20px 1px rgba(0,0,0,.1)}.about .container>.seoTwo{margin-bottom:0!important}.services #features .container img{-webkit-box-shadow:0 21px 20px 1px rgba(0,0,0,.1);box-shadow:0 21px 20px 1px rgba(0,0,0,.1)}.serviceSection{position:relative}.serviceSection p{line-height:1.75rem}.serviceSection .container>h1{text-align:center;margin:80px 0 -50px}#adwords,#SEO{padding:180px 0;margin-bottom:-90px}#adwords,#grids,#SEO{display:block;clear:both;width:100%;float:left}#SEO{padding-top:100px}#adwords{padding-top:50px;padding-bottom:330px}#SEO #left{width:45%;float:left;padding-left:18%}#SEO #right{width:55%;float:right;padding-right:15%}#adwords #left{width:55%;float:left;padding-left:15%}#adwords #right{width:45%;float:right;padding-right:18%}#grids>h1{margin-top:0;text-align:center;margin-bottom:60px}.entry-content>.col-md-8{margin:0 auto}.entry-content{padding:30px 0 60px}.entry-content h3{margin:30px 0}#grids{padding-bottom:200px;background-color:#f1f1f1;position:relative}#grids .fa,#grids .fab,#grids .fal,#grids .far{font-size:55px;margin-bottom:1rem;margin-top:1rem}#grids:after{background:inherit;top:-160px;content:\"\";display:block;height:50%;left:0;position:absolute;right:0;-webkit-transform:skewY(-3.5deg);-ms-transform:skewY(-3.5deg);transform:skewY(-3.5deg);-webkit-transform-origin:100%;-ms-transform-origin:100%;transform-origin:100%;z-index:-1}.serviceGrid{margin:0 0 50px!important}.container>.serviceGrid img{-webkit-box-shadow:none;box-shadow:none;max-width:50%}.serviceGrid{text-align:center}footer .row{opacity:.8}.sociallinks{text-align:right}footer .fab{font-size:20px!important;margin-left:5px;margin-top:6px;color:#fff}footer .fa:hover,footer a:hover{opacity:.9;text-decoration:none}.blog p,.contact p,.single-page p{line-height:1.75rem}.aboutt p,.servicePanel p{display:none}.mtop{margin-top:36px}.servicePanel{padding:5rem 0;margin-top:0;background-color:#4cccf2;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x2='0' y2='100%25' gradientTransform='rotate(216 1280 671)'%3E%3Cstop offset='0' stop-color='%237654b2'/%3E%3Cstop offset='1' stop-color='%23219964'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='793' height='660.8' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.03'%3E%3Cpath fill='%23444' d='M90 150L0 300h180z'/%3E%3Cpath d='M90 150L180 0H0z'/%3E%3Cpath fill='%23AAA' d='M270 150L360 0H180z'/%3E%3Cpath fill='%23DDD' d='M450 150l-90 150h180z'/%3E%3Cpath fill='%23999' d='M450 150L540 0H360z'/%3E%3Cpath d='M630 150l-90 150h180z'/%3E%3Cpath fill='%23DDD' d='M630 150L720 0H540z'/%3E%3Cpath fill='%23444' d='M810 150l-90 150h180z'/%3E%3Cpath fill='%23FFF' d='M810 150L900 0H720z'/%3E%3Cpath fill='%23DDD' d='M990 150l-90 150h180z'/%3E%3Cpath fill='%23444' d='M990 150l90-150H900z'/%3E%3Cpath fill='%23DDD' d='M90 450L0 600h180z'/%3E%3Cpath d='M90 450l90-150H0z'/%3E%3Cpath fill='%23666' d='M270 450l-90 150h180z'/%3E%3Cpath fill='%23AAA' d='M270 450l90-150H180z'/%3E%3Cpath fill='%23DDD' d='M450 450l-90 150h180z'/%3E%3Cpath fill='%23999' d='M450 450l90-150H360zM630 450l-90 150h180z'/%3E%3Cpath fill='%23FFF' d='M630 450l90-150H540z'/%3E%3Cpath d='M810 450l-90 150h180z'/%3E%3Cpath fill='%23DDD' d='M810 450l90-150H720z'/%3E%3Cpath fill='%23AAA' d='M990 450l-90 150h180z'/%3E%3Cpath fill='%23444' d='M990 450l90-150H900z'/%3E%3Cpath fill='%23222' d='M90 750L0 900h180z'/%3E%3Cpath d='M270 750l-90 150h180z'/%3E%3Cpath fill='%23DDD' d='M270 750l90-150H180z'/%3E%3Cpath d='M450 750l90-150H360zM630 750l-90 150h180z'/%3E%3Cpath fill='%23444' d='M630 750l90-150H540z'/%3E%3Cpath fill='%23AAA' d='M810 750l-90 150h180z'/%3E%3Cpath fill='%23666' d='M810 750l90-150H720z'/%3E%3Cpath fill='%23999' d='M990 750l-90 150h180zM180 0L90 150h180z'/%3E%3Cpath fill='%23444' d='M360 0l-90 150h180z'/%3E%3Cpath fill='%23FFF' d='M540 0l-90 150h180z'/%3E%3Cpath d='M900 0l-90 150h180z'/%3E%3Cpath fill='%23222' d='M0 300l-90 150H90z'/%3E%3Cpath fill='%23FFF' d='M0 300l90-150H-90zM180 300L90 450h180z'/%3E%3Cpath fill='%23666' d='M180 300l90-150H90z'/%3E%3Cpath fill='%23222' d='M360 300l-90 150h180z'/%3E%3Cpath fill='%23FFF' d='M360 300l90-150H270z'/%3E%3Cpath fill='%23444' d='M540 300l-90 150h180z'/%3E%3Cpath fill='%23222' d='M540 300l90-150H450z'/%3E%3Cpath fill='%23AAA' d='M720 300l-90 150h180z'/%3E%3Cpath fill='%23666' d='M720 300l90-150H630z'/%3E%3Cpath fill='%23FFF' d='M900 300l-90 150h180z'/%3E%3Cpath fill='%23999' d='M900 300l90-150H810z'/%3E%3Cpath d='M0 600l-90 150H90z'/%3E%3Cpath fill='%23666' d='M0 600l90-150H-90z'/%3E%3Cpath fill='%23AAA' d='M180 600L90 750h180z'/%3E%3Cpath fill='%23444' d='M180 600l90-150H90zM360 600l-90 150h180z'/%3E%3Cpath fill='%23999' d='M360 600l90-150H270z'/%3E%3Cpath fill='%23666' d='M540 600l90-150H450z'/%3E%3Cpath fill='%23222' d='M720 600l-90 150h180z'/%3E%3Cpath fill='%23FFF' d='M900 600l-90 150h180z'/%3E%3Cpath fill='%23222' d='M900 600l90-150H810z'/%3E%3Cpath fill='%23DDD' d='M0 900l90-150H-90z'/%3E%3Cpath fill='%23444' d='M180 900l90-150H90z'/%3E%3Cpath fill='%23FFF' d='M360 900l90-150H270z'/%3E%3Cpath fill='%23AAA' d='M540 900l90-150H450z'/%3E%3Cpath fill='%23FFF' d='M720 900l90-150H630z'/%3E%3Cpath fill='%23222' d='M900 900l90-150H810zM1080 300l-90 150h180z'/%3E%3Cpath fill='%23FFF' d='M1080 300l90-150H990z'/%3E%3Cpath d='M1080 600l-90 150h180z'/%3E%3Cpath fill='%23666' d='M1080 600l90-150H990z'/%3E%3Cpath fill='%23DDD' d='M1080 900l90-150H990z'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E\");background-attachment:fixed;background-size:cover;background-position:50%;text-align:center;color:#fff}#panelTwo:after{display:initial}@media screen and (max-width:1440px){.rightText img{max-width:110%;width:110%}#panelTwo:after{top:-296px;height:190px}}@media screen and (max-width:1366px){#panelTwo{padding-top:0}#panelFour{padding-bottom:30px}}@media screen and (max-width:1280px){.rightText img{max-width:100%;width:100%;margin-bottom:100px}#welcome{padding:50px 0 30px}#panelTwo{padding-top:0}}@media screen and (max-width:1199px){#welcome h1{font-size:48px}.home h1,.home h2{font-size:47px;position:relative;z-index:2}#panelTwo:after{top:-166px;height:140px}}@media screen and (max-width:992px){.navbar-expand-md .navbar-nav .nav-link{font-size:.7rem}.navWrapper .container{max-width:96%}#panelTwo{padding-top:0;margin-top:-60px}#panelTwo:after{top:-76px}#panelThree .row{-ms-flex-direction:column-reverse;flex-direction:column-reverse}#welcome .leftText,#welcome .rightText{width:100%}#welcome{padding-top:15px}.rightText img{margin-top:30px;margin-bottom:40px}}@media screen and (max-width:981px){.nav-phone{display:none}}@media screen and (max-width:768px){#panelThree .row>.col-md-6:nth-of-type(2){padding-left:0}#panelTwo:after{top:-226px}.home .row>.col-lg-6:first-of-type{padding-bottom:60px}#panelThree .row>.col-lg-6:first-of-type{padding-bottom:0}#services .row>.col-lg-6:first-of-type{padding-bottom:10px}#panelThree .row>.col-lg-6:last-of-type{padding-bottom:60px}#panelThree,#panelTwo{padding-bottom:0}.about #features>.container{top:10px;padding-bottom:0}#features:after{top:-90px}.fa,.fab,.fal,.far{font-size:35px!important;color:#209056}#grids{padding-bottom:110px}#grids .col-sm-4{font-size:17px}section#services:after{top:-100px}.card-columns{-webkit-column-count:2;column-count:2}.blog #features{padding-bottom:30px}.single-blog h2{font-size:32px}.VictoryContainer>svg{max-height:400px!important}#features:after{top:-60px;height:85px}#panelTwo:after{top:-76px;height:95px}#welcome{margin-top:0;padding-top:30px;margin-bottom:90px;padding-bottom:0;min-height:auto;background:#928fbc;background:-webkit-linear-gradient(45deg,#9453b1,#3f85d8 50%,#24a667);background:-o-linear-gradient(45deg,#9453b1 0,#3f85d8 50%,#24a667 100%);background:linear-gradient(45deg,#9453b1,#3f85d8 50%,#24a667)}}@media screen and (max-width:480px){#welcome{margin-top:70px;padding-top:40px}footer{height:90px}footer .col-sm-6{margin-bottom:10px}.about .row,.sociallinks,footer .col-sm-6{text-align:center}.about .fa{margin-bottom:10px;margin-top:25px}#features h3{margin-bottom:30px}#features{padding-bottom:60px}#services h1,#services h2{font-size:47px}#adwords .row{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.card-columns{-webkit-column-count:1;column-count:1;width:90%;margin:0 auto}.single-blog #features>.container>.row{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.single-blog #features .container img{top:0}#contactAddress>.row{display:block}#contactAddress>.row>div:first-of-type{margin-bottom:30px}#welcome h1{font-size:44px}.home h1,.home h2{font-size:38px}#panelFour{padding-bottom:0;margin-bottom:-30px}.aboutRow{margin-bottom:20px}#SEO{padding-top:0;padding-bottom:100px}#SEO h1{position:relative;z-index:2}#grids:after{top:-100px}#adwords{padding-bottom:280px}.serviceGrid{margin-bottom:30px!important}.rightText img{margin-top:40px;margin-bottom:20px}#panelTwo .row>.col-lg-6>.row>.col-md-6,.VictoryContainer{max-width:50%;margin:0 auto}.about .container>.seoTwo{margin-bottom:-20px!important}.about #adwords img{max-width:70%;margin-top:15px!important;float:none;margin-bottom:-45px;margin-left:15%}p{font-size:17px}.navbar-expand-lg .navbar-nav .nav-link{padding:28px 0!important}h1,h2{font-size:24px}.aboutt{padding:4rem 0 5.75rem}.content{margin-top:80px!important}.fixed-top{padding:0}#features:after{top:-40px;height:85px}.about #adwords img{-webkit-box-shadow:none;box-shadow:none}#welcome{margin-top:0}.navbar-dark .navbar-toggler{position:relative;left:-15px}.rightText{display:none}#welcome{padding-bottom:150px}#panelTWo .col-lg-6>.row>.col-md-6{width:50%}#SEO p{position:relative;z-index:2}.single-blog h2{font-size:24px}.about #SEO img{margin-top:30px}body{font-size:17px}#panelFour h1,#panelTwo h1{margin-top:-40px}#panelThree h1{margin-top:-100px}}@media screen and (max-width:415px){#panelTwo:after{top:-126px}}@media screen and (min-width:2400px){#panelTwo:after{top:-394px}#features:after{top:-155px;height:180px}.blog #features .container img,h1,h2{position:relative;z-index:2}}@media screen and (min-width:1280px){.rightText img{min-height:460px}}#panelFour tspan{display:none!important}.VictoryContainer{height:auto!important}#panelTwo .col-lg-6{min-height:305px}.hide{text-decoration:none!important;color:#333}#blue,#green,#purple{height:35px;width:100%;float:left}#green{background:#1ba37b}#blue{background:#2d86d4}#purple{background:#7b5eb6}.legend{margin-top:50px}.legend p{font-size:17px}.about #SEO{padding-top:20px}.about #adwords .col-md-6,.about #SEO .col-md-6{text-align:left}#SEO h1{position:relative;z-index:2}svg>g>g:nth-of-type(3)>g>path{fill:#1ba37b!important;stroke:#1ba37b!important}svg>g>g:first-of-type > g > path{fill:#7b5eb6!important;stroke:#7b5eb6!important}svg>g>g:nth-of-type(2)>g>path{fill:#2d86d4!important;stroke:#2d86d4!important}#noLines svg>g>g:first-of-type > g > path,#noLines svg>g>g:nth-of-type(2)>g>path,#noLines svg>g>g:nth-of-type(3)>g>path{fill:transparent!important;stroke:transparent!important}", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width:992px){.row{width:auto!important}.navRow{width:100vw!important}.navRow .col-9{width:100%!important;max-width:100%!important;-ms-flex:100% 1;flex:100% 1;padding:0}.navRow .col-3{position:fixed;z-index:999}.content{margin-top:95px}.navbar-brand img{max-width:235px}.navbar-collapse{width:auto;background:#fff;padding:0 15px}.navbar-expand-md .navbar-nav .nav-link{padding:15px 0!important;text-align:center}.navbar-dark .navbar-toggler{border:none;padding:0;margin-top:30px}.navbar-dark .navbar-nav .nav-link{color:#333}.navbar-toggler{margin:25px 0}.navbar-toggler-icon:before{font-family:Font Awesome\\ 5 Pro;content:\"\\F0C9\";font-size:2rem;color:#ccc;font-weight:300}.fixed-top{background:#fff}}@media screen and (max-width:767px){.nav-phone{display:block}}@media only screen and (max-width:480px){.content{margin-top:15px}.navbar-brand img{max-width:235px}.navbar-collapse{width:auto}.navbar-expand-md .navbar-nav .nav-link{padding:15px 0!important;text-align:right}.navbar-dark .navbar-toggler{border:none;padding:0;margin-top:28px}.parallax:before{-webkit-transform:skew(0deg,-15deg);-ms-transform:skew(0deg,-15deg);transform:skew(0deg,-15deg);right:0!important;left:0!important;top:40%}#home{top:-70px}#home .header .headerContent{top:75%}#home #about h2{font-size:2.1em;margin-top:0}#home .testimonial .testimonialContent{top:75%}#home .testimonial .testimonialContent h2{font-size:2rem;padding-bottom:15px}footer{font-size:.65rem;line-height:2em}}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(22);

var _reactStaticRoutes = __webpack_require__(23);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _Header = __webpack_require__(37);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(40);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      { id: 'site' },
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(
        'main',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      ),
      _react2.default.createElement(_Footer2.default, null)
    )
  );
};

//
exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(24);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(25);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(26);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(27);

var _reactUniversalComponent = __webpack_require__(28);

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
  id: '../src/singles/Post',
  file: '/Users/patrick.harden/Desktop/work/halycon/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/singles/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/singles/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/singles/Post';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Blogs',
  file: '/Users/patrick.harden/Desktop/work/halycon/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/pages/Blogs', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Blogs');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/pages/Blogs';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Contact',
  file: '/Users/patrick.harden/Desktop/work/halycon/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/pages/Contact', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Contact');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/pages/Contact';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/singles/Page',
  file: '/Users/patrick.harden/Desktop/work/halycon/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/singles/Page', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/singles/Page');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/singles/Page';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Users/patrick.harden/Desktop/work/halycon/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/404',
  file: '/Users/patrick.harden/Desktop/work/halycon/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 15)), (0, _importCss3.default)('src/pages/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return 'src/pages/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 5

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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(29);

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

var _reportChunks = __webpack_require__(30);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(31);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(7);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(7);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

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
/* 31 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("react-lazy-hero");

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

var _reactHtmlParser = __webpack_require__(4);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactHelmet = __webpack_require__(3);

var _Nav = __webpack_require__(38);

var _Nav2 = _interopRequireDefault(_Nav);

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
            var siteTitle = this.props.title;
            var siteRoot = this.props.siteRoot;

            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        siteTitle
                    ),
                    _react2.default.createElement('link', { rel: 'canonical', href: siteRoot })
                ),
                _react2.default.createElement(_Nav2.default, null)
            );
        }
    }]);

    return SiteHeader;
}(_react2.default.Component));

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _MenuItems = __webpack_require__(39);

var _MenuItems2 = _interopRequireDefault(_MenuItems);

var _reactstrap = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    key: 'toggle',
    value: function toggle() {
      var width = document.body.clientWidth;
      if (width <= 993) {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var logo = this.props.options.companyLogo;

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
              _reactstrap.Row,
              { className: 'navRow' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '12', className: 'text-right' },
                _react2.default.createElement(_reactstrap.NavbarToggler, { onClick: this.toggle }),
                _react2.default.createElement(
                  _reactstrap.Collapse,
                  { isOpen: this.state.isOpen, navbar: true },
                  _react2.default.createElement(
                    _reactstrap.Nav,
                    { className: 'ml-auto', navbar: true },
                    _react2.default.createElement(
                      _reactstrap.NavItem,
                      null,
                      _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/', className: 'nav-link', onClick: this.toggle },
                        'Home'
                      )
                    ),
                    _react2.default.createElement(_MenuItems2.default, { toggle: this.toggle }),
                    _react2.default.createElement(
                      _reactstrap.NavItem,
                      null,
                      _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/contact', className: 'nav-link', onClick: this.toggle },
                        'Contact'
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
/* 39 */
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
                                    _reactstrap.DropdownItem,
                                    { key: 'children-' + i },
                                    _react2.default.createElement(
                                        _reactstrap.NavItem,
                                        null,
                                        _react2.default.createElement(
                                            _reactStatic.Link,
                                            { to: "/" + children.object + "/" + children.object_slug, onClick: toggle, className: 'nav-link' },
                                            children.title
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
                            { to: '/' + menu.object_slug, onClick: toggle, className: 'nav-link' },
                            menu.title
                        )
                    )
                );
            });
        }
    }]);

    return MenuList;
}(_react2.default.Component));

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHtmlParser = __webpack_require__(4);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactHelmet = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(SiteFooter, _React$Component);

    function SiteFooter(props) {
        _classCallCheck(this, SiteFooter);

        return _possibleConstructorReturn(this, (SiteFooter.__proto__ || Object.getPrototypeOf(SiteFooter)).call(this, props));
    }

    _createClass(SiteFooter, [{
        key: 'render',
        value: function render() {
            var siteTitle = this.props.title;
            var siteCreator = this.props.siteCreator;
            var siteCreatorURL = this.props.siteCreatorURL;

            return _react2.default.createElement(
                'footer',
                { className: 'text-center' },
                '\xA9 2018 ',
                siteTitle,
                '  |  Built By ',
                _react2.default.createElement(
                    'a',
                    { href: siteCreatorURL },
                    siteCreator
                )
            );
        }
    }]);

    return SiteFooter;
}(_react2.default.Component));

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.1b720b05.js.map