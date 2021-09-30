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
})({"main.js":[function(require,module,exports) {
//OpenWeather
var par1 = document.getElementById("par1");
var par2 = document.getElementById("par2");
var par3 = document.getElementById("par3");
var par4 = document.getElementById("par4");
var par5 = document.getElementById("par5");
var par6 = document.getElementById("par6");
var par7 = document.getElementById("par7"); //myfile

var pers11 = document.getElementById("pers11");
var pers12 = document.getElementById("pers12");
var pers13 = document.getElementById("pers13");
var pers21 = document.getElementById("pers21");
var pers22 = document.getElementById("pers22");
var pers23 = document.getElementById("pers23");
var pers31 = document.getElementById("pers31");
var pers32 = document.getElementById("pers32");
var pers33 = document.getElementById("pers33");
var pers41 = document.getElementById("pers41");
var pers42 = document.getElementById("pers42");
var pers43 = document.getElementById("pers43"); //JsonPlaceholder

var name1 = document.getElementById("name1");
var email1 = document.getElementById("email1");
var name2 = document.getElementById("name2");
var email2 = document.getElementById("email2");
var name3 = document.getElementById("name3");
var email3 = document.getElementById("email3");
var openweather = "http://api.openweathermap.org/data/2.5/weather?q=Kyiv,%20UA&APPID=6e0385251f05447580d2eb9af9730ae9";
var my_file = "data.json";
var jsonPlaceholder = "https://jsonplaceholder.typicode.com/users";
var res1;
var res2;
var res3;
fetch(openweather).then(function (response) {
  return response.json();
}).then(function (r) {
  res1 = r; //console.log(res1)

  par1.textContent = "\u041C\u0456\u0441\u0442\u043E: ".concat(res1.name);
  par2.textContent = "\u041E\u0431\u043B\u0430\u0447\u043D\u043E: ".concat(res1.clouds.all, "%");
  par3.textContent = "\u0412\u043E\u043B\u043E\u0433\u0456\u0441\u0442\u044C: ".concat(res1.main.humidity, "%");
  par4.textContent = "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ".concat(Math.round(res1.main.temp - 273), " \u2103");
  par5.textContent = "\u041C\u0430\u043A\u0441.\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ".concat(Math.round(res1.main.temp_max - 273), " \u2103");
  par6.textContent = "\u041C\u0456\u043D.\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ".concat(Math.round(res1.main.temp_min - 273), " \u2103");
  par7.textContent = "\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A: ".concat(Math.round(res1.main.feels_like - 273), " \u2103");
}).catch(function (err) {
  return console.log(err);
});
fetch(jsonPlaceholder).then(function (response) {
  return response.json();
}).then(function (r) {
  res2 = r;
  console.log(res2);
  name1.innerHTML = "<b>\u0406\u043C'\u044F \u0442\u0430 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435:</b> ".concat(res2[0].name);
  email1.innerHTML = "<b>EMAIL:</b> ".concat(res2[0].email);
  name2.innerHTML = "<b>\u0406\u043C'\u044F \u0442\u0430 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435:</b> ".concat(res2[6].name);
  email2.innerHTML = "<b>EMAIL:</b> ".concat(res2[6].email);
  name3.innerHTML = "<b>\u0406\u043C'\u044F \u0442\u0430 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435:</b> ".concat(res2[4].name);
  email3.innerHTML = "<b>EMAIL:</b> ".concat(res2[4].email);
}).catch(function (err) {
  return console.log(err);
});
fetch(my_file).then(function (response) {
  return response.json();
}).then(function (r) {
  res3 = r; //console.log(res3.person2.age);

  pers11.innerHTML = "<b>\u0406\u043C'\u044F \u0442\u0430 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435:</b> ".concat(res3.person1.name);
  pers12.innerHTML = "<b>\u0412\u0456\u043A:</b> ".concat(res3.person1.age);
  pers13.innerHTML = "<b>\u0425\u043E\u0431\u0456:</b> ".concat(res3.person1.hobbies);
  pers21.innerHTML = "<b>\u0406\u043C'\u044F \u0442\u0430 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435:</b> ".concat(res3.person2.name);
  pers22.innerHTML = "<b>\u0412\u0456\u043A:</b> ".concat(res3.person2.age);
  pers23.innerHTML = "<b>\u0425\u043E\u0431\u0456:</b> ".concat(res3.person2.hobbies);
  pers31.innerHTML = "<b>\u0406\u043C'\u044F \u0442\u0430 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435:</b> ".concat(res3.person3.name);
  pers32.innerHTML = "<b>\u0412\u0456\u043A:</b> ".concat(res3.person3.age);
  pers33.innerHTML = "<b>\u0425\u043E\u0431\u0456:</b> ".concat(res3.person3.hobbies);
  pers41.innerHTML = "<b>\u0406\u043C'\u044F \u0442\u0430 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435:</b> ".concat(res3.person4.name);
  pers42.innerHTML = "<b>\u0412\u0456\u043A:</b> ".concat(res3.person4.age);
  pers43.innerHTML = "<b>\u0425\u043E\u0431\u0456:</b> ".concat(res3.person4.hobbies);
}).catch(function (err) {
  return console.log(err);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60546" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map