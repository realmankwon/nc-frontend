!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("steemconnect", [], e)
    : "object" == typeof exports
    ? (exports.steemconnect = e())
    : (t.steemconnect = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var o = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            r.d(
              n,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ""),
      r((r.s = 52))
    );
  })([
    function (t, e) {
      var r = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = r);
    },
    function (t, e) {
      var r = (t.exports = { version: "2.6.5" });
      "number" == typeof __e && (__e = r);
    },
    function (t, e, r) {
      var n = r(24)("wks"),
        o = r(16),
        i = r(0).Symbol,
        s = "function" == typeof i;
      (t.exports = function (t) {
        return n[t] || (n[t] = (s && i[t]) || (s ? i : o)("Symbol." + t));
      }).store = n;
    },
    function (t, e, r) {
      var n = r(4),
        o = r(36),
        i = r(27),
        s = Object.defineProperty;
      e.f = r(5)
        ? Object.defineProperty
        : function (t, e, r) {
            if ((n(t), (e = i(e, !0)), n(r), o))
              try {
                return s(t, e, r);
              } catch (t) {}
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported!");
            return "value" in r && (t[e] = r.value), t;
          };
    },
    function (t, e, r) {
      var n = r(9);
      t.exports = function (t) {
        if (!n(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    },
    function (t, e, r) {
      t.exports = !r(13)(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    function (t, e) {
      var r = {}.hasOwnProperty;
      t.exports = function (t, e) {
        return r.call(t, e);
      };
    },
    function (t, e, r) {
      var n = r(0),
        o = r(1),
        i = r(17),
        s = r(8),
        a = r(6),
        u = function (t, e, r) {
          var f,
            c,
            h,
            l = t & u.F,
            p = t & u.G,
            d = t & u.S,
            y = t & u.P,
            v = t & u.B,
            m = t & u.W,
            g = p ? o : o[e] || (o[e] = {}),
            b = g.prototype,
            w = p ? n : d ? n[e] : (n[e] || {}).prototype;
          for (f in (p && (r = e), r))
            ((c = !l && w && void 0 !== w[f]) && a(g, f)) ||
              ((h = c ? w[f] : r[f]),
              (g[f] =
                p && "function" != typeof w[f]
                  ? r[f]
                  : v && c
                  ? i(h, n)
                  : m && w[f] == h
                  ? (function (t) {
                      var e = function (e, r, n) {
                        if (this instanceof t) {
                          switch (arguments.length) {
                            case 0:
                              return new t();
                            case 1:
                              return new t(e);
                            case 2:
                              return new t(e, r);
                          }
                          return new t(e, r, n);
                        }
                        return t.apply(this, arguments);
                      };
                      return (e.prototype = t.prototype), e;
                    })(h)
                  : y && "function" == typeof h
                  ? i(Function.call, h)
                  : h),
              y &&
                (((g.virtual || (g.virtual = {}))[f] = h),
                t & u.R && b && !b[f] && s(b, f, h)));
        };
      (u.F = 1),
        (u.G = 2),
        (u.S = 4),
        (u.P = 8),
        (u.B = 16),
        (u.W = 32),
        (u.U = 64),
        (u.R = 128),
        (t.exports = u);
    },
    function (t, e, r) {
      var n = r(3),
        o = r(19);
      t.exports = r(5)
        ? function (t, e, r) {
            return n.f(t, e, o(1, r));
          }
        : function (t, e, r) {
            return (t[e] = r), t;
          };
    },
    function (t, e) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    function (t, e, r) {
      var n = r(56),
        o = r(21);
      t.exports = function (t) {
        return n(o(t));
      };
    },
    function (t, e) {
      var r = {}.toString;
      t.exports = function (t) {
        return r.call(t).slice(8, -1);
      };
    },
    function (t, e) {
      t.exports = !0;
    },
    function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function (t, e) {
      t.exports = {};
    },
    function (t, e, r) {
      var n = r(34),
        o = r(25);
      t.exports =
        Object.keys ||
        function (t) {
          return n(t, o);
        };
    },
    function (t, e) {
      var r = 0,
        n = Math.random();
      t.exports = function (t) {
        return "Symbol(".concat(
          void 0 === t ? "" : t,
          ")_",
          (++r + n).toString(36)
        );
      };
    },
    function (t, e, r) {
      var n = r(18);
      t.exports = function (t, e, r) {
        if ((n(t), void 0 === e)) return t;
        switch (r) {
          case 1:
            return function (r) {
              return t.call(e, r);
            };
          case 2:
            return function (r, n) {
              return t.call(e, r, n);
            };
          case 3:
            return function (r, n, o) {
              return t.call(e, r, n, o);
            };
        }
        return function () {
          return t.apply(e, arguments);
        };
      };
    },
    function (t, e) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    function (t, e, r) {
      var n = r(3).f,
        o = r(6),
        i = r(2)("toStringTag");
      t.exports = function (t, e, r) {
        t &&
          !o((t = r ? t : t.prototype), i) &&
          n(t, i, { configurable: !0, value: e });
      };
    },
    function (t, e) {
      t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    function (t, e) {
      var r = Math.ceil,
        n = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
      };
    },
    function (t, e, r) {
      var n = r(24)("keys"),
        o = r(16);
      t.exports = function (t) {
        return n[t] || (n[t] = o(t));
      };
    },
    function (t, e, r) {
      var n = r(1),
        o = r(0),
        i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
      (t.exports = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: n.version,
        mode: r(12) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (t, e) {
      t.exports =
        "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ","
        );
    },
    function (t, e, r) {
      var n = r(9),
        o = r(0).document,
        i = n(o) && n(o.createElement);
      t.exports = function (t) {
        return i ? o.createElement(t) : {};
      };
    },
    function (t, e, r) {
      var n = r(9);
      t.exports = function (t, e) {
        if (!n(t)) return t;
        var r, o;
        if (e && "function" == typeof (r = t.toString) && !n((o = r.call(t))))
          return o;
        if ("function" == typeof (r = t.valueOf) && !n((o = r.call(t))))
          return o;
        if (!e && "function" == typeof (r = t.toString) && !n((o = r.call(t))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (t, e, r) {
      e.f = r(2);
    },
    function (t, e, r) {
      var n = r(0),
        o = r(1),
        i = r(12),
        s = r(28),
        a = r(3).f;
      t.exports = function (t) {
        var e = o.Symbol || (o.Symbol = i ? {} : n.Symbol || {});
        "_" == t.charAt(0) || t in e || a(e, t, { value: s.f(t) });
      };
    },
    function (t, e) {
      e.f = {}.propertyIsEnumerable;
    },
    function (t, e, r) {
      "use strict";
      var n = r(18);
      t.exports.f = function (t) {
        return new (function (t) {
          var e, r;
          (this.promise = new t(function (t, n) {
            if (void 0 !== e || void 0 !== r)
              throw TypeError("Bad Promise constructor");
            (e = t), (r = n);
          })),
            (this.resolve = n(e)),
            (this.reject = n(r));
        })(t);
      };
    },
    function (t, e) {
      var r;
      r = (function () {
        return this;
      })();
      try {
        r = r || Function("return this")() || (0, eval)("this");
      } catch (t) {
        "object" == typeof window && (r = window);
      }
      t.exports = r;
    },
    function (t, e, r) {
      var n = r(21);
      t.exports = function (t) {
        return Object(n(t));
      };
    },
    function (t, e, r) {
      var n = r(6),
        o = r(10),
        i = r(57)(!1),
        s = r(23)("IE_PROTO");
      t.exports = function (t, e) {
        var r,
          a = o(t),
          u = 0,
          f = [];
        for (r in a) r != s && n(a, r) && f.push(r);
        for (; e.length > u; ) n(a, (r = e[u++])) && (~i(f, r) || f.push(r));
        return f;
      };
    },
    function (t, e, r) {
      var n = r(22),
        o = Math.min;
      t.exports = function (t) {
        return t > 0 ? o(n(t), 9007199254740991) : 0;
      };
    },
    function (t, e, r) {
      t.exports =
        !r(5) &&
        !r(13)(function () {
          return (
            7 !=
            Object.defineProperty(r(26)("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (t, e, r) {
      "use strict";
      var n = r(63)(!0);
      r(38)(
        String,
        "String",
        function (t) {
          (this._t = String(t)), (this._i = 0);
        },
        function () {
          var t,
            e = this._t,
            r = this._i;
          return r >= e.length
            ? { value: void 0, done: !0 }
            : ((t = n(e, r)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    function (t, e, r) {
      "use strict";
      var n = r(12),
        o = r(7),
        i = r(39),
        s = r(8),
        a = r(14),
        u = r(64),
        f = r(20),
        c = r(66),
        h = r(2)("iterator"),
        l = !([].keys && "next" in [].keys()),
        p = function () {
          return this;
        };
      t.exports = function (t, e, r, d, y, v, m) {
        u(r, e, d);
        var g,
          b,
          w,
          _ = function (t) {
            if (!l && t in O) return O[t];
            switch (t) {
              case "keys":
              case "values":
                return function () {
                  return new r(this, t);
                };
            }
            return function () {
              return new r(this, t);
            };
          },
          x = e + " Iterator",
          A = "values" == y,
          E = !1,
          O = t.prototype,
          P = O[h] || O["@@iterator"] || (y && O[y]),
          S = P || _(y),
          T = y ? (A ? _("entries") : S) : void 0,
          R = ("Array" == e && O.entries) || P;
        if (
          (R &&
            (w = c(R.call(new t()))) !== Object.prototype &&
            w.next &&
            (f(w, x, !0), n || "function" == typeof w[h] || s(w, h, p)),
          A &&
            P &&
            "values" !== P.name &&
            ((E = !0),
            (S = function () {
              return P.call(this);
            })),
          (n && !m) || (!l && !E && O[h]) || s(O, h, S),
          (a[e] = S),
          (a[x] = p),
          y)
        )
          if (
            ((g = {
              values: A ? S : _("values"),
              keys: v ? S : _("keys"),
              entries: T,
            }),
            m)
          )
            for (b in g) b in O || i(O, b, g[b]);
          else o(o.P + o.F * (l || E), e, g);
        return g;
      };
    },
    function (t, e, r) {
      t.exports = r(8);
    },
    function (t, e, r) {
      var n = r(4),
        o = r(65),
        i = r(25),
        s = r(23)("IE_PROTO"),
        a = function () {},
        u = function () {
          var t,
            e = r(26)("iframe"),
            n = i.length;
          for (
            e.style.display = "none",
              r(41).appendChild(e),
              e.src = "javascript:",
              (t = e.contentWindow.document).open(),
              t.write("<script>document.F=Object</script>"),
              t.close(),
              u = t.F;
            n--;

          )
            delete u.prototype[i[n]];
          return u();
        };
      t.exports =
        Object.create ||
        function (t, e) {
          var r;
          return (
            null !== t
              ? ((a.prototype = n(t)),
                (r = new a()),
                (a.prototype = null),
                (r[s] = t))
              : (r = u()),
            void 0 === e ? r : o(r, e)
          );
        };
    },
    function (t, e, r) {
      var n = r(0).document;
      t.exports = n && n.documentElement;
    },
    function (t, e, r) {
      r(67);
      for (
        var n = r(0),
          o = r(8),
          i = r(14),
          s = r(2)("toStringTag"),
          a =
            "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
              ","
            ),
          u = 0;
        u < a.length;
        u++
      ) {
        var f = a[u],
          c = n[f],
          h = c && c.prototype;
        h && !h[s] && o(h, s, f), (i[f] = i.Array);
      }
    },
    function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    function (t, e, r) {
      var n = r(34),
        o = r(25).concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return n(t, o);
        };
    },
    function (t, e) {},
    function (t, e, r) {
      var n = r(11),
        o = r(2)("toStringTag"),
        i =
          "Arguments" ==
          n(
            (function () {
              return arguments;
            })()
          );
      t.exports = function (t) {
        var e, r, s;
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" ==
            typeof (r = (function (t, e) {
              try {
                return t[e];
              } catch (t) {}
            })((e = Object(t)), o))
          ? r
          : i
          ? n(e)
          : "Object" == (s = n(e)) && "function" == typeof e.callee
          ? "Arguments"
          : s;
      };
    },
    function (t, e, r) {
      var n = r(4),
        o = r(18),
        i = r(2)("species");
      t.exports = function (t, e) {
        var r,
          s = n(t).constructor;
        return void 0 === s || void 0 == (r = n(s)[i]) ? e : o(r);
      };
    },
    function (t, e, r) {
      var n,
        o,
        i,
        s = r(17),
        a = r(88),
        u = r(41),
        f = r(26),
        c = r(0),
        h = c.process,
        l = c.setImmediate,
        p = c.clearImmediate,
        d = c.MessageChannel,
        y = c.Dispatch,
        v = 0,
        m = {},
        g = function () {
          var t = +this;
          if (m.hasOwnProperty(t)) {
            var e = m[t];
            delete m[t], e();
          }
        },
        b = function (t) {
          g.call(t.data);
        };
      (l && p) ||
        ((l = function (t) {
          for (var e = [], r = 1; arguments.length > r; )
            e.push(arguments[r++]);
          return (
            (m[++v] = function () {
              a("function" == typeof t ? t : Function(t), e);
            }),
            n(v),
            v
          );
        }),
        (p = function (t) {
          delete m[t];
        }),
        "process" == r(11)(h)
          ? (n = function (t) {
              h.nextTick(s(g, t, 1));
            })
          : y && y.now
          ? (n = function (t) {
              y.now(s(g, t, 1));
            })
          : d
          ? ((i = (o = new d()).port2),
            (o.port1.onmessage = b),
            (n = s(i.postMessage, i, 1)))
          : c.addEventListener &&
            "function" == typeof postMessage &&
            !c.importScripts
          ? ((n = function (t) {
              c.postMessage(t + "", "*");
            }),
            c.addEventListener("message", b, !1))
          : (n =
              "onreadystatechange" in f("script")
                ? function (t) {
                    u.appendChild(f("script")).onreadystatechange =
                      function () {
                        u.removeChild(this), g.call(t);
                      };
                  }
                : function (t) {
                    setTimeout(s(g, t, 1), 0);
                  })),
        (t.exports = { set: l, clear: p });
    },
    function (t, e) {
      t.exports = function (t) {
        try {
          return { e: !1, v: t() };
        } catch (t) {
          return { e: !0, v: t };
        }
      };
    },
    function (t, e, r) {
      var n = r(4),
        o = r(9),
        i = r(31);
      t.exports = function (t, e) {
        if ((n(t), o(e) && e.constructor === t)) return e;
        var r = i.f(t);
        return (0, r.resolve)(e), r.promise;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(109),
        o = r(111);
      function i() {
        (this.protocol = null),
          (this.slashes = null),
          (this.auth = null),
          (this.host = null),
          (this.port = null),
          (this.hostname = null),
          (this.hash = null),
          (this.search = null),
          (this.query = null),
          (this.pathname = null),
          (this.path = null),
          (this.href = null);
      }
      (e.parse = b),
        (e.resolve = function (t, e) {
          return b(t, !1, !0).resolve(e);
        }),
        (e.resolveObject = function (t, e) {
          return t ? b(t, !1, !0).resolveObject(e) : e;
        }),
        (e.format = function (t) {
          o.isString(t) && (t = b(t));
          return t instanceof i ? t.format() : i.prototype.format.call(t);
        }),
        (e.Url = i);
      var s = /^([a-z0-9.+-]+:)/i,
        a = /:[0-9]*$/,
        u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        f = ["{", "}", "|", "\\", "^", "`"].concat([
          "<",
          ">",
          '"',
          "`",
          " ",
          "\r",
          "\n",
          "\t",
        ]),
        c = ["'"].concat(f),
        h = ["%", "/", "?", ";", "#"].concat(c),
        l = ["/", "?", "#"],
        p = /^[+a-z0-9A-Z_-]{0,63}$/,
        d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        y = { javascript: !0, "javascript:": !0 },
        v = { javascript: !0, "javascript:": !0 },
        m = {
          http: !0,
          https: !0,
          ftp: !0,
          gopher: !0,
          file: !0,
          "http:": !0,
          "https:": !0,
          "ftp:": !0,
          "gopher:": !0,
          "file:": !0,
        },
        g = r(112);
      function b(t, e, r) {
        if (t && o.isObject(t) && t instanceof i) return t;
        var n = new i();
        return n.parse(t, e, r), n;
      }
      (i.prototype.parse = function (t, e, r) {
        if (!o.isString(t))
          throw new TypeError(
            "Parameter 'url' must be a string, not " + typeof t
          );
        var i = t.indexOf("?"),
          a = -1 !== i && i < t.indexOf("#") ? "?" : "#",
          f = t.split(a);
        f[0] = f[0].replace(/\\/g, "/");
        var b = (t = f.join(a));
        if (((b = b.trim()), !r && 1 === t.split("#").length)) {
          var w = u.exec(b);
          if (w)
            return (
              (this.path = b),
              (this.href = b),
              (this.pathname = w[1]),
              w[2]
                ? ((this.search = w[2]),
                  (this.query = e
                    ? g.parse(this.search.substr(1))
                    : this.search.substr(1)))
                : e && ((this.search = ""), (this.query = {})),
              this
            );
        }
        var _ = s.exec(b);
        if (_) {
          var x = (_ = _[0]).toLowerCase();
          (this.protocol = x), (b = b.substr(_.length));
        }
        if (r || _ || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          var A = "//" === b.substr(0, 2);
          !A || (_ && v[_]) || ((b = b.substr(2)), (this.slashes = !0));
        }
        if (!v[_] && (A || (_ && !m[_]))) {
          for (var E, O, P = -1, S = 0; S < l.length; S++) {
            -1 !== (T = b.indexOf(l[S])) && (-1 === P || T < P) && (P = T);
          }
          -1 !== (O = -1 === P ? b.lastIndexOf("@") : b.lastIndexOf("@", P)) &&
            ((E = b.slice(0, O)),
            (b = b.slice(O + 1)),
            (this.auth = decodeURIComponent(E))),
            (P = -1);
          for (S = 0; S < h.length; S++) {
            var T;
            -1 !== (T = b.indexOf(h[S])) && (-1 === P || T < P) && (P = T);
          }
          -1 === P && (P = b.length),
            (this.host = b.slice(0, P)),
            (b = b.slice(P)),
            this.parseHost(),
            (this.hostname = this.hostname || "");
          var R =
            "[" === this.hostname[0] &&
            "]" === this.hostname[this.hostname.length - 1];
          if (!R)
            for (
              var j = this.hostname.split(/\./), U = ((S = 0), j.length);
              S < U;
              S++
            ) {
              var k = j[S];
              if (k && !k.match(p)) {
                for (var B = "", I = 0, L = k.length; I < L; I++)
                  k.charCodeAt(I) > 127 ? (B += "x") : (B += k[I]);
                if (!B.match(p)) {
                  var C = j.slice(0, S),
                    M = j.slice(S + 1),
                    D = k.match(d);
                  D && (C.push(D[1]), M.unshift(D[2])),
                    M.length && (b = "/" + M.join(".") + b),
                    (this.hostname = C.join("."));
                  break;
                }
              }
            }
          this.hostname.length > 255
            ? (this.hostname = "")
            : (this.hostname = this.hostname.toLowerCase()),
            R || (this.hostname = n.toASCII(this.hostname));
          var N = this.port ? ":" + this.port : "",
            F = this.hostname || "";
          (this.host = F + N),
            (this.href += this.host),
            R &&
              ((this.hostname = this.hostname.substr(
                1,
                this.hostname.length - 2
              )),
              "/" !== b[0] && (b = "/" + b));
        }
        if (!y[x])
          for (S = 0, U = c.length; S < U; S++) {
            var Y = c[S];
            if (-1 !== b.indexOf(Y)) {
              var q = encodeURIComponent(Y);
              q === Y && (q = escape(Y)), (b = b.split(Y).join(q));
            }
          }
        var z = b.indexOf("#");
        -1 !== z && ((this.hash = b.substr(z)), (b = b.slice(0, z)));
        var H = b.indexOf("?");
        if (
          (-1 !== H
            ? ((this.search = b.substr(H)),
              (this.query = b.substr(H + 1)),
              e && (this.query = g.parse(this.query)),
              (b = b.slice(0, H)))
            : e && ((this.search = ""), (this.query = {})),
          b && (this.pathname = b),
          m[x] && this.hostname && !this.pathname && (this.pathname = "/"),
          this.pathname || this.search)
        ) {
          N = this.pathname || "";
          var J = this.search || "";
          this.path = N + J;
        }
        return (this.href = this.format()), this;
      }),
        (i.prototype.format = function () {
          var t = this.auth || "";
          t &&
            ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ":")),
            (t += "@"));
          var e = this.protocol || "",
            r = this.pathname || "",
            n = this.hash || "",
            i = !1,
            s = "";
          this.host
            ? (i = t + this.host)
            : this.hostname &&
              ((i =
                t +
                (-1 === this.hostname.indexOf(":")
                  ? this.hostname
                  : "[" + this.hostname + "]")),
              this.port && (i += ":" + this.port)),
            this.query &&
              o.isObject(this.query) &&
              Object.keys(this.query).length &&
              (s = g.stringify(this.query));
          var a = this.search || (s && "?" + s) || "";
          return (
            e && ":" !== e.substr(-1) && (e += ":"),
            this.slashes || ((!e || m[e]) && !1 !== i)
              ? ((i = "//" + (i || "")),
                r && "/" !== r.charAt(0) && (r = "/" + r))
              : i || (i = ""),
            n && "#" !== n.charAt(0) && (n = "#" + n),
            a && "?" !== a.charAt(0) && (a = "?" + a),
            e +
              i +
              (r = r.replace(/[?#]/g, function (t) {
                return encodeURIComponent(t);
              })) +
              (a = a.replace("#", "%23")) +
              n
          );
        }),
        (i.prototype.resolve = function (t) {
          return this.resolveObject(b(t, !1, !0)).format();
        }),
        (i.prototype.resolveObject = function (t) {
          if (o.isString(t)) {
            var e = new i();
            e.parse(t, !1, !0), (t = e);
          }
          for (
            var r = new i(), n = Object.keys(this), s = 0;
            s < n.length;
            s++
          ) {
            var a = n[s];
            r[a] = this[a];
          }
          if (((r.hash = t.hash), "" === t.href))
            return (r.href = r.format()), r;
          if (t.slashes && !t.protocol) {
            for (var u = Object.keys(t), f = 0; f < u.length; f++) {
              var c = u[f];
              "protocol" !== c && (r[c] = t[c]);
            }
            return (
              m[r.protocol] &&
                r.hostname &&
                !r.pathname &&
                (r.path = r.pathname = "/"),
              (r.href = r.format()),
              r
            );
          }
          if (t.protocol && t.protocol !== r.protocol) {
            if (!m[t.protocol]) {
              for (var h = Object.keys(t), l = 0; l < h.length; l++) {
                var p = h[l];
                r[p] = t[p];
              }
              return (r.href = r.format()), r;
            }
            if (((r.protocol = t.protocol), t.host || v[t.protocol]))
              r.pathname = t.pathname;
            else {
              for (
                var d = (t.pathname || "").split("/");
                d.length && !(t.host = d.shift());

              );
              t.host || (t.host = ""),
                t.hostname || (t.hostname = ""),
                "" !== d[0] && d.unshift(""),
                d.length < 2 && d.unshift(""),
                (r.pathname = d.join("/"));
            }
            if (
              ((r.search = t.search),
              (r.query = t.query),
              (r.host = t.host || ""),
              (r.auth = t.auth),
              (r.hostname = t.hostname || t.host),
              (r.port = t.port),
              r.pathname || r.search)
            ) {
              var y = r.pathname || "",
                g = r.search || "";
              r.path = y + g;
            }
            return (
              (r.slashes = r.slashes || t.slashes), (r.href = r.format()), r
            );
          }
          var b = r.pathname && "/" === r.pathname.charAt(0),
            w = t.host || (t.pathname && "/" === t.pathname.charAt(0)),
            _ = w || b || (r.host && t.pathname),
            x = _,
            A = (r.pathname && r.pathname.split("/")) || [],
            E =
              ((d = (t.pathname && t.pathname.split("/")) || []),
              r.protocol && !m[r.protocol]);
          if (
            (E &&
              ((r.hostname = ""),
              (r.port = null),
              r.host && ("" === A[0] ? (A[0] = r.host) : A.unshift(r.host)),
              (r.host = ""),
              t.protocol &&
                ((t.hostname = null),
                (t.port = null),
                t.host && ("" === d[0] ? (d[0] = t.host) : d.unshift(t.host)),
                (t.host = null)),
              (_ = _ && ("" === d[0] || "" === A[0]))),
            w)
          )
            (r.host = t.host || "" === t.host ? t.host : r.host),
              (r.hostname =
                t.hostname || "" === t.hostname ? t.hostname : r.hostname),
              (r.search = t.search),
              (r.query = t.query),
              (A = d);
          else if (d.length)
            A || (A = []),
              A.pop(),
              (A = A.concat(d)),
              (r.search = t.search),
              (r.query = t.query);
          else if (!o.isNullOrUndefined(t.search)) {
            if (E)
              (r.hostname = r.host = A.shift()),
                (R =
                  !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) &&
                  ((r.auth = R.shift()), (r.host = r.hostname = R.shift()));
            return (
              (r.search = t.search),
              (r.query = t.query),
              (o.isNull(r.pathname) && o.isNull(r.search)) ||
                (r.path =
                  (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
              (r.href = r.format()),
              r
            );
          }
          if (!A.length)
            return (
              (r.pathname = null),
              r.search ? (r.path = "/" + r.search) : (r.path = null),
              (r.href = r.format()),
              r
            );
          for (
            var O = A.slice(-1)[0],
              P =
                ((r.host || t.host || A.length > 1) &&
                  ("." === O || ".." === O)) ||
                "" === O,
              S = 0,
              T = A.length;
            T >= 0;
            T--
          )
            "." === (O = A[T])
              ? A.splice(T, 1)
              : ".." === O
              ? (A.splice(T, 1), S++)
              : S && (A.splice(T, 1), S--);
          if (!_ && !x) for (; S--; S) A.unshift("..");
          !_ ||
            "" === A[0] ||
            (A[0] && "/" === A[0].charAt(0)) ||
            A.unshift(""),
            P && "/" !== A.join("/").substr(-1) && A.push("");
          var R,
            j = "" === A[0] || (A[0] && "/" === A[0].charAt(0));
          E &&
            ((r.hostname = r.host = j ? "" : A.length ? A.shift() : ""),
            (R = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) &&
              ((r.auth = R.shift()), (r.host = r.hostname = R.shift())));
          return (
            (_ = _ || (r.host && A.length)) && !j && A.unshift(""),
            A.length
              ? (r.pathname = A.join("/"))
              : ((r.pathname = null), (r.path = null)),
            (o.isNull(r.pathname) && o.isNull(r.search)) ||
              (r.path =
                (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
            (r.auth = t.auth || r.auth),
            (r.slashes = r.slashes || t.slashes),
            (r.href = r.format()),
            r
          );
        }),
        (i.prototype.parseHost = function () {
          var t = this.host,
            e = a.exec(t);
          e &&
            (":" !== (e = e[0]) && (this.port = e.substr(1)),
            (t = t.substr(0, t.length - e.length))),
            t && (this.hostname = t);
        });
    },
    function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = h(r(53)),
        o = h(r(60)),
        i = h(r(80)),
        s = h(r(96)),
        a = h(r(98)),
        u = h(r(99)),
        f = h(r(103)),
        c = r(104);
      function h(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var l = "https://beta.steemconnect.com",
        p = "https://api.steemconnect.com",
        d = function () {
          return "undefined" != typeof window && window;
        },
        y = function () {
          return d() && window._steemconnect;
        },
        v = function () {
          return d() && window.steem_keychain;
        },
        m = function () {
          return !y() && v();
        },
        g = (function () {
          function t(e) {
            (0, a.default)(this, t),
              (this.apiURL = e.apiURL || p),
              (this.app = e.app),
              (this.callbackURL = e.callbackURL),
              (this.accessToken = e.accessToken),
              (this.scope = e.scope || []),
              (this.responseType = e.responseType);
          }
          return (
            (0, u.default)(t, [
              {
                key: "setBaseURL",
                value: function () {
                  return (
                    console.warn(
                      'The function "setBaseUrl" is deprecated, the base URL is always "https://steemconnect.com", you can only change the API URL with "setApiURL"'
                    ),
                    this
                  );
                },
              },
              {
                key: "setApiURL",
                value: function (t) {
                  return (this.apiURL = t), this;
                },
              },
              {
                key: "setApp",
                value: function (t) {
                  return (this.app = t), this;
                },
              },
              {
                key: "setCallbackURL",
                value: function (t) {
                  return (this.app = t), this;
                },
              },
              {
                key: "callbackURL",
                value: function (t) {
                  return (this.callbackURL = t), this;
                },
              },
              {
                key: "setAccessToken",
                value: function (t) {
                  return (this.accessToken = t), this;
                },
              },
              {
                key: "removeAccessToken",
                value: function () {
                  return delete this.accessToken, this;
                },
              },
              {
                key: "setScope",
                value: function (t) {
                  return (this.scope = t), this;
                },
              },
              {
                key: "getLoginURL",
                value: function (t) {
                  var e = encodeURIComponent(this.callbackURL),
                    r =
                      "https://steemconnect.com/oauth2/authorize?client_id=" +
                      this.app +
                      "&redirect_uri=" +
                      e;
                  return (
                    "code" === this.responseType &&
                      (r += "&response_type=" + this.responseType),
                    this.scope && (r += "&scope=" + this.scope.join(",")),
                    t && (r += "&state=" + encodeURIComponent(t)),
                    r
                  );
                },
              },
              {
                key: "login",
                value: function (t, e) {
                  if (y()) {
                    var r = {};
                    this.app && (r.app = this.app),
                      t.authority && (r.authority = t.authority),
                      window._steemconnect.login(r, e);
                  } else if (v() && t.username) {
                    var n = { type: "login" };
                    this.app && (n.app = this.app);
                    var o = parseInt(new Date().getTime() / 1e3, 10),
                      i = {
                        signed_message: n,
                        authors: [t.username],
                        timestamp: o,
                      };
                    window.steem_keychain.requestSignBuffer(
                      t.username,
                      (0, s.default)(i),
                      "Posting",
                      function (t) {
                        if (t.error) return e(t.error);
                        i.signatures = [t.result];
                        var r = btoa((0, s.default)(i));
                        return e(null, r);
                      }
                    );
                  } else d() && (window.location = this.getLoginURL(t.state));
                },
              },
              {
                key: "send",
                value: function (t, e, r, n) {
                  var o = this.apiURL + "/api/" + t,
                    a = (0, f.default)(o, {
                      method: e,
                      headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        Authorization: this.accessToken,
                      },
                      body: (0, s.default)(r),
                    })
                      .then(function (t) {
                        var e = t.json();
                        return 200 !== t.status
                          ? e.then(function (t) {
                              return i.default.reject(t);
                            })
                          : e;
                      })
                      .then(function (t) {
                        return t.error ? i.default.reject(t) : t;
                      });
                  return n
                    ? a
                        .then(function (t) {
                          return n(null, t);
                        })
                        .catch(function (t) {
                          return n(t, null);
                        })
                    : a;
                },
              },
              {
                key: "me",
                value: function (t) {
                  return this.send("me", "POST", {}, t);
                },
              },
              {
                key: "broadcast",
                value: function (t, e) {
                  if (y()) {
                    var r = (0, c.encodeOps)(t);
                    return window._steemconnect.sign(r, e);
                  }
                  return this.send("broadcast", "POST", { operations: t }, e);
                },
              },
              {
                key: "vote",
                value: function (t, e, r, n, o) {
                  if (m())
                    return window.steem_keychain.requestVote(
                      t,
                      r,
                      e,
                      n,
                      function (t) {
                        return t.error ? o(t.error) : o(null, t);
                      }
                    );
                  var i = { voter: t, author: e, permlink: r, weight: n };
                  return this.broadcast([["vote", i]], o);
                },
              },
              {
                key: "comment",
                value: function (t, e, r, n, o, i, a, u) {
                  if (m())
                    return window.steem_keychain.requestPost(
                      r,
                      o,
                      i,
                      e,
                      t,
                      a,
                      n,
                      "",
                      function (t) {
                        return t.error ? u(t.error) : u(null, t);
                      }
                    );
                  var f = {
                    parent_author: t,
                    parent_permlink: e,
                    author: r,
                    permlink: n,
                    title: o,
                    body: i,
                    json_metadata: (0, s.default)(a),
                  };
                  return this.broadcast([["comment", f]], u);
                },
              },
              {
                key: "deleteComment",
                value: function (t, e, r) {
                  var n = { author: t, permlink: e };
                  return this.broadcast([["delete_comment", n]], r);
                },
              },
              {
                key: "customJson",
                value: function (t, e, r, n, o) {
                  if (m())
                    return window.steem_keychain.requestCustomJson(
                      e[0],
                      r,
                      t[0],
                      n,
                      "",
                      function (t) {
                        return t.error ? o(t.error) : o(null, t);
                      }
                    );
                  var i = {
                    required_auths: t,
                    required_posting_auths: e,
                    id: r,
                    json: n,
                  };
                  return this.broadcast([["custom_json", i]], o);
                },
              },
              {
                key: "reblog",
                value: function (t, e, r, n) {
                  var o = ["reblog", { account: t, author: e, permlink: r }];
                  return this.customJson(
                    [],
                    [t],
                    "follow",
                    (0, s.default)(o),
                    n
                  );
                },
              },
              {
                key: "follow",
                value: function (t, e, r) {
                  var n = [
                    "follow",
                    { follower: t, following: e, what: ["blog"] },
                  ];
                  return this.customJson(
                    [],
                    [t],
                    "follow",
                    (0, s.default)(n),
                    r
                  );
                },
              },
              {
                key: "unfollow",
                value: function (t, e, r) {
                  var n = ["follow", { follower: t, following: e, what: [] }];
                  return this.customJson(
                    [],
                    [t],
                    "follow",
                    (0, s.default)(n),
                    r
                  );
                },
              },
              {
                key: "ignore",
                value: function (t, e, r) {
                  var n = [
                    "follow",
                    { follower: t, following: e, what: ["ignore"] },
                  ];
                  return this.customJson(
                    [],
                    [t],
                    "follow",
                    (0, s.default)(n),
                    r
                  );
                },
              },
              {
                key: "claimRewardBalance",
                value: function (t, e, r, n, o) {
                  var i = {
                    account: t,
                    reward_steem: e,
                    reward_sbd: r,
                    reward_vests: n,
                  };
                  return this.broadcast([["claim_reward_balance", i]], o);
                },
              },
              {
                key: "revokeToken",
                value: function (t) {
                  var e = this;
                  return this.send(
                    "oauth2/token/revoke",
                    "POST",
                    { token: this.accessToken },
                    t
                  ).then(function () {
                    return e.removeAccessToken();
                  });
                },
              },
              {
                key: "updateUserMetadata",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = arguments[1];
                  return (
                    console.warn(
                      'The function "updateUserMetadata" is deprecated.'
                    ),
                    this.send("me", "PUT", { user_metadata: t }, e)
                  );
                },
              },
            ]),
            t
          );
        })();
      (e.default = {
        Client: g,
        Initialize: function (t) {
          return (
            console.warn(
              'The function "Initialize" is deprecated, please use the class "Client" instead.'
            ),
            new g(t)
          );
        },
        sign: function (t, e, r) {
          if (
            (console.warn('The function "sign" is deprecated.'),
            "string" != typeof t ||
              "object" !== (void 0 === e ? "undefined" : (0, o.default)(e)))
          )
            return {
              error: "invalid_request",
              error_description: "Request has an invalid format",
            };
          var i = "https://steemconnect.com/sign/" + t + "?";
          return (
            (i += (0, n.default)(e)
              .map(function (t) {
                return t + "=" + encodeURIComponent(e[t]);
              })
              .join("&")),
            (i += r ? "&redirect_uri=" + encodeURIComponent(r) : "")
          );
        },
        sendTransaction: function (t, e, r) {
          var n = (0, c.encodeTx)(t, e),
            o = n.replace("steem://", l + "/");
          return y()
            ? window._steemconnect.sign(n, r)
            : r && d()
            ? window.open(o, "_blank").focus()
            : o;
        },
        sendOperations: function (t, e, r) {
          var n = (0, c.encodeOps)(t, e),
            o = n.replace("steem://", l + "/");
          return y()
            ? window._steemconnect.sign(n, r)
            : r && d()
            ? window.open(o, "_blank").focus()
            : o;
        },
        sendOperation: function (t, e, r) {
          var n = (0, c.encodeOp)(t, e),
            o = n.replace("steem://", l + "/");
          return y()
            ? window._steemconnect.sign(n, r)
            : r && d()
            ? window.open(o, "_blank").focus()
            : o;
        },
        hasChromeExtension: y,
        hasSteemKeychain: v,
        useSteemKeychain: m,
      }),
        (t.exports = e.default);
    },
    function (t, e, r) {
      t.exports = { default: r(54), __esModule: !0 };
    },
    function (t, e, r) {
      r(55), (t.exports = r(1).Object.keys);
    },
    function (t, e, r) {
      var n = r(33),
        o = r(15);
      r(59)("keys", function () {
        return function (t) {
          return o(n(t));
        };
      });
    },
    function (t, e, r) {
      var n = r(11);
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function (t) {
            return "String" == n(t) ? t.split("") : Object(t);
          };
    },
    function (t, e, r) {
      var n = r(10),
        o = r(35),
        i = r(58);
      t.exports = function (t) {
        return function (e, r, s) {
          var a,
            u = n(e),
            f = o(u.length),
            c = i(s, f);
          if (t && r != r) {
            for (; f > c; ) if ((a = u[c++]) != a) return !0;
          } else
            for (; f > c; c++)
              if ((t || c in u) && u[c] === r) return t || c || 0;
          return !t && -1;
        };
      };
    },
    function (t, e, r) {
      var n = r(22),
        o = Math.max,
        i = Math.min;
      t.exports = function (t, e) {
        return (t = n(t)) < 0 ? o(t + e, 0) : i(t, e);
      };
    },
    function (t, e, r) {
      var n = r(7),
        o = r(1),
        i = r(13);
      t.exports = function (t, e) {
        var r = (o.Object || {})[t] || Object[t],
          s = {};
        (s[t] = e(r)),
          n(
            n.S +
              n.F *
                i(function () {
                  r(1);
                }),
            "Object",
            s
          );
      };
    },
    function (t, e, r) {
      "use strict";
      e.__esModule = !0;
      var n = s(r(61)),
        o = s(r(70)),
        i =
          "function" == typeof o.default && "symbol" == typeof n.default
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof o.default &&
                  t.constructor === o.default &&
                  t !== o.default.prototype
                  ? "symbol"
                  : typeof t;
              };
      function s(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.default =
        "function" == typeof o.default && "symbol" === i(n.default)
          ? function (t) {
              return void 0 === t ? "undefined" : i(t);
            }
          : function (t) {
              return t &&
                "function" == typeof o.default &&
                t.constructor === o.default &&
                t !== o.default.prototype
                ? "symbol"
                : void 0 === t
                ? "undefined"
                : i(t);
            };
    },
    function (t, e, r) {
      t.exports = { default: r(62), __esModule: !0 };
    },
    function (t, e, r) {
      r(37), r(42), (t.exports = r(28).f("iterator"));
    },
    function (t, e, r) {
      var n = r(22),
        o = r(21);
      t.exports = function (t) {
        return function (e, r) {
          var i,
            s,
            a = String(o(e)),
            u = n(r),
            f = a.length;
          return u < 0 || u >= f
            ? t
              ? ""
              : void 0
            : (i = a.charCodeAt(u)) < 55296 ||
              i > 56319 ||
              u + 1 === f ||
              (s = a.charCodeAt(u + 1)) < 56320 ||
              s > 57343
            ? t
              ? a.charAt(u)
              : i
            : t
            ? a.slice(u, u + 2)
            : s - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(40),
        o = r(19),
        i = r(20),
        s = {};
      r(8)(s, r(2)("iterator"), function () {
        return this;
      }),
        (t.exports = function (t, e, r) {
          (t.prototype = n(s, { next: o(1, r) })), i(t, e + " Iterator");
        });
    },
    function (t, e, r) {
      var n = r(3),
        o = r(4),
        i = r(15);
      t.exports = r(5)
        ? Object.defineProperties
        : function (t, e) {
            o(t);
            for (var r, s = i(e), a = s.length, u = 0; a > u; )
              n.f(t, (r = s[u++]), e[r]);
            return t;
          };
    },
    function (t, e, r) {
      var n = r(6),
        o = r(33),
        i = r(23)("IE_PROTO"),
        s = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function (t) {
          return (
            (t = o(t)),
            n(t, i)
              ? t[i]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? s
              : null
          );
        };
    },
    function (t, e, r) {
      "use strict";
      var n = r(68),
        o = r(69),
        i = r(14),
        s = r(10);
      (t.exports = r(38)(
        Array,
        "Array",
        function (t, e) {
          (this._t = s(t)), (this._i = 0), (this._k = e);
        },
        function () {
          var t = this._t,
            e = this._k,
            r = this._i++;
          return !t || r >= t.length
            ? ((this._t = void 0), o(1))
            : o(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]]);
        },
        "values"
      )),
        (i.Arguments = i.Array),
        n("keys"),
        n("values"),
        n("entries");
    },
    function (t, e) {
      t.exports = function () {};
    },
    function (t, e) {
      t.exports = function (t, e) {
        return { value: e, done: !!t };
      };
    },
    function (t, e, r) {
      t.exports = { default: r(71), __esModule: !0 };
    },
    function (t, e, r) {
      r(72), r(45), r(78), r(79), (t.exports = r(1).Symbol);
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        o = r(6),
        i = r(5),
        s = r(7),
        a = r(39),
        u = r(73).KEY,
        f = r(13),
        c = r(24),
        h = r(20),
        l = r(16),
        p = r(2),
        d = r(28),
        y = r(29),
        v = r(74),
        m = r(75),
        g = r(4),
        b = r(9),
        w = r(10),
        _ = r(27),
        x = r(19),
        A = r(40),
        E = r(76),
        O = r(77),
        P = r(3),
        S = r(15),
        T = O.f,
        R = P.f,
        j = E.f,
        U = n.Symbol,
        k = n.JSON,
        B = k && k.stringify,
        I = p("_hidden"),
        L = p("toPrimitive"),
        C = {}.propertyIsEnumerable,
        M = c("symbol-registry"),
        D = c("symbols"),
        N = c("op-symbols"),
        F = Object.prototype,
        Y = "function" == typeof U,
        q = n.QObject,
        z = !q || !q.prototype || !q.prototype.findChild,
        H =
          i &&
          f(function () {
            return (
              7 !=
              A(
                R({}, "a", {
                  get: function () {
                    return R(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (t, e, r) {
                var n = T(F, e);
                n && delete F[e], R(t, e, r), n && t !== F && R(F, e, n);
              }
            : R,
        J = function (t) {
          var e = (D[t] = A(U.prototype));
          return (e._k = t), e;
        },
        G =
          Y && "symbol" == typeof U.iterator
            ? function (t) {
                return "symbol" == typeof t;
              }
            : function (t) {
                return t instanceof U;
              },
        V = function (t, e, r) {
          return (
            t === F && V(N, e, r),
            g(t),
            (e = _(e, !0)),
            g(r),
            o(D, e)
              ? (r.enumerable
                  ? (o(t, I) && t[I][e] && (t[I][e] = !1),
                    (r = A(r, { enumerable: x(0, !1) })))
                  : (o(t, I) || R(t, I, x(1, {})), (t[I][e] = !0)),
                H(t, e, r))
              : R(t, e, r)
          );
        },
        K = function (t, e) {
          g(t);
          for (var r, n = v((e = w(e))), o = 0, i = n.length; i > o; )
            V(t, (r = n[o++]), e[r]);
          return t;
        },
        W = function (t) {
          var e = C.call(this, (t = _(t, !0)));
          return (
            !(this === F && o(D, t) && !o(N, t)) &&
            (!(e || !o(this, t) || !o(D, t) || (o(this, I) && this[I][t])) || e)
          );
        },
        $ = function (t, e) {
          if (((t = w(t)), (e = _(e, !0)), t !== F || !o(D, e) || o(N, e))) {
            var r = T(t, e);
            return (
              !r || !o(D, e) || (o(t, I) && t[I][e]) || (r.enumerable = !0), r
            );
          }
        },
        X = function (t) {
          for (var e, r = j(w(t)), n = [], i = 0; r.length > i; )
            o(D, (e = r[i++])) || e == I || e == u || n.push(e);
          return n;
        },
        Z = function (t) {
          for (
            var e, r = t === F, n = j(r ? N : w(t)), i = [], s = 0;
            n.length > s;

          )
            !o(D, (e = n[s++])) || (r && !o(F, e)) || i.push(D[e]);
          return i;
        };
      Y ||
        (a(
          (U = function () {
            if (this instanceof U)
              throw TypeError("Symbol is not a constructor!");
            var t = l(arguments.length > 0 ? arguments[0] : void 0),
              e = function (r) {
                this === F && e.call(N, r),
                  o(this, I) && o(this[I], t) && (this[I][t] = !1),
                  H(this, t, x(1, r));
              };
            return i && z && H(F, t, { configurable: !0, set: e }), J(t);
          }).prototype,
          "toString",
          function () {
            return this._k;
          }
        ),
        (O.f = $),
        (P.f = V),
        (r(44).f = E.f = X),
        (r(30).f = W),
        (r(43).f = Z),
        i && !r(12) && a(F, "propertyIsEnumerable", W, !0),
        (d.f = function (t) {
          return J(p(t));
        })),
        s(s.G + s.W + s.F * !Y, { Symbol: U });
      for (
        var Q =
            "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
              ","
            ),
          tt = 0;
        Q.length > tt;

      )
        p(Q[tt++]);
      for (var et = S(p.store), rt = 0; et.length > rt; ) y(et[rt++]);
      s(s.S + s.F * !Y, "Symbol", {
        for: function (t) {
          return o(M, (t += "")) ? M[t] : (M[t] = U(t));
        },
        keyFor: function (t) {
          if (!G(t)) throw TypeError(t + " is not a symbol!");
          for (var e in M) if (M[e] === t) return e;
        },
        useSetter: function () {
          z = !0;
        },
        useSimple: function () {
          z = !1;
        },
      }),
        s(s.S + s.F * !Y, "Object", {
          create: function (t, e) {
            return void 0 === e ? A(t) : K(A(t), e);
          },
          defineProperty: V,
          defineProperties: K,
          getOwnPropertyDescriptor: $,
          getOwnPropertyNames: X,
          getOwnPropertySymbols: Z,
        }),
        k &&
          s(
            s.S +
              s.F *
                (!Y ||
                  f(function () {
                    var t = U();
                    return (
                      "[null]" != B([t]) ||
                      "{}" != B({ a: t }) ||
                      "{}" != B(Object(t))
                    );
                  })),
            "JSON",
            {
              stringify: function (t) {
                for (var e, r, n = [t], o = 1; arguments.length > o; )
                  n.push(arguments[o++]);
                if (((r = e = n[1]), (b(e) || void 0 !== t) && !G(t)))
                  return (
                    m(e) ||
                      (e = function (t, e) {
                        if (
                          ("function" == typeof r && (e = r.call(this, t, e)),
                          !G(e))
                        )
                          return e;
                      }),
                    (n[1] = e),
                    B.apply(k, n)
                  );
              },
            }
          ),
        U.prototype[L] || r(8)(U.prototype, L, U.prototype.valueOf),
        h(U, "Symbol"),
        h(Math, "Math", !0),
        h(n.JSON, "JSON", !0);
    },
    function (t, e, r) {
      var n = r(16)("meta"),
        o = r(9),
        i = r(6),
        s = r(3).f,
        a = 0,
        u =
          Object.isExtensible ||
          function () {
            return !0;
          },
        f = !r(13)(function () {
          return u(Object.preventExtensions({}));
        }),
        c = function (t) {
          s(t, n, { value: { i: "O" + ++a, w: {} } });
        },
        h = (t.exports = {
          KEY: n,
          NEED: !1,
          fastKey: function (t, e) {
            if (!o(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!i(t, n)) {
              if (!u(t)) return "F";
              if (!e) return "E";
              c(t);
            }
            return t[n].i;
          },
          getWeak: function (t, e) {
            if (!i(t, n)) {
              if (!u(t)) return !0;
              if (!e) return !1;
              c(t);
            }
            return t[n].w;
          },
          onFreeze: function (t) {
            return f && h.NEED && u(t) && !i(t, n) && c(t), t;
          },
        });
    },
    function (t, e, r) {
      var n = r(15),
        o = r(43),
        i = r(30);
      t.exports = function (t) {
        var e = n(t),
          r = o.f;
        if (r)
          for (var s, a = r(t), u = i.f, f = 0; a.length > f; )
            u.call(t, (s = a[f++])) && e.push(s);
        return e;
      };
    },
    function (t, e, r) {
      var n = r(11);
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == n(t);
        };
    },
    function (t, e, r) {
      var n = r(10),
        o = r(44).f,
        i = {}.toString,
        s =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      t.exports.f = function (t) {
        return s && "[object Window]" == i.call(t)
          ? (function (t) {
              try {
                return o(t);
              } catch (t) {
                return s.slice();
              }
            })(t)
          : o(n(t));
      };
    },
    function (t, e, r) {
      var n = r(30),
        o = r(19),
        i = r(10),
        s = r(27),
        a = r(6),
        u = r(36),
        f = Object.getOwnPropertyDescriptor;
      e.f = r(5)
        ? f
        : function (t, e) {
            if (((t = i(t)), (e = s(e, !0)), u))
              try {
                return f(t, e);
              } catch (t) {}
            if (a(t, e)) return o(!n.f.call(t, e), t[e]);
          };
    },
    function (t, e, r) {
      r(29)("asyncIterator");
    },
    function (t, e, r) {
      r(29)("observable");
    },
    function (t, e, r) {
      t.exports = { default: r(81), __esModule: !0 };
    },
    function (t, e, r) {
      r(45), r(37), r(42), r(82), r(94), r(95), (t.exports = r(1).Promise);
    },
    function (t, e, r) {
      "use strict";
      var n,
        o,
        i,
        s,
        a = r(12),
        u = r(0),
        f = r(17),
        c = r(46),
        h = r(7),
        l = r(9),
        p = r(18),
        d = r(83),
        y = r(84),
        v = r(47),
        m = r(48).set,
        g = r(89)(),
        b = r(31),
        w = r(49),
        _ = r(90),
        x = r(50),
        A = u.TypeError,
        E = u.process,
        O = E && E.versions,
        P = (O && O.v8) || "",
        S = u.Promise,
        T = "process" == c(E),
        R = function () {},
        j = (o = b.f),
        U = !!(function () {
          try {
            var t = S.resolve(1),
              e = ((t.constructor = {})[r(2)("species")] = function (t) {
                t(R, R);
              });
            return (
              (T || "function" == typeof PromiseRejectionEvent) &&
              t.then(R) instanceof e &&
              0 !== P.indexOf("6.6") &&
              -1 === _.indexOf("Chrome/66")
            );
          } catch (t) {}
        })(),
        k = function (t) {
          var e;
          return !(!l(t) || "function" != typeof (e = t.then)) && e;
        },
        B = function (t, e) {
          if (!t._n) {
            t._n = !0;
            var r = t._c;
            g(function () {
              for (
                var n = t._v,
                  o = 1 == t._s,
                  i = 0,
                  s = function (e) {
                    var r,
                      i,
                      s,
                      a = o ? e.ok : e.fail,
                      u = e.resolve,
                      f = e.reject,
                      c = e.domain;
                    try {
                      a
                        ? (o || (2 == t._h && C(t), (t._h = 1)),
                          !0 === a
                            ? (r = n)
                            : (c && c.enter(),
                              (r = a(n)),
                              c && (c.exit(), (s = !0))),
                          r === e.promise
                            ? f(A("Promise-chain cycle"))
                            : (i = k(r))
                            ? i.call(r, u, f)
                            : u(r))
                        : f(n);
                    } catch (t) {
                      c && !s && c.exit(), f(t);
                    }
                  };
                r.length > i;

              )
                s(r[i++]);
              (t._c = []), (t._n = !1), e && !t._h && I(t);
            });
          }
        },
        I = function (t) {
          m.call(u, function () {
            var e,
              r,
              n,
              o = t._v,
              i = L(t);
            if (
              (i &&
                ((e = w(function () {
                  T
                    ? E.emit("unhandledRejection", o, t)
                    : (r = u.onunhandledrejection)
                    ? r({ promise: t, reason: o })
                    : (n = u.console) &&
                      n.error &&
                      n.error("Unhandled promise rejection", o);
                })),
                (t._h = T || L(t) ? 2 : 1)),
              (t._a = void 0),
              i && e.e)
            )
              throw e.v;
          });
        },
        L = function (t) {
          return 1 !== t._h && 0 === (t._a || t._c).length;
        },
        C = function (t) {
          m.call(u, function () {
            var e;
            T
              ? E.emit("rejectionHandled", t)
              : (e = u.onrejectionhandled) && e({ promise: t, reason: t._v });
          });
        },
        M = function (t) {
          var e = this;
          e._d ||
            ((e._d = !0),
            ((e = e._w || e)._v = t),
            (e._s = 2),
            e._a || (e._a = e._c.slice()),
            B(e, !0));
        },
        D = function (t) {
          var e,
            r = this;
          if (!r._d) {
            (r._d = !0), (r = r._w || r);
            try {
              if (r === t) throw A("Promise can't be resolved itself");
              (e = k(t))
                ? g(function () {
                    var n = { _w: r, _d: !1 };
                    try {
                      e.call(t, f(D, n, 1), f(M, n, 1));
                    } catch (t) {
                      M.call(n, t);
                    }
                  })
                : ((r._v = t), (r._s = 1), B(r, !1));
            } catch (t) {
              M.call({ _w: r, _d: !1 }, t);
            }
          }
        };
      U ||
        ((S = function (t) {
          d(this, S, "Promise", "_h"), p(t), n.call(this);
          try {
            t(f(D, this, 1), f(M, this, 1));
          } catch (t) {
            M.call(this, t);
          }
        }),
        ((n = function (t) {
          (this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1);
        }).prototype = r(91)(S.prototype, {
          then: function (t, e) {
            var r = j(v(this, S));
            return (
              (r.ok = "function" != typeof t || t),
              (r.fail = "function" == typeof e && e),
              (r.domain = T ? E.domain : void 0),
              this._c.push(r),
              this._a && this._a.push(r),
              this._s && B(this, !1),
              r.promise
            );
          },
          catch: function (t) {
            return this.then(void 0, t);
          },
        })),
        (i = function () {
          var t = new n();
          (this.promise = t),
            (this.resolve = f(D, t, 1)),
            (this.reject = f(M, t, 1));
        }),
        (b.f = j =
          function (t) {
            return t === S || t === s ? new i(t) : o(t);
          })),
        h(h.G + h.W + h.F * !U, { Promise: S }),
        r(20)(S, "Promise"),
        r(92)("Promise"),
        (s = r(1).Promise),
        h(h.S + h.F * !U, "Promise", {
          reject: function (t) {
            var e = j(this);
            return (0, e.reject)(t), e.promise;
          },
        }),
        h(h.S + h.F * (a || !U), "Promise", {
          resolve: function (t) {
            return x(a && this === s ? S : this, t);
          },
        }),
        h(
          h.S +
            h.F *
              !(
                U &&
                r(93)(function (t) {
                  S.all(t).catch(R);
                })
              ),
          "Promise",
          {
            all: function (t) {
              var e = this,
                r = j(e),
                n = r.resolve,
                o = r.reject,
                i = w(function () {
                  var r = [],
                    i = 0,
                    s = 1;
                  y(t, !1, function (t) {
                    var a = i++,
                      u = !1;
                    r.push(void 0),
                      s++,
                      e.resolve(t).then(function (t) {
                        u || ((u = !0), (r[a] = t), --s || n(r));
                      }, o);
                  }),
                    --s || n(r);
                });
              return i.e && o(i.v), r.promise;
            },
            race: function (t) {
              var e = this,
                r = j(e),
                n = r.reject,
                o = w(function () {
                  y(t, !1, function (t) {
                    e.resolve(t).then(r.resolve, n);
                  });
                });
              return o.e && n(o.v), r.promise;
            },
          }
        );
    },
    function (t, e) {
      t.exports = function (t, e, r, n) {
        if (!(t instanceof e) || (void 0 !== n && n in t))
          throw TypeError(r + ": incorrect invocation!");
        return t;
      };
    },
    function (t, e, r) {
      var n = r(17),
        o = r(85),
        i = r(86),
        s = r(4),
        a = r(35),
        u = r(87),
        f = {},
        c = {};
      ((e = t.exports =
        function (t, e, r, h, l) {
          var p,
            d,
            y,
            v,
            m = l
              ? function () {
                  return t;
                }
              : u(t),
            g = n(r, h, e ? 2 : 1),
            b = 0;
          if ("function" != typeof m) throw TypeError(t + " is not iterable!");
          if (i(m)) {
            for (p = a(t.length); p > b; b++)
              if (
                (v = e ? g(s((d = t[b]))[0], d[1]) : g(t[b])) === f ||
                v === c
              )
                return v;
          } else
            for (y = m.call(t); !(d = y.next()).done; )
              if ((v = o(y, g, d.value, e)) === f || v === c) return v;
        }).BREAK = f),
        (e.RETURN = c);
    },
    function (t, e, r) {
      var n = r(4);
      t.exports = function (t, e, r, o) {
        try {
          return o ? e(n(r)[0], r[1]) : e(r);
        } catch (e) {
          var i = t.return;
          throw (void 0 !== i && n(i.call(t)), e);
        }
      };
    },
    function (t, e, r) {
      var n = r(14),
        o = r(2)("iterator"),
        i = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (n.Array === t || i[o] === t);
      };
    },
    function (t, e, r) {
      var n = r(46),
        o = r(2)("iterator"),
        i = r(14);
      t.exports = r(1).getIteratorMethod = function (t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || i[n(t)];
      };
    },
    function (t, e) {
      t.exports = function (t, e, r) {
        var n = void 0 === r;
        switch (e.length) {
          case 0:
            return n ? t() : t.call(r);
          case 1:
            return n ? t(e[0]) : t.call(r, e[0]);
          case 2:
            return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
          case 3:
            return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
          case 4:
            return n
              ? t(e[0], e[1], e[2], e[3])
              : t.call(r, e[0], e[1], e[2], e[3]);
        }
        return t.apply(r, e);
      };
    },
    function (t, e, r) {
      var n = r(0),
        o = r(48).set,
        i = n.MutationObserver || n.WebKitMutationObserver,
        s = n.process,
        a = n.Promise,
        u = "process" == r(11)(s);
      t.exports = function () {
        var t,
          e,
          r,
          f = function () {
            var n, o;
            for (u && (n = s.domain) && n.exit(); t; ) {
              (o = t.fn), (t = t.next);
              try {
                o();
              } catch (n) {
                throw (t ? r() : (e = void 0), n);
              }
            }
            (e = void 0), n && n.enter();
          };
        if (u)
          r = function () {
            s.nextTick(f);
          };
        else if (!i || (n.navigator && n.navigator.standalone))
          if (a && a.resolve) {
            var c = a.resolve(void 0);
            r = function () {
              c.then(f);
            };
          } else
            r = function () {
              o.call(n, f);
            };
        else {
          var h = !0,
            l = document.createTextNode("");
          new i(f).observe(l, { characterData: !0 }),
            (r = function () {
              l.data = h = !h;
            });
        }
        return function (n) {
          var o = { fn: n, next: void 0 };
          e && (e.next = o), t || ((t = o), r()), (e = o);
        };
      };
    },
    function (t, e, r) {
      var n = r(0).navigator;
      t.exports = (n && n.userAgent) || "";
    },
    function (t, e, r) {
      var n = r(8);
      t.exports = function (t, e, r) {
        for (var o in e) r && t[o] ? (t[o] = e[o]) : n(t, o, e[o]);
        return t;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        o = r(1),
        i = r(3),
        s = r(5),
        a = r(2)("species");
      t.exports = function (t) {
        var e = "function" == typeof o[t] ? o[t] : n[t];
        s &&
          e &&
          !e[a] &&
          i.f(e, a, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    function (t, e, r) {
      var n = r(2)("iterator"),
        o = !1;
      try {
        var i = [7][n]();
        (i.return = function () {
          o = !0;
        }),
          Array.from(i, function () {
            throw 2;
          });
      } catch (t) {}
      t.exports = function (t, e) {
        if (!e && !o) return !1;
        var r = !1;
        try {
          var i = [7],
            s = i[n]();
          (s.next = function () {
            return { done: (r = !0) };
          }),
            (i[n] = function () {
              return s;
            }),
            t(i);
        } catch (t) {}
        return r;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(7),
        o = r(1),
        i = r(0),
        s = r(47),
        a = r(50);
      n(n.P + n.R, "Promise", {
        finally: function (t) {
          var e = s(this, o.Promise || i.Promise),
            r = "function" == typeof t;
          return this.then(
            r
              ? function (r) {
                  return a(e, t()).then(function () {
                    return r;
                  });
                }
              : t,
            r
              ? function (r) {
                  return a(e, t()).then(function () {
                    throw r;
                  });
                }
              : t
          );
        },
      });
    },
    function (t, e, r) {
      "use strict";
      var n = r(7),
        o = r(31),
        i = r(49);
      n(n.S, "Promise", {
        try: function (t) {
          var e = o.f(this),
            r = i(t);
          return (r.e ? e.reject : e.resolve)(r.v), e.promise;
        },
      });
    },
    function (t, e, r) {
      t.exports = { default: r(97), __esModule: !0 };
    },
    function (t, e, r) {
      var n = r(1),
        o = n.JSON || (n.JSON = { stringify: JSON.stringify });
      t.exports = function (t) {
        return o.stringify.apply(o, arguments);
      };
    },
    function (t, e, r) {
      "use strict";
      (e.__esModule = !0),
        (e.default = function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        });
    },
    function (t, e, r) {
      "use strict";
      e.__esModule = !0;
      var n = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(r(100));
      e.default = (function () {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              (0, n.default)(t, o.key, o);
          }
        }
        return function (e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })();
    },
    function (t, e, r) {
      t.exports = { default: r(101), __esModule: !0 };
    },
    function (t, e, r) {
      r(102);
      var n = r(1).Object;
      t.exports = function (t, e, r) {
        return n.defineProperty(t, e, r);
      };
    },
    function (t, e, r) {
      var n = r(7);
      n(n.S + n.F * !r(5), "Object", { defineProperty: r(3).f });
    },
    function (t, e) {
      var r = (function (t) {
        function e() {
          this.fetch = !1;
        }
        return (e.prototype = t), new e();
      })("undefined" != typeof self ? self : this);
      !(function (t) {
        !(function (e) {
          var r = {
            searchParams: "URLSearchParams" in t,
            iterable: "Symbol" in t && "iterator" in Symbol,
            blob:
              "FileReader" in t &&
              "Blob" in t &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (t) {
                  return !1;
                }
              })(),
            formData: "FormData" in t,
            arrayBuffer: "ArrayBuffer" in t,
          };
          if (r.arrayBuffer)
            var n = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              o =
                ArrayBuffer.isView ||
                function (t) {
                  return t && n.indexOf(Object.prototype.toString.call(t)) > -1;
                };
          function i(t) {
            if (
              ("string" != typeof t && (t = String(t)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
            )
              throw new TypeError("Invalid character in header field name");
            return t.toLowerCase();
          }
          function s(t) {
            return "string" != typeof t && (t = String(t)), t;
          }
          function a(t) {
            var e = {
              next: function () {
                var e = t.shift();
                return { done: void 0 === e, value: e };
              },
            };
            return (
              r.iterable &&
                (e[Symbol.iterator] = function () {
                  return e;
                }),
              e
            );
          }
          function u(t) {
            (this.map = {}),
              t instanceof u
                ? t.forEach(function (t, e) {
                    this.append(e, t);
                  }, this)
                : Array.isArray(t)
                ? t.forEach(function (t) {
                    this.append(t[0], t[1]);
                  }, this)
                : t &&
                  Object.getOwnPropertyNames(t).forEach(function (e) {
                    this.append(e, t[e]);
                  }, this);
          }
          function f(t) {
            if (t.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0;
          }
          function c(t) {
            return new Promise(function (e, r) {
              (t.onload = function () {
                e(t.result);
              }),
                (t.onerror = function () {
                  r(t.error);
                });
            });
          }
          function h(t) {
            var e = new FileReader(),
              r = c(e);
            return e.readAsArrayBuffer(t), r;
          }
          function l(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer;
          }
          function p() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (t) {
                (this._bodyInit = t),
                  t
                    ? "string" == typeof t
                      ? (this._bodyText = t)
                      : r.blob && Blob.prototype.isPrototypeOf(t)
                      ? (this._bodyBlob = t)
                      : r.formData && FormData.prototype.isPrototypeOf(t)
                      ? (this._bodyFormData = t)
                      : r.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(t)
                      ? (this._bodyText = t.toString())
                      : r.arrayBuffer &&
                        r.blob &&
                        (function (t) {
                          return t && DataView.prototype.isPrototypeOf(t);
                        })(t)
                      ? ((this._bodyArrayBuffer = l(t.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : r.arrayBuffer &&
                        (ArrayBuffer.prototype.isPrototypeOf(t) || o(t))
                      ? (this._bodyArrayBuffer = l(t))
                      : (this._bodyText = t = Object.prototype.toString.call(t))
                    : (this._bodyText = ""),
                  this.headers.get("content-type") ||
                    ("string" == typeof t
                      ? this.headers.set(
                          "content-type",
                          "text/plain;charset=UTF-8"
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : r.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(t) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ));
              }),
              r.blob &&
                ((this.blob = function () {
                  var t = f(this);
                  if (t) return t;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? f(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(h);
                })),
              (this.text = function () {
                var t = f(this);
                if (t) return t;
                if (this._bodyBlob)
                  return (function (t) {
                    var e = new FileReader(),
                      r = c(e);
                    return e.readAsText(t), r;
                  })(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (t) {
                      for (
                        var e = new Uint8Array(t),
                          r = new Array(e.length),
                          n = 0;
                        n < e.length;
                        n++
                      )
                        r[n] = String.fromCharCode(e[n]);
                      return r.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              r.formData &&
                (this.formData = function () {
                  return this.text().then(v);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (u.prototype.append = function (t, e) {
            (t = i(t)), (e = s(e));
            var r = this.map[t];
            this.map[t] = r ? r + ", " + e : e;
          }),
            (u.prototype.delete = function (t) {
              delete this.map[i(t)];
            }),
            (u.prototype.get = function (t) {
              return (t = i(t)), this.has(t) ? this.map[t] : null;
            }),
            (u.prototype.has = function (t) {
              return this.map.hasOwnProperty(i(t));
            }),
            (u.prototype.set = function (t, e) {
              this.map[i(t)] = s(e);
            }),
            (u.prototype.forEach = function (t, e) {
              for (var r in this.map)
                this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
            }),
            (u.prototype.keys = function () {
              var t = [];
              return (
                this.forEach(function (e, r) {
                  t.push(r);
                }),
                a(t)
              );
            }),
            (u.prototype.values = function () {
              var t = [];
              return (
                this.forEach(function (e) {
                  t.push(e);
                }),
                a(t)
              );
            }),
            (u.prototype.entries = function () {
              var t = [];
              return (
                this.forEach(function (e, r) {
                  t.push([r, e]);
                }),
                a(t)
              );
            }),
            r.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
          var d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function y(t, e) {
            var r = (e = e || {}).body;
            if (t instanceof y) {
              if (t.bodyUsed) throw new TypeError("Already read");
              (this.url = t.url),
                (this.credentials = t.credentials),
                e.headers || (this.headers = new u(t.headers)),
                (this.method = t.method),
                (this.mode = t.mode),
                (this.signal = t.signal),
                r ||
                  null == t._bodyInit ||
                  ((r = t._bodyInit), (t.bodyUsed = !0));
            } else this.url = String(t);
            if (
              ((this.credentials =
                e.credentials || this.credentials || "same-origin"),
              (!e.headers && this.headers) || (this.headers = new u(e.headers)),
              (this.method = (function (t) {
                var e = t.toUpperCase();
                return d.indexOf(e) > -1 ? e : t;
              })(e.method || this.method || "GET")),
              (this.mode = e.mode || this.mode || null),
              (this.signal = e.signal || this.signal),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && r)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r);
          }
          function v(t) {
            var e = new FormData();
            return (
              t
                .trim()
                .split("&")
                .forEach(function (t) {
                  if (t) {
                    var r = t.split("="),
                      n = r.shift().replace(/\+/g, " "),
                      o = r.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(n), decodeURIComponent(o));
                  }
                }),
              e
            );
          }
          function m(t, e) {
            e || (e = {}),
              (this.type = "default"),
              (this.status = void 0 === e.status ? 200 : e.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in e ? e.statusText : "OK"),
              (this.headers = new u(e.headers)),
              (this.url = e.url || ""),
              this._initBody(t);
          }
          (y.prototype.clone = function () {
            return new y(this, { body: this._bodyInit });
          }),
            p.call(y.prototype),
            p.call(m.prototype),
            (m.prototype.clone = function () {
              return new m(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new u(this.headers),
                url: this.url,
              });
            }),
            (m.error = function () {
              var t = new m(null, { status: 0, statusText: "" });
              return (t.type = "error"), t;
            });
          var g = [301, 302, 303, 307, 308];
          (m.redirect = function (t, e) {
            if (-1 === g.indexOf(e))
              throw new RangeError("Invalid status code");
            return new m(null, { status: e, headers: { location: t } });
          }),
            (e.DOMException = t.DOMException);
          try {
            new e.DOMException();
          } catch (t) {
            (e.DOMException = function (t, e) {
              (this.message = t), (this.name = e);
              var r = Error(t);
              this.stack = r.stack;
            }),
              (e.DOMException.prototype = Object.create(Error.prototype)),
              (e.DOMException.prototype.constructor = e.DOMException);
          }
          function b(t, n) {
            return new Promise(function (o, i) {
              var s = new y(t, n);
              if (s.signal && s.signal.aborted)
                return i(new e.DOMException("Aborted", "AbortError"));
              var a = new XMLHttpRequest();
              function f() {
                a.abort();
              }
              (a.onload = function () {
                var t = {
                  status: a.status,
                  statusText: a.statusText,
                  headers: (function (t) {
                    var e = new u();
                    return (
                      t
                        .replace(/\r?\n[\t ]+/g, " ")
                        .split(/\r?\n/)
                        .forEach(function (t) {
                          var r = t.split(":"),
                            n = r.shift().trim();
                          if (n) {
                            var o = r.join(":").trim();
                            e.append(n, o);
                          }
                        }),
                      e
                    );
                  })(a.getAllResponseHeaders() || ""),
                };
                t.url =
                  "responseURL" in a
                    ? a.responseURL
                    : t.headers.get("X-Request-URL");
                var e = "response" in a ? a.response : a.responseText;
                o(new m(e, t));
              }),
                (a.onerror = function () {
                  i(new TypeError("Network request failed"));
                }),
                (a.ontimeout = function () {
                  i(new TypeError("Network request failed"));
                }),
                (a.onabort = function () {
                  i(new e.DOMException("Aborted", "AbortError"));
                }),
                a.open(s.method, s.url, !0),
                "include" === s.credentials
                  ? (a.withCredentials = !0)
                  : "omit" === s.credentials && (a.withCredentials = !1),
                "responseType" in a && r.blob && (a.responseType = "blob"),
                s.headers.forEach(function (t, e) {
                  a.setRequestHeader(e, t);
                }),
                s.signal &&
                  (s.signal.addEventListener("abort", f),
                  (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      s.signal.removeEventListener("abort", f);
                  })),
                a.send(void 0 === s._bodyInit ? null : s._bodyInit);
            });
          }
          (b.polyfill = !0),
            t.fetch ||
              ((t.fetch = b),
              (t.Headers = u),
              (t.Request = y),
              (t.Response = m)),
            (e.Headers = u),
            (e.Request = y),
            (e.Response = m),
            (e.fetch = b);
        })({});
      })(r),
        delete r.fetch.polyfill,
        ((e = r.fetch).default = r.fetch),
        (e.fetch = r.fetch),
        (e.Headers = r.Headers),
        (e.Request = r.Request),
        (e.Response = r.Response),
        (t.exports = e);
    },
    function (t, e, r) {
      "use strict";
      (function (t, n) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          "undefined" == typeof URL && (t.URL = r(51).URL),
          "undefined" == typeof URLSearchParams &&
            (t.URLSearchParams = r(51).URLSearchParams),
          "undefined" == typeof btoa &&
            (t.btoa = function (t) {
              return new n(t, "binary").toString("base64");
            }),
          "undefined" == typeof atob &&
            (t.atob = function (t) {
              return new n(t, "base64").toString("binary");
            });
        var o = { "/": "_", _: "/", "+": "-", "-": "+", "=": ".", ".": "=" },
          i = function (t) {
            return btoa(t).replace(/(\+|\/|=)/g, function (t) {
              return o[t];
            });
          },
          s = function (t) {
            return atob(
              t.replace(/(-|_|\.)/g, function (t) {
                return o[t];
              })
            );
          };
        e.decode = function (t) {
          var e = t.slice(0, 6),
            r = new URL(t.replace(/^steem:/, "http:"));
          if ("steem:" !== e)
            throw new Error(
              "Invalid protocol, expected 'steem:' got '" + e + "'"
            );
          if ("sign" !== r.host)
            throw new Error(
              "Invalid action, expected 'sign' got '" + r.host + "'"
            );
          var n,
            o,
            i = r.pathname.split("/").slice(1),
            a = i[0],
            u = i[1];
          try {
            n = JSON.parse(s(u));
          } catch (t) {
            throw ((t.message = "Invalid payload: " + t.message), t);
          }
          switch (a) {
            case "tx":
              o = n;
              break;
            case "op":
            case "ops":
              o = {
                ref_block_num: "__ref_block_num",
                ref_block_prefix: "__ref_block_prefix",
                expiration: "__expiration",
                extensions: [],
                operations: "ops" === a ? n : [n],
              };
              break;
            default:
              throw new Error("Invalid signing action '" + a + "'");
          }
          var f = {};
          return (
            r.searchParams.has("cb") &&
              (f.callback = s(r.searchParams.get("cb"))),
            r.searchParams.has("nb") && (f.no_broadcast = !0),
            r.searchParams.has("s") && (f.signer = r.searchParams.get("s")),
            { tx: o, params: f }
          );
        };
        var a = /(__(ref_block_(num|prefix)|expiration|signer))/g;
        e.resolveTransaction = function (t, e, r) {
          var n = e.signer || r.preferred_signer;
          if (!r.signers.includes(n))
            throw new Error("Signer '" + n + "' not available");
          var o = {
              __ref_block_num: r.ref_block_num,
              __ref_block_prefix: r.ref_block_prefix,
              __expiration: r.expiration,
              __signer: n,
            },
            i = function (t) {
              var e = typeof t;
              switch (
                ("object" === e && Array.isArray(t)
                  ? (e = "array")
                  : null === t && (e = "null"),
                e)
              ) {
                case "string":
                  return t.replace(a, function (t) {
                    return o[t];
                  });
                case "array":
                  return t.map(i);
                case "object":
                  for (
                    var r = {}, n = 0, s = Object.entries(t);
                    n < s.length;
                    n++
                  ) {
                    var u = s[n],
                      f = u[0],
                      c = u[1];
                    r[f] = i(c);
                  }
                  return r;
                default:
                  return t;
              }
            };
          return { signer: n, tx: i(t) };
        };
        var u = /({{(sig|id|block|txn)}})/g;
        function f(t) {
          var e = new URLSearchParams();
          !0 === t.no_broadcast && e.set("nb", ""),
            t.signer && e.set("s", t.signer),
            t.callback && e.set("cb", i(t.callback));
          var r = e.toString();
          return r.length > 0 && (r = "?" + r), r;
        }
        function c(t) {
          return i(JSON.stringify(t, null, 0));
        }
        (e.resolveCallback = function (t, e) {
          return t.replace(u, function (t, r, n) {
            return e[n] || "";
          });
        }),
          (e.encodeTx = function (t, e) {
            return void 0 === e && (e = {}), "steem://sign/tx/" + c(t) + f(e);
          }),
          (e.encodeOp = function (t, e) {
            return void 0 === e && (e = {}), "steem://sign/op/" + c(t) + f(e);
          }),
          (e.encodeOps = function (t, e) {
            return void 0 === e && (e = {}), "steem://sign/ops/" + c(t) + f(e);
          });
      }).call(this, r(32), r(105).Buffer);
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var n = r(106),
          o = r(107),
          i = r(108);
        function s() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(t, e) {
          if (s() < e) throw new RangeError("Invalid typed array length");
          return (
            u.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = u.prototype)
              : (null === t && (t = new u(e)), (t.length = e)),
            t
          );
        }
        function u(t, e, r) {
          if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
            return new u(t, e, r);
          if ("number" == typeof t) {
            if ("string" == typeof e)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return h(this, t);
          }
          return f(this, t, e, r);
        }
        function f(t, e, r, n) {
          if ("number" == typeof e)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function (t, e, r, n) {
                if ((e.byteLength, r < 0 || e.byteLength < r))
                  throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < r + (n || 0))
                  throw new RangeError("'length' is out of bounds");
                e =
                  void 0 === r && void 0 === n
                    ? new Uint8Array(e)
                    : void 0 === n
                    ? new Uint8Array(e, r)
                    : new Uint8Array(e, r, n);
                u.TYPED_ARRAY_SUPPORT
                  ? ((t = e).__proto__ = u.prototype)
                  : (t = l(t, e));
                return t;
              })(t, e, r, n)
            : "string" == typeof e
            ? (function (t, e, r) {
                ("string" == typeof r && "" !== r) || (r = "utf8");
                if (!u.isEncoding(r))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var n = 0 | d(e, r),
                  o = (t = a(t, n)).write(e, r);
                o !== n && (t = t.slice(0, o));
                return t;
              })(t, e, r)
            : (function (t, e) {
                if (u.isBuffer(e)) {
                  var r = 0 | p(e.length);
                  return 0 === (t = a(t, r)).length
                    ? t
                    : (e.copy(t, 0, 0, r), t);
                }
                if (e) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    "length" in e
                  )
                    return "number" != typeof e.length ||
                      (function (t) {
                        return t != t;
                      })(e.length)
                      ? a(t, 0)
                      : l(t, e);
                  if ("Buffer" === e.type && i(e.data)) return l(t, e.data);
                }
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(t, e);
        }
        function c(t) {
          if ("number" != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function h(t, e) {
          if ((c(e), (t = a(t, e < 0 ? 0 : 0 | p(e))), !u.TYPED_ARRAY_SUPPORT))
            for (var r = 0; r < e; ++r) t[r] = 0;
          return t;
        }
        function l(t, e) {
          var r = e.length < 0 ? 0 : 0 | p(e.length);
          t = a(t, r);
          for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
          return t;
        }
        function p(t) {
          if (t >= s())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                s().toString(16) +
                " bytes"
            );
          return 0 | t;
        }
        function d(t, e) {
          if (u.isBuffer(t)) return t.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          "string" != typeof t && (t = "" + t);
          var r = t.length;
          if (0 === r) return 0;
          for (var n = !1; ; )
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
              case void 0:
                return F(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return Y(t).length;
              default:
                if (n) return F(t).length;
                (e = ("" + e).toLowerCase()), (n = !0);
            }
        }
        function y(t, e, r) {
          var n = t[e];
          (t[e] = t[r]), (t[r] = n);
        }
        function v(t, e, r, n, o) {
          if (0 === t.length) return -1;
          if (
            ("string" == typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            (r = +r),
            isNaN(r) && (r = o ? 0 : t.length - 1),
            r < 0 && (r = t.length + r),
            r >= t.length)
          ) {
            if (o) return -1;
            r = t.length - 1;
          } else if (r < 0) {
            if (!o) return -1;
            r = 0;
          }
          if (("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)))
            return 0 === e.length ? -1 : m(t, e, r, n, o);
          if ("number" == typeof e)
            return (
              (e &= 255),
              u.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? o
                  ? Uint8Array.prototype.indexOf.call(t, e, r)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                : m(t, [e], r, n, o)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function m(t, e, r, n, o) {
          var i,
            s = 1,
            a = t.length,
            u = e.length;
          if (
            void 0 !== n &&
            ("ucs2" === (n = String(n).toLowerCase()) ||
              "ucs-2" === n ||
              "utf16le" === n ||
              "utf-16le" === n)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (s = 2), (a /= 2), (u /= 2), (r /= 2);
          }
          function f(t, e) {
            return 1 === s ? t[e] : t.readUInt16BE(e * s);
          }
          if (o) {
            var c = -1;
            for (i = r; i < a; i++)
              if (f(t, i) === f(e, -1 === c ? 0 : i - c)) {
                if ((-1 === c && (c = i), i - c + 1 === u)) return c * s;
              } else -1 !== c && (i -= i - c), (c = -1);
          } else
            for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
              for (var h = !0, l = 0; l < u; l++)
                if (f(t, i + l) !== f(e, l)) {
                  h = !1;
                  break;
                }
              if (h) return i;
            }
          return -1;
        }
        function g(t, e, r, n) {
          r = Number(r) || 0;
          var o = t.length - r;
          n ? (n = Number(n)) > o && (n = o) : (n = o);
          var i = e.length;
          if (i % 2 != 0) throw new TypeError("Invalid hex string");
          n > i / 2 && (n = i / 2);
          for (var s = 0; s < n; ++s) {
            var a = parseInt(e.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            t[r + s] = a;
          }
          return s;
        }
        function b(t, e, r, n) {
          return q(F(e, t.length - r), t, r, n);
        }
        function w(t, e, r, n) {
          return q(
            (function (t) {
              for (var e = [], r = 0; r < t.length; ++r)
                e.push(255 & t.charCodeAt(r));
              return e;
            })(e),
            t,
            r,
            n
          );
        }
        function _(t, e, r, n) {
          return w(t, e, r, n);
        }
        function x(t, e, r, n) {
          return q(Y(e), t, r, n);
        }
        function A(t, e, r, n) {
          return q(
            (function (t, e) {
              for (
                var r, n, o, i = [], s = 0;
                s < t.length && !((e -= 2) < 0);
                ++s
              )
                (r = t.charCodeAt(s)),
                  (n = r >> 8),
                  (o = r % 256),
                  i.push(o),
                  i.push(n);
              return i;
            })(e, t.length - r),
            t,
            r,
            n
          );
        }
        function E(t, e, r) {
          return 0 === e && r === t.length
            ? n.fromByteArray(t)
            : n.fromByteArray(t.slice(e, r));
        }
        function O(t, e, r) {
          r = Math.min(t.length, r);
          for (var n = [], o = e; o < r; ) {
            var i,
              s,
              a,
              u,
              f = t[o],
              c = null,
              h = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
            if (o + h <= r)
              switch (h) {
                case 1:
                  f < 128 && (c = f);
                  break;
                case 2:
                  128 == (192 & (i = t[o + 1])) &&
                    (u = ((31 & f) << 6) | (63 & i)) > 127 &&
                    (c = u);
                  break;
                case 3:
                  (i = t[o + 1]),
                    (s = t[o + 2]),
                    128 == (192 & i) &&
                      128 == (192 & s) &&
                      (u = ((15 & f) << 12) | ((63 & i) << 6) | (63 & s)) >
                        2047 &&
                      (u < 55296 || u > 57343) &&
                      (c = u);
                  break;
                case 4:
                  (i = t[o + 1]),
                    (s = t[o + 2]),
                    (a = t[o + 3]),
                    128 == (192 & i) &&
                      128 == (192 & s) &&
                      128 == (192 & a) &&
                      (u =
                        ((15 & f) << 18) |
                        ((63 & i) << 12) |
                        ((63 & s) << 6) |
                        (63 & a)) > 65535 &&
                      u < 1114112 &&
                      (c = u);
              }
            null === c
              ? ((c = 65533), (h = 1))
              : c > 65535 &&
                ((c -= 65536),
                n.push(((c >>> 10) & 1023) | 55296),
                (c = 56320 | (1023 & c))),
              n.push(c),
              (o += h);
          }
          return (function (t) {
            var e = t.length;
            if (e <= P) return String.fromCharCode.apply(String, t);
            var r = "",
              n = 0;
            for (; n < e; )
              r += String.fromCharCode.apply(String, t.slice(n, (n += P)));
            return r;
          })(n);
        }
        (e.Buffer = u),
          (e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return u.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (u.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === t.foo() &&
                        "function" == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = s()),
          (u.poolSize = 8192),
          (u._augment = function (t) {
            return (t.__proto__ = u.prototype), t;
          }),
          (u.from = function (t, e, r) {
            return f(null, t, e, r);
          }),
          u.TYPED_ARRAY_SUPPORT &&
            ((u.prototype.__proto__ = Uint8Array.prototype),
            (u.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              u[Symbol.species] === u &&
              Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (u.alloc = function (t, e, r) {
            return (function (t, e, r, n) {
              return (
                c(e),
                e <= 0
                  ? a(t, e)
                  : void 0 !== r
                  ? "string" == typeof n
                    ? a(t, e).fill(r, n)
                    : a(t, e).fill(r)
                  : a(t, e)
              );
            })(null, t, e, r);
          }),
          (u.allocUnsafe = function (t) {
            return h(null, t);
          }),
          (u.allocUnsafeSlow = function (t) {
            return h(null, t);
          }),
          (u.isBuffer = function (t) {
            return !(null == t || !t._isBuffer);
          }),
          (u.compare = function (t, e) {
            if (!u.isBuffer(t) || !u.isBuffer(e))
              throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (
              var r = t.length, n = e.length, o = 0, i = Math.min(r, n);
              o < i;
              ++o
            )
              if (t[o] !== e[o]) {
                (r = t[o]), (n = e[o]);
                break;
              }
            return r < n ? -1 : n < r ? 1 : 0;
          }),
          (u.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function (t, e) {
            if (!i(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return u.alloc(0);
            var r;
            if (void 0 === e)
              for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
            var n = u.allocUnsafe(e),
              o = 0;
            for (r = 0; r < t.length; ++r) {
              var s = t[r];
              if (!u.isBuffer(s))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              s.copy(n, o), (o += s.length);
            }
            return n;
          }),
          (u.byteLength = d),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) y(this, e, e + 1);
            return this;
          }),
          (u.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4)
              y(this, e, e + 3), y(this, e + 1, e + 2);
            return this;
          }),
          (u.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8)
              y(this, e, e + 7),
                y(this, e + 1, e + 6),
                y(this, e + 2, e + 5),
                y(this, e + 3, e + 4);
            return this;
          }),
          (u.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? O(this, 0, t)
              : function (t, e, r) {
                  var n = !1;
                  if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                    return "";
                  if (
                    ((void 0 === r || r > this.length) && (r = this.length),
                    r <= 0)
                  )
                    return "";
                  if ((r >>>= 0) <= (e >>>= 0)) return "";
                  for (t || (t = "utf8"); ; )
                    switch (t) {
                      case "hex":
                        return R(this, e, r);
                      case "utf8":
                      case "utf-8":
                        return O(this, e, r);
                      case "ascii":
                        return S(this, e, r);
                      case "latin1":
                      case "binary":
                        return T(this, e, r);
                      case "base64":
                        return E(this, e, r);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return j(this, e, r);
                      default:
                        if (n) throw new TypeError("Unknown encoding: " + t);
                        (t = (t + "").toLowerCase()), (n = !0);
                    }
                }.apply(this, arguments);
          }),
          (u.prototype.equals = function (t) {
            if (!u.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === u.compare(this, t);
          }),
          (u.prototype.inspect = function () {
            var t = "",
              r = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
                this.length > r && (t += " ... ")),
              "<Buffer " + t + ">"
            );
          }),
          (u.prototype.compare = function (t, e, r, n, o) {
            if (!u.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === e && (e = 0),
              void 0 === r && (r = t ? t.length : 0),
              void 0 === n && (n = 0),
              void 0 === o && (o = this.length),
              e < 0 || r > t.length || n < 0 || o > this.length)
            )
              throw new RangeError("out of range index");
            if (n >= o && e >= r) return 0;
            if (n >= o) return -1;
            if (e >= r) return 1;
            if (((e >>>= 0), (r >>>= 0), (n >>>= 0), (o >>>= 0), this === t))
              return 0;
            for (
              var i = o - n,
                s = r - e,
                a = Math.min(i, s),
                f = this.slice(n, o),
                c = t.slice(e, r),
                h = 0;
              h < a;
              ++h
            )
              if (f[h] !== c[h]) {
                (i = f[h]), (s = c[h]);
                break;
              }
            return i < s ? -1 : s < i ? 1 : 0;
          }),
          (u.prototype.includes = function (t, e, r) {
            return -1 !== this.indexOf(t, e, r);
          }),
          (u.prototype.indexOf = function (t, e, r) {
            return v(this, t, e, r, !0);
          }),
          (u.prototype.lastIndexOf = function (t, e, r) {
            return v(this, t, e, r, !1);
          }),
          (u.prototype.write = function (t, e, r, n) {
            if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
            else if (void 0 === r && "string" == typeof e)
              (n = e), (r = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (e |= 0),
                isFinite(r)
                  ? ((r |= 0), void 0 === n && (n = "utf8"))
                  : ((n = r), (r = void 0));
            }
            var o = this.length - e;
            if (
              ((void 0 === r || r > o) && (r = o),
              (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var i = !1; ; )
              switch (n) {
                case "hex":
                  return g(this, t, e, r);
                case "utf8":
                case "utf-8":
                  return b(this, t, e, r);
                case "ascii":
                  return w(this, t, e, r);
                case "latin1":
                case "binary":
                  return _(this, t, e, r);
                case "base64":
                  return x(this, t, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return A(this, t, e, r);
                default:
                  if (i) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (i = !0);
              }
          }),
          (u.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        var P = 4096;
        function S(t, e, r) {
          var n = "";
          r = Math.min(t.length, r);
          for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
          return n;
        }
        function T(t, e, r) {
          var n = "";
          r = Math.min(t.length, r);
          for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
          return n;
        }
        function R(t, e, r) {
          var n = t.length;
          (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
          for (var o = "", i = e; i < r; ++i) o += N(t[i]);
          return o;
        }
        function j(t, e, r) {
          for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2)
            o += String.fromCharCode(n[i] + 256 * n[i + 1]);
          return o;
        }
        function U(t, e, r) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > r)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function k(t, e, r, n, o, i) {
          if (!u.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > o || e < i)
            throw new RangeError('"value" argument is out of bounds');
          if (r + n > t.length) throw new RangeError("Index out of range");
        }
        function B(t, e, r, n) {
          e < 0 && (e = 65535 + e + 1);
          for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o)
            t[r + o] =
              (e & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
        }
        function I(t, e, r, n) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o)
            t[r + o] = (e >>> (8 * (n ? o : 3 - o))) & 255;
        }
        function L(t, e, r, n, o, i) {
          if (r + n > t.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function C(t, e, r, n, i) {
          return i || L(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4;
        }
        function M(t, e, r, n, i) {
          return i || L(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8;
        }
        (u.prototype.slice = function (t, e) {
          var r,
            n = this.length;
          if (
            ((t = ~~t),
            (e = void 0 === e ? n : ~~e),
            t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            e < t && (e = t),
            u.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(t, e)).__proto__ = u.prototype;
          else {
            var o = e - t;
            r = new u(o, void 0);
            for (var i = 0; i < o; ++i) r[i] = this[i + t];
          }
          return r;
        }),
          (u.prototype.readUIntLE = function (t, e, r) {
            (t |= 0), (e |= 0), r || U(t, e, this.length);
            for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
              n += this[t + i] * o;
            return n;
          }),
          (u.prototype.readUIntBE = function (t, e, r) {
            (t |= 0), (e |= 0), r || U(t, e, this.length);
            for (var n = this[t + --e], o = 1; e > 0 && (o *= 256); )
              n += this[t + --e] * o;
            return n;
          }),
          (u.prototype.readUInt8 = function (t, e) {
            return e || U(t, 1, this.length), this[t];
          }),
          (u.prototype.readUInt16LE = function (t, e) {
            return e || U(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (u.prototype.readUInt16BE = function (t, e) {
            return e || U(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (u.prototype.readUInt32LE = function (t, e) {
            return (
              e || U(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (u.prototype.readUInt32BE = function (t, e) {
            return (
              e || U(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (u.prototype.readIntLE = function (t, e, r) {
            (t |= 0), (e |= 0), r || U(t, e, this.length);
            for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
              n += this[t + i] * o;
            return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
          }),
          (u.prototype.readIntBE = function (t, e, r) {
            (t |= 0), (e |= 0), r || U(t, e, this.length);
            for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256); )
              i += this[t + --n] * o;
            return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
          }),
          (u.prototype.readInt8 = function (t, e) {
            return (
              e || U(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (u.prototype.readInt16LE = function (t, e) {
            e || U(t, 2, this.length);
            var r = this[t] | (this[t + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (u.prototype.readInt16BE = function (t, e) {
            e || U(t, 2, this.length);
            var r = this[t + 1] | (this[t] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (u.prototype.readInt32LE = function (t, e) {
            return (
              e || U(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function (t, e) {
            return (
              e || U(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (u.prototype.readFloatLE = function (t, e) {
            return e || U(t, 4, this.length), o.read(this, t, !0, 23, 4);
          }),
          (u.prototype.readFloatBE = function (t, e) {
            return e || U(t, 4, this.length), o.read(this, t, !1, 23, 4);
          }),
          (u.prototype.readDoubleLE = function (t, e) {
            return e || U(t, 8, this.length), o.read(this, t, !0, 52, 8);
          }),
          (u.prototype.readDoubleBE = function (t, e) {
            return e || U(t, 8, this.length), o.read(this, t, !1, 52, 8);
          }),
          (u.prototype.writeUIntLE = function (t, e, r, n) {
            ((t = +t), (e |= 0), (r |= 0), n) ||
              k(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var o = 1,
              i = 0;
            for (this[e] = 255 & t; ++i < r && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + r;
          }),
          (u.prototype.writeUIntBE = function (t, e, r, n) {
            ((t = +t), (e |= 0), (r |= 0), n) ||
              k(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var o = r - 1,
              i = 1;
            for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + r;
          }),
          (u.prototype.writeUInt8 = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || k(this, t, e, 1, 255, 0),
              u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeUInt16LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || k(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : B(this, t, e, !0),
              e + 2
            );
          }),
          (u.prototype.writeUInt16BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || k(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : B(this, t, e, !1),
              e + 2
            );
          }),
          (u.prototype.writeUInt32LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || k(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : I(this, t, e, !0),
              e + 4
            );
          }),
          (u.prototype.writeUInt32BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || k(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : I(this, t, e, !1),
              e + 4
            );
          }),
          (u.prototype.writeIntLE = function (t, e, r, n) {
            if (((t = +t), (e |= 0), !n)) {
              var o = Math.pow(2, 8 * r - 1);
              k(this, t, e, r, o - 1, -o);
            }
            var i = 0,
              s = 1,
              a = 0;
            for (this[e] = 255 & t; ++i < r && (s *= 256); )
              t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1),
                (this[e + i] = (((t / s) >> 0) - a) & 255);
            return e + r;
          }),
          (u.prototype.writeIntBE = function (t, e, r, n) {
            if (((t = +t), (e |= 0), !n)) {
              var o = Math.pow(2, 8 * r - 1);
              k(this, t, e, r, o - 1, -o);
            }
            var i = r - 1,
              s = 1,
              a = 0;
            for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
              t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1),
                (this[e + i] = (((t / s) >> 0) - a) & 255);
            return e + r;
          }),
          (u.prototype.writeInt8 = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || k(this, t, e, 1, 127, -128),
              u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeInt16LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || k(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : B(this, t, e, !0),
              e + 2
            );
          }),
          (u.prototype.writeInt16BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || k(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : B(this, t, e, !1),
              e + 2
            );
          }),
          (u.prototype.writeInt32LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || k(this, t, e, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : I(this, t, e, !0),
              e + 4
            );
          }),
          (u.prototype.writeInt32BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || k(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : I(this, t, e, !1),
              e + 4
            );
          }),
          (u.prototype.writeFloatLE = function (t, e, r) {
            return C(this, t, e, !0, r);
          }),
          (u.prototype.writeFloatBE = function (t, e, r) {
            return C(this, t, e, !1, r);
          }),
          (u.prototype.writeDoubleLE = function (t, e, r) {
            return M(this, t, e, !0, r);
          }),
          (u.prototype.writeDoubleBE = function (t, e, r) {
            return M(this, t, e, !1, r);
          }),
          (u.prototype.copy = function (t, e, r, n) {
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
              t.length - e < n - r && (n = t.length - e + r);
            var o,
              i = n - r;
            if (this === t && r < e && e < n)
              for (o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
            else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (o = 0; o < i; ++o) t[o + e] = this[o + r];
            else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);
            return i;
          }),
          (u.prototype.fill = function (t, e, r, n) {
            if ("string" == typeof t) {
              if (
                ("string" == typeof e
                  ? ((n = e), (e = 0), (r = this.length))
                  : "string" == typeof r && ((n = r), (r = this.length)),
                1 === t.length)
              ) {
                var o = t.charCodeAt(0);
                o < 256 && (t = o);
              }
              if (void 0 !== n && "string" != typeof n)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof n && !u.isEncoding(n))
                throw new TypeError("Unknown encoding: " + n);
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < r)
              throw new RangeError("Out of range index");
            if (r <= e) return this;
            var i;
            if (
              ((e >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              t || (t = 0),
              "number" == typeof t)
            )
              for (i = e; i < r; ++i) this[i] = t;
            else {
              var s = u.isBuffer(t) ? t : F(new u(t, n).toString()),
                a = s.length;
              for (i = 0; i < r - e; ++i) this[i + e] = s[i % a];
            }
            return this;
          });
        var D = /[^+\/0-9A-Za-z-_]/g;
        function N(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16);
        }
        function F(t, e) {
          var r;
          e = e || 1 / 0;
          for (var n = t.length, o = null, i = [], s = 0; s < n; ++s) {
            if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
              if (!o) {
                if (r > 56319) {
                  (e -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === n) {
                  (e -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                o = r;
                continue;
              }
              if (r < 56320) {
                (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
                continue;
              }
              r = 65536 + (((o - 55296) << 10) | (r - 56320));
            } else o && (e -= 3) > -1 && i.push(239, 191, 189);
            if (((o = null), r < 128)) {
              if ((e -= 1) < 0) break;
              i.push(r);
            } else if (r < 2048) {
              if ((e -= 2) < 0) break;
              i.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((e -= 3) < 0) break;
              i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              i.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            }
          }
          return i;
        }
        function Y(t) {
          return n.toByteArray(
            (function (t) {
              if (
                (t = (function (t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                })(t).replace(D, "")).length < 2
              )
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function q(t, e, r, n) {
          for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o)
            e[o + r] = t[o];
          return o;
        }
      }).call(this, r(32));
    },
    function (t, e, r) {
      "use strict";
      (e.byteLength = function (t) {
        var e = f(t),
          r = e[0],
          n = e[1];
        return (3 * (r + n)) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          for (
            var e,
              r = f(t),
              n = r[0],
              s = r[1],
              a = new i(
                (function (t, e, r) {
                  return (3 * (e + r)) / 4 - r;
                })(0, n, s)
              ),
              u = 0,
              c = s > 0 ? n - 4 : n,
              h = 0;
            h < c;
            h += 4
          )
            (e =
              (o[t.charCodeAt(h)] << 18) |
              (o[t.charCodeAt(h + 1)] << 12) |
              (o[t.charCodeAt(h + 2)] << 6) |
              o[t.charCodeAt(h + 3)]),
              (a[u++] = (e >> 16) & 255),
              (a[u++] = (e >> 8) & 255),
              (a[u++] = 255 & e);
          2 === s &&
            ((e = (o[t.charCodeAt(h)] << 2) | (o[t.charCodeAt(h + 1)] >> 4)),
            (a[u++] = 255 & e));
          1 === s &&
            ((e =
              (o[t.charCodeAt(h)] << 10) |
              (o[t.charCodeAt(h + 1)] << 4) |
              (o[t.charCodeAt(h + 2)] >> 2)),
            (a[u++] = (e >> 8) & 255),
            (a[u++] = 255 & e));
          return a;
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, r = t.length, o = r % 3, i = [], s = 0, a = r - o;
            s < a;
            s += 16383
          )
            i.push(h(t, s, s + 16383 > a ? a : s + 16383));
          1 === o
            ? ((e = t[r - 1]), i.push(n[e >> 2] + n[(e << 4) & 63] + "=="))
            : 2 === o &&
              ((e = (t[r - 2] << 8) + t[r - 1]),
              i.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + "="));
          return i.join("");
        });
      for (
        var n = [],
          o = [],
          i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          s =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0,
          u = s.length;
        a < u;
        ++a
      )
        (n[a] = s[a]), (o[s.charCodeAt(a)] = a);
      function f(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
      }
      function c(t) {
        return (
          n[(t >> 18) & 63] + n[(t >> 12) & 63] + n[(t >> 6) & 63] + n[63 & t]
        );
      }
      function h(t, e, r) {
        for (var n, o = [], i = e; i < r; i += 3)
          (n =
            ((t[i] << 16) & 16711680) +
            ((t[i + 1] << 8) & 65280) +
            (255 & t[i + 2])),
            o.push(c(n));
        return o.join("");
      }
      (o["-".charCodeAt(0)] = 62), (o["_".charCodeAt(0)] = 63);
    },
    function (t, e) {
      (e.read = function (t, e, r, n, o) {
        var i,
          s,
          a = 8 * o - n - 1,
          u = (1 << a) - 1,
          f = u >> 1,
          c = -7,
          h = r ? o - 1 : 0,
          l = r ? -1 : 1,
          p = t[e + h];
        for (
          h += l, i = p & ((1 << -c) - 1), p >>= -c, c += a;
          c > 0;
          i = 256 * i + t[e + h], h += l, c -= 8
        );
        for (
          s = i & ((1 << -c) - 1), i >>= -c, c += n;
          c > 0;
          s = 256 * s + t[e + h], h += l, c -= 8
        );
        if (0 === i) i = 1 - f;
        else {
          if (i === u) return s ? NaN : (1 / 0) * (p ? -1 : 1);
          (s += Math.pow(2, n)), (i -= f);
        }
        return (p ? -1 : 1) * s * Math.pow(2, i - n);
      }),
        (e.write = function (t, e, r, n, o, i) {
          var s,
            a,
            u,
            f = 8 * i - o - 1,
            c = (1 << f) - 1,
            h = c >> 1,
            l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = n ? 0 : i - 1,
            d = n ? 1 : -1,
            y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((a = isNaN(e) ? 1 : 0), (s = c))
                : ((s = Math.floor(Math.log(e) / Math.LN2)),
                  e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                  (e += s + h >= 1 ? l / u : l * Math.pow(2, 1 - h)) * u >= 2 &&
                    (s++, (u /= 2)),
                  s + h >= c
                    ? ((a = 0), (s = c))
                    : s + h >= 1
                    ? ((a = (e * u - 1) * Math.pow(2, o)), (s += h))
                    : ((a = e * Math.pow(2, h - 1) * Math.pow(2, o)), (s = 0)));
            o >= 8;
            t[r + p] = 255 & a, p += d, a /= 256, o -= 8
          );
          for (
            s = (s << o) | a, f += o;
            f > 0;
            t[r + p] = 255 & s, p += d, s /= 256, f -= 8
          );
          t[r + p - d] |= 128 * y;
        });
    },
    function (t, e) {
      var r = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == r.call(t);
        };
    },
    function (t, e, r) {
      (function (t, n) {
        var o;
        /*! https://mths.be/punycode v1.4.1 by @mathias */ !(function (i) {
          "object" == typeof e && e && e.nodeType,
            "object" == typeof t && t && t.nodeType;
          var s = "object" == typeof n && n;
          s.global !== s && s.window !== s && s.self;
          var a,
            u = 2147483647,
            f = 36,
            c = 1,
            h = 26,
            l = 38,
            p = 700,
            d = 72,
            y = 128,
            v = "-",
            m = /^xn--/,
            g = /[^\x20-\x7E]/,
            b = /[\x2E\u3002\uFF0E\uFF61]/g,
            w = {
              overflow: "Overflow: input needs wider integers to process",
              "not-basic": "Illegal input >= 0x80 (not a basic code point)",
              "invalid-input": "Invalid input",
            },
            _ = f - c,
            x = Math.floor,
            A = String.fromCharCode;
          function E(t) {
            throw new RangeError(w[t]);
          }
          function O(t, e) {
            for (var r = t.length, n = []; r--; ) n[r] = e(t[r]);
            return n;
          }
          function P(t, e) {
            var r = t.split("@"),
              n = "";
            return (
              r.length > 1 && ((n = r[0] + "@"), (t = r[1])),
              n + O((t = t.replace(b, ".")).split("."), e).join(".")
            );
          }
          function S(t) {
            for (var e, r, n = [], o = 0, i = t.length; o < i; )
              (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i
                ? 56320 == (64512 & (r = t.charCodeAt(o++)))
                  ? n.push(((1023 & e) << 10) + (1023 & r) + 65536)
                  : (n.push(e), o--)
                : n.push(e);
            return n;
          }
          function T(t) {
            return O(t, function (t) {
              var e = "";
              return (
                t > 65535 &&
                  ((e += A((((t -= 65536) >>> 10) & 1023) | 55296)),
                  (t = 56320 | (1023 & t))),
                (e += A(t))
              );
            }).join("");
          }
          function R(t) {
            return t - 48 < 10
              ? t - 22
              : t - 65 < 26
              ? t - 65
              : t - 97 < 26
              ? t - 97
              : f;
          }
          function j(t, e) {
            return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
          }
          function U(t, e, r) {
            var n = 0;
            for (
              t = r ? x(t / p) : t >> 1, t += x(t / e);
              t > (_ * h) >> 1;
              n += f
            )
              t = x(t / _);
            return x(n + ((_ + 1) * t) / (t + l));
          }
          function k(t) {
            var e,
              r,
              n,
              o,
              i,
              s,
              a,
              l,
              p,
              m,
              g = [],
              b = t.length,
              w = 0,
              _ = y,
              A = d;
            for ((r = t.lastIndexOf(v)) < 0 && (r = 0), n = 0; n < r; ++n)
              t.charCodeAt(n) >= 128 && E("not-basic"), g.push(t.charCodeAt(n));
            for (o = r > 0 ? r + 1 : 0; o < b; ) {
              for (
                i = w, s = 1, a = f;
                o >= b && E("invalid-input"),
                  ((l = R(t.charCodeAt(o++))) >= f || l > x((u - w) / s)) &&
                    E("overflow"),
                  (w += l * s),
                  !(l < (p = a <= A ? c : a >= A + h ? h : a - A));
                a += f
              )
                s > x(u / (m = f - p)) && E("overflow"), (s *= m);
              (A = U(w - i, (e = g.length + 1), 0 == i)),
                x(w / e) > u - _ && E("overflow"),
                (_ += x(w / e)),
                (w %= e),
                g.splice(w++, 0, _);
            }
            return T(g);
          }
          function B(t) {
            var e,
              r,
              n,
              o,
              i,
              s,
              a,
              l,
              p,
              m,
              g,
              b,
              w,
              _,
              O,
              P = [];
            for (b = (t = S(t)).length, e = y, r = 0, i = d, s = 0; s < b; ++s)
              (g = t[s]) < 128 && P.push(A(g));
            for (n = o = P.length, o && P.push(v); n < b; ) {
              for (a = u, s = 0; s < b; ++s)
                (g = t[s]) >= e && g < a && (a = g);
              for (
                a - e > x((u - r) / (w = n + 1)) && E("overflow"),
                  r += (a - e) * w,
                  e = a,
                  s = 0;
                s < b;
                ++s
              )
                if (((g = t[s]) < e && ++r > u && E("overflow"), g == e)) {
                  for (
                    l = r, p = f;
                    !(l < (m = p <= i ? c : p >= i + h ? h : p - i));
                    p += f
                  )
                    (O = l - m),
                      (_ = f - m),
                      P.push(A(j(m + (O % _), 0))),
                      (l = x(O / _));
                  P.push(A(j(l, 0))), (i = U(r, w, n == o)), (r = 0), ++n;
                }
              ++r, ++e;
            }
            return P.join("");
          }
          (a = {
            version: "1.4.1",
            ucs2: { decode: S, encode: T },
            decode: k,
            encode: B,
            toASCII: function (t) {
              return P(t, function (t) {
                return g.test(t) ? "xn--" + B(t) : t;
              });
            },
            toUnicode: function (t) {
              return P(t, function (t) {
                return m.test(t) ? k(t.slice(4).toLowerCase()) : t;
              });
            },
          }),
            void 0 ===
              (o = function () {
                return a;
              }.call(e, r, e, t)) || (t.exports = o);
        })();
      }).call(this, r(110)(t), r(32));
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, e, r) {
      "use strict";
      t.exports = {
        isString: function (t) {
          return "string" == typeof t;
        },
        isObject: function (t) {
          return "object" == typeof t && null !== t;
        },
        isNull: function (t) {
          return null === t;
        },
        isNullOrUndefined: function (t) {
          return null == t;
        },
      };
    },
    function (t, e, r) {
      "use strict";
      (e.decode = e.parse = r(113)), (e.encode = e.stringify = r(114));
    },
    function (t, e, r) {
      "use strict";
      function n(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      t.exports = function (t, e, r, i) {
        (e = e || "&"), (r = r || "=");
        var s = {};
        if ("string" != typeof t || 0 === t.length) return s;
        var a = /\+/g;
        t = t.split(e);
        var u = 1e3;
        i && "number" == typeof i.maxKeys && (u = i.maxKeys);
        var f = t.length;
        u > 0 && f > u && (f = u);
        for (var c = 0; c < f; ++c) {
          var h,
            l,
            p,
            d,
            y = t[c].replace(a, "%20"),
            v = y.indexOf(r);
          v >= 0
            ? ((h = y.substr(0, v)), (l = y.substr(v + 1)))
            : ((h = y), (l = "")),
            (p = decodeURIComponent(h)),
            (d = decodeURIComponent(l)),
            n(s, p)
              ? o(s[p])
                ? s[p].push(d)
                : (s[p] = [s[p], d])
              : (s[p] = d);
        }
        return s;
      };
      var o =
        Array.isArray ||
        function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        };
    },
    function (t, e, r) {
      "use strict";
      var n = function (t) {
        switch (typeof t) {
          case "string":
            return t;
          case "boolean":
            return t ? "true" : "false";
          case "number":
            return isFinite(t) ? t : "";
          default:
            return "";
        }
      };
      t.exports = function (t, e, r, a) {
        return (
          (e = e || "&"),
          (r = r || "="),
          null === t && (t = void 0),
          "object" == typeof t
            ? i(s(t), function (s) {
                var a = encodeURIComponent(n(s)) + r;
                return o(t[s])
                  ? i(t[s], function (t) {
                      return a + encodeURIComponent(n(t));
                    }).join(e)
                  : a + encodeURIComponent(n(t[s]));
              }).join(e)
            : a
            ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(t))
            : ""
        );
      };
      var o =
        Array.isArray ||
        function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        };
      function i(t, e) {
        if (t.map) return t.map(e);
        for (var r = [], n = 0; n < t.length; n++) r.push(e(t[n], n));
        return r;
      }
      var s =
        Object.keys ||
        function (t) {
          var e = [];
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
          return e;
        };
    },
  ]);
});
