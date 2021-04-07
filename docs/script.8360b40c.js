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
})({"abizeitung/script.js":[function(require,module,exports) {
//const {jsPDF} = window.jspdf;

/*
-Foto von früher & Foto von jetzt
-Name
-Geburtstag
-Lieblingsfach
-Bester Lehrer
-Meine Schullaufbahn als Filmtitel
-Das werde ich vermissen
-Häufigster Abwesenheitsgrund
-Was ich nach dem Abi machen werde
-Lebensmotto
-Absturzgetränk Nr°1
 */
document.getElementById("submit-button").addEventListener("click", function (event) {
  if (document.getElementById("form").checkValidity()) {
    document.getElementById("loadingcircle").style.visibility = "visible";
    event.preventDefault();
    console.log("PDF-Datei wird erstellt");
    var doc = new jsPDF({
      compress: true
    });
    doc.setFont("Montserrat-SemiBoldItalic", "bolditalic");
    doc.setTextColor("#e0e0e0");
    doc.setFontSize(15);
    var pageHeight = doc.getPageHeight(0);
    var pageWidth = doc.getPageWidth(0);
    doc.addImage("hintergrund.png", 'PNG', 0, 0, pageWidth, pageHeight, "", "FAST");
    doc.text("Geburtstag: ", 30, 130);
    doc.text("Lieblingsfach: ", 30, 140);
    doc.text("Bester Lehrer: ", 30, 150);

    if (document.getElementById("fdrink").value === "") {
      doc.text("Meine Schullaufbahn als Filmtitel: ", 30, 160);
      doc.text("Häufigster Abwesenheitsgrund: ", 30, 185);
      doc.text("Was ich nach dem Abi machen werde: ", 30, 210);
      doc.text("Lebensmotto: ", 30, 235);
      doc.text("Was ich vermissen werde: ", 30, 260);
    } else {
      doc.text("Absturzgetränk Nr°1: ", 30, 160);
      doc.text("Meine Schullaufbahn als Filmtitel: ", 30, 170);
      doc.text("Häufigster Abwesenheitsgrund: ", 30, 195);
      doc.text("Was ich nach dem Abi machen werde: ", 30, 220);
      doc.text("Lebensmotto: ", 30, 245);
      doc.text("Was ich vermissen werde: ", 30, 270);
    } //Handwriting


    doc.setFont("Handlee", "normal");
    doc.setFontSize(18);
    doc.text(document.getElementById("fbday").value, 73, 130);
    doc.text(document.getElementById("fach").value, 80, 140);
    doc.text(document.getElementById("gender").value + " " + document.getElementById("fteachername").value, 80, 150);

    if (document.getElementById("fdrink").value === "") {
      doc.text(document.getElementById("ffilmtitel").value, 30, 168, {
        maxWidth: 160
      });
      doc.text(document.getElementById("fabwesenheit").value, 30, 193, {
        maxWidth: 160
      });
      doc.text(document.getElementById("fnachdemabi").value, 30, 218, {
        maxWidth: 160
      });
      doc.text(document.getElementById("fmotto").value, 30, 243, {
        maxWidth: 160
      });
      doc.text(document.getElementById("fvermissen").value, 30, 268, {
        maxWidth: 160
      });
    } else {
      doc.text(document.getElementById("fdrink").value, 100, 160);
      doc.text(document.getElementById("ffilmtitel").value, 30, 178, {
        maxWidth: 160
      });
      doc.text(document.getElementById("fabwesenheit").value, 30, 203, {
        maxWidth: 160
      });
      doc.text(document.getElementById("fnachdemabi").value, 30, 228, {
        maxWidth: 160
      });
      doc.text(document.getElementById("fmotto").value, 30, 253, {
        maxWidth: 160
      });
      doc.text(document.getElementById("fvermissen").value, 30, 278, {
        maxWidth: 160
      });
    }

    doc.setFont("Montserrat-SemiBoldItalic", "bolditalic");

    if (document.getElementById("fimagenew").files[0] !== undefined) {
      var url = URL.createObjectURL(document.getElementById("fimageold").files[0]);
      crop(url, 1).then(function (canvas) {
        doc.addImage(canvas, "PNG", 25, 25, 70, 70, "", "FAST");
        url = URL.createObjectURL(document.getElementById("fimagenew").files[0]);
        crop(url, 1).then(function (canvas) {
          doc.addImage(canvas, "PNG", 120, 25, 70, 70, "", "FAST");
          finishDocument(doc, pageWidth, pageHeight);
        });
      });
    } else {
      finishDocument(doc, pageWidth, pageHeight);
    }
  }
});

function finishDocument(doc, pageWidth, pageHeight) {
  doc.addImage("haengedinger.png", 'PNG', 0, 0, pageWidth, pageHeight, "", "FAST");
  doc.setFontSize(45);
  doc.text(document.getElementById("fvorname").value, 25, 100);
  doc.text(document.getElementById("fnachname").value, 30, 115);
  doc.setProperties({
    title: document.getElementById("fvorname").value + " " + document.getElementById("fnachname").value
  });
  doc.output('save', document.getElementById("fvorname").value + " " + document.getElementById("fnachname").value + '.pdf');
}
/**
 * @param {string} url - The source image
 * @param {number} aspectRatio - The aspect ratio
 * @return {Promise<HTMLCanvasElement>} A Promise that resolves with the resulting image as a canvas element
 */


function crop(url, aspectRatio) {
  // we return a Promise that gets resolved with our canvas element
  return new Promise(function (resolve) {
    // this image will hold our source image data
    var inputImage = new Image(); // we want to wait for our image to load

    inputImage.onload = function () {
      // let's store the width and height of our image
      var inputWidth = inputImage.naturalWidth;
      var inputHeight = inputImage.naturalHeight; // get the aspect ratio of the input image

      var inputImageAspectRatio = inputWidth / inputHeight; // if it's bigger than our target aspect ratio

      var outputWidth = inputWidth;
      var outputHeight = inputHeight;

      if (inputImageAspectRatio > aspectRatio) {
        outputWidth = inputHeight * aspectRatio;
      } else if (inputImageAspectRatio < aspectRatio) {
        outputHeight = inputWidth / aspectRatio;
      } // calculate the position to draw the image at


      var outputX = (outputWidth - inputWidth) * 0.5;
      var outputY = (outputHeight - inputHeight) * 0.5; // create a canvas that will present the output image

      var outputImage = document.createElement("canvas"); // set it to the same size as the image

      outputImage.width = outputWidth;
      outputImage.height = outputHeight; // draw our image at position 0, 0 on the canvas

      var ctx = outputImage.getContext("2d");
      ctx.drawImage(inputImage, outputX, outputY);
      resolve(outputImage.toDataURL());
    }; //return(outputImage.toDataURL())
    // start loading our image


    inputImage.src = url;
  });
}
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "8409" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","abizeitung/script.js"], null)
//# sourceMappingURL=/script.8360b40c.js.map