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
})({"script.js":[function(require,module,exports) {
//HTML Elements
var cursor;
var oc3;
var oc2;
var oc1;
var st;
var indexStorage;
var cursorStorage;
var subtext;
var turningSquare;
var leftArea;
var text;
var body;
var nav; //Boolean

var effectsActive = true;
var overItem = false; //Arrays

var originalTexts = {};
var running = {};
var section = ["section-null", "section-hello-world", "section-me", "section-programming-languages", "section-projects"];
var sectionTitles = ["null", "Hello World", "About me", "Programming languages", "Projects"]; //Integer

var currentSection = 0;

function main() {
  cursor = document.getElementById("cursor");
  text = document.getElementById("text");
  leftArea = document.getElementById("left-area");
  body = document.getElementById("body");
  turningSquare = document.getElementById("turning-square");
  subtext = document.getElementById("subtext");
  cursorStorage = document.getElementById("cursor-storage");
  indexStorage = document.getElementById("progress-index");
  st = document.getElementById("section-programming-languages");
  oc1 = document.getElementById("octagon-1");
  oc2 = document.getElementById("octagon-2");
  oc3 = document.getElementById("octagon-3");
  nav = document.getElementById("nav-bar-list");
  window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
      jumpToSection(currentSection + 1);
    }

    if (event.deltaY < 0) {
      jumpToSection(currentSection - 1);
    }
  });
  window.addEventListener('swiped-left', function (e) {
    jumpToSection(currentSection + 1);
  });
  window.addEventListener('swiped-right', function (e) {
    jumpToSection(currentSection - 1);
  });
  window.addEventListener('swiped-up', function (e) {
    jumpToSection(currentSection + 1);
  });
  window.addEventListener('swiped-down', function (e) {
    jumpToSection(currentSection - 1);
  });
  fitOctagon();
  window.addEventListener("resize", function () {
    setTimeout(fitOctagon, 1000);
  });

  var _loop = function _loop(i) {
    var content = document.createElement('div');
    content.classList.add('index-circle');
    content.style.cursor = "pointer";
    content.addEventListener("click", function () {
      jumpToSection(i);
    });
    indexStorage.appendChild(content);
    content = document.createElement("li");
    content.id = "nav-" + section[i];
    content.classList.add("focusable");
    content.classList.add("glitch");
    content.innerHTML = sectionTitles[i];
    content.addEventListener("click", function () {
      jumpToSection(i);
    });
    nav.appendChild(content);
  };

  for (var i = 1; i < section.length; i++) {
    _loop(i);
  }

  function fitOctagon() {
    oc1.style.strokeDasharray = st.clientWidth * 2.6 * 0.8 + ", " + st.clientWidth * 2.6;
    oc2.style.strokeDasharray = st.clientWidth * 1.8 * 0.7 + ", " + st.clientWidth * 1.8;
    oc3.style.strokeDasharray = st.clientWidth * 0.9 * 0.3 + ", " + st.clientWidth * 0.9;
  }

  turningSquare.addEventListener("click", function () {
    turningSquare.classList.remove("turn");

    if (currentSection !== 0) {
      jumpToSection(0);
    }
  });
  leftArea.addEventListener("click", function () {
    if (currentSection !== 0) {
      jumpToSection(0);
    }
  });
  cursorStorage.addEventListener("mouseenter", function () {
    if (effectsActive) {
      overItem = true;
      effectsActive = false;
      cursor.style.top = offset(cursorStorage).top + 3.5 + "px";
      cursor.style.left = offset(cursorStorage).left + 3.5 + "px";
      cursor.style.transform = "none";
    } else {
      overItem = false;
      effectsActive = true;
      cursor.style.transform = "translate(-50%, -50%)";
    }
  });
  document.querySelectorAll('.focusable').forEach(function (item) {
    item.style.cursor = "pointer";
    item.addEventListener("mouseenter", function () {
      if (effectsActive) {
        overItem = true;
        cursor.style.backgroundSize = "10px 10px";
        cursor.style.setProperty("--strokewidth", "4px");
        cursor.style.height = item.offsetHeight + "px";
        cursor.style.width = item.offsetWidth + "px";
        cursor.style.top = offset(item).top + "px";
        cursor.style.left = offset(item).left + "px";
        cursor.style.transform = "none";
      }
    });
    item.addEventListener("mouseleave", function () {
      if (effectsActive) {
        overItem = false;
        cursor.style.backgroundSize = "5px 5px";
        cursor.style.setProperty("--strokewidth", "2px");
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.transform = "translate(-50%, -50%)";
      }
    });
  });
  document.querySelectorAll('.glitch').forEach(function (item) {
    originalTexts[item.id] = item.innerHTML;
    item.addEventListener("mouseenter", function () {
      if (effectsActive) {
        glitchText(item, originalTexts[item.id]);
      }
    });
  });
  document.addEventListener("mousemove", function (e) {
    if (!overItem) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    }
  });
  /*const nodes = Array.prototype.slice.call(document.getElementById('progress-index').children);
    document.querySelectorAll("#progress-index div").forEach(item => {
      item.addEventListener("click", function () {
          jumpToSection(nodes.indexOf(item) + 1);
      })
  });*/
}

function jumpToSection(target) {
  if (target < section.length && target > -1) {
    document.getElementById(section[currentSection]).style.visibility = "hidden";

    if (currentSection === 0) {
      turningSquare.classList.add('turn');
    }

    currentSection = target;

    if (currentSection === 0) {
      turningSquare.classList.remove('turn');
    }

    turningSquare.style.setProperty("--square-rotation", (currentSection + 2) * 45 + "deg");
    document.getElementById(section[currentSection]).style.visibility = "visible";
    setIndex();
    glitchText(subtext, "System.out.println(\"" + sectionTitles[currentSection] + "\");");
  }
}

function setIndex() {
  var index = 0;
  document.querySelectorAll("#progress-index div").forEach(function (item) {
    if (index < currentSection) {
      index++;
      item.style.backgroundColor = "white";
    } else {
      item.style.backgroundColor = "transparent";
    }
  });
}

function glitchText(item, newText) {
  var originalText = newText;
  var textLength = originalText.length;

  if (effectsActive) {
    newText = randomString(textLength);
    item.innerHTML = newText;

    if (item.id in running) {
      clearTimeout(running[item.id]);
      delete running[item.id];
    }

    running[item.id] = setTimeout(textrecover, 100, originalText, newText, item);
  } else {
    item.innerHTML = newText;
  }
}

function offset(el) {
  var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

function randomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function textrecover(originalText, newText, item) {
  var gleich = 0;

  for (var i = 0; i < originalText.length; i++) {
    if (originalText.charAt(i) !== item.innerHTML.charAt(i) && gleich === 0) {
      gleich++;
      newText = originalText.substring(0, i + 1) + randomString(originalText.length - i - 1);
      item.innerHTML = newText;
    }
  }

  if (originalText !== newText) {
    running[item.id] = setTimeout(textrecover, 40, originalText, newText, item);
  } else {
    originalTexts[item.id] = newText;
    clearTimeout(running[item.id]);
    delete running[item.id];
  }
}

main();
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map