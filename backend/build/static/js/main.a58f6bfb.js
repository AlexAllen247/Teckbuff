/*! For license information please see main.a58f6bfb.js.LICENSE.txt */
!(function () {
  var e = {
      694: function (e, t) {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function a() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var o = typeof n;
                if ("string" === o || "number" === o) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var i = a.apply(null, n);
                    i && e.push(i);
                  }
                } else if ("object" === o) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes("[native code]")
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var l in n) r.call(n, l) && n[l] && e.push(l);
                }
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((a.default = a), (e.exports = a))
            : void 0 ===
                (n = function () {
                  return a;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      176: function (e) {
        "use strict";
        e.exports = function (e, t, n, r, a, o, i, l) {
          if (!e) {
            var u;
            if (void 0 === t)
              u = new Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var s = [n, r, a, o, i, l],
                c = 0;
              (u = new Error(
                t.replace(/%s/g, function () {
                  return s[c++];
                })
              )).name = "Invariant Violation";
            }
            throw ((u.framesToPop = 1), u);
          }
        };
      },
      143: function (e, t, n) {
        var r, a;
        !(function (o) {
          if (
            (void 0 ===
              (a = "function" === typeof (r = o) ? r.call(t, n, t, e) : r) ||
              (e.exports = a),
            !0,
            (e.exports = o()),
            !!0)
          ) {
            var i = window.Cookies,
              l = (window.Cookies = o());
            l.noConflict = function () {
              return (window.Cookies = i), l;
            };
          }
        })(function () {
          function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) t[r] = n[r];
            }
            return t;
          }
          function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
          }
          return (function n(r) {
            function a() {}
            function o(t, n, o) {
              if ("undefined" !== typeof document) {
                "number" ===
                  typeof (o = e({ path: "/" }, a.defaults, o)).expires &&
                  (o.expires = new Date(1 * new Date() + 864e5 * o.expires)),
                  (o.expires = o.expires ? o.expires.toUTCString() : "");
                try {
                  var i = JSON.stringify(n);
                  /^[\{\[]/.test(i) && (n = i);
                } catch (s) {}
                (n = r.write
                  ? r.write(n, t)
                  : encodeURIComponent(String(n)).replace(
                      /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                      decodeURIComponent
                    )),
                  (t = encodeURIComponent(String(t))
                    .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                    .replace(/[\(\)]/g, escape));
                var l = "";
                for (var u in o)
                  o[u] &&
                    ((l += "; " + u),
                    !0 !== o[u] && (l += "=" + o[u].split(";")[0]));
                return (document.cookie = t + "=" + n + l);
              }
            }
            function i(e, n) {
              if ("undefined" !== typeof document) {
                for (
                  var a = {},
                    o = document.cookie ? document.cookie.split("; ") : [],
                    i = 0;
                  i < o.length;
                  i++
                ) {
                  var l = o[i].split("="),
                    u = l.slice(1).join("=");
                  n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                  try {
                    var s = t(l[0]);
                    if (((u = (r.read || r)(u, s) || t(u)), n))
                      try {
                        u = JSON.parse(u);
                      } catch (c) {}
                    if (((a[s] = u), e === s)) break;
                  } catch (c) {}
                }
                return e ? a[e] : a;
              }
            }
            return (
              (a.set = o),
              (a.get = function (e) {
                return i(e, !1);
              }),
              (a.getJSON = function (e) {
                return i(e, !0);
              }),
              (a.remove = function (t, n) {
                o(t, "", e(n, { expires: -1 }));
              }),
              (a.defaults = {}),
              (a.withConverter = n),
              a
            );
          })(function () {});
        });
      },
      573: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (0, o.default)(function () {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                n[r] = arguments[r];
              var a = null;
              return (
                t.forEach(function (e) {
                  if (null == a) {
                    var t = e.apply(void 0, n);
                    null != t && (a = t);
                  }
                }),
                a
              );
            });
          });
        var r,
          a = n(54),
          o = (r = a) && r.__esModule ? r : { default: r };
        e.exports = t.default;
      },
      54: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            function t(t, n, r, a, o, i) {
              var l = a || "<<anonymous>>",
                u = i || r;
              if (null == n[r])
                return t
                  ? new Error(
                      "Required " +
                        o +
                        " `" +
                        u +
                        "` was not specified in `" +
                        l +
                        "`."
                    )
                  : null;
              for (
                var s = arguments.length, c = Array(s > 6 ? s - 6 : 0), f = 6;
                f < s;
                f++
              )
                c[f - 6] = arguments[f];
              return e.apply(void 0, [n, r, l, o, u].concat(c));
            }
            var n = t.bind(null, !1);
            return (n.isRequired = t.bind(null, !0)), n;
          }),
          (e.exports = t.default);
      },
      888: function (e, t, n) {
        "use strict";
        var r = n(47);
        function a() {}
        function o() {}
        (o.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, o, i) {
              if (i !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      7: function (e, t, n) {
        e.exports = n(888)();
      },
      47: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          N = Symbol.for("react.provider"),
          O = Symbol.for("react.context"),
          j = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          _ = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var A = Symbol.iterator;
        function D(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (A && e[A]) || e["@@iterator"])
            ? e
            : null;
        }
        var z,
          F = Object.assign;
        function I(e) {
          if (void 0 === z)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              z = (t && t[1]) || "";
            }
          return "\n" + z + e;
        }
        var B = !1;
        function M(e, t) {
          if (!e || B) return "";
          B = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var u = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (B = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? I(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return I(e.type);
            case 16:
              return I("Lazy");
            case 13:
              return I("Suspense");
            case 19:
              return I("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = M(e.type, !1));
            case 11:
              return (e = M(e.type.render, !1));
            case 1:
              return (e = M(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case P:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case O:
                return (e.displayName || "Context") + ".Consumer";
              case N:
                return (e._context.displayName || "Context") + ".Provider";
              case j:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || "Memo";
              case _:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return W(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function J(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Y(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          Y(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function oe(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = xa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Oe() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function je(e, t) {
          return e(t);
        }
        function Pe() {}
        var Re = !1;
        function Te(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return je(e, t, n);
          } finally {
            (Re = !1), (null !== Se || null !== Ee) && (Pe(), Oe());
          }
        }
        function _e(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Ae = {};
            Object.defineProperty(Ae, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Ae, Ae),
              window.removeEventListener("test", Ae, Ae);
          } catch (ce) {
            Le = !1;
          }
        function De(e, t, n, r, a, o, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var ze = !1,
          Fe = null,
          Ie = !1,
          Be = null,
          Me = {
            onError: function (e) {
              (ze = !0), (Fe = e);
            },
          };
        function Ue(e, t, n, r, a, o, i, l, u) {
          (ze = !1), (Fe = null), De.apply(Me, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (We(e) !== e) throw Error(o(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return Ve(a), e;
                    if (i === r) return Ve(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, u = a.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ke = a.unstable_scheduleCallback,
          Qe = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Je = a.unstable_requestPaint,
          Ye = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
              },
          lt = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = ft(l)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          kt,
          St,
          Et,
          Ct,
          Nt = !1,
          Ot = [],
          jt = null,
          Pt = null,
          Rt = null,
          Tt = new Map(),
          _t = new Map(),
          Lt = [],
          At =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Dt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              jt = null;
              break;
            case "dragenter":
            case "dragleave":
              Pt = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              Tt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              _t.delete(t.pointerId);
          }
        }
        function zt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ft(e) {
          var t = ga(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function It(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Bt(e, t, n) {
          It(e) && n.delete(t);
        }
        function Mt() {
          (Nt = !1),
            null !== jt && It(jt) && (jt = null),
            null !== Pt && It(Pt) && (Pt = null),
            null !== Rt && It(Rt) && (Rt = null),
            Tt.forEach(Bt),
            _t.forEach(Bt);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt ||
              ((Nt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Mt)));
        }
        function Wt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Ot.length) {
            Ut(Ot[0], e);
            for (var n = 1; n < Ot.length; n++) {
              var r = Ot[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== jt && Ut(jt, e),
              null !== Pt && Ut(Pt, e),
              null !== Rt && Ut(Rt, e),
              Tt.forEach(t),
              _t.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && Lt.shift();
        }
        var Ht = w.ReactCurrentBatchConfig,
          Vt = !0;
        function $t(e, t, n, r) {
          var a = bt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Kt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = o);
          }
        }
        function qt(e, t, n, r) {
          var a = bt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Kt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          if (Vt) {
            var a = Gt(e, t, n, r);
            if (null === a) Vr(e, t, r, Qt, n), Dt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (jt = zt(jt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Pt = zt(Pt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Rt = zt(Rt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Tt.set(o, zt(Tt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      _t.set(o, zt(_t.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Dt(e, r), 4 & t && -1 < At.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && xt(o),
                  null === (o = Gt(e, t, n, r)) && Vr(e, t, r, Qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Gt(e, t, n, r) {
          if (((Qt = null), null !== (e = ga((e = xe(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Jt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Yt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Yt ? Yt.value : Yt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = F({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = F({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          mn = an(F({}, pn, { dataTransfer: 0 })),
          vn = an(F({}, fn, { relatedTarget: 0 })),
          yn = an(
            F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = F({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(gn),
          wn = an(F({}, sn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var Nn = F({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          On = an(Nn),
          jn = an(
            F({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Pn = an(
            F({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Rn = an(
            F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Tn = F({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          _n = an(Tn),
          Ln = [9, 13, 27, 32],
          An = c && "CompositionEvent" in window,
          Dn = null;
        c && "documentMode" in document && (Dn = document.documentMode);
        var zn = c && "TextEvent" in window && !Dn,
          Fn = c && (!An || (Dn && 8 < Dn && 11 >= Dn)),
          In = String.fromCharCode(32),
          Bn = !1;
        function Mn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Ne(r),
            0 < (t = qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Kn = null;
        function Qn(e) {
          Ir(e, 0);
        }
        function Gn(e) {
          if (K(wa(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var Yn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Yn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent("onpropertychange", nr), (Kn = qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Kn)) {
            var t = [];
            $n(t, Kn, e, xe(e)), Te(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Kn = n), (qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Kn);
        }
        function or(e, t) {
          if ("click" === e) return Gn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          yr = null,
          gr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== Q(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && ur(gr, r)) ||
              ((gr = r),
              0 < (r = qr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Nr = Cr("animationend"),
          Or = Cr("animationiteration"),
          jr = Cr("animationstart"),
          Pr = Cr("transitionend"),
          Rr = new Map(),
          Tr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function _r(e, t) {
          Rr.set(e, t), u(t, [e]);
        }
        for (var Lr = 0; Lr < Tr.length; Lr++) {
          var Ar = Tr[Lr];
          _r(Ar.toLowerCase(), "on" + (Ar[0].toUpperCase() + Ar.slice(1)));
        }
        _r(Nr, "onAnimationEnd"),
          _r(Or, "onAnimationIteration"),
          _r(jr, "onAnimationStart"),
          _r("dblclick", "onDoubleClick"),
          _r("focusin", "onFocus"),
          _r("focusout", "onBlur"),
          _r(Pr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Dr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          zr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Dr)
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, u, s) {
              if ((Ue.apply(this, arguments), ze)) {
                if (!ze) throw Error(o(198));
                var c = Fe;
                (ze = !1), (Fe = null), Ie || ((Ie = !0), (Be = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ir(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  Fr(a, l, s), (o = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (l = r[i]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, l, s), (o = u);
                }
            }
          }
          if (Ie) throw ((e = Be), (Ie = !1), (Be = null), e);
        }
        function Br(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Mr(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (zr.has(t) || Mr(t, !1, e), Mr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), Mr("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Jt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = qt;
              break;
            default:
              a = Kt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ga(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Te(function () {
            var r = o,
              a = xe(n),
              i = [];
            e: {
              var l = Rr.get(e);
              if (void 0 !== l) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = On;
                    break;
                  case "focusin":
                    (s = "focus"), (u = vn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Pn;
                    break;
                  case Nr:
                  case Or:
                  case jr:
                    u = yn;
                    break;
                  case Pr:
                    u = Rn;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = _n;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = jn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = _e(h, d)) &&
                        c.push($r(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, a)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ga(s) && !s[ha])) &&
                  (u || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ga(s)
                          : null) &&
                        (s !== (f = We(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = jn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : wa(u)),
                  (p = null == s ? l : wa(s)),
                  ((l = new c(m, h + "leave", u, n, a)).target = f),
                  (l.relatedTarget = p),
                  (m = null),
                  ga(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = Kr(p)) h++;
                    for (p = 0, m = d; m; m = Kr(m)) p++;
                    for (; 0 < h - p; ) (c = Kr(c)), h--;
                    for (; 0 < p - h; ) (d = Kr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Kr(c)), (d = Kr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Qr(i, l, u, c, !1),
                  null !== s && null !== f && Qr(i, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? wa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var v = Jn;
              else if (Vn(l))
                if (Yn) v = ir;
                else {
                  v = ar;
                  var y = rr;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (v = or);
              switch (
                (v && (v = v(e, r))
                  ? $n(i, v, n, a)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (y = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(y) || "true" === y.contentEditable) &&
                    ((vr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var g;
              if (An)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Wn
                  ? Mn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Wn && (g = en())
                    : ((Xt = "value" in (Yt = a) ? Yt.value : Yt.textContent),
                      (Wn = !0))),
                0 < (y = qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = Un(n)) && (b.data = g))),
                (g = zn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Bn = !0), In);
                        case "textInput":
                          return (e = t.data) === In && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!An && Mn(e, t))
                          ? ((e = en()), (Zt = Xt = Yt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            Ir(i, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = _e(e, n)) && r.unshift($r(e, o, a)),
              null != (o = _e(e, t)) && r.push($r(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Kr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              a
                ? null != (u = _e(n, o)) && i.unshift($r(n, u, l))
                : a || (null != (u = _e(n, o)) && i.push($r(n, u, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Gr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Yr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Jr, "");
        }
        function Xr(e, t, n) {
          if (((t = Yr(t)), Yr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Wt(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          ma = "__reactEvents$" + fa,
          va = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function ga(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Na(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var Oa = {},
          ja = Ea(Oa),
          Pa = Ea(!1),
          Ra = Oa;
        function Ta(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Oa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function _a(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          Ca(Pa), Ca(ja);
        }
        function Aa(e, t, n) {
          if (ja.current !== Oa) throw Error(o(168));
          Na(ja, t), Na(Pa, n);
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, H(e) || "Unknown", a));
          return F({}, n, r);
        }
        function za(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Oa),
            (Ra = ja.current),
            Na(ja, e),
            Na(Pa, Pa.current),
            !0
          );
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Da(e, t, Ra)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Pa),
              Ca(ja),
              Na(ja, e))
            : Ca(Pa),
            Na(Pa, n);
        }
        var Ia = null,
          Ba = !1,
          Ma = !1;
        function Ua(e) {
          null === Ia ? (Ia = [e]) : Ia.push(e);
        }
        function Wa() {
          if (!Ma && null !== Ia) {
            Ma = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ia;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ia = null), (Ba = !1);
            } catch (a) {
              throw (null !== Ia && (Ia = Ia.slice(e + 1)), Ke(Ze, Wa), a);
            } finally {
              (bt = t), (Ma = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Va = 0,
          $a = null,
          qa = 0,
          Ka = [],
          Qa = 0,
          Ga = null,
          Ja = 1,
          Ya = "";
        function Xa(e, t) {
          (Ha[Va++] = qa), (Ha[Va++] = $a), ($a = e), (qa = t);
        }
        function Za(e, t, n) {
          (Ka[Qa++] = Ja), (Ka[Qa++] = Ya), (Ka[Qa++] = Ga), (Ga = e);
          var r = Ja;
          e = Ya;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ja = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ya = o + e);
          } else (Ja = (1 << o) | (n << a) | r), (Ya = e);
        }
        function eo(e) {
          null !== e.return && (Xa(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === $a; )
            ($a = Ha[--Va]), (Ha[Va] = null), (qa = Ha[--Va]), (Ha[Va] = null);
          for (; e === Ga; )
            (Ga = Ka[--Qa]),
              (Ka[Qa] = null),
              (Ya = Ka[--Qa]),
              (Ka[Qa] = null),
              (Ja = Ka[--Qa]),
              (Ka[Qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = _s(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Ja, overflow: Ya } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = _s(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function so(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = sa(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = sa(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = sa(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var vo = w.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var go = Ea(null),
          bo = null,
          wo = null,
          xo = null;
        function ko() {
          xo = wo = bo = null;
        }
        function So(e) {
          var t = go.current;
          Ca(go), (e._currentValue = t);
        }
        function Eo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Co(e, t) {
          (bo = e),
            (xo = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function No(e) {
          var t = e._currentValue;
          if (xo !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var Oo = null;
        function jo(e) {
          null === Oo ? (Oo = [e]) : Oo.push(e);
        }
        function Po(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), jo(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ro(e, r)
          );
        }
        function Ro(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var To = !1;
        function _o(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Lo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ao(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Do(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Pu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ro(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), jo(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ro(e, n)
          );
        }
        function zo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Fo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Io(e, t, n, r) {
          var a = e.updateQueue;
          To = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var u = l,
              s = u.next;
            (u.next = null), null === i ? (o = s) : (i.next = s), (i = u);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = s) : (l.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, c = s = u = null, l = o; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = F({}, f, d);
                      break e;
                    case 2:
                      To = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Fu |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Bo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Mo = new r.Component().refs;
        function Uo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Wo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Ao(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Do(e, o, a)) && (rs(t, e, a, r), zo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Ao(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Do(e, o, a)) && (rs(t, e, a, r), zo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              a = Ao(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Do(e, a, r)) && (rs(t, e, r, n), zo(t, e, r));
          },
        };
        function Ho(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, o);
        }
        function Vo(e, t, n) {
          var r = !1,
            a = Oa,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = No(o))
              : ((a = _a(t) ? Ra : ja.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ta(e, a)
                  : Oa)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Wo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function $o(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Wo.enqueueReplaceState(t, t.state, null);
        }
        function qo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Mo), _o(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = No(o))
            : ((o = _a(t) ? Ra : ja.current), (a.context = Ta(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Uo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Wo.enqueueReplaceState(a, a.state, null),
              Io(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Ko(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Mo && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Go(e) {
          return (0, e._init)(e._payload);
        }
        function Jo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = As(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Is(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var o = n.type;
            return o === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === _ &&
                    Go(o) === t.type))
              ? (((r = a(t, n.props)).ref = Ko(e, t, n)), (r.return = e), r)
              : (((r = Ds(n.type, n.key, n.props, null, e.mode, r)).ref = Ko(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = zs(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Is("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Ds(t.type, t.key, t.props, null, e.mode, n)).ref = Ko(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Bs(t, e.mode, n)).return = e), t;
                case _:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || D(t))
                return ((t = zs(t, e.mode, n, null)).return = e), t;
              Qo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? s(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case _:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || D(n)) return null !== a ? null : f(e, t, n, r, null);
              Qo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case _:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || D(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Qo(t, r);
            }
            return null;
          }
          function m(a, o, l, u) {
            for (
              var s = null, c = null, f = o, m = (o = 0), v = null;
              null !== f && m < l.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var y = p(a, f, l[m], u);
              if (null === y) {
                null === f && (f = v);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (o = i(y, o, m)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (f = v);
            }
            if (m === l.length) return n(a, f), ao && Xa(a, m), s;
            if (null === f) {
              for (; m < l.length; m++)
                null !== (f = d(a, l[m], u)) &&
                  ((o = i(f, o, m)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return ao && Xa(a, m), s;
            }
            for (f = r(a, f); m < l.length; m++)
              null !== (v = h(f, a, m, l[m], u)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? m : v.key),
                (o = i(v, o, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, m),
              s
            );
          }
          function v(a, l, u, s) {
            var c = D(u);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var f = (c = null), m = l, v = (l = 0), y = null, g = u.next();
              null !== m && !g.done;
              v++, g = u.next()
            ) {
              m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(a, m, g.value, s);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (l = i(b, l, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = y);
            }
            if (g.done) return n(a, m), ao && Xa(a, v), c;
            if (null === m) {
              for (; !g.done; v++, g = u.next())
                null !== (g = d(a, g.value, s)) &&
                  ((l = i(g, l, v)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return ao && Xa(a, v), c;
            }
            for (m = r(a, m); !g.done; v++, g = u.next())
              null !== (g = h(m, a, v, g.value, s)) &&
                (e &&
                  null !== g.alternate &&
                  m.delete(null === g.key ? v : g.key),
                (l = i(g, l, v)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, v),
              c
            );
          }
          return function e(r, o, i, u) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var s = i.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = i.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === _ &&
                            Go(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = Ko(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((o = zs(i.props.children, r.mode, u, i.key)).return =
                          r),
                        (r = o))
                      : (((u = Ds(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          u
                        )).ref = Ko(r, o, i)),
                        (u.return = r),
                        (r = u));
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Bs(i, r.mode, u)).return = r), (r = o);
                  }
                  return l(r);
                case _:
                  return e(r, o, (c = i._init)(i._payload), u);
              }
              if (te(i)) return m(r, o, i, u);
              if (D(i)) return v(r, o, i, u);
              Qo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Is(i, r.mode, u)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Yo = Jo(!0),
          Xo = Jo(!1),
          Zo = {},
          ei = Ea(Zo),
          ti = Ea(Zo),
          ni = Ea(Zo);
        function ri(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((Na(ni, t), Na(ti, e), Na(ei, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(ei), Na(ei, t);
        }
        function oi() {
          Ca(ei), Ca(ti), Ca(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = ue(t, e.type);
          t !== n && (Na(ti, e), Na(ei, n));
        }
        function li(e) {
          ti.current === e && (Ca(ei), Ca(ti));
        }
        var ui = Ea(0);
        function si(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function fi() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var di = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          mi = null,
          vi = null,
          yi = null,
          gi = !1,
          bi = !1,
          wi = 0,
          xi = 0;
        function ki() {
          throw Error(o(321));
        }
        function Si(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Ei(e, t, n, r, a, i) {
          if (
            ((hi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? ll : ul),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (yi = vi = null),
                (t.updateQueue = null),
                (di.current = sl),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((di.current = il),
            (t = null !== vi && null !== vi.next),
            (hi = 0),
            (yi = vi = mi = null),
            (gi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Ci() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Ni() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yi ? (mi.memoizedState = yi = e) : (yi = yi.next = e), yi
          );
        }
        function Oi() {
          if (null === vi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vi.next;
          var t = null === yi ? mi.memoizedState : yi.next;
          if (null !== t) (yi = t), (vi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (vi = e).memoizedState,
              baseState: vi.baseState,
              baseQueue: vi.baseQueue,
              queue: vi.queue,
              next: null,
            }),
              null === yi ? (mi.memoizedState = yi = e) : (yi = yi.next = e);
          }
          return yi;
        }
        function ji(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Pi(e) {
          var t = Oi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = vi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var u = (l = null),
              s = null,
              c = i;
            do {
              var f = c.lane;
              if ((hi & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (l = r)) : (s = s.next = d),
                  (mi.lanes |= f),
                  (Fu |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === s ? (l = r) : (s.next = u),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (mi.lanes |= i), (Fu |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ri(e) {
          var t = Oi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ti() {}
        function _i(e, t) {
          var n = mi,
            r = Oi(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wl = !0)),
            (r = r.queue),
            Vi(Di.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== yi && 1 & yi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Bi(9, Ai.bind(null, n, r, a, t), void 0, null),
              null === Ru)
            )
              throw Error(o(349));
            0 !== (30 & hi) || Li(n, t, a);
          }
          return a;
        }
        function Li(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ai(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), zi(t) && Fi(e);
        }
        function Di(e, t, n) {
          return n(function () {
            zi(t) && Fi(e);
          });
        }
        function zi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Fi(e) {
          var t = Ro(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function Ii(e) {
          var t = Ni();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: ji,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Bi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Mi() {
          return Oi().memoizedState;
        }
        function Ui(e, t, n, r) {
          var a = Ni();
          (mi.flags |= e),
            (a.memoizedState = Bi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Wi(e, t, n, r) {
          var a = Oi();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== vi) {
            var i = vi.memoizedState;
            if (((o = i.destroy), null !== r && Si(r, i.deps)))
              return void (a.memoizedState = Bi(t, n, o, r));
          }
          (mi.flags |= e), (a.memoizedState = Bi(1 | t, n, o, r));
        }
        function Hi(e, t) {
          return Ui(8390656, 8, e, t);
        }
        function Vi(e, t) {
          return Wi(2048, 8, e, t);
        }
        function $i(e, t) {
          return Wi(4, 2, e, t);
        }
        function qi(e, t) {
          return Wi(4, 4, e, t);
        }
        function Ki(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Wi(4, 4, Ki.bind(null, t, e), n)
          );
        }
        function Gi() {}
        function Ji(e, t) {
          var n = Oi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Yi(e, t) {
          var n = Oi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xi(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = mt()), (mi.lanes |= n), (Fu |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return Oi().memoizedState;
        }
        function tl(e, t, n) {
          var r = ns(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = Po(e, t, n, r))) {
            rs(n, e, r, ts()), ol(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = ns(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), jo(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = Po(e, t, a, r)) &&
              (rs(n, e, r, (a = ts())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function al(e, t) {
          bi = gi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var il = {
            readContext: No,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: No,
            useCallback: function (e, t) {
              return (Ni().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: No,
            useEffect: Hi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ui(4194308, 4, Ki.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ui(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ui(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ni();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ni();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ni().memoizedState = e);
            },
            useState: Ii,
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return (Ni().memoizedState = e);
            },
            useTransition: function () {
              var e = Ii(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ni().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                a = Ni();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ru)) throw Error(o(349));
                0 !== (30 & hi) || Li(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Hi(Di.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Bi(9, Ai.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ni(),
                t = Ru.identifierPrefix;
              if (ao) {
                var n = Ya;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ja & ~(1 << (32 - it(Ja) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: No,
            useCallback: Ji,
            useContext: No,
            useEffect: Vi,
            useImperativeHandle: Qi,
            useInsertionEffect: $i,
            useLayoutEffect: qi,
            useMemo: Yi,
            useReducer: Pi,
            useRef: Mi,
            useState: function () {
              return Pi(ji);
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return Xi(Oi(), vi.memoizedState, e);
            },
            useTransition: function () {
              return [Pi(ji)[0], Oi().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: _i,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: No,
            useCallback: Ji,
            useContext: No,
            useEffect: Vi,
            useImperativeHandle: Qi,
            useInsertionEffect: $i,
            useLayoutEffect: qi,
            useMemo: Yi,
            useReducer: Ri,
            useRef: Mi,
            useState: function () {
              return Ri(ji);
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              var t = Oi();
              return null === vi
                ? (t.memoizedState = e)
                : Xi(t, vi.memoizedState, e);
            },
            useTransition: function () {
              return [Ri(ji)[0], Oi().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: _i,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Ao(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $u || (($u = !0), (qu = r)), dl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = Ao(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === Ku ? (Ku = new Set([this])) : Ku.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function vl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Ns.bind(null, e, t, n)), t.then(e, e));
        }
        function yl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ao(-1, 1)).tag = 2), Do(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = w.ReactCurrentOwner,
          wl = !1;
        function xl(e, t, n, r) {
          t.child = null === e ? Xo(t, null, n, r) : Yo(t, e.child, n, r);
        }
        function kl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Co(t, a),
            (r = Ei(e, t, n, r, o, a)),
            (n = Ci()),
            null === e || wl
              ? (ao && n && eo(t), (t.flags |= 1), xl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function Sl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Ls(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ds(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), El(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(i, r) &&
              e.ref === t.ref
            )
              return $l(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = As(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $l(e, t, a);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return Ol(e, t, n, r, a);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Na(Au, Lu),
                (Lu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Na(Au, Lu),
                  (Lu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Na(Au, Lu),
                (Lu |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Na(Au, Lu),
              (Lu |= r);
          return xl(e, t, a, n), t.child;
        }
        function Nl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ol(e, t, n, r, a) {
          var o = _a(n) ? Ra : ja.current;
          return (
            (o = Ta(t, o)),
            Co(t, a),
            (n = Ei(e, t, n, r, o, a)),
            (r = Ci()),
            null === e || wl
              ? (ao && r && eo(t), (t.flags |= 1), xl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function jl(e, t, n, r, a) {
          if (_a(n)) {
            var o = !0;
            za(t);
          } else o = !1;
          if ((Co(t, a), null === t.stateNode))
            Vl(e, t), Vo(t, n, r), qo(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = No(s))
              : (s = Ta(t, (s = _a(n) ? Ra : ja.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== s) && $o(t, i, r, s)),
              (To = !1);
            var d = t.memoizedState;
            (i.state = d),
              Io(t, r, i, a),
              (u = t.memoizedState),
              l !== r || d !== u || Pa.current || To
                ? ("function" === typeof c &&
                    (Uo(t, n, c, r), (u = t.memoizedState)),
                  (l = To || Ho(t, n, l, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Lo(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : yo(t.type, l)),
              (i.props = s),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = No(u))
                : (u = Ta(t, (u = _a(n) ? Ra : ja.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== u) && $o(t, i, r, u)),
              (To = !1),
              (d = t.memoizedState),
              (i.state = d),
              Io(t, r, i, a);
            var h = t.memoizedState;
            l !== f || d !== h || Pa.current || To
              ? ("function" === typeof p &&
                  (Uo(t, n, p, r), (h = t.memoizedState)),
                (s = To || Ho(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, u),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = u),
                (r = s))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Pl(e, t, n, r, o, a);
        }
        function Pl(e, t, n, r, a, o) {
          Nl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Fa(t, n, !1), $l(e, t, o);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Yo(t, e.child, null, o)),
                (t.child = Yo(t, null, l, o)))
              : xl(e, t, l, o),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          );
        }
        function Rl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Aa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Aa(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function Tl(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), xl(e, t, n, r), t.child;
        }
        var _l,
          Ll,
          Al,
          Dl,
          zl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Il(e, t, n) {
          var r,
            a = t.pendingProps,
            i = ui.current,
            l = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Na(ui, 1 & i),
            null === e)
          )
            return (
              so(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = u))
                        : (l = Fs(u, a, 0, null)),
                      (e = zs(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Fl(n)),
                      (t.memoizedState = zl),
                      e)
                    : Bl(t, u))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ml(e, t, l, (r = fl(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Fs(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = zs(i, a, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Yo(t, e.child, null, l),
                    (t.child.memoizedState = Fl(l)),
                    (t.memoizedState = zl),
                    i);
              if (0 === (1 & t.mode)) return Ml(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Ml(e, t, l, (r = fl((i = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (l & e.childLanes)), wl || u)) {
                if (null !== (r = Ru)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Ro(e, a), rs(r, e, a, -1));
                }
                return vs(), Ml(e, t, l, (r = fl(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = js.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = sa(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Ka[Qa++] = Ja),
                    (Ka[Qa++] = Ya),
                    (Ka[Qa++] = Ga),
                    (Ja = e.id),
                    (Ya = e.overflow),
                    (Ga = t)),
                  (t = Bl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, i, n);
          if (l) {
            (l = a.fallback), (u = t.mode), (r = (i = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = As(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = As(r, l))
                : ((l = zs(l, u, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Fl(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (l.memoizedState = u),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = zl),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = As(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Bl(e, t) {
          return (
            ((t = Fs(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ml(e, t, n, r) {
          return (
            null !== r && mo(r),
            Yo(t, e.child, null, n),
            ((e = Bl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ul(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Eo(e.return, t, n);
        }
        function Wl(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Hl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((xl(e, t, r.children, n), 0 !== (2 & (r = ui.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ul(e, n, t);
                else if (19 === e.tag) Ul(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Na(ui, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Wl(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Wl(t, !0, n, null, o);
                break;
              case "together":
                Wl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $l(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = As((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = As(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function ql(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Kl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ql(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Kl(t), null;
            case 1:
            case 17:
              return _a(t.type) && La(), Kl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                Ca(Pa),
                Ca(ja),
                fi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (ls(oo), (oo = null)))),
                Ll(e, t),
                Kl(t),
                null
              );
            case 5:
              li(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Al(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Kl(t), null;
                }
                if (((e = ri(ei.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Br("cancel", r), Br("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Br("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Dr.length; a++) Br(Dr[a], r);
                      break;
                    case "source":
                      Br("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Br("error", r), Br("load", r);
                      break;
                    case "details":
                      Br("toggle", r);
                      break;
                    case "input":
                      J(r, i), Br("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Br("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Br("invalid", r);
                  }
                  for (var u in (ge(n, i), (a = null), i))
                    if (i.hasOwnProperty(u)) {
                      var s = i[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : l.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Br("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      q(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    _l(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Br("cancel", e), Br("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Br("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Dr.length; a++) Br(Dr[a], e);
                        a = r;
                        break;
                      case "source":
                        Br("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Br("error", e), Br("load", e), (a = r);
                        break;
                      case "details":
                        Br("toggle", e), (a = r);
                        break;
                      case "input":
                        J(e, r), (a = G(e, r)), Br("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          Br("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Br("invalid", e);
                    }
                    for (i in (ge(n, a), (s = a)))
                      if (s.hasOwnProperty(i)) {
                        var c = s[i];
                        "style" === i
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (l.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Br("scroll", e)
                              : null != c && b(e, i, c, u));
                      }
                    switch (n) {
                      case "input":
                        q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Kl(t), null;
            case 6:
              if (e && null != t.stateNode) Dl(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Kl(t), null;
            case 13:
              if (
                (Ca(ui),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Kl(t), (i = !1);
                } else null !== oo && (ls(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ui.current)
                        ? 0 === Du && (Du = 3)
                        : vs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Kl(t),
                  null);
            case 4:
              return (
                oi(),
                Ll(e, t),
                null === e && Wr(t.stateNode.containerInfo),
                Kl(t),
                null
              );
            case 10:
              return So(t.type._context), Kl(t), null;
            case 19:
              if ((Ca(ui), null === (i = t.memoizedState))) return Kl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
                if (r) ql(i, !1);
                else {
                  if (0 !== Du || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = si(e))) {
                        for (
                          t.flags |= 128,
                            ql(i, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (u = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = u.childLanes),
                                (i.lanes = u.lanes),
                                (i.child = u.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = u.memoizedProps),
                                (i.memoizedState = u.memoizedState),
                                (i.updateQueue = u.updateQueue),
                                (i.type = u.type),
                                (e = u.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Na(ui, (1 & ui.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ye() > Hu &&
                    ((t.flags |= 128),
                    (r = !0),
                    ql(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      ql(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return Kl(t), null;
                  } else
                    2 * Ye() - i.renderingStartTime > Hu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      ql(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = i.last) ? (n.sibling = u) : (t.child = u),
                    (i.last = u));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ye()),
                  (t.sibling = null),
                  (n = ui.current),
                  Na(ui, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Kl(t), null);
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Lu) &&
                    (Kl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Kl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                _a(t.type) && La(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                Ca(Pa),
                Ca(ja),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (Ca(ui),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(ui), null;
            case 4:
              return oi(), null;
            case 10:
              return So(t.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null;
          }
        }
        (_l = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ll = function () {}),
          (Al = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (i = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in s)
                        s.hasOwnProperty(o) &&
                          u[o] !== s[o] &&
                          (n || (n = {}), (n[o] = s[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (i = i || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (i = i || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Br("scroll", e),
                            i || u === s || (i = []))
                          : (i = i || []).push(c, s));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Dl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Jl = !1,
          Yl = !1,
          Xl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Cs(e, t, r);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (r) {
            Cs(e, t, r);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && tu(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function au(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ou(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function iu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), iu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ma],
              delete t[va],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function lu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        var fu = null,
          du = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
        }
        function hu(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Yl || eu(n, t);
            case 6:
              var r = fu,
                a = du;
              (fu = null),
                pu(e, t, n),
                (du = a),
                null !== (fu = r) &&
                  (du
                    ? ((e = fu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fu.removeChild(n.stateNode));
              break;
            case 18:
              null !== fu &&
                (du
                  ? ((e = fu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Wt(e))
                  : ua(fu, n.stateNode));
              break;
            case 4:
              (r = fu),
                (a = du),
                (fu = n.stateNode.containerInfo),
                (du = !0),
                pu(e, t, n),
                (fu = r),
                (du = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Yl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      tu(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (
                !Yl &&
                (eu(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Cs(n, t, l);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Yl = (r = Yl) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Yl = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function mu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xl()),
              t.forEach(function (t) {
                var r = Ps.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  u = l;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (fu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (fu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === fu) throw Error(o(160));
                hu(i, l, a), (fu = null), (du = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                Cs(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yu(t, e), (t = t.sibling);
        }
        function yu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vu(t, e), gu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e);
                } catch (v) {
                  Cs(e, e.return, v);
                }
                try {
                  ru(5, e, e.return);
                } catch (v) {
                  Cs(e, e.return, v);
                }
              }
              break;
            case 1:
              vu(t, e), gu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (vu(t, e),
                gu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (v) {
                  Cs(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === i.type &&
                      null != i.name &&
                      Y(a, i),
                      be(u, l);
                    var c = be(u, i);
                    for (l = 0; l < s.length; l += 2) {
                      var f = s[l],
                        d = s[l + 1];
                      "style" === f
                        ? ve(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        X(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (v) {
                    Cs(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((vu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (v) {
                  Cs(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (vu(t, e),
                gu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo);
                } catch (v) {
                  Cs(e, e.return, v);
                }
              break;
            case 4:
            default:
              vu(t, e), gu(e);
              break;
            case 13:
              vu(t, e),
                gu(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Wu = Ye())),
                4 & r && mu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Yl = (c = Yl) || f), vu(t, e), (Yl = c))
                  : vu(t, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Zl = e, f = e.child; null !== f; ) {
                    for (d = Zl = f; null !== Zl; ) {
                      switch (((h = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              Cs(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ku(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zl = h)) : ku(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((u = d.stateNode),
                              (l =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = me("display", l)));
                      } catch (v) {
                        Cs(e, e.return, v);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (v) {
                        Cs(e, e.return, v);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              vu(t, e), gu(e), 4 & r && mu(e);
            case 21:
          }
        }
        function gu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (lu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cu(e, uu(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  su(e, uu(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              Cs(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bu(e, t, n) {
          (Zl = e), wu(e, t, n);
        }
        function wu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
            var a = Zl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Jl;
              if (!i) {
                var l = a.alternate,
                  u = (null !== l && null !== l.memoizedState) || Yl;
                l = Jl;
                var s = Yl;
                if (((Jl = i), (Yl = u) && !s))
                  for (Zl = a; null !== Zl; )
                    (u = (i = Zl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Su(a)
                        : null !== u
                        ? ((u.return = i), (Zl = u))
                        : Su(a);
                for (; null !== o; ) (Zl = o), wu(o, t, n), (o = o.sibling);
                (Zl = a), (Jl = l), (Yl = s);
              }
              xu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zl = o))
                : xu(e);
          }
        }
        function xu(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yl || au(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Yl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Bo(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Bo(t, l, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Wt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Yl || (512 & t.flags && ou(t));
              } catch (p) {
                Cs(t, t.return, p);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function ku(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function Su(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    au(4, t);
                  } catch (u) {
                    Cs(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Cs(t, a, u);
                    }
                  }
                  var o = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    Cs(t, o, u);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    Cs(t, i, u);
                  }
              }
            } catch (u) {
              Cs(t, t.return, u);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var Eu,
          Cu = Math.ceil,
          Nu = w.ReactCurrentDispatcher,
          Ou = w.ReactCurrentOwner,
          ju = w.ReactCurrentBatchConfig,
          Pu = 0,
          Ru = null,
          Tu = null,
          _u = 0,
          Lu = 0,
          Au = Ea(0),
          Du = 0,
          zu = null,
          Fu = 0,
          Iu = 0,
          Bu = 0,
          Mu = null,
          Uu = null,
          Wu = 0,
          Hu = 1 / 0,
          Vu = null,
          $u = !1,
          qu = null,
          Ku = null,
          Qu = !1,
          Gu = null,
          Ju = 0,
          Yu = 0,
          Xu = null,
          Zu = -1,
          es = 0;
        function ts() {
          return 0 !== (6 & Pu) ? Ye() : -1 !== Zu ? Zu : (Zu = Ye());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Pu) && 0 !== _u
            ? _u & -_u
            : null !== vo.transition
            ? (0 === es && (es = mt()), es)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Yu) throw ((Yu = 0), (Xu = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & Pu) && e === Ru) ||
              (e === Ru && (0 === (2 & Pu) && (Iu |= n), 4 === Du && us(e, _u)),
              as(e, r),
              1 === n &&
                0 === Pu &&
                0 === (1 & t.mode) &&
                ((Hu = Ye() + 500), Ba && Wa()));
        }
        function as(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                u = a[i];
              -1 === u
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : u <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Ru ? _u : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ba = !0), Ua(e);
                  })(ss.bind(null, e))
                : Ua(ss.bind(null, e)),
                ia(function () {
                  0 === (6 & Pu) && Wa();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Rs(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((Zu = -1), (es = 0), 0 !== (6 & Pu))) throw Error(o(327));
          var n = e.callbackNode;
          if (Ss() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ru ? _u : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ys(e, r);
          else {
            t = r;
            var a = Pu;
            Pu |= 2;
            var i = ms();
            for (
              (Ru === e && _u === t) ||
              ((Vu = null), (Hu = Ye() + 500), ps(e, t));
              ;

            )
              try {
                bs();
                break;
              } catch (u) {
                hs(e, u);
              }
            ko(),
              (Nu.current = i),
              (Pu = a),
              null !== Tu ? (t = 0) : ((Ru = null), (_u = 0), (t = Du));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = is(e, a))),
              1 === t)
            )
              throw ((n = zu), ps(e, 0), us(e, r), as(e, Ye()), n);
            if (6 === t) us(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = ys(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = is(e, i))),
                  1 === t))
              )
                throw ((n = zu), ps(e, 0), us(e, r), as(e, Ye()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  ks(e, Uu, Vu);
                  break;
                case 3:
                  if (
                    (us(e, r),
                    (130023424 & r) === r && 10 < (t = Wu + 500 - Ye()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ks.bind(null, e, Uu, Vu), t);
                    break;
                  }
                  ks(e, Uu, Vu);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ye() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ks.bind(null, e, Uu, Vu), r);
                    break;
                  }
                  ks(e, Uu, Vu);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return as(e, Ye()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function is(e, t) {
          var n = Mu;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = ys(e, t)) && ((t = Uu), (Uu = n), null !== t && ls(t)),
            e
          );
        }
        function ls(e) {
          null === Uu ? (Uu = e) : Uu.push.apply(Uu, e);
        }
        function us(e, t) {
          for (
            t &= ~Bu,
              t &= ~Iu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 !== (6 & Pu)) throw Error(o(327));
          Ss();
          var t = dt(e, 0);
          if (0 === (1 & t)) return as(e, Ye()), null;
          var n = ys(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = is(e, r)));
          }
          if (1 === n) throw ((n = zu), ps(e, 0), us(e, t), as(e, Ye()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ks(e, Uu, Vu),
            as(e, Ye()),
            null
          );
        }
        function cs(e, t) {
          var n = Pu;
          Pu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Pu = n) && ((Hu = Ye() + 500), Ba && Wa());
          }
        }
        function fs(e) {
          null !== Gu && 0 === Gu.tag && 0 === (6 & Pu) && Ss();
          var t = Pu;
          Pu |= 1;
          var n = ju.transition,
            r = bt;
          try {
            if (((ju.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (ju.transition = n), 0 === (6 & (Pu = t)) && Wa();
          }
        }
        function ds() {
          (Lu = Au.current), Ca(Au);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Tu))
            for (n = Tu.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    La();
                  break;
                case 3:
                  oi(), Ca(Pa), Ca(ja), fi();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  Ca(ui);
                  break;
                case 10:
                  So(r.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              n = n.return;
            }
          if (
            ((Ru = e),
            (Tu = e = As(e.current, null)),
            (_u = Lu = t),
            (Du = 0),
            (zu = null),
            (Bu = Iu = Fu = 0),
            (Uu = Mu = null),
            null !== Oo)
          ) {
            for (t = 0; t < Oo.length; t++)
              if (null !== (r = (n = Oo[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Oo = null;
          }
          return e;
        }
        function hs(e, t) {
          for (;;) {
            var n = Tu;
            try {
              if ((ko(), (di.current = il), gi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gi = !1;
              }
              if (
                ((hi = 0),
                (yi = vi = mi = null),
                (bi = !1),
                (wi = 0),
                (Ou.current = null),
                null === n || null === n.return)
              ) {
                (Du = 1), (zu = t), (Tu = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = _u),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = yl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      gl(h, l, u, 0, t),
                      1 & h.mode && vl(i, c, t),
                      (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(s), (t.updateQueue = v);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vl(i, c, t), vs();
                    break e;
                  }
                  s = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var y = yl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gl(y, l, u, 0, t),
                      mo(cl(s, u));
                    break e;
                  }
                }
                (i = s = cl(s, u)),
                  4 !== Du && (Du = 2),
                  null === Mu ? (Mu = [i]) : Mu.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Fo(i, hl(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var g = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Ku || !Ku.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Fo(i, ml(i, u, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xs(n);
            } catch (w) {
              (t = w), Tu === n && null !== n && (Tu = n = n.return);
              continue;
            }
            break;
          }
        }
        function ms() {
          var e = Nu.current;
          return (Nu.current = il), null === e ? il : e;
        }
        function vs() {
          (0 !== Du && 3 !== Du && 2 !== Du) || (Du = 4),
            null === Ru ||
              (0 === (268435455 & Fu) && 0 === (268435455 & Iu)) ||
              us(Ru, _u);
        }
        function ys(e, t) {
          var n = Pu;
          Pu |= 2;
          var r = ms();
          for ((Ru === e && _u === t) || ((Vu = null), ps(e, t)); ; )
            try {
              gs();
              break;
            } catch (a) {
              hs(e, a);
            }
          if ((ko(), (Pu = n), (Nu.current = r), null !== Tu))
            throw Error(o(261));
          return (Ru = null), (_u = 0), Du;
        }
        function gs() {
          for (; null !== Tu; ) ws(Tu);
        }
        function bs() {
          for (; null !== Tu && !Ge(); ) ws(Tu);
        }
        function ws(e) {
          var t = Eu(e.alternate, e, Lu);
          (e.memoizedProps = e.pendingProps),
            null === t ? xs(e) : (Tu = t),
            (Ou.current = null);
        }
        function xs(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ql(n, t, Lu))) return void (Tu = n);
            } else {
              if (null !== (n = Gl(n, t)))
                return (n.flags &= 32767), void (Tu = n);
              if (null === e) return (Du = 6), void (Tu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Tu = t);
            Tu = t = e;
          } while (null !== t);
          0 === Du && (Du = 5);
        }
        function ks(e, t, n) {
          var r = bt,
            a = ju.transition;
          try {
            (ju.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Ss();
                } while (null !== Gu);
                if (0 !== (6 & Pu)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Ru && ((Tu = Ru = null), (_u = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qu ||
                    ((Qu = !0),
                    Rs(tt, function () {
                      return Ss(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = ju.transition), (ju.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = Pu;
                  (Pu |= 4),
                    (Ou.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = l + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = l),
                                    p === i && ++f === r && (s = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        y = m.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : yo(t.type, v),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (x) {
                              Cs(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (m = nu), (nu = !1);
                    })(e, n),
                    yu(n, e),
                    hr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bu(n, e, a),
                    Je(),
                    (Pu = u),
                    (bt = l),
                    (ju.transition = i);
                } else e.current = n;
                if (
                  (Qu && ((Qu = !1), (Gu = e), (Ju = a)),
                  (i = e.pendingLanes),
                  0 === i && (Ku = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  as(e, Ye()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if ($u) throw (($u = !1), (e = qu), (qu = null), e);
                0 !== (1 & Ju) && 0 !== e.tag && Ss(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Xu
                      ? Yu++
                      : ((Yu = 0), (Xu = e))
                    : (Yu = 0),
                  Wa();
              })(e, t, n, r);
          } finally {
            (ju.transition = a), (bt = r);
          }
          return null;
        }
        function Ss() {
          if (null !== Gu) {
            var e = wt(Ju),
              t = ju.transition,
              n = bt;
            try {
              if (((ju.transition = null), (bt = 16 > e ? 16 : e), null === Gu))
                var r = !1;
              else {
                if (((e = Gu), (Gu = null), (Ju = 0), 0 !== (6 & Pu)))
                  throw Error(o(331));
                var a = Pu;
                for (Pu |= 4, Zl = e.current; null !== Zl; ) {
                  var i = Zl,
                    l = i.child;
                  if (0 !== (16 & Zl.flags)) {
                    var u = i.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Zl = c; null !== Zl; ) {
                          var f = Zl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zl = d);
                          else
                            for (; null !== Zl; ) {
                              var p = (f = Zl).sibling,
                                h = f.return;
                              if ((iu(f), f === c)) {
                                Zl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zl = p);
                                break;
                              }
                              Zl = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var y = v.sibling;
                            (v.sibling = null), (v = y);
                          } while (null !== v);
                        }
                      }
                      Zl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (i = Zl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, i, i.return);
                        }
                      var g = i.sibling;
                      if (null !== g) {
                        (g.return = i.return), (Zl = g);
                        break e;
                      }
                      Zl = i.return;
                    }
                }
                var b = e.current;
                for (Zl = b; null !== Zl; ) {
                  var w = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Zl = w);
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (0 !== (2048 & (u = Zl).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u);
                          }
                        } catch (k) {
                          Cs(u, u.return, k);
                        }
                      if (u === l) {
                        Zl = null;
                        break e;
                      }
                      var x = u.sibling;
                      if (null !== x) {
                        (x.return = u.return), (Zl = x);
                        break e;
                      }
                      Zl = u.return;
                    }
                }
                if (
                  ((Pu = a),
                  Wa(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (ju.transition = t);
            }
          }
          return !1;
        }
        function Es(e, t, n) {
          (e = Do(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (yt(e, 1, t), as(e, t));
        }
        function Cs(e, t, n) {
          if (3 === e.tag) Es(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Es(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ku || !Ku.has(r)))
                ) {
                  (t = Do(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (yt(t, 1, e), as(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ns(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ru === e &&
              (_u & n) === n &&
              (4 === Du ||
              (3 === Du && (130023424 & _u) === _u && 500 > Ye() - Wu)
                ? ps(e, 0)
                : (Bu |= n)),
            as(e, t);
        }
        function Os(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = Ro(e, t)) && (yt(e, t, n), as(e, n));
        }
        function js(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Os(e, n);
        }
        function Ps(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Os(e, n);
        }
        function Rs(e, t) {
          return Ke(e, t);
        }
        function Ts(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function _s(e, t, n, r) {
          return new Ts(e, t, n, r);
        }
        function Ls(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function As(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = _s(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ds(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Ls(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return zs(n.children, a, i, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = _s(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = _s(13, n, t, a)).elementType = P), (e.lanes = i), e
                );
              case R:
                return (
                  ((e = _s(19, n, t, a)).elementType = R), (e.lanes = i), e
                );
              case L:
                return Fs(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      l = 10;
                      break e;
                    case O:
                      l = 9;
                      break e;
                    case j:
                      l = 11;
                      break e;
                    case T:
                      l = 14;
                      break e;
                    case _:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = _s(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function zs(e, t, n, r) {
          return ((e = _s(7, e, r, t)).lanes = n), e;
        }
        function Fs(e, t, n, r) {
          return (
            ((e = _s(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Is(e, t, n) {
          return ((e = _s(6, e, null, t)).lanes = n), e;
        }
        function Bs(e, t, n) {
          return (
            ((t = _s(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ms(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Us(e, t, n, r, a, o, i, l, u) {
          return (
            (e = new Ms(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = _s(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            _o(o),
            e
          );
        }
        function Ws(e) {
          if (!e) return Oa;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (_a(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (_a(n)) return Da(e, n, t);
          }
          return t;
        }
        function Hs(e, t, n, r, a, o, i, l, u) {
          return (
            ((e = Us(n, r, !0, e, 0, o, 0, l, u)).context = Ws(null)),
            (n = e.current),
            ((o = Ao((r = ts()), (a = ns(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Do(n, o, a),
            (e.current.lanes = a),
            yt(e, a, r),
            as(e, r),
            e
          );
        }
        function Vs(e, t, n, r) {
          var a = t.current,
            o = ts(),
            i = ns(a);
          return (
            (n = Ws(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ao(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Do(a, t, i)) && (rs(e, a, i, o), zo(e, a, i)),
            i
          );
        }
        function $s(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function qs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Ks(e, t) {
          qs(e, t), (e = e.alternate) && qs(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Rl(t), ho();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        _a(t.type) && za(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Na(go, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Na(ui, 1 & ui.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Il(e, t, n)
                            : (Na(ui, 1 & ui.current),
                              null !== (e = $l(e, t, n)) ? e.sibling : null);
                        Na(ui, 1 & ui.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Na(ui, ui.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return $l(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), ao && 0 !== (1048576 & t.flags) && Za(t, qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vl(e, t), (e = t.pendingProps);
              var a = Ta(t, ja.current);
              Co(t, n), (a = Ei(null, t, r, e, a, n));
              var i = Ci();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    _a(r) ? ((i = !0), za(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    _o(t),
                    (a.updater = Wo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    qo(t, r, e, n),
                    (t = Pl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    xl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ls(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ol(null, t, r, e, n);
                    break e;
                  case 1:
                    t = jl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = kl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ol(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                jl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 3:
              e: {
                if ((Rl(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Lo(e, t),
                  Io(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Tl(e, t, r, n, (a = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Tl(e, t, r, n, (a = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = sa(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Xo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = $l(e, t, n);
                    break e;
                  }
                  xl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && so(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Nl(e, t),
                xl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && so(t), null;
            case 13:
              return Il(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Yo(t, null, r, n)) : xl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                kl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 7:
              return xl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  Na(go, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Pa.current) {
                      t = $l(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var u = i.dependencies;
                      if (null !== u) {
                        l = i.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              (s = Ao(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (i.lanes |= n),
                              null !== (s = i.alternate) && (s.lanes |= n),
                              Eo(i.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          Eo(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                xl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Co(t, n),
                (r = r((a = No(a)))),
                (t.flags |= 1),
                xl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = yo((r = t.type), t.pendingProps)),
                Sl(e, t, r, (a = yo(r.type, a)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : yo(r, a)),
                Vl(e, t),
                (t.tag = 1),
                _a(r) ? ((e = !0), za(t)) : (e = !1),
                Co(t, n),
                Vo(t, r, a),
                qo(t, r, a, n),
                Pl(null, t, r, !0, e, n)
              );
            case 19:
              return Hl(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Qs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gs(e) {
          this._internalRoot = e;
        }
        function Js(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zs() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = $s(i);
                l.call(e);
              };
            }
            Vs(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = $s(i);
                    o.call(e);
                  };
                }
                var i = Hs(t, r, e, 0, null, !1, 0, "", Zs);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  fs(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = $s(u);
                  l.call(e);
                };
              }
              var u = Us(e, 0, !1, null, 0, !1, 0, "", Zs);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                fs(function () {
                  Vs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return $s(i);
        }
        (Js.prototype.render = Gs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Vs(e, t, null, null);
          }),
          (Js.prototype.unmount = Gs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fs(function () {
                  Vs(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Js.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    as(t, Ye()),
                    0 === (6 & Pu) && ((Hu = Ye() + 500), Wa()));
                }
                break;
              case 13:
                fs(function () {
                  var t = Ro(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  Ks(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Ro(e, 134217728);
              if (null !== t) rs(t, e, 134217728, ts());
              Ks(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = Ro(e, t);
              if (null !== n) rs(n, e, t, ts());
              Ks(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(o(90));
                      K(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (je = cs),
          (Pe = fs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, xa, Ne, Oe, cs],
          },
          nc = {
            findFiberByHostInstance: ga,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ys(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ys(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Qs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Us(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Gs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ys(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = Qs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Hs(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ha] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Js(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xs(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (fs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xs(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            o = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: o,
            _owner: l.current,
          };
        }
        (t.Fragment = o), (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var w = (b.prototype = new g());
        (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: S.current,
          };
        }
        function N(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var O = /\/+/g;
        function j(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === o ? "." + j(u, 0) : o),
              x(i)
                ? ((a = ""),
                  null != e && (a = e.replace(O, "$&/") + "/"),
                  P(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (N(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (u && u.key === i.key)
                          ? ""
                          : ("" + i.key).replace(O, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), x(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + j((l = e[s]), s);
              u += P(l, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += P((l = l.value), t, a, (c = o + j(l, s++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var _ = { current: null },
          L = { transition: null },
          A = {
            ReactCurrentDispatcher: _,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = S.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                k.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return _.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return _.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return _.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return _.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return _.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return _.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return _.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return _.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return _.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return _.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return _.current.useRef(e);
          }),
          (t.useState = function (e) {
            return _.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return _.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return _.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                s = l + 1,
                c = e[s];
              if (0 > o(u, n))
                s < a && 0 > o(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[l] = n), (r = l));
              else {
                if (!(s < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(s)) (m = !0), L(k);
            else {
              var t = r(c);
              null !== t && A(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), v && ((v = !1), g(N), (N = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !P()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(s) && a(s),
                  w(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && A(x, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          N = -1,
          O = 5,
          j = -1;
        function P() {
          return !(t.unstable_now() - j < O);
        }
        function R() {
          if (null !== C) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(R);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            _ = T.port2;
          (T.port1.onmessage = R),
            (S = function () {
              _.postMessage(null);
            });
        } else
          S = function () {
            y(R, 0);
          };
        function L(e) {
          (C = e), E || ((E = !0), S());
        }
        function A(e, n) {
          N = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), L(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (O = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (v ? (g(N), (N = -1)) : (v = !0), A(x, o - i)))
                : ((e.sortIndex = l), n(s, e), m || h || ((m = !0), L(k))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      391: function (e) {
        "use strict";
        var t = function () {};
        e.exports = t;
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    (function () {
      "use strict";
      var e,
        t = n(791),
        r = n(250);
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function i(e, t) {
        if (e) {
          if ("string" === typeof e) return a(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? a(e, t)
              : void 0
          );
        }
      }
      function l(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return a(e);
          })(e) ||
          o(e) ||
          i(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e) {
        return (
          (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          s(e)
        );
      }
      function c(e) {
        var t = (function (e, t) {
          if ("object" !== s(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== s(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === s(t) ? t : String(t);
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, c(r.key), r);
        }
      }
      function d(e, t, n) {
        return (
          t && f(e.prototype, t),
          n && f(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function p(e, t) {
        return (
          (p = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          p(e, t)
        );
      }
      function h(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && p(e, t);
      }
      function m(e) {
        return (
          (m = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          m(e)
        );
      }
      function v() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function y(e, t) {
        if (t && ("object" === s(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function g(e) {
        var t = v();
        return function () {
          var n,
            r = m(e);
          if (t) {
            var a = m(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return y(this, n);
        };
      }
      function b(e, t, n) {
        return (
          (b = v()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && p(a, n.prototype), a;
              }),
          b.apply(null, arguments)
        );
      }
      function w(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (w = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return b(e, arguments, m(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              p(r, e)
            );
          }),
          w(e)
        );
      }
      function x(e) {
        if (Array.isArray(e)) return e;
      }
      function k() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function S(e, t) {
        return (
          x(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o,
                i,
                l = [],
                u = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (c) {
                (s = !0), (a = c);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          i(e, t) ||
          k()
        );
      }
      function E() {
        return (
          (E = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          E.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var C,
        N = "popstate";
      function O(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function j(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function P(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function R(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          E(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? _(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function T(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          o = e.hash,
          i = void 0 === o ? "" : o;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function _(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function L(t, n, r, a) {
        void 0 === a && (a = {});
        var o = a,
          i = o.window,
          l = void 0 === i ? document.defaultView : i,
          u = o.v5Compat,
          s = void 0 !== u && u,
          c = l.history,
          f = e.Pop,
          d = null,
          p = h();
        function h() {
          return (c.state || { idx: null }).idx;
        }
        function m() {
          f = e.Pop;
          var t = h(),
            n = null == t ? null : t - p;
          (p = t), d && d({ action: f, location: y.location, delta: n });
        }
        function v(e) {
          var t =
              "null" !== l.location.origin
                ? l.location.origin
                : l.location.href,
            n = "string" === typeof e ? e : T(e);
          return (
            O(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == p && ((p = 0), c.replaceState(E({}, c.state, { idx: p }), ""));
        var y = {
          get action() {
            return f;
          },
          get location() {
            return t(l, c);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              l.addEventListener(N, m),
              (d = e),
              function () {
                l.removeEventListener(N, m), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(l, e);
          },
          createURL: v,
          encodeLocation: function (e) {
            var t = v(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            f = e.Push;
            var a = R(y.location, t, n);
            r && r(a, t);
            var o = P(a, (p = h() + 1)),
              i = y.createHref(a);
            try {
              c.pushState(o, "", i);
            } catch (u) {
              l.location.assign(i);
            }
            s && d && d({ action: f, location: y.location, delta: 1 });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = R(y.location, t, n);
            r && r(a, t);
            var o = P(a, (p = h())),
              i = y.createHref(a);
            c.replaceState(o, "", i),
              s && d && d({ action: f, location: y.location, delta: 0 });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return y;
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(C || (C = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function A(e, t, n) {
        void 0 === n && (n = "/");
        var r = Q(("string" === typeof t ? _(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = D(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var o = null, i = 0; null == o && i < a.length; ++i)
          o = $(a[i], K(r));
        return o;
      }
      function D(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var a = function (e, a, o) {
          var i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (O(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          var l = X([r, i.relativePath]),
            u = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (O(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            D(e.children, t, u, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: V(l, e.index), routesMeta: u });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                o = (function (e, t) {
                  var n =
                    ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                  if (!n) {
                    if (
                      Array.isArray(e) ||
                      (n = i(e)) ||
                      (t && e && "number" === typeof e.length)
                    ) {
                      n && (e = n);
                      var r = 0,
                        a = function () {};
                      return {
                        s: a,
                        n: function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: a,
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }
                  var o,
                    l = !0,
                    u = !1;
                  return {
                    s: function () {
                      n = n.call(e);
                    },
                    n: function () {
                      var e = n.next();
                      return (l = e.done), e;
                    },
                    e: function (e) {
                      (u = !0), (o = e);
                    },
                    f: function () {
                      try {
                        l || null == n.return || n.return();
                      } finally {
                        if (u) throw o;
                      }
                    },
                  };
                })(z(e.path));
              try {
                for (o.s(); !(r = o.n()).done; ) {
                  var l = r.value;
                  a(e, t, l);
                }
              } catch (u) {
                o.e(u);
              } finally {
                o.f();
              }
            } else a(e, t);
          }),
          t
        );
      }
      function z(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = x((n = t)) || o(n) || i(n) || k(),
          a = r[0],
          u = r.slice(1),
          s = a.endsWith("?"),
          c = a.replace(/\?$/, "");
        if (0 === u.length) return s ? [c, ""] : [c];
        var f = z(u.join("/")),
          d = [];
        return (
          d.push.apply(
            d,
            l(
              f.map(function (e) {
                return "" === e ? c : [c, e].join("/");
              })
            )
          ),
          s && d.push.apply(d, l(f)),
          d.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      var F = /^:\w+$/,
        I = 3,
        B = 2,
        M = 1,
        U = 10,
        W = -2,
        H = function (e) {
          return "*" === e;
        };
      function V(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(H) && (r += W),
          t && (r += B),
          n
            .filter(function (e) {
              return !H(e);
            })
            .reduce(function (e, t) {
              return e + (F.test(t) ? I : "" === t ? M : U);
            }, r)
        );
      }
      function $(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", o = [], i = 0;
          i < n.length;
          ++i
        ) {
          var l = n[i],
            u = i === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = q(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
              s
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = l.route;
          o.push({
            params: r,
            pathname: X([a, c.pathname]),
            pathnameBase: Z(X([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = X([a, c.pathnameBase]));
        }
        return o;
      }
      function q(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            j(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          r = S(n, 2),
          a = r[0],
          o = r[1],
          i = t.match(a);
        if (!i) return null;
        var l = i[0],
          u = l.replace(/(.)\/+$/, "$1"),
          s = i.slice(1);
        return {
          params: o.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = s[n] || "";
              u = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    j(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(s[n] || "", t)),
              e
            );
          }, {}),
          pathname: l,
          pathnameBase: u,
          pattern: e,
        };
      }
      function K(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            j(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function Q(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function G(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function J(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function Y(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = _(e))
            : (O(
                !(a = E({}, e)).pathname || !a.pathname.includes("?"),
                G("?", "pathname", "search", a)
              ),
              O(
                !a.pathname || !a.pathname.includes("#"),
                G("#", "pathname", "hash", a)
              ),
              O(
                !a.search || !a.search.includes("#"),
                G("#", "search", "hash", a)
              ));
        var o,
          i = "" === e || "" === a.pathname,
          l = i ? "/" : a.pathname;
        if (r || null == l) o = n;
        else {
          var u = t.length - 1;
          if (l.startsWith("..")) {
            for (var s = l.split("/"); ".." === s[0]; ) s.shift(), (u -= 1);
            a.pathname = s.join("/");
          }
          o = u >= 0 ? t[u] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? _(e) : e,
              r = n.pathname,
              a = n.search,
              o = void 0 === a ? "" : a,
              i = n.hash,
              l = void 0 === i ? "" : i,
              u = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: u, search: ee(o), hash: te(l) };
          })(a, o),
          f = l && "/" !== l && l.endsWith("/"),
          d = (i || "." === l) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var X = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        Z = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        ee = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        te = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        ne = (function (e) {
          h(n, e);
          var t = g(n);
          function n() {
            return u(this, n), t.apply(this, arguments);
          }
          return d(n);
        })(w(Error));
      function re(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      var ae = ["post", "put", "patch", "delete"],
        oe = (new Set(ae), ["get"].concat(ae));
      new Set(oe),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      Symbol("deferred");
      function ie() {
        return (
          (ie = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ie.apply(this, arguments)
        );
      }
      var le = t.createContext(null);
      var ue = t.createContext(null);
      var se = t.createContext(null);
      var ce = t.createContext(null);
      var fe = t.createContext(null);
      var de = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      var pe = t.createContext(null);
      function he() {
        return null != t.useContext(fe);
      }
      function me() {
        return he() || O(!1), t.useContext(fe).location;
      }
      function ve(e) {
        t.useContext(ce).static || t.useLayoutEffect(e);
      }
      function ye() {
        return t.useContext(de).isDataRoute
          ? (function () {
              var e = Oe(xe.UseNavigateStable).router,
                n = Pe(ke.UseNavigateStable),
                r = t.useRef(!1);
              ve(function () {
                r.current = !0;
              });
              var a = t.useCallback(
                function (t, a) {
                  void 0 === a && (a = {}),
                    r.current &&
                      ("number" === typeof t
                        ? e.navigate(t)
                        : e.navigate(t, ie({ fromRouteId: n }, a)));
                },
                [e, n]
              );
              return a;
            })()
          : (function () {
              he() || O(!1);
              var e = t.useContext(ce),
                n = e.basename,
                r = e.navigator,
                a = t.useContext(de).matches,
                o = me().pathname,
                i = JSON.stringify(
                  J(a).map(function (e) {
                    return e.pathnameBase;
                  })
                ),
                l = t.useRef(!1);
              ve(function () {
                l.current = !0;
              });
              var u = t.useCallback(
                function (e, t) {
                  if ((void 0 === t && (t = {}), l.current))
                    if ("number" !== typeof e) {
                      var a = Y(e, JSON.parse(i), o, "path" === t.relative);
                      "/" !== n &&
                        (a.pathname =
                          "/" === a.pathname ? n : X([n, a.pathname])),
                        (t.replace ? r.replace : r.push)(a, t.state, t);
                    } else r.go(e);
                },
                [n, r, i, o]
              );
              return u;
            })();
      }
      function ge(e, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = t.useContext(de).matches,
          o = me().pathname,
          i = JSON.stringify(
            J(a).map(function (e) {
              return e.pathnameBase;
            })
          );
        return t.useMemo(
          function () {
            return Y(e, JSON.parse(i), o, "path" === r);
          },
          [e, i, o, r]
        );
      }
      function be(n, r, a) {
        he() || O(!1);
        var o,
          i = t.useContext(ce).navigator,
          l = t.useContext(de).matches,
          u = l[l.length - 1],
          s = u ? u.params : {},
          c = (u && u.pathname, u ? u.pathnameBase : "/"),
          f = (u && u.route, me());
        if (r) {
          var d,
            p = "string" === typeof r ? _(r) : r;
          "/" === c ||
            (null == (d = p.pathname) ? void 0 : d.startsWith(c)) ||
            O(!1),
            (o = p);
        } else o = f;
        var h = o.pathname || "/",
          m = A(n, { pathname: "/" === c ? h : h.slice(c.length) || "/" });
        var v = Ne(
          m &&
            m.map(function (e) {
              return Object.assign({}, e, {
                params: Object.assign({}, s, e.params),
                pathname: X([
                  c,
                  i.encodeLocation
                    ? i.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? c
                    : X([
                        c,
                        i.encodeLocation
                          ? i.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              });
            }),
          l,
          a
        );
        return r && v
          ? t.createElement(
              fe.Provider,
              {
                value: {
                  location: ie(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    o
                  ),
                  navigationType: e.Pop,
                },
              },
              v
            )
          : v;
      }
      function we() {
        var e = (function () {
            var e,
              n = t.useContext(pe),
              r = je(ke.UseRouteError),
              a = Pe(ke.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = re(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: o }, r) : null,
          null
        );
      }
      var xe,
        ke,
        Se = t.createElement(we, null),
        Ee = (function (e) {
          h(r, e);
          var n = g(r);
          function r(e) {
            var t;
            return (
              u(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error,
              }),
              t
            );
          }
          return (
            d(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(
                          de.Provider,
                          { value: this.props.routeContext },
                          t.createElement(pe.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location ||
                      ("idle" !== t.revalidation && "idle" === e.revalidation)
                      ? {
                          error: e.error,
                          location: e.location,
                          revalidation: e.revalidation,
                        }
                      : {
                          error: e.error || t.error,
                          location: t.location,
                          revalidation: e.revalidation || t.revalidation,
                        };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function Ce(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          o = t.useContext(le);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(de.Provider, { value: n }, a)
        );
      }
      function Ne(e, n, r) {
        var a;
        if ((void 0 === n && (n = []), void 0 === r && (r = null), null == e)) {
          var o;
          if (null == (o = r) || !o.errors) return null;
          e = r.matches;
        }
        var i = e,
          l = null == (a = r) ? void 0 : a.errors;
        if (null != l) {
          var u = i.findIndex(function (e) {
            return e.route.id && (null == l ? void 0 : l[e.route.id]);
          });
          u >= 0 || O(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
        }
        return i.reduceRight(function (e, a, o) {
          var u = a.route.id ? (null == l ? void 0 : l[a.route.id]) : null,
            s = null;
          r && (s = a.route.errorElement || Se);
          var c = n.concat(i.slice(0, o + 1)),
            f = function () {
              var n;
              return (
                (n = u
                  ? s
                  : a.route.Component
                  ? t.createElement(a.route.Component, null)
                  : a.route.element
                  ? a.route.element
                  : e),
                t.createElement(Ce, {
                  match: a,
                  routeContext: {
                    outlet: e,
                    matches: c,
                    isDataRoute: null != r,
                  },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? t.createElement(Ee, {
                location: r.location,
                revalidation: r.revalidation,
                component: s,
                error: u,
                children: f(),
                routeContext: { outlet: null, matches: c, isDataRoute: !0 },
              })
            : f();
        }, null);
      }
      function Oe(e) {
        var n = t.useContext(le);
        return n || O(!1), n;
      }
      function je(e) {
        var n = t.useContext(ue);
        return n || O(!1), n;
      }
      function Pe(e) {
        var n = (function (e) {
            var n = t.useContext(de);
            return n || O(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || O(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = "useBlocker"),
          (e.UseRevalidator = "useRevalidator"),
          (e.UseNavigateStable = "useNavigate");
      })(xe || (xe = {})),
        (function (e) {
          (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId");
        })(ke || (ke = {}));
      var Re;
      function Te(e) {
        O(!1);
      }
      function _e(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          o = n.children,
          i = void 0 === o ? null : o,
          l = n.location,
          u = n.navigationType,
          s = void 0 === u ? e.Pop : u,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        he() && O(!1);
        var p = a.replace(/^\/*/, "/"),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof l && (l = _(l));
        var m = l,
          v = m.pathname,
          y = void 0 === v ? "/" : v,
          g = m.search,
          b = void 0 === g ? "" : g,
          w = m.hash,
          x = void 0 === w ? "" : w,
          k = m.state,
          S = void 0 === k ? null : k,
          E = m.key,
          C = void 0 === E ? "default" : E,
          N = t.useMemo(
            function () {
              var e = Q(y, p);
              return null == e
                ? null
                : {
                    location: {
                      pathname: e,
                      search: b,
                      hash: x,
                      state: S,
                      key: C,
                    },
                    navigationType: s,
                  };
            },
            [p, y, b, x, S, C, s]
          );
        return null == N
          ? null
          : t.createElement(
              ce.Provider,
              { value: h },
              t.createElement(fe.Provider, { children: i, value: N })
            );
      }
      function Le(e) {
        var t = e.children,
          n = e.location;
        return be(De(t), n);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Re || (Re = {}));
      var Ae = new Promise(function () {});
      t.Component;
      function De(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e)) {
              var o = [].concat(l(n), [a]);
              if (e.type !== t.Fragment) {
                e.type !== Te && O(!1),
                  e.props.index && e.props.children && O(!1);
                var i = {
                  id: e.props.id || o.join("-"),
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  Component: e.props.Component,
                  index: e.props.index,
                  path: e.props.path,
                  loader: e.props.loader,
                  action: e.props.action,
                  errorElement: e.props.errorElement,
                  ErrorBoundary: e.props.ErrorBoundary,
                  hasErrorBoundary:
                    null != e.props.ErrorBoundary ||
                    null != e.props.errorElement,
                  shouldRevalidate: e.props.shouldRevalidate,
                  handle: e.props.handle,
                  lazy: e.props.lazy,
                };
                e.props.children && (i.children = De(e.props.children, o)),
                  r.push(i);
              } else r.push.apply(r, De(e.props.children, o));
            }
          }),
          r
        );
      }
      var ze = n(143),
        Fe = n.n(ze),
        Ie = function (e) {
          var t = e.condition,
            n = e.wrapper,
            r = e.children;
          return t ? n(r) : r;
        };
      function Be() {
        return (
          (Be = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Be.apply(this, arguments)
        );
      }
      function Me(e, t) {
        return (
          (Me = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Me(e, t)
        );
      }
      var Ue,
        We = "top",
        He = "bottom";
      !(function (e) {
        (e.STRICT = "strict"), (e.LAX = "lax"), (e.NONE = "none");
      })(Ue || (Ue = {}));
      var Ve = "hidden",
        $e = "byCookieValue",
        qe = "CookieConsent",
        Ke = ["children"],
        Qe = {
          disableStyles: !1,
          hideOnAccept: !0,
          hideOnDecline: !0,
          location: He,
          visible: $e,
          onAccept: function (e) {},
          onDecline: function () {},
          cookieName: qe,
          cookieValue: "true",
          declineCookieValue: "false",
          setDeclineCookie: !0,
          buttonText: "I understand",
          declineButtonText: "I decline",
          debug: !1,
          expires: 365,
          containerClasses: "CookieConsent",
          contentClasses: "",
          buttonClasses: "",
          buttonWrapperClasses: "",
          declineButtonClasses: "",
          buttonId: "rcc-confirm-button",
          declineButtonId: "rcc-decline-button",
          extraCookieOptions: {},
          disableButtonStyles: !1,
          enableDeclineButton: !1,
          flipButtons: !1,
          sameSite: Ue.LAX,
          ButtonComponent: function (e) {
            var n = e.children,
              r = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  a = {},
                  o = Object.keys(e);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a;
              })(e, Ke);
            return t.createElement("button", Object.assign({}, r), n);
          },
          overlay: !1,
          overlayClasses: "",
          onOverlayClick: function () {},
          acceptOnOverlayClick: !1,
          ariaAcceptLabel: "Accept cookies",
          ariaDeclineLabel: "Decline cookies",
          acceptOnScroll: !1,
          acceptOnScrollPercentage: 25,
          customContentAttributes: {},
          customContainerAttributes: {},
          customButtonProps: {},
          customDeclineButtonProps: {},
          customButtonWrapperAttributes: {},
          style: {},
          buttonStyle: {},
          declineButtonStyle: {},
          contentStyle: {},
          overlayStyle: {},
        },
        Ge = {
          visible: !1,
          style: {
            alignItems: "baseline",
            background: "#353535",
            color: "white",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            left: "0",
            position: "fixed",
            width: "100%",
            zIndex: "999",
          },
          buttonStyle: {
            background: "#ffd42d",
            border: "0",
            borderRadius: "0px",
            boxShadow: "none",
            color: "black",
            cursor: "pointer",
            flex: "0 0 auto",
            padding: "5px 10px",
            margin: "15px",
          },
          declineButtonStyle: {
            background: "#c12a2a",
            border: "0",
            borderRadius: "0px",
            boxShadow: "none",
            color: "#e5e5e5",
            cursor: "pointer",
            flex: "0 0 auto",
            padding: "5px 10px",
            margin: "15px",
          },
          contentStyle: { flex: "1 0 300px", margin: "15px" },
          overlayStyle: {
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: "999",
            backgroundColor: "rgba(0,0,0,0.3)",
          },
        },
        Je = function (e) {
          return e + "-legacy";
        },
        Ye = (function (e) {
          var n, r;
          function a() {
            var t;
            return (
              ((t = e.apply(this, arguments) || this).state = Ge),
              (t.handleScroll = function () {
                var e = t.props.acceptOnScrollPercentage,
                  n = document.documentElement,
                  r = document.body,
                  a = "scrollTop",
                  o = "scrollHeight";
                ((n[a] || r[a]) / ((n[o] || r[o]) - n.clientHeight)) * 100 >
                  e && t.accept(!0);
              }),
              (t.removeScrollListener = function () {
                t.props.acceptOnScroll &&
                  window.removeEventListener("scroll", t.handleScroll);
              }),
              t
            );
          }
          (r = e),
            ((n = a).prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            Me(n, r);
          var o = a.prototype;
          return (
            (o.componentDidMount = function () {
              var e = this.props.debug;
              (void 0 === this.getCookieValue() || e) &&
                (this.setState({ visible: !0 }),
                this.props.acceptOnScroll &&
                  window.addEventListener("scroll", this.handleScroll, {
                    passive: !0,
                  }));
            }),
            (o.componentWillUnmount = function () {
              this.removeScrollListener();
            }),
            (o.accept = function (e) {
              var t;
              void 0 === e && (e = !1);
              var n = this.props,
                r = n.cookieName,
                a = n.cookieValue,
                o = n.hideOnAccept,
                i = n.onAccept;
              this.setCookie(r, a),
                i(null != (t = e) && t),
                o &&
                  (this.setState({ visible: !1 }), this.removeScrollListener());
            }),
            (o.overlayClick = function () {
              var e = this.props,
                t = e.acceptOnOverlayClick,
                n = e.onOverlayClick;
              t && this.accept(), n();
            }),
            (o.decline = function () {
              var e = this.props,
                t = e.cookieName,
                n = e.declineCookieValue,
                r = e.hideOnDecline,
                a = e.onDecline;
              e.setDeclineCookie && this.setCookie(t, n),
                a(),
                r && this.setState({ visible: !1 });
            }),
            (o.setCookie = function (e, t) {
              var n = this.props,
                r = n.extraCookieOptions,
                a = n.expires,
                o = n.sameSite,
                i = this.props.cookieSecurity;
              void 0 === i &&
                (i = !window.location || "https:" === window.location.protocol);
              var l = Be({ expires: a }, r, { sameSite: o, secure: i });
              o === Ue.NONE && Fe().set(Je(e), t, l), Fe().set(e, t, l);
            }),
            (o.getCookieValue = function () {
              return (function (e) {
                void 0 === e && (e = qe);
                var t = Fe().get(e);
                return void 0 === t ? Fe().get(Je(e)) : t;
              })(this.props.cookieName);
            }),
            (o.render = function () {
              var e = this;
              switch (this.props.visible) {
                case Ve:
                  return null;
                case $e:
                  if (!this.state.visible) return null;
              }
              var n = this.props,
                r = n.location,
                a = n.style,
                o = n.buttonStyle,
                i = n.declineButtonStyle,
                l = n.contentStyle,
                u = n.disableStyles,
                s = n.buttonText,
                c = n.declineButtonText,
                f = n.containerClasses,
                d = n.contentClasses,
                p = n.buttonClasses,
                h = n.buttonWrapperClasses,
                m = n.declineButtonClasses,
                v = n.buttonId,
                y = n.declineButtonId,
                g = n.disableButtonStyles,
                b = n.enableDeclineButton,
                w = n.flipButtons,
                x = n.ButtonComponent,
                k = n.overlay,
                S = n.overlayClasses,
                E = n.overlayStyle,
                C = n.ariaAcceptLabel,
                N = n.ariaDeclineLabel,
                O = n.customContainerAttributes,
                j = n.customContentAttributes,
                P = n.customButtonProps,
                R = n.customDeclineButtonProps,
                T = n.customButtonWrapperAttributes,
                _ = {},
                L = {},
                A = {},
                D = {},
                z = {};
              switch (
                (u
                  ? ((_ = Object.assign({}, a)),
                    (L = Object.assign({}, o)),
                    (A = Object.assign({}, i)),
                    (D = Object.assign({}, l)),
                    (z = Object.assign({}, E)))
                  : ((_ = Object.assign({}, Be({}, this.state.style, a))),
                    (D = Object.assign({}, Be({}, this.state.contentStyle, l))),
                    (z = Object.assign({}, Be({}, this.state.overlayStyle, E))),
                    g
                      ? ((L = Object.assign({}, o)), (A = Object.assign({}, i)))
                      : ((L = Object.assign(
                          {},
                          Be({}, this.state.buttonStyle, o)
                        )),
                        (A = Object.assign(
                          {},
                          Be({}, this.state.declineButtonStyle, i)
                        )))),
                r)
              ) {
                case We:
                  _.top = "0";
                  break;
                case He:
                  _.bottom = "0";
              }
              var F = [];
              return (
                b &&
                  F.push(
                    t.createElement(
                      x,
                      Object.assign(
                        {
                          key: "declineButton",
                          style: A,
                          className: m,
                          id: y,
                          "aria-label": N,
                          onClick: function () {
                            e.decline();
                          },
                        },
                        R
                      ),
                      c
                    )
                  ),
                F.push(
                  t.createElement(
                    x,
                    Object.assign(
                      {
                        key: "acceptButton",
                        style: L,
                        className: p,
                        id: v,
                        "aria-label": C,
                        onClick: function () {
                          e.accept();
                        },
                      },
                      P
                    ),
                    s
                  )
                ),
                w && F.reverse(),
                t.createElement(
                  Ie,
                  {
                    condition: k,
                    wrapper: function (n) {
                      return t.createElement(
                        "div",
                        {
                          style: z,
                          className: S,
                          onClick: function () {
                            e.overlayClick();
                          },
                        },
                        n
                      );
                    },
                  },
                  t.createElement(
                    "div",
                    Object.assign({ className: "" + f, style: _ }, O),
                    t.createElement(
                      "div",
                      Object.assign({ style: D, className: d }, j),
                      this.props.children
                    ),
                    t.createElement(
                      "div",
                      Object.assign({ className: "" + h }, T),
                      F.map(function (e) {
                        return e;
                      })
                    )
                  )
                )
              );
            }),
            a
          );
        })(t.Component);
      Ye.defaultProps = Qe;
      var Xe = Ye;
      function Ze() {
        Ze = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          l = a.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (P) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            l = new N(a || []);
          return r(i, "_invoke", { value: k(e, n, l) }), i;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (P) {
            return { type: "throw", arg: P };
          }
        }
        e.wrap = c;
        var d = {};
        function p() {}
        function h() {}
        function m() {}
        var v = {};
        u(v, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(O([])));
        g && g !== t && n.call(g, o) && (v = g);
        var b = (m.prototype = p.prototype = Object.create(v));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function a(r, o, i, l) {
            var u = f(e[r], e, o);
            if ("throw" !== u.type) {
              var c = u.arg,
                d = c.value;
              return d && "object" == s(d) && n.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      a("next", e, i, l);
                    },
                    function (e) {
                      a("throw", e, i, l);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (c.value = e), i(c);
                    },
                    function (e) {
                      return a("throw", e, i, l);
                    }
                  );
            }
            l(u.arg);
          }
          var o;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  a(e, n, t, r);
                });
              }
              return (o = o ? o.then(r, r) : r());
            },
          });
        }
        function k(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return j();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var l = S(i, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = f(e, t, n);
              if ("normal" === u.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), u.arg === d)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function S(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                S(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), d
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function N(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = m),
          r(b, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(m, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), u(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(x.prototype),
          u(x.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new x(c(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          w(b),
          u(b, l, "Generator"),
          u(b, o, function () {
            return this;
          }),
          u(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(C),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var l = n.call(o, "catchLoc"),
                    u = n.call(o, "finallyLoc");
                  if (l && u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), C(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    C(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function et(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            u = l.value;
        } catch (s) {
          return void n(s);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function tt(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              et(o, r, a, i, l, "next", e);
            }
            function l(e) {
              et(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function nt(e, t, n) {
        return (
          (t = c(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function rt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function at(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? rt(Object(n), !0).forEach(function (t) {
                nt(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : rt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function ot(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function it(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = ot(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var lt = n(694),
        ut = n.n(lt),
        st = n(184),
        ct = ["xxl", "xl", "lg", "md", "sm", "xs"],
        ft = t.createContext({
          prefixes: {},
          breakpoints: ct,
          minBreakpoint: "xs",
        });
      ft.Consumer, ft.Provider;
      function dt(e, n) {
        var r = (0, t.useContext)(ft).prefixes;
        return e || r[n] || n;
      }
      var pt = ["bsPrefix", "fluid", "as", "className"],
        ht = t.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.fluid,
            a = void 0 !== r && r,
            o = e.as,
            i = void 0 === o ? "div" : o,
            l = e.className,
            u = it(e, pt),
            s = dt(n, "container"),
            c = "string" === typeof a ? "-".concat(a) : "-fluid";
          return (0,
          st.jsx)(i, at(at({ ref: t }, u), {}, { className: ut()(l, a ? "".concat(s).concat(c) : s) }));
        });
      ht.displayName = "Container";
      var mt = ht,
        vt = /-(.)/g;
      var yt = ["className", "bsPrefix", "as"],
        gt = function (e) {
          return (
            e[0].toUpperCase() +
            ((t = e),
            t.replace(vt, function (e, t) {
              return t.toUpperCase();
            })).slice(1)
          );
          var t;
        };
      function bt(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = n.displayName,
          a = void 0 === r ? gt(e) : r,
          o = n.Component,
          i = n.defaultProps,
          l = t.forwardRef(function (t, n) {
            var r = t.className,
              a = t.bsPrefix,
              l = t.as,
              u = void 0 === l ? o || "div" : l,
              s = it(t, yt),
              c = at(at({}, i), s),
              f = dt(a, e);
            return (0, st.jsx)(u, at({ ref: n, className: ut()(r, f) }, c));
          });
        return (l.displayName = a), l;
      }
      var wt = function (e) {
          return t.forwardRef(function (t, n) {
            return (0,
            st.jsx)("div", at(at({}, t), {}, { ref: n, className: ut()(t.className, e) }));
          });
        },
        xt = ["bsPrefix", "className", "variant", "as"],
        kt = t.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.variant,
            o = e.as,
            i = void 0 === o ? "img" : o,
            l = it(e, xt),
            u = dt(n, "card-img");
          return (0,
          st.jsx)(i, at({ ref: t, className: ut()(a ? "".concat(u, "-").concat(a) : u, r) }, l));
        });
      kt.displayName = "CardImg";
      var St = kt,
        Et = t.createContext(null);
      Et.displayName = "CardHeaderContext";
      var Ct = Et,
        Nt = ["bsPrefix", "className", "as"],
        Ot = t.forwardRef(function (e, n) {
          var r = e.bsPrefix,
            a = e.className,
            o = e.as,
            i = void 0 === o ? "div" : o,
            l = it(e, Nt),
            u = dt(r, "card-header"),
            s = (0, t.useMemo)(
              function () {
                return { cardHeaderBsPrefix: u };
              },
              [u]
            );
          return (0,
          st.jsx)(Ct.Provider, { value: s, children: (0, st.jsx)(i, at(at({ ref: n }, l), {}, { className: ut()(a, u) })) });
        });
      Ot.displayName = "CardHeader";
      var jt = Ot,
        Pt = [
          "bsPrefix",
          "className",
          "bg",
          "text",
          "border",
          "body",
          "children",
          "as",
        ],
        Rt = wt("h5"),
        Tt = wt("h6"),
        _t = bt("card-body"),
        Lt = bt("card-title", { Component: Rt }),
        At = bt("card-subtitle", { Component: Tt }),
        Dt = bt("card-link", { Component: "a" }),
        zt = bt("card-text", { Component: "p" }),
        Ft = bt("card-footer"),
        It = bt("card-img-overlay"),
        Bt = t.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.bg,
            o = e.text,
            i = e.border,
            l = e.body,
            u = void 0 !== l && l,
            s = e.children,
            c = e.as,
            f = void 0 === c ? "div" : c,
            d = it(e, Pt),
            p = dt(n, "card");
          return (0,
          st.jsx)(f, at(at({ ref: t }, d), {}, { className: ut()(r, p, a && "bg-".concat(a), o && "text-".concat(o), i && "border-".concat(i)), children: u ? (0, st.jsx)(_t, { children: s }) : s }));
        });
      Bt.displayName = "Card";
      var Mt = Object.assign(Bt, {
          Img: St,
          Title: Lt,
          Subtitle: At,
          Body: _t,
          Link: Dt,
          Text: zt,
          Header: jt,
          Footer: Ft,
          ImgOverlay: It,
        }),
        Ut = n(7),
        Wt = n.n(Ut),
        Ht = ["as", "className", "type", "tooltip"],
        Vt = { type: Wt().string, tooltip: Wt().bool, as: Wt().elementType },
        $t = t.forwardRef(function (e, t) {
          var n = e.as,
            r = void 0 === n ? "div" : n,
            a = e.className,
            o = e.type,
            i = void 0 === o ? "valid" : o,
            l = e.tooltip,
            u = void 0 !== l && l,
            s = it(e, Ht);
          return (0,
          st.jsx)(r, at(at({}, s), {}, { ref: t, className: ut()(a, "".concat(i, "-").concat(u ? "tooltip" : "feedback")) }));
        });
      ($t.displayName = "Feedback"), ($t.propTypes = Vt);
      var qt = $t,
        Kt = t.createContext({}),
        Qt = [
          "id",
          "bsPrefix",
          "className",
          "type",
          "isValid",
          "isInvalid",
          "as",
        ],
        Gt = t.forwardRef(function (e, n) {
          var r = e.id,
            a = e.bsPrefix,
            o = e.className,
            i = e.type,
            l = void 0 === i ? "checkbox" : i,
            u = e.isValid,
            s = void 0 !== u && u,
            c = e.isInvalid,
            f = void 0 !== c && c,
            d = e.as,
            p = void 0 === d ? "input" : d,
            h = it(e, Qt),
            m = (0, t.useContext)(Kt).controlId;
          return (
            (a = dt(a, "form-check-input")),
            (0, st.jsx)(
              p,
              at(
                at({}, h),
                {},
                {
                  ref: n,
                  type: l,
                  id: r || m,
                  className: ut()(o, a, s && "is-valid", f && "is-invalid"),
                }
              )
            )
          );
        });
      Gt.displayName = "FormCheckInput";
      var Jt = Gt,
        Yt = ["bsPrefix", "className", "htmlFor"],
        Xt = t.forwardRef(function (e, n) {
          var r = e.bsPrefix,
            a = e.className,
            o = e.htmlFor,
            i = it(e, Yt),
            l = (0, t.useContext)(Kt).controlId;
          return (
            (r = dt(r, "form-check-label")),
            (0, st.jsx)(
              "label",
              at(
                at({}, i),
                {},
                { ref: n, htmlFor: o || l, className: ut()(a, r) }
              )
            )
          );
        });
      Xt.displayName = "FormCheckLabel";
      var Zt = Xt;
      var en = [
          "id",
          "bsPrefix",
          "bsSwitchPrefix",
          "inline",
          "reverse",
          "disabled",
          "isValid",
          "isInvalid",
          "feedbackTooltip",
          "feedback",
          "feedbackType",
          "className",
          "style",
          "title",
          "type",
          "label",
          "children",
          "as",
        ],
        tn = t.forwardRef(function (e, n) {
          var r = e.id,
            a = e.bsPrefix,
            o = e.bsSwitchPrefix,
            i = e.inline,
            l = void 0 !== i && i,
            u = e.reverse,
            s = void 0 !== u && u,
            c = e.disabled,
            f = void 0 !== c && c,
            d = e.isValid,
            p = void 0 !== d && d,
            h = e.isInvalid,
            m = void 0 !== h && h,
            v = e.feedbackTooltip,
            y = void 0 !== v && v,
            g = e.feedback,
            b = e.feedbackType,
            w = e.className,
            x = e.style,
            k = e.title,
            S = void 0 === k ? "" : k,
            E = e.type,
            C = void 0 === E ? "checkbox" : E,
            N = e.label,
            O = e.children,
            j = e.as,
            P = void 0 === j ? "input" : j,
            R = it(e, en);
          (a = dt(a, "form-check")), (o = dt(o, "form-switch"));
          var T = (0, t.useContext)(Kt).controlId,
            _ = (0, t.useMemo)(
              function () {
                return { controlId: r || T };
              },
              [T, r]
            ),
            L =
              (!O && null != N && !1 !== N) ||
              (function (e, n) {
                return t.Children.toArray(e).some(function (e) {
                  return t.isValidElement(e) && e.type === n;
                });
              })(O, Zt),
            A = (0, st.jsx)(
              Jt,
              at(
                at({}, R),
                {},
                {
                  type: "switch" === C ? "checkbox" : C,
                  ref: n,
                  isValid: p,
                  isInvalid: m,
                  disabled: f,
                  as: P,
                }
              )
            );
          return (0,
          st.jsx)(Kt.Provider, { value: _, children: (0, st.jsx)("div", { style: x, className: ut()(w, L && a, l && "".concat(a, "-inline"), s && "".concat(a, "-reverse"), "switch" === C && o), children: O || (0, st.jsxs)(st.Fragment, { children: [A, L && (0, st.jsx)(Zt, { title: S, children: N }), g && (0, st.jsx)(qt, { type: b, tooltip: y, children: g })] }) }) });
        });
      tn.displayName = "FormCheck";
      var nn = Object.assign(tn, { Input: Jt, Label: Zt }),
        rn =
          (n(391),
          [
            "bsPrefix",
            "type",
            "size",
            "htmlSize",
            "id",
            "className",
            "isValid",
            "isInvalid",
            "plaintext",
            "readOnly",
            "as",
          ]),
        an = t.forwardRef(function (e, n) {
          var r,
            a,
            o = e.bsPrefix,
            i = e.type,
            l = e.size,
            u = e.htmlSize,
            s = e.id,
            c = e.className,
            f = e.isValid,
            d = void 0 !== f && f,
            p = e.isInvalid,
            h = void 0 !== p && p,
            m = e.plaintext,
            v = e.readOnly,
            y = e.as,
            g = void 0 === y ? "input" : y,
            b = it(e, rn),
            w = (0, t.useContext)(Kt).controlId;
          ((o = dt(o, "form-control")), m)
            ? (r = nt({}, "".concat(o, "-plaintext"), !0))
            : (nt((a = {}), o, !0),
              nt(a, "".concat(o, "-").concat(l), l),
              (r = a));
          return (0,
          st.jsx)(g, at(at({}, b), {}, { type: i, size: u, ref: n, readOnly: v, id: s || w, className: ut()(c, r, d && "is-valid", h && "is-invalid", "color" === i && "".concat(o, "-color")) }));
        });
      an.displayName = "FormControl";
      var on = Object.assign(an, { Feedback: qt }),
        ln = bt("form-floating"),
        un = ["controlId", "as"],
        sn = t.forwardRef(function (e, n) {
          var r = e.controlId,
            a = e.as,
            o = void 0 === a ? "div" : a,
            i = it(e, un),
            l = (0, t.useMemo)(
              function () {
                return { controlId: r };
              },
              [r]
            );
          return (0,
          st.jsx)(Kt.Provider, { value: l, children: (0, st.jsx)(o, at(at({}, i), {}, { ref: n })) });
        });
      sn.displayName = "FormGroup";
      var cn = sn,
        fn = ["as", "bsPrefix", "className"],
        dn = ["className"];
      function pn(e) {
        var n = e.as,
          r = e.bsPrefix,
          a = e.className,
          o = it(e, fn);
        r = dt(r, "col");
        var i = (0, t.useContext)(ft).breakpoints,
          l = (0, t.useContext)(ft).minBreakpoint,
          u = [],
          s = [];
        return (
          i.forEach(function (e) {
            var t,
              n,
              a,
              i = o[e];
            delete o[e],
              "object" === typeof i && null != i
                ? ((t = i.span), (n = i.offset), (a = i.order))
                : (t = i);
            var c = e !== l ? "-".concat(e) : "";
            t &&
              u.push(
                !0 === t
                  ? "".concat(r).concat(c)
                  : "".concat(r).concat(c, "-").concat(t)
              ),
              null != a && s.push("order".concat(c, "-").concat(a)),
              null != n && s.push("offset".concat(c, "-").concat(n));
          }),
          [
            at(
              at({}, o),
              {},
              { className: ut().apply(void 0, [a].concat(u, s)) }
            ),
            { as: n, bsPrefix: r, spans: u },
          ]
        );
      }
      var hn = t.forwardRef(function (e, t) {
        var n = S(pn(e), 2),
          r = n[0],
          a = r.className,
          o = it(r, dn),
          i = n[1],
          l = i.as,
          u = void 0 === l ? "div" : l,
          s = i.bsPrefix,
          c = i.spans;
        return (0,
        st.jsx)(u, at(at({}, o), {}, { ref: t, className: ut()(a, !c.length && s) }));
      });
      hn.displayName = "Col";
      var mn = hn,
        vn = [
          "as",
          "bsPrefix",
          "column",
          "visuallyHidden",
          "className",
          "htmlFor",
        ],
        yn = t.forwardRef(function (e, n) {
          var r = e.as,
            a = void 0 === r ? "label" : r,
            o = e.bsPrefix,
            i = e.column,
            l = void 0 !== i && i,
            u = e.visuallyHidden,
            s = void 0 !== u && u,
            c = e.className,
            f = e.htmlFor,
            d = it(e, vn),
            p = (0, t.useContext)(Kt).controlId;
          o = dt(o, "form-label");
          var h = "col-form-label";
          "string" === typeof l &&
            (h = "".concat(h, " ").concat(h, "-").concat(l));
          var m = ut()(c, o, s && "visually-hidden", l && h);
          return (
            (f = f || p),
            l
              ? (0, st.jsx)(
                  mn,
                  at({ ref: n, as: "label", className: m, htmlFor: f }, d)
                )
              : (0, st.jsx)(a, at({ ref: n, className: m, htmlFor: f }, d))
          );
        });
      yn.displayName = "FormLabel";
      var gn = yn,
        bn = ["bsPrefix", "className", "id"],
        wn = t.forwardRef(function (e, n) {
          var r = e.bsPrefix,
            a = e.className,
            o = e.id,
            i = it(e, bn),
            l = (0, t.useContext)(Kt).controlId;
          return (
            (r = dt(r, "form-range")),
            (0, st.jsx)(
              "input",
              at(
                at({}, i),
                {},
                { type: "range", ref: n, className: ut()(a, r), id: o || l }
              )
            )
          );
        });
      wn.displayName = "FormRange";
      var xn = wn,
        kn = [
          "bsPrefix",
          "size",
          "htmlSize",
          "className",
          "isValid",
          "isInvalid",
          "id",
        ],
        Sn = t.forwardRef(function (e, n) {
          var r = e.bsPrefix,
            a = e.size,
            o = e.htmlSize,
            i = e.className,
            l = e.isValid,
            u = void 0 !== l && l,
            s = e.isInvalid,
            c = void 0 !== s && s,
            f = e.id,
            d = it(e, kn),
            p = (0, t.useContext)(Kt).controlId;
          return (
            (r = dt(r, "form-select")),
            (0, st.jsx)(
              "select",
              at(
                at({}, d),
                {},
                {
                  size: o,
                  ref: n,
                  className: ut()(
                    i,
                    r,
                    a && "".concat(r, "-").concat(a),
                    u && "is-valid",
                    c && "is-invalid"
                  ),
                  id: f || p,
                }
              )
            )
          );
        });
      Sn.displayName = "FormSelect";
      var En = Sn,
        Cn = ["bsPrefix", "className", "as", "muted"],
        Nn = t.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.as,
            o = void 0 === a ? "small" : a,
            i = e.muted,
            l = it(e, Cn);
          return (
            (n = dt(n, "form-text")),
            (0, st.jsx)(
              o,
              at(
                at({}, l),
                {},
                { ref: t, className: ut()(r, n, i && "text-muted") }
              )
            )
          );
        });
      Nn.displayName = "FormText";
      var On = Nn,
        jn = t.forwardRef(function (e, t) {
          return (0, st.jsx)(nn, at(at({}, e), {}, { ref: t, type: "switch" }));
        });
      jn.displayName = "Switch";
      var Pn = Object.assign(jn, { Input: nn.Input, Label: nn.Label }),
        Rn = ["bsPrefix", "className", "children", "controlId", "label"],
        Tn = t.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.children,
            o = e.controlId,
            i = e.label,
            l = it(e, Rn);
          return (
            (n = dt(n, "form-floating")),
            (0, st.jsxs)(
              cn,
              at(
                at({ ref: t, className: ut()(r, n), controlId: o }, l),
                {},
                {
                  children: [
                    a,
                    (0, st.jsx)("label", { htmlFor: o, children: i }),
                  ],
                }
              )
            )
          );
        });
      Tn.displayName = "FloatingLabel";
      var _n = Tn,
        Ln = ["className", "validated", "as"],
        An = { _ref: Wt().any, validated: Wt().bool, as: Wt().elementType },
        Dn = t.forwardRef(function (e, t) {
          var n = e.className,
            r = e.validated,
            a = e.as,
            o = void 0 === a ? "form" : a,
            i = it(e, Ln);
          return (0,
          st.jsx)(o, at(at({}, i), {}, { ref: t, className: ut()(n, r && "was-validated") }));
        });
      (Dn.displayName = "Form"), (Dn.propTypes = An);
      var zn = Object.assign(Dn, {
          Group: cn,
          Control: on,
          Floating: ln,
          Check: nn,
          Switch: Pn,
          Label: gn,
          Text: On,
          Range: xn,
          Select: En,
          FloatingLabel: _n,
        }),
        Fn = ["as", "disabled"];
      function In(e) {
        var t = e.tagName,
          n = e.disabled,
          r = e.href,
          a = e.target,
          o = e.rel,
          i = e.role,
          l = e.onClick,
          u = e.tabIndex,
          s = void 0 === u ? 0 : u,
          c = e.type;
        t || (t = null != r || null != a || null != o ? "a" : "button");
        var f = { tagName: t };
        if ("button" === t) return [{ type: c || "button", disabled: n }, f];
        var d = function (e) {
          (n ||
            ("a" === t &&
              (function (e) {
                return !e || "#" === e.trim();
              })(r))) &&
            e.preventDefault(),
            n ? e.stopPropagation() : null == l || l(e);
        };
        return (
          "a" === t && (r || (r = "#"), n && (r = void 0)),
          [
            {
              role: null != i ? i : "button",
              disabled: void 0,
              tabIndex: n ? void 0 : s,
              href: r,
              target: "a" === t ? a : void 0,
              "aria-disabled": n || void 0,
              rel: "a" === t ? o : void 0,
              onClick: d,
              onKeyDown: function (e) {
                " " === e.key && (e.preventDefault(), d(e));
              },
            },
            f,
          ]
        );
      }
      var Bn = t.forwardRef(function (e, t) {
        var n = e.as,
          r = e.disabled,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, Fn),
          o = S(In(Object.assign({ tagName: n, disabled: r }, a)), 2),
          i = o[0],
          l = o[1].tagName;
        return (0, st.jsx)(l, Object.assign({}, a, i, { ref: t }));
      });
      Bn.displayName = "Button";
      var Mn = Bn,
        Un = [
          "as",
          "bsPrefix",
          "variant",
          "size",
          "active",
          "disabled",
          "className",
        ],
        Wn = t.forwardRef(function (e, t) {
          var n = e.as,
            r = e.bsPrefix,
            a = e.variant,
            o = void 0 === a ? "primary" : a,
            i = e.size,
            l = e.active,
            u = void 0 !== l && l,
            s = e.disabled,
            c = void 0 !== s && s,
            f = e.className,
            d = it(e, Un),
            p = dt(r, "btn"),
            h = S(In(at({ tagName: n, disabled: c }, d)), 2),
            m = h[0],
            v = h[1].tagName;
          return (0,
          st.jsx)(v, at(at(at({}, m), d), {}, { ref: t, disabled: c, className: ut()(f, p, u && "active", o && "".concat(p, "-").concat(o), i && "".concat(p, "-").concat(i), d.href && c && "disabled") }));
        });
      Wn.displayName = "Button";
      var Hn = Wn;
      function Vn() {
        return (
          (Vn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Vn.apply(this, arguments)
        );
      }
      n(176);
      function $n(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function qn(e) {
        var t = (function (e, t) {
          if ("object" !== typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === typeof t ? t : String(t);
      }
      function Kn(e, n) {
        return Object.keys(n).reduce(function (r, a) {
          var o,
            i = r,
            l = i[$n(a)],
            u = i[a],
            s = ot(i, [$n(a), a].map(qn)),
            c = n[a],
            f = (function (e, n, r) {
              var a = (0, t.useRef)(void 0 !== e),
                o = (0, t.useState)(n),
                i = o[0],
                l = o[1],
                u = void 0 !== e,
                s = a.current;
              return (
                (a.current = u),
                !u && s && i !== n && l(n),
                [
                  u ? e : i,
                  (0, t.useCallback)(
                    function (e) {
                      for (
                        var t = arguments.length,
                          n = new Array(t > 1 ? t - 1 : 0),
                          a = 1;
                        a < t;
                        a++
                      )
                        n[a - 1] = arguments[a];
                      r && r.apply(void 0, [e].concat(n)), l(e);
                    },
                    [r]
                  ),
                ]
              );
            })(u, l, e[c]),
            d = f[0],
            p = f[1];
          return Vn({}, s, (((o = {})[a] = d), (o[c] = p), o));
        }, e);
      }
      function Qn() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state
        );
        null !== e && void 0 !== e && this.setState(e);
      }
      function Gn(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null !== n && void 0 !== n ? n : null;
          }.bind(this)
        );
      }
      function Jn(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      (Qn.__suppressDeprecationWarning = !0),
        (Gn.__suppressDeprecationWarning = !0),
        (Jn.__suppressDeprecationWarning = !0);
      var Yn = function (e) {
        var n = (0, t.useRef)(e);
        return (
          (0, t.useEffect)(
            function () {
              n.current = e;
            },
            [e]
          ),
          n
        );
      };
      function Xn(e) {
        var n = Yn(e);
        return (0, t.useCallback)(
          function () {
            return n.current && n.current.apply(n, arguments);
          },
          [n]
        );
      }
      var Zn =
          "undefined" !== typeof n.g &&
          n.g.navigator &&
          "ReactNative" === n.g.navigator.product,
        er =
          "undefined" !== typeof document || Zn
            ? t.useLayoutEffect
            : t.useEffect;
      new WeakMap();
      var tr = ["onKeyDown"];
      var nr = t.forwardRef(function (e, t) {
        var n,
          r = e.onKeyDown,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, tr),
          o = S(In(Object.assign({ tagName: "a" }, a)), 1)[0],
          i = Xn(function (e) {
            o.onKeyDown(e), null == r || r(e);
          });
        return (n = a.href) && "#" !== n.trim() && "button" !== a.role
          ? (0, st.jsx)("a", Object.assign({ ref: t }, a, { onKeyDown: r }))
          : (0, st.jsx)("a", Object.assign({ ref: t }, a, o, { onKeyDown: i }));
      });
      nr.displayName = "Anchor";
      var rr = nr;
      var ar = n(164),
        or = !1,
        ir = t.createContext(null),
        lr = "unmounted",
        ur = "exited",
        sr = "entering",
        cr = "entered",
        fr = "exiting",
        dr = (function (e) {
          var n, r;
          function a(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var a,
              o = n && !n.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? o
                  ? ((a = ur), (r.appearStatus = sr))
                  : (a = cr)
                : (a = t.unmountOnExit || t.mountOnEnter ? lr : ur),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            );
          }
          (r = e),
            ((n = a).prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            p(n, r),
            (a.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === lr ? { status: ur } : null;
            });
          var o = a.prototype;
          return (
            (o.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (o.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== sr && n !== cr && (t = sr)
                  : (n !== sr && n !== cr) || (t = fr);
              }
              this.updateStatus(!1, t);
            }),
            (o.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (o.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" !== typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (o.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === sr)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : ar.findDOMNode(this);
                    n &&
                      (function (e) {
                        e.scrollTop;
                      })(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === ur &&
                  this.setState({ status: lr });
            }),
            (o.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [r] : [ar.findDOMNode(this), r],
                o = a[0],
                i = a[1],
                l = this.getTimeouts(),
                u = r ? l.appear : l.enter;
              (!e && !n) || or
                ? this.safeSetState({ status: cr }, function () {
                    t.props.onEntered(o);
                  })
                : (this.props.onEnter(o, i),
                  this.safeSetState({ status: sr }, function () {
                    t.props.onEntering(o, i),
                      t.onTransitionEnd(u, function () {
                        t.safeSetState({ status: cr }, function () {
                          t.props.onEntered(o, i);
                        });
                      });
                  }));
            }),
            (o.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : ar.findDOMNode(this);
              t && !or
                ? (this.props.onExit(r),
                  this.safeSetState({ status: fr }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: ur }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: ur }, function () {
                    e.props.onExited(r);
                  });
            }),
            (o.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (o.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (o.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (o.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : ar.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var a = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    o = a[0],
                    i = a[1];
                  this.props.addEndListener(o, i);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (o.render = function () {
              var e = this.state.status;
              if (e === lr) return null;
              var n = this.props,
                r = n.children,
                a =
                  (n.in,
                  n.mountOnEnter,
                  n.unmountOnExit,
                  n.appear,
                  n.enter,
                  n.exit,
                  n.timeout,
                  n.addEndListener,
                  n.onEnter,
                  n.onEntering,
                  n.onEntered,
                  n.onExit,
                  n.onExiting,
                  n.onExited,
                  n.nodeRef,
                  ot(n, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return t.createElement(
                ir.Provider,
                { value: null },
                "function" === typeof r
                  ? r(e, a)
                  : t.cloneElement(t.Children.only(r), a)
              );
            }),
            a
          );
        })(t.Component);
      function pr() {}
      (dr.contextType = ir),
        (dr.propTypes = {}),
        (dr.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: pr,
          onEntering: pr,
          onEntered: pr,
          onExit: pr,
          onExiting: pr,
          onExited: pr,
        }),
        (dr.UNMOUNTED = lr),
        (dr.EXITED = ur),
        (dr.ENTERING = sr),
        (dr.ENTERED = cr),
        (dr.EXITING = fr);
      var hr = dr;
      function mr(e) {
        return (e && e.ownerDocument) || document;
      }
      function vr(e, t) {
        return (function (e) {
          var t = mr(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var yr = /([A-Z])/g;
      var gr = /^ms-/;
      function br(e) {
        return (function (e) {
          return e.replace(yr, "-$1").toLowerCase();
        })(e).replace(gr, "-ms-");
      }
      var wr =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      var xr = function (e, t) {
          var n = "",
            r = "";
          if ("string" === typeof t)
            return (
              e.style.getPropertyValue(br(t)) || vr(e).getPropertyValue(br(t))
            );
          Object.keys(t).forEach(function (a) {
            var o = t[a];
            o || 0 === o
              ? !(function (e) {
                  return !(!e || !wr.test(e));
                })(a)
                ? (n += br(a) + ": " + o + ";")
                : (r += a + "(" + o + ") ")
              : e.style.removeProperty(br(a));
          }),
            r && (n += "transform: " + r + ";"),
            (e.style.cssText += ";" + n);
        },
        kr = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        Sr = !1,
        Er = !1;
      try {
        var Cr = {
          get passive() {
            return (Sr = !0);
          },
          get once() {
            return (Er = Sr = !0);
          },
        };
        kr &&
          (window.addEventListener("test", Cr, Cr),
          window.removeEventListener("test", Cr, !0));
      } catch (fu) {}
      var Nr = function (e, t, n, r) {
        if (r && "boolean" !== typeof r && !Er) {
          var a = r.once,
            o = r.capture,
            i = n;
          !Er &&
            a &&
            ((i =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, o), n.call(this, r);
              }),
            (n.__once = i)),
            e.addEventListener(t, i, Sr ? r : o);
        }
        e.addEventListener(t, n, r);
      };
      var Or = function (e, t, n, r) {
        var a = r && "boolean" !== typeof r ? r.capture : r;
        e.removeEventListener(t, n, a),
          n.__once && e.removeEventListener(t, n.__once, a);
      };
      var jr = function (e, t, n, r) {
        return (
          Nr(e, t, n, r),
          function () {
            Or(e, t, n, r);
          }
        );
      };
      function Pr(e, t, n) {
        void 0 === n && (n = 5);
        var r = !1,
          a = setTimeout(function () {
            r ||
              (function (e, t, n, r) {
                if ((void 0 === n && (n = !1), void 0 === r && (r = !0), e)) {
                  var a = document.createEvent("HTMLEvents");
                  a.initEvent(t, n, r), e.dispatchEvent(a);
                }
              })(e, "transitionend", !0);
          }, t + n),
          o = jr(
            e,
            "transitionend",
            function () {
              r = !0;
            },
            { once: !0 }
          );
        return function () {
          clearTimeout(a), o();
        };
      }
      function Rr(e, t, n, r) {
        null == n &&
          (n =
            (function (e) {
              var t = xr(e, "transitionDuration") || "",
                n = -1 === t.indexOf("ms") ? 1e3 : 1;
              return parseFloat(t) * n;
            })(e) || 0);
        var a = Pr(e, n, r),
          o = jr(e, "transitionend", t);
        return function () {
          a(), o();
        };
      }
      function Tr(e, t) {
        var n = xr(e, t) || "",
          r = -1 === n.indexOf("ms") ? 1e3 : 1;
        return parseFloat(n) * r;
      }
      function _r(e, t) {
        var n = Tr(e, "transitionDuration"),
          r = Tr(e, "transitionDelay"),
          a = Rr(
            e,
            function (n) {
              n.target === e && (a(), t(n));
            },
            n + r
          );
      }
      function Lr(e) {
        e.offsetHeight;
      }
      var Ar = function (e) {
        return e && "function" !== typeof e
          ? function (t) {
              e.current = t;
            }
          : e;
      };
      var Dr = function (e, n) {
        return (0, t.useMemo)(
          function () {
            return (function (e, t) {
              var n = Ar(e),
                r = Ar(t);
              return function (e) {
                n && n(e), r && r(e);
              };
            })(e, n);
          },
          [e, n]
        );
      };
      var zr,
        Fr = [
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "addEndListener",
          "children",
          "childRef",
        ],
        Ir = t.forwardRef(function (e, n) {
          var r = e.onEnter,
            a = e.onEntering,
            o = e.onEntered,
            i = e.onExit,
            l = e.onExiting,
            u = e.onExited,
            s = e.addEndListener,
            c = e.children,
            f = e.childRef,
            d = it(e, Fr),
            p = (0, t.useRef)(null),
            h = Dr(p, f),
            m = function (e) {
              var t;
              h(
                (t = e) && "setState" in t
                  ? ar.findDOMNode(t)
                  : null != t
                  ? t
                  : null
              );
            },
            v = function (e) {
              return function (t) {
                e && p.current && e(p.current, t);
              };
            },
            y = (0, t.useCallback)(v(r), [r]),
            g = (0, t.useCallback)(v(a), [a]),
            b = (0, t.useCallback)(v(o), [o]),
            w = (0, t.useCallback)(v(i), [i]),
            x = (0, t.useCallback)(v(l), [l]),
            k = (0, t.useCallback)(v(u), [u]),
            S = (0, t.useCallback)(v(s), [s]);
          return (0, st.jsx)(
            hr,
            at(
              at({ ref: n }, d),
              {},
              {
                onEnter: y,
                onEntered: b,
                onEntering: g,
                onExit: w,
                onExited: k,
                onExiting: x,
                addEndListener: S,
                nodeRef: p,
                children:
                  "function" === typeof c
                    ? function (e, t) {
                        return c(e, at(at({}, t), {}, { ref: m }));
                      }
                    : t.cloneElement(c, { ref: m }),
              }
            )
          );
        }),
        Br = ["className", "children", "transitionClasses", "onEnter"],
        Mr = (nt((zr = {}), sr, "show"), nt(zr, cr, "show"), zr),
        Ur = t.forwardRef(function (e, n) {
          var r = e.className,
            a = e.children,
            o = e.transitionClasses,
            i = void 0 === o ? {} : o,
            l = e.onEnter,
            u = at(
              {
                in: !1,
                timeout: 300,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
              },
              it(e, Br)
            ),
            s = (0, t.useCallback)(
              function (e, t) {
                Lr(e), null == l || l(e, t);
              },
              [l]
            );
          return (0, st.jsx)(
            Ir,
            at(
              at({ ref: n, addEndListener: _r }, u),
              {},
              {
                onEnter: s,
                childRef: a.ref,
                children: function (e, n) {
                  return t.cloneElement(
                    a,
                    at(
                      at({}, n),
                      {},
                      {
                        className: ut()(
                          "fade",
                          r,
                          a.props.className,
                          Mr[e],
                          i[e]
                        ),
                      }
                    )
                  );
                },
              }
            )
          );
        });
      Ur.displayName = "Fade";
      var Wr = Ur,
        Hr = ["className", "variant", "aria-label"],
        Vr = {
          "aria-label": Wt().string,
          onClick: Wt().func,
          variant: Wt().oneOf(["white"]),
        },
        $r = t.forwardRef(function (e, t) {
          var n = e.className,
            r = e.variant,
            a = e["aria-label"],
            o = void 0 === a ? "Close" : a,
            i = it(e, Hr);
          return (0,
          st.jsx)("button", at({ ref: t, type: "button", className: ut()("btn-close", r && "btn-close-".concat(r), n), "aria-label": o }, i));
        });
      ($r.displayName = "CloseButton"), ($r.propTypes = Vr);
      var qr = $r,
        Kr = [
          "bsPrefix",
          "show",
          "closeLabel",
          "closeVariant",
          "className",
          "children",
          "variant",
          "onClose",
          "dismissible",
          "transition",
        ],
        Qr = wt("h4");
      Qr.displayName = "DivStyledAsH4";
      var Gr = bt("alert-heading", { Component: Qr }),
        Jr = bt("alert-link", { Component: rr }),
        Yr = t.forwardRef(function (e, t) {
          var n = Kn(e, { show: "onClose" }),
            r = n.bsPrefix,
            a = n.show,
            o = void 0 === a || a,
            i = n.closeLabel,
            l = void 0 === i ? "Close alert" : i,
            u = n.closeVariant,
            s = n.className,
            c = n.children,
            f = n.variant,
            d = void 0 === f ? "primary" : f,
            p = n.onClose,
            h = n.dismissible,
            m = n.transition,
            v = void 0 === m ? Wr : m,
            y = it(n, Kr),
            g = dt(r, "alert"),
            b = Xn(function (e) {
              p && p(!1, e);
            }),
            w = !0 === v ? Wr : v,
            x = (0, st.jsxs)(
              "div",
              at(
                at({ role: "alert" }, w ? void 0 : y),
                {},
                {
                  ref: t,
                  className: ut()(
                    s,
                    g,
                    d && "".concat(g, "-").concat(d),
                    h && "".concat(g, "-dismissible")
                  ),
                  children: [
                    h &&
                      (0, st.jsx)(qr, {
                        onClick: b,
                        "aria-label": l,
                        variant: u,
                      }),
                    c,
                  ],
                }
              )
            );
          return w
            ? (0, st.jsx)(
                w,
                at(
                  at({ unmountOnExit: !0 }, y),
                  {},
                  { ref: void 0, in: o, children: x }
                )
              )
            : o
            ? x
            : null;
        });
      Yr.displayName = "Alert";
      var Xr = Object.assign(Yr, { Link: Jr, Heading: Gr }),
        Zr = function (e) {
          var t = e.notification;
          if (null === t) return null;
          var n = "alert" === t.type ? "danger" : "success";
          return (0, st.jsx)(Xr, {
            variant: n,
            style: {
              textAlign: "center",
              fontFamily: "Niconne",
              padding: 0,
              margin: 0,
            },
            id: "notification",
            "aria-label": t.type,
            children: t.message,
          });
        };
      function ea(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      var ta,
        na = Object.prototype.toString,
        ra = Object.getPrototypeOf,
        aa =
          ((ta = Object.create(null)),
          function (e) {
            var t = na.call(e);
            return ta[t] || (ta[t] = t.slice(8, -1).toLowerCase());
          }),
        oa = function (e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return aa(t) === e;
            }
          );
        },
        ia = function (e) {
          return function (t) {
            return typeof t === e;
          };
        },
        la = Array.isArray,
        ua = ia("undefined");
      var sa = oa("ArrayBuffer");
      var ca = ia("string"),
        fa = ia("function"),
        da = ia("number"),
        pa = function (e) {
          return null !== e && "object" === typeof e;
        },
        ha = function (e) {
          if ("object" !== aa(e)) return !1;
          var t = ra(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        ma = oa("Date"),
        va = oa("File"),
        ya = oa("Blob"),
        ga = oa("FileList"),
        ba = oa("URLSearchParams");
      function wa(e, t) {
        var n,
          r,
          a = (
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          ).allOwnKeys,
          o = void 0 !== a && a;
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), la(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            var i,
              l = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
              u = l.length;
            for (n = 0; n < u; n++) (i = l[n]), t.call(null, e[i], i, e);
          }
      }
      function xa(e, t) {
        t = t.toLowerCase();
        for (var n, r = Object.keys(e), a = r.length; a-- > 0; )
          if (t === (n = r[a]).toLowerCase()) return n;
        return null;
      }
      var ka =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        Sa = function (e) {
          return !ua(e) && e !== ka;
        };
      var Ea,
        Ca =
          ((Ea = "undefined" !== typeof Uint8Array && ra(Uint8Array)),
          function (e) {
            return Ea && e instanceof Ea;
          }),
        Na = oa("HTMLFormElement"),
        Oa = (function (e) {
          var t = Object.prototype.hasOwnProperty;
          return function (e, n) {
            return t.call(e, n);
          };
        })(),
        ja = oa("RegExp"),
        Pa = function (e, t) {
          var n = Object.getOwnPropertyDescriptors(e),
            r = {};
          wa(n, function (n, a) {
            !1 !== t(n, a, e) && (r[a] = n);
          }),
            Object.defineProperties(e, r);
        },
        Ra = "abcdefghijklmnopqrstuvwxyz",
        Ta = "0123456789",
        _a = { DIGIT: Ta, ALPHA: Ra, ALPHA_DIGIT: Ra + Ra.toUpperCase() + Ta };
      var La = oa("AsyncFunction"),
        Aa = {
          isArray: la,
          isArrayBuffer: sa,
          isBuffer: function (e) {
            return (
              null !== e &&
              !ua(e) &&
              null !== e.constructor &&
              !ua(e.constructor) &&
              fa(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            var t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (fa(e.append) &&
                  ("formdata" === (t = aa(e)) ||
                    ("object" === t &&
                      fa(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && sa(e.buffer);
          },
          isString: ca,
          isNumber: da,
          isBoolean: function (e) {
            return !0 === e || !1 === e;
          },
          isObject: pa,
          isPlainObject: ha,
          isUndefined: ua,
          isDate: ma,
          isFile: va,
          isBlob: ya,
          isRegExp: ja,
          isFunction: fa,
          isStream: function (e) {
            return pa(e) && fa(e.pipe);
          },
          isURLSearchParams: ba,
          isTypedArray: Ca,
          isFileList: ga,
          forEach: wa,
          merge: function e() {
            for (
              var t = ((Sa(this) && this) || {}).caseless,
                n = {},
                r = function (r, a) {
                  var o = (t && xa(n, a)) || a;
                  ha(n[o]) && ha(r)
                    ? (n[o] = e(n[o], r))
                    : ha(r)
                    ? (n[o] = e({}, r))
                    : la(r)
                    ? (n[o] = r.slice())
                    : (n[o] = r);
                },
                a = 0,
                o = arguments.length;
              a < o;
              a++
            )
              arguments[a] && wa(arguments[a], r);
            return n;
          },
          extend: function (e, t, n) {
            return (
              wa(
                t,
                function (t, r) {
                  n && fa(t) ? (e[r] = ea(t, n)) : (e[r] = t);
                },
                {
                  allOwnKeys: (arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {}
                  ).allOwnKeys,
                }
              ),
              e
            );
          },
          trim: function (e) {
            return e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, n, r) {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: function (e, t, n, r) {
            var a,
              o,
              i,
              l = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (o = (a = Object.getOwnPropertyNames(e)).length; o-- > 0; )
                (i = a[o]),
                  (r && !r(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0));
              e = !1 !== n && ra(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: aa,
          kindOfTest: oa,
          endsWith: function (e, t, n) {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            var r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: function (e) {
            if (!e) return null;
            if (la(e)) return e;
            var t = e.length;
            if (!da(t)) return null;
            for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: function (e, t) {
            for (
              var n, r = (e && e[Symbol.iterator]).call(e);
              (n = r.next()) && !n.done;

            ) {
              var a = n.value;
              t.call(e, a[0], a[1]);
            }
          },
          matchAll: function (e, t) {
            for (var n, r = []; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: Na,
          hasOwnProperty: Oa,
          hasOwnProp: Oa,
          reduceDescriptors: Pa,
          freezeMethods: function (e) {
            Pa(e, function (t, n) {
              if (fa(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              var r = e[n];
              fa(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = function () {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: function (e, t) {
            var n = {},
              r = function (e) {
                e.forEach(function (e) {
                  n[e] = !0;
                });
              };
            return la(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: function (e) {
            return e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              });
          },
          noop: function () {},
          toFiniteNumber: function (e, t) {
            return (e = +e), Number.isFinite(e) ? e : t;
          },
          findKey: xa,
          global: ka,
          isContextDefined: Sa,
          ALPHABET: _a,
          generateString: function () {
            for (
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 16,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : _a.ALPHA_DIGIT,
                n = "",
                r = t.length;
              e--;

            )
              n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              fa(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: function (e) {
            var t = new Array(10);
            return (function e(n, r) {
              if (pa(n)) {
                if (t.indexOf(n) >= 0) return;
                if (!("toJSON" in n)) {
                  t[r] = n;
                  var a = la(n) ? [] : {};
                  return (
                    wa(n, function (t, n) {
                      var o = e(t, r + 1);
                      !ua(o) && (a[n] = o);
                    }),
                    (t[r] = void 0),
                    a
                  );
                }
              }
              return n;
            })(e, 0);
          },
          isAsyncFn: La,
          isThenable: function (e) {
            return e && (pa(e) || fa(e)) && fa(e.then) && fa(e.catch);
          },
        };
      function Da(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a && (this.response = a);
      }
      Aa.inherits(Da, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: Aa.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      var za = Da.prototype,
        Fa = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach(function (e) {
        Fa[e] = { value: e };
      }),
        Object.defineProperties(Da, Fa),
        Object.defineProperty(za, "isAxiosError", { value: !0 }),
        (Da.from = function (e, t, n, r, a, o) {
          var i = Object.create(za);
          return (
            Aa.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              function (e) {
                return "isAxiosError" !== e;
              }
            ),
            Da.call(i, e.message, t, n, r, a),
            (i.cause = e),
            (i.name = e.name),
            o && Object.assign(i, o),
            i
          );
        });
      var Ia = Da,
        Ba = null;
      function Ma(e) {
        return Aa.isPlainObject(e) || Aa.isArray(e);
      }
      function Ua(e) {
        return Aa.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function Wa(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = Ua(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      var Ha = Aa.toFlatObject(Aa, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var Va = function (e, t, n) {
        if (!Aa.isObject(e)) throw new TypeError("target must be an object");
        t = t || new (Ba || FormData)();
        var r = (n = Aa.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !Aa.isUndefined(t[e]);
            }
          )).metaTokens,
          a = n.visitor || s,
          o = n.dots,
          i = n.indexes,
          l =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            Aa.isSpecCompliantForm(t);
        if (!Aa.isFunction(a))
          throw new TypeError("visitor must be a function");
        function u(e) {
          if (null === e) return "";
          if (Aa.isDate(e)) return e.toISOString();
          if (!l && Aa.isBlob(e))
            throw new Ia("Blob is not supported. Use a Buffer instead.");
          return Aa.isArrayBuffer(e) || Aa.isTypedArray(e)
            ? l && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function s(e, n, a) {
          var l = e;
          if (e && !a && "object" === typeof e)
            if (Aa.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (Aa.isArray(e) &&
                (function (e) {
                  return Aa.isArray(e) && !e.some(Ma);
                })(e)) ||
              ((Aa.isFileList(e) || Aa.endsWith(n, "[]")) &&
                (l = Aa.toArray(e)))
            )
              return (
                (n = Ua(n)),
                l.forEach(function (e, r) {
                  !Aa.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === i ? Wa([n], r, o) : null === i ? n : n + "[]",
                      u(e)
                    );
                }),
                !1
              );
          return !!Ma(e) || (t.append(Wa(a, n, o), u(e)), !1);
        }
        var c = [],
          f = Object.assign(Ha, {
            defaultVisitor: s,
            convertValue: u,
            isVisitable: Ma,
          });
        if (!Aa.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!Aa.isUndefined(n)) {
              if (-1 !== c.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              c.push(n),
                Aa.forEach(n, function (n, o) {
                  !0 ===
                    (!(Aa.isUndefined(n) || null === n) &&
                      a.call(t, n, Aa.isString(o) ? o.trim() : o, r, f)) &&
                    e(n, r ? r.concat(o) : [o]);
                }),
                c.pop();
            }
          })(e),
          t
        );
      };
      function $a(e) {
        var t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function qa(e, t) {
        (this._pairs = []), e && Va(e, this, t);
      }
      var Ka = qa.prototype;
      (Ka.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (Ka.toString = function (e) {
          var t = e
            ? function (t) {
                return e.call(this, t, $a);
              }
            : $a;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      var Qa = qa;
      function Ga(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function Ja(e, t, n) {
        if (!t) return e;
        var r,
          a = (n && n.encode) || Ga,
          o = n && n.serialize;
        if (
          (r = o
            ? o(t, n)
            : Aa.isURLSearchParams(t)
            ? t.toString()
            : new Qa(t, n).toString(a))
        ) {
          var i = e.indexOf("#");
          -1 !== i && (e = e.slice(0, i)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
        }
        return e;
      }
      var Ya = (function () {
          function e() {
            u(this, e), (this.handlers = []);
          }
          return (
            d(e, [
              {
                key: "use",
                value: function (e, t, n) {
                  return (
                    this.handlers.push({
                      fulfilled: e,
                      rejected: t,
                      synchronous: !!n && n.synchronous,
                      runWhen: n ? n.runWhen : null,
                    }),
                    this.handlers.length - 1
                  );
                },
              },
              {
                key: "eject",
                value: function (e) {
                  this.handlers[e] && (this.handlers[e] = null);
                },
              },
              {
                key: "clear",
                value: function () {
                  this.handlers && (this.handlers = []);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  Aa.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                  });
                },
              },
            ]),
            e
          );
        })(),
        Xa = Ya,
        Za = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        eo = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : Qa,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          isStandardBrowserEnv: (function () {
            var e;
            return (
              ("undefined" === typeof navigator ||
                ("ReactNative" !== (e = navigator.product) &&
                  "NativeScript" !== e &&
                  "NS" !== e)) &&
              "undefined" !== typeof window &&
              "undefined" !== typeof document
            );
          })(),
          isStandardBrowserWebWorkerEnv:
            "undefined" !== typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            "function" === typeof self.importScripts,
          protocols: ["http", "https", "file", "blob", "url", "data"],
        };
      var to = function (e) {
          function t(e, n, r, a) {
            var o = e[a++],
              i = Number.isFinite(+o),
              l = a >= e.length;
            return (
              (o = !o && Aa.isArray(r) ? r.length : o),
              l
                ? (Aa.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !i)
                : ((r[o] && Aa.isObject(r[o])) || (r[o] = []),
                  t(e, n, r[o], a) &&
                    Aa.isArray(r[o]) &&
                    (r[o] = (function (e) {
                      var t,
                        n,
                        r = {},
                        a = Object.keys(e),
                        o = a.length;
                      for (t = 0; t < o; t++) r[(n = a[t])] = e[n];
                      return r;
                    })(r[o])),
                  !i)
            );
          }
          if (Aa.isFormData(e) && Aa.isFunction(e.entries)) {
            var n = {};
            return (
              Aa.forEachEntry(e, function (e, r) {
                t(
                  (function (e) {
                    return Aa.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                      return "[]" === e[0] ? "" : e[1] || e[0];
                    });
                  })(e),
                  r,
                  n,
                  0
                );
              }),
              n
            );
          }
          return null;
        },
        no = { "Content-Type": void 0 };
      var ro = {
        transitional: Za,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (e, t) {
            var n,
              r = t.getContentType() || "",
              a = r.indexOf("application/json") > -1,
              o = Aa.isObject(e);
            if (
              (o && Aa.isHTMLForm(e) && (e = new FormData(e)), Aa.isFormData(e))
            )
              return a && a ? JSON.stringify(to(e)) : e;
            if (
              Aa.isArrayBuffer(e) ||
              Aa.isBuffer(e) ||
              Aa.isStream(e) ||
              Aa.isFile(e) ||
              Aa.isBlob(e)
            )
              return e;
            if (Aa.isArrayBufferView(e)) return e.buffer;
            if (Aa.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            if (o) {
              if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return Va(
                    e,
                    new eo.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return eo.isNode && Aa.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (n = Aa.isFileList(e)) ||
                r.indexOf("multipart/form-data") > -1
              ) {
                var i = this.env && this.env.FormData;
                return Va(
                  n ? { "files[]": e } : e,
                  i && new i(),
                  this.formSerializer
                );
              }
            }
            return o || a
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (Aa.isString(e))
                    try {
                      return (t || JSON.parse)(e), Aa.trim(e);
                    } catch (fu) {
                      if ("SyntaxError" !== fu.name) throw fu;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            var t = this.transitional || ro.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (e && Aa.isString(e) && ((n && !this.responseType) || r)) {
              var a = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (fu) {
                if (a) {
                  if ("SyntaxError" === fu.name)
                    throw Ia.from(
                      fu,
                      Ia.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw fu;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: eo.classes.FormData, Blob: eo.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      Aa.forEach(["delete", "get", "head"], function (e) {
        ro.headers[e] = {};
      }),
        Aa.forEach(["post", "put", "patch"], function (e) {
          ro.headers[e] = Aa.merge(no);
        });
      var ao = ro,
        oo = Aa.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        io = Symbol("internals");
      function lo(e) {
        return e && String(e).trim().toLowerCase();
      }
      function uo(e) {
        return !1 === e || null == e
          ? e
          : Aa.isArray(e)
          ? e.map(uo)
          : String(e);
      }
      function so(e, t, n, r, a) {
        return Aa.isFunction(r)
          ? r.call(this, t, n)
          : (a && (t = n),
            Aa.isString(t)
              ? Aa.isString(r)
                ? -1 !== t.indexOf(r)
                : Aa.isRegExp(r)
                ? r.test(t)
                : void 0
              : void 0);
      }
      var co = (function (e, t) {
        function n(e) {
          u(this, n), e && this.set(e);
        }
        return (
          d(
            n,
            [
              {
                key: "set",
                value: function (e, t, n) {
                  var r = this;
                  function a(e, t, n) {
                    var a = lo(t);
                    if (!a)
                      throw new Error("header name must be a non-empty string");
                    var o = Aa.findKey(r, a);
                    (!o ||
                      void 0 === r[o] ||
                      !0 === n ||
                      (void 0 === n && !1 !== r[o])) &&
                      (r[o || t] = uo(e));
                  }
                  var o = function (e, t) {
                    return Aa.forEach(e, function (e, n) {
                      return a(e, n, t);
                    });
                  };
                  return (
                    Aa.isPlainObject(e) || e instanceof this.constructor
                      ? o(e, t)
                      : Aa.isString(e) &&
                        (e = e.trim()) &&
                        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
                      ? o(
                          (function (e) {
                            var t,
                              n,
                              r,
                              a = {};
                            return (
                              e &&
                                e.split("\n").forEach(function (e) {
                                  (r = e.indexOf(":")),
                                    (t = e
                                      .substring(0, r)
                                      .trim()
                                      .toLowerCase()),
                                    (n = e.substring(r + 1).trim()),
                                    !t ||
                                      (a[t] && oo[t]) ||
                                      ("set-cookie" === t
                                        ? a[t]
                                          ? a[t].push(n)
                                          : (a[t] = [n])
                                        : (a[t] = a[t] ? a[t] + ", " + n : n));
                                }),
                              a
                            );
                          })(e),
                          t
                        )
                      : null != e && a(t, e, n),
                    this
                  );
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  if ((e = lo(e))) {
                    var n = Aa.findKey(this, e);
                    if (n) {
                      var r = this[n];
                      if (!t) return r;
                      if (!0 === t)
                        return (function (e) {
                          for (
                            var t,
                              n = Object.create(null),
                              r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            (t = r.exec(e));

                          )
                            n[t[1]] = t[2];
                          return n;
                        })(r);
                      if (Aa.isFunction(t)) return t.call(this, r, n);
                      if (Aa.isRegExp(t)) return t.exec(r);
                      throw new TypeError(
                        "parser must be boolean|regexp|function"
                      );
                    }
                  }
                },
              },
              {
                key: "has",
                value: function (e, t) {
                  if ((e = lo(e))) {
                    var n = Aa.findKey(this, e);
                    return !(
                      !n ||
                      void 0 === this[n] ||
                      (t && !so(0, this[n], n, t))
                    );
                  }
                  return !1;
                },
              },
              {
                key: "delete",
                value: function (e, t) {
                  var n = this,
                    r = !1;
                  function a(e) {
                    if ((e = lo(e))) {
                      var a = Aa.findKey(n, e);
                      !a ||
                        (t && !so(0, n[a], a, t)) ||
                        (delete n[a], (r = !0));
                    }
                  }
                  return Aa.isArray(e) ? e.forEach(a) : a(e), r;
                },
              },
              {
                key: "clear",
                value: function (e) {
                  for (var t = Object.keys(this), n = t.length, r = !1; n--; ) {
                    var a = t[n];
                    (e && !so(0, this[a], a, e, !0)) ||
                      (delete this[a], (r = !0));
                  }
                  return r;
                },
              },
              {
                key: "normalize",
                value: function (e) {
                  var t = this,
                    n = {};
                  return (
                    Aa.forEach(this, function (r, a) {
                      var o = Aa.findKey(n, a);
                      if (o) return (t[o] = uo(r)), void delete t[a];
                      var i = e
                        ? (function (e) {
                            return e
                              .trim()
                              .toLowerCase()
                              .replace(/([a-z\d])(\w*)/g, function (e, t, n) {
                                return t.toUpperCase() + n;
                              });
                          })(a)
                        : String(a).trim();
                      i !== a && delete t[a], (t[i] = uo(r)), (n[i] = !0);
                    }),
                    this
                  );
                },
              },
              {
                key: "concat",
                value: function () {
                  for (
                    var e, t = arguments.length, n = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  return (e = this.constructor).concat.apply(
                    e,
                    [this].concat(n)
                  );
                },
              },
              {
                key: "toJSON",
                value: function (e) {
                  var t = Object.create(null);
                  return (
                    Aa.forEach(this, function (n, r) {
                      null != n &&
                        !1 !== n &&
                        (t[r] = e && Aa.isArray(n) ? n.join(", ") : n);
                    }),
                    t
                  );
                },
              },
              {
                key: Symbol.iterator,
                value: function () {
                  return Object.entries(this.toJSON())[Symbol.iterator]();
                },
              },
              {
                key: "toString",
                value: function () {
                  return Object.entries(this.toJSON())
                    .map(function (e) {
                      var t = S(e, 2);
                      return t[0] + ": " + t[1];
                    })
                    .join("\n");
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "AxiosHeaders";
                },
              },
            ],
            [
              {
                key: "from",
                value: function (e) {
                  return e instanceof this ? e : new this(e);
                },
              },
              {
                key: "concat",
                value: function (e) {
                  for (
                    var t = new this(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    r[a - 1] = arguments[a];
                  return (
                    r.forEach(function (e) {
                      return t.set(e);
                    }),
                    t
                  );
                },
              },
              {
                key: "accessor",
                value: function (e) {
                  var t = (this[io] = this[io] = { accessors: {} }).accessors,
                    n = this.prototype;
                  function r(e) {
                    var r = lo(e);
                    t[r] ||
                      (!(function (e, t) {
                        var n = Aa.toCamelCase(" " + t);
                        ["get", "set", "has"].forEach(function (r) {
                          Object.defineProperty(e, r + n, {
                            value: function (e, n, a) {
                              return this[r].call(this, t, e, n, a);
                            },
                            configurable: !0,
                          });
                        });
                      })(n, e),
                      (t[r] = !0));
                  }
                  return Aa.isArray(e) ? e.forEach(r) : r(e), this;
                },
              },
            ]
          ),
          n
        );
      })();
      co.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        Aa.freezeMethods(co.prototype),
        Aa.freezeMethods(co);
      var fo = co;
      function po(e, t) {
        var n = this || ao,
          r = t || n,
          a = fo.from(r.headers),
          o = r.data;
        return (
          Aa.forEach(e, function (e) {
            o = e.call(n, o, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          o
        );
      }
      function ho(e) {
        return !(!e || !e.__CANCEL__);
      }
      function mo(e, t, n) {
        Ia.call(this, null == e ? "canceled" : e, Ia.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      Aa.inherits(mo, Ia, { __CANCEL__: !0 });
      var vo = mo;
      var yo = eo.isStandardBrowserEnv
        ? {
            write: function (e, t, n, r, a, o) {
              var i = [];
              i.push(e + "=" + encodeURIComponent(t)),
                Aa.isNumber(n) &&
                  i.push("expires=" + new Date(n).toGMTString()),
                Aa.isString(r) && i.push("path=" + r),
                Aa.isString(a) && i.push("domain=" + a),
                !0 === o && i.push("secure"),
                (document.cookie = i.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
      function go(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      var bo = eo.isStandardBrowserEnv
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
            function r(e) {
              var r = e;
              return (
                t && (n.setAttribute("href", r), (r = n.href)),
                n.setAttribute("href", r),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            }
            return (
              (e = r(window.location.href)),
              function (t) {
                var n = Aa.isString(t) ? r(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      var wo = function (e, t) {
        e = e || 10;
        var n,
          r = new Array(e),
          a = new Array(e),
          o = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (l) {
            var u = Date.now(),
              s = a[i];
            n || (n = u), (r[o] = l), (a[o] = u);
            for (var c = i, f = 0; c !== o; ) (f += r[c++]), (c %= e);
            if (((o = (o + 1) % e) === i && (i = (i + 1) % e), !(u - n < t))) {
              var d = s && u - s;
              return d ? Math.round((1e3 * f) / d) : void 0;
            }
          }
        );
      };
      function xo(e, t) {
        var n = 0,
          r = wo(50, 250);
        return function (a) {
          var o = a.loaded,
            i = a.lengthComputable ? a.total : void 0,
            l = o - n,
            u = r(l);
          n = o;
          var s = {
            loaded: o,
            total: i,
            progress: i ? o / i : void 0,
            bytes: l,
            rate: u || void 0,
            estimated: u && i && o <= i ? (i - o) / u : void 0,
            event: a,
          };
          (s[t ? "download" : "upload"] = !0), e(s);
        };
      }
      var ko =
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              var r,
                a = e.data,
                o = fo.from(e.headers).normalize(),
                i = e.responseType;
              function l() {
                e.cancelToken && e.cancelToken.unsubscribe(r),
                  e.signal && e.signal.removeEventListener("abort", r);
              }
              Aa.isFormData(a) &&
                (eo.isStandardBrowserEnv || eo.isStandardBrowserWebWorkerEnv
                  ? o.setContentType(!1)
                  : o.setContentType("multipart/form-data;", !1));
              var u = new XMLHttpRequest();
              if (e.auth) {
                var s = e.auth.username || "",
                  c = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : "";
                o.set("Authorization", "Basic " + btoa(s + ":" + c));
              }
              var f = go(e.baseURL, e.url);
              function d() {
                if (u) {
                  var r = fo.from(
                    "getAllResponseHeaders" in u && u.getAllResponseHeaders()
                  );
                  !(function (e, t, n) {
                    var r = n.config.validateStatus;
                    n.status && r && !r(n.status)
                      ? t(
                          new Ia(
                            "Request failed with status code " + n.status,
                            [Ia.ERR_BAD_REQUEST, Ia.ERR_BAD_RESPONSE][
                              Math.floor(n.status / 100) - 4
                            ],
                            n.config,
                            n.request,
                            n
                          )
                        )
                      : e(n);
                  })(
                    function (e) {
                      t(e), l();
                    },
                    function (e) {
                      n(e), l();
                    },
                    {
                      data:
                        i && "text" !== i && "json" !== i
                          ? u.response
                          : u.responseText,
                      status: u.status,
                      statusText: u.statusText,
                      headers: r,
                      config: e,
                      request: u,
                    }
                  ),
                    (u = null);
                }
              }
              if (
                (u.open(
                  e.method.toUpperCase(),
                  Ja(f, e.params, e.paramsSerializer),
                  !0
                ),
                (u.timeout = e.timeout),
                "onloadend" in u
                  ? (u.onloadend = d)
                  : (u.onreadystatechange = function () {
                      u &&
                        4 === u.readyState &&
                        (0 !== u.status ||
                          (u.responseURL &&
                            0 === u.responseURL.indexOf("file:"))) &&
                        setTimeout(d);
                    }),
                (u.onabort = function () {
                  u &&
                    (n(new Ia("Request aborted", Ia.ECONNABORTED, e, u)),
                    (u = null));
                }),
                (u.onerror = function () {
                  n(new Ia("Network Error", Ia.ERR_NETWORK, e, u)), (u = null);
                }),
                (u.ontimeout = function () {
                  var t = e.timeout
                      ? "timeout of " + e.timeout + "ms exceeded"
                      : "timeout exceeded",
                    r = e.transitional || Za;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(
                      new Ia(
                        t,
                        r.clarifyTimeoutError ? Ia.ETIMEDOUT : Ia.ECONNABORTED,
                        e,
                        u
                      )
                    ),
                    (u = null);
                }),
                eo.isStandardBrowserEnv)
              ) {
                var p =
                  (e.withCredentials || bo(f)) &&
                  e.xsrfCookieName &&
                  yo.read(e.xsrfCookieName);
                p && o.set(e.xsrfHeaderName, p);
              }
              void 0 === a && o.setContentType(null),
                "setRequestHeader" in u &&
                  Aa.forEach(o.toJSON(), function (e, t) {
                    u.setRequestHeader(t, e);
                  }),
                Aa.isUndefined(e.withCredentials) ||
                  (u.withCredentials = !!e.withCredentials),
                i && "json" !== i && (u.responseType = e.responseType),
                "function" === typeof e.onDownloadProgress &&
                  u.addEventListener("progress", xo(e.onDownloadProgress, !0)),
                "function" === typeof e.onUploadProgress &&
                  u.upload &&
                  u.upload.addEventListener("progress", xo(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((r = function (t) {
                    u &&
                      (n(!t || t.type ? new vo(null, e, u) : t),
                      u.abort(),
                      (u = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(r),
                  e.signal &&
                    (e.signal.aborted
                      ? r()
                      : e.signal.addEventListener("abort", r)));
              var h = (function (e) {
                var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(f);
              h && -1 === eo.protocols.indexOf(h)
                ? n(
                    new Ia(
                      "Unsupported protocol " + h + ":",
                      Ia.ERR_BAD_REQUEST,
                      e
                    )
                  )
                : u.send(a || null);
            });
          },
        So = { http: Ba, xhr: ko };
      Aa.forEach(So, function (e, t) {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (fu) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      var Eo = function (e) {
        for (
          var t, n, r = (e = Aa.isArray(e) ? e : [e]).length, a = 0;
          a < r &&
          ((t = e[a]), !(n = Aa.isString(t) ? So[t.toLowerCase()] : t));
          a++
        );
        if (!n) {
          if (!1 === n)
            throw new Ia(
              "Adapter ".concat(t, " is not supported by the environment"),
              "ERR_NOT_SUPPORT"
            );
          throw new Error(
            Aa.hasOwnProp(So, t)
              ? "Adapter '".concat(t, "' is not available in the build")
              : "Unknown adapter '".concat(t, "'")
          );
        }
        if (!Aa.isFunction(n)) throw new TypeError("adapter is not a function");
        return n;
      };
      function Co(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new vo(null, e);
      }
      function No(e) {
        return (
          Co(e),
          (e.headers = fo.from(e.headers)),
          (e.data = po.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
          Eo(e.adapter || ao.adapter)(e).then(
            function (t) {
              return (
                Co(e),
                (t.data = po.call(e, e.transformResponse, t)),
                (t.headers = fo.from(t.headers)),
                t
              );
            },
            function (t) {
              return (
                ho(t) ||
                  (Co(e),
                  t &&
                    t.response &&
                    ((t.response.data = po.call(
                      e,
                      e.transformResponse,
                      t.response
                    )),
                    (t.response.headers = fo.from(t.response.headers)))),
                Promise.reject(t)
              );
            }
          )
        );
      }
      var Oo = function (e) {
        return e instanceof fo ? e.toJSON() : e;
      };
      function jo(e, t) {
        t = t || {};
        var n = {};
        function r(e, t, n) {
          return Aa.isPlainObject(e) && Aa.isPlainObject(t)
            ? Aa.merge.call({ caseless: n }, e, t)
            : Aa.isPlainObject(t)
            ? Aa.merge({}, t)
            : Aa.isArray(t)
            ? t.slice()
            : t;
        }
        function a(e, t, n) {
          return Aa.isUndefined(t)
            ? Aa.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function o(e, t) {
          if (!Aa.isUndefined(t)) return r(void 0, t);
        }
        function i(e, t) {
          return Aa.isUndefined(t)
            ? Aa.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function l(n, a, o) {
          return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
        }
        var u = {
          url: o,
          method: o,
          data: o,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: l,
          headers: function (e, t) {
            return a(Oo(e), Oo(t), !0);
          },
        };
        return (
          Aa.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            var o = u[r] || a,
              i = o(e[r], t[r], r);
            (Aa.isUndefined(i) && o !== l) || (n[r] = i);
          }),
          n
        );
      }
      var Po = "1.4.0",
        Ro = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          Ro[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      var To = {};
      Ro.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.4.0] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return function (n, a, o) {
          if (!1 === e)
            throw new Ia(
              r(a, " has been removed" + (t ? " in " + t : "")),
              Ia.ERR_DEPRECATED
            );
          return (
            t &&
              !To[a] &&
              ((To[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, a, o)
          );
        };
      };
      var _o = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new Ia(
                "options must be an object",
                Ia.ERR_BAD_OPTION_VALUE
              );
            for (var r = Object.keys(e), a = r.length; a-- > 0; ) {
              var o = r[a],
                i = t[o];
              if (i) {
                var l = e[o],
                  u = void 0 === l || i(l, o, e);
                if (!0 !== u)
                  throw new Ia(
                    "option " + o + " must be " + u,
                    Ia.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new Ia("Unknown option " + o, Ia.ERR_BAD_OPTION);
            }
          },
          validators: Ro,
        },
        Lo = _o.validators,
        Ao = (function () {
          function e(t) {
            u(this, e),
              (this.defaults = t),
              (this.interceptors = { request: new Xa(), response: new Xa() });
          }
          return (
            d(e, [
              {
                key: "request",
                value: function (e, t) {
                  "string" === typeof e
                    ? ((t = t || {}).url = e)
                    : (t = e || {});
                  var n,
                    r = (t = jo(this.defaults, t)),
                    a = r.transitional,
                    o = r.paramsSerializer,
                    i = r.headers;
                  void 0 !== a &&
                    _o.assertOptions(
                      a,
                      {
                        silentJSONParsing: Lo.transitional(Lo.boolean),
                        forcedJSONParsing: Lo.transitional(Lo.boolean),
                        clarifyTimeoutError: Lo.transitional(Lo.boolean),
                      },
                      !1
                    ),
                    null != o &&
                      (Aa.isFunction(o)
                        ? (t.paramsSerializer = { serialize: o })
                        : _o.assertOptions(
                            o,
                            { encode: Lo.function, serialize: Lo.function },
                            !0
                          )),
                    (t.method = (
                      t.method ||
                      this.defaults.method ||
                      "get"
                    ).toLowerCase()),
                    (n = i && Aa.merge(i.common, i[t.method])) &&
                      Aa.forEach(
                        [
                          "delete",
                          "get",
                          "head",
                          "post",
                          "put",
                          "patch",
                          "common",
                        ],
                        function (e) {
                          delete i[e];
                        }
                      ),
                    (t.headers = fo.concat(n, i));
                  var l = [],
                    u = !0;
                  this.interceptors.request.forEach(function (e) {
                    ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
                      ((u = u && e.synchronous),
                      l.unshift(e.fulfilled, e.rejected));
                  });
                  var s,
                    c = [];
                  this.interceptors.response.forEach(function (e) {
                    c.push(e.fulfilled, e.rejected);
                  });
                  var f,
                    d = 0;
                  if (!u) {
                    var p = [No.bind(this), void 0];
                    for (
                      p.unshift.apply(p, l),
                        p.push.apply(p, c),
                        f = p.length,
                        s = Promise.resolve(t);
                      d < f;

                    )
                      s = s.then(p[d++], p[d++]);
                    return s;
                  }
                  f = l.length;
                  var h = t;
                  for (d = 0; d < f; ) {
                    var m = l[d++],
                      v = l[d++];
                    try {
                      h = m(h);
                    } catch (y) {
                      v.call(this, y);
                      break;
                    }
                  }
                  try {
                    s = No.call(this, h);
                  } catch (y) {
                    return Promise.reject(y);
                  }
                  for (d = 0, f = c.length; d < f; ) s = s.then(c[d++], c[d++]);
                  return s;
                },
              },
              {
                key: "getUri",
                value: function (e) {
                  return Ja(
                    go((e = jo(this.defaults, e)).baseURL, e.url),
                    e.params,
                    e.paramsSerializer
                  );
                },
              },
            ]),
            e
          );
        })();
      Aa.forEach(["delete", "get", "head", "options"], function (e) {
        Ao.prototype[e] = function (t, n) {
          return this.request(
            jo(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        Aa.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                jo(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (Ao.prototype[e] = t()), (Ao.prototype[e + "Form"] = t(!0));
        });
      var Do = Ao,
        zo = (function () {
          function e(t) {
            if ((u(this, e), "function" !== typeof t))
              throw new TypeError("executor must be a function.");
            var n;
            this.promise = new Promise(function (e) {
              n = e;
            });
            var r = this;
            this.promise.then(function (e) {
              if (r._listeners) {
                for (var t = r._listeners.length; t-- > 0; ) r._listeners[t](e);
                r._listeners = null;
              }
            }),
              (this.promise.then = function (e) {
                var t,
                  n = new Promise(function (e) {
                    r.subscribe(e), (t = e);
                  }).then(e);
                return (
                  (n.cancel = function () {
                    r.unsubscribe(t);
                  }),
                  n
                );
              }),
              t(function (e, t, a) {
                r.reason || ((r.reason = new vo(e, t, a)), n(r.reason));
              });
          }
          return (
            d(
              e,
              [
                {
                  key: "throwIfRequested",
                  value: function () {
                    if (this.reason) throw this.reason;
                  },
                },
                {
                  key: "subscribe",
                  value: function (e) {
                    this.reason
                      ? e(this.reason)
                      : this._listeners
                      ? this._listeners.push(e)
                      : (this._listeners = [e]);
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (e) {
                    if (this._listeners) {
                      var t = this._listeners.indexOf(e);
                      -1 !== t && this._listeners.splice(t, 1);
                    }
                  },
                },
              ],
              [
                {
                  key: "source",
                  value: function () {
                    var t;
                    return {
                      token: new e(function (e) {
                        t = e;
                      }),
                      cancel: t,
                    };
                  },
                },
              ]
            ),
            e
          );
        })(),
        Fo = zo;
      var Io = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(Io).forEach(function (e) {
        var t = S(e, 2),
          n = t[0],
          r = t[1];
        Io[r] = n;
      });
      var Bo = Io;
      var Mo = (function e(t) {
        var n = new Do(t),
          r = ea(Do.prototype.request, n);
        return (
          Aa.extend(r, Do.prototype, n, { allOwnKeys: !0 }),
          Aa.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(jo(t, n));
          }),
          r
        );
      })(ao);
      (Mo.Axios = Do),
        (Mo.CanceledError = vo),
        (Mo.CancelToken = Fo),
        (Mo.isCancel = ho),
        (Mo.VERSION = Po),
        (Mo.toFormData = Va),
        (Mo.AxiosError = Ia),
        (Mo.Cancel = Mo.CanceledError),
        (Mo.all = function (e) {
          return Promise.all(e);
        }),
        (Mo.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (Mo.isAxiosError = function (e) {
          return Aa.isObject(e) && !0 === e.isAxiosError;
        }),
        (Mo.mergeConfig = jo),
        (Mo.AxiosHeaders = fo),
        (Mo.formToJSON = function (e) {
          return to(Aa.isHTMLForm(e) ? new FormData(e) : e);
        }),
        (Mo.HttpStatusCode = Bo),
        (Mo.default = Mo);
      var Uo = Mo,
        Wo = {
          create: (function () {
            var e = tt(
              Ze().mark(function e(t) {
                var n;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Uo.post("/api/contactforms", t);
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        },
        Ho = Wo,
        Vo = function () {
          var e = S((0, t.useState)(""), 2),
            n = e[0],
            r = e[1],
            a = S((0, t.useState)(""), 2),
            o = a[0],
            i = a[1],
            l = S((0, t.useState)(null), 2),
            u = l[0],
            s = l[1],
            c = function (e) {
              s({
                message: e,
                type:
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "info",
              }),
                setTimeout(function () {
                  s(null);
                }, 3e3);
            },
            f = (function () {
              var e = tt(
                Ze().mark(function e(t) {
                  return Ze().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          Ho.create(t)
                            .then(function () {
                              c("A new message by has been sent.");
                            })
                            .catch(function (e) {
                              c(
                                "Creating a message failed: " +
                                  e.response.data.error,
                                "alert"
                              );
                            });
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            d = {
              cardStyle: {
                boxShadow: "10px 10px 10px 10px rgba(0, 71, 171, 0.15)",
                textAlign: "center",
              },
              form: {
                width: "80%",
                display: "block",
                margin: "0 auto",
                boxShadow: "10px 10px 10px rgba(0, 71, 171, 0.15)",
              },
              header: {
                fontSize: "2rem",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
              },
              label: { fontSize: 28, marginBottom: 35 },
              button: { padding: 15, marginTop: 35, marginBottom: 35 },
              paragraph: {
                fontSize: 20,
                maxWidth: 500,
                margin: "auto",
                marginBottom: 10,
              },
            };
          return (0, st.jsx)("section", {
            className: "contact form",
            children: (0, st.jsxs)(mt, {
              children: [
                (0, st.jsx)(Zr, { notification: u }),
                (0, st.jsxs)(Mt, {
                  className: "my-3",
                  style: d.cardStyle,
                  children: [
                    (0, st.jsx)(Mt.Header, {
                      children: (0, st.jsx)("h2", {
                        style: d.header,
                        children: "Contact Form",
                      }),
                    }),
                    (0, st.jsxs)(Mt.Body, {
                      children: [
                        (0, st.jsx)("p", {
                          style: d.paragraph,
                          children:
                            "If you have any questions or inquiries, please don't hesitate to reach out using the contact form below. We'll get back to you as soon as possible.",
                        }),
                        (0, st.jsxs)(zn, {
                          onSubmit: function (e) {
                            e.preventDefault();
                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)
                              ? (console.log("Form submitted!"),
                                f({ email: n, message: o }),
                                r(""),
                                i(""))
                              : c(
                                  "Please enter a valid email address.",
                                  "alert"
                                );
                          },
                          children: [
                            (0, st.jsxs)(zn.Group, {
                              className: "mb-3",
                              children: [
                                (0, st.jsx)(zn.Label, {
                                  htmlFor: "email",
                                  style: d.label,
                                  children: "Email",
                                }),
                                (0, st.jsx)(zn.Control, {
                                  value: n,
                                  onChange: function (e) {
                                    var t = e.target;
                                    return r(t.value);
                                  },
                                  id: "email",
                                  placeholder: "Place your email here",
                                  style: d.form,
                                  "aria-label": "Email",
                                }),
                              ],
                            }),
                            (0, st.jsxs)(zn.Group, {
                              className: "mb-3",
                              children: [
                                (0, st.jsx)(zn.Label, {
                                  htmlFor: "message",
                                  style: d.label,
                                  children: "Message",
                                }),
                                (0, st.jsx)(zn.Control, {
                                  as: "textarea",
                                  rows: 5,
                                  value: o,
                                  onChange: function (e) {
                                    var t = e.target;
                                    return i(t.value);
                                  },
                                  id: "message",
                                  placeholder: "Place your message here",
                                  style: d.form,
                                  "aria-label": "Message",
                                }),
                              ],
                            }),
                            (0, st.jsx)(Hn, {
                              "aria-label": "Submit",
                              type: "submit",
                              variant: "primary",
                              style: d.button,
                              className: "btn-custom",
                              children: "Submit",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function $o() {
        return (
          ($o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          $o.apply(this, arguments)
        );
      }
      function qo(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var Ko = [
          "onClick",
          "relative",
          "reloadDocument",
          "replace",
          "state",
          "target",
          "to",
          "preventScrollReset",
        ],
        Qo = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "children",
        ];
      function Go(e) {
        var n = e.basename,
          r = e.children,
          a = e.window,
          o = t.useRef();
        null == o.current &&
          (o.current = (function (e) {
            return (
              void 0 === e && (e = {}),
              L(
                function (e, t) {
                  var n = e.location;
                  return R(
                    "",
                    { pathname: n.pathname, search: n.search, hash: n.hash },
                    (t.state && t.state.usr) || null,
                    (t.state && t.state.key) || "default"
                  );
                },
                function (e, t) {
                  return "string" === typeof t ? t : T(t);
                },
                null,
                e
              )
            );
          })({ window: a, v5Compat: !0 }));
        var i = o.current,
          l = S(t.useState({ action: i.action, location: i.location }), 2),
          u = l[0],
          s = l[1];
        return (
          t.useLayoutEffect(
            function () {
              return i.listen(s);
            },
            [i]
          ),
          t.createElement(_e, {
            basename: n,
            children: r,
            location: u.location,
            navigationType: u.action,
            navigator: i,
          })
        );
      }
      var Jo =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        Yo = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Xo = t.forwardRef(function (e, n) {
          var r,
            a = e.onClick,
            o = e.relative,
            i = e.reloadDocument,
            l = e.replace,
            u = e.state,
            s = e.target,
            c = e.to,
            f = e.preventScrollReset,
            d = qo(e, Ko),
            p = t.useContext(ce).basename,
            h = !1;
          if ("string" === typeof c && Yo.test(c) && ((r = c), Jo))
            try {
              var m = new URL(window.location.href),
                v = c.startsWith("//") ? new URL(m.protocol + c) : new URL(c),
                y = Q(v.pathname, p);
              v.origin === m.origin && null != y
                ? (c = y + v.search + v.hash)
                : (h = !0);
            } catch (fu) {}
          var g = (function (e, n) {
              var r = (void 0 === n ? {} : n).relative;
              he() || O(!1);
              var a = t.useContext(ce),
                o = a.basename,
                i = a.navigator,
                l = ge(e, { relative: r }),
                u = l.hash,
                s = l.pathname,
                c = l.search,
                f = s;
              return (
                "/" !== o && (f = "/" === s ? o : X([o, s])),
                i.createHref({ pathname: f, search: c, hash: u })
              );
            })(c, { relative: o }),
            b = (function (e, n) {
              var r = void 0 === n ? {} : n,
                a = r.target,
                o = r.replace,
                i = r.state,
                l = r.preventScrollReset,
                u = r.relative,
                s = ye(),
                c = me(),
                f = ge(e, { relative: u });
              return t.useCallback(
                function (t) {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, a)
                  ) {
                    t.preventDefault();
                    var n = void 0 !== o ? o : T(c) === T(f);
                    s(e, {
                      replace: n,
                      state: i,
                      preventScrollReset: l,
                      relative: u,
                    });
                  }
                },
                [c, s, f, o, i, a, e, l, u]
              );
            })(c, {
              replace: l,
              state: u,
              target: s,
              preventScrollReset: f,
              relative: o,
            });
          return t.createElement(
            "a",
            $o({}, d, {
              href: r || g,
              onClick:
                h || i
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || b(e);
                    },
              ref: n,
              target: s,
            })
          );
        });
      var Zo = t.forwardRef(function (e, n) {
        var r = e["aria-current"],
          a = void 0 === r ? "page" : r,
          o = e.caseSensitive,
          i = void 0 !== o && o,
          l = e.className,
          u = void 0 === l ? "" : l,
          s = e.end,
          c = void 0 !== s && s,
          f = e.style,
          d = e.to,
          p = e.children,
          h = qo(e, Qo),
          m = ge(d, { relative: h.relative }),
          v = me(),
          y = t.useContext(ue),
          g = t.useContext(ce).navigator,
          b = g.encodeLocation ? g.encodeLocation(m).pathname : m.pathname,
          w = v.pathname,
          x =
            y && y.navigation && y.navigation.location
              ? y.navigation.location.pathname
              : null;
        i ||
          ((w = w.toLowerCase()),
          (x = x ? x.toLowerCase() : null),
          (b = b.toLowerCase()));
        var k,
          S = w === b || (!c && w.startsWith(b) && "/" === w.charAt(b.length)),
          E =
            null != x &&
            (x === b || (!c && x.startsWith(b) && "/" === x.charAt(b.length))),
          C = S ? a : void 0;
        k =
          "function" === typeof u
            ? u({ isActive: S, isPending: E })
            : [u, S ? "active" : null, E ? "pending" : null]
                .filter(Boolean)
                .join(" ");
        var N = "function" === typeof f ? f({ isActive: S, isPending: E }) : f;
        return t.createElement(
          Xo,
          $o({}, h, {
            "aria-current": C,
            className: k,
            ref: n,
            style: N,
            to: d,
          }),
          "function" === typeof p ? p({ isActive: S, isPending: E }) : p
        );
      });
      var ei, ti;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(ei || (ei = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(ti || (ti = {}));
      var ni = function () {
          return (0, st.jsxs)("section", {
            className: "privacy policy",
            style: {
              maxWidth: 500,
              margin: "auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
            children: [
              (0, st.jsx)("h3", { children: "Privacy Policy" }),
              (0, st.jsx)("p", {
                children:
                  "This Privacy Policy outlines the types of personal data that we collect, how we use and protect that data, and your rights regarding your personal data. We are committed to protecting your privacy in accordance with the General Data Protection Regulation (GDPR).",
              }),
              (0, st.jsx)("h3", { children: "Collection of Personal Data" }),
              (0, st.jsx)("p", {
                children:
                  "We may collect personal data from you when you submit a contact form or request information from us. The personal data we may collect could include your name, email address and any other information that you provide for us.",
              }),
              (0, st.jsx)("h3", { children: "Use of Personal Data" }),
              (0, st.jsx)("p", {
                children:
                  "We may use your personal data to provide you with services, to communicate with you and to comply with legal obligations. We will never sell, rent, or share your personal data with any third parties without your consent, except as required by law.",
              }),
              (0, st.jsx)("h3", { children: "Protection of Personal Data" }),
              (0, st.jsx)("p", {
                children:
                  "We take appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. We limit access to your personal data to employees, contractors, and agents who need to know the data to perform their duties and who are bound by confidentiality obligations.",
              }),
              (0, st.jsx)("h3", { children: "Your Rights" }),
              (0, st.jsx)("p", {
                children:
                  "You have the right to access and receive a copy of your personal data that we hold. Request correction or erasure of your personal data. Object to the processing of your personal data. Restrict the processing of your personal data. Request a transfer of your personal data to another controller. To exercise your rights, please contact us using the contact information below.",
              }),
              (0, st.jsx)("h3", { children: "Changes to this Privacy Policy" }),
              (0, st.jsx)("p", {
                children:
                  "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on our website with the effective date of the revised policy.",
              }),
              (0, st.jsx)("h3", { children: "Contact Information" }),
              (0, st.jsxs)("p", {
                children: [
                  "If you have any questions or concerns about this Privacy Policy or our handling of your personal data, please contact TeckBuff at alexanderallen032@gmail.com or use the contact form",
                  " ",
                  (0, st.jsxs)(Xo, {
                    to: "/contactforms",
                    "aria-label": "Link to Contact page",
                    children: [" ", "here."],
                  }),
                ],
              }),
            ],
          });
        },
        ri = function () {
          var e = S((0, t.useState)(!1), 2),
            n = e[0],
            r = e[1],
            a = {
              section: { textAlign: "center", padding: 15 },
              button: { margin: 10 },
            };
          return (0, st.jsxs)("section", {
            className: "footer",
            style: a.section,
            children: [
              (0, st.jsx)("h4", { children: "Copyright Alex Allen 2023" }),
              (0, st.jsx)(Hn, {
                variant: "primary",
                onClick: function () {
                  r(function (e) {
                    return !e;
                  });
                },
                style: a.button,
                "aria-label": "Privacy Policy",
                className: "btn-custom",
                children: "Privacy Policy",
              }),
              n ? (0, st.jsx)(ni, {}) : null,
            ],
          });
        },
        ai = function () {
          var e = {
            cardStyle: {
              boxShadow: "10px 10px 10px 10px rgba(0, 71, 171, 0.15)",
              textAlign: "center",
            },
            containerStyle: { marginBottom: 30 },
            ulStyle: { listStyleType: "none", padding: 0 },
          };
          return (0, st.jsx)("section", {
            className: "certifications",
            children: (0, st.jsx)(mt, {
              style: e.containerStyle,
              children: (0, st.jsx)("div", {
                className: "tech-certifications",
                children: [
                  {
                    issuer: "Freecodecamp",
                    certifications: [
                      {
                        name: "Responsive Web Design",
                        url: "https://www.freecodecamp.org/certification/AlexAllen247/responsive-web-design",
                      },
                      {
                        name: "JavaScript Algorithms and Data Structures",
                        url: "https://www.freecodecamp.org/certification/AlexAllen247/javascript-algorithms-and-data-structures",
                      },
                      {
                        name: "Front End Development Libraries",
                        url: "https://www.freecodecamp.org/certification/AlexAllen247/front-end-development-libraries",
                      },
                      {
                        name: "Data Visualization",
                        url: "https://www.freecodecamp.org/certification/AlexAllen247/data-visualization",
                      },
                      {
                        name: "Relational Database",
                        url: "https://www.freecodecamp.org/certification/AlexAllen247/relational-database-v8",
                      },
                      {
                        name: "Back End Development and APIs",
                        url: "https://www.freecodecamp.org/certification/AlexAllen247/back-end-development-and-apis",
                      },
                      {
                        name: "Quality Assurance",
                        url: "https://www.freecodecamp.org/certification/AlexAllen247/quality-assurance-v7",
                      },
                      {
                        name: "Scientific Computing with Python",
                        url: "https://www.freecodecamp.org/certification/AlexAllen247/scientific-computing-with-python-v7",
                      },
                      {
                        name: "Data Analysis with Python",
                        url: "https://www.freecodecamp.org/certification/AlexAllen247/data-analysis-with-python-v7",
                      },
                      {
                        name: "Information Security",
                        url: "https://www.freecodecamp.org/certification/AlexAllen247/information-security-v7",
                      },
                      {
                        name: "Machine Learning with Python",
                        url: "https://www.freecodecamp.org/certification/AlexAllen247/machine-learning-with-python-v7",
                      },
                      {
                        name: "Legacy Full Stack",
                        url: "https://www.freecodecamp.org/certification/AlexAllen247/full-stack",
                      },
                      {
                        name: "Legacy Information Security and Quality Assurance",
                        url: "https://www.freecodecamp.org/certification/AlexAllen247/information-security-and-quality-assurance",
                      },
                    ],
                  },
                  {
                    issuer: "HarvardX",
                    certifications: [
                      {
                        name: "Cs50x Introduction to Computer Science",
                        url: "https://courses.edx.org/certificates/619e43f8e6df4978b8f52423b9f144a0",
                      },
                      {
                        name: "Cs50P Introduction to Programming with Python",
                        url: "https://courses.edx.org/certificates/e8ea109e268648baa7fa99fa1c4fd7e7",
                      },
                      {
                        name: "Cs50W Web Programming with Python and JavaScript",
                        url: "https://courses.edx.org/certificates/0ebcda0353794a08bb8f49c1a192be34",
                      },
                      {
                        name: "Computer Science for Python Programming",
                        url: "https://credentials.edx.org/credentials/eb84f62efb374619945ffe2fceab7e5e",
                      },
                      {
                        name: "Computer Science for Web Programming",
                        url: "https://credentials.edx.org/credentials/900878f45abd4e97812b692cc5de066f/",
                      },
                    ],
                  },
                  {
                    issuer: "Full Stack Open",
                    certifications: [
                      {
                        name: "Full Stack Open",
                        url: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/97a5fd22a95471e08c2833a2fa3c62de",
                      },
                      {
                        name: "GraphQL",
                        url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/43e314e8e88157295071c2882d2c3023",
                      },
                      {
                        name: "TypeScript",
                        url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/e8a9b525e19dccfc12ab7d6dd72015f7",
                      },
                      {
                        name: "React Native",
                        url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-react-native-2020/en/52bdef6e9e622e635253170a579021e8",
                      },
                      {
                        name: "CI/CD",
                        url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-cicd/en/e12fc99e45e0529480a8d2e4fdda93a5",
                      },
                      {
                        name: "Containers",
                        url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-containers/en/6a593987ea59dc4dee04921c7aa3acfb",
                      },
                      {
                        name: "Relational Databases",
                        url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-psql/en/65f9cceed7dde2f5ed4d43298636468e",
                      },
                    ],
                  },
                ].map(function (t) {
                  return (0, st.jsxs)(
                    Mt,
                    {
                      className: "my-3",
                      style: e.cardStyle,
                      children: [
                        (0, st.jsx)(Mt.Header, {
                          children: (0, st.jsx)("h3", { children: t.issuer }),
                        }),
                        (0, st.jsx)(Mt.Body, {
                          children: (0, st.jsx)("ul", {
                            style: e.ulStyle,
                            children: t.certifications.map(function (e) {
                              return (0,
                              st.jsx)("li", { children: (0, st.jsx)("a", { href: e.url, target: "_blank", rel: "noreferrer", "aria-label": "View ".concat(e.name, " certification"), children: e.name }) }, e.url);
                            }),
                          }),
                        }),
                      ],
                    },
                    t.issuer
                  );
                }),
              }),
            }),
          });
        },
        oi = n.p + "static/media/ProfilePicture.784b86225117eea256b5.JPG",
        ii = function () {
          var e = {
            h2: {
              marginBottom: "5px",
              marginTop: "20px",
              textDecoration: "underline",
            },
            ul: {
              marginBottom: "10px",
              listStyleType: "none",
              padding: 10,
              fontSize: 20,
            },
            li: { marginBottom: 10 },
          };
          return (0, st.jsxs)("section", {
            className: "about",
            children: [
              (0, st.jsx)("h3", { style: e.h2, children: "Key Competencies" }),
              (0, st.jsxs)("ul", {
                style: e.ul,
                children: [
                  (0, st.jsxs)("li", {
                    style: e.li,
                    children: [
                      (0, st.jsx)("strong", {
                        children: "Full Stack Web Development:",
                      }),
                      " Proficient in front-end and back-end technologies, with a strong foundation in web design, coding, and testing.",
                    ],
                  }),
                  (0, st.jsxs)("li", {
                    style: e.li,
                    children: [
                      (0, st.jsx)("strong", {
                        children: "Problem Solving and Adaptability:",
                      }),
                      " Adept at tackling complex challenges and adapting to new situations with creativity and resourcefulness.",
                    ],
                  }),
                  (0, st.jsxs)("li", {
                    style: e.li,
                    children: [
                      (0, st.jsx)("strong", {
                        children: "Health and Fitness Expertise:",
                      }),
                      " Over a decade of experience in personal training, health management, and wellness program development.",
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        li = function () {
          var e = S((0, t.useState)(!1), 2),
            n = e[0],
            r = e[1],
            a = {
              cardStyle: {
                boxShadow: "10px 10px 10px 10px rgba(0, 71, 171, 0.15)",
                textAlign: "center",
              },
              button: { margin: 10 },
              header: {
                fontSize: "2rem",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
              },
              image: {
                width: "40%",
                height: "40%",
                objectFit: "contain",
                border: "2px solid #0047ab",
                marginBottom: 20,
              },
              paragraph: { marginBottom: "1rem", fontSize: 20 },
            };
          return (0, st.jsx)("section", {
            className: "profile",
            children: (0, st.jsx)(mt, {
              children: (0, st.jsxs)(Mt, {
                className: "my-3",
                style: a.cardStyle,
                children: [
                  (0, st.jsx)(Mt.Header, {
                    children: (0, st.jsx)("h2", {
                      style: a.header,
                      children: "Alex Allen",
                    }),
                  }),
                  (0, st.jsxs)(Mt.Body, {
                    children: [
                      (0, st.jsx)("div", {
                        children: (0, st.jsx)("img", {
                          src: oi,
                          alt: "profile",
                          "aria-label": "Profile picture",
                          style: a.image,
                        }),
                      }),
                      (0, st.jsxs)("div", {
                        children: [
                          (0, st.jsx)("p", {
                            style: a.paragraph,
                            children:
                              "Hi, I'm Alex, full stack developer, multi award winning Master Trainer and TeckBuff.",
                          }),
                          (0, st.jsx)("p", {
                            style: a.paragraph,
                            children:
                              "Why TeckBuff? That's what my friends and family call me.",
                          }),
                          (0, st.jsx)("p", {
                            style: a.paragraph,
                            children:
                              "I am a motivated professional with a unique combination of expertise in web development and the health and fitness industry.",
                          }),
                          (0, st.jsx)("p", {
                            style: a.paragraph,
                            children:
                              "I am driven by commitment to create innovative and user-friendly web applications tailored to the needs of diverse clients.",
                          }),
                          (0, st.jsx)(Hn, {
                            variant: "primary",
                            onClick: function () {
                              r(function (e) {
                                return !e;
                              });
                            },
                            style: a.button,
                            "aria-label": "About section for Alex Allen",
                            className: "btn-custom",
                            children: "More",
                          }),
                          n ? (0, st.jsx)(ii, {}) : null,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        ui = n.p + "static/media/TeckbuffBanner.142526db67d3f7066186.png",
        si = function () {
          var e = S((0, t.useState)(window.innerWidth), 2),
            n = e[0],
            r = e[1],
            a = S((0, t.useState)(!1), 2),
            o = a[0],
            i = a[1];
          (0, t.useEffect)(function () {
            var e = function () {
              return r(window.innerWidth);
            };
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
            (0, t.useEffect)(function () {
              i(!0);
            }, []);
          var l = {
            section: { textAlign: "center" },
            image: {
              maxWidth: "100%",
              width: n <= 767 ? "100%" : "initial",
              height: n <= 767 ? "auto" : "initial",
            },
          };
          return (0, st.jsxs)("section", {
            style: l.section,
            className: "header",
            children: [
              (0, st.jsx)("div", {
                className: "container",
                children:
                  o &&
                  (0, st.jsx)("img", {
                    src: ui,
                    alt: "My Banner",
                    style: l.image,
                    className: "animated-image",
                    "aria-label": "Banner for TeckBuff.com",
                  }),
              }),
              (0, st.jsx)("div", { className: "animated-line" }),
            ],
          });
        },
        ci = function () {
          var e = me().pathname;
          return (
            (0, t.useEffect)(
              function () {
                window.scrollTo(0, 0);
              },
              [e]
            ),
            null
          );
        },
        fi = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          return null != e ? String(e) : t || null;
        },
        di = t.createContext(null),
        pi = ["bsPrefix", "className", "as"],
        hi = t.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.as,
            o = it(e, pi);
          n = dt(n, "navbar-brand");
          var i = a || (o.href ? "a" : "span");
          return (0,
          st.jsx)(i, at(at({}, o), {}, { ref: t, className: ut()(r, n) }));
        });
      hi.displayName = "NavbarBrand";
      var mi = hi;
      var vi,
        yi = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t
            .filter(function (e) {
              return null != e;
            })
            .reduce(function (e, t) {
              if ("function" !== typeof t)
                throw new Error(
                  "Invalid Argument Type, must only provide functions, undefined, or null."
                );
              return null === e
                ? t
                : function () {
                    for (
                      var n = arguments.length, r = new Array(n), a = 0;
                      a < n;
                      a++
                    )
                      r[a] = arguments[a];
                    e.apply(this, r), t.apply(this, r);
                  };
            }, null);
        },
        gi = [
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "className",
          "children",
          "dimension",
          "in",
          "timeout",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "getDimensionValue",
        ],
        bi = {
          height: ["marginTop", "marginBottom"],
          width: ["marginLeft", "marginRight"],
        };
      function wi(e, t) {
        var n = t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],
          r = bi[e];
        return n + parseInt(xr(t, r[0]), 10) + parseInt(xr(t, r[1]), 10);
      }
      var xi =
          (nt((vi = {}), ur, "collapse"),
          nt(vi, fr, "collapsing"),
          nt(vi, sr, "collapsing"),
          nt(vi, cr, "collapse show"),
          vi),
        ki = t.forwardRef(function (e, n) {
          var r = e.onEnter,
            a = e.onEntering,
            o = e.onEntered,
            i = e.onExit,
            l = e.onExiting,
            u = e.className,
            s = e.children,
            c = e.dimension,
            f = void 0 === c ? "height" : c,
            d = e.in,
            p = void 0 !== d && d,
            h = e.timeout,
            m = void 0 === h ? 300 : h,
            v = e.mountOnEnter,
            y = void 0 !== v && v,
            g = e.unmountOnExit,
            b = void 0 !== g && g,
            w = e.appear,
            x = void 0 !== w && w,
            k = e.getDimensionValue,
            S = void 0 === k ? wi : k,
            E = it(e, gi),
            C = "function" === typeof f ? f() : f,
            N = (0, t.useMemo)(
              function () {
                return yi(function (e) {
                  e.style[C] = "0";
                }, r);
              },
              [C, r]
            ),
            O = (0, t.useMemo)(
              function () {
                return yi(function (e) {
                  var t = "scroll"
                    .concat(C[0].toUpperCase())
                    .concat(C.slice(1));
                  e.style[C] = "".concat(e[t], "px");
                }, a);
              },
              [C, a]
            ),
            j = (0, t.useMemo)(
              function () {
                return yi(function (e) {
                  e.style[C] = null;
                }, o);
              },
              [C, o]
            ),
            P = (0, t.useMemo)(
              function () {
                return yi(function (e) {
                  (e.style[C] = "".concat(S(C, e), "px")), Lr(e);
                }, i);
              },
              [i, S, C]
            ),
            R = (0, t.useMemo)(
              function () {
                return yi(function (e) {
                  e.style[C] = null;
                }, l);
              },
              [C, l]
            );
          return (0, st.jsx)(
            Ir,
            at(
              at({ ref: n, addEndListener: _r }, E),
              {},
              {
                "aria-expanded": E.role ? p : null,
                onEnter: N,
                onEntering: O,
                onEntered: j,
                onExit: P,
                onExiting: R,
                childRef: s.ref,
                in: p,
                timeout: m,
                mountOnEnter: y,
                unmountOnExit: b,
                appear: x,
                children: function (e, n) {
                  return t.cloneElement(
                    s,
                    at(
                      at({}, n),
                      {},
                      {
                        className: ut()(
                          u,
                          s.props.className,
                          xi[e],
                          "width" === C && "collapse-horizontal"
                        ),
                      }
                    )
                  );
                },
              }
            )
          );
        }),
        Si = t.createContext(null);
      Si.displayName = "NavbarContext";
      var Ei = Si,
        Ci = ["children", "bsPrefix"],
        Ni = t.forwardRef(function (e, n) {
          var r = e.children,
            a = e.bsPrefix,
            o = it(e, Ci);
          a = dt(a, "navbar-collapse");
          var i = (0, t.useContext)(Ei);
          return (0,
          st.jsx)(ki, at(at({ in: !(!i || !i.expanded) }, o), {}, { children: (0, st.jsx)("div", { ref: n, className: a, children: r }) }));
        });
      Ni.displayName = "NavbarCollapse";
      var Oi = Ni,
        ji = ["bsPrefix", "className", "children", "label", "as", "onClick"],
        Pi = t.forwardRef(function (e, n) {
          var r = e.bsPrefix,
            a = e.className,
            o = e.children,
            i = e.label,
            l = void 0 === i ? "Toggle navigation" : i,
            u = e.as,
            s = void 0 === u ? "button" : u,
            c = e.onClick,
            f = it(e, ji);
          r = dt(r, "navbar-toggler");
          var d = (0, t.useContext)(Ei) || {},
            p = d.onToggle,
            h = d.expanded,
            m = Xn(function (e) {
              c && c(e), p && p();
            });
          return (
            "button" === s && (f.type = "button"),
            (0, st.jsx)(
              s,
              at(
                at({}, f),
                {},
                {
                  ref: n,
                  onClick: m,
                  "aria-label": l,
                  className: ut()(a, r, !h && "collapsed"),
                  children:
                    o ||
                    (0, st.jsx)("span", { className: "".concat(r, "-icon") }),
                }
              )
            )
          );
        });
      Pi.displayName = "NavbarToggle";
      var Ri = Pi,
        Ti = new WeakMap(),
        _i = function (e, t) {
          if (e && t) {
            var n = Ti.get(t) || new Map();
            Ti.set(t, n);
            var r = n.get(e);
            return (
              r || (((r = t.matchMedia(e)).refCount = 0), n.set(r.media, r)), r
            );
          }
        };
      function Li(e, n) {
        void 0 === n && (n = "undefined" === typeof window ? void 0 : window);
        var r = _i(e, n),
          a = (0, t.useState)(function () {
            return !!r && r.matches;
          }),
          o = a[0],
          i = a[1];
        return (
          er(
            function () {
              var t = _i(e, n);
              if (!t) return i(!1);
              var r = Ti.get(n),
                a = function () {
                  i(t.matches);
                };
              return (
                t.refCount++,
                t.addListener(a),
                a(),
                function () {
                  t.removeListener(a),
                    t.refCount--,
                    t.refCount <= 0 && (null == r || r.delete(t.media)),
                    (t = void 0);
                }
              );
            },
            [e]
          ),
          o
        );
      }
      var Ai = (function (e) {
        var n = Object.keys(e);
        function r(e, t) {
          return e === t ? t : e ? e + " and " + t : t;
        }
        function a(t) {
          var r = (function (e) {
              return n[Math.min(n.indexOf(e) + 1, n.length - 1)];
            })(t),
            a = e[r];
          return (
            "(max-width: " +
            (a =
              "number" === typeof a
                ? a - 0.2 + "px"
                : "calc(" + a + " - 0.2px)") +
            ")"
          );
        }
        return function (n, o, i) {
          var l, u;
          return (
            "object" === typeof n
              ? ((l = n), (i = o), (o = !0))
              : (((u = {})[n] = o = o || !0), (l = u)),
            Li(
              (0, t.useMemo)(
                function () {
                  return Object.entries(l).reduce(function (t, n) {
                    var o = n[0],
                      i = n[1];
                    return (
                      ("up" !== i && !0 !== i) ||
                        (t = r(
                          t,
                          (function (t) {
                            var n = e[t];
                            return (
                              "number" === typeof n && (n += "px"),
                              "(min-width: " + n + ")"
                            );
                          })(o)
                        )),
                      ("down" !== i && !0 !== i) || (t = r(t, a(o))),
                      t
                    );
                  }, "");
                },
                [JSON.stringify(l)]
              ),
              i
            )
          );
        };
      })({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
      function Di(e) {
        void 0 === e && (e = mr());
        try {
          var t = e.activeElement;
          return t && t.nodeName ? t : null;
        } catch (fu) {
          return e.body;
        }
      }
      function zi(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      function Fi(e) {
        var n = (function (e) {
          var n = (0, t.useRef)(e);
          return (n.current = e), n;
        })(e);
        (0, t.useEffect)(function () {
          return function () {
            return n.current();
          };
        }, []);
      }
      var Ii = "data-rr-ui-";
      function Bi(e) {
        return "".concat(Ii).concat(e);
      }
      var Mi = Bi("modal-open"),
        Ui = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = t.ownerDocument,
              r = t.handleContainerOverflow,
              a = void 0 === r || r,
              o = t.isRTL,
              i = void 0 !== o && o;
            u(this, e),
              (this.handleContainerOverflow = a),
              (this.isRTL = i),
              (this.modals = []),
              (this.ownerDocument = n);
          }
          return (
            d(e, [
              {
                key: "getScrollbarWidth",
                value: function () {
                  return (function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : document,
                      t = e.defaultView;
                    return Math.abs(
                      t.innerWidth - e.documentElement.clientWidth
                    );
                  })(this.ownerDocument);
                },
              },
              {
                key: "getElement",
                value: function () {
                  return (this.ownerDocument || document).body;
                },
              },
              { key: "setModalAttributes", value: function (e) {} },
              { key: "removeModalAttributes", value: function (e) {} },
              {
                key: "setContainerStyle",
                value: function (e) {
                  var t = { overflow: "hidden" },
                    n = this.isRTL ? "paddingLeft" : "paddingRight",
                    r = this.getElement();
                  (e.style = nt({ overflow: r.style.overflow }, n, r.style[n])),
                    e.scrollBarWidth &&
                      (t[n] = "".concat(
                        parseInt(xr(r, n) || "0", 10) + e.scrollBarWidth,
                        "px"
                      )),
                    r.setAttribute(Mi, ""),
                    xr(r, t);
                },
              },
              {
                key: "reset",
                value: function () {
                  var e = this;
                  l(this.modals).forEach(function (t) {
                    return e.remove(t);
                  });
                },
              },
              {
                key: "removeContainerStyle",
                value: function (e) {
                  var t = this.getElement();
                  t.removeAttribute(Mi), Object.assign(t.style, e.style);
                },
              },
              {
                key: "add",
                value: function (e) {
                  var t = this.modals.indexOf(e);
                  return -1 !== t
                    ? t
                    : ((t = this.modals.length),
                      this.modals.push(e),
                      this.setModalAttributes(e),
                      0 !== t ||
                        ((this.state = {
                          scrollBarWidth: this.getScrollbarWidth(),
                          style: {},
                        }),
                        this.handleContainerOverflow &&
                          this.setContainerStyle(this.state)),
                      t);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = this.modals.indexOf(e);
                  -1 !== t &&
                    (this.modals.splice(t, 1),
                    !this.modals.length &&
                      this.handleContainerOverflow &&
                      this.removeContainerStyle(this.state),
                    this.removeModalAttributes(e));
                },
              },
              {
                key: "isTopModal",
                value: function (e) {
                  return (
                    !!this.modals.length &&
                    this.modals[this.modals.length - 1] === e
                  );
                },
              },
            ]),
            e
          );
        })(),
        Wi = Ui,
        Hi = (0, t.createContext)(kr ? window : void 0);
      Hi.Provider;
      function Vi() {
        return (0, t.useContext)(Hi);
      }
      var $i = function (e, t) {
        return kr
          ? null == e
            ? (t || mr()).body
            : ("function" === typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
          : null;
      };
      var qi = function (e) {
        var n = e.children,
          r = e.in,
          a = e.onExited,
          o = e.mountOnEnter,
          i = e.unmountOnExit,
          l = (0, t.useRef)(null),
          u = (0, t.useRef)(r),
          s = Xn(a);
        (0, t.useEffect)(
          function () {
            r ? (u.current = !0) : s(l.current);
          },
          [r, s]
        );
        var c = Dr(l, n.ref),
          f = (0, t.cloneElement)(n, { ref: c });
        return r ? f : i || (!u.current && o) ? null : f;
      };
      function Ki(e) {
        var n = e.children,
          r = e.in,
          a = e.onExited,
          o = e.onEntered,
          i = e.transition,
          l = S((0, t.useState)(!r), 2),
          u = l[0],
          s = l[1];
        r && u && s(!1);
        var c = (function (e) {
            var n = e.in,
              r = e.onTransition,
              a = (0, t.useRef)(null),
              o = (0, t.useRef)(!0),
              i = Xn(r);
            return (
              er(
                function () {
                  if (a.current) {
                    var e = !1;
                    return (
                      i({
                        in: n,
                        element: a.current,
                        initial: o.current,
                        isStale: function () {
                          return e;
                        },
                      }),
                      function () {
                        e = !0;
                      }
                    );
                  }
                },
                [n, i]
              ),
              er(function () {
                return (
                  (o.current = !1),
                  function () {
                    o.current = !0;
                  }
                );
              }, []),
              a
            );
          })({
            in: !!r,
            onTransition: function (e) {
              Promise.resolve(i(e)).then(
                function () {
                  e.isStale() ||
                    (e.in
                      ? null == o || o(e.element, e.initial)
                      : (s(!0), null == a || a(e.element)));
                },
                function (t) {
                  throw (e.in || s(!0), t);
                }
              );
            },
          }),
          f = Dr(c, n.ref);
        return u && !r ? null : (0, t.cloneElement)(n, { ref: f });
      }
      function Qi(e, t, n) {
        return e
          ? (0, st.jsx)(e, Object.assign({}, n))
          : t
          ? (0, st.jsx)(Ki, Object.assign({}, n, { transition: t }))
          : (0, st.jsx)(qi, Object.assign({}, n));
      }
      var Gi,
        Ji = [
          "show",
          "role",
          "className",
          "style",
          "children",
          "backdrop",
          "keyboard",
          "onBackdropClick",
          "onEscapeKeyDown",
          "transition",
          "runTransition",
          "backdropTransition",
          "runBackdropTransition",
          "autoFocus",
          "enforceFocus",
          "restoreFocus",
          "restoreFocusOptions",
          "renderDialog",
          "renderBackdrop",
          "manager",
          "container",
          "onShow",
          "onHide",
          "onExit",
          "onExited",
          "onExiting",
          "onEnter",
          "onEntering",
          "onEntered",
        ];
      function Yi(e) {
        var n = Vi(),
          r =
            e ||
            (function (e) {
              return (
                Gi ||
                  (Gi = new Wi({
                    ownerDocument: null == e ? void 0 : e.document,
                  })),
                Gi
              );
            })(n),
          a = (0, t.useRef)({ dialog: null, backdrop: null });
        return Object.assign(a.current, {
          add: function () {
            return r.add(a.current);
          },
          remove: function () {
            return r.remove(a.current);
          },
          isTopModal: function () {
            return r.isTopModal(a.current);
          },
          setDialogRef: (0, t.useCallback)(function (e) {
            a.current.dialog = e;
          }, []),
          setBackdropRef: (0, t.useCallback)(function (e) {
            a.current.backdrop = e;
          }, []),
        });
      }
      var Xi = (0, t.forwardRef)(function (e, n) {
        var r = e.show,
          a = void 0 !== r && r,
          o = e.role,
          i = void 0 === o ? "dialog" : o,
          l = e.className,
          u = e.style,
          s = e.children,
          c = e.backdrop,
          f = void 0 === c || c,
          d = e.keyboard,
          p = void 0 === d || d,
          h = e.onBackdropClick,
          m = e.onEscapeKeyDown,
          v = e.transition,
          y = e.runTransition,
          g = e.backdropTransition,
          b = e.runBackdropTransition,
          w = e.autoFocus,
          x = void 0 === w || w,
          k = e.enforceFocus,
          E = void 0 === k || k,
          C = e.restoreFocus,
          N = void 0 === C || C,
          O = e.restoreFocusOptions,
          j = e.renderDialog,
          P = e.renderBackdrop,
          R =
            void 0 === P
              ? function (e) {
                  return (0, st.jsx)("div", Object.assign({}, e));
                }
              : P,
          T = e.manager,
          _ = e.container,
          L = e.onShow,
          A = e.onHide,
          D = void 0 === A ? function () {} : A,
          z = e.onExit,
          F = e.onExited,
          I = e.onExiting,
          B = e.onEnter,
          M = e.onEntering,
          U = e.onEntered,
          W = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, Ji),
          H = (function (e, n) {
            var r = Vi(),
              a = S(
                (0, t.useState)(function () {
                  return $i(e, null == r ? void 0 : r.document);
                }),
                2
              ),
              o = a[0],
              i = a[1];
            if (!o) {
              var l = $i(e);
              l && i(l);
            }
            return (
              (0, t.useEffect)(
                function () {
                  n && o && n(o);
                },
                [n, o]
              ),
              (0, t.useEffect)(
                function () {
                  var t = $i(e);
                  t !== o && i(t);
                },
                [e, o]
              ),
              o
            );
          })(_),
          V = Yi(T),
          $ = (function () {
            var e = (0, t.useRef)(!0),
              n = (0, t.useRef)(function () {
                return e.current;
              });
            return (
              (0, t.useEffect)(function () {
                return (
                  (e.current = !0),
                  function () {
                    e.current = !1;
                  }
                );
              }, []),
              n.current
            );
          })(),
          q = (function (e) {
            var n = (0, t.useRef)(null);
            return (
              (0, t.useEffect)(function () {
                n.current = e;
              }),
              n.current
            );
          })(a),
          K = S((0, t.useState)(!a), 2),
          Q = K[0],
          G = K[1],
          J = (0, t.useRef)(null);
        (0, t.useImperativeHandle)(
          n,
          function () {
            return V;
          },
          [V]
        ),
          kr && !q && a && (J.current = Di()),
          a && Q && G(!1);
        var Y = Xn(function () {
            if (
              (V.add(),
              (re.current = jr(document, "keydown", te)),
              (ne.current = jr(
                document,
                "focus",
                function () {
                  return setTimeout(Z);
                },
                !0
              )),
              L && L(),
              x)
            ) {
              var e = Di(document);
              V.dialog &&
                e &&
                !zi(V.dialog, e) &&
                ((J.current = e), V.dialog.focus());
            }
          }),
          X = Xn(function () {
            var e;
            (V.remove(),
            null == re.current || re.current(),
            null == ne.current || ne.current(),
            N) &&
              (null == (e = J.current) || null == e.focus || e.focus(O),
              (J.current = null));
          });
        (0, t.useEffect)(
          function () {
            a && H && Y();
          },
          [a, H, Y]
        ),
          (0, t.useEffect)(
            function () {
              Q && X();
            },
            [Q, X]
          ),
          Fi(function () {
            X();
          });
        var Z = Xn(function () {
            if (E && $() && V.isTopModal()) {
              var e = Di();
              V.dialog && e && !zi(V.dialog, e) && V.dialog.focus();
            }
          }),
          ee = Xn(function (e) {
            e.target === e.currentTarget &&
              (null == h || h(e), !0 === f && D());
          }),
          te = Xn(function (e) {
            p &&
              (function (e) {
                return "Escape" === e.code || 27 === e.keyCode;
              })(e) &&
              V.isTopModal() &&
              (null == m || m(e), e.defaultPrevented || D());
          }),
          ne = (0, t.useRef)(),
          re = (0, t.useRef)();
        if (!H) return null;
        var ae = Object.assign(
            {
              role: i,
              ref: V.setDialogRef,
              "aria-modal": "dialog" === i || void 0,
            },
            W,
            { style: u, className: l, tabIndex: -1 }
          ),
          oe = j
            ? j(ae)
            : (0, st.jsx)(
                "div",
                Object.assign({}, ae, {
                  children: t.cloneElement(s, { role: "document" }),
                })
              );
        oe = Qi(v, y, {
          unmountOnExit: !0,
          mountOnEnter: !0,
          appear: !0,
          in: !!a,
          onExit: z,
          onExiting: I,
          onExited: function () {
            G(!0), null == F || F.apply(void 0, arguments);
          },
          onEnter: B,
          onEntering: M,
          onEntered: U,
          children: oe,
        });
        var ie = null;
        return (
          f &&
            ((ie = R({ ref: V.setBackdropRef, onClick: ee })),
            (ie = Qi(g, b, {
              in: !!a,
              appear: !0,
              mountOnEnter: !0,
              unmountOnExit: !0,
              children: ie,
            }))),
          (0, st.jsx)(st.Fragment, {
            children: ar.createPortal(
              (0, st.jsxs)(st.Fragment, { children: [ie, oe] }),
              H
            ),
          })
        );
      });
      Xi.displayName = "Modal";
      var Zi,
        el = Object.assign(Xi, { Manager: Wi }),
        tl = bt("offcanvas-body"),
        nl = [
          "bsPrefix",
          "className",
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
        ],
        rl = (nt((Zi = {}), sr, "show"), nt(Zi, cr, "show"), Zi),
        al = t.forwardRef(function (e, n) {
          var r = e.bsPrefix,
            a = e.className,
            o = e.children,
            i = e.in,
            l = void 0 !== i && i,
            u = e.mountOnEnter,
            s = void 0 !== u && u,
            c = e.unmountOnExit,
            f = void 0 !== c && c,
            d = e.appear,
            p = void 0 !== d && d,
            h = it(e, nl);
          return (
            (r = dt(r, "offcanvas")),
            (0, st.jsx)(
              Ir,
              at(
                at(
                  {
                    ref: n,
                    addEndListener: _r,
                    in: l,
                    mountOnEnter: s,
                    unmountOnExit: f,
                    appear: p,
                  },
                  h
                ),
                {},
                {
                  childRef: o.ref,
                  children: function (e, n) {
                    return t.cloneElement(
                      o,
                      at(
                        at({}, n),
                        {},
                        {
                          className: ut()(
                            a,
                            o.props.className,
                            (e === sr || e === fr) && "".concat(r, "-toggling"),
                            rl[e]
                          ),
                        }
                      )
                    );
                  },
                }
              )
            )
          );
        });
      al.displayName = "OffcanvasToggling";
      var ol = al,
        il = t.createContext({ onHide: function () {} }),
        ll = [
          "closeLabel",
          "closeVariant",
          "closeButton",
          "onHide",
          "children",
        ],
        ul = t.forwardRef(function (e, n) {
          var r = e.closeLabel,
            a = void 0 === r ? "Close" : r,
            o = e.closeVariant,
            i = e.closeButton,
            l = void 0 !== i && i,
            u = e.onHide,
            s = e.children,
            c = it(e, ll),
            f = (0, t.useContext)(il),
            d = Xn(function () {
              null == f || f.onHide(), null == u || u();
            });
          return (0,
          st.jsxs)("div", at(at({ ref: n }, c), {}, { children: [s, l && (0, st.jsx)(qr, { "aria-label": a, variant: o, onClick: d })] }));
        }),
        sl = ul,
        cl = ["bsPrefix", "className", "closeLabel", "closeButton"],
        fl = t.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.closeLabel,
            o = void 0 === a ? "Close" : a,
            i = e.closeButton,
            l = void 0 !== i && i,
            u = it(e, cl);
          return (
            (n = dt(n, "offcanvas-header")),
            (0, st.jsx)(
              sl,
              at(
                at({ ref: t }, u),
                {},
                { className: ut()(r, n), closeLabel: o, closeButton: l }
              )
            )
          );
        });
      fl.displayName = "OffcanvasHeader";
      var dl = fl,
        pl = bt("offcanvas-title", { Component: wt("h5") });
      function hl() {
        return (
          (hl =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = (function (e, t) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(e, t) &&
                      null !== (e = m(e));

                    );
                    return e;
                  })(e, t);
                  if (r) {
                    var a = Object.getOwnPropertyDescriptor(r, t);
                    return a.get
                      ? a.get.call(arguments.length < 3 ? e : n)
                      : a.value;
                  }
                }),
          hl.apply(this, arguments)
        );
      }
      var ml = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function vl(e, t) {
        return ml(e.querySelectorAll(t));
      }
      function yl(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      var gl,
        bl = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        wl = ".sticky-top",
        xl = ".navbar-toggler",
        kl = (function (e) {
          h(n, e);
          var t = g(n);
          function n() {
            return u(this, n), t.apply(this, arguments);
          }
          return (
            d(n, [
              {
                key: "adjustAndStore",
                value: function (e, t, n) {
                  var r = t.style[e];
                  (t.dataset[e] = r),
                    xr(t, nt({}, e, "".concat(parseFloat(xr(t, e)) + n, "px")));
                },
              },
              {
                key: "restore",
                value: function (e, t) {
                  var n = t.dataset[e];
                  void 0 !== n && (delete t.dataset[e], xr(t, nt({}, e, n)));
                },
              },
              {
                key: "setContainerStyle",
                value: function (e) {
                  var t = this;
                  hl(m(n.prototype), "setContainerStyle", this).call(this, e);
                  var r,
                    a,
                    o = this.getElement();
                  if (
                    ((a = "modal-open"),
                    (r = o).classList
                      ? r.classList.add(a)
                      : (function (e, t) {
                          return e.classList
                            ? !!t && e.classList.contains(t)
                            : -1 !==
                                (
                                  " " +
                                  (e.className.baseVal || e.className) +
                                  " "
                                ).indexOf(" " + t + " ");
                        })(r, a) ||
                        ("string" === typeof r.className
                          ? (r.className = r.className + " " + a)
                          : r.setAttribute(
                              "class",
                              ((r.className && r.className.baseVal) || "") +
                                " " +
                                a
                            )),
                    e.scrollBarWidth)
                  ) {
                    var i = this.isRTL ? "paddingLeft" : "paddingRight",
                      l = this.isRTL ? "marginLeft" : "marginRight";
                    vl(o, bl).forEach(function (n) {
                      return t.adjustAndStore(i, n, e.scrollBarWidth);
                    }),
                      vl(o, wl).forEach(function (n) {
                        return t.adjustAndStore(l, n, -e.scrollBarWidth);
                      }),
                      vl(o, xl).forEach(function (n) {
                        return t.adjustAndStore(l, n, e.scrollBarWidth);
                      });
                  }
                },
              },
              {
                key: "removeContainerStyle",
                value: function (e) {
                  var t = this;
                  hl(m(n.prototype), "removeContainerStyle", this).call(
                    this,
                    e
                  );
                  var r,
                    a,
                    o = this.getElement();
                  (a = "modal-open"),
                    (r = o).classList
                      ? r.classList.remove(a)
                      : "string" === typeof r.className
                      ? (r.className = yl(r.className, a))
                      : r.setAttribute(
                          "class",
                          yl((r.className && r.className.baseVal) || "", a)
                        );
                  var i = this.isRTL ? "paddingLeft" : "paddingRight",
                    l = this.isRTL ? "marginLeft" : "marginRight";
                  vl(o, bl).forEach(function (e) {
                    return t.restore(i, e);
                  }),
                    vl(o, wl).forEach(function (e) {
                      return t.restore(l, e);
                    }),
                    vl(o, xl).forEach(function (e) {
                      return t.restore(l, e);
                    });
                },
              },
            ]),
            n
          );
        })(Wi);
      var Sl = kl,
        El = [
          "bsPrefix",
          "className",
          "children",
          "aria-labelledby",
          "placement",
          "responsive",
          "show",
          "backdrop",
          "keyboard",
          "scroll",
          "onEscapeKeyDown",
          "onShow",
          "onHide",
          "container",
          "autoFocus",
          "enforceFocus",
          "restoreFocus",
          "restoreFocusOptions",
          "onEntered",
          "onExit",
          "onExiting",
          "onEnter",
          "onEntering",
          "onExited",
          "backdropClassName",
          "manager",
          "renderStaticNode",
        ];
      function Cl(e) {
        return (0, st.jsx)(ol, at({}, e));
      }
      function Nl(e) {
        return (0, st.jsx)(Wr, at({}, e));
      }
      var Ol = t.forwardRef(function (e, n) {
        var r = e.bsPrefix,
          a = e.className,
          o = e.children,
          i = e["aria-labelledby"],
          l = e.placement,
          u = void 0 === l ? "start" : l,
          s = e.responsive,
          c = e.show,
          f = void 0 !== c && c,
          d = e.backdrop,
          p = void 0 === d || d,
          h = e.keyboard,
          m = void 0 === h || h,
          v = e.scroll,
          y = void 0 !== v && v,
          g = e.onEscapeKeyDown,
          b = e.onShow,
          w = e.onHide,
          x = e.container,
          k = e.autoFocus,
          E = void 0 === k || k,
          C = e.enforceFocus,
          N = void 0 === C || C,
          O = e.restoreFocus,
          j = void 0 === O || O,
          P = e.restoreFocusOptions,
          R = e.onEntered,
          T = e.onExit,
          _ = e.onExiting,
          L = e.onEnter,
          A = e.onEntering,
          D = e.onExited,
          z = e.backdropClassName,
          F = e.manager,
          I = e.renderStaticNode,
          B = void 0 !== I && I,
          M = it(e, El),
          U = (0, t.useRef)();
        r = dt(r, "offcanvas");
        var W = ((0, t.useContext)(Ei) || {}).onToggle,
          H = S((0, t.useState)(!1), 2),
          V = H[0],
          $ = H[1],
          q = Ai(s || "xs", "up");
        (0, t.useEffect)(
          function () {
            $(s ? f && !q : f);
          },
          [f, s, q]
        );
        var K = Xn(function () {
            null == W || W(), null == w || w();
          }),
          Q = (0, t.useMemo)(
            function () {
              return { onHide: K };
            },
            [K]
          );
        var G = (0, t.useCallback)(
            function (e) {
              return (0, st.jsx)(
                "div",
                at(
                  at({}, e),
                  {},
                  { className: ut()("".concat(r, "-backdrop"), z) }
                )
              );
            },
            [z, r]
          ),
          J = function (e) {
            return (0, st.jsx)(
              "div",
              at(
                at(at({}, e), M),
                {},
                {
                  className: ut()(
                    a,
                    s ? "".concat(r, "-").concat(s) : r,
                    "".concat(r, "-").concat(u)
                  ),
                  "aria-labelledby": i,
                  children: o,
                }
              )
            );
          };
        return (0, st.jsxs)(st.Fragment, {
          children: [
            !V && (s || B) && J({}),
            (0, st.jsx)(il.Provider, {
              value: Q,
              children: (0, st.jsx)(el, {
                show: V,
                ref: n,
                backdrop: p,
                container: x,
                keyboard: m,
                autoFocus: E,
                enforceFocus: N && !y,
                restoreFocus: j,
                restoreFocusOptions: P,
                onEscapeKeyDown: g,
                onShow: b,
                onHide: K,
                onEnter: function (e) {
                  e && (e.style.visibility = "visible");
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  null == L || L.apply(void 0, [e].concat(n));
                },
                onEntering: A,
                onEntered: R,
                onExit: T,
                onExiting: _,
                onExited: function (e) {
                  e && (e.style.visibility = "");
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  null == D || D.apply(void 0, n);
                },
                manager:
                  F ||
                  (y
                    ? (U.current ||
                        (U.current = new Sl({ handleContainerOverflow: !1 })),
                      U.current)
                    : (function (e) {
                        return gl || (gl = new kl(e)), gl;
                      })()),
                transition: Cl,
                backdropTransition: Nl,
                renderBackdrop: G,
                renderDialog: J,
              }),
            }),
          ],
        });
      });
      Ol.displayName = "Offcanvas";
      var jl = Object.assign(Ol, { Body: tl, Header: dl, Title: pl }),
        Pl = t.forwardRef(function (e, n) {
          var r = (0, t.useContext)(Ei);
          return (0,
          st.jsx)(jl, at(at({ ref: n, show: !(null == r || !r.expanded) }, e), {}, { renderStaticNode: !0 }));
        });
      Pl.displayName = "NavbarOffcanvas";
      var Rl = Pl,
        Tl = [
          "bsPrefix",
          "expand",
          "variant",
          "bg",
          "fixed",
          "sticky",
          "className",
          "as",
          "expanded",
          "onToggle",
          "onSelect",
          "collapseOnSelect",
        ],
        _l = bt("navbar-text", { Component: "span" }),
        Ll = t.forwardRef(function (e, n) {
          var r = Kn(e, { expanded: "onToggle" }),
            a = r.bsPrefix,
            o = r.expand,
            i = void 0 === o || o,
            l = r.variant,
            u = void 0 === l ? "light" : l,
            s = r.bg,
            c = r.fixed,
            f = r.sticky,
            d = r.className,
            p = r.as,
            h = void 0 === p ? "nav" : p,
            m = r.expanded,
            v = r.onToggle,
            y = r.onSelect,
            g = r.collapseOnSelect,
            b = void 0 !== g && g,
            w = it(r, Tl),
            x = dt(a, "navbar"),
            k = (0, t.useCallback)(
              function () {
                null == y || y.apply(void 0, arguments),
                  b && m && (null == v || v(!1));
              },
              [y, b, m, v]
            );
          void 0 === w.role && "nav" !== h && (w.role = "navigation");
          var S = "".concat(x, "-expand");
          "string" === typeof i && (S = "".concat(S, "-").concat(i));
          var E = (0, t.useMemo)(
            function () {
              return {
                onToggle: function () {
                  return null == v ? void 0 : v(!m);
                },
                bsPrefix: x,
                expanded: !!m,
                expand: i,
              };
            },
            [x, m, i, v]
          );
          return (0,
          st.jsx)(Ei.Provider, { value: E, children: (0, st.jsx)(di.Provider, { value: k, children: (0, st.jsx)(h, at(at({ ref: n }, w), {}, { className: ut()(d, x, i && S, u && "".concat(x, "-").concat(u), s && "bg-".concat(s), f && "sticky-".concat(f), c && "fixed-".concat(c)) })) }) });
        });
      Ll.displayName = "Navbar";
      var Al = Object.assign(Ll, {
        Brand: mi,
        Collapse: Oi,
        Offcanvas: Rl,
        Text: _l,
        Toggle: Ri,
      });
      n(573);
      var Dl = t.createContext(null);
      Dl.displayName = "NavContext";
      var zl = Dl,
        Fl = t.createContext(null),
        Il = ["as", "active", "eventKey"];
      function Bl(e) {
        var n = e.key,
          r = e.onClick,
          a = e.active,
          o = e.id,
          i = e.role,
          l = e.disabled,
          u = (0, t.useContext)(di),
          s = (0, t.useContext)(zl),
          c = (0, t.useContext)(Fl),
          f = a,
          d = { role: i };
        if (s) {
          i || "tablist" !== s.role || (d.role = "tab");
          var p = s.getControllerId(null != n ? n : null),
            h = s.getControlledId(null != n ? n : null);
          (d[Bi("event-key")] = n),
            (d.id = p || o),
            (!(f = null == a && null != n ? s.activeKey === n : a) &&
              ((null != c && c.unmountOnExit) ||
                (null != c && c.mountOnEnter))) ||
              (d["aria-controls"] = h);
        }
        return (
          "tab" === d.role &&
            ((d["aria-selected"] = f),
            f || (d.tabIndex = -1),
            l && ((d.tabIndex = -1), (d["aria-disabled"] = !0))),
          (d.onClick = Xn(function (e) {
            l ||
              (null == r || r(e),
              null != n && u && !e.isPropagationStopped() && u(n, e));
          })),
          [d, { isActive: f }]
        );
      }
      var Ml = t.forwardRef(function (e, t) {
        var n = e.as,
          r = void 0 === n ? Mn : n,
          a = e.active,
          o = e.eventKey,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, Il),
          l = S(Bl(Object.assign({ key: fi(o, i.href), active: a }, i)), 2),
          u = l[0],
          s = l[1];
        return (
          (u[Bi("active")] = s.isActive),
          (0, st.jsx)(r, Object.assign({}, i, u, { ref: t }))
        );
      });
      Ml.displayName = "NavItem";
      var Ul = Ml,
        Wl = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
      var Hl = function () {},
        Vl = Bi("event-key"),
        $l = t.forwardRef(function (e, n) {
          var r,
            a,
            o = e.as,
            i = void 0 === o ? "div" : o,
            l = e.onSelect,
            u = e.activeKey,
            s = e.role,
            c = e.onKeyDown,
            f = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                a = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
              return a;
            })(e, Wl),
            d = (0, t.useReducer)(function (e) {
              return !e;
            }, !1)[1],
            p = (0, t.useRef)(!1),
            h = (0, t.useContext)(di),
            m = (0, t.useContext)(Fl);
          m &&
            ((s = s || "tablist"),
            (u = m.activeKey),
            (r = m.getControlledId),
            (a = m.getControllerId));
          var v = (0, t.useRef)(null),
            y = function (e) {
              var t = v.current;
              if (!t) return null;
              var n = vl(t, "[".concat(Vl, "]:not([aria-disabled=true])")),
                r = t.querySelector("[aria-selected=true]");
              if (!r || r !== document.activeElement) return null;
              var a = n.indexOf(r);
              if (-1 === a) return null;
              var o = a + e;
              return (
                o >= n.length && (o = 0), o < 0 && (o = n.length - 1), n[o]
              );
            },
            g = function (e, t) {
              null != e && (null == l || l(e, t), null == h || h(e, t));
            };
          (0, t.useEffect)(function () {
            if (v.current && p.current) {
              var e = v.current.querySelector(
                "[".concat(Vl, "][aria-selected=true]")
              );
              null == e || e.focus();
            }
            p.current = !1;
          });
          var b = Dr(n, v);
          return (0, st.jsx)(di.Provider, {
            value: g,
            children: (0, st.jsx)(zl.Provider, {
              value: {
                role: s,
                activeKey: fi(u),
                getControlledId: r || Hl,
                getControllerId: a || Hl,
              },
              children: (0, st.jsx)(
                i,
                Object.assign({}, f, {
                  onKeyDown: function (e) {
                    if ((null == c || c(e), m)) {
                      var t, n;
                      switch (e.key) {
                        case "ArrowLeft":
                        case "ArrowUp":
                          t = y(-1);
                          break;
                        case "ArrowRight":
                        case "ArrowDown":
                          t = y(1);
                          break;
                        default:
                          return;
                      }
                      if (t)
                        e.preventDefault(),
                          g(
                            t.dataset[
                              ((n = "EventKey"), "".concat("rrUi").concat(n))
                            ] || null,
                            e
                          ),
                          (p.current = !0),
                          d();
                    }
                  },
                  ref: b,
                  role: s,
                })
              ),
            }),
          });
        });
      $l.displayName = "Nav";
      var ql = Object.assign($l, { Item: Ul }),
        Kl = bt("nav-item"),
        Ql = ["bsPrefix", "className", "as", "active", "eventKey", "disabled"],
        Gl = t.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.as,
            o = void 0 === a ? rr : a,
            i = e.active,
            l = e.eventKey,
            u = e.disabled,
            s = void 0 !== u && u,
            c = it(e, Ql);
          n = dt(n, "nav-link");
          var f = S(
              Bl(at({ key: fi(l, c.href), active: i, disabled: s }, c)),
              2
            ),
            d = f[0],
            p = f[1];
          return (0,
          st.jsx)(o, at(at(at({}, c), d), {}, { ref: t, disabled: s, className: ut()(r, n, s && "disabled", p.isActive && "active") }));
        });
      Gl.displayName = "NavLink";
      var Jl = Gl,
        Yl = [
          "as",
          "bsPrefix",
          "variant",
          "fill",
          "justify",
          "navbar",
          "navbarScroll",
          "className",
          "activeKey",
        ],
        Xl = t.forwardRef(function (e, n) {
          var r,
            a,
            o,
            i = Kn(e, { activeKey: "onSelect" }),
            l = i.as,
            u = void 0 === l ? "div" : l,
            s = i.bsPrefix,
            c = i.variant,
            f = i.fill,
            d = void 0 !== f && f,
            p = i.justify,
            h = void 0 !== p && p,
            m = i.navbar,
            v = i.navbarScroll,
            y = i.className,
            g = i.activeKey,
            b = it(i, Yl),
            w = dt(s, "nav"),
            x = !1,
            k = (0, t.useContext)(Ei),
            S = (0, t.useContext)(Ct);
          return (
            k
              ? ((a = k.bsPrefix), (x = null == m || m))
              : S && (o = S.cardHeaderBsPrefix),
            (0, st.jsx)(
              ql,
              at(
                {
                  as: u,
                  ref: n,
                  activeKey: g,
                  className: ut()(
                    y,
                    ((r = {}),
                    nt(r, w, !x),
                    nt(r, "".concat(a, "-nav"), x),
                    nt(r, "".concat(a, "-nav-scroll"), x && v),
                    nt(r, "".concat(o, "-").concat(c), !!o),
                    nt(r, "".concat(w, "-").concat(c), !!c),
                    nt(r, "".concat(w, "-fill"), d),
                    nt(r, "".concat(w, "-justified"), h),
                    r)
                  ),
                },
                b
              )
            )
          );
        });
      Xl.displayName = "Nav";
      var Zl = Object.assign(Xl, { Item: Kl, Link: Jl }),
        eu = function () {
          var e = S((0, t.useState)(!1), 2),
            n = e[0],
            r = e[1],
            a = {
              navbarSvg: {
                margin: 10,
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)",
              },
              navStyle: { fontSize: 26, color: "#0047ab", margin: 15 },
              navbar: { marginBottom: 60, marginTop: 15 },
            };
          return (0, st.jsx)(Al, {
            expanded: n,
            onToggle: r,
            collapseOnSelect: !0,
            expand: "lg",
            className: "text-center",
            style: a.navbar,
            children: (0, st.jsxs)("div", {
              className: "container-fluid",
              children: [
                (0, st.jsx)(Al.Toggle, {
                  "aria-controls": "navbar",
                  "aria-expanded": "false",
                  "aria-label": "Toggle navigation",
                  children: (0, st.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "30",
                    height: "30",
                    fill: "#0047ab",
                    viewBox: "0 0 16 16",
                    children: (0, st.jsx)("path", {
                      fillRule: "evenodd",
                      d: "M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75zM1.75 12a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75z",
                    }),
                  }),
                }),
                (0, st.jsx)(Al.Collapse, {
                  id: "basic-navbar-nav justify-content-center",
                  onClick: function () {
                    return r(!1);
                  },
                  children: (0, st.jsx)("div", {
                    className: "mx-auto",
                    children: (0, st.jsxs)(Zl, {
                      className: "me-auto mt-2 justify-content-center mx-auto",
                      children: [
                        (0, st.jsx)(Zo, {
                          to: "/",
                          style: a.navStyle,
                          "aria-label": "Link to Homepage",
                          children: "Home",
                        }),
                        (0, st.jsx)(Zo, {
                          to: "/articles",
                          style: a.navStyle,
                          "aria-label":
                            "Link to Articles and Tech Content page",
                          children: "Articles",
                        }),
                        (0, st.jsx)(Zo, {
                          to: "/profile",
                          style: a.navStyle,
                          "aria-label": "Link to Profile page",
                          children: "Profile",
                        }),
                        (0, st.jsx)(Zo, {
                          to: "/certifications",
                          style: a.navStyle,
                          "aria-label": "Link to Certifications page",
                          children: "Certifications",
                        }),
                        (0, st.jsx)(Zo, {
                          to: "/contactforms",
                          style: a.navStyle,
                          "aria-label": "Link to Contact page",
                          children: "Contact",
                        }),
                        (0, st.jsx)("a", {
                          href: "https://www.linkedin.com/in/alexander-allen-392225251/",
                          target: "_blank",
                          rel: "noreferrer",
                          "aria-label": "LinkedIn Profile",
                          children: (0, st.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            fill: "currentColor",
                            className: "bi bi-linkedin",
                            viewBox: "0 0 16 16",
                            style: a.navbarSvg,
                            children: (0, st.jsx)("path", {
                              d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
                            }),
                          }),
                        }),
                        (0, st.jsx)("a", {
                          href: "https://github.com/AlexAllen247",
                          target: "_blank",
                          rel: "noreferrer",
                          "aria-label": "Github Profile",
                          children: (0, st.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            fill: "currentColor",
                            className: "bi bi-github",
                            viewBox: "0 0 16 16",
                            style: a.navbarSvg,
                            children: (0, st.jsx)("path", {
                              d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                            }),
                          }),
                        }),
                        (0, st.jsx)("a", {
                          href: "https://twitter.com/AlexAllen247",
                          target: "_blank",
                          rel: "noreferrer",
                          "aria-label": "Twitter Profile",
                          children: (0, st.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            fill: "currentColor",
                            className: "bi bi-twitter",
                            viewBox: "0 0 16 16",
                            style: a.navbarSvg,
                            children: (0, st.jsx)("path", {
                              d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        tu = function () {
          return (0, st.jsxs)("section", {
            className: "not-found",
            style: { textAlign: "center", padding: 50, margin: 50 },
            children: [
              (0, st.jsx)("h2", {
                children: "Oops page not found, please try a different URL.",
              }),
              (0, st.jsx)(Xo, {
                to: "/",
                "aria-label": "Link to Homepage",
                children: (0, st.jsx)("h3", { children: "Return to Homepage" }),
              }),
            ],
          });
        },
        nu = n.p + "static/media/WebApplicationPic.52cf566b4c262e34c04d.png",
        ru = function () {
          var e = {
            cardStyle: {
              boxShadow: "10px 10px 10px 10px rgba(0, 71, 171, 0.15)",
              textAlign: "center",
            },
            header: {
              fontSize: "2rem",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
            },
            paragraph: { marginBottom: "1rem", fontSize: 20 },
            image: {
              width: "80%",
              height: "80%",
              border: "none",
              marginBottom: 20,
            },
            linkToContact: { color: "#007bff", textDecoration: "none" },
          };
          return (0, st.jsx)("section", {
            className: "urbanization-services",
            children: (0, st.jsx)(mt, {
              children: (0, st.jsxs)(Mt, {
                className: "my-3",
                style: e.cardStyle,
                children: [
                  (0, st.jsx)(Mt.Header, {
                    children: (0, st.jsx)("h2", {
                      style: e.header,
                      children: "Custom Built Web Applications",
                    }),
                  }),
                  (0, st.jsxs)(Mt.Body, {
                    children: [
                      (0, st.jsx)("div", {
                        children: (0, st.jsx)("img", {
                          src: nu,
                          title: "Web Applications",
                          "aria-label": "Web Applications",
                          alt: "Web Applications",
                          style: e.image,
                        }),
                      }),
                      (0, st.jsx)("p", {
                        style: e.paragraph,
                        children:
                          "Websites and innovative web applications tailored specifically for your business needs. Whether you're looking to improve the design, functionality, or overall website performance, TeckBuff offers one-on-one guidance to enhance your web presence.",
                      }),
                      (0, st.jsxs)("p", {
                        style: e.paragraph,
                        children: [
                          " ",
                          (0, st.jsx)(Xo, {
                            to: "/contactforms",
                            "aria-label": "Link to Contact page",
                            style: e.linkToContact,
                            children: "Contact TeckBuff",
                          }),
                          " ",
                          "to learn more about our web development services.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        au = n.p + "static/media/ConsultationTeckbuff.ab31659fda34a7484163.png",
        ou = function () {
          var e = {
            cardStyle: {
              boxShadow: "10px 10px 10px 10px rgba(0, 71, 171, 0.15)",
              textAlign: "center",
            },
            header: {
              fontSize: "2rem",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
            },
            paragraph: { marginBottom: "1rem", fontSize: 20 },
            image: {
              width: "80%",
              height: "80%",
              border: "none",
              marginBottom: 20,
            },
            linkToContact: { color: "#007bff", textDecoration: "none" },
          };
          return (0, st.jsx)("section", {
            className: "consultation",
            children: (0, st.jsx)(mt, {
              children: (0, st.jsxs)(Mt, {
                className: "my-3",
                style: e.cardStyle,
                children: [
                  (0, st.jsx)(Mt.Header, {
                    children: (0, st.jsx)("h2", {
                      style: e.header,
                      children: "Consultation and Writing Services",
                    }),
                  }),
                  (0, st.jsxs)(Mt.Body, {
                    children: [
                      (0, st.jsx)("div", {
                        children: (0, st.jsx)("img", {
                          src: au,
                          title: "Consultation Image",
                          "aria-label": "Consultation Image",
                          style: e.image,
                          loading: "lazy",
                        }),
                      }),
                      (0, st.jsx)("h4", {
                        style: e.header,
                        children: "Website update",
                      }),
                      (0, st.jsx)("p", {
                        style: e.paragraph,
                        children:
                          "If you are considering updating your website TeckBuff can offer assistance to ensure your digital platform reflects your vision and engages your audience effectively.",
                      }),
                      (0, st.jsx)("h4", {
                        style: e.header,
                        children: "Website performance",
                      }),
                      (0, st.jsx)("p", {
                        style: e.paragraph,
                        children:
                          "Concerned about the performance of your website or web applications? Sign up for a TeckBuff Web Check. Our sophisticated diagnostics can quickly identify potentially troublesome issues compromising performance and security.",
                      }),
                      (0, st.jsx)("h4", {
                        style: e.header,
                        children: "Reports, seminars and articles",
                      }),
                      (0, st.jsxs)("p", {
                        style: e.paragraph,
                        children: [
                          "TeckBuff specializes in bridging the gap between business and IT. Whether it be written reports, seminar briefings or",
                          " ",
                          (0, st.jsx)(Xo, {
                            to: "/articles",
                            style: e.linkToContact,
                            "aria-label":
                              "Link to Articles and Tech Content page",
                            children: "articles",
                          }),
                          " ",
                          "for publication, TeckBuff can provide insightful, well written briefs and presentations for a general business audience.",
                        ],
                      }),
                      (0, st.jsxs)("p", {
                        style: e.paragraph,
                        children: [
                          " ",
                          (0, st.jsx)(Xo, {
                            to: "/contactforms",
                            "aria-label": "Link to Contact page",
                            style: e.linkToContact,
                            children: "Contact TeckBuff",
                          }),
                          " ",
                          "to arrange a consultation or other services.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        iu = function () {
          return (0, st.jsxs)("section", {
            style: { display: "flex", flexDirection: "column", gap: "2rem" },
            className: "services",
            children: [(0, st.jsx)(ru, {}), (0, st.jsx)(ou, {})],
          });
        },
        lu = {
          getAll: (function () {
            var e = tt(
              Ze().mark(function e() {
                var t;
                return Ze().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            Uo.get("/api/techcontents")
                          );
                        case 3:
                          return (t = e.sent), e.abrupt("return", t.data);
                        case 7:
                          throw (
                            ((e.prev = 7),
                            (e.t0 = e.catch(0)),
                            console.error("Failed to fetch articles:", e.t0),
                            e.t0)
                          );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
        },
        uu = lu,
        su = function () {
          var e = S((0, t.useState)({}), 2),
            n = e[0],
            r = e[1],
            a = S((0, t.useState)([]), 2),
            o = a[0],
            i = a[1],
            l = (function () {
              var e = tt(
                Ze().mark(function e() {
                  var t;
                  return Ze().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), uu.getAll();
                        case 2:
                          (t = e.sent), i(t);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          (0, t.useEffect)(function () {
            l();
          }, []);
          var u = {
            cardStyle: {
              boxShadow: "10px 10px 10px 10px rgba(0, 71, 171, 0.15)",
              textAlign: "center",
            },
            header: {
              fontSize: "2rem",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
            },
            iframe: { width: "100%", height: "350px", border: "none" },
            thumbnail: {
              width: "100px",
              height: "auto",
              display: "block",
              margin: "0 auto",
              marginBottom: "1rem",
            },
            paragraph: { marginBottom: "1rem", fontSize: 20 },
          };
          return (0, st.jsx)("section", {
            className: "tech-content",
            children: (0, st.jsx)(mt, {
              role: "region",
              "aria-labelledby": "tech-content-heading",
              children: (0, st.jsxs)(Mt, {
                className: "my-3",
                style: u.cardStyle,
                children: [
                  (0, st.jsx)(Mt.Header, {
                    children: (0, st.jsx)("h2", {
                      id: "tech-content-heading",
                      style: u.header,
                      children: "Articles",
                    }),
                  }),
                  (0, st.jsx)(Mt.Body, {
                    children: o.map(function (e, t) {
                      return (0, st.jsx)(
                        Mt,
                        {
                          className: "article-card",
                          children: (0, st.jsxs)(Mt.Body, {
                            children: [
                              (0, st.jsx)("img", {
                                src: e.thumbnailImageUrl,
                                alt: "Thumbnail ".concat(t + 1),
                                style: u.thumbnail,
                              }),
                              (0, st.jsx)("p", {
                                style: u.paragraph,
                                children: e.description,
                              }),
                              n[t] &&
                                (0, st.jsx)("iframe", {
                                  src: e.embedUrl,
                                  height: "1310",
                                  width: "504",
                                  allowFullScreen: "",
                                  title: "Embedded post ".concat(t + 1),
                                  style: u.iframe,
                                }),
                              (0, st.jsx)(Hn, {
                                onClick: function () {
                                  return (function (e) {
                                    r(function (t) {
                                      return at(
                                        at({}, t),
                                        {},
                                        nt({}, e, !t[e])
                                      );
                                    });
                                  })(t);
                                },
                                "aria-expanded": n[t],
                                className: "btn-custom btn-block btn-lg",
                                children: n[t] ? "Hide" : "Show",
                              }),
                            ],
                          }),
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        cu = function () {
          var e = {
            app: { fontFamily: "Arial Unicode MS" },
            cookie: { background: "#333" },
            button: { color: "#fff", background: "#0047ab", fontSize: "13px" },
          };
          return (0, st.jsx)("main", {
            children: (0, st.jsxs)("div", {
              className: "app",
              children: [
                (0, st.jsx)(si, {}),
                (0, st.jsx)(eu, {}),
                (0, st.jsx)(ci, {}),
                (0, st.jsxs)(Le, {
                  children: [
                    (0, st.jsx)(Te, {
                      path: "/",
                      element: (0, st.jsx)(iu, {}),
                    }),
                    (0, st.jsx)(Te, {
                      path: "/profile",
                      element: (0, st.jsx)(li, {}),
                    }),
                    (0, st.jsx)(Te, {
                      path: "/articles",
                      element: (0, st.jsx)(su, {}),
                    }),
                    (0, st.jsx)(Te, {
                      path: "/certifications",
                      element: (0, st.jsx)(ai, {}),
                    }),
                    (0, st.jsx)(Te, {
                      path: "/contactforms",
                      element: (0, st.jsx)(Vo, {}),
                    }),
                    (0, st.jsx)(Te, {
                      path: "*",
                      element: (0, st.jsx)(tu, {}),
                    }),
                  ],
                }),
                (0, st.jsx)(ri, {}),
                (0, st.jsx)(Xe, {
                  location: "bottom",
                  buttonText: "Accept",
                  cookieName: "myCookieName",
                  style: e.cookie,
                  buttonStyle: e.button,
                  children:
                    "This website uses cookies to ensure you get the best experience on our website. By continuing to use this site, you consent to the use of cookies.",
                }),
              ],
            }),
          });
        };
      r.createRoot(document.getElementById("root")).render(
        (0, st.jsx)(Go, { children: (0, st.jsx)(cu, {}) })
      );
    })();
})();
//# sourceMappingURL=main.a58f6bfb.js.map
