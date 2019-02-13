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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-lazy-hero");

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 10 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

  return Page;
}(_react2.default.Component));

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
/* 14 */
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
/* 15 */
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
    if (page.slug == 'events') {
      newTitle = page.yoast_meta.yoast_wpseo_title;
      newMeta = page.yoast_meta.yoast_wpseo_metadesc;
      newCanonical = page.yoast_meta.yoast_wpseo_canonical;
    }
  });
}

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var events = _ref.events,
      pages = _ref.pages,
      siteRoot = _ref.siteRoot,
      title = _ref.title,
      metaDescription = _ref.metaDescription;
  return _react2.default.createElement(
    'section',
    null,
    setMetaData(pages),
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement('body', { className: 'events' }),
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
            'Events'
          )
        )
      ),
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          'div',
          { className: 'card-columns' },
          events.map(function (event) {
            return _react2.default.createElement(
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
            );
          })
        )
      )
    )
  );
});

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(51);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Entities = __webpack_require__(52).AllHtmlEntities;
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
/* 18 */
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
/* 19 */
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
    if (page.slug == 'shopping') {
      newTitle = page.yoast_meta.yoast_wpseo_title;
      newMeta = page.yoast_meta.yoast_wpseo_metadesc;
      newCanonical = page.yoast_meta.yoast_wpseo_canonical;
    }
  });
}

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var stores = _ref.stores,
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
      _react2.default.createElement('body', { className: 'shopping' }),
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
            'stores'
          )
        )
      ),
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          'div',
          { className: 'card-columns' },
          stores.map(function (store) {
            return _react2.default.createElement(
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
            );
          })
        )
      )
    )
  );
});

/***/ }),
/* 20 */
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
    if (page.slug == 'dining') {
      newTitle = page.yoast_meta.yoast_wpseo_title;
      newMeta = page.yoast_meta.yoast_wpseo_metadesc;
      newCanonical = page.yoast_meta.yoast_wpseo_canonical;
    }
  });
}

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var stores = _ref.stores,
      pages = _ref.pages,
      siteRoot = _ref.siteRoot,
      title = _ref.title,
      metaDescription = _ref.metaDescription;
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
            'Dining'
          )
        )
      ),
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          'div',
          { className: 'card-columns' },
          stores.map(function (store) {
            return _react2.default.createElement(
              _reactstrap.Card,
              { key: store.id, className: "card-" + store.id },
              _react2.default.createElement(_reactStatic.Link, { to: '/dining/' + store.slug + '/' }),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/dining/' + store.slug + '/' },
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
            );
          })
        )
      )
    )
  );
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactGoogleMaps = __webpack_require__(53);

var _ContactForm = __webpack_require__(54);

var _ContactForm2 = _interopRequireDefault(_ContactForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lat = '';
var long = '';

function saveCord(options) {
  lat = parseFloat(32.824139);
  long = parseFloat(-96.769943);
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

var newTitle;
var newMeta;
var newCanonical;
function setMetaData(pages) {
  pages.map(function (page) {
    if (page.slug == 'contact-us') {
      newTitle = page.yoast_meta.yoast_wpseo_title;
      newMeta = page.yoast_meta.yoast_wpseo_metadesc;
      newCanonical = page.yoast_meta.yoast_wpseo_canonical;
    }
  });
}

exports.default = (0, _reactStatic.withSiteData)(function (_ref) {
  var centerInfo = _ref.centerInfo,
      siteRoot = _ref.siteRoot,
      title = _ref.title,
      metaDescription = _ref.metaDescription,
      pages = _ref.pages;
  return _react2.default.createElement(
    'article',
    { id: 'contact' },
    setMetaData(pages),
    saveCord(title),
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement('body', { className: 'contact' }),
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
      'div',
      { id: 'features' },
      _react2.default.createElement(
        _reactstrap.Container,
        { id: 'contactAddress' },
        _react2.default.createElement(
          'div',
          { className: 'aboutt' },
          _react2.default.createElement(
            'h1',
            null,
            'Sign Up'
          )
        ),
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
                '(123) 456-6774 '
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
            _react2.default.createElement(_ContactForm2.default, { centerInfo: centerInfo })
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

var _reactstrap = __webpack_require__(2);

var _reactLazyHero = __webpack_require__(6);

var _reactLazyHero2 = _interopRequireDefault(_reactLazyHero);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _EventSearch = __webpack_require__(23);

var _EventSearch2 = _interopRequireDefault(_EventSearch);

var _PageSearch = __webpack_require__(24);

var _PageSearch2 = _interopRequireDefault(_PageSearch);

var _StoreSearch = __webpack_require__(25);

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

var _reactHelmet = __webpack_require__(5);

var _reactstrap = __webpack_require__(2);

var _reactLazyHero = __webpack_require__(6);

var _reactLazyHero2 = _interopRequireDefault(_reactLazyHero);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//


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
          null,
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(5);

var _reactstrap = __webpack_require__(2);

var _reactLazyHero = __webpack_require__(6);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(5);

var _reactstrap = __webpack_require__(2);

var _reactLazyHero = __webpack_require__(6);

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(2);

var _reactSlick = __webpack_require__(8);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

__webpack_require__(55);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

exports.default = (0, _reactStatic.withRouteData)(function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));
  }

  _createClass(Page, [{
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
          _react2.default.createElement('body', { className: 'single-page page-id-' + page.id + ' ' + page.slug }),
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
          page.yoast_meta.yoast_wpseo_canonical ? _react2.default.createElement('link', { rel: 'canonical', href: page.yoast_meta.yoast_wpseo_canonical }) : _react2.default.createElement('link', { rel: 'canonical', href: siteRoot }),
          page.acf.layout ? _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', charset: 'UTF-8', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' }) : ""
        ),
        page.acf.layout ? _react2.default.createElement(
          _reactstrap.Container,
          null,
          page.acf.layout.map(function (section) {
            if (section.acf_fc_layout == 'content_area') {
              return _react2.default.createElement(
                'div',
                { className: 'pageContentArea' },
                _react2.default.createElement(
                  'h1',
                  null,
                  (0, _reactHtmlParser2.default)(section.heading)
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  (0, _reactHtmlParser2.default)(section.content)
                )
              );
            } else if (section.acf_fc_layout == 'image_carousel') {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'h1',
                  null,
                  'Carousel'
                ),
                _react2.default.createElement(
                  _reactSlick2.default,
                  _extends({ className: 'pageCotentCarousel' }, settings),
                  section.carousel.map(function (slide, index) {
                    return _react2.default.createElement(
                      'div',
                      { 'data-index': index, key: index },
                      _react2.default.createElement('img', { src: slide.image.url })
                    );
                  })
                )
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
              _react2.default.createElement(
                'h1',
                null,
                (0, _reactHtmlParser2.default)(page.title.rendered)
              ),
              (0, _reactHtmlParser2.default)(page.content.rendered)
            )
          )
        )
      );
    }
  }]);

  return Page;
}(_react2.default.Component));

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

var _reactHelmet = __webpack_require__(5);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactstrap = __webpack_require__(2);

var _reactFontawesome = __webpack_require__(28);

var _freeSolidSvgIcons = __webpack_require__(29);

var _reactRouterDom = __webpack_require__(9);

var _HeroSlider = __webpack_require__(56);

var _HeroSlider2 = _interopRequireDefault(_HeroSlider);

var _TenantSlider = __webpack_require__(57);

var _TenantSlider2 = _interopRequireDefault(_TenantSlider);

var _ImageGrid = __webpack_require__(61);

var _ImageGrid2 = _interopRequireDefault(_ImageGrid);

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
      if (store.length > 198) {
        excerpt = store.replace(regex, "").substr(0, 200);
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

      console.log('Home JSON:');
      console.log(this.props.home);
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

      selectedStores = _home.acf.tenant_spotlight.stores.map(function (store) {
        return store.post_name;
      });
      // Generate featured events from events json
      featuredStores = this.props.events.map(function (store) {
        if (store.acf.featured_image) {
          return _react2.default.createElement(
            'div',
            { className: 'featuredEvent' },
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
                'p',
                null,
                (0, _reactHtmlParser2.default)(_this2.compressText(store.acf.post_copy))
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
          _react2.default.createElement('body', { className: 'home' }),
          _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', charset: 'UTF-8', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' }),
          _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' }),
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
              _react2.default.createElement(
                _reactStatic.Link,
                { className: 'halcyon-button', to: home.acf.button.url, target: home.acf.button.target },
                home.acf.button.title
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'tenant-spotlight' },
              _react2.default.createElement(
                'div',
                { 'class': 'heading-container' },
                _react2.default.createElement(
                  _reactstrap.Container,
                  null,
                  _react2.default.createElement(
                    'h2',
                    null,
                    home.acf.tenant_spotlight.heading
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.Container,
                null,
                _react2.default.createElement(_TenantSlider2.default, { stores: this.props.stores, selectedStores: selectedStores })
              )
            ),
            _react2.default.createElement(_ImageGrid2.default, { images: this.state.imageGridData }),
            _react2.default.createElement(
              'div',
              { className: 'events-container' },
              home.acf.halcyon_happenings.heading && _react2.default.createElement(
                'div',
                { 'class': 'heading-container' },
                _react2.default.createElement(
                  _reactstrap.Container,
                  null,
                  _react2.default.createElement(
                    'h2',
                    null,
                    home.acf.halcyon_happenings.heading
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
                    { md: 4 },
                    featuredStores[0]
                  ),
                  _react2.default.createElement(
                    _reactstrap.Col,
                    { md: 4 },
                    featuredStores[1]
                  ),
                  _react2.default.createElement(
                    _reactstrap.Col,
                    { md: 4 },
                    featuredStores[2]
                  )
                ),
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/events', className: 'pull-right' },
                  'View All ->'
                )
              )
            ),
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
                _react2.default.createElement(_TenantSlider2.default, { optionsData: this.props.property_options })
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
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(34);

__webpack_require__(35);

__webpack_require__(39);

__webpack_require__(40);

var _App = __webpack_require__(41);

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
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(36);
exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:Flama;src:url(" + escape(__webpack_require__(37)) + ")}body{font-family:FreightText Pro,serif;margin:0;font-size:1.2rem}div#root{height:100vh}#site{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;min-height:100%}#site,.container{width:100%}.padded{padding:60px 0}strong{font-weight:900}h1{font-family:Flama,sans-serif}h2{text-transform:uppercase;font-size:2rem}h3{font-size:1.8rem}h3,h4{font-family:Flama,sans-serif}img{max-width:100%}.blog .content,.contact .content,.single-blog .content,.single-page .content{margin-top:150px;padding:0}.halcyon-button{display:block;margin:1rem auto;background:#4e5859;color:#fff;padding:.5rem 2rem;border-radius:20px;text-transform:uppercase;font-size:1.4rem;max-width:250px;font-family:Flama,sans-serif;border:2px solid;text-align:center}.halcyon-button:hover{color:#4e5859;text-decoration:none;background:#fff}@media screen and (min-width:768px){body{font-size:1.4rem}h2{font-size:2.2rem}}@media (min-width:1200px){.container{max-width:1200px}h2{font-size:3.6rem}.halcyon-button{font-size:1.6rem}}.navWrapper{position:fixed;width:100%;z-index:10;background:#fff;top:0}nav{position:relative}.navWrapper .navbar{margin:0}.navbar-dark .navbar-nav .dropdown-menu{background:#fff}.navbar-dark .dropdown-item:focus,.navbar-dark .dropdown-item:hover{-webkit-filter:bightness(90%);filter:bightness(90%);-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s}.navbar-expand-lg .navbar-nav .nav-link{color:#333!important;text-transform:uppercase;font-size:1.4rem;letter-spacing:1px;-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s;font-family:Flama}.navbar-dark .navbar-nav .nav-link:active,.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:#209056!important;-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s}.navbar-expand-lg .navbar-nav .nav-link.nav-phone{color:#209056!important;text-decoration:none;font-weight:600}.navbar-expand-lg .navbar-nav .nav-link.nav-phone:hover{color:#333!important}.navbar{-webkit-box-shadow:rgba(0,0,0,.28) 0 3px 3px;box-shadow:0 3px 3px rgba(0,0,0,.28)}.navbar-dark .navbar-toggler{border:none;padding:0}nav .container{max-width:95%!important;padding:0}.navWrapper .navRow .nav-inner .nav-logo{position:absolute;left:50%;top:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:15}.navWrapper .navRow .nav-inner .nav-logo img{max-width:140px}.navWrapper .navRow .nav-inner{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;min-height:50px}.navWrapper .navRow .nav-inner .left{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center;align-items:center}.navWrapper .navRow .nav-inner .left .search-toggle{font-size:2rem;padding-right:1.5rem}.navWrapper .navRow .nav-inner .navbar-collapse{width:100%;position:fixed;left:0;background:#fff;top:40px;padding:4rem 0 0;z-index:1;-webkit-box-shadow:rgba(0,0,0,.28) 0 3px 3px;box-shadow:0 3px 3px rgba(0,0,0,.28)}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav{list-style:none;padding:0;margin:0}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-link{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item{border-bottom:1px solid #707070;padding:1rem 3rem}.navWrapper .navRow .nav-inner .navbar-toggler{background:transparent;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center;align-items:center}.navWrapper .navRow .nav-inner .navbar-toggler span{padding-right:1rem;border:0;font-family:Flama,sans-serif}.navWrapper .navRow .nav-inner .navbar-toggler:focus{outline:none}#eventsIcon{-webkit-filter:invert(60%);filter:invert(60%)}main.content{padding-top:50px}@media screen and (min-width:768px){.navWrapper .navRow .nav-inner .navbar-collapse{top:0;padding:0}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;margin-bottom:-20px;width:100%;-ms-flex-pack:center;justify-content:center}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item{padding:0;border-bottom:0}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-link{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;font-size:1rem}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav>div:nth-child(1n+4){-ms-flex-order:4;order:4}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo){max-width:70px;margin:0 1rem}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo) img{max-height:40px}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item.logo img{max-width:200px}main.content{padding-top:46px}}@media screen and (min-width:1200px){.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-link{font-size:1.2rem}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item:not(.logo){max-width:85px;margin:0 1.5rem}.navWrapper .navRow .nav-inner .navbar-collapse .navbar-nav .nav-item.logo img{max-width:220px}main.content{padding-top:56px}}footer{padding:2rem 0 0;background-color:#edece2;color:#fff;text-transform:uppercase;background-image:url(" + escape(__webpack_require__(38)) + ");background-size:contain;background-repeat:no-repeat;background-position:center top 12px}#footerCopyright{background:#4e5859;font-family:Flama,sans-serif;padding:.5rem 0}footer .footer-heading{color:#4e5859;text-align:center;padding-bottom:1rem;letter-spacing:5px;font-size:2.8rem}footer a,footer a:active,footer a:hover{color:#4f4b48}footer .footer-nav{-webkit-column-count:2;column-count:2;padding-bottom:1rem}footer .footer-nav .nav-link{padding:0 0 1.5rem;font-family:Flama,sans-serif;font-size:1.2rem;display:block}.sociallinks{text-align:right}footer .fab{font-size:20px!important;margin-left:5px;margin-top:6px;color:#fff}footer .fa:hover,footer a:hover{opacity:.9;text-decoration:none}footer>.container>.row{margin:0}@media screen and (min-width:768px){footer{background-position:center top 40%}footer .footer-heading{text-align:left;font-size:3.6rem}footer .footer-nav{-webkit-column-count:3;column-count:3;padding-bottom:2rem;padding-left:0}footer .footer-nav .nav-link{font-size:1.4rem}}@media screen and (min-width:1200px){footer .footer-heading{font-size:4rem}}@media screen and (max-width:767px){.hidden-xs{display:none}}", ""]);

// exports


/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Flama-Basic.e4a05390.ttf";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/FEATHER.2bd142db.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".search-page-bar{margin-top:30px}.hero-slider .slick-slide{position:relative}.hero-slider .slick-slide .hero-heading{position:absolute;bottom:1rem;color:hsla(0,0%,100%,.8);left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);margin:0;font-size:6rem;letter-spacing:5px}.hero-slider ul.slick-dots{position:absolute;top:50%;right:10%;width:20px;bottom:inherit!important;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);padding:0}.hero-slider .slick-dots li{margin:0 .75rem;width:26px;padding-left:inherit;padding-bottom:2rem}.hero-slider .slick-dots li:before{content:\"\";display:block}.hero-slider .slick-dots button{padding:0}.hero-slider .slick-dots li button:before{line-height:20px;border:2px solid #fff;border-radius:10px}.hero-slider .slick-dots li.slick-active button:before,.hero-slider .slick-dots li button:before{left:0;position:relative;display:inline-block;vertical-align:top;content:\"\";height:15px;width:15px;opacity:1}.hero-slider .slick-dots li.slick-active button:before{background:#8f1838;line-height:15px}#searchBar{background:#8f1838;display:block;width:100%;position:relative;z-index:1;margin-top:-6px}#searchBar .container{display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:42px;-ms-flex-align:center;align-items:center}#searchBar a{color:#fff}#searchBar .icon{font-size:2.5rem}.slick-slider{overflow:hidden}.slick-dots{bottom:65px!important}.slick-dots li button:before{height:40px;width:40px;font-size:20px}.slick-slide img{width:100%;max-width:100%}.card-columns{max-width:100%}#home h1{font-size:2rem}#home .top-cta{padding-top:1rem;padding-bottom:1rem;text-align:center}#home .heading-container{background:#cde2e0;height:54px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0 0 1rem}#home .heading-container h2{margin:0}@media screen and (min-width:768px){#home h1{font-size:2.4rem}.hero-slider .slick-slide .hero-heading{font-size:9rem}#searchBar .container a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-family:Flama,sans-serif;font-size:1.2rem;text-transform:uppercase}#searchBar .container a .icon{margin-right:1rem}#searchBar .container a p{margin:0}#searchBar .search-bar{border-radius:5px;border:0}#home .top-cta{padding-bottom:2rem}.search-toggle{display:block!important}}@media screen and (min-width:1200px){#home h1{font-size:3rem}.hero-slider .slick-slide .hero-heading{font-size:14rem;letter-spacing:1.5rem}#home .heading-container{height:72px}#home .top-cta{padding-top:2rem;padding-bottom:3rem}}", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(42);

var _reactStaticRoutes = __webpack_require__(43);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _SearchComponent = __webpack_require__(66);

var _SearchComponent2 = _interopRequireDefault(_SearchComponent);

var _Header = __webpack_require__(68);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(85);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(44);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(45);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(46);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _reactUniversalComponent = __webpack_require__(47);

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
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/singles/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/singles/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/singles/Post';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Blogs',
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/pages/Blogs', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Blogs');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/pages/Blogs';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/singles/Event',
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/singles/Event', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/singles/Event');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/singles/Event';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Events',
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 15)), (0, _importCss3.default)('src/pages/Events', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Events');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return 'src/pages/Events';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Sales',
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('src/pages/Sales', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Sales');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return 'src/pages/Sales';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/oldContainers/Search',
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/oldContainers/Search', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/oldContainers/Search');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/oldContainers/Search';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/singles/Store',
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/singles/Store', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/singles/Store');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/singles/Store';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Stores',
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/pages/Stores', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Stores');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/pages/Stores';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Dining',
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 20)), (0, _importCss3.default)('src/pages/Dining', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Dining');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return 'src/pages/Dining';
  }
}), universalOptions);
var t_9 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Contact',
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/pages/Contact', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Contact');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/pages/Contact';
  }
}), universalOptions);
var t_10 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/SearchResults',
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 22)), (0, _importCss3.default)('src/pages/SearchResults', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/SearchResults');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return 'src/pages/SearchResults';
  }
}), universalOptions);
var t_11 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/singles/Page',
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 26)), (0, _importCss3.default)('src/singles/Page', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/singles/Page');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return 'src/singles/Page';
  }
}), universalOptions);
var t_12 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 27)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_13 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/404',
  file: '/Users/patrick.harden/Desktop/work/deploy/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 31)), (0, _importCss3.default)('src/pages/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return 'src/pages/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8, t_9, t_10, t_11, t_12, t_13];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 13

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
/* 44 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(48);

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

var _reportChunks = __webpack_require__(49);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(50);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(10);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(10);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

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
/* 50 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("html-entities");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 54 */
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

var styles = {
    marginBottom: '30px'
};

var ContactForm = function (_React$Component) {
    _inherits(ContactForm, _React$Component);

    function ContactForm(props) {
        _classCallCheck(this, ContactForm);

        return _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).call(this, props));
    }

    _createClass(ContactForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactstrap.Form,
                { action: "https://formspree.io/" + this.props.centerInfo.acf.email,
                    method: 'POST', style: styles },
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".pageCotentCarousel img{max-height:450px}", ""]);

// exports


/***/ }),
/* 56 */
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

      heroArray = home.acf.hero_slider.map(function (hero) {
        if (hero.link) {
          return _react2.default.createElement(
            "div",
            null,
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
            null,
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactStatic2 = _interopRequireDefault(_reactStatic);

var _reactSlick = __webpack_require__(8);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactstrap = __webpack_require__(2);

var _reactstrap2 = _interopRequireDefault(_reactstrap);

__webpack_require__(58);

var _leftArrow = __webpack_require__(59);

var _leftArrow2 = _interopRequireDefault(_leftArrow);

var _rightArrow = __webpack_require__(60);

var _rightArrow2 = _interopRequireDefault(_rightArrow);

var _jquery = __webpack_require__(30);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//  <TenantSlider stores={this.props.stores} />

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
var excerpt;
var regex = /(<([^>]+)>)/ig;

var TenantSlider = function (_React$Component) {
    _inherits(TenantSlider, _React$Component);

    function TenantSlider(props) {
        _classCallCheck(this, TenantSlider);

        var _this = _possibleConstructorReturn(this, (TenantSlider.__proto__ || Object.getPrototypeOf(TenantSlider)).call(this, props));

        _this.onClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(TenantSlider, [{
        key: "compressText",
        value: function compressText(store) {
            excerpt = store.replace(regex, "").substr(0, 200);
            excerpt = excerpt.substr(0, excerpt.lastIndexOf(" "));
            return excerpt + "...";
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            var stores = this.props.stores;
            var selectedStores = this.props.selectedStores;

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
                                            (0, _reactHtmlParser2.default)(_this2.compressText(store.acf.store_copy))
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
        key: "handleClick",
        value: function handleClick(event) {
            console.log('test');
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
                { id: "tenantSlider" },
                _react2.default.createElement(
                    _reactSlick2.default,
                    settings,
                    storeArray
                )
            );
        }
    }]);

    return TenantSlider;
}(_react2.default.Component);

exports.default = TenantSlider;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#tenantSlider{margin:2rem 0}#tenantSlider .slick-arrow:before{content:none}#tenantSlider .store:focus{outline:none}@media screen and (max-width:767px){#tenantSlider .slick-slide{padding:0 3rem;text-align:center}#tenantSlider .slick-arrow{content:\"\";border:solid #4f4b48;border-width:0 2px 2px 0;display:inline-block;padding:3px;top:25%}#tenantSlider .slick-arrow.slick-next{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);right:1rem;z-index:1}#tenantSlider .slick-arrow.slick-prev{-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);left:1rem;z-index:1}}@media screen and (min-width:768px){#tenantSlider .slick-next,#tenantSlider .slick-prev{position:absolute;top:92%;z-index:1;font-size:1.4rem;line-height:1rem;width:auto}#tenantSlider .slick-prev{left:0}#tenantSlider .slick-next{right:0}#tenantSlider .slick-arrow p{color:#333;margin:0;padding:.125rem 1rem;text-transform:uppercase}#tenantSlider .slick-next p{float:left}#tenantSlider .slick-prev p{float:right}#tenantSlider .slick-list{margin-bottom:5rem}#tenantSlider .halcyon-button{margin:2rem 0 1rem;max-width:145px}#tenantSlider .store .image-wrapper{width:50%;position:relative}#tenantSlider .store .content-wrapper{width:60%;float:right;margin-top:-200px;padding:3rem 0;background:#edece2}#tenantSlider .store .content-wrapper .inner-wrapper{width:75%;float:right;background:hsla(0,0%,100%,.8);padding:1rem 2rem}}@media screen and (min-width:1200px){#tenantSlider .store .content-wrapper{margin-top:-340px;padding:10rem 0}#tenantSlider .slick-next,#tenantSlider .slick-prev{top:94%;font-size:1.8rem}}", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAAAXNSR0IArs4c6QAAAVJJREFUOBFjYMAB/D3dQvy83efikEYRZkbhQTkgAxiYmFYwMjAaq6kqX7l1++51bOpgYiwwBoz28/bwA7JXADHzf4b/0zdv27kWJoeLZkKWABvw/z9IE9iATVt3ZiHL42IzwiRgBjAyMrIw/P8/f+O2nUkwOUI02BA/L3cPoMLNSAYkA/n/CWmGyTOCDABq3v4fqAVo4jsg9QQmSRTN+G8qC1BjOshORojHhICUEFGaoYr+/2cSYzQ2NmaVlhBZD9TsDTTrEzPD38R//xluE2sQ0x+ml2D7HRwcWPi42TcA0wXIoPf/mf5Zbd686wbRBoEUHjhw4M+nrz8DgEyQiwQZ/zId8vV10yDJEJhBbFy8oUCXrACGjygpBoG9g2YjKMYWAGMsDhhjr/8z/7Mj5DWUFAs17P+mbTsT/v//vwhowyfmP8y/0SwhicsY4OAgQIwOANXAcLpISqmLAAAAAElFTkSuQmCC"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAAAXNSR0IArs4c6QAAAVVJREFUOBGVkr9KA0EQxr/ZHEmIYGGrlbaSVlDBQwKXf5foI/goPoCtnS+gTTSc3JkQDgsbQbRIYWOhWAhCIKicmtw4G0g4IeQu2+zs7Lc/vpkdQsyqFYt5SvFR+vN7/8z3P6bJ1bRkJEdQOAWo8JPLtG3bzkXuJmEchBGizuA3EG1Q+OtNA8VBcOG6j0MMNxl4JWBbg0zTzE5sSBAL0WLHaT8NWG2Jo2cNWsxlnShIcslXtbq7rDh9LY9WmdHpfwUV3/cDqpWLD8kxI6UBwhoYGTl1MgsvJYMI+TkhIzmLHV1a0F9ZN8CDxBAOmUilDuWn9sRJQIpKTc+7m6cnVC9bJwI4AFiGjq1z5+pG20oKmQCkoX0OUWi67u24DcY4mLWPHWiAwnCn4bbuo/rYOalVrGNdggxbbwS4/A/QsFgnUm9PAO88YLPhtbpRB3PFlmUtzXrwB4gadjdg2ONQAAAAAElFTkSuQmCC"

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(62);

var _jquery = __webpack_require__(30);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Packages


var moment = __webpack_require__(64);
var momentRange = __webpack_require__(65);
moment = momentRange.extendMoment(moment);

// <ImageGrid images={this.state.imageGridData} />

var ImageGrid = function (_Component) {
    _inherits(ImageGrid, _Component);

    function ImageGrid(props) {
        _classCallCheck(this, ImageGrid);

        var _this = _possibleConstructorReturn(this, (ImageGrid.__proto__ || Object.getPrototypeOf(ImageGrid)).call(this, props));

        _this.state = {
            mergeCounter: 1,
            images: _this.props.images,
            image_group_1: "",
            image_group_2: "",
            image_group_3: "",
            image_group_4: ""
        };
        return _this;
    }

    _createClass(ImageGrid, [{
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
                return _react2.default.createElement('figure', { key: index, style: { backgroundImage: 'url(' + image.image + ')' } });
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
                            { className: 'col-xs-6 image-group image-group-1' },
                            _react2.default.createElement(
                                'div',
                                null,
                                this.mapImageArrays(this.state.images.image_group_1)
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-6' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-xs-6 image-group image-group-2' },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        this.mapImageArrays(this.state.images.image_group_2)
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-xs-6 image-group image-group-3' },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        this.mapImageArrays(this.state.images.image_group_3)
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
                                        this.mapImageArrays(this.state.images.image_group_4)
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ImageGrid;
}(_react.Component);

exports.default = ImageGrid;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".image-grid-container{overflow:hidden;margin-bottom:3rem}.image_grid .col-xs-6,.image_grid .col-xs-12{padding:0;display:block}.image_grid figure{background-size:cover;position:absolute;top:0;bottom:0;left:0;right:0}.image_group>div{position:relative}.image-group-1>div{width:100%;height:400px}.image-group-2>div,.image-group-3>div,.image-group-4>div{width:100%;height:200px}.image-group>div>figure:nth-last-of-type(2){display:none}.image_grid *{overflow:hidden}@media screen and (min-width:1200px){.image-grid-container{margin-bottom:4.5rem}}", ""]);

// exports


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("moment-range");

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

var _reactStatic = __webpack_require__(1);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactstrap = __webpack_require__(2);

var _PageSearch = __webpack_require__(24);

var _PageSearch2 = _interopRequireDefault(_PageSearch);

var _EventSearch = __webpack_require__(23);

var _EventSearch2 = _interopRequireDefault(_EventSearch);

var _StoreSearch = __webpack_require__(25);

var _StoreSearch2 = _interopRequireDefault(_StoreSearch);

__webpack_require__(67);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#searchComponent{position:relative;top:90px}#searchComponent .search-bar{position:relative;z-index:5}#theResults img{max-width:100%}#theResults{overflow:hidden}@media screen and (max-width:767px){#searchComponent{display:none;position:absolute;top:0;right:0;left:0;bottom:0;background-color:#fff;z-index:4}#searchComponent .search-bar{top:80px;border:1px solid #333}#theResults{top:80px;position:relative}}", ""]);

// exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Nav = __webpack_require__(69);

var _Nav2 = _interopRequireDefault(_Nav);

var _reactGtmModule = __webpack_require__(84);

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

            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    _reactStatic.Head,
                    null,
                    _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://use.typekit.net/osv0bnv.css' }),
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/png', href: options.acf.favicon.url })
                ),
                _react2.default.createElement(_Nav2.default, null)
            );
            if (typeof document !== 'undefined') {
                _react2.default.createElement(
                    _reactStatic.Head,
                    null,
                    tagManagerArgs ? _reactGtmModule2.default.initialize(tagManagerArgs) : ""
                );
            } else {
                return null;
            }
        }
    }]);

    return SiteHeader;
}(_react2.default.Component));

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _MenuItems = __webpack_require__(70);

var _MenuItems2 = _interopRequireDefault(_MenuItems);

var _reactstrap = __webpack_require__(2);

var _halcyonNavLogo = __webpack_require__(79);

var _halcyonNavLogo2 = _interopRequireDefault(_halcyonNavLogo);

var _navToggle = __webpack_require__(80);

var _navToggle2 = _interopRequireDefault(_navToggle);

var _reactFontawesome = __webpack_require__(28);

var _freeSolidSvgIcons = __webpack_require__(29);

var _eyeballDark = __webpack_require__(81);

var _eyeballDark2 = _interopRequireDefault(_eyeballDark);

var _fontawesomeSvgCore = __webpack_require__(82);

__webpack_require__(83);

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
/* 70 */
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

var _reactRouterBootstrap = __webpack_require__(71);

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactSvg = __webpack_require__(72);

var _reactSvg2 = _interopRequireDefault(_reactSvg);

var _directions_icon = __webpack_require__(73);

var _directions_icon2 = _interopRequireDefault(_directions_icon);

var _cinebistro_icon = __webpack_require__(74);

var _cinebistro_icon2 = _interopRequireDefault(_cinebistro_icon);

var _Dining = __webpack_require__(75);

var _Dining2 = _interopRequireDefault(_Dining);

var _events_icon = __webpack_require__(76);

var _events_icon2 = _interopRequireDefault(_events_icon);

var _shopping_icon = __webpack_require__(77);

var _shopping_icon2 = _interopRequireDefault(_shopping_icon);

var _signup_icon = __webpack_require__(78);

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
                            menu.object_slug == 'hours-directions' ? _react2.default.createElement('img', { id: 'hours-directionsIcon', src: _directions_icon2.default }) : "",
                            menu.object_slug == 'cinebistro' ? _react2.default.createElement('img', { id: 'cinebistroIcon', src: _cinebistro_icon2.default }) : "",
                            menu.object_slug == 'dining' ? _react2.default.createElement('div', { className: 'nav-icon dining' }) : "",
                            menu.object_slug == 'events' ? _react2.default.createElement('img', { id: 'eventsIcon', src: _events_icon2.default }) : "",
                            menu.object_slug == 'shopping' ? _react2.default.createElement('img', { id: 'shoppingIcon', src: _shopping_icon2.default }) : "",
                            menu.object_slug == 'sign-up' ? _react2.default.createElement('img', { id: 'sign-upIcon', src: _signup_icon2.default }) : "",
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
/* 71 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-svg");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAqCAYAAAA51uKRAAAAAXNSR0IArs4c6QAACgVJREFUWAntWHlUk1cWfyELsghoCJEQERcIaxABUZQiuIwbilSrVk8ZrHu1tlU7Wsce5485xbpWZfTooKhTWwXbQdGqBURZQgiETfY9yE5YkgDZM/cFv5yooII9Z+aPeee8vJff/b377ne/9+597yOhP6jodLqptVVVy+tFonm93d3M9o42czsms9/K2rqVxbLnubl5/ptEIlW9aTrSm4TvKuNlpv+1uPjZhnxhrmufTIbotgxkakpDCoUCdXV1IbMxZsjTi1vrM8P3xpygoMPD6X1vYwR8/j8vXjgXiUhkcnBwSJafv38Gx80tXS6XS58V5XMVKrX384YGl8ePU4PUKjVpzbqP07L5/PlHjhzRDmfUqPACYe75yA3rtZ9t3dyUmZ5+CF6V7VCKAB+f8TTt4O4d23o3rF2te5yanDQUb9RYeXl51Oef7ZDv2b2zt7mxcc+7KCopKTrw1Z7dsp1bN6uFwtzPXx1j8irwLv/hSe1y+Nnbe3q6TZeFrYxnTZz4AzEOZCZQuVDnQ/WGSiFkHh7c6BUrV8YODAyQ83PzNoGMRchwayAag2/rd3d2+pcWF/l6e/s0BwTMOkrwJRKJ7ZO01Gu5AgG3uamJYc9idXpP9ynp6OiIZDAYLZgXHDL/ZGFh4YrS0hJuY2N9EEA3ifGj8kxpWemC5uZmMtfHp9ja2lq/XeEpGY8ePvj99InjSySSXuY0Z5cW2FmMmDOnF8IaeQTyCXhS2N4NXC/vgvb2NlJNVe0CwhDcjsoziISmUmlUZG5uJiKUZWU8PZJw6+fpHwTPqwwLW/n1NA6HV1ZW7Ee3pR9LuPmzp52d3XfAjcJ8CyvLeiqViihUymRiPG5H7Bl4QpJCodSHBI1K1YOVAGYukUi9bW1tUUDg7FhnV9dE8EC7uzv3/uw5c8/B60Ld3T3uwLPBfIVC1UOlUJBUItUCZnDIiI2BSXQ0U9MWUIKUSpUTVg7FQtzVSaNRaYhuQ28ehAZ/J02aLKLRTFF3l9gU8zCqkMun4IAInu0GfepB5ig8gwc6OU56am1tg5pbmjlglANAYjs7+47GRhHqFIvXAWaGedBSa6oro+rrapEDy0EMUCtgzK7ODncrK2tkaWWdg3lE0bsICB4A2EE1uIwgDNNS3D08RcVFhW4NDQ3TnZycmoqKis7BKwk6ffLY4o72tvsZGU+L7yb+6n4t7sq8mbMDB+h2zLPgBU1ra6tnfn6epzOH0+Pr69sNc/sDLsDzkBITExe3NT//vqKiwp1CoZCHmfw1uOn5czQw0I++3Lf/t7lBwUsxIT4+PqqhtupkTXWNjVKpQFQaDU1ymixxdnY+sPqjdecxJyM9/faZUyciqFQKYjmwkaWlpcrPP+DEsrCwg5R+mfTbe0l3vRYtXlJpbm5Bwr7Fg1RqFS350UMnT2/vTke2Y9cLGIv0ZbqPL/l+UuLEJ2lpfkql0ptGoxWuWbPmCniovK2lZb1KJWdTKLRmBt02wcffPw0PgnXieub0yZlksok2LDyiTqNW635JuDUBjN4G+hMoUmnvOC8uF326ZduXpqamRfqZ4KeiomxrQb7w8JzAOTWhCxZtwLoI2YvWwspqbNxPN/41S5CT8wVg+m3L5XJ50Mf1tVKYl7erpLiY/dHa9fzwD1dvBgKtr6/vx/q6GldIrFYmZBMy0mp12CED8O6eExVCtgxrU2vUGmiaCNyorXDmuF4ZP368js/LDIXxLpg/XAH5VL4ge+EYszE6Dw/PK6DnGXDFZBMcJfSRYuRxxngyWAsJQcHBAvCgI5/H22sse7UPKWKXMDfXJXT+Qh6OQ6/K8f8RxxljJfB0XW7uXlfHjRuvzcx8ukwmk3kZy4k+eMU1KzMDFi0VObs492SmP9kKR4pvhcK8XUqVSh97MPddtzKh97XWw8Mjzs9/5vaHD+57FRUUHAACXl8vFUFO9l4Bn+colUrR5UuXlkKC0u8+TGpva0VTpznr+e9tjDBXcO5e0h03WGMoNSV5EWTuQCsrqyzCGlig/jE/nF5CQiTFV/sPZCkUAypChkNJanKyp1arZWLsvYzJyxPEHo+OjhxHp0ujwiNE52POeuXn5n4DepcTEwrz8vbz+TyHLdt3JH8QHLwOcIMx0J9YV1t7u6a6Wm/MqNcMPzv76vGj0ZH2Dqy+TzdtOQw7ax8cuHvBSyF1dXVrsTHNIlH4/aQ7i909vHp8ZvgdhzUmhiohKlBkRFzDfL1n+vpkSFRf/0luTvYiDOKiUSo5OJkN9A+MhbPu30BmOED3SHqdT3z/XQTb0VH28fqNh/wCAs7iMakpKb9cPH8uKpuXtQcWLf/X2wl7qqsqx+77+uCPTCbzIea8qeiNqa+rQ8ePRf/ZmAgnebhmiNHNn254WY4d+9IukfRK0DQXF2nEqtUGQ/DYkNDQ6PKykqDkRw9mQ/C7/Nu9pODAOXOrZs6a9Xdj3cP19cbYMhho2/ad2f39/XKCqFCpLK/GXvILCV1Q5+LKadBBYCQKpArVQJ/sEngknsBwC+6vLC19dqqwoODsN3/ZH8Kws9MsWb4iBvAyY95wfb0xTOYE5O0z4xCs7jSCWJifvx9ug35sR3YLJMJlgBsMhb4JTGA4hxBjcOvm5hG36sPVay7EnJ0XHh6RxeFw4ozlb+obFrAakhZMoCWqjjSYMF8MNuAv5EMagrkg72dOsF/1xd598WYm5PXwv/dNBhjL9J4xBv6Ivo+PTw8s4A1giPE2fqtqgzFkMpkNCgZDIQyrrqzUn1chhGPONJC9mrXfqhzGvI3jQKFQB7MkMPXG1FRXoevXrhyCM61h+yoVCtP2tjaU8nvK5IqKyltv0zoaOZwYSIX5Qpa1jf65B43B8aSxQYTPswadCoUcqVQq1NHRxoCozTAIhujgnIMfyIE9EcFlbQgGQl3iLiQS1aMpU6Yi2BgGDtyxEGEMir14oQy2oU6j0ewCYwKJClH01M5tm3VwQxQANo/Ah2pLSkqub4rcqMsTCJ4MJcdYgVD4IOqTjbrCwoLbRpxV1+MuV+L5IbeFGNYMHB1LzMzMDAkODs1zsfly+YASmmxYjMZb2/BkuMPjZeKcg8/EcuAZdGCMKHD27cd9mUzaS3DAqEkwLz686YthaxPAf7P9vzHDef9/yjMUuWJwAcFuYsGCCiGsbmiogyCI4EOhOQ2wD0A2bDSFby10OJcgMzPzMcY6CF24LSwQWmCOFdxpjTgWSrWGpNGoEeRFDenevbspF/8RE+rAZiMbm3GG8XI4RtbUVCM6nY4m2L/0gcnAITpSiQRiSAOCT60QZ/At+fUiFnei1pYWxIZYRMQVHMcqK8rR0uVh9Vu37/wTKTY2lmUz1vJOW1ubGdwK3/l6+/p0I0e0Oq2GzrBt0mpJR+E2mqLPC+A2/NUAP5IhT4xc9ahHyCDudOLR/wHFx7o7PgfVxwAAAABJRU5ErkJggg=="

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAgMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBmaWxsPSIjNTg1OTVCIiBkPSJNMTk1LjUsMjIuOWMwLTEuNi0wLjgtMy0yLjEtNGMtMS4zLTAuOS0yLjktMS4xLTQuNC0wLjdjLTIuNywwLjktNi40LDIuOS05LjIsNy43CgkJYy00LjUsNy43LTguMSwyOC4yLTExLDYyLjZjLTAuNSw1LjUsMi4yLDEwLjcsNi44LDEzLjZsMi43LDEuN2MwLjgsMC41LDEuNCwxLjUsMS4zLDIuNWwtMS4xLDY1LjNjMCwyLjgsMSw1LjUsMyw3LjUKCQljMiwyLDQuNiwzLjEsNy40LDMuMWMyLjgsMCw1LjUtMS4xLDcuNS0zLjJjMi0yLDMtNC43LDIuOS03LjVMMTk1LjUsMjIuOUMxOTUuNSwyMi45LDE5NS41LDIyLjksMTk1LjUsMjIuOXogTTE5Mi40LDE3NQoJCWMtMS43LDEuOC00LjgsMS44LTYuNiwwYy0wLjktMC45LTEuMy0yLjEtMS4zLTMuM2wxLjEtNjUuM2MwLjEtMy0xLjUtNS45LTQuMS03LjVsLTIuNy0xLjdjLTIuOC0xLjctNC40LTQuOS00LjEtOC4xCgkJYzMuNS00MS4yLDcuNS01NS40LDEwLjItNjAuMmMxLjUtMi42LDMuMy0zLjksNC44LTQuNmwzLjksMTQ3LjRDMTkzLjcsMTcyLjksMTkzLjIsMTc0LjEsMTkyLjQsMTc1eiIvPgoJPHBhdGggZmlsbD0iIzU4NTk1QiIgZD0iTTMyLjQsMTAwLjFjMCwzNi44LDI5LjksNjYuNyw2Ni43LDY2LjdjMzYuOCwwLDY2LjctMjkuOSw2Ni43LTY2LjdjMC0zNi44LTI5LjktNjYuNy02Ni43LTY2LjcKCQlDNjIuMywzMy40LDMyLjQsNjMuMywzMi40LDEwMC4xeiBNMTU5LjksMTAwLjFjMCwzMy42LTI3LjMsNjAuOS02MC45LDYwLjljLTMzLjYsMC02MC45LTI3LjMtNjAuOS02MC45CgkJYzAtMzMuNiwyNy4zLTYwLjksNjAuOS02MC45QzEzMi42LDM5LjIsMTU5LjksNjYuNSwxNTkuOSwxMDAuMXoiLz4KCTxwYXRoIGZpbGw9IiM1ODU5NUIiIGQ9Ik0xMDIuMyw1MC41YzE3LjUsMCwzMy40LDkuNyw0MS40LDI1LjNjMC41LDEsMS41LDEuNiwyLjYsMS42YzAuNCwwLDAuOS0wLjEsMS4zLTAuM2MxLjQtMC43LDItMi41LDEuMy0zLjkKCQljLTktMTcuNi0yNi44LTI4LjUtNDYuNi0yOC41Yy0xLjYsMC0yLjksMS4zLTIuOSwyLjlDOTkuMyw0OS4xLDEwMC43LDUwLjUsMTAyLjMsNTAuNXoiLz4KCTxwYXRoIGZpbGw9IiM1ODU5NUIiIGQ9Ik0xNDYuMiw4MS45YzEuNiw0LjgsMi41LDkuOSwyLjUsMTVjMCwxLjYsMS4zLDIuOSwyLjksMi45YzEuNiwwLDIuOS0xLjMsMi45LTIuOWMwLTUuOC0wLjktMTEuNS0yLjgtMTYuOQoJCWMtMC41LTEuNS0yLjItMi4zLTMuNy0xLjhDMTQ2LjUsNzguNywxNDUuNyw4MC40LDE0Ni4yLDgxLjl6Ii8+Cgk8cGF0aCBmaWxsPSIjNTg1OTVCIiBkPSJNNTQuNSwxMDAuMWMwLDI0LjYsMjAsNDQuNSw0NC41LDQ0LjVjMjQuNiwwLDQ0LjUtMjAsNDQuNS00NC41cy0yMC00NC41LTQ0LjUtNDQuNQoJCUM3NC41LDU1LjYsNTQuNSw3NS41LDU0LjUsMTAwLjF6IE05OS4xLDYxLjRjMjEuMywwLDM4LjcsMTcuNCwzOC43LDM4LjdjMCwyMS4zLTE3LjQsMzguNy0zOC43LDM4LjdjLTIxLjQsMC0zOC43LTE3LjQtMzguNy0zOC43CgkJQzYwLjQsNzguOCw3Ny43LDYxLjQsOTkuMSw2MS40eiIvPgoJPHBhdGggZmlsbD0iIzU4NTk1QiIgZD0iTTguNCwxNzljMiwyLDQuNiwzLjEsNy40LDMuMWMyLjgsMCw1LjQtMS4xLDcuNC0zLjFjMi0yLDMtNC43LDIuOS03LjVMMjMuNyw3N2M0LjktMS4zLDguNS01LjgsOC41LTExLjEKCQl2LTguMVYyMS4xYzAtMS42LTEuMy0yLjktMi45LTIuOWMtMS42LDAtMi45LDEuMy0yLjksMi45djMzLjloLTMuNVYyMS4xYzAtMS42LTEuMy0yLjktMi45LTIuOWMtMS42LDAtMi45LDEuMy0yLjksMi45djMzLjloLTIuNQoJCVYyMS4xYzAtMS42LTEuMy0yLjktMi45LTIuOWMtMS42LDAtMi45LDEuMy0yLjksMi45djMzLjlINS4zVjIxLjFjMC0xLjYtMS4zLTIuOS0yLjktMi45Yy0xLjYsMC0yLjksMS4zLTIuOSwyLjl2MzYuOFY2NgoJCWMwLDUuMywzLjYsOS43LDguNSwxMS4xbC0yLjUsOTQuNUM1LjQsMTc0LjQsNi41LDE3Nyw4LjQsMTc5eiBNNS4zLDY2di01LjJoMjEuMVY2NmMwLDMuMS0yLjUsNS42LTUuNiw1LjZjLTAuOCwwLTEuNSwwLjMtMi4xLDAuOQoJCWMtMC41LDAuNi0wLjgsMS4zLTAuOCwyLjFsMi41LDk3LjFjMCwxLjItMC40LDIuNC0xLjMsMy4zYy0xLjcsMS44LTQuOCwxLjgtNi41LDBjLTAuOS0wLjktMS4zLTItMS4zLTMuM2wyLjUtOTcuMQoJCWMwLTAuOC0wLjMtMS41LTAuOC0yLjFjLTAuNS0wLjYtMS4zLTAuOS0yLjEtMC45QzcuOCw3MS42LDUuMyw2OS4xLDUuMyw2NnoiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAYAAACIC2hQAAAAAXNSR0IArs4c6QAABDlJREFUWAntmFdoFFEUhrNGrLF3iRI1KCiKEDFEfFAUy5sIoqhYsIEFG6hgA1ERQUUfBAV1wRhQfLCBxgJ5EGxPio3YEMuD2BsWcP3+yb3J7OzM7CZbguCBb8+955x7zt07M3dKXl6IxGKxCFyBjzA4JDTQxbgD8AZGBgal6yB5D7Cyub75GNjSDkbvqe94d3xT2yFRM9rDodZGu5v1o/PVJq4LapDaKUgLV0xztRnfG9XX2F9HIpFq006uGLwKdHjDZIsyETAlLCjEt9+MX+uJuUC/e7JZNiFoFkG7oF2S4CZJ/MncMRMQ8QSOp3/WY0vo6jAvM9Yv6NnwwfSlWsEZ0GF/C5IqGK1GCqJxl0CTe2/iK9DXTXsHuhSGsWBlnAbXjD1REfATJCcSvc6hnoFvATRoRRk3HjZAW29+bCPBygqv393XiuoiknyvUfG//Mtj8Zb69RhfyQjhJ3aV5XMuNr8g2Rq0SkHJsml3b0UTOAZV2Szmk1vXQErinqj2TPe+mVKCXAW5J3qboqdyVdjU0c1jcUo17SWHjqY0IINB1Bzoqr82LPU/czE19kTt3SpsMR1fY0806QRtwP+J2pXIlP5nVtS9j2bqz6ech+eAB2xPRQwYBZ8gUHI6USalO98YKDYzeoXWE34Fk/5tbP7KteFG/SPSt1JjABwC+0jpKus0v/J7GHSn8pWsriiF9cC8D5aA2jq8B+EdqHYfGAoDYS5MZsxMVvcc7XjBYSUa70m/R+Jyk/wXeg209suKvT+cByuJt1PrQWd0ouRbYnL/QJe5J0i/E1RAf499EbbfING7XJ3U2JzfaJ01vRbZuoLOO8kcbzZskxxPLLbSxzcW3x/4DMrTByLZ2kfXMQEd5nOcb1HvZOi3N7aEN1/iL+M7DW3gCZzE1rAXNgYnk6kmYFtAYOBEWb2NjNErtKQAjqiR8RWlUA/y9gRd4TfATwInSvB20GS/gfbWcnBeh8ntSNQxpPlDphKT77ZfKnyt4LGJeYvWH0sQ7IWw3Dq0ol9Np6M1pqlbmvFaET/RDtDPODqhp/kFcV6+hL3Wp8+KOjz6OKaH2PnwFBoqjxioDw334RmF+noTUU8L8gLsG6i+zJQQ+8wbG9dn4HTIlOwkUVPQ3inxvSVi7w2rwZ4C1bRrv6TQbg/rodA72aUYtW+lK3eUmCQXTSJtU4FCTFvQ1zzJehtIe7djicU2WZvuv47g0L43DoZArd1x1u9HV+1EOAX6TDSEw6r90Feoq1rz4DhxX+gPoH0P8qEU2010dkTFQZ/UJS8g7lYZVJW4IrgLkhNBcRm1U0j3c3sOvqc9JagAvnxYCFpRiR6oOwTFZ9xOsV7wFKzcpKFPmJ2hOYwAfYF+DlZu0dC2lVuhaAEctbMI0Vr1raDn1ARJ56JJSBZmYAJ6OJ4Ng6EYtMc+hNNQCVe5cP6gfeUvsIIQFnYdDvkAAAAASUVORK5CYII="

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAAAXNSR0IArs4c6QAAADdJREFUOBFj9Pf2+M9ARfCf4X8zExXNGzWKhiHASI3Y37h1ByOyG0djHzk0BjGbKrGP7D+a5X0AwqMMznwi1B4AAAAASUVORK5CYII="

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAVCAYAAABR915hAAAAAXNSR0IArs4c6QAABNFJREFUSA21VetPXFUQnzn3sbulbHkXsQ2FpaVKxBhSY4U0Cyz7gEJi+tUgrVqj8YN/iR/8qtEvTazBxqaVx+5S2GYjSTWYPmIaS5ZaSor4wKU8du/de89xTuWysCyxqfEku3MeM7/fnTkzcwD+pxEKhZoGIsHze8Erex38l/1AIPCCW8V3EbHe1+AzZ1OpuUI8tXCj2Lq9vb3U6/XWAOSqFWDViKISOO4DYCoiz3KARXNl7UZsevq3J6S6MoQA+4Hz70Zj8XgxTDrfe5zu6TmKDF4TiLWMQTUAlgouTAFgEHkGgSEXQmMMdWFYFzOIa24iZQBeSXplPH5hL/SixMFTpxrcJe6wADwmBOcUskUi+3nDsG7vR8w+tm2DALP0c3sVxbVBezSvKyQNdXa2RKemfipGvou4LxQKMBTdRCTIozvp9fWJZDL5u2McbG0tUQ8ePCpUu4Kv5e5Gk8mlcLjzqMr0cwyhFGw+LT3tD/e8B8iOcw4TI9HoiGPvyO3E2B8KvQkoTiDD1LphXbh27dqfjqKUMlN1BmcBsRKEyNi2eZEzSGtMG6KoHBACk1dHx7+UunTXBzwaGwSE41zAzMhY7HO57wyHGPsiwQ+ZgCZu8dGRiYmoo+DIiN9/SPO4PqJIZC1bTJp2+pamlVQVI3VspOyPBLsoN/qJaOHKWPRj2iIISkv5d7o39AGFqQkFjhUjJRXUPHq/AG7ZRu7TsVhs8mlIJfbVsdgkWPwyF7yuLxw8J/fkUPqDwQgidFhgfTMyPlE09fs6OsqZW+vigPdH4xOJ3u7uY6qmnt0eXmoW7x/x1cylUguZf6Dz//fm5h40NTZlVYb+puYGZXZ2bpYchcNCQDqdztzMq+6cmR6Ph+5PgYz5vSTVdPUtCtjWnZ6ORCgaWK8o5fpOy/wKNzbuUIzXwWb1fv8RN8vC2mX68lxVmXewgzzLq+Zny8vL6dWM8YlQFFOSchDlBHLdSSQAXk/Jll5aWnqct8rPmpubS9G77x3SWc3mVi4lEr9klVTq4XpDdc1txe3ye1xaS03tc3fn5+dlXW6NxcXF3Is+36HtpN+Oxb5qb28ufanlxBnqXq/QrU1eTybvbRltTk6ePFlxqK7mvGwq5lrms3hi+ld55GQ19AUCjaizQcbBMoQ1Go1O/uiAyDJyUxk5nkpSSpS3GeLz5EUlFXyS9r529B0ZDne3qqAMUEQ1JWN8cZlcdc62iOXGQE9PnVDxDH1OA+ciwfF+lHPfYardIaqCChleSRoOB0I6skZOfVpY9u2R2NSMAyilLD11n+t1FPxVAWzBsMWlWCz2cLvODmJ54Pf71RK39oaWzf2QcbnUQlLHWOolEglr27rKo6qHVRVflh1LCLGCHG6umuYU6e24Ommzi9gB2uxSQ9s8He7t7RlUOfmBsI62nUXGyigKJXS/Lno0qiizyzi3H1B5zjEbblyJxx85eIWy6LMY6eryqZvhRSGmro7Hh/tC3Z0qV2qJV6evVYWq2FRSFoLICaAXi8NsDnO3sob9iDz8o5CocL3L40iESEEZpGBUS1Jq+MOOUVtbm1br8exXXC7dME1m6bpp00u1urpqzMzM5By9p5G7PFYMyAo3csZ3kkqwTfC/ngb4WXVkD3/Sx58V4N/s/gahbTGJJAoYyAAAAABJRU5ErkJggg=="

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core/styles.css");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("react-gtm-module");

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

var _reactHtmlParser = __webpack_require__(3);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactHelmet = __webpack_require__(5);

var _reactstrap = __webpack_require__(2);

var _footerLogo = __webpack_require__(86);

var _footerLogo2 = _interopRequireDefault(_footerLogo);

var _footerAccessIcon = __webpack_require__(87);

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
                                    null,
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
    }]);

    return SiteFooter;
}(_react2.default.Component));

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAMCAYAAACEJVa/AAAAAXNSR0IArs4c6QAAAilJREFUKBWVkT1oFFEQx2fe282eCdx5WSUhyQkBCdhcJSh2VsZCsLOxiQgKEkFFsbM1kggKoiCi+NWIEZMUFsFC0FqtVLhc7rxbDt3dSw4Jyd2+mczz2CtS6RTv7cyb+e1/ZgD+06IoOBaG1cfMrNNSJ/1I7yD4vqe/f6BIBicBzQQAZplhgzl5iOj2IZt7gDCPiCat6UGEjHH8c0qKppOEM8CmrrQKgOAbA41qrX02fJMAFoHhUQqwt7JHuVzOhGFtSQouIsKs49CRzS19CkA0KBgB0MtMOMPIogBeSXxmfT2YtLXWlCjo2511nwstaP0xhwcHCy+07rieR2+MoUqnQ8sKeZYB3vr+vvO+X3hnjL7U6STXw3D1goU4UVR7KfQVf2/hmg1Ya7d3HVVoMtpxvpLh+wiwIBDTarX8bDYbDQ2NfWk0StOu4zxoNqt1pRSURfRBO5MuwjbR3kTF8xZgFcjLa3k7JDnids3z3HFi8KSZVSXyryJSHMe1xbW1xrhN0dpDYHWFgZcAiGRWdwV9J5fLxfY9DCunJSrK3XP5/Njn3t+j39U5RlWUnKcyg9u2hYTgmSg9KaBPzOqjA3TAoLrMTBNau2fy+ZEPFtqDWCeK6lMIdMu2IHPyRfwoMm/IWgckVbYMRmLv2+2tueHh/b9sjbW/EDuPZrNxHCh5Iv0vyAbOxnH9BJEpyoaU6+oVIv7hurlS2lK3fMcZx6VcFFVu7Aj/k7sNs5YJFK83d74AAAAASUVORK5CYII="

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.537d7a9f.js.map