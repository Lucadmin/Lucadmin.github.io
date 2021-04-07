// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"aktiengraphen/chart.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _get2(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get2 = Reflect.get; } else { _get2 = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get2(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Chart.js v3.0.1
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Chart = factory());
})(this, function () {
  'use strict';

  function fontString(pixelSize, fontStyle, fontFamily) {
    return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
  }

  var requestAnimFrame = function () {
    if (typeof window === 'undefined') {
      return function (callback) {
        return callback();
      };
    }

    return window.requestAnimationFrame;
  }();

  function throttled(fn, thisArg, updateFn) {
    var updateArgs = updateFn || function (args) {
      return Array.prototype.slice.call(args);
    };

    var ticking = false;
    var args = [];
    return function () {
      for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      args = updateArgs(rest);

      if (!ticking) {
        ticking = true;
        requestAnimFrame.call(window, function () {
          ticking = false;
          fn.apply(thisArg, args);
        });
      }
    };
  }

  function debounce(fn, delay) {
    var timeout;
    return function () {
      if (delay) {
        clearTimeout(timeout);
        timeout = setTimeout(fn, delay);
      } else {
        fn();
      }

      return delay;
    };
  }

  var _toLeftRightCenter = function _toLeftRightCenter(align) {
    return align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
  };

  var _alignStartEnd = function _alignStartEnd(align, start, end) {
    return align === 'start' ? start : align === 'end' ? end : (start + end) / 2;
  };

  var _textX = function _textX(align, left, right) {
    return align === 'right' ? right : align === 'center' ? (left + right) / 2 : left;
  };

  var Animator = /*#__PURE__*/function () {
    function Animator() {
      _classCallCheck(this, Animator);

      this._request = null;
      this._charts = new Map();
      this._running = false;
      this._lastDate = undefined;
    }

    _createClass(Animator, [{
      key: "_notify",
      value: function _notify(chart, anims, date, type) {
        var callbacks = anims.listeners[type];
        var numSteps = anims.duration;
        callbacks.forEach(function (fn) {
          return fn({
            chart: chart,
            numSteps: numSteps,
            currentStep: Math.min(date - anims.start, numSteps)
          });
        });
      }
    }, {
      key: "_refresh",
      value: function _refresh() {
        var me = this;

        if (me._request) {
          return;
        }

        me._running = true;
        me._request = requestAnimFrame.call(window, function () {
          me._update();

          me._request = null;

          if (me._running) {
            me._refresh();
          }
        });
      }
    }, {
      key: "_update",
      value: function _update() {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
        var me = this;
        var remaining = 0;

        me._charts.forEach(function (anims, chart) {
          if (!anims.running || !anims.items.length) {
            return;
          }

          var items = anims.items;
          var i = items.length - 1;
          var draw = false;
          var item;

          for (; i >= 0; --i) {
            item = items[i];

            if (item._active) {
              if (item._total > anims.duration) {
                anims.duration = item._total;
              }

              item.tick(date);
              draw = true;
            } else {
              items[i] = items[items.length - 1];
              items.pop();
            }
          }

          if (draw) {
            chart.draw();

            me._notify(chart, anims, date, 'progress');
          }

          if (!items.length) {
            anims.running = false;

            me._notify(chart, anims, date, 'complete');
          }

          remaining += items.length;
        });

        me._lastDate = date;

        if (remaining === 0) {
          me._running = false;
        }
      }
    }, {
      key: "_getAnims",
      value: function _getAnims(chart) {
        var charts = this._charts;
        var anims = charts.get(chart);

        if (!anims) {
          anims = {
            running: false,
            items: [],
            listeners: {
              complete: [],
              progress: []
            }
          };
          charts.set(chart, anims);
        }

        return anims;
      }
    }, {
      key: "listen",
      value: function listen(chart, event, cb) {
        this._getAnims(chart).listeners[event].push(cb);
      }
    }, {
      key: "add",
      value: function add(chart, items) {
        var _this$_getAnims$items;

        if (!items || !items.length) {
          return;
        }

        (_this$_getAnims$items = this._getAnims(chart).items).push.apply(_this$_getAnims$items, _toConsumableArray(items));
      }
    }, {
      key: "has",
      value: function has(chart) {
        return this._getAnims(chart).items.length > 0;
      }
    }, {
      key: "start",
      value: function start(chart) {
        var anims = this._charts.get(chart);

        if (!anims) {
          return;
        }

        anims.running = true;
        anims.start = Date.now();
        anims.duration = anims.items.reduce(function (acc, cur) {
          return Math.max(acc, cur._duration);
        }, 0);

        this._refresh();
      }
    }, {
      key: "running",
      value: function running(chart) {
        if (!this._running) {
          return false;
        }

        var anims = this._charts.get(chart);

        if (!anims || !anims.running || !anims.items.length) {
          return false;
        }

        return true;
      }
    }, {
      key: "stop",
      value: function stop(chart) {
        var anims = this._charts.get(chart);

        if (!anims || !anims.items.length) {
          return;
        }

        var items = anims.items;
        var i = items.length - 1;

        for (; i >= 0; --i) {
          items[i].cancel();
        }

        anims.items = [];

        this._notify(chart, anims, Date.now(), 'complete');
      }
    }, {
      key: "remove",
      value: function remove(chart) {
        return this._charts.delete(chart);
      }
    }]);

    return Animator;
  }();

  var animator = new Animator();
  /*!
  * @kurkle/color v0.1.9
  * https://github.com/kurkle/color#readme
  * (c) 2020 Jukka Kurkela
  * Released under the MIT License
  */

  var map = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  };
  var hex = '0123456789ABCDEF';

  var h1 = function h1(b) {
    return hex[b & 0xF];
  };

  var h2 = function h2(b) {
    return hex[(b & 0xF0) >> 4] + hex[b & 0xF];
  };

  var eq = function eq(b) {
    return (b & 0xF0) >> 4 === (b & 0xF);
  };

  function isShort(v) {
    return eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
  }

  function hexParse(str) {
    var len = str.length;
    var ret;

    if (str[0] === '#') {
      if (len === 4 || len === 5) {
        ret = {
          r: 255 & map[str[1]] * 17,
          g: 255 & map[str[2]] * 17,
          b: 255 & map[str[3]] * 17,
          a: len === 5 ? map[str[4]] * 17 : 255
        };
      } else if (len === 7 || len === 9) {
        ret = {
          r: map[str[1]] << 4 | map[str[2]],
          g: map[str[3]] << 4 | map[str[4]],
          b: map[str[5]] << 4 | map[str[6]],
          a: len === 9 ? map[str[7]] << 4 | map[str[8]] : 255
        };
      }
    }

    return ret;
  }

  function _hexString(v) {
    var f = isShort(v) ? h1 : h2;
    return v ? '#' + f(v.r) + f(v.g) + f(v.b) + (v.a < 255 ? f(v.a) : '') : v;
  }

  function round(v) {
    return v + 0.5 | 0;
  }

  var lim = function lim(v, l, h) {
    return Math.max(Math.min(v, h), l);
  };

  function p2b(v) {
    return lim(round(v * 2.55), 0, 255);
  }

  function n2b(v) {
    return lim(round(v * 255), 0, 255);
  }

  function b2n(v) {
    return lim(round(v / 2.55) / 100, 0, 1);
  }

  function n2p(v) {
    return lim(round(v * 100), 0, 100);
  }

  var RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;

  function rgbParse(str) {
    var m = RGB_RE.exec(str);
    var a = 255;
    var r, g, b;

    if (!m) {
      return;
    }

    if (m[7] !== r) {
      var v = +m[7];
      a = 255 & (m[8] ? p2b(v) : v * 255);
    }

    r = +m[1];
    g = +m[3];
    b = +m[5];
    r = 255 & (m[2] ? p2b(r) : r);
    g = 255 & (m[4] ? p2b(g) : g);
    b = 255 & (m[6] ? p2b(b) : b);
    return {
      r: r,
      g: g,
      b: b,
      a: a
    };
  }

  function _rgbString(v) {
    return v && (v.a < 255 ? "rgba(".concat(v.r, ", ").concat(v.g, ", ").concat(v.b, ", ").concat(b2n(v.a), ")") : "rgb(".concat(v.r, ", ").concat(v.g, ", ").concat(v.b, ")"));
  }

  var HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

  function hsl2rgbn(h, s, l) {
    var a = s * Math.min(l, 1 - l);

    var f = function f(n) {
      var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
      return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    };

    return [f(0), f(8), f(4)];
  }

  function hsv2rgbn(h, s, v) {
    var f = function f(n) {
      var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 60) % 6;
      return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    };

    return [f(5), f(3), f(1)];
  }

  function hwb2rgbn(h, w, b) {
    var rgb = hsl2rgbn(h, 1, 0.5);
    var i;

    if (w + b > 1) {
      i = 1 / (w + b);
      w *= i;
      b *= i;
    }

    for (i = 0; i < 3; i++) {
      rgb[i] *= 1 - w - b;
      rgb[i] += w;
    }

    return rgb;
  }

  function rgb2hsl(v) {
    var range = 255;
    var r = v.r / range;
    var g = v.g / range;
    var b = v.b / range;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var l = (max + min) / 2;
    var h, s, d;

    if (max !== min) {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h = h * 60 + 0.5;
    }

    return [h | 0, s || 0, l];
  }

  function calln(f, a, b, c) {
    return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
  }

  function hsl2rgb(h, s, l) {
    return calln(hsl2rgbn, h, s, l);
  }

  function hwb2rgb(h, w, b) {
    return calln(hwb2rgbn, h, w, b);
  }

  function hsv2rgb(h, s, v) {
    return calln(hsv2rgbn, h, s, v);
  }

  function hue(h) {
    return (h % 360 + 360) % 360;
  }

  function hueParse(str) {
    var m = HUE_RE.exec(str);
    var a = 255;
    var v;

    if (!m) {
      return;
    }

    if (m[5] !== v) {
      a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
    }

    var h = hue(+m[2]);
    var p1 = +m[3] / 100;
    var p2 = +m[4] / 100;

    if (m[1] === 'hwb') {
      v = hwb2rgb(h, p1, p2);
    } else if (m[1] === 'hsv') {
      v = hsv2rgb(h, p1, p2);
    } else {
      v = hsl2rgb(h, p1, p2);
    }

    return {
      r: v[0],
      g: v[1],
      b: v[2],
      a: a
    };
  }

  function _rotate(v, deg) {
    var h = rgb2hsl(v);
    h[0] = hue(h[0] + deg);
    h = hsl2rgb(h);
    v.r = h[0];
    v.g = h[1];
    v.b = h[2];
  }

  function _hslString(v) {
    if (!v) {
      return;
    }

    var a = rgb2hsl(v);
    var h = a[0];
    var s = n2p(a[1]);
    var l = n2p(a[2]);
    return v.a < 255 ? "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(b2n(v.a), ")") : "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)");
  }

  var map$1 = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh'
  };
  var names = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32'
  };

  function unpack() {
    var unpacked = {};
    var keys = Object.keys(names);
    var tkeys = Object.keys(map$1);
    var i, j, k, ok, nk;

    for (i = 0; i < keys.length; i++) {
      ok = nk = keys[i];

      for (j = 0; j < tkeys.length; j++) {
        k = tkeys[j];
        nk = nk.replace(k, map$1[k]);
      }

      k = parseInt(names[ok], 16);
      unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
    }

    return unpacked;
  }

  var names$1;

  function nameParse(str) {
    if (!names$1) {
      names$1 = unpack();
      names$1.transparent = [0, 0, 0, 0];
    }

    var a = names$1[str.toLowerCase()];
    return a && {
      r: a[0],
      g: a[1],
      b: a[2],
      a: a.length === 4 ? a[3] : 255
    };
  }

  function modHSL(v, i, ratio) {
    if (v) {
      var tmp = rgb2hsl(v);
      tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
      tmp = hsl2rgb(tmp);
      v.r = tmp[0];
      v.g = tmp[1];
      v.b = tmp[2];
    }
  }

  function clone$1(v, proto) {
    return v ? Object.assign(proto || {}, v) : v;
  }

  function fromObject(input) {
    var v = {
      r: 0,
      g: 0,
      b: 0,
      a: 255
    };

    if (Array.isArray(input)) {
      if (input.length >= 3) {
        v = {
          r: input[0],
          g: input[1],
          b: input[2],
          a: 255
        };

        if (input.length > 3) {
          v.a = n2b(input[3]);
        }
      }
    } else {
      v = clone$1(input, {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      });
      v.a = n2b(v.a);
    }

    return v;
  }

  function functionParse(str) {
    if (str.charAt(0) === 'r') {
      return rgbParse(str);
    }

    return hueParse(str);
  }

  var Color = /*#__PURE__*/function () {
    function Color(input) {
      _classCallCheck(this, Color);

      if (input instanceof Color) {
        return input;
      }

      var type = _typeof(input);

      var v;

      if (type === 'object') {
        v = fromObject(input);
      } else if (type === 'string') {
        v = hexParse(input) || nameParse(input) || functionParse(input);
      }

      this._rgb = v;
      this._valid = !!v;
    }

    _createClass(Color, [{
      key: "valid",
      get: function get() {
        return this._valid;
      }
    }, {
      key: "rgb",
      get: function get() {
        var v = clone$1(this._rgb);

        if (v) {
          v.a = b2n(v.a);
        }

        return v;
      },
      set: function set(obj) {
        this._rgb = fromObject(obj);
      }
    }, {
      key: "rgbString",
      value: function rgbString() {
        return this._valid ? _rgbString(this._rgb) : this._rgb;
      }
    }, {
      key: "hexString",
      value: function hexString() {
        return this._valid ? _hexString(this._rgb) : this._rgb;
      }
    }, {
      key: "hslString",
      value: function hslString() {
        return this._valid ? _hslString(this._rgb) : this._rgb;
      }
    }, {
      key: "mix",
      value: function mix(color, weight) {
        var me = this;

        if (color) {
          var c1 = me.rgb;
          var c2 = color.rgb;
          var w2;
          var p = weight === w2 ? 0.5 : weight;
          var w = 2 * p - 1;
          var a = c1.a - c2.a;
          var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
          w2 = 1 - w1;
          c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
          c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
          c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
          c1.a = p * c1.a + (1 - p) * c2.a;
          me.rgb = c1;
        }

        return me;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Color(this.rgb);
      }
    }, {
      key: "alpha",
      value: function alpha(a) {
        this._rgb.a = n2b(a);
        return this;
      }
    }, {
      key: "clearer",
      value: function clearer(ratio) {
        var rgb = this._rgb;
        rgb.a *= 1 - ratio;
        return this;
      }
    }, {
      key: "greyscale",
      value: function greyscale() {
        var rgb = this._rgb;
        var val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
        rgb.r = rgb.g = rgb.b = val;
        return this;
      }
    }, {
      key: "opaquer",
      value: function opaquer(ratio) {
        var rgb = this._rgb;
        rgb.a *= 1 + ratio;
        return this;
      }
    }, {
      key: "negate",
      value: function negate() {
        var v = this._rgb;
        v.r = 255 - v.r;
        v.g = 255 - v.g;
        v.b = 255 - v.b;
        return this;
      }
    }, {
      key: "lighten",
      value: function lighten(ratio) {
        modHSL(this._rgb, 2, ratio);
        return this;
      }
    }, {
      key: "darken",
      value: function darken(ratio) {
        modHSL(this._rgb, 2, -ratio);
        return this;
      }
    }, {
      key: "saturate",
      value: function saturate(ratio) {
        modHSL(this._rgb, 1, ratio);
        return this;
      }
    }, {
      key: "desaturate",
      value: function desaturate(ratio) {
        modHSL(this._rgb, 1, -ratio);
        return this;
      }
    }, {
      key: "rotate",
      value: function rotate(deg) {
        _rotate(this._rgb, deg);

        return this;
      }
    }]);

    return Color;
  }();

  function index_esm(input) {
    return new Color(input);
  }

  var isPatternOrGradient = function isPatternOrGradient(value) {
    return value instanceof CanvasGradient || value instanceof CanvasPattern;
  };

  function _color(value) {
    return isPatternOrGradient(value) ? value : index_esm(value);
  }

  function getHoverColor(value) {
    return isPatternOrGradient(value) ? value : index_esm(value).saturate(0.5).darken(0.1).hexString();
  }

  function noop() {}

  var uid = function () {
    var id = 0;
    return function () {
      return id++;
    };
  }();

  function isNullOrUndef(value) {
    return value === null || typeof value === 'undefined';
  }

  function isArray(value) {
    if (Array.isArray && Array.isArray(value)) {
      return true;
    }

    var type = Object.prototype.toString.call(value);

    if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
      return true;
    }

    return false;
  }

  function isObject(value) {
    return value !== null && Object.prototype.toString.call(value) === '[object Object]';
  }

  var isNumberFinite = function isNumberFinite(value) {
    return (typeof value === 'number' || value instanceof Number) && isFinite(+value);
  };

  function finiteOrDefault(value, defaultValue) {
    return isNumberFinite(value) ? value : defaultValue;
  }

  function valueOrDefault(value, defaultValue) {
    return typeof value === 'undefined' ? defaultValue : value;
  }

  var toPercentage = function toPercentage(value, dimension) {
    return typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 : value / dimension;
  };

  var toDimension = function toDimension(value, dimension) {
    return typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 * dimension : +value;
  };

  function callback(fn, args, thisArg) {
    if (fn && typeof fn.call === 'function') {
      return fn.apply(thisArg, args);
    }
  }

  function each(loopable, fn, thisArg, reverse) {
    var i, len, keys;

    if (isArray(loopable)) {
      len = loopable.length;

      if (reverse) {
        for (i = len - 1; i >= 0; i--) {
          fn.call(thisArg, loopable[i], i);
        }
      } else {
        for (i = 0; i < len; i++) {
          fn.call(thisArg, loopable[i], i);
        }
      }
    } else if (isObject(loopable)) {
      keys = Object.keys(loopable);
      len = keys.length;

      for (i = 0; i < len; i++) {
        fn.call(thisArg, loopable[keys[i]], keys[i]);
      }
    }
  }

  function _elementsEqual(a0, a1) {
    var i, ilen, v0, v1;

    if (!a0 || !a1 || a0.length !== a1.length) {
      return false;
    }

    for (i = 0, ilen = a0.length; i < ilen; ++i) {
      v0 = a0[i];
      v1 = a1[i];

      if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
        return false;
      }
    }

    return true;
  }

  function clone(source) {
    if (isArray(source)) {
      return source.map(clone);
    }

    if (isObject(source)) {
      var target = Object.create(null);
      var keys = Object.keys(source);
      var klen = keys.length;
      var k = 0;

      for (; k < klen; ++k) {
        target[keys[k]] = clone(source[keys[k]]);
      }

      return target;
    }

    return source;
  }

  function isValidKey(key) {
    return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
  }

  function _merger(key, target, source, options) {
    if (!isValidKey(key)) {
      return;
    }

    var tval = target[key];
    var sval = source[key];

    if (isObject(tval) && isObject(sval)) {
      merge(tval, sval, options);
    } else {
      target[key] = clone(sval);
    }
  }

  function merge(target, source, options) {
    var sources = isArray(source) ? source : [source];
    var ilen = sources.length;

    if (!isObject(target)) {
      return target;
    }

    options = options || {};
    var merger = options.merger || _merger;

    for (var i = 0; i < ilen; ++i) {
      source = sources[i];

      if (!isObject(source)) {
        continue;
      }

      var keys = Object.keys(source);

      for (var k = 0, klen = keys.length; k < klen; ++k) {
        merger(keys[k], target, source, options);
      }
    }

    return target;
  }

  function mergeIf(target, source) {
    return merge(target, source, {
      merger: _mergerIf
    });
  }

  function _mergerIf(key, target, source) {
    if (!isValidKey(key)) {
      return;
    }

    var tval = target[key];
    var sval = source[key];

    if (isObject(tval) && isObject(sval)) {
      mergeIf(tval, sval);
    } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
      target[key] = clone(sval);
    }
  }

  function _deprecated(scope, value, previous, current) {
    if (value !== undefined) {
      console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
    }
  }

  var emptyString = '';
  var dot = '.';

  function indexOfDotOrLength(key, start) {
    var idx = key.indexOf(dot, start);
    return idx === -1 ? key.length : idx;
  }

  function resolveObjectKey(obj, key) {
    if (key === emptyString) {
      return obj;
    }

    var pos = 0;
    var idx = indexOfDotOrLength(key, pos);

    while (obj && idx > pos) {
      obj = obj[key.substr(pos, idx - pos)];
      pos = idx + 1;
      idx = indexOfDotOrLength(key, pos);
    }

    return obj;
  }

  function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  var defined = function defined(value) {
    return typeof value !== 'undefined';
  };

  var isFunction = function isFunction(value) {
    return typeof value === 'function';
  };

  var overrides = Object.create(null);
  var descriptors = Object.create(null);

  function getScope$1(node, key) {
    if (!key) {
      return node;
    }

    var keys = key.split('.');

    for (var i = 0, n = keys.length; i < n; ++i) {
      var k = keys[i];
      node = node[k] || (node[k] = Object.create(null));
    }

    return node;
  }

  function _set(root, scope, values) {
    if (typeof scope === 'string') {
      return merge(getScope$1(root, scope), values);
    }

    return merge(getScope$1(root, ''), scope);
  }

  var Defaults = /*#__PURE__*/function () {
    function Defaults(_descriptors) {
      _classCallCheck(this, Defaults);

      this.animation = undefined;
      this.backgroundColor = 'rgba(0,0,0,0.1)';
      this.borderColor = 'rgba(0,0,0,0.1)';
      this.color = '#666';
      this.datasets = {};

      this.devicePixelRatio = function (context) {
        return context.chart.platform.getDevicePixelRatio();
      };

      this.elements = {};
      this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'];
      this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: 'normal',
        lineHeight: 1.2,
        weight: null
      };
      this.hover = {};

      this.hoverBackgroundColor = function (ctx, options) {
        return getHoverColor(options.backgroundColor);
      };

      this.hoverBorderColor = function (ctx, options) {
        return getHoverColor(options.borderColor);
      };

      this.hoverColor = function (ctx, options) {
        return getHoverColor(options.color);
      };

      this.indexAxis = 'x';
      this.interaction = {
        mode: 'nearest',
        intersect: true
      };
      this.maintainAspectRatio = true;
      this.onHover = null;
      this.onClick = null;
      this.parsing = true;
      this.plugins = {};
      this.responsive = true;
      this.scale = undefined;
      this.scales = {};
      this.showLine = true;
      this.describe(_descriptors);
    }

    _createClass(Defaults, [{
      key: "set",
      value: function set(scope, values) {
        return _set(this, scope, values);
      }
    }, {
      key: "get",
      value: function get(scope) {
        return getScope$1(this, scope);
      }
    }, {
      key: "describe",
      value: function describe(scope, values) {
        return _set(descriptors, scope, values);
      }
    }, {
      key: "override",
      value: function override(scope, values) {
        return _set(overrides, scope, values);
      }
    }, {
      key: "route",
      value: function route(scope, name, targetScope, targetName) {
        var _Object$definePropert;

        var scopeObject = getScope$1(this, scope);
        var targetScopeObject = getScope$1(this, targetScope);
        var privateName = '_' + name;
        Object.defineProperties(scopeObject, (_Object$definePropert = {}, _defineProperty(_Object$definePropert, privateName, {
          value: scopeObject[name],
          writable: true
        }), _defineProperty(_Object$definePropert, name, {
          enumerable: true,
          get: function get() {
            var local = this[privateName];
            var target = targetScopeObject[targetName];

            if (isObject(local)) {
              return Object.assign({}, target, local);
            }

            return valueOrDefault(local, target);
          },
          set: function set(value) {
            this[privateName] = value;
          }
        }), _Object$definePropert));
      }
    }]);

    return Defaults;
  }();

  var defaults = new Defaults({
    _scriptable: function _scriptable(name) {
      return !name.startsWith('on');
    },
    _indexable: function _indexable(name) {
      return name !== 'events';
    },
    hover: {
      _fallback: 'interaction'
    },
    interaction: {
      _scriptable: false,
      _indexable: false
    }
  });
  var PI = Math.PI;
  var TAU = 2 * PI;
  var PITAU = TAU + PI;
  var INFINITY = Number.POSITIVE_INFINITY;
  var RAD_PER_DEG = PI / 180;
  var HALF_PI = PI / 2;
  var QUARTER_PI = PI / 4;
  var TWO_THIRDS_PI = PI * 2 / 3;
  var log10 = Math.log10;
  var sign = Math.sign;

  function niceNum(range) {
    var niceRange = Math.pow(10, Math.floor(log10(range)));
    var fraction = range / niceRange;
    var niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
  }

  function _factorize(value) {
    var result = [];
    var sqrt = Math.sqrt(value);
    var i;

    for (i = 1; i < sqrt; i++) {
      if (value % i === 0) {
        result.push(i);
        result.push(value / i);
      }
    }

    if (sqrt === (sqrt | 0)) {
      result.push(sqrt);
    }

    result.sort(function (a, b) {
      return a - b;
    }).pop();
    return result;
  }

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function almostEquals(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
  }

  function almostWhole(x, epsilon) {
    var rounded = Math.round(x);
    return rounded - epsilon <= x && rounded + epsilon >= x;
  }

  function _setMinAndMaxByKey(array, target, property) {
    var i, ilen, value;

    for (i = 0, ilen = array.length; i < ilen; i++) {
      value = array[i][property];

      if (!isNaN(value)) {
        target.min = Math.min(target.min, value);
        target.max = Math.max(target.max, value);
      }
    }
  }

  function toRadians(degrees) {
    return degrees * (PI / 180);
  }

  function toDegrees(radians) {
    return radians * (180 / PI);
  }

  function _decimalPlaces(x) {
    if (!isNumberFinite(x)) {
      return;
    }

    var e = 1;
    var p = 0;

    while (Math.round(x * e) / e !== x) {
      e *= 10;
      p++;
    }

    return p;
  }

  function getAngleFromPoint(centrePoint, anglePoint) {
    var distanceFromXCenter = anglePoint.x - centrePoint.x;
    var distanceFromYCenter = anglePoint.y - centrePoint.y;
    var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

    if (angle < -0.5 * PI) {
      angle += TAU;
    }

    return {
      angle: angle,
      distance: radialDistanceFromCenter
    };
  }

  function distanceBetweenPoints(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
  }

  function _angleDiff(a, b) {
    return (a - b + PITAU) % TAU - PI;
  }

  function _normalizeAngle(a) {
    return (a % TAU + TAU) % TAU;
  }

  function _angleBetween(angle, start, end) {
    var a = _normalizeAngle(angle);

    var s = _normalizeAngle(start);

    var e = _normalizeAngle(end);

    var angleToStart = _normalizeAngle(s - a);

    var angleToEnd = _normalizeAngle(e - a);

    var startToAngle = _normalizeAngle(a - s);

    var endToAngle = _normalizeAngle(a - e);

    return a === s || a === e || angleToStart > angleToEnd && startToAngle < endToAngle;
  }

  function _limitValue(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function _int16Range(value) {
    return _limitValue(value, -32768, 32767);
  }

  function toFontString(font) {
    if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
      return null;
    }

    return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
  }

  function _measureText(ctx, data, gc, longest, string) {
    var textWidth = data[string];

    if (!textWidth) {
      textWidth = data[string] = ctx.measureText(string).width;
      gc.push(string);
    }

    if (textWidth > longest) {
      longest = textWidth;
    }

    return longest;
  }

  function _longestText(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    var data = cache.data = cache.data || {};
    var gc = cache.garbageCollect = cache.garbageCollect || [];

    if (cache.font !== font) {
      data = cache.data = {};
      gc = cache.garbageCollect = [];
      cache.font = font;
    }

    ctx.save();
    ctx.font = font;
    var longest = 0;
    var ilen = arrayOfThings.length;
    var i, j, jlen, thing, nestedThing;

    for (i = 0; i < ilen; i++) {
      thing = arrayOfThings[i];

      if (thing !== undefined && thing !== null && isArray(thing) !== true) {
        longest = _measureText(ctx, data, gc, longest, thing);
      } else if (isArray(thing)) {
        for (j = 0, jlen = thing.length; j < jlen; j++) {
          nestedThing = thing[j];

          if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) {
            longest = _measureText(ctx, data, gc, longest, nestedThing);
          }
        }
      }
    }

    ctx.restore();
    var gcLen = gc.length / 2;

    if (gcLen > arrayOfThings.length) {
      for (i = 0; i < gcLen; i++) {
        delete data[gc[i]];
      }

      gc.splice(0, gcLen);
    }

    return longest;
  }

  function _alignPixel(chart, pixel, width) {
    var devicePixelRatio = chart.currentDevicePixelRatio;
    var halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
  }

  function clearCanvas(canvas, ctx) {
    ctx = ctx || canvas.getContext('2d');
    ctx.save();
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }

  function drawPoint(ctx, options, x, y) {
    var type, xOffset, yOffset, size, cornerRadius;
    var style = options.pointStyle;
    var rotation = options.rotation;
    var radius = options.radius;
    var rad = (rotation || 0) * RAD_PER_DEG;

    if (style && _typeof(style) === 'object') {
      type = style.toString();

      if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rad);
        ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
        ctx.restore();
        return;
      }
    }

    if (isNaN(radius) || radius <= 0) {
      return;
    }

    ctx.beginPath();

    switch (style) {
      default:
        ctx.arc(x, y, radius, 0, TAU);
        ctx.closePath();
        break;

      case 'triangle':
        ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
        ctx.closePath();
        break;

      case 'rectRounded':
        cornerRadius = radius * 0.516;
        size = radius - cornerRadius;
        xOffset = Math.cos(rad + QUARTER_PI) * size;
        yOffset = Math.sin(rad + QUARTER_PI) * size;
        ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
        ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
        ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
        ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
        ctx.closePath();
        break;

      case 'rect':
        if (!rotation) {
          size = Math.SQRT1_2 * radius;
          ctx.rect(x - size, y - size, 2 * size, 2 * size);
          break;
        }

        rad += QUARTER_PI;

      case 'rectRot':
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + yOffset, y - xOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        ctx.closePath();
        break;

      case 'crossRot':
        rad += QUARTER_PI;

      case 'cross':
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.moveTo(x + yOffset, y - xOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        break;

      case 'star':
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.moveTo(x + yOffset, y - xOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        rad += QUARTER_PI;
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        ctx.moveTo(x + yOffset, y - xOffset);
        ctx.lineTo(x - yOffset, y + xOffset);
        break;

      case 'line':
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x - xOffset, y - yOffset);
        ctx.lineTo(x + xOffset, y + yOffset);
        break;

      case 'dash':
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
        break;
    }

    ctx.fill();

    if (options.borderWidth > 0) {
      ctx.stroke();
    }
  }

  function _isPointInArea(point, area, margin) {
    margin = margin || 0.5;
    return point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
  }

  function clipArea(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
  }

  function unclipArea(ctx) {
    ctx.restore();
  }

  function _steppedLineTo(ctx, previous, target, flip, mode) {
    if (!previous) {
      return ctx.lineTo(target.x, target.y);
    }

    if (mode === 'middle') {
      var midpoint = (previous.x + target.x) / 2.0;
      ctx.lineTo(midpoint, previous.y);
      ctx.lineTo(midpoint, target.y);
    } else if (mode === 'after' !== !!flip) {
      ctx.lineTo(previous.x, target.y);
    } else {
      ctx.lineTo(target.x, previous.y);
    }

    ctx.lineTo(target.x, target.y);
  }

  function _bezierCurveTo(ctx, previous, target, flip) {
    if (!previous) {
      return ctx.lineTo(target.x, target.y);
    }

    ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
  }

  function renderText(ctx, text, x, y, font) {
    var opts = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    var lines = isArray(text) ? text : [text];
    var stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
    var i, line;
    ctx.save();

    if (opts.translation) {
      ctx.translate(opts.translation[0], opts.translation[1]);
    }

    if (!isNullOrUndef(opts.rotation)) {
      ctx.rotate(opts.rotation);
    }

    ctx.font = font.string;

    if (opts.color) {
      ctx.fillStyle = opts.color;
    }

    if (opts.textAlign) {
      ctx.textAlign = opts.textAlign;
    }

    if (opts.textBaseline) {
      ctx.textBaseline = opts.textBaseline;
    }

    for (i = 0; i < lines.length; ++i) {
      line = lines[i];

      if (stroke) {
        if (opts.strokeColor) {
          ctx.strokeStyle = opts.strokeColor;
        }

        if (!isNullOrUndef(opts.strokeWidth)) {
          ctx.lineWidth = opts.strokeWidth;
        }

        ctx.strokeText(line, x, y, opts.maxWidth);
      }

      ctx.fillText(line, x, y, opts.maxWidth);

      if (opts.strikethrough || opts.underline) {
        var metrics = ctx.measureText(line);
        var left = x - metrics.actualBoundingBoxLeft;
        var right = x + metrics.actualBoundingBoxRight;
        var top = y - metrics.actualBoundingBoxAscent;
        var bottom = y + metrics.actualBoundingBoxDescent;
        var yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath();
        ctx.lineWidth = opts.decorationWidth || 2;
        ctx.moveTo(left, yDecoration);
        ctx.lineTo(right, yDecoration);
        ctx.stroke();
      }

      y += font.lineHeight;
    }

    ctx.restore();
  }

  function _lookup(table, value, cmp) {
    cmp = cmp || function (index) {
      return table[index] < value;
    };

    var hi = table.length - 1;
    var lo = 0;
    var mid;

    while (hi - lo > 1) {
      mid = lo + hi >> 1;

      if (cmp(mid)) {
        lo = mid;
      } else {
        hi = mid;
      }
    }

    return {
      lo: lo,
      hi: hi
    };
  }

  var _lookupByKey = function _lookupByKey(table, key, value) {
    return _lookup(table, value, function (index) {
      return table[index][key] < value;
    });
  };

  var _rlookupByKey = function _rlookupByKey(table, key, value) {
    return _lookup(table, value, function (index) {
      return table[index][key] >= value;
    });
  };

  function _filterBetween(values, min, max) {
    var start = 0;
    var end = values.length;

    while (start < end && values[start] < min) {
      start++;
    }

    while (end > start && values[end - 1] > max) {
      end--;
    }

    return start > 0 || end < values.length ? values.slice(start, end) : values;
  }

  var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];

  function listenArrayEvents(array, listener) {
    if (array._chartjs) {
      array._chartjs.listeners.push(listener);

      return;
    }

    Object.defineProperty(array, '_chartjs', {
      configurable: true,
      enumerable: false,
      value: {
        listeners: [listener]
      }
    });
    arrayEvents.forEach(function (key) {
      var method = '_onData' + _capitalize(key);

      var base = array[key];
      Object.defineProperty(array, key, {
        configurable: true,
        enumerable: false,
        value: function value() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          var res = base.apply(this, args);

          array._chartjs.listeners.forEach(function (object) {
            if (typeof object[method] === 'function') {
              object[method].apply(object, args);
            }
          });

          return res;
        }
      });
    });
  }

  function unlistenArrayEvents(array, listener) {
    var stub = array._chartjs;

    if (!stub) {
      return;
    }

    var listeners = stub.listeners;
    var index = listeners.indexOf(listener);

    if (index !== -1) {
      listeners.splice(index, 1);
    }

    if (listeners.length > 0) {
      return;
    }

    arrayEvents.forEach(function (key) {
      delete array[key];
    });
    delete array._chartjs;
  }

  function _arrayUnique(items) {
    var set = new Set();
    var i, ilen;

    for (i = 0, ilen = items.length; i < ilen; ++i) {
      set.add(items[i]);
    }

    if (set.size === ilen) {
      return items;
    }

    var result = [];
    set.forEach(function (item) {
      result.push(item);
    });
    return result;
  }

  function _getParentNode(domNode) {
    var parent = domNode.parentNode;

    if (parent && parent.toString() === '[object ShadowRoot]') {
      parent = parent.host;
    }

    return parent;
  }

  function parseMaxStyle(styleValue, node, parentProperty) {
    var valueInPixels;

    if (typeof styleValue === 'string') {
      valueInPixels = parseInt(styleValue, 10);

      if (styleValue.indexOf('%') !== -1) {
        valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
      }
    } else {
      valueInPixels = styleValue;
    }

    return valueInPixels;
  }

  var getComputedStyle = function getComputedStyle(element) {
    return window.getComputedStyle(element, null);
  };

  function getStyle(el, property) {
    return getComputedStyle(el).getPropertyValue(property);
  }

  var positions = ['top', 'right', 'bottom', 'left'];

  function getPositionedStyle(styles, style, suffix) {
    var result = {};
    suffix = suffix ? '-' + suffix : '';

    for (var i = 0; i < 4; i++) {
      var pos = positions[i];
      result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
    }

    result.width = result.left + result.right;
    result.height = result.top + result.bottom;
    return result;
  }

  var useOffsetPos = function useOffsetPos(x, y, target) {
    return (x > 0 || y > 0) && (!target || !target.shadowRoot);
  };

  function getCanvasPosition(evt, canvas) {
    var e = evt.native || evt;
    var touches = e.touches;
    var source = touches && touches.length ? touches[0] : e;
    var offsetX = source.offsetX,
        offsetY = source.offsetY;
    var box = false;
    var x, y;

    if (useOffsetPos(offsetX, offsetY, e.target)) {
      x = offsetX;
      y = offsetY;
    } else {
      var rect = canvas.getBoundingClientRect();
      x = source.clientX - rect.left;
      y = source.clientY - rect.top;
      box = true;
    }

    return {
      x: x,
      y: y,
      box: box
    };
  }

  function getRelativePosition$1(evt, chart) {
    var canvas = chart.canvas,
        currentDevicePixelRatio = chart.currentDevicePixelRatio;
    var style = getComputedStyle(canvas);
    var borderBox = style.boxSizing === 'border-box';
    var paddings = getPositionedStyle(style, 'padding');
    var borders = getPositionedStyle(style, 'border', 'width');

    var _getCanvasPosition = getCanvasPosition(evt, canvas),
        x = _getCanvasPosition.x,
        y = _getCanvasPosition.y,
        box = _getCanvasPosition.box;

    var xOffset = paddings.left + (box && borders.left);
    var yOffset = paddings.top + (box && borders.top);
    var width = chart.width,
        height = chart.height;

    if (borderBox) {
      width -= paddings.width + borders.width;
      height -= paddings.height + borders.height;
    }

    return {
      x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
      y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
    };
  }

  function getContainerSize(canvas, width, height) {
    var maxWidth, maxHeight;

    if (width === undefined || height === undefined) {
      var container = _getParentNode(canvas);

      if (!container) {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
      } else {
        var rect = container.getBoundingClientRect();
        var containerStyle = getComputedStyle(container);
        var containerBorder = getPositionedStyle(containerStyle, 'border', 'width');
        var containerPadding = getPositionedStyle(containerStyle, 'padding');
        width = rect.width - containerPadding.width - containerBorder.width;
        height = rect.height - containerPadding.height - containerBorder.height;
        maxWidth = parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
        maxHeight = parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
      }
    }

    return {
      width: width,
      height: height,
      maxWidth: maxWidth || INFINITY,
      maxHeight: maxHeight || INFINITY
    };
  }

  var round1 = function round1(v) {
    return Math.round(v * 10) / 10;
  };

  function _getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
    var style = getComputedStyle(canvas);
    var margins = getPositionedStyle(style, 'margin');
    var maxWidth = parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || INFINITY;
    var maxHeight = parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || INFINITY;
    var containerSize = getContainerSize(canvas, bbWidth, bbHeight);
    var width = containerSize.width,
        height = containerSize.height;

    if (style.boxSizing === 'content-box') {
      var borders = getPositionedStyle(style, 'border', 'width');
      var paddings = getPositionedStyle(style, 'padding');
      width -= paddings.width + borders.width;
      height -= paddings.height + borders.height;
    }

    width = Math.max(0, width - margins.width);
    height = Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height - margins.height);
    width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
    height = round1(Math.min(height, maxHeight, containerSize.maxHeight));

    if (width && !height) {
      height = round1(width / 2);
    }

    return {
      width: width,
      height: height
    };
  }

  function retinaScale(chart, forceRatio, forceStyle) {
    var pixelRatio = chart.currentDevicePixelRatio = forceRatio || 1;
    var canvas = chart.canvas,
        width = chart.width,
        height = chart.height;
    canvas.height = height * pixelRatio;
    canvas.width = width * pixelRatio;
    chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
      canvas.style.height = height + 'px';
      canvas.style.width = width + 'px';
    }
  }

  var supportsEventListenerOptions = function () {
    var passiveSupported = false;

    try {
      var options = {
        get passive() {
          passiveSupported = true;
          return false;
        }

      };
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (e) {}

    return passiveSupported;
  }();

  function readUsedSize(element, property) {
    var value = getStyle(element, property);
    var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? +matches[1] : undefined;
  }

  function getRelativePosition(e, chart) {
    if ('native' in e) {
      return {
        x: e.x,
        y: e.y
      };
    }

    return getRelativePosition$1(e, chart);
  }

  function evaluateAllVisibleItems(chart, handler) {
    var metasets = chart.getSortedVisibleDatasetMetas();
    var index, data, element;

    for (var i = 0, ilen = metasets.length; i < ilen; ++i) {
      var _metasets$i = metasets[i];
      index = _metasets$i.index;
      data = _metasets$i.data;

      for (var j = 0, jlen = data.length; j < jlen; ++j) {
        element = data[j];

        if (!element.skip) {
          handler(element, index, j);
        }
      }
    }
  }

  function binarySearch(metaset, axis, value, intersect) {
    var controller = metaset.controller,
        data = metaset.data,
        _sorted = metaset._sorted;
    var iScale = controller._cachedMeta.iScale;

    if (iScale && axis === iScale.axis && _sorted && data.length) {
      var lookupMethod = iScale._reversePixels ? _rlookupByKey : _lookupByKey;

      if (!intersect) {
        return lookupMethod(data, axis, value);
      } else if (controller._sharedOptions) {
        var el = data[0];
        var range = typeof el.getRange === 'function' && el.getRange(axis);

        if (range) {
          var start = lookupMethod(data, axis, value - range);
          var end = lookupMethod(data, axis, value + range);
          return {
            lo: start.lo,
            hi: end.hi
          };
        }
      }
    }

    return {
      lo: 0,
      hi: data.length - 1
    };
  }

  function optimizedEvaluateItems(chart, axis, position, handler, intersect) {
    var metasets = chart.getSortedVisibleDatasetMetas();
    var value = position[axis];

    for (var i = 0, ilen = metasets.length; i < ilen; ++i) {
      var _metasets$i2 = metasets[i],
          index = _metasets$i2.index,
          data = _metasets$i2.data;

      var _binarySearch = binarySearch(metasets[i], axis, value, intersect),
          lo = _binarySearch.lo,
          hi = _binarySearch.hi;

      for (var j = lo; j <= hi; ++j) {
        var element = data[j];

        if (!element.skip) {
          handler(element, index, j);
        }
      }
    }
  }

  function getDistanceMetricForAxis(axis) {
    var useX = axis.indexOf('x') !== -1;
    var useY = axis.indexOf('y') !== -1;
    return function (pt1, pt2) {
      var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
      var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
      return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
  }

  function getIntersectItems(chart, position, axis, useFinalPosition) {
    var items = [];

    if (!_isPointInArea(position, chart.chartArea, chart._minPadding)) {
      return items;
    }

    var evaluationFunc = function evaluationFunc(element, datasetIndex, index) {
      if (element.inRange(position.x, position.y, useFinalPosition)) {
        items.push({
          element: element,
          datasetIndex: datasetIndex,
          index: index
        });
      }
    };

    optimizedEvaluateItems(chart, axis, position, evaluationFunc, true);
    return items;
  }

  function getNearestItems(chart, position, axis, intersect, useFinalPosition) {
    var distanceMetric = getDistanceMetricForAxis(axis);
    var minDistance = Number.POSITIVE_INFINITY;
    var items = [];

    if (!_isPointInArea(position, chart.chartArea, chart._minPadding)) {
      return items;
    }

    var evaluationFunc = function evaluationFunc(element, datasetIndex, index) {
      if (intersect && !element.inRange(position.x, position.y, useFinalPosition)) {
        return;
      }

      var center = element.getCenterPoint(useFinalPosition);
      var distance = distanceMetric(position, center);

      if (distance < minDistance) {
        items = [{
          element: element,
          datasetIndex: datasetIndex,
          index: index
        }];
        minDistance = distance;
      } else if (distance === minDistance) {
        items.push({
          element: element,
          datasetIndex: datasetIndex,
          index: index
        });
      }
    };

    optimizedEvaluateItems(chart, axis, position, evaluationFunc);
    return items;
  }

  function getAxisItems(chart, e, options, useFinalPosition) {
    var position = getRelativePosition(e, chart);
    var items = [];
    var axis = options.axis;
    var rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
    var intersectsItem = false;
    evaluateAllVisibleItems(chart, function (element, datasetIndex, index) {
      if (element[rangeMethod](position[axis], useFinalPosition)) {
        items.push({
          element: element,
          datasetIndex: datasetIndex,
          index: index
        });
      }

      if (element.inRange(position.x, position.y, useFinalPosition)) {
        intersectsItem = true;
      }
    });

    if (options.intersect && !intersectsItem) {
      return [];
    }

    return items;
  }

  var Interaction = {
    modes: {
      index: function index(chart, e, options, useFinalPosition) {
        var position = getRelativePosition(e, chart);
        var axis = options.axis || 'x';
        var items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition) : getNearestItems(chart, position, axis, false, useFinalPosition);
        var elements = [];

        if (!items.length) {
          return [];
        }

        chart.getSortedVisibleDatasetMetas().forEach(function (meta) {
          var index = items[0].index;
          var element = meta.data[index];

          if (element && !element.skip) {
            elements.push({
              element: element,
              datasetIndex: meta.index,
              index: index
            });
          }
        });
        return elements;
      },
      dataset: function dataset(chart, e, options, useFinalPosition) {
        var position = getRelativePosition(e, chart);
        var axis = options.axis || 'xy';
        var items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition) : getNearestItems(chart, position, axis, false, useFinalPosition);

        if (items.length > 0) {
          var datasetIndex = items[0].datasetIndex;
          var data = chart.getDatasetMeta(datasetIndex).data;
          items = [];

          for (var i = 0; i < data.length; ++i) {
            items.push({
              element: data[i],
              datasetIndex: datasetIndex,
              index: i
            });
          }
        }

        return items;
      },
      point: function point(chart, e, options, useFinalPosition) {
        var position = getRelativePosition(e, chart);
        var axis = options.axis || 'xy';
        return getIntersectItems(chart, position, axis, useFinalPosition);
      },
      nearest: function nearest(chart, e, options, useFinalPosition) {
        var position = getRelativePosition(e, chart);
        var axis = options.axis || 'xy';
        return getNearestItems(chart, position, axis, options.intersect, useFinalPosition);
      },
      x: function x(chart, e, options, useFinalPosition) {
        options.axis = 'x';
        return getAxisItems(chart, e, options, useFinalPosition);
      },
      y: function y(chart, e, options, useFinalPosition) {
        options.axis = 'y';
        return getAxisItems(chart, e, options, useFinalPosition);
      }
    }
  };
  var LINE_HEIGHT = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);

  function toLineHeight(value, size) {
    var matches = ('' + value).match(LINE_HEIGHT);

    if (!matches || matches[1] === 'normal') {
      return size * 1.2;
    }

    value = +matches[2];

    switch (matches[3]) {
      case 'px':
        return value;

      case '%':
        value /= 100;
        break;
    }

    return size * value;
  }

  var numberOrZero$1 = function numberOrZero$1(v) {
    return +v || 0;
  };

  function readValueToProps(value, props) {
    var ret = {};
    var objProps = isObject(props);
    var keys = objProps ? Object.keys(props) : props;
    var read = isObject(value) ? objProps ? function (prop) {
      return valueOrDefault(value[prop], value[props[prop]]);
    } : function (prop) {
      return value[prop];
    } : function () {
      return value;
    };

    var _iterator = _createForOfIteratorHelper(keys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        ret[prop] = numberOrZero$1(read(prop));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return ret;
  }

  function toTRBL(value) {
    return readValueToProps(value, {
      top: 'y',
      right: 'x',
      bottom: 'y',
      left: 'x'
    });
  }

  function toTRBLCorners(value) {
    return readValueToProps(value, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
  }

  function toPadding(value) {
    var obj = toTRBL(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
  }

  function toFont(options, fallback) {
    options = options || {};
    fallback = fallback || defaults.font;
    var size = valueOrDefault(options.size, fallback.size);

    if (typeof size === 'string') {
      size = parseInt(size, 10);
    }

    var font = {
      family: valueOrDefault(options.family, fallback.family),
      lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
      size: size,
      style: valueOrDefault(options.style, fallback.style),
      weight: valueOrDefault(options.weight, fallback.weight),
      string: ''
    };
    font.string = toFontString(font);
    return font;
  }

  function resolve(inputs, context, index, info) {
    var cacheable = true;
    var i, ilen, value;

    for (i = 0, ilen = inputs.length; i < ilen; ++i) {
      value = inputs[i];

      if (value === undefined) {
        continue;
      }

      if (context !== undefined && typeof value === 'function') {
        value = value(context);
        cacheable = false;
      }

      if (index !== undefined && isArray(value)) {
        value = value[index % value.length];
        cacheable = false;
      }

      if (value !== undefined) {
        if (info && !cacheable) {
          info.cacheable = false;
        }

        return value;
      }
    }
  }

  function _addGrace(minmax, grace) {
    var min = minmax.min,
        max = minmax.max;
    return {
      min: min - Math.abs(toDimension(grace, min)),
      max: max + toDimension(grace, max)
    };
  }

  var STATIC_POSITIONS = ['left', 'top', 'right', 'bottom'];

  function filterByPosition(array, position) {
    return array.filter(function (v) {
      return v.pos === position;
    });
  }

  function filterDynamicPositionByAxis(array, axis) {
    return array.filter(function (v) {
      return STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis;
    });
  }

  function sortByWeight(array, reverse) {
    return array.sort(function (a, b) {
      var v0 = reverse ? b : a;
      var v1 = reverse ? a : b;
      return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
  }

  function wrapBoxes(boxes) {
    var layoutBoxes = [];
    var i, ilen, box;

    for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
      box = boxes[i];
      layoutBoxes.push({
        index: i,
        box: box,
        pos: box.position,
        horizontal: box.isHorizontal(),
        weight: box.weight
      });
    }

    return layoutBoxes;
  }

  function setLayoutDims(layouts, params) {
    var i, ilen, layout;

    for (i = 0, ilen = layouts.length; i < ilen; ++i) {
      layout = layouts[i];

      if (layout.horizontal) {
        layout.width = layout.box.fullSize && params.availableWidth;
        layout.height = params.hBoxMaxHeight;
      } else {
        layout.width = params.vBoxMaxWidth;
        layout.height = layout.box.fullSize && params.availableHeight;
      }
    }
  }

  function buildLayoutBoxes(boxes) {
    var layoutBoxes = wrapBoxes(boxes);
    var fullSize = sortByWeight(layoutBoxes.filter(function (wrap) {
      return wrap.box.fullSize;
    }), true);
    var left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
    var right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
    var top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
    var bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
    var centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
    var centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
    return {
      fullSize: fullSize,
      leftAndTop: left.concat(top),
      rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
      chartArea: filterByPosition(layoutBoxes, 'chartArea'),
      vertical: left.concat(right).concat(centerVertical),
      horizontal: top.concat(bottom).concat(centerHorizontal)
    };
  }

  function getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
  }

  function updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
  }

  function updateDims(chartArea, params, layout) {
    var box = layout.box;
    var maxPadding = chartArea.maxPadding;

    if (isObject(layout.pos)) {
      return {
        same: false,
        other: false
      };
    }

    if (layout.size) {
      chartArea[layout.pos] -= layout.size;
    }

    layout.size = layout.horizontal ? box.height : box.width;
    chartArea[layout.pos] += layout.size;

    if (box.getPadding) {
      updateMaxPadding(maxPadding, box.getPadding());
    }

    var newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
    var newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
    var widthChanged = newWidth !== chartArea.w;
    var heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? {
      same: widthChanged,
      other: heightChanged
    } : {
      same: heightChanged,
      other: widthChanged
    };
  }

  function handleMaxPadding(chartArea) {
    var maxPadding = chartArea.maxPadding;

    function updatePos(pos) {
      var change = Math.max(maxPadding[pos] - chartArea[pos], 0);
      chartArea[pos] += change;
      return change;
    }

    chartArea.y += updatePos('top');
    chartArea.x += updatePos('left');
    updatePos('right');
    updatePos('bottom');
  }

  function getMargins(horizontal, chartArea) {
    var maxPadding = chartArea.maxPadding;

    function marginForPositions(positions) {
      var margin = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      positions.forEach(function (pos) {
        margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
      });
      return margin;
    }

    return horizontal ? marginForPositions(['left', 'right']) : marginForPositions(['top', 'bottom']);
  }

  function fitBoxes(boxes, chartArea, params) {
    var refitBoxes = [];
    var i, ilen, layout, box, refit, changed;

    for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
      layout = boxes[i];
      box = layout.box;
      box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));

      var _updateDims = updateDims(chartArea, params, layout),
          same = _updateDims.same,
          other = _updateDims.other;

      refit |= same && refitBoxes.length;
      changed = changed || other;

      if (!box.fullSize) {
        refitBoxes.push(layout);
      }
    }

    return refit && fitBoxes(refitBoxes, chartArea, params) || changed;
  }

  function placeBoxes(boxes, chartArea, params) {
    var userPadding = params.padding;
    var x = chartArea.x;
    var y = chartArea.y;
    var i, ilen, layout, box;

    for (i = 0, ilen = boxes.length; i < ilen; ++i) {
      layout = boxes[i];
      box = layout.box;

      if (layout.horizontal) {
        box.left = box.fullSize ? userPadding.left : chartArea.left;
        box.right = box.fullSize ? params.outerWidth - userPadding.right : chartArea.left + chartArea.w;
        box.top = y;
        box.bottom = y + box.height;
        box.width = box.right - box.left;
        y = box.bottom;
      } else {
        box.left = x;
        box.right = x + box.width;
        box.top = box.fullSize ? userPadding.top : chartArea.top;
        box.bottom = box.fullSize ? params.outerHeight - userPadding.right : chartArea.top + chartArea.h;
        box.height = box.bottom - box.top;
        x = box.right;
      }
    }

    chartArea.x = x;
    chartArea.y = y;
  }

  defaults.set('layout', {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
  var layouts = {
    addBox: function addBox(chart, item) {
      if (!chart.boxes) {
        chart.boxes = [];
      }

      item.fullSize = item.fullSize || false;
      item.position = item.position || 'top';
      item.weight = item.weight || 0;

      item._layers = item._layers || function () {
        return [{
          z: 0,
          draw: function draw(chartArea) {
            item.draw(chartArea);
          }
        }];
      };

      chart.boxes.push(item);
    },
    removeBox: function removeBox(chart, layoutItem) {
      var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;

      if (index !== -1) {
        chart.boxes.splice(index, 1);
      }
    },
    configure: function configure(chart, item, options) {
      item.fullSize = options.fullSize;
      item.position = options.position;
      item.weight = options.weight;
    },
    update: function update(chart, width, height, minPadding) {
      if (!chart) {
        return;
      }

      var padding = toPadding(chart.options.layout.padding);
      var availableWidth = width - padding.width;
      var availableHeight = height - padding.height;
      var boxes = buildLayoutBoxes(chart.boxes);
      var verticalBoxes = boxes.vertical;
      var horizontalBoxes = boxes.horizontal;
      each(chart.boxes, function (box) {
        if (typeof box.beforeLayout === 'function') {
          box.beforeLayout();
        }
      });
      var visibleVerticalBoxCount = verticalBoxes.reduce(function (total, wrap) {
        return wrap.box.options && wrap.box.options.display === false ? total : total + 1;
      }, 0) || 1;
      var params = Object.freeze({
        outerWidth: width,
        outerHeight: height,
        padding: padding,
        availableWidth: availableWidth,
        availableHeight: availableHeight,
        vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
        hBoxMaxHeight: availableHeight / 2
      });
      var maxPadding = Object.assign({}, padding);
      updateMaxPadding(maxPadding, toPadding(minPadding));
      var chartArea = Object.assign({
        maxPadding: maxPadding,
        w: availableWidth,
        h: availableHeight,
        x: padding.left,
        y: padding.top
      }, padding);
      setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
      fitBoxes(boxes.fullSize, chartArea, params);
      fitBoxes(verticalBoxes, chartArea, params);

      if (fitBoxes(horizontalBoxes, chartArea, params)) {
        fitBoxes(verticalBoxes, chartArea, params);
      }

      handleMaxPadding(chartArea);
      placeBoxes(boxes.leftAndTop, chartArea, params);
      chartArea.x += chartArea.w;
      chartArea.y += chartArea.h;
      placeBoxes(boxes.rightAndBottom, chartArea, params);
      chart.chartArea = {
        left: chartArea.left,
        top: chartArea.top,
        right: chartArea.left + chartArea.w,
        bottom: chartArea.top + chartArea.h,
        height: chartArea.h,
        width: chartArea.w
      };
      each(boxes.chartArea, function (layout) {
        var box = layout.box;
        Object.assign(box, chart.chartArea);
        box.update(chartArea.w, chartArea.h);
      });
    }
  };

  var BasePlatform = /*#__PURE__*/function () {
    function BasePlatform() {
      _classCallCheck(this, BasePlatform);
    }

    _createClass(BasePlatform, [{
      key: "acquireContext",
      value: function acquireContext(canvas, aspectRatio) {}
    }, {
      key: "releaseContext",
      value: function releaseContext(context) {
        return false;
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(chart, type, listener) {}
    }, {
      key: "removeEventListener",
      value: function removeEventListener(chart, type, listener) {}
    }, {
      key: "getDevicePixelRatio",
      value: function getDevicePixelRatio() {
        return 1;
      }
    }, {
      key: "getMaximumSize",
      value: function getMaximumSize(element, width, height, aspectRatio) {
        width = Math.max(0, width || element.width);
        height = height || element.height;
        return {
          width: width,
          height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
        };
      }
    }, {
      key: "isAttached",
      value: function isAttached(canvas) {
        return true;
      }
    }]);

    return BasePlatform;
  }();

  var BasicPlatform = /*#__PURE__*/function (_BasePlatform) {
    _inherits(BasicPlatform, _BasePlatform);

    var _super = _createSuper(BasicPlatform);

    function BasicPlatform() {
      _classCallCheck(this, BasicPlatform);

      return _super.apply(this, arguments);
    }

    _createClass(BasicPlatform, [{
      key: "acquireContext",
      value: function acquireContext(item) {
        return item && item.getContext && item.getContext('2d') || null;
      }
    }]);

    return BasicPlatform;
  }(BasePlatform);

  var EXPANDO_KEY = '$chartjs';
  var EVENT_TYPES = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout'
  };

  var isNullOrEmpty = function isNullOrEmpty(value) {
    return value === null || value === '';
  };

  function initCanvas(canvas, aspectRatio) {
    var style = canvas.style;
    var renderHeight = canvas.getAttribute('height');
    var renderWidth = canvas.getAttribute('width');
    canvas[EXPANDO_KEY] = {
      initial: {
        height: renderHeight,
        width: renderWidth,
        style: {
          display: style.display,
          height: style.height,
          width: style.width
        }
      }
    };
    style.display = style.display || 'block';
    style.boxSizing = style.boxSizing || 'border-box';

    if (isNullOrEmpty(renderWidth)) {
      var displayWidth = readUsedSize(canvas, 'width');

      if (displayWidth !== undefined) {
        canvas.width = displayWidth;
      }
    }

    if (isNullOrEmpty(renderHeight)) {
      if (canvas.style.height === '') {
        canvas.height = canvas.width / (aspectRatio || 2);
      } else {
        var displayHeight = readUsedSize(canvas, 'height');

        if (displayHeight !== undefined) {
          canvas.height = displayHeight;
        }
      }
    }

    return canvas;
  }

  var eventListenerOptions = supportsEventListenerOptions ? {
    passive: true
  } : false;

  function addListener(node, type, listener) {
    node.addEventListener(type, listener, eventListenerOptions);
  }

  function removeListener(chart, type, listener) {
    chart.canvas.removeEventListener(type, listener, eventListenerOptions);
  }

  function fromNativeEvent(event, chart) {
    var type = EVENT_TYPES[event.type] || event.type;

    var _getRelativePosition$ = getRelativePosition$1(event, chart),
        x = _getRelativePosition$.x,
        y = _getRelativePosition$.y;

    return {
      type: type,
      chart: chart,
      native: event,
      x: x !== undefined ? x : null,
      y: y !== undefined ? y : null
    };
  }

  function createAttachObserver(chart, type, listener) {
    var canvas = chart.canvas;

    var container = canvas && _getParentNode(canvas);

    var element = container || canvas;
    var observer = new MutationObserver(function (entries) {
      var parent = _getParentNode(element);

      entries.forEach(function (entry) {
        for (var i = 0; i < entry.addedNodes.length; i++) {
          var added = entry.addedNodes[i];

          if (added === element || added === parent) {
            listener(entry.target);
          }
        }
      });
    });
    observer.observe(document, {
      childList: true,
      subtree: true
    });
    return observer;
  }

  function createDetachObserver(chart, type, listener) {
    var canvas = chart.canvas;

    var container = canvas && _getParentNode(canvas);

    if (!container) {
      return;
    }

    var observer = new MutationObserver(function (entries) {
      entries.forEach(function (entry) {
        for (var i = 0; i < entry.removedNodes.length; i++) {
          if (entry.removedNodes[i] === canvas) {
            listener();
            break;
          }
        }
      });
    });
    observer.observe(container, {
      childList: true
    });
    return observer;
  }

  var drpListeningCharts = new Map();
  var oldDevicePixelRatio = 0;

  function onWindowResize() {
    var dpr = window.devicePixelRatio;

    if (dpr === oldDevicePixelRatio) {
      return;
    }

    oldDevicePixelRatio = dpr;
    drpListeningCharts.forEach(function (resize, chart) {
      if (chart.currentDevicePixelRatio !== dpr) {
        resize();
      }
    });
  }

  function listenDevicePixelRatioChanges(chart, resize) {
    if (!drpListeningCharts.size) {
      window.addEventListener('resize', onWindowResize);
    }

    drpListeningCharts.set(chart, resize);
  }

  function unlistenDevicePixelRatioChanges(chart) {
    drpListeningCharts.delete(chart);

    if (!drpListeningCharts.size) {
      window.removeEventListener('resize', onWindowResize);
    }
  }

  function createResizeObserver(chart, type, listener) {
    var canvas = chart.canvas;

    var container = canvas && _getParentNode(canvas);

    if (!container) {
      return;
    }

    var resize = throttled(function (width, height) {
      var w = container.clientWidth;
      listener(width, height);

      if (w < container.clientWidth) {
        listener();
      }
    }, window);
    var observer = new ResizeObserver(function (entries) {
      var entry = entries[0];
      var width = entry.contentRect.width;
      var height = entry.contentRect.height;

      if (width === 0 && height === 0) {
        return;
      }

      resize(width, height);
    });
    observer.observe(container);
    listenDevicePixelRatioChanges(chart, resize);
    return observer;
  }

  function releaseObserver(chart, type, observer) {
    if (observer) {
      observer.disconnect();
    }

    if (type === 'resize') {
      unlistenDevicePixelRatioChanges(chart);
    }
  }

  function createProxyAndListen(chart, type, listener) {
    var canvas = chart.canvas;
    var proxy = throttled(function (event) {
      if (chart.ctx !== null) {
        listener(fromNativeEvent(event, chart));
      }
    }, chart, function (args) {
      var event = args[0];
      return [event, event.offsetX, event.offsetY];
    });
    addListener(canvas, type, proxy);
    return proxy;
  }

  var DomPlatform = /*#__PURE__*/function (_BasePlatform2) {
    _inherits(DomPlatform, _BasePlatform2);

    var _super2 = _createSuper(DomPlatform);

    function DomPlatform() {
      _classCallCheck(this, DomPlatform);

      return _super2.apply(this, arguments);
    }

    _createClass(DomPlatform, [{
      key: "acquireContext",
      value: function acquireContext(canvas, aspectRatio) {
        var context = canvas && canvas.getContext && canvas.getContext('2d');

        if (context && context.canvas === canvas) {
          initCanvas(canvas, aspectRatio);
          return context;
        }

        return null;
      }
    }, {
      key: "releaseContext",
      value: function releaseContext(context) {
        var canvas = context.canvas;

        if (!canvas[EXPANDO_KEY]) {
          return false;
        }

        var initial = canvas[EXPANDO_KEY].initial;
        ['height', 'width'].forEach(function (prop) {
          var value = initial[prop];

          if (isNullOrUndef(value)) {
            canvas.removeAttribute(prop);
          } else {
            canvas.setAttribute(prop, value);
          }
        });
        var style = initial.style || {};
        Object.keys(style).forEach(function (key) {
          canvas.style[key] = style[key];
        });
        canvas.width = canvas.width;
        delete canvas[EXPANDO_KEY];
        return true;
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(chart, type, listener) {
        this.removeEventListener(chart, type);
        var proxies = chart.$proxies || (chart.$proxies = {});
        var handlers = {
          attach: createAttachObserver,
          detach: createDetachObserver,
          resize: createResizeObserver
        };
        var handler = handlers[type] || createProxyAndListen;
        proxies[type] = handler(chart, type, listener);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(chart, type) {
        var proxies = chart.$proxies || (chart.$proxies = {});
        var proxy = proxies[type];

        if (!proxy) {
          return;
        }

        var handlers = {
          attach: releaseObserver,
          detach: releaseObserver,
          resize: releaseObserver
        };
        var handler = handlers[type] || removeListener;
        handler(chart, type, proxy);
        proxies[type] = undefined;
      }
    }, {
      key: "getDevicePixelRatio",
      value: function getDevicePixelRatio() {
        return window.devicePixelRatio;
      }
    }, {
      key: "getMaximumSize",
      value: function getMaximumSize(canvas, width, height, aspectRatio) {
        return _getMaximumSize(canvas, width, height, aspectRatio);
      }
    }, {
      key: "isAttached",
      value: function isAttached(canvas) {
        var container = _getParentNode(canvas);

        return !!(container && _getParentNode(container));
      }
    }]);

    return DomPlatform;
  }(BasePlatform);

  var platforms = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BasePlatform: BasePlatform,
    BasicPlatform: BasicPlatform,
    DomPlatform: DomPlatform
  });

  var atEdge = function atEdge(t) {
    return t === 0 || t === 1;
  };

  var elasticIn = function elasticIn(t, s, p) {
    return -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
  };

  var elasticOut = function elasticOut(t, s, p) {
    return Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
  };

  var effects = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return -t * (t - 2);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return (t -= 1) * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return -((t -= 1) * t * t * t - 1);
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return (t -= 1) * t * t * t * t + 1;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function easeInSine(t) {
      return -Math.cos(t * HALF_PI) + 1;
    },
    easeOutSine: function easeOutSine(t) {
      return Math.sin(t * HALF_PI);
    },
    easeInOutSine: function easeInOutSine(t) {
      return -0.5 * (Math.cos(PI * t) - 1);
    },
    easeInExpo: function easeInExpo(t) {
      return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
    },
    easeOutExpo: function easeOutExpo(t) {
      return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
    },
    easeInOutExpo: function easeInOutExpo(t) {
      return atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2);
    },
    easeInCirc: function easeInCirc(t) {
      return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
    },
    easeOutCirc: function easeOutCirc(t) {
      return Math.sqrt(1 - (t -= 1) * t);
    },
    easeInOutCirc: function easeInOutCirc(t) {
      return (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function easeInElastic(t) {
      return atEdge(t) ? t : elasticIn(t, 0.075, 0.3);
    },
    easeOutElastic: function easeOutElastic(t) {
      return atEdge(t) ? t : elasticOut(t, 0.075, 0.3);
    },
    easeInOutElastic: function easeInOutElastic(t) {
      var s = 0.1125;
      var p = 0.45;
      return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
    },
    easeInBack: function easeInBack(t) {
      var s = 1.70158;
      return t * t * ((s + 1) * t - s);
    },
    easeOutBack: function easeOutBack(t) {
      var s = 1.70158;
      return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    easeInOutBack: function easeInOutBack(t) {
      var s = 1.70158;

      if ((t /= 0.5) < 1) {
        return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
      }

      return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: function easeInBounce(t) {
      return 1 - effects.easeOutBounce(1 - t);
    },
    easeOutBounce: function easeOutBounce(t) {
      var m = 7.5625;
      var d = 2.75;

      if (t < 1 / d) {
        return m * t * t;
      }

      if (t < 2 / d) {
        return m * (t -= 1.5 / d) * t + 0.75;
      }

      if (t < 2.5 / d) {
        return m * (t -= 2.25 / d) * t + 0.9375;
      }

      return m * (t -= 2.625 / d) * t + 0.984375;
    },
    easeInOutBounce: function easeInOutBounce(t) {
      return t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
    }
  };
  var transparent = 'transparent';
  var interpolators = {
    boolean: function boolean(from, to, factor) {
      return factor > 0.5 ? to : from;
    },
    color: function color(from, to, factor) {
      var c0 = _color(from || transparent);

      var c1 = c0.valid && _color(to || transparent);

      return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
    },
    number: function number(from, to, factor) {
      return from + (to - from) * factor;
    }
  };

  var Animation = /*#__PURE__*/function () {
    function Animation(cfg, target, prop, to) {
      _classCallCheck(this, Animation);

      var currentValue = target[prop];
      to = resolve([cfg.to, to, currentValue, cfg.from]);
      var from = resolve([cfg.from, currentValue, to]);
      this._active = true;
      this._fn = cfg.fn || interpolators[cfg.type || _typeof(from)];
      this._easing = effects[cfg.easing] || effects.linear;
      this._start = Math.floor(Date.now() + (cfg.delay || 0));
      this._duration = this._total = Math.floor(cfg.duration);
      this._loop = !!cfg.loop;
      this._target = target;
      this._prop = prop;
      this._from = from;
      this._to = to;
      this._promises = undefined;
    }

    _createClass(Animation, [{
      key: "active",
      value: function active() {
        return this._active;
      }
    }, {
      key: "update",
      value: function update(cfg, to, date) {
        var me = this;

        if (me._active) {
          me._notify(false);

          var currentValue = me._target[me._prop];
          var elapsed = date - me._start;
          var remain = me._duration - elapsed;
          me._start = date;
          me._duration = Math.floor(Math.max(remain, cfg.duration));
          me._total += elapsed;
          me._loop = !!cfg.loop;
          me._to = resolve([cfg.to, to, currentValue, cfg.from]);
          me._from = resolve([cfg.from, currentValue, to]);
        }
      }
    }, {
      key: "cancel",
      value: function cancel() {
        var me = this;

        if (me._active) {
          me.tick(Date.now());
          me._active = false;

          me._notify(false);
        }
      }
    }, {
      key: "tick",
      value: function tick(date) {
        var me = this;
        var elapsed = date - me._start;
        var duration = me._duration;
        var prop = me._prop;
        var from = me._from;
        var loop = me._loop;
        var to = me._to;
        var factor;
        me._active = from !== to && (loop || elapsed < duration);

        if (!me._active) {
          me._target[prop] = to;

          me._notify(true);

          return;
        }

        if (elapsed < 0) {
          me._target[prop] = from;
          return;
        }

        factor = elapsed / duration % 2;
        factor = loop && factor > 1 ? 2 - factor : factor;
        factor = me._easing(Math.min(1, Math.max(0, factor)));
        me._target[prop] = me._fn(from, to, factor);
      }
    }, {
      key: "wait",
      value: function wait() {
        var promises = this._promises || (this._promises = []);
        return new Promise(function (res, rej) {
          promises.push({
            res: res,
            rej: rej
          });
        });
      }
    }, {
      key: "_notify",
      value: function _notify(resolved) {
        var method = resolved ? 'res' : 'rej';
        var promises = this._promises || [];

        for (var i = 0; i < promises.length; i++) {
          promises[i][method]();
        }
      }
    }]);

    return Animation;
  }();

  var numbers = ['x', 'y', 'borderWidth', 'radius', 'tension'];
  var colors = ['color', 'borderColor', 'backgroundColor'];
  defaults.set('animation', {
    delay: undefined,
    duration: 1000,
    easing: 'easeOutQuart',
    fn: undefined,
    from: undefined,
    loop: undefined,
    to: undefined,
    type: undefined
  });
  var animationOptions = Object.keys(defaults.animation);
  defaults.describe('animation', {
    _fallback: false,
    _indexable: false,
    _scriptable: function _scriptable(name) {
      return name !== 'onProgress' && name !== 'onComplete' && name !== 'fn';
    }
  });
  defaults.set('animations', {
    colors: {
      type: 'color',
      properties: colors
    },
    numbers: {
      type: 'number',
      properties: numbers
    }
  });
  defaults.describe('animations', {
    _fallback: 'animation'
  });
  defaults.set('transitions', {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: 'transparent'
        },
        visible: {
          type: 'boolean',
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: 'transparent'
        },
        visible: {
          type: 'boolean',
          easing: 'linear',
          fn: function fn(v) {
            return v | 0;
          }
        }
      }
    }
  });

  var Animations = /*#__PURE__*/function () {
    function Animations(chart, config) {
      _classCallCheck(this, Animations);

      this._chart = chart;
      this._properties = new Map();
      this.configure(config);
    }

    _createClass(Animations, [{
      key: "configure",
      value: function configure(config) {
        if (!isObject(config)) {
          return;
        }

        var animatedProps = this._properties;
        Object.getOwnPropertyNames(config).forEach(function (key) {
          var cfg = config[key];

          if (!isObject(cfg)) {
            return;
          }

          var resolved = {};

          var _iterator2 = _createForOfIteratorHelper(animationOptions),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var option = _step2.value;
              resolved[option] = cfg[option];
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          (isArray(cfg.properties) && cfg.properties || [key]).forEach(function (prop) {
            if (prop === key || !animatedProps.has(prop)) {
              animatedProps.set(prop, resolved);
            }
          });
        });
      }
    }, {
      key: "_animateOptions",
      value: function _animateOptions(target, values) {
        var newOptions = values.options;
        var options = resolveTargetOptions(target, newOptions);

        if (!options) {
          return [];
        }

        var animations = this._createAnimations(options, newOptions);

        if (newOptions.$shared) {
          awaitAll(target.options.$animations, newOptions).then(function () {
            target.options = newOptions;
          }, function () {});
        }

        return animations;
      }
    }, {
      key: "_createAnimations",
      value: function _createAnimations(target, values) {
        var animatedProps = this._properties;
        var animations = [];
        var running = target.$animations || (target.$animations = {});
        var props = Object.keys(values);
        var date = Date.now();
        var i;

        for (i = props.length - 1; i >= 0; --i) {
          var prop = props[i];

          if (prop.charAt(0) === '$') {
            continue;
          }

          if (prop === 'options') {
            animations.push.apply(animations, _toConsumableArray(this._animateOptions(target, values)));
            continue;
          }

          var value = values[prop];
          var animation = running[prop];
          var cfg = animatedProps.get(prop);

          if (animation) {
            if (cfg && animation.active()) {
              animation.update(cfg, value, date);
              continue;
            } else {
              animation.cancel();
            }
          }

          if (!cfg || !cfg.duration) {
            target[prop] = value;
            continue;
          }

          running[prop] = animation = new Animation(cfg, target, prop, value);
          animations.push(animation);
        }

        return animations;
      }
    }, {
      key: "update",
      value: function update(target, values) {
        if (this._properties.size === 0) {
          Object.assign(target, values);
          return;
        }

        var animations = this._createAnimations(target, values);

        if (animations.length) {
          animator.add(this._chart, animations);
          return true;
        }
      }
    }]);

    return Animations;
  }();

  function awaitAll(animations, properties) {
    var running = [];
    var keys = Object.keys(properties);

    for (var i = 0; i < keys.length; i++) {
      var anim = animations[keys[i]];

      if (anim && anim.active()) {
        running.push(anim.wait());
      }
    }

    return Promise.all(running);
  }

  function resolveTargetOptions(target, newOptions) {
    if (!newOptions) {
      return;
    }

    var options = target.options;

    if (!options) {
      target.options = newOptions;
      return;
    }

    if (options.$shared) {
      target.options = options = Object.assign({}, options, {
        $shared: false,
        $animations: {}
      });
    }

    return options;
  }

  function scaleClip(scale, allowedOverflow) {
    var opts = scale && scale.options || {};
    var reverse = opts.reverse;
    var min = opts.min === undefined ? allowedOverflow : 0;
    var max = opts.max === undefined ? allowedOverflow : 0;
    return {
      start: reverse ? max : min,
      end: reverse ? min : max
    };
  }

  function defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) {
      return false;
    }

    var x = scaleClip(xScale, allowedOverflow);
    var y = scaleClip(yScale, allowedOverflow);
    return {
      top: y.end,
      right: x.end,
      bottom: y.start,
      left: x.start
    };
  }

  function toClip(value) {
    var t, r, b, l;

    if (isObject(value)) {
      t = value.top;
      r = value.right;
      b = value.bottom;
      l = value.left;
    } else {
      t = r = b = l = value;
    }

    return {
      top: t,
      right: r,
      bottom: b,
      left: l
    };
  }

  function getSortedDatasetIndices(chart, filterVisible) {
    var keys = [];

    var metasets = chart._getSortedDatasetMetas(filterVisible);

    var i, ilen;

    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      keys.push(metasets[i].index);
    }

    return keys;
  }

  function _applyStack(stack, value, dsIndex, options) {
    var keys = stack.keys;
    var singleMode = options.mode === 'single';
    var i, ilen, datasetIndex, otherValue;

    if (value === null) {
      return;
    }

    for (i = 0, ilen = keys.length; i < ilen; ++i) {
      datasetIndex = +keys[i];

      if (datasetIndex === dsIndex) {
        if (options.all) {
          continue;
        }

        break;
      }

      otherValue = stack.values[datasetIndex];

      if (isNumberFinite(otherValue) && (singleMode || value === 0 || sign(value) === sign(otherValue))) {
        value += otherValue;
      }
    }

    return value;
  }

  function convertObjectDataToArray(data) {
    var keys = Object.keys(data);
    var adata = new Array(keys.length);
    var i, ilen, key;

    for (i = 0, ilen = keys.length; i < ilen; ++i) {
      key = keys[i];
      adata[i] = {
        x: key,
        y: data[key]
      };
    }

    return adata;
  }

  function isStacked(scale, meta) {
    var stacked = scale && scale.options.stacked;
    return stacked || stacked === undefined && meta.stack !== undefined;
  }

  function getStackKey(indexScale, valueScale, meta) {
    return indexScale.id + '.' + valueScale.id + '.' + meta.stack + '.' + meta.type;
  }

  function getUserBounds(scale) {
    var _scale$getUserBounds = scale.getUserBounds(),
        min = _scale$getUserBounds.min,
        max = _scale$getUserBounds.max,
        minDefined = _scale$getUserBounds.minDefined,
        maxDefined = _scale$getUserBounds.maxDefined;

    return {
      min: minDefined ? min : Number.NEGATIVE_INFINITY,
      max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
  }

  function getOrCreateStack(stacks, stackKey, indexValue) {
    var subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
  }

  function updateStacks(controller, parsed) {
    var chart = controller.chart,
        meta = controller._cachedMeta;
    var stacks = chart._stacks || (chart._stacks = {});
    var iScale = meta.iScale,
        vScale = meta.vScale,
        datasetIndex = meta.index;
    var iAxis = iScale.axis;
    var vAxis = vScale.axis;
    var key = getStackKey(iScale, vScale, meta);
    var ilen = parsed.length;
    var stack;

    for (var i = 0; i < ilen; ++i) {
      var item = parsed[i];
      var index = item[iAxis],
          value = item[vAxis];
      var itemStacks = item._stacks || (item._stacks = {});
      stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
      stack[datasetIndex] = value;
    }
  }

  function getFirstScaleId(chart, axis) {
    var scales = chart.scales;
    return Object.keys(scales).filter(function (key) {
      return scales[key].axis === axis;
    }).shift();
  }

  function createDatasetContext(parent, index) {
    return Object.assign(Object.create(parent), {
      active: false,
      dataset: undefined,
      datasetIndex: index,
      index: index,
      mode: 'default',
      type: 'dataset'
    });
  }

  function createDataContext(parent, index, element) {
    return Object.assign(Object.create(parent), {
      active: false,
      dataIndex: index,
      parsed: undefined,
      raw: undefined,
      element: element,
      index: index,
      mode: 'default',
      type: 'data'
    });
  }

  function clearStacks(meta, items) {
    items = items || meta._parsed;

    var _iterator3 = _createForOfIteratorHelper(items),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var parsed = _step3.value;
        var stacks = parsed._stacks;

        if (!stacks || stacks[meta.vScale.id] === undefined || stacks[meta.vScale.id][meta.index] === undefined) {
          return;
        }

        delete stacks[meta.vScale.id][meta.index];
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }

  var isDirectUpdateMode = function isDirectUpdateMode(mode) {
    return mode === 'reset' || mode === 'none';
  };

  var cloneIfNotShared = function cloneIfNotShared(cached, shared) {
    return shared ? cached : Object.assign({}, cached);
  };

  var DatasetController = /*#__PURE__*/function () {
    function DatasetController(chart, datasetIndex) {
      _classCallCheck(this, DatasetController);

      this.chart = chart;
      this._ctx = chart.ctx;
      this.index = datasetIndex;
      this._cachedDataOpts = {};
      this._cachedMeta = this.getMeta();
      this._type = this._cachedMeta.type;
      this.options = undefined;
      this._parsing = false;
      this._data = undefined;
      this._objectData = undefined;
      this._sharedOptions = undefined;
      this._drawStart = undefined;
      this._drawCount = undefined;
      this.enableOptionSharing = false;
      this.$context = undefined;
      this.initialize();
    }

    _createClass(DatasetController, [{
      key: "initialize",
      value: function initialize() {
        var me = this;
        var meta = me._cachedMeta;
        me.configure();
        me.linkScales();
        meta._stacked = isStacked(meta.vScale, meta);
        me.addElements();
      }
    }, {
      key: "updateIndex",
      value: function updateIndex(datasetIndex) {
        this.index = datasetIndex;
      }
    }, {
      key: "linkScales",
      value: function linkScales() {
        var me = this;
        var chart = me.chart;
        var meta = me._cachedMeta;
        var dataset = me.getDataset();

        var chooseId = function chooseId(axis, x, y, r) {
          return axis === 'x' ? x : axis === 'r' ? r : y;
        };

        var xid = meta.xAxisID = valueOrDefault(dataset.xAxisID, getFirstScaleId(chart, 'x'));
        var yid = meta.yAxisID = valueOrDefault(dataset.yAxisID, getFirstScaleId(chart, 'y'));
        var rid = meta.rAxisID = valueOrDefault(dataset.rAxisID, getFirstScaleId(chart, 'r'));
        var indexAxis = meta.indexAxis;
        var iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
        var vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
        meta.xScale = me.getScaleForId(xid);
        meta.yScale = me.getScaleForId(yid);
        meta.rScale = me.getScaleForId(rid);
        meta.iScale = me.getScaleForId(iid);
        meta.vScale = me.getScaleForId(vid);
      }
    }, {
      key: "getDataset",
      value: function getDataset() {
        return this.chart.data.datasets[this.index];
      }
    }, {
      key: "getMeta",
      value: function getMeta() {
        return this.chart.getDatasetMeta(this.index);
      }
    }, {
      key: "getScaleForId",
      value: function getScaleForId(scaleID) {
        return this.chart.scales[scaleID];
      }
    }, {
      key: "_getOtherScale",
      value: function _getOtherScale(scale) {
        var meta = this._cachedMeta;
        return scale === meta.iScale ? meta.vScale : meta.iScale;
      }
    }, {
      key: "reset",
      value: function reset() {
        this._update('reset');
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        var meta = this._cachedMeta;

        if (this._data) {
          unlistenArrayEvents(this._data, this);
        }

        if (meta._stacked) {
          clearStacks(meta);
        }
      }
    }, {
      key: "_dataCheck",
      value: function _dataCheck() {
        var me = this;
        var dataset = me.getDataset();
        var data = dataset.data || (dataset.data = []);

        if (isObject(data)) {
          me._data = convertObjectDataToArray(data);
        } else if (me._data !== data) {
          if (me._data) {
            unlistenArrayEvents(me._data, me);
            clearStacks(me._cachedMeta);
          }

          if (data && Object.isExtensible(data)) {
            listenArrayEvents(data, me);
          }

          me._data = data;
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var me = this;
        var meta = me._cachedMeta;

        me._dataCheck();

        if (me.datasetElementType) {
          meta.dataset = new me.datasetElementType();
        }
      }
    }, {
      key: "buildOrUpdateElements",
      value: function buildOrUpdateElements(resetNewElements) {
        var me = this;
        var meta = me._cachedMeta;
        var dataset = me.getDataset();
        var stackChanged = false;

        me._dataCheck();

        meta._stacked = isStacked(meta.vScale, meta);

        if (meta.stack !== dataset.stack) {
          stackChanged = true;
          clearStacks(meta);
          meta.stack = dataset.stack;
        }

        me._resyncElements(resetNewElements);

        if (stackChanged) {
          updateStacks(me, meta._parsed);
        }
      }
    }, {
      key: "configure",
      value: function configure() {
        var me = this;
        var config = me.chart.config;
        var scopeKeys = config.datasetScopeKeys(me._type);
        var scopes = config.getOptionScopes(me.getDataset(), scopeKeys, true);
        me.options = config.createResolver(scopes, me.getContext());
        me._parsing = me.options.parsing;
      }
    }, {
      key: "parse",
      value: function parse(start, count) {
        var me = this;
        var meta = me._cachedMeta,
            data = me._data;
        var iScale = meta.iScale,
            _stacked = meta._stacked;
        var iAxis = iScale.axis;
        var sorted = start === 0 && count === data.length ? true : meta._sorted;
        var prev = start > 0 && meta._parsed[start - 1];
        var i, cur, parsed;

        if (me._parsing === false) {
          meta._parsed = data;
          meta._sorted = true;
        } else {
          if (isArray(data[start])) {
            parsed = me.parseArrayData(meta, data, start, count);
          } else if (isObject(data[start])) {
            parsed = me.parseObjectData(meta, data, start, count);
          } else {
            parsed = me.parsePrimitiveData(meta, data, start, count);
          }

          var isNotInOrderComparedToPrev = function isNotInOrderComparedToPrev() {
            return cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
          };

          for (i = 0; i < count; ++i) {
            meta._parsed[i + start] = cur = parsed[i];

            if (sorted) {
              if (isNotInOrderComparedToPrev()) {
                sorted = false;
              }

              prev = cur;
            }
          }

          meta._sorted = sorted;
        }

        if (_stacked) {
          updateStacks(me, parsed);
        }
      }
    }, {
      key: "parsePrimitiveData",
      value: function parsePrimitiveData(meta, data, start, count) {
        var iScale = meta.iScale,
            vScale = meta.vScale;
        var iAxis = iScale.axis;
        var vAxis = vScale.axis;
        var labels = iScale.getLabels();
        var singleScale = iScale === vScale;
        var parsed = new Array(count);
        var i, ilen, index;

        for (i = 0, ilen = count; i < ilen; ++i) {
          var _parsed$i;

          index = i + start;
          parsed[i] = (_parsed$i = {}, _defineProperty(_parsed$i, iAxis, singleScale || iScale.parse(labels[index], index)), _defineProperty(_parsed$i, vAxis, vScale.parse(data[index], index)), _parsed$i);
        }

        return parsed;
      }
    }, {
      key: "parseArrayData",
      value: function parseArrayData(meta, data, start, count) {
        var xScale = meta.xScale,
            yScale = meta.yScale;
        var parsed = new Array(count);
        var i, ilen, index, item;

        for (i = 0, ilen = count; i < ilen; ++i) {
          index = i + start;
          item = data[index];
          parsed[i] = {
            x: xScale.parse(item[0], index),
            y: yScale.parse(item[1], index)
          };
        }

        return parsed;
      }
    }, {
      key: "parseObjectData",
      value: function parseObjectData(meta, data, start, count) {
        var xScale = meta.xScale,
            yScale = meta.yScale;
        var _this$_parsing = this._parsing,
            _this$_parsing$xAxisK = _this$_parsing.xAxisKey,
            xAxisKey = _this$_parsing$xAxisK === void 0 ? 'x' : _this$_parsing$xAxisK,
            _this$_parsing$yAxisK = _this$_parsing.yAxisKey,
            yAxisKey = _this$_parsing$yAxisK === void 0 ? 'y' : _this$_parsing$yAxisK;
        var parsed = new Array(count);
        var i, ilen, index, item;

        for (i = 0, ilen = count; i < ilen; ++i) {
          index = i + start;
          item = data[index];
          parsed[i] = {
            x: xScale.parse(resolveObjectKey(item, xAxisKey), index),
            y: yScale.parse(resolveObjectKey(item, yAxisKey), index)
          };
        }

        return parsed;
      }
    }, {
      key: "getParsed",
      value: function getParsed(index) {
        return this._cachedMeta._parsed[index];
      }
    }, {
      key: "getDataElement",
      value: function getDataElement(index) {
        return this._cachedMeta.data[index];
      }
    }, {
      key: "applyStack",
      value: function applyStack(scale, parsed, mode) {
        var chart = this.chart;
        var meta = this._cachedMeta;
        var value = parsed[scale.axis];
        var stack = {
          keys: getSortedDatasetIndices(chart, true),
          values: parsed._stacks[scale.axis]
        };
        return _applyStack(stack, value, meta.index, {
          mode: mode
        });
      }
    }, {
      key: "updateRangeFromParsed",
      value: function updateRangeFromParsed(range, scale, parsed, stack) {
        var parsedValue = parsed[scale.axis];
        var value = parsedValue === null ? NaN : parsedValue;
        var values = stack && parsed._stacks[scale.axis];

        if (stack && values) {
          stack.values = values;
          range.min = Math.min(range.min, value);
          range.max = Math.max(range.max, value);
          value = _applyStack(stack, parsedValue, this._cachedMeta.index, {
            all: true
          });
        }

        range.min = Math.min(range.min, value);
        range.max = Math.max(range.max, value);
      }
    }, {
      key: "getMinMax",
      value: function getMinMax(scale, canStack) {
        var me = this;
        var meta = me._cachedMeta;
        var _parsed = meta._parsed;
        var sorted = meta._sorted && scale === meta.iScale;
        var ilen = _parsed.length;

        var otherScale = me._getOtherScale(scale);

        var stack = canStack && meta._stacked && {
          keys: getSortedDatasetIndices(me.chart, true),
          values: null
        };
        var range = {
          min: Number.POSITIVE_INFINITY,
          max: Number.NEGATIVE_INFINITY
        };

        var _getUserBounds = getUserBounds(otherScale),
            otherMin = _getUserBounds.min,
            otherMax = _getUserBounds.max;

        var i, value, parsed, otherValue;

        function _skip() {
          parsed = _parsed[i];
          value = parsed[scale.axis];
          otherValue = parsed[otherScale.axis];
          return !isNumberFinite(value) || otherMin > otherValue || otherMax < otherValue;
        }

        for (i = 0; i < ilen; ++i) {
          if (_skip()) {
            continue;
          }

          me.updateRangeFromParsed(range, scale, parsed, stack);

          if (sorted) {
            break;
          }
        }

        if (sorted) {
          for (i = ilen - 1; i >= 0; --i) {
            if (_skip()) {
              continue;
            }

            me.updateRangeFromParsed(range, scale, parsed, stack);
            break;
          }
        }

        return range;
      }
    }, {
      key: "getAllParsedValues",
      value: function getAllParsedValues(scale) {
        var parsed = this._cachedMeta._parsed;
        var values = [];
        var i, ilen, value;

        for (i = 0, ilen = parsed.length; i < ilen; ++i) {
          value = parsed[i][scale.axis];

          if (isNumberFinite(value)) {
            values.push(value);
          }
        }

        return values;
      }
    }, {
      key: "getMaxOverflow",
      value: function getMaxOverflow() {
        return false;
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(index) {
        var me = this;
        var meta = me._cachedMeta;
        var iScale = meta.iScale;
        var vScale = meta.vScale;
        var parsed = me.getParsed(index);
        return {
          label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
          value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
        };
      }
    }, {
      key: "_update",
      value: function _update(mode) {
        var me = this;
        var meta = me._cachedMeta;
        me.configure();
        me._cachedDataOpts = {};
        me.update(mode || 'default');
        meta._clip = toClip(valueOrDefault(me.options.clip, defaultClip(meta.xScale, meta.yScale, me.getMaxOverflow())));
      }
    }, {
      key: "update",
      value: function update(mode) {}
    }, {
      key: "draw",
      value: function draw() {
        var me = this;
        var ctx = me._ctx;
        var chart = me.chart;
        var meta = me._cachedMeta;
        var elements = meta.data || [];
        var area = chart.chartArea;
        var active = [];
        var start = me._drawStart || 0;
        var count = me._drawCount || elements.length - start;
        var i;

        if (meta.dataset) {
          meta.dataset.draw(ctx, area, start, count);
        }

        for (i = start; i < start + count; ++i) {
          var element = elements[i];

          if (element.active) {
            active.push(element);
          } else {
            element.draw(ctx, area);
          }
        }

        for (i = 0; i < active.length; ++i) {
          active[i].draw(ctx, area);
        }
      }
    }, {
      key: "getStyle",
      value: function getStyle(index, active) {
        var mode = active ? 'active' : 'default';
        return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
      }
    }, {
      key: "getContext",
      value: function getContext(index, active, mode) {
        var me = this;
        var dataset = me.getDataset();
        var context;

        if (index >= 0 && index < me._cachedMeta.data.length) {
          var element = me._cachedMeta.data[index];
          context = element.$context || (element.$context = createDataContext(me.getContext(), index, element));
          context.parsed = me.getParsed(index);
          context.raw = dataset.data[index];
        } else {
          context = me.$context || (me.$context = createDatasetContext(me.chart.getContext(), me.index));
          context.dataset = dataset;
        }

        context.active = !!active;
        context.mode = mode;
        return context;
      }
    }, {
      key: "resolveDatasetElementOptions",
      value: function resolveDatasetElementOptions(mode) {
        return this._resolveElementOptions(this.datasetElementType.id, mode);
      }
    }, {
      key: "resolveDataElementOptions",
      value: function resolveDataElementOptions(index, mode) {
        return this._resolveElementOptions(this.dataElementType.id, mode, index);
      }
    }, {
      key: "_resolveElementOptions",
      value: function _resolveElementOptions(elementType) {
        var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
        var index = arguments.length > 2 ? arguments[2] : undefined;
        var me = this;
        var active = mode === 'active';
        var cache = me._cachedDataOpts;
        var cacheKey = elementType + '-' + mode;
        var cached = cache[cacheKey];
        var sharing = me.enableOptionSharing && defined(index);

        if (cached) {
          return cloneIfNotShared(cached, sharing);
        }

        var config = me.chart.config;
        var scopeKeys = config.datasetElementScopeKeys(me._type, elementType);
        var prefixes = active ? ["".concat(elementType, "Hover"), 'hover', elementType, ''] : [elementType, ''];
        var scopes = config.getOptionScopes(me.getDataset(), scopeKeys);
        var names = Object.keys(defaults.elements[elementType]);

        var context = function context() {
          return me.getContext(index, active);
        };

        var values = config.resolveNamedOptions(scopes, names, context, prefixes);

        if (values.$shared) {
          values.$shared = sharing;
          cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
        }

        return values;
      }
    }, {
      key: "_resolveAnimations",
      value: function _resolveAnimations(index, transition, active) {
        var me = this;
        var chart = me.chart;
        var cache = me._cachedDataOpts;
        var cacheKey = "animation-".concat(transition);
        var cached = cache[cacheKey];

        if (cached) {
          return cached;
        }

        var options;

        if (chart.options.animation !== false) {
          var config = me.chart.config;
          var scopeKeys = config.datasetAnimationScopeKeys(me._type, transition);
          var scopes = config.getOptionScopes(me.getDataset(), scopeKeys);
          options = config.createResolver(scopes, me.getContext(index, active, transition));
        }

        var animations = new Animations(chart, options && options.animations);

        if (options && options._cacheable) {
          cache[cacheKey] = Object.freeze(animations);
        }

        return animations;
      }
    }, {
      key: "getSharedOptions",
      value: function getSharedOptions(options) {
        if (!options.$shared) {
          return;
        }

        return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
      }
    }, {
      key: "includeOptions",
      value: function includeOptions(mode, sharedOptions) {
        return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
      }
    }, {
      key: "updateElement",
      value: function updateElement(element, index, properties, mode) {
        if (isDirectUpdateMode(mode)) {
          Object.assign(element, properties);
        } else {
          this._resolveAnimations(index, mode).update(element, properties);
        }
      }
    }, {
      key: "updateSharedOptions",
      value: function updateSharedOptions(sharedOptions, mode, newOptions) {
        if (sharedOptions && !isDirectUpdateMode(mode)) {
          this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
        }
      }
    }, {
      key: "_setStyle",
      value: function _setStyle(element, index, mode, active) {
        element.active = active;
        var options = this.getStyle(index, active);

        this._resolveAnimations(index, mode, active).update(element, {
          options: !active && this.getSharedOptions(options) || options
        });
      }
    }, {
      key: "removeHoverStyle",
      value: function removeHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, 'active', false);
      }
    }, {
      key: "setHoverStyle",
      value: function setHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, 'active', true);
      }
    }, {
      key: "_removeDatasetHoverStyle",
      value: function _removeDatasetHoverStyle() {
        var element = this._cachedMeta.dataset;

        if (element) {
          this._setStyle(element, undefined, 'active', false);
        }
      }
    }, {
      key: "_setDatasetHoverStyle",
      value: function _setDatasetHoverStyle() {
        var element = this._cachedMeta.dataset;

        if (element) {
          this._setStyle(element, undefined, 'active', true);
        }
      }
    }, {
      key: "_resyncElements",
      value: function _resyncElements(resetNewElements) {
        var me = this;
        var numMeta = me._cachedMeta.data.length;
        var numData = me._data.length;

        if (numData > numMeta) {
          me._insertElements(numMeta, numData - numMeta, resetNewElements);
        } else if (numData < numMeta) {
          me._removeElements(numData, numMeta - numData);
        }

        var count = Math.min(numData, numMeta);

        if (count) {
          me.parse(0, count);
        }
      }
    }, {
      key: "_insertElements",
      value: function _insertElements(start, count) {
        var resetNewElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var me = this;
        var meta = me._cachedMeta;
        var data = meta.data;
        var end = start + count;
        var i;

        var move = function move(arr) {
          arr.length += count;

          for (i = arr.length - 1; i >= end; i--) {
            arr[i] = arr[i - count];
          }
        };

        move(data);

        for (i = start; i < end; ++i) {
          data[i] = new me.dataElementType();
        }

        if (me._parsing) {
          move(meta._parsed);
        }

        me.parse(start, count);

        if (resetNewElements) {
          me.updateElements(data, start, count, 'reset');
        }
      }
    }, {
      key: "updateElements",
      value: function updateElements(element, start, count, mode) {}
    }, {
      key: "_removeElements",
      value: function _removeElements(start, count) {
        var me = this;
        var meta = me._cachedMeta;

        if (me._parsing) {
          var removed = meta._parsed.splice(start, count);

          if (meta._stacked) {
            clearStacks(meta, removed);
          }
        }

        meta.data.splice(start, count);
      }
    }, {
      key: "_onDataPush",
      value: function _onDataPush() {
        var count = arguments.length;

        this._insertElements(this.getDataset().data.length - count, count);
      }
    }, {
      key: "_onDataPop",
      value: function _onDataPop() {
        this._removeElements(this._cachedMeta.data.length - 1, 1);
      }
    }, {
      key: "_onDataShift",
      value: function _onDataShift() {
        this._removeElements(0, 1);
      }
    }, {
      key: "_onDataSplice",
      value: function _onDataSplice(start, count) {
        this._removeElements(start, count);

        this._insertElements(start, arguments.length - 2);
      }
    }, {
      key: "_onDataUnshift",
      value: function _onDataUnshift() {
        this._insertElements(0, arguments.length);
      }
    }]);

    return DatasetController;
  }();

  DatasetController.defaults = {};
  DatasetController.prototype.datasetElementType = null;
  DatasetController.prototype.dataElementType = null;

  var Element = /*#__PURE__*/function () {
    function Element() {
      _classCallCheck(this, Element);

      this.x = undefined;
      this.y = undefined;
      this.active = false;
      this.options = undefined;
      this.$animations = undefined;
    }

    _createClass(Element, [{
      key: "tooltipPosition",
      value: function tooltipPosition(useFinalPosition) {
        var _this$getProps = this.getProps(['x', 'y'], useFinalPosition),
            x = _this$getProps.x,
            y = _this$getProps.y;

        return {
          x: x,
          y: y
        };
      }
    }, {
      key: "hasValue",
      value: function hasValue() {
        return isNumber(this.x) && isNumber(this.y);
      }
    }, {
      key: "getProps",
      value: function getProps(props, final) {
        var me = this;
        var anims = this.$animations;

        if (!final || !anims) {
          return me;
        }

        var ret = {};
        props.forEach(function (prop) {
          ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : me[prop];
        });
        return ret;
      }
    }]);

    return Element;
  }();

  Element.defaults = {};
  Element.defaultRoutes = undefined;
  var intlCache = new Map();

  function getNumberFormat(locale, options) {
    options = options || {};
    var cacheKey = locale + JSON.stringify(options);
    var formatter = intlCache.get(cacheKey);

    if (!formatter) {
      formatter = new Intl.NumberFormat(locale, options);
      intlCache.set(cacheKey, formatter);
    }

    return formatter;
  }

  function formatNumber(num, locale, options) {
    return getNumberFormat(locale, options).format(num);
  }

  var formatters = {
    values: function values(value) {
      return isArray(value) ? value : '' + value;
    },
    numeric: function numeric(tickValue, index, ticks) {
      if (tickValue === 0) {
        return '0';
      }

      var locale = this.chart.options.locale;
      var notation;
      var delta = tickValue;

      if (ticks.length > 1) {
        var maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));

        if (maxTick < 1e-4 || maxTick > 1e+15) {
          notation = 'scientific';
        }

        delta = calculateDelta(tickValue, ticks);
      }

      var logDelta = log10(Math.abs(delta));
      var numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
      var options = {
        notation: notation,
        minimumFractionDigits: numDecimal,
        maximumFractionDigits: numDecimal
      };
      Object.assign(options, this.options.ticks.format);
      return formatNumber(tickValue, locale, options);
    },
    logarithmic: function logarithmic(tickValue, index, ticks) {
      if (tickValue === 0) {
        return '0';
      }

      var remain = tickValue / Math.pow(10, Math.floor(log10(tickValue)));

      if (remain === 1 || remain === 2 || remain === 5) {
        return formatters.numeric.call(this, tickValue, index, ticks);
      }

      return '';
    }
  };

  function calculateDelta(tickValue, ticks) {
    var delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;

    if (Math.abs(delta) > 1 && tickValue !== Math.floor(tickValue)) {
      delta = tickValue - Math.floor(tickValue);
    }

    return delta;
  }

  var Ticks = {
    formatters: formatters
  };
  defaults.set('scale', {
    display: true,
    offset: false,
    reverse: false,
    beginAtZero: false,
    bounds: 'ticks',
    grace: 0,
    grid: {
      display: true,
      lineWidth: 1,
      drawBorder: true,
      drawOnChartArea: true,
      drawTicks: true,
      tickLength: 8,
      tickWidth: function tickWidth(_ctx, options) {
        return options.lineWidth;
      },
      tickColor: function tickColor(_ctx, options) {
        return options.color;
      },
      offset: false,
      borderDash: [],
      borderDashOffset: 0.0,
      borderColor: function borderColor(_ctx, options) {
        return options.color;
      },
      borderWidth: function borderWidth(_ctx, options) {
        return options.lineWidth;
      }
    },
    title: {
      display: false,
      text: '',
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: true,
      autoSkip: true,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Ticks.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near'
    }
  });
  defaults.route('scale.ticks', 'color', '', 'color');
  defaults.route('scale.grid', 'color', '', 'borderColor');
  defaults.route('scale.title', 'color', '', 'color');
  defaults.describe('scale', {
    _fallback: false,
    _scriptable: function _scriptable(name) {
      return !name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser';
    },
    _indexable: function _indexable(name) {
      return name !== 'borderDash' && name !== 'tickBorderDash';
    }
  });
  defaults.describe('scales', {
    _fallback: 'scale'
  });

  function autoSkip(scale, ticks) {
    var tickOpts = scale.options.ticks;
    var ticksLimit = tickOpts.maxTicksLimit || determineMaxTicks(scale);
    var majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
    var numMajorIndices = majorIndices.length;
    var first = majorIndices[0];
    var last = majorIndices[numMajorIndices - 1];
    var newTicks = [];

    if (numMajorIndices > ticksLimit) {
      skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
      return newTicks;
    }

    var spacing = calculateSpacing(majorIndices, ticks, ticksLimit);

    if (numMajorIndices > 0) {
      var i, ilen;
      var avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
      skip(ticks, newTicks, spacing, isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);

      for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
        skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
      }

      skip(ticks, newTicks, spacing, last, isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
      return newTicks;
    }

    skip(ticks, newTicks, spacing);
    return newTicks;
  }

  function determineMaxTicks(scale) {
    var offset = scale.options.offset;

    var tickLength = scale._tickSize();

    var maxScale = scale._length / tickLength + (offset ? 0 : 1);
    var maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
  }

  function calculateSpacing(majorIndices, ticks, ticksLimit) {
    var evenMajorSpacing = getEvenSpacing(majorIndices);
    var spacing = ticks.length / ticksLimit;

    if (!evenMajorSpacing) {
      return Math.max(spacing, 1);
    }

    var factors = _factorize(evenMajorSpacing);

    for (var i = 0, ilen = factors.length - 1; i < ilen; i++) {
      var factor = factors[i];

      if (factor > spacing) {
        return factor;
      }
    }

    return Math.max(spacing, 1);
  }

  function getMajorIndices(ticks) {
    var result = [];
    var i, ilen;

    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      if (ticks[i].major) {
        result.push(i);
      }
    }

    return result;
  }

  function skipMajors(ticks, newTicks, majorIndices, spacing) {
    var count = 0;
    var next = majorIndices[0];
    var i;
    spacing = Math.ceil(spacing);

    for (i = 0; i < ticks.length; i++) {
      if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = majorIndices[count * spacing];
      }
    }
  }

  function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    var start = valueOrDefault(majorStart, 0);
    var end = Math.min(valueOrDefault(majorEnd, ticks.length), ticks.length);
    var count = 0;
    var length, i, next;
    spacing = Math.ceil(spacing);

    if (majorEnd) {
      length = majorEnd - majorStart;
      spacing = length / Math.floor(length / spacing);
    }

    next = start;

    while (next < 0) {
      count++;
      next = Math.round(start + count * spacing);
    }

    for (i = Math.max(start, 0); i < end; i++) {
      if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = Math.round(start + count * spacing);
      }
    }
  }

  function getEvenSpacing(arr) {
    var len = arr.length;
    var i, diff;

    if (len < 2) {
      return false;
    }

    for (diff = arr[0], i = 1; i < len; ++i) {
      if (arr[i] - arr[i - 1] !== diff) {
        return false;
      }
    }

    return diff;
  }

  var reverseAlign = function reverseAlign(align) {
    return align === 'left' ? 'right' : align === 'right' ? 'left' : align;
  };

  var offsetFromEdge = function offsetFromEdge(scale, edge, offset) {
    return edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
  };

  function sample(arr, numItems) {
    var result = [];
    var increment = arr.length / numItems;
    var len = arr.length;
    var i = 0;

    for (; i < len; i += increment) {
      result.push(arr[Math.floor(i)]);
    }

    return result;
  }

  function getPixelForGridLine(scale, index, offsetGridLines) {
    var length = scale.ticks.length;
    var validIndex = Math.min(index, length - 1);
    var start = scale._startPixel;
    var end = scale._endPixel;
    var epsilon = 1e-6;
    var lineValue = scale.getPixelForTick(validIndex);
    var offset;

    if (offsetGridLines) {
      if (length === 1) {
        offset = Math.max(lineValue - start, end - lineValue);
      } else if (index === 0) {
        offset = (scale.getPixelForTick(1) - lineValue) / 2;
      } else {
        offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
      }

      lineValue += validIndex < index ? offset : -offset;

      if (lineValue < start - epsilon || lineValue > end + epsilon) {
        return;
      }
    }

    return lineValue;
  }

  function garbageCollect(caches, length) {
    each(caches, function (cache) {
      var gc = cache.gc;
      var gcLen = gc.length / 2;
      var i;

      if (gcLen > length) {
        for (i = 0; i < gcLen; ++i) {
          delete cache.data[gc[i]];
        }

        gc.splice(0, gcLen);
      }
    });
  }

  function getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
  }

  function getTitleHeight(options, fallback) {
    if (!options.display) {
      return 0;
    }

    var font = toFont(options.font, fallback);
    var padding = toPadding(options.padding);
    var lines = isArray(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
  }

  function createScaleContext(parent, scale) {
    return Object.assign(Object.create(parent), {
      scale: scale,
      type: 'scale'
    });
  }

  function createTickContext(parent, index, tick) {
    return Object.assign(Object.create(parent), {
      tick: tick,
      index: index,
      type: 'tick'
    });
  }

  function titleAlign(align, position, reverse) {
    var ret = _toLeftRightCenter(align);

    if (reverse && position !== 'right' || !reverse && position === 'right') {
      ret = reverseAlign(ret);
    }

    return ret;
  }

  function titleArgs(scale, offset, position, align) {
    var top = scale.top,
        left = scale.left,
        bottom = scale.bottom,
        right = scale.right;
    var rotation = 0;
    var maxWidth, titleX, titleY;

    if (scale.isHorizontal()) {
      titleX = _alignStartEnd(align, left, right);
      titleY = offsetFromEdge(scale, position, offset);
      maxWidth = right - left;
    } else {
      titleX = offsetFromEdge(scale, position, offset);
      titleY = _alignStartEnd(align, bottom, top);
      rotation = position === 'left' ? -HALF_PI : HALF_PI;
    }

    return {
      titleX: titleX,
      titleY: titleY,
      maxWidth: maxWidth,
      rotation: rotation
    };
  }

  var Scale = /*#__PURE__*/function (_Element) {
    _inherits(Scale, _Element);

    var _super3 = _createSuper(Scale);

    function Scale(cfg) {
      var _this;

      _classCallCheck(this, Scale);

      _this = _super3.call(this);
      _this.id = cfg.id;
      _this.type = cfg.type;
      _this.options = undefined;
      _this.ctx = cfg.ctx;
      _this.chart = cfg.chart;
      _this.top = undefined;
      _this.bottom = undefined;
      _this.left = undefined;
      _this.right = undefined;
      _this.width = undefined;
      _this.height = undefined;
      _this._margins = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      _this.maxWidth = undefined;
      _this.maxHeight = undefined;
      _this.paddingTop = undefined;
      _this.paddingBottom = undefined;
      _this.paddingLeft = undefined;
      _this.paddingRight = undefined;
      _this.axis = undefined;
      _this.labelRotation = undefined;
      _this.min = undefined;
      _this.max = undefined;
      _this.ticks = [];
      _this._gridLineItems = null;
      _this._labelItems = null;
      _this._labelSizes = null;
      _this._length = 0;
      _this._maxLength = 0;
      _this._longestTextCache = {};
      _this._startPixel = undefined;
      _this._endPixel = undefined;
      _this._reversePixels = false;
      _this._userMax = undefined;
      _this._userMin = undefined;
      _this._suggestedMax = undefined;
      _this._suggestedMin = undefined;
      _this._ticksLength = 0;
      _this._borderValue = 0;
      _this._cache = {};
      _this._dataLimitsCached = false;
      _this.$context = undefined;
      return _this;
    }

    _createClass(Scale, [{
      key: "init",
      value: function init(options) {
        var me = this;
        me.options = options;
        me.axis = options.axis;
        me._userMin = me.parse(options.min);
        me._userMax = me.parse(options.max);
        me._suggestedMin = me.parse(options.suggestedMin);
        me._suggestedMax = me.parse(options.suggestedMax);
      }
    }, {
      key: "parse",
      value: function parse(raw, index) {
        return raw;
      }
    }, {
      key: "getUserBounds",
      value: function getUserBounds() {
        var _userMin = this._userMin,
            _userMax = this._userMax,
            _suggestedMin = this._suggestedMin,
            _suggestedMax = this._suggestedMax;
        _userMin = finiteOrDefault(_userMin, Number.POSITIVE_INFINITY);
        _userMax = finiteOrDefault(_userMax, Number.NEGATIVE_INFINITY);
        _suggestedMin = finiteOrDefault(_suggestedMin, Number.POSITIVE_INFINITY);
        _suggestedMax = finiteOrDefault(_suggestedMax, Number.NEGATIVE_INFINITY);
        return {
          min: finiteOrDefault(_userMin, _suggestedMin),
          max: finiteOrDefault(_userMax, _suggestedMax),
          minDefined: isNumberFinite(_userMin),
          maxDefined: isNumberFinite(_userMax)
        };
      }
    }, {
      key: "getMinMax",
      value: function getMinMax(canStack) {
        var me = this;

        var _me$getUserBounds = me.getUserBounds(),
            min = _me$getUserBounds.min,
            max = _me$getUserBounds.max,
            minDefined = _me$getUserBounds.minDefined,
            maxDefined = _me$getUserBounds.maxDefined;

        var range;

        if (minDefined && maxDefined) {
          return {
            min: min,
            max: max
          };
        }

        var metas = me.getMatchingVisibleMetas();

        for (var i = 0, ilen = metas.length; i < ilen; ++i) {
          range = metas[i].controller.getMinMax(me, canStack);

          if (!minDefined) {
            min = Math.min(min, range.min);
          }

          if (!maxDefined) {
            max = Math.max(max, range.max);
          }
        }

        return {
          min: finiteOrDefault(min, finiteOrDefault(max, min)),
          max: finiteOrDefault(max, finiteOrDefault(min, max))
        };
      }
    }, {
      key: "getPadding",
      value: function getPadding() {
        var me = this;
        return {
          left: me.paddingLeft || 0,
          top: me.paddingTop || 0,
          right: me.paddingRight || 0,
          bottom: me.paddingBottom || 0
        };
      }
    }, {
      key: "getTicks",
      value: function getTicks() {
        return this.ticks;
      }
    }, {
      key: "getLabels",
      value: function getLabels() {
        var data = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
      }
    }, {
      key: "beforeLayout",
      value: function beforeLayout() {
        this._cache = {};
        this._dataLimitsCached = false;
      }
    }, {
      key: "beforeUpdate",
      value: function beforeUpdate() {
        callback(this.options.beforeUpdate, [this]);
      }
    }, {
      key: "update",
      value: function update(maxWidth, maxHeight, margins) {
        var me = this;
        var tickOpts = me.options.ticks;
        var sampleSize = tickOpts.sampleSize;
        me.beforeUpdate();
        me.maxWidth = maxWidth;
        me.maxHeight = maxHeight;
        me._margins = margins = Object.assign({
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, margins);
        me.ticks = null;
        me._labelSizes = null;
        me._gridLineItems = null;
        me._labelItems = null;
        me.beforeSetDimensions();
        me.setDimensions();
        me.afterSetDimensions();
        me._maxLength = me.isHorizontal() ? me.width + margins.left + margins.right : me.height + margins.top + margins.bottom;

        if (!me._dataLimitsCached) {
          me.beforeDataLimits();
          me.determineDataLimits();
          me.afterDataLimits();
          me._dataLimitsCached = true;
        }

        me.beforeBuildTicks();
        me.ticks = me.buildTicks() || [];
        me.afterBuildTicks();
        var samplingEnabled = sampleSize < me.ticks.length;

        me._convertTicksToLabels(samplingEnabled ? sample(me.ticks, sampleSize) : me.ticks);

        me.configure();
        me.beforeCalculateLabelRotation();
        me.calculateLabelRotation();
        me.afterCalculateLabelRotation();

        if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
          me.ticks = autoSkip(me, me.ticks);
          me._labelSizes = null;
        }

        if (samplingEnabled) {
          me._convertTicksToLabels(me.ticks);
        }

        me.beforeFit();
        me.fit();
        me.afterFit();
        me.afterUpdate();
      }
    }, {
      key: "configure",
      value: function configure() {
        var me = this;
        var reversePixels = me.options.reverse;
        var startPixel, endPixel;

        if (me.isHorizontal()) {
          startPixel = me.left;
          endPixel = me.right;
        } else {
          startPixel = me.top;
          endPixel = me.bottom;
          reversePixels = !reversePixels;
        }

        me._startPixel = startPixel;
        me._endPixel = endPixel;
        me._reversePixels = reversePixels;
        me._length = endPixel - startPixel;
        me._alignToPixels = me.options.alignToPixels;
      }
    }, {
      key: "afterUpdate",
      value: function afterUpdate() {
        callback(this.options.afterUpdate, [this]);
      }
    }, {
      key: "beforeSetDimensions",
      value: function beforeSetDimensions() {
        callback(this.options.beforeSetDimensions, [this]);
      }
    }, {
      key: "setDimensions",
      value: function setDimensions() {
        var me = this;

        if (me.isHorizontal()) {
          me.width = me.maxWidth;
          me.left = 0;
          me.right = me.width;
        } else {
          me.height = me.maxHeight;
          me.top = 0;
          me.bottom = me.height;
        }

        me.paddingLeft = 0;
        me.paddingTop = 0;
        me.paddingRight = 0;
        me.paddingBottom = 0;
      }
    }, {
      key: "afterSetDimensions",
      value: function afterSetDimensions() {
        callback(this.options.afterSetDimensions, [this]);
      }
    }, {
      key: "_callHooks",
      value: function _callHooks(name) {
        var me = this;
        me.chart.notifyPlugins(name, me.getContext());
        callback(me.options[name], [me]);
      }
    }, {
      key: "beforeDataLimits",
      value: function beforeDataLimits() {
        this._callHooks('beforeDataLimits');
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {}
    }, {
      key: "afterDataLimits",
      value: function afterDataLimits() {
        this._callHooks('afterDataLimits');
      }
    }, {
      key: "beforeBuildTicks",
      value: function beforeBuildTicks() {
        this._callHooks('beforeBuildTicks');
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        return [];
      }
    }, {
      key: "afterBuildTicks",
      value: function afterBuildTicks() {
        this._callHooks('afterBuildTicks');
      }
    }, {
      key: "beforeTickToLabelConversion",
      value: function beforeTickToLabelConversion() {
        callback(this.options.beforeTickToLabelConversion, [this]);
      }
    }, {
      key: "generateTickLabels",
      value: function generateTickLabels(ticks) {
        var me = this;
        var tickOpts = me.options.ticks;
        var i, ilen, tick;

        for (i = 0, ilen = ticks.length; i < ilen; i++) {
          tick = ticks[i];
          tick.label = callback(tickOpts.callback, [tick.value, i, ticks], me);
        }
      }
    }, {
      key: "afterTickToLabelConversion",
      value: function afterTickToLabelConversion() {
        callback(this.options.afterTickToLabelConversion, [this]);
      }
    }, {
      key: "beforeCalculateLabelRotation",
      value: function beforeCalculateLabelRotation() {
        callback(this.options.beforeCalculateLabelRotation, [this]);
      }
    }, {
      key: "calculateLabelRotation",
      value: function calculateLabelRotation() {
        var me = this;
        var options = me.options;
        var tickOpts = options.ticks;
        var numTicks = me.ticks.length;
        var minRotation = tickOpts.minRotation || 0;
        var maxRotation = tickOpts.maxRotation;
        var labelRotation = minRotation;
        var tickWidth, maxHeight, maxLabelDiagonal;

        if (!me._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !me.isHorizontal()) {
          me.labelRotation = minRotation;
          return;
        }

        var labelSizes = me._getLabelSizes();

        var maxLabelWidth = labelSizes.widest.width;
        var maxLabelHeight = labelSizes.highest.height;

        var maxWidth = _limitValue(me.chart.width - maxLabelWidth, 0, me.maxWidth);

        tickWidth = options.offset ? me.maxWidth / numTicks : maxWidth / (numTicks - 1);

        if (maxLabelWidth + 6 > tickWidth) {
          tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
          maxHeight = me.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, me.chart.options.font);
          maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
          labelRotation = toDegrees(Math.min(Math.asin(Math.min((labelSizes.highest.height + 6) / tickWidth, 1)), Math.asin(Math.min(maxHeight / maxLabelDiagonal, 1)) - Math.asin(maxLabelHeight / maxLabelDiagonal)));
          labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
        }

        me.labelRotation = labelRotation;
      }
    }, {
      key: "afterCalculateLabelRotation",
      value: function afterCalculateLabelRotation() {
        callback(this.options.afterCalculateLabelRotation, [this]);
      }
    }, {
      key: "beforeFit",
      value: function beforeFit() {
        callback(this.options.beforeFit, [this]);
      }
    }, {
      key: "fit",
      value: function fit() {
        var me = this;
        var minSize = {
          width: 0,
          height: 0
        };
        var chart = me.chart,
            _me$options = me.options,
            tickOpts = _me$options.ticks,
            titleOpts = _me$options.title,
            gridOpts = _me$options.grid;

        var display = me._isVisible();

        var isHorizontal = me.isHorizontal();

        if (display) {
          var titleHeight = getTitleHeight(titleOpts, chart.options.font);

          if (isHorizontal) {
            minSize.width = me.maxWidth;
            minSize.height = getTickMarkLength(gridOpts) + titleHeight;
          } else {
            minSize.height = me.maxHeight;
            minSize.width = getTickMarkLength(gridOpts) + titleHeight;
          }

          if (tickOpts.display && me.ticks.length) {
            var _me$_getLabelSizes = me._getLabelSizes(),
                first = _me$_getLabelSizes.first,
                last = _me$_getLabelSizes.last,
                widest = _me$_getLabelSizes.widest,
                highest = _me$_getLabelSizes.highest;

            var tickPadding = tickOpts.padding * 2;
            var angleRadians = toRadians(me.labelRotation);
            var cos = Math.cos(angleRadians);
            var sin = Math.sin(angleRadians);

            if (isHorizontal) {
              var labelHeight = sin * widest.width + cos * highest.height;
              minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);
            } else {
              var labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
              minSize.width = Math.min(me.maxWidth, minSize.width + labelWidth + tickPadding);
            }

            me._calculatePadding(first, last, sin, cos);
          }
        }

        me._handleMargins();

        if (isHorizontal) {
          me.width = me._length = chart.width - me._margins.left - me._margins.right;
          me.height = minSize.height;
        } else {
          me.width = minSize.width;
          me.height = me._length = chart.height - me._margins.top - me._margins.bottom;
        }
      }
    }, {
      key: "_calculatePadding",
      value: function _calculatePadding(first, last, sin, cos) {
        var me = this;
        var _me$options2 = me.options,
            _me$options2$ticks = _me$options2.ticks,
            align = _me$options2$ticks.align,
            padding = _me$options2$ticks.padding,
            position = _me$options2.position;
        var isRotated = me.labelRotation !== 0;
        var labelsBelowTicks = position !== 'top' && me.axis === 'x';

        if (me.isHorizontal()) {
          var offsetLeft = me.getPixelForTick(0) - me.left;
          var offsetRight = me.right - me.getPixelForTick(me.ticks.length - 1);
          var paddingLeft = 0;
          var paddingRight = 0;

          if (isRotated) {
            if (labelsBelowTicks) {
              paddingLeft = cos * first.width;
              paddingRight = sin * last.height;
            } else {
              paddingLeft = sin * first.height;
              paddingRight = cos * last.width;
            }
          } else if (align === 'start') {
            paddingRight = last.width;
          } else if (align === 'end') {
            paddingLeft = first.width;
          } else {
            paddingLeft = first.width / 2;
            paddingRight = last.width / 2;
          }

          me.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * me.width / (me.width - offsetLeft), 0);
          me.paddingRight = Math.max((paddingRight - offsetRight + padding) * me.width / (me.width - offsetRight), 0);
        } else {
          var paddingTop = last.height / 2;
          var paddingBottom = first.height / 2;

          if (align === 'start') {
            paddingTop = 0;
            paddingBottom = first.height;
          } else if (align === 'end') {
            paddingTop = last.height;
            paddingBottom = 0;
          }

          me.paddingTop = paddingTop + padding;
          me.paddingBottom = paddingBottom + padding;
        }
      }
    }, {
      key: "_handleMargins",
      value: function _handleMargins() {
        var me = this;

        if (me._margins) {
          me._margins.left = Math.max(me.paddingLeft, me._margins.left);
          me._margins.top = Math.max(me.paddingTop, me._margins.top);
          me._margins.right = Math.max(me.paddingRight, me._margins.right);
          me._margins.bottom = Math.max(me.paddingBottom, me._margins.bottom);
        }
      }
    }, {
      key: "afterFit",
      value: function afterFit() {
        callback(this.options.afterFit, [this]);
      }
    }, {
      key: "isHorizontal",
      value: function isHorizontal() {
        var _this$options = this.options,
            axis = _this$options.axis,
            position = _this$options.position;
        return position === 'top' || position === 'bottom' || axis === 'x';
      }
    }, {
      key: "isFullSize",
      value: function isFullSize() {
        return this.options.fullSize;
      }
    }, {
      key: "_convertTicksToLabels",
      value: function _convertTicksToLabels(ticks) {
        var me = this;
        me.beforeTickToLabelConversion();
        me.generateTickLabels(ticks);
        me.afterTickToLabelConversion();
      }
    }, {
      key: "_getLabelSizes",
      value: function _getLabelSizes() {
        var me = this;
        var labelSizes = me._labelSizes;

        if (!labelSizes) {
          var sampleSize = me.options.ticks.sampleSize;
          var ticks = me.ticks;

          if (sampleSize < ticks.length) {
            ticks = sample(ticks, sampleSize);
          }

          me._labelSizes = labelSizes = me._computeLabelSizes(ticks, ticks.length);
        }

        return labelSizes;
      }
    }, {
      key: "_computeLabelSizes",
      value: function _computeLabelSizes(ticks, length) {
        var ctx = this.ctx,
            caches = this._longestTextCache;
        var widths = [];
        var heights = [];
        var widestLabelSize = 0;
        var highestLabelSize = 0;
        var i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;

        for (i = 0; i < length; ++i) {
          label = ticks[i].label;
          tickFont = this._resolveTickFontOptions(i);
          ctx.font = fontString = tickFont.string;
          cache = caches[fontString] = caches[fontString] || {
            data: {},
            gc: []
          };
          lineHeight = tickFont.lineHeight;
          width = height = 0;

          if (!isNullOrUndef(label) && !isArray(label)) {
            width = _measureText(ctx, cache.data, cache.gc, width, label);
            height = lineHeight;
          } else if (isArray(label)) {
            for (j = 0, jlen = label.length; j < jlen; ++j) {
              nestedLabel = label[j];

              if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
                width = _measureText(ctx, cache.data, cache.gc, width, nestedLabel);
                height += lineHeight;
              }
            }
          }

          widths.push(width);
          heights.push(height);
          widestLabelSize = Math.max(width, widestLabelSize);
          highestLabelSize = Math.max(height, highestLabelSize);
        }

        garbageCollect(caches, length);
        var widest = widths.indexOf(widestLabelSize);
        var highest = heights.indexOf(highestLabelSize);

        var valueAt = function valueAt(idx) {
          return {
            width: widths[idx] || 0,
            height: heights[idx] || 0
          };
        };

        return {
          first: valueAt(0),
          last: valueAt(length - 1),
          widest: valueAt(widest),
          highest: valueAt(highest)
        };
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(value) {
        return value;
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(value, index) {
        return NaN;
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(pixel) {}
    }, {
      key: "getPixelForTick",
      value: function getPixelForTick(index) {
        var ticks = this.ticks;

        if (index < 0 || index > ticks.length - 1) {
          return null;
        }

        return this.getPixelForValue(ticks[index].value);
      }
    }, {
      key: "getPixelForDecimal",
      value: function getPixelForDecimal(decimal) {
        var me = this;

        if (me._reversePixels) {
          decimal = 1 - decimal;
        }

        var pixel = me._startPixel + decimal * me._length;
        return _int16Range(me._alignToPixels ? _alignPixel(me.chart, pixel, 0) : pixel);
      }
    }, {
      key: "getDecimalForPixel",
      value: function getDecimalForPixel(pixel) {
        var decimal = (pixel - this._startPixel) / this._length;
        return this._reversePixels ? 1 - decimal : decimal;
      }
    }, {
      key: "getBasePixel",
      value: function getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
      }
    }, {
      key: "getBaseValue",
      value: function getBaseValue() {
        var min = this.min,
            max = this.max;
        return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
      }
    }, {
      key: "getContext",
      value: function getContext(index) {
        var me = this;
        var ticks = me.ticks || [];

        if (index >= 0 && index < ticks.length) {
          var tick = ticks[index];
          return tick.$context || (tick.$context = createTickContext(me.getContext(), index, tick));
        }

        return me.$context || (me.$context = createScaleContext(me.chart.getContext(), me));
      }
    }, {
      key: "_tickSize",
      value: function _tickSize() {
        var me = this;
        var optionTicks = me.options.ticks;
        var rot = toRadians(me.labelRotation);
        var cos = Math.abs(Math.cos(rot));
        var sin = Math.abs(Math.sin(rot));

        var labelSizes = me._getLabelSizes();

        var padding = optionTicks.autoSkipPadding || 0;
        var w = labelSizes ? labelSizes.widest.width + padding : 0;
        var h = labelSizes ? labelSizes.highest.height + padding : 0;
        return me.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
      }
    }, {
      key: "_isVisible",
      value: function _isVisible() {
        var display = this.options.display;

        if (display !== 'auto') {
          return !!display;
        }

        return this.getMatchingVisibleMetas().length > 0;
      }
    }, {
      key: "_computeGridLineItems",
      value: function _computeGridLineItems(chartArea) {
        var me = this;
        var axis = me.axis;
        var chart = me.chart;
        var options = me.options;
        var grid = options.grid,
            position = options.position;
        var offset = grid.offset;
        var isHorizontal = me.isHorizontal();
        var ticks = me.ticks;
        var ticksLength = ticks.length + (offset ? 1 : 0);
        var tl = getTickMarkLength(grid);
        var items = [];
        var borderOpts = grid.setContext(me.getContext(0));
        var axisWidth = borderOpts.drawBorder ? borderOpts.borderWidth : 0;
        var axisHalfWidth = axisWidth / 2;

        var alignBorderValue = function alignBorderValue(pixel) {
          return _alignPixel(chart, pixel, axisWidth);
        };

        var borderValue, i, lineValue, alignedLineValue;
        var tx1, ty1, tx2, ty2, x1, y1, x2, y2;

        if (position === 'top') {
          borderValue = alignBorderValue(me.bottom);
          ty1 = me.bottom - tl;
          ty2 = borderValue - axisHalfWidth;
          y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
          y2 = chartArea.bottom;
        } else if (position === 'bottom') {
          borderValue = alignBorderValue(me.top);
          y1 = chartArea.top;
          y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
          ty1 = borderValue + axisHalfWidth;
          ty2 = me.top + tl;
        } else if (position === 'left') {
          borderValue = alignBorderValue(me.right);
          tx1 = me.right - tl;
          tx2 = borderValue - axisHalfWidth;
          x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
          x2 = chartArea.right;
        } else if (position === 'right') {
          borderValue = alignBorderValue(me.left);
          x1 = chartArea.left;
          x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
          tx1 = borderValue + axisHalfWidth;
          tx2 = me.left + tl;
        } else if (axis === 'x') {
          if (position === 'center') {
            borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
          } else if (isObject(position)) {
            var positionAxisID = Object.keys(position)[0];
            var value = position[positionAxisID];
            borderValue = alignBorderValue(me.chart.scales[positionAxisID].getPixelForValue(value));
          }

          y1 = chartArea.top;
          y2 = chartArea.bottom;
          ty1 = borderValue + axisHalfWidth;
          ty2 = ty1 + tl;
        } else if (axis === 'y') {
          if (position === 'center') {
            borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
          } else if (isObject(position)) {
            var _positionAxisID = Object.keys(position)[0];
            var _value = position[_positionAxisID];
            borderValue = alignBorderValue(me.chart.scales[_positionAxisID].getPixelForValue(_value));
          }

          tx1 = borderValue - axisHalfWidth;
          tx2 = tx1 - tl;
          x1 = chartArea.left;
          x2 = chartArea.right;
        }

        for (i = 0; i < ticksLength; ++i) {
          var optsAtIndex = grid.setContext(me.getContext(i));
          var lineWidth = optsAtIndex.lineWidth;
          var lineColor = optsAtIndex.color;
          var borderDash = grid.borderDash || [];
          var borderDashOffset = optsAtIndex.borderDashOffset;
          var tickWidth = optsAtIndex.tickWidth;
          var tickColor = optsAtIndex.tickColor;
          var tickBorderDash = optsAtIndex.tickBorderDash || [];
          var tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
          lineValue = getPixelForGridLine(me, i, offset);

          if (lineValue === undefined) {
            continue;
          }

          alignedLineValue = _alignPixel(chart, lineValue, lineWidth);

          if (isHorizontal) {
            tx1 = tx2 = x1 = x2 = alignedLineValue;
          } else {
            ty1 = ty2 = y1 = y2 = alignedLineValue;
          }

          items.push({
            tx1: tx1,
            ty1: ty1,
            tx2: tx2,
            ty2: ty2,
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            width: lineWidth,
            color: lineColor,
            borderDash: borderDash,
            borderDashOffset: borderDashOffset,
            tickWidth: tickWidth,
            tickColor: tickColor,
            tickBorderDash: tickBorderDash,
            tickBorderDashOffset: tickBorderDashOffset
          });
        }

        me._ticksLength = ticksLength;
        me._borderValue = borderValue;
        return items;
      }
    }, {
      key: "_computeLabelItems",
      value: function _computeLabelItems(chartArea) {
        var me = this;
        var axis = me.axis;
        var options = me.options;
        var position = options.position,
            optionTicks = options.ticks;
        var isHorizontal = me.isHorizontal();
        var ticks = me.ticks;
        var align = optionTicks.align,
            crossAlign = optionTicks.crossAlign,
            padding = optionTicks.padding;
        var tl = getTickMarkLength(options.grid);
        var tickAndPadding = tl + padding;
        var rotation = -toRadians(me.labelRotation);
        var items = [];
        var i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
        var textBaseline = 'middle';

        if (position === 'top') {
          y = me.bottom - tickAndPadding;
          textAlign = me._getXAxisLabelAlignment();
        } else if (position === 'bottom') {
          y = me.top + tickAndPadding;
          textAlign = me._getXAxisLabelAlignment();
        } else if (position === 'left') {
          var ret = this._getYAxisLabelAlignment(tl);

          textAlign = ret.textAlign;
          x = ret.x;
        } else if (position === 'right') {
          var _ret = this._getYAxisLabelAlignment(tl);

          textAlign = _ret.textAlign;
          x = _ret.x;
        } else if (axis === 'x') {
          if (position === 'center') {
            y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
          } else if (isObject(position)) {
            var positionAxisID = Object.keys(position)[0];
            var value = position[positionAxisID];
            y = me.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
          }

          textAlign = me._getXAxisLabelAlignment();
        } else if (axis === 'y') {
          if (position === 'center') {
            x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
          } else if (isObject(position)) {
            var _positionAxisID2 = Object.keys(position)[0];
            var _value2 = position[_positionAxisID2];
            x = me.chart.scales[_positionAxisID2].getPixelForValue(_value2);
          }

          textAlign = this._getYAxisLabelAlignment(tl).textAlign;
        }

        if (axis === 'y') {
          if (align === 'start') {
            textBaseline = 'top';
          } else if (align === 'end') {
            textBaseline = 'bottom';
          }
        }

        var labelSizes = me._getLabelSizes();

        for (i = 0, ilen = ticks.length; i < ilen; ++i) {
          tick = ticks[i];
          label = tick.label;
          var optsAtIndex = optionTicks.setContext(me.getContext(i));
          pixel = me.getPixelForTick(i) + optionTicks.labelOffset;
          font = me._resolveTickFontOptions(i);
          lineHeight = font.lineHeight;
          lineCount = isArray(label) ? label.length : 1;
          var halfCount = lineCount / 2;
          var color = optsAtIndex.color;
          var strokeColor = optsAtIndex.textStrokeColor;
          var strokeWidth = optsAtIndex.textStrokeWidth;

          if (isHorizontal) {
            x = pixel;

            if (position === 'top') {
              if (crossAlign === 'near' || rotation !== 0) {
                textOffset = -lineCount * lineHeight + lineHeight / 2;
              } else if (crossAlign === 'center') {
                textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
              } else {
                textOffset = -labelSizes.highest.height + lineHeight / 2;
              }
            } else {
              if (crossAlign === 'near' || rotation !== 0) {
                textOffset = lineHeight / 2;
              } else if (crossAlign === 'center') {
                textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
              } else {
                textOffset = labelSizes.highest.height - lineCount * lineHeight;
              }
            }
          } else {
            y = pixel;
            textOffset = (1 - lineCount) * lineHeight / 2;
          }

          items.push({
            rotation: rotation,
            label: label,
            font: font,
            color: color,
            strokeColor: strokeColor,
            strokeWidth: strokeWidth,
            textOffset: textOffset,
            textAlign: textAlign,
            textBaseline: textBaseline,
            translation: [x, y]
          });
        }

        return items;
      }
    }, {
      key: "_getXAxisLabelAlignment",
      value: function _getXAxisLabelAlignment() {
        var me = this;
        var _me$options3 = me.options,
            position = _me$options3.position,
            ticks = _me$options3.ticks;
        var rotation = -toRadians(me.labelRotation);

        if (rotation) {
          return position === 'top' ? 'left' : 'right';
        }

        var align = 'center';

        if (ticks.align === 'start') {
          align = 'left';
        } else if (ticks.align === 'end') {
          align = 'right';
        }

        return align;
      }
    }, {
      key: "_getYAxisLabelAlignment",
      value: function _getYAxisLabelAlignment(tl) {
        var me = this;
        var _me$options4 = me.options,
            position = _me$options4.position,
            _me$options4$ticks = _me$options4.ticks,
            crossAlign = _me$options4$ticks.crossAlign,
            mirror = _me$options4$ticks.mirror,
            padding = _me$options4$ticks.padding;

        var labelSizes = me._getLabelSizes();

        var tickAndPadding = tl + padding;
        var widest = labelSizes.widest.width;
        var textAlign;
        var x;

        if (position === 'left') {
          if (mirror) {
            textAlign = 'left';
            x = me.right - padding;
          } else {
            x = me.right - tickAndPadding;

            if (crossAlign === 'near') {
              textAlign = 'right';
            } else if (crossAlign === 'center') {
              textAlign = 'center';
              x -= widest / 2;
            } else {
              textAlign = 'left';
              x = me.left;
            }
          }
        } else if (position === 'right') {
          if (mirror) {
            textAlign = 'right';
            x = me.left + padding;
          } else {
            x = me.left + tickAndPadding;

            if (crossAlign === 'near') {
              textAlign = 'left';
            } else if (crossAlign === 'center') {
              textAlign = 'center';
              x += widest / 2;
            } else {
              textAlign = 'right';
              x = me.right;
            }
          }
        } else {
          textAlign = 'right';
        }

        return {
          textAlign: textAlign,
          x: x
        };
      }
    }, {
      key: "_computeLabelArea",
      value: function _computeLabelArea() {
        var me = this;

        if (me.options.ticks.mirror) {
          return;
        }

        var chart = me.chart;
        var position = me.options.position;

        if (position === 'left' || position === 'right') {
          return {
            top: 0,
            left: me.left,
            bottom: chart.height,
            right: me.right
          };
        }

        if (position === 'top' || position === 'bottom') {
          return {
            top: me.top,
            left: 0,
            bottom: me.bottom,
            right: chart.width
          };
        }
      }
    }, {
      key: "drawBackground",
      value: function drawBackground() {
        var ctx = this.ctx,
            backgroundColor = this.options.backgroundColor,
            left = this.left,
            top = this.top,
            width = this.width,
            height = this.height;

        if (backgroundColor) {
          ctx.save();
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(left, top, width, height);
          ctx.restore();
        }
      }
    }, {
      key: "getLineWidthForValue",
      value: function getLineWidthForValue(value) {
        var me = this;
        var grid = me.options.grid;

        if (!me._isVisible() || !grid.display) {
          return 0;
        }

        var ticks = me.ticks;
        var index = ticks.findIndex(function (t) {
          return t.value === value;
        });

        if (index >= 0) {
          var opts = grid.setContext(me.getContext(index));
          return opts.lineWidth;
        }

        return 0;
      }
    }, {
      key: "drawGrid",
      value: function drawGrid(chartArea) {
        var me = this;
        var grid = me.options.grid;
        var ctx = me.ctx;
        var chart = me.chart;
        var borderOpts = grid.setContext(me.getContext(0));
        var axisWidth = grid.drawBorder ? borderOpts.borderWidth : 0;

        var items = me._gridLineItems || (me._gridLineItems = me._computeGridLineItems(chartArea));

        var i, ilen;

        var drawLine = function drawLine(p1, p2, style) {
          if (!style.width || !style.color) {
            return;
          }

          ctx.save();
          ctx.lineWidth = style.width;
          ctx.strokeStyle = style.color;
          ctx.setLineDash(style.borderDash || []);
          ctx.lineDashOffset = style.borderDashOffset;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.restore();
        };

        if (grid.display) {
          for (i = 0, ilen = items.length; i < ilen; ++i) {
            var item = items[i];

            if (grid.drawOnChartArea) {
              drawLine({
                x: item.x1,
                y: item.y1
              }, {
                x: item.x2,
                y: item.y2
              }, item);
            }

            if (grid.drawTicks) {
              drawLine({
                x: item.tx1,
                y: item.ty1
              }, {
                x: item.tx2,
                y: item.ty2
              }, {
                color: item.tickColor,
                width: item.tickWidth,
                borderDash: item.tickBorderDash,
                borderDashOffset: item.tickBorderDashOffset
              });
            }
          }
        }

        if (axisWidth) {
          var edgeOpts = grid.setContext(me.getContext(me._ticksLength - 1));
          var lastLineWidth = edgeOpts.lineWidth;
          var borderValue = me._borderValue;
          var x1, x2, y1, y2;

          if (me.isHorizontal()) {
            x1 = _alignPixel(chart, me.left, axisWidth) - axisWidth / 2;
            x2 = _alignPixel(chart, me.right, lastLineWidth) + lastLineWidth / 2;
            y1 = y2 = borderValue;
          } else {
            y1 = _alignPixel(chart, me.top, axisWidth) - axisWidth / 2;
            y2 = _alignPixel(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
            x1 = x2 = borderValue;
          }

          drawLine({
            x: x1,
            y: y1
          }, {
            x: x2,
            y: y2
          }, {
            width: axisWidth,
            color: edgeOpts.borderColor
          });
        }
      }
    }, {
      key: "drawLabels",
      value: function drawLabels(chartArea) {
        var me = this;
        var optionTicks = me.options.ticks;

        if (!optionTicks.display) {
          return;
        }

        var ctx = me.ctx;

        var area = me._computeLabelArea();

        if (area) {
          clipArea(ctx, area);
        }

        var items = me._labelItems || (me._labelItems = me._computeLabelItems(chartArea));

        var i, ilen;

        for (i = 0, ilen = items.length; i < ilen; ++i) {
          var item = items[i];
          var tickFont = item.font;
          var label = item.label;
          var y = item.textOffset;
          renderText(ctx, label, 0, y, tickFont, item);
        }

        if (area) {
          unclipArea(ctx);
        }
      }
    }, {
      key: "drawTitle",
      value: function drawTitle() {
        var ctx = this.ctx,
            _this$options2 = this.options,
            position = _this$options2.position,
            title = _this$options2.title,
            reverse = _this$options2.reverse;

        if (!title.display) {
          return;
        }

        var font = toFont(title.font);
        var padding = toPadding(title.padding);
        var align = title.align;
        var offset = font.lineHeight / 2;

        if (position === 'bottom') {
          offset += padding.bottom;

          if (isArray(title.text)) {
            offset += font.lineHeight * (title.text.length - 1);
          }
        } else {
          offset += padding.top;
        }

        var _titleArgs = titleArgs(this, offset, position, align),
            titleX = _titleArgs.titleX,
            titleY = _titleArgs.titleY,
            maxWidth = _titleArgs.maxWidth,
            rotation = _titleArgs.rotation;

        renderText(ctx, title.text, 0, 0, font, {
          color: title.color,
          maxWidth: maxWidth,
          rotation: rotation,
          textAlign: titleAlign(align, position, reverse),
          textBaseline: 'middle',
          translation: [titleX, titleY]
        });
      }
    }, {
      key: "draw",
      value: function draw(chartArea) {
        var me = this;

        if (!me._isVisible()) {
          return;
        }

        me.drawBackground();
        me.drawGrid(chartArea);
        me.drawTitle();
        me.drawLabels(chartArea);
      }
    }, {
      key: "_layers",
      value: function _layers() {
        var me = this;
        var opts = me.options;
        var tz = opts.ticks && opts.ticks.z || 0;
        var gz = opts.grid && opts.grid.z || 0;

        if (!me._isVisible() || tz === gz || me.draw !== Scale.prototype.draw) {
          return [{
            z: tz,
            draw: function draw(chartArea) {
              me.draw(chartArea);
            }
          }];
        }

        return [{
          z: gz,
          draw: function draw(chartArea) {
            me.drawBackground();
            me.drawGrid(chartArea);
            me.drawTitle();
          }
        }, {
          z: tz,
          draw: function draw(chartArea) {
            me.drawLabels(chartArea);
          }
        }];
      }
    }, {
      key: "getMatchingVisibleMetas",
      value: function getMatchingVisibleMetas(type) {
        var me = this;
        var metas = me.chart.getSortedVisibleDatasetMetas();
        var axisID = me.axis + 'AxisID';
        var result = [];
        var i, ilen;

        for (i = 0, ilen = metas.length; i < ilen; ++i) {
          var meta = metas[i];

          if (meta[axisID] === me.id && (!type || meta.type === type)) {
            result.push(meta);
          }
        }

        return result;
      }
    }, {
      key: "_resolveTickFontOptions",
      value: function _resolveTickFontOptions(index) {
        var opts = this.options.ticks.setContext(this.getContext(index));
        return toFont(opts.font);
      }
    }]);

    return Scale;
  }(Element);

  function _createResolver(scopes) {
    var _cache;

    var prefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [''];
    var rootScopes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : scopes;
    var fallback = arguments.length > 3 ? arguments[3] : undefined;

    if (!defined(fallback)) {
      fallback = _resolve('_fallback', scopes);
    }

    var cache = (_cache = {}, _defineProperty(_cache, Symbol.toStringTag, 'Object'), _defineProperty(_cache, "_cacheable", true), _defineProperty(_cache, "_scopes", scopes), _defineProperty(_cache, "_rootScopes", rootScopes), _defineProperty(_cache, "_fallback", fallback), _defineProperty(_cache, "override", function override(scope) {
      return _createResolver([scope].concat(_toConsumableArray(scopes)), prefixes, rootScopes, fallback);
    }), _cache);
    return new Proxy(cache, {
      deleteProperty: function deleteProperty(target, prop) {
        delete target[prop];
        delete target._keys;
        delete scopes[0][prop];
        return true;
      },
      get: function get(target, prop) {
        return _cached(target, prop, function () {
          return _resolveWithPrefixes(prop, prefixes, scopes, target);
        });
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
        return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
      },
      getPrototypeOf: function getPrototypeOf() {
        return Reflect.getPrototypeOf(scopes[0]);
      },
      has: function has(target, prop) {
        return getKeysFromAllScopes(target).includes(prop);
      },
      ownKeys: function ownKeys(target) {
        return getKeysFromAllScopes(target);
      },
      set: function set(target, prop, value) {
        scopes[0][prop] = value;
        delete target[prop];
        delete target._keys;
        return true;
      }
    });
  }

  function _attachContext(proxy, context, subProxy, descriptorDefaults) {
    var cache = {
      _cacheable: false,
      _proxy: proxy,
      _context: context,
      _subProxy: subProxy,
      _stack: new Set(),
      _descriptors: _descriptors(proxy, descriptorDefaults),
      setContext: function setContext(ctx) {
        return _attachContext(proxy, ctx, subProxy, descriptorDefaults);
      },
      override: function override(scope) {
        return _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults);
      }
    };
    return new Proxy(cache, {
      deleteProperty: function deleteProperty(target, prop) {
        delete target[prop];
        delete proxy[prop];
        return true;
      },
      get: function get(target, prop, receiver) {
        return _cached(target, prop, function () {
          return _resolveWithContext(target, prop, receiver);
        });
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
        return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
          enumerable: true,
          configurable: true
        } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
      },
      getPrototypeOf: function getPrototypeOf() {
        return Reflect.getPrototypeOf(proxy);
      },
      has: function has(target, prop) {
        return Reflect.has(proxy, prop);
      },
      ownKeys: function ownKeys() {
        return Reflect.ownKeys(proxy);
      },
      set: function set(target, prop, value) {
        proxy[prop] = value;
        delete target[prop];
        return true;
      }
    });
  }

  function _descriptors(proxy) {
    var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      scriptable: true,
      indexable: true
    };

    var _proxy$_scriptable = proxy._scriptable,
        _scriptable = _proxy$_scriptable === void 0 ? defaults.scriptable : _proxy$_scriptable,
        _proxy$_indexable = proxy._indexable,
        _indexable = _proxy$_indexable === void 0 ? defaults.indexable : _proxy$_indexable,
        _proxy$_allKeys = proxy._allKeys,
        _allKeys = _proxy$_allKeys === void 0 ? defaults.allKeys : _proxy$_allKeys;

    return {
      allKeys: _allKeys,
      scriptable: _scriptable,
      indexable: _indexable,
      isScriptable: isFunction(_scriptable) ? _scriptable : function () {
        return _scriptable;
      },
      isIndexable: isFunction(_indexable) ? _indexable : function () {
        return _indexable;
      }
    };
  }

  var readKey = function readKey(prefix, name) {
    return prefix ? prefix + _capitalize(name) : name;
  };

  var needsSubResolver = function needsSubResolver(prop, value) {
    return isObject(value) && prop !== 'adapters';
  };

  function _cached(target, prop, resolve) {
    var value = target[prop];

    if (defined(value)) {
      return value;
    }

    value = resolve();

    if (defined(value)) {
      target[prop] = value;
    }

    return value;
  }

  function _resolveWithContext(target, prop, receiver) {
    var _proxy = target._proxy,
        _context = target._context,
        _subProxy = target._subProxy,
        descriptors = target._descriptors;
    var value = _proxy[prop];

    if (isFunction(value) && descriptors.isScriptable(prop)) {
      value = _resolveScriptable(prop, value, target, receiver);
    }

    if (isArray(value) && value.length) {
      value = _resolveArray(prop, value, target, descriptors.isIndexable);
    }

    if (needsSubResolver(prop, value)) {
      value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
    }

    return value;
  }

  function _resolveScriptable(prop, value, target, receiver) {
    var _proxy = target._proxy,
        _context = target._context,
        _subProxy = target._subProxy,
        _stack = target._stack;

    if (_stack.has(prop)) {
      throw new Error('Recursion detected: ' + _toConsumableArray(_stack).join('->') + '->' + prop);
    }

    _stack.add(prop);

    value = value(_context, _subProxy || receiver);

    _stack.delete(prop);

    if (isObject(value)) {
      value = createSubResolver(_proxy._scopes, _proxy, prop, value);
    }

    return value;
  }

  function _resolveArray(prop, value, target, isIndexable) {
    var _proxy = target._proxy,
        _context = target._context,
        _subProxy = target._subProxy,
        descriptors = target._descriptors;

    if (defined(_context.index) && isIndexable(prop)) {
      value = value[_context.index % value.length];
    } else if (isObject(value[0])) {
      var arr = value;

      var scopes = _proxy._scopes.filter(function (s) {
        return s !== arr;
      });

      value = [];

      var _iterator4 = _createForOfIteratorHelper(arr),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var item = _step4.value;
          var resolver = createSubResolver(scopes, _proxy, prop, item);
          value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }

    return value;
  }

  function resolveFallback(fallback, prop, value) {
    return isFunction(fallback) ? fallback(prop, value) : fallback;
  }

  var getScope = function getScope(key, parent) {
    return key === true ? parent : typeof key === 'string' ? resolveObjectKey(parent, key) : undefined;
  };

  function addScopes(set, parentScopes, key, parentFallback) {
    var _iterator5 = _createForOfIteratorHelper(parentScopes),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var parent = _step5.value;
        var scope = getScope(key, parent);

        if (scope) {
          set.add(scope);
          var fallback = resolveFallback(scope._fallback, key, scope);

          if (defined(fallback) && fallback !== key && fallback !== parentFallback) {
            return fallback;
          }
        } else if (scope === false && defined(parentFallback) && key !== parentFallback) {
          return null;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    return false;
  }

  function createSubResolver(parentScopes, resolver, prop, value) {
    var rootScopes = resolver._rootScopes;
    var fallback = resolveFallback(resolver._fallback, prop, value);
    var allScopes = [].concat(_toConsumableArray(parentScopes), _toConsumableArray(rootScopes));
    var set = new Set();
    var firstParent = parentScopes[0];

    if (isObject(firstParent) && !(prop in firstParent)) {
      set.add(firstParent[prop] = {});
    }

    set.add(value);
    var key = addScopesFromKey(set, allScopes, prop, fallback || prop);

    if (key === null) {
      return false;
    }

    if (defined(fallback) && fallback !== prop) {
      key = addScopesFromKey(set, allScopes, fallback, key);

      if (key === null) {
        return false;
      }
    }

    return _createResolver(_toConsumableArray(set), [''], rootScopes, fallback);
  }

  function addScopesFromKey(set, allScopes, key, fallback) {
    while (key) {
      key = addScopes(set, allScopes, key, fallback);
    }

    return key;
  }

  function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
    var value;

    var _iterator6 = _createForOfIteratorHelper(prefixes),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var prefix = _step6.value;
        value = _resolve(readKey(prefix, prop), scopes);

        if (defined(value)) {
          return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }

  function _resolve(key, scopes) {
    var _iterator7 = _createForOfIteratorHelper(scopes),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var scope = _step7.value;

        if (!scope) {
          continue;
        }

        var value = scope[key];

        if (defined(value)) {
          return value;
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }

  function getKeysFromAllScopes(target) {
    var keys = target._keys;

    if (!keys) {
      keys = target._keys = resolveKeysFromAllScopes(target._scopes);
    }

    return keys;
  }

  function resolveKeysFromAllScopes(scopes) {
    var set = new Set();

    var _iterator8 = _createForOfIteratorHelper(scopes),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var scope = _step8.value;

        var _iterator9 = _createForOfIteratorHelper(Object.keys(scope).filter(function (k) {
          return !k.startsWith('_');
        })),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var key = _step9.value;
            set.add(key);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }

    return _toConsumableArray(set);
  }

  var EPSILON = Number.EPSILON || 1e-14;

  var getPoint = function getPoint(points, i) {
    return i < points.length && !points[i].skip && points[i];
  };

  function splineCurve(firstPoint, middlePoint, afterPoint, t) {
    var previous = firstPoint.skip ? middlePoint : firstPoint;
    var current = middlePoint;
    var next = afterPoint.skip ? middlePoint : afterPoint;
    var d01 = distanceBetweenPoints(current, previous);
    var d12 = distanceBetweenPoints(next, current);
    var s01 = d01 / (d01 + d12);
    var s12 = d12 / (d01 + d12);
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    var fa = t * s01;
    var fb = t * s12;
    return {
      previous: {
        x: current.x - fa * (next.x - previous.x),
        y: current.y - fa * (next.y - previous.y)
      },
      next: {
        x: current.x + fb * (next.x - previous.x),
        y: current.y + fb * (next.y - previous.y)
      }
    };
  }

  function monotoneAdjust(points, deltaK, mK) {
    var pointsLen = points.length;
    var alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
    var pointAfter = getPoint(points, 0);

    for (var i = 0; i < pointsLen - 1; ++i) {
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i + 1);

      if (!pointCurrent || !pointAfter) {
        continue;
      }

      if (almostEquals(deltaK[i], 0, EPSILON)) {
        mK[i] = mK[i + 1] = 0;
        continue;
      }

      alphaK = mK[i] / deltaK[i];
      betaK = mK[i + 1] / deltaK[i];
      squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);

      if (squaredMagnitude <= 9) {
        continue;
      }

      tauK = 3 / Math.sqrt(squaredMagnitude);
      mK[i] = alphaK * tauK * deltaK[i];
      mK[i + 1] = betaK * tauK * deltaK[i];
    }
  }

  function monotoneCompute(points, mK) {
    var pointsLen = points.length;
    var deltaX, pointBefore, pointCurrent;
    var pointAfter = getPoint(points, 0);

    for (var i = 0; i < pointsLen; ++i) {
      pointBefore = pointCurrent;
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i + 1);

      if (!pointCurrent) {
        continue;
      }

      var _pointCurrent = pointCurrent,
          x = _pointCurrent.x,
          y = _pointCurrent.y;

      if (pointBefore) {
        deltaX = (x - pointBefore.x) / 3;
        pointCurrent.cp1x = x - deltaX;
        pointCurrent.cp1y = y - deltaX * mK[i];
      }

      if (pointAfter) {
        deltaX = (pointAfter.x - x) / 3;
        pointCurrent.cp2x = x + deltaX;
        pointCurrent.cp2y = y + deltaX * mK[i];
      }
    }
  }

  function splineCurveMonotone(points) {
    var pointsLen = points.length;
    var deltaK = Array(pointsLen).fill(0);
    var mK = Array(pointsLen);
    var i, pointBefore, pointCurrent;
    var pointAfter = getPoint(points, 0);

    for (i = 0; i < pointsLen; ++i) {
      pointBefore = pointCurrent;
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i + 1);

      if (!pointCurrent) {
        continue;
      }

      if (pointAfter) {
        var slopeDeltaX = pointAfter.x - pointCurrent.x;
        deltaK[i] = slopeDeltaX !== 0 ? (pointAfter.y - pointCurrent.y) / slopeDeltaX : 0;
      }

      mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
    }

    monotoneAdjust(points, deltaK, mK);
    monotoneCompute(points, mK);
  }

  function capControlPoint(pt, min, max) {
    return Math.max(Math.min(pt, max), min);
  }

  function capBezierPoints(points, area) {
    var i, ilen, point, inArea, inAreaPrev;

    var inAreaNext = _isPointInArea(points[0], area);

    for (i = 0, ilen = points.length; i < ilen; ++i) {
      inAreaPrev = inArea;
      inArea = inAreaNext;
      inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);

      if (!inArea) {
        continue;
      }

      point = points[i];

      if (inAreaPrev) {
        point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
        point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
      }

      if (inAreaNext) {
        point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
        point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
      }
    }
  }

  function _updateBezierControlPoints(points, options, area, loop) {
    var i, ilen, point, controlPoints;

    if (options.spanGaps) {
      points = points.filter(function (pt) {
        return !pt.skip;
      });
    }

    if (options.cubicInterpolationMode === 'monotone') {
      splineCurveMonotone(points);
    } else {
      var prev = loop ? points[points.length - 1] : points[0];

      for (i = 0, ilen = points.length; i < ilen; ++i) {
        point = points[i];
        controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
        point.cp1x = controlPoints.previous.x;
        point.cp1y = controlPoints.previous.y;
        point.cp2x = controlPoints.next.x;
        point.cp2y = controlPoints.next.y;
        prev = point;
      }
    }

    if (options.capBezierPoints) {
      capBezierPoints(points, area);
    }
  }

  function _pointInLine(p1, p2, t, mode) {
    return {
      x: p1.x + t * (p2.x - p1.x),
      y: p1.y + t * (p2.y - p1.y)
    };
  }

  function _steppedInterpolation(p1, p2, t, mode) {
    return {
      x: p1.x + t * (p2.x - p1.x),
      y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y : mode === 'after' ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
    };
  }

  function _bezierInterpolation(p1, p2, t, mode) {
    var cp1 = {
      x: p1.cp2x,
      y: p1.cp2y
    };
    var cp2 = {
      x: p2.cp1x,
      y: p2.cp1y
    };

    var a = _pointInLine(p1, cp1, t);

    var b = _pointInLine(cp1, cp2, t);

    var c = _pointInLine(cp2, p2, t);

    var d = _pointInLine(a, b, t);

    var e = _pointInLine(b, c, t);

    return _pointInLine(d, e, t);
  }

  var getRightToLeftAdapter = function getRightToLeftAdapter(rectX, width) {
    return {
      x: function x(_x) {
        return rectX + rectX + width - _x;
      },
      setWidth: function setWidth(w) {
        width = w;
      },
      textAlign: function textAlign(align) {
        if (align === 'center') {
          return align;
        }

        return align === 'right' ? 'left' : 'right';
      },
      xPlus: function xPlus(x, value) {
        return x - value;
      },
      leftForLtr: function leftForLtr(x, itemWidth) {
        return x - itemWidth;
      }
    };
  };

  var getLeftToRightAdapter = function getLeftToRightAdapter() {
    return {
      x: function x(_x2) {
        return _x2;
      },
      setWidth: function setWidth(w) {},
      textAlign: function textAlign(align) {
        return align;
      },
      xPlus: function xPlus(x, value) {
        return x + value;
      },
      leftForLtr: function leftForLtr(x, _itemWidth) {
        return x;
      }
    };
  };

  function getRtlAdapter(rtl, rectX, width) {
    return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
  }

  function overrideTextDirection(ctx, direction) {
    var style, original;

    if (direction === 'ltr' || direction === 'rtl') {
      style = ctx.canvas.style;
      original = [style.getPropertyValue('direction'), style.getPropertyPriority('direction')];
      style.setProperty('direction', direction, 'important');
      ctx.prevTextDirection = original;
    }
  }

  function restoreTextDirection(ctx, original) {
    if (original !== undefined) {
      delete ctx.prevTextDirection;
      ctx.canvas.style.setProperty('direction', original[0], original[1]);
    }
  }

  function propertyFn(property) {
    if (property === 'angle') {
      return {
        between: _angleBetween,
        compare: _angleDiff,
        normalize: _normalizeAngle
      };
    }

    return {
      between: function between(n, s, e) {
        return n >= s && n <= e;
      },
      compare: function compare(a, b) {
        return a - b;
      },
      normalize: function normalize(x) {
        return x;
      }
    };
  }

  function makeSubSegment(start, end, loop, count) {
    return {
      start: start % count,
      end: end % count,
      loop: loop && (end - start + 1) % count === 0
    };
  }

  function getSegment(segment, points, bounds) {
    var property = bounds.property,
        startBound = bounds.start,
        endBound = bounds.end;

    var _propertyFn = propertyFn(property),
        between = _propertyFn.between,
        normalize = _propertyFn.normalize;

    var count = points.length;
    var start = segment.start,
        end = segment.end,
        loop = segment.loop;
    var i, ilen;

    if (loop) {
      start += count;
      end += count;

      for (i = 0, ilen = count; i < ilen; ++i) {
        if (!between(normalize(points[start % count][property]), startBound, endBound)) {
          break;
        }

        start--;
        end--;
      }

      start %= count;
      end %= count;
    }

    if (end < start) {
      end += count;
    }

    return {
      start: start,
      end: end,
      loop: loop
    };
  }

  function _boundSegment(segment, points, bounds) {
    if (!bounds) {
      return [segment];
    }

    var property = bounds.property,
        startBound = bounds.start,
        endBound = bounds.end;
    var count = points.length;

    var _propertyFn2 = propertyFn(property),
        compare = _propertyFn2.compare,
        between = _propertyFn2.between,
        normalize = _propertyFn2.normalize;

    var _getSegment = getSegment(segment, points, bounds),
        start = _getSegment.start,
        end = _getSegment.end,
        loop = _getSegment.loop;

    var result = [];
    var inside = false;
    var subStart = null;
    var value, point, prevValue;

    var startIsBefore = function startIsBefore() {
      return between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
    };

    var endIsBefore = function endIsBefore() {
      return compare(endBound, value) === 0 || between(endBound, prevValue, value);
    };

    var shouldStart = function shouldStart() {
      return inside || startIsBefore();
    };

    var shouldStop = function shouldStop() {
      return !inside || endIsBefore();
    };

    for (var i = start, prev = start; i <= end; ++i) {
      point = points[i % count];

      if (point.skip) {
        continue;
      }

      value = normalize(point[property]);
      inside = between(value, startBound, endBound);

      if (subStart === null && shouldStart()) {
        subStart = compare(value, startBound) === 0 ? i : prev;
      }

      if (subStart !== null && shouldStop()) {
        result.push(makeSubSegment(subStart, i, loop, count));
        subStart = null;
      }

      prev = i;
      prevValue = value;
    }

    if (subStart !== null) {
      result.push(makeSubSegment(subStart, end, loop, count));
    }

    return result;
  }

  function _boundSegments(line, bounds) {
    var result = [];
    var segments = line.segments;

    for (var i = 0; i < segments.length; i++) {
      var sub = _boundSegment(segments[i], line.points, bounds);

      if (sub.length) {
        result.push.apply(result, _toConsumableArray(sub));
      }
    }

    return result;
  }

  function findStartAndEnd(points, count, loop, spanGaps) {
    var start = 0;
    var end = count - 1;

    if (loop && !spanGaps) {
      while (start < count && !points[start].skip) {
        start++;
      }
    }

    while (start < count && points[start].skip) {
      start++;
    }

    start %= count;

    if (loop) {
      end += start;
    }

    while (end > start && points[end % count].skip) {
      end--;
    }

    end %= count;
    return {
      start: start,
      end: end
    };
  }

  function solidSegments(points, start, max, loop) {
    var count = points.length;
    var result = [];
    var last = start;
    var prev = points[start];
    var end;

    for (end = start + 1; end <= max; ++end) {
      var cur = points[end % count];

      if (cur.skip || cur.stop) {
        if (!prev.skip) {
          loop = false;
          result.push({
            start: start % count,
            end: (end - 1) % count,
            loop: loop
          });
          start = last = cur.stop ? end : null;
        }
      } else {
        last = end;

        if (prev.skip) {
          start = end;
        }
      }

      prev = cur;
    }

    if (last !== null) {
      result.push({
        start: start % count,
        end: last % count,
        loop: loop
      });
    }

    return result;
  }

  function _computeSegments(line) {
    var points = line.points;
    var spanGaps = line.options.spanGaps;
    var count = points.length;

    if (!count) {
      return [];
    }

    var loop = !!line._loop;

    var _findStartAndEnd = findStartAndEnd(points, count, loop, spanGaps),
        start = _findStartAndEnd.start,
        end = _findStartAndEnd.end;

    if (spanGaps === true) {
      return [{
        start: start,
        end: end,
        loop: loop
      }];
    }

    var max = end < start ? end + count : end;
    var completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
    return solidSegments(points, start, max, completeLoop);
  }

  var helpers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    easingEffects: effects,
    color: _color,
    getHoverColor: getHoverColor,
    noop: noop,
    uid: uid,
    isNullOrUndef: isNullOrUndef,
    isArray: isArray,
    isObject: isObject,
    isFinite: isNumberFinite,
    finiteOrDefault: finiteOrDefault,
    valueOrDefault: valueOrDefault,
    toPercentage: toPercentage,
    toDimension: toDimension,
    callback: callback,
    each: each,
    _elementsEqual: _elementsEqual,
    clone: clone,
    _merger: _merger,
    merge: merge,
    mergeIf: mergeIf,
    _mergerIf: _mergerIf,
    _deprecated: _deprecated,
    resolveObjectKey: resolveObjectKey,
    _capitalize: _capitalize,
    defined: defined,
    isFunction: isFunction,
    toFontString: toFontString,
    _measureText: _measureText,
    _longestText: _longestText,
    _alignPixel: _alignPixel,
    clearCanvas: clearCanvas,
    drawPoint: drawPoint,
    _isPointInArea: _isPointInArea,
    clipArea: clipArea,
    unclipArea: unclipArea,
    _steppedLineTo: _steppedLineTo,
    _bezierCurveTo: _bezierCurveTo,
    renderText: renderText,
    _lookup: _lookup,
    _lookupByKey: _lookupByKey,
    _rlookupByKey: _rlookupByKey,
    _filterBetween: _filterBetween,
    listenArrayEvents: listenArrayEvents,
    unlistenArrayEvents: unlistenArrayEvents,
    _arrayUnique: _arrayUnique,
    _createResolver: _createResolver,
    _attachContext: _attachContext,
    _descriptors: _descriptors,
    splineCurve: splineCurve,
    splineCurveMonotone: splineCurveMonotone,
    _updateBezierControlPoints: _updateBezierControlPoints,
    _getParentNode: _getParentNode,
    getStyle: getStyle,
    getRelativePosition: getRelativePosition$1,
    getMaximumSize: _getMaximumSize,
    retinaScale: retinaScale,
    supportsEventListenerOptions: supportsEventListenerOptions,
    readUsedSize: readUsedSize,
    fontString: fontString,
    requestAnimFrame: requestAnimFrame,
    throttled: throttled,
    debounce: debounce,
    _toLeftRightCenter: _toLeftRightCenter,
    _alignStartEnd: _alignStartEnd,
    _textX: _textX,
    _pointInLine: _pointInLine,
    _steppedInterpolation: _steppedInterpolation,
    _bezierInterpolation: _bezierInterpolation,
    formatNumber: formatNumber,
    toLineHeight: toLineHeight,
    toTRBL: toTRBL,
    toTRBLCorners: toTRBLCorners,
    toPadding: toPadding,
    toFont: toFont,
    resolve: resolve,
    _addGrace: _addGrace,
    PI: PI,
    TAU: TAU,
    PITAU: PITAU,
    INFINITY: INFINITY,
    RAD_PER_DEG: RAD_PER_DEG,
    HALF_PI: HALF_PI,
    QUARTER_PI: QUARTER_PI,
    TWO_THIRDS_PI: TWO_THIRDS_PI,
    log10: log10,
    sign: sign,
    niceNum: niceNum,
    _factorize: _factorize,
    isNumber: isNumber,
    almostEquals: almostEquals,
    almostWhole: almostWhole,
    _setMinAndMaxByKey: _setMinAndMaxByKey,
    toRadians: toRadians,
    toDegrees: toDegrees,
    _decimalPlaces: _decimalPlaces,
    getAngleFromPoint: getAngleFromPoint,
    distanceBetweenPoints: distanceBetweenPoints,
    _angleDiff: _angleDiff,
    _normalizeAngle: _normalizeAngle,
    _angleBetween: _angleBetween,
    _limitValue: _limitValue,
    _int16Range: _int16Range,
    getRtlAdapter: getRtlAdapter,
    overrideTextDirection: overrideTextDirection,
    restoreTextDirection: restoreTextDirection,
    _boundSegment: _boundSegment,
    _boundSegments: _boundSegments,
    _computeSegments: _computeSegments
  });

  var TypedRegistry = /*#__PURE__*/function () {
    function TypedRegistry(type, scope, override) {
      _classCallCheck(this, TypedRegistry);

      this.type = type;
      this.scope = scope;
      this.override = override;
      this.items = Object.create(null);
    }

    _createClass(TypedRegistry, [{
      key: "isForType",
      value: function isForType(type) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
      }
    }, {
      key: "register",
      value: function register(item) {
        var me = this;
        var proto = Object.getPrototypeOf(item);
        var parentScope;

        if (isIChartComponent(proto)) {
          parentScope = me.register(proto);
        }

        var items = me.items;
        var id = item.id;
        var scope = me.scope + '.' + id;

        if (!id) {
          throw new Error('class does not have id: ' + item);
        }

        if (id in items) {
          return scope;
        }

        items[id] = item;
        registerDefaults(item, scope, parentScope);

        if (me.override) {
          defaults.override(item.id, item.overrides);
        }

        return scope;
      }
    }, {
      key: "get",
      value: function get(id) {
        return this.items[id];
      }
    }, {
      key: "unregister",
      value: function unregister(item) {
        var items = this.items;
        var id = item.id;
        var scope = this.scope;

        if (id in items) {
          delete items[id];
        }

        if (scope && id in defaults[scope]) {
          delete defaults[scope][id];

          if (this.override) {
            delete overrides[id];
          }
        }
      }
    }]);

    return TypedRegistry;
  }();

  function registerDefaults(item, scope, parentScope) {
    var itemDefaults = merge(Object.create(null), [parentScope ? defaults.get(parentScope) : {}, defaults.get(scope), item.defaults]);
    defaults.set(scope, itemDefaults);

    if (item.defaultRoutes) {
      routeDefaults(scope, item.defaultRoutes);
    }

    if (item.descriptors) {
      defaults.describe(scope, item.descriptors);
    }
  }

  function routeDefaults(scope, routes) {
    Object.keys(routes).forEach(function (property) {
      var propertyParts = property.split('.');
      var sourceName = propertyParts.pop();
      var sourceScope = [scope].concat(propertyParts).join('.');
      var parts = routes[property].split('.');
      var targetName = parts.pop();
      var targetScope = parts.join('.');
      defaults.route(sourceScope, sourceName, targetScope, targetName);
    });
  }

  function isIChartComponent(proto) {
    return 'id' in proto && 'defaults' in proto;
  }

  var Registry = /*#__PURE__*/function () {
    function Registry() {
      _classCallCheck(this, Registry);

      this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
      this.elements = new TypedRegistry(Element, 'elements');
      this.plugins = new TypedRegistry(Object, 'plugins');
      this.scales = new TypedRegistry(Scale, 'scales');
      this._typedRegistries = [this.controllers, this.scales, this.elements];
    }

    _createClass(Registry, [{
      key: "add",
      value: function add() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        this._each('register', args);
      }
    }, {
      key: "remove",
      value: function remove() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        this._each('unregister', args);
      }
    }, {
      key: "addControllers",
      value: function addControllers() {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        this._each('register', args, this.controllers);
      }
    }, {
      key: "addElements",
      value: function addElements() {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }

        this._each('register', args, this.elements);
      }
    }, {
      key: "addPlugins",
      value: function addPlugins() {
        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }

        this._each('register', args, this.plugins);
      }
    }, {
      key: "addScales",
      value: function addScales() {
        for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }

        this._each('register', args, this.scales);
      }
    }, {
      key: "getController",
      value: function getController(id) {
        return this._get(id, this.controllers, 'controller');
      }
    }, {
      key: "getElement",
      value: function getElement(id) {
        return this._get(id, this.elements, 'element');
      }
    }, {
      key: "getPlugin",
      value: function getPlugin(id) {
        return this._get(id, this.plugins, 'plugin');
      }
    }, {
      key: "getScale",
      value: function getScale(id) {
        return this._get(id, this.scales, 'scale');
      }
    }, {
      key: "removeControllers",
      value: function removeControllers() {
        for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          args[_key9] = arguments[_key9];
        }

        this._each('unregister', args, this.controllers);
      }
    }, {
      key: "removeElements",
      value: function removeElements() {
        for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          args[_key10] = arguments[_key10];
        }

        this._each('unregister', args, this.elements);
      }
    }, {
      key: "removePlugins",
      value: function removePlugins() {
        for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          args[_key11] = arguments[_key11];
        }

        this._each('unregister', args, this.plugins);
      }
    }, {
      key: "removeScales",
      value: function removeScales() {
        for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          args[_key12] = arguments[_key12];
        }

        this._each('unregister', args, this.scales);
      }
    }, {
      key: "_each",
      value: function _each(method, args, typedRegistry) {
        var me = this;

        _toConsumableArray(args).forEach(function (arg) {
          var reg = typedRegistry || me._getRegistryForType(arg);

          if (typedRegistry || reg.isForType(arg) || reg === me.plugins && arg.id) {
            me._exec(method, reg, arg);
          } else {
            each(arg, function (item) {
              var itemReg = typedRegistry || me._getRegistryForType(item);

              me._exec(method, itemReg, item);
            });
          }
        });
      }
    }, {
      key: "_exec",
      value: function _exec(method, registry, component) {
        var camelMethod = _capitalize(method);

        callback(component['before' + camelMethod], [], component);
        registry[method](component);
        callback(component['after' + camelMethod], [], component);
      }
    }, {
      key: "_getRegistryForType",
      value: function _getRegistryForType(type) {
        for (var i = 0; i < this._typedRegistries.length; i++) {
          var reg = this._typedRegistries[i];

          if (reg.isForType(type)) {
            return reg;
          }
        }

        return this.plugins;
      }
    }, {
      key: "_get",
      value: function _get(id, typedRegistry, type) {
        var item = typedRegistry.get(id);

        if (item === undefined) {
          throw new Error('"' + id + '" is not a registered ' + type + '.');
        }

        return item;
      }
    }]);

    return Registry;
  }();

  var registry = new Registry();

  var PluginService = /*#__PURE__*/function () {
    function PluginService() {
      _classCallCheck(this, PluginService);

      this._init = [];
    }

    _createClass(PluginService, [{
      key: "notify",
      value: function notify(chart, hook, args) {
        var me = this;

        if (hook === 'beforeInit') {
          me._init = me._createDescriptors(chart, true);

          me._notify(me._init, chart, 'install');
        }

        var descriptors = me._descriptors(chart);

        var result = me._notify(descriptors, chart, hook, args);

        if (hook === 'destroy') {
          me._notify(descriptors, chart, 'stop');

          me._notify(me._init, chart, 'uninstall');
        }

        return result;
      }
    }, {
      key: "_notify",
      value: function _notify(descriptors, chart, hook, args) {
        args = args || {};

        var _iterator10 = _createForOfIteratorHelper(descriptors),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var descriptor = _step10.value;
            var plugin = descriptor.plugin;
            var method = plugin[hook];
            var params = [chart, args, descriptor.options];

            if (callback(method, params, plugin) === false && args.cancelable) {
              return false;
            }
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }

        return true;
      }
    }, {
      key: "invalidate",
      value: function invalidate() {
        if (!isNullOrUndef(this._cache)) {
          this._oldCache = this._cache;
          this._cache = undefined;
        }
      }
    }, {
      key: "_descriptors",
      value: function _descriptors(chart) {
        if (this._cache) {
          return this._cache;
        }

        var descriptors = this._cache = this._createDescriptors(chart);

        this._notifyStateChanges(chart);

        return descriptors;
      }
    }, {
      key: "_createDescriptors",
      value: function _createDescriptors(chart, all) {
        var config = chart && chart.config;
        var options = valueOrDefault(config.options && config.options.plugins, {});
        var plugins = allPlugins(config);
        return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
      }
    }, {
      key: "_notifyStateChanges",
      value: function _notifyStateChanges(chart) {
        var previousDescriptors = this._oldCache || [];
        var descriptors = this._cache;

        var diff = function diff(a, b) {
          return a.filter(function (x) {
            return !b.some(function (y) {
              return x.plugin.id === y.plugin.id;
            });
          });
        };

        this._notify(diff(previousDescriptors, descriptors), chart, 'stop');

        this._notify(diff(descriptors, previousDescriptors), chart, 'start');
      }
    }]);

    return PluginService;
  }();

  function allPlugins(config) {
    var plugins = [];
    var keys = Object.keys(registry.plugins.items);

    for (var i = 0; i < keys.length; i++) {
      plugins.push(registry.getPlugin(keys[i]));
    }

    var local = config.plugins || [];

    for (var _i = 0; _i < local.length; _i++) {
      var plugin = local[_i];

      if (plugins.indexOf(plugin) === -1) {
        plugins.push(plugin);
      }
    }

    return plugins;
  }

  function getOpts(options, all) {
    if (!all && options === false) {
      return null;
    }

    if (options === true) {
      return {};
    }

    return options;
  }

  function createDescriptors(chart, plugins, options, all) {
    var result = [];
    var context = chart.getContext();

    for (var i = 0; i < plugins.length; i++) {
      var plugin = plugins[i];
      var id = plugin.id;
      var opts = getOpts(options[id], all);

      if (opts === null) {
        continue;
      }

      result.push({
        plugin: plugin,
        options: pluginOpts(chart.config, plugin, opts, context)
      });
    }

    return result;
  }

  function pluginOpts(config, plugin, opts, context) {
    var keys = config.pluginScopeKeys(plugin);
    var scopes = config.getOptionScopes(opts, keys);
    return config.createResolver(scopes, context, [''], {
      scriptable: false,
      indexable: false,
      allKeys: true
    });
  }

  function getIndexAxis(type, options) {
    var datasetDefaults = defaults.datasets[type] || {};
    var datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
  }

  function getAxisFromDefaultScaleID(id, indexAxis) {
    var axis = id;

    if (id === '_index_') {
      axis = indexAxis;
    } else if (id === '_value_') {
      axis = indexAxis === 'x' ? 'y' : 'x';
    }

    return axis;
  }

  function getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? '_index_' : '_value_';
  }

  function axisFromPosition(position) {
    if (position === 'top' || position === 'bottom') {
      return 'x';
    }

    if (position === 'left' || position === 'right') {
      return 'y';
    }
  }

  function determineAxis(id, scaleOptions) {
    if (id === 'x' || id === 'y') {
      return id;
    }

    return scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.charAt(0).toLowerCase();
  }

  function mergeScaleConfig(config, options) {
    var chartDefaults = overrides[config.type] || {
      scales: {}
    };
    var configScales = options.scales || {};
    var chartIndexAxis = getIndexAxis(config.type, options);
    var firstIDs = Object.create(null);
    var scales = Object.create(null);
    Object.keys(configScales).forEach(function (id) {
      var scaleConf = configScales[id];
      var axis = determineAxis(id, scaleConf);
      var defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
      var defaultScaleOptions = chartDefaults.scales || {};
      firstIDs[axis] = firstIDs[axis] || id;
      scales[id] = mergeIf(Object.create(null), [{
        axis: axis
      }, scaleConf, defaultScaleOptions[axis], defaultScaleOptions[defaultId]]);
    });
    config.data.datasets.forEach(function (dataset) {
      var type = dataset.type || config.type;
      var indexAxis = dataset.indexAxis || getIndexAxis(type, options);
      var datasetDefaults = overrides[type] || {};
      var defaultScaleOptions = datasetDefaults.scales || {};
      Object.keys(defaultScaleOptions).forEach(function (defaultID) {
        var axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
        var id = dataset[axis + 'AxisID'] || firstIDs[axis] || axis;
        scales[id] = scales[id] || Object.create(null);
        mergeIf(scales[id], [{
          axis: axis
        }, configScales[id], defaultScaleOptions[defaultID]]);
      });
    });
    Object.keys(scales).forEach(function (key) {
      var scale = scales[key];
      mergeIf(scale, [defaults.scales[scale.type], defaults.scale]);
    });
    return scales;
  }

  function initOptions(config) {
    var options = config.options || (config.options = {});
    options.plugins = valueOrDefault(options.plugins, {});
    options.scales = mergeScaleConfig(config, options);
  }

  function initConfig(config) {
    config = config || {};
    var data = config.data = config.data || {
      datasets: [],
      labels: []
    };
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    initOptions(config);
    return config;
  }

  var keyCache = new Map();
  var keysCached = new Set();

  function cachedKeys(cacheKey, generate) {
    var keys = keyCache.get(cacheKey);

    if (!keys) {
      keys = generate();
      keyCache.set(cacheKey, keys);
      keysCached.add(keys);
    }

    return keys;
  }

  var addIfFound = function addIfFound(set, obj, key) {
    var opts = resolveObjectKey(obj, key);

    if (opts !== undefined) {
      set.add(opts);
    }
  };

  var Config = /*#__PURE__*/function () {
    function Config(config) {
      _classCallCheck(this, Config);

      this._config = initConfig(config);
      this._scopeCache = new Map();
      this._resolverCache = new Map();
    }

    _createClass(Config, [{
      key: "type",
      get: function get() {
        return this._config.type;
      },
      set: function set(type) {
        this._config.type = type;
      }
    }, {
      key: "data",
      get: function get() {
        return this._config.data;
      },
      set: function set(data) {
        this._config.data = data;
      }
    }, {
      key: "options",
      get: function get() {
        return this._config.options;
      },
      set: function set(options) {
        this._config.options = options;
      }
    }, {
      key: "plugins",
      get: function get() {
        return this._config.plugins;
      }
    }, {
      key: "update",
      value: function update() {
        var config = this._config;
        this.clearCache();
        initOptions(config);
      }
    }, {
      key: "clearCache",
      value: function clearCache() {
        this._scopeCache.clear();

        this._resolverCache.clear();
      }
    }, {
      key: "datasetScopeKeys",
      value: function datasetScopeKeys(datasetType) {
        return cachedKeys(datasetType, function () {
          return [["datasets.".concat(datasetType), '']];
        });
      }
    }, {
      key: "datasetAnimationScopeKeys",
      value: function datasetAnimationScopeKeys(datasetType, transition) {
        return cachedKeys("".concat(datasetType, ".transition.").concat(transition), function () {
          return [["datasets.".concat(datasetType, ".transitions.").concat(transition), "transitions.".concat(transition)], ["datasets.".concat(datasetType), '']];
        });
      }
    }, {
      key: "datasetElementScopeKeys",
      value: function datasetElementScopeKeys(datasetType, elementType) {
        return cachedKeys("".concat(datasetType, "-").concat(elementType), function () {
          return [["datasets.".concat(datasetType, ".elements.").concat(elementType), "datasets.".concat(datasetType), "elements.".concat(elementType), '']];
        });
      }
    }, {
      key: "pluginScopeKeys",
      value: function pluginScopeKeys(plugin) {
        var id = plugin.id;
        var type = this.type;
        return cachedKeys("".concat(type, "-plugin-").concat(id), function () {
          return [["plugins.".concat(id)].concat(_toConsumableArray(plugin.additionalOptionScopes || []))];
        });
      }
    }, {
      key: "_cachedScopes",
      value: function _cachedScopes(mainScope, resetCache) {
        var _scopeCache = this._scopeCache;

        var cache = _scopeCache.get(mainScope);

        if (!cache || resetCache) {
          cache = new Map();

          _scopeCache.set(mainScope, cache);
        }

        return cache;
      }
    }, {
      key: "getOptionScopes",
      value: function getOptionScopes(mainScope, keyLists, resetCache) {
        var options = this.options,
            type = this.type;

        var cache = this._cachedScopes(mainScope, resetCache);

        var cached = cache.get(keyLists);

        if (cached) {
          return cached;
        }

        var scopes = new Set();
        keyLists.forEach(function (keys) {
          if (mainScope) {
            scopes.add(mainScope);
            keys.forEach(function (key) {
              return addIfFound(scopes, mainScope, key);
            });
          }

          keys.forEach(function (key) {
            return addIfFound(scopes, options, key);
          });
          keys.forEach(function (key) {
            return addIfFound(scopes, overrides[type] || {}, key);
          });
          keys.forEach(function (key) {
            return addIfFound(scopes, defaults, key);
          });
          keys.forEach(function (key) {
            return addIfFound(scopes, descriptors, key);
          });
        });

        var array = _toConsumableArray(scopes);

        if (keysCached.has(keyLists)) {
          cache.set(keyLists, array);
        }

        return array;
      }
    }, {
      key: "chartOptionScopes",
      value: function chartOptionScopes() {
        var options = this.options,
            type = this.type;
        return [options, overrides[type] || {}, defaults.datasets[type] || {}, {
          type: type
        }, defaults, descriptors];
      }
    }, {
      key: "resolveNamedOptions",
      value: function resolveNamedOptions(scopes, names, context) {
        var prefixes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [''];
        var result = {
          $shared: true
        };

        var _getResolver = getResolver(this._resolverCache, scopes, prefixes),
            resolver = _getResolver.resolver,
            subPrefixes = _getResolver.subPrefixes;

        var options = resolver;

        if (needContext(resolver, names)) {
          result.$shared = false;
          context = isFunction(context) ? context() : context;
          var subResolver = this.createResolver(scopes, context, subPrefixes);
          options = _attachContext(resolver, context, subResolver);
        }

        var _iterator11 = _createForOfIteratorHelper(names),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var prop = _step11.value;
            result[prop] = options[prop];
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        return result;
      }
    }, {
      key: "createResolver",
      value: function createResolver(scopes, context) {
        var prefixes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [''];
        var descriptorDefaults = arguments.length > 3 ? arguments[3] : undefined;

        var _getResolver2 = getResolver(this._resolverCache, scopes, prefixes),
            resolver = _getResolver2.resolver;

        return isObject(context) ? _attachContext(resolver, context, undefined, descriptorDefaults) : resolver;
      }
    }]);

    return Config;
  }();

  function getResolver(resolverCache, scopes, prefixes) {
    var cache = resolverCache.get(scopes);

    if (!cache) {
      cache = new Map();
      resolverCache.set(scopes, cache);
    }

    var cacheKey = prefixes.join();
    var cached = cache.get(cacheKey);

    if (!cached) {
      var resolver = _createResolver(scopes, prefixes);

      cached = {
        resolver: resolver,
        subPrefixes: prefixes.filter(function (p) {
          return !p.toLowerCase().includes('hover');
        })
      };
      cache.set(cacheKey, cached);
    }

    return cached;
  }

  function needContext(proxy, names) {
    var _descriptors2 = _descriptors(proxy),
        isScriptable = _descriptors2.isScriptable,
        isIndexable = _descriptors2.isIndexable;

    var _iterator12 = _createForOfIteratorHelper(names),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var prop = _step12.value;

        if (isScriptable(prop) && isFunction(proxy[prop]) || isIndexable(prop) && isArray(proxy[prop])) {
          return true;
        }
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }

    return false;
  }

  var version = "3.0.1";
  var KNOWN_POSITIONS = ['top', 'bottom', 'left', 'right', 'chartArea'];

  function positionIsHorizontal(position, axis) {
    return position === 'top' || position === 'bottom' || KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x';
  }

  function compare2Level(l1, l2) {
    return function (a, b) {
      return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
  }

  function onAnimationsComplete(context) {
    var chart = context.chart;
    var animationOptions = chart.options.animation;
    chart.notifyPlugins('afterRender');
    callback(animationOptions && animationOptions.onComplete, [context], chart);
  }

  function onAnimationProgress(context) {
    var chart = context.chart;
    var animationOptions = chart.options.animation;
    callback(animationOptions && animationOptions.onProgress, [context], chart);
  }

  function isDomSupported() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  function getCanvas(item) {
    if (isDomSupported() && typeof item === 'string') {
      item = document.getElementById(item);
    } else if (item && item.length) {
      item = item[0];
    }

    if (item && item.canvas) {
      item = item.canvas;
    }

    return item;
  }

  var instances = {};

  var getChart = function getChart(key) {
    var canvas = getCanvas(key);
    return Object.values(instances).filter(function (c) {
      return c.canvas === canvas;
    }).pop();
  };

  var Chart = /*#__PURE__*/function () {
    function Chart(item, config) {
      var _this2 = this;

      _classCallCheck(this, Chart);

      var me = this;
      this.config = config = new Config(config);
      var initialCanvas = getCanvas(item);
      var existingChart = getChart(initialCanvas);

      if (existingChart) {
        throw new Error('Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' + ' must be destroyed before the canvas can be reused.');
      }

      var options = config.createResolver(config.chartOptionScopes(), me.getContext());
      this.platform = me._initializePlatform(initialCanvas, config);
      var context = me.platform.acquireContext(initialCanvas, options.aspectRatio);
      var canvas = context && context.canvas;
      var height = canvas && canvas.height;
      var width = canvas && canvas.width;
      this.id = uid();
      this.ctx = context;
      this.canvas = canvas;
      this.width = width;
      this.height = height;
      this._options = options;
      this._aspectRatio = this.aspectRatio;
      this._layers = [];
      this._metasets = [];
      this._stacks = undefined;
      this.boxes = [];
      this.currentDevicePixelRatio = undefined;
      this.chartArea = undefined;
      this._active = [];
      this._lastEvent = undefined;
      this._listeners = {};
      this._sortedMetasets = [];
      this.scales = {};
      this.scale = undefined;
      this._plugins = new PluginService();
      this.$proxies = {};
      this._hiddenIndices = {};
      this.attached = false;
      this._animationsDisabled = undefined;
      this.$context = undefined;
      this._doResize = debounce(function () {
        return _this2.update('resize');
      }, options.resizeDelay || 0);
      instances[me.id] = me;

      if (!context || !canvas) {
        console.error("Failed to create chart: can't acquire context from the given item");
        return;
      }

      animator.listen(me, 'complete', onAnimationsComplete);
      animator.listen(me, 'progress', onAnimationProgress);

      me._initialize();

      if (me.attached) {
        me.update();
      }
    }

    _createClass(Chart, [{
      key: "aspectRatio",
      get: function get() {
        var _this$options3 = this.options,
            aspectRatio = _this$options3.aspectRatio,
            maintainAspectRatio = _this$options3.maintainAspectRatio,
            width = this.width,
            height = this.height,
            _aspectRatio = this._aspectRatio;

        if (!isNullOrUndef(aspectRatio)) {
          return aspectRatio;
        }

        if (maintainAspectRatio && _aspectRatio) {
          return _aspectRatio;
        }

        return height ? width / height : null;
      }
    }, {
      key: "data",
      get: function get() {
        return this.config.data;
      },
      set: function set(data) {
        this.config.data = data;
      }
    }, {
      key: "options",
      get: function get() {
        return this._options;
      },
      set: function set(options) {
        this.config.options = options;
      }
    }, {
      key: "_initialize",
      value: function _initialize() {
        var me = this;
        me.notifyPlugins('beforeInit');

        if (me.options.responsive) {
          me.resize();
        } else {
          retinaScale(me, me.options.devicePixelRatio);
        }

        me.bindEvents();
        me.notifyPlugins('afterInit');
        return me;
      }
    }, {
      key: "_initializePlatform",
      value: function _initializePlatform(canvas, config) {
        if (config.platform) {
          return new config.platform();
        } else if (!isDomSupported() || typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas) {
          return new BasicPlatform();
        }

        return new DomPlatform();
      }
    }, {
      key: "clear",
      value: function clear() {
        clearCanvas(this.canvas, this.ctx);
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        animator.stop(this);
        return this;
      }
    }, {
      key: "resize",
      value: function resize(width, height) {
        if (!animator.running(this)) {
          this._resize(width, height);
        } else {
          this._resizeBeforeDraw = {
            width: width,
            height: height
          };
        }
      }
    }, {
      key: "_resize",
      value: function _resize(width, height) {
        var me = this;
        var options = me.options;
        var canvas = me.canvas;
        var aspectRatio = options.maintainAspectRatio && me.aspectRatio;
        var newSize = me.platform.getMaximumSize(canvas, width, height, aspectRatio);
        var oldRatio = me.currentDevicePixelRatio;
        var newRatio = options.devicePixelRatio || me.platform.getDevicePixelRatio();

        if (me.width === newSize.width && me.height === newSize.height && oldRatio === newRatio) {
          return;
        }

        me.width = newSize.width;
        me.height = newSize.height;
        me._aspectRatio = me.aspectRatio;
        retinaScale(me, newRatio, true);
        me.notifyPlugins('resize', {
          size: newSize
        });
        callback(options.onResize, [me, newSize], me);

        if (me.attached) {
          if (me._doResize()) {
            me.render();
          }
        }
      }
    }, {
      key: "ensureScalesHaveIDs",
      value: function ensureScalesHaveIDs() {
        var options = this.options;
        var scalesOptions = options.scales || {};
        each(scalesOptions, function (axisOptions, axisID) {
          axisOptions.id = axisID;
        });
      }
    }, {
      key: "buildOrUpdateScales",
      value: function buildOrUpdateScales() {
        var me = this;
        var options = me.options;
        var scaleOpts = options.scales;
        var scales = me.scales;
        var updated = Object.keys(scales).reduce(function (obj, id) {
          obj[id] = false;
          return obj;
        }, {});
        var items = [];

        if (scaleOpts) {
          items = items.concat(Object.keys(scaleOpts).map(function (id) {
            var scaleOptions = scaleOpts[id];
            var axis = determineAxis(id, scaleOptions);
            var isRadial = axis === 'r';
            var isHorizontal = axis === 'x';
            return {
              options: scaleOptions,
              dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
              dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
            };
          }));
        }

        each(items, function (item) {
          var scaleOptions = item.options;
          var id = scaleOptions.id;
          var axis = determineAxis(id, scaleOptions);
          var scaleType = valueOrDefault(scaleOptions.type, item.dtype);

          if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
            scaleOptions.position = item.dposition;
          }

          updated[id] = true;
          var scale = null;

          if (id in scales && scales[id].type === scaleType) {
            scale = scales[id];
          } else {
            var scaleClass = registry.getScale(scaleType);
            scale = new scaleClass({
              id: id,
              type: scaleType,
              ctx: me.ctx,
              chart: me
            });
            scales[scale.id] = scale;
          }

          scale.init(scaleOptions, options);
        });
        each(updated, function (hasUpdated, id) {
          if (!hasUpdated) {
            delete scales[id];
          }
        });
        each(scales, function (scale) {
          layouts.configure(me, scale, scale.options);
          layouts.addBox(me, scale);
        });
      }
    }, {
      key: "_updateMetasetIndex",
      value: function _updateMetasetIndex(meta, index) {
        var metasets = this._metasets;
        var oldIndex = meta.index;

        if (oldIndex !== index) {
          metasets[oldIndex] = metasets[index];
          metasets[index] = meta;
          meta.index = index;
        }
      }
    }, {
      key: "_updateMetasets",
      value: function _updateMetasets() {
        var me = this;
        var metasets = me._metasets;
        var numData = me.data.datasets.length;
        var numMeta = metasets.length;

        if (numMeta > numData) {
          for (var i = numData; i < numMeta; ++i) {
            me._destroyDatasetMeta(i);
          }

          metasets.splice(numData, numMeta - numData);
        }

        me._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
      }
    }, {
      key: "_removeUnreferencedMetasets",
      value: function _removeUnreferencedMetasets() {
        var me = this;
        var metasets = me._metasets,
            datasets = me.data.datasets;

        if (metasets.length > datasets.length) {
          delete me._stacks;
        }

        metasets.forEach(function (meta, index) {
          if (datasets.filter(function (x) {
            return x === meta._dataset;
          }).length === 0) {
            me._destroyDatasetMeta(index);
          }
        });
      }
    }, {
      key: "buildOrUpdateControllers",
      value: function buildOrUpdateControllers() {
        var me = this;
        var newControllers = [];
        var datasets = me.data.datasets;
        var i, ilen;

        me._removeUnreferencedMetasets();

        for (i = 0, ilen = datasets.length; i < ilen; i++) {
          var dataset = datasets[i];
          var meta = me.getDatasetMeta(i);
          var type = dataset.type || me.config.type;

          if (meta.type && meta.type !== type) {
            me._destroyDatasetMeta(i);

            meta = me.getDatasetMeta(i);
          }

          meta.type = type;
          meta.indexAxis = dataset.indexAxis || getIndexAxis(type, me.options);
          meta.order = dataset.order || 0;

          me._updateMetasetIndex(meta, i);

          meta.label = '' + dataset.label;
          meta.visible = me.isDatasetVisible(i);

          if (meta.controller) {
            meta.controller.updateIndex(i);
            meta.controller.linkScales();
          } else {
            var ControllerClass = registry.getController(type);
            var _defaults$datasets$ty = defaults.datasets[type],
                datasetElementType = _defaults$datasets$ty.datasetElementType,
                dataElementType = _defaults$datasets$ty.dataElementType;
            Object.assign(ControllerClass.prototype, {
              dataElementType: registry.getElement(dataElementType),
              datasetElementType: datasetElementType && registry.getElement(datasetElementType)
            });
            meta.controller = new ControllerClass(me, i);
            newControllers.push(meta.controller);
          }
        }

        me._updateMetasets();

        return newControllers;
      }
    }, {
      key: "_resetElements",
      value: function _resetElements() {
        var me = this;
        each(me.data.datasets, function (dataset, datasetIndex) {
          me.getDatasetMeta(datasetIndex).controller.reset();
        }, me);
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElements();

        this.notifyPlugins('reset');
      }
    }, {
      key: "update",
      value: function update(mode) {
        var me = this;
        var config = me.config;
        config.update();
        me._options = config.createResolver(config.chartOptionScopes(), me.getContext());
        each(me.scales, function (scale) {
          layouts.removeBox(me, scale);
        });
        var animsDisabled = me._animationsDisabled = !me.options.animation;
        me.ensureScalesHaveIDs();
        me.buildOrUpdateScales();

        me._plugins.invalidate();

        if (me.notifyPlugins('beforeUpdate', {
          mode: mode,
          cancelable: true
        }) === false) {
          return;
        }

        var newControllers = me.buildOrUpdateControllers();
        me.notifyPlugins('beforeElementsUpdate');
        var minPadding = 0;

        for (var i = 0, ilen = me.data.datasets.length; i < ilen; i++) {
          var _me$getDatasetMeta = me.getDatasetMeta(i),
              controller = _me$getDatasetMeta.controller;

          var reset = !animsDisabled && newControllers.indexOf(controller) === -1;
          controller.buildOrUpdateElements(reset);
          minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
        }

        me._minPadding = minPadding;

        me._updateLayout(minPadding);

        if (!animsDisabled) {
          each(newControllers, function (controller) {
            controller.reset();
          });
        }

        me._updateDatasets(mode);

        me.notifyPlugins('afterUpdate', {
          mode: mode
        });

        me._layers.sort(compare2Level('z', '_idx'));

        if (me._lastEvent) {
          me._eventHandler(me._lastEvent, true);
        }

        me.render();
      }
    }, {
      key: "_updateLayout",
      value: function _updateLayout(minPadding) {
        var me = this;

        if (me.notifyPlugins('beforeLayout', {
          cancelable: true
        }) === false) {
          return;
        }

        layouts.update(me, me.width, me.height, minPadding);
        var area = me.chartArea;
        var noArea = area.width <= 0 || area.height <= 0;
        me._layers = [];
        each(me.boxes, function (box) {
          var _me$_layers;

          if (noArea && box.position === 'chartArea') {
            return;
          }

          if (box.configure) {
            box.configure();
          }

          (_me$_layers = me._layers).push.apply(_me$_layers, _toConsumableArray(box._layers()));
        }, me);

        me._layers.forEach(function (item, index) {
          item._idx = index;
        });

        me.notifyPlugins('afterLayout');
      }
    }, {
      key: "_updateDatasets",
      value: function _updateDatasets(mode) {
        var me = this;
        var isFunction = typeof mode === 'function';

        if (me.notifyPlugins('beforeDatasetsUpdate', {
          mode: mode,
          cancelable: true
        }) === false) {
          return;
        }

        for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
          me._updateDataset(i, isFunction ? mode({
            datasetIndex: i
          }) : mode);
        }

        me.notifyPlugins('afterDatasetsUpdate', {
          mode: mode
        });
      }
    }, {
      key: "_updateDataset",
      value: function _updateDataset(index, mode) {
        var me = this;
        var meta = me.getDatasetMeta(index);
        var args = {
          meta: meta,
          index: index,
          mode: mode,
          cancelable: true
        };

        if (me.notifyPlugins('beforeDatasetUpdate', args) === false) {
          return;
        }

        meta.controller._update(mode);

        args.cancelable = false;
        me.notifyPlugins('afterDatasetUpdate', args);
      }
    }, {
      key: "render",
      value: function render() {
        var me = this;

        if (me.notifyPlugins('beforeRender', {
          cancelable: true
        }) === false) {
          return;
        }

        if (animator.has(me)) {
          if (me.attached && !animator.running(me)) {
            animator.start(me);
          }
        } else {
          me.draw();
          onAnimationsComplete({
            chart: me
          });
        }
      }
    }, {
      key: "draw",
      value: function draw() {
        var me = this;
        var i;

        if (me._resizeBeforeDraw) {
          var _me$_resizeBeforeDraw = me._resizeBeforeDraw,
              width = _me$_resizeBeforeDraw.width,
              height = _me$_resizeBeforeDraw.height;

          me._resize(width, height);

          me._resizeBeforeDraw = null;
        }

        me.clear();

        if (me.width <= 0 || me.height <= 0) {
          return;
        }

        if (me.notifyPlugins('beforeDraw', {
          cancelable: true
        }) === false) {
          return;
        }

        var layers = me._layers;

        for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
          layers[i].draw(me.chartArea);
        }

        me._drawDatasets();

        for (; i < layers.length; ++i) {
          layers[i].draw(me.chartArea);
        }

        me.notifyPlugins('afterDraw');
      }
    }, {
      key: "_getSortedDatasetMetas",
      value: function _getSortedDatasetMetas(filterVisible) {
        var me = this;
        var metasets = me._sortedMetasets;
        var result = [];
        var i, ilen;

        for (i = 0, ilen = metasets.length; i < ilen; ++i) {
          var meta = metasets[i];

          if (!filterVisible || meta.visible) {
            result.push(meta);
          }
        }

        return result;
      }
    }, {
      key: "getSortedVisibleDatasetMetas",
      value: function getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(true);
      }
    }, {
      key: "_drawDatasets",
      value: function _drawDatasets() {
        var me = this;

        if (me.notifyPlugins('beforeDatasetsDraw', {
          cancelable: true
        }) === false) {
          return;
        }

        var metasets = me.getSortedVisibleDatasetMetas();

        for (var i = metasets.length - 1; i >= 0; --i) {
          me._drawDataset(metasets[i]);
        }

        me.notifyPlugins('afterDatasetsDraw');
      }
    }, {
      key: "_drawDataset",
      value: function _drawDataset(meta) {
        var me = this;
        var ctx = me.ctx;
        var clip = meta._clip;
        var area = me.chartArea;
        var args = {
          meta: meta,
          index: meta.index,
          cancelable: true
        };

        if (me.notifyPlugins('beforeDatasetDraw', args) === false) {
          return;
        }

        clipArea(ctx, {
          left: clip.left === false ? 0 : area.left - clip.left,
          right: clip.right === false ? me.width : area.right + clip.right,
          top: clip.top === false ? 0 : area.top - clip.top,
          bottom: clip.bottom === false ? me.height : area.bottom + clip.bottom
        });
        meta.controller.draw();
        unclipArea(ctx);
        args.cancelable = false;
        me.notifyPlugins('afterDatasetDraw', args);
      }
    }, {
      key: "getElementsAtEventForMode",
      value: function getElementsAtEventForMode(e, mode, options, useFinalPosition) {
        var method = Interaction.modes[mode];

        if (typeof method === 'function') {
          return method(this, e, options, useFinalPosition);
        }

        return [];
      }
    }, {
      key: "getDatasetMeta",
      value: function getDatasetMeta(datasetIndex) {
        var me = this;
        var dataset = me.data.datasets[datasetIndex];
        var metasets = me._metasets;
        var meta = metasets.filter(function (x) {
          return x && x._dataset === dataset;
        }).pop();

        if (!meta) {
          meta = metasets[datasetIndex] = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: dataset && dataset.order || 0,
            index: datasetIndex,
            _dataset: dataset,
            _parsed: [],
            _sorted: false
          };
        }

        return meta;
      }
    }, {
      key: "getContext",
      value: function getContext() {
        return this.$context || (this.$context = {
          chart: this,
          type: 'chart'
        });
      }
    }, {
      key: "getVisibleDatasetCount",
      value: function getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
      }
    }, {
      key: "isDatasetVisible",
      value: function isDatasetVisible(datasetIndex) {
        var dataset = this.data.datasets[datasetIndex];

        if (!dataset) {
          return false;
        }

        var meta = this.getDatasetMeta(datasetIndex);
        return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
      }
    }, {
      key: "setDatasetVisibility",
      value: function setDatasetVisibility(datasetIndex, visible) {
        var meta = this.getDatasetMeta(datasetIndex);
        meta.hidden = !visible;
      }
    }, {
      key: "toggleDataVisibility",
      value: function toggleDataVisibility(index) {
        this._hiddenIndices[index] = !this._hiddenIndices[index];
      }
    }, {
      key: "getDataVisibility",
      value: function getDataVisibility(index) {
        return !this._hiddenIndices[index];
      }
    }, {
      key: "_updateDatasetVisibility",
      value: function _updateDatasetVisibility(datasetIndex, visible) {
        var me = this;
        var mode = visible ? 'show' : 'hide';
        var meta = me.getDatasetMeta(datasetIndex);

        var anims = meta.controller._resolveAnimations(undefined, mode);

        me.setDatasetVisibility(datasetIndex, visible);
        anims.update(meta, {
          visible: visible
        });
        me.update(function (ctx) {
          return ctx.datasetIndex === datasetIndex ? mode : undefined;
        });
      }
    }, {
      key: "hide",
      value: function hide(datasetIndex) {
        this._updateDatasetVisibility(datasetIndex, false);
      }
    }, {
      key: "show",
      value: function show(datasetIndex) {
        this._updateDatasetVisibility(datasetIndex, true);
      }
    }, {
      key: "_destroyDatasetMeta",
      value: function _destroyDatasetMeta(datasetIndex) {
        var me = this;
        var meta = me._metasets && me._metasets[datasetIndex];

        if (meta && meta.controller) {
          meta.controller._destroy();

          delete me._metasets[datasetIndex];
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var me = this;
        var canvas = me.canvas,
            ctx = me.ctx;
        var i, ilen;
        me.stop();
        animator.remove(me);

        for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
          me._destroyDatasetMeta(i);
        }

        me.config.clearCache();

        if (canvas) {
          me.unbindEvents();
          clearCanvas(canvas, ctx);
          me.platform.releaseContext(ctx);
          me.canvas = null;
          me.ctx = null;
        }

        me.notifyPlugins('destroy');
        delete instances[me.id];
      }
    }, {
      key: "toBase64Image",
      value: function toBase64Image() {
        var _this$canvas;

        return (_this$canvas = this.canvas).toDataURL.apply(_this$canvas, arguments);
      }
    }, {
      key: "bindEvents",
      value: function bindEvents() {
        var me = this;
        var listeners = me._listeners;
        var platform = me.platform;

        var _add = function _add(type, listener) {
          platform.addEventListener(me, type, listener);
          listeners[type] = listener;
        };

        var _remove = function _remove(type, listener) {
          if (listeners[type]) {
            platform.removeEventListener(me, type, listener);
            delete listeners[type];
          }
        };

        var listener = function listener(e, x, y) {
          e.offsetX = x;
          e.offsetY = y;

          me._eventHandler(e);
        };

        each(me.options.events, function (type) {
          return _add(type, listener);
        });

        if (me.options.responsive) {
          listener = function listener(width, height) {
            if (me.canvas) {
              me.resize(width, height);
            }
          };

          var detached;

          var attached = function attached() {
            _remove('attach', attached);

            me.attached = true;
            me.resize();

            _add('resize', listener);

            _add('detach', detached);
          };

          detached = function detached() {
            me.attached = false;

            _remove('resize', listener);

            _add('attach', attached);
          };

          if (platform.isAttached(me.canvas)) {
            attached();
          } else {
            detached();
          }
        } else {
          me.attached = true;
        }
      }
    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
        var me = this;
        var listeners = me._listeners;

        if (!listeners) {
          return;
        }

        delete me._listeners;
        each(listeners, function (listener, type) {
          me.platform.removeEventListener(me, type, listener);
        });
      }
    }, {
      key: "updateHoverStyle",
      value: function updateHoverStyle(items, mode, enabled) {
        var prefix = enabled ? 'set' : 'remove';
        var meta, item, i, ilen;

        if (mode === 'dataset') {
          meta = this.getDatasetMeta(items[0].datasetIndex);
          meta.controller['_' + prefix + 'DatasetHoverStyle']();
        }

        for (i = 0, ilen = items.length; i < ilen; ++i) {
          item = items[i];
          var controller = item && this.getDatasetMeta(item.datasetIndex).controller;

          if (controller) {
            controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
          }
        }
      }
    }, {
      key: "getActiveElements",
      value: function getActiveElements() {
        return this._active || [];
      }
    }, {
      key: "setActiveElements",
      value: function setActiveElements(activeElements) {
        var me = this;
        var lastActive = me._active || [];
        var active = activeElements.map(function (_ref) {
          var datasetIndex = _ref.datasetIndex,
              index = _ref.index;
          var meta = me.getDatasetMeta(datasetIndex);

          if (!meta) {
            throw new Error('No dataset found at index ' + datasetIndex);
          }

          return {
            datasetIndex: datasetIndex,
            element: meta.data[index],
            index: index
          };
        });
        var changed = !_elementsEqual(active, lastActive);

        if (changed) {
          me._active = active;

          me._updateHoverStyles(active, lastActive);
        }
      }
    }, {
      key: "notifyPlugins",
      value: function notifyPlugins(hook, args) {
        return this._plugins.notify(this, hook, args);
      }
    }, {
      key: "_updateHoverStyles",
      value: function _updateHoverStyles(active, lastActive, replay) {
        var me = this;
        var hoverOptions = me.options.hover;

        var diff = function diff(a, b) {
          return a.filter(function (x) {
            return !b.some(function (y) {
              return x.datasetIndex === y.datasetIndex && x.index === y.index;
            });
          });
        };

        var deactivated = diff(lastActive, active);
        var activated = replay ? active : diff(active, lastActive);

        if (deactivated.length) {
          me.updateHoverStyle(deactivated, hoverOptions.mode, false);
        }

        if (activated.length && hoverOptions.mode) {
          me.updateHoverStyle(activated, hoverOptions.mode, true);
        }
      }
    }, {
      key: "_eventHandler",
      value: function _eventHandler(e, replay) {
        var me = this;
        var args = {
          event: e,
          replay: replay,
          cancelable: true
        };

        if (me.notifyPlugins('beforeEvent', args) === false) {
          return;
        }

        var changed = me._handleEvent(e, replay);

        args.cancelable = false;
        me.notifyPlugins('afterEvent', args);

        if (changed || args.changed) {
          me.render();
        }

        return me;
      }
    }, {
      key: "_handleEvent",
      value: function _handleEvent(e, replay) {
        var me = this;
        var _me$_active = me._active,
            lastActive = _me$_active === void 0 ? [] : _me$_active,
            options = me.options;
        var hoverOptions = options.hover;
        var useFinalPosition = replay;
        var active = [];
        var changed = false;
        var lastEvent = null;

        if (e.type !== 'mouseout') {
          active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
          lastEvent = e.type === 'click' ? me._lastEvent : e;
        }

        me._lastEvent = null;
        callback(options.onHover, [e, active, me], me);

        if (e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu') {
          if (_isPointInArea(e, me.chartArea, me._minPadding)) {
            callback(options.onClick, [e, active, me], me);
          }
        }

        changed = !_elementsEqual(active, lastActive);

        if (changed || replay) {
          me._active = active;

          me._updateHoverStyles(active, lastActive, replay);
        }

        me._lastEvent = lastEvent;
        return changed;
      }
    }]);

    return Chart;
  }();

  var invalidatePlugins = function invalidatePlugins() {
    return each(Chart.instances, function (chart) {
      return chart._plugins.invalidate();
    });
  };

  var enumerable = true;
  Object.defineProperties(Chart, {
    defaults: {
      enumerable: enumerable,
      value: defaults
    },
    instances: {
      enumerable: enumerable,
      value: instances
    },
    overrides: {
      enumerable: enumerable,
      value: overrides
    },
    registry: {
      enumerable: enumerable,
      value: registry
    },
    version: {
      enumerable: enumerable,
      value: version
    },
    getChart: {
      enumerable: enumerable,
      value: getChart
    },
    register: {
      enumerable: enumerable,
      value: function value() {
        registry.add.apply(registry, arguments);
        invalidatePlugins();
      }
    },
    unregister: {
      enumerable: enumerable,
      value: function value() {
        registry.remove.apply(registry, arguments);
        invalidatePlugins();
      }
    }
  });

  function abstract() {
    throw new Error('This method is not implemented: either no adapter can be found or an incomplete integration was provided.');
  }

  var DateAdapter = /*#__PURE__*/function () {
    function DateAdapter(options) {
      _classCallCheck(this, DateAdapter);

      this.options = options || {};
    }

    _createClass(DateAdapter, [{
      key: "formats",
      value: function formats() {
        return abstract();
      }
    }, {
      key: "parse",
      value: function parse(value, format) {
        return abstract();
      }
    }, {
      key: "format",
      value: function format(timestamp, _format) {
        return abstract();
      }
    }, {
      key: "add",
      value: function add(timestamp, amount, unit) {
        return abstract();
      }
    }, {
      key: "diff",
      value: function diff(a, b, unit) {
        return abstract();
      }
    }, {
      key: "startOf",
      value: function startOf(timestamp, unit, weekday) {
        return abstract();
      }
    }, {
      key: "endOf",
      value: function endOf(timestamp, unit) {
        return abstract();
      }
    }]);

    return DateAdapter;
  }();

  DateAdapter.override = function (members) {
    Object.assign(DateAdapter.prototype, members);
  };

  var _adapters = {
    _date: DateAdapter
  };

  function getAllScaleValues(scale) {
    if (!scale._cache.$bar) {
      var metas = scale.getMatchingVisibleMetas('bar');
      var values = [];

      for (var i = 0, ilen = metas.length; i < ilen; i++) {
        values = values.concat(metas[i].controller.getAllParsedValues(scale));
      }

      scale._cache.$bar = _arrayUnique(values.sort(function (a, b) {
        return a - b;
      }));
    }

    return scale._cache.$bar;
  }

  function computeMinSampleSize(scale) {
    var values = getAllScaleValues(scale);
    var min = scale._length;
    var i, ilen, curr, prev;

    var updateMinAndPrev = function updateMinAndPrev() {
      min = Math.min(min, i && Math.abs(curr - prev) || min);
      prev = curr;
    };

    for (i = 0, ilen = values.length; i < ilen; ++i) {
      curr = scale.getPixelForValue(values[i]);
      updateMinAndPrev();
    }

    for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
      curr = scale.getPixelForTick(i);
      updateMinAndPrev();
    }

    return min;
  }

  function computeFitCategoryTraits(index, ruler, options, stackCount) {
    var thickness = options.barThickness;
    var size, ratio;

    if (isNullOrUndef(thickness)) {
      size = ruler.min * options.categoryPercentage;
      ratio = options.barPercentage;
    } else {
      size = thickness * stackCount;
      ratio = 1;
    }

    return {
      chunk: size / stackCount,
      ratio: ratio,
      start: ruler.pixels[index] - size / 2
    };
  }

  function computeFlexCategoryTraits(index, ruler, options, stackCount) {
    var pixels = ruler.pixels;
    var curr = pixels[index];
    var prev = index > 0 ? pixels[index - 1] : null;
    var next = index < pixels.length - 1 ? pixels[index + 1] : null;
    var percent = options.categoryPercentage;

    if (prev === null) {
      prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    }

    if (next === null) {
      next = curr + curr - prev;
    }

    var start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    var size = Math.abs(next - prev) / 2 * percent;
    return {
      chunk: size / stackCount,
      ratio: options.barPercentage,
      start: start
    };
  }

  function parseFloatBar(entry, item, vScale, i) {
    var startValue = vScale.parse(entry[0], i);
    var endValue = vScale.parse(entry[1], i);
    var min = Math.min(startValue, endValue);
    var max = Math.max(startValue, endValue);
    var barStart = min;
    var barEnd = max;

    if (Math.abs(min) > Math.abs(max)) {
      barStart = max;
      barEnd = min;
    }

    item[vScale.axis] = barEnd;
    item._custom = {
      barStart: barStart,
      barEnd: barEnd,
      start: startValue,
      end: endValue,
      min: min,
      max: max
    };
  }

  function parseValue(entry, item, vScale, i) {
    if (isArray(entry)) {
      parseFloatBar(entry, item, vScale, i);
    } else {
      item[vScale.axis] = vScale.parse(entry, i);
    }

    return item;
  }

  function parseArrayOrPrimitive(meta, data, start, count) {
    var iScale = meta.iScale;
    var vScale = meta.vScale;
    var labels = iScale.getLabels();
    var singleScale = iScale === vScale;
    var parsed = [];
    var i, ilen, item, entry;

    for (i = start, ilen = start + count; i < ilen; ++i) {
      entry = data[i];
      item = {};
      item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
      parsed.push(parseValue(entry, item, vScale, i));
    }

    return parsed;
  }

  function isFloatBar(custom) {
    return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
  }

  var BarController = /*#__PURE__*/function (_DatasetController) {
    _inherits(BarController, _DatasetController);

    var _super4 = _createSuper(BarController);

    function BarController() {
      _classCallCheck(this, BarController);

      return _super4.apply(this, arguments);
    }

    _createClass(BarController, [{
      key: "parsePrimitiveData",
      value: function parsePrimitiveData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
      }
    }, {
      key: "parseArrayData",
      value: function parseArrayData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
      }
    }, {
      key: "parseObjectData",
      value: function parseObjectData(meta, data, start, count) {
        var iScale = meta.iScale,
            vScale = meta.vScale;
        var _this$_parsing2 = this._parsing,
            _this$_parsing2$xAxis = _this$_parsing2.xAxisKey,
            xAxisKey = _this$_parsing2$xAxis === void 0 ? 'x' : _this$_parsing2$xAxis,
            _this$_parsing2$yAxis = _this$_parsing2.yAxisKey,
            yAxisKey = _this$_parsing2$yAxis === void 0 ? 'y' : _this$_parsing2$yAxis;
        var iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
        var vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
        var parsed = [];
        var i, ilen, item, obj;

        for (i = start, ilen = start + count; i < ilen; ++i) {
          obj = data[i];
          item = {};
          item[iScale.axis] = iScale.parse(resolveObjectKey(obj, iAxisKey), i);
          parsed.push(parseValue(resolveObjectKey(obj, vAxisKey), item, vScale, i));
        }

        return parsed;
      }
    }, {
      key: "updateRangeFromParsed",
      value: function updateRangeFromParsed(range, scale, parsed, stack) {
        _get2(_getPrototypeOf(BarController.prototype), "updateRangeFromParsed", this).call(this, range, scale, parsed, stack);

        var custom = parsed._custom;

        if (custom && scale === this._cachedMeta.vScale) {
          range.min = Math.min(range.min, custom.min);
          range.max = Math.max(range.max, custom.max);
        }
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(index) {
        var me = this;
        var meta = me._cachedMeta;
        var iScale = meta.iScale,
            vScale = meta.vScale;
        var parsed = me.getParsed(index);
        var custom = parsed._custom;
        var value = isFloatBar(custom) ? '[' + custom.start + ', ' + custom.end + ']' : '' + vScale.getLabelForValue(parsed[vScale.axis]);
        return {
          label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
          value: value
        };
      }
    }, {
      key: "initialize",
      value: function initialize() {
        var me = this;
        me.enableOptionSharing = true;

        _get2(_getPrototypeOf(BarController.prototype), "initialize", this).call(this);

        var meta = me._cachedMeta;
        meta.stack = me.getDataset().stack;
      }
    }, {
      key: "update",
      value: function update(mode) {
        var me = this;
        var meta = me._cachedMeta;
        me.updateElements(meta.data, 0, meta.data.length, mode);
      }
    }, {
      key: "updateElements",
      value: function updateElements(bars, start, count, mode) {
        var me = this;
        var reset = mode === 'reset';
        var vScale = me._cachedMeta.vScale;
        var base = vScale.getBasePixel();
        var horizontal = vScale.isHorizontal();

        var ruler = me._getRuler();

        var firstOpts = me.resolveDataElementOptions(start, mode);
        var sharedOptions = me.getSharedOptions(firstOpts);
        var includeOptions = me.includeOptions(mode, sharedOptions);
        me.updateSharedOptions(sharedOptions, mode, firstOpts);

        for (var i = start; i < start + count; i++) {
          var vpixels = reset ? {
            base: base,
            head: base
          } : me._calculateBarValuePixels(i);

          var ipixels = me._calculateBarIndexPixels(i, ruler);

          var properties = {
            horizontal: horizontal,
            base: vpixels.base,
            x: horizontal ? vpixels.head : ipixels.center,
            y: horizontal ? ipixels.center : vpixels.head,
            height: horizontal ? ipixels.size : undefined,
            width: horizontal ? undefined : ipixels.size
          };

          if (includeOptions) {
            properties.options = sharedOptions || me.resolveDataElementOptions(i, mode);
          }

          me.updateElement(bars[i], i, properties, mode);
        }
      }
    }, {
      key: "_getStacks",
      value: function _getStacks(last, dataIndex) {
        var me = this;
        var meta = me._cachedMeta;
        var iScale = meta.iScale;
        var metasets = iScale.getMatchingVisibleMetas(me._type);
        var stacked = iScale.options.stacked;
        var ilen = metasets.length;
        var stacks = [];
        var i, item;

        for (i = 0; i < ilen; ++i) {
          item = metasets[i];

          if (typeof dataIndex !== 'undefined') {
            var val = item.controller.getParsed(dataIndex)[item.controller._cachedMeta.vScale.axis];

            if (isNullOrUndef(val) || isNaN(val)) {
              continue;
            }
          }

          if (stacked === false || stacks.indexOf(item.stack) === -1 || stacked === undefined && item.stack === undefined) {
            stacks.push(item.stack);
          }

          if (item.index === last) {
            break;
          }
        }

        if (!stacks.length) {
          stacks.push(undefined);
        }

        return stacks;
      }
    }, {
      key: "_getStackCount",
      value: function _getStackCount(index) {
        return this._getStacks(undefined, index).length;
      }
    }, {
      key: "_getStackIndex",
      value: function _getStackIndex(datasetIndex, name) {
        var stacks = this._getStacks(datasetIndex);

        var index = name !== undefined ? stacks.indexOf(name) : -1;
        return index === -1 ? stacks.length - 1 : index;
      }
    }, {
      key: "_getRuler",
      value: function _getRuler() {
        var me = this;
        var opts = me.options;
        var meta = me._cachedMeta;
        var iScale = meta.iScale;
        var pixels = [];
        var i, ilen;

        for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
          pixels.push(iScale.getPixelForValue(me.getParsed(i)[iScale.axis], i));
        }

        var barThickness = opts.barThickness;
        var min = barThickness || computeMinSampleSize(iScale);
        return {
          min: min,
          pixels: pixels,
          start: iScale._startPixel,
          end: iScale._endPixel,
          stackCount: me._getStackCount(),
          scale: iScale,
          grouped: opts.grouped,
          ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
        };
      }
    }, {
      key: "_calculateBarValuePixels",
      value: function _calculateBarValuePixels(index) {
        var me = this;
        var _me$_cachedMeta = me._cachedMeta,
            vScale = _me$_cachedMeta.vScale,
            _stacked = _me$_cachedMeta._stacked;
        var _me$options5 = me.options,
            baseValue = _me$options5.base,
            minBarLength = _me$options5.minBarLength;
        var parsed = me.getParsed(index);
        var custom = parsed._custom;
        var floating = isFloatBar(custom);
        var value = parsed[vScale.axis];
        var start = 0;
        var length = _stacked ? me.applyStack(vScale, parsed, _stacked) : value;
        var head, size;

        if (length !== value) {
          start = length - value;
          length = value;
        }

        if (floating) {
          value = custom.barStart;
          length = custom.barEnd - custom.barStart;

          if (value !== 0 && sign(value) !== sign(custom.barEnd)) {
            start = 0;
          }

          start += value;
        }

        var startValue = !isNullOrUndef(baseValue) && !floating ? baseValue : start;
        var base = vScale.getPixelForValue(startValue);

        if (this.chart.getDataVisibility(index)) {
          head = vScale.getPixelForValue(start + length);
        } else {
          head = base;
        }

        size = head - base;

        if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
          size = size < 0 ? -minBarLength : minBarLength;

          if (value === 0) {
            base -= size / 2;
          }

          head = base + size;
        }

        var actualBase = baseValue || 0;

        if (base === vScale.getPixelForValue(actualBase)) {
          var halfGrid = vScale.getLineWidthForValue(actualBase) / 2;

          if (size > 0) {
            base += halfGrid;
            size -= halfGrid;
          } else if (size < 0) {
            base -= halfGrid;
            size += halfGrid;
          }
        }

        return {
          size: size,
          base: base,
          head: head,
          center: head + size / 2
        };
      }
    }, {
      key: "_calculateBarIndexPixels",
      value: function _calculateBarIndexPixels(index, ruler) {
        var me = this;
        var scale = ruler.scale;
        var options = me.options;
        var maxBarThickness = valueOrDefault(options.maxBarThickness, Infinity);
        var center, size;

        if (ruler.grouped) {
          var stackCount = options.skipNull ? me._getStackCount(index) : ruler.stackCount;
          var range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);

          var stackIndex = me._getStackIndex(me.index, me._cachedMeta.stack);

          center = range.start + range.chunk * stackIndex + range.chunk / 2;
          size = Math.min(maxBarThickness, range.chunk * range.ratio);
        } else {
          center = scale.getPixelForValue(me.getParsed(index)[scale.axis], index);
          size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
        }

        return {
          base: center - size / 2,
          head: center + size / 2,
          center: center,
          size: size
        };
      }
    }, {
      key: "draw",
      value: function draw() {
        var me = this;
        var chart = me.chart;
        var meta = me._cachedMeta;
        var vScale = meta.vScale;
        var rects = meta.data;
        var ilen = rects.length;
        var i = 0;
        clipArea(chart.ctx, chart.chartArea);

        for (; i < ilen; ++i) {
          if (me.getParsed(i)[vScale.axis] !== null) {
            rects[i].draw(me._ctx);
          }
        }

        unclipArea(chart.ctx);
      }
    }]);

    return BarController;
  }(DatasetController);

  BarController.id = 'bar';
  BarController.defaults = {
    datasetElementType: false,
    dataElementType: 'bar',
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: true,
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'base', 'width', 'height']
      }
    }
  };
  BarController.overrides = {
    interaction: {
      mode: 'index'
    },
    scales: {
      _index_: {
        type: 'category',
        offset: true,
        grid: {
          offset: true
        }
      },
      _value_: {
        type: 'linear',
        beginAtZero: true
      }
    }
  };

  var BubbleController = /*#__PURE__*/function (_DatasetController2) {
    _inherits(BubbleController, _DatasetController2);

    var _super5 = _createSuper(BubbleController);

    function BubbleController() {
      _classCallCheck(this, BubbleController);

      return _super5.apply(this, arguments);
    }

    _createClass(BubbleController, [{
      key: "initialize",
      value: function initialize() {
        this.enableOptionSharing = true;

        _get2(_getPrototypeOf(BubbleController.prototype), "initialize", this).call(this);
      }
    }, {
      key: "parseObjectData",
      value: function parseObjectData(meta, data, start, count) {
        var xScale = meta.xScale,
            yScale = meta.yScale;
        var _this$_parsing3 = this._parsing,
            _this$_parsing3$xAxis = _this$_parsing3.xAxisKey,
            xAxisKey = _this$_parsing3$xAxis === void 0 ? 'x' : _this$_parsing3$xAxis,
            _this$_parsing3$yAxis = _this$_parsing3.yAxisKey,
            yAxisKey = _this$_parsing3$yAxis === void 0 ? 'y' : _this$_parsing3$yAxis;
        var parsed = [];
        var i, ilen, item;

        for (i = start, ilen = start + count; i < ilen; ++i) {
          item = data[i];
          parsed.push({
            x: xScale.parse(resolveObjectKey(item, xAxisKey), i),
            y: yScale.parse(resolveObjectKey(item, yAxisKey), i),
            _custom: item && item.r && +item.r
          });
        }

        return parsed;
      }
    }, {
      key: "getMaxOverflow",
      value: function getMaxOverflow() {
        var _this$_cachedMeta = this._cachedMeta,
            data = _this$_cachedMeta.data,
            _parsed = _this$_cachedMeta._parsed;
        var max = 0;

        for (var i = data.length - 1; i >= 0; --i) {
          max = Math.max(max, data[i].size() / 2, _parsed[i]._custom);
        }

        return max > 0 && max;
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(index) {
        var me = this;
        var meta = me._cachedMeta;
        var xScale = meta.xScale,
            yScale = meta.yScale;
        var parsed = me.getParsed(index);
        var x = xScale.getLabelForValue(parsed.x);
        var y = yScale.getLabelForValue(parsed.y);
        var r = parsed._custom;
        return {
          label: meta.label,
          value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
        };
      }
    }, {
      key: "update",
      value: function update(mode) {
        var me = this;
        var points = me._cachedMeta.data;
        me.updateElements(points, 0, points.length, mode);
      }
    }, {
      key: "updateElements",
      value: function updateElements(points, start, count, mode) {
        var me = this;
        var reset = mode === 'reset';
        var _me$_cachedMeta2 = me._cachedMeta,
            xScale = _me$_cachedMeta2.xScale,
            yScale = _me$_cachedMeta2.yScale;
        var firstOpts = me.resolveDataElementOptions(start, mode);
        var sharedOptions = me.getSharedOptions(firstOpts);
        var includeOptions = me.includeOptions(mode, sharedOptions);

        for (var i = start; i < start + count; i++) {
          var point = points[i];
          var parsed = !reset && me.getParsed(i);
          var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(parsed.x);
          var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(parsed.y);
          var properties = {
            x: x,
            y: y,
            skip: isNaN(x) || isNaN(y)
          };

          if (includeOptions) {
            properties.options = me.resolveDataElementOptions(i, mode);

            if (reset) {
              properties.options.radius = 0;
            }
          }

          me.updateElement(point, i, properties, mode);
        }

        me.updateSharedOptions(sharedOptions, mode, firstOpts);
      }
    }, {
      key: "resolveDataElementOptions",
      value: function resolveDataElementOptions(index, mode) {
        var parsed = this.getParsed(index);

        var values = _get2(_getPrototypeOf(BubbleController.prototype), "resolveDataElementOptions", this).call(this, index, mode);

        if (values.$shared) {
          values = Object.assign({}, values, {
            $shared: false
          });
        }

        var radius = values.radius;

        if (mode !== 'active') {
          values.radius = 0;
        }

        values.radius += valueOrDefault(parsed && parsed._custom, radius);
        return values;
      }
    }]);

    return BubbleController;
  }(DatasetController);

  BubbleController.id = 'bubble';
  BubbleController.defaults = {
    datasetElementType: false,
    dataElementType: 'point',
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'borderWidth', 'radius']
      }
    }
  };
  BubbleController.overrides = {
    scales: {
      x: {
        type: 'linear'
      },
      y: {
        type: 'linear'
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function title() {
            return '';
          }
        }
      }
    }
  };

  function getRatioAndOffset(rotation, circumference, cutout) {
    var ratioX = 1;
    var ratioY = 1;
    var offsetX = 0;
    var offsetY = 0;

    if (circumference < TAU) {
      var startAngle = rotation;
      var endAngle = startAngle + circumference;
      var startX = Math.cos(startAngle);
      var startY = Math.sin(startAngle);
      var endX = Math.cos(endAngle);
      var endY = Math.sin(endAngle);

      var calcMax = function calcMax(angle, a, b) {
        return _angleBetween(angle, startAngle, endAngle) ? 1 : Math.max(a, a * cutout, b, b * cutout);
      };

      var calcMin = function calcMin(angle, a, b) {
        return _angleBetween(angle, startAngle, endAngle) ? -1 : Math.min(a, a * cutout, b, b * cutout);
      };

      var maxX = calcMax(0, startX, endX);
      var maxY = calcMax(HALF_PI, startY, endY);
      var minX = calcMin(PI, startX, endX);
      var minY = calcMin(PI + HALF_PI, startY, endY);
      ratioX = (maxX - minX) / 2;
      ratioY = (maxY - minY) / 2;
      offsetX = -(maxX + minX) / 2;
      offsetY = -(maxY + minY) / 2;
    }

    return {
      ratioX: ratioX,
      ratioY: ratioY,
      offsetX: offsetX,
      offsetY: offsetY
    };
  }

  var DoughnutController = /*#__PURE__*/function (_DatasetController3) {
    _inherits(DoughnutController, _DatasetController3);

    var _super6 = _createSuper(DoughnutController);

    function DoughnutController(chart, datasetIndex) {
      var _this3;

      _classCallCheck(this, DoughnutController);

      _this3 = _super6.call(this, chart, datasetIndex);
      _this3.enableOptionSharing = true;
      _this3.innerRadius = undefined;
      _this3.outerRadius = undefined;
      _this3.offsetX = undefined;
      _this3.offsetY = undefined;
      return _this3;
    }

    _createClass(DoughnutController, [{
      key: "linkScales",
      value: function linkScales() {}
    }, {
      key: "parse",
      value: function parse(start, count) {
        var data = this.getDataset().data;
        var meta = this._cachedMeta;
        var i, ilen;

        for (i = start, ilen = start + count; i < ilen; ++i) {
          meta._parsed[i] = +data[i];
        }
      }
    }, {
      key: "_getRotation",
      value: function _getRotation() {
        return toRadians(this.options.rotation - 90);
      }
    }, {
      key: "_getCircumference",
      value: function _getCircumference() {
        return toRadians(this.options.circumference);
      }
    }, {
      key: "_getRotationExtents",
      value: function _getRotationExtents() {
        var min = TAU;
        var max = -TAU;
        var me = this;

        for (var i = 0; i < me.chart.data.datasets.length; ++i) {
          if (me.chart.isDatasetVisible(i)) {
            var controller = me.chart.getDatasetMeta(i).controller;

            var rotation = controller._getRotation();

            var circumference = controller._getCircumference();

            min = Math.min(min, rotation);
            max = Math.max(max, rotation + circumference);
          }
        }

        return {
          rotation: min,
          circumference: max - min
        };
      }
    }, {
      key: "update",
      value: function update(mode) {
        var me = this;
        var chart = me.chart;
        var chartArea = chart.chartArea;
        var meta = me._cachedMeta;
        var arcs = meta.data;
        var spacing = me.getMaxBorderWidth() + me.getMaxOffset(arcs);
        var maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
        var cutout = Math.min(toPercentage(me.options.cutout, maxSize), 1);

        var chartWeight = me._getRingWeight(me.index);

        var _me$_getRotationExten = me._getRotationExtents(),
            circumference = _me$_getRotationExten.circumference,
            rotation = _me$_getRotationExten.rotation;

        var _getRatioAndOffset = getRatioAndOffset(rotation, circumference, cutout),
            ratioX = _getRatioAndOffset.ratioX,
            ratioY = _getRatioAndOffset.ratioY,
            offsetX = _getRatioAndOffset.offsetX,
            offsetY = _getRatioAndOffset.offsetY;

        var maxWidth = (chartArea.width - spacing) / ratioX;
        var maxHeight = (chartArea.height - spacing) / ratioY;
        var maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
        var outerRadius = toDimension(me.options.radius, maxRadius);
        var innerRadius = Math.max(outerRadius * cutout, 0);

        var radiusLength = (outerRadius - innerRadius) / me._getVisibleDatasetWeightTotal();

        me.offsetX = offsetX * outerRadius;
        me.offsetY = offsetY * outerRadius;
        meta.total = me.calculateTotal();
        me.outerRadius = outerRadius - radiusLength * me._getRingWeightOffset(me.index);
        me.innerRadius = Math.max(me.outerRadius - radiusLength * chartWeight, 0);
        me.updateElements(arcs, 0, arcs.length, mode);
      }
    }, {
      key: "_circumference",
      value: function _circumference(i, reset) {
        var me = this;
        var opts = me.options;
        var meta = me._cachedMeta;

        var circumference = me._getCircumference();

        if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null) {
          return 0;
        }

        return me.calculateCircumference(meta._parsed[i] * circumference / TAU);
      }
    }, {
      key: "updateElements",
      value: function updateElements(arcs, start, count, mode) {
        var me = this;
        var reset = mode === 'reset';
        var chart = me.chart;
        var chartArea = chart.chartArea;
        var opts = chart.options;
        var animationOpts = opts.animation;
        var centerX = (chartArea.left + chartArea.right) / 2;
        var centerY = (chartArea.top + chartArea.bottom) / 2;
        var animateScale = reset && animationOpts.animateScale;
        var innerRadius = animateScale ? 0 : me.innerRadius;
        var outerRadius = animateScale ? 0 : me.outerRadius;
        var firstOpts = me.resolveDataElementOptions(start, mode);
        var sharedOptions = me.getSharedOptions(firstOpts);
        var includeOptions = me.includeOptions(mode, sharedOptions);

        var startAngle = me._getRotation();

        var i;

        for (i = 0; i < start; ++i) {
          startAngle += me._circumference(i, reset);
        }

        for (i = start; i < start + count; ++i) {
          var circumference = me._circumference(i, reset);

          var arc = arcs[i];
          var properties = {
            x: centerX + me.offsetX,
            y: centerY + me.offsetY,
            startAngle: startAngle,
            endAngle: startAngle + circumference,
            circumference: circumference,
            outerRadius: outerRadius,
            innerRadius: innerRadius
          };

          if (includeOptions) {
            properties.options = sharedOptions || me.resolveDataElementOptions(i, mode);
          }

          startAngle += circumference;
          me.updateElement(arc, i, properties, mode);
        }

        me.updateSharedOptions(sharedOptions, mode, firstOpts);
      }
    }, {
      key: "calculateTotal",
      value: function calculateTotal() {
        var meta = this._cachedMeta;
        var metaData = meta.data;
        var total = 0;
        var i;

        for (i = 0; i < metaData.length; i++) {
          var value = meta._parsed[i];

          if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i)) {
            total += Math.abs(value);
          }
        }

        return total;
      }
    }, {
      key: "calculateCircumference",
      value: function calculateCircumference(value) {
        var total = this._cachedMeta.total;

        if (total > 0 && !isNaN(value)) {
          return TAU * (Math.abs(value) / total);
        }

        return 0;
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(index) {
        var me = this;
        var meta = me._cachedMeta;
        var chart = me.chart;
        var labels = chart.data.labels || [];
        var value = formatNumber(meta._parsed[index], chart.options.locale);
        return {
          label: labels[index] || '',
          value: value
        };
      }
    }, {
      key: "getMaxBorderWidth",
      value: function getMaxBorderWidth(arcs) {
        var me = this;
        var max = 0;
        var chart = me.chart;
        var i, ilen, meta, controller, options;

        if (!arcs) {
          for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
            if (chart.isDatasetVisible(i)) {
              meta = chart.getDatasetMeta(i);
              arcs = meta.data;
              controller = meta.controller;

              if (controller !== me) {
                controller.configure();
              }

              break;
            }
          }
        }

        if (!arcs) {
          return 0;
        }

        for (i = 0, ilen = arcs.length; i < ilen; ++i) {
          options = controller.resolveDataElementOptions(i);

          if (options.borderAlign !== 'inner') {
            max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
          }
        }

        return max;
      }
    }, {
      key: "getMaxOffset",
      value: function getMaxOffset(arcs) {
        var max = 0;

        for (var i = 0, ilen = arcs.length; i < ilen; ++i) {
          var options = this.resolveDataElementOptions(i);
          max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
        }

        return max;
      }
    }, {
      key: "_getRingWeightOffset",
      value: function _getRingWeightOffset(datasetIndex) {
        var ringWeightOffset = 0;

        for (var i = 0; i < datasetIndex; ++i) {
          if (this.chart.isDatasetVisible(i)) {
            ringWeightOffset += this._getRingWeight(i);
          }
        }

        return ringWeightOffset;
      }
    }, {
      key: "_getRingWeight",
      value: function _getRingWeight(datasetIndex) {
        return Math.max(valueOrDefault(this.chart.data.datasets[datasetIndex].weight, 1), 0);
      }
    }, {
      key: "_getVisibleDatasetWeightTotal",
      value: function _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
      }
    }]);

    return DoughnutController;
  }(DatasetController);

  DoughnutController.id = 'doughnut';
  DoughnutController.defaults = {
    datasetElementType: false,
    dataElementType: 'arc',
    animation: {
      animateRotate: true,
      animateScale: false
    },
    animations: {
      numbers: {
        type: 'number',
        properties: ['circumference', 'endAngle', 'innerRadius', 'outerRadius', 'startAngle', 'x', 'y', 'offset', 'borderWidth']
      }
    },
    cutout: '50%',
    rotation: 0,
    circumference: 360,
    radius: '100%',
    indexAxis: 'r'
  };
  DoughnutController.overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels: function generateLabels(chart) {
            var data = chart.data;

            if (data.labels.length && data.datasets.length) {
              return data.labels.map(function (label, i) {
                var meta = chart.getDatasetMeta(0);
                var style = meta.controller.getStyle(i);
                return {
                  text: label,
                  fillStyle: style.backgroundColor,
                  strokeStyle: style.borderColor,
                  lineWidth: style.borderWidth,
                  hidden: !chart.getDataVisibility(i),
                  index: i
                };
              });
            }

            return [];
          }
        },
        onClick: function onClick(e, legendItem, legend) {
          legend.chart.toggleDataVisibility(legendItem.index);
          legend.chart.update();
        }
      },
      tooltip: {
        callbacks: {
          title: function title() {
            return '';
          },
          label: function label(tooltipItem) {
            var dataLabel = tooltipItem.label;
            var value = ': ' + tooltipItem.formattedValue;

            if (isArray(dataLabel)) {
              dataLabel = dataLabel.slice();
              dataLabel[0] += value;
            } else {
              dataLabel += value;
            }

            return dataLabel;
          }
        }
      }
    }
  };

  var LineController = /*#__PURE__*/function (_DatasetController4) {
    _inherits(LineController, _DatasetController4);

    var _super7 = _createSuper(LineController);

    function LineController() {
      _classCallCheck(this, LineController);

      return _super7.apply(this, arguments);
    }

    _createClass(LineController, [{
      key: "initialize",
      value: function initialize() {
        this.enableOptionSharing = true;

        _get2(_getPrototypeOf(LineController.prototype), "initialize", this).call(this);
      }
    }, {
      key: "update",
      value: function update(mode) {
        var me = this;
        var meta = me._cachedMeta;
        var line = meta.dataset,
            _meta$data = meta.data,
            points = _meta$data === void 0 ? [] : _meta$data,
            _dataset = meta._dataset;
        var animationsDisabled = me.chart._animationsDisabled;

        var _getStartAndCountOfVi = getStartAndCountOfVisiblePoints(meta, points, animationsDisabled),
            start = _getStartAndCountOfVi.start,
            count = _getStartAndCountOfVi.count;

        me._drawStart = start;
        me._drawCount = count;

        if (scaleRangesChanged(meta)) {
          start = 0;
          count = points.length;
        }

        line._decimated = !!_dataset._decimated;
        line.points = points;

        if (mode !== 'resize') {
          var options = me.resolveDatasetElementOptions(mode);

          if (!me.options.showLine) {
            options.borderWidth = 0;
          }

          me.updateElement(line, undefined, {
            animated: !animationsDisabled,
            options: options
          }, mode);
        }

        me.updateElements(points, start, count, mode);
      }
    }, {
      key: "updateElements",
      value: function updateElements(points, start, count, mode) {
        var me = this;
        var reset = mode === 'reset';
        var _me$_cachedMeta3 = me._cachedMeta,
            xScale = _me$_cachedMeta3.xScale,
            yScale = _me$_cachedMeta3.yScale,
            _stacked = _me$_cachedMeta3._stacked;
        var firstOpts = me.resolveDataElementOptions(start, mode);
        var sharedOptions = me.getSharedOptions(firstOpts);
        var includeOptions = me.includeOptions(mode, sharedOptions);
        var spanGaps = me.options.spanGaps;
        var maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        var directUpdate = me.chart._animationsDisabled || reset || mode === 'none';
        var prevParsed = start > 0 && me.getParsed(start - 1);

        for (var i = start; i < start + count; ++i) {
          var point = points[i];
          var parsed = me.getParsed(i);
          var properties = directUpdate ? point : {};
          var x = properties.x = xScale.getPixelForValue(parsed.x, i);
          var y = properties.y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(_stacked ? me.applyStack(yScale, parsed, _stacked) : parsed.y, i);
          properties.skip = isNaN(x) || isNaN(y);
          properties.stop = i > 0 && parsed.x - prevParsed.x > maxGapLength;

          if (includeOptions) {
            properties.options = sharedOptions || me.resolveDataElementOptions(i, mode);
          }

          if (!directUpdate) {
            me.updateElement(point, i, properties, mode);
          }

          prevParsed = parsed;
        }

        me.updateSharedOptions(sharedOptions, mode, firstOpts);
      }
    }, {
      key: "getMaxOverflow",
      value: function getMaxOverflow() {
        var me = this;
        var meta = me._cachedMeta;
        var dataset = meta.dataset;
        var border = dataset.options && dataset.options.borderWidth || 0;
        var data = meta.data || [];

        if (!data.length) {
          return border;
        }

        var firstPoint = data[0].size(me.resolveDataElementOptions(0));
        var lastPoint = data[data.length - 1].size(me.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
      }
    }, {
      key: "draw",
      value: function draw() {
        this._cachedMeta.dataset.updateControlPoints(this.chart.chartArea);

        _get2(_getPrototypeOf(LineController.prototype), "draw", this).call(this);
      }
    }]);

    return LineController;
  }(DatasetController);

  LineController.id = 'line';
  LineController.defaults = {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: true,
    spanGaps: false
  };
  LineController.overrides = {
    scales: {
      _index_: {
        type: 'category'
      },
      _value_: {
        type: 'linear'
      }
    }
  };

  function getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
    var pointCount = points.length;
    var start = 0;
    var count = pointCount;

    if (meta._sorted) {
      var iScale = meta.iScale,
          _parsed = meta._parsed;
      var axis = iScale.axis;

      var _iScale$getUserBounds = iScale.getUserBounds(),
          min = _iScale$getUserBounds.min,
          max = _iScale$getUserBounds.max,
          minDefined = _iScale$getUserBounds.minDefined,
          maxDefined = _iScale$getUserBounds.maxDefined;

      if (minDefined) {
        start = _limitValue(Math.min(_lookupByKey(_parsed, iScale.axis, min).lo, animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
      }

      if (maxDefined) {
        count = _limitValue(Math.max(_lookupByKey(_parsed, iScale.axis, max).hi + 1, animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max)).hi + 1), start, pointCount) - start;
      } else {
        count = pointCount - start;
      }
    }

    return {
      start: start,
      count: count
    };
  }

  function scaleRangesChanged(meta) {
    var xScale = meta.xScale,
        yScale = meta.yScale,
        _scaleRanges = meta._scaleRanges;
    var newRanges = {
      xmin: xScale.min,
      xmax: xScale.max,
      ymin: yScale.min,
      ymax: yScale.max
    };

    if (!_scaleRanges) {
      meta._scaleRanges = newRanges;
      return true;
    }

    var changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
    Object.assign(_scaleRanges, newRanges);
    return changed;
  }

  var PolarAreaController = /*#__PURE__*/function (_DatasetController5) {
    _inherits(PolarAreaController, _DatasetController5);

    var _super8 = _createSuper(PolarAreaController);

    function PolarAreaController(chart, datasetIndex) {
      var _this4;

      _classCallCheck(this, PolarAreaController);

      _this4 = _super8.call(this, chart, datasetIndex);
      _this4.innerRadius = undefined;
      _this4.outerRadius = undefined;
      return _this4;
    }

    _createClass(PolarAreaController, [{
      key: "update",
      value: function update(mode) {
        var arcs = this._cachedMeta.data;

        this._updateRadius();

        this.updateElements(arcs, 0, arcs.length, mode);
      }
    }, {
      key: "_updateRadius",
      value: function _updateRadius() {
        var me = this;
        var chart = me.chart;
        var chartArea = chart.chartArea;
        var opts = chart.options;
        var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        var outerRadius = Math.max(minSize / 2, 0);
        var innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
        var radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
        me.outerRadius = outerRadius - radiusLength * me.index;
        me.innerRadius = me.outerRadius - radiusLength;
      }
    }, {
      key: "updateElements",
      value: function updateElements(arcs, start, count, mode) {
        var me = this;
        var reset = mode === 'reset';
        var chart = me.chart;
        var dataset = me.getDataset();
        var opts = chart.options;
        var animationOpts = opts.animation;
        var scale = me._cachedMeta.rScale;
        var centerX = scale.xCenter;
        var centerY = scale.yCenter;
        var datasetStartAngle = scale.getIndexAngle(0) - 0.5 * PI;
        var angle = datasetStartAngle;
        var i;
        var defaultAngle = 360 / me.countVisibleElements();

        for (i = 0; i < start; ++i) {
          angle += me._computeAngle(i, mode, defaultAngle);
        }

        for (i = start; i < start + count; i++) {
          var arc = arcs[i];
          var startAngle = angle;

          var endAngle = angle + me._computeAngle(i, mode, defaultAngle);

          var outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(dataset.data[i]) : 0;
          angle = endAngle;

          if (reset) {
            if (animationOpts.animateScale) {
              outerRadius = 0;
            }

            if (animationOpts.animateRotate) {
              startAngle = endAngle = datasetStartAngle;
            }
          }

          var properties = {
            x: centerX,
            y: centerY,
            innerRadius: 0,
            outerRadius: outerRadius,
            startAngle: startAngle,
            endAngle: endAngle,
            options: me.resolveDataElementOptions(i, mode)
          };
          me.updateElement(arc, i, properties, mode);
        }
      }
    }, {
      key: "countVisibleElements",
      value: function countVisibleElements() {
        var _this5 = this;

        var dataset = this.getDataset();
        var meta = this._cachedMeta;
        var count = 0;
        meta.data.forEach(function (element, index) {
          if (!isNaN(dataset.data[index]) && _this5.chart.getDataVisibility(index)) {
            count++;
          }
        });
        return count;
      }
    }, {
      key: "_computeAngle",
      value: function _computeAngle(index, mode, defaultAngle) {
        return this.chart.getDataVisibility(index) ? toRadians(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
      }
    }]);

    return PolarAreaController;
  }(DatasetController);

  PolarAreaController.id = 'polarArea';
  PolarAreaController.defaults = {
    dataElementType: 'arc',
    animation: {
      animateRotate: true,
      animateScale: true
    },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
      }
    },
    indexAxis: 'r',
    startAngle: 0
  };
  PolarAreaController.overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels: function generateLabels(chart) {
            var data = chart.data;

            if (data.labels.length && data.datasets.length) {
              return data.labels.map(function (label, i) {
                var meta = chart.getDatasetMeta(0);
                var style = meta.controller.getStyle(i);
                return {
                  text: label,
                  fillStyle: style.backgroundColor,
                  strokeStyle: style.borderColor,
                  lineWidth: style.borderWidth,
                  hidden: !chart.getDataVisibility(i),
                  index: i
                };
              });
            }

            return [];
          }
        },
        onClick: function onClick(e, legendItem, legend) {
          legend.chart.toggleDataVisibility(legendItem.index);
          legend.chart.update();
        }
      },
      tooltip: {
        callbacks: {
          title: function title() {
            return '';
          },
          label: function label(context) {
            return context.chart.data.labels[context.dataIndex] + ': ' + context.formattedValue;
          }
        }
      }
    },
    scales: {
      r: {
        type: 'radialLinear',
        angleLines: {
          display: false
        },
        beginAtZero: true,
        grid: {
          circular: true
        },
        pointLabels: {
          display: false
        },
        startAngle: 0
      }
    }
  };

  var PieController = /*#__PURE__*/function (_DoughnutController) {
    _inherits(PieController, _DoughnutController);

    var _super9 = _createSuper(PieController);

    function PieController() {
      _classCallCheck(this, PieController);

      return _super9.apply(this, arguments);
    }

    return PieController;
  }(DoughnutController);

  PieController.id = 'pie';
  PieController.defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: '100%'
  };

  var RadarController = /*#__PURE__*/function (_DatasetController6) {
    _inherits(RadarController, _DatasetController6);

    var _super10 = _createSuper(RadarController);

    function RadarController() {
      _classCallCheck(this, RadarController);

      return _super10.apply(this, arguments);
    }

    _createClass(RadarController, [{
      key: "getLabelAndValue",
      value: function getLabelAndValue(index) {
        var me = this;
        var vScale = me._cachedMeta.vScale;
        var parsed = me.getParsed(index);
        return {
          label: vScale.getLabels()[index],
          value: '' + vScale.getLabelForValue(parsed[vScale.axis])
        };
      }
    }, {
      key: "update",
      value: function update(mode) {
        var me = this;
        var meta = me._cachedMeta;
        var line = meta.dataset;
        var points = meta.data || [];
        var labels = meta.iScale.getLabels();
        line.points = points;

        if (mode !== 'resize') {
          var options = me.resolveDatasetElementOptions(mode);

          if (!me.options.showLine) {
            options.borderWidth = 0;
          }

          var properties = {
            _loop: true,
            _fullLoop: labels.length === points.length,
            options: options
          };
          me.updateElement(line, undefined, properties, mode);
        }

        me.updateElements(points, 0, points.length, mode);
      }
    }, {
      key: "updateElements",
      value: function updateElements(points, start, count, mode) {
        var me = this;
        var dataset = me.getDataset();
        var scale = me._cachedMeta.rScale;
        var reset = mode === 'reset';

        for (var i = start; i < start + count; i++) {
          var point = points[i];
          var options = me.resolveDataElementOptions(i, mode);
          var pointPosition = scale.getPointPositionForValue(i, dataset.data[i]);
          var x = reset ? scale.xCenter : pointPosition.x;
          var y = reset ? scale.yCenter : pointPosition.y;
          var properties = {
            x: x,
            y: y,
            angle: pointPosition.angle,
            skip: isNaN(x) || isNaN(y),
            options: options
          };
          me.updateElement(point, i, properties, mode);
        }
      }
    }]);

    return RadarController;
  }(DatasetController);

  RadarController.id = 'radar';
  RadarController.defaults = {
    datasetElementType: 'line',
    dataElementType: 'point',
    indexAxis: 'r',
    showLine: true,
    elements: {
      line: {
        fill: 'start'
      }
    }
  };
  RadarController.overrides = {
    aspectRatio: 1,
    scales: {
      r: {
        type: 'radialLinear'
      }
    }
  };

  var ScatterController = /*#__PURE__*/function (_LineController) {
    _inherits(ScatterController, _LineController);

    var _super11 = _createSuper(ScatterController);

    function ScatterController() {
      _classCallCheck(this, ScatterController);

      return _super11.apply(this, arguments);
    }

    return ScatterController;
  }(LineController);

  ScatterController.id = 'scatter';
  ScatterController.defaults = {
    showLine: false,
    fill: false
  };
  ScatterController.overrides = {
    interaction: {
      mode: 'point'
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function title() {
            return '';
          },
          label: function label(item) {
            return '(' + item.label + ', ' + item.formattedValue + ')';
          }
        }
      }
    },
    scales: {
      x: {
        type: 'linear'
      },
      y: {
        type: 'linear'
      }
    }
  };
  var controllers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BarController: BarController,
    BubbleController: BubbleController,
    DoughnutController: DoughnutController,
    LineController: LineController,
    PolarAreaController: PolarAreaController,
    PieController: PieController,
    RadarController: RadarController,
    ScatterController: ScatterController
  });

  function clipArc(ctx, element) {
    var startAngle = element.startAngle,
        endAngle = element.endAngle,
        pixelMargin = element.pixelMargin,
        x = element.x,
        y = element.y,
        outerRadius = element.outerRadius,
        innerRadius = element.innerRadius;
    var angleMargin = pixelMargin / outerRadius;
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);

    if (innerRadius > pixelMargin) {
      angleMargin = pixelMargin / innerRadius;
      ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else {
      ctx.arc(x, y, pixelMargin, endAngle + HALF_PI, startAngle - HALF_PI);
    }

    ctx.closePath();
    ctx.clip();
  }

  function pathArc(ctx, element) {
    var x = element.x,
        y = element.y,
        startAngle = element.startAngle,
        endAngle = element.endAngle,
        pixelMargin = element.pixelMargin;
    var outerRadius = Math.max(element.outerRadius - pixelMargin, 0);
    var innerRadius = element.innerRadius + pixelMargin;
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle, endAngle);
    ctx.arc(x, y, innerRadius, endAngle, startAngle, true);
    ctx.closePath();
  }

  function drawArc(ctx, element) {
    if (element.fullCircles) {
      element.endAngle = element.startAngle + TAU;
      pathArc(ctx, element);

      for (var i = 0; i < element.fullCircles; ++i) {
        ctx.fill();
      }
    }

    if (!isNaN(element.circumference)) {
      element.endAngle = element.startAngle + element.circumference % TAU;
    }

    pathArc(ctx, element);
    ctx.fill();
  }

  function drawFullCircleBorders(ctx, element, inner) {
    var x = element.x,
        y = element.y,
        startAngle = element.startAngle,
        endAngle = element.endAngle,
        pixelMargin = element.pixelMargin;
    var outerRadius = Math.max(element.outerRadius - pixelMargin, 0);
    var innerRadius = element.innerRadius + pixelMargin;
    var i;

    if (inner) {
      element.endAngle = element.startAngle + TAU;
      clipArc(ctx, element);
      element.endAngle = endAngle;

      if (element.endAngle === element.startAngle) {
        element.endAngle += TAU;
        element.fullCircles--;
      }
    }

    ctx.beginPath();
    ctx.arc(x, y, innerRadius, startAngle + TAU, startAngle, true);

    for (i = 0; i < element.fullCircles; ++i) {
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle, startAngle + TAU);

    for (i = 0; i < element.fullCircles; ++i) {
      ctx.stroke();
    }
  }

  function drawBorder(ctx, element) {
    var x = element.x,
        y = element.y,
        startAngle = element.startAngle,
        endAngle = element.endAngle,
        pixelMargin = element.pixelMargin,
        options = element.options;
    var outerRadius = element.outerRadius;
    var innerRadius = element.innerRadius + pixelMargin;
    var inner = options.borderAlign === 'inner';

    if (!options.borderWidth) {
      return;
    }

    if (inner) {
      ctx.lineWidth = options.borderWidth * 2;
      ctx.lineJoin = 'round';
    } else {
      ctx.lineWidth = options.borderWidth;
      ctx.lineJoin = 'bevel';
    }

    if (element.fullCircles) {
      drawFullCircleBorders(ctx, element, inner);
    }

    if (inner) {
      clipArc(ctx, element);
    }

    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle, endAngle);
    ctx.arc(x, y, innerRadius, endAngle, startAngle, true);
    ctx.closePath();
    ctx.stroke();
  }

  var ArcElement = /*#__PURE__*/function (_Element2) {
    _inherits(ArcElement, _Element2);

    var _super12 = _createSuper(ArcElement);

    function ArcElement(cfg) {
      var _this6;

      _classCallCheck(this, ArcElement);

      _this6 = _super12.call(this);
      _this6.options = undefined;
      _this6.circumference = undefined;
      _this6.startAngle = undefined;
      _this6.endAngle = undefined;
      _this6.innerRadius = undefined;
      _this6.outerRadius = undefined;
      _this6.pixelMargin = 0;
      _this6.fullCircles = 0;

      if (cfg) {
        Object.assign(_assertThisInitialized(_this6), cfg);
      }

      return _this6;
    }

    _createClass(ArcElement, [{
      key: "inRange",
      value: function inRange(chartX, chartY, useFinalPosition) {
        var point = this.getProps(['x', 'y'], useFinalPosition);

        var _getAngleFromPoint = getAngleFromPoint(point, {
          x: chartX,
          y: chartY
        }),
            angle = _getAngleFromPoint.angle,
            distance = _getAngleFromPoint.distance;

        var _this$getProps2 = this.getProps(['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'], useFinalPosition),
            startAngle = _this$getProps2.startAngle,
            endAngle = _this$getProps2.endAngle,
            innerRadius = _this$getProps2.innerRadius,
            outerRadius = _this$getProps2.outerRadius,
            circumference = _this$getProps2.circumference;

        var betweenAngles = circumference >= TAU || _angleBetween(angle, startAngle, endAngle);

        var withinRadius = distance >= innerRadius && distance <= outerRadius;
        return betweenAngles && withinRadius;
      }
    }, {
      key: "getCenterPoint",
      value: function getCenterPoint(useFinalPosition) {
        var _this$getProps3 = this.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'], useFinalPosition),
            x = _this$getProps3.x,
            y = _this$getProps3.y,
            startAngle = _this$getProps3.startAngle,
            endAngle = _this$getProps3.endAngle,
            innerRadius = _this$getProps3.innerRadius,
            outerRadius = _this$getProps3.outerRadius;

        var halfAngle = (startAngle + endAngle) / 2;
        var halfRadius = (innerRadius + outerRadius) / 2;
        return {
          x: x + Math.cos(halfAngle) * halfRadius,
          y: y + Math.sin(halfAngle) * halfRadius
        };
      }
    }, {
      key: "tooltipPosition",
      value: function tooltipPosition(useFinalPosition) {
        return this.getCenterPoint(useFinalPosition);
      }
    }, {
      key: "draw",
      value: function draw(ctx) {
        var me = this;
        var options = me.options;
        var offset = options.offset || 0;
        me.pixelMargin = options.borderAlign === 'inner' ? 0.33 : 0;
        me.fullCircles = Math.floor(me.circumference / TAU);

        if (me.circumference === 0 || me.innerRadius < 0 || me.outerRadius < 0) {
          return;
        }

        ctx.save();

        if (offset && me.circumference < TAU) {
          var halfAngle = (me.startAngle + me.endAngle) / 2;
          ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
        }

        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        drawArc(ctx, me);
        drawBorder(ctx, me);
        ctx.restore();
      }
    }]);

    return ArcElement;
  }(Element);

  ArcElement.id = 'arc';
  ArcElement.defaults = {
    borderAlign: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    offset: 0,
    angle: undefined
  };
  ArcElement.defaultRoutes = {
    backgroundColor: 'backgroundColor'
  };

  function setStyle(ctx, vm) {
    ctx.lineCap = vm.borderCapStyle;
    ctx.setLineDash(vm.borderDash);
    ctx.lineDashOffset = vm.borderDashOffset;
    ctx.lineJoin = vm.borderJoinStyle;
    ctx.lineWidth = vm.borderWidth;
    ctx.strokeStyle = vm.borderColor;
  }

  function lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
  }

  function getLineMethod(options) {
    if (options.stepped) {
      return _steppedLineTo;
    }

    if (options.tension) {
      return _bezierCurveTo;
    }

    return lineTo;
  }

  function pathVars(points, segment, params) {
    params = params || {};
    var count = points.length;
    var start = Math.max(params.start || 0, segment.start);
    var end = Math.min(params.end || count - 1, segment.end);
    return {
      count: count,
      start: start,
      loop: segment.loop,
      ilen: end < start ? count + end - start : end - start
    };
  }

  function pathSegment(ctx, line, segment, params) {
    var points = line.points,
        options = line.options;

    var _pathVars = pathVars(points, segment, params),
        count = _pathVars.count,
        start = _pathVars.start,
        loop = _pathVars.loop,
        ilen = _pathVars.ilen;

    var lineMethod = getLineMethod(options);

    var _ref2 = params || {},
        _ref2$move = _ref2.move,
        move = _ref2$move === void 0 ? true : _ref2$move,
        reverse = _ref2.reverse;

    var i, point, prev;

    for (i = 0; i <= ilen; ++i) {
      point = points[(start + (reverse ? ilen - i : i)) % count];

      if (point.skip) {
        continue;
      } else if (move) {
        ctx.moveTo(point.x, point.y);
        move = false;
      } else {
        lineMethod(ctx, prev, point, reverse, options.stepped);
      }

      prev = point;
    }

    if (loop) {
      point = points[(start + (reverse ? ilen : 0)) % count];
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }

    return !!loop;
  }

  function fastPathSegment(ctx, line, segment, params) {
    var points = line.points;

    var _pathVars2 = pathVars(points, segment, params),
        count = _pathVars2.count,
        start = _pathVars2.start,
        ilen = _pathVars2.ilen;

    var _ref3 = params || {},
        _ref3$move = _ref3.move,
        move = _ref3$move === void 0 ? true : _ref3$move,
        reverse = _ref3.reverse;

    var avgX = 0;
    var countX = 0;
    var i, point, prevX, minY, maxY, lastY;

    var pointIndex = function pointIndex(index) {
      return (start + (reverse ? ilen - index : index)) % count;
    };

    var drawX = function drawX() {
      if (minY !== maxY) {
        ctx.lineTo(avgX, maxY);
        ctx.lineTo(avgX, minY);
        ctx.lineTo(avgX, lastY);
      }
    };

    if (move) {
      point = points[pointIndex(0)];
      ctx.moveTo(point.x, point.y);
    }

    for (i = 0; i <= ilen; ++i) {
      point = points[pointIndex(i)];

      if (point.skip) {
        continue;
      }

      var x = point.x;
      var y = point.y;
      var truncX = x | 0;

      if (truncX === prevX) {
        if (y < minY) {
          minY = y;
        } else if (y > maxY) {
          maxY = y;
        }

        avgX = (countX * avgX + x) / ++countX;
      } else {
        drawX();
        ctx.lineTo(x, y);
        prevX = truncX;
        countX = 0;
        minY = maxY = y;
      }

      lastY = y;
    }

    drawX();
  }

  function _getSegmentMethod(line) {
    var opts = line.options;
    var borderDash = opts.borderDash && opts.borderDash.length;
    var useFastPath = !line._decimated && !line._loop && !opts.tension && !opts.stepped && !borderDash;
    return useFastPath ? fastPathSegment : pathSegment;
  }

  function _getInterpolationMethod(options) {
    if (options.stepped) {
      return _steppedInterpolation;
    }

    if (options.tension) {
      return _bezierInterpolation;
    }

    return _pointInLine;
  }

  function strokePathWithCache(ctx, line, start, count) {
    var path = line._path;

    if (!path) {
      path = line._path = new Path2D();

      if (line.path(path, start, count)) {
        path.closePath();
      }
    }

    ctx.stroke(path);
  }

  function strokePathDirect(ctx, line, start, count) {
    ctx.beginPath();

    if (line.path(ctx, start, count)) {
      ctx.closePath();
    }

    ctx.stroke();
  }

  var usePath2D = typeof Path2D === 'function';
  var strokePath = usePath2D ? strokePathWithCache : strokePathDirect;

  var LineElement = /*#__PURE__*/function (_Element3) {
    _inherits(LineElement, _Element3);

    var _super13 = _createSuper(LineElement);

    function LineElement(cfg) {
      var _this7;

      _classCallCheck(this, LineElement);

      _this7 = _super13.call(this);
      _this7.animated = true;
      _this7.options = undefined;
      _this7._loop = undefined;
      _this7._fullLoop = undefined;
      _this7._path = undefined;
      _this7._points = undefined;
      _this7._segments = undefined;
      _this7._decimated = false;
      _this7._pointsUpdated = false;

      if (cfg) {
        Object.assign(_assertThisInitialized(_this7), cfg);
      }

      return _this7;
    }

    _createClass(LineElement, [{
      key: "updateControlPoints",
      value: function updateControlPoints(chartArea) {
        var me = this;
        var options = me.options;

        if (options.tension && !options.stepped && !me._pointsUpdated) {
          var loop = options.spanGaps ? me._loop : me._fullLoop;

          _updateBezierControlPoints(me._points, options, chartArea, loop);

          me._pointsUpdated = true;
        }
      }
    }, {
      key: "points",
      get: function get() {
        return this._points;
      },
      set: function set(points) {
        var me = this;
        me._points = points;
        delete me._segments;
        delete me._path;
        me._pointsUpdated = false;
      }
    }, {
      key: "segments",
      get: function get() {
        return this._segments || (this._segments = _computeSegments(this));
      }
    }, {
      key: "first",
      value: function first() {
        var segments = this.segments;
        var points = this.points;
        return segments.length && points[segments[0].start];
      }
    }, {
      key: "last",
      value: function last() {
        var segments = this.segments;
        var points = this.points;
        var count = segments.length;
        return count && points[segments[count - 1].end];
      }
    }, {
      key: "interpolate",
      value: function interpolate(point, property) {
        var me = this;
        var options = me.options;
        var value = point[property];
        var points = me.points;

        var segments = _boundSegments(me, {
          property: property,
          start: value,
          end: value
        });

        if (!segments.length) {
          return;
        }

        var result = [];

        var _interpolate = _getInterpolationMethod(options);

        var i, ilen;

        for (i = 0, ilen = segments.length; i < ilen; ++i) {
          var _segments$i = segments[i],
              start = _segments$i.start,
              end = _segments$i.end;
          var p1 = points[start];
          var p2 = points[end];

          if (p1 === p2) {
            result.push(p1);
            continue;
          }

          var t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));

          var interpolated = _interpolate(p1, p2, t, options.stepped);

          interpolated[property] = point[property];
          result.push(interpolated);
        }

        return result.length === 1 ? result[0] : result;
      }
    }, {
      key: "pathSegment",
      value: function pathSegment(ctx, segment, params) {
        var segmentMethod = _getSegmentMethod(this);

        return segmentMethod(ctx, this, segment, params);
      }
    }, {
      key: "path",
      value: function path(ctx, start, count) {
        var me = this;
        var segments = me.segments;
        var ilen = segments.length;

        var segmentMethod = _getSegmentMethod(me);

        var loop = me._loop;
        start = start || 0;
        count = count || me.points.length - start;

        for (var i = 0; i < ilen; ++i) {
          loop &= segmentMethod(ctx, me, segments[i], {
            start: start,
            end: start + count - 1
          });
        }

        return !!loop;
      }
    }, {
      key: "draw",
      value: function draw(ctx, chartArea, start, count) {
        var me = this;
        var options = me.options || {};
        var points = me.points || [];

        if (!points.length || !options.borderWidth) {
          return;
        }

        ctx.save();
        setStyle(ctx, options);
        strokePath(ctx, me, start, count);
        ctx.restore();

        if (me.animated) {
          me._pointsUpdated = false;
          me._path = undefined;
        }
      }
    }]);

    return LineElement;
  }(Element);

  LineElement.id = 'line';
  LineElement.defaults = {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: true,
    cubicInterpolationMode: 'default',
    fill: false,
    spanGaps: false,
    stepped: false,
    tension: 0
  };
  LineElement.defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor'
  };
  LineElement.descriptors = {
    _scriptable: true,
    _indexable: function _indexable(name) {
      return name !== 'borderDash' && name !== 'fill';
    }
  };

  function inRange$1(el, pos, axis, useFinalPosition) {
    var options = el.options;

    var _el$getProps = el.getProps([axis], useFinalPosition),
        value = _el$getProps[axis];

    return Math.abs(pos - value) < options.radius + options.hitRadius;
  }

  var PointElement = /*#__PURE__*/function (_Element4) {
    _inherits(PointElement, _Element4);

    var _super14 = _createSuper(PointElement);

    function PointElement(cfg) {
      var _this8;

      _classCallCheck(this, PointElement);

      _this8 = _super14.call(this);
      _this8.options = undefined;
      _this8.skip = undefined;
      _this8.stop = undefined;

      if (cfg) {
        Object.assign(_assertThisInitialized(_this8), cfg);
      }

      return _this8;
    }

    _createClass(PointElement, [{
      key: "inRange",
      value: function inRange(mouseX, mouseY, useFinalPosition) {
        var options = this.options;

        var _this$getProps4 = this.getProps(['x', 'y'], useFinalPosition),
            x = _this$getProps4.x,
            y = _this$getProps4.y;

        return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
      }
    }, {
      key: "inXRange",
      value: function inXRange(mouseX, useFinalPosition) {
        return inRange$1(this, mouseX, 'x', useFinalPosition);
      }
    }, {
      key: "inYRange",
      value: function inYRange(mouseY, useFinalPosition) {
        return inRange$1(this, mouseY, 'y', useFinalPosition);
      }
    }, {
      key: "getCenterPoint",
      value: function getCenterPoint(useFinalPosition) {
        var _this$getProps5 = this.getProps(['x', 'y'], useFinalPosition),
            x = _this$getProps5.x,
            y = _this$getProps5.y;

        return {
          x: x,
          y: y
        };
      }
    }, {
      key: "size",
      value: function size(options) {
        options = options || this.options || {};
        var radius = options.radius || 0;
        radius = Math.max(radius, radius && options.hoverRadius || 0);
        var borderWidth = radius && options.borderWidth || 0;
        return (radius + borderWidth) * 2;
      }
    }, {
      key: "draw",
      value: function draw(ctx) {
        var me = this;
        var options = me.options;

        if (me.skip || options.radius < 0.1) {
          return;
        }

        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.fillStyle = options.backgroundColor;
        drawPoint(ctx, options, me.x, me.y);
      }
    }, {
      key: "getRange",
      value: function getRange() {
        var options = this.options || {};
        return options.radius + options.hitRadius;
      }
    }]);

    return PointElement;
  }(Element);

  PointElement.id = 'point';
  PointElement.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0
  };
  PointElement.defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor'
  };

  function getBarBounds(bar, useFinalPosition) {
    var _bar$getProps = bar.getProps(['x', 'y', 'base', 'width', 'height'], useFinalPosition),
        x = _bar$getProps.x,
        y = _bar$getProps.y,
        base = _bar$getProps.base,
        width = _bar$getProps.width,
        height = _bar$getProps.height;

    var left, right, top, bottom, half;

    if (bar.horizontal) {
      half = height / 2;
      left = Math.min(x, base);
      right = Math.max(x, base);
      top = y - half;
      bottom = y + half;
    } else {
      half = width / 2;
      left = x - half;
      right = x + half;
      top = Math.min(y, base);
      bottom = Math.max(y, base);
    }

    return {
      left: left,
      top: top,
      right: right,
      bottom: bottom
    };
  }

  function parseBorderSkipped(bar) {
    var edge = bar.options.borderSkipped;
    var res = {};

    if (!edge) {
      return res;
    }

    edge = bar.horizontal ? parseEdge(edge, 'left', 'right', bar.base > bar.x) : parseEdge(edge, 'bottom', 'top', bar.base < bar.y);
    res[edge] = true;
    return res;
  }

  function parseEdge(edge, a, b, reverse) {
    if (reverse) {
      edge = swap(edge, a, b);
      edge = startEnd(edge, b, a);
    } else {
      edge = startEnd(edge, a, b);
    }

    return edge;
  }

  function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
  }

  function startEnd(v, start, end) {
    return v === 'start' ? start : v === 'end' ? end : v;
  }

  function skipOrLimit(skip, value, min, max) {
    return skip ? 0 : Math.max(Math.min(value, max), min);
  }

  function parseBorderWidth(bar, maxW, maxH) {
    var value = bar.options.borderWidth;
    var skip = parseBorderSkipped(bar);
    var o = toTRBL(value);
    return {
      t: skipOrLimit(skip.top, o.top, 0, maxH),
      r: skipOrLimit(skip.right, o.right, 0, maxW),
      b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
      l: skipOrLimit(skip.left, o.left, 0, maxW)
    };
  }

  function parseBorderRadius(bar, maxW, maxH) {
    var value = bar.options.borderRadius;
    var o = toTRBLCorners(value);
    var maxR = Math.min(maxW, maxH);
    var skip = parseBorderSkipped(bar);
    return {
      topLeft: skipOrLimit(skip.top || skip.left, o.topLeft, 0, maxR),
      topRight: skipOrLimit(skip.top || skip.right, o.topRight, 0, maxR),
      bottomLeft: skipOrLimit(skip.bottom || skip.left, o.bottomLeft, 0, maxR),
      bottomRight: skipOrLimit(skip.bottom || skip.right, o.bottomRight, 0, maxR)
    };
  }

  function boundingRects(bar) {
    var bounds = getBarBounds(bar);
    var width = bounds.right - bounds.left;
    var height = bounds.bottom - bounds.top;
    var border = parseBorderWidth(bar, width / 2, height / 2);
    var radius = parseBorderRadius(bar, width / 2, height / 2);
    return {
      outer: {
        x: bounds.left,
        y: bounds.top,
        w: width,
        h: height,
        radius: radius
      },
      inner: {
        x: bounds.left + border.l,
        y: bounds.top + border.t,
        w: width - border.l - border.r,
        h: height - border.t - border.b,
        radius: {
          topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
          topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
          bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
          bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
        }
      }
    };
  }

  function _inRange(bar, x, y, useFinalPosition) {
    var skipX = x === null;
    var skipY = y === null;
    var skipBoth = skipX && skipY;
    var bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || x >= bounds.left && x <= bounds.right) && (skipY || y >= bounds.top && y <= bounds.bottom);
  }

  function hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
  }

  function addRoundedRectPath(ctx, rect) {
    var x = rect.x,
        y = rect.y,
        w = rect.w,
        h = rect.h,
        radius = rect.radius;
    ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -HALF_PI, PI, true);
    ctx.lineTo(x, y + h - radius.bottomLeft);
    ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
    ctx.lineTo(x + w - radius.bottomRight, y + h);
    ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
    ctx.lineTo(x + w, y + radius.topRight);
    ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
    ctx.lineTo(x + radius.topLeft, y);
  }

  function addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
  }

  var BarElement = /*#__PURE__*/function (_Element5) {
    _inherits(BarElement, _Element5);

    var _super15 = _createSuper(BarElement);

    function BarElement(cfg) {
      var _this9;

      _classCallCheck(this, BarElement);

      _this9 = _super15.call(this);
      _this9.options = undefined;
      _this9.horizontal = undefined;
      _this9.base = undefined;
      _this9.width = undefined;
      _this9.height = undefined;

      if (cfg) {
        Object.assign(_assertThisInitialized(_this9), cfg);
      }

      return _this9;
    }

    _createClass(BarElement, [{
      key: "draw",
      value: function draw(ctx) {
        var options = this.options;

        var _boundingRects = boundingRects(this),
            inner = _boundingRects.inner,
            outer = _boundingRects.outer;

        var addRectPath = hasRadius(outer.radius) ? addRoundedRectPath : addNormalRectPath;
        ctx.save();

        if (outer.w !== inner.w || outer.h !== inner.h) {
          ctx.beginPath();
          addRectPath(ctx, outer);
          ctx.clip();
          addRectPath(ctx, inner);
          ctx.fillStyle = options.borderColor;
          ctx.fill('evenodd');
        }

        ctx.beginPath();
        addRectPath(ctx, inner);
        ctx.fillStyle = options.backgroundColor;
        ctx.fill();
        ctx.restore();
      }
    }, {
      key: "inRange",
      value: function inRange(mouseX, mouseY, useFinalPosition) {
        return _inRange(this, mouseX, mouseY, useFinalPosition);
      }
    }, {
      key: "inXRange",
      value: function inXRange(mouseX, useFinalPosition) {
        return _inRange(this, mouseX, null, useFinalPosition);
      }
    }, {
      key: "inYRange",
      value: function inYRange(mouseY, useFinalPosition) {
        return _inRange(this, null, mouseY, useFinalPosition);
      }
    }, {
      key: "getCenterPoint",
      value: function getCenterPoint(useFinalPosition) {
        var _this$getProps6 = this.getProps(['x', 'y', 'base', 'horizontal'], useFinalPosition),
            x = _this$getProps6.x,
            y = _this$getProps6.y,
            base = _this$getProps6.base,
            horizontal = _this$getProps6.horizontal;

        return {
          x: horizontal ? (x + base) / 2 : x,
          y: horizontal ? y : (y + base) / 2
        };
      }
    }, {
      key: "getRange",
      value: function getRange(axis) {
        return axis === 'x' ? this.width / 2 : this.height / 2;
      }
    }]);

    return BarElement;
  }(Element);

  BarElement.id = 'bar';
  BarElement.defaults = {
    borderSkipped: 'start',
    borderWidth: 0,
    borderRadius: 0,
    pointStyle: undefined
  };
  BarElement.defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor'
  };
  var elements = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ArcElement: ArcElement,
    LineElement: LineElement,
    PointElement: PointElement,
    BarElement: BarElement
  });

  function lttbDecimation(data, availableWidth, options) {
    var samples = options.samples || availableWidth;
    var decimated = [];
    var bucketWidth = (data.length - 2) / (samples - 2);
    var sampledIndex = 0;
    var a = 0;
    var i, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data[a];

    for (i = 0; i < samples - 2; i++) {
      var avgX = 0;
      var avgY = 0;
      var j = void 0;
      var avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1;
      var avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, data.length);
      var avgRangeLength = avgRangeEnd - avgRangeStart;

      for (j = avgRangeStart; j < avgRangeEnd; j++) {
        avgX = data[j].x;
        avgY = data[j].y;
      }

      avgX /= avgRangeLength;
      avgY /= avgRangeLength;
      var rangeOffs = Math.floor(i * bucketWidth) + 1;
      var rangeTo = Math.floor((i + 1) * bucketWidth) + 1;
      var _data$a = data[a],
          pointAx = _data$a.x,
          pointAy = _data$a.y;
      maxArea = area = -1;

      for (j = rangeOffs; j < rangeTo; j++) {
        area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));

        if (area > maxArea) {
          maxArea = area;
          maxAreaPoint = data[j];
          nextA = j;
        }
      }

      decimated[sampledIndex++] = maxAreaPoint;
      a = nextA;
    }

    decimated[sampledIndex++] = data[data.length - 1];
    return decimated;
  }

  function minMaxDecimation(data, availableWidth) {
    var avgX = 0;
    var countX = 0;
    var i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    var decimated = [];
    var xMin = data[0].x;
    var xMax = data[data.length - 1].x;
    var dx = xMax - xMin;

    for (i = 0; i < data.length; ++i) {
      point = data[i];
      x = (point.x - xMin) / dx * availableWidth;
      y = point.y;
      var truncX = x | 0;

      if (truncX === prevX) {
        if (y < minY) {
          minY = y;
          minIndex = i;
        } else if (y > maxY) {
          maxY = y;
          maxIndex = i;
        }

        avgX = (countX * avgX + point.x) / ++countX;
      } else {
        var lastIndex = i - 1;

        if (!isNullOrUndef(minIndex) && !isNullOrUndef(maxIndex)) {
          var intermediateIndex1 = Math.min(minIndex, maxIndex);
          var intermediateIndex2 = Math.max(minIndex, maxIndex);

          if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
            decimated.push(_objectSpread(_objectSpread({}, data[intermediateIndex1]), {}, {
              x: avgX
            }));
          }

          if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
            decimated.push(_objectSpread(_objectSpread({}, data[intermediateIndex2]), {}, {
              x: avgX
            }));
          }
        }

        if (i > 0 && lastIndex !== startIndex) {
          decimated.push(data[lastIndex]);
        }

        decimated.push(point);
        prevX = truncX;
        countX = 0;
        minY = maxY = y;
        minIndex = maxIndex = startIndex = i;
      }
    }

    return decimated;
  }

  var plugin_decimation = {
    id: 'decimation',
    defaults: {
      algorithm: 'min-max',
      enabled: false
    },
    beforeElementsUpdate: function beforeElementsUpdate(chart, args, options) {
      if (!options.enabled) {
        return;
      }

      var availableWidth = chart.width;
      chart.data.datasets.forEach(function (dataset, datasetIndex) {
        var _data = dataset._data,
            indexAxis = dataset.indexAxis;
        var meta = chart.getDatasetMeta(datasetIndex);
        var data = _data || dataset.data;

        if (resolve([indexAxis, chart.options.indexAxis]) === 'y') {
          return;
        }

        if (meta.type !== 'line') {
          return;
        }

        var xAxis = chart.scales[meta.xAxisID];

        if (xAxis.type !== 'linear' && xAxis.type !== 'time') {
          return;
        }

        if (chart.options.parsing) {
          return;
        }

        if (data.length <= 4 * availableWidth) {
          return;
        }

        if (isNullOrUndef(_data)) {
          dataset._data = data;
          delete dataset.data;
          Object.defineProperty(dataset, 'data', {
            configurable: true,
            enumerable: true,
            get: function get() {
              return this._decimated;
            },
            set: function set(d) {
              this._data = d;
            }
          });
        }

        var decimated;

        switch (options.algorithm) {
          case 'lttb':
            decimated = lttbDecimation(data, availableWidth, options);
            break;

          case 'min-max':
            decimated = minMaxDecimation(data, availableWidth);
            break;

          default:
            throw new Error("Unsupported decimation algorithm '".concat(options.algorithm, "'"));
        }

        dataset._decimated = decimated;
      });
    },
    destroy: function destroy(chart) {
      chart.data.datasets.forEach(function (dataset) {
        if (dataset._decimated) {
          var data = dataset._data;
          delete dataset._decimated;
          delete dataset._data;
          Object.defineProperty(dataset, 'data', {
            value: data
          });
        }
      });
    }
  };

  function getLineByIndex(chart, index) {
    var meta = chart.getDatasetMeta(index);
    var visible = meta && chart.isDatasetVisible(index);
    return visible ? meta.dataset : null;
  }

  function parseFillOption(line) {
    var options = line.options;
    var fillOption = options.fill;
    var fill = valueOrDefault(fillOption && fillOption.target, fillOption);

    if (fill === undefined) {
      fill = !!options.backgroundColor;
    }

    if (fill === false || fill === null) {
      return false;
    }

    if (fill === true) {
      return 'origin';
    }

    return fill;
  }

  function decodeFill(line, index, count) {
    var fill = parseFillOption(line);

    if (isObject(fill)) {
      return isNaN(fill.value) ? false : fill;
    }

    var target = parseFloat(fill);

    if (isNumberFinite(target) && Math.floor(target) === target) {
      if (fill[0] === '-' || fill[0] === '+') {
        target = index + target;
      }

      if (target === index || target < 0 || target >= count) {
        return false;
      }

      return target;
    }

    return ['origin', 'start', 'end', 'stack'].indexOf(fill) >= 0 && fill;
  }

  function computeLinearBoundary(source) {
    var _source$scale = source.scale,
        scale = _source$scale === void 0 ? {} : _source$scale,
        fill = source.fill;
    var target = null;
    var horizontal;

    if (fill === 'start') {
      target = scale.bottom;
    } else if (fill === 'end') {
      target = scale.top;
    } else if (isObject(fill)) {
      target = scale.getPixelForValue(fill.value);
    } else if (scale.getBasePixel) {
      target = scale.getBasePixel();
    }

    if (isNumberFinite(target)) {
      horizontal = scale.isHorizontal();
      return {
        x: horizontal ? target : null,
        y: horizontal ? null : target
      };
    }

    return null;
  }

  var simpleArc = /*#__PURE__*/function () {
    function simpleArc(opts) {
      _classCallCheck(this, simpleArc);

      this.x = opts.x;
      this.y = opts.y;
      this.radius = opts.radius;
    }

    _createClass(simpleArc, [{
      key: "pathSegment",
      value: function pathSegment(ctx, bounds, opts) {
        var x = this.x,
            y = this.y,
            radius = this.radius;
        bounds = bounds || {
          start: 0,
          end: TAU
        };
        ctx.arc(x, y, radius, bounds.end, bounds.start, true);
        return !opts.bounds;
      }
    }, {
      key: "interpolate",
      value: function interpolate(point) {
        var x = this.x,
            y = this.y,
            radius = this.radius;
        var angle = point.angle;
        return {
          x: x + Math.cos(angle) * radius,
          y: y + Math.sin(angle) * radius,
          angle: angle
        };
      }
    }]);

    return simpleArc;
  }();

  function computeCircularBoundary(source) {
    var scale = source.scale,
        fill = source.fill;
    var options = scale.options;
    var length = scale.getLabels().length;
    var target = [];
    var start = options.reverse ? scale.max : scale.min;
    var end = options.reverse ? scale.min : scale.max;
    var i, center, value;

    if (fill === 'start') {
      value = start;
    } else if (fill === 'end') {
      value = end;
    } else if (isObject(fill)) {
      value = fill.value;
    } else {
      value = scale.getBaseValue();
    }

    if (options.grid.circular) {
      center = scale.getPointPositionForValue(0, start);
      return new simpleArc({
        x: center.x,
        y: center.y,
        radius: scale.getDistanceFromCenterForValue(value)
      });
    }

    for (i = 0; i < length; ++i) {
      target.push(scale.getPointPositionForValue(i, value));
    }

    return target;
  }

  function computeBoundary(source) {
    var scale = source.scale || {};

    if (scale.getPointPositionForValue) {
      return computeCircularBoundary(source);
    }

    return computeLinearBoundary(source);
  }

  function pointsFromSegments(boundary, line) {
    var _ref4 = boundary || {},
        _ref4$x = _ref4.x,
        x = _ref4$x === void 0 ? null : _ref4$x,
        _ref4$y = _ref4.y,
        y = _ref4$y === void 0 ? null : _ref4$y;

    var linePoints = line.points;
    var points = [];
    line.segments.forEach(function (segment) {
      var first = linePoints[segment.start];
      var last = linePoints[segment.end];

      if (y !== null) {
        points.push({
          x: first.x,
          y: y
        });
        points.push({
          x: last.x,
          y: y
        });
      } else if (x !== null) {
        points.push({
          x: x,
          y: first.y
        });
        points.push({
          x: x,
          y: last.y
        });
      }
    });
    return points;
  }

  function buildStackLine(source) {
    var chart = source.chart,
        scale = source.scale,
        index = source.index,
        line = source.line;
    var points = [];
    var segments = line.segments;
    var sourcePoints = line.points;
    var linesBelow = getLinesBelow(chart, index);
    linesBelow.push(createBoundaryLine({
      x: null,
      y: scale.bottom
    }, line));

    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i];

      for (var j = segment.start; j <= segment.end; j++) {
        addPointsBelow(points, sourcePoints[j], linesBelow);
      }
    }

    return new LineElement({
      points: points,
      options: {}
    });
  }

  var isLineAndNotInHideAnimation = function isLineAndNotInHideAnimation(meta) {
    return meta.type === 'line' && !meta.hidden;
  };

  function getLinesBelow(chart, index) {
    var below = [];
    var metas = chart.getSortedVisibleDatasetMetas();

    for (var i = 0; i < metas.length; i++) {
      var meta = metas[i];

      if (meta.index === index) {
        break;
      }

      if (isLineAndNotInHideAnimation(meta)) {
        below.unshift(meta.dataset);
      }
    }

    return below;
  }

  function addPointsBelow(points, sourcePoint, linesBelow) {
    var postponed = [];

    for (var j = 0; j < linesBelow.length; j++) {
      var line = linesBelow[j];

      var _findPoint = findPoint(line, sourcePoint, 'x'),
          first = _findPoint.first,
          last = _findPoint.last,
          point = _findPoint.point;

      if (!point || first && last) {
        continue;
      }

      if (first) {
        postponed.unshift(point);
      } else {
        points.push(point);

        if (!last) {
          break;
        }
      }
    }

    points.push.apply(points, postponed);
  }

  function findPoint(line, sourcePoint, property) {
    var point = line.interpolate(sourcePoint, property);

    if (!point) {
      return {};
    }

    var pointValue = point[property];
    var segments = line.segments;
    var linePoints = line.points;
    var first = false;
    var last = false;

    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i];
      var firstValue = linePoints[segment.start][property];
      var lastValue = linePoints[segment.end][property];

      if (pointValue >= firstValue && pointValue <= lastValue) {
        first = pointValue === firstValue;
        last = pointValue === lastValue;
        break;
      }
    }

    return {
      first: first,
      last: last,
      point: point
    };
  }

  function getTarget(source) {
    var chart = source.chart,
        fill = source.fill,
        line = source.line;

    if (isNumberFinite(fill)) {
      return getLineByIndex(chart, fill);
    }

    if (fill === 'stack') {
      return buildStackLine(source);
    }

    var boundary = computeBoundary(source);

    if (boundary instanceof simpleArc) {
      return boundary;
    }

    return createBoundaryLine(boundary, line);
  }

  function createBoundaryLine(boundary, line) {
    var points = [];
    var _loop = false;

    if (isArray(boundary)) {
      _loop = true;
      points = boundary;
    } else {
      points = pointsFromSegments(boundary, line);
    }

    return points.length ? new LineElement({
      points: points,
      options: {
        tension: 0
      },
      _loop: _loop,
      _fullLoop: _loop
    }) : null;
  }

  function resolveTarget(sources, index, propagate) {
    var source = sources[index];
    var fill = source.fill;
    var visited = [index];
    var target;

    if (!propagate) {
      return fill;
    }

    while (fill !== false && visited.indexOf(fill) === -1) {
      if (!isNumberFinite(fill)) {
        return fill;
      }

      target = sources[fill];

      if (!target) {
        return false;
      }

      if (target.visible) {
        return fill;
      }

      visited.push(fill);
      fill = target.fill;
    }

    return false;
  }

  function _clip(ctx, target, clipY) {
    ctx.beginPath();
    target.path(ctx);
    ctx.lineTo(target.last().x, clipY);
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
  }

  function getBounds(property, first, last, loop) {
    if (loop) {
      return;
    }

    var start = first[property];
    var end = last[property];

    if (property === 'angle') {
      start = _normalizeAngle(start);
      end = _normalizeAngle(end);
    }

    return {
      property: property,
      start: start,
      end: end
    };
  }

  function _getEdge(a, b, prop, fn) {
    if (a && b) {
      return fn(a[prop], b[prop]);
    }

    return a ? a[prop] : b ? b[prop] : 0;
  }

  function _segments(line, target, property) {
    var segments = line.segments;
    var points = line.points;
    var tpoints = target.points;
    var parts = [];

    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i];
      var bounds = getBounds(property, points[segment.start], points[segment.end], segment.loop);

      if (!target.segments) {
        parts.push({
          source: segment,
          target: bounds,
          start: points[segment.start],
          end: points[segment.end]
        });
        continue;
      }

      var subs = _boundSegments(target, bounds);

      for (var j = 0; j < subs.length; ++j) {
        var sub = subs[j];
        var subBounds = getBounds(property, tpoints[sub.start], tpoints[sub.end], sub.loop);

        var fillSources = _boundSegment(segment, points, subBounds);

        for (var k = 0; k < fillSources.length; k++) {
          parts.push({
            source: fillSources[k],
            target: sub,
            start: _defineProperty({}, property, _getEdge(bounds, subBounds, 'start', Math.max)),
            end: _defineProperty({}, property, _getEdge(bounds, subBounds, 'end', Math.min))
          });
        }
      }
    }

    return parts;
  }

  function clipBounds(ctx, scale, bounds) {
    var _scale$chart$chartAre = scale.chart.chartArea,
        top = _scale$chart$chartAre.top,
        bottom = _scale$chart$chartAre.bottom;

    var _ref5 = bounds || {},
        property = _ref5.property,
        start = _ref5.start,
        end = _ref5.end;

    if (property === 'x') {
      ctx.beginPath();
      ctx.rect(start, top, end - start, bottom - top);
      ctx.clip();
    }
  }

  function interpolatedLineTo(ctx, target, point, property) {
    var interpolatedPoint = target.interpolate(point, property);

    if (interpolatedPoint) {
      ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
    }
  }

  function _fill(ctx, cfg) {
    var line = cfg.line,
        target = cfg.target,
        property = cfg.property,
        color = cfg.color,
        scale = cfg.scale;

    var segments = _segments(line, target, property);

    ctx.fillStyle = color;

    for (var i = 0, ilen = segments.length; i < ilen; ++i) {
      var _segments$i2 = segments[i],
          src = _segments$i2.source,
          tgt = _segments$i2.target,
          start = _segments$i2.start,
          end = _segments$i2.end;
      ctx.save();
      clipBounds(ctx, scale, getBounds(property, start, end));
      ctx.beginPath();
      var lineLoop = !!line.pathSegment(ctx, src);

      if (lineLoop) {
        ctx.closePath();
      } else {
        interpolatedLineTo(ctx, target, end, property);
      }

      var targetLoop = !!target.pathSegment(ctx, tgt, {
        move: lineLoop,
        reverse: true
      });
      var loop = lineLoop && targetLoop;

      if (!loop) {
        interpolatedLineTo(ctx, target, start, property);
      }

      ctx.closePath();
      ctx.fill(loop ? 'evenodd' : 'nonzero');
      ctx.restore();
    }
  }

  function doFill(ctx, cfg) {
    var line = cfg.line,
        target = cfg.target,
        above = cfg.above,
        below = cfg.below,
        area = cfg.area,
        scale = cfg.scale;
    var property = line._loop ? 'angle' : 'x';
    ctx.save();

    if (property === 'x' && below !== above) {
      _clip(ctx, target, area.top);

      _fill(ctx, {
        line: line,
        target: target,
        color: above,
        scale: scale,
        property: property
      });

      ctx.restore();
      ctx.save();

      _clip(ctx, target, area.bottom);
    }

    _fill(ctx, {
      line: line,
      target: target,
      color: below,
      scale: scale,
      property: property
    });

    ctx.restore();
  }

  var plugin_filler = {
    id: 'filler',
    afterDatasetsUpdate: function afterDatasetsUpdate(chart, _args, options) {
      var count = (chart.data.datasets || []).length;
      var propagate = options.propagate;
      var sources = [];
      var meta, i, line, source;

      for (i = 0; i < count; ++i) {
        meta = chart.getDatasetMeta(i);
        line = meta.dataset;
        source = null;

        if (line && line.options && line instanceof LineElement) {
          source = {
            visible: chart.isDatasetVisible(i),
            index: i,
            fill: decodeFill(line, i, count),
            chart: chart,
            scale: meta.vScale,
            line: line
          };
        }

        meta.$filler = source;
        sources.push(source);
      }

      for (i = 0; i < count; ++i) {
        source = sources[i];

        if (!source || source.fill === false) {
          continue;
        }

        source.fill = resolveTarget(sources, i, propagate);
      }
    },
    beforeDatasetsDraw: function beforeDatasetsDraw(chart) {
      var metasets = chart.getSortedVisibleDatasetMetas();
      var area = chart.chartArea;
      var i, meta;

      for (i = metasets.length - 1; i >= 0; --i) {
        meta = metasets[i].$filler;

        if (meta) {
          meta.line.updateControlPoints(area);
        }
      }
    },
    beforeDatasetDraw: function beforeDatasetDraw(chart, args) {
      var area = chart.chartArea;
      var ctx = chart.ctx;
      var source = args.meta.$filler;

      if (!source || source.fill === false) {
        return;
      }

      var target = getTarget(source);
      var line = source.line,
          scale = source.scale;
      var lineOpts = line.options;
      var fillOption = lineOpts.fill;
      var color = lineOpts.backgroundColor;

      var _ref6 = fillOption || {},
          _ref6$above = _ref6.above,
          above = _ref6$above === void 0 ? color : _ref6$above,
          _ref6$below = _ref6.below,
          below = _ref6$below === void 0 ? color : _ref6$below;

      if (target && line.points.length) {
        clipArea(ctx, area);
        doFill(ctx, {
          line: line,
          target: target,
          above: above,
          below: below,
          area: area,
          scale: scale
        });
        unclipArea(ctx);
      }
    },
    defaults: {
      propagate: true
    }
  };

  var getBoxSize = function getBoxSize(labelOpts, fontSize) {
    var _labelOpts$boxHeight = labelOpts.boxHeight,
        boxHeight = _labelOpts$boxHeight === void 0 ? fontSize : _labelOpts$boxHeight,
        _labelOpts$boxWidth = labelOpts.boxWidth,
        boxWidth = _labelOpts$boxWidth === void 0 ? fontSize : _labelOpts$boxWidth;

    if (labelOpts.usePointStyle) {
      boxHeight = Math.min(boxHeight, fontSize);
      boxWidth = Math.min(boxWidth, fontSize);
    }

    return {
      boxWidth: boxWidth,
      boxHeight: boxHeight,
      itemHeight: Math.max(fontSize, boxHeight)
    };
  };

  var itemsEqual = function itemsEqual(a, b) {
    return a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
  };

  var Legend = /*#__PURE__*/function (_Element6) {
    _inherits(Legend, _Element6);

    var _super16 = _createSuper(Legend);

    function Legend(config) {
      var _this10;

      _classCallCheck(this, Legend);

      _this10 = _super16.call(this);
      _this10._added = false;
      _this10.legendHitBoxes = [];
      _this10._hoveredItem = null;
      _this10.doughnutMode = false;
      _this10.chart = config.chart;
      _this10.options = config.options;
      _this10.ctx = config.ctx;
      _this10.legendItems = undefined;
      _this10.columnSizes = undefined;
      _this10.lineWidths = undefined;
      _this10.maxHeight = undefined;
      _this10.maxWidth = undefined;
      _this10.top = undefined;
      _this10.bottom = undefined;
      _this10.left = undefined;
      _this10.right = undefined;
      _this10.height = undefined;
      _this10.width = undefined;
      _this10._margins = undefined;
      _this10.position = undefined;
      _this10.weight = undefined;
      _this10.fullSize = undefined;
      return _this10;
    }

    _createClass(Legend, [{
      key: "update",
      value: function update(maxWidth, maxHeight, margins) {
        var me = this;
        me.maxWidth = maxWidth;
        me.maxHeight = maxHeight;
        me._margins = margins;
        me.setDimensions();
        me.buildLabels();
        me.fit();
      }
    }, {
      key: "setDimensions",
      value: function setDimensions() {
        var me = this;

        if (me.isHorizontal()) {
          me.width = me.maxWidth;
          me.left = 0;
          me.right = me.width;
        } else {
          me.height = me.maxHeight;
          me.top = 0;
          me.bottom = me.height;
        }
      }
    }, {
      key: "buildLabels",
      value: function buildLabels() {
        var me = this;
        var labelOpts = me.options.labels || {};
        var legendItems = callback(labelOpts.generateLabels, [me.chart], me) || [];

        if (labelOpts.filter) {
          legendItems = legendItems.filter(function (item) {
            return labelOpts.filter(item, me.chart.data);
          });
        }

        if (labelOpts.sort) {
          legendItems = legendItems.sort(function (a, b) {
            return labelOpts.sort(a, b, me.chart.data);
          });
        }

        if (me.options.reverse) {
          legendItems.reverse();
        }

        me.legendItems = legendItems;
      }
    }, {
      key: "fit",
      value: function fit() {
        var me = this;
        var options = me.options,
            ctx = me.ctx;

        if (!options.display) {
          me.width = me.height = 0;
          return;
        }

        var labelOpts = options.labels;
        var labelFont = toFont(labelOpts.font);
        var fontSize = labelFont.size;

        var titleHeight = me._computeTitleHeight();

        var _getBoxSize = getBoxSize(labelOpts, fontSize),
            boxWidth = _getBoxSize.boxWidth,
            itemHeight = _getBoxSize.itemHeight;

        var width, height;
        ctx.font = labelFont.string;

        if (me.isHorizontal()) {
          width = me.maxWidth;
          height = me._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
        } else {
          height = me.maxHeight;
          width = me._fitCols(titleHeight, fontSize, boxWidth, itemHeight) + 10;
        }

        me.width = Math.min(width, options.maxWidth || me.maxWidth);
        me.height = Math.min(height, options.maxHeight || me.maxHeight);
      }
    }, {
      key: "_fitRows",
      value: function _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
        var me = this;
        var ctx = me.ctx,
            maxWidth = me.maxWidth,
            padding = me.options.labels.padding;
        var hitboxes = me.legendHitBoxes = [];
        var lineWidths = me.lineWidths = [0];
        var lineHeight = itemHeight + padding;
        var totalHeight = titleHeight;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        var row = -1;
        var top = -lineHeight;
        me.legendItems.forEach(function (legendItem, i) {
          var itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;

          if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
            totalHeight += lineHeight;
            lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
            top += lineHeight;
            row++;
          }

          hitboxes[i] = {
            left: 0,
            top: top,
            row: row,
            width: itemWidth,
            height: itemHeight
          };
          lineWidths[lineWidths.length - 1] += itemWidth + padding;
        });
        return totalHeight;
      }
    }, {
      key: "_fitCols",
      value: function _fitCols(titleHeight, fontSize, boxWidth, itemHeight) {
        var me = this;
        var ctx = me.ctx,
            maxHeight = me.maxHeight,
            padding = me.options.labels.padding;
        var hitboxes = me.legendHitBoxes = [];
        var columnSizes = me.columnSizes = [];
        var heightLimit = maxHeight - titleHeight;
        var totalWidth = padding;
        var currentColWidth = 0;
        var currentColHeight = 0;
        var left = 0;
        var top = 0;
        var col = 0;
        me.legendItems.forEach(function (legendItem, i) {
          var itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;

          if (i > 0 && currentColHeight + fontSize + 2 * padding > heightLimit) {
            totalWidth += currentColWidth + padding;
            columnSizes.push({
              width: currentColWidth,
              height: currentColHeight
            });
            left += currentColWidth + padding;
            col++;
            top = 0;
            currentColWidth = currentColHeight = 0;
          }

          currentColWidth = Math.max(currentColWidth, itemWidth);
          currentColHeight += fontSize + padding;
          hitboxes[i] = {
            left: left,
            top: top,
            col: col,
            width: itemWidth,
            height: itemHeight
          };
          top += itemHeight + padding;
        });
        totalWidth += currentColWidth;
        columnSizes.push({
          width: currentColWidth,
          height: currentColHeight
        });
        return totalWidth;
      }
    }, {
      key: "adjustHitBoxes",
      value: function adjustHitBoxes() {
        var me = this;

        if (!me.options.display) {
          return;
        }

        var titleHeight = me._computeTitleHeight();

        var hitboxes = me.legendHitBoxes,
            _me$options6 = me.options,
            align = _me$options6.align,
            padding = _me$options6.labels.padding;

        if (this.isHorizontal()) {
          var row = 0;

          var left = _alignStartEnd(align, me.left + padding, me.right - me.lineWidths[row]);

          var _iterator13 = _createForOfIteratorHelper(hitboxes),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var hitbox = _step13.value;

              if (row !== hitbox.row) {
                row = hitbox.row;
                left = _alignStartEnd(align, me.left + padding, me.right - me.lineWidths[row]);
              }

              hitbox.top += me.top + titleHeight + padding;
              hitbox.left = left;
              left += hitbox.width + padding;
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
        } else {
          var col = 0;

          var top = _alignStartEnd(align, me.top + titleHeight + padding, me.bottom - me.columnSizes[col].height);

          var _iterator14 = _createForOfIteratorHelper(hitboxes),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var _hitbox = _step14.value;

              if (_hitbox.col !== col) {
                col = _hitbox.col;
                top = _alignStartEnd(align, me.top + titleHeight + padding, me.bottom - me.columnSizes[col].height);
              }

              _hitbox.top = top;
              _hitbox.left += me.left + padding;
              top += _hitbox.height + padding;
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }
        }
      }
    }, {
      key: "isHorizontal",
      value: function isHorizontal() {
        return this.options.position === 'top' || this.options.position === 'bottom';
      }
    }, {
      key: "draw",
      value: function draw() {
        var me = this;

        if (me.options.display) {
          var ctx = me.ctx;
          clipArea(ctx, me);

          me._draw();

          unclipArea(ctx);
        }
      }
    }, {
      key: "_draw",
      value: function _draw() {
        var me = this;
        var opts = me.options,
            columnSizes = me.columnSizes,
            lineWidths = me.lineWidths,
            ctx = me.ctx;
        var align = opts.align,
            labelOpts = opts.labels;
        var defaultColor = defaults.color;
        var rtlHelper = getRtlAdapter(opts.rtl, me.left, me.width);
        var labelFont = toFont(labelOpts.font);
        var fontColor = labelOpts.color,
            padding = labelOpts.padding;
        var fontSize = labelFont.size;
        var halfFontSize = fontSize / 2;
        var cursor;
        me.drawTitle();
        ctx.textAlign = rtlHelper.textAlign('left');
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = fontColor;
        ctx.fillStyle = fontColor;
        ctx.font = labelFont.string;

        var _getBoxSize2 = getBoxSize(labelOpts, fontSize),
            boxWidth = _getBoxSize2.boxWidth,
            boxHeight = _getBoxSize2.boxHeight,
            itemHeight = _getBoxSize2.itemHeight;

        var drawLegendBox = function drawLegendBox(x, y, legendItem) {
          if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
            return;
          }

          ctx.save();
          var lineWidth = valueOrDefault(legendItem.lineWidth, 1);
          ctx.fillStyle = valueOrDefault(legendItem.fillStyle, defaultColor);
          ctx.lineCap = valueOrDefault(legendItem.lineCap, 'butt');
          ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, 0);
          ctx.lineJoin = valueOrDefault(legendItem.lineJoin, 'miter');
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, defaultColor);
          ctx.setLineDash(valueOrDefault(legendItem.lineDash, []));

          if (labelOpts.usePointStyle) {
            var drawOptions = {
              radius: boxWidth * Math.SQRT2 / 2,
              pointStyle: legendItem.pointStyle,
              rotation: legendItem.rotation,
              borderWidth: lineWidth
            };
            var centerX = rtlHelper.xPlus(x, boxWidth / 2);
            var centerY = y + halfFontSize;
            drawPoint(ctx, drawOptions, centerX, centerY);
          } else {
            var yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
            ctx.fillRect(rtlHelper.leftForLtr(x, boxWidth), yBoxTop, boxWidth, boxHeight);

            if (lineWidth !== 0) {
              ctx.strokeRect(rtlHelper.leftForLtr(x, boxWidth), yBoxTop, boxWidth, boxHeight);
            }
          }

          ctx.restore();
        };

        var fillText = function fillText(x, y, legendItem) {
          renderText(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
            strikethrough: legendItem.hidden,
            textAlign: legendItem.textAlign
          });
        };

        var isHorizontal = me.isHorizontal();

        var titleHeight = this._computeTitleHeight();

        if (isHorizontal) {
          cursor = {
            x: _alignStartEnd(align, me.left + padding, me.right - lineWidths[0]),
            y: me.top + padding + titleHeight,
            line: 0
          };
        } else {
          cursor = {
            x: me.left + padding,
            y: _alignStartEnd(align, me.top + titleHeight + padding, me.bottom - columnSizes[0].height),
            line: 0
          };
        }

        overrideTextDirection(me.ctx, opts.textDirection);
        var lineHeight = itemHeight + padding;
        me.legendItems.forEach(function (legendItem, i) {
          var textWidth = ctx.measureText(legendItem.text).width;
          var textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
          var width = boxWidth + fontSize / 2 + textWidth;
          var x = cursor.x;
          var y = cursor.y;
          rtlHelper.setWidth(me.width);

          if (isHorizontal) {
            if (i > 0 && x + width + padding > me.right) {
              y = cursor.y += lineHeight;
              cursor.line++;
              x = cursor.x = _alignStartEnd(align, me.left + padding, me.right - lineWidths[cursor.line]);
            }
          } else if (i > 0 && y + lineHeight > me.bottom) {
            x = cursor.x = x + columnSizes[cursor.line].width + padding;
            cursor.line++;
            y = cursor.y = _alignStartEnd(align, me.top + titleHeight + padding, me.bottom - columnSizes[cursor.line].height);
          }

          var realX = rtlHelper.x(x);
          drawLegendBox(realX, y, legendItem);
          x = _textX(textAlign, x + boxWidth + halfFontSize, me.right);
          fillText(rtlHelper.x(x), y, legendItem);

          if (isHorizontal) {
            cursor.x += width + padding;
          } else {
            cursor.y += lineHeight;
          }
        });
        restoreTextDirection(me.ctx, opts.textDirection);
      }
    }, {
      key: "drawTitle",
      value: function drawTitle() {
        var me = this;
        var opts = me.options;
        var titleOpts = opts.title;
        var titleFont = toFont(titleOpts.font);
        var titlePadding = toPadding(titleOpts.padding);

        if (!titleOpts.display) {
          return;
        }

        var rtlHelper = getRtlAdapter(opts.rtl, me.left, me.width);
        var ctx = me.ctx;
        var position = titleOpts.position;
        var halfFontSize = titleFont.size / 2;
        var topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
        var y;
        var left = me.left;
        var maxWidth = me.width;

        if (this.isHorizontal()) {
          maxWidth = Math.max.apply(Math, _toConsumableArray(me.lineWidths));
          y = me.top + topPaddingPlusHalfFontSize;
          left = _alignStartEnd(opts.align, left, me.right - maxWidth);
        } else {
          var maxHeight = me.columnSizes.reduce(function (acc, size) {
            return Math.max(acc, size.height);
          }, 0);
          y = topPaddingPlusHalfFontSize + _alignStartEnd(opts.align, me.top, me.bottom - maxHeight - opts.labels.padding - me._computeTitleHeight());
        }

        var x = _alignStartEnd(position, left, left + maxWidth);

        ctx.textAlign = rtlHelper.textAlign(_toLeftRightCenter(position));
        ctx.textBaseline = 'middle';
        ctx.strokeStyle = titleOpts.color;
        ctx.fillStyle = titleOpts.color;
        ctx.font = titleFont.string;
        renderText(ctx, titleOpts.text, x, y, titleFont);
      }
    }, {
      key: "_computeTitleHeight",
      value: function _computeTitleHeight() {
        var titleOpts = this.options.title;
        var titleFont = toFont(titleOpts.font);
        var titlePadding = toPadding(titleOpts.padding);
        return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
      }
    }, {
      key: "_getLegendItemAt",
      value: function _getLegendItemAt(x, y) {
        var me = this;
        var i, hitBox, lh;

        if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
          lh = me.legendHitBoxes;

          for (i = 0; i < lh.length; ++i) {
            hitBox = lh[i];

            if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
              return me.legendItems[i];
            }
          }
        }

        return null;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(e) {
        var me = this;
        var opts = me.options;

        if (!isListened(e.type, opts)) {
          return;
        }

        var hoveredItem = me._getLegendItemAt(e.x, e.y);

        if (e.type === 'mousemove') {
          var previous = me._hoveredItem;
          var sameItem = itemsEqual(previous, hoveredItem);

          if (previous && !sameItem) {
            callback(opts.onLeave, [e, previous, me], me);
          }

          me._hoveredItem = hoveredItem;

          if (hoveredItem && !sameItem) {
            callback(opts.onHover, [e, hoveredItem, me], me);
          }
        } else if (hoveredItem) {
          callback(opts.onClick, [e, hoveredItem, me], me);
        }
      }
    }]);

    return Legend;
  }(Element);

  function isListened(type, opts) {
    if (type === 'mousemove' && (opts.onHover || opts.onLeave)) {
      return true;
    }

    if (opts.onClick && (type === 'click' || type === 'mouseup')) {
      return true;
    }

    return false;
  }

  var plugin_legend = {
    id: 'legend',
    _element: Legend,
    start: function start(chart, _args, options) {
      var legend = chart.legend = new Legend({
        ctx: chart.ctx,
        options: options,
        chart: chart
      });
      layouts.configure(chart, legend, options);
      layouts.addBox(chart, legend);
    },
    stop: function stop(chart) {
      layouts.removeBox(chart, chart.legend);
      delete chart.legend;
    },
    beforeUpdate: function beforeUpdate(chart, _args, options) {
      var legend = chart.legend;
      layouts.configure(chart, legend, options);
      legend.options = options;
    },
    afterUpdate: function afterUpdate(chart) {
      var legend = chart.legend;
      legend.buildLabels();
      legend.adjustHitBoxes();
    },
    afterEvent: function afterEvent(chart, args) {
      if (!args.replay) {
        chart.legend.handleEvent(args.event);
      }
    },
    defaults: {
      display: true,
      position: 'top',
      align: 'center',
      fullSize: true,
      reverse: false,
      weight: 1000,
      onClick: function onClick(e, legendItem, legend) {
        var index = legendItem.datasetIndex;
        var ci = legend.chart;

        if (ci.isDatasetVisible(index)) {
          ci.hide(index);
          legendItem.hidden = true;
        } else {
          ci.show(index);
          legendItem.hidden = false;
        }
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: function color(ctx) {
          return ctx.chart.options.color;
        },
        boxWidth: 40,
        padding: 10,
        generateLabels: function generateLabels(chart) {
          var datasets = chart.data.datasets;
          var _chart$legend$options = chart.legend.options.labels,
              usePointStyle = _chart$legend$options.usePointStyle,
              pointStyle = _chart$legend$options.pointStyle,
              textAlign = _chart$legend$options.textAlign;
          return chart._getSortedDatasetMetas().map(function (meta) {
            var style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
            var borderWidth = toPadding(style.borderWidth);
            return {
              text: datasets[meta.index].label,
              fillStyle: style.backgroundColor,
              hidden: !meta.visible,
              lineCap: style.borderCapStyle,
              lineDash: style.borderDash,
              lineDashOffset: style.borderDashOffset,
              lineJoin: style.borderJoinStyle,
              lineWidth: (borderWidth.width + borderWidth.height) / 4,
              strokeStyle: style.borderColor,
              pointStyle: pointStyle || style.pointStyle,
              rotation: style.rotation,
              textAlign: textAlign || style.textAlign,
              datasetIndex: meta.index
            };
          }, this);
        }
      },
      title: {
        color: function color(ctx) {
          return ctx.chart.options.color;
        },
        display: false,
        position: 'center',
        text: ''
      }
    },
    descriptors: {
      _scriptable: function _scriptable(name) {
        return !name.startsWith('on');
      },
      labels: {
        _scriptable: function _scriptable(name) {
          return !['generateLabels', 'filter', 'sort'].includes(name);
        }
      }
    }
  };

  var Title = /*#__PURE__*/function (_Element7) {
    _inherits(Title, _Element7);

    var _super17 = _createSuper(Title);

    function Title(config) {
      var _this11;

      _classCallCheck(this, Title);

      _this11 = _super17.call(this);
      _this11.chart = config.chart;
      _this11.options = config.options;
      _this11.ctx = config.ctx;
      _this11._padding = undefined;
      _this11.top = undefined;
      _this11.bottom = undefined;
      _this11.left = undefined;
      _this11.right = undefined;
      _this11.width = undefined;
      _this11.height = undefined;
      _this11.position = undefined;
      _this11.weight = undefined;
      _this11.fullSize = undefined;
      return _this11;
    }

    _createClass(Title, [{
      key: "update",
      value: function update(maxWidth, maxHeight) {
        var me = this;
        var opts = me.options;
        me.left = 0;
        me.top = 0;

        if (!opts.display) {
          me.width = me.height = me.right = me.bottom = 0;
          return;
        }

        me.width = me.right = maxWidth;
        me.height = me.bottom = maxHeight;
        var lineCount = isArray(opts.text) ? opts.text.length : 1;
        me._padding = toPadding(opts.padding);

        var textSize = lineCount * toFont(opts.font).lineHeight + me._padding.height;

        if (me.isHorizontal()) {
          me.height = textSize;
        } else {
          me.width = textSize;
        }
      }
    }, {
      key: "isHorizontal",
      value: function isHorizontal() {
        var pos = this.options.position;
        return pos === 'top' || pos === 'bottom';
      }
    }, {
      key: "_drawArgs",
      value: function _drawArgs(offset) {
        var top = this.top,
            left = this.left,
            bottom = this.bottom,
            right = this.right,
            options = this.options;
        var align = options.align;
        var rotation = 0;
        var maxWidth, titleX, titleY;

        if (this.isHorizontal()) {
          titleX = _alignStartEnd(align, left, right);
          titleY = top + offset;
          maxWidth = right - left;
        } else {
          if (options.position === 'left') {
            titleX = left + offset;
            titleY = _alignStartEnd(align, bottom, top);
            rotation = PI * -0.5;
          } else {
            titleX = right - offset;
            titleY = _alignStartEnd(align, top, bottom);
            rotation = PI * 0.5;
          }

          maxWidth = bottom - top;
        }

        return {
          titleX: titleX,
          titleY: titleY,
          maxWidth: maxWidth,
          rotation: rotation
        };
      }
    }, {
      key: "draw",
      value: function draw() {
        var me = this;
        var ctx = me.ctx;
        var opts = me.options;

        if (!opts.display) {
          return;
        }

        var fontOpts = toFont(opts.font);
        var lineHeight = fontOpts.lineHeight;
        var offset = lineHeight / 2 + me._padding.top;

        var _me$_drawArgs = me._drawArgs(offset),
            titleX = _me$_drawArgs.titleX,
            titleY = _me$_drawArgs.titleY,
            maxWidth = _me$_drawArgs.maxWidth,
            rotation = _me$_drawArgs.rotation;

        renderText(ctx, opts.text, 0, 0, fontOpts, {
          color: opts.color,
          maxWidth: maxWidth,
          rotation: rotation,
          textAlign: _toLeftRightCenter(opts.align),
          textBaseline: 'middle',
          translation: [titleX, titleY]
        });
      }
    }]);

    return Title;
  }(Element);

  function createTitle(chart, titleOpts) {
    var title = new Title({
      ctx: chart.ctx,
      options: titleOpts,
      chart: chart
    });
    layouts.configure(chart, title, titleOpts);
    layouts.addBox(chart, title);
    chart.titleBlock = title;
  }

  var plugin_title = {
    id: 'title',
    _element: Title,
    start: function start(chart, _args, options) {
      createTitle(chart, options);
    },
    stop: function stop(chart) {
      var titleBlock = chart.titleBlock;
      layouts.removeBox(chart, titleBlock);
      delete chart.titleBlock;
    },
    beforeUpdate: function beforeUpdate(chart, _args, options) {
      var title = chart.titleBlock;
      layouts.configure(chart, title, options);
      title.options = options;
    },
    defaults: {
      align: 'center',
      display: false,
      font: {
        style: 'bold'
      },
      fullSize: true,
      padding: 10,
      position: 'top',
      text: '',
      weight: 2000
    },
    defaultRoutes: {
      color: 'color'
    },
    descriptors: {
      _scriptable: true,
      _indexable: false
    }
  };
  var positioners = {
    average: function average(items) {
      if (!items.length) {
        return false;
      }

      var i, len;
      var x = 0;
      var y = 0;
      var count = 0;

      for (i = 0, len = items.length; i < len; ++i) {
        var el = items[i].element;

        if (el && el.hasValue()) {
          var pos = el.tooltipPosition();
          x += pos.x;
          y += pos.y;
          ++count;
        }
      }

      return {
        x: x / count,
        y: y / count
      };
    },
    nearest: function nearest(items, eventPosition) {
      var x = eventPosition.x;
      var y = eventPosition.y;
      var minDistance = Number.POSITIVE_INFINITY;
      var i, len, nearestElement;

      for (i = 0, len = items.length; i < len; ++i) {
        var el = items[i].element;

        if (el && el.hasValue()) {
          var center = el.getCenterPoint();
          var d = distanceBetweenPoints(eventPosition, center);

          if (d < minDistance) {
            minDistance = d;
            nearestElement = el;
          }
        }
      }

      if (nearestElement) {
        var tp = nearestElement.tooltipPosition();
        x = tp.x;
        y = tp.y;
      }

      return {
        x: x,
        y: y
      };
    }
  };

  function pushOrConcat(base, toPush) {
    if (toPush) {
      if (isArray(toPush)) {
        Array.prototype.push.apply(base, toPush);
      } else {
        base.push(toPush);
      }
    }

    return base;
  }

  function splitNewlines(str) {
    if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
      return str.split('\n');
    }

    return str;
  }

  function createTooltipItem(chart, item) {
    var element = item.element,
        datasetIndex = item.datasetIndex,
        index = item.index;
    var controller = chart.getDatasetMeta(datasetIndex).controller;

    var _controller$getLabelA = controller.getLabelAndValue(index),
        label = _controller$getLabelA.label,
        value = _controller$getLabelA.value;

    return {
      chart: chart,
      label: label,
      parsed: controller.getParsed(index),
      raw: chart.data.datasets[datasetIndex].data[index],
      formattedValue: value,
      dataset: controller.getDataset(),
      dataIndex: index,
      datasetIndex: datasetIndex,
      element: element
    };
  }

  function getTooltipSize(tooltip, options) {
    var ctx = tooltip._chart.ctx;
    var body = tooltip.body,
        footer = tooltip.footer,
        title = tooltip.title;
    var boxWidth = options.boxWidth,
        boxHeight = options.boxHeight;
    var bodyFont = toFont(options.bodyFont);
    var titleFont = toFont(options.titleFont);
    var footerFont = toFont(options.footerFont);
    var titleLineCount = title.length;
    var footerLineCount = footer.length;
    var bodyLineItemCount = body.length;
    var padding = toPadding(options.padding);
    var height = padding.height;
    var width = 0;
    var combinedBodyLength = body.reduce(function (count, bodyItem) {
      return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
    }, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;

    if (titleLineCount) {
      height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    }

    if (combinedBodyLength) {
      var bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
      height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }

    if (footerLineCount) {
      height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    }

    var widthPadding = 0;

    var maxLineWidth = function maxLineWidth(line) {
      width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };

    ctx.save();
    ctx.font = titleFont.string;
    each(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    each(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 : 0;
    each(body, function (bodyItem) {
      each(bodyItem.before, maxLineWidth);
      each(bodyItem.lines, maxLineWidth);
      each(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    each(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return {
      width: width,
      height: height
    };
  }

  function determineYAlign(chart, size) {
    var y = size.y,
        height = size.height;

    if (y < height / 2) {
      return 'top';
    } else if (y > chart.height - height / 2) {
      return 'bottom';
    }

    return 'center';
  }

  function doesNotFitWithAlign(xAlign, chart, options, size) {
    var x = size.x,
        width = size.width;
    var caret = options.caretSize + options.caretPadding;

    if (xAlign === 'left' && x + width + caret > chart.width) {
      return true;
    }

    if (xAlign === 'right' && x - width - caret < 0) {
      return true;
    }
  }

  function determineXAlign(chart, options, size, yAlign) {
    var x = size.x,
        width = size.width;
    var chartWidth = chart.width,
        _chart$chartArea = chart.chartArea,
        left = _chart$chartArea.left,
        right = _chart$chartArea.right;
    var xAlign = 'center';

    if (yAlign === 'center') {
      xAlign = x <= (left + right) / 2 ? 'left' : 'right';
    } else if (x <= width / 2) {
      xAlign = 'left';
    } else if (x >= chartWidth - width / 2) {
      xAlign = 'right';
    }

    if (doesNotFitWithAlign(xAlign, chart, options, size)) {
      xAlign = 'center';
    }

    return xAlign;
  }

  function determineAlignment(chart, options, size) {
    var yAlign = options.yAlign || determineYAlign(chart, size);
    return {
      xAlign: options.xAlign || determineXAlign(chart, options, size, yAlign),
      yAlign: yAlign
    };
  }

  function alignX(size, xAlign) {
    var x = size.x,
        width = size.width;

    if (xAlign === 'right') {
      x -= width;
    } else if (xAlign === 'center') {
      x -= width / 2;
    }

    return x;
  }

  function alignY(size, yAlign, paddingAndSize) {
    var y = size.y,
        height = size.height;

    if (yAlign === 'top') {
      y += paddingAndSize;
    } else if (yAlign === 'bottom') {
      y -= height + paddingAndSize;
    } else {
      y -= height / 2;
    }

    return y;
  }

  function getBackgroundPoint(options, size, alignment, chart) {
    var caretSize = options.caretSize,
        caretPadding = options.caretPadding,
        cornerRadius = options.cornerRadius;
    var xAlign = alignment.xAlign,
        yAlign = alignment.yAlign;
    var paddingAndSize = caretSize + caretPadding;
    var radiusAndPadding = cornerRadius + caretPadding;
    var x = alignX(size, xAlign);
    var y = alignY(size, yAlign, paddingAndSize);

    if (yAlign === 'center') {
      if (xAlign === 'left') {
        x += paddingAndSize;
      } else if (xAlign === 'right') {
        x -= paddingAndSize;
      }
    } else if (xAlign === 'left') {
      x -= radiusAndPadding;
    } else if (xAlign === 'right') {
      x += radiusAndPadding;
    }

    return {
      x: _limitValue(x, 0, chart.width - size.width),
      y: _limitValue(y, 0, chart.height - size.height)
    };
  }

  function getAlignedX(tooltip, align, options) {
    var padding = toPadding(options.padding);
    return align === 'center' ? tooltip.x + tooltip.width / 2 : align === 'right' ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
  }

  function getBeforeAfterBodyLines(callback) {
    return pushOrConcat([], splitNewlines(callback));
  }

  function createTooltipContext(parent, tooltip, tooltipItems) {
    return Object.assign(Object.create(parent), {
      tooltip: tooltip,
      tooltipItems: tooltipItems,
      type: 'tooltip'
    });
  }

  function overrideCallbacks(callbacks, context) {
    var override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
  }

  var Tooltip = /*#__PURE__*/function (_Element8) {
    _inherits(Tooltip, _Element8);

    var _super18 = _createSuper(Tooltip);

    function Tooltip(config) {
      var _this12;

      _classCallCheck(this, Tooltip);

      _this12 = _super18.call(this);
      _this12.opacity = 0;
      _this12._active = [];
      _this12._chart = config._chart;
      _this12._eventPosition = undefined;
      _this12._size = undefined;
      _this12._cachedAnimations = undefined;
      _this12._tooltipItems = [];
      _this12.$animations = undefined;
      _this12.$context = undefined;
      _this12.options = config.options;
      _this12.dataPoints = undefined;
      _this12.title = undefined;
      _this12.beforeBody = undefined;
      _this12.body = undefined;
      _this12.afterBody = undefined;
      _this12.footer = undefined;
      _this12.xAlign = undefined;
      _this12.yAlign = undefined;
      _this12.x = undefined;
      _this12.y = undefined;
      _this12.height = undefined;
      _this12.width = undefined;
      _this12.caretX = undefined;
      _this12.caretY = undefined;
      _this12.labelColors = undefined;
      _this12.labelPointStyles = undefined;
      _this12.labelTextColors = undefined;
      return _this12;
    }

    _createClass(Tooltip, [{
      key: "initialize",
      value: function initialize(options) {
        this.options = options;
        this._cachedAnimations = undefined;
        this.$context = undefined;
      }
    }, {
      key: "_resolveAnimations",
      value: function _resolveAnimations() {
        var me = this;
        var cached = me._cachedAnimations;

        if (cached) {
          return cached;
        }

        var chart = me._chart;
        var options = me.options.setContext(me.getContext());
        var opts = options.enabled && chart.options.animation && options.animations;
        var animations = new Animations(me._chart, opts);

        if (opts._cacheable) {
          me._cachedAnimations = Object.freeze(animations);
        }

        return animations;
      }
    }, {
      key: "getContext",
      value: function getContext() {
        var me = this;
        return me.$context || (me.$context = createTooltipContext(me._chart.getContext(), me, me._tooltipItems));
      }
    }, {
      key: "getTitle",
      value: function getTitle(context, options) {
        var me = this;
        var callbacks = options.callbacks;
        var beforeTitle = callbacks.beforeTitle.apply(me, [context]);
        var title = callbacks.title.apply(me, [context]);
        var afterTitle = callbacks.afterTitle.apply(me, [context]);
        var lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeTitle));
        lines = pushOrConcat(lines, splitNewlines(title));
        lines = pushOrConcat(lines, splitNewlines(afterTitle));
        return lines;
      }
    }, {
      key: "getBeforeBody",
      value: function getBeforeBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(options.callbacks.beforeBody.apply(this, [tooltipItems]));
      }
    }, {
      key: "getBody",
      value: function getBody(tooltipItems, options) {
        var me = this;
        var callbacks = options.callbacks;
        var bodyItems = [];
        each(tooltipItems, function (context) {
          var bodyItem = {
            before: [],
            lines: [],
            after: []
          };
          var scoped = overrideCallbacks(callbacks, context);
          pushOrConcat(bodyItem.before, splitNewlines(scoped.beforeLabel.call(me, context)));
          pushOrConcat(bodyItem.lines, scoped.label.call(me, context));
          pushOrConcat(bodyItem.after, splitNewlines(scoped.afterLabel.call(me, context)));
          bodyItems.push(bodyItem);
        });
        return bodyItems;
      }
    }, {
      key: "getAfterBody",
      value: function getAfterBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(options.callbacks.afterBody.apply(this, [tooltipItems]));
      }
    }, {
      key: "getFooter",
      value: function getFooter(tooltipItems, options) {
        var me = this;
        var callbacks = options.callbacks;
        var beforeFooter = callbacks.beforeFooter.apply(me, [tooltipItems]);
        var footer = callbacks.footer.apply(me, [tooltipItems]);
        var afterFooter = callbacks.afterFooter.apply(me, [tooltipItems]);
        var lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeFooter));
        lines = pushOrConcat(lines, splitNewlines(footer));
        lines = pushOrConcat(lines, splitNewlines(afterFooter));
        return lines;
      }
    }, {
      key: "_createItems",
      value: function _createItems(options) {
        var me = this;
        var active = me._active;
        var data = me._chart.data;
        var labelColors = [];
        var labelPointStyles = [];
        var labelTextColors = [];
        var tooltipItems = [];
        var i, len;

        for (i = 0, len = active.length; i < len; ++i) {
          tooltipItems.push(createTooltipItem(me._chart, active[i]));
        }

        if (options.filter) {
          tooltipItems = tooltipItems.filter(function (element, index, array) {
            return options.filter(element, index, array, data);
          });
        }

        if (options.itemSort) {
          tooltipItems = tooltipItems.sort(function (a, b) {
            return options.itemSort(a, b, data);
          });
        }

        each(tooltipItems, function (context) {
          var scoped = overrideCallbacks(options.callbacks, context);
          labelColors.push(scoped.labelColor.call(me, context));
          labelPointStyles.push(scoped.labelPointStyle.call(me, context));
          labelTextColors.push(scoped.labelTextColor.call(me, context));
        });
        me.labelColors = labelColors;
        me.labelPointStyles = labelPointStyles;
        me.labelTextColors = labelTextColors;
        me.dataPoints = tooltipItems;
        return tooltipItems;
      }
    }, {
      key: "update",
      value: function update(changed, replay) {
        var me = this;
        var options = me.options.setContext(me.getContext());
        var active = me._active;
        var properties;
        var tooltipItems = [];

        if (!active.length) {
          if (me.opacity !== 0) {
            properties = {
              opacity: 0
            };
          }
        } else {
          var position = positioners[options.position].call(me, active, me._eventPosition);
          tooltipItems = me._createItems(options);
          me.title = me.getTitle(tooltipItems, options);
          me.beforeBody = me.getBeforeBody(tooltipItems, options);
          me.body = me.getBody(tooltipItems, options);
          me.afterBody = me.getAfterBody(tooltipItems, options);
          me.footer = me.getFooter(tooltipItems, options);
          var size = me._size = getTooltipSize(me, options);
          var positionAndSize = Object.assign({}, position, size);
          var alignment = determineAlignment(me._chart, options, positionAndSize);
          var backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, me._chart);
          me.xAlign = alignment.xAlign;
          me.yAlign = alignment.yAlign;
          properties = {
            opacity: 1,
            x: backgroundPoint.x,
            y: backgroundPoint.y,
            width: size.width,
            height: size.height,
            caretX: position.x,
            caretY: position.y
          };
        }

        me._tooltipItems = tooltipItems;
        me.$context = undefined;

        if (properties) {
          me._resolveAnimations().update(me, properties);
        }

        if (changed && options.external) {
          options.external.call(me, {
            chart: me._chart,
            tooltip: me,
            replay: replay
          });
        }
      }
    }, {
      key: "drawCaret",
      value: function drawCaret(tooltipPoint, ctx, size, options) {
        var caretPosition = this.getCaretPosition(tooltipPoint, size, options);
        ctx.lineTo(caretPosition.x1, caretPosition.y1);
        ctx.lineTo(caretPosition.x2, caretPosition.y2);
        ctx.lineTo(caretPosition.x3, caretPosition.y3);
      }
    }, {
      key: "getCaretPosition",
      value: function getCaretPosition(tooltipPoint, size, options) {
        var xAlign = this.xAlign,
            yAlign = this.yAlign;
        var cornerRadius = options.cornerRadius,
            caretSize = options.caretSize;
        var ptX = tooltipPoint.x,
            ptY = tooltipPoint.y;
        var width = size.width,
            height = size.height;
        var x1, x2, x3, y1, y2, y3;

        if (yAlign === 'center') {
          y2 = ptY + height / 2;

          if (xAlign === 'left') {
            x1 = ptX;
            x2 = x1 - caretSize;
            y1 = y2 + caretSize;
            y3 = y2 - caretSize;
          } else {
            x1 = ptX + width;
            x2 = x1 + caretSize;
            y1 = y2 - caretSize;
            y3 = y2 + caretSize;
          }

          x3 = x1;
        } else {
          if (xAlign === 'left') {
            x2 = ptX + cornerRadius + caretSize;
          } else if (xAlign === 'right') {
            x2 = ptX + width - cornerRadius - caretSize;
          } else {
            x2 = this.caretX;
          }

          if (yAlign === 'top') {
            y1 = ptY;
            y2 = y1 - caretSize;
            x1 = x2 - caretSize;
            x3 = x2 + caretSize;
          } else {
            y1 = ptY + height;
            y2 = y1 + caretSize;
            x1 = x2 + caretSize;
            x3 = x2 - caretSize;
          }

          y3 = y1;
        }

        return {
          x1: x1,
          x2: x2,
          x3: x3,
          y1: y1,
          y2: y2,
          y3: y3
        };
      }
    }, {
      key: "drawTitle",
      value: function drawTitle(pt, ctx, options) {
        var me = this;
        var title = me.title;
        var length = title.length;
        var titleFont, titleSpacing, i;

        if (length) {
          var rtlHelper = getRtlAdapter(options.rtl, me.x, me.width);
          pt.x = getAlignedX(me, options.titleAlign, options);
          ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
          ctx.textBaseline = 'middle';
          titleFont = toFont(options.titleFont);
          titleSpacing = options.titleSpacing;
          ctx.fillStyle = options.titleColor;
          ctx.font = titleFont.string;

          for (i = 0; i < length; ++i) {
            ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
            pt.y += titleFont.lineHeight + titleSpacing;

            if (i + 1 === length) {
              pt.y += options.titleMarginBottom - titleSpacing;
            }
          }
        }
      }
    }, {
      key: "_drawColorBox",
      value: function _drawColorBox(ctx, pt, i, rtlHelper, options) {
        var me = this;
        var labelColors = me.labelColors[i];
        var labelPointStyle = me.labelPointStyles[i];
        var boxHeight = options.boxHeight,
            boxWidth = options.boxWidth;
        var bodyFont = toFont(options.bodyFont);
        var colorX = getAlignedX(me, 'left', options);
        var rtlColorX = rtlHelper.x(colorX);
        var yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
        var colorY = pt.y + yOffSet;

        if (options.usePointStyle) {
          var drawOptions = {
            radius: Math.min(boxWidth, boxHeight) / 2,
            pointStyle: labelPointStyle.pointStyle,
            rotation: labelPointStyle.rotation,
            borderWidth: 1
          };
          var centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
          var centerY = colorY + boxHeight / 2;
          ctx.strokeStyle = options.multiKeyBackground;
          ctx.fillStyle = options.multiKeyBackground;
          drawPoint(ctx, drawOptions, centerX, centerY);
          ctx.strokeStyle = labelColors.borderColor;
          ctx.fillStyle = labelColors.backgroundColor;
          drawPoint(ctx, drawOptions, centerX, centerY);
        } else {
          ctx.fillStyle = options.multiKeyBackground;
          ctx.fillRect(rtlHelper.leftForLtr(rtlColorX, boxWidth), colorY, boxWidth, boxHeight);
          ctx.lineWidth = 1;
          ctx.strokeStyle = labelColors.borderColor;
          ctx.strokeRect(rtlHelper.leftForLtr(rtlColorX, boxWidth), colorY, boxWidth, boxHeight);
          ctx.fillStyle = labelColors.backgroundColor;
          ctx.fillRect(rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2), colorY + 1, boxWidth - 2, boxHeight - 2);
        }

        ctx.fillStyle = me.labelTextColors[i];
      }
    }, {
      key: "drawBody",
      value: function drawBody(pt, ctx, options) {
        var me = this;
        var body = me.body;
        var bodySpacing = options.bodySpacing,
            bodyAlign = options.bodyAlign,
            displayColors = options.displayColors,
            boxHeight = options.boxHeight,
            boxWidth = options.boxWidth;
        var bodyFont = toFont(options.bodyFont);
        var bodyLineHeight = bodyFont.lineHeight;
        var xLinePadding = 0;
        var rtlHelper = getRtlAdapter(options.rtl, me.x, me.width);

        var fillLineOfText = function fillLineOfText(line) {
          ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
          pt.y += bodyLineHeight + bodySpacing;
        };

        var bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
        var bodyItem, textColor, lines, i, j, ilen, jlen;
        ctx.textAlign = bodyAlign;
        ctx.textBaseline = 'middle';
        ctx.font = bodyFont.string;
        pt.x = getAlignedX(me, bodyAlignForCalculation, options);
        ctx.fillStyle = options.bodyColor;
        each(me.beforeBody, fillLineOfText);
        xLinePadding = displayColors && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? boxWidth / 2 + 1 : boxWidth + 2 : 0;

        for (i = 0, ilen = body.length; i < ilen; ++i) {
          bodyItem = body[i];
          textColor = me.labelTextColors[i];
          ctx.fillStyle = textColor;
          each(bodyItem.before, fillLineOfText);
          lines = bodyItem.lines;

          if (displayColors && lines.length) {
            me._drawColorBox(ctx, pt, i, rtlHelper, options);

            bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
          }

          for (j = 0, jlen = lines.length; j < jlen; ++j) {
            fillLineOfText(lines[j]);
            bodyLineHeight = bodyFont.lineHeight;
          }

          each(bodyItem.after, fillLineOfText);
        }

        xLinePadding = 0;
        bodyLineHeight = bodyFont.lineHeight;
        each(me.afterBody, fillLineOfText);
        pt.y -= bodySpacing;
      }
    }, {
      key: "drawFooter",
      value: function drawFooter(pt, ctx, options) {
        var me = this;
        var footer = me.footer;
        var length = footer.length;
        var footerFont, i;

        if (length) {
          var rtlHelper = getRtlAdapter(options.rtl, me.x, me.width);
          pt.x = getAlignedX(me, options.footerAlign, options);
          pt.y += options.footerMarginTop;
          ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
          ctx.textBaseline = 'middle';
          footerFont = toFont(options.footerFont);
          ctx.fillStyle = options.footerColor;
          ctx.font = footerFont.string;

          for (i = 0; i < length; ++i) {
            ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
            pt.y += footerFont.lineHeight + options.footerSpacing;
          }
        }
      }
    }, {
      key: "drawBackground",
      value: function drawBackground(pt, ctx, tooltipSize, options) {
        var xAlign = this.xAlign,
            yAlign = this.yAlign;
        var x = pt.x,
            y = pt.y;
        var width = tooltipSize.width,
            height = tooltipSize.height;
        var radius = options.cornerRadius;
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.beginPath();
        ctx.moveTo(x + radius, y);

        if (yAlign === 'top') {
          this.drawCaret(pt, ctx, tooltipSize, options);
        }

        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);

        if (yAlign === 'center' && xAlign === 'right') {
          this.drawCaret(pt, ctx, tooltipSize, options);
        }

        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

        if (yAlign === 'bottom') {
          this.drawCaret(pt, ctx, tooltipSize, options);
        }

        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);

        if (yAlign === 'center' && xAlign === 'left') {
          this.drawCaret(pt, ctx, tooltipSize, options);
        }

        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        ctx.fill();

        if (options.borderWidth > 0) {
          ctx.stroke();
        }
      }
    }, {
      key: "_updateAnimationTarget",
      value: function _updateAnimationTarget(options) {
        var me = this;
        var chart = me._chart;
        var anims = me.$animations;
        var animX = anims && anims.x;
        var animY = anims && anims.y;

        if (animX || animY) {
          var position = positioners[options.position].call(me, me._active, me._eventPosition);

          if (!position) {
            return;
          }

          var size = me._size = getTooltipSize(me, options);
          var positionAndSize = Object.assign({}, position, me._size);
          var alignment = determineAlignment(chart, options, positionAndSize);
          var point = getBackgroundPoint(options, positionAndSize, alignment, chart);

          if (animX._to !== point.x || animY._to !== point.y) {
            me.xAlign = alignment.xAlign;
            me.yAlign = alignment.yAlign;
            me.width = size.width;
            me.height = size.height;
            me.caretX = position.x;
            me.caretY = position.y;

            me._resolveAnimations().update(me, point);
          }
        }
      }
    }, {
      key: "draw",
      value: function draw(ctx) {
        var me = this;
        var options = me.options.setContext(me.getContext());
        var opacity = me.opacity;

        if (!opacity) {
          return;
        }

        me._updateAnimationTarget(options);

        var tooltipSize = {
          width: me.width,
          height: me.height
        };
        var pt = {
          x: me.x,
          y: me.y
        };
        opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
        var padding = toPadding(options.padding);
        var hasTooltipContent = me.title.length || me.beforeBody.length || me.body.length || me.afterBody.length || me.footer.length;

        if (options.enabled && hasTooltipContent) {
          ctx.save();
          ctx.globalAlpha = opacity;
          me.drawBackground(pt, ctx, tooltipSize, options);
          overrideTextDirection(ctx, options.textDirection);
          pt.y += padding.top;
          me.drawTitle(pt, ctx, options);
          me.drawBody(pt, ctx, options);
          me.drawFooter(pt, ctx, options);
          restoreTextDirection(ctx, options.textDirection);
          ctx.restore();
        }
      }
    }, {
      key: "getActiveElements",
      value: function getActiveElements() {
        return this._active || [];
      }
    }, {
      key: "setActiveElements",
      value: function setActiveElements(activeElements, eventPosition) {
        var me = this;
        var lastActive = me._active;
        var active = activeElements.map(function (_ref7) {
          var datasetIndex = _ref7.datasetIndex,
              index = _ref7.index;

          var meta = me._chart.getDatasetMeta(datasetIndex);

          if (!meta) {
            throw new Error('Cannot find a dataset at index ' + datasetIndex);
          }

          return {
            datasetIndex: datasetIndex,
            element: meta.data[index],
            index: index
          };
        });
        var changed = !_elementsEqual(lastActive, active);

        var positionChanged = me._positionChanged(active, eventPosition);

        if (changed || positionChanged) {
          me._active = active;
          me._eventPosition = eventPosition;
          me.update(true);
        }
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(e, replay) {
        var me = this;
        var options = me.options;
        var lastActive = me._active || [];
        var changed = false;
        var active = [];

        if (e.type !== 'mouseout') {
          active = me._chart.getElementsAtEventForMode(e, options.mode, options, replay);

          if (options.reverse) {
            active.reverse();
          }
        }

        var positionChanged = me._positionChanged(active, e);

        changed = replay || !_elementsEqual(active, lastActive) || positionChanged;

        if (changed) {
          me._active = active;

          if (options.enabled || options.external) {
            me._eventPosition = {
              x: e.x,
              y: e.y
            };
            me.update(true, replay);
          }
        }

        return changed;
      }
    }, {
      key: "_positionChanged",
      value: function _positionChanged(active, e) {
        var me = this;
        var position = positioners[me.options.position].call(me, active, e);
        return me.caretX !== position.x || me.caretY !== position.y;
      }
    }]);

    return Tooltip;
  }(Element);

  Tooltip.positioners = positioners;
  var plugin_tooltip = {
    id: 'tooltip',
    _element: Tooltip,
    positioners: positioners,
    afterInit: function afterInit(chart, _args, options) {
      if (options) {
        chart.tooltip = new Tooltip({
          _chart: chart,
          options: options
        });
      }
    },
    beforeUpdate: function beforeUpdate(chart, _args, options) {
      if (chart.tooltip) {
        chart.tooltip.initialize(options);
      }
    },
    reset: function reset(chart, _args, options) {
      if (chart.tooltip) {
        chart.tooltip.initialize(options);
      }
    },
    afterDraw: function afterDraw(chart) {
      var tooltip = chart.tooltip;
      var args = {
        tooltip: tooltip
      };

      if (chart.notifyPlugins('beforeTooltipDraw', args) === false) {
        return;
      }

      if (tooltip) {
        tooltip.draw(chart.ctx);
      }

      chart.notifyPlugins('afterTooltipDraw', args);
    },
    afterEvent: function afterEvent(chart, args) {
      if (chart.tooltip) {
        var useFinalPosition = args.replay;

        if (chart.tooltip.handleEvent(args.event, useFinalPosition)) {
          args.changed = true;
        }
      }
    },
    defaults: {
      enabled: true,
      external: null,
      position: 'average',
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleColor: '#fff',
      titleFont: {
        style: 'bold'
      },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: 'left',
      bodyColor: '#fff',
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: 'left',
      footerColor: '#fff',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: {
        style: 'bold'
      },
      footerAlign: 'left',
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: function boxHeight(ctx, opts) {
        return opts.bodyFont.size;
      },
      boxWidth: function boxWidth(ctx, opts) {
        return opts.bodyFont.size;
      },
      multiKeyBackground: '#fff',
      displayColors: true,
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      animation: {
        duration: 400,
        easing: 'easeOutQuart'
      },
      animations: {
        numbers: {
          type: 'number',
          properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY']
        },
        opacity: {
          easing: 'linear',
          duration: 200
        }
      },
      callbacks: {
        beforeTitle: noop,
        title: function title(tooltipItems) {
          if (tooltipItems.length > 0) {
            var item = tooltipItems[0];
            var labels = item.chart.data.labels;
            var labelCount = labels ? labels.length : 0;

            if (this && this.options && this.options.mode === 'dataset') {
              return item.dataset.label || '';
            } else if (item.label) {
              return item.label;
            } else if (labelCount > 0 && item.dataIndex < labelCount) {
              return labels[item.dataIndex];
            }
          }

          return '';
        },
        afterTitle: noop,
        beforeBody: noop,
        beforeLabel: noop,
        label: function label(tooltipItem) {
          if (this && this.options && this.options.mode === 'dataset') {
            return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
          }

          var label = tooltipItem.dataset.label || '';

          if (label) {
            label += ': ';
          }

          var value = tooltipItem.formattedValue;

          if (!isNullOrUndef(value)) {
            label += value;
          }

          return label;
        },
        labelColor: function labelColor(tooltipItem) {
          var meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
          var options = meta.controller.getStyle(tooltipItem.dataIndex);
          return {
            borderColor: options.borderColor,
            backgroundColor: options.backgroundColor
          };
        },
        labelTextColor: function labelTextColor() {
          return this.options.bodyColor;
        },
        labelPointStyle: function labelPointStyle(tooltipItem) {
          var meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
          var options = meta.controller.getStyle(tooltipItem.dataIndex);
          return {
            pointStyle: options.pointStyle,
            rotation: options.rotation
          };
        },
        afterLabel: noop,
        afterBody: noop,
        beforeFooter: noop,
        footer: noop,
        afterFooter: noop
      }
    },
    defaultRoutes: {
      bodyFont: 'font',
      footerFont: 'font',
      titleFont: 'font'
    },
    descriptors: {
      _scriptable: function _scriptable(name) {
        return name !== 'filter' && name !== 'itemSort' && name !== 'external';
      },
      _indexable: false,
      callbacks: {
        _scriptable: false,
        _indexable: false
      },
      animation: {
        _fallback: false
      },
      animations: {
        _fallback: 'animation'
      }
    },
    additionalOptionScopes: ['interaction']
  };
  var plugins = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Decimation: plugin_decimation,
    Filler: plugin_filler,
    Legend: plugin_legend,
    Title: plugin_title,
    Tooltip: plugin_tooltip
  });

  var addIfString = function addIfString(labels, raw, index) {
    return typeof raw === 'string' ? labels.push(raw) - 1 : isNaN(raw) ? null : index;
  };

  function findOrAddLabel(labels, raw, index) {
    var first = labels.indexOf(raw);

    if (first === -1) {
      return addIfString(labels, raw, index);
    }

    var last = labels.lastIndexOf(raw);
    return first !== last ? index : first;
  }

  var validIndex = function validIndex(index, max) {
    return index === null ? null : _limitValue(Math.round(index), 0, max);
  };

  var CategoryScale = /*#__PURE__*/function (_Scale) {
    _inherits(CategoryScale, _Scale);

    var _super19 = _createSuper(CategoryScale);

    function CategoryScale(cfg) {
      var _this13;

      _classCallCheck(this, CategoryScale);

      _this13 = _super19.call(this, cfg);
      _this13._startValue = undefined;
      _this13._valueRange = 0;
      return _this13;
    }

    _createClass(CategoryScale, [{
      key: "parse",
      value: function parse(raw, index) {
        if (isNullOrUndef(raw)) {
          return null;
        }

        var labels = this.getLabels();
        index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, valueOrDefault(index, raw));
        return validIndex(index, labels.length - 1);
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var me = this;

        var _me$getUserBounds2 = me.getUserBounds(),
            minDefined = _me$getUserBounds2.minDefined,
            maxDefined = _me$getUserBounds2.maxDefined;

        var _me$getMinMax = me.getMinMax(true),
            min = _me$getMinMax.min,
            max = _me$getMinMax.max;

        if (me.options.bounds === 'ticks') {
          if (!minDefined) {
            min = 0;
          }

          if (!maxDefined) {
            max = me.getLabels().length - 1;
          }
        }

        me.min = min;
        me.max = max;
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var me = this;
        var min = me.min;
        var max = me.max;
        var offset = me.options.offset;
        var ticks = [];
        var labels = me.getLabels();
        labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
        me._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
        me._startValue = me.min - (offset ? 0.5 : 0);

        for (var value = min; value <= max; value++) {
          ticks.push({
            value: value
          });
        }

        return ticks;
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(value) {
        var me = this;
        var labels = me.getLabels();

        if (value >= 0 && value < labels.length) {
          return labels[value];
        }

        return value;
      }
    }, {
      key: "configure",
      value: function configure() {
        var me = this;

        _get2(_getPrototypeOf(CategoryScale.prototype), "configure", this).call(this);

        if (!me.isHorizontal()) {
          me._reversePixels = !me._reversePixels;
        }
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(value) {
        var me = this;

        if (typeof value !== 'number') {
          value = me.parse(value);
        }

        return value === null ? NaN : me.getPixelForDecimal((value - me._startValue) / me._valueRange);
      }
    }, {
      key: "getPixelForTick",
      value: function getPixelForTick(index) {
        var me = this;
        var ticks = me.ticks;

        if (index < 0 || index > ticks.length - 1) {
          return null;
        }

        return me.getPixelForValue(ticks[index].value);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(pixel) {
        var me = this;
        return Math.round(me._startValue + me.getDecimalForPixel(pixel) * me._valueRange);
      }
    }, {
      key: "getBasePixel",
      value: function getBasePixel() {
        return this.bottom;
      }
    }]);

    return CategoryScale;
  }(Scale);

  CategoryScale.id = 'category';
  CategoryScale.defaults = {
    ticks: {
      callback: CategoryScale.prototype.getLabelForValue
    }
  };

  function generateTicks$1(generationOptions, dataRange) {
    var ticks = [];
    var MIN_SPACING = 1e-14;
    var step = generationOptions.step,
        min = generationOptions.min,
        max = generationOptions.max,
        precision = generationOptions.precision,
        count = generationOptions.count,
        maxTicks = generationOptions.maxTicks;
    var unit = step || 1;
    var maxSpaces = maxTicks - 1;
    var rmin = dataRange.min,
        rmax = dataRange.max;
    var minDefined = !isNullOrUndef(min);
    var maxDefined = !isNullOrUndef(max);
    var countDefined = !isNullOrUndef(count);
    var spacing = niceNum((rmax - rmin) / maxSpaces / unit) * unit;
    var factor, niceMin, niceMax, numSpaces;

    if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
      return [{
        value: rmin
      }, {
        value: rmax
      }];
    }

    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);

    if (numSpaces > maxSpaces) {
      spacing = niceNum(numSpaces * spacing / maxSpaces / unit) * unit;
    }

    if (!isNullOrUndef(precision)) {
      factor = Math.pow(10, precision);
      spacing = Math.ceil(spacing * factor) / factor;
    }

    niceMin = Math.floor(rmin / spacing) * spacing;
    niceMax = Math.ceil(rmax / spacing) * spacing;

    if (minDefined && maxDefined && step && almostWhole((max - min) / step, spacing / 1000)) {
      numSpaces = Math.min((max - min) / spacing, maxTicks);
      spacing = (max - min) / numSpaces;
      niceMin = min;
      niceMax = max;
    } else if (countDefined) {
      niceMin = minDefined ? min : niceMin;
      niceMax = maxDefined ? max : niceMax;
      numSpaces = count - 1;
      spacing = (niceMax - niceMin) / numSpaces;
    } else {
      numSpaces = (niceMax - niceMin) / spacing;

      if (almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
        numSpaces = Math.round(numSpaces);
      } else {
        numSpaces = Math.ceil(numSpaces);
      }
    }

    factor = Math.pow(10, isNullOrUndef(precision) ? _decimalPlaces(spacing) : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    var j = 0;

    if (minDefined) {
      ticks.push({
        value: min
      });

      if (niceMin < min) {
        j++;
      }

      if (almostWhole(Math.round((niceMin + j * spacing) * factor) / factor / min, spacing / 1000)) {
        j++;
      }
    }

    for (; j < numSpaces; ++j) {
      ticks.push({
        value: Math.round((niceMin + j * spacing) * factor) / factor
      });
    }

    if (maxDefined) {
      if (almostWhole(ticks[ticks.length - 1].value / max, spacing / 1000)) {
        ticks[ticks.length - 1].value = max;
      } else {
        ticks.push({
          value: max
        });
      }
    } else {
      ticks.push({
        value: niceMax
      });
    }

    return ticks;
  }

  var LinearScaleBase = /*#__PURE__*/function (_Scale2) {
    _inherits(LinearScaleBase, _Scale2);

    var _super20 = _createSuper(LinearScaleBase);

    function LinearScaleBase(cfg) {
      var _this14;

      _classCallCheck(this, LinearScaleBase);

      _this14 = _super20.call(this, cfg);
      _this14.start = undefined;
      _this14.end = undefined;
      _this14._startValue = undefined;
      _this14._endValue = undefined;
      _this14._valueRange = 0;
      return _this14;
    }

    _createClass(LinearScaleBase, [{
      key: "parse",
      value: function parse(raw, index) {
        if (isNullOrUndef(raw)) {
          return null;
        }

        if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) {
          return null;
        }

        return +raw;
      }
    }, {
      key: "handleTickRangeOptions",
      value: function handleTickRangeOptions() {
        var me = this;
        var _me$options7 = me.options,
            beginAtZero = _me$options7.beginAtZero,
            stacked = _me$options7.stacked;

        var _me$getUserBounds3 = me.getUserBounds(),
            minDefined = _me$getUserBounds3.minDefined,
            maxDefined = _me$getUserBounds3.maxDefined;

        var min = me.min,
            max = me.max;

        var setMin = function setMin(v) {
          return min = minDefined ? min : v;
        };

        var setMax = function setMax(v) {
          return max = maxDefined ? max : v;
        };

        if (beginAtZero || stacked) {
          var minSign = sign(min);
          var maxSign = sign(max);

          if (minSign < 0 && maxSign < 0) {
            setMax(0);
          } else if (minSign > 0 && maxSign > 0) {
            setMin(0);
          }
        }

        if (min === max) {
          setMax(max + 1);

          if (!beginAtZero) {
            setMin(min - 1);
          }
        }

        me.min = min;
        me.max = max;
      }
    }, {
      key: "getTickLimit",
      value: function getTickLimit() {
        var me = this;
        var tickOpts = me.options.ticks;
        var maxTicksLimit = tickOpts.maxTicksLimit,
            stepSize = tickOpts.stepSize;
        var maxTicks;

        if (stepSize) {
          maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
        } else {
          maxTicks = me.computeTickLimit();
          maxTicksLimit = maxTicksLimit || 11;
        }

        if (maxTicksLimit) {
          maxTicks = Math.min(maxTicksLimit, maxTicks);
        }

        return maxTicks;
      }
    }, {
      key: "computeTickLimit",
      value: function computeTickLimit() {
        return Number.POSITIVE_INFINITY;
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var me = this;
        var opts = me.options;
        var tickOpts = opts.ticks;
        var maxTicks = me.getTickLimit();
        maxTicks = Math.max(2, maxTicks);
        var numericGeneratorOptions = {
          maxTicks: maxTicks,
          min: opts.min,
          max: opts.max,
          precision: tickOpts.precision,
          step: tickOpts.stepSize,
          count: tickOpts.count
        };
        var ticks = generateTicks$1(numericGeneratorOptions, _addGrace(me, opts.grace));

        if (opts.bounds === 'ticks') {
          _setMinAndMaxByKey(ticks, me, 'value');
        }

        if (opts.reverse) {
          ticks.reverse();
          me.start = me.max;
          me.end = me.min;
        } else {
          me.start = me.min;
          me.end = me.max;
        }

        return ticks;
      }
    }, {
      key: "configure",
      value: function configure() {
        var me = this;
        var ticks = me.ticks;
        var start = me.min;
        var end = me.max;

        _get2(_getPrototypeOf(LinearScaleBase.prototype), "configure", this).call(this);

        if (me.options.offset && ticks.length) {
          var offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
          start -= offset;
          end += offset;
        }

        me._startValue = start;
        me._endValue = end;
        me._valueRange = end - start;
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(value) {
        return formatNumber(value, this.chart.options.locale);
      }
    }]);

    return LinearScaleBase;
  }(Scale);

  var LinearScale = /*#__PURE__*/function (_LinearScaleBase) {
    _inherits(LinearScale, _LinearScaleBase);

    var _super21 = _createSuper(LinearScale);

    function LinearScale() {
      _classCallCheck(this, LinearScale);

      return _super21.apply(this, arguments);
    }

    _createClass(LinearScale, [{
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var me = this;

        var _me$getMinMax2 = me.getMinMax(true),
            min = _me$getMinMax2.min,
            max = _me$getMinMax2.max;

        me.min = isNumberFinite(min) ? min : 0;
        me.max = isNumberFinite(max) ? max : 1;
        me.handleTickRangeOptions();
      }
    }, {
      key: "computeTickLimit",
      value: function computeTickLimit() {
        var me = this;

        if (me.isHorizontal()) {
          return Math.ceil(me.width / 40);
        }

        var tickFont = me._resolveTickFontOptions(0);

        return Math.ceil(me.height / tickFont.lineHeight);
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(value) {
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(pixel) {
        return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
      }
    }]);

    return LinearScale;
  }(LinearScaleBase);

  LinearScale.id = 'linear';
  LinearScale.defaults = {
    ticks: {
      callback: Ticks.formatters.numeric
    }
  };

  function isMajor(tickVal) {
    var remain = tickVal / Math.pow(10, Math.floor(log10(tickVal)));
    return remain === 1;
  }

  function generateTicks(generationOptions, dataRange) {
    var endExp = Math.floor(log10(dataRange.max));
    var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
    var ticks = [];
    var tickVal = finiteOrDefault(generationOptions.min, Math.pow(10, Math.floor(log10(dataRange.min))));
    var exp = Math.floor(log10(tickVal));
    var significand = Math.floor(tickVal / Math.pow(10, exp));
    var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;

    do {
      ticks.push({
        value: tickVal,
        major: isMajor(tickVal)
      });
      ++significand;

      if (significand === 10) {
        significand = 1;
        ++exp;
        precision = exp >= 0 ? 1 : precision;
      }

      tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
    } while (exp < endExp || exp === endExp && significand < endSignificand);

    var lastTick = finiteOrDefault(generationOptions.max, tickVal);
    ticks.push({
      value: lastTick,
      major: isMajor(tickVal)
    });
    return ticks;
  }

  var LogarithmicScale = /*#__PURE__*/function (_Scale3) {
    _inherits(LogarithmicScale, _Scale3);

    var _super22 = _createSuper(LogarithmicScale);

    function LogarithmicScale(cfg) {
      var _this15;

      _classCallCheck(this, LogarithmicScale);

      _this15 = _super22.call(this, cfg);
      _this15.start = undefined;
      _this15.end = undefined;
      _this15._startValue = undefined;
      _this15._valueRange = 0;
      return _this15;
    }

    _createClass(LogarithmicScale, [{
      key: "parse",
      value: function parse(raw, index) {
        var value = LinearScaleBase.prototype.parse.apply(this, [raw, index]);

        if (value === 0) {
          this._zero = true;
          return undefined;
        }

        return isNumberFinite(value) && value > 0 ? value : null;
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var me = this;

        var _me$getMinMax3 = me.getMinMax(true),
            min = _me$getMinMax3.min,
            max = _me$getMinMax3.max;

        me.min = isNumberFinite(min) ? Math.max(0, min) : null;
        me.max = isNumberFinite(max) ? Math.max(0, max) : null;

        if (me.options.beginAtZero) {
          me._zero = true;
        }

        me.handleTickRangeOptions();
      }
    }, {
      key: "handleTickRangeOptions",
      value: function handleTickRangeOptions() {
        var me = this;

        var _me$getUserBounds4 = me.getUserBounds(),
            minDefined = _me$getUserBounds4.minDefined,
            maxDefined = _me$getUserBounds4.maxDefined;

        var min = me.min;
        var max = me.max;

        var setMin = function setMin(v) {
          return min = minDefined ? min : v;
        };

        var setMax = function setMax(v) {
          return max = maxDefined ? max : v;
        };

        var exp = function exp(v, m) {
          return Math.pow(10, Math.floor(log10(v)) + m);
        };

        if (min === max) {
          if (min <= 0) {
            setMin(1);
            setMax(10);
          } else {
            setMin(exp(min, -1));
            setMax(exp(max, +1));
          }
        }

        if (min <= 0) {
          setMin(exp(max, -1));
        }

        if (max <= 0) {
          setMax(exp(min, +1));
        }

        if (me._zero && me.min !== me._suggestedMin && min === exp(me.min, 0)) {
          setMin(exp(min, -1));
        }

        me.min = min;
        me.max = max;
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var me = this;
        var opts = me.options;
        var generationOptions = {
          min: me._userMin,
          max: me._userMax
        };
        var ticks = generateTicks(generationOptions, me);

        if (opts.bounds === 'ticks') {
          _setMinAndMaxByKey(ticks, me, 'value');
        }

        if (opts.reverse) {
          ticks.reverse();
          me.start = me.max;
          me.end = me.min;
        } else {
          me.start = me.min;
          me.end = me.max;
        }

        return ticks;
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(value) {
        return value === undefined ? '0' : formatNumber(value, this.chart.options.locale);
      }
    }, {
      key: "configure",
      value: function configure() {
        var me = this;
        var start = me.min;

        _get2(_getPrototypeOf(LogarithmicScale.prototype), "configure", this).call(this);

        me._startValue = log10(start);
        me._valueRange = log10(me.max) - log10(start);
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(value) {
        var me = this;

        if (value === undefined || value === 0) {
          value = me.min;
        }

        return me.getPixelForDecimal(value === me.min ? 0 : (log10(value) - me._startValue) / me._valueRange);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(pixel) {
        var me = this;
        var decimal = me.getDecimalForPixel(pixel);
        return Math.pow(10, me._startValue + decimal * me._valueRange);
      }
    }]);

    return LogarithmicScale;
  }(Scale);

  LogarithmicScale.id = 'logarithmic';
  LogarithmicScale.defaults = {
    ticks: {
      callback: Ticks.formatters.logarithmic,
      major: {
        enabled: true
      }
    }
  };

  function getTickBackdropHeight(opts) {
    var tickOpts = opts.ticks;

    if (tickOpts.display && opts.display) {
      var padding = toPadding(tickOpts.backdropPadding);
      return valueOrDefault(tickOpts.font && tickOpts.font.size, defaults.font.size) + padding.height;
    }

    return 0;
  }

  function measureLabelSize(ctx, lineHeight, label) {
    if (isArray(label)) {
      return {
        w: _longestText(ctx, ctx.font, label),
        h: label.length * lineHeight
      };
    }

    return {
      w: ctx.measureText(label).width,
      h: lineHeight
    };
  }

  function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) {
      return {
        start: pos - size / 2,
        end: pos + size / 2
      };
    } else if (angle < min || angle > max) {
      return {
        start: pos - size,
        end: pos
      };
    }

    return {
      start: pos,
      end: pos + size
    };
  }

  function fitWithPointLabels(scale) {
    var furthestLimits = {
      l: 0,
      r: scale.width,
      t: 0,
      b: scale.height - scale.paddingTop
    };
    var furthestAngles = {};
    var i, textSize, pointPosition;
    var labelSizes = [];
    var padding = [];
    var valueCount = scale.getLabels().length;

    for (i = 0; i < valueCount; i++) {
      var _opts = scale.options.pointLabels.setContext(scale.getContext(i));

      padding[i] = _opts.padding;
      pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i]);
      var plFont = toFont(_opts.font);
      scale.ctx.font = plFont.string;
      textSize = measureLabelSize(scale.ctx, plFont.lineHeight, scale._pointLabels[i]);
      labelSizes[i] = textSize;
      var angleRadians = scale.getIndexAngle(i);
      var angle = toDegrees(angleRadians);
      var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
      var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

      if (hLimits.start < furthestLimits.l) {
        furthestLimits.l = hLimits.start;
        furthestAngles.l = angleRadians;
      }

      if (hLimits.end > furthestLimits.r) {
        furthestLimits.r = hLimits.end;
        furthestAngles.r = angleRadians;
      }

      if (vLimits.start < furthestLimits.t) {
        furthestLimits.t = vLimits.start;
        furthestAngles.t = angleRadians;
      }

      if (vLimits.end > furthestLimits.b) {
        furthestLimits.b = vLimits.end;
        furthestAngles.b = angleRadians;
      }
    }

    scale._setReductions(scale.drawingArea, furthestLimits, furthestAngles);

    scale._pointLabelItems = [];
    var opts = scale.options;
    var tickBackdropHeight = getTickBackdropHeight(opts);
    var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);

    for (i = 0; i < valueCount; i++) {
      var extra = i === 0 ? tickBackdropHeight / 2 : 0;
      var pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i]);

      var _angle = toDegrees(scale.getIndexAngle(i));

      var size = labelSizes[i];
      adjustPointPositionForLabelHeight(_angle, size, pointLabelPosition);
      var textAlign = getTextAlignForAngle(_angle);
      var left = void 0;

      if (textAlign === 'left') {
        left = pointLabelPosition.x;
      } else if (textAlign === 'center') {
        left = pointLabelPosition.x - size.w / 2;
      } else {
        left = pointLabelPosition.x - size.w;
      }

      var right = left + size.w;
      scale._pointLabelItems[i] = {
        x: pointLabelPosition.x,
        y: pointLabelPosition.y,
        textAlign: textAlign,
        left: left,
        top: pointLabelPosition.y,
        right: right,
        bottom: pointLabelPosition.y + size.h
      };
    }
  }

  function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) {
      return 'center';
    } else if (angle < 180) {
      return 'left';
    }

    return 'right';
  }

  function adjustPointPositionForLabelHeight(angle, textSize, position) {
    if (angle === 90 || angle === 270) {
      position.y -= textSize.h / 2;
    } else if (angle > 270 || angle < 90) {
      position.y -= textSize.h;
    }
  }

  function drawPointLabels(scale, labelCount) {
    var ctx = scale.ctx,
        pointLabels = scale.options.pointLabels;

    for (var i = labelCount - 1; i >= 0; i--) {
      var optsAtIndex = pointLabels.setContext(scale.getContext(i));
      var plFont = toFont(optsAtIndex.font);
      var _scale$_pointLabelIte = scale._pointLabelItems[i],
          x = _scale$_pointLabelIte.x,
          y = _scale$_pointLabelIte.y,
          textAlign = _scale$_pointLabelIte.textAlign,
          left = _scale$_pointLabelIte.left,
          top = _scale$_pointLabelIte.top,
          right = _scale$_pointLabelIte.right,
          bottom = _scale$_pointLabelIte.bottom;
      var backdropColor = optsAtIndex.backdropColor;

      if (!isNullOrUndef(backdropColor)) {
        var padding = toPadding(optsAtIndex.backdropPadding);
        ctx.fillStyle = backdropColor;
        ctx.fillRect(left - padding.left, top - padding.top, right - left + padding.width, bottom - top + padding.height);
      }

      renderText(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
        color: optsAtIndex.color,
        textAlign: textAlign,
        textBaseline: 'middle'
      });
    }
  }

  function pathRadiusLine(scale, radius, circular, labelCount) {
    var ctx = scale.ctx;

    if (circular) {
      ctx.arc(scale.xCenter, scale.yCenter, radius, 0, TAU);
    } else {
      var pointPosition = scale.getPointPosition(0, radius);
      ctx.moveTo(pointPosition.x, pointPosition.y);

      for (var i = 1; i < labelCount; i++) {
        pointPosition = scale.getPointPosition(i, radius);
        ctx.lineTo(pointPosition.x, pointPosition.y);
      }
    }
  }

  function drawRadiusLine(scale, gridLineOpts, radius, labelCount) {
    var ctx = scale.ctx;
    var circular = gridLineOpts.circular;
    var color = gridLineOpts.color,
        lineWidth = gridLineOpts.lineWidth;

    if (!circular && !labelCount || !color || !lineWidth || radius < 0) {
      return;
    }

    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(gridLineOpts.borderDash);
    ctx.lineDashOffset = gridLineOpts.borderDashOffset;
    ctx.beginPath();
    pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  function numberOrZero(param) {
    return isNumber(param) ? param : 0;
  }

  var RadialLinearScale = /*#__PURE__*/function (_LinearScaleBase2) {
    _inherits(RadialLinearScale, _LinearScaleBase2);

    var _super23 = _createSuper(RadialLinearScale);

    function RadialLinearScale(cfg) {
      var _this16;

      _classCallCheck(this, RadialLinearScale);

      _this16 = _super23.call(this, cfg);
      _this16.xCenter = undefined;
      _this16.yCenter = undefined;
      _this16.drawingArea = undefined;
      _this16._pointLabels = [];
      _this16._pointLabelItems = [];
      return _this16;
    }

    _createClass(RadialLinearScale, [{
      key: "setDimensions",
      value: function setDimensions() {
        var me = this;
        me.width = me.maxWidth;
        me.height = me.maxHeight;
        me.paddingTop = getTickBackdropHeight(me.options) / 2;
        me.xCenter = Math.floor(me.width / 2);
        me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
        me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var me = this;

        var _me$getMinMax4 = me.getMinMax(false),
            min = _me$getMinMax4.min,
            max = _me$getMinMax4.max;

        me.min = isNumberFinite(min) && !isNaN(min) ? min : 0;
        me.max = isNumberFinite(max) && !isNaN(max) ? max : 0;
        me.handleTickRangeOptions();
      }
    }, {
      key: "computeTickLimit",
      value: function computeTickLimit() {
        return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
      }
    }, {
      key: "generateTickLabels",
      value: function generateTickLabels(ticks) {
        var me = this;
        LinearScaleBase.prototype.generateTickLabels.call(me, ticks);
        me._pointLabels = me.getLabels().map(function (value, index) {
          var label = callback(me.options.pointLabels.callback, [value, index], me);
          return label || label === 0 ? label : '';
        });
      }
    }, {
      key: "fit",
      value: function fit() {
        var me = this;
        var opts = me.options;

        if (opts.display && opts.pointLabels.display) {
          fitWithPointLabels(me);
        } else {
          me.setCenterPoint(0, 0, 0, 0);
        }
      }
    }, {
      key: "_setReductions",
      value: function _setReductions(largestPossibleRadius, furthestLimits, furthestAngles) {
        var me = this;
        var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
        var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
        var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
        var radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);
        radiusReductionLeft = numberOrZero(radiusReductionLeft);
        radiusReductionRight = numberOrZero(radiusReductionRight);
        radiusReductionTop = numberOrZero(radiusReductionTop);
        radiusReductionBottom = numberOrZero(radiusReductionBottom);
        me.drawingArea = Math.max(largestPossibleRadius / 2, Math.min(Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2), Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2)));
        me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
      }
    }, {
      key: "setCenterPoint",
      value: function setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
        var me = this;
        var maxRight = me.width - rightMovement - me.drawingArea;
        var maxLeft = leftMovement + me.drawingArea;
        var maxTop = topMovement + me.drawingArea;
        var maxBottom = me.height - me.paddingTop - bottomMovement - me.drawingArea;
        me.xCenter = Math.floor((maxLeft + maxRight) / 2 + me.left);
        me.yCenter = Math.floor((maxTop + maxBottom) / 2 + me.top + me.paddingTop);
      }
    }, {
      key: "getIndexAngle",
      value: function getIndexAngle(index) {
        var angleMultiplier = TAU / this.getLabels().length;
        var startAngle = this.options.startAngle || 0;
        return _normalizeAngle(index * angleMultiplier + toRadians(startAngle));
      }
    }, {
      key: "getDistanceFromCenterForValue",
      value: function getDistanceFromCenterForValue(value) {
        var me = this;

        if (isNullOrUndef(value)) {
          return NaN;
        }

        var scalingFactor = me.drawingArea / (me.max - me.min);

        if (me.options.reverse) {
          return (me.max - value) * scalingFactor;
        }

        return (value - me.min) * scalingFactor;
      }
    }, {
      key: "getValueForDistanceFromCenter",
      value: function getValueForDistanceFromCenter(distance) {
        if (isNullOrUndef(distance)) {
          return NaN;
        }

        var me = this;
        var scaledDistance = distance / (me.drawingArea / (me.max - me.min));
        return me.options.reverse ? me.max - scaledDistance : me.min + scaledDistance;
      }
    }, {
      key: "getPointPosition",
      value: function getPointPosition(index, distanceFromCenter) {
        var me = this;
        var angle = me.getIndexAngle(index) - HALF_PI;
        return {
          x: Math.cos(angle) * distanceFromCenter + me.xCenter,
          y: Math.sin(angle) * distanceFromCenter + me.yCenter,
          angle: angle
        };
      }
    }, {
      key: "getPointPositionForValue",
      value: function getPointPositionForValue(index, value) {
        return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
      }
    }, {
      key: "getBasePosition",
      value: function getBasePosition(index) {
        return this.getPointPositionForValue(index || 0, this.getBaseValue());
      }
    }, {
      key: "getPointLabelPosition",
      value: function getPointLabelPosition(index) {
        var _this$_pointLabelItem = this._pointLabelItems[index],
            left = _this$_pointLabelItem.left,
            top = _this$_pointLabelItem.top,
            right = _this$_pointLabelItem.right,
            bottom = _this$_pointLabelItem.bottom;
        return {
          left: left,
          top: top,
          right: right,
          bottom: bottom
        };
      }
    }, {
      key: "drawBackground",
      value: function drawBackground() {
        var me = this;
        var _me$options8 = me.options,
            backgroundColor = _me$options8.backgroundColor,
            circular = _me$options8.grid.circular;

        if (backgroundColor) {
          var ctx = me.ctx;
          ctx.save();
          ctx.beginPath();
          pathRadiusLine(me, me.getDistanceFromCenterForValue(me._endValue), circular, me.getLabels().length);
          ctx.closePath();
          ctx.fillStyle = backgroundColor;
          ctx.fill();
          ctx.restore();
        }
      }
    }, {
      key: "drawGrid",
      value: function drawGrid() {
        var me = this;
        var ctx = me.ctx;
        var opts = me.options;
        var angleLines = opts.angleLines,
            grid = opts.grid;
        var labelCount = me.getLabels().length;
        var i, offset, position;

        if (opts.pointLabels.display) {
          drawPointLabels(me, labelCount);
        }

        if (grid.display) {
          me.ticks.forEach(function (tick, index) {
            if (index !== 0) {
              offset = me.getDistanceFromCenterForValue(tick.value);
              var optsAtIndex = grid.setContext(me.getContext(index - 1));
              drawRadiusLine(me, optsAtIndex, offset, labelCount);
            }
          });
        }

        if (angleLines.display) {
          ctx.save();

          for (i = me.getLabels().length - 1; i >= 0; i--) {
            var optsAtIndex = angleLines.setContext(me.getContext(i));
            var color = optsAtIndex.color,
                lineWidth = optsAtIndex.lineWidth;

            if (!lineWidth || !color) {
              continue;
            }

            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;
            ctx.setLineDash(optsAtIndex.borderDash);
            ctx.lineDashOffset = optsAtIndex.borderDashOffset;
            offset = me.getDistanceFromCenterForValue(opts.ticks.reverse ? me.min : me.max);
            position = me.getPointPosition(i, offset);
            ctx.beginPath();
            ctx.moveTo(me.xCenter, me.yCenter);
            ctx.lineTo(position.x, position.y);
            ctx.stroke();
          }

          ctx.restore();
        }
      }
    }, {
      key: "drawLabels",
      value: function drawLabels() {
        var me = this;
        var ctx = me.ctx;
        var opts = me.options;
        var tickOpts = opts.ticks;

        if (!tickOpts.display) {
          return;
        }

        var startAngle = me.getIndexAngle(0);
        var offset, width;
        ctx.save();
        ctx.translate(me.xCenter, me.yCenter);
        ctx.rotate(startAngle);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        me.ticks.forEach(function (tick, index) {
          if (index === 0 && !opts.reverse) {
            return;
          }

          var optsAtIndex = tickOpts.setContext(me.getContext(index));
          var tickFont = toFont(optsAtIndex.font);
          offset = me.getDistanceFromCenterForValue(me.ticks[index].value);

          if (optsAtIndex.showLabelBackdrop) {
            width = ctx.measureText(tick.label).width;
            ctx.fillStyle = optsAtIndex.backdropColor;
            var padding = toPadding(optsAtIndex.backdropPadding);
            ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
          }

          renderText(ctx, tick.label, 0, -offset, tickFont, {
            color: optsAtIndex.color
          });
        });
        ctx.restore();
      }
    }, {
      key: "drawTitle",
      value: function drawTitle() {}
    }]);

    return RadialLinearScale;
  }(LinearScaleBase);

  RadialLinearScale.id = 'radialLinear';
  RadialLinearScale.defaults = {
    display: true,
    animate: true,
    position: 'chartArea',
    angleLines: {
      display: true,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0.0
    },
    grid: {
      circular: false
    },
    startAngle: 0,
    ticks: {
      showLabelBackdrop: true,
      backdropColor: 'rgba(255,255,255,0.75)',
      backdropPadding: 2,
      callback: Ticks.formatters.numeric
    },
    pointLabels: {
      backdropColor: undefined,
      backdropPadding: 2,
      display: true,
      font: {
        size: 10
      },
      callback: function callback(label) {
        return label;
      },
      padding: 5
    }
  };
  RadialLinearScale.defaultRoutes = {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color'
  };
  RadialLinearScale.descriptors = {
    angleLines: {
      _fallback: 'grid'
    }
  };
  var INTERVALS = {
    millisecond: {
      common: true,
      size: 1,
      steps: 1000
    },
    second: {
      common: true,
      size: 1000,
      steps: 60
    },
    minute: {
      common: true,
      size: 60000,
      steps: 60
    },
    hour: {
      common: true,
      size: 3600000,
      steps: 24
    },
    day: {
      common: true,
      size: 86400000,
      steps: 30
    },
    week: {
      common: false,
      size: 604800000,
      steps: 4
    },
    month: {
      common: true,
      size: 2.628e9,
      steps: 12
    },
    quarter: {
      common: false,
      size: 7.884e9,
      steps: 4
    },
    year: {
      common: true,
      size: 3.154e10
    }
  };
  var UNITS = Object.keys(INTERVALS);

  function sorter(a, b) {
    return a - b;
  }

  function _parse(scale, input) {
    if (isNullOrUndef(input)) {
      return null;
    }

    var adapter = scale._adapter;
    var options = scale.options.time;
    var parser = options.parser,
        round = options.round,
        isoWeekday = options.isoWeekday;
    var value = input;

    if (typeof parser === 'function') {
      value = parser(value);
    }

    if (!isNumberFinite(value)) {
      value = typeof parser === 'string' ? adapter.parse(value, parser) : adapter.parse(value);
    }

    if (value === null) {
      return null;
    }

    if (round) {
      value = round === 'week' && (isNumber(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, 'isoWeek', isoWeekday) : adapter.startOf(value, round);
    }

    return +value;
  }

  function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    var ilen = UNITS.length;

    for (var i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
      var interval = INTERVALS[UNITS[i]];
      var factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;

      if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
        return UNITS[i];
      }
    }

    return UNITS[ilen - 1];
  }

  function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for (var i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
      var unit = UNITS[i];

      if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
        return unit;
      }
    }

    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
  }

  function determineMajorUnit(unit) {
    for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
      if (INTERVALS[UNITS[i]].common) {
        return UNITS[i];
      }
    }
  }

  function addTick(ticks, time, timestamps) {
    if (!timestamps) {
      ticks[time] = true;
    } else if (timestamps.length) {
      var _lookup2 = _lookup(timestamps, time),
          lo = _lookup2.lo,
          hi = _lookup2.hi;

      var timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
      ticks[timestamp] = true;
    }
  }

  function setMajorTicks(scale, ticks, map, majorUnit) {
    var adapter = scale._adapter;
    var first = +adapter.startOf(ticks[0].value, majorUnit);
    var last = ticks[ticks.length - 1].value;
    var major, index;

    for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
      index = map[major];

      if (index >= 0) {
        ticks[index].major = true;
      }
    }

    return ticks;
  }

  function ticksFromTimestamps(scale, values, majorUnit) {
    var ticks = [];
    var map = {};
    var ilen = values.length;
    var i, value;

    for (i = 0; i < ilen; ++i) {
      value = values[i];
      map[value] = i;
      ticks.push({
        value: value,
        major: false
      });
    }

    return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
  }

  var TimeScale = /*#__PURE__*/function (_Scale4) {
    _inherits(TimeScale, _Scale4);

    var _super24 = _createSuper(TimeScale);

    function TimeScale(props) {
      var _this17;

      _classCallCheck(this, TimeScale);

      _this17 = _super24.call(this, props);
      _this17._cache = {
        data: [],
        labels: [],
        all: []
      };
      _this17._unit = 'day';
      _this17._majorUnit = undefined;
      _this17._offsets = {};
      _this17._normalized = false;
      return _this17;
    }

    _createClass(TimeScale, [{
      key: "init",
      value: function init(scaleOpts, opts) {
        var time = scaleOpts.time || (scaleOpts.time = {});
        var adapter = this._adapter = new _adapters._date(scaleOpts.adapters.date);
        mergeIf(time.displayFormats, adapter.formats());

        _get2(_getPrototypeOf(TimeScale.prototype), "init", this).call(this, scaleOpts);

        this._normalized = opts.normalized;
      }
    }, {
      key: "parse",
      value: function parse(raw, index) {
        if (raw === undefined) {
          return null;
        }

        return _parse(this, raw);
      }
    }, {
      key: "beforeLayout",
      value: function beforeLayout() {
        _get2(_getPrototypeOf(TimeScale.prototype), "beforeLayout", this).call(this);

        this._cache = {
          data: [],
          labels: [],
          all: []
        };
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var me = this;
        var options = me.options;
        var adapter = me._adapter;
        var unit = options.time.unit || 'day';

        var _me$getUserBounds5 = me.getUserBounds(),
            min = _me$getUserBounds5.min,
            max = _me$getUserBounds5.max,
            minDefined = _me$getUserBounds5.minDefined,
            maxDefined = _me$getUserBounds5.maxDefined;

        function _applyBounds(bounds) {
          if (!minDefined && !isNaN(bounds.min)) {
            min = Math.min(min, bounds.min);
          }

          if (!maxDefined && !isNaN(bounds.max)) {
            max = Math.max(max, bounds.max);
          }
        }

        if (!minDefined || !maxDefined) {
          _applyBounds(me._getLabelBounds());

          if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
            _applyBounds(me.getMinMax(false));
          }
        }

        min = isNumberFinite(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
        max = isNumberFinite(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
        me.min = Math.min(min, max - 1);
        me.max = Math.max(min + 1, max);
      }
    }, {
      key: "_getLabelBounds",
      value: function _getLabelBounds() {
        var arr = this.getLabelTimestamps();
        var min = Number.POSITIVE_INFINITY;
        var max = Number.NEGATIVE_INFINITY;

        if (arr.length) {
          min = arr[0];
          max = arr[arr.length - 1];
        }

        return {
          min: min,
          max: max
        };
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var me = this;
        var options = me.options;
        var timeOpts = options.time;
        var tickOpts = options.ticks;
        var timestamps = tickOpts.source === 'labels' ? me.getLabelTimestamps() : me._generate();

        if (options.bounds === 'ticks' && timestamps.length) {
          me.min = me._userMin || timestamps[0];
          me.max = me._userMax || timestamps[timestamps.length - 1];
        }

        var min = me.min;
        var max = me.max;

        var ticks = _filterBetween(timestamps, min, max);

        me._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, me.min, me.max, me._getLabelCapacity(min)) : determineUnitForFormatting(me, ticks.length, timeOpts.minUnit, me.min, me.max));
        me._majorUnit = !tickOpts.major.enabled || me._unit === 'year' ? undefined : determineMajorUnit(me._unit);
        me.initOffsets(timestamps);

        if (options.reverse) {
          ticks.reverse();
        }

        return ticksFromTimestamps(me, ticks, me._majorUnit);
      }
    }, {
      key: "initOffsets",
      value: function initOffsets(timestamps) {
        var me = this;
        var start = 0;
        var end = 0;
        var first, last;

        if (me.options.offset && timestamps.length) {
          first = me.getDecimalForValue(timestamps[0]);

          if (timestamps.length === 1) {
            start = 1 - first;
          } else {
            start = (me.getDecimalForValue(timestamps[1]) - first) / 2;
          }

          last = me.getDecimalForValue(timestamps[timestamps.length - 1]);

          if (timestamps.length === 1) {
            end = last;
          } else {
            end = (last - me.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
          }
        }

        var limit = timestamps.length < 3 ? 0.5 : 0.25;
        start = _limitValue(start, 0, limit);
        end = _limitValue(end, 0, limit);
        me._offsets = {
          start: start,
          end: end,
          factor: 1 / (start + 1 + end)
        };
      }
    }, {
      key: "_generate",
      value: function _generate() {
        var me = this;
        var adapter = me._adapter;
        var min = me.min;
        var max = me.max;
        var options = me.options;
        var timeOpts = options.time;
        var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, me._getLabelCapacity(min));
        var stepSize = valueOrDefault(timeOpts.stepSize, 1);
        var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
        var hasWeekday = isNumber(weekday) || weekday === true;
        var ticks = {};
        var first = min;
        var time, count;

        if (hasWeekday) {
          first = +adapter.startOf(first, 'isoWeek', weekday);
        }

        first = +adapter.startOf(first, hasWeekday ? 'day' : minor);

        if (adapter.diff(max, min, minor) > 100000 * stepSize) {
          throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
        }

        var timestamps = options.ticks.source === 'data' && me.getDataTimestamps();

        for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
          addTick(ticks, time, timestamps);
        }

        if (time === max || options.bounds === 'ticks' || count === 1) {
          addTick(ticks, time, timestamps);
        }

        return Object.keys(ticks).sort(function (a, b) {
          return a - b;
        }).map(function (x) {
          return +x;
        });
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(value) {
        var me = this;
        var adapter = me._adapter;
        var timeOpts = me.options.time;

        if (timeOpts.tooltipFormat) {
          return adapter.format(value, timeOpts.tooltipFormat);
        }

        return adapter.format(value, timeOpts.displayFormats.datetime);
      }
    }, {
      key: "_tickFormatFunction",
      value: function _tickFormatFunction(time, index, ticks, format) {
        var me = this;
        var options = me.options;
        var formats = options.time.displayFormats;
        var unit = me._unit;
        var majorUnit = me._majorUnit;
        var minorFormat = unit && formats[unit];
        var majorFormat = majorUnit && formats[majorUnit];
        var tick = ticks[index];
        var major = majorUnit && majorFormat && tick && tick.major;

        var label = me._adapter.format(time, format || (major ? majorFormat : minorFormat));

        var formatter = options.ticks.callback;
        return formatter ? formatter(label, index, ticks) : label;
      }
    }, {
      key: "generateTickLabels",
      value: function generateTickLabels(ticks) {
        var i, ilen, tick;

        for (i = 0, ilen = ticks.length; i < ilen; ++i) {
          tick = ticks[i];
          tick.label = this._tickFormatFunction(tick.value, i, ticks);
        }
      }
    }, {
      key: "getDecimalForValue",
      value: function getDecimalForValue(value) {
        var me = this;
        return value === null ? NaN : (value - me.min) / (me.max - me.min);
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(value) {
        var me = this;
        var offsets = me._offsets;
        var pos = me.getDecimalForValue(value);
        return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(pixel) {
        var me = this;
        var offsets = me._offsets;
        var pos = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return me.min + pos * (me.max - me.min);
      }
    }, {
      key: "_getLabelSize",
      value: function _getLabelSize(label) {
        var me = this;
        var ticksOpts = me.options.ticks;
        var tickLabelWidth = me.ctx.measureText(label).width;
        var angle = toRadians(me.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
        var cosRotation = Math.cos(angle);
        var sinRotation = Math.sin(angle);

        var tickFontSize = me._resolveTickFontOptions(0).size;

        return {
          w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
          h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
        };
      }
    }, {
      key: "_getLabelCapacity",
      value: function _getLabelCapacity(exampleTime) {
        var me = this;
        var timeOpts = me.options.time;
        var displayFormats = timeOpts.displayFormats;
        var format = displayFormats[timeOpts.unit] || displayFormats.millisecond;

        var exampleLabel = me._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(me, [exampleTime], me._majorUnit), format);

        var size = me._getLabelSize(exampleLabel);

        var capacity = Math.floor(me.isHorizontal() ? me.width / size.w : me.height / size.h) - 1;
        return capacity > 0 ? capacity : 1;
      }
    }, {
      key: "getDataTimestamps",
      value: function getDataTimestamps() {
        var me = this;
        var timestamps = me._cache.data || [];
        var i, ilen;

        if (timestamps.length) {
          return timestamps;
        }

        var metas = me.getMatchingVisibleMetas();

        if (me._normalized && metas.length) {
          return me._cache.data = metas[0].controller.getAllParsedValues(me);
        }

        for (i = 0, ilen = metas.length; i < ilen; ++i) {
          timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(me));
        }

        return me._cache.data = me.normalize(timestamps);
      }
    }, {
      key: "getLabelTimestamps",
      value: function getLabelTimestamps() {
        var me = this;
        var timestamps = me._cache.labels || [];
        var i, ilen;

        if (timestamps.length) {
          return timestamps;
        }

        var labels = me.getLabels();

        for (i = 0, ilen = labels.length; i < ilen; ++i) {
          timestamps.push(_parse(me, labels[i]));
        }

        return me._cache.labels = me._normalized ? timestamps : me.normalize(timestamps);
      }
    }, {
      key: "normalize",
      value: function normalize(values) {
        return _arrayUnique(values.sort(sorter));
      }
    }]);

    return TimeScale;
  }(Scale);

  TimeScale.id = 'time';
  TimeScale.defaults = {
    bounds: 'data',
    adapters: {},
    time: {
      parser: false,
      unit: false,
      round: false,
      isoWeekday: false,
      minUnit: 'millisecond',
      displayFormats: {}
    },
    ticks: {
      source: 'auto',
      major: {
        enabled: false
      }
    }
  };

  function interpolate(table, val, reverse) {
    var prevSource, nextSource, prevTarget, nextTarget;

    if (reverse) {
      prevSource = Math.floor(val);
      nextSource = Math.ceil(val);
      prevTarget = table[prevSource];
      nextTarget = table[nextSource];
    } else {
      var result = _lookup(table, val);

      prevTarget = result.lo;
      nextTarget = result.hi;
      prevSource = table[prevTarget];
      nextSource = table[nextTarget];
    }

    var span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
  }

  var TimeSeriesScale = /*#__PURE__*/function (_TimeScale) {
    _inherits(TimeSeriesScale, _TimeScale);

    var _super25 = _createSuper(TimeSeriesScale);

    function TimeSeriesScale(props) {
      var _this18;

      _classCallCheck(this, TimeSeriesScale);

      _this18 = _super25.call(this, props);
      _this18._table = [];
      _this18._maxIndex = undefined;
      return _this18;
    }

    _createClass(TimeSeriesScale, [{
      key: "initOffsets",
      value: function initOffsets() {
        var me = this;

        var timestamps = me._getTimestampsForTable();

        me._table = me.buildLookupTable(timestamps);
        me._maxIndex = me._table.length - 1;

        _get2(_getPrototypeOf(TimeSeriesScale.prototype), "initOffsets", this).call(this, timestamps);
      }
    }, {
      key: "buildLookupTable",
      value: function buildLookupTable(timestamps) {
        var me = this;
        var min = me.min,
            max = me.max;

        if (!timestamps.length) {
          return [{
            time: min,
            pos: 0
          }, {
            time: max,
            pos: 1
          }];
        }

        var items = [min];
        var i, ilen, curr;

        for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
          curr = timestamps[i];

          if (curr > min && curr < max) {
            items.push(curr);
          }
        }

        items.push(max);
        return items;
      }
    }, {
      key: "_getTimestampsForTable",
      value: function _getTimestampsForTable() {
        var me = this;
        var timestamps = me._cache.all || [];

        if (timestamps.length) {
          return timestamps;
        }

        var data = me.getDataTimestamps();
        var label = me.getLabelTimestamps();

        if (data.length && label.length) {
          timestamps = me.normalize(data.concat(label));
        } else {
          timestamps = data.length ? data : label;
        }

        timestamps = me._cache.all = timestamps;
        return timestamps;
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(value, index) {
        var me = this;
        var offsets = me._offsets;
        var pos = me._normalized && me._maxIndex > 0 && !isNullOrUndef(index) ? index / me._maxIndex : me.getDecimalForValue(value);
        return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
      }
    }, {
      key: "getDecimalForValue",
      value: function getDecimalForValue(value) {
        return interpolate(this._table, value) / this._maxIndex;
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(pixel) {
        var me = this;
        var offsets = me._offsets;
        var decimal = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return interpolate(me._table, decimal * this._maxIndex, true);
      }
    }]);

    return TimeSeriesScale;
  }(TimeScale);

  TimeSeriesScale.id = 'timeseries';
  TimeSeriesScale.defaults = TimeScale.defaults;
  var scales = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CategoryScale: CategoryScale,
    LinearScale: LinearScale,
    LogarithmicScale: LogarithmicScale,
    RadialLinearScale: RadialLinearScale,
    TimeScale: TimeScale,
    TimeSeriesScale: TimeSeriesScale
  });
  Chart.register(controllers, scales, elements, plugins);
  Chart.helpers = _objectSpread({}, helpers);
  Chart._adapters = _adapters;
  Chart.Animation = Animation;
  Chart.Animations = Animations;
  Chart.animator = animator;
  Chart.controllers = registry.controllers.items;
  Chart.DatasetController = DatasetController;
  Chart.Element = Element;
  Chart.elements = elements;
  Chart.Interaction = Interaction;
  Chart.layouts = layouts;
  Chart.platforms = platforms;
  Chart.Scale = Scale;
  Chart.Ticks = Ticks;
  Object.assign(Chart, controllers, scales, elements, plugins, platforms);
  Chart.Chart = Chart;

  if (typeof window !== 'undefined') {
    window.Chart = Chart;
  }

  return Chart;
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "8238" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","aktiengraphen/chart.js"], null)
//# sourceMappingURL=/chart.f67ae790.js.map