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
})({"source.pug":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(locals) {
  function pug_escape(e) {
    var a = "" + e,
        t = pug_match_html.exec(a);
    if (!t) return e;
    var r,
        c,
        n,
        s = "";

    for (r = t.index, c = 0; r < a.length; r++) {
      switch (a.charCodeAt(r)) {
        case 34:
          n = "&quot;";
          break;

        case 38:
          n = "&amp;";
          break;

        case 60:
          n = "&lt;";
          break;

        case 62:
          n = "&gt;";
          break;

        default:
          continue;
      }

      c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }

    return c !== r ? s + a.substring(c, r) : s;
  }

  var pug_match_html = /["&<>]/;

  function pug_rethrow(n, e, t, r) {
    if (!(n instanceof Error)) throw n;
    if (!("undefined" == typeof window && e || r)) throw n.message += " on line " + t, n;

    try {
      r = r || require("fs").readFileSync(e, "utf8");
    } catch (e) {
      pug_rethrow(n, null, t);
    }

    var a = 3,
        i = r.split("\n"),
        o = Math.max(t - a, 0),
        h = Math.min(i.length, t + a),
        a = i.slice(o, h).map(function (n, e) {
      var r = e + o + 1;
      return (r == t ? "  > " : "    ") + r + "| " + n;
    }).join("\n");
    n.path = e;

    try {
      n.message = (e || "Pug") + ":" + t + "\n" + a + "\n\n" + n.message;
    } catch (n) {}

    throw n;
  }

  function templateFn(locals) {
    var pug_html = "",
        pug_mixins = {},
        pug_interp;
    var pug_debug_filename, pug_debug_line;

    try {
      ;
      var locals_for_with = locals || {};
      (function (name) {
        ;
        pug_debug_line = 1;
        pug_debug_filename = "\u002FVolumes\u002FDUMBLEDORE1\u002FUsers\u002Ffficnar\u002FProjects\u002FShared Projects\u002Fparcel-plugin-pug\u002Fdistributable\u002Ftest\u002Flibrary\u002Fsource\u002Fsource.pug";
        pug_html = pug_html + "\u003Cp\u003E";
        ;
        pug_debug_line = 1;
        pug_debug_filename = "\u002FVolumes\u002FDUMBLEDORE1\u002FUsers\u002Ffficnar\u002FProjects\u002FShared Projects\u002Fparcel-plugin-pug\u002Fdistributable\u002Ftest\u002Flibrary\u002Fsource\u002Fsource.pug";
        pug_html = pug_html + "Hello, ";
        ;
        pug_debug_line = 1;
        pug_debug_filename = "\u002FVolumes\u002FDUMBLEDORE1\u002FUsers\u002Ffficnar\u002FProjects\u002FShared Projects\u002Fparcel-plugin-pug\u002Fdistributable\u002Ftest\u002Flibrary\u002Fsource\u002Fsource.pug";
        pug_html = pug_html + pug_escape(null == (pug_interp = name) ? "" : pug_interp);
        ;
        pug_debug_line = 1;
        pug_debug_filename = "\u002FVolumes\u002FDUMBLEDORE1\u002FUsers\u002Ffficnar\u002FProjects\u002FShared Projects\u002Fparcel-plugin-pug\u002Fdistributable\u002Ftest\u002Flibrary\u002Fsource\u002Fsource.pug";
        pug_html = pug_html + "!\u003C\u002Fp\u003E";
      }).call(this, "name" in locals_for_with ? locals_for_with.name : typeof name !== 'undefined' ? name : undefined);
      ;
    } catch (err) {
      pug_rethrow(err, pug_debug_filename, pug_debug_line);
    }

    ;
    return pug_html;
  }

  return templateFn(locals);
}
},{}],"source.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _source.default;
  }
});

var _source = _interopRequireDefault(require("./source.pug"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
},{"./source.pug":"source.pug"}]},{},["source.js"], null)
//# sourceMappingURL=/target.js.map